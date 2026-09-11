# WiseBot World — Executive Roadmap

Το brief του ιδιοκτήτη, 11 Σεπτεμβρίου 2026, γραμμένο πάνω στο τι υπάρχει ήδη στο repo.
Το «γιατί» ζει στο `PRODUCT-VISION.md`. Το «ποιος χτίζει τι» ζει στο
[SESSION-SPLIT.md](SESSION-SPLIT.md). Εδώ ζει **η σειρά** και **τι αλλάζει από όσα
είχαν ήδη αποφασιστεί**.

## Το concept

**Explore → Play → Learn → Collect → Unlock.**

Όχι travel guide. Στόχος: ο πραγματικός κόσμος να γίνει παιχνίδι για παιδιά και
οικογένειες. Το παιδί δεν ανοίγει το WiseBot για να μάθει «τι είναι αυτό το κτίριο»,
αλλά για να πει «πάμε να το ξεκλειδώσουμε».

Η δομή: `WORLD → COUNTRY → CITY → ADVENTURE → LANDMARK/MUSEUM → MISSION → REWARD →
PASSPORT → NEXT ADVENTURE`.

---

## Πού είμαστε σήμερα (μετρημένο, όχι εκτίμηση)

Ενημερωμένο 11 Σεπτεμβρίου 2026, βράδυ. Ο πίνακας παλιώνει μέσα στην ίδια μέρα, γιατί
δύο sessions χτίζουν παράλληλα· όποιος τον διαβάζει ας τον διασταυρώνει με το repo.

| | Κατάσταση |
| --- | --- |
| Μοντέλο δεδομένων | `data/world/types.ts` — Museum, Room, Exhibit, Riddle, Trail, και μεταφράσεις ως χωριστά αρχεία ανά πόλη |
| Οθόνες | 10 αρχεία στο `components/world/`, με wiring σε App, constants, Layout, MakerPassport και SEO, όλα committed |
| Περιεχόμενο | **3 πόλεις**: Αθήνα 18 μέρη, Θεσσαλονίκη 17, Ηράκλειο 12. Επτά μουσεία συνολικά |
| Συντεταγμένες | 5 πόλεις έχουν αρχείο: Αθήνα, Θεσσαλονίκη, Ηράκλειο, Ρόδος, Πόρτο. Η Ρόδος δεν έχει δηλωθεί ακόμη στο `greece.ts` |
| Αφήγηση | 272 αρχεία ήχου, ελληνικά και αγγλικά, φωνή Kore, με read-along |
| Είσοδοι | ο resolver απαιτεί πλέον μετρημένη πόρτα· 35 πόρτες εκκρεμούν |
| Γλώσσες | 6, πραγματικά: ελληνικά και αγγλικά μέσα στις πόλεις, γερμανικά, γαλλικά, ισπανικά και ιταλικά ως overlays στο `data/world/i18n/` |

Δηλαδή: ο σκελετός και η φωνή υπάρχουν, το περιεχόμενο προχωρά γρήγορα, και το
πρόβλημα δεν είναι πια η υποδομή αλλά η ακρίβεια.

---

## Τι κρατάμε

Countries · Cities · Map · Landmarks/POIs · οι πληροφορίες αξιοθέατων · το υπάρχον
Explore UI · οι χαρακτήρες WiseBot · ο travel/educational χαρακτήρας · τα quizzes όπου
ήδη υπάρχουν.

## Τι διορθώνουμε αμέσως

Λάθος και διπλά pins · συντεταγμένες **εισόδων** (όχι κέντρων κτιρίων) · ποιότητα
descriptions · πηγές δεδομένων · SEO του Explore · mobile UX · ταχύτητα · navigation
χώρα → πόλη → αξιοθέατο.

## Τι σταματάμε προσωρινά

Μαζικό ανέβασμα χωρών και πόλεων · χιλιάδες POIs χωρίς έλεγχο · AI-generated content
χωρίς validation · copy από hop-on/hop-off εταιρείες · features άσχετα με το Explore ·
flights · hotels · ticket marketplace · social network · AR/VR · creator marketplace.

**Πρώτα ο πυρήνας, μετά scale.**

## Τι προσθέτουμε

World Passport (Country/City/Museum stamps) · XP · achievements · badges · collections ·
artifacts · City Missions · quests · riddles · treasure hunts · final challenges ·
Family Mode · age modes · Museum Mode · Offline Mode · audio stories · multi-language ·
smart routes («έχω 1–2 ώρες», family, rainy day, free, hidden gems).

---

