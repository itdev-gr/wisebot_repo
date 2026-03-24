/**
 * Image Generation Endpoint — Kid-safe
 * ======================================
 * Uses Google Imagen 4 Fast with content moderation.
 * Fallback: Gemini 2.0 Flash.
 * Cost: ~$0.02/image
 */
import { GoogleGenAI } from '@google/genai';

// Content moderation for kids' app (ages 6-13)
const BLOCKED_CONTENT = /\b(porn|xxx|hentai|nsfw|erotic|orgasm|genital|penis|vagina|masturbat|ejaculat|bdsm|bondage|dildo|vibrator|blowjob|handjob|threesome|gangbang|rape|molest|pedophil|incest|nude|naked|stripper|prostitut|suicide|self.?harm|slit.?wrist|hang.?myself|overdose|cocaine|heroin|methamphetamine|lsd|ecstasy|crack.?pipe|fuck|shit|bitch|cunt|nigger|faggot|retard|nazi|hitler|white.?power|jihad|isis|terrorist|kill.?myself|kill.?yourself|how.?to.?die|blood|gore|gory|torture|murder|decapitat|dismember|γαμ[ωώ]|σκατ[αά]|πούτ[αά]ν|μαλάκ[αά]|αρχίδ|μουν[ιί]|καριόλ|πουστ|αυτοκτον[ίι]|ναρκωτικ)\b/i;

function isContentSafe(text: string): boolean {
  if (!text || typeof text !== 'string') return true;
  return !BLOCKED_CONTENT.test(text);
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { prompt, style } = req.body;
    if (!prompt) return res.status(400).json({ error: 'Prompt required' });

    // Content moderation check
    if (!isContentSafe(prompt) || !isContentSafe(style || '')) {
      return res.status(200).json({
        image: '',
        description: '🛡️ Αυτή η εικόνα δεν μπορεί να δημιουργηθεί. Δοκίμασε κάτι πιο χαρούμενο!'
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return res.status(500).json({ error: 'AI not configured' });

    const ai = new GoogleGenAI({ apiKey });

    // Build kid-safe prompt
    const safetyPrefix = 'Child-friendly, colorful, safe for kids, no violence, no scary elements.';
    const fullPrompt = style
      ? `${safetyPrefix} ${prompt}, ${style} style.`
      : `${safetyPrefix} ${prompt}.`;

    // Use Imagen 4 Fast — $0.02/image, ~2.7s latency
    const response = await ai.models.generateImages({
      model: 'imagen-4.0-fast-generate-001',
      prompt: fullPrompt,
      config: {
        numberOfImages: 1,
        aspectRatio: '1:1',
        enhancePrompt: false,
        personGeneration: 'DONT_ALLOW' as any, // Kid safety: no realistic people
      },
    });

    // Extract image from response
    if (response.generatedImages && response.generatedImages.length > 0) {
      const base64Data = response.generatedImages[0].image.imageBytes;
      return res.status(200).json({
        image: `data:image/png;base64,${base64Data}`,
      });
    }

    // Fallback: no image generated
    return res.status(200).json({ image: '', description: 'No image generated' });
  } catch (err: any) {
    console.error('AI Image error:', err.message);

    // If Imagen fails, fallback to Gemini 2.0 Flash
    try {
      const { prompt, style } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) throw new Error('No API key');

      const ai = new GoogleGenAI({ apiKey });
      const fullPrompt = style
        ? `Create a child-friendly image: ${prompt}, ${style} style. Colorful, safe, no violence.`
        : `Create a child-friendly image: ${prompt}. Colorful, safe, no violence.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash-exp',
        contents: [{ role: 'user', parts: [{ text: fullPrompt }] }],
        config: { responseModalities: ['TEXT', 'IMAGE'] },
      });

      const parts = response.candidates?.[0]?.content?.parts;
      if (parts) {
        for (const part of parts) {
          if ((part as any).inlineData?.data) {
            const imageData = (part as any).inlineData.data;
            const mimeType = (part as any).inlineData.mimeType || 'image/png';
            return res.status(200).json({
              image: `data:${mimeType};base64,${imageData}`,
            });
          }
        }
      }
      return res.status(200).json({ image: '', description: 'No image generated' });
    } catch (fallbackErr: any) {
      console.error('AI Image fallback error:', fallbackErr.message);
      res.status(500).json({ error: 'AI service error' });
    }
  }
}
