import SEO, { breadcrumbJsonLd } from '../lib/seo'
import PageHero from '../components/shared/PageHero'
import { Section, SectionHeading, IconFeatureGrid, StepList } from '../components/shared/Section'
import Button from '../components/shared/Button'
import { ShieldCheck, Wallet, Users2, Globe2, UserPlus, MessageSquare, HandCoins, CheckCircle2 } from 'lucide-react'

const TRADE_URL = import.meta.env.VITE_TRADE_URL || 'https://trade.coinbidex.com'

const REASONS = [
  { icon: ShieldCheck, title: 'Escrow protected', body: 'Crypto is locked in escrow the moment a trade starts and only released once payment is confirmed.' },
  { icon: Wallet, title: 'Zero fees', body: 'CoinBidex charges no fee to either party on P2P trades.' },
  { icon: Users2, title: 'Verified counterparties', body: 'Trade with KYC-verified users and a visible completion-rate history.' },
  { icon: Globe2, title: '300+ payment methods', body: 'Bank transfer, mobile money, and local payment apps across 150+ countries.' },
]

const STEPS = [
  { icon: UserPlus, title: 'Post or browse an ad', body: 'Choose a listing that matches your price and payment method, or post your own.' },
  { icon: MessageSquare, title: 'Chat with your counterparty', body: 'Confirm details in the built-in chat — everything is logged for dispute resolution.' },
  { icon: HandCoins, title: 'Send payment', body: 'Pay directly to the seller using the agreed method. Crypto stays locked in escrow.' },
  { icon: CheckCircle2, title: 'Funds released', body: 'Once payment is confirmed, escrowed crypto is released to your wallet instantly.' },
]

export default function P2P() {
  return (
    <>
      <SEO
        title="P2P Trading — Trade Directly, Zero Fees"
        description="Buy and sell crypto directly with other users on CoinBidex P2P, with escrow protection and zero trading fees."
        path="/p2p"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'P2P Trading', path: '/p2p' }])}
      />

      <PageHero
        eyebrow="Peer-to-Peer"
        title="Trade directly, with zero fees"
        description="Buy and sell crypto with other verified users using your preferred local payment method — every trade is protected by escrow."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'P2P Trading', path: '/p2p' }]}
        actions={[{ label: 'Browse P2P Ads', props: { href: `${TRADE_URL}/p2p`, size: 'lg' } }]}
      />

      <Section className="pt-0">
        <SectionHeading eyebrow="How it works" title="Four steps to a safe P2P trade" />
        <div className="mt-14"><StepList steps={STEPS} /></div>
      </Section>

      <Section className="bg-surface-50 border-t border-surface-100">
        <SectionHeading eyebrow="Why P2P" title="Built-in protection, every trade" />
        <div className="mt-14"><IconFeatureGrid items={REASONS} columns={4} /></div>
      </Section>

      <Section className="text-center">
        <Button href={`${TRADE_URL}/p2p`} size="lg">Start a P2P Trade</Button>
      </Section>
    </>
  )
}
