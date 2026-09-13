# Σημειώσεις υλοποίησης — τα έξι παιχνίδια

Running log for `docs/games/BRIEF-SIX-GAMES.md`: everything where the brief did not survive
contact with the repo, plus the decisions taken instead. One section per game, in the brief's
implementation order, and a shared section for things that cut across all six.

---

## ΠΟΥ ΕΜΕΙΝΑΜΕ — 13 Σεπτεμβρίου 2026

Το session «Academy games» σταμάτησε εδώ με εντολή ιδιοκτήτη (όρια χρήσης). Επόμενη εντολή:
**Παρασκευή, μετά το reset.**

| # | παιχνίδι | κατάσταση |
|---|---|---|
| 1 | `daily` | ✅ **merged** — PR #77, CI πράσινο, στο `main` |
| 2 | `draw` | ⏸️ δεν ξεκίνησε· **το περιεχόμενο είναι έτοιμο** |
| 3 | `whoami` | ⏸️ δεν ξεκίνησε· **το περιεχόμενο είναι έτοιμο και επικυρωμένο** |
| 4 | `escape` | ⏸️ δεν ξεκίνησε· **το περιεχόμενο είναι έτοιμο και ελεγμένο** |
| 5 | `rhythm` | ⏸️ δεν ξεκίνησε· **τα beat maps μετρήθηκαν από τα πραγματικά mp3** |
| 6 | `machine` | ⏸️ δεν ξεκίνησε· η ανάλυση του κωδικού έγινε (δες §6) |

### Το ακριβό κομμάτι έχει ήδη γίνει — μην το ξαναπληρώσεις

Το περιεχόμενο των τεσσάρων επόμενων παιχνιδιών παρήχθη και **επικυρώθηκε** πριν το stop, και
σώθηκε στο `docs/games/research/`. Κοστίζει πολλή χρήση να ξαναφτιαχτεί· διάβασέ το, μην το
ξαναπαράγεις:

| αρχείο | τι είναι |
|---|---|
| `research/whoami-attributes.json` | 95 άνθρωποι × 36 ιδιότητες + 5 στοιχεία ο καθένας, el+en, με ελληνικά ονόματα. **0 collisions, worst case 9 ερωτήσεις** |
| `research/escape-rooms.json` | 3 δωμάτια × 6 γρίφους, el+en. Ένας ανεξάρτητος λύτης βρήκε 22 προβλήματα (11 σοβαρά) και διορθώθηκαν |
| `research/draw-words.json` | 145 μοναδικές λέξεις el+en με κατηγορία, emoji, δυσκολία και 3 distractors· λείπουν **5** για τη ζώνη Ε'–ΣΤ' |
| `research/beatmaps.json` | 13 τραγούδια μετρημένα: BPM, offset, χρόνοι beat και ένταση ανά beat |
| `../../scripts/games-beatmap.mjs` | ο αναλυτής: ffmpeg → spectral-flux onset envelope → autocorrelation tempo → phase-locked grid. `node scripts/games-beatmap.mjs public/songs/<x>.mp3` |
| `research/whoami-check.py` | ο ελεγκτής του `whoami`: collisions, βάθος δέντρου, διαρροές ονόματος στα στοιχεία. `python3 docs/games/research/whoami-check.py` → exit 0 |

### Τι να προσέξει το επόμενο session

1. **Κλειδιά localStorage.** Κάνε `grep` στο `components/` πριν διαλέξεις κλειδί. Το
   `wb_daily_streak` ανήκε ήδη στο `DailyRewardPopup` και η σύγκρουση έδινε **διπλό XP**. Δες §1.
2. **Το `GameCenter.tsx` το πειράζουν και τα έξι.** Ένα PR τη φορά, rebase στο `main` πριν από
   κάθε επόμενο, αλλιώς συγκρούονται στο `GameKey` union και στο `GAME_KEYS`.
3. **Οι agents υπο-αναφέρουν τα αρχεία τους.** Στο `daily` ο builder είπε «5 αρχεία» ενώ ήταν
   **19**. Πάντα `git status --porcelain -uall` πριν το commit, ποτέ `git add -A`.
4. **Τα gates περνάνε και με σπασμένο παιχνίδι.** Το `lint` έχει 662 warnings baseline και 0
   errors· τα tests δεν πιάνουν το UI. Το μόνο που έπιασε τα πραγματικά bugs ήταν να **παιχτεί**
   σε preview 375×812.
5. **Ο preview pane είναι κοινός με άλλα sessions.** Κατά τον έλεγχο του `daily` κάποιο άλλο
   session καθάρισε το localStorage και άλλαξε το viewport στη μέση. Αν τα νούμερα δεν βγάζουν
   νόημα, ξανακάνε τον έλεγχο ελεγχόμενα πριν κυνηγήσεις φάντασμα.

---

## Κοινά (shared foundations)

