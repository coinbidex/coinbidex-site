import { useEffect, useState, useMemo } from 'react'
import { ASSETS } from './assets-data'

/**
 * Fetches live, enterprise-grade market data for the marketing site's price
 * displays from CoinGecko's public `/coins/markets` endpoint (no key
 * required). This is a *display-only* feed for the marketing site — it has
 * nothing to do with the actual trading engine on trade.coinbidex.com, which
 * sources its own prices server-side (see marketDataService.ts there).
 *
 * Unlike a plain "price + 24h change" feed, `/coins/markets` also returns
 * each coin's official icon, market cap, rank, 24h volume, circulating /
 * total / max supply, all-time high & low, and (with sparkline=true) a
 * ready-made 7-day price series — everything an enterprise market page
 * needs, in one request.
 *
 * Falls back to the static illustrative data in assets-data.js if the
 * request fails or is rate-limited, so the page never breaks or shows an
 * empty state just because a third-party API hiccuped.
 */
export function useMarketData() {
  const [market, setMarket] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isLiveFeed, setIsLiveFeed] = useState(false)

  useEffect(() => {
    let cancelled = false
    const ids = ASSETS.map(a => a.id).join(',')
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}&order=market_cap_desc&sparkline=true&price_change_percentage=1h,24h,7d`

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`CoinGecko ${res.status}`)
        return res.json()
      })
      .then(data => {
        if (cancelled) return
        const map = Object.fromEntries(data.map(c => [c.id, c]))
        setMarket(map)
        setIsLiveFeed(true)
      })
      .catch(() => {
        // Silent fallback — marketFor() below reads asset.fallback* instead.
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => { cancelled = true }
  }, [])

  return { market, loading, isLiveFeed }
}

/** Back-compat alias used by a couple of older components. */
export const useLivePrices = () => {
  const { market, loading } = useMarketData()
  return { prices: market, loading }
}

/**
 * Normalizes a single asset's data — live CoinGecko row if available,
 * illustrative fallback otherwise — into the flat shape components use.
 */
export function marketFor(market, asset) {
  const live = market?.[asset.id]
  return {
    image: live?.image ?? null,
    price: live?.current_price ?? asset.fallbackPrice,
    change1h: live?.price_change_percentage_1h_in_currency ?? null,
    change24h: live?.price_change_percentage_24h ?? asset.fallbackChange,
    change7d: live?.price_change_percentage_7d_in_currency ?? asset.fallbackChange7d ?? null,
    marketCap: live?.market_cap ?? asset.fallbackMarketCap ?? null,
    fdv: live?.fully_diluted_valuation ?? null,
    volume24h: live?.total_volume ?? asset.fallbackVolume ?? null,
    rank: live?.market_cap_rank ?? asset.fallbackRank ?? null,
    circulatingSupply: live?.circulating_supply ?? asset.fallbackSupply ?? null,
    totalSupply: live?.total_supply ?? null,
    maxSupply: live?.max_supply ?? asset.fallbackMaxSupply ?? null,
    high24h: live?.high_24h ?? null,
    low24h: live?.low_24h ?? null,
    ath: live?.ath ?? null,
    athChangePercentage: live?.ath_change_percentage ?? null,
    athDate: live?.ath_date ?? null,
    atl: live?.atl ?? null,
    atlChangePercentage: live?.atl_change_percentage ?? null,
    atlDate: live?.atl_date ?? null,
    sparkline: live?.sparkline_in_7d?.price ?? null,
    isLive: Boolean(live),
    // Legacy field name some components still read directly.
    change: live?.price_change_percentage_24h ?? asset.fallbackChange,
  }
}

/** Legacy helper kept for TickerTape/MarketSection-style call sites. */
export function priceFor(market, asset) {
  const m = marketFor(market, asset)
  return { price: m.price, change: m.change24h, isLive: m.isLive }
}

/**
 * Derives a resampled 30-point sparkline array (recharts-friendly objects)
 * from CoinGecko's raw ~168-point hourly 7d series, or a deterministic
 * illustrative curve when no live series is available yet.
 */
export function useSparklineSeries(rawSeries, seedSymbol) {
  return useMemo(() => {
    if (Array.isArray(rawSeries) && rawSeries.length > 1) {
      const step = Math.max(1, Math.floor(rawSeries.length / 30))
      const points = rawSeries.filter((_, i) => i % step === 0).map((v, i) => ({ day: i, value: v }))
      return points
    }
    // Deterministic illustrative fallback so charts never render empty.
    const points = []
    let v = 100
    const seed = (seedSymbol || 'X').charCodeAt(0)
    for (let i = 0; i < 30; i++) {
      v += Math.sin(i / 3 + seed) * 4 + (Math.sin(i * seed) * 0.5)
      points.push({ day: i, value: Math.max(v, 10) })
    }
    return points
  }, [rawSeries, seedSymbol])
}

/**
 * Fetches real historical price history for a single coin's detail-page
 * chart, with a selectable range. Falls back to a deterministic curve if
 * the request fails so the chart area never breaks.
 */
export function useCoinHistory(coinId, days) {
  const [series, setSeries] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`)
      .then(res => {
        if (!res.ok) throw new Error(`CoinGecko ${res.status}`)
        return res.json()
      })
      .then(data => {
        if (cancelled) return
        const points = (data.prices || []).map(([t, price]) => ({ t, price }))
        setSeries(points)
      })
      .catch(() => {
        if (!cancelled) setSeries(null)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => { cancelled = true }
  }, [coinId, days])

  return { series, loading }
}
