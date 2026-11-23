"use client";

import React, { useState, useEffect, useRef } from "react";
import "@/app/printer-tips/services-wizard.css";
import { openLiveChat } from "@/components/chat/LiveChatWidget";

interface BrandConfig {
  logo: string;
  color: string;
  dark: string;
}

const BRAND_DETAILS: Record<string, BrandConfig> = {
  HP: {
    logo: "/assets/images/hp.svg",
    color: "#0096D6",
    dark: "#0077AD",
  },
  Canon: {
    logo: "/assets/images/canon-seeklogo.png",
    color: "#E60012",
    dark: "#B9000E",
  },
  EPSON: {
    logo: "/assets/images/epson.svg",
    color: "#003399",
    dark: "#00246E",
  },
  brother: {
    logo: "/assets/images/brother-seeklogo.png",
    color: "#003399",
    dark: "#00246E",
  },
  "Other Brand": {
    logo: "",
    color: "#0875DF",
    dark: "#075EB6",
  },
};

const MESSAGES = [
  { at: 0, text: "Preparing your guided process..." },
  { at: 15, text: "Checking selected printer information..." },
  { at: 30, text: "Reviewing printer configuration..." },
  { at: 45, text: "Preparing setup information..." },
  { at: 60, text: "Checking connection details..." },
  { at: 75, text: "Preparing troubleshooting steps..." },
  { at: 90, text: "Completing the guided process..." },
  { at: 97, text: "Finalizing..." },
];

