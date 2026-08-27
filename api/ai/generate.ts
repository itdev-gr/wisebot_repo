/**
 * Generic AI Proxy — v5 with GPT-4o primary text + Gemini native image
 * ======================================================================
 * Routes Gemini image models (gemini-*-image) to Gemini API natively.
 * Routes other image requests to OpenAI DALL-E 3.
 * Routes text requests to OpenAI GPT-4o (Gemini fallback).
 * Content moderation applied for kid safety.
 */

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
function lastUserText(contents: any): string {
  const list = Array.isArray(contents) ? contents : [contents];
  for (let i = list.length - 1; i >= 0; i--) {
    const c = list[i];
    if (typeof c === 'string') return c;
    if (c?.role && c.role !== 'user') continue;
    return (c?.parts || []).map((p: any) => (typeof p === 'string' ? p : p?.text || '')).join('\n');
  }
  return '';
}

function isImageModel(model: string): boolean {
  return model.includes('image') || model.includes('imagen');
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
  const response = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${openaiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // dall-e-3 is no longer available on the account; gpt-image-1 returns b64_json by default.
      model: 'gpt-image-1',
      prompt: `Kid-friendly, safe for children, cartoon style: ${prompt}`,
      n: 1,
      size: '1024x1024',
      quality: 'medium',
    }),
  });

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
/** Gemini `contents` → OpenAI messages, keeping who said what. */
function contentsToMessages(contents: any): any[] {
  const list = Array.isArray(contents) ? contents : [contents];
  const messages: any[] = [];
  for (const c of list) {
    if (typeof c === 'string') { messages.push({ role: 'user', content: c }); continue; }
    const text = (c?.parts || [])
      .map((p: any) => (typeof p === 'string' ? p : p?.text || ''))
      .filter(Boolean)
      .join('\n');
    if (!text) continue;
    messages.push({ role: c.role === 'model' || c.role === 'assistant' ? 'assistant' : 'user', content: text });
  }
  return messages;
}

async function generateWithGPT(contents: any, openaiKey: string, config?: any) {
  // Until 23 Αυγούστου 2026 the whole history (including the model's own replies)
  // was flattened into one user message, so GPT answered a transcript, not a child.
  const messages = contentsToMessages(contents);
  if (!messages.length) throw new Error('No text in contents');

  // The kid-safety preamble is ours; the client's systemInstruction only adds to it.
  const system = [KID_SAFETY_PREAMBLE, typeof config?.systemInstruction === 'string' ? config.systemInstruction : '']
    .filter(Boolean).join('\n\n');
  messages.unshift({ role: 'system', content: system });

  const body: any = {
    model: 'gpt-4o',
    messages,
    max_tokens: config?.maxOutputTokens || 2048,
    temperature: 0.7,
  };

  if (config?.responseMimeType === 'application/json') {
    body.response_format = { type: 'json_object' };
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${openaiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

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
  try { text = response.text || ''; } catch { /* keep empty string */ }

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


import { isContentSafe, KID_SAFETY_PREAMBLE } from '../_lib/safety.js';

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const user = await (await import('../_lib/auth.js')).getAuthUser(req, { allowGuest: true });
  if (!user) return res.status(401).json({ error: 'Authentication required' });

  // Abuse guard — raw model proxy; limit guests by IP
  const { aiRateLimit } = await import('../_lib/rateLimit.js');
  const rl = await aiRateLimit(req, user, 'generate', { guest: 15, user: 100, windowMinutes: 60 });
  if (!rl.allowed) return res.status(429).json({ error: 'Too many requests', retryAfter: rl.retryAfter });

  try {
    const { model, contents, config } = req.body;

    if (!model || !contents) {
      return res.status(400).json({ error: 'model and contents are required' });
    }

    // Content moderation
    const allText = extractTextFromContents(contents);

    // Input length validation — the whole history may be long (10 turns), so cap
    // the total generously and the newest message tightly.
    if (typeof allText === 'string' && allText.length > 16000) {
      return res.status(400).json({ error: 'Conversation too long' });
    }
    const lastText = lastUserText(contents);
    if (lastText.length > 4000) {
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
    // The request body's `model` only decides text-vs-image routing; the model we
    // actually call is pinned here so a retired name in a shipped client bundle
    // (or a crafted request) cannot reach Google.
    const { GEMINI_TEXT_MODEL, GEMINI_IMAGE_MODEL } = await import('../_lib/aiModels.js');

    // ── GEMINI IMAGE MODEL → Use Gemini API natively ──
    // This handles both text-to-image AND photo-to-avatar (multimodal)
    if (isGeminiImageModel(model) && geminiKey) {
      console.log(`[generate] Using Gemini natively for image model: ${model}`);
      try {
        const ai = new GoogleGenAI({ apiKey: geminiKey });
        const response = await ai.models.generateContent({
          model: GEMINI_IMAGE_MODEL,
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
          console.log('[generate] Falling back to DALL-E 3');
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
      console.log('[generate] Routing to DALL-E 3 for non-Gemini image model');
      const result = await generateWithDALLE(allText, openaiKey);
      return res.status(200).json(result);
    }

    // ── TEXT REQUEST → GPT-4o primary, Gemini fallback ──
    if (openaiKey) {
      try {
        console.log('[generate] Using GPT-4o for text generation');
        const result = await generateWithGPT(contents, openaiKey, config);
        return res.status(200).json(result);
      } catch (gptErr: any) {
        console.warn('[generate] GPT-4o failed, trying Gemini fallback:', gptErr.message?.slice(0, 100));
        // Fall through to Gemini
      }
    }

    // ── FALLBACK: Gemini ──
    if (geminiKey) {
      try {
        console.log('[generate] Using Gemini fallback for text generation');
        const ai = new GoogleGenAI({ apiKey: geminiKey });
        const mergedConfig = {
          ...(config || {}),
          systemInstruction: [KID_SAFETY_PREAMBLE, typeof config?.systemInstruction === 'string' ? config.systemInstruction : '']
            .filter(Boolean).join('\n\n'),
          safetySettings: TEXT_SAFETY_SETTINGS,
        };

        const response = await ai.models.generateContent({
          model: GEMINI_TEXT_MODEL,
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
