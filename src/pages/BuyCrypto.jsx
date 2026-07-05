import SEO, { breadcrumbJsonLd } from '../lib/seo'
import PageHero from '../components/shared/PageHero'
import { Section, SectionHeading, IconFeatureGrid } from '../components/shared/Section'
import Button from '../components/shared/Button'
import { CreditCard, Landmark, Wallet2, Zap, ShieldCheck, Globe2 } from 'lucide-react'
import { ASSETS } from '../lib/assets-data'

const TRADE_URL = import.meta.env.VITE_TRADE_URL || 'https://trade.coinbidex.com'

const METHODS = [
  { icon: CreditCard, title: 'Debit / credit card', body: 'Instant purchases up to $50,000/day. Visa and Mastercard accepted in most regions.' },
  { icon: Landmark, title: 'Bank transfer', body: 'Lower fees for larger purchases. Funds typically settle within 1 business day.' },
  { icon: Wallet2, title: 'Apple Pay / Google Pay', body: 'One-tap checkout using the payment methods already saved on your device.' },
]

const REASONS = [
  { icon: Zap, title: 'Instant delivery', body: 'Assets land in your CoinBidex wallet the moment your payment clears.' },
  { icon: ShieldCheck, title: 'Locked-in pricing', body: 'The quote you see is the price you pay — a 10-second lock protects you from slippage.' },
  { icon: Globe2, title: '150+ countries', body: 'Buy crypto with your local currency in over 150 countries and 40+ payment methods.' },
]

export default function BuyCrypto() {
  return (
    <>
      <SEO
        title="Buy Crypto Instantly"
        description="Buy Bitcoin, Ethereum, and 300+ cryptocurrencies instantly with a card, bank transfer, Apple Pay, or Google Pay on CoinBidex."
        path="/buy-crypto"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Buy Crypto', path: '/buy-crypto' }])}
      />

      <PageHero
        eyebrow="Instant Buy"
        title="Buy crypto in under a minute"
        description="Purchase Bitcoin, Ethereum, and 300+ digital assets instantly with a card, bank transfer, or digital wallet — no order book required."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Buy Crypto', path: '/buy-crypto' }]}
        actions={[{ label: 'Buy Crypto Now', props: { href: `${TRADE_URL}/trade`, size: 'lg' } }]}
      />

      <Section className="pt-0">
        <div className="rounded-2xl border border-surface-200 bg-white p-6 sm:p-8 shadow-sm">
          <div className="grid sm:grid-cols-[1fr_auto_1fr] gap-4 items-end">
            <div>
              <label className="block text-xs font-medium text-ink-950/50 mb-1.5">You pay</label>
              <div className="flex items-center rounded-xl border border-surface-200 px-4 py-3">
                <input defaultValue="500" className="w-full bg-transparent text-lg font-semibold text-ink-950 focus:outline-none" />
                <span className="text-sm font-medium text-ink-950/50">USD</span>
              </div>
            </div>
            <div className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600 mb-1">→</div>
            <div>
              <label className="block text-xs font-medium text-ink-950/50 mb-1.5">You receive (approx.)</label>
              <div className="flex items-center rounded-xl border border-surface-200 px-4 py-3">
                <input readOnly value="0.00768" className="w-full bg-transparent text-lg font-semibold text-ink-950 focus:outline-none" />
                <span className="text-sm font-medium text-ink-950/50">BTC</span>
              </div>
            </div>
          </div>
          <Button href={`${TRADE_URL}/trade`} size="lg" className="mt-6 w-full sm:w-auto">Continue</Button>
          <p className="mt-3 text-xs text-ink-950/40">Illustrative rate. Final quote, including any spread, is shown before you confirm on the trading app.</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {ASSETS.slice(0, 10).map(a => (
            <span key={a.id} className="rounded-full border border-surface-200 bg-surface-50 px-3 py-1.5 text-xs font-medium text-ink-950/70">{a.symbol}</span>
          ))}
          <span className="rounded-full border border-surface-200 bg-surface-50 px-3 py-1.5 text-xs font-medium text-ink-950/70">+290 more</span>
        </div>
      </Section>

      <Section className="bg-surface-50 border-t border-surface-100">
        <SectionHeading eyebrow="Payment methods" title="Pay your way" description="Every major payment method, with fees shown up front." />
        <div className="mt-14"><IconFeatureGrid items={METHODS} /></div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Why CoinBidex" title="Built for a smooth first purchase" center={false} />
        <div className="mt-10"><IconFeatureGrid items={REASONS} /></div>
      </Section>
    </>
  )
}
