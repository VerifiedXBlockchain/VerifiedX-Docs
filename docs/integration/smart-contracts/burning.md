---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Burning NFTs

API Endpoint:

```
GET http://localhost:7292/scapi/scv1/Burn/{id}
```

URL Params:

`id`: The smart contract identifier

Code Example

<Tabs>
<TabItem value="js" label="NodeJS">

```js
const burned = burn();
```

</TabItem>

<TabItem value="py" label="Python">

```python
  burn(Please)
```

</TabItem>
</Tabs>

Response:

```json
{
  "Id": {
    "Timestamp": 0000000000,
    "Machine": 0000000,
    "Pid": 0000,
    "Increment": 0000000,
    "CreationTime": "2005-01-01T15:53:11Z"
  },
  "Hash": "abcdfg...",
  "ToAddress": "Rabc123...",
  "FromAddress": "Rabc123...",
  "Amount": 0.0,
  "Nonce": 89,
  "Fee": 0.00000883,
  "Timestamp": 0000000000,
  "Data": "[{\"Function\":\"Burn()\",\"ContractUID\":\"00000000-0000-0000-0000-000000000000\",\"FromAddress\":\"Rabc123...\"}]",
  "UnlockTime": null,
  "Signature": "AbCdF...",
  "Height": 0,
  "TransactionType": 4,
  "TransactionRating": 1,
  "TransactionStatus": 0
}
```
