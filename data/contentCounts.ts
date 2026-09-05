// Content counts shown in marketing copy, SEO meta and the portal cards.
//
// Kept in a tiny standalone file so that the landing page and SEO components
// can import them without pulling the multi-hundred-KB story/book data into
// the initial bundle. `data/contentCounts.test.ts` asserts these equal the
// real data lengths, so CI fails if content is added without updating them.
//
// School counts are per language: the Greek edition shows Αγγλικά (EFL, 45 units) and the
// English edition shows English Language Arts (`ela`, 42 units) instead — see
// SUBJECT_LOCALES in data/units/curriculum.ts. Every other subject is in both.
export const ACADEMY_STORY_COUNT = 113;
export const BOOK_COUNT = 34;
export const SCHOOL_MISSION_COUNT = 212;   // written units the Greek edition shows (registry UNIT_COUNTS minus `ela`)
export const SCHOOL_QUESTION_COUNT = 3816; // sum of those units' questions
export const SCHOOL_MISSION_COUNT_EN = 209;   // the English edition: minus EFL `english`, plus `ela`
export const SCHOOL_QUESTION_COUNT_EN = 3762;

/** The pair the active language should quote. */
export const schoolCounts = (lang: 'el' | 'en') =>
  lang === 'en'
    ? { missions: SCHOOL_MISSION_COUNT_EN, questions: SCHOOL_QUESTION_COUNT_EN }
    : { missions: SCHOOL_MISSION_COUNT, questions: SCHOOL_QUESTION_COUNT };
