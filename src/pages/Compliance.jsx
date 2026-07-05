import SEO, { breadcrumbJsonLd } from '../lib/seo'
import PageHero from '../components/shared/PageHero'
import { Section, SectionHeading, IconFeatureGrid } from '../components/shared/Section'
import { ShieldCheck, FileCheck2, Eye, Users, Globe2, AlertTriangle } from 'lucide-react'

const PROGRAM = [
  { icon: FileCheck2, title: 'Identity verification', body: 'Every account completes KYC checks against global sanctions and PEP watchlists before trading.' },
  { icon: Eye, title: 'Transaction monitoring', body: 'Automated systems screen transactions in real time for patterns consistent with money laundering or fraud.' },
  { icon: Users, title: 'Independent compliance team', body: 'A dedicated team, separate from growth and product, reviews policy and investigates flagged activity.' },
  { icon: Globe2, title: 'Jurisdictional controls', body: 'Product availability is restricted in jurisdictions where we do not hold an appropriate license or registration.' },
  { icon: AlertTriangle, title: 'Suspicious activity reporting', body: 'We file reports with relevant financial authorities as required by law in each operating jurisdiction.' },
  { icon: ShieldCheck, title: 'Regular audits', body: 'Our AML program is reviewed periodically by independent third parties.' },
]

export default function Compliance() {
  return (
    <>
      <SEO
        title="Compliance & AML"
        description="Learn about CoinBidex's licensing, anti-money-laundering program, and regulatory compliance approach."
        path="/compliance"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Compliance', path: '/compliance' }])}
      />

      <PageHero
        dark
        eyebrow="Compliance"
        title="Operating within the rules, everywhere we operate"
        description="CoinBidex maintains a dedicated compliance program covering licensing, anti-money-laundering controls, and sanctions screening across every market we serve."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Compliance', path: '/compliance' }]}
      />

      <Section>
        <SectionHeading eyebrow="Our AML program" title="What we actually do" />
        <div className="mt-14"><IconFeatureGrid items={PROGRAM} /></div>
      </Section>

      <Section className="bg-surface-50 border-t border-surface-100">
        <div className="rounded-2xl border border-surface-200 bg-white p-8 max-w-3xl mx-auto">
          <h2 className="font-semibold text-ink-950 text-xl">Licensing status</h2>
          <p className="mt-3 text-sm text-ink-950/60 leading-relaxed">
            CoinBidex operates under money services business and virtual asset
            service provider registrations in the jurisdictions where it is
            licensed to do so. Availability of specific products varies by
            region based on local licensing status. Contact{' '}
            <a href="mailto:compliance@coinbidex.com" className="text-brand-600 font-medium">compliance@coinbidex.com</a>{' '}
            for jurisdiction-specific licensing documentation.
          </p>
        </div>
      </Section>
    </>
  )
}
