---
sidebar_position: 10
---

# vBTC Raw Integration Guide

While integrating with the CLI online simplifies the management of vBTC tokens, some integrations may require offline handling using raw transactions (i.e., a CLI without included keys).

This guide outlines the four supported vBTC interactions:

### 1. Minting a vBTC Smart Contract
A vBTC token is a specialized smart contract that tokenizes Bitcoin. Each smart contract generates a deposit address for sending BTC via the Bitcoin network. The contract owner controls the BTC funds within the token but lacks access to its private key. Therefore, transferring or withdrawing requires interaction with the VFX network.

### 2. Transferring vBTC to Another VFX Address
This transaction occurs entirely on the VFX network. The token owner or any VFX address holding vBTC can transfer tokens to another address instantly with minimal fees.

### 3. Withdrawing vBTC to a Bitcoin Address
This process involves both the Bitcoin and VFX networks. Withdrawing converts vBTC back into BTC (fully or partially) and sends it to any Bitcoin address.

### 4. Transferring Smart Contract Ownership
This VFX network transaction assigns a new address as the smart contract owner. Any new funds sent to the deposit address will belong to the new owner. Note: transferring ownership does not transfer the existing vBTC balance.

## Managing vBTC Tokens with Raw Transactions

> **Note:** A CLI is required for some steps, but no address/accounts or balances are needed.

### Compiling and Minting a Raw vBTC Transaction

---

### Step 1: Initiate Smart Contract UID, Deposit Address, and PublicKeyProofs

The first thing that needs to be done is determining important details required by this smart contract type. The CLI has a built in API endpoint to provide the SmartContractUID, DepositAddress, and ProofJson.


#### URL:
```
GET `btcapi/BTCV2/GetTokenizationDetails/{VFX_ADDRESS}`
```

#### URL Params:

`VFX_ADDRESS` the owner of the token's address.

#### Response
```json
{
  "SmartContractUID": "...",
  "DepositAddress": "...",
  "ProofJson": "...",
}

```

You'll want to store these values as they will be used in the next steps.

---

### Step 2: Build Payload:

Contruct a smart contract payload like this.

```json
{
  "SmartContractUID": "...", // SmartContractUID from step 1
  "Name": "My vBTC Token",
  "MinterName": "Minter Name / Owner Address",
  "Description": "My vBTC Token Description",
  "SmartContractAsset": {
    "AssetId": "00000000-0000-0000-0000-000000000000", // leave this as a blank guid
    "Name": "My vBTC Token", // or can be related to the image asset
    "AssetAuthorName": "Owner Address", // owner address / name or related to image asset
    "Location": "default", // use "default" for the default vBTC icon OR include an absolute file path that the Core CLI has access to. Note: custom images should be no more than 32x32 pixels as this is stored on chain
    "Extension": "png", // extension of the asset (use `png` for default icon)
    "FileSize": 6778 // file size of the asset (use `6778` for default icon)
  },
  "Features": [
    {
      "FeatureName": 3,
      "FeatureFeatures": {
        "AssetName": "Bitcoin",
        "AssetTicker": "BTC",
        "DepositAddress": "...", /// DepositAddress from step 1
        "PublicKeyProofs": "...", // ProofJson from step 1
        "ImageBase": "default"
      }
    }
  ],
  "MinterAddress": "...", // the owner of the token's address
  "SCVersion": 1
}

```

---

#### Step 3: Compile Smart Contract

Use the payload constructed above as well as the following URL.

```
GET txapi/txv1/GetSCMintDeployData/
```

This will return the compiled payload of the smart contract including the compressed trillium code.

---

### Step 4: Build Transaction

This follows the same steps as creating any raw transaction. See [Transaction Creation](./transaction-creation) for further details, but here is a summary of the flow. You'll be essentiall building a transaction payload through a variety of steps. Other than the timestamp, nonce, and signature steps, you'll be passing the updated payload as POST data throughout each API call.


1. Get the current timestamp:

`GET /txapi/txV1/GetTimestamp`

2. Get address nonce:

`GET /txapi/txV1/GetAddressNonce/{VFX_ADDRESS}`

3. Build initial tx and get fee


Post Data Payload:

```json
  {
    "Hash": "", // leave blank for now
    "ToAddress": "",
      "FromAddress": "...", // owner address
      "TransactionType": 17,
      "Amount": 0,
      "Nonce": "...", // nonce from above
      "Fee": 0,
      "Timestamp": 1739029967, // timestamp from above
      "Signature": "", // leave blank for now
      "Height": 0,
      "Data": "...", // data from step 3
      "UnlockTime": null,
  }
```

URL: 

`POST /txapi/txV1/GetRawTxFee`

4. Get Hash

Update the above payload with the "Fee" from above and then hit:

`POST /txapi/txV1/GetTxHash`

5. Generate Signature

Use the hash of the tx as the message and sign it with the owner's keypair. This is no different than generating a signature for any raw transaction. See [Transaction Creation](./transaction-creation) for more details.

6. Update Payload

Update the payload to include the `Hash` and `Signature` from the above steps.

7. Verify Transaction (optional)

