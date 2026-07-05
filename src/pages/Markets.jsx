import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Search, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import SEO, { breadcrumbJsonLd } from '../lib/seo'
import PageHero from '../components/shared/PageHero'
import Container from '../components/shared/Container'
import { ASSETS, formatUsd } from '../lib/assets-data'
import { useLivePrices, priceFor } from '../lib/useLivePrices'

export default function Markets() {
  const { prices } = useLivePrices()
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return ASSETS
    return ASSETS.filter(a => a.name.toLowerCase().includes(q) || a.symbol.toLowerCase().includes(q))
  }, [query])

  return (
    <>
      <SEO
        title="Live Crypto Prices & Markets"
        description="Track live prices, 24h change, and market data for Bitcoin, Ethereum, and 300+ other cryptocurrencies on CoinBidex."
        path="/markets"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }])}
      />

      <PageHero
        eyebrow="Live data"
        title="Crypto markets"
        description="Real-time prices and 24-hour performance for every asset available to trade on CoinBidex."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }]}
      />

      <Container className="pb-20">
        <div className="relative max-w-sm">
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

        <div className="mt-8 overflow-x-auto overflow-hidden rounded-2xl border border-surface-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-surface-200 bg-surface-50 text-left text-ink-950/45">
                <th className="px-5 py-3 font-medium">Asset</th>
                <th className="px-5 py-3 font-medium text-right">Price</th>
                <th className="px-5 py-3 font-medium text-right">24h Change</th>
                <th className="px-5 py-3 font-medium text-right hidden sm:table-cell">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(asset => {
                const { price, change } = priceFor(prices, asset)
                const up = change >= 0
                return (
                  <tr key={asset.id} className="border-b border-surface-100 last:border-0 hover:bg-surface-50 transition-colors">
                    <td className="px-5 py-4">
                      <Link to={`/crypto/${asset.id}`} className="flex items-center gap-3">
                        <span
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                          style={{ backgroundColor: asset.color }}
                        >
                          {asset.symbol.slice(0, 2)}
                        </span>
                        <span>
                          <span className="block font-medium text-ink-950">{asset.name}</span>
                          <span className="block text-xs text-ink-950/40">{asset.symbol}</span>
                        </span>
                      </Link>
                    </td>
                    <td className="px-5 py-4 text-right font-medium text-ink-950">{formatUsd(price)}</td>
                    <td className={`px-5 py-4 text-right font-medium ${up ? 'text-mint-500' : 'text-danger-500'}`}>
                      <span className="inline-flex items-center gap-1 justify-end">
                        {up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                        {Math.abs(change).toFixed(2)}%
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right hidden sm:table-cell">
                      <Link to={`/crypto/${asset.id}`} className="text-brand-600 hover:text-brand-700 font-medium">Trade →</Link>
                    </td>
                  </tr>
                )
              })}
              {filtered.length === 0 && (
                <tr><td colSpan={4} className="px-5 py-10 text-center text-ink-950/40">No assets match "{query}"</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </Container>
    </>
  )
}
