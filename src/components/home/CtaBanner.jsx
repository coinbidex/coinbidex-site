import Container from '../shared/Container'
import Button from '../shared/Button'
import { useSession } from '../../lib/useSession'

const TRADE_URL = import.meta.env.VITE_TRADE_URL || 'https://trade.coinbidex.com'

export default function CtaBanner() {
  const { loggedIn } = useSession()

  return (
    <section className="py-20 sm:py-28 bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 px-8 py-16 text-center sm:px-16">
          <div className="absolute inset-0 -z-10 bg-grid opacity-10" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {loggedIn ? 'Ready to make your next move?' : 'Ready to start trading?'}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">
            {loggedIn
              ? 'Jump back into your dashboard to check your portfolio and markets.'
              : 'Join 4 million traders on a platform built for speed, security, and low fees.'}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {loggedIn ? (
              <Button href={`${TRADE_URL}/dashboard`} variant="dark" size="lg">Go to Dashboard</Button>
            ) : (
              <>
                <Button href={`${TRADE_URL}/register`} variant="dark" size="lg">Create Free Account</Button>
                <Button to="/security" variant="outline" size="lg">See how we keep you safe</Button>
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
