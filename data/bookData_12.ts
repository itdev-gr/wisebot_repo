
import { Book } from '../types';

// ============================================================
// BOOK 12: ΤΟ ΚΑΝΩ ΚΑΙ ΑΣ ΦΟΒΑΜΑΙ / I DO IT EVEN IF I'M SCARED
// Hero: Crocus
// Theme: ΘΑΡΡΟΣ / COURAGE
// ============================================================

// Cover image
const IMG_CROCUS = "/images/crocus.jpg";

// Story images
const IMG_KIDS_WITH_CROCUS = "/images/paidia-kai-crocus.png";
const IMG_KIDS_TOGETHER = "/images/ta-3-paidia.png";
const IMG_KIDS_WITH_WISEBOT = "/images/paidia-kai-wisebot.png";
const IMG_KIDS_WISEBOT_2 = "/images/paidia-wisebot-2.png";

export const BOOK_12: Book[] = [
  {
    id: 12,
    title: { el: "ΤΟ ΚΑΝΩ ΚΑΙ ΑΣ ΦΟΒΑΜΑΙ", en: "I DO IT EVEN IF I'M SCARED" },
    theme: { el: "ΘΑΡΡΟΣ", en: "COURAGE" },
    stepLabel: { el: "WISEBOT & ΤΟ ΘΑΡΡΟΣ", en: "WISEBOT & COURAGE" },
    author: "Wisebot & Crocus",
    cover: IMG_CROCUS,
    videoUrl: "",
    description: {
      el: "Ένα μήνυμα αλλάζει τα πάντα. Πρέπει να παρουσιάσουν το project τους μπροστά σε κόσμο. Ο φόβος παγώνει τα πάντα — αλλά ο Crocus τους δείχνει ότι το θάρρος δεν είναι απουσία φόβου.",
      en: "A message changes everything. They must present their project in front of people. Fear freezes everything — but Crocus shows them that courage is not the absence of fear."
    },
    meaning: {
      el: "Το θάρρος δεν είναι απουσία φόβου. Είναι κίνηση παρά τον φόβο.",
      en: "Courage is not the absence of fear. It is movement despite fear."
    },
    xp: 240,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- ΕΙΣΑΓΩΓΙΚΟ QUOTE -->
        <div class="relative bg-gradient-to-r from-slate-900 via-rose-900/60 to-red-900/40 p-10 rounded-2xl border border-rose-500/30 text-center shadow-lg shadow-rose-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Κεφάλαιο 12</div>
          <p class="italic text-rose-200 text-xl mt-4 leading-relaxed">«Ο φόβος δεν είναι σήμα κινδύνου.<br/>Είναι σήμα ανάπτυξης.»</p>
          <div class="mt-4 w-16 h-0.5 bg-rose-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- ΣΚΗΝΗ 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-rose-600/30 border border-rose-500/30 text-rose-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-rose-400 tracking-wide">Η ΕΥΚΑΙΡΙΑ</h3>
          </div>
          <p>Το μήνυμα ήρθε απρόσμενα. Σαν κεραυνός σε καθαρό ουρανό. Σαν χτύπημα στην πόρτα που κανείς δεν περίμενε.</p>
          <p class="mt-3">Η Αλεξάνδρα το διάβασε πρώτη. Τα μάτια της σάρωσαν τις λέξεις — αργά, προσεκτικά, σαν να ήλπιζε ότι κάποια από αυτές θα εξαφανιζόταν αν τις κοιτούσε αρκετά. <em>«Θέλουμε να παρουσιάσετε το project σας. Μπροστά σε κόσμο.»</em></p>
          <p class="mt-3">Διάβασε ξανά. Και ξανά. Οι λέξεις δεν εξαφανίστηκαν. Αντίθετα — μεγάλωσαν. Γέμισαν το δωμάτιο σαν καπνός.</p>
          <p class="mt-4">— «Δεν είμαστε έτοιμοι», είπε αμέσως. Η φωνή της ήταν σταθερή, αλλά τα χέρια της έτρεμαν πάνω στο τηλέφωνο. Ένα μικρό τρέμουλο — σχεδόν αόρατο — που πρόδιδε αυτό που δεν ήθελε να παραδεχτεί.</p>
          <p class="mt-3">Ο Φίλιππος χαμογέλασε νευρικά. Ένα χαμόγελο που δεν έφτασε ποτέ στα μάτια του. «Ήρθαν τα δύσκολα», είπε, και η φωνή του ακούστηκε πιο αδύναμη απ' ό,τι ήθελε.</p>
          <p class="mt-3">Η Ελευθερία δεν μίλησε. Ένιωσε κάτι στο στομάχι της — ένα σφίξιμο βαθύ, σαν κόμπος που δεν λύνεται. <strong class="text-rose-300">«Αυτό είναι μεγάλο»</strong>, ψιθύρισε τελικά.</p>
          <p class="mt-4">Ο Crocus πετάχτηκε ανάμεσά τους, τα πράσινα μάτια του να λάμπουν σαν φανάρια στη νύχτα. <strong class="text-green-400">«ΠΑΜΕ!»</strong> φώναξε χαρούμενα, χοροπηδώντας.</p>
          <p class="mt-3 text-white font-medium">Κανείς δεν απάντησε.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η σιωπή μερικές φορές μιλάει πιο δυνατά από τις λέξεις. Και αυτή η σιωπή έλεγε ένα πράγμα: φόβος.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-rose-500/15 shadow-lg shadow-rose-900/20">
            <img src="${IMG_CROCUS}" alt="Ο Crocus" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-rose-300/80 italic">Ο Crocus — πάντα έτοιμος, πάντα γενναίος</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-red-400 tracking-wide">Ο ΦΟΒΟΣ ΑΛΛΑΖΕΙ ΜΟΡΦΗ</h3>
          </div>
          <p>Αυτή τη φορά ο φόβος δεν ήρθε σαν τέρας. Δεν ήρθε σαν σκιά στο σκοτάδι ή σαν θόρυβος στη νύχτα. Ήρθε ντυμένος με κοστούμι — ήρεμος, λογικός, πειστικός.</p>
          <p class="mt-3">Δεν ήταν πια η κοροϊδία των άλλων. Αυτό το είχαν νικήσει. Τώρα ο φόβος είχε νέο πρόσωπο: <em>βλέμματα, προσδοκίες, ευθύνη</em>. Ο φόβος να σταθείς μπροστά σε ανθρώπους που σε κοιτάζουν και να πεις: «Αυτό φτιάξαμε. Αυτό πιστεύουμε.»</p>
          <p class="mt-4">— «Κι αν αποτύχουμε;» ρώτησε η Αλεξάνδρα. Η φωνή της ήταν σαν γυαλί — διάφανη και εύθραυστη. «Κι αν τα ξεχάσουμε όλα; Κι αν γελάσουν;»</p>
          <p class="mt-3">Κάθε ερώτηση ήταν σαν πέτρα που πετούσε στο νερό. Κυματισμοί παντού. Κανείς δεν τις μάζεψε πίσω.</p>
          <p class="mt-3">Ο Φίλιππος κοίταξε κάτω. Τα χέρια του — τα ίδια χέρια που είχαν χτίσει τόσα πράγματα, που είχαν σπάσει και ξαναφτιάξει κομμάτια δεκάδες φορές — τώρα κρέμονταν άχρηστα στα πλάγια του.</p>
          <p class="mt-4 text-xl"><strong class="text-white">«Φοβάμαι.»</strong></p>
          <p class="mt-3">Δύο λέξεις. Τόσο μικρές. Τόσο βαριές. Και αυτή τη φορά… <em>τις είπε</em>. Δεν τις έκρυψε πίσω από θυμό ή αδιαφορία. Τις άφησε να πέσουν στη μέση του δωματίου, γυμνές και αληθινές.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Μερικές φορές, η πιο γενναία πράξη δεν είναι να κάνεις κάτι. Είναι να πεις αυτό που νιώθεις. Χωρίς μάσκα. Χωρίς φίλτρο.</p>
        </section>

        <!-- ΣΚΗΝΗ 3 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-rose-600/30 border border-rose-500/30 text-rose-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-rose-300 tracking-wide">ΤΟ ΘΑΡΡΟΣ ΤΟΥ CROCUS</h3>
          </div>
          <p>Ο Crocus δεν φώναξε. Δεν πετάχτηκε. Δεν χοροπήδησε. Για πρώτη φορά, στάθηκε ακίνητος — τα πράσινα μάτια του σταθερά, η φωνή του χαμηλή.</p>
          <p class="mt-3">«Ξέρετε τι φοβάμαι εγώ;» ρώτησε.</p>
          <p class="mt-3">Τα παιδιά τον κοίταξαν. Ο Crocus δεν φοβόταν ποτέ τίποτα — ή τουλάχιστον αυτό νόμιζαν. Ήταν πάντα αυτός που πηδούσε πρώτος, που τραγουδούσε πιο δυνατά, που γελούσε πιο θορυβώδικα.</p>
          <p class="mt-4">«Φοβάμαι να μην πάμε ποτέ», είπε. «Φοβάμαι να μείνουμε εδώ. Να κρατάμε αυτό που φτιάξαμε κρυμμένο. Να μην το δείξουμε ποτέ σε κανέναν. <em>Αυτό</em> με τρομάζει.»</p>
          <p class="mt-3">Η φράση έπεσε βαριά. Σαν βράχος σε ακίνητο νερό.</p>
          <p class="mt-3">Η Ελευθερία τον κοίταξε με μάτια διαφορετικά — σαν να τον έβλεπε για πρώτη φορά. «Δηλαδή… να πάμε φοβισμένοι;» ρώτησε αργά.</p>
          <p class="mt-4 text-rose-300 font-bold text-xl">— «Ναι», είπε ο Crocus. «Αυτό λέγεται θάρρος.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Το θάρρος δεν μοιάζει με αυτό που δείχνουν οι ταινίες. Δεν είναι μουσική και slow motion. Είναι ένα τρεμάμενο «ναι» που βγαίνει μέσα από τον φόβο.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-rose-500/15 shadow-lg shadow-rose-900/20">
            <img src="${IMG_KIDS_WITH_CROCUS}" alt="Τα παιδιά με τον Crocus" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-rose-300/80 italic">Ο Crocus μοιράζεται τον δικό του φόβο — τον φόβο της αδράνειας</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 4 — ΤΟ ΣΗΜΑ ΤΗΣ WISEBOT -->
        <section class="bg-gradient-to-br from-rose-900/30 via-red-900/20 to-fuchsia-900/10 p-8 rounded-2xl border-l-4 border-rose-500 my-8 shadow-xl shadow-rose-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-fuchsia-600/30 border border-fuchsia-500/30 text-fuchsia-300 font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-fuchsia-400 tracking-wide">ΤΟ ΣΗΜΑ</h3>
          </div>
          <p>Η WiseBot εμφανίστηκε χωρίς προειδοποίηση. Τα μωβ μάτια της ακτινοβολούσαν απαλά στο ημίφως του δωματίου, ρίχνοντας μωβ σκιές στους τοίχους.</p>
          <p class="mt-3">Δεν μίλησε αμέσως. Πρώτα τους κοίταξε — έναν-έναν. Είδε τα τρεμάμενα χέρια. Τα σκυμμένα κεφάλια. Τον φόβο που κρυβόταν πίσω από τα μάτια τους σαν ζώο στη σπηλιά του.</p>
          <p class="mt-4">«Ξέρετε τι είναι ο φόβος;» ρώτησε τελικά. Η φωνή της ήταν ήρεμη — σαν νερό που τρέχει πάνω σε πέτρες.</p>
          <p class="mt-3">Κανείς δεν απάντησε.</p>

          <div class="my-6 bg-gradient-to-r from-rose-900/40 to-fuchsia-900/40 p-8 rounded-2xl border border-rose-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">«Ο φόβος δεν είναι σήμα κινδύνου.<br/><span class="text-rose-300">Είναι σήμα ανάπτυξης.»</span></p>
          </div>

          <p class="mt-4">Η Αλεξάνδρα σήκωσε αργά το κεφάλι. «Και αν δεν τα καταφέρουμε;» ρώτησε — και η φωνή της ράγισε στη μέση της πρότασης, σαν κλαδί που λυγίζει κάτω από το βάρος.</p>
          <p class="mt-3">Η WiseBot δεν χαμογέλασε — δεν είχε στόμα. Αλλά τα μάτια της έγιναν πιο ζεστά. Πιο φωτεινά.</p>
          <p class="mt-4 text-fuchsia-300 font-bold text-xl">— «Τότε θα έχετε κάνει κάτι που δεν είχατε κάνει πριν. Και αυτό, από μόνο του, είναι νίκη.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Μερικές αλήθειες δεν χρειάζονται εξήγηση. Χρειάζονται μόνο κάποιον αρκετά σοφό να τις πει — και κάποιον αρκετά γενναίο να τις ακούσει.</p>

          <!-- ΕΙΚΟΝΑ: KIDS + WISEBOT -->
          <div class="my-8 rounded-2xl overflow-hidden border border-fuchsia-500/20 shadow-2xl shadow-purple-900/30">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="Τα παιδιά με τη WiseBot" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-fuchsia-300/80 italic">Η WiseBot τους θυμίζει ότι ο φόβος είναι σημάδι ότι μεγαλώνεις</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-600/30 border border-slate-500/30 text-slate-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-slate-300 tracking-wide">Η ΠΑΓΩΣΗ</h3>
          </div>
          <p>Την προηγούμενη μέρα, το σπίτι ήταν σαν παγωμένο βασίλειο. Ο αέρας βαρύς. Η σιωπή κοφτερή σαν γυαλί.</p>
          <p class="mt-3">Η Ελευθερία καθόταν μπροστά στις σημειώσεις της. Έσβηνε μια πρόταση. Την ξανάγραφε. Την ξανάσβηνε. Κάθε λέξη φαινόταν λάθος — πολύ μεγάλη ή πολύ μικρή, πολύ τολμηρή ή πολύ ήσυχη. <em>Τίποτα δεν ήταν αρκετό.</em></p>
          <p class="mt-3">Ο Φίλιππος προσπαθούσε να ελέγξει τον μηχανισμό για τελευταία φορά. Τα δάχτυλά του γλιστρούσαν. Έκανε λάθη που δεν είχε κάνει εδώ και βδομάδες. Λάθη αρχαρίου. Σαν να είχε ξεχάσει τα πάντα.</p>
          <p class="mt-4">Η Αλεξάνδρα στεκόταν στο παράθυρο, κοιτώντας έξω χωρίς να βλέπει τίποτα. Μέσα της, μια φωνή επαναλάμβανε σαν χαλασμένο δίσκο: <em>δεν μπορείς, δεν μπορείς, δεν μπορείς.</em></p>
          <p class="mt-3">«Να ακυρώσουμε», ψιθύρισε. Τόσο σιγά που σχεδόν δεν ακούστηκε. Αλλά ακούστηκε.</p>
          <p class="mt-4">Ο Crocus κατέβηκε χαμηλά, στο ύψος των ματιών τους. Δεν χαμογελούσε πια.</p>
          <p class="mt-3"><strong class="text-white">«Αν φύγετε τώρα, ο φόβος θα σας ακολουθεί. Παντού. Πάντα. Θα γίνει σκιά σας.»</strong></p>
          <p class="mt-3">Σιωπή. Βαριά σαν μόλυβδος. Κανείς δεν κουνήθηκε.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Ο φόβος δεν εξαφανίζεται αν τον αγνοήσεις. Μεγαλώνει. Γίνεται τοίχος. Και κάθε φορά που γυρνάς πίσω, ο τοίχος ψηλώνει.</p>
        </section>

        <!-- ΣΚΗΝΗ 6 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-white/20 border border-white/30 text-white font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-white tracking-wide">Η ΑΠΟΦΑΣΗ</h3>
          </div>
          <p>Δεν ήταν γενναία στιγμή. Δεν ήταν δραματική. Κανείς δεν σηκώθηκε με φλογερά μάτια. Κανείς δεν έβαλε μουσική ηρωισμού στο background.</p>
          <p class="mt-3">Ήταν μια ήσυχη στιγμή. Σαν αυτές που δεν τις θυμάσαι ακριβώς πότε συνέβησαν — αλλά ξέρεις ότι μετά από αυτές, τίποτα δεν ήταν το ίδιο.</p>
          <p class="mt-4">— «Πάμε», είπε η Ελευθερία. Η φωνή της δεν ήταν σταθερή. Ήταν <em>αποφασισμένη</em> — κάτι εντελώς διαφορετικό. «Όχι επειδή είμαστε έτοιμοι. Αλλά επειδή δεν θέλουμε να κρυφτούμε.»</p>
          <p class="mt-3">Ο Φίλιππος πήρε μια βαθιά ανάσα. Τα χέρια του σταμάτησαν να τρέμουν. Όχι επειδή σταμάτησε να φοβάται — αλλά επειδή αποφάσισε ότι ο φόβος δεν θα αποφάσιζε για αυτόν.</p>
          <p class="mt-3 text-white font-medium">«Πάμε», είπε.</p>
          <p class="mt-3">Η Αλεξάνδρα έσφιξε τα χέρια της — τόσο δυνατά που τα νύχια της χαράχτηκαν στις παλάμες. Μια μικρή, αθόρυβη πράξη θάρρους.</p>
          <p class="mt-3 text-white font-medium">«Πάμε.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Τρεις φορές η ίδια λέξη. Αλλά κάθε μία είχε διαφορετικό βάρος. Η πρώτη ήταν απόφαση. Η δεύτερη ήταν δύναμη. Η τρίτη ήταν ένα υπόσχεση.</p>
        </section>

        <!-- ΣΚΗΝΗ 7 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-rose-600/30 border border-rose-500/30 text-rose-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-rose-300 tracking-wide">ΤΟ ΒΗΜΑ</h3>
          </div>
          <p>Στάθηκαν μπροστά. Τα φώτα ήταν δυνατά — τόσο δυνατά που τα μάτια τους πονούσαν. Ο κόσμος ήταν περισσότερος απ' όσο περίμεναν. Πρόσωπα, πρόσωπα, πρόσωπα — δεκάδες ζευγάρια μάτια που κοιτούσαν, περίμεναν, <em>έκριναν</em>.</p>
          <p class="mt-3">Για ένα δευτερόλεπτο, ο χρόνος σταμάτησε. Η Αλεξάνδρα ένιωσε τα γόνατά της να λυγίζουν. Ο Φίλιππος ένιωσε το στομάχι του να αναποδογυρίζει. Η Ελευθερία ένιωσε το μυαλό της να αδειάζει — σαν βιβλίο που κάποιος σβήνει σελίδα-σελίδα.</p>
          <p class="mt-4">Και τότε η Αλεξάνδρα μίλησε. Η φωνή της έτρεμε στην αρχή — σαν κερί σε ανοιχτό παράθυρο. Αλλά δεν σταμάτησε. Συνέχισε. Λέξη μετά λέξη. Και σιγά σιγά, το τρέμουλο έγινε ρυθμός. Η αβεβαιότητα έγινε πάθος.</p>
          <p class="mt-3">Ο Φίλιππος μίλησε μετά. Με φωτιά. Με αυτή τη φωτιά που είχε πάντα μέσα του αλλά δεν ήξερε πώς να τη δείξει. Τα μάτια του έλαμπαν και τα χέρια του ζωγράφιζαν στον αέρα αυτό που δεν μπορούσαν οι λέξεις.</p>
          <p class="mt-3">Η Ελευθερία ολοκλήρωσε. Καθαρά. Ακριβώς. Κάθε λέξη στη θέση της, σαν κομμάτι παζλ που επιτέλους βρήκε τη θέση του.</p>
          <p class="mt-4"><strong class="text-white text-lg">Δεν ήταν τέλειο. Ήταν αληθινό.</strong></p>
          <p class="mt-3">Και το αληθινό, πάντα, νικάει το τέλειο.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Το θάρρος δεν είναι η απουσία τρέμουλου. Είναι η απόφαση να μιλήσεις ενώ τρέμεις. Να σηκωθείς ενώ λυγίζεις. Να πεις «ναι» ενώ τα πάντα μέσα σου φωνάζουν «φύγε».</p>

          <!-- ΕΙΚΟΝΑ: KIDS TOGETHER -->
          <div class="mt-6 rounded-2xl overflow-hidden border border-rose-500/20 shadow-2xl shadow-rose-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="Τα παιδιά παρουσιάζουν μαζί" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-rose-300/80 italic">Τρία παιδιά. Ένα βήμα. Αμέτρητο θάρρος.</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 8 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-amber-400 tracking-wide">ΤΟ ΜΕΤΑ</h3>
          </div>
          <p>Δεν χειροκρότησαν όλοι. Αυτό είναι η αλήθεια. Η ζωή δεν δουλεύει έτσι — δεν σηκώνονται πάντα όλοι όρθιοι με δάκρυα στα μάτια.</p>
          <p class="mt-3">Αλλά κάποιοι πλησίασαν. Ένας κύριος με γυαλιά είπε: «Μου άρεσε». Μια κοπέλα με σημειωματάριο: «Έχει ιδέα αυτό». Ένα παιδί, μικρότερο από αυτούς: «Συνεχίστε.»</p>
          <p class="mt-3">Και αυτό αρκούσε. Δεν χρειαζόταν ο κόσμος ολόκληρος. Χρειαζόταν κάποιοι. Λίγοι. Αληθινοί.</p>
          <p class="mt-4">Η Αλεξάνδρα χαμογέλασε — ένα αληθινό χαμόγελο, αυτή τη φορά. Ένα χαμόγελο που έφτανε μέχρι τα μάτια και τα έκανε να λάμπουν. «Το κάναμε», ψιθύρισε.</p>
          <p class="mt-3">Η WiseBot άναψε — τα μωβ μάτια της πάλλονταν αργά, ζεστά.</p>
          <p class="mt-3">«Και ο φόβος;» ρώτησε.</p>
          <p class="mt-4">Ο Φίλιππος σκέφτηκε. Πραγματικά σκέφτηκε — όχι μια γρήγορη απάντηση, αλλά κάτι που βγήκε από βαθιά μέσα του.</p>
          <p class="mt-3 text-rose-300 font-bold text-xl">«Ήταν εκεί. Απλώς… δεν μας σταμάτησε.»</p>

          <div class="mt-6 bg-gradient-to-r from-amber-900/30 to-rose-900/20 p-6 rounded-xl border border-amber-500/20">
            <p class="text-white text-lg">Ο Crocus χοροπήδησε ψηλά. Τα μάτια του γυάλιζαν.</p>
            <p class="mt-3 text-amber-300 font-bold text-xl">«Αυτό ήταν. Αυτό ήταν πάντα. Όχι να φύγει ο φόβος — αλλά να πας μαζί του.»</p>
          </div>

          <!-- ΕΙΚΟΝΑ: KIDS + WISEBOT -->
          <div class="mt-6 rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl shadow-amber-900/20">
            <img src="${IMG_KIDS_WISEBOT_2}" alt="Τα παιδιά γιορτάζουν με τη WiseBot" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-amber-300/80 italic">Ο φόβος δεν εξαφανίστηκε. Απλά σταμάτησε να οδηγεί.</div>
          </div>

          <p class="mt-4 text-gray-400 text-sm italic">Η νίκη δεν μετριέται πάντα σε χειροκροτήματα. Μερικές φορές μετριέται σε βήματα — μικρά, τρεμάμενα βήματα που κανείς δεν περίμενε ότι θα γίνουν.</p>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-rose-950/60 p-8 rounded-3xl border-2 border-dashed border-rose-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-rose-300 uppercase tracking-wider">JOURNAL: ΤΟ ΚΑΝΩ ΚΑΙ ΑΣ ΦΟΒΑΜΑΙ</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Γράψε. Σκέψου. Νιώσε. Δεν υπάρχει λάθος απάντηση.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-rose-500/15">
              <h5 class="text-rose-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-rose-600/40 flex items-center justify-center text-xs font-black">1</span>
                ΤΙ ΜΕ ΦΟΒΙΖΕΙ
              </h5>
              <p class="text-sm mb-3 opacity-80">Γράψε κάτι που θέλεις να κάνεις αλλά φοβάσαι. Μπορεί να είναι μικρό ή μεγάλο — δεν έχει σημασία. Ο φόβος δεν μετριέται σε μέγεθος.</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-rose-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-rose-500/15">
              <h5 class="text-rose-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-rose-600/40 flex items-center justify-center text-xs font-black">2</span>
                ΤΟ ΡΙΣΚΟ
              </h5>
              <p class="text-sm mb-3 opacity-80">Τι θα χάσεις αν δεν προσπαθήσεις ποτέ; Τι θα σκέφτεσαι σε ένα χρόνο αν δεν κάνεις τίποτα;</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-rose-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-rose-500/15">
              <h5 class="text-rose-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-rose-600/40 flex items-center justify-center text-xs font-black">3</span>
                Η ΔΡΑΣΗ
              </h5>
              <p class="text-sm mb-3 opacity-80">Συμπλήρωσε την πρόταση:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-rose-500/10 text-rose-200">
                <p class="text-sm font-medium">«Ακόμα κι αν φοβάμαι, θα κάνω: __________»</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΝΟΗΜΑ / MEANING BOX -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-r from-purple-900/30 to-rose-900/30 p-6 rounded-2xl border border-purple-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-purple-300 uppercase tracking-wider">Το νόημα αυτού του κεφαλαίου</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            Το θάρρος δεν είναι απουσία φόβου. Είναι <strong class="text-rose-300">κίνηση παρά τον φόβο</strong>. Ο Crocus δεν τους είπε «μην φοβάστε». Τους είπε: «Φοβηθείτε — και πάτε.» Γιατί ο φόβος δεν είναι <strong class="text-purple-300">σήμα κινδύνου</strong>. Είναι σήμα ότι κάτι σημαντικό πρόκειται να συμβεί.
          </p>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-rose-950/60 p-8 rounded-3xl border border-rose-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-rose-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              Όταν ένα παιδί λέει <strong class="text-white">«φοβάμαι»</strong>, στην πραγματικότητα λέει <em>«αυτό που πρόκειται να κάνω είναι σημαντικό για μένα»</em>.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Δεν χρειάζεται να τους διώξουμε τον φόβο. Χρειάζεται να τους μάθουμε <strong class="text-rose-300">να προχωρούν μαζί του</strong>. Ο φόβος δεν εξαφανίζεται — απλά σταματάει να οδηγεί.
            </p>
            <div class="mt-4 bg-rose-900/20 p-4 rounded-xl border border-rose-500/10">
              <p class="text-sm text-rose-200 font-medium">💡 Δοκιμάστε σήμερα: Αντί να πείτε «μην φοβάσαι», πείτε: «Είναι ΟΚ να φοβάσαι. Σημαίνει ότι σου αξίζει. Πάμε μαζί.»</p>
            </div>
          </div>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- INTRO QUOTE -->
        <div class="relative bg-gradient-to-r from-slate-900 via-rose-900/60 to-red-900/40 p-10 rounded-2xl border border-rose-500/30 text-center shadow-lg shadow-rose-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Chapter 12</div>
          <p class="italic text-rose-200 text-xl mt-4 leading-relaxed">"Fear is not a danger signal.<br/>It is a growth signal."</p>
          <div class="mt-4 w-16 h-0.5 bg-rose-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- SCENE 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-rose-600/30 border border-rose-500/30 text-rose-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-rose-400 tracking-wide">THE OPPORTUNITY</h3>
          </div>
          <p>The message came unexpectedly. Like lightning in a clear sky. Like a knock on a door no one was expecting.</p>
          <p class="mt-3">Alexandra read it first. Her eyes scanned the words — slowly, carefully, as if hoping some of them would disappear if she stared long enough. <em>"We want you to present your project. In front of people."</em></p>
          <p class="mt-3">She read it again. And again. The words didn't vanish. Instead — they grew. They filled the room like smoke.</p>
          <p class="mt-4">— "We are not ready," she said immediately. Her voice was steady, but her hands were trembling on the phone. A small tremor — almost invisible — that betrayed what she didn't want to admit.</p>
          <p class="mt-3">Philippos smiled nervously. A smile that never reached his eyes. "The hard times have come," he said, and his voice sounded weaker than he intended.</p>
          <p class="mt-3">Eleftheria didn't speak. She felt something in her stomach — a deep tightening, like a knot that won't come undone. <strong class="text-rose-300">"This is big,"</strong> she whispered finally.</p>
          <p class="mt-4">Crocus leaped between them, his green eyes glowing like lanterns in the night. <strong class="text-green-400">"LET'S GO!"</strong> he shouted happily, bouncing.</p>
          <p class="mt-3 text-white font-medium">No one answered.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Silence sometimes speaks louder than words. And this silence said one thing: fear.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-rose-500/15 shadow-lg shadow-rose-900/20">
            <img src="${IMG_CROCUS}" alt="Crocus" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-rose-300/80 italic">Crocus — always ready, always brave</div>
          </div>
        </section>

        <!-- SCENE 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-red-400 tracking-wide">FEAR CHANGES SHAPE</h3>
          </div>
          <p>This time, fear didn't come as a monster. It didn't come as a shadow in the dark or a noise in the night. It came dressed in a suit — calm, logical, convincing.</p>
          <p class="mt-3">It wasn't mockery anymore. They had conquered that. Now fear had a new face: <em>looks, expectations, responsibility</em>. The fear of standing before people who are watching you and saying: "This is what we built. This is what we believe."</p>
          <p class="mt-4">— "What if we fail?" asked Alexandra. Her voice was like glass — transparent and fragile. "What if we forget everything? What if they laugh?"</p>
          <p class="mt-3">Each question was like a stone thrown into water. Ripples everywhere. No one gathered them back.</p>
          <p class="mt-3">Philippos looked down. His hands — the same hands that had built so many things, that had broken and rebuilt pieces dozens of times — now hung useless at his sides.</p>
          <p class="mt-4 text-xl"><strong class="text-white">"I'm scared."</strong></p>
          <p class="mt-3">Two words. So small. So heavy. And this time... <em>he said them</em>. He didn't hide them behind anger or indifference. He let them fall into the middle of the room, naked and true.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Sometimes, the bravest act is not doing something. It is saying what you feel. Without a mask. Without a filter.</p>
        </section>

        <!-- SCENE 3 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-rose-600/30 border border-rose-500/30 text-rose-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-rose-300 tracking-wide">CROCUS'S COURAGE</h3>
          </div>
          <p>Crocus didn't shout. He didn't jump. He didn't bounce. For the first time, he stood still — his green eyes steady, his voice low.</p>
          <p class="mt-3">"Do you know what I fear?" he asked.</p>
          <p class="mt-3">The children looked at him. Crocus never feared anything — or at least that's what they thought. He was always the one who jumped first, who sang the loudest, who laughed the most.</p>
          <p class="mt-4">"I fear that we never go," he said. "I fear that we stay here. That we keep what we built hidden. That we never show it to anyone. <em>That</em> terrifies me."</p>
          <p class="mt-3">The phrase fell heavy. Like a rock into still water.</p>
          <p class="mt-3">Eleftheria looked at him with different eyes — as if seeing him for the first time. "So... we go scared?" she asked slowly.</p>
          <p class="mt-4 text-rose-300 font-bold text-xl">— "Yes," said Crocus. "That is called courage."</p>
          <p class="mt-3 text-gray-400 text-sm italic">Courage doesn't look like what movies show. It isn't music and slow motion. It is a trembling "yes" that comes from within the fear itself.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-rose-500/15 shadow-lg shadow-rose-900/20">
            <img src="${IMG_KIDS_WITH_CROCUS}" alt="The children with Crocus" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-rose-300/80 italic">Crocus shares his own fear — the fear of doing nothing</div>
          </div>
        </section>

        <!-- SCENE 4 — THE SIGNAL -->
        <section class="bg-gradient-to-br from-rose-900/30 via-red-900/20 to-fuchsia-900/10 p-8 rounded-2xl border-l-4 border-rose-500 my-8 shadow-xl shadow-rose-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-fuchsia-600/30 border border-fuchsia-500/30 text-fuchsia-300 font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-fuchsia-400 tracking-wide">THE SIGNAL</h3>
          </div>
          <p>WiseBot appeared without warning. Her purple eyes radiated softly in the room's half-light, casting purple shadows on the walls.</p>
          <p class="mt-3">She didn't speak right away. First she looked at them — one by one. She saw the trembling hands. The bowed heads. The fear hiding behind their eyes like an animal in its cave.</p>
          <p class="mt-4">"Do you know what fear is?" she asked finally. Her voice was calm — like water running over stones.</p>
          <p class="mt-3">No one answered.</p>

          <div class="my-6 bg-gradient-to-r from-rose-900/40 to-fuchsia-900/40 p-8 rounded-2xl border border-rose-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">"Fear is not a danger signal.<br/><span class="text-rose-300">It is a growth signal."</span></p>
          </div>

          <p class="mt-4">Alexandra slowly raised her head. "And if we don't make it?" she asked — and her voice cracked in the middle of the sentence, like a branch bending under weight.</p>
          <p class="mt-3">WiseBot didn't smile — she had no mouth. But her eyes became warmer. Brighter.</p>
          <p class="mt-4 text-fuchsia-300 font-bold text-xl">— "Then you will have done something you hadn't done before. And that, by itself, is a victory."</p>
          <p class="mt-3 text-gray-400 text-sm italic">Some truths don't need explanation. They only need someone wise enough to say them — and someone brave enough to hear them.</p>

          <!-- IMAGE: KIDS + WISEBOT -->
          <div class="my-8 rounded-2xl overflow-hidden border border-fuchsia-500/20 shadow-2xl shadow-purple-900/30">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="The children with WiseBot" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-fuchsia-300/80 italic">WiseBot reminds them that fear is a sign that you are growing</div>
          </div>
        </section>

        <!-- SCENE 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-600/30 border border-slate-500/30 text-slate-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-slate-300 tracking-wide">THE FREEZE</h3>
          </div>
          <p>The day before, the house was like a frozen kingdom. The air heavy. The silence sharp as glass.</p>
          <p class="mt-3">Eleftheria sat in front of her notes. She erased a sentence. Rewrote it. Erased it again. Every word seemed wrong — too big or too small, too bold or too quiet. <em>Nothing was enough.</em></p>
          <p class="mt-3">Philippos tried to check the mechanism one last time. His fingers slipped. He made mistakes he hadn't made in weeks. Beginner mistakes. As if he had forgotten everything.</p>
          <p class="mt-4">Alexandra stood at the window, looking out without seeing anything. Inside her, a voice repeated like a broken record: <em>you can't, you can't, you can't.</em></p>
          <p class="mt-3">"Let's cancel," she whispered. So quietly it was almost unheard. But it was heard.</p>
          <p class="mt-4">Crocus came down low, to their eye level. He wasn't smiling anymore.</p>
          <p class="mt-3"><strong class="text-white">"If you leave now, fear will follow you. Everywhere. Always. It will become your shadow."</strong></p>
          <p class="mt-3">Silence. Heavy as lead. No one moved.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Fear doesn't disappear if you ignore it. It grows. It becomes a wall. And every time you turn back, the wall gets higher.</p>
        </section>

        <!-- SCENE 6 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-white/20 border border-white/30 text-white font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-white tracking-wide">THE DECISION</h3>
          </div>
          <p>It wasn't a brave moment. It wasn't dramatic. No one stood up with burning eyes. No one put heroic music in the background.</p>
          <p class="mt-3">It was a quiet moment. Like those you don't remember exactly when they happened — but you know that after them, nothing was the same.</p>
          <p class="mt-4">— "Let's go," said Eleftheria. Her voice wasn't steady. It was <em>determined</em> — something entirely different. "Not because we are ready. But because we don't want to hide."</p>
          <p class="mt-3">Philippos took a deep breath. His hands stopped trembling. Not because he stopped being afraid — but because he decided that fear would not decide for him.</p>
          <p class="mt-3 text-white font-medium">"Let's go," he said.</p>
          <p class="mt-3">Alexandra squeezed her hands — so tightly that her nails dug into her palms. A small, silent act of courage.</p>
          <p class="mt-3 text-white font-medium">"Let's go."</p>
          <p class="mt-3 text-gray-400 text-sm italic">Three times the same word. But each one carried different weight. The first was a decision. The second was strength. The third was a promise.</p>
        </section>

        <!-- SCENE 7 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-rose-600/30 border border-rose-500/30 text-rose-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-rose-300 tracking-wide">THE STEP</h3>
          </div>
          <p>They stood in front. The lights were bright — so bright their eyes hurt. The crowd was bigger than expected. Faces, faces, faces — dozens of pairs of eyes watching, waiting, <em>judging</em>.</p>
          <p class="mt-3">For a second, time stopped. Alexandra felt her knees buckling. Philippos felt his stomach turning. Eleftheria felt her mind emptying — like a book someone is erasing page by page.</p>
          <p class="mt-4">And then Alexandra spoke. Her voice trembled at first — like a candle in an open window. But she didn't stop. She continued. Word after word. And slowly, the trembling became rhythm. The uncertainty became passion.</p>
          <p class="mt-3">Philippos spoke next. With fire. With that fire he always had inside but never knew how to show. His eyes shone and his hands painted in the air what words couldn't.</p>
          <p class="mt-3">Eleftheria finished. Clearly. Precisely. Every word in its place, like a puzzle piece that finally found where it belongs.</p>
          <p class="mt-4"><strong class="text-white text-lg">It wasn't perfect. It was real.</strong></p>
          <p class="mt-3">And real always beats perfect.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Courage is not the absence of trembling. It is the decision to speak while you tremble. To stand while you're buckling. To say "yes" while everything inside you screams "run."</p>

          <!-- IMAGE: KIDS TOGETHER -->
          <div class="mt-6 rounded-2xl overflow-hidden border border-rose-500/20 shadow-2xl shadow-rose-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="The children presenting together" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-rose-300/80 italic">Three children. One step. Immeasurable courage.</div>
          </div>
        </section>

        <!-- SCENE 8 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-amber-400 tracking-wide">THE AFTER</h3>
          </div>
          <p>Not everyone applauded. That's the truth. Life doesn't work like that — not everyone always stands up with tears in their eyes.</p>
          <p class="mt-3">But some came closer. A man with glasses said: "I liked it." A girl with a notebook: "This has an idea." A child, younger than them: "Keep going."</p>
          <p class="mt-3">And that was enough. They didn't need the whole world. They needed some people. A few. Real ones.</p>
          <p class="mt-4">Alexandra smiled — a real smile, this time. A smile that reached her eyes and made them glow. "We did it," she whispered.</p>
          <p class="mt-3">WiseBot lit up — her purple eyes pulsing slowly, warmly.</p>
          <p class="mt-3">"And the fear?" she asked.</p>
          <p class="mt-4">Philippos thought. Really thought — not a quick answer, but something that came from deep inside him.</p>
          <p class="mt-3 text-rose-300 font-bold text-xl">"It was there. Just... it didn't stop us."</p>

          <div class="mt-6 bg-gradient-to-r from-amber-900/30 to-rose-900/20 p-6 rounded-xl border border-amber-500/20">
            <p class="text-white text-lg">Crocus bounced high. His eyes were glittering.</p>
            <p class="mt-3 text-amber-300 font-bold text-xl">"That was it. That was always it. Not for fear to leave — but for you to go with it."</p>
          </div>

          <!-- IMAGE: KIDS + WISEBOT -->
          <div class="mt-6 rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl shadow-amber-900/20">
            <img src="${IMG_KIDS_WISEBOT_2}" alt="The children celebrate with WiseBot" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-amber-300/80 italic">Fear didn't disappear. It just stopped driving.</div>
          </div>

          <p class="mt-4 text-gray-400 text-sm italic">Victory isn't always measured in applause. Sometimes it's measured in steps — small, trembling steps that no one expected would happen.</p>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-rose-950/60 p-8 rounded-3xl border-2 border-dashed border-rose-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-rose-300 uppercase tracking-wider">JOURNAL: I DO IT EVEN IF I'M SCARED</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Write. Think. Feel. There is no wrong answer.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-rose-500/15">
              <h5 class="text-rose-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-rose-600/40 flex items-center justify-center text-xs font-black">1</span>
                WHAT SCARES ME
              </h5>
              <p class="text-sm mb-3 opacity-80">Write something you want to do but you are afraid of. It can be small or big — it doesn't matter. Fear isn't measured by size.</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-rose-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-rose-500/15">
              <h5 class="text-rose-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-rose-600/40 flex items-center justify-center text-xs font-black">2</span>
                THE RISK
              </h5>
              <p class="text-sm mb-3 opacity-80">What will you lose if you never try? What will you think in a year if you do nothing?</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-rose-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-rose-500/15">
              <h5 class="text-rose-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-rose-600/40 flex items-center justify-center text-xs font-black">3</span>
                THE ACTION
              </h5>
              <p class="text-sm mb-3 opacity-80">Complete the sentence:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-rose-500/10 text-rose-200">
                <p class="text-sm font-medium">"Even if I'm scared, I will: __________"</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- MEANING BOX -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-r from-purple-900/30 to-rose-900/30 p-6 rounded-2xl border border-purple-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-purple-300 uppercase tracking-wider">The Meaning of This Chapter</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            Courage is not the absence of fear. It is <strong class="text-rose-300">movement despite fear</strong>. Crocus didn't tell them "don't be afraid." He told them: "Be afraid — and go." Because fear is not a <strong class="text-purple-300">danger signal</strong>. It is a signal that something important is about to happen.
          </p>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- MESSAGE FOR PARENTS -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-rose-950/60 p-8 rounded-3xl border border-rose-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-rose-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              When a child says <strong class="text-white">"I'm scared"</strong>, they are actually saying <em>"what I'm about to do matters to me"</em>.
            </p>
            <p class="text-gray-300 leading-relaxed">
              We don't need to chase away their fear. We need to teach them <strong class="text-rose-300">to move forward with it</strong>. Fear doesn't disappear — it just stops driving.
            </p>
            <div class="mt-4 bg-rose-900/20 p-4 rounded-xl border border-rose-500/10">
              <p class="text-sm text-rose-200 font-medium">💡 Try today: Instead of saying "don't be afraid," say: "It's OK to be afraid. It means it matters to you. Let's go together."</p>
            </div>
          </div>
        </div>

      </div>
    `
    }
  }
];
