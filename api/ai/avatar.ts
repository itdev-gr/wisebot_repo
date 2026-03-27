/**
 * Avatar Generation Endpoint — xAI Grok Image Edit
 * ===================================================
 * Transforms a photo into a cartoon/anime hero avatar
 * using xAI's image edit API.
 *
 * POST /api/ai/avatar
 * Body: { imageBytes: string (base64), mimeType: string }
 * Response: { image: "data:image/...;base64,..." }
 */

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', req.headers?.origin || 'https://wisebot.gr');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { getAuthUser } = await import('../_lib/auth');
  const user = await getAuthUser(req);
  if (!user) return res.status(401).json({ error: 'Authentication required' });

  const xaiKey = process.env.XAI_API_KEY;
  if (!xaiKey) return res.status(500).json({ error: 'Avatar service not configured' });

  const { imageBytes, mimeType } = req.body || {};
  if (!imageBytes) return res.status(400).json({ error: 'Image data required' });

  try {
    console.log('[avatar] Calling xAI image edit for avatar transformation...');
    const imageUrl = `data:${mimeType || 'image/jpeg'};base64,${imageBytes}`;

    const resp = await fetch('https://api.x.ai/v1/images/edits', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${xaiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'grok-imagine-image',
        image_url: imageUrl,
        prompt: 'Transform this photo into an epic cartoon/anime-style hero avatar. Keep the person recognizable but make them look like a superhero character. Vibrant colors, dynamic pose, clean illustration style. NO text anywhere on the image.',
        n: 1,
        response_format: 'b64_json',
      }),
    });

    if (resp.ok) {
      const data = await resp.json();
      const item = data.data?.[0];
      const b64 = item?.b64_json;
      const outputMime = item?.mime_type || 'image/png';

      if (b64) {
        console.log('[avatar] xAI image edit success');
        return res.status(200).json({ image: `data:${outputMime};base64,${b64}` });
      }
    }

    const errText = await resp.text();
    console.error('[avatar] xAI error:', resp.status, errText.slice(0, 300));
    return res.status(500).json({ error: 'Avatar generation failed. Please try again.' });
  } catch (e: any) {
    console.error('[avatar] Error:', e.message);
    return res.status(500).json({ error: 'Avatar generation temporarily unavailable.' });
  }
}
