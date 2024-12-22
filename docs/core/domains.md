﻿---
sidebar_position: 5
---

# VFX Domain Services

The VerifiedX (VFX) platform includes a unique service called **VFX Domain Services** or **ADNR**s that simplifies the handling of public blockchain addresses for both Bitcoin (BTC) and VFX (VerifiedX) networks. This service allows users to convert complex and hard-to-read public addresses into easy-to-remember and user-friendly domain names such as `easyaddress.btc` or `someverified.vfx`.

## Overview of VFX Domain Services

VFX Domain Services provide a convenient way to create a personalized and readable alias for public addresses on both the Bitcoin and VFX blockchains. The service is built around the concept of **Address Name Resolution (ADNR)**, which links human-readable names to traditional blockchain addresses.

### Key Features

- **Address to Domain Mapping**: 
  - Users can map a difficult-to-read public address, like `1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa`, to a more readable and brandable domain, such as `mybitcoin.btc` or `john.vfx`.
  - This mapping simplifies the process of sharing addresses for receiving funds or NFTs.

- **Multi-Blockchain Support**: 
  - The service supports both **Bitcoin** and **VerifiedX** blockchains, providing users with the ability to create aliases for addresses on either network.
  - Example formats: `easyaddress.btc` for Bitcoin addresses and `simple.vfx` for VerifiedX addresses.

- **Customizable Domains**: 
  - Users can create unique and custom domains that suit their personal or business needs.
  - Domains can be tied to identities, making it easier to recognize the recipient of a transaction.

### How It Works

The core of the VFX Domain Services is powered by the **ADNR (Address Name Resolution) model**, which stores the mappings between public addresses and the human-readable names. The ADNR model is defined in the `Adnr.cs` file within the VerifiedX-Core project.

#### ADNR Model (`Adnr.cs`)
The ADNR model is responsible for handling the creation, management, and resolution of human-readable domain names to their corresponding blockchain addresses.

Key properties of the ADNR model include:
- **Id**: A unique identifier for each ADNR entry.
- **Address**: The public blockchain address (either VFX or BTC) being mapped to the human-readable name.
- **Name**: The human-readable alias (e.g., `myaddress.vfx` or `example.btc`).
- **DateCreated**: The timestamp of when the mapping was created.
- **Signature**: A digital signature that ensures the authenticity of the ADNR entry.

#### Key Methods
- **CreateAdnr()**: This method allows users to create a new ADNR entry, linking a public blockchain address to a custom domain name.
- **ResolveAdnr()**: This method resolves the human-readable domain back to its original blockchain address, enabling seamless address lookup during transactions.
- **DeleteAdnr()**: Users can also delete ADNR entries if they no longer want a domain associated with a particular address.

### Benefits of VFX Domain Services

1. **User-Friendly Transactions**: 
   - Rather than sharing long, complex addresses, users can share easy-to-remember domain names.
   - This reduces the chances of mistakes when inputting or sharing addresses.

2. **Enhanced Trust and Recognition**: 
   - Domain names can be tied to personal or business identities, making it easier to trust the recipient of a transaction.
   - A recognizable domain, such as `mycompany.vfx`, is more likely to inspire trust than an unfamiliar string of alphanumeric characters.

3. **Cross-Blockchain Flexibility**: 
   - Users can create domains for both Bitcoin and VFX addresses, making the service highly versatile.
   - This opens up the possibility for using the same name for both Bitcoin and VFX addresses (e.g., `john.btc` and `john.vfx`).

## Use Cases

- **Personal Transactions**: 
  - Users can create custom domains to represent their personal addresses for Bitcoin and VFX transactions. For example, instead of sharing a long Bitcoin address, you could share `mike.btc`.

- **Business and Merchant Transactions**: 
  - Businesses can register their brand or company name as a domain to facilitate easier payment collection. For instance, a coffee shop could use `coffeeco.vfx` as their VerifiedX address to receive payments.

- **NFT Transactions**: 
  - VFX Domain Services could be particularly useful in the NFT space, where domain names can be used to represent the owner or creator of a particular NFT, making it easier to verify ownership.

## Conclusion

VFX Domain Services offer a powerful and user-friendly solution for simplifying the sharing and management of blockchain addresses. With the ability to create custom domain names for both Bitcoin and VFX addresses, users can enjoy a more intuitive and trustworthy transaction experience.

For more technical details and implementation, you can view the **ADNR model** and related classes in the [VerifiedX-Core GitHub repository](https://github.com/VerifiedXBlockchain/VerifiedX-Core/blob/testnet/ReserveBlockCore/Models/Adnr.cs).

