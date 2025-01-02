---
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Collections

## Create / Update Collection

#### API Enpoint:

```
POST http://localhost:7292/dstapi/DSTV1/SaveCollection
```

Params:

```json
{
  "Id": 0,
  "Name": "My Collection",
  "Description": "My description goes here...",
  "CollectionLive": true,
  "IsDefault": false
}
```

> Use ID of `0` if it's a new collection. For updating, use the existing ID of that collection.

#### Code Example

<Tabs>
<TabItem value="js" label="NodeJS">

```js
const saveCollection = async (id = 0) => {
  const payload = {
    Id: id,
    Name: "My Collection",
    Description: "My description goes here...",
    CollectionLive: true,
    IsDefault: false,
  };

  const url = `${CLI_BASE_URL}/dstapi/DSTV1/SaveCollection`;
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
def save_collection(id=0):
    payload = {
        "Id": id,
        "Name": "My Collection",
        "Description": "My description goes here...",
        "CollectionLive": True,
        "IsDefault": False
    }

    url = f"{CLI_BASE_URL}/dstapi/DSTV1/SaveCollection"
    headers = {"Content-Type": "application/json"}

    response = requests.post(url, json=payload, headers=headers)
    data = response.json()

    return data["Success"]

```

</TabItem>
</Tabs>

## List Collections

#### API Enpoint:

```
GET http://localhost:7292/dstapi/DSTV1/GetAllCollections
```

#### Response:

```json
{
    "Success": true,
    "Collections": [
        {
           "Id": 1,
            "Name": "My Collection",
            "Description": "My description goes here...",
            "CollectionLive": true,
            "IsDefault": false
        },
        ...
    ]
}
```

#### Code Example

<Tabs>
<TabItem value="js" label="NodeJS">

```js
const listCollections = async () => {
  const url = `${CLI_BASE_URL}/dstapi/DSTV1/GetAllCollections`;
  const request = await fetch(url);

  const data = await request.json();

  if (!data) {
    return null;
  }

  if (data["Success"] == true) {
    return data["Collections"];
  }

  return null;
};
```

</TabItem>

<TabItem value="py" label="Python">

```python
def list_collections():
    url = f"{CLI_BASE_URL}/dstapi/DSTV1/GetAllCollections"
    response = requests.get(url)
    data = response.json()

    if not data:
        return None

    if data["Success"] == True:
        return data["Collections"]

    return None

```

</TabItem>
</Tabs>

## Retrieve Collection

#### API Enpoint:

```
GET http://localhost:7292/dstapi/DSTV1/GetCollection/{id}
```

#### URL Params:

`id`: ID of the collection

#### Response:

```json
{
  "Success": true,
  "Collection": {
    "Id": 1,
    "Name": "My Collection",
    "Description": "My description goes here...",
    "CollectionLive": true,
    "IsDefault": false
  }
}
```

#### Code Example

<Tabs>
<TabItem value="js" label="NodeJS">

```js
const retrieveCollection = async (collectionId) => {
  const url = `${CLI_BASE_URL}/dstapi/DSTV1/GetCollection/${collectionId}`;
  const request = await fetch(url);

  const data = await request.json();

  if (!data) {
    return null;
  }

  if (data["Success"] == true) {
    return data["Collection"];
  }

  return null;
};
```

</TabItem>

<TabItem value="py" label="Python">

```python
def retrieve_collection(collection_id):
    url = f"{CLI_BASE_URL}/dstapi/DSTV1/GetCollection/{collection_id}"
    response = requests.get(url)
    data = response.json()

    if not data:
        return None

    if data["Success"] == True:
        return data["Collection"]

    return None

```

</TabItem>
</Tabs>

## Delete Collection

#### API Enpoint:

```
GET http://localhost:7292/dstapi/DSTV1/DeleteCollection/{id}
```

#### URL Params:

`id`: ID of the collection

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
const deleteCollection = async (collectionId) => {
  const url = `${CLI_BASE_URL}/dstapi/DSTV1/DeleteCollection/${collectionId}`;
  const request = await fetch(url);

  const data = await request.json();

  return data["Success"] == true;
};
```

</TabItem>

<TabItem value="py" label="Python">

```python
def delete_collection(collection_id):
    url = f"{CLI_BASE_URL}/dstapi/DSTV1/DeleteCollection/{collection_id}"
    response = requests.get(url)
    data = response.json()

    return data["Success"] == True

```

</TabItem>
</Tabs>
