import { Link } from 'react-router-dom'

/**
 * Brand logo. `variant="full"` renders the wordmark + icon lockup
 * (public/assets/logo-full.png), `variant="mark"` renders just the
 * diamond icon (public/assets/logo-mark.png) for tight spaces like the
 * mobile header or favic-sized surfaces.
 */
export default function Logo({ variant = 'full', className = '', dark = false, linkTo = '/' }) {
  const content =
    variant === 'mark' ? (
      <img
        src="/assets/logo-mark.png"
        alt="CoinBidex"
        className={className || 'h-9 w-9'}
        width={36}
        height={36}
      />
    ) : (
      <img
        src="/assets/logo-full.png"
        alt="CoinBidex"
        className={`${className || 'h-8 w-auto'} ${dark ? 'brightness-0 invert' : ''}`}
      />
    )

  if (!linkTo) return content

  return (
    <Link to={linkTo} aria-label="CoinBidex home" className="flex items-center shrink-0">
      {content}
    </Link>
  )
}
