/**
 * Music/Lyrics Generation Endpoint — Kid-safe
 * ==============================================
 * Uses Gemini to generate song lyrics for children.
 * Returns { title, lyrics, cover } matching frontend expectations.
 */

const SAFETY_SETTINGS: any[] = [
  { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_LOW_AND_ABOVE' },
  { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_LOW_AND_ABOVE' },
  { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_LOW_AND_ABOVE' },
  { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_LOW_AND_ABOVE' },
];


import { isContentSafe } from '../_lib/safety.js';
import { GEMINI_TEXT_MODEL } from '../_lib/aiModels.js';

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  const user = await (await import('../_lib/auth.js')).getAuthUser(req, { allowGuest: true });
  if (!user) return res.status(401).json({ error: 'Authentication required' });

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // Abuse guard — limit guests by IP, authenticated users by id
  const { aiRateLimit } = await import('../_lib/rateLimit.js');
  const rl = await aiRateLimit(req, user, 'music-lyrics', { guest: 15, user: 80, windowMinutes: 60 });
  if (!rl.allowed) return res.status(429).json({ error: 'Too many requests', retryAfter: rl.retryAfter });

  try {
    const { prompt, lyricsPrompt, genre, mood, lang } = req.body;
    const language = lang === 'en' ? 'English' : 'Greek';
    const songTopic = lyricsPrompt || prompt;
    if (!songTopic) return res.status(400).json({ error: 'Prompt required' });

    // Input length validation
    if (typeof songTopic === 'string' && songTopic.length > 4000) {
      return res.status(400).json({ error: 'Input too long (max 4000 characters)' });
    }

    // Content moderation check
    if (!isContentSafe(songTopic) || !isContentSafe(genre || '') || !isContentSafe(mood || '')) {
      return res.status(200).json({
        title: '🛡️',
        lyrics: 'Αυτό το τραγούδι δεν μπορεί να δημιουργηθεί. Δοκίμασε ένα πιο χαρούμενο θέμα!',
        cover: '',
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return res.status(500).json({ error: 'AI not configured' });

    const { GoogleGenAI } = await import('@google/genai');
    const ai = new GoogleGenAI({ apiKey });
    // MusicStudio sends a complete brief (style, structure, names) in `lyricsPrompt`;
    // this wrapper only fixes the audience, the language and the output shape.
    const fullPrompt = `You write songs for children aged 6-12 in WiseBot Academy.
Write the title and lyrics in ${language} unless the brief below explicitly asks for another language.
${genre || mood ? `Genre: ${genre || 'pop'}. Mood: ${mood || 'happy'}.` : ''}
The song must be 100% kid-friendly, educational, and positive. No violence, scary themes, or adult topics.

Brief:
${songTopic}

Return EXACTLY this JSON format (no markdown, no code blocks, just raw JSON):
{
  "title": "The Song Title",
  "lyrics": "Full song lyrics here with \\n for line breaks"
}`;

    const response = await ai.models.generateContent({
      model: GEMINI_TEXT_MODEL,
      contents: [{ role: 'user', parts: [{ text: fullPrompt }] }],
      config: {
        maxOutputTokens: 2048,
        // gemini-2.5-flash spends "thinking" tokens from the same budget; a short
        // JSON answer does not need them and they were truncating lyrics.
        thinkingConfig: { thinkingBudget: 0 },
        responseMimeType: 'application/json',
        safetySettings: SAFETY_SETTINGS,
      }
    });

    const text = response.text || '';

    // Try to parse as JSON
    try {
      const cleaned = text.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();
      const parsed = JSON.parse(cleaned);
      return res.status(200).json({
        title: parsed.title || (lang === 'en' ? 'My Song' : 'Το Τραγούδι Μου'),
        lyrics: parsed.lyrics || text,
        cover: '',
      });
    } catch {
      // If JSON parsing fails, return as plain lyrics
      return res.status(200).json({
        title: lang === 'en' ? 'My Song' : 'Το Τραγούδι Μου',
        lyrics: text,
        cover: '',
      });
    }
  } catch (err: any) {
    console.error('AI Music error:', err.message);
    res.status(500).json({ error: 'AI service error' });
  }
}
