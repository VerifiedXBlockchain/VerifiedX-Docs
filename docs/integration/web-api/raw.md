---
sidebar_position: 14
---

# Web API: Raw

The Raw API provides low-level blockchain operations and utilities for direct interaction with the VFX network, including transaction processing, smart contract operations, and cryptographic functions.

## Base URL
```
/api/raw/
```

## Endpoints

### Get Current Timestamp
```http
POST /api/raw/timestamp/
```

Returns the current network timestamp for transaction creation.

**Response:**
```json
{
  "timestamp": 1640995200,
  "iso_format": "2024-01-01T12:00:00Z",
  "block_height": 12345
}
```

### Get Address Nonce
```http
POST /api/raw/nonce/{address}/
```

Returns the current nonce for an address (used for transaction ordering).

**Parameters:**
- `address` (string): The VFX address

**Response:**
```json
{
  "address": "Rx1234567890abcdef...",
  "nonce": 42,
  "pending_transactions": 2
}
```

### Get Transaction Fee
```http
POST /api/raw/tx-fee/
```

Calculates the required fee for a transaction.

**Request:**
```json
{
  "transaction": "base64_encoded_transaction_data"
}
```

**Response:**
```json
{
  "fee": "0.001",
  "size_bytes": 256,
  "fee_rate": "0.000004",
  "priority": "normal"
}
```

### Get Transaction Hash
```http
POST /api/raw/tx-hash/
```

Calculates the hash for a transaction before broadcasting.

**Request:**
```json
{
  "transaction": "base64_encoded_transaction_data"
}
```

**Response:**
```json
{
  "hash": "tx123456789abcdef...",
  "size": 256,
  "valid": true
}
```

### Verify Transaction
```http
POST /api/raw/tx-verify/
```

Verifies a transaction's validity without broadcasting it.

**Request:**
```json
{
  "transaction": "base64_encoded_transaction_data"
}
```

**Response:**
```json
{
  "valid": true,
  "errors": [],
  "warnings": [
    "Fee is higher than recommended"
  ],
  "estimated_confirmation_time": "30s"
}
```

### Send Transaction
```http
POST /api/raw/tx-send/
```

Broadcasts a transaction to the VFX network.

**Request:**
```json
{
  "transaction": "base64_encoded_transaction_data"
}
```

**Response:**
```json
{
  "success": true,
  "hash": "tx123456789abcdef...",
  "message": "Transaction broadcast successfully",
  "estimated_confirmation": "2024-01-01T12:02:00Z"
}
```

### Validate Signature
```http
POST /api/raw/signature/{message}/{address}/{signature}/
```

Validates a cryptographic signature.

**Parameters:**
- `message` (string): The signed message
- `address` (string): The signer's address
- `signature` (string): The signature to validate

**Response:**
```json
true
```

### Get Smart Contract
```http
GET /api/raw/smart-contract/{id}/
```

Retrieves smart contract data and code.

**Parameters:**
- `id` (string): Smart contract identifier

**Response:**
```json
{
  "id": "SC123...",
  "code": "contract_code_here",
  "abi": [
    {
      "name": "transfer",
      "inputs": [
        {
          "name": "to",
          "type": "address"
        }
      ]
    }
  ],
  "owner": "Rx1234567890abcdef...",
  "created_at": "2024-01-01T12:00:00Z"
}
```

### Get Smart Contract Data
```http
POST /api/raw/nft-data/
```

Retrieves or processes NFT smart contract data.

**Request:**
```json
{
  "smart_contract_id": "SC123...",
  "method": "get_metadata",
  "parameters": {}
}
```

### NFT Transfer Data
```http
GET /api/raw/nft-transfer-data/{id}/{address}/{locator}/
```

Generates data required for NFT transfers.

**Parameters:**
- `id` (string): NFT identifier
- `address` (string): Recipient address
- `locator` (string): Transfer locator

### NFT Evolve Data
```http
POST /api/raw/nft-evolve-data/{id}/{address}/{next_state}/
```

Generates data for NFT evolution/upgrade operations.

### NFT Burn Data
```http
POST /api/raw/nft-burn-data/{id}/{address}/
```

Generates data required to burn/destroy an NFT.

### Get Locators
```http
GET /api/raw/locators/{id}/
```

Returns available locators for an NFT or smart contract.

**Response:**
```json
{
  "locators": [
    "locator_1",
    "locator_2", 
    "locator_3"
  ],
  "primary_locator": "locator_1"
}
```

### Beacon Upload Request
```http
GET /api/raw/beacon-upload-request/{id}/{to_address}/{signature}/
```

Requests beacon upload permissions for decentralized storage.

### Beacon Assets
```http
GET /api/raw/beacon-assets/{id}/{locators}/{address}/{signature}/
```

Manages beacon-stored assets and their retrieval.

## Transaction Types

The Raw API supports various transaction types:
- **Transfer**: Basic VFX token transfers
- **Smart Contract**: Contract deployment and interaction
- **NFT Operations**: Mint, transfer, burn NFTs
- **Staking**: Validator staking operations
- **Governance**: Voting and proposals

## Security Notes

- All transaction operations require proper cryptographic signatures
- Private keys should never be sent to the API
- Transactions are irreversible once confirmed
- Always verify transaction details before broadcasting
- Use the verify endpoint before sending transactions

## Error Handling

Common error responses:
```json
{
  "error": "Invalid transaction format",
  "code": 400,
  "details": "Transaction encoding is malformed"
}
```

```json
{
  "error": "Insufficient balance",
  "code": 422,
  "required": "10.5",
  "available": "5.2"
}
```

## Notes

- Raw API requires deep knowledge of VFX blockchain internals
- Transaction data must be properly encoded before submission
- Nonce management is critical for transaction ordering
- Fee calculation depends on network congestion
- Smart contract interactions may require specific ABI knowledge
- Beacon operations are for decentralized file storage