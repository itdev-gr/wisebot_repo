/**
 * Video Generation Endpoint — Google Veo 2
 * ==========================================
 * Starts async video generation via Google Veo 2.
 * Returns requestId (operationName) for polling with /api/ai/video-status.
 *
 * POST /api/ai/video-generate
 * Body: { prompt, imageBytes?, mimeType? }
 * Response: { requestId }
 */

const BLOCKED_EN = /\b(porn|xxx|hentai|nsfw|erotic|orgasm|genital|penis|vagina|masturbat|ejaculat|bdsm|bondage|dildo|vibrator|blowjob|handjob|threesome|gangbang|rape|molest|pedophil|incest|nude|naked|stripper|prostitut|suicide|self.?harm|slit.?wrist|hang.?myself|overdose|cocaine|heroin|methamphetamine|lsd|ecstasy|crack.?pipe|fuck|shit|bitch|cunt|nigger|faggot|retard|nazi|hitler|white.?power|jihad|isis|terrorist|kill.?myself|kill.?yourself|how.?to.?die|idiot|stupid|dumb|shut.?up|hate.?you|blood|gore|gory|torture|murder|decapitat|dismember)\b/i;
const BLOCKED_GR = /γαμ[ωώ]|σκατ[αά]|πούτ[αά]ν|μαλάκ[αά]|αρχίδ|μουν[ιί]|καριόλ|πουστ|αυτοκτον[ίι]|ναρκωτικ|βλάκα|χαζ[εέό]|ηλίθι|θα σε ?γαμ|βρωμ[ιί]|σκουπίδι|ψόφα|πέθανε|σκάσε|σε μισ[ωώ]|άντε γαμ|γαμ[ηή]σ|μαλακ[ίι]|πουτάν|αρχιδ|γκόμεν/i;
function isContentSafe(text: string): boolean { if (!text || typeof text !== 'string') return true; return !BLOCKED_EN.test(text) && !BLOCKED_GR.test(text); }

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const user = await (await import('../_lib/auth')).getAuthUser(req, { allowGuest: true });
  if (!user) return res.status(401).json({ error: 'Authentication required' });

  // Rate limiting — Veo 2 is very expensive. Guests limited per IP, users per id.
  const { aiRateLimit } = await import('../_lib/rateLimit');
  const rateCheck = await aiRateLimit(req, user, 'video', { guest: 2, user: 10, windowMinutes: 60 });
  if (!rateCheck.allowed) {
    return res.status(429).json({
      error: `Too many video requests. Please wait ${Math.ceil((rateCheck.retryAfter || 60) / 60)} minutes.`,
      retryAfter: rateCheck.retryAfter,
    });
  }

  // Server-side credit guard — Veo 2 costs ~€1.65-2.65 per generation
  const VIDEO_COST = 80;
  const { checkCredits } = await import('../_lib/auth');
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

    const config: any = { model: 'veo-2.0-generate-001' };

    // Add image if provided (image-to-video)
    if (imageBytes && mimeType) {
      config.image = { imageBytes, mimeType };
    }

    const operation = await (ai.models as any).generateVideo({
      ...config,
      prompt: videoPrompt,
      config: {
        aspectRatio: '9:16',
        numberOfVideos: 1,
      },
    });

    const operationName = operation.name;
    if (!operationName) {
      console.error('[video-generate] No operation name:', JSON.stringify(operation).slice(0, 300));
      return res.status(502).json({ error: 'Failed to start video generation' });
    }

    console.log('[video-generate] Started Veo 2 video, operationName:', operationName);
    // Return as requestId so polling endpoint stays consistent
    return res.status(200).json({ requestId: operationName });
  } catch (err: any) {
    console.error('[video-generate] Error:', err.message);
    return res.status(500).json({ error: err.message || 'Video generation failed' });
  }
}
