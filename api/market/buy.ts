/**
 * POST /api/market/buy — one child buys another child's creation.
 * The whole money movement is one atomic RPC (market_purchase): buyer pays the
 * fixed price, seller receives 80%, both sides land in credit_transactions.
 * A bought song is copied into the buyer's collection (user_songs).
 *
 * Body: { listingId }
 */
export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const user = await (await import('../_lib/auth.js')).getAuthUser(req);
  if (!user || user.id === 'guest') return res.status(401).json({ error: 'login_required' });

  const { checkRateLimit } = await import('../_lib/rateLimit.js');
  const rl = await checkRateLimit(user.id, 'market-buy', 20, 60);
  if (!rl.allowed) return res.status(429).json({ error: 'Πολλές αγορές — δοκίμασε σε λίγο.', retryAfter: rl.retryAfter });

  const listingId = req.body?.listingId;
  if (!listingId) return res.status(400).json({ error: 'listingId required' });

  try {
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(
      process.env.SUPABASE_URL || '',
      process.env.SUPABASE_SERVICE_KEY || '',
      { auth: { autoRefreshToken: false, persistSession: false } }
    );

    const { data: newBalance, error } = await supabase.rpc('market_purchase', {
      p_buyer: user.id,
      p_listing: listingId,
    });
    if (error) {
      const msg = String(error.message || '');
      if (msg.includes('insufficient_credits')) return res.status(402).json({ error: 'Δεν έχεις αρκετά credits.' });
      if (msg.includes('own_listing')) return res.status(400).json({ error: 'Είναι δικό σου — δεν χρειάζεται να το αγοράσεις!' });
      if (msg.includes('listing_unavailable')) return res.status(404).json({ error: 'Δεν είναι πια διαθέσιμο.' });
      if (msg.includes('duplicate key')) return res.status(409).json({ error: 'Το έχεις ήδη αγοράσει!' });
      throw error;
    }

    // Hand the buyer their copy
    const { data: l } = await supabase
      .from('market_listings')
      .select('type, title, image_url, audio_url, stream_url, lyrics, seller_name')
      .eq('id', listingId).single();
    if (l?.type === 'song') {
      await supabase.from('user_songs').insert({
        user_id: user.id,
        title: `${l.title} (από ${l.seller_name})`,
        lyrics: l.lyrics,
        audio_url: l.audio_url,
        stream_url: l.stream_url,
        cover_url: l.image_url,
      });
    }

    return res.status(200).json({ credits: newBalance, item: l });
  } catch (err: any) {
    console.error('[market/buy] Error:', err.message);
    return res.status(500).json({ error: 'Η αγορά δεν ολοκληρώθηκε.' });
  }
}
