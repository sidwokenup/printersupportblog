export interface ErrorCodeDetail {
  code: string;
  slug: string;
  brand: "HP" | "Canon" | "Epson" | "Brother";
  title: string;
  metaDescription: string;
  symptoms: string;
  rootCause: string;
  severity: "Medium" | "High" | "Critical";
  timeToFix: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  affectedModels: string[];
  fixSteps: {
    stepNumber: number;
    title: string;
    instruction: string;
    tip?: string;
  }[];
  preventionTips: string;
  parentHub: string;
}

export const curatedErrorCodes: ErrorCodeDetail[] = [
  // --- HP ERROR CODES ---
  {
    code: "0x6100004a",
    slug: "hp-error-0x6100004a",
    brand: "HP",
    title: "How to Fix HP Error 0x6100004a (Carriage Jam DIY Recovery)",
    metaDescription: "Step-by-step diagnostic to clear HP error 0x6100004a. Resolve carriage stalls, clean optical encoder strips, and reset the service station.",
    symptoms: "The print carriage is stuck on the far right service station; loud grinding noises occur during boot, followed by alphanumeric hex error 0x6100004a on the control panel.",
    rootCause: "Mechanical stall in the carriage drive mechanism, dried ink deposits on the service station wiper blades, or greasy buildup on the transparent optical encoder strip.",
    severity: "High",
    timeToFix: "8-10 min",
    difficulty: "Intermediate",
    affectedModels: ["OfficeJet Pro 8600", "OfficeJet Pro 8710", "OfficeJet Pro 9015", "OfficeJet Pro 7740", "ENVY Photo 7855"],
    fixSteps: [
      {
        stepNumber: 1,
        title: "Hard Power Drain Disconnect",
        instruction: "With the printer powered ON, disconnect the AC power cord directly from the rear of the unit. Unplug from the wall outlet. Wait 60 seconds to discharge the high-voltage power board capacitors.",
        tip: "Never pull paper backwards through the feed tray while power is connected."
      },
      {
        stepNumber: 2,
        title: "Inspect Service Station & Carriage Path",
        instruction: "Open the cartridge access door. Manually inspect the far right capping station with a flashlight. Remove any torn paper fragments, bent paper clips, or dried ink accumulations obstructing carriage transit.",
        tip: "If the carriage is locked in the right docking bay, gently push it slightly to the left while turning the main drive gears."
      },
      {
        stepNumber: 3,
        title: "Clean Optical Encoder Strip",
        instruction: "Moisten a lint-free microfiber cloth with 90%+ isopropyl alcohol or distilled water. Gently pinch the thin transparent plastic encoder strip running behind the carriage and wipe from right to left.",
        tip: "Do not pull or detach the encoder strip springs at the chassis anchor points."
      },
      {
        stepNumber: 4,
        title: "Direct Wall Reconnection & Alignment",
        instruction: "Reconnect the power cord directly to a grounded wall outlet (bypass surge protectors). Turn on the printer and allow the carriage to perform its automatic home calibration sequence.",
        tip: "Print a Quality Diagnostic Report to verify alignment."
      }
    ],
    preventionTips: "Avoid using low-grade third-party paper that sheds micro-fibers into the service station gears. Clean the carriage rails semi-annually.",
    parentHub: "printer-code-errors-and-messages"
  },
  {
    code: "0xc4eb827f",
    slug: "hp-error-oxc4eb827f",
    brand: "HP",
    title: "How to Clear HP Error 0xc4eb827f (Firmware Power Lockup)",
    metaDescription: "Fix HP error code 0xc4eb827f on OfficeJet and ENVY printers. Complete firmware capacitor discharge and direct wall circuit restoration.",
    symptoms: "Printer screen turns blue or displays a power icon with flashing lights and hex error 0xc4eb827f. Printer is unresponsive to power button presses.",
    rootCause: "Transient AC voltage spike causing an unexpected logic halt in the embedded system-on-chip (SoC) power management controller.",
    severity: "Critical",
    timeToFix: "5 min",
    difficulty: "Beginner",
    affectedModels: ["ENVY 4520", "ENVY 5055", "OfficeJet 4650", "DeskJet 3755", "OfficeJet Pro 6978"],
    fixSteps: [
      {
        stepNumber: 1,
        title: "Disconnect AC Power at Rear of Unit",
        instruction: "Unplug the power cord from the back of the printer while the printer is in the error state.",
        tip: "Do not press the power button before unplugging."
      },
      {
        stepNumber: 2,
        title: "Remove All Ink Cartridges",
        instruction: "Open the cartridge carriage bay and unseat all ink cartridges. Leave the carriage bay open.",
        tip: "Place cartridges on a clean paper towel with nozzles facing up."
      },
      {
        stepNumber: 3,
        title: "Discharge Logic Board Capacitors",
        instruction: "Press and hold the physical Power button on the front panel for 30 full seconds to bleed residual energy from the mainboard capacitors.",
        tip: "Wait an additional 2 minutes before proceeding."
      },
      {
        stepNumber: 4,
        title: "Power On Without Cartridges",
        instruction: "Plug the printer directly into a wall outlet without surge protectors. Power on. When prompted with 'Missing Cartridges', reseat cartridges one by one.",
        tip: "The printer will rebuild its hardware registration profile."
      }
    ],
    preventionTips: "Always connect high-draw all-in-one printers directly into dedicated wall circuits rather than overloaded power strips.",
    parentHub: "printer-troubleshooting"
  },
  {
    code: "79 Error",
    slug: "hp-error-79-error",
    brand: "HP",
    title: "How to Fix HP LaserJet 79 Error (Print Spooler Deadlock)",
    metaDescription: "Step-by-step fix for HP LaserJet 79 Error. Clear corrupt network spooler files, update firmware, and isolate corrupt PostScript rendering jobs.",
    symptoms: "LaserJet control panel displays '79 Error Turn off then on'. The printer continuously reboots in an endless cycle as soon as network Ethernet is connected.",
    rootCause: "A corrupt PCL or PostScript print job stuck in the network spooler queue or an unhandled exception in the printer's network firmware parser.",
    severity: "High",
    timeToFix: "10 min",
    difficulty: "Intermediate",
    affectedModels: ["LaserJet Pro M402", "LaserJet Pro M404dn", "Color LaserJet Pro M452", "LaserJet Enterprise M506", "LaserJet MFP M428fdw"],
    fixSteps: [
      {
        stepNumber: 1,
        title: "Disconnect Network Cable Immediately",
        instruction: "Unplug the RJ-45 Ethernet cable or disable your Wi-Fi router temporarily. Turn the printer off and back on. If the printer boots normally to Ready state, the issue is an active corrupt network job.",
        tip: "If the error persists with no network cable, the issue is an internal hardware DIMM fault."
      },
      {
        stepNumber: 2,
        title: "Purge Windows Print Spooler Queue",
        instruction: "On all network client PCs, open Command Prompt as Administrator and run: 'net stop spooler', then 'del /Q /F /S %systemroot%\\System32\\Spool\\Printers\\*.*', then 'net start spooler'.",
        tip: "This purges locked .SPL and .SHD spooler rendering files."
      },
      {
        stepNumber: 3,
        title: "Reconnect Network and Reassign Port",
        instruction: "Reconnect the Ethernet cable. Log into the printer's Embedded Web Server (EWS) via its IP address and verify if a firmware update is available.",
        tip: "Disable WSD printing in Windows and use Standard TCP/IP port."
      }
    ],
    preventionTips: "Ensure all client computers use official HP PCL6 or PostScript WHQL drivers instead of generic Windows Point and Print drivers.",
    parentHub: "printer-job-stuck-in-queue"
  },
  {
    code: "0xc18a0106",
    slug: "hp-error-0xc18a0106",
    brand: "HP",
    title: "How to Clear HP Error 0xc18a0106 (Ink System Failure)",
    metaDescription: "Resolve HP 0xc18a0106 ink system failure. Complete purge sequence, cartridge vent cleaning, and printhead pressure recovery.",
    symptoms: "Flashing red exclamation mark with display message 'Ink System Failure 0xc18a0106'. The printer refuses to print or perform diagnostic alignments.",
    rootCause: "Air bubbles locked inside the ink delivery tubes, cartridge breathing vent vacuum lock, or electrical contact oxidation on the modular printhead.",
    severity: "Critical",
    timeToFix: "12 min",
    difficulty: "Intermediate",
    affectedModels: ["Photosmart Premium C309", "Photosmart Plus B209", "OfficeJet 6500", "OfficeJet 7500A", "Photosmart 7520"],
    fixSteps: [
      {
        stepNumber: 1,
        title: "Inspect Cartridge Breathing Vents",
        instruction: "Remove each cartridge and examine the orange vent tape at the top. Ensure the labyrinth air vent channel is 100% uncovered.",
        tip: "Use a straight pin to gently clear dried ink blocking the top air vent hole."
      },
      {
        stepNumber: 2,
        title: "Clean Printhead Copper Contacts",
        instruction: "Remove the modular printhead by lifting the latch lever. Clean the copper electrical contact pads with a lint-free foam swab dipped in distilled water.",
        tip: "Never touch the microscopic nozzle plate with your bare fingers."
      },
      {
        stepNumber: 3,
        title: "Perform System Purge Reset",
        instruction: "Reseat the printhead, lock the latch, reinstall all cartridges, and close the access door. Perform a semi-full factory reset from the Support Menu.",
        tip: "Access Support Menu by pressing Back, Cancel, Back, Back on the touch bezel."
      }
    ],
    preventionTips: "Run at least one color document every 2 weeks to prevent ink drying inside internal manifold tubes.",
    parentHub: "printer-not-printing"
  },
  {
    code: "59.F0",
    slug: "hp-error-59-f0",
    brand: "HP",
    title: "How to Fix HP LaserJet Error 59.F0 (Transfer Alienation Motor)",
    metaDescription: "Step-by-step diagnostic to fix HP Color LaserJet 59.F0 error. Clear transfer alienation flag lockup and reset the fuser drive assembly.",
    symptoms: "Motor spins loudly upon boot, pauses for 3 seconds, then displays '59.F0 Error' on the LCD screen. Printing is halted.",
    rootCause: "The primary transfer roller alienation mechanism (cam) is unable to disengage from the intermediate transfer belt (ITB).",
    severity: "Critical",
    timeToFix: "15 min",
    difficulty: "Advanced",
    affectedModels: ["Color LaserJet Pro M452", "Color LaserJet Pro MFP M477", "Color LaserJet Pro M454", "Color LaserJet Pro MFP M479"],
    fixSteps: [
      {
        stepNumber: 1,
        title: "Remove Intermediate Transfer Belt & Toners",
        instruction: "Power down the unit. Open the front door and remove all 4 toner cartridges. Open the rear door and check if the ITB transfer belt rotates smoothly.",
        tip: "Inspect the white plastic alienation gear on the left side of the ITB cavity."
      },
      {
        stepNumber: 2,
        title: "Test Transfer Roller Alienation Sensor",
        instruction: "Enter the Secondary Service Menu from the control panel. Run the 'Sensor Test' for the alienation flag to verify whether the optical sensor triggers.",
        tip: "Clean the optical photo-interrupter sensor with compressed air."
      },
      {
        stepNumber: 3,
        title: "Reseat Drive Cam Assembly",
        instruction: "Gently turn the drive gear clockwise until the cam clicks into the home neutral position. Reinstall cartridges and power cycle.",
        tip: "If gear teeth are stripped, the alienation motor assembly requires replacement."
      }
    ],
    preventionTips: "Ensure genuine or high-grade toner cartridges with lubricated OPC drive gears are used to prevent gear binding.",
    parentHub: "printer-hardware-replacement-guide"
  },

  // --- CANON ERROR CODES ---
  {
    code: "Support Code B200",
    slug: "canon-support-code-b200",
    brand: "Canon",
    title: "How to Fix Canon Support Code B200 (Printhead Voltage Error)",
    metaDescription: "Diagnostic protocol for Canon Support Code B200. Clear thermal fuse trips, clean printhead electrical contacts, and restore PIXMA printing.",
    symptoms: "Printer stops printing, power and alarm lamps flash alternately 10 times, screen displays 'Support Code B200: A printer error has occurred. Turn off the printer and contact service.'",
    rootCause: "Overheating or abnormal voltage detection on the printhead nozzle array, often triggered by firing ink nozzles dry.",
    severity: "Critical",
    timeToFix: "15 min",
    difficulty: "Intermediate",
    affectedModels: ["PIXMA MX922", "PIXMA MG5520", "PIXMA MG6820", "PIXMA TS9120", "PIXMA PRO-100", "MAXIFY MB2720"],
    fixSteps: [
      {
        stepNumber: 1,
        title: "Power Drain & Cartridge Door Trick",
        instruction: "Unplug the printer completely. Open the top cover. Slide the printhead carriage gently into the middle of the track. Leave the cover open and plug in the power cord.",
        tip: "Turn on the printer. As the carriage begins moving to the left, close the cover before it hits the left stop."
      },
      {
        stepNumber: 2,
        title: "Clean Printhead Electrical Contacts",
        instruction: "Remove the printhead assembly. Inspect the rear gold contact pins for ink splatter or corrosion. Wipe clean with isopropyl alcohol and dry with a lint-free cloth.",
        tip: "Inspect for any burnt or blackened microscopic traces on the contact board."
      },
      {
        stepNumber: 3,
        title: "Soak Printhead in Warm Distilled Water",
        instruction: "If nozzles are clogged with dried pigment, place the bottom 2mm of the printhead in a shallow dish of warm distilled water for 15 minutes. Dry thoroughly before reinstallation.",
        tip: "Ensure printhead is 100% dry before reconnecting electrical power."
      }
    ],
    preventionTips: "Never print when ink levels indicate empty. Running thermal nozzles dry causes permanent electrical burnout of the micro-resistors.",
    parentHub: "printer-not-printing"
  },
  {
    code: "Support Code 5100",
    slug: "canon-support-code-5100",
    brand: "Canon",
    title: "How to Clear Canon Support Code 5100 (Carriage Error)",
    metaDescription: "Fix Canon Support Code 5100. Step-by-step optical encoder strip cleaning, carriage track lubrication, and foreign object removal.",
    symptoms: "The power and alarm lamps flash alternately 2 times. The printer LCD displays 'Support Code 5100 Printer error has occurred.'",
    rootCause: "The optical carriage sensor cannot verify carriage position due to ink mist on the timing slit strip or physical debris in the carriage rail.",
    severity: "Medium",
    timeToFix: "8 min",
    difficulty: "Beginner",
    affectedModels: ["PIXMA G6020", "PIXMA G7020", "PIXMA TS6420", "PIXMA TR8620", "PIXMA MG3620"],
    fixSteps: [
      {
        stepNumber: 1,
        title: "Clear Physical Obstructions",
        instruction: "Disconnect AC power. Open the scanning unit. Inspect the entire carriage track from left to right using a bright light. Remove any paper scraps, staples, or packing clips.",
        tip: "Check the purge unit maintenance cap on the far right."
      },
      {
        stepNumber: 2,
        title: "Clean the Timing Slit Film (Encoder Strip)",
        instruction: "Locate the thin, clear plastic strip suspended behind the carriage belt. Moisten a cotton swab with distilled water and gently clean any oily smudge or ink mist.",
        tip: "Clean both the front and back of the strip without stretching it."
      },
      {
        stepNumber: 3,
        title: "Reseat Carriage and Reboot",
        instruction: "Manually slide the carriage smoothly to the center, close the cover, and plug in the power cord. Power ON and verify self-test passes.",
        tip: "Ensure the carriage moves freely without binding."
      }
    ],
    preventionTips: "Do not apply heavy WD-40 spray to printer rails; use only synthetic white lithium or silicone grease on sliding metal shafts.",
    parentHub: "printer-paper-jam"
  },
  {
    code: "Support Code 1403",
    slug: "canon-support-code-1403",
    brand: "Canon",
    title: "How to Fix Canon Support Code 1403 (Printhead Recognition Error)",
    metaDescription: "Resolve Canon Support Code 1403. Clean internal cartridge contacts, reseat printhead carriage, and recover PIXMA recognition.",
    symptoms: "Error message 'The type of print head is incorrect. Install the correct print head. Support Code 1403'. Printing cannot proceed.",
    rootCause: "Dirty or oxidized gold contact pads between the printhead board and the carriage bay connector, preventing serial I2C bus communication.",
    severity: "High",
    timeToFix: "10 min",
    difficulty: "Intermediate",
    affectedModels: ["PIXMA MX922", "PIXMA MG5320", "PIXMA iX6820", "MAXIFY MB5120"],
    fixSteps: [
      {
        stepNumber: 1,
        title: "Unseat All Cartridges and Printhead",
        instruction: "Power on the printer, open the top cover, and remove all individual ink tanks. Lift the printhead lock lever and withdraw the printhead assembly.",
        tip: "Inspect the mating spring-pins inside the carriage receiver."
      },
      {
        stepNumber: 2,
        title: "Clean Mating Spring Pins",
        instruction: "Using a dry lint-free cloth or an electrical contact cleaner swab, gently wipe the spring contacts inside the carriage to remove any ink residue.",
        tip: "Verify none of the gold spring pins are bent or recessed."
      },
      {
        stepNumber: 3,
        title: "Reseat and Re-lock Firmly",
        instruction: "Drop the printhead vertically into place. Press the lock lever all the way down until it clicks. Reinsert ink tanks until the red LEDs light up solid.",
        tip: "Close the cover and run a nozzle check print."
      }
    ],
    preventionTips: "Always replace cartridges immediately when removed to prevent ink aerosol from settling onto electrical spring contacts.",
    parentHub: "printer-driver"
  },

  // --- EPSON ERROR CODES ---
  {
    code: "Error 0x97",
    slug: "epson-error-0x97",
    brand: "Epson",
    title: "How to Fix Epson Error 0x97 (Motherboard Power Surge Recovery)",
    metaDescription: "Step-by-step diagnostic to clear Epson Error 0x97 on WorkForce and EcoTank printers. Complete motherboard drain and printhead check.",
    symptoms: "The printer suddenly stops mid-print, cancels the job, turns off, and upon reboot shows 'Printer Error 0x97: Turn the printer off and on again.'",
    rootCause: "An internal thermal overload in the printhead drive transistors or an electrical power surge detected by the motherboard power management circuit.",
    severity: "Critical",
    timeToFix: "10 min",
    difficulty: "Intermediate",
    affectedModels: ["WorkForce WF-3620", "WorkForce WF-3640", "WorkForce WF-7710", "WorkForce WF-7720", "EcoTank ET-2760", "EcoTank ET-3760"],
    fixSteps: [
      {
        stepNumber: 1,
        title: "Hard Power Discharge with Cover Open",
        instruction: "Unplug the power cord while the printer is ON. Unplug all USB and Ethernet cables. Open the scanner lid to check for paper jams.",
        tip: "Leave the printer completely unplugged for a minimum of 15 minutes."
      },
      {
        stepNumber: 2,
        title: "Power Button Static Bleed Cycle",
        instruction: "With the power cord disconnected, press and hold the Power button down continuously for 60 seconds. This drains residual charge from the motherboard capacitors.",
        tip: "Keep holding for the full 60 seconds."
      },
      {
        stepNumber: 3,
        title: "Reboot with Direct Wall Connection",
        instruction: "Plug the power cord back into a wall outlet without power strips or surge suppressors. Power on the printer.",
        tip: "If the error immediately returns, the internal piezoelectric printhead fuse has tripped."
      }
    ],
    preventionTips: "Protect EcoTank and WorkForce printers from ambient heat and ensure proper ventilation around the rear power supply vents.",
    parentHub: "printer-troubleshooting"
  },
  {
    code: "Error 0xEA",
    slug: "epson-error-0xea",
    brand: "Epson",
    title: "How to Fix Epson Error 0xEA (Carriage Lock / Jam Error)",
    metaDescription: "Diagnose and clear Epson Error 0xEA. Clear carriage stops, remove transit packing material, and verify gear synchronization.",
    symptoms: "Loud mechanical clicking on startup, carriage stops abruptly, control panel displays 'Printer Error 0xEA'.",
    rootCause: "A physical shipping lock or transit tape is preventing the printhead carriage from unlocking from its capping station.",
    severity: "Medium",
    timeToFix: "6 min",
    difficulty: "Beginner",
    affectedModels: ["EcoTank ET-2800", "EcoTank ET-2850", "EcoTank ET-4800", "WorkForce Pro WF-4820", "XP-4100"],
    fixSteps: [
      {
        stepNumber: 1,
        title: "Inspect Internal Transit Tape",
        instruction: "Turn off the printer. Lift the scanner assembly. Check for any blue or orange shipping tape left inside during initial unboxing.",
        tip: "Check the underside of the carriage assembly with a flashlight."
      },
      {
        stepNumber: 2,
        title: "Check Auto-Duplexer Bay",
        instruction: "Remove the rear duplexer unit. Check inside the rollers for torn paper corners or debris.",
        tip: "Rotate the duplexer rubber rollers manually to verify free spin."
      },
      {
        stepNumber: 3,
        title: "Reinstall Duplexer and Power Cycle",
        instruction: "Lock the rear duplexer firmly into position until both latches click. Turn the printer back on.",
        tip: "Ensure the paper tray guides fit snugly against your paper stack."
      }
    ],
    preventionTips: "Always remove all interior blue shipping clips and protective foam wedges before initial ink tank charging.",
    parentHub: "printer-setup-issue"
  },
  {
    code: "Error 0x10",
    slug: "epson-error-0x10",
    brand: "Epson",
    title: "How to Fix Epson Error 0x10 (Scanner Mechanism Fault)",
    metaDescription: "Fix Epson Error 0x10. Step-by-step scanner carriage recovery, CIS ribbon cable check, and optical sensor calibration.",
    symptoms: "The scanner unit grinds at the left side of the glass plate, fails to home, and shows 'Scanner Error 0x10' on the display screen.",
    rootCause: "The Contact Image Sensor (CIS) carriage cannot detect its white reference calibration strip on the underside of the glass plate.",
    severity: "High",
    timeToFix: "8 min",
    difficulty: "Intermediate",
    affectedModels: ["EcoTank ET-2720", "EcoTank ET-2750", "WorkForce WF-2830", "WorkForce WF-2850", "XP-7100"],
    fixSteps: [
      {
        stepNumber: 1,
        title: "Inspect Scanner Glass Underside",
        instruction: "Lift the document lid. Look through the glass at the far left edge for dust, haze, or grease on the white calibration strip.",
        tip: "Do not spray glass cleaner directly onto the unit; spray a cloth and wipe."
      },
      {
        stepNumber: 2,
        title: "Check Scanner Ribbon Cable (FFC)",
        instruction: "Slightly raise the scanner housing. Verify that the flat white flexible ribbon cable is seated securely in the mainboard connector.",
        tip: "Ensure the ribbon cable has not been pinched by the hinge mechanism."
      },
      {
        stepNumber: 3,
        title: "Perform Scanner Reset Cycle",
        instruction: "Power down the printer, unplug for 2 minutes, and power back on. Observe if the scanner bar light turns on and slides smoothly.",
        tip: "If the lamp does not illuminate, the CIS module requires replacement."
      }
    ],
    preventionTips: "Never force the scanner lid closed over thick textbooks or objects that could flex the upper glass plate.",
    parentHub: "printer-troubleshooting"
  },

  // --- BROTHER ERROR CODES ---
  {
    code: "Print Unable 32",
    slug: "brother-print-unable-32",
    brand: "Brother",
    title: "How to Clear Brother Error 'Print Unable 32' (Drum Jam Recovery)",
    metaDescription: "Step-by-step diagnostic to fix Brother Print Unable 32. Clear scrap paper in the drum cavity, reset the laser shutter, and resume printing.",
    symptoms: "LCD screen displays 'Print Unable 32: Turn the power off and back on again'. Machine refuses to print any queued documents.",
    rootCause: "A piece of paper or foreign material is lodged inside the internal drum and toner cavity, preventing the drum unit from seating flush against the laser chassis.",
    severity: "Medium",
    timeToFix: "8 min",
    difficulty: "Beginner",
    affectedModels: ["HL-L2350DW", "HL-L2370DW", "MFC-L2710DW", "MFC-L2750DW", "HL-L3210CW", "MFC-L3770CDW"],
    fixSteps: [
      {
        stepNumber: 1,
        title: "Remove Drum and Toner Assembly",
        instruction: "Open the front cover. Pull out the combined drum and toner cartridge assembly completely and place it on a clean sheet of paper.",
        tip: "Do not expose the green drum cylinder to room light for more than 2 minutes."
      },
      {
        stepNumber: 2,
        title: "Inspect Deep Interior Cavity",
        instruction: "Look deep inside the printer cavity with a flashlight. Check the paper feed ramps and the laser shutter window for tiny scraps of torn paper.",
        tip: "Use tweezers if a scrap of paper is wedged in the paper eject sensor."
      },
      {
        stepNumber: 3,
        title: "Separate Toner from Drum Unit",
        instruction: "Press the blue lock lever on the drum unit and remove the toner cartridge. Inspect the green drum surface for paper labels or tape.",
        tip: "Clean the primary corona wire by sliding the green tab back and forth 5 times."
      },
      {
        stepNumber: 4,
        title: "Reseat and Close Cover",
        instruction: "Snap the toner back into the drum unit (the blue lever will lock). Reinstall the entire assembly into the printer and close the front cover.",
        tip: "The printer will perform an internal motor test and return to Ready."
      }
    ],
    preventionTips: "Ensure envelopes or adhesive shipping labels are not loaded through the standard paper tray; use the manual feed slot.",
    parentHub: "printer-paper-jam"
  },
  {
    code: "Print Unable 0B",
    slug: "brother-print-unable-0b",
    brand: "Brother",
    title: "How to Fix Brother Error 'Print Unable 0B' (High Voltage Leak)",
    metaDescription: "Fix Brother Print Unable 0B error. Clean the primary corona wire, inspect drum electrical bias contacts, and clear high-voltage grounding faults.",
    symptoms: "Machine shows 'Print Unable 0B' on the display. Grinding or sparking sound may occur before the message appears.",
    rootCause: "High-voltage electrical leakage on the drum unit corona wire, often caused by conductive toner dust accumulation or high ambient humidity.",
    severity: "High",
    timeToFix: "10 min",
    difficulty: "Intermediate",
    affectedModels: ["MFC-9340CDW", "HL-3170CDW", "MFC-L3750CDW", "HL-L8260CDW", "MFC-L8900CDW"],
    fixSteps: [
      {
        stepNumber: 1,
        title: "Remove All Drum Units",
        instruction: "Turn off the printer. Open the top cover. Remove all 4 color drum and toner units.",
        tip: "Place them on a non-conductive surface away from direct sunlight."
      },
      {
        stepNumber: 2,
        title: "Clean Corona Wires via Green Tabs",
        instruction: "On each drum unit, slide the green tab gently back and forth several times along the length of the corona wire. Return the tab to its home position (arrow alignment).",
        tip: "Failure to lock the green tab in the home position will cause vertical black streaks."
      },
      {
        stepNumber: 3,
        title: "Clean Chassis Grounding Spring Terminals",
        instruction: "Inspect the metal contact springs on the inside chassis wall. Clean off any loose toner with a dry cotton swab.",
        tip: "Do not bend the delicate spring contacts."
      },
      {
        stepNumber: 4,
        title: "Reinstall and Power On",
        instruction: "Reinsert all drum units in their correct color slots. Close the cover and turn on the power switch.",
        tip: "If the error returns, the high-voltage power supply board (HVPS) or drum unit requires replacement."
      }
    ],
    preventionTips: "Vacuum loose toner dust regularly from the drum carriage using a certified HEPA/anti-static toner vacuum.",
    parentHub: "faded-streaky-print-quality"
  },
  {
    code: "Self-Diagnostic",
    slug: "brother-self-diagnostic",
    brand: "Brother",
    title: "How to Fix Brother 'Self-Diagnostic Will Restart' Reboot Loop",
    metaDescription: "Resolve Brother 'Self-Diagnostic Will Restart within 15 Minutes'. Cool down fuser unit, reset thermal thermistors, and recover laser boot.",
    symptoms: "The display shows 'Self-Diagnostic: Will Restart within 15 Minutes'. After 15 minutes, the machine power cycles and repeats the same message indefinitely.",
    rootCause: "The fuser unit halogen lamp or ceramic heating element failed to reach operating temperature within the expected interval, triggering a safety thermal lock.",
    severity: "Critical",
    timeToFix: "15 min",
    difficulty: "Intermediate",
    affectedModels: ["HL-L2300D", "HL-L2320D", "HL-L2340DW", "MFC-L2700DW", "HL-L5100DN", "MFC-L5900DW"],
    fixSteps: [
      {
        stepNumber: 1,
        title: "Unplug and Allow Full 20-Minute Cool Down",
        instruction: "Turn off the power switch. Unplug the power cord from the wall. Leave the printer undisturbed for 20 minutes to allow the fuser thermistor to stabilize at room temperature.",
        tip: "Do not attempt to repeatedly power cycle during this period."
      },
      {
        stepNumber: 2,
        title: "Inspect Fuser Area for Trapped Thick Media",
        instruction: "Open the rear back cover. Check if an oversized envelope or cardstock is jammed between the hot heat roller and pressure roller.",
        tip: "Caution: The fuser unit remains extremely hot for up to 30 minutes."
      },
      {
        stepNumber: 3,
        title: "Execute Fuser Error Maintenance Reset (Code 99)",
        instruction: "For monochrome models: Turn on power while holding the GO button until all LEDs light. Press GO 7 times to enter Maintenance Mode, enter code 99 to reboot and reset fuser safety flags.",
        tip: "If the machine re-triggers the error, the thermal fuse or thermistor requires replacement."
      }
    ],
    preventionTips: "Do not plug heavy laser printers into overloaded extension cords where line voltage drops below 110V AC under load.",
    parentHub: "printer-hardware-replacement-guide"
  }
];
