import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Live Feed Reviews",
  description: "Privacy Policy for Live Feed Reviews - Learn how we collect, use, and protect your information, including Google Ads, Analytics, and affiliate tracking.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Live Feed Reviews",
    description: "Privacy Policy for Live Feed Reviews - Learn how we collect, use, and protect your information.",
    url: "https://www.livefeedreviews.com/privacy-policy",
    siteName: "Live Feed Reviews",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      {/* Header */}
      <div className="bg-slate-950 text-white border-b border-slate-800 pt-12 pb-12">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl space-y-3">
          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
            Privacy &amp; Data Transparency
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm md:text-base text-slate-400">
            Effective Date: January 15, 2024 &bull; Last Updated: November 24, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 pt-10">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12 text-slate-700 leading-relaxed space-y-6 text-sm sm:text-base">
          <p>
            At <strong className="text-slate-900">Live Feed Reviews</strong> (operated by <strong className="text-slate-900">Tellepsis Media LLC</strong>; support: <a href="mailto:support@tellepsis.com" className="text-blue-600 underline">support@tellepsis.com</a> | <a href="tel:+18883442323" className="text-blue-600 underline">+1 (888) 344-2323</a>), accessible from https://www.livefeedreviews.com, the privacy of our visitors is of paramount importance. This Privacy Policy document details the types of information collected and recorded by Live Feed Reviews and how we use it.
          </p>
          <p>
            If you have questions or require additional information about our Privacy Policy, please reach out via our <Link href="/contact" className="text-blue-600 underline font-semibold">Contact Page</Link>.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-8 mb-3 tracking-tight">
            1. Information We Collect
          </h2>
          <p>
            We collect several different types of information for various purposes to provide and improve our service to you.
          </p>
          
          <h3 className="text-lg font-bold text-slate-900 mt-4 mb-2">Personal Data</h3>
          <p>
            While using our Service (for example, when submitting inquiries on our contact form), you may provide personally identifiable information, including:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 marker:text-blue-500">
            <li>First and last name</li>
            <li>Email address</li>
            <li>Inquiry topic and message details</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-900 mt-4 mb-2">Usage Data</h3>
          <p>
            We automatically collect information on how the Service is accessed and used (&quot;Usage Data&quot;). This may include your IP address, browser type, operating system, pages visited, time spent on pages, and diagnostic timestamps.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-8 mb-3 tracking-tight">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-1.5 marker:text-blue-500">
            <li>To operate and maintain our website, reviews, and diagnostic tools.</li>
            <li>To respond to editorial questions, feedback, and user inquiries submitted through our contact form.</li>
            <li>To analyze traffic patterns, search queries, and article engagement to improve site usability.</li>
            <li>To monitor system health, prevent spam submissions, and protect site security.</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-8 mb-3 tracking-tight">
            3. Cookies, Analytics &amp; Advertising Technologies
          </h2>
          <p>
            We use cookies, web beacons, and similar tracking technologies to track activity on our Service and store certain information.
          </p>
          <div className="space-y-3 pt-2">
            <div>
              <strong className="text-slate-900">Google Analytics:</strong> We use Google Analytics to analyze visitor traffic and content engagement. Google Analytics collects anonymous information regarding device types, bounce rates, and session durations using cookies.
            </div>
            <div>
              <strong className="text-slate-900">Google Ads &amp; Advertising Cookies:</strong> Google and authorized third-party vendors may serve ads based on prior visits to our website or other websites. Users may opt out of personalized advertising by visiting Google Ad Settings (https://adssettings.google.com).
            </div>
            <div>
              <strong className="text-slate-900">Affiliate Click Tracking:</strong> When you click outbound retailer links, affiliate tracking cookies may be set by affiliate networks (including Amazon Associates) to attribute qualifying purchases. These cookies do not collect personal identifying information like credit card numbers or passwords.
            </div>
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-8 mb-3 tracking-tight">
            4. Affiliate Disclosure Integration
          </h2>
          <p>
            Live Feed Reviews participates in affiliate marketing programs. For full transparency regarding our commercial affiliate relationships, retailer commissions, and editorial guidelines, please review our comprehensive <Link href="/affiliate-disclosure" className="text-blue-600 underline font-semibold">Affiliate Disclosure</Link>.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-8 mb-3 tracking-tight">
            5. Third-Party Services &amp; Links
          </h2>
          <p>
            Our Service may contain links to external third-party sites, retailer pages, diagnostic tools, and chat services. If you click on a third-party link, you will be directed to that third party&apos;s site. We encourage you to review the Privacy Policy of every site you visit.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-8 mb-3 tracking-tight">
            6. Data Security
          </h2>
          <p>
            The security of your personal information is important to us. We employ standard 256-bit SSL encryption to protect data transmissions. However, no electronic transmission or storage method is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-8 mb-3 tracking-tight">
            7. Changes to This Privacy Policy
          </h2>
          <p>
            We may update our Privacy Policy periodically. We will post any changes on this page with an updated &quot;Last Updated&quot; date at the top.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-8 mb-3 tracking-tight">
            8. Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy, your personal data, or opt-out options, please submit an inquiry through our <Link href="/contact" className="text-blue-600 underline font-semibold">Contact Us Page</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
