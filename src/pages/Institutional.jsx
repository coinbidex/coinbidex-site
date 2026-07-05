import SEO, { breadcrumbJsonLd } from '../lib/seo'
import PageHero from '../components/shared/PageHero'
import { Section, SectionHeading, IconFeatureGrid, StatRow } from '../components/shared/Section'
import Button from '../components/shared/Button'
import { Building2, Lock, LineChart, Users, Code2, Handshake } from 'lucide-react'

const SERVICES = [
  { icon: Building2, title: 'Prime brokerage', body: 'Aggregated liquidity, credit lines, and a single point of settlement across venues.' },
  { icon: Lock, title: 'Qualified custody', body: 'Segregated, insured cold-storage custody built for funds and treasuries.' },
  { icon: LineChart, title: 'Algorithmic execution', body: 'TWAP, VWAP, and iceberg order strategies to minimize market impact.' },
  { icon: Users, title: 'Dedicated relationship manager', body: 'A named point of contact for onboarding, reporting, and support.' },
  { icon: Code2, title: 'FIX & REST API', body: 'Institutional-grade connectivity with dedicated infrastructure and SLAs.' },
  { icon: Handshake, title: 'OTC block trades', body: 'Execute large trades off-book with zero slippage — see our OTC Desk.' },
]

export default function Institutional() {
  return (
    <>
      <SEO
        title="Institutional Services"
        description="Prime brokerage, qualified custody, and algorithmic execution for funds, treasuries, and institutions trading digital assets."
        path="/institutional"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Institutional', path: '/institutional' }])}
      />

      <PageHero
        dark
        eyebrow="Institutional"
        title="Digital asset infrastructure for institutions"
        description="Prime brokerage, qualified custody, and execution services built for funds, treasuries, and trading firms — with the compliance rigor institutions require."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Institutional', path: '/institutional' }]}
        actions={[{ label: 'Talk to Our Team', props: { to: '/contact', size: 'lg' } }]}
      />

      <Section dark className="pt-0 -mt-2">
        <StatRow dark stats={[
          { value: '$18B+', label: 'Institutional volume (12mo)' },
          { value: '400+', label: 'Institutional clients' },
          { value: '99.99%', label: 'Platform uptime' },
          { value: '24/7', label: 'Dedicated desk coverage' },
        ]} />
      </Section>

      <Section>
        <SectionHeading eyebrow="Services" title="Built for how institutions actually trade" />
        <div className="mt-14"><IconFeatureGrid items={SERVICES} /></div>
      </Section>

      <Section className="bg-surface-50 border-t border-surface-100 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-ink-950">Let's talk about your desk's needs</h2>
        <p className="mt-3 text-ink-950/55 max-w-xl mx-auto">Our institutional team responds to qualified inquiries within one business day.</p>
        <div className="mt-7"><Button to="/contact" size="lg">Contact Institutional Sales</Button></div>
      </Section>
    </>
  )
}
