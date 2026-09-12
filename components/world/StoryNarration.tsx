/**
 * A World story, read aloud in WiseBot's voice, with the words lighting up as they
 * are spoken.
 *
 * Same voice as everywhere else in the app — Gemini TTS «Kore», the owner's decision
 * of 30 Αυγούστου 2026 — and the same read-along mechanics as the Academy and the
 * ebook reader: a `{ v: 1, words: [[start, end], ...] }` file, one pair per word in
 * order, followed against `audio.currentTime`.
 *
 * Two deliberate choices carried over from those screens:
 *
 *  - The highlight is driven by an animation frame while playing, not by `ontimeupdate`
 *    alone. `timeupdate` fires about four times a second, which is visibly behind the
 *    voice on short words.
 *  - Tapping a word seeks to it and plays. Children use this constantly to hear a hard
 *    word again, and it is the single most used control in the ebook reader.
 *
 * When a place has no narration yet the component renders the story as plain text and
 * shows no controls at all. That is the normal state for most of the world while the
 * audio is still being generated, so it must look deliberate rather than broken.
 */

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Pause, Play, RotateCcw } from 'lucide-react';
import type { WorldLang } from '../../data/world/types';
import { hasNarration, narrationAudio, narrationTimings } from '../../data/world/narration';
import { WORLD_STYLE, ui } from './worldUi';

const T = {
  listen: {
    el: 'Άκου την ιστορία',
    en: 'Listen to the story',
    de: 'Hör die Geschichte an',
    fr: 'Écoute l’histoire',
    es: 'Escucha la historia',
    it: 'Ascolta la storia',
  },
  pause: { el: 'Παύση', en: 'Pause', de: 'Pause', fr: 'Pause', es: 'Pausa', it: 'Pausa' },
  restart: {
    el: 'Από την αρχή',
    en: 'Start again',
    de: 'Von vorn',
    fr: 'Recommencer',
    es: 'Empezar de nuevo',
    it: 'Ricomincia',
  },
  hint: {
    el: 'Πάτα μια λέξη για να την ακούσεις ξανά.',
    en: 'Tap a word to hear it again.',
    de: 'Tippe ein Wort an, um es noch mal zu hören.',
    fr: 'Touche un mot pour l’entendre encore.',
    es: 'Toca una palabra para oírla otra vez.',
    it: 'Tocca una parola per riascoltarla.',
  },
};

type Timings = [number, number][];

interface StoryNarrationProps {
  /** A place id or an exhibit id. The audio tag is this plus the language. */
  id: string;
  lang: WorldLang;
  /** The very text the voice is reading. Read-along breaks if the two disagree. */
  text: string;
  className?: string;
}

