---
sidebar_position: 4
---


# VFX Transaction & Signature Creation

## Summary:

The purpose of this document is to teach you how to create a transaction and sign the transaction to then broadcast over the VFX network. Please note with this process you are never needed to expose your private key to the wallet or anywhere outside your own building application. At the end of this document in the extra section is how you can send a TX if your private key is associated with a wallet.

## How to create an VFX Transaction

To first create a transaction you must understand how the transaction class is made. Below is the class in its full form and the enums associated with it.

```csharp
public class Transaction {

   public ObjectId Id { get; set; }

   public string Hash { get; set; }

   public string ToAddress { get; set; }

   public string FromAddress { get; set; }

   public decimal Amount { get; set; }

   public long Nonce { get; set; }

   public decimal Fee { get; set; }

   public long Timestamp { get; set; }

   public string? Data { get; set; }

   public string Signature { get; set; }

   public long Height { get; set; }

   public TransactionType TransactionType { get; set; }

   public TransactionRating? TransactionRating { get; set; }

   public TransactionStatus? TransactionStatus { get; set; }

}
```

- **Id** - This field is auto generated and you do not need to do anything with

- **Hash** - This is created by the wallet once a full TX is prepared. A hash consist of the follow pieces of information: `Timestamp + FromAddress + ToAddress + Amount + Fee + Nonce + TransactionType + Data`
- **ToAddress** - This is the VFX address in which the transaction is being sent to
- **FromAddress** - This is the VFX address in which the transaction is being sent from.
- **Amount** - This is the amount of VFX that is being sent in a transaction
- **Nonce** - This is the transaction counter for a given address. As transactions are sent this counter is increased by 1
- **Fee** - This is the near zero atomic fee that is associated with a transaction and is calculated through the wallet.
- **Timestamp** - This is a unix timestamp in seconds
- **Data** - This is the associated tx data for when a transaction is more than just a basic transfer of VFX (ex: NFTs, ADNRs, etc.). This can be left as _null_ if performing a basic VFX tx.
- **Signature** - This is an ECDSA Signature where the message is always the Hash of the transaction.
- **Height** - This is the block height a TX is associated with once crafted. This is auto populated and can be left as 0 when creating a TX.
- **TransactionType** - This is from the enum above. If you are performing a basic TX then you would choose TransactionType.TX or 0.
- **TransactionRating** - This is auto filled through TX Verify and can be left _null._
- **TransactionStatus** - This needs to be defaulted to 1.

```csharp
 public enum TransactionType{
    TX,
    NODE,
    NFT_MINT, //mint
    NFT_TX, //transfer or other process (not for sale or burn)
    NFT_BURN,//burn nft
    NFT_SALE,//sale NFT
    ADNR, //address dnr
    DSTR, //DST shop registration
    VOTE_TOPIC, //voting topic for validators to vote on
    VOTE, //cast vote for topic
    RESERVE, //create a reserve TX
    SC_MINT, //standard sc mint
    SC_TX, //standard sc tx
    SC_BURN, //standard sc burn
    FTKN_MINT, //fungible token mint
    FTKN_TX, //fungible token tx
    FTKN_BURN, //fungible token burn
    TKNZ_MINT,//tokenization token mint
    TKNZ_TX, //tokenization token tx
    TKNZ_BURN, //tokenization token burn
    TKNZ_WD_ARB,
    TKNZ_WD_OWNER
}

public enum TransactionStatus {
   Pending,
   Success,
   Failed
}

public enum TransactionRating {
   A = 1,
   B = 2,
   C = 3,
   D = 4,
   E = 5,
   F = 6
}
```

Now that you understand what each element is for you will learn how to craft a TX and send it to mempool for confirmation.

- You must first know the To and From address

  - To: xJuWfvE3pp73wno85k3QFWwK9wM9XRhhd9
  - From: xMpa8DxDLdC9SQPcAFBc2vqwyPsoFtrWyC

- You must get the next nonce for your from address
  **<http://localhost:7292/txapi/TXV1/GetAddressNonce/xMpa8DxDLdC9SQPcAFBc2vqwyPsoFtrWyC>**  
   The response is as follow:
  `{"Result":"Success","Message":"Next Nonce Found.","Nonce":38}`
- The next nonce for our from address `(xMpa8DxDLdC9SQPcAFBc2vqwyPsoFtrWyC)` is: 38

- You will also want to get a timestamp. You can either generate your own UNIX timestamp in seconds or use the wallet API to get it:
  - **<http://localhost:7292/txapi/TXV1/GetTimestamp>**
  - `{"Result":"Success","Message":"Timestamp Acquired.","Timestamp":1672795597}`
- You will then create your class of Transaction

```csharp
 Transaction tx1 = new Transaction {
   ToAddress = "xJuWfvE3pp73wno85k3QFWwK9wM9XRhhd9",
   FromAddress = "xMpa8DxDLdC9SQPcAFBc2vqwyPsoFtrWyC",
   Amount = 1.0M,
   Data = null,
   Nonce = 38,
   TransactionType = TransactionType.TX, // or 0
   Fee = 0.0M,
   Timestamp = 1672795597,
   TransactionRating = TransactionRating.A, //or 1
};
```

