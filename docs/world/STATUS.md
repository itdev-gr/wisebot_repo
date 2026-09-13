# WiseBot — Πού βρισκόμαστε παντού (12 Σεπτεμβρίου 2026, 01:30)

Γραμμένο από το session «WiseBot World roadmap» μετά από έλεγχο του repo, του origin/main,
της Supabase, του Gmail και των transcripts των άλλων sessions. Ό,τι γράφεται εδώ
μετρήθηκε· δεν είναι εκτίμηση. Το business plan είναι στο [BUSINESS-PLAN.md](BUSINESS-PLAN.md).

## 0. HANDOFF (13/9, 18:40) — ξεκίνα από εδώ

**Όλα στο main.** 17 πόλεις, 260 μέρη, 40 μουσεία, 303 prerendered σελίδες, 44 overlays.
Τελευταίο merge `fc759bc`, CI πράσινο. Τα τρία branches (`world/content`, `world/i18n`,
`engine/answer-giveaway-gate`) είναι μέσα και τα sessions τους πάγωσαν μέχρι την Παρασκευή
λόγω ορίων.

**Τρία ανοιχτά, κανένα επείγον, κανένα ορατό στο παιδί.** Και τα τρία τα πιάνει πλέον το
νέο invariant «κάθε place.location ταιριάζει πεδίο-προς-πεδίο με το coords/<city>.json», και
τα δύο πρώτα είναι γραμμένα ονομαστικά στη λίστα `KNOWN` μέσα στο `data/world/world.test.ts`:

1. **Λονδίνο, 8 μέρη.** Το city file κρατά `osm` source και βαθμό A· το committed coords
   json δεν τα έχει, γιατί ξαναπαράχθηκε όσο το Overpass ήταν κάτω. **Το αρχείο έχει το
   καλό run, το json το φτωχό** — η διόρθωση είναι ένα τρέξιμο του resolver όταν επανέλθει
   το Overpass και μετά sync, ΠΟΤΕ χειροκίνητο κατέβασμα του βαθμού για να ταιριάξει.
2. **Ρώμη, 3 refs.** Καμπύλη απόστροφος στο city file, ίσια στο json. Τρεις χαρακτήρες,
   αρχεία του content session.
3. **Βαρκελώνη και Πράγα** αξίζουν re-resolve όταν το Overpass είναι σταθερά πάνω: και οι
   δύο έκλεισαν χωρίς κανένα OSM cross-check (Βαρκελώνη 11 B / 5 C, Πράγα `fetch failed`
   και στα 17).

**Ο κανόνας του resolver, που πληρώθηκε:** ένα καθαρό run ΚΡΑΤΙΕΤΑΙ και δεν ξανατρέχει όσο
το Overpass είναι κάτω — ένα re-run χωρίς OSM υποβαθμίζει μέρη που ήδη είχαν A. Η Κων/πολη
κρατήθηκε έτσι (8 A / 6 B / 3 C).

**Αφήγηση:** Αθήνα, Παρίσι, Ρώμη πλήρεις. Λονδίνο τρέχει. Μένουν ~820 κλιπ για 14 πόλεις με
quota ~100/μέρα. Ο αγωγός είναι resumable: `extract-texts` → `generate-narration --city X`
→ `transcribe-narration` → `align-narration.py` → `build-narration-manifest`.

**Δεν αυτοματοποιείται, μην προσπαθήσεις:** ο έλεγχος «τριμμένος distractor έγινε αληθινός».
Δύο sessions έφτιαξαν wordlist υπερθετικών· ανάκληση 0/9 και 6/19. Αυτό που τα βρίσκει είναι
η ανάγνωση της απάντησης δίπλα στο `explanation` της ίδιας της ερώτησης. Λεπτομέρεια στον
κανόνα 9 του [SESSION-SPLIT.md](SESSION-SPLIT.md).

---

## 0α. HANDOFF της 12/9 (ιστορικό)

