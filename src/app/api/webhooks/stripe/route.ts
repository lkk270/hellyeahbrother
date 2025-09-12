import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { db } from '@/lib/db';
import { orders, stripeWebhooks } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-08-27.basil',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  // Check if we've already processed this event
  const existingWebhook = await db
    .select()
    .from(stripeWebhooks)
    .where(eq(stripeWebhooks.eventId, event.id))
    .limit(1);

  if (existingWebhook.length > 0) {
    console.log(`Event ${event.id} already processed`);
    return NextResponse.json({ received: true });
  }

  // Store webhook event
  await db.insert(stripeWebhooks).values({
    eventId: event.id,
    type: event.type,
    payload: event as any,
  });

  try {
    switch (event.type) {
      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        
        // Update order status to paid
        await db
          .update(orders)
          .set({ 
            status: 'paid',
            updatedAt: new Date(),
          })
          .where(eq(orders.stripePaymentIntentId, paymentIntent.id));

        console.log(`Payment succeeded for intent ${paymentIntent.id}`);
        break;
      }

      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        
        // Update order status to paid
        await db
          .update(orders)
          .set({ 
            status: 'paid',
            updatedAt: new Date(),
          })
          .where(eq(orders.stripeCheckoutSessionId, session.id));

        console.log(`Checkout session completed for ${session.id}`);
        break;
      }

      case 'charge.refunded': {
        const charge = event.data.object as Stripe.Charge;
        
        // Update order status to refunded
        await db
          .update(orders)
          .set({ 
            status: 'refunded',
            updatedAt: new Date(),
          })
          .where(eq(orders.stripePaymentIntentId, charge.payment_intent as string));

        console.log(`Charge refunded for ${charge.id}`);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    // Mark webhook as processed
    await db
      .update(stripeWebhooks)
      .set({ 
        processed: true,
        processedAt: new Date(),
      })
      .where(eq(stripeWebhooks.eventId, event.id));

  } catch (error) {
    console.error('Error processing webhook:', error);
    
    // Mark webhook as failed
    await db
      .update(stripeWebhooks)
      .set({ 
        processed: true,
        processedAt: new Date(),
        error: error instanceof Error ? error.message : 'Unknown error',
      })
      .where(eq(stripeWebhooks.eventId, event.id));

    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