- You will then take that class and Json Serialize it and send it to the next API call to get the fee.

  ` {"Hash":null,"ToAddress":"xJuWfvE3pp73wno85k3QFWwK9wM9XRhhd9","FromAddress":"xMpa8DxDLdC9SQPcAFBc2vqwyPsoFtrWyC","Amount":1.0,"Nonce":38,"Fee":0.0,"Timestamp":1672789611,"Data":null,"Signature":null,"Height":0,"TransactionType":0,"TransactionRating":1,"TransactionStatus":null}`
  **<http://localhost:7292/txapi/TXV1/GetRawTxFee>**

  Response is as follows from the **POST** method:  
  `{"Result":"Success","Message":"TX Fee Calculated","Fee":0.0000028515625}`

- You will take the fee **0.0000028515625** and paste it into your class. Now you have the following transactions:

```csharp
  Transaction tx2 = new Transaction{
      ToAddress = "xJuWfvE3pp73wno85k3QFWwK9wM9XRhhd9",
      FromAddress = "xMpa8DxDLdC9SQPcAFBc2vqwyPsoFtrWyC",
      Amount = 1.0M,
      Data = null,
      Nonce = 38,
      TransactionType = TransactionType.TX,
      Fee = 0.0000028515625M,
      Timestamp = 1672795597,
      TransactionRating = TransactionRating.A, //or 1
  };
```

- You will take that class and Json Serialize it again and send it to the **POST** method for hash.

  - `{"Hash":null,"ToAddress":"xJuWfvE3pp73wno85k3QFWwK9wM9XRhhd9","FromAddress":"xMpa8DxDLdC9SQPcAFBc2vqwyPsoFtrWyC","Amount":1.0,"Nonce":38,"Fee":0.0000028515625,"Timestamp":1672789611,"Data":null,"Signature":null,"Height":0,"TransactionType":0,"TransactionRating":1,"TransactionStatus":null}`

    **<http://localhost:7292/txapi/TXV1/GetTxHash>**

    Response is as follows from the **POST** Method:

    `{"Result":"Success","Message":"TX Fee Calculated","Hash":"9528d9693a824e55c456bd8646df10a060e7d6bdfcf0d5e04fcbfec9d718742a"}`

- You now have an almost completed TX. Now you simply need to take the hash `(“9528d9693a824e55c456bd8646df10a060e7d6bdfcf0d5e04fcbfec9d718742a”)` and insert it into the classes Hash field. You will have a TX Class like this:

```csharp
Transaction tx3 = new Transaction{
   ToAddress = "xJuWfvE3pp73wno85k3QFWwK9wM9XRhhd9",
   FromAddress = "xMpa8DxDLdC9SQPcAFBc2vqwyPsoFtrWyC",
   Amount = 1.0M,
   Data = null,
   Nonce = 38,
   TransactionType = TransactionType.TX,
   Fee = 0.0000028515625M,
   Timestamp = 1672795597,
   TransactionRating = TransactionRating.A, //or 1
   Hash = "9528d9693a824e55c456bd8646df10a060e7d6bdfcf0d5e04fcbfec9d718742a"
};
```

- All that is left now is to sign the hash. Whatever ECDSA library you are using to produce private keys will most likely have a signature method as well. You need to sign the hash and then combine it with the public key.

- Once signed the signature is converted to Base64 (toDer)

  The Public key from the address minus the hex identifier (remove the 04 at beginning of publickey if it is there) and then base58 encoded.  
  Combine `a + a period + b`

  You would effectively have something that looks like this:

  - ` MEYCIQDd141oBoBfcznYAI05CnoCWVhEkMaBpthmqG8bLjusqgIhAOkywWZ2h0cYjcbFx6MT5Yc1pJmRdQvMzZdQP4O2O3QE.`
  - `5msmMuPGKwpvtYofSdr6zk1AWG5Rz1vmf5z5DTVb6PYXibwovzkKM7Eg2BTQ5KDeUKwSyEAzHq9KjTFc1hyhfiFg`
  - `MEYCIQDd141oBoBfcznYAI05CnoCWVhEkMaBpthmqG8bLjusqgIhAOkywWZ2h0cYjcbFx6MT5Yc1pJmRdQvMzZdQP4O2O3QE` - This is the Base64 (toDer) signature script
  - `5msmMuPGKwpvtYofSdr6zk1AWG5Rz1vmf5z5DTVb6PYXibwovzkKM7Eg2BTQ5KDeUKwSyEAzHq9KjTFc1hyhfiFg` - this is the public key with a Base58 Encoding on it minus the hex identifier of ‘04’
  - If you would like to see the method of signing it can be found here:**<https://github.com/VerifiedXBlockchain/VerifiedX-Core/blob/main/ReserveBlockCore/EllipticCurve/Ecdsa.cs>**

- The method is **public static Signature sign(string message, PrivateKey privateKey)**

- Once you have a signature you need to add it back to your Transaction class you have been creating. You should have this now:

