---
sidebar_position: 4
---

# Evolving NFTs

For NFTs that have the minter-controlled evolution feature enabled, they can be evolved by the minter even if they are no longer the owner.

#### API Enpoint:

```
GET http://localhost:7292/scapi/scv1/EvolveSpecific/{id}/{address}/{stage}
```

URL Params

`id`: The smart contract identifier

`address`: The current owner's VFX address

`stage`: the stage to evolve to (the original stage is `0`)

#### Response:

```json
{
  "Result": "Success",
  "Message": "NFT Evolve transaction has been sent."
}
```

#### Code Example

<Tabs>
<TabItem value="js" label="NodeJS">

```js
const evolveNft = async (smartContractUid, address, stage) => {
  const url = `${CLI_BASE_URL}/scapi/scv1/EvolveSpecific/${smartContractUid}/${address}/${stage}`;
  const request = await fetch(url);

  const data = await request.json();

  return data["Hash"];
};
```

</TabItem>

<TabItem value="py" label="Python">

```python
def evolve_nft(smart_contract_uid, address, stage):
    url = f"{CLI_BASE_URL}/scapi/scv1/EvolveSpecific/{smart_contract_uid}/{address}/{stage}"
    response = requests.get(url)
    data = response.json()

    return data["Hash"]

```

</TabItem>
</Tabs>
