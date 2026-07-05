import { Routes, Route } from 'react-router-dom'
import { SessionContext, useSessionQuery } from './lib/useSession'
import Layout from './components/layout/Layout'

import Home from './pages/Home'
import Markets from './pages/Markets'
import CoinDetail from './pages/CoinDetail'
import BuyCrypto from './pages/BuyCrypto'
import Exchange from './pages/Exchange'
import Convert from './pages/Convert'
import P2P from './pages/P2P'
import Earn from './pages/Earn'
import Launchpad from './pages/Launchpad'
import Nft from './pages/Nft'
import WalletPage from './pages/WalletPage'
import Institutional from './pages/Institutional'
import Otc from './pages/Otc'
import ApiDocs from './pages/ApiDocs'
import Affiliate from './pages/Affiliate'
import Listing from './pages/Listing'
import About from './pages/About'
import Careers from './pages/Careers'
import Press from './pages/Press'
import Security from './pages/Security'
import Compliance from './pages/Compliance'
import Fees from './pages/Fees'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Support from './pages/Support'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Cookies from './pages/Cookies'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  const session = useSessionQuery()

  return (
    <SessionContext.Provider value={session}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/crypto/:cryptoId" element={<CoinDetail />} />

          <Route path="/buy-crypto" element={<BuyCrypto />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/convert" element={<Convert />} />
          <Route path="/p2p" element={<P2P />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/launchpad" element={<Launchpad />} />
          <Route path="/nft" element={<Nft />} />
          <Route path="/wallet" element={<WalletPage />} />

          <Route path="/institutional" element={<Institutional />} />
          <Route path="/otc" element={<Otc />} />
          <Route path="/api-docs" element={<ApiDocs />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/listing" element={<Listing />} />

          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />
          <Route path="/security" element={<Security />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </SessionContext.Provider>
  )
}
