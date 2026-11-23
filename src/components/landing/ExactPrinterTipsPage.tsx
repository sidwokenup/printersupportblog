"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/app/printer-tips/exact-copy.css";

// SVG Icons matching FontAwesome appearance
function PrinterIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M128 0C92.7 0 64 28.7 64 64v96h64V64h256v96h64V64c0-35.3-28.7-64-64-64H128zM19.1 192C8.6 192 0 200.6 0 211.1v173.8c0 10.5 8.6 19.1 19.1 19.1H64v-64c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64v64h44.9c10.5 0 19.1-8.6 19.1-19.1V211.1c0-10.5-8.6-19.1-19.1-19.1H19.1zM448 240a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM128 384c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H128z" />
    </svg>
  );
}

function SearchIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
    </svg>
  );
}

function WindowsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 448 512"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z" />
    </svg>
  );
}

function AppleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 384 512"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

export function ExactPrinterTipsPage() {
  const [modelInput, setModelInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  return (
    <div className="exact-page-root" style={{ background: "#ffffff", color: "#131A26" }}>
      
      {/* =========================================================================
          1. PRINTER BRANDS SECTION (Four Boxes)
         ========================================================================= */}
      <section className="printer-brands-section">
        <div className="container">
          
          {/* Section Heading */}
          <div className="printer-brands-heading">
            <h2>Select Your Printer Model</h2>
            <p>Select your printer brand to explore the right setup and support options.</p>
          </div>

          {/* Four Boxes */}
          <div className="printer-brands-row">
            
            {/* HP */}
            <div className="printer-brand-box printer-brand-hp">
              <div className="printer-brand-icon">
                <PrinterIcon className="w-8 h-8 text-[#0096D6]" />
              </div>
              <h3>HP</h3>
              <Link href="/lp/hp-printer-help" className="printer-brand-btn">
                Click Here
              </Link>
            </div>

            {/* Brother */}
            <div className="printer-brand-box printer-brand-brother">
              <div className="printer-brand-icon">
                <PrinterIcon className="w-8 h-8 text-[#0096D6]" />
              </div>
              <h3>Brother</h3>
              <Link href="/lp/brother-printer-help" className="printer-brand-btn">
                Click Here
              </Link>
            </div>

            {/* Canon */}
            <div className="printer-brand-box printer-brand-canon">
              <div className="printer-brand-icon">
                <PrinterIcon className="w-8 h-8 text-[#0096D6]" />
              </div>
              <h3>Canon</h3>
              <Link href="/lp/canon-printer-help" className="printer-brand-btn">
                Click Here
              </Link>
            </div>

            {/* Epson */}
            <div className="printer-brand-box printer-brand-epson">
              <div className="printer-brand-icon">
                <PrinterIcon className="w-8 h-8 text-[#0096D6]" />
              </div>
              <h3>Epson</h3>
              <Link href="/lp/epson-printer-help" className="printer-brand-btn">
                Click Here
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          2. PRINTER SETUP BANNER
         ========================================================================= */}
      <section className="printer-setup-banner">
        <div className="setup-container">
          
          {/* Left Content */}
          <div className="setup-content">
            <div className="setup-content-inner">
              
              {/* Printer Icon */}
              <div className="printer-icon">
                <PrinterIcon className="w-6 h-6 text-[#0096D6]" />
              </div>

              {/* Tagline */}
              <div className="setup-tagline">SET UP AND PRINT</div>

              {/* Heading */}
              <h1>Set up and use your printer</h1>

              {/* Paragraph */}
              <p>
                Enter your printer model number to start setting up your printer, get step-by-step setup instructions, and start printing.
              </p>

              {/* Search Box */}
              <div className="printer-search">
                <input
                  type="text"
                  placeholder="Enter Model Number - Example: OfficeJet 9010"
                  aria-label="Enter Model Number - Example: OfficeJet 9010"
                  value={modelInput}
                  onChange={(e) => setModelInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleOpenModal();
                    }
                  }}
                />
                <i style={{ position: "absolute", right: 18, top: "50%", transform: "translateY(-50%)", color: "#667085" }}>
                  <SearchIcon className="w-4 h-4" />
                </i>
              </div>

              {/* Start Setup Button */}
              <button
                type="button"
                className="start-setup-btn"
                id="openSetupModal"
                onClick={handleOpenModal}
              >
                Start Setup
              </button>

            </div>
          </div>

          {/* Right Image */}
          <div className="setup-image">
            <img
              src="/images/starts.webp"
              alt="Printer setup"
              width={540}
              height={400}
              style={{ width: "100%", maxWidth: "540px", height: "auto", display: "block" }}
            />
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. BRAND DISCLAIMER
         ========================================================================= */}
      <section className="brand-disclaimer">
        <div className="container">
          <p>
            <strong>Brand Disclaimer:</strong>{" "}
            livefeedreviews.com is an independent service provider and is not affiliated
            with, authorized by, sponsored by, or endorsed by HP, Brother, Canon,
            Epson, or any other brands mentioned on this website. Brand names,
            trademarks, logos, and product names are used for identification and
            informational purposes only. We do not sell printers or printer
            hardware, and the use of third-party brand names does not imply any
            partnership or endorsement.
          </p>
        </div>
      </section>

      {/* =========================================================================
          4. PRINTER SETUP GUIDE
         ========================================================================= */}
      <section className="printer-guide-section">
        <div className="printer-guide-container">
          
          {/* Left: Setup Guide */}
          <div className="printer-guide-content">
            
            <div className="guide-label">PRINTER SETUP GUIDE</div>

            <h2>Set Up Your Printer</h2>

            <p className="guide-intro">
              Follow these simple steps to connect your printer, install the required
              software, and get ready to print from your device.
            </p>

            <div className="guide-steps">
              
              {/* Step 1 */}
              <div className="guide-step">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h3>Prepare Your Printer</h3>
                  <p>
                    Unpack your printer, remove all protective materials, and connect
                    the power cable. Turn on the printer and make sure it is ready for setup.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="guide-step">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h3>Connect Your Printer</h3>
                  <p>
                    Connect your printer to your computer using a USB cable, or connect
                    it to your Wi-Fi network by following the instructions shown on
                    the printer display.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="guide-step">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h3>Install the Printer Software</h3>
                  <p>
                    Download and install the appropriate printer software or driver
                    for your operating system to allow your computer to communicate
                    with the printer.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="guide-step">
                <div className="step-number">04</div>
                <div className="step-content">
                  <h3>Complete the Setup</h3>
                  <p>
                    Follow the on-screen instructions to complete the printer setup.
                    Once connected, check the printer settings and make sure it is
                    selected as your default printer if needed.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="guide-step">
                <div className="step-number">05</div>
                <div className="step-content">
                  <h3>Print a Test Page</h3>
                  <p>
                    Print a test page to confirm that your printer is connected
                    correctly and ready for everyday printing.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right: Image */}
          <div className="printer-guide-image">
            <div className="guide-image-wrapper">
              <img
                src="/images/setup-guide.webp"
                alt="Printer setup guide"
                width={500}
                height={380}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. PRINTER OFFLINE GUIDE (How to Get Your Printer From Offline to Online)
         ========================================================================= */}
      <section className="printer-online-section">
        <div className="printer-online-container">
          
          {/* LEFT: Image */}
          <div className="printer-online-image">
            <div className="online-image-wrapper">
              <img
                src="/images/offline-online.webp"
                alt="Printer offline to online troubleshooting guide"
                width={500}
                height={380}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>

          {/* RIGHT: Guide */}
          <div className="printer-online-content">
            
            <div className="online-label">PRINTER OFFLINE GUIDE</div>

            <h2>How to Get Your Printer From Offline to Online</h2>

            <p className="online-intro">
              If your printer shows as offline, a few simple checks can often help restore the connection and get your printer ready to print again.
            </p>

            <div className="online-steps">
              
              {/* Step 1 */}
              <div className="online-step">
                <div className="online-number">01</div>
                <div className="online-step-content">
                  <h3>Check the Printer Power</h3>
                  <p>
                    Make sure your printer is powered on and that the display or indicator lights show that the printer is ready.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="online-step">
                <div className="online-number">02</div>
                <div className="online-step-content">
                  <h3>Check the Connection</h3>
                  <p>
                    For a wireless printer, confirm that it is connected to the same Wi-Fi network as your computer. For USB printers, check that the cable is securely connected.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="online-step">
                <div className="online-number">03</div>
                <div className="online-step-content">
                  <h3>Check Your Printer Status</h3>
                  <p>
                    Open your computer&apos;s printer settings and check whether the printer is listed as offline. Select the correct printer if multiple printers are installed.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="online-step">
                <div className="online-number">04</div>
                <div className="online-step-content">
                  <h3>Restart the Devices</h3>
                  <p>
                    Turn the printer off, wait a few seconds, and turn it back on. Restart your computer or reconnect your printer if necessary.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="online-step">
                <div className="online-number">05</div>
                <div className="online-step-content">
                  <h3>Print a Test Page</h3>
                  <p>
                    Once the printer status changes to online, send a test print to confirm that the connection is working correctly.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          6. SETUP MODAL (Choose Your Device)
         ========================================================================= */}
      <div className={`setup-modal ${isModalOpen ? "active" : ""}`} id="setupModal">
        
        <div className="setup-modal-overlay" onClick={handleCloseModal}></div>

        <div className="setup-modal-box">
          
          <button
            type="button"
            className="modal-close"
            id="closeSetupModal"
            aria-label="Close"
            onClick={handleCloseModal}
          >
            &times;
          </button>

          {/* Modal Printer Icon */}
          <div className="modal-printer-icon">
            <PrinterIcon className="w-8 h-8 text-[#0096D6]" />
          </div>

          <h2>Choose Your Device</h2>

          <p>
            Select your operating system to continue with printer setup.
          </p>

          <div className="os-options">
            
            <a
              href="https://care.tellepsis.shop"
              className="os-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WindowsIcon className="w-5 h-5 text-[#0096D6]" />
              <span>Windows</span>
            </a>

            <a
              href="https://care.tellepsis.shop"
              className="os-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AppleIcon className="w-5 h-5 text-[#0096D6]" />
              <span>macOS</span>
            </a>

          </div>

        </div>

      </div>

      {/* =========================================================================
          7. SITE FOOTER
         ========================================================================= */}
      <footer className="site-footer">
        <div className="container">
          
          <div className="footer-grid">
            
            <div>
              <div className="footer-brand">
                <svg className="brand-mark" width="30" height="30" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="10" fill="#16294B"/>
                  <rect x="10" y="10" width="12" height="12" rx="2.5" fill="#5C8FE0"/>
                  <rect x="26" y="10" width="12" height="12" rx="2.5" fill="#2C5FA8"/>
                  <rect x="10" y="26" width="12" height="12" rx="2.5" fill="#2C5FA8"/>
                  <rect x="26" y="26" width="12" height="12" rx="2.5" fill="#EAF1FB"/>
                </svg>
                <span>LiveFeedReviews</span>
              </div>
              <p style={{ maxWidth: "32ch", color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                Office Equipment &amp; Workspace Setup services for businesses across the United States.
              </p>
            </div>

            <div>
              <h5>Company</h5>
              <ul className="footer-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/solutions">Solutions</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h5>Legal</h5>
              <ul className="footer-links">
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms &amp; Conditions</Link></li>
              </ul>
            </div>

            <div>
              <h5>Contact &amp; Support</h5>
              <ul className="footer-contact">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span>
                    Live Chat: <a href="https://care.tellepsis.shop" style={{ color: "#5C8FE0", fontWeight: 700 }}>care.tellepsis.shop</a>
                  </span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>24/7 Troubleshooting Help</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="footer-bottom">
            <span>
              &copy; 2026 LiveFeedReviews. All rights reserved. Independent Help Directory — Not affiliated with HP, Canon, Epson, Brother, or any manufacturer.
            </span>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/solutions">Solutions</Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms &amp; Conditions</Link>
            </nav>
          </div>

        </div>
      </footer>

    </div>
  );
}
