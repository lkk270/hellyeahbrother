import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Package, Mail, Phone } from 'lucide-react';

export default function SuccessPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-8" />
        
        <h1 className="text-4xl font-bold text-black mb-4">
          Order Confirmed!
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          Thank you for your order. We've received your payment and will process your order shortly.
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What's Next?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3">
              <Package className="h-5 w-5 text-gray-600 mt-1" />
              <div className="text-left">
                <h3 className="font-medium text-black">Order Processing</h3>
                <p className="text-sm text-gray-600">
                  We'll prepare your items and send them out within 1-2 business days.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Mail className="h-5 w-5 text-gray-600 mt-1" />
              <div className="text-left">
                <h3 className="font-medium text-black">Confirmation Email</h3>
                <p className="text-sm text-gray-600">
                  You'll receive an order confirmation and tracking information via email.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Phone className="h-5 w-5 text-gray-600 mt-1" />
              <div className="text-left">
                <h3 className="font-medium text-black">Need Help?</h3>
                <p className="text-sm text-gray-600">
                  Contact our support team if you have any questions about your order.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products">
            <Button className="bg-black text-white hover:bg-gray-800">
              Continue Shopping
            </Button>
          </Link>
          <Link href="/support">
            <Button variant="outline">
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
