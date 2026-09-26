---
sidebar_position: 10
sidebar_class_name: sidebar-btc
---

# vBTC and vBTC.b Technical

## Status

:::note Status as of 2026-09-04
The vBTC V2 Technical Specification below carries its own status line, "Implementation complete, Mainnet & Testnet Live", as of the VerifiedX-Core commit it documents (856b9827). Current status per the Team: the V2 network upgrade is in testnet hardening, and mainnet activation has not been announced. The vBTC.b Technical Specification describes the Base representation of vBTC; no deployed contract address has been published.
:::

## vBTC V2 Technical Specification

:::caution Superseded, revision in progress
The vBTC V2 technical specification has been withdrawn while it is revised for the September 2026 Core security remediation. The withdrawn edition describes behaviour that has changed:

- The key-ceremony identifier returned when a contract is created is now the contract's UID itself, in the form `<32 lowercase hex>:<unix time>`, not a separate session GUID.
- Distributed key generation shares are now encrypted to each validator's registered FROST public key; plaintext shares are refused.
- A vBTC V2 contract created before the remediation is trusted to its creator: the coordinator of its key ceremony could have reconstructed the vault key. Contracts created after the attestation rules activate are bound to a validator-attested key.

A revised edition will be published once the attestation design is final. Integrators should rely on the Core API reference and the current release notes until then.
:::

---

## vBTC.b Technical Specification

<a href="/documents/vBTCb-Technical-Specification.pdf" download="vBTCb-Technical-Specification.pdf" target="_blank">
    <img src={require('./media/vbtcb-technical.png').default} width="300" />
    <div>Click to Download</div>
</a>
