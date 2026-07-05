import SEO, { breadcrumbJsonLd } from '../lib/seo'
import PageHero from '../components/shared/PageHero'
import { Section, SectionHeading, IconFeatureGrid, StatRow } from '../components/shared/Section'
import Button from '../components/shared/Button'
import { ListOrdered, Gauge, BarChart3, Layers3, Bot, ShieldHalf } from 'lucide-react'

const TRADE_URL = import.meta.env.VITE_TRADE_URL || 'https://trade.coinbidex.com'

const FEATURES = [
  { icon: ListOrdered, title: 'Full order book', body: 'Market, limit, stop-limit, and OCO orders with live depth visualization.' },
  { icon: Gauge, title: 'Sub-second matching', body: 'Our in-memory matching engine handles order bursts without added latency.' },
  { icon: BarChart3, title: 'Advanced charting', body: 'TradingView-style charts with 100+ indicators and drawing tools built in.' },
  { icon: Layers3, title: 'Deep liquidity', body: 'Institutional market makers keep spreads tight, even on volatile pairs.' },
  { icon: Bot, title: 'API & bots', body: 'Full REST and WebSocket API access for algorithmic strategies — see API Docs.' },
  { icon: ShieldHalf, title: 'Risk controls', body: 'Configurable stop-loss, take-profit, and position-level risk limits.' },
]

export default function Exchange() {
  return (
    <>
      <SEO
        title="Spot Exchange — Advanced Order Book Trading"
        description="Trade spot crypto pairs on CoinBidex's advanced exchange with full order books, sub-second matching, and deep liquidity."
        path="/exchange"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Exchange', path: '/exchange' }])}
      />

      <PageHero
        eyebrow="Spot Trading"
        title="A professional-grade trading engine"
        description="Full order books, sub-second execution, and the charting tools serious traders expect — for 300+ spot pairs."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Exchange', path: '/exchange' }]}
        actions={[{ label: 'Launch Exchange', props: { href: `${TRADE_URL}/exchange`, size: 'lg' } }]}
      />

      <Section className="pt-0">
        <div className="rounded-2xl border border-surface-200 bg-ink-950 p-1 shadow-sm overflow-hidden">
          <div className="grid grid-cols-3 divide-x divide-white/10 text-center py-6">
            <div><p className="text-2xl font-bold text-white">300+</p><p className="text-xs text-white/45 mt-1">Trading pairs</p></div>
            <div><p className="text-2xl font-bold text-white">&lt;5ms</p><p className="text-xs text-white/45 mt-1">Median matching latency</p></div>
            <div><p className="text-2xl font-bold text-white">$2.6B+</p><p className="text-xs text-white/45 mt-1">Daily volume</p></div>
          </div>
        </div>
      </Section>

      <Section className="bg-surface-50 border-t border-surface-100">
        <SectionHeading eyebrow="Capabilities" title="Everything a trading desk needs" />
        <div className="mt-14"><IconFeatureGrid items={FEATURES} /></div>
      </Section>

      <Section className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-ink-950">Ready to place your first order?</h2>
        <div className="mt-6"><Button href={`${TRADE_URL}/exchange`} size="lg">Launch Exchange</Button></div>
      </Section>
    </>
  )
}
