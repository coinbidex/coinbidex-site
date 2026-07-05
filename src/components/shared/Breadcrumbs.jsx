import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function Breadcrumbs({ items, dark = false }) {
  return (
    <nav aria-label="Breadcrumb" className={`mb-6 flex flex-wrap items-center gap-1.5 text-sm ${dark ? 'text-white/50' : 'text-ink-950/45'}`}>
      {items.map((item, i) => (
        <span key={item.path} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight size={14} className={dark ? 'text-white/25' : 'text-ink-950/20'} />}
          {i === items.length - 1 ? (
            <span className={dark ? 'text-white/85' : 'text-ink-950/80'}>{item.name}</span>
          ) : (
            <Link to={item.path} className="hover:text-brand-500 transition-colors">{item.name}</Link>
          )}
        </span>
      ))}
    </nav>
  )
}
