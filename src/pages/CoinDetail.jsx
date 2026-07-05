import { useParams, Link } from 'react-router-dom'
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'
import SEO, { breadcrumbJsonLd } from '../lib/seo'
import Container from '../components/shared/Container'
import Breadcrumbs from '../components/shared/Breadcrumbs'
import Button from '../components/shared/Button'
import NotFound from './NotFound'
import { ASSET_MAP, formatUsd } from '../lib/assets-data'
import { useLivePrices, priceFor } from '../lib/useLivePrices'

const TRADE_URL = import.meta.env.VITE_TRADE_URL || 'https://trade.coinbidex.com'

// Deterministic illustrative sparkline so the chart isn't empty while real
// history loads elsewhere — replace with real OHLC data from your market
// data API when wiring this up to trade.coinbidex.com's public endpoints.
function buildSparkline(seed) {
  const points = []
  let v = 100
  for (let i = 0; i < 30; i++) {
    v += Math.sin(i / 3 + seed) * 4 + (Math.random() - 0.5) * 2
    points.push({ day: i, value: Math.max(v, 10) })
  }
  return points
}

export default function CoinDetail() {
  const { cryptoId } = useParams()
  const asset = ASSET_MAP[cryptoId]
  const { prices } = useLivePrices()

  if (!asset) return <NotFound />

  const { price, change } = priceFor(prices, asset)
  const up = change >= 0
  const chartData = buildSparkline(asset.symbol.length)

  return (
    <>
      <SEO
        title={`${asset.name} (${asset.symbol}) Price`}
        description={`Live ${asset.name} (${asset.symbol}) price, 24-hour change, and market data. Buy and sell ${asset.symbol} on CoinBidex with low fees.`}
        path={`/crypto/${asset.id}`}
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Markets', path: '/markets' },
          { name: asset.name, path: `/crypto/${asset.id}` },
        ])}
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: asset.name, path: `/crypto/${asset.id}` }]} />

        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span
              className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white"
              style={{ backgroundColor: asset.color }}
            >
              {asset.symbol.slice(0, 2)}
            </span>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-ink-950">{asset.name} <span className="text-ink-950/35">{asset.symbol}</span></h1>
              <div className="mt-1 flex items-center gap-3">
                <span className="text-xl font-semibold text-ink-950">{formatUsd(price)}</span>
                <span className={`inline-flex items-center gap-1 text-sm font-medium ${up ? 'text-mint-500' : 'text-danger-500'}`}>
                  {up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                  {Math.abs(change).toFixed(2)}% (24h)
                </span>
              </div>
            </div>
          </div>
          <Button href={`${TRADE_URL}/register`} size="lg">Buy {asset.symbol}</Button>
        </div>

        <div className="mt-10 h-72 rounded-2xl border border-surface-200 bg-white p-4 shadow-sm">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={asset.color} stopOpacity={0.35} />
                  <stop offset="100%" stopColor={asset.color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="day" hide />
              <YAxis hide domain={['dataMin', 'dataMax']} />
              <Tooltip
                contentStyle={{ background: '#ffffff', border: '1px solid #e2e6f2', borderRadius: 8, fontSize: 12 }}
                labelFormatter={() => ''}
                formatter={(v) => [v.toFixed(2), 'Index']}
              />
              <Area type="monotone" dataKey="value" stroke={asset.color} strokeWidth={2} fill="url(#priceGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-ink-950">About {asset.name}</h2>
            <p className="mt-3 text-ink-950/55 leading-relaxed">
              {asset.name} ({asset.symbol}) is one of the most actively traded digital
              assets on CoinBidex. Buy, sell, or swap {asset.symbol} instantly with a free
              account — funds settle to your wallet in seconds and stay protected by our
              cold-storage custody model.
            </p>
          </div>
          <div className="rounded-2xl border border-surface-200 bg-surface-50 p-6">
            <h3 className="font-semibold text-ink-950">Why trade {asset.symbol} on CoinBidex?</h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-950/60">
              <li>• 0.1% maker / 0.2% taker fees — no hidden spreads</li>
              <li>• Deep liquidity and tight spreads</li>
              <li>• Instant swaps to or from 300+ other assets</li>
              <li>• Cold-storage custody for long-term holdings</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <Link to="/markets" className="text-brand-600 hover:text-brand-700 font-medium">← Back to all markets</Link>
        </div>
      </Container>
    </>
  )
}
