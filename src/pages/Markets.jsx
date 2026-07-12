import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  Search, ArrowUpRight, ArrowDownRight, ArrowUpDown,
  TrendingUp, TrendingDown, Flame, Globe2, Coins, BarChart3,
} from 'lucide-react'
import SEO, { breadcrumbJsonLd } from '../lib/seo'
import PageHero from '../components/shared/PageHero'
import Container from '../components/shared/Container'
import CoinIcon from '../components/shared/CoinIcon'
import Sparkline from '../components/shared/Sparkline'
import { GrowthPromoCard, GrowthPromoBanner } from '../components/shared/GrowthPromo'
import { ASSETS, formatUsd, formatCompactUsd } from '../lib/assets-data'
import { useMarketData, marketFor, useSparklineSeries } from '../lib/useLivePrices'

const TABS = [
  { id: 'all', label: 'All assets', icon: Coins },
  { id: 'gainers', label: 'Top gainers', icon: TrendingUp },
  { id: 'losers', label: 'Top losers', icon: TrendingDown },
  { id: 'volume', label: 'Top volume', icon: Flame },
]

const COLUMNS = [
  { key: 'rank', label: '#', align: 'left', sortable: false },
  { key: 'name', label: 'Asset', align: 'left' },
  { key: 'price', label: 'Price', align: 'right' },
  { key: 'change1h', label: '1h %', align: 'right', hide: 'hidden lg:table-cell' },
  { key: 'change24h', label: '24h %', align: 'right' },
  { key: 'change7d', label: '7d %', align: 'right', hide: 'hidden md:table-cell' },
  { key: 'marketCap', label: 'Market Cap', align: 'right', hide: 'hidden sm:table-cell' },
  { key: 'volume24h', label: 'Volume (24h)', align: 'right', hide: 'hidden xl:table-cell' },
  { key: 'sparkline', label: 'Last 7 Days', align: 'right', hide: 'hidden xl:table-cell', sortable: false },
]

function ChangeBadge({ value }) {
  if (value == null) return <span className="text-ink-950/30">—</span>
  const up = value >= 0
  return (
    <span className={`inline-flex items-center gap-1 justify-end font-semibold ${up ? 'text-mint-500' : 'text-danger-500'}`}>
      {up ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}
      {Math.abs(value).toFixed(2)}%
    </span>
  )
}

function Row({ asset, m }) {
  const sparklineSeries = useSparklineSeries(m.sparkline, asset.symbol)
  return (
    <tr className="group border-b border-surface-100 last:border-0 hover:bg-surface-50/80 transition-colors">
      <td className="px-4 py-4 text-ink-950/40 font-medium tabular-nums">{m.rank ?? '—'}</td>
      <td className="px-2 py-4">
        <Link to={`/crypto/${asset.id}`} className="flex items-center gap-3">
          <CoinIcon asset={asset} image={m.image} size="sm" />
          <span>
            <span className="flex items-center gap-1.5">
              <span className="font-semibold text-ink-950 group-hover:text-brand-600 transition-colors">{asset.name}</span>
            </span>
            <span className="block text-xs text-ink-950/40">{asset.symbol}</span>
          </span>
        </Link>
      </td>
      <td className="px-4 py-4 text-right font-semibold text-ink-950 tabular-nums">{formatUsd(m.price)}</td>
      <td className="hidden lg:table-cell px-4 py-4 text-right tabular-nums"><ChangeBadge value={m.change1h} /></td>
      <td className="px-4 py-4 text-right tabular-nums"><ChangeBadge value={m.change24h} /></td>
      <td className="hidden md:table-cell px-4 py-4 text-right tabular-nums"><ChangeBadge value={m.change7d} /></td>
      <td className="hidden sm:table-cell px-4 py-4 text-right text-ink-950/70 tabular-nums">{formatCompactUsd(m.marketCap)}</td>
      <td className="hidden xl:table-cell px-4 py-4 text-right text-ink-950/70 tabular-nums">{formatCompactUsd(m.volume24h)}</td>
      <td className="hidden xl:table-cell px-4 py-4">
        <div className="flex justify-end">
          <Sparkline data={sparklineSeries} positive={(m.change7d ?? m.change24h) >= 0} />
        </div>
      </td>
    </tr>
  )
}

