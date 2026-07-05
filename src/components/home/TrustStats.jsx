import Container from '../shared/Container'

const STATS = [
  { value: '4.2M+', label: 'Registered users' },
  { value: '$2.6B+', label: '24h trading volume' },
  { value: '300+', label: 'Tradable assets' },
  { value: '150+', label: 'Countries served' },
  { value: '99.99%', label: 'Uptime last 12 months' },
]

export default function TrustStats() {
  return (
    <section className="bg-ink-950 py-10">
      <Container className="grid grid-cols-2 sm:grid-cols-5 gap-8 text-center">
        {STATS.map(stat => (
          <div key={stat.label}>
            <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
            <div className="mt-1 text-xs sm:text-sm text-white/45">{stat.label}</div>
          </div>
        ))}
      </Container>
    </section>
  )
}
