/**
 * Image Generation Endpoint — Kid-safe
 * ======================================
 * Priority: xAI Grok Imagine → DALL-E 3 (OpenAI) → Imagen 4 (Google) → Gemini Flash Image
 * All with content moderation for children 6-13.
 */

import { isContentSafe } from '../_lib/safety.js';

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const user = await (await import('../_lib/auth.js')).getAuthUser(req, { allowGuest: true });
  if (!user) return res.status(401).json({ error: 'Authentication required' });

  // Abuse guard — limit guests by IP, authenticated users by id
  const { aiRateLimit } = await import('../_lib/rateLimit.js');
  const rl = await aiRateLimit(req, user, 'image', { guest: 10, user: 60, windowMinutes: 60 });
  if (!rl.allowed) return res.status(429).json({ error: 'Too many requests', retryAfter: rl.retryAfter });

  // Server-side credit guard — Image generation costs 6 credits
  const IMAGE_COST = 6;
  const { checkCredits, deductCredits } = await import('../_lib/auth.js');
  const creditCheck = await checkCredits(user.id, IMAGE_COST);
  if (!creditCheck.ok) {
    return res.status(402).json({ error: 'Not enough credits', credits: creditCheck.credits ?? 0, required: IMAGE_COST });
  }

  // Charge only after a provider actually returns an image
  const succeed = async (payload: Record<string, unknown>) => {
    await deductCredits(user.id, IMAGE_COST, 'CREATE_IMAGE');
    return res.status(200).json(payload);
  };

  const { prompt, style } = req.body || {};
  if (!prompt) return res.status(400).json({ error: 'Prompt required' });
  if (typeof prompt === 'string' && prompt.length > 4000) return res.status(400).json({ error: 'Input too long' });
  if (!isContentSafe(prompt) || !isContentSafe(style || '')) {
    return res.status(200).json({ image: '', description: 'This image cannot be created. Try something more fun!' });
  }

  // Pass the prompt as-is — the HeroFactory already constructs perfect prompts
  // Only add NO TEXT instruction if not already present
  const hasNoTextRule = prompt.toLowerCase().includes('no text');
  const safePrompt = hasNoTextRule
    ? prompt
    : `${prompt}. IMPORTANT: NO text, NO labels, NO writing anywhere on the image.`;

  // ─── ATTEMPT 1: xAI Grok Imagine — Best quality ───────────────
  const xaiKey = process.env.XAI_API_KEY;
  if (xaiKey) {
    try {
      console.log('[Image] Trying xAI Grok Imagine...');
      const resp = await fetch('https://api.x.ai/v1/images/generations', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${xaiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'grok-imagine-image',
          prompt: safePrompt,
          n: 1,
          response_format: 'b64_json',
        }),
      });

      if (resp.ok) {
        const data = await resp.json();
        const b64 = data.data?.[0]?.b64_json;
        if (b64) {
          console.log('[Image] xAI Grok success');
          return succeed({ image: `data:image/png;base64,${b64}` });
        }
      } else {
        const err = await resp.text();
        console.warn('[Image] xAI Grok failed:', resp.status, err.slice(0, 200));
      }
    } catch (e: any) {
      console.warn('[Image] xAI Grok error:', e.message);
    }
  }

  // ─── ATTEMPT 2: gpt-image-1 (OpenAI) — dall-e-3 is no longer on the account ──
  const openaiKey = process.env.OPENAI_API_KEY?.trim();
  if (openaiKey) {
    try {
      console.log('[Image] Trying gpt-image-1...');
      const resp = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${openaiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'gpt-image-1',
          prompt: safePrompt,
          n: 1,
          size: '1024x1024',
          quality: 'medium',
          // gpt-image-* always returns b64_json; `response_format` is rejected.
        }),
      });

      if (resp.ok) {
        const data = await resp.json();
        const b64 = data.data?.[0]?.b64_json;
        if (b64) {
          console.log('[Image] gpt-image-1 success');
          return succeed({ image: `data:image/png;base64,${b64}` });
        }
      } else {
        const err = await resp.text();
        console.warn('[Image] gpt-image-1 failed:', resp.status, err.slice(0, 200));
      }
    } catch (e: any) {
      console.warn('[Image] gpt-image-1 error:', e.message);
    }
  }

  // (Imagen 4 Fast used to sit here. The API no longer lists imagen-4.0-fast-generate-001,
  // so the attempt only burned seconds of the 60 s budget before falling through.)
  const geminiKey = process.env.GEMINI_API_KEY;

  // ─── ATTEMPT 3: Gemini Flash Image ────────────────────────────
  if (geminiKey) {
    try {
      console.log('[Image] Trying Gemini Flash Image...');
      const { GoogleGenAI: GeminiAI } = await import('@google/genai');
      const ai = new GeminiAI({ apiKey: geminiKey });

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: safePrompt,
        config: { responseModalities: ['IMAGE'] },
      });

      const parts = response.candidates?.[0]?.content?.parts;
      if (parts) {
        for (const part of parts) {
          if ((part as any).inlineData?.data) {
            console.log('[Image] Gemini Flash Image success');
            return succeed({
              image: `data:${(part as any).inlineData.mimeType || "image/png"};base64,${(part as any).inlineData.data}`,
            });
          }
        }
      }
    } catch (e: any) {
      console.warn('[Image] Gemini Flash error:', e.message?.slice(0, 200));
    }
  }

  // All failed
  console.error('[Image] All providers failed');
  res.status(500).json({ error: 'Image generation temporarily unavailable. Please try again.' });
}
