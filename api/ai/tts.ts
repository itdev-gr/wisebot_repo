/**
 * TTS Endpoint — Gemini Text-to-Speech (Kid-safe)
 * =================================================
 * Uses gemini-2.5-flash-preview-tts with AUDIO responseModality.
 * Content moderation applied for kid safety.
 * Returns { audio: base64, mimeType: string } for playback.
 */

// Voice name mapping
const VOICE_MAP: Record<string, string> = {
  friendly: 'Kore',
  narrator: 'Puck',
  adventure: 'Charon',
  calm: 'Aoede',
  default: 'Kore',
};


import { isContentSafe } from '../_lib/safety.js';

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const user = await (await import('../_lib/auth.js')).getAuthUser(req, { allowGuest: true });
  if (!user) return res.status(401).json({ error: 'Authentication required' });

  // Abuse guard — TTS proxies a paid model
  const { aiRateLimit } = await import('../_lib/rateLimit.js');
  const rl = await aiRateLimit(req, user, 'tts', { guest: 30, user: 300, windowMinutes: 60 });
  if (!rl.allowed) return res.status(429).json({ error: 'Too many requests', retryAfter: rl.retryAfter });

  const body = req.body;
  const inputText = body?.text;
  const voiceStyle = body?.voice || 'friendly';

  if (!inputText || typeof inputText !== 'string') {
    return res.status(400).json({ error: 'Text is required' });
  }

  // Input length validation
  if (inputText.length > 4000) {
    return res.status(400).json({ error: 'Input too long (max 4000 characters)' });
  }

  // Content moderation check
  if (!isContentSafe(inputText)) {
    return res.status(400).json({ error: 'Content not appropriate' });
  }

  const geminiKey = process.env.GEMINI_API_KEY;
  if (!geminiKey) {
    return res.status(500).json({ error: 'AI service not configured' });
  }

  try {
    const { GoogleGenAI } = await import('@google/genai');
    const genai = new GoogleGenAI({ apiKey: geminiKey });
    const voiceName = VOICE_MAP[voiceStyle] || VOICE_MAP.default;

    const { GEMINI_TTS_MODEL } = await import('../_lib/aiModels.js');
    const response = await genai.models.generateContent({
      model: GEMINI_TTS_MODEL,
      contents: inputText,
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName },
          },
        },
      },
    });

    // Extract audio data from response
    const parts = response.candidates?.[0]?.content?.parts;
    if (parts) {
      for (const part of parts) {
        if ((part as any).inlineData?.data) {
          const audioData = (part as any).inlineData.data;
          const mimeType = (part as any).inlineData.mimeType || 'audio/wav';
          return res.status(200).json({
            audio: audioData,
            mimeType: mimeType,
          });
        }
      }
    }

    return res.status(500).json({ error: 'No audio generated' });
  } catch (err: any) {
    const errorMsg = err?.message || 'TTS generation failed';
    console.error('[TTS]', errorMsg);
    return res.status(500).json({ error: errorMsg });
  }
}
