import Container from './Container'
import Breadcrumbs from './Breadcrumbs'
import Button from './Button'

/**
 * Standard hero banner used at the top of inner marketing pages, keeping
 * the "big exchange" visual language (grid backdrop + brand glow)
 * consistent across the ~20 production pages without re-deriving layout
 * for each one. Pass `dark` for a deep-navy variant used on a handful of
 * pages (Institutional, Security, Compliance) for visual variety.
 */
export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  actions,
  dark = false,
  size = 'md',
}) {
  const pad = size === 'lg' ? 'pt-14 pb-20 sm:pt-20 sm:pb-24' : 'pt-12 pb-14 sm:pt-16 sm:pb-16'

  return (
    <section className={`relative overflow-hidden ${pad} ${dark ? 'bg-ink-950' : 'bg-white'}`}>
      <div className={`absolute inset-0 -z-10 bg-grid ${dark ? 'opacity-[0.06]' : ''} [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]`} />
      <div className={`absolute -top-32 left-1/2 -z-10 h-96 w-[720px] -translate-x-1/2 rounded-full blur-3xl ${dark ? 'bg-brand-500/15' : 'bg-brand-500/10'}`} />

      <Container>
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} dark={dark} />}

        {eyebrow && (
          <p className={`text-sm font-semibold uppercase tracking-wide ${dark ? 'text-brand-400' : 'text-brand-600'}`}>
            {eyebrow}
          </p>
        )}

        <h1 className={`mt-3 max-w-3xl text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] ${dark ? 'text-white' : 'text-ink-950'}`}>
          {title}
        </h1>

        {description && (
          <p className={`mt-5 max-w-2xl text-lg ${dark ? 'text-white/60' : 'text-ink-950/55'}`}>
            {description}
          </p>
        )}

        {actions && (
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {actions.map((a) => (
              <Button key={a.label} {...a.props}>{a.label}</Button>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}
