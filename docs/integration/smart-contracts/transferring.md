---
sidebar_position: 2
---

# Transferring NFTs


API Endpoints:

Transfer without media backup URL:
```
GET http://localhost:7292/scapi/scv1/TransferNFT/{id}/{address}
```

Transfer with media backup URL:
```
GET http://localhost:7292/scapi/scv1/TransferNFT/{id}/{address}/{backupUrl}
```

URL Params:

`id`: The smart contract identifier

`address`: The recipient's RBX address

`backupUrl`: URL to an off-network backup url of the media (optional)

Response:
```json
{
    "Result": "Success",
    "Message": "NFT Transfer has been started."
}
```