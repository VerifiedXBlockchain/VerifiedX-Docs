# Web API

This section documents the VFX Explorer Web API endpoints organized by namespace. The API provides access to blockchain data including addresses, transactions, blocks, NFTs, and more.

## Available Namespaces

The following API namespaces are available (excluding applications, auth, and galxe):

1. **[Addresses](./addresses.md)** - Address information, balances, and token holdings
2. **[ADNR](./adnr.md)** - Address Domain Name Resolution system
3. **[Block](./block.md)** - Blockchain blocks and block data
4. **[BTC](./btc.md)** - Bitcoin-related functionality and cross-chain features
5. **[Chat](./chat.md)** - Chat and messaging features
6. **[CMC Price](./cmc-price.md)** - CoinMarketCap price data integration
7. **[Faucet](./faucet.md)** - Testnet faucet functionality
8. **[Fungible Token](./fungible-token.md)** - Fungible token information and operations
9. **[Master Node](./master-node.md)** - Master node data and statistics
10. **[Media](./media.md)** - Media file storage and retrieval
11. **[Metrics](./metrics.md)** - Network metrics and analytics
12. **[NFT](./nft.md)** - Non-fungible token data and operations
13. **[Price](./price.md)** - Price data and market information
14. **[Raw](./raw.md)** - Raw blockchain operations and utilities
15. **[Shop](./shop.md)** - NFT marketplace and shop functionality
16. **[Transaction](./transaction.md)** - Transaction data and operations

## Base URL

All API endpoints are accessible under:
```
Mainnet: https://data.verifiedx.io/api/
Testnet: https://data-testnet.verifiedx.io/api/
```

## Swagger
You can use the swagger playground here:
```
Mainnet: https://data.verifiedx.io/docs/
Testnet: https://data-testnet.verifiedx.io/docs/
```



## Authentication

Most endpoints are publicly accessible. Authentication requirements are noted in individual endpoint documentation where applicable.

## Response Format

All API responses follow a consistent JSON format with appropriate HTTP status codes. Paginated endpoints include standard pagination metadata.