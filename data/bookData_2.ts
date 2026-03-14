
import { Book } from '../types';

// ============================================================
// 📖 BOOK 2: ΠΑΜΕ! / LET'S GO!
// Hero: Crocus (ο κροκόδειλος)
// Theme: ΔΡΑΣΗ / ACTION
// ============================================================

// Cover image
const IMG_CROCUS = "/images/crocus.jpg";

// Story images
const IMG_KIDS_WITH_CROCUS = "/images/paidia-kai-crocus.png";
const IMG_KIDS_TOGETHER = "/images/ta-3-paidia.png";

export const BOOK_2: Book[] = [
  {
    id: 2,
    title: { el: "ΠΑΜΕ!", en: "LET'S GO!" },
    theme: { el: "ΔΡΑΣΗ", en: "ACTION" },
    stepLabel: { el: "CROCUS & Η ΔΡΑΣΗ", en: "CROCUS & ACTION" },
    author: "Crocus",
    cover: IMG_CROCUS,
    videoUrl: "",
    description: {
      el: "Η θεωρία τελείωσε. Ο Crocus μπαίνει στο δωμάτιο και πετάει τα σχέδια κάτω. Μια ιστορία για τη στιγμή που σταματάς να σκέφτεσαι και ξεκινάς.",
      en: "Theory is over. Crocus enters the room and throws the plans down. A story about the moment you stop thinking and start."
    },
    meaning: {
      el: "Η ιδέα θέλει σκέψη. Η σκέψη θέλει απόφαση. Η απόφαση θέλει ΠΑΜΕ.",
      en: "The idea needs thought. Thought needs decision. Decision needs LET'S GO."
    },
    xp: 120,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- ΕΙΣΑΓΩΓΙΚΟ QUOTE -->
        <div class="relative bg-gradient-to-r from-lime-900/80 via-green-900/60 to-emerald-900/40 p-10 rounded-2xl border border-lime-500/30 text-center shadow-lg shadow-lime-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-lime-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Κεφάλαιο 2</div>
          <p class="italic text-lime-200 text-xl mt-4 leading-relaxed">«Η απόφαση χωρίς κίνηση<br/>είναι απλώς θέατρο.»</p>
          <div class="mt-4 w-16 h-0.5 bg-lime-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- ΣΚΗΝΗ 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-lime-600/30 border border-lime-500/30 text-lime-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-lime-400 tracking-wide">Η ΙΔΕΑ ΠΟΥ ΚΟΛΛΗΣΕ</h3>
          </div>
          <p>Η ιδέα ήταν εκεί. Στη μέση του τραπεζιού. Χαρτιά απλωμένα σαν χάρτης θησαυρού χωρίς Χ. Μολύβια μασουλημένα στις μύτες. Σχέδια πάνω σε σχέδια πάνω σε διαγραμμένα σχέδια — σαν αρχαιολογικά στρώματα αναποφασιστικότητας.</p>
          <p class="mt-3">Η Αλεξάνδρα κοιτούσε το χαρτί σαν να ήταν καθρέφτης. «Νομίζω ότι…» ξεκίνησε. Σταμάτησε. Δάγκωσε τα χείλη της.</p>
          <p class="mt-3 text-gray-400">— «Περίμενε», είπε η Ελευθερία χωρίς να σηκώσει τα μάτια. Τα δάχτυλά της τρέχαν πάνω σε γραμμές ενός βιβλίου. «Να το σκεφτούμε λίγο ακόμα. Δεν έχουμε υπολογίσει το ρίσκο.»</p>
          <p class="mt-3">Ο Φίλιππος πήγε να μιλήσει. Άνοιξε το στόμα. Το έκλεισε. <strong>Κάτι τους κρατούσε.</strong> Σαν αόρατο σχοινί δεμένο στα πόδια τους. Η ιδέα ήταν εκεί — αλλά κανείς δεν τολμούσε να την αγγίξει.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Κι αυτό είναι το πιο επικίνδυνο μέρος μιας ιδέας: εκείνο ακριβώς πριν γίνει πράξη. Εκεί που ο φόβος φωνάζει πιο δυνατά.</p>
        </section>

        <!-- ΣΚΗΝΗ 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-600/30 border border-gray-500/30 text-gray-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-gray-400 tracking-wide">Ο ΚΥΚΛΟΣ</h3>
          </div>
          <p>Πέρασε μία ώρα. Μετά άλλη μία. Το ρολόι στον τοίχο τους κοιτούσε σαν δικαστής. <em>Τικ. Τοκ.</em> Κάθε δευτερόλεπτο μια ψηφοφορία ενάντιά τους.</p>
          <p class="mt-3">«Δεν είπαμε κάτι καινούργιο», μουρμούρισε ο Φίλιππος. Το πρόσωπό του ήταν κόκκινο. Τα δάχτυλά του σφίγγαν ένα μολύβι που είχε ήδη σπάσει στα δύο.</p>
          <p class="mt-3">Η Ελευθερία σήκωσε τις σημειώσεις της. Ήταν παντού — στο τραπέζι, στο πάτωμα, κολλημένες στον τοίχο. «Ναι, αλλά τώρα <em>καταλαβαίνουμε</em> καλύτερα», είπε. Η φωνή της ήταν σίγουρη. Τα χέρια της όχι.</p>
          <p class="mt-4">Η Αλεξάνδρα ένιωσε κάτι να σφίγγει μέσα της. Σαν ελατήριο που πιέζεται πολύ. Σηκώθηκε αργά.</p>
          <p class="mt-3"><strong class="text-lime-200 text-lg">«Κι αν το καταλαβαίνουμε για πάντα… χωρίς να το κάνουμε ποτέ;»</strong></p>
          <p class="mt-4">Η WiseBot εμφανίστηκε στη γωνία. Ήσυχη. Ακίνητη. Δεν μίλησε. Μόνο <em>παρατηρούσε</em>. Και η σιωπή της ήταν πιο δυνατή από χίλιες λέξεις.</p>
        </section>

        <!-- ΣΚΗΝΗ 3 — ΜΠΑΜ! -->
        <section class="bg-gradient-to-br from-lime-900/30 via-green-900/20 to-emerald-900/10 p-8 rounded-2xl border-l-8 border-lime-500 my-8 shadow-xl shadow-lime-900/20">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-lime-400/40 text-white font-black text-sm">03</span>
            <h3 class="text-3xl font-black text-white tracking-wide">ΜΠΑΜ!</h3>
          </div>
          <p>Η πόρτα δεν άνοιξε. <strong>Εκτοξεύτηκε.</strong></p>
          <p class="mt-3">ΜΠΑΑΜ! Χτύπησε τον τοίχο. Τα χαρτιά πέταξαν σαν φύλλα σε καταιγίδα. Το μολύβι του Φίλιππου έκανε τούμπα στον αέρα. Η Ελευθερία πήδηξε από τη θέση της.</p>
          <p class="mt-4">Στο κατώφλι στεκόταν ένας <strong class="text-lime-300">μηχανικός κροκόδειλος</strong>.</p>
          <p class="mt-3">Ψηλός. Πράσινος σαν δάσος μετά τη βροχή. Γυαλιά στραβά — σαν να μην τον ένοιαζε να τα φτιάξει. Στάση χαλαρή, ένα χέρι στην τσέπη. Μάτια που <em>γελούσαν</em>… αλλά κάπου, πίσω από το γέλιο, κρύβονταν σημάδια. Σαν κάποιος που είχε πέσει πολλές φορές — αλλά σηκωνόταν πάντα.</p>

          <!-- ΕΙΚΟΝΑ: KIDS + CROCUS -->
          <div class="my-8 rounded-2xl overflow-hidden border border-lime-500/20 shadow-2xl shadow-lime-900/30">
            <img src="${IMG_KIDS_WITH_CROCUS}" alt="Τα παιδιά συναντούν τον Crocus" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-lime-300/80 italic">Η στιγμή που ο Crocus μπήκε στο δωμάτιο</div>
          </div>

          <p class="mt-4 text-lime-300 font-bold text-lg">— «Ωραία. Θα το συζητάμε ή θα το κάνουμε;»</p>
          <p class="mt-3">Η Αλεξάνδρα πετάχτηκε. «Ποιος είσαι εσύ;!»</p>
          <p class="mt-3">Ο κροκόδειλος χαμογέλασε. Ένα χαμόγελο πλατύ, γεμάτο δόντια — αλλά όχι τρομακτικό. Περισσότερο σαν… πρόσκληση.</p>
          <p class="mt-3">— «Εγώ; Είμαι αυτός που έρχεται όταν όλοι έχουν κουραστεί να <em>σκέφτονται</em>. Λέγομαι <strong class="text-lime-200 text-xl">Crocus</strong>.»</p>
        </section>

        <!-- ΣΚΗΝΗ 4 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-green-600/30 border border-green-500/30 text-green-300 font-black text-sm">04</span>
            <h3 class="text-2xl font-black text-green-400 tracking-wide">ΠΑΜΕ</h3>
          </div>
          <p>Ο Crocus έκανε δύο βήματα μέσα. Κάθε βήμα ακούστηκε σαν τύμπανο. Σταμάτησε μπροστά στο τραπέζι. Κοίταξε τα χαρτιά — τα σχέδια, τις σημειώσεις, τα λίστες, τα βέλη.</p>
          <p class="mt-3">«Λοιπόν», είπε ήρεμα. «Τι φτιάχνετε;»</p>
          <p class="mt-3">Η Ελευθερία ανασηκώθηκε. Πήρε μια βαθιά ανάσα. Άρχισε να εξηγεί: «Λοιπόν, η αρχική ιδέα ήταν να—»</p>
          <p class="mt-3">Πριν τελειώσει—</p>
          <p class="mt-4 text-white font-bold text-xl">— «Τέλειο. ΠΑΜΕ.»</p>
          <p class="mt-3 text-gray-400">— «Περίμενε!» είπε η Ελευθερία. Τα μάτια της γούρλωσαν. «Δεν έχουμε αποφασίσει! Δεν ξέρουμε ακόμα αν—»</p>
          <p class="mt-3">Ο Crocus γέλασε. Ένα γέλιο χαμηλό, ζεστό, σαν μηχανή που παίρνει μπροστά. Έσκυψε μπροστά και κοίταξε τα τρία παιδιά στα μάτια.</p>
          <p class="mt-4"><strong class="text-lime-300 text-lg">«Αποφασίσατε. Απλώς φοβάστε να το πείτε δυνατά.»</strong></p>
          <p class="mt-3 text-gray-400 text-sm italic">Και είχε δίκιο. Γιατί η απόφαση δεν είναι στιγμή. Είναι κάτι που μεγαλώνει αργά μέσα σου — και μια μέρα, κάποιος σου δίνει άδεια να το πεις.</p>
        </section>

        <!-- ΣΚΗΝΗ 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-fuchsia-600/30 border border-fuchsia-500/30 text-fuchsia-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-fuchsia-400 tracking-wide">Η ΚΟΝΤΡΑ</h3>
          </div>
          <p>Η WiseBot πλησίασε. Πέταξε αργά από τη γωνία, σαν σκέψη που παίρνει μορφή. Το φως της ήρεμο, σαν κερί. Ακούμπησε στο τραπέζι, δίπλα στον Crocus.</p>
          <p class="mt-3">Δύο κόσμοι. Δύο ενέργειες. Η μία σταθερή σαν βράχος. Ο άλλος αδύνατον να μείνει ακίνητος.</p>
          <p class="mt-4">«Η σκέψη είναι δύναμη», είπε η WiseBot. «Χωρίς σκέψη, η δράση είναι χαοτική. Χωρίς απόφαση, η σκέψη μένει <em>βάρος</em>.»</p>
          <p class="mt-3">Ο Crocus σταύρωσε τα μεταλλικά χέρια του. Τα γυαλιά του γυάλισαν στο φως.</p>
          <p class="mt-3"><strong class="text-lime-400 text-lg">«Κι η απόφαση χωρίς κίνηση είναι θέατρο.»</strong></p>
          <p class="mt-4">Κοίταξε τα παιδιά. Η φωνή του ήταν χαμηλή τώρα. Σοβαρή. «Διαλέξτε. Θα μιλάτε γι' αυτό… ή θα το κάνετε;»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η WiseBot δεν αντέδρασε. Γιατί ήξερε ότι ο Crocus δεν είχε άδικο. Και ο Crocus ήξερε ότι η WiseBot δεν είχε λάθος. Μερικές φορές οι πιο σοφοί δάσκαλοι είναι αυτοί που διαφωνούν μπροστά σου.</p>
        </section>

        <!-- ΣΚΗΝΗ 6 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-600/30 border border-gray-500/30 text-gray-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-gray-300 tracking-wide">ΟΙ ΔΙΑΙΤΗΤΕΣ</h3>
          </div>
          <p>Η Αλεξάνδρα κοίταξε τη WiseBot. Ένιωσε <em>ασφαλής</em>. Η WiseBot ήταν σοφία. Ηρεμία. Γνώση.</p>
          <p class="mt-3">Μετά κοίταξε τον Crocus. Ένιωσε <em>ζωντανή</em>. Ο Crocus ήταν φωτιά. Κίνηση. Τόλμη.</p>
          <p class="mt-4">— «Και οι δύο έχετε δίκιο», είπε διστακτικά. Η φωνή της βγήκε πιο δυνατή απ' ό,τι περίμενε.</p>
          <p class="mt-3">Ο Φίλιππος συμφώνησε. Σφίχτηκε η γροθιά του. «Αν δεν ξεκινήσουμε, δεν θα μάθουμε ποτέ. Θα μιλάμε για πάντα.»</p>
          <p class="mt-3">Η Ελευθερία πήρε βαθιά ανάσα. Τα χέρια της τρέμαν ελαφρά. «Αλλά αν ξεκινήσουμε χωρίς να σκεφτούμε… θα χαθούμε. Θα σπαταλήσουμε τα πάντα.»</p>
          <p class="mt-4">Ο Crocus χαμογέλασε πλατιά. Αυτή τη φορά, το χαμόγελό του δεν ήταν πρόκληση. Ήταν <em>περηφάνια</em>.</p>
          <p class="mt-3 text-lime-300 font-bold text-lg">«Τώρα μιλάτε σωστά.»</p>
        </section>

        <!-- ΣΚΗΝΗ 7 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-gray-500/30 text-white font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-white tracking-wide">ΤΟ ΠΡΩΤΟ ΒΗΜΑ</h3>
          </div>
          <p>Δεν έφτιαξαν κάτι μεγάλο. Ούτε εντυπωσιακό. Ούτε αυτό που είχαν φανταστεί.</p>
          <p class="mt-3">Έφτιαξαν κάτι μικρό. Ένα απλό κομμάτι. Μια δοκιμή. Ένα «βλέπουμε αν δουλεύει». Ένα πρώτο, τρεμάμενο βήμα σαν μωρό που πατά στο πάτωμα για πρώτη φορά.</p>
          <p class="mt-4">Ο Φίλιππος το κράτησε στα χέρια του. Ζύγισε. Γύρισε. Ξαναγύρισε.</p>
          <p class="mt-3">«Δεν είναι τέλειο», είπε σιγά.</p>
          <p class="mt-4 text-lime-300 font-bold">— «Ούτε πρέπει», είπε ο Crocus. Η φωνή του ήταν ήρεμη τώρα. Σαν πατέρας που μιλά σε παιδί που μόλις πρωτοπερπάτησε.</p>
          <p class="mt-3 text-lime-200">«Δεν χρειάζεται να είναι τέλειο. Χρειάζεται να <em>υπάρχει</em>. Είναι αρκετό για να ξεκινήσει ο δρόμος.»</p>
        </section>

        <!-- ΣΚΗΝΗ 8 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-red-400 tracking-wide">ΤΟ ΛΑΘΟΣ</h3>
          </div>
          <p>Λίγο αργότερα, κάτι δεν δούλεψε. Ένα κομμάτι ξεκόλλησε. Ένα κύκλωμα δεν έκλεισε. Ένα χρώμα δεν ταίριαξε.</p>
          <p class="mt-3">Η Ελευθερία πετάχτηκε. «Σας τα έλεγα! Αν είχαμε σκεφτεί λίγο ακόμα—»</p>
          <p class="mt-3">«Αν δεν ξεκινούσαμε, δεν θα το ξέραμε ΠΟΤΕπού χαλάει!» απάντησε ο Crocus. Η φωνή του δεν ήταν θυμωμένη. Ήταν <em>σίγουρη</em>.</p>
          <p class="mt-4">Η Αλεξάνδρα μπήκε ανάμεσά τους. Ήρεμα. Σταθερά. Με φωνή που δεν αναγνώρισε ούτε η ίδια:</p>
          <p class="mt-3"><strong class="text-white text-xl">«ΣΤΟΠ. Ξεκινήσαμε. Και μάθαμε. Αυτό αρκεί.»</strong></p>
          <p class="mt-4">Η WiseBot, από τη γωνία, <em>χαμογέλασε</em>. Ίσως φανταστικά. Ίσως αληθινά. Τα μάτια της έλαμψαν δύο φορές. Σαν να πατήθηκε ένα κουμπί. Σαν να ξεκλειδώθηκε κάτι.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Το πρώτο λάθος δεν είναι αποτυχία. Είναι η πρώτη απόδειξη ότι δοκίμασες κάτι αληθινό.</p>
        </section>

        <!-- ΣΚΗΝΗ 9 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-lime-600/30 border border-lime-500/30 text-lime-300 font-black text-sm">09</span>
            <h3 class="text-2xl font-black text-lime-400 tracking-wide">ΤΟ ΝΑΙ ΠΟΥ ΜΕΝΕΙ</h3>
          </div>
          <p>Το βράδυ, τα χαρτιά ήταν περισσότερα. Πολύ περισσότερα. Αλλά αυτή τη φορά δεν ήταν πιο καθαρά. Ήταν πιο <em>αληθινά</em>. Είχαν λεκέδες, σβησμένα, τρύπες. Είχαν ζωή.</p>
          <p class="mt-3">Το τραπέζι ήταν χάος. Αλλά μέσα στο χάος, υπήρχε κάτι καινούργιο: <strong class="text-lime-200">κατεύθυνση</strong>.</p>
          <p class="mt-4">Ο Crocus στάθηκε στο κατώφλι. Δεν γύρισε ολόκληρος. Μόνο το κεφάλι. Τα γυαλιά του γυάλισαν στο φως του ηλιοβασιλέματος που μπήκε από το παράθυρο.</p>
          <p class="mt-3 text-white font-medium text-lg">«Τώρα μιλάτε σαν δημιουργοί», είπε.</p>
          <p class="mt-3">Και βγήκε. Η πόρτα δεν χτύπησε δυνατά αυτή τη φορά. Έκλεισε σιγά. Σαν υπόσχεση ότι θα ξαναρθεί.</p>

          <!-- ΕΙΚΟΝΑ: ΤΑ 3 ΠΑΙΔΙΑ -->
          <div class="mt-6 rounded-2xl overflow-hidden border border-lime-500/20 shadow-2xl shadow-lime-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="Τα 3 παιδιά μετά το πρώτο βήμα" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-lime-300/80 italic">Δεν ήταν πια τα ίδια παιδιά. Είχαν κάνει κάτι.</div>
          </div>

          <p class="mt-4 text-gray-400 text-sm italic">Μερικά "ΠΑΜΕ" δεν χρειάζονται αιτιολόγηση. Χρειάζονται απλά κάποιον που θα τα πει δυνατά — ώστε εσύ να τολμήσεις να τρέξεις.</p>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-lime-950/60 p-8 rounded-3xl border-2 border-dashed border-lime-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">🐊</span>
            <h4 class="text-xl font-black text-lime-300 uppercase tracking-wider">JOURNAL: ΤΟ ΠΡΩΤΟ ΠΑΜΕ</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Η δράση δεν θέλει τελειότητα. Θέλει αρχή.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-lime-500/15">
              <h5 class="text-lime-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-lime-600/40 flex items-center justify-center text-xs font-black">1</span>
                ΤΟ ΚΟΛΛΗΜΑ
              </h5>
              <p class="text-sm mb-3 opacity-80">Τι σκέφτεσαι εδώ και καιρό αλλά δεν ξεκινάς; Τι σε κρατάει πίσω;</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-lime-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-lime-500/15">
              <h5 class="text-lime-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-lime-600/40 flex items-center justify-center text-xs font-black">2</span>
                Η ΚΙΝΗΣΗ
              </h5>
              <p class="text-sm mb-3 opacity-80">Τι ΕΝΑ μικρό βήμα μπορείς να κάνεις ΣΗΜΕΡΑ; (Μόνο ένα. Τίποτα περισσότερο.)</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-lime-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-lime-500/15">
              <h5 class="text-lime-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-lime-600/40 flex items-center justify-center text-xs font-black">3</span>
                Η ΣΥΜΦΩΝΙΑ
              </h5>
              <p class="text-sm mb-3 opacity-80">Συμπλήρωσε:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-lime-500/10 text-lime-200">
                <p class="text-sm font-medium">«Δεν χρειάζεται να είναι τέλειο.</p>
                <p class="text-sm font-medium">Χρειάζεται να __________.»</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΝΟΗΜΑ / MEANING BOX -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-r from-green-900/30 to-lime-900/30 p-6 rounded-2xl border border-green-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-green-300 uppercase tracking-wider">Το νόημα αυτού του κεφαλαίου</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            Η υπερβολική σκέψη μοιάζει με ασφάλεια. Αλλά συχνά είναι <strong class="text-lime-300">φόβος μεταμφιεσμένος σε λογική</strong>. Ο Crocus δεν ήρθε να καταργήσει τη σκέψη — ήρθε να της δώσει <strong class="text-green-300">πόδια</strong>. Γιατί μια ιδέα χωρίς δράση είναι σαν φτερά χωρίς αέρα.
          </p>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-lime-950/60 p-8 rounded-3xl border border-lime-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-lime-500/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-lime-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              Η υπερβολική σκέψη μοιάζει με <strong class="text-white">προσοχή</strong>, αλλά συχνά είναι φόβος. Τα παιδιά χρειάζονται άδεια να ξεκινήσουν <em>ατελά</em>.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Όταν δώσουμε στα παιδιά <strong class="text-lime-300">άδεια να ξεκινήσουν άτσαλα</strong>, τους δίνουμε θάρρος ζωής. Η WiseBot έμεινε. Ο Crocus έφυγε. Αλλά η φωνή του <em>έμεινε</em>: <strong class="text-white">«ΠΑΜΕ.»</strong>
            </p>
            <div class="mt-4 bg-lime-900/20 p-4 rounded-xl border border-lime-500/10">
              <p class="text-sm text-lime-200 font-medium">💡 Δοκιμάστε σήμερα: Όταν το παιδί σας λέει "δεν είμαι σίγουρος/η", πείτε του: «Δεν χρειάζεται να είσαι σίγουρος. Χρειάζεται να ξεκινήσεις.»</p>
            </div>
          </div>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- INTRO QUOTE -->
        <div class="relative bg-gradient-to-r from-lime-900/80 via-green-900/60 to-emerald-900/40 p-10 rounded-2xl border border-lime-500/30 text-center shadow-lg shadow-lime-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-lime-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Chapter 2</div>
          <p class="italic text-lime-200 text-xl mt-4 leading-relaxed">"Decision without movement<br/>is just theater."</p>
          <div class="mt-4 w-16 h-0.5 bg-lime-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- SCENE 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-lime-600/30 border border-lime-500/30 text-lime-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-lime-400 tracking-wide">THE STUCK IDEA</h3>
          </div>
          <p>The idea was there. In the middle of the table. Papers spread out like a treasure map without an X. Pencils chewed at the tips. Sketches on top of sketches on top of erased sketches — like archaeological layers of indecision.</p>
          <p class="mt-3">Alexandra stared at the paper as if it were a mirror. "I think that…" she started. Stopped. Bit her lip.</p>
          <p class="mt-3 text-gray-400">— "Wait," said Eleftheria without raising her eyes. Her fingers ran across lines of a book. "Let's think about it a bit more. We haven't calculated the risk."</p>
          <p class="mt-3">Philippos went to speak. He opened his mouth. Closed it. <strong>Something was holding them back.</strong> Like an invisible rope tied to their feet. The idea was there — but no one dared to touch it.</p>
          <p class="mt-3 text-gray-400 text-sm italic">And this is the most dangerous part of an idea: right before it becomes action. Where fear shouts the loudest.</p>
        </section>

        <!-- SCENE 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-600/30 border border-gray-500/30 text-gray-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-gray-400 tracking-wide">THE CIRCLE</h3>
          </div>
          <p>An hour passed. Then another. The clock on the wall watched them like a judge. <em>Tick. Tock.</em> Every second a vote against them.</p>
          <p class="mt-3">"We haven't said anything new," mumbled Philippos. His face was red. His fingers gripped a pencil that had already snapped in two.</p>
          <p class="mt-3">Eleftheria held up her notes. They were everywhere — on the table, on the floor, stuck to the wall. "Yes, but now we <em>understand</em> it better," she said. Her voice was certain. Her hands were not.</p>
          <p class="mt-4">Alexandra felt something tighten inside her. Like a spring pressed too hard. She rose slowly.</p>
          <p class="mt-3"><strong class="text-lime-200 text-lg">"What if we understand it forever… without ever doing it?"</strong></p>
          <p class="mt-4">WiseBot appeared in the corner. Quiet. Still. She didn't speak. She only <em>watched</em>. And her silence was louder than a thousand words.</p>
        </section>

        <!-- SCENE 3 — BANG! -->
        <section class="bg-gradient-to-br from-lime-900/30 via-green-900/20 to-emerald-900/10 p-8 rounded-2xl border-l-8 border-lime-500 my-8 shadow-xl shadow-lime-900/20">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-lime-400/40 text-white font-black text-sm">03</span>
            <h3 class="text-3xl font-black text-white tracking-wide">BANG!</h3>
          </div>
          <p>The door didn't open. It <strong>launched</strong>.</p>
          <p class="mt-3">BANG! It slammed against the wall. Papers flew like leaves in a storm. Philippos's pencil did a somersault in the air. Eleftheria jumped from her seat.</p>
          <p class="mt-4">In the doorway stood a <strong class="text-lime-300">mechanical crocodile</strong>.</p>
          <p class="mt-3">Tall. Green like a forest after rain. Crooked glasses — as if he didn't care to fix them. Relaxed stance, one hand in his pocket. Eyes that <em>laughed</em>… but somewhere behind the laughter, there were marks. Like someone who had fallen many times — but always got back up.</p>

          <!-- IMAGE: KIDS + CROCUS -->
          <div class="my-8 rounded-2xl overflow-hidden border border-lime-500/20 shadow-2xl shadow-lime-900/30">
            <img src="${IMG_KIDS_WITH_CROCUS}" alt="The children meet Crocus" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-lime-300/80 italic">The moment Crocus entered the room</div>
          </div>

          <p class="mt-4 text-lime-300 font-bold text-lg">— "Great. Are we going to discuss it or do it?"</p>
          <p class="mt-3">Alexandra jumped. "Who are you?!"</p>
          <p class="mt-3">The crocodile smiled. A wide smile, full of teeth — but not scary. More like… an invitation.</p>
          <p class="mt-3">— "Me? I am the one who comes when everyone is tired of <em>thinking</em>. My name is <strong class="text-lime-200 text-xl">Crocus</strong>."</p>
        </section>

        <!-- SCENE 4 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-green-600/30 border border-green-500/30 text-green-300 font-black text-sm">04</span>
            <h3 class="text-2xl font-black text-green-400 tracking-wide">LET'S GO</h3>
          </div>
          <p>Crocus took two steps inside. Each step sounded like a drum. He stopped in front of the table. Looked at the papers — the plans, the notes, the lists, the arrows.</p>
          <p class="mt-3">"So," he said calmly. "What are you making?"</p>
          <p class="mt-3">Eleftheria straightened up. Took a deep breath. Started to explain: "Well, the original idea was to—"</p>
          <p class="mt-3">Before she finished—</p>
          <p class="mt-4 text-white font-bold text-xl">— "Perfect. LET'S GO."</p>
          <p class="mt-3 text-gray-400">— "Wait!" said Eleftheria. Her eyes went wide. "We haven't decided! We don't know yet if—"</p>
          <p class="mt-3">Crocus laughed. A low, warm laugh, like an engine starting up. He leaned forward and looked all three children in the eyes.</p>
          <p class="mt-4"><strong class="text-lime-300 text-lg">"You decided. You're just afraid to say it out loud."</strong></p>
          <p class="mt-3 text-gray-400 text-sm italic">And he was right. Because a decision isn't a moment. It's something that grows slowly inside you — and one day, someone gives you permission to say it.</p>
        </section>

        <!-- SCENE 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-fuchsia-600/30 border border-fuchsia-500/30 text-fuchsia-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-fuchsia-400 tracking-wide">THE CLASH</h3>
          </div>
          <p>WiseBot approached. She flew slowly from the corner, like a thought taking shape. Her light was calm, like a candle. She landed on the table, next to Crocus.</p>
          <p class="mt-3">Two worlds. Two energies. One steady as a rock. The other unable to stand still.</p>
          <p class="mt-4">"Thought is power," said WiseBot. "Without thought, action is chaotic. Without decision, thought remains a <em>weight</em>."</p>
          <p class="mt-3">Crocus crossed his metallic arms. His glasses gleamed in the light.</p>
          <p class="mt-3"><strong class="text-lime-400 text-lg">"And decision without movement is theater."</strong></p>
          <p class="mt-4">He looked at the children. His voice was low now. Serious. "Choose. Will you talk about it… or will you do it?"</p>
          <p class="mt-3 text-gray-400 text-sm italic">WiseBot didn't react. Because she knew Crocus wasn't wrong. And Crocus knew WiseBot wasn't mistaken. Sometimes the wisest teachers are the ones who disagree in front of you.</p>
        </section>

        <!-- SCENE 6 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-600/30 border border-gray-500/30 text-gray-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-gray-300 tracking-wide">THE REFEREES</h3>
          </div>
          <p>Alexandra looked at WiseBot. She felt <em>safe</em>. WiseBot was wisdom. Calm. Knowledge.</p>
          <p class="mt-3">Then she looked at Crocus. She felt <em>alive</em>. Crocus was fire. Movement. Courage.</p>
          <p class="mt-4">— "You're both right," she said hesitantly. Her voice came out louder than she expected.</p>
          <p class="mt-3">Philippos agreed. His fist tightened. "If we don't start, we will never learn. We'll talk forever."</p>
          <p class="mt-3">Eleftheria took a deep breath. Her hands trembled slightly. "But if we start without thinking… we'll get lost. We'll waste everything."</p>
          <p class="mt-4">Crocus smiled broadly. This time, his smile wasn't a challenge. It was <em>pride</em>.</p>
          <p class="mt-3 text-lime-300 font-bold text-lg">"Now you are speaking correctly."</p>
        </section>

        <!-- SCENE 7 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-gray-500/30 text-white font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-white tracking-wide">THE FIRST STEP</h3>
          </div>
          <p>They didn't make something big. Or impressive. Or what they had imagined.</p>
          <p class="mt-3">They made something small. A simple piece. A test. A "let's see if it works." A first, trembling step like a baby touching the floor for the first time.</p>
          <p class="mt-4">Philippos held it in his hands. Weighed it. Turned it. Turned it again.</p>
          <p class="mt-3">"It's not perfect," he said quietly.</p>
          <p class="mt-4 text-lime-300 font-bold">— "Nor should it be," said Crocus. His voice was calm now. Like a father speaking to a child who just took their first steps.</p>
          <p class="mt-3 text-lime-200">"It doesn't need to be perfect. It needs to <em>exist</em>. That is enough to start the road."</p>
        </section>

        <!-- SCENE 8 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-red-400 tracking-wide">THE MISTAKE</h3>
          </div>
          <p>A little later, something didn't work. A piece came unstuck. A circuit didn't close. A color didn't match.</p>
          <p class="mt-3">Eleftheria jumped up. "I told you! If we had thought a little more—"</p>
          <p class="mt-3">"If we hadn't started, we would NEVER know where it breaks!" replied Crocus. His voice wasn't angry. It was <em>certain</em>.</p>
          <p class="mt-4">Alexandra stepped between them. Calmly. Steadily. With a voice she didn't even recognize herself:</p>
          <p class="mt-3"><strong class="text-white text-xl">"STOP. We started. And we learned. That is enough."</strong></p>
          <p class="mt-4">WiseBot, from the corner, <em>smiled</em>. Perhaps imaginary. Perhaps real. Her eyes flashed twice. Like a button was pressed. Like something was unlocked.</p>
          <p class="mt-3 text-gray-400 text-sm italic">The first mistake isn't failure. It's the first proof that you tried something real.</p>
        </section>

        <!-- SCENE 9 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-lime-600/30 border border-lime-500/30 text-lime-300 font-black text-sm">09</span>
            <h3 class="text-2xl font-black text-lime-400 tracking-wide">THE YES THAT STAYS</h3>
          </div>
          <p>That night, the papers were more. Many more. But this time they weren't cleaner. They were more <em>real</em>. They had stains, erasures, holes. They had life.</p>
          <p class="mt-3">The table was chaos. But inside the chaos, there was something new: <strong class="text-lime-200">direction</strong>.</p>
          <p class="mt-4">Crocus stood in the doorway. He didn't fully turn around. Just his head. His glasses caught the sunset light coming through the window.</p>
          <p class="mt-3 text-white font-medium text-lg">"Now you talk like creators," he said.</p>
          <p class="mt-3">And he left. The door didn't slam this time. It closed softly. Like a promise that he would return.</p>

          <!-- IMAGE: THE 3 KIDS -->
          <div class="mt-6 rounded-2xl overflow-hidden border border-lime-500/20 shadow-2xl shadow-lime-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="The 3 children after their first step" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-lime-300/80 italic">They weren't the same kids anymore. They had done something.</div>
          </div>

          <p class="mt-4 text-gray-400 text-sm italic">Some "LET'S GO"s don't need justification. They just need someone to say them out loud — so that you dare to run.</p>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-lime-950/60 p-8 rounded-3xl border-2 border-dashed border-lime-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">🐊</span>
            <h4 class="text-xl font-black text-lime-300 uppercase tracking-wider">JOURNAL: THE FIRST "LET'S GO"</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Action doesn't need perfection. It needs a beginning.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-lime-500/15">
              <h5 class="text-lime-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-lime-600/40 flex items-center justify-center text-xs font-black">1</span>
                THE STUCK POINT
              </h5>
              <p class="text-sm mb-3 opacity-80">What have you been thinking about for a long time but not starting? What's holding you back?</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-lime-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-lime-500/15">
              <h5 class="text-lime-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-lime-600/40 flex items-center justify-center text-xs font-black">2</span>
                THE MOVEMENT
              </h5>
              <p class="text-sm mb-3 opacity-80">What ONE small step can you take TODAY? (Just one. Nothing more.)</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-lime-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-lime-500/15">
              <h5 class="text-lime-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-lime-600/40 flex items-center justify-center text-xs font-black">3</span>
                THE AGREEMENT
              </h5>
              <p class="text-sm mb-3 opacity-80">Complete the sentence:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-lime-500/10 text-lime-200">
                <p class="text-sm font-medium">"It doesn't need to be perfect.</p>
                <p class="text-sm font-medium">It needs to __________."</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- MEANING BOX -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-r from-green-900/30 to-lime-900/30 p-6 rounded-2xl border border-green-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-green-300 uppercase tracking-wider">The Meaning of This Chapter</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            Overthinking looks like safety. But it is often <strong class="text-lime-300">fear disguised as logic</strong>. Crocus didn't come to eliminate thinking — he came to give it <strong class="text-green-300">legs</strong>. Because an idea without action is like wings without wind.
          </p>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- MESSAGE FOR PARENTS -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-lime-950/60 p-8 rounded-3xl border border-lime-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-lime-500/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-lime-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              Overthinking looks like <strong class="text-white">caution</strong>, but is often fear. Children need permission to start <em>imperfectly</em>.
            </p>
            <p class="text-gray-300 leading-relaxed">
              When we give children <strong class="text-lime-300">permission to start clumsily</strong>, we give them life courage. WiseBot stayed. Crocus left. But his voice <em>stayed</em>: <strong class="text-white">"LET'S GO."</strong>
            </p>
            <div class="mt-4 bg-lime-900/20 p-4 rounded-xl border border-lime-500/10">
              <p class="text-sm text-lime-200 font-medium">💡 Try today: When your child says "I'm not sure," tell them: "You don't need to be sure. You need to start."</p>
            </div>
          </div>
        </div>

      </div>
    `
    }
  }
];
