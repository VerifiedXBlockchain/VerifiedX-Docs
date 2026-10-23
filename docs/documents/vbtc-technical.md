---
sidebar_position: 10
sidebar_class_name: sidebar-btc
---

# vBTC and vBTC.b Technical

## vBTC V2 Technical Specification

:::caution Superseded, revision in progress
The vBTC V2 technical specification has been withdrawn while it is revised for the September 2026 Core security remediation. The withdrawn edition describes behaviour that has changed:

- The key-ceremony identifier returned when a contract is created is now the contract's UID itself, in the form `<32 lowercase hex>:<unix time>`, not a separate session GUID.
- Distributed key generation shares are now encrypted to each validator's registered FROST public key; plaintext shares are refused.
- A vBTC V2 contract created before the remediation is trusted to its creator: the coordinator of its key ceremony could have reconstructed the vault key. Contracts created after the attestation rules activate are bound to a validator-attested key.

- Core 9.0 adds Bitcoin attestation: the chain records each vault's Bitcoin, and a vault created from the recording height is watched. Its withdrawals are paid by a Bitcoin transaction the chain fixes, with no completion transaction and no cancellation vote, and vaults created before that height are frozen at the enforcement height.

A revised edition will be published. Until then, integrators should rely on [vBTC](/docs/integration/vbtc), [vBTC Raw Integration](/docs/integration/vbtc-raw), the Core API reference and the current release notes.
:::

---

## vBTC.b Technical Specification

<a href="/documents/vBTCb-Technical-Specification.pdf" download="vBTCb-Technical-Specification.pdf" target="_blank">
    <img src={require('./media/vbtcb-technical.png').default} width="300" />
    <div>Click to Download</div>
</a>
