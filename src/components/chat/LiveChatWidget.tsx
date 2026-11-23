"use client";

import React from "react";
import Script from "next/script";

export function openLiveChat() {
  if (typeof window === "undefined") return;

  // 1. Try Tawk_API maximize / toggle / popup
  if ((window as any).Tawk_API) {
    if (typeof (window as any).Tawk_API.maximize === "function") {
      (window as any).Tawk_API.maximize();
      return;
    }
    if (typeof (window as any).Tawk_API.toggle === "function") {
      (window as any).Tawk_API.toggle();
      return;
    }
    if (typeof (window as any).Tawk_API.popup === "function") {
      (window as any).Tawk_API.popup();
      return;
    }
  }

  // 2. Try LiveChatWidget
  if (
    (window as any).LiveChatWidget &&
    typeof (window as any).LiveChatWidget.call === "function"
  ) {
    (window as any).LiveChatWidget.call("maximize");
    return;
  }

  // 3. Dispatch global event
  window.dispatchEvent(new Event("open-live-chat"));

  // 4. Retry loop in case scripts are still loading
  let attempts = 0;
  const timer = setInterval(() => {
    attempts++;
    if (
      (window as any).Tawk_API &&
      typeof (window as any).Tawk_API.maximize === "function"
    ) {
      (window as any).Tawk_API.maximize();
      clearInterval(timer);
    } else if (
      (window as any).LiveChatWidget &&
      typeof (window as any).LiveChatWidget.call === "function"
    ) {
      (window as any).LiveChatWidget.call("maximize");
      clearInterval(timer);
    }
    if (attempts >= 25) {
      clearInterval(timer);
    }
  }, 100);
}

export function LiveChatWidget() {
  return (
    <Script
      id="livechat-integration"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window._lc = window._lc || {};
          window.__lc = window.__lc || {};
          window.__lc.organizationId = "88021789-6f9a-4e87-ad03-af7e68a3b461";
          window.__lc.integration_name = "manual_onboarding";
          window.__lc.product_name = "text";
          (function(n, t, c) {
              function i(args) {
                  return e._h ? e._h.apply(null, args) : e._q.push(args);
              }
              var e = {
                  _q: [],
                  _h: null,
                  _v: "2.0",
                  on: function() { i(["on", c.call(arguments)]); },
                  once: function() { i(["once", c.call(arguments)]); },
                  off: function() { i(["off", c.call(arguments)]); },
                  get: function() { return !e._h ? e._q.push([c.call(arguments)]) : e._h.apply(null, args); },
                  init: function() {
                      var s = t.createElement("script");
                      s.async = true;
                      s.type = "text/javascript";
                      s.src = "https://cdn.livechatinc.com/tracking.js";
                      t.head.appendChild(s);
                  }
              };
              if (!n._lc.asyncInit) { e.init(); }
              n.LiveChatWidget = n.LiveChatWidget || e;
          })(window, document, [].slice);
        `,
      }}
    />
  );
}
