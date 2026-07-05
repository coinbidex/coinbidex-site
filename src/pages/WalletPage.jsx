import SEO, { breadcrumbJsonLd } from '../lib/seo'
import PageHero from '../components/shared/PageHero'
import { Section, SectionHeading, IconFeatureGrid } from '../components/shared/Section'
import Button from '../components/shared/Button'
import { Wallet2, Fingerprint, ArrowLeftRight, QrCode } from 'lucide-react'

const TRADE_URL = import.meta.env.VITE_TRADE_URL || 'https://trade.coinbidex.com'

const FEATURES = [
  { icon: Wallet2, title: 'One wallet, every asset', body: 'Hold, send, and receive 300+ assets from a single, unified wallet balance.' },
  { icon: Fingerprint, title: 'Biometric protection', body: 'Face ID and fingerprint unlock keep your wallet secure on mobile.' },
  { icon: ArrowLeftRight, title: 'Instant internal transfers', body: 'Send to another CoinBidex user by username, fee-free and instant.' },
  { icon: QrCode, title: 'On-chain withdrawals', body: 'Withdraw to any external address across 40+ supported networks.' },
]

export default function WalletPage() {
  return (
    <>
      <SEO
        title="CoinBidex Wallet"
        description="A unified, secure wallet for 300+ digital assets — send, receive, and manage your crypto from one place."
        path="/wallet"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Wallet', path: '/wallet' }])}
      />

      <PageHero
        eyebrow="Wallet"
        title="One wallet for everything you hold"
        description="Send, receive, and manage 300+ digital assets across 40+ networks — protected by the same cold-storage custody model as the rest of CoinBidex."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Wallet', path: '/wallet' }]}
        actions={[{ label: 'Open Wallet', props: { href: `${TRADE_URL}/wallet`, size: 'lg' } }]}
      />

      <Section className="pt-0">
        <IconFeatureGrid items={FEATURES} columns={4} />
      </Section>

      <Section className="bg-surface-50 border-t border-surface-100 text-center">
        <SectionHeading eyebrow="Custody" title="Backed by the same security as our exchange" description="98% of wallet balances are held in offline cold storage, with the same 2FA and withdrawal whitelisting protections as your trading account." />
        <div className="mt-8"><Button to="/security" variant="secondary" size="lg">Read about our security</Button></div>
      </Section>
    </>
  )
}
