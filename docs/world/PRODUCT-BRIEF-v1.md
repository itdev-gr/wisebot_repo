# WiseBot World — Master Product Brief v1

Γράφτηκε από τον ιδιοκτήτη (12/9/2026) ως το έγγραφο που δίνεται αυτούσιο σε developers,
product designer, content team και επενδυτή. Οι «Αποφάσεις» στην αρχή είναι το πώς το
διαβάζουμε απέναντι σε ό,τι έχει ήδη χτιστεί (δες [STATUS.md](STATUS.md)). Ό,τι δεν
αναφέρεται στις αποφάσεις ισχύει όπως γράφεται.

## Αποφάσεις πάνω στο brief (12/9, roadmap session)

| Ενότητα | Απόφαση |
| --- | --- |
| §3 Positioning | Το όνομα του μενού είναι «WiseBot World». Δεν υπάρχει πια χωριστό «Explore» tab. |
| §7 Location model | Ισχύει. Υπάρχουν ήδη: sources, confidence A/B/C/D, anchor, door, verifiedAt. Προστίθενται (P1): `entrance` ως χωριστό ζεύγος, `aliases`, `license`, `manualVerified/by`, `openingHoursSource`. Κανόνας «μόνο A/B σε quests»: ισχύει για κάθε νέα πόλη· στην Ελλάδα τα C αναβαθμίζονται με περπάτημα του ιδιοκτήτη, δεν αφαιρούνται. |
| §8 GPS | Ισχύει. Υλοποιημένο: 60 m (120 m για περιοχές) + ανοχή ακρίβειας έως 40 m. Αλλαγή κειμένου (P1): όταν η ακρίβεια είναι κακή, «Είσαι κοντά, κοίτα γύρω για…», όχι «δεν είσαι εκεί». Μέσα σε μουσείο το GPS δεν χρησιμοποιείται ποτέ (ήδη). |
| §9 CMS | Αρχιτεκτονική Country→City→Route→Stop→Mission υπάρχει ως TypeScript modules + scripts. CMS με UI: P2. Η «content team» σήμερα είναι agents με tests ως gate. |
| §10 Mission types | Σήμερα 4 (ερώτηση, έκθεμα, αίνιγμα, «είμαι εδώ»). Τα υπόλοιπα **μετά το πρώτο field test**, όταν ξέρουμε ποια 3 ζητούν τα παιδιά. Photo challenge: μόνο on-device, ποτέ upload. |
| §11 Χαρακτήρες | Ισχύει, μετά το test. Ένας χαρακτήρας ανά είδος αποστολής. |
| §12–13 Passport | L1 είσοδος ✅, L2 πόλη ✅, L4 χώρα ✅. L3 σφραγίδα μουσείου: P1. Σελίδα στατιστικών: P1. |
| §16 Action before information | Ισχύει για τη ροή επί τόπου: «Είμαι εδώ» → βρες/μέτρα → ιστορία → ερώτηση. Εφαρμόζεται μαζί με το Quest Engine. Από το σπίτι η ιστορία διαβάζεται ελεύθερα. |
| §17 Routes | 18 διαδρομές υπάρχουν. Οι ονομαστικές παραλλαγές (60 λεπτά, βροχή, δωρεάν, καρότσι) με 3 πεδία στο Place, μετά το test. |
| §20 AI auto-publish | Ισχύει. Η πύλη σήμερα: 120+ invariants + test μήκους απάντησης + ανάγνωση από ενήλικα ανά πόλη. P1: πηγή ανά ιστορικό γεγονός στα facts των νέων πόλεων. |
| §21 Γλώσσες | Σειρά: EN, EL, FR, DE, ES, IT (ζωντανές, 6). PT με Λισαβόνα, NL με Άμστερνταμ. Κινέζικα, Ιαπωνικά, Αραβικά, Κορεατικά: **όχι το 2026**. Flag `machine_translated`: P1. Auto-detect συσκευής: ήδη. |
| §22–23 Πόλεις | Ο πιλότος είναι η **Αθήνα** (καθημερινό QA) + Παρίσι, Ρώμη, Λονδίνο, Άμστερνταμ (έτοιμες). Λισαβόνα/Πόρτο 7η–8η. Κωνσταντινούπολη, Βερολίνο, Βουδαπέστη ανεβαίνουν γιατί υπάρχει πρώτη ύλη. Νέα Υόρκη, Τόκιο, Ντουμπάι, Φλωρεντία, Μαδρίτη μετά τα 15. |
| §24 / §43 Gold standard, Definition of Done | Ισχύουν ως το «Gold». Οι σημερινές πόλεις είναι «Silver» μέχρι το field test. «Offline works»: P2, δεν μπλοκάρει. |
| §25 Offline | P2. Tiles και ήχος ήδη cache-άρονται μετά την πρώτη χρήση. |
| §26 «Έχω 2 ώρες» | P1, μετά το test. |
| §27 AI guide | Μόνο grounded σε validated περιεχόμενο, ποτέ ελεύθερο chat για παιδιά. Όχι τώρα. |
| §28–29 Privacy, απαγορεύσεις | Ισχύουν πλήρως. Ήδη: καμία αποθήκευση θέσης, καμία φωτογραφία σε server, κανένα chat. |
| §30–31 Artifacts, Family mode | Μετά το test. Καμία τύχη στις ανταμοιβές. |
| §36 Τιμές | Δοκιμάζουμε: City Adventure €4,99, Greece Pack €9,99, Family Pass λίστα **€39,99/έτος**, Founding Families €24,99 για τις 100 πρώτες. iOS δείχνει μόνο δωρεάν (Apple 3.1.3b). Paywall όχι πριν τον Νοέμβριο. |
| §39 SEO | Τα URLs είναι `/world/...` (ήδη indexed, 103 σελίδες). FAQ και «family information» blocks: P1. |
| §42 90 ημέρες | Phase A έγινε. Phase B = Αθήνα + οι 4 έτοιμες. Phase C: Quick/Explorer/Master παραλλαγές στα 20 μουσεία που υπάρχουν. Phase D τρέχει ήδη ελεγχόμενα, μία πόλη τη φορά. |
| Λειτουργικός κανόνας | Ένα session ανά φάκελο· agents μόνο σε worktrees· `git fetch` στην αρχή· generated αρχεία ποτέ με το χέρι. |

