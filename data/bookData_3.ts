
import { Book } from '../types';

// ============================================================
// 📖 BOOK 3: ΧΩΡΙΣ ΣΧΕΔΙΟ, ΧΑΝΕΣΑΙ / WITHOUT A PLAN, YOU GET LOST
// Hero: Pencilo (ο σκαντζόχοιρος)
// Theme: ΣΧΕΔΙΟ / BLUEPRINT
// ============================================================

// Cover image
const IMG_PENCILO = "/images/pencilo.jpg";

// Story images
const IMG_KIDS_WITH_PENCILO = "/images/paidia-kai-pencilo.png";
const IMG_KIDS_TOGETHER = "/images/ta-3-paidia.png";

export const BOOK_3: Book[] = [
  {
    id: 3,
    title: { el: "ΧΩΡΙΣ ΣΧΕΔΙΟ, ΧΑΝΕΣΑΙ", en: "WITHOUT A PLAN, YOU GET LOST" },
    theme: { el: "ΣΧΕΔΙΟ", en: "BLUEPRINT" },
    stepLabel: { el: "PENCILO & ΤΟ ΣΧΕΔΙΟ", en: "PENCILO & THE PLAN" },
    author: "Pencilo",
    cover: IMG_PENCILO,
    videoUrl: "",
    description: {
      el: "Το 'ΠΑΜΕ' του Crocus έφερε χάος. Κάτι έσπασε. Ο Pencilo εμφανίζεται για να δείξει ότι η ταχύτητα χωρίς χάρτη είναι απλώς κούραση.",
      en: "Crocus's 'LET'S GO' brought chaos. Something broke. Pencilo appears to show that speed without a map is just fatigue."
    },
    meaning: {
      el: "Το 'ΠΑΜΕ' είναι δύναμη. Το σχέδιο είναι κατεύθυνση. Χωρίς κατεύθυνση, η δύναμη σε κουράζει.",
      en: "'LET'S GO' is power. The plan is direction. Without direction, power exhausts you."
    },
    xp: 130,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- ΕΙΣΑΓΩΓΙΚΟ QUOTE -->
        <div class="relative bg-gradient-to-r from-cyan-900/80 via-teal-900/60 to-emerald-900/40 p-10 rounded-2xl border border-cyan-500/30 text-center shadow-lg shadow-cyan-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Κεφάλαιο 3</div>
          <p class="italic text-cyan-200 text-xl mt-4 leading-relaxed">«Χωρίς σχέδιο, απλά κάνεις κύκλους<br/>γύρω από τον εαυτό σου.»</p>
          <div class="mt-4 w-16 h-0.5 bg-cyan-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- ΣΚΗΝΗ 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-600/30 border border-cyan-500/30 text-cyan-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-cyan-400 tracking-wide">ΤΟ «ΠΑΜΕ» ΠΟΥ ΕΓΙΝΕ ΧΑΟΣ</h3>
          </div>
          <p>Ξεκίνησαν με φόρα. Σαν τρεις κεραυνοί που χτύπησαν ταυτόχρονα στο ίδιο σημείο.</p>
          <p class="mt-3">Ο Φίλιππος έφτιαχνε — χέρια γρήγορα, μάτια φλεγόμενα. Η Αλεξάνδρα ζωγράφιζε — χρώματα παντού, μολύβια να κυλάνε στο πάτωμα. Η Ελευθερία έγραφε — σελίδες γεμάτες ιδέες, τρία τετράδια ανοιχτά ταυτόχρονα. Ο ήχος ήταν σαν εργοστάσιο στο μέγιστο: <em>γδούπος, τρίξιμο, σκίσιμο χαρτιού</em>.</p>
          <p class="mt-3">— «Όχι έτσι!» — «Περίμενε!» — «Αυτό δεν κολλάει!»</p>
          <p class="mt-3">Οι φωνές πέφτανε η μία πάνω στην άλλη σαν χαρτιά σε θύελλα. Το τραπέζι γέμισε κομμάτια — χαρτόνια, κλωστές, κόλλες, ιδέες μισοτελειωμένες σαν πύργοι χωρίς θεμέλια.</p>
          <p class="mt-3">Ο Crocus τους κοιτούσε με χαμόγελο. Δεν τον ανησυχούσε τίποτα — τον ενθουσίαζε η κίνηση. Η ταχύτητα. Η φωτιά.</p>
          <p class="mt-3 text-lime-300 font-bold text-lg">— «ΠΑΜΕ!» φώναξε, σηκώνοντας τη γροθιά στον αέρα.</p>
          <p class="mt-3">Και φώναξαν κι αυτοί. Γιατί φώναζαν. Γιατί η ενέργεια ήταν μεθυστική. Γιατί νόμιζαν ότι αν τρέχεις αρκετά γρήγορα, δε χρειάζεσαι δρόμο.</p>
          <p class="mt-3">Μέχρι που—</p>
          <p class="mt-2 text-center"><strong class="text-red-400 text-3xl tracking-widest">ΚΡΑΑΑΚ.</strong></p>
          <p class="mt-4 text-gray-400 text-sm italic">Ο ήχος μιας αποτυχίας δεν είναι δυνατός. Είναι ξαφνικός. Κι αυτό πονάει περισσότερο.</p>
        </section>

        <!-- ΣΚΗΝΗ 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-red-400 tracking-wide">ΤΟ ΣΠΑΣΙΜΟ</h3>
          </div>
          <p>Ένα κομμάτι έσπασε. Ήταν το μόνο που είχαν. Το κομμάτι-κλειδί. Αυτό που κρατούσε τα πάντα μαζί.</p>
          <p class="mt-3">Ο ήχος αντήχησε στο δωμάτιο σαν καμπάνα.</p>
          <p class="mt-3">Ο Φίλιππος πάγωσε. Τα χέρια του ακόμα στον αέρα — σαν γλύπτης που μόλις κατάλαβε ότι ο πηλός ράγισε. Τα μάτια του δεν κοιτούσαν το κομμάτι. Κοιτούσαν τα <em>δικά του</em> χέρια. <strong>Αυτός το έκανε. Αυτός.</strong></p>
          <p class="mt-3">— «Εγώ είπα να το κάνουμε αλλιώς…» ψιθύρισε η Αλεξάνδρα. Η φωνή της ήταν απαλή, αλλά μέσα της ούρλιαζε. <em>Γιατί δεν μίλησα πιο δυνατά;</em></p>
          <p class="mt-3">Η Ελευθερία έσφιξε τα δόντια. Κατέβασε τα μάτια στο σημειωματάριό της — γεμάτο σχέδια, ιδέες, υπολογισμούς. Τίποτα δεν χρησιμοποιήθηκε.</p>
          <p class="mt-3"><strong class="text-red-300">«Δεν ξέρουμε τι κάνουμε.»</strong> Η φράση βγήκε σαν μαχαιριά. Και το χειρότερο; Κανείς δεν την αμφισβήτησε.</p>
          <p class="mt-3">Η WiseBot εμφανίστηκε στη γωνία. Αλλά το φως της ήταν χαμηλό. Σαν αστέρι πίσω από σύννεφα. <em>Ακόμα κι η σοφία χρειάζεται χρόνο να δει μέσα στο χάος.</em></p>
          <p class="mt-4 text-gray-400 text-sm italic">Η αποτυχία δεν πονάει μόνο. Πονάει περισσότερο όταν ξέρεις ότι μπορούσες να την αποφύγεις.</p>
        </section>

        <!-- ΣΚΗΝΗ 3 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-600/30 border border-gray-500/30 text-gray-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-gray-400 tracking-wide">Ο ΚΥΚΛΟΣ ΠΟΥ ΚΟΥΡΑΖΕΙ</h3>
          </div>
          <p>Προσπάθησαν ξανά. Και ξανά. Κάθε φορά λίγο αλλιώς. Κάθε φορά με λίγο λιγότερη πίστη. Κάθε φορά… ίδιο αποτέλεσμα.</p>
          <p class="mt-3">Ο Φίλιππος πετούσε κομμάτια πάνω σε κομμάτια. Η Αλεξάνδρα ξανασχεδίαζε τα ίδια σχέδια με ελαφρώς διαφορετικά χρώματα. Η Ελευθερία ξανάγραφε τα ίδια σημεία, αλλάζοντας μόνο τις λέξεις.</p>
          <p class="mt-3">Δεν δημιουργούσαν. <strong>Αντέγραφαν την αποτυχία τους.</strong></p>
          <p class="mt-4">Ο Crocus άρχισε να εκνευρίζεται. Τα δάχτυλά του χτυπούσαν στο τραπέζι. «Ρε παιδιά, <strong class="text-lime-300">ΠΑΜΕ</strong> είπαμε!»</p>
          <p class="mt-3">Η Ελευθερία γύρισε απότομα. Τα μάτια της ήταν κόκκινα — όχι από κλάμα, αλλά από κούραση. Από ώρες χαμένες σε κύκλους.</p>
          <p class="mt-3 text-center"><strong class="text-cyan-300 text-2xl">«ΠΟΥ;»</strong></p>
          <p class="mt-3">Σιωπή. Βαριά. Πυκνή. Σαν σύννεφο πριν από καταιγίδα.</p>
          <p class="mt-3">Ο Crocus άνοιξε το στόμα. Το έκλεισε. Για πρώτη φορά, η λέξη «ΠΑΜΕ» δεν ήταν αρκετή.</p>
          <p class="mt-4 text-gray-400 text-sm italic">Η ενέργεια χωρίς κατεύθυνση δεν σε πάει πουθενά. Απλά σε κουράζει πιο γρήγορα.</p>
        </section>

        <!-- ΣΚΗΝΗ 4 — Ο ΣΚΑΝΤΖΟΧΟΙΡΟΣ -->
        <section class="bg-gradient-to-br from-cyan-900/30 via-teal-900/20 to-emerald-900/10 p-8 rounded-2xl border-l-8 border-cyan-500 my-8 shadow-xl shadow-cyan-900/20">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-cyan-400/40 text-white font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-white tracking-wide">Ο ΣΚΑΝΤΖΟΧΟΙΡΟΣ</h3>
          </div>
          <p>Ακούστηκε πρώτα ένας ήχος. Μεταλλικός. Μικρός. Σαν ρουλεμάν σε μάρμαρο.</p>
          <p class="mt-3">Μετά ένα τρίξιμο — τροχαλίες σε ξύλινο πάτωμα. Και μετά…</p>
          <p class="mt-3">Κάτι <em>κύλησε</em> κάτω από το τραπέζι. Γρήγορο. Μικρό. Ακριβές.</p>
          <p class="mt-4">Ένας <strong class="text-cyan-300">σκαντζόχοιρος με ρόλερ στα πόδια</strong>. Στην πλάτη του, αντί για αγκάθια: μολύβια σε τέλεια σειρά, χάρακες κλιμακωτοί, μικρά μπλοκάκια δεμένα με κορδέλα. Φορούσε γυαλιά — στρογγυλά, σαν ρολόι ακριβείας. Τα μάτια του πίσω τους ήταν ήρεμα. <em>Σχεδόν υπερβολικά ήρεμα.</em></p>
          <p class="mt-3">Σταμάτησε στο κέντρο του δωματίου. Ρίχτηκε μια ματιά γύρω-γύρω — στα σκισμένα χαρτιά, στα σπασμένα κομμάτια, στις γραμμές χωρίς τέλος.</p>

          <!-- ΕΙΚΟΝΑ: KIDS + PENCILO -->
          <div class="my-8 rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-900/30">
            <img src="${IMG_KIDS_WITH_PENCILO}" alt="Τα παιδιά συναντούν τον Pencilo" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-cyan-300/80 italic">Η στιγμή που ο Pencilo κύλησε μέσα στο χάος</div>
          </div>

          <p class="mt-4 text-cyan-200 font-bold text-lg">— «Συγγνώμη. Αλλά αυτό που κάνετε… πονάει.»</p>
          <p class="mt-3">Η φωνή του ήταν απαλή. Σαν δάσκαλος που δεν φωνάζει ποτέ — αλλά κάθε λέξη του μένει. Τα μολύβια στην πλάτη του τρεμόπαιξαν ελαφρά, σαν δέντρο που νιώθει τον αέρα.</p>
          <p class="mt-3">Ο Crocus τον κοίταξε στραβά. «Και εσύ ποιος είσαι;»</p>
          <p class="mt-3 text-white">Ο σκαντζόχοιρος σήκωσε ένα μολύβι από την πλάτη του. Το στριφογύρισε στα δάχτυλά του σαν μαέστρος με μπαγκέτα.</p>
          <p class="mt-3 text-cyan-100 font-bold text-xl">— «Με λένε <strong class="text-cyan-300 text-2xl">Pencilo</strong>. Κι ήρθα γιατί ακούω χάος.»</p>
        </section>

        <!-- ΣΚΗΝΗ 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-600/30 border border-teal-500/30 text-teal-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-teal-400 tracking-wide">Ο ΧΑΡΤΗΣ</h3>
          </div>
          <p>Ο Pencilo πήδηξε στο τραπέζι. Τα ρόλερ του γλίστρησαν στο χαρτί, αφήνοντας δύο τέλειες γραμμές. Σαν σιδηρόδρομος.</p>
          <p class="mt-3 text-cyan-200 font-bold text-lg">— «Δεν σας λείπει ενέργεια. Σας λείπει <em>σειρά</em>.»</p>
          <p class="mt-3">Πήρε ένα χαρτί. Κρατούσε το μολύβι σαν χειρουργικό νυστέρι — με ακρίβεια που σε έκανε να κρατάς την αναπνοή σου. Ζωγράφισε τρία κουτιά. Καθαρά. Απλά. Τέλεια.</p>
          <div class="my-6 bg-black/40 p-6 rounded-2xl border border-cyan-500/30 shadow-lg">
            <ul class="list-none space-y-3 font-mono text-base">
              <li class="flex items-center gap-3"><span class="w-6 h-6 rounded border-2 border-cyan-400/60 flex items-center justify-center text-xs text-cyan-400">1</span> <span class="text-cyan-200 font-bold">ΤΙ ΦΤΙΑΧΝΟΥΜΕ</span></li>
              <li class="flex items-center gap-3"><span class="w-6 h-6 rounded border-2 border-cyan-400/60 flex items-center justify-center text-xs text-cyan-400">2</span> <span class="text-cyan-200 font-bold">ΓΙΑ ΠΟΙΟΝ</span></li>
              <li class="flex items-center gap-3"><span class="w-6 h-6 rounded border-2 border-cyan-400/60 flex items-center justify-center text-xs text-cyan-400">3</span> <span class="text-cyan-200 font-bold">ΠΩΣ ΞΕΚΙΝΑΜΕ</span></li>
            </ul>
          </div>
          <p>«Χωρίς αυτά», είπε δείχνοντας τα τρία κουτιά, «θα κάνετε κύκλους. Πάντα. Ό,τι κι αν τρέξετε.»</p>
          <p class="mt-3">Ο Crocus σταύρωσε τα χέρια. Ο σαγόνι του σφίχτηκε. «Δηλαδή θες να κάτσουμε να <em>σχεδιάζουμε</em>;»</p>
          <p class="mt-3">Ο Pencilo τον κοίταξε. Ήρεμα. Χωρίς ίχνος πρόκλησης. Μόνο αλήθεια.</p>
          <p class="mt-3 text-cyan-300 font-bold">— «Όχι. Θέλω να μην χαλάτε την <em>πράξη</em>.»</p>
          <p class="mt-4 text-gray-400 text-sm italic">Ένα σχέδιο δεν σταματά τη δράση. Τη σέβεται.</p>
        </section>

        <!-- ΣΚΗΝΗ 6 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-fuchsia-600/30 border border-fuchsia-500/30 text-fuchsia-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-fuchsia-400 tracking-wide">Ο ΚΑΒΓΑΣ</h3>
          </div>
          <p>Ο Crocus έκανε ένα βήμα μπροστά. Σαν μαχητής σε ρινγκ. Τα μάτια του γυάλιζαν — όχι από θυμό, αλλά από πληγωμένη περηφάνια.</p>
          <p class="mt-3">«Τα σχέδια είναι ωραία στα χαρτιά», είπε. Η φωνή του τρεμόπαιζε. «Η ζωή δεν περιμένει σχέδιο. Η ζωή <em>τρέχει</em>.»</p>
          <p class="mt-3">Ο Pencilo τον κοίταξε ήρεμα. Χωρίς να κουνηθεί ούτε χιλιοστό. Τα γυαλιά του αντανακλούσαν το φως — ψυχρό, καθαρό.</p>
          <p class="mt-3"><strong class="text-cyan-300 text-lg">«Και χωρίς σχέδιο, η ζωή σε γυρίζει πίσω.»</strong></p>
          <p class="mt-4">Η σιωπή ήταν ηλεκτρική. Δράση εναντίον σχεδίου. Φωτιά εναντίον χάρτη. Δύο δυνάμεις που μοιάζουν αντίθετες — αλλά χωρίς τη μία, η άλλη καταστρέφει.</p>
          <p class="mt-4">Η Αλεξάνδρα μπήκε ανάμεσά τους. Ένα χέρι στον καθέναν. Σαν γέφυρα ανάμεσα σε δύο ακτές.</p>
          <p class="mt-3 text-white font-bold text-lg">— «ΣΤΟΠ. Μας μάθατε να ξεκινάμε. Τώρα πρέπει να μάθουμε <em>πού πάμε</em>.»</p>
          <p class="mt-3">Η WiseBot — στη γωνία, ακίνητη ως τώρα — άναψε. Λίγο. Σαν πυγολαμπίδα που βλέπει ελπίδα.</p>
          <p class="mt-4 text-gray-400 text-sm italic">Η σοφία δεν διαλέγει πλευρά. Φωτίζεται όταν οι δύο πλευρές βρίσκουν τρόπο να συνυπάρξουν.</p>
        </section>

        <!-- ΣΚΗΝΗ 7 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-white font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-white tracking-wide">ΤΟ ΠΡΩΤΟ ΑΠΛΟ ΣΧΕΔΙΟ</h3>
          </div>
          <p>Δεν έφτιαξαν τέλειο πλάνο. Δεν χρειαζόταν. Ο Pencilo τους είπε: «Ένα σχέδιο που βγαίνει σε δέκα λεπτά αξίζει περισσότερο από ένα τέλειο που δεν βγαίνει ποτέ.»</p>
          <p class="mt-3">Ένα χαρτί. Λίγες γραμμές. Ένα βέλος που δείχνει μπροστά.</p>
          <p class="mt-4">Ο Φίλιππος διάβασε τι έγραψαν. Κοίταξε τα χέρια του — τα ίδια χέρια που πριν έσπασαν. Τώρα κρατούσαν ένα χαρτί με νόημα.</p>
          <p class="mt-3 text-cyan-200 font-bold text-lg">«Ξέρω τι κάνω τώρα.»</p>
          <p class="mt-3">Η φωνή του δεν ήταν δυνατή. Ήταν <em>σταθερή</em>. Αυτό μέτραγε.</p>
          <p class="mt-3">Ο Crocus κοίταξε το σχέδιο. Κατσούφιασε. Ξανακοίταξε. Τελικά… αναστέναξε βαθιά. Ένα αναστέναγμα γεμάτο σεβασμό.</p>
          <p class="mt-3 text-lime-300 font-bold">— «Οκ. Πάμε… αλλά με χάρτη.»</p>
          <p class="mt-4 text-gray-400 text-sm italic">Η πιο γενναία φράση δεν είναι «Πάμε». Είναι «Πάμε — αλλά ξέρουμε πού».</p>
        </section>

        <!-- ΣΚΗΝΗ 8 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-600/30 border border-cyan-500/30 text-cyan-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-cyan-300 tracking-wide">Η ΠΡΩΤΗ ΗΣΥΧΙΑ</h3>
          </div>
          <p>Για πρώτη φορά, το δωμάτιο ησύχασε.</p>
          <p class="mt-3">Όχι επειδή σταμάτησαν. Αλλά επειδή <em>ήξεραν τι κάνουν</em>.</p>
          <p class="mt-3">Η Ελευθερία κοίταξε τις σημειώσεις της — αυτή τη φορά ταξινομημένες, αριθμημένες, με βέλη που οδηγούσαν κάπου. Ένιωσε κάτι ζεστό στο στήθος. <em>Τάξη.</em> Αυτό ήταν η αίσθηση της τάξης.</p>
          <p class="mt-3">Η Αλεξάνδρα ζωγράφιζε ξανά. Αλλά τώρα κάθε γραμμή είχε σκοπό. Κάθε χρώμα — λόγο.</p>
          <p class="mt-3">Ο Φίλιππος χτιπούσε τα κομμάτια στη θέση τους. Αργά. Σταθερά. Με τη σιγουριά κάποιου που ξέρει ότι αυτή τη φορά — δεν θα σπάσει τίποτα.</p>

          <!-- ΕΙΚΟΝΑ: KIDS TOGETHER -->
          <div class="my-8 rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-900/30">
            <img src="${IMG_KIDS_TOGETHER}" alt="Τα τρία παιδιά μαζί" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-cyan-300/80 italic">Η ησυχία που γεννιέται όταν ξέρεις πού πας</div>
          </div>

          <p class="mt-3">Ο Pencilo έγνεψε. Τα ρόλερ του γύρισαν αθόρυβα. Τα μολύβια στην πλάτη του ακουμπούσαν το ένα στο άλλο σαν χορδές σε κιθάρα — ήρεμα, ταιριαστά, σε τάξη.</p>
          <p class="mt-4"><strong class="text-cyan-200 text-xl">Δεν έτρεχαν πια. Προχωρούσαν.</strong></p>
          <p class="mt-4 text-gray-400 text-sm italic">Η αληθινή πρόοδος δεν ακούγεται. Γιατί δεν κάνει θόρυβο. Κάνει βήματα.</p>
        </section>

        <!-- JOURNAL -->
        <div class="mt-12 bg-cyan-950/60 p-8 rounded-3xl border-2 border-dashed border-cyan-500/40 shadow-xl">
          <h4 class="text-xl font-black text-cyan-300 uppercase tracking-wider mb-6 flex items-center gap-2">
            📓 JOURNAL: Ο ΧΑΡΤΗΣ ΜΟΥ
          </h4>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-cyan-500/20">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-7 h-7 rounded-full bg-cyan-600/40 flex items-center justify-center text-xs font-bold text-cyan-200">1</span>
                <h5 class="text-cyan-200 font-bold">Ο ΣΤΟΧΟΣ</h5>
              </div>
              <p class="text-sm mb-3 opacity-80">Τι ακριβώς θέλω να φτιάξω; (Γράψε μία πρόταση — μόνο μία.)</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-cyan-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-cyan-500/20">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-7 h-7 rounded-full bg-cyan-600/40 flex items-center justify-center text-xs font-bold text-cyan-200">2</span>
                <h5 class="text-cyan-200 font-bold">ΤΟ ΚΟΙΝΟ</h5>
              </div>
              <p class="text-sm mb-3 opacity-80">Για ποιον το φτιάχνω; (Τον εαυτό μου; Τους φίλους μου; Όλους;)</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-cyan-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-cyan-500/20">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-7 h-7 rounded-full bg-cyan-600/40 flex items-center justify-center text-xs font-bold text-cyan-200">3</span>
                <h5 class="text-cyan-200 font-bold">Η ΑΡΧΗ</h5>
              </div>
              <p class="text-sm mb-3 opacity-80">«Το πρώτο, πολύ μικρό βήμα μου είναι:»</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-cyan-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-cyan-500/20">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-7 h-7 rounded-full bg-cyan-600/40 flex items-center justify-center text-xs font-bold text-cyan-200">4</span>
                <h5 class="text-cyan-200 font-bold">ΤΟ ΜΑΘΗΜΑ ΤΟΥ PENCILO</h5>
              </div>
              <p class="text-sm mb-3 opacity-80">Σκέψου μια στιγμή που έκανες κάτι χωρίς σχέδιο. Τι πήγε στραβά;</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-cyan-500/20"></div>
            </div>

          </div>
        </div>

        <!-- MEANING BOX -->
        <div class="mt-8 bg-gradient-to-br from-cyan-950/80 to-teal-950/60 p-8 rounded-3xl border border-cyan-400/30 shadow-2xl">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-2xl">💎</span>
            <h4 class="text-xl font-black text-cyan-300 uppercase tracking-wider">ΤΟ ΝΟΗΜΑ</h4>
          </div>
          <p class="text-gray-200 leading-relaxed text-lg">
            Το <strong class="text-lime-300">«ΠΑΜΕ»</strong> είναι δύναμη.<br/>
            Το <strong class="text-cyan-300">σχέδιο</strong> είναι κατεύθυνση.<br/>
            Χωρίς κατεύθυνση, η δύναμη σε κουράζει.<br/>
            <span class="text-cyan-200 italic mt-2 block">Αλλά μαζί; Μαζί κάνουν βήματα που δεν γυρίζουν πίσω.</span>
          </p>
        </div>

        <!-- PARENTS MESSAGE -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-cyan-950/60 p-8 rounded-3xl border border-cyan-500/30 shadow-2xl relative">
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-cyan-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
          </div>
          <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
            Η παρόρμηση είναι ενέργεια, αλλά το σχέδιο είναι σεβασμός στον χρόνο. Όταν τα παιδιά μάθουν να σχεδιάζουν απλά — ένα χαρτί, τρεις γραμμές — <strong class="text-cyan-300">μαθαίνουν να μη σπαταλούν τον εαυτό τους</strong> και να προστατεύουν την αυτοπεποίθησή τους.
          </p>
          <div class="mt-4 bg-cyan-900/30 p-4 rounded-xl border border-cyan-500/20">
            <p class="text-cyan-200 font-bold text-sm flex items-center gap-2">💡 ΠΡΑΚΤΙΚΗ ΣΥΜΒΟΥΛΗ:</p>
            <p class="text-gray-300 text-sm mt-2">Πριν το παιδί ξεκινήσει κάτι καινούργιο, δώστε του ένα χαρτί και ρωτήστε: <em>«Τι φτιάχνεις; Για ποιον; Ποιο είναι το πρώτο βήμα;»</em> Τρεις ερωτήσεις. Δέκα λεπτά. Και η διαφορά είναι τεράστια.</p>
          </div>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- INTRO QUOTE -->
        <div class="relative bg-gradient-to-r from-cyan-900/80 via-teal-900/60 to-emerald-900/40 p-10 rounded-2xl border border-cyan-500/30 text-center shadow-lg shadow-cyan-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Chapter 3</div>
          <p class="italic text-cyan-200 text-xl mt-4 leading-relaxed">«Without a plan, you just run in circles<br/>around yourself.»</p>
          <div class="mt-4 w-16 h-0.5 bg-cyan-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- SCENE 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-600/30 border border-cyan-500/30 text-cyan-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-cyan-400 tracking-wide">THE "LET'S GO" THAT BECAME CHAOS</h3>
          </div>
          <p>They started with a rush. Like three lightning bolts striking the same spot at once.</p>
          <p class="mt-3">Philippos was building — hands fast, eyes on fire. Alexandra was painting — colors everywhere, pencils rolling on the floor. Eleftheria was writing — pages full of ideas, three notebooks open at once. The sound was like a factory at maximum: <em>thuds, squeaking, paper tearing</em>.</p>
          <p class="mt-3">— "Not like that!" — "Wait!" — "This doesn't stick!"</p>
          <p class="mt-3">Voices crashed into each other like papers in a storm. The table filled with pieces — cardboard, strings, glue, half-finished ideas like towers without foundations.</p>
          <p class="mt-3">Crocus watched them with a grin. Nothing worried him — he loved the movement. The speed. The fire.</p>
          <p class="mt-3 text-lime-300 font-bold text-lg">— "LET'S GO!" he shouted, raising his fist in the air.</p>
          <p class="mt-3">And they shouted too. Because shouting felt good. Because the energy was intoxicating. Because they thought that if you run fast enough, you don't need a road.</p>
          <p class="mt-3">Until—</p>
          <p class="mt-2 text-center"><strong class="text-red-400 text-3xl tracking-widest">CRAAACK.</strong></p>
          <p class="mt-4 text-gray-400 text-sm italic">The sound of failure isn't loud. It's sudden. And that's what hurts more.</p>
        </section>

        <!-- SCENE 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-red-400 tracking-wide">THE BREAKING POINT</h3>
          </div>
          <p>A piece broke. It was the only one they had. The key piece. The one that held everything together.</p>
          <p class="mt-3">The sound echoed in the room like a bell.</p>
          <p class="mt-3">Philippos froze. His hands still in the air — like a sculptor who just realized the clay cracked. His eyes weren't looking at the piece. They were looking at his <em>own</em> hands. <strong>He did this. Him.</strong></p>
          <p class="mt-3">— "I said we should do it differently…" whispered Alexandra. Her voice was soft, but inside she was screaming. <em>Why didn't I speak louder?</em></p>
          <p class="mt-3">Eleftheria clenched her teeth. She looked down at her notebook — full of designs, ideas, calculations. None of them used.</p>
          <p class="mt-3"><strong class="text-red-300">"We don't know what we're doing."</strong> The sentence came out like a knife. And the worst part? Nobody disagreed.</p>
          <p class="mt-3">WiseBot appeared in the corner. But her light was low. Like a star behind clouds. <em>Even wisdom needs time to see through chaos.</em></p>
          <p class="mt-4 text-gray-400 text-sm italic">Failure doesn't just hurt. It hurts more when you know you could have avoided it.</p>
        </section>

        <!-- SCENE 3 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-600/30 border border-gray-500/30 text-gray-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-gray-400 tracking-wide">THE CIRCLE THAT EXHAUSTS</h3>
          </div>
          <p>They tried again. And again. Each time a little differently. Each time with a little less faith. Each time… same result.</p>
          <p class="mt-3">Philippos was throwing pieces on top of pieces. Alexandra was redesigning the same plans with slightly different colors. Eleftheria was rewriting the same points, only changing the words.</p>
          <p class="mt-3">They weren't creating. <strong>They were copying their own failure.</strong></p>
          <p class="mt-4">Crocus started getting irritated. His fingers drummed on the table. "Hey guys, we said <strong class="text-lime-300">LET'S GO</strong>!"</p>
          <p class="mt-3">Eleftheria turned abruptly. Her eyes were red — not from crying, but from exhaustion. From hours wasted in circles.</p>
          <p class="mt-3 text-center"><strong class="text-cyan-300 text-2xl">"WHERE?"</strong></p>
          <p class="mt-3">Silence. Heavy. Thick. Like a cloud before a storm.</p>
          <p class="mt-3">Crocus opened his mouth. Closed it. For the first time, the word "LET'S GO" wasn't enough.</p>
          <p class="mt-4 text-gray-400 text-sm italic">Energy without direction takes you nowhere. It just exhausts you faster.</p>
        </section>

        <!-- SCENE 4 — THE HEDGEHOG -->
        <section class="bg-gradient-to-br from-cyan-900/30 via-teal-900/20 to-emerald-900/10 p-8 rounded-2xl border-l-8 border-cyan-500 my-8 shadow-xl shadow-cyan-900/20">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-cyan-400/40 text-white font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-white tracking-wide">THE HEDGEHOG</h3>
          </div>
          <p>A sound came first. Metallic. Small. Like a bearing on marble.</p>
          <p class="mt-3">Then a squeak — wheels on wooden floor. And then…</p>
          <p class="mt-3">Something <em>rolled</em> under the table. Fast. Small. Precise.</p>
          <p class="mt-4">A <strong class="text-cyan-300">hedgehog on roller skates</strong>. On his back, instead of spines: pencils in perfect order, graduated rulers, small notepads tied with ribbon. He wore glasses — round, like a precision clock. The eyes behind them were calm. <em>Almost excessively calm.</em></p>
          <p class="mt-3">He stopped in the center of the room. Cast a glance around — at the torn papers, the broken pieces, the lines without endings.</p>

          <!-- IMAGE: KIDS + PENCILO -->
          <div class="my-8 rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-900/30">
            <img src="${IMG_KIDS_WITH_PENCILO}" alt="The kids meet Pencilo" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-cyan-300/80 italic">The moment Pencilo rolled into the chaos</div>
          </div>

          <p class="mt-4 text-cyan-200 font-bold text-lg">— "Sorry. But what you're doing… hurts."</p>
          <p class="mt-3">His voice was soft. Like a teacher who never shouts — but every word stays. The pencils on his back trembled slightly, like a tree feeling the wind.</p>
          <p class="mt-3">Crocus looked at him sideways. "And who are you?"</p>
          <p class="mt-3 text-white">The hedgehog picked a pencil from his back. He twirled it in his fingers like a conductor with a baton.</p>
          <p class="mt-3 text-cyan-100 font-bold text-xl">— "My name is <strong class="text-cyan-300 text-2xl">Pencilo</strong>. And I came because I hear chaos."</p>
        </section>

        <!-- SCENE 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-600/30 border border-teal-500/30 text-teal-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-teal-400 tracking-wide">THE MAP</h3>
          </div>
          <p>Pencilo jumped on the table. His skates slid on the paper, leaving two perfect lines. Like a railroad.</p>
          <p class="mt-3 text-cyan-200 font-bold text-lg">— "You don't lack energy. You lack <em>order</em>."</p>
          <p class="mt-3">He took a sheet of paper. He held the pencil like a surgical scalpel — with precision that made you hold your breath. He drew three boxes. Clean. Simple. Perfect.</p>
          <div class="my-6 bg-black/40 p-6 rounded-2xl border border-cyan-500/30 shadow-lg">
            <ul class="list-none space-y-3 font-mono text-base">
              <li class="flex items-center gap-3"><span class="w-6 h-6 rounded border-2 border-cyan-400/60 flex items-center justify-center text-xs text-cyan-400">1</span> <span class="text-cyan-200 font-bold">WHAT WE MAKE</span></li>
              <li class="flex items-center gap-3"><span class="w-6 h-6 rounded border-2 border-cyan-400/60 flex items-center justify-center text-xs text-cyan-400">2</span> <span class="text-cyan-200 font-bold">FOR WHOM</span></li>
              <li class="flex items-center gap-3"><span class="w-6 h-6 rounded border-2 border-cyan-400/60 flex items-center justify-center text-xs text-cyan-400">3</span> <span class="text-cyan-200 font-bold">HOW WE START</span></li>
            </ul>
          </div>
          <p>"Without these," he said, pointing at the three boxes, "you'll run in circles. Always. No matter how fast."</p>
          <p class="mt-3">Crocus crossed his arms. His jaw tightened. "So you want us to sit and <em>plan</em>?"</p>
          <p class="mt-3">Pencilo looked at him. Calmly. Without a trace of challenge. Only truth.</p>
          <p class="mt-3 text-cyan-300 font-bold">— "No. I want you not to waste the <em>action</em>."</p>
          <p class="mt-4 text-gray-400 text-sm italic">A plan doesn't stop action. It respects it.</p>
        </section>

        <!-- SCENE 6 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-fuchsia-600/30 border border-fuchsia-500/30 text-fuchsia-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-fuchsia-400 tracking-wide">THE ARGUMENT</h3>
          </div>
          <p>Crocus took a step forward. Like a fighter in a ring. His eyes gleamed — not with anger, but with wounded pride.</p>
          <p class="mt-3">"Plans are nice on paper," he said. His voice trembled. "Life doesn't wait for a plan. Life <em>runs</em>."</p>
          <p class="mt-3">Pencilo looked at him calmly. Without moving a millimeter. His glasses reflected the light — cold, clear.</p>
          <p class="mt-3"><strong class="text-cyan-300 text-lg">"And without a plan, life sends you back."</strong></p>
          <p class="mt-4">The silence was electric. Action versus plan. Fire versus map. Two forces that seem opposite — but without one, the other destroys.</p>
          <p class="mt-4">Alexandra stepped between them. One hand on each. Like a bridge between two shores.</p>
          <p class="mt-3 text-white font-bold text-lg">— "STOP. You taught us to start. Now we need to learn <em>where we're going</em>."</p>
          <p class="mt-3">WiseBot — in the corner, motionless until now — lit up. Gently. Like a firefly that sees hope.</p>
          <p class="mt-4 text-gray-400 text-sm italic">Wisdom doesn't pick sides. It lights up when both sides find a way to coexist.</p>
        </section>

        <!-- SCENE 7 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-white font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-white tracking-wide">THE FIRST SIMPLE PLAN</h3>
          </div>
          <p>They didn't make a perfect plan. They didn't need to. Pencilo told them: "A plan made in ten minutes is worth more than a perfect one that never gets made."</p>
          <p class="mt-3">One paper. A few lines. An arrow pointing forward.</p>
          <p class="mt-4">Philippos read what they wrote. He looked at his hands — the same hands that broke things before. Now they held a paper with meaning.</p>
          <p class="mt-3 text-cyan-200 font-bold text-lg">"I know what I'm doing now."</p>
          <p class="mt-3">His voice wasn't loud. It was <em>steady</em>. That's what mattered.</p>
          <p class="mt-3">Crocus looked at the plan. Frowned. Looked again. Finally… he sighed deeply. A sigh full of respect.</p>
          <p class="mt-3 text-lime-300 font-bold">— "Ok. Let's go… but with a map."</p>
          <p class="mt-4 text-gray-400 text-sm italic">The bravest sentence isn't "Let's go." It's "Let's go — but we know where."</p>
        </section>

        <!-- SCENE 8 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-600/30 border border-cyan-500/30 text-cyan-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-cyan-300 tracking-wide">THE FIRST SILENCE</h3>
          </div>
          <p>For the first time, the room fell quiet.</p>
          <p class="mt-3">Not because they stopped. But because they <em>knew what they were doing</em>.</p>
          <p class="mt-3">Eleftheria looked at her notes — this time organized, numbered, with arrows that led somewhere. She felt something warm in her chest. <em>Order.</em> That was the feeling of order.</p>
          <p class="mt-3">Alexandra was drawing again. But now every line had purpose. Every color — a reason.</p>
          <p class="mt-3">Philippos was pressing pieces into place. Slowly. Steadily. With the confidence of someone who knows that this time — nothing will break.</p>

          <!-- IMAGE: KIDS TOGETHER -->
          <div class="my-8 rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-900/30">
            <img src="${IMG_KIDS_TOGETHER}" alt="The three kids together" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-cyan-300/80 italic">The silence that is born when you know where you're going</div>
          </div>

          <p class="mt-3">Pencilo nodded. His skates turned silently. The pencils on his back rested against each other like strings on a guitar — calm, harmonious, in order.</p>
          <p class="mt-4"><strong class="text-cyan-200 text-xl">They weren't running anymore. They were advancing.</strong></p>
          <p class="mt-4 text-gray-400 text-sm italic">Real progress doesn't make noise. It doesn't need to. It makes steps.</p>
        </section>

        <!-- JOURNAL -->
        <div class="mt-12 bg-cyan-950/60 p-8 rounded-3xl border-2 border-dashed border-cyan-500/40 shadow-xl">
          <h4 class="text-xl font-black text-cyan-300 uppercase tracking-wider mb-6 flex items-center gap-2">
            📓 JOURNAL: MY MAP
          </h4>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-cyan-500/20">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-7 h-7 rounded-full bg-cyan-600/40 flex items-center justify-center text-xs font-bold text-cyan-200">1</span>
                <h5 class="text-cyan-200 font-bold">THE GOAL</h5>
              </div>
              <p class="text-sm mb-3 opacity-80">What exactly do I want to make? (Write one sentence — just one.)</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-cyan-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-cyan-500/20">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-7 h-7 rounded-full bg-cyan-600/40 flex items-center justify-center text-xs font-bold text-cyan-200">2</span>
                <h5 class="text-cyan-200 font-bold">THE AUDIENCE</h5>
              </div>
              <p class="text-sm mb-3 opacity-80">For whom am I making it? (Myself? My friends? Everyone?)</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-cyan-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-cyan-500/20">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-7 h-7 rounded-full bg-cyan-600/40 flex items-center justify-center text-xs font-bold text-cyan-200">3</span>
                <h5 class="text-cyan-200 font-bold">THE START</h5>
              </div>
              <p class="text-sm mb-3 opacity-80">"My first, very small step is:"</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-cyan-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-cyan-500/20">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-7 h-7 rounded-full bg-cyan-600/40 flex items-center justify-center text-xs font-bold text-cyan-200">4</span>
                <h5 class="text-cyan-200 font-bold">PENCILO'S LESSON</h5>
              </div>
              <p class="text-sm mb-3 opacity-80">Think of a time you did something without a plan. What went wrong?</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-cyan-500/20"></div>
            </div>

          </div>
        </div>

        <!-- MEANING BOX -->
        <div class="mt-8 bg-gradient-to-br from-cyan-950/80 to-teal-950/60 p-8 rounded-3xl border border-cyan-400/30 shadow-2xl">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-2xl">💎</span>
            <h4 class="text-xl font-black text-cyan-300 uppercase tracking-wider">THE MEANING</h4>
          </div>
          <p class="text-gray-200 leading-relaxed text-lg">
            <strong class="text-lime-300">"LET'S GO"</strong> is power.<br/>
            The <strong class="text-cyan-300">plan</strong> is direction.<br/>
            Without direction, power exhausts you.<br/>
            <span class="text-cyan-200 italic mt-2 block">But together? Together they make steps that never turn back.</span>
          </p>
        </div>

        <!-- PARENTS MESSAGE -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-cyan-950/60 p-8 rounded-3xl border border-cyan-500/30 shadow-2xl relative">
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-cyan-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
          </div>
          <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
            Impulse is energy, but a plan is respect for time. When children learn to plan simply — one paper, three lines — <strong class="text-cyan-300">they learn not to waste themselves</strong> and to protect their confidence.
          </p>
          <div class="mt-4 bg-cyan-900/30 p-4 rounded-xl border border-cyan-500/20">
            <p class="text-cyan-200 font-bold text-sm flex items-center gap-2">💡 PRACTICAL TIP:</p>
            <p class="text-gray-300 text-sm mt-2">Before your child starts something new, give them a paper and ask: <em>"What are you making? For whom? What's the first step?"</em> Three questions. Ten minutes. And the difference is enormous.</p>
          </div>
        </div>

      </div>
    `
    }
  }
];
