# WiseBot — Store packaging

Δύο apps, ένα web codebase. Ό,τι βγαίνει live στο wisebot.gr είναι αυτόματα και το
περιεχόμενο των apps — κανένα ξεχωριστό release για αλλαγές στο site.

```
store/android/   Trusted Web Activity (Bubblewrap) → Google Play
store/ios/       Capacitor shell (SPM, χωρίς CocoaPods) → App Store
store/assets/    Store listing: 6 phone screenshots, 1 tablet, feature graphic 1024×500
```

## Android (TWA) — gr.wisebot.academy

- Config: `android/twa-manifest.json`. Rebuild: `npx @bubblewrap/cli build`
  με `BUBBLEWRAP_KEYSTORE_PASSWORD`/`BUBBLEWRAP_KEY_PASSWORD` από το
  `android/keystore-credentials.txt` (gitignored — ΦΥΛΑΞΕ το σε password manager).
- Toolchain: `~/.bubblewrap/` (δικό του JDK 17 + Android cmdline-tools· το
  `androidSdkPath` στο config.json δείχνει ΜΕΣΑ στο cmdline-tools/latest — έτσι το
  περιμένει το Bubblewrap).
- `public/.well-known/assetlinks.json` (live στο wisebot.gr) δένει το package με το
  domain — χωρίς αυτό η TWA δείχνει URL bar. Περιέχει το SHA256 του ΔΙΚΟΥ μας
  upload key. **Μετά το πρώτο upload**: Play Console → Setup → App signing →
  αντιγράφεις το SHA-256 της Google και το ΠΡΟΣΘΕΤΕΙΣ (append, όχι replace) στο
  array — αλλιώς το κατεβασμένο από το Play app ανοίγει με browser UI.
- Ανέβασμα: Play Console → Create app → Production (ή Internal testing πρώτα) →
  upload το `app-release-bundle.aab`.

## iOS (Capacitor) — χρειάζεται Xcode

Το shell φορτώνει το wisebot.gr remote (μηδέν CORS αλλαγές, instant updates).
Βήματα σε Mac με Xcode: `cd store/ios && npm i && npx cap sync ios && npx cap open ios`
→ Signing με το Apple Developer team → Archive → Upload.

**Ρίσκα iOS που θέλουν απόφαση ΠΡΙΝ το submission:**
1. **Guideline 4.2 (minimum functionality):** η Apple απορρίπτει «σκέτα wrappers».
   Μετριασμός: native splash/status bar, αργότερα push notifications· αν κολλήσει
   το review, bundling του build τοπικά αντί για remote URL.
2. **Guideline 3.1.1 (πληρωμές):** τα credits είναι ψηφιακό περιεχόμενο — μέσα στο
   iOS app η αγορά με Stripe ΔΕΝ επιτρέπεται (θέλει In-App Purchase με 30% ή τις
   κατά περίπτωση εξαιρέσεις EU/US). Επιλογές: IAP για credits στο iOS app, ή το
   app να ΜΗΝ πουλάει (αγορά μόνο από το site, χωρίς link-out — «reader»-style).
   Στο Android το Play έχει αντίστοιχο κανόνα (Play Billing) με EU εναλλακτικές.
3. **Kids/Families:** app που απευθύνεται σε παιδιά → Play «Designed for Families»
   και App Store Kids rules: αυστηροί όροι για analytics/διαφημίσεις/συλλογή
   δεδομένων + parental gate πριν από αγορές/εξωτερικά links. Το GA4 πρέπει να
   δηλωθεί σωστά στα Data Safety / Privacy Nutrition forms. Privacy policy:
   https://wisebot.gr/privacy

## Λογαριασμοί (πληρώνει ο ιδιοκτήτης)

- Google Play Console: $25 εφάπαξ — https://play.google.com/console/signup
- Apple Developer Program: $99/χρόνο — https://developer.apple.com/programs/enroll
  (ατομικός ή εταιρικός· ο εταιρικός θέλει D-U-N-S number της ITDev)

## Build σημειώσεις (αυτό το μηχάνημα)

Το bubblewrap build ΕΧΕΙ bug με το SDK layout — το ξεπεράσαμε: το SDK ζει στο
`~/.bubblewrap/android_sdk` (standard layout), το project έχει `local.properties`
που δείχνει εκεί, και χτίζουμε ΚΑΤΕΥΘΕΙΑΝ με gradle:

    cd store/android
    JAVA_HOME=~/.bubblewrap/jdk/jdk-17.0.11+9/Contents/Home ./gradlew bundleRelease
    # μετά jarsigner για το .aab, zipalign+apksigner για το .apk (δες ιστορικό)

Στο generated build.gradle το AGP ανέβηκε 8.9.1→8.11.1 και το gradle wrapper
8.11.1→8.13 (το compileSdk 36 το απαιτεί). Αν το bubblewrap ξανα-generate το
project, ξαναβάλε τα δύο αυτά versions.
