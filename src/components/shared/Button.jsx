import { Link } from 'react-router-dom'

const VARIANTS = {
  primary:   'bg-brand-500 text-white hover:bg-brand-600 shadow-lg shadow-brand-500/25',
  secondary: 'bg-white text-ink-950 border border-surface-200 hover:border-brand-300 hover:bg-surface-50 shadow-sm',
  dark:      'bg-ink-950 text-white hover:bg-ink-900 shadow-lg shadow-black/20',
  ghost:     'text-ink-950/80 hover:text-brand-600',
  'ghost-light': 'text-white/85 hover:text-white',
  outline:   'border border-white/30 text-white hover:bg-white/10',
}

const SIZES = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

export default function Button({ href, to, external, variant = 'primary', size = 'md', className = '', children, ...props }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 whitespace-nowrap ${VARIANTS[variant]} ${SIZES[size]} ${className}`

  if (href || external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {children}
      </a>
    )
  }
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
