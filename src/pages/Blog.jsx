import { Link } from 'react-router-dom'
import SEO, { breadcrumbJsonLd } from '../lib/seo'
import PageHero from '../components/shared/PageHero'
import { Section } from '../components/shared/Section'
import { POSTS } from '../lib/blog-data'

export default function Blog() {
  return (
    <>
      <SEO
        title="Blog"
        description="Guides and insights on cryptocurrency, trading, and staying safe in crypto — from the CoinBidex team."
        path="/blog"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }])}
      />

      <PageHero
        eyebrow="Learn"
        title="The CoinBidex blog"
        description="Guides, market perspective, and product updates from our team."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }]}
      />

      <Section className="pt-0">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map(post => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="rounded-2xl border border-surface-200 bg-white p-6 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-500/5 transition-all"
            >
              <span className="inline-block rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-600">{post.category || 'Guide'}</span>
              <time dateTime={post.date} className="block mt-3 text-xs text-ink-950/40">
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} · {post.readMins} min read
              </time>
              <h2 className="mt-2 text-xl font-semibold text-ink-950">{post.title}</h2>
              <p className="mt-2 text-sm text-ink-950/55 leading-relaxed">{post.description}</p>
              <span className="mt-4 inline-block text-sm font-medium text-brand-600">Read more →</span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  )
}
