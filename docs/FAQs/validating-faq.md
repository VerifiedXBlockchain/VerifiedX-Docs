---
sidebar_position: 6
---

# Validating FAQs

## Core Wallet

### 1. How do I start validating with the CLI wallet?

> To start validating a user must have the minimum requirements of 1,000 RBX, a machine such as a laptop, a unique IP address and the current version of the core wallet with a unique RBX address. A user may enter the number corresponding to the command Startup Node and follow the steps on the screen to activate your validator.

### 2. How can I check if my validator is active?

> To check if your validator is properly validating, you type can type /val and check your connection status.

### 3. What commands can I use while on the core wallet to troubleshoot my validating wallet?

> The CLI wallet provides a series of tools for troubleshooting which can be found on the /help page including the debug data report.

## GUI Wallet

### 1. What are the requirements to Validate?

> To validate a user must have an active RBX account with a minimum of 1000 RBX and meet the other same requirements as operating a validator with the CLI.

### 2. How do I activate my validator?

> Click on the Masternode button and click start validating. If you do not see the button option to start validating, please make sure you have imported a key with the proper funds and the public address is not hidden on the manage wallet menu.

### 3. How do I know my validator is active?

> When the validator activates successfully, a green message stating your address is now validating will pop up on the bottom header of the wallet, and a permanent message will appear on the front header of the wallet saying validating.

### 4. How do I troubleshoot in the case my validator shows inactive?

> The best tool to use in this case after confirming the wallet is properly synced, is to open the debug data report. This report will allow you to see any problem that may be keeping you from properly validating. Please refer to the Database Corruption Detected, Peers connected Count, and the sent and received task times listed to determine if your wallet is validating.

### 5. How do you enable the MOTHER tool?

> A user can enable the MOTHER tool as a host or as a remote wallet. Any wallet can be designated as the host wallet, which will monitor the assigned remote wallet’s validator status. To properly enable the mother feature, you will have to first decide which wallet will be the host wallet and remember the IP address and the password created upon host designation on the MOTHER setup section. Both the IP and password of the host wallet will be entered when creating remote wallets.

### 6. Is there a limit to how many host wallets I can activate?

> No, the amount of host wallets created will depend on your system specs, as it will use some of the application’s resources to run on the wallet but please remember host wallets with no remote wallets connected to them serve no purpose to the user.

### 7. What is the difference between the validator pool and the MOTHER feature?

> The validator pool allows you to search for any current or past validator by using the exact name. MOTHER is a designated monitoring tool for any remote computer that connects to the host. Once the remote computers are connected to the host wallet no search is needed as the MOTHER application will automatically list all the remote wallets/validators.

### 8. Where can I see my reward transactions?

> As with any transactions, they can be seen on the recent transaction box of the front of the wallet, or they can be searched per type of transaction by clicking on the transaction button on the front of the wallet and choosing the corresponding tab at the top for the type of transaction the user wants to search.

### 9. Will my validator reconnect upon a connection interruption?

> Yes once the validator has been activated, it will automatically reconnect and stay validating unless a user selects to click Stop Validating, which they may do at any time.

### 10. I received a red bar with a message on my validating wallet stating “Duplicate IP address is being used to validate” what can I do to fix this?

> This message is alerting the user of the same account in two or more wallets while validating. To fix this the user must search for all machines with the address being flagged and stop validating on all. Restart all the wallets and only activate one as a validator.

### 11. How many rewards should I expect to be rewarded per node?

> All rewards are random, but connection uptime and a proper wallet maintenance schedule will give a node a better chance at block rewards but not an advantage over any other.

:::note TIP
**Not seeing the answer your looking for? Just ask the community!**
> <a href="https://discord.com/invite/PnS2HRETDh">Join Discord</a>
:::