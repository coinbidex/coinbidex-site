import { motion } from 'framer-motion'
import { ShieldCheck, Zap, TrendingUp, ArrowRight } from 'lucide-react'
import Container from '../shared/Container'
import Button from '../shared/Button'

const TRADE_URL = import.meta.env.VITE_TRADE_URL || 'https://trade.coinbidex.com'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-16 sm:pt-24 sm:pb-24">
      <div className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute -top-40 left-1/2 -z-10 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl" />

      <Container className="text-center">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-surface-200 bg-white px-4 py-1.5 text-sm font-medium text-ink-950/70 shadow-sm"
        >
          <span className="h-2 w-2 rounded-full bg-mint-500 animate-pulse" />
          Licensed &amp; trusted by 4M+ traders in 150+ countries
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-7 text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ink-950 leading-[1.08]"
        >
          The <span className="text-gradient">enterprise-grade</span>
          <br className="hidden sm:block" /> way to trade crypto
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-ink-950/55"
        >
          Buy, sell, and trade Bitcoin, Ethereum, and 300+ digital assets with
          sub-second execution, transparent low fees, and 98% of funds held in
          insured cold storage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href={`${TRADE_URL}/register`} size="lg">
            Create Free Account <ArrowRight size={17} />
          </Button>
          <Button to="/markets" variant="secondary" size="lg">
            View Live Markets
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {[
            { icon: ShieldCheck, label: '98% cold-storage custody' },
            { icon: Zap, label: 'Sub-second order execution' },
            { icon: TrendingUp, label: '0.1% maker / 0.2% taker fees' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-2.5 rounded-xl border border-surface-200 bg-white/80 backdrop-blur px-4 py-3.5 text-sm font-medium text-ink-950/75 shadow-sm">
              <Icon size={18} className="text-brand-500 shrink-0" />
              {label}
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
