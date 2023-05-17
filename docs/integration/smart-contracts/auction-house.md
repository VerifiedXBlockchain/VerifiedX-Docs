---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Auction Houses

## Create Shop

API Endpoint:

```
POST http://localhost:7292/dstapi/DSTV1/SaveDecShop
```

Request Params:

```json
{
  "Name": "Shop Name",
  "DecShopURL": "tutorial-shop",
  "Description": "My shop's description...",
  "OwnerAddress": "Rabc123...",
  "DecShopHostingType": 0,
  "AutoUpdateNetworkDNS": true
}
```

Code Example

<Tabs>
<TabItem value="js" label="NodeJS">

```js
const created = create();
```

</TabItem>

<TabItem value="py" label="Python">

```python
  create(Please)
```

</TabItem>
</Tabs>

Response:

```json
{
    "Success": true,
    "DecShop": {
        ...
    }
}
```

## Publish Shop to Network

API Endpoint:

```
GET http://localhost:7292/dstapi/DSTV1/GetPublishDecShop
```

Response:

```json
{
  "Success": true
}
```

## Get My Shop

API Endpoint:

```
GET http://localhost:7292/dstapi/DSTV1/GetDecShop
```

Code Example

<Tabs>
<TabItem value="js" label="NodeJS">

```js
const gotten = get();
```

</TabItem>

<TabItem value="py" label="Python">

```python
  get(Please)
```

</TabItem>
</Tabs>

Response:

```json
{
    "Success": true,
    "DecShop": {
        ...
    }
}
```

## Update Shop

API Endpoint:

```
GET http://localhost:7292/dstapi/DSTV1/GetUpdateDecShop
```

Request Params:

```json
{
  "Name": "Shop Name Updated",
  "Description": "My shop's description..."
}
```

Response:

```json
{
    "Success": true,
    "DecShop": {
        ...
    }
}
```

## Toggle Offline/Online

API Endpoint:

```
GET http://localhost:7292/dstapi/DSTV1/GetSetShopStatus
```

## Delete Shop from Network

API Endpoint:

```
GET http://localhost:7292/dstapi/DSTV1/GetDeleteDecShop
```

## Delete Shop Locally

API Endpoint:

```
GET http://localhost:7292/dstapi/DSTV1/GetDeleteLocalDecShop
```

## Retrieve Network Shop

API Endpoint:

```
GET http://localhost:7292/dstapi/DSTV1/GetNetworkDecShopInfo/{url}
```

URL Params:

`url`: URL of the shop (ie. rbx://tutorial-shop)

Response:

```json
{
    "Success": true,
    "DecShop": {
        ...
    }
}
```
