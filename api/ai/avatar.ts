/**
 * Avatar Generation Endpoint — Photo → Cartoon
 * ==============================================
 * Transforms a user photo into a cartoon/anime hero avatar.
 *
 * Model priority:
 *   1. OpenAI gpt-image-1  images.edit  (fast image-editing, ~10 s)
 *   2. Gemini 2.0 Flash Exp             (image→image, 45 s timeout guard)
 *
 * POST /api/ai/avatar
 * Body: { imageBytes: string (base64, no prefix), mimeType: string }
 * Response: { image: "data:image/...;base64,..." }
 */

// Allow up to 60 s (Vercel Hobby cap)
export const config = { maxDuration: 60 };

export default async function handler(req: any, res: any) {
  // ── CORS ────────────────────────────────────────────────────
  res.setHeader('Access-Control-Allow-Origin', req.headers?.origin || 'https://wisebot.gr');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // ── AUTH — inline (same pattern as gift.ts / delete-account.ts) ─
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

  const { imageBytes, mimeType } = req.body || {};
  if (!imageBytes) return res.status(400).json({ error: 'Image data required' });
  // Validate base64 size (raw base64 string ≈ 1.33× actual bytes; 10MB limit)
  if (typeof imageBytes !== 'string' || imageBytes.length > 14_000_000) {
    return res.status(413).json({ error: 'Image too large (max 10 MB)' });
  }
  const allowedMimeTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  if (mimeType && !allowedMimeTypes.includes(mimeType)) {
    return res.status(400).json({ error: 'Unsupported image type' });
  }

  const prompt =
    'Transform the person in this photo into a cute cartoon/anime hero. ' +
    'Keep the face recognizable as a cartoon version of the same person. ' +
    'Bright vivid colors, bold outlines, friendly expression, square crop. ' +
    'NO text, NO watermarks, NO labels anywhere on the image.';

  // ─── ATTEMPT 1: OpenAI gpt-image-1 images.edit (25 s guard) ──
  // Accepts JPEG/PNG input, designed specifically for image editing/transformation
  const openaiKey = process.env.OPENAI_API_KEY;
  if (openaiKey) {
    try {
      const imageBuffer = Buffer.from(imageBytes, 'base64');

      const formData = new FormData();
      formData.append('model', 'gpt-image-1');
      formData.append(
        'image',
        new Blob([imageBuffer], { type: mimeType || 'image/jpeg' }),
        'photo.jpg',
      );
      formData.append('prompt', prompt);
      formData.append('n', '1');
      formData.append('size', '1024x1024');
      formData.append('quality', 'medium');

      const fetchPromise = fetch('https://api.openai.com/v1/images/edits', {
        method: 'POST',
        headers: { Authorization: `Bearer ${openaiKey}` },
        body: formData,
      });

      // 25 s guard — leaves enough time for Gemini fallback within Vercel's 60 s limit
      const openaiTimeout = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error('OPENAI_TIMEOUT')), 25_000),
      );

      const resp = await Promise.race([fetchPromise, openaiTimeout]) as Response;

      if (resp.ok) {
        const data = await resp.json();
        const b64 = data.data?.[0]?.b64_json;
        if (b64) {
          return res.status(200).json({ image: `data:image/png;base64,${b64}` });
        }
        console.warn('[avatar] gpt-image-1 ok but no b64_json:', JSON.stringify(data).slice(0, 200));
      } else {
        const errText = await resp.text();
        console.warn('[avatar] gpt-image-1 failed:', resp.status, errText.slice(0, 300));
      }
    } catch (e: any) {
      console.warn('[avatar] gpt-image-1 error:', e.message?.slice(0, 150));
    }
  }

  // ─── ATTEMPT 2: Gemini 2.0 Flash Exp (28 s timeout guard) ───
  // Image→image with responseModalities; fallback when gpt-image-1 is slow/fails
  const geminiKey = process.env.GEMINI_API_KEY;
  if (geminiKey) {
    try {
      const { GoogleGenAI } = await import('@google/genai');
      const ai = new GoogleGenAI({ apiKey: geminiKey });

      const geminiPromise = ai.models.generateContent({
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
          responseModalities: ['IMAGE', 'TEXT'],
          // Required: without ALLOW_ALL the safety filter refuses to output images of people
          personGeneration: 'ALLOW_ALL',
        } as any,
      });

      // 28 s guard — together with the 25 s OpenAI guard fits within Vercel's 60 s limit
      const timeoutPromise = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error('GEMINI_TIMEOUT')), 28_000),
      );

      const response = await Promise.race([geminiPromise, timeoutPromise]) as any;
      const parts: any[] = response.candidates?.[0]?.content?.parts ?? [];

      for (const part of parts) {
        if (part?.inlineData?.data) {
          return res.status(200).json({
            image: `data:${part.inlineData.mimeType || 'image/png'};base64,${part.inlineData.data}`,
          });
        }
      }

      const textPart = parts.find((p: any) => p?.text)?.text || '';
      console.error('[avatar] Gemini returned no image. Text:', textPart.slice(0, 200));
    } catch (e: any) {
      console.error('[avatar] Gemini error:', e.message?.slice(0, 200));
    }
  }

  return res.status(500).json({ error: 'Avatar generation failed. Please try again.' });
}
