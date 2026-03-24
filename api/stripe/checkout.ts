import Stripe from 'stripe';
import { withProtection } from '../_lib/middleware';

const CREDIT_PACKS: Record<string, { name: string; credits: number; price: number }> = {
  starter: { name: 'WiseBot Academy ⚡ Starter (100 Credits)', credits: 100, price: 499 },
  hero:    { name: 'WiseBot Academy 🦸 Hero (240 Credits)', credits: 240, price: 999 },
  legend:  { name: 'WiseBot Academy 👑 Legend (600 Credits)', credits: 600, price: 1999 },
  ultimate:{ name: 'WiseBot Academy 🏆 Ultimate (1600 Credits)', credits: 1600, price: 3999 },
};

export default withProtection(async (req: any, res: any) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) return res.status(500).json({ error: 'Stripe not configured' });

    const stripe = new Stripe(key);
    const { packId, userId } = req.body;

    const pack = CREDIT_PACKS[packId];
    if (!pack) return res.status(400).json({ error: 'Invalid pack' });

    const frontendUrl = process.env.FRONTEND_URL || 'https://wisebot.gr';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'eur',
          product_data: {
            name: pack.name,
            description: `${pack.credits} WiseBot Academy Credits — Εκπαιδευτικό AI Παιχνίδι για Παιδιά | wisebot.gr`,
          },
          unit_amount: pack.price,
        },
        quantity: 1,
      }],
      mode: 'payment',
      payment_intent_data: {
        statement_descriptor: 'WISEBOT ACADEMY',
        description: `WiseBot Academy - ${pack.name}`,
      },
      // HashRouter: query params go BEFORE the hash for window.location.search
      success_url: `${frontendUrl}/?success=true&session_id={CHECKOUT_SESSION_ID}#/store`,
      cancel_url: `${frontendUrl}/#/store`,
      metadata: { userId: userId || 'anonymous', packId, credits: String(pack.credits) },
      custom_text: {
        submit: { message: 'Ευχαριστούμε που στηρίζεις το WiseBot Academy! 🎓 Τα Credits θα προστεθούν αυτόματα.' },
      },
    });

    res.status(200).json({ url: session.url, sessionId: session.id });
  } catch (err: any) {
    console.error('Stripe checkout error:', err.message, err.type, err.code);
    res.status(500).json({ error: err.message || 'Payment service error' });
  }
});
