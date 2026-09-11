# WiseBot — School Content Plan

Plan for the SCHOOL track: aligning it with the official Greek primary curriculum and giving
it enough depth to be worth paying for. Decided 16 Αυγούστου 2026.

---

## Where the SCHOOL track stands today

`data/schoolGrade1.ts` … `schoolGrade6.ts` plus `schoolEnglish.ts`, typed by `schoolTypes.ts`
as `SchoolGrade → SchoolSubject → questions`. Every question is bilingual and carries an
`explanation`, which is a good foundation.

Measured:

| File | Questions |
|---|---|
| schoolGrade1–3, 5, 6 | 48 each |
| schoolGrade4 | 50 |
| schoolEnglish | 72 |
| **Total** | **~362** |

Subject ids currently in use across the six grades: `math` ×6, `greek` ×6, `science` ×6,
`history` ×3, `world` ×2, `geography` ×1.

## Three gaps

1. **The subject map does not follow the national curriculum.** `science` appears in all six
   grades, but Φυσικά officially begins in Ε'. Γεωγραφία exists in one grade instead of two,
   Ιστορία in three instead of four.
2. **Depth.** ~12 questions per subject per school *year*. A child exhausts that in ten
   minutes; a school year runs about 30 weeks.
3. **No units.** Questions are a flat pool, so nothing can report "finished multiplication",
   no per-unit exam, no per-unit diploma, and no useful diagnostic for the parent.

## The official curriculum (weekly hours)

| Μάθημα | Α | Β | Γ | Δ | Ε | ΣΤ |
|---|---|---|---|---|---|---|
| Γλώσσα | 10 | 10 | 8 | 8 | 7 | 7 |
| Μαθηματικά | 5 | 5 | 4 | 4 | 4 | 4 |
| Μελέτη Περιβάλλοντος | 4 | 4 | 3 | 3 | — | — |
| Ιστορία | — | — | 2 | 2 | 2 | 2 |
| Γεωγραφία | — | — | — | — | 2 | 2 |
| Φυσικά | — | — | — | — | 3 | 3 |
| Αγγλικά | 2 | 2 | 4 | 4 | 4 | 4 |

Source: ωρολόγιο πρόγραμμα Δημοτικού (edu.klimaka.gr, alfavita.gr), ΙΕΠ Προγράμματα Σπουδών.

## Subjects we build — and why

Chosen: **Γλώσσα, Μαθηματικά, Αγγλικά, Μελέτη Περιβάλλοντος → Φυσικά, Ιστορία, Γεωγραφία.**

- **Γλώσσα** — the largest block of hours at every grade.
- **Μαθηματικά** — the subject parents worry about most.
- **Αγγλικά** — 4 weekly hours from Γ', equal to Μαθηματικά, and the one subject Greek
  parents already pay for privately. Also the cheapest to extend: `schoolEnglish.ts` is
  already the largest data file and the whole app is bilingual.
- **Μελέτη Περιβάλλοντος → Φυσικά** — treat as one continuous science spine, not two
  subjects. The most naturally playable material (animals, the body, space, weather,
  experiments) and the best fit for on-demand AI imagery.
- **Ιστορία** — fits the engine that already exists. The Academy holds 98 stories shaped as
  narrative + lesson + 3 questions; Greek history and mythology are exactly that shape.
- **Γεωγραφία** — Ε' and ΣΤ' only, per the curriculum.

Deliberately excluded: **Θρησκευτικά** (opt-out right, sensitive in a paid app),
**ΤΠΕ** (the app teaches technology by being used), **Κοινωνική & Πολιτική Αγωγή** (one hour,
abstract), **Αισθητική / Φυσική Αγωγή** (not assessable by quiz).

## Subject map — grows with the grade

| Grade | Subjects |
|---|---|
| Α' – Β' | Γλώσσα, Μαθηματικά, Μελέτη Περιβάλλοντος, Αγγλικά |
| Γ' – Δ' | Γλώσσα, Μαθηματικά, Μελέτη Περιβάλλοντος, Ιστορία, Αγγλικά |
| Ε' – ΣΤ' | Γλώσσα, Μαθηματικά, Φυσικά, Ιστορία, Γεωγραφία, Αγγλικά |

Α' stays light for six-year-olds; ΣΤ' becomes rich. It also mirrors the real timetable, so a
parent recognises it immediately.

## Copyright — read before sourcing content

The textbooks on `ebooks.edu.gr` are the intellectual property of **ΙΤΥΕ «Διόφαντος»**.
WiseBot is a paid product, so copying textbook passages or exercises verbatim is a real risk.

