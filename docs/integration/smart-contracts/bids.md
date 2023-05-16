---
sidebar_position: 8
---

# Bids

## List Bids


API Endpoint:

```
GET http://localhost:7292/dstapi/DSTV1/GetListingBids/{listingId}/0
```

URL Params:

`listingId`: ID of the listing


Response:
```json
{
    "Success": true,
    "Bids": [
        {
            "Id": "0000-0000...",
            "BidAddress": "Rabc123...",
            "BidSignature": "...",
            "BidAmount": 10,
            "BidSendTime": 1684246774,
            "IsBuyNow": false,
            "IsProcessed": true,
            "ListingId": 1,
            "CollectionId": 1,
            "PurchaseKey": "abc123",
            "BidStatus": 0,
            "BidSendReceive": 0,
            "RawBid": false
        },
        ...
    ]
}
```

## Retrieve Bid

API Endpoint:

```
GET http://localhost:7292/dstapi/DSTV1/GetSingleBids/{bidId}
```

URL Params:

`bidId`: ID of the bid


Response:
```json
{
    "Success": true,
    "Bid":   {
        "Id": "0000-0000...",
        "BidAddress": "Rabc123...",
        "BidSignature": "...",
        "BidAmount": 10,
        "BidSendTime": 1684246774,
        "IsBuyNow": false,
        "IsProcessed": true,
        "ListingId": 1,
        "CollectionId": 1,
        "PurchaseKey": "abc123",
        "BidStatus": 0,
        "BidSendReceive": 0,
        "RawBid": false
    },
}
```


## Send Bid

### Buy Now Bid

API Endpoint:

```
POST http://localhost:7292/dstapi/DSTV1/SendBuyNowBid
```

Params:
```json
{
    "Id": "00000000-0000-0000-0000-000000000000",
    "BidAddress": "Rabc123...",
    "BidSignature": "",
    "BidAmount": 10,
    "BidSendTime": 1684246774,
    "IsBuyNow": true,
    "IsProcessed": true,
    "ListingId": 1,
    "CollectionId": 1,
    "PurchaseKey": "abc123",
    "BidStatus": 0,
    "BidSendReceive": 0,
    "RawBid": false
},
```


Response:
```json
{
    "Success": true,
    "Bid": {
        ...
    }
}
```


### Auction Bid

API Endpoint:

```
POST http://localhost:7292/dstapi/DSTV1/SendBid
```

Params:
```json
{
    "Id": "00000000-0000-0000-0000-000000000000",
    "BidAddress": "Rabc123...",
    "BidSignature": "",
    "BidAmount": 10,
    "BidSendTime": 1684246774,
    "IsBuyNow": false,
    "IsProcessed": true,
    "ListingId": 1,
    "CollectionId": 1,
    "PurchaseKey": "abc123",
    "BidStatus": 0,
    "BidSendReceive": 0,
    "RawBid": false
},
```


Response:
```json
{
    "Success": true,
    "Bid": {
        ...
    }
}
```