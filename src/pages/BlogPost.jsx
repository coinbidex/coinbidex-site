import { Link, useParams } from 'react-router-dom'
import SEO, { breadcrumbJsonLd } from '../lib/seo'
import Container from '../components/shared/Container'
import Breadcrumbs from '../components/shared/Breadcrumbs'
import NotFound from './NotFound'
import { POST_MAP } from '../lib/blog-data'

// Tiny markdown-ish renderer for our own hardcoded post content only
// (never render user-supplied content this way — this is not a sanitizer).
function renderBody(markdown) {
  const html = markdown
    .split('\n\n')
    .map(block => {
      if (block.startsWith('## ')) return `<h2>${block.slice(3)}</h2>`
      if (/^\d+\.\s/.test(block)) {
        const items = block.split('\n').map(line => `<li>${line.replace(/^\d+\.\s/, '')}</li>`).join('')
        return `<ol>${items}</ol>`
      }
      return `<p>${block}</p>`
    })
    .join('')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')

  return { __html: html }
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = POST_MAP[slug]

  if (!post) return <NotFound />

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'CoinBidex' },
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.description}
        path={`/blog/${post.slug}`}
        jsonLd={[
          articleJsonLd,
          breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: post.title, path: `/blog/${post.slug}` }]),
        ]}
      />

      <Container className="py-14 max-w-2xl">
        <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: post.title, path: `/blog/${post.slug}` }]} />

        <span className="inline-block rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-600">{post.category || 'Guide'}</span>
        <time dateTime={post.date} className="block mt-3 text-xs text-ink-950/40">
          {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} · {post.readMins} min read
        </time>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-ink-950">{post.title}</h1>

        <div
          className="prose-content mt-8 text-ink-950/70 leading-relaxed [&_h2]:text-ink-950 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4 [&_ol]:space-y-1 [&_a]:text-brand-600 [&_a]:font-medium [&_a]:hover:text-brand-700"
          dangerouslySetInnerHTML={renderBody(post.body)}
        />

        <div className="mt-12 border-t border-surface-200 pt-6">
          <Link to="/blog" className="text-brand-600 hover:text-brand-700 font-medium">← Back to all articles</Link>
        </div>
      </Container>
    </>
  )
}
