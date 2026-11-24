import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Printer Setup & Troubleshooting Guide | Live Feed Reviews",
  description: "Step-by-step printer setup, driver installation, and offline troubleshooting for HP, Canon, Epson, and Brother printers.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/printer-tips",
  },
  openGraph: {
    title: "Printer Setup & Troubleshooting Guide | Live Feed Reviews",
    description: "Step-by-step printer setup, driver installation, and offline troubleshooting for HP, Canon, Epson, and Brother printers.",
    url: "https://www.livefeedreviews.com/printer-tips",
    siteName: "Live Feed Reviews",
    type: "website",
  },
};

export default function PrinterTipsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <meta name="robots" content="noindex, nofollow" />
      <meta name="googlebot" content="noindex, nofollow" />
      <meta name="bingbot" content="noindex, nofollow" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@600;700;800&family=Inter:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      />
      {children}
    </>
  );
}
