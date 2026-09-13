"""Validate the `whoami` dataset before it is turned into data/games/whoami.ts.

Two things have to hold, and the first one is what makes the second possible:

  1. No two people share an attribute vector. A decision tree cannot split identical
     rows, so a single collision makes "found in <= 20 questions" unreachable rather
     than merely slow.
  2. A greedy information-gain tree finds everyone inside the brief's 20 questions.

Run from the repo root:

    python3 docs/games/research/whoami-check.py

History: the first attribute set had 18 booleans and produced 14 collision groups
(Picasso/Mozart/Shakespeare/van Gogh were one row, so were Messi/Bolt/Federer and
Gates/Zuckerberg/Huang) with a worst case of 106. The second tier of 18 attributes was
chosen against those exact collisions and brought it to 0 collisions / 9 questions.
"""
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(HERE, 'whoami-attributes.json')

TIER1 = ['alive', 'ancient', 'before1900', 'greek', 'american', 'woman', 'group', 'scientist',
         'inventor', 'tech', 'business', 'athlete', 'artist', 'usedToday', 'famousBrand',
         'olympicOrNobel', 'space', 'doctor']
TIER2 = ['music', 'painter', 'writer', 'film', 'ballSport', 'teamSport', 'britain', 'italy',
         'asian', 'techFounder', 'warrior', 'conqueror', 'veryRich', 'food', 'animals',
         'poorInLife', 'bornAfter1980', 'teacher']
KEYS = TIER1 + TIER2

QUESTION_BUDGET = 20


def main() -> int:
    people = json.load(open(DATA, encoding='utf-8'))
    print(f'people: {len(people)}  attributes: {len(KEYS)}')

    missing = [p['nameEn'] for p in people if any(k not in p for k in KEYS)]
    if missing:
        print(f'FAIL: {len(missing)} people missing attributes: {missing[:10]}')
        return 1

    groups = {}
    for p in people:
        groups.setdefault(tuple(bool(p[k]) for k in KEYS), []).append(p['nameEn'])
    collisions = [g for g in groups.values() if len(g) > 1]
    print(f'collisions: {len(collisions)}')
    for c in collisions:
        print('   ', c)

    sys.setrecursionlimit(10000)

    def depth(subset, used):
        if len(subset) <= 1:
            return 0
        best, best_score = None, 10 ** 9
        for k in KEYS:
            if k in used:
                continue
            yes = [p for p in subset if p[k]]
            no = [p for p in subset if not p[k]]
            if not yes or not no:
                continue
            score = max(len(yes), len(no))
            if score < best_score:
                best_score, best = score, k
        if best is None:
            # Indistinguishable remainder: the game falls back to direct
            # "is it X?" guesses, one per remaining candidate.
            return len(subset)
        used = used | {best}
        yes = [p for p in subset if p[best]]
        no = [p for p in subset if not p[best]]
        return 1 + max(depth(yes, used), depth(no, used))

    worst = depth(people, frozenset())
    ok = worst <= QUESTION_BUDGET
    print(f'greedy worst-case depth: {worst} questions (budget {QUESTION_BUDGET}) -> '
          f'{"PASS" if ok else "FAIL"}')

    # No clue may contain a word from the person's own name.
    leaks = []
    for p in people:
        words = {w.lower() for w in re.split(r'[^A-Za-zΑ-Ωα-ωΆ-ώΐΰ]+', p['nameEn'] + ' ' + p['nameEl'])
                 if len(w) > 3}
        for clue in list(p.get('cluesEl', [])) + list(p.get('cluesEn', [])):
            toks = {t.lower() for t in re.split(r'[^A-Za-zΑ-Ωα-ωΆ-ώΐΰ]+', clue)}
            if words & toks:
                leaks.append((p['nameEn'], clue[:70]))
                break
    print(f'clue name-leaks: {len(leaks)}')
    for name, clue in leaks[:10]:
        print('   ', name, '->', clue)

    bad_counts = [p['nameEn'] for p in people
                  if len(set(p.get('cluesEl', []))) != 5 or len(set(p.get('cluesEn', []))) != 5]
    print(f'people without 5 distinct clues in both languages: {len(bad_counts)}')
    for n in bad_counts[:10]:
        print('   ', n)

    return 0 if (ok and not collisions and not leaks and not bad_counts) else 1


if __name__ == '__main__':
    raise SystemExit(main())
