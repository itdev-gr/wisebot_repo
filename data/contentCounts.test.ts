import { describe, expect, it } from 'vitest';
import { ACADEMY_STORY_COUNT, BOOK_COUNT, SCHOOL_MISSION_COUNT, SCHOOL_QUESTION_COUNT } from './contentCounts';
import { COURSES } from './academyCourses';
import { BOOK_METADATA } from './bookMetadata';
import { ACADEMY_QUIZZES } from './academyQuizData';
import { UNIT_COUNTS } from './units/registry';

describe('content counts used in marketing copy', () => {
  it('ACADEMY_STORY_COUNT matches the number of Academy stories', () => {
    expect(COURSES.length).toBe(ACADEMY_STORY_COUNT);
  });

  it('BOOK_COUNT matches the number of books', () => {
    expect(BOOK_METADATA.length).toBe(BOOK_COUNT);
  });

  it('SCHOOL counts match the unit registry', () => {
    const written = Object.values(UNIT_COUNTS).filter(n => n > 0);
    expect(written.length).toBe(SCHOOL_MISSION_COUNT);
    expect(written.reduce((s, n) => s + n, 0)).toBe(SCHOOL_QUESTION_COUNT);
  });

  it('every Academy story has exactly 3 quiz questions and a unique id', () => {
    const ids = COURSES.map(c => c.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) {
      expect(ACADEMY_QUIZZES[id], `quiz for story ${id}`).toHaveLength(3);
    }
  });
});
