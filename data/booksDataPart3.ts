import { Book } from '../types';

// Images for reference
const IMG_WISEBOT = "/images/wisebot.jpg";
const IMG_PENCILO = "/images/pencilo.jpg";
const IMG_CROCUS = "/images/crocus.jpg";
const IMG_LINK = "/images/link.jpg";
const IMG_SPARKEN = "/images/sparken.jpg";

// BOOKS 15 - 21
export const BOOKS_PART_3: Book[] = [
  {
    id: 15,
    title: { el: "ΑΥΤΟ ΠΟΥ ΦΤΙΑΧΝΕΙΣ, ΣΕ ΦΤΙΑΧΝΕΙ", en: "WHAT YOU MAKE, MAKES YOU" },
    theme: { el: "ΤΑΥΤΟΤΗΤΑ", en: "IDENTITY" },
    stepLabel: { el: "WISEBOT & ΤΑΥΤΟΤΗΤΑ", en: "WISEBOT & IDENTITY" },
    author: "Sparken & Wisebot",
    cover: IMG_WISEBOT,
    videoUrl: "",
    description: { 
      el: "Δεν είναι πια το ίδιο δωμάτιο. Δεν είναι πια τα ίδια παιδιά. Μια ιστορία για τη στιγμή που καταλαβαίνεις ότι το σημαντικότερο έργο... είσαι εσύ.", 
      en: "It is no longer the same room. They are no longer the same children. A story about the moment you realize that the most important project... is you." 
    },
    meaning: { 
      el: "Δεν φτιάχνεις πράγματα για να τελειώσουν. Φτιάχνεις πράγματα για να γίνεις.", 
      en: "You don't make things to finish them. You make things to become." 
    },
    xp: 300,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-purple-900/60 to-yellow-900/60 p-8 rounded-2xl border border-purple-500/30 text-center italic text-purple-200 shadow-lg">
           «Το έργο σου είναι ο καθρέφτης του μυαλού σου.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-purple-400 mb-3 tracking-wide">01. ΔΕΝ ΗΤΑΝ ΠΙΑ ΤΟ ΙΔΙΟ</h3>
          <p>Το δωμάτιο ήταν το ίδιο. Το τραπέζι. Τα μολύβια. Τα χαρτιά. Αλλά κάτι είχε αλλάξει.</p>
          <p class="mt-4">Η Αλεξάνδρα το ένιωθε. Ο Φίλιππος το έβλεπε. Η Ελευθερία το ήξερε.</p>
          <p class="mt-2 text-white font-bold">Δεν ήταν πια παιχνίδι. Ηταν κάτι δικό τους.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-yellow-500 mb-3 tracking-wide">02. Ο ΚΑΘΕΝΑΣ ΑΛΛΙΩΣ</h3>
          <p>Η Αλεξάνδρα κοίταξε τις ζωγραφιές της. «Παλιά βαριόμουν», είπε. «Τώρα θέλω να τελειώνω ό,τι ξεκινάω».</p>
          <p class="mt-2">Ο Φίλιππος έσφιξε ένα κομμάτι. «Δεν θυμώνω όπως πριν. Σταματάω… και ξαναδοκιμάζω».</p>
          <p class="mt-2">Η Ελευθερία έκλεισε το τετράδιο. «Δεν διαβάζω για να ξέρω. Διαβάζω για να εφαρμόζω».</p>
          <p class="mt-4">Κοιτάχτηκαν. Χαμογέλασαν.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">03. ΤΟ ΕΡΓΟ ΤΟΥΣ</h3>
          <p>Δεν ήταν τέλειο. Είχε λάθη. Είχε γρατζουνιές. Αλλά λειτουργούσε. Και, πιο σημαντικό… τους έμοιαζε.</p>
          <p class="mt-2">— «Αυτό είμαστε», είπε ο Φίλιππος.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-300 mb-3 tracking-wide">04. ΟΙ ΗΡΩΕΣ ΔΕΝ ΜΙΛΑΝΕ</h3>
          <p>Η WiseBot εμφανίστηκε. Δεν είπε τίποτα. Το φως στο στήθος της άναψε απαλά.</p>
          <p class="mt-2">Η Link είχε κλείσει την τσάντα της. «Δεν χρειάζομαι άλλα καλώδια», είπε. «Το κάνατε».</p>
          <p class="mt-2">Ο Crocus χαμογέλασε. «Δεν σας έσπρωξα σήμερα. Κι όμως προχωρήσατε».</p>
          <p class="mt-4 text-white">Ο Sparken κατέβηκε χαμηλά. Για πρώτη φορά.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-cyan-300 mb-3 tracking-wide">05. Η ΕΡΩΤΗΣΗ</h3>
          <p>Ο Sparken κοίταξε τα παιδιά. «Τι φτιάξατε;»</p>
          <p class="mt-2">Η Αλεξάνδρα άνοιξε το στόμα. Το έκλεισε. Ο Φίλιππος σκέφτηκε. «Κάτι για παιδιά». Η Ελευθερία κούνησε το κεφάλι. «Όχι μόνο».</p>
          <p class="mt-4">Η WiseBot μίλησε ήρεμα: <strong class="text-purple-300">«Φτιάξατε τον τρόπο που σκέφτεστε».</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">06. Η ΣΥΝΕΙΔΗΤΟΠΟΙΗΣΗ</h3>
          <p>Δεν έγιναν μεγαλύτεροι σε ηλικία. Έγιναν μεγαλύτεροι <strong>μέσα</strong>.</p>
          <p class="mt-2">Κατάλαβαν ότι: Δεν περιμένουν άδεια. Δεν φοβούνται το λάθος. Δεν χρειάζονται χειροκρότημα. Χρειάζονται συνέχεια.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-purple-500 mb-3 tracking-wide">07. ΤΟ ΚΑΘΡΕΦΤΙΣΜΑ</h3>
          <p>Η WiseBot γύρισε προς τα παιδιά. Το πρόσωπό της… ήταν καθρέφτης.</p>
          <p class="mt-2">Η Αλεξάνδρα είδε <strong>θάρρος</strong>. Ο Φίλιππος είδε <strong>επιμονή</strong>. Η Ελευθερία είδε <strong>καθαρότητα</strong>.</p>
          <p class="mt-2">— «Δεν σας έδωσα απαντήσεις», είπε η WiseBot. «Σας έμαθα να ρωτάτε».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-yellow-400 mb-3 tracking-wide">08. ΤΟ ΗΣΥΧΟ ΤΕΛΟΣ</h3>
          <p>Μάζεψαν το τραπέζι. Όχι βιαστικά. Όχι με άγχος.</p>
          <p class="mt-2">— «Τι κάνουμε τώρα;» ρώτησε ο Φίλιππος.</p>
          <p class="mt-2">Η Αλεξάνδρα χαμογέλασε. «Συνεχίζουμε».</p>
          <p class="mt-2">Η Ελευθερία πρόσθεσε: «Και ό,τι φτιάξουμε μετά… θα μας φτιάχνει ξανά».</p>
          <p class="mt-4 font-bold text-white">Ο Sparken άνοιξε τα φτερά του. «Τώρα… μπορείτε να πετάξετε μόνοι σας».</p>
        </section>

        <div class="mt-12 bg-purple-950/60 p-8 rounded-3xl border-2 border-dashed border-purple-500/40 shadow-xl">
           <h4 class="text-xl font-black text-purple-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             💎 JOURNAL: Η ΤΑΥΤΟΤΗΤΑ ΜΟΥ
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-purple-200 font-bold mb-2">1. Η ΑΛΛΑΓΗ</h5>
               <p class="text-sm mb-2 opacity-80">Γράψε 2 πράγματα που άλλαξαν μέσα σου από τότε που ξεκίνησες:</p>
               <div class="w-full h-10 bg-black/30 rounded border border-purple-500/20"></div>
             </div>

             <div>
               <h5 class="text-purple-200 font-bold mb-2">2. Η ΣΥΝΕΧΕΙΑ</h5>
               <p class="text-sm mb-2 opacity-80">Τι θέλεις να συνεχίσεις να φτιάχνεις (ή να μαθαίνεις);</p>
               <div class="w-full h-10 bg-black/30 rounded border border-purple-500/20"></div>
             </div>
             
             <div>
                <h5 class="text-purple-200 font-bold mb-2">3. Η ΔΗΛΩΣΗ</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-purple-500/10">
                 <p class="text-sm">«Δεν είμαι απλά παιδί που παίζει.</p>
                 <p class="text-sm">Είμαι άνθρωπος που __________»</p>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-purple-950/60 p-8 rounded-3xl border border-purple-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-purple-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Το πιο σημαντικό δεν είναι τι έφτιαξε το παιδί. Είναι <strong class="text-purple-300">ποιος έγινε</strong> φτιάχνοντάς το.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             Αν κρατήσει αυτή τη σχέση με τη δημιουργία (ότι τα εμπόδια το μεγαλώνουν), θα τη κουβαλά για πάντα. Το έργο είναι απλώς η αφορμή. Το δημιούργημα είναι το ίδιο το παιδί.
           </p>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-purple-900/60 to-yellow-900/60 p-8 rounded-2xl border border-purple-500/30 text-center italic text-purple-200 shadow-lg">
           «Your work is the mirror of your mind.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-purple-400 mb-3 tracking-wide">01. IT WAS NO LONGER THE SAME</h3>
          <p>The room was the same. The table. The pencils. The papers. But something had changed.</p>
          <p class="mt-4">Alexandra felt it. Philippos saw it. Eleftheria knew it.</p>
          <p class="mt-2 text-white font-bold">It wasn't a game anymore. It was something of their own.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-yellow-500 mb-3 tracking-wide">02. EVERYONE DIFFERENT</h3>
          <p>Alexandra looked at her drawings. "I used to get bored," she said. "Now I want to finish what I start."</p>
          <p class="mt-2">Philippos squeezed a piece. "I don't get angry like before. I stop… and try again."</p>
          <p class="mt-2">Eleftheria closed the notebook. "I don't read to know. I read to apply."</p>
          <p class="mt-4">They looked at each other. They smiled.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">03. THEIR WORK</h3>
          <p>It wasn't perfect. It had mistakes. It had scratches. But it worked. And, more importantly… it looked like them.</p>
          <p class="mt-2">— "This is us," said Philippos.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-300 mb-3 tracking-wide">04. HEROES DON'T SPEAK</h3>
          <p>WiseBot appeared. She said nothing. The light on her chest glowed softly.</p>
          <p class="mt-2">Link had closed her bag. "I don't need more cables," she said. "You did it."</p>
          <p class="mt-2">Crocus smiled. "I didn't push you today. And yet you moved forward."</p>
          <p class="mt-4 text-white">Sparken came down low. For the first time.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-cyan-300 mb-3 tracking-wide">05. THE QUESTION</h3>
          <p>Sparken looked at the children. "What did you make?"</p>
          <p class="mt-2">Alexandra opened her mouth. Closed it. Philippos thought. "Something for kids." Eleftheria shook her head. "Not only."</p>
          <p class="mt-4">WiseBot spoke calmly: <strong class="text-purple-300">«You built the way you think.»</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">06. THE REALIZATION</h3>
          <p>They didn't grow in age. They grew <strong>inside</strong>.</p>
          <p class="mt-2">They understood that: They don't wait for permission. They don't fear mistakes. They don't need applause. They need continuity.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-purple-500 mb-3 tracking-wide">07. THE REFLECTION</h3>
          <p>WiseBot turned to the children. Her face… was a mirror.</p>
          <p class="mt-2">Alexandra saw <strong>courage</strong>. Philippos saw <strong>persistence</strong>. Eleftheria saw <strong>clarity</strong>.</p>
          <p class="mt-2">— "I didn't give you answers," said WiseBot. "I taught you to ask."</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-yellow-400 mb-3 tracking-wide">08. THE QUIET END</h3>
          <p>They tidied the table. Not hastily. Not with stress.</p>
          <p class="mt-2">— "What do we do now?" asked Philippos.</p>
          <p class="mt-2">Alexandra smiled. "We continue."</p>
          <p class="mt-2">Eleftheria added: "And whatever we make next… will make us again."</p>
          <p class="mt-4 font-bold text-white">Sparken opened his wings. "Now… you can fly on your own."</p>
        </section>

        <div class="mt-12 bg-purple-950/60 p-8 rounded-3xl border-2 border-dashed border-purple-500/40 shadow-xl">
           <h4 class="text-xl font-black text-purple-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             💎 JOURNAL: MY IDENTITY
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-purple-200 font-bold mb-2">1. THE CHANGE</h5>
               <p class="text-sm mb-2 opacity-80">Write 2 things that changed inside you since you started:</p>
               <div class="w-full h-10 bg-black/30 rounded border border-purple-500/20"></div>
             </div>

             <div>
               <h5 class="text-purple-200 font-bold mb-2">2. THE CONTINUITY</h5>
               <p class="text-sm mb-2 opacity-80">What do you want to continue making (or learning)?</p>
               <div class="w-full h-10 bg-black/30 rounded border border-purple-500/20"></div>
             </div>
             
             <div>
                <h5 class="text-purple-200 font-bold mb-2">3. THE STATEMENT</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-purple-500/10">
                 <p class="text-sm">«I am not just a kid playing.</p>
                 <p class="text-sm">I am a human who __________»</p>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-purple-950/60 p-8 rounded-3xl border border-purple-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-purple-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             The most important thing isn't what the child made. It is <strong class="text-purple-300">who they became</strong> making it.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             If they keep this relationship with creation (that obstacles grow them), they will carry it forever. The project is just the occasion. The creation is the child itself.
           </p>
        </div>

      </div>
    `
    }
  },
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
        
        <div class="relative bg-gradient-to-r from-emerald-900/60 to-teal-900/60 p-8 rounded-2xl border border-emerald-500/30 text-center italic text-emerald-200 shadow-lg">
           «Όταν βοηθάς, δεν ανεβαίνεις πιο ψηλά. Ανεβαίνεις πιο βαθιά.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-emerald-400 mb-3 tracking-wide">01. ΚΑΠΟΙΟΣ ΑΛΛΟΣ ΣΤΟ ΠΑΡΑΘΥΡΟ</h3>
          <p>Η Αλεξάνδρα το πρόσεξε πρώτη. Ένα παιδί στεκόταν πιο πέρα. Δεν μιλούσε. Δεν πλησίαζε. Απλώς κοιτούσε.</p>
          <p class="mt-2">— «Μας παρακολουθεί», ψιθύρισε.</p>
          <p class="mt-2 text-white">Ο Φίλιππος γύρισε. «Μοιάζει… όπως ήμασταν εμείς στην αρχή».</p>
          <p class="mt-2">Η Ελευθερία δεν απάντησε. Το ήξερε.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">02. ΤΟ ΠΑΛΙΟ ΣΥΝΑΙΣΘΗΜΑ</h3>
          <p>Το παιδί πλησίασε διστακτικά. «Πώς το φτιάξατε; Από πού ξεκινήσατε; Δεν είμαι καλός σαν εσάς…»</p>
          <p class="mt-4">Η φράση χτύπησε περίεργα. Η Αλεξάνδρα ένιωσε κάτι να σφίγγει.</p>
          <p class="mt-2">— «Κι εμείς έτσι λέγαμε».</p>
          <p class="mt-2">Ο Φίλιππος χαμογέλασε. «Και κάναμε λάθος».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-green-500 mb-3 tracking-wide">03. Ο CROCUS ΘΕΛΕΙ ΝΑ ΠΕΙ «ΠΑΜΕ»</h3>
          <p>Ο Crocus πετάχτηκε μπροστά. «Έλα, πάμε! Θα σου δείξουμε!»</p>
          <p class="mt-2">Η Ελευθερία σήκωσε το χέρι. «Όχι έτσι».</p>
          <p class="mt-2">— «Γιατί όχι;»</p>
          <p class="mt-2 text-white font-bold">— «Γιατί δεν χρειάζεται να τον τραβήξουμε. Χρειάζεται να τον αφήσουμε να περπατήσει».</p>
          <p class="mt-4">Ο Crocus συνοφρυώθηκε. «Δύσκολο αυτό».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-300 mb-3 tracking-wide">04. Η WISEBOT ΑΛΛΑΖΕΙ ΘΕΣΗ</h3>
          <p>Η WiseBot εμφανίστηκε. Όχι μπροστά στα παιδιά. <strong>Πίσω τους.</strong> Το φως στο στήθος της άναψε απαλά.</p>
          <p class="mt-2">«Μέχρι τώρα», είπε, «μαθαίνατε να ακούτε. Τώρα μαθαίνετε να <strong>χωράτε</strong> και άλλους».</p>
          <p class="mt-2">Η Αλεξάνδρα κατάλαβε. «Δεν είναι πια για εμάς μόνο».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-blue-300 mb-3 tracking-wide">05. Ο ΧΩΡΟΣ ΓΙΑ ΤΟΝ ΑΛΛΟΝ</h3>
          <p>Ο Pencilo άνοιξε τα σχέδια. «Αυτό… το έφτιαξα εγώ. Αλλά μπορείς να το αλλάξεις».</p>
          <p class="mt-2">Το παιδί δίστασε. «Κι αν το χαλάσω;»</p>
          <p class="mt-2">Ο Φίλιππος απάντησε: «Έτσι μαθαίνεις».</p>
          <p class="mt-2">Η Link έσκυψε. «Και αν χαλάσει, το ξαναφτιάχνουμε».</p>
          <p class="mt-2 text-emerald-200">Το παιδί χαμογέλασε. Πρώτη φορά.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-red-400 mb-3 tracking-wide">06. ΔΕΝ ΗΤΑΝ ΤΕΛΕΙΟ</h3>
          <p>Το αποτέλεσμα δεν ήταν καλό. Κάτι δεν δούλευε. Το παιδί κατέβασε το κεφάλι. «Σας καθυστέρησα».</p>
          <p class="mt-2">Η Αλεξάνδρα γονάτισε δίπλα του. <strong class="text-white">«Όχι. Μας θύμισες».</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-sky-300 mb-3 tracking-wide">07. ΤΟ ΒΑΘΟΣ</h3>
          <p>Ο Sparken κατέβηκε χαμηλά. «Όταν ανεβαίνεις», είπε, «βλέπεις μακριά».</p>
          <p class="mt-2">«Όταν βοηθάς», πρόσθεσε, «δεν ανεβαίνεις πιο ψηλά. <strong class="text-emerald-300">Ανεβαίνεις πιο βαθιά</strong>».</p>
          <p class="mt-2">Η φράση έμεινε.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">08. ΤΟ ΝΟΗΜΑ</h3>
          <p>Το παιδί έφυγε με σχέδια στα χέρια. Όχι έτοιμα. Δικά του.</p>
          <p class="mt-2">Η Αλεξάνδρα κοίταξε την ομάδα. «Δεν ένιωσα πιο κουρασμένη».</p>
          <p class="mt-2">Ο Φίλιππος κούνησε το κεφάλι. «Ούτε εγώ».</p>
          <p class="mt-2">Η Ελευθερία χαμογέλασε. «Γιατί αυτό… είχε νόημα».</p>
        </section>

        <div class="mt-12 bg-emerald-950/60 p-8 rounded-3xl border-2 border-dashed border-emerald-500/40 shadow-xl">
           <h4 class="text-xl font-black text-emerald-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             🤝 JOURNAL: ΟΤΑΝ ΒΟΗΘΑΩ ΑΛΛΟΥΣ
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-emerald-200 font-bold mb-2">1. Η ΠΡΟΣΦΟΡΑ</h5>
               <p class="text-sm mb-2 opacity-80">Γράψε ένα άτομο (φίλο, αδερφό, συμμαθητή) που μπορείς να βοηθήσεις με κάτι μικρό:</p>
               <div class="w-full h-10 bg-black/30 rounded border border-emerald-500/20"></div>
             </div>

             <div>
               <h5 class="text-emerald-200 font-bold mb-2">2. Η ΠΡΑΞΗ</h5>
               <p class="text-sm mb-2 opacity-80">«Μπορώ να βοηθήσω όταν ________».</p>
               <div class="w-full h-10 bg-black/30 rounded border border-emerald-500/20"></div>
             </div>
             
             <div>
                <h5 class="text-emerald-200 font-bold mb-2">3. ΤΟ ΣΥΝΑΙΣΘΗΜΑ</h5>
                <div class="flex flex-wrap gap-3">
                 <span class="px-3 py-1 bg-black/40 rounded-full border border-emerald-500/30">Χαρά</span>
                 <span class="px-3 py-1 bg-black/40 rounded-full border border-emerald-500/30">Υπερηφάνεια</span>
                 <span class="px-3 py-1 bg-black/40 rounded-full border border-emerald-500/30">Νόημα</span>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-emerald-950/60 p-8 rounded-3xl border border-emerald-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-emerald-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Η προσφορά δεν μαθαίνεται με λόγια. Μαθαίνεται με παράδειγμα.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             Όταν ένα παιδί βοηθά χωρίς αντάλλαγμα, <strong class="text-emerald-300">χτίζει χαρακτήρα</strong> που αντέχει στον χρόνο. Δεν προχωράς μόνο για να φτάσεις. Προχωράς για να πάρεις κι άλλους μαζί.
           </p>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-emerald-900/60 to-teal-900/60 p-8 rounded-2xl border border-emerald-500/30 text-center italic text-emerald-200 shadow-lg">
           «When you help, you don't climb higher. You climb deeper.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-emerald-400 mb-3 tracking-wide">01. SOMEONE ELSE AT THE WINDOW</h3>
          <p>Alexandra noticed it first. A child stood further away. He didn't speak. He didn't approach. He just watched.</p>
          <p class="mt-2">— «He is watching us», she whispered.</p>
          <p class="mt-2 text-white">Philippos turned. «He looks… like we were at the beginning».</p>
          <p class="mt-2">Eleftheria didn't answer. She knew.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">02. THE OLD FEELING</h3>
          <p>The child approached hesitantly. «How did you make it? Where did you start? I'm not good like you…»</p>
          <p class="mt-4">The phrase hit strangely. Alexandra felt something tighten.</p>
          <p class="mt-2">— «We used to say that too».</p>
          <p class="mt-2">Philippos smiled. «And we were wrong».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-green-500 mb-3 tracking-wide">03. CROCUS WANTS TO SAY "LET'S GO"</h3>
          <p>Crocus jumped forward. «Come on, let's go! We'll show you!»</p>
          <p class="mt-2">Eleftheria raised her hand. «Not like that».</p>
          <p class="mt-2">— «Why not?»</p>
          <p class="mt-2 text-white font-bold">— «Because we don't need to pull him. We need to let him walk».</p>
          <p class="mt-4">Crocus frowned. «That's hard».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-300 mb-3 tracking-wide">04. WISEBOT CHANGES POSITION</h3>
          <p>WiseBot appeared. Not in front of the children. <strong>Behind them.</strong> The light on her chest glowed softly.</p>
          <p class="mt-2">«Until now», she said, «you were learning to listen. Now you are learning to <strong>make room</strong> for others».</p>
          <p class="mt-2">Alexandra understood. «It's not just for us anymore».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-blue-300 mb-3 tracking-wide">05. THE SPACE FOR THE OTHER</h3>
          <p>Pencilo opened the plans. «This… I made this. But you can change it».</p>
          <p class="mt-2">The child hesitated. «What if I break it?»</p>
          <p class="mt-2">Philippos answered: «That's how you learn».</p>
          <p class="mt-2">Link leaned in. «And if it breaks, we fix it again».</p>
          <p class="mt-2 text-emerald-200">The child smiled. For the first time.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-red-400 mb-3 tracking-wide">06. IT WASN'T PERFECT</h3>
          <p>The result wasn't good. Something didn't work. The child lowered his head. «I delayed you».</p>
          <p class="mt-2">Alexandra knelt beside him. <strong class="text-white">«No. You reminded us».</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-sky-300 mb-3 tracking-wide">07. THE DEPTH</h3>
          <p>Sparken came down low. «When you climb», he said, «you see far».</p>
          <p class="mt-2">«When you help», he added, «you don't climb higher. <strong class="text-emerald-300">You climb deeper</strong>».</p>
          <p class="mt-2">The phrase stayed.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">08. THE MEANING</h3>
          <p>The child left with plans in hand. Not ready-made. His own.</p>
          <p class="mt-2">Alexandra looked at the team. «I didn't feel more tired».</p>
          <p class="mt-2">Philippos shook his head. «Me neither».</p>
          <p class="mt-2">Eleftheria smiled. «Because this… had meaning».</p>
        </section>

        <div class="mt-12 bg-emerald-950/60 p-8 rounded-3xl border-2 border-dashed border-emerald-500/40 shadow-xl">
           <h4 class="text-xl font-black text-emerald-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             🤝 JOURNAL: WHEN I HELP OTHERS
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-emerald-200 font-bold mb-2">1. THE OFFER</h5>
               <p class="text-sm mb-2 opacity-80">Write a person (friend, sibling, classmate) you can help with something small:</p>
               <div class="w-full h-10 bg-black/30 rounded border border-emerald-500/20"></div>
             </div>

             <div>
               <h5 class="text-emerald-200 font-bold mb-2">2. THE ACT</h5>
               <p class="text-sm mb-2 opacity-80">«I can help when ________».</p>
               <div class="w-full h-10 bg-black/30 rounded border border-emerald-500/20"></div>
             </div>
             
             <div>
                <h5 class="text-emerald-200 font-bold mb-2">3. THE FEELING</h5>
                <div class="flex flex-wrap gap-3">
                 <span class="px-3 py-1 bg-black/40 rounded-full border border-emerald-500/30">Joy</span>
                 <span class="px-3 py-1 bg-black/40 rounded-full border border-emerald-500/30">Pride</span>
                 <span class="px-3 py-1 bg-black/40 rounded-full border border-emerald-500/30">Meaning</span>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-emerald-950/60 p-8 rounded-3xl border border-emerald-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-emerald-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Contribution is not learned with words. It is learned by example.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             When a child helps without reward, <strong class="text-emerald-300">they build character</strong> that lasts in time. You don't move forward just to arrive. You move forward to take others with you.
           </p>
        </div>

      </div>
    `
    }
  },
  {
    id: 17,
    title: { el: "ΔΕΝ ΣΕ ΚΑΤΑΛΑΒΑΙΝΟΥΝ ΟΛΟΙ", en: "NOT EVERYONE UNDERSTANDS YOU" },
    theme: { el: "ΩΡΙΜΟΤΗΤΑ", en: "MATURITY" },
    stepLabel: { el: "CROCUS & SPARKEN & ΩΡΙΜΟΤΗΤΑ", en: "CROCUS & SPARKEN & MATURITY" },
    author: "Sparken & Crocus",
    cover: IMG_CROCUS,
    videoUrl: "",
    description: { 
      el: "Παλιά θα προσπαθούσαν να εξηγήσουν. Τώρα απλά χαμογελούν. Μια ιστορία για τη μοναξιά που δεν πονά — όταν ξέρεις ποιος είσαι.", 
      en: "They used to try to explain. Now they just smile. A story about loneliness that doesn't hurt — when you know who you are." 
    },
    meaning: { 
      el: "Δεν είσαι μόνος επειδή δεν σε καταλαβαίνουν όλοι. Είσαι απλώς στον δρόμο σου.", 
      en: "You aren't alone because not everyone understands you. You are simply on your path." 
    },
    xp: 340,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-violet-900/60 to-slate-900/60 p-8 rounded-2xl border border-violet-500/30 text-center italic text-violet-200 shadow-lg">
           «Η πορεία σου δεν χρειάζεται κοινό. Χρειάζεται εσένα.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-violet-400 mb-3 tracking-wide">01. Η ΣΙΩΠΗ ΜΕΤΑ</h3>
          <p>Μετά από όλα όσα είχαν περάσει… κάτι είχε αλλάξει. Όχι έξω. Μέσα.</p>
          <p class="mt-2">Η Αλεξάνδρα μιλούσε λιγότερο. Ο Φίλιππος δεν εξηγούσε συνέχεια. Η Ελευθερία σταμάτησε να προσπαθεί να πείσει.</p>
          <p class="mt-4 text-white font-bold">Δεν ήταν θυμός. Ηταν επιλογή.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">02. Η ΕΡΩΤΗΣΗ</h3>
          <p>Στο σχολείο, κάποιος ρώτησε: «Γιατί δεν μας λες τι φτιάχνετε;»</p>
          <p class="mt-2">Ο Φίλιππος σκέφτηκε να απαντήσει. Μετά… δεν το έκανε.</p>
          <p class="mt-4">Η Αλεξάνδρα τον κοίταξε. «Παλιά θα μιλούσαμε».</p>
          <p class="mt-2 text-violet-200">— «Ναι», είπε. «Αλλά τώρα δεν θέλω να εξηγώ τα πάντα».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-300 mb-3 tracking-wide">03. Η ΑΙΣΘΗΣΗ</h3>
          <p>Η Ελευθερία το ένιωσε πιο έντονα. Όσο προχωρούσαν, τόσο λιγότεροι ρωτούσαν πραγματικά.</p>
          <p class="mt-2">— «Νιώθω… μόνη», είπε. «Αλλά όχι χαμένη».</p>
          <p class="mt-2">Η Αλεξάνδρα χαμογέλασε. «Σαν να περπατάς σε δρόμο που δεν έχει πολύ κόσμο».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-cyan-300 mb-3 tracking-wide">04. Ο SPARKEN ΤΟ ΛΕΕΙ ΚΑΘΑΡΑ</h3>
          <p>Ο Sparken κατέβηκε χαμηλά. Χωρίς φτερά. Χωρίς ολογράμματα.</p>
          <p class="mt-2">«Όταν βλέπεις πιο μπροστά», είπε, «δεν μπορείς να εξηγείς κάθε βήμα».</p>
          <p class="mt-2">Ο Φίλιππος συνοφρυώθηκε. «Και αν παρεξηγηθούμε;»</p>
          <p class="mt-2 text-white font-bold">— «Θα παρεξηγηθείτε. Αλλά δεν θα χαθείτε».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-green-400 mb-3 tracking-wide">05. Ο CROCUS ΔΕΝ ΦΩΝΑΖΕΙ</h3>
          <p>Ο Crocus πλησίασε. Ασυνήθιστα ήρεμος.</p>
          <p class="mt-2">— «Παλιά θα έλεγα “πάμε να τους δείξουμε”».</p>
          <p class="mt-2">— «Τώρα;» ρώτησε η Αλεξάνδρα.</p>
          <p class="mt-2 text-violet-200">— «Τώρα λέω… πάμε να συνεχίσουμε».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-400 mb-3 tracking-wide">06. Ο ΚΑΘΡΕΦΤΗΣ</h3>
          <p>Η WiseBot εμφανίστηκε. «Δεν σας απομακρύνουν όλοι», είπε. «Απλώς… δεν περπατούν όλοι τον ίδιο δρόμο».</p>
          <p class="mt-4">Ένα παιδί πλησίασε. «Δεν καταλαβαίνω γιατί το κάνετε».</p>
          <p class="mt-2">Η Αλεξάνδρα χαμογέλασε. «Δεν πειράζει». Το παιδί έφυγε. <strong>Χωρίς απάντηση. Χωρίς ένταση.</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">07. Η ΑΝΑΚΟΥΦΙΣΗ</h3>
          <p>Το απόγευμα ήταν ήσυχο. Η Ελευθερία έγραψε: <em>«Δεν χρειάζεται να με καταλαβαίνουν όλοι».</em></p>
          <p class="mt-4">Ο Sparken κοίταξε ψηλά. «Αυτό είναι <strong>ελευθερία</strong>».</p>
        </section>

        <div class="mt-12 bg-violet-950/60 p-8 rounded-3xl border-2 border-dashed border-violet-500/40 shadow-xl">
           <h4 class="text-xl font-black text-violet-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             🌌 JOURNAL: Η ΔΙΚΗ ΜΟΥ ΠΟΡΕΙΑ
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-violet-200 font-bold mb-2">1. Η ΠΑΡΕΞΗΓΗΣΗ</h5>
               <p class="text-sm mb-2 opacity-80">Γράψε ένα άτομο που νιώθεις ότι δεν σε καταλαβαίνει πάντα:</p>
               <div class="w-full h-10 bg-black/30 rounded border border-violet-500/20"></div>
             </div>

             <div>
               <h5 class="text-violet-200 font-bold mb-2">2. Η ΕΠΙΛΟΓΗ</h5>
               <p class="text-sm mb-2 opacity-80">Τι θα διαλέξεις να κάνεις την επόμενη φορά;</p>
               <div class="flex gap-4 mt-2">
                 <div class="bg-black/40 p-3 rounded border border-violet-500/30 text-sm">Να προσπαθήσω να εξηγήσω</div>
                 <div class="bg-violet-900/40 p-3 rounded border border-violet-500 text-sm font-bold text-white">Να συνεχίσω τον δρόμο μου</div>
               </div>
             </div>
             
             <div>
                <h5 class="text-violet-200 font-bold mb-2">3. Η ΔΗΛΩΣΗ</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-violet-500/10">
                 <p class="text-sm">«Δεν χρειάζεται να με καταλαβαίνουν όλοι για να συνεχίσω.»</p>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-violet-950/60 p-8 rounded-3xl border border-violet-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-violet-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Όταν ένα παιδί σταματήσει να ζητά κατανόηση από όλους, αρχίζει να ακούει τον εαυτό του.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             Αυτό δεν είναι απόσταση ή εγωισμός. Είναι <strong class="text-violet-300">ωρίμανση</strong>. Η ανάγκη για καθολική αποδοχή φεύγει, και μένει η σιγουριά της πορείας.
           </p>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-violet-900/60 to-slate-900/60 p-8 rounded-2xl border border-violet-500/30 text-center italic text-violet-200 shadow-lg">
           «Your journey doesn't need an audience. It needs you.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-violet-400 mb-3 tracking-wide">01. THE SILENCE AFTER</h3>
          <p>After everything they had been through... something had changed. Not outside. Inside.</p>
          <p class="mt-2">Alexandra spoke less. Philippos didn't explain constantly. Eleftheria stopped trying to convince.</p>
          <p class="mt-4 text-white font-bold">It wasn't anger. It was a choice.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">02. THE QUESTION</h3>
          <p>At school, someone asked: "Why don't you tell us what you're making?"</p>
          <p class="mt-2">Philippos thought about answering. Then... he didn't.</p>
          <p class="mt-4">Alexandra looked at him. "Before, we would have spoken."</p>
          <p class="mt-2 text-violet-200">— "Yes," she said. "But now I don't want to explain everything."</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-300 mb-3 tracking-wide">03. THE FEELING</h3>
          <p>Eleftheria felt it more intensely. The further they went, the fewer people really asked.</p>
          <p class="mt-2">— "I feel... lonely," she said. "But not lost."</p>
          <p class="mt-2">Alexandra smiled. "Like walking on a road without many people."</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-cyan-300 mb-3 tracking-wide">04. SPARKEN SAYS IT CLEARLY</h3>
          <p>Sparken came down low. No wings. No holograms.</p>
          <p class="mt-2">"When you see further ahead," he said, "you can't explain every step."</p>
          <p class="mt-2">Philippos frowned. "What if we are misunderstood?"</p>
          <p class="mt-2 text-white font-bold">— "You will be misunderstood. But you won't be lost."</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-green-400 mb-3 tracking-wide">05. CROCUS DOESN'T SHOUT</h3>
          <p>Crocus approached. Unusually calm.</p>
          <p class="mt-2">— "Before I would say 'let's go show them'."</p>
          <p class="mt-2">— "Now?" asked Alexandra.</p>
          <p class="mt-2 text-violet-200">— "Now I say... let's go continue."</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-400 mb-3 tracking-wide">06. THE MIRROR</h3>
          <p>WiseBot appeared. "Not everyone pushes you away," she said. "It's just... not everyone walks the same path."</p>
          <p class="mt-4">A child approached. "I don't understand why you do it."</p>
          <p class="mt-2">Alexandra smiled. "It's okay." The child left. <strong>No answer. No tension.</strong></p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">07. THE RELIEF</h3>
          <p>The afternoon was quiet. Eleftheria wrote: <em>"I don't need everyone to understand me."</em></p>
          <p class="mt-4">Sparken looked up. "This is <strong>freedom</strong>."</p>
        </section>

        <div class="mt-12 bg-violet-950/60 p-8 rounded-3xl border-2 border-dashed border-violet-500/40 shadow-xl">
           <h4 class="text-xl font-black text-violet-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             🌌 JOURNAL: MY OWN PATH
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-violet-200 font-bold mb-2">1. THE MISUNDERSTANDING</h5>
               <p class="text-sm mb-2 opacity-80">Write a person you feel doesn't always understand you:</p>
               <div class="w-full h-10 bg-black/30 rounded border border-violet-500/20"></div>
             </div>

             <div>
               <h5 class="text-violet-200 font-bold mb-2">2. THE CHOICE</h5>
               <p class="text-sm mb-2 opacity-80">What will you choose to do next time?</p>
               <div class="flex gap-4 mt-2">
                 <div class="bg-black/40 p-3 rounded border border-violet-500/30 text-sm">Try to explain</div>
                 <div class="bg-violet-900/40 p-3 rounded border border-violet-500 text-sm font-bold text-white">Continue my path</div>
               </div>
             </div>
             
             <div>
                <h5 class="text-violet-200 font-bold mb-2">3. THE STATEMENT</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-violet-500/10">
                 <p class="text-sm">«I don't need everyone to understand me to continue.»</p>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-violet-950/60 p-8 rounded-3xl border border-violet-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-violet-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             When a child stops asking for understanding from everyone, they start listening to themselves.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             This isn't distance or selfishness. It is <strong class="text-violet-300">maturity</strong>. The need for universal acceptance fades, and the certainty of the path remains.
           </p>
        </div>

      </div>
    `
    }
  },
  {
    id: 18,
    title: { el: "ΤΟ ΛΑΘΟΣ ΠΟΥ ΜΑΣ ΕΣΩΣΕ", en: "THE MISTAKE THAT SAVED US" },
    theme: { el: "ΕΥΘΥΝΗ", en: "RESPONSIBILITY" },
    stepLabel: { el: "LINK & WISEBOT & ΕΥΘΥΝΗ", en: "LINK, WISEBOT & RESPONSIBILITY" },
    author: "Link & Wisebot",
    cover: IMG_LINK,
    videoUrl: "",
    description: { 
      el: "Ήταν σίγουροι ότι θα πετύχουν. Αλλά όλα πήγαν στραβά. Μια ιστορία για τη στιγμή που σταματάς να κατηγορείς και αρχίζεις να μαθαίνεις.", 
      en: "They were sure they would succeed. But everything went wrong. A story about the moment you stop blaming and start learning." 
    },
    meaning: { 
      el: "Το λάθος δεν σε χαλάει. Σε αποκαλύπτει. Και αν το κοιτάξεις σωστά, σε δυναμώνει.", 
      en: "The mistake doesn't break you. It reveals you. And if you look at it right, it strengthens you." 
    },
    xp: 360,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-red-900/60 to-slate-900/60 p-8 rounded-2xl border border-red-500/30 text-center italic text-red-200 shadow-lg">
           «Το λάθος δεν ήρθε για να σας τιμωρήσει. Ήρθε για να σας δείξει πώς δουλεύετε όταν πιέζεστε.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-red-400 mb-3 tracking-wide">01. ΤΟ «ΣΙΓΟΥΡΟ»</h3>
          <p>«Αυτή τη φορά το ’χουμε», είπε ο Φίλιππος. Το σχέδιο ήταν έτοιμο. Η ιδέα δοκιμασμένη. Ο χρόνος πιεσμένος.</p>
          <p class="mt-2">Η Αλεξάνδρα δίστασε. «Νιώθω κάτι…»</p>
          <p class="mt-2 text-white">Ο Crocus πετάχτηκε. «ΠΑΜΕ! Μην το χαλάμε». Και… πήγαν.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">02. ΤΟ ΣΠΑΣΙΜΟ</h3>
          <p>Κάτι δεν λειτούργησε. Όχι λίγο. <strong>Πολύ.</strong> Το παιχνίδι κόλλησε. Η παρουσίαση μπερδεύτηκε. Ο κόσμος περίμενε. Η σιωπή ήταν βαριά.</p>
          <p class="mt-4">Ο Φίλιππος πάγωσε. «Φταίω εγώ».</p>
          <p class="mt-2">Η Ελευθερία έσφιξε τα χέρια. «Έπρεπε να το ελέγξουμε ξανά».</p>
          <p class="mt-2">Η Αλεξάνδρα ένιωσε την καρδιά της να πέφτει. «Σας το είπα…»</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-red-500 mb-3 tracking-wide">03. Ο ΘΥΜΟΣ</h3>
          <p>Ο Crocus γύρισε απότομα. «Γιατί δεν μίλησες πιο δυνατά;»</p>
          <p class="mt-2">Η Αλεξάνδρα κοκκίνισε. «Προσπάθησα».</p>
          <p class="mt-2">Ο Φίλιππος χτύπησε το τραπέζι. «Σταματήστε!»</p>
          <p class="mt-2 text-white">Για πρώτη φορά… κανείς δεν ήξερε τι να πει.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-blue-300 mb-3 tracking-wide">04. Η LINK ΔΕΝ ΚΡΥΒΕΤΑΙ</h3>
          <p>Η Link εμφανίστηκε αθόρυβα. «Το λάθος δεν ήταν τεχνικό», είπε. «Ήταν ότι βιαστήκαμε».</p>
          <p class="mt-2">Η Ελευθερία την κοίταξε. «Δηλαδή;»</p>
          <p class="mt-2 text-blue-100 font-bold">— «Δεν ακούσαμε όλα τα σήματα».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-purple-400 mb-3 tracking-wide">05. Η ΑΝΑΛΥΣΗ</h3>
          <p>Ο Pencilo άνοιξε τα σχέδια. Όχι για να διορθώσει. Για να <strong>καταλάβει</strong>.</p>
          <p class="mt-2">«Εδώ… δεν αφήσαμε χώρο». — «Και εδώ… υποθέσαμε». — «Και εδώ… φοβήθηκα να επιμείνω».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-300 mb-3 tracking-wide">06. ΤΟ ΜΑΘΗΜΑ</h3>
          <p>Η WiseBot εμφανίστηκε. Δεν έλαμψε. Δεν μίλησε αμέσως.</p>
          <p class="mt-4">«Αυτό το λάθος», είπε τελικά, «δεν ήρθε για να σας τιμωρήσει. Ήρθε για να σας δείξει πώς δουλεύετε όταν πιέζεστε».</p>
          <p class="mt-2">Ο Crocus κατέβασε το κεφάλι.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">07. Η ΑΛΗΘΕΙΑ</h3>
          <p>Η Ελευθερία μίλησε πρώτη. «Δεν περιμέναμε ο ένας τον άλλον».</p>
          <p class="mt-2">Ο Φίλιππος πήρε ανάσα. «Ήθελα να τελειώσει γρήγορα».</p>
          <p class="mt-2">Η Αλεξάνδρα σήκωσε το βλέμμα. «Κι εγώ… δεν εμπιστεύτηκα τη φωνή μου».</p>
          <p class="mt-4 font-bold text-gray-300">Δεν ήταν κατηγορία. Ηταν καθαρότητα.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-slate-300 mb-3 tracking-wide">08. ΤΟ ΞΑΝΑ</h3>
          <p>Δεν έφτιαξαν αμέσως κάτι καινούργιο. Έφτιαξαν πρώτα <strong>τον τρόπο</strong>. Μίλησαν. Άκουσαν. Σταμάτησαν όταν κάτι δεν έδενε.</p>
          <p class="mt-2">Η Link χαμογέλασε. «Τώρα δουλεύετε σαν ομάδα».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-cyan-400 mb-3 tracking-wide">09. ΤΟ ΑΠΟΤΕΛΕΣΜΑ</h3>
          <p>Το νέο αποτέλεσμα δεν ήταν εντυπωσιακό. Ήταν σταθερό. Λειτουργούσε.</p>
          <p class="mt-4">Ο Sparken εμφανίστηκε ψηλά. <strong class="text-white">«Αυτό το λάθος… σας έσωσε από πολλά μελλοντικά».</strong></p>
        </section>

        <div class="mt-12 bg-red-950/60 p-8 rounded-3xl border-2 border-dashed border-red-500/40 shadow-xl">
           <h4 class="text-xl font-black text-red-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             🩹 JOURNAL: ΤΟ ΛΑΘΟΣ ΠΟΥ ΜΕ ΒΟΗΘΗΣΕ
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-red-200 font-bold mb-2">1. ΤΟ ΛΑΘΟΣ</h5>
               <p class="text-sm mb-2 opacity-80">Γράψε ένα λάθος που έκανες πρόσφατα:</p>
               <div class="w-full h-10 bg-black/30 rounded border border-red-500/20"></div>
             </div>

             <div>
               <h5 class="text-red-200 font-bold mb-2">2. ΤΟ ΜΑΘΗΜΑ</h5>
               <p class="text-sm mb-2 opacity-80">Συμπλήρωσε: «Από αυτό το λάθος έμαθα ότι ________».</p>
               <div class="w-full h-10 bg-black/30 rounded border border-red-500/20"></div>
             </div>
             
             <div>
                <h5 class="text-red-200 font-bold mb-2">3. Η ΑΛΛΑΓΗ</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-red-500/10">
                 <p class="text-sm">«Την επόμενη φορά θα προσέξω να __________»</p>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-red-950/60 p-8 rounded-3xl border border-red-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-red-300 uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Τα λάθη δεν χρειάζονται τιμωρία. Χρειάζονται χώρο για κατανόηση.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             Έτσι ένα παιδί μαθαίνει να μην φοβάται την ευθύνη, αλλά να την αναλαμβάνει. Δεν πανηγύρισαν. Αλλά ήξεραν: <strong class="text-red-200">αν δεν είχε γίνει αυτό το λάθος, δεν θα είχαν γίνει αυτοί.</strong>
           </p>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-red-900/60 to-slate-900/60 p-8 rounded-2xl border border-red-500/30 text-center italic text-red-200 shadow-lg">
           «The mistake didn't come to punish you. It came to show you how you work when you are pressured.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-red-400 mb-3 tracking-wide">01. THE "SURE THING"</h3>
          <p>"This time we got it", said Philippos. The plan was ready. The idea tested. Time was tight.</p>
          <p class="mt-2">Alexandra hesitated. "I feel something..."</p>
          <p class="mt-2 text-white">Crocus jumped in. "LET'S GO! Don't spoil it". And... they went.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">02. THE BREAK</h3>
          <p>Something didn't work. Not a little. <strong>A lot.</strong> The game stuck. The presentation got confused. The crowd waited. The silence was heavy.</p>
          <p class="mt-4">Philippos froze. "It's my fault".</p>
          <p class="mt-2">Eleftheria squeezed her hands. "We should have checked it again".</p>
          <p class="mt-2">Alexandra felt her heart dropping. "I told you..."</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-red-500 mb-3 tracking-wide">03. THE ANGER</h3>
          <p>Crocus turned abruptly. "Why didn't you speak louder?"</p>
          <p class="mt-2">Alexandra blushed. "I tried".</p>
          <p class="mt-2">Philippos hit the table. "Stop it!"</p>
          <p class="mt-2 text-white">For the first time... no one knew what to say.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-blue-300 mb-3 tracking-wide">04. LINK DOESN'T HIDE</h3>
          <p>Link appeared silently. "The mistake wasn't technical", she said. "It was that we rushed".</p>
          <p class="mt-2">Eleftheria looked at her. "Meaning?"</p>
          <p class="mt-2 text-blue-100 font-bold">— "We didn't listen to all the signals".</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-purple-400 mb-3 tracking-wide">05. THE ANALYSIS</h3>
          <p>Pencilo opened the plans. Not to fix. To <strong>understand</strong>.</p>
          <p class="mt-2">"Here... we didn't leave space". — "And here... we assumed". — "And here... I was afraid to insist".</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-300 mb-3 tracking-wide">06. THE LESSON</h3>
          <p>WiseBot appeared. She didn't shine. She didn't speak immediately.</p>
          <p class="mt-4">"This mistake", she finally said, "didn't come to punish you. It came to show you how you work when you are pressured".</p>
          <p class="mt-2">Crocus lowered his head.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">07. THE TRUTH</h3>
          <p>Eleftheria spoke first. "We didn't wait for each other".</p>
          <p class="mt-2">Philippos took a breath. "I wanted it to finish quickly".</p>
          <p class="mt-2">Alexandra looked up. "And I... didn't trust my voice".</p>
          <p class="mt-4 font-bold text-gray-300">It wasn't an accusation. It was clarity.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-slate-300 mb-3 tracking-wide">08. THE RE-DO</h3>
          <p>They didn't make something new immediately. They made the way first. They spoke. They listened. They stopped when something didn't fit.</p>
          <p class="mt-2">Link smiled. "Now you work like a team".</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-cyan-400 mb-3 tracking-wide">09. THE RESULT</h3>
          <p>The new result wasn't impressive. It was stable. It worked.</p>
          <p class="mt-4">Sparken appeared high above. <strong class="text-white">"This mistake... saved you from many future ones".</strong></p>
        </section>

        <div class="mt-12 bg-red-950/60 p-8 rounded-3xl border-2 border-dashed border-red-500/40 shadow-xl">
           <h4 class="text-xl font-black text-red-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             🩹 JOURNAL: THE MISTAKE THAT HELPED ME
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-red-200 font-bold mb-2">1. THE MISTAKE</h5>
               <p class="text-sm mb-2 opacity-80">Write a mistake you made recently:</p>
               <div class="w-full h-10 bg-black/30 rounded border border-red-500/20"></div>
             </div>

             <div>
               <h5 class="text-red-200 font-bold mb-2">2. THE LESSON</h5>
               <p class="text-sm mb-2 opacity-80">Complete: "From this mistake I learned that ________".</p>
               <div class="w-full h-10 bg-black/30 rounded border border-red-500/20"></div>
             </div>
             
             <div>
                <h5 class="text-red-200 font-bold mb-2">3. THE CHANGE</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-red-500/10">
                 <p class="text-sm">«Next time I will be careful to __________»</p>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-950 to-red-950/60 p-8 rounded-3xl border border-red-500/30 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-red-300 uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Mistakes don't need punishment. They need space for understanding.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             This way a child learns not to fear responsibility, but to take it. They didn't celebrate. But they knew: <strong class="text-red-200">if this mistake hadn't happened, they wouldn't have become who they are.</strong>
           </p>
        </div>

      </div>
    `
    }
  },
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
        
        <div class="relative bg-gradient-to-r from-orange-900/60 to-rose-900/60 p-8 rounded-2xl border border-orange-500/30 text-center italic text-orange-200 shadow-lg">
           «Η ηγεσία δεν είναι έλεγχος. Είναι εμπιστοσύνη.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-orange-400 mb-3 tracking-wide">01. ΔΕΝ ΗΤΑΝ ΠΙΑ ΜΟΝΟΙ</h3>
          <p>Το δωμάτιο είχε αλλάξει. Όχι στα πράγματα. Στους ανθρώπους. Υπήρχαν κι άλλα παιδιά τώρα. Άλλα βλέμματα. Άλλες φωνές.</p>
          <p class="mt-2">Η Αλεξάνδρα το πρόσεξε. «Είναι… περίεργο».</p>
          <p class="mt-2">Ο Φίλιππος έγνεψε. «Σαν να μην είναι πια μόνο δικό μας».</p>
          <p class="mt-2 text-white">Η Ελευθερία κατάλαβε. «Και αυτό ακριβώς σημαίνει ότι <strong>πέτυχε</strong>».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">02. ΟΙ ΝΕΟΙ</h3>
          <p>Κάποια παιδιά μιλούσαν πολύ. Άλλα καθόλου. Ένα παιδί έκανε πολλές ερωτήσεις. Ένα άλλο απλώς παρατηρούσε.</p>
          <p class="mt-2">Η Αλεξάνδρα χαμογέλασε. «Ήμασταν κι εμείς έτσι».</p>
          <p class="mt-2">Ο Φίλιππος κοίταξε τον πάγκο. «Και κάναμε λάθη».</p>
          <p class="mt-2">Η Ελευθερία πρόσθεσε: «Και μάθαμε».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-rose-400 mb-3 tracking-wide">03. ΔΕΝ ΓΙΝΕΤΑΙ ΟΠΩΣ ΘΕΛΕΙΣ</h3>
          <p>Ένα παιδί άλλαξε το σχέδιο. «Όχι έτσι», είπε αυθόρμητα ο Φίλιππος. Σταμάτησε. Πήρε ανάσα. «Συγγνώμη».</p>
          <p class="mt-2">Το παιδί δίστασε. «Το χάλασα;»</p>
          <p class="mt-2 text-orange-300">Η Αλεξάνδρα γονάτισε. «Όχι. Το έκανες δικό σου».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-red-400 mb-3 tracking-wide">04. Ο CROCUS ΚΑΝΕΙ ΠΙΣΩ</h3>
          <p>Ο Crocus έβραζε. «Να τους δείξουμε πώς γίνεται σωστά».</p>
          <p class="mt-2">Η Ελευθερία τον κοίταξε. «Όχι. Αν τους δείξουμε, δεν θα το ζήσουν».</p>
          <p class="mt-2">Ο Crocus έμεινε σιωπηλός. Δύσκολο γι’ αυτόν.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-300 mb-3 tracking-wide">05. Η WISEBOT ΑΝΟΙΓΕΙ ΧΩΡΟ</h3>
          <p>Η WiseBot εμφανίστηκε. Δεν στάθηκε μπροστά. Στάθηκε στο πλάι.</p>
          <p class="mt-2">«Όταν ένας κύκλος ανοίγει», είπε, «ο ρόλος σου αλλάζει. Από “κάνω”, γίνεσαι <strong>“κρατάω χώρο”</strong>».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-blue-300 mb-3 tracking-wide">06. Η ΑΠΟΧΩΡΗΣΗ</h3>
          <p>Ο Pencilo άφησε τα μολύβια στο τραπέζι. «Δεν χρειάζεται να σχεδιάσω εγώ».</p>
          <p class="mt-2">Η Link χαμογέλασε. «Ούτε να διορθώσω εγώ».</p>
          <p class="mt-2">Ο Φίλιππος ένιωσε κάτι περίεργο. «Σαν να… αποχωρούμε;»</p>
          <p class="mt-2 text-white font-bold">Η Ελευθερία κούνησε το κεφάλι. «Σαν να μεγαλώνουμε».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-cyan-400 mb-3 tracking-wide">07. ΤΟ ΝΕΟ ΚΕΝΤΡΟ</h3>
          <p>Ένα άλλο παιδί πήρε πρωτοβουλία. Έδωσε οδηγίες. Έκανε λάθος. Συνέχισε. Η ομάδα τους κοιτούσε. Όχι για να κρίνει. Για να χαρεί.</p>
          <p class="mt-4">Ο Sparken φάνηκε ψηλά. «Τώρα ο κύκλος κινείται μόνος του».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-orange-300 mb-3 tracking-wide">08. ΤΟ ΣΥΝΑΙΣΘΗΜΑ</h3>
          <p>Η Αλεξάνδρα ένιωσε συγκίνηση. Ο Φίλιππος περηφάνια. Η Ελευθερία ηρεμία.</p>
          <p class="mt-2">— «Δεν χάσαμε κάτι», είπε ο Φίλιππος. «Το μοιραστήκαμε».</p>
          <p class="mt-2">Η WiseBot άναψε απαλά.</p>
        </section>

        <div class="mt-12 bg-orange-950/60 p-8 rounded-3xl border-2 border-dashed border-orange-500/40 shadow-xl">
           <h4 class="text-xl font-black text-orange-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             🤲 JOURNAL: Ο ΚΥΚΛΟΣ ΑΝΟΙΓΕΙ
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-orange-200 font-bold mb-2">1. ΤΟ ΜΟΙΡΑΣΜΑ</h5>
               <p class="text-sm mb-2 opacity-80">Γράψε κάτι που ξέρεις καλά και μπορείς να μάθεις σε κάποιον άλλον:</p>
               <div class="w-full h-10 bg-black/30 rounded border border-orange-500/20"></div>
             </div>

             <div>
               <h5 class="text-orange-200 font-bold mb-2">2. ΤΟ ΣΥΝΑΙΣΘΗΜΑ</h5>
               <div class="flex flex-wrap gap-3">
                 <span class="px-3 py-1 bg-black/40 rounded-full border border-orange-500/30">Χαρά</span>
                 <span class="px-3 py-1 bg-black/40 rounded-full border border-orange-500/30">Φόβος</span>
                 <span class="px-3 py-1 bg-black/40 rounded-full border border-orange-500/30">Περηφάνια</span>
               </div>
             </div>
             
             <div>
                <h5 class="text-orange-200 font-bold mb-2">3. Η ΑΛΗΘΕΙΑ</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-orange-500/10">
                 <p class="text-sm">«Δεν μικραίνω όταν μοιράζομαι.</p>
                 <p class="text-sm">Μεγαλώνω.»</p>
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
             Η ηγεσία δεν είναι έλεγχος. Είναι εμπιστοσύνη.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             Όταν ένα παιδί μάθει να αφήνει χώρο στους άλλους, γίνεται <strong class="text-orange-300">μέντορας</strong>. Αυτό είναι το ανώτερο στάδιο της μάθησης. Το δωμάτιο γέμισε φωνές, και για πρώτη φορά, δεν χρειαζόταν να είναι οι δικές τους.
           </p>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-orange-900/60 to-rose-900/60 p-8 rounded-2xl border border-orange-500/30 text-center italic text-orange-200 shadow-lg">
           «Leadership is not control. It is trust.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-orange-400 mb-3 tracking-wide">01. NOT ALONE ANYMORE</h3>
          <p>The room had changed. Not in things. In people. There were other children now. Other eyes. Other voices.</p>
          <p class="mt-2">Alexandra noticed it. «It is… strange».</p>
          <p class="mt-2">Philippos nodded. «As if it is not just ours anymore».</p>
          <p class="mt-2 text-white">Eleftheria understood. «And that exactly means it <strong>succeeded</strong>».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-gray-400 mb-3 tracking-wide">02. THE NEW ONES</h3>
          <p>Some children talked a lot. Others not at all. One child asked many questions. Another just observed.</p>
          <p class="mt-2">Alexandra smiled. «We were like that too».</p>
          <p class="mt-2">Philippos looked at the bench. «And we made mistakes».</p>
          <p class="mt-2">Eleftheria added: «And we learned».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-rose-400 mb-3 tracking-wide">03. NOT YOUR WAY</h3>
          <p>A child changed the plan. «Not like that», said Philippos instinctively. He stopped. Took a breath. «Sorry».</p>
          <p class="mt-2">The child hesitated. «Did I ruin it?»</p>
          <p class="mt-2 text-orange-300">Alexandra knelt down. «No. You made it yours».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-red-400 mb-3 tracking-wide">04. CROCUS STEPS BACK</h3>
          <p>Crocus was boiling. «Let's show them how it's done right».</p>
          <p class="mt-2">Eleftheria looked at him. «No. If we show them, they won't live it».</p>
          <p class="mt-2">Crocus remained silent. Hard for him.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-300 mb-3 tracking-wide">05. WISEBOT OPENS SPACE</h3>
          <p>WiseBot appeared. She didn't stand in front. She stood on the side.</p>
          <p class="mt-2">«When a circle opens», she said, «your role changes. From “doing”, you become <strong>“holding space”</strong>».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-blue-300 mb-3 tracking-wide">06. THE DEPARTURE</h3>
          <p>Pencilo left the pencils on the table. «I don't need to design».</p>
          <p class="mt-2">Link smiled. «Nor me to fix».</p>
          <p class="mt-2">Philippos felt something strange. «As if we are… leaving?»</p>
          <p class="mt-2 text-white font-bold">Eleftheria shook her head. «As if we are growing up».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-cyan-400 mb-3 tracking-wide">07. THE NEW CENTER</h3>
          <p>Another child took initiative. Gave instructions. Made a mistake. Continued. The team watched them. Not to judge. To rejoice.</p>
          <p class="mt-4">Sparken appeared above. «Now the circle moves alone».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-orange-300 mb-3 tracking-wide">08. THE FEELING</h3>
          <p>Alexandra felt emotion. Philippos pride. Eleftheria calm.</p>
          <p class="mt-2">— «We didn't lose anything», said Philippos. «We shared it».</p>
          <p class="mt-2">WiseBot glowed softly.</p>
        </section>

        <div class="mt-12 bg-orange-950/60 p-8 rounded-3xl border-2 border-dashed border-orange-500/40 shadow-xl">
           <h4 class="text-xl font-black text-orange-300 uppercase tracking-wider mb-6 flex items-center gap-2">
             🤲 JOURNAL: THE CIRCLE OPENS
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-orange-200 font-bold mb-2">1. THE SHARING</h5>
               <p class="text-sm mb-2 opacity-80">Write something you know well and can teach someone else:</p>
               <div class="w-full h-10 bg-black/30 rounded border border-orange-500/20"></div>
             </div>

             <div>
               <h5 class="text-orange-200 font-bold mb-2">2. THE FEELING</h5>
               <div class="flex flex-wrap gap-3">
                 <span class="px-3 py-1 bg-black/40 rounded-full border border-orange-500/30">Joy</span>
                 <span class="px-3 py-1 bg-black/40 rounded-full border border-orange-500/30">Fear</span>
                 <span class="px-3 py-1 bg-black/40 rounded-full border border-orange-500/30">Pride</span>
               </div>
             </div>
             
             <div>
                <h5 class="text-orange-200 font-bold mb-2">3. THE TRUTH</h5>
                <div class="bg-black/20 p-4 rounded-xl border border-orange-500/10">
                 <p class="text-sm">«I don't shrink when I share.</p>
                 <p class="text-sm">I grow.»</p>
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
             Leadership is not control. It is trust.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             When a child learns to leave space for others, they become a <strong class="text-orange-300">mentor</strong>. This is the highest stage of learning. The room filled with voices, and for the first time, they didn't need to be their own.
           </p>
        </div>

      </div>
    `
    }
  },
  {
    id: 20,
    title: { el: "ΑΥΤΟ ΔΕΝ ΕΙΝΑΙ ΤΟ ΤΕΛΟΣ", en: "THIS IS NOT THE END" },
    theme: { el: "ΚΛΗΡΟΝΟΜΙΑ", en: "LEGACY" },
    stepLabel: { el: "WISEBOT & Η ΚΛΗΡΟΝΟΜΙΑ", en: "WISEBOT & LEGACY" },
    author: "The WiseBot Squad",
    cover: IMG_WISEBOT,
    videoUrl: "",
    description: { 
      el: "Το δωμάτιο άδειασε. Οι ήρωες στέκονται στην πόρτα. Μια ιστορία για τη στιγμή που καταλαβαίνεις ότι κάτι που ξεκίνησες... δεν σου ανήκει πια.", 
      en: "The room emptied. The heroes stand at the door. A story about when you realize that something you started... doesn't belong to you anymore." 
    },
    meaning: { 
      el: "Ό,τι αξίζει, δεν τελειώνει. Αλλάζει χέρια. Αλλάζει μορφή. Αλλάζει κόσμο.", 
      en: "What is worth it, doesn't end. It changes hands. It changes form. It changes the world." 
    },
    xp: 500,
    content: {
      el: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-indigo-950/80 to-slate-900/80 p-8 rounded-2xl border border-indigo-500/30 text-center italic text-indigo-200 shadow-lg shadow-black/40">
           «Ό,τι αξίζει, δεν χάνεται επειδή το αφήνεις. Χάνεται μόνο αν το κρατάς από φόβο.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-amber-400 mb-3 tracking-wide">01. Η ΣΤΙΓΜΗ ΠΟΥ ΣΤΑΜΑΤΗΣΑΝ</h3>
          <p>Δεν υπήρχε θόρυβος. Ούτε χαρά. Ούτε άγχος. Τα παιδιά κάθονταν και κοιτούσαν.</p>
          <p class="mt-2">Μπροστά τους: άλλοι δημιουργούσαν. Άλλοι δοκίμαζαν. Χωρίς να τους ρωτάνε.</p>
          <p class="mt-4">Η Αλεξάνδρα το είπε πρώτη. «Δεν μας χρειάζονται πια».</p>
          <p class="mt-2 text-slate-400">Ο Φίλιππος ένιωσε κάτι περίεργο. «Και όμως… αυτό είναι καλό».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-slate-400 mb-3 tracking-wide">02. ΤΟ ΚΕΝΟ</h3>
          <p>Όταν όλοι έφυγαν, έμειναν μόνοι. Το δωμάτιο άδειο. Τα φώτα χαμηλά.</p>
          <p class="mt-2">Ο Crocus έσπασε τη σιωπή. «Και τώρα;»</p>
          <p class="mt-2">Κανείς δεν απάντησε. Όχι γιατί δεν ήξεραν. Αλλά γιατί φοβόντουσαν τη λέξη.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-cyan-300 mb-3 tracking-wide">03. Ο ΟΡΙΖΟΝΤΑΣ</h3>
          <p>Ο Sparken κατέβηκε αργά. Τα φτερά του άνοιξαν. Όχι για να δείξει μακριά. Για να δείξει <strong>πολλά</strong>.</p>
          <p class="mt-2">«Αυτό που ξεκινήσατε», είπε, «δεν είναι πια ένα πράγμα. Είναι <strong>σπόρος</strong>».</p>
          <p class="mt-2">Ο Φίλιππος ψιθύρισε: «Και ποιος τον φροντίζει;»</p>
          <p class="mt-2 text-cyan-100">— «Όσοι τον βρίσκουν».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-300 mb-3 tracking-wide">04. Η ΑΜΦΙΒΟΛΙΑ</h3>
          <p>Η Αλεξάνδρα ένιωσε τον φόβο. «Κι αν χαθεί;»</p>
          <p class="mt-2">Η WiseBot εμφανίστηκε. Το φως στο στήθος της έλαμψε σταθερά.</p>
          <p class="mt-2 text-white italic">«Ό,τι αξίζει», είπε, «δεν χάνεται επειδή το αφήνεις. Χάνεται μόνο αν το κρατάς από φόβο».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">05. Η ΜΕΓΑΛΗ ΕΠΙΛΟΓΗ</h3>
          <p>Η Ελευθερία πήρε ανάσα. «Μπορούμε να το κάνουμε μεγαλύτερο. Και να μην ελέγχουμε πια τα πάντα».</p>
          <p class="mt-2">Ο Crocus χαμογέλασε στραβά. «Δύσκολο».</p>
          <p class="mt-2">Η Ελευθερία ένευσε. «Αλλά σωστό».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-emerald-300 mb-3 tracking-wide">06. Η ΜΕΤΑΒΙΒΑΣΗ</h3>
          <p>Έγραψαν οδηγίες. Όχι κανόνες. Άφησαν χώρο. Όχι έλεγχο.</p>
          <p class="mt-2">Η Link έκλεισε την τσάντα της. «Δεν χρειάζεται πια να είμαστε εμείς παντού».</p>
          <p class="mt-2">Ο Pencilo άφησε τα μολύβια. «Τα σχέδια τώρα αλλάζουν μόνα τους».</p>
          <p class="mt-2 text-green-300">Ο Crocus δεν φώναξε. «Για πρώτη φορά… δεν τρέχουμε».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-indigo-300 mb-3 tracking-wide">07. ΤΟ ΑΝΟΙΓΜΑ</h3>
          <p>Την επόμενη μέρα, άλλοι μπήκαν. Και άλλοι. Χωρίς πρόσκληση. Χωρίς άδεια. Το σύμπαν κινήθηκε.</p>
          <p class="mt-2">Ο Sparken κοίταξε ψηλά. «Τώρα… δεν είστε αρχή».</p>
          <p class="mt-2">Ο Φίλιππος συμπλήρωσε: «Είμαστε μέρος».</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-amber-200 mb-3 tracking-wide">08. Η ΤΕΛΕΥΤΑΙΑ ΕΡΩΤΗΣΗ</h3>
          <p>Η WiseBot γύρισε προς τα παιδιά.</p>
          <p class="mt-4 text-xl text-center font-serif">«Θέλετε να το κρατήσετε; Ή να το δείτε να ταξιδεύει;»</p>
          <p class="mt-4 text-center">Η απάντηση ήρθε χωρίς λόγια. <strong>Άνοιξαν τα χέρια.</strong></p>
        </section>

        <div class="mt-12 bg-slate-900 p-8 rounded-3xl border-2 border-dashed border-amber-500/30 shadow-xl">
           <h4 class="text-xl font-black text-amber-100 uppercase tracking-wider mb-6 flex items-center gap-2">
             🕊️ JOURNAL: Η ΚΛΗΡΟΝΟΜΙΑ ΜΟΥ
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-slate-200 font-bold mb-2">1. ΤΟ ΤΑΞΙΔΙ</h5>
               <p class="text-sm mb-2 opacity-80">Γράψε κάτι δικό σου που θα ήθελες να βοηθήσει κι άλλους, ακόμα κι αν δεν είσαι εκεί:</p>
               <div class="w-full h-10 bg-slate-800 rounded border border-slate-600"></div>
             </div>

             <div>
               <h5 class="text-slate-200 font-bold mb-2">2. Ο ΦΟΒΟΣ</h5>
               <p class="text-sm mb-2 opacity-80">Τι φοβάσαι να αφήσεις;</p>
               <div class="w-full h-10 bg-slate-800 rounded border border-slate-600"></div>
             </div>
             
             <div>
                <h5 class="text-slate-200 font-bold mb-2">3. Η ΑΠΟΦΑΣΗ</h5>
                <div class="bg-slate-800/50 p-4 rounded-xl border border-slate-600">
                 <p class="text-sm font-bold">«Δεν χρειάζεται να ελέγχω για να αξίζω.</p>
                 <p class="text-sm font-bold">Μπορώ να αφήνω και να συνεχίζω.»</p>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-900 to-black p-8 rounded-3xl border border-white/10 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-white uppercase tracking-wider">ΜΗΝΥΜΑ ΓΙΑ ΓΟΝΕΙΣ</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             Η μεγαλύτερη πράξη εμπιστοσύνης είναι να αφήσεις κάτι να ζήσει χωρίς εσένα.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             Έτσι μαθαίνει ένα παιδί τι σημαίνει <strong class="text-white">κληρονομιά</strong>. Δεν υπήρξε φινάλε. Υπήρξε άνοιγμα. Και κάπου εκεί, η ιστορία έπαψε να ανήκει σε αυτούς. Ανήκει πια στον κόσμο.
           </p>
        </div>

      </div>
    `,
      en: `
      <div class="space-y-10 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-r from-indigo-950/80 to-slate-900/80 p-8 rounded-2xl border border-indigo-500/30 text-center italic text-indigo-200 shadow-lg shadow-black/40">
           «What is worth it, is not lost because you leave it. It is lost only if you keep it out of fear.»
        </div>

        <section>
          <h3 class="text-2xl font-black text-amber-400 mb-3 tracking-wide">01. THE MOMENT THEY STOPPED</h3>
          <p>There was no noise. Nor joy. Nor anxiety. The children sat and watched.</p>
          <p class="mt-2">In front of them: others were creating. Others were trying. Without asking them.</p>
          <p class="mt-4">Alexandra said it first. "They don't need us anymore."</p>
          <p class="mt-2 text-slate-400">Philippos felt something strange. "And yet... this is good."</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-slate-400 mb-3 tracking-wide">02. THE VOID</h3>
          <p>When everyone left, they remained alone. The room empty. The lights low.</p>
          <p class="mt-2">Crocus broke the silence. "And now?"</p>
          <p class="mt-2">No one answered. Not because they didn't know. But because they feared the word.</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-cyan-200 mb-3 tracking-wide">03. THE HORIZON</h3>
          <p>Sparken came down slowly. His wings opened. Not to show far. To show <strong>many</strong>.</p>
          <p class="mt-2">"What you started," he said, "is no longer one thing. It is a <strong>seed</strong>."</p>
          <p class="mt-2">Philippos whispered: "And who takes care of it?"</p>
          <p class="mt-2 text-cyan-100">— "Those who find it."</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-fuchsia-300 mb-3 tracking-wide">04. THE DOUBT</h3>
          <p>Alexandra felt the fear. "What if it gets lost?"</p>
          <p class="mt-2">WiseBot appeared. The light on her chest shone steadily.</p>
          <p class="mt-2 text-white italic">"What is worth it," she said, "is not lost because you leave it. It is lost only if you keep it out of fear."</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-white mb-3 tracking-wide">05. THE GREAT CHOICE</h3>
          <p>Eleftheria took a breath. "We can make it bigger. And not control everything anymore."</p>
          <p class="mt-2">Crocus smiled crookedly. "Difficult."</p>
          <p class="mt-2">Eleftheria nodded. "But right."</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-emerald-300 mb-3 tracking-wide">06. THE HANDOVER</h3>
          <p>They wrote instructions. Not rules. They left space. Not control.</p>
          <p class="mt-2">Link closed her bag. "We don't need to be everywhere anymore."</p>
          <p class="mt-2">Pencilo left the pencils. "The designs now change on their own."</p>
          <p class="mt-2 text-green-300">Crocus didn't shout. "For the first time... we aren't running."</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-indigo-300 mb-3 tracking-wide">07. THE OPENING</h3>
          <p>The next day, others entered. And others. Without invitation. Without permission. The universe moved.</p>
          <p class="mt-2">Sparken looked up. "Now... you are not the beginning."</p>
          <p class="mt-2">Philippos added: "We are part."</p>
        </section>

        <section>
          <h3 class="text-2xl font-black text-amber-200 mb-3 tracking-wide">08. THE LAST QUESTION</h3>
          <p>WiseBot turned to the children.</p>
          <p class="mt-4 text-xl text-center font-serif">"Do you want to keep it? Or see it travel?"</p>
          <p class="mt-4 text-center">The answer came without words. <strong>They opened their arms.</strong></p>
        </section>

        <div class="mt-12 bg-slate-900 p-8 rounded-3xl border-2 border-dashed border-amber-500/30 shadow-xl">
           <h4 class="text-xl font-black text-amber-100 uppercase tracking-wider mb-6 flex items-center gap-2">
             🕊️ JOURNAL: MY LEGACY
           </h4>
           
           <div class="space-y-6 text-gray-300">
             
             <div>
               <h5 class="text-slate-200 font-bold mb-2">1. THE JOURNEY</h5>
               <p class="text-sm mb-2 opacity-80">Write something of yours that you would like to help others, even if you are not there:</p>
               <div class="w-full h-10 bg-slate-800 rounded border border-slate-600"></div>
             </div>

             <div>
               <h5 class="text-slate-200 font-bold mb-2">2. THE FEAR</h5>
               <p class="text-sm mb-2 opacity-80">What are you afraid to leave?</p>
               <div class="w-full h-10 bg-slate-800 rounded border border-slate-600"></div>
             </div>
             
             <div>
                <h5 class="text-slate-200 font-bold mb-2">3. THE DECISION</h5>
                <div class="bg-slate-800/50 p-4 rounded-xl border border-slate-600">
                 <p class="text-sm font-bold">«I don't need to control to be worthy.</p>
                 <p class="text-sm font-bold">I can let go and continue.»</p>
               </div>
             </div>

           </div>
        </div>

        <div class="mt-12 bg-gradient-to-br from-slate-900 to-black p-8 rounded-3xl border border-white/10 shadow-2xl relative">
           <div class="flex items-center gap-3 mb-4 relative z-10">
              <span class="text-2xl">👨‍👩‍👧</span>
              <h4 class="text-xl font-black text-white uppercase tracking-wider">MESSAGE FOR PARENTS</h4>
           </div>
           <p class="text-gray-300 leading-relaxed mb-4 relative z-10">
             The greatest act of trust is to let something live without you.
           </p>
           <p class="text-gray-300 leading-relaxed relative z-10">
             This is how a child learns what <strong class="text-white">legacy</strong> means. There was no finale. There was an opening. And somewhere there, the story ceased to belong to them. It belongs to the world now.
           </p>
        </div>

      </div>
    `
    }
  },
  {
    id: 21,
    title: { el: "Ο ΚΑΘΡΕΦΤΗΣ", en: "THE MIRROR" },
    theme: { el: "ΑΥΤΟΓΝΩΣΙΑ", en: "SELF-REFLECTION" },
    stepLabel: { el: "ΤΟ ΤΕΛΟΣ & Η ΑΡΧΗ", en: "THE END & THE BEGINNING" },
    author: "Εσύ",
    cover: IMG_CROCUS,
    videoUrl: "",
    description: { 
      el: "Μισό ιστορία, μισό καθρέφτης. Οι ήρωες έφυγαν. Τώρα μένεις μόνο εσύ. Μια ιστορία που τελειώνει μόνο όταν αρχίζεις εσύ.", 
      en: "Half story, half mirror. The heroes have left. Now only you remain. A story that ends only when you begin." 
    },
    meaning: { 
      el: "Δεν χρειάζεσαι ήρωες. Μπορείς να γίνεις.", 
      en: "You don't need heroes. You can become one." 
    },
    xp: 1000,
    content: {
      el: `
      <div class="space-y-12 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-b from-black to-slate-900 p-10 rounded-3xl border border-white/20 text-center shadow-2xl">
           <p class="text-xl italic text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-white font-serif">
             «Αυτό το βιβλίο δεν διαβάζεται.<br>Καθρεφτίζεται.»
           </p>
        </div>

        <div class="space-y-8 opacity-90">
            <h4 class="text-center text-sm font-bold tracking-[0.3em] text-slate-500 uppercase">ΜΕΡΟΣ Α' — Η ΙΣΤΟΡΙΑ</h4>

            <section>
              <h3 class="text-2xl font-black text-slate-300 mb-3 tracking-wide">01. ΤΟ ΔΩΜΑΤΙΟ ΧΩΡΙΣ ΦΩΝΕΣ</h3>
              <p>Το δωμάτιο ήταν άδειο. Όχι εγκαταλελειμμένο. Ήρεμο. Τα τραπέζια στη θέση τους. Τα μολύβια τακτοποιημένα. Τα σχέδια… όχι πια εκεί.</p>
              <p class="mt-2">Η Αλεξάνδρα στάθηκε στη μέση. Δεν έψαχνε τη WiseBot. Δεν περίμενε τον Crocus.</p>
              <p class="mt-2 text-white italic">Ήξερε ότι δεν θα έρθουν.</p>
            </section>

            <section>
              <h3 class="text-2xl font-black text-slate-300 mb-3 tracking-wide">02. ΤΑ ΔΩΡΑ ΠΟΥ ΑΦΗΣΑΝ</h3>
              <p>Πάνω στο τραπέζι υπήρχαν 5 αντικείμενα. Ένας φακός (WiseBot). Ένα ζευγάρι γάντια (Crocus). Ένα μπλοκ (Pencilo). Ένα κομμάτι καλώδιο (Link). Και μια πυξίδα (Sparken).</p>
              <p class="mt-2">Ο Φίλιππος τα άγγιξε. «Νομίζαμε ότι ήταν τα εργαλεία τους».</p>
              <p class="mt-2">Η Ελευθερία χαμογέλασε. «Ήταν τα δικά μας».</p>
            </section>

            <section>
              <h3 class="text-2xl font-black text-white mb-3 tracking-wide">03. Η ΑΝΑΓΝΩΡΙΣΗ</h3>
              <p>Η Αλεξάνδρα φόρεσε τα γάντια. «Εγώ δεν είμαι πια φοβισμένη. Είμαι… έτοιμη για δράση».</p>
              <p class="mt-2">Ο Φίλιππος πήρε το μπλοκ. «Εγώ δεν είμαι πια βιαστικός. Είμαι… δημιουργός».</p>
              <p class="mt-2">Η Ελευθερία κράτησε τον φακό. «Εγώ δεν είμαι πια θεωρητική. Είμαι… οδηγός».</p>
            </section>
        </div>

        <div class="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-12"></div>

        <div class="space-y-8">
            <h4 class="text-center text-sm font-bold tracking-[0.3em] text-white/40 uppercase">ΜΕΡΟΣ Β' — Ο ΚΑΘΡΕΦΤΗΣ</h4>

            <div class="bg-black border border-white/10 p-8 rounded-[3rem] text-center space-y-6 relative overflow-hidden group hover:border-white/30 transition-all">
                <div class="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <h3 class="text-3xl font-[1000] text-white uppercase italic tracking-tighter relative z-10">ΚΟΙΤΑ ΜΕΣΑ ΣΟΥ</h3>
                
                <p className="text-gray-300 leading-relaxed relative z-10">
                  Δεν διάβασες απλώς μια ιστορία για τρία παιδιά.
                  <br /><br />
                  <strong className="text-white">Διάβασες την ιστορία για το πώς ΕΣΥ ξεπερνάς τον εαυτό σου.</strong>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-sm pt-4 relative z-10">
                   <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                      <span className="text-amber-400 font-black uppercase tracking-widest block mb-1">WISEBOT</span>
                      <p className="text-gray-400">Είναι η φωνή μέσα σου που λέει "Σκέψου πριν φοβηθείς".</p>
                   </div>
                   <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                      <span className="text-emerald-400 font-black uppercase tracking-widest block mb-1">CROCUS</span>
                      <p className="text-gray-400">Είναι η φωνή που λέει "Σήκω και κάν' το".</p>
                   </div>
                   <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                      <span className="text-blue-400 font-black uppercase tracking-widest block mb-1">LINK</span>
                      <p className="text-gray-400">Είναι τα χέρια σου που λένε "Μπορώ να το φτιάξω".</p>
                   </div>
                   <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                      <span className="text-purple-400 font-black uppercase tracking-widest block mb-1">SPARKEN</span>
                      <p className="text-gray-400">Είναι τα μάτια σου που βλέπουν το αύριο.</p>
                   </div>
                </div>
            </div>
        </div>

        <section class="text-center pt-8">
          <h3 class="text-4xl md:text-6xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500 uppercase italic tracking-tighter mb-6">
            ΤΟ ΤΕΛΟΣ;
          </h3>
          <p class="text-xl text-gray-300 mb-8">
            Όχι. <br />
            Τώρα κλείσε την οθόνη. <br />
            <strong class="text-white">Και πήγαινε να φτιάξεις τον κόσμο σου.</strong>
          </p>
        </section>

      </div>
    `,
      en: `
      <div class="space-y-12 font-sans text-gray-200 leading-relaxed">
        
        <div class="relative bg-gradient-to-b from-black to-slate-900 p-10 rounded-3xl border border-white/20 text-center shadow-2xl">
           <p class="text-xl italic text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-white font-serif">
             «This book is not read.<br>It is reflected.»
           </p>
        </div>

        <div class="space-y-8 opacity-90">
            <h4 class="text-center text-sm font-bold tracking-[0.3em] text-slate-500 uppercase">PART A — THE STORY</h4>

            <section>
              <h3 class="text-2xl font-black text-slate-300 mb-3 tracking-wide">01. THE ROOM WITHOUT VOICES</h3>
              <p>The room was empty. Not abandoned. Calm. The tables in place. The pencils tidy. The drawings… no longer there.</p>
              <p class="mt-2">Alexandra stood in the middle. She wasn't looking for WiseBot. She wasn't waiting for Crocus.</p>
              <p class="mt-2 text-white italic">She knew they wouldn't come.</p>
            </section>

            <section>
              <h3 class="text-2xl font-black text-slate-300 mb-3 tracking-wide">02. THE GIFTS THEY LEFT</h3>
              <p>On the table there were 5 objects. A flashlight (WiseBot). A pair of gloves (Crocus). A notepad (Pencilo). A piece of wire (Link). And a compass (Sparken).</p>
              <p class="mt-2">Philippos touched them. "We thought they were their tools."</p>
              <p class="mt-2">Eleftheria smiled. "They were ours."</p>
            </section>

            <section>
              <h3 class="text-2xl font-black text-white mb-3 tracking-wide">03. THE RECOGNITION</h3>
              <p>Alexandra put on the gloves. "I am no longer scared. I am… ready for action."</p>
              <p class="mt-2">Philippos took the notepad. "I am no longer hasty. I am… a creator."</p>
              <p class="mt-2">Eleftheria held the flashlight. "I am no longer theoretical. I am… a guide."</p>
            </section>
        </div>

        <div class="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-12"></div>

        <div class="space-y-8">
            <h4 class="text-center text-sm font-bold tracking-[0.3em] text-white/40 uppercase">PART B — THE MIRROR</h4>

            <div class="bg-black border border-white/10 p-8 rounded-[3rem] text-center space-y-6 relative overflow-hidden group hover:border-white/30 transition-all">
                <div class="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <h3 class="text-3xl font-[1000] text-white uppercase italic tracking-tighter relative z-10">LOOK INSIDE</h3>
                
                <p class="text-gray-300 leading-relaxed relative z-10">
                  You didn't just read a story about three kids.
                  <br /><br />
                  <strong class="text-white">You read the story about how YOU overcome yourself.</strong>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-sm pt-4 relative z-10">
                   <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                      <span className="text-amber-400 font-black uppercase tracking-widest block mb-1">WISEBOT</span>
                      <p className="text-gray-400">Is the voice inside you saying "Think before you fear".</p>
                   </div>
                   <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                      <span className="text-emerald-400 font-black uppercase tracking-widest block mb-1">CROCUS</span>
                      <p className="text-gray-400">Is the voice saying "Get up and do it".</p>
                   </div>
                   <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                      <span className="text-blue-400 font-black uppercase tracking-widest block mb-1">LINK</span>
                      <p className="text-gray-400">Is your hands saying "I can fix it".</p>
                   </div>
                   <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                      <span className="text-purple-400 font-black uppercase tracking-widest block mb-1">SPARKEN</span>
                      <p className="text-gray-400">Is your eyes seeing tomorrow.</p>
                   </div>
                </div>
            </div>
        </div>

        <section class="text-center pt-8">
          <h3 class="text-4xl md:text-6xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500 uppercase italic tracking-tighter mb-6">
            THE END?
          </h3>
          <p class="text-xl text-gray-300 mb-8">
            No. <br />
            Now turn off the screen. <br />
            <strong class="text-white">And go build your world.</strong>
          </p>
        </section>

      </div>
    `
    }
  }
];