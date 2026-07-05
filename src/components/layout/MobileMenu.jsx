import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { X, ChevronDown } from 'lucide-react'
import Button from '../shared/Button'
import Logo from '../shared/Logo'

export default function MobileMenu({ open, onClose, nav, tradeUrl, loggedIn, user }) {
  const [expanded, setExpanded] = useState(null)
  if (!open) return null

  const initial = (user?.username?.[0] || '?').toUpperCase()

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div className="absolute inset-0 bg-ink-950/50 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col overflow-y-auto bg-white p-5 shadow-2xl">
        <div className="flex items-center justify-between">
          <Logo className="h-7 w-auto" />
          <button onClick={onClose} aria-label="Close menu" className="p-2 text-ink-950">
            <X size={22} />
          </button>
        </div>

        {loggedIn && (
          <div className="mt-4 flex items-center gap-3 rounded-xl bg-surface-50 px-3 py-3">
            {user?.avatarUrl ? (
              <img src={user.avatarUrl} alt="" className="h-9 w-9 rounded-full object-cover" />
            ) : (
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
                {initial}
              </span>
            )}
            <span className="text-sm font-medium text-ink-950">{user?.username}</span>
          </div>
        )}

        <nav className="mt-3 flex flex-col divide-y divide-surface-100" aria-label="Mobile">
          {nav.map((item) =>
            item.columns ? (
              <div key={item.label}>
                <button
                  className="flex w-full items-center justify-between py-3.5 text-base font-semibold text-ink-950"
                  onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                  aria-expanded={expanded === item.label}
                >
                  {item.label}
                  <ChevronDown size={18} className={`transition-transform text-ink-950/40 ${expanded === item.label ? 'rotate-180' : ''}`} />
                </button>
                {expanded === item.label && (
                  <div className="pb-3 pl-1">
                    {item.columns.map((col) => (
                      <div key={col.heading} className="mb-3 last:mb-0">
                        <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-ink-950/35">{col.heading}</p>
                        <div className="flex flex-col">
                          {col.items.map((link) => (
                            <NavLink
                              key={link.to}
                              to={link.to}
                              onClick={onClose}
                              className="flex items-center gap-2.5 rounded-lg px-2 py-2.5 text-sm font-medium text-ink-950/75 hover:bg-surface-50"
                            >
                              <link.icon size={16} className="text-brand-500 shrink-0" />
                              {link.label}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={onClose}
                className={({ isActive }) =>
                  `block py-3.5 text-base font-semibold ${isActive ? 'text-brand-600' : 'text-ink-950'}`
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-surface-100">
          <Button href={`${tradeUrl}/trade`} variant="secondary">Buy Crypto</Button>
          {loggedIn ? (
            <Button href={`${tradeUrl}/dashboard`} variant="primary">Go to Dashboard</Button>
          ) : (
            <>
              <Button href={`${tradeUrl}/login`} variant="secondary">Log In</Button>
              <Button href={`${tradeUrl}/register`} variant="primary">Get Started</Button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
