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

## Addresses

Please note that all testnet addresses begin with an `x` instead of an `R`.

## Important Links

Testnet Explorer: https://spyglass-testnet.verifiedx.io

Testnet Faucet: https://spyglass-testnet.verifiedx.io/faucet

For anything bitcoin related, VerifiedX uses [testnet4](https://mempool.space/testnet4) due to the 2024 time warp attack that crippled the testnet3 network.

---

The developers will welcome your questions in the Discord.