// Content counts shown in marketing copy, SEO meta and the portal cards.
//
// Kept in a tiny standalone file so that the landing page and SEO components
// can import them without pulling the multi-hundred-KB story/book data into
// the initial bundle. `data/contentCounts.test.ts` asserts these equal the
// real data lengths, so CI fails if content is added without updating them.
export const ACADEMY_STORY_COUNT = 113;
export const BOOK_COUNT = 34;
export const SCHOOL_MISSION_COUNT = 212;   // written units across Α'–ΣΤ' (registry UNIT_COUNTS)
export const SCHOOL_QUESTION_COUNT = 3816; // sum of those units' questions
