---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Compiling & Minting

## Overview

Compiling and Minting a smart contract is fairly streightforward. The first step is to compile the smart contract based on a JSON payload which will return the information needed for the second step, minting the smart contract. Then you hit an endpoint to mint it which will broadcast the transaction.

## Compiling

#### API Enpoint:

```
POST http://localhost:7292/scapi/scv1/CreateSmartContract
```

Basic Payload Example:

```json
{
  "Name": "Smart Contract Name",
  "MinterName": "Minter's Name",
  "Description": "Description Goes Here",
  "SmartContractAsset": {
    "AssetId": "00000000-0000-0000-0000-000000000000",
    "Name": "welness.jpg",
    "AssetAuthorName": "Author's Name",
    "Location": "/path/to/asset.jpg",
    "Extension": "jpg",
    "FileSize": 1024
  },
  "IsPublic": false,
  "SmartContractUID": "00000000-0000-0000-0000-000000000000",
  "Features": [],
  "MinterAddress": "Rabc123..."
}
```

Response Example:

```json
[
  {
    "Success": true,
    "SmartContract": {
      "Id": 63,
      "Name": "Test",
      "Description": "Hello world",
      "MinterAddress": "Rabc123...",
      "MinterName": "Minter's Name",
      "SmartContractAsset": {
        "AssetId": "00000000-0000-0000-0000-000000000000",
        "Name": "welness.jpg",
        "AssetAuthorName": "Author's Name",
        "Location": "/path/to/asset.jpg",
        "Extension": "jpg",
        "FileSize": 1024
      },
      "IsPublic": false,
      "SmartContractUID": "a4a245fba5a282da1bf02a72cf267aab:123456789",
      "IsMinter": true,
      "IsPublished": false,
      "Features": []
    },
    "SmartContractCode": "--SMART CONTRACT CODE (string)--",
    "Transaction": "-- TRANSACTION (dict) --"
  }
]
```

#### Code Example

<Tabs>
<TabItem value="js" label="NodeJS">

```js
const compileNft = async () => {
  const payload = {
    Name: "Smart Contract Name",
    MinterName: "Minter's Name",
    Description: "Description Goes Here",
    SmartContractAsset: {
      AssetId: "00000000-0000-0000-0000-000000000000",
      Name: "file.jpg",
      AssetAuthorName: "Author's Name",
      Location: "/path/to/file.jpg",
      Extension: "jpg",
      FileSize: 488734,
    },
    IsPublic: false,
    SmartContractUID: "00000000-0000-0000-0000-000000000000",
    Features: [],
    MinterAddress: "xDnL4MCGtgHu85JJHdN1fkXinHzKaqVQ59",
  };

  const url = `${CLI_BASE_URL}/scapi/scv1/CreateSmartContract`;
  const request = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await request.json();

  if (data[0]["Success"] == true) {
    return data[0]["SmartContract"]["SmartContractUID"];
  }

  return null;
};
```

</TabItem>

<TabItem value="py" label="Python">

```python
import requests
import json

def compile_nft():
    payload = {
        "Name": "Smart Contract Name",
        "MinterName": "Minter's Name",
        "Description": "Description Goes Here",
        "SmartContractAsset": {
            "AssetId": "00000000-0000-0000-0000-000000000000",
            "Name": "file.jpg",
            "AssetAuthorName": "Author's Name",
            "Location": "/path/to/file.jpg",
            "Extension": "jpg",
            "FileSize": 488734,
        },
        "IsPublic": False,
        "SmartContractUID": "00000000-0000-0000-0000-000000000000",
        "Features": [],
        "MinterAddress": "xDnL4MCGtgHu85JJHdN1fkXinHzKaqVQ59"
    }

    url = f"{CLI_BASE_URL}/scapi/scv1/CreateSmartContract"
    headers = {"Content-Type": "application/json"}
    response = await requests.post(url, headers=headers, data=json.dumps(payload))

    data = response.json()

    if data[0]["Success"] == True:
        return data[0]["SmartContract"]["SmartContractUID"]

    return None
```

</TabItem>
</Tabs>

## Minting

#### API Enpoint:

```
GET http://localhost:7292/scapi/scv1/MintSmartContract/{SMART_CONTRACT_UID}
```

Response Example:

