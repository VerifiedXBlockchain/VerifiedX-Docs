---
sidebar_position: 7
---

# Web Wallet FAQs

### 1. What is the difference between the RBX web wallet and the other RBX wallets?

> The Web wallet is a native RBX wallet accessible from any device connected to the internet including a mobile device, except a web wallet my not validate.

### 2. How do I create a web wallet?

> The web wallet can be created by first accessing the Web Wallet link on the **[https://wallet.rbx.network](https://wallet.rbx.network)**. Once on the Web Wallet page, you may log in with a previously created wallet or create a new wallet and address.

### 3. Can I validate with the web wallet?
> No. The web wallet does not support validating.

### 4. Are my credentials safe?
> Yes. Your private key never leaves you browser. Instead, all transactions are signed locally and then broadcasted to the network via a core wallet running in the cloud.

### 5. What are the options for creating a web wallet account?
> The web wallet supports three methods of signing in. An email/password combo is the simplest and works the same way as a BTC web wallet. See `#6` below for more details. A mneumonic allows you to generate your private key based on a pass phrase that is automatically generated. This is arguably the most secure method and be sure to back up your recovery phrase. Importing a private key is another option and should only be used if you have already generated a key in the core wallet (MacOS/Windows application or CLI).

### 6. I signed in with my email and password and I no longer see my funds. What's going on?
> There are no "accounts" with your web wallet. The email and password combo is simply the seed used to generate your keys. The web wallet does not talk to a centralized server to log you in like a standard website. Therefore, you may have just used a different password or email address (or both) which results in a different salt and thus a different private key.

### 7. Why is the web wallet asking for my email address?
> Even if you choose to login with your recovery phrase or private key, the web wallet infrastructure corilates the combination of your email address and public address to uniquely identify you. Your email address is also used for NFT transfer notifications as well as P2P auction notifications. If you prefer not to include your email address, you can use a fake address but be sure to continue keep record of the email address used for future logins for reasons pointed out in `#6`.



:::note TIP
**Not seeing the answer your looking for? Just ask the community!**
> <a href="https://discord.com/invite/PnS2HRETDh">Join Discord</a>
:::