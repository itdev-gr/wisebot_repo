
import { Book } from '../types';

// ============================================================
// BOOK 19: O KYKLOS ANOIGEI / THE CIRCLE OPENS
// Hero: WiseBot & Team
// Theme: MOIRASMA / SHARING
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
const IMG_KIDS_WITH_CROCUS = "/images/paidia-kai-crocus.png";
const IMG_CROCUS = "/images/crocus.jpg";

export const BOOK_19: Book[] = [
  {
    id: 19,
    title: { el: "Ο ΚΥΚΛΟΣ ΑΝΟΙΓΕΙ", en: "THE CIRCLE OPENS" },
    theme: { el: "ΜΟΙΡΑΣΜΑ", en: "SHARING" },
    stepLabel: { el: "WISEBOT & TEAM & ΜΟΙΡΑΣΜΑ", en: "WISEBOT & TEAM & SHARING" },
    author: "Wisebot & Team",
    cover: IMG_WISEBOT,
    videoUrl: "",
    description: {
      el: "Το δωμάτιο γέμισε νέα παιδιά. Οι πρωταγωνιστές μας πρέπει να κάνουν πίσω. Μια ιστορία για τη στιγμή που καταλαβαίνεις ότι αυτό που έφτιαξες δεν σου ανήκει πια μόνο.",
      en: "The room filled with new children. Our protagonists must step back. A story about the moment you realize that what you built no longer belongs only to you."
    },
    meaning: {
      el: "Όταν κάτι μεγαλώνει αρκετά, δεν το κρατάς. Το αφήνεις να συνεχίσει.",
      en: "When something grows enough, you don't hold it. You let it continue."
    },
    xp: 380,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- ΕΙΣΑΓΩΓΙΚΟ QUOTE -->
        <div class="relative bg-gradient-to-r from-slate-900 via-rose-900/60 to-pink-900/40 p-10 rounded-2xl border border-rose-500/30 text-center shadow-lg shadow-rose-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">\u039A\u03B5\u03C6\u03AC\u03BB\u03B1\u03B9\u03BF 19</div>
          <p class="italic text-rose-200 text-xl mt-4 leading-relaxed">\u00AB\u0397 \u03B7\u03B3\u03B5\u03C3\u03AF\u03B1 \u03B4\u03B5\u03BD \u03B5\u03AF\u03BD\u03B1\u03B9 \u03AD\u03BB\u03B5\u03B3\u03C7\u03BF\u03C2. \u0395\u03AF\u03BD\u03B1\u03B9 \u03B5\u03BC\u03C0\u03B9\u03C3\u03C4\u03BF\u03C3\u03CD\u03BD\u03B7.<br/>\u039C\u03BF\u03B9\u03C1\u03AC\u03C3\u03BF\u03C5 \u03B1\u03C5\u03C4\u03CC \u03C0\u03BF\u03C5 \u03AD\u03C6\u03C4\u03B9\u03B1\u03BE\u03B5\u03C2 \u2014 \u03BA\u03B1\u03B9 \u03B8\u03B1 \u03B3\u03AF\u03BD\u03B5\u03B9 \u03B1\u03B9\u03CE\u03BD\u03B9\u03BF.\u00BB</p>
          <div class="mt-4 w-16 h-0.5 bg-rose-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- ΣΚΗΝΗ 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-rose-600/30 border border-rose-500/30 text-rose-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-rose-300 tracking-wide">ΔΕΝ ΗΤΑΝ ΠΙΑ ΜΟΝΟΙ</h3>
          </div>
          <p>Το πρωί ξεκίνησε σαν κάθε άλλο. Ο ήλιος γλίστρησε μέσα από τα μισάνοιχτα παράθυρα του εργαστηρίου, ζωγραφίζοντας χρυσές γραμμές πάνω στον ξύλινο πάγκο. Σκόνη χτισίματος, κομμάτια χαρτιού, μολύβια μισοφαγωμένα από τη σκέψη — τα υλικά μιας ιστορίας γραμμένης κομμάτι-κομμάτι.</p>
          <p class="mt-3">Αλλά κάτι ήταν <em>διαφορετικό</em>.</p>
          <p class="mt-3">Η Αλεξάνδρα το ένιωσε πρώτη. Ένα μουρμουρητό. Σαν μέλισσες που πλησιάζουν. Γύρισε αργά προς την πόρτα — και τα μάτια της μεγάλωσαν.</p>
          <p class="mt-3">Παιδιά. Πέντε, έξι, ίσως επτά. Στέκονταν στο κατώφλι σαν μικρά πουλιά σε κλαδί — <em>αβέβαια, περίεργα, με μάτια γεμάτα φωτιές που δεν τολμούσαν ακόμα να ανάψουν</em>. Κάποια κρατούσαν σημειωματάρια. Ένα κορίτσι με πλεξούδες κρατούσε ένα μικρό ξύλινο κουτί σαν θησαυρό.</p>
          <p class="mt-4">Η Αλεξάνδρα κοίταξε τον Φίλιππο. Ο Φίλιππος κοίταξε την Ελευθερία. Ο χρόνος σταμάτησε — μια από εκείνες τις στιγμές που νιώθεις ότι κάτι μεγάλο ετοιμάζεται.</p>
          <p class="mt-3">Η Αλεξάνδρα μίλησε πρώτη. Η φωνή της ήταν χαμηλή, σχεδόν ψίθυρος. <span class="text-rose-200 font-medium">«Είναι... περίεργο».</span></p>
          <p class="mt-3">Ο Φίλιππος έγνεψε αργά. Τα χέρια του, γεμάτα σημάδια από εργαλεία και κατασκευές, σφίχτηκαν ελαφρά πάνω στον πάγκο. <span class="text-rose-200 font-medium">«Σαν να μην είναι πια μόνο δικό μας».</span></p>
          <p class="mt-3">Η Ελευθερία — πάντα αυτή που έβλεπε πέρα από τα φαινόμενα — χαμογέλασε απαλά. Ένα χαμόγελο γεμάτο γνώση και λίγη μελαγχολία. Γιατί καταλάβαινε κάτι που οι άλλοι δύο δεν είχαν ακόμα αγγίξει.</p>
          <p class="mt-3 text-white font-medium">«Και αυτό ακριβώς σημαίνει ότι <strong class="text-rose-300">πέτυχε</strong>».</p>
          <p class="mt-3 text-gray-400 text-sm italic">Όταν κάτι που έφτιαξες αρχίζει να τραβάει κόσμο, σημαίνει πως πέτυχες. Αλλά σημαίνει και κάτι ακόμα: ότι ο χώρος δεν είναι πια δικός σου. Είναι <em>δικός τους</em>.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-rose-500/15 shadow-lg shadow-rose-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="Τα παιδιά στο εργαστήρι" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-rose-300/80 italic">Το εργαστήρι δεν ήταν πια ήσυχο. Ήταν γεμάτο ζωή.</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-pink-600/30 border border-pink-500/30 text-pink-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-pink-300 tracking-wide">ΟΙ ΝΕΟΙ</h3>
          </div>
          <p>Τα νέα παιδιά μπήκαν στο εργαστήρι σαν νερό που βρίσκει τον δρόμο του σε ποτάμι. Αργά στην αρχή, αγγίζοντας τα πράγματα σαν να φοβούνταν μην σπάσει κάτι. Μετά πιο τολμηρά.</p>
          <p class="mt-3">Κάποια μιλούσαν πολύ. <em>«Τι είναι αυτό; Πώς δουλεύει; Μπορώ να το πιάσω;»</em> Οι ερωτήσεις τους ήταν βροχή — αστείρευτη, <em>θαυμάσια</em>.</p>
          <p class="mt-3">Άλλα δεν μιλούσαν καθόλου. Ένα μικρό αγόρι με σκούρα μαλλιά καθόταν στη γωνία και παρατηρούσε. Η Ελευθερία τον πρόσεξε. Τον αναγνώρισε αμέσως — γιατί κάποτε ήταν κι αυτή ακριβώς έτσι.</p>
          <p class="mt-3">Ένα κορίτσι με κοντά μαλλιά πήρε ένα εργαλείο και άρχισε να το περιστρέφει στα χέρια της. Δεν ρώτησε. Απλά <em>ξεκίνησε</em>. Ο Φίλιππος ένιωσε σφίξιμο στο στομάχι — κάτι ανάμεσα σε θαυμασμό και ζήλια.</p>
          <p class="mt-4">Η Αλεξάνδρα χαμογέλασε. Ένα χαμόγελο αργό, γεμάτο νοσταλγία.</p>
          <p class="mt-2 text-pink-200 font-medium">«Ήμασταν κι εμείς έτσι», ψιθύρισε.</p>
          <p class="mt-3">Ο Φίλιππος κοίταξε τα σημαδεμένα χέρια του. <span class="text-pink-200 font-medium">«Και κάναμε λάθη»,</span> είπε σιγά.</p>
          <p class="mt-3">Η Ελευθερία πρόσθεσε ήρεμα: <span class="text-pink-200 font-medium">«Και μάθαμε».</span></p>
          <p class="mt-3 text-gray-400 text-sm italic">Και τα τρία παιδιά κατάλαβαν, σ' εκείνη τη στιγμή, ότι αυτά τα νέα πρόσωπα δεν ήταν ξένα. Ήταν εκδοχές του εαυτού τους — αρχάριοι, αδέξιοι, γεμάτοι φλόγα. Η αρχή ενός νέου κύκλου.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-pink-500/15 shadow-lg shadow-pink-900/20">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="Νέα παιδιά στο εργαστήρι" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-pink-300/80 italic">Τα νέα παιδιά γέμισαν τον χώρο με ερωτήσεις και ενέργεια</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 3 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-rose-600/30 border border-rose-500/30 text-rose-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-rose-400 tracking-wide">ΔΕΝ ΓΙΝΕΤΑΙ ΟΠΩΣ ΘΕΛΕΙΣ</h3>
          </div>
          <p>Συνέβη αναπάντεχα. Ένα παιδί — το κορίτσι με τα κοντά μαλλιά — πήρε ένα μολύβι και άρχισε να σχεδιάζει πάνω στο σχέδιο. Όχι στο <em>δικό της</em> σχέδιο. Στο δικό <em>τους</em>.</p>
          <p class="mt-3">Άλλαξε τις γραμμές. Πρόσθεσε κύκλους εκεί που υπήρχαν τετράγωνα. Διέγραψε μια σύνδεση που ο Φίλιππος είχε σχεδιάσει μόνος του.</p>
          <p class="mt-3">Ο Φίλιππος το είδε. Ένιωσε τον παλιό εαυτό του να ξυπνάει — εκείνον που φώναζε, που πετούσε πράγματα.</p>
          <p class="mt-4"><strong class="text-white">«Όχι έτσι!»</strong> ξέφυγε από τα χείλη του. Η φωνή του αντήχησε στο δωμάτιο σαν κεραυνός σε ήρεμη θάλασσα.</p>
          <p class="mt-3">Ακολούθησε σιωπή τόσο βαριά που μπορούσες να ακούσεις τη σκόνη να πέφτει. Τα νέα παιδιά πάγωσαν.</p>
          <p class="mt-3">Ο Φίλιππος <em>σταμάτησε</em>. Πήρε ανάσα — μια βαθιά ανάσα από εκείνη τη μέρα που η WiseBot του είχε πει: <em>«Η αντίδρασή σου είναι η επιλογή σου.»</em></p>
          <p class="mt-4 text-rose-200 font-medium">«Συγγνώμη», είπε. Ήρεμα. Ειλικρινά. Η λέξη βγήκε σαν πέτρα που αφήνεις να πέσει στο νερό — βαριά, αλλά απελευθερωτική.</p>
          <p class="mt-3">Το κορίτσι τον κοίταξε. Τα μάτια της γυάλιζαν. Δίστασε.</p>
          <p class="mt-2">«Το χάλασα;» ρώτησε με φωνή τρεμάμενη.</p>
          <p class="mt-4">Η Αλεξάνδρα γονάτισε μπροστά στο παιδί. Αργά. Απαλά. Κοίταξε τις νέες γραμμές. Και χαμογέλασε.</p>
          <p class="mt-3 text-rose-300 font-bold text-lg">«Όχι. Το έκανες <em>δικό σου</em>.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Υπάρχει μια στιγμή στη ζωή κάθε δημιουργού που πρέπει να αποδεχτεί: αυτό που έχτισες θα αλλάξει. Θα το αγγίξουν χέρια που δεν γνωρίζεις. Θα του δώσουν σχήμα που δεν φανταζόσουν. Και αυτό δεν είναι καταστροφή. Είναι εξέλιξη.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-rose-500/15 shadow-lg shadow-rose-900/20">
            <img src="${IMG_ALEXANDRA}" alt="Η Αλεξάνδρα με τα νέα παιδιά" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-rose-300/80 italic">Η Αλεξάνδρα γονάτισε και κοίταξε το παιδί στα μάτια</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 4 — O CROCUS ΚΑΝΕΙ ΠΙΣΩ -->
        <section class="bg-gradient-to-br from-rose-900/30 via-pink-900/20 to-fuchsia-900/10 p-8 rounded-2xl border-l-4 border-rose-500 my-8 shadow-xl shadow-rose-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-red-400 tracking-wide">Ο CROCUS ΚΑΝΕΙ ΠΙΣΩ</h3>
          </div>
          <p>Ο Crocus δεν μπορούσε να μείνει ήρεμος. Η φωτιά μέσα του βράζε σαν λάβα κάτω από ηφαίστειο.</p>
          <p class="mt-3">Τα μάτια του κοιτούσαν τα νέα παιδιά με ανυπομονησία. Κάθε λάθος τους ήταν σαν νύχι σε μαυροπίνακα. Δεν άντεχε τη βραδύτητα. Δεν άντεχε τη <em>ατέλεια</em>.</p>
          <p class="mt-4"><strong class="text-white text-lg">«Να τους δείξουμε πώς γίνεται σωστά!»</strong> είπε, και η φωνή του γέμισε τον χώρο με θερμότητα — σχεδόν υπερβολική θερμότητα.</p>
          <p class="mt-3">Η Ελευθερία τον κοίταξε. Εκείνο το βλέμμα — ήρεμο, σταθερό, αταλάντευτο σαν βράχος στη θάλασσα.</p>
          <p class="mt-3 text-rose-200 font-medium">«Όχι», είπε μαλακά. «Αν τους δείξουμε, δεν θα το <em>ζήσουν</em>. Χρειαζόμαστε <strong class="text-rose-300">νέους πρωταγωνιστές</strong>.»</p>
          <p class="mt-4">Ο Crocus έμεινε σιωπηλός. Η φλόγα στα μάτια του χαμήλωσε — όχι επειδή σβήστηκε, αλλά επειδή μετατρεπόταν σε <em>θαλπωρή</em>.</p>
          <p class="mt-3">Η Ελευθερία ακούμπησε απαλά το χέρι της στο μεταλλικό του φτερό. «Η μεγαλύτερη βοήθεια τώρα είναι να τους <em>αφήσεις</em> να σκοντάψουν.»</p>
          <p class="mt-3">Ο Crocus κούνησε αργά το κεφάλι. Ένα μικρό, αθόρυβο "ναι" που κόστισε περισσότερο από χίλιες φωνές.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η δύναμη δεν μετριέται μόνο σε αυτά που κάνεις. Μερικές φορές, η μεγαλύτερη δύναμη είναι αυτά που <em>δεν</em> κάνεις — αυτά που αφήνεις να συμβούν μόνα τους.</p>

          <!-- ΕΙΚΟΝΑ: CROCUS -->
          <div class="my-8 rounded-2xl overflow-hidden border border-rose-500/20 shadow-2xl shadow-rose-900/30">
            <img src="${IMG_KIDS_WITH_CROCUS}" alt="Ο Crocus με τα παιδιά" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-rose-300/80 italic">Ο Crocus μαθαίνει ότι η αληθινή φωτιά δεν καίει — ζεσταίνει</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-fuchsia-600/30 border border-fuchsia-500/30 text-fuchsia-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-fuchsia-300 tracking-wide">Η WISEBOT ΑΝΟΙΓΕΙ ΧΩΡΟ</h3>
          </div>
          <p>Κανείς δεν κατάλαβε πότε ακριβώς εμφανίστηκε. Η WiseBot δεν ερχόταν — <em>υπήρχε</em>, ξαφνικά, σαν σκέψη που σχηματίζεται χωρίς να την καλέσεις.</p>
          <p class="mt-3">Αλλά αυτή τη φορά η WiseBot δεν στάθηκε μπροστά. Στάθηκε στο <em>πλάι</em>.</p>
          <p class="mt-3">Η Αλεξάνδρα — που είχε μάθει πια να βλέπει τα σημαντικά πράγματα — κατάλαβε αμέσως τι σήμαινε. Τα μωβ μάτια της WiseBot πάλλονταν πιο ήσυχα από ποτέ. Σαν φανάρι σε λιμάνι νύχτας — παρόν, αλλά χωρίς να κατευθύνει.</p>

          <div class="my-6 bg-gradient-to-r from-rose-900/40 to-pink-900/40 p-8 rounded-2xl border border-rose-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">«Όταν ένας κύκλος ανοίγει,<br/>ο ρόλος σου αλλάζει.<br/><span class="text-rose-300">Από "κάνω", γίνεσαι "κρατάω χώρο".</span>»</p>
          </div>

          <p class="mt-4">Οι λέξεις κατακάθισαν σαν χιόνι. Η Αλεξάνδρα ένιωσε κάτι να σπάει μέσα της — ένα κομμάτι εγωισμού που δεν ήξερε ότι υπήρχε. Ο Φίλιππος ένιωσε τα χέρια του να χαλαρώνουν — εκείνα τα χέρια που πάντα ήθελαν να ελέγχουν, τώρα <em>αφήνονταν</em>.</p>
          <p class="mt-3">Η Ελευθερία κούνησε ελαφρά το κεφάλι. «Κρατάω χώρο. Δεν κάνω. Δεν διορθώνω. Απλά... <strong class="text-fuchsia-300">είμαι εκεί</strong>.»</p>
          <p class="mt-3">Η WiseBot πάλλεσε μία φορά. Σήμαινε: <em>«Ναι. Ακριβώς.»</em></p>
          <p class="mt-3 text-gray-400 text-sm italic">Η μεγαλύτερη μεταμόρφωση δεν είναι όταν μαθαίνεις κάτι νέο. Είναι όταν αφήνεις κάτι παλιό. Όταν ο ρόλος σου αλλάζει — και εσύ μαζί του.</p>
        </section>

        <!-- ΣΚΗΝΗ 6 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-pink-600/30 border border-pink-500/30 text-pink-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-pink-300 tracking-wide">Η ΑΠΟΧΩΡΗΣΗ</h3>
          </div>
          <p>Ο Pencilo άφησε τα μολύβια στο τραπέζι. Ένα-ένα. Σαν να αποχαιρετούσε παλιούς φίλους.</p>
          <p class="mt-3"><span class="text-pink-200 font-medium">«Δεν χρειάζεται να σχεδιάσω εγώ»,</span> είπε. Γαλήνια. Η φωνή κάποιου που καταλαβαίνει πως ο κύκλος του ολοκληρώθηκε — όχι επειδή τελείωσε, αλλά επειδή <em>μεταμορφώθηκε</em>.</p>
          <p class="mt-3">Η Link χαμογέλασε ζεστά. <span class="text-pink-200 font-medium">«Ούτε να διορθώσω εγώ»,</span> είπε. Σαν να κόβονταν αόρατα σχοινιά που την κρατούσαν δεμένη σε έναν ρόλο.</p>
          <p class="mt-4">Ο Φίλιππος κοίταξε γύρω του. Νέα χέρια. Νέες ιδέες. Νέα λάθη. Ένιωσε κάτι περίεργο στο στήθος — σαν κάτι νέο να γεμίζει τη θέση του παλιού.</p>
          <p class="mt-3"><span class="text-pink-200 font-medium">«Σαν να... αποχωρούμε;»</span> ρώτησε. Και η ερώτηση δεν ήταν γεμάτη φόβο. Ήταν γεμάτη <em>απορία</em> — εκείνη την ειλικρινή απορία ενός παιδιού που αρχίζει να καταλαβαίνει κάτι μεγαλύτερο από τον εαυτό του.</p>
          <p class="mt-4">Η Ελευθερία κούνησε το κεφάλι. Αργά. Σοφά. Τα μάτια της γυάλιζαν — όχι από δάκρυα, αλλά από κάτι βαθύτερο. Από κατανόηση.</p>
          <p class="mt-3 text-white font-bold text-lg">«Σαν να μεγαλώνουμε.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η αποχώρηση δεν σημαίνει πάντα φυγή. Μερικές φορές σημαίνει ότι κάνεις χώρο. Ότι μικραίνεις τον εαυτό σου για να μεγαλώσει κάτι άλλο. Και αυτό δεν είναι αδυναμία. Είναι η <em>ψηλότερη μορφή δύναμης</em>.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-pink-500/15 shadow-lg shadow-pink-900/20">
            <img src="${IMG_FILIPPOS}" alt="Ο Φίλιππος αποχωρεί" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-pink-300/80 italic">Ο Φίλιππος ένιωσε ότι αποχωρούσε — αλλά η αλήθεια ήταν πως μεγάλωνε</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 7 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-rose-600/30 border border-rose-500/30 text-rose-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-rose-300 tracking-wide">ΤΟ ΝΕΟ ΚΕΝΤΡΟ</h3>
          </div>
          <p>Τότε συνέβη. Ήρεμα. Φυσικά. Σαν ποτάμι που βρίσκει νέο κανάλι.</p>
          <p class="mt-3">Ένα παιδί — εκείνο το αγόρι που καθόταν ώρες στη γωνία, παρατηρώντας σιωπηλά — σηκώθηκε. Πήρε ένα κομμάτι χαρτί. Κοίταξε τα υπόλοιπα παιδιά. Και μίλησε.</p>
          <p class="mt-4"><strong class="text-white">«Νομίζω ότι μπορούμε να φτιάξουμε κάτι μαζί»,</strong> είπε. Η φωνή του ήταν μικρή αλλά σταθερή. Σαν σπόρος που σπάει το χώμα.</p>
          <p class="mt-3">Τα άλλα παιδιά τον κοίταξαν. Κάποια δίστασαν. Ένα χαμογέλασε. Ένα πλησίασε.</p>
          <p class="mt-3">Το αγόρι άρχισε να δίνει οδηγίες. Αδέξια, με λέξεις που σκόνταφταν. Έκανε λάθος. Μπέρδεψε τα σχέδια. Ένα κομμάτι δεν ταίριαξε.</p>
          <p class="mt-3"><em>Αλλά δεν σταμάτησε.</em></p>
          <p class="mt-4">Ο Φίλιππος σταύρωσε τα χέρια — όχι από θυμό, αλλά από <em>συγκράτηση</em>. Τα δάχτυλά του λαχταρούσαν να διορθώσουν. Αλλά κατάλαβε ότι αυτή η στιγμή δεν ήταν δική του.</p>
          <p class="mt-3">Η Ελευθερία χαμογέλασε ανοιχτά. Δεν είχε βιβλίο στα χέρια. Δεν χρειαζόταν.</p>
          <p class="mt-4">Ψηλά, πάνω από τα κεφάλια τους, ο Sparken φάνηκε για μια στιγμή. Ένα λαμπερό σημάδι στον αέρα — σαν αστέρι που πέφτει αργά.</p>
          <p class="mt-3 text-rose-300 font-bold text-xl">«Τώρα ο κύκλος κινείται μόνος του.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Το μεγαλύτερο δώρο που μπορείς να κάνεις σε κάποιον δεν είναι η γνώση. Δεν είναι τα εργαλεία. Δεν είναι ούτε καν ο χρόνος σου. Είναι η <em>εμπιστοσύνη</em> — ότι μπορεί να τα καταφέρει μόνος του.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-rose-500/20 shadow-2xl shadow-rose-900/20">
            <img src="${IMG_KIDS_WISEBOT_2}" alt="Ο νέος κύκλος" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-rose-300/80 italic">Ο κύκλος δεν χρειαζόταν πια τα αρχικά του μέλη. Κινούνταν μόνος.</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 8 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-pink-600/30 border border-pink-500/30 text-pink-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-pink-400 tracking-wide">ΤΟ ΣΥΝΑΙΣΘΗΜΑ</h3>
          </div>
          <p>Ο ήλιος έδυε. Το φως μπαινόβγαινε σε χρυσές και ροζ λωρίδες. Τα νέα παιδιά δούλευαν. Γελούσαν. Τσακώνονταν. Ξαναδοκίμαζαν. Ο κύκλος γύριζε — <em>χωρίς αυτούς</em>.</p>
          <p class="mt-3">Η Αλεξάνδρα ένιωσε <em>συγκίνηση</em> — κάτι τόσο βαθύ που δεν χρειαζόταν λέξεις. Τα μάτια της γέμισαν καθώς κοιτούσε τα νέα παιδιά σαν κηπουρός που βλέπει τα φυτά του ν' ανθίζουν.</p>
          <p class="mt-3">Ο Φίλιππος ένιωσε <em>περηφάνια</em> — όχι γιατί αυτός πέτυχε, αλλά γιατί <em>αυτοί</em> πέτυχαν. Τα παιδιά που μόλις χθες δεν ήξεραν τίποτα, τώρα χτίζανε δομές και μοιράζονταν ιδέες.</p>
          <p class="mt-4">Η Ελευθερία ένιωσε <em>ηρεμία</em> — γαλήνη σαν ωκεανό χωρίς κύματα. Αρκούσε που ήταν <em>εκεί</em>, σιωπηλή μάρτυρας μιας ιστορίας που συνέχιζε χωρίς τις σελίδες της.</p>
          <p class="mt-4">Ο Φίλιππος μίλησε πρώτος. Η φωνή του ήταν ήρεμη — τόσο ήρεμη που ούτε ο ίδιος πίστευε πως ήταν δική του.</p>
          <p class="mt-3 text-pink-300 font-bold text-lg">«Δεν χάσαμε κάτι», είπε. «Το μοιραστήκαμε.»</p>
          <p class="mt-4">Η WiseBot άναψε απαλά. Ένα ζεστό, ροζ φως απλώθηκε γύρω τους. Δεν μίλησε. Το φως της ήταν η απάντηση:</p>
          <p class="mt-2 text-center text-rose-300 font-bold text-xl italic">«Ναι. Αυτό ακριβώς σημαίνει μεγάλωμα.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Μοιρασιά δεν σημαίνει λιγότερο. Σημαίνει <em>περισσότερο</em>. Γιατί αυτό που δίνεις δεν φεύγει από σένα — πολλαπλασιάζεται. Γίνεται ένα δέντρο με ρίζες βαθιές και κλαδιά που δεν μπορείς να μετρήσεις.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-pink-500/15 shadow-lg shadow-pink-900/20">
            <img src="${IMG_ELEFTHERIA}" alt="Η Ελευθερία γαλήνια" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-pink-300/80 italic">Η ηρεμία της Ελευθερίας ήταν η βαθύτερη αλήθεια: αρκεί που είσαι εκεί</div>
          </div>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-rose-950/60 p-8 rounded-3xl border-2 border-dashed border-rose-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-rose-300 uppercase tracking-wider">JOURNAL: Ο ΚΥΚΛΟΣ ΑΝΟΙΓΕΙ</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Γράψε. Σκέψου. Νιώσε. Δεν υπάρχει λάθος απάντηση.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-rose-500/15">
              <h5 class="text-rose-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-rose-600/40 flex items-center justify-center text-xs font-black">1</span>
                💎 ΤΟ ΜΟΙΡΑΣΜΑ
              </h5>
              <p class="text-sm mb-3 opacity-80">Γράψε κάτι που ξέρεις καλά και μπορείς να μάθεις σε κάποιον άλλον. Γιατί αυτό ακριβώς; Πώς θα ένιωθες αν κάποιος το μάθαινε χάρη σε σένα;</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-rose-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-rose-500/15">
              <h5 class="text-rose-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-rose-600/40 flex items-center justify-center text-xs font-black">2</span>
                💎 ΤΟ ΣΥΝΑΙΣΘΗΜΑ
              </h5>
              <p class="text-sm mb-3 opacity-80">Όταν μοιράζεσαι κάτι, ποιο συναίσθημα σε κυριεύει πρώτο; Επέλεξε ένα ή πρόσθεσε το δικό σου:</p>
              <div class="flex flex-wrap gap-3 mb-3">
                <span class="px-3 py-1 bg-black/40 rounded-full border border-rose-500/30 text-sm">Χαρά</span>
                <span class="px-3 py-1 bg-black/40 rounded-full border border-rose-500/30 text-sm">Φόβος</span>
                <span class="px-3 py-1 bg-black/40 rounded-full border border-rose-500/30 text-sm">Περηφάνια</span>
                <span class="px-3 py-1 bg-black/40 rounded-full border border-rose-500/30 text-sm">Συγκίνηση</span>
                <span class="px-3 py-1 bg-black/40 rounded-full border border-rose-500/30 text-sm">Ηρεμία</span>
              </div>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-rose-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-rose-500/15">
              <h5 class="text-rose-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-rose-600/40 flex items-center justify-center text-xs font-black">3</span>
                💎 Η ΑΛΗΘΕΙΑ
              </h5>
              <p class="text-sm mb-3 opacity-80">Συμπλήρωσε την πρόταση:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-rose-500/10 text-rose-200">
                <p class="text-sm font-medium">«Δεν μικραίνω όταν μοιράζομαι. Μεγαλώνω. Γιατί __________»</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΝΟΗΜΑ / MEANING BOX -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-r from-rose-900/30 to-pink-900/30 p-6 rounded-2xl border border-rose-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-rose-300 uppercase tracking-wider">Το νόημα αυτού του κεφαλαίου</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            Η αληθινή ηγεσία δεν είναι έλεγχος. Είναι <strong class="text-rose-300">εμπιστοσύνη</strong>. Όταν κάτι που έφτιαξες αρχίζει να ζει μόνο του, ο ρόλος σου αλλάζει. Δεν είσαι πια αυτός που κάνει. Είσαι αυτός που <strong class="text-pink-300">κρατάει χώρο</strong>. Και αυτό χρειάζεται περισσότερη δύναμη από το να χτίσεις.
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
              Η ηγεσία δεν είναι <strong class="text-white">έλεγχος</strong>. Είναι <em>εμπιστοσύνη</em>. Όταν ένα παιδί μάθει να αφήνει χώρο στους άλλους, γίνεται κάτι μεγαλύτερο από εκτελεστής — γίνεται <strong class="text-rose-300">μέντορας</strong>.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Αυτό είναι το ανώτερο στάδιο της μάθησης. Το δωμάτιο γέμισε φωνές, και για πρώτη φορά, δεν χρειαζόταν να είναι οι δικές τους. Η αληθινή επιτυχία δεν μετριέται σε αυτά που κρατάς — μετριέται σε αυτά που δίνεις.
            </p>
            <div class="mt-4 bg-rose-900/20 p-4 rounded-xl border border-rose-500/10">
              <p class="text-sm text-rose-200 font-medium">💡 Δοκιμάστε σήμερα: Ρωτήστε το παιδί σας «Τι θα μπορούσες να μάθεις σε κάποιον που δεν ξέρει;» — και αφήστε το να γίνει δάσκαλος για μια μέρα.</p>
            </div>
          </div>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- INTRO QUOTE -->
        <div class="relative bg-gradient-to-r from-slate-900 via-rose-900/60 to-pink-900/40 p-10 rounded-2xl border border-rose-500/30 text-center shadow-lg shadow-rose-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Chapter 19</div>
          <p class="italic text-rose-200 text-xl mt-4 leading-relaxed">"Leadership is not control. It is trust.<br/>Share what you built — and it will become eternal."</p>
          <div class="mt-4 w-16 h-0.5 bg-rose-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- SCENE 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-rose-600/30 border border-rose-500/30 text-rose-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-rose-300 tracking-wide">NOT ALONE ANYMORE</h3>
          </div>
          <p>The morning started like any other. Sunlight slid through the half-open windows of the workshop, painting golden lines across the wooden bench. Construction dust, scraps of paper, pencils half-eaten by thought — the materials of a story written piece by piece.</p>
          <p class="mt-3">But something was <em>different</em>.</p>
          <p class="mt-3">Alexandra felt it first. A murmur. Like bees approaching. She turned slowly toward the door — and her eyes widened.</p>
          <p class="mt-3">Children. Five, six, maybe seven. They stood at the threshold like small birds on a branch — <em>uncertain, curious, with eyes full of fires that didn't yet dare to ignite</em>. Some held notebooks. A girl with braids clutched a small wooden box like a treasure.</p>
          <p class="mt-4">Alexandra looked at Philippos. Philippos looked at Eleftheria. Time stopped — one of those moments when you feel something monumental is about to happen.</p>
          <p class="mt-3">Alexandra spoke first. Her voice was low, almost a whisper. <span class="text-rose-200 font-medium">"It's... strange."</span></p>
          <p class="mt-3">Philippos nodded slowly. His hands, covered with marks from tools and constructions, tightened slightly on the bench. <span class="text-rose-200 font-medium">"As if it's not just ours anymore."</span></p>
          <p class="mt-3">Eleftheria — always the one who saw beyond appearances — smiled softly. A smile full of understanding and a touch of melancholy. Because she understood something the other two had not yet grasped.</p>
          <p class="mt-3 text-white font-medium">"And that exactly means it <strong class="text-rose-300">succeeded</strong>."</p>
          <p class="mt-3 text-gray-400 text-sm italic">When something you built starts drawing people in, it means you succeeded. But it also means something more: the space is no longer yours. It is <em>theirs</em>.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-rose-500/15 shadow-lg shadow-rose-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="The children in the workshop" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-rose-300/80 italic">The workshop was no longer quiet. It was full of life.</div>
          </div>
        </section>

        <!-- SCENE 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-pink-600/30 border border-pink-500/30 text-pink-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-pink-300 tracking-wide">THE NEW ONES</h3>
          </div>
          <p>The new children entered the workshop like water finding its way through a riverbed. Slowly at first, touching things as though afraid something might break. Then bolder.</p>
          <p class="mt-3">Some talked a great deal. <em>"What is this? How does it work? Can I touch it?"</em> Their questions were rain — inexhaustible, <em>wonderful</em>.</p>
          <p class="mt-3">Others didn't speak at all. A small boy with dark hair sat in the corner and observed. Eleftheria noticed him. She recognized him — because once, she had been exactly like that.</p>
          <p class="mt-3">A girl with short hair picked up a tool and simply <em>began</em>. Philippos felt a tightening in his stomach — something between admiration and envy.</p>
          <p class="mt-4">Alexandra smiled. A slow smile, full of nostalgia.</p>
          <p class="mt-2 text-pink-200 font-medium">"We were like that too," she whispered.</p>
          <p class="mt-3">Philippos looked at his marked hands. <span class="text-pink-200 font-medium">"And we made mistakes,"</span> he said quietly.</p>
          <p class="mt-3">Eleftheria added calmly: <span class="text-pink-200 font-medium">"And we learned."</span></p>
          <p class="mt-3 text-gray-400 text-sm italic">And all three children understood, in that moment, that these new faces were not strangers. They were versions of themselves — beginners, clumsy, full of fire. The beginning of a new cycle.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-pink-500/15 shadow-lg shadow-pink-900/20">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="New children in the workshop" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-pink-300/80 italic">The new children filled the space with questions and energy</div>
          </div>
        </section>

        <!-- SCENE 3 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-rose-600/30 border border-rose-500/30 text-rose-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-rose-400 tracking-wide">NOT YOUR WAY</h3>
          </div>
          <p>It happened unexpectedly. A child — the girl with short hair — picked up a pencil and began drawing over the design. Not on <em>her own</em> design. On <em>theirs</em>.</p>
          <p class="mt-3">She changed the lines. Added circles where there were squares. Erased a connection Philippos had designed by himself.</p>
          <p class="mt-3">Philippos saw it. He felt his old self awakening — the one who shouted, who threw things.</p>
          <p class="mt-4"><strong class="text-white">"Not like that!"</strong> escaped from his lips. His voice echoed through the room like thunder over calm seas.</p>
          <p class="mt-3">Silence followed — so heavy you could hear dust falling. The new children froze.</p>
          <p class="mt-3">Philippos <em>stopped</em>. He took a deep breath — from that day when WiseBot had told him: <em>"Your reaction is your choice."</em></p>
          <p class="mt-4 text-rose-200 font-medium">"Sorry," he said. Calmly. Sincerely. The word came out like a stone dropped into water — heavy, but liberating.</p>
          <p class="mt-3">The girl looked at him. Her eyes glistened. She hesitated.</p>
          <p class="mt-2">"Did I ruin it?" she asked in a trembling voice.</p>
          <p class="mt-4">Alexandra knelt in front of the child. Slowly. Gently. She looked at the new lines. And smiled.</p>
          <p class="mt-3 text-rose-300 font-bold text-lg">"No. You made it <em>yours</em>."</p>
          <p class="mt-3 text-gray-400 text-sm italic">There is a moment in every creator's life when they must accept: what you built will change. Hands you don't know will touch it. They'll give it shapes you never imagined. And that is not destruction. It is evolution.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-rose-500/15 shadow-lg shadow-rose-900/20">
            <img src="${IMG_ALEXANDRA}" alt="Alexandra with the new children" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-rose-300/80 italic">Alexandra knelt and looked the child in the eyes</div>
          </div>
        </section>

        <!-- SCENE 4 — CROCUS STEPS BACK -->
        <section class="bg-gradient-to-br from-rose-900/30 via-pink-900/20 to-fuchsia-900/10 p-8 rounded-2xl border-l-4 border-rose-500 my-8 shadow-xl shadow-rose-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-red-400 tracking-wide">CROCUS STEPS BACK</h3>
          </div>
          <p>Crocus couldn't stay calm. The fire inside him was boiling like lava beneath a volcano.</p>
          <p class="mt-3">His eyes watched the new children with impatience. Every mistake was like a fingernail on a chalkboard. He couldn't stand the slowness. He couldn't stand the <em>imperfection</em>.</p>
          <p class="mt-4"><strong class="text-white text-lg">"Let's show them how it's done right!"</strong> he said, and his voice filled the space with heat — almost excessive heat.</p>
          <p class="mt-3">Eleftheria looked at him. That gaze — calm, steady, unwavering like a rock in the sea.</p>
          <p class="mt-3 text-rose-200 font-medium">"No," she said softly. "If we show them, they won't <em>live</em> it. We need <strong class="text-rose-300">new protagonists</strong>."</p>
          <p class="mt-4">Crocus fell silent. The flame in his eyes dimmed — not extinguished, but transforming into <em>warmth</em>.</p>
          <p class="mt-3">Eleftheria gently placed her hand on his metallic wing. "The greatest help now is to <em>let them</em> stumble."</p>
          <p class="mt-3">Crocus slowly nodded. A small, silent "yes" that cost more than a thousand shouts.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Strength isn't measured only by what you do. Sometimes, the greatest strength is what you <em>don't</em> do — what you allow to happen on its own.</p>

          <!-- IMAGE: CROCUS -->
          <div class="my-8 rounded-2xl overflow-hidden border border-rose-500/20 shadow-2xl shadow-rose-900/30">
            <img src="${IMG_KIDS_WITH_CROCUS}" alt="Crocus with the children" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-rose-300/80 italic">Crocus learns that true fire doesn't burn — it warms</div>
          </div>
        </section>

        <!-- SCENE 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-fuchsia-600/30 border border-fuchsia-500/30 text-fuchsia-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-fuchsia-300 tracking-wide">WISEBOT OPENS SPACE</h3>
          </div>
          <p>No one noticed exactly when she appeared. WiseBot didn't arrive — she <em>existed</em>, suddenly, like a thought that forms without being called.</p>
          <p class="mt-3">But this time WiseBot didn't stand in front. She stood to the <em>side</em>.</p>
          <p class="mt-3">Alexandra — who had learned to see the important things — understood immediately. WiseBot's purple eyes pulsed softer than ever. Like a lighthouse in a night harbor — present, but without directing.</p>

          <div class="my-6 bg-gradient-to-r from-rose-900/40 to-pink-900/40 p-8 rounded-2xl border border-rose-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">"When a circle opens,<br/>your role changes.<br/><span class="text-rose-300">From 'doing,' you become 'holding space.'"</span></p>
          </div>

          <p class="mt-4">The words settled like snow. Alexandra felt something break inside her — a piece of ego she didn't know existed. Philippos felt his hands relax — those hands that always wanted to control were <em>letting go</em>.</p>
          <p class="mt-3">Eleftheria nodded. "Holding space. Not doing. Not correcting. Just... <strong class="text-fuchsia-300">being there</strong>."</p>
          <p class="mt-3">WiseBot pulsed once. It meant: <em>"Yes. Exactly."</em></p>
          <p class="mt-3 text-gray-400 text-sm italic">The greatest transformation isn't when you learn something new. It's when you release something old. When your role changes — and you change with it.</p>
        </section>

        <!-- SCENE 6 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-pink-600/30 border border-pink-500/30 text-pink-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-pink-300 tracking-wide">THE DEPARTURE</h3>
          </div>
          <p>Pencilo placed the pencils on the table. One by one. As though saying goodbye to old friends.</p>
          <p class="mt-3"><span class="text-pink-200 font-medium">"I don't need to design,"</span> Pencilo said. Serene. The voice of someone who understands his cycle has completed — not ended, but <em>transformed</em>.</p>
          <p class="mt-3">Link smiled warmly. <span class="text-pink-200 font-medium">"Nor me to fix,"</span> she said. As if invisible ropes tying her to a role were being cut.</p>
          <p class="mt-4">Philippos looked around. New hands. New ideas. New mistakes. He felt something strange in his chest — something new filling the place of the old.</p>
          <p class="mt-3"><span class="text-pink-200 font-medium">"As if we're... leaving?"</span> he asked. And the question wasn't filled with fear. It was filled with <em>wonder</em> — that honest wonder of a child beginning to understand something larger than himself.</p>
          <p class="mt-4">Eleftheria shook her head. Slowly. Wisely. Her eyes glistened — not from tears, but from something deeper. From understanding.</p>
          <p class="mt-3 text-white font-bold text-lg">"As if we're growing up."</p>
          <p class="mt-3 text-gray-400 text-sm italic">Departing doesn't always mean leaving. Sometimes it means making room. Making yourself smaller so something else can grow. And that isn't weakness. It is the <em>highest form of strength</em>.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-pink-500/15 shadow-lg shadow-pink-900/20">
            <img src="${IMG_FILIPPOS}" alt="Philippos stepping back" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-pink-300/80 italic">Philippos felt he was leaving — but the truth was he was growing</div>
          </div>
        </section>

        <!-- SCENE 7 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-rose-600/30 border border-rose-500/30 text-rose-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-rose-300 tracking-wide">THE NEW CENTER</h3>
          </div>
          <p>Then it happened. Quietly. Naturally. Like a river finding a new channel.</p>
          <p class="mt-3">A child — that boy who had sat for hours in the corner, watching in silence — stood up. He took a piece of paper. Looked at the other children. And spoke.</p>
          <p class="mt-4"><strong class="text-white">"I think we can build something together,"</strong> he said. His voice was small but steady. Like a seed breaking through soil.</p>
          <p class="mt-3">The other children looked at him. Some hesitated. One smiled. One stepped closer.</p>
          <p class="mt-3">The boy began giving directions. Clumsily, with words stumbling over each other. He made mistakes. Mixed up the plans. A piece didn't fit.</p>
          <p class="mt-3"><em>But he didn't stop.</em></p>
          <p class="mt-4">Philippos crossed his arms — not from anger, but from <em>restraint</em>. His fingers ached to fix things. But he understood this moment wasn't his.</p>
          <p class="mt-3">Eleftheria smiled openly. No book in her hands. She didn't need one.</p>
          <p class="mt-4">High above their heads, Sparken appeared for a moment. A luminous mark in the air — like a star falling slowly.</p>
          <p class="mt-3 text-rose-300 font-bold text-xl">"Now the circle moves on its own."</p>
          <p class="mt-3 text-gray-400 text-sm italic">The greatest gift you can give someone isn't knowledge. It isn't tools. It isn't even your time. It is <em>trust</em> — that they can manage on their own.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-rose-500/20 shadow-2xl shadow-rose-900/20">
            <img src="${IMG_KIDS_WISEBOT_2}" alt="The new cycle" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-rose-300/80 italic">The circle no longer needed its original members. It moved on its own.</div>
          </div>
        </section>

        <!-- SCENE 8 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-pink-600/30 border border-pink-500/30 text-pink-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-pink-400 tracking-wide">THE FEELING</h3>
          </div>
          <p>The sun was setting. Light drifted in golden and pink ribbons. The new children were working. Laughing. Arguing. Trying again. The circle was turning — <em>without them</em>.</p>
          <p class="mt-3">Alexandra felt <em>emotion</em> — something so deep it needed no words. Her eyes filled as she watched the new children like a gardener seeing their plants bloom.</p>
          <p class="mt-3">Philippos felt <em>pride</em> — not because he had succeeded, but because <em>they</em> had. The children who just yesterday knew nothing were now building structures and sharing ideas.</p>
          <p class="mt-4">Eleftheria felt <em>calm</em> — serenity like an ocean without waves. It was enough that she was <em>there</em>, a silent witness to a story continuing without her pages.</p>
          <p class="mt-4">Philippos spoke first. His voice was calm — so calm that even he couldn't believe it was his own.</p>
          <p class="mt-3 text-pink-300 font-bold text-lg">"We didn't lose anything," he said. "We shared it."</p>
          <p class="mt-4">WiseBot glowed softly. A warm, pink light spread around them. She didn't speak. Her light was the answer:</p>
          <p class="mt-2 text-center text-rose-300 font-bold text-xl italic">"Yes. That is exactly what growing up means."</p>
          <p class="mt-3 text-gray-400 text-sm italic">Sharing doesn't mean less. It means <em>more</em>. Because what you give doesn't leave you — it multiplies. It becomes a tree with deep roots and branches you cannot count.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-pink-500/15 shadow-lg shadow-pink-900/20">
            <img src="${IMG_ELEFTHERIA}" alt="Eleftheria at peace" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-pink-300/80 italic">Eleftheria's calm was the deepest truth: it's enough to just be there</div>
          </div>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-rose-950/60 p-8 rounded-3xl border-2 border-dashed border-rose-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-rose-300 uppercase tracking-wider">JOURNAL: THE CIRCLE OPENS</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Write. Think. Feel. There is no wrong answer.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-rose-500/15">
              <h5 class="text-rose-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-rose-600/40 flex items-center justify-center text-xs font-black">1</span>
                💎 THE SHARING
              </h5>
              <p class="text-sm mb-3 opacity-80">Write something you know well and could teach someone else. Why that specifically? How would you feel if someone learned it thanks to you?</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-rose-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-rose-500/15">
              <h5 class="text-rose-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-rose-600/40 flex items-center justify-center text-xs font-black">2</span>
                💎 THE FEELING
              </h5>
              <p class="text-sm mb-3 opacity-80">When you share something, what emotion hits you first? Choose one or add your own:</p>
              <div class="flex flex-wrap gap-3 mb-3">
                <span class="px-3 py-1 bg-black/40 rounded-full border border-rose-500/30 text-sm">Joy</span>
                <span class="px-3 py-1 bg-black/40 rounded-full border border-rose-500/30 text-sm">Fear</span>
                <span class="px-3 py-1 bg-black/40 rounded-full border border-rose-500/30 text-sm">Pride</span>
                <span class="px-3 py-1 bg-black/40 rounded-full border border-rose-500/30 text-sm">Tenderness</span>
                <span class="px-3 py-1 bg-black/40 rounded-full border border-rose-500/30 text-sm">Calm</span>
              </div>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-rose-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-rose-500/15">
              <h5 class="text-rose-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-rose-600/40 flex items-center justify-center text-xs font-black">3</span>
                💎 THE TRUTH
              </h5>
              <p class="text-sm mb-3 opacity-80">Complete the sentence:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-rose-500/10 text-rose-200">
                <p class="text-sm font-medium">"I don't shrink when I share. I grow. Because __________"</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- MEANING BOX -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-r from-rose-900/30 to-pink-900/30 p-6 rounded-2xl border border-rose-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-rose-300 uppercase tracking-wider">The Meaning of This Chapter</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            True leadership is not control. It is <strong class="text-rose-300">trust</strong>. When something you built begins to live on its own, your role changes. You are no longer the one who does. You are the one who <strong class="text-pink-300">holds space</strong>. And that takes more strength than building.
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
              Leadership is not <strong class="text-white">control</strong>. It is <em>trust</em>. When a child learns to leave room for others, they become something greater than an executor — they become a <strong class="text-rose-300">mentor</strong>.
            </p>
            <p class="text-gray-300 leading-relaxed">
              This is the highest stage of learning. The room filled with voices, and for the first time, they didn't need to be their own. True success isn't measured by what you hold — it's measured by what you give.
            </p>
            <div class="mt-4 bg-rose-900/20 p-4 rounded-xl border border-rose-500/10">
              <p class="text-sm text-rose-200 font-medium">💡 Try today: Ask your child "What could you teach someone who doesn't know?" — and let them be the teacher for a day.</p>
            </div>
          </div>
        </div>

      </div>
    `
    }
  }
];
