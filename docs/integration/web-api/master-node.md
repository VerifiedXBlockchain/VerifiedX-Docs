---
sidebar_position: 9
---

# Web API: Master Node

The Master Node API provides endpoints for retrieving information about VFX blockchain master nodes, including node details, statistics, and geographic distribution.

## Base URL
```
/api/master-node/
```

## Endpoints

### List Master Nodes
```http
GET /api/master-node/
```

Returns a paginated list of all master nodes on the VFX network.

**Query Parameters:**
- `search`: Search by node name, address, or location
- `ordering`: Order results (e.g., `name`, `-created_at`, `uptime`)
- `status`: Filter by node status (active, inactive)

**Response:**
```json
{
  "count": 250,
  "next": "http://localhost:8000/api/master-node/?page=2",
  "previous": null,
  "results": [
    {
      "id": 1,
      "name": "VFX-Node-01",
      "address": "Rx1234567890abcdef...",
      "ip_address": "192.168.1.100",
      "port": 3338,
      "status": "active",
      "uptime": "99.8%",
      "version": "1.5.2",
      "location": {
        "country": "United States",
        "country_code": "US",
        "city": "New York",
        "latitude": 40.7128,
        "longitude": -74.0060
      },
      "blocks_validated": 1250,
      "last_seen": "2024-01-01T12:00:00Z",
      "created_at": "2023-12-01T10:00:00Z"
    }
  ]
}
```

### Get Master Node Details
```http
GET /api/master-node/{address}/
```

Returns detailed information about a specific master node.

**Parameters:**
- `address` (string): The master node's VFX address

**Response:**
```json
{
  "id": 1,
  "name": "VFX-Node-01",
  "address": "Rx1234567890abcdef...",
  "ip_address": "192.168.1.100",
  "port": 3338,
  "status": "active",
  "uptime": "99.8%",
  "version": "1.5.2",
  "location": {
    "country": "United States",
    "country_code": "US",
    "city": "New York",
    "region": "New York",
    "latitude": 40.7128,
    "longitude": -74.0060,
    "timezone": "America/New_York"
  },
  "performance": {
    "blocks_validated": 1250,
    "blocks_missed": 5,
    "success_rate": "99.6%",
    "avg_block_time": "30.5s",
    "rewards_earned": "2500.123456789"
  },
  "network": {
    "connected_peers": 45,
    "bandwidth_usage": "125.5 MB",
    "sync_status": "fully_synced"
  },
  "last_seen": "2024-01-01T12:00:00Z",
  "created_at": "2023-12-01T10:00:00Z"
}
```

### Get Master Node by Name
```http
GET /api/master-node/name/{name}/
```

Returns master node information by node name.

**Parameters:**
- `name` (string): The master node name

**Response:**
```json
{
  "id": 1,
  "name": "VFX-Node-01",
  "address": "Rx1234567890abcdef...",
  "status": "active",
  "uptime": "99.8%",
  "location": {
    "country": "United States",
    "city": "New York"
  }
}
```

### Get Master Node Map Data
```http
GET /api/master-node/map/
```

Returns geographic distribution data for visualization on maps.

**Response:**
```json
{
  "total_nodes": 250,
  "nodes": [
    {
      "name": "VFX-Node-01",
      "address": "Rx1234567890abcdef...",
      "latitude": 40.7128,
      "longitude": -74.0060,
      "status": "active",
      "country": "United States",
      "city": "New York"
    }
  ],
  "countries": [
    {
      "country_code": "US",
      "country": "United States",
      "node_count": 45
    },
    {
      "country_code": "DE",
      "country": "Germany", 
      "node_count": 32
    }
  ]
}
```

### Send Master Node List (Webhook)
```http
POST /api/master-node/send/
```

Triggers sending updated master node list to registered webhooks/services.

**Request:**
```json
{
  "webhook_url": "https://example.com/webhook",
  "include_inactive": false
}
```

**Response:**
```json
{
  "success": true,
  "message": "Master node list sent successfully",
  "nodes_sent": 245,
  "timestamp": "2024-01-01T12:00:00Z"
}
```

## Field Descriptions

### Master Node
- `name`: Human-readable identifier for the master node
- `address`: VFX blockchain address of the master node
- `ip_address`: Public IP address of the node
- `port`: Network port the node listens on
- `status`: Current operational status
- `uptime`: Percentage of time the node has been online
- `version`: Software version running on the node

### Location Data
- `country`: Full country name
- `country_code`: ISO 3166-1 alpha-2 country code
- `city`: City where the node is located
- `latitude/longitude`: Geographic coordinates
- `timezone`: IANA timezone identifier

### Performance Metrics
- `blocks_validated`: Total number of blocks validated by this node
- `blocks_missed`: Number of blocks the node failed to validate when selected
- `success_rate`: Percentage of successful block validations
- `avg_block_time`: Average time to validate a block
- `rewards_earned`: Total VFX rewards earned by the node

## Status Values

- `active`: Node is online and participating in consensus
- `inactive`: Node is offline or not responding
- `syncing`: Node is synchronizing with the network
- `maintenance`: Node is temporarily under maintenance

## Notes

- Master nodes are responsible for validating transactions and blocks
- Geographic distribution helps ensure network decentralization
- Performance metrics affect node selection for block validation
- Uptime and success rates impact node rewards and reputation
- IP addresses may be used for network connectivity diagnostics