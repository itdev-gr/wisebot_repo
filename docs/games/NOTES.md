# Σημειώσεις υλοποίησης — τα έξι παιχνίδια

Running log for `docs/games/BRIEF-SIX-GAMES.md`: everything where the brief did not survive
contact with the repo, plus the decisions taken instead. One section per game, in the brief's
implementation order, and a shared section for things that cut across all six.

---

## 6/6 MERGED — 19 Σεπτεμβρίου 2026

Και τα έξι παιχνίδια του brief είναι στο `main` και live στο wisebot.gr. Κάθε ένα πέρασε τα τέσσερα
gates, review από το Fable, και **παίχτηκε στο κινητό (375×812) πριν το PR** — αυτό, όχι τα gates,
έπιασε κάθε πραγματικό bug (δες «Τι να προσέξει το επόμενο session»).

| # | παιχνίδι | PR | τι επαληθεύτηκε παίζοντας |
|---|---|---|---|
| 1 | `daily` | #77 | 3 γύροι, σκορ 0–10, streak, XP μία φορά τη μέρα, κάρτα PNG |
| 2 | `draw` | #93 | 6 γύροι pass-the-phone, καμβάς με σωστό DPR, πόντοι σε ζωγράφο και μάντη |
| 3 | `whoami` | #105 | Πικάσο σε 9 ερωτήσεις, ανάποδο mode 24/25, 95/95 στα tests |
| 4 | `escape` | #116 | όλο το Δωμάτιο 1, βοήθεια μετά 60″, Δ2 → 28/9, Δ3 → 5/10 |
| 5 | `rhythm` | #128 | ΤΕΛΕΙΟ 100 πόντοι, χωρίς XP κάτω από 40 %, calibration «ΤΕΣΤ» |
| 6 | `machine` | #144 | Επίπεδο 1 με σύρσιμο, XP μία φορά, κωδικός βγαίνει/ξαναφορτώνει/απορρίπτει χαλασμένο |

### Εκκρεμότητες (καμία δεν είναι blocker — όλες ζουν και στην ενότητα του παιχνιδιού τους)

| τι | πού | γιατί έμεινε |
|---|---|---|
| **Streak sync στο profile** (`daily`) | §1 | το MVP του brief το ζητάει «αν υπάρχει λογαριασμός»· θέλει `EconomyContext`/Supabase write |
| **Wrong-answer cooldown** στον γύρο Math Rush (`daily`) | §1 | 4 επιλογές χωρίς cooldown = ~25 % με τυφλό πάτημα |
| **Decoys στο Spot It** (`daily`) | §1 | κάθε σημάδι στο ΠΡΩΤΟΤΥΠΟ είναι πραγματική διαφορά· τα mirrored σημεία λύνουν χωρίς σύγκριση |
| **Οι δύο μετρικές του brief** (επιστροφή επόμενη μέρα, κάρτες που μοιράστηκαν) | §1 | δύο κλήσεις στο `utils/analytics.ts` `track()` |
| **Deep link σε ιστορία της Ακαδημίας** (`whoami`) | §5 | η εφαρμογή έχει μόνο `/academy`· μικρή αλλαγή στο `Academy.tsx` |
| **Ακρόαση των charts** (`rhythm`) | §4 | ο μόνος έλεγχος που δεν γίνεται σε preview — **εκκρεμότητα ιδιοκτήτη, Σάββατο 19/9** |
| **Ντόμινο που σπρώχνει μπάλα** (`machine`) | §6 | υπάρχει στη φυσική, κανένα επίπεδο δεν το χρησιμοποιεί |

Εκτός brief αλλά αξίζει: το `MathRush.tsx` έχει δική του αντιγραφή του daily-cap αντί για `grantGameReward`
(δες την τελευταία ενότητα).

---

## ΠΟΥ ΕΜΕΙΝΑΜΕ — 13 Σεπτεμβρίου 2026 (ιστορικό)

