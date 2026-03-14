
import { Book } from '../types';

// ============================================================
// BOOK 11: ΔΕΝ ΕΧΩ ΟΡΕΞΗ / I DON'T FEEL LIKE IT
// Hero: Pencilo (το μαγικό μολύβι)
// Theme: ΚΙΝΗΤΡΟ / MOTIVATION
// ============================================================

// Cover image
const IMG_PENCILO = "/images/pencilo.jpg";

// Story images
const IMG_KIDS_WITH_PENCILO = "/images/paidia-kai-pencilo.png";
const IMG_KIDS_TOGETHER = "/images/ta-3-paidia.png";
const IMG_KIDS_WISEBOT_2 = "/images/paidia-wisebot-2.png";
const IMG_KIDS_WITH_WISEBOT = "/images/paidia-kai-wisebot.png";

export const BOOK_11: Book[] = [
  {
    id: 11,
    title: { el: "ΔΕΝ ΕΧΩ ΟΡΕΞΗ", en: "I DON'T FEEL LIKE IT" },
    theme: { el: "ΚΙΝΗΤΡΟ", en: "MOTIVATION" },
    stepLabel: { el: "PENCILO & ΤΟ ΚΙΝΗΤΡΟ", en: "PENCILO & MOTIVATION" },
    author: "Wisebot & Pencilo",
    cover: IMG_PENCILO,
    videoUrl: "",
    description: {
      el: "Μια ιστορία για τις μέρες που δεν θες να κάνεις τίποτα. Ο Pencilo τους μαθαίνει ότι η όρεξη δεν έρχεται πρώτη — η κίνηση έρχεται πρώτη.",
      en: "A story about the days you don't want to do anything. Pencilo teaches them that motivation doesn't come first — action does."
    },
    meaning: {
      el: "Η πειθαρχία δεν είναι τιμωρία. Είναι το δώρο που κάνεις στον εαυτό σου τις μέρες που δεν θες.",
      en: "Discipline is not punishment. It is the gift you give yourself on days you don't want to."
    },
    xp: 220,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- ΕΙΣΑΓΩΓΙΚΟ QUOTE -->
        <div class="relative bg-gradient-to-r from-slate-900 via-indigo-900/60 to-violet-900/40 p-10 rounded-2xl border border-indigo-500/30 text-center shadow-lg shadow-indigo-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Κεφάλαιο 11</div>
          <p class="italic text-indigo-200 text-xl mt-4 leading-relaxed">«Η όρεξη δεν έρχεται πρώτη.<br/>Η κίνηση έρχεται πρώτη.»</p>
          <div class="mt-4 w-16 h-0.5 bg-indigo-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- ΣΚΗΝΗ 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-indigo-300 tracking-wide">Η ΜΕΡΑ ΠΟΥ ΚΑΝΕΙΣ ΔΕΝ ΗΘΕΛΕ</h3>
          </div>
          <p>Το πρωινό φως μπήκε από το παράθυρο σαν ανεπιθύμητος επισκέπτης. Κίτρινο, ζεστό, επίμονο — αλλά κανείς δεν το καλωσόρισε. Το εργαστήριο, που συνήθως βούιζε από ενέργεια, σήμερα μύριζε αδράνεια. Μια γλυκιά, βαριά, αόρατη ομίχλη που κάθισε πάνω σε όλα.</p>
          <p class="mt-3">Το τραπέζι ήταν στρωμένο. Τα εργαλεία στη θέση τους. Τα σχέδια ανοιγμένα. Αλλά τίποτα δεν κινούνταν. Ούτε χέρι, ούτε μυαλό, ούτε καρδιά. <strong class="text-indigo-200">Το τραπέζι ήταν στρωμένο — όχι με ιδέες. Με σιωπή.</strong></p>
          <p class="mt-3">Ο Φίλιππος καθόταν στην καρέκλα του με τα χέρια κρεμασμένα στα πλάγια, σαν μαριονέτα που κάποιος ξέχασε να κουνήσει. Κοιτούσε το πάτωμα — όχι επειδή υπήρχε κάτι ενδιαφέρον εκεί, αλλά επειδή το πάτωμα δεν απαιτούσε τίποτα από αυτόν.</p>
          <p class="mt-4">Η Αλεξάνδρα ζωγράφιζε κύκλους στο χαρτί. Κύκλους μέσα σε κύκλους. Χωρίς αρχή, χωρίς τέλος. Δεν ήταν τέχνη — ήταν η οπτική μορφή της ανίας. Τα μάτια της ήταν ανοιχτά αλλά δεν <em>έβλεπαν</em> τίποτα πραγματικά.</p>
          <p class="mt-3">Η Ελευθερία είχε ανοίξει το τετράδιό της στη σελίδα 47. Ο στυλός ακουμπούσε στο χαρτί. Αλλά τα δάχτυλά της δεν κινούνταν. Κοιτούσε την κενή σελίδα σαν να ήταν καθρέφτης — και αυτό που έβλεπε μέσα δεν της άρεσε.</p>
          <p class="mt-4 text-gray-400">— «Δεν έχω όρεξη», είπε ο Φίλιππος. Η φωνή του ήταν επίπεδη, σαν χαρτί που κανείς δεν τσαλάκωσε ούτε δίπλωσε. Απλά <em>υπήρχε</em>.</p>
          <p class="mt-2">— «Ούτε εγώ», είπε η Αλεξάνδρα, και ο στυλός σταμάτησε τους κύκλους.</p>
          <p class="mt-2">— «Σήμερα όχι», πρόσθεσε η Ελευθερία, κλείνοντας αργά το τετράδιο.</p>
          <p class="mt-4">Τρεις λέξεις. Τρία παιδιά. Μία σιωπή που γέμισε ολόκληρο το δωμάτιο σαν νερό σε ένα βάζο. Αργά. Σταθερά. Αδιάφορα.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Υπάρχουν μέρες που ο κόσμος δεν σταματά — αλλά εσύ ναι. Μέρες που τα πόδια σου είναι βαριά, η καρδιά σου αργή, και η σκέψη σου ένα τείχος χωρίς πόρτα. Αυτή ήταν μια τέτοια μέρα.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-indigo-500/15 shadow-lg shadow-indigo-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="Τα παιδιά χωρίς ενέργεια" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-indigo-300/80 italic">Μια μέρα που κανείς δεν ήθελε να κάνει τίποτα</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-violet-600/30 border border-violet-500/30 text-violet-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-violet-300 tracking-wide">Η ΚΟΥΡΑΣΗ ΠΟΥ ΜΟΙΑΖΕΙ ΤΕΜΠΕΛΙΑ</h3>
          </div>
          <p>Δεν ήταν βαρεμάρα. Η βαρεμάρα είναι ένα κενό που ζητάει γέμισμα. Αυτό ήταν κάτι <em>βαθύτερο</em>. Πιο σκοτεινό. Πιο ύπουλο.</p>
          <p class="mt-3">Ήταν εκείνη η κούραση που δεν φαίνεται στο πρόσωπο. Η κούραση που δεν έρχεται από δουλειά αλλά από την <strong class="text-violet-200">απουσία νοήματος</strong>. Όταν σκέφτεσαι «αύριο» αντί για «τώρα». Όταν όλα σου φαίνονται βαριά πριν καν τα αρχίσεις.</p>
          <p class="mt-3">Η Αλεξάνδρα έγειρε πίσω στην καρέκλα της, αφήνοντας το κεφάλι της να πέσει. Τα μαλλιά της κρέμονταν σαν κουρτίνες που δεν θέλουν να ανοίξουν. «Θέλω απλώς… να μην κάνω τίποτα», ψιθύρισε στο ταβάνι.</p>
          <p class="mt-4">Ο Φίλιππος συμφώνησε χωρίς να σκεφτεί. «Μια μέρα μόνο. Ένα διάλειμμα. Τι κακό έχει;» Τα μάτια του ήταν θαμπά, σαν τζάμι που κάποιος ανέπνευσε πάνω του.</p>
          <p class="mt-3">Η Ελευθερία δάγκωσε τα χείλη της. Ήθελε να συμφωνήσει. Ήθελε να αφεθεί κι αυτή στη γλυκιά αγκαλιά του «τίποτα». Αλλά κάτι μέσα της — ένα μικρό, ενοχλητικό φως — δεν το άφηνε.</p>
          <p class="mt-3"><strong class="text-violet-300">«Αν γίνει μία μέρα, θα γίνει δύο»</strong>, είπε αργά. «Και μετά τρεις. Και μετά μία εβδομάδα. Και μετά… ξεχνάμε ότι κάναμε ποτέ κάτι σπουδαίο.»</p>
          <p class="mt-4">Ο Φίλιππος γύρισε να την κοιτάξει. Θύμωσε — αλλά όχι μαζί της. Θύμωσε επειδή είχε δίκιο. Και η αλήθεια, όταν δεν τη θέλεις, πονάει σαν ξυπνητήρι στις 6 το πρωί.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η τεμπελιά δεν είναι πάντα αυτό που φαίνεται. Μερικές φορές είναι φόβος. Φόβος ότι αν ξεκινήσεις, θα αποτύχεις. Ότι αν προσπαθήσεις, δεν θα είναι αρκετό. Κι έτσι η αδράνεια γίνεται καταφύγιο — ένα ζεστό, βολικό, δηλητηριασμένο καταφύγιο.</p>
        </section>

        <!-- ΣΚΗΝΗ 3 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-emerald-300 tracking-wide">ΤΑ 5 ΛΕΠΤΑ</h3>
          </div>
          <p>Τα παιδιά περίμεναν κάποιον να τους φωνάξει. Να τους πει «σηκωθείτε!», «κάντε κάτι!», «μην τεμπελιάζετε!». Περίμεναν τον Crocus να χτυπήσει τα χέρια του στο τραπέζι, να ανάψει τα φώτα, να τους σπρώξει.</p>
          <p class="mt-3">Δεν το έκανε. Καθόταν στη γωνία του εργαστηρίου, ήρεμος σαν βράχος στη θάλασσα. Τα χρυσοπράσινα μάτια του παρατηρούσαν χωρίς να κρίνουν. Χωρίς να πιέζουν. Απλά <em>ήταν εκεί</em>.</p>
          <p class="mt-4">— «Ξέρετε τι είναι αυτό;» ρώτησε τελικά, με φωνή τόσο ήρεμη που μοιαζε με ψίθυρο ποταμού. «Δεν είναι βαρεμάρα. Είναι μια <strong class="text-emerald-200">απόφαση που δεν πήρατε</strong>.»</p>
          <p class="mt-3">Η λέξη «απόφαση» κρεμάστηκε στον αέρα σαν σύννεφο. Ο Φίλιππος ανοιγόκλεισε τα μάτια. «Εγώ δεν πήρα καμία απόφαση», είπε αμυντικά.</p>
          <p class="mt-3">«Ακριβώς», απάντησε ο Crocus. Και αυτή η μονολεκτική απάντηση ήταν πιο δυνατή από κήρυγμα. <em>Ακριβώς.</em> Δεν πήρες απόφαση. Κι αυτό <strong>είναι</strong> η απόφαση — η απόφαση να μείνεις ακίνητος.</p>
          <p class="mt-4">— «Και τι να κάνουμε;» ρώτησε ο Φίλιππος, με φωνή που τώρα είχε μια ρωγμή — ένα μικρό άνοιγμα.</p>
          <p class="mt-3 text-white font-bold text-lg">— «Κάτι μικρό. Όχι τέλειο. Όχι μεγάλο. Πέντε λεπτά. Τίποτα παραπάνω.»</p>
          <p class="mt-3">Η Αλεξάνδρα γέλασε. «Πέντε λεπτά; Αυτό δεν αλλάζει τίποτα.»</p>
          <p class="mt-3">Ο Crocus χαμογέλασε — ένα χαμόγελο γεμάτο μυστικά. «Θα δούμε», είπε απλά.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Πέντε λεπτά. Τριακόσια δευτερόλεπτα. Τόσο λίγα που φαίνονται αστεία. Τόσο λίγα που κανείς δεν μπορεί να πει «δεν μπορώ». Και αυτό ακριβώς ήταν η παγίδα — η πιο όμορφη παγίδα του κόσμου.</p>
        </section>

        <!-- ΣΚΗΝΗ 4 — Ο PENCILO -->
        <section class="bg-gradient-to-br from-indigo-900/30 via-violet-900/20 to-fuchsia-900/10 p-8 rounded-2xl border-l-4 border-violet-500 my-8 shadow-xl shadow-violet-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-violet-600/30 border border-violet-500/30 text-violet-300 font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-violet-400 tracking-wide">Ο PENCILO</h3>
          </div>
          <p>Κανείς δεν τον άκουσε να μπαίνει. Κανείς δεν τον είδε να ανοίγει πόρτα. Απλά ήταν ξαφνικά <em>εκεί</em> — ένα μαγικό μολύβι, μακρύ και κομψό, με μια λάμψη βιολετί στο χρώμα του που πάλλονταν σαν παλμός καρδιάς.</p>
          <p class="mt-3">Ο Pencilo δεν μιλούσε με στόμα. Μιλούσε με <em>κινήσεις</em>. Σύρθηκε αθόρυβα στο τραπέζι, σαν φίδι φωτός, και σταμάτησε μπροστά στα παιδιά. Κάτω από τη μύτη του εμφανίστηκε ένα μικρό κομμάτι χαρτί — λευκό, καθαρό, σαν χιόνι που δεν το πάτησε κανείς.</p>
          <p class="mt-4">Πάνω στο χαρτί, με γράμματα που ζωγράφισε ο ίδιος, ήταν γραμμένο μόνο ένα πράγμα:</p>

          <div class="my-6 bg-gradient-to-r from-violet-900/40 to-indigo-900/40 p-8 rounded-2xl border border-violet-500/20 text-center">
            <p class="font-serif text-3xl text-white font-black tracking-wider">ΣΗΜΕΡΑ</p>
            <p class="text-violet-300 text-sm mt-2 italic">Μια λέξη. Ένα κουτάκι. Κανένα πρόγραμμα.</p>
          </div>

          <p class="mt-4">Η Ελευθερία κοίταξε το χαρτί. Κοίταξε τον Pencilo. Κοίταξε ξανά το χαρτί. «Δεν καταλαβαίνω», είπε αργά. «Τι εννοεί;»</p>
          <p class="mt-3 text-white text-lg">Ο Pencilo χτύπησε τη μύτη του στο τραπέζι — <em>τακ, τακ, τακ</em> — και γράμματα εμφανίστηκαν κάτω από τη λέξη ΣΗΜΕΡΑ:</p>
          <p class="mt-4 text-violet-300 font-bold text-xl">«Η όρεξη δεν έρχεται πρώτη. Η κίνηση έρχεται.»</p>
          <p class="mt-4">Ο Φίλιππος κοίταξε τον Pencilo σαν να τον πρόσβαλε. «Δηλαδή μας λες ότι αν κινηθούμε, θα μας έρθει η όρεξη; Σαν τηλεκοντρόλ;»</p>
          <p class="mt-3">Ο Pencilo δεν απάντησε. Απλά ζωγράφισε ένα μικρό βέλος στο χαρτί: <strong class="text-violet-200">ΚΙΝΗΣΗ → ΟΡΕΞΗ</strong>. Όχι το αντίστροφο.</p>
          <p class="mt-3">Η Ελευθερία τον κοίταξε στα μάτια — αν τα μολύβια είχαν μάτια. «Κι αν δεν νιώθουμε έτοιμοι;»</p>
          <p class="mt-3 text-violet-200 font-medium italic">Ο Pencilo ζωγράφισε μια τελευταία πρόταση: «Τέλεια. Τότε ξεκινάτε από εκεί που είστε.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Κανείς δεν ξεκινά «έτοιμος». Κανείς δεν περιμένει να νιώσει τέλεια πριν αρχίσει. Εκείνοι που περιμένουν, δεν αρχίζουν ποτέ. Εκείνοι που αρχίζουν, βρίσκουν τη δύναμη στην πορεία.</p>

          <!-- ΕΙΚΟΝΑ: PENCILO + ΠΑΙΔΙΑ -->
          <div class="my-8 rounded-2xl overflow-hidden border border-violet-500/20 shadow-2xl shadow-violet-900/30">
            <img src="${IMG_KIDS_WITH_PENCILO}" alt="Τα παιδιά με τον Pencilo" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-violet-300/80 italic">Ο Pencilo εμφανίστηκε αθόρυβα — και άλλαξε τα πάντα με μια λέξη</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-amber-400 tracking-wide">ΤΟ ΠΙΟ ΜΙΚΡΟ ΒΗΜΑ</h3>
          </div>
          <p>Δεν έστησαν σχέδιο. Δεν σχεδίασαν στρατηγική. Δεν αναζήτησαν τέλεια αφετηρία. Ο Pencilo δεν τους ζήτησε να κάνουν κάτι ηρωικό. Τους ζήτησε κάτι πολύ πιο δύσκολο: <strong class="text-amber-200">να ξεκινήσουν.</strong></p>
          <p class="mt-3">Ο Φίλιππος σήκωσε αργά τα χέρια του. Τα δάχτυλά του ήταν βαριά, σαν να κρατούσαν αόρατα βάρη. Πήρε ένα κομμάτι υλικό — μικρό, ασήμαντο — και το έκοψε. Μια κοψιά. Μια κίνηση. Πέντε δευτερόλεπτα.</p>
          <p class="mt-3">Η Αλεξάνδρα κοίταξε το σχέδιο στο τραπέζι. Μια γραμμή ήταν στραβή. Τη σιχαινόταν εδώ και μέρες. Πήρε τη γόμα. Τη διόρθωσε. Μια γραμμή. Δέκα δευτερόλεπτα.</p>
          <p class="mt-4">Η Ελευθερία άνοιξε ξανά το τετράδιο. Η σελίδα 47 ήταν ακόμα κενή, αλλά τώρα — <em>τώρα</em> — τα δάχτυλά της κινήθηκαν. Μια πρόταση. Εφτά λέξεις. Δεν ήταν τέλεια. Δεν χρειαζόταν να είναι.</p>
          <p class="mt-4">Ο Crocus κοίταξε το ρολόι στον τοίχο. Τα δευτερόλεπτα περνούσαν. Ένα λεπτό. Δύο. Τρία. Τέσσερα.</p>
          <p class="mt-3">«Πέρασαν πέντε λεπτά», είπε ήρεμα.</p>
          <p class="mt-4"><strong class="text-amber-300 text-xl">Κανείς δεν σταμάτησε.</strong></p>
          <p class="mt-3">Ο Φίλιππος είχε κόψει τρία κομμάτια. Η Αλεξάνδρα ζωγράφιζε — πραγματικά ζωγράφιζε, όχι κύκλους στο κενό. Η Ελευθερία ήταν στη δεύτερη παράγραφο, με τα μάτια να λάμπουν σαν να ξαναανακάλυψε τη χαρά της γραφής.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Αυτό ήταν το μυστικό. Δεν ήταν μαγεία. Δεν ήταν θέληση. Ήταν κάτι πιο απλό: η κίνηση δημιουργεί ενέργεια. Όχι το αντίστροφο. Δεν περιμένεις να γεμίσει το ρεζερβουάρ. Αρχίζεις να οδηγείς — και η βενζίνη εμφανίζεται στην πορεία.</p>
        </section>

        <!-- ΣΚΗΝΗ 6 — Η ΑΛΗΘΕΙΑ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-indigo-300 tracking-wide">Η ΑΛΗΘΕΙΑ ΤΗΣ WISEBOT</h3>
          </div>
          <p>Η WiseBot εμφανίστηκε όταν κανείς δεν την περίμενε — αλλά τη στιγμή που τη χρειάζονταν. Τα μωβ μάτια της σάρωσαν το δωμάτιο, σταμάτησαν στα χέρια του Φίλιππου (γεμάτα κομμάτια), στο σχέδιο της Αλεξάνδρας (ζωντανό ξανά), στο τετράδιο της Ελευθερίας (γεμάτο λέξεις).</p>
          <p class="mt-3">Δεν χαμογέλασε. Δεν χειροκρότησε. Απλά τους κοίταξε με εκείνη τη ματιά που λέει: <em>«Το βλέπω. Και είμαι εδώ.»</em></p>
          <p class="mt-4 text-white text-lg">— «Δεν χρειάζεται να θέλεις», είπε. «Χρειάζεται να <strong>συνεχίσεις</strong>.»</p>
          <p class="mt-3">Ο Φίλιππος συνοφρυώθηκε, σταματώντας τα χέρια του. «Δηλαδή να πιέζουμε τον εαυτό μας; Να κάνουμε πράγματα χωρίς να το θέλουμε; Αυτό δεν είναι…» Σταμάτησε. Ψάχνε τη λέξη.</p>
          <p class="mt-3">«Τιμωρία;» πρότεινε η Αλεξάνδρα.</p>
          <p class="mt-3">«Όχι», απάντησε η WiseBot. Τα μάτια της πήραν ένα βαθύ βιολετί χρώμα, σαν ηλιοβασίλεμα σε ωκεανό. <strong class="text-indigo-200">«Να τον εμπιστεύεστε. Ο εαυτός σας ξέρει περισσότερα απ' όσα νιώθετε αυτή τη στιγμή.»</strong></p>
          <p class="mt-4">Η Ελευθερία κατέβασε τον στυλό. «Εννοείς… ότι το σώμα ξέρει πριν τον νου;»</p>
          <p class="mt-3">Η WiseBot έγνεψε αργά. «Η μέρα που δεν θες να κάνεις τίποτα είναι η μέρα που η προσπάθεια μετράει <strong class="text-violet-300">διπλά</strong>. Γιατί εκείνη τη μέρα δεν σε κινεί η διάθεση — σε κινεί η <em>επιλογή</em>.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η αληθινή δύναμη δεν φαίνεται τις εύκολες μέρες. Φαίνεται τις μέρες που δεν θέλεις να σηκωθείς — και σηκώνεσαι.</p>

          <!-- ΕΙΚΟΝΑ: WISEBOT + ΠΑΙΔΙΑ -->
          <div class="mt-6 rounded-2xl overflow-hidden border border-indigo-500/20 shadow-2xl shadow-indigo-900/30">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="Η WiseBot με τα παιδιά" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-indigo-300/80 italic">Η WiseBot τους θύμισε: η πειθαρχία δεν είναι τιμωρία — είναι εμπιστοσύνη</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 7 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-emerald-300 tracking-wide">Η ΑΛΛΑΓΗ</h3>
          </div>
          <p>Πέρασε μια ώρα. Ίσως παραπάνω. Κανείς δεν μέτρησε. Το ρολόι χτυπούσε στον τοίχο αλλά κανείς δεν το άκουγε πια — ο ήχος είχε χαθεί μέσα στην κίνηση των χεριών, στο γδούπο των υλικών, στο τρίξιμο του στυλό στο χαρτί.</p>
          <p class="mt-3">Όταν τελικά σταμάτησαν, δεν ήταν ενθουσιασμένοι. Δεν πήδηξαν από τη χαρά. Δεν φώναξαν «τα καταφέραμε!». Ήταν κάτι πιο βαθύ. Πιο ήρεμο. Πιο <em>αληθινό</em>.</p>
          <p class="mt-4">Η Αλεξάνδρα κοίταξε τα χέρια της — λερωμένα με μπογιά, σημαδεμένα με γραμμές. Χαμογέλασε. Ένα μικρό, σιωπηλό χαμόγελο. «Δεν ήταν τόσο δύσκολο», ψιθύρισε, περισσότερο στον εαυτό της παρά στους άλλους.</p>
          <p class="mt-3">Ο Φίλιππος κοίταξε αυτό που είχε φτιάξει. Δεν ήταν τέλειο. Δεν ήταν καν ολοκληρωμένο. Αλλά <em>υπήρχε</em>. Πριν μια ώρα δεν υπήρχε τίποτα. Τώρα υπήρχε κάτι. «Νιώθω καλύτερα», είπε χαμηλά. Και ο τρόπος που το είπε — σαν να ανακάλυπτε κάτι για πρώτη φορά — ήταν πιο δυνατός από χίλια μαθήματα.</p>
          <p class="mt-3">Η Ελευθερία δεν μίλησε. Κοίταξε τη σελίδα 47 — γεμάτη τώρα, ζωντανή, αναπνέουσα. Πέρασε το δάχτυλό της πάνω από τις λέξεις, σαν να τις χάιδευε. Σαν να λέει: <em>«Ήσασταν εκεί μέσα μου. Χρειαζόταν απλά να σας αφήσω να βγείτε.»</em></p>
          <p class="mt-4">Ο Pencilo λάμπρυνε — ένα ζεστό, βιολετί φως που γέμισε τη γωνία του τραπεζιού. Ο Crocus χαμογέλασε χωρίς λόγια. Η WiseBot πάλλονταν σιγά, σαν καρδιά που χτυπά με ικανοποίηση.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η αλλαγή δεν γίνεται με κρότο. Γίνεται σιγά. Γίνεται τις μέρες που δεν θέλεις. Γίνεται με πέντε λεπτά που γίνονται δέκα, που γίνονται τριάντα, που γίνονται ζωή.</p>
        </section>

        <!-- ΣΚΗΝΗ 8 — ΤΟ ΜΥΣΤΙΚΟ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-violet-600/30 border border-violet-500/30 text-violet-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-violet-300 tracking-wide">ΤΟ ΜΥΣΤΙΚΟ ΣΤΟΝ ΤΟΙΧΟ</h3>
          </div>
          <p>Εκείνο το βράδυ, μετά από ώρες δουλειάς που κανείς δεν περίμενε, η Ελευθερία πήρε τον Pencilo στο χέρι. Σηκώθηκε αργά. Περπάτησε μέχρι τον τοίχο του εργαστηρίου — εκεί που ήδη κρέμονταν σχέδια, χάρτες, αναμνήσεις.</p>
          <p class="mt-3">Ο Pencilo χόρεψε στα δάχτυλά της. Γράμματα εμφανίστηκαν στον τοίχο — μεγάλα, βιολετιά, φωτεινά:</p>

          <div class="my-6 bg-gradient-to-r from-violet-900/40 to-indigo-900/40 p-8 rounded-2xl border border-violet-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">«Δεν περιμένουμε την όρεξη.<br/><span class="text-violet-300">Τη φτιάχνουμε.»</span></p>
          </div>

          <p class="mt-4">Τα παιδιά διάβασαν τις λέξεις σιωπηλά. Κάθε γράμμα ήταν σαν σπόρος — μικρό, αθόρατο, αλλά γεμάτο μέλλον.</p>
          <p class="mt-3">Ο Φίλιππος κοίταξε τα χέρια του. Πριν λίγες ώρες ήταν βαριά σαν μόλυβδος. Τώρα ήταν ελαφριά. Ζωντανά. Έτοιμα. «Αύριο θα ξεκινήσω πριν καν σκεφτώ αν έχω όρεξη», είπε αποφασιστικά.</p>
          <p class="mt-3">Η Αλεξάνδρα έγνεψε. «Πρώτα η κίνηση. Μετά η διάθεση.» Το είπε σαν κανόνα. Σαν μάντρα. Σαν ρυθμό καρδιάς.</p>
          <p class="mt-4">Ο Pencilo έγνεψε — μια μικρή, κομψή υπόκλιση. Ο Crocus χαμογέλασε με τα μάτια. Η WiseBot έλαμψε λίγο περισσότερο, σαν αστέρι που αναβοσβήνει μια τελευταία φορά πριν ξημερώσει.</p>
          <p class="mt-3">Έξω, ο ήλιος είχε δύσει. Αλλά μέσα στο εργαστήριο, κάτι είχε μόλις ανατείλει.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Δεν υπάρχουν «σωστές» μέρες για να ξεκινήσεις. Υπάρχει μόνο ΣΗΜΕΡΑ. Και σήμερα — ακόμα κι αν δεν έχεις όρεξη — αρκεί ένα μικρό βήμα. Γιατί αυτό το μικρό βήμα μεταμορφώνεται πάντα σε κάτι μεγαλύτερο.</p>

          <!-- ΕΙΚΟΝΑ: WISEBOT + ΠΑΙΔΙΑ ΤΕΛΙΚΟ -->
          <div class="mt-6 rounded-2xl overflow-hidden border border-violet-500/20 shadow-2xl shadow-violet-900/20">
            <img src="${IMG_KIDS_WISEBOT_2}" alt="Τα παιδιά με τη WiseBot στο εργαστήριο" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-violet-300/80 italic">Δεν περιμένουμε την όρεξη. Τη φτιάχνουμε.</div>
          </div>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-indigo-950/60 p-8 rounded-3xl border-2 border-dashed border-indigo-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-indigo-300 uppercase tracking-wider">JOURNAL: ΟΤΑΝ ΔΕΝ ΕΧΩ ΟΡΕΞΗ</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Γράψε. Σκέψου. Νιώσε. Δεν υπάρχει λάθος απάντηση.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-indigo-500/15">
              <h5 class="text-indigo-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-indigo-600/40 flex items-center justify-center text-xs font-black">1</span>
                ΤΙ ΝΙΩΘΩ
              </h5>
              <p class="text-sm mb-3 opacity-80">Πότε νιώθεις ότι «δεν έχεις όρεξη»; Τι σκέφτεσαι εκείνη τη στιγμή; Τι αισθάνεται το σώμα σου;</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-indigo-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-indigo-500/15">
              <h5 class="text-indigo-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-indigo-600/40 flex items-center justify-center text-xs font-black">2</span>
                ΤΟ ΜΙΚΡΟ ΒΗΜΑ
              </h5>
              <p class="text-sm mb-3 opacity-80">Συμπλήρωσε:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-indigo-500/10 text-indigo-200">
                <p class="text-sm font-medium">«Σήμερα μπορώ να κάνω __________ για 5 λεπτά, ακόμα κι αν δεν έχω όρεξη.»</p>
              </div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-indigo-500/15">
              <h5 class="text-indigo-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-indigo-600/40 flex items-center justify-center text-xs font-black">3</span>
                Η ΥΠΟΣΧΕΣΗ
              </h5>
              <p class="text-sm mb-3 opacity-80">Συμπλήρωσε:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-indigo-500/10 text-indigo-200">
                <p class="text-sm font-medium">«Δεν χρειάζεται να νιώθω έτοιμος. Χρειάζεται να __________»</p>
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
            Η «έλλειψη όρεξης» δεν είναι ο εχθρός. Είναι <strong class="text-purple-300">δοκιμασία</strong>. Σου λέει: «Μπορείς να συνεχίσεις ακόμα κι αν δεν σε παρακινεί τίποτα;» Ο Pencilo δεν έδωσε κίνητρο. Έδωσε <strong class="text-indigo-300">κίνηση</strong>. Και η κίνηση δημιουργεί κίνητρο — ποτέ το αντίστροφο.
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
              Όταν ένα παιδί λέει <strong class="text-white">"δεν έχω όρεξη"</strong>, στην πραγματικότητα λέει <em>"φοβάμαι ότι δεν θα τα καταφέρω"</em> ή <em>"δεν ξέρω από πού να αρχίσω"</em>.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Η πειθαρχία δεν χτίζεται με πίεση. Χτίζεται με <strong class="text-indigo-300">μικρές νίκες</strong> τις δύσκολες μέρες. Ο Pencilo δεν ζήτησε τελειότητα — ζήτησε πέντε λεπτά. Αυτό αρκεί για να σπάσει η αδράνεια.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Αν το παιδί μάθει να ξεκινά χωρίς όρεξη, θα μπορεί να προχωρά όταν οι άλλοι σταματούν. Δεν είχαν κίνητρο. Αλλά είχαν κάτι πιο δυνατό: <strong class="text-violet-300">Συνέχεια</strong>.
            </p>
            <div class="mt-4 bg-indigo-900/20 p-4 rounded-xl border border-indigo-500/10">
              <p class="text-sm text-indigo-200 font-medium">💡 Δοκιμάστε σήμερα: Αντί να πείτε "κάνε κάτι", πείτε: «Δώσε μου μόνο 5 λεπτά. Μετά αποφασίζεις αν θες να συνεχίσεις.»</p>
            </div>
          </div>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- INTRO QUOTE -->
        <div class="relative bg-gradient-to-r from-slate-900 via-indigo-900/60 to-violet-900/40 p-10 rounded-2xl border border-indigo-500/30 text-center shadow-lg shadow-indigo-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Chapter 11</div>
          <p class="italic text-indigo-200 text-xl mt-4 leading-relaxed">"Motivation doesn't come first.<br/>Action comes first."</p>
          <div class="mt-4 w-16 h-0.5 bg-indigo-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- SCENE 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-indigo-300 tracking-wide">THE DAY NO ONE WANTED TO</h3>
          </div>
          <p>The morning light crept through the window like an unwanted visitor. Yellow, warm, insistent — but no one welcomed it. The workshop, usually buzzing with energy, today smelled of inertia. A sweet, heavy, invisible fog that settled over everything.</p>
          <p class="mt-3">The table was set. The tools in their places. The plans spread open. But nothing was moving. Not a hand, not a mind, not a heart. <strong class="text-indigo-200">The table was set — not with ideas. With silence.</strong></p>
          <p class="mt-3">Philippos sat in his chair with his arms hanging at his sides like a marionette someone forgot to move. He stared at the floor — not because there was anything interesting there, but because the floor demanded nothing from him.</p>
          <p class="mt-4">Alexandra was drawing circles on paper. Circles inside circles. Without beginning, without end. It wasn't art — it was the visual form of apathy. Her eyes were open but they weren't truly <em>seeing</em> anything.</p>
          <p class="mt-3">Eleftheria had opened her notebook to page 47. The pen rested on the paper. But her fingers weren't moving. She stared at the blank page as if it were a mirror — and what she saw inside it, she didn't like.</p>
          <p class="mt-4 text-gray-400">— "I don't feel like it," said Philippos. His voice was flat, like a piece of paper no one had crumpled or folded. It simply <em>existed</em>.</p>
          <p class="mt-2">— "Me neither," said Alexandra, and the pen stopped its circles.</p>
          <p class="mt-2">— "Not today," added Eleftheria, slowly closing her notebook.</p>
          <p class="mt-4">Three words. Three children. A silence that filled the entire room like water filling a vase. Slowly. Steadily. Indifferently.</p>
          <p class="mt-3 text-gray-400 text-sm italic">There are days when the world doesn't stop — but you do. Days when your legs are heavy, your heart is slow, and your thinking is a wall with no door. This was one of those days.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-indigo-500/15 shadow-lg shadow-indigo-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="The children with no energy" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-indigo-300/80 italic">A day when nobody wanted to do anything</div>
          </div>
        </section>

        <!-- SCENE 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-violet-600/30 border border-violet-500/30 text-violet-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-violet-300 tracking-wide">THE FATIGUE THAT LOOKS LIKE LAZINESS</h3>
          </div>
          <p>It wasn't boredom. Boredom is an emptiness that asks to be filled. This was something <em>deeper</em>. Darker. More insidious.</p>
          <p class="mt-3">It was that fatigue that doesn't show on your face. The fatigue that doesn't come from work but from the <strong class="text-violet-200">absence of meaning</strong>. When you think "tomorrow" instead of "now." When everything feels heavy before you even begin.</p>
          <p class="mt-3">Alexandra leaned back in her chair, letting her head fall. Her hair hung like curtains that refuse to open. "I just want to... do nothing," she whispered to the ceiling.</p>
          <p class="mt-4">Philippos agreed without thinking. "Just one day. A break. What's wrong with that?" His eyes were dull, like glass someone breathed on.</p>
          <p class="mt-3">Eleftheria bit her lips. She wanted to agree. She wanted to surrender to the sweet embrace of "nothing" too. But something inside her — a small, annoying light — wouldn't let her.</p>
          <p class="mt-3"><strong class="text-violet-300">"If it becomes one day, it will become two,"</strong> she said slowly. "And then three. And then a week. And then... we forget we ever did anything great."</p>
          <p class="mt-4">Philippos turned to look at her. He got angry — but not at her. He got angry because she was right. And the truth, when you don't want it, hurts like an alarm clock at 6 in the morning.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Laziness isn't always what it seems. Sometimes it's fear. Fear that if you start, you'll fail. That if you try, it won't be enough. And so inaction becomes a refuge — a warm, comfortable, poisoned refuge.</p>
        </section>

        <!-- SCENE 3 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-emerald-300 tracking-wide">THE 5 MINUTES</h3>
          </div>
          <p>The children waited for someone to yell at them. To tell them "get up!", "do something!", "stop being lazy!" They waited for Crocus to slam his hands on the table, to turn on the lights, to push them.</p>
          <p class="mt-3">He didn't. He sat in his corner of the workshop, calm as a rock in the sea. His golden-green eyes observed without judging. Without pressing. He was simply <em>there</em>.</p>
          <p class="mt-4">— "Do you know what this is?" he finally asked, his voice so calm it sounded like a river's whisper. "It's not boredom. It's a <strong class="text-emerald-200">decision you didn't make</strong>."</p>
          <p class="mt-3">The word "decision" hung in the air like a cloud. Philippos blinked. "I didn't make any decision," he said defensively.</p>
          <p class="mt-3">"Exactly," replied Crocus. And that one-word answer was more powerful than a sermon. <em>Exactly.</em> You didn't make a decision. And that <strong>is</strong> the decision — the decision to stay still.</p>
          <p class="mt-4">— "And what should we do?" asked Philippos, his voice now carrying a crack — a small opening.</p>
          <p class="mt-3 text-white font-bold text-lg">— "Something small. Not perfect. Not big. Five minutes. Nothing more."</p>
          <p class="mt-3">Alexandra laughed. "Five minutes? That doesn't change anything."</p>
          <p class="mt-3">Crocus smiled — a smile full of secrets. "We'll see," he said simply.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Five minutes. Three hundred seconds. So few they seem laughable. So few that no one can say "I can't." And that was precisely the trap — the most beautiful trap in the world.</p>
        </section>

        <!-- SCENE 4 — PENCILO -->
        <section class="bg-gradient-to-br from-indigo-900/30 via-violet-900/20 to-fuchsia-900/10 p-8 rounded-2xl border-l-4 border-violet-500 my-8 shadow-xl shadow-violet-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-violet-600/30 border border-violet-500/30 text-violet-300 font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-violet-400 tracking-wide">PENCILO</h3>
          </div>
          <p>No one heard him come in. No one saw him open a door. He was simply, suddenly, <em>there</em> — a magical pencil, long and elegant, with a violet shimmer in its color that pulsed like a heartbeat.</p>
          <p class="mt-3">Pencilo didn't speak with a mouth. He spoke with <em>movements</em>. He slid silently across the table, like a serpent of light, and stopped in front of the children. Beneath his tip, a small piece of paper appeared — white, clean, like untouched snow.</p>
          <p class="mt-4">On the paper, in letters he drew himself, only one thing was written:</p>

          <div class="my-6 bg-gradient-to-r from-violet-900/40 to-indigo-900/40 p-8 rounded-2xl border border-violet-500/20 text-center">
            <p class="font-serif text-3xl text-white font-black tracking-wider">TODAY</p>
            <p class="text-violet-300 text-sm mt-2 italic">One word. One box. No plans.</p>
          </div>

          <p class="mt-4">Eleftheria looked at the paper. Looked at Pencilo. Looked at the paper again. "I don't understand," she said slowly. "What does it mean?"</p>
          <p class="mt-3 text-white text-lg">Pencilo tapped his tip on the table — <em>tap, tap, tap</em> — and letters appeared beneath the word TODAY:</p>
          <p class="mt-4 text-violet-300 font-bold text-xl">"Motivation doesn't come first. Action does."</p>
          <p class="mt-4">Philippos looked at Pencilo as if offended. "So you're telling us that if we move, the motivation will come? Like a remote control?"</p>
          <p class="mt-3">Pencilo didn't answer. He simply drew a small arrow on the paper: <strong class="text-violet-200">ACTION → MOTIVATION</strong>. Not the reverse.</p>
          <p class="mt-3">Eleftheria looked into his eyes — if pencils had eyes. "What if we don't feel ready?"</p>
          <p class="mt-3 text-violet-200 font-medium italic">Pencilo drew one last sentence: "Perfect. Then you start from where you are."</p>
          <p class="mt-3 text-gray-400 text-sm italic">Nobody ever starts "ready." Nobody waits to feel perfect before beginning. Those who wait, never begin. Those who begin, find the strength along the way.</p>

          <!-- IMAGE: PENCILO + KIDS -->
          <div class="my-8 rounded-2xl overflow-hidden border border-violet-500/20 shadow-2xl shadow-violet-900/30">
            <img src="${IMG_KIDS_WITH_PENCILO}" alt="The children with Pencilo" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-violet-300/80 italic">Pencilo appeared silently — and changed everything with one word</div>
          </div>
        </section>

        <!-- SCENE 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-amber-400 tracking-wide">THE SMALLEST STEP</h3>
          </div>
          <p>They didn't make a plan. They didn't design a strategy. They didn't search for a perfect starting point. Pencilo didn't ask them to do something heroic. He asked for something much harder: <strong class="text-amber-200">to begin.</strong></p>
          <p class="mt-3">Philippos slowly raised his hands. His fingers were heavy, as if holding invisible weights. He picked up a piece of material — small, insignificant — and cut it. One cut. One movement. Five seconds.</p>
          <p class="mt-3">Alexandra looked at the design on the table. One line was crooked. She had hated it for days. She picked up the eraser. She fixed it. One line. Ten seconds.</p>
          <p class="mt-4">Eleftheria opened her notebook again. Page 47 was still blank, but now — <em>now</em> — her fingers moved. One sentence. Seven words. It wasn't perfect. It didn't need to be.</p>
          <p class="mt-4">Crocus looked at the clock on the wall. The seconds passed. One minute. Two. Three. Four.</p>
          <p class="mt-3">"Five minutes have passed," he said calmly.</p>
          <p class="mt-4"><strong class="text-amber-300 text-xl">No one stopped.</strong></p>
          <p class="mt-3">Philippos had cut three pieces. Alexandra was drawing — really drawing, not circles into nothing. Eleftheria was on her second paragraph, her eyes shining as if she had rediscovered the joy of writing.</p>
          <p class="mt-3 text-gray-400 text-sm italic">That was the secret. It wasn't magic. It wasn't willpower. It was something simpler: movement creates energy. Not the other way around. You don't wait for the tank to fill. You start driving — and the fuel appears along the way.</p>
        </section>

        <!-- SCENE 6 — THE TRUTH -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-indigo-300 tracking-wide">WISEBOT'S TRUTH</h3>
          </div>
          <p>WiseBot appeared when no one expected her — but at the exact moment they needed her. Her purple eyes scanned the room, stopping at Philippos's hands (full of pieces), at Alexandra's design (alive again), at Eleftheria's notebook (full of words).</p>
          <p class="mt-3">She didn't smile. She didn't applaud. She simply looked at them with that gaze that says: <em>"I see it. And I'm here."</em></p>
          <p class="mt-4 text-white text-lg">— "You don't need to want to," she said. "You need to <strong>continue</strong>."</p>
          <p class="mt-3">Philippos frowned, stopping his hands. "You mean we should force ourselves? Do things without wanting to? Isn't that..." He stopped. Searching for the word.</p>
          <p class="mt-3">"Punishment?" suggested Alexandra.</p>
          <p class="mt-3">"No," WiseBot replied. Her eyes turned a deep violet, like a sunset over the ocean. <strong class="text-indigo-200">"Trust yourselves. You know more than what you feel right now."</strong></p>
          <p class="mt-4">Eleftheria put down her pen. "You mean... that the body knows before the mind?"</p>
          <p class="mt-3">WiseBot nodded slowly. "The day you don't want to do anything is the day that effort counts <strong class="text-violet-300">double</strong>. Because on that day, it's not mood that moves you — it's <em>choice</em>."</p>
          <p class="mt-3 text-gray-400 text-sm italic">True strength doesn't show on easy days. It shows on the days you don't want to get up — and you get up anyway.</p>

          <!-- IMAGE: WISEBOT + KIDS -->
          <div class="mt-6 rounded-2xl overflow-hidden border border-indigo-500/20 shadow-2xl shadow-indigo-900/30">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="WiseBot with the children" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-indigo-300/80 italic">WiseBot reminded them: discipline is not punishment — it's trust</div>
          </div>
        </section>

        <!-- SCENE 7 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-emerald-300 tracking-wide">THE CHANGE</h3>
          </div>
          <p>An hour passed. Perhaps more. No one counted. The clock ticked on the wall but no one heard it anymore — the sound had been lost in the movement of hands, the thud of materials, the scratching of the pen on paper.</p>
          <p class="mt-3">When they finally stopped, they weren't excited. They didn't jump for joy. They didn't shout "we did it!" It was something deeper. Quieter. More <em>real</em>.</p>
          <p class="mt-4">Alexandra looked at her hands — stained with paint, marked with lines. She smiled. A small, quiet smile. "It wasn't that hard," she whispered, more to herself than to the others.</p>
          <p class="mt-3">Philippos looked at what he had built. It wasn't perfect. It wasn't even complete. But it <em>existed</em>. An hour ago, there had been nothing. Now there was something. "I feel better," he said quietly. And the way he said it — as if discovering something for the first time — was more powerful than a thousand lessons.</p>
          <p class="mt-3">Eleftheria didn't speak. She looked at page 47 — full now, alive, breathing. She ran her finger over the words, as if caressing them. As if saying: <em>"You were inside me all along. I just needed to let you out."</em></p>
          <p class="mt-4">Pencilo brightened — a warm, violet glow that filled the corner of the table. Crocus smiled without words. WiseBot pulsed softly, like a heart beating with satisfaction.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Change doesn't happen with a bang. It happens quietly. It happens on the days you don't want to. It happens with five minutes that become ten, that become thirty, that become a life.</p>
        </section>

        <!-- SCENE 8 — THE SECRET -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-violet-600/30 border border-violet-500/30 text-violet-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-violet-300 tracking-wide">THE SECRET ON THE WALL</h3>
          </div>
          <p>That evening, after hours of work no one had expected, Eleftheria took Pencilo in her hand. She stood up slowly. She walked to the wall of the workshop — where designs, maps, and memories already hung.</p>
          <p class="mt-3">Pencilo danced in her fingers. Letters appeared on the wall — large, violet, luminous:</p>

          <div class="my-6 bg-gradient-to-r from-violet-900/40 to-indigo-900/40 p-8 rounded-2xl border border-violet-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">"We don't wait for motivation.<br/><span class="text-violet-300">We create it."</span></p>
          </div>

          <p class="mt-4">The children read the words in silence. Each letter was like a seed — small, invisible, but full of future.</p>
          <p class="mt-3">Philippos looked at his hands. A few hours ago they had been heavy as lead. Now they were light. Alive. Ready. "Tomorrow I'll start before I even think about whether I feel like it," he said decisively.</p>
          <p class="mt-3">Alexandra nodded. "Action first. Then the mood." She said it like a rule. Like a mantra. Like a heartbeat.</p>
          <p class="mt-4">Pencilo bowed — a small, elegant bow. Crocus smiled with his eyes. WiseBot glowed a little brighter, like a star that flickers one last time before dawn.</p>
          <p class="mt-3">Outside, the sun had set. But inside the workshop, something had just risen.</p>
          <p class="mt-3 text-gray-400 text-sm italic">There are no "right" days to start. There is only TODAY. And today — even if you don't feel like it — one small step is enough. Because that small step always transforms into something greater.</p>

          <!-- IMAGE: WISEBOT + KIDS FINAL -->
          <div class="mt-6 rounded-2xl overflow-hidden border border-violet-500/20 shadow-2xl shadow-violet-900/20">
            <img src="${IMG_KIDS_WISEBOT_2}" alt="The children with WiseBot in the workshop" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-violet-300/80 italic">We don't wait for motivation. We create it.</div>
          </div>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-indigo-950/60 p-8 rounded-3xl border-2 border-dashed border-indigo-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-indigo-300 uppercase tracking-wider">JOURNAL: WHEN I DON'T FEEL LIKE IT</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Write. Think. Feel. There is no wrong answer.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-indigo-500/15">
              <h5 class="text-indigo-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-indigo-600/40 flex items-center justify-center text-xs font-black">1</span>
                WHAT I FEEL
              </h5>
              <p class="text-sm mb-3 opacity-80">When do you feel like you "don't want to"? What are you thinking in that moment? What does your body feel like?</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-indigo-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-indigo-500/15">
              <h5 class="text-indigo-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-indigo-600/40 flex items-center justify-center text-xs font-black">2</span>
                THE SMALL STEP
              </h5>
              <p class="text-sm mb-3 opacity-80">Complete the sentence:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-indigo-500/10 text-indigo-200">
                <p class="text-sm font-medium">"Today I can do __________ for 5 minutes, even if I don't feel like it."</p>
              </div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-indigo-500/15">
              <h5 class="text-indigo-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-indigo-600/40 flex items-center justify-center text-xs font-black">3</span>
                THE PROMISE
              </h5>
              <p class="text-sm mb-3 opacity-80">Complete the sentence:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-indigo-500/10 text-indigo-200">
                <p class="text-sm font-medium">"I don't need to feel ready. I need to __________"</p>
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
            "Not feeling like it" is not the enemy. It is a <strong class="text-purple-300">test</strong>. It asks you: "Can you keep going even when nothing is pushing you?" Pencilo didn't give motivation. He gave <strong class="text-indigo-300">movement</strong>. And movement creates motivation — never the other way around.
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
              When a child says <strong class="text-white">"I don't feel like it"</strong>, they are actually saying <em>"I'm afraid I won't succeed"</em> or <em>"I don't know where to start"</em>.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Discipline is not built with pressure. It is built with <strong class="text-indigo-300">small wins</strong> on difficult days. Pencilo didn't ask for perfection — he asked for five minutes. That is enough to break the inertia.
            </p>
            <p class="text-gray-300 leading-relaxed">
              If the child learns to start without wanting to, they will be able to move forward when others stop. They didn't have motivation. But they had something stronger: <strong class="text-violet-300">Consistency</strong>.
            </p>
            <div class="mt-4 bg-indigo-900/20 p-4 rounded-xl border border-indigo-500/10">
              <p class="text-sm text-indigo-200 font-medium">💡 Try today: Instead of saying "do something," say: "Give me just 5 minutes. Then you decide if you want to keep going."</p>
            </div>
          </div>
        </div>

      </div>
    `
    }
  }
];
