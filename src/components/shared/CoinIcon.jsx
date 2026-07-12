import { useState } from 'react'

const SIZE_CLASSES = {
  xs: 'h-5 w-5 text-[9px]',
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-14 w-14 text-base',
  xl: 'h-16 w-16 text-lg',
}

/**
 * Renders a coin's real logo (from CoinGecko's market-data feed) with a
 * graceful fallback to a colored initials badge if the image hasn't loaded
 * yet, fails to load, or the live feed is unavailable. This is what powers
 * the actual brand icons across Markets, the ticker, and coin pages —
 * instead of plain colored letter circles.
 */
export default function CoinIcon({ asset, image, size = 'sm', className = '' }) {
  const [errored, setErrored] = useState(false)
  const sizeClass = SIZE_CLASSES[size] || SIZE_CLASSES.sm

  if (image && !errored) {
    return (
      <img
        src={image}
        alt={`${asset.name} logo`}
        loading="lazy"
        onError={() => setErrored(true)}
        className={`shrink-0 rounded-full bg-white object-contain ring-1 ring-surface-200 ${sizeClass} ${className}`}
      />
    )
  }

  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full font-bold text-white ${sizeClass} ${className}`}
      style={{ backgroundColor: asset.color }}
      aria-hidden="true"
    >
      {asset.symbol.slice(0, 2)}
    </span>
  )
}
