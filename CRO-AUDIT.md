# CRO Audit — Conversion Funnel (25 Αυγούστου 2026)

Heuristic pass: live walkthrough στο wisebot.gr σε mobile viewport 375px ως guest, plus
πλήρες code trace του funnel (routing, auth, economy, store, analytics). Το «fresh
account» σκέλος καλύφθηκε από τον κώδικα — δεν δημιουργήθηκε λογαριασμός.
Re-check με GA4 δεδομένα ~2 εβδομάδες μετά το PR #39 (αφού μπουν τα fixes του A3
παρακάτω, αλλιώς τα νούμερα θα βγουν λάθος).

Funnel όπως υπάρχει σήμερα:
`/` → `/portal` (cinematic intro) → `/dashboard` (guest) → gates → `/store` → parent
verification → Stripe. Από landing μέχρι «κοίτα τι έφτιαξα»: ~7 βήματα + υποχρεωτικό
διάβασμα ιστορίας, με το πρώτο actual signup ask να ΜΗΝ υπάρχει πουθενά στο κύριο μονοπάτι.

---

## P0 — Δομικές διαρροές (το funnel δεν ζητάει ποτέ λογαριασμό, και όποιος γραφτεί χάνεται)

### 1. Το κουμπί «Εγγραφή» δεν κάνει εγγραφή
`components/GuestBanner.tsx:89-97` — και τα ΔΥΟ κουμπιά του banner («Εγγραφή» και
«Συνέχεια ως επισκέπτης») καλούν το ίδιο `handleEnterPortal()` → `/portal`.
Το μοναδικό κουμπί με label «Εγγραφή» στο landing δεν οδηγεί στη φόρμα.
**Fix:** «Εγγραφή» → `/login?mode=register`. Μία γραμμή.

### 2. Το κύριο CTA path δεν ζητάει ποτέ λογαριασμό
`LandingPage.tsx:248` «ΞΕΚΙΝΑ ΤΟ ΤΑΞΙΔΙ» → `/portal` · `App.tsx:289-292` το CTA του
portal → `/dashboard` ως guest. Στο `/portal` δεν υπάρχει ΚΑΝΕΝΑ signup CTA. Ο guest
καταλήγει σε πλήρες dashboard χωρίς να του ζητηθεί ποτέ email. Μόνα σημεία εγγραφής:
το top banner του `SemiPublicRoute` και τα post-failure redirects (music/video/3D).
**Fix:** signup CTA στο `/portal` δίπλα στο «ΞΕΚΙΝΑ ΤΟ ΤΑΞΙΔΙ» («Δωρεάν εγγραφή —
κράτα ό,τι φτιάξεις») + persistent «Εγγραφή» στο guest dashboard header.

### 3. Το verification email οδηγεί σε ανύπαρκτη σελίδα
`api/auth/signup.ts` (και στα δύο paths): `redirectTo: 'https://wisebot.gr/auth'` —
**δεν υπάρχει route `/auth`** (live-verified: καταλήγει στο `/` μέσω του catch-all).
Ο γονιός που επιβεβαιώνει το email προσγειώνεται στο marketing homepage, logged out,
χωρίς κανένα μήνυμα. Πιθανότατα το μεγαλύτερο hard drop-off για όσους ΟΝΤΩΣ γράφτηκαν.
Το `SetPasswordScreen.tsx` υπάρχει αλλά δεν γίνεται import πουθενά.
**Fix:** route `/auth` που καταναλώνει το redirect (session αν υπάρχει token στο hash,
αλλιώς «Το email επιβεβαιώθηκε ✓» → login με prefilled email).