export function PrinterServicesWizard() {
  const [step, setStep] = useState<number>(1);
  const [issue, setIssue] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [device, setDevice] = useState<string>("");
  const [connection, setConnection] = useState<string>("");

  // Processing state
  const [percent, setPercent] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>("Preparing your guided process...");
  const [isErrorScreen, setIsErrorScreen] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll to top on step change
  const goToStep = (targetStep: number) => {
    setStep(targetStep);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Step 1: Select issue
  const handleSelectIssue = (selectedIssue: string) => {
    setIssue(selectedIssue);
    goToStep(2);
  };

  // Step 2: Select brand
  const handleSelectBrand = (selectedBrand: string) => {
    setBrand(selectedBrand);
    goToStep(3);
  };

  // Step 3: Model Form Submit
  const handleModelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!model.trim()) return;
    goToStep(4);
  };

  // Step 4: Device
  const handleSelectDevice = (selectedDevice: string) => {
    setDevice(selectedDevice);
    goToStep(5);
  };

  // Step 5: Connection
  const handleSelectConnection = (selectedConnection: string) => {
    setConnection(selectedConnection);
    goToStep(6);
  };

  // Step 6: Start processing
  const handleStartProcess = () => {
    setIsErrorScreen(false);
    setPercent(0);
    setStatusText("Preparing your guided process...");
    goToStep(7);

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    const duration = 45000;
    const started = Date.now();

    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - started;
      const currentPercent = Math.min(100, Math.floor((elapsed / duration) * 100));

      setPercent(currentPercent);

      let currentMsg = MESSAGES[0].text;
      for (const m of MESSAGES) {
        if (currentPercent >= m.at) {
          currentMsg = m.text;
        }
      }
      setStatusText(currentMsg);

      if (elapsed >= duration) {
        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
        setPercent(100);
        setIsErrorScreen(true);
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    }, 150);
  };

  // Reset / Try Again
  const handleTryAgain = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIssue("");
    setBrand("");
    setModel("");
    setDevice("");
    setConnection("");
    setPercent(0);
    setIsErrorScreen(false);
    goToStep(1);
  };

  // Brand config
  const activeBrandConfig = BRAND_DETAILS[brand] || BRAND_DETAILS["Other Brand"];

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div className="services-wizard-wrapper">
      <main className="main-container">
        {/* STEP 1: ISSUE SELECTION */}
        <section className={`step ${step === 1 ? "active" : ""}`} id="step1">
          <div className="main-heading">
            <h1>Choose your printer issue</h1>
            <p>Select the topic that matches the problem you are experiencing.</p>
          </div>

          <div className="issue-grid" id="issueGrid">
            <button
              type="button"
              className="issue-card"
              data-issue="New Printer Setup"
              onClick={() => handleSelectIssue("New Printer Setup")}
            >
              <span className="issue-icon">
                <i className="fa-solid fa-print"></i>
              </span>
              <strong>New Printer Setup</strong>
              <span className="issue-description">
                Unbox, connect, and print your first page — without the guesswork.
              </span>
              <span className="issue-choose">Choose →</span>
            </button>

            <button
              type="button"
              className="issue-card"
              data-issue="Printer Offline"
              onClick={() => handleSelectIssue("Printer Offline")}
            >
              <span className="issue-icon">
                <i className="fa-solid fa-print"></i>
              </span>
              <strong>Printer Offline</strong>
              <span className="issue-description">
                Get a printer that says &quot;offline&quot; talking to your computer again.
              </span>
              <span className="issue-choose">Choose →</span>
            </button>

            <button
              type="button"
              className="issue-card"
              data-issue="Wi-Fi Drops"
              onClick={() => handleSelectIssue("Wi-Fi Drops")}
            >
              <span className="issue-icon">
                <i className="fa-solid fa-wifi"></i>
              </span>
              <strong>Wi-Fi Drops</strong>
              <span className="issue-description">
                Reconnect your printer when the wireless signal drops or will not pair.
              </span>
              <span className="issue-choose">Choose →</span>
            </button>

            <button
              type="button"
              className="issue-card"
              data-issue="Not Printing"
              onClick={() => handleSelectIssue("Not Printing")}
            >
              <span className="issue-icon">
                <i className="fa-solid fa-print"></i>
              </span>
              <strong>Not Printing</strong>
              <span className="issue-description">
                Jobs stuck in queue, blank pages, or slow spooling — get prints moving.
              </span>
              <span className="issue-choose">Choose →</span>
            </button>

            <button
              type="button"
              className="issue-card"
              data-issue="Scanner Issues"
              onClick={() => handleSelectIssue("Scanner Issues")}
            >
              <span className="issue-icon">
                <i className="fa-solid fa-print"></i>
              </span>
              <strong>Scanner Issues</strong>
              <span className="issue-description">
                Printer prints fine but scanning fails? Get the scanner responding again.
              </span>
              <span className="issue-choose">Choose →</span>
            </button>
          </div>
        </section>

        {/* STEP 2: BRAND SELECTION */}
        <section className={`step ${step === 2 ? "active" : ""}`} id="step2">
          <div className="brand-page">
            <div className="selected-issue">
              <i className="fa-solid fa-print"></i>
              <span>
                Your Selected Issue: <strong id="selectedIssueText">{issue || "—"}</strong>
              </span>
            </div>

            <div className="brand-heading">
              <h2>Select Your Printer Brand</h2>
            </div>

            <div className="brand-grid" id="brandGrid">
              <button
                type="button"
                className="brand-card"
                data-brand="HP"
                onClick={() => handleSelectBrand("HP")}
              >
                <img src="/assets/images/hp.svg" alt="HP logo" />
              </button>

              <button
                type="button"
                className="brand-card"
                data-brand="Canon"
                onClick={() => handleSelectBrand("Canon")}
              >
                <img src="/assets/images/canon-seeklogo.png" alt="Canon logo" />
              </button>

              <button
                type="button"
                className="brand-card"
                data-brand="EPSON"
                onClick={() => handleSelectBrand("EPSON")}
              >
                <img src="/assets/images/epson.svg" alt="EPSON logo" />
              </button>

              <button
                type="button"
                className="brand-card"
                data-brand="brother"
                onClick={() => handleSelectBrand("brother")}
              >
                <img src="/assets/images/brother-seeklogo.png" alt="brother logo" />
              </button>

              <button
                type="button"
                className="brand-card"
                data-brand="Other Brand"
                onClick={() => handleSelectBrand("Other Brand")}
              >
                <span className="other-brand-mark">Other Brand</span>
              </button>
            </div>

            <div className="how-it-works">
              <h3>How It Works</h3>
              <ol>
                <li>Tap your printer brand, then enter your printer model.</li>
                <li>Follow guided printer instructions.</li>
                <li>Get assistance if needed.</li>
              </ol>
            </div>

            <div className="independent-note">
              Independent printer assistance. Not affiliated with any printer manufacturer.
            </div>

            <div className="action-row">
              <button type="button" className="btn btn-back" onClick={() => goToStep(1)}>
                ← Back
              </button>
            </div>
          </div>
        </section>

        {/* STEP 3: BRAND MODEL PAGE */}
        <section className={`step ${step === 3 ? "active" : ""}`} id="step3">
          <div
            className="brand-model-page"
            id="brandModelPage"
            style={
              {
                "--brand-color": activeBrandConfig.color,
                "--brand-dark": activeBrandConfig.dark,
              } as React.CSSProperties
            }
          >
            <header className="brand-nav">
              <div className="brand-nav-inner">
                <a className="brand-nav-logo" href="#" aria-label="Brand home">
                  {activeBrandConfig.logo ? (
                    <img
                      id="selectedBrandLogo"
                      src={activeBrandConfig.logo}
                      alt={`${brand} logo`}
                      style={{ display: "block" }}
                    />
                  ) : (
                    <span id="otherBrandLogo" className="other-brand-mark">
                      Printer Support
                    </span>
                  )}
                </a>

                <nav className="brand-nav-links">
                  <a href="#" id="brandHomeLink" onClick={(e) => { e.preventDefault(); goToStep(1); }}>
                    Home
                  </a>
                  <a
                    href="#openLiveChat"
                    onClick={(e) => {
                      e.preventDefault();
                      openLiveChat();
                    }}
                  >
                    Support
                  </a>
                  <a
                    href="#openLiveChat"
                    onClick={(e) => {
                      e.preventDefault();
                      openLiveChat();
                    }}
                  >
                    Contact
                  </a>
                </nav>
              </div>
            </header>

            <div className="brand-model-content">
              <h1 className="brand-model-title" id="brandPageHeading">
                {brand} Support and Troubleshooting
              </h1>

              <h2>Enter your printer model number</h2>

              <form className="brand-model-form" id="brandModelForm" onSubmit={handleModelSubmit}>
                <input
                  type="text"
                  id="printerModel"
                  placeholder="Enter your printer model number"
                  maxLength={100}
                  autoComplete="off"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  required
                />

                <button type="submit" className="brand-get-started">
                  Get Started
                </button>
              </form>

              <div className="brand-progress">
                <div className="brand-progress-item active">1 Identify</div>
                <div className="brand-progress-item">2 Troubleshooting</div>
                <div className="brand-progress-item">3 Resolution</div>
              </div>
            </div>

            <footer className="brand-footer">
              <strong id="brandFooterName">{brand} Support</strong>
              <br />
              Independent printer assistance. Not affiliated with or endorsed by the printer manufacturer.
            </footer>
          </div>
        </section>

        {/* STEP 4: DEVICE SELECTION */}
        <section className={`step ${step === 4 ? "active" : ""}`} id="step4">
          <div className="brand-page">
            <div className="selected-issue">
              <i className="fa-solid fa-print"></i>
              <span>
                Issue: <strong id="deviceIssue">{issue || "—"}</strong>
                <br />
                Brand: <strong id="deviceBrand">{brand || "—"}</strong>
                &nbsp; Model: <strong id="deviceModel">{model || "—"}</strong>
              </span>
            </div>

            <div className="step-heading">
              <div className="step-label">STEP 1 OF 4</div>
              <h2>What device are you connecting your printer to?</h2>
            </div>

            <div className="device-grid" id="deviceGrid">
              <button
                type="button"
                className="device-card"
                data-device="Windows Computer"
                onClick={() => handleSelectDevice("Windows Computer")}
              >
                <i className="fa-brands fa-windows"></i>
                Windows Computer
              </button>

              <button
                type="button"
                className="device-card"
                data-device="Mac Computer"
                onClick={() => handleSelectDevice("Mac Computer")}
              >
                <i className="fa-brands fa-apple"></i>
                Mac Computer
              </button>

              <button
                type="button"
                className="device-card"
                data-device="Phone / Tablet"
                onClick={() => handleSelectDevice("Phone / Tablet")}
              >
                <i className="fa-solid fa-mobile-screen-button"></i>
                Phone / Tablet
              </button>

              <button
                type="button"
                className="device-card"
                data-device="Not Sure"
                onClick={() => handleSelectDevice("Not Sure")}
              >
                <i className="fa-regular fa-circle-question"></i>
                Not Sure
              </button>
            </div>

            <div className="action-row">
              <button type="button" className="btn btn-back" onClick={() => goToStep(3)}>
                ← Back
              </button>
            </div>
          </div>
        </section>

        {/* STEP 5: CONNECTION */}
        <section className={`step ${step === 5 ? "active" : ""}`} id="step5">
          <div className="brand-page">
            <div className="selected-issue">
              <i className="fa-solid fa-print"></i>
              <span>
                Issue: <strong id="connectionIssue">{issue || "—"}</strong>
                <br />
                Brand: <strong id="connectionBrand">{brand || "—"}</strong>
                &nbsp; Model: <strong id="connectionModel">{model || "—"}</strong>
              </span>
            </div>

            <div className="step-heading">
              <div className="step-label">STEP 2 OF 4</div>
              <h2>How would you like to connect your printer?</h2>
            </div>

            <div className="connection-grid" id="connectionGrid">
              <button
                type="button"
                className="connection-card"
                data-connection="Wi-Fi"
                onClick={() => handleSelectConnection("Wi-Fi")}
              >
                <i className="fa-solid fa-wifi"></i>
                Wi-Fi
              </button>

              <button
                type="button"
                className="connection-card"
                data-connection="USB Cable"
                onClick={() => handleSelectConnection("USB Cable")}
              >
                <i className="fa-brands fa-usb"></i>
                USB Cable
              </button>

              <button
                type="button"
                className="connection-card"
                data-connection="Not Sure"
                onClick={() => handleSelectConnection("Not Sure")}
              >
                <i className="fa-regular fa-circle-question"></i>
                Not Sure
              </button>
            </div>

            <div className="action-row">
              <button type="button" className="btn btn-back" onClick={() => goToStep(4)}>
                ← Back
              </button>
            </div>
          </div>
        </section>

        {/* STEP 6: PRINTER SUMMARY */}
        <section className={`step ${step === 6 ? "active" : ""}`} id="step6">
          <div className="step-heading">
            <div className="step-label">STEP 3 OF 4</div>
            <h2>Your Printer Summary</h2>
            <p>Please review your selected printer information.</p>
          </div>

          <div className="summary-box">
            <h2>Your Printer Summary</h2>

            <div className="summary-row">
              <span>Issue</span>
              <strong id="summaryIssue">{issue || "—"}</strong>
            </div>

            <div className="summary-row">
              <span>Brand</span>
              <strong id="summaryBrand">{brand || "—"}</strong>
            </div>

            <div className="summary-row">
              <span>Model</span>
              <strong id="summaryModel">{model || "—"}</strong>
            </div>

            <div className="summary-row">
              <span>Device</span>
              <strong id="summaryDevice">{device || "—"}</strong>
            </div>

            <div className="summary-row">
              <span>Connection</span>
              <strong id="summaryConnection">{connection || "—"}</strong>
            </div>
          </div>

          <div className="action-row">
            <button type="button" className="btn btn-back" onClick={() => goToStep(5)}>
              ← Back
            </button>

            <button
              type="button"
              className="btn btn-primary"
              id="startProcess"
              onClick={handleStartProcess}
            >
              Continue →
            </button>
          </div>
        </section>

        {/* STEP 7: PROCESSING AND FINAL ERROR */}
        <section className={`step ${step === 7 ? "active" : ""}`} id="step7">
          <div className="step-heading">
            <div className="step-label">STEP 4 OF 4</div>
            <h2>Printer Setup &amp; Troubleshooting</h2>
            <p>Please keep this page open while we prepare setup and troubleshooting steps.</p>
          </div>

          {/* PROCESSING SCREEN */}
          {!isErrorScreen && (
            <div className="processing-box" id="processingScreen">
              <div className="spinner"></div>

              <div className="percent" id="percentText">
                {percent}%
              </div>

              <div className="progress">
                <div
                  className="progress-bar"
                  id="progressBar"
                  style={{ width: `${percent}%` }}
                ></div>
              </div>

              <div className="processing-status" id="processingStatus">
                {statusText}
              </div>

              <p>Completing the guided process...</p>
            </div>
          )}

          {/* FINAL ERROR SCREEN */}
          {isErrorScreen && (
            <div className="error-panel" id="errorScreen">
              <div className="error-kicker">STEP 4 OF 4</div>

              <strong>
                <h2>
                  Do not try to re-install or retry again as it can permanently damage the software of your printer.
                </h2>
              </strong>

              <div className="error-summary">
                <strong>Your selected printer details</strong>
                <div>
                  Issue: <b id="errorIssue">{issue}</b>
                </div>
                <div>
                  Brand: <b id="errorBrand">{brand}</b>
                </div>
                <div>
                  Model: <b id="errorModel">{model}</b>
                </div>
                <div>
                  Device: <b id="errorDevice">{device}</b>
                </div>
                <div>
                  Connection: <b id="errorConnection">{connection}</b>
                </div>
              </div>

              <h3 className="support-title">Need a Hand?</h3>
              <p>Your selected printer details are included below.</p>

              <div className="support-actions">
                <button
                  type="button"
                  id="openLiveChat"
                  className="support-link primary"
                  onClick={() => openLiveChat()}
                >
                  <span>
                    <strong>Live Chat</strong>
                    <br />
                    Chat with a specialist now.
                  </span>
                </button>

                <button
                  type="button"
                  className="support-link"
                  id="tryAgain"
                  onClick={handleTryAgain}
                >
                  <span>
                    <strong>Try Again</strong>
                    <br />
                    Choose a different brand or model.
                  </span>
                </button>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
