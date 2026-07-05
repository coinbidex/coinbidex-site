import { Link } from 'react-router-dom'
import { UserCircle, ShieldCheck, Wallet, LineChart, Building2, FileWarning, MessageCircle } from 'lucide-react'
import SEO, { breadcrumbJsonLd } from '../lib/seo'
import PageHero from '../components/shared/PageHero'
import { Section } from '../components/shared/Section'
import Button from '../components/shared/Button'
import Faq, { FAQ_ITEMS } from '../components/home/Faq'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

const TOPICS = [
  { icon: UserCircle, title: 'Account & Verification', body: 'Sign-up, KYC, login issues, and account recovery.' },
  { icon: Wallet, title: 'Deposits & Withdrawals', body: 'Funding methods, processing times, and limits.' },
  { icon: LineChart, title: 'Trading', body: 'Order types, spot trading, convert, and P2P.' },
  { icon: ShieldCheck, title: 'Security', body: '2FA setup, whitelisting, and reporting suspicious activity.' },
  { icon: Building2, title: 'Institutional', body: 'Prime brokerage, OTC, and API access.' },
  { icon: FileWarning, title: 'Report an Issue', body: 'Bugs, transaction disputes, and account limitations.' },
]

export default function Support() {
  return (
    <>
      <SEO
        title="Help Center"
        description="Find answers to common questions about CoinBidex accounts, verification, fees, and security, or contact our 24/7 support team."
        path="/support"
        jsonLd={[breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Support', path: '/support' }]), faqJsonLd]}
      />

      <PageHero
        eyebrow="We're here to help"
        title="Help Center"
        description="Search our knowledge base or reach a real person — live chat is staffed 24/7, every day of the year."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Support', path: '/support' }]}
        actions={[{ label: 'Contact Support', props: { to: '/contact', variant: 'secondary', size: 'lg' } }]}
      />

      <Section className="pt-0">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOPICS.map(({ icon: Icon, title, body }) => (
            <Link key={title} to="/contact" className="rounded-2xl border border-surface-200 bg-white p-6 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-500/5 transition-all">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50">
                <Icon size={22} className="text-brand-600" />
              </div>
              <h3 className="mt-5 font-semibold text-ink-950">{title}</h3>
              <p className="mt-2 text-sm text-ink-950/55 leading-relaxed">{body}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Faq />

      <Section className="border-t border-surface-100">
        <div className="rounded-2xl bg-ink-950 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400"><MessageCircle size={24} /></span>
            <div>
              <p className="font-semibold text-white">Still need help?</p>
              <p className="text-sm text-white/55">Start a live chat from your dashboard — average response time under 2 minutes.</p>
            </div>
          </div>
          <Button to="/contact" size="lg">Contact Support</Button>
        </div>
      </Section>
    </>
  )
}
