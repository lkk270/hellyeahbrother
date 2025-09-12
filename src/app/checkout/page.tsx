'use client';

import { useState, useEffect } from 'react';
import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, AddressElement } from '@stripe/react-stripe-js';
import { toast } from 'sonner';
import { Lock, Truck, RotateCcw } from 'lucide-react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutPage() {
  const { state } = useCart();
  const { items } = state;
  const [clientSecret, setClientSecret] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal >= 50 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  useEffect(() => {
    if (items.length === 0) {
      window.location.href = '/cart';
      return;
    }

    // Create payment intent
    const createPaymentIntent = async () => {
      try {
        const response = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            items: items.map(item => ({
              id: item.id,
              title: item.title,
              price: item.price,
              quantity: item.quantity,
              options: item.options,
            })),
            subtotal,
            shipping,
            tax,
            total,
          }),
        });

        const { clientSecret } = await response.json();
        setClientSecret(clientSecret);
      } catch (error) {
        console.error('Error creating payment intent:', error);
        toast.error('Failed to initialize checkout');
      }
    };

    createPaymentIntent();
  }, [items, subtotal, shipping, tax, total]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    // Payment submission will be handled by Stripe Elements
  };

  if (items.length === 0) {
    return null; // Will redirect to cart
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div>
            <h1 className="text-3xl font-bold text-black mb-8">Checkout</h1>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4">
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-black">{item.title}</h3>
                        {item.options && (
                          <div className="text-sm text-gray-600">
                            {Object.entries(item.options)
                              .filter(([_, value]) => value)
                              .map(([key, value]) => (
                                <span key={key} className="capitalize">
                                  {key}: {value}
                                </span>
                              ))
                              .join(', ')}
                          </div>
                        )}
                        <div className="text-sm text-gray-600">
                          Qty: {item.quantity}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono font-bold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-mono">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-mono">
                        {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-mono">${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-2">
                      <span>Total</span>
                      <span className="font-mono">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Lock className="h-5 w-5 text-gray-600" />
                <span className="text-sm text-gray-600">Secure checkout powered by Stripe</span>
              </div>
              <div className="flex items-center space-x-3">
                <Truck className="h-5 w-5 text-gray-600" />
                <span className="text-sm text-gray-600">
                  {shipping === 0 ? 'Free shipping included' : 'Free shipping on orders over $50'}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw className="h-5 w-5 text-gray-600" />
                <span className="text-sm text-gray-600">30-day return policy</span>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div>
            {clientSecret && (
              <Elements
                stripe={stripePromise}
                options={{
                  clientSecret,
                  appearance: {
                    theme: 'stripe',
                    variables: {
                      colorPrimary: '#000000',
                    },
                  },
                }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Billing Address
                          </label>
                          <AddressElement
                            options={{
                              mode: 'billing',
                            }}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Payment Details
                          </label>
                          <PaymentElement />
                        </div>

                        <Button
                          type="submit"
                          disabled={isLoading}
                          className="w-full bg-black text-white hover:bg-gray-800 h-12 text-lg"
                        >
                          {isLoading ? 'Processing...' : `Pay $${total.toFixed(2)}`}
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </Elements>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
