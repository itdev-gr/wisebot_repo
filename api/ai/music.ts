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


const BLOCKED_EN = /(porn|xxx|hentai|nsfw|erotic|orgasm|genital|penis|vagina|masturbat|ejaculat|bdsm|bondage|dildo|vibrator|blowjob|handjob|threesome|gangbang|rape|molest|pedophil|incest|nude|naked|stripper|prostitut|suicide|self.?harm|slit.?wrist|hang.?myself|overdose|cocaine|heroin|methamphetamine|lsd|ecstasy|crack.?pipe|fuck|shit|bitch|cunt|nigger|faggot|retard|nazi|hitler|white.?power|jihad|isis|terrorist|kill.?myself|kill.?yourself|how.?to.?die|idiot|stupid|dumb|shut.?up|hate.?you|blood|gore|gory|torture|murder|decapitat|dismember)/i;
const BLOCKED_GR = /γαμ[ωώ]|σκατ[αά]|πούτ[αά]ν|μαλάκ[αά]|αρχίδ|μουν[ιί]|καριόλ|πουστ|αυτοκτον[ίι]|ναρκωτικ|βλάκα|χαζ[εέό]|ηλίθι|θα σε ?γαμ|βρωμ[ιί]|σκουπίδι|ψόφα|πέθανε|σκάσε|σε μισ[ωώ]|άντε γαμ|γαμ[ηή]σ|μαλακ[ίι]|πουτάν|αρχιδ|γκόμεν/i;
function isContentSafe(text: string): boolean { if (!text || typeof text !== 'string') return true; return !BLOCKED_EN.test(text) && !BLOCKED_GR.test(text); }

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', req.headers?.origin || 'https://wisebot.gr');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  const user = await (await import('../_lib/auth')).getAuthUser(req);
  if (!user) return res.status(401).json({ error: 'Authentication required' });

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { prompt, lyricsPrompt, genre, mood } = req.body;
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
    return res.status(500).json({ error: 'AI service error' });
  }
}
