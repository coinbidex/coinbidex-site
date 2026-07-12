import { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  ArrowUpRight, ArrowDownRight, ExternalLink, ArrowRightLeft,
  Trophy, TrendingDown as TrendingDownIcon, Layers, Coins,
} from 'lucide-react'
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'
import SEO, { breadcrumbJsonLd } from '../lib/seo'
import Container from '../components/shared/Container'
import Breadcrumbs from '../components/shared/Breadcrumbs'
import Button from '../components/shared/Button'
import CoinIcon from '../components/shared/CoinIcon'
import { GrowthPromoCard } from '../components/shared/GrowthPromo'
import NotFound from './NotFound'
import {
  ASSETS, ASSET_MAP, formatUsd, formatCompactUsd, formatCompactNumber, formatDate,
} from '../lib/assets-data'
import { useMarketData, marketFor, useCoinHistory } from '../lib/useLivePrices'

const TRADE_URL = import.meta.env.VITE_TRADE_URL || 'https://trade.coinbidex.com'

const RANGES = [
  { id: '1', label: '24H' },
  { id: '7', label: '7D' },
  { id: '30', label: '1M' },
  { id: '365', label: '1Y' },
]

function ChangeChip({ label, value }) {
  if (value == null) return null
  const up = value >= 0
  return (
    <span className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-semibold ${up ? 'bg-mint-500/10 text-mint-500' : 'bg-danger-500/10 text-danger-500'}`}>
      {up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
      {Math.abs(value).toFixed(2)}% <span className="font-normal opacity-60">{label}</span>
    </span>
  )
}

function StatRow({ label, value, sub }) {
  return (
    <div className="flex items-center justify-between border-b border-surface-100 py-3 last:border-0">
      <span className="text-sm text-ink-950/50">{label}</span>
      <span className="text-right">
        <span className="block text-sm font-semibold text-ink-950 tabular-nums">{value}</span>
        {sub && <span className="block text-xs text-ink-950/40">{sub}</span>}
      </span>
    </div>
  )
}

function ConvertWidget({ asset, price }) {
  const [cryptoAmount, setCryptoAmount] = useState('1')
  const [usdAmount, setUsdAmount] = useState(price ? price.toFixed(2) : '')

  function onCryptoChange(v) {
    setCryptoAmount(v)
    const n = parseFloat(v)
    setUsdAmount(Number.isFinite(n) && price ? (n * price).toFixed(2) : '')
  }
  function onUsdChange(v) {
    setUsdAmount(v)
    const n = parseFloat(v)
    setCryptoAmount(Number.isFinite(n) && price ? (n / price).toFixed(6) : '')
  }

  return (
    <div className="rounded-2xl border border-surface-200 bg-white p-6">
      <div className="flex items-center gap-2 text-sm font-semibold text-ink-950"><ArrowRightLeft size={15} className="text-brand-500" /> Convert {asset.symbol}</div>
      <div className="mt-4 space-y-3">
        <div>
          <label className="text-xs font-medium text-ink-950/45">{asset.symbol}</label>
          <input
            type="number"
            value={cryptoAmount}
            onChange={e => onCryptoChange(e.target.value)}
            className="mt-1 w-full rounded-xl border border-surface-200 bg-surface-50 px-3.5 py-2.5 text-sm font-semibold text-ink-950 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/10"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-ink-950/45">USD</label>
          <input
            type="number"
            value={usdAmount}
            onChange={e => onUsdChange(e.target.value)}
            className="mt-1 w-full rounded-xl border border-surface-200 bg-surface-50 px-3.5 py-2.5 text-sm font-semibold text-ink-950 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/10"
          />
        </div>
      </div>
      <Button href={`${TRADE_URL}/register`} size="md" className="mt-4 w-full">Buy {asset.symbol}</Button>
    </div>
  )
}

export default function CoinDetail() {
  const { cryptoId } = useParams()
  const asset = ASSET_MAP[cryptoId]
  const { market } = useMarketData()
  const [range, setRange] = useState('7')
  const { series } = useCoinHistory(cryptoId, range)

  const m = asset ? marketFor(market, asset) : null

  const chartData = useMemo(() => {
    if (!asset) return []
    if (series && series.length > 1) {
      return series.map(p => ({
        t: p.t,
        label: new Date(p.t).toLocaleDateString('en-US', range === '1' ? { hour: 'numeric' } : { month: 'short', day: 'numeric' }),
        price: p.price,
      }))
    }
    // Deterministic illustrative fallback so the chart never renders empty.
    const points = []
    let v = m?.price || 100
    const seed = asset.symbol.charCodeAt(0)
    for (let i = 0; i < 40; i++) {
      v *= 1 + (Math.sin(i / 4 + seed) * 0.015 + (Math.sin(i * seed) * 0.004))
      points.push({ t: i, label: '', price: Math.max(v, 0.0001) })
    }
    return points
  }, [series, m?.price, asset, range])

  const relatedAssets = useMemo(() => {
    if (!asset) return []
    const similar = ASSETS.filter(a => a.id !== asset.id && a.categories?.some(c => asset.categories?.includes(c))).slice(0, 4)
    return similar.length ? similar : ASSETS.filter(a => a.id !== asset.id).slice(0, 4)
  }, [asset])

  if (!asset) return <NotFound />

  const up = (m.change24h ?? 0) >= 0

  return (
    <>
      <SEO
        title={`${asset.name} (${asset.symbol}) Price, Chart & Market Data`}
        description={`Live ${asset.name} (${asset.symbol}) price, market cap, volume, and 24h/7d/1y history. Buy and sell ${asset.symbol} on CoinBidex with low fees.`}
        path={`/crypto/${asset.id}`}
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Markets', path: '/markets' },
          { name: asset.name, path: `/crypto/${asset.id}` },
        ])}
      />

      <Container className="py-10 sm:py-14">
        <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }, { name: asset.name, path: `/crypto/${asset.id}` }]} />

        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="flex items-start gap-4">
            <CoinIcon asset={asset} image={m.image} size="xl" />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-bold text-ink-950">{asset.name}</h1>
                <span className="text-ink-950/35 font-medium">{asset.symbol}</span>
                {m.rank && (
                  <span className="inline-flex items-center gap-1 rounded-lg bg-surface-100 px-2 py-0.5 text-xs font-semibold text-ink-950/60">Rank #{m.rank}</span>
                )}
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <span className="text-2xl font-bold text-ink-950 tabular-nums">{formatUsd(m.price)}</span>
                <span className={`inline-flex items-center gap-1 text-sm font-semibold ${up ? 'text-mint-500' : 'text-danger-500'}`}>
                  {up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                  {Math.abs(m.change24h ?? 0).toFixed(2)}% (24h)
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {asset.categories?.map(c => (
                  <span key={c} className="rounded-full border border-surface-200 px-2.5 py-1 text-xs font-medium text-ink-950/55">{c}</span>
                ))}
              </div>
            </div>
          </div>
          <Button href={`${TRADE_URL}/register`} size="lg">Buy {asset.symbol}</Button>
        </div>

        {/* Chart */}
        <div className="mt-8 rounded-2xl border border-surface-200 bg-white p-4 sm:p-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 px-1">
            <div className="flex flex-wrap gap-2">
              <ChangeChip label="1h" value={m.change1h} />
              <ChangeChip label="24h" value={m.change24h} />
              <ChangeChip label="7d" value={m.change7d} />
            </div>
            <div className="flex gap-1 rounded-lg bg-surface-50 p-1">
              {RANGES.map(r => (
                <button
                  key={r.id}
                  onClick={() => setRange(r.id)}
                  className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${range === r.id ? 'bg-white text-brand-600 shadow-sm' : 'text-ink-950/45 hover:text-ink-950'}`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={asset.color} stopOpacity={0.3} />
                    <stop offset="100%" stopColor={asset.color} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke="var(--color-surface-100)" />
                <XAxis dataKey="label" tick={{ fontSize: 11, fill: 'rgba(5,10,26,0.35)' }} axisLine={false} tickLine={false} minTickGap={40} />
                <YAxis hide domain={['dataMin', 'dataMax']} />
                <Tooltip
                  contentStyle={{ background: '#ffffff', border: '1px solid #e2e6f2', borderRadius: 8, fontSize: 12 }}
                  labelFormatter={(v) => v || ''}
                  formatter={(v) => [formatUsd(v), 'Price']}
                />
                <Area type="monotone" dataKey="price" stroke={asset.color} strokeWidth={2} fill="url(#priceGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Main grid: stats + sidebar */}
        <div className="mt-8 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-2xl border border-surface-200 bg-white p-6">
              <h2 className="font-semibold text-ink-950 flex items-center gap-2"><Layers size={16} className="text-brand-500" /> Market stats</h2>
              <div className="mt-2 grid sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <StatRow label="Market cap" value={formatCompactUsd(m.marketCap)} />
                  <StatRow label="Fully diluted valuation" value={formatCompactUsd(m.fdv)} />
                  <StatRow label="24h trading volume" value={formatCompactUsd(m.volume24h)} />
                  <StatRow label="24h low / high" value={`${formatUsd(m.low24h)} / ${formatUsd(m.high24h)}`} />
                </div>
                <div>
                  <StatRow label="Circulating supply" value={`${formatCompactNumber(m.circulatingSupply)} ${asset.symbol}`} />
                  <StatRow label="Total supply" value={m.totalSupply ? `${formatCompactNumber(m.totalSupply)} ${asset.symbol}` : '—'} />
                  <StatRow label="Max supply" value={m.maxSupply ? `${formatCompactNumber(m.maxSupply)} ${asset.symbol}` : 'No max supply'} />
                  <StatRow
                    label={<span className="inline-flex items-center gap-1"><Trophy size={12} /> All-time high</span>}
                    value={formatUsd(m.ath)}
                    sub={m.athChangePercentage != null ? `${m.athChangePercentage.toFixed(1)}% from ATH · ${formatDate(m.athDate)}` : null}
                  />
                </div>
              </div>
              <StatRow
                label={<span className="inline-flex items-center gap-1"><TrendingDownIcon size={12} /> All-time low</span>}
                value={formatUsd(m.atl)}
                sub={m.atlChangePercentage != null ? `+${m.atlChangePercentage.toFixed(1)}% from ATL · ${formatDate(m.atlDate)}` : null}
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-950">About {asset.name}</h2>
              <p className="mt-3 text-ink-950/60 leading-relaxed">{asset.description}</p>
              {asset.website && (
                <a href={asset.website} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700">
                  Official website <ExternalLink size={13} />
                </a>
              )}
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

            {relatedAssets.length > 0 && (
              <div>
                <h3 className="font-semibold text-ink-950 flex items-center gap-2"><Coins size={16} className="text-brand-500" /> Similar assets</h3>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {relatedAssets.map(a => {
                    const rm = marketFor(market, a)
                    const rup = (rm.change24h ?? 0) >= 0
                    return (
                      <Link key={a.id} to={`/crypto/${a.id}`} className="rounded-xl border border-surface-200 bg-white p-4 hover:border-brand-300 hover:shadow-md transition-all">
                        <CoinIcon asset={a} image={rm.image} size="sm" />
                        <div className="mt-2 text-sm font-semibold text-ink-950">{a.symbol}</div>
                        <div className="text-xs text-ink-950/40">{formatUsd(rm.price)}</div>
                        <div className={`mt-1 text-xs font-semibold ${rup ? 'text-mint-500' : 'text-danger-500'}`}>
                          {rup ? '+' : ''}{(rm.change24h ?? 0).toFixed(2)}%
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <ConvertWidget asset={asset} price={m.price} />
            <GrowthPromoCard variant="list" />
            <GrowthPromoCard variant="advertise" />
          </div>
        </div>

        <div className="mt-12">
          <Link to="/markets" className="text-brand-600 hover:text-brand-700 font-medium">← Back to all markets</Link>
        </div>
      </Container>
    </>
  )
}
