import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service | Get Printer Care",
  description: "Step-by-step printer setup, driver installation, and offline troubleshooting for HP, Canon, Epson, and Brother printers.",
  alternates: {
    canonical: "/printer-tips",
  },
  openGraph: {
    title: "Service | Get Printer Care",
    description: "Step-by-step printer setup, driver installation, and offline troubleshooting for HP, Canon, Epson, and Brother printers.",
    url: "https://www.livefeedreviews.com/printer-tips",
    siteName: "LiveFeedReviews",
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
