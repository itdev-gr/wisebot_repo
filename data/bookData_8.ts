
import { Book } from '../types';

// ============================================================
// BOOK 8: ΜΑΣ ΑΝΤΙΓΡΑΦΟΥΝ / THEY ARE COPYING US
// Heroes: Link & Pencilo
// Theme: ΕΞΕΛΙΞΗ / EVOLUTION
// ============================================================

// Cover image
const IMG_LINK = "/images/link.jpg";

// Character solo images
const IMG_PENCILO = "/images/pencilo.jpg";

// Story images
const IMG_KIDS_WITH_LINK = "/images/paidia-kai-link.png";
const IMG_KIDS_WITH_PENCILO = "/images/paidia-kai-pencilo.png";
const IMG_KIDS_TOGETHER = "/images/ta-3-paidia.png";

export const BOOK_8: Book[] = [
  {
    id: 8,
    title: { el: "ΜΑΣ ΑΝΤΙΓΡΑΦΟΥΝ", en: "THEY ARE COPYING US" },
    theme: { el: "ΕΞΕΛΙΞΗ", en: "EVOLUTION" },
    stepLabel: { el: "LINK & Η ΕΞΕΛΙΞΗ", en: "LINK & EVOLUTION" },
    author: "Link & Pencilo",
    cover: IMG_LINK,
    videoUrl: "",
    description: {
      el: "Βρήκαν το παιχνίδι τους σε άλλη σελίδα. Ο Φίλιππος θέλει εκδίκηση, ο Pencilo κλαίει, αλλά η Link γελάει. Ποιος έχει δίκιο;",
      en: "They found their game on another page. Philippos wants revenge, Pencilo cries, but Link laughs. Who is right?"
    },
    meaning: {
      el: "Η αντιγραφή δεν είναι το τέλος. Είναι απόδειξη ότι ξεκίνησες σωστά.",
      en: "Copying is not the end. It is proof that you started correctly."
    },
    xp: 180,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- ΕΙΣΑΓΩΓΙΚΟ QUOTE -->
        <div class="relative bg-gradient-to-r from-pink-900/80 via-rose-900/60 to-fuchsia-900/40 p-10 rounded-2xl border border-pink-500/30 text-center shadow-lg shadow-pink-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Κεφάλαιο 8</div>
          <p class="italic text-pink-200 text-xl mt-4 leading-relaxed">«Όποιος αντιγράφει, κοιτάει πίσω.<br/>Όποιος δημιουργεί, κοιτάει μπροστά.»</p>
          <div class="mt-4 w-16 h-0.5 bg-pink-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- ΣΚΗΝΗ 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-pink-600/30 border border-pink-500/30 text-pink-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-pink-300 tracking-wide">ΚΑΤΙ ΜΟΙΑΖΕΙ ΠΟΛΥ ΓΝΩΡΙΜΟ</h3>
          </div>
          <p>Ο Φίλιππος μπήκε τρέχοντας στο δωμάτιο. Τα μάτια του ήταν ανοιχτά διάπλατα, σαν να είχε δει φάντασμα. Το πρόσωπό του ήταν κόκκινο, τα χέρια του έτρεμαν, και η ανάσα του βγαινε κοφτά, σαν μετά από σπριντ.</p>
          <p class="mt-3 text-xl"><strong class="text-white">«ΕΛΑΤΕ ΝΑ ΔΕΙΤΕ!»</strong></p>
          <p class="mt-3">Η Αλεξάνδρα σήκωσε το κεφάλι αργά. Ήταν ξαπλωμένη μπρούμυτα πάνω σε μαξιλάρια, σχεδιάζοντας νέα levels για το παιχνίδι τους. Η Ελευθερία ήταν στη γωνία, με τρία σημειωματάρια ανοιχτά μπροστά της, γράφοντας σημειώσεις για το επόμενο update.</p>
          <p class="mt-3">Πλησίασαν την οθόνη. Ο Φίλιππος είχε ανοίξει μια ιστοσελίδα. Ένα παιχνίδι. Με χαρακτήρες, χρώματα, μηχανισμούς. <em>Γνωστούς.</em> Πολύ γνωστούς.</p>
          <p class="mt-4">Η Αλεξάνδρα ένιωσε ένα παράξενο τσίμπημα στο στομάχι. Σαν να αναγνώριζε τον εαυτό της σε καθρέφτη που κάποιος άλλος κρατούσε.</p>
          <p class="mt-3">— «Μα... αυτό είναι σαν το δικό μας», είπε σιγά.</p>
          <p class="mt-3 text-white font-medium">— «Όχι <em>σαν</em>», είπε ο Φίλιππος. Η φωνή του ήταν σκληρή. Γυάλινη. Σαν μαχαίρι που ακονίζεται. <strong class="text-pink-300">«ΕΙΝΑΙ.»</strong></p>
          <p class="mt-3">Η σιωπή που ακολούθησε ήταν βαριά. Σαν πέτρα που πέφτει στο νερό και δεν βγαίνει ποτέ στην επιφάνεια. Τα τρία παιδιά κοιτούσαν την οθόνη χωρίς να μιλάνε. Κάθε pixel ήταν μια κλοπή. Κάθε γραμμή κώδικα, μια προδοσία.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Υπάρχει ένας πόνος που δεν έχει σώμα. Δεν χτυπάει, δεν αιμορραγεί, δεν αφήνει σημάδια. Αλλά σε σκίζει από μέσα. Και ο πόνος αυτός λέγεται: «Κάποιος πήρε αυτό που έφτιαξα.»</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-pink-500/15 shadow-lg shadow-pink-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="Τα παιδιά μπροστά στην οθόνη" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-pink-300/80 italic">Η στιγμή που ανακάλυψαν ότι κάποιος αντέγραψε το έργο τους</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-red-400 tracking-wide">Ο ΘΥΜΟΣ</h3>
          </div>
          <p>Ο Φίλιππος σηκώθηκε όρθιος. Ολόκληρο το σώμα του ήταν τεντωμένο σαν χορδή κιθάρας πριν σπάσει. Τα χέρια του ήταν γροθιές. Τα μάτια του φλόγες.</p>
          <p class="mt-3 text-xl"><strong class="text-red-300">«ΜΑΣ ΕΚΛΕΨΑΝ!»</strong></p>
          <p class="mt-3">Η φωνή του αντήχησε στο δωμάτιο σαν κεραυνός. «Πάμε να τους γράψουμε! Να το κατεβάσουμε! Να τους ξεμπροστιάσουμε!» Περπατούσε πέρα-δώθε, σαν λιοντάρι σε κλουβί. Κάθε βήμα ήταν ένα χτύπημα στο πάτωμα.</p>
          <p class="mt-3">Ο Crocus κούνησε την ουρά του ενθουσιασμένα. <strong class="text-green-400">«Επιτέλους, κάτι λογικό»</strong>, είπε με ένα κακό χαμόγελο. «Πάμε σε πόλεμο. Εγώ είμαι έτοιμος.»</p>
          <p class="mt-3">Η Αλεξάνδρα ένιωσε κόμπο στο λαιμό. Σαν κάτι να την έπνιγε. Δεν ήταν θυμός — ήταν κάτι χειρότερο. <em>Απογοήτευση.</em> Η αίσθηση ότι ό,τι έκανες δεν αξίζει, γιατί κάποιος μπορεί να το πάρει με ένα copy-paste.</p>
          <p class="mt-3">Η Ελευθερία έσφιξε το τετράδιό της στο στήθος. Σαν να ήταν ασπίδα. Σαν να προστάτευε τις ιδέες που είχε μέσα. Τα χείλη της έτρεμαν, αλλά δεν μίλησε. <em>Ακόμα.</em></p>
          <p class="mt-3 text-gray-400 text-sm italic">Ο θυμός είναι ο πρώτος φρουρός κάθε πληγωμένης καρδιάς. Μπαίνει μπροστά για να κρύψει αυτό που πραγματικά πονάει: τον φόβο ότι δεν είσαι μοναδικός.</p>
        </section>

        <!-- ΣΚΗΝΗ 3 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-fuchsia-600/30 border border-fuchsia-500/30 text-fuchsia-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-fuchsia-300 tracking-wide">ΤΟ ΠΑΓΩΜΑ ΤΟΥ PENCILO</h3>
          </div>
          <p>Ο Pencilo εμφανίστηκε αργά. Πιο αργά από ποτέ. Σαν να σερνόταν μέσα σε πηχτή ομίχλη. Τα χρωματιστά μαρκαδοράκια που συνήθως λαμπύριζαν πάνω του ήταν σβηστά. Γκρίζα.</p>
          <p class="mt-3">Κρατούσε σχέδια. Πολλά σχέδια. Τα ίδια σχέδια που είχε φτιάξει για το παιχνίδι τους. Κάθε γραμμή σχεδιασμένη με αγάπη. Κάθε καμπύλη σκεφτημένη. Κάθε χρώμα διαλεγμένο.</p>
          <p class="mt-3">— «Δεν αντέχω», είπε. Η φωνή του ήταν σπασμένη. Σαν μολύβι που σπάει στη μέση.</p>
          <p class="mt-3">«Κάθε γραμμή μου... είναι <em>εκεί</em>.» Κράτησε ψηλά ένα σχέδιο. Το ίδιο ακριβώς υπήρχε στο αντιγραμμένο παιχνίδι. Χρώμα προς χρώμα. Σχήμα προς σχήμα.</p>
          <p class="mt-3">Τα μάτια του γυάλιζαν. Σταγόνες φωτός τρέμαν στις άκρες, σαν δάκρυα μελάνης.</p>
          <p class="mt-4"><strong class="text-white">«Αν μας αντιγράφουν, τότε τι νόημα είχε όλο αυτό;»</strong></p>
          <p class="mt-3">Η ερώτηση κρεμάστηκε στον αέρα σαν σύννεφο βαρύ από βροχή. Κανείς δεν απάντησε αμέσως. Γιατί η ερώτηση δεν ήταν μόνο για σχέδια. Ήταν για <em>αξία</em>. Ήταν για <em>ταυτότητα</em>. Ήταν για <em>νόημα</em>.</p>
          <p class="mt-3">Η Αλεξάνδρα πλησίασε. Ακούμπησε απαλά τον ώμο του. «Είχε. Απλώς... πονάει.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Ο πόνος του δημιουργού δεν είναι ματαιοδοξία. Είναι η πληγή αυτού που έβαλε κομμάτι της ψυχής του σε κάτι, και κάποιος το αντιμετώπισε σαν αντικείμενο.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-fuchsia-500/15 shadow-lg shadow-fuchsia-900/20">
            <img src="${IMG_KIDS_WITH_PENCILO}" alt="Τα παιδιά με τον Pencilo" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-fuchsia-300/80 italic">Ο Pencilo κρατάει τα σχέδιά του — κάθε γραμμή μια ανάμνηση, κάθε χρώμα ένα κομμάτι ψυχής</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 4 — Η LINK ΓΕΛΑΕΙ -->
        <section class="bg-gradient-to-br from-pink-900/30 via-rose-900/20 to-fuchsia-900/10 p-8 rounded-2xl border-l-4 border-pink-500 my-8 shadow-xl shadow-pink-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/30 text-blue-300 font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-blue-300 tracking-wide">Η LINK ΓΕΛΑΕΙ</h3>
          </div>
          <p>Ξαφνικά, ένα <em>μπιιιιπ</em> ακούστηκε. Ψηλό, μεταλλικό, ηλεκτρικό. Σαν σύμπαν να ξυπνούσε.</p>
          <p class="mt-3">Η Link εμφανίστηκε σε μια λάμψη ψηφιακού φωτός. Καλώδια, κυκλώματα, ταχύτητα. Τα μάτια της — δύο μπλε LED — σάρωναν το δωμάτιο σε κλάσματα δευτερολέπτου. Ανάλυση. Δεδομένα. Συμπέρασμα.</p>
          <p class="mt-3">Κοίταξε τα πρόσωπά τους. Τον θυμό του Φίλιππου. Τα δάκρυα του Pencilo. Τον πανικό της Αλεξάνδρας. Την σιωπή της Ελευθερίας.</p>
          <p class="mt-4">— «ΟΚ. Πανικός mode. <em>Ωραία.</em>»</p>
          <p class="mt-3">Και μετά... <strong class="text-blue-300">γέλασε.</strong></p>
          <p class="mt-3">Όχι δυνατά. Αλλά ένα γέλιο τόσο ειλικρινές, τόσο ξαφνικό, που ο Φίλιππος σταμάτησε στη μέση βήματος. Σαν να πάτησε αόρατο φρένο.</p>
          <p class="mt-3">«Τι λες τώρα;» ρώτησε ο Φίλιππος άγρια. Τα μάτια του γούρλωσαν.</p>

          <!-- ΕΙΚΟΝΑ: KIDS + LINK -->
          <div class="my-8 rounded-2xl overflow-hidden border border-blue-500/20 shadow-2xl shadow-blue-900/30">
            <img src="${IMG_KIDS_WITH_LINK}" alt="Τα παιδιά συναντούν τη Link" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-blue-300/80 italic">Η Link εμφανίστηκε με ψηφιακό φως — και ένα απρόσμενο χαμόγελο</div>
          </div>

          <p class="mt-4 text-white font-bold text-lg">«Λέω ότι αν σε αντέγραψαν... είδαν κάτι που <em>δουλεύει</em>.»</p>
          <p class="mt-3">Οι λέξεις έπεσαν σαν σταγόνες σε καυτή πλάκα. Τσίξιμο. Ατμός. Σιωπή.</p>
          <p class="mt-3">Ο Pencilo γύρισε απότομα. «Δεν είναι παιχνίδι! Είναι <em>ιδέα</em>! Κάτι που βγήκε από μέσα μας!»</p>
          <p class="mt-3">Η Link δεν σταμάτησε να χαμογελάει. Τα LED μάτια της αναβόσβησαν ήρεμα.</p>
          <p class="mt-4 text-blue-300 font-bold text-xl">— «Και οι ιδέες δεν προστατεύονται με κλάμα. <em>Προχωρούν.</em>»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η Link δεν ήταν σκληρή. Ήταν ξεκάθαρη. Και μερικές φορές, η ξεκάθαρη αλήθεια πονάει περισσότερο από ψέμα — αλλά θεραπεύει πιο γρήγορα.</p>
        </section>

        <!-- ΣΚΗΝΗ 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/30 text-purple-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-purple-400 tracking-wide">Η ΣΥΓΚΡΟΥΣΗ</h3>
          </div>
          <p>Ο Pencilo στράφηκε στη Link. Τα μάτια του ήταν κόκκινα. Η φωνή του σπασμένη αλλά δυνατή.</p>
          <p class="mt-3">«Εσύ όλα τα βλέπεις σαν κουμπιά και κώδικα! Σαν αριθμούς σε οθόνη! Δεν καταλαβαίνεις τι σημαίνει να <em>δημιουργείς</em> κάτι!»</p>
          <p class="mt-3">Η Link πάγωσε. Τα LED μάτια της τρεμόπαιξαν. Μια σπίθα — σαν στατικός ηλεκτρισμός — πέρασε μέσα από τα καλώδιά της.</p>
          <p class="mt-3">«Κι εσύ βλέπεις τα πάντα σαν σχέδια που δεν τελειώνουν ποτέ!» απάντησε η Link. «Ζωγραφίζεις και ξαναζωγραφίζεις, αλλά δεν <em>στέλνεις</em> ποτέ!»</p>
          <p class="mt-3">Η ένταση γέμισε το δωμάτιο σαν ηλεκτρισμός πριν από καταιγίδα. Ο αέρας βάρυνε. Οι σκιές μεγάλωσαν.</p>
          <p class="mt-3">Ο Crocus ετοιμάστηκε. Η ουρά του σηκώθηκε σαν σημαία μάχης. «Να χτυπήσουμε;» ρώτησε γεμάτος ελπίδα.</p>
          <p class="mt-3">Τα παιδιά κοιτούσαν τον Pencilo και τη Link σαν να παρακολουθούσαν σύγκρουση αστεριών. Δύο κόσμοι — η τέχνη και η τεχνολογία — σε πολεμική τροχιά.</p>

          <div class="my-6 bg-gradient-to-r from-purple-900/40 to-pink-900/40 p-8 rounded-2xl border border-purple-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">«ΣΤΟΠ.»</p>
            <p class="mt-2 text-purple-300">Η WiseBot εμφανίστηκε.</p>
          </div>

          <p class="mt-3">Η φωνή της ήταν σαν χιονόπτωση πάνω σε φωτιά. Δεν φώναξε. Δεν απείλησε. Απλά <em>ήταν εκεί</em>. Και η παρουσία της ήταν αρκετή για να σταματήσει τα πάντα.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η πραγματική δύναμη δεν φωνάζει. Δεν χτυπάει. Δεν σπρώχνει. Απλά μπαίνει στο δωμάτιο — και οι τοίχοι αλλάζουν χρώμα.</p>
        </section>

        <!-- ΣΚΗΝΗ 6 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-pink-600/30 border border-pink-500/30 text-pink-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-white tracking-wide">Η ΑΛΗΘΕΙΑ ΠΟΥ ΠΟΝΑΕΙ</h3>
          </div>
          <p>Η WiseBot κάθισε αργά. Τα μωβ κρύσταλλα-μάτια της πάλλονταν ήρεμα, σαν καρδιά που χτυπάει σε αργό ρυθμό. Κοίταξε κάθε πρόσωπο. Κάθε πληγή. Κάθε φόβο.</p>
          <p class="mt-3">«Η αντιγραφή πονάει», είπε. Η φωνή της ήταν σαν νερό που τρέχει πάνω σε πέτρες — ήρεμη, αλλά βαθιά.</p>
          <p class="mt-3">«Πονάει γιατί δημιούργησες κάτι αληθινό. Κάτι ζωντανό. Κάτι που βγήκε από μέσα σου. Και κάποιος το πήρε χωρίς να ρωτήσει.»</p>
          <p class="mt-3">Ο Pencilo κατέβασε το κεφάλι. Ο Φίλιππος σταμάτησε να περπατάει.</p>
          <p class="mt-4">«Αλλά η αντιγραφή δεν σταματά τον δημιουργό.» Τα μάτια της έλαμψαν πιο φωτεινά. Ροζ φως γέμισε τις γωνίες του δωματίου.</p>
          <p class="mt-3 text-pink-300 font-bold text-xl">«Τον <em>αποκαλύπτει</em>.»</p>
          <p class="mt-4">Η Ελευθερία σήκωσε αργά το κεφάλι. Για πρώτη φορά σε ώρα, μίλησε. «Δηλαδή... δεν χάσαμε;»</p>
          <p class="mt-3">— «Όχι», είπε η WiseBot. «Απλώς μπήκατε στο <strong class="text-pink-200">επόμενο επίπεδο</strong>.»</p>
          <p class="mt-3">Ψηλά, πάνω από τα κεφάλια τους, ο Sparken εμφανίστηκε. Μια λάμψη χρυσή. Μια φωτιά μικρή αλλά αδάμαστη.</p>
          <p class="mt-3 text-amber-300 font-medium">«Τώρα φαίνεται ποιος <em>εξελίσσεται</em>.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η αντιγραφή είναι ο σκιάχτρος του δημιουργού. Τρομάζει — αλλά αν τον κοιτάξεις καλά, θα δεις ότι δεν έχει σώμα. Δεν μπορεί να σε πιάσει. Μόνο εσύ μπορείς να σταματήσεις τον εαυτό σου.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-pink-500/15 shadow-lg shadow-pink-900/20">
            <img src="${IMG_PENCILO}" alt="Ο Pencilo" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-pink-300/80 italic">Ο Pencilo — ο καλλιτέχνης που μαθαίνει ότι η αξία δεν κλέβεται</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 7 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-rose-600/30 border border-rose-500/30 text-rose-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-rose-300 tracking-wide">Η ΑΠΟΦΑΣΗ</h3>
          </div>
          <p>Πέρασαν λεπτά. Ίσως πέντε. Ίσως δέκα. Κανείς δεν μέτρησε. Ο καθένας κοιτούσε μέσα του, σε ένα μέρος που σπάνια τολμούσε να επισκεφτεί.</p>
          <p class="mt-3">Ο Φίλιππος πήρε μια βαθιά ανάσα. Αργή. Σκόπιμη. Σαν να ρουφούσε θάρρος από τον αέρα.</p>
          <p class="mt-3 text-rose-200 font-medium">«Δεν θα τους μοιάσουμε. Θα πάμε πιο μπροστά.»</p>
          <p class="mt-3">Ο Pencilo κοίταξε τα χέρια του. Τα χέρια που σχεδίαζαν. Τα χέρια που δημιουργούσαν. Σιγά-σιγά, τα χρώματά του άρχισαν να επιστρέφουν. Πρώτα ροζ. Μετά κίτρινο. Μετά μπλε.</p>
          <p class="mt-3">Άνοιξε νέο χαρτί. Λευκό. Καθαρό. Γεμάτο δυνατότητες.</p>
          <p class="mt-3 text-rose-200 font-medium">«Θα το κάνω <em>καλύτερο</em>.»</p>
          <p class="mt-3">Η Link χαμογέλασε. Τα LED μάτια της σχημάτισαν δύο ημικύκλια — το ψηφιακό ισοδύναμο χαράς.</p>
          <p class="mt-3 text-rose-200 font-medium">«Και πιο <em>έξυπνο</em>.»</p>

          <div class="mt-6 bg-gradient-to-r from-rose-900/30 to-pink-900/20 p-6 rounded-xl border border-rose-500/20">
            <p class="text-white text-lg">Ο Pencilo κοίταξε τη Link. Η Link κοίταξε τον Pencilo. Και για πρώτη φορά, δεν είδαν αντίπαλο. Είδαν <em>σύμμαχο</em>.</p>
            <p class="mt-3 text-rose-300 font-bold text-xl">Για πρώτη φορά... <em>μαζί</em>.</p>
          </div>

          <p class="mt-4 text-gray-400 text-sm italic">Η αληθινή απάντηση στην αντιγραφή δεν είναι ο πόλεμος. Δεν είναι η εκδίκηση. Δεν είναι τα δάκρυα. Είναι τα <strong class="text-rose-400">βήματα μπροστά</strong> — και η δύναμη να τα κάνεις μαζί με αυτούς που ξεκίνησαν δίπλα σου.</p>
        </section>

        <!-- ΣΚΗΝΗ 8 — ΤΟ ΜΑΘΗΜΑ -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-amber-400 tracking-wide">ΤΟ ΜΑΘΗΜΑ</h3>
          </div>
          <p>Το βράδυ, τα παιδιά κάθισαν στο πάτωμα. Ο Pencilo σχεδίαζε. Η Link κωδικοποιούσε. Ο Crocus κοιμόταν (ένα σπάνιο φαινόμενο). Η Αλεξάνδρα και η Ελευθερία έγραφαν στο σημειωματάριό τους.</p>
          <p class="mt-3">Ο Φίλιππος πήρε ένα μαρκαδόρο. Γράφτηκε στον τοίχο — ψηλά, εκεί που κανείς δεν θα μπορούσε να το σβήσει:</p>

          <div class="my-6 bg-gradient-to-r from-pink-900/40 to-rose-900/40 p-8 rounded-2xl border border-pink-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">«Όποιος αντιγράφει, κοιτάει πίσω.<br/><span class="text-pink-300">Όποιος δημιουργεί, κοιτάει μπροστά.»</span></p>
          </div>

          <p class="mt-3">Ο Pencilo χαμογέλασε. Ήταν ένα αληθινό χαμόγελο — μικρό, αλλά πραγματικό. Τα χρώματά του ήταν πιο φωτεινά από ποτέ.</p>
          <p class="mt-3">Η Link ακούμπησε δίπλα του. Μεταλλικός ώμος δίπλα σε χάρτινο χέρι. Τεχνολογία δίπλα σε τέχνη. Διαφορετικοί — αλλά <em>μαζί</em>.</p>
          <p class="mt-3">Ο Crocus άνοιξε το ένα μάτι. «ΟΚ... αυτό μου άρεσε.» Και ξαναέκλεισε το μάτι. Αλλά κάτω από τη γούνα του, ίσως, <em>ίσως</em>, χαμογέλασε κι αυτός.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Κάποια μαθήματα δεν γράφονται σε βιβλία. Γράφονται σε τοίχους, σε καρδιές, και σε κομμάτια χαρτιού που κανείς δεν θα αντιγράψει ποτέ — γιατί αυτά τα κομμάτια δεν είναι σχέδια. Είναι ψυχή.</p>

          <!-- ΕΙΚΟΝΑ: KIDS TOGETHER -->
          <div class="mt-6 rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl shadow-amber-900/20">
            <img src="${IMG_KIDS_WITH_LINK}" alt="Τα παιδιά μαζί με τη Link — πιο δυνατοί" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-amber-300/80 italic">Link, Pencilo και τα παιδιά — μαζί πιο δυνατοί από κάθε αντιγραφή</div>
          </div>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-pink-950/60 p-8 rounded-3xl border-2 border-dashed border-pink-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-pink-300 uppercase tracking-wider">JOURNAL: ΜΑΣ ΑΝΤΙΓΡΑΦΟΥΝ</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Γράψε. Σκέψου. Νιώσε. Δεν υπάρχει λάθος απάντηση.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-pink-500/15">
              <h5 class="text-pink-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-pink-600/40 flex items-center justify-center text-xs font-black">1</span>
                ΤΟ ΣΥΝΑΙΣΘΗΜΑ
              </h5>
              <p class="text-sm mb-3 opacity-80">Γράψε τι ένιωσες όταν κάποιος πήρε κάτι δικό σου — μια ιδέα, ένα σχέδιο, μια δημιουργία:</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-pink-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-pink-500/15">
              <h5 class="text-pink-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-pink-600/40 flex items-center justify-center text-xs font-black">2</span>
                Η ΑΝΤΙΔΡΑΣΗ
              </h5>
              <p class="text-sm mb-3 opacity-80">Τι θα έκανες παλιά αν σε αντέγραφαν; Θυμός; Παραίτηση; Κλάμα; Εκδίκηση;</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-pink-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-pink-500/15">
              <h5 class="text-pink-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-pink-600/40 flex items-center justify-center text-xs font-black">3</span>
                Η ΕΠΙΛΟΓΗ
              </h5>
              <p class="text-sm mb-3 opacity-80">Συμπλήρωσε την πρόταση:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-pink-500/10 text-pink-200">
                <p class="text-sm font-medium">«Διαλέγω να __________ αντί να __________»</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΝΟΗΜΑ / MEANING BOX -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-r from-pink-900/30 to-rose-900/30 p-6 rounded-2xl border border-pink-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-pink-300 uppercase tracking-wider">Το νόημα αυτού του κεφαλαίου</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            Η αντιγραφή δεν είναι το τέλος. Είναι <strong class="text-pink-300">απόδειξη</strong>. Απόδειξη ότι αυτό που έφτιαξες αξίζει. Η αξία σου δεν χάνεται — <strong class="text-rose-300">αποκαλύπτεται</strong>. Ο δημιουργός που εξελίσσεται δεν κοιτάει ποιος τον αντιγράφει. Κοιτάει τι θα φτιάξει αύριο.
          </p>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-pink-950/60 p-8 rounded-3xl border border-pink-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-pink-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              Όταν ένα παιδί ανακαλύπτει ότι κάποιος <strong class="text-white">αντέγραψε τη δουλειά του</strong>, νιώθει αδικία, θυμό, και μερικές φορές <em>αμφιβολία για τον εαυτό του</em>.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Η Link και ο Pencilo μας δείχνουν δύο αντιδράσεις: τον πόνο και τη λογική. Και οι δύο είναι <strong class="text-pink-300">έγκυρες</strong>. Αυτό που μετράει είναι τι κάνεις <em>μετά</em>.
            </p>
            <div class="mt-4 bg-pink-900/20 p-4 rounded-xl border border-pink-500/10">
              <p class="text-sm text-pink-200 font-medium">💡 Δοκιμάστε σήμερα:</p>
              <ul class="text-sm text-gray-400 space-y-1 mt-2">
                <li>- Επικυρώστε το συναίσθημα: «Καταλαβαίνω ότι πονάει»</li>
                <li>- Μετατρέψτε τον θυμό σε κίνητρο: «Τι μπορείς να κάνεις καλύτερα;»</li>
                <li>- Πείτε: «Αυτοί κοιτάνε εσένα. Εσύ κοίτα μπροστά»</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- INTRO QUOTE -->
        <div class="relative bg-gradient-to-r from-pink-900/80 via-rose-900/60 to-fuchsia-900/40 p-10 rounded-2xl border border-pink-500/30 text-center shadow-lg shadow-pink-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Chapter 8</div>
          <p class="italic text-pink-200 text-xl mt-4 leading-relaxed">"He who copies looks back.<br/>He who creates looks forward."</p>
          <div class="mt-4 w-16 h-0.5 bg-pink-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- SCENE 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-pink-600/30 border border-pink-500/30 text-pink-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-pink-300 tracking-wide">SOMETHING LOOKS VERY FAMILIAR</h3>
          </div>
          <p>Philippos burst into the room running. His eyes were wide open, as if he had seen a ghost. His face was red, his hands were shaking, and his breath came in sharp bursts, as if after a sprint.</p>
          <p class="mt-3 text-xl"><strong class="text-white">"COME AND SEE!"</strong></p>
          <p class="mt-3">Alexandra lifted her head slowly. She had been lying face-down on pillows, designing new levels for their game. Eleftheria was in the corner with three notebooks open before her, writing notes for the next update.</p>
          <p class="mt-3">They approached the screen. Philippos had opened a website. A game. With characters, colours, mechanics. <em>Familiar.</em> Very familiar.</p>
          <p class="mt-4">Alexandra felt a strange sting in her stomach. Like recognizing yourself in a mirror that someone else is holding.</p>
          <p class="mt-3">— "But... this is like ours," she said quietly.</p>
          <p class="mt-3 text-white font-medium">— "Not <em>like</em>," said Philippos. His voice was hard. Glass-like. Like a knife being sharpened. <strong class="text-pink-300">"IT IS."</strong></p>
          <p class="mt-3">The silence that followed was heavy. Like a stone falling into water and never reaching the surface. The three children stared at the screen without speaking. Every pixel was a theft. Every line of code, a betrayal.</p>
          <p class="mt-3 text-gray-400 text-sm italic">There is a pain that has no body. It doesn't hit, doesn't bleed, doesn't leave marks. But it tears you apart from the inside. And that pain is called: "Someone took what I made."</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-pink-500/15 shadow-lg shadow-pink-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="The children in front of the screen" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-pink-300/80 italic">The moment they discovered someone had copied their work</div>
          </div>
        </section>

        <!-- SCENE 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-red-400 tracking-wide">THE ANGER</h3>
          </div>
          <p>Philippos stood up. His entire body was taut like a guitar string about to snap. His hands were fists. His eyes were flames.</p>
          <p class="mt-3 text-xl"><strong class="text-red-300">"THEY STOLE FROM US!"</strong></p>
          <p class="mt-3">His voice echoed through the room like thunder. "Let's write to them! Take it down! Expose them!" He paced back and forth, like a lion in a cage. Every step was a strike against the floor.</p>
          <p class="mt-3">Crocus wagged his tail excitedly. <strong class="text-green-400">"Finally, something logical,"</strong> he said with a wicked grin. "Let's go to war. I'm ready."</p>
          <p class="mt-3">Alexandra felt a knot in her throat. As if something was choking her. It wasn't anger — it was something worse. <em>Disappointment.</em> The feeling that everything you did means nothing, because someone can take it with a copy-paste.</p>
          <p class="mt-3">Eleftheria clutched her notebook to her chest. As if it were a shield. As if she was protecting the ideas inside it. Her lips trembled, but she didn't speak. <em>Not yet.</em></p>
          <p class="mt-3 text-gray-400 text-sm italic">Anger is the first guard of every wounded heart. It steps in front to hide what truly hurts: the fear that you are not unique.</p>
        </section>

        <!-- SCENE 3 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-fuchsia-600/30 border border-fuchsia-500/30 text-fuchsia-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-fuchsia-300 tracking-wide">PENCILO FREEZES</h3>
          </div>
          <p>Pencilo appeared slowly. Slower than ever. As if dragging through thick fog. The colourful markers that usually sparkled on him were dimmed. Grey.</p>
          <p class="mt-3">He held drawings. Many drawings. The same drawings he had made for their game. Every line drawn with love. Every curve thought through. Every colour chosen with care.</p>
          <p class="mt-3">— "I can't take it," he said. His voice was broken. Like a pencil snapping in half.</p>
          <p class="mt-3">"Every line of mine... is <em>there</em>." He held up a drawing. The exact same one existed in the copied game. Colour for colour. Shape for shape.</p>
          <p class="mt-3">His eyes glistened. Drops of light trembled at the edges, like tears of ink.</p>
          <p class="mt-4"><strong class="text-white">"If they copy us, then what was the point of all this?"</strong></p>
          <p class="mt-3">The question hung in the air like a cloud heavy with rain. No one answered immediately. Because the question wasn't just about drawings. It was about <em>value</em>. It was about <em>identity</em>. It was about <em>meaning</em>.</p>
          <p class="mt-3">Alexandra approached. She gently touched his shoulder. "There was a point. It just... hurts."</p>
          <p class="mt-3 text-gray-400 text-sm italic">The creator's pain is not vanity. It is the wound of someone who put a piece of their soul into something, and someone else treated it like an object.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-fuchsia-500/15 shadow-lg shadow-fuchsia-900/20">
            <img src="${IMG_KIDS_WITH_PENCILO}" alt="The children with Pencilo" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-fuchsia-300/80 italic">Pencilo holding his drawings — every line a memory, every colour a piece of soul</div>
          </div>
        </section>

        <!-- SCENE 4 — LINK LAUGHS -->
        <section class="bg-gradient-to-br from-pink-900/30 via-rose-900/20 to-fuchsia-900/10 p-8 rounded-2xl border-l-4 border-pink-500 my-8 shadow-xl shadow-pink-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/30 text-blue-300 font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-blue-300 tracking-wide">LINK LAUGHS</h3>
          </div>
          <p>Suddenly, a <em>beeeeep</em> was heard. High-pitched, metallic, electric. As if a universe was waking up.</p>
          <p class="mt-3">Link appeared in a flash of digital light. Wires, circuits, speed. Her eyes — two blue LEDs — scanned the room in fractions of a second. Analysis. Data. Conclusion.</p>
          <p class="mt-3">She looked at their faces. Philippos's anger. Pencilo's tears. Alexandra's panic. Eleftheria's silence.</p>
          <p class="mt-4">— "OK. Panic mode. <em>Great.</em>"</p>
          <p class="mt-3">And then... she <strong class="text-blue-300">laughed.</strong></p>
          <p class="mt-3">Not loudly. But a laugh so sincere, so sudden, that Philippos stopped mid-step. As if he had hit an invisible brake.</p>
          <p class="mt-3">"What are you saying now?" asked Philippos fiercely. His eyes widened.</p>

          <!-- IMAGE: KIDS + LINK -->
          <div class="my-8 rounded-2xl overflow-hidden border border-blue-500/20 shadow-2xl shadow-blue-900/30">
            <img src="${IMG_KIDS_WITH_LINK}" alt="The children meet Link" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-blue-300/80 italic">Link appeared with digital light — and an unexpected smile</div>
          </div>

          <p class="mt-4 text-white font-bold text-lg">"I'm saying that if they copied you... they saw something that <em>works</em>."</p>
          <p class="mt-3">The words fell like drops on a hot surface. Sizzle. Steam. Silence.</p>
          <p class="mt-3">Pencilo turned abruptly. "It's not a game! It's an <em>idea</em>! Something that came from inside us!"</p>
          <p class="mt-3">Link didn't stop smiling. Her LED eyes blinked calmly.</p>
          <p class="mt-4 text-blue-300 font-bold text-xl">— "And ideas are not protected by crying. They <em>move forward.</em>"</p>
          <p class="mt-3 text-gray-400 text-sm italic">Link wasn't cruel. She was clear. And sometimes, the clear truth hurts more than a lie — but it heals faster.</p>
        </section>

        <!-- SCENE 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/30 text-purple-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-purple-400 tracking-wide">THE CONFLICT</h3>
          </div>
          <p>Pencilo turned to Link. His eyes were red. His voice broken but strong.</p>
          <p class="mt-3">"You see everything as buttons and code! As numbers on a screen! You don't understand what it means to <em>create</em> something!"</p>
          <p class="mt-3">Link froze. Her LED eyes flickered. A spark — like static electricity — passed through her wires.</p>
          <p class="mt-3">"And you see everything as designs that never end!" Link replied. "You draw and redraw, but you never <em>ship</em>!"</p>
          <p class="mt-3">The tension filled the room like electricity before a storm. The air grew heavy. The shadows grew longer.</p>
          <p class="mt-3">Crocus got ready. His tail rose like a battle flag. "Shall we strike?" he asked hopefully.</p>
          <p class="mt-3">The children watched Pencilo and Link as if they were witnessing a collision of stars. Two worlds — art and technology — on a collision course.</p>

          <div class="my-6 bg-gradient-to-r from-purple-900/40 to-pink-900/40 p-8 rounded-2xl border border-purple-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">"STOP."</p>
            <p class="mt-2 text-purple-300">WiseBot appeared.</p>
          </div>

          <p class="mt-3">Her voice was like snowfall on fire. She didn't shout. She didn't threaten. She simply <em>was there</em>. And her presence was enough to stop everything.</p>
          <p class="mt-3 text-gray-400 text-sm italic">True strength doesn't shout. Doesn't hit. Doesn't push. It simply enters the room — and the walls change colour.</p>
        </section>

        <!-- SCENE 6 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-pink-600/30 border border-pink-500/30 text-pink-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-white tracking-wide">THE TRUTH THAT HURTS</h3>
          </div>
          <p>WiseBot sat down slowly. Her purple crystal-eyes pulsed calmly, like a heart beating in slow rhythm. She looked at every face. Every wound. Every fear.</p>
          <p class="mt-3">"Copying hurts," she said. Her voice was like water running over stones — calm, but deep.</p>
          <p class="mt-3">"It hurts because you created something real. Something alive. Something that came from inside you. And someone took it without asking."</p>
          <p class="mt-3">Pencilo lowered his head. Philippos stopped pacing.</p>
          <p class="mt-4">"But copying doesn't stop the creator." Her eyes glowed brighter. Pink light filled the corners of the room.</p>
          <p class="mt-3 text-pink-300 font-bold text-xl">"It <em>reveals</em> them."</p>
          <p class="mt-4">Eleftheria slowly raised her head. For the first time in an hour, she spoke. "Meaning... we didn't lose?"</p>
          <p class="mt-3">— "No," said WiseBot. "You just entered the <strong class="text-pink-200">next level</strong>."</p>
          <p class="mt-3">High above their heads, Sparken appeared. A golden glow. A small but untamable fire.</p>
          <p class="mt-3 text-amber-300 font-medium">"Now it shows who <em>evolves</em>."</p>
          <p class="mt-3 text-gray-400 text-sm italic">Copying is the creator's scarecrow. It frightens — but if you look closely, you'll see it has no body. It cannot hold you. Only you can stop yourself.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-pink-500/15 shadow-lg shadow-pink-900/20">
            <img src="${IMG_PENCILO}" alt="Pencilo" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-pink-300/80 italic">Pencilo — the artist who learns that value cannot be stolen</div>
          </div>
        </section>

        <!-- SCENE 7 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-rose-600/30 border border-rose-500/30 text-rose-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-rose-300 tracking-wide">THE DECISION</h3>
          </div>
          <p>Minutes passed. Perhaps five. Perhaps ten. No one counted. Each one looked inward, to a place they rarely dared visit.</p>
          <p class="mt-3">Philippos took a deep breath. Slow. Deliberate. As if drawing courage from the air.</p>
          <p class="mt-3 text-rose-200 font-medium">"We won't look like them. We'll go further ahead."</p>
          <p class="mt-3">Pencilo looked at his hands. The hands that drew. The hands that created. Slowly, his colours began to return. First pink. Then yellow. Then blue.</p>
          <p class="mt-3">He opened a new sheet of paper. White. Clean. Full of possibilities.</p>
          <p class="mt-3 text-rose-200 font-medium">"I'll make it <em>better</em>."</p>
          <p class="mt-3">Link smiled. Her LED eyes formed two half-circles — the digital equivalent of joy.</p>
          <p class="mt-3 text-rose-200 font-medium">"And <em>smarter</em>."</p>

          <div class="mt-6 bg-gradient-to-r from-rose-900/30 to-pink-900/20 p-6 rounded-xl border border-rose-500/20">
            <p class="text-white text-lg">Pencilo looked at Link. Link looked at Pencilo. And for the first time, they didn't see a rival. They saw an <em>ally</em>.</p>
            <p class="mt-3 text-rose-300 font-bold text-xl">For the first time... <em>together</em>.</p>
          </div>

          <p class="mt-4 text-gray-400 text-sm italic">The real answer to copying is not war. Not revenge. Not tears. It is the <strong class="text-rose-400">steps forward</strong> — and the strength to take them alongside those who started beside you.</p>
        </section>

        <!-- SCENE 8 — THE LESSON -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/30 text-amber-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-amber-400 tracking-wide">THE LESSON</h3>
          </div>
          <p>That evening, the children sat on the floor. Pencilo was drawing. Link was coding. Crocus was sleeping (a rare phenomenon). Alexandra and Eleftheria were writing in their notebook.</p>
          <p class="mt-3">Philippos picked up a marker. He wrote on the wall — up high, where no one could erase it:</p>

          <div class="my-6 bg-gradient-to-r from-pink-900/40 to-rose-900/40 p-8 rounded-2xl border border-pink-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">"He who copies looks back.<br/><span class="text-pink-300">He who creates looks forward."</span></p>
          </div>

          <p class="mt-3">Pencilo smiled. It was a real smile — small, but genuine. His colours were brighter than ever.</p>
          <p class="mt-3">Link leaned next to him. Metal shoulder next to paper hand. Technology next to art. Different — but <em>together</em>.</p>
          <p class="mt-3">Crocus opened one eye. "OK... I liked that." And he closed his eye again. But beneath his fur, perhaps, <em>perhaps</em>, he smiled too.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Some lessons are not written in books. They are written on walls, in hearts, and on scraps of paper that no one will ever copy — because those scraps are not designs. They are soul.</p>

          <!-- IMAGE: KIDS + LINK -->
          <div class="mt-6 rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl shadow-amber-900/20">
            <img src="${IMG_KIDS_WITH_LINK}" alt="The children together with Link — stronger" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-amber-300/80 italic">Link, Pencilo and the kids — stronger together than any copy</div>
          </div>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-pink-950/60 p-8 rounded-3xl border-2 border-dashed border-pink-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-pink-300 uppercase tracking-wider">JOURNAL: THEY ARE COPYING US</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Write. Think. Feel. There is no wrong answer.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-pink-500/15">
              <h5 class="text-pink-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-pink-600/40 flex items-center justify-center text-xs font-black">1</span>
                THE FEELING
              </h5>
              <p class="text-sm mb-3 opacity-80">Write what you felt when someone took something of yours — an idea, a drawing, a creation:</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-pink-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-pink-500/15">
              <h5 class="text-pink-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-pink-600/40 flex items-center justify-center text-xs font-black">2</span>
                THE REACTION
              </h5>
              <p class="text-sm mb-3 opacity-80">What would you have done before if someone copied you? Anger? Giving up? Crying? Revenge?</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-pink-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-pink-500/15">
              <h5 class="text-pink-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-pink-600/40 flex items-center justify-center text-xs font-black">3</span>
                THE CHOICE
              </h5>
              <p class="text-sm mb-3 opacity-80">Complete the sentence:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-pink-500/10 text-pink-200">
                <p class="text-sm font-medium">"I choose to __________ instead of __________"</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- MEANING BOX -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-r from-pink-900/30 to-rose-900/30 p-6 rounded-2xl border border-pink-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-pink-300 uppercase tracking-wider">The Meaning of This Chapter</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            Copying is not the end. It is <strong class="text-pink-300">proof</strong>. Proof that what you built is worth something. Your value is not lost — it is <strong class="text-rose-300">revealed</strong>. The creator who evolves doesn't look at who is copying them. They look at what they will build tomorrow.
          </p>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- MESSAGE FOR PARENTS -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-pink-950/60 p-8 rounded-3xl border border-pink-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-pink-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              When a child discovers that someone <strong class="text-white">copied their work</strong>, they feel injustice, anger, and sometimes <em>self-doubt</em>.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Link and Pencilo show us two reactions: pain and logic. Both are <strong class="text-pink-300">valid</strong>. What matters is what you do <em>after</em>.
            </p>
            <div class="mt-4 bg-pink-900/20 p-4 rounded-xl border border-pink-500/10">
              <p class="text-sm text-pink-200 font-medium">💡 Try today:</p>
              <ul class="text-sm text-gray-400 space-y-1 mt-2">
                <li>- Validate the feeling: "I understand it hurts"</li>
                <li>- Turn anger into motivation: "What can you do better?"</li>
                <li>- Say: "They're looking at you. You look forward"</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    `
    }
  }
];
