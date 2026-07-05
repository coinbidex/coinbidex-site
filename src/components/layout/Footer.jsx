import { Link } from 'react-router-dom'
import { Twitter, Github, MessageCircle, Send, ShieldCheck, Lock } from 'lucide-react'
import Container from '../shared/Container'
import Logo from '../shared/Logo'
import { FOOTER_COLUMNS } from '../../lib/nav-data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink-800 bg-ink-950">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Logo dark className="h-8 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              A secure, licensed digital asset exchange serving over 4 million traders
              in 150+ countries. Buy, sell, and trade 300+ cryptocurrencies with
              institutional-grade infrastructure.
            </p>
            <div className="mt-5 flex items-center gap-4 text-xs text-white/40">
              <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-brand-400" /> SOC 2 Type II</span>
              <span className="flex items-center gap-1.5"><Lock size={14} className="text-brand-400" /> 98% Cold Storage</span>
            </div>
            <div className="mt-6 flex gap-3">
              <a href="https://twitter.com/coinbidex" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/50 hover:bg-brand-500 hover:text-white transition-colors"><Twitter size={16} /></a>
              <a href="https://t.me/coinbidex" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/50 hover:bg-brand-500 hover:text-white transition-colors"><Send size={16} /></a>
              <a href="https://github.com/coinbidex" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/50 hover:bg-brand-500 hover:text-white transition-colors"><Github size={16} /></a>
              <a href="#" aria-label="Community chat" className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/50 hover:bg-brand-500 hover:text-white transition-colors"><MessageCircle size={16} /></a>
            </div>
          </div>

          {FOOTER_COLUMNS.map(col => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map(link => (
                  <li key={link.to || link.href}>
                    {link.href ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-brand-400 transition-colors">
                        {link.label}
                      </a>
                    ) : (
                      <Link to={link.to} className="text-sm text-white/50 hover:text-brand-400 transition-colors">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} CoinBidex Ltd. All rights reserved.</p>
          <p className="max-w-2xl text-center sm:text-right">
            Cryptocurrency trading involves significant risk and may not be suitable for all
            investors. Digital asset prices are volatile — you may lose part or all of your
            invested capital. Please trade responsibly and review our {' '}
            <Link to="/terms" className="underline hover:text-white/70">Terms of Service</Link>.
          </p>
        </div>
      </Container>
    </footer>
  )
}