```csharp
Transaction tx3 = new Transaction{
   ToAddress = "xJuWfvE3pp73wno85k3QFWwK9wM9XRhhd9",
   FromAddress = "xMpa8DxDLdC9SQPcAFBc2vqwyPsoFtrWyC",
   Amount = 1.0M,
   Data = null,
   Nonce = 38,
   TransactionType = TransactionType.TX,
   Fee = 0.0000028515625M,
   Timestamp = 1672795597,
   TransactionRating = TransactionRating.A, //or 1
   Hash = "9528d9693a824e55c456bd8646df10a060e7d6bdfcf0d5e04fcbfec9d718742a"
   Signature = "MEUCIQCUckWn1yDGpyQfbrylYMg50pOn2LrTyvErwcPA6CMKNQIgJYUxe1/xJ+MVnprGgY7tYR3fDZyqtarlgaailYBC/Ek=.5msmMuPGKwpvtYofSdr6zk1AWG5Rz1vmf5z5DTVb6PYXibwovzkKM7Eg2BTQ5KDeUKwSyEAzHq9KjTFc1hyhfiFg"
};
```

- With the signature in place you are ready to verify the TX.

  `{"Hash":"9528d9693a824e55c456bd8646df10a060e7d6bdfcf0d5e04fcbfec9d718742a","ToAddress":"xJuWfvE3pp73wno85k3QFWwK9wM9XRhhd9","FromAddress":"xMpa8DxDLdC9SQPcAFBc2vqwyPsoFtrWyC","Amount":1.0,"Nonce":38,"Fee":0.0000028515625,"Timestamp":1672789611,"Data":null,"Signature":"MEUCIQCUckWn1yDGpyQfbrylYMg50pOn2LrTyvErwcPA6CMKNQIgJYUxe1/xJ+MVnprGgY7tYR3fDZyqtarlgaailYBC/Ek=.5msmMuPGKwpvtYofSdr6zk1AWG5Rz1vmf5z5DTVb6PYXibwovzkKM7Eg2BTQ5KDeUKwSyEAzHq9KjTFc1hyhfiFg","Height":0,"TransactionType":0,"TransactionRating":1,"TransactionStatus":null}`
  **<http://localhost:7292/txapi/TXV1/VerifyRawTransaction>**

- Passing: `{"Result":"Success","Message":"Transaction has been verified.","Hash":"67d97333e5b62abfd6dc8d28a3200677a53b58526aecafd80190b13c5507083e"}`

- Should it fail. The response will contain something like:

  - `{"Result":"Fail","Message":"Transaction was not verified. Error: The timestamp of this transactions is too old to be sent now."}`
  - `{"Result":"Fail","Message":"Transaction was not verified. Error: This transactions hash is not equal to the original hash."}`

- Once the payload above has a **“Success”** then you can send the TX out to be broadcasted

  - {"Hash":"67d97333e5b62abfd6dc8d28a3200677a53b58526aecafd80190b13c5507083e","ToAddress":"xJuWfvE3pp73wno85k3QFWwK9wM9XRhhd9","FromAddress":"xMpa8DxDLdC9SQPcAFBc2vqwyPsoFtrWyC","Amount":1.0,"Nonce":38,"Fee":0.0000028515625,"Timestamp":1672795597,"Data":null,"Signature":"MEQCIF+sAjfQ07bBRxjv7eFwlcoz5OUn3t8rRAkdWqUJj1MRAiARlubEIprX2tlHw6eBUZUGTDOGf9/IzdKSte67m0Y6pw==.5msmMuPGKwpvtYofSdr6zk1AWG5Rz1vmf5z5DTVb6PYXibwovzkKM7Eg2BTQ5KDeUKwSyEAzHq9KjTFc1hyhfiFg","Height":0,"TransactionType":0,"TransactionRating":1,"TransactionStatus":null}

  - **<http://localhost:7292/txapi/TXV1/SendRawTransaction>**
  - `{"Result":"Success","Message":"Transaction has been broadcasted.","Hash":"67d97333e5b62abfd6dc8d28a3200677a53b58526aecafd80190b13c5507083e"}`

At this point you have successfully created a raw TX, signed it, and broadcasted it out

### You are now done.

![](media/complete-transaction-image.png)

## Extra:

---

If you however do have the key associated to the wallet You can simply use the in built API to send a TX:

![](media/api-transaction-image.png)
**[http://localhost:7292/txapi/TXV1/SendTransaction](http://localhost:7292/txapi/TXV1/SendTransaction/)/faddr/taddr/amt**

```
Faddr = xMpa8DxDLdC9SQPcAFBc2vqwyPsoFtrWyC
Taddr = xJuWfvE3pp73wno85k3QFWwK9wM9XRhhd9
Amt = 1.0
http://localhost:7292/txapi/TXV1/SendTransaction/xMpa8DxDLdC9SQPcAFBc2vqwyPsoFtrWyC/xJuWfvE3pp73wno85k3QFWwK9wM9XRhhd9/1
Response body is: Success! TxId: a09f62b718c7552c33fd5fe213341af39881668fa41ad9ffbe67d3140739aa4b
```
