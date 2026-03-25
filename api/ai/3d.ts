/**
 * 3D Model Description Endpoint — Kid-safe
 * ==========================================
 * Uses Gemini 2.5 Flash with content moderation.
 */
import { isContentSafe } from './_moderation';

const SAFETY_SETTINGS: any[] = [
  { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_LOW_AND_ABOVE' },
  { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_LOW_AND_ABOVE' },
  { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_LOW_AND_ABOVE' },
  { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_LOW_AND_ABOVE' },
];

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', req.headers?.origin || 'https://wisebot.gr');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  const user = null;

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { prompt, imageBytes, mimeType } = req.body;
    if (!prompt) return res.status(400).json({ error: 'Prompt required' });

    // Input length validation
    if (typeof prompt === 'string' && prompt.length > 4000) {
      return res.status(400).json({ error: 'Input too long (max 4000 characters)' });
    }

    // Content moderation check
    if (!isContentSafe(prompt)) {
      return res.status(200).json({
        image: '🛡️ Αυτό το 3D μοντέλο δεν μπορεί να δημιουργηθεί. Δοκίμασε κάτι πιο χαρούμενο!'
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return res.status(500).json({ error: 'AI not configured' });

    const { GoogleGenAI } = await import('@google/genai');
    const ai = new GoogleGenAI({ apiKey });
    const parts: any[] = [{ text: `Create a 3D model description for children about: ${prompt}. Describe colors, shapes, and materials in detail. Keep it kid-friendly and fun.` }];
    if (imageBytes && mimeType) {
      parts.push({ inlineData: { data: imageBytes, mimeType } });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [{ role: 'user', parts }],
      config: {
        maxOutputTokens: 1024,
        safetySettings: SAFETY_SETTINGS,
      }
    });

    res.status(200).json({ image: response.text || '' });
  } catch (err: any) {
    console.error('AI 3D error:', err.message);
    res.status(500).json({ error: 'AI service error' });
  }
}
