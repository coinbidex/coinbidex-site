import LegalPage from '../components/shared/LegalPage'

const SECTIONS = [
  { title: '1. What Are Cookies', body: 'Cookies are small text files stored on your device that help websites remember information about your visit, such as your login state and preferences.' },
  { title: '2. Essential Cookies', body: 'These are required for core functionality like staying signed in and securing your session across coinbidex.com and trade.coinbidex.com. They cannot be disabled.' },
  { title: '3. Analytics Cookies', body: 'We use privacy-conscious analytics to understand aggregate usage patterns — which pages are visited, how long, and from what regions — to improve the product.' },
  { title: '4. Preference Cookies', body: 'These remember choices like your display currency, language, and theme so you don\'t have to reset them on every visit.' },
  { title: '5. Managing Cookies', body: 'You can control or delete cookies through your browser settings. Disabling essential cookies may prevent parts of the platform, like staying logged in, from working correctly.' },
  { title: '6. Third-Party Cookies', body: 'Some embedded content (e.g. live chat widgets) may set their own cookies, governed by that provider\'s own policy.' },
  { title: '7. Changes to This Policy', body: 'We may update this Cookie Policy periodically. Continued use of the site after changes constitutes acceptance of the revised policy.' },
]

export default function Cookies() {
  return (
    <LegalPage
      title="Cookie Policy"
      description="Learn what cookies CoinBidex uses and how to manage your preferences."
      path="/cookies"
      updated="June 1, 2026"
      sections={SECTIONS}
      notice="This is template legal content. Have it reviewed by a lawyer licensed in your operating jurisdiction before publishing — it does not constitute legal advice."
    />
  )
}
