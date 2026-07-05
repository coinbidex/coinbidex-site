export const POSTS = [
  {
    slug: 'what-is-cryptocurrency',
    title: 'What Is Cryptocurrency? A Beginner\'s Guide',
    description: 'A plain-English introduction to cryptocurrency: how it works, why it has value, and how to buy your first coin safely.',
    category: 'Beginner',
    date: '2026-05-12',
    readMins: 6,
    body: `
Cryptocurrency is digital money secured by cryptography and recorded on a
public, tamper-resistant ledger called a blockchain. Unlike money issued by a
central bank, most cryptocurrencies are not controlled by any single
company or government — instead, a network of independent computers
("nodes") agrees on which transactions are valid.

## Why does it have value?

Like any asset, a cryptocurrency's value comes from what people are willing
to pay for it — driven by scarcity, utility, and demand. Bitcoin, for
example, has a hard-capped supply of 21 million coins, which is part of why
it's often compared to digital gold. Ethereum's value is tied closely to
its use as the settlement layer for thousands of applications built on top
of it.

## How do transactions work?

When you send crypto, you're broadcasting a cryptographically signed message
to the network saying "move this amount from my address to this other
address." Miners or validators bundle transactions into blocks, verify
they're valid, and add them to the chain. Once confirmed, the transaction is
essentially permanent.

## Getting started safely

1. **Choose a reputable exchange.** Look for cold-storage custody, 2FA, and a track record — [see how CoinBidex approaches security](/security).
2. **Start small.** You don't need to buy a whole coin — most exchanges let you buy fractional amounts.
3. **Use a strong, unique password and enable 2FA immediately.**
4. **Understand what you're buying.** Read the project's own documentation, not just social media hype.

Ready to buy your first crypto? [Create a free CoinBidex account](/) and get started in minutes.
    `.trim(),
  },
  {
    slug: 'how-to-buy-bitcoin',
    title: 'How to Buy Bitcoin: A Step-by-Step Guide',
    description: 'Everything you need to know to buy your first Bitcoin safely, from choosing an exchange to securing your wallet.',
    category: 'Beginner',
    date: '2026-05-28',
    readMins: 5,
    body: `
Buying Bitcoin for the first time can feel intimidating, but the process is
actually straightforward once you break it into steps.

## Step 1: Choose an exchange

Pick an exchange with strong security practices, transparent fees, and
support in your country. CoinBidex offers flat 0.1%/0.2% maker/taker fees
with no hidden spreads — see our [fee schedule](/fees) for details.

## Step 2: Verify your identity

Regulated exchanges require identity verification (KYC) to comply with
anti-money-laundering laws. This typically takes a few minutes with a
government ID and a selfie.

## Step 3: Fund your account

Deposit funds via bank transfer, card, or by transferring existing crypto.
Card deposits are usually instant; bank transfers may take 1-3 business
days depending on your country.

## Step 4: Place your order

You can buy at the current market price ("market order") or set a specific
price you're willing to pay ("limit order"). For a first purchase, a market
order is simplest.

## Step 5: Consider your storage options

For small amounts you plan to trade actively, keeping funds on the exchange
is convenient. For larger, long-term holdings, consider withdrawing to a
hardware wallet you control.

Ready to buy? [Create a free CoinBidex account](/) — verification takes minutes.
    `.trim(),
  },
  {
    slug: 'crypto-security-best-practices',
    title: '10 Security Habits Every Crypto Holder Should Build',
    description: 'Practical, non-paranoid habits that meaningfully reduce your risk of losing funds to scams, phishing, or simple mistakes.',
    category: 'Security',
    date: '2026-06-09',
    readMins: 7,
    body: `
Most crypto losses aren't caused by exotic hacks — they're caused by
phishing links, reused passwords, and rushed decisions. Here's what
actually moves the needle.

## Use a password manager

Every account you hold crypto-adjacent value in deserves a long, unique
password. Reused passwords are the single biggest cause of account
takeovers industry-wide.

## Enable app-based 2FA, not SMS

SIM-swap attacks make SMS codes the weakest form of two-factor
authentication. Use an authenticator app or hardware key wherever it's
offered — [CoinBidex requires 2FA on every account](/security).

## Bookmark your exchange URL

Phishing sites that look identical to the real thing are the top vector
for stolen credentials. Always navigate via a saved bookmark, never a
search result or a link from an email or DM.

## Whitelist withdrawal addresses

Locking withdrawals to pre-approved addresses, with a cooldown period on
any new address, closes off an entire category of attack even if your
account is compromised.

## Slow down on unsolicited opportunities

If a message promises guaranteed returns, urgency, or asks you to move
funds off-platform to "unlock" something — it's a scam. No legitimate
opportunity requires you to act in the next ten minutes.

Small, consistent habits like these do more for your security than any
single tool.
    `.trim(),
  },
  {
    slug: 'how-does-staking-work',
    title: 'How Does Crypto Staking Actually Work?',
    description: 'A clear explanation of proof-of-stake, validator rewards, and how CoinBidex Earn lets you stake without running your own node.',
    category: 'Earn',
    date: '2026-06-21',
    readMins: 6,
    body: `
Staking is how many modern blockchains — including Ethereum, Solana, and
Cardano — reach agreement on the state of the network, replacing the
energy-intensive mining used by Bitcoin.

## The basic idea

Validators lock up ("stake") a quantity of the network's native token as
collateral. In exchange for proposing and verifying blocks honestly, they
earn rewards paid in that same token. If a validator behaves dishonestly,
part of their stake can be destroyed ("slashed").

## Why stakers earn yield

Rewards come from a mix of network-issued inflation and, on some chains,
a share of transaction fees. Yield varies by network, current stake ratio,
and lock-up terms — typically somewhere between 3% and 12% annually.

## Staking through an exchange vs. running your own validator

Running your own validator requires meeting minimum stake requirements
(32 ETH on Ethereum, for example), technical setup, and uptime
responsibility. Staking through [CoinBidex Earn](/earn) pools funds across
users, so you can stake any amount and we handle the infrastructure — for
a service fee taken from rewards, disclosed up front.

## Risks to understand

Staked assets are typically subject to an unbonding period before you can
withdraw, and reward rates can change with network conditions. Staking is
not risk-free — asset prices can still fall regardless of yield earned.

Ready to put idle assets to work? [Explore CoinBidex Earn](/earn).
    `.trim(),
  },
]

export const POST_MAP = Object.fromEntries(POSTS.map(p => [p.slug, p]))
