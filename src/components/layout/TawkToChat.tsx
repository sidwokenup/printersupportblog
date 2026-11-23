"use client";

import Script from "next/script";
import { useEffect } from "react";

export function TawkToChat() {
  useEffect(() => {
    const originalConsoleError = console.error;
    console.error = function (...args) {
      if (args[0] === true) return;
      originalConsoleError.apply(console, args);
    };

    const handleOpenChat = () => {
      if ((window as any).Tawk_API && typeof (window as any).Tawk_API.maximize === "function") {
        (window as any).Tawk_API.maximize();
      } else if ((window as any).Tawk_API && typeof (window as any).Tawk_API.popup === "function") {
        (window as any).Tawk_API.popup();
      }
    };

    window.addEventListener("open-live-chat", handleOpenChat);

    return () => {
      console.error = originalConsoleError;
      window.removeEventListener("open-live-chat", handleOpenChat);
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
        strategy="afterInteractive"
        src="https://embed.tawk.to/6a25e667be9ae91c2b2dece4/default"
        crossOrigin="anonymous"
      />
    </>
  );
}