**Πού είμαστε.** Branch `content/world-cities`, ~14 commits μπροστά από το `origin/main`, gates
πράσινα (typecheck 0, `vitest data/world/world.test.ts` 159/159). Στο main είναι live τα PR
#67 (WiseBot World, 25 χώρες, Ελλάδα) και #68 (πραγματικός χάρτης, Google/Apple Maps, σφραγίδα
μόνο επί τόπου, runtime SEO). Στο branch, ΟΧΙ ακόμη στο main: **Παρίσι (13 μέρη, 4 γλώσσες),
Ρώμη (18 μέρη, 3 μουσεία), Λονδίνο (17/3), Άμστερνταμ (16/3)** — μετατροπές από το Explorer
μέσα από τον resolver, με ανεξάρτητο έλεγχο η καθεμία· Βιέννη: seed + coords μόνο (b1cae78).

**Μισοτελειωμένα, ΜΗΝ τα σβήσεις:** δύο agent worktrees με γραμμένα αλλά μη ελεγμένα αρχεία:
`.claude/worktrees/wf_305d6b08-8eb-3` = **Βαρκελώνη** (cities/barcelona.ts, coords, seeds,
spain.ts, svg) και `wf_305d6b08-8eb-4` = **Κωνσταντινούπολη** (ίδια δομή, turkey.ts). Για να
κλείσουν: `cd` στο worktree, `node scripts/world/resolve-coords.mjs <city>` (κανένα D),
`node scripts/world/build-registry.mjs`, `npm run typecheck`, `npx vitest run data/world/world.test.ts`
(το test μήκους απάντησης πρέπει να περνά), commit εκεί, μετά `git merge <branch του worktree>`
στο `content/world-cities` και ξανά `build-registry` (το registry.ts είναι generated, λύνεται
πάντα με regeneration). Τα worktrees wt-1/2/5 (Ρώμη, Λονδίνο, Άμστερνταμ) έχουν ήδη γίνει
merge και μπορούν να αφαιρεθούν (`git worktree remove --force`).

**Τι μένει, με σειρά:**
1. Βαρκελώνη + Κωνσταντινούπολη (παραπάνω), Βιέννη (το content session γράφει vienna.ts).
2. Overlays fr/de/es/it για Ρώμη, Λονδίνο, Άμστερνταμ (+ Βαρκελώνη, Κων/πολη, Βιέννη όταν
   μπουν): 4 μεταφραστές ανά πόλη, ίδιο brief με το Παρίσι (δες το workflow «paris-languages»
   στο ιστορικό: πηγή = city.ts, σχήμα = CityTranslation, sibling = athens.<lang>.json, gate =
   «<city> is completely translated into <lang>»).
3. **countries.<lang>.json: μόνο greece + paris έχουν μετάφραση.** Οι 24 νέες χώρες δείχνουν
   αγγλικά σε de/fr/es/it. Ένας μεταφραστής ανά γλώσσα, name+intro+facts για 24 χώρες, χωρίς
   stamp. (Το workflow «countries-languages» κόπηκε πριν γράψει.)
4. PR #69 από `content/world-cities` → main (Παρίσι, Ρώμη, Λονδίνο, Άμστερνταμ + ό,τι κλείσει).
   Ο ιδιοκτήτης έχει δώσει ΟΚ για merge όταν το CI είναι πράσινο. Merge με `--merge`.
5. Μετά: αφήγηση Kore για τις νέες πόλεις (quota ~100 κλιπ/μέρα), cloud sync σφραγίδων
   (`world_stamps`), κάρτα «Άλλη μία;», κουμπί «Λάθος σημείο», PASS_QUIZ off στο Explorer,
   StampBook adapter για wb_explore_* — δες BUSINESS-PLAN.md §6 εβδομάδες 2–3.

**Κανόνες που πλήρωσαν:** ένα session ανά φάκελο, `git fetch` στην αρχή· μη γράφεις σε
αρχείο που γράφει άλλος (το CountryScreens.tsx ξαναγράφτηκε πάνω από edits δύο φορές)· τα
agents σε worktrees, ποτέ στο κοινό tree· η σωστή απάντηση σύντομη από το πρώτο draft·
κτίριο αντί για είσοδο στο Wikidata (Λούβρο, όχι Πυραμίδα)· `npx vitest run … --exclude '**/.claude/**'`
(μπήκε και στο vite.config).

## 0. Τι αποφασίστηκε και τι έγινε 11→12/9