**Επόμενο βήμα:** το session «World engine & release» μετατρέπει αυτό το brief σε
`docs/world/TICKETS.md` (P0/P1/P2, με acceptance criteria και πεδία), με βάση τις παραπάνω
αποφάσεις και το STATUS.md, ώστε τίποτα να μην ερμηνεύεται αλλιώς.

---

## Product thesis

Turn the real world into a game worth exploring.

Το WiseBot World μετατρέπει κάθε Χώρα → Πόλη → Αξιοθέατο → Μουσείο → Ιστορία σε:
Άφιξη → Αποστολή → Ανακάλυψη → Μάθηση → Reward → Συλλογή → Επόμενη περιπέτεια.

Το παιδί δεν πρέπει να νιώθει ότι κάνει ξενάγηση. Πρέπει να λέει: «Πού πάμε μετά; Ποια
είναι η επόμενη αποστολή;»

## 1. Το πρόβλημα που λύνουμε

Μια οικογένεια ταξιδεύει και χρησιμοποιεί 5–10 διαφορετικά πράγματα: Google Maps για το
πού, Google για το τι, Tripadvisor, audio guide σε κάθε μουσείο, hop-on/hop-off για routes,
YouTube/TikTok για ιδέες, παιχνίδια στο κινητό για να μη βαρεθεί το παιδί. Και το βασικό
πρόβλημα παραμένει: το παιδί δεν έχει λόγο να ενδιαφερθεί. Το WiseBot δεν ανταγωνίζεται το
Google Maps ως χάρτης. Γίνεται το game layer πάνω από τον πραγματικό κόσμο.

## 2. Market validation

Δεν χρειάζεται να αποδείξουμε ότι οι άνθρωποι παίζουν city games. Το Questo: 1M+ explorers,
1.000+ πόλεις, 3.000+ quests, 30.000+ creators, quests από €7,99. Τα μουσεία κινούνται προς
τα εκεί (Μουσείο Ακρόπολης: object recognition, family game 90 λεπτών, 29 γλώσσες). Έρευνες
σε μουσεία: gamified guide ≈ 33% περισσότερα εκθέματα, ≈ 40% μεγαλύτερη διάρκεια. Το concept
έχει validation· το στοίχημα είναι η εκτέλεση και η ένωση όσων είναι κατακερματισμένα.