Three modules were added for game 1 and are reused by all six. They are the reason the later
games are small:

- `utils/dailySeed.ts` — Athens day key (`Intl`, so DST-correct: the day rolls at 22:00Z in
  winter and 21:00Z in summer), a stable 32-bit seed, `mulberry32`, and pure seeded
  `shuffle`/`pick`/`int`. Every "same for every child" guarantee rests on this.
- `utils/gameShareCard.ts` — the 1080×1350 share card for **all** games, plus `shareGameCard`
  (native share sheet → download fallback). No card field exists for a child's name or birth
  date, by construction.
- `components/games/playRound.ts` — the `playRound(seed, ms)` contract the brief asks for,
  implemented by the three round components under `components/games/rounds/`.

### Ο κανόνας του περιεχομένου ισχύει και για τα round data

The brief says each game's content lives in `data/games/<key>.ts`, with nothing the content
team might change hardcoded in a component. The three rounds' question banks were first written
next to their components; they were moved to `data/games/rounds/` so the word lists, the maths
ranges and the Spot-It photo rotation sit with the rest of the content.

---

## 1. daily — Η Πρόκληση της Ημέρας

### Το brief δεν ήταν ποτέ στο `main`

`docs/games/BRIEF-SIX-GAMES.md` lived only on the `games/six` branch, so every worktree cut from
`origin/main` was missing the document it was supposed to implement. It is cherry-picked into
this first PR, so every later game branch has it.

### Σύγκρουση κλειδιού στο localStorage — ο λόγος που δεν βγήκε XP δύο φορές

`wb_daily_streak` looks like the obvious key for a daily streak, and it is **already taken** by
`components/DailyRewardPopup.tsx` — the login-reward popup mounted on every Dashboard visit.
The two records are incompatible:

| feature | shape |
|---|---|
| `DailyRewardPopup` | `{ lastClaimDate, streak, totalClaimed }` |
| Daily Challenge | `{ lastDayKey, streak, bestStreak, lastScore }` |

Sharing the key breaks it **in both directions**: each feature reads the other's record, finds
its own date field missing, concludes nothing was claimed today, and pays out a second time.
In an app whose whole economy is XP, that is a duplicate-grant bug for every child who plays
the challenge and then opens the dashboard.

The game uses `wb_daily_challenge`. **Any new game that wants a "once a day" record must grep
`components/` for its key first.**

### Βαθμολογία: γιατί δεν μετράμε σωστές απαντήσεις

Math Rush is open-ended (answer as many as you can in 30″) while Word Quest and Spot It ask a
fixed four. Summing correct answers would let one round drown the others. Each round is scored
`min(1, correct / target)` — `target` per round in `data/games/daily.ts` — and the three ratios
are averaged onto the brief's 0–10 scale. Raising a `target` makes the challenge harder without
touching code.

### Ανοιχτά, συνειδητά (follow-ups, όχι blockers)

- **Το streak δεν συγχρονίζεται στο profile.** The brief's MVP says «Streak σε localStorage (και
  στο profile αν υπάρχει λογαριασμός)». Only localStorage is implemented, so a child who plays
  on a tablet and then a phone starts again from day 1. Needs an `EconomyContext`/Supabase write.
- **Δεν μετράμε τις δύο μετρικές του brief.** «Ποσοστό που ξαναπαίζει την επόμενη μέρα» and
  «Κάρτες που μοιράστηκαν» have no instrumentation. `utils/analytics.ts` already exposes a
  consent-safe `track()`; two calls would cover both.
- **Επανείσοδος πριν το τέλος.** Nothing is written until a run finishes, and the day is fully
  deterministic, so leaving mid-run and re-entering replays the identical three rounds. A child
  can retry until they like their score. Banking an "attempt started" marker would close it, at
  the cost of punishing a child whose phone rang.
- **Λάθος απαντήσεις δεν κοστίζουν** στον γύρο των πράξεων: with four options and no cooldown,
  fast tapping earns ~25% by chance. A wrong-answer cooldown would fix it.
- **Η ζωγραφιά του Spot It δεν έχει decoys** — every marker drawn on the ORIGINAL panel is a
  real difference, so a child can tap the mirrored positions without comparing.
- **Το «ΠΑΜΕ!»** between rounds paints for about one frame and is effectively never seen.

---

## 3. draw — Ζωγράφισε & Μάντεψε

- The brief asks for 150 words. Three grade-band authors working in parallel produced 150 with
  **28 overlaps** (`αεροπλάνο`, `ουράνιο τόξο`, `τρένο` …), i.e. 120 unique; a top-up round
  brought it to **145 unique** (50 / 50 / 45 for Α'–Β', Γ'–Δ', Ε'–ΣΤ'). Recorded rather than
  padded with weak words.

---

## 5. whoami — Ποιος είμαι;

### Δεν είναι 113 άνθρωποι

