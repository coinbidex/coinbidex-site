// Static catalogue used for routing, SEO copy, and as a fallback when the
// live market-data API is unavailable. `id` matches CoinGecko's id so the
// market-data hook (see useLivePrices.js) can look each asset up directly —
// change the mapping there if you wire this to your own market-data API.
//
// The `fallback*` fields are only ever shown if the live CoinGecko request
// fails or is rate-limited — they keep the Markets and coin pages fully
// populated (rank, cap, supply, etc.) instead of showing empty states.
export const ASSETS = [
  {
    id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin', color: '#F7931A',
    fallbackPrice: 65000, fallbackChange: 1.8, fallbackChange7d: 6.4,
    fallbackRank: 1, fallbackMarketCap: 1280000000000, fallbackVolume: 28000000000,
    fallbackSupply: 19700000, fallbackMaxSupply: 21000000,
    categories: ['Store of Value', 'Layer 1'],
    description: 'Bitcoin is the original decentralized cryptocurrency, launched in 2009 to let people send value directly to one another without a bank or payment processor in the middle. Its supply is capped and new coins are issued to miners who secure the network, which is why it\'s widely treated as a form of digital, scarce money.',
    website: 'https://bitcoin.org',
  },
  {
    id: 'ethereum', symbol: 'ETH', name: 'Ethereum', color: '#627EEA',
    fallbackPrice: 3400, fallbackChange: 2.4, fallbackChange7d: 4.1,
    fallbackRank: 2, fallbackMarketCap: 409000000000, fallbackVolume: 15000000000,
    fallbackSupply: 120300000, fallbackMaxSupply: null,
    categories: ['Smart Contracts', 'Layer 1'],
    description: 'Ethereum is a programmable blockchain that runs smart contracts, the code behind most DeFi apps, NFTs, and stablecoins. Its native asset, ETH, is used to pay for computation ("gas") on the network and secures it through proof-of-stake validators.',
    website: 'https://ethereum.org',
  },
  {
    id: 'tether', symbol: 'USDT', name: 'Tether', color: '#26A17B',
    fallbackPrice: 1, fallbackChange: 0.0, fallbackChange7d: 0.01,
    fallbackRank: 3, fallbackMarketCap: 112000000000, fallbackVolume: 55000000000,
    fallbackSupply: 112000000000, fallbackMaxSupply: null,
    categories: ['Stablecoin'],
    description: 'Tether (USDT) is a stablecoin designed to track the value of the US dollar one-for-one, backed by cash and short-term reserves held by the issuer. It\'s the most widely used stablecoin for trading pairs and moving value between exchanges.',
    website: 'https://tether.to',
  },
  {
    id: 'solana', symbol: 'SOL', name: 'Solana', color: '#14F195',
    fallbackPrice: 145, fallbackChange: 4.1, fallbackChange7d: 9.2,
    fallbackRank: 4, fallbackMarketCap: 67000000000, fallbackVolume: 3200000000,
    fallbackSupply: 467000000, fallbackMaxSupply: null,
    categories: ['Smart Contracts', 'Layer 1'],
    description: 'Solana is a high-throughput Layer 1 blockchain built for fast, low-cost transactions, making it a popular base for consumer apps, trading, and NFT marketplaces. It uses a proof-of-history and proof-of-stake hybrid to order transactions quickly.',
    website: 'https://solana.com',
  },
  {
    id: 'binancecoin', symbol: 'BNB', name: 'BNB', color: '#F3BA2F',
    fallbackPrice: 580, fallbackChange: -0.6, fallbackChange7d: 1.9,
    fallbackRank: 5, fallbackMarketCap: 84000000000, fallbackVolume: 1800000000,
    fallbackSupply: 145900000, fallbackMaxSupply: null,
    categories: ['Exchange Token', 'Layer 1'],
    description: 'BNB is the native asset of the BNB Chain ecosystem, used for transaction fees, staking, and payments across a wide range of exchange and on-chain products. Part of its supply is periodically burned, reducing circulating supply over time.',
    website: 'https://www.bnbchain.org',
  },
  {
    id: 'ripple', symbol: 'XRP', name: 'XRP', color: '#23292F',
    fallbackPrice: 0.55, fallbackChange: 1.1, fallbackChange7d: 2.6,
    fallbackRank: 6, fallbackMarketCap: 31400000000, fallbackVolume: 1100000000,
    fallbackSupply: 57100000000, fallbackMaxSupply: 100000000000,
    categories: ['Payments'],
    description: 'XRP is the native asset of the XRP Ledger, a blockchain built for fast, low-cost cross-border payments and settlement. Unlike proof-of-work coins, all XRP was created at launch, with the remainder released gradually from escrow.',
    website: 'https://xrpl.org',
  },
  {
    id: 'usd-coin', symbol: 'USDC', name: 'USD Coin', color: '#2775CA',
    fallbackPrice: 1, fallbackChange: 0.0, fallbackChange7d: 0.0,
    fallbackRank: 7, fallbackMarketCap: 33000000000, fallbackVolume: 6500000000,
    fallbackSupply: 33000000000, fallbackMaxSupply: null,
    categories: ['Stablecoin'],
    description: 'USD Coin (USDC) is a fully-reserved stablecoin pegged to the US dollar and issued by regulated financial institutions, with reserves published in regular attestations. It\'s widely used across DeFi and as a settlement asset between exchanges.',
    website: 'https://www.circle.com/usdc',
  },
  {
    id: 'cardano', symbol: 'ADA', name: 'Cardano', color: '#0033AD',
    fallbackPrice: 0.45, fallbackChange: 3.2, fallbackChange7d: 5.5,
    fallbackRank: 8, fallbackMarketCap: 15900000000, fallbackVolume: 350000000,
    fallbackSupply: 35300000000, fallbackMaxSupply: 45000000000,
    categories: ['Smart Contracts', 'Layer 1'],
    description: 'Cardano is a proof-of-stake Layer 1 blockchain developed with an academic, peer-reviewed research process. It supports smart contracts and staking, with ADA used for fees, governance, and securing the network.',
    website: 'https://cardano.org',
  },
  {
    id: 'dogecoin', symbol: 'DOGE', name: 'Dogecoin', color: '#C2A633',
    fallbackPrice: 0.12, fallbackChange: 5.7, fallbackChange7d: 12.3,
    fallbackRank: 9, fallbackMarketCap: 17400000000, fallbackVolume: 900000000,
    fallbackSupply: 145000000000, fallbackMaxSupply: null,
    categories: ['Meme', 'Payments'],
    description: 'Dogecoin started in 2013 as a lighthearted take on Bitcoin and grew into one of the most recognized cryptocurrencies, with an active community and no fixed supply cap. It\'s commonly used for tipping and everyday payments thanks to low fees.',
    website: 'https://dogecoin.com',
  },
  {
    id: 'tron', symbol: 'TRX', name: 'TRON', color: '#EF0027',
    fallbackPrice: 0.11, fallbackChange: 0.9, fallbackChange7d: 1.4,
    fallbackRank: 10, fallbackMarketCap: 9500000000, fallbackVolume: 300000000,
    fallbackSupply: 86500000000, fallbackMaxSupply: null,
    categories: ['Smart Contracts', 'Layer 1'],
    description: 'TRON is a Layer 1 blockchain focused on content and payments, and is one of the most widely used networks for transferring stablecoins thanks to its low fees and fast confirmation times.',
    website: 'https://trondao.org',
  },
  {
    id: 'polkadot', symbol: 'DOT', name: 'Polkadot', color: '#E6007A',
    fallbackPrice: 6.8, fallbackChange: -1.2, fallbackChange7d: -3.1,
    fallbackRank: 11, fallbackMarketCap: 9700000000, fallbackVolume: 180000000,
    fallbackSupply: 1430000000, fallbackMaxSupply: null,
    categories: ['Interoperability', 'Layer 0'],
    description: 'Polkadot connects independent, purpose-built blockchains ("parachains") into a single shared-security network, letting them communicate and exchange data. DOT is used for staking, governance, and securing parachain slots.',
    website: 'https://polkadot.network',
  },
  {
    id: 'chainlink', symbol: 'LINK', name: 'Chainlink', color: '#2A5ADA',
    fallbackPrice: 14.5, fallbackChange: 2.9, fallbackChange7d: 4.8,
    fallbackRank: 12, fallbackMarketCap: 8500000000, fallbackVolume: 400000000,
    fallbackSupply: 587000000, fallbackMaxSupply: 1000000000,
    categories: ['Oracle', 'Infrastructure'],
    description: 'Chainlink is a decentralized oracle network that feeds real-world data — like asset prices — into smart contracts on many different blockchains. It\'s core infrastructure for DeFi, insurance, and gaming applications that need reliable off-chain data.',
    website: 'https://chain.link',
  },
  {
    id: 'matic-network', symbol: 'MATIC', name: 'Polygon', color: '#8247E5',
    fallbackPrice: 0.7, fallbackChange: 1.5, fallbackChange7d: 3.0,
    fallbackRank: 13, fallbackMarketCap: 6500000000, fallbackVolume: 220000000,
    fallbackSupply: 9300000000, fallbackMaxSupply: 10000000000,
    categories: ['Layer 2', 'Scaling'],
    description: 'Polygon is a scaling network for Ethereum that processes transactions faster and cheaper while settling back to Ethereum for security. It\'s used heavily by consumer apps, games, and payment platforms that need low fees.',
    website: 'https://polygon.technology',
  },
  {
    id: 'litecoin', symbol: 'LTC', name: 'Litecoin', color: '#345D9D',
    fallbackPrice: 82, fallbackChange: 0.4, fallbackChange7d: -0.8,
    fallbackRank: 14, fallbackMarketCap: 6100000000, fallbackVolume: 400000000,
    fallbackSupply: 74700000, fallbackMaxSupply: 84000000,
    categories: ['Payments', 'Store of Value'],
    description: 'Litecoin is one of the earliest Bitcoin forks, launched in 2011 with faster block times and a different mining algorithm. It\'s designed for everyday payments, with a fixed supply cap of 84 million coins.',
    website: 'https://litecoin.org',
  },
  {
    id: 'avalanche-2', symbol: 'AVAX', name: 'Avalanche', color: '#E84142',
    fallbackPrice: 36, fallbackChange: 3.8, fallbackChange7d: 7.1,
    fallbackRank: 15, fallbackMarketCap: 14800000000, fallbackVolume: 350000000,
    fallbackSupply: 410000000, fallbackMaxSupply: 720000000,
    categories: ['Smart Contracts', 'Layer 1'],
    description: 'Avalanche is a Layer 1 platform made up of multiple chains that finalize transactions in under two seconds, aimed at both DeFi and custom institutional or gaming subnets. AVAX is used for fees, staking, and securing the primary network.',
    website: 'https://www.avax.network',
  },
]