const StoryNarration: React.FC<StoryNarrationProps> = ({ id, lang, text, className }) => {
  const words = useMemo(() => text.split(/\s+/).filter(Boolean), [text]);
  const narrated = hasNarration(id, lang);

  const [timings, setTimings] = useState<Timings | null>(null);
  const [playing, setPlaying] = useState(false);
  const [active, setActive] = useState(-1);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const timingsRef = useRef<Timings | null>(null);

  // Word timings are a small file and only fetched for a place the child opened.
  useEffect(() => {
    if (!narrated) return undefined;
    let alive = true;
    setTimings(null);
    timingsRef.current = null;
    fetch(narrationTimings(id, lang))
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!alive || !data?.words) return;
        setTimings(data.words);
        timingsRef.current = data.words;
      })
      .catch(() => {
        /* no timings: the audio still plays, the words simply do not light up */
      });
    return () => {
      alive = false;
    };
  }, [id, lang, narrated]);

  /** Stop everything. Called on unmount, on a language switch, and on a new place. */
  const teardown = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    }
    setPlaying(false);
    setActive(-1);
  }, []);

  useEffect(() => teardown, [teardown]);
  useEffect(() => {
    teardown();
  }, [id, lang, teardown]);

  /** Move the highlight to whichever word the voice is on. Schedules nothing. */
  const syncActive = useCallback(() => {
    const audio = audioRef.current;
    const times = timingsRef.current;
    if (!audio || !times) return;
    const t = audio.currentTime;
    // Words are in order, so a linear scan from the start is fine at this length and
    // avoids the off-by-one a binary search invites at boundaries.
    let index = -1;
    for (let i = 0; i < times.length; i++) {
      if (t >= times[i][0] && t < times[i][1]) {
        index = i;
        break;
      }
      if (t < times[i][0]) break;
      index = i;
    }
    setActive(index);
  }, []);

  const follow = useCallback(() => {
    syncActive();
    const audio = audioRef.current;
    if (audio && !audio.paused && !audio.ended) {
      rafRef.current = requestAnimationFrame(follow);
    } else {
      rafRef.current = null;
    }
  }, [syncActive]);

  const ensureAudio = useCallback((): HTMLAudioElement => {
    if (audioRef.current) return audioRef.current;
    const audio = new Audio(narrationAudio(id, lang));
    audio.preload = 'none';
    audio.onplay = () => {
      setPlaying(true);
      if (rafRef.current === null) rafRef.current = requestAnimationFrame(follow);
    };
    // `timeupdate` is the safety net, and it is the one that matters on a phone.
    // Browsers suspend animation frames in a backgrounded tab, so a child who switches
    // away and comes back would otherwise find the voice still reading and the
    // highlight frozen on the word it stopped at. This fires about four times a second
    // regardless, which is too coarse to lead on but exactly right as a fallback —
    // the same arrangement `components/Academy.tsx` settled on.
    audio.ontimeupdate = () => {
      // Always sync, never conditionally. `requestAnimationFrame` hands back a handle
      // even in a backgrounded tab where the callback will never run, so a guard of
      // "only if no frame is pending" would disable this fallback permanently — which
      // is the state a child returning to the tab would land in.
      syncActive();
      if (rafRef.current === null && !audio.paused && !audio.ended) {
        rafRef.current = requestAnimationFrame(follow);
      }
    };
    audio.onpause = () => {
      setPlaying(false);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
    audio.onended = () => {
      setPlaying(false);
      setActive(-1);
    };
    audio.onerror = () => {
      setPlaying(false);
      setActive(-1);
    };
    audioRef.current = audio;
    return audio;
  }, [id, lang, follow, syncActive]);

  const toggle = useCallback(() => {
    const audio = ensureAudio();
    if (audio.paused) audio.play().catch(() => setPlaying(false));
    else audio.pause();
  }, [ensureAudio]);

  const restart = useCallback(() => {
    const audio = ensureAudio();
    audio.currentTime = 0;
    audio.play().catch(() => setPlaying(false));
  }, [ensureAudio]);

  const seekToWord = useCallback(
    (index: number) => {
      const times = timingsRef.current;
      if (!times || !times[index]) return;
      const audio = ensureAudio();
      audio.currentTime = Math.max(0, times[index][0] - 0.05);
      if (audio.paused) audio.play().catch(() => setPlaying(false));
    },
    [ensureAudio],
  );

  if (!narrated) {
    return <p className={`${WORLD_STYLE.body} ${className ?? ''}`}>{text}</p>;
  }

  return (
    <div className={className}>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <button
          type="button"
          onClick={toggle}
          className={`${WORLD_STYLE.cta} inline-flex items-center gap-2 min-h-[44px]`}
        >
          {playing ? <Pause size={18} aria-hidden="true" /> : <Play size={18} aria-hidden="true" />}
          {ui(playing ? T.pause : T.listen, lang)}
        </button>
        <button
          type="button"
          onClick={restart}
          aria-label={ui(T.restart, lang)}
          title={ui(T.restart, lang)}
          className={`${WORLD_STYLE.ghost} inline-flex items-center justify-center min-h-[44px] min-w-[44px]`}
        >
          <RotateCcw size={18} aria-hidden="true" />
        </button>
      </div>

      <p className={WORLD_STYLE.body}>
        {words.map((word, i) => (
          <React.Fragment key={`${word}-${i}`}>
            <button
              type="button"
              onClick={() => seekToWord(i)}
              disabled={!timings}
              className={
                i === active
                  ? 'rounded bg-blue-500/30 text-white px-0.5 -mx-0.5 transition-colors'
                  : 'rounded px-0.5 -mx-0.5 hover:bg-white/10 transition-colors disabled:hover:bg-transparent'
              }
            >
              {word}
            </button>{' '}
          </React.Fragment>
        ))}
      </p>

      {timings && <p className={`${WORLD_STYLE.label} mt-3`}>{ui(T.hint, lang)}</p>}
    </div>
  );
};

export default StoryNarration;
