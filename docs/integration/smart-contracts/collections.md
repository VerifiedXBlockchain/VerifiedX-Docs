---
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Collections

## Create / Update Collection

API Endpoint:

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

Code Example

<Tabs>
<TabItem value="js" label="NodeJS">

```js
const collected = collect();
```

</TabItem>

<TabItem value="py" label="Python">

```python
  collect(Please)
```

</TabItem>
</Tabs>

## List Collections

API Endpoint:

```
GET http://localhost:7292/dstapi/DSTV1/GetAllCollections
```

Response:

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

Code Example

<Tabs>
<TabItem value="js" label="NodeJS">

```js
const collected = collect();
```

</TabItem>

<TabItem value="py" label="Python">

```python
  collect(Please)
```

</TabItem>
</Tabs>

## Retrieve Collection

API Endpoint:

```
GET http://localhost:7292/dstapi/DSTV1/GetCollection/{id}
```

URL Params:

`id`: ID of the collection

Response:

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

## Delete Collection

API Endpoint:

```
GET http://localhost:7292/dstapi/DSTV1/DeleteCollection/{id}
```

URL Params:

`id`: ID of the collection

Response:

```json
{
  "Success": true
}
```
