import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { AddToCartButton } from '@/components/add-to-cart-button';
import { Truck, Zap, Shield, RotateCcw, Lock } from 'lucide-react';

// Static product data - in a real app, this would come from the database
const products = {
  'trucker-hat': {
    id: '1',
    slug: 'trucker-hat',
    title: 'Trucker Hat',
    description: 'Classic fit trucker hat. Because sometimes you need to look like you know what you\'re doing.',
    priceCents: 3500,
    currency: 'usd',
    imageUrls: [
      '/products/trucker-hat-1.jpg',
      '/products/trucker-hat-2.jpg',
      '/products/trucker-hat-3.jpg'
    ],
    options: {
      colors: ['Black', 'Navy', 'White'],
      sizes: ['One Size']
    },
    inventoryQty: 100,
    specs: {
      material: '100% Cotton',
      fit: 'Classic',
      closure: 'Adjustable snapback',
      brim: 'Curved',
      care: 'Machine wash cold, air dry'
    }
  },
  'hell-yeah-button': {
    id: '2',
    slug: 'hell-yeah-button',
    title: 'Hell-Yeah Button',
    description: 'High-quality desk/fidget button that plays "Hell Yeah, Brother" when pressed. Sleeker and better designed than Staples\' "That Was Easy" button, with an on/off switch for when you need to be professional.',
    priceCents: 4500,
    currency: 'usd',
    imageUrls: [
      '/products/hell-yeah-button-1.jpg',
      '/products/hell-yeah-button-2.jpg',
      '/products/hell-yeah-button-3.jpg'
    ],
    options: {
      colors: ['Black', 'Silver'],
      sizes: ['One Size']
    },
    inventoryQty: 50,
    specs: {
      material: 'Premium plastic with metal components',
      power: '2x AAA batteries (included)',
      sound: 'High-quality speaker',
      features: 'On/off switch, volume control',
      care: 'Wipe clean with damp cloth'
    }
  }
};

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(products).map((slug) => ({
    slug,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products[slug as keyof typeof products];

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square relative overflow-hidden rounded-lg">
              <Image
                src={product.imageUrls[0]}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.imageUrls.slice(1).map((imageUrl, index) => (
                <div key={index} className="aspect-square relative overflow-hidden rounded-lg">
                  <Image
                    src={imageUrl}
                    alt={`${product.title} ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-black mb-4">
                {product.title}
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {product.description}
              </p>
              <div className="text-3xl font-mono font-bold text-black mb-6">
                ${(product.priceCents / 100).toFixed(2)}
              </div>
            </div>

            {/* Options */}
            <div className="space-y-4">
              {product.options.colors && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Color
                  </label>
                  <div className="flex space-x-2">
                    {product.options.colors.map((color) => (
                      <Button
                        key={color}
                        variant="outline"
                        size="sm"
                        className="capitalize"
                      >
                        {color}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {product.options.sizes && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Size
                  </label>
                  <div className="flex space-x-2">
                    {product.options.sizes.map((size) => (
                      <Button
                        key={size}
                        variant="outline"
                        size="sm"
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <AddToCartButton product={product} />
              <p className="text-sm text-gray-500">
                {product.inventoryQty > 0 
                  ? `${product.inventoryQty} in stock` 
                  : 'Out of stock'
                }
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-gray-200">
              <div className="text-center">
                <Truck className="h-6 w-6 text-gray-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Free Shipping</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-6 w-6 text-gray-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Easy Returns</p>
              </div>
              <div className="text-center">
                <Lock className="h-6 w-6 text-gray-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Secure Checkout</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Specifications */}
        <div className="mt-16">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="specifications">
              <AccordionTrigger className="text-lg font-semibold">
                Specifications
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-700 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                      </span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="shipping">
              <AccordionTrigger className="text-lg font-semibold">
                Shipping & Returns
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-4 space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Shipping</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Free shipping on orders over $50</li>
                      <li>• Standard shipping: 3-5 business days</li>
                      <li>• Express shipping: 1-2 business days</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Returns</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• 30-day return policy</li>
                      <li>• Free return shipping</li>
                      <li>• Items must be in original condition</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
