# WiseBot — Handoff

Start here. Written at the end of the setup session (15–16 Αυγούστου 2026), when the new
MacBook had no toolchain and no local project context.

---

## ⚡ STATUS 30 Αυγούστου 2026 — iOS: Xcode στημένο, app τρέχει σε simulator, 3.1.1 gating live

**Apple Developer εγκρίθηκε (κατά τον ιδιοκτήτη)· Xcode 26.6 εγκαταστάθηκε** (πλήρες,
με iOS 26.5 platform). Το Capacitor shell χτίζει και τρέχει στο iPhone 17 Pro
simulator — φορτώνει το wisebot.gr χωρίς browser UI. Assets: WiseBot κουκουβάγια
ως AppIcon 1024 (αντί για το default Capacitor Χ), splash σε #0B0F1A. Info.plist:
προστέθηκαν NSCamera/NSPhotoLibraryUsageDescription (το photo upload θα κράσαρε).

**Απόφαση 3.1.1 (ελήφθη: «no purchase» v1):** το iOS app ΔΕΝ πουλάει credits.
Νέο `utils/platform.ts` → `isIosApp()` (ανιχνεύει το injected window.Capacitor).
Μέσα στο iOS shell: /store χωρίς πακέτα/τιμές € (δείχνει earn-by-reading),
κρυφό το store item στο nav (Layout), landing χωρίς αναφορά €4,99 και χωρίς
links «Τιμές». Web/Android αμετάβλητα. Live στο wisebot.gr (πρέπει να είναι
deployed πριν δει το app ο reviewer). Δοκιμάστηκε με stub του Capacitor σε
localhost — gating ΟΚ, web έκδοση ανέπαφη.

**App Store screenshots έτοιμα** στα ακριβή μεγέθη: `store/assets/ios/iphone-69`
(1320×2868) + `ipad-13` (2064×2752), 6 σελίδες το καθένα, από live wisebot.gr με
σύγχρονο puppeteer (το repo έχει puppeteer 1.20 — ΑΧΡΗΣΤΟ για αυτό· στήθηκε
fresh στο scratchpad με `npx puppeteer browsers install chrome`).

**Εκκρεμεί για το upload:** (α) sign-in του ιδιοκτήτη στο Xcode → Settings →
Accounts (χωρίς αυτό 0 signing identities — τσεκάρεται με
`security find-identity -v -p codesigning`), (β) DEVELOPMENT_TEAM στο project
μόλις υπάρξει team, (γ) App Store Connect: δημιουργία app record
gr.wisebot.academy + Privacy Nutrition (δήλωση GA4!) — ΟΧΙ Kids Category για το
v1, (δ) Archive → Upload, (ε) review notes για 4.2: να αναφερθούν native splash/
status bar/read-along, με plan B το bundling του build τοπικά.

---

## ⚡ STATUS 29 Αυγούστου 2026 — Book 3 live· Android/TV audit: 17 fixes

**Book 3 φωνές παιδιών (live).** Τα DJI ονόματα ήταν ΛΑΘΟΣ ως προς το περιεχόμενο
(το «page 2» είχε την αρχή της σελίδας 1 κ.ο.κ.) — χαρτογραφήθηκαν με whisper ΠΡΙΝ
το pipeline· τα δύο κομμάτια της σελίδας 1 ενώθηκαν σε WAV. 88-93% exact match,
5/5 σελίδες aligned. Πάντα μεταγραφή-πρώτα σε νέο βιβλίο.

