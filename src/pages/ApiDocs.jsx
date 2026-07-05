import SEO, { breadcrumbJsonLd } from '../lib/seo'
import PageHero from '../components/shared/PageHero'
import { Section, SectionHeading, IconFeatureGrid } from '../components/shared/Section'
import Button from '../components/shared/Button'
import { Code2, Webhook, Gauge, ShieldCheck } from 'lucide-react'

const FEATURES = [
  { icon: Code2, title: 'REST & WebSocket', body: 'Full trading, account, and market data endpoints over REST, with real-time streams via WebSocket.' },
  { icon: Webhook, title: 'Sandbox environment', body: 'Test your integration against a full sandbox before going live with real funds.' },
  { icon: Gauge, title: 'High rate limits', body: 'Generous default limits, with higher tiers available for institutional integrations.' },
  { icon: ShieldCheck, title: 'Scoped API keys', body: 'Create read-only, trade-only, or withdrawal-enabled keys with IP whitelisting.' },
]

const SNIPPET = `curl https://api.coinbidex.com/v1/markets/BTCUSDT/ticker \\
  -H "Authorization: Bearer YOUR_API_KEY"

# Example response
{
  "symbol": "BTCUSDT",
  "price": "65204.12",
  "change24h": "2.41",
  "volume24h": "184920412.55"
}`

export default function ApiDocs() {
  return (
    <>
      <SEO
        title="API Documentation"
        description="Integrate with the CoinBidex REST and WebSocket trading API — market data, order management, and account endpoints."
        path="/api-docs"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'API Documentation', path: '/api-docs' }])}
      />

      <PageHero
        eyebrow="Developers"
        title="Build on the CoinBidex API"
        description="A full REST and WebSocket API for market data, order management, and account operations — trusted by market makers and algo traders."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'API Documentation', path: '/api-docs' }]}
        actions={[{ label: 'Get API Keys', props: { to: '/contact', size: 'lg' } }, { label: 'Full Reference (docs.coinbidex.com)', props: { href: 'https://docs.coinbidex.com', variant: 'secondary', size: 'lg' } }]}
      />

      <Section className="pt-0">
        <pre className="overflow-x-auto rounded-2xl bg-ink-950 p-6 text-sm text-white/85 leading-relaxed">
          <code>{SNIPPET}</code>
        </pre>
      </Section>

      <Section className="bg-surface-50 border-t border-surface-100">
        <SectionHeading eyebrow="What you get" title="Everything you need to trade programmatically" />
        <div className="mt-14"><IconFeatureGrid items={FEATURES} columns={4} /></div>
      </Section>
    </>
  )
}
