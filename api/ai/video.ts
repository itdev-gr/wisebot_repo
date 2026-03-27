/**
 * Video Generation Endpoint — xAI Grok (Full Async)
 * ====================================================
 * Submits a video generation request to xAI and polls until complete.
 * Returns the final video as base64 data URI.
 *
 * Used by Cinema.tsx via backendAI.video()
 *
 * POST /api/ai/video
 * Body: { prompt, imageBytes?, mimeType? }
 * Response: { video: "data:video/mp4;base64,..." }
 */

const BLOCKED_EN = /(porn|xxx|hentai|nsfw|erotic|orgasm|genital|penis|vagina|masturbat|ejaculat|bdsm|bondage|dildo|vibrator|blowjob|handjob|threesome|gangbang|rape|molest|pedophil|incest|nude|naked|stripper|prostitut|suicide|self.?harm|slit.?wrist|hang.?myself|overdose|cocaine|heroin|methamphetamine|lsd|ecstasy|crack.?pipe|fuck|shit|bitch|cunt|nigger|faggot|retard|nazi|hitler|white.?power|jihad|isis|terrorist|kill.?myself|kill.?yourself|how.?to.?die|idiot|stupid|dumb|shut.?up|hate.?you|blood|gore|gory|torture|murder|decapitat|dismember)/i;
const BLOCKED_GR = /γαμ[ωώ]|σκατ[αά]|πούτ[αά]ν|μαλάκ[αά]|αρχίδ|μουν[ιί]|καριόλ|πουστ|αυτοκτον[ίι]|ναρκωτικ|βλάκα|χαζ[εέό]|ηλίθι|θα σε ?γαμ|βρωμ[ιί]|σκουπίδι|ψόφα|πέθανε|σκάσε|σε μισ[ωώ]|άντε γαμ|γαμ[ηή]σ|μαλακ[ίι]|πουτάν|αρχιδ|γκόμεν/i;
function isContentSafe(text: string): boolean { if (!text || typeof text !== 'string') return true; return !BLOCKED_EN.test(text) && !BLOCKED_GR.test(text); }

/** Sleep helper */
function sleep(ms: number) { return new Promise(r => setTimeout(r, ms)); }

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', req.headers?.origin || 'https://wisebot.gr');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { getAuthUser } = await import('../_lib/auth');
  const user = await getAuthUser(req);
  if (!user) return res.status(401).json({ error: 'Authentication required' });

  try {
    const { prompt, imageBytes, mimeType } = req.body;
    if (!prompt) return res.status(400).json({ error: 'Prompt required' });

    if (typeof prompt === 'string' && prompt.length > 4000) {
      return res.status(400).json({ error: 'Input too long (max 4000 characters)' });
    }

    if (!isContentSafe(prompt)) {
      return res.status(200).json({
        video: '🛡️ Αυτό το βίντεο δεν μπορεί να δημιουργηθεί. Δοκίμασε κάτι πιο χαρούμενο!'
      });
    }

    const xaiKey = process.env.XAI_API_KEY;
    if (!xaiKey) return res.status(500).json({ error: 'Video service not configured' });

    // ─── Step 1: Submit video generation request ───────────────
    const body: any = {
      model: 'grok-imagine-video',
      prompt: `Kid-friendly animated video: ${prompt}. Style: colorful, fun, safe for children. No violence, no scary elements.`,
      duration: 6,
      aspect_ratio: '9:16',
      resolution: '720p',
    };

    // Image-to-video
    if (imageBytes && mimeType) {
      body.image = `data:${mimeType};base64,${imageBytes}`;
    }

    console.log('[video] Submitting to xAI grok-imagine-video...');
    const submitResp = await fetch('https://api.x.ai/v1/videos/generations', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${xaiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!submitResp.ok) {
      const errText = await submitResp.text();
      console.error('[video] xAI submit error:', submitResp.status, errText.slice(0, 300));
      return res.status(500).json({ error: 'Video generation failed' });
    }

    const submitData = await submitResp.json();
    const requestId = submitData.request_id;

    if (!requestId) {
      console.error('[video] No request_id:', JSON.stringify(submitData).slice(0, 500));
      return res.status(500).json({ error: 'Video generation failed to start' });
    }

    console.log('[video] Got request_id:', requestId);

    // ─── Step 2: Poll until done (max ~270s to stay within Vercel 300s timeout) ───
    const MAX_POLLS = 54; // 54 * 5s = 270s
    const POLL_INTERVAL = 5000; // 5 seconds

    for (let i = 0; i < MAX_POLLS; i++) {
      await sleep(POLL_INTERVAL);

      const pollResp = await fetch(`https://api.x.ai/v1/videos/${requestId}`, {
        headers: { 'Authorization': `Bearer ${xaiKey}` },
      });

      if (!pollResp.ok) {
        console.warn('[video] Poll error:', pollResp.status);
        continue; // Retry on transient errors
      }

      const pollData = await pollResp.json();

      if (pollData.status === 'done') {
        const videoUrl = pollData.video?.url;
        if (!videoUrl) {
          console.error('[video] Done but no video URL');
          return res.status(500).json({ error: 'Video generated but no URL returned' });
        }

        // Fetch video and return as base64
        console.log('[video] Downloading video from xAI...');
        const videoResp = await fetch(videoUrl);
        if (!videoResp.ok) {
          return res.status(500).json({ error: 'Failed to download generated video' });
        }

        const videoBuffer = await videoResp.arrayBuffer();
        const base64 = Buffer.from(videoBuffer).toString('base64');
        console.log('[video] Success! Video size:', Math.round(videoBuffer.byteLength / 1024), 'KB');
        return res.status(200).json({ video: base64 });
      }

      if (pollData.status === 'failed' || pollData.status === 'expired') {
        console.error('[video] Generation failed:', pollData.status);
        return res.status(500).json({ error: `Video generation ${pollData.status}` });
      }

      // Still pending — continue polling
      console.log(`[video] Still processing... (poll ${i + 1}/${MAX_POLLS})`);
    }

    // Timed out
    console.error('[video] Timed out after polling');
    return res.status(504).json({ error: 'Video generation timed out. Please try again.' });
  } catch (err: any) {
    console.error('[video] Error:', err.message);
    res.status(500).json({ error: err.message || 'Video generation failed' });
  }
}
