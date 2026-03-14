
import { Book } from '../types';

// ============================================================
// BOOK 25: TO POYGKI POY EMATHE NA MENEI GEMATO
// Hero: WiseBot + Sparken
// Theme: OIKONOMIA / FINANCE
// ============================================================

// Cover image
const IMG_WISEBOT = "/images/wisebot.jpg";

// Character solo images
const IMG_FILIPPOS = "/images/filippos.png";
const IMG_ALEXANDRA = "/images/alexandra.png";
const IMG_ELEFTHERIA = "/images/eleftheria.png";

// Story images
const IMG_KIDS_WITH_WISEBOT = "/images/paidia-kai-wisebot.png";
const IMG_KIDS_WISEBOT_2 = "/images/paidia-wisebot-2.png";
const IMG_KIDS_TOGETHER = "/images/ta-3-paidia.png";
const IMG_SPARKEN = "/images/sparken.jpg";

export const BOOK_25: Book[] = [
  {
    id: 25,
    title: { el: "ΤΟ ΠΟΥΓΚΙ ΠΟΥ ΕΜΑΘΕ ΝΑ ΜΕΝΕΙ ΓΕΜΑΤΟ", en: "THE POUCH THAT LEARNED TO STAY FULL" },
    theme: { el: "ΟΙΚΟΝΟΜΙΑ", en: "FINANCE" },
    stepLabel: { el: "WISEBOT & ΟΙΚΟΝΟΜΙΑ", en: "WISEBOT & FINANCE" },
    author: "Wisebot & Sparken",
    cover: IMG_WISEBOT,
    videoUrl: "",
    description: {
      el: "Ο Φίλιππος κέρδισε χρήματα, αλλά χάθηκαν αμέσως. Η Wisebot του μαθαίνει ότι το πορτοφόλι γεμίζει με συνήθειες, όχι με τύχη.",
      en: "Philippos earned money, but it vanished instantly. Wisebot teaches him that the wallet fills with habits, not luck."
    },
    meaning: {
      el: "Ο πλούτος δεν αρχίζει στο πουγκί. Αρχίζει στη συνήθεια.",
      en: "Wealth doesn't start in the pouch. It starts in the habit."
    },
    xp: 460,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- ΕΙΣΑΓΩΓΙΚΟ QUOTE -->
        <div class="relative bg-gradient-to-r from-slate-900 via-emerald-900/60 to-green-900/40 p-10 rounded-2xl border border-emerald-500/30 text-center shadow-lg shadow-emerald-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Κεφάλαιο 25</div>
          <p class="italic text-emerald-200 text-xl mt-4 leading-relaxed">«Κάθε νόμισμα που περνά από τα χέρια σου,<br/>είναι υπηρέτης. Ή αφέντης.»</p>
          <div class="mt-4 w-16 h-0.5 bg-emerald-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- ΣΚΗΝΗ 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-emerald-300 tracking-wide">ΤΟ ΚΕΡΔΟΣ ΚΑΙ ΤΟ ΚΕΝΟ</h3>
          </div>
          <p>Η πόρτα άνοιξε με δύναμη. Ο Φίλιππος μπήκε τρέχοντας, με κόκκινα μάγουλα και μάτια που έλαμπαν σαν δύο μικροί ήλιοι. Στα χέρια του κρατούσε χαρτονομίσματα — τσαλακωμένα, ζεστά από τη χούφτα του.</p>
          <p class="mt-3">«Τα κατάφερα!» φώναξε. «Πούλησα τρία παιχνίδια! Τρία! Στον Νίκο, στη Μαρία και στον Γιώργο!»</p>
          <p class="mt-3">Η Αλεξάνδρα χειροκρότησε. Η Ελευθερία χαμογέλασε, πιο σιγανά, αλλά τα μάτια της ήταν ζεστά.</p>
          <p class="mt-3">Ο Φίλιππος άπλωσε τα χαρτονομίσματα στο τραπέζι σαν χάρτη θησαυρού. Τα μέτρησε. Τα ξαναμέτρησε. <em>Τόσα λεφτά.</em> Δικά του. Κερδισμένα με δουλειά και πειθώ.</p>
          <p class="mt-3">Η ευφορία κράτησε ακριβώς τρεις ώρες.</p>
          <p class="mt-3">Μέχρι το βράδυ, ο ενθουσιασμός είχε γίνει παραγγελία online. Ένα καινούργιο παιχνίδι. Κάτι σνακ. Ένα αυτοκόλλητο που λαμπύριζε στο σκοτάδι. <em>Ανάγκες;</em> Όχι. Αλλά η αδρεναλίνη του «αγοράζω» ήταν τόσο δυνατή, τόσο γλυκιά, που σκέπασε κάθε λογική σκέψη.</p>
          <p class="mt-3">Μέχρι την επόμενη εβδομάδα, δεν είχε μείνει τίποτα. Ούτε ένα νόμισμα. Ούτε η ανάμνηση της χαράς. Μόνο ένα κουτί από δέμα, σκισμένο, πεταμένο στη γωνία.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Και μια σιωπή. Βαριά. Σαν πορτοφόλι που ξέρει ότι θα μείνει άδειο.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-emerald-500/15 shadow-lg shadow-emerald-900/20">
            <img src="${IMG_FILIPPOS}" alt="Φίλιππος" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-emerald-300/80 italic">Ο Φίλιππος με τα χρήματα στα χέρια — χωρίς να ξέρει ακόμα πόσο γρήγορα θα χαθούν</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-green-600/30 border border-green-500/30 text-green-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-green-300 tracking-wide">ΤΟ ΑΔΕΙΟ ΜΕΛΛΟΝ</h3>
          </div>
          <p>Η WiseBot δεν μίλησε αμέσως. Καθόταν στην άκρη του ραφιού, ακίνητη, με τα μωβ μάτια της χαμηλωμένα σαν να σκεφτόταν κάτι πολύ σημαντικό. Τα φτερά της ήταν διπλωμένα σφιχτά, σαν χέρια σταυρωμένα σε σκέψη.</p>
          <p class="mt-3">Τους άφησε να νιώσουν το κενό. Αυτό ήταν σκόπιμο. Γιατί μερικές φορές, ο καλύτερος δάσκαλος δεν είναι αυτός που εξηγεί. Είναι αυτός που <em>σωπαίνει</em>, μέχρι ο μαθητής να ακούσει τη δική του σιωπή.</p>
          <p class="mt-3">Ο Φίλιππος κοίταξε το πορτοφόλι του. Το άνοιξε αργά, σαν να περίμενε θαύμα. Τίποτα. Μόνο μια παλιά απόδειξη και μια εικόνα της μαμάς του. Η εικόνα τον κοίταξε πίσω. Ένιωσε ένα τσούξιμο στο στήθος.</p>
          <p class="mt-3">«Δουλεύω. Κερδίζω. Και πάλι είμαι στο μηδέν.» Η φωνή του ήταν χαμηλή, σχεδόν ψίθυρος. Δεν ήταν θυμός πια. Ήταν κάτι χειρότερο. Ήταν <em>απελπισία</em>.</p>
          <p class="mt-3">Η Αλεξάνδρα τον κοίταξε και αναγνώρισε στο πρόσωπό του κάτι που ένιωθε κι εκείνη: τρέχεις σε τροχό χωρίς να πηγαίνεις πουθενά. Η Ελευθερία κατέβασε το βιβλίο της.</p>
          <p class="mt-4">Τότε η WiseBot κινήθηκε. Αθόρυβα, σαν σκιά σε φεγγαρόφωτο. Πέταξε αργά, χαμηλά, και ακούμπησε ένα μικρό πουγκί πάνω στο τραπέζι. Ένα πουγκί από ύφασμα, σκούρο πράσινο, με χρυσό κορδόνι.</p>
          <p class="mt-3 text-emerald-300 font-bold text-lg">«Αυτό είναι το μέλλον σου.»</p>
          <p class="mt-2">Ο Φίλιππος το πήρε στα χέρια του. Το ζύγισε. <strong class="text-white">Άδειο.</strong> Ελαφρύ σαν αέρας. Σαν υπόσχεση που δεν κρατήθηκε ποτέ.</p>
          <p class="mt-3">«Αν δεν αλλάξεις κάτι,» συνέχισε η WiseBot, «αυτό θα είναι πάντα το βάρος του. Πάντα αέρας. Πάντα ελπίδα χωρίς ουσία.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Ο Φίλιππος δεν άφησε το πουγκί. Το κράτησε σφιχτά, σαν να μπορούσε, μόνο με τη δύναμη των δαχτύλων του, να αλλάξει το βάρος του.</p>
        </section>

        <!-- ΣΚΗΝΗ 3 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-emerald-300 tracking-wide">ΥΠΗΡΕΤΗΣ Ή ΑΦΕΝΤΗΣ;</h3>
          </div>
          <p>Η WiseBot πέταξε πάνω στο τραπέζι. Τα νύχια της χτύπησαν ελαφρά στο ξύλο — <em>τακ, τακ, τακ</em> — σαν δάσκαλος που ζητά προσοχή. Τα μωβ μάτια της σάρωσαν τα τρία πρόσωπα, ένα-ένα, με υπομονή.</p>
          <p class="mt-3">«Κάθε νόμισμα που περνά από τα χέρια σου,» είπε, «είναι υπηρέτης. Ή αφέντης.»</p>
          <p class="mt-3">Η φράση έπεσε στη σιωπή σαν πέτρα σε λίμνη. Κυματισμοί. Σκέψεις που αναδύονταν αργά.</p>
          <p class="mt-3">Η Αλεξάνδρα έσκυψε μπροστά. Τα μάτια της ήταν ανοιχτά διάπλατα. «Πώς γίνεται υπηρέτης;» ρώτησε. Η φωνή της ήταν ψίθυρος.</p>
          <p class="mt-4">Η Ελευθερία σηκώθηκε από τη γωνία της. Περπάτησε αργά ως το τραπέζι. Στα χέρια της δεν κρατούσε βιβλίο — για πρώτη φορά εδώ και μέρες. Κρατούσε ένα μολύβι και ένα σημειωματάριο. Ήταν έτοιμη να σημειώσει.</p>

          <div class="my-6 bg-gradient-to-r from-emerald-900/40 to-green-900/40 p-8 rounded-2xl border border-emerald-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">«Τον κρατάς πρώτα.<br/><span class="text-emerald-300">Πληρώνεις τον εαυτό σου πρώτα.</span>»</p>
          </div>

          <p class="mt-4">Ο Φίλιππος κούνησε το κεφάλι μπερδεμένα. «Δεν καταλαβαίνω. Πώς πληρώνω τον εαυτό μου; Δεν είμαι μαγαζί.»</p>
          <p class="mt-3">Η WiseBot γέλασε — ένας ήχος σαν κουδουνάκια ανέμου. «Κάθε φορά που κερδίζεις κάτι, πριν αγοράσεις οτιδήποτε, βάζεις στην άκρη ένα κομμάτι. Για σένα. Για τον μελλοντικό σου εαυτό. Αυτός ο μελλοντικός εαυτός σου μετράει. Αυτός θα σε ευχαριστήσει.»</p>
          <p class="mt-3">Η Αλεξάνδρα κοίταξε τα χέρια της. «Δηλαδή... σαν να δίνω δώρο στον εαυτό μου του αύριο;»</p>
          <p class="mt-3 text-emerald-200 font-medium">«Ακριβώς,» είπε η WiseBot. «Το πιο σημαντικό δώρο που μπορείς να δώσεις σε κάποιον. Στον εαυτό σου.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η Ελευθερία έγραψε στο σημειωματάριό της μόνο δύο λέξεις, με μεγάλα γράμματα: ΠΡΩΤΑ ΕΓΩ. Όχι εγωισμός. Σοφία.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-emerald-500/15 shadow-lg shadow-emerald-900/20">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="Τα παιδιά μαθαίνουν από τη WiseBot" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-emerald-300/80 italic">Η πρώτη αρχή: πλήρωνε τον εαυτό σου πρώτα</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 4 — HIGHLIGHTED KEY SCENE -->
        <section class="bg-gradient-to-br from-emerald-900/30 via-green-900/20 to-teal-900/10 p-8 rounded-2xl border-l-4 border-emerald-500 my-8 shadow-xl shadow-emerald-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-emerald-400 tracking-wide">Η ΠΡΩΤΗ ΑΠΟΤΑΜΙΕΥΣΗ</h3>
          </div>
          <p>Πέρασαν δύο εβδομάδες. Δύο εβδομάδες γεμάτες πειρασμούς. Ο Φίλιππος περνούσε μπροστά από βιτρίνες και ένιωθε τα δάχτυλά του να σφίγγονται γύρω από τα νομίσματα στην τσέπη του. Η Αλεξάνδρα έβλεπε διαφημίσεις και η καρδιά της χτυπούσε πιο γρήγορα. Ήταν σαν μάχη — μια αόρατη μάχη ανάμεσα στο «θέλω τώρα» και στο «θέλω κάτι καλύτερο αύριο».</p>
          <p class="mt-3">Την επόμενη φορά που κέρδισαν χρήματα — από μια δουλειά στην αυλή του γείτονα, μάζεμα φύλλων και κλάδεμα — η Ελευθερία πήρε το ποσό στα χέρια της. Μέτρησε προσεκτικά. Χώρισε σε τρεις στοίβες.</p>
          <p class="mt-3">«Αυτό,» είπε δείχνοντας τη μεγαλύτερη στοίβα, «είναι για έξοδα. Για πράγματα που χρειαζόμαστε.»</p>
          <p class="mt-3">«Αυτό,» δείχνοντας τη μεσαία, «είναι για κάτι που θέλουμε αλλά μπορεί να περιμένει.»</p>
          <p class="mt-3">«Και αυτό —» Σήκωσε τη μικρότερη στοίβα. Τα νομίσματα γυάλιζαν στο φως. «Αυτό είναι για εμάς. <strong class="text-emerald-300">Δεν αγγίζεται.</strong>»</p>
          <p class="mt-4">Ο Φίλιππος κοίταξε τη μικρή στοίβα. Τα μάτια του στένεψαν. «Είναι λίγο!» διαμαρτυρήθηκε. Η φωνή του ήταν γεμάτη αγανάκτηση, εκείνη η γνωστή αγανάκτηση του ανθρώπου που βλέπει τον θησαυρό να κλειδώνεται μπροστά στα μάτια του.</p>
          <p class="mt-3">Η WiseBot τον κοίταξε ήρεμα. Τα μάτια της πάλλονταν απαλά, σαν παλίρροια. Και με φωνή γεμάτη βαρύτητα, σαν πέτρα που πέφτει σε βαθύ πηγάδι, είπε:</p>
          <p class="mt-4 text-emerald-300 font-bold text-xl">«Το λίγο που μένει γίνεται πολύ. Το πολύ που φεύγει γίνεται τίποτα.»</p>
          <p class="mt-4">Η φράση κρεμάστηκε στον αέρα σαν πανό. Κάτι μέσα στον Φίλιππο — κάτι βαθύ — κατάλαβε. Δεν ήταν τα χρήματα που ήταν λίγα. Ήταν η υπομονή του.</p>
          <p class="mt-3">Η Αλεξάνδρα πήρε το πουγκί. Το άνοιξε αργά. Έριξε μέσα τα νομίσματα, ένα-ένα. Κάθε νόμισμα έκανε έναν μικρό ήχο καθώς χτυπούσε τα υπόλοιπα. <em>Κλινγκ. Κλινγκ. Κλινγκ.</em></p>
          <p class="mt-3">Ήταν ο πιο γλυκός ήχος που είχαν ακούσει εδώ και πολύ καιρό.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Δεν ήταν πολλά. Αλλά ήταν αρχή. Και κάθε αρχή, όσο μικρή κι αν είναι, κρύβει μέσα της τη δύναμη ολόκληρου βουνού.</p>
        </section>

        <!-- ΣΚΗΝΗ 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-green-600/30 border border-green-500/30 text-green-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-green-400 tracking-wide">Ο SPARKEN ΕΜΦΑΝΙΖΕΤΑΙ</h3>
          </div>
          <p>Οι εβδομάδες πέρασαν. Μία. Δύο. Τέσσερις. Το πουγκί άρχισε να βαραίνει. Λίγο-λίγο, σαν χιόνι που μαζεύεται στα κλαδιά. Όχι αρκετά για να εντυπωσιάσει κανέναν. Αλλά αρκετά για να νιώθεις κάτι καινούργιο: <em>ασφάλεια</em>.</p>
          <p class="mt-3">Ο Φίλιππος είχε αρχίσει να κοιτά τα πράγματα διαφορετικά. Στη βιτρίνα, εκεί που πριν έβλεπε «θέλω», τώρα έβλεπε αριθμούς. Τιμές. Σύγκριση. «Πόσες ώρες δουλειάς κοστίζει αυτό;» σκεφτόταν. Και συνήθως η απάντηση ήταν αρκετή για να τον κάνει να συνεχίσει τον δρόμο του.</p>
          <p class="mt-3">Η Αλεξάνδρα είχε φτιάξει ένα μικρό βιβλιαράκι. Σημείωνε τα έσοδα, τα έξοδα, την αποταμίευση. Κάθε βράδυ, πριν κοιμηθεί, ζύγιζε το πουγκί στα χέρια της. Και χαμογελούσε.</p>
          <p class="mt-3">Η Ελευθερία είχε βρει τρία βιβλία για οικονομικά — αλλά αυτή τη φορά δεν διάβαζε μόνο. Εφάρμοζε. Κάθε αρχή που μάθαινε, την δοκίμαζαν αμέσως. Η θεωρία έγινε πράξη. Και η πράξη έγινε συνήθεια.</p>
          <p class="mt-4">Και τότε — ένα απόγευμα που ο ήλιος βαφόταν πορτοκαλί πίσω από τα σύννεφα — ο αέρας <em>ζεστάθηκε</em>. Ένα χρυσαφένιο φως γέμισε τη γωνία του δωματίου. Σπίθες. Μικρές, ζωηρές, σαν πυγολαμπίδες με βιασύνη.</p>

          <div class="my-8 rounded-2xl overflow-hidden border border-emerald-500/20 shadow-2xl shadow-emerald-900/30">
            <img src="${IMG_SPARKEN}" alt="Ο Sparken εμφανίζεται" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-emerald-300/80 italic">Ο Sparken — η φλόγα που ξυπνά τα κοιμισμένα νομίσματα</div>
          </div>

          <p class="mt-4">Ο Sparken. Μικρός. Φλογερός. Με μάτια σαν κάρβουνα που λάμπουν. Η φωνή του ήταν ζεστή αλλά γρήγορη, σαν φωτιά που χορεύει.</p>
          <p class="mt-3 text-emerald-300 font-bold text-lg">«Ο χρυσός που κοιμάται, δεν μεγαλώνει.»</p>
          <p class="mt-3">Τα παιδιά κοίταξαν μπερδεμένα. Ο Φίλιππος έσφιξε ασυναίσθητα το πουγκί. «Τι εννοεί;» ψιθύρισε στην Αλεξάνδρα.</p>
          <p class="mt-3">Η WiseBot πέταξε ήρεμα και στάθηκε δίπλα στον Sparken. «Τα χρήματα που απλώς αποθηκεύεις,» εξήγησε, «είναι σιωπηλά. Ασφαλή, ναι. Αλλά ακίνητα. Σαν νερό σε βάζο — υπάρχει, αλλά δεν ποτίζει τίποτα.»</p>
          <p class="mt-3">Ο Sparken πήδηξε πάνω στο τραπέζι. Σπίθες σκόρπισαν. «Τα χρήματα που <em>επενδύεις</em> δουλεύουν. Κινούνται. Μεγαλώνουν. Σαν σπόρος που φυτεύεις — δεν τον βλέπεις για λίγο, αλλά κάτω από το χώμα, ρίζες απλώνονται.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Τα μάτια του Φίλιππου άνοιξαν διάπλατα. Για πρώτη φορά, τα χρήματα δεν ήταν κάτι που έρχεται και φεύγει. Ήταν κάτι που μπορεί να <em>φυτευτεί</em>.</p>
        </section>

        <!-- ΣΚΗΝΗ 6 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-red-400 tracking-wide">Η ΠΑΓΙΔΑ</h3>
          </div>
          <p>Αλλά η σοφία δεν είναι μόνο να ξέρεις πότε να ενεργήσεις. Είναι και να ξέρεις πότε να <em>μην</em> ενεργήσεις.</p>
          <p class="mt-3">Δεν έτρεξαν να ρισκάρουν. Ρώτησαν. Έμαθαν. Μίλησαν με τον κύριο Νίκο, τον μπακάλη, που είχε μια μικρή επιχείρηση εδώ και τριάντα χρόνια. Μίλησαν με τη θεία Μαρίνα, που είχε αποταμιεύσεις και ήξερε τι σημαίνει «σταθερότητα». Συζήτησαν με ανθρώπους που είχαν ήδη περπατήσει τον δρόμο και είχαν τα σημάδια στα πόδια τους.</p>
          <p class="mt-3">Μια μέρα, ένας γνωστός τους — ο Θανάσης, ένα μεγαλύτερο αγόρι από τη γειτονιά, πάντα με μεγάλα λόγια — τους πλησίασε.</p>
          <p class="mt-3">«Βάλτε όλα τα λεφτά εδώ,» είπε χτυπώντας ένα φυλλάδιο στο τραπέζι. «Σίγουρη ευκαιρία. Σε δύο εβδομάδες, διπλάσια.»</p>
          <p class="mt-4">Ο Φίλιππος ένιωσε τον πειρασμό σαν ρεύμα. <em>Διπλάσια.</em> Η λέξη γυάλιζε στο μυαλό του. Τα δάχτυλά του πήγαν αυτόματα στο πουγκί.</p>
          <p class="mt-3">Η WiseBot δεν κοιτούσε τον Θανάση. Κοιτούσε τον Φίλιππο. Και ρώτησε μόνο μια ερώτηση:</p>
          <p class="mt-3 text-emerald-300 font-bold text-lg">«Καταλαβαίνεις πώς λειτουργεί;»</p>
          <p class="mt-3">Σιωπή. Ο Φίλιππος σκέφτηκε. Πραγματικά. Κοίταξε το φυλλάδιο. Κοίταξε τον Θανάση. Κοίταξε το πουγκί.</p>
          <p class="mt-3 text-white font-bold">Όχι. Δεν καταλάβαινε πώς λειτουργεί. Μόνο τα «διπλάσια» ακούγονταν. Και αυτό είναι πάντα η παγίδα.</p>
          <p class="mt-3">«Πάσο,» είπε ο Φίλιππος. Σιγά αλλά σταθερά. Ο Θανάσης σήκωσε τους ώμους και έφυγε. Το πουγκί έμεινε ασφαλές.</p>
          <p class="mt-3">Η Αλεξάνδρα χαμογέλασε. «Αυτό ήταν πιο δύσκολο από το να μαζεύεις,» ψιθύρισε.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Γιατί ο πραγματικός εχθρός του πλούτου δεν είναι η φτώχεια. Είναι η βιασύνη. Η απληστία ντυμένη ευκαιρία. Και η μόνη ασπίδα είναι μια απλή ερώτηση: «Το καταλαβαίνω;»</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-red-500/15 shadow-lg shadow-red-900/20">
            <img src="${IMG_ALEXANDRA}" alt="Αλεξάνδρα" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-red-300/80 italic">Η Αλεξάνδρα — πάντα εκεί για να θυμίζει τι αξίζει πραγματικά</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 7 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-emerald-300 tracking-wide">ΤΟ ΑΠΟΤΕΛΕΣΜΑ</h3>
          </div>
          <p>Οι μήνες έγιναν χρόνος. Αργά. Σταθερά. Σαν ποτάμι που δεν βιάζεται γιατί ξέρει ότι η θάλασσα θα είναι πάντα εκεί.</p>
          <p class="mt-3">Το κεφάλαιο μεγάλωσε. Και μαζί του, κάτι πιο σημαντικό: η ηρεμία. Εκείνη η βαθιά, ήσυχη σιγουριά που δεν φωνάζει, δεν καυχιέται, αλλά υπάρχει — σαν θεμέλιο κάτω από σπίτι. Δεν τη βλέπεις, αλλά κρατά τα πάντα.</p>
          <p class="mt-3">Ο Φίλιππος σταμάτησε να αγοράζει πράγματα για να νιώθει καλύτερα. Δεν αγόραζαν για να φαίνονται πλούσιοι. Χτίζαν για να γίνουν σταθεροί.</p>
          <p class="mt-3">Η Αλεξάνδρα ανακάλυψε κάτι εκπληκτικό: ότι η αποταμίευση δεν ήταν στέρηση. Ήταν <em>ελευθερία</em>. Κάθε νόμισμα στο πουγκί ήταν μια μέρα χωρίς άγχος, ένα αύριο χωρίς φόβο.</p>
          <p class="mt-3">Δεν ζούσαν για το σήμερα μόνο. Σκέφτονταν τον μελλοντικό εαυτό τους. «Αυτό το κρατάμε για σένα,» έλεγε η Αλεξάνδρα κάθε φορά που έβαζε νομίσματα στο πουγκί.</p>
          <p class="mt-3">Η Ελευθερία είχε γράψει τα πάντα. Κάθε αρχή, κάθε λάθος, κάθε μάθημα. Είχε φτιάξει ένα ολόκληρο βιβλίο <em>εμπειρίας</em>. Κάθε σελίδα γραμμένη με ιδρώτα και πράξη.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Και κάπου ανάμεσα στις μέρες, χωρίς να το καταλάβουν, τα τρία παιδιά είχαν γίνει κάτι που πριν φαινόταν αδύνατο: υπεύθυνοι. Όχι γιατί κάποιος τους ανάγκασε. Αλλά γιατί το επέλεξαν.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-emerald-500/15 shadow-lg shadow-emerald-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="Τα τρία παιδιά μαζί" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-emerald-300/80 italic">Τρία παιδιά, ένα πουγκί, μια κοινή πορεία</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 8 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-emerald-400 tracking-wide">Η ΣΥΝΗΘΕΙΑ</h3>
          </div>
          <p>Ένα βράδυ, τα τρία παιδιά κάθονταν στο πάτωμα. Ο ήλιος είχε δύσει εδώ και ώρα, αλλά κανένα δεν ήθελε να φύγει. Το πουγκί ήταν στη μέση — βαρύ, στρογγυλό, ζεστό σαν ζωντανό. Δεν ήταν απλά γεμάτο. Ήταν <em>προστατευμένο</em>.</p>
          <p class="mt-3">Ο Φίλιππος κοίταξε τη WiseBot. Τα μάτια του ήταν ήρεμα — εκείνη η ηρεμία που έρχεται μόνο μετά από μεγάλη μάχη. «Δεν είναι τα χρήματα που άλλαξαν,» είπε αργά. Κάθε λέξη μετρημένη, σαν νόμισμα. «Εμείς αλλάξαμε.»</p>
          <p class="mt-3">Η WiseBot έγνεψε. Τα μωβ μάτια της πάλλονταν ρυθμικά, σαν μουσική χωρίς ήχο. Ο Sparken τρεμόπαιζε δίπλα της, ήσυχος για πρώτη φορά.</p>
          <p class="mt-4 text-emerald-300 font-bold text-xl">«Ο πλούτος δεν αρχίζει στο πουγκί. Αρχίζει στη συνήθεια.»</p>
          <p class="mt-4">Η Αλεξάνδρα πήρε ανάσα βαθιά. Κοίταξε τα χέρια της — χέρια που πριν λίγους μήνες δεν ήξεραν παρά μόνο να ξοδεύουν. Τώρα ήξεραν να μετρούν, να σχεδιάζουν, να περιμένουν. «Μάθαμε να λέμε "όχι" στο εύκολο,» ψιθύρισε, «για να πούμε "ναι" στο σημαντικό.»</p>
          <p class="mt-3">Η Ελευθερία έκλεισε το σημειωματάριό της. Πάνω στο εξώφυλλο είχε γράψει: <strong class="text-emerald-200">«Τα πουγκιά που μένουν γεμάτα δεν γεμίζουν με χρήματα. Γεμίζουν με αποφάσεις.»</strong></p>
          <p class="mt-4">Στο τέλος, το πουγκί δεν ήταν απλώς γεμάτο. Ήταν προστατευμένο. Πολλαπλασιαζόμενο. Σταθερό. Σαν δέντρο με βαθιές ρίζες που κανένας άνεμος δεν μπορεί να ξεριζώσει.</p>
          <p class="mt-3 text-emerald-200 font-medium">Δεν φοβόντουσαν πια τα χρήματα. Τα διοικούσαν. Δεν τα κυνηγούσαν. Τα καλούσαν. Δεν τα σπαταλούσαν. Τα σέβονταν.</p>
          <p class="mt-3">Και ο Sparken, πριν χαθεί στις σπίθες του, είπε κάτι τελευταίο:</p>
          <p class="mt-3 text-emerald-300 font-bold text-lg">«Ο πλουσιότερος άνθρωπος δεν είναι αυτός που έχει τα πιο πολλά. Είναι αυτός που χρειάζεται τα λιγότερα — και κρατά τα σωστά.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Τα τρία παιδιά χαμογέλασαν. Όχι γιατί ήταν πλούσια. Αλλά γιατί, για πρώτη φορά, ήταν ελεύθερα.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-emerald-500/15 shadow-lg shadow-emerald-900/20">
            <img src="${IMG_KIDS_WISEBOT_2}" alt="Τα παιδιά με τη WiseBot" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-emerald-300/80 italic">Το πουγκί έμαθε να μένει γεμάτο. Τα παιδιά έμαθαν να μένουν σταθερά.</div>
          </div>
        </section>

        <!-- JOURNAL -->
        <div class="mt-14 bg-emerald-950/60 p-8 rounded-3xl border-2 border-dashed border-emerald-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">💎</span>
            <h4 class="text-xl font-black text-emerald-300 uppercase tracking-wider">JOURNAL: ΤΟ ΔΙΚΟ ΜΟΥ ΠΟΥΓΚΙ</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Γράψε. Σκέψου. Νιώσε. Δεν υπάρχει λάθος απάντηση.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-emerald-500/15">
              <h5 class="text-emerald-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-emerald-600/40 flex items-center justify-center text-xs font-black">1</span>
                ΤΑ ΕΞΟΔΑ
              </h5>
              <p class="text-sm mb-3 opacity-80">Τι αγοράζεις συχνά που ίσως δεν χρειάζεσαι πραγματικά; Σκέψου τρία πράγματα.</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-emerald-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-emerald-500/15">
              <h5 class="text-emerald-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-emerald-600/40 flex items-center justify-center text-xs font-black">2</span>
                Ο ΣΤΟΧΟΣ
              </h5>
              <p class="text-sm mb-3 opacity-80">Για ποιο μεγάλο πράγμα θα ήθελες να μαζέψεις χρήματα; Κάτι που αξίζει την αναμονή.</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-emerald-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-emerald-500/15">
              <h5 class="text-emerald-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-emerald-600/40 flex items-center justify-center text-xs font-black">3</span>
                Η ΣΥΝΗΘΕΙΑ
              </h5>
              <p class="text-sm mb-3 opacity-80">Συμπλήρωσε την πρόταση:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-emerald-500/10 text-emerald-200">
                <p class="text-sm font-medium">«Από ό,τι κερδίζω, θα κρατάω πάντα το: __________»</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ΝΟΗΜΑ / MEANING BOX -->
        <div class="mt-8 bg-gradient-to-r from-emerald-900/30 to-green-900/30 p-6 rounded-2xl border border-emerald-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-emerald-300 uppercase tracking-wider">Το νόημα αυτού του κεφαλαίου</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            Τα χρήματα δεν είναι εχθρός ούτε φίλος. Είναι <strong class="text-emerald-300">εργαλείο</strong>. Και κάθε εργαλείο γίνεται χρήσιμο μόνο στα χέρια κάποιου που ξέρει πώς να το κρατήσει. Η WiseBot δεν δίδαξε μαθηματικά — δίδαξε <strong class="text-green-300">συνήθειες</strong>. Πλήρωνε τον εαυτό σου πρώτα. Μην τρέχεις πίσω από «ευκαιρίες» που δεν καταλαβαίνεις. Και θυμήσου: ο πλούτος δεν αρχίζει στο πουγκί. Αρχίζει στη συνήθεια.
          </p>
        </div>

        <!-- ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-emerald-950/60 p-8 rounded-3xl border border-emerald-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-emerald-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              Η οικονομική παιδεία δεν είναι μαθηματικά. Είναι <strong class="text-white">συνήθεια</strong>. Και οι συνήθειες χτίζονται νωρίς — πολύ πριν τα παιδιά πάρουν τον πρώτο μισθό.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Ο κανόνας «Πληρώνω τον εαυτό μου πρώτα» δεν αφορά μόνο χρήματα. Αφορά <strong class="text-emerald-300">αυτοσεβασμό</strong>. Σημαίνει: «Αξίζω να φροντίσω το μέλλον μου πριν φροντίσω τις επιθυμίες μου.»
            </p>
            <div class="mt-4 bg-emerald-900/20 p-4 rounded-xl border border-emerald-500/10">
              <p class="text-sm text-emerald-200 font-medium">💡 Δοκιμάστε σήμερα: Δώστε στο παιδί ένα μικρό ποσό και ρωτήστε: «Πώς θα το χώριζες σε τρία μέρη — ανάγκες, επιθυμίες, αποταμίευση;» Η απάντηση θα σας εκπλήξει.</p>
            </div>
          </div>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- INTRO QUOTE -->
        <div class="relative bg-gradient-to-r from-slate-900 via-emerald-900/60 to-green-900/40 p-10 rounded-2xl border border-emerald-500/30 text-center shadow-lg shadow-emerald-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Chapter 25</div>
          <p class="italic text-emerald-200 text-xl mt-4 leading-relaxed">"Every coin that passes through your hands<br/>is a servant. Or a master."</p>
          <div class="mt-4 w-16 h-0.5 bg-emerald-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- SCENE 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-emerald-300 tracking-wide">THE GAIN AND THE VOID</h3>
          </div>
          <p>The door burst open. Philippos ran in with flushed cheeks and eyes that glowed like two small suns. In his hands he held banknotes — crumpled, warm from his grip.</p>
          <p class="mt-3">"I did it!" he shouted. "I sold three toys! Three! To Nikos, to Maria, and to Giorgos!"</p>
          <p class="mt-3">Alexandra applauded. Eleftheria smiled too, more quietly, but her eyes were warm.</p>
          <p class="mt-3">Philippos spread the banknotes on the table like a treasure map. He counted them. Counted again. <em>So much money.</em> His. Earned through work and persuasion.</p>
          <p class="mt-3">The euphoria lasted exactly three hours.</p>
          <p class="mt-3">By evening, the excitement had become an online order. A new toy. Some snacks. A sticker that glowed in the dark. <em>Needs?</em> No. But the adrenaline of "buying" was so powerful, so sweet, that it drowned every rational thought.</p>
          <p class="mt-3">By the following week, nothing was left. Not a single coin. Not even the memory of joy. Just a torn cardboard box, tossed in the corner.</p>
          <p class="mt-3 text-gray-400 text-sm italic">And a silence. Heavy. Like a wallet that knows it will remain empty.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-emerald-500/15 shadow-lg shadow-emerald-900/20">
            <img src="${IMG_FILIPPOS}" alt="Philippos" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-emerald-300/80 italic">Philippos with money in his hands — not yet knowing how fast it would vanish</div>
          </div>
        </section>

        <!-- SCENE 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-green-600/30 border border-green-500/30 text-green-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-green-300 tracking-wide">THE EMPTY FUTURE</h3>
          </div>
          <p>WiseBot did not speak immediately. She sat at the edge of the shelf, motionless, her purple eyes lowered as if contemplating something very important. Her wings were folded tight, like arms crossed in thought.</p>
          <p class="mt-3">She let them feel the void. This was deliberate. Because sometimes the best teacher is not the one who explains. It is the one who falls <em>silent</em>, until the student hears their own silence.</p>
          <p class="mt-3">Philippos looked at his wallet. He opened it slowly, as if expecting a miracle. Nothing. Just an old receipt and a photo of his mother. The photo stared back at him. He felt a sting in his chest.</p>
          <p class="mt-3">"I work. I earn. And I'm at zero again." His voice was low, almost a whisper. It was not anger anymore. It was something worse. It was <em>despair</em>.</p>
          <p class="mt-3">Alexandra looked at him and recognized in his face something she felt too: running on a wheel, going nowhere. Eleftheria lowered her book.</p>
          <p class="mt-4">Then WiseBot moved. Silently, like a shadow in moonlight. She flew slowly, low, and placed a small pouch on the table. A pouch made of fabric, dark green, with a golden string.</p>
          <p class="mt-3 text-emerald-300 font-bold text-lg">"This is your future."</p>
          <p class="mt-2">Philippos picked it up. Weighed it in his hands. <strong class="text-white">Empty.</strong> Light as air. Like a promise that was never kept.</p>
          <p class="mt-3">"If you change nothing," WiseBot continued, "this will always be its weight. Always air. Always hope without substance."</p>
          <p class="mt-3 text-gray-400 text-sm italic">Philippos did not put the pouch down. He held it tight, as if he could, through the strength of his fingers alone, change its weight.</p>
        </section>

        <!-- SCENE 3 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-emerald-300 tracking-wide">SERVANT OR MASTER?</h3>
          </div>
          <p>WiseBot flew onto the table. Her talons tapped lightly on the wood — <em>tap, tap, tap</em> — like a teacher calling for attention. Her purple eyes scanned the three faces, one by one, with patience.</p>
          <p class="mt-3">"Every coin that passes through your hands," she said, "is a servant. Or a master."</p>
          <p class="mt-3">The phrase fell into the silence like a stone into a lake. Ripples. Thoughts surfacing slowly.</p>
          <p class="mt-3">Alexandra leaned forward. Her eyes were wide open. "How does it become a servant?" she asked. Her voice was a whisper.</p>
          <p class="mt-4">Eleftheria stood from her corner. She walked slowly to the table. In her hands she held not a book — for the first time in days. She held a pencil and a notebook. She was ready to write.</p>

          <div class="my-6 bg-gradient-to-r from-emerald-900/40 to-green-900/40 p-8 rounded-2xl border border-emerald-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">"You keep it first.<br/><span class="text-emerald-300">You pay yourself first.</span>"</p>
          </div>

          <p class="mt-4">Philippos shook his head in confusion. "I don't understand. How do I pay myself? I'm not a shop."</p>
          <p class="mt-3">WiseBot laughed — a sound like wind chimes. "Every time you earn something, before you buy anything, you set aside a portion. For you. For your future self. That future self matters. That one will thank you."</p>
          <p class="mt-3">Alexandra looked at her hands. "So... like giving a gift to my tomorrow-self?"</p>
          <p class="mt-3 text-emerald-200 font-medium">"Exactly," said WiseBot. "The most important gift you can give someone. Yourself."</p>
          <p class="mt-3 text-gray-400 text-sm italic">Eleftheria wrote only two words in her notebook, in large letters: ME FIRST. Not selfishness. Wisdom.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-emerald-500/15 shadow-lg shadow-emerald-900/20">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="The children learn from WiseBot" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-emerald-300/80 italic">The first principle: pay yourself first</div>
          </div>
        </section>

        <!-- SCENE 4 — HIGHLIGHTED KEY SCENE -->
        <section class="bg-gradient-to-br from-emerald-900/30 via-green-900/20 to-teal-900/10 p-8 rounded-2xl border-l-4 border-emerald-500 my-8 shadow-xl shadow-emerald-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-emerald-400 tracking-wide">THE FIRST SAVING</h3>
          </div>
          <p>Two weeks passed. Two weeks full of temptations. Philippos walked past shop windows and felt his fingers tighten around the coins in his pocket. Alexandra saw advertisements and her heart beat faster. It was like a battle — an invisible war between "I want it now" and "I want something better tomorrow."</p>
          <p class="mt-3">The next time they earned money — from a job in the neighbor's yard, raking leaves and trimming branches — Eleftheria took the amount in her hands. She counted carefully. She divided it into three stacks.</p>
          <p class="mt-3">"This," she said pointing to the largest stack, "is for expenses. For things we need."</p>
          <p class="mt-3">"This," pointing to the middle one, "is for something we want but can wait."</p>
          <p class="mt-3">"And this —" She raised the smallest stack. The coins gleamed in the light. "This is for us. <strong class="text-emerald-300">Untouchable.</strong>"</p>
          <p class="mt-4">Philippos stared at the small stack. His eyes narrowed. "It's too little!" he protested. His voice was filled with frustration, that familiar frustration of someone watching treasure being locked away before their eyes.</p>
          <p class="mt-3">WiseBot looked at him calmly. Her eyes pulsed gently, like the tide. And with a voice full of gravity, like a stone falling into a deep well, she said:</p>
          <p class="mt-4 text-emerald-300 font-bold text-xl">"The little that stays becomes much. The much that leaves becomes nothing."</p>
          <p class="mt-4">The phrase hung in the air like a banner. Something inside Philippos — something deep — understood. It was not the money that was too little. It was his patience.</p>
          <p class="mt-3">Alexandra took the pouch. She opened it slowly. She dropped the coins in, one by one. Each coin made a small sound as it hit the others. <em>Clink. Clink. Clink.</em></p>
          <p class="mt-3">It was the sweetest sound they had heard in a very long time.</p>
          <p class="mt-3 text-gray-400 text-sm italic">It was not much. But it was a beginning. And every beginning, no matter how small, holds within it the power of an entire mountain.</p>
        </section>

        <!-- SCENE 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-green-600/30 border border-green-500/30 text-green-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-green-400 tracking-wide">SPARKEN APPEARS</h3>
          </div>
          <p>The weeks passed. One. Two. Four. The pouch started getting heavier. Little by little, like snow gathering on branches. Not enough to impress anyone. But enough to feel something new: <em>safety</em>.</p>
          <p class="mt-3">Philippos had started seeing things differently. In shop windows, where he once saw "I want," he now saw numbers. Prices. Comparisons. "How many hours of work does this cost?" he thought. And usually the answer was enough to keep him walking.</p>
          <p class="mt-3">Alexandra had made a little booklet. She recorded income, expenses, savings. Every night before sleep, she weighed the pouch in her hands. And smiled.</p>
          <p class="mt-3">Eleftheria had found three books on economics — but this time she was not just reading. She was applying. Every principle she learned, they tested immediately. Theory became practice. And practice became habit.</p>
          <p class="mt-4">And then — one afternoon as the sun painted itself orange behind the clouds — the air grew <em>warm</em>. A golden light filled the corner of the room. Sparks. Small, lively, like fireflies in a hurry.</p>

          <div class="my-8 rounded-2xl overflow-hidden border border-emerald-500/20 shadow-2xl shadow-emerald-900/30">
            <img src="${IMG_SPARKEN}" alt="Sparken appears" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-emerald-300/80 italic">Sparken — the flame that awakens sleeping coins</div>
          </div>

          <p class="mt-4">Sparken. Small. Fiery. With eyes like glowing coals. His voice was warm but quick, like a dancing flame.</p>
          <p class="mt-3 text-emerald-300 font-bold text-lg">"Gold that sleeps doesn't grow."</p>
          <p class="mt-3">The children looked confused. Philippos unconsciously clutched the pouch. "What does he mean?" he whispered to Alexandra.</p>
          <p class="mt-3">WiseBot flew calmly and stood beside Sparken. "Money you just store," she explained, "is silent. Safe, yes. But motionless. Like water in a jar — it exists, but it waters nothing."</p>
          <p class="mt-3">Sparken jumped onto the table. Sparks scattered. "Money you <em>invest</em> works. It moves. It grows. Like a seed you plant — you don't see it for a while, but underground, roots are spreading."</p>
          <p class="mt-3 text-gray-400 text-sm italic">Philippos's eyes opened wide. For the first time, money was not something that comes and goes. It was something that could be <em>planted</em>.</p>
        </section>

        <!-- SCENE 6 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-red-400 tracking-wide">THE TRAP</h3>
          </div>
          <p>But wisdom is not only knowing when to act. It is also knowing when <em>not</em> to act.</p>
          <p class="mt-3">They did not rush to risk. They asked. They learned. They spoke with Mr. Nikos, the grocer, who had run a small business for thirty years. They spoke with Aunt Marina, who had savings and knew what "stability" meant. They discussed with people who had already walked the path and bore the marks on their feet.</p>
          <p class="mt-3">One day, an acquaintance — Thanasis, an older boy from the neighborhood, always speaking big words — approached them.</p>
          <p class="mt-3">"Put all your money here," he said, slapping a brochure on the table. "Sure opportunity. In two weeks, double."</p>
          <p class="mt-4">Philippos felt the temptation like a current. <em>Double.</em> The word gleamed in his mind. His fingers moved automatically toward the pouch.</p>
          <p class="mt-3">WiseBot was not looking at Thanasis. She was looking at Philippos. And she asked only one question:</p>
          <p class="mt-3 text-emerald-300 font-bold text-lg">"Do you understand how it works?"</p>
          <p class="mt-3">Silence. Philippos thought. Really thought. He looked at the brochure. Looked at Thanasis. Looked at the pouch.</p>
          <p class="mt-3 text-white font-bold">No. He did not understand how it worked. Only the "double" was loud. And that is always the trap.</p>
          <p class="mt-3">"Pass," said Philippos. Quietly but firmly. Thanasis shrugged and left. The pouch remained safe.</p>
          <p class="mt-3">Alexandra smiled. "That was harder than saving," she whispered.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Because the true enemy of wealth is not poverty. It is haste. Greed dressed as opportunity. And the only shield is a simple question: "Do I understand it?"</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-red-500/15 shadow-lg shadow-red-900/20">
            <img src="${IMG_ALEXANDRA}" alt="Alexandra" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-red-300/80 italic">Alexandra — always there to remind what truly matters</div>
          </div>
        </section>

        <!-- SCENE 7 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-emerald-300 tracking-wide">THE RESULT</h3>
          </div>
          <p>Months became a year. Slowly. Steadily. Like a river that does not hurry because it knows the sea will always be there.</p>
          <p class="mt-3">The capital grew. And with it, something more important: calm. That deep, quiet confidence that does not shout, does not boast, but exists — like a foundation beneath a house. You cannot see it, but it holds everything.</p>
          <p class="mt-3">Philippos stopped buying things to feel better. They did not buy to look rich. They built to become stable.</p>
          <p class="mt-3">Alexandra discovered something astonishing: that saving was not deprivation. It was <em>freedom</em>. Every coin in the pouch was a day without stress, a tomorrow without fear.</p>
          <p class="mt-3">They did not live for today alone. They thought of their future selves. "We're keeping this for you," Alexandra would say each time she placed coins in the pouch.</p>
          <p class="mt-3">Eleftheria had written everything down. Every principle, every mistake, every lesson. She had created an entire book of <em>experience</em>. Every page written with sweat and action.</p>
          <p class="mt-3 text-gray-400 text-sm italic">And somewhere between the days, without realizing it, the three children had become something that once seemed impossible: responsible. Not because someone forced them. But because they chose it.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-emerald-500/15 shadow-lg shadow-emerald-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="The three children together" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-emerald-300/80 italic">Three children, one pouch, a shared journey</div>
          </div>
        </section>

        <!-- SCENE 8 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-emerald-400 tracking-wide">THE HABIT</h3>
          </div>
          <p>One evening, the three children sat on the floor. The sun had set hours ago, but none of them wanted to leave. The pouch lay in the middle — heavy, round, warm as if alive. It was not merely full. It was <em>protected</em>.</p>
          <p class="mt-3">Philippos looked at WiseBot. His eyes were calm — that calm that comes only after a great battle. "It's not the money that changed," he said slowly. Each word measured, like a coin. "We changed."</p>
          <p class="mt-3">WiseBot nodded. Her purple eyes pulsed rhythmically, like music without sound. Sparken flickered beside her, quiet for the first time.</p>
          <p class="mt-4 text-emerald-300 font-bold text-xl">"Wealth doesn't start in the pouch. It starts in the habit."</p>
          <p class="mt-4">Alexandra took a deep breath. She looked at her hands — hands that a few months ago knew only how to spend. Now they knew how to count, to plan, to wait. "We learned to say 'no' to the easy," she whispered, "so we could say 'yes' to what matters."</p>
          <p class="mt-3">Eleftheria closed her notebook. On the cover she had written: <strong class="text-emerald-200">"Pouches that stay full are not filled with money. They are filled with decisions."</strong></p>
          <p class="mt-4">In the end, the pouch was not merely full. It was protected. Multiplying. Stable. Like a tree with deep roots that no wind can uproot.</p>
          <p class="mt-3 text-emerald-200 font-medium">They no longer feared money. They commanded it. They did not chase it. They invited it. They did not waste it. They respected it.</p>
          <p class="mt-3">And Sparken, before vanishing into his sparks, said one last thing:</p>
          <p class="mt-3 text-emerald-300 font-bold text-lg">"The richest person is not the one who has the most. It is the one who needs the least — and keeps the right things."</p>
          <p class="mt-3 text-gray-400 text-sm italic">The three children smiled. Not because they were rich. But because, for the first time, they were free.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-emerald-500/15 shadow-lg shadow-emerald-900/20">
            <img src="${IMG_KIDS_WISEBOT_2}" alt="The children with WiseBot" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-emerald-300/80 italic">The pouch learned to stay full. The children learned to stay steady.</div>
          </div>
        </section>

        <!-- JOURNAL -->
        <div class="mt-14 bg-emerald-950/60 p-8 rounded-3xl border-2 border-dashed border-emerald-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">💎</span>
            <h4 class="text-xl font-black text-emerald-300 uppercase tracking-wider">JOURNAL: MY OWN POUCH</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Write. Think. Feel. There is no wrong answer.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-emerald-500/15">
              <h5 class="text-emerald-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-emerald-600/40 flex items-center justify-center text-xs font-black">1</span>
                THE SPENDING
              </h5>
              <p class="text-sm mb-3 opacity-80">What do you buy often that you might not truly need? Think of three things.</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-emerald-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-emerald-500/15">
              <h5 class="text-emerald-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-emerald-600/40 flex items-center justify-center text-xs font-black">2</span>
                THE GOAL
              </h5>
              <p class="text-sm mb-3 opacity-80">What big thing would you like to save money for? Something worth the wait.</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-emerald-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-emerald-500/15">
              <h5 class="text-emerald-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-emerald-600/40 flex items-center justify-center text-xs font-black">3</span>
                THE HABIT
              </h5>
              <p class="text-sm mb-3 opacity-80">Complete the sentence:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-emerald-500/10 text-emerald-200">
                <p class="text-sm font-medium">"From whatever I earn, I will always keep: __________"</p>
              </div>
            </div>

          </div>
        </div>

        <!-- MEANING BOX -->
        <div class="mt-8 bg-gradient-to-r from-emerald-900/30 to-green-900/30 p-6 rounded-2xl border border-emerald-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-emerald-300 uppercase tracking-wider">The Meaning of This Chapter</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            Money is neither enemy nor friend. It is a <strong class="text-emerald-300">tool</strong>. And every tool becomes useful only in the hands of someone who knows how to hold it. WiseBot did not teach mathematics — she taught <strong class="text-green-300">habits</strong>. Pay yourself first. Do not chase "opportunities" you do not understand. And remember: wealth does not start in the pouch. It starts in the habit.
          </p>
        </div>

        <!-- MESSAGE FOR PARENTS -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-emerald-950/60 p-8 rounded-3xl border border-emerald-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-emerald-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              Financial literacy is not mathematics. It is a <strong class="text-white">habit</strong>. And habits are built early — long before children receive their first paycheck.
            </p>
            <p class="text-gray-300 leading-relaxed">
              The rule "Pay yourself first" is not only about money. It is about <strong class="text-emerald-300">self-respect</strong>. It means: "I deserve to care for my future before I care for my desires."
            </p>
            <div class="mt-4 bg-emerald-900/20 p-4 rounded-xl border border-emerald-500/10">
              <p class="text-sm text-emerald-200 font-medium">💡 Try today: Give your child a small amount and ask: "How would you divide this into three parts — needs, wants, and savings?" The answer may surprise you.</p>
            </div>
          </div>
        </div>

      </div>
    `
    }
  }
];
