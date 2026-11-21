export interface FAQItem {
  question: string;
  answer: string;
}

export interface SolutionRating {
  ratingValue: string;
  reviewCount: string;
}

export const solutionsRatings: Record<string, SolutionRating> = {
  "printer-offline": {
    "ratingValue": "4.8",
    "reviewCount": "184"
  },
  "printer-not-printing": {
    "ratingValue": "4.9",
    "reviewCount": "242"
  },
  "printer-paper-jam": {
    "ratingValue": "4.7",
    "reviewCount": "196"
  },
  "printer-not-connecting-to-wifi": {
    "ratingValue": "4.8",
    "reviewCount": "219"
  },
  "printer-job-stuck-in-queue": {
    "ratingValue": "4.8",
    "reviewCount": "163"
  },
  "printer-driver": {
    "ratingValue": "4.9",
    "reviewCount": "278"
  },
  "printer-issue-after-windows-update": {
    "ratingValue": "4.7",
    "reviewCount": "131"
  },
  "printer-code-errors-and-messages": {
    "ratingValue": "4.8",
    "reviewCount": "205"
  },
  "printer-in-error-state": {
    "ratingValue": "4.7",
    "reviewCount": "154"
  },
  "printer-setup-issue": {
    "ratingValue": "4.9",
    "reviewCount": "289"
  },
  "printer-troubleshooting": {
    "ratingValue": "4.8",
    "reviewCount": "172"
  },
  "faded-streaky-print-quality": {
    "ratingValue": "4.7",
    "reviewCount": "148"
  },
  "printer-hardware-replacement-guide": {
    "ratingValue": "4.8",
    "reviewCount": "167"
  }
};