## Τι αλλάζει από τις αποφάσεις της 10–11 Σεπτεμβρίου

Αυτό είναι το κομμάτι που πρέπει να διαβάσουν και τα δύο τρέχοντα sessions.

**1. Το εύρος παγώνει.** Το [COUNTRIES.md](COUNTRIES.md) λέει 20 χώρες / 45 πόλεις /
~600 μέρη. Το brief λέει ρητά «σταματάμε το μαζικό ανέβασμα πόλεων». Οι δύο δεν
συμβιβάζονται. **Ισχύει το brief**: το COUNTRIES.md υποβιβάζεται από πρόγραμμα
παραγωγής σε *σειρά προτεραιότητας για μετά το pilot*. Παράγουμε τρεις πόλεις και τις
κάνουμε τέλειες.

Ποιες τρεις, άλλαξε στην πράξη. Το αρχικό σχέδιο έλεγε Αθήνα, Λισαβόνα, Πόρτο. Αυτό
που χτίστηκε είναι **Ελλάδα πρώτα**: Αθήνα, Θεσσαλονίκη, Ηράκλειο, με τη Ρόδο να
ακολουθεί. Το Πόρτο έχει μόνο συντεταγμένες και η Λισαβόνα τίποτα. Η αλλαγή είναι
υπερασπίσιμη, το κοινό είναι ελληνικό και το κόστος έρευνας το μικρότερο, αλλά μέχρι
τώρα δεν την είχε δηλώσει κανείς.

**2. Οι γλώσσες γίνονται 12, αλλά όχι τώρα.** Σήμερα `el en de fr es it`. Το brief
προσθέτει πορτογαλικά, κινέζικα, ιαπωνικά, κορεάτικα, αραβικά, ολλανδικά. Η επέκταση
του `WorldLang` είναι μονόγραμμη· το κόστος είναι το περιεχόμενο. **Καμία νέα γλώσσα
πριν τελειώσουν οι τρεις πόλεις σε `el` + `en`.**

**3. Το Quest Engine είναι νέα δουλειά, όχι παραλλαγή του υπάρχοντος.** Σήμερα το
μοντέλο ξέρει `Question` και `Riddle`. Το brief ζητά μηχανή που παράγει missions,
riddles, find-it, observation games, photo challenges, audio challenges και final
quizzes **χωρίς νέο development κάθε φορά**. Αυτό σημαίνει: ένας τύπος `Mission` με
discriminated union ανά είδος, ένας renderer ανά είδος, και το περιεχόμενο σε data.
Αν μπει σαν ad-hoc component ανά παιχνίδι, το βήμα «15 πόλεις» γίνεται αδύνατο.

**4. Το Passport αποκτά τρίτο επίπεδο.** Σήμερα: σφραγίδα όταν ανοίγεις χώρα, seal
όταν τελειώνεις πόλη, seal όταν τελειώνεις χώρα. Το brief θέλει
**Visited → Explored → Mastered**. Το «Mastered» δεν υπάρχει πουθενά ακόμη και πρέπει
να οριστεί πριν γραφτεί περιεχόμενο, γιατί ορίζει τι μετράει ως «τέλειωσα».

**5. Η ανοιχτή παραδοχή που πρέπει να κλείσει πρώτη.** Τα specs γράφτηκαν με την
παραδοχή «το ταξίδι είναι φανταστικό — ποτέ geolocation, το παιδί είναι στο σπίτι».
Το brief όμως ζητά Museum Mode, find-it, observation games, photo challenges και
Offline Mode: όλα προϋποθέτουν ότι **το παιδί στέκεται μπροστά στο πράγμα**. Είναι
δύο διαφορετικά προϊόντα με το ίδιο περιεχόμενο. Δες «Ανοιχτές αποφάσεις».

---

## Η σειρά που δεν αλλάζει