```
"Smart contract has been published to mempool"
```

#### Code Example

<Tabs>
<TabItem value="js" label="NodeJS">

```js
const mintNft = async (smartContractUid) => {
  const url = `${CLI_BASE_URL}/scapi/scv1/MintSmartContract/${smartContractUid}`;
  const request = await fetch(url);

  const data = await request.text();
  if (data == "Smart contract has been published to mempool") {
    return true;
  }

  return false;
};
```

</TabItem>

<TabItem value="py" label="Python">

```python
def mint_nft(smart_contract_uid):
    url = f"{CLI_BASE_URL}/scapi/scv1/MintSmartContract/{smart_contract_uid}"
    response = requests.get(url)
    data = response.text

    if data == "Smart contract has been published to mempool":
        return True

    return False

```

</TabItem>
</Tabs>

## Adding Features

You can add features to your smart contract by just including them in the `Features: []` array.
There are three types of features currently supported, each with a different `FeatureName` enum:

```
0: Evolving
1: Royalty
2: Multi Asset
```

:::note Multiple Features
You can combine all three features into a single smart contract, but you can not have the same feature more than once.
:::

### Royalty

#### Percent

```json
{
    ...
    "Features": [
        {
            "FeatureName": 1,
            "FeatureFeatures":{
                "RoyaltyAmount": 0.05, // 5%
                "RoyaltyPayToAddress": "Rabc123...",
                "RoyaltyType": 1
            }
        },
    ]
}
```

#### Flat

```json
{
    ...
    "Features": [
        {
            "FeatureName": 1,
            "FeatureFeatures":{
                "RoyaltyAmount": 5, // 5 RBX
                "RoyaltyPayToAddress": "Rabc123...",
                "RoyaltyType": 0
            }
        },
    ]
}
```

### Multi Asset

```json
{
    ...
    "Features": [
        {
            "FeatureName": 2,
            "FeatureFeatures": [
                {
                    "AssetId": "00000000-0000-0000-0000-000000000000",
                    "AssetAuthorName": "Author's Name",
                    "Location": "/path/to/asset1.jpg",
                    "Extension": "jpg",
                    "FileSize": 1024,
                    "FileName": "asset1.jpg"
                },
                {
                    "AssetId": "00000000-0000-0000-0000-000000000000",
                    "AssetAuthorName": "Author's Name",
                    "Location": "/path/to/asset2.jpg",
                    "Extension": "jpg",
                    "FileSize": 1024,
                    "FileName": "asset2.jpg"
                }
            ]
        }
    ]
}
```

### Evolving

#### Minter Controlled Evolution

```json
{
    ...
    "Features": [
        {
            "FeatureName":0,
            "FeatureFeatures":[
                {
                    "Name": "Phase 1",
                    "Description": "Description of phase 1",
                    "IsDynamic": false,
                    "EvolutionState": 1,
                    "IsCurrentState": false,
                    "SmartContractAsset": {
                        "AssetId": "00000000-0000-0000-0000-000000000000",
                        "AssetAuthorName": "Author's Name",
                        "Location": "/path/to/asset1.jpg",
                        "Extension": "jpg",
                        "FileSize": 1024,
                        "FileName": "asset1.jpg"
                    },
                    "EvolveDate": null,
                    "EvolveBlockHeight": null
                },
                {
                    "Name": "Phase 2",
                    "Description": "Description of phase 2",
                    "IsDynamic": true,
                    "EvolutionState": 2,
                    "IsCurrentState": false,
                    "SmartContractAsset": {
                        "AssetId": "00000000-0000-0000-0000-000000000000",
                        "AssetAuthorName": "Author's Name",
                        "Location": "/path/to/asset2.jpg",
                        "Extension": "jpg",
                        "FileSize": 1024,
                        "FileName": "asset2.jpg"
                    },
                    "EvolveDate": null,
                    "EvolveBlockHeight": null
                }
            ]
        }
    ]
}
```

#### Block Height Evolution

