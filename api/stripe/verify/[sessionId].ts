export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', (await import('../../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) return res.status(500).json({ error: 'Stripe not configured' });

    const { getAuthUser } = await import('../../_lib/auth.js');
    const authUser = await getAuthUser(req);
    if (!authUser || authUser.id === 'guest') {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const Stripe = (await import('stripe')).default;
    const stripe = new Stripe(key);
    const { sessionId } = req.query;

    if (!sessionId || typeof sessionId !== 'string') {
      return res.status(400).json({ error: 'Session ID required' });
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    // Only the buyer may read their session's outcome
    if (session.metadata?.userId && session.metadata.userId !== authUser.id) {
      return res.status(403).json({ error: 'Not your session' });
    }

    if (session.payment_status === 'paid') {
      const packId = session.metadata?.packId || '';
      const credits = parseInt(session.metadata?.credits || '0', 10);
      res.status(200).json({ success: true, credits, packId });
    } else {
      res.status(200).json({ success: false, credits: 0, packId: '' });
    }
  } catch (err: any) {
    console.error('Stripe verify error:', err.message);
    res.status(500).json({ error: 'Payment verification error' });
  }
}
