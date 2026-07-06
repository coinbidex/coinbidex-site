import {
  Repeat, ArrowLeftRight, Users, PiggyBank, Rocket, Image as ImageIcon,
  Building2, Handshake, Code2, Percent, LineChart, ShieldCheck, Wallet,
  BookOpen, Newspaper, Briefcase, LifeBuoy, Landmark, ListChecks,
} from 'lucide-react'

/**
 * Single source of truth for site navigation. `NAV` powers the desktop
 * mega-menu and the mobile accordion; `FOOTER_COLUMNS` powers the footer.
 * Keep labels/paths in sync with the routes registered in App.jsx.
 */
export const NAV = [
  { label: 'Markets', to: '/markets' },

  {
    label: 'Trade',
    columns: [
      {
        heading: 'Trading',
        items: [
          { label: 'Spot Exchange', to: '/exchange', icon: LineChart, desc: 'Advanced order book trading' },
          { label: 'P2P Trading', to: '/p2p', icon: Users, desc: 'Trade directly, 300+ payment methods' },
        ],
      },
      {
        heading: 'Earn & Grow',
        items: [
          { label: 'Earn / Staking', to: '/earn', icon: PiggyBank, desc: 'Up to 12% APY on 40+ assets' },
          { label: 'Launchpad', to: '/launchpad', icon: Rocket, desc: 'Early access to new token listings' },
          { label: 'NFT Marketplace', to: '/nft', icon: ImageIcon, desc: 'Mint, buy and trade NFTs' },
        ],
      },
    ],
  },
  {
    label: 'Institutional',
    columns: [
      {
        heading: 'For Business',
        items: [
          { label: 'Institutional', to: '/institutional', icon: Building2, desc: 'Prime brokerage & custody' },
          { label: 'OTC Desk', to: '/otc', icon: Handshake, desc: 'Large block trades, zero slippage' },
          { label: 'API Documentation', to: '/api-docs', icon: Code2, desc: 'REST & WebSocket trading API' },
          { label: 'Affiliate Program', to: '/affiliate', icon: Percent, desc: 'Earn up to 50% commission' },
          { label: 'List Your Token', to: '/listing', icon: ListChecks, desc: 'Apply to list your project' },
        ],
      },
    ],
  },
  {
    label: 'Company',
    columns: [
      {
        heading: 'Company',
        items: [
          { label: 'About Us', to: '/about', icon: Landmark, desc: 'Our mission and leadership' },
          { label: 'Careers', to: '/careers', icon: Briefcase, desc: "We're hiring globally" },
          { label: 'Press', to: '/press', icon: Newspaper, desc: 'Media resources & news' },
          { label: 'Blog', to: '/blog', icon: BookOpen, desc: 'Guides, insights & updates' },
        ],
      },
      {
        heading: 'Resources',
        items: [
          { label: 'Security', to: '/security', icon: ShieldCheck, desc: 'How we protect your funds' },
          { label: 'Fees', to: '/fees', icon: Wallet, desc: 'Transparent fee schedule' },
          { label: 'Support Center', to: '/support', icon: LifeBuoy, desc: '24/7 help & guides' },
          { label: 'Compliance', to: '/compliance', icon: ShieldCheck, desc: 'Licensing & AML program' },
        ],
      },
    ],
  },
]

export const FOOTER_COLUMNS = [
  {
    title: 'Products',
    links: [
      { label: 'Buy Crypto', to: '/buy-crypto' },
      { label: 'Spot Exchange', to: '/exchange' },
      { label: 'Swap', href: 'https://trade.coinbidex.com/swap' },
      { label: 'P2P Trading', to: '/p2p' },
      { label: 'Earn / Staking', to: '/earn' },
      { label: 'Launchpad', to: '/launchpad' },
      { label: 'NFT Marketplace', to: '/nft' },
      { label: 'Wallet', to: '/wallet' },
    ],
  },
  {
    title: 'Business',
    links: [
      { label: 'Institutional', to: '/institutional' },
      { label: 'OTC Desk', to: '/otc' },
      { label: 'API Documentation', to: '/api-docs' },
      { label: 'Affiliate Program', to: '/affiliate' },
      { label: 'List Your Token', to: '/listing' },
      { label: 'Advertise With Us', href: 'https://trade.coinbidex.com/advertise' },
      { label: 'Markets', to: '/markets' },
      { label: 'Fees', to: '/fees' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Careers', to: '/careers' },
      { label: 'Press', to: '/press' },
      { label: 'Blog', to: '/blog' },
      { label: 'Security', to: '/security' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Support & Legal',
    links: [
      { label: 'Help Center', to: '/support' },
      { label: 'Compliance & AML', to: '/compliance' },
      { label: 'Terms of Service', to: '/terms' },
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Cookie Policy', to: '/cookies' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Coingecko', href: 'https://www.coingecko.com/en/coins/coinbidex?chart=type%3Dprice%26mode%3Dline%26timeframe%3Dh24' },
      { label: 'CoinMarketCap', href: 'https://coinmarketcap.com/currencies/coinbidex/' },
    ],
  },
]