Το session «Academy games» σταμάτησε εδώ με εντολή ιδιοκτήτη (όρια χρήσης) και συνέχισε την Παρασκευή
18/9 με το πρώτο μήνυμα του session D από το [`docs/PLAN-FRIDAY-2026-09-18.md`](../PLAN-FRIDAY-2026-09-18.md) §4.

| # | παιχνίδι | κατάσταση |
|---|---|---|
| 1 | `daily` | ✅ **merged** — PR #77, CI πράσινο, στο `main` |
| 2 | `draw` | ✅ **merged** — 150 λέξεις, καμβάς, pass-the-phone· παίχτηκε και τους 6 γύρους σε 375×812 |
| 3 | `whoami` | ✅ **merged** — 95 άνθρωποι, 36 ιδιότητες, και τα δύο modes· παίχτηκε σε 375×812 |
| 4 | `escape` | ✅ **merged** — 3 δωμάτια, ένα τη Δευτέρα από 21/9· παίχτηκε όλο το Δωμάτιο 1 σε 375×812 |
| 5 | `rhythm` | ✅ **merged** — 5 τραγούδια × 3 δυσκολίες, ρολόι Web Audio, calibration· παίχτηκε σε 375×812 |
| 6 | `machine` | ✅ **merged** — δική μας ντετερμινιστική φυσική, 6 εργαλεία, 15 επίπεδα, κωδικός με checksum· παίχτηκε σε 375×812 |

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
  brought it to 145, and the final five were written when the game was built. **150 unique**,
  50 per band, and `data/games/draw.test.ts` now asserts that so a content edit cannot quietly
  break it.
- **«Ανά τάξη Α–ΣΤ» shipped as three two-year bands**, not six. Α'–Β', Γ'–Δ', Ε'–ΣΤ' — 50 words
  each. Six separate grades would mean 25 words per grade, which a family exhausts in two
  sessions, and the drawable vocabulary of Γ' and Δ' is not meaningfully different. The band is
  a content lever: splitting one into two later is a data change, not a code change.

### Ο διπλός πόντος που δίνει το `AnimatePresence` — αφορά και τα επόμενα παιχνίδια

`AnimatePresence mode="wait"` keeps the **outgoing** screen mounted and clickable for its exit
tween (~300 ms), rendered from the elements captured *before* the phase changed. So a second tap
inside that window re-runs the handler **with the pre-change state still in its closure**.

This makes the obvious guard useless:

```ts
if (picked !== null) return;   // `picked` is exactly what is stale
```

Children double-tap constantly, and the cost was real: points awarded twice (a guesser on 4
instead of 2), `guessed` climbing past `totalTurns` so the share card read «Βρήκαμε 7 από 6
ζωγραφιές!», and the tier that pays XP rounding up to **30 XP for a session that earned 10**.
A separate variant left an orphan `setTimeout` armed when «ΤΕΛΕΙΩΣΑ» was tapped during the
«ΤΕΛΟΣ ΧΡΟΝΟΥ!» beat, which dragged the table back to the reveal mid-guess and reshuffled the
four options under the children reading them.

**The fix is refs, not state.** Refs mutate synchronously, so they hold inside the exit window:
`pickedRef`, `awardedRef` and `advancingRef` in `DrawGuess.tsx`, each cleared at the start of a
turn — `advancingRef` released by an effect on `session.turn` rather than in `resetRound()`,
because clearing it in the same call would undo it. `drawLogic.test.ts` pins the cost of losing
the latch (double points, inflated tier) so the regression is visible rather than silent.

**Any game in this set that animates between phases has this hazard.** Latch every handler that
awards points, advances a turn or grants XP on a ref.

### Μικρά, καταγεγραμμένα

- `DRAW_STORAGE_KEY = 'wb_draw_scores'` reserves a namespace and **nothing writes it**: a
  pass-and-play scoreboard belongs to the people in the room for one game, and a reload should
  start fresh. The comment says so, so the next reader does not assume persistence exists.
- If `grantGameReward` throws (storage full), the end screen falls back to the «πήρατε ήδη XP
  σήμερα» note, which is not quite what happened. Harmless, rare, not worth a branch.

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