| # | Βήμα | Τι σημαίνει συγκεκριμένα εδώ |
| --- | --- | --- |
| 1 | **Audit** | Τι υπάρχει σήμερα στο Explore, τι είναι σωστό, τι πετιέται |
| 2 | **Locations** | Κάθε pin resolved από Wikidata, grade ≥ C, μηδέν διπλά, είσοδοι όχι κέντρα |
| 3 | **Quest Engine** | Data-driven missions — το πιο σημαντικό τεχνικό κομμάτι |
| 4 | **World Passport** | Visited / Explored / Mastered, σε χώρα, πόλη, μουσείο |
| 5 | **Rewards** | XP, levels, badges, stamps, collections, unlocks |
| 6 | **3 pilot cities** | Αθήνα, Λισαβόνα, Πόρτο — πλήρεις, όχι δείγματα |
| 7 | **Museum Mode** | Από μόνο του μπορεί να γίνει προϊόν |
| 8 | **Languages** | Πρώτα οι έξι, μετά οι υπόλοιπες |
| 9 | **Family Mode** | Ένα device, παιδί + γονιός, cooperative challenges |
| 10 | **Offline Mode** | |
| 11 | **Testing με πραγματικές οικογένειες** | |
| 12 | **Διορθώσεις βάσει πραγματικής χρήσης** | |
| 13 | **15 gold cities** | Με τη σειρά του COUNTRIES.md |
| 14 | **Launch + SEO + marketing** | |
| 15 | **Museum & hotel partnerships → B2B → creator marketplace** | |

Σε μία γραμμή: **FIX → BUILD → PERFECT → TEST → IMPROVE → SCALE → MONETIZE →
DISTRIBUTE → B2B → GLOBAL.**

Τα έξι που ξεκινούν αύριο: **Audit → Locations → Quest Engine → Passport → Rewards →
3 Pilot Cities.** Όλα τα υπόλοιπα περιμένουν.

---

## Content strategy

Λιγότερη εγκυκλοπαίδεια, περισσότερο storytelling. Λιγότερο διάβασμα, περισσότερη
δράση. Λιγότερο «δες πληροφορίες», περισσότερο «βρες το». Λιγότερο passive learning,
περισσότερο discovery.

Οι χαρακτήρες — WiseBot, Link, Crocus, Sparken, Pencillo — μπαίνουν παντού, ο καθένας
με δικό του ρόλο μέσα στα adventures. Έτσι το Explore δένει με το υπόλοιπο σύμπαν.

Family strategy: δεν φτιάχνουμε εφαρμογή για το παιδί, φτιάχνουμε εμπειρία
**παιδί + γονιός + πόλη**.

---

## Business model

- **Free** — ο βασικός κόσμος, οι χώρες, το passport, επιλεγμένα missions.
- **Premium** — city adventures, museum adventures, offline, premium quests, special rewards.
- **Subscription** — WiseBot World Family Pass, ετήσια πρόσβαση σε όλα.
- **B2B** — μουσεία, ξενοδοχεία, σχολεία, tourism boards, tour operators.
- **Αργότερα** — creator marketplace για local guides και εκπαιδευτικούς.

Προσοχή: το iOS shell **δεν πουλάει** (απόφαση 3.1.1, `utils/platform.ts`). Ό,τι
μοντέλο κι αν κλειδώσει, το gating υπάρχει ήδη και πρέπει να το σεβαστεί.

---

## Τι μετράμε

Users που ξεκινούν mission · missions completed · routes completed · cities completed ·
museums completed · passport stamps · **second city started** · repeat usage · paid
conversion · family satisfaction.

Και πάνω απ' όλα: **«Το παιδί ζήτησε να κάνει άλλη μία αποστολή;»**

---

## Product rules

Quality > quantity · fun > information overload · missions > articles · verified
locations > thousands of locations · child safety > growth hacks · original content >
copying · simple UX > feature overload · real-world exploration > screen time.

---

## Ανοιχτές αποφάσεις — χρειάζονται απάντηση πριν γραφτεί περιεχόμενο

1. **Το παιδί είναι στο σπίτι ή στην πόλη;** Αν Museum Mode και photo challenges
   σημαίνουν «στέκομαι μπροστά στο έκθεμα», αλλάζει η θεμελιώδης παραδοχή των specs
   («ποτέ geolocation, το ταξίδι είναι φανταστικό») και αλλάζει και το
   `Permissions-Policy` header στο `vercel.json:38`. Αν σημαίνουν «ταξιδεύω από τον
   καναπέ», τα specs στέκουν όπως είναι. **Αυτή η μία απάντηση καθορίζει τα βήματα
   3, 7, 9 και 10.**
2. **Πόσα μέρη ανά πόλη;** 8, 15 ή 30 — ορίζει αν μια πόλη είναι ένα απόγευμα ή ένας
   μήνας, και πολλαπλασιάζεται επί τρεις πόλεις × έξι γλώσσες.
3. **Τι σημαίνει «Mastered»;** Όλα τα μέρη; Όλα τα missions; Τέλειο σκορ;
4. **Το World progress πάει Supabase από τη v1** ή `localStorage` όπως τα mini-games;
   Το Family Mode με ένα device το κάνει σοβαρότερο ερώτημα απ' ό,τι φαινόταν.
