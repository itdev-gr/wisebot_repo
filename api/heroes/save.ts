/**
 * POST /api/heroes/save — persist a hero a child just created.
 * =============================================================
 * Until now every hero lived only in localStorage under `wb_heroes`. Clearing
 * the browser, switching device or using a second browser lost the lot — and
 * because nothing ever wrote to public.heroes, the parent weekly report and the
 * GDPR export both read an empty table while children had dozens of creations.
 *
 * The image arrives as a data URL (the generator returns base64). It is uploaded
 * to the public 'heroes' bucket and the row stores the URL, so the table stays
 * small and the picture is cacheable.
 *
 * Body: { name, image (data URL), species?, gear?, contribution?, rarity? }
 * Response: { id, imageUrl }
 */

const MAX_IMAGE_BYTES = 3 * 1024 * 1024;

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  // Saving into an account needs an account — guests keep the localStorage copy.
  const user = await (await import('../_lib/auth.js')).getAuthUser(req);
  if (!user || user.id === 'guest') return res.status(401).json({ error: 'login_required' });

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // A hero costs credits to generate, so this is not a cheap loop to abuse, but
  // the upload itself is free — cap it anyway.
  const { checkRateLimit } = await import('../_lib/rateLimit.js');
  const rl = await checkRateLimit(user.id, 'heroes-save', 60, 60);
  if (!rl.allowed) return res.status(429).json({ error: 'Too many requests', retryAfter: rl.retryAfter });

  try {
    const body = req.body || {};
    const name = typeof body.name === 'string' ? body.name.trim().slice(0, 100) : '';
    const image = typeof body.image === 'string' ? body.image : '';
    if (!name) return res.status(400).json({ error: 'name required' });
    if (!image.startsWith('data:image/')) return res.status(400).json({ error: 'image required' });

    const text = (v: any) => (typeof v === 'string' ? v.trim().slice(0, 300) : null);
    const species = text(body.species);
    const gear = text(body.gear);
    const contribution = text(body.contribution);
    const rarity = text(body.rarity);

    // The audience is children — the name and free-text fields are shown back to
    // the parent in the weekly report, so they get the same check as anything
    // else a child types.
    const { isContentSafe } = await import('../_lib/safety.js');
    const fields = [name, species, gear, contribution].filter(Boolean) as string[];
    if (fields.some(f => !isContentSafe(f))) {
      return res.status(400).json({ error: 'Το όνομα ή η περιγραφή δεν είναι κατάλληλα.' });
    }

    const base64 = image.replace(/^data:image\/[^;]+;base64,/, '');
    const buffer = Buffer.from(base64, 'base64');
    if (buffer.length > MAX_IMAGE_BYTES) return res.status(400).json({ error: 'Image too large' });

    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(
      process.env.SUPABASE_URL || '',
      process.env.SUPABASE_SERVICE_KEY || '',
      { auth: { autoRefreshToken: false, persistSession: false } }
    );

    const ext = /^data:image\/png/.test(image) ? 'png' : 'jpg';
    const path = `${user.id}/${Date.now()}.${ext}`;
    const { error: upErr } = await supabase.storage
      .from('heroes')
      .upload(path, buffer, { contentType: `image/${ext === 'png' ? 'png' : 'jpeg'}`, upsert: false });
    if (upErr) throw upErr;

    const imageUrl = supabase.storage.from('heroes').getPublicUrl(path).data.publicUrl;

    const { data, error } = await supabase
      .from('heroes')
      .insert({ user_id: user.id, name, image_url: imageUrl, species, gear, contribution, rarity })
      .select('id')
      .single();
    if (error) throw error;

    return res.status(200).json({ id: data.id, imageUrl });
  } catch (err: any) {
    console.error('[heroes/save] Error:', err.message || err);
    return res.status(500).json({ error: 'Could not save hero' });
  }
}
