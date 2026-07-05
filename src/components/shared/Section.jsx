import Container from './Container'

export function Section({ children, className = '', dark = false, tight = false, id }) {
  return (
    <section id={id} className={`${tight ? 'py-14 sm:py-16' : 'py-16 sm:py-24'} ${dark ? 'bg-ink-950 text-white' : 'bg-white'} ${className}`}>
      <Container>{children}</Container>
    </section>
  )
}

export function SectionHeading({ eyebrow, title, description, center = true, dark = false }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className={`text-sm font-semibold uppercase tracking-wide ${dark ? 'text-brand-400' : 'text-brand-600'}`}>{eyebrow}</p>
      )}
      <h2 className={`mt-3 text-3xl sm:text-4xl font-bold ${dark ? 'text-white' : 'text-ink-950'}`}>{title}</h2>
      {description && <p className={`mt-4 ${dark ? 'text-white/55' : 'text-ink-950/55'}`}>{description}</p>}
    </div>
  )
}

const STAT_COLS = { 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-3', 4: 'sm:grid-cols-4', 5: 'sm:grid-cols-5' }

export function StatRow({ stats, dark = false }) {
  const cols = STAT_COLS[Math.min(stats.length, 5)] || 'sm:grid-cols-4'
  return (
    <div className={`grid grid-cols-2 ${cols} gap-8 text-center`}>
      {stats.map((s) => (
        <div key={s.label}>
          <div className={`text-2xl sm:text-3xl font-bold ${dark ? 'text-white' : 'text-ink-950'}`}>{s.value}</div>
          <div className={`mt-1 text-sm ${dark ? 'text-white/45' : 'text-ink-950/50'}`}>{s.label}</div>
        </div>
      ))}
    </div>
  )
}

const FEATURE_COLS = { 2: 'lg:grid-cols-2', 3: 'lg:grid-cols-3', 4: 'lg:grid-cols-4' }

export function IconFeatureGrid({ items, columns = 3, dark = false }) {
  const cols = FEATURE_COLS[columns] || 'lg:grid-cols-3'
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 ${cols} gap-6`}>
      {items.map(({ icon: Icon, title, body }) => (
        <div
          key={title}
          className={`rounded-2xl border p-7 transition-all ${
            dark
              ? 'border-white/10 bg-white/[0.03] hover:border-brand-500/40'
              : 'border-surface-200 bg-white hover:border-brand-300 hover:shadow-lg hover:shadow-brand-500/5'
          }`}
        >
          <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${dark ? 'bg-brand-500/15' : 'bg-brand-50'}`}>
            <Icon size={22} className={dark ? 'text-brand-400' : 'text-brand-600'} />
          </div>
          <h3 className={`mt-5 font-semibold text-lg ${dark ? 'text-white' : 'text-ink-950'}`}>{title}</h3>
          <p className={`mt-2 text-sm leading-relaxed ${dark ? 'text-white/55' : 'text-ink-950/55'}`}>{body}</p>
        </div>
      ))}
    </div>
  )
}

export function StepList({ steps }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map(({ icon: Icon, title, body }, i) => (
        <div key={title} className="relative rounded-2xl border border-surface-200 bg-surface-50 p-6">
          <span className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white shadow-lg shadow-brand-500/30">
            {i + 1}
          </span>
          <Icon size={28} className="text-brand-500" />
          <h3 className="mt-4 font-semibold text-ink-950">{title}</h3>
          <p className="mt-2 text-sm text-ink-950/55 leading-relaxed">{body}</p>
        </div>
      ))}
    </div>
  )
}
