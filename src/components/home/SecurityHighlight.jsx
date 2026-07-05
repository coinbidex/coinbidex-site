import { Lock, Fingerprint, Eye, Server } from 'lucide-react'
import Container from '../shared/Container'
import Button from '../shared/Button'

const POINTS = [
  { icon: Lock, text: '98% of user funds in offline, insured cold storage' },
  { icon: Fingerprint, text: 'Mandatory 2FA and withdrawal address whitelisting' },
  { icon: Eye, text: 'Continuous, independent smart contract and infra audits' },
  { icon: Server, text: 'Real-time anomaly detection on every withdrawal' },
]

export default function SecurityHighlight() {
  return (
    <section className="py-20 sm:py-28 bg-ink-950 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid opacity-[0.06] [mask-image:radial-gradient(ellipse_60%_60%_at_30%_50%,black,transparent)]" />
      <Container className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-400">Security first</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">Security isn't a feature. It's the foundation.</h2>
          <p className="mt-5 text-white/55 leading-relaxed">
            Every design decision on CoinBidex starts with one question: how does
            this protect user funds? That discipline is why institutions and
            traders trust us to move billions in volume every month without
            incident.
          </p>
          <div className="mt-8">
            <Button to="/security" variant="secondary">Read our security practices</Button>
          </div>
        </div>

        <div className="space-y-4">
          {POINTS.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/15">
                <Icon size={20} className="text-brand-400" />
              </span>
              <span className="text-sm text-white/80">{text}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
