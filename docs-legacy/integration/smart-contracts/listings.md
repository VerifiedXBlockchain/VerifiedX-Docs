---
sidebar_position: 7
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Listings

## Create / Update Listing

#### API Enpoint:

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
  "EndDate": "YYYY-MM-DDTHH:mm:ss.sssZ"
}
```

> Use ID of `0` if it's a new listing. For updating, use the existing ID of that listing.

#### Code Example

<Tabs>
<TabItem value="js" label="NodeJS">

```js
const saveListing = async (collectionId, listingId = 0) => {
  const payload = {
    Id: listingId,
    CollectionId: collectionId,
    SmartContractUID: "a9dda3fd088d4d72a35380957b3a3742:1684502628",
    AddressOwner: "xDnL4MCGtgHu85JJHdN1fkXinHzKaqVQ59",
    BuyNowPrice: 10,
    IsBuyNowOnly: false,
    RequireBalanceCheck: true,
    FloorPrice: 25,
    ReservePrice: 30,
    StartDate: "2023-05-01T00:00:00.000Z",
    EndDate: "2023-06-01T00:00:00.000Z",
  };

  const url = `${CLI_BASE_URL}/dstapi/DSTV1/SaveListing`;
  const request = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await request.json();

  return data["Success"];
};
```

</TabItem>

<TabItem value="py" label="Python">

```python
def save_listing(collection_id, listing_id=0):
    payload = {
        "Id": listing_id,
        "CollectionId": collection_id,
        "SmartContractUID": "a9dda3fd088d4d72a35380957b3a3742:1684502628",
        "AddressOwner": "xDnL4MCGtgHu85JJHdN1fkXinHzKaqVQ59",
        "BuyNowPrice": 10,
        "IsBuyNowOnly": False,
        "RequireBalanceCheck": True,
        "FloorPrice": 25,
        "ReservePrice": 30,
        "StartDate": "2023-05-01T00:00:00.000Z",
        "EndDate": "2023-06-01T00:00:00.000Z"
    }

    url = f"{CLI_BASE_URL}/dstapi/DSTV1/SaveListing"
    response = requests.post(url, headers={"Content-Type": "application/json"}, json=payload)
    data = response.json()

    return data["Success"]

```

</TabItem>
</Tabs>

## List Listings

#### API Enpoint:

```
GET http://localhost:7292/dstapi/DSTV1/GetCollectionListings/{collectionId}
```

#### URL Params:

`collectionId`: The ID of the collection

#### Response:

```json
{
    "Success": true,
    "Listings": [
        ...
    ]
}
```

#### Code Example

<Tabs>
<TabItem value="js" label="NodeJS">

```js
const listListings = async (collectionId) => {
  const url = `${CLI_BASE_URL}/dstapi/DSTV1/GetCollectionListings/${collectionId}`;
  const request = await fetch(url);

  const data = await request.json();

  if (!data) {
    return null;
  }

  if (data["Success"] == true) {
    return data["Listings"];
  }

  return null;
};
```

</TabItem>

<TabItem value="py" label="Python">

```python
def list_listings(collection_id):
    url = f"{CLI_BASE_URL}/dstapi/DSTV1/GetCollectionListings/{collection_id}"
    response = requests.get(url)
    data = response.json()

    if not data:
        return None

    if data["Success"] == True:
        return data["Listings"]

    return None

```

</TabItem>
</Tabs>

## Retrieve Listing

#### API Enpoint:

```
GET http://localhost:7292/dstapi/DSTV1/GetListing/{id}
```

#### URL Params:

`id`: ID of the listing

#### Response:

```json
{
    "Success": true,
    "Listing": {
        ...
    }
}
```

#### Code Example

<Tabs>
<TabItem value="js" label="NodeJS">

```js
const retrieveListing = async (listingId) => {
  const url = `${CLI_BASE_URL}/dstapi/DSTV1/GetListing/${listingId}`;
  const request = await fetch(url);

  const data = await request.json();

  if (!data) {
    return null;
  }

  if (data["Success"] == true) {
    return data["Listing"];
  }

  return null;
};
```

</TabItem>

<TabItem value="py" label="Python">

```python
def retrieve_listing(listing_id):
    url = f"{CLI_BASE_URL}/dstapi/DSTV1/GetListing/{listing_id}"
    response = requests.get(url)
    data = response.json()

    if not data:
        return None

    if data["Success"] == True:
        return data["Listing"]

    return None

```

</TabItem>
</Tabs>

## Cancel Listing

#### API Enpoint:

```
GET http://localhost:7292/dstapi/DSTV1/CancelListing/{id}
```

#### URL Params:

`id`: ID of the listing

#### Response:

```json
{
  "Success": true
}
```

## Delete Listing

#### API Enpoint:

```
GET http://localhost:7292/dstapi/DSTV1/DeleteListing/{id}
```

#### URL Params:

`id`: ID of the listing

#### Response:

```json
{
  "Success": true
}
```

#### Code Example

<Tabs>
<TabItem value="js" label="NodeJS">

```js
const deleteListing = async (listingId) => {
  const url = `${CLI_BASE_URL}/dstapi/DSTV1/DeleteListing/${listingId}`;
  const request = await fetch(url);

  const data = await request.json();

  return data["Success"] == true;
};
```

</TabItem>

<TabItem value="py" label="Python">

```python
def delete_listing(listing_id):
    url = f"{CLI_BASE_URL}/dstapi/DSTV1/DeleteListing/{listing_id}"
    response = requests.get(url)
    data = response.json()

    return data["Success"] == True

```

</TabItem>
</Tabs>