### Τι αποδεικνύουν τα tests (και τα 95, όχι δείγμα)

- **Τίμιες απαντήσεις:** το WiseBot βρίσκει και τους 95 με την πρώτη μαντεψιά· χειρότερη περίπτωση
  12 ερωτήσεις, μέσος όρος 8,4 (όριο 20). Το πραγματικό παιχνίδι ρωτάει την ερώτηση με το μεγαλύτερο
  information gain πάνω στους υποψήφιους που μένουν, οπότε βγαίνει λίγο πάνω από το greedy 9 του
  `whoami-check.py`.
- **Ένα λάθος:** για κάθε άνθρωπο αναποδογυρίστηκε κάθε μία από τις 20 θέσεις απάντησης — 1.900
  παρτίδες. Και οι 1.900 καταλήγουν σωστά, μέσα σε 2 μαντεψιές και 20 ερωτήσεις.

### «Για να σιγουρευτώ…» — γιατί το bot ξαναρωτάει μία φορά

Η ανοχή «μετράω αντιφάσεις ανά άνθρωπο» μόνη της άφηνε **13 από τις 1.900** παρτίδες να αποτυγχάνουν:
ένα λάθος άφηνε τρεις ανθρώπους που διέφεραν μόνο σε ερωτήσεις που είχαν ήδη γίνει, και δύο
μαντεψιές δεν καλύπτουν τρεις. Όταν καμία νέα ερώτηση δεν βοηθάει, το WiseBot ξαναρωτάει μία
παλιά («Για να σιγουρευτώ…»), το πολύ μία φορά η καθεμία, μετράει στις 20. Αν το παιδί απαντήσει
αλλιώς τη δεύτερη φορά, πετιούνται και οι δύο απαντήσεις (σαν «δεν ξέρω»). Αποτυχίες: 0.

### Παίχτηκε σε 375×812

Σκέφτηκα τον **Πικάσο** — έναν από τους τέσσερις που με τις πρώτες 18 ιδιότητες ήταν η ίδια γραμμή
με Μότσαρτ, Σαίξπηρ και Βαν Γκογκ. Βρέθηκε σε 9 ερωτήσεις· μία από αυτές ήταν το `poorInLife`, η
ιδιότητα που προστέθηκε ακριβώς για να τον ξεχωρίζει από τον Βαν Γκογκ. Στο ανάποδο mode βρέθηκαν
5/5 ήρωες, και ένα επιπλέον στοιχείο έριξε τον πρώτο από 5 σε 4 πόντους. XP μία φορά ανά γύρο
(0 → 10 → 40), 0 overflow σε κάθε οθόνη, el και en πλήρη.

### Ανοιχτά

- **Δεν υπάρχει σύνδεσμος σε συγκεκριμένη ιστορία.** Η εφαρμογή έχει μόνο `/academy` και η σελίδα της
  Ακαδημίας δεν ανοίγει ιστορία από URL. Το κουμπί πάει στο `/academy`. Ένα πραγματικό deep link θέλει
  μικρή αλλαγή στο `components/Academy.tsx` — εκτός αυτού του PR.
- **`veryRich` για Musk και Zuckerberg είναι `false`** στα δεδομένα (η ιδιότητα σημαίνει «διάσημος
  *κυρίως* για τα λεφτά του»). Η ερώτηση είναι γραμμένη έτσι· αν ένα παιδί πει «ναι», το απορροφά η
  ανοχή του ενός λάθους.
- **XP στο πρώτο mode:** ένας τελειωμένος γύρος δίνει πάντα το χαμηλότερο επίπεδο, είτε κερδίσει το
  WiseBot είτε όχι — αλλιώς το παιδί θα κέρδιζε XP απαντώντας λάθος.

---

## 2. escape — Δωμάτιο Απόδρασης

