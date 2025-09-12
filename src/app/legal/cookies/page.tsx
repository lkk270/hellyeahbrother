export default function CookiesPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-8">Cookie Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">What Are Cookies?</h2>
          <p className="text-gray-600 mb-6">
            Cookies are small text files that are placed on your device when you visit our website. 
            They help us provide you with a better experience by remembering your preferences and 
            enabling certain functionality.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">How We Use Cookies</h2>
          <p className="text-gray-600 mb-4">
            We use cookies for the following purposes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly, including cart persistence and checkout functionality.</li>
            <li><strong>Performance Cookies:</strong> These help us understand how visitors interact with our website by collecting anonymous information.</li>
            <li><strong>Analytics Cookies:</strong> These help us analyze website traffic and usage patterns to improve our services.</li>
          </ul>

          <h2 className="text-2xl font-bold text-black mb-4">What We Don't Do</h2>
          <p className="text-gray-600 mb-4">
            We are committed to your privacy and do not:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>Sell your personal data to third parties</li>
            <li>Use cookies for advertising or tracking across other websites</li>
            <li>Share your data with marketing companies</li>
            <li>Use invasive tracking technologies</li>
          </ul>

          <h2 className="text-2xl font-bold text-black mb-4">Cookie Types We Use</h2>
          <div className="space-y-4 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">Strictly Necessary Cookies</h3>
              <p className="text-gray-600">
                These cookies are essential for the website to function and cannot be switched off. 
                They are usually only set in response to actions made by you which amount to a request for services.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">Performance Cookies</h3>
              <p className="text-gray-600">
                These cookies allow us to count visits and traffic sources so we can measure and improve 
                the performance of our site. They help us to know which pages are the most and least popular.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-black mb-4">Managing Cookies</h2>
          <p className="text-gray-600 mb-4">
            You can control and manage cookies in various ways:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>Most web browsers allow you to control cookies through their settings preferences</li>
            <li>You can set your browser to refuse cookies or delete certain cookies</li>
            <li>If you choose to delete cookies, some features of our website may not function properly</li>
          </ul>

          <h2 className="text-2xl font-bold text-black mb-4">Third-Party Services</h2>
          <p className="text-gray-600 mb-4">
            We use the following third-party services that may set cookies:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li><strong>Stripe:</strong> For secure payment processing (essential for checkout functionality)</li>
            <li><strong>Vercel:</strong> For website hosting and performance analytics</li>
          </ul>

          <h2 className="text-2xl font-bold text-black mb-4">Updates to This Policy</h2>
          <p className="text-gray-600 mb-6">
            We may update this Cookie Policy from time to time. We will notify you of any changes 
            by posting the new Cookie Policy on this page and updating the "Last updated" date.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about this Cookie Policy, please contact us at{' '}
            <a href="mailto:privacy@hellyeahbrother.com" className="text-black underline hover:no-underline">
              privacy@hellyeahbrother.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
