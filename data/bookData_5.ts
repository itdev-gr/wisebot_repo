
import { Book } from '../types';

// ============================================================
// 📖 BOOK 5: ΚΟΙΤΑ ΜΠΡΟΣΤΑ / LOOK AHEAD
// Hero: Sparken (ο αετός)
// Theme: ΟΡΑΜΑ / VISION
// ============================================================

// Cover image
const IMG_SPARKEN = "/images/sparken.jpg";

// Story images
const IMG_KIDS_WITH_SPARKEN = "/images/paidia-kai-sparken.png";
const IMG_KIDS_TOGETHER = "/images/ta-3-paidia.png";

export const BOOK_5: Book[] = [
  {
    id: 5,
    title: { el: "ΚΟΙΤΑ ΜΠΡΟΣΤΑ", en: "LOOK AHEAD" },
    theme: { el: "ΟΡΑΜΑ", en: "VISION" },
    stepLabel: { el: "SPARKEN & ΤΟ ΟΡΑΜΑ", en: "SPARKEN & VISION" },
    author: "Sparken",
    cover: IMG_SPARKEN,
    videoUrl: "",
    description: {
      el: "Το έφτιαξαν, αλλά φοβούνται να το δείξουν γιατί 'δεν είναι τέλειο'. Ο Sparken εμφανίζεται για να τους μάθει ότι τίποτα δεν βγαίνει τέλειο στην αρχή.",
      en: "They made it, but they are afraid to show it because 'it's not perfect'. Sparken appears to teach them that nothing comes out perfect at the beginning."
    },
    meaning: {
      el: "Τίποτα δεν γίνεται τέλειο στο σκοτάδι. Όλα γίνονται καλύτερα μόνο όταν βγουν στο φως.",
      en: "Nothing becomes perfect in the dark. Everything gets better only when it comes out into the light."
    },
    xp: 150,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- ΕΙΣΑΓΩΓΙΚΟ QUOTE -->
        <div class="relative bg-gradient-to-r from-sky-900/80 via-cyan-900/60 to-blue-900/40 p-10 rounded-2xl border border-sky-500/30 text-center shadow-lg shadow-sky-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Κεφάλαιο 5</div>
          <p class="italic text-sky-200 text-xl mt-4 leading-relaxed">«Αν περιμένεις να είσαι έτοιμος,<br/>θα περιμένεις για πάντα.»</p>
          <div class="mt-4 w-16 h-0.5 bg-sky-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- ΣΚΗΝΗ 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-sky-600/30 border border-sky-500/30 text-sky-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-sky-400 tracking-wide">ΤΟ ΠΡΑΓΜΑ ΠΟΥ ΚΡΑΤΟΥΣΑΝ</h3>
          </div>
          <p>Το είχαν μπροστά τους. Στο τραπέζι, κάτω από το φως. Το πράγμα που έφτιαξαν.</p>
          <p class="mt-3">Δεν ήταν όπως το είχαν φανταστεί. Ήταν μικρό — πιο μικρό απ' ότι ήθελαν. Λίγο στραβό στη μία πλευρά. Με γρατζουνιές που φαίνονταν κάτω από το φως. Μια κόλλα που δεν στέγνωσε ακόμα.</p>
          <p class="mt-3">Αλλά <strong>υπήρχε</strong>. Ήταν εκεί. Πραγματικό. Αγγιγμένο από τα χέρια τους.</p>
          <p class="mt-4">Ο Φίλιππος το γύριζε στα χέρια του. Αργά. Σαν κάποιος που κρατάει κάτι εύθραυστο — ή κάτι ντροπιαστικό. «Δεν είναι τέλειο», μουρμούρισε.</p>
          <p class="mt-3">Η Αλεξάνδρα ένιωσε σφίξιμο στο στομάχι. Εκείνο το σφίξιμο που σε πιάνει πριν ανοίξεις τετράδιο μπροστά σε κόσμο. «Και αν γελάσουν;» Η φωνή της ήταν σχεδόν ψίθυρος.</p>
          <p class="mt-3">Η Ελευθερία δεν μιλούσε. Καθόταν με σταυρωμένα χέρια, τα μάτια κλεισμένα σε μισό βάθος. Σκεφτόταν. Κάτι μέσα της πάλευε — η θέληση να δείξει εναντίον του φόβου να κριθεί.</p>
          <p class="mt-4 text-gray-400 text-sm italic">Ο φόβος της κρίσης είναι πιο δυνατός από τον φόβο της αποτυχίας. Γιατί η αποτυχία είναι δική σου. Η κρίση… είναι τους άλλους.</p>
        </section>

        <!-- ΣΚΗΝΗ 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-600/30 border border-gray-500/30 text-gray-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-gray-400 tracking-wide">Η ΣΙΩΠΗ ΤΗΣ ΤΕΛΕΙΟΜΑΝΙΑΣ</h3>
          </div>
          <p>Κανείς δεν έλεγε «πάμε». Η λέξη κρεμόταν στον αέρα, αόρατη, αλλά κανείς δεν τη φώναζε.</p>
          <p class="mt-3">Ο Crocus ήταν εκεί. Στην άκρη του τραπεζιού, με τα χέρια στην τσέπη. Και για πρώτη φορά… <em>δεν φώναζε</em>. Κοιτούσε τα παιδιά. Κοιτούσε τον φόβο τους. Και τον αναγνώριζε — γιατί κάποτε ήταν δικός του.</p>
          <p class="mt-3">— «Τι περιμένετε;» ρώτησε χαμηλά. Η φωνή του ήταν μαλακή. Ασυνήθιστα μαλακή.</p>
          <p class="mt-3 text-gray-400">— «Να το κάνουμε καλύτερο», είπε η Ελευθερία.</p>
          <p class="mt-2 text-gray-400">— «Να μην χαλάσει», είπε ο Φίλιππος.</p>
          <p class="mt-2 text-gray-400">— «Να μη μας κρίνουν», σκέφτηκε η Αλεξάνδρα — αλλά δεν το είπε δυνατά.</p>
          <p class="mt-4">Ο Crocus τους κοίταξε. Ένα-ένα. Αργά.</p>
          <p class="mt-3"><strong class="text-white text-lg">«Δηλαδή… να μην το δείξετε ποτέ;»</strong></p>
          <p class="mt-3">Κανείς δεν απάντησε. Αλλά η σιωπή ήταν η απάντηση.</p>
          <p class="mt-4 text-gray-400 text-sm italic">Η τελειομανία δεν λέει «κάνε κάτι καλύτερο». Λέει «μην κάνεις τίποτα — μέχρι να γίνεις αρκετός». Και κανείς δε γίνεται ποτέ αρκετός μέσα στο σκοτάδι.</p>
        </section>

        <!-- ΣΚΗΝΗ 3 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/30 text-blue-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-blue-300 tracking-wide">Η ΑΝΑΜΟΝΗ</h3>
          </div>
          <p>Πέρασε ώρα. Λεπτά που ένιωθαν σαν ώρες. Κανείς δεν άγγιζε το αντικείμενο. Στεκόταν εκεί, στη μέση του τραπεζιού, σαν τρόπαιο που ντρέπεται η ίδια η ομάδα να σηκώσει.</p>
          <p class="mt-3">Η WiseBot εμφανίστηκε. Αθόρυβα, σαν πάντα. Δεν μίλησε. Το φως της έμενε σταθερό — ούτε δυνατό, ούτε αδύναμο. Σαν να περίμενε κι αυτή. Σαν να ήξερε ότι κάτι ερχόταν.</p>
          <p class="mt-3">Ο Pencilo κουνούσε νευρικά ένα μολύβι. Η Link κοίταξε τη σύνδεση USB στην ουρά της — σαν να τσέκαρε αν υπάρχει σήμα. Ο Crocus χτυπούσε τα δάχτυλά του στο τραπέζι. <em>Τικ. Τοκ. Τικ.</em></p>
          <p class="mt-3">Ο αέρας στο δωμάτιο ήταν βαρύς. Σαν η ατμόσφαιρα πριν από κάτι — αλλά κανείς δεν ήξερε τι.</p>
          <p class="mt-4 text-gray-400 text-sm italic">Μερικές φορές, η αλλαγή δε χρειάζεται κραυγή. Χρειάζεται φτερούγισμα.</p>
        </section>

        <!-- ΣΚΗΝΗ 4 — Ο ΑΕΤΟΣ -->
        <section class="bg-gradient-to-br from-sky-900/30 via-cyan-900/20 to-blue-900/10 p-8 rounded-2xl border-l-8 border-sky-500 my-8 shadow-xl shadow-sky-900/20">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-sky-400/40 text-white font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-white tracking-wide">Ο ΑΕΤΟΣ</h3>
          </div>
          <p>Ένας αέρας μπήκε στο δωμάτιο. Όχι δυνατός — <em>ψηλός</em>. Σαν αέρας που κατεβαίνει από κορυφή βουνού. Μύρισε ελευθερία. Μύρισε ύψος. Τα χαρτιά στο τραπέζι τρεμόπαιξαν σαν φύλλα.</p>
          <p class="mt-3">Και μετά — σκιά. Πλατιά. Σαν σύννεφο που περνά μπροστά από τον ήλιο.</p>
          <p class="mt-3">Ένας <strong class="text-sky-300">αετός</strong> προσγειώθηκε αθόρυβα. Τα φτερά του ήταν σαν ολόγραμμα — ημιδιαφανή, με χρώματα που άλλαζαν κάθε φορά που κουνιόταν, σαν ηλιοβασίλεμα σε κίνηση. Τα μάτια του ήταν χρυσά. Βαθιά. Μάτια που δεν κοιτούσαν αυτό που ήταν μπροστά — κοιτούσαν αυτό που <em>θα γινόταν</em>.</p>
          <p class="mt-3">Στάθηκε στην άκρη του τραπεζιού. Ψηλός. Ακίνητος. Σαν άγαλμα που ανασαίνει.</p>

          <!-- ΕΙΚΟΝΑ: KIDS + SPARKEN -->
          <div class="my-8 rounded-2xl overflow-hidden border border-sky-500/20 shadow-2xl shadow-sky-900/30">
            <img src="${IMG_KIDS_WITH_SPARKEN}" alt="Τα παιδιά συναντούν τον Sparken" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-sky-300/80 italic">Ο Sparken — ο αετός που βλέπει πέρα από το τώρα</div>
          </div>

          <p class="mt-4 text-sky-200 font-bold text-lg">— «Τι κοιτάτε;» ρώτησε. Η φωνή του ήταν βαθιά. Ήρεμη. Σαν ήχος αέρα σε φαράγγι.</p>
          <p class="mt-3 text-sky-300 font-bold text-xl">— «Κοιτάτε πολύ κοντά.»</p>
          <p class="mt-3">— «Ποιος είσαι;» ρώτησε η Αλεξάνδρα. Η φωνή της ήταν γεμάτη δέος.</p>
          <p class="mt-3 text-white font-bold text-xl">— «Με λένε <strong class="text-sky-300 text-2xl">Sparken</strong>. Κι εγώ δεν βλέπω τα πράγματα. Βλέπω πού πάνε.»</p>
        </section>

        <!-- ΣΚΗΝΗ 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-600/30 border border-cyan-500/30 text-cyan-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-cyan-400 tracking-wide">ΤΟ ΜΕΛΛΟΝ</h3>
          </div>
          <p>Ο Sparken δεν άγγιξε το αντικείμενο. Δεν το σήκωσε. Δεν το εξέτασε. Κοίταξε <em>πέρα</em> από αυτό. Σαν αετός που βλέπει τον ορίζοντα πίσω από το βουνό.</p>
          <p class="mt-3 text-sky-200 font-bold text-lg">— «Ξέρετε τι είναι αυτό που κρατάτε;»</p>
          <p class="mt-3">Η Ελευθερία σκέφτηκε. «Μια πρώτη προσπάθεια.»</p>
          <p class="mt-3">Ο Sparken έγνεψε. Τα φτερά-ολόγραμμα τρεμόπαιξαν ελαφρά. «Σωστά. Και ξέρετε τι <strong>ΔΕΝ</strong> είναι;»</p>
          <p class="mt-3">Σιωπή. Τα τρία παιδιά τον κοιτούσαν.</p>
          <p class="mt-3 text-sky-300 font-bold text-xl">«Δεν είναι τελικό.»</p>
          <p class="mt-3">Ο Φίλιππος ένιωσε κάτι να αλλάζει μέσα του. Σαν πόρτα που ανοίγει — μικρή, σε ένα δωμάτιο που νόμιζε κλειδωμένο.</p>
          <p class="mt-3">«Δεν χρειάζεται να είναι τελικό», συνέχισε ο Sparken. «Χρειάζεται μόνο να <em>βγει</em>. Γιατί μόνο στο φως μπορεί να αλλάξει.»</p>
          <p class="mt-4 text-gray-400 text-sm italic">Τίποτα δεν εξελίσσεται στο σκοτάδι. Ούτε τα φυτά. Ούτε οι ιδέες. Ούτε εσύ.</p>
        </section>

        <!-- ΣΚΗΝΗ 6 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-fuchsia-600/30 border border-fuchsia-500/30 text-fuchsia-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-fuchsia-400 tracking-wide">Η ΕΞΕΛΙΞΗ</h3>
          </div>
          <p>«Αν το δείξουμε έτσι, θα νομίζουν ότι δεν ξέρουμε τι κάνουμε!» είπε η Αλεξάνδρα. Η φωνή της είχε εκείνο το τρέμουλο — μεταξύ θυμού και τρόμου.</p>
          <p class="mt-3">Ο Sparken γύρισε προς το μέρος της. Τα χρυσά μάτια του ήταν ζεστά. Χωρίς κρίση. Χωρίς πίεση. Μόνο αλήθεια.</p>
          <p class="mt-3 text-sky-200 font-bold text-lg">— «Και αν δεν το δείξετε, θα νομίζετε <em>εσείς</em> ότι δεν μπορείτε.»</p>
          <p class="mt-4">Η Αλεξάνδρα κατέβασε τα μάτια. Τα δάχτυλά της σφίγγαν τη γωνία του ποδιού της. <em>Ήξερε ότι είχε δίκιο.</em></p>
          <p class="mt-4">Η WiseBot μίλησε τελευταία. Το φως της ήταν γαλάζιο τώρα — σαν ουρανός πριν τη δύση.</p>
          <p class="mt-3"><strong class="text-white text-lg">«Η εξέλιξη χρειάζεται φως. Όχι τελειότητα.»</strong></p>
          <p class="mt-4 text-gray-400 text-sm italic">Η τελειότητα είναι η φυλακή. Η εξέλιξη είναι η πόρτα. Και το κλειδί είναι το θάρρος.</p>
        </section>

        <!-- ΣΚΗΝΗ 7 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-green-600/30 border border-green-500/30 text-green-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-white tracking-wide">ΤΟ ΠΡΩΤΟ ΔΕΙΞΙΜΟ</h3>
          </div>
          <p>Δεν έκαναν παρουσίαση. Δεν ετοίμασαν σκηνή. Δεν κάλεσαν κόσμο.</p>
          <p class="mt-3">Το έδειξαν σε <strong>έναν</strong>. Ένα παιδί από τη διπλανή αυλή. Κάποιον που δεν ήξερε τίποτα — ούτε ήρωες, ούτε σχέδια, ούτε κύκλους αποτυχίας.</p>
          <p class="mt-3">«Τι είναι αυτό;» ρώτησε το παιδί, γέρνοντας το κεφάλι.</p>
          <p class="mt-3">Ο Φίλιππος δίστασε. Κατάπιε. «Είναι… κάτι που φτιάχνουμε.» Η φωνή του τρεμόπαιξε στο «φτιάχνουμε» — γιατί δεν ήταν σίγουρος αν αξίζει αυτή η λέξη.</p>
          <p class="mt-3">Το παιδί το πήρε στα χέρια. Το γύρισε. Το κοίταξε. Σιωπή.</p>
          <p class="mt-3">«Δεν είναι τέλειο», είπε.</p>
          <p class="mt-3">Η καρδιά της Αλεξάνδρας βούλιαξε. <em>Ήξερα. Ήξερα ότι δεν έπρεπε.</em></p>
          <p class="mt-3">Μετά—</p>
          <p class="mt-3 text-green-400 font-bold text-xl">«Αλλά είναι ωραίο.»</p>
          <p class="mt-3">Και χαμογέλασε. Ένα χαμόγελο ειλικρινές. Αυτό το χαμόγελο που δεν μπορείς να ψεύσεις.</p>
          <p class="mt-3">Η Αλεξάνδρα ένιωσε τα μάτια της να καίνε. Ο Φίλιππος κούνησε τη γροθιά σιωπηλά κάτω από το τραπέζι. Η Ελευθερία… χαμογέλασε. Αυτό ήταν αρκετό.</p>
          <p class="mt-4 text-gray-400 text-sm italic">Δεν χρειάζεσαι χιλιάδες. Χρειάζεσαι ΕΝΑΝ — που θα δει αυτό που δεν βλέπεις εσύ.</p>
        </section>

        <!-- ΣΚΗΝΗ 8 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-sky-600/30 border border-sky-500/30 text-sky-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-sky-300 tracking-wide">Ο ΚΥΚΛΟΣ ΚΛΕΙΝΕΙ</h3>
          </div>
          <p>Το βράδυ, γύρισαν στο τραπέζι. Τα πρόσωπά τους ήταν διαφορετικά τώρα. Πιο γαλήνια. Πιο ανοιχτά. Σαν παράθυρα που ξεθόλωσαν μετά τη βροχή.</p>
          <p class="mt-3">Δεν κάθισαν να φτιάξουν κάτι τέλειο. Κάθισαν να φτιάξουν κάτι <em>καλύτερο</em>. Μικρή αλλαγή στη λέξη. Τεράστια αλλαγή στη σημασία.</p>

          <!-- ΕΙΚΟΝΑ: KIDS TOGETHER -->
          <div class="my-8 rounded-2xl overflow-hidden border border-sky-500/20 shadow-2xl shadow-sky-900/30">
            <img src="${IMG_KIDS_TOGETHER}" alt="Τα τρία παιδιά μαζί" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-sky-300/80 italic">Ο κύκλος κλείνει — τα πέντε μαθήματα ένα</div>
          </div>

          <p class="mt-4">Οι πέντε ήρωες στέκονταν γύρω τους. Σαν φρουρά. Σαν οικογένεια.</p>
          <p class="mt-3">Η WiseBot τους κοίταξε. Το φως της ήταν λαμπερό τώρα — σαν αστέρι χωρίς σύννεφα.</p>
          <p class="mt-3 text-indigo-200">— «Σκεφτήκατε.»</p>
          <p class="mt-2 text-lime-200">Ο Crocus χαμογέλασε. «Ξεκινήσατε.»</p>
          <p class="mt-2 text-cyan-200">Ο Pencilo έδειξε το χαρτί. «Σχεδιάσατε.»</p>
          <p class="mt-2 text-blue-200">Η Link άγγιξε το αντικείμενο. «Το φτιάξατε.»</p>
          <p class="mt-4 font-bold text-white text-xl">Ο Sparken απλώθηκε τα φτερά. Χρώματα γέμισαν το δωμάτιο — σαν ουράνιο τόξο σε σκοτεινό ουρανό.</p>
          <p class="mt-3 text-sky-300 font-bold text-2xl">«Τώρα… κοιτάτε μπροστά.»</p>
          <p class="mt-4 text-gray-400 text-sm italic">Κάθε ταξίδι τελειώνει κάπου. Αλλά τα σωστά ταξίδια τελειώνουν εκεί — στην αρχή του επόμενου.</p>
        </section>

        <!-- JOURNAL -->
        <div class="mt-12 bg-sky-950/60 p-8 rounded-3xl border-2 border-dashed border-sky-500/40 shadow-xl">
          <h4 class="text-xl font-black text-sky-300 uppercase tracking-wider mb-6 flex items-center gap-2">
            📓 JOURNAL: ΚΟΙΤΑ ΜΠΡΟΣΤΑ
          </h4>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-sky-500/20">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-7 h-7 rounded-full bg-sky-600/40 flex items-center justify-center text-xs font-bold text-sky-200">1</span>
                <h5 class="text-sky-200 font-bold">Ο ΦΟΒΟΣ</h5>
              </div>
              <p class="text-sm mb-3 opacity-80">Τι κρατάς κρυφό γιατί φοβάσαι ότι «δεν είναι αρκετά καλό»;</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-sky-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-sky-500/20">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-7 h-7 rounded-full bg-sky-600/40 flex items-center justify-center text-xs font-bold text-sky-200">2</span>
                <h5 class="text-sky-200 font-bold">ΤΟ ΘΑΡΡΟΣ</h5>
              </div>
              <p class="text-sm mb-3 opacity-80">Σε ποιον ΕΝΑΝ άνθρωπο μπορείς να το δείξεις σήμερα;</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-sky-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-sky-500/20">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-7 h-7 rounded-full bg-sky-600/40 flex items-center justify-center text-xs font-bold text-sky-200">3</span>
                <h5 class="text-sky-200 font-bold">Η ΥΠΟΣΧΕΣΗ</h5>
              </div>
              <p class="text-sm mb-3 opacity-80">Συμπλήρωσε:</p>
              <div class="bg-black/30 p-4 rounded-lg border border-sky-500/20">
                <p class="text-sm text-sky-200">«Δεν περιμένω να είμαι έτοιμος. Κάνω __________»</p>
              </div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-sky-500/20">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-7 h-7 rounded-full bg-sky-600/40 flex items-center justify-center text-xs font-bold text-sky-200">4</span>
                <h5 class="text-sky-200 font-bold">ΤΟ ΜΑΘΗΜΑ ΤΟΥ SPARKEN</h5>
              </div>
              <p class="text-sm mb-3 opacity-80">Πού θέλεις να δεις τον εαυτό σου σε ένα χρόνο;</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-sky-500/20"></div>
            </div>

          </div>
        </div>

        <!-- MEANING BOX -->
        <div class="mt-8 bg-gradient-to-br from-sky-950/80 to-cyan-950/60 p-8 rounded-3xl border border-sky-400/30 shadow-2xl">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-2xl">💎</span>
            <h4 class="text-xl font-black text-sky-300 uppercase tracking-wider">ΤΟ ΝΟΗΜΑ</h4>
          </div>
          <p class="text-gray-200 leading-relaxed text-lg">
            Τίποτα δεν γίνεται τέλειο στο σκοτάδι.<br/>
            Όλα γίνονται καλύτερα μόνο όταν <strong class="text-sky-300">βγουν στο φως</strong>.<br/>
            <span class="text-sky-200 italic mt-2 block">Η εξέλιξη δε ζητά τελειότητα. Ζητά θάρρος.</span>
          </p>
        </div>

        <!-- PARENTS MESSAGE -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-sky-950/60 p-8 rounded-3xl border border-sky-500/30 shadow-2xl relative">
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-sky-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
          </div>
          <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
            Η τελειομανία μοιάζει με ποιότητα, αλλά συχνά είναι φόβος μεταμφιεσμένος. Όταν τα παιδιά μάθουν ότι επιτρέπεται να δείξουν κάτι ατελές, <strong class="text-sky-300">μαθαίνουν να εξελίσσονται χωρίς ντροπή.</strong>
          </p>
          <div class="mt-4 bg-sky-900/30 p-4 rounded-xl border border-sky-500/20">
            <p class="text-sky-200 font-bold text-sm flex items-center gap-2">💡 ΠΡΑΚΤΙΚΗ ΣΥΜΒΟΥΛΗ:</p>
            <p class="text-gray-300 text-sm mt-2">Μην πείτε «μπράβο, είναι τέλειο» — γιατί θα φοβηθεί να κάνει λάθος. Πείτε: <em>«Μπράβο που το δοκίμασες. Τι θα ήθελες να αλλάξεις;»</em> Αυτό χτίζει θάρρος, όχι εξάρτηση από την τελειότητα.</p>
          </div>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- INTRO QUOTE -->
        <div class="relative bg-gradient-to-r from-sky-900/80 via-cyan-900/60 to-blue-900/40 p-10 rounded-2xl border border-sky-500/30 text-center shadow-lg shadow-sky-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Chapter 5</div>
          <p class="italic text-sky-200 text-xl mt-4 leading-relaxed">«If you wait to be ready,<br/>you will wait forever.»</p>
          <div class="mt-4 w-16 h-0.5 bg-sky-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- SCENE 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-sky-600/30 border border-sky-500/30 text-sky-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-sky-400 tracking-wide">THE THING THEY HELD</h3>
          </div>
          <p>They had it in front of them. On the table, under the light. The thing they built.</p>
          <p class="mt-3">It wasn't what they'd imagined. It was small — smaller than they wanted. Slightly crooked on one side. With scratches that showed under the light. Glue that hadn't dried yet.</p>
          <p class="mt-3">But it <strong>existed</strong>. It was there. Real. Touched by their hands.</p>
          <p class="mt-4">Philippos turned it in his hands. Slowly. Like someone holding something fragile — or something embarrassing. "It's not perfect," he murmured.</p>
          <p class="mt-3">Alexandra felt a tightness in her stomach. That tightness you get before opening a notebook in front of people. "What if they laugh?" Her voice was almost a whisper.</p>
          <p class="mt-3">Eleftheria didn't speak. She sat with crossed arms, eyes half-closed in thought. Something inside her fought — the will to show versus the fear of being judged.</p>
          <p class="mt-4 text-gray-400 text-sm italic">The fear of judgment is stronger than the fear of failure. Because failure is yours. Judgment… belongs to others.</p>
        </section>

        <!-- SCENE 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-600/30 border border-gray-500/30 text-gray-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-gray-400 tracking-wide">THE SILENCE OF PERFECTIONISM</h3>
          </div>
          <p>Nobody said "let's go." The word hung in the air, invisible, but nobody called it out.</p>
          <p class="mt-3">Crocus was there. At the edge of the table, hands in pockets. And for the first time… <em>he wasn't shouting</em>. He watched the kids. Watched their fear. And recognized it — because once, it had been his own.</p>
          <p class="mt-3">— "What are you waiting for?" he asked softly. His voice was gentle. Unusually gentle.</p>
          <p class="mt-3 text-gray-400">— "To make it better," said Eleftheria.</p>
          <p class="mt-2 text-gray-400">— "So it doesn't break," said Philippos.</p>
          <p class="mt-2 text-gray-400">— "So they don't judge us," thought Alexandra — but didn't say it aloud.</p>
          <p class="mt-4">Crocus looked at them. One by one. Slowly.</p>
          <p class="mt-3"><strong class="text-white text-lg">"Meaning… never show it?"</strong></p>
          <p class="mt-3">Nobody answered. But the silence was the answer.</p>
          <p class="mt-4 text-gray-400 text-sm italic">Perfectionism doesn't say "make it better." It says "don't do anything — until you're good enough." And nobody is ever good enough in the dark.</p>
        </section>

        <!-- SCENE 3 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/30 text-blue-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-blue-300 tracking-wide">THE WAIT</h3>
          </div>
          <p>Time passed. Minutes that felt like hours. Nobody touched the object. It stood there, in the center of the table, like a trophy that the team itself was ashamed to raise.</p>
          <p class="mt-3">WiseBot appeared. Silently, as always. She didn't speak. Her light stayed steady — neither bright nor weak. As if she too was waiting. As if she knew something was coming.</p>
          <p class="mt-3">Pencilo nervously twirled a pencil. Link checked the USB connection on her tail — as if looking for a signal. Crocus drummed his fingers on the table. <em>Tick. Tock. Tick.</em></p>
          <p class="mt-3">The air in the room was heavy. Like the atmosphere before something — but nobody knew what.</p>
          <p class="mt-4 text-gray-400 text-sm italic">Sometimes, change doesn't need a shout. It needs a wing beat.</p>
        </section>

        <!-- SCENE 4 — THE EAGLE -->
        <section class="bg-gradient-to-br from-sky-900/30 via-cyan-900/20 to-blue-900/10 p-8 rounded-2xl border-l-8 border-sky-500 my-8 shadow-xl shadow-sky-900/20">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-sky-400/40 text-white font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-white tracking-wide">THE EAGLE</h3>
          </div>
          <p>A breeze entered the room. Not strong — <em>high</em>. Like wind descending from a mountain peak. It smelled of freedom. It smelled of altitude. The papers on the table fluttered like leaves.</p>
          <p class="mt-3">And then — a shadow. Wide. Like a cloud passing in front of the sun.</p>
          <p class="mt-3">An <strong class="text-sky-300">eagle</strong> landed silently. His wings were like holograms — semi-transparent, with colors that shifted each time he moved, like a sunset in motion. His eyes were golden. Deep. Eyes that didn't look at what was here — they looked at what <em>would be</em>.</p>
          <p class="mt-3">He stood at the edge of the table. Tall. Still. Like a statue that breathes.</p>

          <!-- IMAGE: KIDS + SPARKEN -->
          <div class="my-8 rounded-2xl overflow-hidden border border-sky-500/20 shadow-2xl shadow-sky-900/30">
            <img src="${IMG_KIDS_WITH_SPARKEN}" alt="The kids meet Sparken" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-sky-300/80 italic">Sparken — the eagle who sees beyond the now</div>
          </div>

          <p class="mt-4 text-sky-200 font-bold text-lg">— "What are you looking at?" he asked. His voice was deep. Calm. Like the sound of wind in a canyon.</p>
          <p class="mt-3 text-sky-300 font-bold text-xl">— "You're looking too close."</p>
          <p class="mt-3">— "Who are you?" asked Alexandra. Her voice was full of awe.</p>
          <p class="mt-3 text-white font-bold text-xl">— "My name is <strong class="text-sky-300 text-2xl">Sparken</strong>. And I don't see things. I see where they're going."</p>
        </section>

        <!-- SCENE 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-600/30 border border-cyan-500/30 text-cyan-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-cyan-400 tracking-wide">THE FUTURE</h3>
          </div>
          <p>Sparken didn't touch the object. Didn't pick it up. Didn't examine it. He looked <em>beyond</em> it. Like an eagle who sees the horizon behind the mountain.</p>
          <p class="mt-3 text-sky-200 font-bold text-lg">— "Do you know what this thing you're holding is?"</p>
          <p class="mt-3">Eleftheria thought. "A first attempt."</p>
          <p class="mt-3">Sparken nodded. His hologram-wings flickered slightly. "Right. And do you know what it is <strong>NOT</strong>?"</p>
          <p class="mt-3">Silence. The three kids stared at him.</p>
          <p class="mt-3 text-sky-300 font-bold text-xl">"It is not final."</p>
          <p class="mt-3">Philippos felt something shift inside him. Like a door opening — small, in a room he thought was locked.</p>
          <p class="mt-3">"It doesn't need to be final," Sparken continued. "It just needs to <em>come out</em>. Because only in the light can it change."</p>
          <p class="mt-4 text-gray-400 text-sm italic">Nothing evolves in the dark. Not plants. Not ideas. Not you.</p>
        </section>

        <!-- SCENE 6 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-fuchsia-600/30 border border-fuchsia-500/30 text-fuchsia-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-fuchsia-400 tracking-wide">EVOLUTION</h3>
          </div>
          <p>"If we show it like this, they'll think we don't know what we're doing!" said Alexandra. Her voice had that tremor — between anger and terror.</p>
          <p class="mt-3">Sparken turned toward her. His golden eyes were warm. Without judgment. Without pressure. Only truth.</p>
          <p class="mt-3 text-sky-200 font-bold text-lg">— "And if you don't show it, <em>you</em> will think you can't."</p>
          <p class="mt-4">Alexandra lowered her eyes. Her fingers gripped the corner of her leg. <em>She knew he was right.</em></p>
          <p class="mt-4">WiseBot spoke last. Her light was blue now — like sky before sunset.</p>
          <p class="mt-3"><strong class="text-white text-lg">"Evolution needs light. Not perfection."</strong></p>
          <p class="mt-4 text-gray-400 text-sm italic">Perfection is the prison. Evolution is the door. And the key is courage.</p>
        </section>

        <!-- SCENE 7 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-green-600/30 border border-green-500/30 text-green-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-white tracking-wide">THE FIRST SHOWING</h3>
          </div>
          <p>They didn't do a presentation. Didn't prepare a stage. Didn't invite a crowd.</p>
          <p class="mt-3">They showed it to <strong>one</strong> person. A kid from the yard next door. Someone who knew nothing — no heroes, no plans, no cycles of failure.</p>
          <p class="mt-3">"What is this?" the kid asked, tilting his head.</p>
          <p class="mt-3">Philippos hesitated. Swallowed. "It's… something we're making." His voice wavered on "making" — because he wasn't sure the word was deserved.</p>
          <p class="mt-3">The kid took it in his hands. Turned it. Looked at it. Silence.</p>
          <p class="mt-3">"It's not perfect," he said.</p>
          <p class="mt-3">Alexandra's heart sank. <em>I knew it. I knew we shouldn't have.</em></p>
          <p class="mt-3">Then—</p>
          <p class="mt-3 text-green-400 font-bold text-xl">"But it's nice."</p>
          <p class="mt-3">And he smiled. An honest smile. The kind you can't fake.</p>
          <p class="mt-3">Alexandra felt her eyes burn. Philippos silently pumped his fist under the table. Eleftheria… smiled. That was enough.</p>
          <p class="mt-4 text-gray-400 text-sm italic">You don't need thousands. You need ONE — who sees what you can't see in yourself.</p>
        </section>

        <!-- SCENE 8 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-sky-600/30 border border-sky-500/30 text-sky-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-sky-300 tracking-wide">THE CIRCLE CLOSES</h3>
          </div>
          <p>That night, they returned to the table. Their faces were different now. More peaceful. More open. Like windows cleared after rain.</p>
          <p class="mt-3">They didn't sit down to make something perfect. They sat down to make something <em>better</em>. Small change in the word. Enormous change in meaning.</p>

          <!-- IMAGE: KIDS TOGETHER -->
          <div class="my-8 rounded-2xl overflow-hidden border border-sky-500/20 shadow-2xl shadow-sky-900/30">
            <img src="${IMG_KIDS_TOGETHER}" alt="The three kids together" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-sky-300/80 italic">The circle closes — five lessons become one</div>
          </div>

          <p class="mt-4">The five heroes stood around them. Like guardians. Like family.</p>
          <p class="mt-3">WiseBot looked at them. Her light was bright now — like a star without clouds.</p>
          <p class="mt-3 text-indigo-200">— "You thought."</p>
          <p class="mt-2 text-lime-200">Crocus smiled. "You started."</p>
          <p class="mt-2 text-cyan-200">Pencilo pointed to the paper. "You planned."</p>
          <p class="mt-2 text-blue-200">Link touched the object. "You built it."</p>
          <p class="mt-4 font-bold text-white text-xl">Sparken spread his wings. Colors filled the room — like a rainbow in a dark sky.</p>
          <p class="mt-3 text-sky-300 font-bold text-2xl">"Now… you look ahead."</p>
          <p class="mt-4 text-gray-400 text-sm italic">Every journey ends somewhere. But the right journeys end there — at the beginning of the next one.</p>
        </section>

        <!-- JOURNAL -->
        <div class="mt-12 bg-sky-950/60 p-8 rounded-3xl border-2 border-dashed border-sky-500/40 shadow-xl">
          <h4 class="text-xl font-black text-sky-300 uppercase tracking-wider mb-6 flex items-center gap-2">
            📓 JOURNAL: LOOK AHEAD
          </h4>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-sky-500/20">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-7 h-7 rounded-full bg-sky-600/40 flex items-center justify-center text-xs font-bold text-sky-200">1</span>
                <h5 class="text-sky-200 font-bold">THE FEAR</h5>
              </div>
              <p class="text-sm mb-3 opacity-80">What are you keeping hidden because you're afraid it's "not good enough"?</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-sky-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-sky-500/20">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-7 h-7 rounded-full bg-sky-600/40 flex items-center justify-center text-xs font-bold text-sky-200">2</span>
                <h5 class="text-sky-200 font-bold">COURAGE</h5>
              </div>
              <p class="text-sm mb-3 opacity-80">To which ONE person can you show it today?</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-sky-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-sky-500/20">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-7 h-7 rounded-full bg-sky-600/40 flex items-center justify-center text-xs font-bold text-sky-200">3</span>
                <h5 class="text-sky-200 font-bold">THE PROMISE</h5>
              </div>
              <p class="text-sm mb-3 opacity-80">Complete this:</p>
              <div class="bg-black/30 p-4 rounded-lg border border-sky-500/20">
                <p class="text-sm text-sky-200">"I don't wait to be ready. I do __________"</p>
              </div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-sky-500/20">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-7 h-7 rounded-full bg-sky-600/40 flex items-center justify-center text-xs font-bold text-sky-200">4</span>
                <h5 class="text-sky-200 font-bold">SPARKEN'S LESSON</h5>
              </div>
              <p class="text-sm mb-3 opacity-80">Where do you want to see yourself in one year?</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-sky-500/20"></div>
            </div>

          </div>
        </div>

        <!-- MEANING BOX -->
        <div class="mt-8 bg-gradient-to-br from-sky-950/80 to-cyan-950/60 p-8 rounded-3xl border border-sky-400/30 shadow-2xl">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-2xl">💎</span>
            <h4 class="text-xl font-black text-sky-300 uppercase tracking-wider">THE MEANING</h4>
          </div>
          <p class="text-gray-200 leading-relaxed text-lg">
            Nothing becomes perfect in the dark.<br/>
            Everything gets better only when it <strong class="text-sky-300">comes into the light</strong>.<br/>
            <span class="text-sky-200 italic mt-2 block">Evolution doesn't ask for perfection. It asks for courage.</span>
          </p>
        </div>

        <!-- PARENTS MESSAGE -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-sky-950/60 p-8 rounded-3xl border border-sky-500/30 shadow-2xl relative">
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-sky-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
          </div>
          <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
            Perfectionism looks like quality, but often it's fear in disguise. When children learn that it's okay to show something imperfect, <strong class="text-sky-300">they learn to evolve without shame.</strong>
          </p>
          <div class="mt-4 bg-sky-900/30 p-4 rounded-xl border border-sky-500/20">
            <p class="text-sky-200 font-bold text-sm flex items-center gap-2">💡 PRACTICAL TIP:</p>
            <p class="text-gray-300 text-sm mt-2">Don't say "great, it's perfect" — because they'll fear making mistakes. Say: <em>"Great that you tried it. What would you like to change?"</em> This builds courage, not dependence on perfection.</p>
          </div>
        </div>

      </div>
    `
    }
  }
];