- **Ένα δωμάτιο την εβδομάδα, χωρίς κώδικα.** Το Δωμάτιο N ανοίγει την εβδομάδα N από
  `ESCAPE_START_DAY = '2026-09-21'` (Δευτέρα, ημέρα Αθήνας)· το 1 είναι πάντα ανοιχτό, τα παλιά μένουν
  ανοιχτά. Νέο δωμάτιο = μία εγγραφή στο `data/games/escape.ts`. Δωμάτιο 2 → 28/9, Δωμάτιο 3 → 5/10.
- **Ο γρίφος παρατήρησης δεν εξαρτάται από τη φωτογραφία.** Οι περιγραφές overlay του
  `escape-rooms.json` έγιναν δομημένα δεδομένα (σχήμα, πλήθος, θέσεις σε %), και το component ζωγραφίζει
  αδιαφανή ταμπέλα με ακριβώς αυτά τα σχήματα. Test μετράει τα σχήματα απέναντι στη σωστή απάντηση
  (7 αστέρια, 7 εξάγωνα, 9 αστέρια) και ότι κανένα δεν ακουμπάει άλλο ή βγαίνει από το κάδρο.
- **Ο κρυπτογραφικός γρίφος έχει άλλο χάρτη ανά γλώσσα** (ΦΩΣ = 3 γράμματα, LIGHT = 5). Κάθε γλώσσα
  δείχνει τη δική της εκφώνηση/επιλογές/απάντηση.
- **Αριθμοί χωρίς πληκτρολόγηση:** μεγάλο αριθμητικό πληκτρολόγιο 0–9 που χωράει στο 375×812. Λέξεις
  (μόνο στα δωμάτια 2–3) ελέγχονται χωρίς κεφαλαία και τόνους: «Κόκκινο» = «ΚΟΚΚΙΝΟ» = «κοκκινο».
  Τίποτα που γράφει το παιδί δεν φεύγει από τη συσκευή.
- **Ο χρόνος μετράει, δεν πιέζει:** καμία αντίστροφη μέτρηση, μόνο μικρό ρολόι πάνω δεξιά. Βοήθεια μόνη
  της μετά από 60″ χωρίς κίνηση, δωρεάν. Λάθος απάντηση = ελαφρύ τίναγμα, καμία ποινή.
- **XP** μία φορά ανά απόδραση: πρώτη φορά το tier του δωματίου (Δ1 = 20 XP, Δ2/Δ3 = 30), επανάληψη 10.
  Ποτέ με βάση την ταχύτητα ή τις βοήθειες.

**Παίχτηκε σε 375×812:** όλο το Δωμάτιο 1. Λάθος απάντηση στον γρίφο 1 → έμεινε στον 1 χωρίς ποινή· οι 6
σωστές με εξήγηση «ΠΩΣ ΛΥΝΕΤΑΙ»· 7 αστέρια ευδιάκριτα στην ταμπέλα· «ΒΓΗΚΕΣ! 1′14″ — Χωρίς καμία
βοήθεια»· XP 0 → 20 και όχι δεύτερη φορά στο «Άνοιξε την πόρτα»· η βοήθεια εμφανίστηκε μετά από ~60″
αδράνειας· 0 overflow σε κάθε οθόνη· el και en πλήρη.

**Ανοιχτά:** δωμάτιο που έμεινε στη μέση δεν αποθηκεύεται (ξεκινάει από την αρχή)· οι καλύτεροι χρόνοι
μένουν μόνο στη συσκευή, δεν συγχρονίζονται στο profile.

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

### Τα charts παράγονται, δεν γράφονται

`scripts/games-rhythm-charts.mjs` διαβάζει το `beatmaps.json` και γράφει το `data/games/rhythmCharts.ts`
(ντετερμινιστικά — δύο τρεξίματα, ίδιο αρχείο). Ανά τραγούδι: εύκολο = τα δυνατότερα beats με ≥ 0,9″
απόσταση, κανονικό = τα δυνατά, δύσκολο = όλα + μισά. Κάθε γύρος κόβεται στα ~90″.

| τραγούδι | εύκολο | κανονικό | δύσκολο |
|---|---|---|---|
| Από Ιδέα… σε Παιχνίδι (105) | 53 | 93 | 176 |
| Future Mode (119) | 67 | 115 | 201 |
| WiseBot Hero Squad (128,5) | 54 | 110 | 203 |
| The Maker Mind (130) | 64 | 111 | 207 |
| Ξύπνα Maker! (128) | 56 | 112 | 200 |

