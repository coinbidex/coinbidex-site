import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, ChevronDown, Search } from 'lucide-react'
import Container from '../shared/Container'
import Button from '../shared/Button'
import Logo from '../shared/Logo'
import MobileMenu from './MobileMenu'
import { NAV } from '../../lib/nav-data'
import { useSession } from '../../lib/useSession'

const TRADE_URL = import.meta.env.VITE_TRADE_URL || 'https://trade.coinbidex.com'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)
  const closeTimer = useRef(null)
  const { loading, loggedIn, user } = useSession()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openMenu = (label) => {
    clearTimeout(closeTimer.current)
    setActiveMenu(label)
  }
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 150)
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled || activeMenu ? 'bg-white/95 border-surface-200 backdrop-blur-md shadow-sm' : 'bg-white/80 border-transparent backdrop-blur-sm'
      }`}
    >
      <Container className="flex items-center justify-between py-3.5">
        <Logo className="h-7 w-auto sm:h-8" />

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary" onMouseLeave={scheduleClose}>
          {NAV.map((item) =>
            item.columns ? (
              <div key={item.label} className="relative" onMouseEnter={() => openMenu(item.label)}>
                <button
                  className={`flex items-center gap-1 rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors ${
                    activeMenu === item.label ? 'text-brand-600 bg-brand-50' : 'text-ink-950/75 hover:text-ink-950 hover:bg-surface-50'
                  }`}
                  aria-expanded={activeMenu === item.label}
                >
                  {item.label}
                  <ChevronDown size={15} className={`transition-transform ${activeMenu === item.label ? 'rotate-180' : ''}`} />
                </button>

                {activeMenu === item.label && (
                  <div
                    className="absolute left-1/2 top-full z-50 mt-2 w-[min(90vw,640px)] -translate-x-1/2 rounded-2xl border border-surface-200 bg-white p-5 shadow-2xl shadow-ink-950/10 animate-fade-up"
                    onMouseEnter={() => openMenu(item.label)}
                  >
                    <div className={`grid gap-6 ${item.columns.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                      {item.columns.map((col) => (
                        <div key={col.heading}>
                          <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-ink-950/40">{col.heading}</p>
                          <ul className="space-y-0.5">
                            {col.items.map((link) => (
                              <li key={link.to}>
                                <Link
                                  to={link.to}
                                  onClick={() => setActiveMenu(null)}
                                  className="flex items-start gap-3 rounded-xl px-2 py-2.5 hover:bg-surface-50 transition-colors group"
                                >
                                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                                    <link.icon size={17} />
                                  </span>
                                  <span>
                                    <span className="block text-sm font-semibold text-ink-950">{link.label}</span>
                                    <span className="block text-xs text-ink-950/50">{link.desc}</span>
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors ${
                    isActive ? 'text-brand-600 bg-brand-50' : 'text-ink-950/75 hover:text-ink-950 hover:bg-surface-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <button aria-label="Search" className="p-2.5 text-ink-950/60 hover:text-brand-600 transition-colors">
            <Search size={19} />
          </button>
          {loading ? (
            <div className="h-9 w-24 rounded-xl bg-surface-100 animate-pulse" />
          ) : loggedIn ? (
            <>
              <Button href={`${TRADE_URL}/trade`} variant="ghost" size="sm">Buy Crypto</Button>
              <AccountMenu user={user} />
            </>
          ) : (
            <>
              <Button href={`${TRADE_URL}/swap`} variant="ghost" size="sm">Swap</Button>
              <Button href={`${TRADE_URL}/trade`} variant="ghost" size="sm">Buy Crypto</Button>
              <Button href={`${TRADE_URL}/login`} variant="ghost" size="sm">Log In</Button>
              <Button href={`${TRADE_URL}/register`} variant="primary" size="sm">Get Started</Button>
            </>
          )}
        </div>

        <button
          className="lg:hidden text-ink-950 p-2 -mr-2"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </Container>

      <MobileMenu open={open} onClose={() => setOpen(false)} nav={NAV} tradeUrl={TRADE_URL} loggedIn={loggedIn} user={user} />
    </header>
  )
}

function AccountMenu({ user }) {
  const initial = (user?.username?.[0] || '?').toUpperCase()
  return (
    <Button href={`${TRADE_URL}/dashboard`} variant="secondary" size="sm" className="pl-1.5">
      {user?.avatarUrl ? (
        <img src={user.avatarUrl} alt="" className="h-6 w-6 rounded-full object-cover" />
      ) : (
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">
          {initial}
        </span>
      )}
      Dashboard
    </Button>
  )
}
