---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Auction Houses

## Create Shop

#### API Enpoint:

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

#### Response:

```json
{
  "Success": true,
  "Message": "Decentralized Auction Shop has been created with name Shop Name"
}
```

#### Code Example

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
def create_shop():
    payload = {
        "Name": "Shop Name",
        "DecShopURL": "tutorial-shop",
        "Description": "My shop's description...",
        "OwnerAddress": "xDnL4MCGtgHu85JJHdN1fkXinHzKaqVQ59",
        "DecShopHostingType": 0,
        "AutoUpdateNetworkDNS": True
    }

    url = f"{CLI_BASE_URL}/dstapi/DSTV1/SaveDecShop"
    headers = {"Content-Type": "application/json"}

    response = await requests.post(url, json=payload, headers=headers)
    data = await response.json()

    return data["Success"]
```

</TabItem>
</Tabs>

## Publish Shop to Network

#### API Enpoint:

```
GET http://localhost:7292/dstapi/DSTV1/GetPublishDecShop
```

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
 def publish_shop():
    url = f"{CLI_BASE_URL}/dstapi/DSTV1/GetPublishDecShop"
    response = await requests.get(url)
    data = await response.json()

    print(data)

    return data["Success"]
```

</TabItem>
</Tabs>

## Get My Shop

#### API Enpoint:

```
GET http://localhost:7292/dstapi/DSTV1/GetDecShop
```

#### Response:

```json
{
    "Success": true,
    "DecShop": {
        ...
    }
}
```

#### Code Example

<Tabs>
<TabItem value="js" label="NodeJS">

```js
const retrieveShop = async () => {
  const url = `${CLI_BASE_URL}/dstapi/DSTV1/GetDecShop`;
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
def retrieve_shop():
    url = f"{CLI_BASE_URL}/dstapi/DSTV1/GetDecShop"
    response = requests.get(url)
    data = response.json()

    if data["Success"] == True:
        return data["DecShop"]

    return None
```

</TabItem>
</Tabs>

## Update Shop

#### API Enpoint:

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

#### Response:

```json
{
    "Success": true,
    "DecShop": {
        ...
    }
}
```

## Toggle Offline/Online

#### API Enpoint:

```
GET http://localhost:7292/dstapi/DSTV1/GetSetShopStatus
```

#### Code Example

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
 def toggle_shop_online():
    url = f"{CLI_BASE_URL}/dstapi/DSTV1/GetSetShopStatus"
    response = requests.get(url)
    data = response.json()

    print(data)

    if data["Success"] == True:
        return data["Message"].replace("Is Offline? ", "") == "True"

    return None
```

</TabItem>
</Tabs>

## Delete Shop from Network

#### API Enpoint:

```
GET http://localhost:7292/dstapi/DSTV1/GetDeleteDecShop
```

#### Code Example

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
def delete_network_shop():
    url = f"{CLI_BASE_URL}/dstapi/DSTV1/GetDeleteDecShop"
    response = requests.get(url)
    data = response.json()

    return data["Success"] == True
```

</TabItem>
</Tabs>

## Delete Shop Locally

#### API Enpoint:

```
GET http://localhost:7292/dstapi/DSTV1/GetDeleteLocalDecShop
```

#### Code Example

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
def delete_shop():
    url = f"{CLI_BASE_URL}/dstapi/DSTV1/GetDeleteLocalDecShop"
    response = requests.get(url)
    data = response.json()

    return data["Success"] == True
```

</TabItem>
</Tabs>

## Retrieve Network Shop

#### API Enpoint:

```
GET http://localhost:7292/dstapi/DSTV1/GetNetworkDecShopInfo/{url}
```

#### Code Example

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
def retrieve_network_shop(shop_url):
    url = f"{CLI_BASE_URL}/dstapi/DSTV1/GetNetworkDecShopInfo/{shop_url}"
    response = requests.get(url)
    data = response.json()

    if data["Success"] == True:
        return data["DecShop"]

    return None
```

</TabItem>
</Tabs>

#### URL Params:

`url`: URL of the shop (ie. rbx://tutorial-shop)

#### Response:

```json
{
    "Success": true,
    "DecShop": {
        ...
    }
}
```
