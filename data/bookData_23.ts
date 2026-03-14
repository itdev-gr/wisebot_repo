
import { Book } from '../types';

// ============================================================
// BOOK 23: TO KOYMPI POY DEN PATIOTAN / THE BUTTON THAT WASN'T PRESSED
// Hero: WiseBot
// Theme: SYNEPEIA / CONSISTENCY
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

export const BOOK_23: Book[] = [
  {
    id: 23,
    title: { el: "ΤΟ ΚΟΥΜΠΙ ΠΟΥ ΔΕΝ ΠΑΤΙΟΤΑΝ", en: "THE BUTTON THAT WASN'T PRESSED" },
    theme: { el: "ΣΥΝΕΠΕΙΑ", en: "CONSISTENCY" },
    stepLabel: { el: "WISEBOT & ΣΥΝΕΠΕΙΑ", en: "WISEBOT & CONSISTENCY" },
    author: "Wisebot",
    cover: IMG_WISEBOT,
    videoUrl: "",
    description: {
      el: "Το παιχνίδι ήταν σχεδόν έτοιμο, αλλά κανείς δεν το άγγιζε. Μια ιστορία για το πώς χτίζεις συνήθειες και γιατί τα δύο λεπτά μετράνε.",
      en: "The game was almost ready, but no one touched it. A story about building habits and why two minutes matter."
    },
    meaning: {
      el: "Οι νικητές δεν ξεκινούν επειδή νιώθουν έτοιμοι. Ξεκινούν επειδή είναι η ώρα.",
      en: "Winners don't start because they feel ready. They start because it's time."
    },
    xp: 420,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- ΕΙΣΑΓΩΓΙΚΟ QUOTE -->
        <div class="relative bg-gradient-to-r from-slate-900 via-teal-900/60 to-cyan-900/40 p-10 rounded-2xl border border-teal-500/30 text-center shadow-lg shadow-teal-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Κεφαλαιο 23</div>
          <p class="italic text-teal-200 text-xl mt-4 leading-relaxed">«Οταν κατι γινεται ευκολο να ξεκινησει,<br/>δεν χρειαζεται δυναμη. Χρειαζεται μονο σειρα.»</p>
          <div class="mt-4 w-16 h-0.5 bg-teal-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- ΣΚΗΝΗ 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-600/30 border border-teal-500/30 text-teal-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-teal-300 tracking-wide">Η ΣΧΕΔΟΝ ΕΤΟΙΜΑΣΙΑ</h3>
          </div>
          <p>Το παιχνιδι ηταν ετοιμο. Σχεδον. Ηταν εκει, πανω στο τραπεζι του εργαστηριου, σκεπασμενο με ενα πανι. Εμοιαζε με θησαυρο που περιμενε — μονο που αυτοι που τον ειχαν φτιαξει δεν τον αγγιζαν.</p>
          <p class="mt-3">Το ταμπλο δουλευε. Ο Φιλιππος ειχε περασει καλωδια μεσα απο το κουτι. Οι καρτες ειχαν τυπωθει — η Αλεξανδρα τις ειχε ζωγραφισει μια-μια. Η Ελευθερια ειχε οργανωσει τους κανονες σε τρεις σελιδες.</p>
          <p class="mt-3">Εμενε ενα πραγμα. Το πιο δυσκολο απ' ολα.</p>
          <p class="mt-4 text-white font-medium text-lg">Να το δοκιμαζουν καθε μερα.</p>
          <p class="mt-3">Οχι μια φορα. Οχι οταν ειχαν ορεξη. <em>Καθε μερα.</em> Σταθερα. Οπως ανατελλει ο ηλιος — οχι επειδη καποιος τον παρακαλεσε.</p>
          <p class="mt-3">Αλλα τα παιδια δεν ηταν ηλιοι. Η αποσταση αναμεσα στο "θελω" και στο "κανω" ηταν η μεγαλυτερη αποσταση που ειχαν αντιμετωπισει ποτε.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Γιατι ενα ονειρο χωρις ρουτινα ειναι απλα μια ευχη. Και οι ευχες, χωρις πραξη, δεν εχουν δυναμη.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-teal-500/15 shadow-lg shadow-teal-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="Τα παιδια μπροστα στο σχεδον ετοιμο παιχνιδι" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-teal-300/80 italic">Το παιχνιδι ηταν εκει. Περιμενε. Αλλα κανεις δεν εκανε το πρωτο βημα.</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-600/30 border border-cyan-500/30 text-cyan-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-cyan-300 tracking-wide">Η ΚΑΘΥΣΤΕΡΗΣΗ</h3>
          </div>
          <p>Η πρωτη μερα περασε. Κανεις δεν ακουμπησε το κουτι. Ηταν Δευτερα, και η Δευτερα ειναι ετσι κι αλλιως μια μερα που κανεις δεν θελει να κανει τιποτα. Η Αλεξανδρα ειπε ότι ηταν κουρασμενη απο το σχολειο. Ο Φιλιππος ειπε ότι ειχε πονοκεφαλο. Η Ελευθερια δεν ειπε τιποτα — απλα ανοιξε ενα βιβλιο και χαθηκε μεσα του.</p>
          <p class="mt-3">Η δευτερη μερα ηταν χειροτερη. Οχι γιατι κατι πηγε στραβα, αλλα γιατι <em>τιποτα δεν πηγε πουθενα</em>. Ο Φιλιππος κοιταξε τις καρτες: «Αυριο σιγουρα.» Η Αλεξανδρα συμφωνησε. «Σημερα εχουμε διαβασμα.»</p>
          <p class="mt-3">Η τριτη μερα εφερε τη μεγαλυτερη δικαιολογια: «Χρειαζομαστε λιγο διαλειμμα.» Λες και ειχαν κουραστει απο κατι που δεν ειχαν καν αρχισει.</p>
          <p class="mt-3">Μετα ηρθε η τεταρτη μερα. Και η πεμπτη. «Απο Δευτερα σοβαρα.» Η Αλεξανδρα κουνησε το κεφαλι. Η Ελευθερια γυρισε σελιδα χωρις να κοιταξει.</p>
          <p class="mt-4">Το παιχνιδι δεν χαλασε. Δεν εσπασε. Δεν εξαφανιστηκε. Αυτο ηταν το χειροτερο. <em>Απλως εμεινε εκει.</em> Σαν υποσχεση που δεν κραταει κανεις. Σαν γραμμα που δεν ανοιγεται ποτε. Σαν κουμπι που κανεις δεν παταει.</p>
          <p class="mt-3">Η Wisebot καθοταν σιωπηλη στο ραφι. Τα ματια της εσβηναν και αναβαν αργα, σαν αναπνοη. Δεν ελεγε τιποτα. Απλα <em>παρατηρουσε</em>. Τριτη μερα χωρις να αγγιξουν το εργο τους. Η σκονη ειχε αρχισει να καθεται πανω στις καρτες — σχεδον αορατη, αλλα αρκετη για να δειξει ποσος χρονος ειχε περασει.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η αναβολη δεν φωναζει. Δεν απειλει. Δεν χτυπαει πορτες. Απλα σε κανει να ξεχασεις τι ηθελες. Και ξαφνικα, αυτο που ηθελες δεν μοιαζει πια δικο σου.</p>
        </section>

        <!-- ΣΚΗΝΗ 3 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-600/30 border border-teal-500/30 text-teal-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-teal-300 tracking-wide">Η ΕΡΩΤΗΣΗ ΤΗΣ WISEBOT</h3>
          </div>
          <p>Ηταν Πεμπτη απογευμα. Τα παιδια ηταν στο εργαστηρι αλλα κανεις δεν δουλευε. Ο Φιλιππος εφτιαχνε πυραμιδα με τσιχλοχαρτα. Η Αλεξανδρα ζωγραφιζε κυκλους που δεν σημαιναν τιποτα.</p>
          <p class="mt-3">Η Wisebot κινηθηκε. Προσγειωθηκε στο τραπεζι, διπλα στο κουτι. Τα ματια της λαμπαν σαν θαλασσα κατω απο φεγγαρι.</p>
          <p class="mt-4 text-white text-lg">— «Θελετε να πετυχει το παιχνιδι;»</p>
          <p class="mt-3">«Ναι!» φωναξαν και οι τρεις. Η Wisebot εγειρε το κεφαλι. Τα ματια της στενεψαν — οχι με κριση, αλλα με <em>περιεργεια</em>.</p>
          <p class="mt-4 text-teal-200 text-lg">— «Τοτε γιατι δεν το ακουμπατε;»</p>
          <p class="mt-3">Σιωπη. Βαθια, αβολη σιωπη. Ο Φιλιππος σηκωσε τους ωμους. «Δεν εχουμε ορεξη καθε μερα», ειπε. Η φωνη του ακουστηκε σαν δικαιολογια που ο ιδιος δεν πιστευε. Η Αλεξανδρα κοιταξε το πατωμα.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-teal-500/15 shadow-lg shadow-teal-900/20">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="Η Wisebot μιλαει στα παιδια" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-teal-300/80 italic">Η Wisebot εκανε την ερωτηση που κανεις δεν ηθελε να ακουσει</div>
          </div>

          <p class="mt-4">Η Wisebot πλησιασε το κουμπι — κοκκινο, γυαλιστερο, αναγγιχτο εδω και μερες. Τα φτερα της ακουμπησαν ελαφρα το πλαστικο — αρκετα για να τους δειξει <em>ποσο κοντα ηταν</em>.</p>

          <div class="my-6 bg-gradient-to-r from-teal-900/40 to-cyan-900/40 p-8 rounded-2xl border border-teal-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">«Περιμενετε να νιωσετε ετοιμοι.<br/><span class="text-teal-300">Αλλα οι νικητες δεν ξεκινουν επειδη νιωθουν ετοιμοι.</span><br/>Ξεκινουν επειδη ειναι η ωρα.»</p>
          </div>

          <p class="mt-4">Η λεξη <em>"ωρα"</em> εμεινε στον αερα. Ο Φιλιππος ενιωσε κατι στο στηθος — σαν ντροπη, σαν αληθεια. Η Ελευθερια ενιωσε οτι η γνωση χωρις πραξη ειναι <em>σιωπη με γραμματα</em>.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Καποιες αληθειες πονανε αργοτερα — οταν καταλαβεις ποσο χρονο εχασες περιμενοντας την τελεια στιγμη.</p>
        </section>

        <!-- ΣΚΗΝΗ 4 — ΚΑΝΟΝΑΣ 2 ΛΕΠΤΩΝ — HIGHLIGHTED -->
        <section class="bg-gradient-to-br from-teal-900/30 via-cyan-900/20 to-emerald-900/10 p-8 rounded-2xl border-l-4 border-teal-500 my-8 shadow-xl shadow-teal-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-600/30 border border-teal-500/30 text-teal-300 font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-teal-400 tracking-wide">Ο ΚΑΝΟΝΑΣ ΤΩΝ 2 ΛΕΠΤΩΝ</h3>
          </div>
          <p>Την επομενη μερα, η Ελευθερια εκανε κατι απροσμενο. Πηρε εναν πρασινο μαρκαδορο και εγραψε σε ενα χαρτι:</p>

          <div class="my-6 bg-black/40 p-6 rounded-2xl border border-teal-500/30 text-center">
            <p class="text-teal-200 font-black text-2xl tracking-wide">ΜΕΤΑ ΤΟ ΔΙΑΒΑΣΜΑ<br/>ΔΟΚΙΜΗ 2 ΛΕΠΤΑ</p>
          </div>

          <p class="mt-3">Το κολλησε διπλα στο κουτι. Καθε φορα που περνουσαν, εκει ηταν. Μια υπενθυμιση.</p>
          <p class="mt-3">Ο Φιλιππος το ειδε και γελασε δυνατα.</p>
          <p class="mt-4 text-white text-lg">«Δυο λεπτα;» ρωτησε, σαν να ακουσε ανεκδοτο. «Δυο λεπτα δεν αλλαζουν τιποτα! Χρειαζομαστε ωρες! Χρειαζομαστε χρονο! Τι θα κανουμε σε δυο λεπτα;»</p>
          <p class="mt-3">Η Αλεξανδρα κοιταξε τη σημειωση. «Μοιαζει λιγο... μικρο.» Η Ελευθερια δεν μιλησε. Γυρισε και κοιταξε τη Wisebot. Η κουκουβαγια καθοταν ακινητη.</p>
          <p class="mt-4"><strong class="text-teal-300">Η Wisebot δεν απαντησε.</strong></p>
          <p class="mt-3">Η σιωπη ενος σοφου σημαινει: <em>"Θα δεις μονος σου."</em></p>
          <p class="mt-3">Η Ελευθερια χαμογελασε. Ηξερε κατι που οι αλλοι δεν ηξεραν ακομα: τα μεγαλα πραγματα αρχιζουν με <strong class="text-teal-200">μικροσκοπικα βηματα που δεν σταματανε ποτε</strong>.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Δυο λεπτα ειναι αρκετα για να πατησεις ενα κουμπι. Αρκετα για να ανοιξεις μια πορτα. Αρκετα για να πεις στον εαυτο σου: "Ειμαι εδω. Σημερα."</p>
        </section>

        <!-- ΣΚΗΝΗ 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-emerald-400 tracking-wide">Η ΑΛΛΑΓΗ</h3>
          </div>
          <p>Το απογευμα εκεινης της μερας, κατι συνεβη. Τιποτα εντυπωσιακο. Τιποτα δραματικο. Απλα τρια παιδια καθισαν μπροστα σε ενα κουτι και πατησαν ενα κουμπι.</p>
          <p class="mt-3">Δυο λεπτα. Αυτο ηταν η συμφωνια. Ο Φιλιππος ελεγξε ενα καλωδιο. Η Αλεξανδρα κοιταξε μια καρτα και διορθωσε ενα λαθος στο κειμενο. Η Ελευθερια σημειωσε κατι στον πινακα κανονων.</p>
          <p class="mt-3">Δυο λεπτα εγιναν τρια. Τρια εγιναν πεντε. Πεντε εγιναν δεκα. Κανεις δεν μετρησε. Κανεις δεν ειπε "παμε παρακατω". Απλα... <em>συνεχισαν</em>.</p>
          <p class="mt-4">Μετα απο δεκαπεντε λεπτα ο Φιλιππος σηκωσε το κεφαλι. «Δεν ηταν μονο δυο λεπτα;» Η Ελευθερια εγραψε ημερομηνια και χρονο στο σημειωματαριο — σαν ημερολογιο πειραματος. Γιατι αυτο ηταν: ενα πειραμα με <strong class="text-emerald-300">τον εαυτο τους</strong>.</p>
          <p class="mt-4">Την επομενη μερα, ξανα. Δυο λεπτα που εγιναν εικοσι. Και την επομενη. Και την επομενη. Οχι απο εμπνευση. Αλλα επειδη ηταν γραμμενο στον τοιχο — μια συμφωνια <em>με τον εαυτο τους</em>.</p>
          <p class="mt-3">Μια εβδομαδα μετα, δεν το σκεφτοντουσαν πια. Απλα το εκαναν. Σαν πλενεις τα δοντια σου. Σαν αναπνεεις.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Αυτο ειναι μια συνηθεια. Δεν ειναι ηρωισμος. Δεν ειναι ταλεντο. Ειναι μια αποφαση που την παιρνεις μια φορα, και μετα αφηνεις τη ρουτινα να κανει τη δουλεια.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-emerald-500/15 shadow-lg shadow-emerald-900/20">
            <img src="${IMG_KIDS_WISEBOT_2}" alt="Τα παιδια δουλευουν μαζι στο παιχνιδι" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-emerald-300/80 italic">Δυο λεπτα τη μερα εγιναν συνηθεια. Η συνηθεια εγινε μετασχηματισμος.</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 6 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-600/30 border border-teal-500/30 text-teal-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-teal-300 tracking-wide">ΤΟ ΠΕΡΙΒΑΛΛΟΝ</h3>
          </div>
          <p>Ηρθε ενα βραδυ που αλλαξε τα παντα. Με εναν μικρο τροπο.</p>
          <p class="mt-3">Ο Φιλιππος ειχε αφησει τα εργαλεια σκορπισμενα. Παντου. Κλειδια, πενσες, καλωδια, μια κολλα που ειχε στεγνωσει ανοιχτη. Το τραπεζι εμοιαζε με πεδιο μαχης — μονο που κανεις δεν ειχε πολεμησει.</p>
          <p class="mt-3">Την επομενη μερα, κανεις δεν ειχε ορεξη. «Δεν μπορω να ξεκινησω ετσι», ειπε ο Φιλιππος. Η Αλεξανδρα ανασηκωσε τους ωμους. «Δεν ξερω καν που ειναι η δικη μου δουλεια.»</p>
          <p class="mt-4">Η Wisebot πεταξε αργα πανω απο το τραπεζι, αφηνοντας τα ματια της να σαρωσουν τον χωρο.</p>
          <p class="mt-4 text-teal-200 text-lg">— «Το περιβαλλον σας βοηθαει η σας σαμποταρει;»</p>
          <p class="mt-3">Η απαντηση ηταν μπροστα τους.</p>
          <p class="mt-3">Η Wisebot προσθεσε: «Αν ο χωρος ειναι χαος, η σκεψη σας γινεται χαος. Αν ο χωρος ειναι ετοιμος, εσεις γινεστε ετοιμοι.»</p>
          <p class="mt-3">Την ιδια νυχτα, η Ελευθερια εμεινε μια ωρα παραπανω. Δεν δουλεψε στο παιχνιδι. Ετοιμασε τον χωρο. Μαζεψε τα εργαλεια σε σειρα. Εσκουπισε το τραπεζι. Ετοιμασε τρεις μικρους σωρους — εναν για καθε παιδι.</p>
          <p class="mt-4">Την επομενη μερα, <em>κατι ηταν διαφορετικο</em>. Ο χωρος τους καλουσε: «Ελα, ολα ειναι ετοιμα.»</p>
          <p class="mt-3">Ξεκινησαν χωρις σκεψη. Εκατσαν. Πατησαν το κουμπι. Αρχισαν.</p>
          <p class="mt-4 text-white font-bold text-lg">Δεν αλλαξαν χαρακτηρα. Αλλαξαν τον χωρο.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η πειθαρχια δεν ειναι σουπερ δυναμη. Ειναι σχεδιασμος.</p>
        </section>

        <!-- ΣΚΗΝΗ 7 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-red-400 tracking-wide">Η ΑΛΥΣΙΔΑ ΠΟΥ ΕΣΠΑΣΕ</h3>
          </div>
          <p>Ηρθε η τριτη εβδομαδα. Και μαζι της, η κουραση της ψυχης: «Αξιζω μια μερα ελευθερη.»</p>
          <p class="mt-3">Ηταν Τεταρτη. Ο Φιλιππος ειχε μαθηματικα. Η Αλεξανδρα ειχε πυρετο. Η Ελευθερια απλα δεν ηθελε. Για πρωτη φορα.</p>
          <p class="mt-3">Εχασαν μια μερα. Το κουτι εμεινε ανοιχτο. Κανεις δεν τα αγγιξε.</p>
          <p class="mt-4">Την επομενη μερα, η Αλεξανδρα ηρθε πρωτη. Κοιταξε το χαρτι στον τοιχο, το κουτι, και μετα τα χερια της.</p>
          <p class="mt-3">Τα ματια της γεμισαν δακρυα. Οχι απο λυπη. Απο πανικο.</p>
          <p class="mt-4 text-red-300 text-lg font-bold">«Χαλασε η αλυσιδα!»</p>
          <p class="mt-3">Αλυσιδα — ετσι αποκαλουσε τη σειρα των ημερων. Μια γραμμη απο Χ σε ενα ημερολογιο στον τοιχο. Καθε Χ σημαινε: "σημερα ηρθα". Και τωρα υπηρχε ενα κενο.</p>
          <p class="mt-3">Η Wisebot προσγειωθηκε διπλα της. Τα ματια της: <em>αταραχα</em>.</p>
          <p class="mt-4 text-teal-200 text-lg">— «Μια μερα δεν σε αλλαζει. Δυο συνεχομενες σε αλλαζουν.»</p>
          <p class="mt-3">«Δηλαδη... δεν πειραζει;»</p>
          <p class="mt-3">«Πειραζει αν σταματησεις σημερα. Ο κανονας: <strong class="text-white">ποτε δυο μερες στη σειρα</strong>. Ενα σφαλμα ειναι ανθρωπινο. Δυο ειναι μοτιβο.»</p>
          <p class="mt-3">Την επομενη μερα επεστρεψαν. Ολοι. Οχι τελεια. Οχι με ενθουσιασμο. Αλλα <strong class="text-teal-300">παροντες</strong>. Και μερικες φορες, η παρουσια ειναι αρκετη. Αρκετη για να κρατησεις αυτο που χτιζεις ζωντανο.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η τελειοτητα ειναι εχθρος της προοδου. Μια αλυσιδα ειναι αδυνατη μονο αν σταματησεις να τη φτιαχνεις.</p>
        </section>

        <!-- ΣΚΗΝΗ 8 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-600/30 border border-cyan-500/30 text-cyan-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-cyan-300 tracking-wide">ΤΟ 1% ΚΑΛΥΤΕΡΟ</h3>
          </div>
          <p>Η ρουτινα εγινε σταθερη σαν παλμος. Μετα το σχολειο. Μετα το διαβασμα. Εκει, μπροστα στο κουτι.</p>
          <p class="mt-3">Σιγα σιγα, το παιχνιδι εγινε καλυτερο. Οχι απο τεραστια αλματα. Αλλα επειδη <em>καθε μερα ηταν 1% καλυτερο</em>.</p>
          <p class="mt-3">Οι καρτες εγιναν πιο καθαρες. Τα σχεδια πιο ακριβη. Τα χρωματα πιο ζωντανα. Η Αλεξανδρα ξαναγραψε την ιστορια τρεις φορες — οχι επειδη ηταν κακη, αλλα επειδη μπορουσε να γινει <em>καλυτερη</em>.</p>
          <p class="mt-3">Οι κανονες εγιναν πιο απλοι. Η Ελευθερια αφαιρεσε τα περιττα. Εμειναν μονο κανονες που μπορουσες να εξηγησεις σε ενα εξαχρονο.</p>
          <p class="mt-3">Τα καλωδια εγιναν πιο τακτικα. Ο Φιλιππος εμαθε να δουλευει πιο αργα. Αντι να πιεσει και να σπασει, εμαθε να ακουει τον ηχο των υλικων. Εμαθε να ειναι <strong class="text-cyan-200">υπομονετικος</strong> — και αυτο ηταν ισως η μεγαλυτερη αλλαγη απο ολες.</p>
          <p class="mt-4">Και τοτε, ενα απογευμα, χωρις φανφαρες ή πυροτεχνηματα, χωρις τυμπανα ή χειροκροτηματα, κατι συνεβη.</p>
          <p class="mt-3 text-white font-bold text-xl">Το κουμπι... επιτελους δουλεψε.</p>
          <p class="mt-3">Ο Φιλιππος το πατησε. Ακουστηκε ενα <em>κλικ</em>. Και μετα φωτα. Χρωματα. Ηχος. Το ταμπλο φωτιστηκε σαν πολη τη νυχτα. Οι καρτες εμοιαζαν ζωντανες. Οι κανονες ειχαν νοημα. Τα παντα — ολα τα μικρα κομματια, ολες οι μικρες μερες, ολα τα δυο-λεπτα — ειχαν φτιαξει κατι πραγματικο.</p>
          <p class="mt-3">Η Αλεξανδρα εβαλε τα χερια στο στομα. Ο Φιλιππος εκανε γροθια στον αερα. Η Ελευθερια χαμογελασε.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Το 1% δεν φαινεται σημερα. Δεν φαινεται αυριο. Αλλα σε τριαντα μερες, ειναι ενα αλλο πραγμα. Ενα πραγμα που δεν μπορουσες καν να φανταστεις οταν ξεκινουσες.</p>
        </section>

        <!-- ΣΚΗΝΗ 9 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-600/30 border border-teal-500/30 text-teal-300 font-black text-sm">09</span>
            <h3 class="text-2xl font-black text-teal-300 tracking-wide">Η ΣΥΝΕΙΔΗΤΟΠΟΙΗΣΗ</h3>
          </div>
          <p>Ο Sparken κατεβηκε χαμηλα εκεινο το απογευμα. Ακουμπησε στο περβαζι.</p>
          <p class="mt-3">Κοιταξε το παιχνιδι, τα παιδια, τη Wisebot. Και μετα εκανε μια ερωτηση:</p>
          <p class="mt-4 text-amber-300 text-lg font-bold">«Ποτε αλλαξατε;»</p>
          <p class="mt-3">Ο Φιλιππος σκεφτηκε. Εσκυψε το κεφαλι και ψαξε στη μνημη του για τη Μεγαλη Στιγμη οπου ολα αλλαξαν. Αλλα δεν τη βρηκε.</p>
          <p class="mt-3">Γιατι δεν υπηρχε.</p>
          <p class="mt-3">Δεν υπηρχε "μεγαλη στιγμη". Υπηρχαν μονο μικρες. Πολλες. Ησυχες. Καθε απογευμα. Δυο λεπτα. Ξανα και ξανα. Σαν σταγονες νερου σε πετρα — καμια σταγονα δεν αλλαζει τη μορφη της, αλλα χιλιαδες σταγονες σκαλιζουν ποταμι.</p>
          <p class="mt-4">«Δεν θυμαμαι», ειπε τελικα ο Φιλιππος. Και χαμογελασε. Γιατι αυτο ηταν η απαντηση.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-teal-500/15 shadow-lg shadow-teal-900/20">
            <img src="${IMG_SPARKEN}" alt="Ο Sparken επισκεπτεται τα παιδια" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-teal-300/80 italic">Ο Sparken ρωτησε "ποτε;" — η απαντηση ηταν "καθε μερα"</div>
          </div>

          <p class="mt-4">Η Wisebot σταθηκε μπροστα τους. Τα ματια της ελαμπαν δυνατοτερα απο ποτε.</p>

          <div class="my-6 bg-gradient-to-r from-teal-900/40 to-cyan-900/40 p-8 rounded-2xl border border-teal-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">«Δεν κερδισατε επειδη θελατε πολυ.<br/><span class="text-teal-300">Κερδισατε επειδη το κανατε ευκολο.</span><br/>Το κανατε μικρο. Το κανατε καθημερινο.»</p>
          </div>

          <p class="mt-4">Ο Φιλιππος κοιταξε τα χερια του — τα ιδια χερια που σπαγαν πραγματα, τωρα εφτιαχναν. Η Αλεξανδρα κοιταξε τις καρτες. Η Ελευθερια τον πινακα κανονων — λιτο, πρακτικο. Οχι θεωρια. <em>Πραξη.</em></p>
          <p class="mt-3">Τριαντα μερες πριν: ονειρο και μηδεν πειθαρχια. Τωρα: ενα παιχνιδι και μια αληθεια — <strong class="text-teal-200">η συνεπεια δεν ειναι φυλακη. Ειναι ελευθερια.</strong></p>
          <p class="mt-3 text-gray-400 text-sm italic">Η μαγεια δεν ειναι στη μεγαλη κινηση. Ειναι στην επαναληψη. Στο ξανα. Στο "σημερα κιολας". Στα δυο λεπτα που γινονται ζωη.</p>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-teal-950/60 p-8 rounded-3xl border-2 border-dashed border-teal-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-teal-300 uppercase tracking-wider">JOURNAL: ΧΤΙΖΩ ΣΥΝΗΘΕΙΕΣ</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Γραψε. Σκεψου. Νιωσε. Δεν υπαρχει λαθος απαντηση.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-teal-500/15">
              <h5 class="text-teal-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-teal-600/40 flex items-center justify-center text-xs font-black">1</span>
                Η ΔΙΚΑΙΟΛΟΓΙΑ
              </h5>
              <p class="text-sm mb-3 opacity-80">Τι λες στον εαυτο σου οταν δεν θελεις να ξεκινησεις; Ποια ειναι η πιο συχνη δικαιολογια που χρησιμοποιεις;</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-teal-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-teal-500/15">
              <h5 class="text-teal-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-teal-600/40 flex items-center justify-center text-xs font-black">2</span>
                ΤΟ ΠΕΡΙΒΑΛΛΟΝ
              </h5>
              <p class="text-sm mb-3 opacity-80">Τι μπορεις να ετοιμασεις απο πριν για να ειναι πιο ευκολο να ξεκινησεις; Τι αλλαγη στον χωρο σου θα εκανε τη μεγαλυτερη διαφορα;</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-teal-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-teal-500/15">
              <h5 class="text-teal-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-teal-600/40 flex items-center justify-center text-xs font-black">3</span>
                💎 Η ΥΠΟΣΧΕΣΗ
              </h5>
              <p class="text-sm mb-3 opacity-80">Συμπληρωσε την υποσχεση σου:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-teal-500/10 text-teal-200">
                <p class="text-sm font-medium">«Θα το κανω για 2 λεπτα καθε μερα, ακομα κι αν δεν εχω ορεξη. Το μονο που χρειαζομαι ειναι: __________»</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΝΟΗΜΑ / MEANING BOX -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-r from-teal-900/30 to-cyan-900/30 p-6 rounded-2xl border border-teal-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-teal-300 uppercase tracking-wider">Το νοημα αυτου του κεφαλαιου</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            Το κινητρο ειναι αναξιοπιστο — ερχεται και φευγει σαν αερας. Η <strong class="text-teal-300">συνηθεια</strong> ειναι πιστη. Δεν χρειαζεσαι δυναμη για να ξεκινησεις. Χρειαζεσαι <strong class="text-cyan-300">συστημα</strong>: εναν χωρο ετοιμο, εναν κανονα μικρο, και μια υποσχεση στον εαυτο σου. Δυο λεπτα αρκουν. Το μυστικο δεν ειναι η ενταση. Ειναι η <em>επαναληψη</em>.
          </p>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-teal-950/60 p-8 rounded-3xl border border-teal-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-teal-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              Οταν ενα παιδι λεει <strong class="text-white">"δεν εχω ορεξη"</strong>, στην πραγματικοτητα λεει <em>"δεν εχω συστημα"</em>. Το κινητρο ειναι αναξιοπιστο — ερχεται και φευγει. Η συνηθεια ειναι πιστη.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Βοηθηστε τα παιδια να φτιαξουν <strong class="text-teal-300">συστηματα</strong>, οχι στοχους. Ενα συστημα λεει: "παντα μετα το φαγητο", "παντα στο ιδιο γραφειο", "παντα για 2 λεπτα". Αντι να περιμενετε την "εμπνευση", χτιστε τη δομη. Η συνεπεια νικαει την ενταση. Παντα.
            </p>
            <div class="mt-4 bg-teal-900/20 p-4 rounded-xl border border-teal-500/10">
              <p class="text-sm text-teal-200 font-medium">💡 Δοκιμαστε σημερα: Επιλεξτε μια μικρη δραστηριοτητα μαζι με το παιδι. Ενα "trigger" (πχ. "μετα το σχολειο") και εναν χρονο ("2 λεπτα"). Οχι περισσοτερα. Οχι λιγοτερα. Απλα αυτο. Καθε μερα.</p>
            </div>
          </div>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- INTRO QUOTE -->
        <div class="relative bg-gradient-to-r from-slate-900 via-teal-900/60 to-cyan-900/40 p-10 rounded-2xl border border-teal-500/30 text-center shadow-lg shadow-teal-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Chapter 23</div>
          <p class="italic text-teal-200 text-xl mt-4 leading-relaxed">"When something becomes easy to start,<br/>it doesn't need strength. It just needs order."</p>
          <div class="mt-4 w-16 h-0.5 bg-teal-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- SCENE 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-600/30 border border-teal-500/30 text-teal-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-teal-300 tracking-wide">ALMOST READY</h3>
          </div>
          <p>The game was ready. Almost. It sat there, on the workshop table, covered with a cloth. It looked like a treasure waiting to be discovered -- except the ones who had built it weren't touching it.</p>
          <p class="mt-3">The board worked. Philippos had threaded wires through the box. The cards had been printed -- Alexandra had painted them one by one. Eleftheria had organized the rules into three pages.</p>
          <p class="mt-3">One thing remained. The hardest of all.</p>
          <p class="mt-4 text-white font-medium text-lg">To test it every day.</p>
          <p class="mt-3">Not once. Not when they felt like it. <em>Every day.</em> Steadily. Like the sun rises -- not because someone begged it to.</p>
          <p class="mt-3">But the children were not suns. The distance between "I want to" and "I do" was the greatest distance they had ever faced.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Because a dream without routine is just a wish. And wishes, without action, have no power.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-teal-500/15 shadow-lg shadow-teal-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="The children in front of the almost-finished game" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-teal-300/80 italic">The game was there. Waiting. But no one took the first step.</div>
          </div>
        </section>

        <!-- SCENE 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-600/30 border border-cyan-500/30 text-cyan-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-cyan-300 tracking-wide">THE DELAY</h3>
          </div>
          <p>The first day passed. No one touched the box. It was Monday, and Monday is a day when nobody wants to do anything anyway. Alexandra said she was tired from school. Philippos said he had a headache. Eleftheria said nothing at all -- she simply opened a book and disappeared into it.</p>
          <p class="mt-3">The second day was worse. Not because something went wrong, but because <em>nothing went anywhere</em>. Philippos glanced at the cards: "Tomorrow for sure." Alexandra agreed. "Today we have homework."</p>
          <p class="mt-3">The third day brought the greatest excuse: "We need a little break." As if they had exhausted themselves doing something they hadn't even started.</p>
          <p class="mt-3">Then came the fourth day. And the fifth. "From Monday, seriously." Alexandra nodded. Eleftheria turned a page without looking up.</p>
          <p class="mt-4">The game didn't break. It didn't shatter. It didn't vanish. That was the worst part. <em>It just stayed there.</em> Like a promise no one keeps. Like a letter that is never opened. Like a button that no one presses.</p>
          <p class="mt-3">WiseBot sat silently on the shelf. Her eyes dimmed and brightened slowly, like breathing. She said nothing. She simply <em>observed</em>. Third day without touching their creation. Dust had begun to settle on the cards -- almost invisible, but enough to show how much time had passed.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Procrastination doesn't shout. It doesn't threaten. It doesn't knock on doors. It simply makes you forget what you wanted. And suddenly, what you wanted no longer feels like yours.</p>
        </section>

        <!-- SCENE 3 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-600/30 border border-teal-500/30 text-teal-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-teal-300 tracking-wide">WISEBOT'S QUESTION</h3>
          </div>
          <p>It was Thursday afternoon. The children were in the workshop but no one was working. Philippos was building a pyramid out of gum wrappers. Alexandra drew circles that meant nothing.</p>
          <p class="mt-3">WiseBot stirred. She landed on the table, next to the box. Her eyes gleamed like the sea under moonlight.</p>
          <p class="mt-4 text-white text-lg">-- "Do you want the game to succeed?"</p>
          <p class="mt-3">"Yes!" they all shouted. WiseBot tilted her head. Her eyes narrowed -- not with judgment, but with <em>curiosity</em>.</p>
          <p class="mt-4 text-teal-200 text-lg">-- "Then why don't you touch it?"</p>
          <p class="mt-3">Silence. Deep, uncomfortable silence. Philippos shrugged. "We don't feel like it every day," he said. His voice sounded like an excuse even he didn't believe. Alexandra stared at the floor.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-teal-500/15 shadow-lg shadow-teal-900/20">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="WiseBot speaks to the children" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-teal-300/80 italic">WiseBot asked the question no one wanted to hear</div>
          </div>

          <p class="mt-4">WiseBot moved closer to the button -- red, glossy, untouched for days. Her wings brushed the plastic -- enough to show them <em>how close they were</em>.</p>

          <div class="my-6 bg-gradient-to-r from-teal-900/40 to-cyan-900/40 p-8 rounded-2xl border border-teal-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">"You wait to feel ready.<br/><span class="text-teal-300">But winners don't start because they feel ready.</span><br/>They start because it's time."</p>
          </div>

          <p class="mt-4">The word <em>"time"</em> hung in the air. Philippos felt something in his chest -- like shame, like truth. Eleftheria felt that knowledge without action is <em>silence dressed in letters</em>.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Some truths hurt later -- when you realize how much time you wasted waiting for the perfect moment.</p>
        </section>

        <!-- SCENE 4 — THE 2-MINUTE RULE — HIGHLIGHTED -->
        <section class="bg-gradient-to-br from-teal-900/30 via-cyan-900/20 to-emerald-900/10 p-8 rounded-2xl border-l-4 border-teal-500 my-8 shadow-xl shadow-teal-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-600/30 border border-teal-500/30 text-teal-300 font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-teal-400 tracking-wide">THE 2-MINUTE RULE</h3>
          </div>
          <p>The next day, Eleftheria did something unexpected. She took a green marker and wrote on a sheet of paper:</p>

          <div class="my-6 bg-black/40 p-6 rounded-2xl border border-teal-500/30 text-center">
            <p class="text-teal-200 font-black text-2xl tracking-wide">AFTER STUDYING<br/>TEST FOR 2 MINUTES</p>
          </div>

          <p class="mt-3">She stuck it next to the box. Every time they walked by, there it was. A reminder.</p>
          <p class="mt-3">Philippos saw it and laughed loudly.</p>
          <p class="mt-4 text-white text-lg">"Two minutes?" he asked, as if he'd heard a joke. "Two minutes change nothing! We need hours! We need time! What can we do in two minutes?"</p>
          <p class="mt-3">Alexandra looked at the note. "It seems a little... small." Eleftheria didn't speak. She turned to WiseBot. The owl sat motionless.</p>
          <p class="mt-4"><strong class="text-teal-300">WiseBot didn't answer.</strong></p>
          <p class="mt-3">A wise one's silence means: <em>"You'll see for yourself."</em></p>
          <p class="mt-3">Eleftheria smiled. She knew something the others didn't: great things begin with <strong class="text-teal-200">tiny steps that never stop</strong>.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Two minutes are enough to press a button. Enough to open a door. Enough to tell yourself: "I'm here. Today."</p>
        </section>

        <!-- SCENE 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-emerald-400 tracking-wide">THE CHANGE</h3>
          </div>
          <p>That afternoon, something happened. Nothing spectacular. Nothing dramatic. Just three children sitting in front of a box and pressing a button.</p>
          <p class="mt-3">Two minutes. That was the deal. Philippos checked a wire. Alexandra looked at a card and corrected a typo. Eleftheria noted something on the rules board.</p>
          <p class="mt-3">Two minutes became three. Three became five. Five became ten. No one counted. No one said "let's move on." They simply... <em>continued</em>.</p>
          <p class="mt-4">After fifteen minutes Philippos looked up. "Wasn't it just two minutes?" Eleftheria wrote date and time in her notebook -- like keeping a journal of an experiment. Because that is what it was: an experiment with <strong class="text-emerald-300">themselves</strong>.</p>
          <p class="mt-4">The next day, again. Two minutes that became twenty. And the next day. And the next. Not from inspiration. Because it was written on the wall -- a deal <em>with themselves</em>.</p>
          <p class="mt-3">A week later, they didn't think about it anymore. They just did it. Like brushing teeth. Like breathing.</p>
          <p class="mt-3 text-gray-400 text-sm italic">That is a habit. It's not heroism. It's not talent. It's a decision you make once, and then you let the routine do the work.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-emerald-500/15 shadow-lg shadow-emerald-900/20">
            <img src="${IMG_KIDS_WISEBOT_2}" alt="The children working together on the game" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-emerald-300/80 italic">Two minutes a day became a habit. The habit became transformation.</div>
          </div>
        </section>

        <!-- SCENE 6 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-600/30 border border-teal-500/30 text-teal-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-teal-300 tracking-wide">THE ENVIRONMENT</h3>
          </div>
          <p>There came an evening that changed everything. In a small way.</p>
          <p class="mt-3">Philippos had left the tools scattered. Everywhere. Wrenches, pliers, cables, a glue stick dried out left open. The table looked like a battlefield -- except no one had fought.</p>
          <p class="mt-3">The next day, no one felt like working. "I can't start like this," said Philippos. Alexandra shrugged. "I don't even know where my work is."</p>
          <p class="mt-4">WiseBot flew slowly over the table, letting her eyes scan the space.</p>
          <p class="mt-4 text-teal-200 text-lg">-- "Does your environment help you or sabotage you?"</p>
          <p class="mt-3">The answer was in front of them.</p>
          <p class="mt-3">WiseBot added: "If the space around you is chaos, your thinking becomes chaos. If the space is ready, you become ready."</p>
          <p class="mt-3">That same night, Eleftheria stayed an extra hour. She didn't work on the game. She prepared the space. She gathered tools in order, wiped the table, stacked cards. She prepared three small piles -- one for each child.</p>
          <p class="mt-4">The next day, <em>something was different</em>. The space invited them: "Come, everything is ready."</p>
          <p class="mt-3">They started without thinking. They sat. They pressed the button. They began.</p>
          <p class="mt-4 text-white font-bold text-lg">They didn't change character. They changed the space.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Discipline is not a superpower. It is design.</p>
        </section>

        <!-- SCENE 7 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-red-400 tracking-wide">THE BROKEN CHAIN</h3>
          </div>
          <p>The third week came. And with it, exhaustion -- the soul's kind. That tiredness that says: "I deserve a free day."</p>
          <p class="mt-3">It was Wednesday. Philippos had math until late. Alexandra had a fever. Eleftheria simply didn't want to. For the first time. And that scared her.</p>
          <p class="mt-3">They missed a day. The box sat open. No one touched it.</p>
          <p class="mt-4">The next day, Alexandra arrived first. She looked at the note on the wall, then at the box, then at her hands.</p>
          <p class="mt-3">Her eyes filled with tears. Not from sadness. From panic.</p>
          <p class="mt-4 text-red-300 text-lg font-bold">"The chain broke!"</p>
          <p class="mt-3">Chain -- that's what she called the sequence of days. A line of X marks on a calendar on the wall. Each X meant: "I showed up today." And now there was a gap.</p>
          <p class="mt-3">WiseBot landed beside her. Her eyes: <em>unshaken</em>.</p>
          <p class="mt-4 text-teal-200 text-lg">-- "One day doesn't change you. Two consecutive ones change you."</p>
          <p class="mt-3">"So... it doesn't matter?"</p>
          <p class="mt-3">"It matters if you stop today. The rule: <strong class="text-white">never two days in a row</strong>. One mistake is human. Two is a pattern."</p>
          <p class="mt-3">The next day they returned. All of them. Not perfectly. Not with enthusiasm. But <strong class="text-teal-300">present</strong>. And sometimes, presence is enough. Enough to keep what you're building alive.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Perfection is the enemy of progress. A chain is hopeless only if you stop repairing it.</p>
        </section>

        <!-- SCENE 8 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-600/30 border border-cyan-500/30 text-cyan-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-cyan-300 tracking-wide">1% BETTER</h3>
          </div>
          <p>The routine became steady as a heartbeat. After school. After studying. There, in front of the box.</p>
          <p class="mt-3">Slowly, the game got better. Not from huge leaps. But because <em>every day it was 1% better</em>.</p>
          <p class="mt-3">The cards became cleaner. The designs more precise. The colors more vivid. Alexandra rewrote the story three times -- not because it was bad, but because it could be <em>better</em>.</p>
          <p class="mt-3">The rules became simpler. Eleftheria removed everything unnecessary. Only rules remained that you could explain to a six-year-old.</p>
          <p class="mt-3">The wires became neater. Philippos learned to work more slowly. Instead of pushing and breaking, he learned to listen to the sound of materials. He learned to be <strong class="text-cyan-200">patient</strong> -- and that was perhaps the greatest change of all.</p>
          <p class="mt-4">And then, one afternoon, without fanfare or fireworks, without drums or applause, something happened.</p>
          <p class="mt-3 text-white font-bold text-xl">The button... finally worked.</p>
          <p class="mt-3">Philippos pressed it. There was a <em>click</em>. And then lights. Colors. Sound. The board lit up like a city at night. The cards seemed alive. The rules made sense. Everything -- all the small pieces, all the small days, all the two-minutes -- had built something real.</p>
          <p class="mt-3">Alexandra covered her mouth. Philippos pumped his fist. Eleftheria smiled.</p>
          <p class="mt-3 text-gray-400 text-sm italic">One percent doesn't show today. It doesn't show tomorrow. But in thirty days, it is something else entirely. Something you couldn't even imagine when you began.</p>
        </section>

        <!-- SCENE 9 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-600/30 border border-teal-500/30 text-teal-300 font-black text-sm">09</span>
            <h3 class="text-2xl font-black text-teal-300 tracking-wide">THE REALIZATION</h3>
          </div>
          <p>Sparken came down low that afternoon. He settled on the windowsill.</p>
          <p class="mt-3">He looked at the game, at the children, at WiseBot. And then he asked:</p>
          <p class="mt-4 text-amber-300 text-lg font-bold">"When did you change?"</p>
          <p class="mt-3">Philippos thought. He bowed his head and searched his memory for the Big Moment where everything shifted. But he couldn't find it.</p>
          <p class="mt-3">Because it didn't exist.</p>
          <p class="mt-3">There was no "big moment." Only small ones. Many of them. Quiet. Every afternoon. Two minutes. Again and again. Like drops of water on stone -- no single drop changes the rock, but thousands of drops carve a river.</p>
          <p class="mt-4">"I don't remember," Philippos said at last. And he smiled. Because that was the answer.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-teal-500/15 shadow-lg shadow-teal-900/20">
            <img src="${IMG_SPARKEN}" alt="Sparken visits the children" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-teal-300/80 italic">Sparken asked "when?" -- the answer was "every day"</div>
          </div>

          <p class="mt-4">WiseBot stood before them. Her eyes shone brighter than ever.</p>

          <div class="my-6 bg-gradient-to-r from-teal-900/40 to-cyan-900/40 p-8 rounded-2xl border border-teal-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">"You didn't win because you wanted it badly.<br/><span class="text-teal-300">You won because you made it easy.</span><br/>You made it small. You made it daily."</p>
          </div>

          <p class="mt-4">Philippos looked at his hands -- the same hands that broke things, now they built. Alexandra looked at the cards. Eleftheria at the rules board -- lean, practical. Not theory. <em>Action.</em></p>
          <p class="mt-3">Thirty days ago: a dream and zero discipline. Now: a game and a truth -- <strong class="text-teal-200">consistency is not a prison. It is freedom.</strong></p>
          <p class="mt-3 text-gray-400 text-sm italic">The magic isn't in the grand gesture. It's in the repetition. In the again. In the "today, too." In the two minutes that become a life.</p>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-teal-950/60 p-8 rounded-3xl border-2 border-dashed border-teal-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-teal-300 uppercase tracking-wider">JOURNAL: BUILDING HABITS</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Write. Think. Feel. There is no wrong answer.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-teal-500/15">
              <h5 class="text-teal-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-teal-600/40 flex items-center justify-center text-xs font-black">1</span>
                THE EXCUSE
              </h5>
              <p class="text-sm mb-3 opacity-80">What do you tell yourself when you don't want to start? What is the most common excuse you use?</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-teal-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-teal-500/15">
              <h5 class="text-teal-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-teal-600/40 flex items-center justify-center text-xs font-black">2</span>
                THE ENVIRONMENT
              </h5>
              <p class="text-sm mb-3 opacity-80">What can you prepare beforehand to make it easier to start? What change in your space would make the biggest difference?</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-teal-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-teal-500/15">
              <h5 class="text-teal-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-teal-600/40 flex items-center justify-center text-xs font-black">3</span>
                💎 THE PROMISE
              </h5>
              <p class="text-sm mb-3 opacity-80">Complete your promise:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-teal-500/10 text-teal-200">
                <p class="text-sm font-medium">"I will do it for 2 minutes every day, even if I don't feel like it. The only thing I need is: __________"</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- MEANING BOX -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-r from-teal-900/30 to-cyan-900/30 p-6 rounded-2xl border border-teal-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-teal-300 uppercase tracking-wider">The Meaning of This Chapter</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            Motivation is unreliable -- it comes and goes like wind. <strong class="text-teal-300">Habit</strong> is loyal. You don't need strength to begin. You need a <strong class="text-cyan-300">system</strong>: a space that is ready, a rule that is small, and a promise to yourself. Two minutes are enough. The secret is not intensity. It is <em>repetition</em>.
          </p>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- MESSAGE FOR PARENTS -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-teal-950/60 p-8 rounded-3xl border border-teal-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-teal-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              When a child says <strong class="text-white">"I don't feel like it"</strong>, they are actually saying <em>"I don't have a system"</em>. Motivation is unreliable -- it comes and goes. Habit is loyal.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Help children build <strong class="text-teal-300">systems</strong>, not goals. A system says: "always after dinner," "always at the same desk," "always for 2 minutes." Instead of waiting for "inspiration," build the structure. Consistency beats intensity. Always.
            </p>
            <div class="mt-4 bg-teal-900/20 p-4 rounded-xl border border-teal-500/10">
              <p class="text-sm text-teal-200 font-medium">💡 Try today: Choose a small activity together with your child. A "trigger" (e.g., "after school") and a time ("2 minutes"). Nothing more. Nothing less. Just that. Every day.</p>
            </div>
          </div>
        </div>

      </div>
    `
    }
  }
];
