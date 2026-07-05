import { UserPlus, ShieldCheck, Wallet, TrendingUp } from 'lucide-react'
import Container from '../shared/Container'
import Button from '../shared/Button'

const TRADE_URL = import.meta.env.VITE_TRADE_URL || 'https://trade.coinbidex.com'

const STEPS = [
  { icon: UserPlus, title: 'Create your account', body: 'Sign up in under two minutes with just your email address.' },
  { icon: ShieldCheck, title: 'Verify your identity', body: 'Complete a quick KYC check to unlock full trading limits.' },
  { icon: Wallet, title: 'Fund your wallet', body: 'Deposit crypto or connect a card to buy your first assets.' },
  { icon: TrendingUp, title: 'Start trading', body: 'Buy, sell, and swap 300+ assets with real-time market data.' },
]

export default function HowToStart() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Get started</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-ink-950">Up and trading in four steps</h2>
          <p className="mt-4 text-ink-950/55">
            From sign-up to your first trade, CoinBidex is built to get you there fast.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map(({ icon: Icon, title, body }, i) => (
            <div key={title} className="relative rounded-2xl border border-surface-200 bg-surface-50 p-6">
              <span className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white shadow-lg shadow-brand-500/30">
                {i + 1}
              </span>
              <Icon size={28} className="text-brand-500" />
              <h3 className="mt-4 font-semibold text-ink-950">{title}</h3>
              <p className="mt-2 text-sm text-ink-950/55 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href={`${TRADE_URL}/register`} size="lg">Create Free Account</Button>
        </div>
      </Container>
    </section>
  )
}