`POST /txapi/txV1/VerifyRawTransaction`

8. Send Transaction

`POST /txapi/txV1/SendRawTransaction`

This will return `{"Success" true, "Hash": ..., "Message": "..."}`.


---


> Here is a completed example payload for the verify/send API call(s):

```json

{
  "Hash": "9de731e704967bb0adb58cd10118e9b6c05230059f87abbef6fbdcb82e5cdbea",
  "ToAddress": "RNiQrW3aBUWZhfadqKxPuN46iGaR13ox7P",
  "FromAddress": "RNiQrW3aBUWZhfadqKxPuN46iGaR13ox7P",
  "TransactionType": 17,
  "Amount": 0,
  "Nonce": 27,
  "Fee": 0.00005145,
  "Timestamp": 1736792656,
  "Signature": "MEUCIQClsm8adW701Y5LpPMumaZUKP4u4QBVLjbzEC0TUqnyaAIgfoymEVBziTFKJkXptdxjQ5HKggVKh4o40JCE/YBdNgY=.4Ei1rMebDngFsA7BNgFsHPSCVXtqViybxX61VnvTD4J4TJhR9cc1vrh1947Y59S3bKor4nNnENybExPektmLi2ZQ",
  "Height": 0,
  "Data": [
    {
      "Function": "Mint()",
      "ContractUID": "2442522a3fd34270b77a64b07eb34b7f:1736792655",
      "Data": "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",
      "MD5List": "defaultvBTC.png::150b90aa9d06f7e4fc5703ca6d7f01db"
    }
  ],
  "UnlockTime": null
}

```

---

## Transferring vBTC

This is the mechinism for transferring a partial (or whole) vBTC balance from one VFX address to another. 

> Whether this is coming from the smart contract owner or just another VFX address who holds a balance, the process remains the same.

For this, you simply need to create and broadcast raw transaction with the below payload. 

> Of course, you must build this transaction in the same steps as any raw transaction (timestamp, nonce, fee, signature, etc.)

```json

{
  "Hash": "...",
  "ToAddress": "...", // recipient address
  "FromAddress": "...", // sender address
  "TransactionType": 18, // Use 18 as this tx type
  "Amount": 0,
  "Nonce": 1,
  "Fee": 0.00005145,
  "Timestamp": 1736792656,
  "Signature": "...",
  "Height": 0,
  "Data": [
     {
        "Function": "TransferCoin()",
        "ContractUID": "", // Smart Contract UID
        "Amount": 0.01, // amount of vBTC to transfer
      }
  ]
}
 
```
Then hit the following API endpoint:

`POST /txapi/txV1/SendRawTransaction`

This will return `{"Success" true, "Hash": ..., "Message": "..."}`.


---

## Withdrawing vBTC 

This is the mechinism for withdrawing vBTC (converting vBTC back to BTC and sending it to a BTC address). 

> Whether this is coming from the smart contract owner or just another VFX address who holds a balance, the process remains the same.

This follows the same flow as any raw transaction except you'll need to create a separate signature using the following message:

`{sender_address}.{timestamp}.{uniqueId}`

The unique ID is something you will generate and must be 16 characters long and only contain alpha characters (upper and/or lowercase)

`AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz`

Sign this message and save it for the following step.

Now you need to create and broadcast raw transaction with the below payload. 

> Once again, you must build this transaction in the same steps as any raw transaction (timestamp, nonce, fee, signature, etc.)

```json

{
  "Hash": "...",
  "ToAddress": "...", // recipient address
  "FromAddress": "...", // sender address
  "TransactionType": 18, // Use 18 as this tx type
  "Amount": 0,
  "Nonce": 1,
  "Fee": 0.00005145,
  "Timestamp": 1736792656,
  "Signature": "...",
  "Height": 0,
  "Data": [
     {
      "SmartContractUID": "...",
      "Amount": 0.001, 
      "VFXAddress": "...",
      "BTCToAddress": "...", // where the BTC will be withdrawn too
      "Timestamp": 1736792656,
      "UniqueId": "...", // unique id created above
      "VFXSignature": "", // signature created using `{sender_address}.{timestamp}.{uniqueId}` message above
      "ChosenFeeRate": 10, // sats per byte fee rate 
      "IsTest": false,
      }
  ]
}
 
```
Then hit the following API endpoint:

`POST /txapi/txV1/SendRawTransaction`

This will return `{"Success" true, "Hash": ..., "Message": "..."}`. Keep the tx hash handy for the next step.


The final step is to broadcast a simple transaction on the VFX network to finalize the withdrawl. Follow the standard steps to build a TX and see the relevent `Type`, `ToAddress`, and `Data` required.


```json
{
  "Hash": "...",
  "ToAddress": "TW_Base", // token withdrawl base
  "FromAddress": "...", // VFX address of the one performing the tx
  "TransactionType": 21, // Use 21 as this tx type
  "Amount": 0,
  "Nonce": 1,
  "Fee": 0.00005145,
  "Timestamp": 1736792656,
  "Signature": "...",
  "Height": 0,
  "Data": [
    {
    "Function": "TokenizedWithdrawalComplete()", // this function
    "ContractUID": "...", // Smart Contract UID
    "UniqueId": "...",  // unique id created above
    "TransactionHash": "...", // hash of the Withdraw tx above
    }
  ]
}

```




