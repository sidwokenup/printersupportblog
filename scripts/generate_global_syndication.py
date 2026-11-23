"""
Generates global syndication feeds (RSS 2.0, Atom 1.0, JSON Feed 1.1),
IndexNow verification key file, and RFC 9116 security.txt for Live Feed Reviews.
Ensures worldwide automated syndication across news aggregators, feed readers,
AI content scrapers, search indexing engines (Bing/Yandex/Seznam/Naver), and enterprise networks.
"""
import os
import json
import xml.sax.saxutils as saxutils
from datetime import datetime

REPO_DIR = "/Users/thomasshelby/Downloads/high hopes/printersupportblog"
INDEXNOW_KEY = "8f2c3a5e1d7b4e9f0a2c5b7d9e1f3a5b"
BASE_URL = "https://www.livefeedreviews.com"

# Curated publication items combining technical solutions and lab benchmark reviews
ITEMS = [
    {
        "id": f"{BASE_URL}/solutions/printer-offline",
        "url": f"{BASE_URL}/solutions/printer-offline",
        "title": "How to Fix Printer Offline on Windows 11 & macOS: 7-Step DIY Diagnostic",
        "summary": "Step-by-step DIY diagnostic to fix 'Printer Offline' status on Windows 11, Windows 10, and macOS. Resolve WSD port timeouts, assign static IP, and disable SNMP status.",
        "category": "Diagnostics",
        "pubDate_rfc822": "Thu, 19 Nov 2026 00:00:00 GMT",
        "pubDate_iso": "2026-11-19T00:00:00Z"
    },
    {
        "id": f"{BASE_URL}/blog/best-laser-printer-2026-buyers-guide",
        "url": f"{BASE_URL}/blog/best-laser-printer-2026-buyers-guide",
        "title": "2026 Best Laser Printers Buyer's Guide | Expert Tested & Ranked",
        "summary": "Empirical lab benchmarks of top monochrome and color laser printers. Evaluated on warm-up time, duplex print speed, and ISO/IEC 19752 continuous toner yield.",
        "category": "Hardware Reviews",
        "pubDate_rfc822": "Thu, 19 Nov 2026 00:00:00 GMT",
        "pubDate_iso": "2026-11-19T00:00:00Z"
    },
    {
        "id": f"{BASE_URL}/solutions/printer-not-connecting-to-wifi",
        "url": f"{BASE_URL}/solutions/printer-not-connecting-to-wifi",
        "title": "Printer Not Connecting to Wi-Fi: Dual-Band 2.4GHz vs 5GHz Resolution",
        "summary": "Diagnose and fix Wi-Fi connection failures caused by dual-band mesh routers, WPA3 incompatibility, and subnet masking issues.",
        "category": "Diagnostics",
        "pubDate_rfc822": "Wed, 18 Nov 2026 00:00:00 GMT",
        "pubDate_iso": "2026-11-18T00:00:00Z"
    },
    {
        "id": f"{BASE_URL}/blog/laser-vs-inkjet-printer-cost-comparison",
        "url": f"{BASE_URL}/blog/laser-vs-inkjet-printer-cost-comparison",
        "title": "Laser vs Inkjet Printer Cost Comparison: 5-Year TCO Analysis",
        "summary": "Comprehensive 5-year total cost of ownership model comparing laser toner cartridges, traditional inkjets, and refillable ink tank systems.",
        "category": "Cost Analysis",
        "pubDate_rfc822": "Tue, 17 Nov 2026 00:00:00 GMT",
        "pubDate_iso": "2026-11-17T00:00:00Z"
    },
    {
        "id": f"{BASE_URL}/solutions/printer-job-stuck-in-queue",
        "url": f"{BASE_URL}/solutions/printer-job-stuck-in-queue",
        "title": "How to Force Clear Stuck Print Jobs: Command Line Spooler Recovery",
        "summary": "Resolve print spooler deadlock and purge corrupt .SPL and .SHD files in Windows System32 without rebooting.",
        "category": "Diagnostics",
        "pubDate_rfc822": "Mon, 16 Nov 2026 00:00:00 GMT",
        "pubDate_iso": "2026-11-16T00:00:00Z"
    },
    {
        "id": f"{BASE_URL}/blog/best-tank-printer-super-tank-comparison",
        "url": f"{BASE_URL}/blog/best-tank-printer-super-tank-comparison",
        "title": "Best SuperTank Printers: EcoTank vs MegaTank vs Smart Tank (2026)",
        "summary": "Head-to-head bottle refill yield, spill-free valve testing, and printhead longevity under dry ambient conditions.",
        "category": "Hardware Reviews",
        "pubDate_rfc822": "Sun, 15 Nov 2026 00:00:00 GMT",
        "pubDate_iso": "2026-11-15T00:00:00Z"
    },
    {
        "id": f"{BASE_URL}/solutions/printer-driver",
        "url": f"{BASE_URL}/solutions/printer-driver",
        "title": "Printer Driver Clean Purge and Installation Protocol (printui.exe)",
        "summary": "Complete removal of corrupt driver store packages using printui.exe /s /t2 and clean installation of manufacturer WHQL drivers.",
        "category": "Diagnostics",
        "pubDate_rfc822": "Sat, 14 Nov 2026 00:00:00 GMT",
        "pubDate_iso": "2026-11-14T00:00:00Z"
    },
    {
        "id": f"{BASE_URL}/blog/best-document-scanner-reviews-duplex",
        "url": f"{BASE_URL}/blog/best-document-scanner-reviews-duplex",
        "title": "Best Desktop Document Scanners: 50-Sheet Duplex & OCR Accuracy",
        "summary": "Lab throughput benchmarks for high-speed document scanners with ultrasonic double-feed detection and searchable PDF workflows.",
        "category": "Hardware Reviews",
        "pubDate_rfc822": "Fri, 13 Nov 2026 00:00:00 GMT",
        "pubDate_iso": "2026-11-13T00:00:00Z"
    },
    {
        "id": f"{BASE_URL}/solutions/printer-paper-jam",
        "url": f"{BASE_URL}/solutions/printer-paper-jam",
        "title": "Clear and Prevent Paper Jams: Roller Maintenance and Sensor Cleaning",
        "summary": "Physical recovery protocol for pickup roller glazing, optical sensor dust accumulation, and accordion paper crinkle in fuser assemblies.",
        "category": "Diagnostics",
        "pubDate_rfc822": "Thu, 12 Nov 2026 00:00:00 GMT",
        "pubDate_iso": "2026-11-12T00:00:00Z"
    },
    {
        "id": f"{BASE_URL}/blog/best-shipping-label-printer-ecommerce-reviews",
        "url": f"{BASE_URL}/blog/best-shipping-label-printer-ecommerce-reviews",
        "title": "Best 4x6 Thermal Shipping Label Printers for E-Commerce (2026)",
        "summary": "Lab evaluation of 203 DPI vs 300 DPI direct thermal printers for high-speed shipping labels on Shopify, UPS, FedEx, and Amazon.",
        "category": "Hardware Reviews",
        "pubDate_rfc822": "Wed, 11 Nov 2026 00:00:00 GMT",
        "pubDate_iso": "2026-11-11T00:00:00Z"
    }
]

