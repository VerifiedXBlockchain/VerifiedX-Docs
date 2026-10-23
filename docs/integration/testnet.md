---
sidebar_position: 9
---

# Testnet

## CLI

You can access testnet by running the CLI with the `testnet` flag.

Testnet database files are stored as a sibling file to your mainnet db files with the suffix `test`.

All ports are one digits longer, prefixed with a `1`.

Validating: `13338` & `13339`.
API: `17292`.

Thus, you would access swagger through this link: `http://localhost:17292/swagger`.


## GUI

You can launch the GUI in testnet mode by appending the `--testnet` flag through the command line when launching.

### MacOS

On MacOS, use this terminal command to launch into testnet:
```shell
/Applications/VFXWallet.app/Contents/MacOS/VFX\ Switchblade --testnet
```

### Windows
On Windows, use this terminal command to launch into testnet:
```shell
"C:\Program Files\VFXWallet\VFXWallet.exe" --testnet
```

> You can also update this in your shortcut's settings by right clicking to edit the properties, then updating the Target to the snippet above.

## Addresses

Please note that all testnet addresses begin with an `x` instead of an `R`.

## Important Links

Testnet Explorer: https://spyglass-testnet.verifiedx.io

Testnet Faucet: https://spyglass-testnet.verifiedx.io/faucet

For anything Bitcoin related, the VerifiedX testnet uses the VerifiedX signet, a private Bitcoin signet run by the VerifiedX team. It replaces Bitcoin testnet4.

Bitcoin Signet Explorer: https://signet.verifiedx.io

Bitcoin Signet Esplora API: https://signet.verifiedx.io/api

The signet keeps Bitcoin's 10-minute blocks. A vBTC vault event (a deposit, or a withdrawal's payment) counts once 3 signet blocks are on top of its block. The testnet restarted from genesis in October 2026 for the move to the signet: every vault on it is watched (the attestation recording height is 400). See [vBTC](./vbtc.md).

Bitcoin addresses look the same as on other Bitcoin test networks (`tb1…`). There is no public signet faucet: ask the VerifiedX team in the Discord for test BTC.

---

The developers will welcome your questions in the Discord.