## 3. Positioning

WISEBOT WORLD — Explore. Play. Learn. Collect. Το όνομα του συνολικού προϊόντος.

## 4. Competitive advantage

Δεν γινόμαστε καλύτερο Questo, Smartify ή Google Maps για παιδιά. Ενώνουμε city
exploration, μουσεία, family gaming, μάθηση, WiseBot χαρακτήρες, World Passport,
XP/achievements, collectibles, πολυγλωσσία και τον φυσικό κόσμο σε ένα οικοσύστημα. Το
ταξίδι δεν τελειώνει όταν κλείσει η εφαρμογή: η πρόοδος μένει στο παιδί (χώρες, πόλεις,
μουσεία, XP, achievements, passport, artifacts, badges, missions). Σταδιακά φτιάχνουμε
digital identity εξερευνητή.

## 5. Το core loop (ιερό, δεν αλλάζει χωρίς product approval)

ARRIVE → COUNTRY STAMP → CHOOSE CITY ADVENTURE → WALK → DISCOVER → SOLVE → LEARN →
GET XP / ITEM → UNLOCK NEXT MISSION → COMPLETE CITY → CITY STAMP → NEXT ADVENTURE.

## 6. Πρώτη εντολή προς developers

STOP adding random countries and POIs temporarily. Πριν πολλαπλασιάσουμε το content,
φτιάχνουμε τη μηχανή. 5.000 σημεία με προβλήματα = πολλαπλασιασμένο τεχνικό χρέος.

## 7. P0 — Location Integrity Engine

Οι εκκλησίες/αγορά δύο στενά μακριά είναι P0 blocker. Κάθε POI: `poi_id`, `official_name`,
`local_name`, `aliases`, `country`, `city`, `latitude`, `longitude`, `entrance_latitude`,
`entrance_longitude`, `location_confidence`, `source_1`, `source_2`, `last_verified`,
`manual_verified`, `verification_user`, `opening_hours_source`, `content_source`, `license`.

Επίπεδα: **A** field-verified entrance · **B** δύο ανεξάρτητες πηγές συμφωνούν · **C** μία
πηγή (στον χάρτη, όχι mission destination) · **D** AI/unverified (draft, δεν δημοσιεύεται).
Μόνο A και B μέσα σε quests. Για μεγάλα κτίρια αποθηκεύουμε την είσοδο, όχι το κέντρο.

## 8. GPS / Geofence

Καμία αποστολή δεν απαιτεί να πατήσει το παιδί πάνω στο pin. Outdoor unlock στα 50–100 m
ανάλογα με την πυκνότητα, λαμβάνοντας υπόψη το GPS accuracy. Αν η ακρίβεια είναι κακή:
«Είσαι κοντά! Κοίτα γύρω για…», όχι «δεν είσαι εκεί». Indoor: απαγορεύεται να θεωρούμε
το GPS αξιόπιστο μέσα σε μουσείο. Museum navigation: sequence, visual clues, floor/zone,
QR, NFC, object recognition, αργότερα beacon/UWB με partnership.

## 9. P0 — Content / Quest Engine

Ενιαία αρχιτεκτονική Country → City → Experience → Route → Stop → Mission → Reward. Όχι
hardcoded ανά πόλη. Αύριο φτιάχνουμε Paris χωρίς developer· η content team από CMS.

## 10. Mission types

FIND IT · OBSERVE · MULTIPLE CHOICE · RIDDLE · VISUAL MATCH · AUDIO STORY (20–60 s) ·
TRUE/FALSE · ORDER · PHOTO/CAMERA (μόνο όπου επιτρέπεται, on-device) · FIND THE DETAIL ·
CREATIVE MISSION · FINAL BOSS (5 ερωτήσεις στο τέλος μιας route).

## 11. Οι WiseBot χαρακτήρες μπαίνουν μέσα

