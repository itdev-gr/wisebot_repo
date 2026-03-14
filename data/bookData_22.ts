
import { Book } from '../types';

// ============================================================
// BOOK 22: TO PAICHNIDI POU DEN TELEIONE POTE / THE GAME THAT NEVER ENDED
// Hero: Sparken (the dragon)
// Theme: DESMEFSI / COMMITMENT
// ============================================================

// Cover image
const IMG_SPARKEN = "/images/sparken.jpg";

// Character solo images
const IMG_FILIPPOS = "/images/filippos.png";
const IMG_ALEXANDRA = "/images/alexandra.png";
const IMG_ELEFTHERIA = "/images/eleftheria.png";

// Story images
const IMG_KIDS_WITH_SPARKEN = "/images/paidia-kai-sparken.png";
const IMG_KIDS_WITH_WISEBOT = "/images/paidia-kai-wisebot.png";
const IMG_KIDS_TOGETHER = "/images/ta-3-paidia.png";
const IMG_KIDS_WISEBOT_2 = "/images/paidia-wisebot-2.png";
const IMG_WISEBOT = "/images/wisebot.jpg";

export const BOOK_22: Book[] = [
  {
    id: 22,
    title: { el: "ΤΟ ΠΑΙΧΝΙΔΙ ΠΟΥ ΔΕΝ ΤΕΛΕΙΩΝΕ ΠΟΤΕ", en: "THE GAME THAT NEVER ENDED" },
    theme: { el: "ΔΕΣΜΕΥΣΗ", en: "COMMITMENT" },
    stepLabel: { el: "SPARKEN & ΔΕΣΜΕΥΣΗ", en: "SPARKEN & COMMITMENT" },
    author: "Sparken",
    cover: IMG_SPARKEN,
    videoUrl: "",
    description: {
      el: "Μια ιστορία για τη διαφορά ανάμεσα στο να έχεις μια ιδέα και στο να την τελειώνεις. Το βουνό φαίνεται τεράστιο μέχρι να το σπάσεις σε βήματα.",
      en: "A story about the difference between having an idea and finishing it. The mountain looks huge until you break it into steps."
    },
    meaning: {
      el: "Ο στόχος δεν ήταν να φτιάξουν το καλύτερο παιχνίδι. Ήταν να μάθουν πώς τελειώνουν αυτό που ξεκινούν.",
      en: "The goal wasn't to make the best game. It was to learn how to finish what you start."
    },
    xp: 400,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- EISAGOGIKO QUOTE -->
        <div class="relative bg-gradient-to-r from-slate-900 via-red-900/60 to-orange-900/40 p-10 rounded-2xl border border-red-500/30 text-center shadow-lg shadow-red-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Κεφάλαιο 22</div>
          <p class="italic text-red-200 text-xl mt-4 leading-relaxed">«Όταν κάτι δεν έχει όνομα, ημερομηνία και σχήμα...<br/>παραμένει ιδέα. Και οι ιδέες χωρίς δέσμευση<br/>πεθαίνουν πριν γεννηθούν.»</p>
          <div class="mt-4 w-16 h-0.5 bg-red-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- ΣΚΗΝΗ 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-red-400 tracking-wide">ΤΟ ΔΩΜΑΤΙΟ ΤΩΝ ΙΔΕΩΝ</h3>
          </div>
          <p>Το δωμάτιο μύριζε ξύλο, χαρτί και ανυπομονησία. Ο αέρας μέσα πίεζε τους τοίχους.</p>
          <p class="mt-3">Στο πάτωμα, σκορπισμένα σαν κομμάτια ονείρου: σχέδια σε χαρτιά, μολύβια σπασμένα, μαρκαδόροι χωρίς καπάκι, κομμάτια από χαλασμένα παιχνίδια πεταμένα χωρίς τάξη.</p>
          <p class="mt-3">Ο Φίλιππος είχε ήδη ανοίξει τρία κατσαβίδια. Τα κρατούσε σαν όπλα. Τα μάτια του γυάλιζαν με εκείνη τη φωτιά που είχε πάντα στην αρχή ενός πράγματος — πριν αρχίσει να δουλεύει πραγματικά πάνω του.</p>
          <p class="mt-3">Η Αλεξάνδρα μιλούσε γρήγορα. Κάθε πρόταση ξεκινούσε με <em>«Ξέρεις τι θα ήταν τέλειο;»</em> και δεν τελείωνε ποτέ.</p>
          <p class="mt-3">Η Ελευθερία, στη γωνία, προσπαθούσε να βάλει τάξη. Σημειωματάριο, τίτλοι, αριθμημένες λίστες. Αλλά κάθε φορά που γύριζε να ρωτήσει τι να γράψει, η απάντηση ήταν ένα σήκωμα ώμων.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-red-500/15 shadow-lg shadow-red-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="Τα παιδιά στο δωμάτιο των ιδεών" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-red-300/80 italic">Τρία παιδιά, ένα δωμάτιο γεμάτο ιδέες — αλλά τίποτα συγκεκριμένο</div>
          </div>

          <p class="mt-4">«Θα φτιάξουμε το καλύτερο παιχνίδι στον κόσμο», είπε ο Φίλιππος ξαφνικά, χτυπώντας το κατσαβίδι στο τραπέζι σαν σφυρί δικαστή. Η φωνή του ήταν γεμάτη αυτοπεποίθηση — εκείνη που δεν στηρίζεται σε τίποτα αλλά λάμπει τόσο δυνατά που κανείς δεν τολμάει να τη ρωτήσει.</p>
          <p class="mt-3">«Ναι, αλλά τι ακριβώς;» ρώτησε η Ελευθερία, το στιλό ακουμπισμένο πάνω στο σημειωματάριο, έτοιμη να γράψει. Αλλά δεν υπήρχε τίποτα να γραφτεί ακόμα.</p>
          <p class="mt-3">Η Αλεξάνδρα άρχισε να εξηγεί. «Θα είναι με κάρτες, αλλά και ταμπλό, αλλά μπορεί και ψηφιακό, και...» Μετά άλλαξε ιδέα. Μετά άλλη.</p>
          <p class="mt-4 text-white font-medium">Δύο ώρες μετά, είχαν ενθουσιασμό. Είχαν φωνές. Είχαν κίνηση. Αλλά τίποτα — απολύτως τίποτα — συγκεκριμένο.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Ο ενθουσιασμός χωρίς σχέδιο μοιάζει με πυρκαγιά χωρίς εστία. Λάμπει πολύ, ζεσταίνει λίγο, και σβήνει γρήγορα. Τα τρία παιδιά δεν το ήξεραν ακόμα. Αλλά κάποιος τα παρακολουθούσε.</p>
        </section>

        <!-- ΣΚΗΝΗ 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-600/30 border border-orange-500/30 text-orange-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-orange-400 tracking-wide">Η ΕΡΩΤΗΣΗ ΤΗΣ WISEBOT</h3>
          </div>
          <p>Το βράδυ, το «καλύτερο παιχνίδι στον κόσμο» ήταν απλώς ένα σωρό από κομμάτια. Στο τραπέζι, ημιτελή σχέδια. Στο πάτωμα, γόμες και ξύσματα μολυβιού. Στον αέρα, σιωπή βαριά σαν νερό.</p>
          <p class="mt-3">Ο Φίλιππος καθόταν στην άκρη του κρεβατιού, κοιτώντας τα χέρια του — τα ίδια χέρια που πριν λίγο χτυπούσαν τραπέζια, τώρα κρέμονταν νεκρά. Η Αλεξάνδρα κοιτούσε τα φώτα του δρόμου σαν αστέρια που δεν μπορούσε να φτάσει.</p>
          <p class="mt-3">Η Ελευθερία κρατούσε το σημειωματάριο ανοιχτό στη σελίδα 1. Σχεδόν κενή. Μόνο ένας τίτλος: <em>«Ιδέες»</em>. Τίποτα κάτω από αυτόν.</p>
          <p class="mt-4">Τότε, ένα μωβ φως τρεμόσβησε στο παράθυρο. Σιγά. Απαλά. Σαν αναπνοή.</p>
          <p class="mt-3">Η WiseBot εμφανίστηκε ήσυχα. Τα μεταλλικά φτερά αντανακλούσαν το φεγγαρόφωτο. Τα μωβ μάτια σάρωσαν το δωμάτιο — μολύβια, χαρτιά, πρόσωπα — και σταμάτησαν.</p>
          <p class="mt-4">«Τι προσπαθείτε να φτιάξετε;» ρώτησε. Ούτε κρίση, ούτε συμπόνια. Απλά περιέργεια.</p>
          <p class="mt-3">«Ένα παιχνίδι που θα αλλάξει τα πάντα!» είπε η Αλεξάνδρα, και η φωνή της έσπασε ελαφρά στο τέλος, σαν να μην το πίστευε πια η ίδια.</p>

          <div class="my-6 bg-gradient-to-r from-red-900/40 to-orange-900/40 p-8 rounded-2xl border border-red-500/20 text-center">
            <p class="font-serif italic text-xl text-white leading-relaxed">«Πώς λέγεται;»</p>
            <p class="mt-2 text-gray-400">Σιωπή.</p>
            <p class="mt-3 font-serif italic text-xl text-white leading-relaxed">«Πότε θα είναι έτοιμο;»</p>
            <p class="mt-2 text-gray-400">Σιωπή.</p>
            <p class="mt-3 font-serif italic text-xl text-white leading-relaxed">«Τι θα κάνει ακριβώς;»</p>
            <p class="mt-2 text-gray-400">Ο Φίλιππος κοίταξε κάτω. Η Αλεξάνδρα δάγκωσε το χείλος της. Η Ελευθερία έκλεισε αργά το σημειωματάριο.</p>
          </div>

          <p class="mt-4">Η WiseBot πλησίασε. Τα μωβ μάτια της έγιναν πιο θερμά — σαν κεριά σε σκοτεινό δωμάτιο.</p>
          <p class="mt-3 text-red-300 font-bold text-lg">«Όταν κάτι δεν έχει όνομα, ημερομηνία και σχήμα... παραμένει ιδέα. Και οι ιδέες χωρίς σπίτι πεθαίνουν στον δρόμο.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η αλήθεια δεν πονάει πάντα. Μερικές φορές απλά ξυπνάει — σαν κρύο νερό στο πρόσωπο.</p>
        </section>

        <!-- ΣΚΗΝΗ 3 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-red-300 tracking-wide">ΤΟ ΣΧΕΔΙΟ</h3>
          </div>
          <p>Το επόμενο πρωί, κάτι είχε αλλάξει. Κάτι στον αέρα. Σαν να είχαν κοιμηθεί με την ίδια ερώτηση κάτω από το μαξιλάρι τους.</p>
          <p class="mt-3">Η Ελευθερία κάθισε στο τραπέζι πρώτη. Άνοιξε το σημειωματάριο. Πήρε ένα μαρκαδόρο — κόκκινο, τολμηρό — και έγραψε με μεγάλα γράμματα στη σελίδα:</p>

          <div class="my-6 bg-gradient-to-r from-red-900/30 to-orange-900/20 p-6 rounded-2xl border border-red-500/20">
            <p class="text-white text-lg font-bold text-center">«Μέχρι την 1η Ιουνίου θα έχουμε φτιάξει ένα επιτραπέζιο στρατηγικής για παιδιά 8-12 ετών.»</p>
          </div>

          <p class="mt-4">Ο Φίλιππος το διάβασε τρεις φορές. Και χαμογέλασε — όχι από ενθουσιασμό. Κάτι πιο βαθύ. «Αυτό μπορώ να το φτιάξω», ψιθύρισε.</p>
          <p class="mt-3">Η Αλεξάνδρα πήρε καινούριο χαρτί. Για πρώτη φορά δεν μίλησε. <em>Σχεδίασε</em>. Αργά. Ένα ταμπλό. Μονοπάτια. Θέσεις για κάρτες.</p>
          <p class="mt-3">Το χαρτί μπήκε στον τοίχο. Ξαφνικά, ο τοίχος ήταν <strong class="text-red-200">χάρτης</strong>.</p>
          <p class="mt-4 text-white font-medium">Δεν έλεγαν πια «κάποτε». Η πρώτη λέξη κάθε πρωινού: <strong class="text-orange-300">«Σήμερα τι κάνουμε;»</strong></p>
          <p class="mt-3 text-gray-400 text-sm italic">Η μαγεία μιας ημερομηνίας. Δεν αλλάζει τον κόσμο. Αλλάζει τον τρόπο που τον κοιτάς.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-red-500/15 shadow-lg shadow-red-900/20">
            <img src="${IMG_ELEFTHERIA}" alt="Η Ελευθερία γράφει το σχέδιο" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-red-300/80 italic">Η στιγμή που η ιδέα απέκτησε όνομα, ημερομηνία και σχήμα</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 4 — HIGHLIGHTED -->
        <section class="bg-gradient-to-br from-red-900/30 via-orange-900/20 to-red-900/10 p-8 rounded-2xl border-l-4 border-orange-500 my-8 shadow-xl shadow-red-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-600/30 border border-orange-500/30 text-orange-300 font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-orange-400 tracking-wide">ΤΟ ΒΟΥΝΟ ΠΟΥ ΕΣΠΑΣΕ</h3>
          </div>
          <p>Τις πρώτες μέρες, η χαρά ήταν αληθινή. Η Αλεξάνδρα σχεδίαζε κάρτες με χρώματα και σύμβολα. Ο Φίλιππος έκοβε χαρτόνια με ψαλίδι, κολλούσε, μετρούσε αποστάσεις. Η Ελευθερία έγραφε κανόνες σε πίνακα, με αρίθμηση και υποσημειώσεις.</p>
          <p class="mt-3">Αλλά πολύ γρήγορα, η πραγματικότητα χτύπησε σαν κρύος αέρας σε ανοιχτό παράθυρο.</p>
          <p class="mt-3">Η Αλεξάνδρα ήθελε να σχεδιάσει <em>ολόκληρο</em> το παιχνίδι σε μία μέρα. Πενήντα κάρτες. Δέκα χαρακτήρες. Η φαντασία της έτρεχε πιο γρήγορα από τα χέρια της. Τα σχέδια γίνονταν βιαστικά, ατημέλητα.</p>
          <p class="mt-3">Ο Φίλιππος ήθελε να χτίσει πριν τελειώσει το σχέδιο. Έκοβε χωρίς μέτρο. Κολλούσε χωρίς σχέδιο. «Θα τα φτιάξουμε μετά», έλεγε. Αλλά το «μετά» μεγάλωνε σαν σκιά στο ηλιοβασίλεμα.</p>
          <p class="mt-4">Η Ελευθερία τους σταμάτησε. Δεν φώναξε. Δεν μάλωσε. Απλά σηκώθηκε, πήρε τρία χαρτιά, και έγραψε σε κάθε ένα μια λέξη:</p>

          <div class="my-6 flex gap-4 justify-center flex-wrap">
            <div class="bg-red-900/40 px-6 py-4 rounded-xl border border-red-500/30 text-center">
              <p class="text-red-200 font-black text-lg">ΚΑΝΟΝΕΣ</p>
              <p class="text-xs text-gray-400 mt-1">Πρώτα</p>
            </div>
            <div class="bg-orange-900/40 px-6 py-4 rounded-xl border border-orange-500/30 text-center">
              <p class="text-orange-200 font-black text-lg">ΔΟΚΙΜΗ</p>
              <p class="text-xs text-gray-400 mt-1">Μετά</p>
            </div>
            <div class="bg-red-900/40 px-6 py-4 rounded-xl border border-red-500/30 text-center">
              <p class="text-red-200 font-black text-lg">ΒΕΛΤΙΩΣΗ</p>
              <p class="text-xs text-gray-400 mt-1">Τέλος</p>
            </div>
          </div>

          <p class="mt-4">Τα τρία χαρτιά μπήκαν στον τοίχο, κάτω από την ημερομηνία. Και κάτι μαγικό συνέβη: το βουνό — εκείνο το τεράστιο, αδύνατο βουνό — <strong class="text-orange-300">έσπασε</strong>. Έγινε σκάλα. Μικρά σκαλοπάτια. Συγκεκριμένα. Ένα-ένα.</p>
          <p class="mt-3">Δεν χρειαζόταν πια να φτάσουν στην κορυφή σήμερα. Χρειαζόταν μόνο να ανέβουν <em>ένα</em> σκαλοπάτι.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Κάθε μεγάλο βουνό μοιάζει αδύνατο — μέχρι να το δεις σαν εκατό μικρά βήματα. Και κανένα μικρό βήμα δεν είναι αδύνατο.</p>
        </section>

        <!-- ΣΚΗΝΗ 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-red-400 tracking-wide">Η ΔΥΣΚΟΛΙΑ</h3>
          </div>
          <p>Την τρίτη εβδομάδα, ο κόσμος γκρέμισε.</p>
          <p class="mt-3">Όχι με θόρυβο. Όχι με φωνές. Χειρότερα: με γέλιο. Ξένο γέλιο.</p>
          <p class="mt-3">Δύο παιδιά από τη γειτονιά δοκίμασαν το παιχνίδι. Κοίταξαν τις κάρτες, διάβασαν τους κανόνες, και μετά... κοιτάχτηκαν. Εκείνο το κοίταγμα που σημαίνει: <em>«Αυτό δεν δουλεύει.»</em></p>
          <p class="mt-3">Πάρα πολλά σύμβολα. Πολύ κείμενο. Βαρετοί κανόνες. Ασαφής πορεία στο ταμπλό.</p>
          <p class="mt-3">Ο Στέφανος γέλασε — όχι με κακία, χειρότερα: με <em>αδιαφορία</em>. «Μπα, δεν γίνεται αυτό», είπε και σηκώθηκε.</p>
          <p class="mt-4">Η σιωπή που ακολούθησε ήταν η πιο βαριά που είχε ακουστεί ποτέ σε εκείνο το δωμάτιο.</p>
          <p class="mt-3">Ο Φίλιππος πέταξε τα χαρτιά στο πάτωμα. <strong class="text-white">«Δεν είμαστε καλοί σε αυτό»</strong>, είπε. Η φράση έπεσε σαν βράχος σε γυάλινο τραπέζι.</p>
          <p class="mt-3">Η Αλεξάνδρα κοίταξε τα σχέδια της και τώρα τα έβλεπε αλλιώς. Σαν γράμματα σε ξένη γλώσσα.</p>
          <p class="mt-3">Η Ελευθερία δεν σήκωσε τα μάτια. Τα γράμματα θόλωναν. Δεν ήταν κούραση. Ήταν <em>ντροπή</em>.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-orange-500/15 shadow-lg shadow-orange-900/20">
            <img src="${IMG_FILIPPOS}" alt="Ο Φίλιππος απογοητευμένος" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-orange-300/80 italic">Η στιγμή που η αποτυχία χτύπησε — σκληρά και ξαφνικά</div>
          </div>

          <p class="mt-4">Εκείνο το βράδυ, η WiseBot κατέβηκε αθόρυβα. Δεν τους παρηγόρησε. Κοίταξε τα κομμάτια στο πάτωμα και είπε:</p>
          <p class="mt-3 text-orange-300 font-bold text-xl">«Το λάθος δείχνει πού να κοιτάξεις. Δεν δείχνει ποιος είσαι.»</p>
          <p class="mt-3">Ο Φίλιππος σήκωσε αργά τα μάτια. «Μα εκείνοι γέλασαν...»</p>
          <p class="mt-3">Η WiseBot κούνησε αργά το κεφάλι. «Γέλασαν με μια <em>εκδοχή</em> του παιχνιδιού. Εσείς είστε κάτι περισσότερο από μία εκδοχή.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η αποτυχία δεν είναι τέλος. Είναι δεδομένα. Στοιχεία. Πληροφορία. Σου λέει: «Αυτό δεν λειτούργησε. Δοκίμασε αλλιώς.» Αν μπορείς να ακούσεις αυτό το μήνυμα χωρίς να σπάσεις, μπορείς να φτιάξεις τα πάντα.</p>
        </section>

        <!-- ΣΚΗΝΗ 6 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-600/30 border border-orange-500/30 text-orange-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-orange-300 tracking-wide">Η ΠΡΟΟΔΟΣ</h3>
          </div>
          <p>Μετά εκείνο το βράδυ, κάτι αλλιώτικο γεννήθηκε. Δεν ήταν ενθουσιασμός — αυτός τους πρόδωσε. Δεν ήταν αυτοπεποίθηση — ήταν γκρεμισμένη. Ήταν κάτι πιο σταθερό. Κάτι σαν <strong class="text-red-200">πείσμα</strong>, αλλά με κατεύθυνση.</p>
          <p class="mt-3">Κάθε μέρα, ένα πράγμα. Μόνο ένα.</p>
          <p class="mt-3">Δευτέρα: ξαναέγραψαν τους κανόνες. Απλά. Τρίτη: ξανασχεδίασαν πέντε κάρτες. Μία εικόνα, ένα σύμβολο, τρεις λέξεις. Τετάρτη: δοκίμασαν μόνοι τους. Αυτή τη φορά έφτασαν στον πέμπτο γύρο.</p>
          <p class="mt-4">Ούτε μία μέρα χωρίς κίνηση. Αυτός ο κανόνας ήταν χαραγμένος μέσα τους.</p>
          <p class="mt-3">Όταν βαριούνταν, κοίταζαν την ημερομηνία. <em>1η Ιουνίου</em>. Όταν φοβούνταν, έκαναν το πιο δύσκολο πρώτο. Όταν μπερδεύονταν, ρωτούσαν: «Ποιο είναι το επόμενο σκαλοπάτι;»</p>
          <p class="mt-4 text-white font-medium">Σιγά σιγά, δεν άλλαζε μόνο το παιχνίδι. Άλλαζαν <em>οι ίδιοι</em>.</p>
          <p class="mt-3">Ο Φίλιππος έμαθε να περιμένει. Η Αλεξάνδρα να τελειώνει μια ιδέα πριν αρχίσει την επόμενη. Η Ελευθερία ότι τα χέρια κάνουν αυτά που ο νους σχεδιάζει.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η πρόοδος δεν είναι πάντα θεαματική. Αλλά ένα σκαλοπάτι τη μέρα χτίζει βουνά.</p>
        </section>

        <!-- ΣΚΗΝΗ 7 — Ο SPARKEN -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-red-400 tracking-wide">Ο SPARKEN</h3>
          </div>
          <p>Ένα απόγευμα — ένα από εκείνα τα απογεύματα που ο ήλιος βάφει τα πάντα πορτοκαλί — ο Sparken κατέβηκε χαμηλά.</p>
          <p class="mt-3">Ήρθε από τη σκεπή. Τα φτερά του — φλόγινα, κόκκινα με πορτοκαλί άκρες — σκέπασαν τον ήλιο. Κάθισε στο χώμα δίπλα τους.</p>
          <p class="mt-3">Τα μάτια του κόκκινα σαν κάρβουνα. Δεν μιλούσε. Εξέταζε.</p>
          <p class="mt-4">Το ταμπλό. Σιωπή. Τις κάρτες. Σιωπή. Τα κουρασμένα πρόσωπά τους. Σιωπή.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-red-500/15 shadow-lg shadow-red-900/20">
            <img src="${IMG_KIDS_WITH_SPARKEN}" alt="Τα παιδιά με τον Sparken" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-red-300/80 italic">Ο Sparken εξέτασε το έργο τους — σιωπηλός, αυστηρός, σαν δάσκαλος που ψάχνει την αλήθεια</div>
          </div>

          <p class="mt-4">«Θα μπορούσε να είναι καλύτερο», είπε. Η φωνή βαθιά, βραχνή. Τα παιδιά πάγωσαν.</p>
          <p class="mt-4">Τότε χαμογέλασε. Μόλις ορατά. Σαν ηλιοβασίλεμα μέσα από σύννεφα.</p>
          <p class="mt-3 text-red-300 font-bold text-xl">«Αλλά το τελειώσατε.»</p>
          <p class="mt-4">Σήκωσε το βλέμμα τους ψηλά. Όχι με τα χέρια — με τα λόγια. Κάθε λέξη ήταν σαν σκαλοπάτι που τους ανέβαζε.</p>

          <div class="my-6 bg-gradient-to-r from-red-900/40 to-orange-900/40 p-6 rounded-2xl border border-red-500/20">
            <p class="text-red-200 text-lg leading-relaxed font-medium">«Οι περισσότεροι ξεκινούν με ενθουσιασμό. Αυτό είναι εύκολο. Ο ενθουσιασμός δεν κοστίζει τίποτα.»</p>
            <p class="mt-3 text-red-200 text-lg leading-relaxed font-medium">«Λίγοι γράφουν τι θέλουν. Γιατί αυτό σημαίνει να δεσμευτείς. Και η δέσμευση τρομάζει.»</p>
            <p class="mt-3 text-red-200 text-lg leading-relaxed font-medium">«Ακόμα λιγότεροι μένουν όταν γίνεται δύσκολο. Όταν γελάνε μαζί σου. Όταν τα κομμάτια δεν κολλάνε. Όταν ο καθρέφτης σου δείχνει αυτά που δεν θέλεις να δεις.»</p>
            <p class="mt-4 text-white text-xl font-black">«Εσείς μείνατε.»</p>
          </div>

          <p class="mt-4">Τα μάτια του Sparken έγιναν πιο φωτεινά. Η θερμότητα δεν ήταν φωτιά — ήταν <strong class="text-red-200">αναγνώριση</strong>. Εκείνο το αίσθημα όταν κάποιος σε βλέπει πραγματικά — και σου λέει: «Αξίζεις.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η δέσμευση δεν μετριέται στα αποτελέσματα. Μετριέται στις μέρες που εμφανίστηκες. Αυτός είναι ο αριθμός που μετράει.</p>
        </section>

        <!-- ΣΚΗΝΗ 8 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-red-300 tracking-wide">Η ΠΑΡΟΥΣΙΑΣΗ</h3>
          </div>
          <p>Η 1η Ιουνίου ήρθε. Αθόρυβα, σαν γάτα σε σκοτεινό δωμάτιο.</p>
          <p class="mt-3">Το ταμπλό στη μέση του τραπεζιού — δεν ήταν τέλειο, αλλά ήταν <em>ωραίο</em>. Χρωματιστά μονοπάτια. Κάρτες κομμένες ίσια. Πιόνια από πηλό.</p>
          <p class="mt-3">Τα χέρια τους έτρεμαν. Αλλά η Αλεξάνδρα εξήγησε τους κανόνες με φωνή σταθερή. Ο Φίλιππος μοίρασε τις κάρτες. Η Ελευθερία παρατηρούσε.</p>
          <p class="mt-4">Πέντε παιδιά κάθισαν γύρω τους. Για εκείνα, αυτό ήταν απλώς ένα καινούριο παιχνίδι.</p>
          <p class="mt-3">Πρώτος γύρος: ησυχία. Δεύτερος: ερωτήσεις — «Αν ρίξω αυτή την κάρτα, τι γίνεται;» Η Αλεξάνδρα χαμογέλασε. Τρίτος: φωνές — «ΟΧΙ! Γιατί μου πήρες αυτόν τον ήρωα;» Γέλια. Όχι από βαρεμάρα. Από <em>χαρά</em>.</p>
          <p class="mt-4">Πέμπτος γύρος. Έκτος. Έβδομος. Κανείς δεν σηκωνόταν. Κανείς δεν κοιτούσε αλλού.</p>
          <p class="mt-4">Και τότε ένα αγόρι σήκωσε το κεφάλι και ρώτησε:</p>
          <p class="mt-3 text-white text-xl font-bold text-center">«Πότε βγαίνει το επόμενο;»</p>
          <p class="mt-4">Κοιτάχτηκαν. Δεν χρειάστηκε να πουν τίποτα. <em>Τα καταφέραμε.</em></p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-red-500/15 shadow-lg shadow-red-900/20">
            <img src="${IMG_KIDS_WISEBOT_2}" alt="Η στιγμή της παρουσίασης" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-red-300/80 italic">Η ολοκλήρωση — δεν ήταν τέλειο, αλλά ήταν αληθινό</div>
          </div>

          <p class="mt-4 text-red-200 font-bold text-lg">Ο στόχος δεν ήταν το τέλειο παιχνίδι. Ήταν να μάθουν πώς τελειώνουν αυτό που ξεκινούν.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η δέσμευση δεν είναι μια ηρωική στιγμή. Είναι εκατό μικρές αποφάσεις. «Θα εμφανιστώ σήμερα.» Και μια μέρα, γυρίζεις πίσω και βλέπεις — ανέβηκες ολόκληρο βουνό.</p>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-red-950/60 p-8 rounded-3xl border-2 border-dashed border-red-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-red-300 uppercase tracking-wider">JOURNAL: ΤΕΛΕΙΩΝΩ ΑΥΤΟ ΠΟΥ ΑΡΧΙΖΩ</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Γράψε. Σκέψου. Νιώσε. Δεν υπάρχει λάθος απάντηση.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-red-500/15">
              <h5 class="text-red-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-red-600/40 flex items-center justify-center text-xs font-black">1</span>
                ΤΟ ΜΙΣΟΤΕΛΕΙΩΜΕΝΟ
              </h5>
              <p class="text-sm mb-3 opacity-80">Γράψε κάτι που έχεις ξεκινήσει και το άφησες στη μέση. Κάτι που σε περιμένει. Τι είναι;</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-red-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-red-500/15">
              <h5 class="text-red-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-red-600/40 flex items-center justify-center text-xs font-black">2</span>
                ΤΟ ΕΜΠΟΔΙΟ
              </h5>
              <p class="text-sm mb-3 opacity-80">Τι σε σταμάτησε; Βαρεμάρα; Δυσκολία; Φόβος αποτυχίας; Κάτι άλλο;</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-red-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-red-500/15">
              <h5 class="text-red-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-red-600/40 flex items-center justify-center text-xs font-black">3</span>
                💎 Η ΔΕΣΜΕΥΣΗ
              </h5>
              <p class="text-sm mb-3 opacity-80">Συμπλήρωσε την πρόταση:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-red-500/10 text-red-200">
                <p class="text-sm font-medium">«Δεν θα το αφήσω έτσι. Θα κάνω το επόμενο βήμα σήμερα. Αυτό το βήμα είναι: __________»</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΝΟΗΜΑ / MEANING BOX -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-r from-red-900/30 to-orange-900/30 p-6 rounded-2xl border border-red-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-red-300 uppercase tracking-wider">Το νόημα αυτού του κεφαλαίου</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            Ο ενθουσιασμός σε βάζει στο δρόμο. Αλλά μόνο η <strong class="text-red-300">δέσμευση</strong> σε κρατάει εκεί. Το να ξεκινάς είναι εύκολο. Το να μένεις είναι <strong class="text-orange-300">ηρωικό</strong>. Τα τρία παιδιά δεν έφτιαξαν το τέλειο παιχνίδι. Έφτιαξαν κάτι πιο σημαντικό: τον εαυτό τους. Μέσα από κάθε μέρα που εμφανίστηκαν, κάθε λάθος που δέχτηκαν, κάθε σκαλοπάτι που ανέβηκαν.
          </p>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-red-950/60 p-8 rounded-3xl border border-red-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-red-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              Η ικανότητα να τελειώνεις κάτι — <strong class="text-white">completion</strong> — είναι πιο σημαντική από την ικανότητα να το αρχίζεις. Τα παιδιά μαθαίνουν δέσμευση όχι από κηρύγματα, αλλά από <em>εμπειρία</em>.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Επιβραβεύστε το <strong class="text-red-200">«τέλος»</strong>, ακόμα κι αν το αποτέλεσμα δεν είναι τέλειο. Η ολοκλήρωση χτίζει χαρακτήρα, αυτοπεποίθηση και εσωτερική δύναμη. Ρωτήστε: «Τι έμαθες καθώς το τελείωνες;» αντί για «Γιατί δεν είναι καλύτερο;»
            </p>
            <div class="mt-4 bg-red-900/20 p-4 rounded-xl border border-red-500/10">
              <p class="text-sm text-red-200 font-medium">💡 Δοκιμάστε σήμερα: Βοηθήστε το παιδί σας να σπάσει ένα μεγάλο στόχο σε μικρά, καθημερινά βήματα. Γράψτε τα σε χαρτί. Κολλήστε τα στον τοίχο. Και γιορτάστε κάθε σκαλοπάτι.</p>
            </div>
          </div>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- INTRO QUOTE -->
        <div class="relative bg-gradient-to-r from-slate-900 via-red-900/60 to-orange-900/40 p-10 rounded-2xl border border-red-500/30 text-center shadow-lg shadow-red-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Chapter 22</div>
          <p class="italic text-red-200 text-xl mt-4 leading-relaxed">"When something doesn't have a name, a date, and a shape...<br/>it remains an idea. And ideas without commitment<br/>die before they are born."</p>
          <div class="mt-4 w-16 h-0.5 bg-red-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- SCENE 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-red-400 tracking-wide">THE ROOM OF IDEAS</h3>
          </div>
          <p>The room smelled of wood, paper, and impatience. The air pressed against the walls.</p>
          <p class="mt-3">On the floor, scattered like dream fragments: drawings, snapped pencils, capless markers, pieces of broken toys tossed without order.</p>
          <p class="mt-3">Philippos had already opened three screwdrivers. He held them like weapons. His eyes gleamed with that fire he always had at the start of something — before he actually began working on it.</p>
          <p class="mt-3">Alexandra was talking fast. Every sentence started with <em>"You know what would be perfect?"</em> and never ended.</p>
          <p class="mt-3">Eleftheria, in the corner, tried to bring order. Notebook, headings, numbered lists. But every time she turned to ask what to write, the answer was a shrug.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-red-500/15 shadow-lg shadow-red-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="The children in the room of ideas" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-red-300/80 italic">Three children, a room full of ideas — but nothing specific</div>
          </div>

          <p class="mt-4">"We will make the best game in the world," said Philippos suddenly, banging his screwdriver on the table like a judge's gavel. His voice was full of confidence — the kind that rests on nothing but shines so brightly no one dares to question it.</p>
          <p class="mt-3">"Yes, but what exactly?" asked Eleftheria, her pen resting on the notebook, ready to write. But there was nothing to write yet.</p>
          <p class="mt-3">Alexandra began explaining. "Cards, but also a board, maybe digital too, and..." Then she changed her mind. Then another.</p>
          <p class="mt-4 text-white font-medium">Two hours later, they had excitement. They had voices. They had movement. But nothing — absolutely nothing — specific.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Excitement without a plan is like a fire without a hearth. It shines bright, warms a little, and burns out fast. The three children didn't know it yet. But someone was watching.</p>
        </section>

        <!-- SCENE 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-600/30 border border-orange-500/30 text-orange-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-orange-400 tracking-wide">WISEBOT'S QUESTION</h3>
          </div>
          <p>That evening, the "best game in the world" was just a pile of pieces. Half-finished sketches on the table. Erasers and pencil shavings on the floor. Silence heavy as water.</p>
          <p class="mt-3">Philippos sat on the bed's edge, staring at his hands — the same hands that hours before banged tables now hung limp. Alexandra stared at the street lamps like unreachable stars.</p>
          <p class="mt-3">Eleftheria held the notebook open to page one. Nearly blank. Just a heading: <em>"Ideas."</em> Nothing beneath it.</p>
          <p class="mt-4">Then a purple light flickered at the window. Gently. Softly. Like a breath.</p>
          <p class="mt-3">WiseBot appeared quietly. Metallic wings catching moonlight. Purple eyes scanning the room — pencils, papers, faces — and stopping.</p>
          <p class="mt-4">"What are you trying to make?" she asked. No judgment, no pity. Just curiosity.</p>
          <p class="mt-3">"A game that will change everything!" said Alexandra, and her voice cracked slightly at the end, as if she no longer believed it herself.</p>

          <div class="my-6 bg-gradient-to-r from-red-900/40 to-orange-900/40 p-8 rounded-2xl border border-red-500/20 text-center">
            <p class="font-serif italic text-xl text-white leading-relaxed">"What is it called?"</p>
            <p class="mt-2 text-gray-400">Silence.</p>
            <p class="mt-3 font-serif italic text-xl text-white leading-relaxed">"When will it be ready?"</p>
            <p class="mt-2 text-gray-400">Silence.</p>
            <p class="mt-3 font-serif italic text-xl text-white leading-relaxed">"What will it do exactly?"</p>
            <p class="mt-2 text-gray-400">Philippos looked down. Alexandra bit her lip. Eleftheria slowly closed the notebook.</p>
          </div>

          <p class="mt-4">WiseBot drew closer. Purple eyes warm like candles.</p>
          <p class="mt-3 text-red-300 font-bold text-lg">"When something doesn't have a name, a date, and a shape... it remains an idea."</p>
          <p class="mt-3 text-gray-400 text-sm italic">Truth doesn't always hurt. Sometimes it simply wakes you — like cold water on your face.</p>
        </section>

        <!-- SCENE 3 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-red-300 tracking-wide">THE PLAN</h3>
          </div>
          <p>The next morning, something had changed. Something in the air — as if all three had fallen asleep with the same question under their pillow.</p>
          <p class="mt-3">Eleftheria sat at the table first. She opened the notebook. Took a marker — red, bold — and wrote in large letters across the page:</p>

          <div class="my-6 bg-gradient-to-r from-red-900/30 to-orange-900/20 p-6 rounded-2xl border border-red-500/20">
            <p class="text-white text-lg font-bold text-center">"By June 1st we will have made a strategy board game for kids 8-12 years old."</p>
          </div>

          <p class="mt-4">Philippos read it three times. Then smiled — not from excitement. Something deeper. "I can build this," he whispered.</p>
          <p class="mt-3">Alexandra took a fresh sheet. For the first time, she didn't talk. She <em>drew</em>. A board. Pathways. Spaces for cards.</p>
          <p class="mt-3">The paper went on the wall. Suddenly, it was a <strong class="text-red-200">map</strong>.</p>
          <p class="mt-4 text-white font-medium">No more "someday." The first word every morning: <strong class="text-orange-300">"What are we doing today?"</strong></p>
          <p class="mt-3 text-gray-400 text-sm italic">The magic of a deadline. It doesn't change the world. It changes how you look at it.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-red-500/15 shadow-lg shadow-red-900/20">
            <img src="${IMG_ELEFTHERIA}" alt="Eleftheria writing the plan" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-red-300/80 italic">The moment the idea gained a name, a date, and a shape</div>
          </div>
        </section>

        <!-- SCENE 4 — HIGHLIGHTED -->
        <section class="bg-gradient-to-br from-red-900/30 via-orange-900/20 to-red-900/10 p-8 rounded-2xl border-l-4 border-orange-500 my-8 shadow-xl shadow-red-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-600/30 border border-orange-500/30 text-orange-300 font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-orange-400 tracking-wide">THE MOUNTAIN BROKEN</h3>
          </div>
          <p>The first days, the joy was real. Alexandra designed cards. Philippos cut cardboard. Eleftheria wrote rules with numbering and footnotes.</p>
          <p class="mt-3">But quickly, reality struck like cold air through an open window.</p>
          <p class="mt-3">Alexandra wanted to design the <em>entire</em> game in one day. Fifty cards. Ten characters. Four levels. Her imagination ran faster than her hands. The drawings became rushed, careless.</p>
          <p class="mt-3">Philippos wanted to build before the design was done. He cut pieces without measuring. Glued without planning. "We'll fix it later," he said. But "later" grew like a shadow at sunset — bigger every minute.</p>
          <p class="mt-4">Eleftheria stopped them. She didn't yell. She didn't scold. She simply stood up, took three sheets of paper, and wrote a single word on each:</p>

          <div class="my-6 flex gap-4 justify-center flex-wrap">
            <div class="bg-red-900/40 px-6 py-4 rounded-xl border border-red-500/30 text-center">
              <p class="text-red-200 font-black text-lg">RULES</p>
              <p class="text-xs text-gray-400 mt-1">First</p>
            </div>
            <div class="bg-orange-900/40 px-6 py-4 rounded-xl border border-orange-500/30 text-center">
              <p class="text-orange-200 font-black text-lg">TESTING</p>
              <p class="text-xs text-gray-400 mt-1">Then</p>
            </div>
            <div class="bg-red-900/40 px-6 py-4 rounded-xl border border-red-500/30 text-center">
              <p class="text-red-200 font-black text-lg">IMPROVE</p>
              <p class="text-xs text-gray-400 mt-1">Last</p>
            </div>
          </div>

          <p class="mt-4">The three sheets went on the wall, beneath the deadline. And something magical happened: the mountain — that enormous, impossible mountain — <strong class="text-orange-300">broke apart</strong>. It became a staircase. Small steps. Specific. One at a time.</p>
          <p class="mt-3">They no longer needed to reach the summit today. They just needed to climb <em>one</em> step.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Every great mountain looks impossible — until you see it as a hundred small steps. And no small step is impossible.</p>
        </section>

        <!-- SCENE 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-red-400 tracking-wide">THE DIFFICULTY</h3>
          </div>
          <p>The third week, the world crumbled.</p>
          <p class="mt-3">Not with noise. Not with shouting. Worse: with laughter. Someone else's laughter.</p>
          <p class="mt-3">Two neighborhood kids tried the game. They read the rules, then exchanged a glance — the one that means: <em>"This doesn't work."</em></p>
          <p class="mt-3">Too many symbols, too much text. Boring rules. No clear path.</p>
          <p class="mt-3">Stefanos laughed — not with malice, worse: with <em>indifference</em>. "Nah, this isn't gonna work," he said and left.</p>
          <p class="mt-4">The silence that followed was the heaviest that room had ever known.</p>
          <p class="mt-3">Philippos threw the papers on the floor. His eyes were red — not from tears, but from anger at himself. <strong class="text-white">"We aren't good at this,"</strong> he said.</p>
          <p class="mt-3">Alexandra didn't speak. She looked at her designs and now saw them differently. Like letters in a foreign language.</p>
          <p class="mt-3">Eleftheria didn't lift her eyes. The letters were blurring. She knew why. Not tiredness. <em>Shame</em>.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-orange-500/15 shadow-lg shadow-orange-900/20">
            <img src="${IMG_FILIPPOS}" alt="Philippos frustrated" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-orange-300/80 italic">The moment failure hit — hard and sudden</div>
          </div>

          <p class="mt-4">That night, WiseBot came down silently. She didn't comfort them. She looked at the broken pieces and said:</p>
          <p class="mt-3 text-orange-300 font-bold text-xl">"The mistake shows where to look. It doesn't show who you are."</p>
          <p class="mt-3">Philippos slowly raised his eyes. "But they laughed..."</p>
          <p class="mt-3">WiseBot slowly shook her head. "They laughed at one <em>version</em> of the game. You are more than one version."</p>
          <p class="mt-3 text-gray-400 text-sm italic">Failure is not an ending. It is data. Evidence. Information. It tells you: "This didn't work. Try a different way." If you can hear that message without breaking, you can build anything.</p>
        </section>

        <!-- SCENE 6 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-600/30 border border-orange-500/30 text-orange-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-orange-300 tracking-wide">THE PROGRESS</h3>
          </div>
          <p>After that night, something different was born inside them. Not excitement — that had betrayed them. Not confidence — that was demolished. Something calmer. More stable. Something like <strong class="text-red-200">stubbornness</strong>, but with direction.</p>
          <p class="mt-3">They began measuring progress. Every day, one thing. Only one.</p>
          <p class="mt-3">Monday: rewrote the rules. Simpler. Fewer words. Tuesday: redesigned five cards. One image, one symbol, three words each. Wednesday: tested it themselves. This time they made it to turn five.</p>
          <p class="mt-4">Not a single day without movement. That was the rule carved inside them.</p>
          <p class="mt-3">When bored, they looked at the date on the wall. <em>June 1st.</em> When scared, they did the hardest part first. When confused, they asked themselves: "What's the next step?"</p>
          <p class="mt-4 text-white font-medium">Slowly, something happened. Not only the game was changing. <em>They</em> were changing.</p>
          <p class="mt-3">Philippos learned to wait. Alexandra learned to finish one idea before starting the next. Eleftheria learned that hands can do what the mind designs.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Progress isn't always spectacular. But one step a day — one step a day — builds mountains.</p>
        </section>

        <!-- SCENE 7 — SPARKEN -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-red-400 tracking-wide">SPARKEN</h3>
          </div>
          <p>One afternoon — the sun painting everything orange — Sparken came down low.</p>
          <p class="mt-3">He came from the roof. Wings blazing red with orange tips, blocking the sun. He settled on the ground beside them.</p>
          <p class="mt-3">His eyes were red like embers. He didn't speak. He examined.</p>
          <p class="mt-4">The board. Silence. The cards. Silence. Their tired faces, ink-stained fingers, wrinkled clothes. Silence.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-red-500/15 shadow-lg shadow-red-900/20">
            <img src="${IMG_KIDS_WITH_SPARKEN}" alt="The children with Sparken" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-red-300/80 italic">Sparken examined their work — silent, stern, like a teacher searching for truth</div>
          </div>

          <p class="mt-4">"It could be better," he said finally. His voice deep and rough. The children froze.</p>
          <p class="mt-3">Alexandra swallowed. Philippos clenched his fists. Eleftheria gripped her pencil.</p>
          <p class="mt-4">Then Sparken smiled. Barely visible. Like a sunset through clouds.</p>
          <p class="mt-3 text-red-300 font-bold text-xl">"But you finished it."</p>
          <p class="mt-4">He raised their gaze. Not with his hands — with his words.</p>

          <div class="my-6 bg-gradient-to-r from-red-900/40 to-orange-900/40 p-6 rounded-2xl border border-red-500/20">
            <p class="text-red-200 text-lg leading-relaxed font-medium">"Most start with excitement. That's easy. Excitement costs nothing."</p>
            <p class="mt-3 text-red-200 text-lg leading-relaxed font-medium">"Few write down what they want. Because that means committing. And commitment is terrifying."</p>
            <p class="mt-3 text-red-200 text-lg leading-relaxed font-medium">"Even fewer stay when it gets hard. When they laugh at you. When the pieces don't fit. When the mirror shows you things you don't want to see."</p>
            <p class="mt-4 text-white text-xl font-black">"You stayed."</p>
          </div>

          <p class="mt-4">Sparken's eyes grew brighter. The heat wasn't fire — it was <strong class="text-red-200">recognition</strong>. That feeling when someone truly sees <em>you</em> — and tells you: "You are worthy."</p>
          <p class="mt-3 text-gray-400 text-sm italic">Commitment isn't measured in results. It's measured in days. How many times did you show up? That is the number that matters.</p>
        </section>

        <!-- SCENE 8 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-red-300 tracking-wide">THE PRESENTATION</h3>
          </div>
          <p>June 1st arrived. Silently, like a cat in a dark room.</p>
          <p class="mt-3">The board in the center of the table — not perfect, but <em>beautiful</em>. Colorful pathways. Cards cut straight. Clay pieces.</p>
          <p class="mt-3">Their hands trembled. All three. But Alexandra explained the rules with a voice steadier than she expected. Philippos dealt the cards. Eleftheria watched.</p>
          <p class="mt-4">Five neighborhood children sat around the table. For them, this was just a new game.</p>
          <p class="mt-3">First round: quiet whispers. Second round: questions. "If I play this card, what happens?" Alexandra smiled. Third round: shouts. "NO! Why did you take my hero?" Laughter. Not from boredom. From <em>joy</em>.</p>
          <p class="mt-4">Fifth round. Sixth. Seventh. No one stood up. No one looked away.</p>
          <p class="mt-4">And then a boy raised his head and asked:</p>
          <p class="mt-3 text-white text-xl font-bold text-center">"When is the next one coming out?"</p>
          <p class="mt-4">They looked at each other. No words needed. <em>We did it.</em></p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-red-500/15 shadow-lg shadow-red-900/20">
            <img src="${IMG_KIDS_WISEBOT_2}" alt="The moment of presentation" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-red-300/80 italic">Completion — not perfect, but real</div>
          </div>

          <p class="mt-4 text-red-200 font-bold text-lg">The goal was never the best game. It was to learn how to finish what you start.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Commitment is not one grand moment. It is a hundred small decisions. "I will show up today." And one day, you look back and realize you climbed an entire mountain.</p>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-red-950/60 p-8 rounded-3xl border-2 border-dashed border-red-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-red-300 uppercase tracking-wider">JOURNAL: FINISHING WHAT I START</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Write. Think. Feel. There is no wrong answer.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-red-500/15">
              <h5 class="text-red-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-red-600/40 flex items-center justify-center text-xs font-black">1</span>
                THE UNFINISHED
              </h5>
              <p class="text-sm mb-3 opacity-80">Write something you started and left halfway. Something that's waiting for you. What is it?</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-red-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-red-500/15">
              <h5 class="text-red-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-red-600/40 flex items-center justify-center text-xs font-black">2</span>
                THE OBSTACLE
              </h5>
              <p class="text-sm mb-3 opacity-80">What stopped you? Boredom? Difficulty? Fear of failure? Something else?</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-red-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-red-500/15">
              <h5 class="text-red-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-red-600/40 flex items-center justify-center text-xs font-black">3</span>
                💎 THE COMMITMENT
              </h5>
              <p class="text-sm mb-3 opacity-80">Complete the sentence:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-red-500/10 text-red-200">
                <p class="text-sm font-medium">"I won't leave it like this. I will take the next step today. That step is: __________"</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- MEANING BOX -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-r from-red-900/30 to-orange-900/30 p-6 rounded-2xl border border-red-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-red-300 uppercase tracking-wider">The Meaning of This Chapter</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            Excitement puts you on the road. But only <strong class="text-red-300">commitment</strong> keeps you there. Starting is easy. Staying is <strong class="text-orange-300">heroic</strong>. The three children didn't make the perfect game. They made something more important: themselves. Through every day they showed up, every mistake they accepted, every step they climbed.
          </p>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- MESSAGE FOR PARENTS -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-red-950/60 p-8 rounded-3xl border border-red-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-red-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              The ability to finish something — <strong class="text-white">completion</strong> — is more important than the ability to start it. Children learn commitment not from lectures, but from <em>experience</em>.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Reward the <strong class="text-red-200">"finish"</strong>, even if the result isn't perfect. Completion builds character, confidence, and inner strength. Ask: "What did you learn while finishing it?" instead of "Why isn't it better?"
            </p>
            <div class="mt-4 bg-red-900/20 p-4 rounded-xl border border-red-500/10">
              <p class="text-sm text-red-200 font-medium">💡 Try today: Help your child break a big goal into small, daily steps. Write them on paper. Stick them on the wall. And celebrate every step climbed.</p>
            </div>
          </div>
        </div>

      </div>
    `
    }
  }
];
