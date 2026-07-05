import { useEffect, useState } from 'react'
import { ASSETS } from './assets-data'

/**
 * Fetches live prices for the marketing site's price displays from
 * CoinGecko's public API (no key required for this endpoint). This is a
 * *display-only* feed for the marketing site — it has nothing to do with
 * the actual trading engine on trade.coinbidex.com, which sources its own
 * prices server-side (see marketDataService.ts in that project).
 *
 * Falls back to static illustrative prices (from assets-data.js) if the
 * request fails or is rate-limited, so the page never breaks or shows
 * empty state just because a third-party API hiccuped.
 */
export function useLivePrices() {
  const [prices, setPrices] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    const ids = ASSETS.map(a => a.id).join(',')

    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`)
      .then(res => {
        if (!res.ok) throw new Error(`CoinGecko ${res.status}`)
        return res.json()
      })
      .then(data => {
        if (!cancelled) setPrices(data)
      })
      .catch(() => {
        // Silent fallback — components read ASSETS[].fallbackPrice instead.
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => { cancelled = true }
  }, [])

  return { prices, loading }
}

export function priceFor(prices, asset) {
  const live = prices?.[asset.id]
  return {
    price: live?.usd ?? asset.fallbackPrice,
    change: live?.usd_24h_change ?? asset.fallbackChange,
    isLive: Boolean(live),
  }
}
