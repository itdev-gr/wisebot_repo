/**
 * Avatar Generation Endpoint — Gemini Image-to-Image
 * ====================================================
 * Transforms a user photo into a cartoon/anime hero avatar.
 * Uses @google/genai SDK (same pattern as image.ts / generate.ts).
 *
 * Model: gemini-2.0-flash-exp (supports image INPUT + IMAGE output via responseModalities)
 * Requires personGeneration: ALLOW_ALL so Gemini's safety filter permits cartoon
 * output of people (without it the model returns text refusal, no image).
 *
 * POST /api/ai/avatar
 * Body: { imageBytes: string (base64, no prefix), mimeType: string }
 * Response: { image: "data:image/...;base64,..." }
 */

// Gemini image generation can take 15-30 s
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

  const prompt =
    'Transform this photo into a cute cartoon/anime hero. Keep the face clearly recognizable. ' +
    'Use bright vivid colors, bold outlines, friendly expression. Square crop. ' +
    'NO text, NO watermarks, NO labels anywhere on the image.';

  try {
    const { GoogleGenAI } = await import('@google/genai');
    const ai = new GoogleGenAI({ apiKey: geminiKey });

    // gemini-2.0-flash-exp: supports image INPUT + IMAGE output (responseModalities)
    // personGeneration: ALLOW_ALL — required so the model can output cartoon images of people
    console.log('[avatar] Calling gemini-2.0-flash-exp for cartoon transformation...');
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-exp',
      contents: [
        {
          parts: [
            { inlineData: { mimeType: mimeType || 'image/jpeg', data: imageBytes } },
            { text: prompt },
          ],
        },
      ],
      config: {
        responseModalities: ['IMAGE', 'TEXT'] as any,
        personGeneration: 'ALLOW_ALL' as any,
      },
    });

    const parts = response.candidates?.[0]?.content?.parts ?? [];
    for (const part of parts as any[]) {
      if (part?.inlineData?.data) {
        const outputMime = part.inlineData.mimeType || 'image/png';
        console.log('[avatar] Success — cartoon image returned');
        return res.status(200).json({ image: `data:${outputMime};base64,${part.inlineData.data}` });
      }
    }

    // No image in response — log what we got and return error
    const textPart = (parts as any[]).find((p: any) => p?.text)?.text || '';
    console.error('[avatar] Gemini returned no image. Text:', textPart.slice(0, 200));
    return res.status(500).json({ error: 'Avatar generation failed. Please try again.' });

  } catch (e: any) {
    console.error('[avatar] Error:', e.message?.slice(0, 200));
    return res.status(500).json({ error: 'Avatar generation temporarily unavailable.' });
  }
}
