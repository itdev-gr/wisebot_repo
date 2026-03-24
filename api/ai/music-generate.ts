/**
 * ElevenLabs Music Generation Endpoint
 * =====================================
 * Takes lyrics text + genre/mood as input, calls the ElevenLabs Music API,
 * and returns the generated audio as base64.
 *
 * POST /api/ai/music-generate
 *
 * Request body:
 *   {
 *     lyrics: string,           // Song lyrics or description
 *     genre?: string,           // e.g. "pop", "rock", "lo-fi hip-hop"
 *     mood?: string,            // e.g. "happy", "melancholic", "energetic"
 *     title?: string,           // Optional song title for the prompt
 *     instrumental?: boolean,   // If true, generate instrumental only
 *     durationMs?: number,      // Duration in ms (3000-300000), default 30000
 *   }
 *
 * Response:
 *   {
 *     audio: string,            // base64-encoded MP3 audio
 *     mimeType: string,         // "audio/mpeg"
 *     durationMs: number,       // requested duration
 *   }
 *
 * Environment variables required:
 *   ELEVENLABS_API_KEY - Your ElevenLabs API key (paid plan required)
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { withAuth } from '../_lib/middleware';
import { isContentSafe } from '../_lib/moderation';

// ─── Constants ────────────────────────────────────────────────────────────────

const ELEVENLABS_COMPOSE_URL = 'https://api.elevenlabs.io/v1/music/compose';
const DEFAULT_DURATION_MS = 30_000; // 30 seconds
const MIN_DURATION_MS = 3_000;
const MAX_DURATION_MS = 300_000; // 5 minutes
const DEFAULT_OUTPUT_FORMAT = 'mp3_44100_128';
const MODEL_ID = 'music_v1';

// The /v1/music/compose endpoint can take a long time (1-3 minutes for longer
// tracks). Vercel hobby plan maxDuration is 30s; Pro is 300s. We set a generous
// timeout for the fetch call itself. The vercel.json `maxDuration` must also be
// raised for this route if on a Pro plan.
const FETCH_TIMEOUT_MS = 290_000; // just under 5 minutes

// ─── Helper: build a music prompt from structured input ───────────────────────

function buildMusicPrompt(params: {
  lyrics: string;
  genre?: string;
  mood?: string;
  title?: string;
  instrumental?: boolean;
}): string {
  const parts: string[] = [];

  // Title
  if (params.title) {
    parts.push(`Song title: "${params.title}".`);
  }

  // Genre / style
  if (params.genre) {
    parts.push(`Genre/style: ${params.genre}.`);
  }

  // Mood
  if (params.mood) {
    parts.push(`Mood: ${params.mood}.`);
  }

  // Lyrics or instrumental description
  if (params.instrumental) {
    parts.push(`Instrumental track. Musical theme: ${params.lyrics}`);
  } else {
    parts.push(`Lyrics:\n${params.lyrics}`);
  }

  return parts.join('\n');
}

// ─── Handler ──────────────────────────────────────────────────────────────────

export default withAuth(async (req: any, res: any, user) => {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Validate API key
  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: 'ElevenLabs API key not configured. Set ELEVENLABS_API_KEY in your environment.',
    });
  }

  // Parse and validate request body
  const {
    lyrics,
    genre,
    mood,
    title,
    instrumental = false,
    durationMs,
  } = req.body || {};

  if (!lyrics || typeof lyrics !== 'string' || lyrics.trim().length === 0) {
    return res.status(400).json({
      error: 'The "lyrics" field is required and must be a non-empty string.',
    });
  }

  // Content moderation check
  if (!isContentSafe(lyrics) || !isContentSafe(genre || '') || !isContentSafe(mood || '') || !isContentSafe(title || '')) {
    return res.status(400).json({
      error: 'Content not appropriate for children. Please use kid-friendly themes.',
    });
  }

  // Clamp duration to allowed range
  const musicLengthMs = Math.max(
    MIN_DURATION_MS,
    Math.min(MAX_DURATION_MS, durationMs || DEFAULT_DURATION_MS)
  );

  // Build the prompt
  const prompt = buildMusicPrompt({
    lyrics: lyrics.trim(),
    genre,
    mood,
    title,
    instrumental,
  });

  try {
    // Build the request URL with output_format query parameter
    const url = new URL(ELEVENLABS_COMPOSE_URL);
    url.searchParams.set('output_format', DEFAULT_OUTPUT_FORMAT);

    // Make the request to ElevenLabs
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

    const response = await fetch(url.toString(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'xi-api-key': apiKey,
      },
      body: JSON.stringify({
        prompt,
        model_id: MODEL_ID,
        music_length_ms: musicLengthMs,
        force_instrumental: instrumental,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    // Handle error responses
    if (!response.ok) {
      let errorDetail: string;
      try {
        const errorBody = await response.json();
        // ElevenLabs returns { detail: { status, message, ... } } on errors
        if (errorBody?.detail?.status === 'bad_prompt') {
          const suggestion = errorBody.detail?.data?.prompt_suggestion;
          errorDetail = `Bad prompt (may contain copyrighted content). ${
            suggestion ? `Suggestion: ${suggestion}` : ''
          }`;
        } else {
          errorDetail =
            errorBody?.detail?.message ||
            errorBody?.detail?.status ||
            JSON.stringify(errorBody);
        }
      } catch {
        errorDetail = `ElevenLabs API returned ${response.status} ${response.statusText}`;
      }

      console.error('[music-generate] ElevenLabs error:', errorDetail);
      return res.status(response.status >= 500 ? 502 : response.status).json({
        error: errorDetail,
      });
    }

    // The response body is raw binary audio (application/octet-stream).
    // Read it into a Buffer and convert to base64.
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    if (buffer.length === 0) {
      return res.status(502).json({ error: 'ElevenLabs returned empty audio data.' });
    }

    const base64Audio = buffer.toString('base64');

    return res.status(200).json({
      audio: base64Audio,
      mimeType: 'audio/mpeg',
      durationMs: musicLengthMs,
    });
  } catch (err: any) {
    if (err.name === 'AbortError') {
      console.error('[music-generate] Request timed out');
      return res.status(504).json({
        error: 'Music generation timed out. Try a shorter duration.',
      });
    }

    console.error('[music-generate] Error:', err.message || err);
    return res.status(500).json({
      error: err.message || 'Internal server error during music generation.',
    });
  }
});
