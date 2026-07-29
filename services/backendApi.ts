/**
 * BACKEND API CLIENT
 * ==================
 * Centralized client for communicating with the WiseBot backend server.
 * When the backend is deployed, set VITE_API_URL in .env.
 *
 * AI features check isBackendAvailable() first. If false, they show
 * "coming soon" messages (API keys have been removed from frontend).
 */

// @ts-ignore - Vite env variable
const API_BASE: string = (import.meta as any).env?.VITE_API_URL || '';

/**
 * Check if backend is configured and reachable
 * API routes are on the same domain (Vercel Serverless Functions)
 * so they're always available in production
 */
export function isBackendAvailable(): boolean {
  // Same-domain API (Vercel Serverless) — always available
  if (typeof window !== 'undefined' && window.location.protocol === 'https:') return true;
  // Or explicitly configured via env var
  return !!API_BASE;
}

/**
 * Get the current Supabase auth token
 */
async function getAuthToken(): Promise<string | null> {
  try {
    const { supabase, isSupabaseConfigured } = await import('./supabaseClient');
    if (!isSupabaseConfigured()) return null;
    const { data: { session } } = await supabase.auth.getSession();
    return session?.access_token || null;
  } catch {
    return null;
  }
}

/**
 * Fetch helper with Supabase auth token
 */
async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const token = await getAuthToken();
  const res = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    ...options,
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `API Error: ${res.status}`);
  }

  return res.json();
}

/**
 * Authenticated fetch — for use in components that do raw fetch()
 * Usage: const res = await authFetch('/api/ai/chat', { method: 'POST', body: ... })
 */
export async function authFetch(url: string, options?: RequestInit): Promise<Response> {
  const token = await getAuthToken();
  return fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options?.headers,
    },
  });
}

// ─── AI ENDPOINTS ─────────────────────────────────────────

export const backendAI = {
  chat: (message: string, history: any[], systemInstruction: string) =>
    apiFetch<{ text: string }>('/api/ai/chat', {
      method: 'POST',
      body: JSON.stringify({ message, history, systemInstruction }),
    }),

  image: (prompt: string) =>
    apiFetch<{ image: string }>('/api/ai/image', {
      method: 'POST',
      body: JSON.stringify({ prompt }),
    }),

  music: (lyricsPrompt: string, artPrompt?: string) =>
    apiFetch<{ title: string; lyrics: string; cover: string }>('/api/ai/music', {
      method: 'POST',
      body: JSON.stringify({ lyricsPrompt, artPrompt }),
    }),

  business: (textPrompt: string, logoPrompt?: string) =>
    apiFetch<{ slogan: string; description: string; logo?: string }>('/api/ai/business', {
      method: 'POST',
      body: JSON.stringify({ textPrompt, logoPrompt }),
    }),

  tts: (text: string, voice?: string) =>
    apiFetch<{ audio: string; mimeType: string }>('/api/ai/tts', {
      method: 'POST',
      body: JSON.stringify({ text, voice }),
    }),

  quiz: (prompt: string) =>
    apiFetch<any>('/api/ai/quiz', {
      method: 'POST',
      body: JSON.stringify({ prompt }),
    }),

  avatar: async (imageBytes: string, mimeType: string): Promise<{ image: string }> => {
    // Uses /api/ai/avatar — xAI Grok image edit endpoint
    return apiFetch<{ image: string }>('/api/ai/avatar', {
      method: 'POST',
      body: JSON.stringify({ imageBytes, mimeType }),
    });
  },
};

// ─── STRIPE ENDPOINTS ─────────────────────────────────────

export const backendStripe = {
  getPacks: () =>
    apiFetch<Array<{ id: string; credits: number; price: string; name: string; emoji: string }>>('/api/stripe/packs'),

  checkout: (packId: string) =>
    apiFetch<{ url: string }>('/api/stripe/checkout', {
      method: 'POST',
      body: JSON.stringify({ packId }),
    }),

  verify: (sessionId: string) =>
    apiFetch<{ success: boolean; credits: number; packId: string }>(`/api/stripe/verify/${sessionId}`),
};

// ─── REFERRAL ENDPOINTS ───────────────────────────────────

export const backendReferral = {
  /** The caller's invite code + stats (code is created on first call) */
  get: () =>
    apiFetch<{ code: string; invitedCount: number; creditsEarned: number; rewardPerFriend: number }>(
      '/api/auth/referral'
    ),

  /** Pay the inviter for THIS user's signup (idempotent, safe to re-call) */
  claim: () =>
    apiFetch<{ rewarded: boolean }>('/api/auth/referral', { method: 'POST' }),
};