**Android TV (αναφορά ιδιοκτήτη): αποσυγχρονισμός read-along + αόρατα κουμπιά.**
Αιτίες: (α) audio-cache χωρίς RangeRequestsPlugin — cache hit απαντούσε Range
request με πλήρες 200, τα TV/WebView media stacks χάνουν το playhead από τη
ΔΕΥΤΕΡΗ ακρόαση (γι' αυτό «πότε δουλεύει πότε όχι»)· προστέθηκε rangeRequests.
(β) TV overscan ~5%/άκρη έκοβε τη μπάρα ΑΚΟΥΣΕ/ΤΑΧΥΤΗΤΑ/ΣΥΝΕΧΟΜΕΝΗ στο 90vh —
οι δύο readers (Ebooks+Academy) caps σε lg:86vh. Σε Android Chrome profile ο
συγχρονισμός μετρήθηκε σωστός (bracket περιέχει currentTime).

**Audit 6 λεντίλων με adversarial verify → 17 επιβεβαιωμένα, όλα διορθωμένα
(commit dc7ca98):** speechSynthesis παντού μέσω safe accessor (το WebView του
μελλοντικού store app ΔΕΝ το έχει καθόλου — crash σε page turn)· pause=cancel+
re-speak (το Android system TTS δεν κάνει pause)· fatal TTS errors σταματούν με
μήνυμα· 4 παιχνίδια dt-normalized (90/120Hz έτρεχαν 1.5-2x)· TowerDefense tap
scaling· pull-to-refresh νεκρό (body overscroll + touch-none στον runner)· dvh
στο shell/readers (Android URL bar)· interactive-widget=resizes-content
(πληκτρολόγιο πάνω στο chat input)· mobile menu: το bg-[#0B0F1A]/98 ΔΕΝ παρήγαγε
CSS (το /98 δεν υπάρχει στο Tailwind) → solid bg χωρίς animated blur· manifest
id:'/'· UpdatePrompt update() σε visibilitychange· share fallback chain
(utils/share.ts) με copied feedback· κάμερα χωρίς capture="user" (γκαλερί+κάμερα).

**ΤΕΛΙΚΗ ΑΠΟΦΑΣΗ ΦΩΝΩΝ ΑΚΑΔΗΜΙΑΣ (30/8):** Μετά από δοκιμές Suno (4 συνταγές,
2 μοντέλα), Gemini multivoice, OpenAI styled και ElevenLabs (free tier — οι
native ελληνικές φωνές θέλουν πληρωμένο πλάνο), ο ιδιοκτήτης άκουσε τις
ΥΠΑΡΧΟΥΣΕΣ αφηγήσεις (Gemini Kore 07/2026 + 18× gpt-4o-mini-tts) και τις έκρινε
top — αυτές μένουν. Οι 102-103 επέστρεψαν στις Kore εκδόσεις τους. **Και τα 225
από 226 mp3 πήραν word read-along** (whisper+aligner, median 95% exact· commit
23bd0eb). Μόνη εκκρεμότητα: 101-el (εκτεταμένος Αρκάντ ιδιοκτήτη, 56% match —
χωρίς sync μέχρι να αποφασιστεί αν το κείμενο του app ενημερωθεί στην πλήρη
εκδοχή). ElevenLabs API key υπάρχει (free tier) αν ξαναχρειαστεί.

**Suno πιλότος Ακαδημίας (29/8, live):** Ιστορίες 102-103 με αφήγηση Suno
(sunoapi.org V4_5, spoken-word style, το ακριβές storyContent ως script) +
**word read-along στην Ακαδημία** — νέα σύμβαση `/audio/academy/story-{id}-{lang}.json`
(ίδιο σχήμα με ebooks), ο StoryReader φωτίζει λέξη-λέξη με tap-to-seek. QA loop:
Suno δίνει 2 λήψεις/task → whisper → difflib vs κείμενο → κρατήθηκαν 92%/94%.
ΠΡΟΣΟΧΗ: το Suno βάζει ~13s μουσικό interlude σε κάποια takes (102 και στις
δύο λήψεις, 103 καθαρό) — ο ιδιοκτήτης κρίνει με το αυτί. Εκκρεμεί: (α) ακρόαση
102-103 από ιδιοκτήτη + απόφαση για συνέχεια σε όλες, (β) φωνή-συνέπεια μεταξύ
ιστοριών — κρίνεται με το αυτί, (γ) ιστορία 101: το ηχητικό του ιδιοκτήτη λέει
~2x πλουσιότερη εκδοχή από το κείμενο του app (1713 chars) — ή ενημερώνεται το
storyContent στη full εκδοχή (και βγαίνουν timings) ή μένει χωρίς sync.

**STORE PACKAGING (ξεκίνησε 29/8, βλ. store/README.md):** Android TWA
gr.wisebot.academy ΧΤΙΣΤΗΚΕ και ΥΠΟΓΡΑΦΗΚΕ — `store/android/wisebot-1.0.0.aab`
(για Play Console) + `.apk` (δόθηκε στον ιδιοκτήτη για sideload δοκιμή).
assetlinks.json live στο wisebot.gr με το SHA256 του upload key· ΜΕΤΑ το πρώτο
Play upload πρόσθεσε (append) και το fingerprint του Play App Signing. Κλειδί:
store/android/android.keystore + keystore-credentials.txt (gitignored — να
σωθεί σε password manager). Store assets έτοιμα (store/assets: 6 phone + tablet
+ feature graphic, μέσω puppeteer με pre-seeded cookie consent). iOS: Capacitor
shell (SPM) στο store/ios — θέλει πλήρες Xcode + αποφάσεις: Apple 4.2 (thin
wrapper risk) και 3.1.1 (τα credits μέσω Stripe ΔΕΝ επιτρέπονται in-app· IAP ή
no-purchase). Kids/Families policies και στα δύο stores — δες README. Ο
ιδιοκτήτης πληρώνει Play Console $25 + Apple Developer $99/έτος (άνοιξε ήδη το
Play signup). Build στο μηχάνημα: gradle ΑΠΕΥΘΕΙΑΣ, όχι bubblewrap build (SDK
layout bug — README «Build σημειώσεις»).

---

## ⚡ STATUS 28 Αυγούστου 2026 (βράδυ) — «εξαφανίστηκε η αρχική»: ήταν το auto-redirect

Ο ιδιοκτήτης ανέφερε από κινητό: «η αρχική δεν μπαίνει καν — με πάει στο Κέντρο
Ελέγχου με τη μία». Αιτία ΔΕΝ ήταν σπασμένο render: το CRO P2-14 (PR #53) έκανε
πραγματικό το `AutoRedirectIfLoggedIn`, οπότε κάθε συνδεδεμένος χρήστης στο «/»
πετιόταν στο /dashboard — η αρχική έγινε άφταστη για όποιον έχει λογαριασμό, και
το «Αρχική» του sidebar νεκρό κουμπί. Ο wrapper αφαιρέθηκε· η αρχική αποδίδεται
σε όλους. Τίποτα δεν τον χρειαζόταν: το OAuth redirectTo πάει ήδη κατευθείαν στο
/dashboard (AuthContext) και το /login κάνει δικό του redirect συνδεδεμένων
(AuthScreen). Μαζί: fix στους heroes — ήρωας που σωζόταν cloud ξαναγύριζε ως
ΔΙΠΛΟΣ στο επόμενο sign-in (τοπικό Date.now() id ≠ cloud uuid· τώρα το save
κρατά `cloudId` και το merge αναγνωρίζει και τα δύο), και το merge effect
κλειδώθηκε στο `user.id` αντί για το user object (ξανα-fetchάριζε σε κάθε auth
event).

**Book 3 με τις φωνές των παιδιών (29/8, live).** ΠΡΟΣΟΧΗ σε μελλοντικά βιβλία:
τα ονόματα των DJI αρχείων στο `~/Desktop/wisebot-voices-kids` ήταν ΛΑΘΟΣ ως προς
το περιεχόμενο — το «page 2» είχε την αρχή της σελίδας 1, το «page 1» (23s) μόνο
το τέλος της («Μέχρι που… ΚΡΑΚ»), τα «page 3/4» τις σελίδες 2/3, και το «book3
page4» τη σελίδα 4. Χαρτογραφήθηκαν με whisper-μεταγραφή ΠΡΙΝ τρέξει το pipeline
— τρέξιμο στα τυφλά θα αφηγούνταν λάθος σελίδες σε όλο το βιβλίο. Τα δύο κομμάτια
της σελίδας 1 ενώθηκαν σε WAV (ραφή 79.4→80.3s, φυσική παύση) και το
`build-book-narration.sh 3` έτρεξε με SRC_DIR σε staged φάκελο με σωστά ονόματα
(τα πρωτότυπα του Desktop άθικτα). Exact match 88-93%/σελίδα, 5/5 σελίδες
index-aligned & monotonic, badge «Διαβάζουν παιδιά» ✓ στον reader. Books 1-2
αμετάβλητα.

Πλήρες verification sweep στο live (φρέσκος browser, guest): landing
desktop+mobile ✓, portal ✓, dashboard ✓, Ebooks reader + Book 2 φωνές παιδιών +
read-along highlight ✓ (m4a 206, timings 200, «Διαβάζουν παιδιά»), κλείσιμο
modal χωρίς click-trap ✓, Market 23 listings χωρίς «Λούκι»/williams ✓, νέα
academy mp3 200 ✓, quiz API 200 ✓, heroes/list 401 χωρίς auth ✓, μηδέν console
errors. Τα 102 «rateLimit … supabaseUrl is required» στα Vercel logs ήταν ΜΟΝΟ
στο preview deployment του PR #56 (τα env vars δεν περνούν στα previews) — η
παραγωγή καθαρή. ΠΡΟΣΟΧΗ: με `registerType: 'prompt'` όποιος έχει ανοιχτό το
παλιό bundle (με τα click-traps) μένει εκεί μέχρι να πατήσει «Ανανέωση» στο μπλε
καρτάκι ή hard refresh — τα «κολλήματα» σε συσκευές του σπιτιού θέλουν ένα
refresh, δεν είναι στο σημερινό build.

---

## ⚡ STATUS 28 Αυγούστου 2026 — αφήγηση πλήρης· 5 modals κλείδωναν την εφαρμογή

**Book 2 με τις φωνές των παιδιών (live).** Ίδια διαδικασία με το Book 1:
afconvert → whisper-1 word timestamps → align.py πάνω στο πραγματικό κείμενο.
Ακρίβεια 90-92%/σελίδα. Επαληθεύτηκε στον reader: «🎙️ Διαβάζουν παιδιά» και οι
λέξεις ανάβουν σε συγχρονισμό. Το Book 1 ΔΕΝ πειράχτηκε (αρχεία αμετάβλητα από 23/8).
Νέο `scripts/narration/build-book-narration.sh` — το επόμενο βιβλίο είναι μία εντολή.
ΠΡΟΣΟΧΗ: το κλειδί ζει στο gitignored `.env.vercel` (από `vercel env pull`) ΑΛΛΑ με
literal `\n` στο τέλος που το OpenAI απορρίπτει — το script το καθαρίζει μόνο του.
Δύο παγίδες που λύθηκαν: το `.m4a` περιέχει «4» (κάθε αναζήτηση page-4 έπιανε λάθος
αρχείο), και σελίδα με 2 λήψεις σταματά το script αντί να αφηγηθεί τη μισή.

**Ακαδημία 226/226 (live).** Έλειπαν 18 EL + 19 EN. Αιτία: ο
`extract-academy-texts.mjs` έκανε regex-scrape το `academyCourses.ts` και πετούσε
σιωπηλά όποια ιστορία ήταν γραμμένη αλλιώς — έβγαζε 98/113. Τα ids ΔΕΝ είναι
συνεχόμενα (πηδάνε 91-100, φτάνουν ως 123). Τώρα κάνει πραγματικό import. Οι
ελλείπουσες φτιάχτηκαν με τις ΙΔΙΕΣ φωνές (gpt-4o-mini-tts, coral/fable).

**5 modals άφηναν αόρατη παγίδα κλικ (live).** Ένα `fixed inset-0` overlay έφευγε
μόνο αφού τελείωνε το framer-motion exit animation· το rAF παγώνει όταν το tab πάει
στο παρασκήνιο, οπότε «κλείνω και αλλάζω εφαρμογή» άφηνε αόρατο τζάμι πάνω σε όλη
την εφαρμογή, με μόνη διέξοδο reload. Διορθώθηκαν με plain unmount:
**Ebooks reader** (το χειρότερο — το ίδιο το τζάμι δεν ξεκλείδωνε ούτε με κλικ),
**WiseFriends dossier**, **Academy story**, **Cinema lightbox**, **MakerLevelUp**.
Άλλα 7 overlays ελέγχθηκαν και ήταν εντάξει. Το `key` ΔΕΝ έφταιγε (το framer κλειδώνει
μοναδικό conditional child ως "") — μόνο το exit gating.

**PWA:** ο service worker είχε κανόνα ήχου μόνο για `.mp3`. Οι φωνές των παιδιών είναι
`.m4a` — το πιο πολύτιμο ηχητικό ήταν το ΜΟΝΟ που δεν αποθηκευόταν (4,3MB ανά ανάγνωση,
ποτέ offline). Καλύπτει τώρα mp3+m4a, και τα timing JSON χωριστά.

**Hero Market: 40 ήρωες live.** 20 των παιδιών (Φίλιππος/Αλεξάνδρα/Ελευθερία) + 20
«WiseBot Studio» από τις εξαγωγές του ιδιοκτήτη. `scripts/import-hero-cards.mjs` κόβει
τον χαρακτήρα από την κάρτα 1080×1350 σε 640×640 WebP (24KB μ.ό.). Το listing «williams»
→ `removed`. **Η κάρτα ήρωα διαφήμιζε `wisebot.academy` — domain που ΔΕΝ υπάρχει** → `wisebot.gr`.

**Heroes σώζονται πλέον server-side.** Ο πίνακας `heroes` υπήρχε και 2 features τον
διάβαζαν, αλλά ΚΑΝΕΙΣ δεν έγραφε ποτέ — κάθε ήρωας ζούσε μόνο σε localStorage. Νέα
`api/heroes/{save,list}.ts` + bucket + RLS. Η εβδομαδιαία αναφορά γονέα έδειχνε πάντα 0.

**ΕΚΚΡΕΜΟΥΝ — θέλουν τον ιδιοκτήτη:**
1. Ποιο παιδί έφτιαξε ποιον ήρωα (ο διαχωρισμός 7/7/6 έγινε στην τύχη).
2. 4 ήρωες με όπλα + 2 ελαττωματικοί (παλιό σετ) + **«Λούκι»** που μοιάζει επικίνδυνα
   με Miraculous Ladybug (IP ρίσκο σε marketplace επί πληρωμή) — όλοι εκτός Market.
3. Το Suno αρχείο (`~/Desktop/academy voice suno`, ιστορία 101, **6:17'** ενώ οι
   υπάρχουσες είναι ~2') — τριπλάσια διάρκεια σημαίνει ότι πρόσθεσε δικό του υλικό.
   Χρειάζεται να το ακούσει ο ιδιοκτήτης: καθαρή αφήγηση ή με μουσική;
4. Welcome credits 10⚡ vs 60-80⚡ marquee features (CRO audit #10).
5. GA4 admin: sign_up/purchase ως key events.

**ΔΕΝ ΕΓΙΝΑΝ (μεγαλύτερη δουλειά):** αγγλικό μάθημα Αγγλικών (EFL-για-Έλληνες,
810 ερωτήσεις άχρηστες στα αγγλικά) · αγγλική αφήγηση ebooks (μόνο ελληνική, μόνο
Book 1) · ~47% κομμένα αγγλικά στο generalQuizData · **repo 2,4GB** (309MB ήχος
Ακαδημίας — κάποια στιγμή σε CDN) · Missions 2.0 / onboarding «Τι ονειρεύεσαι να
γίνεις;» / AI Mentor · Resend key → κυριακάτικο email γονέα.

---

## ⚡ STATUS 27 Αυγούστου 2026 — τα τραγούδια ξαναδουλεύουν· Market γεμάτο

**Γιατί δεν έβγαινε ΠΟΤΕ τραγούδι (PR #56, merged):** το Music Studio καλεί
`/api/ai/music` (γράφει στίχους) και ΜΕΤΑ το Suno. Η Google κατάργησε το
`gemini-2.5-flash` → πέθαινε το πρώτο βήμα και **το Suno δεν καλούνταν ποτέ**.
Το Suno integration ήταν πάντα μια χαρά. Ίδια αιτία σκότωσε quiz + Business Lab·
το chat επέζησε μόνο επειδή δοκιμάζει OpenAI πρώτα. Επαληθεύτηκε live πριν το fix.

**Τι άλλαξε:** `api/_lib/textAI.ts` (OpenAI primary → Gemini fallback) το μοιράζονται
music/quiz/business, ώστε μια κατάργηση μοντέλου να μη ξανασκοτώνει 3 features.
`api/_lib/aiModels.ts` κρατά τα ονόματα μοντέλων σε ΕΝΑ σημείο (ήταν σε 7 αρχεία).
`api/ai/generate.ts` δεν προωθεί πια το model name του client στην Google — pinned
server-side. **Στίχοι πλέον από ChatGPT (gpt-4o)** με δομημένο brief από τον wizard
(παραλήπτης/όνομα/χαρακτηριστικό/λόγος ως χωριστά πεδία, όχι μία ισοπεδωμένη πρόταση),
και το μοντέλο επιστρέφει **και τα Suno style tags**.

**Downloads:** το HTML `download` αγνοείται cross-origin — και ΟΛΑ τα δημιουργήματα
ζουν αλλού (video→Supabase, 3D→Meshy CDN), οπότε απλά τα άνοιγε. `utils/downloadFile.ts`
κατεβάζει blob. **3D:** το thumbnail υπήρχε στο state αλλά δεν renderαριζόταν ποτέ
(το «γκρι κουτί»). Η εκτύπωση (500⚡, ήδη υπήρχε) εμφανίζεται τώρα μόλις τελειώσει
το μοντέλο → `/market?tab=print`.

**Hero Market (live, DB):** 20 ήρωες φτιαγμένοι από Φίλιππο/Αλεξάνδρα/Ελευθερία,
από `public/images/WiseBot_Hero_*` — migration `20260827000000_seed_hero_market.sql`.
Το listing «williams» → status `removed`. **ΕΚΚΡΕΜΕΙ:** (α) ο διαχωρισμός ονομάτων
έγινε στην τύχη — ο ιδιοκτήτης να πει ποιος έφτιαξε τι· (β) 6 εικόνες εκτός:
4 με όπλα (kefala/sniki/sniki-2/let_) + 2 ελαττωματικές (igu ψεύτικη εξίσωση,
pirc σπασμένα φτερά).

**Επίσης merged:** #54 subject SEO pages (6 μαθήματα + /epixeirimatikotita-gia-paidia),
#55 English edition μέρος 1 (γλώσσα persists + 🌐 toggle στο landing, LegalHub 4
ενότητες ήταν μόνο ελληνικά, JSON-LD δίγλωσσο).

**English edition — ΔΕΝ έγινε ακόμα:** το μάθημα Αγγλικών είναι EFL-για-Έλληνες
(45 units/810 ερωτήσεις· 29 με αγγλική ερώτηση και ΕΛΛΗΝΙΚΕΣ απαντήσεις) — άχρηστο
για αγγλόφωνο παιδί· αφήγηση ebooks μόνο ελληνική & μόνο Βιβλίο 1· ~47% των
generalQuizData αγγλικών είναι κομμένα («Τι είναι ο κομήτης;» → «Comet?»).

---

## ⚡ STATUS 26 Αυγούστου 2026 — CRO audit ολοκληρώθηκε, και τα 7 PRs (#47–#53) merged

Το season-opener CRO audit έγινε (live mobile walkthrough ως guest + πλήρες code
trace· λογαριασμός ΔΕΝ δημιουργήθηκε — τα auth flows ελέγχθηκαν από τον κώδικα).
Παραδοτέο: **CRO-AUDIT.md** (ranked P0/P1/P2 λίστα, μπαίνει με το #47). Κορυφαία:
το κουμπί «Εγγραφή» του GuestBanner δεν πήγαινε σε εγγραφή· το κύριο CTA path
(landing→portal→dashboard) δεν ζητούσε ποτέ λογαριασμό· το verification email
οδηγούσε σε ανύπαρκτο route /auth (κατέληγε στο landing)· purchase GA4 revenue σε
credits αντί για EUR. Όλα τα fixes merged 26/8 με το «κάντα merge» του ιδιοκτήτη
(σειρά #47→#53· το #50 έκανε rebase πάνω στο #49 — ίδια lab αρχεία):
**#47** A: Register CTAs → signup + signup ask στο portal · **#48** B: /auth route
+ post-signup «τσέκαρε το email» · **#49** C: analytics fixes (EUR, OAuth, gate
events) · **#50** D: login ask πριν τη δημιουργία + return-to μετά την αγορά ·
**#51** E: κινητό εκτός signup (δεν στελνόταν καν στο API) · **#52** F: guest
branch στο store verify modal (το inline OTP αποδείχθηκε περιττό: κάθε logged-in
χρήστης περνάει ήδη μέσω emailVerified) · **#53** G: τιμές public (landing links +
sitemap + /store semi-public), AutoRedirect πραγματικό, /admin guard, dead code
out, «24 credits»→10. Merged main: typecheck + vitest 66/66 + πλήρες build green.
**Εκκρεμεί απόφαση ιδιοκτήτη (audit #10):** welcome credits 10⚡ vs 60-80⚡ marquee
features + inline story στο UnlockGate. **Μετά τα merges:** GA4 funnel re-check ~10/9
(τα σωστά νούμερα ξεκινούν να μαζεύονται αφού βγει live το #49).

---

## ⚡ STATUS 25 Αυγούστου 2026 — τα 3 P0 του γενικού audit: merged & live

**PR #37 — Market report button + auto-unpublish.** `market_reports` table (migration
applied): children insert-only (own rows, approved listings only, one per listing, no
SELECT — anonymity); SECURITY DEFINER trigger pulls a listing to 'pending' at 3 open
reports. HeroMarket flag button + kid-worded modal; AdminDashboard Market tab shows a red
«Αναφορές παιδιών» queue (reasons, ΟΚ-μένει/Κατέβασμα); either decision resolves reports,
and decisions now apply to reported-but-live listings too.

**PR #38 + #40 — the speed arc.** The owner's PSI kept showing LCP ~20s after #38; the
network breakdown found the real culprits: Layout's <audio preload="auto"> pulled the
3.2MB theme song on EVERY page load (64% of a 4,956KiB payload), and the 5 hero-cluster
images were 256-276KB jpgs in ≤320px boxes. #40: preload="none" + 640px WebP set in
/images/opt/ (29-34KB each; also wired into Cinema thumbnails; originals kept). Live
after both, devtools-throttled Lighthouse: **payload 5,049→~460KiB critical, LCP 3.6s,
Perf 82**. PR #41 finished the sweep: the landing's
video-gallery thumbs still loaded full-size jpgs (+82KB webp) and the 97KB PWA icon —
now 640 WebP / 17KB icon. PR #42: PSI tap-target a11y fix (history ticker + ΣΥΝΔΕΣΗ pill).
**Owner-verified PSI mobile: 65 → 89, LCP 20.3s → 3.2s.** Functional check passed: hero
renders webp, audio preload=none still plays on demand, zero console errors. PR #43 (merged, live): the
static hero shell — #root ships an inline-styled copy of the hero text that paints
straight from HTML; React replaces it on mount (CLS 0 verified), and
generate-seo-pages.mjs strips the WB-SHELL block from every non-home route (verified:
/ has it, /school doesn't). Local throttled proof: FCP 0.1s/LCP 0.3s; live numbers now
dominated by network noise in the local harness — the owner's next PSI run is the
ground truth (morning runs sat at 86-89).
**PR #38 — LCP fix (first half):** The preload pointed at
wisebot_sm.jpg while the hero renders wisebot.jpg (fixed + fetchPriority=high); the hero
image and H1 entered via framer-motion opacity-0 (LCP counts painted pixels — both are
transform-only now); Nunito ttf→woff2 (500KB→168KB, ttf fallback kept, 2 weights
preloaded). Next step toward <2.5s (later): static hero shell in index.html.

**PR #39 — GA4 conversion events.** `utils/analytics.ts` (consent-safe: GA script loads
only after cookie accept; events without consent never leave the browser; no child data).
Wired: sign_up/login, wb_<action> for every EconomyContext trackAction, begin_checkout,
purchase (inside the idempotent Stripe verify). GA4 property: G-7834HP8GYV — owner should
mark sign_up/purchase as key events in GA4 admin when convenient.

Also that afternoon: Bing sitemap submitted via the owner's Chrome (Control-Chrome MCP +
AppleScript JS — note: the Chrome «Allow JavaScript from Apple Events» toggle is
per-profile and currently OFF again after diagnostics; re-tick via View→Developer when
needed). Full audit findings live in the 24/8 session; remaining backlog: subject pages,
/epixeirimatikotita-gia-paidia, «Η ιστορία μας» page (needs the owner's story), Missions
2.0, Resend key (owner), Bing URL submission (~48h), GSC/Bing check end of week.

---

## ⚡⚡ SEASON HANDOFF — 25 Αυγούστου 2026. READ THIS FIRST, THEN WORK TOP-DOWN.

**What the 23-25/8 season shipped (all merged & live on wisebot.gr):** server-side quiz
progress (#29, quiz_best + trigger, migration applied) · SEO overhaul + «Οι Ιδέες σου
Γίνονται Πραγματικότητα» repositioning + 6 grade pages (#32) · socials sameAs (#33) ·
Maker Levels + /passport (#34) · Parent weekly report in-app (#35) · SEO P0 fixes:
legal/login meta, one age 6-12, honest claims (#36) · Market child-report button +
auto-unpublish at 3 reports + admin queue (#37, migration applied) · the speed war
(#38/40/41/43/44): PSI mobile 65 & LCP 20.3s → 86 & 3.3s (audio preload=none saved
3.2MB/load, 640px WebP set, static hero shell) · «Η Ιστορία μας» /istoria-mas + menu &
explore-grid links (#45/46). GSC: sitemap 27 URLs + 9 indexing requests. Bing: verified,
sitemap submitted 24/8. www→308. Full Chrome/Mac automation for the owner's machine works
(see memory + NOTE in the 26/8 block below).

**Also shipped in parallel by another session (see the block above):** PR #39 GA4
conversion events (consent-safe, sign_up/login/trackAction/purchase — owner still needs
to mark sign_up & purchase as key events in GA4 admin) and PR #42 tap-target a11y fix.

**SEASON OPENER — CRO audit (owner's call, 25/8):** walk the whole conversion funnel
as a skeptical parent on a phone: landing → /portal → signup (parent email/verification
friction) → onboarding → first creation (activation moment) → unlock gates →
credits/pricing (/store is login-gated — can a parent see prices before committing?) →
purchase. Deliverable: ranked friction list with concrete fixes, shipped as small PRs.
Heuristic pass now (use the Chrome automation to actually click through as guest AND as
a fresh account); re-check with GA4 funnel data (~2 weeks after PR #39 collects:
sign_up, wb_* actions, begin_checkout, purchase). Watch especially: how many taps from
landing to «κοίτα τι έφτιαξα» and where guests hit walls.

**BACKLOG for the new season, in the order the last audit ranked it:**
1. **Resend key → Sunday parent email** (phase 2): owner signs up at resend.com (2'),
   then Claude can extract the key via Chrome, `vercel env add`, api endpoint + Vercel
   cron; reuses utils/weeklyReport.ts aggregation as-is.
2. **Subject SEO pages** (/mathimatika-dimotikou, /glossa-, /istoria-, /fysiki-,
   /geografia-, /agglika-dimotikou) + **/epixeirimatikotita-gia-paidia** — same recipe
   as the grade pages (component + generator ROUTES + sitemap; slugs in 3 places).
3. **Missions 2.0** (PRODUCT-VISION Νο2, the core loop: one mission = Academy + Quiz +
   Factory), then **onboarding «Τι ονειρεύεσαι να γίνεις;»** (Νο1), then AI Mentor (Νο4).
4. **Search follow-ups**: Bing URL Submission unlocks ~26/8 (Chrome automation);
   check GSC coverage for the 9 requested pages + refreshed titles ~end of week;
   IndexNow wiring is a nice code-side add; GSC Brand profile still gated by Google.
5. **Speed (parked at 86)**: next lever = metric-matched fallback font
   (size-adjust/ascent-override for Nunito) so the font swap can't grow the H1;
   PR #44's slightly-larger shell H1 did NOT hold the LCP record — consider reverting
   its 2.15rem if the font fix lands.
6. **Trust/GDPR hardening**: leaked-password protection toggle in Supabase Auth
   (1 click, dashboard), retention-policy wording in /legal, moderation docs.
7. **DB hygiene** (one migration): wrap auth.uid() as (select auth.uid()) in the 24
   flagged RLS policies; drop duplicate permissive SELECT policies on heroes.
8. Later/needs owner: Academy story pages (113, after GSC shows query data) ·
   2-3 άρθρα/εβδομάδα + 30-50 ελληνικά backlinks + PR (Claude drafts, owner sends) ·
   «Βιβλία pass» still undefined — needs the owner's brief · Weekly Global Challenge,
   Teams, Hero Market creator economy (vision, after the top-5).

**Ground rules that survived the season:** branch+PR per piece, CI green, merge on the
owner's say-so (he has been saying «κάντα merge» — still ask unless he pre-authorizes);
never touch book/unit/academy content meaning; content counts live in
data/contentCounts.ts locked by tests; wisebot-review before commit; HANDOFF STATUS
updated after every merged piece.

---

## ⚡ STATUS 25 Αυγούστου 2026 (μεσημέρι) — «Η Ιστορία μας» live + speed parked at 86

**PR #45 (merged, live): /istoria-mas** — the founder's story in his own words (family
with three children; the kids' REAL voices narrate the 34 ebooks and their school days
became the stories; the father-entrepreneur teaching big goals / resilience / creative
screen time; closing belief «όλα τα παιδιά έχουν μεγάλα όνειρα…»). Deliberately no child
names/faces. AboutPage JSON-LD, prerendered, in sitemap, linked from the landing trust
line. This closes the audit's E-E-A-T gap.

Speed: PR #44 (shell H1 slightly larger) did NOT move LCP — lcp-breakdown still shows
the React H1 span repainting larger at ~3.5s (Nunito wider than the shell's fallback
font). PSI parked at 86 (LCP 3.3s, CLS 0) — from 65/20.3s. Next candidate if ever
resumed: metric-matched fallback font (size-adjust/ascent-override for Nunito) so the
font swap doesn't grow the H1 box; or font-display:optional on the 900 weight.

---

## ⚡ STATUS 26 Αυγούστου 2026 — SEO P0 cleanup live (external audit verified)

The owner brought an external SEO audit; verified against the live site. Confirmed & fixed
in **PR #36 (merged, live)**: /legal, /privacy, /terms, /login were served by the SPA
fallback with the HOME meta and canonical to «/» (crawler saw the homepage on /legal) —
all four now have prerendered pages with self-canonicals + client PAGE_META; one age range
everywhere (6–12, 35 occurrences of 6-13 swept incl. JSON-LD and the chat prompt); last
«πρώτο Ελληνικό» and «Αναγνωρισμένο από εκπαιδευτικούς» claims removed; stale «90
σπουδαίων» → 113. Also fixed same day via Vercel API: **www.wisebot.gr redirect is now
308 Permanent** (was 307). Audit items that were stale (already done before it): home
title/positioning, sitemap/GSC/indexing, grade pages, /ai-paidia. Still valid backlog from
it: subject pages (/mathimatika-dimotikou …), /epixeirimatikotita-gia-paidia landing,
articles, backlinks/PR/entity building (owner-side). Bing Webmaster: DONE 24/8 —
owner imported wisebot.gr from GSC (success); Claude then submitted sitemap.xml through the
owner's Chrome (status: Submitted/Processing, 1 known sitemap). URL Submission UI still
locked while Bing processes the new site (~48h) — retry then, or wire IndexNow in code.
NOTE: Claude now has full Chrome control on the owner's Mac (Control-Chrome MCP +
Chrome «Allow JavaScript from Apple Events» enabled + Accessibility for the host app).
Pending owner: Resend API key for the Sunday email (phase 2 of the weekly report).

---

## ⚡ STATUS 25 Αυγούστου 2026 (βράδυ) — Journey Νο3 + Νο5 φάση 1 LIVE

**Merged & live on the owner's say-so: PR #34 (Maker Levels + Passport) and PR #35
(Parent weekly report, phase 1).**

**PR #35 — «Η εβδομάδα του παιδιού»** (Parent Dashboard, above School progress): School
missions improved in the last 7 days (+stars, top subject), weighted quiz %, creations
with their names, current Maker rank, and a rotating «Ρωτήστε το σήμερα…» conversation
starter tied to what the child actually did. Only real server timestamps are used
(quiz_best.achieved_at, created_at on heroes/user_songs/user_videos — own-rows RLS
verified). Pure aggregation in `utils/weeklyReport.ts`, pinned by 10 tests (suite 66/66).
Guests/failed fetches: section hidden, never wrong zeros. **Phase 2 = the same data as a
Sunday email: needs a Resend (or similar) API key from the owner + a Vercel cron.**

**PR #34 — Maker Levels + Passport** (details below, merged same day).
Dreamer→Explorer→Creator→Maker→Inventor→Founder→Legend from total XP.
`data/makerLevels.ts` is the single source of truth (thresholds/taglines tune there);
the numeric `wb_level` counter is untouched. `/passport` (lazy, SemiPublicRoute): tier +
ladder + portfolio from EconomyContext stats and the School `wb_quiz_best_*` keys — shows
only, awards nothing. `MakerLevelUp` overlay celebrates tier-ups; `wb_maker_level` is
written before showing (double-run safe) and the first run only baselines. Entry points:
Dashboard header tier pill + the wallet level chip. 10 tests pin the ladder invariants
(suite 56/56). Verified in dev: desktop + mobile, celebration flow, both entry points.

---

## ⚡ STATUS 25 Αυγούστου 2026 (ξημερώματα) — SEO overhaul live + Journey step 1 merged

On the owner's say-so, **PR #32 (SEO) and PR #29 (server-side progress) are merged and
live on wisebot.gr**; the `quiz_best` migration was applied to Supabase via MCP (advisors
clean). #17 (voice sampler) and #30 (real Hero Market) also merged today by other sessions.

**PR #32 — SEO/positioning** (three commits):
- Fixed: `/school` had no PAGE_META entry — it served the home meta with a canonical to `/`
  and was absent from sitemap/robots. Google's verdict for it was literally «Discovered —
  currently not indexed». Now: full meta + Course/FAQ JSON-LD, prerendered page, sitemap.
- Repositioned per PRODUCT-VISION.md: title/OG/JSON-LD/noscript and the landing hero are now
  «Οι Ιδέες σου Γίνονται Πραγματικότητα» (maker academy), not «Το Διάβασμα Έγινε Παιχνίδι».
  Removed the fabricated `aggregateRating` 4.8/156 (Google guidelines risk).
- New: 6 per-grade pages `/askiseis-<τάξη>-dimotikou` targeting «ασκήσεις Χ' δημοτικού»
  queries, generated from the curriculum skeleton (`components/SchoolGradeSEOPage.tsx`),
  prerendered + in sitemap (now 25 URLs). Slugs duplicated in App.tsx / generator / sitemap.
- **GSC (access via the owner's Chrome + Claude extension works):** baseline over 16 months
  was 51 clicks (40 branded), 9 queries total, 8 pages indexed. On 23/8 late night the new
  sitemap was resubmitted (Success, 25 discovered) and indexing was requested for /school +
  all 6 grade pages («Indexing requested» confirmed each). Check Coverage again ~end of week.
- Socials in Organization `sameAs` since PR #33 (merged, live): Instagram wisebot.gr,
  Facebook page 100094647660224, TikTok @wisebotgr, YouTube @wisebotfriends.
- **Visibility audit (24/8):** only 8 URLs indexed (/, /game, /quiz, /music, /wise-friends
  + 3 SEO landing pages) — /academy and /ebooks were «crawled/discovered - not indexed»
  since April; indexing re-requested for both (daily manual quota now used: 9 URLs).
  **www.wisebot.gr redirects with 307 (temporary)** so Google keeps www as a separate URL —
  OWNER: Vercel → wisebot-claude-ok → Settings → Domains → www.wisebot.gr → set the
  redirect to 308/permanent. **Bing has zero pages indexed** — OWNER: open Bing Webmaster
  Tools once, «Import from Google Search Console», done. GSC has no Brand profile section
  for this property yet (Google gates it on brand recognition); the sameAs schema is the
  signal that feeds it. No knowledge panel exists yet to claim.

**Journey step 1 (PR #29, merged, migration applied):** the child's quiz best runs sync to
a new `quiz_best` Supabase table (`wb_quiz_best_*` keys — School stars/Master/diplomas)
through the existing syncService pattern.

- **Merge rule enforced in the database**: a `BEFORE UPDATE` trigger only accepts a strictly
  better score/total ratio — no client can ever lower a best run. RLS: own rows only, no
  delete. Migration: `supabase/migrations/20260824220000_quiz_best_sync.sql` — applied.
- Sync points: login (`SyncBridge` in AuthContext), each improved run (QuizEngine
  `saveQuizBest`, fire-and-forget), and Parent Dashboard mount (`ParentSchoolProgress`
  pulls cloud runs first — the parent now sees progress from other devices; its copy
  drops «σε αυτή τη συσκευή» for signed-in accounts). Guests: localStorage only, unchanged.
- Merge/round-trip invariants pinned in `services/syncService.test.ts` (10 tests).
- Maker Levels / Passport / weekly report can build on `quiz_best` next.

---

## ⚡ STATUS 24 Αυγούστου 2026 (μέρα) — SCHOOL overhaul, read this first

**Owner's instruction for this phase: work only on the School; touch nothing else.**
Merged today: #13, #15 and — at 21:30, on the owner's say-so — **#16, the whole School
overhaul (live on wisebot.gr)**. Still open: #17 (voice sampler).

What PR #16 shipped:
- **School = mission trail.** `components/SchoolUnitMap.tsx`: grade → subject → trail of
  "αποστολές" with 0–3 stars each, Master badge at 2+ stars everywhere, WiseBot card at the
  end of each mission (`MissionResult` in `School.tsx`, via QuizEngine's new `finishSlot`).
  Nothing locked. Subjects without units keep the old flat quiz.
- **Curriculum skeleton Α'–ΣΤ'**, 212 units from the ΙΕΠ Προγράμματα Σπουδών and the
  textbook chapter titles (`data/units/curriculum.ts`, one-line brief per unit).
- **All 212 units written and audited (Α' 27, Β' 28, Γ' 35, Δ' 37, Ε' 43, ΣΤ' 42) —
  3,816 original bilingual questions with explanations.** Α'/Β' landed 24 Αυγούστου
  (evening) once the spend limit was raised; every Α'/Β' maths answer and the Β' «Τόνοι»
  unit were read by hand. One file per unit in `data/units/grade<N>/`, bundled per grade in
  `grade<N>/index.ts`, loaded on demand by `data/units/registry.ts` (`loadGradeQuestions`).
  `UNIT_COUNTS` there is the static part. Each unit was one agent, ~60k tokens.
- **Tooling:** `node scripts/school-units.mjs audit | print 3/math | registry`.
  `registry` rewrites the grade index files and UNIT_COUNTS. `data/schoolData.test.ts`
  validates every question in CI (24 tests).
- Build note: the PWA precache limit is 1 MB (`vite.config.ts`); School is 240 KB and each
  grade chunk 175–590 KB. Do not re-bundle the grades together.
- Known cosmetic: the Δ' grade file names its science subject «Φυσικά» (should be «Μελέτη
  Περιβάλλοντος» — Φυσικά starts in Ε'); the name comes from `data/schoolGrade4.ts`.

**Open: PR #25 `feat/school-parent-view`** (CI green, for the owner's say-so) — the three
School follow-ups in one: Parent Dashboard «Σχολείο» section (`components/
ParentSchoolProgress.tsx`: per played grade, stars/Master per subject, exam/diploma, and the
missions under 2 stars — replaces the stale "Coming Soon — school subjects" block); the
grade exam now unlocks only with Master in every subject; grade cards count missions; Δ'
«Φυσικά» → «Μελέτη Περιβάλλοντος». Note: Α' still has a 5th flat subject «Ο τόπος μου»
(12 questions, not in the unit skeleton) — fold it into Μελέτη Περιβάλλοντος or leave.

**Next for School:** owner reads samples per subject on the phone and reports anything
off; then the parent view could move server-side (today it reads this device's
localStorage, so a parent on another phone sees nothing).

---

## ⚡ STATUS 24 Αυγούστου 2026 (νύχτα)

**Four open PRs, all CI green, all independent of each other (each branches off `main`).
Merge only on the owner's explicit say-so.** Content (books, academy texts) must never be
changed in meaning — none was.

| PR | Branch | What |
|---|---|---|
| #13 | `fix/quiz-offline-back` | the list below |
| #15 | `ux/game-back-button` | one 44px «ΠΙΣΩ» pill in all 22 games (`components/games/GameBackButton.tsx`); Puzzle menu no longer clips its top |
| #16 | `content/grade3-multiplication` | **for approval**: Γ' Πολλαπλασιασμός, 18 original questions (`data/units/grade3/math-multiplication.ts`), wired into the unit skeleton only — UI unchanged. Plus `data/schoolData.test.ts` validating every school question; it found and fixed 2 duplicate English options (Δ', ΣΤ' Γλώσσα) |
| #17 | `tooling/voice-sampler` | `scripts/generate-voice-samples.mjs` upgraded (gpt-4o-mini-tts + storyteller instruction, ElevenLabs Greek voices, Gemini Pro). **Not run** — needs keys and the owner's go |
| #18 | `fix/academy-count` | UI/SEO said «98 ιστορίες»; it is 113 since PR #14 (MONEY_MIND 101–123). Counts now in `data/contentCounts.ts`, locked by `contentCounts.test.ts` (also: unique ids, 3 quiz per story) |
| #19 | `chore/strict-null-checks` | `strictNullChecks: true` — only 15 errors, all `let x = null` / forEach-narrowing inference gaps, fixed, no behaviour change. Task 3 done |
| #20 | `chore/cleanup-dead-endpoints` | Task 6 re-verified: API6/API7 are **not** dead (kept), API8 already gone, dead `backendAI.chat/tts/quiz` removed, admin endpoint list fixed, PINs out of `.env`. **Owner:** delete `VITE_*_PIN` from Vercel env if present |

**Done today, merged:** PR #14 — 15 new MONEY_MIND Academy stories (ids 109–123: Thiel, Vaynerchuk,
Girard, Knight, Housel, Newport, Voss, Schwartz, Kim & Mauborgne, Tracy, Peale, Kiyosaki ×2, Sharma,
Dyer). Academy = 113 stories.

**Still undefined:** the «Βιβλία» pass from the category-by-category plan — no concrete brief
exists for what to change in the 34 books. Needs the owner's input before anyone starts.

**PR #13** (7 commits):

What it fixes, each verified on a 375×812 viewport in dev:
1. **Quiz answers were predictable** — correct option in slot 0/1 for 93% of book questions,
   86% school, fixed 0-1-2 pattern in academy. `utils/shuffleOptions.ts` shuffles options per
   question once per quiz in `EbookQuiz` and `QuizEngine` (+6 tests). Data untouched.
2. **Offline banner** covered the header/back button (`fixed top-0`). Now `components/
   OfflineBanner.tsx` in flow above the header, child wording in `UI_TEXT.offline`.
3. **Phone back gesture threw the child to the home page** from a game. Active game is now
   in the URL (`/game?g=ballrush`).
4. Same bug in Quiz / School (2 levels) / Academy / Ebooks → `utils/useBackCloses.ts`
   (pushes a history entry per open sub-view, closes it on pop). Read its header before reuse.
5. P3 leftovers: Music button shows `costs.song` (60) instead of "-2⚡"; `/parent` for guests
   explains itself + Log in / Create account; signup form has labels, a one-line "why the
   phone" hint, correct autocomplete; `/login?mode=register` actually opens the signup tab.

**Owner's new ideas (23 Αυγούστου, evening), with status:**
- Random answer order in book quizzes → done (PR #13).
- Offline bar hides the back button → done (PR #13).
- A proper "back" in games/quiz instead of dropping to home → the navigation bug is done;
  **unifying the look of the 22 in-game back buttons is still open** (a shared floating
  button was tried and collides with Ball Rush's controls — do it per game, or not at all).
- **Re-record Academy + ebook narration with top voices.** Demos done (24 Αυγούστου,
  βράδυ): 4 Gemini samples on an Academy excerpt (Kore/Puck flash, Kore/Charon pro) were
  sent to the owner — **waiting for the owner to pick a voice**; parked until then. The
  OpenAI key in `.env.vercel` is invalid (401) and there is no ElevenLabs key. Batch
  estimate: 113 stories ≈ 280k chars → Pro TTS ~€5–6, Flash ~€1. Facts: 558 MB of mp3
  in `public/audio/` (189 academy, 260 ebook pages), generated with a mix of OpenAI
  `coral`/`fable`, Gemini `Kore`, ElevenLabs; scripts in `scripts/generate-*voices*.mjs`.
  Proposed first step: one ebook page in 4–5 candidate voices for the owner to hear on a
  phone, then batch. Costs API money — get a go-ahead first. Consider moving audio to
  Supabase Storage/CDN instead of the repo.
- Before ads: sign up with a Gmail address and confirm the verification email arrives
  promptly (needs a real mailbox — owner's task, or switch Supabase auth SMTP to a
  dedicated provider if it lands in spam).

**Found while reviewing, not fixed (pre-existing):** badge discounts are client-only —
`costs.song` shows 58 with the musician badge but `api/ai/suno-generate.ts` always deducts
`SONG_COST = 60` (same shape for image/video badges). Displayed ≠ charged by the discount.
Either the server reads the badge, or the discount goes. Owner's call.

**PR #6 (Cursor, May, Supabase-role admin access):** recommended to close — 46 commits
behind, rewrites files `main` has since rewritten, and its token never expires. Not closed;
waiting for the owner.

---

## ⚡ STATUS 23 Αυγούστου 2026

**Live on wisebot.gr (merged today, PR #11):** the whole first-run experience from
`ONBOARDING-PLAN.md` — greeting by name, WiseBot's one-time tip in each room
(`components/FirstTimeTip.tsx`), onboarding picks a hero before any photo, localized reward
toasts with a first-book moment, honest credit labels, and **progressive unlocks**
(`utils/unlocks.ts`, `components/UnlockGate.tsx`): Hero Factory ← 1 story, Cinema/3D ← 1 hero,
My Company ← 2 stories; Music and all learning rooms always open. Existing users are
grandfathered by their stats.

**Earlier today (PR #9, #10):** parent-trust gates, first-run overlay cleanup, landing
repositioned ('Το διάβασμα έγινε παιχνίδι'), Vitest in CI (10 tests).

**Repo:** `~/Projects/wisebot` (not the old Desktop copy). typecheck ~3s, tests ~0.5s.

**Next, in order:**
1. P3 UX leftovers — Music Studio shows "-2⚡" vs store "-60": verify which is real;
   Parent Dashboard dead-ends guests; signup form needs labels + why the phone is asked.
2. Category by category, as the owner wants: Βιβλία → Ακαδημία → Quiz → Σχολείο. The
   School is where the promise becomes content: `CONTENT-PLAN.md` Phase 1b, Γ' Δημοτικού
   multiplication sample unit (18 questions) for approval before the other 29 units.
3. `strictNullChecks`; cleanup (dead endpoints, unused PINs).

**Owner decisions made:** merge only on explicit say-so; music stays unlocked (it is the ad
hook); unlocks must be easy; tips/unlocks in localStorage are fine for v1.

---

## ⚡ STATUS 17 Αυγούστου 2026 — read this first; it supersedes the task list below

**Infrastructure is done.** `gh` is logged in as itdev-gr (keyring), git identity set, push →
Vercel auto-deploy → wisebot.gr proven. CI (`.github/workflows/ci.yml`: typecheck + lint +
build) gates `main`; lint is at **0 errors**. Database security fixes are live and recorded in
`supabase/migrations/`. `AUDIT-2026-08-16.md` is the technical audit; `AUDIT-BUGS.md`'s API3
entry is stale (already race-safe).

**Open PR #9 — `ux/parent-trust`** (3 commits, CI green, Vercel preview up). From the UX
audit of the live site. Merging deploys to wisebot.gr — **owner's call**:
- P0 parent trust: photo upload only for verified-parent accounts (+ honest "not stored"
  note); parent-consent checkbox on signup; "Χωρίς chat" → "Χωρίς chat με αγνώστους";
  store buttons show the parent-verification lock.
- P1 first run: one overlay instead of four; entrance ~2.5s → ~1s; portal intro plays once;
  the 8 portal cards navigate; "Σύνδεση" link on the landing; FAB/mute overlaps fixed.
- P2 landing repositioned: "Το διάβασμα έγινε παιχνίδι." Age/grades first, books + school
  track lead, AI framed as the reward, new "Για γονείς" section, SEO title/OG updated.

**Remaining UX (P3, small, separate PR):** Music Studio shows "-2⚡" while the store says a
song costs 60 — verify which is real; Parent Dashboard is a dead end for guests (asks for a
password with no explanation); signup form lacks field labels and does not say why it asks
for a phone number; password rule (upper+digit+symbol) is friction — length 8+ plus the
Supabase leaked-password check (currently OFF, one dashboard toggle) is better.

**Repo moved (17 Αυγούστου, later the same day): `~/Projects/wisebot`.** Fresh clone off
iCloud, no space in the path; `.env`, `.env.vercel`, `server/.env`, `.vercel/`, and
`.claude/{settings.local,launch}.json` copied over by hand (they are gitignored). The old
`~/Desktop/Projects/wisebot-claude-ok 3` still exists as a stale copy — **work only in
`~/Projects/wisebot`**. `~/.claude/launch.json` (`wisebot-dev`) points to the new path.

**Parked:** `wip/tests` branch holds a Vitest setup + EconomyContext tests. They could not run
at the old path (the space in the folder name was URL-encoded by vitest's fork pool). Retry
them here first — the move may be the whole fix.

**Next after PR #9:** P3 UX items · move the repo · unpark tests · `strictNullChecks` ·
CONTENT-PLAN.md Phase 1b (Γ' Δημοτικού multiplication sample unit).

Tasks 1, 2, 4, 7 below are DONE; 5 is parked; 3 and 6 remain.

`CLAUDE.md` describes the codebase. `FIX-PLAN.md` is the prioritised backlog. This file is the
state of the machine, what was already done, and the order to work in.

---

## 1. Machine state

Node, npm and gh were installed from official tarballs into `~/.local`, **without sudo**
(Homebrew's installer needs a password that only the owner can type):

| Tool | Version | Location |
|---|---|---|
| Node | v24.19.0 LTS | `~/.local/opt/node-v24.19.0-darwin-arm64` |
| npm | 11.17.0 | same |
| gh | 2.97.0 | `~/.local/opt/gh_2.97.0` |
| git | 2.50.1 | Apple, `/usr/bin/git` |

`~/.zshrc` was created solely to put `~/.local/bin` on PATH. **Non-interactive shells do not
source it** — prefix commands with `export PATH="$HOME/.local/bin:$PATH"` when scripting.

Not installed: Homebrew, SSH keys, `~/.gitconfig`.

## 2. Connections

- **Supabase** — working. Project `wisebot-academy`, ref `qvqhwnsejbtrbrlfjrgz`, eu-central-1.
- **Vercel** — working, but `list_teams` returns an empty array. Every call must be given the
  team slug **`itdev-gr`** by hand or it errors. Project `wisebot-claude-ok`,
  `prj_52m5VPabhFiNhhQkzRmgGBnA1yA0`.
- **GitHub** — not authenticated. Needed **only for push**; reading and editing code works
  without it. Run `gh auth login` in an interactive terminal.
- 19 other connectors (Ahrefs, Notion, Figma, Slack, Monday…) are unauthorised. Authorise from
  the connector settings on claude.ai if wanted.

## 3. Already done — do not redo

- `CLAUDE.md` written. **Do not run `/init`, it will overwrite this.**
- `FIX-PLAN.md` written — the prioritised backlog.
- Three project skills in `.claude/skills/`: `wisebot-review`, `wisebot-api-endpoint`,
  `wisebot-credits`. They load automatically when working in this directory.
- `tsconfig.json` — added the missing `exclude`. A typecheck previously ran 15+ minutes without
  finishing because `tsc` walked `server/node_modules`.
- `package.json` — added `npm run typecheck`. It now passes with **zero errors** (weak signal:
  `strict` is off, so the compiler was never asked the hard questions).

## 4. Verified correct — do not "fix"

No AI key reaches the browser · no secrets committed · kid-safety moderation is real (Greek and
English blocklists plus Gemini `SAFETY_SETTINGS`) · admin auth is server-side with a 12h HMAC
token · security headers set in `vercel.json` · caching strategy sound.

## 5. Known environment problems

- ~~The repo lives on the iCloud-synced Desktop.~~ Resolved 17 Αυγούστου — see STATUS above.
  Old observation kept for context: typecheck used 4.8s CPU over 3 min wall clock there.
- **`server/` must not be deleted.** It looks like a dead 44 MB `node_modules`, but a hidden
  `server/.env` holds the only local copy of `SUPABASE_SERVICE_KEY`, `STRIPE_SECRET_KEY`,
  `STRIPE_WEBHOOK_SECRET` and `GEMINI_API_KEY` — untracked by git and absent from the root
  `.env`. Decided 16 Αυγούστου 2026: leave it alone.

---

## 6. Work order

Each task below is a session. Paste the prompt, finish the task, commit, move on. They are
ordered so that each one is verified by the safety net built in the one before it.

### Task 1 — ESLint (highest value in the repo)

> Set up ESLint for this project with `eslint-plugin-react-hooks` and the TypeScript parser.
> Do not fix any violations yet. Run it, tell me the total error count broken down by rule,
> and show me the ten files with the most `react-hooks/exhaustive-deps` violations. Add a
> `lint` script to package.json.

Why first: at least 8 bugs in `AUDIT-BUGS.md` (`H1`, `H3`, `B2`, `B4`, `CS1`, `CTX3`, `CTX4`,
`D1`) are dependency-array or stale-closure mistakes this rule reports automatically.

### Task 2 — Burn down the hook violations

> Using the `wisebot-review` skill, fix the `react-hooks/exhaustive-deps` violations file by
> file, in this order: `components/HeroFactory.tsx` (3), `context/AuthContext.tsx` (2),
> `components/BusinessSimulation.tsx` (2), `components/CreditStore.tsx` (1) — the credit and
> auth paths first — then `components/QuizEngine.tsx` (2), then the games.
> After each file, run `npm run typecheck` and `npm run lint` and show me the diff before
> moving on. Do not batch several files into one change.

Two corrections from the ESLint baseline of 16 Αυγούστου 2026:

- **`context/EconomyContext.tsx` has zero violations.** An earlier draft of this task listed it
  first; there is nothing to fix there. Its bugs (`CTX1`, `CTX3`, `CTX5`) are the object-identity
  and contract shapes the rule does not report — use the `wisebot-review` skill, not the linter.
- **The 2 `rules-of-hooks` errors in `components/games/DungeonExplorer.tsx` are false positives.**
  Line 355 declares `const usePotion = useCallback(...)`, an ordinary game function whose name
  begins with `use`, so the linter treats every call as a hook call. Rename it to `drinkPotion`;
  do not disable the rule.

### Task 3 — `strictNullChecks`

> Turn on `strictNullChecks` in tsconfig.json and run `npm run typecheck`. Report the error
> count and group the errors by cause. Then fix them starting with `components/Cinema.tsx` and
> anything else that reads `.avatar`, since bug C1 in AUDIT-BUGS.md was a production crash of
> exactly that shape. Do not enable full `strict` yet.

### Task 4 — API3, the credit race condition

> Fix API3 from AUDIT-BUGS.md — credit operations have no database-level locking, so
> concurrent requests can duplicate or lose credits. Write a Supabase migration adding an
> atomic RPC that deducts credits in a single statement
> (`UPDATE ... WHERE credits >= cost RETURNING`), then change `api/_lib/auth.ts` to use it.
> Use the `wisebot-credits` skill. Show me the migration before applying it.

The only open bug that touches real money.

### Task 5 — Tests for the economy

> There are zero tests in this repo. Add Vitest and write tests for `context/EconomyContext.tsx`
> only: insufficient balance, exact balance, badge discounts actually changing the charged
> amount, and no double-spend when `spendCredits` is called twice in quick succession. Add a
> `test` script.

### Task 6 — Cleanup

> Work through Tier 3 of FIX-PLAN.md: remove the unused `VITE_ADMIN_PIN` and `VITE_PARENT_PIN`
> from `.env`, delete the stray `.claude/worktrees/` directory, and delete the dead endpoints
> API5–API8 after confirming nothing calls them. **Do not touch `server/`** — it holds the only
> local copy of the server-side secrets. Run `ls -a` on anything before deleting it, and confirm
> each deletion with me first.

### Task 7 — CI

> Add a GitHub Actions workflow that runs typecheck, lint and build on push and pull request.
> Then check whether the `wisebot-claude-ok` Vercel project still builds on Node 20 — the
> dashboard warns those builds fail from 1 October 2026 — and upgrade it to Node 24 if so.

### Optional, any time — escape iCloud

Moving the repo off the synced Desktop removes the 3-minute typechecks and the hanging
`git status`. Everything else keeps working; only the paths change.
