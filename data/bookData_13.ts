
import { Book } from '../types';

// ============================================================
// BOOK 13: ΔΕΝ ΤΑ ΠΑΡΑΤΑΜΕ / WE DON'T QUIT
// Hero: Crocus & Team
// Theme: ΕΠΙΜΟΝΗ / PERSISTENCE (green/emerald)
// ============================================================

// Cover image
const IMG_CROCUS = "/images/crocus.jpg";

// Story images
const IMG_KIDS_WITH_CROCUS = "/images/paidia-kai-crocus.png";
const IMG_KIDS_TOGETHER = "/images/ta-3-paidia.png";
const IMG_KIDS_WITH_WISEBOT = "/images/paidia-kai-wisebot.png";
const IMG_KIDS_WISEBOT_2 = "/images/paidia-wisebot-2.png";

export const BOOK_13: Book[] = [
  {
    id: 13,
    title: { el: "ΔΕΝ ΤΑ ΠΑΡΑΤΑΜΕ", en: "WE DON'T QUIT" },
    theme: { el: "ΕΠΙΜΟΝΗ", en: "PERSISTENCE" },
    stepLabel: { el: "CROCUS & Η ΕΠΙΜΟΝΗ", en: "CROCUS & PERSISTENCE" },
    author: "Crocus & Team",
    cover: IMG_CROCUS,
    videoUrl: "",
    description: {
      el: "Όλα πάνε στραβά. Ο πειρασμός να τα παρατήσουν είναι μεγάλος. Μια ιστορία για τη δύναμη του «ακόμα μία φορά».",
      en: "Everything goes wrong. The temptation to quit is huge. A story about the power of 'one more time'."
    },
    meaning: {
      el: "Δεν χάνεις όταν πέφτεις. Χάνεις όταν μένεις κάτω.",
      en: "You don't lose when you fall. You lose when you stay down."
    },
    xp: 260,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- ΕΙΣΑΓΩΓΙΚΟ QUOTE -->
        <div class="relative bg-gradient-to-r from-slate-900 via-green-900/60 to-emerald-900/40 p-10 rounded-2xl border border-green-500/30 text-center shadow-lg shadow-green-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Κεφάλαιο 13</div>
          <p class="italic text-green-200 text-xl mt-4 leading-relaxed">«Η επιτυχία είναι να πηγαίνεις από αποτυχία σε αποτυχία<br/>χωρίς να χάνεις τον ενθουσιασμό σου.»</p>
          <div class="mt-4 w-16 h-0.5 bg-green-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- ΣΚΗΝΗ 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-green-600/30 border border-green-500/30 text-green-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-green-400 tracking-wide">Η ΜΕΓΑΛΗ ΑΠΟΓΟΗΤΕΥΣΗ</h3>
          </div>
          <p>Ο ήχος ήταν σαν κάτι που σπάει μέσα σου. Όχι δυνατά. Αλλά βαθιά. Ένα <em>κρακ</em> αόρατο, που μόνο εσύ ακούς.</p>
          <p class="mt-3">Το εργαστήριο μύριζε μέταλλο και ιδρώτα. Πάνω στο τραπέζι, ανάμεσα σε σκονισμένα εργαλεία και τσαλακωμένα σχέδια, το πρωτότυπο — αυτό που δούλευαν εβδομάδες — ήταν ξαπλωμένο σαν νεκρό ζώο. Ακίνητο. Σιωπηλό. <strong class="text-red-400">Χαλασμένο.</strong></p>
          <p class="mt-3">Δοκίμασαν. Απέτυχε. Δοκίμασαν ξανά. Απέτυχε ξανά. Τρίτη φορά — και η σιωπή που ακολούθησε ήταν χειρότερη από κάθε θόρυβο.</p>
          <p class="mt-4">Η Ελευθερία έκλεισε τα μάτια. Τα βλέφαρά της ήταν βαριά, σαν να κρατούσαν ολόκληρο τον κόσμο. <em>«Δεν γίνεται»</em>, ψιθύρισε. Η φωνή της δεν είχε θυμό. Είχε κάτι χειρότερο: <strong class="text-gray-400">παραίτηση</strong>.</p>
          <p class="mt-3">Ο Φίλιππος πέταξε το κατσαβίδι στο πάτωμα. Αντήχησε στο κενό δωμάτιο σαν πυροβολισμός. <em>«Τέλος. Κουράστηκα.»</em> Η φωνή του ήταν σκληρή, αλλά τα χέρια του έτρεμαν. Δεν ήταν θυμός αυτό που ένιωθε. Ήταν <strong class="text-red-300">ντροπή</strong> — ντροπή που δεν μπορούσε να το κάνει να δουλέψει.</p>
          <p class="mt-3">Η Αλεξάνδρα κάθισε στο πάτωμα. Αργά. Σαν να της τελείωσε η μπαταρία. Κοίταξε τα χέρια της — γεμάτα μικρά σημάδια από εργαλεία και κόλλα — και ψιθύρισε: <em>«Ίσως δεν είμαστε αρκετά καλοί.»</em></p>
          <p class="mt-3">Αυτό ήταν το πιο επικίνδυνο πράγμα που μπορούσε να πει κανείς. Γιατί όταν πιστέψεις ότι <strong class="text-red-400">δεν είσαι αρκετός</strong>, δεν σταματάς απλά να προσπαθείς — σταματάς να ελπίζεις.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η αποτυχία δεν πονάει επειδή χάνεις. Πονάει επειδή σε κάνει να αμφιβάλλεις αν άξιζε καν να ξεκινήσεις.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-green-500/15 shadow-lg shadow-green-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="Τα παιδιά μετά την αποτυχία" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-green-300/80 italic">Η στιγμή που η ελπίδα φαίνεται να σβήνει</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-green-600/30 border border-green-500/30 text-green-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-green-300 tracking-wide">Η ΣΙΩΠΗ ΤΟΥ CROCUS</h3>
          </div>
          <p>Ο Crocus καθόταν στη γωνία. Ακίνητος. Σαν πέτρα σε ποτάμι — ενώ το νερό περνούσε γύρω του, εκείνος δεν κουνιόταν.</p>
          <p class="mt-3">Δεν φώναξε. Δεν έκλαψε. Δεν χτύπησε τίποτα. Απλά <em>κοιτούσε</em>. Κοιτούσε το χαλασμένο αντικείμενο πάνω στο τραπέζι με μάτια που δεν είχαν παραιτηθεί. Μάτια που <strong class="text-green-200">μελετούσαν</strong>.</p>
          <p class="mt-3">Τα άλλα παιδιά δεν το πρόσεξαν. Ήταν πολύ απασχολημένα να αισθάνονται λύπη για τον εαυτό τους. Πολύ μπλεγμένα μέσα στα σύννεφα της απογοήτευσής τους.</p>
          <p class="mt-4">— «Πάμε σπίτι», είπε ο Φίλιππος. Η φωνή του ακούστηκε κουρασμένη, σαν να κουβαλούσε βαρύ φορτίο. Σηκώθηκε και τράβηξε το φερμουάρ του σακιδίου του.</p>
          <p class="mt-3">Ο Crocus σηκώθηκε αργά. Τα μάτια του — σταθερά, ήρεμα, σαν δύο πράσινες φλόγες — γύρισαν στον Φίλιππο.</p>
          <p class="mt-3 text-white font-bold text-lg">— «Όχι.»</p>
          <p class="mt-3">Η λέξη ήταν μικρή. Αλλά ηχούσε σαν κεραυνός μέσα στη σιωπή.</p>
          <p class="mt-4">— «Γιατί;» ρώτησε ο Φίλιππος. Τα φρύδια του σηκώθηκαν. Δεν καταλάβαινε.</p>
          <p class="mt-3">Ο Crocus πήρε ένα βαθύ αναπνοή. Κοίταξε κάθε ένα από τα παιδιά. Πρώτα την Ελευθερία — που είχε κρύψει το πρόσωπό της πίσω από ένα βιβλίο. Μετά την Αλεξάνδρα — που είχε τυλιχτεί σαν κουβάρι στο πάτωμα. Και τέλος τον Φίλιππο — που ήταν ήδη μισός έξω από την πόρτα.</p>
          <p class="mt-4 text-green-200 font-bold text-xl">— «Γιατί δεν τελειώσαμε.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Υπάρχουν στιγμές που ένα «όχι» είναι πιο γενναίο από χίλια «ναι». Ο Crocus δεν αρνήθηκε τον πόνο. Αρνήθηκε να τον αφήσει να αποφασίσει για εκείνον.</p>
        </section>

        <!-- ΣΚΗΝΗ 3 — ΚΛΕΙΔΙ — HIGHLIGHTED -->
        <section class="bg-gradient-to-br from-green-900/30 via-emerald-900/20 to-teal-900/10 p-8 rounded-2xl border-l-4 border-emerald-500 my-8 shadow-xl shadow-green-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 font-black text-sm">03</span>
            <h3 class="text-3xl font-black text-emerald-400 tracking-wide">ΤΟ «ΑΚΟΜΑ ΜΙΑ ΦΟΡΑ»</h3>
          </div>
          <p>«Δοκιμάσαμε τα πάντα!» φώναξε η Ελευθερία. Η φωνή της ράγισε στη μέση. Σαν γυαλί που πέφτει αργά. Σηκώθηκε απότομα, τα μάτια της κόκκινα, τα χέρια της σφιγμένα γροθιές.</p>
          <p class="mt-3">«Τα πάντα, Crocus! Κάθε σχέδιο, κάθε υλικό, κάθε μέθοδο! <em>Τρεις φορές!</em> Πότε σταματάμε;»</p>
          <p class="mt-4">Ο Crocus δεν απάντησε αμέσως. Σήκωσε ένα κομμάτι από το σπασμένο πρωτότυπο. Το γύρισε στα χέρια του. Το μελέτησε. Σαν γιατρός που εξετάζει ασθενή.</p>
          <p class="mt-3 text-emerald-200 font-medium text-lg">— «Όχι τα πάντα», είπε ήρεμα. «Δεν δοκιμάσαμε αύριο.»</p>
          <p class="mt-4">Η πρόταση κρεμάστηκε στον αέρα. Παράξενη. Αστεία σχεδόν. Αλλά κάπως — <em>κάπως</em> — αληθινή.</p>

          <!-- ΕΙΚΟΝΑ: CROCUS -->
          <div class="my-8 rounded-2xl overflow-hidden border border-emerald-500/20 shadow-2xl shadow-green-900/30">
            <img src="${IMG_CROCUS}" alt="Ο Crocus κρατάει το σπασμένο πρωτότυπο" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-emerald-300/80 italic">Ο Crocus — αυτός που αρνήθηκε να σταματήσει</div>
          </div>

          <p class="mt-4">Ακριβώς τότε, ένα απαλό μωβ φως τρεμόπαιξε στη γωνία. Η WiseBot εμφανίστηκε — αθόρυβα, σαν σκέψη που γεννιέται μέσα στη νύχτα.</p>
          <p class="mt-3">Τα μωβ μάτια της σάρωσαν το δωμάτιο. Είδε τα σπασμένα κομμάτια. Τα κουρασμένα πρόσωπα. Τις γροθιές. Τα βλέμματα που κοίταζαν κάτω.</p>

          <div class="my-6 bg-gradient-to-r from-green-900/40 to-emerald-900/40 p-8 rounded-2xl border border-green-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">«Η κούραση λέει ψέματα.<br/><span class="text-green-300">Σας λέει ότι είναι αδύνατο.</span>»</p>
          </div>

          <p class="mt-4">— «Και τι είναι;» ρώτησε η Αλεξάνδρα. Η φωνή της ήταν μικρή, σαν παιδί που ρωτάει αν θα βρέξει.</p>
          <p class="mt-3">Η WiseBot πλησίασε. Τα φτερά της αντανακλούσαν πράσινο φως — σαν φύλλα που λάμπουν μετά τη βροχή.</p>
          <p class="mt-3 text-green-200 font-bold text-xl">— «Είναι απλώς δύσκολο.»</p>
          <p class="mt-4">Δύσκολο. Όχι αδύνατο. <strong class="text-emerald-300">Δύσκολο.</strong> Η διαφορά ανάμεσα στις δύο λέξεις ήταν η διαφορά ανάμεσα στο να κάτσεις κάτω και στο να σηκωθείς.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η κούραση είναι ο πιο πειστικός ψεύτης. Σε κοιτάζει στα μάτια και σου λέει: «Φτάνει.» Αλλά η αλήθεια; Η αλήθεια ψιθυρίζει: «Ακόμα μία φορά.»</p>
        </section>

        <!-- ΣΚΗΝΗ 4 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-green-600/30 border border-green-500/30 text-green-300 font-black text-sm">04</span>
            <h3 class="text-2xl font-black text-green-300 tracking-wide">Η ΑΠΟΦΑΣΗ</h3>
          </div>
          <p>Πέρασαν λεπτά. Μακριά, αργά λεπτά, γεμάτα σιωπή και βαρύ αέρα. Κανείς δεν μιλούσε. Κανείς δεν κουνιόταν. Ο κόσμος σταμάτησε να γυρίζει για λίγο, σαν να περίμενε κι αυτός την απόφασή τους.</p>
          <p class="mt-3">Ο Φίλιππος στεκόταν στην πόρτα. Το ένα πόδι μέσα, το άλλο έξω. Ένα μέτρο τον χώριζε από το να φύγει. Ένα μέτρο και μια <em>επιλογή</em>.</p>
          <p class="mt-3">Κοίταξε τα χέρια του. Γεμάτα γρατζουνιές. Μικρά σημάδια από ώρες δουλειάς. Κοίταξε το σπασμένο πρωτότυπο. Κοίταξε τον Crocus — που δεν τον πίεζε, δεν τον παρακαλούσε, απλά <em>ήταν εκεί</em>.</p>
          <p class="mt-4">Σήκωσε το κατσαβίδι από το πάτωμα. Αργά. Σαν ξιφομάχος που μαζεύει το σπαθί του μετά από ήττα.</p>
          <p class="mt-3 text-green-200 font-medium text-lg">«Μία τελευταία φορά.»</p>
          <p class="mt-4">Η Ελευθερία τον κοίταξε. Για ένα δευτερόλεπτο, σκέφτηκε να πει «δεν αξίζει». Αλλά κάτι μέσα της — κάτι μικρό, ζεστό, πεισματάρικο — δεν την άφησε. Άνοιξε το τετράδιο. Βρήκε μια καινούρια σελίδα. Καθαρή. Άδεια. Γεμάτη δυνατότητες.</p>
          <p class="mt-3 text-green-200 font-medium text-lg">«Μία.»</p>
          <p class="mt-4">Η Αλεξάνδρα σηκώθηκε από το πάτωμα. Τα γόνατά της πόναγαν. Τα μάτια της ήταν βαριά. Αλλά σηκώθηκε. Και αυτό — <strong class="text-white">αυτό ακριβώς</strong> — ήταν η πράξη γενναιότητας.</p>
          <p class="mt-3 text-green-200 font-medium text-lg">«Μία.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Κανείς δεν είχε όρεξη. Αλλά κανείς δεν έφυγε. Και μερικές φορές, η επιμονή δεν μοιάζει με ηρωισμό. Μοιάζει με τρία κουρασμένα παιδιά που λένε «μία», αντί για «τέλος».</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-green-500/15 shadow-lg shadow-green-900/20">
            <img src="${IMG_KIDS_WITH_CROCUS}" alt="Τα παιδιά με τον Crocus" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-green-300/80 italic">Τρία κουρασμένα «Μία» που άλλαξαν τα πάντα</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-emerald-400 tracking-wide">ΤΟ ΘΑΥΜΑ</h3>
          </div>
          <p>Δεν έγινε θαύμα. Ας είμαστε ειλικρινείς. Κανένα φως δεν άστραψε. Κανένας μαγικός ήχος δεν ακούστηκε. Δεν ήρθαν άγγελοι, δεν φύσηξε μαγικός αέρας.</p>
          <p class="mt-3">Απλά κάθισαν ξανά. Ο Φίλιππος στρίφωξε ένα κομμάτι. Η Ελευθερία ξαναδιάβασε τα σχέδια — αυτή τη φορά πιο αργά, πιο προσεκτικά, σαν ντετέκτιβ που ψάχνει στοιχεία. Η Αλεξάνδρα κράτησε σταθερά ένα καλώδιο, ενώ ο Crocus δούλευε δίπλα της.</p>
          <p class="mt-3">Και τότε — <em>τικ</em>.</p>
          <p class="mt-3">Ένας μικρός ήχος. Τόσο μικρός που θα μπορούσε να χαθεί μέσα στη σιωπή. Αλλά τον άκουσαν. <strong class="text-green-300">Όλοι</strong> τον άκουσαν.</p>
          <p class="mt-4">Το πρωτότυπο <em>κινήθηκε</em>. Λίγο. Ένα εκατοστό ίσως. Ένα μικροσκοπικό τράβηγμα προς τα μπροστά. Σαν καρδιά που ξαναχτυπάει μετά από σιωπή.</p>
          <p class="mt-4">Τα μάτια του Crocus έλαμψαν. Πράσινα. Ζωντανά. Σαν δύο σμαράγδια που φωτίστηκαν από τον ήλιο.</p>
          <p class="mt-3 text-emerald-300 font-bold text-xl">— «Το είδατε;»</p>
          <p class="mt-4">Ο Φίλιππος χαμογέλασε. Ένα αληθινό χαμόγελο — από αυτά που δεν τα ελέγχεις, που σου ξεφεύγουν σαν φως από ρωγμή. <em>«Κινήθηκε»</em>, ψιθύρισε.</p>
          <p class="mt-3">Η Ελευθερία ένιωσε την καρδιά της να χτυπάει πιο δυνατά. Πιο γρήγορα. Σαν τύμπανο που ανεβάζει ρυθμό. <em>«Μπορούμε»</em>, είπε. Και αυτή τη φορά η φωνή της δεν έτρεμε.</p>
          <p class="mt-4">Η Αλεξάνδρα γέλασε. Ένα γέλιο υγρό, σπασμένο, γεμάτο ανακούφιση. «Ένα εκατοστό», είπε. «Ένα ηλίθιο εκατοστό.» Αλλά χαμογελούσε σαν να κέρδισε τον κόσμο.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Δεν χρειάζεσαι θαύμα. Χρειάζεσαι ένα εκατοστό. Μία μικρή κίνηση που σου λέει: «Δεν τελείωσε. Συνεχίζεται.» Και αυτό αρκεί για να κρατήσεις τη φλόγα αναμμένη.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-emerald-500/20 shadow-2xl shadow-green-900/20">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="Τα παιδιά με τη WiseBot τη στιγμή του θαύματος" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-emerald-300/80 italic">Ένα εκατοστό. Αρκετό για να αλλάξει τα πάντα.</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 6 — ΤΟ ΜΑΘΗΜΑ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-green-600/30 border border-green-500/30 text-green-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-green-300 tracking-wide">ΤΟ ΜΑΘΗΜΑ</h3>
          </div>
          <p>Δεν τελείωσαν εκείνη τη μέρα. Ο ήλιος έδυσε πίσω από τα δέντρα, ζωγραφίζοντας πορτοκαλιά σύννεφα στον ουρανό. Τα παιδιά μάζεψαν τα πράγματά τους αργά, με κινήσεις κουρασμένες αλλά <em>γαλήνιες</em>.</p>
          <p class="mt-3">Γιατί κάτι είχε αλλάξει. Δεν ήταν το πρωτότυπο — αυτό ήταν ακόμα μισοτελειωμένο. Ήταν <strong class="text-green-200">αυτοί</strong>. Μέσα τους, κάτι σκληρό είχε λυγίσει. Κάτι μαλακό είχε σκληρύνει. Η ισορροπία είχε αλλάξει.</p>
          <p class="mt-3">Ο Crocus στάθηκε στην πόρτα. Ο αέρας κινούσε τα φύλλα γύρω του. Κοίταξε τα παιδιά — ένα ένα — και χαμογέλασε. Ένα ήρεμο, σοφό χαμόγελο.</p>
          <p class="mt-4">Η WiseBot κάθισε στο περβάζι. Τα μωβ μάτια της γέμισαν με ζεστασιά. Η φωνή της ακούστηκε σαν μελωδία που ξέρεις αλλά δεν θυμάσαι από πού.</p>

          <div class="mt-6 bg-gradient-to-r from-green-900/30 to-emerald-900/20 p-6 rounded-xl border border-green-500/20">
            <p class="text-white text-lg font-bold">«Δεν χάνεις όταν πέφτεις.»</p>
            <p class="mt-2 text-green-300 font-bold text-xl">«Χάνεις όταν μένεις κάτω.»</p>
          </div>

          <p class="mt-4">Ο Φίλιππος κοίταξε πίσω, προς το εργαστήριο. «Αύριο;» ρώτησε.</p>
          <p class="mt-3">Ο Crocus έγνεψε καταφατικά. «Αύριο.»</p>
          <p class="mt-3">Η Ελευθερία κράτησε το τετράδιό της σφιχτά στο στήθος. «Και μεθαύριο», είπε.</p>
          <p class="mt-3">Η Αλεξάνδρα χαμογέλασε. «Και κάθε μέρα μέχρι να τελειώσουμε.»</p>
          <p class="mt-4">Ήξεραν ότι θα τελειώσουν. Δεν ήξεραν πότε. Δεν ήξεραν πώς. Αλλά <strong class="text-green-200">ήξεραν</strong>. Και αυτή η βεβαιότητα — αυτή η ήρεμη, σταθερή, ατσάλινη βεβαιότητα — ήταν πιο πολύτιμη από κάθε επιτυχία.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η επιμονή δεν είναι να μη νιώθεις πόνο. Είναι να νιώθεις τον πόνο, να τον κοιτάς στα μάτια, και να λες: «Εντάξει. Αλλά εγώ δεν φεύγω.»</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-green-500/20 shadow-2xl shadow-green-900/20">
            <img src="${IMG_KIDS_WISEBOT_2}" alt="Τα παιδιά και η WiseBot στο ηλιοβασίλεμα" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-green-300/80 italic">Δεν τελείωσαν σήμερα. Αλλά ήξεραν ότι θα τελειώσουν.</div>
          </div>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-green-950/60 p-8 rounded-3xl border-2 border-dashed border-green-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-green-300 uppercase tracking-wider">JOURNAL: ΕΠΙΜΟΝΗ</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Γράψε. Σκέψου. Νιώσε. Δεν υπάρχει λάθος απάντηση.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-green-500/15">
              <h5 class="text-green-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-green-600/40 flex items-center justify-center text-xs font-black">1</span>
                ΤΟ ΕΜΠΟΔΙΟ
              </h5>
              <p class="text-sm mb-3 opacity-80">Τι σε δυσκολεύει πολύ αυτή τη στιγμή; Ποιο είναι το πράγμα που σε κάνει να θέλεις να τα παρατήσεις;</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-green-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-green-500/15">
              <h5 class="text-green-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-green-600/40 flex items-center justify-center text-xs font-black">2</span>
                Η ΣΚΕΨΗ
              </h5>
              <p class="text-sm mb-3 opacity-80">Τι λες στον εαυτό σου όταν αποτυγχάνεις; Σου λέει η κούραση «είναι αδύνατο» ή «είναι απλώς δύσκολο»;</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-green-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-green-500/15">
              <h5 class="text-green-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-green-600/40 flex items-center justify-center text-xs font-black">3</span>
                Η ΥΠΟΣΧΕΣΗ
              </h5>
              <p class="text-sm mb-3 opacity-80">Συμπλήρωσε:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-green-500/10 text-green-200">
                <p class="text-sm font-medium">«Δεν θα τα παρατήσω. Θα προσπαθήσω ξανά αύριο γιατί: __________»</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΝΟΗΜΑ / MEANING BOX -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-r from-emerald-900/30 to-green-900/30 p-6 rounded-2xl border border-emerald-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-emerald-300 uppercase tracking-wider">Το νόημα αυτού του κεφαλαίου</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            Η αποτυχία δεν είναι το τέλος — είναι <strong class="text-emerald-300">μάθημα</strong>. Η κούραση δεν σημαίνει ότι πρέπει να σταματήσεις — σημαίνει ότι <strong class="text-green-300">δουλεύεις σκληρά</strong>. Ο Crocus δεν ήταν πιο έξυπνος ή πιο δυνατός. Ήταν πιο <strong class="text-white">πεισματάρης</strong>. Και μερικές φορές, το πείσμα νικάει το ταλέντο.
          </p>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-green-950/60 p-8 rounded-3xl border border-green-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-green-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              Η ανθεκτικότητα (resilience) είναι ο πιο σημαντικός δείκτης μελλοντικής επιτυχίας. Δεν είναι το IQ, δεν είναι το ταλέντο — είναι η ικανότητα να <strong class="text-white">σηκώνεσαι μετά από κάθε πτώση</strong>.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Όταν επιβραβεύουμε την <strong class="text-green-200">προσπάθεια</strong> και όχι μόνο το αποτέλεσμα, μαθαίνουμε στα παιδιά να αγαπούν τη διαδικασία. Ο Crocus δεν είπε «θα τα καταφέρουμε». Είπε «δεν τελειώσαμε». Αυτή η διαφορά είναι τεράστια.
            </p>
            <div class="mt-4 bg-green-900/20 p-4 rounded-xl border border-green-500/10">
              <p class="text-sm text-green-200 font-medium">💡 Δοκιμάστε σήμερα: Όταν το παιδί σας αποτύχει, αντί να πείτε «δεν πειράζει», πείτε: «Τι μπορούμε να δοκιμάσουμε διαφορετικά αύριο;»</p>
            </div>
          </div>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- INTRO QUOTE -->
        <div class="relative bg-gradient-to-r from-slate-900 via-green-900/60 to-emerald-900/40 p-10 rounded-2xl border border-green-500/30 text-center shadow-lg shadow-green-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Chapter 13</div>
          <p class="italic text-green-200 text-xl mt-4 leading-relaxed">"Success is going from failure to failure<br/>without losing your enthusiasm."</p>
          <div class="mt-4 w-16 h-0.5 bg-green-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- SCENE 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-green-600/30 border border-green-500/30 text-green-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-green-400 tracking-wide">THE GREAT DISAPPOINTMENT</h3>
          </div>
          <p>The sound was like something breaking inside you. Not loud. But deep. An invisible <em>crack</em> that only you can hear.</p>
          <p class="mt-3">The workshop smelled of metal and sweat. On the table, between dusty tools and crumpled drawings, the prototype — the one they had worked on for weeks — lay like a dead animal. Motionless. Silent. <strong class="text-red-400">Broken.</strong></p>
          <p class="mt-3">They tried. It failed. Tried again. Failed again. Third time — and the silence that followed was worse than any noise.</p>
          <p class="mt-4">Eleftheria closed her eyes. Her eyelids were heavy, as if holding up the entire world. <em>"It's not working,"</em> she whispered. Her voice held no anger. It held something worse: <strong class="text-gray-400">resignation</strong>.</p>
          <p class="mt-3">Philippos threw the screwdriver on the floor. It echoed through the empty room like a gunshot. <em>"That's it. I'm done."</em> His voice was hard, but his hands were shaking. It wasn't anger he was feeling. It was <strong class="text-red-300">shame</strong> — shame that he couldn't make it work.</p>
          <p class="mt-3">Alexandra sat on the floor. Slowly. As if her battery had run out. She looked at her hands — covered in small marks from tools and glue — and whispered: <em>"Maybe we're just not good enough."</em></p>
          <p class="mt-3">That was the most dangerous thing anyone could say. Because when you believe you are <strong class="text-red-400">not enough</strong>, you don't just stop trying — you stop hoping.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Failure doesn't hurt because you lose. It hurts because it makes you doubt whether it was even worth starting.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-green-500/15 shadow-lg shadow-green-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="The children after failure" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-green-300/80 italic">The moment when hope seems to fade</div>
          </div>
        </section>

        <!-- SCENE 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-green-600/30 border border-green-500/30 text-green-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-green-300 tracking-wide">CROCUS'S SILENCE</h3>
          </div>
          <p>Crocus sat in the corner. Motionless. Like a stone in a river — while the water rushed around him, he did not move.</p>
          <p class="mt-3">He didn't shout. He didn't cry. He didn't hit anything. He simply <em>watched</em>. He watched the broken object on the table with eyes that had not surrendered. Eyes that were <strong class="text-green-200">studying</strong>.</p>
          <p class="mt-3">The other children didn't notice. They were too busy feeling sorry for themselves. Too tangled in the clouds of their disappointment.</p>
          <p class="mt-4">"Let's go home," said Philippos. His voice sounded tired, as if he were carrying a heavy load. He stood up and pulled the zipper of his backpack.</p>
          <p class="mt-3">Crocus rose slowly. His eyes — steady, calm, like two green flames — turned to Philippos.</p>
          <p class="mt-3 text-white font-bold text-lg">"No."</p>
          <p class="mt-3">The word was small. But it echoed like thunder in the silence.</p>
          <p class="mt-4">"Why?" asked Philippos. His eyebrows rose. He didn't understand.</p>
          <p class="mt-3">Crocus took a deep breath. He looked at each of the children. First at Eleftheria — who had hidden her face behind a book. Then at Alexandra — who had curled into a ball on the floor. And finally at Philippos — who was already halfway out the door.</p>
          <p class="mt-4 text-green-200 font-bold text-xl">"Because we aren't finished."</p>
          <p class="mt-3 text-gray-400 text-sm italic">There are moments when a "no" is braver than a thousand "yeses." Crocus didn't deny the pain. He refused to let it decide for him.</p>
        </section>

        <!-- SCENE 3 — KEY SCENE — HIGHLIGHTED -->
        <section class="bg-gradient-to-br from-green-900/30 via-emerald-900/20 to-teal-900/10 p-8 rounded-2xl border-l-4 border-emerald-500 my-8 shadow-xl shadow-green-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 font-black text-sm">03</span>
            <h3 class="text-3xl font-black text-emerald-400 tracking-wide">"ONE MORE TIME"</h3>
          </div>
          <p>"We tried everything!" shouted Eleftheria. Her voice cracked in the middle. Like glass falling in slow motion. She stood up abruptly, her eyes red, her hands clenched into fists.</p>
          <p class="mt-3">"Everything, Crocus! Every design, every material, every method! <em>Three times!</em> When do we stop?"</p>
          <p class="mt-4">Crocus didn't answer right away. He picked up a piece of the broken prototype. Turned it in his hands. Studied it. Like a doctor examining a patient.</p>
          <p class="mt-3 text-emerald-200 font-medium text-lg">"Not everything," he said calmly. "We didn't try tomorrow."</p>
          <p class="mt-4">The sentence hung in the air. Strange. Almost funny. But somehow — <em>somehow</em> — true.</p>

          <!-- IMAGE: CROCUS -->
          <div class="my-8 rounded-2xl overflow-hidden border border-emerald-500/20 shadow-2xl shadow-green-900/30">
            <img src="${IMG_CROCUS}" alt="Crocus holding the broken prototype" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-emerald-300/80 italic">Crocus — the one who refused to stop</div>
          </div>

          <p class="mt-4">Right then, a soft purple light flickered in the corner. WiseBot appeared — silently, like a thought born in the night.</p>
          <p class="mt-3">Her purple eyes scanned the room. She saw the broken pieces. The tired faces. The clenched fists. The gazes that looked down.</p>

          <div class="my-6 bg-gradient-to-r from-green-900/40 to-emerald-900/40 p-8 rounded-2xl border border-green-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">"Fatigue lies.<br/><span class="text-green-300">It tells you it's impossible.</span>"</p>
          </div>

          <p class="mt-4">"And what is it?" asked Alexandra. Her voice was small, like a child asking if it will rain.</p>
          <p class="mt-3">WiseBot came closer. Her wings reflected green light — like leaves shining after rain.</p>
          <p class="mt-3 text-green-200 font-bold text-xl">"It's just hard."</p>
          <p class="mt-4">Hard. Not impossible. <strong class="text-emerald-300">Hard.</strong> The difference between those two words was the difference between sitting down and standing up.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Fatigue is the most convincing liar. It looks you in the eye and says: "Enough." But the truth? The truth whispers: "One more time."</p>
        </section>

        <!-- SCENE 4 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-green-600/30 border border-green-500/30 text-green-300 font-black text-sm">04</span>
            <h3 class="text-2xl font-black text-green-300 tracking-wide">THE DECISION</h3>
          </div>
          <p>Minutes passed. Long, slow minutes, full of silence and heavy air. No one spoke. No one moved. The world stopped spinning for a moment, as if it too was waiting for their decision.</p>
          <p class="mt-3">Philippos stood in the doorway. One foot inside, the other outside. One meter separated him from leaving. One meter and one <em>choice</em>.</p>
          <p class="mt-3">He looked at his hands. Full of scratches. Small marks from hours of work. He looked at the broken prototype. He looked at Crocus — who wasn't pressuring him, wasn't begging, just <em>was there</em>.</p>
          <p class="mt-4">He picked up the screwdriver from the floor. Slowly. Like a swordsman picking up his blade after defeat.</p>
          <p class="mt-3 text-green-200 font-medium text-lg">"One last time."</p>
          <p class="mt-4">Eleftheria looked at him. For a second, she thought about saying "it's not worth it." But something inside her — something small, warm, stubborn — wouldn't let her. She opened her notebook. Found a new page. Clean. Empty. Full of possibilities.</p>
          <p class="mt-3 text-green-200 font-medium text-lg">"One."</p>
          <p class="mt-4">Alexandra stood up from the floor. Her knees ached. Her eyes were heavy. But she stood. And that — <strong class="text-white">that exactly</strong> — was the act of courage.</p>
          <p class="mt-3 text-green-200 font-medium text-lg">"One."</p>
          <p class="mt-3 text-gray-400 text-sm italic">No one felt like it. But no one left. And sometimes, persistence doesn't look like heroism. It looks like three tired children saying "one" instead of "done."</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-green-500/15 shadow-lg shadow-green-900/20">
            <img src="${IMG_KIDS_WITH_CROCUS}" alt="The children with Crocus" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-green-300/80 italic">Three tired "Ones" that changed everything</div>
          </div>
        </section>

        <!-- SCENE 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-emerald-400 tracking-wide">THE MIRACLE</h3>
          </div>
          <p>No miracle happened. Let's be honest. No light flashed. No magical sound was heard. No angels came, no magic wind blew.</p>
          <p class="mt-3">They simply sat down again. Philippos twisted a piece. Eleftheria reread the plans — this time more slowly, more carefully, like a detective searching for clues. Alexandra held a cable steady while Crocus worked beside her.</p>
          <p class="mt-3">And then — <em>click</em>.</p>
          <p class="mt-3">A small sound. So small it could be lost in the silence. But they heard it. <strong class="text-green-300">All of them</strong> heard it.</p>
          <p class="mt-4">The prototype <em>moved</em>. Slightly. One centimeter perhaps. A tiny pull forward. Like a heart beating again after silence.</p>
          <p class="mt-4">Crocus's eyes lit up. Green. Alive. Like two emeralds struck by sunlight.</p>
          <p class="mt-3 text-emerald-300 font-bold text-xl">"Did you see it?"</p>
          <p class="mt-4">Philippos smiled. A real smile — the kind you can't control, that escapes you like light through a crack. <em>"It moved,"</em> he whispered.</p>
          <p class="mt-3">Eleftheria felt her heart beating harder. Faster. Like a drum picking up tempo. <em>"We can,"</em> she said. And this time her voice didn't tremble.</p>
          <p class="mt-4">Alexandra laughed. A wet, broken laugh, full of relief. "One centimeter," she said. "One silly centimeter." But she was smiling as if she had won the world.</p>
          <p class="mt-3 text-gray-400 text-sm italic">You don't need a miracle. You need one centimeter. One small movement that tells you: "It's not over. It continues." And that is enough to keep the flame alive.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-emerald-500/20 shadow-2xl shadow-green-900/20">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="The children and WiseBot at the moment of the miracle" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-emerald-300/80 italic">One centimeter. Enough to change everything.</div>
          </div>
        </section>

        <!-- SCENE 6 — THE LESSON -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-green-600/30 border border-green-500/30 text-green-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-green-300 tracking-wide">THE LESSON</h3>
          </div>
          <p>They didn't finish that day. The sun set behind the trees, painting orange clouds across the sky. The children gathered their things slowly, with tired but <em>peaceful</em> movements.</p>
          <p class="mt-3">Because something had changed. It wasn't the prototype — that was still half-finished. It was <strong class="text-green-200">them</strong>. Inside them, something hard had bent. Something soft had hardened. The balance had shifted.</p>
          <p class="mt-3">Crocus stood at the door. The breeze moved the leaves around him. He looked at the children — one by one — and smiled. A calm, wise smile.</p>
          <p class="mt-4">WiseBot perched on the windowsill. Her purple eyes filled with warmth. Her voice sounded like a melody you know but can't remember where from.</p>

          <div class="mt-6 bg-gradient-to-r from-green-900/30 to-emerald-900/20 p-6 rounded-xl border border-green-500/20">
            <p class="text-white text-lg font-bold">"You don't lose when you fall."</p>
            <p class="mt-2 text-green-300 font-bold text-xl">"You lose when you stay down."</p>
          </div>

          <p class="mt-4">Philippos looked back, toward the workshop. "Tomorrow?" he asked.</p>
          <p class="mt-3">Crocus nodded. "Tomorrow."</p>
          <p class="mt-3">Eleftheria held her notebook tight against her chest. "And the day after," she said.</p>
          <p class="mt-3">Alexandra smiled. "And every day until we finish."</p>
          <p class="mt-4">They knew they would finish. They didn't know when. They didn't know how. But they <strong class="text-green-200">knew</strong>. And that certainty — that calm, steady, steel certainty — was more precious than any success.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Persistence isn't about not feeling pain. It's about feeling the pain, looking it in the eye, and saying: "Okay. But I'm not leaving."</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-green-500/20 shadow-2xl shadow-green-900/20">
            <img src="${IMG_KIDS_WISEBOT_2}" alt="The children and WiseBot at sunset" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-green-300/80 italic">They didn't finish today. But they knew they would.</div>
          </div>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-green-950/60 p-8 rounded-3xl border-2 border-dashed border-green-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-green-300 uppercase tracking-wider">JOURNAL: PERSISTENCE</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Write. Think. Feel. There is no wrong answer.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-green-500/15">
              <h5 class="text-green-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-green-600/40 flex items-center justify-center text-xs font-black">1</span>
                THE OBSTACLE
              </h5>
              <p class="text-sm mb-3 opacity-80">What is really challenging you right now? What is the thing that makes you want to give up?</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-green-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-green-500/15">
              <h5 class="text-green-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-green-600/40 flex items-center justify-center text-xs font-black">2</span>
                THE THOUGHT
              </h5>
              <p class="text-sm mb-3 opacity-80">What do you tell yourself when you fail? Does fatigue say "it's impossible" or "it's just hard"?</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-green-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-green-500/15">
              <h5 class="text-green-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-green-600/40 flex items-center justify-center text-xs font-black">3</span>
                THE PROMISE
              </h5>
              <p class="text-sm mb-3 opacity-80">Complete the sentence:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-green-500/10 text-green-200">
                <p class="text-sm font-medium">"I won't give up. I will try again tomorrow because: __________"</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- MEANING BOX -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-r from-emerald-900/30 to-green-900/30 p-6 rounded-2xl border border-emerald-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-emerald-300 uppercase tracking-wider">The Meaning of This Chapter</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            Failure is not the end — it is a <strong class="text-emerald-300">lesson</strong>. Fatigue doesn't mean you should stop — it means you are <strong class="text-green-300">working hard</strong>. Crocus wasn't smarter or stronger. He was more <strong class="text-white">stubborn</strong>. And sometimes, stubbornness beats talent.
          </p>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- MESSAGE FOR PARENTS -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-green-950/60 p-8 rounded-3xl border border-green-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-green-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              Resilience is the single most important predictor of future success. It's not IQ, it's not talent — it's the ability to <strong class="text-white">get back up after every fall</strong>.
            </p>
            <p class="text-gray-300 leading-relaxed">
              When we reward <strong class="text-green-200">effort</strong> and not just the result, we teach children to love the process. Crocus didn't say "we'll make it." He said "we aren't finished." That difference is enormous.
            </p>
            <div class="mt-4 bg-green-900/20 p-4 rounded-xl border border-green-500/10">
              <p class="text-sm text-green-200 font-medium">💡 Try today: When your child fails, instead of saying "it's okay," ask: "What can we try differently tomorrow?"</p>
            </div>
          </div>
        </div>

      </div>
    `
    }
  }
];