export const ASSET_MAP = Object.fromEntries(ASSETS.map(a => [a.id, a]))

export function formatUsd(value, opts = {}) {
  if (value == null || Number.isNaN(value)) return '—'
  const { precise = false } = opts
  if (value > 0 && value < 1) return `$${value.toFixed(value < 0.01 ? 6 : 4)}`
  return `$${value.toLocaleString('en-US', { maximumFractionDigits: precise ? 2 : 2 })}`
}

// Compact "$1.28T / $409B / $17.4M" formatting for market cap, volume, etc.
export function formatCompactUsd(value) {
  if (value == null || Number.isNaN(value)) return '—'
  const abs = Math.abs(value)
  if (abs >= 1e12) return `$${(value / 1e12).toFixed(2)}T`
  if (abs >= 1e9) return `$${(value / 1e9).toFixed(2)}B`
  if (abs >= 1e6) return `$${(value / 1e6).toFixed(2)}M`
  if (abs >= 1e3) return `$${(value / 1e3).toFixed(2)}K`
  return `$${value.toFixed(2)}`
}

// Compact "19.7M BTC" style formatting for supply figures.
export function formatCompactNumber(value) {
  if (value == null || Number.isNaN(value)) return '—'
  const abs = Math.abs(value)
  if (abs >= 1e12) return `${(value / 1e12).toFixed(2)}T`
  if (abs >= 1e9) return `${(value / 1e9).toFixed(2)}B`
  if (abs >= 1e6) return `${(value / 1e6).toFixed(2)}M`
  if (abs >= 1e3) return `${(value / 1e3).toFixed(2)}K`
  return value.toLocaleString('en-US')
}

export function formatDate(value) {
  if (!value) return '—'
  const d = new Date(value)
  if (Number.isNaN(d.getTime())) return '—'
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}
