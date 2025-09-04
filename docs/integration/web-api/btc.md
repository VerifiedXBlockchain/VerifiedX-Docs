---
sidebar_position: 4
---

# Web API: BTC

The BTC API provides endpoints for Bitcoin-related functionality including address information, VBTC (VFX Bitcoin Token) management, and cross-chain operations.

## Base URL
```
/api/btc/
```

## Endpoints

### Get Bitcoin Address Information
```http
GET /api/btc/address/{address}/
```

Returns Bitcoin address balance, transactions, and UTXOs.

**Parameters:**
- `address` (string): The Bitcoin address
- `offset` (query parameter): Pagination offset (default: 0)

**Response:**
```json
{
  "balance": {
    "confirmed": 50000000,
    "unconfirmed": 0,
    "total": 50000000
  },
  "transactions": {
    "total": 25,
    "results": [
      {
        "txid": "abc123...",
        "confirmations": 6,
        "time": 1640995200,
        "inputs": [...],
        "outputs": [...]
      }
    ]
  },
  "utxos": {
    "total": 3,
    "results": [
      {
        "txid": "def456...",
        "vout": 0,
        "value": 25000000,
        "confirmations": 10
      }
    ]
  }
}
```

### List All VBTC Tokens
```http
GET /api/btc/vbtc/
```

Returns a list of all VBTC tokens in the system.

**Response:**
```json
{
  "count": 100,
  "results": [
    {
      "id": 1,
      "smart_contract_uid": "SC123...",
      "vfx_address": "Rx1234567890abcdef...",
      "btc_amount": "0.001",
      "status": "active",
      "created_at": "2024-01-01T12:00:00Z"
    }
  ]
}
```

### Get VBTC Tokens by VFX Address
```http
GET /api/btc/vbtc/{vfx_address}/
```

Returns VBTC tokens associated with a specific VFX address.

**Parameters:**
- `vfx_address` (string): The VFX blockchain address

**Response:**
```json
{
  "count": 5,
  "results": [
    {
      "id": 1,
      "smart_contract_uid": "SC123...",
      "vfx_address": "Rx1234567890abcdef...",
      "btc_amount": "0.001",
      "btc_address": "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
      "status": "active",
      "transfers": [
        {
          "from_address": "Rx111...",
          "to_address": "Rx222...",
          "amount": "0.0005",
          "timestamp": "2024-01-01T12:00:00Z"
        }
      ]
    }
  ]
}
```

### Get VBTC Token Details
```http
GET /api/btc/vbtc/detail/{sc_identifier}/
```

Returns detailed information for a specific VBTC token.

**Parameters:**
- `sc_identifier` (string): The smart contract identifier

**Response:**
```json
{
  "id": 1,
  "smart_contract_uid": "SC123...",
  "vfx_address": "Rx1234567890abcdef...",
  "btc_amount": "0.001",
  "btc_address": "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
  "status": "active",
  "metadata": {
    "name": "VBTC Token #1",
    "description": "VFX Bitcoin Token",
    "image": "data:image/png;base64,..."
  },
  "transfers": [],
  "created_at": "2024-01-01T12:00:00Z"
}
```

### Get VBTC Compile Data
```http
GET /api/btc/vbtc-compile-data/{address}/
```

Returns compilation data for VBTC token creation by address.

**Parameters:**
- `address` (string): The VFX address

**Response:**
```json
{
  "success": true,
  "compile_data": {
    "smart_contract_code": "...",
    "constructor_args": "...",
    "compilation_artifacts": "..."
  }
}
```

### Get Default VBTC Image Data
```http
GET /api/btc/vbtc-image-data/
```

Returns the default base64 image data for VBTC tokens.

**Response:**
```json
{
  "image_data": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
}
```

## Field Descriptions

### Bitcoin Address Data
- `balance.confirmed`: Confirmed Bitcoin balance in satoshis
- `balance.unconfirmed`: Unconfirmed Bitcoin balance in satoshis
- `balance.total`: Total Bitcoin balance (confirmed + unconfirmed)

### VBTC Token Data
- `smart_contract_uid`: Unique identifier for the VBTC smart contract
- `vfx_address`: Associated VFX blockchain address
- `btc_amount`: Bitcoin amount represented by this token (in BTC)
- `btc_address`: Original Bitcoin address used to create the token
- `status`: Token status (active, burned, etc.)
- `transfers`: Array of transfer records for this token

## Notes

- VBTC tokens represent Bitcoin locked in the VFX ecosystem
- Bitcoin amounts are typically represented as strings to preserve precision
- UTXOs (Unspent Transaction Outputs) are used for Bitcoin transaction construction
- All endpoints support caching for improved performance
- Bitcoin address validation follows standard Bitcoin address formats