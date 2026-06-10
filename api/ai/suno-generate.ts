/**
 * Suno Music Generation Endpoint
 * ================================
 * Creates a real song using the Suno API (via sunoapi.org).
 * Returns a taskId that can be polled with /api/ai/suno-status.
 *
 * POST /api/ai/suno-generate
 *
 * Request body:
 *   {
 *     lyrics: string,        // Song lyrics
 *     style: string,         // Genre/style tags e.g. "pop, upbeat"
 *     title: string,         // Song title
 *     instrumental?: boolean // If true, no vocals
 *   }
 *
 * Response:
 *   { taskId: string }
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';

const SUNO_API_URL = 'https://api.sunoapi.org/api/v1/generate';


const BLOCKED_EN = /(porn|xxx|hentai|nsfw|erotic|orgasm|genital|penis|vagina|masturbat|ejaculat|bdsm|bondage|dildo|vibrator|blowjob|handjob|threesome|gangbang|rape|molest|pedophil|incest|nude|naked|stripper|prostitut|suicide|self.?harm|slit.?wrist|hang.?myself|overdose|cocaine|heroin|methamphetamine|lsd|ecstasy|crack.?pipe|fuck|shit|bitch|cunt|nigger|faggot|retard|nazi|hitler|white.?power|jihad|isis|terrorist|kill.?myself|kill.?yourself|how.?to.?die|idiot|stupid|dumb|shut.?up|hate.?you|blood|gore|gory|torture|murder|decapitat|dismember)/i;
const BLOCKED_GR = /γαμ[ωώ]|σκατ[αά]|πούτ[αά]ν|μαλάκ[αά]|αρχίδ|μουν[ιί]|καριόλ|πουστ|αυτοκτον[ίι]|ναρκωτικ|βλάκα|χαζ[εέό]|ηλίθι|θα σε ?γαμ|βρωμ[ιί]|σκουπίδι|ψόφα|πέθανε|σκάσε|σε μισ[ωώ]|άντε γαμ|γαμ[ηή]σ|μαλακ[ίι]|πουτάν|αρχιδ|γκόμεν/i;
function isContentSafe(text: string): boolean { if (!text || typeof text !== 'string') return true; return !BLOCKED_EN.test(text) && !BLOCKED_GR.test(text); }

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  const user = await (await import('../_lib/auth.js')).getAuthUser(req, { allowGuest: true });
  if (!user) return res.status(401).json({ error: 'Authentication required' });

  // Rate limiting — Suno is expensive. Guests limited per IP, users per id.
  const { aiRateLimit } = await import('../_lib/rateLimit.js');
  const rateCheck = await aiRateLimit(req, user, 'suno', { guest: 3, user: 15, windowMinutes: 60 });
  if (!rateCheck.allowed) {
    return res.status(429).json({
      error: `Too many song requests. Please wait ${Math.ceil((rateCheck.retryAfter || 60) / 60)} minutes.`,
      retryAfter: rateCheck.retryAfter,
    });
  }

  // Server-side credit guard — Suno generation costs credits
  const SONG_COST = 60;
  const { checkCredits } = await import('../_lib/auth.js');
  const creditCheck = await checkCredits(user.id, SONG_COST);
  if (!creditCheck.ok) {
    return res.status(402).json({ error: 'Not enough credits', credits: creditCheck.credits ?? 0, required: SONG_COST });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.SUNO_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Suno API key not configured.' });
  }

  const { lyrics, style, title, instrumental = false } = req.body || {};

  if (!lyrics && !instrumental) {
    return res.status(400).json({ error: 'Lyrics are required for non-instrumental songs.' });
  }

  // Content moderation
  if (!isContentSafe(lyrics || '') || !isContentSafe(style || '') || !isContentSafe(title || '')) {
    return res.status(400).json({ error: '🛡️ Content not appropriate. Please use kid-friendly themes.' });
  }

  try {
    const body: any = {
      customMode: true,
      instrumental: !!instrumental,
      model: 'V4_5',
      style: (style || 'pop').slice(0, 200),
      title: (title || 'My Song').slice(0, 80),
      callBackUrl: 'https://wisebot.gr/api/ai/suno-callback',
    };

    // Add lyrics if not instrumental
    if (!instrumental && lyrics) {
      body.prompt = lyrics.slice(0, 3000);
    }

    const response = await fetch(SUNO_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('[suno-generate] API error:', response.status, errorText);
      return res.status(502).json({ error: `Suno API error: ${response.status}` });
    }

    const data = await response.json();

    if (data.code !== 200 || !data.data?.taskId) {
      console.error('[suno-generate] Unexpected response:', JSON.stringify(data));
      return res.status(502).json({ error: data.msg || 'Failed to create song task.' });
    }

    const { deductCredits } = await import('../_lib/auth.js');
    await deductCredits(user.id, SONG_COST, 'CREATE_SONG');
    return res.status(200).json({ taskId: data.data.taskId });
  } catch (err: any) {
    console.error('[suno-generate] Error:', err.message || err);
    return res.status(500).json({ error: err.message || 'Internal server error.' });
  }
}
