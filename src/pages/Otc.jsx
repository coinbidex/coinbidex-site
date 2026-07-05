import SEO, { breadcrumbJsonLd } from '../lib/seo'
import PageHero from '../components/shared/PageHero'
import { Section, SectionHeading, IconFeatureGrid, StepList } from '../components/shared/Section'
import Button from '../components/shared/Button'
import { Handshake, ShieldCheck, Clock, Lock, MessageSquare, FileCheck2, Send, CheckCircle2 } from 'lucide-react'

const REASONS = [
  { icon: Handshake, title: 'Zero slippage', body: 'Prices are negotiated and locked before execution — no market impact on your trade.' },
  { icon: ShieldCheck, title: 'Deep, private liquidity', body: 'Access liquidity beyond what\'s visible on the public order book.' },
  { icon: Clock, title: '24/7 desk coverage', body: 'Our trading desk is staffed around the clock across time zones.' },
  { icon: Lock, title: 'Settlement in escrow', body: 'Funds are held in escrow until both sides of the trade are confirmed.' },
]

const STEPS = [
  { icon: MessageSquare, title: 'Request a quote', body: 'Tell our desk the asset, size, and side of the trade you need.' },
  { icon: FileCheck2, title: 'Get a firm price', body: 'We return a live, executable quote — typically within minutes.' },
  { icon: Send, title: 'Confirm & settle', body: 'Accept the quote and funds settle directly to your CoinBidex or external wallet.' },
  { icon: CheckCircle2, title: 'Done', body: 'No order book impact, no partial fills — the full size executes at one price.' },
]

export default function Otc() {
  return (
    <>
      <SEO
        title="OTC Desk — Large Block Trades"
        description="Execute large cryptocurrency trades with zero slippage through the CoinBidex OTC desk, backed by deep private liquidity."
        path="/otc"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'OTC Desk', path: '/otc' }])}
      />

      <PageHero
        eyebrow="OTC Desk"
        title="Move size without moving the market"
        description="For trades too large for the order book, our OTC desk offers firm pricing and zero slippage on block trades of $100,000 or more."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'OTC Desk', path: '/otc' }]}
        actions={[{ label: 'Request a Quote', props: { to: '/contact', size: 'lg' } }]}
      />

      <Section className="pt-0">
        <SectionHeading eyebrow="How it works" title="From quote to settlement in minutes" />
        <div className="mt-14"><StepList steps={STEPS} /></div>
      </Section>

      <Section className="bg-surface-50 border-t border-surface-100">
        <SectionHeading eyebrow="Why OTC" title="Built for size" />
        <div className="mt-14"><IconFeatureGrid items={REASONS} columns={4} /></div>
      </Section>

      <Section className="text-center">
        <Button to="/contact" size="lg">Request a Quote</Button>
      </Section>
    </>
  )
}
