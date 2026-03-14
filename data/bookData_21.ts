
import { Book } from '../types';

// ============================================================
// BOOK 21: O ΚΑΘΡΕΦΤΗΣ / THE MIRROR
// Hero: ΕΣΥ (You)
// Theme: ΑΥΤΟΓΝΩΣΙΑ / SELF-REFLECTION
// ============================================================

// Cover image
const IMG_CROCUS = "/images/crocus.jpg";

// Character images
const IMG_WISEBOT = "/images/wisebot.jpg";
const IMG_SPARKEN = "/images/sparken.jpg";
const IMG_FILIPPOS = "/images/filippos.png";
const IMG_ALEXANDRA = "/images/alexandra.png";
const IMG_ELEFTHERIA = "/images/eleftheria.png";

// Story images
const IMG_KIDS_WITH_CROCUS = "/images/paidia-kai-crocus.png";
const IMG_KIDS_WITH_WISEBOT = "/images/paidia-kai-wisebot.png";
const IMG_KIDS_TOGETHER = "/images/ta-3-paidia.png";
const IMG_KIDS_WISEBOT_2 = "/images/paidia-wisebot-2.png";

export const BOOK_21: Book[] = [
  {
    id: 21,
    title: { el: "Ο ΚΑΘΡΕΦΤΗΣ", en: "THE MIRROR" },
    theme: { el: "ΑΥΤΟΓΝΩΣΙΑ", en: "SELF-REFLECTION" },
    stepLabel: { el: "ΤΟ ΤΕΛΟΣ & Η ΑΡΧΗ", en: "THE END & THE BEGINNING" },
    author: "Εσύ",
    cover: IMG_CROCUS,
    videoUrl: "",
    description: {
      el: "Μισό ιστορία, μισό καθρέφτης. Οι ήρωες έφυγαν. Τώρα μένεις μόνο εσύ. Μια ιστορία που τελειώνει μόνο όταν αρχίζεις εσύ.",
      en: "Half story, half mirror. The heroes have left. Now only you remain. A story that ends only when you begin."
    },
    meaning: {
      el: "Δεν χρειάζεσαι ήρωες. Μπορείς να γίνεις.",
      en: "You don't need heroes. You can become one."
    },
    xp: 1000,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- ΕΙΣΑΓΩΓΙΚΟ QUOTE -->
        <div class="relative bg-gradient-to-r from-slate-900 via-gray-900/60 to-slate-800/40 p-10 rounded-2xl border border-slate-500/30 text-center shadow-lg shadow-slate-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Κεφάλαιο 21</div>
          <p class="italic text-slate-200 text-xl mt-4 leading-relaxed">«Αυτό το βιβλίο δεν διαβάζεται.<br/>Καθρεφτίζεται.»</p>
          <div class="mt-4 w-16 h-0.5 bg-slate-500/40 mx-auto rounded-full"></div>
          <p class="text-slate-400 text-sm mt-4 italic">Ο καθρέφτης δεν δείχνει αυτό που θέλεις να δεις.<br/>Δείχνει αυτό που είσαι.</p>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΜΕΡΟΣ Α' — Η ΙΣΤΟΡΙΑ -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="text-center py-4">
          <h4 class="text-sm font-bold tracking-[0.3em] text-slate-500 uppercase">ΜΕΡΟΣ Α' — Η ΙΣΤΟΡΙΑ</h4>
          <div class="mt-2 w-24 h-0.5 bg-slate-600/30 mx-auto rounded-full"></div>
        </div>

        <!-- ΣΚΗΝΗ 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-600/30 border border-slate-500/30 text-slate-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-slate-300 tracking-wide">ΤΟ ΔΩΜΑΤΙΟ ΧΩΡΙΣ ΦΩΝΕΣ</h3>
          </div>
          <p>Το δωμάτιο ήταν άδειο. Όχι εγκαταλελειμμένο. Ήρεμο. Τα τραπέζια στη θέση τους. Τα μολύβια τακτοποιημένα. Τα σχέδια... όχι πια εκεί.</p>
          <p class="mt-3">Φως του πρωινού γλιστρούσε μέσα από τα παράθυρα — μαλακό, σχεδόν διστακτικό. Σκόνη χόρευε στις ακτίνες, αργά, σαν να θυμόταν κινήσεις που κάποτε γέμιζαν αυτόν τον χώρο.</p>
          <p class="mt-3">Η Αλεξάνδρα στάθηκε στη μέση. Δεν έψαχνε τη WiseBot. Δεν περίμενε τον Crocus. Δεν φώναζε τον Sparken ή τον Link ή τον Pencilo. Τα χέρια της κρέμονταν ήσυχα στο πλάι. Η ανάσα της ήταν ήρεμη — βαθιά, αργή, σίγουρη.</p>
          <p class="mt-3 text-white italic">Ήξερε ότι δεν θα έρθουν.</p>
          <p class="mt-3">Και αυτό — για πρώτη φορά — δεν την τρόμαζε. Ένιωθε κάτι καινούργιο. Ένα βάρος που σηκωνόταν αντί να πέφτει. Μια ζεστασιά στα χέρια που δεν ερχόταν απ' έξω — ερχόταν από μέσα.</p>
          <p class="mt-3">Κοίταξε γύρω. Κάθε γωνιά κρατούσε ίχνη. Εδώ είχαν φτιάξει το πρώτο ρομπότ. Εκεί είχαν σπάσει το δεύτερο. Σ' εκείνη τη γωνία η Ελευθερία είχε διαβάσει δυνατά ένα ποίημα. Σ' αυτό το πάτωμα ο Φίλιππος είχε πεταχτεί από χαρά τη μέρα που η κατασκευή πέταξε.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Κάθε τόπος κρατάει τις ιστορίες αυτών που τον αγάπησαν. Αυτό το δωμάτιο δεν ήταν άδειο. Ήταν γεμάτο αναμνήσεις.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-slate-500/15 shadow-lg shadow-slate-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="Τα παιδιά στο δωμάτιο" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-slate-300/80 italic">Το δωμάτιο που κάποτε γέμιζε φωνές — τώρα γέμιζε ησυχία και αναμνήσεις</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-600/30 border border-slate-500/30 text-slate-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-slate-300 tracking-wide">ΤΑ ΔΩΡΑ ΠΟΥ ΑΦΗΣΑΝ</h3>
          </div>
          <p>Πάνω στο τραπέζι υπήρχαν πέντε αντικείμενα. Τοποθετημένα με φροντίδα, σαν κάποιος να είχε αφιερώσει χρόνο να τα βάλει ακριβώς εκεί που έπρεπε. Κανένα τυχαίο. Κανένα αμελημένο. Κάθε ένα με τη δική του θέση, σαν τα αστέρια σ' έναν αστερισμό.</p>
          <p class="mt-3">Ένας φακός — μικρός, μεταλλικός, με μοβ ανταύγειες. Η WiseBot. Ακόμα ζεστός, σαν να τον είχε κρατήσει κάποιος μόλις πριν λίγο. Το φως του ερχόταν από μέσα, σαν να θυμόταν κάθε στιγμή που είχε φωτίσει τα σκοτάδια τους.</p>
          <p class="mt-3">Ένα ζευγάρι γάντια — πράσινα, ζεστά, λίγο φθαρμένα στις άκρες. Ο Crocus. Μύριζαν χώμα και φρέσκα φύλλα. Μέσα τους κρατούσαν την ανάμνηση χιλιάδων αγγιγμάτων — χέρια που είχαν σκαρφαλώσει, που είχαν κρατήσει σφιχτά αυτό που άλλοι θα είχαν αφήσει.</p>
          <p class="mt-3">Ένα μπλοκ — γεμάτο σκίτσα και λέξεις διαγραμμένες και ξαναγραμμένες. Ο Pencilo. Κάθε σελίδα ήταν ένα ταξίδι. Κάθε σβήσιμο μια αποδοχή ότι η τελειότητα δεν είναι το ζητούμενο — η ειλικρίνεια είναι.</p>
          <p class="mt-3">Ένα κομμάτι καλώδιο — λεπτό, εύκαμπτο, τυλιγμένο σε σπιράλ. Ο Link. Τόσο απλό, και όμως μέσα του κρυβόταν η δύναμη να συνδέσει ιδέες με χέρια, ανθρώπους με ανθρώπους, όνειρα με πραγματικότητα.</p>
          <p class="mt-3">Και μια πυξίδα — με ασημένιο καπάκι που αντανακλούσε το φως σαν καθρέφτης. Ο Sparken. Η βελόνα δεν έδειχνε βορρά. Έδειχνε μπροστά. Πάντα μπροστά.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-slate-500/15 shadow-lg shadow-slate-900/20">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="Τα δώρα πάνω στο τραπέζι" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-slate-300/80 italic">Πέντε αντικείμενα. Πέντε δάσκαλοι. Μία αλήθεια.</div>
          </div>

          <p class="mt-4">Ο Φίλιππος τα άγγιξε ένα-ένα. Αργά. Με σεβασμό. Τα δάχτυλά του έτρεμαν ελαφρά — όχι από φόβο, αλλά από κατανόηση. Από βάθος. Από τη συνειδητοποίηση που χτυπάει αθόρυβα σαν κύμα στον βράχο.</p>
          <p class="mt-3 text-white font-medium">«Νομίζαμε ότι ήταν τα εργαλεία τους», είπε σιγά. Η φωνή του βγήκε βραχνή, σαν να είχε κρατήσει αυτή τη σκέψη μέσα του πολύ καιρό.</p>
          <p class="mt-3">Η Ελευθερία χαμογέλασε. Ένα χαμόγελο που δεν ήταν χαρά — ήταν αναγνώριση. Η στιγμή που κοιτάς πίσω σου και βλέπεις τον δρόμο ολόκληρο. Η στιγμή που καταλαβαίνεις ότι κάθε βήμα, κάθε λάθος, κάθε νύχτα αϋπνίας, σε έφερε ακριβώς εδώ.</p>
          <p class="mt-3 text-slate-200 font-bold text-lg">«Ήταν τα δικά μας», είπε.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Τα πιο σημαντικά δώρα δεν είναι αυτά που παίρνεις. Είναι αυτά που καταλαβαίνεις ότι πάντα είχες.</p>
        </section>

        <!-- ΣΚΗΝΗ 3 — ΚΕΝΤΡΙΚΗ ΣΚΗΝΗ -->
        <section class="bg-gradient-to-br from-slate-900/30 via-gray-900/20 to-slate-800/10 p-8 rounded-2xl border-l-4 border-slate-400 my-8 shadow-xl shadow-slate-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-500/30 border border-slate-400/30 text-slate-200 font-black text-sm">03</span>
            <h3 class="text-3xl font-black text-white tracking-wide">Η ΑΝΑΓΝΩΡΙΣΗ</h3>
          </div>
          <p>Η Αλεξάνδρα πήρε τα γάντια στα χέρια της. Τα κοίταξε σαν να τα έβλεπε για πρώτη φορά. Κι όμως — τα αναγνώρισε αμέσως. Σαν να τα φορούσε πάντα. Σαν να ήταν κομμάτι του δέρματός της.</p>
          <p class="mt-3">Τα φόρεσε. Ταίριαζαν τέλεια. Κάθε δάχτυλο βρήκε τη θέση του. Κάθε ραφή ακολουθούσε τις γραμμές της παλάμης της. Ένιωσε ένα ρίγος — ζεστό, βαθύ — να ανεβαίνει από τα χέρια στο στήθος. Μια δύναμη που δεν ήρθε απ' έξω. Ξύπνησε από μέσα.</p>
          <p class="mt-4 text-slate-200 font-bold text-lg">«Εγώ δεν είμαι πια φοβισμένη», είπε. Σταμάτησε. Πήρε ανάσα. «Είμαι... έτοιμη για δράση.»</p>
          <p class="mt-3">Τα μάτια της δεν κοιτούσαν πια κάτω. Κοιτούσαν μπροστά — μακριά. Η Αλεξάνδρα που κάποτε μετρούσε ρωγμές στο ταβάνι τώρα μετρούσε δυνατότητες στον ορίζοντα.</p>

          <p class="mt-6">Ο Φίλιππος πήρε το μπλοκ. Το άνοιξε στην πρώτη σελίδα — άδεια, λευκή, γεμάτη δυνατότητες. Κάποτε, χέρια σαν αυτά είχαν σπάσει και πετάξει. Τώρα ήταν ήρεμα, σταθερά, έτοιμα να δημιουργήσουν.</p>
          <p class="mt-3 text-slate-200 font-bold text-lg">«Εγώ δεν είμαι πια βιαστικός», είπε. «Είμαι... δημιουργός.»</p>
          <p class="mt-3">Το αγόρι που κάποτε φώναζε «ΧΑΛΑΣ ΤΟ ΧΡΟΝΟ ΜΟΥ!» τώρα κρατούσε τον χρόνο στα χέρια του σαν κάτι πολύτιμο.</p>

          <p class="mt-6">Η Ελευθερία κράτησε τον φακό. Τον άναψε. Το μοβ φως γέμισε τη γωνιά του δωματίου — ζεστό, ήρεμο, σαν φεγγάρι που δεν χρειάζεται να φωνάξει για να φωτίσει.</p>
          <p class="mt-3 text-slate-200 font-bold text-lg">«Εγώ δεν είμαι πια θεωρητική», είπε. «Είμαι... οδηγός.»</p>
          <p class="mt-3">Το κορίτσι που κάποτε κρυβόταν πίσω από 450 βιβλία τώρα στεκόταν μπροστά — με τη γνώση στο ένα χέρι και το θάρρος στο άλλο.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-slate-500/15 shadow-lg shadow-slate-900/20">
            <img src="${IMG_KIDS_WISEBOT_2}" alt="Τα παιδιά με τα δώρα τους" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-slate-300/80 italic">Τρία παιδιά. Τρεις μεταμορφώσεις. Ένας δρόμος που ξεκίνησε από τη βαρεμάρα και κατέληξε στην αυτογνωσία.</div>
          </div>

          <p class="mt-4 text-gray-400 text-sm italic">Η πραγματική μεταμόρφωση δεν γίνεται με μαγικά. Γίνεται τη στιγμή που αναγνωρίζεις αυτό που πάντα ήσουν — αλλά δεν τολμούσες να πιστέψεις.</p>
        </section>

        <!-- ΣΚΗΝΗ 4 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-600/30 border border-slate-500/30 text-slate-300 font-black text-sm">04</span>
            <h3 class="text-2xl font-black text-slate-300 tracking-wide">ΤΟ ΓΡΑΜΜΑ ΤΗΣ WISEBOT</h3>
          </div>
          <p>Κάτω από τον φακό υπήρχε ένα μικρό χαρτί. Διπλωμένο στα τέσσερα. Κιτρινισμένο στις άκρες, σαν να είχε γράψει χρόνια πριν. Αλλά το μελάνι ήταν φρέσκο — μωβ, σαν τα μάτια εκείνης.</p>
          <p class="mt-3">Η Ελευθερία το πήρε. Ξεδίπλωσε αργά. Τα χέρια της δεν έτρεμαν — αλλά η καρδιά της χτυπούσε δυνατά. Τα γράμματα ήταν καλλιγραφικά, μικρά, σαν φτερά πουλιών στο χαρτί.</p>

          <div class="my-6 bg-gradient-to-r from-slate-900/40 to-gray-900/40 p-8 rounded-2xl border border-slate-500/20 text-center">
            <p class="font-serif italic text-xl text-white leading-relaxed">«Δεν σας έμαθα τίποτα.<br/><span class="text-slate-300">Σας θύμισα αυτά που ξέρατε ήδη.»</span></p>
            <p class="mt-4 text-slate-400 text-sm">— WiseBot</p>
          </div>

          <p class="mt-4">Η Αλεξάνδρα πήρε το χαρτί. Το διάβασε ξανά. Και ξανά. Κάθε φορά, κάτι μέσα της αλλαγόστροφε — σαν πυξίδα που βρίσκει επιτέλους τον βορρά.</p>
          <p class="mt-3">«Μας θύμισε», επανέλαβε σιγά. «Δεν μας έδωσε δυνάμεις. Μας βοήθησε να βρούμε τις δικές μας.»</p>
          <p class="mt-3">Ο Φίλιππος κούνησε αργά το κεφάλι. «Ήμουν πάντα δημιουργός», ψιθύρισε. «Απλά δεν ήξερα πού να κοιτάξω.»</p>
          <p class="mt-3">Η Ελευθερία κοίταξε τα βιβλία γύρω της. Τώρα δεν ήταν τοίχοι — ήταν σκαλιά. «Η γνώση δεν ήταν ποτέ φυλακή», είπε. «Εγώ έκανα τα τοίχους. Τα βιβλία ήθελαν πάντα να γίνουν γέφυρες.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Κάποτε θα καταλάβεις ότι ο δάσκαλος δεν σε έκανε σοφό. Σε βοήθησε να θυμηθείς τη σοφία που πάντα κρυβόταν μέσα σου — κάτω από τον φόβο, κάτω από τη βιασύνη, κάτω από τα βιβλία.</p>
        </section>

        <!-- ΣΚΗΝΗ 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-600/30 border border-slate-500/30 text-slate-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-slate-300 tracking-wide">ΤΟ ΤΕΛΕΥΤΑΙΟ ΒΛΕΜΜΑ ΠΙΣΩ</h3>
          </div>
          <p>Τα τρία παιδιά στάθηκαν στην πόρτα. Δεν βιάζονταν. Δεν ήταν λυπημένα. Ήταν σε εκείνη την περίεργη κατάσταση ανάμεσα στο τέλος και στην αρχή — εκεί που ο χρόνος σταματάει για μία παλμό και ρωτάει: «Είσαι έτοιμος;»</p>
          <p class="mt-3">Η Αλεξάνδρα κοίταξε πίσω πρώτη. Το δωμάτιο φαινόταν μικρότερο τώρα. Ή μήπως εκείνη είχε μεγαλώσει; Δεκατρείς ρωγμές στο ταβάνι — τώρα δεν έβλεπε ρωγμές. Έβλεπε μονοπάτια.</p>
          <p class="mt-3">Ο Φίλιππος ακούμπησε το χέρι στο κουφώμα. Εδώ κάπου είχε χτυπήσει εκείνο το πλαστικό με θυμό. ΚΡΑΚ. Τώρα χαμογέλασε. Εκείνο το «ΚΡΑΚ» ήταν ο ήχος κάτι παλιού που έσπαγε — η υπομονή ενός αγοριού που δεν ήξερε ακόμα πώς να χτίσει τον εαυτό του.</p>
          <p class="mt-3">Η Ελευθερία πήρε μια τελευταία βαθιά ανάσα. Ο αέρας μύριζε χαρτί, σκόνη, και κάτι αόρατο — σαν ελπίδα. Κοίταξε τους δύο φίλους της. Κάποτε ήταν τρία παιδιά που βαριούνταν. Τώρα ήταν τρεις άνθρωποι που ήξεραν ποιοι είναι.</p>
          <p class="mt-3 text-white font-medium">«Πάμε;» ρώτησε ο Φίλιππος.</p>
          <p class="mt-3 text-white font-medium">«Πάμε», είπε η Αλεξάνδρα.</p>
          <p class="mt-3 text-white font-medium">«Πάμε», συμφώνησε η Ελευθερία.</p>
          <p class="mt-3">Κανείς δεν ρώτησε «πού». Δεν χρειαζόταν. Η απάντηση ήταν η ίδια πάντα: <strong class="text-slate-200">Μπροστά.</strong></p>
          <p class="mt-3 text-gray-400 text-sm italic">Υπάρχουν στιγμές που κοιτάς πίσω — όχι με νοσταλγία, αλλά με ευγνωμοσύνη. Και μετά γυρνάς μπροστά — και βλέπεις ότι ο δρόμος δεν τελειώνει. Μόλις αρχίζει.</p>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΜΕΡΟΣ Β' — Ο ΚΑΘΡΕΦΤΗΣ -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="h-px bg-gradient-to-r from-transparent via-slate-500/30 to-transparent my-12"></div>

        <div class="text-center py-4">
          <h4 class="text-sm font-bold tracking-[0.3em] text-slate-400 uppercase">ΜΕΡΟΣ Β' — Ο ΚΑΘΡΕΦΤΗΣ</h4>
          <div class="mt-2 w-24 h-0.5 bg-slate-500/30 mx-auto rounded-full"></div>
        </div>

        <!-- ΣΚΗΝΗ 6 — Ο ΚΑΘΡΕΦΤΗΣ -->
        <section class="bg-gradient-to-br from-black via-slate-950 to-gray-950 p-8 rounded-2xl border border-slate-500/20 my-8 shadow-xl shadow-slate-900/20">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-500/30 border border-slate-400/30 text-slate-200 font-black text-sm">06</span>
            <h3 class="text-3xl font-black text-white tracking-wide">ΚΟΙΤΑ ΜΕΣΑ ΣΟΥ</h3>
          </div>
          <p>Σταμάτα εδώ.</p>
          <p class="mt-3">Πάρε μια ανάσα. Αργά. Βαθιά. Νιώσε τον χρόνο να σταματάει — μόνο για σένα, μόνο τώρα, μόνο σε αυτή τη σελίδα.</p>
          <p class="mt-3">Γιατί αυτό που διάβασες δεν ήταν απλώς μια ιστορία για τρία παιδιά. Δεν ήταν απλώς λέξεις σε μια οθόνη.</p>
          <p class="mt-4 text-white text-lg font-bold">Ήταν ένας καθρέφτης.</p>
          <p class="mt-3">Και τώρα — σε αυτή τη σελίδα, σε αυτή τη στιγμή — ο καθρέφτης γυρνάει προς εσένα.</p>

          <div class="my-8 bg-gradient-to-r from-slate-900/60 to-gray-900/60 p-8 rounded-2xl border border-slate-400/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">Δεν διάβασες μια ιστορία για τρία παιδιά.<br/><span class="text-slate-300">Διάβασες την ιστορία για το πώς ΕΣΥ ξεπερνάς τον εαυτό σου.</span></p>
          </div>

          <p class="mt-4">Σκέψου. Πόσες φορές ένιωσες σαν τη Αλεξάνδρα; Ξαπλωμένος, βαρεμένος, κοιτώντας ταβάνι. Λέγοντας «ναι, τελείωσα» ενώ δεν είχες αρχίσει καν. Κρύβοντας τον φόβο σου πίσω από αδιαφορία.</p>
          <p class="mt-3">Πόσες φορές ήσουν ο Φίλιππος; Θυμωμένος. Ανυπόμονος. Σπάζοντας τα πράγματα γιατί δεν ήξερες πώς να τα φτιάξεις. Φωνάζοντας στο πουθενά γιατί ο χρόνος έφευγε και δεν μπορούσες να τον σταματήσεις.</p>
          <p class="mt-3">Πόσες φορές ήσουν η Ελευθερία; Κρυμμένος πίσω από βιβλία. Πίσω από γνώση. Πίσω από «ξέρω πώς γίνεται» ενώ δεν είχες δοκιμάσει ποτέ. Η θεωρία σαν ασπίδα. Η σιγουριά σαν φυλακή.</p>

          <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-sm">
            <div class="bg-white/5 p-4 rounded-xl border border-white/5">
              <span class="text-amber-400 font-black uppercase tracking-widest block mb-1">WISEBOT</span>
              <p class="text-gray-400">Είναι η φωνή μέσα σου που λέει «Σκέψου πριν φοβηθείς». Κάθε φορά που σταματάς, αναπνέεις, και κοιτάς ξανά πριν αντιδράσεις — αυτή είναι η WiseBot. Η σοφία σου.</p>
            </div>
            <div class="bg-white/5 p-4 rounded-xl border border-white/5">
              <span class="text-emerald-400 font-black uppercase tracking-widest block mb-1">CROCUS</span>
              <p class="text-gray-400">Είναι η φωνή που λέει «Σήκω και κάν' το». Κάθε φορά που βρίσκεις θάρρος εκεί που νόμιζες ότι δεν υπάρχει — αυτός είναι ο Crocus. Η δύναμή σου.</p>
            </div>
            <div class="bg-white/5 p-4 rounded-xl border border-white/5">
              <span class="text-blue-400 font-black uppercase tracking-widest block mb-1">LINK</span>
              <p class="text-gray-400">Είναι τα χέρια σου που λένε «Μπορώ να το φτιάξω». Κάθε φορά που συνδέεις ιδέες, ανθρώπους, κόσμους — αυτός είναι ο Link. Η δημιουργικότητά σου.</p>
            </div>
            <div class="bg-white/5 p-4 rounded-xl border border-white/5">
              <span class="text-purple-400 font-black uppercase tracking-widest block mb-1">SPARKEN</span>
              <p class="text-gray-400">Είναι τα μάτια σου που βλέπουν το αύριο. Κάθε φορά που ονειρεύεσαι κάτι μεγαλύτερο — αυτός είναι ο Sparken. Το όραμά σου.</p>
            </div>
          </div>

          <p class="mt-6 text-gray-400 text-sm italic">Δεν χρειάζεσαι ήρωες. Γιατί μέσα σου ζει κάθε ένας από αυτούς. Πάντα ζούσε. Απλά τώρα — τους βλέπεις.</p>
        </section>

        <!-- ΣΚΗΝΗ 7 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-600/30 border border-slate-500/30 text-slate-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-slate-300 tracking-wide">ΤΟ ΤΕΛΟΣ ΠΟΥ ΔΕΝ ΕΙΝΑΙ ΤΕΛΟΣ</h3>
          </div>
          <p>Κάθε ιστορία έχει ένα τέλος. Αυτή — δεν έχει.</p>
          <p class="mt-3">Αυτή η ιστορία τελειώνει μόνο όταν <strong class="text-white">αρχίζεις εσύ</strong>. Όταν σηκώνεσαι. Όταν κοιτάς τα χέρια σου και λες: «Μπορώ». Όταν παίρνεις ένα μολύβι, μια ιδέα — και κάνεις κάτι. Ακόμα κι αν σπάσει. Ακόμα κι αν κανείς δεν το δει.</p>
          <p class="mt-3">Γιατί η δημιουργία δεν ζητάει τελειότητα. Ζητάει μόνο <em>αρχή</em>.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-slate-500/15 shadow-lg shadow-slate-900/20">
            <img src="${IMG_KIDS_WITH_CROCUS}" alt="Τα παιδιά στο δρόμο μπροστά" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-slate-300/80 italic">Ο δρόμος δεν τελειώνει. Μόλις αρχίζει.</div>
          </div>

          <p class="mt-4">Ο Φίλιππος, η Αλεξάνδρα, η Ελευθερία — είναι κομμάτια δικά σου. Ο θυμός σου που έγινε πάθος. Ο φόβος σου που έγινε θάρρος. Η γνώση σου που έγινε πράξη.</p>
          <p class="mt-3">Και η WiseBot, ο Crocus, ο Pencilo, ο Link, ο Sparken — δεν έφυγαν. Μπήκαν μέσα σου. Σε περιμένουν κάθε φορά που αποφασίζεις να δημιουργήσεις.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η καλύτερη ιστορία δεν είναι αυτή που διαβάζεις. Είναι αυτή που ζεις.</p>
        </section>

        <!-- ΣΚΗΝΗ 8 — ΤΕΛΙΚΟ -->
        <section class="text-center pt-8 pb-4">
          <h3 class="text-4xl md:text-6xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500 uppercase italic tracking-tighter mb-6">
            ΤΟ ΤΕΛΟΣ;
          </h3>
          <p class="text-xl text-gray-300 mb-4">
            Όχι.
          </p>
          <p class="text-xl text-gray-300 mb-4">
            Τώρα κλείσε την οθόνη.
          </p>
          <p class="text-xl mb-8">
            <strong class="text-white">Και πήγαινε να φτιάξεις τον κόσμο σου.</strong>
          </p>
          <div class="w-24 h-0.5 bg-slate-500/30 mx-auto rounded-full"></div>
          <p class="mt-6 text-slate-500 text-sm italic">Η ιστορία συνεχίζεται... με εσένα.</p>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-slate-950/60 p-8 rounded-3xl border-2 border-dashed border-slate-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">💎</span>
            <h4 class="text-xl font-black text-slate-300 uppercase tracking-wider">JOURNAL: Ο ΔΙΚΟΣ ΜΟΥ ΚΑΘΡΕΦΤΗΣ</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Γράψε. Σκέψου. Νιώσε. Δεν υπάρχει λάθος απάντηση.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-slate-500/15">
              <h5 class="text-slate-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-slate-600/40 flex items-center justify-center text-xs font-black">1</span>
                Ο ΗΡΩΑΣ ΠΟΥ ΜΟΥ ΜΟΙΑΖΕΙ
              </h5>
              <p class="text-sm mb-3 opacity-80">Ποιον ήρωα ένιωσες πιο κοντά σου; Τη Αλεξάνδρα, τον Φίλιππο, ή την Ελευθερία; Γιατί;</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-slate-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-slate-500/15">
              <h5 class="text-slate-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-slate-600/40 flex items-center justify-center text-xs font-black">2</span>
                Η ΦΩΝΗ ΠΟΥ ΑΚΟΥΩ
              </h5>
              <p class="text-sm mb-3 opacity-80">Αν η WiseBot σου έκανε ΜΙΑ ερώτηση τώρα, ποια πιστεύεις ότι θα ήταν; Και ποια θα ήταν η απάντησή σου;</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-slate-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-slate-500/15">
              <h5 class="text-slate-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-slate-600/40 flex items-center justify-center text-xs font-black">3</span>
                Η ΔΙΚΗ ΜΟΥ ΑΡΧΗ
              </h5>
              <p class="text-sm mb-3 opacity-80">Συμπλήρωσε την πρόταση:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-slate-500/10 text-slate-200">
                <p class="text-sm font-medium">«Σήμερα κοιτάω στον καθρέφτη και βλέπω κάποιον που μπορεί να: __________»</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΝΟΗΜΑ / MEANING BOX -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-r from-slate-900/30 to-gray-900/30 p-6 rounded-2xl border border-slate-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-slate-300 uppercase tracking-wider">Το νόημα αυτού του κεφαλαίου</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            Ο καθρέφτης δεν δείχνει αυτό που θέλεις. Δείχνει αυτό που <strong class="text-slate-200">είσαι</strong>. Και αυτό που είσαι δεν καθορίζεται από τα λάθη σου, τους φόβους σου ή τις αποτυχίες σου. Καθορίζεται από αυτό που <strong class="text-white">επιλέγεις να κάνεις</strong> μετά από αυτά. Δεν χρειάζεσαι ήρωες. Μπορείς να <strong class="text-slate-200">γίνεις</strong>.
          </p>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-gray-950/60 p-8 rounded-3xl border border-slate-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-slate-500/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-slate-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
          </div>
          <div class="space-y-4 relative z-10 filter blur-sm hover:blur-none transition-all duration-500">
            <p class="text-gray-300 leading-relaxed">
              Αυτό το τελευταίο κεφάλαιο δεν είναι τέλος — είναι <strong class="text-white">αρχή</strong>. Τα παιδιά μόλις ολοκλήρωσαν ένα ταξίδι που τους δίδαξε ότι η αληθινή δύναμη δεν βρίσκεται σε μαγικά εργαλεία ή υπερφυσικούς οδηγούς, αλλά μέσα τους.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Η στιγμή της <strong class="text-slate-200">αυτογνωσίας</strong> — η στιγμή που ένα παιδί αναγνωρίζει τις δυνάμεις του, τις αδυναμίες του, και τη δύναμη να τις μετατρέπει — είναι ίσως η πιο σημαντική στιγμή στην ανάπτυξή του.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Τα πέντε εργαλεία — φακός, γάντια, μπλοκ, καλώδιο, πυξίδα — είναι μεταφορές για πραγματικές δεξιότητες: <strong class="text-slate-200">σκέψη, δράση, δημιουργία, σύνδεση, όραμα</strong>. Βοηθήστε το παιδί σας να αναγνωρίσει ποιο εργαλείο νιώθει πιο κοντά — και ποιο θέλει να αναπτύξει.
            </p>
            <div class="mt-4 bg-slate-900/20 p-4 rounded-xl border border-slate-500/10">
              <p class="text-sm text-slate-200 font-medium">💡 Δοκιμάστε σήμερα: Ρωτήστε το παιδί σας: «Αν μπορούσες να κρατήσεις ΕΝΑ από αυτά τα πέντε εργαλεία, ποιο θα ήταν; Γιατί;» — και ακούστε. Χωρίς να διορθώσετε. Χωρίς να σχολιάσετε. Απλά ακούστε.</p>
            </div>
          </div>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- INTRO QUOTE -->
        <div class="relative bg-gradient-to-r from-slate-900 via-gray-900/60 to-slate-800/40 p-10 rounded-2xl border border-slate-500/30 text-center shadow-lg shadow-slate-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Chapter 21</div>
          <p class="italic text-slate-200 text-xl mt-4 leading-relaxed">"This book is not read.<br/>It is reflected."</p>
          <div class="mt-4 w-16 h-0.5 bg-slate-500/40 mx-auto rounded-full"></div>
          <p class="text-slate-400 text-sm mt-4 italic">A mirror does not show what you want to see.<br/>It shows what you are.</p>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- PART A — THE STORY -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="text-center py-4">
          <h4 class="text-sm font-bold tracking-[0.3em] text-slate-500 uppercase">PART A — THE STORY</h4>
          <div class="mt-2 w-24 h-0.5 bg-slate-600/30 mx-auto rounded-full"></div>
        </div>

        <!-- SCENE 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-600/30 border border-slate-500/30 text-slate-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-slate-300 tracking-wide">THE ROOM WITHOUT VOICES</h3>
          </div>
          <p>The room was empty. Not abandoned. Calm. The tables in place. The pencils tidy. The drawings... no longer there.</p>
          <p class="mt-3">Morning light slipped through the windows — soft, almost hesitant. Dust danced in the beams, slowly, as though remembering movements that once filled this space.</p>
          <p class="mt-3">Alexandra stood in the middle. She wasn't looking for WiseBot. She wasn't waiting for Crocus. She wasn't calling for Sparken or Link or Pencilo. Her hands hung quietly at her sides. Her breathing was calm — deep, slow, certain.</p>
          <p class="mt-3 text-white italic">She knew they wouldn't come.</p>
          <p class="mt-3">And that — for the first time — didn't frighten her. She felt something new. A weight that was lifting instead of falling. A warmth in her hands that didn't come from outside — it came from within.</p>
          <p class="mt-3">She looked around. Every corner held traces. Here they had built the first robot. There they had broken the second. In that corner, Eleftheria had read aloud a poem. On this floor, Philippos had jumped for joy the day their creation flew.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Every place holds the stories of those who loved it. This room was not empty. It was full of memories.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-slate-500/15 shadow-lg shadow-slate-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="The children in the room" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-slate-300/80 italic">The room that once overflowed with voices — now overflowed with silence and memories</div>
          </div>
        </section>

        <!-- SCENE 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-600/30 border border-slate-500/30 text-slate-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-slate-300 tracking-wide">THE GIFTS THEY LEFT</h3>
          </div>
          <p>On the table there were five objects. Placed with care, as if someone had spent time positioning them exactly where they belonged. Nothing random. Nothing neglected. Each one in its own place, like stars in a constellation.</p>
          <p class="mt-3">A flashlight — small, metallic, with purple reflections. WiseBot. Still warm, as if someone had been holding it just moments ago. Its light came from within, as though it remembered every moment it had illuminated their darkness.</p>
          <p class="mt-3">A pair of gloves — green, warm, slightly worn at the edges. Crocus. They smelled of earth and fresh leaves. Inside them lived the memory of a thousand touches — hands that had climbed, that had held tight what others would have let fall.</p>
          <p class="mt-3">A notepad — filled with sketches, words crossed out and rewritten. Pencilo. Each page was a journey. Each erasure an acceptance that perfection is not the goal — honesty is.</p>
          <p class="mt-3">A piece of wire — thin, flexible, wound into a spiral. Link. So simple, and yet within it hid the power to connect ideas with hands, people with people, dreams with reality.</p>
          <p class="mt-3">And a compass — with a silver lid that reflected light like a mirror. Sparken. The needle didn't point north. It pointed forward. Always forward.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-slate-500/15 shadow-lg shadow-slate-900/20">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="The gifts on the table" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-slate-300/80 italic">Five objects. Five teachers. One truth.</div>
          </div>

          <p class="mt-4">Philippos touched them one by one. Slowly. With respect. His fingers trembled slightly — not from fear, but from understanding. From depth. From the realization that hits silently like a wave upon a rock.</p>
          <p class="mt-3 text-white font-medium">"We thought they were their tools," he said quietly. His voice came out hoarse, as if he had been holding that thought inside for a very long time.</p>
          <p class="mt-3">Eleftheria smiled. A smile that wasn't joy — it was recognition. The moment you look behind you and see the entire road. The moment you understand that every step, every mistake, every sleepless night, brought you exactly here.</p>
          <p class="mt-3 text-slate-200 font-bold text-lg">"They were ours," she said.</p>
          <p class="mt-3 text-gray-400 text-sm italic">The most important gifts are not those you receive. They are those you realize you always had.</p>
        </section>

        <!-- SCENE 3 — KEY SCENE -->
        <section class="bg-gradient-to-br from-slate-900/30 via-gray-900/20 to-slate-800/10 p-8 rounded-2xl border-l-4 border-slate-400 my-8 shadow-xl shadow-slate-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-500/30 border border-slate-400/30 text-slate-200 font-black text-sm">03</span>
            <h3 class="text-3xl font-black text-white tracking-wide">THE RECOGNITION</h3>
          </div>
          <p>Alexandra took the gloves in her hands. She looked at them as if seeing them for the first time. And yet — she recognized them instantly. As if she had always worn them. As if they were part of her skin.</p>
          <p class="mt-3">She put them on. They fit perfectly. Every finger found its place. Every seam followed the lines of her palm. She felt a shiver — warm, deep — rising from her hands to her chest. A strength that didn't come from outside. It awakened from within.</p>
          <p class="mt-4 text-slate-200 font-bold text-lg">"I am no longer scared," she said. She paused. Took a breath. "I am... ready for action."</p>
          <p class="mt-3">Her eyes no longer looked down. They looked ahead — far ahead. The Alexandra who once counted ceiling cracks now counted possibilities on the horizon.</p>

          <p class="mt-6">Philippos took the notepad. He opened it to the first page — empty, white, full of possibilities. Once, hands like these had smashed and thrown. Now they were calm, steady, ready to create.</p>
          <p class="mt-3 text-slate-200 font-bold text-lg">"I am no longer hasty," he said. "I am... a creator."</p>
          <p class="mt-3">The boy who once screamed "YOU'RE WASTING MY TIME!" now held time in his hands like something precious.</p>

          <p class="mt-6">Eleftheria held the flashlight. She turned it on. Purple light filled the corner of the room — warm, calm, like a moon that doesn't need to shout to illuminate.</p>
          <p class="mt-3 text-slate-200 font-bold text-lg">"I am no longer theoretical," she said. "I am... a guide."</p>
          <p class="mt-3">The girl who once hid behind 450 books now stood in front — with knowledge in one hand and courage in the other.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-slate-500/15 shadow-lg shadow-slate-900/20">
            <img src="${IMG_KIDS_WISEBOT_2}" alt="The children with their gifts" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-slate-300/80 italic">Three children. Three transformations. A road that began with boredom and ended in self-awareness.</div>
          </div>

          <p class="mt-4 text-gray-400 text-sm italic">True transformation doesn't happen through magic. It happens the moment you recognize what you always were — but didn't dare to believe.</p>
        </section>

        <!-- SCENE 4 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-600/30 border border-slate-500/30 text-slate-300 font-black text-sm">04</span>
            <h3 class="text-2xl font-black text-slate-300 tracking-wide">WISEBOT'S LETTER</h3>
          </div>
          <p>Beneath the flashlight there was a small piece of paper. Folded in four. Yellowed at the edges, as if it had been written years ago. But the ink was fresh — purple, like her eyes.</p>
          <p class="mt-3">Eleftheria picked it up. Unfolded slowly. Her hands weren't trembling — but her heart was beating hard. The letters were calligraphic, small, like bird wings on paper.</p>

          <div class="my-6 bg-gradient-to-r from-slate-900/40 to-gray-900/40 p-8 rounded-2xl border border-slate-500/20 text-center">
            <p class="font-serif italic text-xl text-white leading-relaxed">"I didn't teach you anything.<br/><span class="text-slate-300">I reminded you of what you already knew."</span></p>
            <p class="mt-4 text-slate-400 text-sm">— WiseBot</p>
          </div>

          <p class="mt-4">Alexandra took the paper. She read it again. And again. Each time, something inside her shifted — like a compass finally finding north.</p>
          <p class="mt-3">"She reminded us," Alexandra repeated quietly. "She didn't give us powers. She helped us find our own."</p>
          <p class="mt-3">Philippos nodded slowly. "I was always a creator," he whispered. "I just didn't know where to look."</p>
          <p class="mt-3">Eleftheria looked at the books around her. Now they weren't walls — they were stairs. "Knowledge was never a prison," she said. "I made the walls. The books always wanted to be bridges."</p>
          <p class="mt-3 text-gray-400 text-sm italic">One day you will understand that the teacher didn't make you wise. They helped you remember the wisdom that was always hidden inside you — beneath the fear, beneath the hurry, beneath the books.</p>
        </section>

        <!-- SCENE 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-600/30 border border-slate-500/30 text-slate-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-slate-300 tracking-wide">THE LAST LOOK BACK</h3>
          </div>
          <p>The three children stood at the door. They weren't in a hurry. They weren't sad. They were in that strange state between an ending and a beginning — where time pauses for one heartbeat and asks: "Are you ready?"</p>
          <p class="mt-3">Alexandra looked back first. The room seemed smaller now. Or had she grown? Thirteen ceiling cracks — now she didn't see cracks. She saw pathways.</p>
          <p class="mt-3">Philippos rested his hand on the door frame. Somewhere here, he had hurled that plastic piece in anger. CRACK. Now he smiled. That "CRACK" was the sound of something old breaking — the patience of a boy who didn't yet know how to build himself.</p>
          <p class="mt-3">Eleftheria took one last deep breath. The air smelled of paper, dust, and something invisible — like hope. She looked at her two friends. Once they were three bored children. Now they were three people who knew who they were.</p>
          <p class="mt-3 text-white font-medium">"Shall we go?" asked Philippos.</p>
          <p class="mt-3 text-white font-medium">"Let's go," said Alexandra.</p>
          <p class="mt-3 text-white font-medium">"Let's go," agreed Eleftheria.</p>
          <p class="mt-3">No one asked "where." They didn't need to. The answer was always the same: <strong class="text-slate-200">Forward.</strong></p>
          <p class="mt-3 text-gray-400 text-sm italic">There are moments when you look back — not with nostalgia, but with gratitude. And then you turn forward — and see that the road doesn't end. It is just beginning.</p>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- PART B — THE MIRROR -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="h-px bg-gradient-to-r from-transparent via-slate-500/30 to-transparent my-12"></div>

        <div class="text-center py-4">
          <h4 class="text-sm font-bold tracking-[0.3em] text-slate-400 uppercase">PART B — THE MIRROR</h4>
          <div class="mt-2 w-24 h-0.5 bg-slate-500/30 mx-auto rounded-full"></div>
        </div>

        <!-- SCENE 6 — THE MIRROR -->
        <section class="bg-gradient-to-br from-black via-slate-950 to-gray-950 p-8 rounded-2xl border border-slate-500/20 my-8 shadow-xl shadow-slate-900/20">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-500/30 border border-slate-400/30 text-slate-200 font-black text-sm">06</span>
            <h3 class="text-3xl font-black text-white tracking-wide">LOOK INSIDE</h3>
          </div>
          <p>Stop here.</p>
          <p class="mt-3">Take a breath. Slowly. Deeply. Feel time stopping — just for you, just now, just on this page.</p>
          <p class="mt-3">Because what you read was not simply a story about three children. It was not simply words on a screen.</p>
          <p class="mt-4 text-white text-lg font-bold">It was a mirror.</p>
          <p class="mt-3">And now — on this page, in this moment — the mirror turns to face you.</p>

          <div class="my-8 bg-gradient-to-r from-slate-900/60 to-gray-900/60 p-8 rounded-2xl border border-slate-400/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">You didn't just read a story about three kids.<br/><span class="text-slate-300">You read the story about how YOU overcome yourself.</span></p>
          </div>

          <p class="mt-4">Think. How many times have you felt like Alexandra? Lying down, bored, staring at the ceiling. Saying "yes, I'm done" when you hadn't even started. Hiding your fear behind indifference.</p>
          <p class="mt-3">How many times were you Philippos? Angry. Impatient. Breaking things because you didn't know how to build them. Yelling at nothing because time was slipping away and you couldn't stop it.</p>
          <p class="mt-3">How many times were you Eleftheria? Hidden behind books. Behind knowledge. Behind "I know how it's done" while never having tried. Theory as a shield. Certainty as a prison.</p>

          <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-sm">
            <div class="bg-white/5 p-4 rounded-xl border border-white/5">
              <span class="text-amber-400 font-black uppercase tracking-widest block mb-1">WISEBOT</span>
              <p class="text-gray-400">Is the voice inside you saying "Think before you fear." Every time you pause, breathe, and look again before reacting — that is WiseBot. Your wisdom.</p>
            </div>
            <div class="bg-white/5 p-4 rounded-xl border border-white/5">
              <span class="text-emerald-400 font-black uppercase tracking-widest block mb-1">CROCUS</span>
              <p class="text-gray-400">Is the voice saying "Get up and do it." Every time you find courage where you thought there was none — that is Crocus. Your strength.</p>
            </div>
            <div class="bg-white/5 p-4 rounded-xl border border-white/5">
              <span class="text-blue-400 font-black uppercase tracking-widest block mb-1">LINK</span>
              <p class="text-gray-400">Is your hands saying "I can build it." Every time you connect ideas, people, worlds — that is Link. Your creativity.</p>
            </div>
            <div class="bg-white/5 p-4 rounded-xl border border-white/5">
              <span class="text-purple-400 font-black uppercase tracking-widest block mb-1">SPARKEN</span>
              <p class="text-gray-400">Is your eyes seeing tomorrow. Every time you dream of something greater — that is Sparken. Your vision.</p>
            </div>
          </div>

          <p class="mt-6 text-gray-400 text-sm italic">You don't need heroes. Because every one of them lives inside you. They always have. You just now — can see them.</p>
        </section>

        <!-- SCENE 7 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-600/30 border border-slate-500/30 text-slate-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-slate-300 tracking-wide">THE END THAT IS NOT AN END</h3>
          </div>
          <p>Every story has an ending. This one — doesn't.</p>
          <p class="mt-3">This story ends only when <strong class="text-white">you begin</strong>. When you stand up. When you look at your hands and say: "I can." When you pick up a pencil, an idea — and make something. Even if it breaks. Even if no one sees it.</p>
          <p class="mt-3">Because creation doesn't ask for perfection. It only asks for a <em>beginning</em>.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-slate-500/15 shadow-lg shadow-slate-900/20">
            <img src="${IMG_KIDS_WITH_CROCUS}" alt="The children on the road ahead" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-slate-300/80 italic">The road doesn't end. It is just beginning.</div>
          </div>

          <p class="mt-4">Philippos, Alexandra, Eleftheria — they are pieces of you. Your anger that became passion. Your fear that became courage. Your knowledge that became action.</p>
          <p class="mt-3">And WiseBot, Crocus, Pencilo, Link, Sparken — they didn't leave. They entered you. They wait for you every time you decide to create.</p>
          <p class="mt-3 text-gray-400 text-sm italic">The best story is not the one you read. It is the one you live.</p>
        </section>

        <!-- SCENE 8 — FINALE -->
        <section class="text-center pt-8 pb-4">
          <h3 class="text-4xl md:text-6xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500 uppercase italic tracking-tighter mb-6">
            THE END?
          </h3>
          <p class="text-xl text-gray-300 mb-4">
            No.
          </p>
          <p class="text-xl text-gray-300 mb-4">
            Now turn off the screen.
          </p>
          <p class="text-xl mb-8">
            <strong class="text-white">And go build your world.</strong>
          </p>
          <div class="w-24 h-0.5 bg-slate-500/30 mx-auto rounded-full"></div>
          <p class="mt-6 text-slate-500 text-sm italic">The story continues... with you.</p>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-slate-950/60 p-8 rounded-3xl border-2 border-dashed border-slate-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">💎</span>
            <h4 class="text-xl font-black text-slate-300 uppercase tracking-wider">JOURNAL: MY OWN MIRROR</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Write. Think. Feel. There is no wrong answer.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-slate-500/15">
              <h5 class="text-slate-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-slate-600/40 flex items-center justify-center text-xs font-black">1</span>
                THE HERO WHO LOOKS LIKE ME
              </h5>
              <p class="text-sm mb-3 opacity-80">Which hero did you feel closest to? Alexandra, Philippos, or Eleftheria? Why?</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-slate-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-slate-500/15">
              <h5 class="text-slate-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-slate-600/40 flex items-center justify-center text-xs font-black">2</span>
                THE VOICE I HEAR
              </h5>
              <p class="text-sm mb-3 opacity-80">If WiseBot asked you ONE question right now, what do you think it would be? And what would your answer be?</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-slate-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-slate-500/15">
              <h5 class="text-slate-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-slate-600/40 flex items-center justify-center text-xs font-black">3</span>
                MY OWN BEGINNING
              </h5>
              <p class="text-sm mb-3 opacity-80">Complete the sentence:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-slate-500/10 text-slate-200">
                <p class="text-sm font-medium">"Today I look in the mirror and see someone who can: __________"</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- MEANING BOX -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-r from-slate-900/30 to-gray-900/30 p-6 rounded-2xl border border-slate-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-slate-300 uppercase tracking-wider">The Meaning of This Chapter</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            A mirror does not show what you want. It shows what you <strong class="text-slate-200">are</strong>. And what you are is not defined by your mistakes, your fears, or your failures. It is defined by what you <strong class="text-white">choose to do</strong> after them. You don't need heroes. You can <strong class="text-slate-200">become one</strong>.
          </p>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- MESSAGE FOR PARENTS -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-gray-950/60 p-8 rounded-3xl border border-slate-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-slate-500/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-slate-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
          </div>
          <div class="space-y-4 relative z-10 filter blur-sm hover:blur-none transition-all duration-500">
            <p class="text-gray-300 leading-relaxed">
              This final chapter is not an ending — it is a <strong class="text-white">beginning</strong>. The children have just completed a journey that taught them that true strength is not found in magical tools or supernatural guides, but within themselves.
            </p>
            <p class="text-gray-300 leading-relaxed">
              The moment of <strong class="text-slate-200">self-awareness</strong> — the moment a child recognizes their strengths, their weaknesses, and the power to transform them — is perhaps the most important moment in their development.
            </p>
            <p class="text-gray-300 leading-relaxed">
              The five tools — flashlight, gloves, notepad, wire, compass — are metaphors for real skills: <strong class="text-slate-200">thinking, action, creation, connection, vision</strong>. Help your child identify which tool feels closest — and which they want to develop.
            </p>
            <div class="mt-4 bg-slate-900/20 p-4 rounded-xl border border-slate-500/10">
              <p class="text-sm text-slate-200 font-medium">💡 Try today: Ask your child: "If you could keep ONE of these five tools, which would it be? Why?" — and listen. Without correcting. Without commenting. Just listen.</p>
            </div>
          </div>
        </div>

      </div>
    `
    }
  }
];
