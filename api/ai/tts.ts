/**
 * TTS Endpoint — Gemini Text-to-Speech (Kid-safe)
 * =================================================
 * Uses gemini-2.5-flash-preview-tts with AUDIO responseModality.
 * Content moderation applied for kid safety.
 * Returns { audio: base64, mimeType: string } for playback.
 */
import { GoogleGenAI } from '@google/genai';

// Content moderation for kids' app (ages 6-13)
const BLOCKED_CONTENT = /\b(porn|xxx|hentai|nsfw|erotic|orgasm|genital|penis|vagina|masturbat|ejaculat|bdsm|bondage|dildo|vibrator|blowjob|handjob|threesome|gangbang|rape|molest|pedophil|incest|nude|naked|stripper|prostitut|suicide|self.?harm|slit.?wrist|hang.?myself|overdose|cocaine|heroin|methamphetamine|lsd|ecstasy|crack.?pipe|fuck|shit|bitch|cunt|nigger|faggot|retard|nazi|hitler|white.?power|jihad|isis|terrorist|kill.?myself|kill.?yourself|how.?to.?die|γαμ[ωώ]|σκατ[αά]|πούτ[αά]ν|μαλάκ[αά]|αρχίδ|μουν[ιί]|καριόλ|πουστ|αυτοκτον[ίι]|ναρκωτικ)\b/i;

function isContentSafe(text: string): boolean {
  if (!text || typeof text !== 'string') return true;
  return !BLOCKED_CONTENT.test(text);
}

// Voice name mapping
const VOICE_MAP: Record<string, string> = {
  friendly: 'Kore',
  narrator: 'Puck',
  adventure: 'Charon',
  calm: 'Aoede',
  default: 'Kore',
};

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body;
  const inputText = body?.text;
  const voiceStyle = body?.voice || 'friendly';

  if (!inputText || typeof inputText !== 'string') {
    return res.status(400).json({ error: 'Text is required' });
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
