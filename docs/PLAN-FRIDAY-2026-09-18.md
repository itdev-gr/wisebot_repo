# Πλάνο Παρασκευής 18 Σεπτεμβρίου 2026 — μετά το reset των ορίων

Γραμμένο Κυριακή 14/9 01:00 από το session «Fable» μετά από μέτρηση του `origin/main`
(`e432252`). Ό,τι λέει «έγινε» είναι merged και live στο wisebot.gr. Ό,τι λέει «μένει»
μετρήθηκε στα αρχεία, δεν είναι εκτίμηση.

**Πώς το χρησιμοποιείς την Παρασκευή:** άνοιξε 4 Opus sessions και ένα Fable, δώσε σε κάθε
ένα το «πρώτο μήνυμα» της ενότητας 4 όπως είναι. Κάθε session δουλεύει σε δικό του worktree,
ανοίγει PR, και μόνο το C κάνει merge για το World. Το Fable κάνει review, admin, releases.

---

## 1. Πού είμαστε (μετρημένο)

| | Έγινε | Μένει |
| --- | --- | --- |
| **Πόλεις** | 17 live (Αθήνα, Θεσσαλονίκη, Ηράκλειο, Ρόδος, Δελφοί, Παρίσι, Ρώμη, Λονδίνο, Άμστερνταμ, Βαρκελώνη, Κων/πολη, Βιέννη, Βερολίνο, Βουδαπέστη, Λισαβόνα, Πόρτο, Πράγα), 25 χώρες με σφραγίδα εισόδου | 5 πόλεις του Explorer ακόμη στον παλιό εξερευνητή: **Λευκωσία, Ντουμπρόβνικ, Κοπεγχάγη, Μπριζ, Κρακοβία**. Μετά: Μαδρίτη, Φλωρεντία (COUNTRIES.md #3, #4) |
| **Γλώσσες** | el+en παντού· de/fr/es/it πλήρεις σε 11 πόλεις και στις 25 χώρες | Overlays de/fr/es/it για **6 πόλεις: Βιέννη, Βερολίνο, Πράγα, Λισαβόνα, Πόρτο, Βουδαπέστη** |
| **Αφήγηση Kore** | Αθήνα, Θεσσαλονίκη, Παρίσι, Ρώμη, Λονδίνο | Ηράκλειο, Ρόδος, Δελφοί (≈150 κλιπ), μετά Άμστερνταμ, Βαρκελώνη, Κων/πολη… (quota ≈100 κλιπ/μέρα, ο αγωγός είναι resumable) |
| **Μηχανή** | Χάρτης + Google/Apple Maps, σφραγίδα μόνο επί τόπου, «Είμαι εδώ!» ένα κουμπί (PR #88/#89), «Άλλη μία;», «Λάθος σημείο» (PinReport), τελετές seal, SEO 303 σελίδες, sync σφραγίδων → Supabase (push) | Τα 8 P0 tickets του `docs/world/TICKETS.md` (δες §4C), GA4 events του World, `@vercel/analytics` |
| **Games** | `daily` (PR #77) | `draw`, `whoami`, `escape`, `rhythm`, `machine` — **το περιεχόμενο είναι έτοιμο και ελεγμένο** στο `docs/games/research/` |
| **Admin / Auth** | Admin v2 με World + Traffic tab, reset password μέσω Resend, admin ανοίγει μόνο του, PWA update card | Search Console (θέλει service account από τον ιδιοκτήτη), ADMIN_EMAIL/ADMIN_PASSWORD στο Vercel |
| **Stores** | TestFlight build 1.0(3) με Geolocation plugin | Απάντηση Apple (2.1), App Privacy «Precise Location», D-U-N-S (ICAP) για Play |

Ανοιχτά PR στο GitHub: **κανένα**. Τεστ: 427 πράσινα. Lint: 0 errors.

---

## 2. Ο ιδιοκτήτης ΠΡΙΝ την Παρασκευή (10 λεπτά, κανείς άλλος δεν μπορεί)

1. **iPhone**: κλείσε την καρτέλα wisebot.gr, άνοιξέ την, «Ανανέωση» αν βγει η κάρτα, World →
   Ελλάδα → «Είμαι εδώ!» → «Να επιτραπεί». Πες στο Fable αν βγήκε η ερώτηση.
2. **Apple**: απάντηση στο «Information Needed» με το βίντεο από το build 1.0(3) και το κείμενο
   που δόθηκε· App Privacy → «Precise Location (not linked)».
3. **Vercel**: `ADMIN_EMAIL`, `ADMIN_PASSWORD` (νέος κωδικός, όχι αυτός που γράφτηκε σε chat) →
   Redeploy. Χωρίς αυτά το /admin δεν ανοίγει.
4. **Search Console**: service account, τα 5 βήματα που δείχνει η καρτέλα Traffic του admin.
5. **ICAP**: η δωρεάν φόρμα D-U-N-S.
6. **Σάββατο 19/9, field test #0**: εσύ και ένα παιδί, διαδρομή 1 της Αθήνας (BUSINESS-PLAN §6,
   εβδομάδα 2). Το τηλέφωνο το κρατά ο γονιός.

---

## 3. Κανόνες που πλήρωσαν (ισχύουν για όλα τα sessions)

- **Ένα session ανά φάκελο.** `git fetch origin` πρώτα, `git worktree add ~/Projects/wisebot-<x> -b <branch> origin/main`.
  Ποτέ δύο sessions στο ίδιο working tree (το CountryScreens.tsx ξαναγράφτηκε πάνω από edits δύο φορές).
- **Μόνο PR** (`gh pr create` → CI `verify` πράσινο → `gh pr merge --merge`). Για το World κάνει merge **μόνο το C**.
- **Το registry είναι generated**: ποτέ με το χέρι· `node scripts/world/build-registry.mjs`.
- **Resolver**: ένα καθαρό run ΚΡΑΤΙΕΤΑΙ. Δεν ξανατρέχει όσο το Overpass είναι κάτω (υποβαθμίζει A σε B/C).
- **Η σωστή απάντηση ούτε η μακρύτερη ούτε η συντομότερη** (το test το πιάνει). Ο έλεγχος
  «τριμμένος distractor έγινε αληθινός» γίνεται ΜΟΝΟ διαβάζοντας την απάντηση δίπλα στο `explanation`.
- **Τοποθεσία: ποτέ χωρίς πάτημα.** Το «Είμαι εδώ!» είναι ένα κουμπί· καμία σφραγίδα από πάτημα μόνο.
- **Games**: ένα PR τη φορά (όλα αγγίζουν το `GameCenter.tsx`), rebase στο main πριν το επόμενο,
  `grep` το κλειδί localStorage πριν το διαλέξεις, `git status --porcelain -uall` πριν το commit, ποτέ `git add -A`.
- **Παίξε το σε 375×812** πριν το commit. Τα gates περνάνε και με σπασμένο UI.
- **Κανένα μυστικό στο chat ή στο repo.** Env vars τα βάζει ο ιδιοκτήτης στο Vercel.

---

## 4. Τα sessions της Παρασκευής — πρώτο μήνυμα για το καθένα

### A — Content: οι 5 πόλεις του Explorer που έμειναν, μετά Μαδρίτη και Φλωρεντία

Πρώτο μήνυμα:

> Διάβασε `docs/world/STATUS.md` §0, `docs/world/SESSION-SPLIT.md` και `docs/PLAN-FRIDAY-2026-09-18.md`.
> Είσαι το session A (content). Φτιάξε worktree `~/Projects/wisebot-content` από `origin/main`, branch `content/explorer-last-five`.
> Μετέφερε από τον παλιό Explorer (`data/explore/`) στο World, μία πόλη τη φορά, με αυτή τη σειρά:
> **Λευκωσία, Ντουμπρόβνικ, Κοπεγχάγη, Μπριζ, Κρακοβία.** Για κάθε πόλη: seeds → `node scripts/world/resolve-coords.mjs <city>`
> (κανένας βαθμός D· αν το Overpass είναι κάτω, κράτα το καθαρό run και μην ξανατρέξεις) → πλήρες `cities/<city>.ts`
> (12–18 μέρη, 2–3 μουσεία, αινίγματα, `findIt` οδηγίες πόρτας) → `countries/<country>.ts` αν λείπει → `build-registry` →
> `npm run typecheck` → `npx vitest run data/world` → commit. Η σωστή απάντηση ούτε η μακρύτερη ούτε η συντομότερη.
> Ένα PR ανά 2–3 πόλεις προς main, με τα gates πράσινα· το merge το κάνει το session C. Όταν τελειώσουν οι 5:
> Μαδρίτη και Φλωρεντία (Ισπανία, Ιταλία υπάρχουν ήδη στα countries). Μην αγγίξεις i18n json, components, admin.

Στόχος ημέρας: 5 πόλεις σε PR. Bonus: Μαδρίτη.

### B — Γλώσσες: de/fr/es/it για τις 6 πόλεις που λείπουν

Πρώτο μήνυμα:

> Διάβασε `docs/world/STATUS.md` §0, `docs/world/SESSION-SPLIT.md` και `docs/PLAN-FRIDAY-2026-09-18.md`.
> Είσαι το session B (γλώσσες). Worktree `~/Projects/wisebot-i18n` από `origin/main`, branch `i18n/six-cities`.
> Overlays de, fr, es, it για: **Βιέννη, Βερολίνο, Πράγα, Λισαβόνα, Πόρτο, Βουδαπέστη** (με αυτή τη σειρά, πιο τουριστικές πρώτα).
> Ένας μεταφραστής-agent ανά γλώσσα ανά πόλη σε δικό του worktree: πηγή `data/world/cities/<city>.ts`, σχήμα `CityTranslation`,
> sibling παράδειγμα `data/world/i18n/athens.<lang>.json`, gate «<city> is completely translated into <lang>» στο `world.test.ts`.
> Οι απαντήσεις των ερωτήσεων στη μετάφραση ούτε μακρύτερες ούτε συντομότερες από τους distractors (το test το πιάνει, μέτρα το εσύ πρώτα).
> Ένα PR ανά πόλη (4 γλώσσες μαζί), gates πράσινα, merge από το C. Μην αγγίξεις city .ts αρχεία ή components.
> Αν τελειώσεις: το ticket `i18n-machine-translated-flag` από το `docs/world/TICKETS.md` (P0), σε ξεχωριστό PR.

Στόχος ημέρας: 4 πόλεις × 4 γλώσσες. Bonus: και οι 6.

### C — Μηχανή και release: τα P0 tickets, αφήγηση, merges

Πρώτο μήνυμα:

> Διάβασε `docs/world/STATUS.md` §0, `docs/world/TICKETS.md` (P0) και `docs/PLAN-FRIDAY-2026-09-18.md`.
> Είσαι το session C (engine/release). Worktree `~/Projects/wisebot-engine` από `origin/main`, ένα branch ανά ticket.
> Είσαι το ΜΟΝΟ session που κάνει merge για το World: όταν το A ή το B γράψει «pushed <branch> <hash>», τρέξε τα gates
> στο PR τους και κάνε `gh pr merge --merge` αν είναι πράσινο. Μη σβήσεις ποτέ branch άλλου session.
> Δικά σου, με σειρά, ένα PR το καθένα: (1) `progress-version-migration` (ένα version bump σβήνει το διαβατήριο —
> γράψε migration, όχι reset), (2) `world-stamp-onsite-flag` (πεζοδρόμιο ή καναπές, στο localStorage και στο `world_stamps`),
> (3) `loc-ab-quest-rule` (test: μόνο A/B μέσα σε quest), (4) `quest-onsite-order` (επί τόπου πρώτα η ερώτηση, μετά η ιστορία),
> (5) `i18n-countries-gate` (test πληρότητας για countries.<lang>.json), (6) `session-split-ownership` (docs).
> Παράλληλα, στο background, η αφήγηση Kore με τον resumable αγωγό: `extract-texts` → `generate-narration --city heraklion`
> → `transcribe-narration` → `align-narration.py` → `build-narration-manifest`, μετά rhodes, delphi (quota ≈100 κλιπ/μέρα, μην το καις σε retries).
> Όταν το Overpass είναι πάνω: re-resolve Λονδίνο (8 μέρη), Βαρκελώνη, Πράγα· ο κανόνας «καθαρό run κρατιέται» ισχύει.
> Μην αγγίξεις `components/AdminDashboard.tsx`, `components/admin/**`, `api/admin/**`, auth, `store/ios` — είναι του Fable.

Στόχος ημέρας: 4 P0 κλειστά, Ηράκλειο αφηγημένο, όλα τα PR των A/B merged.

### D — Games: draw → whoami → escape → rhythm → machine

Πρώτο μήνυμα:

> Διάβασε `docs/games/BRIEF-SIX-GAMES.md`, `docs/games/NOTES.md` («ΠΟΥ ΕΜΕΙΝΑΜΕ») και `docs/PLAN-FRIDAY-2026-09-18.md`.
> Είσαι το session D (games). Worktree `~/Projects/wisebot-games` από `origin/main`, branch `games/draw`.
> Σειρά: **draw → whoami → escape → rhythm → machine.** Το περιεχόμενο ΥΠΑΡΧΕΙ στο `docs/games/research/` (λέξεις, ιδιότητες 95 ανθρώπων,
> 3 δωμάτια, beat maps) — διάβασέ το, μην το ξαναπαράγεις. Ένας builder-agent ανά παιχνίδι σε δικό του worktree, ένας ανεξάρτητος
> ελεγκτής που το ΠΑΙΖΕΙ σε preview 375×812 πριν το commit. Definition of Done: παίζεται από την αρχή ως το τέλος στο κινητό,
> el+en, XP μία φορά ανά γύρο μέσω `grantGameReward`, κάρτα κοινοποίησης PNG με `shareGameCard`, tests vitest για τη λογική,
> καταχώρηση στο `GameCenter.tsx`. Ένα PR τη φορά, rebase στο main πριν το επόμενο. Καμία συλλογή δεδομένων παιδιού, κανένα chat.
> Στο `draw` λείπουν 5 λέξεις για Ε'–ΣΤ' — πρόσθεσέ τες. Στο `whoami` τρέξε `python3 docs/games/research/whoami-check.py` (exit 0) πριν το PR.

Στόχος ημέρας: `draw` και `whoami` merged. Bonus: `escape`.

### Fable (αυτό το session) — review, admin, release, iOS

- Review κάθε PR πριν το merge όπου υπάρχει UI (παίζοντάς το), adversarial review για τη μηχανή.
- Admin: Search Console live μόλις μπει το service account· `@vercel/analytics` + GA4 events του World
  (`world_stamp`, `one_more_yes/no`, `share_passport`, `second_city`, `wrong_pin`, χωρίς συντεταγμένες).
- iOS: αν η Apple ζητήσει κάτι, build 1.0(4)· αλλιώς τίποτα.
- Τέλος ημέρας: HANDOFF.md + STATUS.md §0 ενημερωμένα, όλα merged, worktrees καθαρά, πλάνο Σαββάτου.

---

## 5. Η σειρά της ημέρας

| Ώρα | Τι |
| --- | --- |
| Άνοιγμα | Fable: `git fetch`, CI πράσινο, ανοίγει τα 4 sessions με τα πρώτα μηνύματα. Κάθε session: worktree, `npm ci`, gates πράσινα ΠΡΙΝ γράψει. |
| +2 ώρες | Πρώτα PR: C το `progress-version-migration`, D το `draw`, A η Λευκωσία, B η Βιέννη. |
| Μεσημέρι | Merges με σειρά: C (engine) → A (πόλεις) → B (γλώσσες) → D (games, ανεξάρτητο). Μετά από κάθε merge, τα άλλα κάνουν `git fetch` + rebase. |
| Απόγευμα | Δεύτερος γύρος: A Ντουμπρόβνικ/Κοπεγχάγη, B Βερολίνο/Πράγα, C onsite-flag + AB-rule, D whoami. |
| Πριν το όριο | Ό,τι δεν κλείνει: commit + push στο branch του, γραμμή στο STATUS §0 «πού έμεινε». Ποτέ μισή δουλειά μόνο τοπικά. |

---

## 6. Τι ΔΕΝ κάνουμε την Παρασκευή

- Καινούργια είδη αποστολής, hop-on/hop-off δεδομένα, chat, φωτογραφίες σε server, νέες χώρες πέρα από τη λίστα.
- Αλλαγές στο «Είμαι εδώ!» — είναι ένα κουμπί και μένει έτσι (`docs/world/STATUS.md`, HANDOFF 13/9).
- Χειροκίνητο κατέβασμα βαθμού συντεταγμένων για να «περάσει» test.
- Δουλειά στο ίδιο working tree με άλλο session.

---

## 7. Πώς ξέρουμε ότι πέτυχε η μέρα

- 22 πόλεις live (17 + οι 5 του Explorer), ο παλιός εξερευνητής χωρίς πόλεις.
- 15 πόλεις πλήρεις σε 6 γλώσσες (11 + 4).
- 4 P0 tickets κλειστά, Ηράκλειο με αφήγηση.
- 3 games live (daily + draw + whoami).
- Το Σάββατο ο ιδιοκτήτης περπατά την Αθήνα με ένα παιδί και σημειώνει κάθε «δεν κατάλαβα».
