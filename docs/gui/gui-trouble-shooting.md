---
sidebar_position: 6
---

# GUI Troubleshooting

This guide will help you debug common problems and should be reviewed before requesting support on Discord.

## Startup

### The GUI has a message "CLI Loading..." but never loads.

Generally, this means the CLI is having trouble starting. This usually happens if the CLI is already running.
The first thing you should try is simply restarting your computer and then relaunching the GUI. This will eliminate the possibility of a rogue CLI process running.

### I restarted, but I'm still having this problem.

You may have a corrupt database file. Ensure your private keys(s) are backed up, the follow these steps:

1. Close your wallet.

2. Ensure ReserveBlockCore is not running. You can either:

    a. Restart your computer AGAIN

    b. Check your Task Manager (Windows) or Activity Monitor (MacOS) for a process called ReserveBlockCore and end it. Please note that this is a background process and you may need to switch to the advanced mode. If you are not familiar with how to do this, use option `a` above instead.

3. Navigate to your RBX Folder

    a. Windows: This will be located in `C:\Users\{username}\AppData\Local`. Note, you may need to enable `Hidden Files` to see the AppData folder in your user directory.

    b. MacOS: This will be located in `/Users/{username}`.

4. Delete the folder called `RBX`.

5. Launch your GUI.

### Could be a permission issue (Windows)

On some versions of windows, you may run into permission problems with the core CLI launching the API. To solve this issue you'll want to set both the GUI and the CLI to run as adminstrator:

1. Navigate to `C:\Program Files (x87)\RBXWallet\`

2. Right click on `RBXWallet.exe` and choose `Properties`
> If you don't see `RBXWallet.exe` it's likely because you don't have extensions visible on your machine. Instead, just look for `RBXWallet`.

3. Go to the compatability tab and click `Change settings for all users`

4. Enable the checkbox for `Run this program as administrator` and click OK, and then OK again.

5. Navigate into the `RBXCore` folder and repeat the same step for `ReserveBlockCore.exe`
> If you don't have hidden files enabled, you will see three files called `ReserveBlockCore`. You'll want to use the one that has the RBX cube icon.

6. Then launch the GUI as normal and everything should work as expected.

### It's still not working.

We've determined it is not due to a rogue process nor a corrupted database. What we'll try next is seeing if we can manually launch the CLI.

1. Ensure your wallet is closed and no CLI processes are running (follow instructions above).

2. Launch ReserveBlockCore

    a. Windows: navigate to `C:\Program Files (x86)\RBXWallet\RBXCore`. Then, launch `ReserveBlockCore.exe`. Note: you may not see `.exe` depending on your Windows' settings.

    b. MacOS: navigate to `/Applications` and right click on `RBXWallet.app` and then choose `Show Package Contents`. Open up `Contents > Resources > RBXCore` and then launch `ReserveBlockCore`.

3. You should see the CLI booting up and blocks coming in. If an error message occurs, check the following:

    a. You are on latest version

    b. Your disk space is not low (be sure you have at least 10GB of free space on your primary drive)

    c. Note: if the terminal window just launches and disappears, it likely means you already have the CLI running. Restart your computer.

4. If there are no errors, type in `10` and press enter which will enable the API.

5. Visit this URL in your web browser: `http://localhost:7292/api/V1/CheckStatus`. 

6. You should see `Online` in your web browser. 

    a. If you do not, please reach out to the Support Channel on Discord.
    
    b. If you do, you should be able to launch your GUI now.

7. If your GUI did launch successfully, the best thing to try now is closing your GUI (which will also end the CLI session) and then relaunching the GUI. If it doesn't start up this time, please reach out to the Support Channel on Discord.  
    

## Incorrect Balance

Usually this is because you haven't reached the local block height where the transaction occurred. Compare your local block height to the [Network Explorer](https://rbx.network).

It's also possible you haven't imported the correct key(s). Double check those.

In the case that it's still off, sometimes a state trei rebuild can help. You'll need to force quit `ReserveBlockCore` in your Task Manager (Windows) or Activity Monitor (MacOS) and then close the GUI. Restart the GUI and the state trei will rebuild.

## I imported a snapshot and lost my keys

As mentioned during the snapshot import process, you must backup your keys before proceeed as this process wipes your entire RBX folder. Luckily, a backup was created. 

1. Close your wallet.

2. Navigate to your RBX folder and there will be a sibling folder to it called `RBX_BACKUP_{timestamp}`. 

3. You can simply delete the current `RBX` folder and then rename the backup one to `RBX`.

4. Relaunch wallet and you will see your keys. Back them up then, if you'd like to proceed with the snapshot import, close your wallet, delete the RBX folder, and then relaunch.


:::note TIP
**Not seeing the answer your looking for? Just ask the community!**
> <a href="https://discord.com/invite/PnS2HRETDh">Join Discord</a>
:::