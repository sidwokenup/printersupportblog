"""
Enhances hub landing pages and category pillars with canonical URLs,
11-region hreflang dictionaries, and Schema.org CollectionPage / ItemList metadata.
Also injects enterprise security headers into next.config.ts.
"""
import os
import re

REPO_DIR = "/Users/thomasshelby/Downloads/high hopes/printersupportblog"
BASE_URL = "https://www.livefeedreviews.com"

REGIONS = ["en-US", "en-GB", "en-CA", "en-AU", "en-IN", "en-IE", "en-SG", "en-NZ", "en-ZA", "en-PH", "x-default"]

def make_hreflang_dict_str(path: str) -> str:
    lines = ['      languages: {']
    for r in REGIONS:
        lines.append(f'        "{r}": "{BASE_URL}{path}",')
    lines.append('      },')
    return "\n".join(lines)

def update_next_config():
    config_path = os.path.join(REPO_DIR, "next.config.ts")
    content = """import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on"
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload"
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN"
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin"
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()"
          }
        ]
      }
    ];
  }
};

export default nextConfig;
"""
    with open(config_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Updated next.config.ts with enterprise security headers")

def update_blog_hub():
    path = os.path.join(REPO_DIR, "src", "app", "blog", "page.tsx")
    with open(path, "r", encoding="utf-8") as f:
        code = f.read()

    # Update metadata
    old_meta = """export const metadata: Metadata = {
  title: "Printer Reviews & Hardware Buying Guides (2026) | Live Feed Reviews",
  description:
    "Independent lab benchmarks, ISO cost-per-page testing, and expert buying guides for laser printers, all-in-one inkjets, and document scanners.",
  openGraph: {
    title: "Printer Reviews & Hardware Buying Guides (2026) | Live Feed Reviews",
    description:
      "Independent lab benchmarks, ISO cost-per-page testing, and expert buying guides for laser printers, all-in-one inkjets, and document scanners.",
    url: "https://livefeedreviews.com/blog",
    siteName: "Live Feed Reviews",
    type: "website",
  },
};"""

    new_meta = f"""export const metadata: Metadata = {{
  title: "Printer Reviews & Hardware Buying Guides (2026) | Live Feed Reviews",
  description:
    "Independent lab benchmarks, ISO cost-per-page testing, and expert buying guides for laser printers, all-in-one inkjets, and document scanners.",
  alternates: {{
    canonical: "/blog",
{make_hreflang_dict_str("/blog")}
  }},
  openGraph: {{
    title: "Printer Reviews & Hardware Buying Guides (2026) | Live Feed Reviews",
    description:
      "Independent lab benchmarks, ISO cost-per-page testing, and expert buying guides for laser printers, all-in-one inkjets, and document scanners.",
    url: "https://www.livefeedreviews.com/blog",
    siteName: "Live Feed Reviews",
    images: [{{ url: "/logo.png", width: 800, height: 600, alt: "Live Feed Reviews" }}],
    type: "website",
  }},
}};"""
    code = code.replace(old_meta, new_meta)

    # Insert CollectionPage schema
    old_fn = """export default function BlogHubPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-10">"""

    new_fn = """export default function BlogHubPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.livefeedreviews.com/blog#webpage",
        "url": "https://www.livefeedreviews.com/blog",
        "name": "Printer Reviews & Comprehensive Buying Guides (2026)",
        "description": "Independent lab benchmarks and ISO cost-per-page evaluations for top printers and scanners.",
        "isPartOf": {
          "@id": "https://www.livefeedreviews.com/#website"
        }
      },
      {
        "@type": "ItemList",
        "name": "2026 Hardware Benchmarks & Buying Guides",
        "itemListElement": blogArticles.map((article, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": article.title,
          "url": `https://www.livefeedreviews.com/blog/${article.slug}`
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />"""
    code = code.replace(old_fn, new_fn)
    with open(path, "w", encoding="utf-8") as f:
        f.write(code)
    print("Updated src/app/blog/page.tsx")

def update_solutions_hub():
    path = os.path.join(REPO_DIR, "src", "app", "solutions", "page.tsx")
    with open(path, "r", encoding="utf-8") as f:
        code = f.read()

    old_meta = """export const metadata: Metadata = {
  title: "Printer Troubleshooting & Self-Service Diagnostic Hub (2026) | Live Feed Reviews",
  description: "Comprehensive DIY troubleshooting guides for offline printers, paper jams, blank pages, Wi-Fi drops, driver errors, and printhead cleaning.",
  openGraph: {
    title: "Printer Troubleshooting & Self-Service Diagnostic Hub (2026)",
    description: "Step-by-step DIY diagnostic checklists for Windows 11, macOS, and wireless network printers.",
    url: "https://www.livefeedreviews.com/solutions",
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "Live Feed Reviews" }],
  },
};"""

    new_meta = f"""export const metadata: Metadata = {{
  title: "Printer Troubleshooting & Self-Service Diagnostic Hub (2026) | Live Feed Reviews",
  description: "Comprehensive DIY troubleshooting guides for offline printers, paper jams, blank pages, Wi-Fi drops, driver errors, and printhead cleaning.",
  alternates: {{
    canonical: "/solutions",
{make_hreflang_dict_str("/solutions")}
  }},
  openGraph: {{
    title: "Printer Troubleshooting & Self-Service Diagnostic Hub (2026)",
    description: "Step-by-step DIY diagnostic checklists for Windows 11, macOS, and wireless network printers.",
    url: "https://www.livefeedreviews.com/solutions",
    images: [{{ url: "/logo.png", width: 800, height: 600, alt: "Live Feed Reviews" }}],
    type: "website",
  }},
}};"""
    code = code.replace(old_meta, new_meta)

    # Insert CollectionPage schema
    old_fn = """export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-10">"""

    new_fn = """export default function SolutionsPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.livefeedreviews.com/solutions#webpage",
        "url": "https://www.livefeedreviews.com/solutions",
        "name": "Printer Troubleshooting & Self-Service Diagnostic Hub (2026)",
        "description": "Comprehensive DIY troubleshooting triage pathways for common printer driver and hardware faults.",
        "isPartOf": {
          "@id": "https://www.livefeedreviews.com/#website"
        }
      },
      {
        "@type": "ItemList",
        "name": "Self-Service Hardware Diagnostic Hubs",
        "itemListElement": solutions.map((sol, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": sol.title,
          "url": `https://www.livefeedreviews.com/solutions/${sol.slug}`
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />"""
    code = code.replace(old_fn, new_fn)
    with open(path, "w", encoding="utf-8") as f:
        f.write(code)
    print("Updated src/app/solutions/page.tsx")

def update_category_page(rel_path: str, title: str, desc: str, slug: str, item_list_name: str):
    path = os.path.join(REPO_DIR, "src", "app", rel_path)
    with open(path, "r", encoding="utf-8") as f:
        code = f.read()

    # Replace openGraph url if it has livefeedreviews.com without www
    code = code.replace(f'url: "https://livefeedreviews.com/{slug}"', f'url: "https://www.livefeedreviews.com/{slug}"')

    # Add alternates if missing
    if "alternates:" not in code:
        meta_sub = f"""  alternates: {{
    canonical: "/{slug}",
{make_hreflang_dict_str(f"/{slug}")}
  }},
  openGraph: {{"""
        code = code.replace("  openGraph: {", meta_sub, 1)

    # Insert CollectionPage schema if missing
    if "CollectionPage" not in code:
        schema_code = f"""
  const collectionSchema = {{
    "@context": "https://schema.org",
    "@graph": [
      {{
        "@type": "CollectionPage",
        "@id": "https://www.livefeedreviews.com/{slug}#webpage",
        "url": "https://www.livefeedreviews.com/{slug}",
        "name": "{title}",
        "description": "{desc}",
        "isPartOf": {{
          "@id": "https://www.livefeedreviews.com/#website"
        }}
      }}
    ]
  }};
"""
        # Find default function start
        fn_match = re.search(r'export default function \w+\(\) \{', code)
        if fn_match:
            insert_pos = fn_match.end()
            code = code[:insert_pos] + schema_code + code[insert_pos:]
            # Insert script after first <div className="min-h-screen
            div_match = re.search(r'<div className="min-h-screen[^"]*">', code)
            if div_match:
                div_pos = div_match.end()
                script_tag = '\n      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />'
                code = code[:div_pos] + script_tag + code[div_pos:]

    with open(path, "w", encoding="utf-8") as f:
        f.write(code)
    print(f"Updated src/app/{rel_path}")

def update_privacy_policy():
    path = os.path.join(REPO_DIR, "src", "app", "privacy-policy", "page.tsx")
    with open(path, "r", encoding="utf-8") as f:
        code = f.read()

    old_meta = """export const metadata: Metadata = {
  title: "Privacy Policy | Live Feed Reviews",
  description: "Privacy Policy for Live Feed Reviews - Learn how we collect, use, and protect your information.",
};"""

    new_meta = f"""export const metadata: Metadata = {{
  title: "Privacy Policy | Live Feed Reviews",
  description: "Privacy Policy for Live Feed Reviews - Learn how we collect, use, and protect your information.",
  alternates: {{
    canonical: "/privacy-policy",
{make_hreflang_dict_str("/privacy-policy")}
  }},
  openGraph: {{
    title: "Privacy Policy | Live Feed Reviews",
    description: "Privacy Policy for Live Feed Reviews - Learn how we collect, use, and protect your information.",
    url: "https://www.livefeedreviews.com/privacy-policy",
    siteName: "Live Feed Reviews",
    type: "website",
  }},
}};"""
    code = code.replace(old_meta, new_meta)
    with open(path, "w", encoding="utf-8") as f:
        f.write(code)
    print("Updated src/app/privacy-policy/page.tsx")


if __name__ == "__main__":
    update_next_config()
    update_blog_hub()
    update_solutions_hub()
    update_privacy_policy()

    categories = [
        ("printers/page.tsx", "Best Wireless Laser Printers (2026)", "Independent benchmarks of wireless laser printers", "printers", "Laser Printers"),
        ("all-in-one/page.tsx", "Best All-In-One Inkjet Printers (2026)", "Multifunction refillable ink tank printers", "all-in-one", "All-In-One Printers"),
        ("portable-printers/page.tsx", "Best Portable & Mobile Wireless Printers (2026)", "Mobile travel printers and battery endurance benchmarks", "portable-printers", "Portable Printers"),
        ("scanners/page.tsx", "Best Desktop Document Scanners (2026)", "Duplex sheetfed document scanners and OCR accuracy", "scanners", "Document Scanners"),
        ("shipping-printers/page.tsx", "Best 4x6 Thermal Shipping Label Printers (2026)", "Direct thermal 4x6 barcode shipping printers", "shipping-printers", "Shipping Printers"),
        ("toner-savings/page.tsx", "Printer Operating Cost & Toner Savings Guide (2026)", "ISO/IEC 19752 cost-per-page benchmarks and TCO calculator", "toner-savings", "Toner Savings"),
        ("wide-format/page.tsx", "Best Wide-Format & 11x17 Tabloid Printers (2026)", "Tabloid engineering prints and photo printers", "wide-format", "Wide Format Printers")
    ]

    for rel, title, desc, slug, item_name in categories:
        update_category_page(rel, title, desc, slug, item_name)
