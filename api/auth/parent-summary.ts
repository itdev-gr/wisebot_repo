/**
 * GET /api/auth/parent-summary — the child's real numbers for the Parent Dashboard
 * =================================================================================
 * The dashboard used to read EconomyContext (localStorage): a parent opening
 * /parent on their own phone saw zeros, not what the child did on the tablet.
 * This returns the authoritative account data instead:
 *   - profiles: credits, xp, level, phone_verified
 *   - stats:    the creation/reading counters the app syncs
 *   - ledger:   credit_transactions → recent activity list, today's count,
 *               and a streak of consecutive days with any activity
 * Requires a logged-in user (the PIN gate sits in front of the page itself).
 */

const DAY_MS = 24 * 60 * 60 * 1000;

async function getAdminClient() {
  const { createClient } = await import('@supabase/supabase-js');
  return createClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || '',
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}

/** Consecutive days with activity, counting back from today (or yesterday, so an
 * unfinished day does not break the chain). Days are Europe/Athens — the audience. */
export function streakFromDates(dayStrings: Set<string>, today: string, yesterday: string, dayBefore: (d: string) => string): number {
  let cursor = dayStrings.has(today) ? today : dayStrings.has(yesterday) ? yesterday : null;
  let streak = 0;
  while (cursor && dayStrings.has(cursor)) {
    streak += 1;
    cursor = dayBefore(cursor);
  }
  return streak;
}

const athensDay = (d: Date) => d.toLocaleDateString('en-CA', { timeZone: 'Europe/Athens' }); // YYYY-MM-DD

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  const user = await (await import('../_lib/auth.js')).getAuthUser(req, { allowGuest: false });
  if (!user) return res.status(401).json({ error: 'Authentication required' });
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const { checkRateLimit } = await import('../_lib/rateLimit.js');
  const rl = await checkRateLimit(user.id, 'parent-summary', 60, 15);
  if (!rl.allowed) return res.status(429).json({ error: 'Too many requests', retryAfter: rl.retryAfter });

  try {
    const supabase = await getAdminClient();
    const since60d = new Date(Date.now() - 60 * DAY_MS).toISOString();

    const [profileRes, statsRes, txRes] = await Promise.all([
      supabase.from('profiles').select('credits, xp, level, child_name, phone_verified').eq('id', user.id).maybeSingle(),
      supabase.from('stats').select('*').eq('user_id', user.id).maybeSingle(),
      supabase.from('credit_transactions').select('action, amount, created_at')
        .eq('user_id', user.id).gte('created_at', since60d)
        .order('created_at', { ascending: false }).limit(500),
    ]);

    if (profileRes.error || statsRes.error || txRes.error) {
      console.error('[parent-summary]', profileRes.error?.message, statsRes.error?.message, txRes.error?.message);
      return res.status(500).json({ error: 'Internal server error' });
    }

    const tx = txRes.data || [];
    const today = athensDay(new Date());
    const yesterday = athensDay(new Date(Date.now() - DAY_MS));
    const days = new Set(tx.map(t => athensDay(new Date(t.created_at))));
    const dayBefore = (d: string) => athensDay(new Date(new Date(d + 'T12:00:00Z').getTime() - DAY_MS));

    const s = statsRes.data;
    return res.status(200).json({
      profile: {
        credits: profileRes.data?.credits ?? 0,
        xp: profileRes.data?.xp ?? 0,
        level: profileRes.data?.level ?? 1,
        childName: profileRes.data?.child_name ?? null,
        phoneVerified: !!profileRes.data?.phone_verified,
      },
      stats: {
        quizzesPassed: s?.quizzes_passed ?? 0,
        booksRead: s?.books_read ?? 0,
        lessonsRead: s?.stories_read ?? 0,
        imagesCreated: s?.images_created ?? 0,
        songsCreated: s?.songs_created ?? 0,
        videosCreated: s?.videos_created ?? 0,
        businessesCreated: s?.businesses_created ?? 0,
        heroesUploaded: s?.heroes_uploaded ?? 0,
      },
      activity: {
        todayCount: tx.filter(t => athensDay(new Date(t.created_at)) === today).length,
        streakDays: streakFromDates(days, today, yesterday, dayBefore),
        recent: tx.slice(0, 25).map(t => ({ action: t.action, amount: t.amount, at: t.created_at })),
      },
      generatedAt: new Date().toISOString(),
    });
  } catch (err: any) {
    console.error('[parent-summary] error:', err?.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