export default function Markets() {
  const { market, isLiveFeed } = useMarketData()
  const [query, setQuery] = useState('')
  const [tab, setTab] = useState('all')
  const [sort, setSort] = useState({ key: 'rank', dir: 'asc' })

  const enriched = useMemo(
    () => ASSETS.map(asset => ({ asset, m: marketFor(market, asset) })),
    [market]
  )

  const globalStats = useMemo(() => {
    const totalMarketCap = enriched.reduce((sum, { m }) => sum + (m.marketCap || 0), 0)
    const totalVolume = enriched.reduce((sum, { m }) => sum + (m.volume24h || 0), 0)
    const btc = enriched.find(({ asset }) => asset.id === 'bitcoin')
    const btcDominance = btc && totalMarketCap ? (btc.m.marketCap / totalMarketCap) * 100 : null
    const gainers = enriched.filter(({ m }) => (m.change24h ?? 0) >= 0).length
    return { totalMarketCap, totalVolume, btcDominance, gainers, losers: enriched.length - gainers }
  }, [enriched])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    let list = enriched.filter(({ asset }) => !q || asset.name.toLowerCase().includes(q) || asset.symbol.toLowerCase().includes(q))

    if (tab === 'gainers') list = list.filter(({ m }) => (m.change24h ?? 0) > 0)
    if (tab === 'losers') list = list.filter(({ m }) => (m.change24h ?? 0) < 0)

    const key = tab === 'gainers' || tab === 'losers' ? 'change24h' : tab === 'volume' ? 'volume24h' : sort.key
    const dir = sort.dir === 'asc' ? 1 : -1
    const effectiveDir = tab === 'gainers' ? -1 : tab === 'losers' ? 1 : tab === 'volume' ? -1 : dir

    list = [...list].sort((a, b) => {
      const av = key === 'name' ? a.asset.name : a.m[key]
      const bv = key === 'name' ? b.asset.name : b.m[key]
      if (typeof av === 'string') return effectiveDir * av.localeCompare(bv)
      return effectiveDir * ((av ?? -Infinity) - (bv ?? -Infinity))
    })

    return list
  }, [enriched, query, tab, sort])

  function toggleSort(key) {
    setSort(prev => (prev.key === key ? { key, dir: prev.dir === 'asc' ? 'desc' : 'asc' } : { key, dir: 'desc' }))
  }

  return (
    <>
      <SEO
        title="Live Crypto Prices & Markets"
        description="Track live prices, market cap, volume, and 24h/7d performance for Bitcoin, Ethereum, and 300+ other cryptocurrencies on CoinBidex."
        path="/markets"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }])}
      />

      <PageHero
        eyebrow="Live data"
        title="Crypto markets"
        description="Real-time prices, market cap, and trading volume for every asset available on CoinBidex — updated continuously."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }]}
      />

      <Container className="pb-20">
        {/* Global stats strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-2xl border border-surface-200 bg-white p-5 shadow-sm">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-ink-950/45"><Globe2 size={13} /> Market Cap</div>
            <div className="mt-1.5 text-lg font-bold text-ink-950 tabular-nums">{formatCompactUsd(globalStats.totalMarketCap)}</div>
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-ink-950/45"><BarChart3 size={13} /> 24h Volume</div>
            <div className="mt-1.5 text-lg font-bold text-ink-950 tabular-nums">{formatCompactUsd(globalStats.totalVolume)}</div>
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-ink-950/45"><Coins size={13} /> BTC Dominance</div>
            <div className="mt-1.5 text-lg font-bold text-ink-950 tabular-nums">{globalStats.btcDominance ? `${globalStats.btcDominance.toFixed(1)}%` : '—'}</div>
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-ink-950/45"><TrendingUp size={13} /> Gainers / Losers</div>
            <div className="mt-1.5 text-lg font-bold tabular-nums">
              <span className="text-mint-500">{globalStats.gainers}</span>
              <span className="text-ink-950/30"> / </span>
              <span className="text-danger-500">{globalStats.losers}</span>
            </div>
          </div>
        </div>

        {/* Controls: search + tabs */}
        <div className="mt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {TABS.map(t => {
              const Icon = t.icon
              const active = tab === t.id
              return (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-medium transition-colors ${
                    active ? 'bg-brand-500 text-white shadow-sm shadow-brand-500/25' : 'bg-surface-50 text-ink-950/60 hover:bg-surface-100'
                  }`}
                >
                  <Icon size={14} /> {t.label}
                </button>
              )
            })}
          </div>

          <div className="relative max-w-sm w-full lg:w-72">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-950/35" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search by name or symbol"
              aria-label="Search markets"
              className="w-full rounded-xl border border-surface-200 bg-white py-2.5 pl-10 pr-4 text-sm text-ink-950 placeholder:text-ink-950/35 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/10"
            />
          </div>
        </div>

        {!isLiveFeed && (
          <p className="mt-4 text-xs text-ink-950/40">Showing illustrative data while we connect to the live feed — figures update automatically once available.</p>
        )}

        {/* Market table */}
        <div className="mt-6 overflow-x-auto overflow-hidden rounded-2xl border border-surface-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-surface-200 bg-surface-50 text-left text-ink-950/45">
                {COLUMNS.map(col => (
                  <th key={col.key} className={`px-4 py-3 font-medium whitespace-nowrap ${col.align === 'right' ? 'text-right' : ''} ${col.hide || ''}`}>
                    {col.sortable === false ? col.label : (
                      <button
                        onClick={() => toggleSort(col.key)}
                        className={`inline-flex items-center gap-1 hover:text-ink-950 transition-colors ${col.align === 'right' ? 'flex-row-reverse' : ''}`}
                      >
                        {col.label} <ArrowUpDown size={11} className="opacity-50" />
                      </button>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.slice(0, 5).map(({ asset, m }) => (
                <Row key={asset.id} asset={asset} m={m} />
              ))}

              {tab === 'all' && !query && (
                <tr className="border-b border-surface-100">
                  <td colSpan={COLUMNS.length} className="p-4">
                    <GrowthPromoCard variant="list" />
                  </td>
                </tr>
              )}

              {filtered.slice(5).map(({ asset, m }) => (
                <Row key={asset.id} asset={asset} m={m} />
              ))}

              {filtered.length === 0 && (
                <tr><td colSpan={COLUMNS.length} className="px-5 py-10 text-center text-ink-950/40">No assets match &ldquo;{query}&rdquo;</td></tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Listing / advertising CTAs */}
        <GrowthPromoBanner />
      </Container>
    </>
  )
}
