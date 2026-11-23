import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Live Feed Reviews",
  description: "Terms of Service for Live Feed Reviews - Review our terms and conditions for research guides and troubleshooting information.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service | Live Feed Reviews",
    description: "Terms of Service for Live Feed Reviews - Review our terms and conditions for research guides and troubleshooting information.",
    url: "https://www.livefeedreviews.com/terms",
    siteName: "Live Feed Reviews",
    type: "website",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <div className="bg-slate-950 text-white pt-12 pb-12 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">Legal Notice</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Terms of Service</h1>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Effective Date: January 15, 2024 &bull; Last Updated: November 24, 2026
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-10">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Live Feed Reviews (the &quot;Site&quot;), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">2. General Information &amp; No Professional Advice</h2>
            <p>
              The content provided on Live Feed Reviews—including hardware reviews, cost-per-page estimates, setup walkthroughs, and error code troubleshooting steps—is provided strictly for general informational, educational, and research purposes.
            </p>
            <p className="mt-2 font-medium text-slate-900">
              The information provided does NOT constitute certified electrical, professional engineering, or official manufacturer repair advice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">3. DIY Troubleshooting at User&apos;s Risk &amp; No Guarantee of Results</h2>
            <p>
              All DIY printer troubleshooting tutorials, reset sequences, spooler clearing routines, and mechanical unjamming steps are undertaken entirely at your own risk. We provide no guarantee that any suggested procedure will resolve your specific printer error, restore connectivity, or avoid hardware replacement.
            </p>
            <p className="mt-2">
              If your device is under manufacturer warranty, we recommend contacting the authorized manufacturer service center before attempting self-repair or disassembly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">4. Affiliate Links &amp; Commercial Relationships</h2>
            <p>
              Live Feed Reviews participates in affiliate marketing programs, including the Amazon Associates program. Some outbound product links are affiliate links, meaning we may earn a referral commission if you complete a purchase, at no additional cost to you. For full details, please review our <Link href="/affiliate-disclosure" className="text-blue-600 underline font-semibold">Affiliate Disclosure</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">5. External Links &amp; Third-Party Services</h2>
            <p>
              Our website may contain links to external third-party websites, retailer stores, diagnostic directories, or live chat providers. Live Feed Reviews does not operate, control, or endorse third-party platforms and assumes no responsibility for third-party content, terms, or privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">6. Non-Affiliation &amp; Trademarks</h2>
            <p>
              Live Feed Reviews is an independent publication. We are not affiliated with, endorsed by, or sponsored by Brother, Canon, Epson, HP, Amazon, Shopify, eBay, or any other trademark owner. All brand marks and product names are used solely for nominative product identification and comparison.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Live Feed Reviews, its owners, contributors, and operators shall not be liable for any direct, indirect, incidental, consequential, special, or exemplary damages resulting from your use of this site, reliance on any troubleshooting content, or purchases made through external affiliate links.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes become effective immediately upon posting to this page with an updated &quot;Last Updated&quot; date.
            </p>
          </section>

          <section className="pt-4 border-t border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-2">9. Contact Us</h2>
            <p>
              For legal inquiries or questions regarding these terms, contact us through our <Link href="/contact" className="text-blue-600 underline font-semibold">Contact Page</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
