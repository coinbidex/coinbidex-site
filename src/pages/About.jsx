import SEO, { breadcrumbJsonLd } from '../lib/seo'
import PageHero from '../components/shared/PageHero'
import { Section, SectionHeading, StatRow, IconFeatureGrid } from '../components/shared/Section'
import Container from '../components/shared/Container'
import Button from '../components/shared/Button'
import { Target, Users, Globe2, ShieldCheck, Rocket, HeartHandshake } from 'lucide-react'

const VALUES = [
  { icon: Target, title: 'Security first', body: 'Every feature we ship is designed around protecting user funds, not just growth metrics.' },
  { icon: Users, title: 'Built for traders', body: 'We are traders ourselves, and we build the platform we wish existed.' },
  { icon: Globe2, title: 'Global access', body: 'Crypto should be accessible everywhere it is legal to trade — we work to make that true.' },
  { icon: ShieldCheck, title: 'Radical transparency', body: 'Clear fees, public status pages, and honest communication — even when something breaks.' },
  { icon: Rocket, title: 'Move deliberately', body: 'We ship fast without cutting corners on security review or compliance.' },
  { icon: HeartHandshake, title: 'Customer obsessed', body: 'Support decisions are made by asking what actually helps the trader, not the ticket queue.' },
]

const TIMELINE = [
  { year: '2019', text: 'CoinBidex founded by a team of exchange engineers and risk analysts.' },
  { year: '2020', text: 'Launched spot trading for 30 assets and passed 100,000 registered users.' },
  { year: '2021', text: 'Introduced institutional custody and OTC desk services.' },
  { year: '2023', text: 'Reached 2 million users across 100+ countries; SOC 2 Type II certified.' },
  { year: '2026', text: 'Serving 4.2M+ traders in 150+ countries with 300+ tradable assets.' },
]

export default function About() {
  return (
    <>
      <SEO
        title="About CoinBidex"
        description="Learn about CoinBidex's mission to build a secure, transparent, and accessible cryptocurrency exchange for traders worldwide."
        path="/about"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])}
      />

      <PageHero
        eyebrow="Our story"
        title="Building the exchange we always wanted to trade on"
        description="CoinBidex was founded to close the gap between what a crypto exchange should be and what most of them are — security and transparency first, features second."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]}
      />

      <Section tight>
        <StatRow stats={[
          { value: '2019', label: 'Founded' },
          { value: '4.2M+', label: 'Registered users' },
          { value: '150+', label: 'Countries served' },
          { value: '300+', label: 'Assets listed' },
        ]} />
      </Section>

      <Section className="border-t border-surface-100" dark={false}>
        <SectionHeading eyebrow="What we believe" title="Our values" description="The principles behind every product decision we make." />
        <div className="mt-14">
          <IconFeatureGrid items={VALUES} />
        </div>
      </Section>

      <Section className="bg-surface-50 border-t border-surface-100">
        <SectionHeading eyebrow="Milestones" title="Where we've been" center={false} />
        <div className="mt-10 space-y-0 max-w-2xl">
          {TIMELINE.map((item, i) => (
            <div key={item.year} className="flex gap-6">
              <div className="flex flex-col items-center">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">{item.year.slice(2)}</span>
                {i < TIMELINE.length - 1 && <span className="w-px flex-1 bg-surface-200 my-1" />}
              </div>
              <div className="pb-10">
                <p className="font-semibold text-ink-950">{item.year}</p>
                <p className="mt-1 text-sm text-ink-950/60 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-surface-100">
        <Container className="rounded-3xl bg-ink-950 px-8 py-14 text-center sm:px-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Want to help us build it?</h2>
          <p className="mx-auto mt-3 max-w-lg text-white/55">We're hiring across engineering, risk, compliance, and support — fully remote.</p>
          <div className="mt-7"><Button to="/careers" size="lg">View open roles</Button></div>
        </Container>
      </Section>
    </>
  )
}