def generate_rss_xml():
    lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
        '  <channel>',
        '    <title>Live Feed Reviews - Independent Printer Hardware Benchmarks &amp; Diagnostics</title>',
        f'    <link>{BASE_URL}</link>',
        '    <description>Empirical lab benchmarks, ISO/IEC 19752 yield testing, and verified self-service diagnostic troubleshooting guides for consumer printers.</description>',
        '    <language>en-us</language>',
        f'    <atom:link href="{BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />',
        '    <lastBuildDate>Thu, 19 Nov 2026 00:00:00 GMT</lastBuildDate>',
        '    <image>',
        f'      <url>{BASE_URL}/logo.png</url>',
        '      <title>Live Feed Reviews</title>',
        f'      <link>{BASE_URL}</link>',
        '    </image>'
    ]

    for item in ITEMS:
        title = saxutils.escape(item["title"])
        desc = saxutils.escape(item["summary"])
        lines.append('    <item>')
        lines.append(f'      <title>{title}</title>')
        lines.append(f'      <link>{item["url"]}</link>')
        lines.append(f'      <guid isPermaLink="true">{item["id"]}</guid>')
        lines.append(f'      <description>{desc}</description>')
        lines.append(f'      <category>{item["category"]}</category>')
        lines.append(f'      <pubDate>{item["pubDate_rfc822"]}</pubDate>')
        lines.append('    </item>')

    lines.append('  </channel>')
    lines.append('</rss>')
    rss_path = os.path.join(REPO_DIR, "public", "feed.xml")
    with open(rss_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")
    print(f"Generated {rss_path} ({len(lines)} lines)")


def generate_atom_xml():
    lines = [
        '<?xml version="1.0" encoding="utf-8"?>',
        '<feed xmlns="http://www.w3.org/2005/Atom">',
        '  <title>Live Feed Reviews</title>',
        '  <subtitle>Independent Printer Hardware Benchmarks and DIY Diagnostics</subtitle>',
        f'  <link href="{BASE_URL}/atom.xml" rel="self" />',
        f'  <link href="{BASE_URL}" />',
        f'  <id>{BASE_URL}/</id>',
        '  <updated>2026-11-19T00:00:00Z</updated>',
        '  <author>',
        '    <name>Live Feed Reviews Editorial Lab</name>',
        f'    <uri>{BASE_URL}</uri>',
        '  </author>'
    ]

    for item in ITEMS:
        title = saxutils.escape(item["title"])
        summary = saxutils.escape(item["summary"])
        lines.append('  <entry>')
        lines.append(f'    <title>{title}</title>')
        lines.append(f'    <link href="{item["url"]}" />')
        lines.append(f'    <id>{item["id"]}</id>')
        lines.append(f'    <updated>{item["pubDate_iso"]}</updated>')
        lines.append(f'    <summary>{summary}</summary>')
        lines.append(f'    <category term="{item["category"]}" />')
        lines.append('  </entry>')

    lines.append('</feed>')
    atom_path = os.path.join(REPO_DIR, "public", "atom.xml")
    with open(atom_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")
    print(f"Generated {atom_path} ({len(lines)} lines)")


def generate_json_feed():
    feed_data = {
        "version": "https://jsonfeed.org/version/1.1",
        "title": "Live Feed Reviews",
        "home_page_url": BASE_URL,
        "feed_url": f"{BASE_URL}/feed.json",
        "description": "Independent Consumer Printer Hardware Testing, ISO/IEC 19752 Yield Benchmarks, and DIY Diagnostic Troubleshooting Guides.",
        "icon": f"{BASE_URL}/logo.png",
        "favicon": f"{BASE_URL}/icon.png",
        "authors": [
            {
                "name": "Live Feed Reviews Editorial Lab",
                "url": BASE_URL
            }
        ],
        "items": [
            {
                "id": it["id"],
                "url": it["url"],
                "title": it["title"],
                "summary": it["summary"],
                "date_published": it["pubDate_iso"],
                "tags": [it["category"]]
            }
            for it in ITEMS
        ]
    }
    json_path = os.path.join(REPO_DIR, "public", "feed.json")
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(feed_data, f, indent=2)
    print(f"Generated {json_path}")


def generate_indexnow_key():
    key_path = os.path.join(REPO_DIR, "public", f"{INDEXNOW_KEY}.txt")
    with open(key_path, "w", encoding="utf-8") as f:
        f.write(INDEXNOW_KEY + "\n")
    print(f"Generated {key_path}")


def generate_security_txt():
    content = f"""# RFC 9116 Security Policy for Live Feed Reviews
Contact: mailto:security@livefeedreviews.com
Expires: 2027-12-31T23:59:59.000Z
Preferred-Languages: en
Canonical: {BASE_URL}/.well-known/security.txt
Policy: {BASE_URL}/privacy-policy
Acknowledgments: {BASE_URL}/blog
"""
    well_known_dir = os.path.join(REPO_DIR, "public", ".well-known")
    os.makedirs(well_known_dir, exist_ok=True)
    
    wk_path = os.path.join(well_known_dir, "security.txt")
    with open(wk_path, "w", encoding="utf-8") as f:
        f.write(content)
        
    root_path = os.path.join(REPO_DIR, "public", "security.txt")
    with open(root_path, "w", encoding="utf-8") as f:
        f.write(content)
        
    print(f"Generated {wk_path} and {root_path}")


if __name__ == "__main__":
    generate_rss_xml()
    generate_atom_xml()
    generate_json_feed()
    generate_indexnow_key()
    generate_security_txt()
