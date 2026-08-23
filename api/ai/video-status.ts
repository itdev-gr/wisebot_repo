/**
 * Video Generation Status Polling — Google Veo 2
 * =================================================
 * Polls Google for video generation completion.
 * On success, uploads the video to Supabase Storage and returns a
 * permanent public URL (instead of an ephemeral blob URL).
 *
 * GET /api/ai/video-status?requestId=operations/xxx&title=...&hero=...
 * Response: { status: 'processing'|'complete'|'error', videoUrl?, progress? }
 */

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const user = await (await import('../_lib/auth.js')).getAuthUser(req, { allowGuest: true });
  if (!user) return res.status(401).json({ error: 'Authentication required' });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Video service not configured' });

  // requestId = Google operationName (e.g. "operations/xxx")
  const requestId = req.query.requestId as string;
  if (!requestId) return res.status(400).json({ error: 'requestId required' });

  // Optional metadata passed from client for saving to DB
  const title = (req.query.title as string) || 'WiseBot Video';
  const heroName = (req.query.hero as string) || '';
  const prompt = (req.query.prompt as string) || '';
  const thumbnail = (req.query.thumbnail as string) || '';

  try {
    const pollUrl = `https://generativelanguage.googleapis.com/v1beta/${requestId}?key=${apiKey}`;
    const pollResp = await fetch(pollUrl);

    if (!pollResp.ok) {
      const errText = await pollResp.text();
      console.error('[video-status] Poll error:', pollResp.status, errText.slice(0, 300));
      return res.status(502).json({ error: `Video API error: ${pollResp.status}` });
    }

    const data = await pollResp.json();

    // Still processing
    if (!data.done) {
      const progress = data.metadata?.progressPercent || 0;
      return res.status(200).json({ status: 'processing', progress });
    }

    // The child was charged when the job started (video-generate). Any terminal
    // failure from here on gives the credits back — once per operation.
    const fail = async (message: string) => {
      const { refundCredits } = await import('../_lib/auth.js');
      const { COSTS } = await import('../_lib/costs.js');
      const credits = await refundCredits(user.id, COSTS.VIDEO, 'REFUND_VIDEO', requestId);
      return res.status(200).json({ status: 'error', error: message, refunded: credits !== null, credits });
    };

    // Error
    if (data.error) {
      console.error('[video-status] Veo 2 error:', JSON.stringify(data.error).slice(0, 300));
      return fail('Video generation failed');
    }

    // Done — get video URI. Veo's safety filter removes the sample and explains
    // why in raiMediaFilteredReasons; the child is not charged for that.
    const videos = data.response?.generateVideoResponse?.generatedSamples;
    if (!videos?.length) {
      const reasons = data.response?.generateVideoResponse?.raiMediaFilteredReasons;
      if (reasons) console.warn('[video-status] filtered:', JSON.stringify(reasons).slice(0, 300));
      return fail('No video generated');
    }

    const videoUri = videos[0].video?.uri;
    if (!videoUri) {
      return fail('No video URL');
    }

    // Download video buffer (never expose API key to client). Veo file URIs
    // already carry `?alt=media`, so the key goes in a header, not the query.
    let videoBuffer: ArrayBuffer | null = null;
    try {
      const videoResp = await fetch(videoUri, { headers: { 'x-goog-api-key': apiKey } });
      if (videoResp.ok) {
        videoBuffer = await videoResp.arrayBuffer();
      }
    } catch (proxyErr: any) {
      console.error('[video-status] Proxy/download error:', proxyErr.message);
    }

    if (!videoBuffer) {
      console.error('[video-status] Could not download video from Google');
      return fail('Failed to retrieve video. Please try generating again.');
    }

    // ── Upload to Supabase Storage for permanent URL ──────────────────
    let publicUrl: string | null = null;
    let storagePath: string | null = null;
    try {
      const { createClient } = await import('@supabase/supabase-js');
      const supabase = createClient(
        process.env.SUPABASE_URL || '',
        process.env.SUPABASE_SERVICE_KEY || '',
        { auth: { autoRefreshToken: false, persistSession: false } }
      );

      const timestamp = Date.now();
      storagePath = `${user.id}/${timestamp}.mp4`;

      const { error: uploadError } = await supabase.storage
        .from('user-videos')
        .upload(storagePath, Buffer.from(videoBuffer), {
          contentType: 'video/mp4',
          upsert: false,
        });

      if (uploadError) {
        console.error('[video-status] Storage upload error:', uploadError.message);
      } else {
        const { data: urlData } = supabase.storage
          .from('user-videos')
          .getPublicUrl(storagePath);
        publicUrl = urlData?.publicUrl || null;

        // Save metadata to user_videos table
        if (publicUrl) {
          const { error: dbError } = await supabase
            .from('user_videos')
            .insert({
              user_id: user.id,
              title: title.slice(0, 200),
              hero_name: heroName.slice(0, 100),
              prompt: prompt.slice(0, 500),
              storage_path: storagePath,
              public_url: publicUrl,
              thumbnail: thumbnail.slice(0, 500),
            });
          if (dbError) console.error('[video-status] DB insert error:', dbError.message);
          else console.log('[video-status] Video saved to Supabase Storage for user', user.id);
        }
      }
    } catch (storageErr: any) {
      console.error('[video-status] Supabase Storage error:', storageErr.message);
    }

    // Return permanent URL if available, fallback to base64 (so client is never left empty)
    if (publicUrl) {
      return res.status(200).json({ status: 'complete', videoUrl: publicUrl });
    }

    // Fallback: return base64 data URL (ephemeral but at least the user sees their video)
    const base64 = Buffer.from(videoBuffer).toString('base64');
    return res.status(200).json({
      status: 'complete',
      videoData: `data:video/mp4;base64,${base64}`,
    });

  } catch (err: any) {
    console.error('[video-status] Error:', err.message);
    return res.status(500).json({ error: 'Failed to check video status' });
  }
}
