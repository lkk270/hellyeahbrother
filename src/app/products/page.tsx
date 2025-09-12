import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { db } from '@/lib/db';
import { products } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export default async function ProductsPage() {
  // In a real app, you'd fetch from the database
  // For now, we'll use static data
  const productData = [
    {
      id: '1',
      slug: 'trucker-hat',
      title: 'Trucker Hat',
      description: 'Classic fit trucker hat. Because sometimes you need to look like you know what you\'re doing.',
      priceCents: 3500,
      currency: 'usd',
      imageUrls: ['/products/trucker-hat-1.jpg', '/products/trucker-hat-2.jpg', '/products/trucker-hat-3.jpg'],
      options: {
        colors: ['Black', 'Navy', 'White'],
        sizes: ['One Size']
      },
      inventoryQty: 100,
    },
    {
      id: '2',
      slug: 'hell-yeah-button',
      title: 'Hell-Yeah Button',
      description: 'High-quality desk/fidget button that plays "Hell Yeah, Brother" when pressed. Sleeker and better designed than Staples\' "That Was Easy" button, with an on/off switch for when you need to be professional.',
      priceCents: 4500,
      currency: 'usd',
      imageUrls: ['/products/hell-yeah-button-1.jpg', '/products/hell-yeah-button-2.jpg', '/products/hell-yeah-button-3.jpg'],
      options: {
        colors: ['Black', 'Silver'],
        sizes: ['One Size']
      },
      inventoryQty: 50,
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Our Products
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Two products. Zero compromise. Maximum satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {productData.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.imageUrls[0]}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-black text-white">
                    {product.slug === 'trucker-hat' ? 'Classic Fit' : 'Interactive'}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-black mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {product.description}
                  </p>
                  
                  {/* Options */}
                  <div className="mb-4">
                    {product.options.colors && (
                      <div className="mb-2">
                        <span className="text-sm font-medium text-gray-700">Colors: </span>
                        <span className="text-sm text-gray-600">
                          {product.options.colors.join(', ')}
                        </span>
                      </div>
                    )}
                    {product.options.sizes && (
                      <div className="mb-2">
                        <span className="text-sm font-medium text-gray-700">Sizes: </span>
                        <span className="text-sm text-gray-600">
                          {product.options.sizes.join(', ')}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-mono font-bold text-black">
                      ${(product.priceCents / 100).toFixed(2)}
                    </span>
                    <Link href={`/products/${product.slug}`}>
                      <Button className="bg-black text-white hover:bg-gray-800">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
