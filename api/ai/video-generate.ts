/**
 * Video Generation Endpoint — Google Veo 3.1
 * ==========================================
 * Starts async video generation via Google Veo 3.1 (fast).
 * Returns requestId (operationName) for polling with /api/ai/video-status.
 *
 * POST /api/ai/video-generate
 * Body: { prompt, imageBytes?, mimeType? }
 * Response: { requestId }
 */

import { isContentSafe } from '../_lib/safety.js';

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // A video costs 80⚡ — more than a guest's 10⚡ trial — so this is for signed-in
  // children only. Guests get a clear "login_required" the client turns into a prompt.
  const user = await (await import('../_lib/auth.js')).getAuthUser(req, { allowGuest: false });
  if (!user) return res.status(401).json({ error: 'login_required' });

  // Rate limiting — Veo 2 is very expensive. Guests limited per IP, users per id.
  const { aiRateLimit } = await import('../_lib/rateLimit.js');
  const rateCheck = await aiRateLimit(req, user, 'video', { guest: 2, user: 10, windowMinutes: 60 });
  if (!rateCheck.allowed) {
    return res.status(429).json({
      error: `Too many video requests. Please wait ${Math.ceil((rateCheck.retryAfter || 60) / 60)} minutes.`,
      retryAfter: rateCheck.retryAfter,
    });
  }

  // Server-side credit guard — Veo 2 costs ~€1.65-2.65 per generation
  const { COSTS } = await import('../_lib/costs.js');
  const VIDEO_COST = COSTS.VIDEO;
  const { checkCredits } = await import('../_lib/auth.js');
  const creditCheck = await checkCredits(user.id, VIDEO_COST);
  if (!creditCheck.ok) {
    return res.status(402).json({ error: 'Not enough credits', credits: creditCheck.credits ?? 0, required: VIDEO_COST });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Video service not configured' });

  const { prompt, imageBytes, mimeType } = req.body;
  if (!prompt) return res.status(400).json({ error: 'Prompt required' });

  if (!isContentSafe(prompt)) {
    return res.status(400).json({ error: '🛡️ Content not appropriate for children.' });
  }

  try {
    const { GoogleGenAI } = await import('@google/genai');
    const ai = new GoogleGenAI({ apiKey });

    const videoPrompt = `Kid-friendly animated video for children: ${prompt}. Style: colorful, fun, educational, safe for children ages 6-13. No violence, no scary elements.`;

    // @google/genai exposes `generateVideos` (plural). The previous `generateVideo`
    // call did not exist on the SDK, so every request threw after the rate-limit
    // and credit checks — Cinema had never produced a video on this SDK version.
    // veo-2.0-generate-001 is no longer served by the API (checked 23 Αυγούστου 2026);
    // Veo 3.1 fast is the cheapest current model and has native audio, so the
    // "The character says: …" line in Cinema's prompt is finally heard.
    const operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: videoPrompt,
      // image-to-video when the child animates their hero
      ...(imageBytes && mimeType ? { image: { imageBytes, mimeType } } : {}),
      config: {
        aspectRatio: '9:16',
        numberOfVideos: 1,
        durationSeconds: 6,
        personGeneration: 'allow_all',
      },
    });

    const operationName = operation.name;
    if (!operationName) {
      console.error('[video-generate] No operation name:', JSON.stringify(operation).slice(0, 300));
      return res.status(502).json({ error: 'Failed to start video generation' });
    }

    console.log('[video-generate] Started Veo 2 video, operationName:', operationName);
    const { deductCredits } = await import('../_lib/auth.js');
    await deductCredits(user.id, VIDEO_COST, 'CREATE_VIDEO');
    // Return as requestId so polling endpoint stays consistent
    return res.status(200).json({ requestId: operationName });
  } catch (err: any) {
    console.error('[video-generate] Error:', err.message);
    return res.status(500).json({ error: 'Video generation failed' });
  }
}
