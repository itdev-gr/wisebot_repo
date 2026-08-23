/**
 * GET /api/admin/health — project health for the owner's dashboard
 * ===================================================================
 * Everything here is read from real records, not estimated:
 *   - ledger:    public.credit_transactions (written by the spend_credits /
 *                earn_credits RPCs) — what was charged, earned, gifted, refunded
 *   - errors:    public.error_logs (written by /api/log-error from the ErrorBoundary)
 *   - purchases: public.purchases (written by the Stripe webhook)
 *   - checks:    live pings — Supabase, Stripe, and which provider keys exist
 * Protected: X-Admin-Token (12h HMAC from /api/admin/login).
 */
import { ADMIN_CORS_HEADERS, verifyAdminToken } from '../_lib/adminAuth.js';

const DAY = 24 * 60 * 60 * 1000;

async function getSupabaseAdmin() {
  const { createClient } = await import('@supabase/supabase-js');
  return createClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || '',
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}

type Tx = { user_id: string | null; amount: number; action: string; action_id: string | null; created_at: string; reason: string | null };

function sumBy(rows: Tx[], pick: (t: Tx) => boolean) {
  const out: Record<string, { count: number; credits: number }> = {};
  for (const t of rows) {
    if (!pick(t)) continue;
    const k = t.action || 'UNKNOWN';
    out[k] = out[k] || { count: 0, credits: 0 };
    out[k].count += 1;
    out[k].credits += t.amount;
  }
  return out;
}

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', ADMIN_CORS_HEADERS);
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  if (!verifyAdminToken(req.headers['x-admin-token'])) return res.status(403).json({ error: 'Unauthorized' });

  const now = Date.now();
  const since30 = new Date(now - 30 * DAY).toISOString();
  const since7 = new Date(now - 7 * DAY).toISOString();
  const since1 = new Date(now - DAY).toISOString();

  try {
    const supabase = await getSupabaseAdmin();
    const t0 = Date.now();

    const [txRes, errRes, err7Res, err1Res, purchRes, profilesRes, activeRes] = await Promise.all([
      supabase.from('credit_transactions').select('user_id, amount, action, action_id, created_at, reason')
        .gte('created_at', since30).order('created_at', { ascending: false }).limit(2000),
      supabase.from('error_logs').select('id, user_id, error_message, component, page_url, created_at')
        .order('created_at', { ascending: false }).limit(50),
      supabase.from('error_logs').select('id', { count: 'exact', head: true }).gte('created_at', since7),
      supabase.from('error_logs').select('id', { count: 'exact', head: true }).gte('created_at', since1),
      supabase.from('purchases').select('user_id, stripe_session_id, pack_id, credits_amount, amount_eur, status, created_at')
        .order('created_at', { ascending: false }).limit(50),
      supabase.from('profiles').select('id, child_name, parent_email'),
      supabase.from('profiles').select('id', { count: 'exact', head: true }).gte('updated_at', since7),
    ]);
    const supabaseMs = Date.now() - t0;
    const supabaseOk = !txRes.error && !errRes.error && !purchRes.error;

    const tx = (txRes.data || []) as Tx[];
    const names = new Map<string, string>();
    for (const p of profilesRes.data || []) names.set(p.id, p.child_name || p.parent_email || p.id.slice(0, 8));

    const isSpend = (t: Tx) => t.amount < 0 && t.action !== 'GIFT_SENT';
    const spend7 = sumBy(tx.filter(t => t.created_at >= since7), isSpend);
    const spend30 = sumBy(tx, isSpend);
    const earn30 = sumBy(tx, t => t.amount > 0);

    const byUser: Record<string, number> = {};
    for (const t of tx) if (isSpend(t) && t.user_id) byUser[t.user_id] = (byUser[t.user_id] || 0) + t.amount;
    const topSpenders = Object.entries(byUser)
      .sort((a, b) => a[1] - b[1]).slice(0, 10)
      .map(([id, credits]) => ({ userId: id, name: names.get(id) || id.slice(0, 8), credits: -credits }));

    // Stripe: real money, last 100 checkout sessions, with the non-paid ones too.
    let stripe: { ok: boolean; ms: number; paid: number; revenue: number; open: number; expired: number; failedWebhookMatches: number } =
      { ok: false, ms: 0, paid: 0, revenue: 0, open: 0, expired: 0, failedWebhookMatches: 0 };
    if (process.env.STRIPE_SECRET_KEY) {
      const t1 = Date.now();
      try {
        const Stripe = (await import('stripe')).default;
        const client = new Stripe(process.env.STRIPE_SECRET_KEY);
        const sessions = await client.checkout.sessions.list({ limit: 100 });
        const ours = sessions.data.filter(s => s.metadata?.packId);
        const paidSessions = ours.filter(s => s.payment_status === 'paid');
        const recorded = new Set((purchRes.data || []).map(p => p.stripe_session_id));
        stripe = {
          ok: true,
          ms: Date.now() - t1,
          paid: paidSessions.length,
          revenue: paidSessions.reduce((s, x) => s + (x.amount_total || 0), 0) / 100,
          open: ours.filter(s => s.status === 'open').length,
          expired: ours.filter(s => s.status === 'expired').length,
          // Paid in Stripe but missing from public.purchases = webhook did not land → credits not granted.
          failedWebhookMatches: paidSessions.filter(s => !recorded.has(s.id)).length,
        };
      } catch (e: any) {
        console.error('[admin/health] stripe:', e.message);
        stripe.ms = Date.now() - t1;
      }
    }

    return res.status(200).json({
      generatedAt: new Date(now).toISOString(),
      checks: {
        supabase: { ok: supabaseOk, ms: supabaseMs },
        stripe: { ok: stripe.ok, ms: stripe.ms, configured: !!process.env.STRIPE_SECRET_KEY },
        keys: {
          gemini: !!(process.env.GEMINI_API_KEY || process.env.API_KEY),
          suno: !!process.env.SUNO_API_KEY,
          meshy: !!process.env.MESHY_API_KEY,
          openai: !!process.env.OPENAI_API_KEY,
          xai: !!process.env.XAI_API_KEY,
          resend: !!process.env.RESEND_API_KEY,
          twilio: !!(process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN),
          stripeWebhook: !!process.env.STRIPE_WEBHOOK_SECRET,
          adminAuth: !!process.env.ADMIN_SECRET,
        },
      },
      errors: {
        last24h: err1Res.count || 0,
        last7d: err7Res.count || 0,
        recent: (errRes.data || []).map(e => ({
          id: e.id,
          at: e.created_at,
          user: e.user_id ? (names.get(e.user_id) || e.user_id.slice(0, 8)) : null,
          message: (e.error_message || '').slice(0, 300),
          component: e.component,
          page: e.page_url,
        })),
      },
      ledger: {
        window: { since7, since30 },
        spend7,
        spend30,
        earn30,
        totalSpent30: Object.values(spend30).reduce((s, v) => s + v.credits, 0) * -1,
        totalEarned30: Object.values(earn30).reduce((s, v) => s + v.credits, 0),
        topSpenders,
        recent: tx.slice(0, 60).map(t => ({
          at: t.created_at,
          user: t.user_id ? (names.get(t.user_id) || t.user_id.slice(0, 8)) : null,
          action: t.action,
          amount: t.amount,
          reason: t.reason,
        })),
      },
      payments: {
        stripe,
        recorded: (purchRes.data || []).map(p => ({
          at: p.created_at,
          user: p.user_id ? (names.get(p.user_id) || p.user_id.slice(0, 8)) : null,
          pack: p.pack_id,
          credits: p.credits_amount,
          eur: Number(p.amount_eur),
          status: p.status,
        })),
      },
      activeUsers7d: activeRes.count || 0,
    });
  } catch (err: any) {
    console.error('[admin/health] error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
