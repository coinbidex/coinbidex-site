import SEO from '../lib/seo'
import Container from '../components/shared/Container'
import Button from '../components/shared/Button'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="This page doesn't exist." path="/404" noindex />
      <Container className="py-32 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Error 404</p>
        <h1 className="mt-3 text-5xl font-bold text-ink-950">Page not found</h1>
        <p className="mt-4 text-ink-950/55">We couldn't find the page you're looking for. It may have moved or no longer exists.</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button to="/">Back to Home</Button>
          <Button to="/support" variant="secondary">Visit Help Center</Button>
        </div>
      </Container>
    </>
  )
}
