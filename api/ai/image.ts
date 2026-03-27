/**
 * Image Generation Endpoint — Kid-safe
 * ======================================
 * Priority: DALL-E 3 (OpenAI) → Imagen 4 (Google) → Gemini Flash Image
 * All with content moderation for children 6-13.
 */

const BLOCKED_EN = /(porn|xxx|hentai|nsfw|erotic|orgasm|genital|penis|vagina|masturbat|ejaculat|bdsm|bondage|dildo|vibrator|blowjob|handjob|threesome|gangbang|rape|molest|pedophil|incest|nude|naked|stripper|prostitut|suicide|self.?harm|slit.?wrist|hang.?myself|overdose|cocaine|heroin|methamphetamine|lsd|ecstasy|crack.?pipe|fuck|shit|bitch|cunt|nigger|faggot|retard|nazi|hitler|white.?power|jihad|isis|terrorist|kill.?myself|kill.?yourself|how.?to.?die|blood|gore|gory|torture|murder|decapitat|dismember)/i;
const BLOCKED_GR = /γαμ[ωώ]|σκατ[αά]|πούτ[αά]ν|μαλάκ[αά]|αρχίδ|μουν[ιί]|καριόλ|πουστ|αυτοκτον[ίι]|ναρκωτικ|βλάκα|χαζ[εέό]|ηλίθι|θα σε ?γαμ|βρωμ[ιί]|σκουπίδι|ψόφα|πέθανε|σκάσε|σε μισ[ωώ]|άντε γαμ|γαμ[ηή]σ|μαλακ[ίι]|πουτάν|αρχιδ|γκόμεν/i;
function isContentSafe(text: string): boolean { if (!text || typeof text !== 'string') return true; return !BLOCKED_EN.test(text) && !BLOCKED_GR.test(text); }

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', req.headers?.origin || 'https://wisebot.gr');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { prompt, style } = req.body || {};
  if (!prompt) return res.status(400).json({ error: 'Prompt required' });
  if (typeof prompt === 'string' && prompt.length > 4000) return res.status(400).json({ error: 'Input too long' });
  if (!isContentSafe(prompt) || !isContentSafe(style || '')) {
    return res.status(200).json({ image: '', description: 'This image cannot be created. Try something more fun!' });
  }

  // Pass the prompt as-is — the HeroFactory already constructs perfect prompts
  // Only add NO TEXT instruction if not already present
  const hasNoTextRule = prompt.toLowerCase().includes('no text');
  const safePrompt = hasNoTextRule
    ? prompt
    : `${prompt}. IMPORTANT: NO text, NO labels, NO writing anywhere on the image.`;

  // ─── ATTEMPT 1: DALL-E 3 (OpenAI) — Best quality ─────────────
  const openaiKey = process.env.OPENAI_API_KEY;
  if (openaiKey) {
    try {
      console.log('[Image] Trying DALL-E 3...');
      const resp = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${openaiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'dall-e-3',
          prompt: safePrompt,
          n: 1,
          size: '1024x1024',
          quality: 'standard',
          response_format: 'b64_json',
        }),
      });

      if (resp.ok) {
        const data = await resp.json();
        const b64 = data.data?.[0]?.b64_json;
        if (b64) {
          console.log('[Image] DALL-E 3 success');
          return res.status(200).json({ image: `data:image/png;base64,${b64}` });
        }
      } else {
        const err = await resp.text();
        console.warn('[Image] DALL-E 3 failed:', resp.status, err.slice(0, 200));
      }
    } catch (e: any) {
      console.warn('[Image] DALL-E 3 error:', e.message);
    }
  }

  // ─── ATTEMPT 2: Imagen 4 Fast (Google) ────────────────────────
  const geminiKey = process.env.GEMINI_API_KEY;
  if (geminiKey) {
    try {
      console.log('[Image] Trying Imagen 4...');
      const { GoogleGenAI } = await import('@google/genai');
      const ai = new GoogleGenAI({ apiKey: geminiKey });

      const response = await ai.models.generateImages({
        model: 'imagen-4.0-fast-generate-001',
        prompt: safePrompt,
        config: {
          numberOfImages: 1,
          aspectRatio: '1:1',
          personGeneration: 'DONT_ALLOW' as any,
        },
      });

      if (response.generatedImages?.[0]?.image?.imageBytes) {
        console.log('[Image] Imagen 4 success');
        return res.status(200).json({
          image: `data:image/png;base64,${response.generatedImages[0].image.imageBytes}`,
        });
      }
    } catch (e: any) {
      console.warn('[Image] Imagen 4 error:', e.message?.slice(0, 200));
    }
  }

  // ─── ATTEMPT 3: Gemini Flash Image ────────────────────────────
  if (geminiKey) {
    try {
      console.log('[Image] Trying Gemini Flash Image...');
      const { GoogleGenAI: GeminiAI } = await import('@google/genai');
      const ai = new GeminiAI({ apiKey: geminiKey });

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: safePrompt,
        config: { responseModalities: ['IMAGE'] },
      });

      const parts = response.candidates?.[0]?.content?.parts;
      if (parts) {
        for (const part of parts) {
          if ((part as any).inlineData?.data) {
            console.log('[Image] Gemini Flash Image success');
            return res.status(200).json({
              image: `data:${(part as any).inlineData.mimeType || 'image/png'};base64,${(part as any).inlineData.data}`,
            });
          }
        }
      }
    } catch (e: any) {
      console.warn('[Image] Gemini Flash error:', e.message?.slice(0, 200));
    }
  }

  // All failed
  console.error('[Image] All providers failed');
  res.status(500).json({ error: 'Image generation temporarily unavailable. Please try again.' });
}
