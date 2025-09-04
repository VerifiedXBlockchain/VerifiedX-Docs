---
sidebar_position: 7
---

# Web API: Faucet

The Faucet API provides endpoints for requesting testnet VFX tokens for development and testing purposes.

## Base URL
```
/api/faucet/
```

## Endpoints

### Request Faucet Funds
```http
POST /api/faucet/request/
```

Requests testnet VFX tokens to be sent to a specified address.

**Request:**
```json
{
  "address": "Rx1234567890abcdef...",
  "amount": "100.0",
  "captcha_response": "03AGdBq26...",
  "email": "user@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Faucet request submitted successfully",
  "transaction_hash": "tx123...",
  "amount": "100.0",
  "estimated_arrival": "2024-01-01T12:05:00Z"
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Daily limit exceeded. Please try again in 24 hours.",
  "retry_after": "2024-01-02T12:00:00Z"
}
```

### Verify Faucet Funds
```http
POST /api/faucet/verify/
```

Verifies the status of a faucet request and confirms delivery.

**Request:**
```json
{
  "transaction_hash": "tx123...",
  "address": "Rx1234567890abcdef..."
}
```

**Response:**
```json
{
  "success": true,
  "status": "completed",
  "transaction_hash": "tx123...",
  "amount": "100.0",
  "sent_at": "2024-01-01T12:03:00Z",
  "confirmations": 6,
  "block_height": 12345
}
```

**Status Values:**
- `pending`: Request is being processed
- `completed`: Tokens have been sent successfully
- `failed`: Request failed to process
- `rate_limited`: Request was rate limited

## Request Parameters

### Faucet Request
- `address` (string): Valid VFX testnet address to receive funds
- `amount` (string): Amount of VFX tokens requested (subject to limits)
- `captcha_response` (string): CAPTCHA validation token
- `email` (string, optional): Email address for notifications

### Verification Request
- `transaction_hash` (string): Hash returned from the faucet request
- `address` (string): Address that was funded

## Response Fields

### Request Response
- `success`: Whether the request was accepted
- `message`: Human-readable status message
- `transaction_hash`: Unique identifier for tracking the request
- `amount`: Amount of tokens that will be sent
- `estimated_arrival`: Expected time when tokens will arrive

### Verification Response
- `status`: Current status of the faucet transaction
- `sent_at`: Timestamp when tokens were sent
- `confirmations`: Number of blockchain confirmations
- `block_height`: Block height where the transaction was included

## Usage Limits

- **Daily Limit**: Maximum 100 VFX per address per 24 hours
- **Rate Limiting**: Maximum 1 request per 10 minutes per IP
- **CAPTCHA Required**: All requests must include valid CAPTCHA
- **Testnet Only**: Faucet only works on testnet networks

## Error Codes

- `400 Bad Request`: Invalid address format or missing parameters
- `429 Too Many Requests`: Rate limit exceeded
- `503 Service Unavailable`: Faucet is temporarily out of funds

## Notes

- Faucet is only available on testnet environments
- Tokens are sent automatically upon successful request validation
- CAPTCHA verification prevents automated abuse
- IP-based rate limiting applies in addition to address limits
- Email notifications are optional but recommended for tracking