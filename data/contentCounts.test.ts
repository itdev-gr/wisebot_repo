import { describe, expect, it } from 'vitest';
import {
  ACADEMY_STORY_COUNT, BOOK_COUNT,
  SCHOOL_MISSION_COUNT, SCHOOL_QUESTION_COUNT, SCHOOL_MISSION_COUNT_EN, SCHOOL_QUESTION_COUNT_EN,
} from './contentCounts';
import { COURSES } from './academyCourses';
import { BOOK_METADATA } from './bookMetadata';
import { ACADEMY_QUIZZES } from './academyQuizData';
import { UNIT_COUNTS } from './units/registry';
import { subjectVisible } from './units/curriculum';

/** Written units (count > 0) that the given language's edition shows: key is `grade/subject/unit`. */
const writtenFor = (lang: 'el' | 'en') =>
  Object.entries(UNIT_COUNTS).filter(([key, n]) => n > 0 && subjectVisible(key.split('/')[1], lang)).map(([, n]) => n);

describe('content counts used in marketing copy', () => {
  it('ACADEMY_STORY_COUNT matches the number of Academy stories', () => {
    expect(COURSES.length).toBe(ACADEMY_STORY_COUNT);
  });

  it('BOOK_COUNT matches the number of books', () => {
    expect(BOOK_METADATA.length).toBe(BOOK_COUNT);
  });

  it('Greek-edition SCHOOL counts match the unit registry', () => {
    const written = writtenFor('el');
    expect(written.length).toBe(SCHOOL_MISSION_COUNT);
    expect(written.reduce((s, n) => s + n, 0)).toBe(SCHOOL_QUESTION_COUNT);
  });

  it('English-edition SCHOOL counts match the unit registry', () => {
    const written = writtenFor('en');
    expect(written.length).toBe(SCHOOL_MISSION_COUNT_EN);
    expect(written.reduce((s, n) => s + n, 0)).toBe(SCHOOL_QUESTION_COUNT_EN);
  });

  it('every Academy story has exactly 3 quiz questions and a unique id', () => {
    const ids = COURSES.map(c => c.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) {
      expect(ACADEMY_QUIZZES[id], `quiz for story ${id}`).toHaveLength(3);
    }
  });
});
