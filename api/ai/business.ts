/**
 * Business Ideas Endpoint — Kid-safe
 * ====================================
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

  const user = await (await import('../_lib/auth')).getAuthUser(req, { allowGuest: true });
  if (!user) return res.status(401).json({ error: 'Authentication required' });

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // Server-side credit guard — Business generation costs 4 credits
  const BUSINESS_COST = 4;
  const { checkCredits } = await import('../_lib/auth');
  const creditCheck = await checkCredits(user.id, BUSINESS_COST);
  if (!creditCheck.ok) {
    return res.status(402).json({ error: 'Not enough credits', credits: creditCheck.credits ?? 0, required: BUSINESS_COST });
  }

  try {
    // Accept both textPrompt (from frontend) and prompt (legacy) for compatibility
    const { textPrompt, logoPrompt, prompt, type } = req.body;
    const finalPrompt = textPrompt || prompt;
    if (!finalPrompt) return res.status(400).json({ error: 'Prompt required' });

    // Input length validation
    if (typeof finalPrompt === 'string' && finalPrompt.length > 4000) {
      return res.status(400).json({ error: 'Input too long (max 4000 characters)' });
    }

    // Content moderation check
    if (!isContentSafe(finalPrompt) || (logoPrompt && !isContentSafe(logoPrompt))) {
      return res.status(200).json({
        slogan: '🛡️ Δοκίμασε μια πιο δημιουργική ιδέα!',
        description: 'Αυτό το θέμα δεν είναι κατάλληλο. Δοκίμασε κάτι άλλο!',
        logo: '',
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return res.status(500).json({ error: 'AI not configured' });

    const { GoogleGenAI } = await import('@google/genai');
    const ai = new GoogleGenAI({ apiKey });

    // Ask Gemini to return structured business data
    const structuredPrompt = `You are a fun business advisor for kids aged 6-13. Based on this business idea: "${finalPrompt}"

Generate a JSON response with exactly these fields:
- "slogan": A catchy, short slogan (max 10 words, fun and kid-friendly)
- "description": A brief exciting description of the business (2-3 sentences, enthusiastic tone)

Reply ONLY with valid JSON, no markdown, no code blocks. Example:
{"slogan": "Fun for everyone!", "description": "An amazing company that makes the world better."}`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [{ role: 'user', parts: [{ text: structuredPrompt }] }],
      config: {
        maxOutputTokens: 512,
        safetySettings: SAFETY_SETTINGS,
      }
    });

    const rawText = (response.text || '').trim();

    // Parse the JSON response from Gemini
    let slogan = '';
    let description = '';
    try {
      // Strip markdown code fences if present
      const cleaned = rawText.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();
      const parsed = JSON.parse(cleaned);
      slogan = parsed.slogan || '';
      description = parsed.description || '';
    } catch {
      // Fallback: use raw text as description
      description = rawText.slice(0, 300);
      slogan = 'The best company!';
    }

    res.status(200).json({ slogan, description, logo: '' });
  } catch (err: any) {
    console.error('AI Business error:', err.message);
    res.status(500).json({ error: 'AI service error' });
  }
}
