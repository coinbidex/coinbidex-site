// Static catalogue used for routing, SEO copy, and as a fallback when the
// live price API is unavailable. `id` matches CoinGecko's id so the price
// hook can look prices up directly — change the mapping in useLivePrices.js
// if you wire this to your own market-data API instead.
export const ASSETS = [
  { id: 'bitcoin',     symbol: 'BTC',  name: 'Bitcoin',      color: '#F7931A', fallbackPrice: 65000,  fallbackChange: 1.8  },
  { id: 'ethereum',    symbol: 'ETH',  name: 'Ethereum',     color: '#627EEA', fallbackPrice: 3400,   fallbackChange: 2.4  },
  { id: 'tether',      symbol: 'USDT', name: 'Tether',       color: '#26A17B', fallbackPrice: 1,      fallbackChange: 0.0  },
  { id: 'solana',      symbol: 'SOL',  name: 'Solana',       color: '#14F195', fallbackPrice: 145,    fallbackChange: 4.1  },
  { id: 'binancecoin', symbol: 'BNB',  name: 'BNB',          color: '#F3BA2F', fallbackPrice: 580,    fallbackChange: -0.6 },
  { id: 'ripple',      symbol: 'XRP',  name: 'XRP',          color: '#23292F', fallbackPrice: 0.55,   fallbackChange: 1.1  },
  { id: 'usd-coin',    symbol: 'USDC', name: 'USD Coin',     color: '#2775CA', fallbackPrice: 1,      fallbackChange: 0.0  },
  { id: 'cardano',     symbol: 'ADA',  name: 'Cardano',      color: '#0033AD', fallbackPrice: 0.45,   fallbackChange: 3.2  },
  { id: 'dogecoin',    symbol: 'DOGE', name: 'Dogecoin',     color: '#C2A633', fallbackPrice: 0.12,   fallbackChange: 5.7  },
  { id: 'tron',        symbol: 'TRX',  name: 'TRON',         color: '#EF0027', fallbackPrice: 0.11,   fallbackChange: 0.9  },
  { id: 'polkadot',    symbol: 'DOT',  name: 'Polkadot',     color: '#E6007A', fallbackPrice: 6.8,    fallbackChange: -1.2 },
  { id: 'chainlink',   symbol: 'LINK', name: 'Chainlink',    color: '#2A5ADA', fallbackPrice: 14.5,   fallbackChange: 2.9  },
  { id: 'matic-network', symbol: 'MATIC', name: 'Polygon',   color: '#8247E5', fallbackPrice: 0.7,    fallbackChange: 1.5  },
  { id: 'litecoin',    symbol: 'LTC',  name: 'Litecoin',     color: '#345D9D', fallbackPrice: 82,     fallbackChange: 0.4  },
  { id: 'avalanche-2', symbol: 'AVAX', name: 'Avalanche',    color: '#E84142', fallbackPrice: 36,     fallbackChange: 3.8  },
]

export const ASSET_MAP = Object.fromEntries(ASSETS.map(a => [a.id, a]))

export function formatUsd(value) {
  if (value == null) return '—'
  if (value < 1) return `$${value.toFixed(4)}`
  return `$${value.toLocaleString('en-US', { maximumFractionDigits: 2 })}`
}
