/**
 * POST /api/auth/parent-pin — the Parent Dashboard PIN
 * =====================================================
 * Body: { action: 'status' | 'set' | 'verify' | 'change' | 'reset', pin?, newPin?, password? }
 *
 *   status  → { hasPin }                       does this account have a PIN yet
 *   set     → first PIN; only allowed when none exists (the parent is logged in)
 *   verify  → { ok }                           5 wrong tries lock the PIN for 15 minutes
 *   change  → { pin, newPin }                  needs the current PIN
 *   reset   → { password, newPin }             forgot the PIN: prove the account password
 *             (Google sign-ins have no password — the UI points them to support)
 *
 * The hash is scrypt with a random salt, in public.parent_pins (RLS, no policies — the
 * browser can never read it, see supabase/migrations/20260824100000_parent_pin.sql).
 * Requires a logged-in user; guests get 401.
 */
import { randomBytes, scryptSync, timingSafeEqual } from 'node:crypto';

const PIN_RE = /^\d{4,6}$/;
const MAX_FAILED = 5;
const LOCK_MINUTES = 15;

function hashPin(pin: string): string {
  const salt = randomBytes(16).toString('hex');
  const hash = scryptSync(pin, salt, 32).toString('hex');
  return `scrypt$${salt}$${hash}`;
}

function pinMatches(pin: string, stored: string): boolean {
  const [, salt, hash] = stored.split('$');
  if (!salt || !hash) return false;
  const candidate = scryptSync(pin, salt, 32);
  const expected = Buffer.from(hash, 'hex');
  return candidate.length === expected.length && timingSafeEqual(candidate, expected);
}

async function getAdminClient() {
  const { createClient } = await import('@supabase/supabase-js');
  return createClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || '',
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  const user = await (await import('../_lib/auth.js')).getAuthUser(req, { allowGuest: false });
  if (!user) return res.status(401).json({ error: 'Authentication required' });

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // A PIN has 10^4–10^6 possibilities: keep the online rate low on top of the lockout.
  const { checkRateLimit } = await import('../_lib/rateLimit.js');
  const rl = await checkRateLimit(user.id, 'parent-pin', 30, 15);
  if (!rl.allowed) return res.status(429).json({ error: 'Too many requests', retryAfter: rl.retryAfter });

  const { action, pin, newPin, password } = req.body || {};
  if (typeof action !== 'string') return res.status(400).json({ error: 'action required' });

  try {
    const supabase = await getAdminClient();
    const { data: row, error: readErr } = await supabase
      .from('parent_pins')
      .select('pin_hash, failed_attempts, locked_until')
      .eq('user_id', user.id)
      .maybeSingle();
    if (readErr) {
      console.error('[parent-pin] read:', readErr.message);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (action === 'status') {
      return res.status(200).json({ hasPin: !!row });
    }

    const lockedFor = row?.locked_until ? Math.ceil((new Date(row.locked_until).getTime() - Date.now()) / 60000) : 0;
    const isLocked = lockedFor > 0;

    // ── set: first PIN only ────────────────────────────────────────────────
    if (action === 'set') {
      if (row) return res.status(409).json({ error: 'PIN already set', code: 'has_pin' });
      if (!PIN_RE.test(String(pin || ''))) return res.status(400).json({ error: 'PIN must be 4–6 digits', code: 'bad_pin' });
      const { error } = await supabase.from('parent_pins').insert({ user_id: user.id, pin_hash: hashPin(String(pin)) });
      if (error) {
        console.error('[parent-pin] set:', error.message);
        return res.status(500).json({ error: 'Internal server error' });
      }
      return res.status(200).json({ ok: true });
    }

    // Everything below needs an existing PIN.
    if (!row) return res.status(404).json({ error: 'No PIN set', code: 'no_pin' });

    // ── verify / change: prove the current PIN, with lockout ──────────────
    if (action === 'verify' || action === 'change') {
      if (isLocked) return res.status(423).json({ error: 'PIN locked', code: 'locked', minutes: lockedFor });
      if (!PIN_RE.test(String(pin || ''))) return res.status(400).json({ error: 'PIN must be 4–6 digits', code: 'bad_pin' });

      if (!pinMatches(String(pin), row.pin_hash)) {
        const failed = (row.failed_attempts || 0) + 1;
        const lock = failed >= MAX_FAILED ? new Date(Date.now() + LOCK_MINUTES * 60000).toISOString() : null;
        await supabase.from('parent_pins')
          .update({ failed_attempts: lock ? 0 : failed, locked_until: lock })
          .eq('user_id', user.id);
        return res.status(401).json({
          error: 'Wrong PIN', code: lock ? 'locked' : 'wrong_pin',
          attemptsLeft: lock ? 0 : MAX_FAILED - failed, minutes: lock ? LOCK_MINUTES : undefined,
        });
      }

      if (action === 'verify') {
        if (row.failed_attempts) await supabase.from('parent_pins').update({ failed_attempts: 0 }).eq('user_id', user.id);
        return res.status(200).json({ ok: true });
      }

      if (!PIN_RE.test(String(newPin || ''))) return res.status(400).json({ error: 'New PIN must be 4–6 digits', code: 'bad_pin' });
      const { error } = await supabase.from('parent_pins')
        .update({ pin_hash: hashPin(String(newPin)), failed_attempts: 0, locked_until: null, updated_at: new Date().toISOString() })
        .eq('user_id', user.id);
      if (error) return res.status(500).json({ error: 'Internal server error' });
      return res.status(200).json({ ok: true });
    }

    // ── reset: forgot the PIN → prove the account password ────────────────
    if (action === 'reset') {
      if (typeof password !== 'string' || !password) return res.status(400).json({ error: 'password required', code: 'bad_password' });
      if (!PIN_RE.test(String(newPin || ''))) return res.status(400).json({ error: 'New PIN must be 4–6 digits', code: 'bad_pin' });
      const { createClient } = await import('@supabase/supabase-js');
      const anon = createClient(
        process.env.SUPABASE_URL || '',
        process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY || '',
        { auth: { autoRefreshToken: false, persistSession: false } }
      );
      const { error: pwErr } = await anon.auth.signInWithPassword({ email: user.email, password });
      if (pwErr) return res.status(401).json({ error: 'Wrong password', code: 'wrong_password' });
      const { error } = await supabase.from('parent_pins')
        .update({ pin_hash: hashPin(String(newPin)), failed_attempts: 0, locked_until: null, updated_at: new Date().toISOString() })
        .eq('user_id', user.id);
      if (error) return res.status(500).json({ error: 'Internal server error' });
      return res.status(200).json({ ok: true });
    }

    return res.status(400).json({ error: 'Unknown action' });
  } catch (err: any) {
    console.error('[parent-pin] error:', err?.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
