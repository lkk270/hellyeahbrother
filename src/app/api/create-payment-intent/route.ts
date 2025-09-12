import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { z } from 'zod';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-08-27.basil',
});

const createPaymentIntentSchema = z.object({
  items: z.array(z.object({
    id: z.string(),
    title: z.string(),
    price: z.number(),
    quantity: z.number(),
    options: z.record(z.string(), z.string()).optional(),
  })),
  subtotal: z.number(),
  shipping: z.number(),
  tax: z.number(),
  total: z.number(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { items, subtotal, shipping, tax, total } = createPaymentIntentSchema.parse(body);

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(total * 100), // Convert to cents
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        items: JSON.stringify(items),
        subtotal: subtotal.toString(),
        shipping: shipping.toString(),
        tax: tax.toString(),
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    return NextResponse.json(
      { error: 'Failed to create payment intent' },
      { status: 500 }
    );
  }
}
