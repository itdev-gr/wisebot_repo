/**
 * POST /api/auth/earn — the one way a child earns a credit without paying
 * ========================================================================
 * Credits (⚡) are bought by parents. Reading, quizzes, games and missions pay
 * in XP, levels and badges — never in credits — with a single exception that
 * rewards finishing real work: read a whole book AND pass its quiz → 1⚡, once
 * per book, ever.
 *
 * Until 24 Αυγούστου 2026 this endpoint accepted "give me up to 10⚡ for
 * <any action>" 40 times an hour with no proof, which made it a mint.
 *
 * Body: { action: 'READ_BOOK', bookId: number }
 * Response: { credits: number, earned: number }  — earned is 0 when the book
 *           was already rewarded (not an error: the client just shows nothing)
 */

const BOOK_REWARD = 1;
const MAX_BOOK_ID = 200;

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const user = await (await import('../_lib/auth.js')).getAuthUser(req);
  if (!user || user.id === 'guest') {
    return res.status(401).json({ error: 'Authentication required' });
  }

  const { checkRateLimit } = await import('../_lib/rateLimit.js');
  const rl = await checkRateLimit(user.id, 'earn', 20, 60); // 20 per hour — nobody finishes more books than that
  if (!rl.allowed) return res.status(429).json({ error: 'Too many requests', retryAfter: rl.retryAfter });

  const body = req.body || {};
  const action = typeof body.action === 'string' ? body.action.toUpperCase() : '';
  const bookId = Number(body.bookId);

  if (action !== 'READ_BOOK') return res.status(400).json({ error: 'Unknown action' });
  if (!Number.isInteger(bookId) || bookId < 1 || bookId > MAX_BOOK_ID) {
    return res.status(400).json({ error: 'bookId required' });
  }

  try {
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(
      process.env.SUPABASE_URL || '',
      process.env.SUPABASE_SERVICE_KEY || '',
      { auth: { autoRefreshToken: false, persistSession: false } }
    );
    // earn_credits logs (user, action, action_id); the unique index on that triple
    // makes a second claim for the same book fail before the balance changes.
    const { data, error } = await supabase.rpc('earn_credits', {
      p_user_id: user.id,
      p_amount: BOOK_REWARD,
      p_action: 'READ_BOOK',
      p_action_id: `book:${bookId}`,
    });

    if (error) {
      if (error.code === '23505') {
        const { data: profile } = await supabase.from('profiles').select('credits').eq('id', user.id).single();
        return res.status(200).json({ credits: profile?.credits ?? null, earned: 0 });
      }
      console.error('[earn] RPC error:', error.message);
      return res.status(500).json({ error: 'Failed to add credits' });
    }

    return res.status(200).json({ credits: data, earned: BOOK_REWARD });
  } catch (err: any) {
    console.error('[earn] Error:', err.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
