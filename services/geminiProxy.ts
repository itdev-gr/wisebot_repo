/**
 * GEMINI PROXY — Drop-in replacement for @google/genai's GoogleGenAI
 * ==================================================================
 * Routes all AI requests through /api/ai/generate serverless endpoint.
 * The API key is stored server-side only (never exposed to the browser).
 *
 * Usage: Replace `import { GoogleGenAI } from "@google/genai"`
 *   with `import { GoogleGenAI } from "../services/geminiProxy"`
 */

interface Part {
  text?: string;
  inlineData?: { data: string; mimeType: string };
}

interface Content {
  role?: string;
  parts: Part[];
}

interface GenerateConfig {
  systemInstruction?: string;
  maxOutputTokens?: number;
  responseMimeType?: string;
  [key: string]: any;
}

interface GenerateRequest {
  model: string;
  contents: string | Content | Content[] | { parts: Part[] };
  config?: GenerateConfig;
}

interface Candidate {
  content?: {
    parts?: Array<{
      text?: string;
      inlineData?: { data: string; mimeType: string };
    }>;
  };
}

interface GenerateResponse {
  text: string;
  candidates: Candidate[];
}

class ModelsProxy {
  async generateContent(request: GenerateRequest): Promise<GenerateResponse> {
    const { model, contents, config } = request;

    // Normalize string contents to proper format
    const normalizedContents = typeof contents === 'string'
      ? [{ role: 'user' as const, parts: [{ text: contents }] }]
      : contents;

    const resp = await fetch('/api/ai/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model, contents: normalizedContents, config }),
    });

    if (!resp.ok) {
      const body = await resp.json().catch(() => ({}));
      throw new Error(body.error || `AI Error: ${resp.status}`);
    }

    return resp.json();
  }

  // Stub for video generation — not supported through proxy
  async generateVideos(_request: any): Promise<any> {
    throw new Error('Video generation requires server-side implementation');
  }
}

export class GoogleGenAI {
  models: ModelsProxy;
  operations: any;

  constructor(_opts?: { apiKey?: string }) {
    // apiKey is ignored — the server handles it
    this.models = new ModelsProxy();
    this.operations = {
      getVideosOperation: async () => { throw new Error('Not available'); }
    };
  }
}