--- 

## Transferring Smart Contract Ownership

> Note: transferring the ownership of the token does not transfer the vBTC balance of the existing owner.

---

Transferring a vBTC smart contract to a new address is the same process as transferring an NFT or any other smart contract.


### Step 1: Create a Beacon Upload Request

First, sign a message using the current owner's keypair. The message is the SCUID of the smart contract.

Next, create a beacon upload request (for media transfer)

URL:

`GET txapi/txV1/CreateBeaconUploadRequest/{SCUID}/{TO_ADDRESS}/{SIGNATURE}`

URL Params:

`SCUID` - the smart contract identified
`TO_ADDRESS` - the address the SC will be transferred to
`SIGNATURE` - the signature create above

This will return a string of the beacon locator which will be used in the next step.

### Step 2: Get the transfer data required

URL:
`GET txapi/txV1/GetNftTransferData/{SCUID}/{TO_ADDRESS}/{LOCATOR}`

URL Params:

`SCUID` - the smart contract identified
`TO_ADDRESS` - the address the SC will be transferred to
`LOCATOR` - the locator string received above


### Step 3: Create and Broadcast the TX

> Once again, you must build this transaction in the same steps as any raw transaction (timestamp, nonce, fee, signature, etc.)

```json
{
  "Hash": "...",
  "ToAddress": "...", // recipient address
  "FromAddress": "...", // sender address
  "TransactionType": 18, // Use 18 as this tx type
  "Amount": 0,
  "Nonce": 1,
  "Fee": 0.00005145,
  "Timestamp": 1736792656,
  "Signature": "...",
  "Height": 0,
  "Data": {...} // data received in the previous step
}
```

And that's all required to transfer full ownership of the token.

> Reminder: transferring the ownership of the token does not transfer the vBTC balance of the existing owner.



## Balances

With a raw/offline integration of vBTC balances will need to be tracked manually. 

The logic is as follows:

- On the BTC network, watch the deposit address's balance for both inputs and outputs.

- On the VFX network, watch for any transactions of type `18` with the `Function` of `TransferCoin()`

- The TransferCoin txs will include an `Amount` in the `Data` as well as a `ToAddress` in the root of the transaction.

- You'll want to follow these to see where the funds flow to and track the updated balances (subtracting from the FromAddress and andding to the ToAddress)


Alternatively, you can use this URL on the VFX explorer to get the live balance of any token as well as the balance owner's addresses / amounts.


```
GET https://data.verifiedx.io/api/btc/vbtc/detail/{SC_UID}
GET https://data-testnet.verifiedx.io/api/btc/vbtc/detail/{SC_UID} # for testnet
```

Response:

```json
{
  "sc_identifier": "...",
  "name": "Name Goes Here",
  "description": "Description Goes Here",
  "owner_address": "...",
  "image_url": "https://vfx-resources.s3.amazonaws.com/defaultvBTC.gif",
  "deposit_address": "3698tYZvbDhA5HWenS9n5BjsvM6q46fqqZ",
  "public_key_proofs": "...",
  "global_balance": 0.00178, // global balance of token
  "addresses": {  // dictionary of addresses: balances
    "RQKDU4UUCwbKXoydjknnH1y7Y3QYYHkvUz": 0.00178 
  },
  "smart_contract": {
    "identifier": "...",
    "name": "Name Goes Here",
    "description": "Description Goes Here",
    "minter_address": "...",
    "owner_address": "...",
    "minter_name": "...",
    "smart_contract_data": "...",
    "primary_asset_name": "vBTC Token",
    "primary_asset_size": 6778,
    "minted_at": "2025-01-15T17:13:40Z",
    "mint_transaction": "...",
    "burn_transaction": null,
    "is_burned": false,
    "data": "...",
    "asset_urls": {},
    "is_listed": false
  },
  "created_at": "2025-01-15T17:13:40Z"
}
```



## Transferring vBTC (with Multiple Inputs)

This enables the ability to create a raw transaction for a vBTC transfer from multiple inputs

> You must build this transaction in the same steps as any raw transaction (timestamp, nonce, fee, signature, etc.)


### Generate message

First you must generate a random string that is 12 characters long using only letters (uppercase and/or lowercase) and numbers (alpha numeric). This will be used in the data payload and signed for each input.

### TX Details

> The transaction type to use is `18`

> The too address of the transaction is the VFX address the transfer is going to

> The data for the tx is explained below

### TX Data

```json
{
  "Function": "TransferCoinMulti()",
    "Inputs": [
      {
        "SCUID": "", //the vBTC token's smart contract identifier,
        "FromAddress": "", // the VFX address the input will be taken from
        "Amount": 0.05, // the amount of vBTC to be used as an input
        "Signature": "", //Sign the generated message with the holders keypair
      },
      ... // repeat for as many inputs as needed
    ],
    "Amount": 0.1, // Total amount (sum of all inputs)
    "SignatureInput": "", // The generated message created above
}
```


