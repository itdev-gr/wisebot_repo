/**
 * Video Generation Status Polling Endpoint — xAI
 * =================================================
 * Polls xAI's video generation API for completion.
 * Proxies the video through our server to avoid exposing API keys.
 *
 * GET /api/ai/video-status?requestId=xxx
 * Response: { status, videoData?, progress? }
 */

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', req.headers?.origin || 'https://wisebot.gr');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const xaiKey = process.env.XAI_API_KEY;
  if (!xaiKey) return res.status(500).json({ error: 'Video service not configured' });

  // Support both old (operationName) and new (requestId) parameter names
  const requestId = (req.query.requestId || req.query.operationName) as string;
  if (!requestId) return res.status(400).json({ error: 'requestId required' });

  try {
    console.log('[video-status] Polling xAI video:', requestId);
    const pollResp = await fetch(`https://api.x.ai/v1/videos/${requestId}`, {
      headers: { 'Authorization': `Bearer ${xaiKey}` },
    });

    if (!pollResp.ok) {
      const errText = await pollResp.text();
      console.error('[video-status] xAI poll error:', pollResp.status, errText.slice(0, 300));
      return res.status(502).json({ error: `Video API error: ${pollResp.status}` });
    }

    const data = await pollResp.json();

    // xAI statuses: "pending", "done", "expired", "failed"
    if (data.status === 'done') {
      const videoUrl = data.video?.url;

      if (videoUrl) {
        // Proxy the video through our server — NEVER expose API key to client
        try {
          console.log('[video-status] Fetching video from xAI URL...');
          const videoResp = await fetch(videoUrl);
          if (videoResp.ok) {
            const videoBuffer = await videoResp.arrayBuffer();
            const base64 = Buffer.from(videoBuffer).toString('base64');
            return res.status(200).json({
              status: 'complete',
              videoData: `data:video/mp4;base64,${base64}`,
            });
          }
        } catch (proxyErr: any) {
          console.error('[video-status] Proxy fetch error:', proxyErr.message);
        }

        // Fallback: return URL directly (temporary xAI URLs)
        return res.status(200).json({
          status: 'complete',
          videoUrl,
        });
      }

      console.error('[video-status] No video URL:', JSON.stringify(data).slice(0, 500));
      return res.status(200).json({ status: 'error', error: 'No video generated' });
    }

    if (data.status === 'failed' || data.status === 'expired') {
      console.error('[video-status] Video generation failed:', data.status);
      return res.status(200).json({ status: 'error', error: `Video generation ${data.status}` });
    }

    // Still processing (pending)
    return res.status(200).json({
      status: 'processing',
      progress: 0, // xAI doesn't provide progress percentage
    });
  } catch (err: any) {
    console.error('[video-status] Error:', err.message);
    return res.status(500).json({ error: err.message || 'Failed to check video status' });
  }
}
