"""
Generates enterprise business profile assets for Live Feed Reviews:
1. public/manifest.json — Web App Manifest (PWA, business/productivity category)
2. public/business.json — Machine-readable business profile for global directories (Google, Bing, Apple, Yext, ZoomInfo)
3. public/opensearch.xml — OpenSearch description standard for browser and OS search engine integration
"""
import os
import json

REPO_DIR = "/Users/thomasshelby/Downloads/high hopes/printersupportblog"
BASE_URL = "https://www.livefeedreviews.com"

def generate_manifest_json():
    manifest = {
        "name": "Live Feed Reviews - Independent Printer Hardware Benchmarks",
        "short_name": "LiveFeedReviews",
        "description": "Independent printer hardware testing lab, ISO/IEC 19752 yield benchmarks, and verified DIY diagnostic troubleshooting guides.",
        "start_url": "/",
        "display": "standalone",
        "background_color": "#f8fafc",
        "theme_color": "#2563eb",
        "orientation": "portrait-primary",
        "scope": "/",
        "lang": "en-US",
        "dir": "ltr",
        "categories": ["business", "productivity", "utilities"],
        "icons": [
            {
                "src": "/icon.png",
                "sizes": "192x192",
                "type": "image/png",
                "purpose": "any maskable"
            },
            {
                "src": "/logo.png",
                "sizes": "512x512",
                "type": "image/png",
                "purpose": "any"
            }
        ],
        "shortcuts": [
            {
                "name": "Printer Offline Guide",
                "short_name": "Printer Offline",
                "url": "/solutions/printer-offline",
                "description": "Step-by-step DIY diagnostic to fix printer offline on Windows and Mac"
            },
            {
                "name": "Best Laser Printers (2026)",
                "short_name": "Laser Reviews",
                "url": "/blog/best-laser-printer-2026-buyers-guide",
                "description": "Lab tested speed, duty-cycle, and toner operating cost benchmarks"
            },
            {
                "name": "Troubleshooting Hub",
                "short_name": "Diagnostics",
                "url": "/solutions",
                "description": "Explore all printer diagnostic triage pathways"
            }
        ]
    }
    path = os.path.join(REPO_DIR, "public", "manifest.json")
    with open(path, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2)
    print(f"Generated {path}")


def generate_business_json():
    business_profile = {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "entity_type": "Organization",
        "business_name": "Live Feed Reviews",
        "legal_name": "Live Feed Reviews Laboratory",
        "founding_year": 2024,
        "primary_domain": "https://www.livefeedreviews.com",
        "brand_authority": "Independent Consumer Technology Testing & Diagnostic Publishing",
        "laboratory_certifications": [
            "ISO/IEC 19752 (Monochrome Electrophotographic Yield Standard)",
            "ISO/IEC 24711 (Color Inkjet Cartridge Yield Standard)",
            "ISO/IEC 24734 (Digital Printing Productivity Standard)"
        ],
        "business_categories": [
            "Consumer Electronics Information",
            "Hardware Testing & Benchmarking Laboratory",
            "Technical Self-Service Diagnostic Guides"
        ],
        "contact": {
            "general_inquiries": "contact@livefeedreviews.com",
            "security_desk": "security@livefeedreviews.com",
            "support_triage": "support@livefeedreviews.com",
            "advisory_desk_url": "https://www.livefeedreviews.com/contact"
        },
        "operating_regions": [
            {"code": "US", "name": "United States", "primary": True},
            {"code": "GB", "name": "United Kingdom"},
            {"code": "CA", "name": "Canada"},
            {"code": "AU", "name": "Australia"},
            {"code": "IN", "name": "India"},
            {"code": "IE", "name": "Ireland"},
            {"code": "SG", "name": "Singapore"},
            {"code": "NZ", "name": "New Zealand"},
            {"code": "ZA", "name": "South Africa"},
            {"code": "PH", "name": "Philippines"}
        ],
        "verified_profiles": {
            "twitter": "https://twitter.com/livefeedreviews",
            "linkedin": "https://www.linkedin.com/company/livefeedreviews",
            "github": "https://github.com/livefeedreviews",
            "crunchbase": "https://www.crunchbase.com/organization/livefeedreviews",
            "trustpilot": "https://www.trustpilot.com/review/livefeedreviews.com"
        },
        "editorial_policy": {
            "commercial_model": "100% Free Self-Service DIY Diagnostics & Unbiased Hardware Reviews",
            "third_party_billing": False,
            "inbound_phone_repairs": False,
            "remote_desktop_access": False
        }
    }
    path = os.path.join(REPO_DIR, "public", "business.json")
    with open(path, "w", encoding="utf-8") as f:
        json.dump(business_profile, f, indent=2)
    print(f"Generated {path}")


def generate_opensearch_xml():
    xml = f"""<?xml version="1.0" encoding="UTF-8"?>
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/">
  <ShortName>LiveFeedReviews</ShortName>
  <Description>Search independent printer hardware reviews, ISO yield benchmarks, and DIY troubleshooting guides.</Description>
  <InputEncoding>UTF-8</InputEncoding>
  <OutputEncoding>UTF-8</OutputEncoding>
  <Image width="16" height="16" type="image/png">{BASE_URL}/icon.png</Image>
  <Url type="text/html" method="get" template="{BASE_URL}/search?q={{searchTerms}}"/>
  <Url type="application/opensearchdescription+xml" rel="self" template="{BASE_URL}/opensearch.xml"/>
  <Query role="example" searchTerms="printer offline"/>
  <Developer>Live Feed Reviews Engineering</Developer>
  <Contact>contact@livefeedreviews.com</Contact>
  <Tags>printer hardware reviews benchmarks diagnostics</Tags>
</OpenSearchDescription>
"""
    path = os.path.join(REPO_DIR, "public", "opensearch.xml")
    with open(path, "w", encoding="utf-8") as f:
        f.write(xml)
    print(f"Generated {path}")


if __name__ == "__main__":
    generate_manifest_json()
    generate_business_json()
    generate_opensearch_xml()
