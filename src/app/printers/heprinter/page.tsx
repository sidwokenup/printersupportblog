"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "./heprinter.css";

// Icons
function DownloadIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" className={className} aria-hidden="true">
      <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </svg>
  );
}

function PrintIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" className={className} aria-hidden="true">
      <path d="M128 0C92.7 0 64 28.7 64 64v96h64V64h256v96h64V64c0-35.3-28.7-64-64-64H128zM19.1 192C8.6 192 0 200.6 0 211.1v173.8c0 10.5 8.6 19.1 19.1 19.1H64v-64c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64v64h44.9c10.5 0 19.1-8.6 19.1-19.1V211.1c0-10.5-8.6-19.1-19.1-19.1H19.1zM448 240a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM128 384c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H128z" />
    </svg>
  );
}

function CheckCircleIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" className={className} aria-hidden="true">
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
    </svg>
  );
}

function FileTextIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 384 512" fill="currentColor" className={className} aria-hidden="true">
      <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H208c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </svg>
  );
}

function ArrowRightCircle({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" className={className} aria-hidden="true">
      <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L120 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l198.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z" />
    </svg>
  );
}

export default function HePrinterPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [modelNumber, setModelNumber] = useState("");
  const [navOpen, setNavOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setCurrentStep(1);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentStep(1);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (currentStep === 4) {
      timer = setTimeout(() => {
        setCurrentStep(5);
      }, 2500);
    }
    return () => clearTimeout(timer);
  }, [currentStep]);

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
    <div className="heprinter-page-root" style={{ width: "100%", overflowX: "hidden", background: "#ffffff" }}>
      
      {/* =========================================================================
          1. NAVBAR
         ========================================================================= */}
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", padding: "12px 0" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
          
          <Link className="navbar-brand" href="/" style={{ display: "flex", alignItems: "center", marginRight: "40px" }}>
            <img src="/img/new-hp-logo.svg" alt="HP Logo" className="logo-img" style={{ height: "45px", width: "auto", objectFit: "contain" }} />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setNavOpen(!navOpen)}
            style={{ background: "none", border: "1px solid #ddd", borderRadius: "4px", padding: "6px 10px" }}
          >
            <span style={{ display: "block", width: "22px", height: "2px", background: "#333", margin: "4px 0" }}></span>
            <span style={{ display: "block", width: "22px", height: "2px", background: "#333", margin: "4px 0" }}></span>
            <span style={{ display: "block", width: "22px", height: "2px", background: "#333", margin: "4px 0" }}></span>
          </button>

          <div className={`collapse navbar-collapse ${navOpen ? "show" : ""}`} id="navbarNav" style={{ display: navOpen ? "block" : undefined }}>
            <ul className="navbar-nav ml-auto" style={{ display: "flex", listStyle: "none", margin: 0, padding: 0, gap: "10px" }}>
              <li className="nav-item">
                <button type="button" onClick={handleOpenModal} className="nav-link" style={{ background: "none", border: "none", color: "#333", fontWeight: 500, padding: "8px 20px", cursor: "pointer", fontSize: "15px" }}>
                  OfficeJet
                </button>
              </li>
              <li className="nav-item">
                <button type="button" onClick={handleOpenModal} className="nav-link" style={{ background: "none", border: "none", color: "#333", fontWeight: 500, padding: "8px 20px", cursor: "pointer", fontSize: "15px" }}>
                  DeskJet
                </button>
              </li>
              <li className="nav-item">
                <button type="button" onClick={handleOpenModal} className="nav-link" style={{ background: "none", border: "none", color: "#333", fontWeight: 500, padding: "8px 20px", cursor: "pointer", fontSize: "15px" }}>
                  Envy
                </button>
              </li>
              <li className="nav-item">
                <button type="button" onClick={handleOpenModal} className="nav-link" style={{ background: "none", border: "none", color: "#333", fontWeight: 500, padding: "8px 20px", cursor: "pointer", fontSize: "15px" }}>
                  LaserJet
                </button>
              </li>
            </ul>
          </div>

        </div>
      </nav>

      {/* =========================================================================
          2. BANNER SECTION (Complete setup using Easy Start)
         ========================================================================= */}
      <div
        className="banner d-flex align-items-center justify-content-start text-left py-5"
        style={{
          backgroundImage: "url('/img/banner_page.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "550px",
          display: "flex",
          alignItems: "center"
        }}
      >
        <div className="container">
          <div className="row" style={{ display: "flex", alignItems: "center", flexWrap: "wrap", width: "100%" }}>
            
            {/* Text Content on the Left */}
            <div className="col-md-6" style={{ flex: "1 1 500px", padding: "15px" }}>
              <h2 className="display-4 text-white" style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(30px, 4vw, 48px)", lineHeight: 1.2, marginBottom: "16px" }}>
                Complete setup using <br />Easy Start
              </h2>
              <p className="lead text-white" style={{ color: "#ffffff", fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
                Connect the printer to your computer, Easy setup, effortless printing!
              </p>
              <ul className="text-white" style={{ color: "#ffffff", paddingLeft: "20px", marginBottom: "24px", lineHeight: 1.8, fontSize: "15px" }}>
                <li>Make sure your printer is powered on</li>
                <li>Select Download to install the recommended printer software to complete setup</li>
              </ul>

              <div className="form-inline my-3" style={{ maxWidth: "600px", display: "flex", alignItems: "center" }}>
                {/* Install Setup Button (Triggers Popup Modal) */}
                <div>
                  <button
                    className="btn btn-danger btn-lg"
                    type="button"
                    onClick={handleOpenModal}
                    style={{
                      backgroundColor: "#000000",
                      borderColor: "#000000",
                      borderRadius: "5px",
                      height: "48px",
                      padding: "0 30px",
                      fontWeight: 600,
                      cursor: "pointer",
                      color: "#ffffff",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "16px",
                      border: "none",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
                    }}
                  >
                    <DownloadIcon className="w-4 h-4" />
                    <span>Install Setup</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Image on the Right */}
            <div className="col-md-6 d-flex justify-content-end" style={{ flex: "1 1 400px", display: "flex", justifyContent: "flex-end", padding: "15px" }}>
              <img
                src="/img/printer-bn.webp"
                alt="HP Printer Setup"
                style={{ maxWidth: "80%", height: "auto", display: "block" }}
              />
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================================
          3. FOUR GUIDANCE ROWS (Connect, Install, Complete, Test)
         ========================================================================= */}
      <div className="container mt-4" style={{ padding: "15px 28px" }}>
        <div className="d-flex align-items-center" style={{ display: "flex", alignItems: "flex-start", gap: "18px" }}>
          <div style={{ color: "#0096D6", flexShrink: 0, marginTop: "4px" }}>
            <PrintIcon className="w-8 h-8" />
          </div>
          <div>
            <strong style={{ fontSize: "18px", color: "#1d2939", display: "block", marginBottom: "4px" }}>
              Connect Your Printer:
            </strong>
            <p style={{ margin: 0, color: "#667085", fontSize: "15px", lineHeight: 1.6 }}>
              Connect your printer to your computer or mobile device using a USB cable or wireless network.
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-4" style={{ padding: "15px 28px" }}>
        <div className="d-flex align-items-center" style={{ display: "flex", alignItems: "flex-start", gap: "18px" }}>
          <div style={{ color: "#0096D6", flexShrink: 0, marginTop: "4px" }}>
            <DownloadIcon className="w-8 h-8" />
          </div>
          <div>
            <strong style={{ fontSize: "18px", color: "#1d2939", display: "block", marginBottom: "4px" }}>
              Install Printer Software:
            </strong>
            <p style={{ margin: 0, color: "#667085", fontSize: "15px", lineHeight: 1.6 }}>
              Install the required printer drivers and software to ensure your device communicates properly with the printer.
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-4" style={{ padding: "15px 28px" }}>
        <div className="d-flex align-items-center" style={{ display: "flex", alignItems: "flex-start", gap: "18px" }}>
          <div style={{ color: "#0096D6", flexShrink: 0, marginTop: "4px" }}>
            <CheckCircleIcon className="w-8 h-8" />
          </div>
          <div>
            <strong style={{ fontSize: "18px", color: "#1d2939", display: "block", marginBottom: "4px" }}>
              Complete Printer Setup:
            </strong>
            <p style={{ margin: 0, color: "#667085", fontSize: "15px", lineHeight: 1.6 }}>
              Follow the setup instructions to configure paper settings, print preferences, and wireless connectivity.
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-4" style={{ padding: "15px 28px", marginBottom: "50px" }}>
        <div className="d-flex align-items-center" style={{ display: "flex", alignItems: "flex-start", gap: "18px" }}>
          <div style={{ color: "#0096D6", flexShrink: 0, marginTop: "4px" }}>
            <FileTextIcon className="w-8 h-8" />
          </div>
          <div>
            <strong style={{ fontSize: "18px", color: "#1d2939", display: "block", marginBottom: "4px" }}>
              Test Printing &amp; Scanning:
            </strong>
            <p style={{ margin: 0, color: "#667085", fontSize: "15px", lineHeight: 1.6 }}>
              Print a test page and try scanning a document to make sure all printer functions are working correctly.
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================================
          4. FOOTER (Dark Background)
         ========================================================================= */}
      <footer id="footer" className="footer dark-background" style={{ backgroundColor: "#000", color: "#fff", padding: "60px 0 20px", fontSize: "14px" }}>
        <div className="container footer-top" style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 20px", marginBottom: "40px" }}>
          <div className="row" style={{ display: "flex", flexWrap: "wrap", margin: "0 -15px" }}>
            
            {/* About Section */}
            <div className="col-lg-4 col-md-6 footer-about mb-4" style={{ flex: "1 1 300px", padding: "0 15px", marginBottom: "30px" }}>
              <div className="logo d-flex align-items-center mb-3">
                <span className="sitename" style={{ fontSize: "24px", fontWeight: 700, color: "#fff" }}>
                  LiveFeedReviews
                </span>
              </div>
              <p className="footer-text" style={{ color: "#e0e0e0", lineHeight: 1.8, maxWidth: "400px" }}>
                We are an independent service provider and are not affiliated with, endorsed by, or connected to HP, Canon, Epson, Brother, or any other brand mentioned.
              </p>
            </div>

            {/* Useful Links */}
            <div className="col-lg-2 col-md-6 footer-links mb-4" style={{ flex: "1 1 180px", padding: "0 15px", marginBottom: "30px" }}>
              <h4 style={{ color: "#ffffff", fontWeight: 600, marginBottom: "20px", fontSize: "18px" }}>Useful Links</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "10px" }}><Link href="/contact" style={{ color: "#ffffff", textDecoration: "none" }}>Contact Us</Link></li>
                <li style={{ marginBottom: "10px" }}><Link href="/terms" style={{ color: "#ffffff", textDecoration: "none" }}>Disclaimer</Link></li>
                <li style={{ marginBottom: "10px" }}><Link href="/solutions" style={{ color: "#ffffff", textDecoration: "none" }}>Services</Link></li>
                <li style={{ marginBottom: "10px" }}><Link href="/terms" style={{ color: "#ffffff", textDecoration: "none" }}>Terms &amp; Conditions</Link></li>
                <li style={{ marginBottom: "10px" }}><Link href="/privacy-policy" style={{ color: "#ffffff", textDecoration: "none" }}>Privacy Policy</Link></li>
                <li style={{ marginBottom: "10px" }}><Link href="/printer-tips" style={{ color: "#ffffff", textDecoration: "none" }}>Setup Guide</Link></li>
              </ul>
            </div>

            {/* Page Services */}
            <div className="col-lg-3 col-md-6 footer-links mb-4" style={{ flex: "1 1 220px", padding: "0 15px", marginBottom: "30px" }}>
              <h4 style={{ color: "#ffffff", fontWeight: 600, marginBottom: "20px", fontSize: "18px" }}>Page Services</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "10px" }}><Link href="/lp/hp-printer-help" style={{ color: "#ffffff", textDecoration: "none" }}>Printer Installation</Link></li>
                <li style={{ marginBottom: "10px" }}><Link href="/printer-tips" style={{ color: "#ffffff", textDecoration: "none" }}>Printer Setup</Link></li>
                <li style={{ marginBottom: "10px" }}><Link href="/lp/printer-wifi" style={{ color: "#ffffff", textDecoration: "none" }}>Wireless Configuration</Link></li>
                <li style={{ marginBottom: "10px" }}><Link href="/solutions" style={{ color: "#ffffff", textDecoration: "none" }}>Network Printer Solutions</Link></li>
                <li style={{ marginBottom: "10px" }}><Link href="/lp/printer-help" style={{ color: "#ffffff", textDecoration: "none" }}>Printer Maintenance</Link></li>
              </ul>
            </div>

            {/* Contact / Live Support */}
            <div className="col-lg-3 col-md-6 footer-contact mb-4" style={{ flex: "1 1 220px", padding: "0 15px", marginBottom: "30px" }}>
              <h4 style={{ color: "#ffffff", fontWeight: 600, marginBottom: "20px", fontSize: "18px" }}>Contact Us</h4>
              <p style={{ color: "#e0e0e0", lineHeight: 1.8 }}>
                <strong>Live Chat:</strong>{" "}
                <a href="https://care.tellepsis.shop" style={{ color: "#0096D6", fontWeight: "bold", textDecoration: "none" }}>
                  care.tellepsis.shop
                </a>
              </p>
              <p style={{ color: "#e0e0e0", lineHeight: 1.8 }}>
                <strong>Support:</strong> 24/7 Assisted Troubleshooting
              </p>
            </div>

          </div>
        </div>

        <div className="container copyright text-center" style={{ borderTop: "1px solid #333", paddingTop: "25px", marginTop: "30px", fontSize: "13px", color: "#999", textAlign: "center" }}>
          <p style={{ margin: 0 }}>
            &copy; <span>Copyright</span> <strong className="px-1 sitename" style={{ color: "#fff" }}>LiveFeedReviews</strong> <span>All Rights Reserved</span>. Independent Help Directory — Not affiliated with HP, Canon, Epson, Brother, or any manufacturer.
          </p>
        </div>
      </footer>

      {/* =========================================================================
          5. PRINTER SETUP POPUP MODAL COMPONENT (Wizard)
         ========================================================================= */}
      {isModalOpen && (
        <div
          className="modal fade printer-popup-modal show"
          id="printerSetupModal"
          role="dialog"
          aria-modal="true"
          style={{
            display: "flex",
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            style={{ width: "100%", maxWidth: "560px", margin: "auto" }}
          >
            <div
              className="modal-content"
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                border: "none",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
                backgroundColor: "#ffffff"
              }}
            >
              
              {/* Modal Header */}
              <div
                className="modal-header"
                style={{
                  background: "linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%)",
                  color: "#ffffff",
                  padding: "16px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <h5 className="modal-title" style={{ margin: 0, fontSize: "1.15rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "8px" }}>
                  <DownloadIcon className="w-5 h-5" />
                  <span>Quick Download Free Drivers</span>
                </h5>
                <button
                  type="button"
                  className="close text-white"
                  aria-label="Close"
                  onClick={handleCloseModal}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#ffffff",
                    fontSize: "26px",
                    cursor: "pointer",
                    lineHeight: 1
                  }}
                >
                  &times;
                </button>
              </div>

              {/* Modal Body / Interactive Wizard */}
              <div className="modal-body" style={{ padding: "24px 20px", textAlign: "center", minHeight: "360px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                
                {/* STEP 1: Let's Start */}
                {currentStep === 1 && (
                  <div id="step1" className="w-100">
                    <div style={{ marginTop: "8px", marginBottom: "12px" }}>
                      <button
                        type="button"
                        className="btn-blue-pill"
                        id="btnStep1Next"
                        onClick={() => setCurrentStep(2)}
                      >
                        <span>Let&apos;s Start</span>
                        <ArrowRightCircle className="w-4 h-4" />
                      </button>
                    </div>
                    <p style={{ color: "#6c757d", fontSize: "14px", marginBottom: "16px" }}>
                      Start Printer Setup Wizard
                    </p>
                    <div style={{ margin: "10px 0" }}>
                      <img
                        src="/img/img-1.png"
                        alt="Printer Unboxing"
                        style={{ maxHeight: "200px", width: "auto", margin: "0 auto", display: "block" }}
                      />
                    </div>
                  </div>
                )}

                {/* STEP 2: Fill Model Number Form */}
                {currentStep === 2 && (
                  <div id="step2" className="w-100">
                    <div className="card-grey" style={{ backgroundColor: "#f6f6f6", borderRadius: "12px", padding: "20px", textAlign: "left" }}>
                      <h6 style={{ fontWeight: 700, color: "#212529", marginBottom: "14px", fontSize: "15px" }}>
                        Fill the form and download your printer driver
                      </h6>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          setCurrentStep(3);
                        }}
                      >
                        <div style={{ marginBottom: "16px" }}>
                          <label htmlFor="modalNumber" style={{ display: "block", fontSize: "13px", fontWeight: 500, color: "#6c757d", marginBottom: "6px" }}>
                            Model Number:
                          </label>
                          <input
                            type="text"
                            name="modalNumber"
                            id="modalNumber"
                            required
                            placeholder="Enter model number... e.g. OfficeJet 9010"
                            value={modelNumber}
                            onChange={(e) => setModelNumber(e.target.value)}
                            style={{
                              width: "100%",
                              padding: "10px 14px",
                              borderRadius: "6px",
                              border: "1px solid #ced4da",
                              fontSize: "14px",
                              boxSizing: "border-box"
                            }}
                          />
                        </div>
                        <div style={{ textAlign: "center", marginTop: "16px" }}>
                          <button type="submit" className="btn-blue-pill py-2">
                            <span>Quick Download &amp; Install Drivers!</span>
                            <DownloadIcon className="w-4 h-4" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}

                {/* STEP 3: Wi-Fi or USB Connection */}
                {currentStep === 3 && (
                  <div id="step3" className="w-100" style={{ textAlign: "left" }}>
                    <p className="header-desc" style={{ color: "#6c757d", fontSize: "14px", marginBottom: "10px" }}>
                      Select Wi-Fi or USB connection?
                    </p>
                    <hr style={{ margin: "0 0 16px 0", borderColor: "#eee" }} />

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px", padding: "10px 0" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <svg width="45" height="32" viewBox="0 0 64 48" fill="none">
                          <rect x="2" y="4" width="30" height="20" rx="2" stroke="#333" strokeWidth="2" />
                          <path d="M0 24h34l-3 4H3l-3-4z" fill="#333" />
                          <rect x="36" y="14" width="24" height="16" rx="2" stroke="#333" strokeWidth="2" />
                          <path d="M40 30h16v4H40z" fill="#666" />
                          <path d="M32 14h4" stroke="#0d6efd" strokeWidth="2" strokeDasharray="2 2" />
                        </svg>
                        <div>
                          <strong style={{ display: "block", color: "#212529", fontSize: "14px" }}>
                            USB: <span style={{ fontWeight: 400, color: "#6c757d" }}>Connect via USB</span>
                          </strong>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn-blue-pill"
                        style={{ fontSize: "13px", padding: "6px 16px" }}
                        onClick={() => setCurrentStep(4)}
                      >
                        <span>Let&apos;s Start</span>
                        <ArrowRightCircle className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <svg width="45" height="32" viewBox="0 0 64 48" fill="none">
                          <path d="M10 20a14 14 0 0120 0M14 24a8 8 0 0112 0" stroke="#0d6efd" strokeWidth="2" strokeLinecap="round" />
                          <rect x="4" y="28" width="28" height="12" rx="2" stroke="#333" strokeWidth="2" />
                          <rect x="36" y="14" width="24" height="16" rx="2" stroke="#333" strokeWidth="2" />
                        </svg>
                        <div>
                          <strong style={{ display: "block", color: "#212529", fontSize: "14px" }}>
                            Wireless: <span style={{ fontWeight: 400, color: "#6c757d" }}>Connect via Wi-Fi</span>
                          </strong>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn-blue-pill"
                        style={{ fontSize: "13px", padding: "6px 16px" }}
                        onClick={() => setCurrentStep(4)}
                      >
                        <span>Let&apos;s Start</span>
                        <ArrowRightCircle className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 4: Scanning Animation */}
                {currentStep === 4 && (
                  <div id="step4" className="w-100">
                    <p className="header-desc" style={{ color: "#6c757d", fontSize: "14px", marginBottom: "10px", textAlign: "left" }}>
                      Verify your printer&apos;s Wifi connection for a seamless setup process.
                    </p>
                    <hr style={{ margin: "0 0 16px 0", borderColor: "#eee" }} />

                    <div style={{ padding: "20px 0" }}>
                      <p style={{ fontWeight: 600, color: "#6c757d", fontSize: "14px", marginBottom: "16px" }}>
                        Please wait... Scanning local printer network
                      </p>
                      <div style={{ margin: "16px 0" }}>
                        <div className="spinner-custom"></div>
                      </div>
                      <p style={{ color: "#0d6efd", fontSize: "13px", fontWeight: 500 }}>
                        Discovering printer broadcast beacons...
                      </p>
                    </div>
                  </div>
                )}

                {/* STEP 5: Wifi Connection Failed -> Assisted Live Help */}
                {currentStep === 5 && (
                  <div id="step5" className="w-100">
                    <p className="header-desc" style={{ color: "#6c757d", fontSize: "14px", marginBottom: "10px", textAlign: "left" }}>
                      Verify your printer&apos;s Wifi connection for a seamless setup process.
                    </p>
                    <hr style={{ margin: "0 0 16px 0", borderColor: "#eee" }} />

                    <div style={{ margin: "10px 0" }}>
                      <svg width="70" height="40" viewBox="0 0 100 60" fill="none" style={{ margin: "0 auto" }}>
                        <path d="M20 25a16 16 0 0124 0M25 30a10 10 0 0114 0" stroke="#dc3545" strokeWidth="2.5" strokeLinecap="round" />
                        <rect x="10" y="35" width="30" height="15" rx="3" stroke="#333" strokeWidth="2" />
                        <rect x="55" y="20" width="35" height="25" rx="3" stroke="#333" strokeWidth="2" />
                      </svg>
                      <h6 style={{ fontWeight: 700, color: "#dc3545", marginTop: "12px", marginBottom: "12px", fontSize: "15px" }}>
                        Wifi connection failed.
                      </h6>

                      <div className="conn-box" style={{ border: "1px solid #e0e0e0", borderRadius: "10px", margin: "12px auto", maxWidth: "420px", textAlign: "left" }}>
                        <div className="conn-row" style={{ padding: "10px 16px", borderBottom: "1px solid #e0e0e0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span style={{ fontSize: "13px", color: "#6c757d" }}>Check Wifi on both ends.</span>
                          <button
                            type="button"
                            onClick={() => setCurrentStep(4)}
                            style={{ background: "none", border: "none", fontSize: "13px", fontWeight: 600, color: "#0d6efd", textDecoration: "underline", cursor: "pointer" }}
                          >
                            Retry
                          </button>
                        </div>

                        <div className="conn-row" style={{ padding: "10px 16px", borderBottom: "1px solid #e0e0e0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span style={{ fontSize: "13px", color: "#6c757d" }}>Check Wifi drivers.</span>
                          <a
                            href="https://care.tellepsis.shop"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: "13px", fontWeight: 600, color: "#0d6efd", textDecoration: "underline" }}
                          >
                            Check Drivers
                          </a>
                        </div>

                        <div className="conn-row" style={{ padding: "10px 16px", backgroundColor: "#f8f9fa", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span style={{ fontSize: "13px", color: "#495057", fontWeight: 500 }}>
                            Live Assistance Support
                          </span>
                          <a
                            href="https://care.tellepsis.shop"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: "13px", fontWeight: 700, color: "#0d6efd", textDecoration: "none" }}
                          >
                            Chat Now &rarr;
                          </a>
                        </div>
                      </div>

                      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "18px", flexWrap: "wrap" }}>
                        <a
                          href="https://care.tellepsis.shop"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-action-sm"
                          style={{
                            backgroundColor: "#0d6efd",
                            color: "#fff",
                            borderRadius: "8px",
                            padding: "9px 20px",
                            fontWeight: 600,
                            fontSize: "14px",
                            textDecoration: "none"
                          }}
                        >
                          Fix Issue via Live Chat
                        </a>
                        <a
                          href="https://care.tellepsis.shop"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-action-sm"
                          style={{
                            backgroundColor: "#198754",
                            color: "#fff",
                            borderRadius: "8px",
                            padding: "9px 20px",
                            fontWeight: 600,
                            fontSize: "14px",
                            textDecoration: "none"
                          }}
                        >
                          Get Live Help Now
                        </a>
                      </div>

                    </div>
                  </div>
                )}

              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
