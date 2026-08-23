/**
 * GET /api/market/list — the shop window.
 * Returns approved listings (newest first) plus, for the caller, their own
 * listings in any status and the ids they already bought.
 */
export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const user = await (await import('../_lib/auth.js')).getAuthUser(req, { allowGuest: true });
  if (!user) return res.status(401).json({ error: 'Authentication required' });

  try {
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(
      process.env.SUPABASE_URL || '',
      process.env.SUPABASE_SERVICE_KEY || '',
      { auth: { autoRefreshToken: false, persistSession: false } }
    );

    const { data: listings, error } = await supabase
      .from('market_listings')
      .select('id, seller_id, seller_name, type, title, image_url, price, sales_count, created_at')
      .eq('status', 'approved')
      .order('created_at', { ascending: false })
      .limit(100);
    if (error) throw error;

    let mine: any[] = [];
    let purchased: string[] = [];
    if (user.id !== 'guest') {
      const [{ data: own }, { data: bought }] = await Promise.all([
        supabase.from('market_listings')
          .select('id, type, title, image_url, price, status, sales_count, created_at')
          .eq('seller_id', user.id).order('created_at', { ascending: false }).limit(50),
        supabase.from('market_purchases').select('listing_id').eq('buyer_id', user.id),
      ]);
      mine = own || [];
      purchased = (bought || []).map((p: any) => p.listing_id);
    }

    return res.status(200).json({ listings: listings || [], mine, purchased });
  } catch (err: any) {
    console.error('[market/list] Error:', err.message);
    return res.status(500).json({ error: 'Failed to load the market' });
  }
}
