/**
 * POST /api/market/print-order — a hero becomes a real 3D-printed figure.
 * ========================================================================
 * 500⚡, charged atomically (spend_credits). The child never types an address:
 * the order lands at info@wisebot.gr and the owner arranges delivery with the
 * parent over email — no shipping forms inside a kids' app.
 * Requires a verified parent on the account.
 *
 * Body: { heroName, imageUrl }
 */
const PRINT_COST = 500;

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const user = await (await import('../_lib/auth.js')).getAuthUser(req);
  if (!user || user.id === 'guest') return res.status(401).json({ error: 'login_required' });

  const { checkRateLimit } = await import('../_lib/rateLimit.js');
  const rl = await checkRateLimit(user.id, 'print-order', 2, 24 * 60);
  if (!rl.allowed) return res.status(429).json({ error: 'Μέχρι 2 παραγγελίες τη μέρα.', retryAfter: rl.retryAfter });

  const heroName = typeof req.body?.heroName === 'string' ? req.body.heroName.trim().slice(0, 100) : '';
  const imageUrl = typeof req.body?.imageUrl === 'string' ? req.body.imageUrl.slice(0, 2000) : '';
  if (!heroName || !imageUrl) return res.status(400).json({ error: 'heroName and imageUrl required' });
  if (!/^(https?:\/\/|data:image\/)/.test(imageUrl)) return res.status(400).json({ error: 'invalid imageUrl' });

  try {
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(
      process.env.SUPABASE_URL || '',
      process.env.SUPABASE_SERVICE_KEY || '',
      { auth: { autoRefreshToken: false, persistSession: false } }
    );

    const { data: profile } = await supabase
      .from('profiles').select('child_name, parent_email, parent_verified').eq('id', user.id).single();
    if (!profile?.parent_verified) {
      return res.status(403).json({ error: 'Χρειάζεται επιβεβαιωμένος γονιός για παραγγελίες.' });
    }

    // data: URLs are too big for a DB row — park the image in storage first.
    let storedImageUrl = imageUrl;
    if (imageUrl.startsWith('data:image/')) {
      const base64 = imageUrl.replace(/^data:image\/[^;]+;base64,/, '');
      const buffer = Buffer.from(base64, 'base64');
      if (buffer.length > 4 * 1024 * 1024) return res.status(400).json({ error: 'Image too large' });
      const filename = `prints/${user.id}/${Date.now()}.jpg`;
      const { error: upErr } = await supabase.storage.from('market').upload(filename, buffer, { contentType: 'image/jpeg' });
      if (upErr) throw upErr;
      storedImageUrl = supabase.storage.from('market').getPublicUrl(filename).data.publicUrl;
    }

    // Charge first (atomic, logged); only a successful charge creates an order.
    const { deductCredits } = await import('../_lib/auth.js');
    const charged = await deductCredits(user.id, PRINT_COST, 'PRINT_ORDER');
    if (!charged) return res.status(402).json({ error: 'Δεν έχεις αρκετά credits.', required: PRINT_COST });

    const { data: order, error } = await supabase
      .from('print_orders')
      .insert({ user_id: user.id, hero_name: heroName, image_url: storedImageUrl, credits: PRINT_COST })
      .select('id').single();
    if (error) {
      const { refundCredits } = await import('../_lib/auth.js');
      await refundCredits(user.id, PRINT_COST, 'REFUND_PRINT', `failed:${Date.now()}`);
      throw error;
    }

    // Tell the owner; the parent gets a copy so the family knows what was ordered.
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const esc = (t: string) => t.replace(/[<>&"]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c] as string));
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || 'WiseBot <noreply@wisebot.gr>',
          to: [process.env.SUPPORT_EMAIL || 'info@wisebot.gr'],
          cc: profile.parent_email ? [profile.parent_email] : undefined,
          subject: `[WiseBot 3D Print] ${esc(profile.child_name || '')} — ${esc(heroName)} (${order.id.slice(0, 8)})`,
          html: `
            <h2>Νέα παραγγελία 3D εκτύπωσης</h2>
            <p><strong>Παιδί:</strong> ${esc(profile.child_name || '')} · <strong>Γονέας:</strong> ${esc(profile.parent_email || '—')}</p>
            <p><strong>Ήρωας:</strong> ${esc(heroName)} · <strong>Χρέωση:</strong> ${PRINT_COST}⚡</p>
            <p><strong>Order:</strong> ${order.id}</p>
            <p><img src="${esc(storedImageUrl)}" alt="hero" style="max-width:320px;border-radius:12px" /></p>
            <p>Ο γονέας λαμβάνει κοινοποίηση — κανονίστε την αποστολή μεταξύ σας με email.</p>
          `,
        }),
      }).catch((e: any) => console.error('[print-order] email failed:', e.message));
    }

    return res.status(200).json({ orderId: order.id, cost: PRINT_COST });
  } catch (err: any) {
    console.error('[print-order] Error:', err.message);
    return res.status(500).json({ error: 'Η παραγγελία δεν ολοκληρώθηκε.' });
  }
}
