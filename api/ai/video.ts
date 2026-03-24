/**
 * Video Description Endpoint — Kid-safe
 * =======================================
 * Uses Gemini 2.5 Flash with content moderation.
 */
import { GoogleGenAI } from '@google/genai';

// Content moderation for kids' app (ages 6-13)
const BLOCKED_CONTENT = /\b(porn|xxx|hentai|nsfw|erotic|orgasm|genital|penis|vagina|masturbat|ejaculat|bdsm|bondage|dildo|vibrator|blowjob|handjob|threesome|gangbang|rape|molest|pedophil|incest|nude|naked|stripper|prostitut|suicide|self.?harm|slit.?wrist|hang.?myself|overdose|cocaine|heroin|methamphetamine|lsd|ecstasy|crack.?pipe|fuck|shit|bitch|cunt|nigger|faggot|retard|nazi|hitler|white.?power|jihad|isis|terrorist|kill.?myself|kill.?yourself|how.?to.?die|blood|gore|gory|torture|murder|γαμ[ωώ]|σκατ[αά]|πούτ[αά]ν|μαλάκ[αά]|αρχίδ|μουν[ιί]|καριόλ|πουστ|αυτοκτον[ίι]|ναρκωτικ)\b/i;

function isContentSafe(text: string): boolean {
  if (!text || typeof text !== 'string') return true;
  return !BLOCKED_CONTENT.test(text);
}

const SAFETY_SETTINGS: any[] = [
  { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_LOW_AND_ABOVE' },
  { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_LOW_AND_ABOVE' },
  { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_LOW_AND_ABOVE' },
  { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_LOW_AND_ABOVE' },
];

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { prompt, imageBytes, mimeType } = req.body;
    if (!prompt) return res.status(400).json({ error: 'Prompt required' });

    // Content moderation check
    if (!isContentSafe(prompt)) {
      return res.status(200).json({
        video: '🛡️ Αυτό το βίντεο δεν μπορεί να δημιουργηθεί. Δοκίμασε κάτι πιο χαρούμενο!'
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return res.status(500).json({ error: 'AI not configured' });

    const ai = new GoogleGenAI({ apiKey });
    const parts: any[] = [{ text: `Create a short animated video for children about: ${prompt}. Keep it fun, colorful, and educational. No violence or scary elements.` }];
    if (imageBytes && mimeType) {
      parts.push({ inlineData: { data: imageBytes, mimeType } });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [{ role: 'user', parts }],
      config: {
        maxOutputTokens: 2048,
        safetySettings: SAFETY_SETTINGS,
      }
    });

    res.status(200).json({ video: response.text || '' });
  } catch (err: any) {
    console.error('AI Video error:', err.message);
    res.status(500).json({ error: 'AI service error' });
  }
}