Η ένταση των beats κρίνεται **τοπικά** (σε σχέση με τα γειτονικά): στα maker-mind, xypna-maker και
hero-squad υπάρχουν μεγάλα ήσυχα κομμάτια δίπλα σε δυνατό ρεφρέν, και χωρίς αυτό το εύκολο θα είχε
νότες μόνο στο ρεφρέν. Εκεί που ακόμη και τα γειτονικά είναι σχεδόν μηδέν, οι νότες ακολουθούν απλώς
το beat grid. Τα τραγούδια ξεκινούν 3″ πριν την πρώτη νότα, με fade-in, ώστε να μη χάνεται το intro.

### Ρολόι, παράθυρα, XP

- **Μόνο το ρολόι του `AudioContext`** μετράει τον χρόνο — ποτέ `Date.now` ή frames. Παύση =
  `suspend()`, που παγώνει το ρολόι· παγώνει μόνο του και όταν κρύβεται η καρτέλα.
- Παράθυρα (ΤΕΛΕΙΟ / ΚΑΛΟ): εύκολο ±90/±180 ms, κανονικό ±60/±140, δύσκολο ±50/±120. Latency offset
  −150…+250 ms, με slider **και** «ΤΕΣΤ» (10 μπιπ, το παιδί χτυπάει μαζί, ορίζεται μόνο του).
- **Πάτημα χωρίς νότα δεν σπάει το combo.** Στο κανονικό/δύσκολο, πάτημα λίγο πριν το παράθυρο μιας
  νότας μετράει ως αστοχία της, ώστε το «σφυροκόπημα» να μην πληρώνει· στο εύκολο απλώς αγνοείται.
- XP: tier 1/2/3 στο 40/70/90 % ακρίβειας (ΚΑΛΟ = μισό), **μόνο σε τελειωμένο τραγούδι**, μία φορά.

### Παίχτηκε σε 375×812

Πλήρες τραγούδι στο εύκολο: οι νότες πέφτουν στις τρεις λωρίδες και φτάνουν στους κύκλους, ένα
χτύπημα στη σωστή στιγμή έδωσε **ΤΕΛΕΙΟ και 100 πόντους**, 52 χαμένες νότες έδωσαν ακρίβεια 2 % και
σωστά «χωρίς XP» (κάτω από 40 %). Το ρεκόρ combo αποθηκεύτηκε στο `wb_rhythm_progress`. 0 overflow,
el και en πλήρη. Το 60 fps και ο συγχρονισμός με πραγματικά ηχεία δεν μετρήθηκαν στο preview.

### Ανοιχτά

- **Κανείς δεν άκουσε ακόμη τα charts πάνω στη μουσική** — το brief ζητάει «χειροκίνητο έλεγχο». Τα
  ήσυχα κομμάτια (xypna-maker ≈ 38–128″, maker-mind ≈ 37–130″) είναι grid-only και θέλουν αυτί.
- Στο iOS το Web Audio σιγεί όταν ο διακόπτης του κινητού είναι στο αθόρυβο· το παιχνίδι δεν το λέει.

**Εκκρεμότητα ιδιοκτήτη — Σάββατο 19/9 (2 λεπτά):** wisebot.gr → Παιχνίδια → ΡΥΘΜΟΣ → «Ξύπνα Maker!»,
ΕΥΚΟΛΟ, ΠΑΙΞΕ. Κάθονται οι νότες πάνω στη μουσική, ή πέφτουν πριν/μετά; Αν πέφτουν, δοκίμασε το «ΤΕΣΤ»
(10 μπιπ). Το αυτί που ζητάει το brief δεν υπάρχει στο preview· είναι ο μόνος έλεγχος που δεν έγινε.

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

### Τι βγήκε τελικά

