/**
 * POST /api/market/create — a child puts something they made up for sale.
 * ========================================================================
 * Prices are fixed server-side (song 10⚡, hero image 3⚡ — the client cannot
 * choose). Every listing starts as 'pending' and becomes visible only after an
 * admin approves it (kid safety: a human sees everything before other children
 * do). Songs must be one of the seller's own saved songs; images are uploaded
 * to the public 'market' bucket. 3 new listings per day.
 *
 * Body: { type: 'song', songId } | { type: 'image', title, imageData }
 */
const PRICES = { song: 10, image: 3 } as const;

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const user = await (await import('../_lib/auth.js')).getAuthUser(req);
  if (!user || user.id === 'guest') return res.status(401).json({ error: 'login_required' });

  const { checkRateLimit } = await import('../_lib/rateLimit.js');
  const rl = await checkRateLimit(user.id, 'market-create', 3, 24 * 60);
  if (!rl.allowed) return res.status(429).json({ error: 'Μέχρι 3 νέες αγγελίες τη μέρα.', retryAfter: rl.retryAfter });

  const body = req.body || {};
  const type = body.type as 'song' | 'image';
  if (!['song', 'image'].includes(type)) return res.status(400).json({ error: 'type must be song or image' });

  const { isContentSafe } = await import('../_lib/safety.js');

  try {
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(
      process.env.SUPABASE_URL || '',
      process.env.SUPABASE_SERVICE_KEY || '',
      { auth: { autoRefreshToken: false, persistSession: false } }
    );

    const { data: profile } = await supabase.from('profiles').select('child_name').eq('id', user.id).single();
    const sellerName = profile?.child_name || 'WiseKid';

    let listing: any = { seller_id: user.id, seller_name: sellerName, type, price: PRICES[type], status: 'pending' };

    if (type === 'song') {
      const songId = body.songId;
      if (!songId) return res.status(400).json({ error: 'songId required' });
      const { data: song } = await supabase
        .from('user_songs')
        .select('title, audio_url, stream_url, cover_url, lyrics')
        .eq('id', songId).eq('user_id', user.id).single();
      if (!song) return res.status(404).json({ error: 'Το τραγούδι δεν βρέθηκε στα δικά σου.' });
      if (!song.audio_url && !song.stream_url) return res.status(400).json({ error: 'Το τραγούδι δεν έχει ήχο ακόμα.' });
      listing = { ...listing, title: (song.title || 'Τραγούδι').slice(0, 100), audio_url: song.audio_url, stream_url: song.stream_url, image_url: song.cover_url, lyrics: song.lyrics };
    } else {
      const title = typeof body.title === 'string' ? body.title.trim().slice(0, 100) : '';
      const imageData = typeof body.imageData === 'string' ? body.imageData : '';
      if (!title) return res.status(400).json({ error: 'title required' });
      if (!imageData.startsWith('data:image/')) return res.status(400).json({ error: 'imageData required' });
      const base64 = imageData.replace(/^data:image\/[^;]+;base64,/, '');
      const buffer = Buffer.from(base64, 'base64');
      if (buffer.length > 2 * 1024 * 1024) return res.status(400).json({ error: 'Image too large (max 2MB)' });
      const filename = `${user.id}/${Date.now()}.jpg`;
      const { error: upErr } = await supabase.storage.from('market').upload(filename, buffer, { contentType: 'image/jpeg', upsert: false });
      if (upErr) throw upErr;
      listing = { ...listing, title, image_url: supabase.storage.from('market').getPublicUrl(filename).data.publicUrl };
    }

    if (!isContentSafe(listing.title || '')) return res.status(400).json({ error: 'Αυτός ο τίτλος δεν επιτρέπεται.' });

    const { data: row, error } = await supabase.from('market_listings').insert(listing).select('id, status').single();
    if (error) throw error;

    return res.status(200).json({ id: row.id, status: row.status, price: PRICES[type] });
  } catch (err: any) {
    console.error('[market/create] Error:', err.message);
    return res.status(500).json({ error: 'Failed to create the listing' });
  }
}
