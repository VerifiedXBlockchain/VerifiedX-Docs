---
sidebar_position: 3
---

# CLI Remote Setup


### Setup Server

You'll need to setup a server that run in the cloud. There are many options available including Digital Ocean and AWS.

This tutorial will not go into depth on the platform specifics for setting up your account with your preferred provider but we recommend using `Ubuntu 22.04`

You'll also want to be sure to open port `3338` (for validating) and port `22` (for SSH) on your firewall / security settings.


### Logging In

Once your server is booted, you can ssh into it using the following command:
```
ssh {{username}}@{{ip_address}}
```
>> replace `{{username}}` with the server's default username (usually `root`) and `ipaddress` with


