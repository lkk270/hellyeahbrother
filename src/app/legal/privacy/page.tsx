export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">Introduction</h2>
          <p className="text-gray-600 mb-6">
            At Hell Yeah Brother, we respect your privacy and are committed to protecting your personal data. 
            This privacy policy explains how we collect, use, and safeguard your information when you visit 
            our website or make a purchase.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">Information We Collect</h2>
          <div className="space-y-4 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">Personal Information</h3>
              <p className="text-gray-600 mb-2">We may collect the following personal information:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Name and contact information (email address, phone number)</li>
                <li>Billing and shipping addresses</li>
                <li>Payment information (processed securely through Stripe)</li>
                <li>Order history and preferences</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">Automatically Collected Information</h3>
              <p className="text-gray-600 mb-2">We automatically collect certain information when you visit our website:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website information</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-black mb-4">How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">We use your personal information for the following purposes:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>Process and fulfill your orders</li>
            <li>Provide customer support and respond to inquiries</li>
            <li>Send order confirmations and shipping updates</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
            <li>Prevent fraud and ensure security</li>
          </ul>

          <h2 className="text-2xl font-bold text-black mb-4">Information Sharing</h2>
          <p className="text-gray-600 mb-4">
            We do not sell, trade, or rent your personal information to third parties. We may share your 
            information only in the following circumstances:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li><strong>Service Providers:</strong> With trusted third parties who help us operate our business (e.g., Stripe for payments, shipping companies)</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
          </ul>

          <h2 className="text-2xl font-bold text-black mb-4">Data Security</h2>
          <p className="text-gray-600 mb-6">
            We implement appropriate security measures to protect your personal information against 
            unauthorized access, alteration, disclosure, or destruction. All payment information is 
            processed securely through Stripe and is never stored on our servers.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">Your Rights</h2>
          <p className="text-gray-600 mb-4">You have the following rights regarding your personal information:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>Access and review your personal information</li>
            <li>Correct inaccurate or incomplete information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to processing of your personal information</li>
            <li>Data portability (receive your data in a structured format)</li>
          </ul>

          <h2 className="text-2xl font-bold text-black mb-4">Cookies and Tracking</h2>
          <p className="text-gray-600 mb-6">
            We use cookies and similar technologies to enhance your browsing experience. For more 
            information, please see our{' '}
            <a href="/legal/cookies" className="text-black underline hover:no-underline">
              Cookie Policy
            </a>.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">Third-Party Links</h2>
          <p className="text-gray-600 mb-6">
            Our website may contain links to third-party websites. We are not responsible for the 
            privacy practices or content of these external sites. We encourage you to review their 
            privacy policies before providing any personal information.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">Children's Privacy</h2>
          <p className="text-gray-600 mb-6">
            Our services are not intended for children under 13 years of age. We do not knowingly 
            collect personal information from children under 13. If we become aware that we have 
            collected personal information from a child under 13, we will take steps to delete such information.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">Changes to This Policy</h2>
          <p className="text-gray-600 mb-6">
            We may update this Privacy Policy from time to time. We will notify you of any changes 
            by posting the new Privacy Policy on this page and updating the "Last updated" date. 
            Your continued use of our services after any changes constitutes acceptance of the updated policy.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">
              <strong>Email:</strong> privacy@hellyeahbrother.com<br />
              <strong>Phone:</strong> 1-800-HELL-YEAH<br />
              <strong>Address:</strong> Hell Yeah Brother, 123 Confidence St, Success City, SC 12345
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
