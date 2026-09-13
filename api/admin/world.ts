/**
 * GET  /api/admin/world  — what WiseBot World is doing, as counts.
 * POST /api/admin/world  — { action: 'resolve', id } closes a «Λάθος σημείο» report.
 *
 * Reads `world_stamps` and `world_pin_reports` with the service key and returns
 * aggregates only: stamps per day for the last 30 days, stamps per place, how many
 * distinct explorers, and the open pin reports. No coordinates exist in these tables
 * and no user id leaves this endpoint — the dashboard shows the product, not the child.
 * Mapping a place to its city (place ids are prefixed by the city id) happens in the
 * browser, which already has the World registry; this function stays free of the
 * content modules.
 */
import { ADMIN_CORS_HEADERS, verifyAdminToken } from '../_lib/adminAuth.js';

const DAYS = 30;
const MAX_ROWS = 50_000;

async function getSupabaseAdmin() {
  const { createClient } = await import('@supabase/supabase-js');
  return createClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || '',
    { auth: { autoRefreshToken: false, persistSession: false } },
  );
}

const dayKey = (iso: string) => iso.slice(0, 10);

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', ADMIN_CORS_HEADERS);
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (!verifyAdminToken(req.headers['x-admin-token'])) {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  try {
    const supabase = await getSupabaseAdmin();

    if (req.method === 'POST') {
      const { action, id } = req.body || {};
      if (action !== 'resolve' || !Number.isInteger(Number(id))) {
        return res.status(400).json({ error: 'Bad request' });
      }
      const { error } = await supabase
        .from('world_pin_reports')
        .update({ resolved_at: new Date().toISOString() })
        .eq('id', Number(id));
      if (error) return res.status(500).json({ error: error.message });
      return res.status(200).json({ ok: true });
    }

    if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

    const since = new Date(Date.now() - DAYS * 24 * 3600 * 1000).toISOString();
    const [stampsAll, reportsOpen, reportsClosedCount] = await Promise.all([
      supabase.from('world_stamps').select('user_id, place_id, visited_at, correct').limit(MAX_ROWS),
      supabase
        .from('world_pin_reports')
        .select('id, place_id, reason, reported_at')
        .is('resolved_at', null)
        .order('reported_at', { ascending: false })
        .limit(200),
      supabase.from('world_pin_reports').select('id', { count: 'exact', head: true }).not('resolved_at', 'is', null),
    ]);
    if (stampsAll.error) return res.status(500).json({ error: stampsAll.error.message });

    const rows = stampsAll.data || [];
    const byDay = new Map<string, number>();
    const byPlace = new Map<string, { count: number; correct: number; last: string }>();
    const users = new Set<string>();
    let last7 = 0;
    let last30 = 0;
    const t7 = Date.now() - 7 * 24 * 3600 * 1000;
    const t30 = Date.now() - DAYS * 24 * 3600 * 1000;

    for (const r of rows) {
      users.add(r.user_id);
      const t = Date.parse(r.visited_at);
      if (t >= t30) {
        last30 += 1;
        const k = dayKey(r.visited_at);
        byDay.set(k, (byDay.get(k) || 0) + 1);
      }
      if (t >= t7) last7 += 1;
      const p = byPlace.get(r.place_id) || { count: 0, correct: 0, last: r.visited_at };
      p.count += 1;
      if (r.correct) p.correct += 1;
      if (r.visited_at > p.last) p.last = r.visited_at;
      byPlace.set(r.place_id, p);
    }

    // Every day of the window, zero included, so the sparkline has no gaps.
    const days: { date: string; count: number }[] = [];
    for (let i = DAYS - 1; i >= 0; i -= 1) {
      const d = new Date(Date.now() - i * 24 * 3600 * 1000).toISOString().slice(0, 10);
      days.push({ date: d, count: byDay.get(d) || 0 });
    }

    // Explorers who stamped anything in the last 30 days, and in the last 7.
    const active30 = new Set<string>();
    const active7 = new Set<string>();
    for (const r of rows) {
      const t = Date.parse(r.visited_at);
      if (t >= t30) active30.add(r.user_id);
      if (t >= t7) active7.add(r.user_id);
    }

    // A second city: an explorer with stamps under two different city prefixes. The
    // prefix is the city id — the browser has the real list; here the first segment of
    // the id is a good enough key because every city id is one word (athens, paris…).
    const citiesPerUser = new Map<string, Set<string>>();
    for (const r of rows) {
      const city = r.place_id.split('-')[0];
      const set = citiesPerUser.get(r.user_id) || new Set<string>();
      set.add(city);
      citiesPerUser.set(r.user_id, set);
    }
    let secondCity = 0;
    for (const set of citiesPerUser.values()) if (set.size >= 2) secondCity += 1;

    return res.status(200).json({
      generatedAt: new Date().toISOString(),
      since,
      stamps: {
        total: rows.length,
        truncated: rows.length >= MAX_ROWS,
        explorers: users.size,
        active7: active7.size,
        active30: active30.size,
        last7,
        last30,
        secondCity,
        byDay: days,
        byPlace: [...byPlace.entries()]
          .map(([place_id, v]) => ({ place_id, ...v }))
          .sort((a, b) => b.count - a.count),
      },
      reports: {
        open: reportsOpen.data || [],
        openCount: (reportsOpen.data || []).length,
        closedCount: reportsClosedCount.count || 0,
      },
    });
  } catch (err: any) {
    console.error('[admin/world]', err?.message || err);
    return res.status(500).json({ error: 'Internal error' });
  }
}
