
import { Book } from '../types';

// ============================================================
// BOOK 14: Η ΔΥΝΑΜΗ ΤΟΥ ΟΧΙ / THE POWER OF NO
// Hero: WiseBot
// Theme: ΟΡΙΑ / BOUNDARIES (blue/cyan)
// ============================================================

// Cover image
const IMG_WISEBOT = "/images/wisebot.jpg";

// Character images
const IMG_ALEXANDRA = "/images/alexandra.png";

// Story images
const IMG_KIDS_WITH_WISEBOT = "/images/paidia-kai-wisebot.png";
const IMG_KIDS_WISEBOT_2 = "/images/paidia-wisebot-2.png";
const IMG_KIDS_TOGETHER = "/images/ta-3-paidia.png";

export const BOOK_14: Book[] = [
  {
    id: 14,
    title: { el: "Η ΔΥΝΑΜΗ ΤΟΥ ΟΧΙ", en: "THE POWER OF NO" },
    theme: { el: "ΟΡΙΑ", en: "BOUNDARIES" },
    stepLabel: { el: "WISEBOT & ΟΡΙΑ", en: "WISEBOT & BOUNDARIES" },
    author: "Wisebot",
    cover: IMG_WISEBOT,
    videoUrl: "",
    description: {
      el: "Η Αλεξάνδρα δεν προλαβαίνει τίποτα γιατί λέει 'ναι' σε όλους. Μαθαίνει ότι το 'όχι' δεν είναι αγένεια, είναι ασπίδα.",
      en: "Alexandra doesn't have time for anything because she says 'yes' to everyone. She learns that 'no' is not rudeness, it's a shield."
    },
    meaning: {
      el: "Για να πεις ένα μεγάλο 'ΝΑΙ' στα όνειρά σου, πρέπει να πεις πολλά μικρά 'ΟΧΙ' στα υπόλοιπα.",
      en: "To say a big 'YES' to your dreams, you have to say many small 'NOs' to the rest."
    },
    xp: 280,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- ΕΙΣΑΓΩΓΙΚΟ QUOTE -->
        <div class="relative bg-gradient-to-r from-slate-900 via-blue-900/60 to-cyan-900/40 p-10 rounded-2xl border border-blue-500/30 text-center shadow-lg shadow-blue-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Κεφάλαιο 14</div>
          <p class="italic text-blue-200 text-xl mt-4 leading-relaxed">«Το "ΟΧΙ" δεν είναι τοίχος.<br/>Είναι πόρτα — που ανοίγει μόνο για σένα.»</p>
          <div class="mt-4 w-16 h-0.5 bg-blue-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- ΣΚΗΝΗ 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/30 text-blue-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-blue-300 tracking-wide">ΤΟ ΚΟΡΙΤΣΙ ΠΟΥ ΕΤΡΕΧΕ</h3>
          </div>
          <p>Η Αλεξάνδρα δεν περπατούσε ποτέ. <em>Έτρεχε.</em> Πάντα. Από πρωί μέχρι βράδυ, τα πόδια της χτυπούσαν στο πάτωμα σαν τύμπανα — αδιάκοπα, ξέπνοα, χωρίς παύση.</p>
          <p class="mt-3">Δεν ήταν γιατί αγαπούσε το τρέξιμο. Ήταν γιατί δεν μπορούσε να σταματήσει. Κάποιος πάντα τη χρειαζόταν. Κάποιος πάντα ζητούσε κάτι. Και εκείνη — πάντα, <em>πάντα</em> — έλεγε ναι.</p>
          <p class="mt-3">«Αλεξάνδρα, μπορείς να κρατήσεις αυτό;» — <strong class="text-blue-200">«Ναι.»</strong></p>
          <p class="mt-2">«Αλεξάνδρα, θα έρθεις να βοηθήσεις;» — <strong class="text-blue-200">«Ναι.»</strong></p>
          <p class="mt-2">«Αλεξάνδρα, θα το κάνεις εσύ;» — <strong class="text-blue-200">«Ναι.»</strong></p>
          <p class="mt-4">Τα «ναι» ήταν αυτόματα. Βγαίναν πριν σκεφτεί. Πριν πάρει ανάσα. Πριν καν νιώσει αν ήθελε ή αν μπορούσε. Σαν αντανακλαστικό — σαν βήχα, σαν αναπνοή, σαν κάτι που δεν ελέγχεις πια.</p>
          <p class="mt-3">Στο τέλος κάθε μέρας, ήταν εξαντλημένη. Τα μάτια της έκαιγαν. Τα χέρια της έτρεμαν. Και το δικό της έργο — αυτό που <em>πραγματικά</em> ήθελε να τελειώσει — ακουμπισμένο στη γωνία, σκεπασμένο με σκόνη και ενοχή.</p>
          <p class="mt-4">Ο Φίλιππος τη ρώτησε εκείνο το βράδυ: «Γιατί δεν το τελείωσες;»</p>
          <p class="mt-3 text-white font-medium italic">«Δεν πρόλαβα», ψιθύρισε.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Αλλά η αλήθεια δεν ήταν ότι δεν πρόλαβε. Η αλήθεια ήταν ότι είχε δώσει ολόκληρο τον χρόνο της σε άλλους — και δεν είχε κρατήσει ούτε ένα λεπτό για τον εαυτό της.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-blue-500/15 shadow-lg shadow-blue-900/20">
            <img src="${IMG_ALEXANDRA}" alt="Αλεξάνδρα" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-blue-300/80 italic">Η Αλεξάνδρα — πάντα έτρεχε, πάντα για τους άλλους</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-600/30 border border-cyan-500/30 text-cyan-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-cyan-300 tracking-wide">Η ΠΑΓΙΔΑ ΤΗΣ ΚΑΛΟΣΥΝΗΣ</h3>
          </div>
          <p>Νόμιζε ότι ήταν καλή φίλη. Νόμιζε ότι αυτό σήμαινε «να είσαι πάντα διαθέσιμη». Νόμιζε ότι η αγάπη κερδίζεται με την εξάντληση.</p>
          <p class="mt-3">Αλλά κάτω από το χαμόγελο, κάτι άλλο φούντωνε. Κάτι σκοτεινό. Κάτι που δεν ήθελε να παραδεχτεί.</p>
          <p class="mt-3"><strong class="text-red-300">Θυμός.</strong></p>
          <p class="mt-3">Όχι θυμός με τους άλλους. Θυμός με τον εαυτό της. Γιατί κάθε φορά που έλεγε «ναι» σε κάποιον άλλο, έλεγε «όχι» στα δικά της όνειρα. Και δεν είχε πει ποτέ αυτή τη λέξη δυνατά — δεν τολμούσε.</p>
          <p class="mt-4">Εκείνο το βράδυ, η Αλεξάνδρα καθόταν μόνη. Τα μάτια της ήταν κόκκινα. Τα χέρια της σφιγμένα γροθιές. Ένιωθε σαν μπαλόνι που κάποιος φούσκωνε χωρίς σταματημό — ένα τελευταίο «ναι» ακόμα, και θα σκάσει.</p>
          <p class="mt-3">Ο αέρας στο δωμάτιο άλλαξε. Ένα απαλό μπλε φως τρεμόπαιξε στη γωνία.</p>
          <p class="mt-3">Η WiseBot ήταν εκεί. Τα μωβ μάτια της πάλλονταν αργά, σαν κύμα στη θάλασσα.</p>
          <p class="mt-4 text-white text-lg">— «Είσαι κουρασμένη», είπε απαλά.</p>
          <p class="mt-3">Η Αλεξάνδρα κατάπιε τον κόμπο στο λαιμό της. «Πρέπει να βοηθάω», απάντησε με φωνή ραγισμένη.</p>
          <p class="mt-4 text-cyan-300 font-bold text-lg">— «Πρέπει;» ρώτησε η WiseBot. «Ή φοβάσαι ότι αν πεις ΟΧΙ… δεν θα σε αγαπάνε;»</p>
          <p class="mt-4">Η Αλεξάνδρα πάγωσε. Ο χρόνος σταμάτησε. Ήταν σαν κάποιος να άνοιξε μια πόρτα που κρατούσε κλειδωμένη για χρόνια — και πίσω από αυτήν δεν υπήρχε τέρας. Υπήρχε μόνο ένα μικρό κορίτσι, καθισμένο μόνο, που φοβόταν ότι αν σταματήσει να τρέχει, κανείς δεν θα μείνει κοντά της.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η καλοσύνη χωρίς όρια δεν είναι αγάπη. Είναι φυλακή με χρυσά κάγκελα.</p>
        </section>

        <!-- ΣΚΗΝΗ 3 — KEY SCENE -->
        <section class="bg-gradient-to-br from-blue-900/30 via-cyan-900/20 to-teal-900/10 p-8 rounded-2xl border-l-4 border-cyan-500 my-8 shadow-xl shadow-blue-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-600/30 border border-cyan-500/30 text-cyan-300 font-black text-sm">03</span>
            <h3 class="text-3xl font-black text-cyan-400 tracking-wide">ΤΟ ΜΑΘΗΜΑ ΤΟΥ ΟΧΙ</h3>
          </div>
          <p>Η WiseBot πέταξε αθόρυβα και ακούμπησε στο γραφείο, δίπλα στο ημιτελές έργο της Αλεξάνδρας. Τα μάτια της — δύο γαλανοί κρύσταλλοι τώρα — ακτινοβολούσαν μια θαλασσινή ζεστασιά.</p>
          <p class="mt-3">«Πες μου», ξεκίνησε η WiseBot, «αν κάποιος σου ζητούσε να πετάξεις στον αέρα — θα έλεγες ναι;»</p>
          <p class="mt-3">Η Αλεξάνδρα κούνησε αρνητικά. «Φυσικά και όχι. Δεν μπορώ να πετάξω.»</p>
          <p class="mt-3">«Τότε γιατί λες ναι σε πράγματα που σε ρίχνουν κάτω;»</p>
          <p class="mt-4">Σιωπή. Μόνο ο ήχος της καρδιάς της, που χτυπούσε πιο γρήγορα από πριν.</p>

          <div class="my-8 rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-blue-900/30">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="Η WiseBot μιλά στην Αλεξάνδρα" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-cyan-300/80 italic">Η WiseBot αποκαλύπτει την αλήθεια πίσω από κάθε «ναι»</div>
          </div>

          <p class="mt-4">«Το "ΟΧΙ"», είπε η WiseBot με φωνή ήρεμη και βαθιά, σαν κύμα που σπάει σε βράχο, «δεν είναι κακία. Δεν είναι αγένεια. Δεν είναι εγωισμός.»</p>
          <p class="mt-3">Σταμάτησε. Τα μάτια της πάλλονταν πιο έντονα.</p>

          <div class="my-6 bg-gradient-to-r from-blue-900/40 to-cyan-900/40 p-8 rounded-2xl border border-blue-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">«Το "ΟΧΙ" είναι ασπίδα.<br/><span class="text-cyan-300">Προστατεύει τον χρόνο σου. Την ενέργειά σου. Τα όνειρά σου.</span>»</p>
          </div>

          <p class="mt-4">— «Αλλά θα θυμώσουν», ψέλλισε η Αλεξάνδρα. Τα μάτια της γέμισαν δάκρυα.</p>
          <p class="mt-3">Η WiseBot την κοίταξε. Βαθιά. Με μια ζεστασιά που δεν περίμενε κανείς από μεταλλικά μάτια.</p>
          <p class="mt-4 text-white font-bold text-lg">— «Αν θυμώσουν επειδή προσέχεις τον εαυτό σου… τότε δεν σέβονται εσένα. Σέβονται μόνο αυτό που κάνεις για αυτούς.»</p>
          <p class="mt-4">Η Αλεξάνδρα ένιωσε κάτι να σπάει μέσα της. Όχι κάτι που πονάει. Κάτι που <em>ελευθερώνει</em>. Σαν αλυσίδα που λύνεται. Σαν παράθυρο που ανοίγει σε δωμάτιο γεμάτο σκόνη.</p>
          <p class="mt-3">«Κάθε φορά που λες ΝΑΙ σε κάτι», συνέχισε η WiseBot, «λες ΟΧΙ σε κάτι άλλο. Το ερώτημα είναι: σε <em>τι</em> λες ΟΧΙ χωρίς να το καταλαβαίνεις;»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Και η Αλεξάνδρα κατάλαβε. Κάθε «ναι» στους άλλους ήταν ένα «όχι» στον εαυτό της. Και αυτό δεν ήταν καλοσύνη. Ήταν αυτοκαταστροφή ντυμένη με χαμόγελο.</p>
        </section>

        <!-- ΣΚΗΝΗ 4 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/30 text-blue-300 font-black text-sm">04</span>
            <h3 class="text-2xl font-black text-blue-300 tracking-wide">Η ΑΣΚΗΣΗ ΤΗΣ ΑΣΠΙΔΑΣ</h3>
          </div>
          <p>Η WiseBot άνοιξε τα φτερά της αργά. Μια λάμψη γαλάζια κάλυψε το δωμάτιο.</p>
          <p class="mt-3">«Θα σου μάθω κάτι», είπε. «Κάτι που δεν γράφεται στα βιβλία. Κάτι που πρέπει να νιώσεις μέσα σου.»</p>
          <p class="mt-3">«Κλείσε τα μάτια σου.»</p>
          <p class="mt-3">Η Αλεξάνδρα δίστασε. Ύστερα υπάκουσε. Σκοτάδι.</p>
          <p class="mt-4">«Τώρα φαντάσου ότι γύρω σου υπάρχει μια σφαίρα. Μια μπάλα από φως. Αυτό είναι ο χώρος σου. Ο χρόνος σου. Η ενέργειά σου.»</p>
          <p class="mt-3">Η Αλεξάνδρα τη φαντάστηκε. Μπλε. Ζεστή. Ασφαλής.</p>
          <p class="mt-3">«Κάθε φορά που λες ΝΑΙ χωρίς να το εννοείς, κάνεις μια τρύπα σε αυτή τη σφαίρα. Η ενέργειά σου χύνεται. Διαρρέει. Στάζει σε χέρια που δεν τη χρειάζονται πραγματικά.»</p>
          <p class="mt-4">Η Αλεξάνδρα ένιωσε ένα ρίγος. Γιατί μπορούσε να <em>δει</em> τη σφαίρα. Και ήταν γεμάτη τρύπες. Σχεδόν άδεια.</p>
          <p class="mt-3">«Κάθε φορά που λες ΟΧΙ — ένα αληθινό, τίμιο, ήρεμο "ΟΧΙ" — κλείνεις μια τρύπα. Και η ενέργεια μένει μέσα σου. Για σένα. Για τα πραγματικά σου "ΝΑΙ".»</p>
          <p class="mt-4">Η Αλεξάνδρα άνοιξε τα μάτια. Ένα δάκρυ κύλησε στο μάγουλό της. Αλλά δεν ήταν δάκρυ λύπης. Ήταν δάκρυ <em>ανακούφισης</em>.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Μερικά μαθήματα δεν χρειάζονται βιβλία. Χρειάζονται μόνο κάποιον να σου πει αυτό που ήξερες ήδη — αλλά φοβόσουν να ακούσεις.</p>
        </section>

        <!-- ΣΚΗΝΗ 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-600/30 border border-teal-500/30 text-teal-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-teal-300 tracking-wide">Η ΔΟΚΙΜΗ</h3>
          </div>
          <p>Η επόμενη μέρα ήρθε σαν εξέταση. Η Αλεξάνδρα ξύπνησε με σφιγμένο στομάχι. Ήξερε ότι σήμερα θα δοκίμαζε κάτι που δεν είχε κάνει ποτέ.</p>
          <p class="mt-3">Δεν χρειάστηκε να περιμένει πολύ. Στο πρώτο διάλειμμα, μια φίλη της πλησίασε.</p>
          <p class="mt-3">«Αλεξάνδρα, μπορείς να μου γράψεις την εργασία; Δεν πρόλαβα.»</p>
          <p class="mt-4">Τα χέρια της ίδρωσαν. Το «ΝΑΙ» ήταν ήδη στα χείλη της. Αυτόματο. Μηχανικό. Σαν τραίνο που ξεκινάει χωρίς μηχανοδηγό.</p>
          <p class="mt-3">Αλλά τότε — κάτι <em>καινούργιο</em>. Μια μικρή σκέψη, φωτεινή σαν σπίθα: <span class="text-cyan-300 font-bold">«Η σφαίρα μου. Η ενέργειά μου.»</span></p>
          <p class="mt-4">Η Αλεξάνδρα πήρε μια βαθιά ανάσα. Ένιωσε τον αέρα να γεμίζει τα πνευμόνια της. Αργά. Σταθερά.</p>
          <p class="mt-4 text-white font-bold text-lg">«Όχι, δεν μπορώ σήμερα. Έχω δική μου δουλειά.»</p>
          <p class="mt-4">Η φωνή της δεν ήταν σκληρή. Δεν ήταν θυμωμένη. Ήταν <em>ήρεμη</em>. Και αυτό ήταν που την ξάφνιασε περισσότερο. Το «ΟΧΙ» δεν χρειαζόταν φωνές. Χρειαζόταν μόνο σταθερότητα.</p>
          <p class="mt-3">Περίμενε φωνές. Περίμενε θυμό. Περίμενε τον ουρανό να πέσει.</p>
          <p class="mt-3">Η φίλη της σήκωσε τα φρύδια. «Α. ΟΚ. Δεν πειράζει.»</p>
          <p class="mt-4">Και έφυγε.</p>
          <p class="mt-3"><em>Και έφυγε.</em></p>
          <p class="mt-3">Η Αλεξάνδρα έμεινε ακίνητη. Ο ουρανός δεν έπεσε. Η γη δεν σείστηκε. Κανείς δεν θύμωσε. Κανείς δεν την μίσησε. Ο κόσμος απλά… <strong class="text-cyan-200">συνέχισε</strong>.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Και εκείνη ένιωσε ελαφριά. Για πρώτη φορά μετά από μήνες, τα πόδια της δεν ήθελαν να τρέξουν. Ήθελαν να σταθούν.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-teal-500/15 shadow-lg shadow-teal-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="Τα παιδιά μαζί" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-teal-300/80 italic">Η πρώτη φορά που η Αλεξάνδρα στάθηκε αντί να τρέξει</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 6 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/30 text-blue-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-blue-300 tracking-wide">Ο ΧΡΟΝΟΣ ΠΟΥ ΓΥΡΙΣΕ</h3>
          </div>
          <p>Εκείνο το απόγευμα, η Αλεξάνδρα δεν έτρεξε πουθενά. Κάθισε στο γραφείο της. Άνοιξε το ημιτελές έργο της. Και για πρώτη φορά μετά από εβδομάδες, τα χέρια της δεν έτρεμαν.</p>
          <p class="mt-3">Δούλεψε. Ήρεμα. Σταθερά. Χωρίς να κοιτάζει το ρολόι. Χωρίς να ακούει αν κάποιος τη φωνάζει. Χωρίς να τρέχει.</p>
          <p class="mt-3">Ο ήλιος χαμήλωσε. Σκιές μπήκαν στο δωμάτιο σαν χρυσά ποτάμια. Και η Αλεξάνδρα <em>χαμογελούσε</em>. Όχι το χαμόγελο που έβαζε για τους άλλους. Ένα αληθινό χαμόγελο. Μικρό. Ήσυχο. Δικό της.</p>
          <p class="mt-4">Ο Φίλιππος τη βρήκε εκεί, τυλιγμένη στο φως του δειλινού.</p>
          <p class="mt-3">«Τελείωσες;» ρώτησε, σχεδόν αφηρημένα.</p>
          <p class="mt-4 text-white font-bold">— «Ναι», είπε η Αλεξάνδρα. Και η φωνή της ήταν γεμάτη. Σταθερή. Ζωντανή.</p>
          <p class="mt-3 text-cyan-200 font-medium text-lg">«Και έχω ακόμα ενέργεια.»</p>
          <p class="mt-4">Ο Φίλιππος την κοίταξε παράξενα. Κάτι είχε αλλάξει σε εκείνη. Δεν μπορούσε να πει τι ακριβώς — αλλά η Αλεξάνδρα που καθόταν μπροστά του δεν ήταν το κορίτσι που έτρεχε. Ήταν κάτι καλύτερο. Κάτι πιο <em>ολόκληρο</em>.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Ο χρόνος δεν γυρίζει πίσω. Αλλά μπορείς να σταματήσεις να τον σπαταλάς. Και τότε, μαγικά, σου φαίνεται ότι ξαναβρίσκεις ώρες που νόμιζες χαμένες.</p>
        </section>

        <!-- ΣΚΗΝΗ 7 — Η ΑΛΗΘΕΙΑ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-600/30 border border-cyan-500/30 text-cyan-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-cyan-400 tracking-wide">Η ΑΛΗΘΕΙΑ ΣΤΟΝ ΤΟΙΧΟ</h3>
          </div>
          <p>Εκείνο το βράδυ, η Αλεξάνδρα πήρε έναν μαρκαδόρο. Ένα μπλε μαρκαδόρο — του ίδιου χρώματος με τα μάτια της WiseBot εκείνη τη νύχτα.</p>
          <p class="mt-3">Στάθηκε μπροστά στον τοίχο πάνω από το γραφείο της. Εκεί που κρεμόταν μια λίστα με υποχρεώσεις — δεκάδες πράγματα για τους άλλους, κανένα για εκείνη.</p>
          <p class="mt-3">Αργά, με χέρι που δεν έτρεμε πια, διέγραψε τη λίστα.</p>
          <p class="mt-4">Και στη θέση της, έγραψε μια μόνο πρόταση. Μεγάλη. Καθαρή. Με γράμματα που φαίνονταν σαν να βρυχιόνταν:</p>

          <div class="my-6 bg-gradient-to-r from-blue-900/40 to-cyan-900/40 p-8 rounded-2xl border border-blue-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">«Λέω ΟΧΙ στους άλλους,<br/><span class="text-cyan-300 font-bold">για να πω ΝΑΙ σε μένα.»</span></p>
          </div>

          <p class="mt-4">Η WiseBot δεν ήταν εκεί. Δεν χρειαζόταν. Γιατί το μάθημα δεν ήταν πια λόγια κάποιου άλλου. Ήταν λέξεις δικές της, γραμμένες με τα δικά της χέρια, πάνω στον δικό της τοίχο.</p>
          <p class="mt-3">Η Αλεξάνδρα έσβησε το φως. Ξάπλωσε. Και για πρώτη φορά μετά από πολύ καιρό, δεν σκέφτηκε τι θα ζητήσει αύριο κάποιος άλλος.</p>
          <p class="mt-3">Σκέφτηκε τι θα κάνει <em>εκείνη</em>.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η δύναμη του «ΟΧΙ» δεν είναι να απομακρύνεις τους ανθρώπους. Είναι να βρεις ξανά τον εαυτό σου ανάμεσα στα «ΝΑΙ» που δεν εννοούσες ποτέ.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-blue-500/20 shadow-2xl shadow-blue-900/20">
            <img src="${IMG_KIDS_WISEBOT_2}" alt="Η Αλεξάνδρα βρήκε τη δύναμή της" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-blue-300/80 italic">Η δύναμη δεν είναι να λες πάντα ΝΑΙ. Είναι να ξέρεις πότε να πεις ΟΧΙ.</div>
          </div>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-blue-950/60 p-8 rounded-3xl border-2 border-dashed border-blue-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-blue-300 uppercase tracking-wider">JOURNAL: ΤΑ ΟΡΙΑ ΜΟΥ</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Γράψε. Σκέψου. Νιώσε. Δεν υπάρχει λάθος απάντηση.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-blue-500/15">
              <h5 class="text-blue-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-blue-600/40 flex items-center justify-center text-xs font-black">1</span>
                Η ΔΥΣΚΟΛΙΑ
              </h5>
              <p class="text-sm mb-3 opacity-80">Σε ποιον δυσκολεύεσαι πιο πολύ να πεις «ΟΧΙ»; Γιατί πιστεύεις ότι συμβαίνει αυτό;</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-blue-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-blue-500/15">
              <h5 class="text-blue-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-blue-600/40 flex items-center justify-center text-xs font-black">2</span>
                Ο ΦΟΒΟΣ
              </h5>
              <p class="text-sm mb-3 opacity-80">Τι φοβάσαι ότι θα γίνει αν πεις «ΟΧΙ»; Έχει γίνει ποτέ αυτό πραγματικά;</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-blue-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-blue-500/15">
              <h5 class="text-blue-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-blue-600/40 flex items-center justify-center text-xs font-black">3</span>
                Η ΠΡΑΞΗ
              </h5>
              <p class="text-sm mb-3 opacity-80">Συμπλήρωσε την πρόταση:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-blue-500/10 text-blue-200">
                <p class="text-sm font-medium">«Σήμερα θα πω ένα μικρό ΟΧΙ, για να προστατεύσω: __________»</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΝΟΗΜΑ / MEANING BOX -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-6 rounded-2xl border border-blue-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-blue-300 uppercase tracking-wider">Το νόημα αυτού του κεφαλαίου</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            Το «ΟΧΙ» δεν είναι εγωισμός. Είναι <strong class="text-blue-300">σεβασμός</strong> — πρώτα στον εαυτό σου, και μετά στους άλλους. Γιατί όταν δίνεις τα πάντα χωρίς όρια, δεν μένει τίποτα μέσα σου. Και τότε, ακόμα κι αν θέλεις να βοηθήσεις — δεν <strong class="text-cyan-300">μπορείς</strong>. Τα όρια δεν χωρίζουν τους ανθρώπους. Τους προστατεύουν.
          </p>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-blue-950/60 p-8 rounded-3xl border border-blue-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-blue-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              Πολλά παιδιά μαθαίνουν νωρίς ότι η αξία τους εξαρτάται από το <strong class="text-white">πόσα κάνουν για τους άλλους</strong>. Αυτό δεν τα κάνει «καλά παιδιά». Τα κάνει <em>εξαντλημένα παιδιά</em> που φοβούνται να βάλουν όρια.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Τα όρια δεν είναι εγωισμός. Είναι <strong class="text-blue-300">αυτοσεβασμός</strong>. Και ένα παιδί που μαθαίνει να λέει «ΟΧΙ» με σεβασμό, μαθαίνει ταυτόχρονα να σέβεται και τα όρια των άλλων.
            </p>
            <div class="mt-4 bg-blue-900/20 p-4 rounded-xl border border-blue-500/10">
              <p class="text-sm text-blue-200 font-medium">💡 Δοκιμάστε σήμερα: Αντί να επιβραβεύετε μόνο τη βοήθεια, ρωτήστε: «Εσύ τι χρειάζεσαι σήμερα; Τι θα ήθελες να κάνεις για σένα;»</p>
            </div>
          </div>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- INTRO QUOTE -->
        <div class="relative bg-gradient-to-r from-slate-900 via-blue-900/60 to-cyan-900/40 p-10 rounded-2xl border border-blue-500/30 text-center shadow-lg shadow-blue-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Chapter 14</div>
          <p class="italic text-blue-200 text-xl mt-4 leading-relaxed">"'NO' is not a wall.<br/>It is a door — that opens only for you."</p>
          <div class="mt-4 w-16 h-0.5 bg-blue-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- SCENE 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/30 text-blue-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-blue-300 tracking-wide">THE GIRL WHO RAN</h3>
          </div>
          <p>Alexandra never walked. She <em>ran</em>. Always. From morning to night, her feet hit the floor like drums — relentless, breathless, without pause.</p>
          <p class="mt-3">It wasn't because she loved running. It was because she couldn't stop. Someone always needed her. Someone always asked for something. And she — always, <em>always</em> — said yes.</p>
          <p class="mt-3">"Alexandra, can you hold this?" — <strong class="text-blue-200">"Yes."</strong></p>
          <p class="mt-2">"Alexandra, will you come help?" — <strong class="text-blue-200">"Yes."</strong></p>
          <p class="mt-2">"Alexandra, will you do it?" — <strong class="text-blue-200">"Yes."</strong></p>
          <p class="mt-4">The "yeses" were automatic. They came out before she thought. Before she breathed. Before she even felt whether she wanted to or could. Like a reflex — like a cough, like breathing, like something you no longer control.</p>
          <p class="mt-3">At the end of each day, she was exhausted. Her eyes burned. Her hands trembled. And her own project — the one she <em>truly</em> wanted to finish — sat in the corner, covered in dust and guilt.</p>
          <p class="mt-4">Philippos asked her that evening: "Why didn't you finish it?"</p>
          <p class="mt-3 text-white font-medium italic">"I didn't have time," she whispered.</p>
          <p class="mt-3 text-gray-400 text-sm italic">But the truth wasn't that she ran out of time. The truth was she had given all her time to others — and hadn't kept a single minute for herself.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-blue-500/15 shadow-lg shadow-blue-900/20">
            <img src="${IMG_ALEXANDRA}" alt="Alexandra" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-blue-300/80 italic">Alexandra — always running, always for others</div>
          </div>
        </section>

        <!-- SCENE 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-600/30 border border-cyan-500/30 text-cyan-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-cyan-300 tracking-wide">THE KINDNESS TRAP</h3>
          </div>
          <p>She thought she was a good friend. She thought that meant "always being available." She thought love was earned through exhaustion.</p>
          <p class="mt-3">But underneath the smile, something else was growing. Something dark. Something she didn't want to admit.</p>
          <p class="mt-3"><strong class="text-red-300">Anger.</strong></p>
          <p class="mt-3">Not anger at others. Anger at herself. Because every time she said "yes" to someone else, she said "no" to her own dreams. And she had never said that word out loud — she didn't dare.</p>
          <p class="mt-4">That evening, Alexandra sat alone. Her eyes were red. Her hands clenched into fists. She felt like a balloon someone kept inflating without stopping — one more "yes," and she would burst.</p>
          <p class="mt-3">The air in the room shifted. A soft blue light flickered in the corner.</p>
          <p class="mt-3">WiseBot was there. Her purple eyes pulsed slowly, like a wave in the sea.</p>
          <p class="mt-4 text-white text-lg">— "You are tired," she said softly.</p>
          <p class="mt-3">Alexandra swallowed the lump in her throat. "I have to help," she replied, her voice cracked.</p>
          <p class="mt-4 text-cyan-300 font-bold text-lg">— "Have to?" asked WiseBot. "Or are you afraid that if you say NO... they won't love you?"</p>
          <p class="mt-4">Alexandra froze. Time stopped. It was as if someone had opened a door she had kept locked for years — and behind it there was no monster. There was only a small girl, sitting alone, afraid that if she stopped running, no one would stay close to her.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Kindness without boundaries is not love. It is a prison with golden bars.</p>
        </section>

        <!-- SCENE 3 — KEY SCENE -->
        <section class="bg-gradient-to-br from-blue-900/30 via-cyan-900/20 to-teal-900/10 p-8 rounded-2xl border-l-4 border-cyan-500 my-8 shadow-xl shadow-blue-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-600/30 border border-cyan-500/30 text-cyan-300 font-black text-sm">03</span>
            <h3 class="text-3xl font-black text-cyan-400 tracking-wide">THE LESSON OF NO</h3>
          </div>
          <p>WiseBot flew silently and landed on the desk, beside Alexandra's unfinished project. Her eyes — two blue crystals now — radiated an oceanic warmth.</p>
          <p class="mt-3">"Tell me," WiseBot began, "if someone asked you to fly into the air — would you say yes?"</p>
          <p class="mt-3">Alexandra shook her head. "Of course not. I can't fly."</p>
          <p class="mt-3">"Then why do you say yes to things that bring you down?"</p>
          <p class="mt-4">Silence. Only the sound of her heart, beating faster than before.</p>

          <div class="my-8 rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-blue-900/30">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="WiseBot speaks to Alexandra" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-cyan-300/80 italic">WiseBot reveals the truth behind every "yes"</div>
          </div>

          <p class="mt-4">"'NO,'" said WiseBot, her voice calm and deep, like a wave breaking on rock, "is not cruelty. It is not rudeness. It is not selfishness."</p>
          <p class="mt-3">She paused. Her eyes pulsed more intensely.</p>

          <div class="my-6 bg-gradient-to-r from-blue-900/40 to-cyan-900/40 p-8 rounded-2xl border border-blue-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">"'NO' is a shield.<br/><span class="text-cyan-300">It protects your time. Your energy. Your dreams.</span>"</p>
          </div>

          <p class="mt-4">— "But they will get angry," Alexandra stammered. Her eyes filled with tears.</p>
          <p class="mt-3">WiseBot looked at her. Deeply. With a warmth no one expected from metallic eyes.</p>
          <p class="mt-4 text-white font-bold text-lg">— "If they get angry because you take care of yourself... then they don't respect you. They only respect what you do for them."</p>
          <p class="mt-4">Alexandra felt something break inside her. Not something that hurts. Something that <em>frees</em>. Like a chain coming undone. Like a window opening in a room full of dust.</p>
          <p class="mt-3">"Every time you say YES to something," WiseBot continued, "you say NO to something else. The question is: <em>what</em> are you saying NO to without realizing it?"</p>
          <p class="mt-3 text-gray-400 text-sm italic">And Alexandra understood. Every "yes" to others was a "no" to herself. And that wasn't kindness. It was self-destruction dressed in a smile.</p>
        </section>

        <!-- SCENE 4 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/30 text-blue-300 font-black text-sm">04</span>
            <h3 class="text-2xl font-black text-blue-300 tracking-wide">THE SHIELD EXERCISE</h3>
          </div>
          <p>WiseBot spread her wings slowly. A blue glow covered the room.</p>
          <p class="mt-3">"I will teach you something," she said. "Something not written in books. Something you must feel inside."</p>
          <p class="mt-3">"Close your eyes."</p>
          <p class="mt-3">Alexandra hesitated. Then she obeyed. Darkness.</p>
          <p class="mt-4">"Now imagine a sphere around you. A ball of light. That is your space. Your time. Your energy."</p>
          <p class="mt-3">Alexandra imagined it. Blue. Warm. Safe.</p>
          <p class="mt-3">"Every time you say YES without meaning it, you make a hole in that sphere. Your energy spills out. Leaks. Drips into hands that don't truly need it."</p>
          <p class="mt-4">Alexandra felt a shiver. Because she could <em>see</em> the sphere. And it was full of holes. Almost empty.</p>
          <p class="mt-3">"Every time you say NO — a true, honest, calm 'NO' — you seal a hole. And your energy stays inside you. For you. For your real 'YES' moments."</p>
          <p class="mt-4">Alexandra opened her eyes. A tear rolled down her cheek. But it wasn't a tear of sadness. It was a tear of <em>relief</em>.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Some lessons don't need books. They only need someone to tell you what you already knew — but were afraid to hear.</p>
        </section>

        <!-- SCENE 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-600/30 border border-teal-500/30 text-teal-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-teal-300 tracking-wide">THE TEST</h3>
          </div>
          <p>The next day came like an exam. Alexandra woke with a tight stomach. She knew that today she would try something she had never done before.</p>
          <p class="mt-3">She didn't have to wait long. At the first break, a friend approached her.</p>
          <p class="mt-3">"Alexandra, can you write my assignment for me? I didn't have time."</p>
          <p class="mt-4">Her palms sweated. The "YES" was already on her lips. Automatic. Mechanical. Like a train starting without a driver.</p>
          <p class="mt-3">But then — something <em>new</em>. A small thought, bright as a spark: <span class="text-cyan-300 font-bold">"My sphere. My energy."</span></p>
          <p class="mt-4">Alexandra took a deep breath. She felt the air fill her lungs. Slowly. Steadily.</p>
          <p class="mt-4 text-white font-bold text-lg">"No, I can't today. I have my own work."</p>
          <p class="mt-4">Her voice wasn't harsh. It wasn't angry. It was <em>calm</em>. And that was what surprised her most. The "NO" didn't need shouting. It only needed steadiness.</p>
          <p class="mt-3">She expected yelling. She expected anger. She expected the sky to fall.</p>
          <p class="mt-3">Her friend raised her eyebrows. "Oh. OK. No problem."</p>
          <p class="mt-4">And walked away.</p>
          <p class="mt-3"><em>And walked away.</em></p>
          <p class="mt-3">Alexandra stood still. The sky didn't fall. The earth didn't shake. No one got angry. No one hated her. The world simply... <strong class="text-cyan-200">continued</strong>.</p>
          <p class="mt-3 text-gray-400 text-sm italic">And she felt light. For the first time in months, her feet didn't want to run. They wanted to stand.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-teal-500/15 shadow-lg shadow-teal-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="The children together" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-teal-300/80 italic">The first time Alexandra stood still instead of running</div>
          </div>
        </section>

        <!-- SCENE 6 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/30 text-blue-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-blue-300 tracking-wide">THE RETURNED TIME</h3>
          </div>
          <p>That afternoon, Alexandra didn't run anywhere. She sat at her desk. Opened her unfinished project. And for the first time in weeks, her hands didn't tremble.</p>
          <p class="mt-3">She worked. Calmly. Steadily. Without watching the clock. Without listening for someone calling her. Without running.</p>
          <p class="mt-3">The sun sank low. Shadows crept into the room like golden rivers. And Alexandra was <em>smiling</em>. Not the smile she wore for others. A real smile. Small. Quiet. Her own.</p>
          <p class="mt-4">Philippos found her there, wrapped in the evening light.</p>
          <p class="mt-3">"Finished?" he asked, almost absentmindedly.</p>
          <p class="mt-4 text-white font-bold">— "Yes," said Alexandra. And her voice was full. Steady. Alive.</p>
          <p class="mt-3 text-cyan-200 font-medium text-lg">"And I still have energy."</p>
          <p class="mt-4">Philippos looked at her strangely. Something had changed in her. He couldn't say exactly what — but the Alexandra sitting before him was not the girl who ran. She was something better. Something more <em>whole</em>.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Time doesn't go backwards. But you can stop wasting it. And then, magically, it feels like you've found hours you thought were lost.</p>
        </section>

        <!-- SCENE 7 — THE TRUTH -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-600/30 border border-cyan-500/30 text-cyan-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-cyan-400 tracking-wide">THE TRUTH ON THE WALL</h3>
          </div>
          <p>That evening, Alexandra grabbed a marker. A blue marker — the same color as WiseBot's eyes that night.</p>
          <p class="mt-3">She stood before the wall above her desk. Where a list of obligations hung — dozens of things for others, none for herself.</p>
          <p class="mt-3">Slowly, with a hand that no longer trembled, she crossed out the list.</p>
          <p class="mt-4">And in its place, she wrote a single sentence. Large. Clear. In letters that seemed to roar:</p>

          <div class="my-6 bg-gradient-to-r from-blue-900/40 to-cyan-900/40 p-8 rounded-2xl border border-blue-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">"I say NO to others,<br/><span class="text-cyan-300 font-bold">to say YES to me."</span></p>
          </div>

          <p class="mt-4">WiseBot wasn't there. She didn't need to be. Because the lesson was no longer someone else's words. It was her own words, written by her own hands, on her own wall.</p>
          <p class="mt-3">Alexandra turned off the light. Lay down. And for the first time in a long while, she didn't think about what someone else would ask tomorrow.</p>
          <p class="mt-3">She thought about what <em>she</em> would do.</p>
          <p class="mt-3 text-gray-400 text-sm italic">The power of "NO" is not about pushing people away. It is about finding yourself again among the "yeses" you never truly meant.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-blue-500/20 shadow-2xl shadow-blue-900/20">
            <img src="${IMG_KIDS_WISEBOT_2}" alt="Alexandra found her strength" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-blue-300/80 italic">True strength is not always saying YES. It is knowing when to say NO.</div>
          </div>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-blue-950/60 p-8 rounded-3xl border-2 border-dashed border-blue-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-blue-300 uppercase tracking-wider">JOURNAL: MY BOUNDARIES</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Write. Think. Feel. There is no wrong answer.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-blue-500/15">
              <h5 class="text-blue-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-blue-600/40 flex items-center justify-center text-xs font-black">1</span>
                THE DIFFICULTY
              </h5>
              <p class="text-sm mb-3 opacity-80">Who do you find hardest to say "NO" to? Why do you think that happens?</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-blue-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-blue-500/15">
              <h5 class="text-blue-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-blue-600/40 flex items-center justify-center text-xs font-black">2</span>
                THE FEAR
              </h5>
              <p class="text-sm mb-3 opacity-80">What do you fear will happen if you say "NO"? Has that fear ever actually come true?</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-blue-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-blue-500/15">
              <h5 class="text-blue-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-blue-600/40 flex items-center justify-center text-xs font-black">3</span>
                THE ACTION
              </h5>
              <p class="text-sm mb-3 opacity-80">Complete the sentence:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-blue-500/10 text-blue-200">
                <p class="text-sm font-medium">"Today I will say a small NO, to protect: __________"</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- MEANING BOX -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-6 rounded-2xl border border-blue-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-blue-300 uppercase tracking-wider">The Meaning of This Chapter</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            "NO" is not selfishness. It is <strong class="text-blue-300">respect</strong> — first for yourself, then for others. Because when you give everything without limits, nothing remains inside you. And then, even if you want to help — you <strong class="text-cyan-300">can't</strong>. Boundaries don't separate people. They protect them.
          </p>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- MESSAGE FOR PARENTS -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-blue-950/60 p-8 rounded-3xl border border-blue-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-blue-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              Many children learn early that their worth depends on <strong class="text-white">how much they do for others</strong>. This doesn't make them "good kids." It makes them <em>exhausted kids</em> who are afraid to set boundaries.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Boundaries are not selfishness. They are <strong class="text-blue-300">self-respect</strong>. And a child who learns to say "NO" respectfully also learns to respect the boundaries of others.
            </p>
            <div class="mt-4 bg-blue-900/20 p-4 rounded-xl border border-blue-500/10">
              <p class="text-sm text-blue-200 font-medium">💡 Try today: Instead of only praising helpfulness, ask: "What do you need today? What would you like to do for yourself?"</p>
            </div>
          </div>
        </div>

      </div>
    `
    }
  }
];
