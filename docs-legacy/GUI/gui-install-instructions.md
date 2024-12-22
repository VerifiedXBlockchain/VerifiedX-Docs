---
sidebar_position: 2
---

# GUI Download & Installation Instructions

This is the download and install instructions for the RBXWallet GUI.

## Video Tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/QBhrBN0xhjE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen></iframe>

:::note Important
As of April 2, 2023, 12,000 RBX is the minimum assurance requirement for validating.
:::

## Downloading

Visit this [Github Link](https://github.com/ReserveBlockIO/rbx-wallet-gui/releases/latest) to download the latest install files. Scroll to the bottom of the page and choose the appropriate file.

![](media/gui-download.jpg)

### Windows
> Download the file named `RBXWalletSetup-64.exe` for windows 8, 10, & 11. For Windows 7, download ` RBXWalletSetup-Win7.exe` 

### MacOS
> Download the file named `RBX-OSX-Intel-Installer.dmg` for Intel mac or `RBX-OSX-ARM-Installer.dmg` for ARM (M1/M2) Macs.

---

## Installing

Once downloaded (likely to your `Downloads` folder) you'll need to run the installer. The process is different between Windows and MacOS.

### Windows

1. Double click the installer file. If prompted with an `Unknown Publisher` window, click `Yes` or `Continue`. Note: this prompt varies depending on the version of your Windows. You may see a box that has a link reading `More Info`. If so, click that link to see a `Run Anyway` button. 

> If the installer doesn't launch at all, try right clicking on the icon and choose `Run as administrator`.

2. Follow the prompts by clicking `Next` followed by `Install`.

<img src={require('./media/win-install-1.jpg').default} width="400" />

3. Once the progress bar finishes, you can click `Finish` to automatically run the wallet. 

<img src={require('./media/win-install-2.jpg').default} width="400" />

4. For subsequent launches of the wallet, you will find an icon on your desktop, start menu, and it can be ran from the installed location (`C:\Program Files (x86)\RBXWallet\RBXWallet.exe`).

> If you are having trouble running it, try right clicking on the icon and choose `Run as administrator`.

#### Windows 11 Enterprise
On some versions of windows, you may run into permission problems with the core CLI launching the API. To solve this issue you'll want to set both the GUI and the CLI to run as adminstrator:

1. Navigate to `C:\Program Files (x87)\RBXWallet\`

2. Right click on `RBXWallet.exe` and choose `Properties`
> If you don't see `RBXWallet.exe` it's likely because you don't have extensions visible on your machine. Instead, just look for `RBXWallet`.

3. Go to the compatability tab and click `Change settings for all users`

4. Enable the checkbox for `Run this program as administrator` and click OK, and then OK again.

5. Navigate into the `RBXCore` folder and repeat the same step for `ReserveBlockCore.exe`
> If you don't have hidden files enabled, you will see three files called `ReserveBlockCore`. You'll want to use the one that has the RBX cube icon.

6. Then launch the GUI as normal and everything should work as expected.


### MacOS

1. Double click the installer file which will open a window in the bottom left corner of your screen.

2. Drag the `RBXWallet` application into the `Applications` folder in the window.

<img src={require('./media/mac-install-1.jpg').default} width="400" />

3. Right click on the `Shell` icon (`install`) and then click `Open`. This will launch the RBXWallet application.

4. For subsequent launches of the wallet, you can find it in your `/Applications` folder on your computer.

<img src={require('./media/mac-install-2.jpg').default} width="400" />








