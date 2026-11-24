import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DisclosureBar } from "@/components/layout/DisclosureBar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LeadPopup } from "@/components/lead/LeadPopup";
import { TawkToChat } from "@/components/layout/TawkToChat";
import { LiveChatWidget } from "@/components/chat/LiveChatWidget";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.livefeedreviews.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "https://www.livefeedreviews.com/",
      "en-GB": "https://www.livefeedreviews.com/",
      "en-CA": "https://www.livefeedreviews.com/",
      "en-AU": "https://www.livefeedreviews.com/",
      "en-IN": "https://www.livefeedreviews.com/",
      "en-IE": "https://www.livefeedreviews.com/",
      "en-SG": "https://www.livefeedreviews.com/",
      "en-NZ": "https://www.livefeedreviews.com/",
      "en-ZA": "https://www.livefeedreviews.com/",
      "en-PH": "https://www.livefeedreviews.com/",
      "x-default": "https://www.livefeedreviews.com/",
    },
  },
  title: "Live Feed Reviews - Independent Printer Reviews & Buying Guides (2026)",
  description: "Independent research, comparison guides, and troubleshooting steps for wireless laser printers, ink tanks, and document scanners.",
  verification: {
    google: process.env.GOOGLE_SEARCH_CONSOLE_VERIFICATION || undefined,
    other: {
      "tellepsis-reach-verify": "rtjsylOFy1nINF13jg3y4imhLMAkLL3VDKZbXlGTDl0",
      ...(process.env.BING_WEBMASTER_VERIFICATION
        ? { "msvalidate.01": process.env.BING_WEBMASTER_VERIFICATION }
        : {}),
      ...(process.env.YANDEX_VERIFICATION
        ? { "yandex-verification": process.env.YANDEX_VERIFICATION }
        : {}),
      ...(process.env.BAIDU_VERIFICATION
        ? { "baidu-site-verification": process.env.BAIDU_VERIFICATION }
        : {}),
    },
  },
  openGraph: {
    title: "Live Feed Reviews - Independent Printer Reviews & Buying Guides (2026)",
    description: "Independent research, comparison guides, and troubleshooting steps for wireless laser printers, ink tanks, and document scanners.",
    url: "https://www.livefeedreviews.com",
    siteName: "Live Feed Reviews",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Live Feed Reviews Logo",
      },
    ],
    locale: "en_US",
    alternateLocale: ["en_GB", "en_CA", "en_AU", "en_IN", "en_IE", "en_SG", "en_NZ", "en_ZA", "en_PH"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@livefeedreviews",
    creator: "@livefeedreviews",
    title: "Live Feed Reviews - Independent Printer Reviews & Buying Guides (2026)",
    description: "Independent research, comparison guides, and troubleshooting steps for wireless laser printers, ink tanks, and document scanners.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "OnlineBusiness"],
        "@id": "https://www.livefeedreviews.com/#organization",
        "name": "Live Feed Reviews",
        "legalName": "Tellepsis Media LLC",
        "alternateName": "Live Feed Reviews",
        "url": "https://www.livefeedreviews.com",
        "foundingDate": "2024-01-15",
        "telephone": "+1-888-344-2323",
        "email": "support@tellepsis.com",
        "parentOrganization": {
          "@type": "Organization",
          "name": "Tellepsis Media LLC",
          "url": "https://www.livefeedreviews.com"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+1-888-344-2323",
            "contactType": "customer support",
            "email": "support@tellepsis.com",
            "availableLanguage": ["en"]
          },
          {
            "@type": "ContactPoint",
            "email": "contact@livefeedreviews.com",
            "contactType": "editorial",
            "availableLanguage": ["en"]
          }
        ],
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.livefeedreviews.com/logo.png",
          "caption": "Live Feed Reviews"
        },
        "description": "Independent hardware research, specification benchmarking, and step-by-step diagnostic documentation compiled from ISO/IEC yield standards, manufacturer service manuals, and technician-verified troubleshooting protocols.",
        "sameAs": [
          "https://twitter.com/livefeedreviews",
          "https://www.linkedin.com/company/livefeedreviews",
          "https://github.com/livefeedreviews"
        ],
        "knowsAbout": [
          "Laser Printers",
          "Inkjet Printers",
          "Supertank Printers",
          "Thermal Shipping Printers",
          "Print Spooler Diagnostics",
          "Windows Print Architecture"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.livefeedreviews.com/#website",
        "url": "https://www.livefeedreviews.com",
        "name": "Live Feed Reviews",
        "publisher": {
          "@id": "https://www.livefeedreviews.com/#organization"
        },
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.livefeedreviews.com/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="search"
          type="application/opensearchdescription+xml"
          title="Live Feed Reviews Search"
          href="/opensearch.xml"
        />
        <link
          rel="alternate"
          type="text/markdown"
          title="LLM Context Manifest"
          href="/llms.txt"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Live Feed Reviews RSS Feed"
          href="/feed.xml"
        />
        <link
          rel="alternate"
          type="application/atom+xml"
          title="Live Feed Reviews Atom Feed"
          href="/atom.xml"
        />
        <link
          rel="alternate"
          type="application/feed+json"
          title="Live Feed Reviews JSON Feed"
          href="/feed.json"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased min-h-full flex flex-col bg-slate-50`}
        suppressHydrationWarning
      >
        <TooltipProvider>
          <DisclosureBar />
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <LeadPopup />
        </TooltipProvider>

        <TawkToChat />
        <LiveChatWidget />
        
        {/* Microsoft Clarity Tracking */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "wmbhx3ni3j");
            `,
          }}
        />
      </body>
    </html>
  );
}
