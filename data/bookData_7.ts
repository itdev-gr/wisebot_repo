
import { Book } from '../types';

// ============================================================
// 📖 BOOK 7: Ο ΚΟΣΜΟΣ ΕΙΝΑΙ ΜΕΓΑΛΥΤΕΡΟΣ / THE WORLD IS BIGGER
// Hero: Sparken (ο αετός)
// Theme: ΠΡΟΟΠΤΙΚΗ / PERSPECTIVE
// ============================================================

// Cover image
const IMG_SPARKEN = "/images/sparken.jpg";

// Story images (will be updated with full-res URLs)
const IMG_KIDS_WITH_SPARKEN = "/images/paidia-kai-sparken.png";
const IMG_KIDS_TOGETHER = "/images/ta-3-paidia.png";

export const BOOK_7: Book[] = [
  {
    id: 7,
    title: { el: "Ο ΚΟΣΜΟΣ ΕΙΝΑΙ ΜΕΓΑΛΥΤΕΡΟΣ", en: "THE WORLD IS BIGGER" },
    theme: { el: "ΠΡΟΟΠΤΙΚΗ", en: "PERSPECTIVE" },
    stepLabel: { el: "SPARKEN & Η ΠΡΟΟΠΤΙΚΗ", en: "SPARKEN & PERSPECTIVE" },
    author: "Sparken",
    cover: IMG_SPARKEN,
    videoUrl: "",
    description: {
      el: "Μια ιστορία για τη στιγμή που καταλαβαίνεις ότι η γνώμη γύρω σου δεν είναι ο νόμος του κόσμου. Τα παιδιά φεύγουν ταξίδι και βρίσκουν τη φυλή τους.",
      en: "A story about the moment you realize the opinion around you is not the law of the world. The children go on a trip and find their tribe."
    },
    meaning: {
      el: "Η γνώμη γύρω σου δεν είναι ο κόσμος. Ο κόσμος είναι πολύ πιο μεγάλος απ' ό,τι νομίζεις.",
      en: "The opinion around you is not the world. The world is much bigger than you think."
    },
    xp: 170,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- ═══════════ ΕΝΑΡΚΤΗΡΙΑ ΦΡΑΣΗ ═══════════ -->
        <div class="relative bg-gradient-to-r from-teal-900/60 to-cyan-900/60 p-8 rounded-2xl border border-teal-500/30 text-center shadow-lg">
          <p class="text-3xl font-black text-teal-200 mb-2">«Όταν μεγαλώνει ο κόσμος σου,»</p>
          <p class="text-xl text-cyan-300/80 italic">«μικραίνει ο φόβος σου.»</p>
        </div>

        <!-- ═══════════ ΣΚΗΝΗ 1 ═══════════ -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-teal-600 text-white text-xs font-black px-3 py-1 rounded-full tracking-widest shadow-lg shadow-teal-600/30">ΣΚΗΝΗ 01</span>
            <h3 class="text-2xl font-black text-teal-400 tracking-wide">ΕΞΩ ΑΠ' ΤΗ ΦΟΥΣΚΑ</h3>
          </div>
          <p>Το αυτοκίνητο έτρεχε στον δρόμο. Βαλίτσες στο πορτμπαγκάζ. Μουσική στο ραδιόφωνο. Στάσεις για χυμούς και τοστ σε βενζινάδικα.</p>
          <p class="mt-3">— «Πού πάμε πάλι;» ρώτησε ο Φίλιππος, βιδωμένος στο κάθισμα με τα πόδια πάνω στο μπροστινό.</p>
          <p class="mt-3">— «Σε μέρος που δεν μας ξέρει κανείς», είπε η Αλεξάνδρα. Και η φωνή της ακούστηκε σαν ελευθερία.</p>
          <p class="mt-4">Η Ελευθερία κοίταζε από το παράθυρο — δέντρα, βουνά, σύννεφα που άλλαζαν σχήμα. «Αυτό είναι καλό. Εκεί βλέπεις καθαρά. Εκεί δεν έχεις ρόλο.»</p>
          <p class="mt-3 text-gray-400 italic">Ο Crocus κουλουριάστηκε στο πίσω κάθισμα, με τη μύτη ανάμεσα στα μπουτάκια. «Εγώ δεν εμπιστεύομαι μέρη χωρίς γήπεδο», μουρμούρισε. Κανείς δεν του απάντησε.</p>
        </section>

        <!-- ═══════════ ΣΚΗΝΗ 2 ═══════════ -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-cyan-600 text-white text-xs font-black px-3 py-1 rounded-full tracking-widest shadow-lg shadow-cyan-600/30">ΣΚΗΝΗ 02</span>
            <h3 class="text-2xl font-black text-cyan-300 tracking-wide">ΠΑΙΔΙΑ ΠΟΥ ΔΕΝ ΓΕΛΑΝΕ</h3>
          </div>
          <p>Στην πλατεία μιας άλλης πόλης, τα παιδιά δεν έπαιζαν το ίδιο παιχνίδι. Δεν κυνηγιόντουσαν. Δεν φώναζαν.</p>
          <p class="mt-3">Κάποια ζωγράφιζαν στο πεζοδρόμιο με κιμωλίες. Κάποια έφτιαχναν κατασκευές από ξυλάκια και σπάγκο. Κάποια καθόντουσαν σε κύκλο και… συζητούσαν. Σοβαρά. Σαν να ήταν αυτό το πιο φυσιολογικό πράγμα στον κόσμο.</p>
          <p class="mt-4">Ο Φίλιππος πλησίασε, με το κουτί τους κάτω από τον μπράτσο. «Τι κάνετε;»</p>
          <p class="mt-3">— «Δοκιμή», απάντησε ένα παιδί χωρίς να σηκώσει το κεφάλι.</p>
          <p class="mt-3">— «Τι δοκιμή;»</p>
          <p class="mt-3 text-white font-bold text-lg">— «Ιδέες.»</p>
          <p class="mt-3 italic text-teal-300/70">Ο Φίλιππος σταμάτησε. Η λέξη ακούστηκε τόσο απλή — αλλά ταυτόχρονα σαν κάτι που δεν είχε ακούσει ποτέ.</p>
        </section>

        <!-- ═══════════ ΣΚΗΝΗ 3 ═══════════ -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-white text-black text-xs font-black px-3 py-1 rounded-full tracking-widest">ΣΚΗΝΗ 03</span>
            <h3 class="text-2xl font-black text-white tracking-wide">Η ΑΝΑΤΡΟΠΗ</h3>
          </div>
          <p>Η Αλεξάνδρα πήρε μια ανάσα. Βαθιά. Και μετά — χωρίς να σκεφτεί πολύ — έδειξε διστακτικά το δικό τους παιχνίδι.</p>
          <p class="mt-3">Περίμενε το γέλιο. Τα χέρια της έτρεμαν. Ο στομάχι της ήταν σφιγμένο.</p>
          <p class="mt-3"><strong class="text-red-400">Δεν γέλασε κανείς.</strong></p>
          <p class="mt-3">— «Α, ενδιαφέρον», είπε ένας, γέρνοντας πιο κοντά.</p>
          <p class="mt-3">— «Θέλει σκέψη», είπε μια άλλη. «Μπορούμε να το δοκιμάσουμε;»</p>
          <p class="mt-4">Ο Φίλιππος κοίταξε την Ελευθερία. Τα μάτια τους είπαν τα πάντα.</p>
          <p class="mt-3">«Δεν είπαν "χαζό"», ψιθύρισε.</p>
          <p class="mt-3">Η Ελευθερία χαμογέλασε — ένα χαμόγελο που δεν το κράτησε. <strong class="text-teal-300">«Γιατί εδώ… δεν είναι.»</strong></p>
        </section>

        <!-- ═══════════ ΕΙΚΟΝΑ ═══════════ -->
        <div class="flex justify-center my-8">
          <div class="relative group">
            <img src="${IMG_KIDS_WITH_SPARKEN}" alt="Τα παιδιά με τον Sparken" class="rounded-2xl shadow-2xl shadow-teal-500/20 max-h-96 object-contain border-2 border-teal-500/30" />
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-2xl">
              <p class="text-sm text-teal-200 text-center font-medium">Τα παιδιά ανακαλύπτουν νέους κόσμους με τον Sparken</p>
            </div>
          </div>
        </div>

        <!-- ═══════════ ΣΚΗΝΗ 4 ═══════════ -->
        <section class="bg-teal-900/20 p-6 rounded-xl border-t-4 border-cyan-400 my-6 shadow-xl shadow-teal-500/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-cyan-400 text-black text-xs font-black px-3 py-1 rounded-full tracking-widest">ΣΚΗΝΗ 04</span>
            <h3 class="text-3xl font-black text-cyan-200 tracking-wide">ΤΑ ΦΤΕΡΑ ΤΟΥ SPARKEN</h3>
          </div>
          <p>Ο αέρας άλλαξε. Κάτι σαν αύρα — αλλά πιο δυνατή, πιο σκόπιμη. Τα φύλλα σηκώθηκαν στον αέρα.</p>
          <p class="mt-3">Ο Sparken κατέβηκε αργά, τα φτερά του ανοιγμένα σαν χάρτης. Κάθε φτερό ήταν σαν σελίδα — γεμάτο χρώμα, ιστορίες, δρόμους που κανείς δεν είχε ακολουθήσει.</p>
          <p class="mt-4 text-white font-bold text-lg">«Βλέπετε; Ο κόσμος δεν είναι ένας κύκλος. Είναι πολλοί. Και σε κάποιον από αυτούς… ταιριάζετε ακριβώς.»</p>
          <p class="mt-3">Ο Crocus ανασήκωσε το φρύδι. «Δηλαδή δεν είναι όλοι ίδιοι;»</p>
          <p class="mt-3 text-teal-200 font-bold">— «Όχι. Και αυτό δεν είναι πρόβλημα. Αυτό είναι τύχη.»</p>
          <p class="mt-3 italic text-cyan-300/70">Ο Sparken δεν φώναζε. Μιλούσε σαν κάποιος που είχε δει τον κόσμο από ψηλά. Γιατί τον είχε δει.</p>
        </section>

        <!-- ═══════════ ΣΚΗΝΗ 5 ═══════════ -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-gray-500 text-white text-xs font-black px-3 py-1 rounded-full tracking-widest">ΣΚΗΝΗ 05</span>
            <h3 class="text-2xl font-black text-gray-300 tracking-wide">ΜΕΓΑΛΕΣ ΙΔΕΕΣ ΣΕ ΜΙΚΡΑ ΜΕΡΗ</h3>
          </div>
          <p>Σε ένα μουσείο: «Γιατί αυτό θεωρείται τέχνη;». Η Αλεξάνδρα κοιτούσε ένα πίνακα με ένα μόνο σημείο — κι αισθανόταν ότι καταλάβαινε.</p>
          <p class="mt-3">Σε ένα βιβλιοπωλείο: «Παιδί έγραψε αυτό το βιβλίο;». Η Ελευθερία κράτησε ένα βιβλίο γραμμένο από 12χρονο — και τα μάτια της γυάλισαν.</p>
          <p class="mt-3">Σε ένα καφέ: «Εσύ τι φτιάχνεις;». Ένα κορίτσι δίπλα τους σχεδίαζε ένα app στο τετράδιό της. Ήταν 11 χρονών.</p>
          <p class="mt-4">Οι ερωτήσεις έπεφταν σαν βροχή — και κάθε μία άνοιγε κάτι μέσα τους.</p>
          <p class="mt-3">Η Αλεξάνδρα άρχισε να μιλά πιο άνετα. Ο Φίλιππος έκανε σχέδια σε χαρτοπετσέτες. Η Ελευθερία σημείωνε μανιωδώς, με δύο μολύβια εναλλάξ.</p>
        </section>

        <!-- ═══════════ ΣΚΗΝΗ 6 ═══════════ -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-fuchsia-500 text-white text-xs font-black px-3 py-1 rounded-full tracking-widest">ΣΚΗΝΗ 06</span>
            <h3 class="text-2xl font-black text-fuchsia-300 tracking-wide">Η ΑΠΟΚΑΛΥΨΗ</h3>
          </div>
          <p>Το βράδυ. Τα φώτα χαμηλά. Ο ήχος του αέρα έξω.</p>
          <p class="mt-3">«Τελικά… δεν είμαστε περίεργοι», είπε ο Φίλιππος. Η φωνή του ήταν ήσυχη — αλλά σίγουρη.</p>
          <p class="mt-3">— «Είμαστε απλώς νωρίς», απάντησε η Ελευθερία.</p>
          <p class="mt-3">Η Αλεξάνδρα γέλασε — ελαφρά, σαν ανακούφιση. «Νωρίς… μου αρέσει αυτό. Μου αρέσει πολύ.»</p>
          <p class="mt-4">Η WiseBot εμφανίστηκε, ήσυχα, στη γωνία του δωματίου. Το φως της ζέστανε τα πρόσωπά τους.</p>
          <p class="mt-3"><strong class="text-white text-lg">«Όταν μεγαλώνει ο κόσμος σου, μικραίνει ο φόβος σου.»</strong></p>
          <p class="mt-3 text-teal-300/70 italic">Κανείς δεν μίλησε. Αλλά όλοι ένιωσαν ότι κάτι μέσα τους άνοιξε. Κάτι σαν πόρτα σε δρόμο που πάντα υπήρχε — αλλά δεν το είχαν δει.</p>
        </section>

        <!-- ═══════════ ΣΚΗΝΗ 7 ═══════════ -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-white text-black text-xs font-black px-3 py-1 rounded-full tracking-widest">ΣΚΗΝΗ 07</span>
            <h3 class="text-2xl font-black text-white tracking-wide">ΤΟ ΓΥΡΙΣΜΑ</h3>
          </div>
          <p>Πίσω στο σπίτι, όλα ήταν ίδια. Τα ίδια σπίτια. Οι ίδιοι δρόμοι. Η ίδια αυλή.</p>
          <p class="mt-3">Αλλά τα παιδιά όχι.</p>
          <p class="mt-3">Κάποιο γέλιο ακούστηκε πάλι στο σχολείο. Κάποιος πέταξε ένα σχόλιο. Κάποιος σφύριξε ειρωνικά.</p>
          <p class="mt-3">Ο Φίλιππος σήκωσε τους ώμους. «ΟΚ.» Απλά. Χωρίς θυμό.</p>
          <p class="mt-3">Η Αλεξάνδρα χαμογέλασε — ένα χαμόγελο που δεν ζητούσε έγκριση.</p>
          <p class="mt-3">Η Ελευθερία άνοιξε το τετράδιο. Και άρχισε να γράφει — πιο γρήγορα, πιο σίγουρα, σαν να μην υπήρχε κανείς γύρω.</p>
          <p class="mt-4 italic text-teal-300/70">Ο Crocus τους κοίταξε. «Τι τους κάνατε ρε;» Κανείς δεν απάντησε. Δεν χρειαζόταν.</p>
        </section>

        <!-- ═══════════ ΣΚΗΝΗ 8 ═══════════ -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-teal-500 text-white text-xs font-black px-3 py-1 rounded-full tracking-widest">ΣΚΗΝΗ 08</span>
            <h3 class="text-2xl font-black text-teal-400 tracking-wide">Η ΝΕΑ ΣΚΕΨΗ</h3>
          </div>
          <p>Το βράδυ, πριν κοιμηθούν, έγραψαν κάτι στον τοίχο τους. Με μαρκαδόρο. Χωρίς άδεια. Χωρίς δισταγμό.</p>
          <p class="mt-4 font-serif italic text-xl text-cyan-100 bg-teal-900/40 p-6 rounded-xl border-l-4 border-cyan-400 shadow-inner">
            «Δεν φτιάχνουμε κάτι για όλους.<br/>Το φτιάχνουμε για εκείνους που το καταλαβαίνουν.»
          </p>
          <p class="mt-4">Ο Sparken κάθισε στο παράθυρο — τα φτερά του μισάνοιχτα, σαν πανιά σε λιμάνι.</p>
          <p class="mt-3"><strong class="text-white text-lg">«Τώρα… βλέπετε πιο μακριά.»</strong></p>
          <p class="mt-3">Η WiseBot άναψε τελευταία φορά, απαλά, σαν αποχαιρετισμός. Αλλά δεν ήταν τέλος.</p>
          <p class="mt-4 text-xl font-bold text-teal-200">Ήταν αρχή.</p>
          <p class="mt-2 italic text-cyan-400/60">Τέλος Μέρους 1 — Η αρχή ενός κόσμου.</p>
        </section>

        <!-- ═══════════ ΕΙΚΟΝΑ 2 ═══════════ -->
        <div class="flex justify-center my-8">
          <div class="relative group">
            <img src="${IMG_KIDS_TOGETHER}" alt="Τα τρία παιδιά μαζί" class="rounded-2xl shadow-2xl shadow-teal-500/20 max-h-96 object-contain border-2 border-teal-500/30" />
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-2xl">
              <p class="text-sm text-teal-200 text-center font-medium">Φίλιππος, Αλεξάνδρα & Ελευθερία — βλέπουν πιο μακριά</p>
            </div>
          </div>
        </div>

        <!-- ═══════════ JOURNAL ═══════════ -->
        <div class="mt-12 bg-teal-950/60 p-8 rounded-3xl border-2 border-dashed border-teal-500/40 shadow-xl">
          <h4 class="text-xl font-black text-teal-300 uppercase tracking-wider mb-6 flex items-center gap-2">
            🌍 JOURNAL: ΑΝΟΙΓΩ ΤΟΝ ΚΟΣΜΟ ΜΟΥ
          </h4>

          <div class="space-y-6 text-gray-300">

            <div>
              <h5 class="text-teal-200 font-bold mb-2">1. Η ΦΟΥΣΚΑ ΜΟΥ</h5>
              <p class="text-sm mb-2 opacity-80">Γράψε κάτι που νόμιζες ότι «όλοι» το σκέφτονται έτσι (αλλά τελικά όχι):</p>
              <div class="w-full h-10 bg-black/30 rounded-lg border border-teal-500/20"></div>
            </div>

            <div>
              <h5 class="text-teal-200 font-bold mb-2">2. Η ΑΝΑΚΑΛΥΨΗ</h5>
              <p class="text-sm mb-2 opacity-80">Γράψε κάτι καινούργιο που είδες ή έμαθες και σου άρεσε:</p>
              <div class="w-full h-10 bg-black/30 rounded-lg border border-teal-500/20"></div>
            </div>

            <div>
              <h5 class="text-teal-200 font-bold mb-2">3. ΑΤΟΜΑ ΠΟΥ ΜΕ ΚΑΤΑΛΑΒΑΙΝΟΥΝ</h5>
              <p class="text-sm mb-2 opacity-80">Γράψε 1-3 ονόματα ατόμων που σε κάνουν να νιώθεις «κανονικός»:</p>
              <div class="w-full h-10 bg-black/30 rounded-lg border border-teal-500/20"></div>
            </div>

            <div>
              <h5 class="text-teal-200 font-bold mb-2">4. Η ΥΠΕΝΘΥΜΙΣΗ</h5>
              <div class="bg-black/20 p-4 rounded-xl border border-teal-500/10">
                <p class="text-sm italic">«Δεν χρειάζεται να μικρύνω για να ταιριάξω.</p>
                <p class="text-sm italic">Ο κόσμος είναι μεγάλος και υπάρχει χώρος για μένα.»</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════ MEANING BOX ═══════════ -->
        <div class="mt-8 bg-gradient-to-r from-teal-900/40 to-cyan-900/40 p-8 rounded-3xl border border-teal-400/30 shadow-xl">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-3xl">💎</span>
            <h4 class="text-xl font-black text-teal-300 uppercase tracking-wider">ΤΟ ΝΟΗΜΑ ΤΗΣ ΙΣΤΟΡΙΑΣ</h4>
          </div>
          <div class="space-y-4 text-teal-100/90">
            <p class="text-lg leading-relaxed">Η γνώμη γύρω σου δεν είναι ο κόσμος. Είναι μόνο μια μικρή γωνία. Ο αληθινός κόσμος είναι πολύ πιο μεγάλος — και κάπου εκεί μέσα, υπάρχουν άνθρωποι που σε περιμένουν.</p>
            <p class="text-lg leading-relaxed font-semibold text-teal-200">Δεν φτιάχνεις κάτι για όλους. Το φτιάχνεις για εκείνους που θα το καταλάβουν.</p>
            <p class="text-sm text-teal-400/60 italic mt-4">— Sparken</p>
          </div>
        </div>

        <!-- ═══════════ ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ ═══════════ -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-teal-950/60 p-8 rounded-3xl border border-teal-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div class="flex items-center gap-3 mb-6 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-teal-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              Όταν ένα παιδί καταλάβει ότι δεν κρίνεται μόνο από το στενό του περιβάλλον — σχολείο, γειτονιά, τάξη — αποκτά ελευθερία σκέψης. Αποκτά χώρο να αναπνεύσει.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Η αλλαγή παραστάσεων δεν είναι απλώς διακοπές. Είναι <strong class="text-teal-300">απαραίτητο άνοιγμα μυαλού</strong> — και μια από τις πιο σημαντικές βάσεις αυτοπεποίθησης.
            </p>
            <div class="mt-4 bg-black/20 p-4 rounded-xl border border-teal-500/10">
              <p class="text-teal-200 font-bold text-sm mb-2">💡 TIPS ΓΙΑ ΓΟΝΕΙΣ:</p>
              <ul class="text-sm text-gray-400 space-y-2">
                <li>• Πηγαίνετε το παιδί σε περιβάλλοντα με παιδιά που δημιουργούν</li>
                <li>• Δείξτε του ότι η «ιδιαιτερότητά» του δεν είναι πρόβλημα — είναι δύναμη</li>
                <li>• Βρείτε μαζί workshops, εκθέσεις, κοινότητες με κοινά ενδιαφέροντα</li>
                <li>• Πείτε: «Δεν χρειάζεται να αρέσεις σε όλους. Χρειάζεται να βρεις τους δικούς σου»</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- ═══════════ OPENING QUOTE ═══════════ -->
        <div class="relative bg-gradient-to-r from-teal-900/60 to-cyan-900/60 p-8 rounded-2xl border border-teal-500/30 text-center shadow-lg">
          <p class="text-3xl font-black text-teal-200 mb-2">"When your world grows,"</p>
          <p class="text-xl text-cyan-300/80 italic">"your fear shrinks."</p>
        </div>

        <!-- ═══════════ SCENE 1 ═══════════ -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-teal-600 text-white text-xs font-black px-3 py-1 rounded-full tracking-widest shadow-lg shadow-teal-600/30">SCENE 01</span>
            <h3 class="text-2xl font-black text-teal-400 tracking-wide">OUTSIDE THE BUBBLE</h3>
          </div>
          <p>The car was racing on the road. Suitcases in the trunk. Music on the radio. Stops for juice and sandwiches at gas stations.</p>
          <p class="mt-3">"Where are we going again?" asked Philippos, planted in his seat with his feet on the front one.</p>
          <p class="mt-3">"To a place where no one knows us," said Alexandra. And her voice sounded like freedom.</p>
          <p class="mt-4">Eleftheria looked out the window — trees, mountains, clouds changing shape. "That is good. There you see clearly. There you don't have a role."</p>
          <p class="mt-3 text-gray-400 italic">Crocus curled up in the back seat, nose between his legs. "I don't trust places without a field," he mumbled. Nobody answered him.</p>
        </section>

        <!-- ═══════════ SCENE 2 ═══════════ -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-cyan-600 text-white text-xs font-black px-3 py-1 rounded-full tracking-widest shadow-lg shadow-cyan-600/30">SCENE 02</span>
            <h3 class="text-2xl font-black text-cyan-300 tracking-wide">KIDS WHO DON'T LAUGH</h3>
          </div>
          <p>In the square of another city, the kids were not playing the same game. They weren't chasing each other. They weren't shouting.</p>
          <p class="mt-3">Some were drawing on the sidewalk with chalk. Some were building structures from sticks and string. Some sat in a circle and… discussed. Seriously. As if it were the most natural thing in the world.</p>
          <p class="mt-4">Philippos approached, box tucked under his arm. "What are you doing?"</p>
          <p class="mt-3">"Testing," answered a child without looking up.</p>
          <p class="mt-3">"Testing what?"</p>
          <p class="mt-3 text-white font-bold text-lg">"Ideas."</p>
          <p class="mt-3 italic text-teal-300/70">Philippos stopped. The word sounded so simple — yet at the same time like something he'd never heard before.</p>
        </section>

        <!-- ═══════════ SCENE 3 ═══════════ -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-white text-black text-xs font-black px-3 py-1 rounded-full tracking-widest">SCENE 03</span>
            <h3 class="text-2xl font-black text-white tracking-wide">THE TWIST</h3>
          </div>
          <p>Alexandra took a breath. Deep. And then — without thinking too much — she hesitantly showed their own game.</p>
          <p class="mt-3">She expected laughter. Her hands were shaking. Her stomach was tight.</p>
          <p class="mt-3"><strong class="text-red-400">No one laughed.</strong></p>
          <p class="mt-3">"Oh, interesting," said one, leaning closer.</p>
          <p class="mt-3">"It needs thought," said another. "Can we try it?"</p>
          <p class="mt-4">Philippos looked at Eleftheria. Their eyes said everything.</p>
          <p class="mt-3">"They didn't say 'stupid'," he whispered.</p>
          <p class="mt-3">Eleftheria smiled — a smile she couldn't hold back. <strong class="text-teal-300">"Because here… it isn't."</strong></p>
        </section>

        <!-- ═══════════ IMAGE ═══════════ -->
        <div class="flex justify-center my-8">
          <div class="relative group">
            <img src="${IMG_KIDS_WITH_SPARKEN}" alt="The kids with Sparken" class="rounded-2xl shadow-2xl shadow-teal-500/20 max-h-96 object-contain border-2 border-teal-500/30" />
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-2xl">
              <p class="text-sm text-teal-200 text-center font-medium">The kids discover new worlds with Sparken</p>
            </div>
          </div>
        </div>

        <!-- ═══════════ SCENE 4 ═══════════ -->
        <section class="bg-teal-900/20 p-6 rounded-xl border-t-4 border-cyan-400 my-6 shadow-xl shadow-teal-500/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-cyan-400 text-black text-xs font-black px-3 py-1 rounded-full tracking-widest">SCENE 04</span>
            <h3 class="text-3xl font-black text-cyan-200 tracking-wide">SPARKEN'S WINGS</h3>
          </div>
          <p>The air changed. Something like a breeze — but stronger, more intentional. Leaves rose into the air.</p>
          <p class="mt-3">Sparken descended slowly, his wings opened like a map. Each feather was like a page — full of color, stories, roads no one had followed.</p>
          <p class="mt-4 text-white font-bold text-lg">"You see? The world is not one circle. It is many. And in one of them… you fit perfectly."</p>
          <p class="mt-3">Crocus raised an eyebrow. "Meaning everyone isn't the same?"</p>
          <p class="mt-3 text-teal-200 font-bold">"No. And that's not a problem. That's luck."</p>
          <p class="mt-3 italic text-cyan-300/70">Sparken didn't shout. He spoke like someone who had seen the world from above. Because he had.</p>
        </section>

        <!-- ═══════════ SCENE 5 ═══════════ -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-gray-500 text-white text-xs font-black px-3 py-1 rounded-full tracking-widest">SCENE 05</span>
            <h3 class="text-2xl font-black text-gray-300 tracking-wide">BIG IDEAS IN SMALL PLACES</h3>
          </div>
          <p>In a museum: "Why is this considered art?" Alexandra stared at a painting with a single dot — and felt she understood.</p>
          <p class="mt-3">In a bookstore: "A child wrote this book?" Eleftheria held a book written by a 12-year-old — and her eyes glistened.</p>
          <p class="mt-3">In a cafe: "What are you making?" A girl next to them was designing an app in her notebook. She was 11 years old.</p>
          <p class="mt-4">The questions fell like rain — and each one opened something inside them.</p>
          <p class="mt-3">Alexandra started speaking more comfortably. Philippos drew plans on napkins. Eleftheria took notes furiously, alternating between two pencils.</p>
        </section>

        <!-- ═══════════ SCENE 6 ═══════════ -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-fuchsia-500 text-white text-xs font-black px-3 py-1 rounded-full tracking-widest">SCENE 06</span>
            <h3 class="text-2xl font-black text-fuchsia-300 tracking-wide">THE REVELATION</h3>
          </div>
          <p>That night. Lights low. The sound of wind outside.</p>
          <p class="mt-3">"Finally… we aren't weird," said Philippos. His voice was quiet — but certain.</p>
          <p class="mt-3">"We're just early," replied Eleftheria.</p>
          <p class="mt-3">Alexandra laughed — lightly, like relief. "Early… I like that. I like that a lot."</p>
          <p class="mt-4">WiseBot appeared, quietly, in the corner of the room. Her light warmed their faces.</p>
          <p class="mt-3"><strong class="text-white text-lg">"When your world grows, your fear shrinks."</strong></p>
          <p class="mt-3 text-teal-300/70 italic">Nobody spoke. But everyone felt something open inside them. Something like a door to a road that had always existed — but they hadn't seen it.</p>
        </section>

        <!-- ═══════════ SCENE 7 ═══════════ -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-white text-black text-xs font-black px-3 py-1 rounded-full tracking-widest">SCENE 07</span>
            <h3 class="text-2xl font-black text-white tracking-wide">THE RETURN</h3>
          </div>
          <p>Back home, everything was the same. The same houses. The same streets. The same yard.</p>
          <p class="mt-3">But the kids were not.</p>
          <p class="mt-3">Some laughter was heard again at school. Someone threw a comment. Someone whistled sarcastically.</p>
          <p class="mt-3">Philippos shrugged. "OK." Simple. Without anger.</p>
          <p class="mt-3">Alexandra smiled — a smile that asked for no approval.</p>
          <p class="mt-3">Eleftheria opened the notebook. And started writing — faster, more sure, as if nobody else existed.</p>
          <p class="mt-4 italic text-teal-300/70">Crocus looked at them. "What did you do to them?" Nobody answered. It wasn't needed.</p>
        </section>

        <!-- ═══════════ SCENE 8 ═══════════ -->
        <section>
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-teal-500 text-white text-xs font-black px-3 py-1 rounded-full tracking-widest">SCENE 08</span>
            <h3 class="text-2xl font-black text-teal-400 tracking-wide">THE NEW THOUGHT</h3>
          </div>
          <p>That night, before bed, they wrote something on their wall. With a marker. Without permission. Without hesitation.</p>
          <p class="mt-4 font-serif italic text-xl text-cyan-100 bg-teal-900/40 p-6 rounded-xl border-l-4 border-cyan-400 shadow-inner">
            "We don't make something for everyone.<br/>We make it for those who understand it."
          </p>
          <p class="mt-4">Sparken sat on the windowsill — wings half-open, like sails in a harbor.</p>
          <p class="mt-3"><strong class="text-white text-lg">"Now… you see further."</strong></p>
          <p class="mt-3">WiseBot glowed one last time, softly, like a goodbye. But it wasn't the end.</p>
          <p class="mt-4 text-xl font-bold text-teal-200">It was the beginning.</p>
          <p class="mt-2 italic text-cyan-400/60">End of Part 1 — The beginning of a world.</p>
        </section>

        <!-- ═══════════ IMAGE 2 ═══════════ -->
        <div class="flex justify-center my-8">
          <div class="relative group">
            <img src="${IMG_KIDS_TOGETHER}" alt="The three kids together" class="rounded-2xl shadow-2xl shadow-teal-500/20 max-h-96 object-contain border-2 border-teal-500/30" />
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-2xl">
              <p class="text-sm text-teal-200 text-center font-medium">Philippos, Alexandra & Eleftheria — they see further</p>
            </div>
          </div>
        </div>

        <!-- ═══════════ JOURNAL ═══════════ -->
        <div class="mt-12 bg-teal-950/60 p-8 rounded-3xl border-2 border-dashed border-teal-500/40 shadow-xl">
          <h4 class="text-xl font-black text-teal-300 uppercase tracking-wider mb-6 flex items-center gap-2">
            🌍 JOURNAL: OPENING MY WORLD
          </h4>

          <div class="space-y-6 text-gray-300">

            <div>
              <h5 class="text-teal-200 font-bold mb-2">1. MY BUBBLE</h5>
              <p class="text-sm mb-2 opacity-80">Write something you thought "everyone" thinks this way (but actually not):</p>
              <div class="w-full h-10 bg-black/30 rounded-lg border border-teal-500/20"></div>
            </div>

            <div>
              <h5 class="text-teal-200 font-bold mb-2">2. THE DISCOVERY</h5>
              <p class="text-sm mb-2 opacity-80">Write something new you saw or learned and liked:</p>
              <div class="w-full h-10 bg-black/30 rounded-lg border border-teal-500/20"></div>
            </div>

            <div>
              <h5 class="text-teal-200 font-bold mb-2">3. PEOPLE WHO UNDERSTAND ME</h5>
              <p class="text-sm mb-2 opacity-80">Write 1-3 names of people who make you feel "normal":</p>
              <div class="w-full h-10 bg-black/30 rounded-lg border border-teal-500/20"></div>
            </div>

            <div>
              <h5 class="text-teal-200 font-bold mb-2">4. THE REMINDER</h5>
              <div class="bg-black/20 p-4 rounded-xl border border-teal-500/10">
                <p class="text-sm italic">"I don't need to shrink to fit.</p>
                <p class="text-sm italic">The world is big and there is space for me."</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════ MEANING BOX ═══════════ -->
        <div class="mt-8 bg-gradient-to-r from-teal-900/40 to-cyan-900/40 p-8 rounded-3xl border border-teal-400/30 shadow-xl">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-3xl">💎</span>
            <h4 class="text-xl font-black text-teal-300 uppercase tracking-wider">THE MEANING OF THE STORY</h4>
          </div>
          <div class="space-y-4 text-teal-100/90">
            <p class="text-lg leading-relaxed">The opinion around you is not the world. It's just a small corner. The real world is much bigger — and somewhere in it, there are people waiting for you.</p>
            <p class="text-lg leading-relaxed font-semibold text-teal-200">You don't make something for everyone. You make it for those who will understand it.</p>
            <p class="text-sm text-teal-400/60 italic mt-4">— Sparken</p>
          </div>
        </div>

        <!-- ═══════════ MESSAGE FOR PARENTS ═══════════ -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-teal-950/60 p-8 rounded-3xl border border-teal-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div class="flex items-center gap-3 mb-6 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-teal-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              When a child understands that they are not judged only by their narrow environment — school, neighborhood, class — they gain freedom of thought. They gain space to breathe.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Changing scenes isn't just vacation. It is <strong class="text-teal-300">necessary mind opening</strong> — and one of the most important foundations of confidence.
            </p>
            <div class="mt-4 bg-black/20 p-4 rounded-xl border border-teal-500/10">
              <p class="text-teal-200 font-bold text-sm mb-2">💡 TIPS FOR PARENTS:</p>
              <ul class="text-sm text-gray-400 space-y-2">
                <li>• Take your child to environments with kids who create</li>
                <li>• Show them that their "uniqueness" isn't a problem — it's a power</li>
                <li>• Find workshops, exhibitions, communities with shared interests together</li>
                <li>• Say: "You don't need to please everyone. You need to find your people"</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    `
    }
  }
];
