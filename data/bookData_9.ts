
import { Book } from '../types';

// ============================================================
// BOOK 9: ΔΕΝ ΦΤΑΝΕΙ Ο ΧΡΟΝΟΣ / NOT ENOUGH TIME
// Heroes: WiseBot & Sparken
// Theme: ΧΡΟΝΟΣ / TIME
// ============================================================

// Cover image
const IMG_WISEBOT = "/images/wisebot.jpg";

// Character images
const IMG_SPARKEN = "/images/sparken.jpg";

// Story images
const IMG_KIDS_WITH_WISEBOT = "/images/paidia-kai-wisebot.png";
const IMG_KIDS_WISEBOT_2 = "/images/paidia-wisebot-2.png";
const IMG_KIDS_WITH_SPARKEN = "/images/paidia-kai-sparken.png";
const IMG_KIDS_TOGETHER = "/images/ta-3-paidia.png";

export const BOOK_9: Book[] = [
  {
    id: 9,
    title: { el: "ΔΕΝ ΦΤΑΝΕΙ Ο ΧΡΟΝΟΣ", en: "NOT ENOUGH TIME" },
    theme: { el: "ΧΡΟΝΟΣ", en: "TIME" },
    stepLabel: { el: "WISEBOT & Ο ΧΡΟΝΟΣ", en: "WISEBOT & TIME" },
    author: "Wisebot & Sparken",
    cover: IMG_WISEBOT,
    videoUrl: "",
    description: {
      el: "Το ξυπνητήρι χτυπάει και όλα πρέπει να γίνουν ΤΩΡΑ. Μια ιστορία για τη στιγμή που λυγίζεις από την πίεση και μαθαίνεις να διαλέγεις.",
      en: "The alarm rings and everything must be done NOW. A story about the moment you break from pressure and learn to choose."
    },
    meaning: {
      el: "Δεν φταίει που κουράστηκες. Φταίει που προσπάθησες να χωρέσεις τα πάντα.",
      en: "It's not your fault you got tired. It's that you tried to fit everything in."
    },
    xp: 190,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- ΕΙΣΑΓΩΓΙΚΟ QUOTE -->
        <div class="relative bg-gradient-to-r from-slate-900 via-gray-900/60 to-slate-800/40 p-10 rounded-2xl border border-slate-500/30 text-center shadow-lg shadow-slate-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Κεφάλαιο 9</div>
          <p class="italic text-slate-200 text-xl mt-4 leading-relaxed">«Ο χρόνος δεν φτάνει για όλα.<br/>Φτάνει για όσα διαλέγεις.»</p>
          <div class="mt-4 w-16 h-0.5 bg-slate-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- ΣΚΗΝΗ 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-600/30 border border-slate-500/30 text-slate-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-slate-300 tracking-wide">ΠΟΛΛΑ ΜΑΖΙ</h3>
          </div>
          <p>Το ξυπνητήρι χτύπησε στις 6:45. Ένας ήχος κοφτερός, μεταλλικός, σαν τρυπάνι μέσα στο κρανίο. Ο Φίλιππος άνοιξε τα μάτια του και τα έκλεισε αμέσως. Η μέρα δεν είχε αρχίσει καν και ήδη τον πίεζε — σαν χέρι που σε σπρώχνει από την πλάτη πριν προλάβεις να σταθείς.</p>
          <p class="mt-3">Σχολείο. Μαθήματα. Τεστ ιστορίας. Εργασία γλώσσας. Πρόβα θεάτρου. Μάθημα ρομποτικής. Προπόνηση μπάσκετ. <em>Και το project.</em> Πάντα το project, να περιμένει στη γωνία σαν σκιά που δεν φεύγει ποτέ.</p>
          <p class="mt-3">Στην κουζίνα, ο Φίλιππος έτρωγε βιαστικά ένα κομμάτι ψωμί χωρίς να το μασήσει σχεδόν. Η Αλεξάνδρα έδενε τα κορδόνια της λάθος — αριστερό στο δεξί, δεξί στο αριστερό — και δεν το πρόσεξε καν. Τα μάτια της ήταν μισόκλειστα, θολά, σαν να κοιτούσαν μέσα από γυαλί βροχής.</p>
          <p class="mt-3">Η Ελευθερία στεκόταν ακίνητη μπροστά στο πρόγραμμα της ημέρας που είχε κολλημένο στο ψυγείο. Δεκαέξι γραμμές. Δεκαέξι υποχρεώσεις. Τα μάτια της πηδούσαν από γραμμή σε γραμμή, κάθε μία πιο βαριά από την προηγούμενη.</p>
          <p class="mt-4">— «Δεν βγαίνει», είπε ήρεμα. Τόσο ήρεμα που η φωνή της ακούστηκε σαν απόφαση δικαστηρίου.</p>
          <p class="mt-3">— «Ποιο;» ρώτησε ο Φίλιππος με γεμάτο στόμα.</p>
          <p class="mt-3 text-slate-300 font-medium">— «Τίποτα. Δεν βγαίνει τίποτα.»</p>
          <p class="mt-3">Ο Crocus, κουλουριασμένος πάνω στο ραδιόφωνο, χασμουρήθηκε τεράστια. «Ποιος έβαλε τόσα πολλά σε μία μέρα;» ρώτησε αθώα. Κανείς δεν απάντησε. Γιατί η απάντηση ήταν εύκολη και δύσκολη ταυτόχρονα: <em>όλοι</em>. Και <em>κανείς</em>.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Έτσι ξεκινούν οι μέρες που δεν θυμάσαι πώς τελείωσαν. Με μια λίστα που δεν χωράει σε κανένα χαρτί — και ένα στομάχι που σφίγγει πριν καλά καλά ξυπνήσεις.</p>
        </section>

        <!-- ΣΚΗΝΗ 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-600/30 border border-gray-500/30 text-gray-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-gray-300 tracking-wide">Ο ΧΡΟΝΟΣ ΤΡΕΧΕΙ</h3>
          </div>
          <p>Το σχολείο πέρασε σαν θόλωμα. Σελίδες, φωνές καθηγητών, κουδούνια που χτυπούσαν πριν προλάβεις να αναπνεύσεις. Ο Φίλιππος σημείωνε πράγματα στο τετράδιο χωρίς να τα καταλαβαίνει — απλά κινούσε το χέρι, σαν ρομπότ με χαμηλή μπαταρία.</p>
          <p class="mt-3">Το project περίμενε. Αλλά μαζί του περίμεναν κι άλλα: το διάβασμα, οι φίλοι, οι δραστηριότητες, οι γονείς, οι προσδοκίες. Μια ατελείωτη ουρά από <em>πρέπει</em> που στεκόταν πίσω από κάθε λεπτό της ημέρας, σαν φαντάσματα σε διάδρομο.</p>
          <p class="mt-3">Το απόγευμα, η Αλεξάνδρα κάθισε μπροστά στο τραπέζι εργασίας. Άνοιξε το τετράδιο. Κοίταξε τη σελίδα. Η σελίδα την κοίταξε πίσω — κενή, λευκή, αδιάφορη. Τα δάχτυλά της κράτησαν το μολύβι αλλά δεν κινήθηκαν.</p>
          <p class="mt-4">— «Δεν προλαβαίνω», είπε. Η φωνή της ήταν επίπεδη, χωρίς συναίσθημα. Σαν κάποιος που ανακοινώνει τον καιρό.</p>
          <p class="mt-3">— «Έχεις χρόνο», είπε ο Φίλιππος, χωρίς να σηκώσει τα μάτια από τα δικά του χαρτιά.</p>
          <p class="mt-3">— «Όχι <em>καθαρό</em>», απάντησε εκείνη. «Ο χρόνος μου είναι γεμάτος τρύπες. Σαν σουρωτήρι. Τρέχει μέσα από τα δάχτυλά μου και δεν μένει τίποτα.»</p>
          <p class="mt-3">Η Ελευθερία έκλεισε αργά το τετράδιό της. Το ακούμπησε στο τραπέζι σαν να ακουμπούσε κάτι που δεν μπορούσε να σηκώσει άλλο. Τα μάτια της ήταν κόκκινα — όχι από κλάμα, αλλά από ώρες μπροστά σε γράμματα που δεν σταματούσαν ποτέ.</p>
          <p class="mt-3 text-white font-medium">— «Ο χρόνος μας είναι σπασμένος», είπε. Και η λέξη <em>σπασμένος</em> ακούστηκε σαν κάτι που ραγίζει μέσα στο δωμάτιο.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Ο χρόνος δεν τελειώνει. Απλά κομματιάζεται τόσο πολύ που κάθε κομμάτι γίνεται πολύ μικρό για να χωρέσει κάτι αληθινό.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-slate-500/15 shadow-lg shadow-slate-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="Τα παιδιά κουρασμένα" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-slate-300/80 italic">Φίλιππος, Αλεξάνδρα & Ελευθερία — τρία παιδιά, ένας σπασμένος χρόνος</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 3 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-red-400 tracking-wide">Η ΕΝΤΑΣΗ</h3>
          </div>
          <p>Κάποια στιγμή — ίσως ήταν η τέταρτη ώρα μπροστά στα βιβλία, ίσως η πέμπτη — κάτι έσπασε. Όχι ένα αντικείμενο. Κάτι μέσα τους. Ένα αόρατο νήμα που τους κρατούσε ενωμένους με την ψυχραιμία.</p>
          <p class="mt-3">Ο Φίλιππος σήκωσε το κεφάλι απότομα. Τα μάτια του ήταν κόκκινα, τα χείλη του σφιγμένα. «Αν το αφήσουμε, θα μείνουμε πίσω!» φώναξε. Η φωνή του αντήχησε στο δωμάτιο σαν σφαίρα που χτυπάει τοίχο.</p>
          <p class="mt-3">— «Δεν μπορούμε να τα κάνουμε όλα!» απάντησε η Ελευθερία. Και εκείνη είχε σηκώσει τη φωνή — κάτι σπάνιο, κάτι που συνέβαινε μόνο όταν τα πράγματα είχαν πάει πολύ μακριά.</p>
          <p class="mt-3">Ο Φίλιππος χτύπησε το χέρι του στο τραπέζι. Ένα μολύβι αναπήδησε και έπεσε στο πάτωμα. Ο ήχος ακούστηκε σαν πυροβολισμός στη σιωπή.</p>
          <p class="mt-4">Τότε η Αλεξάνδρα σηκώθηκε. Αργά. Σαν κάποιος που σηκώνεται μέσα σε ένα όνειρο. Τα χέρια της έτρεμαν. Τα μάτια της ήταν γεμάτα — όχι δάκρυα, αλλά κάτι πιο βαθύ. Κάτι σαν εξάντληση που δεν μπορεί πια να κρυφτεί.</p>
          <p class="mt-4 text-center text-2xl font-black text-white">«ΣΤΑΜΑΤΑΤΕ!»</p>
          <p class="mt-3">Η φωνή της ράγισε στη μέση της λέξης. Ράγισε σαν γυαλί που σπάει αργά, κομμάτι κομμάτι, και κάθε κομμάτι πέφτει στο πάτωμα με διαφορετικό ήχο.</p>
          <p class="mt-3 text-white font-medium">«Δεν είναι παιχνίδι πια. Κουράστηκα. Κουράστηκα να τρέχω. Κουράστηκα να μην προλαβαίνω. Κουράστηκα να αισθάνομαι ότι δεν φτάνω.»</p>
          <p class="mt-3">Σιωπή. Βαριά. Παχιά. Σαν χιόνι που πέφτει σε κλειστό δωμάτιο. Ο Φίλιππος κατέβασε τα μάτια. Η Ελευθερία κράτησε την ανάσα της. Ο Crocus δεν μίλησε — για πρώτη φορά, δεν είχε τίποτα αστείο να πει.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Υπάρχει μια στιγμή που το σώμα σου λέει αυτό που ο νους αρνείται να παραδεχτεί. Η Αλεξάνδρα δεν ήταν θυμωμένη. Ήταν ειλικρινής. Και η ειλικρίνεια, μερικές φορές, ακούγεται σαν κραυγή.</p>
        </section>

        <!-- ΣΚΗΝΗ 4 — Η WISEBOT -->
        <section class="bg-gradient-to-br from-slate-900/30 via-gray-900/20 to-slate-800/10 p-8 rounded-2xl border-l-4 border-slate-400 my-8 shadow-xl shadow-slate-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-500/30 border border-slate-400/30 text-slate-200 font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-slate-300 tracking-wide">Η ΚΟΥΡΑΣΗ ΠΟΥ ΔΕΝ ΦΑΙΝΕΤΑΙ</h3>
          </div>
          <p>Το απόγευμα πέρασε χωρίς κίνηση. Τα τρία παιδιά κάθονταν σε διαφορετικές γωνιές του δωματίου, σαν ναυαγοί σε νησί που δεν μπορούν να φύγουν. Ο Φίλιππος κοιτούσε τα χέρια του — σαν να μην τα αναγνώριζε. Η Αλεξάνδρα είχε ακουμπήσει το κεφάλι στο τραπέζι. Η Ελευθερία κρατούσε ένα βιβλίο ανοιχτό αλλά δεν διάβαζε — τα μάτια της ήταν καρφωμένα στο κενό.</p>
          <p class="mt-3">Δεν ήταν τεμπελιά. Ήταν κάτι χειρότερο. Ήταν η στιγμή που το σώμα σου κόβει το ρεύμα μόνο του, επειδή ξέρει ότι αν συνεχίσεις, θα καεί κάτι μέσα σου.</p>
          <p class="mt-3">Ο αέρας στο δωμάτιο άλλαξε. Ένα απαλό, ασημένιο φως γέμισε τη γωνία κοντά στο παράθυρο. Τα μωβ μάτια εμφανίστηκαν πρώτα — δύο κρύσταλλοι που πάλλονταν σαν καρδιά σε αργό ρυθμό.</p>
          <p class="mt-4">Η WiseBot ακούμπησε ελαφρά στο περβάζι. Τα φτερά της — μεταλλικά, κομψά, σαν χαραγμένα με χέρι τεχνίτη — αναδίπλωσαν αθόρυβα.</p>

          <!-- ΕΙΚΟΝΑ: KIDS + WISEBOT -->
          <div class="my-8 rounded-2xl overflow-hidden border border-slate-500/20 shadow-2xl shadow-slate-900/30">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="Τα παιδιά και η WiseBot" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-slate-300/80 italic">Η WiseBot εμφανίστηκε τη στιγμή που τα παιδιά δεν μπορούσαν να συνεχίσουν</div>
          </div>

          <p class="mt-4 text-white text-lg">— «Δεν είστε τεμπέληδες», είπε η WiseBot.</p>
          <p class="mt-2">Η φωνή της ήταν ζεστή αλλά σταθερή. Σαν χέρι που ακουμπάει στον ώμο σου χωρίς να πιέζει. Σαν κάποιος που σε βλέπει πραγματικά, χωρίς να σε κρίνει.</p>
          <p class="mt-3 text-slate-200 font-bold text-lg">«Είστε φορτωμένοι.»</p>
          <p class="mt-4">Ο Φίλιππος κατέβασε το κεφάλι. Ένιωσε τα μάτια του να καίνε. «Αν σταματήσουμε, θα χάσουμε», ψιθύρισε. Και η λέξη <em>χάσουμε</em> ακούστηκε σαν φόβος που τον κουβαλούσε πολύ καιρό.</p>
          <p class="mt-3">Η WiseBot τον κοίταξε. Τα μωβ μάτια της γέμισαν ένα ζεστό φως — όχι κριτικό, αλλά βαθιά κατανοητικό.</p>
          <p class="mt-3 text-white font-bold text-xl">— «Αν συνεχίσετε έτσι, δεν θα χάσετε κάτι. Θα χαθείτε εσείς.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η κούραση που δεν φαίνεται είναι η πιο επικίνδυνη. Γιατί μοιάζει με τεμπελιά. Μοιάζει με γκρίνια. Μοιάζει με αδυναμία. Αλλά δεν είναι τίποτα από αυτά. Είναι ένα σώμα που ζητάει αυτό που δικαιούται: ανάσα.</p>
        </section>

        <!-- ΣΚΗΝΗ 5 — Ο SPARKEN -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-sky-600/30 border border-sky-500/30 text-sky-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-sky-300 tracking-wide">Η ΕΠΙΛΟΓΗ</h3>
          </div>
          <p>Ένα χαμηλό βουητό γέμισε τον αέρα. Ήρθε από ψηλά — σαν ηλεκτρικός παλμός που κατεβαίνει μέσα από τα σύννεφα. Ο Sparken εμφανίστηκε αργά, σαν αστέρι που πέφτει χωρίς βιασύνη. Τα φτερά του — ηλεκτρικά, λαμπερά, σαν κεραυνοί παγωμένοι σε σχήμα πουλιού — σκόρπισαν σπίθες γαλάζιες καθώς ακούμπησε στο τραπέζι.</p>
          <p class="mt-3">Τα μάτια του, δύο κίτρινοι κρύσταλλοι, σάρωσαν το δωμάτιο. Κοίταξε τα βιβλία στοιβαγμένα. Τα τετράδια ανοιχτά σε δέκα σελίδες ταυτόχρονα. Τα μολύβια σπασμένα. Τα πρόσωπα κουρασμένα.</p>
          <p class="mt-4">— «Πόσα πράγματα θέλετε να κάνετε;» ρώτησε. Η φωνή του ήταν γρήγορη, ζωηρή, σαν σπίθα που πηδάει από καλώδιο σε καλώδιο.</p>
          <p class="mt-3">— «Όλα», είπε ο Φίλιππος χωρίς δισταγμό. Σαν να ήταν η μόνη λογική απάντηση. Σαν να μην υπήρχε εναλλακτική.</p>
          <p class="mt-3">Ο Sparken γύρισε το μεταλλικό κεφάλι του αργά. Τα φτερά του τρεμόπαιξαν. Και τότε είπε κάτι που κανείς δεν περίμενε:</p>
          <p class="mt-3 text-sky-200 font-bold text-lg">«Τότε δεν θα κάνετε τίποτα καλά.»</p>
          <p class="mt-4">Η φράση κρεμάστηκε στον αέρα. Βαριά. Αληθινή. Σαν πέτρα που πέφτει σε ακίνητη λίμνη και δημιουργεί κύκλους που δεν σταματούν ποτέ.</p>

          <!-- ΕΙΚΟΝΑ: SPARKEN -->
          <div class="mt-6 rounded-2xl overflow-hidden border border-sky-500/15 shadow-lg shadow-sky-900/20">
            <img src="${IMG_KIDS_WITH_SPARKEN}" alt="Τα παιδιά με τον Sparken" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-sky-300/80 italic">Ο Sparken ρωτάει την ερώτηση που κανείς δεν ήθελε να ακούσει</div>
          </div>

          <p class="mt-4">Η Ελευθερία αναστέναξε βαθιά. Η ανάσα της ακούστηκε σαν άνεμος σε κενό δωμάτιο. «Δηλαδή πρέπει να κόψουμε;» ρώτησε. Και η λέξη <em>κόψουμε</em> ακούστηκε σαν αποτυχία.</p>
          <p class="mt-3">Ο Sparken κούνησε τα φτερά του αργά. Σπίθες γαλάζιες χόρεψαν στον αέρα.</p>
          <p class="mt-3 text-white font-bold">— «Να διαλέξετε», είπε. «Όχι για πάντα. Για τώρα. Η επιλογή δεν σημαίνει εγκατάλειψη. Σημαίνει ότι ξέρεις τι είναι σημαντικό αυτή τη στιγμή.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Κανείς δεν μας μαθαίνει να διαλέγουμε. Μας μαθαίνουν να κάνουμε τα πάντα. Και μετά απορούν γιατί σπάμε.</p>
        </section>

        <!-- ΣΚΗΝΗ 6 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-500/30 border border-slate-400/30 text-slate-200 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-white tracking-wide">Η ΔΥΣΚΟΛΗ ΛΙΣΤΑ</h3>
          </div>
          <p>Ο Sparken κατέβηκε στο τραπέζι. «Πάρτε ένα χαρτί», είπε. «Γράψτε τα πάντα. Όλα όσα κάνετε σε μία εβδομάδα.»</p>
          <p class="mt-3">Οι τρεις έγραψαν. Και γέμισε σελίδα. Και ακόμα μία. Ο Φίλιππος σταμάτησε στην τρίτη σελίδα. «Δεν τελειώνει», μουρμούρισε.</p>
          <p class="mt-3">«Τώρα», είπε ο Sparken, «γράψτε αυτά που πρέπει <em>πραγματικά</em>.» Η λίστα μίκρυνε. Αλλά ακόμα ήταν μεγάλη.</p>
          <p class="mt-3">«Και τώρα», πρόσθεσε η WiseBot με τη ζεστή της φωνή, «γράψτε αυτά που <em>θέλετε πραγματικά</em>. Αυτά που σας κάνουν να νιώθετε ζωντανοί.»</p>
          <p class="mt-4">Η τρίτη λίστα ήταν μικρή. Τέσσερα πράγματα. Πέντε. Η Αλεξάνδρα κοίταξε τα τρία χαρτιά δίπλα δίπλα. Η διαφορά ήταν τεράστια. Και τρομακτική.</p>
          <p class="mt-3">Ο Φίλιππος δυσκολεύτηκε. Τα χέρια του έσφιξαν το μολύβι τόσο δυνατά που άσπρισαν οι αρθρώσεις. «Και αν χάσουμε κάτι σημαντικό;» ρώτησε. Η φωνή του έτρεμε — όχι από θυμό αυτή τη φορά, αλλά από φόβο.</p>
          <p class="mt-3">Η WiseBot τον κοίταξε ήρεμα. Τα μωβ μάτια της έγιναν πιο ζεστά.</p>
          <p class="mt-3 text-white font-bold text-lg">«Χάνεις περισσότερα όταν διαλύεσαι», απάντησε.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η δύσκολη λίστα δεν είναι αυτή με τα πολλά. Είναι αυτή με τα λίγα. Γιατί για να γράψεις τα λίγα, πρέπει πρώτα να πεις «όχι» σε πράγματα που νόμιζες ότι χρειάζεσαι.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-slate-500/15 shadow-lg shadow-slate-900/20">
            <img src="${IMG_KIDS_WISEBOT_2}" alt="Τα παιδιά φτιάχνουν τη λίστα" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-slate-300/80 italic">Η λίστα μικραίνει. Η ανάσα μεγαλώνει.</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 7 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-600/30 border border-teal-500/30 text-teal-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-teal-300 tracking-wide">Η ΑΝΑΣΑ</h3>
          </div>
          <p>Για πρώτη φορά εδώ και εβδομάδες, ένα απόγευμα ήταν... άδειο. Όχι βαρετό. Όχι αγχωτικό. Όχι γεμάτο λίστες και υποχρεώσεις. Απλά... <strong class="text-teal-200">ήσυχο</strong>.</p>
          <p class="mt-3">Η Αλεξάνδρα κάθισε στο πάτωμα με τα μπογιές της. Ζωγράφιζε χωρίς ρολόι, χωρίς deadline, χωρίς κανέναν να περιμένει τίποτα. Τα χρώματα έτρεχαν ελεύθερα πάνω στο χαρτί — σχήματα που δεν είχαν σχέδιο, γραμμές που δεν πήγαιναν πουθενά συγκεκριμένο. Και αυτό ήταν αρκετό.</p>
          <p class="mt-3">Ο Φίλιππος έφτιαχνε κάτι μικρό — ένα ξύλινο ελικοπτεράκι από σπίρτα. Αργά. Χωρίς βιασύνη. Χωρίς το χρονόμετρο στο κεφάλι του να μετράει αντίστροφα. Τα δάχτυλά του κινούνταν ήρεμα — σαν να θυμούνταν πώς ήταν να φτιάχνεις κάτι μόνο και μόνο επειδή θέλεις.</p>
          <p class="mt-3">Η Ελευθερία δεν διάβαζε. Σκεφτόταν. Καθαρά, βαθιά, χωρίς θόρυβο. Για πρώτη φορά, ο νους της δεν ήταν ένα δωμάτιο γεμάτο ανοιχτές πόρτες — ήταν ένα δωμάτιο με ένα ανοιχτό παράθυρο και ένα αεράκι.</p>
          <p class="mt-4">Ο Crocus χαμογέλασε — μια μικρή, αθόρυβη χαρά που ζωγραφίστηκε στο μεταλλικό πρόσωπό του.</p>
          <p class="mt-3 text-teal-200 font-medium">«Αυτό... είναι καλύτερο», είπε σιγά.</p>
          <p class="mt-3">Κανείς δεν διαφώνησε. Γιατί η ησυχία δεν χρειαζόταν εξήγηση. Την ένιωθες στα κόκαλά σου, στην ανάσα σου, στον τρόπο που τα μάτια σου κοιτούσαν τα πράγματα χωρίς να τρέχουν.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η ανάσα δεν είναι αδυναμία. Είναι η στιγμή που λες στον εαυτό σου: «Δεν χρωστάω τίποτα σε κανέναν αυτή τη στιγμή. Είμαι αρκετός ακριβώς όπως είμαι.»</p>
        </section>

        <!-- ΣΚΗΝΗ 8 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-600/30 border border-slate-500/30 text-slate-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-slate-300 tracking-wide">Η ΝΕΑ ΣΥΜΦΩΝΙΑ</h3>
          </div>
          <p>Όταν ο ήλιος έπεσε πίσω από τα κτίρια, τα τρία παιδιά κάθισαν σε κύκλο. Ο Sparken και η WiseBot ήταν ανάμεσά τους — ο ένας λαμπερός σαν αστραπή, η άλλη ήρεμη σαν σεληνόφως.</p>
          <p class="mt-3">Η Ελευθερία μίλησε πρώτη. Η φωνή της ήταν σταθερή τώρα — όχι κουρασμένη, αλλά αποφασισμένη.</p>
          <p class="mt-3 text-white font-medium">«Δεν τα παρατάμε. Απλώς δεν τα κάνουμε όλα ταυτόχρονα.»</p>
          <p class="mt-3">Ο Φίλιππος έγνεψε. Για πρώτη φορά, η γνέψη του δεν ήταν βιαστική. Ήταν βαριά, σκεφτική, σαν κάποιος που παίρνει μια απόφαση που τον αλλάζει.</p>
          <p class="mt-3 text-slate-200 font-medium">«Καλύτερα λιγότερα... σωστά», είπε. «Παρά πολλά... χαλασμένα.»</p>
          <p class="mt-3">Η Αλεξάνδρα χαμογέλασε — ένα μικρό χαμόγελο, σαν πρώτη ηλιαχτίδα μετά από μέρες σύννεφα.</p>
          <p class="mt-4">Η WiseBot άνοιξε τα φτερά της αργά. Τα μωβ μάτια της πάλλονταν δυνατά — σαν δύο αστέρια που λάμπουν ακριβώς τη στιγμή που τα χρειάζεσαι.</p>

          <div class="my-6 bg-gradient-to-r from-slate-900/40 to-gray-900/40 p-8 rounded-2xl border border-slate-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">«Ο χρόνος δεν φτάνει για όλα.<br/><span class="text-slate-300">Φτάνει για όσα διαλέγεις.»</span></p>
          </div>

          <p class="mt-4">Ο Sparken τίναξε τα φτερά του. Σπίθες γαλάζιες χόρεψαν στο δωμάτιο σαν πυγολαμπίδες ηλεκτρικές. Χαμογέλασε — αν μπορεί να χαμογελάσει ένα μεταλλικό πουλί — και τα μάτια του έγιναν πιο ζεστά.</p>
          <p class="mt-3 text-sky-300 font-bold text-lg">«Τώρα ξέρετε κάτι που πολλοί μεγάλοι δεν έμαθαν ποτέ.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η αληθινή δύναμη δεν είναι να κάνεις τα πάντα. Είναι να ξέρεις τι αξίζει να κάνεις. Και να έχεις το θάρρος να αφήσεις τα υπόλοιπα.</p>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-slate-950/60 p-8 rounded-3xl border-2 border-dashed border-slate-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-slate-300 uppercase tracking-wider">JOURNAL: ΔΙΑΛΕΓΩ ΤΟΝ ΧΡΟΝΟ ΜΟΥ</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Γράψε. Σκέψου. Νιώσε. Δεν υπάρχει λάθος απάντηση.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-slate-500/15">
              <h5 class="text-slate-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-slate-600/40 flex items-center justify-center text-xs font-black">1</span>
                ΤΙ ΜΕ ΚΟΥΡΑΖΕΙ
              </h5>
              <p class="text-sm mb-3 opacity-80">Γράψε 3 πράγματα που νιώθεις ότι «πρέπει» να κάνεις και σε πιέζουν. Ποια από αυτά τα κάνεις μόνο γιατί φοβάσαι μη χάσεις κάτι;</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-slate-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-slate-500/15">
              <h5 class="text-slate-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-slate-600/40 flex items-center justify-center text-xs font-black">2</span>
                ΤΙ ΜΕ ΓΕΜΙΖΕΙ
              </h5>
              <p class="text-sm mb-3 opacity-80">Γράψε 2 πράγματα που σου δίνουν ενέργεια όταν τα κάνεις. Αυτά που μετά νιώθεις ότι ο χρόνος πέρασε χωρίς να το καταλάβεις.</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-slate-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-slate-500/15">
              <h5 class="text-slate-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-slate-600/40 flex items-center justify-center text-xs font-black">3</span>
                Η ΕΠΙΛΟΓΗ
              </h5>
              <p class="text-sm mb-3 opacity-80">Συμπλήρωσε την πρόταση:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-slate-500/10 text-slate-200">
                <p class="text-sm font-medium">«Για να έχω ενέργεια, σήμερα σταματάω να: __________»</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΝΟΗΜΑ / MEANING BOX -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-r from-slate-900/30 to-gray-900/30 p-6 rounded-2xl border border-slate-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-slate-300 uppercase tracking-wider">Το νόημα αυτού του κεφαλαίου</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            Δεν φταίει που κουράστηκες. Φταίει που προσπάθησες να χωρέσεις τα <strong class="text-slate-300">πάντα</strong> σε μία μέρα, μία εβδομάδα, μία ζωή. Η επιλογή δεν είναι αδυναμία — είναι <strong class="text-teal-300">σοφία</strong>. Ο χρόνος δεν μεγάλωσε. Αλλά χώρεσε. Γιατί τώρα μέσα του υπάρχει μόνο αυτό που αξίζει.
          </p>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-gray-950/60 p-8 rounded-3xl border border-slate-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-slate-500/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-slate-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              Η υπερφόρτωση δεν φαίνεται πάντα. Μοιάζει με <strong class="text-white">«τεμπελιά»</strong> ή <strong class="text-white">«γκρίνια»</strong>. Αλλά πίσω από αυτές τις λέξεις κρύβεται ένα παιδί που <em>προσπαθεί να ανταποκριθεί σε υπερβολικές προσδοκίες</em>.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Όταν τα παιδιά μάθουν να <strong class="text-slate-300">διαλέγουν</strong> και να λένε «όχι» σε κάτι, μαθαίνουν ταυτόχρονα να λένε «ναι» στον εαυτό τους. Αυτό δεν είναι εγωισμός — είναι αυτοπροστασία.
            </p>
            <div class="mt-4 bg-slate-900/20 p-4 rounded-xl border border-slate-500/10">
              <p class="text-sm text-slate-200 font-medium mb-2">💡 TIPS ΓΙΑ ΓΟΝΕΙΣ:</p>
              <ul class="text-sm text-gray-400 space-y-2">
                <li>• Αναγνωρίστε τα σημάδια υπερφόρτωσης: εκνευρισμός, αδιαφορία, σωματικά συμπτώματα</li>
                <li>• Βοηθήστε το παιδί να φτιάξει λίστα προτεραιοτήτων μαζί σας</li>
                <li>• Δείξτε ότι η ξεκούραση δεν είναι τεμπελιά — είναι επένδυση</li>
                <li>• Πείτε: «Δεν χρειάζεται να κάνεις τα πάντα. Χρειάζεται να κάνεις τα σωστά»</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- INTRO QUOTE -->
        <div class="relative bg-gradient-to-r from-slate-900 via-gray-900/60 to-slate-800/40 p-10 rounded-2xl border border-slate-500/30 text-center shadow-lg shadow-slate-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Chapter 9</div>
          <p class="italic text-slate-200 text-xl mt-4 leading-relaxed">"Time isn't enough for everything.<br/>It's enough for what you choose."</p>
          <div class="mt-4 w-16 h-0.5 bg-slate-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- SCENE 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-600/30 border border-slate-500/30 text-slate-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-slate-300 tracking-wide">TOO MUCH AT ONCE</h3>
          </div>
          <p>The alarm went off at 6:45. A sharp, metallic sound, like a drill boring into the skull. Philippos opened his eyes and shut them immediately. The day hadn't even started and it was already pressing him — like a hand shoving you forward before you've had the chance to stand.</p>
          <p class="mt-3">School. Lessons. History test. Language homework. Theatre rehearsal. Robotics class. Basketball practice. <em>And the project.</em> Always the project, waiting in the corner like a shadow that never leaves.</p>
          <p class="mt-3">In the kitchen, Philippos ate a piece of bread so fast he barely chewed it. Alexandra was tying her shoelaces wrong — left on right, right on left — and didn't even notice. Her eyes were half-shut, foggy, as if looking through rain-streaked glass.</p>
          <p class="mt-3">Eleftheria stood motionless in front of the day's schedule pinned to the fridge. Sixteen lines. Sixteen obligations. Her eyes bounced from line to line, each one heavier than the last.</p>
          <p class="mt-4">"It doesn't work," she said calmly. So calmly her voice sounded like a court verdict.</p>
          <p class="mt-3">"Which one?" asked Philippos with a full mouth.</p>
          <p class="mt-3 text-slate-300 font-medium">"None of it. Nothing works."</p>
          <p class="mt-3">Crocus, curled up on the radio, yawned enormously. "Who put so much into a single day?" he asked innocently. Nobody answered. Because the answer was easy and hard at the same time: <em>everyone</em>. And <em>no one</em>.</p>
          <p class="mt-3 text-gray-400 text-sm italic">This is how the days you can't remember ending begin. With a list that fits on no piece of paper — and a stomach that clenches before you've even properly woken up.</p>
        </section>

        <!-- SCENE 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-600/30 border border-gray-500/30 text-gray-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-gray-300 tracking-wide">TIME IS RUNNING</h3>
          </div>
          <p>School passed like a blur. Pages, teachers' voices, bells ringing before you could catch a breath. Philippos scribbled things in his notebook without understanding them — just moving his hand, like a robot with a low battery.</p>
          <p class="mt-3">The project waited. But so did other things: reading, friends, activities, parents, expectations. An endless queue of <em>must-dos</em> standing behind every minute of the day, like ghosts in a corridor.</p>
          <p class="mt-3">In the afternoon, Alexandra sat in front of the work table. She opened her notebook. Looked at the page. The page looked back — blank, white, indifferent. Her fingers held the pencil but didn't move.</p>
          <p class="mt-4">"I can't make it," she said. Her voice was flat, emotionless. Like someone announcing the weather.</p>
          <p class="mt-3">"You have time," said Philippos, without lifting his eyes from his own papers.</p>
          <p class="mt-3">"Not <em>clean</em> time," she replied. "My time is full of holes. Like a sieve. It runs through my fingers and nothing stays."</p>
          <p class="mt-3">Eleftheria slowly closed her notebook. She placed it on the table as if setting down something she could no longer carry. Her eyes were red — not from crying, but from hours in front of letters that never stopped.</p>
          <p class="mt-3 text-white font-medium">"Our time is broken," she said. And the word <em>broken</em> sounded like something cracking inside the room.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Time doesn't run out. It just gets sliced into so many pieces that each piece becomes too small to hold anything real.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-slate-500/15 shadow-lg shadow-slate-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="The tired children" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-slate-300/80 italic">Philippos, Alexandra & Eleftheria — three children, one broken clock</div>
          </div>
        </section>

        <!-- SCENE 3 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-red-400 tracking-wide">THE TENSION</h3>
          </div>
          <p>At some point — maybe the fourth hour in front of books, maybe the fifth — something snapped. Not an object. Something inside them. An invisible thread that had been holding them together with composure.</p>
          <p class="mt-3">Philippos raised his head sharply. His eyes were red, his lips pressed tight. "If we leave it, we'll fall behind!" he shouted. His voice echoed through the room like a bullet hitting a wall.</p>
          <p class="mt-3">"We can't do everything!" Eleftheria fired back. She too had raised her voice — something rare, something that only happened when things had gone too far.</p>
          <p class="mt-3">Philippos slammed his hand on the table. A pencil bounced off and fell to the floor. The sound was like a gunshot in the silence.</p>
          <p class="mt-4">Then Alexandra stood up. Slowly. Like someone rising inside a dream. Her hands were trembling. Her eyes were full — not with tears, but with something deeper. Something like exhaustion that can no longer hide.</p>
          <p class="mt-4 text-center text-2xl font-black text-white">"STOP!"</p>
          <p class="mt-3">Her voice cracked in the middle of the word. It cracked like glass breaking slowly, piece by piece, each shard falling to the floor with a different sound.</p>
          <p class="mt-3 text-white font-medium">"It's not a game anymore. I'm tired. Tired of running. Tired of never making it. Tired of feeling like I'm not enough."</p>
          <p class="mt-3">Silence. Heavy. Thick. Like snow falling in a sealed room. Philippos lowered his eyes. Eleftheria held her breath. Crocus didn't speak — for the first time, he had nothing funny to say.</p>
          <p class="mt-3 text-gray-400 text-sm italic">There comes a moment when your body says what your mind refuses to admit. Alexandra wasn't angry. She was honest. And honesty, sometimes, sounds like a scream.</p>
        </section>

        <!-- SCENE 4 — WISEBOT -->
        <section class="bg-gradient-to-br from-slate-900/30 via-gray-900/20 to-slate-800/10 p-8 rounded-2xl border-l-4 border-slate-400 my-8 shadow-xl shadow-slate-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-500/30 border border-slate-400/30 text-slate-200 font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-slate-300 tracking-wide">THE FATIGUE THAT DOESN'T SHOW</h3>
          </div>
          <p>The afternoon passed without movement. The three children sat in different corners of the room, like castaways on an island they couldn't leave. Philippos stared at his hands — as if he didn't recognise them. Alexandra had her head resting on the table. Eleftheria held a book open but wasn't reading — her eyes were fixed on empty space.</p>
          <p class="mt-3">It wasn't laziness. It was something worse. It was the moment your body cuts the power by itself, because it knows that if you continue, something inside you will burn out.</p>
          <p class="mt-3">The air in the room shifted. A soft, silver light filled the corner near the window. The purple eyes appeared first — two crystals pulsing like a heartbeat in slow motion.</p>
          <p class="mt-4">WiseBot landed gently on the windowsill. Her wings — metallic, elegant, as if carved by an artisan's hand — folded silently.</p>

          <!-- IMAGE: KIDS + WISEBOT -->
          <div class="my-8 rounded-2xl overflow-hidden border border-slate-500/20 shadow-2xl shadow-slate-900/30">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="The children and WiseBot" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-slate-300/80 italic">WiseBot appeared the moment the children couldn't go on</div>
          </div>

          <p class="mt-4 text-white text-lg">"You are not lazy," WiseBot said.</p>
          <p class="mt-2">Her voice was warm but steady. Like a hand resting on your shoulder without pressing. Like someone who truly sees you, without judging.</p>
          <p class="mt-3 text-slate-200 font-bold text-lg">"You are overloaded."</p>
          <p class="mt-4">Philippos lowered his head. He felt his eyes burn. "If we stop, we lose," he whispered. And the word <em>lose</em> sounded like a fear he'd been carrying for a very long time.</p>
          <p class="mt-3">WiseBot looked at him. Her purple eyes filled with a warm glow — not critical, but deeply understanding.</p>
          <p class="mt-3 text-white font-bold text-xl">"If you keep going like this, you won't lose something. You will lose yourselves."</p>
          <p class="mt-3 text-gray-400 text-sm italic">The fatigue that doesn't show is the most dangerous kind. Because it looks like laziness. It looks like whining. It looks like weakness. But it is none of those things. It is a body asking for what it deserves: a breath.</p>
        </section>

        <!-- SCENE 5 — SPARKEN -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-sky-600/30 border border-sky-500/30 text-sky-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-sky-300 tracking-wide">THE CHOICE</h3>
          </div>
          <p>A low hum filled the air. It came from above — like an electric pulse descending through clouds. Sparken appeared slowly, like a falling star in no hurry. His wings — electric, luminous, like lightning bolts frozen in the shape of a bird — scattered blue sparks as he landed on the table.</p>
          <p class="mt-3">His eyes, two yellow crystals, scanned the room. He looked at the stacked books. The notebooks open to ten pages at once. The broken pencils. The exhausted faces.</p>
          <p class="mt-4">"How many things do you want to do?" he asked. His voice was quick, lively, like a spark jumping from wire to wire.</p>
          <p class="mt-3">"Everything," said Philippos without hesitation. As if it were the only logical answer. As if there were no alternative.</p>
          <p class="mt-3">Sparken turned his metallic head slowly. His wings flickered. And then he said something no one expected:</p>
          <p class="mt-3 text-sky-200 font-bold text-lg">"Then you won't do anything well."</p>
          <p class="mt-4">The sentence hung in the air. Heavy. True. Like a stone falling into a still lake, creating ripples that never stop.</p>

          <!-- IMAGE: SPARKEN -->
          <div class="mt-6 rounded-2xl overflow-hidden border border-sky-500/15 shadow-lg shadow-sky-900/20">
            <img src="${IMG_KIDS_WITH_SPARKEN}" alt="The children with Sparken" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-sky-300/80 italic">Sparken asks the question nobody wanted to hear</div>
          </div>

          <p class="mt-4">Eleftheria sighed deeply. Her breath sounded like wind in an empty room. "So we have to cut?" she asked. And the word <em>cut</em> sounded like failure.</p>
          <p class="mt-3">Sparken shook his wings slowly. Blue sparks danced in the air.</p>
          <p class="mt-3 text-white font-bold">"You have to choose," he said. "Not forever. For now. Choosing doesn't mean giving up. It means you know what matters right now."</p>
          <p class="mt-3 text-gray-400 text-sm italic">No one teaches us to choose. They teach us to do everything. And then they wonder why we break.</p>
        </section>

        <!-- SCENE 6 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-500/30 border border-slate-400/30 text-slate-200 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-white tracking-wide">THE HARD LIST</h3>
          </div>
          <p>Sparken landed on the table. "Take a piece of paper," he said. "Write everything. Everything you do in a week."</p>
          <p class="mt-3">The three of them wrote. A page filled. And another. Philippos stopped at the third page. "It doesn't end," he murmured.</p>
          <p class="mt-3">"Now," said Sparken, "write what you <em>truly</em> need to do." The list shrank. But it was still long.</p>
          <p class="mt-3">"And now," added WiseBot with her warm voice, "write what you <em>truly want</em> to do. The things that make you feel alive."</p>
          <p class="mt-4">The third list was small. Four things. Five. Alexandra looked at the three papers side by side. The difference was enormous. And terrifying.</p>
          <p class="mt-3">Philippos struggled. His hands squeezed the pencil so hard his knuckles went white. "And if we miss something important?" he asked. His voice trembled — not from anger this time, but from fear.</p>
          <p class="mt-3">WiseBot looked at him calmly. Her purple eyes grew warmer.</p>
          <p class="mt-3 text-white font-bold text-lg">"You lose more when you fall apart," she answered.</p>
          <p class="mt-3 text-gray-400 text-sm italic">The hard list isn't the one with many things. It's the one with few. Because to write the few, you first have to say "no" to things you thought you needed.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-slate-500/15 shadow-lg shadow-slate-900/20">
            <img src="${IMG_KIDS_WISEBOT_2}" alt="The children making their list" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-slate-300/80 italic">The list shrinks. The breath grows.</div>
          </div>
        </section>

        <!-- SCENE 7 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-600/30 border border-teal-500/30 text-teal-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-teal-300 tracking-wide">THE BREATH</h3>
          </div>
          <p>For the first time in weeks, an afternoon was... empty. Not boring. Not stressful. Not filled with lists and obligations. Just... <strong class="text-teal-200">quiet</strong>.</p>
          <p class="mt-3">Alexandra sat on the floor with her paints. She drew without a clock, without a deadline, without anyone expecting anything. Colours ran freely across the paper — shapes with no plan, lines going nowhere in particular. And that was enough.</p>
          <p class="mt-3">Philippos was building something small — a wooden toy helicopter from matchsticks. Slowly. Without rushing. Without the timer in his head counting down. His fingers moved calmly — as if they remembered what it was like to make something simply because you wanted to.</p>
          <p class="mt-3">Eleftheria wasn't reading. She was thinking. Clearly, deeply, without noise. For the first time, her mind wasn't a room full of open doors — it was a room with one open window and a gentle breeze.</p>
          <p class="mt-4">Crocus smiled — a small, silent joy painted on his metallic face.</p>
          <p class="mt-3 text-teal-200 font-medium">"This... is better," he said quietly.</p>
          <p class="mt-3">Nobody disagreed. Because the quietness didn't need explanation. You felt it in your bones, in your breath, in the way your eyes looked at things without rushing.</p>
          <p class="mt-3 text-gray-400 text-sm italic">A breath is not weakness. It is the moment you tell yourself: "I don't owe anything to anyone right now. I am enough exactly as I am."</p>
        </section>

        <!-- SCENE 8 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-600/30 border border-slate-500/30 text-slate-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-slate-300 tracking-wide">THE NEW DEAL</h3>
          </div>
          <p>When the sun fell behind the buildings, the three children sat in a circle. Sparken and WiseBot were among them — one bright as lightning, the other calm as moonlight.</p>
          <p class="mt-3">Eleftheria spoke first. Her voice was steady now — not tired, but determined.</p>
          <p class="mt-3 text-white font-medium">"We're not giving up. We're just not doing everything at once."</p>
          <p class="mt-3">Philippos nodded. For the first time, his nod wasn't hasty. It was heavy, thoughtful, like someone making a decision that changes them.</p>
          <p class="mt-3 text-slate-200 font-medium">"Better less... correctly," he said. "Than more... broken."</p>
          <p class="mt-3">Alexandra smiled — a small smile, like the first ray of sun after days of clouds.</p>
          <p class="mt-4">WiseBot spread her wings slowly. Her purple eyes pulsed brightly — like two stars shining at exactly the moment you need them.</p>

          <div class="my-6 bg-gradient-to-r from-slate-900/40 to-gray-900/40 p-8 rounded-2xl border border-slate-500/20 text-center">
            <p class="font-serif italic text-2xl text-white leading-relaxed">"Time isn't enough for everything.<br/><span class="text-slate-300">It's enough for what you choose."</span></p>
          </div>

          <p class="mt-4">Sparken shook his wings. Blue sparks danced across the room like electric fireflies. He smiled — if a metallic bird can smile — and his eyes grew warmer.</p>
          <p class="mt-3 text-sky-300 font-bold text-lg">"Now you know something many adults never learned."</p>
          <p class="mt-3 text-gray-400 text-sm italic">True strength isn't doing everything. It's knowing what's worth doing. And having the courage to let go of the rest.</p>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-slate-950/60 p-8 rounded-3xl border-2 border-dashed border-slate-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-slate-300 uppercase tracking-wider">JOURNAL: CHOOSING MY TIME</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Write. Think. Feel. There is no wrong answer.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-slate-500/15">
              <h5 class="text-slate-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-slate-600/40 flex items-center justify-center text-xs font-black">1</span>
                WHAT TIRES ME
              </h5>
              <p class="text-sm mb-3 opacity-80">Write 3 things you feel you "must" do and they pressure you. Which of them do you only do because you're afraid of missing out?</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-slate-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-slate-500/15">
              <h5 class="text-slate-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-slate-600/40 flex items-center justify-center text-xs font-black">2</span>
                WHAT FILLS ME
              </h5>
              <p class="text-sm mb-3 opacity-80">Write 2 things that give you energy when you do them. The ones where time passes without you noticing.</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-slate-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-slate-500/15">
              <h5 class="text-slate-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-slate-600/40 flex items-center justify-center text-xs font-black">3</span>
                THE CHOICE
              </h5>
              <p class="text-sm mb-3 opacity-80">Complete the sentence:</p>
              <div class="bg-black/30 p-4 rounded-xl border border-slate-500/10 text-slate-200">
                <p class="text-sm font-medium">"To have energy, today I stop: __________"</p>
              </div>
            </div>

          </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- MEANING BOX -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-r from-slate-900/30 to-gray-900/30 p-6 rounded-2xl border border-slate-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-slate-300 uppercase tracking-wider">The Meaning of This Chapter</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            It's not your fault you got tired. It's that you tried to fit <strong class="text-slate-300">everything</strong> into a single day, a single week, a single life. Choosing is not weakness — it is <strong class="text-teal-300">wisdom</strong>. Time didn't grow. But it fit. Because now it holds only what truly matters.
          </p>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- MESSAGE FOR PARENTS -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-gray-950/60 p-8 rounded-3xl border border-slate-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-slate-500/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-slate-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              Overload doesn't always show. It looks like <strong class="text-white">"laziness"</strong> or <strong class="text-white">"whining"</strong>. But behind those words hides a child who is <em>trying to meet excessive expectations</em>.
            </p>
            <p class="text-gray-300 leading-relaxed">
              When children learn to <strong class="text-slate-300">choose</strong> and say "no" to something, they simultaneously learn to say "yes" to themselves. This isn't selfishness — it is self-protection.
            </p>
            <div class="mt-4 bg-slate-900/20 p-4 rounded-xl border border-slate-500/10">
              <p class="text-sm text-slate-200 font-medium mb-2">💡 TIPS FOR PARENTS:</p>
              <ul class="text-sm text-gray-400 space-y-2">
                <li>• Recognise signs of overload: irritability, apathy, physical symptoms</li>
                <li>• Help your child build a priority list together</li>
                <li>• Show them that rest is not laziness — it is an investment</li>
                <li>• Say: "You don't need to do everything. You need to do the right things"</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    `
    }
  }
];
