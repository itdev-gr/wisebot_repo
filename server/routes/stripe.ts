/**
 * STRIPE PAYMENT ROUTES
 * =====================
 * Credit pack purchases via Stripe Checkout.
 *
 * Flow:
 * 1. Frontend calls POST /api/stripe/checkout with packId (authenticated)
 * 2. Server creates Stripe Checkout Session with userId from JWT
 * 3. User is redirected to Stripe payment page
 * 4. After payment, Stripe sends webhook to POST /api/stripe/webhook
 * 5. Server verifies webhook → adds credits to user account via Supabase RPC
 */

import { Router, Request, Response } from 'express';
import Stripe from 'stripe';
import { supabaseAdmin } from '../lib/supabase.js';

export const stripeRouter = Router();

// ─── Credit Packs ─────────────────────────────────────────
const CREDIT_PACKS = [
  { id: 'starter',  credits: 50,   priceEur: 299,   name: 'Starter Pack',  emoji: '⚡' },
  { id: 'hero',     credits: 150,  priceEur: 699,   name: 'Hero Pack',     emoji: '🦸' },
  { id: 'legend',   credits: 400,  priceEur: 1499,  name: 'Legend Pack',   emoji: '👑' },
  { id: 'ultimate', credits: 1000, priceEur: 2999,  name: 'Ultimate Pack', emoji: '🚀' },
];

const getStripe = () => {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error('STRIPE_SECRET_KEY not configured');
  return new Stripe(key);
};

// ─── Create Checkout Session (requires auth) ─────────────
stripeRouter.post('/checkout', async (req: Request, res: Response) => {
  try {
    // Get userId from authenticated user (JWT), NOT from request body
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const { packId } = req.body;
    const pack = CREDIT_PACKS.find(p => p.id === packId);
    if (!pack) return res.status(400).json({ error: 'Invalid pack' });

    const stripe = getStripe();
    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';

    // Create purchase record BEFORE Stripe session (for idempotency tracking)
    const { error: purchaseError } = await supabaseAdmin
      .from('purchases')
      .insert({
        user_id: userId,
        pack_id: pack.id,
        credits_amount: pack.credits,
        amount_eur: pack.priceEur / 100,
        status: 'pending',
      });

    if (purchaseError) {
      console.error('[Stripe] Purchase record error:', purchaseError.message);
      // Continue anyway — webhook will handle idempotency
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'eur',
          product_data: {
            name: `${pack.emoji} ${pack.name}`,
            description: `${pack.credits} WiseBot Credits`,
            images: [`${frontendUrl}/pwa-512x512.png`],
          },
          unit_amount: pack.priceEur, // in cents
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${frontendUrl}/#/store?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${frontendUrl}/#/store?cancelled=true`,
      metadata: {
        userId: userId,          // From JWT — not user-controlled
        packId: pack.id,
        credits: pack.credits.toString(),
      },
    });

    // Update purchase with stripe session ID
    if (session.id) {
      await supabaseAdmin
        .from('purchases')
        .update({ stripe_session_id: session.id })
        .eq('user_id', userId)
        .eq('pack_id', pack.id)
        .eq('status', 'pending')
        .is('stripe_session_id', null)
        .order('created_at', { ascending: false })
        .limit(1);
    }

    res.json({ url: session.url });
  } catch (err: any) {
    console.error('[Stripe] Checkout error:', err.message);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

// ─── Get Available Packs ──────────────────────────────────
stripeRouter.get('/packs', (_req: Request, res: Response) => {
  res.json(CREDIT_PACKS.map(p => ({
    id: p.id,
    credits: p.credits,
    price: (p.priceEur / 100).toFixed(2),
    currency: 'EUR',
    name: p.name,
    emoji: p.emoji,
  })));
});

// ─── Verify Session (after success redirect) ──────────────
stripeRouter.get('/verify/:sessionId', async (req: Request, res: Response) => {
  try {
    const stripe = getStripe();
    const sessionId = req.params.sessionId as string;
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === 'paid') {
      res.json({
        success: true,
        credits: parseInt(session.metadata?.credits || '0'),
        packId: session.metadata?.packId,
      });
    } else {
      res.json({ success: false, status: session.payment_status });
    }
  } catch (err: any) {
    console.error('[Stripe] Verify error:', err.message);
    res.status(500).json({ error: 'Failed to verify payment' });
  }
});

// ─── Webhook Handler (called from index.ts with raw body) ─
export const stripeWebhookHandler = async (req: Request, res: Response) => {
  const stripe = getStripe();
  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !webhookSecret) {
    return res.status(400).json({ error: 'Missing signature or webhook secret' });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
  } catch (err: any) {
    console.error('[Stripe] Webhook signature failed:', err.message);
    return res.status(400).json({ error: 'Invalid signature' });
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      const userId = session.metadata?.userId;
      const credits = parseInt(session.metadata?.credits || '0');
      const packId = session.metadata?.packId;

      console.log(`[Stripe] Payment received! User: ${userId}, Pack: ${packId}, Credits: ${credits}`);

      if (userId && credits > 0) {
        // Add credits via idempotent Supabase function
        // add_purchased_credits checks if session already processed
        const { error } = await supabaseAdmin.rpc('add_purchased_credits', {
          p_user_id: userId,
          p_amount: credits,
          p_stripe_session_id: session.id,
        });

        if (error) {
          console.error('[Stripe] Credit addition error:', error.message);
          // Don't return error — Stripe will retry webhook
        } else {
          console.log(`[Stripe] Credits added successfully: ${credits} credits to user ${userId}`);
        }
      }

      break;
    }

    case 'payment_intent.payment_failed': {
      const intent = event.data.object as Stripe.PaymentIntent;
      console.warn(`[Stripe] Payment failed for intent: ${intent.id}`);
      break;
    }
  }

  res.json({ received: true });
};
