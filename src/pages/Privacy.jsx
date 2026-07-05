import LegalPage from '../components/shared/LegalPage'

const SECTIONS = [
  { title: '1. Information We Collect', body: 'We collect information you provide directly (name, email, identity documents for KYC), plus usage data such as IP address, device type, and pages visited, collected automatically via cookies and similar technologies.' },
  { title: '2. How We Use Your Information', body: 'We use your information to provide and improve the platform, comply with legal and regulatory obligations (including anti-money-laundering checks), prevent fraud, and communicate with you about your account.' },
  { title: '3. Cookies', body: 'We use cookies to keep you signed in, remember preferences, and understand how the site is used. This includes a session cookie shared across coinbidex.com and trade.coinbidex.com so we can recognize you are logged in across both. See our Cookie Policy for details.' },
  { title: '4. Sharing of Information', body: 'We do not sell your personal information. We may share it with service providers who help us operate the platform (e.g. identity verification providers, cloud infrastructure), or when required by law.' },
  { title: '5. Data Security', body: 'We use industry-standard safeguards including encryption in transit and at rest, access controls, and regular security audits to protect your information.' },
  { title: '6. Your Rights', body: 'Depending on your jurisdiction, you may have the right to access, correct, or delete your personal data. Contact privacy@coinbidex.com to make a request.' },
  { title: '7. Data Retention', body: 'We retain personal information for as long as necessary to provide the platform and comply with legal obligations, including record-keeping requirements under applicable financial regulations.' },
  { title: '8. Changes to This Policy', body: 'We may update this Privacy Policy from time to time. Material changes will be communicated via email or an in-platform notice.' },
]

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="Read CoinBidex's Privacy Policy explaining what data we collect and how we use it."
      path="/privacy"
      updated="June 1, 2026"
      sections={SECTIONS}
      notice="This is template legal content. Have it reviewed by a lawyer licensed in your operating jurisdiction (and checked against GDPR/CCPA if applicable) before publishing — it does not constitute legal advice."
    />
  )
}
