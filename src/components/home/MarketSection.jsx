import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'
import Container from '../shared/Container'
import Button from '../shared/Button'
import { ASSETS, formatUsd } from '../../lib/assets-data'
import { useLivePrices, priceFor } from '../../lib/useLivePrices'

export default function MarketSection() {
  const { prices } = useLivePrices()
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

        <div className="mt-10 overflow-hidden rounded-2xl border border-surface-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-surface-200 bg-surface-50 text-left text-ink-950/45">
                <th className="px-5 py-3 font-medium">Asset</th>
                <th className="px-5 py-3 font-medium text-right">Price</th>
                <th className="px-5 py-3 font-medium text-right">24h</th>
                <th className="px-5 py-3 font-medium text-right hidden sm:table-cell">Trade</th>
              </tr>
            </thead>
            <tbody>
              {top.map(asset => {
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
