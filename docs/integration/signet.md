---
sidebar_position: 9.5
---

# VerifiedX Signet (Testnet Bitcoin)

The VerifiedX testnet does not use a public Bitcoin test network. Its Bitcoin side is the **VerifiedX signet**: a private Bitcoin network, run by the VerifiedX team, that follows Bitcoin's rules but whose blocks only the VerifiedX team can produce. Everything Bitcoin-related on the VFX testnet uses it: vBTC vault deposits and withdrawals, the wallets' Bitcoin accounts and the SDK's `BtcClient` on testnet.

It replaced Bitcoin testnet4 in October 2026. Testnet4's block times swing from seconds to hours and its chain reorganises often, so vBTC deposits and withdrawals could not be confirmed on a predictable schedule. The signet gives the testnet a Bitcoin chain that behaves like mainnet and stays up.

## How it works

A signet ([BIP 325](https://github.com/bitcoin/bips/blob/master/bip-0325.mediawiki)) is a Bitcoin test network where every block must carry a signature from the network's signing key. Proof of work is still checked, but at a low difficulty: what makes a block valid is the signature. Only the VerifiedX team holds the key, so nobody else can mine on the VerifiedX signet and nobody can reorganise it.

| | VerifiedX signet |
|---|---|
| Block producer | The VerifiedX team's signer (no one else can mine) |
| Block time | About 10 minutes, like mainnet |
| Reorganisations | None |
| Fees | 1 sat/vB is enough |
| Addresses | Testnet formats: `tb1…` (SegWit and Taproot), `m…`/`n…`, `2…` |
| Coins | Signet BTC (sBTC). It has no value and cannot be bought |
| Genesis | The standard signet genesis block (`00000008819873e9…bee1ef6`) |
| Message start | `c69e715c` |

The VFX testnet counts a vBTC vault event (a deposit, or a withdrawal's payment) once 3 signet blocks are on top of its block, so a deposit is usually credited 30 to 40 minutes after it is sent. See [vBTC](./vbtc.md).

## Explorer and APIs

The signet runs its own [mempool](https://signet.verifiedx.io) explorer, the same software as mempool.space.

| What | Where |
|------|-------|
| Explorer (blocks, transactions, addresses, mempool) | https://signet.verifiedx.io |
| Transaction page | `https://signet.verifiedx.io/tx/<txid>` |
| Esplora REST API (balances, UTXOs, broadcast) | `https://signet.verifiedx.io/api/…` |
| mempool API (fee estimates and more) | `https://signet.verifiedx.io/api/v1/…` |
| Electrum server (TLS) | `signet.verifiedx.io:50002`, `signet-2.verifiedx.io:50002` |
| Bitcoin P2P | `signet.verifiedx.io:38333`, `signet-2.verifiedx.io:38333` |

The APIs follow the mempool.space API, so a client written for mempool.space works by changing its base URL. For example:

```bash
# Current block height
curl https://signet.verifiedx.io/api/blocks/tip/height

# An address's balance and transactions
curl https://signet.verifiedx.io/api/address/tb1q.../txs

# Recommended fees
curl https://signet.verifiedx.io/api/v1/fees/recommended
```

VerifiedX Core on testnet, the VerifiedX wallets and the SDK's `BtcClient('testnet')` already point at these servers.

## Getting signet BTC

The [testnet faucet](https://spyglass-testnet.verifiedx.io/faucet) pays signet BTC on its **Signet BTC** tab: enter a `tb1…` address, the amount and your phone number, then the code you receive by SMS. Each phone number can receive up to 0.01 sBTC in total. The payment shows in the signet explorer at once and confirms in the next block. See [Testnet](./testnet.md#getting-test-funds) for both faucet tabs, and [Web API: Faucet](./web-api/faucet.md) for the API.

For more sBTC than the faucet gives, ask in the `Testnet Faucet` channel on [Discord](https://discord.gg/7cd5ebDQCj).

## Mining blocks

Blocks come only from the VerifiedX team's signer, which produces one about every 10 minutes. Because the network is the team's own, it can also produce blocks on demand. For test automation that cannot wait about 10 minutes per confirmation (for example a test that needs 6 confirmations), the VerifiedX team can give access to mine signet blocks on demand, together with a faucet automation token that funds addresses without the SMS step. Ask in the `Testnet Faucet` channel on [Discord](https://discord.gg/7cd5ebDQCj); the details come with access.

## Running your own node

You can follow the signet with your own Bitcoin Core node, peering with `signet.verifiedx.io:38333` and `signet-2.verifiedx.io:38333`. A node needs the signet's challenge script (`signetchallenge`) to accept its blocks; ask in the `Testnet Faucet` channel on [Discord](https://discord.gg/7cd5ebDQCj) for it. Most integrations do not need a node: the Esplora API and the Electrum servers above serve wallets directly.
