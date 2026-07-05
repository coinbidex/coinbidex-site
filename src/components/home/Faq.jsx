import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Container from '../shared/Container'

export const FAQ_ITEMS = [
  {
    q: 'Is CoinBidex safe to use?',
    a: 'Yes. We hold over 98% of user funds in offline cold storage, require 2FA on every account, and run continuous security audits. Read more on our Security page.',
  },
  {
    q: 'What are the trading fees?',
    a: 'CoinBidex charges a flat 0.1% maker fee and 0.2% taker fee on spot trades, with no hidden spreads. Fees can be reduced further with higher trading volume. See our Fees page for the full schedule.',
  },
  {
    q: 'How long does verification take?',
    a: 'Most identity verifications are completed within minutes. In rare cases requiring manual review, it can take up to 24 hours.',
  },
  {
    q: 'Which countries can use CoinBidex?',
    a: 'CoinBidex is available in over 150 countries. Availability of specific features (like card purchases) may vary by region due to local regulations.',
  },
  {
    q: 'Does CoinBidex offer institutional services?',
    a: 'Yes — prime brokerage, custody, and an OTC desk for large block trades are available. Visit our Institutional page to get in touch with our team.',
  },
  {
    q: 'How do I contact support?',
    a: 'Our support team is available 24/7 via live chat from your dashboard, or by emailing support@coinbidex.com.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-20 sm:py-28 bg-surface-50">
      <Container className="max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-950">Frequently asked questions</h2>
        </div>

        <div className="mt-12 space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.q} className="rounded-xl border border-surface-200 bg-white overflow-hidden">
                <button
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-ink-950">{item.q}</span>
                  <ChevronDown size={18} className={`shrink-0 text-ink-950/40 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <p className="px-5 pb-4 text-sm text-ink-950/60 leading-relaxed">{item.a}</p>
                )}
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
