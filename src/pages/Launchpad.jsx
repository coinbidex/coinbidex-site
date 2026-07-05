import SEO, { breadcrumbJsonLd } from '../lib/seo'
import PageHero from '../components/shared/PageHero'
import { Section, SectionHeading, IconFeatureGrid } from '../components/shared/Section'
import Button from '../components/shared/Button'
import { Rocket, ShieldCheck, Users, Sparkles } from 'lucide-react'

const TRADE_URL = import.meta.env.VITE_TRADE_URL || 'https://trade.coinbidex.com'

const PROJECTS = [
  { name: 'NovaChain', symbol: 'NOVA', status: 'Live now', raise: '$4.2M raised of $6M' },
  { name: 'Fluent Protocol', symbol: 'FLNT', status: 'Upcoming — Jul 18', raise: 'Registration open' },
  { name: 'Ledgerly', symbol: 'LEDG', status: 'Completed', raise: '$12M raised' },
]

const REASONS = [
  { icon: Rocket, title: 'Early access', body: 'Get allocation in vetted token sales before they list on the open market.' },
  { icon: ShieldCheck, title: 'Vetted projects', body: 'Every project completes technical, legal, and team due diligence before listing.' },
  { icon: Users, title: 'Fair allocation', body: 'Allocation is based on a transparent lottery and staking-tier system — not who\'s fastest.' },
  { icon: Sparkles, title: 'Day-one liquidity', body: 'Tokens list directly to CoinBidex spot markets immediately after the sale ends.' },
]

export default function Launchpad() {
  return (
    <>
      <SEO
        title="Launchpad — Early Access to New Token Listings"
        description="Get early access to vetted new token sales on CoinBidex Launchpad, with fair allocation and day-one exchange liquidity."
        path="/launchpad"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Launchpad', path: '/launchpad' }])}
      />

      <PageHero
        eyebrow="Launchpad"
        title="Get in before the crowd"
        description="CoinBidex Launchpad gives you early, fairly-allocated access to vetted new token projects — with liquidity from day one."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Launchpad', path: '/launchpad' }]}
      />

      <Section className="pt-0">
        <div className="grid sm:grid-cols-3 gap-6">
          {PROJECTS.map(p => (
            <div key={p.symbol} className="rounded-2xl border border-surface-200 bg-white p-6">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-ink-950">{p.name}</span>
                <span className="text-xs font-medium text-ink-950/40">{p.symbol}</span>
              </div>
              <p className="mt-3 text-sm font-medium text-brand-600">{p.status}</p>
              <p className="mt-1 text-sm text-ink-950/55">{p.raise}</p>
              <Button href={`${TRADE_URL}/launchpad`} variant="secondary" size="sm" className="mt-4 w-full">View details</Button>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface-50 border-t border-surface-100">
        <SectionHeading eyebrow="Why Launchpad" title="Access, without the chaos" />
        <div className="mt-14"><IconFeatureGrid items={REASONS} columns={4} /></div>
      </Section>
    </>
  )
}
