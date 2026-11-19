import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LeadPopup } from "@/components/lead/LeadPopup";
import { TawkToChat } from "@/components/layout/TawkToChat";

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
      "x-default": "https://www.livefeedreviews.com/",
    },
  },
  title: "Live Feed Reviews - Independent Printer Reviews & Buying Guides (2026)",
  description: "Comprehensive lab testing, ISO/IEC 19752 yield benchmarks, and buyer's guides for wireless laser printers, ink tanks, and document scanners.",
  verification: {
    google: process.env.GOOGLE_SEARCH_CONSOLE_VERIFICATION || undefined,
    other: {
      "tellepsis-reach-verify": "rtjsylOFy1nINF13jg3y4imhLMAkLL3VDKZbXlGTDl0",
      ...(process.env.BING_WEBMASTER_VERIFICATION
        ? { "msvalidate.01": process.env.BING_WEBMASTER_VERIFICATION }
        : {}),
    },
  },
  openGraph: {
    title: "Live Feed Reviews - Independent Printer Reviews & Buying Guides (2026)",
    description: "Comprehensive lab testing, ISO/IEC 19752 yield benchmarks, and buyer's guides for wireless laser printers, ink tanks, and document scanners.",
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
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Feed Reviews - Independent Printer Reviews & Buying Guides (2026)",
    description: "Comprehensive lab testing, ISO/IEC 19752 yield benchmarks, and buyer's guides for wireless laser printers, ink tanks, and document scanners.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased min-h-full flex flex-col bg-slate-50`}
        suppressHydrationWarning
      >
        <TooltipProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <LeadPopup />
        </TooltipProvider>

        <TawkToChat />
        
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
