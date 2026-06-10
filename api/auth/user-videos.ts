/**
 * GET /api/auth/user-videos — fetch authenticated user's saved videos
 * DELETE /api/auth/user-videos?id=xxx — delete a video
 */
export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'GET, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  const { createClient } = await import('@supabase/supabase-js');
  const supabase = createClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || '',
    { auth: { autoRefreshToken: false, persistSession: false } }
  );

  const authHeader = req.headers?.authorization;
  if (!authHeader?.startsWith('Bearer ')) return res.status(401).json({ error: 'Authentication required' });
  const token = authHeader.slice(7);
  const { data: { user }, error: authError } = await supabase.auth.getUser(token);
  if (authError || !user) return res.status(401).json({ error: 'Authentication required' });

  // ── GET: list videos ─────────────────────────────────────────────────
  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('user_videos')
      .select('id, title, hero_name, public_url, thumbnail, created_at')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(50);

    if (error) {
      console.error('[user-videos] GET error:', error.message);
      return res.status(500).json({ error: 'Failed to load videos' });
    }
    return res.status(200).json({ videos: data || [] });
  }

  // ── DELETE: remove a video ────────────────────────────────────────────
  if (req.method === 'DELETE') {
    const videoId = req.query.id as string;
    if (!videoId) return res.status(400).json({ error: 'id required' });

    // Get storage path first
    const { data: video } = await supabase
      .from('user_videos')
      .select('storage_path')
      .eq('id', videoId)
      .eq('user_id', user.id)
      .single();

    if (video?.storage_path) {
      await supabase.storage.from('user-videos').remove([video.storage_path]);
    }

    const { error } = await supabase
      .from('user_videos')
      .delete()
      .eq('id', videoId)
      .eq('user_id', user.id);

    if (error) return res.status(500).json({ error: 'Failed to delete video' });
    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
