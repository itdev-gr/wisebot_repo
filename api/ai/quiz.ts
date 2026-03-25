/**
 * Quiz Generation Endpoint — Kid-safe
 * =====================================
 * Uses Gemini 2.5 Flash with content moderation.
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

  const user = null;

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { topic, difficulty, lang } = req.body;
    if (!topic) return res.status(400).json({ error: 'Topic required' });

    // Input length validation
    if (typeof topic === 'string' && topic.length > 4000) {
      return res.status(400).json({ error: 'Input too long (max 4000 characters)' });
    }

    // Content moderation check
    if (!isContentSafe(topic)) {
      return res.status(200).json({
        result: '🛡️ Αυτό το θέμα δεν είναι κατάλληλο. Δοκίμασε κάτι πιο ενδιαφέρον, όπως διάστημα, ζώα ή ιστορία!'
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return res.status(500).json({ error: 'AI not configured' });

    const { GoogleGenAI } = await import('@google/genai');
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [{ role: 'user', parts: [{ text: `Create a ${difficulty || 'medium'} quiz about "${topic}" for children ages 6-13 in ${lang || 'el'} language. The quiz must be educational and kid-friendly. No violence, scary themes, or adult topics. Return as JSON array with objects containing: question, options (array of 4), correctIndex (0-3), explanation.` }] }],
      config: {
        maxOutputTokens: 2048,
        safetySettings: SAFETY_SETTINGS,
      }
    });

    res.status(200).json({ result: response.text || '' });
  } catch (err: any) {
    console.error('AI Quiz error:', err.message);
    res.status(500).json({ error: 'AI service error' });
  }
}