```json
{
    ...
    "Features": [
        {
            "FeatureName":0,
            "FeatureFeatures":[
                {
                    "Name": "Phase 1",
                    "Description": "Description of phase 1",
                    "IsDynamic": true,
                    "EvolutionState": 1,
                    "IsCurrentState": false,
                    "SmartContractAsset": {
                        "AssetId": "00000000-0000-0000-0000-000000000000",
                        "AssetAuthorName": "Author's Name",
                        "Location": "/path/to/asset1.jpg",
                        "Extension": "jpg",
                        "FileSize": 1024,
                        "FileName": "asset1.jpg"
                    },
                    "EvolveDate": null,
                    "EvolveBlockHeight": 1000000
                },
            ]
        }
    ]
}
```

#### DateTime Evolution

```json
{
    ...
    "Features": [
        {
            "FeatureName":0,
            "FeatureFeatures":[
                {
                    "Name": "Phase 1",
                    "Description": "Description of phase 1",
                    "IsDynamic": true,
                    "EvolutionState": 1,
                    "IsCurrentState": false,
                    "SmartContractAsset": {
                        "AssetId": "00000000-0000-0000-0000-000000000000",
                        "AssetAuthorName": "Author's Name",
                        "Location": "/path/to/asset1.jpg",
                        "Extension": "jpg",
                        "FileSize": 1024,
                        "FileName": "asset1.jpg"
                    },
                    "EvolveDate": 1679505579,
                    "EvolveBlockHeight": null
                },
            ]
        }
    ]
}
```

### Retrieving Data

Once the smart contract is compile and minted, it will be available to read back through the API

#### Listing

```
GET http://localhost:7292/scapi/scv1/GetAllSmartContracts/{PAGE}
```

#### Code Example

<Tabs>
<TabItem value="js" label="NodeJS">

```js
const listNfts = async (page = 1) => {
  const url = `${CLI_BASE_URL}/scapi/scv1/GetAllSmartContracts/${page}`;
  const request = await fetch(url);

  const data = await request.json();

  if (!data) {
    return null;
  }

  if (data["Count"] == 0) {
    console.log("No NFTs found");
    return [];
  }

  return data["Results"];
};
```

</TabItem>

<TabItem value="py" label="Python">

```python
def list_nfts(page=1):
    url = f"{CLI_BASE_URL}/scapi/scv1/GetAllSmartContracts/{page}"
    response = requests.get(url)
    data = response.json()

    if not data:
        return None

    if data["Count"] == 0:
        print("No NFTs found")
        return []

    return data["Results"]

```

</TabItem>
</Tabs>

#### Searching

```
GET http://localhost:7292/scapi/scv1/GetAllSmartContracts/{PAGE}/{QUERY}
```

#### Code Example

<Tabs>
<TabItem value="js" label="NodeJS">

```js
const searchNfts = async (query, page = 1) => {
  const url = `${CLI_BASE_URL}/scapi/scv1/GetAllSmartContracts/${page}/${query}`;
  const request = await fetch(url);

  const data = await request.json();

  if (!data) {
    return null;
  }

  if (data["Count"] == 0) {
    console.log("No NFTs found");
    return [];
  }

  return data["Results"];
};
```

</TabItem>

<TabItem value="py" label="Python">

```python
def search_nfts(query, page=1):
    url = f"{CLI_BASE_URL}/scapi/scv1/GetAllSmartContracts/{page}/{query}"
    response = requests.get(url)
    data = response.json()

    if not data:
        return None

    if data["Count"] == 0:
        print("No NFTs found")
        return []

    return data["Results"]

```

</TabItem>
</Tabs>

#### Retrieve

```
GET http://localhost:7292/scapi/scv1/GetSingleSmartContract/{SMART_CONTRACT_UID}
```

#### Code Example

<Tabs>
<TabItem value="js" label="NodeJS">

```js
const retrieveNft = async (smartContractUid) => {
  const url = `${CLI_BASE_URL}/scapi/scv1/GetSingleSmartContract/${smartContractUid}`;
  const request = await fetch(url);

  const data = await request.json();
  if (data.length < 1) return null;
  return data[0];
};
```

</TabItem>

<TabItem value="py" label="Python">

```python
def retrieve_nft(smart_contract_uid):
    url = f"{CLI_BASE_URL}/scapi/scv1/GetSingleSmartContract/{smart_contract_uid}"
    response = requests.get(url)
    data = response.json()

    if len(data) < 1:
        return None

    return data[0]

```

</TabItem>
</Tabs>
