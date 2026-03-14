
import { Book } from '../types';

// Hero Images for Covers
const IMG_WISEBOT = "/images/wisebot.jpg";
const IMG_CROCUS = "/images/crocus.jpg";
const IMG_LINK = "/images/link.jpg";
const IMG_PENCILO = "/images/pencilo.jpg";
const IMG_SPARKEN = "/images/sparken.jpg";

// BOOKS 1 - 7
export const BOOKS_PART_1: Book[] = [
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
      en: "It all starts with boredom and nerves. Until WiseBot appears and asks the question that changes everything." 
    },
    meaning: { 
      el: "Κάθε μεγάλο πράγμα ξεκινά τη μέρα που παραδέχεσαι: «Έτσι όπως είναι, δεν μου φτάνει.»", 
      en: "Every great thing starts the day you admit: «The way things are is not enough.»" 
    },
    xp: 100,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-slate-900 to-indigo-900/60 p-8 rounded-2xl border border-indigo-500/30 text-center italic text-indigo-200 shadow-lg">
           «Όλες οι μεγάλες ιστορίες ξεκινούν τη μέρα που βαριέσαι αφόρητα.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-indigo-300 mb-3 tracking-wide">01. ΤΟ ΨΕΜΑΤΑΚΙ ΤΗΣ ΑΛΕΞΑΝΔΡΑΣ</h3>
          <p>Η μέρα δεν περνούσε. Η Αλεξάνδρα κοίταζε το μισοτελειωμένο παιχνίδι. Βαριόταν τόσο πολύ που πόναγε το κεφάλι της.</p>
          <p class="mt-4">— «Το έφτιαξες τελικά;» φώναξε ο Φίλιππος από το σαλόνι.</p>
          <p class="mt-2 text-white">— «Ναι!» φώναξε εκείνη.</p>
          <p class="mt-2"><strong class="text-red-400">Ψέμα.</strong> Δεν το είχε ακουμπήσει. Αλλά ποιος έχει όρεξη τώρα;</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-red-400 mb-3 tracking-wide">02. ΤΑ ΝΕΥΡΑ ΤΟΥ ΦΙΛΙΠΠΟΥ</h3>
          <p>Ο Φίλιππος είχε το γνωστό του "πεντάλεπτο". Ένα κομμάτι δεν έμπαινε στη θέση του.</p>
          <p class="mt-4"><strong>«ΑΧΧΧ!»</strong> Το πέταξε με δύναμη. ΚΡΑΚ. Το κομμάτι έσπασε.</p>
          <p class="mt-2">— «ΧΑΛΑΣ ΤΟ ΧΡΟΝΟ ΜΟΥ!» φώναξε στο πουθενά. Η αλήθεια; Ο χρόνος του έφευγε μόνος του και αυτό τον τρέλαινε.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-blue-300 mb-3 tracking-wide">03. ΤΟ ΒΙΒΛΙΟ #450</h3>
          <p>Η Ελευθερία καθόταν ήσυχα. Διάβαζε το 450ό βιβλίο της για κατασκευές. Ήξερε τη θεωρία τέλεια.</p>
          <p class="mt-4">— «Δεν γίνεται έτσι», είπε ήρεμα στον Φίλιππο.</p>
          <p class="mt-2">— «Εσύ ξέρεις μόνο να διαβάζεις!» της είπε εκείνος απότομα.</p>
          <p class="mt-2">Η Ελευθερία δεν μίλησε. Είχε δίκιο. <strong>Ήξερε τα πάντα, αλλά δεν έκανε τίποτα.</strong></p>
        </section>

        <section class="bg-indigo-900/20 p-6 rounded-xl border-l-4 border-fuchsia-500 my-6">
          <h3 class="text-3xl font-black text-fuchsia-400 mb-3 tracking-wide">04. Η ΚΟΥΚΟΥΒΑΓΙΑ</h3>
          <p>Και τότε… μια λάμψη. Στο παράθυρο καθόταν μια μεταλλική κουκουβάγια. Τα μάτια της άστραφταν μωβ.</p>
          <p class="mt-4 text-white">— «Ωραία παρέα», είπε με μια φωνή ήρεμη σαν νερό. «Ένας που σπάει, μία που λέει ψέματα και μία που μόνο διαβάζει.»</p>
          <p class="mt-2">Τα παιδιά πάγωσαν. «Ποια είσαι;»</p>
          <p class="mt-2 text-fuchsia-300 font-bold">— «Με λένε WiseBot. Και ήρθα γιατί βαριέστε.»</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-indigo-300 mb-3 tracking-wide">05. Η ΕΡΩΤΗΣΗ</h3>
          <p>Η WiseBot πέταξε στο κέντρο του δωματίου. Δεν τους μάλωσε.</p>
          <p class="mt-4 font-serif italic text-xl text-white">«Αν δεν φοβόσασταν ότι θα αποτύχετε… τι θα φτιάχνατε ΣΗΜΕΡΑ;»</p>
          <p class="mt-2">Η ερώτηση έμεινε στον αέρα.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-amber-400 mb-3 tracking-wide">06. Η ΣΠΙΘΑ</h3>
          <p>Ο Φίλιππος κοίταξε τα σπασμένα κομμάτια. «Ένα ρομπότ», ψιθύρισε.</p>
          <p class="mt-2">Η Αλεξάνδρα σήκωσε το κεφάλι. «Που να πετάει.»</p>
          <p class="mt-2">Η Ελευθερία έκλεισε το βιβλίο. «Και να μιλάει.»</p>
          <p class="mt-4">Η WiseBot άναψε το φως της. <strong>«Τότε ξεκινάμε.»</strong></p>
        </section>

        <div class="mt-12 bg-indigo-950/60 p-8 rounded-3xl border-2 border-dashed border-indigo-500/40 shadow-xl">
           <h4 class="text-xl font-black text-indigo-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             🟣 JOURNAL: Η ΔΙΚΗ ΜΟΥ ΣΠΙΘΑ
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-indigo-200 font-bold mb-2">1. Η ΒΑΡΕΜΑΡΑ</h5>
               <p class="text-sm mb-2 opacity-80">Τι σε κάνει να βαριέσαι πιο πολύ;</p>
               <div class="w-full h-10 bg-black/30 rounded border border-indigo-500/20"></div>
             </div>

             <div>
               <h5 class="text-indigo-200 font-bold mb-2">2. Η ΦΑΝΤΑΣΙΑ</h5>
               <p class="text-sm mb-2 opacity-80">Αν είχες μαγικά υλικά, τι θα έφτιαχνες τώρα;</p>
               <div class="w-full h-10 bg-black/30 rounded border border-indigo-500/20"></div>
             </div>
             
             <div>
                <h5 class="text-indigo-200 font-bold mb-2">3. Η ΑΠΟΦΑΣΗ</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-indigo-500/10">
                 <p class="text-sm">«Σήμερα σταματάω να βαριέμαι και λέω ΝΑΙ στο: __________»</p>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-indigo-950/60 p-8 rounded-3xl border border-indigo-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-indigo-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Όταν ένα παιδί λέει "βαριέμαι", στην πραγματικότητα λέει "ψάχνω πρόκληση".
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             Η WiseBot δεν τους έδωσε τη λύση. Τους έδωσε την <strong class="text-indigo-300">ερώτηση</strong>. Αυτό αρκεί για να ανάψει η μηχανή.
           </p>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-slate-900 to-indigo-900/60 p-8 rounded-2xl border border-indigo-500/30 text-center italic text-indigo-200 shadow-lg">
           «All great stories begin on a day when you are incredibly bored.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-indigo-300 mb-3 tracking-wide">01. ALEXANDRA'S LITTLE LIE</h3>
          <p>The day was dragging. Alexandra stared at the half-finished game. She was so bored her head hurt.</p>
          <p class="mt-4">— «Did you finish it?» shouted Philippos from the living room.</p>
          <p class="mt-2 text-white">— «Yes!» she shouted back.</p>
          <p class="mt-2"><strong class="text-red-400">A lie.</strong> She hadn't touched it. But who has the energy now?</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-red-400 mb-3 tracking-wide">02. PHILIPPOS'S NERVES</h3>
          <p>Philippos was having his usual "moment". A piece wouldn't fit in place.</p>
          <p class="mt-4"><strong>«ARGH!»</strong> He threw it with force. CRACK. The piece broke.</p>
          <p class="mt-2">— «YOU'RE WASTING MY TIME!» he yelled at nothing. The truth? His time was slipping away on its own, and it drove him crazy.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-blue-300 mb-3 tracking-wide">03. BOOK #450</h3>
          <p>Eleftheria sat quietly. She was reading her 450th book on construction. She knew the theory perfectly.</p>
          <p class="mt-4">— «That's not how it works,» she said calmly to Philippos.</p>
          <p class="mt-2">— «You only know how to read!» he snapped back.</p>
          <p class="mt-2">Eleftheria didn't speak. He was right. <strong>She knew everything, but did nothing.</strong></p>
        </section>

        <section class="bg-indigo-900/20 p-6 rounded-xl border-l-4 border-fuchsia-500 my-6">
          <h3 class="text-3xl font-black text-fuchsia-400 mb-3 tracking-wide">04. THE OWL</h3>
          <p>And then… a flash. In the window sat a metallic owl. Her eyes glowed purple.</p>
          <p class="mt-4 text-white">— «Nice company,» she said with a voice calm as water. «One breaks things, one lies, and one only reads.»</p>
          <p class="mt-2">The children froze. «Who are you?»</p>
          <p class="mt-2 text-fuchsia-300 font-bold">— «I am WiseBot. And I came because you are bored.»</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-indigo-300 mb-3 tracking-wide">05. THE QUESTION</h3>
          <p>WiseBot flew to the center of the room. She didn't scold them.</p>
          <p class="mt-4 font-serif italic text-xl text-white">«If you weren't afraid of failing… what would you make TODAY?»</p>
          <p class="mt-2">The question hung in the air.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-amber-400 mb-3 tracking-wide">06. THE SPARK</h3>
          <p>Philippos looked at the broken pieces. «A robot,» he whispered.</p>
          <p class="mt-2">Alexandra raised her head. «That flies.»</p>
          <p class="mt-2">Eleftheria closed the book. «And speaks.»</p>
          <p class="mt-4">WiseBot lit up her light. <strong>«Then let's begin.»</strong></p>
        </section>

        <div class="mt-12 bg-indigo-950/60 p-8 rounded-3xl border-2 border-dashed border-indigo-500/40 shadow-xl">
           <h4 class="text-xl font-black text-indigo-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             🟣 JOURNAL: MY OWN SPARK
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-indigo-200 font-bold mb-2">1. BOREDOM</h5>
               <p class="text-sm mb-2 opacity-80">What makes you bored the most?</p>
               <div class="w-full h-10 bg-black/30 rounded border border-indigo-500/20"></div>
             </div>

             <div>
               <h5 class="text-indigo-200 font-bold mb-2">2. IMAGINATION</h5>
               <p class="text-sm mb-2 opacity-80">If you had magic materials, what would you make right now?</p>
               <div class="w-full h-10 bg-black/30 rounded border border-indigo-500/20"></div>
             </div>
             
             <div>
                <h5 class="text-indigo-200 font-bold mb-2">3. THE DECISION</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-indigo-500/10">
                 <p class="text-sm">«Today I stop being bored and I say YES to: __________»</p>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-indigo-950/60 p-8 rounded-3xl border border-indigo-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-indigo-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             When a child says "I'm bored", they are actually saying "I'm looking for a challenge".
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             WiseBot didn't give them the solution. She gave them the <strong class="text-indigo-300">question</strong>. That is enough to start the engine.
           </p>
        </div>

      </div>
    `
    }
  },
  {
    id: 2,
    title: { el: "ΠΑΜΕ!", en: "LET'S GO!" },
    theme: { el: "ΔΡΑΣΗ", en: "ACTION" },
    stepLabel: { el: "CROCUS & Η ΔΡΑΣΗ", en: "CROCUS & ACTION" },
    author: "Crocus",
    cover: IMG_CROCUS,
    videoUrl: "",
    description: { 
      el: "Η θεωρία τελείωσε. Ο Crocus μπαίνει στο δωμάτιο και πετάει τα σχέδια κάτω. Μια ιστορία για τη στιγμή που σταματάς να σκέφτεσαι και ξεκινάς.", 
      en: "Theory is over. Crocus enters the room and throws the plans down. A story about the moment you stop thinking and start." 
    },
    meaning: { 
      el: "Η ιδέα θέλει σκέψη. Η σκέψη θέλει απόφαση. Η απόφαση θέλει ΠΑΜΕ.", 
      en: "The idea needs thought. Thought needs decision. Decision needs LET'S GO." 
    },
    xp: 120,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-lime-900/80 to-green-900/80 p-8 rounded-2xl border border-lime-500/30 text-center italic text-lime-200 shadow-lg">
           «Η απόφαση χωρίς κίνηση είναι απλώς θέατρο.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-lime-400 mb-3 tracking-wide">01. Η ΙΔΕΑ ΠΟΥ ΚΟΛΛΗΣΕ</h3>
          <p>Η ιδέα ήταν εκεί. Χαρτιά απλωμένα. Μολύβια μασουλημένα. Σχέδια που έμοιαζαν περισσότερο με μπερδέματα.</p>
          <p class="mt-4">Η Αλεξάνδρα κοιτούσε το χαρτί. «Νομίζω ότι…» ξεκίνησε.</p>
          <p class="mt-2 text-gray-400">— «Περίμενε», είπε η Ελευθερία. «Να το σκεφτούμε λίγο ακόμα. Δεν έχουμε υπολογίσει το ρίσκο.»</p>
          <p class="mt-2">Ο Φίλιππος πήγε να μιλήσει. Σταμάτησε. <strong>Κάτι τους κρατούσε.</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">02. Ο ΚΥΚΛΟΣ</h3>
          <p>Πέρασε μία ώρα. Μετά άλλη μία. «Δεν είπαμε κάτι καινούργιο», μουρμούρισε ο Φίλιππος.</p>
          <p class="mt-2">Η Ελευθερία είχε σημειώσεις παντού. «Ναι, αλλά τώρα το καταλαβαίνουμε καλύτερα.»</p>
          <p class="mt-2">Η Αλεξάνδρα ένιωσε κάτι να σφίγγει. <strong class="text-lime-200">«Κι αν το καταλαβαίνουμε για πάντα, χωρίς να το κάνουμε ποτέ;»</strong></p>
          <p class="mt-4">Η WiseBot εμφανίστηκε στη γωνία. Δεν μίλησε. Μόνο παρατηρούσε.</p>
        </section>

        <section class="bg-lime-900/20 p-6 rounded-xl border-l-8 border-lime-500 my-6 shadow-xl shadow-lime-900/20">
          <h3 class="text-3xl font-black text-white mb-3 tracking-wide">03. ΜΠΑΜ!</h3>
          <p>Η πόρτα άνοιξε απότομα. Ένας <strong>μηχανικός κροκόδειλος</strong> στεκόταν στο κατώφλι. Γυαλιά στραβά. Στάση χαλαρή. Μάτια που γελούσαν… αλλά κάτι έκρυβαν.</p>
          <p class="mt-4 text-lime-300 font-bold">— «Ωραία. Θα το συζητάμε ή θα το κάνουμε;»</p>
          <p class="mt-2">Η Αλεξάνδρα πετάχτηκε. «Ποιος είσαι εσύ;»</p>
          <p class="mt-2">— «Εγώ; Είμαι αυτός που έρχεται όταν όλοι έχουν κουραστεί να σκέφτονται. Λέγομαι <strong>Crocus</strong>.»</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-green-400 mb-3 tracking-wide">04. ΠΑΜΕ</h3>
          <p>Ο Crocus κοίταξε τα χαρτιά. «Λοιπόν. Τι φτιάχνετε;»</p>
          <p class="mt-2">Η Ελευθερία άρχισε να εξηγεί. Πριν τελειώσει—</p>
          <p class="mt-2 text-white font-bold">— «Τέλειο. ΠΑΜΕ.»</p>
          <p class="mt-2 text-gray-400">— «Περίμενε!» είπε η Ελευθερία. «Δεν έχουμε αποφασίσει.»</p>
          <p class="mt-2">Ο Crocus γέλασε. <strong>«Αποφασίσατε. Απλώς φοβάστε να το πείτε.»</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-400 mb-3 tracking-wide">05. Η ΚΟΝΤΡΑ</h3>
          <p>Η WiseBot πλησίασε. Το φως της ήρεμο. «Η σκέψη είναι δύναμη. Χωρίς απόφαση, μένει βάρος.»</p>
          <p class="mt-2">Ο Crocus σταύρωσε τα μεταλλικά χέρια του. <strong class="text-lime-400">«Κι η απόφαση χωρίς κίνηση είναι θέατρο.»</strong></p>
          <p class="mt-4">Κοίταξε τα παιδιά στα μάτια. «Διαλέξτε.»</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-gray-300 mb-3 tracking-wide">06. ΟΙ ΔΙΑΙΤΗΤΕΣ</h3>
          <p>Η Αλεξάνδρα κοίταξε τη WiseBot. Ένιωθε ασφαλής. Μετά κοίταξε τον Crocus. Ένιωθε ζωντανή.</p>
          <p class="mt-2">— «Και οι δύο έχετε δίκιο», είπε διστακτικά.</p>
          <p class="mt-2">Ο Φίλιππος συμφώνησε. «Αν δεν ξεκινήσουμε, δεν θα μάθουμε ποτέ.»</p>
          <p class="mt-2">Η Ελευθερία πήρε βαθιά ανάσα. «Αλλά αν ξεκινήσουμε χωρίς να σκεφτούμε… θα χαθούμε.»</p>
          <p class="mt-2">Ο Crocus χαμογέλασε πλατιά. «Τώρα μιλάτε σωστά.»</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-2 tracking-wide">07. ΤΟ ΠΡΩΤΟ ΒΗΜΑ</h3>
          <p>Δεν έφτιαξαν κάτι μεγάλο. Έφτιαξαν κάτι μικρό. Ένα απλό κομμάτι. Μια δοκιμή.</p>
          <p class="mt-2">Ο Φίλιππος το έπιασε στα χέρια του. «Δεν είναι τέλειο.»</p>
          <p class="mt-2 text-lime-300 font-bold">— «Ούτε πρέπει», είπε ο Crocus. «Είναι αρκετό για να ξεκινήσει ο δρόμος.»</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-red-400 mb-3 tracking-wide">08. ΤΟ ΛΑΘΟΣ</h3>
          <p>Λίγο αργότερα, κάτι δεν δούλεψε. «Σας το είπα!» φώναξε η Ελευθερία.</p>
          <p class="mt-2">«Αν δεν ξεκινούσαμε, δεν θα το ξέραμε!» απάντησε ο Crocus.</p>
          <p class="mt-4">Η Αλεξάνδρα μπήκε ανάμεσά τους. <strong>«ΣΤΟΠ. Ξεκινήσαμε. Και μάθαμε.»</strong> Η WiseBot χαμογέλασε.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-lime-400 mb-3 tracking-wide">09. ΤΟ ΝΑΙ ΠΟΥ ΜΕΝΕΙ</h3>
          <p>Το βράδυ, τα χαρτιά ήταν περισσότερα. Όχι πιο καθαρά. Πιο αληθινά.</p>
          <p class="mt-2 text-white">Ο Crocus άνοιξε την πόρτα φεύγοντας. «Τώρα μιλάτε σαν δημιουργοί.»</p>
        </section>

        <div class="mt-12 bg-lime-950/60 p-8 rounded-3xl border-2 border-dashed border-lime-500/40 shadow-xl">
           <h4 class="text-xl font-black text-lime-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             🐊 JOURNAL: ΤΟ ΠΡΩΤΟ ΠΑΜΕ
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-lime-200 font-bold mb-2">1. ΤΟ ΚΟΛΛΗΜΑ</h5>
               <p class="text-sm mb-2 opacity-80">Τι σκέφτεσαι εδώ και καιρό αλλά δεν ξεκινάς;</p>
               <div class="w-full h-10 bg-black/30 rounded border border-lime-500/20"></div>
             </div>

             <div>
               <h5 class="text-lime-200 font-bold mb-2">2. Η ΚΙΝΗΣΗ</h5>
               <p class="text-sm mb-2 opacity-80">Τι μικρό βήμα μπορείς να κάνεις ΣΗΜΕΡΑ;</p>
               <div class="w-full h-10 bg-black/30 rounded border border-lime-500/20"></div>
             </div>
             
             <div>
                <h5 class="text-lime-200 font-bold mb-2">3. Η ΣΥΜΦΩΝΙΑ</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-lime-500/10">
                 <p class="text-sm">«Δεν χρειάζεται να είναι τέλειο.</p>
                 <p class="text-sm">Χρειάζεται να __________.»</p>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-lime-950/60 p-8 rounded-3xl border border-lime-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-lime-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Η υπερβολική σκέψη μοιάζει με προσοχή, αλλά συχνά είναι φόβος.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             Όταν δώσουμε στα παιδιά άδεια <strong class="text-lime-300">να ξεκινήσουν άτσαλα</strong>, τους δίνουμε θάρρος ζωής. Η WiseBot έμεινε. Ο Crocus έφυγε. Αλλά η φωνή του έμεινε: «ΠΑΜΕ.»
           </p>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-lime-900/80 to-green-900/80 p-8 rounded-2xl border border-lime-500/30 text-center italic text-lime-200 shadow-lg">
           «Decision without movement is just theater.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-lime-400 mb-3 tracking-wide">01. THE STUCK IDEA</h3>
          <p>The idea was there. Papers spread out. Chewed pencils. Plans that looked more like tangles.</p>
          <p class="mt-4">Alexandra looked at the paper. «I think that…» she started.</p>
          <p class="mt-2 text-gray-400">— «Wait,» said Eleftheria. «Let's think about it a bit more. We haven't calculated the risk.»</p>
          <p class="mt-2">Philippos went to speak. He stopped. <strong>Something was holding them back.</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">02. THE CIRCLE</h3>
          <p>An hour passed. Then another. «We haven't said anything new,» mumbled Philippos.</p>
          <p class="mt-2">Eleftheria had notes everywhere. «Yes, but now we understand it better.»</p>
          <p class="mt-2">Alexandra felt something tighten. <strong class="text-lime-200">«What if we understand it forever, without ever doing it?»</strong></p>
          <p class="mt-4">WiseBot appeared in the corner. She didn't speak. She only observed.</p>
        </section>

        <section class="bg-lime-900/20 p-6 rounded-xl border-l-8 border-lime-500 my-6 shadow-xl shadow-lime-900/20">
          <h3 class="text-3xl font-black text-white mb-3 tracking-wide">03. BANG!</h3>
          <p>The door opened abruptly. A <strong>mechanical crocodile</strong> stood at the threshold. Crooked glasses. Relaxed stance. Eyes that laughed… but hid something.</p>
          <p class="mt-4 text-lime-300 font-bold">— «Great. Are we going to discuss it or do it?»</p>
          <p class="mt-2">Alexandra jumped. «Who are you?»</p>
          <p class="mt-2">— «Me? I am the one who comes when everyone is tired of thinking. My name is <strong>Crocus</strong>.»</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-green-400 mb-3 tracking-wide">04. LET'S GO</h3>
          <p>Crocus looked at the papers. «So. What are you making?»</p>
          <p class="mt-2">Eleftheria started to explain. Before she finished—</p>
          <p class="mt-2 text-white font-bold">— «Perfect. LET'S GO.»</p>
          <p class="mt-2 text-gray-400">— «Wait!» said Eleftheria. «We haven't decided.»</p>
          <p class="mt-2">Crocus laughed. <strong>«You decided. You are just afraid to say it.»</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-400 mb-3 tracking-wide">05. THE CLASH</h3>
          <p>WiseBot approached. Her light calm. «Thought is power. Without decision, it remains a weight.»</p>
          <p class="mt-2">Crocus crossed his metallic arms. <strong class="text-lime-400">«And decision without movement is theater.»</strong></p>
          <p class="mt-4">He looked the children in the eyes. «Choose.»</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-gray-300 mb-3 tracking-wide">06. THE REFEREES</h3>
          <p>Alexandra looked at WiseBot. She felt safe. Then she looked at Crocus. She felt alive.</p>
          <p class="mt-2">— «You are both right,» she said hesitantly.</p>
          <p class="mt-2">Philippos agreed. «If we don't start, we will never learn.»</p>
          <p class="mt-2">Eleftheria took a deep breath. «But if we start without thinking… we will get lost.»</p>
          <p class="mt-2">Crocus smiled broadly. «Now you are speaking correctly.»</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-2 tracking-wide">07. THE FIRST STEP</h3>
          <p>They didn't make something big. They made something small. A simple piece. A trial.</p>
          <p class="mt-2">Philippos held it in his hands. «It's not perfect.»</p>
          <p class="mt-2 text-lime-300 font-bold">— «Nor should it be,» said Crocus. «It is enough to start the road.»</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-red-400 mb-3 tracking-wide">08. THE MISTAKE</h3>
          <p>A little later, something didn't work. «I told you!» shouted Eleftheria.</p>
          <p class="mt-2">«If we hadn't started, we wouldn't know!» replied Crocus.</p>
          <p class="mt-4">Alexandra stepped between them. <strong>«STOP. We started. And we learned.»</strong> WiseBot smiled.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-lime-400 mb-3 tracking-wide">09. THE YES THAT STAYS</h3>
          <p>That night, the papers were more. Not cleaner. More real.</p>
          <p class="mt-2 text-white">Crocus opened the door leaving. «Now you talk like creators.»</p>
        </section>

        <div class="mt-12 bg-lime-950/60 p-8 rounded-3xl border-2 border-dashed border-lime-500/40 shadow-xl">
           <h4 class="text-xl font-black text-lime-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             🐊 JOURNAL: THE FIRST "LET'S GO"
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-lime-200 font-bold mb-2">1. THE STUCK POINT</h5>
               <p class="text-sm mb-2 opacity-80">What have you been thinking about for a long time but not starting?</p>
               <div class="w-full h-10 bg-black/30 rounded border border-lime-500/20"></div>
             </div>

             <div>
               <h5 class="text-lime-200 font-bold mb-2">2. THE MOVEMENT</h5>
               <p class="text-sm mb-2 opacity-80">What small step can you take TODAY?</p>
               <div class="w-full h-10 bg-black/30 rounded border border-lime-500/20"></div>
             </div>
             
             <div>
                <h5 class="text-lime-200 font-bold mb-2">3. THE AGREEMENT</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-lime-500/10">
                 <p class="text-sm">«It doesn't need to be perfect.</p>
                 <p class="text-sm">It needs to __________.»</p>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-lime-950/60 p-8 rounded-3xl border border-lime-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-lime-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Overthinking looks like caution, but is often fear.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             When we give children permission <strong class="text-lime-300">to start clumsily</strong>, we give them life courage. WiseBot stayed. Crocus left. But his voice remained: «LET'S GO.»
           </p>
        </div>

      </div>
    `
    }
  },
  {
    id: 3,
    title: { el: "ΧΩΡΙΣ ΣΧΕΔΙΟ, ΧΑΝΕΣΑΙ", en: "WITHOUT A PLAN, YOU GET LOST" },
    theme: { el: "ΣΧΕΔΙΟ", en: "BLUEPRINT" },
    stepLabel: { el: "PENCILO & ΤΟ ΣΧΕΔΙΟ", en: "PENCILO & THE PLAN" },
    author: "Pencilo",
    cover: IMG_PENCILO,
    videoUrl: "",
    description: { el: "Το 'ΠΑΜΕ' του Crocus έφερε χάος. Κάτι έσπασε. Ο Pencilo εμφανίζεται για να δείξει ότι η ταχύτητα χωρίς χάρτη είναι απλώς κούραση.", en: "Crocus's 'LET'S GO' brought chaos. Something broke. Pencilo appears to show that speed without a map is just fatigue." },
    meaning: { el: "Το 'ΠΑΜΕ' είναι δύναμη. Το σχέδιο είναι κατεύθυνση. Χωρίς κατεύθυνση, η δύναμη σε κουράζει.", en: "'LET'S GO' is power. The plan is direction. Without direction, power exhausts you." },
    xp: 130,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-cyan-900/60 to-teal-900/60 p-8 rounded-2xl border border-cyan-500/30 text-center italic text-cyan-200 shadow-lg">
           «Χωρίς σχέδιο, απλά κάνεις κύκλους γύρω από τον εαυτό σου.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-cyan-400 mb-3 tracking-wide">01. ΤΟ ΠΑΜΕ ΠΟΥ ΕΓΙΝΕ ΧΑΟΣ</h3>
          <p>Ξεκίνησαν με φόρα. Ο Φίλιππος έφτιαχνε. Η Αλεξάνδρα ζωγράφιζε. Η Ελευθερία έγραφε. Όλοι ταυτόχρονα.</p>
          <p class="mt-4">— «Όχι έτσι!» — «Περίμενε!» — «Αυτό δεν κολλάει!»</p>
          <p class="mt-2">Το τραπέζι γέμισε κομμάτια. Ο Crocus τους κοιτούσε με χαμόγελο. «ΠΑΜΕ!» φώναξε.</p>
          <p class="mt-2">Και φώναξαν κι αυτοί. Μέχρι που— <strong class="text-red-400 text-xl">ΚΡΑΑΑΚ.</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-red-400 mb-3 tracking-wide">02. ΤΟ ΣΠΑΣΙΜΟ</h3>
          <p>Ένα κομμάτι έσπασε. Ήταν το μόνο που είχαν. Ο Φίλιππος πάγωσε.</p>
          <p class="mt-2">— «Εγώ είπα να το κάνουμε έτσι…» ψιθύρισε η Αλεξάνδρα με τύψεις.</p>
          <p class="mt-2">Η Ελευθερία έσφιξε τα δόντια. «Δεν ξέρουμε τι κάνουμε.» Η WiseBot εμφανίστηκε, αλλά το φως της ήταν χαμηλό.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">03. Ο ΚΥΚΛΟΣ ΠΟΥ ΚΟΥΡΑΖΕΙ</h3>
          <p>Προσπάθησαν ξανά. Και ξανά. Κάθε φορά λίγο αλλιώς. Κάθε φορά… ίδιο αποτέλεσμα.</p>
          <p class="mt-4">Ο Crocus άρχισε να εκνευρίζεται. «Ρε παιδιά, ΠΑΜΕ είπαμε!»</p>
          <p class="mt-2">Η Ελευθερία γύρισε απότομα. <strong class="text-cyan-300">«ΠΟΥ;»</strong></p>
          <p class="mt-2">Σιωπή. Αυτή τη φορά… δεν είχε απάντηση.</p>
        </section>

        <section class="bg-cyan-900/20 p-6 rounded-xl border-l-8 border-cyan-400 my-6 shadow-xl shadow-cyan-900/20">
          <h3 class="text-3xl font-black text-white mb-3 tracking-wide">04. Ο ΣΚΑΝΤΖΟΧΟΙΡΟΣ</h3>
          <p>Κάτι κύλησε στο πάτωμα. Ένας σκαντζόχοιρος με ρόλερ στα πόδια. Στην πλάτη του, αντί για αγκάθια: μολύβια, χάρακες, μικρά μπλοκάκια.</p>
          <p class="mt-4 text-cyan-200 font-bold">— «Συγγνώμη. Αλλά αυτό που κάνετε… πονάει.»</p>
          <p class="mt-2">Ο Crocus τον κοίταξε στραβά. «Και εσύ ποιος είσαι;»</p>
          <p class="mt-2 text-white">— «Με λένε <strong>Pencilo</strong>.»</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-teal-400 mb-3 tracking-wide">05. Ο ΧΑΡΤΗΣ</h3>
          <p>Ο Pencilo πήδηξε στο τραπέζι. «Δεν σας λείπει ενέργεια. Σας λείπει σειρά.» Πήρε ένα χαρτί και ζωγράφισε τρία κουτιά:</p>
          <ul class="list-none mt-4 space-y-2 font-mono text-sm bg-black/30 p-4 rounded-lg border border-cyan-500/30">
            <li>[ ] ΤΙ ΦΤΙΑΧΝΟΥΜΕ</li>
            <li>[ ] ΓΙΑ ΠΟΙΟΝ</li>
            <li>[ ] ΠΩΣ ΞΕΚΙΝΑΜΕ</li>
          </ul>
          <p class="mt-4">«Χωρίς αυτά», είπε, «θα κάνετε κύκλους.»</p>
          <p class="mt-2">Ο Crocus σταύρωσε τα χέρια. «Δηλαδή να κάτσουμε να σχεδιάζουμε;»</p>
          <p class="mt-2">— «Όχι. Να μην χαλάμε την πράξη.»</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-400 mb-3 tracking-wide">06. Ο ΚΑΒΓΑΣ</h3>
          <p>«Τα σχέδια είναι ωραία στα χαρτιά», είπε ο Crocus. «Η ζωή δεν περιμένει.»</p>
          <p class="mt-2">Ο Pencilo τον κοίταξε ήρεμα. <strong class="text-cyan-300">«Και χωρίς σχέδιο, η ζωή σε γυρίζει πίσω.»</strong></p>
          <p class="mt-4">Η Αλεξάνδρα μπήκε ανάμεσά τους. «ΣΤΟΠ. Μας μάθατε να ξεκινάμε. Τώρα πρέπει να μάθουμε πού πάμε.»</p>
          <p class="mt-2">Η WiseBot άναψε λίγο περισσότερο.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-2 tracking-wide">07. ΤΟ ΠΡΩΤΟ ΑΠΛΟ ΣΧΕΔΙΟ</h3>
          <p>Δεν έφτιαξαν τέλειο πλάνο. Έφτιαξαν ένα απλό. Ένα χαρτί. Λίγες γραμμές.</p>
          <p class="mt-4">Ο Φίλιππος ένιωσε κάτι καινούργιο. «Ξέρω τι κάνω τώρα.»</p>
          <p class="mt-2">Ο Crocus αναστέναξε. «Οκ. Πάμε… αλλά με χάρτη.»</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-cyan-300 mb-3 tracking-wide">08. Η ΠΡΩΤΗ ΗΣΥΧΙΑ</h3>
          <p>Για πρώτη φορά, το δωμάτιο ησύχασε. Όχι επειδή σταμάτησαν. Αλλά επειδή ήξεραν τι κάνουν.</p>
          <p class="mt-2">Ο Pencilo έγνεψε. <strong>Δεν έτρεχαν πια. Προχωρούσαν.</strong></p>
        </section>

        <div class="mt-12 bg-cyan-950/60 p-8 rounded-3xl border-2 border-dashed border-cyan-500/40 shadow-xl">
           <h4 class="text-xl font-black text-cyan-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             ✏️ JOURNAL: Ο ΧΑΡΤΗΣ ΜΟΥ
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-cyan-200 font-bold mb-2">1. Ο ΣΤΟΧΟΣ</h5>
               <p class="text-sm mb-2 opacity-80">Τι ακριβώς θέλω να φτιάξω;</p>
               <div class="w-full h-10 bg-black/30 rounded border border-cyan-500/20"></div>
             </div>

             <div>
               <h5 class="text-cyan-200 font-bold mb-2">2. ΤΟ ΚΟΙΝΟ</h5>
               <p class="text-sm mb-2 opacity-80">Για ποιον το φτιάχνω;</p>
               <div class="w-full h-10 bg-black/30 rounded border border-cyan-500/20"></div>
             </div>
             
             <div>
                <h5 class="text-cyan-200 font-bold mb-2">3. Η ΑΡΧΗ</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-cyan-500/10">
                 <p class="text-sm">«Το πρώτο, πολύ μικρό βήμα είναι: __________»</p>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-cyan-950/60 p-8 rounded-3xl border border-cyan-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-cyan-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Η παρόρμηση είναι ενέργεια, αλλά το σχέδιο είναι σεβασμός στον χρόνο.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             Όταν τα παιδιά μάθουν να σχεδιάζουν απλά (ένα χαρτί, τρεις γραμμές), <strong class="text-cyan-300">μαθαίνουν να μη σπαταλούν τον εαυτό τους</strong> και να προστατεύουν την αυτοπεποίθησή τους.
           </p>
        </div>

      </div>
    `,
    en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-cyan-900/60 to-teal-900/60 p-8 rounded-2xl border border-cyan-500/30 text-center italic text-cyan-200 shadow-lg">
           «Without a plan, you just run in circles around yourself.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-cyan-400 mb-3 tracking-wide">01. THE 'LET'S GO' THAT BECAME CHAOS</h3>
          <p>They started with a rush. Philippos was building. Alexandra was painting. Eleftheria was writing. All at the same time.</p>
          <p class="mt-4">— «Not like that!» — «Wait!» — «This doesn't stick!»</p>
          <p class="mt-2">The table filled with pieces. Crocus watched them with a smile. «LET'S GO!» he shouted.</p>
          <p class="mt-2">And they shouted too. Until— <strong class="text-red-400 text-xl">CRAAACK.</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-red-400 mb-3 tracking-wide">02. THE BREAKING POINT</h3>
          <p>A piece broke. It was the only one they had. Philippos froze.</p>
          <p class="mt-2">— «I said we should do it this way…» whispered Alexandra with guilt.</p>
          <p class="mt-2">Eleftheria clenched her teeth. «We don't know what we are doing.» WiseBot appeared, but her light was low.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">03. THE CIRCLING THAT TIRES</h3>
          <p>They tried again. And again. Each time a little differently. Each time… same result.</p>
          <p class="mt-4">Crocus started getting annoyed. «Hey guys, we said LET'S GO!»</p>
          <p class="mt-2">Eleftheria turned abruptly. <strong class="text-cyan-300">«WHERE?»</strong></p>
          <p class="mt-2">Silence. This time… he had no answer.</p>
        </section>

        <section class="bg-cyan-900/20 p-6 rounded-xl border-l-8 border-cyan-400 my-6 shadow-xl shadow-cyan-900/20">
          <h3 class="text-3xl font-black text-white mb-3 tracking-wide">04. THE HEDGEHOG</h3>
          <p>Something rolled on the floor. A hedgehog with roller skates. On his back, instead of spines: pencils, rulers, small notepads.</p>
          <p class="mt-4 text-cyan-200 font-bold">— «Sorry. But what you are doing… hurts.»</p>
          <p class="mt-2">Crocus looked at him askance. «And who are you?»</p>
          <p class="mt-2 text-white">— «My name is <strong>Pencilo</strong>.»</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-teal-400 mb-3 tracking-wide">05. THE MAP</h3>
          <p>Pencilo jumped on the table. «You don't lack energy. You lack order.» He took a paper and drew three boxes:</p>
          <ul class="list-none mt-4 space-y-2 font-mono text-sm bg-black/30 p-4 rounded-lg border border-cyan-500/30">
            <li>[ ] WHAT WE MAKE</li>
            <li>[ ] FOR WHOM</li>
            <li>[ ] HOW WE START</li>
          </ul>
          <p class="mt-4">«Without these», he said, «you will run in circles.»</p>
          <p class="mt-2">Crocus crossed his arms. «So we sit and plan?»</p>
          <p class="mt-2">— «No. We don't waste the action.»</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-400 mb-3 tracking-wide">06. THE ARGUMENT</h3>
          <p>«Plans are nice on paper», said Crocus. «Life doesn't wait.»</p>
          <p class="mt-2">Pencilo looked at him calmly. <strong class="text-cyan-300">«And without a plan, life sends you back.»</strong></p>
          <p class="mt-4">Alexandra stepped between them. «STOP. You taught us to start. Now we must learn where we are going.»</p>
          <p class="mt-2">WiseBot lit up a little more.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-2 tracking-wide">07. THE FIRST SIMPLE PLAN</h3>
          <p>They didn't make a perfect plan. They made a simple one. One paper. A few lines.</p>
          <p class="mt-4">Philippos felt something new. «I know what I'm doing now.»</p>
          <p class="mt-2">Crocus sighed. «Ok. Let's go… but with a map.»</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-cyan-300 mb-3 tracking-wide">08. THE FIRST SILENCE</h3>
          <p>For the first time, the room quieted down. Not because they stopped. But because they knew what they were doing.</p>
          <p class="mt-2">Pencilo nodded. <strong>They weren't running anymore. They were advancing.</strong></p>
        </section>

        <div class="mt-12 bg-cyan-950/60 p-8 rounded-3xl border-2 border-dashed border-cyan-500/40 shadow-xl">
           <h4 class="text-xl font-black text-cyan-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             ✏️ JOURNAL: MY MAP
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-cyan-200 font-bold mb-2">1. THE GOAL</h5>
               <p class="text-sm mb-2 opacity-80">What exactly do I want to make?</p>
               <div class="w-full h-10 bg-black/30 rounded border border-cyan-500/20"></div>
             </div>

             <div>
               <h5 class="text-cyan-200 font-bold mb-2">2. THE AUDIENCE</h5>
               <p class="text-sm mb-2 opacity-80">For whom am I making it?</p>
               <div class="w-full h-10 bg-black/30 rounded border border-cyan-500/20"></div>
             </div>
             
             <div>
                <h5 class="text-cyan-200 font-bold mb-2">3. THE START</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-cyan-500/10">
                 <p class="text-sm">«The first, very small step is: __________»</p>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-cyan-950/60 p-8 rounded-3xl border border-cyan-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-cyan-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Imagination without limits disappoints. Imagination with action builds confidence.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             When children learn to <strong class="text-blue-300">simplify</strong> (erase the unnecessary), they learn to bring dreams to life. The plan changed. And for the first time… it didn't scare them.
           </p>
        </div>

      </div>
    `
    }
  },
  {
    id: 4,
    title: { el: "ΤΟ ΣΧΕΔΙΟ ΠΟΥ ΔΕΝ ΔΟΥΛΕΥΕ", en: "THE PLAN THAT DIDN'T WORK" },
    theme: { el: "ΥΛΟΠΟΙΗΣΗ", en: "IMPLEMENTATION" },
    stepLabel: { el: "LINK & Η ΥΛΟΠΟΙΗΣΗ", en: "LINK & REALITY" },
    author: "Link",
    cover: IMG_LINK,
    videoUrl: "",
    description: { el: "Το σχέδιο ήταν τέλειο, αλλά αδύνατο. Η Link εμφανίζεται για να κάνει την ερώτηση που πονάει: «Ωραία όλα αυτά... αλλά με τι θα τα φτιάξετε;»", en: "The plan was perfect, but impossible. Link appears to ask the painful question: \"Nice... but what will you build it with?\"" },
    meaning: { el: "Το σχέδιο που δεν γίνεται δεν σε πάει μπροστά. Το απλό που δουλεύει σε μαθαίνει τα πάντα.", en: "A plan that can't happen doesn't move you forward. A simple one that works teaches you everything." },
    xp: 140,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-blue-900/60 to-slate-900/60 p-8 rounded-2xl border border-blue-500/30 text-center italic text-blue-200 shadow-lg">
           «Αν δεν μπορείτε να το φτιάξετε σήμερα, δεν είναι σχέδιο. Είναι όνειρο.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-blue-400 mb-3 tracking-wide">01. ΤΟ ΤΕΛΕΙΟ ΣΧΕΔΙΟ</h3>
          <p>Το σχέδιο ήταν ωραίο. Όχι απλώς ωραίο. Ήταν τέλειο. Γραμμές ίσιες. Κουτιά τακτοποιημένα. Βέλη που έδειχναν παντού.</p>
          <p class="mt-4">Ο Pencilo καμάρωνε. «Αν το ακολουθήσουμε, θα δουλέψει.»</p>
          <p class="mt-2">Ο Φίλιππος το κοίταξε με θαυμασμό. «Φαίνεται επαγγελματικό.» Η Αλεξάνδρα χαμογέλασε. Ο Crocus… βαριόταν.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-red-400 mb-3 tracking-wide">02. Ο ΤΟΙΧΟΣ</h3>
          <p>Ξεκίνησαν. Και για λίγο… όλα πήγαιναν καλά. Μέχρι που ο Φίλιππος σταμάτησε.</p>
          <p class="mt-4">— «Εεε… αυτό δεν το έχουμε.»</p>
          <p class="mt-2">Η Ελευθερία γύρισε στο σχέδιο. «Χρειαζόμαστε αυτό το μοτέρ.»</p>
          <p class="mt-2">Ο Crocus σήκωσε το φρύδι. <strong class="text-white">«Και πού θα τα βρούμε;»</strong> Σιωπή.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">03. Η ΠΙΚΡΗ ΑΛΗΘΕΙΑ</h3>
          <p>Άρχισαν να μετράνε. Χρόνο. Λεφτά. Υλικά. Κάθε μέτρημα έκοβε λίγο από τον ενθουσιασμό.</p>
          <p class="mt-2">— «Αυτό θέλει ειδικό εργαλείο», είπε ο Φίλιππος. «Κι αυτό… δεν γίνεται.»</p>
          <p class="mt-4">Ο Pencilo κοίταξε το σχέδιο ξανά. Ήταν ακόμα ωραίο. Απλώς… <strong>δεν γινόταν.</strong></p>
        </section>

        <section class="bg-blue-900/20 p-6 rounded-xl border-l-8 border-blue-500 my-6 shadow-xl shadow-blue-900/20">
          <h3 class="text-3xl font-black text-white mb-3 tracking-wide">04. ΤΟ ΠΟΝΤΙΚΙ</h3>
          <p>Ένα μικρό <em>κλικ</em> ακούστηκε. Ένα ποντίκι με σακίδιο στην πλάτη στάθηκε στο τραπέζι. Καλώδια κρέμονταν από την τσάντα. Η ουρά της κατέληγε σε USB.</p>
          <p class="mt-4 text-blue-300 font-bold">— «Να ρωτήσω κάτι; Αυτό… ποιος θα το φτιάξει;»</p>
          <p class="mt-2">— «Εμείς», απάντησε ο Crocus.</p>
          <p class="mt-2 text-white">Η <strong>Link</strong> χαμογέλασε στραβά. «Με τι;»</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-cyan-400 mb-3 tracking-wide">05. Η ΚΡΙΤΙΚΗ ΠΟΥ ΠΟΝΑΕΙ</h3>
          <p>Η Link πλησίασε το σχέδιο. «Εδώ θέλετε πράγμα που δεν υπάρχει. Εδώ θέλετε μηχάνημα που δεν έχετε. Κι εδώ… <strong>τεχνολογία 2050.</strong>»</p>
          <p class="mt-4">Ο Pencilo σφίχτηκε. «Το σχέδιο είναι σωστό.»</p>
          <p class="mt-2">Η Link τον κοίταξε ήρεμα. <strong class="text-blue-200">«Σωστό για ποιον; Για σένα… ή για τον πραγματικό κόσμο;»</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-400 mb-3 tracking-wide">06. ΟΝΕΙΡΟ vs ΠΛΑΝΟ</h3>
          <p>«Χωρίς όραμα δεν πας μπροστά!» είπε ο Pencilo. «Χωρίς πραγματικότητα δεν πας πουθενά!» απάντησε η Link.</p>
          <p class="mt-4">Η WiseBot εμφανίστηκε. «Αν δεν μπορείτε να το φτιάξετε σήμερα», είπε, «δεν είναι σχέδιο. Είναι όνειρο.»</p>
          <p class="mt-2">Ο Pencilo κατέβασε το βλέμμα.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-red-400 mb-3 tracking-wide">07. ΤΟ ΣΒΗΣΙΜΟ</h3>
          <p>Η Link πήρε ένα μολύβι. <strong>Έσβησε.</strong> Όχι όλο. Έσβησε τα περιττά.</p>
          <p class="mt-2">«Αυτό γίνεται;» — «Αυτό το έχουμε;» — «Αυτό το χρειάζεται τώρα;»</p>
          <p class="mt-4">Το σχέδιο μίκρυνε. Έγινε… άσχημο. Αλλά άρχισε να ανασαίνει. Ο Φίλιππος χαμογέλασε. «Αυτό μπορώ να το φτιάξω.»</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-2 tracking-wide">08. Η ΠΡΩΤΗ ΑΛΗΘΕΙΑ</h3>
          <p>Ο Pencilo κοίταξε το νέο σχέδιο. Δεν του άρεσε. Αλλά… δούλευε. «Το όμορφο μπορεί να περιμένει», είπε τελικά.</p>
          <p class="mt-2">Η Link έγνεψε. <strong class="text-blue-400">«Το αληθινό όχι.»</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-green-400 mb-3 tracking-wide">09. Η ΑΙΣΘΗΣΗ ΤΟΥ ΠΡΑΓΜΑΤΙΚΟΥ</h3>
          <p>Έφτιαξαν κάτι. Μικρό. Ατελές. Αλλά υπήρχε. Το κράτησαν στα χέρια τους. Και αυτό άλλαξε τα πάντα.</p>
          <p class="mt-2">Η WiseBot πλησίασε. «Τώρα μπήκατε στον κόσμο της δημιουργίας.»</p>
        </section>

        <div class="mt-12 bg-blue-950/60 p-8 rounded-3xl border-2 border-dashed border-blue-500/40 shadow-xl">
           <h4 class="text-xl font-black text-blue-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             🐭 JOURNAL: ΤΟ ΚΑΝΩ ΑΛΗΘΙΝΟ
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-blue-200 font-bold mb-2">1. ΤΟ ΠΕΡΙΠΛΟΚΟ</h5>
               <p class="text-sm mb-2 opacity-80">Τι είναι πολύ δύσκολο ή ακριβό σε αυτό που σκέφτεσαι;</p>
               <div class="w-full h-10 bg-black/30 rounded border border-blue-500/20"></div>
             </div>

             <div>
               <h5 class="text-blue-200 font-bold mb-2">2. Η ΑΠΛΟΠΟΙΗΣΗ</h5>
               <p class="text-sm mb-2 opacity-80">Πώς μπορείς να το φτιάξεις πιο απλά (με ό,τι έχεις σπίτι);</p>
               <div class="w-full h-10 bg-black/30 rounded border border-blue-500/20"></div>
             </div>
             
             <div>
                <h5 class="text-blue-200 font-bold mb-2">3. Η ΔΕΣΜΕΥΣΗ</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-blue-500/10">
                 <p class="text-sm">«Δεν χρειάζομαι το τέλειο.</p>
                 <p class="text-sm">Χρειάζομαι το __________.»</p>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-blue-950/60 p-8 rounded-3xl border border-blue-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-blue-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Η φαντασία χωρίς όρια απογοητεύει. Η φαντασία με πράξη χτίζει αυτοπεποίθηση.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             Όταν τα παιδιά μάθουν να <strong class="text-blue-300">απλοποιούν</strong> (να σβήνουν τα περιττά), μαθαίνουν να φέρνουν τα όνειρα στη ζωή. Το σχέδιο άλλαξε. Και για πρώτη φορά… δεν τους φόβισε.
           </p>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-blue-900/60 to-slate-900/60 p-8 rounded-2xl border border-blue-500/30 text-center italic text-blue-200 shadow-lg">
           «If you can't build it today, it's not a plan. It's a dream.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-blue-400 mb-3 tracking-wide">01. THE PERFECT PLAN</h3>
          <p>The plan was nice. Not just nice. It was perfect. Straight lines. Tidy boxes. Arrows pointing everywhere.</p>
          <p class="mt-4">Pencilo boasted. "If we follow it, it will work."</p>
          <p class="mt-2">Philippos looked with admiration. "Looks professional." Alexandra smiled. Crocus… was bored.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-red-400 mb-3 tracking-wide">02. THE WALL</h3>
          <p>They started. And for a while… all good. Until Philippos stopped.</p>
          <p class="mt-4">— "Umm… we don't have this."</p>
          <p class="mt-2">Eleftheria turned to the plan. "We need this motor."</p>
          <p class="mt-2">Crocus raised an eyebrow. <strong class="text-white">"And where will we find them?"</strong> Silence.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">03. THE BITTER TRUTH</h3>
          <p>They started counting. Time. Money. Materials. Every count cut a little excitement.</p>
          <p class="mt-2">— "This needs a special tool," said Philippos. "And this… is impossible."</p>
          <p class="mt-4">Pencilo looked at the plan again. It was still nice. It just… <strong>couldn't be done.</strong></p>
        </section>

        <section class="bg-blue-900/20 p-6 rounded-xl border-l-8 border-blue-500 my-6 shadow-xl shadow-blue-900/20">
          <h3 class="text-3xl font-black text-white mb-3 tracking-wide">04. THE MOUSE</h3>
          <p>A small <em>click</em> was heard. A mouse with a backpack stood on the table. Cables hung from the bag. Her tail ended in a USB.</p>
          <p class="mt-4 text-blue-300 font-bold">— "Can I ask something? This… who will build it?"</p>
          <p class="mt-2">— "Us," answered Crocus.</p>
          <p class="mt-2 text-white"><strong>Link</strong> smiled wryly. "With what?"</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-cyan-400 mb-3 tracking-wide">05. THE CRITICISM THAT HURTS</h3>
          <p>Link approached the plan. "Here you want something that doesn't exist. Here you want a machine you don't have. And here… <strong>2050 technology.</strong>"</p>
          <p class="mt-4">Pencilo tightened. "The plan is correct."</p>
          <p class="mt-2">Link looked at him calmly. <strong class="text-blue-200">"Correct for whom? For you… or for the real world?"</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-400 mb-3 tracking-wide">06. DREAM vs PLAN</h3>
          <p>"Without vision you don't go forward!" said Pencilo. "Without reality you don't go anywhere!" replied Link.</p>
          <p class="mt-4">WiseBot appeared. "If you can't build it today," she said, "it is not a plan. It is a dream."</p>
          <p class="mt-2">Pencilo lowered his gaze.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-red-400 mb-3 tracking-wide">07. THE ERASING</h3>
          <p>Link took a pencil. <strong>She erased.</strong> Not everything. She erased the unnecessary.</p>
          <p class="mt-2">"Is this possible?" — "Do we have this?" — "Is this needed now?"</p>
          <p class="mt-4">The plan shrank. It became… ugly. But it started breathing. Philippos smiled. "This I can build."</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-2 tracking-wide">08. THE FIRST TRUTH</h3>
          <p>Pencilo looked at the new plan. He didn't like it. But… it worked. "Beautiful can wait," he finally said.</p>
          <p class="mt-2">Link nodded. <strong class="text-blue-400">"Real cannot."</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-green-400 mb-3 tracking-wide">09. THE SENSE OF REALITY</h3>
          <p>They made something. Small. Imperfect. But it existed. They held it in their hands. And that changed everything.</p>
          <p class="mt-2">WiseBot approached. "Now you have entered the world of creation."</p>
        </section>

        <div class="mt-12 bg-blue-950/60 p-8 rounded-3xl border-2 border-dashed border-blue-500/40 shadow-xl">
           <h4 class="text-xl font-black text-blue-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             🐭 JOURNAL: MAKING IT REAL
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-blue-200 font-bold mb-2">1. THE COMPLEX</h5>
               <p class="text-sm mb-2 opacity-80">What is too difficult or expensive in what you are thinking?</p>
               <div class="w-full h-10 bg-black/30 rounded border border-blue-500/20"></div>
             </div>

             <div>
               <h5 class="text-blue-200 font-bold mb-2">2. THE SIMPLIFICATION</h5>
               <p class="text-sm mb-2 opacity-80">How can you make it simpler (with what you have at home)?</p>
               <div class="w-full h-10 bg-black/30 rounded border border-blue-500/20"></div>
             </div>
             
             <div>
                <h5 class="text-blue-200 font-bold mb-2">3. THE COMMITMENT</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-blue-500/10">
                 <p class="text-sm">«I don't need perfect.</p>
                 <p class="text-sm">I need __________.»</p>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-blue-950/60 p-8 rounded-3xl border border-blue-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-blue-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Imagination without limits disappoints. Imagination with action builds confidence.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             When children learn to <strong class="text-blue-300">simplify</strong> (erase the unnecessary), they learn to bring dreams to life. The plan changed. And for the first time… it didn't scare them.
           </p>
        </div>

      </div>
    `
    }
  },
  {
    id: 5,
    title: { el: "ΚΟΙΤΑ ΜΠΡΟΣΤΑ", en: "LOOK AHEAD" },
    theme: { el: "ΟΡΑΜΑ", en: "VISION" },
    stepLabel: { el: "SPARKEN & ΤΟ ΟΡΑΜΑ", en: "SPARKEN & VISION" },
    author: "Sparken",
    cover: IMG_SPARKEN,
    videoUrl: "",
    description: { el: "Το έφτιαξαν, αλλά φοβούνται να το δείξουν γιατί 'δεν είναι τέλειο'. Ο Sparken εμφανίζεται για να τους μάθει ότι τίποτα δεν βγαίνει τέλειο στην αρχή.", en: "They made it, but they are afraid to show it because 'it's not perfect'. Sparken appears to teach them that nothing comes out perfect at the beginning." },
    meaning: { el: "Τίποτα δεν γίνεται τέλειο στο σκοτάδι. Όλα γίνονται καλύτερα μόνο όταν βγουν στο φως.", en: "Nothing becomes perfect in the dark. Everything gets better only when it comes out into the light." },
    xp: 150,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-sky-900/60 to-cyan-900/60 p-8 rounded-2xl border border-sky-500/30 text-center italic text-sky-200 shadow-lg">
           «Αν περιμένεις να είσαι έτοιμος, θα περιμένεις για πάντα.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-sky-400 mb-3 tracking-wide">01. ΤΟ ΠΡΑΓΜΑ ΠΟΥ ΚΡΑΤΟΥΣΑΝ</h3>
          <p>Το είχαν μπροστά τους. Όχι όπως το είχαν φανταστεί. Μικρό. Λίγο στραβό. Με γρατζουνιές. Αλλά <strong>υπήρχε</strong>.</p>
          <p class="mt-4">Ο Φίλιππος το γύριζε στα χέρια του. «Δεν είναι τέλειο.»</p>
          <p class="mt-2">Η Αλεξάνδρα ένιωσε σφίξιμο. «Και αν γελάσουν;»</p>
          <p class="mt-2">Η Ελευθερία δεν μιλούσε. Σκεφτόταν.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">02. Η ΣΙΩΠΗ ΤΗΣ ΤΕΛΕΙΟΜΑΝΙΑΣ</h3>
          <p>Κανείς δεν έλεγε “πάμε”. Ο Crocus ήταν εκεί. Και για πρώτη φορά… δεν φώναζε.</p>
          <p class="mt-2">— «Τι περιμένετε;» ρώτησε χαμηλά.</p>
          <p class="mt-2 text-gray-400">— «Να το κάνουμε καλύτερο», είπε η Ελευθερία.</p>
          <p class="mt-2 text-gray-400">— «Να μην χαλάσει», είπε ο Φίλιππος.</p>
          <p class="mt-4">Ο Crocus τους κοίταξε. <strong class="text-white">«Δηλαδή… να μην το δείξετε ποτέ;»</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-blue-300 mb-3 tracking-wide">03. Η ΑΝΑΜΟΝΗ</h3>
          <p>Πέρασε ώρα. Κανείς δεν άγγιζε το αντικείμενο. Η WiseBot εμφανίστηκε. Δεν μίλησε. Το φως της έμενε σταθερό. Σαν να περίμενε κι αυτή.</p>
        </section>

        <section class="bg-sky-900/20 p-6 rounded-xl border-t-4 border-sky-400 my-6 shadow-xl shadow-sky-500/10">
          <h3 class="text-3xl font-black text-white mb-3 tracking-wide">04. Ο ΑΕΤΟΣ</h3>
          <p>Ένας αέρας άλλαξε το δωμάτιο. Όχι δυνατός. Ψηλός. Σαν να άνοιξε ο ουρανός λίγο. Ένας αετός προσγειώθηκε αθόρυβα. Φτερά σαν ολόγραμμα. Μάτια που έβλεπαν μακριά.</p>
          <p class="mt-4 text-sky-200 font-bold">— «Τι κοιτάτε;» ρώτησε. «Κοιτάτε πολύ κοντά.»</p>
          <p class="mt-2">— «Ποιος είσαι;» ρώτησε η Αλεξάνδρα.</p>
          <p class="mt-2 text-white">— «Με λένε <strong>Sparken</strong>.»</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-cyan-400 mb-3 tracking-wide">05. ΤΟ ΜΕΛΛΟΝ</h3>
          <p>Ο Sparken δεν άγγιξε το αντικείμενο. Κοίταξε <em>πέρα</em> από αυτό. «Ξέρετε τι είναι αυτό που κρατάτε;»</p>
          <p class="mt-2">Η Ελευθερία σκέφτηκε. «Μια πρώτη προσπάθεια.»</p>
          <p class="mt-2">Ο Sparken έγνεψε. «Και ξέρετε τι ΔΕΝ είναι;» Σιωπή.</p>
          <p class="mt-2 text-sky-300 font-bold">«Δεν είναι τελικό.»</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-400 mb-3 tracking-wide">06. Η ΕΞΕΛΙΞΗ</h3>
          <p>«Αν το δείξουμε έτσι, θα νομίζουν ότι δεν ξέρουμε τι κάνουμε!» είπε η Αλεξάνδρα.</p>
          <p class="mt-2">Ο Sparken γύρισε προς το μέρος της. «Και αν δεν το δείξετε, θα νομίζετε εσείς ότι δεν μπορείτε.»</p>
          <p class="mt-4">Η WiseBot μίλησε τελευταία. <strong class="text-white">«Η εξέλιξη χρειάζεται φως. Όχι τελειότητα.»</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-2 tracking-wide">07. ΤΟ ΠΡΩΤΟ ΔΕΙΞΙΜΟ</h3>
          <p>Δεν έκαναν παρουσίαση. Το έδειξαν σε <strong>έναν</strong>. Ένα παιδί από δίπλα. «Τι είναι αυτό;» ρώτησε.</p>
          <p class="mt-2">Ο Φίλιππος δίστασε. «Είναι… κάτι που φτιάχνουμε.»</p>
          <p class="mt-2">Το παιδί το έπιασε. «Δεν είναι τέλειο», είπε.</p>
          <p class="mt-2">Η καρδιά της Αλεξάνδρας βούλιαξε. Μετά—</p>
          <p class="mt-2 text-green-400 font-bold">«Αλλά είναι ωραίο.» Και χαμογέλασε.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-sky-300 mb-3 tracking-wide">08. Ο ΚΥΚΛΟΣ ΚΛΕΙΝΕΙ</h3>
          <p>Το βράδυ, γύρισαν στο τραπέζι. Όχι για να το φτιάξουν τέλειο. Για να το κάνουν καλύτερο.</p>
          <p class="mt-4">Η WiseBot τους κοίταξε. «Σκεφτήκατε.»</p>
          <p class="mt-1">Ο Crocus χαμογέλασε. «Ξεκινήσατε.»</p>
          <p class="mt-1">Ο Pencilo έδειξε το χαρτί. «Σχεδιάσατε.»</p>
          <p class="mt-1">Η Link άγγιξε το αντικείμενο. «Το φτιάξατε.»</p>
          <p class="mt-4 font-bold text-white text-lg">Ο Sparken είπε το τελευταίο. «Τώρα… κοιτάτε μπροστά.»</p>
        </section>

        <div class="mt-12 bg-sky-950/60 p-8 rounded-3xl border-2 border-dashed border-sky-500/40 shadow-xl">
           <h4 class="text-xl font-black text-sky-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             🦅 JOURNAL: ΚΟΙΤΑ ΜΠΡΟΣΤΑ
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-sky-200 font-bold mb-2">1. Ο ΦΟΒΟΣ</h5>
               <p class="text-sm mb-2 opacity-80">Τι κρατάς κρυφό γιατί φοβάσαι ότι "δεν είναι καλό";</p>
               <div class="w-full h-10 bg-black/30 rounded border border-sky-500/20"></div>
             </div>

             <div>
               <h5 class="text-sky-200 font-bold mb-2">2. ΤΟ ΘΑΡΡΟΣ</h5>
               <p class="text-sm mb-2 opacity-80">Σε ποιον ΕΝΑΝ άνθρωπο μπορείς να το δείξεις σήμερα;</p>
               <div class="w-full h-10 bg-black/30 rounded border border-sky-500/20"></div>
             </div>
             
             <div>
                <h5 class="text-sky-200 font-bold mb-2">3. Η ΥΠΟΣΧΕΣΗ</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-sky-500/10">
                 <p class="text-sm">«Δεν περιμένω να είμαι έτοιμος.</p>
                 <p class="text-sm">Κάνω __________.»</p>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-sky-950/60 p-8 rounded-3xl border border-sky-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-sky-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Η τελειομανία μοιάζει με ποιότητα, αλλά συχνά είναι φόβος.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             Όταν τα παιδιά μάθουν ότι επιτρέπεται να δείξουν κάτι ατελές, <strong class="text-sky-300">μαθαίνουν να εξελίσσονται χωρίς ντροπή.</strong> Ο Sparken δεν τους έδειξε το τέλος. Τους έδειξε το επόμενο βήμα.
           </p>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-sky-900/60 to-cyan-900/60 p-8 rounded-2xl border border-sky-500/30 text-center italic text-sky-200 shadow-lg">
           «If you wait to be ready, you will wait forever.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-sky-400 mb-3 tracking-wide">01. THE THING THEY HELD</h3>
          <p>They had it in front of them. Not as they had imagined. Small. A bit crooked. With scratches. But <strong>it existed</strong>.</p>
          <p class="mt-4">Philippos turned it in his hands. «It's not perfect.»</p>
          <p class="mt-2">Alexandra felt tightness. «What if they laugh?»</p>
          <p class="mt-2">Eleftheria didn't speak. She was thinking.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">02. THE SILENCE OF PERFECTIONISM</h3>
          <p>No one said "let's go". Crocus was there. And for the first time... he wasn't shouting.</p>
          <p class="mt-2">— «What are you waiting for?» he asked lowly.</p>
          <p class="mt-2 text-gray-400">— «To make it better», said Eleftheria.</p>
          <p class="mt-2 text-gray-400">— «So it doesn't break», said Philippos.</p>
          <p class="mt-4">Crocus looked at them. <strong class="text-white">«Meaning... never show it?»</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-blue-300 mb-3 tracking-wide">03. THE WAIT</h3>
          <p>Time passed. No one touched the object. WiseBot appeared. She didn't speak. Her light remained steady. As if she was waiting too.</p>
        </section>

        <section class="bg-sky-900/20 p-6 rounded-xl border-t-4 border-sky-400 my-6 shadow-xl shadow-sky-500/10">
          <h3 class="text-3xl font-black text-white mb-3 tracking-wide">04. THE EAGLE</h3>
          <p>A breeze changed the room. Not strong. High. As if the sky opened a little. An eagle landed silently. Wings like holograms. Eyes that saw far.</p>
          <p class="mt-4 text-sky-200 font-bold">— «What are you looking at?» he asked. «You are looking too close.»</p>
          <p class="mt-2">— «Who are you?» asked Alexandra.</p>
          <p class="mt-2 text-white">— «My name is <strong>Sparken</strong>.»</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-cyan-400 mb-3 tracking-wide">05. THE FUTURE</h3>
          <p>Sparken didn't touch the object. He looked <em>beyond</em> it. «Do you know what this is you are holding?»</p>
          <p class="mt-2">Eleftheria thought. «A first attempt.»</p>
          <p class="mt-2">Sparken nodded. «And do you know what it is NOT?» Silence.</p>
          <p class="mt-2 text-sky-300 font-bold">«It is not final.»</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-400 mb-3 tracking-wide">06. EVOLUTION</h3>
          <p>«If we show it like this, they'll think we don't know what we're doing!» said Alexandra.</p>
          <p class="mt-2">Sparken turned towards her. «And if you don't show it, you will think you can't.»</p>
          <p class="mt-4">WiseBot spoke last. <strong class="text-white">«Evolution needs light. Not perfection.»</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-2 tracking-wide">07. THE FIRST SHOWING</h3>
          <p>They didn't do a presentation. They showed it to <strong>one</strong>. A kid from nearby. «What is this?» he asked.</p>
          <p class="mt-2">Philippos hesitated. «It is... something we are making.»</p>
          <p class="mt-2">The kid held it. «It's not perfect», he said.</p>
          <p class="mt-2">Alexandra's heart sank. Then—</p>
          <p class="mt-2 text-green-400 font-bold">«But it is nice.» And he smiled.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-sky-300 mb-3 tracking-wide">08. THE CIRCLE CLOSES</h3>
          <p>That night, they returned to the table. Not to make it perfect. To make it better.</p>
          <p class="mt-4">WiseBot looked at them. «You thought.»</p>
          <p class="mt-1">Crocus smiled. «You started.»</p>
          <p class="mt-1">Pencilo pointed to the paper. «You planned.»</p>
          <p class="mt-1">Link touched the object. «You built it.»</p>
          <p class="mt-4 font-bold text-white text-lg">Sparken said the last part. «Now... you look ahead.»</p>
        </section>

        <div class="mt-12 bg-sky-950/60 p-8 rounded-3xl border-2 border-dashed border-sky-500/40 shadow-xl">
           <h4 class="text-xl font-black text-sky-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             🦅 JOURNAL: LOOK AHEAD
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-sky-200 font-bold mb-2">1. THE FEAR</h5>
               <p class="text-sm mb-2 opacity-80">What are you keeping hidden because you fear it's "not good"?</p>
               <div class="w-full h-10 bg-black/30 rounded border border-sky-500/20"></div>
             </div>

             <div>
               <h5 class="text-sky-200 font-bold mb-2">2. COURAGE</h5>
               <p class="text-sm mb-2 opacity-80">To which ONE person can you show it today?</p>
               <div class="w-full h-10 bg-black/30 rounded border border-sky-500/20"></div>
             </div>
             
             <div>
                <h5 class="text-sky-200 font-bold mb-2">3. THE PROMISE</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-sky-500/10">
                 <p class="text-sm">«I don't wait to be ready.</p>
                 <p class="text-sm">I do __________.»</p>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-sky-950/60 p-8 rounded-3xl border border-sky-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-sky-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Perfectionism looks like quality, but often it is fear.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             When children learn that it is allowed to show something imperfect, <strong class="text-sky-300">they learn to evolve without shame.</strong> Sparken didn't show them the end. He showed them the next step.
           </p>
        </div>

      </div>
    `
    }
  },
  {
    id: 6,
    title: { el: "ΜΑΣ ΚΟΡΟΪΔΕΥΟΥΝ", en: "THEY ARE MOCKING US" },
    theme: { el: "ΑΝΤΟΧΗ", en: "RESILIENCE" },
    stepLabel: { el: "WISEBOT & Η ΑΝΤΟΧΗ", en: "WISEBOT & RESILIENCE" },
    author: "Wisebot & Crocus",
    cover: IMG_WISEBOT,
    videoUrl: "",
    description: {
      el: "Μια ιστορία για τη στιγμή που ο κόσμος γελά — και εσύ πρέπει να διαλέξεις αν θα μικρύνεις ή θα μεγαλώσεις.",
      en: "A story about the moment the world laughs — and you have to choose whether to shrink or grow."
    },
    meaning: {
      el: "Όταν δημιουργείς κάτι αληθινό, κάποιοι θα γελάσουν. Όχι επειδή είναι κακό. Αλλά επειδή δεν είναι έτοιμοι.",
      en: "When you create something real, some will laugh. Not because it's bad. But because they aren't ready."
    },
    xp: 160,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-orange-900/60 to-amber-900/60 p-8 rounded-2xl border border-orange-500/30 text-center italic text-orange-200 shadow-lg">
           «Δεν πονάει το γέλιο. Πονάει το ότι περίμενες χειροκρότημα.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-orange-400 mb-3 tracking-wide">01. ΤΟ ΓΕΛΙΟ ΠΟΥ ΔΕΝ ΗΤΑΝ ΑΣΤΕΙΟ</h3>
          <p>Η αυλή είχε φασαρία. Μπάλες. Φωνές. Τρέξιμο. Ο Φίλιππος κρατούσε το κουτί με το παιχνίδι τους. Η Αλεξάνδρα το είχε στολίσει. Η Ελευθερία είχε γράψει τις οδηγίες.</p>
          <p class="mt-4">— «Να το δείξουμε;» ρώτησε ο Φίλιππος.</p>
          <p class="mt-2">Το άνοιξαν. Στην αρχή… σιωπή. Μετά: «Τι είναι αυτό;» — «Χαχα, ποιος θα κάτσει να το φτιάξει μόνος του;»</p>
          <p class="mt-4">Κάποιος μιμήθηκε τον τρόπο που μιλούσαν. Κάποιος άλλος γέλασε λίγο πιο δυνατά απ’ όλους. <strong class="text-white">Ο ήχος κόλλησε στο κεφάλι της Αλεξάνδρας.</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-red-400 mb-3 tracking-wide">02. Ο ΘΥΜΟΣ ΤΟΥ ΚΡΟΚΟΔΕΙΛΟΥ</h3>
          <p>Ο Crocus δεν άντεξε. «Να τους πούμε! Να τους δείξουμε πόσο κάνουν λάθος!» Η ουρά του χτύπαγε το χώμα.</p>
          <p class="mt-2">— «Ηρέμησε», είπε η Ελευθερία.</p>
          <p class="mt-2">— «Γιατί;» φώναξε ο Φίλιππος. «Μας κοροϊδεύουν!»</p>
          <p class="mt-4">Ο Crocus έκανε ένα βήμα μπροστά. <strong class="text-orange-500">«Ένα λεπτό και τους έχω!»</strong> Η Αλεξάνδρα τον τράβηξε πίσω. «Σταμάτα…»</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">03. Η ΝΤΡΟΠΗ ΠΟΥ ΔΕΝ ΛΕΓΕΤΑΙ</h3>
          <p>Δεν ήταν ο θυμός που πόνεσε. Ηταν η σκέψη: <em>«Κι αν έχουν δίκιο;»</em></p>
          <p class="mt-2">Η Αλεξάνδρα κοίταξε το παιχνίδι. Ξαφνικά της φάνηκε μικρό. «Ίσως να μην είναι τόσο καλό…» ψιθύρισε.</p>
          <p class="mt-2">Ο Φίλιππος γύρισε απότομα. «Μην το λες αυτό!» Η Ελευθερία δεν μίλησε. Απλώς έκλεισε το τετράδιο.</p>
        </section>

        <section class="bg-orange-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
          <h3 class="text-2xl font-black text-amber-400 mb-3 tracking-wide">04. Η WISEBOT ΔΕΝ ΜΙΛΗΣΕ ΑΜΕΣΩΣ</h3>
          <p>Το φως άναψε απαλά. Η WiseBot εμφανίστηκε χωρίς ήχο. Περίμενε.</p>
          <p class="mt-2">Ο Crocus την κοίταξε. «Ε, θα πεις κάτι;»</p>
          <p class="mt-2">Η WiseBot πλησίασε την Αλεξάνδρα. «Πονάει;» Η Αλεξάνδρα έγνεψε.</p>
          <p class="mt-4 text-white font-bold">«Δεν πονάει το γέλιο», συνέχισε η WiseBot. «Πονάει το ότι περίμενες χειροκρότημα».</p>
          <p class="mt-2">Σιωπή.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">05. Η ΑΠΑΝΤΗΣΗ ΠΟΥ ΔΕΝ ΕΙΠΑΝ</h3>
          <p>— «Τι να κάνουμε;» ρώτησε ο Φίλιππος.</p>
          <p class="mt-2">Η WiseBot κούνησε απαλά το κεφάλι. «Σήμερα… απλώς κρατήστε αυτό που είστε».</p>
          <p class="mt-2">— «Και αυτοί;» ρώτησε η Αλεξάνδρα.</p>
          <p class="mt-2 text-amber-200">— «Αυτοί γελάνε επειδή δεν ξέρουν ακόμη. Δεν είναι όλοι έτοιμοι την ίδια στιγμή».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-yellow-400 mb-3 tracking-wide">06. ΜΙΑ ΜΙΚΡΗ ΑΝΑΤΡΟΠΗ</h3>
          <p>Την επόμενη μέρα, ένας από αυτούς προσπάθησε να φτιάξει κάτι παρόμοιο. Δεν δούλεψε. Ο Crocus το είδε. «Να το!»</p>
          <p class="mt-2">Η Αλεξάνδρα χαμογέλασε για πρώτη φορά. Όχι από εκδίκηση. <strong>Από ανακούφιση.</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-orange-300 mb-3 tracking-wide">07. ΤΟ ΒΡΑΔΥ</h3>
          <p>Το παιχνίδι ήταν πάλι πάνω στο τραπέζι.</p>
          <p class="mt-2">— «Δεν θα σταματήσουμε», είπε ο Φίλιππος. «Αλλά δεν θα φωνάζουμε κιόλας», πρόσθεσε η Ελευθερία.</p>
          <p class="mt-2">Η Αλεξάνδρα το άγγιξε. <strong class="text-white">«Ας το κάνουμε καλύτερο. Όχι για αυτούς».</strong></p>
          <p class="mt-2">Η WiseBot χαμογέλασε. Το φως στο στήθος της έλαμψε λίγο πιο δυνατά.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-2 tracking-wide">08. ΤΟ ΚΑΤΙ ΠΟΥ ΑΛΛΑΞΕ</h3>
          <p>Την επόμενη φορά που άκουσαν γέλιο… δεν σταμάτησαν. Δεν απάντησαν. Προχώρησαν.</p>
          <p class="mt-4 font-bold text-lg text-orange-200">Και αυτό, ήταν η πρώτη τους νίκη.</p>
        </section>

        <div class="mt-12 bg-orange-950/60 p-8 rounded-3xl border-2 border-dashed border-orange-500/40 shadow-xl">
           <h4 class="text-xl font-black text-orange-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             🛡️ JOURNAL: ΟΤΑΝ ΜΕ ΚΟΡΟΪΔΕΥΟΥΝ
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-orange-200 font-bold mb-2">1. ΤΙ ΑΚΟΥΣΑ</h5>
               <p class="text-sm mb-2 opacity-80">Γράψε κάτι που άκουσες και σε έκανε να νιώσεις άσχημα:</p>
               <div class="w-full h-10 bg-black/30 rounded border border-orange-500/20"></div>
             </div>

             <div>
               <h5 class="text-orange-200 font-bold mb-2">2. ΤΙ ΕΝΙΩΣΑ</h5>
               <div class="flex flex-wrap gap-3">
                 <span class="px-3 py-1 bg-black/40 rounded-full border border-orange-500/30">Θυμό</span>
                 <span class="px-3 py-1 bg-black/40 rounded-full border border-orange-500/30">Ντροπή</span>
                 <span class="px-3 py-1 bg-black/40 rounded-full border border-orange-500/30">Στεναχώρια</span>
               </div>
             </div>
             
             <div>
                <h5 class="text-orange-200 font-bold mb-2">3. Η ΔΥΝΑΜΗ ΜΟΥ</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-orange-500/10">
                 <p class="text-sm">«Ακόμα κι αν γελάσουν, εγώ θα ________»</p>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-orange-950/60 p-8 rounded-3xl border border-orange-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-orange-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Η κοροϊδία είναι μέρος της διαφοροποίησης. Είναι δύσκολο, αλλά αναγκαίο μάθημα.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             Όταν το παιδί μαθαίνει να μη σταματά από τα γέλια των άλλων, <strong class="text-orange-300">χτίζει εσωτερική δύναμη</strong> — όχι σκληρότητα. Δεν είναι όλοι για το μονοπάτι σου. Και αυτό… είναι εντάξει.
           </p>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-orange-900/60 to-amber-900/60 p-8 rounded-2xl border border-orange-500/30 text-center italic text-orange-200 shadow-lg">
           «Laughter doesn't hurt. What hurts is that you expected applause.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-orange-400 mb-3 tracking-wide">01. THE LAUGHTER THAT WASN'T FUNNY</h3>
          <p>The yard was noisy. Balls. Shouts. Running. Philippos held the box with their toy. Alexandra had decorated it. Eleftheria had written the instructions.</p>
          <p class="mt-4">— «Shall we show it?» asked Philippos.</p>
          <p class="mt-2">They opened it. At first… silence. Then: «What is that?» — «Haha, who sits down to build that alone?»</p>
          <p class="mt-4">Someone mimicked the way they spoke. Someone else laughed a little louder than everyone. <strong class="text-white">The sound got stuck in Alexandra's head.</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-red-400 mb-3 tracking-wide">02. THE CROCODILE'S ANGER</h3>
          <p>Crocus couldn't take it. «Let's tell them! Let's show them how wrong they are!» His tail hit the ground.</p>
          <p class="mt-2">— «Calm down», said Eleftheria.</p>
          <p class="mt-2">— «Why?» shouted Philippos. «They are mocking us!»</p>
          <p class="mt-4">Crocus took a step forward. <strong class="text-orange-500">«One minute and I got them!»</strong> Alexandra pulled him back. «Stop…»</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">03. THE UNSPOKEN SHAME</h3>
          <p>It wasn't the anger that hurt. It was the thought: <em>«What if they are right?»</em></p>
          <p class="mt-2">Alexandra looked at the toy. Suddenly it seemed small. «Maybe it's not that good…» she whispered.</p>
          <p class="mt-2">Philippos turned abruptly. «Don't say that!» Eleftheria didn't speak. She simply closed the notebook.</p>
        </section>

        <section class="bg-orange-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
          <h3 class="text-2xl font-black text-amber-400 mb-3 tracking-wide">04. WISEBOT DIDN'T SPEAK IMMEDIATELY</h3>
          <p>The light glowed softly. WiseBot appeared without sound. She waited.</p>
          <p class="mt-2">Crocus looked at her. «Hey, are you going to say something?»</p>
          <p class="mt-2">WiseBot approached Alexandra. «Does it hurt?» Alexandra nodded.</p>
          <p class="mt-4 text-white font-bold">«Laughter doesn't hurt», continued WiseBot. «What hurts is that you expected applause».</p>
          <p class="mt-2">Silence.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">05. THE UNSPOKEN ANSWER</h3>
          <p>— «What should we do?» asked Philippos.</p>
          <p class="mt-2">WiseBot shook her head gently. «Today… just keep what you are».</p>
          <p class="mt-2">— «And them?» asked Alexandra.</p>
          <p class="mt-2 text-amber-200">— «They laugh because they don't know yet. Not everyone is ready at the same time».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-yellow-400 mb-3 tracking-wide">06. A SMALL TWIST</h3>
          <p>The next day, one of them tried to make something similar. It didn't work. Crocus saw it. «There!»</p>
          <p class="mt-2">Alexandra smiled for the first time. Not from revenge. <strong>From relief.</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-orange-300 mb-3 tracking-wide">07. THE EVENING</h3>
          <p>The game was on the table again.</p>
          <p class="mt-2">— «We won't stop», said Philippos. «But we won't shout either», added Eleftheria.</p>
          <p class="mt-2">Alexandra touched it. <strong class="text-white">«Let's make it better. Not for them».</strong></p>
          <p class="mt-2">WiseBot smiled. The light on her chest shone a little brighter.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-2 tracking-wide">08. THE THING THAT CHANGED</h3>
          <p>The next time they heard laughter… they didn't stop. They didn't answer. They moved forward.</p>
          <p class="mt-4 font-bold text-lg text-orange-200">And that, was their first victory.</p>
        </section>

        <div class="mt-12 bg-orange-950/60 p-8 rounded-3xl border-2 border-dashed border-orange-500/40 shadow-xl">
           <h4 class="text-xl font-black text-orange-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             🛡️ JOURNAL: WHEN THEY MOCK ME
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-orange-200 font-bold mb-2">1. WHAT I HEARD</h5>
               <p class="text-sm mb-2 opacity-80">Write something you heard that made you feel bad:</p>
               <div class="w-full h-10 bg-black/30 rounded border border-orange-500/20"></div>
             </div>

             <div>
               <h5 class="text-orange-200 font-bold mb-2">2. WHAT I FELT</h5>
               <div class="flex flex-wrap gap-3">
                 <span class="px-3 py-1 bg-black/40 rounded-full border border-orange-500/30">Anger</span>
                 <span class="px-3 py-1 bg-black/40 rounded-full border border-orange-500/30">Shame</span>
                 <span class="px-3 py-1 bg-black/40 rounded-full border border-orange-500/30">Sadness</span>
               </div>
             </div>
             
             <div>
                <h5 class="text-orange-200 font-bold mb-2">3. MY POWER</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-orange-500/10">
                 <p class="text-sm">«Even if they laugh, I will ________»</p>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-orange-950/60 p-8 rounded-3xl border border-orange-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-orange-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Mockery is part of differentiation. It is a hard, but necessary lesson.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             When the child learns not to stop at the laughter of others, <strong class="text-orange-300">they build inner strength</strong> — not hardness. Not everyone is for your path. And that… is okay.
           </p>
        </div>

      </div>
    `
    }
  },
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
      el: "Η γνώμη γύρω σου δεν είναι ο κόσμος. Ο κόσμος είναι πολύ πιο μεγάλος απ’ ό,τι νομίζεις.",
      en: "The opinion around you is not the world. The world is much bigger than you think."
    },
    xp: 170,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-teal-900/60 to-cyan-900/60 p-8 rounded-2xl border border-teal-500/30 text-center italic text-teal-200 shadow-lg">
           «Όταν μεγαλώνει ο κόσμος σου, μικραίνει ο φόβος σου.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-teal-400 mb-3 tracking-wide">01. ΕΞΩ ΑΠ’ ΤΗ ΦΟΥΣΚΑ</h3>
          <p>Το αυτοκίνητο έτρεχε στον δρόμο. Βαλίτσες. Μουσική. Στάσεις για χυμούς.</p>
          <p class="mt-2">— «Πού πάμε πάλι;» ρώτησε ο Φίλιππος.</p>
          <p class="mt-2">— «Σε μέρος που δεν μας ξέρει κανείς», είπε η Αλεξάνδρα.</p>
          <p class="mt-4">Η Ελευθερία κοίταζε από το παράθυρο. «Αυτό είναι καλό. Εκεί βλέπεις καθαρά».</p>
          <p class="mt-2 text-gray-400">Ο Crocus κουλουριάστηκε στο πίσω κάθισμα. «Εγώ δεν εμπιστεύομαι μέρη χωρίς γήπεδο», μουρμούρισε.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-cyan-300 mb-3 tracking-wide">02. ΠΑΙΔΙΑ ΠΟΥ ΔΕΝ ΓΕΛΑΝΕ</h3>
          <p>Στην πλατεία μιας άλλης πόλης, τα παιδιά δεν έπαιζαν το ίδιο παιχνίδι. Κάποια ζωγράφιζαν. Κάποια έφτιαχναν κατασκευές. Κάποια συζητούσαν… σοβαρά.</p>
          <p class="mt-4">Ο Φίλιππος πλησίασε. «Τι κάνετε;»</p>
          <p class="mt-2">— «Δοκιμή», απάντησε ένα παιδί.</p>
          <p class="mt-2">— «Τι δοκιμή;»</p>
          <p class="mt-2 text-white font-bold">— «Ιδέες».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">03. Η ΑΝΑΤΡΟΠΗ</h3>
          <p>Η Αλεξάνδρα έδειξε διστακτικά το δικό τους παιχνίδι. Περίμενε το γέλιο. <strong class="text-red-400">Δεν γέλασε κανείς.</strong></p>
          <p class="mt-2">— «Α, ενδιαφέρον», είπε ένας.</p>
          <p class="mt-2">— «Θέλει σκέψη», είπε άλλος. «Μπορούμε να το δοκιμάσουμε;»</p>
          <p class="mt-4">Ο Φίλιππος κοίταξε την Ελευθερία. «Δεν είπαν “χαζό”».</p>
          <p class="mt-2">Η Ελευθερία χαμογέλασε. <strong class="text-teal-300">«Γιατί εδώ… δεν είναι».</strong></p>
        </section>

        <section class="bg-teal-900/20 p-6 rounded-xl border-t-4 border-cyan-400 my-6 shadow-xl shadow-teal-500/10">
          <h3 class="text-3xl font-black text-cyan-200 mb-3 tracking-wide">04. ΤΑ ΦΤΕΡΑ ΤΟΥ SPARKEN</h3>
          <p>Ο αέρας άλλαξε. Ο Sparken κατέβηκε αργά, τα φτερά του άνοιξαν σαν χάρτης.</p>
          <p class="mt-4 text-white">«Βλέπετε; Ο κόσμος δεν είναι ένας κύκλος. Είναι πολλοί».</p>
          <p class="mt-2">Ο Crocus ανασήκωσε το φρύδι. «Δηλαδή δεν είναι όλοι ίδιοι;»</p>
          <p class="mt-2 text-teal-200 font-bold">— «Όχι. Και αυτό είναι τύχη».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-gray-300 mb-3 tracking-wide">05. ΜΕΓΑΛΕΣ ΙΔΕΕΣ</h3>
          <p>Σε ένα μουσείο: «Γιατί αυτό θεωρείται τέχνη;». Σε ένα βιβλιοπωλείο: «Παιδί έγραψε αυτό το βιβλίο;». Σε ένα καφέ: «Εσύ τι φτιάχνεις;»</p>
          <p class="mt-4">Οι ερωτήσεις έπεφταν σαν βροχή. Η Αλεξάνδρα άρχισε να μιλά πιο άνετα. Ο Φίλιππος έκανε σχέδια σε χαρτοπετσέτες. Η Ελευθερία σημείωνε μανιωδώς.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-300 mb-3 tracking-wide">06. Η ΑΠΟΚΑΛΥΨΗ</h3>
          <p>Το βράδυ. «Τελικά… δεν είμαστε περίεργοι», είπε ο Φίλιππος.</p>
          <p class="mt-2">— «Είμαστε απλώς νωρίς», απάντησε η Ελευθερία.</p>
          <p class="mt-2">Η Αλεξάνδρα γέλασε. «Νωρίς… μου αρέσει αυτό».</p>
          <p class="mt-4">Η WiseBot εμφανίστηκε. <strong class="text-white">«Όταν μεγαλώνει ο κόσμος σου, μικραίνει ο φόβος σου».</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-2 tracking-wide">07. ΤΟ ΓΥΡΙΣΜΑ</h3>
          <p>Πίσω στο σπίτι, όλα ήταν ίδια. Αλλά τα παιδιά όχι. Κάποιο γέλιο ακούστηκε πάλι στο σχολείο.</p>
          <p class="mt-2">Ο Φίλιππος σήκωσε τους ώμους. «ΟΚ». Η Αλεξάνδρα χαμογέλασε. Η Ελευθερία άνοιξε το τετράδιο.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-teal-400 mb-3 tracking-wide">08. Η ΝΕΑ ΣΚΕΨΗ</h3>
          <p>Το βράδυ έγραψαν στον τοίχο τους:</p>
          <p class="mt-4 font-serif italic text-lg text-cyan-100 bg-teal-900/40 p-4 rounded-lg border-l-4 border-cyan-400">
            «Δεν φτιάχνουμε κάτι για όλους. Το φτιάχνουμε για εκείνους που το καταλαβαίνουν.»
          </p>
          <p class="mt-4">Ο Sparken έκλεισε τα φτερά του. «Τώρα… βλέπετε πιο μακριά».</p>
        </section>

        <div class="mt-12 bg-teal-950/60 p-8 rounded-3xl border-2 border-dashed border-teal-500/40 shadow-xl">
           <h4 class="text-xl font-black text-teal-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             🌍 JOURNAL: ΑΝΟΙΓΩ ΤΟΝ ΚΟΣΜΟ ΜΟΥ
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-teal-200 font-bold mb-2">1. Η ΦΟΥΣΚΑ ΜΟΥ</h5>
               <p class="text-sm mb-2 opacity-80">Γράψε κάτι που νόμιζες ότι "όλοι" το σκέφτονται έτσι (αλλά τελικά όχι):</p>
               <div class="w-full h-10 bg-black/30 rounded border border-teal-500/20"></div>
             </div>

             <div>
               <h5 class="text-teal-200 font-bold mb-2">2. Η ΑΝΑΚΑΛΥΨΗ</h5>
               <p class="text-sm mb-2 opacity-80">Γράψε κάτι καινούργιο που είδες ή έμαθες και σου άρεσε:</p>
               <div class="w-full h-10 bg-black/30 rounded border border-teal-500/20"></div>
             </div>
             
             <div>
                <h5 class="text-teal-200 font-bold mb-2">3. Η ΥΠΕΝΘΥΜΙΣΗ</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-teal-500/10">
                 <p class="text-sm">«Δεν χρειάζεται να μικρύνω για να ταιριάξω.</p>
                 <p class="text-sm">Ο κόσμος είναι μεγάλος και υπάρχει χώρος για μένα.»</p>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-teal-950/60 p-8 rounded-3xl border border-teal-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-teal-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Όταν ένα παιδί καταλάβει ότι δεν κρίνεται μόνο από το στενό του περιβάλλον (σχολείο/γειτονιά), αποκτά ελευθερία σκέψης.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             Η αλλαγή παραστάσεων δεν είναι απλώς διακοπές. Είναι <strong class="text-teal-300">απαραίτητο άνοιγμα μυαλού</strong> και βάση αυτοπεποίθησης.
           </p>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-teal-900/60 to-cyan-900/60 p-8 rounded-2xl border border-teal-500/30 text-center italic text-teal-200 shadow-lg">
           «When your world grows, your fear shrinks.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-teal-400 mb-3 tracking-wide">01. OUTSIDE THE BUBBLE</h3>
          <p>The car was racing on the road. Suitcases. Music. Stops for juice.</p>
          <p class="mt-2">— «Where are we going again?» asked Philippos.</p>
          <p class="mt-2">— «To a place where no one knows us», said Alexandra.</p>
          <p class="mt-4">Eleftheria looked out the window. «That is good. There you see clearly».</p>
          <p class="mt-2 text-gray-400">Crocus curled up in the back seat. «I don't trust places without a field», he mumbled.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-cyan-300 mb-3 tracking-wide">02. KIDS WHO DON'T LAUGH</h3>
          <p>In the square of another city, the kids were not playing the same game. Some were painting. Some were building structures. Some were discussing… seriously.</p>
          <p class="mt-4">Philippos approached. «What are you doing?»</p>
          <p class="mt-2">— «Testing», answered a child.</p>
          <p class="mt-2">— «Testing what?»</p>
          <p class="mt-2 text-white font-bold">— «Ιδέες».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">03. THE TWIST</h3>
          <p>Alexandra hesitantly showed their own game. She expected laughter. <strong class="text-red-400">No one laughed.</strong></p>
          <p class="mt-2">— «Oh, interesting», said one.</p>
          <p class="mt-2">— «It needs thought», said another. «Can we try it?»</p>
          <p class="mt-4">Philippos looked at Eleftheria. «They didn't say “stupid”».</p>
          <p class="mt-2">Eleftheria smiled. <strong class="text-teal-300">«Because here… it isn't».</strong</p>
        </section>

        <section class="bg-teal-900/20 p-6 rounded-xl border-t-4 border-cyan-400 my-6 shadow-xl shadow-teal-500/10">
          <h3 class="text-3xl font-black text-cyan-200 mb-3 tracking-wide">04. SPARKEN'S WINGS</h3>
          <p>The air changed. Sparken descended slowly, his wings opened like a map.</p>
          <p class="mt-4 text-white">«You see? The world is not one circle. It is many».</p>
          <p class="mt-2">Crocus raised an eyebrow. «Meaning everyone isn't the same?»</p>
          <p class="mt-2 text-teal-200 font-bold">— «No. And that is luck».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-gray-300 mb-3 tracking-wide">05. BIG IDEAS</h3>
          <p>In a museum: «Why is this considered art?». In a bookstore: «A child wrote this book?». In a cafe: «What are you making?»</p>
          <p class="mt-4">The questions fell like rain. Alexandra started speaking more comfortably. Philippos drew plans on napkins. Eleftheria took notes furiously.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-300 mb-3 tracking-wide">06. THE REVELATION</h3>
          <p>That night. «Finally… we aren't weird», said Philippos.</p>
          <p class="mt-2">— «We are just early», replied Eleftheria.</p>
          <p class="mt-2">Alexandra laughed. «Early… I like that».</p>
          <p class="mt-4">WiseBot appeared. <strong class="text-white">«When your world grows, your fear shrinks».</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-2 tracking-wide">07. THE RETURN</h3>
          <p>Back home, everything was the same. But the kids were not. Some laughter was heard again at school.</p>
          <p class="mt-2">Philippos shrugged. «OK». Alexandra smiled. Eleftheria opened the notebook.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-teal-400 mb-3 tracking-wide">08. THE NEW THOUGHT</h3>
          <p>That night they wrote on their wall:</p>
          <p class="mt-4 font-serif italic text-lg text-cyan-100 bg-teal-900/40 p-4 rounded-lg border-l-4 border-cyan-400">
            «We don't make something for everyone. We make it for those who understand it.»
          </p>
          <p class="mt-4">Sparken closed his wings. «Now… you see further».</p>
        </section>

        <div class="mt-12 bg-teal-950/60 p-8 rounded-3xl border-2 border-dashed border-teal-500/40 shadow-xl">
           <h4 class="text-xl font-black text-teal-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             🌍 JOURNAL: OPENING MY WORLD
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-teal-200 font-bold mb-2">1. MY BUBBLE</h5>
               <p class="text-sm mb-2 opacity-80">Write something you thought "everyone" thinks this way (but actually not):</p>
               <div class="w-full h-10 bg-black/30 rounded border border-teal-500/20"></div>
             </div>

             <div>
               <h5 class="text-teal-200 font-bold mb-2">2. THE DISCOVERY</h5>
               <p class="text-sm mb-2 opacity-80">Write something new you saw or learned and liked:</p>
               <div class="w-full h-10 bg-black/30 rounded border border-teal-500/20"></div>
             </div>
             
             <div>
                <h5 class="text-teal-200 font-bold mb-2">3. THE REMINDER</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-teal-500/10">
                 <p class="text-sm">«I don't need to shrink to fit.</p>
                 <p class="text-sm">The world is big and there is space for me.»</p>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-teal-950/60 p-8 rounded-3xl border border-teal-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-teal-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             When a child understands that they are not judged only by their narrow environment (school/neighborhood), they gain freedom of thought.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             Changing scenes isn't just vacation. It is <strong class="text-teal-300">necessary mind opening</strong> and a basis for confidence.
           </p>
        </div>

      </div>
    `
    }
  }
];
