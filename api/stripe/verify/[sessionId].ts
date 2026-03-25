import { withProtection } from '../../_lib/middleware';

export default withProtection(async (req: any, res: any) => {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) return res.status(500).json({ error: 'Stripe not configured' });

    const Stripe = (await import('stripe')).default;
    const stripe = new Stripe(key);
    const { sessionId } = req.query;

    if (!sessionId || typeof sessionId !== 'string') {
      return res.status(400).json({ error: 'Session ID required' });
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

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
});
