import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Printer Setup, Tips | LiveFeedReviews",
  description: "Printer Setup, Tips - Step-by-step printer setup, driver installation, and offline troubleshooting.",
  alternates: {
    canonical: "/printer-tips",
  },
  openGraph: {
    title: "Printer Setup, Tips | LiveFeedReviews",
    description: "Printer Setup, Tips - Step-by-step printer setup, driver installation, and offline troubleshooting.",
    url: "https://www.livefeedreviews.com/printer-tips",
    siteName: "LiveFeedReviews",
    images: [
      {
        url: "/images/starts.webp",
        width: 800,
        height: 600,
        alt: "Printer Setup, Tips",
      },
    ],
    type: "website",
  },
};

export default function PrinterTipsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
