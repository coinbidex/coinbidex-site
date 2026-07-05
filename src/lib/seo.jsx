const SITE = 'https://coinbidex.com'
const DEFAULT_IMAGE = `${SITE}/og-image.png`

/**
 * Drop this at the top of any page to set its title/description/canonical
 * and social preview tags. Pass `jsonLd` (an object or array of objects)
 * for page-specific structured data (FAQPage, BreadcrumbList, Article, etc).
 *
 * Uses React 19's built-in document metadata support: <title>, <meta>, and
 * <link> tags rendered anywhere in the component tree are automatically
 * hoisted into the real <head> — no react-helmet or similar library needed.
 * (react-helmet-async doesn't support React 19's peer range yet, which is
 * why this doesn't use it.)
 */
export default function SEO({ title, description, path = '/', image = DEFAULT_IMAGE, jsonLd, noindex = false }) {
  const url = `${SITE}${path}`
  const fullTitle = title.includes('CoinBidex') ? title : `${title} | CoinBidex`
  const jsonLdList = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,follow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="CoinBidex" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLdList.map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </>
  )
}

export function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE}${item.path}`,
    })),
  }
}
