/**
 * POST /api/auth/gift — retired on 24 Αυγούστου 2026
 * ===================================================
 * Credits are money parents paid for; a child could give an entire pack to
 * any nickname they guessed, instantly and without the parent knowing.
 * Gifts are now creations only (a hero image or a song the child made) via
 * /api/auth/send-gift-item. This stub keeps old clients from getting a 404
 * they can't explain.
 */
export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();
  return res.status(410).json({ error: 'Credit gifts are no longer available. Gift a hero or a song instead.' });
}
