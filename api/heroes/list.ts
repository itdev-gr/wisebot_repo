/**
 * GET /api/heroes/list — the child's saved heroes, newest first.
 * ===============================================================
 * Lets a child open WiseBot on a second device (or after clearing the browser)
 * and still find everything they made. The client merges this with whatever is
 * in localStorage rather than replacing it, so a hero created while logged out
 * is never thrown away.
 *
 * Response: { heroes: [{ id, name, image, description, species, gear, ... }] }
 */

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  const user = await (await import('../_lib/auth.js')).getAuthUser(req);
  if (!user || user.id === 'guest') return res.status(401).json({ error: 'login_required' });

  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(
      process.env.SUPABASE_URL || '',
      process.env.SUPABASE_SERVICE_KEY || '',
      { auth: { autoRefreshToken: false, persistSession: false } }
    );

    const { data, error } = await supabase
      .from('heroes')
      .select('id, name, image_url, species, gear, contribution, rarity, created_at')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(200);
    if (error) throw error;

    // Shaped like the client's local hero objects so the two merge cleanly.
    const heroes = (data || []).map(h => ({
      id: h.id,
      name: h.name,
      image: h.image_url,
      description: [h.species, h.gear].filter(Boolean).join(' • '),
      species: h.species,
      gear: h.gear,
      contribution: h.contribution,
      rarity: h.rarity,
      isUserGenerated: true,
      color: 'from-fuchsia-500 to-purple-600',
      heroClass: 'creator',
      createdAt: h.created_at,
    }));

    return res.status(200).json({ heroes });
  } catch (err: any) {
    console.error('[heroes/list] Error:', err.message || err);
    return res.status(500).json({ error: 'Could not load heroes' });
  }
}
