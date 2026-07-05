import SEO, { breadcrumbJsonLd } from '../../lib/seo'
import Container from './Container'
import Breadcrumbs from './Breadcrumbs'

export default function LegalPage({ title, description, path, updated, sections, notice }) {
  return (
    <>
      <SEO
        title={title}
        description={description}
        path={path}
        noindex
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: title, path }])}
      />

      <Container className="py-14 max-w-2xl">
        <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: title, path }]} />
        <h1 className="text-3xl sm:text-4xl font-bold text-ink-950">{title}</h1>
        <p className="mt-3 text-sm text-ink-950/40">Last updated: {updated}</p>

        {notice && (
          <div className="mt-5 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-800">
            {notice}
          </div>
        )}

        <div className="mt-8 space-y-8">
          {sections.map(s => (
            <div key={s.title}>
              <h2 className="font-semibold text-ink-950 text-lg">{s.title}</h2>
              <p className="mt-2 text-sm text-ink-950/60 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}
