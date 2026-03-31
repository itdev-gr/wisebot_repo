/**
 * Video Generation Status Polling — Google Veo 2
 * =================================================
 * Polls Google for video generation completion.
 *
 * GET /api/ai/video-status?requestId=operations/xxx
 * Response: { status: 'processing'|'complete'|'error', videoData?, progress? }
 */

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', req.headers?.origin || 'https://wisebot.gr');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const user = await (await import('../_lib/auth')).getAuthUser(req);
  if (!user) return res.status(401).json({ error: 'Authentication required' });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Video service not configured' });

  // requestId = Google operationName (e.g. "operations/xxx")
  const requestId = req.query.requestId as string;
  if (!requestId) return res.status(400).json({ error: 'requestId required' });

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

    // Error
    if (data.error) {
      console.error('[video-status] Veo 2 error:', JSON.stringify(data.error).slice(0, 300));
      return res.status(200).json({ status: 'error', error: data.error.message || 'Video generation failed' });
    }

    // Done — get video URI
    const videos = data.response?.generateVideoResponse?.generatedSamples;
    if (!videos?.length) {
      return res.status(200).json({ status: 'error', error: 'No video generated' });
    }

    const videoUri = videos[0].video?.uri;
    if (!videoUri) {
      return res.status(200).json({ status: 'error', error: 'No video URL' });
    }

    // Proxy video through server (never expose API key to client)
    try {
      const videoResp = await fetch(`${videoUri}?key=${apiKey}`);
      if (videoResp.ok) {
        const videoBuffer = await videoResp.arrayBuffer();
        const base64 = Buffer.from(videoBuffer).toString('base64');
        return res.status(200).json({
          status: 'complete',
          videoData: `data:video/mp4;base64,${base64}`,
        });
      }
    } catch (proxyErr: any) {
      console.error('[video-status] Proxy error:', proxyErr.message);
    }

    // Proxy failed — never expose API key to client
    console.error('[video-status] Proxy failed for videoUri (key hidden)');
    return res.status(200).json({ status: 'error', error: 'Failed to retrieve video. Please try generating again.' });

  } catch (err: any) {
    console.error('[video-status] Error:', err.message);
    return res.status(500).json({ error: err.message || 'Failed to check video status' });
  }
}
