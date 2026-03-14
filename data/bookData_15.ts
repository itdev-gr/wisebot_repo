
import { Book } from '../types';

// ============================================================
// BOOK 15: AYTO POY FTIAXNEIS, SE FTIAXNEI / WHAT YOU MAKE, MAKES YOU
// Heroes: Sparken & Wisebot
// Theme: TAYTOTHTA / IDENTITY
// Color: PURPLE / VIOLET
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

export const BOOK_15: Book[] = [
  {
    id: 15,
    title: { el: "ΑΥΤΟ ΠΟΥ ΦΤΙΑΧΝΕΙΣ, ΣΕ ΦΤΙΑΧΝΕΙ", en: "WHAT YOU MAKE, MAKES YOU" },
    theme: { el: "ΤΑΥΤΟΤΗΤΑ", en: "IDENTITY" },
    stepLabel: { el: "WISEBOT & ΤΑΥΤΟΤΗΤΑ", en: "WISEBOT & IDENTITY" },
    author: "Sparken & Wisebot",
    cover: IMG_WISEBOT,
    videoUrl: "",
    description: {
      el: "Δεν είναι πια το ίδιο δωμάτιο. Δεν είναι πια τα ίδια παιδιά. Μια ιστορία για τη στιγμή που καταλαβαίνεις ότι το σημαντικότερο έργο... είσαι εσύ.",
      en: "It is no longer the same room. They are no longer the same children. A story about the moment you realize that the most important project... is you."
    },
    meaning: {
      el: "Δεν φτιάχνεις πράγματα για να τελειώσουν. Φτιάχνεις πράγματα για να γίνεις.",
      en: "You don't make things to finish them. You make things to become."
    },
    xp: 300,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- OPENING QUOTE -->
        <div class="relative bg-gradient-to-r from-purple-900 via-purple-900/60 to-violet-900/40 p-10 rounded-2xl border border-purple-500/30 text-center shadow-lg shadow-purple-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Κεφάλαιο 15</div>
          <p class="italic text-purple-200 text-xl mt-4 leading-relaxed">«Το έργο σου είναι ο καθρέφτης του μυαλού σου.<br/>Αν θέλεις να δεις ποιος είσαι, κοίτα τι έφτιαξες.»</p>
          <div class="mt-4 w-16 h-0.5 bg-purple-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- SCENE 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/30 text-purple-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-purple-300 tracking-wide">ΔΕΝ ΗΤΑΝ ΠΙΑ ΤΟ ΙΔΙΟ</h3>
          </div>
          <p>Το δωμάτιο ήταν το ίδιο. Ακριβώς. Το τραπέζι με τα σημάδια, τους κύκλους από κούπες που κανείς δεν σκούπισε ποτέ. Τα ίδια μολύβια πεταμένα σαν σπασμένα κλαδιά μετά από θύελλα. Τα ίδια χαρτιά, κάποια τσαλακωμένα, κάποια γραμμένα με γράμματα που κανείς δεν τελείωσε.</p>
          <p class="mt-3">Αλλά κάτι είχε αλλάξει. Κάτι αόρατο. Κάτι που δεν μπορούσες να δείξεις με το δάχτυλο αλλά το ένιωθες στο δέρμα σου, στον τρόπο που ο αέρας κινούνταν μέσα στις σκιές. Σαν να είχε κάποιος ανοίξει παράθυρο σε τοίχο που ποτέ δεν είχε.</p>
          <p class="mt-3">Η Αλεξάνδρα το ένιωθε. Κάτι μέσα της είχε μετακινηθεί, σαν τεκτονική πλάκα που σέρνεται αθόρυβα κάτω από ηπείρους. Ένιωθε πιο <em>μαζεμένη</em> — σαν τα κομμάτια της να βρήκαν τη θέση τους. Κοίταξε τα χέρια της. Τα ίδια χέρια. Αλλά τώρα ήξερε τι μπορούσαν να κάνουν.</p>
          <p class="mt-3">Ο Φίλιππος το έβλεπε. Οι γωνίες του δωματίου φαίνονταν πιο καθαρές. Τα σπασμένα κομμάτια στο πάτωμα δεν ήταν πια αποτυχία — ήταν αποδείξεις. Αποδείξεις ότι κάποιος δοκίμασε και δεν σταμάτησε.</p>
          <p class="mt-3">Η Ελευθερία το ήξερε. Φυσικά. Αλλά αυτή τη φορά, για πρώτη φορά στη ζωή της, δεν ένιωσε την ανάγκη να ανοίξει βιβλίο. Το καταλάβαινε μόνη της. Από μέσα.</p>
          <p class="mt-4 text-white font-bold text-lg">Δεν ήταν πια παιχνίδι. Ήταν κάτι δικό τους. Κάτι που δεν υπήρχε πριν από εκείνους.</p>
          <p class="mt-3">Το φως του ηλιοβασιλέματος χρύσισε τις γωνίες του τραπεζιού, ακούμπησε τα χέρια τους, τα πρόσωπά τους. Και μέσα σε αυτό το φως, για ένα κλάσμα του δευτερολέπτου, μοιάζαν μεγαλύτεροι. Μοιάζαν με κάποιους που είχαν περάσει κάτι και βγήκαν από την άλλη πλευρά.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η δημιουργία δεν αλλάζει μόνο αυτό που φτιάχνεις. Αλλάζει αυτόν που φτιάχνει. Σε παίρνει κομμάτι-κομμάτι, σε λύνει, και σε ξαναφτιάχνει — αλλιώτικα.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-purple-500/15 shadow-lg shadow-purple-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="Τα τρία παιδιά μαζί" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-purple-300/80 italic">Το ίδιο δωμάτιο. Διαφορετικά παιδιά.</div>
          </div>
        </section>

        <!-- SCENE 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-violet-600/30 border border-violet-500/30 text-violet-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-violet-400 tracking-wide">Ο ΚΑΘΕΝΑΣ ΑΛΛΙΩΣ</h3>
          </div>
          <p>Η Αλεξάνδρα σήκωσε τις ζωγραφιές της από το τραπέζι. Αργά, σαν να κρατούσε κάτι εύθραυστο. Τις κοίταξε μια-μια. Οι πρώτες ήταν βιαστικές, γεμάτες ημιτελείς γραμμές. Αλλά οι τελευταίες ήταν αλλιώτικες. Είχαν βάθος. Είχαν <em>ψυχή</em>.</p>
          <p class="mt-3">«Παλιά βαριόμουν», είπε σιγά. «Βαριόμουν γιατί δεν τελείωνα τίποτα. Ξεκινούσα, χανόμουν, παρατούσα. Και μετά ένιωθα χειρότερα — σαν να χρωστούσα κάτι στον εαυτό μου.»</p>
          <p class="mt-3">Τα μάτια της γυάλισαν — όχι από δάκρυα. Από αναγνώριση.</p>
          <p class="mt-3 text-purple-200 font-medium">«Τώρα θέλω να τελειώνω ό,τι ξεκινάω. Ακόμα κι αν δεν είναι τέλειο. Γιατί αυτό που τελειώνεις σου ανήκει. Αυτό που αφήνεις στη μέση σε κυνηγάει.»</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-violet-500/15 shadow-lg shadow-violet-900/20">
            <img src="${IMG_ALEXANDRA}" alt="Αλεξάνδρα" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-violet-300/80 italic">Η Αλεξάνδρα κρατώντας τις ζωγραφιές της</div>
          </div>

          <p class="mt-6">Ο Φίλιππος κοίταξε τα χέρια του. Τα γύρισε, τα εξέτασε — τις γρατζουνιές, τα κομμάτια κόλλας, το μελάνι κάτω από τα νύχια. Αυτά τα χέρια που κάποτε μόνο χτυπούσαν και πετούσαν πράγματα, τώρα είχαν ιστορία. Κάθε σημάδι ήταν μάθημα.</p>
          <p class="mt-3">Έσφιξε ένα κομμάτι πλαστικού μεταξύ των δαχτύλων. Απαλά αυτή τη φορά. Κατάλαβε ότι η δύναμη δεν σημαίνει να σπας — σημαίνει να κρατάς χωρίς να τσακίζεις.</p>
          <p class="mt-3">«Δεν θυμώνω όπως πριν», είπε. «Σταματάω. Παίρνω ανάσα. Κοιτάζω τι πήγε στραβά. Και ξαναδοκιμάζω.»</p>
          <p class="mt-3 text-violet-200 font-medium">«Το θυμό τον κρατάω ακόμα. Αλλά τώρα τον χρησιμοποιώ σαν καύσιμο, όχι σαν βόμβα.»</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-purple-500/15 shadow-lg shadow-purple-900/20">
            <img src="${IMG_FILIPPOS}" alt="Φίλιππος" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-purple-300/80 italic">Ο Φίλιππος κοιτάζει τα χέρια του</div>
          </div>

          <p class="mt-6">Η Ελευθερία έκλεισε το τετράδιό της. Η πιο δραματική κίνηση που είχε κάνει ποτέ — γιατί η Ελευθερία ποτέ δεν έκλεινε τετράδια. Τα μάζευε, τα στοίβαζε, τα λάτρευε. Αλλά τώρα, το τετράδιο ήταν κλειστό. Και τα χέρια της ήταν ελεύθερα.</p>
          <p class="mt-3">«Δεν διαβάζω πια για να ξέρω», είπε με φωνή βαθιά και σταθερή. «Διαβάζω για να εφαρμόζω. Η γνώση χωρίς πράξη είναι φυλακή.»</p>
          <p class="mt-3 text-violet-200 font-medium">«Θέλω να ζω μέσα στον κόσμο. Με τα χέρια μου λερωμένα. Με τα λάθη μου ορατά.»</p>
          <p class="mt-4">Κοιτάχτηκαν. Τρεις κόσμοι τόσο διαφορετικοί που κάποτε φαίνονταν αδύνατον να συνυπάρξουν. Και χαμογέλασαν — ήσυχα, βαθιά, σαν ηλιοβασίλεμα που δεν βιάζεται να σβήσει.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Τρεις δρόμοι διαφορετικοί. Τρεις μεταμορφώσεις. Ένα κοινό σημείο: κανείς δεν περίμενε κάποιον άλλο να τους πει ποιοι είναι. Το ανακάλυψαν μόνοι τους — φτιάχνοντας.</p>
        </section>

        <!-- SCENE 3 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/30 text-purple-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-purple-300 tracking-wide">ΤΟ ΕΡΓΟ ΤΟΥΣ</h3>
          </div>
          <p>Στη μέση του τραπεζιού, ανάμεσα στα ρινίσματα και τις γόμες και τα κομμάτια καλωδίου, στεκόταν αυτό. Το <em>δικό τους</em> πράγμα. Δεν είχε όνομα ακόμα. Δεν χρειαζόταν.</p>
          <p class="mt-3">Δεν ήταν τέλειο. Καθόλου. Είχε λάθη — μια κόλληση που είχε στραβώσει, ένα χρώμα που είχε σταλάξει εκεί που δεν έπρεπε, μια βίδα που δεν ήταν αρκετά σφιγμένη. Είχε γρατζουνιές στις γωνίες, σαν πληγές που αφήνει ο αγώνας.</p>
          <p class="mt-3">Αλλά λειτουργούσε. <strong class="text-purple-200">Λειτουργούσε.</strong> Κάτι που δεν υπήρχε πριν από μερικές μέρες, τώρα στεκόταν μπροστά τους, ζωντανό, πραγματικό, <em>δικό τους</em>.</p>
          <p class="mt-3">Και τους έμοιαζε. Η φαντασία της Αλεξάνδρας φαινόταν στα χρώματα. Η δύναμη του Φίλιππου στη δομή. Η γνώση της Ελευθερίας στη λογική. Τρεις ψυχές, ένα έργο.</p>
          <p class="mt-4">— «Αυτό είμαστε», είπε ο Φίλιππος. Δεν ρώτησε. Δήλωσε. Σαν κάποιος που βρήκε τον δρόμο για το σπίτι.</p>
          <p class="mt-3">Η Αλεξάνδρα ακούμπησε το δάχτυλό της στη γωνία του έργου. Απαλά. «Αυτό είμαστε», επανέλαβε — με υπερηφάνεια που δεν ζητούσε επιβεβαίωση.</p>
          <p class="mt-3">Η Ελευθερία κούνησε το κεφάλι. Αργά. Τα μάτια της είπαν ό,τι τα λόγια δεν μπορούσαν: <em>«Αυτό αρκεί.»</em></p>
          <p class="mt-3 text-gray-400 text-sm italic">Το έργο δεν ήταν τέλειο. Αλλά ήταν αληθινό. Και αληθινό είναι πάντα σημαντικότερο από τέλειο.</p>
        </section>

        <!-- SCENE 4 — HIGHLIGHTED -->
        <section class="bg-gradient-to-br from-purple-900/30 via-violet-900/20 to-fuchsia-900/10 p-8 rounded-2xl border-l-4 border-purple-500 my-8 shadow-xl shadow-purple-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-fuchsia-600/30 border border-fuchsia-500/30 text-fuchsia-300 font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-fuchsia-400 tracking-wide">ΟΙ ΗΡΩΕΣ ΔΕΝ ΜΙΛΑΝΕ</h3>
          </div>
          <p>Ο αέρας άλλαξε πάλι. Εκείνη η γνώριμη αίσθηση — σαν η πραγματικότητα να παίρνει βαθιά ανάσα πριν αλλάξει σχήμα.</p>
          <p class="mt-3">Η WiseBot εμφανίστηκε. Αθόρυβα, όπως πάντα. Σαν σκιά που αποφάσισε να γίνει φως. Τα μεταλλικά της φτερά αντανακλούσαν τις τελευταίες ακτίνες, δημιουργώντας μοτίβα στους τοίχους — σαν αστερισμούς σε ουρανό που δεν υπάρχει σε κανέναν χάρτη.</p>
          <p class="mt-3">Δεν είπε τίποτα. Το φως στο στήθος της — εκείνο το βαθύ μωβ που πάλλονταν σαν καρδιά — άναψε απαλά, σταθερά. Ήταν η δική της γλώσσα. Η σιωπή ενός σοφού.</p>

          <div class="my-8 rounded-2xl overflow-hidden border border-fuchsia-500/20 shadow-2xl shadow-purple-900/30">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="Τα παιδιά με τη WiseBot" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-fuchsia-300/80 italic">Η WiseBot παρακολουθεί σιωπηλά</div>
          </div>

          <p class="mt-4">Η Link στεκόταν στη γωνία. Η τσάντα της κλειστή. Για πρώτη φορά δεν ψαχούλευε μέσα σε αυτήν.</p>
          <p class="mt-3">«Δεν χρειάζομαι άλλα καλώδια», είπε τρυφερά. «Τα εργαλεία ήταν πάντα μέσα σας. Εγώ απλώς σας βοήθησα να τα βρείτε. <strong class="text-fuchsia-300">Το κάνατε.</strong> Εσείς.»</p>
          <p class="mt-4">Ο Crocus χαμογέλασε — αργά σαν ανατολή. «Δεν σας έσπρωξα σήμερα. Κι όμως προχωρήσατε. Ο κινητήρας δεν είναι πια δικός μου — είναι δικός σας. Τρέχει με <em>θέληση</em>.»</p>
          <p class="mt-4 text-white text-lg">Ο Sparken κατέβηκε χαμηλά. Για πρώτη φορά. Εκείνος, ο δράκος που πάντα πετούσε ψηλά, που πάντα μιλούσε με φωνή βροντής — κατέβηκε. Ακούμπησε τα φτερά του στο πάτωμα. Κοίταξε τα παιδιά στα μάτια, στο ίδιο ύψος.</p>
          <p class="mt-3">Δεν μίλησε αμέσως. Σαν να ζύγιζε τις λέξεις. Σαν να ήξερε ότι αυτό που θα πει δεν μπορεί να ειπωθεί δύο φορές.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-purple-500/15 shadow-lg shadow-purple-900/20">
            <img src="${IMG_SPARKEN}" alt="Ο Sparken" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-purple-300/80 italic">Ο Sparken κατεβαίνει στο ύψος των παιδιών</div>
          </div>

          <p class="mt-4 text-gray-400 text-sm italic">Οι αληθινοί ήρωες δεν μιλάνε πολύ. Η μεγαλύτερη πράξη δεν είναι να βοηθήσεις κάποιον να φτάσει ψηλά. Είναι να κατέβεις εσύ χαμηλά για να τον κοιτάξεις στα μάτια.</p>
        </section>

        <!-- SCENE 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-violet-600/30 border border-violet-500/30 text-violet-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-violet-300 tracking-wide">Η ΕΡΩΤΗΣΗ</h3>
          </div>
          <p>Ο Sparken κοίταξε τα παιδιά. Τα μάτια του σάρωσαν κάθε πρόσωπο — τη μικρή ρυτίδα στο μέτωπο του Φίλιππου (εκεί που κάποτε μαζευόταν ο θυμός, τώρα μαζευόταν η συγκέντρωση), τα μάτια της Αλεξάνδρας (εκεί που κάποτε στεγνώνανε τα δάκρυα, τώρα λαμπύριζαν σπίθες), τα χέρια της Ελευθερίας (εκεί που κάποτε μόνο γύριζαν σελίδες, τώρα κρατούσαν εργαλεία).</p>
          <p class="mt-3">«Τι φτιάξατε;» ρώτησε. Απλά. Αλλά η ερώτηση δεν ήταν καθόλου απλή — ήταν βυθός θάλασσας που φαίνεται ρηχός από ψηλά αλλά δεν έχει τέλος.</p>
          <p class="mt-4">Η Αλεξάνδρα άνοιξε το στόμα. Ήθελε να πει «ένα ρομπότ». Αλλά κάτι βαθύτερο σταμάτησε τα λόγια. Ήξερε ότι η απάντηση δεν ήταν αυτό που βρισκόταν στο τραπέζι. Το έκλεισε.</p>
          <p class="mt-3">Ο Φίλιππος σκέφτηκε. «Κάτι για παιδιά», είπε. Αλλά κι εκείνος ένιωσε ότι η απάντηση ήταν μεγαλύτερη. Σαν ποτάμι που κρύβεται κάτω από τη γη.</p>
          <p class="mt-3">Η Ελευθερία κούνησε αργά το κεφάλι. «Όχι μόνο. Φτιάξαμε κάτι... για εμάς. Αλλά δεν νομίζω ότι αυτό ρωτάς πραγματικά.»</p>

          <div class="my-6 bg-gradient-to-r from-purple-900/40 to-violet-900/40 p-8 rounded-2xl border border-purple-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">Η WiseBot μίλησε ήρεμα, σαν νερό που αγγίζει βράχο:<br/><span class="text-purple-300 font-bold">«Φτιάξατε τον τρόπο που σκέφτεστε.»</span></p>
          </div>

          <p class="mt-4">Η πρόταση έπεσε σαν σταγόνα σε λίμνη. Αθόρυβα. Αλλά οι κυματισμοί πήγαν παντού. Τα παιδιά ένιωσαν κάτι να μετακινείται μέσα τους — σαν θεμέλιο που σταθεροποιείται.</p>
          <p class="mt-3">Δεν φτιάξατε αντικείμενο. Φτιάξατε <em>μυαλό</em>. Τρεις ανθρώπους που ξέρουν τι σημαίνει να δοκιμάζεις, να αποτυγχάνεις, και να μην σταματάς.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Αυτή είναι η αληθινή δημιουργία. Δεν είναι αυτό που βγάζεις από τα χέρια σου. Είναι αυτό που αφήνει η διαδικασία μέσα σου. Ο πηλός δεν αλλάζει μόνο σχήμα — αλλάζει και τα χέρια που τον πλάθουν.</p>
        </section>

        <!-- SCENE 6 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/30 text-purple-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-purple-300 tracking-wide">Η ΣΥΝΕΙΔΗΤΟΠΟΙΗΣΗ</h3>
          </div>
          <p>Δεν έγιναν μεγαλύτεροι σε ηλικία. Τα πρόσωπά τους τα ίδια, οι φωνές τους οι ίδιες. Αλλά κάτι μέσα τους είχε μεγαλώσει. Σαν ρίζα που μεγαλώνει στο σκοτάδι χωρίς κανείς να τη βλέπει, αλλά κρατάει όλο το δέντρο.</p>
          <p class="mt-3">Έγιναν μεγαλύτεροι <strong class="text-purple-200">μέσα</strong>. Εκεί που δεν φτάνει ο ζυγός. Εκεί που μόνο εσύ ξέρεις τι υπάρχει.</p>
          <p class="mt-3">Κατάλαβαν τέσσερα πράγματα που κάποιοι μεγάλοι δεν μαθαίνουν ποτέ:</p>
          <div class="mt-4 space-y-3">
            <div class="bg-purple-900/20 p-4 rounded-xl border border-purple-500/15">
              <p class="text-purple-200 font-bold">1. Δεν περιμένουν άδεια.</p>
              <p class="text-sm text-gray-300 mt-1">Δεν χρειάζεσαι κάποιον να πει «μπράβο» πριν ξεκινήσεις. Η άδεια βρίσκεται μέσα σου.</p>
            </div>
            <div class="bg-purple-900/20 p-4 rounded-xl border border-purple-500/15">
              <p class="text-violet-200 font-bold">2. Δεν φοβούνται το λάθος.</p>
              <p class="text-sm text-gray-300 mt-1">Το λάθος δεν είναι τέλος. Είναι δάσκαλος. Κάθε σπασμένο κομμάτι σου δείχνει πού να κοιτάξεις.</p>
            </div>
            <div class="bg-purple-900/20 p-4 rounded-xl border border-purple-500/15">
              <p class="text-fuchsia-200 font-bold">3. Δεν χρειάζονται χειροκρότημα.</p>
              <p class="text-sm text-gray-300 mt-1">Η ικανοποίηση δεν έρχεται από τους άλλους. Έρχεται από εσένα. «Αυτό το έκανα εγώ.»</p>
            </div>
            <div class="bg-purple-900/20 p-4 rounded-xl border border-purple-500/15">
              <p class="text-purple-200 font-bold">4. Χρειάζονται συνέχεια.</p>
              <p class="text-sm text-gray-300 mt-1">Η δημιουργία δεν τελειώνει ποτέ. Η ουσία δεν είναι το τέλος — είναι η συνέχεια.</p>
            </div>
          </div>
          <p class="mt-4 text-gray-400 text-sm italic">Τέσσερις αλήθειες. Τέσσερα κλειδιά. Κανείς δεν τους τα δίδαξε. Γεννήθηκαν μέσα τους — μέσα από δοκιμή, λάθος, συνεργασία, και τη σιωπή μετά τον αγώνα.</p>
        </section>

        <!-- SCENE 7 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-violet-600/30 border border-violet-500/30 text-violet-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-violet-400 tracking-wide">ΤΟ ΚΑΘΡΕΦΤΙΣΜΑ</h3>
          </div>
          <p>Η WiseBot γύρισε αργά προς τα παιδιά. Τα μεταλλικά φτερά της δεν αντανακλούσαν μόνο φως. Αντανακλούσαν <em>πρόσωπα</em>.</p>
          <p class="mt-3">Το πρόσωπό της — αυτό το λείο μεταλλικό πρόσωπο χωρίς στόμα, χωρίς ρυτίδες — ήταν καθρέφτης. Κυριολεκτικά. Η επιφάνεια γυάλισε σαν υγρό ασήμι και τα παιδιά είδαν μέσα τους εαυτούς τους. Αλλά δεν είδαν πρόσωπα, μαλλιά, μάτια. Είδαν κάτι βαθύτερο.</p>
          <p class="mt-4">Η Αλεξάνδρα είδε <strong class="text-purple-300">θάρρος</strong>. Χέρια που ζωγραφίζουν χωρίς δισταγμό. Μάτια που δεν φοβούνται να κοιτάξουν αυτό που δημιούργησαν.</p>
          <p class="mt-3">Ο Φίλιππος είδε <strong class="text-violet-300">επιμονή</strong>. Χέρια που μαζεύουν τα σπασμένα κομμάτια αντί να τα πετούν. Ένα πρόσωπο που γνωρίζει τη διαφορά ανάμεσα στο «δεν μπορώ» και στο «δεν μπορώ ακόμα».</p>
          <p class="mt-3">Η Ελευθερία είδε <strong class="text-fuchsia-300">καθαρότητα</strong>. Γνώση που δεν κάθεται σε σελίδες αλλά ζει σε πράξεις. Μυαλό που δεν αποθηκεύει μόνο — δημιουργεί.</p>

          <div class="my-6 rounded-2xl overflow-hidden border border-purple-500/15 shadow-lg shadow-purple-900/20">
            <img src="${IMG_KIDS_WISEBOT_2}" alt="Τα παιδιά και η WiseBot" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-purple-300/80 italic">Ο καθρέφτης δεν δείχνει πρόσωπα — δείχνει ψυχές</div>
          </div>

          <p class="mt-4">— «Δεν σας έδωσα απαντήσεις», είπε η WiseBot. Τρυφερά. Σαν μητέρα που αποχαιρετά γνωρίζοντας ότι τα παιδιά είναι έτοιμα. «Σας έμαθα να ρωτάτε. Και αυτός που ξέρει να ρωτά... δεν χρειάζεται ποτέ κάποιον να του δώσει απαντήσεις.»</p>
          <p class="mt-3">Τα μάτια της πάλλονταν πιο αργά τώρα. Σαν καρδιά που χτυπά ήρεμα γιατί ξέρει ότι η δουλειά τελείωσε.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Ο καλύτερος δάσκαλος δεν δίνει απαντήσεις. Μαθαίνει να ρωτάς τις σωστές ερωτήσεις. Οι απαντήσεις αλλάζουν — η ικανότητα να ρωτάς μένει για πάντα.</p>
        </section>

        <!-- SCENE 8 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/30 text-purple-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-purple-300 tracking-wide">ΤΟ ΗΣΥΧΟ ΤΕΛΟΣ</h3>
          </div>
          <p>Μάζεψαν το τραπέζι. Αργά. Ήσυχα. Κάθε κίνηση ήταν σκόπιμη, σαν ιεροτελεστία. Κάθε μολύβι στη θέση του. Ακόμα και τα σκουπίδια — ρινίσματα, κομματάκια κόλλας — μαζεύτηκαν σαν θησαυροί. Γιατί κάθε κομμάτι ήταν απόδειξη δουλειάς.</p>
          <p class="mt-3">Σαν τα παιδιά. Κομμάτια τους που πριν ήταν κολλημένα σε φόβους και αδράνεια, τώρα ελεύθερα να γίνουν ό,τι θέλουν.</p>
          <p class="mt-4">— «Τι κάνουμε τώρα;» ρώτησε ο Φίλιππος. Χωρίς αγωνία. Δεν ήταν η ερώτηση ενός παιδιού που βαριέται. Ήταν η ερώτηση ενός ανθρώπου που ξέρει ότι ο δρόμος δεν τελειώνει ποτέ — και χαίρεται γι' αυτό.</p>
          <p class="mt-3">Η Αλεξάνδρα χαμογέλασε. Ένα χαμόγελο που φώτιζε ολόκληρο το δωμάτιο. «Συνεχίζουμε.»</p>
          <p class="mt-3">Η Ελευθερία πρόσθεσε, με φωνή που τώρα είχε βάθος αντί κενό: «Και ό,τι φτιάξουμε μετά... θα μας φτιάχνει ξανά. Κάθε φορά λίγο αλλιώτικα. Κάθε φορά λίγο καλύτερα. Γιατί η δημιουργία δεν είναι κάτι που κάνεις — είναι κάτι που σε κάνει.»</p>
          <p class="mt-4 text-white font-bold text-lg">Ο Sparken άνοιξε τα φτερά του. Αργά. Μεγαλοπρεπώς. Σαν αυλαία που ανοίγει σε τελευταία πράξη. Γέμισαν τον χώρο με χρυσό φως.</p>
          <p class="mt-3 text-purple-300 font-bold text-xl">«Τώρα... μπορείτε να πετάξετε μόνοι σας.»</p>
          <p class="mt-4">Τα παιδιά δεν φοβήθηκαν. Δεν αμφέβαλαν. Για πρώτη φορά, δεν χρειάζονταν κάποιον να τους πει τι να κάνουν. Ήξεραν.</p>
          <p class="mt-3">Το δωμάτιο βυθίστηκε στο σούρουπο. Οι σκιές μάκρυναν. Αλλά κάτι αόρατο μέσα σε εκείνο το δωμάτιο λαμπύριζε. Δυνατά. Σταθερά. Χωρίς τέλος.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Κάθε τέλος είναι μια αρχή. Τα παιδιά που κάποτε βαριούνταν, τώρα είχαν κάτι πιο σπάνιο από ψυχαγωγία: είχαν σκοπό. Είχαν ταυτότητα. Είχαν τη γνώση ότι αυτό που φτιάχνεις, σε φτιάχνει.</p>
        </section>

        <!-- JOURNAL -->
        <div class="mt-14 bg-purple-950/60 p-8 rounded-3xl border-2 border-dashed border-purple-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-purple-300 uppercase tracking-wider">JOURNAL: Η ΤΑΥΤΟΤΗΤΑ ΜΟΥ</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Γράψε. Σκέψου. Νιώσε. Δεν υπάρχει λάθος απάντηση.</p>
          <div class="space-y-6 text-gray-300">
            <div class="bg-black/20 p-5 rounded-xl border border-purple-500/15">
              <h5 class="text-purple-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-purple-600/40 flex items-center justify-center text-xs font-black">1</span>
                💎 Η ΑΛΛΑΓΗ
              </h5>
              <p class="text-sm mb-3 opacity-80">Γράψε 2 πράγματα που άλλαξαν μέσα σου από τότε που ξεκίνησες. Πώς σκέφτεσαι διαφορετικά;</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-purple-500/20"></div>
            </div>
            <div class="bg-black/20 p-5 rounded-xl border border-purple-500/15">
              <h5 class="text-purple-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-purple-600/40 flex items-center justify-center text-xs font-black">2</span>
                💎 Η ΣΥΝΕΧΕΙΑ
              </h5>
              <p class="text-sm mb-3 opacity-80">Τι θέλεις να συνεχίσεις να φτιάχνεις ή να μαθαίνεις; Ποιο είναι το επόμενο βήμα;</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-purple-500/20"></div>
            </div>
            <div class="bg-black/20 p-5 rounded-xl border border-purple-500/15">
              <h5 class="text-purple-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-purple-600/40 flex items-center justify-center text-xs font-black">3</span>
                💎 Η ΔΗΛΩΣΗ
              </h5>
              <p class="text-sm mb-3 opacity-80">Συμπλήρωσε την πρόταση:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-purple-500/10 text-purple-200">
                <p class="text-sm font-medium">«Δεν είμαι απλά παιδί που παίζει.<br/>Είμαι άνθρωπος που __________»</p>
              </div>
            </div>
          </div>
        </div>

        <!-- MEANING BOX -->
        <div class="mt-10 bg-purple-950/80 p-6 rounded-2xl border border-purple-500/30 text-center">
          <span class="text-2xl">💎</span>
          <p class="mt-2 text-purple-200 font-bold text-lg">ΤΟ ΝΟΗΜΑ</p>
          <p class="text-gray-300 mt-2 leading-relaxed italic">Δεν φτιάχνεις πράγματα για να τελειώσουν. Φτιάχνεις πράγματα για να γίνεις. Κάθε κατασκευή, κάθε ζωγραφιά, κάθε ιδέα που παίρνει σχήμα — σε αλλάζει. Σε σμιλεύει. Σε κάνει αυτόν που δεν ήξερες ότι μπορείς να γίνεις. Αυτό που φτιάχνεις, σε φτιάχνει.</p>
        </div>

        <!-- PARENTS -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-purple-950/60 p-8 rounded-3xl border border-purple-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-purple-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              Το πιο σημαντικό δεν είναι τι έφτιαξε το παιδί. Είναι <strong class="text-purple-300">ποιος έγινε</strong> φτιάχνοντάς το. Ποιες δεξιότητες ανέπτυξε. Ποια εμπόδια ξεπέρασε. Ποιες αλήθειες ανακάλυψε.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Αν κρατήσει αυτή τη σχέση με τη δημιουργία — ότι τα εμπόδια δεν είναι αποτυχία αλλά ανάπτυξη — θα τη κουβαλά για πάντα. <strong class="text-white">Το έργο είναι η αφορμή. Το αληθινό δημιούργημα είναι το ίδιο το παιδί.</strong>
            </p>
            <div class="mt-4 bg-purple-900/20 p-4 rounded-xl border border-purple-500/10">
              <p class="text-sm text-purple-200 font-medium">💡 Δοκιμάστε σήμερα: Αντί να ρωτήσετε «Τι έφτιαξες;», ρωτήστε: «Τι έμαθες φτιάχνοντάς το;» Η απάντηση θα σας εκπλήξει.</p>
            </div>
          </div>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- OPENING QUOTE -->
        <div class="relative bg-gradient-to-r from-purple-900 via-purple-900/60 to-violet-900/40 p-10 rounded-2xl border border-purple-500/30 text-center shadow-lg shadow-purple-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Chapter 15</div>
          <p class="italic text-purple-200 text-xl mt-4 leading-relaxed">"Your work is the mirror of your mind.<br/>If you want to see who you are, look at what you made."</p>
          <div class="mt-4 w-16 h-0.5 bg-purple-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- SCENE 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/30 text-purple-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-purple-300 tracking-wide">IT WAS NO LONGER THE SAME</h3>
          </div>
          <p>The room was the same. Exactly. The table with its marks, the rings from cups nobody ever wiped away. The same pencils scattered like broken branches after a storm. The same papers, some crumpled, some written with letters nobody ever finished.</p>
          <p class="mt-3">But something had changed. Something invisible. Something you couldn't point to but felt on your skin, in the way the air moved through the shadows. As if someone had opened a window in a wall that never had one.</p>
          <p class="mt-3">Alexandra felt it. Something deep inside her had shifted, like a tectonic plate sliding silently beneath continents. She felt more <em>assembled</em> — as if the pieces of her had found their place. She looked at her hands. The same hands. But now she knew what they could do.</p>
          <p class="mt-3">Philippos saw it. The corners of the room seemed sharper. The broken pieces on the floor were no longer failure — they were evidence. Evidence that someone tried and didn't stop.</p>
          <p class="mt-3">Eleftheria knew it. Of course. But this time, for the first time in her life, she didn't feel the need to open a book. She understood it on her own. From within.</p>
          <p class="mt-4 text-white font-bold text-lg">It wasn't a game anymore. It was something of their own. Something that didn't exist before them.</p>
          <p class="mt-3">The sunset light gilded the edges of the table, touched their hands, their faces. And in that light, for a fraction of a second, they looked older. They looked like people who had been through something and come out the other side.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Creation doesn't just change what you make. It changes the one who makes. It takes you apart piece by piece, dissolves you, and rebuilds you — differently.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-purple-500/15 shadow-lg shadow-purple-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="The three children together" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-purple-300/80 italic">The same room. Different children.</div>
          </div>
        </section>

        <!-- SCENE 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-violet-600/30 border border-violet-500/30 text-violet-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-violet-400 tracking-wide">EVERYONE DIFFERENT</h3>
          </div>
          <p>Alexandra lifted her drawings from the table. Slowly, as if holding something fragile. She looked at them one by one. The first ones were rushed, full of unfinished lines. But the last ones were different. They had depth. They had <em>soul</em>.</p>
          <p class="mt-3">"I used to get bored," she said quietly. "I was bored because I never finished anything. I'd start, get lost, give up. And then I'd feel worse — like I owed something to myself."</p>
          <p class="mt-3">Her eyes gleamed — not from tears. From recognition.</p>
          <p class="mt-3 text-purple-200 font-medium">"Now I want to finish what I start. Even if it's not perfect. Because what you finish belongs to you. What you leave halfway haunts you."</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-violet-500/15 shadow-lg shadow-violet-900/20">
            <img src="${IMG_ALEXANDRA}" alt="Alexandra" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-violet-300/80 italic">Alexandra holding her drawings</div>
          </div>

          <p class="mt-6">Philippos looked at his hands. He turned them over, examined them — the scratches, the bits of glue, the ink under his nails. These hands that once only hit and threw things now had a story. Every mark was a lesson.</p>
          <p class="mt-3">He squeezed a plastic piece between his fingers. Gently this time. He understood that strength doesn't mean breaking — it means holding without crushing.</p>
          <p class="mt-3">"I don't get angry like before," he said. "I stop. I breathe. I look at what went wrong. And I try again."</p>
          <p class="mt-3 text-violet-200 font-medium">"I still keep the anger. But now I use it as fuel, not as a bomb."</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-purple-500/15 shadow-lg shadow-purple-900/20">
            <img src="${IMG_FILIPPOS}" alt="Philippos" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-purple-300/80 italic">Philippos looking at his hands</div>
          </div>

          <p class="mt-6">Eleftheria closed her notebook. Perhaps the most dramatic move she had ever made — because Eleftheria never closed notebooks. She collected them, stacked them, loved them. But now, the notebook was closed. And her hands were free.</p>
          <p class="mt-3">"I don't read to know anymore," she said, her voice deep and steady. "I read to apply. Knowledge without action is a prison."</p>
          <p class="mt-3 text-violet-200 font-medium">"I want to live in the world. With my hands dirty. With my mistakes visible."</p>
          <p class="mt-4">They looked at each other. Three worlds so different they once seemed impossible to coexist. And they smiled — quietly, deeply, like a sunset in no hurry to fade.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Three different paths. Three transformations. One common point: none of them waited for someone else to tell them who they are. They discovered it on their own — by making.</p>
        </section>

        <!-- SCENE 3 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/30 text-purple-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-purple-300 tracking-wide">THEIR WORK</h3>
          </div>
          <p>In the middle of the table, between the shavings and erasers and bits of wire, it stood. Their <em>own</em> thing. It didn't have a name yet. It didn't need one.</p>
          <p class="mt-3">It wasn't perfect. Not at all. It had mistakes — a glue joint gone crooked, a color that dripped where it shouldn't, a screw not tight enough. It had scratches on the corners, like wounds left by struggle.</p>
          <p class="mt-3">But it worked. <strong class="text-purple-200">It worked.</strong> Something that didn't exist a few days ago now stood before them, alive, real, <em>theirs</em>.</p>
          <p class="mt-3">And it looked like them. Alexandra's imagination showed in the colors. Philippos's strength showed in the structure. Eleftheria's knowledge showed in the logic. Three souls, one work.</p>
          <p class="mt-4">— "This is us," said Philippos. He didn't ask. He stated. Like someone who finally found the road home.</p>
          <p class="mt-3">Alexandra touched her finger to the edge. Gently. "This is us," she repeated — with pride that didn't ask for validation.</p>
          <p class="mt-3">Eleftheria nodded. Slowly. Her eyes said what words could not: <em>"This is enough."</em></p>
          <p class="mt-3 text-gray-400 text-sm italic">The work wasn't perfect. But it was real. And real is always more important than perfect.</p>
        </section>

        <!-- SCENE 4 — HIGHLIGHTED -->
        <section class="bg-gradient-to-br from-purple-900/30 via-violet-900/20 to-fuchsia-900/10 p-8 rounded-2xl border-l-4 border-purple-500 my-8 shadow-xl shadow-purple-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-fuchsia-600/30 border border-fuchsia-500/30 text-fuchsia-300 font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-fuchsia-400 tracking-wide">HEROES DON'T SPEAK</h3>
          </div>
          <p>The air shifted again. That familiar sensation — like reality taking a deep breath before changing shape.</p>
          <p class="mt-3">WiseBot appeared. Silently, as always. Like a shadow that decided to become light. Her metallic wings reflected the last rays, creating patterns on the walls — like constellations in a sky that exists on no map.</p>
          <p class="mt-3">She said nothing. The light on her chest — that deep purple that pulsed like a heartbeat — glowed softly, steadily. It was her own language. The silence of the wise.</p>

          <div class="my-8 rounded-2xl overflow-hidden border border-fuchsia-500/20 shadow-2xl shadow-purple-900/30">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="The children with WiseBot" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-fuchsia-300/80 italic">WiseBot watches in silence</div>
          </div>

          <p class="mt-4">Link stood in the corner. Her bag was closed. For the first time she wasn't rummaging inside it.</p>
          <p class="mt-3">"I don't need more cables," she said tenderly. "The tools were always inside you. I just helped you find them. <strong class="text-fuchsia-300">You did it.</strong> You."</p>
          <p class="mt-4">Crocus smiled — slow like a sunrise. "I didn't push you today. And yet you moved forward. The engine is no longer mine — it's yours. It runs on <em>will</em>."</p>
          <p class="mt-4 text-white text-lg">Sparken came down low. For the first time. He, the dragon who always flew high, who always spoke with a voice of thunder — came down. He rested his wings on the floor. Looked the children in the eyes, at the same height.</p>
          <p class="mt-3">He didn't speak immediately. As if weighing his words. As if knowing what he was about to say could not be said twice.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-purple-500/15 shadow-lg shadow-purple-900/20">
            <img src="${IMG_SPARKEN}" alt="Sparken" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-purple-300/80 italic">Sparken descends to the children's level</div>
          </div>

          <p class="mt-4 text-gray-400 text-sm italic">True heroes don't talk much. The greatest action isn't helping someone reach the top. It's coming down low to look them in the eyes.</p>
        </section>

        <!-- SCENE 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-violet-600/30 border border-violet-500/30 text-violet-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-violet-300 tracking-wide">THE QUESTION</h3>
          </div>
          <p>Sparken looked at the children. His eyes scanned each face — the small wrinkle on Philippos's forehead (where anger once gathered, now concentration gathered), Alexandra's eyes (where boredom tears once dried, now sparks glistened), Eleftheria's hands (where once only pages turned, now tools were held).</p>
          <p class="mt-3">"What did you make?" he asked. Simply. But the question was not simple — it was a sea floor that looks shallow from above but has no end.</p>
          <p class="mt-4">Alexandra opened her mouth. She wanted to say "a robot." But something deeper stopped the words. She knew the answer wasn't what sat on the table. She closed her mouth.</p>
          <p class="mt-3">Philippos thought. "Something for kids," he said. But even he felt the answer was bigger. Like a river hiding underground.</p>
          <p class="mt-3">Eleftheria slowly shook her head. "Not only. We made something... for us. But I don't think that's really what you're asking."</p>

          <div class="my-6 bg-gradient-to-r from-purple-900/40 to-violet-900/40 p-8 rounded-2xl border border-purple-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">WiseBot spoke calmly, like water touching rock:<br/><span class="text-purple-300 font-bold">"You built the way you think."</span></p>
          </div>

          <p class="mt-4">The sentence fell like a drop in a lake. Silently. But the ripples went everywhere. The children felt something shifting inside — like a foundation stabilizing.</p>
          <p class="mt-3">You didn't build an object. You built a <em>mind</em>. Three humans who know what it means to try, to fail, and to never stop.</p>
          <p class="mt-3 text-gray-400 text-sm italic">This is true creation. It's not what comes out of your hands. It's what the process leaves inside you. Clay doesn't just change shape — it changes the hands that shape it.</p>
        </section>

        <!-- SCENE 6 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/30 text-purple-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-purple-300 tracking-wide">THE REALIZATION</h3>
          </div>
          <p>They didn't grow older. Their faces the same, their voices the same. But something inside had grown. Like a root growing in darkness without anyone seeing it, but holding the entire tree.</p>
          <p class="mt-3">They grew bigger <strong class="text-purple-200">inside</strong>. Where the scale doesn't reach. Where only you know what exists.</p>
          <p class="mt-3">They understood four things that some adults never learn:</p>
          <div class="mt-4 space-y-3">
            <div class="bg-purple-900/20 p-4 rounded-xl border border-purple-500/15">
              <p class="text-purple-200 font-bold">1. They don't wait for permission.</p>
              <p class="text-sm text-gray-300 mt-1">You don't need someone to say "bravo" before you start. The permission is inside you.</p>
            </div>
            <div class="bg-purple-900/20 p-4 rounded-xl border border-purple-500/15">
              <p class="text-violet-200 font-bold">2. They don't fear mistakes.</p>
              <p class="text-sm text-gray-300 mt-1">A mistake is not the end. It's a teacher. Every broken piece shows you where to look next time.</p>
            </div>
            <div class="bg-purple-900/20 p-4 rounded-xl border border-purple-500/15">
              <p class="text-fuchsia-200 font-bold">3. They don't need applause.</p>
              <p class="text-sm text-gray-300 mt-1">Satisfaction doesn't come from others. It comes from you. "I did this."</p>
            </div>
            <div class="bg-purple-900/20 p-4 rounded-xl border border-purple-500/15">
              <p class="text-purple-200 font-bold">4. They need continuity.</p>
              <p class="text-sm text-gray-300 mt-1">Creation never ends. The point isn't the end — it's the continuation.</p>
            </div>
          </div>
          <p class="mt-4 text-gray-400 text-sm italic">Four truths. Four keys. Nobody taught them. They were born inside — through trial, error, collaboration, and the silence after the struggle.</p>
        </section>

        <!-- SCENE 7 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-violet-600/30 border border-violet-500/30 text-violet-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-violet-400 tracking-wide">THE REFLECTION</h3>
          </div>
          <p>WiseBot turned slowly toward the children. Her metallic wings didn't just reflect light. They reflected <em>faces</em>.</p>
          <p class="mt-3">Her face — that smooth metallic face with no mouth, no wrinkles — was a mirror. Literally. The surface gleamed like liquid silver and the children saw themselves. But they didn't see faces, hair, eyes. They saw something deeper.</p>
          <p class="mt-4">Alexandra saw <strong class="text-purple-300">courage</strong>. Hands that draw without hesitation. Eyes that aren't afraid to look at what they created.</p>
          <p class="mt-3">Philippos saw <strong class="text-violet-300">persistence</strong>. Hands that pick up broken pieces instead of throwing them. A face that knows the difference between "I can't" and "I can't yet."</p>
          <p class="mt-3">Eleftheria saw <strong class="text-fuchsia-300">clarity</strong>. Knowledge that doesn't sit in pages but lives in actions. A mind that doesn't just store — it creates.</p>

          <div class="my-6 rounded-2xl overflow-hidden border border-purple-500/15 shadow-lg shadow-purple-900/20">
            <img src="${IMG_KIDS_WISEBOT_2}" alt="The children and WiseBot" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-purple-300/80 italic">The mirror doesn't show faces — it shows souls</div>
          </div>

          <p class="mt-4">— "I didn't give you answers," said WiseBot. Tenderly. Like a mother saying goodbye knowing her children are ready. "I taught you to ask. And the one who knows how to ask... never needs anyone to give them answers."</p>
          <p class="mt-3">Her eyes pulsed more slowly now. Like a heart beating calmly because it knows the work is done.</p>
          <p class="mt-3 text-gray-400 text-sm italic">The best teacher doesn't give answers. They teach you to ask the right questions. Answers change — the ability to ask lasts forever.</p>
        </section>

        <!-- SCENE 8 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/30 text-purple-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-purple-300 tracking-wide">THE QUIET END</h3>
          </div>
          <p>They tidied the table. Slowly. Quietly. Every movement deliberate, like a ritual. Every pencil to its place. Even the scraps — shavings, bits of glue — were collected as if they were treasures. Because every bit was proof of work.</p>
          <p class="mt-3">Like the children. Parts of them that had been stuck to fears and inertia, now free to become whatever they wanted.</p>
          <p class="mt-4">— "What do we do now?" asked Philippos. Without anxiety. Not the question of a bored child. The question of a human who knows the road never ends — and is glad about it.</p>
          <p class="mt-3">Alexandra smiled. A smile that lit up the entire room. "We continue."</p>
          <p class="mt-3">Eleftheria added, with a voice that now had depth instead of emptiness: "And whatever we make next... will make us again. Each time a little different. Each time a little better. Because creation isn't something you do — it's something that does you."</p>
          <p class="mt-4 text-white font-bold text-lg">Sparken spread his wings. Slowly. Majestically. Like a curtain opening on the final act. They filled the space with golden light.</p>
          <p class="mt-3 text-purple-300 font-bold text-xl">"Now... you can fly on your own."</p>
          <p class="mt-4">The children were not afraid. They did not doubt. For the first time, they didn't need someone to tell them what to do. They knew.</p>
          <p class="mt-3">The room sank into dusk. The shadows lengthened. But something invisible inside that room glowed. Strongly. Steadily. Without end.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Every end is a beginning. The children who once were bored now had something far more rare than entertainment: they had purpose. They had identity. They had the knowledge that what you make, makes you.</p>
        </section>

        <!-- JOURNAL -->
        <div class="mt-14 bg-purple-950/60 p-8 rounded-3xl border-2 border-dashed border-purple-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-purple-300 uppercase tracking-wider">JOURNAL: MY IDENTITY</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Write. Think. Feel. There is no wrong answer.</p>
          <div class="space-y-6 text-gray-300">
            <div class="bg-black/20 p-5 rounded-xl border border-purple-500/15">
              <h5 class="text-purple-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-purple-600/40 flex items-center justify-center text-xs font-black">1</span>
                💎 THE CHANGE
              </h5>
              <p class="text-sm mb-3 opacity-80">Write 2 things that changed inside you since you started. How do you think differently?</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-purple-500/20"></div>
            </div>
            <div class="bg-black/20 p-5 rounded-xl border border-purple-500/15">
              <h5 class="text-purple-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-purple-600/40 flex items-center justify-center text-xs font-black">2</span>
                💎 THE CONTINUITY
              </h5>
              <p class="text-sm mb-3 opacity-80">What do you want to continue making or learning? What's the next step?</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-purple-500/20"></div>
            </div>
            <div class="bg-black/20 p-5 rounded-xl border border-purple-500/15">
              <h5 class="text-purple-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-purple-600/40 flex items-center justify-center text-xs font-black">3</span>
                💎 THE STATEMENT
              </h5>
              <p class="text-sm mb-3 opacity-80">Complete the sentence:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-purple-500/10 text-purple-200">
                <p class="text-sm font-medium">"I am not just a kid playing.<br/>I am a human who __________"</p>
              </div>
            </div>
          </div>
        </div>

        <!-- MEANING BOX -->
        <div class="mt-10 bg-purple-950/80 p-6 rounded-2xl border border-purple-500/30 text-center">
          <span class="text-2xl">💎</span>
          <p class="mt-2 text-purple-200 font-bold text-lg">THE MEANING</p>
          <p class="text-gray-300 mt-2 leading-relaxed italic">You don't make things to finish them. You make things to become. Every construction, every drawing, every idea that takes shape — changes you. Sculpts you. Makes you into someone you didn't know you could become. What you make, makes you.</p>
        </div>

        <!-- PARENTS -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-purple-950/60 p-8 rounded-3xl border border-purple-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-purple-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              The most important thing isn't what your child made. It's <strong class="text-purple-300">who they became</strong> making it. What skills they developed. What obstacles they overcame. What truths they discovered.
            </p>
            <p class="text-gray-300 leading-relaxed">
              If they keep this relationship with creation — that obstacles aren't failure but growth — they will carry it forever. <strong class="text-white">The project is the occasion. The true creation is the child itself.</strong>
            </p>
            <div class="mt-4 bg-purple-900/20 p-4 rounded-xl border border-purple-500/10">
              <p class="text-sm text-purple-200 font-medium">💡 Try today: Instead of asking "What did you make?", ask: "What did you learn by making it?" The answer will surprise you.</p>
            </div>
          </div>
        </div>

      </div>
    `
    }
  }
];
