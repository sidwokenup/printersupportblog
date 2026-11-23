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
  metadataBase: new URL("https://livefeedreviews.com"),
  title: "Live Feed Reviews - Printer Support",
  description: "Find solutions, troubleshooting guides, drivers, and error code fixes for your HP Printer.",
  openGraph: {
    title: "Live Feed Reviews - Printer Support",
    description: "Find solutions, troubleshooting guides, drivers, and error code fixes for your HP Printer.",
    url: "https://livefeedreviews.com", // You can replace this with your actual domain
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
    title: "Live Feed Reviews - Printer Support",
    description: "Find solutions, troubleshooting guides, drivers, and error code fixes for your HP Printer.",
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
