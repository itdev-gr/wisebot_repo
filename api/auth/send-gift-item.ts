/**
 * POST /api/auth/send-gift-item — Send an image or song as a gift
 * ================================================================
 * Authenticated endpoint. Sender gifts a media item to a recipient by username.
 *
 * Flow:
 * 1. Verify sender via JWT
 * 2. Find recipient by username (case-insensitive)
 * 3. Validate: recipient exists, sender !== recipient
 * 4. For images: upload base64 to Supabase storage → get public URL
 * 5. Insert into gift_items table
 */
export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', req.headers?.origin || 'https://wisebot.gr');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Required auth — verify JWT
  const authHeader = req.headers?.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  let senderId: string;

  try {
    const token = authHeader.slice(7);
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_KEY!,
      { auth: { autoRefreshToken: false, persistSession: false } }
    );
    const { data: { user: u }, error } = await supabase.auth.getUser(token);
    if (error || !u) return res.status(401).json({ error: 'Invalid token' });
    senderId = u.id;
  } catch {
    return res.status(401).json({ error: 'Auth failed' });
  }

  try {
    const { createClient } = await import('@supabase/supabase-js');
    const supabaseAdmin = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_KEY!,
      { auth: { autoRefreshToken: false, persistSession: false } }
    );

    const body = req.body || {};
    const toUsername = typeof body.toUsername === 'string' ? body.toUsername.trim() : '';
    const type = body.type as 'image' | 'song';
    const title = typeof body.title === 'string' ? body.title.trim().slice(0, 100) : '';
    const message = typeof body.message === 'string' ? body.message.trim().slice(0, 100) : '';

    // Validate inputs
    if (!toUsername) return res.status(400).json({ error: 'toUsername is required' });
    if (!type || !['image', 'song'].includes(type)) return res.status(400).json({ error: 'type must be image or song' });

    // Get sender profile
    const { data: senderProfile, error: senderError } = await supabaseAdmin
      .from('profiles')
      .select('credits, child_name')
      .eq('id', senderId)
      .single();

    if (senderError || !senderProfile) return res.status(404).json({ error: 'Sender profile not found' });

    // Find recipient by username (case-insensitive)
    const { data: recipients, error: findError } = await supabaseAdmin
      .from('profiles')
      .select('id, child_name')
      .ilike('child_name', toUsername)
      .limit(1);

    if (findError || !recipients || recipients.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const recipient = recipients[0];

    if (recipient.id === senderId) {
      return res.status(400).json({ error: "You can't send a gift to yourself" });
    }

    let imageUrl: string | null = null;
    let audioUrl: string | null = null;
    let streamUrl: string | null = null;
    let coverUrl: string | null = null;
    let lyrics: string | null = null;
    let style: string | null = null;

    if (type === 'image') {
      // Expect base64 data URL in body.imageData
      const imageData = typeof body.imageData === 'string' ? body.imageData : '';
      if (!imageData) return res.status(400).json({ error: 'imageData is required for image gifts' });

      // Strip data URL prefix
      const base64 = imageData.replace(/^data:image\/[^;]+;base64,/, '');
      const buffer = Buffer.from(base64, 'base64');

      // Limit: 2MB
      if (buffer.length > 2 * 1024 * 1024) {
        return res.status(400).json({ error: 'Image too large (max 2MB)' });
      }

      const filename = `${senderId}/${Date.now()}.jpg`;
      const { error: uploadError } = await supabaseAdmin.storage
        .from('gifts')
        .upload(filename, buffer, { contentType: 'image/jpeg', upsert: false });

      if (uploadError) {
        console.error('[GiftItem] Upload error:', uploadError.message);
        return res.status(500).json({ error: 'Failed to upload image' });
      }

      const { data: urlData } = supabaseAdmin.storage.from('gifts').getPublicUrl(filename);
      imageUrl = urlData.publicUrl;

    } else if (type === 'song') {
      // Expect song URLs in body
      audioUrl = typeof body.audioUrl === 'string' ? body.audioUrl : null;
      streamUrl = typeof body.streamUrl === 'string' ? body.streamUrl : null;
      coverUrl = typeof body.coverUrl === 'string' ? body.coverUrl : null;
      lyrics = typeof body.lyrics === 'string' ? body.lyrics.slice(0, 2000) : null;
      style = typeof body.style === 'string' ? body.style.slice(0, 200) : null;

      if (!audioUrl && !streamUrl) {
        return res.status(400).json({ error: 'audioUrl or streamUrl is required for song gifts' });
      }
    }

    // Insert gift item
    const { data: giftItem, error: insertError } = await supabaseAdmin
      .from('gift_items')
      .insert({
        from_user_id: senderId,
        to_user_id: recipient.id,
        from_name: senderProfile.child_name,
        to_name: recipient.child_name,
        type,
        title: title || (type === 'image' ? 'Μία εικόνα για σένα' : 'Ένα τραγούδι για σένα'),
        image_url: imageUrl,
        audio_url: audioUrl,
        stream_url: streamUrl,
        cover_url: coverUrl,
        lyrics,
        style,
        message: message || '🎁',
      })
      .select('id')
      .single();

    if (insertError) {
      console.error('[GiftItem] Insert error:', insertError.message);
      return res.status(500).json({ error: 'Failed to send gift' });
    }

    return res.status(200).json({
      success: true,
      giftId: giftItem.id,
      recipientName: recipient.child_name,
      type,
    });

  } catch (err: any) {
    console.error('[GiftItem] Unexpected error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
