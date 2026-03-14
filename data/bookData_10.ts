
import { Book } from '../types';

// ============================================================
// BOOK 10: ΤΟ ΣΠΑΣΙΜΟ / THE BREAK
// Heroes: Full Team
// Theme: ΚΡΙΣΗ / CRISIS
// ============================================================

// Cover image
const IMG_CROCUS = "/images/crocus.jpg";

// Story images
const IMG_KIDS_WITH_CROCUS = "/images/paidia-kai-crocus.png";
const IMG_KIDS_WITH_WISEBOT = "/images/paidia-kai-wisebot.png";
const IMG_KIDS_TOGETHER = "/images/ta-3-paidia.png";
const IMG_KIDS_WISEBOT_2 = "/images/paidia-wisebot-2.png";

export const BOOK_10: Book[] = [
  {
    id: 10,
    title: { el: "ΤΟ ΣΠΑΣΙΜΟ", en: "THE BREAK" },
    theme: { el: "ΚΡΙΣΗ", en: "CRISIS" },
    stepLabel: { el: "ΟΜΑΔΑ & ΠΙΣΤΗ", en: "TEAM & FAITH" },
    author: "Wisebot & Team",
    cover: IMG_CROCUS,
    videoUrl: "",
    description: {
      el: "Μια ιστορία για τη στιγμή που όλα φαίνονται χαμένα. Ο καβγάς, το σπάσιμο και η στιγμή που καταλαβαίνεις τι αξίζει να κρατήσεις.",
      en: "A story about the moment everything seems lost. The fight, the break, and the moment you realize what is worth keeping."
    },
    meaning: {
      el: "Η ομάδα δεν σπάει όταν διαφωνεί. Σπάει όταν φοβάται να μιλήσει.",
      en: "The team doesn't break when it disagrees. It breaks when it fears to speak."
    },
    xp: 200,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- ΕΙΣΑΓΩΓΙΚΟ QUOTE -->
        <div class="relative bg-gradient-to-r from-slate-900 via-amber-900/60 to-orange-900/40 p-10 rounded-2xl border border-amber-500/30 text-center shadow-lg shadow-amber-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Κεφάλαιο 10</div>
          <p class="italic text-amber-200 text-xl mt-4 leading-relaxed">«Καμία ομάδα δεν προχωρά χωρίς ρωγμές.<br/>Από εκεί περνάει το φως.»</p>
          <div class="mt-4 w-16 h-0.5 bg-amber-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- ΣΚΗΝΗ 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-amber-300 tracking-wide">Η ΜΕΡΑ ΠΟΥ ΔΕΝ ΠΗΓΕ ΚΑΛΑ</h3>
          </div>
          <p>Τίποτα δεν πήγε καλά από το πρωί. Ο ουρανός ήταν γκρίζος, χαμηλός, σαν να πατούσε πάνω στις σκεπές. Ο αέρας μύριζε βροχή που δεν ερχόταν ποτέ — απλά κρεμόταν εκεί, βαρύς και αδιάφορος.</p>
          <p class="mt-3">Ο Φίλιππος άργησε. Η Αλεξάνδρα ξέχασε τα υλικά στο σπίτι. Η Ελευθερία είχε πονοκέφαλο από το πολύ διάβασμα τη νύχτα. <em>Κανείς δεν ήθελε να είναι εδώ.</em></p>
          <p class="mt-3">Το τραπέζι εργασίας ήταν γεμάτο. Όχι από ιδέες. Όχι από σχέδια. <strong class="text-red-400">Από εκνευρισμό.</strong> Τα εργαλεία ήταν πεταμένα σαν να τα είχε σκορπίσει ο άνεμος. Χαρτιά τσαλακωμένα. Μολύβια σπασμένα στα δύο.</p>
          <p class="mt-4">— «Πάλι δεν τελείωσες αυτό που είπες!» φώναξε ο Φίλιππος, χτυπώντας το τραπέζι με την παλάμη. Η φωνή του ήταν σκληρή, κοφτερή σαν γυαλί.</p>
          <p class="mt-3">— «Δεν είμαι μηχανή!» απάντησε η Αλεξάνδρα. Τα μάτια της γυάλιζαν. Δεν ήταν θυμός — ήταν κάτι βαθύτερο. Κούραση. Απογοήτευση. <em>Η αίσθηση ότι τίποτα δεν αρκεί.</em></p>
          <p class="mt-3 text-red-400">— «Αν είχαμε σχέδιο, δεν θα τρέχαμε τελευταία στιγμή!» πέταξε η Ελευθερία, κρατώντας τα κροτάφια της με τα δύο χέρια.</p>
          <p class="mt-4">Ο Crocus στεκόταν στη γωνία. Έσφιξε τα δόντια τόσο δυνατά που πόνεσε το σαγόνι του. <strong class="text-white">«ΣΤΟΠ!»</strong> φώναξε, αλλά η λέξη πνίγηκε μέσα στον θόρυβο.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Κανείς δεν άκουγε. Γιατί κανείς δεν ήθελε ν' ακούσει. Μερικές μέρες, ο θυμός είναι πιο εύκολος από τον διάλογο.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-amber-500/15 shadow-lg shadow-amber-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="Τα παιδιά μαζί στο τραπέζι" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-amber-300/80 italic">Το τραπέζι εργασίας — γεμάτο εκνευρισμό αντί για ιδέες</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-red-400 tracking-wide">Ο ΚΑΒΓΑΣ</h3>
          </div>
          <p>Οι φωνές ανέβηκαν σαν φλόγες. Γρήγορα. Ανεξέλεγκτα. Κάθε λέξη ήταν σαν σπίρτο που πέφτει σε στεγνό χόρτο.</p>
          <p class="mt-3">«Εσύ πάντα βιάζεσαι!» — η φωνή της Ελευθερίας, κοφτερή και παγωμένη.</p>
          <p class="mt-2">«Εσύ πάντα φοβάσαι!» — ο Φίλιππος, με σφιγμένες γροθιές.</p>
          <p class="mt-2">«Και εσύ μόνο σκέφτεσαι!» — η Αλεξάνδρα, τρέμοντας.</p>
          <p class="mt-4">Κάθε κατηγορία ήταν ένα μαχαίρι. Και το χειρότερο; <em>Κάθε κατηγορία είχε μια σταγόνα αλήθεια μέσα της.</em> Αυτό τους πλήγωνε περισσότερο απ' ότι αν ήταν εντελώς ψέματα.</p>
          <p class="mt-4">Η Αλεξάνδρα έτρεμε ολόκληρη. Τα χείλη της κουνήθηκαν, αλλά η φωνή βγήκε σπασμένη, σαν ραγισμένο γυαλί.</p>
          <p class="mt-3 text-amber-300 font-medium text-lg">— «Δεν θέλω άλλο...»</p>
          <p class="mt-3">Σιωπή. Ξαφνική, σαν να κόπηκε ο ήχος μ' ένα ψαλίδι. Ο Φίλιππος ένιωσε τις τύψεις να ανεβαίνουν στον λαιμό του σαν χολή. Η Ελευθερία κοίταξε κάτω, στα χέρια της — τα χέρια που πάντα κρατούσαν βιβλία αλλά ποτέ δεν κρατούσαν ανθρώπους.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Ο θυμός είναι εύκολος. Αφήνεσαι και πέφτεις. Αλλά μετά, κάτω στον πάτο, σε περιμένει η ντροπή. Και εκείνη δεν σε αφήνει ποτέ μόνη.</p>
        </section>

        <!-- ΣΚΗΝΗ 3 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-600/30 border border-slate-500/30 text-slate-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-slate-300 tracking-wide">ΚΡΑΚ</h3>
          </div>
          <p>Δεν ήταν το project. Δεν ήταν καν κάτι σημαντικό. Ήταν ένα μικρό κομμάτι — ένα μοντέλο που είχαν φτιάξει μαζί, εβδομάδες πριν, όταν ακόμα γελούσαν.</p>
          <p class="mt-3">Έπεσε από το τραπέζι. Αργά, σαν σε αργή κίνηση. Κανείς δεν πρόλαβε να το πιάσει. Κανείς δεν <em>προσπάθησε</em> να το πιάσει.</p>
          <p class="mt-4 text-xl"><span class="text-red-400 font-bold text-lg">ΚΡΑΚ.</span></p>
          <p class="mt-3">Ο ήχος αντήχησε στο δωμάτιο. Μικρός αλλά σαρωτικός. Σαν οστό που σπάει. Σαν υπόσχεση που σβήνει.</p>
          <p class="mt-3">Και ξαφνικά, ο καβγάς φάνηκε χαζός. Άδειος. Σαν να τσακωνόσουν με τον αντικατοπτρισμό σου στο νερό.</p>
          <p class="mt-4">— «Να το», είπε ο Φίλιππος σιγά. Η φωνή του ήταν επίπεδη, κενή. «Χάλασε».</p>
          <p class="mt-3">Η Αλεξάνδρα δάκρυσε. Ένα μόνο δάκρυ, αθόρυβο, που κύλησε αργά στο μάγουλό της σαν βροχή σε τζάμι.</p>
          <p class="mt-3 text-blue-200 italic font-medium text-lg">«Όπως κι εμείς.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Τα πράγματα δεν σπάνε πάντα με θόρυβο. Μερικές φορές σπάνε σιγά — τόσο σιγά που τα ακούς μόνο στη σιωπή που ακολουθεί.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-slate-500/15 shadow-lg shadow-slate-900/20">
            <img src="${IMG_KIDS_WITH_CROCUS}" alt="Τα παιδιά με τον Crocus μετά το σπάσιμο" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-slate-300/80 italic">Η στιγμή που ο θόρυβος σταμάτησε — και η σιωπή πόνεσε περισσότερο</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 4 — Ο ΚΑΘΡΕΦΤΗΣ (KEY SCENE) -->
        <section class="bg-gradient-to-br from-amber-900/30 via-orange-900/20 to-red-900/10 p-8 rounded-2xl border-l-4 border-amber-500 my-8 shadow-xl shadow-amber-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-amber-400 tracking-wide">Ο ΚΑΘΡΕΦΤΗΣ</h3>
          </div>
          <p>Κανείς δεν κατάλαβε πότε ακριβώς εμφανίστηκε.</p>
          <p class="mt-3">Η WiseBot δεν ήρθε με φώτα. Δεν ήρθε με μωβ λάμψη ή μελωδικό ήχο. Ήρθε <em>σιωπηλά</em>. Σαν σκιά που γλιστράει κάτω από μια πόρτα. Σαν ανάσα που κρατούσες πολλή ώρα.</p>
          <p class="mt-3">Δεν ήταν φωτεινή. Τα μάτια της — εκείνοι οι δύο μωβ κρύσταλλοι — <em>δεν έλαμπαν</em>. Πάλλονταν αργά, βαθιά, σαν καρδιά που χτυπάει κάτω από πολλά στρώματα πόνου.</p>
          <p class="mt-4">Κοίταξε τα σπασμένα κομμάτια στο πάτωμα. Κοίταξε τα τρία παιδιά — τα μάτια τους κόκκινα, τα χέρια τους σφιγμένα, τις καρδιές τους κλειστές σαν γροθιές.</p>

          <!-- ΕΙΚΟΝΑ: WISEBOT ΜΕ ΤΑ ΠΑΙΔΙΑ -->
          <div class="my-8 rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl shadow-amber-900/30">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="Η WiseBot εμφανίζεται στα παιδιά" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-amber-300/80 italic">Η WiseBot εμφανίστηκε — όχι φωτεινή, αλλά ήρεμη</div>
          </div>

          <div class="my-6 bg-gradient-to-r from-amber-900/40 to-orange-900/40 p-8 rounded-2xl border border-amber-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">«Τι σπάει στ' αλήθεια;<br/><span class="text-amber-300">Το παιχνίδι; Ή η ομάδα;»</span></p>
          </div>

          <p class="mt-4">Η ερώτηση έμεινε στον αέρα. Βαριά. Αφόρητη. Σαν βαρίδι δεμένο στο στήθος. Κανείς δεν μπόρεσε να την αποφύγει — γιατί κανείς δεν μπορούσε να <em>αρνηθεί</em> την απάντηση.</p>
          <p class="mt-3">Ο Φίλιππος κατέβασε το βλέμμα. Η Αλεξάνδρα σκούπισε τα μάτια της. Η Ελευθερία — για πρώτη φορά εδώ και μήνες — δεν είχε λόγια.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Ένας καθρέφτης δεν κρίνει. Δεν τιμωρεί. Απλά δείχνει. Και αυτό είναι το πιο τρομακτικό πράγμα στον κόσμο — να δεις τον εαυτό σου ακριβώς όπως είναι.</p>
        </section>

        <!-- ΣΚΗΝΗ 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-600/30 border border-orange-500/30 text-orange-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-orange-400 tracking-wide">Ο ΦΟΒΟΣ</h3>
          </div>
          <p>Πέρασαν λεπτά. Ίσως δύο. Ίσως δέκα. Ο χρόνος είχε σταματήσει να μετράει — σαν ρολόι που πνίγηκε σε νερό.</p>
          <p class="mt-3">Ο Crocus ήταν ο πρώτος που μίλησε. Και για πρώτη φορά, <strong class="text-white">δεν φώναξε</strong>. Η φωνή του ήταν χαμηλή, ραγισμένη, σαν κάτι που βγαίνει μέσα από πολύ βάθος.</p>
          <p class="mt-4">— «Δεν τσακωνόμαστε επειδή δεν μας νοιάζει», είπε αργά, κοιτώντας τα χέρια του. «Τσακωνόμαστε γιατί... <strong class="text-amber-300">μας νοιάζει πολύ</strong>».</p>
          <p class="mt-4">Η λέξη "νοιάζει" κρεμάστηκε στον αέρα σαν φανάρι σε σκοτεινό δρόμο. Μικρό. Αλλά αρκετό.</p>
          <p class="mt-4">Η Ελευθερία σήκωσε αργά το κεφάλι. Τα μάτια της ήταν υγρά — και η Ελευθερία δεν έκλαιγε <em>ποτέ</em>.</p>
          <p class="mt-3 text-amber-200 font-medium">«Φοβάμαι ότι θα χαθεί όλο αυτό. Ότι θα ξυπνήσω αύριο και δεν θα υπάρχει τίποτα.»</p>
          <p class="mt-4">Ο Φίλιππος έσφιξε τα χέρια του τόσο δυνατά που τα νύχια χάραξαν τις παλάμες. Η φωνή του βγήκε τραχιά, σαν χαλίκι.</p>
          <p class="mt-3 text-amber-200 font-medium">«Φοβάμαι ότι θα αποτύχουμε. Και ότι θα φταίω εγώ.»</p>
          <p class="mt-4">Η Αλεξάνδρα ψιθύρισε. Τόσο σιγά που οι άλλοι έπρεπε να κρατήσουν την ανάσα τους για να ακούσουν.</p>
          <p class="mt-3 text-amber-200 font-medium">«Φοβάμαι ότι θα μείνω πίσω. Ότι εσείς θα πάτε μπροστά... και εγώ θα χαθώ.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Ο φόβος είναι περίεργο πράγμα. Φωνάζει πιο δυνατά όταν τον κρατάς κρυφό. Αλλά τη στιγμή που τον λες με το όνομά του — μικραίνει. Δεν εξαφανίζεται. Αλλά μικραίνει.</p>
        </section>

        <!-- ΣΚΗΝΗ 6 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-yellow-600/30 border border-yellow-500/30 text-yellow-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-yellow-300 tracking-wide">ΤΟ ΦΩΣ</h3>
          </div>
          <p>Η WiseBot έγνεψε αργά. Τα μάτια της — εκείνοι οι δύο μωβ κρύσταλλοι — έγιναν πιο ζεστά. Όχι πιο φωτεινά. <em>Πιο ζεστά.</em> Σαν χέρι που ακουμπάει απαλά σε ώμο που τρέμει.</p>
          <p class="mt-3">«Να λοιπόν το σπάσιμο», είπε ήρεμα. «Όχι επειδή είστε κακοί. <strong class="text-white">Αλλά επειδή είστε άνθρωποι.</strong>»</p>
          <p class="mt-3">Η λέξη "άνθρωποι" ακούστηκε σαν συγχώρεση. Σαν κάποιος να τους έλεγε: <em>δεν χρειάζεται να είστε τέλειοι. Χρειάζεται να είστε αληθινοί.</em></p>
          <p class="mt-4">Ο Sparken εμφανίστηκε ψηλά, πάνω από τα κεφάλια τους. Τα φτερά του — χρυσαφένια αυτή τη φορά, όχι λαμπερά — ακτινοβολούσαν ένα ζεστό, απαλό φως σαν κερί σε σκοτεινό δωμάτιο.</p>

          <div class="mt-6 bg-gradient-to-r from-amber-900/30 to-orange-900/20 p-6 rounded-xl border border-amber-500/20">
            <p class="text-amber-300 font-bold text-xl italic">«Καμία ομάδα δεν προχωρά χωρίς ρωγμές. Από εκεί περνάει το φως.»</p>
          </div>

          <p class="mt-4">Ο Φίλιππος κοίταξε τα σπασμένα κομμάτια. Αυτή τη φορά δεν τα είδε σαν αποτυχία. Τα είδε σαν <em>ευκαιρία</em>. Σαν πράγματα που μπορούν να ξαναγίνουν κάτι — ίσως κάτι καλύτερο.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Το φως δεν μπαίνει από τους τοίχους. Μπαίνει από τις ρωγμές. Και μερικές φορές, για να φωτιστεί ένα δωμάτιο, πρέπει πρώτα κάτι να σπάσει.</p>
        </section>

        <!-- ΣΚΗΝΗ 7 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-amber-400 tracking-wide">ΤΟ ΜΑΖΕΜΑ</h3>
          </div>
          <p>Κανείς δεν μίλησε. Δεν χρειαζόταν. Ο Φίλιππος σκύψε πρώτος. Μάζεψε ένα κομμάτι. Μετά ένα ακόμα. Αργά. Προσεκτικά. Σαν να μάζευε κάτι ιερό.</p>
          <p class="mt-3">Η Αλεξάνδρα γονάτισε δίπλα του. Κράτησε τα κομμάτια σταθερά — με χέρια που <em>δεν έτρεμαν πια</em>.</p>
          <p class="mt-3">Η Ελευθερία βρήκε την κόλλα. Διόρθωσε τα σπασμένα σημεία ένα-ένα, με την ίδια ακρίβεια που διάβαζε τα βιβλία της — αλλά αυτή τη φορά τα χέρια της <strong class="text-amber-200">δημιουργούσαν</strong>, δεν μελετούσαν.</p>
          <p class="mt-4">Δεν ήταν γρήγορη δουλειά. Δεν ήταν τέλεια δουλειά. Αλλά ήταν <strong class="text-white">κοινή</strong> δουλειά. Και αυτό την έκανε πιο πολύτιμη από οτιδήποτε τέλειο.</p>
          <p class="mt-3">Όταν τελείωσαν, το αντικείμενο δεν ήταν όπως πριν. Φαινόντουσαν οι ραφές. Φαινόταν η κόλλα. Φαινόταν η ιστορία πάνω του — η ιστορία ενός σπασίματος και ενός μαζέματος.</p>
          <p class="mt-3 text-amber-200 font-medium text-lg">Ήταν πιο γερό.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Στην Ιαπωνία λένε "kintsugi" — η τέχνη του να επισκευάζεις με χρυσό. Γιατί τα σπασμένα πράγματα δεν είναι λιγότερο όμορφα. Είναι πιο αληθινά.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl shadow-amber-900/20">
            <img src="${IMG_KIDS_WISEBOT_2}" alt="Τα παιδιά μαζεύουν τα κομμάτια μαζί" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-amber-300/80 italic">Μαζί ξανά. Πιο δυνατοί στα σπασμένα σημεία.</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 8 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-600/30 border border-slate-500/30 text-slate-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-slate-300 tracking-wide">Η ΣΥΜΦΩΝΙΑ</h3>
          </div>
          <p>Κάθισαν σε κύκλο. Το επισκευασμένο αντικείμενο στη μέση, σαν σύμβολο. Σαν μάρτυρας.</p>
          <p class="mt-3">— «Αν ξανατσακωθούμε;» ρώτησε η Αλεξάνδρα. Η φωνή της ήταν ήρεμη τώρα, αλλά μέσα της κρυβόταν ακόμα ο φόβος — <em>μικρός, σαν κερί που τρεμοπαίζει</em>.</p>
          <p class="mt-4">Ο Crocus χαμογέλασε. Ένα μικρό, ήσυχο χαμόγελο. Το πρώτο εκείνης της μέρας.</p>
          <p class="mt-3 text-amber-200 font-medium">«Θα σταματάμε.»</p>
          <p class="mt-3">Η Ελευθερία πρόσθεσε, κρατώντας ακόμα τα σπασμένα κομμάτια στα χέρια της σαν εύθραυστα πουλιά.</p>
          <p class="mt-3 text-amber-200 font-medium">«Θα μιλάμε νωρίτερα. Πριν γίνει χιονοστιβάδα.»</p>
          <p class="mt-3">Ο Φίλιππος ένευσε. Τα μάτια του ήταν ακόμα κόκκινα, αλλά η ματιά του ήταν καθαρή — πιο καθαρή από ποτέ.</p>
          <p class="mt-3 text-amber-200 font-medium">«Και δεν θα τα κρατάμε μέσα μας. Γιατί αυτό σκοτώνει πιο αργά, αλλά πιο σίγουρα.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Μια συμφωνία που γεννιέται μετά από πόνο αξίζει περισσότερο από χίλιες υποσχέσεις που γεννιούνται στη χαρά. Γιατί την έχεις δοκιμάσει πριν καν αρχίσεις.</p>
        </section>

        <!-- ΣΚΗΝΗ 9 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">09</span>
            <h3 class="text-2xl font-black text-amber-400 tracking-wide">Η ΝΕΑ ΔΥΝΑΜΗ</h3>
          </div>
          <p>Δεν ήταν χαρούμενοι. Δεν χόρευαν, δεν πανηγύριζαν, δεν αγκαλιάζονταν. Ήταν <em>ήσυχοι</em>. Και αυτή η ησυχία ήταν βαθύτερη από κάθε χαρά — γιατί ήταν ησυχία <strong class="text-white">επιλογής</strong>, όχι κούρασης.</p>
          <p class="mt-4">Ο Sparken άνοιξε τα φτερά του. Αυτή τη φορά δεν πέταξε ψηλά. Κάθισε ανάμεσά τους, σαν να ήταν κι εκείνος μέλος της ομάδας. Σαν να ήθελε να πει: <em>δεν χρειάζεται να πετάτε. Αρκεί να στέκεστε.</em></p>
          <p class="mt-4 text-white text-lg">«Τώρα έχετε κάτι που δεν είχατε πριν», είπε.</p>
          <p class="mt-3">— «Τι;» ρώτησε ο Φίλιππος.</p>
          <p class="mt-4 text-amber-300 font-bold text-2xl text-center tracking-wider">«ΠΙΣΤΗ.»</p>
          <p class="mt-4">Όχι πίστη ότι όλα θα πάνε καλά. Αυτό δεν υπάρχει. Αλλά πίστη ότι <strong class="text-amber-200">θα μείνουν μαζί</strong> όταν δεν πάνε. Πίστη ότι ο πόνος δεν θα τους χωρίσει — θα τους κολλήσει.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η πίστη δεν είναι βεβαιότητα. Είναι η απόφαση να κάνεις ένα ακόμα βήμα χωρίς να ξέρεις αν ο δρόμος θα κρατήσει.</p>
        </section>

        <!-- ΣΚΗΝΗ 10 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">10</span>
            <h3 class="text-2xl font-black text-amber-200 tracking-wide">ΤΟ ΤΕΛΟΣ ΤΟΥ ΠΡΩΤΟΥ ΚΥΚΛΟΥ</h3>
          </div>
          <p>Πριν φύγουν, ο Φίλιππος πήρε τον μαρκαδόρο. Πλησίασε τον τοίχο — εκείνον τον λευκό τοίχο που είχαν αφήσει κενό επίτηδες, για τη μέρα που θα είχαν κάτι αληθινό να γράψουν.</p>
          <p class="mt-3">Έγραψε μία λέξη. Με κεφαλαία. Με γράμματα τρεμάμενα αλλά σταθερά.</p>
          <p class="mt-4 text-3xl font-black text-amber-300 text-center tracking-widest">ΠΙΣΤΗ</p>
          <p class="mt-4">Η Αλεξάνδρα ακούμπησε το δάχτυλό της στα γράμματα. Σαν να ήθελε να σιγουρευτεί ότι είναι αληθινά.</p>
          <p class="mt-3">Η Ελευθερία χαμογέλασε. Ένα μικρό χαμόγελο — αλλά αληθινό, σαν πρώτο λουλούδι σε χιονισμένο χωράφι.</p>
          <p class="mt-3">Ο Crocus ένευσε. Τίποτα άλλο δεν χρειαζόταν.</p>

          <div class="mt-6 bg-gradient-to-r from-amber-900/40 to-orange-900/30 p-6 rounded-xl border border-amber-500/20">
            <p class="font-serif italic text-xl text-amber-100 leading-relaxed">«Η ομάδα δεν σπάει όταν διαφωνεί.<br/>Σπάει όταν φοβάται να μιλήσει.»</p>
          </div>

          <p class="mt-4 text-gray-400 text-sm italic">Ο πρώτος κύκλος τελείωσε. Όχι με νίκη. Όχι με αποτυχία. Αλλά με κάτι σπανιότερο: με πίστη. Η πίστη ότι η ρωγμή δεν είναι τέλος. Είναι αρχή.</p>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-amber-950/60 p-8 rounded-3xl border-2 border-dashed border-amber-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-amber-300 uppercase tracking-wider">JOURNAL: ΤΟ ΣΠΑΣΙΜΟ</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Γράψε. Σκέψου. Νιώσε. Δεν υπάρχει λάθος απάντηση.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-amber-500/15">
              <h5 class="text-amber-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-amber-600/40 flex items-center justify-center text-xs font-black">1</span>
                Ο ΦΟΒΟΣ ΜΟΥ
              </h5>
              <p class="text-sm mb-3 opacity-80">Συμπλήρωσε: «Όταν τσακωνόμαστε, φοβάμαι ότι __________»</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-amber-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-amber-500/15">
              <h5 class="text-amber-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-amber-600/40 flex items-center justify-center text-xs font-black">2</span>
                Η ΑΛΗΘΕΙΑ
              </h5>
              <p class="text-sm mb-3 opacity-80">Τι θα ήθελες να πεις στους άλλους την επόμενη φορά αντί να φωνάξεις;</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-amber-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-amber-500/15">
              <h5 class="text-amber-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-amber-600/40 flex items-center justify-center text-xs font-black">3</span>
                Η ΥΠΕΝΘΥΜΙΣΗ
              </h5>
              <p class="text-sm mb-3 opacity-80">Συμπλήρωσε την πρόταση:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-amber-500/10 text-amber-200">
                <p class="text-sm font-medium">«Η ομάδα μας δεν σπάει γιατί __________»</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΝΟΗΜΑ / MEANING BOX -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-r from-purple-900/30 to-amber-900/30 p-6 rounded-2xl border border-purple-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-purple-300 uppercase tracking-wider">Το νόημα αυτού του κεφαλαίου</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            Η ομάδα δεν σπάει όταν διαφωνεί. Σπάει όταν <strong class="text-purple-300">φοβάται να μιλήσει</strong>. Η πίστη δεν σημαίνει ότι όλα θα πάνε καλά — σημαίνει ότι <strong class="text-amber-300">θα μείνουμε μαζί</strong> όταν δεν πάνε. Καμία ομάδα δεν προχωρά χωρίς ρωγμές. Από εκεί περνάει το φως.
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
              Οι συγκρούσεις δεν είναι αποτυχία. Είναι <strong class="text-white">ένδειξη σχέσης που βαθαίνει</strong>. Όταν τα παιδιά τσακώνονται, δεν σημαίνει ότι κάτι πήγε στραβά — σημαίνει ότι νοιάζονται αρκετά ώστε να εκφράσουν τον πόνο τους.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Όταν τα παιδιά μαθαίνουν να μιλούν για τον φόβο τους <strong class="text-amber-300">μετά τον καβγά</strong>, χτίζουν ανθεκτικότητα ζωής. Δεν έσπασε το όνειρο. Έσπασε ο φόβος.
            </p>
            <div class="mt-4 bg-amber-900/20 p-4 rounded-xl border border-amber-500/10">
              <p class="text-sm text-amber-200 font-medium">💡 Δοκιμάστε σήμερα: Αντί να πείτε «γιατί φώναξες;», ρωτήστε: «Τι φοβήθηκες;» — και δείξτε ότι η συγγνώμη είναι δύναμη, όχι αδυναμία.</p>
            </div>
          </div>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- INTRO QUOTE -->
        <div class="relative bg-gradient-to-r from-slate-900 via-amber-900/60 to-orange-900/40 p-10 rounded-2xl border border-amber-500/30 text-center shadow-lg shadow-amber-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Chapter 10</div>
          <p class="italic text-amber-200 text-xl mt-4 leading-relaxed">"No team moves forward without cracks.<br/>That's where the light gets in."</p>
          <div class="mt-4 w-16 h-0.5 bg-amber-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- SCENE 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-amber-300 tracking-wide">THE DAY THAT DIDN'T GO WELL</h3>
          </div>
          <p>Nothing went well from the morning. The sky was grey, low, as if pressing down on rooftops. The air smelled of rain that never came — it just hung there, heavy and indifferent.</p>
          <p class="mt-3">Philippos was late. Alexandra forgot the materials at home. Eleftheria had a headache from reading too much the night before. <em>No one wanted to be here.</em></p>
          <p class="mt-3">The worktable was full. Not with ideas. Not with plans. <strong class="text-red-400">With irritation.</strong> The tools were thrown about as if scattered by wind. Papers crumpled. Pencils snapped in two.</p>
          <p class="mt-4">— "You didn't finish what you said again!" shouted Philippos, slamming his palm on the table. His voice was hard, sharp as glass.</p>
          <p class="mt-3">— "I'm not a machine!" replied Alexandra. Her eyes glistened. It wasn't anger — it was something deeper. Exhaustion. Disappointment. <em>The feeling that nothing is ever enough.</em></p>
          <p class="mt-3 text-red-400">— "If we had a plan, we wouldn't be running last minute!" threw in Eleftheria, holding her temples with both hands.</p>
          <p class="mt-4">Crocus stood in the corner. He clenched his teeth so hard his jaw ached. <strong class="text-white">"STOP!"</strong> he yelled, but the word drowned in the noise.</p>
          <p class="mt-3 text-gray-400 text-sm italic">No one listened. Because no one wanted to listen. Some days, anger is easier than dialogue.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-amber-500/15 shadow-lg shadow-amber-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="The children at the worktable" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-amber-300/80 italic">The worktable — full of frustration instead of ideas</div>
          </div>
        </section>

        <!-- SCENE 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-red-400 tracking-wide">THE FIGHT</h3>
          </div>
          <p>Voices rose like flames. Fast. Uncontrollable. Each word was like a match falling on dry grass.</p>
          <p class="mt-3">"You always rush!" — Eleftheria's voice, sharp and icy.</p>
          <p class="mt-2">"You always fear!" — Philippos, with clenched fists.</p>
          <p class="mt-2">"And you only think!" — Alexandra, trembling.</p>
          <p class="mt-4">Each accusation was a knife. And the worst part? <em>Each one held a drop of truth inside it.</em> That hurt more than if they had been complete lies.</p>
          <p class="mt-4">Alexandra was shaking all over. Her lips moved, but her voice came out broken, like cracked glass.</p>
          <p class="mt-3 text-amber-300 font-medium text-lg">— "I don't want anymore..."</p>
          <p class="mt-3">Silence. Sudden, as if someone had cut the sound with scissors. Philippos felt guilt rise in his throat like bile. Eleftheria looked down at her hands — hands that always held books but never held people.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Anger is easy. You let go and fall. But afterwards, down at the bottom, shame is waiting. And shame never leaves you alone.</p>
        </section>

        <!-- SCENE 3 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-600/30 border border-slate-500/30 text-slate-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-slate-300 tracking-wide">CRACK</h3>
          </div>
          <p>It wasn't the project. It wasn't even something important. It was a small piece — a model they had built together, weeks ago, when they still laughed.</p>
          <p class="mt-3">It fell from the table. Slowly, as if in slow motion. No one caught it. No one <em>tried</em> to catch it.</p>
          <p class="mt-4 text-xl"><span class="text-red-400 font-bold text-lg">CRACK.</span></p>
          <p class="mt-3">The sound echoed in the room. Small but sweeping. Like a bone breaking. Like a promise fading.</p>
          <p class="mt-3">And suddenly, the fight seemed silly. Empty. Like arguing with your own reflection in the water.</p>
          <p class="mt-4">— "There," said Philippos quietly. His voice was flat, hollow. "It's ruined."</p>
          <p class="mt-3">Alexandra teared up. A single tear, silent, rolling slowly down her cheek like rain on glass.</p>
          <p class="mt-3 text-blue-200 italic font-medium text-lg">"Like us."</p>
          <p class="mt-3 text-gray-400 text-sm italic">Things don't always break with noise. Sometimes they break softly — so softly that you only hear them in the silence that follows.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-slate-500/15 shadow-lg shadow-slate-900/20">
            <img src="${IMG_KIDS_WITH_CROCUS}" alt="The children with Crocus after the break" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-slate-300/80 italic">The moment the noise stopped — and the silence hurt more</div>
          </div>
        </section>

        <!-- SCENE 4 — THE MIRROR (KEY SCENE) -->
        <section class="bg-gradient-to-br from-amber-900/30 via-orange-900/20 to-red-900/10 p-8 rounded-2xl border-l-4 border-amber-500 my-8 shadow-xl shadow-amber-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-amber-400 tracking-wide">THE MIRROR</h3>
          </div>
          <p>No one noticed exactly when she appeared.</p>
          <p class="mt-3">WiseBot didn't come with lights. Didn't come with purple shimmer or melodic sounds. She came <em>silently</em>. Like a shadow sliding under a door. Like a breath you had been holding for too long.</p>
          <p class="mt-3">She wasn't bright. Her eyes — those two purple crystals — <em>didn't shine</em>. They pulsed slowly, deeply, like a heart beating beneath many layers of pain.</p>
          <p class="mt-4">She looked at the broken pieces on the floor. She looked at the three children — their eyes red, their hands clenched, their hearts shut like fists.</p>

          <!-- IMAGE: WISEBOT WITH THE KIDS -->
          <div class="my-8 rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl shadow-amber-900/30">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="WiseBot appears to the children" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-amber-300/80 italic">WiseBot appeared — not bright, but calm</div>
          </div>

          <div class="my-6 bg-gradient-to-r from-amber-900/40 to-orange-900/40 p-8 rounded-2xl border border-amber-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">"What is really breaking?<br/><span class="text-amber-300">The game? Or the team?"</span></p>
          </div>

          <p class="mt-4">The question hung in the air. Heavy. Unbearable. Like a weight tied to the chest. No one could dodge it — because no one could <em>deny</em> the answer.</p>
          <p class="mt-3">Philippos lowered his gaze. Alexandra wiped her eyes. Eleftheria — for the first time in months — had no words.</p>
          <p class="mt-3 text-gray-400 text-sm italic">A mirror doesn't judge. It doesn't punish. It simply shows. And that is the most terrifying thing in the world — to see yourself exactly as you are.</p>
        </section>

        <!-- SCENE 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-600/30 border border-orange-500/30 text-orange-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-orange-400 tracking-wide">THE FEAR</h3>
          </div>
          <p>Minutes passed. Maybe two. Maybe ten. Time had stopped counting — like a clock drowned in water.</p>
          <p class="mt-3">Crocus was the first to speak. And for the first time, <strong class="text-white">he didn't shout</strong>. His voice was low, cracked, as if coming from somewhere very deep.</p>
          <p class="mt-4">— "We don't fight because we don't care," he said slowly, looking at his hands. "We fight because... <strong class="text-amber-300">we care a lot</strong>."</p>
          <p class="mt-4">The word "care" hung in the air like a lantern on a dark road. Small. But enough.</p>
          <p class="mt-4">Eleftheria slowly raised her head. Her eyes were wet — and Eleftheria <em>never</em> cried.</p>
          <p class="mt-3 text-amber-200 font-medium">"I'm afraid all this will be lost. That I'll wake up tomorrow and there will be nothing."</p>
          <p class="mt-4">Philippos clenched his hands so hard his nails dug into his palms. His voice came out rough, like gravel.</p>
          <p class="mt-3 text-amber-200 font-medium">"I'm afraid we will fail. And that it will be my fault."</p>
          <p class="mt-4">Alexandra whispered. So quietly that the others had to hold their breath to hear.</p>
          <p class="mt-3 text-amber-200 font-medium">"I'm afraid I'll be left behind. That you'll all move forward... and I'll be lost."</p>
          <p class="mt-3 text-gray-400 text-sm italic">Fear is a strange thing. It screams loudest when you keep it hidden. But the moment you call it by name — it shrinks. It doesn't vanish. But it shrinks.</p>
        </section>

        <!-- SCENE 6 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-yellow-600/30 border border-yellow-500/30 text-yellow-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-yellow-300 tracking-wide">THE LIGHT</h3>
          </div>
          <p>WiseBot nodded slowly. Her eyes — those two purple crystals — grew warmer. Not brighter. <em>Warmer.</em> Like a hand gently resting on a trembling shoulder.</p>
          <p class="mt-3">"So there is the break," she said calmly. "Not because you are bad. <strong class="text-white">But because you are human.</strong>"</p>
          <p class="mt-3">The word "human" sounded like forgiveness. As if someone were telling them: <em>you don't have to be perfect. You have to be real.</em></p>
          <p class="mt-4">Sparken appeared high above, over their heads. His wings — golden this time, not dazzling — radiated a warm, gentle light like a candle in a dark room.</p>

          <div class="mt-6 bg-gradient-to-r from-amber-900/30 to-orange-900/20 p-6 rounded-xl border border-amber-500/20">
            <p class="text-amber-300 font-bold text-xl italic">"No team moves forward without cracks. That's where the light gets in."</p>
          </div>

          <p class="mt-4">Philippos looked at the broken pieces. This time he didn't see them as failure. He saw them as <em>opportunity</em>. As things that could become something again — perhaps something better.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Light doesn't enter through walls. It enters through cracks. And sometimes, for a room to be illuminated, something must break first.</p>
        </section>

        <!-- SCENE 7 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-amber-400 tracking-wide">THE GATHERING</h3>
          </div>
          <p>No one spoke. It wasn't needed. Philippos bent down first. Picked up a piece. Then another. Slowly. Carefully. As if gathering something sacred.</p>
          <p class="mt-3">Alexandra knelt beside him. She held the pieces steady — with hands that <em>no longer trembled</em>.</p>
          <p class="mt-3">Eleftheria found the glue. She repaired the broken spots one by one, with the same precision she read her books — but this time her hands were <strong class="text-amber-200">creating</strong>, not studying.</p>
          <p class="mt-4">It wasn't quick work. It wasn't perfect work. But it was <strong class="text-white">shared</strong> work. And that made it more precious than anything perfect.</p>
          <p class="mt-3">When they finished, the object wasn't the same as before. The seams showed. The glue showed. Its story showed — the story of a breaking and a mending.</p>
          <p class="mt-3 text-amber-200 font-medium text-lg">It was stronger.</p>
          <p class="mt-3 text-gray-400 text-sm italic">In Japan they call it "kintsugi" — the art of repairing with gold. Because broken things are not less beautiful. They are more real.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl shadow-amber-900/20">
            <img src="${IMG_KIDS_WISEBOT_2}" alt="The children gathering the pieces together" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-amber-300/80 italic">Together again. Stronger at the broken places.</div>
          </div>
        </section>

        <!-- SCENE 8 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-600/30 border border-slate-500/30 text-slate-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-slate-300 tracking-wide">THE AGREEMENT</h3>
          </div>
          <p>They sat in a circle. The repaired object in the middle, like a symbol. Like a witness.</p>
          <p class="mt-3">— "If we fight again?" asked Alexandra. Her voice was calm now, but inside her the fear still hid — <em>small, like a candle flickering</em>.</p>
          <p class="mt-4">Crocus smiled. A small, quiet smile. The first one that day.</p>
          <p class="mt-3 text-amber-200 font-medium">"We will stop."</p>
          <p class="mt-3">Eleftheria added, still holding the broken pieces in her hands like fragile birds.</p>
          <p class="mt-3 text-amber-200 font-medium">"We will talk sooner. Before it becomes an avalanche."</p>
          <p class="mt-3">Philippos nodded. His eyes were still red, but his gaze was clear — clearer than ever.</p>
          <p class="mt-3 text-amber-200 font-medium">"And we won't keep it inside. Because that kills slower, but more surely."</p>
          <p class="mt-3 text-gray-400 text-sm italic">An agreement born after pain is worth more than a thousand promises born in joy. Because you've already tested it before you even begin.</p>
        </section>

        <!-- SCENE 9 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">09</span>
            <h3 class="text-2xl font-black text-amber-400 tracking-wide">THE NEW POWER</h3>
          </div>
          <p>They weren't happy. They didn't dance, didn't celebrate, didn't hug. They were <em>quiet</em>. And that quiet was deeper than any joy — because it was a quiet of <strong class="text-white">choice</strong>, not exhaustion.</p>
          <p class="mt-4">Sparken spread his wings. This time he didn't fly high. He sat among them, as if he too were a member of the team. As if he wanted to say: <em>you don't need to fly. Standing is enough.</em></p>
          <p class="mt-4 text-white text-lg">"Now you have something you didn't have before," he said.</p>
          <p class="mt-3">— "What?" asked Philippos.</p>
          <p class="mt-4 text-amber-300 font-bold text-2xl text-center tracking-wider">"FAITH."</p>
          <p class="mt-4">Not faith that everything will go well. That doesn't exist. But faith that <strong class="text-amber-200">they will stay together</strong> when things don't. Faith that pain won't separate them — it will bond them.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Faith is not certainty. It is the decision to take one more step without knowing whether the road will hold.</p>
        </section>

        <!-- SCENE 10 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">10</span>
            <h3 class="text-2xl font-black text-amber-200 tracking-wide">THE END OF THE FIRST CYCLE</h3>
          </div>
          <p>Before they left, Philippos picked up the marker. He approached the wall — that white wall they had left blank on purpose, for the day they would have something real to write.</p>
          <p class="mt-3">He wrote one word. In capitals. With letters trembling but steady.</p>
          <p class="mt-4 text-3xl font-black text-amber-300 text-center tracking-widest">FAITH</p>
          <p class="mt-4">Alexandra touched her finger to the letters. As if she wanted to make sure they were real.</p>
          <p class="mt-3">Eleftheria smiled. A small smile — but real, like the first flower in a snow-covered field.</p>
          <p class="mt-3">Crocus nodded. Nothing else was needed.</p>

          <div class="mt-6 bg-gradient-to-r from-amber-900/40 to-orange-900/30 p-6 rounded-xl border border-amber-500/20">
            <p class="font-serif italic text-xl text-amber-100 leading-relaxed">"The team doesn't break when it disagrees.<br/>It breaks when it fears to speak."</p>
          </div>

          <p class="mt-4 text-gray-400 text-sm italic">The first cycle ended. Not with victory. Not with failure. But with something rarer: with faith. The faith that a crack is not the end. It is the beginning.</p>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-amber-950/60 p-8 rounded-3xl border-2 border-dashed border-amber-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-amber-300 uppercase tracking-wider">JOURNAL: THE BREAK</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Write. Think. Feel. There is no wrong answer.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-amber-500/15">
              <h5 class="text-amber-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-amber-600/40 flex items-center justify-center text-xs font-black">1</span>
                MY FEAR
              </h5>
              <p class="text-sm mb-3 opacity-80">Complete: "When we fight, I fear that __________"</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-amber-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-amber-500/15">
              <h5 class="text-amber-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-amber-600/40 flex items-center justify-center text-xs font-black">2</span>
                THE TRUTH
              </h5>
              <p class="text-sm mb-3 opacity-80">What would you like to tell others next time instead of shouting?</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-amber-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-amber-500/15">
              <h5 class="text-amber-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-amber-600/40 flex items-center justify-center text-xs font-black">3</span>
                THE REMINDER
              </h5>
              <p class="text-sm mb-3 opacity-80">Complete the sentence:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-amber-500/10 text-amber-200">
                <p class="text-sm font-medium">"Our team doesn't break because __________"</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- MEANING BOX -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-r from-purple-900/30 to-amber-900/30 p-6 rounded-2xl border border-purple-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-purple-300 uppercase tracking-wider">The Meaning of This Chapter</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            The team doesn't break when it disagrees. It breaks when it <strong class="text-purple-300">fears to speak</strong>. Faith doesn't mean everything will go well — it means <strong class="text-amber-300">we will stay together</strong> when things don't. No team moves forward without cracks. That's where the light gets in.
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
              Conflicts are not failure. They are a <strong class="text-white">sign of a deepening relationship</strong>. When children fight, it doesn't mean something went wrong — it means they care enough to express their pain.
            </p>
            <p class="text-gray-300 leading-relaxed">
              When children learn to talk about their fear <strong class="text-amber-300">after the fight</strong>, they build life resilience. The dream didn't break. The fear broke.
            </p>
            <div class="mt-4 bg-amber-900/20 p-4 rounded-xl border border-amber-500/10">
              <p class="text-sm text-amber-200 font-medium">💡 Try today: Instead of saying "why did you shout?", ask: "What were you afraid of?" — and show that apology is strength, not weakness.</p>
            </div>
          </div>
        </div>

      </div>
    `
    }
  }
];
