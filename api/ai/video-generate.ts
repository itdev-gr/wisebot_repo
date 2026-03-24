/**
 * Video Generation Endpoint — Veo 2 (Google)
 * =============================================
 * Creates a video using Google's Veo model via Gemini API.
 * Returns an operationName for polling with /api/ai/video-status.
 *
 * POST /api/ai/video-generate
 * Body: { prompt, imageBytes?, mimeType? }
 * Response: { operationName }
 */
import { GoogleGenAI } from '@google/genai';

const BLOCKED_EN = /\b(porn|xxx|hentai|nsfw|erotic|orgasm|genital|penis|vagina|masturbat|ejaculat|bdsm|rape|molest|pedophil|incest|nude|naked|suicide|self.?harm|fuck|shit|bitch|cunt|nigger|nazi|hitler|terrorist|kill.?myself)\b/i;
const BLOCKED_GR = /γαμ[ωώ]|σκατ[αά]|πούτ[αά]ν|μαλάκ[αά]|αρχίδ|μουν[ιί]|καριόλ|πουστ|αυτοκτον[ίι]|ναρκωτικ/i;

function isContentSafe(text: string): boolean {
  if (!text || typeof text !== 'string') return true;
  return !BLOCKED_EN.test(text) && !BLOCKED_GR.test(text);
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Video service not configured' });

  const { prompt, imageBytes, mimeType } = req.body;
  if (!prompt) return res.status(400).json({ error: 'Prompt required' });

  if (!isContentSafe(prompt)) {
    return res.status(400).json({ error: '🛡️ Content not appropriate for children.' });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    const generateConfig: any = {
      model: 'veo-2.0-generate-001',
      prompt: `Kid-friendly animated video: ${prompt}. Style: colorful, fun, safe for children. No violence, no scary elements.`,
      config: {
        numberOfVideos: 1,
        durationSeconds: 6,
        aspectRatio: '9:16',
      },
    };

    // Add image if provided (image-to-video)
    if (imageBytes && mimeType) {
      generateConfig.image = { imageBytes, mimeType };
    }

    const operation = await ai.models.generateVideos(generateConfig);

    // Return the operation name for polling
    const operationName = operation.name || operation.operationName || '';

    if (!operationName) {
      console.error('[video-generate] No operation name:', JSON.stringify(operation).slice(0, 500));
      return res.status(502).json({ error: 'Failed to start video generation' });
    }

    console.log('[video-generate] Started operation:', operationName);
    return res.status(200).json({ operationName });
  } catch (err: any) {
    console.error('[video-generate] Error:', err.message);
    return res.status(500).json({ error: err.message || 'Video generation failed' });
  }
}
