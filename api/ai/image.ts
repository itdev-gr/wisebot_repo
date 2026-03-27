/**
 * Image Generation Endpoint — Kid-safe
 * ======================================
 * Uses xAI Grok Imagine API (Aurora) for image generation.
 * Content moderation for children 6-13.
 *
 * POST /api/ai/image
 * Body: { prompt, style? }
 * Response: { image: "data:image/...;base64,..." }
 */

const BLOCKED_EN = /(porn|xxx|hentai|nsfw|erotic|orgasm|genital|penis|vagina|masturbat|ejaculat|bdsm|bondage|dildo|vibrator|blowjob|handjob|threesome|gangbang|rape|molest|pedophil|incest|nude|naked|stripper|prostitut|suicide|self.?harm|slit.?wrist|hang.?myself|overdose|cocaine|heroin|methamphetamine|lsd|ecstasy|crack.?pipe|fuck|shit|bitch|cunt|nigger|faggot|retard|nazi|hitler|white.?power|jihad|isis|terrorist|kill.?myself|kill.?yourself|how.?to.?die|blood|gore|gory|torture|murder|decapitat|dismember)/i;
const BLOCKED_GR = /γαμ[ωώ]|σκατ[αά]|πούτ[αά]ν|μαλάκ[αά]|αρχίδ|μουν[ιί]|καριόλ|πουστ|αυτοκτον[ίι]|ναρκωτικ|βλάκα|χαζ[εέό]|ηλίθι|θα σε ?γαμ|βρωμ[ιί]|σκουπίδι|ψόφα|πέθανε|σκάσε|σε μισ[ωώ]|άντε γαμ|γαμ[ηή]σ|μαλακ[ίι]|πουτάν|αρχιδ|γκόμεν/i;
function isContentSafe(text: string): boolean { if (!text || typeof text !== 'string') return true; return !BLOCKED_EN.test(text) && !BLOCKED_GR.test(text); }

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', req.headers?.origin || 'https://wisebot.gr');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // Auth required — prevent anonymous API abuse
  const { getAuthUser } = await import('../_lib/auth');
  const user = await getAuthUser(req);
  if (!user) return res.status(401).json({ error: 'Authentication required' });

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

  const xaiKey = process.env.XAI_API_KEY;
  if (!xaiKey) return res.status(500).json({ error: 'Image service not configured' });

  // ─── xAI Grok Imagine — Aurora ─────────────────────────────
  try {
    console.log('[Image] Calling xAI grok-imagine-image...');
    const resp = await fetch('https://api.x.ai/v1/images/generations', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${xaiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'grok-imagine-image',
        prompt: safePrompt,
        n: 1,
        response_format: 'b64_json',
        aspect_ratio: '1:1',
        resolution: '1k',
      }),
    });

    if (resp.ok) {
      const data = await resp.json();
      const item = data.data?.[0];
      const b64 = item?.b64_json;
      const mimeType = item?.mime_type || 'image/png';

      if (b64) {
        console.log('[Image] xAI grok-imagine-image success');
        return res.status(200).json({ image: `data:${mimeType};base64,${b64}` });
      }
    }

    const errText = await resp.text();
    console.error('[Image] xAI error:', resp.status, errText.slice(0, 300));
    return res.status(500).json({ error: 'Image generation failed. Please try again.' });
  } catch (e: any) {
    console.error('[Image] xAI error:', e.message);
    return res.status(500).json({ error: 'Image generation temporarily unavailable. Please try again.' });
  }
}
