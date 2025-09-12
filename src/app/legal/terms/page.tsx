export default function TermsPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">Agreement to Terms</h2>
          <p className="text-gray-600 mb-6">
            By accessing and using the Hell Yeah Brother website, you accept and agree to be bound by 
            the terms and provision of this agreement. If you do not agree to abide by the above, 
            please do not use this service.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">Use License</h2>
          <p className="text-gray-600 mb-4">
            Permission is granted to temporarily download one copy of the materials on Hell Yeah Brother's 
            website for personal, non-commercial transitory viewing only. This is the grant of a license, 
            not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
          </ul>

          <h2 className="text-2xl font-bold text-black mb-4">Product Information</h2>
          <p className="text-gray-600 mb-4">
            We strive to provide accurate product descriptions and images. However, we do not warrant 
            that product descriptions or other content is accurate, complete, reliable, current, or 
            error-free. If a product offered by us is not as described, your sole remedy is to return 
            it in unused condition.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">Pricing and Payment</h2>
          <p className="text-gray-600 mb-4">
            All prices are subject to change without notice. We reserve the right to modify or discontinue 
            any product at any time. Payment is due at the time of purchase. We accept all major credit 
            cards and other payment methods as displayed on our checkout page.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">Shipping and Delivery</h2>
          <p className="text-gray-600 mb-4">
            We will make every effort to ship your order within 1-2 business days. Delivery times may vary 
            based on your location and shipping method selected. We are not responsible for delays caused 
            by shipping carriers or circumstances beyond our control.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">Returns and Refunds</h2>
          <p className="text-gray-600 mb-4">
            We offer a 30-day return policy for all products in their original condition. Returns must be 
            initiated within 30 days of delivery. Refunds will be processed within 5-7 business days after 
            we receive your returned item. Shipping costs for returns are covered by us.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">User Accounts</h2>
          <p className="text-gray-600 mb-4">
            When you create an account with us, you must provide information that is accurate, complete, 
            and current at all times. You are responsible for safeguarding the password and for all 
            activities that occur under your account.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">Prohibited Uses</h2>
          <p className="text-gray-600 mb-4">You may not use our website:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
            <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
            <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
            <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
            <li>To submit false or misleading information</li>
            <li>To upload or transmit viruses or any other type of malicious code</li>
          </ul>

          <h2 className="text-2xl font-bold text-black mb-4">Intellectual Property</h2>
          <p className="text-gray-600 mb-6">
            The service and its original content, features, and functionality are and will remain the 
            exclusive property of Hell Yeah Brother and its licensors. The service is protected by 
            copyright, trademark, and other laws. Our trademarks and trade dress may not be used in 
            connection with any product or service without our prior written consent.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">Disclaimer</h2>
          <p className="text-gray-600 mb-6">
            The information on this website is provided on an "as is" basis. To the fullest extent 
            permitted by law, Hell Yeah Brother excludes all representations, warranties, conditions 
            and terms relating to our website and the use of this website.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">Limitation of Liability</h2>
          <p className="text-gray-600 mb-6">
            In no event shall Hell Yeah Brother, nor its directors, employees, partners, agents, 
            suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, 
            or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
            or other intangible losses, resulting from your use of the service.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">Governing Law</h2>
          <p className="text-gray-600 mb-6">
            These Terms shall be interpreted and governed by the laws of the State of California, 
            without regard to its conflict of law provisions. Our failure to enforce any right or 
            provision of these Terms will not be considered a waiver of those rights.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">Changes to Terms</h2>
          <p className="text-gray-600 mb-6">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
            If a revision is material, we will try to provide at least 30 days notice prior to any new 
            terms taking effect.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">Contact Information</h2>
          <p className="text-gray-600">
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">
              <strong>Email:</strong> legal@hellyeahbrother.com<br />
              <strong>Phone:</strong> 1-800-HELL-YEAH<br />
              <strong>Address:</strong> Hell Yeah Brother, 123 Confidence St, Success City, SC 12345
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
