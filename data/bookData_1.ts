
import { Book } from '../types';

// ============================================================
// 📖 BOOK 1: ΚΑΤΙ ΓΕΝΝΙΕΤΑΙ / SOMETHING IS BORN
// Hero: WiseBot (η κουκουβάγια)
// Theme: ΑΡΧΗ / THE START
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

export const BOOK_1: Book[] = [
  {
    id: 1,
    title: { el: "ΚΑΤΙ ΓΕΝΝΙΕΤΑΙ", en: "SOMETHING IS BORN" },
    theme: { el: "ΑΡΧΗ", en: "THE START" },
    stepLabel: { el: "WISEBOT & ΣΟΦΙΑ", en: "WISEBOT & WISDOM" },
    author: "Wisebot",
    cover: IMG_WISEBOT,
    videoUrl: "",
    description: {
      el: "Όλα ξεκινούν με βαρεμάρα και νεύρα. Μέχρι που εμφανίζεται η WiseBot και κάνει την ερώτηση που τα αλλάζει όλα.",
      en: "It all starts with boredom and frustration. Until WiseBot appears and asks the question that changes everything."
    },
    meaning: {
      el: "Κάθε μεγάλο πράγμα ξεκινά τη μέρα που παραδέχεσαι: «Έτσι όπως είναι, δεν μου φτάνει.»",
      en: "Every great thing starts the day you admit: 'The way things are is not enough.'"
    },
    xp: 100,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- ΕΙΣΑΓΩΓΙΚΟ QUOTE -->
        <div class="relative bg-gradient-to-r from-slate-900 via-indigo-900/60 to-purple-900/40 p-10 rounded-2xl border border-indigo-500/30 text-center shadow-lg shadow-indigo-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Κεφάλαιο 1</div>
          <p class="italic text-indigo-200 text-xl mt-4 leading-relaxed">«Όλες οι μεγάλες ιστορίες ξεκινούν τη μέρα<br/>που βαριέσαι αφόρητα.»</p>
          <div class="mt-4 w-16 h-0.5 bg-indigo-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- ΣΚΗΝΗ 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-indigo-300 tracking-wide">ΤΟ ΨΕΜΑΤΑΚΙ ΤΗΣ ΑΛΕΞΑΝΔΡΑΣ</h3>
          </div>
          <p>Το ρολόι στον τοίχο χτυπούσε αργά. <em>Τικ. Τοκ. Τικ. Τοκ.</em> Κάθε δευτερόλεπτο βαρύ σαν πέτρα.</p>
          <p class="mt-3">Η Αλεξάνδρα ήταν ξαπλωμένη στο πάτωμα, μπροστά σε ένα μισοτελειωμένο παζλ. Δεν το κοιτούσε καν. Κοιτούσε το ταβάνι. Μετρούσε τις ρωγμές. <em>Δεκατρείς.</em> Τις είχε μετρήσει ξανά χθες.</p>
          <p class="mt-3">Πόναγε το κεφάλι της — όχι από αρρώστια, αλλά από το τίποτα. Από τη μέρα που δεν είχε κανένα νόημα.</p>
          <p class="mt-4">— «Τελείωσες τελικά;» φώναξε ο Φίλιππος από το σαλόνι. Η φωνή του ακούστηκε μακρινή, σαν να ερχόταν από άλλο σπίτι.</p>
          <p class="mt-3 text-white font-medium">— «Ναι!» φώναξε εκείνη γρήγορα.</p>
          <p class="mt-3"><strong class="text-red-400">Ψέμα.</strong> Δεν το είχε ακουμπήσει ούτε μία φορά. Αλλά τα ψέματα βγαίνουν εύκολα όταν κανείς δεν νοιάζεται αρκετά να ελέγξει.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Και η Αλεξάνδρα δεν ήξερε ακόμα ότι αυτό ήταν το πρόβλημα. Όχι το ψέμα. Αλλά ότι κανείς — ούτε εκείνη — δεν περίμενε κάτι καλύτερο από τον εαυτό της.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-indigo-500/15 shadow-lg shadow-indigo-900/20">
            <img src="${IMG_ALEXANDRA}" alt="Αλεξάνδρα" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
          </div>
        </section>

        <!-- ΣΚΗΝΗ 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-red-400 tracking-wide">ΤΑ ΝΕΥΡΑ ΤΟΥ ΦΙΛΙΠΠΟΥ</h3>
          </div>
          <p>Στο διπλανό δωμάτιο, ο Φίλιππος είχε τα χέρια βουτηγμένα σε κομμάτια πλαστικού. Προσπαθούσε να φτιάξει κάτι. Κάτι που είχε δει σε βίντεο. Κάτι "εύκολο", είχε πει ο τύπος στο YouTube.</p>
          <p class="mt-3"><em>Εύκολο.</em> Σίγουρα.</p>
          <p class="mt-3">Ένα κομμάτι δεν έμπαινε. Το στρίφωξε. Το πίεσε. Το χτύπησε με την παλάμη.</p>
          <p class="mt-4 text-xl"><strong>«ΑΧΧΧ!»</strong></p>
          <p class="mt-2">Το πέταξε. Πέρασε ξυστά από το κεφάλι της Ελευθερίας. Χτύπησε στον τοίχο. <span class="text-red-400 font-bold text-lg">ΚΡΑΚ.</span> Δύο κομμάτια τώρα.</p>
          <p class="mt-4">— <strong class="text-white">«ΧΑΛΑΣ ΤΟ ΧΡΟΝΟ ΜΟΥ!»</strong> φώναξε στο πουθενά.</p>
          <p class="mt-3">Η αλήθεια; Ο χρόνος του δεν χαλούσε. Ο χρόνος του <em>έφευγε</em> — σιγά σιγά, χωρίς να τον ρωτήσει. Και ο Φίλιππος το ένιωθε αυτό στο στομάχι: ένα σφίξιμο που δεν μπορούσε να εξηγήσει. Ένα σφίξιμο που έλεγε: <strong class="text-red-300">«Κάνε κάτι. Οτιδήποτε. ΤΩΡΑ.»</strong></p>
          <p class="mt-3 text-gray-400 text-sm italic">Αλλά δεν ήξερε τι.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-red-500/15 shadow-lg shadow-red-900/20">
            <img src="${IMG_FILIPPOS}" alt="Φίλιππος" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
          </div>
        </section>

        <!-- ΣΚΗΝΗ 3 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/30 text-blue-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-blue-300 tracking-wide">ΤΟ ΒΙΒΛΙΟ #450</h3>
          </div>
          <p>Στη γωνία του δωματίου, κάτω από ένα φωτάκι που τρεμόπαιζε, η Ελευθερία καθόταν σταυροπόδι. Γύρω της, πύργοι από βιβλία. Σημειωματάρια. Χάρτες ιδεών με χρωματιστά βελάκια. Ένας κόσμος από γνώση, τακτοποιημένος σαν βιβλιοθήκη μουσείου.</p>
          <p class="mt-3">Διάβαζε. Ήταν το 450ό βιβλίο της πάνω σε κατασκευές. Ήξερε τη θεωρία τέλεια. Ήξερε πώς χτίζεται ένα σπίτι, πώς δουλεύει ένα ρομπότ, πώς φτιάχνεται ένα κύκλωμα.</p>
          <p class="mt-4">— «Δεν γίνεται έτσι», είπε ήρεμα στον Φίλιππο, χωρίς να σηκώσει τα μάτια από τη σελίδα.</p>
          <p class="mt-3">— «Εσύ ξέρεις μόνο να <em>διαβάζεις</em>!» της είπε εκείνος απότομα. Τα μάτια του γυάλιζαν από εκνευρισμό.</p>
          <p class="mt-3">Η Ελευθερία δεν μίλησε. Κατάπιε τη σάλια της. Γύρισε αργά τη σελίδα.</p>
          <p class="mt-3">Είχε δίκιο. Και το ήξερε. <strong class="text-blue-200">Ήξερε τα πάντα. Αλλά δεν είχε φτιάξει τίποτα. Ποτέ.</strong></p>
          <p class="mt-3 text-gray-400 text-sm italic">Η γνώση χωρίς πράξη μοιάζει με χάρτη που δεν τον ανοίγεις ποτέ. Υπάρχει — αλλά δεν σε πάει πουθενά.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-blue-500/15 shadow-lg shadow-blue-900/20">
            <img src="${IMG_ELEFTHERIA}" alt="Ελευθερία" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
          </div>
        </section>

        <!-- ΣΚΗΝΗ 4 — Η ΚΟΥΚΟΥΒΑΓΙΑ -->
        <section class="bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-fuchsia-900/10 p-8 rounded-2xl border-l-4 border-fuchsia-500 my-8 shadow-xl shadow-purple-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-fuchsia-600/30 border border-fuchsia-500/30 text-fuchsia-300 font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-fuchsia-400 tracking-wide">Η ΚΟΥΚΟΥΒΑΓΙΑ</h3>
          </div>
          <p>Κανείς δεν κατάλαβε πότε ακριβώς συνέβη.</p>
          <p class="mt-3">Ίσως ήταν μια στιγμή. Ίσως δευτερόλεπτα. Αλλά ο αέρας στο δωμάτιο <em>άλλαξε</em>. Έγινε πιο βαρύς. Πιο ζεστός. Σαν να μπήκε κάποιος αόρατος.</p>
          <p class="mt-3">Η Αλεξάνδρα σήκωσε το κεφάλι πρώτη. Στο παράθυρο — ανάμεσα στις σκιές — κάτι <strong class="text-fuchsia-300">λαμπύριζε</strong>.</p>
          <p class="mt-4">Μια μεταλλική κουκουβάγια. Μικρή. Κομψή. Με φτερά που έμοιαζαν χαραγμένα στο χέρι. Τα μάτια της — δύο μωβ κρύσταλλοι — <em>πάλλονταν</em> απαλά, σαν καρδιά.</p>

          <!-- ΕΙΚΟΝΑ: KIDS + WISEBOT -->
          <div class="my-8 rounded-2xl overflow-hidden border border-fuchsia-500/20 shadow-2xl shadow-purple-900/30">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="Τα παιδιά συναντούν τη WiseBot" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-fuchsia-300/80 italic">Η στιγμή που η WiseBot εμφανίστηκε στο παράθυρο</div>
          </div>

          <p class="mt-4 text-white text-lg">— «Ωραία παρέα», είπε.</p>
          <p class="mt-2">Η φωνή της ήταν ήρεμη. Σαν νερό που τρέχει πάνω σε πέτρες. Σαν αεράκι ξημερώματος. Ούτε κρύα, ούτε ζεστή. <em>Σοφή.</em></p>
          <p class="mt-4">«Ένας που σπάει ό,τι αγγίζει…» — κοίταξε τον Φίλιππο.</p>
          <p class="mt-2">«Μία που λέει ψέματα ακόμα και στον εαυτό της…» — γύρισε στην Αλεξάνδρα.</p>
          <p class="mt-2">«Και μία που ξέρει τα πάντα αλλά ζει μέσα σε σελίδες…» — η ματιά της ακούμπησε την Ελευθερία.</p>
          <p class="mt-4">Τα παιδιά πάγωσαν. Ο Φίλιππος έκανε ένα βήμα πίσω. Η Αλεξάνδρα κράτησε την ανάσα της.</p>
          <p class="mt-3">«Ποια… ποια είσαι;» ρώτησε η Ελευθερία. Για πρώτη φορά, η φωνή της έτρεμε.</p>
          <p class="mt-4 text-fuchsia-300 font-bold text-xl">— «Με λένε WiseBot. Και ήρθα γιατί βαριέστε.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Αλλά δεν ήρθε επειδή βαριούνταν. Ήρθε επειδή κάπου, βαθιά μέσα τους, κάτι ήταν έτοιμο να ξυπνήσει.</p>
        </section>

        <!-- ΣΚΗΝΗ 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-indigo-300 tracking-wide">Η ΕΡΩΤΗΣΗ</h3>
          </div>
          <p>Η WiseBot δεν μπήκε μέσα. <em>Πέταξε.</em> Σιγά. Αθόρυβα. Σαν σκιά με φτερά. Ακούμπησε στη μέση του τραπεζιού, ανάμεσα στα σπασμένα κομμάτια και τα ξεχασμένα βιβλία.</p>
          <p class="mt-3">Δεν τους μάλωσε. Δεν τους κοίταξε καν αυστηρά. Απλά τους <em>είδε</em>. Και αυτό ήταν χειρότερο. Γιατί κανείς δεν τους είχε κοιτάξει πραγματικά εδώ και πολύ καιρό.</p>
          <p class="mt-4">Τα μάτια της έλαμψαν πιο δυνατά. Μωβ φως γέμισε τις σκιές του δωματίου.</p>

          <div class="my-6 bg-gradient-to-r from-indigo-900/40 to-purple-900/40 p-8 rounded-2xl border border-indigo-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">«Αν δεν φοβόσασταν ότι θα αποτύχετε…<br/><span class="text-indigo-300">τι θα φτιάχνατε ΣΗΜΕΡΑ;</span>»</p>
          </div>

          <p class="mt-4">Η ερώτηση έμεινε στον αέρα. Βαριά. Ζωντανή. Σαν κάτι που χτυπάει στην πόρτα και δεν φεύγει.</p>
          <p class="mt-3">Ο Φίλιππος ένιωσε ένα τσίμπημα στο στήθος. Η Αλεξάνδρα ένιωσε τα μάτια της να καίνε. Η Ελευθερία — για πρώτη φορά — <em>έκλεισε το βιβλίο</em>.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Κάποιες ερωτήσεις δεν θέλουν απάντηση αμέσως. Θέλουν να μπουν μέσα σου. Να κάτσουν εκεί. Να σε αλλάξουν πριν καν μιλήσεις.</p>
        </section>

        <!-- ΣΚΗΝΗ 6 — Η ΣΠΙΘΑ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-amber-400 tracking-wide">Η ΣΠΙΘΑ</h3>
          </div>
          <p>Πέρασαν λεπτά. Ίσως περισσότερα. Κανείς δεν μέτρησε.</p>
          <p class="mt-3">Ο Φίλιππος κοίταξε τα σπασμένα κομμάτια στο πάτωμα. Αυτή τη φορά δεν θύμωσε. Τα κοίταξε σαν να τα έβλεπε <em>για πρώτη φορά</em>.</p>
          <p class="mt-3 text-amber-200 font-medium">«Ένα ρομπότ», ψιθύρισε. Τόσο σιγά που μόλις ακούστηκε.</p>
          <p class="mt-4">Η Αλεξάνδρα σήκωσε αργά το κεφάλι. Τα μάτια της γυάλιζαν. Όχι από δάκρυα. Από κάτι άλλο.</p>
          <p class="mt-2 text-amber-200 font-medium">«Που να πετάει», είπε.</p>
          <p class="mt-4">Η Ελευθερία κοίταξε τα χέρια της. Τα χέρια που μόνο γύριζαν σελίδες. Τα έσφιξε. Τα άνοιξε ξανά.</p>
          <p class="mt-2 text-amber-200 font-medium">«Και να μιλάει.»</p>

          <div class="mt-6 bg-gradient-to-r from-amber-900/30 to-orange-900/20 p-6 rounded-xl border border-amber-500/20">
            <p class="text-white text-lg">Η WiseBot δεν χαμογέλασε — δεν είχε στόμα. Αλλά τα μάτια της έγιναν πιο φωτεινά. Πιο ζεστά. Σαν ήλιος που ανατέλλει αργά.</p>
            <p class="mt-3 text-amber-300 font-bold text-xl">«Τότε ξεκινάμε.»</p>
          </div>

          <!-- ΕΙΚΟΝΑ: KIDS TOGETHER -->
          <div class="mt-6 rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl shadow-amber-900/20">
            <img src="${IMG_KIDS_WISEBOT_2}" alt="Τα παιδιά ξεκινούν μαζί με τη WiseBot" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-amber-300/80 italic">Η σπίθα άναψε. Το ταξίδι ξεκίνησε.</div>
          </div>

          <p class="mt-4 text-gray-400 text-sm italic">Τρεις λέξεις. Τρία παιδιά. Μία στιγμή. Αυτό ήταν αρκετό. Γιατί η δημιουργία δεν ξεκινά με υλικά ή σχέδια. Ξεκινά με μια σπίθα — και τρία "ΝΑΙ" που κανείς δεν περίμενε.</p>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-indigo-950/60 p-8 rounded-3xl border-2 border-dashed border-indigo-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-indigo-300 uppercase tracking-wider">JOURNAL: Η ΔΙΚΗ ΜΟΥ ΣΠΙΘΑ</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Γράψε. Σκέψου. Νιώσε. Δεν υπάρχει λάθος απάντηση.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-indigo-500/15">
              <h5 class="text-indigo-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-indigo-600/40 flex items-center justify-center text-xs font-black">1</span>
                Η ΒΑΡΕΜΑΡΑ
              </h5>
              <p class="text-sm mb-3 opacity-80">Τι σε κάνει να βαριέσαι πιο πολύ απ' όλα; Πότε νιώθεις ότι ο χρόνος δεν περνάει;</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-indigo-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-indigo-500/15">
              <h5 class="text-indigo-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-indigo-600/40 flex items-center justify-center text-xs font-black">2</span>
                Η ΦΑΝΤΑΣΙΑ
              </h5>
              <p class="text-sm mb-3 opacity-80">Αν είχες μαγικά υλικά και απεριόριστο χρόνο, τι θα έφτιαχνες αυτή τη στιγμή;</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-indigo-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-indigo-500/15">
              <h5 class="text-indigo-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-indigo-600/40 flex items-center justify-center text-xs font-black">3</span>
                Η ΑΠΟΦΑΣΗ
              </h5>
              <p class="text-sm mb-3 opacity-80">Συμπλήρωσε την πρόταση:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-indigo-500/10 text-indigo-200">
                <p class="text-sm font-medium">«Σήμερα σταματάω να βαριέμαι και λέω ΝΑΙ στο: __________»</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΝΟΗΜΑ / MEANING BOX -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 p-6 rounded-2xl border border-purple-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-purple-300 uppercase tracking-wider">Το νόημα αυτού του κεφαλαίου</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            Η βαρεμάρα δεν είναι εχθρός. Είναι <strong class="text-purple-300">σήμα</strong>. Σου λέει: «Ψάχνεις κάτι. Δεν το έχεις βρει ακόμα.» Η WiseBot δεν έδωσε λύση. Έδωσε <strong class="text-indigo-300">ερώτηση</strong>. Και μια καλή ερώτηση αξίζει περισσότερο από χίλιες απαντήσεις.
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
              Όταν ένα παιδί λέει <strong class="text-white">"βαριέμαι"</strong>, στην πραγματικότητα λέει <em>"ψάχνω πρόκληση που αξίζει τον χρόνο μου"</em>.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Η WiseBot δεν τους είπε τι να κάνουν. Δεν τους μάλωσε. Δεν τους κήρυξε. Τους έκανε μια <strong class="text-indigo-300">ερώτηση</strong>. Αυτό αρκεί για να ανάψει η μηχανή.
            </p>
            <div class="mt-4 bg-indigo-900/20 p-4 rounded-xl border border-indigo-500/10">
              <p class="text-sm text-indigo-200 font-medium">💡 Δοκιμάστε σήμερα: Αντί να πείτε "κάνε κάτι", ρωτήστε: «Αν μπορούσες να φτιάξεις οτιδήποτε, τι θα ήταν;»</p>
            </div>
          </div>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- INTRO QUOTE -->
        <div class="relative bg-gradient-to-r from-slate-900 via-indigo-900/60 to-purple-900/40 p-10 rounded-2xl border border-indigo-500/30 text-center shadow-lg shadow-indigo-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Chapter 1</div>
          <p class="italic text-indigo-200 text-xl mt-4 leading-relaxed">"All great stories begin on a day<br/>when you are incredibly bored."</p>
          <div class="mt-4 w-16 h-0.5 bg-indigo-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- SCENE 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-indigo-300 tracking-wide">ALEXANDRA'S LITTLE LIE</h3>
          </div>
          <p>The clock on the wall ticked slowly. <em>Tick. Tock. Tick. Tock.</em> Each second heavy as a stone.</p>
          <p class="mt-3">Alexandra lay on the floor, in front of a half-finished puzzle. She wasn't even looking at it. She was staring at the ceiling. Counting the cracks. <em>Thirteen.</em> She had counted them again yesterday.</p>
          <p class="mt-3">Her head hurt — not from illness, but from nothingness. From a day that had no meaning.</p>
          <p class="mt-4">— "Did you finish it?" shouted Philippos from the living room. His voice sounded distant, as if coming from another house.</p>
          <p class="mt-3 text-white font-medium">— "Yes!" she shouted back quickly.</p>
          <p class="mt-3"><strong class="text-red-400">A lie.</strong> She hadn't touched it once. But lies come easy when no one cares enough to check.</p>
          <p class="mt-3 text-gray-400 text-sm italic">And Alexandra didn't know yet that this was the problem. Not the lie. But the fact that no one — not even herself — expected anything better.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-indigo-500/15 shadow-lg shadow-indigo-900/20">
            <img src="${IMG_ALEXANDRA}" alt="Alexandra" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
          </div>
        </section>

        <!-- SCENE 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-red-400 tracking-wide">PHILIPPOS'S NERVES</h3>
          </div>
          <p>In the next room, Philippos had his hands buried in plastic parts. He was trying to build something. Something he had seen in a video. Something "easy," the guy on YouTube had said.</p>
          <p class="mt-3"><em>Easy.</em> Sure.</p>
          <p class="mt-3">A piece wouldn't fit. He twisted it. Pressed it. Hit it with his palm.</p>
          <p class="mt-4 text-xl"><strong>"ARGH!"</strong></p>
          <p class="mt-2">He threw it. It flew past Eleftheria's head. Hit the wall. <span class="text-red-400 font-bold text-lg">CRACK.</span> Two pieces now.</p>
          <p class="mt-4">— <strong class="text-white">"YOU'RE WASTING MY TIME!"</strong> he yelled at nothing.</p>
          <p class="mt-3">The truth? His time wasn't being wasted. His time was <em>slipping away</em> — slowly, without asking permission. And Philippos felt it in his stomach: a tightening he couldn't explain. A tightening that said: <strong class="text-red-300">"Do something. Anything. NOW."</strong></p>
          <p class="mt-3 text-gray-400 text-sm italic">But he didn't know what.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-red-500/15 shadow-lg shadow-red-900/20">
            <img src="${IMG_FILIPPOS}" alt="Philippos" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
          </div>
        </section>

        <!-- SCENE 3 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/30 text-blue-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-blue-300 tracking-wide">BOOK #450</h3>
          </div>
          <p>In the corner of the room, under a flickering light, Eleftheria sat cross-legged. Around her, towers of books. Notebooks. Idea maps with colorful arrows. A world of knowledge, organized like a museum library.</p>
          <p class="mt-3">She was reading. It was her 450th book on building things. She knew the theory perfectly. She knew how to construct a house, how a robot works, how to wire a circuit.</p>
          <p class="mt-4">— "That's not how it works," she said calmly to Philippos, without lifting her eyes from the page.</p>
          <p class="mt-3">— "You only know how to <em>read</em>!" he snapped back. His eyes were bright with frustration.</p>
          <p class="mt-3">Eleftheria didn't speak. She swallowed. Slowly turned the page.</p>
          <p class="mt-3">He was right. And she knew it. <strong class="text-blue-200">She knew everything. But she had never built anything. Ever.</strong></p>
          <p class="mt-3 text-gray-400 text-sm italic">Knowledge without action is like a map you never unfold. It exists — but it takes you nowhere.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-blue-500/15 shadow-lg shadow-blue-900/20">
            <img src="${IMG_ELEFTHERIA}" alt="Eleftheria" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
          </div>
        </section>

        <!-- SCENE 4 — THE OWL -->
        <section class="bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-fuchsia-900/10 p-8 rounded-2xl border-l-4 border-fuchsia-500 my-8 shadow-xl shadow-purple-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-fuchsia-600/30 border border-fuchsia-500/30 text-fuchsia-300 font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-fuchsia-400 tracking-wide">THE OWL</h3>
          </div>
          <p>No one noticed exactly when it happened.</p>
          <p class="mt-3">Maybe it was a moment. Maybe seconds. But the air in the room <em>shifted</em>. It became heavier. Warmer. As if someone invisible had walked in.</p>
          <p class="mt-3">Alexandra raised her head first. In the window — between the shadows — something <strong class="text-fuchsia-300">shimmered</strong>.</p>
          <p class="mt-4">A metallic owl. Small. Elegant. With wings that seemed hand-carved. Her eyes — two purple crystals — <em>pulsed</em> softly, like a heartbeat.</p>

          <!-- IMAGE: KIDS + WISEBOT -->
          <div class="my-8 rounded-2xl overflow-hidden border border-fuchsia-500/20 shadow-2xl shadow-purple-900/30">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="The children meet WiseBot" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-fuchsia-300/80 italic">The moment WiseBot appeared at the window</div>
          </div>

          <p class="mt-4 text-white text-lg">— "Nice company," she said.</p>
          <p class="mt-2">Her voice was calm. Like water running over stones. Like a dawn breeze. Neither cold nor warm. <em>Wise.</em></p>
          <p class="mt-4">"One who breaks everything he touches…" — she looked at Philippos.</p>
          <p class="mt-2">"One who lies even to herself…" — she turned to Alexandra.</p>
          <p class="mt-2">"And one who knows everything but lives inside pages…" — her gaze landed on Eleftheria.</p>
          <p class="mt-4">The children froze. Philippos took a step back. Alexandra held her breath.</p>
          <p class="mt-3">"Who… who are you?" asked Eleftheria. For the first time, her voice trembled.</p>
          <p class="mt-4 text-fuchsia-300 font-bold text-xl">— "I am WiseBot. And I came because you are bored."</p>
          <p class="mt-3 text-gray-400 text-sm italic">But she didn't come because they were bored. She came because somewhere, deep inside them, something was ready to wake up.</p>
        </section>

        <!-- SCENE 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-indigo-300 tracking-wide">THE QUESTION</h3>
          </div>
          <p>WiseBot didn't walk in. She <em>flew</em>. Slowly. Silently. Like a shadow with wings. She landed in the middle of the table, between the broken pieces and forgotten books.</p>
          <p class="mt-3">She didn't scold them. She didn't even look stern. She simply <em>saw</em> them. And that was worse. Because no one had truly looked at them in a very long time.</p>
          <p class="mt-4">Her eyes glowed brighter. Purple light filled the room's shadows.</p>

          <div class="my-6 bg-gradient-to-r from-indigo-900/40 to-purple-900/40 p-8 rounded-2xl border border-indigo-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">"If you weren't afraid of failing…<br/><span class="text-indigo-300">what would you make TODAY?"</span></p>
          </div>

          <p class="mt-4">The question hung in the air. Heavy. Alive. Like something knocking on a door that won't leave.</p>
          <p class="mt-3">Philippos felt a sting in his chest. Alexandra felt her eyes burn. Eleftheria — for the first time — <em>closed her book</em>.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Some questions don't need an immediate answer. They need to enter you. To sit there. To change you before you even speak.</p>
        </section>

        <!-- SCENE 6 — THE SPARK -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-amber-400 tracking-wide">THE SPARK</h3>
          </div>
          <p>Minutes passed. Perhaps more. No one counted.</p>
          <p class="mt-3">Philippos looked at the broken pieces on the floor. This time he didn't get angry. He looked at them as if seeing them <em>for the first time</em>.</p>
          <p class="mt-3 text-amber-200 font-medium">"A robot," he whispered. So quietly it was barely heard.</p>
          <p class="mt-4">Alexandra slowly raised her head. Her eyes were glistening. Not from tears. From something else.</p>
          <p class="mt-2 text-amber-200 font-medium">"That flies," she said.</p>
          <p class="mt-4">Eleftheria looked at her hands. The hands that only ever turned pages. She clenched them. Opened them again.</p>
          <p class="mt-2 text-amber-200 font-medium">"And speaks."</p>

          <div class="mt-6 bg-gradient-to-r from-amber-900/30 to-orange-900/20 p-6 rounded-xl border border-amber-500/20">
            <p class="text-white text-lg">WiseBot didn't smile — she had no mouth. But her eyes grew brighter. Warmer. Like a sun rising slowly.</p>
            <p class="mt-3 text-amber-300 font-bold text-xl">"Then let's begin."</p>
          </div>

          <!-- IMAGE: KIDS + WISEBOT SPARK -->
          <div class="mt-6 rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl shadow-amber-900/20">
            <img src="${IMG_KIDS_WISEBOT_2}" alt="The children begin their journey with WiseBot" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-amber-300/80 italic">The spark ignited. The journey began.</div>
          </div>

          <p class="mt-4 text-gray-400 text-sm italic">Three words. Three children. One moment. That was enough. Because creation doesn't start with materials or plans. It starts with a spark — and three "YES"es that no one expected.</p>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-indigo-950/60 p-8 rounded-3xl border-2 border-dashed border-indigo-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-indigo-300 uppercase tracking-wider">JOURNAL: MY OWN SPARK</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Write. Think. Feel. There is no wrong answer.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-indigo-500/15">
              <h5 class="text-indigo-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-indigo-600/40 flex items-center justify-center text-xs font-black">1</span>
                BOREDOM
              </h5>
              <p class="text-sm mb-3 opacity-80">What makes you feel most bored of all? When does time feel like it stops?</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-indigo-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-indigo-500/15">
              <h5 class="text-indigo-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-indigo-600/40 flex items-center justify-center text-xs font-black">2</span>
                IMAGINATION
              </h5>
              <p class="text-sm mb-3 opacity-80">If you had magic materials and unlimited time, what would you build right now?</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-indigo-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-indigo-500/15">
              <h5 class="text-indigo-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-indigo-600/40 flex items-center justify-center text-xs font-black">3</span>
                THE DECISION
              </h5>
              <p class="text-sm mb-3 opacity-80">Complete the sentence:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-indigo-500/10 text-indigo-200">
                <p class="text-sm font-medium">"Today I stop being bored and I say YES to: __________"</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- MEANING BOX -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 p-6 rounded-2xl border border-purple-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-purple-300 uppercase tracking-wider">The Meaning of This Chapter</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            Boredom is not the enemy. It is a <strong class="text-purple-300">signal</strong>. It tells you: "You're searching for something. You haven't found it yet." WiseBot didn't give a solution. She gave a <strong class="text-indigo-300">question</strong>. And a good question is worth more than a thousand answers.
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
              When a child says <strong class="text-white">"I'm bored"</strong>, they are actually saying <em>"I'm looking for a challenge worth my time"</em>.
            </p>
            <p class="text-gray-300 leading-relaxed">
              WiseBot didn't tell them what to do. She didn't scold them. She didn't lecture. She asked a <strong class="text-indigo-300">question</strong>. That is enough to start the engine.
            </p>
            <div class="mt-4 bg-indigo-900/20 p-4 rounded-xl border border-indigo-500/10">
              <p class="text-sm text-indigo-200 font-medium">💡 Try today: Instead of saying "go do something," ask: "If you could build anything at all, what would it be?"</p>
            </div>
          </div>
        </div>

      </div>
    `
    }
  }
];
