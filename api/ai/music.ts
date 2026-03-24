/**
 * Music/Lyrics Generation Endpoint — Kid-safe
 * ==============================================
 * Uses Gemini to generate song lyrics for children.
 * Returns { title, lyrics, cover } matching frontend expectations.
 */
import { GoogleGenAI } from '@google/genai';
import { withAuth } from '../_lib/middleware';

// Content moderation for kids' app (ages 6-13)
const BLOCKED_CONTENT = /\b(porn|xxx|hentai|nsfw|erotic|orgasm|genital|penis|vagina|masturbat|ejaculat|bdsm|bondage|dildo|vibrator|blowjob|handjob|threesome|gangbang|rape|molest|pedophil|incest|nude|naked|stripper|prostitut|suicide|self.?harm|slit.?wrist|hang.?myself|overdose|cocaine|heroin|methamphetamine|lsd|ecstasy|crack.?pipe|fuck|shit|bitch|cunt|nigger|faggot|retard|nazi|hitler|white.?power|jihad|isis|terrorist|kill.?myself|kill.?yourself|how.?to.?die|γαμ[ωώ]|σκατ[αά]|πούτ[αά]ν|μαλάκ[αά]|αρχίδ|μουν[ιί]|καριόλ|πουστ|αυτοκτον[ίι]|ναρκωτικ)\b/i;

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

export default withAuth(async (req: any, res: any, user) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { prompt, lyricsPrompt, genre, mood } = req.body;
    const songTopic = lyricsPrompt || prompt;
    if (!songTopic) return res.status(400).json({ error: 'Prompt required' });

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

    const ai = new GoogleGenAI({ apiKey });
    const fullPrompt = `Create a fun children's song about: ${songTopic}. Genre: ${genre || 'pop'}. Mood: ${mood || 'happy'}.
The song must be 100% kid-friendly, educational, and positive. No violence, scary themes, or adult topics.

Return EXACTLY this JSON format (no markdown, no code blocks, just raw JSON):
{
  "title": "The Song Title",
  "lyrics": "Full song lyrics here with \\n for line breaks"
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [{ role: 'user', parts: [{ text: fullPrompt }] }],
      config: {
        maxOutputTokens: 1024,
        safetySettings: SAFETY_SETTINGS,
      }
    });

    const text = response.text || '';

    // Try to parse as JSON
    try {
      const cleaned = text.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();
      const parsed = JSON.parse(cleaned);
      return res.status(200).json({
        title: parsed.title || 'My Song',
        lyrics: parsed.lyrics || text,
        cover: '',
      });
    } catch {
      // If JSON parsing fails, return as plain lyrics
      return res.status(200).json({
        title: 'My Song',
        lyrics: text,
        cover: '',
      });
    }
  } catch (err: any) {
    console.error('AI Music error:', err.message);
    res.status(500).json({ error: 'AI service error' });
  }
});
