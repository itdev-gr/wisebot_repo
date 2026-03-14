
import { Book } from '../types';

// ============================================================
// 📖 BOOK 4: ΤΟ ΣΧΕΔΙΟ ΠΟΥ ΔΕΝ ΔΟΥΛΕΥΕ / THE PLAN THAT DIDN'T WORK
// Hero: Link (το ποντίκι)
// Theme: ΥΛΟΠΟΙΗΣΗ / IMPLEMENTATION
// ============================================================

// Cover image
const IMG_LINK = "/images/link.jpg";

// Story images
const IMG_KIDS_WITH_LINK = "/images/paidia-kai-link.png";
const IMG_KIDS_TOGETHER = "/images/ta-3-paidia.png";

export const BOOK_4: Book[] = [
  {
    id: 4,
    title: { el: "ΤΟ ΣΧΕΔΙΟ ΠΟΥ ΔΕΝ ΔΟΥΛΕΥΕ", en: "THE PLAN THAT DIDN'T WORK" },
    theme: { el: "ΥΛΟΠΟΙΗΣΗ", en: "IMPLEMENTATION" },
    stepLabel: { el: "LINK & Η ΥΛΟΠΟΙΗΣΗ", en: "LINK & REALITY" },
    author: "Link",
    cover: IMG_LINK,
    videoUrl: "",
    description: {
      el: "Το σχέδιο ήταν τέλειο, αλλά αδύνατο. Η Link εμφανίζεται για να κάνει την ερώτηση που πονάει: «Ωραία όλα αυτά... αλλά με τι θα τα φτιάξετε;»",
      en: "The plan was perfect, but impossible. Link appears to ask the painful question: \"Nice... but what will you build it with?\""
    },
    meaning: {
      el: "Το σχέδιο που δεν γίνεται δεν σε πάει μπροστά. Το απλό που δουλεύει σε μαθαίνει τα πάντα.",
      en: "A plan that can't happen doesn't move you forward. A simple one that works teaches you everything."
    },
    xp: 140,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- ΕΙΣΑΓΩΓΙΚΟ QUOTE -->
        <div class="relative bg-gradient-to-r from-blue-900/80 via-indigo-900/60 to-slate-900/40 p-10 rounded-2xl border border-blue-500/30 text-center shadow-lg shadow-blue-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Κεφάλαιο 4</div>
          <p class="italic text-blue-200 text-xl mt-4 leading-relaxed">«Αν δεν μπορείτε να το φτιάξετε σήμερα,<br/>δεν είναι σχέδιο. Είναι όνειρο.»</p>
          <div class="mt-4 w-16 h-0.5 bg-blue-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- ΣΚΗΝΗ 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/30 text-blue-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-blue-400 tracking-wide">ΤΟ ΤΕΛΕΙΟ ΣΧΕΔΙΟ</h3>
          </div>
          <p>Το σχέδιο ήταν ωραίο. Όχι απλώς ωραίο. Ήταν <em>τέλειο</em>.</p>
          <p class="mt-3">Γραμμές ίσιες σαν σιδηρόδρομος σε χιονισμένη πεδιάδα. Κουτιά τακτοποιημένα σαν πλακάκια σε μωσαϊκό. Βέλη που έδειχναν παντού — κάθε ένα με ετικέτα, κάθε ένα με χρόνο, κάθε ένα με σκοπό.</p>
          <p class="mt-3">Ο Pencilo καμάρωνε. Τα μολύβια στην πλάτη του τρεμόπαιζαν από ικανοποίηση. «Αν το ακολουθήσουμε βήμα-βήμα, θα δουλέψει. Εγγύηση.»</p>
          <p class="mt-3">Ο Φίλιππος το κοίταξε με θαυμασμό. Τα μάτια του σάρωσαν τις γραμμές σαν εξερευνητής που βρίσκει χάρτη θησαυρού. «Φαίνεται επαγγελματικό», ψιθύρισε.</p>
          <p class="mt-3">Η Αλεξάνδρα χαμογέλασε — ένα χαμόγελο γεμάτο ελπίδα. Η Ελευθερία έγνεψε σιωπηλά, αλλά μέσα της κάτι τη χτύπησε. <em>Κάτι δε μου αρέσει. Αλλά τι;</em></p>
          <p class="mt-3">Ο Crocus… βαριόταν. Κούνησε το κεφάλι. «Ωραία. Πότε ξεκινάμε;»</p>
          <p class="mt-4 text-gray-400 text-sm italic">Προσοχή στα σχέδια που φαίνονται τέλεια. Συνήθως κρύβουν τους μεγαλύτερους γκρεμούς.</p>
        </section>

        <!-- ΣΚΗΝΗ 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-red-400 tracking-wide">Ο ΤΟΙΧΟΣ</h3>
          </div>
          <p>Ξεκίνησαν. Και για λίγο… όλα πήγαιναν καλά. Κάθε βήμα ταίριαζε με το σχέδιο. Κάθε κομμάτι έπεφτε στη θέση του σαν παζλ. Ο Pencilo σφύριζε χαμηλά, τα ρόλερ του κυλούσαν μπρος-πίσω πάνω στο τραπέζι.</p>
          <p class="mt-3">Μέχρι που ο Φίλιππος σταμάτησε.</p>
          <p class="mt-3">Η κίνηση πάγωσε στον αέρα. Τα χέρια του μισοκρατούσαν ένα κομμάτι. Κοίταξε το σχέδιο. Κοίταξε τα υλικά. Ξανακοίταξε το σχέδιο.</p>
          <p class="mt-3">— «Εεε… αυτό δεν το έχουμε.»</p>
          <p class="mt-3">Η Ελευθερία γύρισε στο σχέδιο. Τα μάτια της σάρωσαν τις γραμμές. «Χρειαζόμαστε αυτό το μοτέρ. Αλλά… δεν υπάρχει. Πουθενά.»</p>
          <p class="mt-3">Ο Crocus σήκωσε το φρύδι. Αργά. Βαριά. Σαν κάποιος που ήδη το περίμενε.</p>
          <p class="mt-3"><strong class="text-white text-lg">«Και πού θα τα βρούμε;»</strong></p>
          <p class="mt-3">Σιωπή. Το τέλειο σχέδιο δε μιλούσε πια. Στεκόταν εκεί, ωραίο κι αβοήθητο, σαν χάρτης για χώρα που δεν υπάρχει.</p>
          <p class="mt-4 text-gray-400 text-sm italic">Τα ωραιότερα σχέδια πέφτουν από τοίχους που ονομάζονται «πραγματικότητα».</p>
        </section>

        <!-- ΣΚΗΝΗ 3 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-600/30 border border-gray-500/30 text-gray-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-gray-400 tracking-wide">Η ΠΙΚΡΗ ΑΛΗΘΕΙΑ</h3>
          </div>
          <p>Άρχισαν να μετράνε. Χρόνο — δεν φτάνει. Λεφτά — δεν υπάρχουν. Υλικά — λείπουν τα μισά.</p>
          <p class="mt-3">Κάθε μέτρημα ήταν ένα μικρό τσίμπημα. Κι αν τα τσιμπήματα γίνουν αρκετά, γίνονται πληγή.</p>
          <p class="mt-3">— «Αυτό θέλει ειδικό εργαλείο», είπε ο Φίλιππος. Η φωνή του ήταν σαν πόρτα που κλείνει αργά.</p>
          <p class="mt-3">— «Κι αυτό… δεν γίνεται. Καθόλου.»</p>
          <p class="mt-4">Η Αλεξάνδρα κοίταξε τα σχέδια της. Ρεαλιστικές ζωγραφιές πάνω σε ένα μη ρεαλιστικό πλάνο. <em>Ένιωθε σαν να ζωγράφιζε σε σύννεφο.</em></p>
          <p class="mt-3">Ο Pencilo κοίταξε το σχέδιο ξανά. Τα γυαλιά του θόλωσαν — ή μήπως ήταν τα μάτια του; Ήταν ακόμα ωραίο. Τέλειο. Αλλά τέλειο σε ποιον κόσμο;</p>
          <p class="mt-3">Απλώς… <strong class="text-red-300">δεν γινόταν</strong>.</p>
          <p class="mt-4 text-gray-400 text-sm italic">Η αλήθεια δεν φωνάζει. Απλώς στέκεται μπροστά σου κι αρνείται να κουνηθεί.</p>
        </section>

        <!-- ΣΚΗΝΗ 4 — ΤΟ ΠΟΝΤΙΚΙ -->
        <section class="bg-gradient-to-br from-blue-900/30 via-indigo-900/20 to-slate-900/10 p-8 rounded-2xl border-l-8 border-blue-500 my-8 shadow-xl shadow-blue-900/20">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-blue-400/40 text-white font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-white tracking-wide">ΤΟ ΠΟΝΤΙΚΙ</h3>
          </div>
          <p>Ένα μικρό <em>κλικ</em> ακούστηκε. Σαν κλικ ποντικιού υπολογιστή. Αλλά δεν ήταν.</p>
          <p class="mt-3">Ήταν μια μικρή, μεταλλική πατούσα πάνω σε ξύλινο τραπέζι.</p>
          <p class="mt-3">Ένα <strong class="text-blue-300">ποντίκι</strong> στάθηκε εκεί. Μικρό. Γκρίζο-ασημί, σαν φτιαγμένο από κασσίτερο κι αστερόσκονη. Σακίδιο στην πλάτη — μαλακό, γεμάτο καλώδια, βύσματα και μικρά εργαλεία. Η ουρά της κατέληγε σε USB — λαμπερή, κυκλική, σαν κλειδί σε ψηφιακό κόσμο.</p>
          <p class="mt-3">Τα μάτια της ήταν μεγάλα. Ζεστά. Αλλά πίσω τους — σαν δεύτερη στρώση — κρυβόταν ακρίβεια. Λογική. Η ικανότητα να δει αυτό που οι άλλοι δεν θέλουν να δουν.</p>

          <!-- ΕΙΚΟΝΑ: KIDS + LINK -->
          <div class="my-8 rounded-2xl overflow-hidden border border-blue-500/20 shadow-2xl shadow-blue-900/30">
            <img src="${IMG_KIDS_WITH_LINK}" alt="Τα παιδιά συναντούν τη Link" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-blue-300/80 italic">Η Link έκανε την ερώτηση που κανείς δεν ήθελε να ακούσει</div>
          </div>

          <p class="mt-4 text-blue-300 font-bold text-lg">— «Να ρωτήσω κάτι; Αυτό… ποιος θα το φτιάξει;»</p>
          <p class="mt-3">Ο Crocus απάντησε αμέσως. «Εμείς.» Η φωνή του ήταν σίγουρη. Πάντα ήταν.</p>
          <p class="mt-3">Η Link χαμογέλασε. Ένα χαμόγελο μικρό, στραβό, γεμάτο κάτι που δεν ήταν κοροϊδία — ήταν αλήθεια.</p>
          <p class="mt-3 text-white font-bold text-xl">— «Με <em>τι</em>;»</p>
          <p class="mt-3">Δύο λέξεις. Κι αυτές οι δύο λέξεις έπεσαν πάνω στο τέλειο σχέδιο σαν σταγόνα σε χαρτί — και το χαρτί άρχισε να μουσκεύει.</p>
        </section>

        <!-- ΣΚΗΝΗ 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-600/30 border border-cyan-500/30 text-cyan-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-cyan-400 tracking-wide">Η ΚΡΙΤΙΚΗ ΠΟΥ ΠΟΝΑΕΙ</h3>
          </div>
          <p>Η Link πλησίασε το σχέδιο. Τα μάτια της σάρωσαν κάθε γραμμή — γρήγορα, ακριβά, αδυσώπητα. Ο δείκτης της ουράς-USB σταμάτησε σε σημεία του σχεδίου σαν νυστέρι σε ακτινογραφία.</p>
          <p class="mt-3">«Εδώ θέλετε πράγμα που δεν υπάρχει.»</p>
          <p class="mt-3">«Εδώ θέλετε μηχάνημα που δεν έχετε.»</p>
          <p class="mt-3">«Κι εδώ…» σταμάτησε. Κοίταξε τον Pencilo. <strong class="text-blue-200">«…τεχνολογία 2050.»</strong></p>
          <p class="mt-4">Ο Pencilo σφίχτηκε. Τα μολύβια στην πλάτη του τρίζαν — σαν δόντια που σφίγγονται. «Το σχέδιο είναι σωστό.»</p>
          <p class="mt-3">Η Link τον κοίταξε. Ήρεμα. Χωρίς κρίση, χωρίς κακία. Μόνο με εκείνη τη γαλήνη που έχουν μόνο αυτοί που ξέρουν τι σημαίνει <em>αλήθεια</em>.</p>
          <p class="mt-3"><strong class="text-blue-200 text-lg">«Σωστό για ποιον; Για σένα… ή για τον πραγματικό κόσμο;»</strong></p>
          <p class="mt-4 text-gray-400 text-sm italic">Η σωστή ερώτηση δεν σε πληγώνει. Σε ξυπνάει.</p>
        </section>

        <!-- ΣΚΗΝΗ 6 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-fuchsia-600/30 border border-fuchsia-500/30 text-fuchsia-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-fuchsia-400 tracking-wide">ΟΝΕΙΡΟ vs ΠΛΑΝΟ</h3>
          </div>
          <p>«Χωρίς όραμα δεν πας μπροστά!» είπε ο Pencilo. Η φωνή του ήταν σπασμένη — σαν κάποιος που υπερασπίζεται κάτι που ήδη ξέρει ότι χάνει.</p>
          <p class="mt-3">«Χωρίς πραγματικότητα δεν πας <em>πουθενά</em>!» απάντησε η Link. Η φωνή της ήταν ήρεμη, αλλά κάθε λέξη είχε βάρος τόνου.</p>
          <p class="mt-4">Η σιωπή μεταξύ τους ήταν παγωμένη. Σαν δύο ήπειροι που κοιτάζονται πάνω από ωκεανό.</p>
          <p class="mt-4">Η WiseBot εμφανίστηκε. Αθόρυβα. Σαν φεγγάρι που βγαίνει πίσω από σύννεφα.</p>
          <p class="mt-3 text-indigo-200 font-bold text-lg">— «Αν δεν μπορείτε να το φτιάξετε σήμερα, δεν είναι σχέδιο. Είναι όνειρο.»</p>
          <p class="mt-3">Ο Pencilo κατέβασε το βλέμμα. Τα ρόλερ του σταμάτησαν. Για πρώτη φορά, ο σκαντζόχοιρος του σχεδίου στεκόταν ακίνητος.</p>
          <p class="mt-3"><em>Μέσα του, κάτι ράγισε. Όχι σπάσιμο — αλλαγή. Η ρωγμή που αφήνει το φως να μπει μέσα.</em></p>
          <p class="mt-4 text-gray-400 text-sm italic">Δεν χάνεις όταν αλλάζεις σχέδιο. Χάνεις όταν αρνείσαι να δεις ότι πρέπει.</p>
        </section>

        <!-- ΣΚΗΝΗ 7 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-red-400 tracking-wide">ΤΟ ΣΒΗΣΙΜΟ</h3>
          </div>
          <p>Η Link πήρε ένα μολύβι. Ακούμπησε τη γόμα στο σχέδιο. Και… <strong>έσβησε</strong>.</p>
          <p class="mt-3">Όχι όλο. Έσβησε τα περιττά. Τα αδύνατα. Τα «θα ήταν ωραία». Τα «ίσως κάποτε». Τα «αν είχαμε».</p>
          <p class="mt-3">Κάθε κίνηση της γόμας συνοδευόταν από μια ερώτηση:</p>
          <p class="mt-3 text-blue-200">«Αυτό γίνεται;»</p>
          <p class="mt-2 text-blue-200">«Αυτό το έχουμε;»</p>
          <p class="mt-2 text-blue-200">«Αυτό το χρειαζόμαστε <em>τώρα</em>;»</p>
          <p class="mt-4">Το σχέδιο μίκρυνε. Χρώματα εξαφανίστηκαν. Γραμμές σβήστηκαν. Έγινε… <em>άσχημο</em>. Αδέξιο. Μικρό.</p>
          <p class="mt-3">Αλλά άρχισε να <strong class="text-blue-300">αναπνέει</strong>.</p>
          <p class="mt-3">Ο Φίλιππος κοίταξε αυτό που έμεινε. Λίγα κουτιά. Λίγα βέλη. Τίποτα εντυπωσιακό. Κι όμως… χαμογέλασε.</p>
          <p class="mt-3 text-blue-200 font-bold text-lg">«Αυτό μπορώ να το φτιάξω.»</p>
          <p class="mt-4 text-gray-400 text-sm italic">Η δύναμη δεν είναι να προσθέτεις. Είναι να αφαιρείς μέχρι να μείνει μόνο η αλήθεια.</p>
        </section>

        <!-- ΣΚΗΝΗ 8 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-white font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-white tracking-wide">Η ΠΡΩΤΗ ΑΛΗΘΕΙΑ</h3>
          </div>
          <p>Ο Pencilo κοίταξε το νέο σχέδιο. Τα μολύβια στην πλάτη του ήταν ακίνητα. Τα γυαλιά του θόλωσαν — ή ίσως τα μάτια του.</p>
          <p class="mt-3">Δεν του άρεσε. Δεν ήταν κομψό. Δεν ήταν «τέλειο». Αλλά… δούλευε.</p>
          <p class="mt-3 text-cyan-200 font-bold text-lg">«Το όμορφο μπορεί να περιμένει», είπε τελικά. Η φωνή του τρεμόπαιξε — σαν κάποιος που παραδέχεται κάτι για πρώτη φορά.</p>
          <p class="mt-3">Η Link έγνεψε. Τα μεγάλα μάτια της έλαμψαν — ήρεμα, σταθερά. Η ουρά-USB τρεμόπαιξε σαν κεραία που πιάνει σήμα.</p>
          <p class="mt-3"><strong class="text-blue-400 text-xl">«Το αληθινό — όχι.»</strong></p>
          <p class="mt-4 text-gray-400 text-sm italic">Η αλήθεια δεν είναι πάντα ωραία. Αλλά είναι η μόνη που χτίζει.</p>
        </section>

        <!-- ΣΚΗΝΗ 9 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-green-600/30 border border-green-500/30 text-green-300 font-black text-sm">09</span>
            <h3 class="text-2xl font-black text-green-400 tracking-wide">Η ΑΙΣΘΗΣΗ ΤΟΥ ΠΡΑΓΜΑΤΙΚΟΥ</h3>
          </div>
          <p>Έφτιαξαν κάτι.</p>
          <p class="mt-3">Μικρό. Ατελές. Στραβό σε μια γωνία. Με κόλλα που φαινόταν. Με κλωστή που κρεμόταν.</p>
          <p class="mt-3">Αλλά <strong>υπήρχε</strong>.</p>
          <p class="mt-3">Το κράτησαν στα χέρια τους. Η Αλεξάνδρα πρώτη — τα δάχτυλά της τρέμαν ελαφρά. Μετά ο Φίλιππος — τα μάτια του ήταν γεμάτα. Μετά η Ελευθερία — χαμογέλασε σιωπηλά, σαν κάποια που ήξερε εξαρχής ότι αυτό ήθελαν.</p>

          <!-- ΕΙΚΟΝΑ: KIDS TOGETHER -->
          <div class="my-8 rounded-2xl overflow-hidden border border-blue-500/20 shadow-2xl shadow-blue-900/30">
            <img src="${IMG_KIDS_TOGETHER}" alt="Τα τρία παιδιά κρατούν τη δημιουργία τους" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-blue-300/80 italic">Κάτι μικρό, ατελές — αλλά αληθινό</div>
          </div>

          <p class="mt-3">Η WiseBot πλησίασε. Το φως της ήταν ζεστό τώρα — σαν ήλιος σε πρωινό παράθυρο.</p>
          <p class="mt-3 text-indigo-200 font-bold text-lg">— «Τώρα μπήκατε στον κόσμο της δημιουργίας. Γιατί δημιουργία δεν είναι αυτό που φαντάζεσαι. Είναι αυτό που φτιάχνεις.»</p>
          <p class="mt-4 text-gray-400 text-sm italic">Ένα ατελές πράγμα στα χέρια σου αξίζει χίλια τέλεια στο μυαλό σου.</p>
        </section>

        <!-- JOURNAL -->
        <div class="mt-12 bg-blue-950/60 p-8 rounded-3xl border-2 border-dashed border-blue-500/40 shadow-xl">
          <h4 class="text-xl font-black text-blue-300 uppercase tracking-wider mb-6 flex items-center gap-2">
            📓 JOURNAL: ΤΟ ΚΑΝΩ ΑΛΗΘΙΝΟ
          </h4>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-blue-500/20">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-7 h-7 rounded-full bg-blue-600/40 flex items-center justify-center text-xs font-bold text-blue-200">1</span>
                <h5 class="text-blue-200 font-bold">ΤΟ ΠΕΡΙΠΛΟΚΟ</h5>
              </div>
              <p class="text-sm mb-3 opacity-80">Τι είναι πολύ δύσκολο ή ακριβό σε αυτό που σκέφτεσαι;</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-blue-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-blue-500/20">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-7 h-7 rounded-full bg-blue-600/40 flex items-center justify-center text-xs font-bold text-blue-200">2</span>
                <h5 class="text-blue-200 font-bold">Η ΑΠΛΟΠΟΙΗΣΗ</h5>
              </div>
              <p class="text-sm mb-3 opacity-80">Πώς μπορείς να το φτιάξεις πιο απλά; (Τι έχεις ήδη σπίτι;)</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-blue-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-blue-500/20">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-7 h-7 rounded-full bg-blue-600/40 flex items-center justify-center text-xs font-bold text-blue-200">3</span>
                <h5 class="text-blue-200 font-bold">Η ΔΕΣΜΕΥΣΗ</h5>
              </div>
              <p class="text-sm mb-3 opacity-80">Συμπλήρωσε:</p>
              <div class="bg-black/30 p-4 rounded-lg border border-blue-500/20">
                <p class="text-sm text-blue-200">«Δεν χρειάζομαι το τέλειο. Χρειάζομαι το __________»</p>
              </div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-blue-500/20">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-7 h-7 rounded-full bg-blue-600/40 flex items-center justify-center text-xs font-bold text-blue-200">4</span>
                <h5 class="text-blue-200 font-bold">ΤΟ ΜΑΘΗΜΑ ΤΗΣ LINK</h5>
              </div>
              <p class="text-sm mb-3 opacity-80">Γράψε ένα πράγμα που μπορείς να φτιάξεις ΣΗΜΕΡΑ με ό,τι έχεις:</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-blue-500/20"></div>
            </div>

          </div>
        </div>

        <!-- MEANING BOX -->
        <div class="mt-8 bg-gradient-to-br from-blue-950/80 to-indigo-950/60 p-8 rounded-3xl border border-blue-400/30 shadow-2xl">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-2xl">💎</span>
            <h4 class="text-xl font-black text-blue-300 uppercase tracking-wider">ΤΟ ΝΟΗΜΑ</h4>
          </div>
          <p class="text-gray-200 leading-relaxed text-lg">
            Το σχέδιο που δεν γίνεται δεν σε πάει μπροστά.<br/>
            Το <strong class="text-blue-300">απλό που δουλεύει</strong> σε μαθαίνει τα πάντα.<br/>
            <span class="text-blue-200 italic mt-2 block">Η δημιουργία δεν ζητά τελειότητα. Ζητά αλήθεια.</span>
          </p>
        </div>

        <!-- PARENTS MESSAGE -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-blue-950/60 p-8 rounded-3xl border border-blue-500/30 shadow-2xl relative">
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-blue-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
          </div>
          <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
            Η φαντασία χωρίς όρια απογοητεύει. Η φαντασία με πράξη χτίζει αυτοπεποίθηση. Όταν τα παιδιά μάθουν να <strong class="text-blue-300">απλοποιούν</strong> — να σβήνουν τα περιττά — μαθαίνουν να φέρνουν τα όνειρα στη ζωή.
          </p>
          <div class="mt-4 bg-blue-900/30 p-4 rounded-xl border border-blue-500/20">
            <p class="text-blue-200 font-bold text-sm flex items-center gap-2">💡 ΠΡΑΚΤΙΚΗ ΣΥΜΒΟΥΛΗ:</p>
            <p class="text-gray-300 text-sm mt-2">Όταν το παιδί πει «θέλω να φτιάξω κάτι», μην πείτε «δεν γίνεται». Ρωτήστε: <em>«Τι μπορούμε να φτιάξουμε σήμερα με ό,τι έχουμε;»</em> Η μικρή αρχή γεννά μεγάλη αυτοπεποίθηση.</p>
          </div>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- INTRO QUOTE -->
        <div class="relative bg-gradient-to-r from-blue-900/80 via-indigo-900/60 to-slate-900/40 p-10 rounded-2xl border border-blue-500/30 text-center shadow-lg shadow-blue-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Chapter 4</div>
          <p class="italic text-blue-200 text-xl mt-4 leading-relaxed">«If you can't build it today,<br/>it's not a plan. It's a dream.»</p>
          <div class="mt-4 w-16 h-0.5 bg-blue-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- SCENE 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/30 text-blue-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-blue-400 tracking-wide">THE PERFECT PLAN</h3>
          </div>
          <p>The plan was nice. Not just nice. It was <em>perfect</em>.</p>
          <p class="mt-3">Lines straight as a railroad on a snow-covered plain. Boxes arranged like tiles in a mosaic. Arrows pointing everywhere — each with a label, each with a timeline, each with a purpose.</p>
          <p class="mt-3">Pencilo beamed with pride. The pencils on his back trembled with satisfaction. "If we follow it step by step, it'll work. Guaranteed."</p>
          <p class="mt-3">Philippos looked at it with admiration. His eyes scanned the lines like an explorer finding a treasure map. "Looks professional," he whispered.</p>
          <p class="mt-3">Alexandra smiled — a smile full of hope. Eleftheria nodded silently, but inside something struck her. <em>Something doesn't feel right. But what?</em></p>
          <p class="mt-3">Crocus… was bored. He shook his head. "Great. When do we start?"</p>
          <p class="mt-4 text-gray-400 text-sm italic">Beware of plans that look perfect. They usually hide the biggest cliffs.</p>
        </section>

        <!-- SCENE 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-red-400 tracking-wide">THE WALL</h3>
          </div>
          <p>They started. And for a while… all good. Every step matched the plan. Every piece fell into place like a puzzle. Pencilo whistled softly, his skates rolling back and forth on the table.</p>
          <p class="mt-3">Until Philippos stopped.</p>
          <p class="mt-3">The motion froze mid-air. His hands half-held a piece. He looked at the plan. Looked at the materials. Looked back at the plan.</p>
          <p class="mt-3">— "Umm… we don't have this."</p>
          <p class="mt-3">Eleftheria turned to the plan. Her eyes scanned the lines. "We need this motor. But… it doesn't exist. Anywhere."</p>
          <p class="mt-3">Crocus raised an eyebrow. Slowly. Heavily. Like someone who already saw it coming.</p>
          <p class="mt-3"><strong class="text-white text-lg">"And where will we find them?"</strong></p>
          <p class="mt-3">Silence. The perfect plan wasn't talking anymore. It stood there, beautiful and helpless, like a map to a country that doesn't exist.</p>
          <p class="mt-4 text-gray-400 text-sm italic">The most beautiful plans crash into walls called "reality."</p>
        </section>

        <!-- SCENE 3 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-600/30 border border-gray-500/30 text-gray-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-gray-400 tracking-wide">THE BITTER TRUTH</h3>
          </div>
          <p>They started counting. Time — not enough. Money — none. Materials — half missing.</p>
          <p class="mt-3">Each count was a tiny sting. And if the stings add up enough, they become a wound.</p>
          <p class="mt-3">— "This needs a special tool," said Philippos. His voice was like a door closing slowly.</p>
          <p class="mt-3">— "And this… is impossible. At all."</p>
          <p class="mt-4">Alexandra looked at her drawings. Realistic paintings on an unrealistic plan. <em>She felt like she was painting on a cloud.</em></p>
          <p class="mt-3">Pencilo looked at the plan again. His glasses fogged up — or maybe it was his eyes. It was still beautiful. Perfect. But perfect in what world?</p>
          <p class="mt-3">It simply… <strong class="text-red-300">couldn't be done</strong>.</p>
          <p class="mt-4 text-gray-400 text-sm italic">Truth doesn't shout. It just stands in front of you and refuses to move.</p>
        </section>

        <!-- SCENE 4 — THE MOUSE -->
        <section class="bg-gradient-to-br from-blue-900/30 via-indigo-900/20 to-slate-900/10 p-8 rounded-2xl border-l-8 border-blue-500 my-8 shadow-xl shadow-blue-900/20">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-blue-400/40 text-white font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-white tracking-wide">THE MOUSE</h3>
          </div>
          <p>A small <em>click</em> was heard. Like a computer mouse click. But it wasn't.</p>
          <p class="mt-3">It was a tiny, metallic paw on a wooden table.</p>
          <p class="mt-3">A <strong class="text-blue-300">mouse</strong> stood there. Small. Silver-grey, as if made of tin and stardust. Backpack on her back — soft, full of cables, plugs, and small tools. Her tail ended in a USB — shiny, circular, like a key to a digital world.</p>
          <p class="mt-3">Her eyes were large. Warm. But behind them — like a second layer — precision hid. Logic. The ability to see what others don't want to see.</p>

          <!-- IMAGE: KIDS + LINK -->
          <div class="my-8 rounded-2xl overflow-hidden border border-blue-500/20 shadow-2xl shadow-blue-900/30">
            <img src="${IMG_KIDS_WITH_LINK}" alt="The kids meet Link" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-blue-300/80 italic">Link asked the question nobody wanted to hear</div>
          </div>

          <p class="mt-4 text-blue-300 font-bold text-lg">— "Can I ask something? This… who will build it?"</p>
          <p class="mt-3">Crocus answered immediately. "Us." His voice was confident. It always was.</p>
          <p class="mt-3">Link smiled. A small, crooked smile, full of something that wasn't mockery — it was truth.</p>
          <p class="mt-3 text-white font-bold text-xl">— "With <em>what</em>?"</p>
          <p class="mt-3">Two words. And those two words fell on the perfect plan like a drop on paper — and the paper began to soak.</p>
        </section>

        <!-- SCENE 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-600/30 border border-cyan-500/30 text-cyan-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-cyan-400 tracking-wide">THE CRITICISM THAT HURTS</h3>
          </div>
          <p>Link approached the plan. Her eyes scanned every line — fast, precise, merciless. Her USB-tail pointer stopped at spots on the plan like a scalpel on an X-ray.</p>
          <p class="mt-3">"Here you want something that doesn't exist."</p>
          <p class="mt-3">"Here you want a machine you don't have."</p>
          <p class="mt-3">"And here…" she paused. Looked at Pencilo. <strong class="text-blue-200">"…2050 technology."</strong></p>
          <p class="mt-4">Pencilo tensed. The pencils on his back creaked — like teeth clenching. "The plan is correct."</p>
          <p class="mt-3">Link looked at him. Calmly. Without judgment, without malice. Only with the serenity that belongs to those who know what <em>truth</em> means.</p>
          <p class="mt-3"><strong class="text-blue-200 text-lg">"Correct for whom? For you… or for the real world?"</strong></p>
          <p class="mt-4 text-gray-400 text-sm italic">The right question doesn't wound you. It wakes you up.</p>
        </section>

        <!-- SCENE 6 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-fuchsia-600/30 border border-fuchsia-500/30 text-fuchsia-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-fuchsia-400 tracking-wide">DREAM vs PLAN</h3>
          </div>
          <p>"Without vision you can't move forward!" said Pencilo. His voice was broken — like someone defending something they already know is losing.</p>
          <p class="mt-3">"Without reality you go <em>nowhere</em>!" replied Link. Her voice was calm, but every word weighed a ton.</p>
          <p class="mt-4">The silence between them was frozen. Like two continents staring at each other across an ocean.</p>
          <p class="mt-4">WiseBot appeared. Silently. Like a moon emerging from behind clouds.</p>
          <p class="mt-3 text-indigo-200 font-bold text-lg">— "If you can't build it today, it's not a plan. It's a dream."</p>
          <p class="mt-3">Pencilo lowered his gaze. His skates stopped. For the first time, the hedgehog of planning stood motionless.</p>
          <p class="mt-3"><em>Inside him, something cracked. Not a break — a change. The crack that lets light in.</em></p>
          <p class="mt-4 text-gray-400 text-sm italic">You don't lose when you change the plan. You lose when you refuse to see that you must.</p>
        </section>

        <!-- SCENE 7 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-red-400 tracking-wide">THE ERASING</h3>
          </div>
          <p>Link picked up a pencil. Pressed the eraser on the plan. And… <strong>erased</strong>.</p>
          <p class="mt-3">Not everything. She erased the unnecessary. The impossible. The "it would be nice." The "maybe someday." The "if only we had."</p>
          <p class="mt-3">Each eraser stroke came with a question:</p>
          <p class="mt-3 text-blue-200">"Is this possible?"</p>
          <p class="mt-2 text-blue-200">"Do we have this?"</p>
          <p class="mt-2 text-blue-200">"Do we need this <em>now</em>?"</p>
          <p class="mt-4">The plan shrank. Colors disappeared. Lines erased. It became… <em>ugly</em>. Clumsy. Small.</p>
          <p class="mt-3">But it started to <strong class="text-blue-300">breathe</strong>.</p>
          <p class="mt-3">Philippos looked at what remained. Few boxes. Few arrows. Nothing impressive. And yet… he smiled.</p>
          <p class="mt-3 text-blue-200 font-bold text-lg">"This I can build."</p>
          <p class="mt-4 text-gray-400 text-sm italic">Strength isn't adding more. It's removing until only truth remains.</p>
        </section>

        <!-- SCENE 8 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-white font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-white tracking-wide">THE FIRST TRUTH</h3>
          </div>
          <p>Pencilo looked at the new plan. The pencils on his back were still. His glasses fogged up — or maybe his eyes did.</p>
          <p class="mt-3">He didn't like it. It wasn't elegant. It wasn't "perfect." But… it worked.</p>
          <p class="mt-3 text-cyan-200 font-bold text-lg">"Beautiful can wait," he finally said. His voice trembled — like someone admitting something for the first time.</p>
          <p class="mt-3">Link nodded. Her large eyes gleamed — calm, steady. Her USB-tail flickered like an antenna catching a signal.</p>
          <p class="mt-3"><strong class="text-blue-400 text-xl">"Real — cannot."</strong></p>
          <p class="mt-4 text-gray-400 text-sm italic">Truth isn't always beautiful. But it's the only thing that builds.</p>
        </section>

        <!-- SCENE 9 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-green-600/30 border border-green-500/30 text-green-300 font-black text-sm">09</span>
            <h3 class="text-2xl font-black text-green-400 tracking-wide">THE SENSE OF REALITY</h3>
          </div>
          <p>They made something.</p>
          <p class="mt-3">Small. Imperfect. Crooked in one corner. With glue that showed. With string that dangled.</p>
          <p class="mt-3">But it <strong>existed</strong>.</p>
          <p class="mt-3">They held it in their hands. Alexandra first — her fingers trembled slightly. Then Philippos — his eyes were full. Then Eleftheria — she smiled silently, like someone who knew all along this was what they needed.</p>

          <!-- IMAGE: KIDS TOGETHER -->
          <div class="my-8 rounded-2xl overflow-hidden border border-blue-500/20 shadow-2xl shadow-blue-900/30">
            <img src="${IMG_KIDS_TOGETHER}" alt="The three kids holding their creation" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-blue-300/80 italic">Something small, imperfect — but real</div>
          </div>

          <p class="mt-3">WiseBot approached. Her light was warm now — like sun in a morning window.</p>
          <p class="mt-3 text-indigo-200 font-bold text-lg">— "Now you've entered the world of creation. Because creation isn't what you imagine. It's what you build."</p>
          <p class="mt-4 text-gray-400 text-sm italic">An imperfect thing in your hands is worth a thousand perfect ones in your mind.</p>
        </section>

        <!-- JOURNAL -->
        <div class="mt-12 bg-blue-950/60 p-8 rounded-3xl border-2 border-dashed border-blue-500/40 shadow-xl">
          <h4 class="text-xl font-black text-blue-300 uppercase tracking-wider mb-6 flex items-center gap-2">
            📓 JOURNAL: MAKING IT REAL
          </h4>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-blue-500/20">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-7 h-7 rounded-full bg-blue-600/40 flex items-center justify-center text-xs font-bold text-blue-200">1</span>
                <h5 class="text-blue-200 font-bold">THE COMPLEX</h5>
              </div>
              <p class="text-sm mb-3 opacity-80">What is too difficult or expensive in what you're thinking?</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-blue-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-blue-500/20">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-7 h-7 rounded-full bg-blue-600/40 flex items-center justify-center text-xs font-bold text-blue-200">2</span>
                <h5 class="text-blue-200 font-bold">THE SIMPLIFICATION</h5>
              </div>
              <p class="text-sm mb-3 opacity-80">How can you make it simpler? (What do you already have at home?)</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-blue-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-blue-500/20">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-7 h-7 rounded-full bg-blue-600/40 flex items-center justify-center text-xs font-bold text-blue-200">3</span>
                <h5 class="text-blue-200 font-bold">THE COMMITMENT</h5>
              </div>
              <p class="text-sm mb-3 opacity-80">Complete this:</p>
              <div class="bg-black/30 p-4 rounded-lg border border-blue-500/20">
                <p class="text-sm text-blue-200">"I don't need perfect. I need __________"</p>
              </div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-blue-500/20">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-7 h-7 rounded-full bg-blue-600/40 flex items-center justify-center text-xs font-bold text-blue-200">4</span>
                <h5 class="text-blue-200 font-bold">LINK'S LESSON</h5>
              </div>
              <p class="text-sm mb-3 opacity-80">Write one thing you can build TODAY with what you have:</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-blue-500/20"></div>
            </div>

          </div>
        </div>

        <!-- MEANING BOX -->
        <div class="mt-8 bg-gradient-to-br from-blue-950/80 to-indigo-950/60 p-8 rounded-3xl border border-blue-400/30 shadow-2xl">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-2xl">💎</span>
            <h4 class="text-xl font-black text-blue-300 uppercase tracking-wider">THE MEANING</h4>
          </div>
          <p class="text-gray-200 leading-relaxed text-lg">
            A plan that can't happen doesn't move you forward.<br/>
            The <strong class="text-blue-300">simple one that works</strong> teaches you everything.<br/>
            <span class="text-blue-200 italic mt-2 block">Creation doesn't ask for perfection. It asks for truth.</span>
          </p>
        </div>

        <!-- PARENTS MESSAGE -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-blue-950/60 p-8 rounded-3xl border border-blue-500/30 shadow-2xl relative">
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-blue-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
          </div>
          <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
            Imagination without limits disappoints. Imagination with action builds confidence. When children learn to <strong class="text-blue-300">simplify</strong> — to erase the unnecessary — they learn to bring dreams to life.
          </p>
          <div class="mt-4 bg-blue-900/30 p-4 rounded-xl border border-blue-500/20">
            <p class="text-blue-200 font-bold text-sm flex items-center gap-2">💡 PRACTICAL TIP:</p>
            <p class="text-gray-300 text-sm mt-2">When your child says "I want to build something," don't say "it can't be done." Ask: <em>"What can we build today with what we have?"</em> A small start creates big confidence.</p>
          </div>
        </div>

      </div>
    `
    }
  }
];
