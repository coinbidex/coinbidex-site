import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'
import Container from '../shared/Container'
import Button from '../shared/Button'
import CoinIcon from '../shared/CoinIcon'
import { ASSETS, formatUsd, formatCompactUsd } from '../../lib/assets-data'
import { useMarketData, marketFor } from '../../lib/useLivePrices'

export default function MarketSection() {
  const { market } = useMarketData()
  const top = ASSETS.slice(0, 8)

  return (
    <section className="py-20 sm:py-28 bg-surface-50">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink-950">Live markets</h2>
            <p className="mt-3 text-ink-950/55">Real-time prices for the assets people trade most.</p>
          </div>
          <Button to="/markets" variant="secondary">View all 300+ markets</Button>
        </div>

        <div className="mt-10 overflow-x-auto overflow-hidden rounded-2xl border border-surface-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-surface-200 bg-surface-50 text-left text-ink-950/45">
                <th className="px-5 py-3 font-medium">Asset</th>
                <th className="px-5 py-3 font-medium text-right">Price</th>
                <th className="px-5 py-3 font-medium text-right">24h</th>
                <th className="px-5 py-3 font-medium text-right hidden sm:table-cell">Market Cap</th>
                <th className="px-5 py-3 font-medium text-right hidden sm:table-cell">Trade</th>
              </tr>
            </thead>
            <tbody>
              {top.map(asset => {
                const m = marketFor(market, asset)
                const up = (m.change24h ?? 0) >= 0
                return (
                  <tr key={asset.id} className="border-b border-surface-100 last:border-0 hover:bg-surface-50 transition-colors">
                    <td className="px-5 py-4">
                      <Link to={`/crypto/${asset.id}`} className="flex items-center gap-3">
                        <CoinIcon asset={asset} image={m.image} size="sm" />
                        <span>
                          <span className="block font-medium text-ink-950">{asset.name}</span>
                          <span className="block text-xs text-ink-950/40">{asset.symbol}</span>
                        </span>
                      </Link>
                    </td>
                    <td className="px-5 py-4 text-right font-medium text-ink-950 tabular-nums">{formatUsd(m.price)}</td>
                    <td className={`px-5 py-4 text-right font-medium tabular-nums ${up ? 'text-mint-500' : 'text-danger-500'}`}>
                      <span className="inline-flex items-center gap-1 justify-end">
                        {up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                        {Math.abs(m.change24h ?? 0).toFixed(2)}%
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right hidden sm:table-cell text-ink-950/70 tabular-nums">{formatCompactUsd(m.marketCap)}</td>
                    <td className="px-5 py-4 text-right hidden sm:table-cell">
                      <Link to={`/crypto/${asset.id}`} className="text-brand-600 hover:text-brand-700 font-medium">
                        Trade →
                      </Link>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  )
}
