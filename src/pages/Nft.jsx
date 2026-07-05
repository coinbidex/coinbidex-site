import SEO, { breadcrumbJsonLd } from '../lib/seo'
import PageHero from '../components/shared/PageHero'
import { Section, SectionHeading, IconFeatureGrid } from '../components/shared/Section'
import Button from '../components/shared/Button'
import { Image as ImageIcon, Percent, Wallet, ShieldCheck } from 'lucide-react'

const TRADE_URL = import.meta.env.VITE_TRADE_URL || 'https://trade.coinbidex.com'

const REASONS = [
  { icon: ImageIcon, title: 'Mint & trade', body: 'Mint new collections or trade on the secondary market — all in one place.' },
  { icon: Percent, title: 'Low marketplace fee', body: 'Just 1.5% on secondary sales, with automatic creator royalties.' },
  { icon: Wallet, title: 'One wallet', body: 'Your existing CoinBidex wallet holds NFTs alongside your crypto — no separate connection needed.' },
  { icon: ShieldCheck, title: 'Verified collections', body: 'Blue-check verification helps you avoid counterfeit and copy-cat collections.' },
]

const COLLECTIONS = [
  { name: 'Aurora Punks', floor: '2.4 ETH', color: '#7c3aed' },
  { name: 'Neon Fauna', floor: '0.85 ETH', color: '#0ea5e9' },
  { name: 'CryptoBid Originals', floor: '1.2 ETH', color: '#1440dd' },
  { name: 'Pixel Vault', floor: '0.32 ETH', color: '#f97316' },
]

export default function Nft() {
  return (
    <>
      <SEO
        title="NFT Marketplace"
        description="Mint, buy, and trade NFTs on the CoinBidex NFT Marketplace with low fees and verified collections."
        path="/nft"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'NFT Marketplace', path: '/nft' }])}
      />

      <PageHero
        eyebrow="NFT Marketplace"
        title="Mint, collect, and trade NFTs"
        description="A marketplace built into your existing CoinBidex wallet — with verified collections and industry-low fees."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'NFT Marketplace', path: '/nft' }]}
        actions={[{ label: 'Explore Marketplace', props: { href: `${TRADE_URL}/nft`, size: 'lg' } }]}
      />

      <Section className="pt-0">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COLLECTIONS.map(c => (
            <div key={c.name} className="rounded-2xl border border-surface-200 bg-white overflow-hidden">
              <div className="h-32" style={{ background: `linear-gradient(135deg, ${c.color}33, ${c.color}0d)` }} />
              <div className="p-4">
                <p className="font-semibold text-ink-950 text-sm">{c.name}</p>
                <p className="mt-1 text-xs text-ink-950/45">Floor: {c.floor}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface-50 border-t border-surface-100">
        <SectionHeading eyebrow="Why our marketplace" title="NFTs, without the friction" />
        <div className="mt-14"><IconFeatureGrid items={REASONS} columns={4} /></div>
      </Section>
    </>
  )
}