The **structure** of the curriculum is not the same thing: that multiplication is taught in Γ'
or the circulatory system in Ε' is knowledge, not a protected work. Take the topic skeleton
from the Προγράμματα Σπουδών and write **original** questions, explanations and stories against
it. This is both the safe path and the better product.

Never paste textbook text into a data file "temporarily".

## STATUS 4 Σεπτεμβρίου 2026 — 302 units, two languages

- **All six grades complete** at 7 units per subject (212 units, 3,816 questions) since late
  August; the flat pools are gone from the UI.
- **Μαθηματικά and Γλώσσα enriched to 11 units per grade** (+48 units, +864 questions) —
  chapters of the Πρόγραμμα Σπουδών the first skeleton had skipped. Ιστορία, Μελέτη/Φυσικά,
  Γεωγραφία and Αγγλικά (EFL) are still at 7 per grade — same recipe applies.
- **English edition**: a new `ela` subject (English Language Arts, 42 units, 756 questions)
  replaces EFL Αγγλικά when the app language is English (`SUBJECT_LOCALES` in
  `curriculum.ts`). Totals per edition: Greek 260 units / 4,680 questions; English 257 / 4,626.
- **Batch recipe that worked** (3 sessions, ~1,600 questions): one agent per grade with the
  unit list + `math-multiplication.ts` as the bar, `scratchpad/check-unit.mjs` for structure,
  a separate arithmetic re-check script for maths, then `school-units.mjs registry` + `audit`
  + `vitest`. Every maths answer key was recomputed independently before merge.

## STATUS 24 Αυγούστου 2026 — what exists now

- **Unit skeleton for all six grades** in `data/units/curriculum.ts` (212 units) — from the
  ΙΕΠ Προγράμματα Σπουδών and the chapter titles of the official textbooks. Each unit has a
  one-line `topics` brief for whoever writes its questions.
- **Questions** live one file per unit in `data/units/grade<N>/<subject>-<unit>.ts` and are
  attached in `data/units/registry.ts`. A unit without questions is invisible in the app.
- **Γ' Δημοτικού: complete** (35 units × 18 = 630 questions). Δ' in progress.
- **UI**: `components/SchoolUnitMap.tsx` — a subject with units is a trail of "αποστολές"
  with 0–3 stars each, a Master badge at 2+ stars everywhere, WiseBot card at the end of
  each mission. Subjects without units keep the old flat quiz.
- **Tooling**: `node scripts/school-units.mjs audit | print <grade/subject> | registry`.
  `data/schoolData.test.ts` validates every question in CI.

### How a unit is written (the recipe that produced Γ')
1. Prompt = the unit's `topics` brief + `data/units/grade3/math-multiplication.ts` as the
   format/quality bar + the rules: 18 questions, el/en, explanation, original, child-level
   language, plausible distractors, varied `correct`, no textbook text.
2. Write the file, `npx tsc --noEmit`, then `node scripts/school-units.mjs audit`.
3. Read it with `print` — a human reads every maths answer and every Greek accent.
4. Regenerate `registry.ts` (`school-units.mjs registry`), run `npx vitest run`.

## Build order

Do **one grade in depth first** and prove it, before writing thousands of questions.

### Phase 1 — Γ' Δημοτικού, full depth

Γ' is the pivot year: Ιστορία begins, maths gets serious, and the children sit exactly in the
middle of the 6–12 target range.

- [ ] Extend `schoolTypes.ts` with a `SchoolUnit` level: `SchoolGrade → SchoolSubject → SchoolUnit → questions`.
      Keep it backwards compatible so the existing flat data keeps working while it is migrated.
- [ ] Define the units per subject for Γ' from the Πρόγραμμα Σπουδών (topic names only).
- [ ] 15–20 original questions per unit, bilingual, each with an `explanation`.
- [ ] Per-unit exam and per-unit diploma, reusing the existing SCHOOL gamification.
- [ ] Parent view: which units are done, which are weak.

### Phase 2 — validate

Ship Γ' only. Watch whether children finish units and whether parents look at the progress
view. Do not write the other five grades until this is answered.

### Phase 3 — roll out

Repeat for Α', Β', Δ', Ε', ΣΤ'. Fix the subject map at the same time: move `science` out of
Α'–Δ' into Μελέτη Περιβάλλοντος, add Ιστορία to the fourth grade that lacks it, and add
Γεωγραφία to the second of Ε'/ΣΤ'.

## Note on volume

Six grades × ~5 subjects × ~6 units × ~18 questions is roughly **3,200 questions**, against
~362 today. Generating them with Gemini is feasible, but every batch needs review: a wrong
answer key in a maths unit is worse than having no unit at all. Budget review time, not just
generation time.
