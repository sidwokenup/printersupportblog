import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | Live Feed Reviews",
  description: "Affiliate Disclosure for Live Feed Reviews - Learn how we earn commissions through Amazon Associates and other affiliate partners at no cost to you.",
  alternates: {
    canonical: "/affiliate-disclosure",
  },
  openGraph: {
    title: "Affiliate Disclosure | Live Feed Reviews",
    description: "Affiliate Disclosure for Live Feed Reviews - Learn how we earn commissions through Amazon Associates and other affiliate partners at no cost to you.",
    url: "https://www.livefeedreviews.com/affiliate-disclosure",
    siteName: "Live Feed Reviews",
    type: "website",
  },
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-12">
        {/* Header */}
        <header className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-semibold tracking-wide">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
            FTC &amp; Affiliate Compliance
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Affiliate Disclosure
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Transparency is central to how we operate. Learn how affiliate partnerships support our independent research at zero extra cost to you.
          </p>
        </header>

        {/* Content Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          {/* Official Amazon Statement Callout */}
          <div className="p-6 bg-amber-50 rounded-2xl border border-amber-200/80 space-y-2">
            <h2 className="text-base font-bold text-amber-950">Official Amazon Associates Statement</h2>
            <p className="text-sm text-amber-900 font-medium">
              &quot;As an Amazon Associate, Live Feed Reviews earns from qualifying purchases.&quot;
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">How Affiliate Links Work</h2>
            <p>
              Live Feed Reviews is an independent consumer technology publication. To fund our ongoing research, spec analysis, and free troubleshooting library without charging subscriptions or cluttering our site with intrusive pop-up ads, we participate in affiliate marketing programs.
            </p>
            <p>
              When you click on certain outbound links to retailers (such as Amazon or other licensed electronics vendors) and make a purchase, the retailer pays us a small referral commission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">Zero Extra Cost to You</h2>
            <p>
              Clicking an affiliate link does <strong>NOT</strong> increase the price you pay. The price, discounts, shipping terms, and return policies remain identical whether you use our link or navigate to the retailer directly.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">Editorial Independence &amp; No Paid Reviews</h2>
            <p>
              Our product recommendations and rankings are determined strictly by the research criteria explained on our <Link href="/methodology" className="text-blue-600 underline font-semibold">Research Methodology</Link> page.
            </p>
            <ul className="space-y-2 pt-2">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>We do NOT receive free merchandise or loaner units from manufacturers in exchange for guaranteed positive ratings.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Manufacturers cannot pay for placement in our top ranking slots or influence our editorial conclusions.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Every review article highlights both advantages (Pros) and drawbacks (Cons), including explicit &quot;Who Should NOT Buy&quot; warnings.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">Non-Affiliation Notice</h2>
            <p>
              Live Feed Reviews is not affiliated with, endorsed by, or sponsored by Brother, Canon, Epson, HP, Amazon, Shopify, eBay, or any other trademark owner. Product names and trademarks are used exclusively for comparative and nominative identification.
            </p>
          </section>

          <section className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-base">Questions about our affiliate partnerships?</h3>
              <p className="text-sm text-slate-600">Contact our compliance and editorial desk.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm transition-colors shadow-sm"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
