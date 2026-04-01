/**
 * GET  /api/auth/user-songs — fetch authenticated user's saved songs
 * POST /api/auth/user-songs — save a completed song
 * DELETE /api/auth/user-songs?id=xxx — delete a song
 */
export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', req.headers?.origin || 'https://wisebot.gr');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
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

  // ── GET: list songs ──────────────────────────────────────────────────
  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('user_songs')
      .select('id, title, lyrics, style, audio_url, stream_url, cover_url, suno_task_id, instrumental, created_at')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(100);

    if (error) {
      console.error('[user-songs] GET error:', error.message);
      return res.status(500).json({ error: 'Failed to load songs' });
    }
    return res.status(200).json({ songs: data || [] });
  }

  // ── POST: save a completed song ──────────────────────────────────────
  if (req.method === 'POST') {
    const { title, lyrics, style, audio_url, stream_url, cover_url, suno_task_id, instrumental } = req.body || {};
    if (!audio_url) return res.status(400).json({ error: 'audio_url required' });

    // Avoid duplicate saves for the same suno_task_id
    if (suno_task_id) {
      const { data: existing } = await supabase
        .from('user_songs')
        .select('id')
        .eq('user_id', user.id)
        .eq('suno_task_id', suno_task_id)
        .limit(1);
      if (existing && existing.length > 0) {
        return res.status(200).json({ success: true, duplicate: true, id: existing[0].id });
      }
    }

    const { data, error } = await supabase
      .from('user_songs')
      .insert({
        user_id: user.id,
        title: (title || '').slice(0, 200),
        lyrics: (lyrics || '').slice(0, 5000),
        style: (style || '').slice(0, 200),
        audio_url,
        stream_url: stream_url || null,
        cover_url: cover_url || null,
        suno_task_id: suno_task_id || null,
        instrumental: !!instrumental,
      })
      .select('id')
      .single();

    if (error) {
      console.error('[user-songs] POST error:', error.message);
      return res.status(500).json({ error: 'Failed to save song' });
    }
    console.log('[user-songs] Song saved for user', user.id, '-', title);
    return res.status(200).json({ success: true, id: data?.id });
  }

  // ── DELETE: remove a song ────────────────────────────────────────────
  if (req.method === 'DELETE') {
    const songId = req.query.id as string;
    if (!songId) return res.status(400).json({ error: 'id required' });

    const { error } = await supabase
      .from('user_songs')
      .delete()
      .eq('id', songId)
      .eq('user_id', user.id);

    if (error) return res.status(500).json({ error: 'Failed to delete song' });
    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
