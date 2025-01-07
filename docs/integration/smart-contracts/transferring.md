---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

#### URL Params:

`id`: The smart contract identifier

`address`: The recipient's VFX address

`backupUrl`: URL to an off-network backup url of the media (optional)

#### Response:

```json
{
  "Result": "Success",
  "Message": "NFT Transfer has been started."
}
```

#### Code Example

<Tabs>
<TabItem value="js" label="NodeJS">

```js
const transferNft = async (smartContractUid, address) => {
  const url = `${CLI_BASE_URL}/scapi/scv1/TransferNFT/${smartContractUid}/${address}`;
  const request = await fetch(url);

  const data = await request.json();
  return data["Result"] == "Success";
};
```

</TabItem>

<TabItem value="py" label="Python">

```python
def transfer_nft(smart_contract_uid, address):
    url = f"{CLI_BASE_URL}/scapi/scv1/TransferNFT/{smart_contract_uid}/{address}"
    response = requests.get(url)
    data = response.json()

    return data["Result"] == "Success"

```

</TabItem>
</Tabs>
