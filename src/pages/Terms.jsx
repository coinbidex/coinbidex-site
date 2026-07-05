import LegalPage from '../components/shared/LegalPage'

const SECTIONS = [
  { title: '1. Acceptance of Terms', body: 'By accessing or using CoinBidex, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, do not use the platform.' },
  { title: '2. Eligibility', body: 'You must be at least 18 years old and legally able to enter into binding contracts in your jurisdiction to use CoinBidex. The platform is not available in jurisdictions where its use would violate local law.' },
  { title: '3. Account Registration', body: 'You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. Notify us immediately of any unauthorized use.' },
  { title: '4. Trading Risk', body: 'Cryptocurrency prices are highly volatile. You may lose some or all of your invested capital. CoinBidex does not provide investment advice, and past performance is not indicative of future results.' },
  { title: '5. Fees', body: 'Applicable trading, deposit, and withdrawal fees are disclosed on our Fees page and may change with notice.' },
  { title: '6. Prohibited Conduct', body: 'You may not use CoinBidex for money laundering, market manipulation, fraud, or any illegal activity. We reserve the right to suspend or terminate accounts that violate this policy.' },
  { title: '7. Limitation of Liability', body: 'CoinBidex is not liable for indirect, incidental, or consequential damages arising from your use of the platform, to the maximum extent permitted by law.' },
  { title: '8. Changes to These Terms', body: 'We may update these Terms from time to time. Continued use of CoinBidex after changes take effect constitutes acceptance of the revised Terms.' },
]

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      description="Read CoinBidex's Terms of Service governing your use of the platform."
      path="/terms"
      updated="June 1, 2026"
      sections={SECTIONS}
      notice="This is template legal content. Have it reviewed by a lawyer licensed in your operating jurisdiction before publishing — it does not constitute legal advice."
    />
  )
}
