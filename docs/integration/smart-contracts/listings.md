---
sidebar_position: 7
---

# Listings

## Create / Update Listing

API Endpoint:

```
POST http://localhost:7292/dstapi/DSTV1/SaveListing
```

Params:
```json
{
    "Id": 0,
    "CollectionId": 1,
    "SmartContractUID": "SC_ID_HERE",
    "AddressOwner": "Rabc123...",
    "BuyNowPrice": 10,
    "IsBuyNowOnly": false,
    "RequireBalanceCheck": true,
    "FloorPrice": 25,
    "ReservePrice": 30,
    "StartDate": "YYYY-MM-DDTHH:mm:ss.sssZ",
    "EndDate": "YYYY-MM-DDTHH:mm:ss.sssZ",
}
```
> Use ID of `0` if it's a new listing. For updating, use the existing ID of that listing.


## List Listings


API Endpoint:

```
GET http://localhost:7292/dstapi/DSTV1/GetCollectionListings/{collectionId}
```

URL Params:

`collectionId`: The ID of the collection

Response:
```json
{
    "Success": true,
    "Listings": [
        ...
    ]
}
```

## Retrieve Listing

API Endpoint:

```
GET http://localhost:7292/dstapi/DSTV1/GetListing/{id}
```

URL Params:

`id`: ID of the listing

Response:
```json
{
    "Success": true,
    "Listing": {
        ...
    } 
}
```

## Cancel Listing

API Endpoint:

```
GET http://localhost:7292/dstapi/DSTV1/CancelListing/{id}
```

URL Params:

`id`: ID of the listing

Response:
```json
{
    "Success": true,
}
```


## Delete Listing

API Endpoint:

```
GET http://localhost:7292/dstapi/DSTV1/DeleteListing/{id}
```

URL Params:

`id`: ID of the listing

Response:
```json
{
    "Success": true,
}
```