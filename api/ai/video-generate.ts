/**
 * Video Generation Endpoint — xAI Grok Imagine Video
 * =====================================================
 * Creates a video using xAI's grok-imagine-video model.
 * Returns a requestId for polling with /api/ai/video-status.
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
  res.setHeader('Access-Control-Allow-Origin', req.headers?.origin || 'https://wisebot.gr');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  const user = null;

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const apiKey = process.env.XAI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Video service not configured' });

  const { prompt, imageBytes, mimeType } = req.body;
  if (!prompt) return res.status(400).json({ error: 'Prompt required' });

  if (!isContentSafe(prompt)) {
    return res.status(400).json({ error: '🛡️ Content not appropriate for children.' });
  }

  try {
    const body: any = {
      model: 'grok-imagine-video',
      prompt: `Kid-friendly animated video: ${prompt}. Style: colorful, fun, safe for children. No violence, no scary elements.`,
    };

    // Add image if provided (image-to-video)
    if (imageBytes && mimeType) {
      body.image = { imageBytes, mimeType };
    }

    const resp = await fetch('https://api.x.ai/v1/videos/generations', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!resp.ok) {
      const errText = await resp.text();
      console.error('[video-generate] xAI error:', resp.status, errText.slice(0, 300));
      return res.status(502).json({ error: `Video API error: ${resp.status}` });
    }

    const data = await resp.json();
    const requestId = data.request_id;

    if (!requestId) {
      console.error('[video-generate] No request_id:', JSON.stringify(data).slice(0, 500));
      return res.status(502).json({ error: 'Failed to start video generation' });
    }

    console.log('[video-generate] Started xAI video, requestId:', requestId);
    return res.status(200).json({ requestId });
  } catch (err: any) {
    console.error('[video-generate] Error:', err.message);
    return res.status(500).json({ error: err.message || 'Video generation failed' });
  }
}
