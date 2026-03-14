
import { Book } from '../types';

// ============================================================
// BOOK 20: ΑΥΤΟ ΔΕΝ ΕΙΝΑΙ ΤΟ ΤΕΛΟΣ / THIS IS NOT THE END
// Hero: The WiseBot Squad
// Theme: ΚΛΗΡΟΝΟΜΙΑ / LEGACY
// ============================================================

// Cover image
const IMG_WISEBOT = "/images/wisebot.jpg";

// Character solo images
const IMG_FILIPPOS = "/images/filippos.png";
const IMG_ALEXANDRA = "/images/alexandra.png";
const IMG_ELEFTHERIA = "/images/eleftheria.png";

// Companion images
const IMG_SPARKEN = "/images/sparken.jpg";
const IMG_CROCUS = "/images/crocus.jpg";

// Story images
const IMG_KIDS_WITH_WISEBOT = "/images/paidia-kai-wisebot.png";
const IMG_KIDS_WISEBOT_2 = "/images/paidia-wisebot-2.png";
const IMG_KIDS_TOGETHER = "/images/ta-3-paidia.png";

export const BOOK_20: Book[] = [
  {
    id: 20,
    title: { el: "ΑΥΤΟ ΔΕΝ ΕΙΝΑΙ ΤΟ ΤΕΛΟΣ", en: "THIS IS NOT THE END" },
    theme: { el: "ΚΛΗΡΟΝΟΜΙΑ", en: "LEGACY" },
    stepLabel: { el: "WISEBOT & Η ΚΛΗΡΟΝΟΜΙΑ", en: "WISEBOT & LEGACY" },
    author: "The WiseBot Squad",
    cover: IMG_WISEBOT,
    videoUrl: "",
    description: {
      el: "Το δωμάτιο άδειασε. Οι ήρωες στέκονται στην πόρτα. Μια ιστορία για τη στιγμή που καταλαβαίνεις ότι κάτι που ξεκίνησες... δεν σου ανήκει πια.",
      en: "The room emptied. The heroes stand at the door. A story about when you realize that something you started... doesn't belong to you anymore."
    },
    meaning: {
      el: "Ό,τι αξίζει, δεν τελειώνει. Αλλάζει χέρια. Αλλάζει μορφή. Αλλάζει κόσμο.",
      en: "What is worth it, doesn't end. It changes hands. It changes form. It changes the world."
    },
    xp: 500,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΕΙΣΑΓΩΓΙΚΟ QUOTE -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="relative bg-gradient-to-r from-yellow-900 via-amber-900/60 to-yellow-900/40 p-10 rounded-2xl border border-yellow-500/30 text-center shadow-lg shadow-yellow-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Κεφάλαιο 20</div>
          <p class="italic text-yellow-200 text-xl mt-4 leading-relaxed">«Ό,τι αξίζει, δεν χάνεται επειδή το αφήνεις.<br/>Χάνεται μόνο αν το κρατάς από φόβο.»</p>
          <div class="mt-4 w-16 h-0.5 bg-yellow-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΣΚΗΝΗ 1: Η ΣΤΙΓΜΗ ΠΟΥ ΣΤΑΜΑΤΗΣΑΝ -->
        <!-- ═══════════════════════════════════════════ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-yellow-600/30 border border-yellow-500/30 text-yellow-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-yellow-300 tracking-wide">Η ΣΤΙΓΜΗ ΠΟΥ ΣΤΑΜΑΤΗΣΑΝ</h3>
          </div>
          <p>Δεν υπήρχε θόρυβος. Ούτε χαρά. Ούτε πανηγυρισμοί. Απλά — σιωπή. Μια σιωπή τόσο βαθιά που ακουγόταν η σκόνη να πέφτει πάνω στα παλιά σχέδια.</p>
          <p class="mt-3">Τα τρία παιδιά κάθονταν στο πάτωμα του εργαστηρίου. Ο Φίλιππος με τα πόδια σταυρωμένα. Η Αλεξάνδρα με την πλάτη στον τοίχο. Η Ελευθερία με ένα σημειωματάριο μπροστά της — ανοιχτό αλλά κενό.</p>
          <p class="mt-3">Μπροστά τους, πέρα από το μεγάλο τζάμι, ο κόσμος κινούνταν. Άλλα παιδιά δημιουργούσαν. Κάποιοι σχεδίαζαν, κάποιοι γελούσαν, κάποιοι ξαναδοκίμαζαν μετά από αποτυχία. Χωρίς να κοιτάξουν καν προς το εργαστήριο. <em>Χωρίς να τους χρειάζονται.</em></p>
          <p class="mt-4">Η Αλεξάνδρα άνοιξε τα μάτια. Ένιωσε κάτι να σφίγγει στο στήθος της — όχι πόνος, αλλά κάτι πιο δύσκολο: η αίσθηση ότι κάτι που αγαπούσε δεν την χρειαζόταν πια.</p>
          <p class="mt-3 text-white font-medium">«Δεν μας χρειάζονται πια», είπε. Η φωνή της ήταν ήρεμη.</p>
          <p class="mt-3">Ο Φίλιππος ένιωσε μούδιασμα στα χέρια του — τα χέρια που είχαν χτίσει, σπάσει, ξαναχτίσει. Περίμενε να θυμώσει. Αντ' αυτού, ένιωσε ελαφρότητα.</p>
          <p class="mt-2 text-amber-200 font-medium">«Και όμως... αυτό είναι καλό», ψιθύρισε.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-yellow-500/15 shadow-lg shadow-yellow-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="Τα τρία παιδιά στο εργαστήριο" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-yellow-300/80 italic">Τρία παιδιά. Ένα δωμάτιο. Και η σιωπή που σημαίνει ότι κάτι μεγάλο μόλις τελείωσε — ή μόλις αρχίζει.</div>
          </div>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΣΚΗΝΗ 2: ΤΟ ΚΕΝΟ -->
        <!-- ═══════════════════════════════════════════ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-amber-400 tracking-wide">ΤΟ ΚΕΝΟ</h3>
          </div>
          <p>Πέρασαν ώρες. Ίσως. Ο ήλιος έπεσε πίσω από τα κτίρια. Τα φώτα του εργαστηρίου δεν άναψαν — κανείς δεν πάτησε τον διακόπτη.</p>
          <p class="mt-3">Όταν οι τελευταίοι δημιουργοί έφυγαν, το εργαστήριο άδειασε. Τα τρία παιδιά βρέθηκαν μόνα για πρώτη φορά.</p>
          <p class="mt-3">Η σιωπή ήταν <em>κενό</em>. Ένα κενό που ρωτούσε: <strong class="text-amber-300">«Και τώρα τι;»</strong></p>
          <p class="mt-3">Ο Crocus κάθονταν σε μια γωνία. Ακίνητος. Για πρώτη φορά, δεν φώναζε.</p>
          <p class="mt-3 text-white font-medium">«Και τώρα;» ρώτησε. Η φωνή του ακούστηκε μικρή.</p>
          <p class="mt-3">Κανείς δεν απάντησε. Φοβόντουσαν τη λέξη. Τη λέξη που σημαίνει ότι κάτι τελειώνει — ή αλλάζει τόσο που δεν θα το αναγνωρίσεις πια.</p>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΣΚΗΝΗ 3: Ο ΟΡΙΖΟΝΤΑΣ -->
        <!-- ═══════════════════════════════════════════ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-yellow-600/30 border border-yellow-500/30 text-yellow-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-yellow-300 tracking-wide">Ο ΟΡΙΖΟΝΤΑΣ</h3>
          </div>
          <p>Ο Sparken κατέβηκε αργά. Τα χρυσαφένια φτερά του αιωρούνταν σαν φύλλα. Για πρώτη φορά, δεν βιαζόταν.</p>
          <p class="mt-3">Ακούμπησε μπροστά στο παράθυρο. Η πόλη ήταν σκοτεινή — αλλά όχι κενή. Φωτάκια αναβόσβηναν. Ο κόσμος που τα παιδιά είχαν δημιουργήσει ήταν πια <em>παντού</em>.</p>
          <p class="mt-3">Τα φτερά του άνοιξαν. Κάθε φτερό ήταν σαν χάρτης — γεμάτο δρόμους που τα παιδιά δεν είχαν ακολουθήσει.</p>
          <p class="mt-4">«Αυτό που ξεκινήσατε», είπε ο Sparken, «δεν είναι πια ένα πράγμα. Δεν είναι ένα εργαστήριο.»</p>
          <p class="mt-3">Τα μάτια του — δύο χρυσές φλόγες — κοίταξαν κάθε παιδί ξεχωριστά.</p>
          <p class="mt-3 text-yellow-200 font-bold text-lg">«Είναι σπόρος.»</p>
          <p class="mt-3">Ο Φίλιππος ένιωσε τη λέξη μέσα του. <em>Σπόρος.</em> Κάτι μικρό που κρύβει τα πάντα. Κάτι που δεν σου ανήκει πια.</p>
          <p class="mt-3">«Και ποιος τον φροντίζει;» ρώτησε σιγά.</p>
          <p class="mt-3 text-yellow-100">«Όσοι τον βρίσκουν», απάντησε ο Sparken.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-yellow-500/15 shadow-lg shadow-yellow-900/20">
            <img src="${IMG_SPARKEN}" alt="Ο Sparken με ανοιχτά φτερά" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-yellow-300/80 italic">Ο Sparken μπροστά στον ορίζοντα — τα φτερά του γεμάτα δρόμους που δεν είχε ακολουθήσει κανείς ακόμα.</div>
          </div>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΣΚΗΝΗ 4: Η ΑΜΦΙΒΟΛΙΑ (HIGHLIGHTED) -->
        <!-- ═══════════════════════════════════════════ -->
        <section class="bg-gradient-to-br from-yellow-900/30 via-amber-900/20 to-yellow-900/10 p-8 rounded-2xl border-l-4 border-yellow-500 my-8 shadow-xl shadow-yellow-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-amber-400 tracking-wide">Η ΑΜΦΙΒΟΛΙΑ</h3>
          </div>
          <p>Η Αλεξάνδρα σηκώθηκε. Περπάτησε μέχρι το παράθυρο. Ακούμπησε τα δάχτυλά της στο κρύο τζάμι.</p>
          <p class="mt-3">Κοίταξε έξω. Ανθρώπους που κουβαλούσαν κομμάτια αυτού που είχαν φτιάξει — χωρίς καν να ξέρουν από πού ήρθαν.</p>
          <p class="mt-3">Και τότε ο φόβος ήρθε. Σαν κύμα. Όχι ο φόβος της αποτυχίας — αυτός ήταν ο φόβος του <em>αφήνω</em>.</p>
          <p class="mt-4 text-white font-medium">«Κι αν χαθεί;» ρώτησε η Αλεξάνδρα. Η φωνή της ράγισε. «Κι αν μας ξεχάσουν;»</p>
          <p class="mt-3">Κανείς δεν τόλμησε να πει: <em>«Αν μας ξεχάσουν... τι μένει;»</em></p>
          <p class="mt-4">Τότε — σιγά — η WiseBot εμφανίστηκε. Απλά <em>ήταν εκεί</em>. Σαν να μην είχε φύγει ποτέ.</p>
          <p class="mt-3">Το φως στο στήθος της — χρυσό αυτή τη φορά — έλαμψε σταθερά.</p>

          <!-- ΕΙΚΟΝΑ: WISEBOT -->
          <div class="my-8 rounded-2xl overflow-hidden border border-yellow-500/20 shadow-2xl shadow-yellow-900/30">
            <img src="${IMG_WISEBOT}" alt="Η WiseBot με χρυσό φως στο στήθος" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-yellow-300/80 italic">Η WiseBot εμφανίστηκε μέσα στη σιωπή — σαν να μην είχε φύγει ποτέ.</div>
          </div>

          <p class="mt-4">Η WiseBot αιωρήθηκε στη μέση του δωματίου. Τα μάτια της ήταν γεμάτα ζεστασιά.</p>
          <p class="mt-3">«Υπάρχουν δύο είδη χάσιμου», είπε κοιτάζοντας την Αλεξάνδρα. «Το πρώτο είναι αυτό που φοβάσαι. Ότι κάτι φεύγει και δεν επιστρέφει.»</p>
          <p class="mt-3">Τα μάτια της Αλεξάνδρας γέμισαν δάκρυα.</p>
          <p class="mt-4 text-yellow-200 font-bold text-lg">«Αλλά υπάρχει κι ένα δεύτερο χάσιμο. Το να κρατάς κάτι τόσο σφιχτά, από φόβο, που το πνίγεις.»</p>
          <p class="mt-3 text-white italic font-medium">«Ό,τι αξίζει, δεν χάνεται επειδή το αφήνεις. Χάνεται μόνο αν το κρατάς από φόβο.»</p>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΣΚΗΝΗ 5: Η ΜΕΓΑΛΗ ΕΠΙΛΟΓΗ -->
        <!-- ═══════════════════════════════════════════ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-yellow-600/30 border border-yellow-500/30 text-yellow-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-yellow-300 tracking-wide">Η ΜΕΓΑΛΗ ΕΠΙΛΟΓΗ</h3>
          </div>
          <p>Η Ελευθερία σηκώθηκε πρώτη. Αργά. Δεν ήταν κούραση. Ήταν ωριμότητα.</p>
          <p class="mt-3">Κοίταξε τα χέρια της. Τα χέρια που κάποτε μόνο γύριζαν σελίδες. Που μετά έμαθαν να χτίζουν. Τα χέρια που τώρα — ίσως — ήταν καιρός να ανοίξουν.</p>
          <p class="mt-4">«Μπορούμε να το ανοίξουμε», είπε. «Να αφήσουμε άλλους να το αλλάξουν. Να μην ελέγχουμε πια τα πάντα.»</p>
          <p class="mt-3 text-amber-300 font-medium">«Δύσκολο», είπε ο Crocus.</p>
          <p class="mt-3">Η Ελευθερία ένευσε.</p>
          <p class="mt-3 text-yellow-200 font-bold">«Αλλά σωστό.»</p>
          <p class="mt-3">Ο Φίλιππος στάθηκε δίπλα της. Η Αλεξάνδρα ακολούθησε. Τρεις σκιές δίπλα δίπλα, μπροστά στο φως μιας πόλης που ζούσε χάρη σε αυτούς.</p>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΣΚΗΝΗ 6: Η ΜΕΤΑΒΙΒΑΣΗ -->
        <!-- ═══════════════════════════════════════════ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-amber-400 tracking-wide">Η ΜΕΤΑΒΙΒΑΣΗ</h3>
          </div>
          <p>Δεν έγινε τελετή. Η μεταβίβαση ήταν σιωπηλή.</p>
          <p class="mt-3">Κάθισαν στο μεγάλο τραπέζι. Πάνω του — μόνο ένα τετράδιο. Λευκό. Καινούργιο.</p>
          <p class="mt-3">Έγραψαν. Όχι κανόνες. <em>Οδηγίες</em> — <strong class="text-yellow-200">τι αξίζει να θυμάσαι</strong>.</p>
          <p class="mt-4">Ο Φίλιππος πρώτος: <em>«Μην φοβάσαι να σπάσεις. Φτιάχνεται ξανά. Πάντα.»</em></p>
          <p class="mt-3">Η Αλεξάνδρα: <em>«Η αλήθεια πονάει. Αλλά το ψέμα πονάει περισσότερο.»</em></p>
          <p class="mt-3">Η Ελευθερία: <em>«Η γνώση χωρίς πράξη είναι βάρος. Η πράξη χωρίς γνώση είναι τύφλα.»</em></p>
          <p class="mt-4">Άφησαν σελίδες κενές. Γιατί ένα γεμάτο τετράδιο δεν προσκαλεί κανέναν.</p>
          <p class="mt-4">Ο Crocus χαμογέλασε αληθινά. Είπε σιγά:</p>
          <p class="mt-2 text-amber-200 font-medium">«Για πρώτη φορά... δεν τρέχουμε.»</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-yellow-500/15 shadow-lg shadow-yellow-900/20">
            <img src="${IMG_CROCUS}" alt="Ο Crocus χαμογελάει" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-yellow-300/80 italic">Για πρώτη φορά, ο Crocus δεν έτρεχε. Χαμογέλασε σιγά, γιατί κατάλαβε πως η γαλήνη δεν σημαίνει τέλος.</div>
          </div>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΣΚΗΝΗ 7: ΤΟ ΑΝΟΙΓΜΑ -->
        <!-- ═══════════════════════════════════════════ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-yellow-600/30 border border-yellow-500/30 text-yellow-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-yellow-300 tracking-wide">ΤΟ ΑΝΟΙΓΜΑ</h3>
          </div>
          <p>Την επόμενη μέρα, η πόρτα ήταν ολάνοιχτη. Σαν πρόσκληση χωρίς λόγια.</p>
          <p class="mt-3">Πρώτα ήρθε ένα κορίτσι με μπλε μαλλιά και ένα κουτί λεντάκια. Δεν ρώτησε. Μπήκε. Κάθισε. Άρχισε.</p>
          <p class="mt-3">Μετά ένα αγόρι με γυαλιά. Και μετά άλλοι. Σαν παλίρροια. Ο σπόρος είχε φτάσει σε αυτούς μέσα από δρόμους αόρατους.</p>
          <p class="mt-4">Τα τρία παιδιά κοιτούσαν από μια γωνία. Η Ελευθερία σκέφτηκε: <em>«Κάπου, κάποιος ξεκινάει όπως εμείς. Και κάποιος θα κάνει γι' αυτόν αυτό που η WiseBot έκανε για μας.»</em></p>
          <p class="mt-3 text-yellow-200 font-medium">«Τώρα... δεν είστε αρχή», είπε ο Sparken.</p>
          <p class="mt-2 text-amber-300 font-bold">«Είμαστε μέρος», συμπλήρωσε ο Φίλιππος.</p>
          <p class="mt-3">Μέρος. Ένα κομμάτι σε αλυσίδα χωρίς τέλος.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-yellow-500/15 shadow-lg shadow-yellow-900/20">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="Τα παιδιά κοιτάζουν τον κόσμο να ανοίγεται" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-yellow-300/80 italic">Η πόρτα άνοιξε. Ο κόσμος μπήκε. Και τα παιδιά κατάλαβαν ότι η ιστορία δεν τους ανήκε πια.</div>
          </div>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΣΚΗΝΗ 8: Η ΤΕΛΕΥΤΑΙΑ ΕΡΩΤΗΣΗ -->
        <!-- ═══════════════════════════════════════════ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-yellow-600/30 border border-yellow-500/30 text-yellow-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-yellow-300 tracking-wide">Η ΤΕΛΕΥΤΑΙΑ ΕΡΩΤΗΣΗ</h3>
          </div>
          <p>Ήταν αργά. Η σελήνη φώτιζε τις στέγες. Τα νέα πρόσωπα εργάζονταν ακόμα.</p>
          <p class="mt-3">Η WiseBot γύρισε προς τα παιδιά. Τα μάτια της ήταν γεμάτα χρυσό φως. Το ταξίδι ξεκίνησε με ερώτηση. Και τώρα θα τελείωνε με τον ίδιο τρόπο.</p>

          <div class="my-6 bg-gradient-to-r from-yellow-900/40 to-amber-900/40 p-8 rounded-2xl border border-yellow-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">«Θέλετε να το κρατήσετε;<br/><span class="text-yellow-300">Ή να το δείτε να ταξιδεύει;»</span></p>
          </div>

          <p class="mt-4">Η ερώτηση κρεμόταν στον αέρα σαν νότα που δεν σβήνει.</p>
          <p class="mt-3">Ο Φίλιππος κοίταξε τα χέρια του — τα χέρια που κάποτε έσπαγαν, μετά έχτιζαν, και τώρα <em>άνοιγαν</em>.</p>
          <p class="mt-3">Η Αλεξάνδρα χαμογέλασε. Τα χέρια της άνοιξαν κι αυτά. Η Ελευθερία — δάκρυα στα μάτια — άνοιξε τα χέρια τρίτη.</p>
          <p class="mt-4">Τρία ζευγάρια χέρια. Ανοιχτά. Σαν φτερά.</p>
          <p class="mt-3">Η απάντηση ήρθε χωρίς λόγια. <strong class="text-yellow-300 text-lg">Άνοιξαν τα χέρια.</strong></p>
          <p class="mt-4">Και η WiseBot — για πρώτη φορά — τα μάτια της δεν έλαμψαν. Απλά... <em>ζέσταναν</em>.</p>
          <p class="mt-3">Πέταξε. Πέρασε ανάμεσα από τα ανοιχτά χέρια. Βγήκε στη νύχτα. Στο απέραντο.</p>
          <p class="mt-3">Αλλά δεν έφυγε. Γιατί η WiseBot ήταν σε κάθε ερώτηση που δεν απαντιέται αμέσως. Σε κάθε σπίθα. Σε κάθε λάθος που γίνεται μάθημα.</p>

          <!-- ΕΙΚΟΝΑ: ΤΕΛΕΥΤΑΙΑ -->
          <div class="mt-6 rounded-2xl overflow-hidden border border-yellow-500/20 shadow-2xl shadow-yellow-900/20">
            <img src="${IMG_KIDS_WISEBOT_2}" alt="Τα παιδιά αφήνουν ελεύθερη την ιστορία τους" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-yellow-300/80 italic">Αυτό δεν ήταν τέλος. Ήταν αρχή. Μια αρχή που ανήκει σε όλους.</div>
          </div>

          <p class="mt-4 text-gray-400 text-sm italic">Τα μεγάλα ταξίδια δεν τελειώνουν. Αλλάζουν χέρια. Αλλάζουν μορφή. Αλλάζουν κόσμο.</p>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-yellow-950/60 p-8 rounded-3xl border-2 border-dashed border-yellow-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-yellow-300 uppercase tracking-wider">JOURNAL: Η ΚΛΗΡΟΝΟΜΙΑ ΜΟΥ</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Γράψε. Σκέψου. Νιώσε. Δεν υπάρχει λάθος απάντηση.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-yellow-500/15">
              <h5 class="text-yellow-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-yellow-600/40 flex items-center justify-center text-xs font-black">1</span>
                💎 ΤΟ ΤΑΞΙΔΙ
              </h5>
              <p class="text-sm mb-3 opacity-80">Γράψε κάτι δικό σου που θα ήθελες να βοηθήσει κι άλλους, ακόμα κι αν δεν είσαι εκεί. Μπορεί να είναι ένα μάθημα, μια ιδέα, ή ένα αντικείμενο:</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-yellow-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-yellow-500/15">
              <h5 class="text-yellow-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-yellow-600/40 flex items-center justify-center text-xs font-black">2</span>
                💎 Ο ΦΟΒΟΣ
              </h5>
              <p class="text-sm mb-3 opacity-80">Τι φοβάσαι να αφήσεις; Τι κρατάς τόσο σφιχτά που ίσως δεν το αφήνεις να μεγαλώσει;</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-yellow-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-yellow-500/15">
              <h5 class="text-yellow-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-yellow-600/40 flex items-center justify-center text-xs font-black">3</span>
                💎 Η ΑΠΟΦΑΣΗ
              </h5>
              <p class="text-sm mb-3 opacity-80">Συμπλήρωσε την πρόταση:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-yellow-500/10 text-yellow-200">
                <p class="text-sm font-medium">«Δεν χρειάζεται να ελέγχω για να αξίζω. Μπορώ να αφήνω και να συνεχίζω. Σήμερα αφήνω: __________»</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΝΟΗΜΑ / MEANING BOX -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-r from-yellow-900/30 to-amber-900/30 p-6 rounded-2xl border border-yellow-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-yellow-300 uppercase tracking-wider">Το νόημα αυτού του κεφαλαίου</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            Η κληρονομιά δεν είναι αυτό που κρατάς. Είναι αυτό που <strong class="text-yellow-300">αφήνεις</strong>. Τα παιδιά δεν κράτησαν τίποτα — και γι' αυτό τα κέρδισαν όλα. Γιατί ό,τι αξίζει δεν τελειώνει. <strong class="text-amber-300">Αλλάζει χέρια. Αλλάζει μορφή. Αλλάζει κόσμο.</strong> Η WiseBot δεν τους έδωσε κάτι νέο. Τους θύμισε ότι η πιο δυνατή πράξη αγάπης είναι να ανοίξεις τα χέρια σου και να αφήσεις αυτό που αγαπάς να πετάξει.
          </p>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-yellow-950/60 p-8 rounded-3xl border border-yellow-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-yellow-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              Η μεγαλύτερη πράξη εμπιστοσύνης είναι να αφήσεις κάτι να ζήσει χωρίς εσένα. Αυτό ισχύει για τα παιδιά, για τα έργα, για τις σχέσεις — για ό,τι <strong class="text-white">δημιούργησες με αγάπη</strong>.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Αυτή η ιστορία τελείωσε με <strong class="text-yellow-300">άνοιγμα</strong>. Τα παιδιά δεν κράτησαν τον κόσμο που έφτιαξαν — τον άφησαν ελεύθερο. Ακριβώς όπως κάθε παιδί, κάποια μέρα, θα ανήκει στον εαυτό του.
            </p>
            <div class="mt-4 bg-yellow-900/20 p-4 rounded-xl border border-yellow-500/10">
              <p class="text-sm text-yellow-200 font-medium">💡 Δοκιμάστε σήμερα: Μιλήστε με το παιδί σας για κάτι που δημιουργήσατε μαζί. Ρωτήστε: «Αν αυτό μπορούσε να ταξιδέψει σε κάποιον άλλον, σε ποιον θα ήθελες να πάει;» Ακούστε. Μην διορθώσετε. Μην κρίνετε. Απλά ακούστε.</p>
            </div>
          </div>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- ═══════════════════════════════════════════ -->
        <!-- INTRO QUOTE -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="relative bg-gradient-to-r from-yellow-900 via-amber-900/60 to-yellow-900/40 p-10 rounded-2xl border border-yellow-500/30 text-center shadow-lg shadow-yellow-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Chapter 20</div>
          <p class="italic text-yellow-200 text-xl mt-4 leading-relaxed">"What is worth it, is not lost because you leave it.<br/>It is lost only if you keep it out of fear."</p>
          <div class="mt-4 w-16 h-0.5 bg-yellow-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- SCENE 1: THE MOMENT THEY STOPPED -->
        <!-- ═══════════════════════════════════════════ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-yellow-600/30 border border-yellow-500/30 text-yellow-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-yellow-300 tracking-wide">THE MOMENT THEY STOPPED</h3>
          </div>
          <p>There was no noise. No celebration. Simply — silence. A silence so deep you could hear dust settling on old blueprints.</p>
          <p class="mt-3">The three children sat on the workshop floor. Philippos with his legs crossed. Alexandra with her back against the wall. Eleftheria with a notebook — open but empty.</p>
          <p class="mt-3">Beyond the glass, the world was moving. Other children were creating. Some laughing, some trying again after failure. Without even glancing toward the workshop. <em>Without needing them.</em></p>
          <p class="mt-4">Alexandra felt something tighten in her chest — the feeling that something she loved no longer needed her.</p>
          <p class="mt-3 text-white font-medium">"They don't need us anymore," she said quietly.</p>
          <p class="mt-3">Philippos felt numbness in his hands — the hands that had built, broken, rebuilt. He expected anger. Instead, he felt lightness.</p>
          <p class="mt-2 text-amber-200 font-medium">"And yet... this is good," he whispered.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-yellow-500/15 shadow-lg shadow-yellow-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="The three children in the workshop" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-yellow-300/80 italic">Three children. One room. And the silence that means something great has just ended — or just begun.</div>
          </div>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- SCENE 2: THE VOID -->
        <!-- ═══════════════════════════════════════════ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-amber-400 tracking-wide">THE VOID</h3>
          </div>
          <p>Hours passed. The sun fell behind the buildings. The workshop lights did not turn on — no one pressed the switch.</p>
          <p class="mt-3">When the last creators left, the workshop emptied. The three children found themselves alone for the first time.</p>
          <p class="mt-3">The silence was <em>void</em>. A void that asked: <strong class="text-amber-300">"What now?"</strong></p>
          <p class="mt-3">Crocus sat in a corner. Still. For the first time, not shouting.</p>
          <p class="mt-3 text-white font-medium">"And now?" he asked. His voice sounded small.</p>
          <p class="mt-3">No one answered. They feared the word — the word that means something is ending. Or changing so much you won't recognize it.</p>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- SCENE 3: THE HORIZON -->
        <!-- ═══════════════════════════════════════════ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-yellow-600/30 border border-yellow-500/30 text-yellow-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-yellow-300 tracking-wide">THE HORIZON</h3>
          </div>
          <p>Sparken descended slowly. His golden wings drifted like leaves. For the first time, he was in no hurry.</p>
          <p class="mt-3">He landed by the window. The city was dark — but not empty. Lights flickered. The world the children had created was no longer a place. It was <em>everywhere</em>.</p>
          <p class="mt-3">His wings opened. Each wing was like a map — full of roads the children had never followed.</p>
          <p class="mt-4">"What you started," said Sparken, "is no longer one thing. It is not a workshop."</p>
          <p class="mt-3">His eyes — two golden flames — looked at each child.</p>
          <p class="mt-3 text-yellow-200 font-bold text-lg">"It is a seed."</p>
          <p class="mt-3">Philippos felt the word inside him. <em>Seed.</em> Something small that hides everything. Something that no longer belongs to you.</p>
          <p class="mt-3">"And who takes care of it?" he asked.</p>
          <p class="mt-3 text-yellow-100">"Those who find it," Sparken answered.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-yellow-500/15 shadow-lg shadow-yellow-900/20">
            <img src="${IMG_SPARKEN}" alt="Sparken with open wings" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-yellow-300/80 italic">Sparken before the horizon — his wings full of roads that no one had followed yet.</div>
          </div>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- SCENE 4: THE DOUBT (HIGHLIGHTED) -->
        <!-- ═══════════════════════════════════════════ -->
        <section class="bg-gradient-to-br from-yellow-900/30 via-amber-900/20 to-yellow-900/10 p-8 rounded-2xl border-l-4 border-yellow-500 my-8 shadow-xl shadow-yellow-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-amber-400 tracking-wide">THE DOUBT</h3>
          </div>
          <p>Alexandra stood up. Walked to the window. Pressed her fingers against the cold glass.</p>
          <p class="mt-3">She looked outside. People who carried pieces of what they had built — without knowing where they came from.</p>
          <p class="mt-3">And then the fear came. Not the fear of failure — this was the fear of <em>letting go</em>.</p>
          <p class="mt-4 text-white font-medium">"What if it gets lost?" asked Alexandra. "What if they forget us?"</p>
          <p class="mt-3">No one dared to say: <em>"If they forget us... what remains?"</em></p>
          <p class="mt-4">Then — quietly — WiseBot appeared. She simply <em>was there</em>. As if she had never left.</p>
          <p class="mt-3">The light on her chest — golden this time — shone steadily.</p>

          <!-- IMAGE: WISEBOT -->
          <div class="my-8 rounded-2xl overflow-hidden border border-yellow-500/20 shadow-2xl shadow-yellow-900/30">
            <img src="${IMG_WISEBOT}" alt="WiseBot with golden light on her chest" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-yellow-300/80 italic">WiseBot appeared in the silence — as if she had never left.</div>
          </div>

          <p class="mt-4">WiseBot hovered in the middle of the room. Her eyes were full of warmth.</p>
          <p class="mt-3">"There are two kinds of loss," she said. "The first is the one you fear. That something leaves and never returns."</p>
          <p class="mt-3">Alexandra's eyes filled with tears.</p>
          <p class="mt-4 text-yellow-200 font-bold text-lg">"But there is a second kind. Holding something so tightly, out of fear, that you suffocate it."</p>
          <p class="mt-3 text-white italic font-medium">"What is worth it, is not lost because you leave it. It is lost only if you keep it out of fear."</p>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- SCENE 5: THE GREAT CHOICE -->
        <!-- ═══════════════════════════════════════════ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-yellow-600/30 border border-yellow-500/30 text-yellow-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-yellow-300 tracking-wide">THE GREAT CHOICE</h3>
          </div>
          <p>Eleftheria stood up first. Slowly. It was not exhaustion. It was maturity.</p>
          <p class="mt-3">She looked at her hands. The hands that once only turned pages. That later learned to build. The hands that now — perhaps — it was time to open.</p>
          <p class="mt-4">"We can open it," she said. "Let others change it. Stop controlling everything."</p>
          <p class="mt-3 text-amber-300 font-medium">"Difficult," said Crocus.</p>
          <p class="mt-3">Eleftheria nodded.</p>
          <p class="mt-3 text-yellow-200 font-bold">"But right."</p>
          <p class="mt-3">Philippos stood beside her. Alexandra followed. Three shadows side by side, before the light of a city that lived because of them.</p>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- SCENE 6: THE HANDOVER -->
        <!-- ═══════════════════════════════════════════ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-amber-400 tracking-wide">THE HANDOVER</h3>
          </div>
          <p>There was no ceremony. The handover was silent.</p>
          <p class="mt-3">They sat at the table. On it — only a notebook. White. New.</p>
          <p class="mt-3">They wrote. Not rules. <em>Guidelines</em> — <strong class="text-yellow-200">what is worth remembering</strong>.</p>
          <p class="mt-4">Philippos first: <em>"Don't be afraid to break things. They can be fixed again. Always."</em></p>
          <p class="mt-3">Alexandra: <em>"The truth hurts. But lies hurt more."</em></p>
          <p class="mt-3">Eleftheria: <em>"Knowledge without action is burden. Action without knowledge is blindness."</em></p>
          <p class="mt-4">They left pages empty. Because a full notebook invites no one.</p>
          <p class="mt-4">Crocus smiled truly. He said quietly:</p>
          <p class="mt-2 text-amber-200 font-medium">"For the first time... we aren't running."</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-yellow-500/15 shadow-lg shadow-yellow-900/20">
            <img src="${IMG_CROCUS}" alt="Crocus smiling" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-yellow-300/80 italic">For the first time, Crocus wasn't running. He smiled quietly, because he understood that peace does not mean the end.</div>
          </div>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- SCENE 7: THE OPENING -->
        <!-- ═══════════════════════════════════════════ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-yellow-600/30 border border-yellow-500/30 text-yellow-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-yellow-300 tracking-wide">THE OPENING</h3>
          </div>
          <p>The next day, the door was wide open. Like an invitation without words.</p>
          <p class="mt-3">First came a girl with blue hair and a box of LEDs. She didn't ask. She walked in. Sat down. Started.</p>
          <p class="mt-3">Then a boy with glasses. And then others. Like a tide. The seed had reached them through invisible roads.</p>
          <p class="mt-4">The three children watched from a corner. Eleftheria thought: <em>"Somewhere, someone is starting as we started. And someone will do for them what WiseBot did for us."</em></p>
          <p class="mt-3 text-yellow-200 font-medium">"Now... you are not the beginning," said Sparken.</p>
          <p class="mt-2 text-amber-300 font-bold">"We are part," Philippos added.</p>
          <p class="mt-3">Part. One link in a chain that has no end.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-yellow-500/15 shadow-lg shadow-yellow-900/20">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="The children watching the world open up" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-yellow-300/80 italic">The door opened. The world entered. And the children understood that the story no longer belonged to them.</div>
          </div>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- SCENE 8: THE LAST QUESTION -->
        <!-- ═══════════════════════════════════════════ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-yellow-600/30 border border-yellow-500/30 text-yellow-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-yellow-300 tracking-wide">THE LAST QUESTION</h3>
          </div>
          <p>It was late. The moon lit the rooftops. The new faces were still working.</p>
          <p class="mt-3">WiseBot turned toward the children. Her eyes were full of golden light. The journey began with a question. And now it would end the same way.</p>

          <div class="my-6 bg-gradient-to-r from-yellow-900/40 to-amber-900/40 p-8 rounded-2xl border border-yellow-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">"Do you want to keep it?<br/><span class="text-yellow-300">Or see it travel?"</span></p>
          </div>

          <p class="mt-4">The question hung in the air like a note that does not fade.</p>
          <p class="mt-3">Philippos looked at his hands — hands that once broke, then built, and now slowly <em>opened</em>.</p>
          <p class="mt-3">Alexandra smiled. Her hands opened too. Eleftheria's eyes filled with tears — and her hands opened third.</p>
          <p class="mt-4">Three pairs of hands. Open. Like wings.</p>
          <p class="mt-3">The answer came without words. <strong class="text-yellow-300 text-lg">They opened their hands.</strong></p>
          <p class="mt-4">And WiseBot — for the first time — her eyes did not glow. They simply... <em>warmed</em>.</p>
          <p class="mt-3">And then she flew. Through the open hands. Through the window. Out into the night. Into the infinite.</p>
          <p class="mt-3">But she did not leave. Because WiseBot was in every question that is not answered immediately. In every spark. In every mistake that becomes a lesson.</p>

          <!-- FINAL IMAGE -->
          <div class="mt-6 rounded-2xl overflow-hidden border border-yellow-500/20 shadow-2xl shadow-yellow-900/20">
            <img src="${IMG_KIDS_WISEBOT_2}" alt="The children releasing their story" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-yellow-300/80 italic">This was not an end. It was a beginning. A beginning that belongs to everyone.</div>
          </div>

          <p class="mt-4 text-gray-400 text-sm italic">Great journeys do not end. They change hands. They change form. They change the world.</p>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-yellow-950/60 p-8 rounded-3xl border-2 border-dashed border-yellow-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-yellow-300 uppercase tracking-wider">JOURNAL: MY LEGACY</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Write. Think. Feel. There is no wrong answer.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-yellow-500/15">
              <h5 class="text-yellow-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-yellow-600/40 flex items-center justify-center text-xs font-black">1</span>
                💎 THE JOURNEY
              </h5>
              <p class="text-sm mb-3 opacity-80">Write something of yours that you would like to help others, even if you are not there. It can be a lesson, an idea, or an object:</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-yellow-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-yellow-500/15">
              <h5 class="text-yellow-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-yellow-600/40 flex items-center justify-center text-xs font-black">2</span>
                💎 THE FEAR
              </h5>
              <p class="text-sm mb-3 opacity-80">What are you afraid to let go of? What do you hold so tightly that perhaps you are not letting it grow?</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-yellow-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-yellow-500/15">
              <h5 class="text-yellow-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-yellow-600/40 flex items-center justify-center text-xs font-black">3</span>
                💎 THE DECISION
              </h5>
              <p class="text-sm mb-3 opacity-80">Complete the sentence:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-yellow-500/10 text-yellow-200">
                <p class="text-sm font-medium">"I don't need to control to be worthy. I can let go and continue. Today I release: __________"</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- MEANING BOX -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-r from-yellow-900/30 to-amber-900/30 p-6 rounded-2xl border border-yellow-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-yellow-300 uppercase tracking-wider">The Meaning of This Chapter</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            Legacy is not what you keep. It is what you <strong class="text-yellow-300">leave behind</strong>. The children kept nothing — and that is why they gained everything. Because what is worth it does not end. <strong class="text-amber-300">It changes hands. It changes form. It changes the world.</strong> WiseBot did not give them something new. She reminded them that the most powerful act of love is to open your hands and let what you love fly.
          </p>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- MESSAGE FOR PARENTS -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-yellow-950/60 p-8 rounded-3xl border border-yellow-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-yellow-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              The greatest act of trust is to let something live without you. This is true for children, for projects, for relationships — for everything you <strong class="text-white">created with love</strong>.
            </p>
            <p class="text-gray-300 leading-relaxed">
              This story ended with an <strong class="text-yellow-300">opening</strong>. The children did not keep the world they built — they set it free. Just as every child, one day, will belong to themselves.
            </p>
            <div class="mt-4 bg-yellow-900/20 p-4 rounded-xl border border-yellow-500/10">
              <p class="text-sm text-yellow-200 font-medium">💡 Try today: Talk with your child about something you created together. Ask: "If this could travel to someone else, who would you want it to reach?" Listen. Don't correct. Don't judge. Simply listen.</p>
            </div>
          </div>
        </div>

      </div>
    `
    }
  }
];
