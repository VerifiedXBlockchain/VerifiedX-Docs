---
sidebar_position: 8
---

# vBTC


## Create vBTC Token

### API Endpoint

```
POST http://localhost:7292/btcapi/BTCV2/TokenizeBitcoin
```

### POST Data Params:

```json

    {
        "RBXAddress": "", //owner address for the smart contract
        "Name": "", //name of the token
        "Description": "", // description of the token
        "FileLocation": "", //absolute path to custom asset (or use `default` to use default vBTC network asset)
    }

```

### Success Response

```json
{
    "Success": true,
    "Hash": "...",
    "Message: "..."
}

```

#### Optional: Add Additional Media


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

---

## Listing vBTC Tokens

### API Endpoint

```
GET http://localhost:7292/btcapi/BTCV2/GetTokenizedBTCList
```

### Response:

```json
{
    "TokenizedList": {
        "Result": [
            {
                "Id": "",
                "SmartContractUID": "",
                "RBXAddress": "",
                "DepositAddress": "",
                "Balance": 0.0,
                "MyBalance": 0.0,
                "TokenName": "",
                "TokenDescription": "",
                "SmartContractMainId": "",
                "IsPublished": true,
            },
            ...
        ]
    }
}

```

---

## Transferring vBTC

### API Endpoint

```
POST http://localhost:7292/btcapi/BTCV2/TransferCoin
```

### POST Data Params:

```json
{
    "SCUID": "", //the smart contract identifier
    "ToAddress": "", // the VFX address to transfer vBTC to
    "FromAddress": "", // the VFX address of the sender
    "Amount": 0.001 // the amount of vBTC
}

```


### Success Response

```json
{
    "Success": true,
    "Hash": "...",
    "Message: "..."
}

```

---

## Withdrawing BTC

### API Endpoint

```
POST http://localhost:7292/btcapi/BTCV2/WithdrawalCoin
```

### POST Data Params:

```json
{
    "SCUID": "", //the smart contract identifier
    "ToAddress": "", // the BTC address to withdrawl to
    "FromAddress": "", // the VFX address of the sender
    "Amount": 0.001, // the amount of vBTC
    "ChosenFeeRate": 1, // the fee rate per byte in satoshis
}

```


### Success Response

```json
{
    "Success": true,
    "Hash": "...",
    "Message: "..."
}

```


## Transferring vBTC (with Multiple Inputs)

### API Endpoint

```
POST http://localhost:7292/btcapi/BTCV2/TransferCoinMulti
```

### POST Data Params:

```json
{
    "fromAddress": "", //the VFX address that will be sending the transaction
    "toAddress": "", // the VFX address to transfer vBTC to
    "vBTCInputs": [
        {
            "scuid": "", //the vBTC token's smart contract identifier
            "fromAddress": "", // the VFX address the input will be taken from
            "amount": 0.01 // the amount of vBTC to be used as an input
        },
        ... // repeat for as many inputs as needed
    ]
}

```


### Success Response

```json
{
    "Success": true,
    "Hash": "...",
    "Message: "..."
}

```