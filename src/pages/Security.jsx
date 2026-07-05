import SEO, { breadcrumbJsonLd } from '../lib/seo'
import PageHero from '../components/shared/PageHero'
import { Section, IconFeatureGrid, StatRow } from '../components/shared/Section'
import { Lock, Fingerprint, Eye, Server, ShieldCheck, KeyRound } from 'lucide-react'

const PRACTICES = [
  { icon: Lock, title: 'Cold storage custody', body: 'Over 98% of user funds are held in offline, air-gapped cold storage with multi-signature withdrawal approval.' },
  { icon: Fingerprint, title: 'Mandatory 2FA', body: 'Every account requires two-factor authentication for login and withdrawals — no exceptions.' },
  { icon: KeyRound, title: 'Withdrawal whitelisting', body: 'Lock withdrawals to pre-approved addresses only, with a 24-hour delay on any new address.' },
  { icon: Eye, title: 'Independent audits', body: 'Our infrastructure and smart contracts undergo regular third-party security audits.' },
  { icon: Server, title: 'Real-time monitoring', body: 'Automated anomaly detection flags and holds suspicious withdrawal patterns for manual review.' },
  { icon: ShieldCheck, title: 'Insurance fund', body: 'A dedicated reserve fund exists to cover users in the unlikely event of a platform security incident.' },
]

export default function Security() {
  return (
    <>
      <SEO
        title="Security at CoinBidex"
        description="Learn how CoinBidex protects user funds with cold-storage custody, mandatory 2FA, independent audits, and real-time monitoring."
        path="/security"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Security', path: '/security' }])}
      />

      <PageHero
        dark
        eyebrow="Trust & safety"
        title="Security isn't a feature. It's the foundation."
        description="Protecting user funds is the single most important thing we do. Here's exactly how we approach it — no vague promises, just the practices we follow every day."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Security', path: '/security' }]}
      />

      <Section dark className="pt-0 -mt-2">
        <StatRow dark stats={[
          { value: '98%', label: 'Funds in cold storage' },
          { value: '$250M', label: 'Insurance fund coverage' },
          { value: '0', label: 'Funds lost to breaches' },
          { value: '24/7', label: 'Security operations center' },
        ]} />
      </Section>

      <Section>
        <IconFeatureGrid items={PRACTICES} />
      </Section>

      <Section className="bg-surface-50 border-t border-surface-100">
        <div className="rounded-2xl border border-surface-200 bg-white p-8 max-w-3xl mx-auto text-center shadow-sm">
          <h2 className="font-semibold text-ink-950 text-xl">Found a vulnerability?</h2>
          <p className="mt-2 text-sm text-ink-950/60 leading-relaxed">
            We run a responsible disclosure program. If you've found a security issue,
            please email <a href="mailto:security@coinbidex.com" className="text-brand-600 hover:text-brand-700 font-medium">security@coinbidex.com</a> before
            disclosing it publicly — we reward valid reports with bounties up to $50,000.
          </p>
        </div>
      </Section>
    </>
  )
}
