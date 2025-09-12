export default function ReturnsPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-8">Returns & Exchanges</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">30-Day Return Policy</h2>
          <p className="text-gray-600 mb-6">
            We want you to love your Hell Yeah Brother products. If you're not completely satisfied, 
            you can return any item within 30 days of delivery for a full refund or exchange.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">Return Conditions</h2>
          <p className="text-gray-600 mb-4">To be eligible for a return, your item must be:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>In its original condition (unworn, unused, with tags attached)</li>
            <li>In the original packaging</li>
            <li>Returned within 30 days of delivery</li>
            <li>Accompanied by the original receipt or order confirmation</li>
          </ul>

          <h2 className="text-2xl font-bold text-black mb-4">How to Return an Item</h2>
          <div className="space-y-4 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">Step 1: Contact Us</h3>
              <p className="text-gray-600">
                Email us at{' '}
                <a href="mailto:returns@hellyeahbrother.com" className="text-black underline hover:no-underline">
                  returns@hellyeahbrother.com
                </a>{' '}
                with your order number and reason for return. We'll provide you with a Return Merchandise 
                Authorization (RMA) number and return instructions.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">Step 2: Package Your Item</h3>
              <p className="text-gray-600">
                Place the item in its original packaging along with the RMA number. Include a copy of 
                your order confirmation or receipt.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">Step 3: Ship Your Return</h3>
              <p className="text-gray-600">
                Send the package to the address provided in your return instructions. We recommend 
                using a trackable shipping method. Return shipping is free for all returns.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-black mb-4">Refund Process</h2>
          <p className="text-gray-600 mb-4">
            Once we receive your returned item, we'll inspect it and process your refund within 5-7 
            business days. Refunds will be issued to the original payment method used for the purchase.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">Exchanges</h2>
          <p className="text-gray-600 mb-6">
            Need a different size or color? We're happy to help with exchanges. Follow the same return 
            process above, and let us know in your return request that you'd like to exchange the item. 
            We'll process the exchange once we receive your return.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">Damaged or Defective Items</h2>
          <p className="text-gray-600 mb-6">
            If you receive a damaged or defective item, please contact us immediately at{' '}
            <a href="mailto:support@hellyeahbrother.com" className="text-black underline hover:no-underline">
              support@hellyeahbrother.com
            </a>{' '}
            with photos of the damage. We'll arrange for a replacement or full refund at no cost to you.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">Return Shipping</h2>
          <p className="text-gray-600 mb-6">
            We cover the cost of return shipping for all returns. Simply follow the return process 
            above, and we'll provide you with a prepaid return label.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">Non-Returnable Items</h2>
          <p className="text-gray-600 mb-4">The following items cannot be returned:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>Items that have been worn or used</li>
            <li>Items damaged by misuse or normal wear and tear</li>
            <li>Items returned after 30 days</li>
            <li>Items without original packaging or tags</li>
          </ul>

          <h2 className="text-2xl font-bold text-black mb-4">International Returns</h2>
          <p className="text-gray-600 mb-6">
            International customers are responsible for return shipping costs. We recommend using a 
            trackable shipping method and keeping the receipt for your records.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4">Questions About Returns?</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about our return policy or need help with a return, please 
            don't hesitate to contact us:
          </p>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">
              <strong>Email:</strong> returns@hellyeahbrother.com<br />
              <strong>Phone:</strong> 1-800-HELL-YEAH<br />
              <strong>Hours:</strong> Monday - Friday, 9 AM - 5 PM EST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
