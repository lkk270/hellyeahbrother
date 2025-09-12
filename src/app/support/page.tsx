import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MessageCircle } from 'lucide-react';

export default function SupportPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black mb-4">
            Support
          </h1>
          <p className="text-lg text-gray-600">
            We're here to help. Find answers to common questions or get in touch.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Options */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="font-medium text-black">Email</p>
                    <p className="text-sm text-gray-600">support@hellyeahbrother.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="font-medium text-black">Phone</p>
                    <p className="text-sm text-gray-600">1-800-HELL-YEAH</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="font-medium text-black">Live Chat</p>
                    <p className="text-sm text-gray-600">Available 9 AM - 5 PM EST</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-black mb-6">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="shipping">
                <AccordionTrigger className="text-left">
                  What are your shipping options?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p>We offer the following shipping options:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Free shipping on orders over $50</li>
                      <li>Standard shipping (3-5 business days): $9.99</li>
                      <li>Express shipping (1-2 business days): $19.99</li>
                    </ul>
                    <p>All orders are processed within 1-2 business days.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="returns">
                <AccordionTrigger className="text-left">
                  What is your return policy?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p>We offer a 30-day return policy for all items:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Items must be in original condition</li>
                      <li>Free return shipping included</li>
                      <li>Refunds processed within 5-7 business days</li>
                      <li>Contact us to initiate a return</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="button-safety">
                <AccordionTrigger className="text-left">
                  Is the Hell-Yeah Button safe to use?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p>Yes, the Hell-Yeah Button is completely safe:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Made with premium, non-toxic materials</li>
                      <li>Low voltage operation (2x AAA batteries)</li>
                      <li>No sharp edges or small parts</li>
                      <li>On/off switch for quiet environments</li>
                      <li>CE and FCC certified</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="button-care">
                <AccordionTrigger className="text-left">
                  How do I care for my Hell-Yeah Button?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p>To keep your Hell-Yeah Button in perfect condition:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Wipe clean with a damp cloth when needed</li>
                      <li>Replace batteries when sound becomes weak</li>
                      <li>Store in a dry place when not in use</li>
                      <li>Avoid dropping or excessive force</li>
                      <li>Use the on/off switch to preserve battery life</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="hat-care">
                <AccordionTrigger className="text-left">
                  How do I care for my trucker hat?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p>To maintain your trucker hat's shape and quality:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Machine wash cold with like colors</li>
                      <li>Air dry or tumble dry low heat</li>
                      <li>Don't iron the mesh back panel</li>
                      <li>Store on a hat form or hang to maintain shape</li>
                      <li>Spot clean stains with mild detergent</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sizing">
                <AccordionTrigger className="text-left">
                  What sizes are available?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p>Our products come in the following sizes:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li><strong>Trucker Hat:</strong> One Size (adjustable snapback)</li>
                      <li><strong>Hell-Yeah Button:</strong> One Size (desk-friendly dimensions)</li>
                    </ul>
                    <p>The trucker hat features an adjustable snapback closure that fits most head sizes.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="payment">
                <AccordionTrigger className="text-left">
                  What payment methods do you accept?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p>We accept all major payment methods through Stripe:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Credit cards (Visa, Mastercard, American Express)</li>
                      <li>Debit cards</li>
                      <li>Apple Pay</li>
                      <li>Google Pay</li>
                      <li>PayPal</li>
                    </ul>
                    <p>All payments are processed securely and encrypted.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
