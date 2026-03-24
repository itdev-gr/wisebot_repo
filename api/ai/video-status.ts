/**
 * Video Generation Status Polling Endpoint
 * ==========================================
 * Polls Google's Veo operation for completion via REST API.
 * Returns video URL (not base64) to avoid Vercel response size limits.
 *
 * GET /api/ai/video-status?operationName=xxx
 * Response: { status, videoUrl?, progress? }
 */

export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Video service not configured' });

  const operationName = req.query.operationName as string;
  if (!operationName) return res.status(400).json({ error: 'operationName required' });

  try {
    const pollUrl = `https://generativelanguage.googleapis.com/v1beta/${operationName}?key=${apiKey}`;
    const pollResp = await fetch(pollUrl);

    if (!pollResp.ok) {
      const errText = await pollResp.text();
      console.error('[video-status] Poll error:', pollResp.status, errText.slice(0, 300));
      return res.status(502).json({ error: `Video API error: ${pollResp.status}` });
    }

    const operation = await pollResp.json();

    if (operation.done) {
      const generatedVideos = operation.response?.generateVideoResponse?.generatedSamples
        || operation.response?.generatedVideos
        || [];

      const video = generatedVideos[0]?.video || generatedVideos[0];
      const videoUri = video?.uri;

      if (videoUri) {
        // Build authenticated URL for client-side fetch
        const separator = videoUri.includes('?') ? '&' : '?';
        const authenticatedUrl = `${videoUri}${separator}key=${apiKey}`;

        return res.status(200).json({
          status: 'complete',
          videoUrl: authenticatedUrl,
        });
      }

      console.error('[video-status] No video URI:', JSON.stringify(operation.response || {}).slice(0, 500));
      return res.status(200).json({ status: 'error', error: 'No video generated' });
    }

    // Still processing
    const metadata = operation.metadata || {};
    return res.status(200).json({
      status: 'processing',
      progress: metadata.completedPercent || metadata.progress || 0,
    });
  } catch (err: any) {
    console.error('[video-status] Error:', err.message);
    return res.status(500).json({ error: err.message || 'Failed to check video status' });
  }
}
