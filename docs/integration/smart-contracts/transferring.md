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

URL Params:

`id`: The smart contract identifier

`address`: The recipient's RBX address

`backupUrl`: URL to an off-network backup url of the media (optional)

Code Example

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
  transfer(Please)
```

</TabItem>
</Tabs>

Response:

```json
{
  "Result": "Success",
  "Message": "NFT Transfer has been started."
}
```