**LIVE (12/9, 13:47): το PR #67 έγινε merge στο main** (bf3f0d0). Το wisebot.gr έχει πλέον
ένα κουμπί «WiseBot World»: 25 χώρες με σφραγίδα εισόδου, Ελλάδα με 5 πόλεις, μουσεία,
αινίγματα, τελετές, 6 γλώσσες, 103 prerendered σελίδες στο sitemap. Το παλιό «Εξερεύνησε»
δεν φαίνεται πια στο μενού· οι πόλεις του ανοίγουν μέσα από τη σελίδα κάθε χώρας με τη
σήμανση «προσωρινά στον παλιό εξερευνητή» μέχρι να μεταφερθούν.

**LIVE (12/9, 15:05): το PR #68 έγινε merge** (2ac4e38), μετά από δοκιμή του ιδιοκτήτη στον
δρόμο: πραγματικός χάρτης OpenStreetMap με αριθμημένα pins στην πόλη (`WorldMap.tsx`), σε
κάθε μέρος ο χάρτης με το pin του και κουμπιά **Google Maps / Apple Maps**, και **η σφραγίδα
μπαίνει μόνο επί τόπου**: «Είμαι εδώ!» ζητά άδεια τοποθεσίας, η ερώτηση ανοίγει μέσα σε 60 m
(120 m για περιοχές), η θέση δεν φεύγει ποτέ από τη συσκευή. Συν runtime SEO ανά
χώρα/πόλη/μέρος (`WorldSeo.tsx`, `data/world/seo.ts`).

**Προσοχή, PWA:** η εφαρμογή κρατά την παλιά έκδοση μέχρι ο χρήστης να δεχτεί την ενημέρωση
(`registerType: 'prompt'`). Με τον παλιό service worker ένα /world URL γυρίζει στην αρχική,
γιατί η παλιά έκδοση δεν έχει το route. Οι 16 χρήστες θα το δουν με το πρώτο «Ενημέρωση».

- **Απόφαση ιδιοκτήτη:** ένα προϊόν, «WiseBot World», με κορμό το World· το Explorer
  μεταφέρεται μέσα του (Option C τώρα, A μετά, πόλεις μία μία). Merge στο main μόλις είναι
  πράσινο. Καταγράφεται στο BUSINESS-PLAN.md §2.
- **Έγιναν:** τελετή seal πόλης και χώρας (5b9d1ee)· το προϊόν πήρε το όνομά του παντού
  (f5dcf58)· 79 SEO σελίδες /world + sitemap στο build (4c50ca1)· Δελφοί σε de/fr/es/it
  (b6c47c7)· έλεγχος και των 180 live pins του Explorer (2c65917)· 17 οδηγίες πόρτας με τις
  μεταφράσεις τους (018a6a3, 1bdd815, 4d92727)· business plan (c71c516, 8594579)· 103/103
  tests.
- **Σε εξέλιξη:** engine session → push, merge origin/main, Option C· content session →
  μετατροπή Λισαβόνας και Πόρτο από τα κείμενα του Explorer μέσα από τον αγωγό.

---

## 1. Το εύρημα που αλλάζει τα πάντα: υπάρχουν ΔΥΟ προϊόντα «πόλης»

