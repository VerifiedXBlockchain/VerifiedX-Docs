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
const createShop = async () => {
  const payload = {
    Name: "Shop Name",
    DecShopURL: "tutorial-shop",
    Description: "My shop's description...",
    OwnerAddress: "xDnL4MCGtgHu85JJHdN1fkXinHzKaqVQ59",
    DecShopHostingType: 0,
    AutoUpdateNetworkDNS: true,
  };

  const url = `${CLI_BASE_URL}/dstapi/DSTV1/SaveDecShop`;
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
  create(Please)
```

</TabItem>
</Tabs>

Response:

```json
{
  "Success": true,
  "Message": "Decentralized Auction Shop has been created with name Shop Name"
}
```

## Publish Shop to Network

API Endpoint:

```
GET http://localhost:7292/dstapi/DSTV1/GetPublishDecShop
```

Code Example
<Tabs>
<TabItem value="js" label="NodeJS">

```js
const publishShop = async () => {
  const url = `${CLI_BASE_URL}/dstapi/DSTV1/GetPublishDecShop`;
  const request = await fetch(url);

  const data = await request.json();

  console.log(data);

  return data["Success"];
};
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
POST http://localhost:7292/dstapi/DSTV1/SaveDecShop
```

Request Params:

```json
{
  "Name": "Updated Shop Name",
  "DecShopURL": "tutorial-shop",
  "Description": "My updated shop's description...",
  "OwnerAddress": "xDnL4MCGtgHu85JJHdN1fkXinHzKaqVQ59",
  "DecShopHostingType": 0,
  "AutoUpdateNetworkDNS": true
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

Code Example
<Tabs>
<TabItem value="js" label="NodeJS">

```js
const toggleShopOnline = async () => {
  const url = `${CLI_BASE_URL}/dstapi/DSTV1/GetSetShopStatus`;
  const request = await fetch(url);

  const data = await request.json();

  console.log(data);

  if (data["Success"] == true) {
    return data["Message"].replace("Is Offline? ", "") == "True";
  }

  return null;
};
```

</TabItem>

<TabItem value="py" label="Python">

```python
  create(Please)
```

</TabItem>
</Tabs>

## Delete Shop from Network

API Endpoint:

```
GET http://localhost:7292/dstapi/DSTV1/GetDeleteDecShop
```

Code Example

<Tabs>
<TabItem value="js" label="NodeJS">

```js
const deleteNetworkShop = async () => {
  const url = `${CLI_BASE_URL}/dstapi/DSTV1/GetDeleteDecShop`;
  const request = await fetch(url);

  const data = await request.json();

  return data["Success"] == true;
};
```

</TabItem>

<TabItem value="py" label="Python">

```python
  get(Please)
```

</TabItem>
</Tabs>

## Delete Shop Locally

API Endpoint:

```
GET http://localhost:7292/dstapi/DSTV1/GetDeleteLocalDecShop
```

Code Example

<Tabs>
<TabItem value="js" label="NodeJS">

```js
const deleteShop = async () => {
  const url = `${CLI_BASE_URL}/dstapi/DSTV1/GetDeleteLocalDecShop`;
  const request = await fetch(url);

  const data = await request.json();

  return data["Success"] == true;
};
```

</TabItem>

<TabItem value="py" label="Python">

```python
  get(Please)
```

</TabItem>
</Tabs>

## Retrieve Network Shop

API Endpoint:

```
GET http://localhost:7292/dstapi/DSTV1/GetNetworkDecShopInfo/{url}
```

Code Example
<Tabs>
<TabItem value="js" label="NodeJS">

```js
const retrieveNetworkShop = async (shopUrl) => {
  const url = `${CLI_BASE_URL}/dstapi/DSTV1/GetNetworkDecShopInfo/${shopUrl}`;
  const request = await fetch(url);

  const data = await request.json();

  if (data["Success"] == true) {
    return data["DecShop"];
  }

  return null;
};
```

</TabItem>

<TabItem value="py" label="Python">

```python
  create(Please)
```

</TabItem>
</Tabs>

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
