---
sidebar_position: 4
---

# Evolving NFTs

For NFTs that have the minter-controlled evolution feature enabled, they can be evolved by the minter even if they are no longer the owner.


API Endpoint:
```
GET http://localhost:7292/scapi/scv1/EvolveSpecific/{id}/{address}/{stage}
```

URL Params

`id`: The smart contract identifier

`address`: The current owner's RBX address

`stage`: the stage to evolve to (the original stage is `0`)


Response:
```json
{
    "Result": "Success",
    "Message": "NFT Evolve transaction has been sent."
}
```


