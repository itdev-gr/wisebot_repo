/**
 * Generic AI Proxy — v5 with GPT-4o primary text + Gemini native image
 * ======================================================================
 * Routes Gemini image models (gemini-*-image) to Gemini API natively.
 * Routes other image requests to OpenAI DALL-E 3.
 * Routes text requests to OpenAI GPT-4o (Gemini fallback).
 * Content moderation applied for kid safety.
 */

import { fetchWithTimeout } from '../_lib/fetchWithTimeout';

function extractTextFromContents(contents: any): string {
  if (!contents) return '';
  const texts: string[] = [];
  const processItem = (item: any) => {
    if (typeof item === 'string') texts.push(item);
    else if (item?.parts) {
      for (const part of item.parts) { if (part?.text) texts.push(part.text); }
    } else if (item?.text) texts.push(item.text);
  };
  if (Array.isArray(contents)) contents.forEach(processItem);
  else processItem(contents);
  return texts.join(' ');
}

// Check if this is an image generation request
function isImageModel(model: string): boolean {
  return model.includes('image') || model.includes('imagen') || model === 'gemini-2.0-flash-exp';
}

// Check if this is a Gemini-native image model
function isGeminiImageModel(model: string): boolean {
  return model.startsWith('gemini') && model.includes('image');
}

// Check if content has binary image data (multimodal input like photo-to-avatar)
function hasInlineData(contents: any): boolean {
  if (!contents) return false;
  const checkParts = (item: any) => {
    if (item?.parts) {
      return item.parts.some((p: any) => p?.inlineData);
    }
    return false;
  };
  if (Array.isArray(contents)) return contents.some(checkParts);
  return checkParts(contents);
}

// ─── DALL-E 3 Image Generation ───
async function generateWithDALLE(prompt: string, openaiKey: string) {
  const response = await fetchWithTimeout('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${openaiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'dall-e-3',
      prompt: `Kid-friendly, safe for children, cartoon style: ${prompt}`,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
      quality: 'standard',
    }),
  }, 50000);

  if (!response.ok) {
    const err = await response.text();
    console.error('[DALL-E] Error:', response.status, err);
    throw new Error(`DALL-E error: ${response.status}`);
  }

  const data = await response.json();
  const b64 = data.data?.[0]?.b64_json;
  if (!b64) throw new Error('No image data from DALL-E');

  // Return in Gemini-compatible format
  return {
    text: '',
    candidates: [{
      content: {
        role: 'model',
        parts: [{
          inlineData: {
            data: b64,
            mimeType: 'image/png',
          }
        }],
      },
      finishReason: 'STOP',
      index: 0,
    }],
  };
}

// ─── OpenAI GPT Text Generation ───
async function generateWithGPT(prompt: string, openaiKey: string, config?: any) {
  const messages: any[] = [
    { role: 'user', content: prompt },
  ];

  if (config?.systemInstruction) {
    messages.unshift({ role: 'system', content: config.systemInstruction });
  }

  const body: any = {
    model: 'gpt-4o',
    messages,
    max_tokens: config?.maxOutputTokens || 2048,
    temperature: 0.7,
  };

  if (config?.responseMimeType === 'application/json') {
    body.response_format = { type: 'json_object' };
  }

  const response = await fetchWithTimeout('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${openaiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }, 25000);

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`GPT error: ${response.status} - ${err.slice(0, 200)}`);
  }

  const data = await response.json();
  const text = data.choices?.[0]?.message?.content || '';

  return {
    text,
    candidates: [{
      content: { role: 'model', parts: [{ text }] },
      finishReason: 'STOP',
      index: 0,
    }],
  };
}

