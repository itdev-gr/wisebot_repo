/**
 * Video Generation Status Polling Endpoint — xAI Grok Imagine Video
 * ===================================================================
 * Polls xAI for video generation completion.
 *
 * GET /api/ai/video-status?requestId=xxx
 * Response: { status, videoUrl?, progress? }
 */

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', req.headers?.origin || 'https://wisebot.gr');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  const user = null;

  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const apiKey = process.env.XAI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Video service not configured' });

  const requestId = req.query.requestId as string;
  if (!requestId) return res.status(400).json({ error: 'requestId required' });

  try {
    const pollResp = await fetch(`https://api.x.ai/v1/videos/${requestId}`, {
      headers: { 'Authorization': `Bearer ${apiKey}` },
    });

    if (!pollResp.ok) {
      const errText = await pollResp.text();
      console.error('[video-status] Poll error:', pollResp.status, errText.slice(0, 300));
      return res.status(502).json({ error: `Video API error: ${pollResp.status}` });
    }

    const data = await pollResp.json();
    // xAI statuses: 'pending' | 'done' | 'expired' | 'failed'
    const status = data.status;

    if (status === 'done') {
      const videoUrl = data.video?.url;

      if (videoUrl) {
        // Proxy the video through our server — NEVER expose API key to client
        try {
          const videoResp = await fetch(videoUrl, {
            headers: { 'Authorization': `Bearer ${apiKey}` },
          });
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

        // Fallback: return URL directly
        return res.status(200).json({ status: 'complete', videoUrl });
      }

      console.error('[video-status] No video URL in done response:', JSON.stringify(data).slice(0, 500));
      return res.status(200).json({ status: 'error', error: 'No video generated' });
    }

    if (status === 'failed' || status === 'expired') {
      return res.status(200).json({ status: 'error', error: `Video generation ${status}` });
    }

    // Still processing (status === 'pending')
    return res.status(200).json({ status: 'processing', progress: 0 });
  } catch (err: any) {
    console.error('[video-status] Error:', err.message);
    return res.status(500).json({ error: err.message || 'Failed to check video status' });
  }
}
