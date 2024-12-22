---
sidebar_position: 8
---

# Bitcoin Integration in VerifiedX-Core

The VerifiedX wallet integrates Bitcoin functionality, allowing the VerifiedX platform to interact with the Bitcoin network. This integration provides tools and methods for verifying Bitcoin transactions, enhancing the interoperability of VerifiedX (VFX) with Bitcoin (BTC). One of the key components utilized in this integration is ElectrumX, which allows for lightweight Bitcoin verification without needing to run a full Bitcoin node.

## Key Components and Features

### ElectrumX Integration
- **ElectrumX** is a lightweight Bitcoin server that communicates with the Bitcoin blockchain without needing to download the entire chain locally. 
- VerifiedX-Core uses ElectrumX for:
  - **Blockchain Access**: ElectrumX connects to the Bitcoin network, enabling VerifiedX to query Bitcoin transactions and blocks.
  - **Transaction Verification**: VerifiedX can verify Bitcoin transactions without running a full Bitcoin node by relying on ElectrumX's connection to the network.
  - **Efficiency**: ElectrumX provides fast access to Bitcoin data, making it easier to integrate Bitcoin functionality into applications like VerifiedX.

### Bitcoin RPC Client
- The **BitcoinRPCClient.cs** file in the repository allows for easy interaction with Bitcoin nodes via Remote Procedure Calls (RPCs).
- **RPC Capabilities**:
  - Query Bitcoin network information.
  - Retrieve transaction data from Bitcoin blocks.
  - Get details about specific Bitcoin addresses and their balance.
  
### Bitcoin Transaction Features
With the Bitcoin integration, VerifiedX-Core enables various Bitcoin-related functionalities:
- **Transaction Querying**: Users can query specific Bitcoin transactions using the ElectrumX backend.
- **Block Verification**: The system can retrieve and verify blocks from the Bitcoin blockchain.
- **Address Information**: Retrieve data about specific Bitcoin addresses, including balance, transaction history, and unspent transaction outputs (UTXOs).

### Use Cases
The Bitcoin integration in VerifiedX-Core opens up several potential use cases:
1. **Smart Contract Creation (vBTC) Linked to Bitcoin**: SCs created on the VerifiedX platform can be linked to specific Bitcoin transactions, using Bitcoin as a layer of verification.
2. **Cross-Chain Asset Verification**: Users and developers can verify Bitcoin-based assets or transactions within the VerifiedX ecosystem without leaving the platform.
3. **Secure Asset Transfers**: By leveraging Bitcoin’s security and ElectrumX’s verification capabilities, users can securely transfer and verify Bitcoin assets directly in VerifiedX.
4. **Frictionless and Near Zero Fees**: VFX allows for storage of BTC in vBTC to solve many of the issues facing bitcoinist today. 

### ElectrumX Setup
- To use ElectrumX with VerifiedX-Core, users must configure the ElectrumX server and point it to their desired Bitcoin network (mainnet, testnet, etc.).
- The ElectrumX configuration is lightweight, and it communicates directly with the Bitcoin blockchain, ensuring up-to-date transaction and block information.

## Summary of Capabilities
- **Verify Bitcoin transactions** via ElectrumX.
- **Retrieve Bitcoin blocks** and transaction data using RPC.
- **Access Bitcoin address information** (balance, UTXOs, history).
- **Interact with the Bitcoin network** without needing a full node, leveraging the lightweight ElectrumX server.

## Additional Resources
- **ElectrumX Documentation**: [ElectrumX Docs](https://electrumx.readthedocs.io/en/latest/)
- **VerifiedX-Core GitHub Repository**: [VerifiedX-Core Bitcoin Integration](https://github.com/VerifiedXBlockchain/VerifiedX-Core/)

