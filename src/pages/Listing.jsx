import SEO, { breadcrumbJsonLd } from '../lib/seo'
import PageHero from '../components/shared/PageHero'
import { Section, SectionHeading, IconFeatureGrid, StepList } from '../components/shared/Section'
import Button from '../components/shared/Button'
import {
  ShieldCheck, Users2, Droplets, ScrollText,
  FileText, Search, HandCoins, Rocket,
} from 'lucide-react'

const LISTING_URL = `${import.meta.env.VITE_TRADE_URL || 'https://trade.coinbidex.com'}/listing`

const CRITERIA = [
  { icon: ShieldCheck, title: 'Security audit', body: 'A completed audit from a recognized firm, with any critical findings resolved.' },
  { icon: ScrollText, title: 'Legal clarity', body: 'A legal opinion addressing the token\'s regulatory status in major jurisdictions.' },
  { icon: Users2, title: 'Real community & usage', body: 'Evidence of an active user base or protocol usage — not just social media follower counts.' },
  { icon: Droplets, title: 'Liquidity commitment', body: 'Sufficient market-making commitment or existing liquidity to support healthy order books.' },
]

const STEPS = [
  { icon: FileText, title: 'Submit your application', body: 'Complete the listing form with your project, token, and team details.' },
  { icon: Search, title: 'Due diligence review', body: 'Our listings team reviews the code, legal structure, and market fit — typically 2–4 weeks.' },
  { icon: HandCoins, title: 'Terms & market making', body: 'Agree on listing terms and coordinate liquidity provisioning ahead of launch.' },
  { icon: Rocket, title: 'Go live', body: 'Your asset lists on CoinBidex spot markets, with joint marketing support.' },
]

export default function Listing() {
  return (
    <>
      <SEO
        title="Apply for Listing"
        description="Apply to list your token or project's market on CoinBidex. Review our listing criteria and application process."
        path="/listing"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Apply for Listing', path: '/listing' }])}
      />

      <PageHero
        eyebrow="For Projects"
        title="List your token on CoinBidex"
        description="Reach 4.2 million active traders across 150+ countries. We review every application against a consistent set of security, legal, and liquidity criteria."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Apply for Listing', path: '/listing' }]}
        actions={[{ label: 'Start Your Application', props: { href: LISTING_URL, size: 'lg' } }]}
      />

      <Section className="pt-0">
        <SectionHeading eyebrow="What we look for" title="Listing criteria" description="We hold every project — large or small — to the same bar." />
        <div className="mt-14"><IconFeatureGrid items={CRITERIA} columns={4} /></div>
      </Section>

      <Section className="bg-surface-50 border-t border-surface-100">
        <SectionHeading eyebrow="Process" title="From application to launch" />
        <div className="mt-14"><StepList steps={STEPS} /></div>
      </Section>

      <Section className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-ink-950">Ready to apply?</h2>
        <p className="mt-3 text-ink-950/55 max-w-xl mx-auto">
          Applications are reviewed on a rolling basis. There is no fee to apply, and no
          guarantee of listing — we're selective on purpose.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={LISTING_URL} size="lg">Start Your Application</Button>
          <Button to="/contact" variant="secondary" size="lg">Ask a Question First</Button>
        </div>
      </Section>
    </>
  )
}
