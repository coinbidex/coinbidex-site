import { Rocket, Megaphone, ArrowRight } from 'lucide-react'
import Button from './Button'

const TRADE_URL = import.meta.env.VITE_TRADE_URL || 'https://trade.coinbidex.com'

const VARIANTS = {
  list: {
    icon: Rocket,
    eyebrow: 'For projects',
    title: 'Want your token listed here?',
    body: 'Get in front of 4.2M active traders across 150+ countries. Apply in minutes — our listings team reviews every submission on a rolling basis.',
    cta: 'Apply to list',
    to: '/listing',
  },
  advertise: {
    icon: Megaphone,
    eyebrow: 'For marketers',
    title: 'Advertise on CoinBidex',
    body: 'Put your brand in front of active crypto traders with placements across our markets pages, ticker, and newsletters.',
    cta: 'Advertising options',
    href: `${TRADE_URL}/advertise`,
  },
}

/**
 * Compact promo card encouraging projects to apply for a listing, or brands
 * to advertise — the "sponsored slot" pattern used inline in market tables
 * on CoinMarketCap/CoinGecko-style sites. Reused inline in the Markets
 * table and in the coin-detail sidebar.
 */
export function GrowthPromoCard({ variant = 'list', className = '' }) {
  const v = VARIANTS[variant]
  const Icon = v.icon
  return (
    <div className={`rounded-2xl border border-dashed border-brand-300 bg-brand-50/40 p-6 ${className}`}>
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10">
        <Icon size={20} className="text-brand-600" />
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-600">{v.eyebrow}</p>
      <h3 className="mt-1.5 font-semibold text-ink-950">{v.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-950/55">{v.body}</p>
      <Button {...(v.to ? { to: v.to } : { href: v.href })} variant="secondary" size="sm" className="mt-4">
        {v.cta} <ArrowRight size={14} />
      </Button>
    </div>
  )
}

/** Full-width banner variant used at the bottom of the Markets page. */
export function GrowthPromoBanner() {
  return (
    <div className="mt-6 grid gap-5 sm:grid-cols-2">
      <div className="rounded-2xl border border-surface-200 bg-white p-7">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50">
          <Rocket size={22} className="text-brand-600" />
        </div>
        <h3 className="mt-5 font-semibold text-lg text-ink-950">List your project on CoinBidex</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-950/55">
          Reach millions of active traders and get discovered the moment your market goes live —
          with joint marketing support and a straightforward review process.
        </p>
        <Button to="/listing" variant="primary" size="md" className="mt-5">
          Apply for listing <ArrowRight size={15} />
        </Button>
      </div>
      <div className="rounded-2xl border border-surface-200 bg-white p-7">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50">
          <Megaphone size={22} className="text-brand-600" />
        </div>
        <h3 className="mt-5 font-semibold text-lg text-ink-950">Advertise to our audience</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-950/55">
          Place your brand across our markets pages, live ticker, and newsletter to reach traders
          already active in crypto — with flexible placements for any budget.
        </p>
        <Button href={`${TRADE_URL}/advertise`} variant="secondary" size="md" className="mt-5">
          Explore ad placements <ArrowRight size={15} />
        </Button>
      </div>
    </div>
  )
}
