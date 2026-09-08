---
sidebar_position: 4
---

# Run a Validator

This guide takes you from a blank Linux server to an active mainnet validator: install dependencies, build the Core CLI from source, fast-sync from a snapshot, run the node with a crash watchdog, fund your address, and start validating — through the CLI console or through the wallet API.

The steps are opinionated so they work turn-key. We use Ubuntu 22.04 LTS, run the CLI inside a `screen` session, and install a small cron watchdog that restarts the node after a crash or reboot. Nothing here is specific to any cloud or hosting provider — if you know what you're doing, adjust freely.

:::note Testnet
Callouts like this one mark what changes when targeting **testnet** instead of mainnet. There is also a [testnet quick reference](#testnet-quick-reference) at the end.
:::

## What you'll need

- **5,000 VFX.** Your VFX stays fully liquid — there is no lockup and no penalty; you can stop validating and transact with your funds at any time. We recommend sending 5,001 VFX so a transaction fee never dips you below the 5,000 floor.
- **A server.** Ubuntu 22.04 LTS, 2 vCPU, 4 GB RAM, 40 GB+ SSD, with a static public IP. Both x64 and ARM64 work. The mainnet chain is roughly 15 GB as of mid-2026 and growing, so leave disk headroom.
- **Open ports.** See the table below.
- **A wallet holding your VFX** (for example [Switchblade](../gui/gui-installation)) to fund the validator address from.

### Ports

| Port | What it is | Exposure |
| --- | --- | --- |
| `3338` | Peer-to-peer | Open to the world |
| `3339` | Validator peer-to-peer | Open to the world |
| `7294` | Validator API | Open to the world |
| `7295` | Validator (FROST) port | Open to the world — **required for validating** |
| `7296` | Validator (FROST) port over TLS | Open to the world — opened by the node next to `7295`, self-signed certificate |
| `7292` | Wallet API (HTTP) | Keep closed — call it from the server itself |
| `22` | SSH | Restrict to your own IP if possible |

The CLI verifies its own ports when you activate a validator. If `7295` is not reachable from the outside, activation fails even though the CLI is listening — a missing firewall rule is the most common cause.

If your server has no external firewall, `ufw` works fine:

```bash
sudo ufw allow OpenSSH
sudo ufw allow 3338/tcp
sudo ufw allow 3339/tcp
sudo ufw allow 7294/tcp
sudo ufw allow 7295/tcp
sudo ufw allow 7296/tcp
sudo ufw enable
```

If your host provides a firewall or security groups, open the same ports there instead.

:::note Testnet
Testnet ports are `13338` and `13339` (peer-to-peer), `17294` (validator API), `17295` (validator/FROST port), `17296` (FROST over TLS), and `17292` (wallet API — keep closed).
:::

## 1. Prepare the server

All commands assume a regular user with sudo (the default `ubuntu` user on most cloud images).

```bash
sudo apt-get update -y
sudo apt-get install -y git wget curl unzip screen ca-certificates jq
```

> Note: On a dedicated node it is worth disabling unattended upgrades so a background apt run never restarts things underneath you: `sudo systemctl disable --now unattended-upgrades`

## 2. Install the .NET 6 SDK

The Core CLI is a .NET 6 application. Ubuntu ships its own dotnet packages which conflict with Microsoft's — pin Microsoft's repository first and you will never hit the conflict:

```bash
sudo bash -c 'cat > /etc/apt/preferences.d/99microsoft-dotnet.pref << EOF
Package: *
Pin: origin "packages.microsoft.com"
Pin-Priority: 1001
EOF'

wget https://packages.microsoft.com/config/ubuntu/22.04/packages-microsoft-prod.deb -O /tmp/packages-microsoft-prod.deb
sudo dpkg -i /tmp/packages-microsoft-prod.deb
rm /tmp/packages-microsoft-prod.deb

sudo apt-get update -y
sudo apt-get install -y dotnet-sdk-6.0
```

Verify with `dotnet --version` — you should see `6.0.x`. If dotnet was already installed and you hit `A fatal error occurred. The folder [/usr/share/dotnet/host/fxr] does not exist`, see [Dotnet Conflicts](./build-instructions#dotnet-conflicts).

## 3. Clone and build

Mainnet runs the `main` branch:

```bash
cd ~
git clone https://github.com/VerifiedXBlockchain/VerifiedX-Core.git vfx-cli
cd vfx-cli
git checkout main

dotnet build
```

The build should complete with 0 errors. Then publish a release build for your architecture (`uname -m` prints `x86_64` or `aarch64`):

```bash
# x64
dotnet publish -c Release -r linux-x64 --self-contained false --output ./published

# ARM64 (Graviton, Ampere, Raspberry Pi 5, ...)
dotnet publish -c Release -r linux-arm64 --self-contained false --output ./published
```

The node now lives at `~/vfx-cli/published/ReserveBlockCore.dll`.

:::note Testnet
Check out the `testnet` branch instead of `main`.
:::

## 4. Fast-sync from a snapshot (recommended)

A fresh node syncs from block 0, which takes a long time. Instead, seed the chain database from the latest network snapshot **before the first start**. Snapshots are published at [sync.verifiedx.io](https://sync.verifiedx.io) — download the files in your browser, or pull them straight onto the server:

```bash
mkdir -p ~/.local/share/RBX/Databases
cd ~/.local/share/RBX/Databases

curl -s "https://sync.verifiedx.io/api/snapshots?network=mainnet" \
  | jq -r '.urls[]' \
  | xargs -n 1 -P 4 wget -q --show-progress -c
```

On Linux, mainnet data lives in `~/.local/share/RBX/` — chain databases in `Databases/`, configuration in `Config/config.txt` (see [CLI Configuration](./config)). The CLI creates these folders on first run; pre-creating `Databases/` and filling it, as above, is exactly equivalent to a long natural sync.

:::note Re-applying a snapshot to an existing node
Snapshots contain chain data only — never wallet data. If you ever refresh a node that already holds keys, stop the CLI first and only replace the chain files you downloaded. Do **not** delete `rsrvwaldata.db`, `rsrvhdwaldata.db`, `rsrvkeystore.db`, `rsrvbitcoin.db`, `DB_Privacy.db`, `rsrvvbtc.db`, or `rsrvshares.db` (or their `-log.db` companions) — those hold your keys and local wallet state.
:::

:::note Testnet
Use `?network=testnet` and the data directory `~/.local/share/RBXTest/DatabasesTestNet`.
:::

## 5. Start the node

First generate an API token — any random string. The wallet API will require it as a header on every call, so the API is protected even if the port is ever exposed:

```bash
openssl rand -hex 16
```

Start the CLI inside a detached `screen` session (replace `YOUR_API_TOKEN` here and everywhere below):

```bash
cd ~/vfx-cli/published
screen -dmS vfx bash -lc "dotnet ReserveBlockCore.dll enableapi openapi apitoken=YOUR_API_TOKEN"
```

What the startup flags do:

- `enableapi` — turns on the local wallet API on port `7292`. It is off by default, and this guide relies on it.
- `openapi` — binds the API on all interfaces instead of localhost only. With `7292` closed in your firewall this changes nothing day to day, but it lets you open the port later for remote management without restarting the node. Drop it if you will only ever call the API from the server itself.
- `apitoken=...` — requires the `apitoken` header on every API call.

Attach to watch the console, and detach again with `Ctrl+A` then `D` — do **not** press `Ctrl+C`, that kills the node:

```bash
screen -r vfx
```

Give it a minute to boot, then check sync progress:

```bash
curl -s -H "apitoken: YOUR_API_TOKEN" http://localhost:7292/api/V1/GetWalletInfo
```

Compare the reported block height against the [Spyglass explorer](https://spyglass.verifiedx.io). Once the heights match, you are synced. In the console, `/info` shows the same.

:::note Testnet
Add the `testnet` flag — `dotnet ReserveBlockCore.dll enableapi openapi testnet apitoken=...` — and use port `17292` in the API calls.
:::

## 6. Keep it running: crash watchdog

A validator has to survive crashes and reboots unattended. Two small scripts and two cron entries make the setup self-healing. The convention that ties them together: the marker file `~/.vfx_cli_stopped` means "stopped on purpose" — the watchdog stays out of the way while it exists.

Create `~/vfx-start.sh`:

```bash
#!/bin/bash
set -e

API_TOKEN="YOUR_API_TOKEN"

# Hold the watchdog off while we (re)start; cleared on success below.
touch "$HOME/.vfx_cli_stopped"

# Kill any existing session
screen -S vfx -X quit 2>/dev/null || true
sleep 1

cd "$HOME/vfx-cli/published"
screen -dmS vfx bash -lc "dotnet ReserveBlockCore.dll enableapi openapi apitoken=$API_TOKEN"

sleep 2
if screen -list | grep -q "\.vfx"; then
    rm -f "$HOME/.vfx_cli_stopped"
    echo "VFX CLI started. Attach with: screen -r vfx"
else
    echo "ERROR: failed to start the vfx screen session" >&2
    exit 1
fi
```

Create `~/vfx-watchdog.sh`:

```bash
#!/bin/bash
# Restarts the VFX CLI screen session if it dies. Stays quiet when:
#   - ~/.vfx_cli_stopped exists (the CLI was stopped on purpose)
#   - the screen session is alive

FLAG="$HOME/.vfx_cli_stopped"
START="$HOME/vfx-start.sh"
LOG="$HOME/vfx-watchdog.log"

[ -f "$FLAG" ] && exit 0
[ -f "$START" ] || exit 0

if screen -list 2>/dev/null | grep -q "\.vfx"; then
    exit 0
fi

echo "$(date -Is) CLI screen session missing — restarting" >> "$LOG"
bash "$START" >> "$LOG" 2>&1
echo "$(date -Is) restart script exited with $?" >> "$LOG"

# Keep the log bounded
tail -n 500 "$LOG" > "$LOG.tmp" && mv "$LOG.tmp" "$LOG"
```

Make them executable and install the cron entries (every 2 minutes, plus one shortly after boot):

```bash
chmod 700 ~/vfx-start.sh
chmod 755 ~/vfx-watchdog.sh

( crontab -l 2>/dev/null | grep -v "vfx-watchdog.sh"
  echo "*/2 * * * * $HOME/vfx-watchdog.sh"
  echo "@reboot sleep 45 && $HOME/vfx-watchdog.sh"
) | crontab -
```

From now on, start (and restart) the node with:

```bash
bash ~/vfx-start.sh
```

When you *want* the node stopped — maintenance, updates — set the marker first so the watchdog doesn't fight you, then shut down gracefully:

```bash
touch ~/.vfx_cli_stopped
curl -s -H "apitoken: YOUR_API_TOKEN" http://localhost:7292/api/V1/SendExit
```

(`screen -S vfx -X quit` works as a fallback if the API is unresponsive.) Running `bash ~/vfx-start.sh` clears the marker and brings everything back.

:::note Testnet
Add the `testnet` flag to the `screen -dmS vfx ...` line inside `vfx-start.sh`, as in step 5.
:::

## 7. Create or import your validator address

You need one address on the node holding at least 5,000 VFX — either a fresh one or one you already own. Both the console and the API can do it; pick whichever you prefer.

**Via the CLI console** (`screen -r vfx`; type `/menu` to see all options):

- Type `2` to create a new address, or
- Type `3` to restore an address from an existing private key. It will ask whether to rescan the chain for past transactions — answer `y` if the address has history.

**Via the API:**

```bash
# Create a new address
curl -s -H "apitoken: YOUR_API_TOKEN" http://localhost:7292/api/V1/GetNewAddress

# Or import an existing private key (the trailing /true rescans the chain for its history)
curl -s -H "apitoken: YOUR_API_TOKEN" http://localhost:7292/api/V1/ImportPrivateKey/YOUR_PRIVATE_KEY/true
```

:::note Back up your private key
Type `/printkeys` in the console to print the private keys for all addresses on the node, and store them somewhere safe and offline. If the server dies, the private key is the only way to recover the funds.
:::

A note on wallet encryption: the CLI supports encrypting the wallet, but an encrypted wallet requires its password to be entered interactively before validating can start — which breaks unattended restarts. For a headless validator the practical setup is an unencrypted wallet on a well-firewalled box with SSH key authentication only.

## 8. Fund the address

Send **5,001 VFX** (the 5,000 requirement plus fee headroom) from your wallet — for example Switchblade — to the address from step 7. The node must be fully synced before the balance appears. Check it:

```bash
curl -s -H "apitoken: YOUR_API_TOKEN" http://localhost:7292/api/V1/GetAllAddresses
```

The console equivalent is option `7` (Account Info).

:::note Testnet
Get testnet funds from the [faucet](https://spyglass-testnet.verifiedx.io/faucet), or ask in the `Testnet Faucet` channel on Discord. See [Testnet](../integration/testnet) for more.
:::

## 9. Start validating

Before activating, confirm: the node is fully synced, the address holds at least 5,000 VFX, and ports `3338`, `3339`, `7294`, and `7295` are reachable from the outside.

### Via the CLI console

Attach with `screen -r vfx` and type `8` (Startup Masternode). The CLI lists your addresses with balances — choose the funded one by number, confirm with `y`, and give your validator a unique name (or leave it blank for an auto-assigned one). Detach with `Ctrl+A` then `D`.

### Via the API

```bash
curl -s -H "apitoken: YOUR_API_TOKEN" "http://localhost:7292/api/V1/StartValidating/YOUR_VFX_ADDRESS/YOUR_VALIDATOR_NAME"
```

The name must be unique on the network — you will get `Node name already taken.` otherwise. URL-encode the name if it contains spaces.

### Verify it

- In the console, `/val` prints your validator's info.
- Your node appears in the network's master node list — see the [Master Node Web API](../integration/web-api/master-node) to look it up by name or address programmatically.
- `GetAllAddresses` (step 8) shows the address flagged as validating.

:::note Stay reachable
The CLI continuously self-checks its validator ports. If your node becomes unreachable for around 90 seconds — a firewall change, a network outage, a host migration — it deactivates validation and does **not** re-activate on its own. Fix connectivity, then start validating again as above.
:::

## 10. Stopping and updating

**Stop validating** — your funds stay liquid and are spendable immediately:

- Console: type `11` (stop masternode), or
- API: `curl -s -H "apitoken: YOUR_API_TOKEN" http://localhost:7292/api/V1/TurnOffValidator/YOUR_VFX_ADDRESS`

**Update the node** with a build-then-swap, so a broken build can never take your validator down:

```bash
cd ~/vfx-cli
git fetch origin && git reset --hard origin/main

# Build the new version alongside the running one (use linux-arm64 on ARM)
dotnet publish -c Release -r linux-x64 --self-contained false --output ./published_next
test -f ./published_next/ReserveBlockCore.dll && echo "BUILD OK" || echo "BUILD FAILED - old version untouched"

# Swap and restart
touch ~/.vfx_cli_stopped
curl -s -H "apitoken: YOUR_API_TOKEN" http://localhost:7292/api/V1/SendExit
sleep 5
rm -rf published_prev
mv published published_prev
mv published_next published
bash ~/vfx-start.sh
```

The previous build stays at `published_prev` — if anything is wrong, swap it back the same way. On boxes with 4 GB of RAM or less, running `dotnet publish` while the node is running can exhaust memory; if the build gets killed, stop the CLI first (marker + `SendExit`), then build, swap, and start.

After any restart, confirm the validator is still active (`/val`) and reactivate with step 9 if needed.

## Troubleshooting

- **`A fatal error occurred. The folder [/usr/share/dotnet/host/fxr] does not exist`** — conflicting dotnet packages; see [Dotnet Conflicts](./build-instructions#dotnet-conflicts).
- **Block height stuck** — stop the CLI (marker + `SendExit`), re-apply the latest snapshot (step 4 — mind the wallet-file warning), start again.
- **Validator silently deactivated** — almost always the port self-check: verify `7295` and the peer-to-peer ports are reachable from outside, then start validating again.
- **Node didn't come back after a reboot** — check `~/vfx-watchdog.log`, and make sure `~/.vfx_cli_stopped` isn't lingering (running `bash ~/vfx-start.sh` clears it).
- **What is it doing right now?** — `screen -r vfx` shows the live console; detach with `Ctrl+A` then `D`.

## Testnet quick reference

| | Mainnet | Testnet |
| --- | --- | --- |
| Branch | `main` | `testnet` |
| Start flags | `enableapi openapi apitoken=...` | `enableapi openapi testnet apitoken=...` |
| Wallet API port | `7292` | `17292` |
| Peer-to-peer ports | `3338`, `3339` | `13338`, `13339` |
| Validator API port | `7294` | `17294` |
| Validator (FROST) port | `7295` | `17295` |
| Validator (FROST) port over TLS | `7296` | `17296` |
| Data directory | `~/.local/share/RBX` | `~/.local/share/RBXTest` |
| Chain databases | `.../RBX/Databases` | `.../RBXTest/DatabasesTestNet` |
| Config file | `.../RBX/Config/config.txt` | `.../RBXTest/ConfigTestNet/config.txt` |
| Snapshot | `?network=mainnet` | `?network=testnet` |
| Explorer | [spyglass.verifiedx.io](https://spyglass.verifiedx.io) | [spyglass-testnet.verifiedx.io](https://spyglass-testnet.verifiedx.io) |
| Getting funds | 5,000 VFX from your wallet | [Faucet](https://spyglass-testnet.verifiedx.io/faucet) |
