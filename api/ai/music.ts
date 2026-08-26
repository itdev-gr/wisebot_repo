/**
 * Music/Lyrics Generation Endpoint — Kid-safe
 * ==============================================
 * Step 1 of the two-step song pipeline:
 *   this endpoint  → lyrics + Suno style tags   (OpenAI, Gemini as fallback)
 *   suno-generate  → the actual audio            (Suno)
 *
 * OpenAI writes the words because it produces markedly better song structure
 * and Greek lyrics than the alternative, and because Suno responds best to a
 * brief that names its own style tags. The endpoint therefore returns `style`
 * as well: the model reads the child's answers and decides the tags, instead
 * of the UI passing a single genre chip through.
 *
 * Body: { recipient?, recipientName?, uniqueThing?, emotionalThing?,
 *         occasion?, styleHint?, prompt?/lyricsPrompt?, genre?, mood?, lang? }
 * Response: { title, lyrics, style, cover }
 */

const SAFETY_SETTINGS: any[] = [
  { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_LOW_AND_ABOVE' },
  { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_LOW_AND_ABOVE' },
  { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_LOW_AND_ABOVE' },
  { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_LOW_AND_ABOVE' },
];

import { isContentSafe } from '../_lib/safety.js';

/**
 * The songwriting brief. Everything the child answered in the wizard reaches the
 * model as labelled facts rather than one flattened sentence, so the lyrics can
 * actually use the name, the detail and the reason.
 */
function buildBrief(input: {
  language: string;
  recipient?: string;
  recipientName?: string;
  uniqueThing?: string;
  emotionalThing?: string;
  occasion?: string;
  styleHint?: string;
  genre?: string;
  mood?: string;
  freeform?: string;
}): string {
  const facts: string[] = [];
  if (input.recipientName) facts.push(`- Their name (use it in the lyrics): ${input.recipientName}`);
  if (input.recipient) facts.push(`- Who the song is for: ${input.recipient}`);
  if (input.occasion) facts.push(`- The occasion: ${input.occasion}`);
  if (input.uniqueThing) facts.push(`- Something that makes them special: ${input.uniqueThing}`);
  if (input.emotionalThing) facts.push(`- Why the child loves them / wants to say this: ${input.emotionalThing}`);
  if (input.styleHint || input.genre) facts.push(`- Style the child picked: ${input.styleHint || input.genre}`);
  if (input.mood) facts.push(`- Mood: ${input.mood}`);
  if (input.freeform) facts.push(`- In the child's own words: ${input.freeform}`);

  return `You are a professional songwriter writing for WiseBot Academy, where children aged 6-12 make songs as gifts.

Write the title and lyrics in ${input.language}, unless the brief clearly asks for another language.

THE BRIEF
${facts.length ? facts.join('\n') : '- The child gave no details; write a warm, upbeat song about friendship.'}

HOW TO WRITE IT
- Use the real details above. A song that could be about anyone is a failure: name the person, use the specific detail, make the reason land.
- Structure it as [Verse 1] / [Chorus] / [Verse 2] / [Chorus] / [Bridge] / [Chorus], with those section tags on their own lines — Suno reads them.
- Write a chorus that a child can sing back after hearing it once. Short lines, real rhymes, no filler.
- Sound like a person wrote it, not a template. Concrete images beat abstract praise.
- Keep it 100% kid-appropriate: warm, positive, no violence, romance, or adult themes.

STYLE TAGS
Also choose the Suno style tags for this song: 3-6 comma-separated English tags covering genre, tempo, instrumentation and vocal type (for example "acoustic pop, mid-tempo, warm female vocals, ukulele, heartfelt"). Honour the style the child picked and make the rest fit the mood of the words.

Return EXACTLY this JSON and nothing else (no markdown, no code fences):
{"title": "...", "lyrics": "...", "style": "..."}`;
}

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', (await import('../_lib/cors.js')).resolveCorsOrigin(req.headers?.origin));
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  const user = await (await import('../_lib/auth.js')).getAuthUser(req, { allowGuest: true });
  if (!user) return res.status(401).json({ error: 'Authentication required' });

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // Abuse guard — limit guests by IP, authenticated users by id
  const { aiRateLimit } = await import('../_lib/rateLimit.js');
  const rl = await aiRateLimit(req, user, 'music-lyrics', { guest: 15, user: 80, windowMinutes: 60 });
  if (!rl.allowed) return res.status(429).json({ error: 'Too many requests', retryAfter: rl.retryAfter });

  try {
    const {
      prompt, lyricsPrompt, genre, mood, lang,
      recipient, recipientName, uniqueThing, emotionalThing, occasion, styleHint,
    } = req.body || {};
    const language = lang === 'en' ? 'English' : 'Greek';
    const freeform = lyricsPrompt || prompt || '';

    const structured = [recipient, recipientName, uniqueThing, emotionalThing, occasion]
      .some(v => typeof v === 'string' && v.trim());
    if (!freeform && !structured) return res.status(400).json({ error: 'Prompt required' });

    // Input length validation — every free-text field the child can type into.
    const freeTexts = [freeform, recipientName, uniqueThing, emotionalThing, occasion, styleHint]
      .filter(v => typeof v === 'string') as string[];
    if (freeTexts.some(v => v.length > 4000)) {
      return res.status(400).json({ error: 'Input too long (max 4000 characters)' });
    }

    // Content moderation — the audience is children, so every field is checked.
    const allText = [...freeTexts, genre || '', mood || '', recipient || ''];
    if (allText.some(v => !isContentSafe(v))) {
      return res.status(200).json({
        title: '🛡️',
        lyrics: lang === 'en'
          ? 'This song cannot be created. Try a happier theme!'
          : 'Αυτό το τραγούδι δεν μπορεί να δημιουργηθεί. Δοκίμασε ένα πιο χαρούμενο θέμα!',
        style: '',
        cover: '',
      });
    }

    const brief = buildBrief({
      language, recipient, recipientName, uniqueThing, emotionalThing, occasion,
      styleHint, genre, mood, freeform,
    });

    // OpenAI writes the lyrics; Gemini only stands in if OpenAI is down, so a
    // provider outage degrades the words instead of killing the whole feature.
    // Temperature is high on purpose — every song should not read like the last.
    const { generateText } = await import('../_lib/textAI.js');
    const text = await generateText(brief, {
      json: true,
      maxTokens: 2000,
      temperature: 0.9,
      safetySettings: SAFETY_SETTINGS,
    });
    if (!text) return res.status(500).json({ error: 'AI not configured' });

    const fallbackTitle = lang === 'en' ? 'My Song' : 'Το Τραγούδι Μου';
    try {
      const cleaned = text.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();
      const parsed = JSON.parse(cleaned);
      // The model picks the style tags, but never at the cost of losing the
      // child's own choice — that falls through when the model returns nothing.
      return res.status(200).json({
        title: parsed.title || fallbackTitle,
        lyrics: parsed.lyrics || text,
        style: parsed.style || styleHint || genre || '',
        cover: '',
      });
    } catch {
      // Model ignored the JSON contract — still give the child their lyrics.
      return res.status(200).json({
        title: fallbackTitle,
        lyrics: text,
        style: styleHint || genre || '',
        cover: '',
      });
    }
  } catch (err: any) {
    console.error('AI Music error:', err.message);
    res.status(500).json({ error: 'AI service error' });
  }
}
