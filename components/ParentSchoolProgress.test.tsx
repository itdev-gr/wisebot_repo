/**
 * The parent's School report reads the child's best runs from localStorage (same keys as
 * QuizEngine). These tests seed a few runs and check that weak missions, Master and the
 * diploma come out right — and that an untouched grade stays out of the report.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import ParentSchoolProgress, { buildSchoolReport } from './ParentSchoolProgress';
import { SCHOOL_CURRICULUM } from '../data/schoolQuizData';
import { playableUnits, unitCatId } from './SchoolUnitMap';

const best = (id: string, score: number, total = 18) =>
  localStorage.setItem(`wb_quiz_best_${id}`, JSON.stringify({ score, total, timestamp: 1 }));

const grade1 = SCHOOL_CURRICULUM.find(g => g.grade === 1)!;
const math = grade1.subjects.find(s => s.id === 'math')!;
const mathUnits = playableUnits(math);

beforeEach(() => localStorage.clear());

describe('buildSchoolReport', () => {
  it('is empty when nothing was played', () => {
    expect(buildSchoolReport('el')).toEqual([]);
  });

  it('lists only played grades and flags missions under 2 stars as weak', () => {
    best(unitCatId(1, 'math', mathUnits[0].id), 18); // 3 stars
    best(unitCatId(1, 'math', mathUnits[1].id), 14); // 2 stars → fine
    best(unitCatId(1, 'math', mathUnits[2].id), 7);  // 0 stars → weak
    best(unitCatId(1, 'math', mathUnits[3].id), 10); // 1 star → weak

    const report = buildSchoolReport('el');
    expect(report.map(r => r.grade.grade)).toEqual([1]);
    const m = report[0].subjects.find(s => s.subject.id === 'math')!;
    expect(m.played).toBe(4);
    expect(m.earned).toBe(3 + 2 + 0 + 1);
    expect(m.mastered).toBe(false);
    expect(m.weak.map(w => w.stars)).toEqual([0, 1]);
    expect(m.weak[0].name).toBe(mathUnits[2].name.el);
  });

  it('reports Master when every mission of a subject has 2+ stars, and the diploma from the exam', () => {
    mathUnits.forEach(u => best(unitCatId(1, 'math', u.id), 15));
    best('school-g1-exam', 10, 12);
    const [g1] = buildSchoolReport('en');
    const m = g1.subjects.find(s => s.subject.id === 'math')!;
    expect(m.mastered).toBe(true);
    expect(m.weak).toEqual([]);
    expect(g1.diploma).toBe(true);
  });
});

describe('<ParentSchoolProgress />', () => {
  it('renders the empty state', () => {
    render(<ParentSchoolProgress lang="el" />);
    expect(screen.getByText(/δεν έχει παίξει ακόμα/i)).toBeTruthy();
  });

  it('renders the weak missions of a played grade', () => {
    best(unitCatId(1, 'math', mathUnits[0].id), 6);
    render(<ParentSchoolProgress lang="el" />);
    expect(screen.getByText(grade1.name.el)).toBeTruthy();
    expect(screen.getByText(mathUnits[0].name.el)).toBeTruthy();
    expect(screen.getByText(/θέλουν ακόμα δουλειά/i)).toBeTruthy();
  });
});
