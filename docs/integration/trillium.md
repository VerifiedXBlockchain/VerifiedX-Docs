---
sidebar_position: 6
---

# Trillium

### What is Trillium?

Trillium is a Turing complete language and object-oriented language for implementing and for the execution of the RBX network smart contracts. Trillium smart contracts, also known as SENs (Self-Executing NFTs), are the programs written to create and manage NFTs on the RBX network.

Trillium is a curly-bracket language, but can also execute in a scripting function and is designed to not need any virtual machine or cluster to execute. It is influenced by C#, JavaScript, and Minsk.

With Trillium a developer can create NFT driven smart contracts for uses such as royalty enforcement, evolving needs, multi asset collections, soulboundnd items, and many other utility uses as it is agnostic to use-case entirely. 

#### Trillium Syntax Example
```js
function helloWorld(name : string) : string
{
    var result = "Hello " + name
    return result
}

helloWorld("Trillium")
```
> Output: `Hello Trillium`

### How is Trillium Different from other Smart Contract Languages?

The first difference is that it is a language not taken from any current blockchain structures. Trillium was created from multiple resources and with NFTs specifically in mind. It was designed to be light weight and easily executable on a variety of platforms and applications.

The second big difference is that RBX smart contracts do not require a virtual machine at all. They are called Self-Executing NFTs (SENs). These contracts have the ability to dynamically function when called and can modify their returned state without the need to call out or create an expensive transaction.

Another key difference is RBX NFTs IS the smart contract with this language and not a product produced from a smart contract. 

### Is Trillium Open Source?

Of course! Trillium, as the case with the RBX network, was written in C#, .net 6, and is on the RBX github. 
> <a href="https://github.com/ReserveBlockIO/Trillium">Visit Trillium on Github</a>.

Trillium also has both a desktop and web-based IDE that anyone can test and deploy utilizing the language. 

### tIDE

Trillium Web IDE (tIDE) is an open-source web application for the ReserveBlock RBX community to interact and develop with. Trillium fosters a fast runtime compilation and execution of code with a straight forward and intuitive GUI. tIDE can be used for the entire process of contract development as well as act as an intuitive environment for learning Trillium.

Trillium was designed with NFTs specifically in mind and is a Turing complete language. Trillium IDE is the driving force smart contract language of the ReserveBlock RBX Project. It encompasses many other projects including RBX Core, RBX GUI, Trillium, RBX Explorer, and of course Trillium-IDE. 

> <a href="https://trillium.rbx.network">Launch Trillium IDE</a>.