export const solutionsFaqs: Record<string, FAQItem[]> = {
  "printer-offline": [
    {
      "question": "Why does my printer say offline when it is powered on and connected?",
      "answer": "Printers report offline when dynamic DHCP reassigns a new local IP address that the operating system port driver does not know, or when SNMP status checks timeout over a weak Wi-Fi signal."
    },
    {
      "question": "How do I turn off 'Use Printer Offline' in Windows 11 and 10?",
      "answer": "Open Settings > Bluetooth & devices > Printers & scanners. Click your printer, click 'Open print queue', open the 'Printer' menu at the top, and uncheck 'Use Printer Offline'."
    },
    {
      "question": "Why is my printer offline on Mac macOS Sonoma or Sequoia?",
      "answer": "macOS CUPS marks printers offline if AirPrint / Bonjour network broadcasts drop. Open System Settings > Printers & Scanners, right-click the printer list, select 'Reset Printing System', and re-add the device."
    },
    {
      "question": "How can I assign a static IP address to stop my printer from going offline?",
      "answer": "Print a Network Configuration page from your printer menu to locate its MAC address. Log into your home router admin portal (typically 192.168.1.1) and create a permanent DHCP IP reservation for that MAC address."
    },
    {
      "question": "What does 'SNMP Status Enabled' do and why does it cause offline errors?",
      "answer": "Windows uses SNMP to poll printer status. If your router blocks SNMP packets or the printer enters deep sleep, Windows assumes the printer is disconnected. Disabling SNMP in Port Properties often fixes persistent offline flags."
    },
    {
      "question": "Why does my printer go offline after waking from sleep mode?",
      "answer": "Energy-saving firmware states may turn off the internal Wi-Fi adapter. Disable 'Auto-Off' or 'Deep Sleep' in the printer's web configuration dashboard (EWS), or connect via Ethernet if supported."
    },
    {
      "question": "How do I restart the Windows Print Spooler to restore printer communication?",
      "answer": "Press Windows Key + R, type 'services.msc', scroll down to 'Print Spooler', right-click and select 'Restart'. Alternatively, run 'net stop spooler && net start spooler' in an Administrator Command Prompt."
    },
    {
      "question": "Can a USB cable issue make a wired printer appear offline?",
      "answer": "Yes. USB cables longer than 6 feet (2 meters) without active repeaters can suffer voltage drops and data packet corruption. Test with a shorter USB 2.0 High-Speed A-to-B cable directly connected to a motherboard port."
    },
    {
      "question": "What should I do if my printer is offline after a router restart?",
      "answer": "When a router reboots, reconnect the printer to the wireless network via WPS or onboard touchscreen Wi-Fi setup to force it to request a new IP handshake from the router."
    },
    {
      "question": "Why does my HP/Canon/Epson printer show offline in its companion desktop app?",
      "answer": "Companion apps (HP Smart, Canon IJ Network Tool, Epson Connect) use local cloud relays. If the app loses token authentication or local network permission, restart the app and verify both PC and printer are on the same subnet."
    }
  ],
  "printer-not-printing": [
    {
      "question": "Why is my printer receiving print jobs but producing blank pages?",
      "answer": "Blank pages occur when protective shipping tape covers the printhead nozzles, the ink cartridge breather vents are taped shut, or the printhead nozzles are severely clogged. Run an automated cleaning cycle from the maintenance menu."
    },
    {
      "question": "Why won't my printer print PDF files while Word documents print fine?",
      "answer": "PDF rendering engines use complex vector instructions that can overload basic printer memory. In Adobe Acrobat or your browser print dialog, click 'Advanced' and enable 'Print as Image' to rasterize the file before transmission."
    },
    {
      "question": "What causes a printer to stop printing black ink even with a brand new cartridge?",
      "answer": "New cartridges often fail to flow if the yellow pull tab was not removed completely, leaving an internal vacuum. Additionally, dried ink from the previous empty cartridge may require a deep printhead purge cycle."
    },
    {
      "question": "Why does my printer print only the top half of the page?",
      "answer": "Half-page printing is typically caused by insufficient onboard printer RAM when handling high-DPI graphics, an improper page size setting (e.g. Legal instead of Letter), or a corrupted print driver data stream."
    },
    {
      "question": "How do I fix a printer not printing from my iPhone or Android smartphone?",
      "answer": "Verify that your phone and printer are connected to the exact same Wi-Fi frequency (2.4GHz) and not separated by a guest network isolation rule. On iOS use native AirPrint; on Android ensure the Mopria Print Service is enabled."
    },
    {
      "question": "What should I do if my printer stopped printing after a recent Windows update?",
      "answer": "Windows updates frequently replace manufacturer Type-3/Type-4 drivers with generic Microsoft WSD drivers. Remove the printer device from Windows Settings and reinstall the official OEM full software suite."
    },
    {
      "question": "Why won't my printer respond when I press the physical 'Print' or 'Resume' button?",
      "answer": "An unresponsive physical button indicates an internal firmware halt or an active paper sensor interlock failure. Unplug the AC power cord for 60 seconds to discharge logic board capacitors."
    },
    {
      "question": "Can low colored ink prevent black text documents from printing?",
      "answer": "Yes. Many inkjet manufacturers lock the entire printing subsystem if any single color cartridge drops below minimum threshold to prevent empty printhead nozzles from burning up during operation."
    },
    {
      "question": "Why does my print job sit in the queue without reaching the printer?",
      "answer": "This happens when the print queue is paused, the spooler service has stalled, or the port configuration is pointing to an obsolete IP address. Open the queue window, click 'Printer', and ensure 'Pause Printing' is unchecked."
    },
    {
      "question": "How can I print a standalone internal test page directly from the printer?",
      "answer": "Turn on the printer. Depending on the brand, press and hold the 'Power' button while pressing 'Cancel' or 'Resume' twice, or navigate to Setup > Tools > Self-Test Report directly on the LCD touchscreen."
    }
  ],
  "printer-paper-jam": [
    {
      "question": "Why does my printer say paper jam when there is no paper inside?",
      "answer": "This 'ghost jam' is triggered by tiny paper scraps, built-up paper dust, or dried ink on the optical flag sensors. Use a flashlight to inspect the paper path and clean the optical sensors with compressed air."
    },
    {
      "question": "What is the correct way to pull out jammed paper without damaging rollers?",
      "answer": "Always pull jammed paper in the direction of the normal feed path using two hands to apply even pressure. Never pull paper backward against feed rollers, as this can strip plastic gear teeth or bend sensor flags."
    },
    {
      "question": "How do I clean dirty rubber feed rollers that keep slipping and jamming?",
      "answer": "Unplug the printer. Moisten a lint-free microfiber cloth with distilled water (never alcohol, which dries out rubber). Gently rotate and scrub the rubber pickup rollers until grey paper glaze is removed."
    },
    {
      "question": "Why does paper jam specifically in the automatic duplexer (two-sided printing)?",
      "answer": "Duplexers flip paper using tight reversing rollers. Heavy paper stock (over 24lb/90gsm), curled edges, or static cling from laser toner heating will catch on the duplex reversing gate."
    },
    {
      "question": "What causes paper to accordion or crinkle inside the printer?",
      "answer": "Accordion jamming occurs when the leading edge of the sheet strikes an obstruction such as a displaced roller guide, dislodged cartridge clip, or stuck carriage assembly."
    },
    {
      "question": "Can the type or humidity of paper cause frequent printer jams?",
      "answer": "Yes. Paper stored in high-humidity environments absorbs moisture, making it limp and prone to multi-sheet feeding or curling. Store paper in a cool, dry place and fan the ream before loading the tray."
    },
    {
      "question": "What should I do if a carriage jam error appears alongside a paper jam?",
      "answer": "Turn off the printer. Gently slide the printhead carriage across its metal rail from left to right to check for torn paper scraps or foreign objects wedged under the carriage belt."
    },
    {
      "question": "Why does my printer grab multiple sheets of paper at the same time?",
      "answer": "Feeding multiple sheets indicates that the tray separation pad (the small rubber or cork pad beneath the pickup roller) is worn smooth and can no longer generate the friction needed to hold back subsequent sheets."
    },
    {
      "question": "Where are the hidden access doors located to clear stubborn jams?",
      "answer": "Most modern printers feature a rear door, a bottom duplexer panel, and a front cartridge access door. Check all three compartments with a bright LED light when diagnosing persistent jam alerts."
    },
    {
      "question": "How do I reset my printer after clearing a physical paper jam?",
      "answer": "Close all access doors firmly. Press the 'Resume', 'OK', or 'Restart' button. If the error code remains, disconnect the AC power cord for 30 seconds while the doors are closed to reset sensor logic."
    }
  ],
  "printer-not-connecting-to-wifi": [
    {
      "question": "Why won't my printer connect to my 5GHz Wi-Fi home network?",
      "answer": "The vast majority of wireless printers only contain 2.4GHz network interface cards. If your router uses a single combined SSID, split your Wi-Fi into separate 2.4GHz and 5GHz networks, or enable a dedicated 2.4GHz guest network."
    },
    {
      "question": "How do I connect my printer using WPS (Wi-Fi Protected Setup)?",
      "answer": "Press the WPS button on your printer until the Wi-Fi light flashes. Within two minutes, press and hold the physical WPS button on your router for 3 seconds. The light will turn solid once paired."
    },
    {
      "question": "Why does my printer's Wi-Fi light keep blinking blue or amber?",
      "answer": "A blinking Wi-Fi light means the wireless radio is searching for a router signal or failed authentication. Check if your Wi-Fi password was changed or if your router is using WPA3 encryption, which older printers do not support."
    },
    {
      "question": "How do I connect a printer to Wi-Fi if my router does not have a WPS button?",
      "answer": "Use the printer's onboard LCD screen to navigate to Wireless Settings > Wireless Setup Wizard. Select your network name (SSID) from the list and enter your Wi-Fi WPA2 password manually."
    },
    {
      "question": "What should I do if my printer disconnected after I changed my router?",
      "answer": "When you replace your router, perform a 'Restore Network Defaults' on your printer to erase stale network credentials, then rerun the initial wireless setup wizard with your new SSID and password."
    },
    {
      "question": "Why does my printer keep dropping off Wi-Fi every few hours?",
      "answer": "Connection drops are caused by aggressive Wi-Fi power-save modes on the printer or router band-steering attempting to push the printer to 5GHz. Assign a static IP and disable Wi-Fi power saving in the printer's EWS dashboard."
    },
    {
      "question": "Can mesh Wi-Fi systems (Eero, Orbi, Google Nest) cause printer connectivity issues?",
      "answer": "Yes. Mesh nodes often cause printers to repeatedly disconnect as roaming protocols attempt to reassociate the stationary printer with different nodes. Pin the printer's MAC address to the nearest node in your mesh app."
    },
    {
      "question": "What is Wi-Fi Direct and how is it different from normal Wi-Fi?",
      "answer": "Wi-Fi Direct creates a direct point-to-point wireless connection between your device and the printer without needing a router or internet access. It is ideal for printing when local Wi-Fi is unavailable."
    },
    {
      "question": "How can I find my printer's current IP address over Wi-Fi?",
      "answer": "Press the 'Information' (i) or 'Wireless' button on your printer to print a Network Configuration Page, or check the LCD under Network Status. The IPv4 address will appear as 192.168.x.x or 10.0.0.x."
    },
    {
      "question": "Why can't my Windows PC find my wireless printer during setup?",
      "answer": "Windows Network Discovery must be turned on. Open Control Panel > Network and Sharing Center > Advanced sharing settings, and ensure 'Turn on network discovery' and 'file and printer sharing' are enabled."
    }
  ],
  "printer-job-stuck-in-queue": [
    {
      "question": "Why are my print jobs stuck in 'Deleting' status in Windows?",
      "answer": "Jobs freeze in deleting when the spooler service attempts to communicate with an offline or busy printer while simultaneously deleting temporary spool files (.SPL and .SHD), causing a file-lock deadlock."
    },
    {
      "question": "How do I manually force clear the Windows Print Spooler cache?",
      "answer": "Open Command Prompt as Administrator and run: 'net stop spooler', then 'del /Q /F /S %systemroot%\\System32\\Spool\\Printers\\*.*', followed by 'net start spooler'."
    },
    {
      "question": "Why won't a stuck print job cancel from the printer queue window?",
      "answer": "If the print driver is in the middle of a bidirectional data transfer, the graphical cancel command is ignored. Stopping the background spooler service breaks the communication loop and frees the file lock."
    },
    {
      "question": "How do I clear a stuck print queue on macOS?",
      "answer": "Open Terminal and run 'cancel -a -' to cancel all active print jobs. Alternatively, open System Settings > Printers & Scanners, double-click your printer queue, and click the 'X' button next to stuck jobs."
    },
    {
      "question": "Can a single corrupt document block all other users from printing?",
      "answer": "Yes. Print queues operate strictly on a First-In, First-Out (FIFO) basis. If one malformed file halts the spooler, all subsequent print jobs from all connected computers will back up indefinitely."
    },
    {
      "question": "Why does my printer keep reprinting the same stuck job over and over?",
      "answer": "Reprinting loops occur when the printer successfully prints the pages but fails to send the completion acknowledgment packet back to the computer, prompting the spooler to retransmit the job."
    },
    {
      "question": "How do I prevent print jobs from stalling when printing large image files?",
      "answer": "Change the driver spool setting: Open Printer Properties > Advanced tab, and toggle between 'Spool print documents so program finishes printing faster' and 'Print directly to the printer'."
    },
    {
      "question": "What is the difference between pausing a printer and pausing a print job?",
      "answer": "Pausing a specific job halts only that document while letting others pass (if prioritized), whereas pausing the printer stops the entire output queue for all incoming documents."
    },
    {
      "question": "Why does the Windows Print Spooler service keep stopping automatically?",
      "answer": "Spooler crashes are caused by corrupt third-party printer drivers in C:\\Windows\\System32\\spool\\drivers. Remove outdated driver packages using Windows Print Management (printmanagement.msc)."
    },
    {
      "question": "How can I create a one-click desktop shortcut to reset my print queue?",
      "answer": "Create a text file containing: 'net stop spooler & del /Q /F /S %systemroot%\\System32\\Spool\\Printers\\*.* & net start spooler', save it as 'ClearQueue.bat', and run it as Administrator whenever a job freezes."
    }
  ],
  "printer-driver": [
    {
      "question": "What does 'Driver is unavailable' mean on Windows 10 and 11?",
      "answer": "'Driver is unavailable' indicates that Windows has detected the printer hardware but cannot locate a compatible 64-bit driver to communicate with it, often caused by automated OS updates overwriting manufacturer files."
    },
    {
      "question": "How do I perform a completely clean printer driver reinstall?",
      "answer": "Disconnect the printer USB or network connection. Open Settings > Apps > Installed apps and uninstall vendor software. Open Print Management, delete the driver from 'Drivers', reboot, and install fresh OEM software."
    },
    {
      "question": "Should I install the full software suite or the basic driver package?",
      "answer": "For maximum reliability and minimal system overhead, install the basic or PCL6 driver package. The full suite includes scanning utilities and cloud software that can introduce background bloatware."
    },
    {
      "question": "Why won't my old printer work on Windows 11 64-bit?",
      "answer": "Many legacy printers lack native Windows 11 drivers. In most cases, downloading the Windows 10 64-bit driver or installing the generic manufacturer universal print driver (UPD) resolves compatibility."
    },
    {
      "question": "How do I install a printer driver without the original setup CD?",
      "answer": "Never use installation CDs as their bundled drivers are severely outdated. Visit the official manufacturer support portal (e.g. support.hp.com, usa.canon.com) and download the latest software directly."
    },
    {
      "question": "What is the difference between PostScript, PCL5, and PCL6 printer drivers?",
      "answer": "PCL6 is optimized for general office documents and rapid Windows rendering. PostScript (PS) delivers superior color accuracy and vector curve precision for desktop publishing and Adobe applications."
    },
    {
      "question": "Why does my printer driver install freeze at 99% or 'Connecting to device'?",
      "answer": "Installation hangs occur when third-party antivirus firewalls block local port broadcasting or when Windows background update is simultaneously installing generic drivers. Disable antivirus temporarily during setup."
    },
    {
      "question": "How do I install a printer driver on Mac macOS using AirPrint?",
      "answer": "On macOS, connect your printer to the same Wi-Fi network. Go to System Settings > Printers & Scanners > Add Printer (+). Select your printer and ensure 'Use' is set to 'AirPrint' instead of a custom driver."
    },
    {
      "question": "What is a Windows Class Driver and why should I replace it?",
      "answer": "Windows Class Drivers are bare-minimum generic drivers provided by Microsoft. They allow basic printing but lack access to maintenance utilities, ink levels, borderless printing, and duplex controls."
    },
    {
      "question": "How can I roll back a printer driver update that caused printing errors?",
      "answer": "Open Device Manager, expand 'Print queues', right-click your printer, select 'Properties' > 'Driver' tab, and click 'Roll Back Driver' if available."
    }
  ],
  "printer-issue-after-windows-update": [
    {
      "question": "Why did my printer stop working immediately after a Windows 10 or 11 update?",
      "answer": "Windows cumulative updates frequently patch security vulnerabilities in the Windows Print Spooler (such as PrintNightmare patches), breaking network RPC bindings, point-and-print policies, and WSD ports."
    },
    {
      "question": "How do I fix error 0x0000011b or 0x0000007c after a Windows update?",
      "answer": "These errors stem from RPC encryption enforcement over local networks. Create a registry DWORD (32-bit) named 'RpcAuthnLevelPrivacyEnabled' set to '0' under HKEY_LOCAL_MACHINE\\System\\CurrentControlSet\\Control\\Print."
    },
    {
      "question": "How can I switch my printer from a broken WSD port to a Standard TCP/IP Port?",
      "answer": "Open Control Panel > Devices and Printers > Printer Properties > 'Ports' tab. Click 'Add Port', select 'Standard TCP/IP Port', click 'New Port', and enter your printer's static local IP address."
    },
    {
      "question": "Why does my printer show 'Driver is unavailable' right after an update?",
      "answer": "Windows Update may have unlinked the existing driver association. Download the latest manufacturer-signed package and run the installer to rebind the hardware ID to the vendor driver."
    },
    {
      "question": "How do I uninstall a specific Windows update that broke my printer?",
      "answer": "Open Settings > Windows Update > Update history > Uninstall updates. Locate the most recently installed cumulative update (e.g. KB500xxxx) and click 'Uninstall'."
    },
    {
      "question": "Can I prevent Windows Update from automatically updating my printer drivers?",
      "answer": "Yes. Press Windows Key + R, type 'sysdm.cpl', go to the 'Hardware' tab, click 'Device Installation Settings', and select 'No (your device might not work as expected)' to lock driver versions."
    },
    {
      "question": "Why did my shared network printer stop connecting from client computers?",
      "answer": "Client sharing errors after updates occur when the host PC requires administrative credentials for Point and Print. Configure the Point and Print Restrictions policy in Group Policy Editor (gpedit.msc)."
    },
    {
      "question": "What should I do if the Windows Print Spooler service refuses to start after an update?",
      "answer": "A corrupted third-party DLL in C:\\Windows\\System32\\spool\\drivers\\x64\\3 may be crashing the service on boot. Rename the folder to '3.old' in Safe Mode and reinstall the printer software cleanly."
    },
    {
      "question": "Why does my scanner fail to work after a Windows update while the printer still prints?",
      "answer": "Windows updates frequently disable the Windows Image Acquisition (WIA) service. Open Services (services.msc), locate 'Windows Image Acquisition', and set its startup type to 'Automatic'."
    },
    {
      "question": "How do I run the official Windows Printer Troubleshooter?",
      "answer": "Navigate to Settings > System > Troubleshoot > Other troubleshooters, find 'Printer' in the list, and click 'Run' to allow Windows to reset spooler ports and check registry bindings."
    }
  ],
  "printer-code-errors-and-messages": [
    {
      "question": "What does Canon error code B200 mean and how do I fix it?",
      "answer": "B200 indicates a printhead voltage abnormality or overheating. Power down the printer, unplug for 30 minutes, reseat the printhead and cartridges, and power back on. If persistent, the printhead must be replaced."
    },
    {
      "question": "What does HP error 0x6100004a signify?",
      "answer": "HP error 0x6100004a represents a carriage stall or paper feed gear synchronization fault. Clear any paper jams, clean the carriage encoder strip with a dry cloth, and perform a full power drain."
    },
    {
      "question": "What is HP error code 0x83c0000a?",
      "answer": "0x83c0000a is an unhandled firmware exception on HP OfficeJet and Envy models. Disconnect the power cord, remove the Ethernet or disconnect Wi-Fi, power on offline, and update to the latest firmware."
    },
    {
      "question": "What causes HP LaserJet Error 50.4 or 50.x Fuser Errors?",
      "answer": "Error 50 indicates a fuser assembly thermal failure. Error 50.4 specifically points to an AC power line voltage fluctuation. Plug the printer directly into a wall outlet rather than a surge protector strip."
    },
    {
      "question": "What does Epson error 0x97 mean?",
      "answer": "Epson error 0x97 indicates an internal motherboard or printhead circuit failure. Unplug the printer, remove all paper and ink, hold the power button for 60 seconds, and restart. Persistent 0x97 requires hardware service."
    },
    {
      "question": "What does Brother error 'Drum! Slide Green Tab' mean?",
      "answer": "This alert indicates the primary corona wire on the drum unit is dirty with toner dust. Remove the drum unit and slide the green tab back and forth several times, ensuring it snaps back into its home position."
    },
    {
      "question": "What does 'Waste Ink Absorber Full' or 'Service Required' mean?",
      "answer": "Inkjet printers direct waste ink into internal sponge pads. Once internal page count registers saturation, the printer halts to prevent leakage. It requires a counter reset utility and replacement pad felt."
    },
    {
      "question": "What is Error 79 on HP LaserJet printers?",
      "answer": "Error 79 indicates an internal print engine firmware crash, often caused by a corrupt network print job containing malformed PostScript fonts. Clear the print queue and power cycle the printer."
    },
    {
      "question": "Why does my printer display 'Cartridge Not Recognized' on replacement ink?",
      "answer": "Dirty microchip contacts, outdated printer firmware blocking third-party chips, or improper seating cause recognition errors. Clean the copper contacts with a lint-free cloth and isopropyl alcohol."
    },
    {
      "question": "How do I clear error codes that persist after fixing the physical issue?",
      "answer": "Perform a hard factory reset: Turn on the printer, pull the power cord from the wall for 60 seconds, reconnect, and allow the startup diagnostic routine to re-evaluate all onboard sensors."
    }
  ],
  "printer-in-error-state": [
    {
      "question": "What causes a printer to enter an 'Error State' in Windows?",
      "answer": "An error state is triggered when hardware interlock switches detect an unhandled exception\u2014such as an open cover, empty paper cassette, paper jam, unseated cartridge, or corrupt driver communication port."
    },
    {
      "question": "How do I clear 'Printer in Error State' without restarting my computer?",
      "answer": "Check the printer screen for specific hardware warnings. If clear, open Windows Services, restart the 'Print Spooler' service, and verify that the printer USB or network cable is firmly seated."
    },
    {
      "question": "Why does my printer enter an error state every time I print two-sided documents?",
      "answer": "Duplex printing errors occur when the rear duplex unit door is not latched securely or when paper thickness exceeds the specification of the reversing feed rollers."
    },
    {
      "question": "Can outdated printer firmware cause persistent error state notifications?",
      "answer": "Yes. Buggy firmware can fail to send 'ready' signals back to the operating system after waking from sleep mode. Download and install the latest firmware from the manufacturer's support portal."
    },
    {
      "question": "How do I fix an error state caused by a USB connection problem?",
      "answer": "Connect the USB cable directly to a rear motherboard USB 2.0 port instead of a front-panel hub. In Device Manager, expand 'Universal Serial Bus controllers' and disable 'USB selective suspend setting'."
    },
    {
      "question": "What should I do if my printer is in an error state on a wireless connection?",
      "answer": "Print a network diagnostic report to verify signal strength and IP assignment. If the printer is connected to Wi-Fi but Windows shows error state, reinstall the printer using its static IP address."
    },
    {
      "question": "How do microswitch sensor failures cause permanent error states?",
      "answer": "Printers use mechanical microswitches to detect when doors and trays are closed. If a plastic door tab is cracked or a sensor arm is bent, the printer believes a panel is perpetually open."
    },
    {
      "question": "Why does my laser printer show 'Error State' after replacing the toner cartridge?",
      "answer": "Laser toners require the front access door to cycle completely to reset the cartridge interlock. Ensure you removed the protective orange shipping shield and pulled out the sealing tape completely."
    },
    {
      "question": "How do I use Windows Device Manager to troubleshoot printer error states?",
      "answer": "Open Device Manager (devmgmt.msc), expand 'Printers' and 'Print queues'. If a yellow exclamation mark appears next to your printer, right-click and select 'Update driver' or 'Uninstall device'."
    },
    {
      "question": "What is the sequence for a full electrical power drain reset?",
      "answer": "Turn on the printer. Unplug the AC cord from the back of the unit. Unplug from the wall. Wait 60 full seconds. Plug directly into the wall outlet (no surge protector) and reconnect the machine."
    }
  ],
  "printer-setup-issue": [
    {
      "question": "Why can't my laptop discover my new wireless printer during initial setup?",
      "answer": "Ensure your laptop is connected to the 2.4GHz network, as most printers cannot communicate with devices across isolated network bands during discovery. Temporarily disable third-party firewall software."
    },
    {
      "question": "How do I set up a new printer without using the manufacturer companion app?",
      "answer": "Connect the printer to your Wi-Fi router using the onboard screen or WPS button. On Windows, go to Settings > Bluetooth & devices > Printers & scanners > Add device. Windows will automatically detect it over IPP."
    },
    {
      "question": "What should I do if the printer setup software freezes while detecting the printer?",
      "answer": "Connect a standard USB cable temporarily between your computer and printer. Most setup wizards offer a 'Temporary USB Setup' option to transfer your Wi-Fi credentials to the printer."
    },
    {
      "question": "How do I unpack a new printer safely to prevent error codes on initial power-up?",
      "answer": "Carefully inspect the cartridge carriage, paper tray, and scanner bed for bright orange shipping tape, cardboard spacers, and plastic clips. Missing a single piece of packing material causes immediate jams."
    },
    {
      "question": "Why won't my new printer print after installing the included starter ink cartridges?",
      "answer": "Starter cartridges require an automated 10 to 15-minute ink initialization / priming process. Ensure you do not interrupt power or press buttons while the printer primes internal ink delivery tubes."
    },
    {
      "question": "How do I set up a wireless printer on a Mac running macOS Sonoma or Sequoia?",
      "answer": "Power on the printer and connect it to Wi-Fi. On Mac, open System Settings > Printers & Scanners, click 'Add Printer, Scanner, or Fax...', select your printer under the Bonjour list, and select 'AirPrint'."
    },
    {
      "question": "Why does my printer ask for a PIN or admin password during setup?",
      "answer": "Modern printers print an initial setup page containing an 8-digit PIN, or affix it to a sticker inside the cartridge access door or rear serial label. This PIN is required to access the Embedded Web Server (EWS)."
    },
    {
      "question": "Can I set up a wireless printer using an iPhone or iPad?",
      "answer": "Yes. Download the manufacturer app (HP Smart, Canon PRINT, Epson Smart Panel, Brother Mobile Connect), connect to the printer's temporary setup Wi-Fi beacon, and follow on-screen prompts."
    },
    {
      "question": "What should I do if my computer says 'Setup Incomplete' after finishing the wizard?",
      "answer": "Reboot your computer and printer. In Windows, verify that the newly installed printer is set as the default device under Settings > Printers & scanners."
    },
    {
      "question": "How do I configure a static IP during initial printer setup?",
      "answer": "Access the printer's web configuration page by entering its current IP address in a web browser. Navigate to Network > IPv4 Configuration, switch from DHCP to Manual/Static, and save the settings."
    }
  ],
  "printer-troubleshooting": [
    {
      "question": "What is the universal 5-step diagnostic process for any printer problem?",
      "answer": "1. Verify AC power and run a 60-second power drain reset. 2. Inspect the paper path and clean feed rollers. 3. Check ink/toner levels and purge clogged nozzles. 4. Verify network/USB connectivity and IP binding. 5. Clear the OS print spooler and update drivers."
    },
    {
      "question": "How do I tell if a printer problem is hardware-related or computer-related?",
      "answer": "Print a standalone internal report (such as a Configuration Page or Nozzle Check) directly from the printer's physical control panel. If the internal page prints perfectly, the problem lies in your computer, network, or driver."
    },
    {
      "question": "When is it worth repairing a printer versus replacing it?",
      "answer": "If repair costs (e.g. printhead replacement, laser fuser, logic board) exceed 50% of the replacement cost of a comparable new model, replacement is recommended due to warranty and lower page costs."
    },
    {
      "question": "How do I perform a complete factory reset on an HP, Canon, Epson, or Brother printer?",
      "answer": "Access the printer onboard touchscreen menu and navigate to Setup > Tools or Device Settings > Reset > Restore All Factory Defaults. This wipes all network configurations and custom settings."
    },
    {
      "question": "Why does my printer keep making grinding or clicking noises when starting up?",
      "answer": "Grinding sounds indicate that feed roller gears are slipping, the carriage belt is misaligned, or a paper sensor flag is stuck, causing the motor to spin past its physical stop position."
    },
    {
      "question": "How often should printer feed rollers and printheads be cleaned?",
      "answer": "Feed rollers should be wiped down with distilled water every 6 months or whenever paper misfeeds occur. Printheads should only be cleaned when test prints show missing lines or color fading."
    },
    {
      "question": "What causes faint horizontal white lines across every line of printed text?",
      "answer": "Fine horizontal white lines indicate clogged printhead nozzles on inkjet machines or a scratched drum unit / dirty laser polygon mirror on laser printers. Run an automated head cleaning or replace the drum."
    },
    {
      "question": "Why does my laser printer smudge toner across the entire page when touched?",
      "answer": "If toner smudges off the page easily, the fuser assembly is not reaching the required temperature (approx. 380\u00b0F / 190\u00b0C) to melt and bond plastic toner particles into the paper fibers."
    },
    {
      "question": "How can I print from two different computers to one shared printer?",
      "answer": "Connect the printer directly to your Wi-Fi network or router via Ethernet rather than sharing via USB. This allows all workstations on the local network to print independently without host PC dependencies."
    },
    {
      "question": "What tools should I keep on hand for basic printer maintenance?",
      "answer": "A microfiber cloth, distilled water, isopropyl alcohol (for cleaning copper contacts only\u2014never rubber rollers), compressed air, and a small LED inspection flashlight."
    }
  ],
  "faded-streaky-print-quality": [
    {
      "question": "Why are my prints coming out faded, washed out, or missing colors?",
      "answer": "Faded prints are caused by clogged micro-fine printhead nozzles, depleted ink cartridges, incorrect paper type settings in the print driver, or an active 'Draft / Toner Save' economy mode."
    },
    {
      "question": "How do I clean clogged printhead nozzles that won't clear with automated cleaning?",
      "answer": "Remove the printhead assembly if detachable, place the bottom nozzles on a lint-free paper towel moistened with warm distilled water for 10 minutes to dissolve dried ink, dry thoroughly, and reseat."
    },
    {
      "question": "What causes repetitive black or color spots at exact identical intervals down the page?",
      "answer": "Repetitive vertical spots on laser prints indicate a physical scratch or toner spot on the drum unit or fuser roller. Measure the distance between spots: small distances (approx. 30mm) indicate rollers; large (approx. 75mm) indicate drums."
    },
    {
      "question": "Why does my laser printer print faded down one side of the page?",
      "answer": "Uneven fading in laser printers occurs when toner powder has settled unevenly inside the cartridge hopper. Remove the toner cartridge and gently rock it side-to-side horizontally 5-6 times to redistribute powder."
    },
    {
      "question": "How does paper type selection affect print quality and ink bleeding?",
      "answer": "Selecting 'Plain Paper' when printing on glossy photo paper causes excessive ink pooling and smearing. Always match your driver media settings (Glossy, Matte, Cardstock) to the actual physical paper loaded."
    },
    {
      "question": "What causes vertical white streaks through color photos?",
      "answer": "Vertical white streaks mean one entire row of printhead nozzles has ceased firing. Run an automated Nozzle Check pattern to isolate which specific color channel is blocked."
    },
    {
      "question": "How do I run a printhead alignment calibration?",
      "answer": "Open your printer maintenance software or touchscreen menu and select 'Align Printhead'. The printer will produce an alignment sheet; either scan it on the flatbed or select the sharpest box numbers manually."
    },
    {
      "question": "Why do colors look different on paper compared to my computer monitor screen?",
      "answer": "Computer monitors display color using the RGB (Red, Green, Blue) light spectrum, whereas printers mix CMYK (Cyan, Magenta, Yellow, Black) pigments. Color discrepancies are minimized by using manufacturer color profiles (ICC profiles)."
    },
    {
      "question": "What causes black text to look fuzzy or shadowed with a double image?",
      "answer": "Fuzzy or shadowed text indicates bi-directional printhead misalignment or an oily encoder strip. Clean the clear plastic encoder strip behind the carriage with a dry microfiber cloth."
    },
    {
      "question": "When should I replace an imaging drum versus just replacing the toner cartridge?",
      "answer": "Replace the toner when the page is uniformly light or out of powder. Replace the drum unit when you see persistent vertical black lines, background grey hazing, or physical scratches across prints."
    }
  ],
  "printer-hardware-replacement-guide": [
    {
      "question": "How do I know when a broken printer is no longer worth repairing?",
      "answer": "If your inkjet printer needs a printhead, main logic board, or power supply unit costing over $100, repairing is financially unwise compared to modern ink-tank printers that offer $0.002 per page costs."
    },
    {
      "question": "What is the average lifespan of a consumer inkjet vs office laser printer?",
      "answer": "Consumer inkjet printers have an average lifespan of 3 to 5 years (approx. 5,000 to 15,000 pages). Office laser printers typically last 7 to 10+ years and easily exceed 100,000 pages with routine consumable changes."
    },
    {
      "question": "Are ink-tank printers (EcoTank, MegaTank, Smart Tank) worth the higher upfront price?",
      "answer": "Yes. While ink-tank machines cost $200-$350 upfront, replacement ink bottles cost only $12-$15 for 6,000+ pages, saving typical households $300-$500 in cartridge costs over three years."
    },
    {
      "question": "What should I look for when upgrading from an old inkjet to a modern laser printer?",
      "answer": "Prioritize auto-duplex printing, 5GHz / dual-band Wi-Fi support, Gigabit Ethernet, a monthly duty cycle of at least 15,000 pages, and separate drum/toner cartridges for lower running costs."
    },
    {
      "question": "How do I safely dispose of or recycle an old, broken printer?",
      "answer": "Printers are classified as electronic waste (e-waste). Bring your old printer to major retail drop-off centers (such as Best Buy or Staples) for free responsible recycling. Remove all ink cartridges first."
    },
    {
      "question": "Can I transfer unused ink or toner cartridges to a new printer model?",
      "answer": "Rarely. Manufacturers change cartridge microchip designs and physical chassis dimensions between generations. Check the exact model numbers on the cartridge packaging before attempting installation."
    },
    {
      "question": "What are the most reliable printer brands for home office use in 2026?",
      "answer": "Brother leads in monochrome and compact color laser reliability with minimal software bloat. Epson and Canon dominate refillable ink tank technology for low-cost, high-volume color printing."
    },
    {
      "question": "Why are cartridge subscription plans (like HP Instant Ink) controversial?",
      "answer": "While subscription plans can lower page costs for high-color users, cartridges stop functioning immediately if the subscription is canceled\u2014even if they are still full of ink."
    },
    {
      "question": "How do I calculate the True Cost of Ownership (TCO) before buying a new printer?",
      "answer": "TCO = Purchase Price + (Expected Total Pages &times; Cost Per Page) + Maintenance Consumables. An inexpensive $60 printer with $0.20/page ink costs far more after 2,000 pages than a $250 tank printer with $0.003/page ink."
    },
    {
      "question": "What features should small business owners prioritize in a multifunction workhorse?",
      "answer": "Look for single-pass two-sided automatic document feeding (DADF), 250+ sheet high-capacity paper trays, PCL6/PostScript emulation for network compatibility, and robust warranty coverage."
    }
  ]
};
