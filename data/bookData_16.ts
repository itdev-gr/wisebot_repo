
import { Book } from '../types';

// ============================================================
// BOOK 16: ΟΤΑΝ ΒΟΗΘΑΣ ΑΛΛΟΥΣ / WHEN YOU HELP OTHERS
// Hero: Sparken (the dragon)
// Theme: ΗΓΕΣΙΑ / LEADERSHIP
// ============================================================

// Cover image
const IMG_SPARKEN = "/images/sparken.jpg";

// Character solo images
const IMG_FILIPPOS = "/images/filippos.png";
const IMG_ALEXANDRA = "/images/alexandra.png";
const IMG_ELEFTHERIA = "/images/eleftheria.png";

// Story images
const IMG_WISEBOT = "/images/wisebot.jpg";
const IMG_PENCILO = "/images/pencilo.jpg";
const IMG_KIDS_WITH_SPARKEN = "/images/paidia-kai-sparken.png";
const IMG_KIDS_WITH_WISEBOT = "/images/paidia-kai-wisebot.png";
const IMG_KIDS_TOGETHER = "/images/ta-3-paidia.png";

export const BOOK_16: Book[] = [
  {
    id: 16,
    title: { el: "ΟΤΑΝ ΒΟΗΘΑΣ ΑΛΛΟΥΣ", en: "WHEN YOU HELP OTHERS" },
    theme: { el: "ΗΓΕΣΙΑ", en: "LEADERSHIP" },
    stepLabel: { el: "SPARKEN & ΗΓΕΣΙΑ", en: "SPARKEN & LEADERSHIP" },
    author: "Sparken & Wisebot",
    cover: IMG_SPARKEN,
    videoUrl: "",
    description: {
      el: "Ένα μικρότερο παιδί τους παρακολουθεί. Θέλει να μάθει, αλλά φοβάται. Μια ιστορία για τη στιγμή που καταλαβαίνεις ότι δεν ξεκίνησες μόνο για σένα.",
      en: "A younger child watches them. He wants to learn, but he is afraid. A story about the moment you realize you didn't start just for yourself."
    },
    meaning: {
      el: "Δεν μεγαλώνεις μόνο με όσα φτιάχνεις. Μεγαλώνεις με όσα δίνεις.",
      en: "You don't grow only by what you make. You grow by what you give."
    },
    xp: 320,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- ΕΙΣΑΓΩΓΙΚΟ QUOTE -->
        <div class="relative bg-gradient-to-r from-slate-900 via-emerald-900/60 to-teal-900/40 p-10 rounded-2xl border border-emerald-500/30 text-center shadow-lg shadow-emerald-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Κεφάλαιο 16</div>
          <p class="italic text-emerald-200 text-xl mt-4 leading-relaxed">«Όταν βοηθάς, δεν ανεβαίνεις πιο ψηλά.<br/>Ανεβαίνεις πιο βαθιά.»</p>
          <div class="mt-4 w-16 h-0.5 bg-emerald-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- ΣΚΗΝΗ 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-emerald-300 tracking-wide">ΚΑΠΟΙΟΣ ΑΛΛΟΣ ΣΤΟ ΠΑΡΑΘΥΡΟ</h3>
          </div>
          <p>Ήταν ένα απόγευμα σαν πολλά άλλα. Ο ήλιος βυθιζόταν αργά πίσω από τα δέντρα, και οι σκιές στο εργαστήρι μεγάλωναν σιγά σιγά. Η Αλεξάνδρα ήταν σκυμμένη πάνω από ένα μηχάνημα, τα χέρια της γεμάτα λάδι. Ο Φίλιππος σφυρηλατούσε κάτι μεταλλικό στη γωνία, και η Ελευθερία γέμιζε σελίδες σημειωματάριου με αριθμούς και σκίτσα.</p>
          <p class="mt-3">Ο Sparken ήταν ξαπλωμένος στη σκεπή, τα φτερά του απλωμένα σαν σμαραγδένια σκιά. Τα μάτια του ήταν μισόκλειστα, αλλά δεν κοιμόταν. Παρατηρούσε. Πάντα παρατηρούσε. Ήταν η φύση του — ο δράκος που βλέπει πριν μιλήσει.</p>
          <p class="mt-3">Η Αλεξάνδρα σήκωσε το κεφάλι ξαφνικά. Κάτι <em>κινήθηκε</em> στην άκρη του οπτικού της πεδίου. Μια σκιά μικρή, που στεκόταν πίσω από τον τοίχο της αυλής.</p>
          <p class="mt-3">— «Περίμενε», ψιθύρισε στον Φίλιππο. «Μην κοιτάξεις απότομα.»</p>
          <p class="mt-3">Ο Φίλιππος πάγωσε. Τα μάτια του γύρισαν αργά. Εκεί, πίσω από τη γωνία, ένα παιδί. Μικρότερο από αυτούς. Τα χέρια του κρατούσαν ένα τσαλακωμένο χαρτί. Τα μάτια του ήταν μεγάλα — γεμάτα κάτι που η Αλεξάνδρα γνώριζε πολύ καλά: <strong class="text-emerald-300">φόβο ανακατεμένο με λαχτάρα</strong>.</p>
          <p class="mt-3">— «Μας παρακολουθεί», ψιθύρισε ξανά.</p>
          <p class="mt-3">Ο Φίλιππος γύρισε ολόκληρος. Η έκφρασή του μαλάκωσε — κάτι σπάνιο για τον Φίλιππο, που πάντα κοιτούσε τον κόσμο σαν πρόκληση.</p>
          <p class="mt-4 text-white font-medium">«Μοιάζει... όπως ήμασταν εμείς στην αρχή», είπε. Η φωνή του ήταν χαμηλή, σχεδόν τρυφερή.</p>
          <p class="mt-3">Η Ελευθερία δεν απάντησε. Κοίταξε το παιδί και κατάπιε σιγά. Θυμήθηκε τον εαυτό της — κρυμμένη πίσω από βιβλία, πίσω από τη γνώση που ήταν τόσο ασφαλής και τόσο μόνη ταυτόχρονα. Ένιωσε ένα βάρος στο στήθος που δεν ήταν θλίψη — ήταν <em>κατανόηση</em>.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Κάποιοι φτάνουν στο κατώφλι αλλά δεν χτυπάνε την πόρτα. Φοβούνται ότι κανείς δεν θα ανοίξει. Ή χειρότερα — ότι θα ανοίξει κάποιος που θα τους πει «δεν είσαι αρκετός».</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-emerald-500/15 shadow-lg shadow-emerald-900/20">
            <img src="${IMG_ALEXANDRA}" alt="Η Αλεξάνδρα παρατηρεί" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-emerald-300/80 italic">Η Αλεξάνδρα ήταν η πρώτη που είδε — γιατί ήξερε πώς μοιάζει η αόρατη λαχτάρα</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-600/30 border border-teal-500/30 text-teal-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-teal-300 tracking-wide">ΤΟ ΠΑΛΙΟ ΣΥΝΑΙΣΘΗΜΑ</h3>
          </div>
          <p>Πέρασαν λεπτά. Κανείς δεν κινήθηκε. Ο Sparken, ψηλά στη σκεπή, άφησε ένα χαμηλό γουργούρισμα — σαν γάτα, αλλά πιο βαθύ, πιο αρχαίο. Ένας ήχος που έλεγε: <em>«Βλέπω. Περιμένω. Είμαι εδώ.»</em></p>
          <p class="mt-3">Τελικά, το παιδί πλησίασε. Ένα βήμα. Μετά άλλο ένα. Σαν πουλί που πλησιάζει ψίχουλα — έτοιμο να φύγει. Τα χέρια του έτρεμαν. Στα δάχτυλά του — ένα σκίτσο με αδέξιες γραμμές, γεμάτες σβησίματα.</p>
          <p class="mt-3">— «Πώς... πώς το φτιάξατε;» ρώτησε. Η φωνή του ήταν τόσο σιγανή που μόλις ακούστηκε πάνω από τον αέρα. «Από πού ξεκινήσατε; Δεν... δεν είμαι καλός σαν εσάς.»</p>
          <p class="mt-4">Η φράση χτύπησε σαν πέτρα σε γυάλινο τζάμι. Κάτι <em>ράγισε</em> μέσα στην Αλεξάνδρα. Μια μνήμη τόσο ζωντανή που ένιωσε τον εαυτό της να γυρίζει πίσω — στη μέρα που ήταν ξαπλωμένη στο πάτωμα, μπροστά σε ένα παζλ που δεν νοιαζόταν να τελειώσει.</p>
          <p class="mt-3">Τα μάτια της βούρκωσαν, αλλά δεν έκλαψε. Αντίθετα, χαμογέλασε — ένα χαμόγελο μικρό, τρυφερό, γεμάτο αλήθεια.</p>
          <p class="mt-3 text-white font-medium">— «Κι εμείς έτσι λέγαμε», απάντησε ήρεμα. «Ακριβώς έτσι.»</p>
          <p class="mt-3">Ο Φίλιππος χαμογέλασε κι αυτός. Ένα χαμόγελο πλατύ, ζεστό, από αυτά που σπάνια έδειχνε. «Και κάναμε λάθος», είπε. «Κάναμε τεράστιο λάθος.»</p>
          <p class="mt-3">Το παιδί τους κοίταξε σαν κάποιος που ακούει μια γλώσσα που δεν ήξερε ότι υπάρχει αλλά κάπως <em>καταλαβαίνει</em>.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η πιο δυνατή φράση δεν είναι «μπορείς». Είναι «κι εγώ εκεί ήμουν». Γιατί δεν δίνει ελπίδα από ψηλά — δίνει γέφυρα από δίπλα.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-teal-500/15 shadow-lg shadow-teal-900/20">
            <img src="${IMG_FILIPPOS}" alt="Ο Φίλιππος χαμογελά" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-teal-300/80 italic">Ο Φίλιππος θυμήθηκε τον εαυτό του πριν από λίγο καιρό — θυμωμένο, χαμένο, σπασμένο</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 3 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-green-600/30 border border-green-500/30 text-green-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-green-400 tracking-wide">Ο ΕΝΘΟΥΣΙΑΣΜΟΣ ΚΑΙ Η ΣΟΦΙΑ</h3>
          </div>
          <p>Ο Sparken κατέβηκε από τη σκεπή με ένα μεγαλοπρεπές πέταγμα, και προσγειώθηκε μαλακά δίπλα στο παιδί. Το μικρό πρόσωπο γέμισε θαυμασμό — <em>ένας δράκος</em>, αληθινός, με μάτια σαν σμαράγδια.</p>
          <p class="mt-3">— «Έλα, πάμε!» είπε ο Sparken χαρούμενα. «Θα σου δείξουμε! Ξεκινάμε αμέσως!»</p>
          <p class="mt-3">Το παιδί έκανε ένα βήμα πίσω. Τα μάτια του γέμισαν <em>τρόμο</em>. Πολλά, πολύ γρήγορα.</p>
          <p class="mt-4">Η Ελευθερία σήκωσε το χέρι. Ήρεμα. Σταθερά.</p>
          <p class="mt-3 text-white font-bold">— «Όχι έτσι.»</p>
          <p class="mt-3">Ο Sparken γύρισε κοφτά. Τα μάτια του αναβόσβηναν με απορία. «Γιατί όχι;»</p>
          <p class="mt-3">Η Ελευθερία κοίταξε τα χέρια του παιδιού — που έτρεμαν, που κρατούσαν το σκίτσο σαν τείχος. Κοίταξε τα πόδια του — έτοιμα να τρέξουν. Και κατάλαβε.</p>
          <p class="mt-4 text-emerald-200 font-medium">— «Γιατί δεν χρειάζεται να τον τραβήξουμε. Χρειάζεται να τον αφήσουμε να περπατήσει. Με τον ρυθμό του.»</p>
          <p class="mt-3">Ο Sparken συνοφρυώθηκε. «Δύσκολο αυτό», μουρμούρισε. «Πιο εύκολο να σηκώσεις κάποιον στην πλάτη σου.»</p>
          <p class="mt-3">— «Ναι», απάντησε η Ελευθερία. «Αλλά αν τον σηκώσεις, δεν θα μάθει ποτέ να περπατά μόνος του. Και τότε, κάθε φορά που θα τον αφήσεις κάτω, θα πέφτει.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η αληθινή ηγεσία δεν είναι να πας μπροστά και να φωνάξεις «ακολουθήστε με». Είναι να γυρίσεις πίσω και να ρωτήσεις: «Πώς μπορώ να σε βοηθήσω να πας εκεί που θέλεις εσύ;»</p>
        </section>

        <!-- ΣΚΗΝΗ 4 — HIGHLIGHTED -->
        <section class="bg-gradient-to-br from-emerald-900/30 via-teal-900/20 to-green-900/10 p-8 rounded-2xl border-l-4 border-emerald-500 my-8 shadow-xl shadow-emerald-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-emerald-400 tracking-wide">Η WISEBOT ΑΛΛΑΖΕΙ ΘΕΣΗ</h3>
          </div>
          <p>Η WiseBot εμφανίστηκε χωρίς προειδοποίηση — όπως πάντα. Αλλά αυτή τη φορά κάτι ήταν διαφορετικό. Δεν ήρθε <em>μπροστά</em> στα παιδιά. Ήρθε <strong class="text-emerald-300">πίσω τους</strong>. Ακούμπησε σε ένα ράφι, στη σκιά, τα μωβ μάτια της χαμηλωμένα. Το φως στο στήθος της άναψε απαλά — σμαραγδένιο αυτή τη φορά, αντί για μωβ.</p>
          <p class="mt-3">Τα παιδιά γύρισαν και την κοίταξαν. Ήταν η πρώτη φορά που η WiseBot <em>υποχωρούσε</em>.</p>
          <p class="mt-3">«Μέχρι τώρα», είπε η WiseBot, «μαθαίνατε να ακούτε. Να σκέφτεστε. Να δημιουργείτε. Να πέφτετε και να σηκώνεστε.»</p>
          <p class="mt-4">Σταμάτησε. Τα μωβ μάτια της σηκώθηκαν αργά.</p>
          <p class="mt-3 text-white text-lg font-medium">«Τώρα μαθαίνετε κάτι πιο δύσκολο. Μαθαίνετε να <strong class="text-emerald-300">χωράτε</strong> και άλλους.»</p>
          <p class="mt-4">Η λέξη <em>«χωράτε»</em> κρεμάστηκε στον αέρα. Βαριά. Γεμάτη νόημα.</p>
          <p class="mt-3">Η Αλεξάνδρα μίλησε πρώτη. Σιγανά, αλλά σταθερά.</p>
          <p class="mt-3 text-emerald-200 font-medium">«Δεν είναι πια για εμάς μόνο», είπε. «Ποτέ δεν ήταν, ε;»</p>

          <!-- ΕΙΚΟΝΑ: KIDS + WISEBOT -->
          <div class="my-8 rounded-2xl overflow-hidden border border-emerald-500/20 shadow-2xl shadow-emerald-900/30">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="Η WiseBot πίσω από τα παιδιά" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-emerald-300/80 italic">Η WiseBot στάθηκε πίσω τους για πρώτη φορά — γιατί τώρα, μπροστά στέκονταν εκείνα</div>
          </div>

          <p class="mt-3">Η WiseBot δεν απάντησε. Τα μάτια της πάλλονταν απαλά. Ένα χαμόγελο χωρίς χείλη, αλλά τόσο πραγματικό που γέμισε τον χώρο.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Ο καλύτερος δάσκαλος δεν είναι αυτός που μένει πάντα μπροστά. Είναι αυτός που ξέρει πότε να πάει πίσω — για να αφήσει τους μαθητές του να γίνουν δάσκαλοι.</p>
        </section>

        <!-- ΣΚΗΝΗ 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-600/30 border border-teal-500/30 text-teal-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-teal-300 tracking-wide">Ο ΧΩΡΟΣ ΓΙΑ ΤΟΝ ΑΛΛΟΝ</h3>
          </div>
          <p>Ο Pencilo πλησίασε πρώτος. Το μαγικό μολύβι στα χέρια του φώτιζε απαλά. Άνοιξε τα σχέδια — τεράστια φύλλα χαρτιού γεμάτα γραμμές και σημειώσεις. Μήνες δουλειάς πάνω σε χαρτί.</p>
          <p class="mt-3">Κοίταξε το παιδί. Κατάπιε δυνατά. Και μετά είπε κάτι που κανείς δεν περίμενε.</p>
          <p class="mt-3 text-white font-medium">«Αυτό... το έφτιαξα εγώ. Αλλά μπορείς να το αλλάξεις.»</p>
          <p class="mt-4">Η πρόταση ακούστηκε απλή. Αλλά δεν ήταν. Ήταν σαν να άνοιγε κάποιος το σπίτι του σε ξένο. Σαν να έλεγε: «Αυτό που έχτισα, μπορείς να το αγγίξεις. Ακόμα και να το χαλάσεις — γιατί εσύ μετράς περισσότερο.»</p>
          <p class="mt-3">Το παιδί δίστασε. Τα δάχτυλά του σφίχτηκαν γύρω από το δικό του τσαλακωμένο χαρτί.</p>
          <p class="mt-3">— «Κι αν... κι αν το χαλάσω;» ρώτησε. Η φωνή του ράγισε στη μέση.</p>
          <p class="mt-4">Ο Φίλιππος απάντησε χωρίς δισταγμό. Σαν κάποιος που έχει ζήσει αυτή την ερώτηση χίλιες φορές στο κεφάλι του.</p>
          <p class="mt-3 text-emerald-300 font-bold">«Έτσι μαθαίνεις.»</p>
          <p class="mt-3">Η Αλεξάνδρα γονάτισε δίπλα στο παιδί. Στο ίδιο ύψος. Μάτια με μάτια. «Και αν χαλάσει, το ξαναφτιάχνουμε. Μαζί. Δεν είσαι μόνος σου.»</p>
          <p class="mt-4">Το παιδί χαμογέλασε. <strong class="text-emerald-200">Πρώτη φορά.</strong> Ένα χαμόγελο μικρό, αδέξιο, σαν λουλούδι που ανοίγει σε βράχο. Αλλά αληθινό. Τρομερά αληθινό.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Δεν υπάρχει μεγαλύτερο δώρο από τον χώρο. Από κάποιον που σου λέει: «Αυτό που έφτιαξα είναι αρκετά δυνατό για να αντέξει και τα δικά σου λάθη.» Αυτό δεν είναι γενναιοδωρία. Είναι εμπιστοσύνη.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-teal-500/15 shadow-lg shadow-teal-900/20">
            <img src="${IMG_PENCILO}" alt="Ο Pencilo μοιράζεται" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-teal-300/80 italic">Ο Pencilo μοίρασε τα σχέδιά του — μοίρασε κομμάτι του εαυτού του</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 6 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-red-400 tracking-wide">ΔΕΝ ΗΤΑΝ ΤΕΛΕΙΟ</h3>
          </div>
          <p>Δούλεψαν μαζί. Ώρες. Τα χέρια του παιδιού τρέμαν, αλλά ο Φίλιππος δεν τα πήρε πίσω. Η Ελευθερία εξηγούσε αργά, βήμα βήμα. Η Αλεξάνδρα ήταν δίπλα — πάντα δίπλα — χωρίς να πιέζει.</p>
          <p class="mt-3">Αλλά το αποτέλεσμα δεν ήταν καλό. Μια σύνδεση ήταν λάθος. Ο μηχανισμός δεν γύριζε. Σιωπή — η σιωπή της αποτυχίας.</p>
          <p class="mt-3">Το παιδί κατέβασε το κεφάλι. Τα χέρια του πήγαν στα γόνατά του. Τα μάτια του κοίταξαν κάτω, στο χώμα, στα πεσμένα κομμάτια, στο μηχάνημα που δεν δούλευε. Η φωνή του βγήκε σπασμένη, βαριά, σαν κάποιος που ζητά συγγνώμη για το ότι υπάρχει.</p>
          <p class="mt-4 text-red-300">«Σας καθυστέρησα. Δεν θα έπρεπε να με αφήσετε... Συγγνώμη.»</p>
          <p class="mt-3">Κανείς δεν μίλησε αμέσως. Ο Sparken χαμήλωσε αργά τα φτερά του. Ο Pencilo έσβησε το φως του — χρειαζόταν <em>σκοτάδι αρκετά ασφαλές για να αφήσεις κάτι αληθινό να βγει</em>.</p>
          <p class="mt-4">Η Αλεξάνδρα γονάτισε. Στο ίδιο ύψος με το παιδί. Τα μάτια της στα μάτια του.</p>
          <p class="mt-3 text-white font-bold text-xl">«Όχι. Μας θύμισες.»</p>
          <p class="mt-3">Το παιδί σήκωσε αργά τα μάτια. «Τι σας θύμισα;»</p>
          <p class="mt-3">«Ότι κάθε αρχή είναι αδέξια», είπε ο Φίλιππος σιγανά. «Η δική μας ήταν ακριβώς ίδια. Ίσως χειρότερη.»</p>
          <p class="mt-3">«Και ότι η αξία δεν μετριέται στο αποτέλεσμα», πρόσθεσε η Ελευθερία. «Μετριέται στο ότι τόλμησες να δοκιμάσεις.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Η αποτυχία δεν πονάει μόνο αυτόν που την ζει. Πονάει και αυτούς που βλέπουν — γιατί θυμούνται. Αλλά αυτός ο πόνος δεν είναι κακός. Είναι η γέφυρα ανάμεσα στο «ήμουν εκεί» και στο «δεν θα σε αφήσω μόνο».</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-red-500/15 shadow-lg shadow-red-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="Τα παιδιά μαζί με το μικρότερο" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-red-300/80 italic">Δεν ήταν τέλειο. Αλλά ήταν αληθινό. Και αυτό αξίζει περισσότερο.</div>
          </div>
        </section>

        <!-- ΣΚΗΝΗ 7 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-emerald-300 tracking-wide">ΤΟ ΒΑΘΟΣ</h3>
          </div>
          <p>Ο ήλιος είχε βυθιστεί εντελώς. Ο ουρανός ήταν σκούρος μοβ, και τα πρώτα αστέρια αναβόσβηναν αδύναμα. Ο Sparken κατέβηκε χαμηλά και κάθισε ανάμεσα στα παιδιά. Τα σμαραγδένια μάτια του γυάλιζαν στο σκοτάδι.</p>
          <p class="mt-3">«Όταν ανεβαίνεις», είπε ο Sparken, η φωνή του βαθιά σαν ποτάμι, «βλέπεις μακριά. Τα σπίτια γίνονται μικρά. Νιώθεις δυνατός.»</p>
          <p class="mt-3">Σταμάτησε. Τα φτερά του ανασηκώθηκαν, σαν να ετοιμαζόταν να πετάξει. Αλλά τα δίπλωσε ξανά.</p>
          <p class="mt-4">«Αλλά όταν βοηθάς...» συνέχισε, πιο σιγά τώρα, σχεδόν ψίθυρος, «δεν ανεβαίνεις πιο ψηλά.»</p>
          <p class="mt-3">Μια παύση μεγάλη. Τα αστέρια αναβόσβησαν.</p>
          <p class="mt-3 text-emerald-300 font-bold text-xl">«Ανεβαίνεις πιο <em>βαθιά</em>.»</p>
          <p class="mt-4">Η φράση κρεμάστηκε στον αέρα. Κανείς δεν μίλησε. Η Ελευθερία, που πάντα ήθελε να αναλύσει τα πάντα, αυτή τη φορά δεν μίλησε. Δεν χρειαζόταν. Τα λόγια του Sparken δεν ήθελαν εξήγηση — ήθελαν να κατασταλάξουν. Να μπουν μέσα. Να γίνουν ρίζες.</p>
          <p class="mt-3">Ο Φίλιππος κοίταξε τα χέρια του. Τα ίδια χέρια που κάποτε έσπαζαν ό,τι αγγίζαν, τώρα είχαν βοηθήσει κάποιον να χτίσει. Ένιωσε κάτι πιο βαθύ από υπερηφάνεια — κάτι που δεν μπορούσε να ονομάσει.</p>
          <p class="mt-3">Η Αλεξάνδρα κοίταξε τον ουρανό. «Νομίζω», ψιθύρισε, «ότι αυτό ήταν πάντα το νόημα. Μεγαλώνεις με αυτά που δίνεις.»</p>
          <p class="mt-3 text-gray-400 text-sm italic">Υπάρχει ένα ύψος που δεν μετριέται σε μέτρα. Μετριέται σε ανθρώπους που βοήθησες να σταθούν. Αυτό είναι το πραγματικό βάθος — το ύψος της ψυχής.</p>
        </section>

        <!-- ΣΚΗΝΗ 8 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-white tracking-wide">ΤΟ ΝΟΗΜΑ</h3>
          </div>
          <p>Το παιδί έφυγε. Αλλά δεν έφυγε με άδεια χέρια. Κρατούσε σχέδια — όχι τα δικά τους, τα <em>δικά του</em>. Σχέδια που δεν ήταν τέλεια — αλλά ήταν αρχή. Δική του αρχή.</p>
          <p class="mt-3">Πριν φύγει, γύρισε μια τελευταία φορά. Στα μάτια του — εκεί που πριν υπήρχε φόβος — τώρα υπήρχε κάτι σαν <strong class="text-emerald-300">φλόγα που μόλις ανάβει</strong>. Μικρή. Αλλά εκεί.</p>
          <p class="mt-4">Η Αλεξάνδρα κοίταξε την ομάδα. Η Ελευθερία είχε ακουμπήσει το σημειωματάριο κάτω — κλειστό, για πρώτη φορά. Ο Sparken κοιτούσε τον ουρανό.</p>
          <p class="mt-3">— «Δεν ένιωσα πιο κουρασμένη», είπε η Αλεξάνδρα. Η φωνή της ήταν γεμάτη έκπληξη. «Δούλεψα περισσότερο απ' ό,τι ποτέ σήμερα, αλλά νιώθω... πιο ελαφριά;»</p>
          <p class="mt-3">Ο Φίλιππος κούνησε αργά το κεφάλι. «Ούτε εγώ. Και ξέρεις κάτι παράξενο; Πριν ένιωθα ότι αυτά που φτιάχνουμε ανήκουν σε μας. Τώρα νιώθω ότι... ανήκουν σε όλους.»</p>
          <p class="mt-3">Η Ελευθερία χαμογέλασε. «Γιατί αυτό... είχε νόημα. Όχι νόημα σαν λέξη. Νόημα σαν κάτι που νιώθεις στα κόκαλα.»</p>
          <p class="mt-4">Ο Sparken άνοιξε τα φτερά του αργά κάτω από τα αστέρια. Δεν πέταξε. Τα κράτησε ανοιχτά — σαν αγκαλιά που χωράει τον κόσμο.</p>
          <p class="mt-3">Η WiseBot, ακόμα πίσω τους, άφησε τα μάτια της να λάμψουν μια τελευταία φορά. Σαν να έλεγε: <em>«Σας βλέπω. Και αυτό που βλέπω αξίζει.»</em></p>
          <p class="mt-3 text-gray-400 text-sm italic">Η αληθινή ηγεσία δεν είναι να πηγαίνεις μπροστά. Είναι να φτιάχνεις χώρο για αυτούς που έρχονται πίσω σου. Δεν μεγαλώνεις μόνο με αυτά που χτίζεις — μεγαλώνεις με αυτά που μοιράζεσαι.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-emerald-500/15 shadow-lg shadow-emerald-900/20">
            <img src="${IMG_KIDS_WITH_SPARKEN}" alt="Τα παιδιά με τον Sparken" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-emerald-300/80 italic">Τα φτερά του Sparken ανοίχτηκαν κάτω από τα αστέρια — μια αγκαλιά για ολόκληρο τον κόσμο</div>
          </div>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-emerald-950/60 p-8 rounded-3xl border-2 border-dashed border-emerald-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-emerald-300 uppercase tracking-wider">JOURNAL: ΟΤΑΝ ΒΟΗΘΑΩ ΑΛΛΟΥΣ</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Γράψε. Σκέψου. Νιώσε. Δεν υπάρχει λάθος απάντηση.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-emerald-500/15">
              <h5 class="text-emerald-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-emerald-600/40 flex items-center justify-center text-xs font-black">1</span>
                💎 Η ΠΡΟΣΦΟΡΑ
              </h5>
              <p class="text-sm mb-3 opacity-80">Γράψε ένα άτομο (φίλο, αδερφό, συμμαθητή) που μπορείς να βοηθήσεις με κάτι μικρό αυτή την εβδομάδα:</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-emerald-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-emerald-500/15">
              <h5 class="text-emerald-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-emerald-600/40 flex items-center justify-center text-xs font-black">2</span>
                💎 Η ΠΡΑΞΗ
              </h5>
              <p class="text-sm mb-3 opacity-80">Συμπλήρωσε: «Μπορώ να βοηθήσω κάποιον όταν ________»</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-emerald-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-emerald-500/15">
              <h5 class="text-emerald-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-emerald-600/40 flex items-center justify-center text-xs font-black">3</span>
                💎 ΤΟ ΣΥΝΑΙΣΘΗΜΑ
              </h5>
              <p class="text-sm mb-3 opacity-80">Πώς νιώθεις όταν βοηθάς κάποιον χωρίς αντάλλαγμα; Κύκλωσε ή γράψε:</p>
              <div class="flex flex-wrap gap-3 mb-3">
                <span class="px-3 py-1 bg-black/40 rounded-full border border-emerald-500/30 text-sm">Χαρά</span>
                <span class="px-3 py-1 bg-black/40 rounded-full border border-emerald-500/30 text-sm">Υπερηφάνεια</span>
                <span class="px-3 py-1 bg-black/40 rounded-full border border-emerald-500/30 text-sm">Νόημα</span>
                <span class="px-3 py-1 bg-black/40 rounded-full border border-emerald-500/30 text-sm">Ηρεμία</span>
                <span class="px-3 py-1 bg-black/40 rounded-full border border-emerald-500/30 text-sm">Δύναμη</span>
              </div>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-emerald-500/20"></div>
            </div>

          </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΝΟΗΜΑ / MEANING BOX -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-r from-emerald-900/30 to-teal-900/30 p-6 rounded-2xl border border-emerald-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-emerald-300 uppercase tracking-wider">Το νόημα αυτού του κεφαλαίου</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            Η ηγεσία δεν είναι να πας μπροστά. Είναι να γυρίσεις πίσω. Να δεις αυτόν που φοβάται. Να τον πλησιάσεις. Να του δώσεις <strong class="text-emerald-300">χώρο</strong> — όχι λύσεις, αλλά χώρο. Δεν μεγαλώνεις μόνο με αυτά που φτιάχνεις. <strong class="text-teal-300">Μεγαλώνεις με αυτά που δίνεις.</strong> Και τα πιο σημαντικά πράγματα που δίνεις δεν είναι αντικείμενα — είναι χρόνος, υπομονή, και η φράση «κι εγώ εκεί ήμουν».
          </p>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-emerald-950/60 p-8 rounded-3xl border border-emerald-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-emerald-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              Η προσφορά δεν μαθαίνεται με λόγια. Δεν μαθαίνεται με κηρύγματα ή υποχρεώσεις. Μαθαίνεται με <strong class="text-white">παράδειγμα</strong> — όταν ένα παιδί βλέπει κάποιον να δίνει χρόνο, προσοχή, και υπομονή χωρίς αντάλλαγμα.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Όταν ένα παιδί βοηθά κάποιον μικρότερο χωρίς να του ζητηθεί, <strong class="text-emerald-300">χτίζει χαρακτήρα</strong> που αντέχει στον χρόνο. Δεν προχωράς μόνο για να φτάσεις. Προχωράς για να πάρεις κι άλλους μαζί.
            </p>
            <div class="mt-4 bg-emerald-900/20 p-4 rounded-xl border border-emerald-500/10">
              <p class="text-sm text-emerald-200 font-medium">💡 Δοκιμάστε σήμερα: Ρωτήστε το παιδί σας: «Ποιος στο σχολείο μπορεί να χρειάζεται βοήθεια αλλά δεν τη ζητά; Πώς θα μπορούσες να τον πλησιάσεις;»</p>
            </div>
          </div>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">

        <!-- INTRO QUOTE -->
        <div class="relative bg-gradient-to-r from-slate-900 via-emerald-900/60 to-teal-900/40 p-10 rounded-2xl border border-emerald-500/30 text-center shadow-lg shadow-emerald-900/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">Chapter 16</div>
          <p class="italic text-emerald-200 text-xl mt-4 leading-relaxed">"When you help, you don't climb higher.<br/>You climb deeper."</p>
          <div class="mt-4 w-16 h-0.5 bg-emerald-500/40 mx-auto rounded-full"></div>
        </div>

        <!-- SCENE 1 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 font-black text-sm">01</span>
            <h3 class="text-2xl font-black text-emerald-300 tracking-wide">SOMEONE ELSE AT THE WINDOW</h3>
          </div>
          <p>It was an afternoon like many others. The sun was sinking slowly behind the trees, and the shadows in the workshop grew quietly. Alexandra was hunched over a machine, her hands covered in oil. Philippos was hammering something metallic in the corner, and Eleftheria filled notebook pages with numbers and sketches.</p>
          <p class="mt-3">Sparken lay on the rooftop, his wings spread like an emerald shadow. His eyes were half-closed, but he wasn't sleeping. He was watching. He always watched. It was his nature — the dragon who sees before he speaks.</p>
          <p class="mt-3">Alexandra raised her head suddenly. Something <em>moved</em> at the edge of her vision. A small shadow, standing behind the courtyard wall.</p>
          <p class="mt-3">"Wait," she whispered to Philippos. "Don't look suddenly."</p>
          <p class="mt-3">Philippos froze. His eyes turned slowly. There, behind the corner, a child. Smaller than them. His hands held a crumpled paper. His eyes were large — filled with something Alexandra knew very well: <strong class="text-emerald-300">fear mixed with longing</strong>.</p>
          <p class="mt-3">"He's watching us," she whispered again.</p>
          <p class="mt-3">Philippos turned fully. His expression softened — something rare for Philippos, who always looked at the world like a challenge.</p>
          <p class="mt-4 text-white font-medium">"He looks... like we were at the beginning," he said. His voice was low, almost tender.</p>
          <p class="mt-3">Eleftheria didn't answer. She looked at the child and swallowed quietly. She remembered herself — hidden behind books, behind knowledge that was so safe and so lonely at the same time. She felt a weight in her chest that wasn't sadness — it was <em>understanding</em>.</p>
          <p class="mt-3 text-gray-400 text-sm italic">Some people arrive at the doorstep but never knock. They're afraid no one will open. Or worse — that someone will open and say "you're not enough."</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-emerald-500/15 shadow-lg shadow-emerald-900/20">
            <img src="${IMG_ALEXANDRA}" alt="Alexandra observing" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-emerald-300/80 italic">Alexandra was the first to see — because she knew what invisible longing looks like</div>
          </div>
        </section>

        <!-- SCENE 2 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-600/30 border border-teal-500/30 text-teal-300 font-black text-sm">02</span>
            <h3 class="text-2xl font-black text-teal-300 tracking-wide">THE OLD FEELING</h3>
          </div>
          <p>Minutes passed. No one moved. Sparken, high on the roof, let out a low rumble — like a cat, but deeper, more ancient. A sound that said: <em>"I see. I wait. I am here."</em></p>
          <p class="mt-3">Finally, the child approached. One step. Then another. Like a bird approaching crumbs — ready to flee. His hands trembled. In his fingers — a sketch with clumsy lines, full of erasures.</p>
          <p class="mt-3">"How... how did you make it?" he asked. His voice was so quiet it barely carried above the breeze. "Where did you start? I'm not... I'm not good like you."</p>
          <p class="mt-4">The sentence struck like a stone through glass. Something <em>cracked</em> inside Alexandra. A memory so alive she felt herself turning back — to the day she lay on the floor, in front of a puzzle she didn't care to finish.</p>
          <p class="mt-3">Her eyes stung, but she didn't cry. Instead, she smiled — a small smile, tender, full of truth.</p>
          <p class="mt-3 text-white font-medium">"We used to say that too," she answered calmly. "Exactly that."</p>
          <p class="mt-3">Philippos smiled too. A wide, warm smile, one he rarely showed. "And we were wrong," he said. "We were incredibly wrong."</p>
          <p class="mt-3">The child looked at them like someone hearing a language they didn't know existed but somehow <em>understood</em>.</p>
          <p class="mt-3 text-gray-400 text-sm italic">The most powerful sentence isn't "you can do it." It's "I was there too." Because it doesn't offer hope from above — it offers a bridge from beside.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-teal-500/15 shadow-lg shadow-teal-900/20">
            <img src="${IMG_FILIPPOS}" alt="Philippos smiling" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-teal-300/80 italic">Philippos remembered himself a short time ago — angry, lost, broken</div>
          </div>
        </section>

        <!-- SCENE 3 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-green-600/30 border border-green-500/30 text-green-300 font-black text-sm">03</span>
            <h3 class="text-2xl font-black text-green-400 tracking-wide">ENTHUSIASM AND WISDOM</h3>
          </div>
          <p>Sparken descended from the rooftop with a majestic flight and landed softly next to the child. The small face filled with wonder — <em>a dragon</em>, real, with eyes like emeralds.</p>
          <p class="mt-3">"Come on, let's go!" said Sparken cheerfully. "We'll show you! Let's start right now!"</p>
          <p class="mt-3">The child took a step back. His eyes filled with <em>terror</em>. Too much, too fast.</p>
          <p class="mt-4">Eleftheria raised her hand. Calmly. Steadily.</p>
          <p class="mt-3 text-white font-bold">"Not like that."</p>
          <p class="mt-3">Sparken turned sharply. His eyes blinked with puzzlement. "Why not?"</p>
          <p class="mt-3">Eleftheria looked at his trembling hands, at his feet ready to run. And she understood.</p>
          <p class="mt-4 text-emerald-200 font-medium">"Because we don't need to pull him. We need to let him walk. At his own pace."</p>
          <p class="mt-3">Sparken frowned. "That's hard," he murmured. "Much easier to lift someone on your back."</p>
          <p class="mt-3">"Yes," replied Eleftheria. "But if you carry him, he'll never learn to walk on his own. And then, every time you set him down, he'll fall."</p>
          <p class="mt-3 text-gray-400 text-sm italic">True leadership isn't going ahead and shouting "follow me." It's turning back and asking: "How can I help you get where you want to go?"</p>
        </section>

        <!-- SCENE 4 — HIGHLIGHTED -->
        <section class="bg-gradient-to-br from-emerald-900/30 via-teal-900/20 to-green-900/10 p-8 rounded-2xl border-l-4 border-emerald-500 my-8 shadow-xl shadow-emerald-900/10">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 font-black text-sm">04</span>
            <h3 class="text-3xl font-black text-emerald-400 tracking-wide">WISEBOT CHANGES POSITION</h3>
          </div>
          <p>WiseBot appeared without warning — as always. But this time something was different. She didn't come <em>in front</em> of the children. She came <strong class="text-emerald-300">behind them</strong>. She settled on a shelf, in the shadow, her purple eyes lowered. The light on her chest glowed softly — emerald this time, instead of purple.</p>
          <p class="mt-3">The children turned and looked at her. It was the first time WiseBot <em>stepped back</em>.</p>
          <p class="mt-3">"Until now," said WiseBot, "you were learning to listen. To think. To create. To fall and rise."</p>
          <p class="mt-4">She paused. Her purple eyes rose slowly.</p>
          <p class="mt-3 text-white text-lg font-medium">"Now you are learning something harder. You are learning to <strong class="text-emerald-300">make room</strong> for others."</p>
          <p class="mt-4">The word <em>"room"</em> hung in the air. Heavy. Full of meaning.</p>
          <p class="mt-3">Alexandra spoke first. Quietly, but steadily.</p>
          <p class="mt-3 text-emerald-200 font-medium">"It's not just for us anymore," she said. "It never was, was it?"</p>

          <!-- IMAGE: KIDS + WISEBOT -->
          <div class="my-8 rounded-2xl overflow-hidden border border-emerald-500/20 shadow-2xl shadow-emerald-900/30">
            <img src="${IMG_KIDS_WITH_WISEBOT}" alt="WiseBot behind the children" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-emerald-300/80 italic">WiseBot stood behind them for the first time — because now, they were the ones standing in front</div>
          </div>

          <p class="mt-3">WiseBot didn't answer. Her eyes pulsed softly. A smile without lips, but so real it filled the space.</p>
          <p class="mt-3 text-gray-400 text-sm italic">The best teacher isn't the one who always stands in front. It's the one who knows when to step back — to let their students become teachers.</p>
        </section>

        <!-- SCENE 5 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-600/30 border border-teal-500/30 text-teal-300 font-black text-sm">05</span>
            <h3 class="text-2xl font-black text-teal-300 tracking-wide">THE SPACE FOR THE OTHER</h3>
          </div>
          <p>Pencilo approached first. The magical pencil in his hands glowed softly. He opened the plans — enormous sheets of paper filled with lines and notes. Months of work on paper.</p>
          <p class="mt-3">He looked at the child. Swallowed hard. And then said something no one expected.</p>
          <p class="mt-3 text-white font-medium">"This... I made this. But you can change it."</p>
          <p class="mt-4">The sentence sounded simple. But it wasn't. It was like someone opening their home to a stranger. Like saying: "What I built, you can touch. You can even break — because you matter more than the plans."</p>
          <p class="mt-3">The child hesitated. His fingers tightened around his own crumpled paper.</p>
          <p class="mt-3">"What if... what if I break it?" he asked. His voice cracked in the middle.</p>
          <p class="mt-4">Philippos answered without hesitation. Like someone who had lived through that question a thousand times in his own head.</p>
          <p class="mt-3 text-emerald-300 font-bold">"That's how you learn."</p>
          <p class="mt-3">Alexandra knelt beside the child. At the same height. Eyes to eyes. "And if it breaks, we fix it again. Together. You're not alone."</p>
          <p class="mt-4">The child smiled. <strong class="text-emerald-200">For the first time.</strong> A small smile, clumsy, like a flower opening on a rock. But real. Incredibly real.</p>
          <p class="mt-3 text-gray-400 text-sm italic">There is no greater gift than space. Than someone who tells you: "What I built is strong enough to withstand your mistakes too." That isn't generosity. It's trust.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-teal-500/15 shadow-lg shadow-teal-900/20">
            <img src="${IMG_PENCILO}" alt="Pencilo sharing" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-teal-300/80 italic">Pencilo shared his plans — he shared a piece of himself</div>
          </div>
        </section>

        <!-- SCENE 6 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/30 text-red-300 font-black text-sm">06</span>
            <h3 class="text-2xl font-black text-red-400 tracking-wide">IT WASN'T PERFECT</h3>
          </div>
          <p>They worked together. For hours. The child's hands shook, but Philippos didn't take the tools back. Eleftheria explained slowly, step by step. Alexandra stayed beside him — always beside him — without pushing.</p>
          <p class="mt-3">But the result wasn't good. A connection was wrong. The mechanism wouldn't turn. Silence — the silence of failure.</p>
          <p class="mt-3">The child lowered his head. His hands went to his knees. His eyes looked down at the ground, at the fallen pieces, at the machine that didn't work. His voice came out broken, heavy, like someone apologizing for existing.</p>
          <p class="mt-4 text-red-300">"I slowed you down. I shouldn't have let you... Sorry."</p>
          <p class="mt-3">No one spoke immediately. Sparken lowered his wings. Pencilo dimmed his light — what was needed was <em>darkness safe enough to let something real emerge</em>.</p>
          <p class="mt-4">Alexandra knelt. At the same height as the child. Her eyes to his eyes.</p>
          <p class="mt-3 text-white font-bold text-xl">"No. You reminded us."</p>
          <p class="mt-3">The child slowly raised his eyes. "Reminded you of what?"</p>
          <p class="mt-3">"That every beginning is clumsy," said Philippos quietly. "Ours was exactly the same. Maybe worse."</p>
          <p class="mt-3">"And that worth is not measured by the result," added Eleftheria. "It is measured by the fact that you dared to try."</p>
          <p class="mt-3 text-gray-400 text-sm italic">Failure doesn't only hurt the one who lives it. It hurts those who watch — because they remember. But that pain isn't bad. It is the bridge between "I was there" and "I won't leave you alone."</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-red-500/15 shadow-lg shadow-red-900/20">
            <img src="${IMG_KIDS_TOGETHER}" alt="The children together with the younger one" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-red-300/80 italic">It wasn't perfect. But it was real. And that is worth more.</div>
          </div>
        </section>

        <!-- SCENE 7 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 font-black text-sm">07</span>
            <h3 class="text-2xl font-black text-emerald-300 tracking-wide">THE DEPTH</h3>
          </div>
          <p>The sun had sunk completely. The sky was deep purple, and the first stars blinked weakly. Sparken descended low and sat among the children. His emerald eyes gleamed in the darkness.</p>
          <p class="mt-3">"When you climb," said Sparken, his voice deep as a river, "you see far. Houses become small. You feel powerful."</p>
          <p class="mt-3">He paused. His wings lifted slightly, as if to fly. But he folded them again.</p>
          <p class="mt-4">"But when you help..." he continued, more quietly now, almost a whisper, "you don't climb higher."</p>
          <p class="mt-3">A long pause. The stars blinked.</p>
          <p class="mt-3 text-emerald-300 font-bold text-xl">"You climb <em>deeper</em>."</p>
          <p class="mt-4">The phrase hung in the air. No one spoke. Eleftheria, who always wanted to analyze everything, this time stayed silent. She didn't need to. Sparken's words didn't need explanation — they needed to settle. To go inside. To become roots.</p>
          <p class="mt-3">Philippos looked at his hands. The same hands that once broke everything they touched had now helped someone build. He felt something deeper than pride — something he couldn't name.</p>
          <p class="mt-3">Alexandra looked at the sky. "I think," she whispered, "this was always the meaning. You grow by what you give."</p>
          <p class="mt-3 text-gray-400 text-sm italic">There is a height that isn't measured in meters. It is measured in people you helped stand. That is the real depth — the height of the soul.</p>
        </section>

        <!-- SCENE 8 -->
        <section class="relative">
          <div class="flex items-center gap-3 mb-4">
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 font-black text-sm">08</span>
            <h3 class="text-2xl font-black text-white tracking-wide">THE MEANING</h3>
          </div>
          <p>The child left. But he didn't leave with empty hands. He held plans — not theirs, <em>his own</em>. Plans that weren't perfect — but were a beginning. His own beginning.</p>
          <p class="mt-3">Before leaving, he turned one last time. In his eyes — where fear had been moments ago — there was now something like a <strong class="text-emerald-300">flame that had just been lit</strong>. Small. But there.</p>
          <p class="mt-4">Alexandra looked at the team. Eleftheria had put her notebook down — closed, for the first time. Sparken gazed at the sky.</p>
          <p class="mt-3">"I didn't feel more tired," said Alexandra. Her voice was full of surprise. "I worked harder than ever today, but I feel... lighter?"</p>
          <p class="mt-3">Philippos nodded slowly. "Me neither. And you know what's strange? Before I felt like what we build belongs to us. Now I feel like... it belongs to everyone."</p>
          <p class="mt-3">Eleftheria smiled. "Because this... had meaning. Not meaning like a word. Meaning like something you feel in your bones."</p>
          <p class="mt-4">Sparken opened his wings slowly under the stars. He didn't fly. He held them open — like an embrace that holds the world.</p>
          <p class="mt-3">WiseBot, still behind them, let her eyes glow one last time. As if saying: <em>"I see you. And what I see is worth it."</em></p>
          <p class="mt-3 text-gray-400 text-sm italic">True leadership isn't going ahead. It's making room for those who come behind you. You don't grow only by what you build — you grow by what you share.</p>

          <div class="mt-6 rounded-2xl overflow-hidden border border-emerald-500/15 shadow-lg shadow-emerald-900/20">
            <img src="${IMG_KIDS_WITH_SPARKEN}" alt="The children with Sparken" class="w-full rounded-xl" style="max-height: 500px; object-fit: contain" />
            <div class="bg-black/60 px-4 py-2 text-center text-xs text-emerald-300/80 italic">Sparken's wings opened under the stars — an embrace for the whole world</div>
          </div>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- JOURNAL -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-14 bg-emerald-950/60 p-8 rounded-3xl border-2 border-dashed border-emerald-500/40 shadow-xl">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">📓</span>
            <h4 class="text-xl font-black text-emerald-300 uppercase tracking-wider">JOURNAL: WHEN I HELP OTHERS</h4>
          </div>
          <p class="text-gray-500 text-sm mb-6 italic">Write. Think. Feel. There is no wrong answer.</p>

          <div class="space-y-6 text-gray-300">

            <div class="bg-black/20 p-5 rounded-xl border border-emerald-500/15">
              <h5 class="text-emerald-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-emerald-600/40 flex items-center justify-center text-xs font-black">1</span>
                💎 THE OFFER
              </h5>
              <p class="text-sm mb-3 opacity-80">Write the name of someone (friend, sibling, classmate) you can help with something small this week:</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-emerald-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-emerald-500/15">
              <h5 class="text-emerald-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-emerald-600/40 flex items-center justify-center text-xs font-black">2</span>
                💎 THE ACT
              </h5>
              <p class="text-sm mb-3 opacity-80">Complete the sentence: "I can help someone when ________"</p>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-emerald-500/20"></div>
            </div>

            <div class="bg-black/20 p-5 rounded-xl border border-emerald-500/15">
              <h5 class="text-emerald-200 font-bold mb-2 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-emerald-600/40 flex items-center justify-center text-xs font-black">3</span>
                💎 THE FEELING
              </h5>
              <p class="text-sm mb-3 opacity-80">How do you feel when you help someone without expecting anything back? Circle or write:</p>
              <div class="flex flex-wrap gap-3 mb-3">
                <span class="px-3 py-1 bg-black/40 rounded-full border border-emerald-500/30 text-sm">Joy</span>
                <span class="px-3 py-1 bg-black/40 rounded-full border border-emerald-500/30 text-sm">Pride</span>
                <span class="px-3 py-1 bg-black/40 rounded-full border border-emerald-500/30 text-sm">Meaning</span>
                <span class="px-3 py-1 bg-black/40 rounded-full border border-emerald-500/30 text-sm">Peace</span>
                <span class="px-3 py-1 bg-black/40 rounded-full border border-emerald-500/30 text-sm">Strength</span>
              </div>
              <div class="w-full h-12 bg-black/30 rounded-lg border border-emerald-500/20"></div>
            </div>

          </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- MEANING BOX -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-r from-emerald-900/30 to-teal-900/30 p-6 rounded-2xl border border-emerald-500/20">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xl">💎</span>
            <h4 class="text-lg font-black text-emerald-300 uppercase tracking-wider">The Meaning of This Chapter</h4>
          </div>
          <p class="text-gray-300 leading-relaxed">
            Leadership isn't going ahead. It is turning back. Seeing the one who is afraid. Approaching them. Giving them <strong class="text-emerald-300">space</strong> — not answers, but space. You don't grow only by what you build. <strong class="text-teal-300">You grow by what you give.</strong> And the most important things you give aren't objects — they are time, patience, and the phrase "I was there too."
          </p>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- MESSAGE FOR PARENTS -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="mt-8 bg-gradient-to-br from-slate-950 to-emerald-950/60 p-8 rounded-3xl border border-emerald-500/30 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <span class="text-2xl">👨‍👩‍👧</span>
            <h4 class="text-xl font-black text-emerald-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
          </div>
          <div class="space-y-4 relative z-10">
            <p class="text-gray-300 leading-relaxed">
              Contribution is not learned with words. It is not learned through lectures or obligations. It is learned by <strong class="text-white">example</strong> — when a child sees someone give time, attention, and patience without expecting anything in return.
            </p>
            <p class="text-gray-300 leading-relaxed">
              When a child helps someone younger without being asked, <strong class="text-emerald-300">they build character</strong> that endures through time. You don't move forward just to arrive. You move forward to take others with you.
            </p>
            <div class="mt-4 bg-emerald-900/20 p-4 rounded-xl border border-emerald-500/10">
              <p class="text-sm text-emerald-200 font-medium">💡 Try today: Ask your child: "Who at school might need help but is too afraid to ask? How could you reach out to them?"</p>
            </div>
          </div>
        </div>

      </div>
    `
    }
  }
];
