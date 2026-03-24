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
import { withAuth } from '../_lib/middleware';

// Content moderation for kids' app (ages 6-13)
const BLOCKED_CONTENT = /\b(porn|xxx|hentai|nsfw|erotic|orgasm|genital|penis|vagina|masturbat|ejaculat|bdsm|bondage|dildo|vibrator|blowjob|handjob|threesome|gangbang|rape|molest|pedophil|incest|nude|naked|stripper|prostitut|suicide|self.?harm|slit.?wrist|hang.?myself|overdose|cocaine|heroin|methamphetamine|lsd|ecstasy|crack.?pipe|fuck|shit|bitch|cunt|nigger|faggot|retard|nazi|hitler|white.?power|jihad|isis|terrorist|kill.?myself|kill.?yourself|how.?to.?die|γαμ[ωώ]|σκατ[αά]|πούτ[αά]ν|μαλάκ[αά]|αρχίδ|μουν[ιί]|καριόλ|πουστ|αυτοκτον[ίι]|ναρκωτικ)\b/i;

function isContentSafe(text: string): boolean {
  if (!text || typeof text !== 'string') return true;
  return !BLOCKED_CONTENT.test(text);
}

const SUNO_API_URL = 'https://api.sunoapi.org/api/v1/generate';

export default withAuth(async (req: any, res: any, user) => {
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

    return res.status(200).json({ taskId: data.data.taskId });
  } catch (err: any) {
    console.error('[suno-generate] Error:', err.message || err);
    return res.status(500).json({ error: err.message || 'Internal server error.' });
  }
});
