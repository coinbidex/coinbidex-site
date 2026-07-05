import SEO, { breadcrumbJsonLd } from '../lib/seo'
import PageHero from '../components/shared/PageHero'
import { Section, SectionHeading, IconFeatureGrid } from '../components/shared/Section'
import Button from '../components/shared/Button'
import { PiggyBank, Lock, TrendingUp, Unlock } from 'lucide-react'

const TRADE_URL = import.meta.env.VITE_TRADE_URL || 'https://trade.coinbidex.com'

const PRODUCTS = [
  { asset: 'ETH', name: 'Ethereum', apy: '4.2%', term: 'Flexible' },
  { asset: 'SOL', name: 'Solana', apy: '6.8%', term: 'Flexible' },
  { asset: 'DOT', name: 'Polkadot', apy: '11.5%', term: '90 days' },
  { asset: 'ADA', name: 'Cardano', apy: '5.1%', term: 'Flexible' },
  { asset: 'USDT', name: 'Tether', apy: '8.0%', term: '30 days' },
  { asset: 'ATOM', name: 'Cosmos', apy: '12.0%', term: '90 days' },
]

const REASONS = [
  { icon: PiggyBank, title: 'Put idle assets to work', body: 'Earn yield on assets you already hold instead of letting them sit idle.' },
  { icon: Lock, title: 'Flexible or fixed terms', body: 'Choose flexible staking you can unstake anytime, or lock in a higher fixed rate.' },
  { icon: TrendingUp, title: 'Rewards paid daily', body: 'Track accrued rewards in real time and see them credited to your wallet daily.' },
  { icon: Unlock, title: 'Transparent fee', body: 'Our service fee is disclosed up front for every asset — never hidden in the advertised rate.' },
]

export default function Earn() {
  return (
    <>
      <SEO
        title="Earn — Stake Crypto for Yield"
        description="Earn up to 12% APY by staking Ethereum, Solana, and 40+ other assets on CoinBidex Earn, with flexible and fixed terms."
        path="/earn"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Earn', path: '/earn' }])}
      />

      <PageHero
        eyebrow="Earn"
        title="Make your crypto work for you"
        description="Stake 40+ assets and earn up to 12% APY, with flexible terms you can unstake anytime or fixed terms for a higher rate."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Earn', path: '/earn' }]}
        actions={[{ label: 'Start Earning', props: { href: `${TRADE_URL}/earn`, size: 'lg' } }]}
      />

      <Section className="pt-0">
        <div className="overflow-x-auto rounded-2xl border border-surface-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-surface-200 bg-surface-50 text-left text-ink-950/45">
                <th className="px-5 py-3 font-medium">Asset</th>
                <th className="px-5 py-3 font-medium text-right">Est. APY</th>
                <th className="px-5 py-3 font-medium text-right">Term</th>
                <th className="px-5 py-3 font-medium text-right hidden sm:table-cell">Action</th>
              </tr>
            </thead>
            <tbody>
              {PRODUCTS.map(p => (
                <tr key={p.asset} className="border-b border-surface-100 last:border-0 hover:bg-surface-50 transition-colors">
                  <td className="px-5 py-4 font-medium text-ink-950">{p.name} <span className="text-ink-950/40">{p.asset}</span></td>
                  <td className="px-5 py-4 text-right font-semibold text-mint-500">{p.apy}</td>
                  <td className="px-5 py-4 text-right text-ink-950/60">{p.term}</td>
                  <td className="px-5 py-4 text-right hidden sm:table-cell">
                    <a href={`${TRADE_URL}/earn`} className="text-brand-600 hover:text-brand-700 font-medium">Stake →</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-ink-950/40">Rates are estimated, variable, and subject to change based on network conditions and CoinBidex's service fee.</p>
      </Section>

      <Section className="bg-surface-50 border-t border-surface-100">
        <SectionHeading eyebrow="Why Earn" title="Simple, transparent staking" />
        <div className="mt-14"><IconFeatureGrid items={REASONS} columns={4} /></div>
      </Section>
    </>
  )
}
