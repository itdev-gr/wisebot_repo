/**
 * GET /api/admin/stats — Admin dashboard data
 * =============================================
 * Returns users list + aggregate stats from Supabase + Stripe payments.
 * Protected: requires admin PIN in X-Admin-Pin header.
 */
import type { VercelRequest, VercelResponse } from '@vercel/node';

async function getSupabaseAdmin() {
  const { createClient } = await import('@supabase/supabase-js');
  return createClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || '',
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', req.headers?.origin || 'https://wisebot.gr');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  // Token-based auth — verify HMAC token matches what login generates
  const token = req.headers['x-admin-token'] as string;
  const adminSecret = process.env.ADMIN_SECRET;
  if (!token || !adminSecret) {
    return res.status(403).json({ error: 'Unauthorized' });
  }
  const crypto = await import('crypto');
  const expectedToken = crypto
    .createHmac('sha256', adminSecret)
    .update('wisebot_admin_session')
    .digest('hex');
  const tokenBuf = Buffer.from(token);
  const expectedBuf = Buffer.from(expectedToken);
  if (tokenBuf.length !== expectedBuf.length || !crypto.timingSafeEqual(tokenBuf, expectedBuf)) {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  try {
    const supabaseAdmin = await getSupabaseAdmin();

    // Fetch all users from auth
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.listUsers({
      perPage: 100,
    });

    if (authError) {
      console.error('[Admin] Auth list error:', authError.message);
      return res.status(500).json({ error: 'Failed to fetch users' });
    }

    const authUsers = authData?.users || [];

    // Fetch all profiles
    const { data: profiles } = await supabaseAdmin
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });

    // Fetch all stats
    const { data: stats } = await supabaseAdmin
      .from('stats')
      .select('*');

    // ── Fetch payments DIRECTLY from Stripe API ──
    let stripePayments: any[] = [];
    let totalRevenue = 0;
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (stripeKey) {
      try {
        const Stripe = (await import('stripe')).default;
        const stripe = new Stripe(stripeKey);
        const sessions = await stripe.checkout.sessions.list({
          limit: 100,
          expand: ['data.payment_intent'],
        });

        stripePayments = sessions.data
          .filter(s => s.payment_status === 'paid' && s.metadata?.packId) // Only WiseBot payments (have packId in metadata)
          .map(s => ({
            id: s.id,
            amount: (s.amount_total || 0) / 100,
            currency: s.currency?.toUpperCase() || 'EUR',
            credits: parseInt(s.metadata?.credits || '0'),
            packId: s.metadata?.packId || 'unknown',
            userId: s.metadata?.userId || 'anonymous',
            email: s.customer_details?.email || null,
            date: new Date((s.created || 0) * 1000).toISOString(),
            status: 'paid',
          }));

        totalRevenue = stripePayments.reduce((sum, p) => sum + p.amount, 0);
      } catch (stripeErr: any) {
        console.error('[Admin] Stripe error:', stripeErr.message);
      }
    }

    // Merge users with profiles and stats
    const users = authUsers.map(authUser => {
      const profile = (profiles || []).find(p => p.id === authUser.id);
      const stat = (stats || []).find(s => s.user_id === authUser.id);

      return {
        id: authUser.id,
        email: authUser.email,
        childName: profile?.child_name || authUser.user_metadata?.child_name || 'Unknown',
        parentEmail: profile?.parent_email || authUser.user_metadata?.parent_email || null,
        credits: profile?.credits || 0,
        xp: profile?.xp || 0,
        level: profile?.level || 1,
        emailConfirmed: !!authUser.email_confirmed_at,
        lastSignIn: authUser.last_sign_in_at || null,
        createdAt: authUser.created_at,
        stats: stat ? {
          images: stat.images_created || 0,
          videos: stat.videos_created || 0,
          songs: stat.songs_created || 0,
          quizzes: stat.quizzes_passed || 0,
          booksRead: stat.books_read || 0,
          storiesRead: stat.stories_read || 0,
          businesses: stat.businesses_created || 0,
          heroes: stat.heroes_completed || 0,
        } : null,
      };
    });

    // Calculate aggregate stats
    const totalCredits = (profiles || []).reduce((sum, p) => sum + (p.credits || 0), 0);
    const totalCreations = (stats || []).reduce((sum, s) =>
      sum + (s.images_created || 0) + (s.videos_created || 0) + (s.songs_created || 0) + (s.heroes_completed || 0), 0);
    const totalBooksRead = (stats || []).reduce((sum, s) => sum + (s.books_read || 0) + (s.stories_read || 0), 0);
    const totalQuizzes = (stats || []).reduce((sum, s) => sum + (s.quizzes_passed || 0), 0);

    return res.status(200).json({
      users,
      totals: {
        userCount: authUsers.length,
        totalCredits,
        totalCreations,
        totalBooksRead,
        totalQuizzes,
        purchaseCount: stripePayments.length,
        totalRevenue,
      },
      payments: stripePayments,
    });
  } catch (err: any) {
    console.error('[Admin] Error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