| | **Explorer** (ζωντανό) | **World** (τοπικό branch) |
| --- | --- | --- |
| Πού | `origin/main`, live στο wisebot.gr από 5–6/9 (PRs #60–#66, cloud sessions) | `content/world-cities`, 30 commits, **δεν έχει γίνει push** |
| Κώδικας | `components/Explore.tsx`, `data/explore/**`, `utils/geo.ts` | `components/world/**` (6.400 γραμμές), `data/world/**`, `scripts/world/**` |
| Περιεχόμενο | **18 πόλεις × 10 spots**, 16 χώρες (Αθήνα, Λισαβόνα, Πόρτο, Ρώμη, Παρίσι, Βαρκελώνη, Λονδίνο, Βερολίνο, Άμστερνταμ, Βιέννη, Πράγα, Βουδαπέστη, Κωνσταντινούπολη, Λευκωσία, Ντουμπρόβνικ, Κοπεγχάγη, Μπριζ, Κρακοβία) | **Ελλάδα μόνο, πλήρης** (committed 23:35): Αθήνα 18, Θεσσαλονίκη 17, Ηράκλειο 12, Ρόδος 12, Δελφοί 13 = **72 μέρη, 11 μουσεία, 76 εκθέματα, 27 αινίγματα, 18 διαδρομές** |
| Τι κάνει το παιδί | Κυνήγι θησαυρού **με GPS** στον δρόμο: γρίφος → φτάνεις → ερώτηση παρατήρησης → ιστορία → κουίζ → σφραγίδα | Διαβάζει ιστορία, απαντά, μπαίνει σε **μουσεία** (αίθουσες, εκθέματα, αινίγματα), ακούει **αφήγηση** με read-along, μαζεύει σφραγίδες |
| Χάρτης | Leaflet, γραμμή «εσύ → εκεί», απόσταση, λεπτά, πυξίδα, Google/Apple Maps | Ζωγραφισμένος SVG χάρτης ανά πόλη, χωρίς GPS |
| Συντεταγμένες | **180, γραμμένες στο χέρι**, χωρίς πηγή ή βαθμό. Εδώ βρήκες Bolhão 2 στενά κάτω, εκκλησίες δίπλα-δίπλα | Από Wikidata (CC0) με διασταύρωση OSM/Wikipedia, βαθμός A/B/C, είσοδος μόνο αν μετρήθηκε, 5 οδηγίες «πού είναι η πόρτα» |
| Γλώσσες | el, en | el, en μέσα + de, fr, es, it ως overlays (3 πόλεις πλήρεις, Ρόδος σήμερα) |
| Passport | Σφραγίδα πόλης στα spots−2, σφραγίδα χώρας όταν όλες οι πόλεις, «taste» badge | Σφραγίδα εισόδου χώρας (τελετή), seal πόλης και χώρας (υπολογίζονται, **δεν γιορτάζονται στην οθόνη**) |
| Tests | `data/explore.test.ts` | 96+ invariants στο `world.test.ts` (3 πέφτουν τώρα, δες §3) |
| Geolocation header | `geolocation=(self)` στο main | Τα docs νόμιζαν ότι είναι κλειστό |

**Γιατί συνέβη:** τα τρία τοπικά sessions ξεκίνησαν 10/9 από τοπικό `main` που ήταν **10 commits
πίσω** από το `origin/main`. Το `CURRENT_STATE.md` («καμία συντεταγμένη πουθενά») ήταν σωστό
για το stale checkout και λάθος για την παραγωγή. Τα 8 σημεία του brief σου (pins, εκκλησίες,
αγορά) αφορούσαν το **Explorer** που δοκίμασες στο Πόρτο· τα sessions τα διάβασαν ως
προδιαγραφή για κάτι που «δεν υπάρχει».

`git merge-tree` δείχνει **0 conflicts** — αλλά ένα merge όπως είναι βγάζει δύο μενού
(«Εξερεύνησε» και «Ο Κόσμος»), δύο passports, δύο μοντέλα. Άρα **δεν κάνουμε merge πριν
αποφασιστεί η συγχώνευση**. Η σύσταση είναι στο business plan.

---

## 2. Τι έκανε καθεμία από τις sessions

| Session | Branch / commits | Τι παρέδωσε | Κατάσταση |
| --- | --- | --- | --- |
| **WiseBot World schema and docs** (10/9) | `feature/opus-prep`, 2 commits `docs(world)` | `CURRENT_STATE.md` (έρευνα codebase), `specs/01–03` (μοντέλο, rewards, module contract). Ακύρωσε το POI audit γιατί «το Explore δεν υπάρχει» (stale main) | Τελείωσε. Οι παραδοχές «φανταστικό ταξίδι, χωρίς GPS» έχουν ξεπεραστεί από το live προϊόν |
| **Wisebot project features** = engine (11–12/9) | 14 `feat(world)` + 2 `fix(world)` + 1 `test(world)` | `types.ts`, resolver συντεταγμένων, registry generator, 11 οθόνες, passport με τελετή σφραγίδας εισόδου **και seal πόλης/χώρας** (5b9d1ee), αφήγηση Kore + read-along (272 κλιπ), overlays 4 γλωσσών, `findIt` οδηγίες + μεταφράσεις τους, test μήκους απάντησης, το όνομα «WiseBot World» παντού (f5dcf58) | Εκτελεί Option C (push, merge origin/main, ένα μενού, κοινό passport). Μένουν: αφήγηση Ηρακλείου/Ρόδου/Δελφών (quota Gemini) |
| **WiseBot World content session** (11–12/9) | 10 `content(world)` | Αθήνα 45f8724, Θεσσαλονίκη 6c02b16, Ηράκλειο b73c3b5, Ρόδος c705c02, Δελφοί 8adbbbe (seeds, coords, πλήρη αρχεία, μουσεία, αινίγματα). Ξανάγραψε **112 από 148 ερωτήσεις** όπου η σωστή ήταν η μακρύτερη. 12 οδηγίες πόρτας από επίσημες σελίδες (018a6a3, 4d92727): οι σελίδες δίνουν διευθύνσεις, όχι συντεταγμένες, και Ρόδος/Δελφοί σχεδόν δεν έχουν «πόρτες» | **Η Ελλάδα ολοκληρώθηκε και είναι committed.** Ξεκινά μετατροπή Λισαβόνας και Πόρτο από τα κείμενα του Explorer |
| **WiseBot World executive roadmap** = research (11/9) | 10 `docs(world)` | `ROADMAP.md`, `SESSION-SPLIT.md`, `COUNTRIES.md`, `research/01–09`: έλεγχος συντεταγμένων (27 «είσοδοι», 0 μετρημένες πόρτες), 35 πόρτες προς μέτρηση, μουσεία με Wikidata ids, γλώσσες, κόστος ανά πόλη, διαδρομές χωρίς hop-on hop-off, quest engine spec, οδηγίες πόρτας, έλεγχος ερωτήσεων (76% χωρίς γνώση) | Idle από 17:49 |
| **WiseBot World roadmap** = αυτό (11–12/9) | 7 commits | STATUS.md, BUSINESS-PLAN.md (+ σελίδα), `research/10` έλεγχος 180 pins, `scripts/world/audit-explorer-pins.mjs`, `scripts/world/generate-world-seo.mjs` (79 σελίδες, στο build), Δελφοί σε 4 γλώσσες, μεταφράσεις findIt Ρόδου, συντονισμός των sessions | Ανοίγει το PR προς main μόλις το engine πει «έτοιμο» |
| **Cloud sessions** (5–6/9, δεν φαίνονται στο sidebar) | `claude/explorer-*` → **merged στο main** | Ολόκληρο το Explorer: 18 πόλεις, GPS, passport, taste | Live |

**Push:** ο ιδιοκτήτης έδωσε ΟΚ για push και merge (12/9). Το engine session κάνει push
του `content/world-cities` και merge του origin/main μέσα του (3 conflicts σε κοινά αρχεία),
και το PR προς main ανοίγει μόλις το Option C είναι πράσινο.

---

## 3. Υγεία του branch αυτή τη στιγμή

| Έλεγχος | Αποτέλεσμα |
| --- | --- |
| `npm run typecheck` | καθαρό |
| `vitest data/world` | **99 / 99 περνούν** (23:40, μετά τα commits 8adbbbe + 983298a) |
| Uncommitted | τίποτα από τα World αρχεία (μόνο αυτό το STATUS.md και δύο άσχετα untracked του αφηγητή ebooks) |
| Ahead / behind origin/main | 32 / 10 |
| Conflicts με main | 0 (διαφορετικά αρχεία) |

---

## 4. Τα 8 σημεία του brief σου — πού στέκει το καθένα

| # | Ζήτησες | Κατάσταση |
| --- | --- | --- |
| 1–2 | Περισσότερες χώρες, πόλεις | Explorer: 18 πόλεις live. World: Ελλάδα. `COUNTRIES.md`: σειρά 20 χωρών. Το roadmap παγώνει το εύρος μέχρι τον πιλότο |
| 3 | Μουσεία εσωτερικά, κουίζ, αινίγματα | **Έγινε** στο World (αίθουσες, εκθέματα, 22 αινίγματα, όλα καθαρά). Δεν υπάρχει στο Explorer |
| 4 | Δεδομένα hop-on hop-off, «δικά μας» | **Απορρίφθηκε** — βάση δεδομένων προστατεύεται στην ΕΕ ανεξάρτητα από copyright (`research/05`). Αντικατάσταση: διαδρομές από δικά μας δεδομένα («έχω 2 ώρες», οικογενειακή, βροχή, δωρεάν, κρυμμένα) — θέλει 3 πεδία στο `Place` |
| 5 | Ποιες χώρες έχουν τουρισμό, πόσες γλώσσες | `COUNTRIES.md` (top-20 αφίξεων, Σ. Αραβία → Αίγυπτος), `research/03` (γλώσσες) |
| 6 | Πόσες γλώσσες για κουμπιά | Κανόνας υλοποιημένος: κουμπί μόνο αν η πόλη είναι 100% στη γλώσσα· έως 6 ορατά (el, en, τοπική, +3) |
| 7 | Έλεγχος pins (εκκλησίες, αγορά 2 στενά) | Επιβεβαιώθηκε και μετρήθηκε (Bolhão 56 m, Carmo ζευγάρι νόμιμο 16 m, Στάδιο 127 m). World: resolver + 35 πόρτες + 5 `findIt`. **Explorer live: και τα 180 pins ελέγχθηκαν με Wikidata** (`research/10`): 103 ok ≤60 m, 41 θέλουν μάτι (61–150 m), 12 λάθος >150 m, 24 χωρίς αντιστοιχία — η λίστα οδηγεί τη μετάπτωση πόλη-πόλη |
| 8 | Σφραγίδα εισόδου χώρας + συγχαρητήρια στο τέλος | **Έγινε και τα δύο**: τελετή εισόδου χώρας και τελετή seal πόλης και χώρας (`SealCeremony.tsx`, 5b9d1ee), σε 6 γλώσσες |

---

## 5. Η υπόλοιπη εφαρμογή (Academy) — από HANDOFF.md, Supabase, Gmail

| | Κατάσταση |
| --- | --- |
| Χρήστες | **16** εγγεγραμμένοι (12 τον Μάρτιο, 4 έκτοτε), 8 ενεργοί 30 ημερών, 1 τελευταίων 7 |
| Έσοδα | **1 αγορά, €4,99** (22/8). 121 credit transactions, κυρίως δικά σου tests |
| Analytics | Vercel Web Analytics **απενεργοποιημένο**. GA4 (G-7834HP8GYV) υπάρχει, δεν το βλέπουμε από εδώ |
| Ebooks | 34 βιβλία, αφήγηση EL+EN **ολοκληρώθηκε** (ο αυτόματος αφηγητής έγραψε `DONE`, 0 σελίδες μένουν) |
| iOS | Build 1.0(1) **submitted 31/8**. Δεν υπάρχει email Apple στο vskevis@itdev.gr — έλεγξε **info@wisebot.gr** |
| Android | `.aab` έτοιμο. Play Console μπλοκαρισμένο σε **D-U-N-S**. Η ICAP απάντησε 31/8 (**αδιάβαστο** στο inbox): δωρεάν σε 20 εργάσιμες με 1 φόρμα, ή 1–2 μέρες επί πληρωμή με 3 φόρμες + απόδειξη |
| DSA trader status | In Review, email επαλήθευσης στο info@wisebot.gr |
| Main από 5/9 | Explorer (#60–66), School +48 units, ELA 42 units, quiz EN full sentences, CI unbroken |

---

## 6. Τι χρειάζεται ΑΠΟ ΕΣΕΝΑ (κανείς άλλος δεν μπορεί)

1. **Email ICAP** (αδιάβαστο από 31/8): δωρεάν οδός D-U-N-S, μία φόρμα, σήμερα.
2. **info@wisebot.gr**: απάντηση Apple για το build 1.0(1) και DSA verification. Προώθηση στο
   inbox που διαβάζεις.
3. **Vercel Web Analytics ON** και ΟΚ για το PR με το `@vercel/analytics` (το κουμπί μόνο του
   δεν μετρά SPA). Επιβεβαίωση ότι Vercel και Supabase είναι σε Pro.
4. **App Privacy label**: «Precise Location (not linked)» στο App Store Connect (το Explorer
   με GPS βγήκε live μετά την υποβολή της 31/8).
5. **Λογιστής**: ΚΑΔ λογισμικού, ΦΠΑ, OSS, Stripe στο όνομα της εταιρείας, DPA σχολείων.
6. **Field test #0** το Σάββατο: εσύ και ένα παιδί, διαδρομή 1 Αθήνας.
Η πλήρης λίστα: BUSINESS-PLAN.md §11.
