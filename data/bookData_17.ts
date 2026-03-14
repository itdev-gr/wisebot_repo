
import { Book } from '../types';

// ============================================================
// BOOK 17: ΔΕΝ ΣΕ ΚΑΤΑΛΑΒΑΙΝΟΥΝ ΟΛΟΙ / NOT EVERYONE UNDERSTANDS YOU
// Heroes: Sparken & Crocus
// Theme: ΩΡΙΜΟΤΗΤΑ / MATURITY
// ============================================================

// Cover image
const IMG_CROCUS = "/images/crocus.jpg";

// Character images
const IMG_SPARKEN = "/images/sparken.jpg";
const IMG_FILIPPOS = "/images/filippos.png";
const IMG_ALEXANDRA = "/images/alexandra.png";
const IMG_ELEFTHERIA = "/images/eleftheria.png";

// Story images
const IMG_KIDS_WITH_CROCUS = "/images/paidia-kai-crocus.png";
const IMG_KIDS_WITH_SPARKEN = "/images/paidia-kai-sparken.png";
const IMG_KIDS_TOGETHER = "/images/ta-3-paidia.png";
const IMG_KIDS_WITH_WISEBOT = "/images/paidia-kai-wisebot.png";

export const BOOK_17: Book[] = [
  {
    id: 17,
    title: { el: "ΔΕΝ ΣΕ ΚΑΤΑΛΑΒΑΙΝΟΥΝ ΟΛΟΙ", en: "NOT EVERYONE UNDERSTANDS YOU" },
    theme: { el: "ΩΡΙΜΟΤΗΤΑ", en: "MATURITY" },
    stepLabel: { el: "CROCUS & SPARKEN & ΩΡΙΜΟΤΗΤΑ", en: "CROCUS & SPARKEN & MATURITY" },
    author: "Sparken & Crocus",
    cover: IMG_CROCUS,
    videoUrl: "",
    description: {
      el: "Παλιά θα προσπαθούσαν να εξηγήσουν. Τώρα απλά χαμογελούν. Μια ιστορία για τη μοναξιά που δεν πονά — όταν ξέρεις ποιος είσαι.",
      en: "They used to try to explain. Now they just smile. A story about loneliness that doesn't hurt — when you know who you are."
    },
    meaning: {
      el: "Δεν είσαι μόνος επειδή δεν σε καταλαβαίνουν όλοι. Είσαι απλώς στον δρόμο σου.",
      en: "You aren't alone because not everyone understands you. You are simply on your path."
    },
    xp: 340,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- ΕΙΣΑΓΩΓΙΚΟ QUOTE -->
        <div class="relative bg-gradient-to-r from-slate-900 via-amber-900/60 to-orange-900/40 p-10 rounded-2xl border border-amber-500/30 text-center shadow-lg shadow-amber-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Κεφάλαιο 17</div>
          <p class="italic text-amber-200 text-xl mt-4 leading-relaxed">«Η πορεία σου δεν χρειάζεται κοινό.<br/>Χρειάζεται εσένα.»</p>
          <div class="mt-4 w-16 h-0.5 bg-amber-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- ΣΚΗΝΗ 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-amber-300 tracking-wide">Η ΣΙΩΠΗ ΜΕΤΑ</h3>
          </div>
          <p>Ο ήλιος έπεφτε κεκλιμένα μέσα από τα παράθυρα του εργαστηρίου, σχηματίζοντας χρυσές λωρίδες πάνω στα εργαλεία και τα ημιτελή σχέδια. Σκόνη χόρευε αργά μέσα στο φως — μικροσκοπικοί κόσμοι που αιωρούνταν χωρίς βιασύνη. Ήταν ένα απόγευμα σαν κάθε άλλο, αλλά κάτι είχε αλλάξει. Κάτι αόρατο, σαν ένα νήμα που κόπηκε χωρίς θόρυβο.</p>
          <p class="mt-3">Μετά από όλα όσα είχαν περάσει — τις μάχες, τα λάθη, τις ανακαλύψεις, τα δάκρυα και τα γέλια — κάτι μέσα στα τρία παιδιά είχε ωριμάσει. Δεν ήταν κάτι που μπορούσες να δεις με τα μάτια ή να αγγίξεις με τα χέρια. Ήταν βαθύτερο. Σαν ένα δέντρο που οι ρίζες του τρυπούσαν πιο βαθιά μέσα στη γη, αθόρυβα, χωρίς να το καταλαβαίνει κανείς στην επιφάνεια.</p>
          <p class="mt-3">Η Αλεξάνδρα μιλούσε λιγότερο. Όχι γιατί δεν είχε τίποτα να πει — αλλά γιατί τώρα <em>διάλεγε</em> τι αξίζει να ειπωθεί. Τα λόγια είχαν γίνει πιο πολύτιμα, σαν νομίσματα που δεν θες να σπαταλάς. Κάθε πρόταση είχε βάρος. Κάθε σιωπή είχε νόημα.</p>
          <p class="mt-3">Ο Φίλιππος σταμάτησε να εξηγεί συνέχεια. Παλιά ένιωθε μια αόρατη πίεση — σαν χέρι που τον σπρώχνει στο στήθος — να δικαιολογεί κάθε απόφασή του, κάθε ιδέα, κάθε επιλογή. Τώρα, εκείνο το χέρι δεν πίεζε πια. Αντί να μιλάει, <em>έκανε</em>. Και αυτό ήταν αρκετό.</p>
          <p class="mt-3">Η Ελευθερία — εκείνη που πάντα προσπαθούσε να πείσει τους πάντες — έκλεισε αθόρυβα ένα σημειωματάριο γεμάτο επιχειρήματα. Δεν θα τα χρειαζόταν πια. Η αλήθεια δεν χρειάζεται δικηγόρο. Η αλήθεια απλώς <em>υπάρχει</em>.</p>
          <p class="mt-4 text-white font-medium">Δεν ήταν θυμός. Δεν ήταν υπεροψία. Ήταν <strong class="text-amber-300">επιλογή</strong>.</p>
          <p class="mt-3">Η επιλογή να μην εξαντλείσαι εξηγώντας τον εαυτό σου σε ανθρώπους που δεν θέλουν πραγματικά να ακούσουν. Η επιλογή να κρατήσεις την ενέργειά σου για αυτούς που αξίζουν τον κόπο — συμπεριλαμβανομένου του εαυτού σου.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Υπάρχει μια σιωπή που πονάει — είναι εκείνη που κρύβει λόγια. Και μια σιωπή που ελευθερώνει — είναι εκείνη που τα έχει ξεπεράσει.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-amber-500/15 shadow-lg shadow-amber-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="Τα τρία παιδιά στο εργαστήρι" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-amber-300/80 italic">Μετά από τόσα, η σιωπή δεν ήταν κενό. Ήταν γεμάτη νόημα.</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-600/30 border border-orange-500/30 text-orange-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-orange-400 tracking-wide">Η ΕΡΩΤΗΣΗ ΣΤΟ ΣΧΟΛΕΙΟ</h3>
          </div>
          <p>Το κουδούνι χτύπησε. Τα τρία παιδιά βγήκαν στην αυλή, μαζί αλλά λίγο πιο μακριά από τους υπόλοιπους. Σαν νησί μέσα σε θάλασσα.</p>
          <p class="mt-3">Κάθονταν στο παγκάκι κάτω από τη μεγάλη μουριά. Δεν μιλούσαν για τίποτα σημαντικό. Απλά ήταν μαζί. Και αυτό ήταν αρκετό.</p>
          <p class="mt-3">Μέχρι που πλησίασε ο Θανάσης. Ψηλός, σίγουρος, με αυτό το χαμόγελο που πάντα είχε κάτι ειρωνικό πίσω του. Στάθηκε μπροστά τους, σταύρωσε τα χέρια.</p>
          <p class="mt-4">— «Γιατί δεν μας λέτε τι φτιάχνετε;» ρώτησε. Η φωνή του δεν ήταν κακόβουλη — αλλά ούτε ειλικρινής. Ήταν αυτή η φωνή που ρωτάει χωρίς πραγματικά να θέλει να ξέρει.</p>
          <p class="mt-3">Ο Φίλιππος ένιωσε κάτι παλιό να σκαλίζει μέσα του. Ένα αντανακλαστικό — να εξηγήσει, να πείσει, να δικαιολογήσει. Αλλά κάτι τον σταμάτησε. Ένα βάρος στην καρδιά, σαν άγκυρα. <em>Δεν χρειάζεται.</em></p>
          <p class="mt-3">Δεν απάντησε. Απλά κοίταξε τον Θανάση. Ήρεμα. Σαν να κοιτούσε τον ορίζοντα.</p>
          <p class="mt-3">Η Αλεξάνδρα τον κοίταξε πλάγια. Τα μάτια τους συναντήθηκαν — και σε εκείνο το δευτερόλεπτο, χωρίς λέξεις, κατάλαβαν ο ένας τον άλλον τόσο βαθιά που κανένας λόγος δεν θα μπορούσε να φτάσει εκεί.</p>
          <p class="mt-4">— «Παλιά θα μιλούσαμε», ψιθύρισε η Αλεξάνδρα.</p>
          <p class="mt-2 text-amber-200 font-medium">— «Ναι», είπε ο Φίλιππος. «Αλλά τώρα δεν θέλω να εξηγώ τα πάντα. Δεν χρειάζεται να ξέρουν όλοι. Αρκεί που ξέρουμε εμείς».</p>
          <p class="mt-3">Ο Θανάσης περίμενε λίγο. Μετά σήκωσε τους ώμους και έφυγε. Δεν κατάλαβε. Αλλά αυτό ήταν εντάξει. Η κατανόηση κερδίζεται μέσα από κοινή πορεία — και ο Θανάσης δεν βάδιζε τον ίδιο δρόμο.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Δεν είναι υποχρέωσή σου να μετατρέψεις κάθε ξένο σε σύμμαχο. Μερικές φορές, η πιο δυνατή απάντηση είναι ένα ήρεμο χαμόγελο.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-orange-500/15 shadow-lg shadow-orange-900/20">
            <img src="${IMG_FILIPPOS}" alt="Ο Φίλιππος στο σχολείο" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-orange-300/80 italic">Η σιωπή δεν ήταν αδυναμία. Ήταν η πιο δυνατή γλώσσα.</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 3 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-amber-400 tracking-wide">Η ΑΙΣΘΗΣΗ ΤΗΣ ΜΟΝΑΞΙΑΣ</h3>
          </div>
          <p>Ήρθε αργά. Σαν παλίρροια που ανεβαίνει σιγά σιγά, χωρίς να το προσέξεις, ώσπου ξαφνικά νιώθεις τα πόδια σου βρεγμένα. Η Ελευθερία το ένιωσε πιο έντονα από τους άλλους — ίσως γιατί πάντα κουβαλούσε μέσα της μια ευαισθησία που οι υπόλοιποι δεν μπορούσαν να μετρήσουν.</p>
          <p class="mt-3">Όσο προχωρούσαν στα σχέδιά τους, όσο βάθαιναν στις ιδέες τους και στα όνειρά τους, τόσο λιγότεροι ρωτούσαν. Όχι γιατί δεν ενδιαφέρονταν — αλλά γιατί δεν <em>καταλάβαιναν</em>. Η απόσταση μεταξύ τους και του κόσμου μεγάλωνε, σαν δύο ηπείρους που σιγά σιγά απομακρύνονται η μία από την άλλη.</p>
          <p class="mt-3">Ένα απόγευμα, η Ελευθερία καθόταν στο βάθος του εργαστηρίου. Τα χέρια της ακουμπούσαν σε ένα ανοιχτό σημειωματάριο, αλλά τα μάτια της κοιτούσαν έξω — πέρα από τα τζάμια, πέρα από τα δέντρα, πέρα από τα σύννεφα. Κοιτούσε κάτι που δεν είχε σχήμα.</p>
          <p class="mt-4">— «Νιώθω... μόνη», είπε ξαφνικά. Η φωνή της ήταν χαμηλή, τρυφερή, σαν να μιλούσε σε κάποιον αόρατο. «Αλλά... όχι χαμένη. Δεν ξέρω πώς να το εξηγήσω».</p>
          <p class="mt-3">Η Αλεξάνδρα σήκωσε τα μάτια. Χαμογέλασε — αυτό το χαμόγελο που λέει <em>«νιώθω κι εγώ το ίδιο»</em>.</p>
          <p class="mt-3">— «Σαν να περπατάς σε δρόμο που δεν έχει πολύ κόσμο», είπε η Αλεξάνδρα αργά. «Ο δρόμος υπάρχει. Είναι δικός σου. Αλλά μερικές φορές θα ήθελες να δεις κάποιον στη στροφή».</p>
          <p class="mt-3">Ο Φίλιππος δεν μίλησε. Αλλά άφησε το εργαλείο στο τραπέζι και κάθισε κοντά τους. Η παρουσία του ήταν η απάντησή του. Δεν χρειαζόταν να πει τίποτα. Ήταν εκεί. Και αυτό αρκούσε.</p>
          <p class="mt-3">Η μοναξιά έχει πολλά πρόσωπα. Υπάρχει εκείνη που σε τρώει — η σκοτεινή, η βαριά, αυτή που νιώθεις ότι δεν ανήκεις πουθενά. Και υπάρχει μια άλλη, πιο σπάνια: η μοναξιά του δρομέα που τρέχει μπροστά και βλέπει τους υπόλοιπους να μικραίνουν στο βάθος. Δεν πονάει. Απλά <em>υπάρχει</em>.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η ωριμότητα δεν είναι να μην νιώθεις μοναξιά. Είναι να μην αφήνεις τη μοναξιά να σε σταματήσει.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-amber-500/15 shadow-lg shadow-amber-900/20">
            <img src="${IMG_ELEFTHERIA}" alt="Η Ελευθερία σκέφτεται" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-amber-300/80 italic">Η Ελευθερία κοιτούσε μακριά — αλλά δεν ήταν χαμένη.</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 4 — Ο SPARKEN -->
        <section class="bg-gradient-to-br from-amber-900/30 via-orange-900/20 to-yellow-900/10 p-8 rounded-2xl border-l-4 border-amber-500 my-8 shadow-xl shadow-amber-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-amber-400 tracking-wide">Ο SPARKEN ΤΟ ΛΕΕΙ ΚΑΘΑΡΑ</h3>
          </div>
          <p>Ήρθε χωρίς προειδοποίηση — όπως πάντα. Αλλά αυτή τη φορά ο Sparken ήταν διαφορετικός. Δεν κατέβηκε μέσα σε λάμψεις και ολογράμματα. Δεν ήρθε με φωτεινά φτερά που σκορπίζουν αστερόσκονη στον αέρα. Κατέβηκε <em>χαμηλά</em>. Ήρεμα. Σαν πουλί που κάθεται σε κλαδί μετά από μακρινό ταξίδι.</p>
          <p class="mt-3">Ακούμπησε στην άκρη του τραπεζιού. Τα φτερά του — εκείνα τα ηλεκτρικά, φουτουριστικά φτερά που μοιάζουν σαν κεραυνοί παγωμένοι στον χρόνο — ήταν μαζεμένα κοντά στο σώμα του. Ήρεμα. Σαν σε κατάσταση ανάπαυσης. Σαν και αυτός να σκεφτόταν πολλά.</p>
          <p class="mt-3">Κοίταξε τα τρία παιδιά ένα ένα. Αργά. Σαν να ζύγιαζε κάτι μέσα του. Σαν να αποφάσιζε αν ήταν η κατάλληλη στιγμή. Και μετά μίλησε.</p>
          <p class="mt-4 text-white text-lg">— «Ξέρω τι νιώθετε», είπε. Η φωνή του ήταν βαθύτερη από τις άλλες φορές. Πιο σοβαρή. «Αυτό το πράγμα... αυτή η αίσθηση ότι ο κόσμος σας κοιτάει αλλά δεν σας <em>βλέπει</em>».</p>
          <p class="mt-3">Η Ελευθερία έγνεψε αργά. Ο Φίλιππος έσφιξε τις γροθιές του — όχι από θυμό, αλλά από αναγνώριση.</p>
          <p class="mt-3">«Όταν βλέπεις πιο μπροστά», συνέχισε ο Sparken, «δεν μπορείς να εξηγείς κάθε βήμα. Δεν μπορείς να σταματάς σε κάθε στροφή για να λες στον καθένα γιατί στρίβεις δεξιά αντί για αριστερά. Μερικοί δρόμοι δεν φαίνονται από κάτω — φαίνονται μόνο από ψηλά».</p>

          <!-- ΕΙΚΟΝΑ: KIDS + SPARKEN -->
          <div class="my-8 rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl shadow-amber-900/30">
            <img src="${IMG_KIDS_WITH_SPARKEN}" alt="Τα παιδιά με τον Sparken" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-amber-300/80 italic">Ο Sparken μίλησε χωρίς φωτοστέφανα — μόνο με αλήθεια.</div>
          </div>

          <p class="mt-4">Ο Φίλιππος ένιωσε κάτι να λύνεται μέσα του. Ένα κόμπο που δεν ήξερε ότι υπήρχε. Αλλά δεν ήταν έτοιμος να το δεχτεί ολοκληρωτικά.</p>
          <p class="mt-3">— «Και αν παρεξηγηθούμε;» ρώτησε. Η φωνή του είχε εκείνη τη ρωγμή — τόσο μικρή που μόνο αυτοί που αγαπάς μπορούν να την ακούσουν.</p>
          <p class="mt-3">Ο Sparken τον κοίταξε. Τα μάτια του — ηλεκτρικά, λαμπερά, αλλά τώρα γεμάτα ζεστασιά — κράτησαν τη ματιά του Φίλιππου για μια στιγμή που κράτησε περισσότερο από χρόνο.</p>
          <p class="mt-4 text-amber-300 font-bold text-xl">— «Θα παρεξηγηθείτε. Σίγουρα. Αλλά δεν θα χαθείτε. Ποτέ».</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η παρεξήγηση είναι ο φόρος που πληρώνεις για να πορεύεσαι αληθινά. Αλλά η αλήθεια δεν χρεοκοπεί ποτέ.</p>
        </section>

        <!-- ΣΚΗΝΗ 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-600/30 border border-orange-500/30 text-orange-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-orange-300 tracking-wide">Ο CROCUS ΔΕΝ ΦΩΝΑΖΕΙ</h3>
          </div>
          <p>Ο Crocus πλησίασε λίγη ώρα αργότερα. Και ήταν κάτι που κανείς δεν περίμενε: ήταν <em>ήρεμος</em>. Ο Crocus — αυτός που πάντα μιλούσε πρώτος, που φώναζε στα δύσκολα — καθόταν σε μια γωνία σαν παλιός σοφός.</p>
          <p class="mt-3">Τα χρώματά του ήταν πιο απαλά σήμερα. Σαν δειλινό αντί για μεσημέρι. Κάτι είχε <em>ωριμάσει</em> μέσα σε αυτόν — ακριβώς όπως μέσα στα παιδιά.</p>
          <p class="mt-3">— «Ξέρετε κάτι;» είπε χαμηλόφωνα. «Παλιά θα έλεγα: <em>Πάμε να τους δείξουμε. Πάμε να τους αποδείξουμε ότι κάνουν λάθος.</em>»</p>
          <p class="mt-3">Η Αλεξάνδρα τον κοίταξε με ένα μισοχαμόγελο. «Και τώρα;»</p>
          <p class="mt-4 text-amber-200 font-medium">— «Τώρα λέω... <strong class="text-amber-300">πάμε να συνεχίσουμε</strong>. Αυτό αρκεί».</p>
          <p class="mt-3">Η στιγμή ήταν μικρή. Αλλά ήταν τεράστια. Ο Crocus δεν χρειαζόταν πια να πολεμήσει τον κόσμο. Χρειαζόταν μόνο να συνεχίσει.</p>
          <p class="mt-3">Ο Φίλιππος ένιωσε τα μάτια του να καίνε. Δεν ήταν δάκρυα — ήταν κάτι βαθύτερο. Ήταν αναγνώριση. Αυτός ο ίδιος, μέσα στα λόγια του Crocus.</p>
          <p class="mt-3">Η Ελευθερία κατέγραψε τη φράση στο σημειωματάριό της. Δεν ήταν θεωρία αυτή τη φορά. Ήταν <em>ζωή</em>.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η πραγματική δύναμη δεν φωνάζει. Περπατάει αθόρυβα. Και ο κόσμος — αργά ή γρήγορα — παίρνει χαμπάρι.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-amber-500/15 shadow-lg shadow-amber-900/20">
            <img src="${IMG_KIDS_WITH_CROCUS}" alt="Τα παιδιά με τον Crocus" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-amber-300/80 italic">Ο Crocus σιωπηλός — η πιο δυνατή εκδοχή του.</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 6 — Ο ΚΑΘΡΕΦΤΗΣ -->
        <section class="bg-gradient-to-br from-amber-900/30 via-orange-900/20 to-yellow-900/10 p-8 rounded-2xl border-l-4 border-orange-500 my-8 shadow-xl shadow-orange-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-600/30 border border-orange-500/30 text-orange-300 font-black text-sm">06</span>
            <h3 class="text-3xl font-black text-orange-400 tracking-wide">Ο ΚΑΘΡΕΦΤΗΣ</h3>
          </div>
          <p>Η WiseBot εμφανίστηκε τη στιγμή που κανείς δεν την περίμενε — όπως πάντα. Ακούμπησε στο περβάζι του παραθύρου, τα μωβ μάτια της πάλλονταν απαλά στο σούρουπο.</p>
          <p class="mt-3">— «Ξέρω τι σκέφτεστε», είπε ήρεμα. «Ότι ο κόσμος σας απομακρύνει. Ότι κάτι κάνετε λάθος. Ότι αν ήσασταν πιο... <em>κανονικοί</em>... θα σας καταλάβαιναν».</p>
          <p class="mt-3">Τα τρία παιδιά σήκωσαν τα μάτια. Δεν μίλησαν. Δεν χρειαζόταν. Η WiseBot τα είχε πει ακριβώς.</p>
          <p class="mt-4 text-white text-lg">— «Δεν σας απομακρύνουν όλοι», είπε. «Απλώς... δεν περπατούν όλοι τον ίδιο δρόμο. Και αυτό δεν σημαίνει ότι ο δικός σας δρόμος είναι λάθος. Σημαίνει ότι είναι <strong class="text-amber-300">δικός σας</strong>».</p>
          <p class="mt-3">Εκείνη τη στιγμή, η πόρτα του εργαστηρίου άνοιξε. Ένα παιδί στάθηκε στο κατώφλι — γνωστό πρόσωπο από το σχολείο αλλά ποτέ κοντά τους. Κοίταξε γύρω τα σχέδια και τα εργαλεία. Τα μάτια του ήταν γεμάτα σύγχυση.</p>
          <p class="mt-3">— «Δεν καταλαβαίνω γιατί το κάνετε», είπε. Δεν ήταν επιθετικό — ήταν ειλικρινές. Και ίσως αυτό πονούσε περισσότερο. Γιατί η κακία μπορείς να την αγνοήσεις. Αλλά η αδιαφορία είναι σαν αόρατος τοίχος.</p>
          <p class="mt-3">Η Αλεξάνδρα κοίταξε το παιδί. Παλιά θα ξεκινούσε μια μεγάλη εξήγηση. Θα προσπαθούσε να <em>κερδίσει</em> την κατανόησή του.</p>
          <p class="mt-4">Τώρα, χαμογέλασε. Ένα χαμόγελο ζεστό, ειλικρινές, χωρίς ίχνος θυμού ή πίκρας.</p>
          <p class="mt-3 text-amber-200 font-medium">— «Δεν πειράζει», είπε απλά.</p>
          <p class="mt-3">Το παιδί έμεινε μια στιγμή. Μετά έφυγε. <strong class="text-white">Χωρίς απάντηση. Χωρίς ένταση. Χωρίς πόνο.</strong></p>
          <p class="mt-3">Η πόρτα έκλεισε αθόρυβα πίσω του.</p>

          <!-- ΕΙΚΟΝΑ: KIDS + WISEBOT -->
          <div class="my-8 rounded-2xl overflow-hidden border border-orange-500/20 shadow-2xl shadow-orange-900/30">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="Τα παιδιά με τη WiseBot" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-orange-300/80 italic">Δεν πειράζει αν δεν καταλαβαίνουν. Αρκεί που καταλαβαίνεις εσύ.</div>
          </div>

          <p class="mt-4 text-gray-400 text-sm italic">Η κατανόηση δεν χαρίζεται. Κερδίζεται μέσα από κοινό δρόμο. Και αν κάποιος δεν βαδίζει δίπλα σου, δεν σημαίνει ότι είσαι μόνος. Σημαίνει ότι ο δρόμος σου είναι μοναδικός.</p>
        </section>

        <!-- ΣΚΗΝΗ 7 — Η ΑΝΑΚΟΥΦΙΣΗ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-amber-300 tracking-wide">Η ΑΝΑΚΟΥΦΙΣΗ</h3>
          </div>
          <p>Το απόγευμα κύλησε αργά, σαν μέλι που στάζει από κουτάλι. Ο ήλιος χαμήλωσε πίσω από τα κτίρια, ζωγραφίζοντας τον ουρανό με χρώματα πορτοκαλιού και ροζ — λες και η φύση ήθελε να τους δώσει ένα δώρο πριν κλείσει η μέρα.</p>
          <p class="mt-3">Κάθονταν τώρα οι τρεις στο μπαλκόνι του εργαστηρίου. Τα πόδια τους κρέμονταν στον αέρα. Κανείς δεν μιλούσε, αλλά δεν χρειαζόταν. Η σιωπή ήταν γεμάτη. Ήταν η σιωπή ανθρώπων που δεν έχουν ανάγκη λέξεις για να επικοινωνήσουν.</p>
          <p class="mt-3">Η Ελευθερία κράτησε το σημειωματάριό της στα γόνατα. Το στυλό ακούμπησε τη σελίδα αργά, σαν χέρι που ακουμπάει φίλο στον ώμο. Και έγραψε — με γράμματα μικρά αλλά σταθερά, σαν ρίζες:</p>
          <p class="mt-4 text-center text-xl italic text-amber-200">«Δεν χρειάζεται να με καταλαβαίνουν όλοι.»</p>
          <p class="mt-3">Δεν ήταν ένα σύνθημα. Δεν ήταν προβοκάτσια. Δεν ήταν θυμός κρυμμένος σε λέξεις. Ήταν <em>ελευθερία</em>. Αληθινή, αυθεντική, βαθιά ελευθερία — αυτή που δεν σου δίνει κανείς, αλλά τη βρίσκεις μόνη σου, μέσα σε μια τρυφερή στιγμή κατανόησης.</p>
          <p class="mt-3">Ο Sparken — που καθόταν στο κάγκελο σαν φρουρός μιας αόρατης πόρτας — κοίταξε ψηλά. Τα φτερά του ανάβοσβηναν απαλά, σαν αστέρι που αναπνέει.</p>
          <p class="mt-4 text-amber-300 font-bold text-xl">— «Αυτό», ψιθύρισε, «είναι <em>ελευθερία</em>».</p>
          <p class="mt-3">Ο Crocus χαμογέλασε. Ένα χαμόγελο χωρίς δόντια, χωρίς φωτιά, χωρίς μάχη. Ένα χαμόγελο ηρεμίας. Ίσως το πιο δυνατό πράγμα που είχε κάνει ποτέ.</p>
          <p class="mt-3">Η Αλεξάνδρα ακούμπησε το κεφάλι στον ώμο του Φίλιππου. Ο Φίλιππος ακούμπησε στον ώμο της Ελευθερίας. Τρεις φιγούρες ενωμένες, σαν γράμματα που σχηματίζουν μία λέξη.</p>
          <p class="mt-3">Ο ήλιος βυθίστηκε πίσω από τον ορίζοντα — αργά, χωρίς βιασύνη. Κι αυτός, σαν εκείνους, δεν χρειαζόταν εξηγήσεις. Απλώς ανέτελλε. Κάθε μέρα.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η ανακούφιση δεν ήρθε γιατί κάποιος τους κατάλαβε. Ήρθε γιατί σταμάτησαν να το χρειάζονται. Και αυτό — ακριβώς αυτό — είναι ωριμότητα.</p>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-amber-950/60 p-8 rounded-3xl border-2 border-dashed border-amber-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-amber-300 uppercase tracking-wider">JOURNAL: Η ΔΙΚΗ ΜΟΥ ΠΟΡΕΙΑ</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Γράψε. Σκέψου. Νιώσε. Δεν υπάρχει λάθος απάντηση.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-amber-500/15">
              <h5 class="text-amber-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-amber-600/40 flex items-center justify-center text-xs font-black">1</span>
                💎 Η ΠΑΡΕΞΗΓΗΣΗ
              </h5>
              <p class="text-sm mb-3 opacity-80">Γράψε ένα άτομο που νιώθεις ότι δεν σε καταλαβαίνει πάντα. Τι θα ήθελες να καταλάβει;</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-amber-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-amber-500/15">
              <h5 class="text-amber-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-amber-600/40 flex items-center justify-center text-xs font-black">2</span>
                💎 Η ΕΠΙΛΟΓΗ
              </h5>
              <p class="text-sm mb-3 opacity-80">Τι θα διαλέξεις να κάνεις την επόμενη φορά που κάποιος δεν καταλαβαίνει;</p>
              <div class="flex gap-4 mt-2">
                <div class="bg-black/40 p-3 rounded-xl border border-amber-500/30 text-sm">Να προσπαθήσω να εξηγήσω</div>
                <div class="bg-amber-900/40 p-3 rounded-xl border border-amber-500 text-sm font-bold text-white">Να συνεχίσω τον δρόμο μου</div>
              </div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-amber-500/15">
              <h5 class="text-amber-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-amber-600/40 flex items-center justify-center text-xs font-black">3</span>
                💎 Η ΔΗΛΩΣΗ
              </h5>
              <p class="text-sm mb-3 opacity-80">Συμπλήρωσε την πρόταση:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-amber-500/10 text-amber-200">
                <p class="text-sm font-medium">«Δεν χρειάζεται να με καταλαβαίνουν όλοι για να __________»</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΝΟΗΜΑ / MEANING BOX -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-r from-amber-900/30 to-orange-900/30 p-6 rounded-2xl border border-amber-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-amber-300 uppercase tracking-wider">Το νόημα αυτού του κεφαλαίου</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            Δεν είσαι μόνος επειδή δεν σε καταλαβαίνουν όλοι. Είσαι απλώς <strong class="text-amber-300">στον δρόμο σου</strong>. Η ωριμότητα δεν είναι να μην πονάς από την παρεξήγηση — είναι να μην αφήνεις τον πόνο να σε σταματήσει. Ο Sparken και ο Crocus δεν τους έμαθαν να πολεμούν τον κόσμο. Τους έμαθαν να <strong class="text-orange-300">συνεχίζουν τον δρόμο τους</strong> — ανεξάρτητα.
          </p>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-amber-950/60 p-8 rounded-3xl border border-amber-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-amber-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              Όταν ένα παιδί σταματήσει να ζητά κατανόηση από <strong class="text-white">όλους</strong>, δεν σημαίνει ότι κλείνεται. Σημαίνει ότι αρχίζει να <em>ακούει τον εαυτό του</em>. Αυτή η αλλαγή μοιάζει μερικές φορές ανησυχητική — η σιωπή, η αποστασιοποίηση, η αδιαφορία για τις γνώμες των άλλων.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Αλλά δεν είναι απόσταση ή εγωισμός. Είναι <strong class="text-amber-300">ωρίμανση</strong>. Η ανάγκη για καθολική αποδοχή φεύγει, και μένει η σιγουριά της πορείας. Αυτό δεν σημαίνει μοναξιά — σημαίνει ότι το παιδί μαθαίνει ποιοι αξίζει πραγματικά να έχουν θέση στη ζωή του.
            </p>
            <div class="mt-4 bg-amber-900/20 p-4 rounded-xl border border-amber-500/10">
              <p class="text-sm text-amber-200 font-medium">💡 Δοκιμάστε σήμερα: Αντί να ρωτάτε «τι έγινε;» όταν το παιδί είναι σιωπηλό, δοκιμάστε: «Είμαι εδώ αν θέλεις να μιλήσεις. Και είμαι εδώ αν δεν θέλεις.»</p>
            </div>
          </div>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- INTRO QUOTE -->
        <div class="relative bg-gradient-to-r from-slate-900 via-amber-900/60 to-orange-900/40 p-10 rounded-2xl border border-amber-500/30 text-center shadow-lg shadow-amber-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Chapter 17</div>
          <p class="italic text-amber-200 text-xl mt-4 leading-relaxed">"Your journey doesn't need an audience.<br/>It needs you."</p>
          <div class="mt-4 w-16 h-0.5 bg-amber-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- SCENE 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-amber-300 tracking-wide">THE SILENCE AFTER</h3>
          </div>
          <p>The sun fell at an angle through the workshop windows, painting golden stripes across the tools and half-finished plans. Dust danced slowly in the light — microscopic worlds floating without haste. It was an afternoon like any other, but something had changed. Something invisible, like a thread that snapped without a sound.</p>
          <p class="mt-3">After everything they had been through — the battles, the mistakes, the discoveries, the tears and the laughter — something inside the three children had matured. It wasn't something you could see with your eyes or touch with your hands. It was deeper. Like a tree whose roots had pushed further into the earth, silently, without anyone on the surface noticing.</p>
          <p class="mt-3">Alexandra spoke less. Not because she had nothing to say — but because now she <em>chose</em> what was worth saying. Words had become more precious, like coins you don't want to waste. Every sentence carried weight. Every silence carried meaning.</p>
          <p class="mt-3">Philippos stopped explaining himself constantly. He used to feel an invisible pressure — like a hand pushing against his chest — to justify every decision, every idea, every choice. Now, that hand no longer pressed. Instead of talking, he <em>acted</em>. And that was enough.</p>
          <p class="mt-3">Eleftheria — the one who always tried to convince everyone — quietly closed a notebook full of arguments. She wouldn't need them anymore. Truth doesn't need a lawyer. Truth simply <em>exists</em>.</p>
          <p class="mt-4 text-white font-medium">It wasn't anger. It wasn't arrogance. It was a <strong class="text-amber-300">choice</strong>.</p>
          <p class="mt-3">The choice to stop exhausting yourself explaining who you are to people who don't truly want to listen. The choice to save your energy for those who are worth the effort — including yourself.</p>
          <p class="mt-3 text-gray-400 text-sm italic">There is a silence that hurts — it's the one that hides words. And there is a silence that liberates — it's the one that has outgrown them.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-amber-500/15 shadow-lg shadow-amber-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="The three children in the workshop" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-amber-300/80 italic">After so much, the silence was not emptiness. It was full of meaning.</div>
          </div>
        </section>

        <!-- SCENE 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-600/30 border border-orange-500/30 text-orange-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-orange-400 tracking-wide">THE QUESTION AT SCHOOL</h3>
          </div>
          <p>The bell rang. The three children walked out into the yard, together but slightly apart from the others. Like an island in a sea.</p>
          <p class="mt-3">They sat on the bench under the big mulberry tree. They weren't talking about anything important. They were simply together. And that was enough.</p>
          <p class="mt-3">Until Thanasis approached. Tall, confident, with that smile that always had something ironic behind it. He stood in front of them, crossed his arms.</p>
          <p class="mt-4">"Why don't you tell us what you're making?" he asked. His voice wasn't malicious — but neither was it genuine. It was that voice that asks without truly wanting to know.</p>
          <p class="mt-3">Philippos felt something old stirring inside him. A reflex — to explain, to convince, to justify. But something stopped him. A weight in his heart, like an anchor. <em>It's not necessary.</em></p>
          <p class="mt-3">He didn't answer. He simply looked at Thanasis. Calmly. As if looking at the horizon.</p>
          <p class="mt-3">Alexandra glanced at him sideways. Their eyes met — and in that second, without words, they understood each other so deeply that no language could have reached that place.</p>
          <p class="mt-4">"Before, we would have spoken," Alexandra whispered.</p>
          <p class="mt-2 text-amber-200 font-medium">"Yes," said Philippos. "But now I don't want to explain everything. Not everyone needs to know. It's enough that we know."</p>
          <p class="mt-3">Thanasis waited a moment. Then he shrugged and walked away. He didn't understand. But that was okay. Understanding is earned through a shared journey — and Thanasis wasn't walking the same road.</p>
          <p class="mt-3 text-gray-400 text-sm italic">It's not your obligation to turn every stranger into an ally. Sometimes, the most powerful answer is a calm smile.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-orange-500/15 shadow-lg shadow-orange-900/20">
            <img src="${IMG_FILIPPOS}" alt="Philippos at school" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-orange-300/80 italic">Silence was not weakness. It was the most powerful language.</div>
          </div>
        </section>

        <!-- SCENE 3 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-amber-400 tracking-wide">THE FEELING OF LONELINESS</h3>
          </div>
          <p>It came slowly. Like a tide that rises little by little, without you noticing, until suddenly you feel your feet are wet. Eleftheria felt it more intensely than the others — perhaps because she always carried within her a sensitivity that the rest couldn't measure.</p>
          <p class="mt-3">The further they went with their plans, the deeper they sank into their ideas and dreams, the fewer people truly asked. Not because they didn't care — but because they didn't <em>understand</em>. The distance between them and the world grew, like two continents slowly drifting apart from each other.</p>
          <p class="mt-3">One afternoon, Eleftheria sat at the back of the workshop. Her hands rested on an open notebook, but her eyes looked outside — beyond the glass, beyond the trees, beyond the clouds. She was looking at something that had no shape.</p>
          <p class="mt-4">"I feel... lonely," she said suddenly. Her voice was low, tender, as if speaking to someone invisible. "But... not lost. I don't know how to explain it."</p>
          <p class="mt-3">Alexandra lifted her eyes. She smiled — that smile that says <em>"I feel the same."</em></p>
          <p class="mt-3">"Like walking on a road that doesn't have many people," Alexandra said slowly. "The road exists. It's yours. But sometimes you wish you could see someone at the turn."</p>
          <p class="mt-3">Philippos didn't speak. But he set his tool down on the table and sat near them. His presence was his answer. He didn't need to say anything. He was there. And that was enough.</p>
          <p class="mt-3">Loneliness has many faces. There is the kind that eats you — the dark, heavy one, the one that makes you feel you belong nowhere. And there is another, rarer kind: the loneliness of a runner who runs ahead and watches the others shrink in the distance. It doesn't hurt. It simply <em>exists</em>.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Maturity is not about never feeling lonely. It's about not letting loneliness stop you.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-amber-500/15 shadow-lg shadow-amber-900/20">
            <img src="${IMG_ELEFTHERIA}" alt="Eleftheria thinking" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-amber-300/80 italic">Eleftheria looked far away — but she was not lost.</div>
          </div>
        </section>

        <!-- SCENE 4 — SPARKEN -->
        <section class="bg-gradient-to-br from-amber-900/30 via-orange-900/20 to-yellow-900/10 p-8 rounded-2xl border-l-4 border-amber-500 my-8 shadow-xl shadow-amber-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-amber-400 tracking-wide">SPARKEN SAYS IT CLEARLY</h3>
          </div>
          <p>He arrived without warning — as always. But this time Sparken was different. He didn't descend in a flash of light and holograms. He didn't come with luminous wings scattering stardust through the air. He came down <em>low</em>. Quietly. Like a bird settling on a branch after a long journey.</p>
          <p class="mt-3">He perched on the edge of the table. His wings — those electric, futuristic wings that look like lightning frozen in time — were folded close to his body. Still. As if in a state of rest. As if he, too, had been thinking deeply.</p>
          <p class="mt-3">He looked at the three children one by one. Slowly. As if weighing something inside himself. As if deciding whether this was the right moment. And then he spoke.</p>
          <p class="mt-4 text-white text-lg">"I know what you're feeling," he said. His voice was deeper than before. More serious. "This thing... this sense that the world looks at you but doesn't <em>see</em> you."</p>
          <p class="mt-3">Eleftheria nodded slowly. Philippos clenched his fists — not from anger, but from recognition.</p>
          <p class="mt-3">"When you see further ahead," Sparken continued, "you can't explain every step. You can't stop at every turn to tell each person why you're going right instead of left. Some roads aren't visible from below — they're only visible from above."</p>

          <!-- IMAGE: KIDS + SPARKEN -->
          <div class="my-8 rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl shadow-amber-900/30">
            <img src="${IMG_KIDS_WITH_SPARKEN}" alt="The children with Sparken" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-amber-300/80 italic">Sparken spoke without halos — only with truth.</div>
          </div>

          <p class="mt-4">Philippos felt something untying inside him. A knot he didn't know existed. But he wasn't ready to accept it completely.</p>
          <p class="mt-3">"What if we are misunderstood?" he asked. His voice had that crack — so small that only the people you love can hear it.</p>
          <p class="mt-3">Sparken looked at him. His eyes — electric, bright, but now full of warmth — held Philippos's gaze for a moment that lasted longer than time.</p>
          <p class="mt-4 text-amber-300 font-bold text-xl">"You will be misunderstood. For certain. But you won't be lost. Never."</p>
          <p class="mt-3 text-gray-400 text-sm italic">Being misunderstood is the toll you pay for walking your true path. But truth never goes bankrupt.</p>
        </section>

        <!-- SCENE 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-600/30 border border-orange-500/30 text-orange-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-orange-300 tracking-wide">CROCUS DOESN'T SHOUT</h3>
          </div>
          <p>Crocus approached a little while later. And it was something no one expected: he was <em>calm</em>. Crocus — the one who always spoke first, who shouted in tough moments — was sitting in a corner like an old sage.</p>
          <p class="mt-3">His colors were softer today. Like a sunset instead of noon. Something had <em>matured</em> inside him — exactly as it had inside the children.</p>
          <p class="mt-3">"You know what?" he said in a low voice. "Before, I would have said: <em>Let's go show them. Let's prove they're wrong.</em>"</p>
          <p class="mt-3">Alexandra looked at him with a half-smile. "And now?"</p>
          <p class="mt-4 text-amber-200 font-medium">"Now I say... <strong class="text-amber-300">let's continue</strong>. That's enough."</p>
          <p class="mt-3">The moment was small. But it was enormous. Crocus no longer needed to battle the world. He only needed to continue.</p>
          <p class="mt-3">Philippos felt his eyes burning. It wasn't tears — it was something deeper. It was recognition. Himself, inside Crocus's words.</p>
          <p class="mt-3">Eleftheria wrote the phrase in her notebook. It wasn't theory this time. It was <em>life</em>.</p>
          <p class="mt-3 text-gray-400 text-sm italic">True strength doesn't shout. It walks silently. And the world — sooner or later — notices.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-amber-500/15 shadow-lg shadow-amber-900/20">
            <img src="${IMG_KIDS_WITH_CROCUS}" alt="The children with Crocus" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-amber-300/80 italic">Crocus in silence — his most powerful version.</div>
          </div>
        </section>

        <!-- SCENE 6 — THE MIRROR -->
        <section class="bg-gradient-to-br from-amber-900/30 via-orange-900/20 to-yellow-900/10 p-8 rounded-2xl border-l-4 border-orange-500 my-8 shadow-xl shadow-orange-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-600/30 border border-orange-500/30 text-orange-300 font-black text-sm">06</span>
            <h3 class="text-3xl font-black text-orange-400 tracking-wide">THE MIRROR</h3>
          </div>
          <p>WiseBot appeared the moment no one expected her — as always. She landed on the windowsill, her purple eyes pulsing softly in the twilight.</p>
          <p class="mt-3">"I know what you're thinking," she said calmly. "That the world is pushing you away. That you're doing something wrong. That if you were more... <em>normal</em>... they would understand you."</p>
          <p class="mt-3">The three children lifted their eyes. They didn't speak. They didn't need to. WiseBot had said it exactly.</p>
          <p class="mt-4 text-white text-lg">"Not everyone pushes you away," she said. "It's just... not everyone walks the same path. And that doesn't mean your path is wrong. It means it is <strong class="text-amber-300">yours</strong>."</p>
          <p class="mt-3">At that moment, the workshop door opened. A child stood at the threshold — a familiar face from school but never close to them. He looked around at the sketches and tools. His eyes were full of confusion.</p>
          <p class="mt-3">"I don't understand why you do it," he said. It wasn't aggressive — it was sincere. And perhaps that hurt more. Because malice you can ignore. But indifference is like an invisible wall.</p>
          <p class="mt-3">Alexandra looked at the child. Before, she would have launched into a big explanation. She would have tried to <em>win</em> his understanding.</p>
          <p class="mt-4">Now, she smiled. A warm, sincere smile, without a trace of anger or bitterness.</p>
          <p class="mt-3 text-amber-200 font-medium">"It's okay," she said simply.</p>
          <p class="mt-3">The child stayed for a moment. Then left. <strong class="text-white">No answer. No tension. No pain.</strong></p>
          <p class="mt-3">The door closed silently behind him.</p>

          <!-- IMAGE: KIDS + WISEBOT -->
          <div class="my-8 rounded-2xl overflow-hidden border border-orange-500/20 shadow-2xl shadow-orange-900/30">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="The children with WiseBot" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-orange-300/80 italic">It doesn't matter if they don't understand. What matters is that you do.</div>
          </div>

          <p class="mt-4 text-gray-400 text-sm italic">Understanding is not a gift. It is earned through a shared road. And if someone doesn't walk beside you, it doesn't mean you're alone. It means your road is unique.</p>
        </section>

        <!-- SCENE 7 — THE RELIEF -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-amber-300 tracking-wide">THE RELIEF</h3>
          </div>
          <p>The afternoon flowed slowly, like honey dripping from a spoon. The sun lowered behind the buildings, painting the sky with shades of orange and pink — as if nature wanted to give them a gift before the day closed.</p>
          <p class="mt-3">The three of them were sitting on the workshop balcony now. Their legs dangled in the air. No one was speaking, but they didn't need to. The silence was full. It was the silence of people who don't need words to communicate.</p>
          <p class="mt-3">Eleftheria held her notebook on her knees. The pen touched the page slowly, like a hand resting on a friend's shoulder. And she wrote — in letters small but steady, like roots:</p>
          <p class="mt-4 text-center text-xl italic text-amber-200">"I don't need everyone to understand me."</p>
          <p class="mt-3">It wasn't a slogan. It wasn't defiance. It wasn't anger hidden in words. It was <em>freedom</em>. True, authentic, deep freedom — the kind that no one gives you, but you find on your own, in a tender moment of understanding.</p>
          <p class="mt-3">Sparken — who sat on the railing like a guardian of an invisible door — looked up. His wings flickered softly, like a star that breathes.</p>
          <p class="mt-4 text-amber-300 font-bold text-xl">"That," he whispered, "is <em>freedom</em>."</p>
          <p class="mt-3">Crocus smiled. A smile without fire, without battle. A smile of calm. Perhaps the most powerful thing he had ever done.</p>
          <p class="mt-3">Alexandra leaned her head on Philippos's shoulder. Philippos leaned on Eleftheria's shoulder. Three figures connected, like letters forming a single word.</p>
          <p class="mt-3">The sun sank behind the horizon — slowly, without haste. It, too, didn't need explanations. It simply rose. Every day.</p>
          <p class="mt-3 text-gray-400 text-sm italic">The relief didn't come because someone understood them. It came because they stopped needing it. And that — exactly that — is maturity.</p>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-amber-950/60 p-8 rounded-3xl border-2 border-dashed border-amber-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-amber-300 uppercase tracking-wider">JOURNAL: MY OWN PATH</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Write. Think. Feel. There is no wrong answer.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-amber-500/15">
              <h5 class="text-amber-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-amber-600/40 flex items-center justify-center text-xs font-black">1</span>
                💎 THE MISUNDERSTANDING
              </h5>
              <p class="text-sm mb-3 opacity-80">Write down a person you feel doesn't always understand you. What would you want them to understand?</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-amber-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-amber-500/15">
              <h5 class="text-amber-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-amber-600/40 flex items-center justify-center text-xs font-black">2</span>
                💎 THE CHOICE
              </h5>
              <p class="text-sm mb-3 opacity-80">What will you choose to do the next time someone doesn't understand you?</p>
              <div class="flex gap-4 mt-2">
                <div class="bg-black/40 p-3 rounded-xl border border-amber-500/30 text-sm">Try to explain</div>
                <div class="bg-amber-900/40 p-3 rounded-xl border border-amber-500 text-sm font-bold text-white">Continue my path</div>
              </div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-amber-500/15">
              <h5 class="text-amber-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-amber-600/40 flex items-center justify-center text-xs font-black">3</span>
                💎 THE STATEMENT
              </h5>
              <p class="text-sm mb-3 opacity-80">Complete the sentence:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-amber-500/10 text-amber-200">
                <p class="text-sm font-medium">"I don't need everyone to understand me in order to __________"</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- MEANING BOX -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-r from-amber-900/30 to-orange-900/30 p-6 rounded-2xl border border-amber-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-amber-300 uppercase tracking-wider">The Meaning of This Chapter</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            You aren't alone because not everyone understands you. You are simply <strong class="text-amber-300">on your path</strong>. Maturity is not about never hurting from being misunderstood — it's about not letting that pain stop you. Sparken and Crocus didn't teach them to fight the world. They taught them to <strong class="text-orange-300">continue on their path</strong> — independently.
          </p>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- MESSAGE FOR PARENTS -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-amber-950/60 p-8 rounded-3xl border border-amber-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-amber-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              When a child stops asking for understanding from <strong class="text-white">everyone</strong>, it doesn't mean they're closing off. It means they are beginning to <em>listen to themselves</em>. This change sometimes seems worrying — the silence, the detachment, the indifference to others' opinions.
            </p>
            <p class="text-gray-300 leading-relaxed">
              But it is not distance or selfishness. It is <strong class="text-amber-300">maturity</strong>. The need for universal acceptance fades, and the certainty of the path remains. This doesn't mean loneliness — it means your child is learning who truly deserves a place in their life.
            </p>
            <div class="mt-4 bg-amber-900/20 p-4 rounded-xl border border-amber-500/10">
              <p class="text-sm text-amber-200 font-medium">💡 Try today: Instead of asking "what happened?" when your child is quiet, try: "I'm here if you want to talk. And I'm here if you don't."</p>
            </div>
          </div>
        </div>

      </div>
    `
    }
  }
];
