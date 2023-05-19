
const main = async () => {

    const payload = {
        "Name": "Smart Contract Name",
        "MinterName": "Minter's Name",
        "Description": "Description Goes Here",
        "SmartContractAsset": {
            "AssetId": "00000000-0000-0000-0000-000000000000",
            "Name": "friendship.jpg",
            "AssetAuthorName": "Author's Name",
            "Location": "/Users/tylersavery/placeholders/friendship.jpg",
            "Extension": "jpg",
            "FileSize": 488734,
        },
        "IsPublic": false,
        "SmartContractUID": "00000000-0000-0000-0000-000000000000",
        "Features": [],
        "MinterAddress": "xDnL4MCGtgHu85JJHdN1fkXinHzKaqVQ59"
    };

    const url = "http://localhost:17292/scapi/scv1/CreateSmartContract";
    const request = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });

    const data = await request.json();
    console.log(data);

    if(data["Success"] == true){
        // Success
    }

}


main();