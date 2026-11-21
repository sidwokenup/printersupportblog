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
    "ratingValue": "4.9",
    "reviewCount": "312"
  },
  "faded-streaky-print-quality": {
    "ratingValue": "4.8",
    "reviewCount": "177"
  },
  "printer-hardware-replacement-guide": {
    "ratingValue": "4.9",
    "reviewCount": "226"
  }
};

export const solutionsFaqs: Record<string, FAQItem[]> = {
  "printer-offline": [
    {
      "question": "Why does my printer say offline when it is powered on and connected?",
      "answer": "Printers report an offline status due to stale network socket bindings, sleeping Wi-Fi adapters, or Windows setting the queue to 'Use Printer Offline'. To resolve this, open Windows Printers & Scanners, click your printer queue, uncheck 'Use Printer Offline', and restart your wireless router and printer simultaneously."
    },
    {
      "question": "How do I turn off 'Use Printer Offline' in Windows 10 and 11?",
      "answer": "Press Windows Key + R, type 'control printers', and hit Enter. Right-click your active printer icon and choose 'See what's printing'. In the queue window, click the 'Printer' menu at the top left and ensure both 'Use Printer Offline' and 'Pause Printing' are completely unchecked."
    },
    {
      "question": "Why does my printer drop offline after changing my router or rebooting?",
      "answer": "Most wireless routers use dynamic DHCP allocation that assigns a new local IP address upon rebooting, breaking existing Windows or Mac port configurations. Assigning a permanent Static IP address or DHCP reservation in your router administrator console permanently prevents this disconnect."
    },
    {
      "question": "How do I get my printer back online on a Mac?",
      "answer": "On macOS, open System Settings > Printers & Scanners. If the printer status displays 'Offline', power cycle the printer, check that both Mac and printer share the same 2.4GHz Wi-Fi network, and if necessary right-click the printer list to select 'Reset printing system...'."
    }
  ],
  "printer-not-printing": [
    {
      "question": "Why is my printer receiving print jobs but not printing anything?",
      "answer": "If print jobs enter the queue and disappear without any paper motion, verify that communication ports match the printer physical connection (Standard TCP/IP or USB virtual port) and verify the Windows Print Spooler service is active and uncorrupted."
    },
    {
      "question": "Why is my printer outputting completely blank pages?",
      "answer": "Blank pages occur when protective shipping pull-tabs remain on cartridge vent holes, ink cartridges are depleted without triggering a low ink warning, printhead nozzles are severely clogged with dried pigment, or the transfer roller has lost electrical contact."
    },
    {
      "question": "Why will my printer print Word files but won't print PDF documents?",
      "answer": "PDF printing failures typically stem from damaged document font embeddings or corrupted PostScript rendering. Open Adobe Acrobat or your PDF reader, navigate to File > Print > Advanced, and select 'Print as Image' to bypass driver interpretation conflicts."
    },
    {
      "question": "What should I do if my printer won't print black ink even with a full cartridge?",
      "answer": "When black ink fails while color prints normally, the black printhead nozzles are clogged or the cartridge breather vent is sealed. Remove the black cartridge, verify the yellow vent strip is peeled off, and perform two consecutive deep cleaning cycles from your printer utility software."
    }
  ],
  "printer-paper-jam": [
    {
      "question": "What causes a ghost paper jam when there is no paper stuck inside?",
      "answer": "Ghost paper jams occur when optical photo-interrupter sensors are obscured by paper dust, toner powder, or microscopic scraps. Clean the internal rubber feed rollers with a lint-free cloth dampened with distilled water and inspect the rear duplexer tray with a flashlight."
    },
    {
      "question": "How do I safely clear a jammed sheet without damaging the internal rollers?",
      "answer": "Always turn off the printer before clearing a jam. Grasp the jammed sheet firmly with both hands and pull slowly in the normal paper path direction. Never yank backwards against feed roller rotation, as this damages internal gear mechanisms."
    },
    {
      "question": "Why does my printer carriage get stuck or produce a carriage jam warning?",
      "answer": "Carriage jams occur when packing tape scraps, dislodged clips, or torn paper fragments block the carriage rail. Unplug power, open the cartridge access bay, and gently glide the print carriage back and forth by hand to verify smooth mechanical motion."
    },
    {
      "question": "What causes a printer to feed multiple sheets at once or fail to pick up paper?",
      "answer": "Multi-sheet feeding or paper slipping happens when the rubber pickup rollers become glazed, dirty, or worn. Clean the pickup rollers with isopropyl alcohol or distilled water, fan paper stacks before loading, and avoid overfilling paper trays."
    }
  ],
  "printer-not-connecting-to-wifi": [
    {
      "question": "Why won't my printer connect to my 5GHz home Wi-Fi network?",
      "answer": "Nearly all consumer wireless printers feature 2.4GHz network chips only. If your router broadcasts a single combined SSID for 2.4GHz and 5GHz, the printer may fail to negotiate. Split your network bands into distinct SSIDs or enable a dedicated 2.4GHz guest network."
    },
    {
      "question": "What does a blinking blue Wi-Fi light on my printer indicate?",
      "answer": "A blinking Wi-Fi LED means the printer is actively broadcasting for connection or attempting to authenticate with the router. If it continues blinking indefinitely, the Wi-Fi security handshake has failed due to an updated router password or MAC address filtering."
    },
    {
      "question": "How do I assign a static IP address to prevent wireless printer disconnects?",
      "answer": "Print a Network Configuration page from your printer display to note its current IP. Open a web browser, enter that IP into the address bar to access the printer Embedded Web Server (EWS), navigate to Network Settings > IPv4, and change DHCP to Manual / Static IP."
    },
    {
      "question": "How do I reconnect my printer to Wi-Fi after changing my router password?",
      "answer": "Navigate to the printer control panel under Network Setup or Wireless Settings, run the 'Wireless Setup Wizard', select your Wi-Fi network SSID, and type your new wireless password. For printers without screens, hold the Wi-Fi and Cancel buttons to reset network defaults."
    }
  ],
  "printer-job-stuck-in-queue": [
    {
      "question": "Why are my print jobs stuck on 'Deleting' in the Windows print queue?",
      "answer": "Jobs become permanently stuck deleting when the Print Spooler process crashes or a locked spool file in Windows cannot be unlinked. To clear it, stop the spooler service, manually empty the spool storage folder, and restart the spooler."
    },
    {
      "question": "How do I stop and restart the Windows Print Spooler service via command line?",
      "answer": "Open Command Prompt as Administrator and run: 'net stop spooler', then 'del /Q /F /S %systemroot%\\System32\\Spool\\Printers\\*.*', followed by 'net start spooler'. This completely purges all locked jobs in seconds."
    },
    {
      "question": "Where are the temporary spool files stored that cause queue freezes?",
      "answer": "Windows stores temporary spool files (.SHD and .SPL) in C:\\Windows\\System32\\spool\\PRINTERS. When these files become corrupted or locked by a crashed print driver, no new print jobs can proceed until this folder is emptied."
    },
    {
      "question": "How do I clear a frozen print queue on macOS?",
      "answer": "On Mac, open System Settings > Printers & Scanners, click your printer, and select 'Open Print Queue'. Click the 'X' button next to stuck jobs. If unresponsive, right-click inside the printer list and select 'Reset printing system...' to rebuild all printing queues."
    }
  ],
  "printer-driver": [
    {
      "question": "What causes the 'Driver is unavailable' error on Windows 10 and Windows 11?",
      "answer": "'Driver is unavailable' means Windows detected the printer hardware but lacks a compatible driver inf file, or an existing driver was corrupted during a system update. Download the full software suite directly from the authentic manufacturer support portal."
    },
    {
      "question": "How do I perform a complete clean uninstallation of a corrupted printer driver?",
      "answer": "Disconnect the printer. Press Windows Key + R, type 'printui /s /t2', and press Enter to open Print Server Properties. Select the corrupted driver and click 'Remove' > 'Remove driver and driver package'. Restart your PC before reinstalling."
    },
    {
      "question": "Can I set up a modern wireless printer without an installation CD or DVD?",
      "answer": "Yes. Modern printers never require an optical installation disc. All verified driver packages and wireless utility software are freely downloadable from official manufacturer support portals, or discoverable via Windows Update and Apple AirPrint."
    },
    {
      "question": "Why does the driver installation freeze or stall during USB device detection?",
      "answer": "Driver installation freezes when the USB cable is plugged in too early before the installer prompts for it, or when third-party antivirus software blocks the background driver inf registration. Disconnect USB, disable antivirus temporarily, and run installer as Administrator."
    }
  ],
  "printer-issue-after-windows-update": [
    {
      "question": "Why did my printer stop responding immediately following a Windows cumulative update?",
      "answer": "Major Windows updates frequently replace verified manufacturer printer drivers with generic Microsoft WSD (Web Services for Devices) drivers, which frequently timeout during network print submission or break RPC spooler protocols (such as error 0x0000011b)."
    },
    {
      "question": "How do I replace the generic Microsoft WSD port with a Standard TCP/IP port?",
      "answer": "Open Devices and Printers, right-click your printer, and select 'Printer Properties'. Click the 'Ports' tab, click 'Add Port', select 'Standard TCP/IP Port', click 'New Port', and enter your printer static local IP address to eliminate WSD polling disconnects."
    },
    {
      "question": "What should I do if a Windows update removed my printer manufacturer scanning utility?",
      "answer": "Windows updates occasionally deregister older TWAIN and WIA scanner drivers. Open Device Manager, locate Imaging Devices, right-click your printer scanner entry, select 'Update driver' > 'Browse my computer for drivers', and point to the manufacturer driver directory."
    },
    {
      "question": "How do I rollback a problematic Windows printer driver update in Device Manager?",
      "answer": "Press Windows Key + X and select Device Manager. Expand 'Print queues', right-click your printer, choose 'Properties', navigate to the 'Driver' tab, and click 'Roll Back Driver' to restore your previously working configuration."
    }
  ],
  "printer-code-errors-and-messages": [
    {
      "question": "What does an alphanumeric 0x or B200 hardware error code signify?",
      "answer": "Alphanumeric error codes (such as 0x6100004a, 0x83c0000a, or Canon B200) indicate firmware halt conditions, power supply abnormalities, or printhead voltage overheating. Unplug the printer power cable from the wall for 15 minutes to reset internal capacitors."
    },
    {
      "question": "How do I clear an 'Ink System Failure' or printhead voltage alert?",
      "answer": "Power off the printer, unplug the cord, and open the cartridge door. Remove all cartridges and the printhead assembly if removable. Inspect gold contact pins for ink buildup, clean gently with a lint-free cloth and distilled water, reseat firmly, and repower."
    },
    {
      "question": "What is a fuser error 50.4 on an enterprise laser printer?",
      "answer": "Error 50.4 signifies an electrical line voltage fluctuation or degraded heating element in the laser printer fuser assembly. Ensure the printer is plugged directly into a wall outlet rather than a UPS or power strip. If persistent, replace the fuser unit."
    },
    {
      "question": "Why does my printer report 'Cartridge Not Recognized' after installing new ink?",
      "answer": "This warning occurs when microchips on the cartridge face are misaligned, smudged with finger oils, or blocked by dynamic firmware DRM updates. Remove the cartridge, wipe chip copper contacts with a dry microfibre cloth, and firmly reinsert until it clicks."
    }
  ],
  "printer-in-error-state": [
    {
      "question": "What does 'Printer in Error State' mean on Windows Devices & Printers?",
      "answer": "'Printer in Error State' is a generic Windows flag indicating that bidirectional printer communication failed. It typically stems from an open access door, paper tray interlock failure, low ink lockout, or stalled spooler port binding."
    },
    {
      "question": "How do I perform a complete 60-second power drain to reset printer logic boards?",
      "answer": "While the printer is turned on, unplug the power cord directly from the back of the device. Unplug the other end from the wall. Hold down the printer power button for 30 seconds to drain residual board capacitance. Wait 60 seconds, reconnect, and turn on."
    },
    {
      "question": "Can a loose access door or misaligned tray trigger an error state?",
      "answer": "Yes. Modern printers feature mechanical micro-switches and optical interlocks on every cartridge door, rear duplexer hatch, and paper tray. Open and firmly reseat every maintenance cover until physical latches audibly engage."
    },
    {
      "question": "Why does my printer enter an error state after a brief paper jam has been cleared?",
      "answer": "When a paper jam occurs, optical paper sensors remain in an active alert state until feed rollers rotate through a full self-test revolution. Lift the scanner lid, clear all paper remnants, close tightly, and press the 'Resume' or 'OK' button to clear the fault."
    }
  ],
  "printer-setup-issue": [
    {
      "question": "Why can't my laptop discover my new wireless printer during initial setup?",
      "answer": "Discovery failures occur when your laptop is connected to a 5GHz Wi-Fi band while the printer resides on 2.4GHz, or if 'Network Discovery' is disabled in Windows Network & Sharing Center. Ensure both devices share the exact same local Wi-Fi frequency."
    },
    {
      "question": "How do I set up my printer on a guest Wi-Fi network or mobile hotspot?",
      "answer": "Guest networks frequently enable 'Client Isolation' (AP Isolation), which blocks connected wireless devices from communicating with one another. To enable printing, you must disable client isolation in your router or connect via Wi-Fi Direct."
    },
    {
      "question": "What is WPS setup and how do I connect using the WPS push button on my router?",
      "answer": "Wi-Fi Protected Setup (WPS) allows password-free pairing. Press the WPS button on your printer control panel until the Wi-Fi light blinks, then press the physical WPS button on your internet router within two minutes to establish a secure link."
    },
    {
      "question": "How do I set up mobile printing from an iPhone or Android device?",
      "answer": "For Apple iOS devices, native AirPrint works automatically once the iPhone connects to the same local Wi-Fi. For Android devices, enable the 'Default Print Service' or install the Mopria Print Service plugin from Google Play Store."
    }
  ],
  "printer-troubleshooting": [
    {
      "question": "What are the primary diagnostic checks when a printer stops responding entirely?",
      "answer": "1) Check physical power connection and wall outlet. 2) Inspect printer control panel for error messages. 3) Verify paper and ink levels. 4) Print an internal self-test report directly from hardware buttons. 5) Restart the host PC and print spooler service."
    },
    {
      "question": "How can I tell if my issue is caused by a hardware failure or a software driver glitch?",
      "answer": "Print an internal hardware self-test or network configuration report directly from the printer control panel with all computer cables disconnected. If the internal test prints crisp text and colors, the hardware is healthy and the fault is software/driver related."
    },
    {
      "question": "Why does my printer produce test pages but fail when printing from web browsers?",
      "answer": "Web browsers use modern sandboxed rendering and hardware acceleration that occasionally miscommunicate with older 32-bit printer drivers. Try printing using the system print dialog (Ctrl + Shift + P on Windows) or save the webpage as a PDF before printing."
    },
    {
      "question": "When is it more cost-effective to replace a printer rather than paying for service repairs?",
      "answer": "If your inkjet printer requires replacement printheads, mainboards, or logic boards exceeding $120 to $150, purchasing a modern ink tank or laser printer with fresh warranty coverage is significantly more economical than paying diagnostic and bench fees."
    }
  ],
  "faded-streaky-print-quality": [
    {
      "question": "Why are my printed photos and documents faded, blurry, or missing horizontal lines?",
      "answer": "Fading and missing lines indicate dried ink clogs inside inkjet printhead nozzles or a worn laser printer OPC drum. Run an automated printhead cleaning cycle from your printer maintenance software, and avoid leaving printers idle for months."
    },
    {
      "question": "How many printhead cleaning cycles should I run before soaking or purging nozzles?",
      "answer": "Never run more than three consecutive cleaning cycles, as each cycle floods the printhead with fresh ink that can foam and worsen clogs. If streaks persist after 3 cycles, let the printer sit idle for 2 hours before attempting a final nozzle test."
    },
    {
      "question": "What causes toner smudging or black vertical streaks down laser printouts?",
      "answer": "Vertical streaks down laser printouts indicate a scratched optical photoconductor (OPC) drum or a leaking waste toner hopper. Smudging that rubs off with your finger indicates a failing fuser heating assembly that cannot melt toner into paper fibers."
    },
    {
      "question": "How do I calibrate and align ink cartridges to fix crooked or overlapping text?",
      "answer": "Open your printer utility software and select 'Printhead Alignment' or 'Align Cartridges'. The printer will produce an alignment test sheet with numbered patterns. Scan the sheet or input the crispest pattern numbers to calibrate printhead timing."
    }
  ],
  "printer-hardware-replacement-guide": [
    {
      "question": "At what repair price point does replacing an inkjet printer become more economical?",
      "answer": "If replacement parts (such as printhead assemblies, power boards, or pump units) exceed 50% to 60% of a replacement machine's retail price\u2014typically around $120 for consumer inkjets\u2014purchasing a new model with a full 1-year warranty is mathematically superior."
    },
    {
      "question": "Can a saturated waste ink absorber pad be cleaned and reset safely at home?",
      "answer": "Yes, waste ink sponges can be removed, washed thoroughly with warm water until clear, and completely dried before reinstallation. However, clearing the software page counter requires specialized manufacturer service reset utility software."
    },
    {
      "question": "What are the typical symptoms of a failing laser printer imaging drum versus toner?",
      "answer": "A depleted toner cartridge produces universally faded, washed-out text across the whole page. A failing or scratched imaging drum produces recurring repeating dots, black lines, ghost images, or background gray haze."
    },
    {
      "question": "Which printer architecture offers the lowest total cost of ownership: laser or ink tank?",
      "answer": "Supertank / EcoTank refillable inkjet printers deliver the lowest operating cost for high-volume color documents (0.3 to 0.8 cents per page). Monochrome laser printers offer the lowest TCO and highest reliability for text-only printing with zero risk of ink drying."
    }
  ]
};
