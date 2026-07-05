import { useState } from 'react'
import { Mail, MessageCircle, Send, Building2, Newspaper } from 'lucide-react'
import SEO, { breadcrumbJsonLd } from '../lib/seo'
import PageHero from '../components/shared/PageHero'
import { Section } from '../components/shared/Section'
import Button from '../components/shared/Button'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // Wire this up to your support ticketing system / email API.
    setSubmitted(true)
  }

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with the CoinBidex team for support, partnership inquiries, or press requests."
        path="/contact"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])}
      />

      <PageHero
        eyebrow="Get in touch"
        title="Contact us"
        description="Have a question or need help with your account? Reach out — our team responds within 24 hours, and live chat is available 24/7 from your dashboard."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]}
      />

      <Section className="pt-0">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-3">
              <a href="mailto:support@coinbidex.com" className="flex items-center gap-3 rounded-xl border border-surface-200 bg-white p-4 text-ink-950/80 hover:border-brand-300 transition-colors">
                <Mail size={18} className="text-brand-500" /> support@coinbidex.com
              </a>
              <a href="mailto:business@coinbidex.com" className="flex items-center gap-3 rounded-xl border border-surface-200 bg-white p-4 text-ink-950/80 hover:border-brand-300 transition-colors">
                <Building2 size={18} className="text-brand-500" /> business@coinbidex.com — partnerships & institutional
              </a>
              <a href="mailto:press@coinbidex.com" className="flex items-center gap-3 rounded-xl border border-surface-200 bg-white p-4 text-ink-950/80 hover:border-brand-300 transition-colors">
                <Newspaper size={18} className="text-brand-500" /> press@coinbidex.com — media inquiries
              </a>
              <a href="https://t.me/coinbidex" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-surface-200 bg-white p-4 text-ink-950/80 hover:border-brand-300 transition-colors">
                <Send size={18} className="text-brand-500" /> @coinbidex on Telegram
              </a>
              <span className="flex items-center gap-3 rounded-xl border border-surface-200 bg-surface-50 p-4 text-ink-950/80">
                <MessageCircle size={18} className="text-brand-500" /> Live chat — available 24/7 in your dashboard
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-surface-200 bg-white p-7 shadow-sm">
            {submitted ? (
              <p className="text-brand-600 font-medium">Thanks — we've received your message and will reply within 24 hours.</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-ink-950/70 mb-1.5">Name</label>
                  <input id="name" required type="text" className="w-full rounded-xl border border-surface-200 bg-white px-4 py-2.5 text-sm text-ink-950 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/10" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-ink-950/70 mb-1.5">Email</label>
                  <input id="email" required type="email" className="w-full rounded-xl border border-surface-200 bg-white px-4 py-2.5 text-sm text-ink-950 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/10" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-ink-950/70 mb-1.5">Message</label>
                  <textarea id="message" required rows={5} className="w-full rounded-xl border border-surface-200 bg-white px-4 py-2.5 text-sm text-ink-950 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/10" />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  )
}
