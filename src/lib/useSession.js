import { createContext, useContext, useEffect, useState } from 'react'

const TRADE_URL = import.meta.env.VITE_TRADE_URL || 'https://trade.coinbidex.com'

export const SessionContext = createContext({ loading: true, loggedIn: false, user: null })

/**
 * Checks whether the visitor is already logged in to the trading app
 * (trade.coinbidex.com), so this marketing site can show their name/avatar
 * and a "Dashboard" button instead of "Log In" / "Sign Up".
 *
 * This calls a public, cookie-based endpoint on the trading backend
 * (GET /api/v1/auth/session) that reads a minimal httpOnly cookie shared
 * across the .coinbidex.com domain. It never sees or handles real auth
 * tokens — those stay entirely within the trading app's own storage.
 */
export function useSessionQuery() {
  const [state, setState] = useState({ loading: true, loggedIn: false, user: null })

  useEffect(() => {
    let cancelled = false

    fetch(`${TRADE_URL}/api/v1/auth/session`, { credentials: 'include' })
      .then(res => res.ok ? res.json() : { data: { loggedIn: false } })
      .then(({ data }) => {
        if (!cancelled) {
          setState({ loading: false, loggedIn: !!data?.loggedIn, user: data?.user ?? null })
        }
      })
      .catch(() => {
        if (!cancelled) setState({ loading: false, loggedIn: false, user: null })
      })

    return () => { cancelled = true }
  }, [])

  return state
}

export function useSession() {
  return useContext(SessionContext)
}
