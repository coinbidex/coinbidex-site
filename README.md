# CoinBidex Site

The public marketing website for CoinBidex — coinbidex.com. This is deliberately
a separate project from the trading engine (`trading-coinbidex`, deployed at
trade.coinbidex.com): this site's job is awareness and conversion, not trading.

## Stack
React 19 + Vite 6 + Tailwind 4 (CSR SPA, no backend of its own).

## Local development
```bash
npm install
cp .env.example .env
npm run dev
```

## Cross-domain login awareness
The Header shows "Log In / Trade Now" for anonymous visitors, or an
avatar + "Dashboard" button if they're already logged in to
trade.coinbidex.com. This works via `GET /api/v1/auth/session` on the
trading backend, a public endpoint that reads a minimal httpOnly cookie
shared across `.coinbidex.com` — see `src/lib/useSession.js`. This site
never handles real auth tokens; those stay in the trading app entirely.

## Swap
There's no swap widget embedded on this site. "Swap" in the nav links
directly to the trading engine's own real swap feature at
`{VITE_TRADE_URL}/swap`, rather than duplicating that functionality here.

## Deployment
Single environment (no staging — this is a static marketing site with no
state), deployed as a Docker container serving the built static files via
nginx, behind the VPS's host Nginx. See `deploy/deploy.sh` for the one-time
bootstrap, and `.github/workflows/` for the ongoing CI/CD pipeline (push to
`main` → build & push image → auto-deploy).

## Content
- `src/lib/assets-data.js` — the coin catalogue for `/markets` and `/crypto/:id`.
- `src/lib/blog-data.js` — blog posts (hardcoded, no CMS yet).
- `src/lib/seo.jsx` — per-page `<SEO>` component (title/description/OG/JSON-LD).
- `public/sitemap.xml` / `public/robots.txt` — update sitemap.xml whenever routes change.

## SEO notes
This is a client-rendered SPA. Google renders JavaScript and generally
indexes it fine, but for stronger SEO (better social-preview crawling,
faster perceived load for pure-HTML crawlers, etc.) consider adding a
prerendering step later, or migrating high-value pages to a static/SSR
framework. That wasn't done here to avoid introducing build tooling that
couldn't be tested end-to-end in this handoff — see the note in the
delivery message for details.
