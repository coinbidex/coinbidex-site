import { useState } from 'react'
import { ArrowDownUp } from 'lucide-react'
import SEO, { breadcrumbJsonLd } from '../lib/seo'
import PageHero from '../components/shared/PageHero'
import { Section, SectionHeading, IconFeatureGrid } from '../components/shared/Section'
import Button from '../components/shared/Button'
import { Zap, Percent, RefreshCw } from 'lucide-react'

const TRADE_URL = import.meta.env.VITE_TRADE_URL || 'https://trade.coinbidex.com'

const REASONS = [
  { icon: Zap, title: 'One-click swaps', body: 'No order book, no limit prices to set — just pick two assets and confirm.' },
  { icon: Percent, title: 'No separate trading fee', body: 'The rate you see includes everything. What you\'re quoted is what you get.' },
  { icon: RefreshCw, title: '300+ pairs', body: 'Swap directly between almost any two assets we list, not just against USD.' },
]

export default function Convert() {
  const [from, setFrom] = useState('USDT')
  const [to, setTo] = useState('BTC')

  return (
    <>
      <SEO
        title="Convert Crypto Instantly"
        description="Swap between 300+ cryptocurrencies instantly on CoinBidex Convert, with no order book and no separate trading fee."
        path="/convert"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Convert', path: '/convert' }])}
      />

      <PageHero
        eyebrow="Convert"
        title="Swap any asset, instantly"
        description="Skip the order book. Convert between 300+ assets in one click, with the rate locked in before you confirm."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Convert', path: '/convert' }]}
      />

      <Section className="pt-0">
        <div className="mx-auto max-w-md rounded-2xl border border-surface-200 bg-white p-6 shadow-sm">
          <label className="block text-xs font-medium text-ink-950/50 mb-1.5">From</label>
          <div className="flex items-center justify-between rounded-xl border border-surface-200 px-4 py-3">
            <input defaultValue="1,000" className="w-full bg-transparent text-lg font-semibold text-ink-950 focus:outline-none" />
            <select value={from} onChange={e => setFrom(e.target.value)} className="bg-transparent text-sm font-semibold text-ink-950">
              <option>USDT</option><option>USDC</option><option>ETH</option>
            </select>
          </div>

          <div className="flex justify-center my-2">
            <button
              aria-label="Swap direction"
              onClick={() => { setFrom(to); setTo(from) }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-200 bg-surface-50 text-ink-950/60 hover:text-brand-600 hover:border-brand-300 transition-colors"
            >
              <ArrowDownUp size={16} />
            </button>
          </div>

          <label className="block text-xs font-medium text-ink-950/50 mb-1.5">To</label>
          <div className="flex items-center justify-between rounded-xl border border-surface-200 px-4 py-3">
            <input readOnly value="0.01538" className="w-full bg-transparent text-lg font-semibold text-ink-950 focus:outline-none" />
            <select value={to} onChange={e => setTo(e.target.value)} className="bg-transparent text-sm font-semibold text-ink-950">
              <option>BTC</option><option>ETH</option><option>SOL</option>
            </select>
          </div>

          <Button href={`${TRADE_URL}/swap`} size="lg" className="mt-6 w-full">Preview Conversion</Button>
        </div>
      </Section>

      <Section className="bg-surface-50 border-t border-surface-100">
        <SectionHeading eyebrow="Why Convert" title="The fastest way to rebalance" />
        <div className="mt-14"><IconFeatureGrid items={REASONS} /></div>
      </Section>
    </>
  )
}
