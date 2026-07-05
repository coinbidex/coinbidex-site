import { Apple, PlayCircle, Star } from 'lucide-react'
import Container from '../shared/Container'

export default function AppDownload() {
  return (
    <section className="py-20 sm:py-28 bg-white overflow-hidden">
      <Container className="grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Trade anywhere</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-ink-950">
            Take the market with you
          </h2>
          <p className="mt-5 text-ink-950/55 leading-relaxed max-w-md">
            Full trading functionality, real-time alerts, and biometric login —
            the CoinBidex app puts a professional trading desk in your pocket.
          </p>

          <div className="mt-6 flex items-center gap-1.5 text-sm text-ink-950/70">
            <div className="flex text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" strokeWidth={0} />)}
            </div>
            4.8 average rating across 210,000+ reviews
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#" className="flex items-center gap-3 rounded-xl bg-ink-950 px-5 py-3 text-white hover:bg-ink-900 transition-colors">
              <Apple size={26} />
              <span className="text-left leading-tight">
                <span className="block text-[10px] text-white/60">Download on the</span>
                <span className="block text-sm font-semibold">App Store</span>
              </span>
            </a>
            <a href="#" className="flex items-center gap-3 rounded-xl bg-ink-950 px-5 py-3 text-white hover:bg-ink-900 transition-colors">
              <PlayCircle size={26} />
              <span className="text-left leading-tight">
                <span className="block text-[10px] text-white/60">Get it on</span>
                <span className="block text-sm font-semibold">Google Play</span>
              </span>
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" />
          <div className="relative w-64 rounded-[2.5rem] border-8 border-ink-950 bg-ink-950 shadow-2xl">
            <div className="rounded-[2rem] overflow-hidden bg-white">
              <div className="bg-ink-950 px-4 pt-6 pb-8 text-white">
                <p className="text-xs text-white/50">Total balance</p>
                <p className="mt-1 text-2xl font-bold">$48,204.12</p>
                <p className="mt-1 text-xs font-medium text-mint-400">+2.4% today</p>
              </div>
              <div className="space-y-3 p-4">
                {[
                  { s: 'BTC', c: '#F7931A', v: '$65,204' },
                  { s: 'ETH', c: '#627EEA', v: '$3,412' },
                  { s: 'SOL', c: '#14F195', v: '$146.80' },
                ].map((row) => (
                  <div key={row.s} className="flex items-center justify-between rounded-xl bg-surface-50 px-3 py-2.5">
                    <span className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold text-white" style={{ backgroundColor: row.c }}>{row.s[0]}</span>
                      <span className="text-sm font-medium text-ink-950">{row.s}</span>
                    </span>
                    <span className="text-sm font-semibold text-ink-950">{row.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
