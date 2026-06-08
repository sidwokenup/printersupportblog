"use client";

import Script from "next/script";
import { useEffect } from "react";

export function TawkToChat() {
  useEffect(() => {
    // Tawk.to's internal scripts (twk-chunk-common.js) have a known bug where they occasionally 
    // call console.error(true). In Next.js development mode, this triggers a full-screen error overlay.
    // This safely intercepts and ignores that specific sloppy log so it doesn't disrupt development.
    const originalConsoleError = console.error;
    console.error = function (...args) {
      if (args[0] === true) return;
      originalConsoleError.apply(console, args);
    };

    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  return (
    <>
      <Script
        id="tawk-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          `,
        }}
      />
      <Script
        id="tawk-script"
        strategy="lazyOnload"
        src="https://embed.tawk.to/6a25e667be9ae91c2b2dece4/default"
        crossOrigin="anonymous"
      />
    </>
  );
}