The brief says «οι 113 σπουδαίοι άνθρωποι της Ακαδημίας». `data/academyCourses.ts` holds 113
**stories**, not 113 people:

- **16 are books or concepts**, not humans — most of `MONEY_MIND` (ids 101–123): «The Golden
  Goose», «Deep Work», «Needs or Wants?», «Blue Ocean Strategy», «Cashflow Quadrant» … A child
  cannot think of a book in an Akinator game, so they are out.
- **6 MONEY_MIND entries are real people** and stay: Kiyosaki (102), Buffett (105), Carnegie
  (108), Vaynerchuk (110), Girard (111), Tracy (118). Note id 108's `subject` field reads «The
  Power of Giving» but the story is a straight biography of **Andrew Carnegie** — the name only
  appears in the body.
- **2 duplicates**: Archimedes (64 and 77) and Phil Knight (67 and 112). One canonical entry each.

95 people + 16 non-people + 2 duplicates = 113. The Academy itself is untouched; only the game's
attribute file filters.

### 18 ιδιότητες δεν έφταναν — χρειάστηκαν 36

The brief asks that every person be found in ≤ 20 questions. With the first 18 attributes that
was **impossible, not merely slow**: 14 groups of people shared an identical attribute vector —
Picasso, Mozart, Shakespeare and van Gogh were literally the same row, as were Messi/Bolt/
Federer and Gates/Zuckerberg/Huang. A tree cannot split identical rows, so worst case was 106.

A second tier of 18 attributes was added, chosen against the observed collisions —
`painter`/`music`/`writer`/`film` to separate the artists, `ballSport`/`teamSport` for the
athletes, `britain`/`italy`/`asian` for the scientists and founders, `conqueror` for Alexander
vs Leonidas, `poorInLife` for van Gogh vs Picasso.

| | 18 ιδιότητες | 36 ιδιότητες |
|---|---|---|
| collision groups | 14 (~32 άνθρωποι) | **0** |
| worst case | 106 ερωτήσεις | **9 ερωτήσεις** |

Greek-script names had to be generated too: outside `GREEK_HEROES`, the data stores the Latin
string in both `el` and `en`, so even Γιάννης Αντετοκούνμπο was "Giannis Antetokounmpo" in Greek.

---

## 4. rhythm — Ρυθμός

- **Άδειες: καθαρό.** `components/MusicStudio.tsx` already ships all 12 `/songs/*.mp3` in
  production, labelled "WiseBot Academy originals". No new licence question.
- **Τα beat maps μετρήθηκαν, δεν γράφτηκαν στο χέρι.** The brief asks for maps generated
  semi-automatically from BPM. They come from the actual audio: ffmpeg decode → spectral-flux
  onset envelope → autocorrelation tempo → phase-locked beat grid, with a per-beat onset
  strength so each difficulty can pick which beats become notes.

| τραγούδι | BPM | beats | διάρκεια |
|---|---|---|---|
| wisebot-maker-mind | 130.3 | 419 | 193s |
| wisebot-hero-squad | 128.5 | 313 | 146s |
| xypna-maker | 127.8 | 452 | 212s |
| wisebot-future-mode | 119.0 | 239 | 121s |
| apo-idea-se-paixnidi | 105.0 | 292 | 167s |

Three further songs (`wisebots-song`, `wisebots-song-2`, `wisebot-ferto`) locked onto the 70 BPM
search floor, which means their true tempo is probably double. They were left out rather than
shipped with a half-speed grid.

---

## 6. machine — Η Μηχανή του Sparken

### Ο κωδικός των 8 χαρακτήρων δεν χωράει ένα επίπεδο

The brief asks that a child's own level be shared as a «κωδικό 8 χαρακτήρων». Eight characters of
a 32-symbol alphabet is 40 bits. One placed tool needs type + x + y + rotation ≈ 18 bits, so 40
bits holds **two** tools. A level a child actually builds (6–10 tools) needs ~110–180 bits, i.e.
22–36 characters.

Rejected alternatives:
- 8 characters as a *seed* for a generated level — then the child is not sharing the level they
  built, which is the whole point of the feature.
- 8 characters as a server-side lookup key — needs a backend storing user content.

**Decision**: the level stays fully self-contained in the code (nothing personal, nothing stored
server-side, works offline — all of which the brief does require) and the code is longer than 8
characters, printed in readable groups so children can copy it off a screen.

---

## Εκτός πεδίου, αλλά αξίζει

`components/games/MathRush.tsx` predates `components/games/gameRewards.ts` and still carries its
own inline copy of the daily-cap logic (`wb_mathrush_rewards`, `rewardsLeftToday`,
`consumeReward`), calling `earnXp` directly. It works, and it was left alone — but the «max 2
rewards per game per day» rule now lives in two places. Worth folding into `grantGameReward` in
a change of its own.
