import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Truck, Zap, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Born from a simple idea: make two things, make them right, 
            and make them with confidence.
          </p>
        </div>

        <div className="space-y-16">
          {/* Mission */}
          <section>
            <h2 className="text-3xl font-bold text-black mb-6">Our Mission</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                Hell Yeah Brother started with a simple observation: most companies try to do everything 
                and end up doing nothing well. We decided to flip that script.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Instead of flooding the market with dozens of mediocre products, we focus on making 
                two things exceptionally well: a premium trucker hat and the Hell-Yeah Button. 
                Each product is designed with attention to detail, quality materials, and that 
                perfect balance of functionality and attitude.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe in the power of saying "Hell Yeah" to the things that matter and 
                "Hell No" to everything else. Less is more, and more is better when it's done right.
              </p>
            </div>
          </section>

          {/* Values */}
          <section>
            <h2 className="text-3xl font-bold text-black mb-8">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <Truck className="h-12 w-12 text-black mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-black mb-3">Quality First</h3>
                  <p className="text-gray-600">
                    We use premium materials and meticulous craftsmanship. 
                    No shortcuts, no compromises.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <Zap className="h-12 w-12 text-black mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-black mb-3">Confidence</h3>
                  <p className="text-gray-600">
                    We make products that help you feel confident and ready 
                    to tackle whatever comes your way.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <Heart className="h-12 w-12 text-black mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-black mb-3">Simplicity</h3>
                  <p className="text-gray-600">
                    Life's complicated enough. Our products are simple, 
                    effective, and get straight to the point.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* The Products */}
          <section>
            <h2 className="text-3xl font-bold text-black mb-6">Why These Two Products?</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-black mb-3">The Trucker Hat</h3>
                <p className="text-gray-600 leading-relaxed">
                  Sometimes you need to look like you know what you're doing, even when you don't. 
                  Our trucker hat is the perfect balance of classic style and modern comfort. 
                  Made with premium materials and attention to detail that most companies skip.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-black mb-3">The Hell-Yeah Button</h3>
                <p className="text-gray-600 leading-relaxed">
                  We saw Staples' "That Was Easy" button and thought: "We can do better." 
                  So we did. Our Hell-Yeah Button is sleeker, sounds better, and has an on/off 
                  switch for when you need to be professional. It's the perfect desk companion 
                  for those moments when you need to celebrate a win or just need a little pick-me-up.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-12 bg-gray-50 rounded-lg">
            <h2 className="text-3xl font-bold text-black mb-4">
              Ready to Join the Brotherhood?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the difference that comes from focusing on what matters. 
              Two products, zero compromise, maximum satisfaction.
            </p>
            <Link href="/products">
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3">
                Shop Our Products
              </Button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
