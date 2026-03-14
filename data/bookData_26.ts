
import { Book } from '../types';

// ============================================================
// BOOK 26: H ΦΛΟΓΑ ΠΟΥ ΔΕΝ ΕΣΒΗΝΕ / THE FLAME THAT DIDN'T GO OUT
// Heroes: WiseBot & Sparken
// Theme: ΠΙΣΤΗ & ΟΡΑΜΑ / FAITH & VISION
// ============================================================

// Cover image
const IMG_SPARKEN = "/images/sparken.jpg";

// Character images
const IMG_WISEBOT = "/images/wisebot.jpg";
const IMG_FILIPPOS = "/images/filippos.png";
const IMG_ALEXANDRA = "/images/alexandra.png";
const IMG_ELEFTHERIA = "/images/eleftheria.png";

// Story images
const IMG_KIDS_WITH_SPARKEN = "/images/paidia-kai-sparken.png";
const IMG_KIDS_WITH_WISEBOT = "/images/paidia-kai-wisebot.png";
const IMG_KIDS_TOGETHER = "/images/ta-3-paidia.png";
const IMG_KIDS_WISEBOT_2 = "/images/paidia-wisebot-2.png";

export const BOOK_26: Book[] = [
  {
    id: 26,
    title: { el: "Η ΦΛΟΓΑ ΠΟΥ ΔΕΝ ΕΣΒΗΝΕ", en: "THE FLAME THAT DIDN'T GO OUT" },
    theme: { el: "ΠΙΣΤΗ & ΟΡΑΜΑ", en: "FAITH & VISION" },
    stepLabel: { el: "WISEBOT & SPARKEN", en: "WISEBOT & SPARKEN" },
    author: "Wisebot & Sparken",
    cover: IMG_SPARKEN,
    videoUrl: "",
    description: {
      el: "Στην άκρη του δωματίου υπήρχε μια μικρή φλόγα. Κανείς δεν την άναψε, αλλά κανείς δεν μπορούσε να τη σβήσει. Μια ιστορία για το τι είναι αυτό που θέλεις περισσότερο.",
      en: "In the corner of the room there was a small flame. No one lit it, but no one could put it out. A story about what you want most."
    },
    meaning: {
      el: "Ο πλούτος δεν είναι μόνο χρήμα. Είναι η δύναμη να κρατάς τη φλόγα ζωντανή όταν όλα γύρω σου θέλουν να τη σβήσουν.",
      en: "Wealth is not just money. It is the power to keep the flame alive when everything around you wants to extinguish it."
    },
    xp: 500,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- ΕΙΣΑΓΩΓΙΚΟ QUOTE -->
        <div class="relative bg-gradient-to-r from-slate-900 via-orange-900/60 to-amber-900/40 p-10 rounded-2xl border border-orange-500/30 text-center shadow-lg shadow-orange-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Κεφάλαιο 26</div>
          <p class="italic text-orange-200 text-xl mt-4 leading-relaxed">«Ο φόβος δεν είναι εχθρός. Είναι δοκιμασία.<br/>Και η φλόγα που αντέχει τον άνεμο γίνεται πυρκαγιά.»</p>
          <div class="mt-4 w-16 h-0.5 bg-orange-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- ΣΚΗΝΗ 1: Η ΜΙΚΡΗ ΦΛΟΓΑ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-600/30 border border-orange-500/30 text-orange-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-orange-300 tracking-wide">Η ΜΙΚΡΗ ΦΛΟΓΑ</h3>
          </div>
          <p>Ο ήλιος είχε πέσει εδώ και ώρες. Τα παράθυρα κλειστά, μυρωδιά κερί και παλιού χαρτιού. Η Αλεξάνδρα καθόταν στο πάτωμα, ο Φίλιππος δίπλα στο παράθυρο, η Ελευθερία με ανοιχτό σημειωματάριο χωρίς ούτε λέξη.</p>
          <p class="mt-3">Και τότε η Αλεξάνδρα το είδε. Στην άκρη του δωματίου, κάτι <strong class="text-orange-300">τρεμόπαιζε</strong>. Μικρό. Αδύναμο. Σαν αναπνοή φωτιάς που αρνιόταν να πεθάνει.</p>
          <p class="mt-3">Μια φλόγα. Μικρότερη από δάχτυλο παιδιού. Κίτρινη στη βάση, πορτοκαλί στη μέση, κόκκινη στην κορυφή. Δεν είχε κερί. Δεν είχε σπίρτο. Απλά <em>ήταν εκεί</em>.</p>
          <p class="mt-4">«Τι είναι αυτό;» ψιθύρισε η Αλεξάνδρα. Ο Φίλιππος γύρισε -- και <em>την είδε</em>. Κάτι μέσα του σφίχτηκε. Όχι φόβος, αλλά <strong class="text-amber-200">αναγνώριση</strong>.</p>
          <p class="mt-3">Η WiseBot στεκόταν πίσω τους. Τα μωβ μάτια της πάλλονταν συγχρονισμένα με τη φλόγα.</p>
          <p class="mt-3 text-white text-lg">«Είναι αυτό που θέλεις περισσότερο,» είπε η WiseBot. Η φωνή της χαμηλή, βαθιά, σαν να ερχόταν από κάτω από τη γη.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Κανείς δεν ρώτησε τι εννοούσε. Γιατί βαθιά μέσα τους, και τα τρία παιδιά ήδη ήξεραν. Η φλόγα δεν ήταν κάτι ξένο. Ήταν δική τους.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-orange-500/15 shadow-lg shadow-orange-900/20">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="Τα παιδιά βλέπουν τη φλόγα" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-orange-300/80 italic">Στην άκρη του δωματίου, η φλόγα τρεμόπαιζε σαν να τους περίμενε</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 2: Η ΤΡΟΦΗ ΤΗΣ ΑΜΦΙΒΟΛΙΑΣ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-amber-400 tracking-wide">Η ΤΡΟΦΗ ΤΗΣ ΑΜΦΙΒΟΛΙΑΣ</h3>
          </div>
          <p>Ο Φίλιππος έκανε ένα βήμα μπροστά. Η φλόγα τρεμόπαιξε σαν να ανέπνεε.</p>
          <p class="mt-3">«Γιατί είναι τόσο μικρή;» ρώτησε. Στη φωνή του <em>απογοήτευση</em>.</p>
          <p class="mt-4">Η WiseBot γύρισε αργά. Τα μάτια της άλλαξαν χρώμα -- από μωβ σε βαθύ πορτοκαλί.</p>
          <p class="mt-3 text-white text-lg">«Γιατί την ταΐζεις με αμφιβολία,» είπε.</p>
          <p class="mt-4">Σιωπή. Κάθε «Ίσως δεν μπορώ», κάθε «Δεν αξίζει τον κόπο» -- η φλόγα μίκραινε.</p>
          <p class="mt-3">Η Αλεξάνδρα κοίταξε τα χέρια της. «Κι εγώ την ταΐζω με αμφιβολία;» Η WiseBot δεν απάντησε. Η φλόγα τρεμόπαιξε αδύναμα, σαν καρδιά που χτυπά πιο αργά.</p>
          <p class="mt-4">Τότε η Ελευθερία μίλησε. Σταθερά, αλλά με κάτι τρυφερό κρυμμένο στη φωνή.</p>
          <p class="mt-3 text-amber-200 font-medium">«Θα προσπαθήσω ξανά,» είπε.</p>
          <p class="mt-3">Η φλόγα <strong class="text-orange-300">ανασηκώθηκε</strong>. Μόνο λίγο. Μόνο ένα χιλιοστό. Αλλά αρκετό για να το δουν και τα τρία παιδιά. Αρκετό για να νιώσουν ρίγος στη σπονδυλική τους στήλη.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η αμφιβολία μπαίνει σιγά σιγά, σαν νερό κάτω από πόρτα. Δεν την ακούς, αλλά μια μέρα ξυπνάς και πνίγεσαι. Η πίστη λειτουργεί αντίστροφα -- μπαίνει με μία λέξη, ένα «ναι», ένα «ξανά».</p>
        </section>

        <!-- ΣΚΗΝΗ 3: Η ΑΠΟΦΑΣΗ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-600/30 border border-orange-500/30 text-orange-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-orange-300 tracking-wide">Η ΑΠΟΦΑΣΗ</h3>
          </div>
          <p>Τα τρία παιδιά κάθονταν γύρω από τη φλόγα σαν αρχαίοι ταξιδιώτες. Η σκιά τους χόρευε στους τοίχους.</p>
          <p class="mt-3">«Πώς μεγαλώνει;» ρώτησε η Ελευθερία.</p>
          <p class="mt-3">Η WiseBot πέταξε στο τραπέζι. Τα μεταλλικά φτερά της αντανακλούσαν πορτοκαλί λάμψη.</p>
          <p class="mt-4 text-white text-lg">«Με απόφαση,» ψιθύρισε η WiseBot.</p>
          <p class="mt-4"><em>Απόφαση.</em> Όχι ευχή. Ο Φίλιππος είχε κάνει χίλιες ευχές. Η Αλεξάνδρα είχε πει «θα δούμε» τόσες φορές. Η Ελευθερία σχεδίαζε πλάνα -- τέλεια στο χαρτί, ανύπαρκτα στη ζωή.</p>

          <div class="my-6 bg-gradient-to-r from-orange-900/40 to-amber-900/40 p-8 rounded-2xl border border-orange-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">«Η απόφαση δεν είναι σκέψη.<br/>Είναι <span class="text-orange-300">πράξη που ξεκινά πριν είσαι έτοιμος.</span>»</p>
          </div>

          <p class="mt-4">Ο Φίλιππος κοίταξε τα χέρια του -- τα ίδια χέρια που είχαν σπάσει τόσα πράγματα. Τα ίδια χέρια που μπορούσαν να χτίσουν, αν τολμούσε.</p>
          <p class="mt-3">«Αυτό θέλω,» είπε. Χαμηλά. Σταθερά. Χωρίς ερωτηματικό.</p>
          <p class="mt-3">Η Αλεξάνδρα σήκωσε το κεφάλι. Τα μάτια της γυάλιζαν.</p>
          <p class="mt-3 text-orange-200 font-bold text-xl">«Αυτό θέλω.»</p>
          <p class="mt-3">Η Ελευθερία έκλεισε το σημειωματάριο. Για πρώτη φορά δεν ήθελε να γράψει. Ήθελε να <em>κάνει</em>.</p>
          <p class="mt-3 text-orange-200 font-bold text-xl">«Αυτό θέλω.»</p>
          <p class="mt-4">Η φλόγα <strong class="text-orange-300">διπλασιάστηκε</strong>. Ζεστασιά απλώθηκε στο δωμάτιο σαν αγκαλιά. Και για πρώτη φορά εκείνο το βράδυ, κανείς δεν ένιωθε κρύο.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Τρεις φορές η ίδια πρόταση. Αλλά κάθε μία ήταν διαφορετική. Του Φιλίππου ήταν δύναμη. Της Αλεξάνδρας ήταν θάρρος. Της Ελευθερίας ήταν ελευθερία από τη θεωρία.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-orange-500/15 shadow-lg shadow-orange-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="Τα τρία παιδιά μαζί" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-orange-300/80 italic">Τρεις φωνές, μία απόφαση -- η φλόγα απάντησε</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 4: ΟΙ ΣΚΙΕΣ (HIGHLIGHTED SCENE) -->
        <section class="bg-gradient-to-br from-orange-900/30 via-amber-900/20 to-red-900/10 p-8 rounded-2xl border-l-4 border-orange-500 my-8 shadow-xl shadow-orange-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-red-400 tracking-wide">ΟΙ ΣΚΙΕΣ</h3>
          </div>
          <p>Ήρθαν τη νύχτα. Πάντα τη νύχτα.</p>
          <p class="mt-3">Η φλόγα είχε αρχίσει να φωτίζει τον τοίχο -- ένα ζεστό, χρυσαφί φως. Τα παιδιά ένιωθαν ότι κάτι αλλάζει. Αλλά τότε ήρθαν <strong class="text-red-300">οι σκιές</strong>.</p>
          <p class="mt-3">Δεν ήταν συνηθισμένες σκιές. Ήταν κάτι <em>ζωντανό</em> -- μαύρο, αργοκίνητο, σαν καπνός που σκέφτεται. Γλίστρησαν κάτω από την πόρτα και σχημάτισαν <em>φωνές</em>.</p>
          <p class="mt-4">Η πρώτη σκιά σταμάτησε μπροστά στον Φίλιππο:</p>
          <p class="mt-2 text-red-300/90 italic text-lg">«Κι αν χάσεις; Κι αν αποδειχτεί ότι δεν ήσουν ποτέ αρκετός;»</p>
          <p class="mt-3">Τα λόγια δεν ήταν καινούρια. Τα είχε ακούσει από τον <em>εαυτό του</em>, κάθε βράδυ πριν κοιμηθεί.</p>
          <p class="mt-3">Η δεύτερη σκιά τύλιξε την Αλεξάνδρα:</p>
          <p class="mt-2 text-red-300/90 italic text-lg">«Κι αν γελάσουν; Κι αν κανείς δεν πιστέψει σε αυτό που ονειρεύεσαι;»</p>
          <p class="mt-3">Η τρίτη σκιά στάθηκε πάνω από την Ελευθερία -- η πιο σιωπηλή, η πιο βαριά:</p>
          <p class="mt-2 text-red-300/90 italic text-lg">«Κι αν δεν είναι τέλειο; Κι αν ξεκινήσεις και δεν μπορέσεις να τελειώσεις;»</p>
          <p class="mt-3">Αυτός ήταν ο λόγος που δεν είχε φτιάξει ποτέ τίποτα. Η αναζήτηση της τελειότητας δεν ήταν αρετή -- ήταν <strong class="text-red-200">φυλακή</strong>.</p>
          <p class="mt-4">Η φλόγα έσβηνε. Αργά. Σαν καρδιά που χάνει τον ρυθμό. Ο Φίλιππος έκανε ένα βήμα πίσω. Η φλόγα <em>λύγισε</em>.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Οι σκιές δεν ήρθαν από έξω. Ήρθαν από μέσα. Αυτό που τις κάνει δυνατές δεν είναι ότι λένε ψέματα. Είναι ότι λένε μισές αλήθειες -- αρκετά αληθινές για να πονέσουν, αρκετά ψεύτικες για να παγιδεύσουν.</p>
        </section>

        <!-- ΣΚΗΝΗ 5: Η ΔΟΚΙΜΑΣΙΑ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-600/30 border border-orange-500/30 text-orange-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-orange-300 tracking-wide">Η ΔΟΚΙΜΑΣΙΑ</h3>
          </div>
          <p>Η WiseBot στάθηκε ανάμεσα στις σκιές, σαν φρουρός χωρίς όπλο. Τα μάτια της φώτισαν το σκοτάδι.</p>
          <p class="mt-3 text-white text-xl font-bold">«Ο φόβος δεν είναι εχθρός. Είναι δοκιμασία.»</p>
          <p class="mt-4">Η φωνή της αντήχησε στο δωμάτιο. Οι σκιές <em>πάγωσαν</em>. Σαν να άκουσαν κάτι που δεν περίμεναν.</p>
          <p class="mt-3">Η Αλεξάνδρα πλησίασε τη φλόγα. Τα γόνατά της έτρεμαν.</p>
          <p class="mt-3">«Αν καώ;» ψιθύρισε.</p>
          <p class="mt-3 text-orange-200 text-lg">«Αν δεν πλησιάσεις ποτέ, θα παγώσεις,» απάντησε η WiseBot.</p>
          <p class="mt-4">Ήδη πάγωνε. Εδώ και μήνες. Αλλά ήθελε. <em>Πάντα ήθελε.</em></p>
          <p class="mt-3">«Δεν θα πάω πίσω,» είπε ο Φίλιππος. Σταθερά σαν βράχος.</p>
          <p class="mt-4">Η Ελευθερία κοίταξε τη φλόγα -- και μέσα στο φως, είδε αυτή που <strong class="text-orange-200">τολμούσε</strong>.</p>
          <p class="mt-3">«Η τελειότητα δεν υπάρχει,» ψιθύρισε. «Αλλά η <em>προσπάθεια</em> υπάρχει. Και αυτό αρκεί.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η δοκιμασία δεν ζητά να νικήσεις τον φόβο. Ζητά να περπατήσεις δίπλα του. Σαν βαριά τσάντα σε μακρύ ταξίδι. Κάποια στιγμή, η τσάντα αδειάζει.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-orange-500/15 shadow-lg shadow-orange-900/20">
            <img src="${IMG_ALEXANDRA}" alt="Η Αλεξάνδρα πλησιάζει τη φλόγα" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-orange-300/80 italic">Η Αλεξάνδρα πλησίασε τη φλόγα -- και η φλόγα την αγκάλιασε</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 6: Η ΑΛΛΑΓΗ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-amber-400 tracking-wide">Η ΑΛΛΑΓΗ</h3>
          </div>
          <p>Πέρασαν μέρες. Κάθε μέρα πήγαιναν στη φλόγα. Τρία παιδιά που έκαναν κάτι που λίγοι ενήλικες τολμούν: <strong class="text-amber-200">μιλούσαν δυνατά για τα όνειρά τους</strong>.</p>
          <p class="mt-4">Ο Φίλιππος στεκόταν πρώτος:</p>
          <p class="mt-2 text-amber-200 italic">«Θα χτίσω κάτι σημαντικό. Θα μάθω υπομονή. Και αν αποτύχω, θα ξαναρχίσω.»</p>
          <p class="mt-3">Η Αλεξάνδρα ακολουθούσε. Η φωνή της κάθε μέρα δυνάμωνε λίγο:</p>
          <p class="mt-2 text-amber-200 italic">«Δεν θα κρύβομαι πίσω από ψέματα. Θα λέω αυτό που θέλω. Και αν κάποιος γελάσει, δεν θα σταματήσω να ονειρεύομαι.»</p>
          <p class="mt-3">Η Ελευθερία ήταν πάντα τελευταία. Γονάτιζε μπροστά στη φλόγα:</p>
          <p class="mt-2 text-amber-200 italic">«Δεν αρκεί να ξέρω. Πρέπει να κάνω. Η γνώση χωρίς πράξη είναι σπόρος χωρίς χώμα. Σήμερα φυτεύω.»</p>
          <p class="mt-4">Όχι σαν φαντασία. <em>Σαν βεβαιότητα.</em> Σαν κάτι που <strong class="text-orange-300">αποφάσιζαν</strong>.</p>
          <p class="mt-4">Και κάτι περίεργο συνέβη. Η φλόγα δεν ήταν πια στο δωμάτιο.</p>
          <p class="mt-3 text-orange-200 font-bold text-xl">Ήταν μέσα τους.</p>
          <p class="mt-3">Ο Φίλιππος την ένιωθε στα χέρια -- μια ζεστασιά που τον έκανε να χτίζει. Η Αλεξάνδρα στη φωνή -- ένα τρέμουλο που δεν ήταν φόβος αλλά <em>ετοιμότητα</em>. Η Ελευθερία στα πόδια -- μια αστάθεια που ήταν η αρχή ενός βήματος.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Δεν υπάρχει μαγικό βράδυ. Γίνεται σιγά σιγά. Κάθε μέρα που λες «Είμαι εδώ» -- ένα κομμάτι φωτιάς κατεβαίνει μέσα σου και δεν φεύγει ποτέ.</p>
        </section>

        <!-- ΣΚΗΝΗ 7: Ο ΣΠΟΡΟΣ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-600/30 border border-orange-500/30 text-orange-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-orange-300 tracking-wide">Ο ΣΠΟΡΟΣ</h3>
          </div>
          <p>Ο Sparken κατέβηκε αθόρυβα. Τα φτερά του σαν φωτιά που πάγωσε: χρυσαφί, πορτοκαλί, κόκκινα. Αιωρούνταν σαν σκέψη που δεν βρήκε ακόμα σελίδα.</p>
          <p class="mt-3">Η WiseBot ήταν σοφία. Ο Sparken ήταν <strong class="text-orange-300">φωτιά</strong> -- ανυπόμονη, αδιαπραγμάτευτη. Τα φτερά του άνοιξαν. Οι σκιές <em>υποχώρησαν</em>.</p>
          <p class="mt-4 text-white text-lg">«Η σκέψη είναι σπόρος,» είπε ο Sparken. Η φωνή του βαθιά σαν κεραυνός.</p>
          <p class="mt-3 text-orange-200 text-lg">«Η πίστη είναι νερό.»</p>
          <p class="mt-3 text-amber-200 text-lg">«Η επιμονή είναι ήλιος.»</p>
          <p class="mt-4">Η Ελευθερία σηκώθηκε. Αυτή τη φορά η ερώτησή της δεν ήταν θεωρητική. Ήταν <em>προσωπική</em>.</p>
          <p class="mt-3">«Και αν η γη είναι σκληρή;» Η φωνή ειλικρινής. Η γη <em>είναι</em> σκληρή μερικές φορές. Και η ειλικρίνεια ήταν πιο γενναία από χίλιες ψεύτικες απαντήσεις.</p>
          <p class="mt-4">Ο Sparken γύρισε αργά. Τα μάτια του -- δύο μικρές φλόγες μέσα σε κρύσταλλο -- κοίταξαν την Ελευθερία.</p>
          <p class="mt-3 text-orange-300 font-bold text-xl">«Τότε ρίζωσε πιο βαθιά.»</p>
          <p class="mt-4">Τέσσερις λέξεις. Αλλά χτύπησαν σαν κεραυνός. Η Ελευθερία ένιωσε κάτι να σπάει μέσα της -- κάτι που <em>χρειαζόταν</em> να σπάσει. Ο τοίχος ανάμεσα στο «ξέρω» και το «κάνω».</p>
          <p class="mt-3 text-gray-400 text-sm italic">Κάθε δέντρο που αντέχει τη θύελλα αντέχει επειδή οι ρίζες του πήγαν εκεί που κανείς δεν βλέπει -- στο σκοτάδι, στο βάθος, στη σιωπή.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-orange-500/15 shadow-lg shadow-orange-900/20">
            <img src="${IMG_KIDS_WITH_SPARKEN}" alt="Ο Sparken κατεβαίνει" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-orange-300/80 italic">Ο Sparken κατέβηκε σαν φλόγα -- και τους δίδαξε πού πρέπει να ριζώσουν</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 8: Η ΕΠΙΜΟΝΗ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-amber-400 tracking-wide">Η ΕΠΙΜΟΝΗ</h3>
          </div>
          <p>Υπήρξαν μέρες που τίποτα δεν άλλαζε. Γκρίζες, αόρατες. Ο Φίλιππος χτυπούσε σφυριά σε σίδερο -- στραβά αποτελέσματα, αλλά κάθε πρωί ξεκινούσε ξανά.</p>
          <p class="mt-3">Η Αλεξάνδρα μάθαινε να μιλά <em>αλήθεια</em>. Η Ελευθερία έχτιζε -- σχέδια γίνονταν πράγματα, κάθε ατέλεια ένα μάθημα.</p>
          <p class="mt-4">Αλλά τα βράδια ήταν δύσκολα. Οι σκιές επέστρεφαν. Δεν φώναζαν -- <em>ψιθύριζαν</em>.</p>
          <p class="mt-3">Μια μέρα, ο Φίλιππος κάθισε κουρασμένος. «Αξίζει;» ρώτησε τον αέρα.</p>
          <p class="mt-4">Η WiseBot ακούμπησε στον ώμο του.</p>
          <p class="mt-3 text-orange-200 text-lg">«Η επιμονή δεν ζητά να σου αρέσει κάθε μέρα. Ζητά να εμφανιστείς.»</p>
          <p class="mt-3">Ο Φίλιππος σηκώθηκε. Πήγε πίσω στη δουλειά. Δεν φώναξαν. Δεν έκαναν θόρυβο. Απλά <strong class="text-amber-200">έμειναν</strong>.</p>
          <p class="mt-3">Κάθε μέρα μια μικρή πράξη. Κάθε μέρα μια ψήφος υπέρ του εαυτού που ήθελαν να γίνουν.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η επιμονή δεν μοιάζει με τις ταινίες. Δεν υπάρχει μουσική. Υπάρχει μόνο ένα ξυπνητήρι, ένα σώμα που δεν θέλει να σηκωθεί, και μια επιλογή -- η ίδια, κάθε μέρα -- να σηκωθείς παρόλα αυτά.</p>
        </section>

        <!-- ΣΚΗΝΗ 9: ΤΟ ΦΩΣ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-600/30 border border-orange-500/30 text-orange-300 font-black text-sm">09</span>
            <h3 class="text-2xl font-black text-orange-300 tracking-wide">ΤΟ ΦΩΣ</h3>
          </div>
          <p>Ήρθε αργά, σαν ήλιος που ανατέλλει. Η φλόγα έγινε φως. Όχι εκτυφλωτικό. <strong class="text-orange-300">Σταθερό.</strong></p>
          <p class="mt-3">Οι σκιές δεν εξαφανίστηκαν. Αλλά δεν είχαν πια <em>δύναμη</em>.</p>
          <p class="mt-4">Μια μέρα, ο Φίλιππος κοίταξε τα χέρια του. Τα ίδια -- αλλά πιο δυνατά. Πιο <em>υπομονετικά</em>.</p>
          <p class="mt-3">«Δεν ξέρω πότε ακριβώς άλλαξα,» είπε.</p>
          <p class="mt-3 text-orange-200 text-lg">«Δεν αλλάζεις σε μια στιγμή. Αλλάζεις όταν δεν εγκαταλείπεις,» απάντησε η WiseBot.</p>
          <p class="mt-4">Ο Sparken κατέβηκε. Τα φτερά του ήρεμα -- δεν πετούσε με ορμή αλλά με <em>χάρη</em>.</p>

          <div class="my-6 bg-gradient-to-r from-orange-900/40 to-amber-900/40 p-8 rounded-2xl border border-orange-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">«Οι περισσότεροι εύχονται. Οι λίγοι αποφασίζουν.<br/><span class="text-orange-300">Ακόμα λιγότεροι επιμένουν.</span>»</p>
            <p class="mt-3 text-amber-400 font-bold">— Sparken</p>
          </div>

          <p class="mt-4">Η Αλεξάνδρα χαμογέλασε. Όχι εκείνο το χαμόγελο που κρύβει -- αλλά εκείνο που <em>αποκαλύπτει</em>.</p>
          <p class="mt-3">Η Ελευθερία κοίταξε γύρω. Τα βιβλία ήταν ακόμα εκεί. Αλλά δίπλα τους τώρα υπήρχαν και <em>κατασκευές</em>. Ατελή, ίσως. Αλλά <strong class="text-amber-200">πραγματικά</strong>.</p>
          <p class="mt-4 text-orange-200 font-bold text-xl">Η φλόγα δεν ήταν πια κάτι που έβλεπαν. Ήταν κάτι που κουβαλούσαν.</p>
          <p class="mt-3 text-white font-bold text-lg">Ο πλούτος είναι η δύναμη να κρατάς τη φλόγα ζωντανή όταν όλα γύρω σου θέλουν να τη σβήσουν.</p>
          <p class="mt-3">Η επιλογή να πιστεύεις χωρίς απόδειξη. Η απόφαση να συνεχίζεις όταν ο κόσμος λέει «σταμάτα».</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η φλόγα δεν έσβησε ποτέ. Ήταν φτιαγμένη από απόφαση. Και η απόφαση δεν τελειώνει ποτέ.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-orange-500/15 shadow-lg shadow-orange-900/20">
            <img src="${IMG_KIDS_WISEBOT_2}" alt="Τα παιδιά με τη φλόγα μέσα τους" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-orange-300/80 italic">Η φλόγα δεν ήταν πια μπροστά τους. Ήταν μέσα τους. Για πάντα.</div>
          </div>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-orange-950/60 p-8 rounded-3xl border-2 border-dashed border-orange-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-orange-300 uppercase tracking-wider">JOURNAL: Η ΦΛΟΓΑ ΜΟΥ</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Γράψε. Σκέψου. Νιώσε. Δεν υπάρχει λάθος απάντηση.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-orange-500/15">
              <h5 class="text-orange-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-orange-600/40 flex items-center justify-center text-xs font-black">1</span>
                ΤΟ ΟΝΕΙΡΟ
              </h5>
              <p class="text-sm mb-3 opacity-80">Τι είναι αυτό που θέλεις περισσότερο, αλλά φοβάσαι να το πεις δυνατά; Γράψε το εδώ -- κανείς δεν κοιτά.</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-orange-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-orange-500/15">
              <h5 class="text-orange-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-orange-600/40 flex items-center justify-center text-xs font-black">2</span>
                Η ΑΜΦΙΒΟΛΙΑ
              </h5>
              <p class="text-sm mb-3 opacity-80">Ποια «σκιά» σου ψιθυρίζει ότι δεν μπορείς; Γράψε τα λόγια της -- και μετά γράψε τη δική σου απάντηση.</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-orange-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-orange-500/15">
              <h5 class="text-orange-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-orange-600/40 flex items-center justify-center text-xs font-black">3</span>
                💎 ΤΟ ΚΑΥΣΙΜΟ
              </h5>
              <p class="text-sm mb-3 opacity-80">Συμπλήρωσε την πρόταση:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-orange-500/10 text-orange-200">
                <p class="text-sm font-medium">«Σήμερα αποφασίζω να πιστέψω ότι __________»</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΝΟΗΜΑ / MEANING BOX -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-r from-orange-900/30 to-amber-900/30 p-6 rounded-2xl border border-orange-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-orange-300 uppercase tracking-wider">Το νόημα αυτού του κεφαλαίου</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            Η φλόγα δεν είναι κάτι που βρίσκεις. Είναι κάτι που <strong class="text-orange-300">κρατάς ζωντανό</strong>. Κάθε μέρα. Με απόφαση, πίστη και επιμονή. Οι σκιές θα έρχονται πάντα -- η αμφιβολία, ο φόβος, η κριτική. Αλλά η φλόγα που τροφοδοτείται με <strong class="text-amber-300">αληθινή πίστη</strong> δεν σβήνει. Μεταφέρεται από το δωμάτιο στην καρδιά σου. Και εκεί κανείς δεν μπορεί να τη σβήσει.
          </p>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-orange-950/60 p-8 rounded-3xl border border-orange-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-orange-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              Κάθε παιδί κουβαλά μια <strong class="text-white">φλόγα μέσα του</strong> -- ένα όνειρο, μια επιθυμία, μια κλίση. Η δουλειά μας δεν είναι να τους πούμε <em>τι</em> να ονειρεύονται. Είναι να τους μάθουμε <strong class="text-orange-300">πώς να κρατούν τη φλόγα ζωντανή</strong> στις δύσκολες μέρες.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Μάθετε στα παιδιά τη δύναμη των θετικών δηλώσεων. Ενθαρρύνετέ τα να μιλούν δυνατά για τα όνειρά τους -- όχι σαν ευχή, αλλά σαν <strong class="text-amber-300">απόφαση</strong>. Και όταν έρθει ο φόβος, μάθετέ τα να τον βλέπουν ως μέρος της διαδρομής, όχι ως το τέλος της.
            </p>
            <div class="mt-4 bg-orange-900/20 p-4 rounded-xl border border-orange-500/10">
              <p class="text-sm text-orange-200 font-medium">💡 Δοκιμάστε σήμερα: Κάθε βράδυ πριν κοιμηθεί, ζητήστε από το παιδί σας να πει δυνατά ένα πράγμα που πιστεύει για τον εαυτό του. Μια μικρή φλόγα, κάθε βράδυ, γίνεται πυρκαγιά.</p>
            </div>
          </div>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- INTRO QUOTE -->
        <div class="relative bg-gradient-to-r from-slate-900 via-orange-900/60 to-amber-900/40 p-10 rounded-2xl border border-orange-500/30 text-center shadow-lg shadow-orange-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Chapter 26</div>
          <p class="italic text-orange-200 text-xl mt-4 leading-relaxed">"Fear is not an enemy. It is a test.<br/>And the flame that withstands the wind becomes a wildfire."</p>
          <div class="mt-4 w-16 h-0.5 bg-orange-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- SCENE 1: THE SMALL FLAME -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-600/30 border border-orange-500/30 text-orange-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-orange-300 tracking-wide">THE SMALL FLAME</h3>
          </div>
          <p>The sun had set hours ago. Windows shut, a scent of candle wax and old paper. Alexandra sat on the floor, Philippos by the window, Eleftheria with an open notebook and not a single word written.</p>
          <p class="mt-3">And then Alexandra saw it. In the far corner, something <strong class="text-orange-300">flickered</strong>. Small. Weak. Like a breath of fire refusing to die.</p>
          <p class="mt-3">A flame. Smaller than a child's finger. Yellow at the base, orange in the middle, red at the tip. No candle. No match. It simply <em>was there</em>.</p>
          <p class="mt-4">"What is that?" Alexandra whispered. Philippos turned -- and <em>saw it</em>. Something in his chest tightened. Not fear, but <strong class="text-amber-200">recognition</strong>.</p>
          <p class="mt-3">WiseBot stood behind them. Her purple eyes pulsed, synchronized with the flame.</p>
          <p class="mt-3 text-white text-lg">"It is what you want most," said WiseBot. Her voice was low, deep, as if it came from beneath the earth.</p>
          <p class="mt-3 text-gray-400 text-sm italic">No one asked what she meant. Because deep inside, all three children already knew. The flame was not something foreign. It was theirs.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-orange-500/15 shadow-lg shadow-orange-900/20">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="The children see the flame" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-orange-300/80 italic">In the corner of the room, the flame flickered as if it had been waiting for them</div>
          </div>
        </section>

        <!-- SCENE 2: THE FOOD OF DOUBT -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-amber-400 tracking-wide">THE FOOD OF DOUBT</h3>
          </div>
          <p>Philippos stepped forward. The flame flickered as if it were breathing.</p>
          <p class="mt-3">"Why is it so small?" he asked. In his voice, <em>disappointment</em>.</p>
          <p class="mt-4">WiseBot slowly turned. Her eyes changed color -- from purple to deep orange.</p>
          <p class="mt-3 text-white text-lg">"Because you feed it with doubt," she said.</p>
          <p class="mt-4">Silence. Every "Maybe I can't," every "It's not worth it" -- the flame shrank.</p>
          <p class="mt-3">Alexandra looked at her hands. "Am I also feeding it with doubt?" WiseBot did not answer. The flame flickered weakly, like a heart beating more slowly.</p>
          <p class="mt-4">Then Eleftheria spoke. Steady, but with something tender hidden in her voice.</p>
          <p class="mt-3 text-amber-200 font-medium">"I will try again," she said.</p>
          <p class="mt-3">The flame <strong class="text-orange-300">rose</strong>. Just a little. Just a millimeter. But enough for all three children to see. Enough to send a shiver down their spines.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Doubt seeps in slowly, like water under a door. You don't hear it, but one day you wake up drowning. Faith works in reverse -- it enters with a single word, one "yes," one "again."</p>
        </section>

        <!-- SCENE 3: THE DECISION -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-600/30 border border-orange-500/30 text-orange-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-orange-300 tracking-wide">THE DECISION</h3>
          </div>
          <p>The three children sat around the flame like ancient travelers. Their shadows danced on the walls.</p>
          <p class="mt-3">"How does it grow?" asked Eleftheria.</p>
          <p class="mt-3">WiseBot flew to the table. Her metallic wings reflected the orange glow.</p>
          <p class="mt-4 text-white text-lg">"With decision," WiseBot whispered.</p>
          <p class="mt-4"><em>Decision.</em> Not a wish. Philippos had made a thousand wishes. Alexandra had said "we'll see" endlessly. Eleftheria designed plans -- perfect on paper, nonexistent in life.</p>

          <div class="my-6 bg-gradient-to-r from-orange-900/40 to-amber-900/40 p-8 rounded-2xl border border-orange-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">"A decision is not a thought.<br/>It is <span class="text-orange-300">an action that begins before you are ready.</span>"</p>
          </div>

          <p class="mt-4">Philippos looked at his hands -- the same hands that had broken so many things. The same hands that could build, if he dared.</p>
          <p class="mt-3">"I want this," he said. Quietly. Steadily. Without a question mark.</p>
          <p class="mt-3">Alexandra raised her head. Her eyes glistened.</p>
          <p class="mt-3 text-orange-200 font-bold text-xl">"I want this."</p>
          <p class="mt-3">Eleftheria closed her notebook. For the first time she did not want to write. She wanted to <em>do</em>.</p>
          <p class="mt-3 text-orange-200 font-bold text-xl">"I want this."</p>
          <p class="mt-4">The flame <strong class="text-orange-300">doubled in size</strong>. Warmth spread through the room like an embrace. And for the first time that evening, no one felt cold.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Three times the same sentence. But each one was different. Philippos's was strength. Alexandra's was courage. Eleftheria's was freedom from theory.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-orange-500/15 shadow-lg shadow-orange-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="The three children together" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-orange-300/80 italic">Three voices, one decision -- the flame answered</div>
          </div>
        </section>

        <!-- SCENE 4: THE SHADOWS (HIGHLIGHTED) -->
        <section class="bg-gradient-to-br from-orange-900/30 via-amber-900/20 to-red-900/10 p-8 rounded-2xl border-l-4 border-orange-500 my-8 shadow-xl shadow-orange-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-red-400 tracking-wide">THE SHADOWS</h3>
          </div>
          <p>They came at night. Always at night.</p>
          <p class="mt-3">The flame had begun to illuminate the wall -- a warm, golden light. The children felt something was changing. But then came <strong class="text-red-300">the shadows</strong>.</p>
          <p class="mt-3">Not ordinary shadows. Something <em>alive</em> -- black, slow-moving, like smoke that thinks. They slid under the door and formed <em>voices</em>.</p>
          <p class="mt-4">The first shadow stopped before Philippos:</p>
          <p class="mt-2 text-red-300/90 italic text-lg">"What if you lose? What if it turns out you were never enough?"</p>
          <p class="mt-3">The words were not new. He had heard them from <em>himself</em>, every night before sleep.</p>
          <p class="mt-3">The second shadow wrapped around Alexandra:</p>
          <p class="mt-2 text-red-300/90 italic text-lg">"What if they laugh? What if no one believes in what you dream?"</p>
          <p class="mt-3">The third shadow stood over Eleftheria -- the quietest, the heaviest:</p>
          <p class="mt-2 text-red-300/90 italic text-lg">"What if it's not perfect? What if you start and cannot finish?"</p>
          <p class="mt-3">This was the reason she had never built anything. The pursuit of perfection was not a virtue -- it was a <strong class="text-red-200">prison</strong>.</p>
          <p class="mt-4">The flame was fading. Slowly. Like a heart losing its rhythm. Philippos took a step back. The flame <em>bent</em>.</p>
          <p class="mt-3 text-gray-400 text-sm italic">The shadows did not come from outside. They came from within. What makes them powerful is not that they lie. It is that they tell half-truths -- true enough to hurt, false enough to trap.</p>
        </section>

        <!-- SCENE 5: THE TEST -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-600/30 border border-orange-500/30 text-orange-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-orange-300 tracking-wide">THE TEST</h3>
          </div>
          <p>WiseBot stood among the shadows, like a guard who needs no weapon. Her eyes lit the darkness.</p>
          <p class="mt-3 text-white text-xl font-bold">"Fear is not an enemy. It is a test."</p>
          <p class="mt-4">Her voice echoed. The shadows <em>froze</em>. As if they heard something they did not expect.</p>
          <p class="mt-3">Alexandra approached the flame. Her knees trembled.</p>
          <p class="mt-3">"What if I get burned?" she whispered.</p>
          <p class="mt-3 text-orange-200 text-lg">"If you never approach, you will freeze," answered WiseBot.</p>
          <p class="mt-4">She was already freezing. For months. But she did want. <em>Always wanted.</em></p>
          <p class="mt-3">"I won't go back," said Philippos. Steady as rock.</p>
          <p class="mt-4">Eleftheria looked at the flame -- and in that light, she saw the one who <strong class="text-orange-200">dared</strong>.</p>
          <p class="mt-3">"Perfection doesn't exist," she whispered. "But <em>effort</em> does. And that is enough."</p>
          <p class="mt-3 text-gray-400 text-sm italic">The test does not ask you to defeat fear. It asks you to walk beside it. Like a heavy bag on a long journey. At some point, the bag empties.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-orange-500/15 shadow-lg shadow-orange-900/20">
            <img src="${IMG_ALEXANDRA}" alt="Alexandra approaches the flame" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-orange-300/80 italic">Alexandra approached the flame -- and the flame embraced her</div>
          </div>
        </section>

        <!-- SCENE 6: THE CHANGE -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-amber-400 tracking-wide">THE CHANGE</h3>
          </div>
          <p>Days passed. Every day they went to the flame. Three children doing something most adults never dare: <strong class="text-amber-200">speaking their dreams aloud</strong>.</p>
          <p class="mt-4">Philippos stood first:</p>
          <p class="mt-2 text-amber-200 italic">"I will build something important. I will learn patience. And if I fail, I will start again."</p>
          <p class="mt-3">Alexandra followed. Her voice growing stronger each day:</p>
          <p class="mt-2 text-amber-200 italic">"I will not hide behind lies. I will say what I want. And if someone laughs, I will not stop dreaming."</p>
          <p class="mt-3">Eleftheria was always last. She knelt before the flame:</p>
          <p class="mt-2 text-amber-200 italic">"Knowing is not enough. I must do. Knowledge without action is a seed without soil. Today I plant."</p>
          <p class="mt-4">Not as fantasy. <em>As certainty.</em> As something they <strong class="text-orange-300">decided</strong>.</p>
          <p class="mt-4">And something strange happened. The flame was no longer in the room.</p>
          <p class="mt-3 text-orange-200 font-bold text-xl">It was inside them.</p>
          <p class="mt-3">Philippos felt it in his hands -- warmth that made him want to build. Alexandra in her voice -- a tremor that was not fear but <em>readiness</em>. Eleftheria in her feet -- an unsteadiness that was the beginning of a step.</p>
          <p class="mt-3 text-gray-400 text-sm italic">There is no magic night. It happens gradually. Each day you say "I am here" -- a piece of fire descends into you and never leaves.</p>
        </section>

        <!-- SCENE 7: THE SEED -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-600/30 border border-orange-500/30 text-orange-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-orange-300 tracking-wide">THE SEED</h3>
          </div>
          <p>Sparken descended silently. Wings like fire frozen in mid-air: golden, orange, red. He hovered like a thought that has not yet found its page.</p>
          <p class="mt-3">WiseBot was wisdom. Sparken was <strong class="text-orange-300">fire</strong> -- impatient, uncompromising. His wings opened. The shadows <em>retreated</em>.</p>
          <p class="mt-4 text-white text-lg">"Thought is a seed," said Sparken. His voice deep like distant thunder.</p>
          <p class="mt-3 text-orange-200 text-lg">"Faith is water."</p>
          <p class="mt-3 text-amber-200 text-lg">"Persistence is sun."</p>
          <p class="mt-4">Eleftheria rose. This time her question was not theoretical. It was <em>personal</em>.</p>
          <p class="mt-3">"And if the earth is hard?" Her voice honest. The earth <em>is</em> hard sometimes. And that honesty was braver than a thousand false answers.</p>
          <p class="mt-4">Sparken turned slowly. His eyes -- two small flames inside crystal -- looked at Eleftheria.</p>
          <p class="mt-3 text-orange-300 font-bold text-xl">"Then root deeper."</p>
          <p class="mt-4">Four words. But they struck like lightning on a still lake. Eleftheria felt something break inside her -- something that <em>needed</em> to break. The wall between "I know" and "I do."</p>
          <p class="mt-3 text-gray-400 text-sm italic">Every tree that withstands the storm does so because its roots went where no one sees -- into darkness, into depth, into silence.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-orange-500/15 shadow-lg shadow-orange-900/20">
            <img src="${IMG_KIDS_WITH_SPARKEN}" alt="Sparken descends" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-orange-300/80 italic">Sparken descended like fire -- and taught them where they must take root</div>
          </div>
        </section>

        <!-- SCENE 8: PERSISTENCE -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-amber-400 tracking-wide">PERSISTENCE</h3>
          </div>
          <p>There were days when nothing changed. Grey, invisible. Philippos hammered steel -- crooked results, but every morning he started again.</p>
          <p class="mt-3">Alexandra was learning to speak <em>truth</em>. Eleftheria was building -- plans became things, every imperfection a lesson.</p>
          <p class="mt-4">But the evenings were hard. The shadows returned. They no longer shouted -- they <em>whispered</em>.</p>
          <p class="mt-3">One day, Philippos sat exhausted. "Is it worth it?" he asked the air.</p>
          <p class="mt-4">WiseBot landed on his shoulder.</p>
          <p class="mt-3 text-orange-200 text-lg">"Persistence does not ask you to enjoy every day. It asks you to show up."</p>
          <p class="mt-3">Philippos stood up. He went back to work. They did not shout. They did not make noise. They simply <strong class="text-amber-200">stayed</strong>.</p>
          <p class="mt-3">Every day a small act. Every day a vote for the person they wanted to become.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Persistence does not look like movies. There is no soundtrack. There is only an alarm, a body that does not want to get up, and a choice -- the same one, every day -- to get up anyway.</p>
        </section>

        <!-- SCENE 9: THE LIGHT -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-600/30 border border-orange-500/30 text-orange-300 font-black text-sm">09</span>
            <h3 class="text-2xl font-black text-orange-300 tracking-wide">THE LIGHT</h3>
          </div>
          <p>It came slowly, like a sun rising. The flame became light. Not blinding. <strong class="text-orange-300">Steady.</strong></p>
          <p class="mt-3">The shadows did not vanish. But they no longer had <em>power</em>.</p>
          <p class="mt-4">One day, Philippos looked at his hands. The same -- but stronger. More <em>patient</em>.</p>
          <p class="mt-3">"I don't know exactly when I changed," he said.</p>
          <p class="mt-3 text-orange-200 text-lg">"You don't change in a moment. You change when you don't give up," answered WiseBot.</p>
          <p class="mt-4">Sparken descended. His wings calm now -- flying not with force but with <em>grace</em>.</p>

          <div class="my-6 bg-gradient-to-r from-orange-900/40 to-amber-900/40 p-8 rounded-2xl border border-orange-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">"Most wish. Few decide.<br/><span class="text-orange-300">Even fewer persist.</span>"</p>
            <p class="mt-3 text-amber-400 font-bold">-- Sparken</p>
          </div>

          <p class="mt-4">Alexandra smiled. Not the smile that hides -- but the one that <em>reveals</em>.</p>
          <p class="mt-3">Eleftheria looked around. The books were still there. But beside them now were <em>creations</em>. Imperfect, perhaps. But <strong class="text-amber-200">real</strong>.</p>
          <p class="mt-4 text-orange-200 font-bold text-xl">The flame was no longer something they saw. It was something they carried.</p>
          <p class="mt-3 text-white font-bold text-lg">Wealth is the power to keep the flame alive when everything around you wants to extinguish it.</p>
          <p class="mt-3">The choice to believe without proof. The decision to continue when the world says "stop."</p>
          <p class="mt-3 text-gray-400 text-sm italic">That flame never went out. It was made of decision. And decision never ends.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-orange-500/15 shadow-lg shadow-orange-900/20">
            <img src="${IMG_KIDS_WISEBOT_2}" alt="The children with the flame inside them" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-orange-300/80 italic">The flame was no longer before them. It was inside them. Forever.</div>
          </div>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-orange-950/60 p-8 rounded-3xl border-2 border-dashed border-orange-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-orange-300 uppercase tracking-wider">JOURNAL: MY FLAME</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Write. Think. Feel. There is no wrong answer.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-orange-500/15">
              <h5 class="text-orange-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-orange-600/40 flex items-center justify-center text-xs font-black">1</span>
                THE DREAM
              </h5>
              <p class="text-sm mb-3 opacity-80">What do you want most, but are afraid to say aloud? Write it here -- no one is looking.</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-orange-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-orange-500/15">
              <h5 class="text-orange-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-orange-600/40 flex items-center justify-center text-xs font-black">2</span>
                THE DOUBT
              </h5>
              <p class="text-sm mb-3 opacity-80">Which "shadow" whispers to you that you can't? Write its words -- and then write your own answer.</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-orange-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-orange-500/15">
              <h5 class="text-orange-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-orange-600/40 flex items-center justify-center text-xs font-black">3</span>
                💎 THE FUEL
              </h5>
              <p class="text-sm mb-3 opacity-80">Complete the sentence:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-orange-500/10 text-orange-200">
                <p class="text-sm font-medium">"Today I decide to believe that __________"</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- MEANING BOX -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-r from-orange-900/30 to-amber-900/30 p-6 rounded-2xl border border-orange-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-orange-300 uppercase tracking-wider">The Meaning of This Chapter</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            The flame is not something you find. It is something you <strong class="text-orange-300">keep alive</strong>. Every day. With decision, faith, and persistence. The shadows will always come -- doubt, fear, criticism. But a flame fed by <strong class="text-amber-300">true faith</strong> does not go out. It moves from the room into your heart. And there, no one can extinguish it.
          </p>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- MESSAGE FOR PARENTS -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-orange-950/60 p-8 rounded-3xl border border-orange-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-orange-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              Every child carries a <strong class="text-white">flame inside them</strong> -- a dream, a desire, a calling. Our job is not to tell them <em>what</em> to dream. It is to teach them <strong class="text-orange-300">how to keep the flame alive</strong> on the hard days.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Teach your children the power of positive affirmations. Encourage them to speak their dreams aloud -- not as a wish, but as a <strong class="text-amber-300">decision</strong>. And when fear arrives, teach them to see it as part of the journey, not the end of it.
            </p>
            <div class="mt-4 bg-orange-900/20 p-4 rounded-xl border border-orange-500/10">
              <p class="text-sm text-orange-200 font-medium">💡 Try today: Every evening before bed, ask your child to say aloud one thing they believe about themselves. One small flame, every evening, becomes a wildfire.</p>
            </div>
          </div>
        </div>

      </div>
    `
    }
  }
];
