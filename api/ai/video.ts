/**
 * Video Description Endpoint — Kid-safe
 * =======================================
 * Uses Gemini 2.5 Flash with content moderation.
 */
import { GoogleGenAI } from '@google/genai';
import { withAuth } from '../_lib/middleware';
import { isContentSafe } from '../_lib/moderation';

const SAFETY_SETTINGS: any[] = [
  { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_LOW_AND_ABOVE' },
  { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_LOW_AND_ABOVE' },
  { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_LOW_AND_ABOVE' },
  { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_LOW_AND_ABOVE' },
];

export default withAuth(async (req: any, res: any, user) => {
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
});
