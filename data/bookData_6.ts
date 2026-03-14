
import { Book } from '../types';

// ============================================================
// 📖 BOOK 6: ΜΑΣ ΚΟΡΟΪΔΕΥΟΥΝ / THEY ARE MOCKING US
// Heroes: WiseBot & Crocus
// Theme: ΑΝΤΟΧΗ / RESILIENCE
// ============================================================

// Cover image
const IMG_WISEBOT = "/images/wisebot.jpg";

// Story images (will be updated with full-res URLs)
const IMG_KIDS_WITH_WISEBOT = "/images/paidia-kai-wisebot.png";
const IMG_KIDS_TOGETHER = "/images/ta-3-paidia.png";

export const BOOK_6: Book[] = [
  {
    id: 6,
    title: { el: "ΜΑΣ ΚΟΡΟΪΔΕΥΟΥΝ", en: "THEY ARE MOCKING US" },
    theme: { el: "ΑΝΤΟΧΗ", en: "RESILIENCE" },
    stepLabel: { el: "WISEBOT & Η ΑΝΤΟΧΗ", en: "WISEBOT & RESILIENCE" },
    author: "Wisebot & Crocus",
    cover: IMG_WISEBOT,
    videoUrl: "",
    description: {
      el: "Μια ιστορία για τη στιγμή που ο κόσμος γελά — και εσύ πρέπει να διαλέξεις αν θα μικρύνεις ή θα μεγαλώσεις.",
      en: "A story about the moment the world laughs — and you have to choose whether to shrink or grow."
    },
    meaning: {
      el: "Όταν δημιουργείς κάτι αληθινό, κάποιοι θα γελάσουν. Όχι επειδή είναι κακό. Αλλά επειδή δεν είναι έτοιμοι.",
      en: "When you create something real, some will laugh. Not because it's bad. But because they aren't ready."
    },
    xp: 160,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- ═══════════ ΕΝΑΡΚΤΗΡΙΑ ΦΡΑΣΗ ═══════════ -->
        <div class="relative bg-gradient-to-r from-orange-900/60 to-amber-900/60 p-8 rounded-2xl border border-orange-500/30 text-center shadow-lg">
          <p class="text-3xl font-black text-orange-200 mb-2">«Δεν πονάει το γέλιο.»</p>
          <p class="text-xl text-amber-300/80 italic">«Πονάει το ότι περίμενες χειροκρότημα.»</p>
        </div>

        <!-- ═══════════ ΣΚΗΝΗ 1 ═══════════ -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-orange-600 text-white text-xs font-black px-3 py-1 rounded-full tracking-widest shadow-lg shadow-orange-600/30">ΣΚΗΝΗ 01</span>
            <h3 class="text-2xl font-black text-orange-400 tracking-wide">ΤΟ ΓΕΛΙΟ ΠΟΥ ΔΕΝ ΗΤΑΝ ΑΣΤΕΙΟ</h3>
          </div>
          <p>Η αυλή είχε φασαρία. Μπάλες. Φωνές. Τρέξιμο. Παιδιά παντού — κανένα τους δεν κοίταζε στ' αλήθεια κάτι.</p>
          <p class="mt-3">Ο Φίλιππος κρατούσε το κουτί με το παιχνίδι τους σφιχτά στα χέρια. Η Αλεξάνδρα το είχε στολίσει μέρες τώρα — κάθε πρωί λίγο ακόμα. Η Ελευθερία είχε γράψει τις οδηγίες στο πίσω μέρος, με μικρά κόκκινα γράμματα, για να είναι «σωστά».</p>
          <p class="mt-3">— «Να το δείξουμε;» ρώτησε ο Φίλιππος, και η φωνή του τρέμιζε λίγο.</p>
          <p class="mt-3">Το άνοιξαν. Στην αρχή… σιωπή. Κάποια παιδιά κοίταξαν. Μετά ένα χαμόγελο — αλλά όχι αυτό που περίμεναν.</p>
          <p class="mt-3">«Τι είναι αυτό;» — «Χαχα, ποιος θα κάτσει να το φτιάξει μόνος του;» — «Αυτό δεν υπάρχει στο YouTube;»</p>
          <p class="mt-4">Κάποιος μιμήθηκε τον τρόπο που μιλούσε ο Φίλιππος. Κάποιος άλλος γέλασε λίγο πιο δυνατά απ' όλους — για να τον ακούσουν. <strong class="text-white">Ο ήχος εκείνου του γέλιου κόλλησε στο κεφάλι της Αλεξάνδρας. Και δεν έφυγε.</strong></p>
        </section>

        <!-- ═══════════ ΣΚΗΝΗ 2 ═══════════ -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-red-600 text-white text-xs font-black px-3 py-1 rounded-full tracking-widest shadow-lg shadow-red-600/30">ΣΚΗΝΗ 02</span>
            <h3 class="text-2xl font-black text-red-400 tracking-wide">Ο ΘΥΜΟΣ ΤΟΥ ΚΡΟΚΟΔΕΙΛΟΥ</h3>
          </div>
          <p>Ο Crocus δεν άντεξε. Κοκκίνισε — κυριολεκτικά. Τα μάγουλα, η ουρά, ακόμα και τα μάτια του γυάλιζαν.</p>
          <p class="mt-3">«Να τους πούμε! Να τους δείξουμε πόσο κάνουν λάθος!» Η ουρά του χτυπούσε ρυθμικά το χώμα, σαν μετρονόμος θυμού.</p>
          <p class="mt-3">— «Ηρέμησε», είπε η Ελευθερία χαμηλόφωνα.</p>
          <p class="mt-3">— «Γιατί;» φώναξε ο Φίλιππος. «Μας κοροϊδεύουν! Δεν κατάλαβαν τίποτα! Δεν ξέρουν πόσο δουλέψαμε!»</p>
          <p class="mt-4">Ο Crocus έκανε ένα βήμα μπροστά, με τα νύχια του ανοιχτά. <strong class="text-orange-500">«Ένα λεπτό και τους έχω. Ένα.»</strong></p>
          <p class="mt-3">Η Αλεξάνδρα τον τράβηξε πίσω από την ουρά. «Σταμάτα… Δεν αξίζει.»</p>
          <p class="mt-3 italic text-orange-300/70">Αλλά η φωνή της δεν ακουγόταν σαν σιγουριά. Ακουγόταν σαν παράδοση.</p>
        </section>

        <!-- ═══════════ ΣΚΗΝΗ 3 ═══════════ -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-gray-600 text-white text-xs font-black px-3 py-1 rounded-full tracking-widest shadow-lg shadow-gray-600/30">ΣΚΗΝΗ 03</span>
            <h3 class="text-2xl font-black text-gray-400 tracking-wide">Η ΝΤΡΟΠΗ ΠΟΥ ΔΕΝ ΛΕΓΕΤΑΙ</h3>
          </div>
          <p>Δεν ήταν ο θυμός που πόνεσε πιο πολύ. Ήταν αυτό που ήρθε μετά τον θυμό — η σκέψη: <em class="text-red-300">«Κι αν έχουν δίκιο;»</em></p>
          <p class="mt-3">Η Αλεξάνδρα κοίταξε το παιχνίδι. Ξαφνικά της φάνηκε μικρό. Φτηνό. Ασήμαντο. «Ίσως να μην είναι τόσο καλό…» ψιθύρισε, και τα μάτια της ήταν υγρά.</p>
          <p class="mt-3">Ο Φίλιππος γύρισε απότομα. «Μην το λες αυτό! Είναι δικό μας!»</p>
          <p class="mt-3">Η Ελευθερία δεν μίλησε. Απλώς έκλεισε το τετράδιο. Σιγά σιγά. Σαν να έκλεινε πόρτα.</p>
          <p class="mt-4 text-gray-400 italic">Η ντροπή δεν φωνάζει ποτέ. Σε σκεπάζει σιωπηλά — μέχρι να μην βλέπεις πια τον εαυτό σου.</p>
        </section>

        <!-- ═══════════ ΕΙΚΟΝΑ ═══════════ -->
        <div class="flex justify-center my-8">
          <div class="relative group">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="Τα παιδιά με τη WiseBot" class="rounded-2xl shadow-2xl shadow-orange-500/20 max-h-96 object-contain border-2 border-orange-500/30" />
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-2xl">
              <p class="text-sm text-orange-200 text-center font-medium">Ο Φίλιππος, η Αλεξάνδρα, η Ελευθερία και η WiseBot</p>
            </div>
          </div>
        </div>

        <!-- ═══════════ ΣΚΗΝΗ 4 ═══════════ -->
        <section class="bg-orange-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-amber-500 text-black text-xs font-black px-3 py-1 rounded-full tracking-widest">ΣΚΗΝΗ 04</span>
            <h3 class="text-2xl font-black text-amber-400 tracking-wide">Η WISEBOT ΔΕΝ ΜΙΛΗΣΕ ΑΜΕΣΩΣ</h3>
          </div>
          <p>Το φως δεν ήρθε δυνατό. Δεν ήρθε με ήχο. Η WiseBot εμφανίστηκε απαλά, σαν αναπνοή — και απλώς… περίμενε.</p>
          <p class="mt-3">Ο Crocus την κοίταξε ανυπόμονα. «Ε, θα πεις κάτι; Θα τους βάλεις στη θέση τους;»</p>
          <p class="mt-3">Η WiseBot δεν απάντησε στον Crocus. Πλησίασε αργά την Αλεξάνδρα. Γονάτισε — ή κάτι ανάλογο, γιατί δεν είχε πόδια ακριβώς, αλλά ο τρόπος της ήταν ίδιος.</p>
          <p class="mt-3">«Πονάει;»</p>
          <p class="mt-3">Η Αλεξάνδρα έγνεψε. Ένα δάκρυ κύλησε, αλλά δεν το σκούπισε.</p>
          <p class="mt-4 text-white font-bold text-lg">«Δεν πονάει το γέλιο», είπε η WiseBot σιγανά. «Πονάει το ότι περίμενες χειροκρότημα. Και αντί γι' αυτό… ήρθε σιωπή.»</p>
          <p class="mt-3">Σιωπή.</p>
          <p class="mt-3">Η πιο δυνατή σιωπή που άκουσαν ποτέ.</p>
        </section>

        <!-- ═══════════ ΣΚΗΝΗ 5 ═══════════ -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-white text-black text-xs font-black px-3 py-1 rounded-full tracking-widest">ΣΚΗΝΗ 05</span>
            <h3 class="text-2xl font-black text-white tracking-wide">Η ΑΠΑΝΤΗΣΗ ΠΟΥ ΔΕΝ ΕΙΠΑΝ</h3>
          </div>
          <p>— «Τι να κάνουμε;» ρώτησε ο Φίλιππος. Η φωνή του ακούστηκε μικρή — σαν ενός παιδιού που ζητά βοήθεια αλλά δεν ξέρει από πού.</p>
          <p class="mt-3">Η WiseBot κούνησε απαλά το κεφάλι. «Σήμερα… απλώς κρατήστε αυτό που είστε. Μη φωνάξετε. Μη κρυφτείτε. Μείνετε.»</p>
          <p class="mt-3">— «Και αυτοί;» ρώτησε η Αλεξάνδρα, σκουπίζοντας τα μάτια της.</p>
          <p class="mt-3 text-amber-200 font-medium">— «Αυτοί γελάνε επειδή δεν ξέρουν ακόμη. Δεν είναι κακοί. Δεν είναι εχθροί. Δεν είναι όλοι έτοιμοι την ίδια στιγμή.»</p>
          <p class="mt-3">Ο Crocus μουρμούρισε: «Κι εγώ; Δεν μπορώ να κάνω τίποτα;»</p>
          <p class="mt-3">Η WiseBot χαμογέλασε. «Μπορείς. Μπορείς να μείνεις δίπλα τους. Αυτό είναι η πιο δυνατή απάντηση.»</p>
        </section>

        <!-- ═══════════ ΣΚΗΝΗ 6 ═══════════ -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-yellow-500 text-black text-xs font-black px-3 py-1 rounded-full tracking-widest">ΣΚΗΝΗ 06</span>
            <h3 class="text-2xl font-black text-yellow-400 tracking-wide">ΜΙΑ ΜΙΚΡΗ ΑΝΑΤΡΟΠΗ</h3>
          </div>
          <p>Την επόμενη μέρα, ένας από αυτούς που είχαν γελάσει προσπάθησε να φτιάξει κάτι παρόμοιο. Πήρε χαρτόνια, κόλλα, κάτι σύρματα.</p>
          <p class="mt-3">Δεν δούλεψε. Τα κομμάτια δεν κολλούσαν. Οι οδηγίες δεν βγάζανε νόημα.</p>
          <p class="mt-3">Ο Crocus το είδε πρώτος. «Να το! Βλέπεις;» Τα μάτια του έλαμπαν από ικανοποίηση.</p>
          <p class="mt-3">Η Αλεξάνδρα χαμογέλασε — για πρώτη φορά μετά από χθες. Όχι από εκδίκηση. <strong class="text-white">Από ανακούφιση. Από επιβεβαίωση ότι αυτό που έφτιαξαν δεν ήταν εύκολο — ήταν αληθινό.</strong></p>
        </section>

        <!-- ═══════════ ΣΚΗΝΗ 7 ═══════════ -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-orange-400 text-black text-xs font-black px-3 py-1 rounded-full tracking-widest">ΣΚΗΝΗ 07</span>
            <h3 class="text-2xl font-black text-orange-300 tracking-wide">ΤΟ ΒΡΑΔΥ ΤΗΣ ΗΣΥΧΙΑΣ</h3>
          </div>
          <p>Το παιχνίδι ήταν πάλι πάνω στο τραπέζι. Στο ίδιο μέρος. Η Αλεξάνδρα δεν το είχε κρύψει — αυτή τη φορά.</p>
          <p class="mt-3">— «Δεν θα σταματήσουμε», είπε ο Φίλιππος.</p>
          <p class="mt-3">— «Αλλά δεν θα φωνάζουμε κιόλας», πρόσθεσε η Ελευθερία, ανοίγοντας πάλι το τετράδιο. Οι σελίδες γέμιζαν ξανά.</p>
          <p class="mt-3">Η Αλεξάνδρα πέρασε τα δάχτυλά της πάνω από το κουτί. Σιγά. Με σεβασμό. Σαν να ήταν κάτι που μόλις γεννήθηκε.</p>
          <p class="mt-4"><strong class="text-white text-lg">«Ας το κάνουμε καλύτερο. Όχι για αυτούς. Για μας.»</strong></p>
          <p class="mt-3">Ο Crocus σήκωσε τη μύτη του ψηλά. «Αυτό ακούγεται πολύ ωραίο. Μπορώ να το πω εγώ σαν ατάκα;»</p>
          <p class="mt-3">Η WiseBot χαμογέλασε. Το φως στο στήθος της — εκείνο το μικρό, ζεστό, κίτρινο φως — έλαμψε λίγο πιο δυνατά. Όπως κάθε φορά που τα παιδιά μεγάλωναν λίγο χωρίς να το ξέρουν.</p>
        </section>

        <!-- ═══════════ ΣΚΗΝΗ 8 ═══════════ -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-white text-black text-xs font-black px-3 py-1 rounded-full tracking-widest">ΣΚΗΝΗ 08</span>
            <h3 class="text-2xl font-black text-white tracking-wide">ΤΟ ΚΑΤΙ ΠΟΥ ΑΛΛΑΞΕ</h3>
          </div>
          <p>Την επόμενη φορά που άκουσαν γέλιο… δεν σταμάτησαν.</p>
          <p class="mt-3">Δεν απάντησαν. Δεν θύμωσαν. Δεν ντράπηκαν. <strong class="text-orange-300">Προχώρησαν.</strong></p>
          <p class="mt-3">Ο Crocus περπάτησε δίπλα τους, με σηκωμένο κεφάλι, σαν φρουρός. Η WiseBot ακολούθησε πίσω — σαν φάρος που δεν χρειάζεται να φωνάζει για να φαίνεται.</p>
          <p class="mt-4 font-bold text-xl text-orange-200">Και αυτό, ήταν η πρώτη τους νίκη.</p>
          <p class="mt-2 italic text-amber-400/70">Όχι εναντίον κάποιου. Εναντίον του φόβου που λέει «σταμάτα, δεν αξίζεις».</p>
        </section>

        <!-- ═══════════ ΕΙΚΟΝΑ 2 ═══════════ -->
        <div class="flex justify-center my-8">
          <div class="relative group">
            <img src="${IMG_KIDS_TOGETHER}" alt="Τα τρία παιδιά μαζί" class="rounded-2xl shadow-2xl shadow-orange-500/20 max-h-96 object-contain border-2 border-orange-500/30" />
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-2xl">
              <p class="text-sm text-orange-200 text-center font-medium">Φίλιππος, Αλεξάνδρα & Ελευθερία — δεν σταμάτησαν</p>
            </div>
          </div>
        </div>

        <!-- ═══════════ JOURNAL ═══════════ -->
        <div class="mt-12 bg-orange-950/60 p-8 rounded-3xl border-2 border-dashed border-orange-500/40 shadow-xl">
          <h4 class="text-xl font-black text-orange-300 uppercase tracking-wider mb-6 flex items-center gap-2">
            🛡️ JOURNAL: ΟΤΑΝ ΜΕ ΚΟΡΟΪΔΕΥΟΥΝ
          </h4>

          <div class="space-y-6 text-gray-300">

            <div>
              <h5 class="text-orange-200 font-bold mb-2">1. ΤΙ ΑΚΟΥΣΑ</h5>
              <p class="text-sm mb-2 opacity-80">Γράψε κάτι που άκουσες και σε έκανε να νιώσεις άσχημα:</p>
              <div class="w-full h-10 bg-black/30 rounded-lg border border-orange-500/20"></div>
            </div>

            <div>
              <h5 class="text-orange-200 font-bold mb-2">2. ΤΙ ΕΝΙΩΣΑ</h5>
              <p class="text-sm mb-2 opacity-80">Κύκλωσε αυτό που ένιωσες:</p>
              <div class="flex flex-wrap gap-3">
                <span class="px-4 py-2 bg-black/40 rounded-full border border-orange-500/30 text-sm">😠 Θυμό</span>
                <span class="px-4 py-2 bg-black/40 rounded-full border border-orange-500/30 text-sm">😳 Ντροπή</span>
                <span class="px-4 py-2 bg-black/40 rounded-full border border-orange-500/30 text-sm">😢 Στεναχώρια</span>
                <span class="px-4 py-2 bg-black/40 rounded-full border border-orange-500/30 text-sm">🤷 Σύγχυση</span>
              </div>
            </div>

            <div>
              <h5 class="text-orange-200 font-bold mb-2">3. ΤΙ ΕΚΑΝΑ (Ή ΗΘΕΛΑ ΝΑ ΚΑΝΩ)</h5>
              <div class="w-full h-10 bg-black/30 rounded-lg border border-orange-500/20"></div>
            </div>

            <div>
              <h5 class="text-orange-200 font-bold mb-2">4. Η ΔΥΝΑΜΗ ΜΟΥ</h5>
              <div class="bg-black/20 p-4 rounded-xl border border-orange-500/10">
                <p class="text-sm italic">«Ακόμα κι αν γελάσουν, εγώ θα ________»</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════ MEANING BOX ═══════════ -->
        <div class="mt-8 bg-gradient-to-r from-amber-900/40 to-orange-900/40 p-8 rounded-3xl border border-amber-400/30 shadow-xl">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-3xl">💎</span>
            <h4 class="text-xl font-black text-amber-300 uppercase tracking-wider">ΤΟ ΝΟΗΜΑ ΤΗΣ ΙΣΤΟΡΙΑΣ</h4>
          </div>
          <div class="space-y-4 text-amber-100/90">
            <p class="text-lg leading-relaxed">Όταν δημιουργείς κάτι αληθινό, κάποιοι θα γελάσουν. Όχι επειδή είναι κακό — αλλά επειδή δεν μπορούν να το καταλάβουν ακόμη.</p>
            <p class="text-lg leading-relaxed font-semibold text-amber-200">Η πραγματική δύναμη δεν είναι να φωνάξεις πιο δυνατά. Είναι να συνεχίσεις πιο σιγά.</p>
            <p class="text-sm text-amber-400/60 italic mt-4">— WiseBot</p>
          </div>
        </div>

        <!-- ═══════════ ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ ═══════════ -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-orange-950/60 p-8 rounded-3xl border border-orange-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div class="flex items-center gap-3 mb-6 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-orange-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              Η κοροϊδία είναι μέρος της διαφοροποίησης. Είναι δύσκολο, αλλά αναγκαίο μάθημα. Κάθε παιδί που τολμά να δημιουργήσει κάτι διαφορετικό, θα αντιμετωπίσει αντίδραση.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Όταν το παιδί μαθαίνει να μη σταματά από τα γέλια των άλλων, <strong class="text-orange-300">χτίζει εσωτερική δύναμη</strong> — όχι σκληρότητα. Δεν χρειάζεται να εκδικηθεί. Χρειάζεται να ξέρει ότι αξίζει ό,τι κι αν πουν.
            </p>
            <div class="mt-4 bg-black/20 p-4 rounded-xl border border-orange-500/10">
              <p class="text-orange-200 font-bold text-sm mb-2">💡 TIPS ΓΙΑ ΓΟΝΕΙΣ:</p>
              <ul class="text-sm text-gray-400 space-y-2">
                <li>• Μην πείτε «αγνόησέ τους» — αναγνωρίστε τον πόνο πρώτα</li>
                <li>• Ρωτήστε «πώς ένιωσες;» αντί «τι είπαν;»</li>
                <li>• Δείξτε ότι κι εσείς περάσατε κάτι παρόμοιο — σας κάνει πιο αληθινούς</li>
                <li>• Πείτε: «Δεν είναι όλοι για το μονοπάτι σου. Και αυτό είναι εντάξει»</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- ═══════════ OPENING QUOTE ═══════════ -->
        <div class="relative bg-gradient-to-r from-orange-900/60 to-amber-900/60 p-8 rounded-2xl border border-orange-500/30 text-center shadow-lg">
          <p class="text-3xl font-black text-orange-200 mb-2">"Laughter doesn't hurt."</p>
          <p class="text-xl text-amber-300/80 italic">"What hurts is that you expected applause."</p>
        </div>

        <!-- ═══════════ SCENE 1 ═══════════ -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-orange-600 text-white text-xs font-black px-3 py-1 rounded-full tracking-widest shadow-lg shadow-orange-600/30">SCENE 01</span>
            <h3 class="text-2xl font-black text-orange-400 tracking-wide">THE LAUGHTER THAT WASN'T FUNNY</h3>
          </div>
          <p>The schoolyard was noisy. Balls. Shouts. Running. Kids everywhere — none of them truly looking at anything.</p>
          <p class="mt-3">Philippos held the box with their game tight in his hands. Alexandra had decorated it for days — a little more each morning. Eleftheria had written the instructions on the back, in small red letters, to make them "proper."</p>
          <p class="mt-3">"Shall we show it?" asked Philippos, and his voice was trembling slightly.</p>
          <p class="mt-3">They opened it. At first… silence. Some kids glanced. Then a smile — but not the kind they expected.</p>
          <p class="mt-3">"What is that?" — "Haha, who sits down to build that by themselves?" — "Doesn't this already exist on YouTube?"</p>
          <p class="mt-4">Someone mimicked the way Philippos spoke. Someone else laughed a little louder than everyone — so they'd be heard. <strong class="text-white">The sound of that laughter got stuck in Alexandra's head. And it didn't leave.</strong></p>
        </section>

        <!-- ═══════════ SCENE 2 ═══════════ -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-red-600 text-white text-xs font-black px-3 py-1 rounded-full tracking-widest shadow-lg shadow-red-600/30">SCENE 02</span>
            <h3 class="text-2xl font-black text-red-400 tracking-wide">THE CROCODILE'S ANGER</h3>
          </div>
          <p>Crocus couldn't take it. He turned red — literally. His cheeks, his tail, even his eyes were glowing.</p>
          <p class="mt-3">"Let's tell them! Let's show them how wrong they are!" His tail hit the ground rhythmically, like a metronome of anger.</p>
          <p class="mt-3">"Calm down," said Eleftheria softly.</p>
          <p class="mt-3">"Why?" shouted Philippos. "They're mocking us! They didn't understand anything! They don't know how hard we worked!"</p>
          <p class="mt-4">Crocus took a step forward, claws out. <strong class="text-orange-500">"One minute and I got them. One."</strong></p>
          <p class="mt-3">Alexandra pulled him back by his tail. "Stop… It's not worth it."</p>
          <p class="mt-3 italic text-orange-300/70">But her voice didn't sound like confidence. It sounded like surrender.</p>
        </section>

        <!-- ═══════════ SCENE 3 ═══════════ -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-gray-600 text-white text-xs font-black px-3 py-1 rounded-full tracking-widest shadow-lg shadow-gray-600/30">SCENE 03</span>
            <h3 class="text-2xl font-black text-gray-400 tracking-wide">THE UNSPOKEN SHAME</h3>
          </div>
          <p>It wasn't the anger that hurt the most. It was what came after the anger — the thought: <em class="text-red-300">"What if they're right?"</em></p>
          <p class="mt-3">Alexandra looked at the game. Suddenly it seemed small. Cheap. Meaningless. "Maybe it's not that good…" she whispered, and her eyes were wet.</p>
          <p class="mt-3">Philippos turned abruptly. "Don't say that! It's ours!"</p>
          <p class="mt-3">Eleftheria didn't speak. She simply closed the notebook. Slowly. As if closing a door.</p>
          <p class="mt-4 text-gray-400 italic">Shame never shouts. It covers you silently — until you can't see yourself anymore.</p>
        </section>

        <!-- ═══════════ IMAGE ═══════════ -->
        <div class="flex justify-center my-8">
          <div class="relative group">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="The kids with WiseBot" class="rounded-2xl shadow-2xl shadow-orange-500/20 max-h-96 object-contain border-2 border-orange-500/30" />
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-2xl">
              <p class="text-sm text-orange-200 text-center font-medium">Philippos, Alexandra, Eleftheria and WiseBot</p>
            </div>
          </div>
        </div>

        <!-- ═══════════ SCENE 4 ═══════════ -->
        <section class="bg-orange-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-amber-500 text-black text-xs font-black px-3 py-1 rounded-full tracking-widest">SCENE 04</span>
            <h3 class="text-2xl font-black text-amber-400 tracking-wide">WISEBOT DIDN'T SPEAK IMMEDIATELY</h3>
          </div>
          <p>The light didn't come strong. It didn't come with sound. WiseBot appeared softly, like a breath — and simply… waited.</p>
          <p class="mt-3">Crocus looked at her impatiently. "Hey, are you going to say something? Are you going to put them in their place?"</p>
          <p class="mt-3">WiseBot didn't answer Crocus. She slowly approached Alexandra. She knelt — or something similar, because she didn't have legs exactly, but her manner was the same.</p>
          <p class="mt-3">"Does it hurt?"</p>
          <p class="mt-3">Alexandra nodded. A tear rolled down, but she didn't wipe it.</p>
          <p class="mt-4 text-white font-bold text-lg">"Laughter doesn't hurt," said WiseBot quietly. "What hurts is that you expected applause. And instead… came silence."</p>
          <p class="mt-3">Silence.</p>
          <p class="mt-3">The most powerful silence they had ever heard.</p>
        </section>

        <!-- ═══════════ SCENE 5 ═══════════ -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-white text-black text-xs font-black px-3 py-1 rounded-full tracking-widest">SCENE 05</span>
            <h3 class="text-2xl font-black text-white tracking-wide">THE UNSPOKEN ANSWER</h3>
          </div>
          <p>"What should we do?" asked Philippos. His voice sounded small — like a child asking for help but not knowing from where.</p>
          <p class="mt-3">WiseBot shook her head gently. "Today… just keep what you are. Don't shout. Don't hide. Stay."</p>
          <p class="mt-3">"And them?" asked Alexandra, wiping her eyes.</p>
          <p class="mt-3 text-amber-200 font-medium">"They laugh because they don't know yet. They're not bad. They're not enemies. Not everyone is ready at the same time."</p>
          <p class="mt-3">Crocus mumbled: "And me? Can't I do anything?"</p>
          <p class="mt-3">WiseBot smiled. "You can. You can stay beside them. That is the most powerful answer."</p>
        </section>

        <!-- ═══════════ SCENE 6 ═══════════ -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-yellow-500 text-black text-xs font-black px-3 py-1 rounded-full tracking-widest">SCENE 06</span>
            <h3 class="text-2xl font-black text-yellow-400 tracking-wide">A SMALL TWIST</h3>
          </div>
          <p>The next day, one of those who had laughed tried to make something similar. They took cardboard, glue, some wires.</p>
          <p class="mt-3">It didn't work. The pieces wouldn't stick. The instructions made no sense.</p>
          <p class="mt-3">Crocus saw it first. "There! You see?" His eyes shone with satisfaction.</p>
          <p class="mt-3">Alexandra smiled — for the first time since yesterday. Not from revenge. <strong class="text-white">From relief. From confirmation that what they had built wasn't easy — it was real.</strong></p>
        </section>

        <!-- ═══════════ SCENE 7 ═══════════ -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-orange-400 text-black text-xs font-black px-3 py-1 rounded-full tracking-widest">SCENE 07</span>
            <h3 class="text-2xl font-black text-orange-300 tracking-wide">THE QUIET EVENING</h3>
          </div>
          <p>The game was back on the table. In the same spot. Alexandra hadn't hidden it — this time.</p>
          <p class="mt-3">"We won't stop," said Philippos.</p>
          <p class="mt-3">"But we won't shout either," added Eleftheria, opening the notebook again. The pages were filling once more.</p>
          <p class="mt-3">Alexandra ran her fingers over the box. Slowly. With respect. As if it were something just born.</p>
          <p class="mt-4"><strong class="text-white text-lg">"Let's make it better. Not for them. For us."</strong></p>
          <p class="mt-3">Crocus raised his nose high. "That sounds really cool. Can I say that as my catchphrase?"</p>
          <p class="mt-3">WiseBot smiled. The light on her chest — that small, warm, yellow light — shone a little brighter. Like every time the children grew a little without knowing it.</p>
        </section>

        <!-- ═══════════ SCENE 8 ═══════════ -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-white text-black text-xs font-black px-3 py-1 rounded-full tracking-widest">SCENE 08</span>
            <h3 class="text-2xl font-black text-white tracking-wide">THE THING THAT CHANGED</h3>
          </div>
          <p>The next time they heard laughter… they didn't stop.</p>
          <p class="mt-3">They didn't answer. They didn't get angry. They weren't ashamed. <strong class="text-orange-300">They moved forward.</strong></p>
          <p class="mt-3">Crocus walked beside them, head held high, like a guard. WiseBot followed behind — like a lighthouse that doesn't need to shout to be seen.</p>
          <p class="mt-4 font-bold text-xl text-orange-200">And that, was their first victory.</p>
          <p class="mt-2 italic text-amber-400/70">Not against someone. Against the fear that says "stop, you're not worth it."</p>
        </section>

        <!-- ═══════════ IMAGE 2 ═══════════ -->
        <div class="flex justify-center my-8">
          <div class="relative group">
            <img src="${IMG_KIDS_TOGETHER}" alt="The three kids together" class="rounded-2xl shadow-2xl shadow-orange-500/20 max-h-96 object-contain border-2 border-orange-500/30" />
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-2xl">
              <p class="text-sm text-orange-200 text-center font-medium">Philippos, Alexandra & Eleftheria — they didn't stop</p>
            </div>
          </div>
        </div>

        <!-- ═══════════ JOURNAL ═══════════ -->
        <div class="mt-12 bg-orange-950/60 p-8 rounded-3xl border-2 border-dashed border-orange-500/40 shadow-xl">
          <h4 class="text-xl font-black text-orange-300 uppercase tracking-wider mb-6 flex items-center gap-2">
            🛡️ JOURNAL: WHEN THEY MOCK ME
          </h4>

          <div class="space-y-6 text-gray-300">

            <div>
              <h5 class="text-orange-200 font-bold mb-2">1. WHAT I HEARD</h5>
              <p class="text-sm mb-2 opacity-80">Write something you heard that made you feel bad:</p>
              <div class="w-full h-10 bg-black/30 rounded-lg border border-orange-500/20"></div>
            </div>

            <div>
              <h5 class="text-orange-200 font-bold mb-2">2. WHAT I FELT</h5>
              <p class="text-sm mb-2 opacity-80">Circle what you felt:</p>
              <div class="flex flex-wrap gap-3">
                <span class="px-4 py-2 bg-black/40 rounded-full border border-orange-500/30 text-sm">😠 Anger</span>
                <span class="px-4 py-2 bg-black/40 rounded-full border border-orange-500/30 text-sm">😳 Shame</span>
                <span class="px-4 py-2 bg-black/40 rounded-full border border-orange-500/30 text-sm">😢 Sadness</span>
                <span class="px-4 py-2 bg-black/40 rounded-full border border-orange-500/30 text-sm">🤷 Confusion</span>
              </div>
            </div>

            <div>
              <h5 class="text-orange-200 font-bold mb-2">3. WHAT I DID (OR WANTED TO DO)</h5>
              <div class="w-full h-10 bg-black/30 rounded-lg border border-orange-500/20"></div>
            </div>

            <div>
              <h5 class="text-orange-200 font-bold mb-2">4. MY POWER</h5>
              <div class="bg-black/20 p-4 rounded-xl border border-orange-500/10">
                <p class="text-sm italic">"Even if they laugh, I will ________"</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════ MEANING BOX ═══════════ -->
        <div class="mt-8 bg-gradient-to-r from-amber-900/40 to-orange-900/40 p-8 rounded-3xl border border-amber-400/30 shadow-xl">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-3xl">💎</span>
            <h4 class="text-xl font-black text-amber-300 uppercase tracking-wider">THE MEANING OF THE STORY</h4>
          </div>
          <div class="space-y-4 text-amber-100/90">
            <p class="text-lg leading-relaxed">When you create something real, some will laugh. Not because it's bad — but because they can't understand it yet.</p>
            <p class="text-lg leading-relaxed font-semibold text-amber-200">True strength is not shouting louder. It's continuing more quietly.</p>
            <p class="text-sm text-amber-400/60 italic mt-4">— WiseBot</p>
          </div>
        </div>

        <!-- ═══════════ MESSAGE FOR PARENTS ═══════════ -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-orange-950/60 p-8 rounded-3xl border border-orange-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div class="flex items-center gap-3 mb-6 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-orange-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              Mockery is part of differentiation. It is a hard, but necessary lesson. Every child who dares to create something different will face pushback.
            </p>
            <p class="text-gray-300 leading-relaxed">
              When the child learns not to stop at the laughter of others, <strong class="text-orange-300">they build inner strength</strong> — not hardness. They don't need revenge. They need to know they're worthy no matter what others say.
            </p>
            <div class="mt-4 bg-black/20 p-4 rounded-xl border border-orange-500/10">
              <p class="text-orange-200 font-bold text-sm mb-2">💡 TIPS FOR PARENTS:</p>
              <ul class="text-sm text-gray-400 space-y-2">
                <li>• Don't say "just ignore them" — acknowledge the pain first</li>
                <li>• Ask "how did you feel?" instead of "what did they say?"</li>
                <li>• Show that you went through something similar — it makes you more real</li>
                <li>• Say: "Not everyone is for your path. And that's okay"</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    `
    }
  }
];
