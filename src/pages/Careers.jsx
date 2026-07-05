import SEO, { breadcrumbJsonLd } from '../lib/seo'
import PageHero from '../components/shared/PageHero'
import { Section, SectionHeading, IconFeatureGrid } from '../components/shared/Section'
import Button from '../components/shared/Button'
import { Globe2, HeartHandshake, GraduationCap, Palmtree, Code2, ShieldCheck, LineChart, Headset } from 'lucide-react'

const PERKS = [
  { icon: Globe2, title: 'Remote-first', body: 'Work from anywhere — we hire across 30+ countries and coordinate async by default.' },
  { icon: HeartHandshake, title: 'Health coverage', body: 'Comprehensive medical, dental, and vision coverage for you and your dependents.' },
  { icon: GraduationCap, title: 'Learning budget', body: 'An annual budget for courses, conferences, and books — no approval hoops.' },
  { icon: Palmtree, title: 'Flexible time off', body: 'Unlimited PTO with a mandatory two-week minimum, so people actually take it.' },
]

const ROLES = [
  { title: 'Senior Backend Engineer, Matching Engine', team: 'Engineering', location: 'Remote', icon: Code2 },
  { title: 'Security Engineer, Detection & Response', team: 'Security', location: 'Remote', icon: ShieldCheck },
  { title: 'Compliance Analyst, EMEA', team: 'Compliance', location: 'London / Remote', icon: LineChart },
  { title: 'Senior Product Designer, Trading', team: 'Design', location: 'Remote', icon: Palmtree },
  { title: 'Customer Support Lead, APAC', team: 'Support', location: 'Singapore / Remote', icon: Headset },
  { title: 'Institutional Sales Manager', team: 'Business', location: 'New York / Remote', icon: HeartHandshake },
]

export default function Careers() {
  return (
    <>
      <SEO
        title="Careers at CoinBidex"
        description="Join CoinBidex — we're hiring remote-first across engineering, security, compliance, and support."
        path="/careers"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Careers', path: '/careers' }])}
      />

      <PageHero
        eyebrow="Careers"
        title="Help build the exchange traders trust"
        description="We're a remote-first team of 400+ across 30 countries, working on hard problems in security, distributed systems, and finance."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Careers', path: '/careers' }]}
      />

      <Section className="pt-0">
        <SectionHeading eyebrow="Benefits" title="How we take care of our team" />
        <div className="mt-14"><IconFeatureGrid items={PERKS} columns={4} /></div>
      </Section>

      <Section className="bg-surface-50 border-t border-surface-100">
        <SectionHeading eyebrow="Open roles" title="Current openings" center={false} />
        <div className="mt-10 space-y-3">
          {ROLES.map(role => (
            <div key={role.title} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-surface-200 bg-white p-5 hover:border-brand-300 transition-colors">
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600"><role.icon size={18} /></span>
                <div>
                  <p className="font-medium text-ink-950">{role.title}</p>
                  <p className="text-xs text-ink-950/45 mt-0.5">{role.team} · {role.location}</p>
                </div>
              </div>
              <Button to="/contact" variant="secondary" size="sm">Apply</Button>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink-950/50">Don't see the right role? Email <a href="mailto:careers@coinbidex.com" className="text-brand-600 font-medium">careers@coinbidex.com</a> — we review every message.</p>
      </Section>
    </>
  )
}
