/**
 * Gemini model names — one place, because Google retires them.
 * =============================================================
 * On 26 Αυγούστου 2026 `gemini-2.5-flash` started returning 404 ("no longer
 * available to new users"), which silently killed /api/ai/music (song lyrics —
 * so no song was ever generated), /api/ai/quiz and /api/ai/business. Chat
 * survived only because it tries OpenAI first. The model name was hardcoded in
 * five files, so nothing flagged the drift.
 *
 * Keep every Gemini call pointing at these constants. When a model is retired,
 * this file is the only edit.
 */

/** Text generation: lyrics, quizzes, business plans, chat fallback. */
export const GEMINI_TEXT_MODEL = 'gemini-3.6-flash';

/** Image generation: Hero Factory, avatars, 3D source images, Art Battle. */
export const GEMINI_IMAGE_MODEL = 'gemini-2.5-flash-image';

/** Text-to-speech: ebook and academy narration. */
export const GEMINI_TTS_MODEL = 'gemini-2.5-flash-preview-tts';