Χτίζουμε IP. WiseBot → γνώση/αφήγηση · Link → χάρτες/σύνδεση clues · Crocus → ιστορία/
πολιτισμός/φύση · Sparken → προκλήσεις/δράση · Pencillo → δημιουργικότητα/παρατήρηση.
Κάθε χαρακτήρας ένα είδος αποστολής. Συνδέει Books, Academy, World, Board Game, Online Game.

## 12. P0 — World Passport

Κεντρικό navigation element, όχι μικρό badge. **L1 Country arrival stamp** (με το άνοιγμα
της χώρας, χωρίς background tracking: WELCOME TO PORTUGAL, THUMP!). **L2 City stamp** (μόνο
με εξερεύνηση: π.χ. 5 landmarks, 10 missions, final quiz). **L3 Museum stamp** (Louvre
Explorer). **L4 Country Master** (αρκετά adventures). Σελίδα passport: χώρες 8/195, πόλεις
17, μουσεία 12, missions 387, χιλιόμετρα 143, artifacts 46, rare badges 7.

## 13. Το Passport πρέπει να είναι όμορφο

Σαν πραγματικό διαβατήριο: σελίδες, σφραγίδες, ημερομηνίες, σχέδια ανά χώρα, διαφορετικές
σφραγίδες πόλης και μουσείου, rare και seasonal stamps. Όχι flat list με badges.

## 14. P1 — Museum Mode

Standalone killer feature. ⚡ Quick 20 min · 🧭 Explorer 45 min · 🏆 Master 90 min. Μέσα:
«Βρες το άγαλμα» → «Κοίτα το κεφάλι» → «Τι λείπει;» → απάντηση → μικρή ιστορία → +50 XP →
επόμενο έκθεμα. Κάθε μουσείο: duration, age range, difficulty, accessibility, photography
allowed, floor, zone, mission order, alternate route, audio, text, visual clue, reward.

## 15. Age modes

Junior 6–8 (εικόνες, audio first, find/count/match) · Explorer 9–12 (γρίφοι, ιστορία,
puzzles) · Family 6–99 (cooperative) · Teen/Master αργότερα.

## 16. Η βασική UX αρχή: action before information

Λάθος: 500 λέξεις για το Colosseum και μετά quiz. Σωστό: «Βρες τις μεγάλες καμάρες» → «Πόσες
βλέπεις;» → απάντηση → «Αυτές οι καμάρες…» → 20 s ιστορία. Πρώτα περιέργεια, μετά γνώση.
Όχι δύσκολα quizzes για να φαίνεται «εκπαιδευτικό».

## 17. Routes

WiseBot Essentials · Family Adventure · 60-Minute Challenge · Half-Day · Rainy Day (indoor) ·
Museum Day · Ancient City · Hidden Secrets · Night Explorer · Free Adventure · Stroller
Friendly · Accessible Route.

## 18. Hop-on/hop-off data

Απαγορεύεται scraping/αντιγραφή routes, descriptions, graphics ή βάσης δεδομένων (Big Bus,
City Sightseeing). Κάνουμε: μελετάμε ποιες περιοχές εξυπηρετούν, φτιάχνουμε δικό μας route
graph, τα POIs από νόμιμες πηγές.

## 19. Data sources

Wikidata (CC0), GeoNames (με attribution), OpenStreetMap (ODbL, attribution/share-alike),
official tourism boards, official museum data, licensed APIs, manual WiseBot verification.
Κάθε record: `source`, `source_url`, `license`, `retrieved_at`, `verified_at`. Καμία βάση
χωρίς provenance.

## 20. Απαγορεύεται AI auto-publish

AI: generate, translate, rewrite, suggest. Αλλά AI → DRAFT → VALIDATION → PUBLISH. Ιστορικό
γεγονός χωρίς αξιόπιστη πηγή δεν δημοσιεύεται.

## 21. P0 — Languages

Όχι 30 σημαίες. 🌐 selector, auto-detect συσκευής. Human-QA core: EN, EL, ES, FR, DE, IT,
PT, ZH, JA, AR, KO, NL. Μετά AI translation layer με flag `human_verified` / `machine_translated`.

## 22. Ποιες πόλεις

Όχι 100. Gold pilot: πόλεις που γίνονται τέλειες πρώτα, με πραγματικό field testing και
καθημερινό QA στην Αθήνα.

## 23. Phase 1 — 15 Gold Cities

