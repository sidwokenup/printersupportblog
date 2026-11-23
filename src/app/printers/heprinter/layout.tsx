import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Printer Setup | LiveFeedReviews",
  description: "Complete setup using Easy Start. Connect the printer to your computer, easy setup, effortless printing.",
  alternates: {
    canonical: "/printers/heprinter",
  },
  openGraph: {
    title: "Printer Setup | LiveFeedReviews",
    description: "Complete setup using Easy Start. Connect the printer to your computer, easy setup, effortless printing.",
    url: "https://www.livefeedreviews.com/printers/heprinter",
    siteName: "LiveFeedReviews",
    images: [
      {
        url: "/img/printer-bn.webp",
        width: 800,
        height: 600,
        alt: "HP Printer Setup",
      },
    ],
    type: "website",
  },
};

export default function HePrinterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
