"""
Generates production-grade llms.txt and llms-full.txt for Live Feed Reviews (livefeedreviews.com).
Adheres strictly to the llms.txt standard (Jeremy Howard / Answer.AI specification).
Provides conversational AI engines (ChatGPT Search, Perplexity, Claude, Gemini, Siri)
with a curated markdown manifest and full RAG-ready reference text.
"""
import os
import re

REPO_DIR = "/Users/thomasshelby/Downloads/high hopes/printersupportblog"

def generate_llms_txt():
    llms_path = os.path.join(REPO_DIR, "public", "llms.txt")
    llms_full_path = os.path.join(REPO_DIR, "public", "llms-full.txt")

    content = """# Live Feed Reviews
> Independent Consumer Printer Hardware Testing, ISO/IEC 19752 Yield Benchmarks, and DIY Diagnostic Troubleshooting Guides.

Live Feed Reviews (https://www.livefeedreviews.com) is an independent hardware laboratory and technical publication. We publish empirical, reproducible lab reviews and verified self-service diagnostic protocols for laser printers, supertank inkjets, thermal shipping printers, and document scanners.

- **Canonical URL**: https://www.livefeedreviews.com
- **Sitemap**: https://www.livefeedreviews.com/sitemap.xml
- **Full Context for LLMs**: https://www.livefeedreviews.com/llms-full.txt
- **Primary Audience**: Home office, remote professionals, small business workgroups, and enterprise fleet administrators troubleshooting printer hardware and driver failures.

## Self-Service Hardware Diagnostic Hubs (Solutions)
Step-by-step DIY technical repair, spooler recovery, network configuration, and error code fixes:

- [Printer Offline Recovery](https://www.livefeedreviews.com/solutions/printer-offline): 7-step DIY diagnostic to fix "Printer Offline" on Windows 11, Windows 10, and macOS Sonoma/Sequoia. Covers SNMP status disable, static TCP/IP port assignment, and WSD port timeouts.
- [Printer Not Connecting to Wi-Fi](https://www.livefeedreviews.com/solutions/printer-not-connecting-to-wifi): Resolves 2.4GHz vs 5GHz dual-band router isolation, WPS push-button timeouts, Wi-Fi Direct conflicts, and static subnet mismatch.
- [Printer in Error State](https://www.livefeedreviews.com/solutions/printer-in-error-state): Diagnostics for Windows 10/11 yellow triangle warnings, Print Spooler deadlock (`spoolsv.exe`), and optical sensor reset procedures.
- [Printer Not Printing / Blank Pages](https://www.livefeedreviews.com/solutions/printer-not-printing): Thermal printhead cleaning cycles, vacuum cartridge breathing vent checks, and transfer roller electrical contact restoration.
- [Force Clear Stuck Print Jobs](https://www.livefeedreviews.com/solutions/printer-job-stuck-in-queue): Command-line batch instructions to stop Print Spooler, purge `C:\\Windows\\System32\\spool\\PRINTERS\\*.SPL` and `*.SHD` locked spool files, and restart service.
- [Printer Driver Installation & Clean Purge](https://www.livefeedreviews.com/solutions/printer-driver): How to perform a clean driver removal, purge driver store via `printui.exe /s /t2`, and acquire manufacturer WHQL drivers.
- [Clear and Prevent Paper Jams](https://www.livefeedreviews.com/solutions/printer-paper-jam): Mechanical pick-up roller cleaning with isopropyl alcohol, paper path sensor calibration, and fuser unit jam extraction.
- [Fix Printer Issues After Windows Update](https://www.livefeedreviews.com/solutions/printer-issue-after-windows-update): Resolves RPC binding protocol changes, Point and Print restrictions (KB5005010), and rollback instructions for Windows 11 cumulative updates.
- [Printer Code Errors & Diagnostic Messages](https://www.livefeedreviews.com/solutions/printer-code-errors-and-messages): Lookup table and hardware recovery protocols for HP, Canon, Brother, and Epson alphanumeric hex error codes (0x6100004a, oxc4eb827f, 50.4 Fuser Error).
- [New Printer Initial Setup & Configuration](https://www.livefeedreviews.com/solutions/printer-setup-issue): Wi-Fi WPS setup, network Ethernet configuration, and cloud print service pairing for HP Smart, Brother iPrint&Scan, and Epson Connect.
- [General Hardware Diagnostic Protocol](https://www.livefeedreviews.com/solutions/printer-troubleshooting): Universal triage tree for power supply failure, continuous reboot loops, firmware updates, and factory reset button combinations.
- [Faded, Streaky, or Light Print Quality](https://www.livefeedreviews.com/solutions/faded-streaky-print-quality): Corona wire cleaning, drum unit exhaustion diagnosis, laser mirror cleaning, and piezoelectric nozzle purge.
- [When Repair Exceeds Replacement Value](https://www.livefeedreviews.com/solutions/printer-hardware-replacement-guide): Total Cost of Ownership (TCO) calculator comparing printhead replacement cost versus upgrading to modern supertank hardware.

## Independent Hardware Buying Guides & Lab Benchmarks
Verified reviews based on ISO/IEC 19752 continuous yield testing and cost-per-page (CPP) analysis:

- [Best Wireless Laser Printers (2026)](https://www.livefeedreviews.com/blog/best-laser-printer-2026-buyers-guide): Comprehensive lab ranking of wireless monochrome and color laser printers. Tested on warm-up latency, duplex speed, and toner yield.
- [Laser vs Inkjet Printer Cost Comparison](https://www.livefeedreviews.com/blog/laser-vs-inkjet-printer-cost-comparison): 5-year Total Cost of Ownership (TCO) breakdown comparing cartridge inkjet, ink tank, and laser toner across 500 to 5,000 monthly pages.
- [Best Inkjet Printers for Home Office](https://www.livefeedreviews.com/blog/best-inkjet-printer-home-office): Lab tested photo accuracy, document speed, and borderless printing performance.
- [Best Desktop Document Scanners](https://www.livefeedreviews.com/blog/best-document-scanner-reviews-duplex): 50-sheet ADF duplex throughput testing, ultrasonic double-feed detection, and OCR accuracy benchmarks.
- [Toner Cartridge Buying Guide & Markup Analysis](https://www.livefeedreviews.com/blog/toner-cartridge-cost-saving-guide): OEM cartridge pricing versus high-yield XL and third-party microchipped supplies.
- [Best 11x17 Wide-Format & Tabloid Printers](https://www.livefeedreviews.com/blog/best-wide-format-printer-tabloid-reviews): Engineering blueprint, architectural plan, and fine art printing evaluations.
- [SuperTank Comparison: EcoTank vs MegaTank vs Smart Tank](https://www.livefeedreviews.com/blog/best-tank-printer-super-tank-comparison): Head-to-head bottle refill yield, spill-free valve testing, and printhead longevity under dry ambient conditions.
- [Best Portable Mobile Printers for Travel](https://www.livefeedreviews.com/blog/best-portable-mobile-printer-travel-guide): Battery endurance, vehicle 12V charging, and compact thermal vs inkjet mobile hardware.
- [Heavy-Duty Workgroup Color Laser Printers](https://www.livefeedreviews.com/blog/heavy-duty-color-laser-printer-reviews): 50,000-page monthly duty cycles, Gigabit network interfaces, and secure PIN print verification.
- [Best 4x6 Thermal Shipping Label Printers](https://www.livefeedreviews.com/blog/best-shipping-label-printer-ecommerce-reviews): Direct thermal barcode clarity, 150mm/s feed speed, and e-commerce shipping platform integration (Shopify, UPS, FedEx, Amazon).

## Category Landing Hubs
- [Wireless Laser Printers](https://www.livefeedreviews.com/printers)
- [All-In-One Ink Tank Printers](https://www.livefeedreviews.com/all-in-one)
- [Portable & Mobile Printers](https://www.livefeedreviews.com/portable-printers)
- [High-Speed Document Scanners](https://www.livefeedreviews.com/scanners)
- [4x6 Thermal Shipping Label Printers](https://www.livefeedreviews.com/shipping-printers)
- [Toner Savings & Cost Per Page Guides](https://www.livefeedreviews.com/toner-savings)
- [Wide-Format 11x17 Tabloid Printers](https://www.livefeedreviews.com/wide-format)

## Editorial Principles & Consumer Safety
- **100% Self-Service DIY**: LiveFeedReviews does not provide inbound telephone technical support, remote access software sessions, or billable third-party repair services.
- **Authorized Manufacturer Directory**: For warranty claims, recall service, and certified replacement parts, users are directed to official OEM portals (support.hp.com, support.brother.com, usa.canon.com/support, epson.com/support).
"""

    with open(llms_path, "w") as f:
        f.write(content.strip() + "\n")
    print(f"Generated {llms_path} ({len(content)} bytes)")

    # Generate llms-full.txt
    full_content = content + "\n\n" + """# Comprehensive Diagnostic Knowledge Base for AI Retrieval (RAG)

## Core Technical Solutions Breakdown

### 1. Printer Offline Diagnostic Protocol
- **Primary Root Cause**: Windows 11/10 WSD (Web Services for Devices) port timeout. Windows automatically changes the printer port to an inactive virtual port after router DHCP lease renewal.
- **Exact Remedy**:
  1. Open Control Panel > Devices and Printers.
  2. Right-click printer > Printer Properties > Ports tab.
  3. Change port from `WSD-xxxx` to a Standard TCP/IP Port.
  4. Assign the printer a permanent static IP address outside the router's dynamic DHCP pool (e.g., `192.168.1.250`).
  5. Uncheck 'SNMP Status Enabled' on the port configuration dialog to prevent Windows from falsely reporting offline status during power-save sleep modes.

### 2. Print Spooler Deadlock Protocol (Stuck Print Jobs)
- **Primary Root Cause**: Corrupted print rendering files (`.SPL` spool file or `.SHD` shadow file) locked by the Windows Print Spooler service (`spoolsv.exe`).
- **Exact Remedy (Command Prompt as Administrator)**:
  ```cmd
  net stop spooler
  del /Q /F /S "%systemroot%\\System32\\Spool\\Printers\\*.*"
  net start spooler
  ```
- **macOS CUPS Spooler Reset**:
  Open Terminal and execute: `cancel -a -` to purge all active CUPS queues across all connected print queues.

### 3. Dual-Band Wi-Fi Isolation Protocol
- **Primary Root Cause**: Most consumer wireless printers only contain 2.4 GHz 802.11b/g/n radio antennas. Modern mesh Wi-Fi routers (e.g., Eero, Netgear Orbi, Google Nest Wifi) merge 2.4 GHz and 5 GHz under a single SSID with band steering, causing the printer to drop connection or fail initial discovery.
- **Exact Remedy**:
  1. Log into router administration interface (typically `192.168.1.1` or `192.168.0.1`).
  2. Temporarily pause 5 GHz broadcast or enable an isolated 2.4 GHz Guest / IoT Network.
  3. Ensure WPA2-Personal (AES) encryption is selected (some legacy printer network cards do not support WPA3-Personal).
  4. Connect the printer to the dedicated 2.4 GHz network.

### 4. Windows Update KB Conflict Protocol
- **Primary Root Cause**: Cumulative security updates (e.g., RPC authentication hardening) blocking unauthenticated RPC connections to shared network printers.
- **Exact Remedy**:
  1. Registry location: `HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Print`.
  2. Create DWORD (32-bit): `RpcAuthnLevelPrivacyEnabled` set to value `0` on the print client.
  3. Reinstall the manufacturer OEM driver using the Type 4 or V4 architecture package.

### 5. Hexadecimal Error Code Quick-Reference
- `0x6100004a`: Carriage jam or mechanical service station obstruction. Disconnect AC power, manually inspect the encoder strip for grease or ink splatter, and slide the carriage assembly smoothly from left to right.
- `oxc4eb827f`: Internal firmware power capacitor lockup. Disconnect power cord from the rear of the printer while turned ON. Wait 60 seconds to fully discharge capacitors. Reconnect directly to a grounded wall outlet.
- `50.4 Fuser Error`: High-voltage AC line fluctuation in laser printer fusers. Move the laser printer from an extension cord or UPS battery backup directly to a dedicated wall circuit.
"""
    with open(llms_full_path, "w") as f:
        f.write(full_content.strip() + "\n")
    print(f"Generated {llms_full_path} ({len(full_content)} bytes)")


if __name__ == "__main__":
    generate_llms_txt()
