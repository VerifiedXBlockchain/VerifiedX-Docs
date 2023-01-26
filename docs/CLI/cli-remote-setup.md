---
sidebar_position: 2
---

# CLI Remote Setup


### Setup Server

You'll need to setup a server that run in the cloud. There are many options available including Digital Ocean and AWS.

> Note: this tutorial is basic and assumes you have some knowledge of Linux and SSH

This tutorial will not go into depth on the platform specifics for setting up your account with your preferred provider but we recommend using `Ubuntu 22.04`

You'll also want to be sure to open port `3338` (for validating) and port `22` (for SSH) on your firewall / security settings.



### Logging In

Once your server is booted, you can ssh into it using the following command:
```
ssh {{username}}@{{ip_address}}
```
>> replace `{{username}}` with the server's default username (usually `root`) and `ipaddress` with the server's public IP address

### Building RBX Core from scratch

The instructions for building from scratch can be found [here](./cli-build-instructions). To get up an running quicker, continue to the next step now.


### Download and Unzip RBX Core

```
wget https://github.com/ReserveBlockIO/ReserveBlock-Core/releases/download/beta2.3/rbx-corecli-linux-x64.zip
unzip rbx-corecli-linux-x64.zip
cd rbx-corecli-linux-x64
chmod +x ReserveBlockCore

```
### Starting RBX Core
```
screen -S wallet
./ReserveBlockCore
```
> use `ctrl+a ctrl+c` to leave the screen session while keeping it running the the background

> to enter again, type `screen -ls` and note the screen id. Then enter `screen -R {ID_OF_SCREEN}`

