import SEO from '../lib/seo'
import Hero from '../components/home/Hero'
import TrustStats from '../components/home/TrustStats'
import HowToStart from '../components/home/HowToStart'
import MarketSection from '../components/home/MarketSection'
import Features from '../components/home/Features'
import SecurityHighlight from '../components/home/SecurityHighlight'
import AppDownload from '../components/home/AppDownload'
import Faq, { FAQ_ITEMS } from '../components/home/Faq'
import CtaBanner from '../components/home/CtaBanner'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'CoinBidex',
  url: 'https://coinbidex.com',
}

export default function Home() {
  return (
    <>
      <SEO
        title="CoinBidex — Buy, Sell & Trade Crypto Securely"
        description="CoinBidex is a secure, enterprise-grade cryptocurrency exchange for buying, selling, and trading Bitcoin, Ethereum, and 300+ digital assets. Low fees, fast execution, 24/7 support."
        path="/"
        jsonLd={[websiteJsonLd, faqJsonLd]}
      />
      <Hero />
      <TrustStats />
      <MarketSection />
      <HowToStart />
      <Features />
      <SecurityHighlight />
      <AppDownload />
      <Faq />
      <CtaBanner />
    </>
  )
}
