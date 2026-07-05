import SEO, { breadcrumbJsonLd } from '../lib/seo'
import PageHero from '../components/shared/PageHero'
import { Section } from '../components/shared/Section'
import Button from '../components/shared/Button'

const TRADE_URL = import.meta.env.VITE_TRADE_URL || 'https://trade.coinbidex.com'

const TIERS = [
  { volume: '$0 – $50K', maker: '0.10%', taker: '0.20%' },
  { volume: '$50K – $500K', maker: '0.08%', taker: '0.16%' },
  { volume: '$500K – $5M', maker: '0.05%', taker: '0.12%' },
  { volume: '$5M – $25M', maker: '0.02%', taker: '0.08%' },
  { volume: '$25M+', maker: '0.00%', taker: '0.05%' },
]

const OTHER_FEES = [
  { title: 'Crypto deposits', body: 'Always free, regardless of network or asset.' },
  { title: 'Card & bank deposits', body: 'A small processor fee is shown up front before you confirm — never hidden.' },
  { title: 'Network withdrawals', body: "Set at the network's actual cost. We never mark up gas or miner fees." },
  { title: 'Instant Convert', body: 'A transparent spread of up to 0.5% is built into the quoted rate — shown before you confirm.' },
  { title: 'P2P trading', body: 'Zero fees for both buyers and sellers on peer-to-peer trades.' },
  { title: 'Staking', body: 'CoinBidex takes a service fee of 5–15% of staking rewards, varying by asset — always disclosed on the Earn page.' },
]

export default function Fees() {
  return (
    <>
      <SEO
        title="Trading Fees"
        description="See CoinBidex's transparent, volume-based trading fee schedule. Flat maker and taker fees with no hidden spreads."
        path="/fees"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Fees', path: '/fees' }])}
      />

      <PageHero
        eyebrow="Pricing"
        title="Simple, transparent fees"
        description="Volume-based pricing that rewards active traders. The more you trade, the less you pay — with no hidden spreads baked into the price you see."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Fees', path: '/fees' }]}
      />

      <Section className="pt-0">
        <div className="overflow-x-auto rounded-2xl border border-surface-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-surface-200 bg-surface-50 text-left text-ink-950/45">
                <th className="px-5 py-3 font-medium">30-day volume</th>
                <th className="px-5 py-3 font-medium text-right">Maker fee</th>
                <th className="px-5 py-3 font-medium text-right">Taker fee</th>
              </tr>
            </thead>
            <tbody>
              {TIERS.map(tier => (
                <tr key={tier.volume} className="border-b border-surface-100 last:border-0">
                  <td className="px-5 py-4 font-medium text-ink-950">{tier.volume}</td>
                  <td className="px-5 py-4 text-right text-ink-950/70">{tier.maker}</td>
                  <td className="px-5 py-4 text-right text-ink-950/70">{tier.taker}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-ink-950/40">Fee tiers are calculated on your trailing 30-day spot trading volume across all pairs, updated daily.</p>
      </Section>

      <Section className="bg-surface-50 border-t border-surface-100">
        <h2 className="text-2xl font-bold text-ink-950 mb-8">Other fees</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {OTHER_FEES.map(f => (
            <div key={f.title} className="rounded-2xl border border-surface-200 bg-white p-6">
              <h3 className="font-semibold text-ink-950">{f.title}</h3>
              <p className="mt-2 text-sm text-ink-950/55 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <Button href={`${TRADE_URL}/register`} size="lg">Start Trading</Button>
      </Section>
    </>
  )
}