Athens, Lisbon, Porto, London, Paris, Rome, Florence, Barcelona, Madrid, Amsterdam, Vienna,
Prague, New York, Tokyo, Dubai. Μετά: Istanbul, Berlin, Venice, Milan, Budapest, Copenhagen,
Stockholm, Helsinki, Kyoto, Osaka, Singapore, Seoul, Bangkok, Washington DC, Orlando, San
Francisco, Edinburgh, Brussels. Κριτήριο: tourism × family travel × density POIs × museums ×
walkability × stories × repeatable missions.

## 24. Gold City Standard

25–40 verified POIs, 3 curated routes, 1 Family Story Adventure, 30+ missions, 1 Final
Challenge, 1 City Stamp, 3 achievements, 1 collectible set, 3+ museum/indoor options, core
languages, verified locations, field test. 15 εξαιρετικές πόλεις > 300 μισοτελειωμένες.

## 25. Offline mode

«Download Porto Adventure»: tiles, quests, audio, εικόνες, routes, missions.

## 26. Το κουμπί «Έχω 2 ώρες»

I HAVE: 30 min / 1 h / 2 h / half day / full day. WITH: kids / stroller / teens / adults.
MOOD: history / fun / food / museums / hidden gems. Αργότερα: καιρός, ωράρια, πλήθος,
απόσταση, εισιτήρια.

## 27. Personal AI guide

Όχι τώρα. Αργότερα «Ask WiseBot», grounded σε validated WiseBot knowledge.

## 28. Child privacy — non-negotiable

Parent account, child profiles χωρίς email. Καμία ιστορία θέσης. Location μόνο για «είσαι
κοντά», αποθηκεύουμε «Completed Porto», όχι ώρα/συντεταγμένες. Camera on-device. Όχι
δημόσια προφίλ, DMs, δημόσια θέση, φωτογραφίες παιδιών, open chat, behavioral ads.

## 29. Απαγορεύεται επίσης (χωρίς product approval)

100 νέες πόλεις πριν τα P0 · POI χωρίς πηγή · mission χωρίς verified location · AI κείμενο
απευθείας production · αντιγραφή από tour operators/competitors · Wikipedia dump · indoor
mission μόνο με GPS · child-location history · δημόσιο leaderboard με ονόματα · pop-up ads
μέσα σε mission · dark patterns · paid loot boxes · social/chat · AR «επειδή φαίνεται ωραίο» ·
3D world map · hotel/flights/ticket engines · creator marketplace τώρα.

## 30. Rewards

Όχι «+10 points». XP, σφραγίδες χώρας/πόλης/μουσείου, artifacts (🏺 Greek Vase, 🛡️ Roman
Shield, 🗼 Eiffel Token), collections (Ancient Greece 4/10, World Wonders 2/7), character
unlocks, passport cosmetics, rare stamps.

## 31. Family mode

Ένα κινητό, όλη η οικογένεια. «Eleftheria, βρες… Alexandra, μέτρα… Filippos, λύσε…». Ο
γονιός συμμετέχει αντί να δίνει το κινητό.

## 32. Content rule

Κάθε 2–3 λεπτά συμβαίνει κάτι. Σε μεγάλη απόσταση: mini missions, audio story, spot
challenges, family questions.

## 33. Boring test

Θα το έκανε ένα παιδί χωρίς να το πιέσει ο γονιός; Αν όχι, rewrite.

## 34. Analytics

North Star: Completed Real-World Missions per Family Trip. Επίσης: mission started/
completed/skipped, hint used, route completed, time to first mission, distance, city/museum
completed, passport opened, stamp earned, next adventure started, γλώσσα, age mode,
free→paid, second city.

## 35. Internal product targets

First mission start 60% · mission completion 75% · route completion 40% · pin-error reports
< 0,5% · crash-free 99,5% · parent rating 4,5/5 · δεύτερη πόλη 25%. Ποιοτικό KPI στο
post-trip survey: «Ζήτησε το παιδί σου άλλη μία αποστολή;»

## 36. Monetization

