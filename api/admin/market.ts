/**
 * Admin moderation for the Hero Market.
 * GET  → pending listings (plus recent print orders)
 * POST → { listingId, decision: 'approved' | 'rejected' }
 *        { orderId, orderStatus: 'in_progress' | 'shipped' | 'cancelled' }
 * A human approves every listing before other children can see it.
 */
import { ADMIN_CORS_HEADERS, verifyAdminToken } from '../_lib/adminAuth.js';

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', ADMIN_CORS_HEADERS);
  if (req.method === 'OPTIONS') return res.status(204).end();

  if (!verifyAdminToken(req.headers['x-admin-token'])) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { createClient } = await import('@supabase/supabase-js');
  const supabase = createClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || '',
    { auth: { autoRefreshToken: false, persistSession: false } }
  );

  try {
    if (req.method === 'GET') {
      const [{ data: pending }, { data: orders }, { data: reports }] = await Promise.all([
        supabase.from('market_listings').select('*').eq('status', 'pending').order('created_at'),
        supabase.from('print_orders').select('*').order('created_at', { ascending: false }).limit(30),
        // Open child reports, newest first; the listing rides along for the admin card.
        supabase.from('market_reports')
          .select('id, reason, created_at, listing:market_listings(id, title, type, seller_name, image_url, audio_url, stream_url, price, status)')
          .is('resolved_at', null)
          .order('created_at', { ascending: false })
          .limit(100),
      ]);
      return res.status(200).json({ pending: pending || [], orders: orders || [], reports: reports || [] });
    }

    if (req.method === 'POST') {
      const { listingId, decision, orderId, orderStatus } = req.body || {};
      if (listingId && ['approved', 'rejected'].includes(decision)) {
        // 'pending' is the normal queue; 'approved' allows pulling a reported live
        // listing without waiting for the auto-unpublish threshold.
        const { error } = await supabase
          .from('market_listings')
          .update({ status: decision, reviewed_at: new Date().toISOString() })
          .eq('id', listingId).in('status', ['pending', 'approved']);
        if (error) throw error;
        // Either decision consumes the open reports — the case is handled.
        await supabase.from('market_reports')
          .update({ resolved_at: new Date().toISOString() })
          .eq('listing_id', listingId).is('resolved_at', null);
        return res.status(200).json({ ok: true });
      }
      if (orderId && ['in_progress', 'shipped', 'cancelled'].includes(orderStatus)) {
        const { data: order, error } = await supabase
          .from('print_orders').update({ status: orderStatus }).eq('id', orderId).select('user_id, credits, status').single();
        if (error) throw error;
        if (orderStatus === 'cancelled') {
          const { refundCredits } = await import('../_lib/auth.js');
          await refundCredits(order.user_id, order.credits, 'REFUND_PRINT', orderId);
        }
        return res.status(200).json({ ok: true });
      }
      return res.status(400).json({ error: 'Bad request' });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (err: any) {
    console.error('[admin/market] Error:', err.message);
    return res.status(500).json({ error: 'Admin market operation failed' });
  }
}
