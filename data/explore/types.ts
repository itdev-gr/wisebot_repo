/**
 * WiseBot Explorer — «Κυνήγι Θησαυρού» in a real city.
 * ======================================================
 * A city is a map with 8–10 spots. Each spot is a sealed envelope: the child sees a marker
 * and a riddle, walks there (GPS) or answers an observation question (from home / the
 * hotel), and the envelope opens: a short story card, a "did you know" for the parent,
 * a 3-question quiz that pays stars, XP and credits exactly like a School mission.
 *
 * Everything is static data in the repo, one file per city (data/explore/cities/<id>.ts),
 * loaded lazily so a phone only downloads the city it opens. No API, works offline once
 * the city has been opened on WiFi (map tiles are runtime-cached by the service worker).
 *
 * Content rules (same as School): original text, verified facts, child-level language in
 * Greek AND English, nothing scary, no brands. Coordinates are WGS84 decimal degrees.
 */
import type { QuizQuestion, LocalizedString } from '../../types';

export type ExploreLang = 'el' | 'en';

/** An observation task the child solves ON SITE — the answer is visible at the spot. */
export interface ObservationTask {
  /** "Count the columns of the entrance." */
  question: LocalizedString;
  options: { el: string[]; en: string[] };
  correct: number;
  /** Told after answering, whatever the result — turns the task into a lesson. */
  explanation: LocalizedString;
}

export interface ExploreSpot {
  /** Stable id, progress is stored against it: 'syntagma', 'acropolis'. */
  id: string;
  name: LocalizedString;
  /** One emoji for the marker and the list. */
  emoji: string;
  /** WGS84. Pick the point where a family actually stands (the square, not the roof). */
  lat: number;
  lng: number;
  /** Metres. Old towns need 60–80 m (GPS drifts between tall buildings); open squares 40 m. */
  radiusM: number;
  /** The riddle that leads to the spot. Never names it outright. 1–2 sentences. */
  riddle: LocalizedString;
  /** For the parent's hidden "help" button: the plain answer + how to get there. */
  parentHint: LocalizedString;
  /** Unlocks the spot without GPS — must be answerable from the riddle + general knowledge
   *  of the city, so it also works as pre-trip preparation. */
  unlockQuestion: ObservationTask;
  /** Solved standing at the spot: something you can only see there. */
  onSite: ObservationTask;
  /** The story card, 4–6 short sentences for a child of 7–12. */
  story: LocalizedString;
  /** One surprising fact written for the parent ("Did you know…"). */
  didYouKnow: LocalizedString;
  /** Exactly 3 questions, answerable from the story card. */
  quiz: QuizQuestion[];
}

export interface ExploreCity {
  /** 'athens', 'lisbon' — also the file name and the progress key. */
  id: string;
  name: LocalizedString;
  country: LocalizedString;
  /** ISO 3166-1 alpha-2, for the flag emoji and future country badges. */
  countryCode: string;
  emoji: string;
  /** Map centre and initial zoom. */
  center: { lat: number; lng: number };
  zoom: number;
  /** One-paragraph welcome from WiseBot when the city opens. */
  intro: LocalizedString;
  /** Suggested walking order (spot ids). The child may ignore it. */
  route: string[];
  spots: ExploreSpot[];
  /** How many spots make the city badge ("Εξερευνητής Αθήνας"). Default: spots.length − 2. */
  badgeAt?: number;
}

/** Lightweight card for the city picker — no spots, no coordinates, so the picker stays tiny. */
export interface ExploreCityMeta {
  id: string;
  name: LocalizedString;
  country: LocalizedString;
  countryCode: string;
  emoji: string;
  spotCount: number;
}
