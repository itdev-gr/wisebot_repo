/**
 * One text-generation call, two providers.
 * =========================================
 * OpenAI is primary and Gemini is the fallback, mirroring what /api/ai/chat
 * already did — and chat was the only text feature still alive on
 * 26 Αυγούστου 2026, when Google retired `gemini-2.5-flash` and quietly killed
 * song lyrics, quizzes and Business Lab. Everything that generates text should
 * survive one provider going away.
 *
 * Callers get plain text back and parse it themselves; `json: true` asks both
 * providers for a JSON object.
 */
import { GEMINI_TEXT_MODEL } from './aiModels.js';

export interface TextAIOptions {
  /** Ask both providers to return a single JSON object. */
  json?: boolean;
  maxTokens?: number;
  temperature?: number;
  /** Gemini safety settings — the audience is children, so always pass these. */
  safetySettings?: any[];
}

async function viaOpenAI(prompt: string, apiKey: string, opts: TextAIOptions): Promise<string> {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: opts.maxTokens ?? 2048,
      temperature: opts.temperature ?? 0.8,
      ...(opts.json ? { response_format: { type: 'json_object' } } : {}),
    }),
  });
  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`OpenAI ${response.status}: ${detail.slice(0, 200)}`);
  }
  const data = await response.json();
  return data.choices?.[0]?.message?.content || '';
}

async function viaGemini(prompt: string, apiKey: string, opts: TextAIOptions): Promise<string> {
  const { GoogleGenAI } = await import('@google/genai');
  const ai = new GoogleGenAI({ apiKey });
  const response = await ai.models.generateContent({
    model: GEMINI_TEXT_MODEL,
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    config: {
      maxOutputTokens: opts.maxTokens ?? 2048,
      // Gemini spends "thinking" tokens from the same budget; short structured
      // answers do not need them and they were truncating output.
      thinkingConfig: { thinkingBudget: 0 },
      ...(opts.json ? { responseMimeType: 'application/json' } : {}),
      ...(opts.safetySettings ? { safetySettings: opts.safetySettings } : {}),
    },
  });
  return response.text || '';
}

/**
 * Generate text. Throws only when no provider is configured or both fail.
 */
export async function generateText(prompt: string, opts: TextAIOptions = {}): Promise<string> {
  const openaiKey = process.env.OPENAI_API_KEY;
  const geminiKey = process.env.GEMINI_API_KEY;

  if (openaiKey) {
    try {
      const text = await viaOpenAI(prompt, openaiKey, opts);
      if (text) return text;
      console.warn('[textAI] OpenAI returned empty, falling back to Gemini');
    } catch (e: any) {
      console.warn('[textAI] OpenAI failed, falling back to Gemini:', e.message);
    }
  }

  if (geminiKey) return await viaGemini(prompt, geminiKey, opts);

  throw new Error('No text AI provider configured');
}
