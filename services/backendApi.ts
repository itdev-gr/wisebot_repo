/**
 * BACKEND API CLIENT
 * ==================
 * Centralized client for communicating with the WiseBot backend server.
 * Uses Supabase JWT token for authentication (not localStorage tokens).
 *
 * SECURITY: All credit operations now go through the server.
 * The server validates credits atomically via Supabase RPC functions.
 */

import { supabase, isSupabaseConfigured } from './supabaseClient';

// @ts-ignore - Vite env variable
const API_BASE: string = (import.meta as any).env?.VITE_API_URL || '';

/**
 * Check if backend is configured and reachable.
 * Same-domain API (Vercel Serverless) is always available in production.
 */
export function isBackendAvailable(): boolean {
  if (typeof window !== 'undefined' && window.location.protocol === 'https:') return true;
  return !!API_BASE;
}

/**
 * Fetch helper with Supabase auth token.
 * Automatically attaches JWT from current Supabase session.
 */
async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
  // Get JWT from Supabase session (not localStorage)
  let token = '';
  if (isSupabaseConfigured()) {
    const { data: { session } } = await supabase.auth.getSession();
    token = session?.access_token || '';
  }

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

// ─── CREDITS ENDPOINTS (NEW — server-validated) ──────────

export const backendCredits = {
  /** Get credit balance from server (source of truth) */
  getBalance: async (): Promise<number> => {
    const { credits } = await apiFetch<{ credits: number }>('/api/credits');
    return credits;
  },

  /** Spend credits — server validates atomically */
  spend: async (amount: number, action: string): Promise<{ success: boolean; remaining: number }> => {
    return apiFetch<{ success: boolean; remaining: number }>('/api/credits/spend', {
      method: 'POST',
      body: JSON.stringify({ amount, action }),
    });
  },

  /** Earn credits — server validates the action */
  earn: async (amount: number, action: string, actionId?: string): Promise<{ success: boolean; newBalance: number }> => {
    return apiFetch<{ success: boolean; newBalance: number }>('/api/credits/earn', {
      method: 'POST',
      body: JSON.stringify({ amount, action, actionId }),
    });
  },

  /** Track an action (update stats + badge unlocks) */
  trackAction: async (action: string): Promise<{ success: boolean; newBadges: string[] }> => {
    return apiFetch<{ success: boolean; newBadges: string[] }>('/api/credits/track', {
      method: 'POST',
      body: JSON.stringify({ action }),
    });
  },

  /** Get full stats + badges from server */
  getStats: async () => {
    return apiFetch<{
      credits: number;
      xp: number;
      level: number;
      streak: { current: number; best: number };
      stats: Record<string, number>;
      badges: Record<string, boolean>;
    }>('/api/credits/stats');
  },
};

// ─── AI ENDPOINTS ─────────────────────────────────────────
// Credits are now deducted server-side before generation.
// On failure, server refunds automatically.

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

  avatar: (photoBase64: string, mimeType?: string, prompt?: string) =>
    apiFetch<{ image: string }>('/api/ai/avatar', {
      method: 'POST',
      body: JSON.stringify({ photoBase64, mimeType, prompt }),
    }),

  video: (prompt: string, imageBytes?: string, mimeType?: string) =>
    apiFetch<{ video: string }>('/api/ai/video', {
      method: 'POST',
      body: JSON.stringify({ prompt, imageBytes, mimeType }),
    }),

  music: (lyricsPrompt: string, artPrompt?: string) =>
    apiFetch<{ title: string; lyrics: string; cover: string }>('/api/ai/music', {
      method: 'POST',
      body: JSON.stringify({ lyricsPrompt, artPrompt }),
    }),

  threeD: (prompt: string, imageBytes?: string, mimeType?: string) =>
    apiFetch<{ image: string }>('/api/ai/3d', {
      method: 'POST',
      body: JSON.stringify({ prompt, imageBytes, mimeType }),
    }),

  business: (textPrompt: string, logoPrompt?: string) =>
    apiFetch<{ slogan: string; description: string; logo: string }>('/api/ai/business', {
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

// ─── AUTH ENDPOINTS ───────────────────────────────────────

export const backendAuth = {
  register: (email: string, password: string, parentEmail: string, childName: string) =>
    apiFetch<{ success: boolean; userId?: string }>('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, parentEmail, childName }),
    }),

  me: () =>
    apiFetch<{ user: any }>('/api/auth/me'),

  deleteAccount: () =>
    apiFetch<{ success: boolean }>('/api/auth/account', {
      method: 'DELETE',
    }),
};
