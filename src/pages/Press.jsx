import SEO, { breadcrumbJsonLd } from '../lib/seo'
import PageHero from '../components/shared/PageHero'
import { Section, SectionHeading } from '../components/shared/Section'
import Button from '../components/shared/Button'
import { Download, Mail } from 'lucide-react'

const MENTIONS = [
  { outlet: 'Financial Digest', date: 'May 2026', title: 'How mid-size exchanges are winning institutional trust' },
  { outlet: 'Ledger Weekly', date: 'March 2026', title: 'CoinBidex surpasses 4 million registered users' },
  { outlet: 'Block & Beyond', date: 'January 2026', title: 'Inside the security review process at a top-15 exchange' },
  { outlet: 'FinTech Review', date: 'November 2025', title: 'CoinBidex launches institutional prime brokerage suite' },
]

export default function Press() {
  return (
    <>
      <SEO
        title="Press & Media"
        description="Media resources, brand assets, and press contact information for CoinBidex."
        path="/press"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Press', path: '/press' }])}
      />

      <PageHero
        eyebrow="Press"
        title="Press & media resources"
        description="Brand assets, company facts, and a direct line to our communications team."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Press', path: '/press' }]}
        actions={[{ label: 'Media Inquiries', props: { href: 'mailto:press@coinbidex.com', size: 'lg' } }]}
      />

      <Section className="pt-0">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-surface-200 bg-white p-7">
            <Download size={22} className="text-brand-600" />
            <h3 className="mt-4 font-semibold text-ink-950">Brand assets</h3>
            <p className="mt-2 text-sm text-ink-950/55 leading-relaxed">Logos, product screenshots, and executive headshots for editorial use.</p>
            <Button href="/assets/logo-full.png" variant="secondary" size="sm" className="mt-4">Download logo pack</Button>
          </div>
          <div className="rounded-2xl border border-surface-200 bg-white p-7">
            <Mail size={22} className="text-brand-600" />
            <h3 className="mt-4 font-semibold text-ink-950">Media contact</h3>
            <p className="mt-2 text-sm text-ink-950/55 leading-relaxed">For interviews, data requests, or comment, reach our communications team directly.</p>
            <a href="mailto:press@coinbidex.com" className="mt-4 inline-block text-sm font-medium text-brand-600">press@coinbidex.com</a>
          </div>
        </div>
      </Section>

      <Section className="bg-surface-50 border-t border-surface-100">
        <SectionHeading eyebrow="In the news" title="Recent coverage" center={false} />
        <div className="mt-10 space-y-4">
          {MENTIONS.map(m => (
            <div key={m.title} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-xl border border-surface-200 bg-white p-5">
              <div>
                <p className="font-medium text-ink-950">{m.title}</p>
                <p className="text-xs text-ink-950/45 mt-1">{m.outlet} · {m.date}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
