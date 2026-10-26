---
sidebar_position: 13
---

# Validating

To become a validator on the VerifiedX network, you'll need:

- **5,000 VFX, bonded.** While your address is a registered validator, 5,000 VFX on it cannot be sent. Anything above 5,000 stays spendable. When you stop validating, the wallet sends a validator exit transaction, and the 5,000 VFX unlocks 1,200 blocks (about four hours) after the exit is mined. There are no fees and no penalties. Hold 5,001 VFX so a transaction fee never takes you below 5,000.
- **A machine meeting the standard specs, with a static public IP address.**
- **Open ports:** `3338`, `3339`, `7294` and `7295` (testnet: `13338`, `13339`, `17294` and `17295`). The wallet checks `3339`, `7294` and `7295` from the outside before it starts validating and keeps checking them; if they stay unreachable for about 90 seconds, validating stops (without an exit, so the 5,000 VFX stays bonded) until you start it again.
- **Outbound access to the Bitcoin network** (port `8333`), because validators follow Bitcoin for vBTC.

Validators receive no block rewards. They secure the network, and from Core 9.0 they also follow Bitcoin, sign the reports that record vBTC vault deposits and spends, and take part in vBTC key ceremonies and withdrawal signing once their bond has been in place for about two days. See [Run a Validator](../core/validator-guide.md) for the full picture.

Validators also govern the network. A validator address holding at least 5,000 VFX can vote on network proposals, one vote per address per proposal, and can create a proposal for 10 VFX, which is burned. This is all accomplished with real-time 'one-click' actions and visuals in the wallets.
