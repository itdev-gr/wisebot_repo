// No middleware import — inline CORS to avoid bundling crash
const CREDIT_PACKS: Record<string, { name: string; credits: number; price: number }> = {
  starter: { name: 'WiseBot Academy Starter (100 Credits)', credits: 100, price: 499 },
  hero:    { name: 'WiseBot Academy Hero (240 Credits)', credits: 240, price: 999 },
  legend:  { name: 'WiseBot Academy Legend (600 Credits)', credits: 600, price: 1999 },
  ultimate:{ name: 'WiseBot Academy Ultimate (1600 Credits)', credits: 1600, price: 3999 },
};

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) return res.status(500).json({ error: 'Stripe not configured' });

    // ── AUTH: extract userId from JWT, never trust client-supplied userId ──
    const { getAuthUser } = await import('../_lib/auth');
    const authUser = await getAuthUser(req);
    const userId = authUser?.id || 'anonymous';

    const Stripe = (await import('stripe')).default;
    const stripe = new Stripe(key);
    const { packId } = req.body || {};

    const pack = CREDIT_PACKS[packId];
    if (!pack) return res.status(400).json({ error: 'Invalid pack' });

    const frontendUrl = process.env.FRONTEND_URL || 'https://wisebot.gr';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{ price_data: { currency: 'eur', product_data: { name: pack.name }, unit_amount: pack.price }, quantity: 1 }],
      mode: 'payment',
      success_url: `${frontendUrl}/store?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${frontendUrl}/store`,
      metadata: { userId: userId || 'anonymous', packId, credits: String(pack.credits) },
    });

    res.status(200).json({ url: session.url, sessionId: session.id });
  } catch (err: any) {
    console.error('[Stripe]', err.message);
    res.status(500).json({ error: err.message || 'Payment error' });
  }
}
