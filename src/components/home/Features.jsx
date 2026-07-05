import { Zap, ShieldCheck, Headset, Layers, Repeat, LineChart } from 'lucide-react'
import Container from '../shared/Container'

const FEATURES = [
  { icon: Zap, title: 'Fast execution', body: 'Our matching engine processes orders in milliseconds, even during volatile markets.' },
  { icon: ShieldCheck, title: 'Bank-grade security', body: '98% of funds held in cold storage, with 2FA and withdrawal whitelisting on every account.' },
  { icon: Repeat, title: 'Instant swaps', body: 'Swap between 300+ assets at competitive rates with no separate order book needed.' },
  { icon: LineChart, title: 'Transparent pricing', body: 'Flat 0.1% maker and 0.2% taker fees — no hidden spreads, ever.' },
  { icon: Layers, title: 'Deep liquidity', body: 'Tight spreads across major pairs, backed by professional market makers.' },
  { icon: Headset, title: '24/7 human support', body: 'A real person, not a bot, on live chat around the clock.' },
]

export default function Features() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Why CoinBidex</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-ink-950">Built for serious traders</h2>
          <p className="mt-4 text-ink-950/55">
            Everything you need to manage risk and move fast, in one platform.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-surface-200 bg-white p-7 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-500/5 transition-all">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50">
                <Icon size={22} className="text-brand-600" />
              </div>
              <h3 className="mt-5 font-semibold text-ink-950 text-lg">{title}</h3>
              <p className="mt-2 text-sm text-ink-950/55 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
