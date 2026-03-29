/**
 * Avatar Generation Endpoint — Gemini Image Generation
 * ======================================================
 * Transforms a photo into a cartoon/anime hero avatar
 * using Google's Gemini image generation API.
 *
 * POST /api/ai/avatar
 * Body: { imageBytes: string (base64), mimeType: string }
 * Response: { image: "data:image/...;base64,..." }
 */

// Gemini image generation can take 15-30 s; extend beyond the 10-s hobby default
export const config = { maxDuration: 60 };

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', req.headers?.origin || 'https://wisebot.gr');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // Auth — inline pattern (same as gift.ts / delete-account.ts) to avoid dynamic _lib import issues
  const authHeader = req.headers?.authorization;
  const token = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null;
  if (!token) return res.status(401).json({ error: 'Authentication required' });
  try {
    const { createClient } = await import('@supabase/supabase-js');
    const supabaseAdmin = createClient(
      process.env.SUPABASE_URL || '',
      process.env.SUPABASE_SERVICE_KEY || '',
      { auth: { autoRefreshToken: false, persistSession: false } },
    );
    const { data: { user }, error: authErr } = await supabaseAdmin.auth.getUser(token);
    if (authErr || !user) return res.status(401).json({ error: 'Authentication required' });
  } catch {
    return res.status(401).json({ error: 'Authentication required' });
  }

  const geminiKey = process.env.GEMINI_API_KEY;
  if (!geminiKey) return res.status(500).json({ error: 'Avatar service not configured' });

  const { imageBytes, mimeType } = req.body || {};
  if (!imageBytes) return res.status(400).json({ error: 'Image data required' });

  try {
    console.log('[avatar] Calling Gemini image generation for cartoon transformation...');

    const prompt = 'Transform this photo into a cute cartoon character. Keep the face recognizable but make it cartoon/anime style with bright colors and a friendly expression. Square format. NO text anywhere on the image.';

    const requestBody = {
      contents: [{
        role: 'user',
        parts: [
          {
            inline_data: {
              mime_type: mimeType || 'image/jpeg',
              data: imageBytes,
            },
          },
          { text: prompt },
        ],
      }],
      generationConfig: {
        responseModalities: ['IMAGE', 'TEXT'],
      },
    };

    const resp = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-preview-image-generation:generateContent?key=${geminiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      },
    );

    if (resp.ok) {
      const data = await resp.json();
      const parts = data?.candidates?.[0]?.content?.parts || [];
      const imagePart = parts.find((p: any) => p.inlineData?.data);

      if (imagePart?.inlineData?.data) {
        const b64 = imagePart.inlineData.data;
        const outputMime = imagePart.inlineData.mimeType || 'image/png';
        console.log('[avatar] Gemini cartoon generation success');
        return res.status(200).json({ image: `data:${outputMime};base64,${b64}` });
      }
    }

    const errText = await resp.text().catch(() => 'unknown');
    console.error('[avatar] Gemini error:', resp.status, errText.slice(0, 300));
    return res.status(500).json({ error: 'Avatar generation failed. Please try again.' });
  } catch (e: any) {
    console.error('[avatar] Error:', e.message);
    return res.status(500).json({ error: 'Avatar generation temporarily unavailable.' });
  }
}
