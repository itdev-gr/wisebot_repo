/**
 * TTS Endpoint — Gemini Text-to-Speech (Kid-safe)
 * =================================================
 * Uses gemini-2.5-flash-preview-tts with AUDIO responseModality.
 * Content moderation applied for kid safety.
 * Returns { audio: base64, mimeType: string } for playback.
 */
import { isContentSafe } from './_moderation';

// Voice name mapping
const VOICE_MAP: Record<string, string> = {
  friendly: 'Kore',
  narrator: 'Puck',
  adventure: 'Charon',
  calm: 'Aoede',
  default: 'Kore',
};

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', req.headers?.origin || 'https://wisebot.gr');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  const user = null;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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

    const response = await genai.models.generateContent({
      model: 'gemini-2.5-flash-preview-tts',
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