### 4. Μετά το signup: redirect σε dashboard χωρίς session
`AuthScreen.tsx:171-174` — μετά την εγγραφή `navigate('/dashboard')` σε 1s, αλλά το
signup ΔΕΝ δημιουργεί session (σωστά — «Don't auto-login», `AuthContext.tsx:211`).
Ο νέος χρήστης γίνεται σιωπηλά guest: ούτε onboarding (θέλει profile), ούτε greeting,
ούτε σαφές «τσέκαρε το email σου» state. Το onboarding overlay (`Dashboard.tsx:577`)
δεν θα εμφανιστεί ποτέ σε αυτή τη ροή.
**Fix:** αντί για redirect, full-screen «Σου στείλαμε email στο X — πάτα τον σύνδεσμο»
με resend button (υπάρχει ήδη component στο `AuthScreen.tsx:229-277`) και «Συνέχεια ως
επισκέπτης μέχρι τότε» ως secondary.

### 5. Analytics: τα νούμερα του re-check θα βγουν λάθος
`utils/analytics.ts:24` — το `purchase` στέλνει `value: credits` με `currency: 'EUR'`:
πώληση €9.99 (hero pack) γράφεται ως **240 EUR** revenue. Google OAuth δεν στέλνει ούτε
`sign_up` ούτε `login` (`AuthContext.tsx:246-260`). Κανένα event στα drop-off σημεία:
portal entry, store view, UnlockGate impression, `login_required` block, verification
modal. Το σχέδιο «GA4 funnel data σε 2 εβδομάδες» μετράει λάθος πράγματα αν δεν
διορθωθεί ΤΩΡΑ.
**Fix:** value σε EUR από το pack price, tracking στο OAuth path, events:
`wb_gate_block` (με reason), `view_store`, `wb_portal_enter`, `wb_verify_gate_shown`.

---

## P1 — Activation & αγορά

### 6. Login gate ΑΦΟΥ το παιδί συμπληρώσει όλη τη φόρμα
Music/Cinema/3D επιστρέφουν `401 login_required` για guests **μετά** το submit
(`api/ai/suno-generate.ts:38`, `video-generate.ts:25`, `meshy-generate.ts:61` →
redirects σε `MusicStudio.tsx:456-461`, `Cinema.tsx:544-547`, `ThreeDFactory.tsx:277-281`).
Το παιδί επενδύει στη δημιουργία και μετά χτυπάει τοίχο.
**Fix:** ρώτα για λογαριασμό στην είσοδο του εργαστηρίου (ή πριν το generate κουμπί
γίνει ενεργό), όχι μετά το submit.

### 7. Μετά την αγορά: πίσω στο /store, όχι στη δημιουργία που μπλόκαρε
`api/stripe/checkout.ts:43` — `success_url = /store?success=true`. Ο αγοραστής μπήκε
στο store επειδή κάτι ήθελε να φτιάξει· τον γυρνάμε στη βιτρίνα.
**Fix:** `return_to` param στο checkout → success redirect πίσω στο εργαστήριο.

### 8. Ο δρόμος προς την αγορά είναι λαβύρινθος
store → verification modal → `/parent?verify=true` → (login αν guest) → **PIN gate**
(`ParentDashboard.tsx:429-434`) → Twilio OTP → πίσω στο store → ξανά κουμπί αγοράς.
Κάθε hop χάνει αγοραστές — και ο πιο πρόθυμος γονιός της ροής είναι αυτός με την
κάρτα στο χέρι.
**Fix:** inline OTP βήμα ΜΕΣΑ στο verification modal του store (χρησιμοποιεί τα ίδια
`/api/auth/send-otp`/`verify-otp`), χωρίς έξοδο από τη σελίδα.

### 9. Το κινητό γονέα ζητιέται στο signup ενώ χρειάζεται μόνο για αγορές
`AuthScreen.tsx:319-330` — required client-side (το ίδιο το helper text λέει «πριν από
αγορές»), δεν validάρεται καν server-side (`api/auth/signup.ts:66`). 5 πεδία + checkbox
στην πρώτη επαφή.
**Fix:** αφαίρεση από το signup· ζήτα το στο verification (εκεί γίνεται το OTP έτσι
κι αλλιώς). Το signup πέφτει σε: nickname, email, password, consent.

### 10. Πρώτη δημιουργία: SEO υπόσχεση vs gate + 10⚡ vs 60-80⚡
- Το `/factory` έχει SEO title «Φτιάξε Εικόνες με AI **Δωρεάν**» και υποδέχεται τον
  επισκέπτη με «ΟΧΙ ΑΚΟΜΑ, ΦΙΛΕ ΜΟΥ!» (`utils/unlocks.ts:35-49` — θέλει 1 ιστορία).
  Το pedagogy είναι σωστό (learn→create) αλλά το bounce είναι άσχημο για SEO traffic.
  **Fix:** στο UnlockGate, embed την ιστορία inline («Διάβασε ΤΩΡΑ εδώ τον Walt Disney
  → ξεκλειδώνει αμέσως») αντί για redirect στην Ακαδημία.
- Τα 10⚡ welcome αγοράζουν 1 εικόνα (6⚡). Τραγούδι 60⚡, 3D 60⚡, video 80⚡ — τα
  marquee features είναι 6-8× μακριά την πρώτη μέρα, ενώ το banner υπόσχεται «πρόσβαση
  σε AI εργαλεία». **Απόφαση ιδιοκτήτη** (όχι PR ακόμα): first-song discount / 15s
  preview δωρεάν / ή ειλικρινές messaging «τα 10⚡ φτάνουν για τον πρώτο σου ήρωα».

---

## P2 — Υγιεινή, copy, εμπιστοσύνη

11. **Τιμές αόρατες πριν το commitment**: το `/store` δουλεύει για guests (live-verified,
    δείχνει και τα 4 packs) αλλά δεν υπάρχει link από πουθενά public και λείπει από το
    sitemap. Μόνη δημόσια τιμή: μία πρόταση «από €4,99» στο landing. **Fix:** link
    «Τιμές» στο landing (for-parents section + footer) → `/store`, προσθήκη στο
    sitemap, και parent-voiced copy στη σελίδα (τώρα μιλάει στο παιδί: «Ζήτα βοήθεια
    από τον γονέα σου»).
12. **Stale copy «24 δωρεάν credits»** στο `WiseBotChat.tsx:180-181` (πραγματικά: 10) —
    dead code path έτσι κι αλλιώς (`FREE_MESSAGE_LIMIT = Infinity`, `:132`).
13. **`ProtectedRoute` δεν προστατεύει τίποτα** (`App.tsx:322-327` — κανένα user check):
    guest ανοίγει `/dashboard`, `/account`, `/parent`, `/admin` shell. Server auth
    υπάρχει στα APIs, αλλά τα dead-end UIs μπερδεύουν. Το `/store` να ΜΕΙΝΕΙ public
    (βλ. #11). Επίσης `LoginPromptModal` στο `SemiPublicRoute` = dead code.
14. **`AutoRedirectIfLoggedIn` είναι no-op** (`App.tsx:318-320`) — logged-in χρήστης
    στο `/` ξαναβλέπει marketing αντί για το dashboard του.
15. **Portal intro 3.2s** πριν από οτιδήποτε actionable στην πρώτη επίσκεψη (skip μέσω
    `wb_portal_seen` στις επόμενες). Μετρήσιμο μετά το `wb_portal_enter` event· αν το
    GA δείξει drop, skip button.

---

## Προτεινόμενα PRs (μικρά, με τη σειρά)

| PR | Περιεχόμενο | Findings | Μέγεθος |
|----|-------------|----------|---------|
| A | GuestBanner «Εγγραφή» → `/login?mode=register` + signup CTA σε `/portal` & guest dashboard | 1, 2 | S |
| B | Route `/auth` (verify landing) + post-signup «τσέκαρε το email» screen | 3, 4 | M |
| C | Analytics fixes: EUR value, OAuth tracking, gate/store/portal events | 5 | S |
| D | Login gate στην είσοδο των ακριβών εργαστηρίων + `return_to` στο checkout | 6, 7 | M |
| E | Κινητό εκτός signup (μετακίνηση στο verification) | 9 | S |
| F | Inline OTP στο store modal | 8 | M |
| G | Copy/hygiene: «24 credits», τιμές public link + sitemap, ProtectedRoute guard, AutoRedirect | 11-14 | S |
| — | UnlockGate inline story & welcome-credits πολιτική | 10 | Θέλει απόφαση ιδιοκτήτη |

Σημείωση μεθοδολογίας: το walkthrough έγινε σε hidden browser pane όπου τα
framer-motion animations παγώνουν (rAF throttling) — ό,τι «κολλημένο animation»
εμφανίστηκε εκεί επαληθεύτηκε ξεχωριστά πριν μπει (ή όχι) στη λίστα. Το κομμένο H1
του landing σε 375px ήταν artifact αυτού και ΔΕΝ είναι πραγματικό bug.