// Gemini safety settings — text only (strict for kids)
const TEXT_SAFETY_SETTINGS: any[] = [
  { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_LOW_AND_ABOVE' },
  { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_LOW_AND_ABOVE' },
  { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_LOW_AND_ABOVE' },
  { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_LOW_AND_ABOVE' },
];

// Gemini safety settings — image generation (slightly relaxed, content moderation already applied)
const IMAGE_SAFETY_SETTINGS: any[] = [
  { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
  { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
  { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
  { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
];

// Helper: process Gemini response into our standard format
function processGeminiResponse(response: any) {
  let text = '';
  try { text = response.text || ''; } catch (_) {}

  const candidates = (response.candidates || []).map((c: any) => ({
    content: {
      role: c.content?.role || 'model',
      parts: (c.content?.parts || []).map((p: any) => {
        const part: any = {};
        if (p.text !== undefined) part.text = p.text;
        if (p.inlineData) {
          part.inlineData = { data: p.inlineData.data, mimeType: p.inlineData.mimeType };
        }
        return part;
      }),
    },
    finishReason: c.finishReason,
    index: c.index,
  }));

  return { text, candidates };
}


const BLOCKED_EN = /(porn|xxx|hentai|nsfw|erotic|orgasm|genital|penis|vagina|masturbat|ejaculat|bdsm|bondage|dildo|vibrator|blowjob|handjob|threesome|gangbang|rape|molest|pedophil|incest|nude|naked|stripper|prostitut|suicide|self.?harm|slit.?wrist|hang.?myself|overdose|cocaine|heroin|methamphetamine|lsd|ecstasy|crack.?pipe|fuck|shit|bitch|cunt|nigger|faggot|retard|nazi|hitler|white.?power|jihad|isis|terrorist|kill.?myself|kill.?yourself|how.?to.?die|idiot|stupid|dumb|shut.?up|hate.?you|blood|gore|gory|torture|murder|decapitat|dismember)/i;
const BLOCKED_GR = /γαμ[ωώ]|σκατ[αά]|πούτ[αά]ν|μαλάκ[αά]|αρχίδ|μουν[ιί]|καριόλ|πουστ|αυτοκτον[ίι]|ναρκωτικ|βλάκα|χαζ[εέό]|ηλίθι|θα σε ?γαμ|βρωμ[ιί]|σκουπίδι|ψόφα|πέθανε|σκάσε|σε μισ[ωώ]|άντε γαμ|γαμ[ηή]σ|μαλακ[ίι]|πουτάν|αρχιδ|γκόμεν/i;
function isContentSafe(text: string): boolean { if (!text || typeof text !== 'string') return true; return !BLOCKED_EN.test(text) && !BLOCKED_GR.test(text); }

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', req.headers?.origin || 'https://wisebot.gr');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  // Inline auth — avoids ERR_MODULE_NOT_FOUND with _lib imports on Vercel
  {
    const authHeader = req.headers?.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Authentication required' });
    }
    try {
      const token = authHeader.slice(7);
      const { createClient } = await import('@supabase/supabase-js');
      const _sb = createClient(
        process.env.SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_KEY!,
        { auth: { autoRefreshToken: false, persistSession: false } }
      );
      const { data: { user: _u }, error: _e } = await _sb.auth.getUser(token);
      if (_e || !_u) return res.status(401).json({ error: 'Authentication required' });
    } catch {
      return res.status(401).json({ error: 'Authentication required' });
    }
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { model, contents, config } = req.body;

    if (!model || !contents) {
      return res.status(400).json({ error: 'model and contents are required' });
    }

    // Content moderation
    const allText = extractTextFromContents(contents);

    // Input length validation
    if (typeof allText === 'string' && allText.length > 4000) {
      return res.status(400).json({ error: 'Input too long (max 4000 characters)' });
    }
    if (!isContentSafe(allText)) {
      return res.status(200).json({
        text: '🛡️ **Προσοχή!** Αυτό που έγραψες δεν επιτρέπεται. Η κακή χρήση μπορεί να οδηγήσει σε κλείδωμα λογαριασμού.',
        candidates: [],
      });
    }

    const openaiKey = process.env.OPENAI_API_KEY;
    const geminiKey = process.env.GEMINI_API_KEY;

    const { GoogleGenAI } = await import('@google/genai');

    // ── GEMINI IMAGE MODEL → Use Gemini API natively ──
    // This handles both text-to-image AND photo-to-avatar (multimodal)
    if (isGeminiImageModel(model) && geminiKey) {
      try {
        const ai = new GoogleGenAI({ apiKey: geminiKey });
        const response = await ai.models.generateContent({
          model,
          contents,
          config: { ...(config || {}), safetySettings: IMAGE_SAFETY_SETTINGS },
        });

        const result = processGeminiResponse(response);

        // Check if we actually got an image
        const hasImage = result.candidates.some((c: any) =>
          c.content?.parts?.some((p: any) => p.inlineData)
        );

        if (!hasImage) {
          console.warn('[generate] Gemini image model returned no image data');
          // Return what we got (might have text explaining why)
        }

        return res.status(200).json(result);
      } catch (geminiImageErr: any) {
        console.error('[generate] Gemini image generation failed:', geminiImageErr.message?.slice(0, 200));

        // If Gemini image fails AND it's not multimodal (no photo), try DALL-E as fallback
        if (!hasInlineData(contents) && openaiKey) {
          try {
            const dalleResult = await generateWithDALLE(allText, openaiKey);
            return res.status(200).json(dalleResult);
          } catch (dalleErr: any) {
            console.error('[generate] DALL-E fallback also failed:', dalleErr.message?.slice(0, 100));
          }
        }

        return res.status(500).json({ error: `Image generation failed: ${geminiImageErr.message?.slice(0, 100)}` });
      }
    }

    // ── NON-GEMINI IMAGE REQUEST → DALL-E 3 ──
    if (isImageModel(model) && !isGeminiImageModel(model) && openaiKey) {
      const result = await generateWithDALLE(allText, openaiKey);
      return res.status(200).json(result);
    }

    // ── TEXT REQUEST → GPT-4o primary, Gemini fallback ──
    if (openaiKey) {
      try {
        const result = await generateWithGPT(allText, openaiKey, config);
        return res.status(200).json(result);
      } catch (gptErr: any) {
        console.warn('[generate] GPT-4o failed, trying Gemini fallback:', gptErr.message?.slice(0, 100));
        // Fall through to Gemini
      }
    }

    // ── FALLBACK: Gemini ──
    if (geminiKey) {
      try {
        const ai = new GoogleGenAI({ apiKey: geminiKey });
        const mergedConfig = { ...(config || {}), safetySettings: TEXT_SAFETY_SETTINGS };

        const response = await ai.models.generateContent({
          model,
          contents,
          config: mergedConfig,
        });

        const result = processGeminiResponse(response);
        return res.status(200).json(result);
      } catch (geminiErr: any) {
        console.warn('[generate] Gemini fallback also failed:', geminiErr.message?.slice(0, 100));
      }
    }

    return res.status(500).json({ error: 'No AI service configured' });
  } catch (err: any) {
    console.error('[AI Proxy]', err?.message || 'Unknown error');
    return res.status(500).json({ error: err?.message || 'AI generation failed' });
  }
}
