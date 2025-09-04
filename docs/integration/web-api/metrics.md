---
sidebar_position: 11
---

# Web API: Metrics

The Metrics API provides endpoints for retrieving network statistics, performance metrics, and analytics data for the VFX blockchain.

## Base URL
```
/api/metrics/
```

## Endpoints

### Get Network Metrics
```http
GET /api/metrics/
```

Returns comprehensive network statistics and performance metrics.

**Query Parameters:**
- `period`: Time period for metrics ('24h', '7d', '30d', 'all') - default: '24h'
- `detailed`: Include detailed breakdowns (true/false) - default: false

**Response:**
```json
{
  "network": {
    "current_block_height": 125678,
    "total_transactions": 1250000,
    "total_addresses": 45000,
    "active_addresses_24h": 2500,
    "master_nodes_count": 250,
    "master_nodes_active": 245
  },
  "transactions": {
    "total_count": 1250000,
    "count_24h": 8500,
    "count_7d": 62000,
    "avg_per_block": 12.5,
    "types": {
      "transfer": 850000,
      "smart_contract": 200000,
      "nft": 150000,
      "reserve": 50000
    }
  },
  "blocks": {
    "total_blocks": 125678,
    "blocks_24h": 2880,
    "avg_block_time": "30.2s",
    "avg_block_size": "1.2KB",
    "missed_blocks_24h": 5
  },
  "economics": {
    "total_supply": "50000000.0",
    "circulating_supply": "35000000.0",
    "locked_supply": "15000000.0",
    "market_cap_usd": "175000000.0",
    "total_fees_24h": "125.50"
  },
  "nfts": {
    "total_nfts": 75000,
    "minted_24h": 450,
    "unique_collections": 2500,
    "total_transfers": 125000
  },
  "tokens": {
    "fungible_tokens": 150,
    "total_holders": 25000,
    "total_transfers": 500000
  },
  "updated_at": "2024-01-01T12:00:00Z"
}
```

**Detailed Response (with `detailed=true`):**
```json
{
  "network": {
    "current_block_height": 125678,
    "total_transactions": 1250000,
    "total_addresses": 45000,
    "active_addresses_24h": 2500,
    "new_addresses_24h": 180,
    "master_nodes": {
      "total": 250,
      "active": 245,
      "syncing": 3,
      "inactive": 2,
      "geographical_distribution": {
        "United States": 45,
        "Germany": 32,
        "Singapore": 28,
        "Canada": 25
      }
    }
  },
  "performance": {
    "tps_current": 15.8,
    "tps_peak_24h": 45.2,
    "network_hash_rate": "125.5 TH/s",
    "difficulty": "1250000000",
    "block_time_variance": "±2.1s"
  },
  "fee_analysis": {
    "avg_fee": "0.001",
    "median_fee": "0.0008",
    "fee_percentiles": {
      "25th": "0.0005",
      "75th": "0.0015",
      "95th": "0.005"
    }
  },
  "transaction_details": {
    "by_hour": [
      {
        "hour": "2024-01-01T00:00:00Z",
        "count": 320,
        "volume": "15000.0"
      }
    ],
    "by_type": {
      "transfer": {
        "count": 6800,
        "percentage": 80.0,
        "avg_amount": "125.5"
      },
      "smart_contract": {
        "count": 850,
        "percentage": 10.0
      }
    }
  }
}
```

## Metrics Categories

### Network Metrics
- `current_block_height`: Latest block height
- `total_transactions`: All-time transaction count
- `total_addresses`: Unique addresses ever created
- `active_addresses_24h`: Addresses with activity in last 24 hours
- `master_nodes_count`: Total registered master nodes
- `master_nodes_active`: Currently active master nodes

### Transaction Metrics
- `total_count`: All-time transaction count
- `count_24h/7d`: Recent transaction counts
- `avg_per_block`: Average transactions per block
- `types`: Breakdown by transaction type

### Block Metrics
- `total_blocks`: All-time block count
- `blocks_24h`: Blocks produced in last 24 hours
- `avg_block_time`: Average time between blocks
- `avg_block_size`: Average block size in bytes
- `missed_blocks_24h`: Blocks missed by validators

### Economic Metrics
- `total_supply`: Maximum possible token supply
- `circulating_supply`: Tokens currently in circulation
- `locked_supply`: Tokens locked in staking/reserves
- `market_cap_usd`: Market capitalization in USD
- `total_fees_24h`: Network fees collected in last 24 hours

### Performance Metrics (Detailed)
- `tps_current`: Current transactions per second
- `tps_peak_24h`: Peak TPS in last 24 hours
- `network_hash_rate`: Network computational power
- `difficulty`: Current mining/validation difficulty
- `block_time_variance`: Variation from target block time

### Fee Analysis (Detailed)
- `avg_fee`: Average transaction fee
- `median_fee`: Median transaction fee
- `fee_percentiles`: Fee distribution percentiles

## Time Periods

- `24h`: Last 24 hours
- `7d`: Last 7 days  
- `30d`: Last 30 days
- `all`: All-time statistics

## Update Frequency

- Real-time metrics: Updated every minute
- Aggregated metrics: Updated every 5-15 minutes
- Historical metrics: Updated hourly
- Complex calculations: Updated every 30 minutes

## Notes

- All monetary values are in VFX tokens unless specified
- Percentages are calculated based on total counts for the specified period
- Geographic distribution is based on master node IP geolocation
- TPS (Transactions Per Second) includes all transaction types
- Market cap requires external price data integration
- Some metrics may have slight delays due to calculation complexity