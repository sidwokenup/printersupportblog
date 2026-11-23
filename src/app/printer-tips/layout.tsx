import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Printer Setup & Configuration Guide (All Brands) | Live Feed Reviews",
  description: "Independent step-by-step printer setup guide for HP, Brother, Canon, and Epson. Learn how to unpack, connect to Wi-Fi, install official drivers, and fix offline errors.",
  alternates: {
    canonical: "/printer-tips",
  },
  openGraph: {
    title: "Printer Setup & Configuration Guide | Live Feed Reviews",
    description: "Step-by-step independent printer setup guide for HP, Brother, Canon, and Epson. Wi-Fi connection, official driver portals, and offline troubleshooting.",
    url: "https://www.livefeedreviews.com/printer-tips",
    siteName: "Live Feed Reviews",
    images: [
      {
        url: "/printersetup.jpg",
        width: 800,
        height: 600,
        alt: "Printer Setup & Troubleshooting Guide",
      },
    ],
    type: "article",
  },
};

export default function PrinterTipsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