FREE: world map, country passport, arrival stamps, βασικές πληροφορίες, πρώτες αποστολές,
επιλεγμένα δωρεάν adventures. CITY ADVENTURE: test €4,99–7,99. FAMILY WORLD PASS: test
€39,99–59,99/έτος (full adventures, πολλά παιδιά, offline, premium passport, museum
missions, AI guide).

## 37. B2B

Μετά το B2C validation: Museums («WiseBot Museum Edition»: το μουσείο δίνει κατόψεις,
εγκεκριμένο περιεχόμενο, εικόνες, exhibit IDs· εμείς engine, γλώσσες, quests, analytics),
Hotels (QR στο δωμάτιο, affiliate), Tourism Boards («Explore Portugal with WiseBot»),
Schools (field trip mode, teacher dashboard).

## 38. Αργότερα: creator platform

Local guides, δάσκαλοι, ιστορικοί, μουσεία δημιουργούν adventures με QA και revenue share.
Όχι τώρα: πρώτα το template ποιότητας.

## 39. SEO engine

Κάθε entity με indexable URL (χώρα, πόλη, POI, μουσείο): title, meta, structured data,
FAQ, family information, σύντομο εκπαιδευτικό περιεχόμενο, related missions, nearby POIs.

## 40. Go-to-market

Search intent («things to do in Paris with kids»), TikTok/Reels («Μπαμπά βρήκα το επόμενο
clue!»), hotel και museum partnerships, family travel creators, το υπάρχον οικοσύστημα
(Books → World → Academy → Game → Books).

## 41. Το moat

Verified World POI Graph · mission graph · character IP · progression system · passport
history · multilingual content system · museum partnerships · family behavior dataset
(privacy-preserving).

## 42. 90-day execution plan

A Foundation (location, verification, CMS, mission/passport/reward engines, languages,
analytics, privacy) · B 3 perfect cities με πραγματικά walks · C Museum MVP (20/45/90 min) ·
D 15-city expansion μόνο όταν κλειδώσει το template.

## 43. Definition of Done ανά πόλη

Critical POIs A/B · no duplicates · entrances checked · route tested physically · Family
Adventure end-to-end · rewards work · stamp works · languages · audio · offline · analytics ·
accessibility data · no unsupported claims · no copied material · family beta completed.

## 44. Τρεις μηχανές εσόδων

A B2C (συνδρομές, city passes, premium quests) · B B2B (μουσεία, ξενοδοχεία, tourism
boards, σχολεία) · C Marketplace (αργότερα, commission).

## 45–46. Investor story

«Children experience the world through screens. We are using the screen to send them back
into the real world.» Every country a collectible, every city a game, every museum an
adventure, every trip learning, every child a lifelong Explorer Passport. Δείξε του ένα
κινητό: PORTUGAL, THUMP, PORTO ADVENTURE, «Explorer, έχω χάσει το σύμβολο του Porto»,
περπάτημα, clue, reward, γέλιο, μάθηση, σφραγίδα, «Next adventure: Paris».

## 47. Τι δεν κάνουμε

Δεν κυνηγάμε features, αριθμό POIs, αριθμό χωρών. Δεν γινόμαστε Expedia ή Google Maps. Δεν
αντιγράφουμε hop-on/hop-off. Δεν φτιάχνουμε εγκυκλοπαίδεια. Χτίζουμε behavior: EXPLORE ONE MORE.

## 48. Η τελική εντολή στην ομάδα

Ό,τι χτίζουμε απαντά σε μία από τέσσερις ερωτήσεις: βοηθάει το παιδί να ανακαλύψει; κάνει
την εμπειρία πιο διασκεδαστική; του μαθαίνει κάτι χωρίς να νιώθει μάθημα; το κάνει να θέλει
την επόμενη αποστολή; Αν όχι, δεν είναι priority. Σειρά: Location Integrity → Quest Engine →
Passport → Rewards → Museum Mode → Languages → 3 Perfect Cities → 15 Gold Cities. Καμία
θυσία ποιότητας για αριθμούς. Κάθε location verified, κάθε γεγονός με πηγή, κάθε mission
playable, κάθε προφίλ privacy-safe. Κάθε ολοκληρωμένη πόλη αφήνει την αίσθηση: «Θέλω να
κάνω άλλη μία.»

**PRODUCT NORTH STAR — WISEBOT WORLD: Don't just visit the world. Unlock it.**
