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
  const rl = await aiRateLimit(req, user, 'business', { guest: 10, user: 60, windowMinutes: 60 });
  if (!rl.allowed) return res.status(429).json({ error: 'Too many requests', retryAfter: rl.retryAfter });

  // Server-side credit guard — Business generation costs 4 credits
  const BUSINESS_COST = 4;
  const { checkCredits } = await import('../_lib/auth.js');
  const creditCheck = await checkCredits(user.id, BUSINESS_COST);
  if (!creditCheck.ok) {
    return res.status(402).json({ error: 'Not enough credits', credits: creditCheck.credits ?? 0, required: BUSINESS_COST });
  }

  try {
    // Accept both textPrompt (from frontend) and prompt (legacy) for compatibility
    const { textPrompt, logoPrompt, prompt, type, lang } = req.body;
    const language = lang === 'en' ? 'English' : 'Greek';
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

Write in ${language}. Generate a JSON response with exactly these fields:
- "slogan": A catchy, short slogan (max 10 words, fun and kid-friendly)
- "description": A brief exciting description of the business (2-3 sentences, enthusiastic tone)

Reply ONLY with valid JSON, no markdown, no code blocks. Example:
{"slogan": "Fun for everyone!", "description": "An amazing company that makes the world better."}`;

    const response = await ai.models.generateContent({
      model: GEMINI_TEXT_MODEL,
      contents: [{ role: 'user', parts: [{ text: structuredPrompt }] }],
      config: {
        maxOutputTokens: 1024,
        thinkingConfig: { thinkingBudget: 0 },
        responseMimeType: 'application/json',
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
      slogan = lang === 'en' ? 'The best company!' : 'Η καλύτερη εταιρεία!';
    }

    const { deductCredits } = await import('../_lib/auth.js');
    await deductCredits(user.id, BUSINESS_COST, 'CREATE_BUSINESS');
    res.status(200).json({ slogan, description, logo: '' });
  } catch (err: any) {
    console.error('AI Business error:', err.message);
    res.status(500).json({ error: 'AI service error' });
  }
}