- **Φυσική δική μας, ντετερμινιστική:** σταθερό βήμα 1/120″ με ακέραιο μετρητή βημάτων, καμία `Date.now`
  ή `Math.random`. Ίδιο επίπεδο = ίδια τροχιά, πάντα — αυτό κάνει τον κωδικό και το replay να δουλεύουν.
  Ο προσομοιωτής τρέχει ΠΡΙΝ το παίξιμο και το replay στα 60 fps ζωγραφίζει την έτοιμη τροχιά (δείγμα
  κάθε 2 βήματα), ποτέ δεν προσομοιώνει μέσα στον βρόχο ζωγραφικής.
- **Τα 15 επίπεδα είναι αποδεδειγμένα λύσιμα:** κάθε επίπεδο κουβαλάει λύση αναφοράς, και το test τρέχει
  και τις 15 μέσα από τον προσομοιωτή — φτάνουν στον στόχο, το άδειο ταμπλό ΔΕΝ φτάνει, και η λύση
  χρησιμοποιεί μόνο ό,τι δίνει η εργαλειοθήκη. Σειρά: ράμπες (1–3) → τραμπολίνο (4–5) → ανεμιστήρας (6–7)
  → ντόμινο (8–9) → μαγνήτης (10–11) → συνδυασμοί (12–15). Το brief λέει «30 επίπεδα» στην περιγραφή
  και «15» στο MVP· βγήκαν τα 15.
- **Ο κωδικός:** αλφάβητο 32 συμβόλων τύπου Crockford (χωρίς I, L, O· ένα πληκτρολογημένο O/I/l γίνεται
  0/1), 15-bit checksum. Μπάλα+στόχος = 9 σύμβολα, ≈ 3,5 σύμβολα ανά κομμάτι· τα 15 επίπεδα βγαίνουν
  13–35 σύμβολα, μια τυπική μηχανή 6 κομματιών ≈ 29, μέγιστο (12 κομμάτια) 52. Τυπώνεται `WB-XXXX-XXXX-…`.
  Σε 100 τυχαίες μηχανές, το 100 % των τυπογραφικών λαθών ενός συμβόλου απορρίπτεται ευγενικά.
- **Φυσική που αξίζει να ξέρεις:** η τριβή κύλισης μπαίνει μία φορά ανά βήμα (τα επικαλυπτόμενα τμήματα δεν
  την πολλαπλασιάζουν)· το τραμπολίνο έχει όριο εκτόξευσης (36 u/s), αλλιώς η μπάλα κέρδιζε ενέργεια·
  το πεσμένο ντόμινο γίνεται στερεό δάπεδο τη στιγμή που πέφτει.

**Παίχτηκε σε 375×812:** Επίπεδο 1 με πραγματικό σύρσιμο — ράμπα από την εργαλειοθήκη στο κελί, στροφή,
ΠΑΙΞΕ, η μπάλα κύλησε στο αστέρι: «ΤΑ ΚΑΤΑΦΕΡΕΣ!», XP 0 → 30 μία φορά (η επανάληψη δεν ξαναπληρώνει),
πρόοδος αποθηκευμένη, 0 overflow, el και en πλήρη. Ελεύθερο mode: κωδικός βγαίνει, ξαναφορτώνει, το
χαλασμένο απορρίπτεται.

**Ανοιχτά:** το «σπρώξιμο» του ντόμινο πάνω στη μπάλα υπάρχει στη φυσική αλλά κανένα επίπεδο δεν το
χρησιμοποιεί (με μία μπάλα, αυτή που ρίχνει τη σειρά είναι πάντα πίσω της)· τα 60 fps δεν μετρήθηκαν σε
πραγματικό μεσαίο Android.

---

## Εκτός πεδίου, αλλά αξίζει

`components/games/MathRush.tsx` predates `components/games/gameRewards.ts` and still carries its
own inline copy of the daily-cap logic (`wb_mathrush_rewards`, `rewardsLeftToday`,
`consumeReward`), calling `earnXp` directly. It works, and it was left alone — but the «max 2
rewards per game per day» rule now lives in two places. Worth folding into `grantGameReward` in
a change of its own.
