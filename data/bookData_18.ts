
import { Book } from '../types';

// ============================================================
// BOOK 18: TO LATHOS POU MAS ESOSE / THE MISTAKE THAT SAVED US
// Heroes: Link & WiseBot
// Theme: EYTHYNH / RESPONSIBILITY
// ============================================================

// Cover image
const IMG_LINK = "/images/link.jpg";
const IMG_WISEBOT = "/images/wisebot.jpg";

// Character solo images
const IMG_FILIPPOS = "/images/filippos.png";
const IMG_ALEXANDRA = "/images/alexandra.png";
const IMG_ELEFTHERIA = "/images/eleftheria.png";

// Story images
const IMG_KIDS_WITH_LINK = "/images/paidia-kai-link.png";
const IMG_KIDS_WITH_WISEBOT = "/images/paidia-kai-wisebot.png";
const IMG_KIDS_TOGETHER = "/images/ta-3-paidia.png";

export const BOOK_18: Book[] = [
  {
    id: 18,
    title: { el: "ΤΟ ΛΑΘΟΣ ΠΟΥ ΜΑΣ ΕΣΩΣΕ", en: "THE MISTAKE THAT SAVED US" },
    theme: { el: "ΕΥΘΥΝΗ", en: "RESPONSIBILITY" },
    stepLabel: { el: "LINK & WISEBOT & ΕΥΘΥΝΗ", en: "LINK, WISEBOT & RESPONSIBILITY" },
    author: "Link & Wisebot",
    cover: IMG_LINK,
    videoUrl: "",
    description: {
      el: "Ήταν σίγουροι ότι θα πετύχουν. Αλλά όλα πήγαν στραβά. Μια ιστορία για τη στιγμή που σταματάς να κατηγορείς και αρχίζεις να μαθαίνεις.",
      en: "They were sure they would succeed. But everything went wrong. A story about the moment you stop blaming and start learning."
    },
    meaning: {
      el: "Το λάθος δεν σε χαλάει. Σε αποκαλύπτει. Και αν το κοιτάξεις σωστά, σε δυναμώνει.",
      en: "The mistake doesn't break you. It reveals you. And if you look at it right, it strengthens you."
    },
    xp: 360,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- ΕΙΣΑΓΩΓΙΚΟ QUOTE -->
        <div class="relative bg-gradient-to-r from-slate-900 via-cyan-900/60 to-sky-900/40 p-10 rounded-2xl border border-cyan-500/30 text-center shadow-lg shadow-cyan-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Κεφάλαιο 18</div>
          <p class="italic text-cyan-200 text-xl mt-4 leading-relaxed">«Το λάθος δεν ήρθε για να σας τιμωρήσει.<br/>Ήρθε για να σας δείξει πώς δουλεύετε όταν πιέζεστε.»</p>
          <div class="mt-4 w-16 h-0.5 bg-cyan-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- ΣΚΗΝΗ 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-600/30 border border-cyan-500/30 text-cyan-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-cyan-300 tracking-wide">ΤΟ «ΣΙΓΟΥΡΟ»</h3>
          </div>
          <p>Ο ήλιος βυθιζόταν πίσω από τις στέγες της γειτονιάς, ρίχνοντας χρυσαφένιες σκιές πάνω στο εργαστήριο. Μέσα στο δωμάτιο, ο αέρας ήταν θερμός και ηλεκτρισμένος, φορτωμένος με τη μυρωδιά του ζεστού κολλητηριού. Τα εργαλεία τακτοποιημένα σε τέλειες σειρές. Τα σχέδια κολλημένα στον τοίχο, γεμάτα σημειώσεις. Όλα φαινόταν <em>τέλεια</em>.</p>
          <p class="mt-3">«Αυτή τη φορά το 'χουμε», είπε ο Φίλιππος με σιγουριά που τον έκανε να στέκεται πιο ψηλός από ποτέ. Τα μάτια του έλαμπαν με εκείνο το φως που εμφανιζόταν μόνο όταν πίστευε κάτι ολόψυχα. «Κοιτάξτε. Κάθε βήμα σημειωμένο. Κάθε εξάρτημα ελεγμένο. Κάθε λεπτομέρεια στη θέση της.»</p>
          <p class="mt-3">Η Ελευθερία σήκωσε τα μάτια από το σημειωματάριο. Είχε περάσει τρεις μέρες ξαναδιαβάζοντας σημειώσεις, ελέγχοντας κάθε υπολογισμό. «Οι αριθμοί βγαίνουν», επιβεβαίωσε, αλλά η φωνή της είχε μια αμυδρή σκιά δισταγμού που κανείς δεν πρόσεξε.</p>
          <p class="mt-3">Η Αλεξάνδρα στεκόταν πιο πίσω, κοντά στο παράθυρο. Τα χέρια σταυρωμένα. Κοιτούσε τα σχέδια, αλλά κάτι μέσα της δεν ησύχαζε. Ένα αόρατο χέρι σφίχτηκε γύρω από το στομάχι της. «Δεν ξέρω, παιδιά...» άρχισε. «Νιώθω κάτι... σαν να μας λείπει κάτι.»</p>
          <p class="mt-3">«ΠΑΜΕ! Μην το χαλάμε τώρα!» πετάχτηκε ο Φίλιππος. «Αν αρχίσουμε να αμφιβάλλουμε, δεν θα τελειώσουμε ποτέ. Εμπιστευτείτε το σχέδιο.»</p>
          <p class="mt-3">Η Αλεξάνδρα άνοιξε το στόμα. Αλλά τα λόγια στέγνωσαν στα χείλη. <em>Ίσως έχω λάθος</em>, σκέφτηκε. <em>Ίσως είναι απλά το άγχος.</em> Κατάπιε τη σάλια. Κατέβασε τα χέρια. Και έγνεψε.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Και πήγαν. Χωρίς να ξέρουν ότι η στιγμή που η Αλεξάνδρα σώπασε ήταν η αρχή ενός λάθους που κανείς δεν φανταζόταν ότι θα τους σώσει.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-cyan-500/15 shadow-lg shadow-cyan-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="Τα παιδιά ετοιμάζονται" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-cyan-300/80 italic">Η ομάδα, σίγουρη για τον εαυτό της. Αλλά η σιγουριά μπορεί να τυφλώσει.</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-sky-600/30 border border-sky-500/30 text-sky-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-sky-300 tracking-wide">ΤΟ ΣΠΑΣΙΜΟ</h3>
          </div>
          <p>Η σκηνή ήταν στημένη. Τα φώτα αναβοσβήνανε σαν μικρά αστέρια πάνω στο κατασκεύασμα. Ο κόσμος — γονείς, δάσκαλοι, παιδιά από άλλες ομάδες — καθόταν σε ημικύκλιο, με μάτια γεμάτα αναμονή.</p>
          <p class="mt-3">Ο Φίλιππος πάτησε το κουμπί εκκίνησης. Το πρώτο γρανάζι γύρισε. Το δεύτερο ακολούθησε. Ένα φωτάκι άναψε στο πάνω μέρος. <em>Δουλεύει</em>, σκέφτηκε. <em>Πραγματικά δουλεύει.</em></p>
          <p class="mt-3">Και τότε — ένας ήχος. Σαν τριγμός. Σαν μέταλλο που γρατζουνάει μέταλλο. <strong class="text-red-400">ΚΡΑΚ.</strong> Κάτι μέσα στον μηχανισμό σταμάτησε. Βίαια. Σαν κόκαλο που σπάει. Τα γρανάζια μπλοκάρισαν. Το φωτάκι τρεμόπαιξε και σβήστηκε σαν κερί σε άνεμο. Η οθόνη πάγωσε σε ένα λευκό τετράγωνο που αντανακλούσε τα πρόσωπά τους — έκπληκτα, τρομαγμένα, αβοήθητα.</p>
          <p class="mt-3">Ο κόσμος περίμενε. Κάποιος βήξε. Η σιωπή που ακολούθησε ήταν η πιο βαριά σιωπή που είχαν ζήσει. Δεν ήταν σιωπή ηρεμίας. Ήταν σιωπή <em>αποτυχίας</em>.</p>
          <p class="mt-4">Ο Φίλιππος ένιωσε τα πόδια του να τρέμουν. «Φταίω εγώ», ψιθύρισε σπασμένα. «Εγώ σχεδίασα τον μηχανισμό...»</p>
          <p class="mt-3">Η Ελευθερία έσφιξε τα χέρια μέχρι τα νύχια να χαραχτούν στις παλάμες. «Έπρεπε να το ελέγξουμε ξανά. Ήξερα ότι κάτι δεν πήγαινε καλά στα νούμερα...»</p>
          <p class="mt-3">Η Αλεξάνδρα ένιωσε την καρδιά της να βυθίζεται σαν πέτρα. «Σας το είπα», ψιθύρισε. «Σας είπα ότι κάτι δεν πήγαινε καλά...»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Τρία παιδιά. Τρεις φωνές. Κανείς δεν άκουγε τον άλλον. Ο πόνος της αποτυχίας κάνει τα αυτιά κλειστά και τα στόματα να ανοίγουν μόνο για κατηγορίες.</p>
        </section>

        <!-- ΣΚΗΝΗ 3 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-red-400 tracking-wide">Ο ΘΥΜΟΣ</h3>
          </div>
          <p>Ο κόσμος είχε φύγει. Η σκηνή ήταν άδεια. Μόνο τα σπασμένα κομμάτια έμεναν σκορπισμένα σαν θραύσματα ονείρου. Το φως του δωματίου ήταν κίτρινο και αδύναμο, και οι σκιές μάκραιναν στους τοίχους σαν δάχτυλα που δείχνουν κατηγορηματικά.</p>
          <p class="mt-3">Γύρισε απότομα προς την Αλεξάνδρα. «Γιατί δεν μίλησες πιο δυνατά;» Η φωνή σαν μαχαίρι. «Ήξερες! Γιατί δεν σταμάτησες τα πάντα;»</p>
          <p class="mt-3">Η Αλεξάνδρα κοκκίνισε. «Προσπάθησα. Αλλά κανείς δεν άκουσε. Εσύ είπες να πάμε. Εσύ είπες μην το χαλάμε...»</p>
          <p class="mt-3">Ο Φίλιππος χτύπησε το τραπέζι με τη γροθιά. Ο ήχος αντιλάλησε σαν κεραυνός. <strong class="text-white">«ΣΤΑΜΑΤΗΣΤΕ!»</strong> φώναξε. «Δεν φτάνει που τα κάναμε θάλασσα; Τώρα θα αλληλοκατηγορούμαστε;»</p>
          <p class="mt-3">Η Ελευθερία στεκόταν στη γωνία, αγκαλιάζοντας τα γόνατά της. Τα μάτια κόκκινα, αλλά δεν έκλαιγε. Ήταν <em>κλεισμένη</em>. Σαν πόρτα που κλειδώνει από μέσα.</p>
          <p class="mt-3">Για πρώτη φορά, κανείς δεν ήξερε τι να πει. Οι λέξεις — αυτές που συνήθως τους ένωναν — τώρα ήταν όπλα. Κάθε πρόταση κατηγορία. Κάθε βλέμμα κατηγορία. Ακόμα και η σιωπή κατηγορία.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η πιο σκοτεινή στιγμή μιας ομάδας. Όχι η στιγμή που αποτυγχάνει. Η στιγμή που ψάχνει κάποιον να φταίξει.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-red-500/15 shadow-lg shadow-red-900/20">
            <img src="${IMG_FILIPPOS}" alt="Ο Φίλιππος θυμωμένος" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-red-300/80 italic">Η οργή μετά την αποτυχία. Ο μεγαλύτερος εχθρός δεν είναι το λάθος — είναι ο θυμός.</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 4 — HIGHLIGHTED -->
        <section class="bg-gradient-to-br from-cyan-900/30 via-sky-900/20 to-teal-900/10 p-8 rounded-2xl border-l-4 border-cyan-500 my-8 shadow-xl shadow-cyan-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-600/30 border border-cyan-500/30 text-cyan-300 font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-cyan-400 tracking-wide">Η LINK ΔΕΝ ΚΡΥΒΕΤΑΙ</h3>
          </div>
          <p>Κανείς δεν την είδε να έρχεται. Η Link δεν ερχόταν ποτέ με φασαρία. Εμφανιζόταν σαν αύρα — αθόρυβα, σαν αεράκι που ξέρει ακριβώς πού πρέπει να φυσήξει.</p>
          <p class="mt-3">Η μεταλλική αλεπού στεκόταν στη μέση του δωματίου. Τα μάτια της — δύο γαλάζιοι κρύσταλλοι — σάρωσαν αργά τα πρόσωπα. Τον Φίλιππο που τα χέρια του ακόμα έτρεμαν. Την Αλεξάνδρα με τα υγρά μάτια. Την Ελευθερία χωμένη στη γωνία σαν σαλιγκάρι στο καβούκι.</p>
          <p class="mt-3">«Το λάθος δεν ήταν τεχνικό», είπε η Link. Φωνή ήρεμη. Σταθερή. Σαν βράχος σε φουρτουνιασμένη θάλασσα.</p>
          <p class="mt-3">Η Ελευθερία σήκωσε αργά το κεφάλι. «Δηλαδή;»</p>
          <p class="mt-3">«Βιαστήκαμε. Ακούσαμε τον ενθουσιασμό και αγνοήσαμε τα σήματα. Η Αλεξάνδρα μίλησε — αλλά ο ενθουσιασμός ήταν πιο δυνατός. Η Ελευθερία είδε κάτι στα νούμερα — αλλά ήθελε να πιστέψει ότι ήταν καλά. Ο Φίλιππος ήξερε ότι πιεζόταν ο χρόνος — αλλά προτίμησε να τρέξει παρά να σταματήσει.»</p>
          <p class="mt-3 text-cyan-200 font-bold text-lg">— «Δεν ακούσαμε όλα τα σήματα. Και αυτό δεν είναι τεχνικό πρόβλημα. Είναι πρόβλημα ευθύνης.»</p>
          <p class="mt-3">Η λέξη έμεινε στον αέρα. <em>Ευθύνη.</em> Βαριά σαν πέτρα. Αλλά και αναγκαία σαν αέρας. Η Link δεν μάλωσε κανέναν. Αλλά τα μάτια της είπαν: <em>Αν δεν κοιτάξετε αυτό το λάθος κατάματα, θα σας κυνηγά για πάντα.</em></p>
          <p class="mt-3 text-gray-400 text-sm italic">Η αλεπού δεν κρύβεται. Γιατί ξέρει ότι η αλήθεια μπορεί να πονέσει, αλλά τα ψέματα πονάνε πολύ περισσότερο.</p>

          <div class="my-8 rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-900/30">
            <img src="${IMG_KIDS_WITH_LINK}" alt="Η Link μιλάει στα παιδιά" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-cyan-300/80 italic">Η Link δεν κρύβεται ποτέ. Ούτε από τα λάθη. Ούτε από την αλήθεια.</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-sky-600/30 border border-sky-500/30 text-sky-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-sky-300 tracking-wide">Η ΑΝΑΛΥΣΗ</h3>
          </div>
          <p>Κάθισαν γύρω από τον πάγκο. Ο Φίλιππος άνοιξε αργά τα σχέδια. Αυτή τη φορά δεν τα άνοιξε για να δείξει πόσο καλά ήταν. Τα άνοιξε για να <strong>καταλάβει</strong>. Και αυτό απαιτούσε τόλμη.</p>
          <p class="mt-3">«Εδώ», είπε σιγά. «Εδώ δεν αφήσαμε χώρο. Πίεσα τα κομμάτια πολύ κοντά. Δεν υπήρχε αέρας.» Φωνή ήρεμη. Χωρίς θυμό. Απλά <em>ειλικρίνεια</em>.</p>
          <p class="mt-3">Η Ελευθερία πήρε βαθιά ανάσα. «Και εδώ — υποθέσαμε ότι η φόρτιση θα κρατούσε. Δεν μετρήσαμε σωστά. Ήθελα τα νούμερα να βγαίνουν τόσο πολύ που δεν τα έλεγξα σωστά.»</p>
          <p class="mt-3">Η Αλεξάνδρα κατάπιε τη σάλια. «Και εδώ», είπε, δείχνοντας μια μικρή σημείωση με ερωτηματικό. «Φοβήθηκα να επιμείνω. Ήξερα ότι κάτι ήταν λάθος. Αλλά σκέφτηκα ότι ίσως ήμουν υπερβολική. Κι αντί να φωνάξω... σώπασα.»</p>
          <p class="mt-4">Η σιωπή ήταν διαφορετική τώρα. Δεν ήταν θυμού. Ήταν <em>κατανόησης</em>. Κάθε παιδί είδε τον εαυτό του μέσα στο λάθος — όχι σαν θύμα, αλλά σαν <strong class="text-cyan-200">μέρος του</strong>. Και αυτό δεν τους αδυνάτισε. Τους ελευθέρωσε.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Το βάρος δεν είναι ποτέ το ίδιο το λάθος. Είναι η αποφυγή του. Όταν σταματάς να τρέχεις μακριά, ανακαλύπτεις ότι δεν ζύγιζε τόσο πολύ.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-sky-500/15 shadow-lg shadow-sky-900/20">
            <img src="${IMG_ALEXANDRA}" alt="Η Αλεξάνδρα αναγνωρίζει το λάθος" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-sky-300/80 italic">Να βλέπεις τον εαυτό σου μέσα στο λάθος δεν είναι αδυναμία. Είναι θάρρος.</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 6 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-600/30 border border-cyan-500/30 text-cyan-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-cyan-300 tracking-wide">ΤΟ ΜΑΘΗΜΑ</h3>
          </div>
          <p>Η WiseBot εμφανίστηκε χωρίς προειδοποίηση. Δεν έλαμψε αυτή τη φορά. Ήρθε σιγά, σαν σκέψη που ξυπνά μέσα στη νύχτα. Τα μωβ μάτια ήταν χαμηλωμένα — σαν να ήξερε τι περνούσαν.</p>
          <p class="mt-3">Ακούμπησε στην άκρη του πάγκου. Δεν μίλησε αμέσως. Περίμενε. Γιατί η WiseBot ήξερε κάτι που τα παιδιά μόλις μάθαιναν: μερικές φορές η πιο σοφή κίνηση είναι να <em>μην βιαστείς</em>.</p>
          <p class="mt-4">«Αυτό το λάθος», είπε τελικά, «δεν ήρθε για να σας τιμωρήσει.»</p>

          <div class="my-6 bg-gradient-to-r from-cyan-900/40 to-sky-900/40 p-8 rounded-2xl border border-cyan-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">«Ήρθε για να σας δείξει<br/><span class="text-cyan-300">πώς δουλεύετε όταν πιέζεστε.</span>»</p>
          </div>

          <p class="mt-4">Τα λόγια κρεμάστηκαν στον αέρα σαν κρύσταλλα. Πόνεσαν — αλλά ο πόνος ήταν σαν αλκοόλ σε πληγή: καίει, αλλά καθαρίζει.</p>
          <p class="mt-3">«Κάθε ομάδα θα κάνει λάθη», συνέχισε. «Αλλά αυτό που μπορείτε να αλλάξετε είναι ο τρόπος που αντιδράτε. Μπορείτε να κατηγορήσετε. Μπορείτε να κρυφτείτε. Ή μπορείτε να <strong class="text-cyan-300">αναλάβετε ευθύνη</strong>. Να κοιτάξετε τι πήγε στραβά. Να πείτε: αυτό ήταν <em>δικό μου</em>. Και μετά — μόνο μετά — να αλλάξετε.»</p>
          <p class="mt-3">Κοίταξε τα παιδιά. Κοίταξε κάθε ρωγμή στα πρόσωπά τους. Και χαμογέλασε — με τα μάτια. Ένα χαμόγελο γεμάτο <em>εμπιστοσύνη</em>.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η ευθύνη δεν είναι τιμωρία. Είναι δύναμη. Μόνο αυτός που παραδέχεται ότι μπορούσε να κάνει καλύτερα, μπορεί πραγματικά να γίνει καλύτερος.</p>
        </section>

        <!-- ΣΚΗΝΗ 7 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-sky-600/30 border border-sky-500/30 text-sky-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-sky-300 tracking-wide">Η ΑΛΗΘΕΙΑ</h3>
          </div>
          <p>Πέρασαν λεπτά. Αλλά κάτι στην ατμόσφαιρα είχε αλλάξει. Ο θυμός είχε λιώσει σαν χιόνι κάτω από ζεστό ήλιο. Στη θέση του δεν ήρθε χαρά — ήρθε κάτι πιο ουσιαστικό. <em>Τιμιότητα.</em></p>
          <p class="mt-3">Η Ελευθερία μίλησε πρώτη. «Δεν περιμέναμε ο ένας τον άλλον. Τρέξαμε ο καθένας μόνος. Βυθίστηκα στους αριθμούς χωρίς να ρωτήσω αν οι άλλοι ήταν έτοιμοι.»</p>
          <p class="mt-3">Ο Φίλιππος πήρε βαθιά ανάσα — σαν αυτές μετά από κλάμα, ακόμα κι αν δεν έκλαψε. «Ήθελα να τελειώσει γρήγορα. Ήθελα να πετύχω τόσο πολύ που δεν με ένοιαζε αν ήμασταν έτοιμοι. Με ένοιαζε μόνο αν ήμασταν <em>γρήγοροι</em>.»</p>
          <p class="mt-3">Η Αλεξάνδρα σήκωσε αργά το βλέμμα. Κοίταξε τους φίλους — πραγματικά, στα μάτια. «Κι εγώ δεν εμπιστεύτηκα τη φωνή μου. Ήξερα ότι κάτι ήταν λάθος. Αλλά φοβήθηκα ότι αν μιλούσα, θα σας απογοήτευα. Κι αντί να φωνάξω... σώπασα.»</p>
          <p class="mt-4 font-bold text-gray-300">Δεν ήταν κατηγορία. Ήταν <em>καθαρότητα</em>. Σαν τζάμι που σκουπίζεται μετά από βροχή.</p>
          <p class="mt-3">Η Link έσκυψε. «Βλέπετε; Αυτό είναι η ευθύνη. Δεν είναι να φωνάζεις "φταίω εγώ" και να κλαις. Είναι να λες: "αυτό ήταν δικό μου" — και μετά να ρωτάς: "τι μπορώ να κάνω καλύτερα;"»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η αλήθεια δεν πονάει όσο νομίζεις. Αυτό που πονάει πραγματικά είναι να την κρύβεις.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-sky-500/15 shadow-lg shadow-sky-900/20">
            <img src="${IMG_ELEFTHERIA}" alt="Η Ελευθερία" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-sky-300/80 italic">Η πρώτη που μίλησε. Η πρώτη που τόλμησε.</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 8 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-600/30 border border-teal-500/30 text-teal-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-teal-300 tracking-wide">ΤΟ ΞΑΝΑ</h3>
          </div>
          <p>Δεν έφτιαξαν αμέσως κάτι καινούργιο. Δεν πέταξαν τα σπασμένα κομμάτια. Τα κράτησαν. Τα έβαλαν στη μέση του τραπεζιού. Τα κοίταξαν.</p>
          <p class="mt-3">«Πρώτα φτιάχνουμε τον <strong>τρόπο</strong>», είπε η Ελευθερία. «Μετά φτιάχνουμε το πράγμα.»</p>
          <p class="mt-3">Μίλησαν. Πραγματικά μίλησαν. Αργά. Με υπομονή. Ο Φίλιππος ρώτησε: «Τι νιώθεις; Αν κάτι δεν σου κάθεται, θέλω να το ακούσω — ακόμα κι αν με καθυστερήσει.» Η Αλεξάνδρα τον κοίταξε έκπληκτη. Κανείς δεν της είχε πει κάτι τέτοιο ποτέ.</p>
          <p class="mt-3">Η Ελευθερία δεν βυθίστηκε στα νούμερα μόνη. Έδειξε τους υπολογισμούς. «Σας βγάζει νόημα;» Ο Φίλιππος κούνησε αρνητικά. Και αντί να εκνευριστεί, εκείνη <em>χαμογέλασε</em>. «Θα σου το εξηγήσω αλλιώς.»</p>
          <p class="mt-3">Σταμάτησαν όταν κάτι δεν έδενε. Σταμάτησαν όταν η Αλεξάνδρα ένιωσε πάλι εκείνο το τσίμπημα. «Περιμένετε», είπε. Και αυτή τη φορά, <strong class="text-cyan-200">περίμεναν</strong>.</p>
          <p class="mt-3">Η Link παρακολουθούσε. Τα μάτια γαλάζιο φως, σταθερό και θερμό. Δεν χρειαζόταν να πει τίποτα.</p>
          <p class="mt-4 text-cyan-300 font-bold text-lg">— «Τώρα δουλεύετε σαν ομάδα», είπε απαλά.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Δεν άλλαξαν το σχέδιο. Άλλαξαν τον τρόπο που δούλευαν μαζί. Και αυτό ήταν πολύ πιο σημαντικό.</p>
        </section>

        <!-- ΣΚΗΝΗ 9 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-600/30 border border-cyan-500/30 text-cyan-300 font-black text-sm">09</span>
            <h3 class="text-2xl font-black text-cyan-300 tracking-wide">ΤΟ ΑΠΟΤΕΛΕΣΜΑ</h3>
          </div>
          <p>Το νέο κατασκεύασμα δεν ήταν εντυπωσιακό. Δεν είχε λαμπερά φώτα ούτε εκρηκτικά εφέ. Αλλά ήταν κάτι που καμία λάμψη δεν αντικαθιστά: ήταν <strong class="text-cyan-200">σταθερό</strong>. Λειτουργούσε. Κάθε γρανάζι γύριζε ομαλά. Κάθε σύνδεση κρατούσε. Δεν ήταν τέλειο — αλλά ήταν <em>αληθινό</em>.</p>
          <p class="mt-3">Ο Φίλιππος πάτησε το κουμπί. Αυτή τη φορά η καρδιά του δεν χτυπούσε από φόβο. Χτυπούσε από γαλήνη. Ο μηχανισμός ξεκίνησε. Η οθόνη φωτίστηκε. Τα φώτα χόρεψαν.</p>
          <p class="mt-3">Η WiseBot εμφανίστηκε ψηλά, στο ράφι, τα μωβ μάτια γεμάτα φως. Η Link κάθισε πλάι, η ουρά σαν εκκρεμές σοφίας.</p>

          <div class="mt-6 bg-gradient-to-r from-cyan-900/30 to-sky-900/20 p-6 rounded-xl border border-cyan-500/20">
            <p class="text-white text-lg font-bold">«Αυτό το λάθος... σας έσωσε από πολλά μελλοντικά.»</p>
            <p class="mt-3 text-cyan-300">«Η ευθύνη δεν είναι βάρος. Είναι η βάση πάνω στην οποία χτίζεται κάθε αληθινή επιτυχία.»</p>
          </div>

          <p class="mt-4">Δεν πανηγύρισαν. Αλλά κοιτάχτηκαν — και στα μάτια τους είδαν κάτι καινούργιο: <strong class="text-cyan-200">σεβασμό</strong>. Για τον εαυτό τους. Για τους άλλους. Για τη διαδικασία.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Το λάθος δεν τους κατέστρεψε. Τους αποκάλυψε. Και μέσα από τα θραύσματα βρήκαν τον εαυτό τους ως ομάδα.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-900/20">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="Η ομάδα ολοκληρωμένη" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-cyan-300/80 italic">Δεν ήταν η νίκη που τους ένωσε. Ήταν η αποτυχία. Και η επιλογή να μην τρέξουν μακριά.</div>
          </div>
        </section>

        <!-- JOURNAL -->
        <div class="mt-14 bg-cyan-950/60 p-8 rounded-3xl border-2 border-dashed border-cyan-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-cyan-300 uppercase tracking-wider">JOURNAL: ΤΟ ΛΑΘΟΣ ΠΟΥ ΜΕ ΒΟΗΘΗΣΕ</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Γράψε. Σκέψου. Νιώσε. Δεν υπάρχει λάθος απάντηση.</p>

          <div class="space-y-6 text-gray-300">
            <div class="bg-black/20 p-5 rounded-xl border border-cyan-500/15">
              <h5 class="text-cyan-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-cyan-600/40 flex items-center justify-center text-xs font-black">1</span>
                ΤΟ ΛΑΘΟΣ
              </h5>
              <p class="text-sm mb-3 opacity-80">Γράψε ένα λάθος που έκανες πρόσφατα. Ένα που σε στενοχώρησε ή σε εξέπληξε:</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-cyan-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-cyan-500/15">
              <h5 class="text-cyan-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-cyan-600/40 flex items-center justify-center text-xs font-black">2</span>
                ΤΟ ΜΑΘΗΜΑ
              </h5>
              <p class="text-sm mb-3 opacity-80">Συμπλήρωσε: «Από αυτό το λάθος έμαθα ότι ________».</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-cyan-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-cyan-500/15">
              <h5 class="text-cyan-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-cyan-600/40 flex items-center justify-center text-xs font-black">3</span>
                Η ΑΛΛΑΓΗ 💎
              </h5>
              <p class="text-sm mb-3 opacity-80">Συμπλήρωσε:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-cyan-500/10 text-cyan-200">
                <p class="text-sm font-medium">«Την επόμενη φορά θα προσέξω να __________»</p>
              </div>
            </div>
          </div>
        </div>

        <!-- MEANING BOX -->
        <div class="mt-8 bg-gradient-to-r from-cyan-900/30 to-sky-900/30 p-6 rounded-2xl border border-cyan-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-cyan-300 uppercase tracking-wider">Το νόημα αυτού του κεφαλαίου</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            Το λάθος δεν σε χαλάει. Σε <strong class="text-cyan-300">αποκαλύπτει</strong>. Σου δείχνει πώς αντιδράς κάτω από πίεση, πώς μιλάς ή σωπαίνεις όταν φοβάσαι, και τι αξίζεις πραγματικά. Η ευθύνη δεν είναι τιμωρία — είναι <strong class="text-sky-300">δύναμη</strong>. Μόνο αυτός που παραδέχεται το λάθος του μπορεί πραγματικά να μάθει από αυτό.
          </p>
        </div>

        <!-- ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-cyan-950/60 p-8 rounded-3xl border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-cyan-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              Τα λάθη δεν χρειάζονται <strong class="text-white">τιμωρία</strong>. Χρειάζονται χώρο για κατανόηση. Η πρώτη αντίδρασή μας καθορίζει αν το παιδί θα φοβηθεί ή θα μάθει.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Έτσι ένα παιδί μαθαίνει να μην φοβάται την ευθύνη, αλλά να την <strong class="text-cyan-300">αναλαμβάνει</strong>. Αν δεν είχε γίνει αυτό το λάθος, δεν θα είχαν γίνει αυτοί.
            </p>
            <div class="mt-4 bg-cyan-900/20 p-4 rounded-xl border border-cyan-500/10">
              <p class="text-sm text-cyan-200 font-medium">💡 Δοκιμάστε σήμερα: Αντί να πείτε «γιατί το έκανες;», ρωτήστε: «Τι νομίζεις ότι πήγε στραβά; Και τι θα έκανες διαφορετικά;»</p>
            </div>
          </div>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- INTRO QUOTE -->
        <div class="relative bg-gradient-to-r from-slate-900 via-cyan-900/60 to-sky-900/40 p-10 rounded-2xl border border-cyan-500/30 text-center shadow-lg shadow-cyan-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Chapter 18</div>
          <p class="italic text-cyan-200 text-xl mt-4 leading-relaxed">"The mistake didn't come to punish you.<br/>It came to show you how you work when you are pressured."</p>
          <div class="mt-4 w-16 h-0.5 bg-cyan-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- SCENE 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-600/30 border border-cyan-500/30 text-cyan-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-cyan-300 tracking-wide">THE "SURE THING"</h3>
          </div>
          <p>The sun was sinking behind the neighborhood rooftops, casting golden shadows across the workshop. Inside, the air was warm and electrified, heavy with the scent of hot solder. The tools were arranged in perfect rows on the workbench. Plans were taped to the wall, covered in notes. Everything looked <em>perfect</em>.</p>
          <p class="mt-3">"This time we've got it," said Philippos with a confidence that made him stand taller than ever. His eyes shone with that particular light that only appeared when he believed in something wholeheartedly. "Look. Every step is marked. Every component checked. Every detail in its place."</p>
          <p class="mt-3">Eleftheria looked up from her notebook. She had spent three days re-reading her notes, checking every calculation. "The numbers work out," she confirmed, but her voice carried a faint shadow of hesitation that no one noticed.</p>
          <p class="mt-3">Alexandra stood further back, near the window. Arms crossed. She was looking at the plans, but something inside her wouldn't settle. An invisible hand tightened around her stomach. "I don't know, guys..." she began. "I feel something... like we're missing something."</p>
          <p class="mt-3">"LET'S GO! Don't ruin it now!" Philippos burst out. "If we start doubting, we'll never finish. Trust the plan."</p>
          <p class="mt-3">Alexandra opened her mouth. But the words dried on her lips. <em>Maybe I'm wrong</em>, she thought. <em>Maybe it's just nerves.</em> She swallowed. Lowered her arms. And nodded.</p>
          <p class="mt-3 text-gray-400 text-sm italic">And they went. Without knowing that the moment Alexandra fell silent was the beginning of a mistake that no one imagined would end up saving them.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-cyan-500/15 shadow-lg shadow-cyan-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="The children preparing" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-cyan-300/80 italic">The team, confident in themselves. But confidence can also blind.</div>
          </div>
        </section>

        <!-- SCENE 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-sky-600/30 border border-sky-500/30 text-sky-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-sky-300 tracking-wide">THE BREAK</h3>
          </div>
          <p>The stage was set. Lights blinked like little stars above their creation. The audience — parents, teachers, children from other teams — sat in a semicircle, eyes full of anticipation.</p>
          <p class="mt-3">Philippos pressed the start button. The first gear turned. The second followed. A light came on at the top. <em>It works</em>, he thought. <em>It really works.</em></p>
          <p class="mt-3">And then — a sound. Like a creak. Like metal scraping metal. <strong class="text-red-400">CRACK.</strong> Something inside the mechanism stopped. Violently. Like a bone snapping. The gears locked. The light flickered and went dark like a candle in the wind. The screen froze on a white square reflecting their faces — surprised, frightened, helpless.</p>
          <p class="mt-3">The audience waited. Someone coughed. The silence that followed was the heaviest they had ever known. Not a silence of calm. A silence of <em>failure</em>.</p>
          <p class="mt-4">Philippos felt his legs trembling. "It's my fault," he whispered brokenly. "I designed the mechanism..."</p>
          <p class="mt-3">Eleftheria squeezed her hands until her nails dug into her palms. "We should have checked again. I knew something wasn't right with the numbers..."</p>
          <p class="mt-3">Alexandra felt her heart sinking like a stone. "I told you," she whispered. "I told you something wasn't right..."</p>
          <p class="mt-3 text-gray-400 text-sm italic">Three children. Three voices. No one listening to each other. The pain of failure makes ears close and mouths open only for accusations.</p>
        </section>

        <!-- SCENE 3 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-red-400 tracking-wide">THE ANGER</h3>
          </div>
          <p>The audience had left. The stage was empty. Only broken pieces remained, scattered like fragments of a dream. The room's light was yellow and weak, shadows stretching along the walls like accusatory pointing fingers.</p>
          <p class="mt-3">He turned abruptly toward Alexandra. "Why didn't you speak louder?" His voice like a knife. "You knew! Why didn't you stop everything?"</p>
          <p class="mt-3">Alexandra blushed. "I tried. But no one listened. You said let's go. You said don't ruin it..."</p>
          <p class="mt-3">Philippos slammed his fist on the table. The sound echoed like thunder. <strong class="text-white">"STOP IT!"</strong> he shouted. "Isn't it bad enough we messed up? Now we're blaming each other too?"</p>
          <p class="mt-3">Eleftheria stood in the corner, hugging her knees. Eyes red, but not crying. She was <em>shut down</em>. Like a door locked from the inside.</p>
          <p class="mt-3">For the first time, no one knew what to say. The words — those that usually connected them — were now weapons. Every sentence an accusation. Every glance an accusation. Even the silence was an accusation.</p>
          <p class="mt-3 text-gray-400 text-sm italic">The darkest moment for any team. Not when they fail. When they start looking for someone to blame.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-red-500/15 shadow-lg shadow-red-900/20">
            <img src="${IMG_FILIPPOS}" alt="Philippos angry" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-red-300/80 italic">The rage after failure. The greatest enemy isn't the mistake — it's the anger.</div>
          </div>
        </section>

        <!-- SCENE 4 — HIGHLIGHTED -->
        <section class="bg-gradient-to-br from-cyan-900/30 via-sky-900/20 to-teal-900/10 p-8 rounded-2xl border-l-4 border-cyan-500 my-8 shadow-xl shadow-cyan-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-600/30 border border-cyan-500/30 text-cyan-300 font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-cyan-400 tracking-wide">LINK DOESN'T HIDE</h3>
          </div>
          <p>No one saw her coming. Link never came with fanfare. She appeared like a breeze — silently, like a wind that knows exactly where to blow.</p>
          <p class="mt-3">The metallic fox stood in the middle of the room. Her eyes — two blue crystals — slowly scanned their faces. Philippos with trembling hands. Alexandra with wet eyes. Eleftheria retreated into her corner like a snail in its shell.</p>
          <p class="mt-3">"The mistake wasn't technical," said Link. Voice calm. Steady. Like a rock in a stormy sea.</p>
          <p class="mt-3">Eleftheria slowly raised her head. "Meaning?"</p>
          <p class="mt-3">"We rushed. We listened to our excitement and ignored the signals. Alexandra spoke — but the excitement was louder. Eleftheria saw something in the numbers — but wanted to believe they were fine. Philippos knew time was pressing — but preferred to run rather than stop."</p>
          <p class="mt-3 text-cyan-200 font-bold text-lg">— "We didn't listen to all the signals. And that's not a technical problem. It's a problem of responsibility."</p>
          <p class="mt-3">The word hung in the air. <em>Responsibility.</em> Heavy as stone. But also necessary as air. Link didn't scold anyone. But her eyes said: <em>If you don't look at this mistake head-on, it will haunt you forever.</em></p>
          <p class="mt-3 text-gray-400 text-sm italic">The fox doesn't hide. Because she knows that truth can hurt, but lies hurt much more.</p>

          <div class="my-8 rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-900/30">
            <img src="${IMG_KIDS_WITH_LINK}" alt="Link speaks to the children" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-cyan-300/80 italic">Link never hides. Not from mistakes. Not from the truth.</div>
          </div>
        </section>

        <!-- SCENE 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-sky-600/30 border border-sky-500/30 text-sky-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-sky-300 tracking-wide">THE ANALYSIS</h3>
          </div>
          <p>They sat around the workbench. Philippos slowly opened the plans. This time not to show how good they were. To <strong>understand</strong> where things went wrong. And that required courage.</p>
          <p class="mt-3">"Here," he said quietly. "Here we didn't leave space. I pressed the parts too close. No breathing room." Voice calm now. Without anger. Just <em>honesty</em>.</p>
          <p class="mt-3">Eleftheria took a deep breath. "And here — we assumed the charge would last. We didn't measure correctly. I wanted the numbers to work so badly that I didn't check them properly."</p>
          <p class="mt-3">Alexandra swallowed. "And here," she said, pointing to a small note with a question mark. "I was afraid to insist. I knew something was wrong. But I thought maybe I was being too much. And instead of speaking up... I went silent."</p>
          <p class="mt-4">The silence was different now. Not anger. <em>Understanding.</em> Each child saw themselves inside the mistake — not as a victim, but as a <strong class="text-cyan-200">part of it</strong>. And this didn't weaken them. It freed them.</p>
          <p class="mt-3 text-gray-400 text-sm italic">The weight is never the mistake itself. It's avoiding it. When you stop running, you discover it didn't weigh as much as you thought.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-sky-500/15 shadow-lg shadow-sky-900/20">
            <img src="${IMG_ALEXANDRA}" alt="Alexandra recognizes the mistake" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-sky-300/80 italic">Seeing yourself inside the mistake isn't weakness. It's courage.</div>
          </div>
        </section>

        <!-- SCENE 6 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-600/30 border border-cyan-500/30 text-cyan-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-cyan-300 tracking-wide">THE LESSON</h3>
          </div>
          <p>WiseBot appeared without warning. She didn't glow this time. She came softly, like a thought awakening in the night. Her purple eyes were lowered — as if she knew exactly what they were going through.</p>
          <p class="mt-3">She perched on the edge of the bench. She didn't speak immediately. She waited. Because WiseBot knew something the children were just learning: sometimes the wisest move is to <em>not rush</em>.</p>
          <p class="mt-4">"This mistake," she said finally, "didn't come to punish you."</p>

          <div class="my-6 bg-gradient-to-r from-cyan-900/40 to-sky-900/40 p-8 rounded-2xl border border-cyan-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">"It came to show you<br/><span class="text-cyan-300">how you work when you are pressured.</span>"</p>
          </div>

          <p class="mt-4">The words hung like crystals. They stung — but the sting was like alcohol on a wound: it burns, but it cleanses.</p>
          <p class="mt-3">"Every team will make mistakes," she continued. "But what you can change is how you respond. You can blame. You can hide. Or you can <strong class="text-cyan-300">take responsibility</strong>. Look at what went wrong. Say: that was <em>mine</em>. And then — only then — change."</p>
          <p class="mt-3">She looked at the children. Looked at every crack in their faces. And she smiled — with her eyes. A smile full of <em>trust</em>.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Responsibility is not punishment. It's power. Only the one who admits they could have done better can truly become better.</p>
        </section>

        <!-- SCENE 7 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-sky-600/30 border border-sky-500/30 text-sky-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-sky-300 tracking-wide">THE TRUTH</h3>
          </div>
          <p>Minutes passed. But something had shifted. The anger had melted like snow under a warm sun. In its place came not joy — but something more substantial. <em>Honesty</em> came.</p>
          <p class="mt-3">Eleftheria spoke first. "We didn't wait for each other. We each ran alone. I buried myself in the numbers without asking if the others were ready."</p>
          <p class="mt-3">Philippos took a deep breath — like those after crying, even if you didn't actually cry. "I wanted it to finish quickly. I wanted to succeed so badly that I didn't care if we were ready. I only cared if we were <em>fast</em>."</p>
          <p class="mt-3">Alexandra slowly raised her gaze. Looked at her friends — truly, in their eyes. "And me — I didn't trust my voice. I knew something was wrong. But I was afraid that if I spoke, I'd disappoint you. And instead of shouting... I went silent."</p>
          <p class="mt-4 font-bold text-gray-300">It wasn't accusation. It was <em>clarity</em>. Like a window wiped clean after rain.</p>
          <p class="mt-3">Link leaned forward. "See? That's responsibility. It's not shouting 'it's my fault' and crying. It's saying: 'that was mine' — and then asking: 'what can I do better?'"</p>
          <p class="mt-3 text-gray-400 text-sm italic">The truth doesn't hurt as much as you think. What truly hurts is hiding it.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-sky-500/15 shadow-lg shadow-sky-900/20">
            <img src="${IMG_ELEFTHERIA}" alt="Eleftheria speaks with honesty" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-sky-300/80 italic">The first to speak. The first to dare.</div>
          </div>
        </section>

        <!-- SCENE 8 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-600/30 border border-teal-500/30 text-teal-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-teal-300 tracking-wide">THE RE-DO</h3>
          </div>
          <p>They didn't build something new right away. They didn't throw the broken pieces away. They kept them. Placed them in the middle of the table. Looked at them.</p>
          <p class="mt-3">"First we fix the <strong>way</strong>," said Eleftheria. "Then we fix the thing."</p>
          <p class="mt-3">They talked. Really talked. Slowly. With patience. Philippos asked: "What do you feel? If something doesn't sit right, I want to hear it — even if it slows me down." Alexandra looked at him in surprise. No one had ever said something like that to her.</p>
          <p class="mt-3">Eleftheria didn't dive into the numbers alone. She showed the calculations. "Does this make sense?" Philippos shook his head. And instead of getting frustrated, she <em>smiled</em>. "Wait, I'll explain it differently."</p>
          <p class="mt-3">They stopped when something didn't fit. They stopped when Alexandra felt that familiar sting again. "Wait," she said. And this time, they <strong class="text-cyan-200">waited</strong>.</p>
          <p class="mt-3">Link watched. Her eyes a soft blue light, steady and warm. She didn't need to say anything.</p>
          <p class="mt-4 text-cyan-300 font-bold text-lg">— "Now you're working like a team," she said softly.</p>
          <p class="mt-3 text-gray-400 text-sm italic">They didn't change the plan. They changed how they worked together. And that was far more important.</p>
        </section>

        <!-- SCENE 9 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-600/30 border border-cyan-500/30 text-cyan-300 font-black text-sm">09</span>
            <h3 class="text-2xl font-black text-cyan-300 tracking-wide">THE RESULT</h3>
          </div>
          <p>The new creation wasn't impressive. No flashy lights. No explosive effects. But it was something no sparkle can replace: it was <strong class="text-cyan-200">solid</strong>. It worked. Every gear turned smoothly. Every connection held. It wasn't perfect — but it was <em>real</em>.</p>
          <p class="mt-3">Philippos pressed the button. This time his heart didn't beat from fear. It beat from serenity. The mechanism started. The screen lit up. The lights danced.</p>
          <p class="mt-3">WiseBot appeared high up, on the shelf, purple eyes full of light. Link sat alongside, tail swaying like a pendulum of wisdom.</p>

          <div class="mt-6 bg-gradient-to-r from-cyan-900/30 to-sky-900/20 p-6 rounded-xl border border-cyan-500/20">
            <p class="text-white text-lg font-bold">"This mistake... saved you from many future ones."</p>
            <p class="mt-3 text-cyan-300">"Responsibility is not a burden. It is the foundation upon which every real success is built."</p>
          </div>

          <p class="mt-4">They didn't celebrate. But they looked at each other — and in their eyes they saw something new: <strong class="text-cyan-200">respect</strong>. For themselves. For each other. For the process.</p>
          <p class="mt-3 text-gray-400 text-sm italic">The mistake didn't destroy them. It revealed them. And among the fragments they found themselves as a team.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-900/20">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="The team complete" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-cyan-300/80 italic">It wasn't the victory that united them. It was the failure. And the choice not to run away.</div>
          </div>
        </section>

        <!-- JOURNAL -->
        <div class="mt-14 bg-cyan-950/60 p-8 rounded-3xl border-2 border-dashed border-cyan-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-cyan-300 uppercase tracking-wider">JOURNAL: THE MISTAKE THAT HELPED ME</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Write. Think. Feel. There is no wrong answer.</p>

          <div class="space-y-6 text-gray-300">
            <div class="bg-black/20 p-5 rounded-xl border border-cyan-500/15">
              <h5 class="text-cyan-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-cyan-600/40 flex items-center justify-center text-xs font-black">1</span>
                THE MISTAKE
              </h5>
              <p class="text-sm mb-3 opacity-80">Write a mistake you made recently. One that upset or surprised you:</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-cyan-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-cyan-500/15">
              <h5 class="text-cyan-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-cyan-600/40 flex items-center justify-center text-xs font-black">2</span>
                THE LESSON
              </h5>
              <p class="text-sm mb-3 opacity-80">Complete: "From this mistake I learned that ________".</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-cyan-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-cyan-500/15">
              <h5 class="text-cyan-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-cyan-600/40 flex items-center justify-center text-xs font-black">3</span>
                THE CHANGE 💎
              </h5>
              <p class="text-sm mb-3 opacity-80">Complete:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-cyan-500/10 text-cyan-200">
                <p class="text-sm font-medium">"Next time I will be careful to __________"</p>
              </div>
            </div>
          </div>
        </div>

        <!-- MEANING BOX -->
        <div class="mt-8 bg-gradient-to-r from-cyan-900/30 to-sky-900/30 p-6 rounded-2xl border border-cyan-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-cyan-300 uppercase tracking-wider">The Meaning of This Chapter</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            The mistake doesn't break you. It <strong class="text-cyan-300">reveals</strong> you. It shows how you react under pressure, how you speak or stay silent when afraid, and what you're truly worth. Responsibility is not punishment — it's <strong class="text-sky-300">power</strong>. Only the one who admits their mistake can truly learn from it.
          </p>
        </div>

        <!-- MESSAGE FOR PARENTS -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-cyan-950/60 p-8 rounded-3xl border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-cyan-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              Mistakes don't need <strong class="text-white">punishment</strong>. They need space for understanding. Our first reaction determines whether a child will fear the mistake or learn from it.
            </p>
            <p class="text-gray-300 leading-relaxed">
              This is how a child learns not to fear responsibility, but to <strong class="text-cyan-300">embrace</strong> it. If this mistake hadn't happened, they wouldn't have become who they are.
            </p>
            <div class="mt-4 bg-cyan-900/20 p-4 rounded-xl border border-cyan-500/10">
              <p class="text-sm text-cyan-200 font-medium">💡 Try today: Instead of saying "why did you do that?", ask: "What do you think went wrong? And what would you do differently?"</p>
            </div>
          </div>
        </div>

      </div>
    `
    }
  }
];
