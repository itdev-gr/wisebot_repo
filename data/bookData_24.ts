
import { Book } from '../types';

// ============================================================
// BOOK 24: ΤΟ ΑΓΟΡΙ ΠΟΥ ΠΙΣΤΕΥΕ ΟΤΙ ΔΕΝ ΗΤΑΝ ΕΞΥΠΝΟ
// Hero: Philippos
// Theme: ΜΑΘΗΣΗ / LEARNING
// ============================================================

// Cover image
const IMG_WISEBOT = "/images/wisebot.jpg";
const IMG_SPARKEN = "/images/sparken.jpg";

// Character solo images
const IMG_FILIPPOS = "/images/filippos.png";
const IMG_ALEXANDRA = "/images/alexandra.png";
const IMG_ELEFTHERIA = "/images/eleftheria.png";

// Story images
const IMG_KIDS_WITH_WISEBOT = "/images/paidia-kai-wisebot.png";
const IMG_KIDS_WISEBOT_2 = "/images/paidia-wisebot-2.png";
const IMG_KIDS_TOGETHER = "/images/ta-3-paidia.png";

export const BOOK_24: Book[] = [
  {
    id: 24,
    title: { el: "ΤΟ ΑΓΟΡΙ ΠΟΥ ΠΙΣΤΕΥΕ ΟΤΙ ΔΕΝ ΗΤΑΝ ΕΞΥΠΝΟ", en: "THE BOY WHO BELIEVED HE WASN'T SMART" },
    theme: { el: "ΜΑΘΗΣΗ", en: "LEARNING" },
    stepLabel: { el: "WISEBOT & ΜΑΘΗΣΗ", en: "WISEBOT & LEARNING" },
    author: "Wisebot & Sparken",
    cover: IMG_WISEBOT,
    videoUrl: "",
    description: {
      el: "Ο Φίλιππος πίστευε ότι δεν έχει μνήμη. Η Wisebot του έδειξε ότι το μυαλό δεν είναι κουβάς που γεμίζει, αλλά μυς που γυμνάζεται.",
      en: "Philippos believed he had no memory. Wisebot showed him that the mind is not a bucket to fill, but a muscle to train."
    },
    meaning: {
      el: "Το όριο σου δεν είναι το μυαλό σου. Είναι το πόσο μικρό το κρατάς.",
      en: "Your limit is not your mind. It's how small you keep it."
    },
    xp: 440,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- ΕΙΣΑΓΩΓΙΚΟ QUOTE -->
        <div class="relative bg-gradient-to-r from-slate-900 via-indigo-900/60 to-blue-900/40 p-10 rounded-2xl border border-indigo-500/30 text-center shadow-lg shadow-indigo-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Κεφάλαιο 24</div>
          <p class="italic text-indigo-200 text-xl mt-4 leading-relaxed">«Το πρόβλημα δεν είναι η μνήμη σου.<br/>Είναι η ιστορία που της λες.»</p>
          <div class="mt-4 w-16 h-0.5 bg-indigo-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- ΣΚΗΝΗ 1: Η ΑΠΟΦΑΣΗ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-indigo-300 tracking-wide">Η ΑΠΟΦΑΣΗ</h3>
          </div>
          <p>Το σχολικό κουδούνι χτύπησε και ο Φίλιππος ένιωσε το στομάχι του να σφίγγεται. Ήταν Τρίτη πρωί — μέρα μαθηματικών — και ο ήλιος που έμπαινε από τα παράθυρα της τάξης φαινόταν σαν προβολέας πάνω σε σκηνή που δεν ήθελε να ανέβει ποτέ.</p>
          <p class="mt-3">Κάθισε στο τελευταίο θρανίο. Πάντα στο τελευταίο. Εκεί που γίνεσαι αόρατος.</p>
          <p class="mt-3">«Ποιος θέλει να λύσει την άσκηση;» ρώτησε ο δάσκαλος. Χέρια σηκώθηκαν γύρω του.</p>
          <p class="mt-3">Ο Φίλιππος κράτησε τα χέρια του κάτω από το θρανίο. <em>Σφιγμένα.</em> Δεν ήταν ότι δεν ήξερε. Αλλά υπήρχε μια φωνή — πιο δυνατή από κάθε γνώση:</p>
          <p class="mt-3 text-indigo-200 font-medium">«Δεν είμαι καλός στα μαθήματα.»</p>
          <p class="mt-3">Το είχε πει τόσες φορές, που είχε γίνει αλήθεια. Όχι γιατί ήταν αλήθεια — αλλά γιατί η επανάληψη ενός ψέματος, αν γίνει αρκετές φορές, χτίζει τοίχους πιο στερεούς από τσιμέντο.</p>
          <p class="mt-3">Κάθε φορά που δυσκολευόταν, το μυαλό του ψιθύριζε: <strong class="text-red-400">«Σου το είπα. Δεν είσαι από αυτούς.»</strong></p>
          <p class="mt-3 text-gray-400 text-sm italic">Και ο Φίλιππος το πίστευε. Όχι επειδή κάποιος του το απέδειξε. Αλλά επειδή κανείς δεν του είχε δείξει κάτι διαφορετικό.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-indigo-500/15 shadow-lg shadow-indigo-900/20">
            <img src="${IMG_FILIPPOS}" alt="Φίλιππος" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-indigo-300/80 italic">Ο Φίλιππος στο τελευταίο θρανίο — αόρατος κατ' επιλογήν</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 2: Η ΠΑΡΑΙΤΗΣΗ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/30 text-blue-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-blue-300 tracking-wide">Η ΠΑΡΑΙΤΗΣΗ</h3>
          </div>
          <p>Το απόγευμα ήταν βαρύ σαν μόλυβδος. Ο ήλιος κρυμμένος πίσω από γκρίζα σύννεφα, και το φως στο δωμάτιο του Φίλιππου κουρασμένο, θαμπό.</p>
          <p class="mt-3">Το βιβλίο ήταν ανοιχτό μπροστά του. Σελίδα 47. Μαθηματικά. Οι αριθμοί κοιτούσαν τον Φίλιππο, και ο Φίλιππος κοιτούσε τους αριθμούς — σαν μονομαχία που κανείς δεν τραβούσε πρώτος.</p>
          <p class="mt-3">Η Αλεξάνδρα τον βρήκε ακουμπισμένο στο γραφείο, με βλέμμα αδειανό.</p>
          <p class="mt-4">— «Διάβαζες;» ρώτησε, κάθισε στην άκρη του κρεβατιού.</p>
          <p class="mt-3">— «Προσπάθησα.» Η φωνή του ήταν επίπεδη. Χωρίς χρώμα. «Δεν μένει τίποτα. Διαβάζω μια σελίδα, γυρνάω στην αρχή, και είναι σαν να μην την είδα ποτέ.»</p>
          <p class="mt-4">Από το ράφι, δύο μωβ κρύσταλλοι άρχισαν να λάμπουν. Η Wisebot άνοιξε τα φτερά της.</p>
          <p class="mt-4 text-indigo-300 font-bold text-lg">— «Δεν μένει τίποτα… ή δεν ξέρεις πώς να το κρατήσεις;»</p>
          <p class="mt-3">Ο Φίλιππος σήκωσε το κεφάλι. Μια σπίθα περιέργειας στα μάτια του.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Μερικές φορές η διαφορά ανάμεσα στην παραίτηση και την αρχή είναι μια ερώτηση.</p>
        </section>

        <!-- ΣΚΗΝΗ 3: Η ΙΣΤΟΡΙΑ ΤΗΣ ΜΝΗΜΗΣ -->
        <section class="bg-gradient-to-br from-indigo-900/30 via-blue-900/20 to-indigo-900/10 p-8 rounded-2xl border-l-4 border-indigo-500 my-8 shadow-xl shadow-indigo-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 font-black text-sm">03</span>
            <h3 class="text-3xl font-black text-indigo-400 tracking-wide">Η ΙΣΤΟΡΙΑ ΤΗΣ ΜΝΗΜΗΣ</h3>
          </div>
          <p>Ο Φίλιππος σήκωσε το βλέμμα. — «Δεν είμαι από αυτούς που θυμούνται», είπε. Ακλόνητη σιγουριά. Λάθος.</p>
          <p class="mt-3">Η Wisebot κατέβηκε αργά από το ράφι και ακούμπησε στο γραφείο.</p>
          <p class="mt-4"><strong class="text-indigo-200 text-lg">«Το πρόβλημα δεν είναι η μνήμη σου. Είναι η ιστορία που της λες.»</strong></p>
          <p class="mt-3">«Κάθε φορά που κάθεσαι να διαβάσεις, ποια είναι η πρώτη σκέψη σου;»</p>
          <p class="mt-3">Ο Φίλιππος σκέφτηκε. «Ότι δεν θα τα καταφέρω.»</p>
          <p class="mt-3">«Και μετά;»</p>
          <p class="mt-3">«Ότι θα ξεχάσω.»</p>
          <p class="mt-3">«Και μετά;»</p>
          <p class="mt-3">«Ότι δεν έχει νόημα να προσπαθήσω.»</p>
          <p class="mt-3 text-indigo-300 font-bold">«Βλέπεις; Θυμάσαι τέλεια — αλλά μόνο τις αποτυχίες. Την έχεις εκπαιδεύσει να θυμάται τα λάθος πράγματα.»</p>
          <p class="mt-3">Ο Φίλιππος δεν μίλησε. Αλλά η Αλεξάνδρα είδε μια ρωγμή στο τείχος.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Το μυαλό δεν είναι κουβάς που γεμίζει. Είναι μυς που γυμνάζεται.</p>

          <!-- ΕΙΚΟΝΑ: KIDS + WISEBOT -->
          <div class="my-8 rounded-2xl overflow-hidden border border-indigo-500/20 shadow-2xl shadow-indigo-900/30">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="Τα παιδιά και η Wisebot" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-indigo-300/80 italic">Η Wisebot αποκαλύπτει ένα μυστικό για τη μνήμη</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 4: ΤΟ ΤΕΣΤ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/30 text-blue-300 font-black text-sm">04</span>
            <h3 class="text-2xl font-black text-blue-300 tracking-wide">ΤΟ ΤΕΣΤ</h3>
          </div>
          <p>Την επόμενη μέρα, η Wisebot τους μάζεψε στο δωμάτιο. Κάθισαν σε κύκλο στο πάτωμα.</p>
          <p class="mt-3">«Θυμηθείτε 10 τυχαίες λέξεις», είπε η Wisebot. Η φωνή της ήταν ήρεμη, σχεδόν παιχνιδιάρικη.</p>
          <p class="mt-3">Ο Φίλιππος γέλασε. Όχι χαρούμενα — πικρά. «Αδύνατο. Εγώ δεν θυμάμαι ούτε 3.»</p>
          <p class="mt-3">«Δεν σε ρώτησα αν μπορείς», απάντησε η Wisebot. «Σε ρώτησα αν θα <em>δοκιμάσεις</em>.»</p>
          <p class="mt-3">Η Wisebot δεν έδωσε λίστα. Αντ' αυτού, αφηγήθηκε:</p>
          <p class="mt-4 text-indigo-200 font-medium">«Φανταστείτε μια <strong class="text-white">γάτα</strong> που οδηγούσε ένα κόκκινο <strong class="text-white">αυτοκίνητο</strong> πάνω σε ένα βουνό από <strong class="text-white">παγωτό</strong>. Κρατούσε ένα χρυσό <strong class="text-white">ρολόι</strong> που <strong class="text-white">τραγουδούσε</strong>. Στο πίσω κάθισμα ήταν ένα <strong class="text-white">βιβλίο</strong> με φτερά <strong class="text-white">πεταλούδας</strong>, και στον ουρανό έλαμπε ένα <strong class="text-white">φεγγάρι</strong> σε σχήμα <strong class="text-white">καρδιάς</strong>, ενώ από κάτω περνούσε ένα <strong class="text-white">τρένο</strong> φτιαγμένο από σοκολάτα.»</p>
          <p class="mt-4">Η εικόνα σχηματίστηκε μόνη της στο μυαλό του — τόσο παράλογη που ήταν αδύνατο να τη ξεχάσεις.</p>
          <p class="mt-3">«Τώρα», είπε η Wisebot, «πείτε μου τις 10 λέξεις.»</p>
          <p class="mt-3">Η Ελευθερία τις είπε πρώτη. Η Αλεξάνδρα θυμήθηκε 9. Ο Φίλιππος...</p>
          <p class="mt-3 text-white font-bold text-lg">Τις θυμήθηκε και τις 10.</p>
          <p class="mt-3">Κοίταξε τα χέρια του σαν να ανήκαν σε κάποιον που <em>μπορεί</em>.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Δεν ήταν μαγεία. Ήταν κάτι πιο απλό και πιο δυνατό: ο σωστός τρόπος.</p>
        </section>

        <!-- ΣΚΗΝΗ 5: Η ΕΙΚΟΝΑ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-indigo-300 tracking-wide">Η ΕΙΚΟΝΑ</h3>
          </div>
          <p>Η σιωπή του Φίλιππου ήταν βαριά — αλλά δεν ήταν η παλιά σιωπή. Δεν ήταν η σιωπή του «δεν μπορώ». Ήταν η σιωπή του «πώς γίνεται αυτό;»</p>
          <p class="mt-4"><strong class="text-indigo-200 text-lg">«Ο εγκέφαλος θυμάται εικόνες. Όχι βαρετές λέξεις.»</strong></p>
          <p class="mt-3">«Αλλά στο σχολείο μας δίνουν λέξεις», είπε ο Φίλιππος. «Πώς να τα κάνω εικόνα;»</p>
          <p class="mt-3">«Κάθε πληροφορία μπορεί να γίνει εικόνα», απάντησε η Wisebot. «Χρειάζεται μόνο φαντασία — και εσύ, Φίλιππε, φαντασία δεν σου λείπει.»</p>
          <p class="mt-3">Η Αλεξάνδρα χαμογέλασε. «Θυμάσαι πώς μου περιέγραψες εκείνο το όνειρο με δράκους πάνω από γήπεδα ποδοσφαίρου; Θυμόσουν κάθε χρώμα.»</p>
          <p class="mt-3 text-blue-300 font-bold">«Είναι ακριβώς το ίδιο μυαλό», είπε η Wisebot. «Κανείς δεν σου είπε ότι μπορείς να το χρησιμοποιείς έτσι και για τα μαθήματα. Όσο πιο τρελή η εικόνα, τόσο καλύτερα. Ο εγκέφαλος αγαπάει το παράξενο.»</p>
          <p class="mt-3">Ο Φίλιππος ένιωσε σαν πόρτα κλειδωμένη για χρόνια να ανοίγει αργά, αφήνοντας φως σε σκοτεινό δωμάτιο.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Ήταν η πρώτη φορά που σκέφτηκε: ίσως δεν φταίει το μυαλό μου. Ίσως φταίει ο τρόπος.</p>
        </section>

        <!-- ΣΚΗΝΗ 6: Η ΕΣΤΙΑΣΗ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/30 text-blue-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-blue-300 tracking-wide">Η ΕΣΤΙΑΣΗ</h3>
          </div>
          <p>Στο σχολείο, η Ελευθερία διάβαζε για ώρες. Ολόκληρα απογεύματα — πειθαρχημένη, ακούραστη.</p>
          <p class="mt-3">Ο Φίλιππος, αντίθετα, διάβαζε 10 λεπτά. Μετά κοίταζε το κινητό. Μετά νερό. Μετά ξανά κινητό. Ξαφνικά — μια ώρα είχε περάσει χωρίς μια παράγραφο.</p>
          <p class="mt-4">Η Wisebot παρατηρούσε. Αθόρυβα. Υπομονετικά. Σαν κουκουβάγια που παρακολουθεί τη νύχτα.</p>
          <p class="mt-3 text-indigo-300 font-bold text-lg">«Δεν χρειάζεστε περισσότερες ώρες», είπε μια μέρα. «Χρειάζεστε καλύτερη εστίαση.»</p>
          <p class="mt-4">Έκλεισαν τα κινητά. Έβαλαν χρονοδιακόπτη. «25 λεπτά. Μόνο διάβασμα. Μετά 5 λεπτά διάλειμμα.»</p>
          <p class="mt-3">Ο Φίλιππος σκέφτηκε: <em>25 λεπτά μπορώ.</em> Και μπορούσε. Δεν χρειαζόταν 3 ώρες. Χρειαζόταν 25 λεπτά <strong class="text-blue-200">πραγματικά</strong>.</p>
          <p class="mt-3">Μετά από τρεις κύκλους, τα μάτια του ήταν αλλιώτικα.</p>
          <p class="mt-3">«Θυμάμαι πράγματα», ψιθύρισε, σαν να ομολογούσε μυστικό. «Πραγματικά θυμάμαι.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Ξαφνικά, το μυαλό δεν έτρεχε παντού. Είχε ηρεμήσει. Είχε εστιάσει. Και στην εστίαση, βρήκε δύναμη που δεν ήξερε ότι υπάρχει.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-blue-500/15 shadow-lg shadow-blue-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="Τα παιδιά μαθαίνουν μαζί" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-blue-300/80 italic">Τρία παιδιά, 25 λεπτά, μηδέν κινητά — ένα μικρό θαύμα</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 7: Η ΕΡΩΤΗΣΗ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-indigo-300 tracking-wide">Η ΕΡΩΤΗΣΗ</h3>
          </div>
          <p>Πέρασαν μέρες. Ο Φίλιππος εξασκούνταν. Τα μαθηματικά έγιναν ταινία κινουμένων σχεδίων στο μυαλό του. Η ιστορία περιπέτεια. Η γεωγραφία ταξιδιωτικός οδηγός.</p>
          <p class="mt-3">Δεν ήταν εύκολο. Η παλιά φωνή ξαναγύριζε μερικές μέρες — αλλά τώρα είχε αποδείξεις ότι έλεγε ψέματα.</p>
          <p class="mt-4">Μια μέρα, ο δάσκαλος ρώτησε κάτι δύσκολο για τον Μέγα Αλέξανδρο. Η παλιά φωνή μουρμούρισε: <em>«Μην το τολμήσεις.»</em> Αλλά κάτι είχε αλλάξει. Δεν ρώτησε «Μπορώ;» — ρώτησε:</p>

          <div class="my-6 bg-gradient-to-r from-indigo-900/40 to-blue-900/40 p-8 rounded-2xl border border-indigo-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">«Πώς μπορώ;»</p>
          </div>

          <p class="mt-4">Δύο λέξεις. Αλλά η διαφορά ήταν σεισμική. «Μπορώ;» ζητά άδεια. «Πώς μπορώ;» ψάχνει τρόπο.</p>
          <p class="mt-3">Σήκωσε το χέρι. Αργά. Τρεμάμενα. Ο δάσκαλος τον κοίταξε έκπληκτος. «Ναι, Φίλιππε;»</p>
          <p class="mt-3">Η απάντηση βγήκε. Δεν ήταν τέλεια — είχε ένα λάθος. Αλλά τα βασικά ήταν σωστά.</p>
          <p class="mt-3">«Πολύ καλά, Φίλιππε», είπε ο δάσκαλος. <strong class="text-indigo-200">Η απάντηση δεν ήταν τέλεια. Αλλά δεν ήταν σιωπή.</strong></p>
          <p class="mt-3 text-gray-400 text-sm italic">Για πρώτη φορά, η φωνή του ακούστηκε στην τάξη. Και αυτό ήταν αρκετό.</p>
        </section>

        <!-- ΣΚΗΝΗ 8: ΤΟ ΣΩΜΑ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/30 text-blue-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-blue-300 tracking-wide">ΤΟ ΣΩΜΑ</h3>
          </div>
          <p>Σιγά σιγά, ο Φίλιππος πρόσεξε κάτι απλό αλλά σημαντικό. Τις μέρες που κοιμόταν καλά — 9 ώρες, χωρίς κινητό στο κρεβάτι — θυμόταν καλύτερα. Σαν να είχε κάποιος σκουπίσει ένα θολό τζάμι.</p>
          <p class="mt-3">Τις μέρες που έτρωγε πρόχειρα, το μυαλό του ήταν βαρύ. Σαν να σερνόταν μέσα σε ομίχλη. Τις μέρες που κουνιόταν — που έτρεχε, που έπαιζε μπάλα — ένιωθε πιο καθαρός.</p>
          <p class="mt-3">«Το μυαλό δεν ζει σε γυάλα», τους είπε η Wisebot. «Ζει σε σώμα. Αν το σώμα κουράζεται, το μυαλό σέρνεται σαν αρκούδα τον χειμώνα.»</p>
          <p class="mt-4 text-white font-bold text-lg">Δεν ήταν χαζός. Ήταν κουρασμένος.</p>
          <p class="mt-3">Ο Φίλιππος θύμωσε στην αρχή — κανείς δεν του το είχε πει νωρίτερα. Είχε περάσει χρόνια νομίζοντας ότι δεν ήταν αρκετά έξυπνος, ενώ δεν ήταν αρκετά ξεκούραστος.</p>
          <p class="mt-3">Η Αλεξάνδρα ακούμπησε στον ώμο του. «Δεν πειράζει. Τώρα ξέρεις.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η γνώση δεν αλλάζει το παρελθόν. Αλλά αλλάζει τα πάντα από εδώ και πέρα.</p>
        </section>

        <!-- ΣΚΗΝΗ 9: Η ΤΑΥΤΟΤΗΤΑ -->
        <section class="bg-gradient-to-br from-indigo-900/30 via-blue-900/20 to-indigo-900/10 p-8 rounded-2xl border-l-4 border-blue-500 my-8 shadow-xl shadow-blue-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 font-black text-sm">09</span>
            <h3 class="text-3xl font-black text-indigo-400 tracking-wide">Η ΤΑΥΤΟΤΗΤΑ</h3>
          </div>
          <p>Ένα βράδυ, ο Φίλιππος καθόταν στο κρεβάτι, με τα μάτια στο ταβάνι. Η Wisebot ήταν στο ράφι — ακίνητη, αλλά ξύπνια. Πάντα ξύπνια.</p>
          <p class="mt-3">«Δεν είμαι καλός στα μαθηματικά», είπε. Αλλά τη φορά αυτή, η φωνή του είχε κάτι διαφορετικό. Δεν ήταν σιγουριά. Ήταν ερώτηση.</p>
          <p class="mt-3">Η Wisebot άνοιξε τα μάτια. Τα μωβ κρύσταλλα λάμπανε στο σκοτάδι σαν φάρος στη θάλασσα.</p>
          <p class="mt-4 text-indigo-300 font-bold text-lg">«Είσαι παιδί που <em>μαθαίνει</em> μαθηματικά.»</p>
          <p class="mt-3">«"Δεν είμαι καλός" = μόνιμο. "Μαθαίνω" = αυτό που κάνεις τώρα. Αύριο μπορείς καλύτερα.»</p>
          <p class="mt-4">Μικρή διαφορά στα λόγια. <strong class="text-indigo-200">Τεράστια αλλαγή στη σκέψη.</strong> Κάτι <em>κλικ</em> μέσα του.</p>
          <p class="mt-3">«Δεν είμαι χαζός», ψιθύρισε.</p>
          <p class="mt-3">«Όχι», είπε η Wisebot. «Ποτέ δεν ήσουν.»</p>
          <p class="mt-3">«Απλά δεν ήξερα πώς.»</p>
          <p class="mt-3">«Και τώρα ξέρεις.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η ταυτότητα δεν είναι αυτό που γεννιέσαι. Είναι αυτό που επιλέγεις κάθε μέρα να γίνεις. Και ο Φίλιππος, εκείνο το βράδυ, έκανε μια νέα επιλογή.</p>

          <div class="my-8 rounded-2xl overflow-hidden border border-indigo-500/20 shadow-2xl shadow-indigo-900/30">
            <img src="${IMG_KIDS_WISEBOT_2}" alt="Ο Φίλιππος και η Wisebot" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-indigo-300/80 italic">«Δεν είμαι χαζός. Απλά δεν ήξερα πώς.»</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 10: ΤΟ ΟΡΙΟ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/30 text-blue-300 font-black text-sm">10</span>
            <h3 class="text-2xl font-black text-blue-300 tracking-wide">ΤΟ ΟΡΙΟ</h3>
          </div>
          <p>Ένα κρύο απόγευμα, ο Sparken κατέβηκε. Τα χρυσά μάτια του έλαμπαν σαν κεριά. Τα παιδιά κάθισαν σε σιωπή.</p>

          <div class="my-6 bg-gradient-to-r from-indigo-900/40 to-blue-900/40 p-8 rounded-2xl border border-indigo-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">«Το όριο σου δεν είναι το μυαλό σου.<br/><span class="text-indigo-300">Είναι το πόσο μικρό το κρατάς.»</span></p>
          </div>

          <p class="mt-4">Ο Φίλιππος ένιωσε τις λέξεις στο στομάχι. Όχι στο κεφάλι — στο στομάχι. Εκεί που οι αλήθειες πέφτουν βαριές πριν φτάσουν στο μυαλό.</p>
          <p class="mt-3">Δεν έγινε ξαφνικά ιδιοφυΐα. Αλλά έκανε κάτι πιο σημαντικό:</p>
          <p class="mt-3"><strong class="text-indigo-200">Σταμάτησε να αυτοσαμποτάρεται.</strong></p>
          <p class="mt-4">Άρχισε να κάνει ερωτήσεις χωρίς ντροπή. Να μαθαίνει με εικόνες. Να διαβάζει με σκοπό. Να προστατεύει την προσοχή του.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Γιατί η αλλαγή δεν γίνεται σε μια μέρα. Γίνεται σε χίλιες μικρές στιγμές. Και κάθε μία μετράει.</p>
        </section>

        <!-- ΣΚΗΝΗ 11: Η ΝΙΚΗ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 font-black text-sm">11</span>
            <h3 class="text-2xl font-black text-indigo-300 tracking-wide">Η ΝΙΚΗ</h3>
          </div>
          <p>Κάθε μικρή επιτυχία ήταν ψήφος εμπιστοσύνης: <strong class="text-indigo-200">«Είμαι παιδί που μπορεί.»</strong></p>
          <p class="mt-4">Στο τέλος της χρονιάς, δεν είχε τους υψηλότερους βαθμούς. Αλλά είχε κάτι πιο <em>επικίνδυνο</em> — για τα παλιά εμπόδια.</p>
          <p class="mt-3 text-white font-bold text-xl">Δεν φοβόταν να μάθει.</p>
          <p class="mt-4">Η Wisebot στάθηκε μπροστά του. Τα μωβ μάτια της πάλλονταν γεμάτα κάτι που θα ονόμαζες υπερηφάνεια.</p>
          <p class="mt-3 text-indigo-300 font-bold text-lg">«Το μυαλό σου δεν είναι κλειδωμένο. Απλώς κανείς δεν σου είχε δώσει το κλειδί.»</p>
          <p class="mt-4">Ο Φίλιππος χαμογέλασε πλατιά. «Ξέρω. Αλλά τώρα βρήκα ότι το κλειδί ήμουν εγώ.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η μεγαλύτερη νίκη δεν είναι να κερδίσεις τους άλλους. Είναι να νικήσεις τη φωνή μέσα σου που λέει «δεν μπορείς».</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-indigo-500/20 shadow-2xl shadow-indigo-900/20">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="Ο Φίλιππος κοιτάζει μπροστά" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-indigo-300/80 italic">«Το κλειδί ήμουν εγώ.»</div>
          </div>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-indigo-950/60 p-8 rounded-3xl border-2 border-dashed border-indigo-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-indigo-300 uppercase tracking-wider">💎 JOURNAL: Η ΜΑΘΗΣΗ ΜΟΥ</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Γράψε. Σκέψου. Νιώσε. Δεν υπάρχει λάθος απάντηση.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-indigo-500/15">
              <h5 class="text-indigo-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-indigo-600/40 flex items-center justify-center text-xs font-black">1</span>
                Η ΤΑΜΠΕΛΑ
              </h5>
              <p class="text-sm mb-3 opacity-80">Τι λες για τον εαυτό σου; Ποια «ταμπέλα» έχεις κολλήσει; (π.χ. «Δεν είμαι καλός στα...», «Δεν μπορώ να...»)</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-indigo-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-indigo-500/15">
              <h5 class="text-indigo-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-indigo-600/40 flex items-center justify-center text-xs font-black">2</span>
                ΤΟ ΚΟΛΠΟ
              </h5>
              <p class="text-sm mb-3 opacity-80">Πώς μπορείς να κάνεις κάτι δύσκολο πιο αστείο, πιο εικονικό, ή πιο ζωντανό στο μυαλό σου;</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-indigo-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-indigo-500/15">
              <h5 class="text-indigo-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-indigo-600/40 flex items-center justify-center text-xs font-black">3</span>
                Ο ΝΕΟΣ ΕΑΥΤΟΣ
              </h5>
              <p class="text-sm mb-3 opacity-80">Συμπλήρωσε:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-indigo-500/10 text-indigo-200">
                <p class="text-sm font-medium">«Δεν είμαι κακός/ή σε __________.</p>
                <p class="text-sm font-medium mt-1">Είμαι κάποιος/α που το μαθαίνει.»</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΝΟΗΜΑ / MEANING BOX -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-r from-indigo-900/30 to-blue-900/30 p-6 rounded-2xl border border-indigo-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-indigo-300 uppercase tracking-wider">Το νόημα αυτού του κεφαλαίου</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            Η εξυπνάδα δεν είναι κάτι που γεννιέσαι με αυτό — είναι κάτι που <strong class="text-indigo-300">χτίζεις</strong>. Ο εγκέφαλος θυμάται εικόνες, όχι βαρετές λέξεις. Η εστίαση χρειάζεται προστασία, όχι μόνο προσπάθεια. Και η πιο σημαντική αλλαγή δεν είναι στον τρόπο που μαθαίνεις — είναι στην <strong class="text-blue-300">ιστορία</strong> που λες για τον εαυτό σου.
          </p>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-indigo-950/60 p-8 rounded-3xl border border-indigo-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-indigo-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              Η νοοτροπία ανάπτυξης (<strong class="text-white">Growth Mindset</strong>) είναι το κλειδί. Ένα παιδί που πιστεύει «δεν μπορώ» δεν θα προσπαθήσει. Ένα παιδί που πιστεύει «δεν μπορώ <em>ακόμα</em>» θα βρει τρόπο.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Αντί να πούμε «δεν μπορείς», λέμε «δεν μπορείς <strong class="text-indigo-300">ακόμα</strong>». Μια μικρή λέξη — μια τεράστια αλλαγή. Διδάξτε τα παιδιά <em>πώς</em> να μαθαίνουν (εστίαση, εικόνες, διαλείμματα, ύπνος) και όχι μόνο <em>τι</em> να μαθαίνουν.
            </p>
            <div class="mt-4 bg-indigo-900/20 p-4 rounded-xl border border-indigo-500/10">
              <p class="text-sm text-indigo-200 font-medium">💡 Δοκιμάστε σήμερα: Όταν το παιδί σας λέει «δεν μπορώ», προσθέστε ήρεμα τη λέξη «ακόμα». Και μετά ρωτήστε: «Τι θα σε βοηθούσε να μάθεις;»</p>
            </div>
          </div>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- INTRO QUOTE -->
        <div class="relative bg-gradient-to-r from-slate-900 via-indigo-900/60 to-blue-900/40 p-10 rounded-2xl border border-indigo-500/30 text-center shadow-lg shadow-indigo-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Chapter 24</div>
          <p class="italic text-indigo-200 text-xl mt-4 leading-relaxed">"The problem isn't your memory.<br/>It's the story you tell it."</p>
          <div class="mt-4 w-16 h-0.5 bg-indigo-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- SCENE 1: THE DECISION -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-indigo-300 tracking-wide">THE DECISION</h3>
          </div>
          <p>The school bell rang and Philippos felt his stomach tighten. It was Tuesday morning — math day — and the sun streaming through the classroom windows felt like a spotlight on a stage he never wanted to climb.</p>
          <p class="mt-3">He sat at the last desk. Always the last desk. Where you become invisible.</p>
          <p class="mt-3">"Who wants to solve this exercise?" the teacher asked. Hands rose around him.</p>
          <p class="mt-3">Philippos kept his hands under the desk. <em>Clenched.</em> It wasn't that he didn't know. But there was a voice — louder than any knowledge:</p>
          <p class="mt-3 text-indigo-200 font-medium">"I'm not good at school."</p>
          <p class="mt-3">He had said it so many times that it had become true. Not because it was true — but because repeating a lie enough times builds walls stronger than concrete.</p>
          <p class="mt-3">Every time he struggled, his mind whispered: <strong class="text-red-400">"I told you so. You're not one of them."</strong></p>
          <p class="mt-3 text-gray-400 text-sm italic">And Philippos believed it. Not because anyone had proved it. But because nobody had ever shown him anything different.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-indigo-500/15 shadow-lg shadow-indigo-900/20">
            <img src="${IMG_FILIPPOS}" alt="Philippos" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-indigo-300/80 italic">Philippos at the last desk — invisible by choice</div>
          </div>
        </section>

        <!-- SCENE 2: GIVING UP -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/30 text-blue-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-blue-300 tracking-wide">GIVING UP</h3>
          </div>
          <p>The afternoon was heavy as lead. The sun hidden behind grey clouds, the light in Philippos's room dim and tired.</p>
          <p class="mt-3">The book was open before him. Page 47. Mathematics. The numbers stared at Philippos, and Philippos stared at the numbers — like a standoff where neither side drew first.</p>
          <p class="mt-3">Alexandra found him leaning on the desk, gaze empty.</p>
          <p class="mt-4">— "Were you reading?" she asked, sitting on the edge of the bed.</p>
          <p class="mt-3">— "I tried." His voice was flat. Colorless. "Nothing sticks. I read a page, go back to the beginning, and it's like I never saw it."</p>
          <p class="mt-4">From the shelf, two purple crystals began to glow. Wisebot opened her wings.</p>
          <p class="mt-4 text-indigo-300 font-bold text-lg">— "Nothing sticks... or you don't know how to keep it?"</p>
          <p class="mt-3">Philippos raised his head. A spark of curiosity in his eyes.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Sometimes the difference between giving up and beginning is a question.</p>
        </section>

        <!-- SCENE 3: THE STORY OF MEMORY -->
        <section class="bg-gradient-to-br from-indigo-900/30 via-blue-900/20 to-indigo-900/10 p-8 rounded-2xl border-l-4 border-indigo-500 my-8 shadow-xl shadow-indigo-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 font-black text-sm">03</span>
            <h3 class="text-3xl font-black text-indigo-400 tracking-wide">THE STORY OF MEMORY</h3>
          </div>
          <p>Philippos raised his gaze. "I'm not one of those who remember," he said. Unshakeable certainty. Wrong.</p>
          <p class="mt-3">Wisebot descended slowly from the shelf and landed on the desk.</p>
          <p class="mt-4"><strong class="text-indigo-200 text-lg">"The problem isn't your memory. It's the story you tell it."</strong></p>
          <p class="mt-3">"Every time you sit down to study, what's your first thought?"</p>
          <p class="mt-3">Philippos considered. "That I won't manage."</p>
          <p class="mt-3">"And then?"</p>
          <p class="mt-3">"That I'll forget."</p>
          <p class="mt-3">"And then?"</p>
          <p class="mt-3">"That there's no point trying."</p>
          <p class="mt-3 text-indigo-300 font-bold">"You see? You remember perfectly — but only the failures. You've trained it to remember the wrong things."</p>
          <p class="mt-3">Philippos said nothing. But Alexandra saw a crack in the wall.</p>
          <p class="mt-3 text-gray-400 text-sm italic">The mind is not a bucket to fill. It's a muscle to train.</p>

          <!-- IMAGE: KIDS + WISEBOT -->
          <div class="my-8 rounded-2xl overflow-hidden border border-indigo-500/20 shadow-2xl shadow-indigo-900/30">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="The children and Wisebot" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-indigo-300/80 italic">Wisebot reveals a secret about memory</div>
          </div>
        </section>

        <!-- SCENE 4: THE TEST -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/30 text-blue-300 font-black text-sm">04</span>
            <h3 class="text-2xl font-black text-blue-300 tracking-wide">THE TEST</h3>
          </div>
          <p>The next day, Wisebot gathered them all. They sat in a circle on the floor.</p>
          <p class="mt-3">"Remember 10 random words," said Wisebot. Her voice was calm, almost playful.</p>
          <p class="mt-3">Philippos laughed. Not happily — bitterly. "Impossible. I can't even remember 3."</p>
          <p class="mt-3">"I didn't ask if you can," Wisebot replied. "I asked if you'll <em>try</em>."</p>
          <p class="mt-3">Wisebot didn't give a list. Instead, she narrated:</p>
          <p class="mt-4 text-indigo-200 font-medium">"Imagine a <strong class="text-white">cat</strong> driving a red <strong class="text-white">car</strong> over a mountain of <strong class="text-white">ice cream</strong>. She was holding a golden <strong class="text-white">clock</strong> that was <strong class="text-white">singing</strong>. In the back seat was a <strong class="text-white">book</strong> with <strong class="text-white">butterfly</strong> wings, and in the sky shone a <strong class="text-white">moon</strong> shaped like a <strong class="text-white">heart</strong>, while below passed a <strong class="text-white">train</strong> made of chocolate."</p>
          <p class="mt-4">The image formed by itself in his mind — so absurd it was impossible to forget.</p>
          <p class="mt-3">"Now," said Wisebot, "tell me the 10 words."</p>
          <p class="mt-3">Eleftheria said them first. Alexandra remembered 9. Philippos...</p>
          <p class="mt-3 text-white font-bold text-lg">He remembered all 10.</p>
          <p class="mt-3">He sat in silence. He looked at his hands as if seeing them for the first time. As if they belonged to someone else — someone who <em>can</em>.</p>
          <p class="mt-3 text-gray-400 text-sm italic">It wasn't magic. It was something simpler and more powerful: the right method.</p>
        </section>

        <!-- SCENE 5: THE IMAGE -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-indigo-300 tracking-wide">THE IMAGE</h3>
          </div>
          <p>Philippos's silence was heavy — but it wasn't the old silence. It wasn't the silence of "I can't." It was the silence of "how is this possible?"</p>
          <p class="mt-4"><strong class="text-indigo-200 text-lg">"The brain remembers images. Not boring words."</strong></p>
          <p class="mt-3">"But at school they give us words," said Philippos. "How do I turn those into images?"</p>
          <p class="mt-3">"Every piece of information can become an image," Wisebot replied. "All it takes is imagination — and you, Philippos, have no shortage of imagination."</p>
          <p class="mt-3">Alexandra smiled. "Remember how you described that dream about dragons flying over football stadiums? You remembered every color."</p>
          <p class="mt-3 text-blue-300 font-bold">"It's exactly the same brain," said Wisebot. "Nobody had told you that you could use it this way for school, too. The crazier the image, the better. The brain loves the strange."</p>
          <p class="mt-3">Philippos felt like a door locked for years was opening slowly, letting light into a dark room.</p>
          <p class="mt-3 text-gray-400 text-sm italic">It was the first time he thought: maybe it's not my brain's fault. Maybe it's the method.</p>
        </section>

        <!-- SCENE 6: THE FOCUS -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/30 text-blue-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-blue-300 tracking-wide">THE FOCUS</h3>
          </div>
          <p>At school, Eleftheria studied for hours. Entire afternoons — disciplined, tireless.</p>
          <p class="mt-3">Philippos, on the other hand, studied for 10 minutes. Then his phone. Then water. Then phone again. Suddenly — an hour had passed and not a single paragraph read.</p>
          <p class="mt-4">Wisebot observed. Silently. Patiently. Like an owl watching the night.</p>
          <p class="mt-3 text-indigo-300 font-bold text-lg">"You don't need more hours," she said one day. "You need better focus."</p>
          <p class="mt-4">They turned off phones. Set a timer. "25 minutes. Only studying. Then a 5-minute break."</p>
          <p class="mt-3">Philippos thought: <em>25 minutes I can do.</em> And he could. He didn't need 3 hours. He needed 25 minutes <strong class="text-blue-200">truly</strong>.</p>
          <p class="mt-3">After three cycles, his eyes were different.</p>
          <p class="mt-3">"I'm remembering things," he whispered, as if confessing a secret. "I'm actually remembering."</p>
          <p class="mt-3 text-gray-400 text-sm italic">Suddenly, the mind wasn't racing everywhere. It had calmed down. It had focused. And in focus, it found strength it didn't know existed.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-blue-500/15 shadow-lg shadow-blue-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="The children studying together" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-blue-300/80 italic">Three children, 25 minutes, zero phones — a small miracle</div>
          </div>
        </section>

        <!-- SCENE 7: THE QUESTION -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-indigo-300 tracking-wide">THE QUESTION</h3>
          </div>
          <p>Days passed. Philippos practiced. Mathematics became a cartoon in his mind. History an adventure. Geography a travel guide to fantastical lands.</p>
          <p class="mt-3">It wasn't easy. The old voice returned some days — but now he had evidence it was lying.</p>
          <p class="mt-4">One day, the teacher asked something difficult about Alexander the Great. The old voice murmured: <em>"Don't you dare."</em> But something had changed. He didn't ask "Can I?" — he asked:</p>

          <div class="my-6 bg-gradient-to-r from-indigo-900/40 to-blue-900/40 p-8 rounded-2xl border border-indigo-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">"How can I?"</p>
          </div>

          <p class="mt-4">Two words. But the difference was seismic. "Can I?" asks for permission. "How can I?" searches for a way.</p>
          <p class="mt-3">He raised his hand. Slowly. Trembling. The teacher looked at him, surprised. "Yes, Philippos?"</p>
          <p class="mt-3">The answer came out. Not perfect — one date wrong. But the fundamentals were correct.</p>
          <p class="mt-3">"Very good, Philippos," the teacher said. <strong class="text-indigo-200">The answer wasn't perfect. But it wasn't silence.</strong></p>
          <p class="mt-3 text-gray-400 text-sm italic">For the first time, his voice was heard in the classroom. And that was enough.</p>
        </section>

        <!-- SCENE 8: THE BODY -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/30 text-blue-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-blue-300 tracking-wide">THE BODY</h3>
          </div>
          <p>Slowly, Philippos noticed something simple but important. On days he slept well — 9 hours, no phone in bed — he remembered better. As if someone had wiped a foggy window clean.</p>
          <p class="mt-3">On days he ate junk, his mind was heavy, dragging through mist. On days he moved — when he ran, when he played football — he felt clearer.</p>
          <p class="mt-3">"The mind doesn't live in a jar," Wisebot told them. "It lives in a body. If the body is tired, the mind crawls like a bear in winter."</p>
          <p class="mt-4 text-white font-bold text-lg">He wasn't stupid. He was tired.</p>
          <p class="mt-3">Philippos was angry at first — nobody had told him sooner. He had spent years thinking he wasn't smart enough, when in truth he wasn't rested enough.</p>
          <p class="mt-3">Alexandra leaned on his shoulder. "It's okay. Now you know."</p>
          <p class="mt-3 text-gray-400 text-sm italic">Knowledge doesn't change the past. But it changes everything from this point forward.</p>
        </section>

        <!-- SCENE 9: THE IDENTITY -->
        <section class="bg-gradient-to-br from-indigo-900/30 via-blue-900/20 to-indigo-900/10 p-8 rounded-2xl border-l-4 border-blue-500 my-8 shadow-xl shadow-blue-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 font-black text-sm">09</span>
            <h3 class="text-3xl font-black text-indigo-400 tracking-wide">THE IDENTITY</h3>
          </div>
          <p>One night, Philippos sat on his bed, eyes on the ceiling. Wisebot was on the shelf — still, but awake. Always awake.</p>
          <p class="mt-3">"I'm not good at math," he said. But this time, his voice had something different. It wasn't certainty. It was a question.</p>
          <p class="mt-3">Wisebot opened her eyes. The purple crystals glowed in the darkness like a lighthouse on the sea.</p>
          <p class="mt-4 text-indigo-300 font-bold text-lg">"You are a child who is <em>learning</em> math."</p>
          <p class="mt-3">"'I'm not good' = permanent. 'I'm learning' = what you do now. Tomorrow you can do better."</p>
          <p class="mt-4">Small difference in words. <strong class="text-indigo-200">Enormous change in thinking.</strong> Something <em>clicked</em> inside him.</p>
          <p class="mt-3">"I'm not stupid," he whispered.</p>
          <p class="mt-3">"No," said Wisebot. "You never were."</p>
          <p class="mt-3">"I just didn't know how."</p>
          <p class="mt-3">"And now you do."</p>
          <p class="mt-3 text-gray-400 text-sm italic">Identity isn't what you're born with. It's what you choose to become each day. And Philippos, that night, made a new choice.</p>

          <div class="my-8 rounded-2xl overflow-hidden border border-indigo-500/20 shadow-2xl shadow-indigo-900/30">
            <img src="${IMG_KIDS_WISEBOT_2}" alt="Philippos and Wisebot" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-indigo-300/80 italic">"I'm not stupid. I just didn't know how."</div>
          </div>
        </section>

        <!-- SCENE 10: THE LIMIT -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/30 text-blue-300 font-black text-sm">10</span>
            <h3 class="text-2xl font-black text-blue-300 tracking-wide">THE LIMIT</h3>
          </div>
          <p>One cold afternoon, Sparken descended. His golden eyes shone like candles. The children sat in silence.</p>

          <div class="my-6 bg-gradient-to-r from-indigo-900/40 to-blue-900/40 p-8 rounded-2xl border border-indigo-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">"Your limit is not your mind.<br/><span class="text-indigo-300">It's how small you keep it."</span></p>
          </div>

          <p class="mt-4">Philippos felt the words in his stomach. Not in his head — in his stomach. Where truths land heavy before they reach the brain.</p>
          <p class="mt-3">He didn't suddenly become a genius. But he did something more important:</p>
          <p class="mt-3"><strong class="text-indigo-200">He stopped sabotaging himself.</strong></p>
          <p class="mt-4">He began asking questions without shame. Learning with images. Studying with purpose. Protecting his attention.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Because change doesn't happen in a day. It happens in a thousand small moments. And every one of them counts.</p>
        </section>

        <!-- SCENE 11: THE VICTORY -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 font-black text-sm">11</span>
            <h3 class="text-2xl font-black text-indigo-300 tracking-wide">THE VICTORY</h3>
          </div>
          <p>Every small success was a vote of confidence: <strong class="text-indigo-200">"I am a child who can."</strong></p>
          <p class="mt-4">At the end of the year, he didn't have the highest grades. But he had something more <em>dangerous</em> — for the old barriers.</p>
          <p class="mt-3 text-white font-bold text-xl">He wasn't afraid to learn.</p>
          <p class="mt-4">Wisebot stood before him. Her purple eyes pulsed, full of something you would call pride.</p>
          <p class="mt-3 text-indigo-300 font-bold text-lg">"Your mind is not locked. Simply no one had given you the key."</p>
          <p class="mt-4">Philippos smiled wide. "I know. But now I found that the key was me."</p>
          <p class="mt-3 text-gray-400 text-sm italic">The greatest victory isn't beating others. It's defeating the voice inside you that says "you can't."</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-indigo-500/20 shadow-2xl shadow-indigo-900/20">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="Philippos looking forward" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-indigo-300/80 italic">"The key was me."</div>
          </div>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-indigo-950/60 p-8 rounded-3xl border-2 border-dashed border-indigo-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-indigo-300 uppercase tracking-wider">💎 JOURNAL: MY LEARNING</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Write. Think. Feel. There is no wrong answer.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-indigo-500/15">
              <h5 class="text-indigo-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-indigo-600/40 flex items-center justify-center text-xs font-black">1</span>
                THE LABEL
              </h5>
              <p class="text-sm mb-3 opacity-80">What do you say about yourself? What "label" have you stuck on? (e.g. "I'm bad at...", "I can't do...")</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-indigo-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-indigo-500/15">
              <h5 class="text-indigo-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-indigo-600/40 flex items-center justify-center text-xs font-black">2</span>
                THE TRICK
              </h5>
              <p class="text-sm mb-3 opacity-80">How can you make something difficult funnier, more visual, or more alive in your mind?</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-indigo-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-indigo-500/15">
              <h5 class="text-indigo-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-indigo-600/40 flex items-center justify-center text-xs font-black">3</span>
                THE NEW SELF
              </h5>
              <p class="text-sm mb-3 opacity-80">Complete the sentence:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-indigo-500/10 text-indigo-200">
                <p class="text-sm font-medium">"I am not bad at __________.</p>
                <p class="text-sm font-medium mt-1">I am someone who is learning it."</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- MEANING BOX -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-r from-indigo-900/30 to-blue-900/30 p-6 rounded-2xl border border-indigo-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-indigo-300 uppercase tracking-wider">The Meaning of This Chapter</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            Being smart isn't something you're born with — it's something you <strong class="text-indigo-300">build</strong>. The brain remembers images, not boring words. Focus needs protection, not just effort. And the most important change isn't how you learn — it's the <strong class="text-blue-300">story</strong> you tell about yourself.
          </p>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- MESSAGE FOR PARENTS -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-indigo-950/60 p-8 rounded-3xl border border-indigo-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-indigo-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              <strong class="text-white">Growth Mindset</strong> is the key. A child who believes "I can't" will not try. A child who believes "I can't <em>yet</em>" will find a way.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Instead of saying "you can't," say "you can't <strong class="text-indigo-300">yet</strong>." A small word — an enormous change. Teach your children <em>how</em> to learn (focus, images, breaks, sleep) and not just <em>what</em> to learn.
            </p>
            <div class="mt-4 bg-indigo-900/20 p-4 rounded-xl border border-indigo-500/10">
              <p class="text-sm text-indigo-200 font-medium">💡 Try today: When your child says "I can't," calmly add the word "yet." And then ask: "What would help you learn?"</p>
            </div>
          </div>
        </div>

      </div>
    `
    }
  }
];
