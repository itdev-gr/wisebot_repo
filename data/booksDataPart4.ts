
import { Book } from '../types';

// Images for reference
const IMG_WISEBOT = "/images/wisebot.jpg";
const IMG_PENCILO = "/images/pencilo.jpg";
const IMG_CROCUS = "/images/crocus.jpg";
const IMG_LINK = "/images/link.jpg";
const IMG_SPARKEN = "/images/sparken.jpg";

// BOOKS 22 - 26
export const BOOKS_PART_4: Book[] = [
  {
    id: 22,
    title: { el: "ΤΟ ΠΑΙΧΝΙΔΙ ΠΟΥ ΔΕΝ ΤΕΛΕΙΩΝΕ ΠΟΤΕ", en: "THE GAME THAT NEVER ENDED" },
    theme: { el: "ΔΕΣΜΕΥΣΗ", en: "COMMITMENT" },
    stepLabel: { el: "SPARKEN & ΔΕΣΜΕΥΣΗ", en: "SPARKEN & COMMITMENT" },
    author: "Sparken",
    cover: IMG_SPARKEN,
    videoUrl: "",
    description: { 
      el: "Μια ιστορία για τη διαφορά ανάμεσα στο να έχεις μια ιδέα και στο να την τελειώνεις. Το βουνό φαίνεται τεράστιο μέχρι να το σπάσεις σε βήματα.", 
      en: "A story about the difference between having an idea and finishing it. The mountain looks huge until you break it into steps." 
    },
    meaning: { 
      el: "Ο στόχος δεν ήταν να φτιάξουν το καλύτερο παιχνίδι. Ήταν να μάθουν πώς τελειώνουν αυτό που ξεκινούν.", 
      en: "The goal wasn't to make the best game. It was to learn how to finish what you start." 
    },
    xp: 400,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        <div class="relative bg-gradient-to-r from-red-900/60 to-orange-900/60 p-8 rounded-2xl border border-red-500/30 text-center italic text-red-200 shadow-lg">
           «Όταν κάτι δεν έχει όνομα, ημερομηνία και σχήμα… παραμένει ιδέα.»
        </div>
        <section>
          <h3 class="text-2xl font-black text-red-400 mb-3 tracking-wide">01. ΤΟ ΔΩΜΑΤΙΟ ΤΩΝ ΙΔΕΩΝ</h3>
          <p>Το δωμάτιο ήταν γεμάτο ιδέες. Σχέδια στο πάτωμα. Μολύβια. Χαρτιά. Κομμάτια από χαλασμένα παιχνίδια.</p>
          <p class="mt-2">Ο Φίλιππος είχε ήδη ανοίξει τρία κατσαβίδια. Η Αλεξάνδρα μιλούσε γρήγορα. Η Ελευθερία προσπαθούσε να βάλει τάξη.</p>
          <p class="mt-4">«Θα φτιάξουμε το καλύτερο παιχνίδι στον κόσμο», είπε ο Φίλιππος.</p>
          <p class="mt-2">«Ναι, αλλά τι ακριβώς;» ρώτησε η Ελευθερία.</p>
          <p class="mt-2">Η Αλεξάνδρα άρχισε να εξηγεί. Μετά άλλαξε ιδέα. Μετά άλλη.</p>
          <p class="mt-2 text-white">Δύο ώρες μετά, είχαν ενθουσιασμό. Αλλά τίποτα συγκεκριμένο.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-purple-400 mb-3 tracking-wide">02. Η ΕΡΩΤΗΣΗ ΤΗΣ WISEBOT</h3>
          <p>Το βράδυ, το “καλύτερο παιχνίδι στον κόσμο” ήταν απλώς ένα σωρό από κομμάτια. Η Wisebot εμφανίστηκε ήσυχα στο παράθυρο.</p>
          <p class="mt-2">«Τι προσπαθείτε να φτιάξετε;»</p>
          <p class="mt-2">«Ένα παιχνίδι που θα αλλάξει τα πάντα!» είπε η Αλεξάνδρα.</p>
          <p class="mt-2 text-white font-bold">«Πώς λέγεται;» ρώτησε η Wisebot. Σιωπή.</p>
          <p class="mt-2">«Πότε θα είναι έτοιμο;» Σιωπή.</p>
          <p class="mt-2">«Τι θα κάνει ακριβώς;» Ο Φίλιππος κοίταξε κάτω.</p>
          <p class="mt-4">Η Wisebot πλησίασε. «Όταν κάτι δεν έχει όνομα, ημερομηνία και σχήμα… παραμένει ιδέα.»</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-blue-300 mb-3 tracking-wide">03. ΤΟ ΣΧΕΔΙΟ</h3>
          <p>Το επόμενο πρωί, η Ελευθερία έγραψε σε ένα χαρτί: “Μέχρι την 1η Ιουνίου θα έχουμε φτιάξει ένα επιτραπέζιο στρατηγικής για παιδιά 8–12 ετών.”</p>
          <p class="mt-4">Το χαρτί μπήκε στον τοίχο. Κάτι άλλαξε. Ξαφνικά, δεν έλεγαν “κάποτε”. Έλεγαν <strong class="text-blue-200">“σήμερα τι κάνουμε;”</strong></p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-orange-400 mb-3 tracking-wide">04. ΤΟ ΒΟΥΝΟ ΠΟΥ ΕΣΠΑΣΕ</h3>
          <p>Στην αρχή ένιωθαν μικροί μπροστά στο βουνό. Η Αλεξάνδρα ήθελε να το σχεδιάσει όλο σε μία μέρα. Ο Φίλιππος ήθελε να το χτίσει πριν τελειώσει το σχέδιο.</p>
          <p class="mt-2">Η Ελευθερία τους σταμάτησε. «Πρώτα κανόνες. Μετά δοκιμή. Μετά βελτίωση.»</p>
          <p class="mt-2 text-white">Το βουνό έσπασε σε βήματα. Μικρά. Συγκεκριμένα.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">05. Η ΔΥΣΚΟΛΙΑ</h3>
          <p>Την τρίτη εβδομάδα, το παιχνίδι δεν δούλευε. Οι κάρτες ήταν μπερδεμένες. Οι κανόνες βαρετοί.</p>
          <p class="mt-2">Δύο παιδιά που το δοκίμασαν γέλασαν. Ο Φίλιππος πέταξε τα χαρτιά. «Δεν είμαστε καλοί σε αυτό.»</p>
          <p class="mt-4">Η Wisebot δεν τον παρηγόρησε. <strong class="text-white">«Το λάθος δείχνει πού να κοιτάξεις. Όχι ποιος είσαι.»</strong></p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-green-400 mb-3 tracking-wide">06. Η ΠΡΟΟΔΟΣ</h3>
          <p>Άρχισαν να μετρούν πρόοδο. Κάθε μέρα έκαναν ένα πράγμα. Μόνο ένα.</p>
          <p class="mt-2">Αλλά δεν υπήρξε ούτε μία μέρα χωρίς κίνηση. Όταν βαριούνταν, κοιτούσαν την ημερομηνία στον τοίχο.</p>
          <p class="mt-2">Όταν φοβούνταν, έκαναν το πιο δύσκολο κομμάτι πρώτο. Όταν μπερδεύονταν, ρωτούσαν.</p>
          <p class="mt-4 text-white">Σιγά σιγά, κάτι συνέβη. Δεν άλλαζε μόνο το παιχνίδι. Άλλαζαν οι ίδιοι.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-red-500 mb-3 tracking-wide">07. Ο SPARKEN</h3>
          <p>Ένα απόγευμα, ο Sparken κατέβηκε χαμηλά. Κοίταξε το ταμπλό. Δεν ήταν τέλειο.</p>
          <p class="mt-2">«Θα μπορούσε να είναι καλύτερο», είπε. Τα παιδιά πάγωσαν.</p>
          <p class="mt-4">Ο Sparken χαμογέλασε ελαφρά. «Αλλά το τελειώσατε.»</p>
          <p class="mt-2">Σήκωσε το βλέμμα τους ψηλά. <strong class="text-red-200">«Οι περισσότεροι ξεκινούν με ενθουσιασμό. Λίγοι γράφουν τι θέλουν. Ακόμα λιγότεροι μένουν όταν γίνεται δύσκολο. Εσείς μείνατε.»</strong></p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">08. Η ΠΑΡΟΥΣΙΑΣΗ</h3>
          <p>Την ημέρα της παρουσίασης, τα χέρια τους έτρεμαν. Δεν ήταν τέλειο. Αλλά ήταν αληθινό.</p>
          <p class="mt-2">Και όταν ένα παιδί από το κοινό είπε «Πότε βγαίνει το επόμενο;» τότε κατάλαβαν.</p>
          <p class="mt-4 font-bold text-red-100">Ο στόχος δεν ήταν να φτιάξουν το καλύτερο παιχνίδι. Ήταν να μάθουν πώς τελειώνουν αυτό που ξεκινούν.</p>
        </section>

        <div class="mt-12 bg-red-950/60 p-8 rounded-3xl border-2 border-dashed border-red-500/40 shadow-xl">
           <h4 class="text-xl font-black text-red-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             🎯 JOURNAL: ΤΕΛΕΙΩΝΩ ΑΥΤΟ ΠΟΥ ΑΡΧΙΖΩ
           </h4>
           <div class="space-y-6 text-gray-300">
             <div>
               <h5 class="text-red-200 font-bold mb-2">1. ΤΟ ΜΙΣΟΤΕΛΕΙΩΜΕΝΟ</h5>
               <p class="text-sm mb-2 opacity-80">Γράψε κάτι που έχεις ξεκινήσει και το άφησες στη μέση:</p>
               <div class="w-full h-10 bg-black/30 rounded border border-red-500/20"></div>
             </div>
             <div>
               <h5 class="text-red-200 font-bold mb-2">2. ΤΟ ΕΜΠΟΔΙΟ</h5>
               <p class="text-sm mb-2 opacity-80">Τι σε σταμάτησε; (Βαρεμάρα; Δυσκολία;)</p>
               <div class="w-full h-10 bg-black/30 rounded border border-red-500/20"></div>
             </div>
             <div>
                <h5 class="text-red-200 font-bold mb-2">3. Η ΔΕΣΜΕΥΣΗ</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-red-500/10">
                 <p class="text-sm">«Δεν θα το αφήσω έτσι. Θα κάνω το επόμενο βήμα σήμερα.»</p>
               </div>
             </div>
           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-red-950/80 p-8 rounded-3xl border border-red-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-red-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Η ικανότητα να τελειώνεις κάτι (completion) είναι πιο σημαντική από την ικανότητα να το αρχίζεις.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             Επιβραβεύστε το <strong class="text-red-200">"τέλος"</strong>, ακόμα κι αν το αποτέλεσμα δεν είναι τέλειο. Η ολοκλήρωση χτίζει χαρακτήρα και αυτοπεποίθηση.
           </p>
        </div>
      </div>
      `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        <div class="relative bg-gradient-to-r from-red-900/60 to-orange-900/60 p-8 rounded-2xl border border-red-500/30 text-center italic text-red-200 shadow-lg">
           «When something doesn't have a name, a date, and a shape... it remains an idea.»
        </div>
        <section>
          <h3 class="text-2xl font-black text-red-400 mb-3 tracking-wide">01. THE ROOM OF IDEAS</h3>
          <p>The room was full of ideas. Plans on the floor. Pencils. Papers. Pieces of broken toys.</p>
          <p class="mt-2">Philippos had already opened three screwdrivers. Alexandra talked fast. Eleftheria tried to bring order.</p>
          <p class="mt-4">"We will make the best game in the world," said Philippos.</p>
          <p class="mt-2">"Yes, but what exactly?" asked Eleftheria.</p>
          <p class="mt-2">Alexandra started explaining. Then changed her mind. Then another.</p>
          <p class="mt-2 text-white">Two hours later, they had excitement. But nothing specific.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-purple-400 mb-3 tracking-wide">02. WISEBOT'S QUESTION</h3>
          <p>At night, the "best game in the world" was just a pile of pieces. Wisebot appeared quietly at the window.</p>
          <p class="mt-2">"What are you trying to make?"</p>
          <p class="mt-2">"A game that will change everything!" said Alexandra.</p>
          <p class="mt-2 text-white font-bold">"What is it called?" asked Wisebot. Silence.</p>
          <p class="mt-2">"When will it be ready?" Silence.</p>
          <p class="mt-2">"What will it do exactly?" Philippos looked down.</p>
          <p class="mt-4">Wisebot approached. "When something doesn't have a name, a date, and a shape... it remains an idea."</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-blue-300 mb-3 tracking-wide">03. THE PLAN</h3>
          <p>The next morning, Eleftheria wrote on a paper: “By June 1st we will have made a strategy board game for kids 8–12 years old.”</p>
          <p class="mt-4">The paper went on the wall. Something changed. Suddenly, they didn't say "someday". They said <strong class="text-blue-200">"what are we doing today?"</strong></p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-orange-400 mb-3 tracking-wide">04. THE MOUNTAIN BROKEN</h3>
          <p>At first they felt small in front of the mountain. Alexandra wanted to design it all in one day. Philippos wanted to build it before finishing the design.</p>
          <p class="mt-2">Eleftheria stopped them. "First rules. Then testing. Then improvement."</p>
          <p class="mt-2 text-white">The mountain broke into steps. Small. Specific.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">05. THE DIFFICULTY</h3>
          <p>The third week, the game didn't work. The cards were confusing. The rules boring.</p>
          <p class="mt-2">Two kids who tried it laughed. Philippos threw the papers. "We aren't good at this."</p>
          <p class="mt-4">Wisebot didn't comfort him. <strong class="text-white">"The mistake shows where to look. Not who you are."</strong></p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-green-400 mb-3 tracking-wide">06. THE PROGRESS</h3>
          <p>They started measuring progress. Every day they did one thing. Only one.</p>
          <p class="mt-2">But there wasn't a single day without movement. When they were bored, they looked at the date on the wall.</p>
          <p class="mt-2">When they were scared, they did the hardest part first. When confused, they asked.</p>
          <p class="mt-4 text-white">Slowly, something happened. Not only the game was changing. They were changing.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-red-500 mb-3 tracking-wide">07. SPARKEN</h3>
          <p>One afternoon, Sparken came down low. He looked at the board. It wasn't perfect.</p>
          <p class="mt-2">"It could be better," he said. The kids froze.</p>
          <p class="mt-4">Sparken smiled slightly. "But you finished it."</p>
          <p class="mt-2">He raised their gaze high. <strong class="text-red-200">"Most start with excitement. Few write what they want. Even fewer stay when it gets hard. You stayed."</strong></p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">08. THE PRESENTATION</h3>
          <p>On the day of the presentation, their hands trembled. It wasn't perfect. But it was real.</p>
          <p class="mt-2">And when a kid from the audience said "When is the next one coming out?" then they understood.</p>
          <p class="mt-4 font-bold text-red-100">The goal wasn't to make the best game. It was to learn how to finish what you start.</p>
        </section>

        <div class="mt-12 bg-red-950/60 p-8 rounded-3xl border-2 border-dashed border-red-500/40 shadow-xl">
           <h4 class="text-xl font-black text-red-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             🎯 JOURNAL: FINISHING WHAT I START
           </h4>
           <div class="space-y-6 text-gray-300">
             <div>
               <h5 class="text-red-200 font-bold mb-2">1. THE UNFINISHED</h5>
               <p class="text-sm mb-2 opacity-80">Write something you started and left halfway:</p>
               <div class="w-full h-10 bg-black/30 rounded border border-red-500/20"></div>
             </div>
             <div>
               <h5 class="text-red-200 font-bold mb-2">2. THE OBSTACLE</h5>
               <p class="text-sm mb-2 opacity-80">What stopped you? (Boredom? Difficulty?)</p>
               <div class="w-full h-10 bg-black/30 rounded border border-red-500/20"></div>
             </div>
             <div>
                <h5 class="text-red-200 font-bold mb-2">3. THE COMMITMENT</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-red-500/10">
                 <p class="text-sm">«I won't leave it like this. I will take the next step today.»</p>
               </div>
             </div>
           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-red-950/80 p-8 rounded-3xl border border-red-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-red-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             The ability to finish something (completion) is more important than the ability to start it.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             Reward the <strong class="text-red-200">"finish"</strong>, even if the result isn't perfect. Completion builds character and confidence.
           </p>
        </div>
      </div>
      `
    }
  },
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
        <div class="relative bg-gradient-to-r from-blue-900/60 to-cyan-900/60 p-8 rounded-2xl border border-blue-500/30 text-center italic text-blue-200 shadow-lg">
           «Όταν κάτι γίνεται εύκολο να ξεκινήσει, δεν χρειάζεται δύναμη. Χρειάζεται μόνο σειρά.»
        </div>
        <section>
          <h3 class="text-2xl font-black text-blue-400 mb-3 tracking-wide">01. Η ΣΧΕΔΟΝ ΕΤΟΙΜΑΣΙΑ</h3>
          <p>Το παιχνίδι ήταν έτοιμο. Σχεδόν. Το ταμπλό δούλευε. Οι κάρτες είχαν τυπωθεί. Ο Φίλιππος είχε περάσει καλώδια μέσα από το κουτί.</p>
          <p class="mt-2">Η Αλεξάνδρα είχε γράψει την ιστορία. Η Ελευθερία είχε οργανώσει τους κανόνες. Έμενε ένα πράγμα.</p>
          <p class="mt-4 text-white">Να το δοκιμάζουν κάθε μέρα.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-cyan-300 mb-3 tracking-wide">02. Η ΚΑΘΥΣΤΕΡΗΣΗ</h3>
          <p>Δεν το έκαναν. Τη μία βαριόντουσαν. Την άλλη είχαν διάβασμα. Μετά ήθελαν “λίγο διάλειμμα”.</p>
          <p class="mt-2">Μετά έλεγαν “από Δευτέρα σοβαρά”. Το παιχνίδι δεν χάλασε. Απλώς… έμεινε εκεί.</p>
          <p class="mt-4">Η Wisebot καθόταν σιωπηλή στο ράφι. Τρίτη μέρα χωρίς να το αγγίξουν.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-purple-400 mb-3 tracking-wide">03. Η ΕΡΩΤΗΣΗ ΤΗΣ WISEBOT</h3>
          <p>«Θέλετε να πετύχει το παιχνίδι;» ρώτησε. «Ναι!» φώναξαν και οι τρεις.</p>
          <p class="mt-2">«Τότε γιατί δεν το ακουμπάτε;» Ο Φίλιππος σήκωσε τους ώμους. «Δεν έχουμε όρεξη κάθε μέρα.»</p>
          <p class="mt-4">Η Wisebot πλησίασε το κουμπί. <strong class="text-blue-200">«Περιμένετε να νιώσετε έτοιμοι. Αλλά οι νικητές δεν ξεκινούν επειδή νιώθουν έτοιμοι. Ξεκινούν επειδή είναι η ώρα.»</strong></p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">04. Ο ΚΑΝΟΝΑΣ ΤΩΝ 2 ΛΕΠΤΩΝ</h3>
          <p>Την επόμενη μέρα, η Ελευθερία κόλλησε ένα χαρτί δίπλα στο κουτί: “Μετά το διάβασμα, δοκιμή 2 λεπτά.”</p>
          <p class="mt-2">Δύο λεπτά μόνο. Ο Φίλιππος γέλασε. «Δύο λεπτά δεν αλλάζουν τίποτα.» Η Wisebot δεν απάντησε.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-green-400 mb-3 tracking-wide">05. Η ΑΛΛΑΓΗ</h3>
          <p>Το απόγευμα, δοκίμασαν. Δύο λεπτά έγιναν πέντε. Πέντε έγιναν δέκα. Δεν έκαναν θαύματα. Αλλά έκαναν κάτι.</p>
          <p class="mt-2">Την επόμενη μέρα ξανά. Και την επόμενη. Όχι επειδή είχαν έμπνευση. Επειδή ήταν γραμμένο στον τοίχο.</p>
          <p class="mt-4">Μια εβδομάδα μετά, κάτι παράξενο συνέβη. Δεν το σκεφτόντουσαν πια. Το έκαναν. Όπως πλένεις τα δόντια.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-yellow-400 mb-3 tracking-wide">06. ΤΟ ΠΕΡΙΒΑΛΛΟΝ</h3>
          <p>Ένα βράδυ ο Φίλιππος άφησε τα εργαλεία σκορπισμένα. Την επόμενη μέρα δεν είχαν διάθεση.</p>
          <p class="mt-2">Η Wisebot κοίταξε το δωμάτιο. «Το περιβάλλον σας βοηθά ή σας σαμποτάρει;»</p>
          <p class="mt-2">Την ίδια νύχτα, η Ελευθερία ετοίμασε το τραπέζι από πριν. Την επόμενη μέρα, ξεκίνησαν χωρίς σκέψη.</p>
          <p class="mt-2 font-bold text-white">Δεν άλλαξαν χαρακτήρα. Άλλαξαν το χώρο.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-red-400 mb-3 tracking-wide">07. Η ΑΛΥΣΙΔΑ</h3>
          <p>Την τρίτη εβδομάδα, κουράστηκαν. Έχασαν μία μέρα. Η Αλεξάνδρα πανικοβλήθηκε. «Χάλασε η αλυσίδα!»</p>
          <p class="mt-2">Η Wisebot χαμογέλασε. «Μία μέρα δεν σε αλλάζει. Δύο συνεχόμενες σε αλλάζουν.»</p>
          <p class="mt-2">Την επόμενη μέρα επέστρεψαν. Όχι τέλεια. Αλλά παρόντες.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-cyan-300 mb-3 tracking-wide">08. ΤΟ 1% ΚΑΛΥΤΕΡΟ</h3>
          <p>Σιγά σιγά, το παιχνίδι έγινε καλύτερο. Όχι επειδή έκαναν τεράστια άλματα. Αλλά επειδή κάθε μέρα ήταν 1% καλύτερο.</p>
          <p class="mt-2">Οι κάρτες έγιναν πιο καθαρές. Οι κανόνες πιο απλοί. Το κουμπί… επιτέλους δούλεψε.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">09. Η ΣΥΝΕΙΔΗΤΟΠΟΙΗΣΗ</h3>
          <p>Ο Sparken κατέβηκε χαμηλά. «Πότε αλλάξατε;» ρώτησε. Ο Φίλιππος σκέφτηκε.</p>
          <p class="mt-2">Δεν υπήρχε “μεγάλη στιγμή”. Υπήρχαν μικρές. Κάθε απόγευμα. Δύο λεπτά. Ξανά και ξανά.</p>
          <p class="mt-4 text-purple-200">Η Wisebot στάθηκε μπροστά τους. «Δεν κερδίσατε επειδή θέλατε πολύ. Κερδίσατε επειδή το κάνατε εύκολο. Το κάνατε μικρό. Το κάνατε καθημερινό.»</p>
        </section>
        
        <div class="mt-12 bg-blue-950/60 p-8 rounded-3xl border-2 border-dashed border-blue-500/40 shadow-xl">
           <h4 class="text-xl font-black text-blue-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             📆 JOURNAL: ΧΤΙΖΩ ΣΥΝΗΘΕΙΕΣ
           </h4>
           <div class="space-y-6 text-gray-300">
             <div>
               <h5 class="text-blue-200 font-bold mb-2">1. Η ΔΙΚΑΙΟΛΟΓΙΑ</h5>
               <p class="text-sm mb-2 opacity-80">Τι λες στον εαυτό σου όταν δεν θες να ξεκινήσεις;</p>
               <div class="w-full h-10 bg-black/30 rounded border border-blue-500/20"></div>
             </div>
             <div>
               <h5 class="text-blue-200 font-bold mb-2">2. ΤΟ ΠΕΡΙΒΑΛΛΟΝ</h5>
               <p class="text-sm mb-2 opacity-80">Τι μπορείς να ετοιμάσεις από πριν για να είναι πιο εύκολο;</p>
               <div class="w-full h-10 bg-black/30 rounded border border-blue-500/20"></div>
             </div>
             <div>
                <h5 class="text-blue-200 font-bold mb-2">3. Η ΥΠΟΣΧΕΣΗ</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-blue-500/10">
                 <p class="text-sm">«Θα το κάνω για 2 λεπτά κάθε μέρα, ακόμα κι αν δεν έχω όρεξη.»</p>
               </div>
             </div>
           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-blue-950/80 p-8 rounded-3xl border border-blue-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-blue-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Το κίνητρο είναι αναξιόπιστο. Η συνήθεια είναι πιστή.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             Βοηθήστε τα παιδιά να φτιάξουν <strong class="text-blue-200">συστήματα</strong> (π.χ. πάντα μετά το φαγητό, πάντα στο ίδιο γραφείο) αντί να περιμένουν την "έμπνευση". Η συνέπεια νικάει την ένταση.
           </p>
        </div>
      </div>
      `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        <div class="relative bg-gradient-to-r from-blue-900/60 to-cyan-900/60 p-8 rounded-2xl border border-blue-500/30 text-center italic text-blue-200 shadow-lg">
           «When something becomes easy to start, it doesn't need strength. It just needs order.»
        </div>
        <section>
          <h3 class="text-2xl font-black text-blue-400 mb-3 tracking-wide">01. ALMOST READY</h3>
          <p>The game was ready. Almost. The board worked. The cards were printed. Philippos had run wires through the box.</p>
          <p class="mt-2">Alexandra had written the story. Eleftheria had organized the rules. One thing remained.</p>
          <p class="mt-4 text-white">To test it every day.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-cyan-300 mb-3 tracking-wide">02. THE DELAY</h3>
          <p>They didn't do it. One day they were bored. The next they had homework. Then they wanted "a little break".</p>
          <p class="mt-2">Then they said "from Monday seriously". The game didn't break. It just… stayed there.</p>
          <p class="mt-4">Wisebot sat silently on the shelf. Third day without touching it.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-purple-400 mb-3 tracking-wide">03. WISEBOT'S QUESTION</h3>
          <p>«Do you want the game to succeed?» she asked. «Yes!» they all shouted.</p>
          <p class="mt-2">«Then why don't you touch it?» Philippos shrugged. «We don't feel like it every day.»</p>
          <p class="mt-4">Wisebot approached the button. <strong class="text-blue-200">«You wait to feel ready. But winners don't start because they feel ready. They start because it's time.»</strong></p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">04. THE 2-MINUTE RULE</h3>
          <p>The next day, Eleftheria stuck a paper next to the box: “After studying, test 2 minutes.”</p>
          <p class="mt-2">Two minutes only. Philippos laughed. «Two minutes change nothing.» Wisebot didn't answer.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-green-400 mb-3 tracking-wide">05. THE CHANGE</h3>
          <p>In the afternoon, they tried. Two minutes became five. Five became ten. They didn't work miracles. But they did something.</p>
          <p class="mt-2">The next day again. And the next. Not because they had inspiration. Because it was written on the wall.</p>
          <p class="mt-4">A week later, something strange happened. They didn't think about it anymore. They did it. Like brushing teeth.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-yellow-400 mb-3 tracking-wide">06. THE ENVIRONMENT</h3>
          <p>One night Philippos left the tools scattered. The next day they had no mood.</p>
          <p class="mt-2">Wisebot looked at the room. «Does your environment help you or sabotage you?»</p>
          <p class="mt-2">That same night, Eleftheria prepared the table beforehand. The next day, they started without thinking.</p>
          <p class="mt-2 font-bold text-white">They didn't change character. They changed the space.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-red-400 mb-3 tracking-wide">07. THE CHAIN</h3>
          <p>The third week, they got tired. They missed one day. Alexandra panicked. «The chain broke!»</p>
          <p class="mt-2">Wisebot smiled. «One day doesn't change you. Two consecutive ones change you.»</p>
          <p class="mt-2">The next day they returned. Not perfectly. But present.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-cyan-300 mb-3 tracking-wide">08. 1% BETTER</h3>
          <p>Slowly, the game got better. Not because they made huge leaps. But because every day it was 1% better.</p>
          <p class="mt-2">The cards became clearer. The rules simpler. The button… finally worked.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">09. THE REALIZATION</h3>
          <p>Sparken came down low. «When did you change?» he asked. Philippos thought.</p>
          <p class="mt-2">There was no “big moment”. There were small ones. Every afternoon. Two minutes. Again and again.</p>
          <p class="mt-4 text-purple-200">Wisebot stood before them. «You didn't win because you wanted it a lot. You won because you made it easy. You made it small. You made it daily.»</p>
        </section>

        <div class="mt-12 bg-blue-950/60 p-8 rounded-3xl border-2 border-dashed border-blue-500/40 shadow-xl">
           <h4 class="text-xl font-black text-blue-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             📆 JOURNAL: BUILDING HABITS
           </h4>
           <div class="space-y-6 text-gray-300">
             <div>
               <h5 class="text-blue-200 font-bold mb-2">1. THE EXCUSE</h5>
               <p class="text-sm mb-2 opacity-80">What do you tell yourself when you don't want to start?</p>
               <div class="w-full h-10 bg-black/30 rounded border border-blue-500/20"></div>
             </div>
             <div>
               <h5 class="text-blue-200 font-bold mb-2">2. THE ENVIRONMENT</h5>
               <p class="text-sm mb-2 opacity-80">What can you prepare beforehand to make it easier?</p>
               <div class="w-full h-10 bg-black/30 rounded border border-blue-500/20"></div>
             </div>
             <div>
                <h5 class="text-blue-200 font-bold mb-2">3. THE PROMISE</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-blue-500/10">
                 <p class="text-sm">«I will do it for 2 minutes every day, even if I don't feel like it.»</p>
               </div>
             </div>
           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-blue-950/80 p-8 rounded-3xl border border-blue-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-blue-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Motivation is unreliable. Habit is loyal.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             Help children build <strong class="text-blue-200">systems</strong> (e.g. always after dinner, always at the same desk) instead of waiting for "inspiration". Consistency beats intensity.
           </p>
        </div>
      </div>
      `
    }
  },
  {
    id: 24,
    title: { el: "ΤΟ ΑΓΟΡΙ ΠΟΥ ΠΙΣΤΕΥΕ ΟΤΙ ΔΕΝ ΗΤΑΝ ΕΞΥΠΝΟ", en: "THE BOY WHO BELIEVED HE WASN'T SMART" },
    theme: { el: "ΜΑΘΗΣΗ", en: "LEARNING" },
    stepLabel: { el: "WISEBOT & ΜΑΘΗΣΗ", en: "WISEBOT & LEARNING" },
    author: "Wisebot & Sparken",
    cover: IMG_WISEBOT,
    videoUrl: "",
    description: { 
      el: "Ο Φίλιππος πίστευε ότι δεν έχει μνήμη. Η Wisebot του έδειξε ότι το μυαλό δεν είναι κουβάς που γεμίζει, αλλά μυς που γυμνάζεται.", 
      en: "Philippos believed he had no memory. Wisebot showed him that the mind is not a bucket to fill, but a muscle to train." 
    },
    meaning: { 
      el: "Το όριο σου δεν είναι το μυαλό σου. Είναι το πόσο μικρό το κρατάς.", 
      en: "Your limit is not your mind. It's how small you keep it." 
    },
    xp: 440,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        <div class="relative bg-gradient-to-r from-purple-900/60 to-indigo-900/60 p-8 rounded-2xl border border-purple-500/30 text-center italic text-purple-200 shadow-lg">
           «Το πρόβλημα δεν είναι η μνήμη σου. Είναι η ιστορία που της λες.»
        </div>
        <section>
          <h3 class="text-2xl font-black text-purple-400 mb-3 tracking-wide">01. Η ΑΠΟΦΑΣΗ</h3>
          <p>Ο Φίλιππος δεν σήκωνε συχνά το χέρι του στην τάξη. Δεν ήταν ότι δεν ήξερε. Ήταν ότι είχε αποφασίσει.</p>
          <p class="mt-2">«Δεν είμαι καλός στα μαθήματα.» Το είχε πει τόσες φορές, που είχε γίνει αλήθεια.</p>
          <p class="mt-2">Κάθε φορά που δυσκολευόταν, το μυαλό του ψιθύριζε: “Σου το είπα.”</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-indigo-300 mb-3 tracking-wide">02. Η ΠΑΡΑΙΤΗΣΗ</h3>
          <p>Ένα απόγευμα, η Αλεξάνδρα τον βρήκε να κοιτά το βιβλίο αμίλητος.</p>
          <p class="mt-2">«Διάβαζες;»</p>
          <p class="mt-2">«Προσπάθησα. Δεν μένει τίποτα.»</p>
          <p class="mt-4">Η Wisebot, από το ράφι, άνοιξε τα φτερά της. «Δεν μένει τίποτα… ή δεν ξέρεις πώς να το κρατήσεις;»</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">03. Η ΙΣΤΟΡΙΑ ΤΗΣ ΜΝΗΜΗΣ</h3>
          <p>Ο Φίλιππος σήκωσε το βλέμμα. «Δεν είμαι από αυτούς που θυμούνται.»</p>
          <p class="mt-2">Η Wisebot κατέβηκε στο γραφείο. <strong class="text-purple-200">«Το πρόβλημα δεν είναι η μνήμη σου. Είναι η ιστορία που της λες.»</strong></p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-fuchsia-400 mb-3 tracking-wide">04. ΤΟ ΤΕΣΤ</h3>
          <p>Την επόμενη μέρα, η Wisebot τους έβαλε μια δοκιμή. «Θυμηθείτε 10 τυχαίες λέξεις.»</p>
          <p class="mt-2">Ο Φίλιππος γέλασε. «Αδύνατο.»</p>
          <p class="mt-2">Η Wisebot δεν έδωσε λίστα. Έδωσε ιστορία. Μια γάτα που οδηγούσε αυτοκίνητο πάνω σε παγωτό, κρατώντας ένα ρολόι που τραγουδούσε.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-yellow-400 mb-3 tracking-wide">05. Η ΕΙΚΟΝΑ</h3>
          <p>Ο Φίλιππος θυμήθηκε και τις 10. Έμεινε σιωπηλός.</p>
          <p class="mt-2">«Ο εγκέφαλος θυμάται εικόνες. Όχι βαρετές λέξεις.» είπε η Wisebot.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-blue-300 mb-3 tracking-wide">06. Η ΕΣΤΙΑΣΗ</h3>
          <p>Στο σχολείο, η Ελευθερία διάβαζε για ώρες. Ο Φίλιππος διάβαζε 10 λεπτά και κουραζόταν.</p>
          <p class="mt-2">Η Wisebot παρατήρησε. «Δεν χρειάζεστε περισσότερες ώρες. Χρειάζεστε καλύτερη εστίαση.»</p>
          <p class="mt-2">Έκλεισαν κινητά. Έβαλαν χρονοδιακόπτη 25 λεπτών. Μετά διάλειμμα. Ξαφνικά, το μυαλό δεν έτρεχε παντού.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-green-400 mb-3 tracking-wide">07. Η ΕΡΩΤΗΣΗ</h3>
          <p>Μια μέρα, ο δάσκαλος ρώτησε κάτι δύσκολο. Η καρδιά του Φίλιππου χτύπησε δυνατά. Παλιά θα σιωπούσε.</p>
          <p class="mt-2">Αλλά κάτι είχε αλλάξει. Δεν ρώτησε «Μπορώ;» Ρώτησε μέσα του: <strong class="text-white">«Πώς μπορώ;»</strong></p>
          <p class="mt-2">Σήκωσε το χέρι. Η απάντηση δεν ήταν τέλεια. Αλλά δεν ήταν σιωπή.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-orange-400 mb-3 tracking-wide">08. ΤΟ ΣΩΜΑ</h3>
          <p>Σιγά σιγά, πρόσεξε κάτι. Όταν κοιμόταν καλά, θυμόταν καλύτερα. Όταν έτρωγε πρόχειρα, το μυαλό του ήταν βαρύ. Όταν κουνιόταν, ένιωθε πιο καθαρός.</p>
          <p class="mt-2 font-bold text-white">Δεν ήταν χαζός. Ήταν κουρασμένος.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-purple-400 mb-3 tracking-wide">09. Η ΤΑΥΤΟΤΗΤΑ</h3>
          <p>Ένα βράδυ, είπε: «Δεν είμαι καλός στα μαθηματικά.»</p>
          <p class="mt-2">Η Wisebot τον κοίταξε. «Είσαι παιδί που <em>μαθαίνει</em> μαθηματικά.»</p>
          <p class="mt-2">Μικρή διαφορά. Τεράστια αλλαγή.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-red-500 mb-3 tracking-wide">10. ΤΟ ΟΡΙΟ</h3>
          <p>Ο Sparken κατέβηκε αργά. «Το όριο σου δεν είναι το μυαλό σου. Είναι το πόσο μικρό το κρατάς.»</p>
          <p class="mt-4">Ο Φίλιππος δεν έγινε ξαφνικά ιδιοφυΐα. Αλλά σταμάτησε να αυτοσαμποτάρεται.</p>
          <p class="mt-2">Άρχισε να: Κάνει ερωτήσεις. Μαθαίνει με εικόνες. Διαβάζει με σκοπό. Προστατεύει την προσοχή του.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">11. Η ΝΙΚΗ</h3>
          <p>Και κάθε μικρή επιτυχία ήταν ψήφος. Ψήφος για την ταυτότητα: “Είμαι παιδί που μπορεί.”</p>
          <p class="mt-2">Στο τέλος της χρονιάς, δεν είχε τους υψηλότερους βαθμούς. Αλλά είχε κάτι πιο επικίνδυνο. <strong class="text-purple-200">Δεν φοβόταν να μάθει.</strong></p>
          <p class="mt-4">Η Wisebot στάθηκε μπροστά του. «Το μυαλό σου δεν είναι κλειδωμένο. Απλώς κανείς δεν σου έδωσε το κλειδί.»</p>
        </section>

        <div class="mt-12 bg-purple-950/60 p-8 rounded-3xl border-2 border-dashed border-purple-500/40 shadow-xl">
           <h4 class="text-xl font-black text-purple-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             🧠 JOURNAL: Η ΜΑΘΗΣΗ ΜΟΥ
           </h4>
           <div class="space-y-6 text-gray-300">
             <div>
               <h5 class="text-purple-200 font-bold mb-2">1. Η ΤΑΜΠΕΛΑ</h5>
               <p class="text-sm mb-2 opacity-80">Τι λες για τον εαυτό σου; (π.χ. "Δεν το 'χω με...")</p>
               <div class="w-full h-10 bg-black/30 rounded border border-purple-500/20"></div>
             </div>
             <div>
               <h5 class="text-purple-200 font-bold mb-2">2. ΤΟ ΚΟΛΠΟ</h5>
               <p class="text-sm mb-2 opacity-80">Πώς μπορείς να το κάνεις πιο αστείο ή εικόνα;</p>
               <div class="w-full h-10 bg-black/30 rounded border border-purple-500/20"></div>
             </div>
             <div>
                <h5 class="text-purple-200 font-bold mb-2">3. Ο ΝΕΟΣ ΕΑΥΤΟΣ</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-purple-500/10">
                 <p class="text-sm">«Δεν είμαι κακός σε αυτό.</p>
                 <p class="text-sm">Είμαι κάποιος που το μαθαίνει.»</p>
               </div>
             </div>
           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-purple-950/80 p-8 rounded-3xl border border-purple-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-purple-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Η νοοτροπία ανάπτυξης (Growth Mindset) είναι το κλειδί.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             Αντί να πούμε "δεν μπορείς", λέμε "δεν μπορείς <strong class="text-purple-300">ακόμα</strong>". Διδάξτε τους *πώς* να μαθαίνουν (εστίαση, εικόνες, διάλειμμα) και όχι μόνο *τι* να μαθαίνουν.
           </p>
        </div>
      </div>
      `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        <div class="relative bg-gradient-to-r from-purple-900/60 to-indigo-900/60 p-8 rounded-2xl border border-purple-500/30 text-center italic text-purple-200 shadow-lg">
           «The problem isn't your memory. It's the story you tell it.»
        </div>
        <section>
          <h3 class="text-2xl font-black text-purple-400 mb-3 tracking-wide">01. THE DECISION</h3>
          <p>Philippos didn't often raise his hand in class. It wasn't that he didn't know. It was that he had decided.</p>
          <p class="mt-2">«I'm not good at school.» He had said it so many times, it had become true.</p>
          <p class="mt-2">Every time he struggled, his mind whispered: “I told you so.”</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-indigo-300 mb-3 tracking-wide">02. GIVING UP</h3>
          <p>One afternoon, Alexandra found him staring at the book silently.</p>
          <p class="mt-2">«Were you reading?»</p>
          <p class="mt-2">«I tried. Nothing sticks.»</p>
          <p class="mt-4">Wisebot, from the shelf, opened her wings. «Nothing sticks… or you don't know how to keep it?»</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">03. THE STORY OF MEMORY</h3>
          <p>Philippos looked up. «I'm not one of those who remember.»</p>
          <p class="mt-2">Wisebot came down to the desk. <strong class="text-purple-200">«The problem isn't your memory. It's the story you tell it.»</strong></p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-fuchsia-400 mb-3 tracking-wide">04. THE TEST</h3>
          <p>The next day, Wisebot gave them a test. «Remember 10 random words.»</p>
          <p class="mt-2">Philippos laughed. «Impossible.»</p>
          <p class="mt-2">Wisebot didn't give a list. She gave a story. A cat driving a car over ice cream, holding a singing clock.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-yellow-400 mb-3 tracking-wide">05. THE IMAGE</h3>
          <p>Philippos remembered all 10. He remained silent.</p>
          <p class="mt-2">«The brain remembers images. Not boring words.» said Wisebot.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-blue-300 mb-3 tracking-wide">06. THE FOCUS</h3>
          <p>At school, Eleftheria read for hours. Philippos read for 10 minutes and got tired.</p>
          <p class="mt-2">Wisebot observed. «You don't need more hours. You need better focus.»</p>
          <p class="mt-2">They turned off phones. Set a 25-minute timer. Then a break. Suddenly, the mind wasn't running everywhere.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-green-400 mb-3 tracking-wide">07. THE QUESTION</h3>
          <p>One day, the teacher asked something difficult. Philippos's heart beat fast. Before, he would have stayed silent.</p>
          <p class="mt-2">But something had changed. He didn't ask «Can I?» He asked inside: <strong class="text-white">«How can I?»</strong></p>
          <p class="mt-2">He raised his hand. The answer wasn't perfect. But it wasn't silence.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-orange-400 mb-3 tracking-wide">08. THE BODY</h3>
          <p>Slowly, he noticed something. When he slept well, he remembered better. When he ate junk, his mind was heavy. When he moved, he felt clearer.</p>
          <p class="mt-2 font-bold text-white">He wasn't stupid. He was tired.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-purple-400 mb-3 tracking-wide">09. THE IDENTITY</h3>
          <p>One night, he said: «I'm not good at math.»</p>
          <p class="mt-2">Wisebot looked at him. «You are a child who is <em>learning</em> math.»</p>
          <p class="mt-2">Small difference. Huge change.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-red-500 mb-3 tracking-wide">10. THE LIMIT</h3>
          <p>Sparken came down slowly. «Your limit is not your mind. It's how small you keep it.»</p>
          <p class="mt-4">Philippos didn't suddenly become a genius. But he stopped sabotaging himself.</p>
          <p class="mt-2">He started to: Ask questions. Learn with images. Read with purpose. Protect his attention.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">11. THE VICTORY</h3>
          <p>And every small success was a vote. A vote for the identity: “I am a child who can.”</p>
          <p class="mt-2">At the end of the year, he didn't have the highest grades. But he had something more dangerous. <strong class="text-purple-200">He wasn't afraid to learn.</strong></p>
          <p class="mt-4">Wisebot stood before him. «Your mind is not locked. Simply no one gave you the key.»</p>
        </section>

        <div class="mt-12 bg-purple-950/60 p-8 rounded-3xl border-2 border-dashed border-purple-500/40 shadow-xl">
           <h4 class="text-xl font-black text-purple-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             🧠 JOURNAL: MY LEARNING
           </h4>
           <div class="space-y-6 text-gray-300">
             <div>
               <h5 class="text-purple-200 font-bold mb-2">1. THE LABEL</h5>
               <p class="text-sm mb-2 opacity-80">What do you say about yourself? (e.g. "I'm bad at...")</p>
               <div class="w-full h-10 bg-black/30 rounded border border-purple-500/20"></div>
             </div>
             <div>
               <h5 class="text-purple-200 font-bold mb-2">2. THE TRICK</h5>
               <p class="text-sm mb-2 opacity-80">How can you make it funnier or an image?</p>
               <div class="w-full h-10 bg-black/30 rounded border border-purple-500/20"></div>
             </div>
             <div>
                <h5 class="text-purple-200 font-bold mb-2">3. THE NEW SELF</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-purple-500/10">
                 <p class="text-sm">«I am not bad at this.</p>
                 <p class="text-sm">I am someone learning it.»</p>
               </div>
             </div>
           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-purple-950/80 p-8 rounded-3xl border border-purple-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-purple-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Growth Mindset is the key.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             Instead of saying "you can't", say "you can't <strong class="text-purple-300">yet</strong>". Teach them *how* to learn (focus, images, breaks) and not just *what* to learn.
           </p>
        </div>
      </div>
      `
    }
  },
  {
    id: 25,
    title: { el: "ΤΟ ΠΟΥΓΚΙ ΠΟΥ ΕΜΑΘΕ ΝΑ ΜΕΝΕΙ ΓΕΜΑΤΟ", en: "THE POUCH THAT LEARNED TO STAY FULL" },
    theme: { el: "ΟΙΚΟΝΟΜΙΑ", en: "FINANCE" },
    stepLabel: { el: "WISEBOT & ΟΙΚΟΝΟΜΙΑ", en: "WISEBOT & FINANCE" },
    author: "Wisebot & Sparken",
    cover: IMG_WISEBOT,
    videoUrl: "",
    description: { 
      el: "Ο Φίλιππος κέρδισε χρήματα, αλλά χάθηκαν αμέσως. Η Wisebot του μαθαίνει ότι το πορτοφόλι γεμίζει με συνήθειες, όχι με τύχη.", 
      en: "Philippos earned money, but it vanished instantly. Wisebot teaches him that the wallet fills with habits, not luck." 
    },
    meaning: { 
      el: "Ο πλούτος δεν αρχίζει στο πουγκί. Αρχίζει στη συνήθεια.", 
      en: "Wealth doesn't start in the pouch. It starts in the habit." 
    },
    xp: 460,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        <div class="relative bg-gradient-to-r from-amber-900/60 to-yellow-900/60 p-8 rounded-2xl border border-amber-500/30 text-center italic text-amber-200 shadow-lg">
           «Κάθε νόμισμα που περνά από τα χέρια σου, είναι υπηρέτης. Ή αφέντης.»
        </div>
        <section>
          <h3 class="text-2xl font-black text-amber-400 mb-3 tracking-wide">01. ΤΟ ΚΕΡΔΟΣ ΚΑΙ ΤΟ ΚΕΝΟ</h3>
          <p>Ο Φίλιππος έτρεξε στο δωμάτιο κρατώντας χαρτονομίσματα. «Τα κατάφερα! Πούλησα τρία παιχνίδια!»</p>
          <p class="mt-2">Η Αλεξάνδρα χειροκρότησε. Η Ελευθερία χαμογέλασε.</p>
          <p class="mt-2">Μέχρι το βράδυ, ο ενθουσιασμός είχε γίνει παραγγελία online. Μέχρι την επόμενη εβδομάδα… δεν είχε μείνει τίποτα.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">02. ΤΟ ΑΔΕΙΟ ΜΕΛΛΟΝ</h3>
          <p>Η Wisebot δεν μίλησε αμέσως. Τους άφησε να νιώσουν το κενό.</p>
          <p class="mt-2">Ο Φίλιππος κοίταξε το πορτοφόλι του. «Δουλεύω. Κερδίζω. Και πάλι είμαι στο μηδέν.»</p>
          <p class="mt-4">Η Wisebot άφησε ένα μικρό πουγκί πάνω στο τραπέζι. «Αυτό είναι το μέλλον σου.» <strong>Άδειο.</strong></p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-yellow-300 mb-3 tracking-wide">03. ΥΠΗΡΕΤΗΣ Η ΑΦΕΝΤΗΣ;</h3>
          <p>«Κάθε νόμισμα που περνά από τα χέρια σου,» είπε, «είναι υπηρέτης. Ή αφέντης.»</p>
          <p class="mt-2">Η Αλεξάνδρα έσκυψε μπροστά. «Πώς γίνεται υπηρέτης;»</p>
          <p class="mt-2 text-white font-bold">Η Wisebot απάντησε απλά: «Τον κρατάς πρώτα.»</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-emerald-400 mb-3 tracking-wide">04. Η ΠΡΩΤΗ ΑΠΟΤΑΜΙΕΥΣΗ</h3>
          <p>Την επόμενη φορά που κέρδισαν χρήματα, η Ελευθερία χώρισε το ποσό. «Αυτό είναι για εμάς. Δεν αγγίζεται.»</p>
          <p class="mt-2">Ο Φίλιππος διαμαρτυρήθηκε. «Είναι λίγο!»</p>
          <p class="mt-2">Η Wisebot τον κοίταξε ήρεμα. <strong class="text-amber-200">«Το λίγο που μένει γίνεται πολύ. Το πολύ που φεύγει γίνεται τίποτα.»</strong></p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-red-400 mb-3 tracking-wide">05. Ο SPARKEN</h3>
          <p>Οι εβδομάδες πέρασαν. Το πουγκί άρχισε να βαραίνει. Όχι αρκετά για να εντυπωσιάσει. Αλλά αρκετά για να νιώθεις ασφάλεια.</p>
          <p class="mt-4">Και τότε ο Sparken εμφανίστηκε. «Ο χρυσός που κοιμάται, δεν μεγαλώνει.»</p>
          <p class="mt-2">Τα παιδιά κοίταξαν μπερδεμένα. Η Wisebot εξήγησε: «Τα χρήματα που απλώς αποθηκεύεις είναι σιωπηλά. Τα χρήματα που επενδύεις δουλεύουν.»</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-blue-300 mb-3 tracking-wide">06. Η ΠΑΓΙΔΑ</h3>
          <p>Δεν έτρεξαν να ρισκάρουν. Ρώτησαν. Έμαθαν. Συζήτησαν με ανθρώπους που είχαν ήδη περπατήσει τον δρόμο.</p>
          <p class="mt-2">Μια μέρα, ένας γνωστός τους είπε: «Βάλτε όλα τα λεφτά εδώ. Σίγουρη ευκαιρία.»</p>
          <p class="mt-2">Ο Φίλιππος ένιωσε τον πειρασμό. Η Wisebot ρώτησε μόνο: «Καταλαβαίνεις πώς λειτουργεί;»</p>
          <p class="mt-2 text-white font-bold">Όχι. Δεν το έκαναν. Το πουγκί έμεινε ασφαλές.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">07. ΤΟ ΑΠΟΤΕΛΕΣΜΑ</h3>
          <p>Οι μήνες έγιναν χρόνος. Το κεφάλαιο μεγάλωσε. Και μαζί του, η ηρεμία.</p>
          <p class="mt-2">Δεν αγόραζαν πράγματα για να φαίνονται πλούσιοι. Χτίζαν για να γίνουν σταθεροί. Δεν ζούσαν για το σήμερα μόνο. Σκέφτονταν τον μελλοντικό εαυτό τους.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-amber-500 mb-3 tracking-wide">08. Η ΣΥΝΗΘΕΙΑ</h3>
          <p>Ένα βράδυ, ο Φίλιππος είπε: «Δεν είναι τα χρήματα που άλλαξαν. Εμείς αλλάξαμε.»</p>
          <p class="mt-2">Η Wisebot έγνεψε. «Ο πλούτος δεν αρχίζει στο πουγκί. Αρχίζει στη συνήθεια.»</p>
          <p class="mt-4 font-bold text-white">Στο τέλος, το πουγκί δεν ήταν απλώς γεμάτο. Ήταν προστατευμένο. Πολλαπλασιαζόμενο. Σταθερό.</p>
          <p class="mt-2 text-amber-200">Δεν φοβόντουσαν πια τα χρήματα. Τα διοικούσαν.</p>
        </section>

        <div class="mt-12 bg-amber-950/60 p-8 rounded-3xl border-2 border-dashed border-amber-500/40 shadow-xl">
           <h4 class="text-xl font-black text-amber-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             💰 JOURNAL: ΤΟ ΔΙΚΟ ΜΟΥ ΠΟΥΓΚΙ
           </h4>
           <div class="space-y-6 text-gray-300">
             <div>
               <h5 class="text-amber-200 font-bold mb-2">1. ΤΑ ΕΞΟΔΑ</h5>
               <p class="text-sm mb-2 opacity-80">Τι αγοράζεις συχνά που ίσως δεν χρειάζεσαι πραγματικά;</p>
               <div class="w-full h-10 bg-black/30 rounded border border-amber-500/20"></div>
             </div>
             <div>
               <h5 class="text-amber-200 font-bold mb-2">2. Ο ΣΤΟΧΟΣ</h5>
               <p class="text-sm mb-2 opacity-80">Για ποιο μεγάλο πράγμα θα ήθελες να μαζέψεις χρήματα;</p>
               <div class="w-full h-10 bg-black/30 rounded border border-amber-500/20"></div>
             </div>
             <div>
                <h5 class="text-amber-200 font-bold mb-2">3. Η ΣΥΝΗΘΕΙΑ</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-amber-500/10">
                 <p class="text-sm">«Από ό,τι κερδίζω, θα κρατάω πάντα το _____»</p>
               </div>
             </div>
           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-amber-950/80 p-8 rounded-3xl border border-amber-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-amber-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Η οικονομική παιδεία είναι συνήθεια, όχι μαθηματικά.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             Μάθετε στα παιδιά τον κανόνα: <strong class="text-amber-200">"Πληρώνω τον εαυτό μου πρώτα"</strong> (αποταμίευση πριν τα έξοδα). Έτσι χτίζουν νοοτροπία αφθονίας και ασφάλειας.
           </p>
        </div>
      </div>
      `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        <div class="relative bg-gradient-to-r from-amber-900/60 to-yellow-900/60 p-8 rounded-2xl border border-amber-500/30 text-center italic text-amber-200 shadow-lg">
           «Every coin that passes through your hands is a servant. Or a master.»
        </div>
        <section>
          <h3 class="text-2xl font-black text-amber-400 mb-3 tracking-wide">01. THE GAIN AND THE VOID</h3>
          <p>Philippos ran into the room holding banknotes. "I did it! I sold three toys!"</p>
          <p class="mt-2">Alexandra applauded. Eleftheria smiled.</p>
          <p class="mt-2">By evening, the excitement had become an online order. By next week... nothing was left.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">02. THE EMPTY FUTURE</h3>
          <p>Wisebot didn't speak immediately. She let them feel the void.</p>
          <p class="mt-2">Philippos looked at his wallet. "I work. I win. And I'm at zero again."</p>
          <p class="mt-4">Wisebot left a small pouch on the table. "This is your future." <strong>Empty.</strong></p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-yellow-300 mb-3 tracking-wide">03. SERVANT OR MASTER?</h3>
          <p>"Every coin that passes through your hands," she said, "is a servant. Or a master."</p>
          <p class="mt-2">Alexandra leaned forward. "How does it become a servant?"</p>
          <p class="mt-2 text-white font-bold">Wisebot answered simply: "You keep it first."</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-emerald-400 mb-3 tracking-wide">04. THE FIRST SAVING</h3>
          <p>The next time they earned money, Eleftheria separated the amount. "This is for us. Untouchable."</p>
          <p class="mt-2">Philippos protested. "It's too little!"</p>
          <p class="mt-2">Wisebot looked at him calmly. <strong class="text-amber-200">"The little that stays becomes much. The much that leaves becomes nothing."</strong></p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-red-400 mb-3 tracking-wide">05. SPARKEN</h3>
          <p>Weeks passed. The pouch started to get heavy. Not enough to impress. But enough to feel safe.</p>
          <p class="mt-4">And then Sparken appeared. "Gold that sleeps, doesn't grow."</p>
          <p class="mt-2">The kids looked confused. Wisebot explained: "Money you just store is silent. Money you invest works."</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-blue-300 mb-3 tracking-wide">06. THE TRAP</h3>
          <p>They didn't run to risk. They asked. They learned. They discussed with people who walked the path.</p>
          <p class="mt-2">One day, an acquaintance told them: "Put all money here. Sure opportunity."</p>
          <p class="mt-2">Philippos felt the temptation. Wisebot asked only: "Do you understand how it works?"</p>
          <p class="mt-2 text-white font-bold">No. They didn't. The pouch remained safe.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">07. THE RESULT</h3>
          <p>Months became time. Capital grew. And with it, calmness.</p>
          <p class="mt-2">They didn't buy things to look rich. They built to become stable. They didn't live for today only. They thought of their future selves.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-amber-500 mb-3 tracking-wide">08. THE HABIT</h3>
          <p>One night, Philippos said: "It's not the money that changed. We changed."</p>
          <p class="mt-2">Wisebot nodded. "Wealth doesn't start in the pouch. It starts in the habit."</p>
          <p class="mt-4 font-bold text-white">In the end, the pouch wasn't just full. It was protected. Multiplying. Stable.</p>
          <p class="mt-2 text-amber-200">They didn't fear money anymore. They commanded it.</p>
        </section>

        <div class="mt-12 bg-amber-950/60 p-8 rounded-3xl border-2 border-dashed border-amber-500/40 shadow-xl">
           <h4 class="text-xl font-black text-amber-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             💰 JOURNAL: MY POUCH
           </h4>
           <div class="space-y-6 text-gray-300">
             <div>
               <h5 class="text-amber-200 font-bold mb-2">1. THE SPENDS</h5>
               <p class="text-sm mb-2 opacity-80">What do you buy often that you might not really need?</p>
               <div class="w-full h-10 bg-black/30 rounded border border-amber-500/20"></div>
             </div>
             <div>
               <h5 class="text-amber-200 font-bold mb-2">2. THE GOAL</h5>
               <p class="text-sm mb-2 opacity-80">What big thing would you like to save money for?</p>
               <div class="w-full h-10 bg-black/30 rounded border border-amber-500/20"></div>
             </div>
             <div>
                <h5 class="text-amber-200 font-bold mb-2">3. THE HABIT</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-amber-500/10">
                 <p class="text-sm">«From whatever I earn, I will always keep _____»</p>
               </div>
             </div>
           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-amber-950/80 p-8 rounded-3xl border border-amber-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-amber-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Financial literacy is a habit, not math.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             Teach children the rule: <strong class="text-amber-200">"Pay yourself first"</strong> (saving before spending). This builds an abundance and security mindset.
           </p>
        </div>
      </div>
      `
    }
  },
  {
    id: 26,
    title: { el: "Η ΦΛΟΓΑ ΠΟΥ ΔΕΝ ΕΣΒΗΝΕ", en: "THE FLAME THAT DIDN'T GO OUT" },
    theme: { el: "ΠΙΣΤΗ & ΟΡΑΜΑ", en: "FAITH & VISION" },
    stepLabel: { el: "WISEBOT & SPARKEN", en: "WISEBOT & SPARKEN" },
    author: "Wisebot & Sparken",
    cover: IMG_SPARKEN,
    videoUrl: "",
    description: { 
      el: "Στην άκρη του δωματίου υπήρχε μια μικρή φλόγα. Κανείς δεν την άναψε, αλλά κανείς δεν μπορούσε να τη σβήσει. Μια ιστορία για το τι είναι αυτό που θέλεις περισσότερο.", 
      en: "In the corner of the room there was a small flame. No one lit it, but no one could put it out. A story about what you want most." 
    },
    meaning: { 
      el: "Ο πλούτος δεν είναι μόνο χρήμα. Είναι η δύναμη να κρατάς τη φλόγα ζωντανή όταν όλα γύρω σου θέλουν να τη σβήσουν.", 
      en: "Wealth is not just money. It is the power to keep the flame alive when everything around you wants to extinguish it." 
    },
    xp: 500,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        <div class="relative bg-gradient-to-r from-red-900/60 to-orange-900/60 p-8 rounded-2xl border border-red-500/30 text-center italic text-red-200 shadow-lg">
           «Ο φόβος δεν είναι εχθρός. Είναι δοκιμασία.»
        </div>
        <section>
          <h3 class="text-2xl font-black text-orange-400 mb-3 tracking-wide">01. Η ΜΙΚΡΗ ΦΛΟΓΑ</h3>
          <p>Στην άκρη του δωματίου, εκεί που το φως δεν έφτανε πάντα, καθόταν μια μικρή φλόγα.</p>
          <p class="mt-2">Κανείς δεν την είχε ανάψει. Κανείς δεν θυμόταν πότε εμφανίστηκε. Αλλά υπήρχε.</p>
          <p class="mt-2">Η Αλεξάνδρα την είδε πρώτη. «Τι είναι αυτό;»</p>
          <p class="mt-4">Η Wisebot δεν απάντησε αμέσως. «Είναι αυτό που θέλεις περισσότερο.»</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">02. Η ΤΡΟΦΗ ΤΗΣ ΑΜΦΙΒΟΛΙΑΣ</h3>
          <p>Ο Φίλιππος πλησίασε. «Και γιατί είναι τόσο μικρή;»</p>
          <p class="mt-2">«Γιατί την ταΐζεις με αμφιβολία,» είπε η Wisebot.</p>
          <p class="mt-2">Η φλόγα τρεμόπαιξε. Κάθε φορά που έλεγαν «Ίσως δεν γίνεται» μίκραινε.</p>
          <p class="mt-2 text-white">Κάθε φορά που έλεγαν «Θα προσπαθήσω ξανά» δυνάμωνε.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-yellow-300 mb-3 tracking-wide">03. Η ΑΠΟΦΑΣΗ</h3>
          <p>Η Ελευθερία ρώτησε: «Πώς μεγαλώνει;»</p>
          <p class="mt-2">Η Wisebot ψιθύρισε: «Με απόφαση.»</p>
          <p class="mt-2">Όχι με ευχή. Όχι με “θα δούμε”. Με καθαρό, γραμμένο, ειπωμένο δυνατά:</p>
          <p class="mt-2 text-white font-bold">«Αυτό θέλω.»</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-purple-400 mb-3 tracking-wide">04. ΟΙ ΣΚΙΕΣ</h3>
          <p>Η φλόγα άρχισε να φωτίζει τον τοίχο. Αλλά τη νύχτα ήρθαν οι σκιές.</p>
          <p class="mt-2">Η σκιά της αποτυχίας. Η σκιά της κριτικής. Η σκιά της φτώχειας.</p>
          <p class="mt-2">Ψιθύριζαν: «Κι αν χάσεις;» «Κι αν γελάσουν;» «Κι αν δεν είσαι αρκετός;»</p>
          <p class="mt-4">Ο Φίλιππος έκανε πίσω. Η φλόγα λύγισε.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-red-500 mb-3 tracking-wide">05. Η ΔΟΚΙΜΑΣΙΑ</h3>
          <p>Η Wisebot στάθηκε ανάμεσα στις σκιές. <strong class="text-red-200">«Ο φόβος δεν είναι εχθρός. Είναι δοκιμασία.»</strong></p>
          <p class="mt-2">Η Αλεξάνδρα πλησίασε τη φλόγα. «Αν καώ;»</p>
          <p class="mt-2">«Αν δεν πλησιάσεις ποτέ, θα παγώσεις,» απάντησε η Wisebot.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">06. Η ΑΛΛΑΓΗ</h3>
          <p>Τα παιδιά άρχισαν να μιλούν κάθε μέρα στη φλόγα. Διάβαζαν δυνατά το όνειρό τους. Το έβλεπαν σαν να είχε ήδη συμβεί.</p>
          <p class="mt-2">Όχι σαν φαντασία. Σαν βεβαιότητα.</p>
          <p class="mt-4">Και κάτι περίεργο συνέβη. Η φλόγα δεν ήταν πια στο δωμάτιο. Ήταν μέσα τους.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-orange-400 mb-3 tracking-wide">07. Ο ΣΠΟΡΟΣ</h3>
          <p>Ο Sparken κατέβηκε αθόρυβα. Τα φτερά του άνοιξαν τον ουρανό της σκέψης τους.</p>
          <p class="mt-2">«Η σκέψη είναι σπόρος. Η πίστη είναι νερό. Η επιμονή είναι ήλιος.»</p>
          <p class="mt-2">«Και αν η γη είναι σκληρή;» ρώτησε η Ελευθερία.</p>
          <p class="mt-2 text-white font-bold">«Τότε ρίζωσε πιο βαθιά.»</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">08. Η ΕΠΙΜΟΝΗ</h3>
          <p>Υπήρξαν μέρες που τίποτα δεν άλλαζε. Η πρόοδος αόρατη. Οι κόποι βαριοί.</p>
          <p class="mt-2">Αλλά δεν σταμάτησαν. Δεν φώναζαν. Δεν έκαναν θόρυβο. Έμεναν.</p>
          <p class="mt-2">Κάθε μέρα μια μικρή πράξη. Κάθε μέρα μια ψήφος.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-yellow-500 mb-3 tracking-wide">09. ΤΟ ΦΩΣ</h3>
          <p>Η φλόγα έγινε φως. Όχι εκτυφλωτικό. Σταθερό. Οι σκιές δεν εξαφανίστηκαν. Απλώς δεν είχαν πια δύναμη.</p>
          <p class="mt-4">Μια μέρα, ο Φίλιππος είπε: «Δεν ξέρω πότε ακριβώς άλλαξα.»</p>
          <p class="mt-2">Η Wisebot χαμογέλασε. «Δεν αλλάζεις σε μια στιγμή. Αλλάζεις όταν δεν εγκαταλείπεις.»</p>
          <p class="mt-4">Ο Sparken πέταξε ψηλά. «Οι περισσότεροι εύχονται. Οι λίγοι αποφασίζουν. Ακόμα λιγότεροι επιμένουν.»</p>
          <p class="mt-4 text-white font-bold">Η φλόγα δεν ήταν πια κάτι που έβλεπαν. Ήταν κάτι που κουβαλούσαν.</p>
          <p class="mt-2">Και τότε κατάλαβαν. Ο πλούτος δεν είναι μόνο χρήμα. Δεν είναι μόνο επιτυχία. Είναι η δύναμη να κρατάς τη φλόγα ζωντανή όταν όλα γύρω σου θέλουν να τη σβήσουν.</p>
        </section>

        <div class="mt-12 bg-red-950/60 p-8 rounded-3xl border-2 border-dashed border-red-500/40 shadow-xl">
           <h4 class="text-xl font-black text-red-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             🔥 JOURNAL: Η ΦΛΟΓΑ ΜΟΥ
           </h4>
           <div class="space-y-6 text-gray-300">
             <div>
               <h5 class="text-red-200 font-bold mb-2">1. ΤΟ ΟΝΕΙΡΟ</h5>
               <p class="text-sm mb-2 opacity-80">Τι είναι αυτό που θέλεις περισσότερο, αλλά φοβάσαι να το πεις;</p>
               <div class="w-full h-10 bg-black/30 rounded border border-red-500/20"></div>
             </div>
             <div>
               <h5 class="text-red-200 font-bold mb-2">2. Η ΑΜΦΙΒΟΛΙΑ</h5>
               <p class="text-sm mb-2 opacity-80">Ποια "σκιά" σου ψιθυρίζει ότι δεν μπορείς;</p>
               <div class="w-full h-10 bg-black/30 rounded border border-red-500/20"></div>
             </div>
             <div>
                <h5 class="text-red-200 font-bold mb-2">3. ΤΟ ΚΑΥΣΙΜΟ</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-red-500/10">
                 <p class="text-sm">«Σήμερα αποφασίζω να πιστέψω ότι __________»</p>
               </div>
             </div>
           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-red-950/80 p-8 rounded-3xl border border-red-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-red-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Πίστη και Όραμα.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             Μάθετε στα παιδιά να χρησιμοποιούν θετικές δηλώσεις (affirmations) και να βλέπουν τον φόβο ως μέρος της διαδρομής, όχι ως το τέλος της. Η φλόγα μεγαλώνει όταν την προσέχουμε.
           </p>
        </div>
      </div>
      `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        <div class="relative bg-gradient-to-r from-red-900/60 to-orange-900/60 p-8 rounded-2xl border border-red-500/30 text-center italic text-red-200 shadow-lg">
           «Fear is not an enemy. It is a test.»
        </div>
        <section>
          <h3 class="text-2xl font-black text-orange-400 mb-3 tracking-wide">01. THE SMALL FLAME</h3>
          <p>In the corner of the room, where the light didn't always reach, sat a small flame.</p>
          <p class="mt-2">No one had lit it. No one remembered when it appeared. But it was there.</p>
          <p class="mt-2">Alexandra saw it first. "What is that?"</p>
          <p class="mt-4">Wisebot didn't answer immediately. "It is what you want most."</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">02. THE FOOD OF DOUBT</h3>
          <p>Philippos approached. "And why is it so small?"</p>
          <p class="mt-2">"Because you feed it with doubt," said Wisebot.</p>
          <p class="mt-2">The flame flickered. Every time they said "Maybe it can't happen" it shrank.</p>
          <p class="mt-2 text-white">Every time they said "I will try again" it grew stronger.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-yellow-300 mb-3 tracking-wide">03. THE DECISION</h3>
          <p>Eleftheria asked: "How does it grow?"</p>
          <p class="mt-2">Wisebot whispered: "With decision."</p>
          <p class="mt-2">Not with a wish. Not with "we'll see". With clear, written, spoken loudly:</p>
          <p class="mt-2 text-white font-bold">"I want this."</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-purple-400 mb-3 tracking-wide">04. THE SHADOWS</h3>
          <p>The flame began to light up the wall. But at night came the shadows.</p>
          <p class="mt-2">The shadow of failure. The shadow of criticism. The shadow of poverty.</p>
          <p class="mt-2">They whispered: "What if you lose?" "What if they laugh?" "What if you aren't enough?"</p>
          <p class="mt-4">Philippos stepped back. The flame bent.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-red-500 mb-3 tracking-wide">05. THE TEST</h3>
          <p>Wisebot stood among the shadows. <strong class="text-red-200">"Fear is not an enemy. It is a test."</strong></p>
          <p class="mt-2">Alexandra approached the flame. "What if I get burned?"</p>
          <p class="mt-2">"If you never approach, you will freeze," answered Wisebot.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">06. THE CHANGE</h3>
          <p>The children started talking to the flame every day. They read their dream aloud. They saw it as if it had already happened.</p>
          <p class="mt-2">Not as imagination. As certainty.</p>
          <p class="mt-4">And something strange happened. The flame was no longer in the room. It was inside them.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-orange-400 mb-3 tracking-wide">07. THE SEED</h3>
          <p>Sparken came down silently. His wings opened the sky of their thought.</p>
          <p class="mt-2">"Thought is a seed. Faith is water. Persistence is sun."</p>
          <p class="mt-2">"And if the earth is hard?" asked Eleftheria.</p>
          <p class="mt-2 text-white font-bold">"Then root deeper."</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">08. PERSISTENCE</h3>
          <p>There were days when nothing changed. Progress invisible. Labors heavy.</p>
          <p class="mt-2">But they didn't stop. They didn't shout. They didn't make noise. They stayed.</p>
          <p class="mt-2">Every day a small act. Every day a vote.</p>
        </section>
        <section>
          <h3 class="text-2xl font-black text-yellow-500 mb-3 tracking-wide">09. THE LIGHT</h3>
          <p>The flame became light. Not blinding. Steady. The shadows didn't disappear. They just didn't have power anymore.</p>
          <p class="mt-4">One day, Philippos said: "I don't know exactly when I changed."</p>
          <p class="mt-2">Wisebot smiled. "You don't change in a moment. You change when you don't give up."</p>
          <p class="mt-4">Sparken flew high. "Most wish. Few decide. Even fewer persist."</p>
          <p class="mt-4 text-white font-bold">The flame was no longer something they saw. It was something they carried.</p>
          <p class="mt-2">And then they understood. Wealth is not just money. It is not just success. It is the power to keep the flame alive when everything around you wants to put it out.</p>
        </section>

        <div class="mt-12 bg-red-950/60 p-8 rounded-3xl border-2 border-dashed border-red-500/40 shadow-xl">
           <h4 class="text-xl font-black text-red-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             🔥 JOURNAL: MY FLAME
           </h4>
           <div class="space-y-6 text-gray-300">
             <div>
               <h5 class="text-red-200 font-bold mb-2">1. THE DREAM</h5>
               <p class="text-sm mb-2 opacity-80">What do you want most, but are afraid to say?</p>
               <div class="w-full h-10 bg-black/30 rounded border border-red-500/20"></div>
             </div>
             <div>
               <h5 class="text-red-200 font-bold mb-2">2. THE DOUBT</h5>
               <p class="text-sm mb-2 opacity-80">Which "shadow" whispers to you that you can't?</p>
               <div class="w-full h-10 bg-black/30 rounded border border-red-500/20"></div>
             </div>
             <div>
                <h5 class="text-red-200 font-bold mb-2">3. THE FUEL</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-red-500/10">
                 <p class="text-sm">«Today I decide to believe that __________»</p>
               </div>
             </div>
           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-red-950/80 p-8 rounded-3xl border border-red-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-red-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Faith and Vision.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             Teach children to use positive affirmations and see fear as part of the journey, not the end of it. The flame grows when we tend to it.
           </p>
        </div>
      </div>
      `
    }
  }
];
