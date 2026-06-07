import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Live Free Reviews",
  description: "Privacy Policy for Live Free Reviews - Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 pt-10 pb-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-600">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 pt-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12 text-slate-700 leading-relaxed space-y-6">
          <p className="text-lg">
            At <strong className="text-slate-900">Live Free Reviews</strong>, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Live Free Reviews and how we use it.
          </p>
          <p className="text-lg">
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-8 mb-4 tracking-tight">1. Information We Collect</h2>
          <p className="text-lg">
            We collect several different types of information for various purposes to provide and improve our service to you.
          </p>
          
          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">Personal Data</h3>
          <p className="text-lg">
            While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to:
          </p>
          <ul className="list-disc pl-6 text-lg space-y-2 marker:text-blue-500">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Usage Data</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">Usage Data</h3>
          <p className="text-lg">
            We may also collect information on how the Service is accessed and used (&quot;Usage Data&quot;). This Usage Data may include information such as your device&apos;s Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-8 mb-4 tracking-tight">2. How We Use Your Information</h2>
          <p className="text-lg">We use the collected data for various purposes:</p>
          <ul className="list-disc pl-6 text-lg space-y-2 marker:text-blue-500">
            <li>To provide and maintain our Service.</li>
            <li>To notify you about changes to our Service.</li>
            <li>To allow you to participate in interactive features of our Service when you choose to do so.</li>
            <li>To provide customer support and personalized troubleshooting assistance.</li>
            <li>To gather analysis or valuable information so that we can improve our Service.</li>
            <li>To monitor the usage of our Service.</li>
            <li>To detect, prevent and address technical issues.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-8 mb-4 tracking-tight">3. Cookies and Tracking Technologies</h2>
          <p className="text-lg">
            We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-8 mb-4 tracking-tight">4. Third-Party Services</h2>
          <p className="text-lg">
            We may employ third-party companies and individuals to facilitate our Service (&quot;Service Providers&quot;), to provide the Service on our behalf, to perform Service-related services, or to assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-8 mb-4 tracking-tight">5. Data Security</h2>
          <p className="text-lg">
            The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-8 mb-4 tracking-tight">6. Links to Other Sites</h2>
          <p className="text-lg">
            Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party&apos;s site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-8 mb-4 tracking-tight">7. Changes to This Privacy Policy</h2>
          <p className="text-lg">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-8 mb-4 tracking-tight">8. Contact Us</h2>
          <p className="text-lg">
            If you have any questions about this Privacy Policy, please contact us by submitting a request through our Contact Us form.
          </p>
        </div>
      </div>
    </div>
  );
}
