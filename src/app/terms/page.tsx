import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Live Feed Reviews",
  description: "Terms of Service for Live Feed Reviews - Review our independent directory terms and conditions.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service | Live Feed Reviews",
    description: "Terms of Service for Live Feed Reviews - Review our independent directory terms and conditions.",
    url: "https://www.livefeedreviews.com/terms",
    siteName: "Live Feed Reviews",
    type: "website",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <div className="bg-slate-900 text-white pt-12 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">Legal Notice</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Terms of Service</h1>
          <p className="text-slate-300 mt-2 text-sm sm:text-base">
            Last Updated: November 2026 &bull; Independent Consumer Hardware Directory
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-10">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing and using LiveFeedReviews (the &quot;Site&quot;), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">2. Independent Directory Notice</h2>
            <p>
              LiveFeedReviews is an independent diagnostic, educational, and consumer information guide. We are not affiliated with, endorsed by, sponsored by, or associated with HP, Canon, Epson, Brother, or any other original equipment manufacturer (OEM). All trademarks, brand names, and model designations are the property of their respective owners and are used purely for nominative and identification purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">3. Informational &amp; Diagnostic Content</h2>
            <p>
              The troubleshooting tutorials, driver guides, error code tables, and technical walkthroughs provided on this site are for general diagnostic and informational purposes only. While we endeavor to keep the information accurate and up to date, we make no representations or warranties of any kind regarding completeness, accuracy, or suitability. Any reliance you place on such information is strictly at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">4. Third-Party Links &amp; Live Chat Services</h2>
            <p>
              Our website may link to third-party diagnostic portals, including live technical chat assistance hosted at care.tellepsis.shop. LiveFeedReviews has no control over the nature, content, and availability of external services. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">5. Limitation of Liability</h2>
            <p>
              In no event will LiveFeedReviews or its owners be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">6. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us via our contact page at <a href="/contact" className="text-emerald-600 underline font-semibold">livefeedreviews.com/contact</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
