/**
 * Γ' Δημοτικού — unit skeleton
 * ============================
 * Structure only. Questions are filled in Phase 1b, after this breakdown is approved.
 *
 * Units follow the chapters of the national curriculum (Πρόγραμμα Σπουδών). The topic
 * names are curriculum structure, not textbook content — every question, explanation and
 * story written against them must be original. Never copy from ebooks.edu.gr.
 *
 * Target: 15–20 questions per unit, bilingual, each with an `explanation`.
 * See CONTENT-PLAN.md.
 */
import type { SchoolUnit } from './schoolTypes';

/** Μαθηματικά — 4 ώρες/εβδομάδα στη Γ'. */
export const GRADE3_MATH_UNITS: SchoolUnit[] = [
  { id: 'numbers-1000', emoji: '🔢', name: { el: 'Αριθμοί ως το 1.000', en: 'Numbers up to 1,000' }, questions: [] },
  { id: 'add-subtract', emoji: '➕', name: { el: 'Πρόσθεση & Αφαίρεση', en: 'Addition & Subtraction' }, questions: [] },
  { id: 'multiplication', emoji: '✖️', name: { el: 'Πολλαπλασιασμός & Προπαίδεια', en: 'Multiplication & Times Tables' }, questions: [] },
  { id: 'division', emoji: '➗', name: { el: 'Διαίρεση', en: 'Division' }, questions: [] },
  { id: 'fractions', emoji: '🍕', name: { el: 'Κλάσματα', en: 'Fractions' }, questions: [] },
  { id: 'measure-geometry', emoji: '📐', name: { el: 'Μετρήσεις & Γεωμετρία', en: 'Measurement & Geometry' }, questions: [] },
];

/** Γλώσσα — 8 ώρες/εβδομάδα στη Γ', το μεγαλύτερο μάθημα. */
export const GRADE3_GREEK_UNITS: SchoolUnit[] = [
  { id: 'spelling-accent', emoji: '✍️', name: { el: 'Ορθογραφία & Τονισμός', en: 'Spelling & Accents' }, questions: [] },
  { id: 'nouns-articles', emoji: '📗', name: { el: 'Ουσιαστικά & Άρθρα', en: 'Nouns & Articles' }, questions: [] },
  { id: 'adjectives', emoji: '🎨', name: { el: 'Επίθετα', en: 'Adjectives' }, questions: [] },
  { id: 'verbs-tenses', emoji: '🏃', name: { el: 'Ρήματα & Χρόνοι', en: 'Verbs & Tenses' }, questions: [] },
  { id: 'punctuation', emoji: '❓', name: { el: 'Σημεία Στίξης', en: 'Punctuation' }, questions: [] },
  { id: 'reading-writing', emoji: '📖', name: { el: 'Κατανόηση & Παραγωγή Κειμένου', en: 'Reading & Writing' }, questions: [] },
];

/** Μελέτη Περιβάλλοντος — 3 ώρες/εβδομάδα στη Γ'. Φυσικά ξεκινούν στην Ε'. */
export const GRADE3_SCIENCE_UNITS: SchoolUnit[] = [
  { id: 'my-place', emoji: '🗺️', name: { el: 'Ο Τόπος μου & ο Χάρτης', en: 'My Region & Maps' }, questions: [] },
  { id: 'plants', emoji: '🌱', name: { el: 'Τα Φυτά', en: 'Plants' }, questions: [] },
  { id: 'animals', emoji: '🦋', name: { el: 'Τα Ζώα', en: 'Animals' }, questions: [] },
  { id: 'body-health', emoji: '🫀', name: { el: 'Το Σώμα μου & η Υγεία', en: 'My Body & Health' }, questions: [] },
  { id: 'water-air-weather', emoji: '🌦️', name: { el: 'Νερό, Αέρας & Καιρός', en: 'Water, Air & Weather' }, questions: [] },
  { id: 'jobs-society', emoji: '👷', name: { el: 'Επαγγέλματα & Κοινωνία', en: 'Jobs & Community' }, questions: [] },
];

/**
 * Ιστορία — 2 ώρες/εβδομάδα, ξεκινά στη Γ'.
 * The Γ' course is "Από τη μυθολογία στην ιστορία": mythology first, then prehistory.
 * These six units mirror its ενότητες — and are the best possible fit for the Academy's
 * existing story engine.
 */
export const GRADE3_HISTORY_UNITS: SchoolUnit[] = [
  { id: 'cosmogony', emoji: '⚡', name: { el: 'Κοσμογονία & οι Θεοί του Ολύμπου', en: 'Creation & the Gods of Olympus' }, questions: [] },
  { id: 'heroes', emoji: '🦁', name: { el: 'Οι Ήρωες — Ηρακλής, Θησέας, Περσέας', en: 'The Heroes — Heracles, Theseus, Perseus' }, questions: [] },
  { id: 'troy-odyssey', emoji: '🐴', name: { el: 'Ο Τρωικός Πόλεμος & η Οδύσσεια', en: 'The Trojan War & the Odyssey' }, questions: [] },
  { id: 'paleolithic', emoji: '🔥', name: { el: 'Παλαιολιθική Εποχή', en: 'The Palaeolithic Age' }, questions: [] },
  { id: 'neolithic', emoji: '🌾', name: { el: 'Νεολιθική Εποχή — Σέσκλο & Διμήνι', en: 'The Neolithic Age — Sesklo & Dimini' }, questions: [] },
  { id: 'bronze-age', emoji: '🏺', name: { el: 'Η Εποχή του Χαλκού — Κυκλαδικός Πολιτισμός', en: 'The Bronze Age — Cycladic Civilisation' }, questions: [] },
];

/** Αγγλικά — 4 ώρες/εβδομάδα από τη Γ', ίδιες με τα Μαθηματικά. Επίπεδο Α1. */
export const GRADE3_ENGLISH_UNITS: SchoolUnit[] = [
  { id: 'alphabet-greetings', emoji: '👋', name: { el: 'Αλφάβητο & Χαιρετισμοί', en: 'Alphabet & Greetings' }, questions: [] },
  { id: 'numbers-colours', emoji: '🌈', name: { el: 'Αριθμοί & Χρώματα', en: 'Numbers & Colours' }, questions: [] },
  { id: 'family', emoji: '👨‍👩‍👧', name: { el: 'Η Οικογένειά μου', en: 'My Family' }, questions: [] },
  { id: 'school', emoji: '🎒', name: { el: 'Στο Σχολείο', en: 'At School' }, questions: [] },
  { id: 'animals-en', emoji: '🐶', name: { el: 'Ζώα', en: 'Animals' }, questions: [] },
  { id: 'food', emoji: '🍎', name: { el: 'Φαγητό & Ποτά', en: 'Food & Drinks' }, questions: [] },
];
