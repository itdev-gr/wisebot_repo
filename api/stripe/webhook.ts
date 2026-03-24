import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';
import { withProtection } from '../_lib/middleware';

function getSupabaseAdmin() {
  return createClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || '',
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}

export const config = { api: { bodyParser: false } };

async function getRawBody(req: any): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on('data', (chunk: Buffer) => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

export default withProtection(async (req: any, res: any) => {
  if (req.method !== 'POST') return res.status(405).end();

  try {
    const key = process.env.STRIPE_SECRET_KEY;
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (!key || !webhookSecret) return res.status(500).json({ error: 'Not configured' });

    const stripe = new Stripe(key);
    const rawBody = await getRawBody(req);
    const sig = req.headers['stripe-signature'] as string;

    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
    } catch (err: any) {
      console.error('Webhook signature verification failed:', err.message);
      return res.status(400).json({ error: 'Invalid signature' });
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      const { userId, packId, credits } = session.metadata || {};
      const creditsAmount = parseInt(credits || '0');
      const sessionId = session.id;

      console.log(`[Webhook] Payment completed: user=${userId}, pack=${packId}, credits=${creditsAmount}`);

      // Write to Supabase if user is authenticated
      if (userId && userId !== 'anonymous' && creditsAmount > 0) {
        try {
          // Insert purchase record
          await getSupabaseAdmin()
            .from('purchases')
            .insert({
              user_id: userId,
              stripe_session_id: sessionId,
              pack_id: packId || 'unknown',
              credits_amount: creditsAmount,
              amount_eur: (session.amount_total || 0) / 100,
              status: 'completed',
            });

          // Add credits via atomic function
          const { error: rpcError } = await getSupabaseAdmin().rpc('earn_credits', {
            p_user_id: userId,
            p_amount: creditsAmount,
            p_action: 'PURCHASE',
            p_action_id: sessionId,
          });

          if (rpcError) {
            console.error('[Webhook] Credit RPC error:', rpcError.message);
          } else {
            console.log(`[Webhook] Added ${creditsAmount} credits to user ${userId}`);
          }
        } catch (dbErr: any) {
          console.error('[Webhook] DB error:', dbErr.message);
          // Don't fail the webhook — Stripe needs 200 to not retry
        }
      } else {
        console.log('[Webhook] Anonymous purchase or no credits — skipping DB write');
      }
    }

    res.json({ received: true });
  } catch (err: any) {
    console.error('Webhook error:', err.message);
    res.status(500).json({ error: 'Webhook processing error' });
  }
});
