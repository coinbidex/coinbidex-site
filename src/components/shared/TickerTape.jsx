import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { ASSETS, formatUsd } from '../../lib/assets-data'
import { useMarketData, marketFor } from '../../lib/useLivePrices'
import CoinIcon from './CoinIcon'

/**
 * Continuous, auto-scrolling strip of live prices — the "big exchange"
 * signature element seen across Binance/Coinbase/Kraken marketing pages.
 * Renders the asset list twice back-to-back so the CSS marquee loop
 * (see .marquee-track in index.css) is seamless.
 */
export default function TickerTape({ dark = false, size = 'sm' }) {
  const { market } = useMarketData()
  const items = [...ASSETS, ...ASSETS]

  const border = dark ? 'border-white/10' : 'border-surface-200'
  const bg = dark ? 'bg-ink-950' : 'bg-white'

  return (
    <div className={`relative overflow-hidden border-y ${border} ${bg} ${size === 'lg' ? 'py-4' : 'py-2.5'}`}>
      <div className={`pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r ${dark ? 'from-ink-950' : 'from-white'} to-transparent z-10`} />
      <div className={`pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l ${dark ? 'from-ink-950' : 'from-white'} to-transparent z-10`} />
      <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
        {items.map((asset, i) => {
          const m = marketFor(market, asset)
          const up = (m.change24h ?? 0) >= 0
          return (
            <Link
              key={`${asset.id}-${i}`}
              to={`/crypto/${asset.id}`}
              className={`flex items-center gap-2 text-sm font-medium ${dark ? 'text-white/80 hover:text-white' : 'text-ink-900/80 hover:text-ink-950'} transition-colors`}
            >
              <CoinIcon asset={asset} image={m.image} size="xs" />
              <span className="font-semibold">{asset.symbol}</span>
              <span className={dark ? 'text-white/50' : 'text-ink-950/45'}>{formatUsd(m.price)}</span>
              <span className={`flex items-center gap-0.5 text-xs font-semibold ${up ? 'text-mint-500' : 'text-danger-500'}`}>
                {up ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}
                {Math.abs(m.change24h ?? 0).toFixed(2)}%
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
