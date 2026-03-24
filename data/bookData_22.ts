
import { Book } from '../types';

// ============================================================
// BOOK 22: ΤΟ ΠΑΙΧΝΙΔΙ ΠΟΥ ΔΕΝ ΤΕΛΕΙΩΝΕ ΠΟΤΕ / THE GAME THAT NEVER ENDED
// Hero: Sparken (the eagle)
// Theme: ΔΕΣΜΕΥΣΗ / COMMITMENT
// ============================================================

export const BOOK_22: Book[] = [
  {
    id: 22,
    title: { el: "ΤΟ ΠΑΙΧΝΙΔΙ ΠΟΥ ΔΕΝ ΤΕΛΕΙΩΝΕ ΠΟΤΕ", en: "THE GAME THAT NEVER ENDED" },
    theme: { el: "ΔΕΣΜΕΥΣΗ", en: "COMMITMENT" },
    stepLabel: { el: "SPARKEN & ΔΕΣΜΕΥΣΗ", en: "SPARKEN & COMMITMENT" },
    author: "Sparken",
    cover: "/images/sparken.jpg",
    videoUrl: "",
    description: {
      el: "Μια ιστορία για τη διαφορά ανάμεσα στο να έχεις μια ιδέα και στο να την τελειώνεις. Το βουνό φαίνεται τεράστιο μέχρι να το σπάσεις σε βήματα.",
      en: "A story about the difference between having an idea and finishing it. The mountain looks huge until you break it into steps."
    },
    meaning: {
      el: "Ο στόχος δεν ήταν να φτιάξουν το καλύτερο παιχνίδι. Ήταν να μάθουν πώς τελειώνουν αυτό που ξεκινούν.",
      en: "The goal wasn't to make the best game. It was to learn how to finish what you start."
    },
    xp: 320,
    parentMessage: {
      el: "Η ικανότητα να τελειώνεις κάτι είναι πιο σημαντική από την ικανότητα να το αρχίζεις. Τα παιδιά μαθαίνουν δέσμευση όχι από κηρύγματα, αλλά από εμπειρία. Επιβραβεύστε το «τέλος», ακόμα κι αν το αποτέλεσμα δεν είναι τέλειο. Δοκιμάστε σήμερα: βοηθήστε το παιδί σας να σπάσει ένα μεγάλο στόχο σε μικρά, καθημερινά βήματα. Γράψτε τα σε χαρτί. Κολλήστε τα στον τοίχο. Και γιορτάστε κάθε σκαλοπάτι.",
      en: "The ability to finish something is more important than the ability to start it. Children learn commitment not from lectures, but from experience. Reward the 'finish', even if the result isn't perfect. Try today: help your child break a big goal into small, daily steps. Write them on paper. Stick them on the wall. And celebrate every step climbed."
    },

    pages: [
      {
        title: { el: "Το Δωμάτιο των Ιδεών", en: "The Room of Ideas" },
        image: "/images/ta-3-paidia.webp",
        imageCaption: { el: "Τρία παιδιά, ένα δωμάτιο γεμάτο ιδέες — αλλά τίποτα συγκεκριμένο.", en: "Three children, a room full of ideas — but nothing specific." },
        text: {
          el: `Το δωμάτιο μύριζε ξύλο, χαρτί και ανυπομονησία. Στο πάτωμα, σκορπισμένα σαν κομμάτια ονείρου: σχέδια, μολύβια σπασμένα, μαρκαδόροι χωρίς καπάκι, κομμάτια από χαλασμένα παιχνίδια.

Ο Φίλιππος είχε ανοίξει τρία κατσαβίδια. Τα μάτια του γυάλιζαν με εκείνη τη φωτιά που είχε πάντα στην αρχή ενός πράγματος — πριν αρχίσει να δουλεύει πραγματικά πάνω του.

Η Αλεξάνδρα μιλούσε γρήγορα. Κάθε πρόταση ξεκινούσε με «Ξέρεις τι θα ήταν τέλειο;» και δεν τελείωνε ποτέ.

Η Ελευθερία προσπαθούσε να βάλει τάξη. Σημειωματάριο, τίτλοι, λίστες. Αλλά κάθε φορά που γύριζε να ρωτήσει τι να γράψει, η απάντηση ήταν σήκωμα ώμων.

«Θα φτιάξουμε το καλύτερο παιχνίδι στον κόσμο!» φώναξε ο Φίλιππος, χτυπώντας το κατσαβίδι στο τραπέζι.

«Ναι, αλλά τι ακριβώς;» ρώτησε η Ελευθερία, το στιλό ακουμπισμένο στο σημειωματάριο. Δεν υπήρχε τίποτα να γραφτεί.

Δύο ώρες μετά, είχαν ενθουσιασμό. Είχαν φωνές. Είχαν κίνηση. Αλλά τίποτα — απολύτως τίποτα — συγκεκριμένο.

Ο ενθουσιασμός χωρίς σχέδιο μοιάζει με πυρκαγιά χωρίς εστία. Λάμπει πολύ, ζεσταίνει λίγο, και σβήνει γρήγορα.`,
          en: `The room smelled of wood, paper, and impatience. On the floor, scattered like dream fragments: drawings, snapped pencils, capless markers, pieces of broken toys.

Philippos had already opened three screwdrivers. His eyes gleamed with that fire he always had at the start of something — before he actually began working on it.

Alexandra was talking fast. Every sentence started with "You know what would be perfect?" and never ended.

Eleftheria tried to bring order. Notebook, headings, lists. But every time she turned to ask what to write, the answer was a shrug.

"We will make the best game in the world!" shouted Philippos, banging his screwdriver on the table.

"Yes, but what exactly?" asked Eleftheria, her pen resting on the notebook. There was nothing to write yet.

Two hours later, they had excitement. They had voices. They had movement. But nothing — absolutely nothing — specific.

Excitement without a plan is like a fire without a hearth. It shines bright, warms a little, and burns out fast.`
        }
      },
      {
        title: { el: "Η Ερώτηση & Το Σχέδιο", en: "The Question & The Plan" },
        image: "/images/eleftheria.webp",
        imageCaption: { el: "Η στιγμή που η ιδέα απέκτησε όνομα, ημερομηνία και σχήμα.", en: "The moment the idea gained a name, a date, and a shape." },
        text: {
          el: `Το βράδυ, το «καλύτερο παιχνίδι στον κόσμο» ήταν απλώς ένας σωρός κομμάτια. Η σιωπή βαριά σαν νερό.

Τότε, ένα μωβ φως τρεμόσβησε στο παράθυρο. Η WiseBot εμφανίστηκε ήσυχα.

«Τι προσπαθείτε να φτιάξετε;» ρώτησε. Ούτε κρίση, ούτε συμπόνια. Απλά περιέργεια.

«Ένα παιχνίδι που θα αλλάξει τα πάντα!» είπε η Αλεξάνδρα, κι η φωνή της ράγισε ελαφρά.

«Πώς λέγεται;» Σιωπή. «Πότε θα είναι έτοιμο;» Σιωπή. «Τι θα κάνει ακριβώς;» Σιωπή.

«Όταν κάτι δεν έχει όνομα, ημερομηνία και σχήμα... παραμένει ιδέα. Και οι ιδέες χωρίς σπίτι πεθαίνουν στον δρόμο.»

Το επόμενο πρωί, η Ελευθερία κάθισε στο τραπέζι πρώτη. Πήρε έναν κόκκινο μαρκαδόρο και έγραψε με μεγάλα γράμματα: «Μέχρι την 1η Ιουνίου θα έχουμε φτιάξει ένα επιτραπέζιο στρατηγικής για παιδιά 8-12 ετών.»

Ο Φίλιππος χαμογέλασε. «Αυτό μπορώ να το φτιάξω», ψιθύρισε.

Η Αλεξάνδρα για πρώτη φορά δεν μίλησε. Σχεδίασε. Ένα ταμπλό. Μονοπάτια. Θέσεις για κάρτες. Το χαρτί μπήκε στον τοίχο. Ξαφνικά, ο τοίχος ήταν χάρτης.

Η πρώτη λέξη κάθε πρωινού: «Σήμερα τι κάνουμε;»`,
          en: `That evening, the "best game in the world" was just a pile of pieces. Silence heavy as water.

Then a purple light flickered at the window. WiseBot appeared quietly.

"What are you trying to make?" she asked. No judgment, no pity. Just curiosity.

"A game that will change everything!" said Alexandra, her voice cracking slightly.

"What is it called?" Silence. "When will it be ready?" Silence. "What will it do exactly?" Silence.

"When something doesn't have a name, a date, and a shape... it remains an idea. And ideas without a home die on the road."

The next morning, Eleftheria sat at the table first. She took a red marker and wrote in large letters: "By June 1st we will have made a strategy board game for kids 8-12 years old."

Philippos smiled. "I can build this," he whispered.

Alexandra, for the first time, didn't talk. She drew. A board. Pathways. Spaces for cards. The paper went on the wall. Suddenly, the wall was a map.

The first word every morning: "What are we doing today?"`
        }
      },
      {
        title: { el: "Το Βουνό που Έσπασε", en: "The Mountain That Broke" },
        image: "/images/paidia-kai-sparken.webp",
        imageCaption: { el: "Το βουνό δεν ήταν αδύνατο. Ήταν σκαλοπάτια.", en: "The mountain wasn't impossible. It was steps." },
        text: {
          el: `Τις πρώτες μέρες, η χαρά ήταν αληθινή. Η Αλεξάνδρα σχεδίαζε κάρτες. Ο Φίλιππος έκοβε χαρτόνια. Η Ελευθερία έγραφε κανόνες.

Αλλά η πραγματικότητα χτύπησε γρήγορα. Η Αλεξάνδρα ήθελε να σχεδιάσει ολόκληρο το παιχνίδι σε μία μέρα. Ο Φίλιππος έκοβε χωρίς μέτρο. «Θα τα φτιάξουμε μετά», έλεγε. Αλλά το «μετά» μεγάλωνε σαν σκιά στο ηλιοβασίλεμα.

Η Ελευθερία τους σταμάτησε. Δεν φώναξε. Πήρε τρία χαρτιά και έγραψε μια λέξη σε κάθε ένα: ΚΑΝΟΝΕΣ. ΔΟΚΙΜΗ. ΒΕΛΤΙΩΣΗ.

Τα χαρτιά μπήκαν στον τοίχο, κάτω από την ημερομηνία. Και κάτι μαγικό συνέβη: το βουνό — εκείνο το τεράστιο, αδύνατο βουνό — έσπασε. Έγινε σκάλα. Μικρά σκαλοπάτια. Ένα-ένα.

Δεν χρειαζόταν πια να φτάσουν στην κορυφή σήμερα. Χρειαζόταν μόνο να ανέβουν ένα σκαλοπάτι.

Κάθε μέρα, ένα πράγμα. Μόνο ένα. Δευτέρα: ξαναέγραψαν τους κανόνες. Τρίτη: ξανασχεδίασαν πέντε κάρτες. Τετάρτη: δοκίμασαν μόνοι τους.

Ούτε μία μέρα χωρίς κίνηση. Αυτός ο κανόνας ήταν χαραγμένος μέσα τους. Σιγά σιγά, δεν άλλαζε μόνο το παιχνίδι. Άλλαζαν οι ίδιοι. Ο Φίλιππος έμαθε να περιμένει. Η Αλεξάνδρα να τελειώνει μια ιδέα πριν αρχίσει την επόμενη. Η Ελευθερία ότι τα χέρια κάνουν αυτά που ο νους σχεδιάζει.`,
          en: `The first days, the joy was real. Alexandra designed cards. Philippos cut cardboard. Eleftheria wrote rules.

But reality struck quickly. Alexandra wanted to design the entire game in one day. Philippos cut without measuring. "We'll fix it later," he said. But "later" grew like a shadow at sunset.

Eleftheria stopped them. She didn't yell. She took three sheets of paper and wrote a single word on each: RULES. TESTING. IMPROVE.

The three sheets went on the wall, beneath the deadline. And something magical happened: the mountain — that enormous, impossible mountain — broke apart. It became a staircase. Small steps. One at a time.

They no longer needed to reach the summit today. They just needed to climb one step.

Every day, one thing. Only one. Monday: rewrote the rules. Tuesday: redesigned five cards. Wednesday: tested it themselves.

Not a single day without movement. That rule was carved inside them. Slowly, not only the game was changing. They were changing. Philippos learned to wait. Alexandra learned to finish one idea before starting the next. Eleftheria learned that hands can do what the mind designs.`
        }
      },
      {
        title: { el: "Η Δυσκολία", en: "The Difficulty" },
        image: "/images/filippos.webp",
        imageCaption: { el: "Η αποτυχία χτύπησε — σκληρά και ξαφνικά.", en: "Failure hit — hard and sudden." },
        text: {
          el: `Την τρίτη εβδομάδα, ο κόσμος γκρέμισε. Όχι με θόρυβο. Χειρότερα: με γέλιο. Ξένο γέλιο.

Δύο παιδιά από τη γειτονιά δοκίμασαν το παιχνίδι. Κοίταξαν τις κάρτες, διάβασαν τους κανόνες, και μετά κοιτάχτηκαν. Εκείνο το κοίταγμα που σημαίνει: «Αυτό δεν δουλεύει.»

Πάρα πολλά σύμβολα. Πολύ κείμενο. Βαρετοί κανόνες. Ο Στέφανος γέλασε — όχι με κακία, χειρότερα: με αδιαφορία. «Μπα, δεν γίνεται αυτό», είπε και σηκώθηκε.

Ο Φίλιππος πέταξε τα χαρτιά στο πάτωμα. «Δεν είμαστε καλοί σε αυτό», είπε. Η Αλεξάνδρα κοίταξε τα σχέδιά της σαν γράμματα σε ξένη γλώσσα. Η Ελευθερία δεν σήκωσε τα μάτια. Ένιωθε ντροπή.

Εκείνο το βράδυ, η WiseBot κατέβηκε αθόρυβα. Δεν τους παρηγόρησε. Κοίταξε τα κομμάτια στο πάτωμα και είπε:

«Το λάθος δείχνει πού να κοιτάξεις. Δεν δείχνει ποιος είσαι.»

«Μα εκείνοι γέλασαν...» ψέλλισε ο Φίλιππος.

«Γέλασαν με μια εκδοχή του παιχνιδιού. Εσείς είστε κάτι περισσότερο από μία εκδοχή.»

Η αποτυχία δεν είναι τέλος. Είναι δεδομένα. Σου λέει: «Αυτό δεν λειτούργησε. Δοκίμασε αλλιώς.» Αν μπορείς να ακούσεις αυτό το μήνυμα χωρίς να σπάσεις, μπορείς να φτιάξεις τα πάντα.`,
          en: `The third week, the world crumbled. Not with noise. Worse: with laughter. Someone else's laughter.

Two neighborhood kids tried the game. They read the rules, then exchanged a glance — the one that means: "This doesn't work."

Too many symbols. Too much text. Boring rules. Stefanos laughed — not with malice, worse: with indifference. "Nah, this isn't gonna work," he said and left.

Philippos threw the papers on the floor. "We aren't good at this," he said. Alexandra looked at her designs like letters in a foreign language. Eleftheria didn't lift her eyes. She felt shame.

That night, WiseBot came down silently. She didn't comfort them. She looked at the broken pieces and said:

"The mistake shows where to look. It doesn't show who you are."

"But they laughed..." Philippos whispered.

"They laughed at one version of the game. You are more than one version."

Failure is not an ending. It is data. It tells you: "This didn't work. Try a different way." If you can hear that message without breaking, you can build anything.`
        }
      },
      {
        title: { el: "Η Παρουσίαση", en: "The Presentation" },
        image: "/images/paidia-wisebot-2.webp",
        imageCaption: { el: "Δεν ήταν τέλειο, αλλά ήταν αληθινό.", en: "Not perfect, but real." },
        text: {
          el: `Ένα απόγευμα, ο Sparken κατέβηκε χαμηλά. Τα φτερά του — φλόγινα, κόκκινα με πορτοκαλί άκρες — σκέπασαν τον ήλιο. Εξέτασε το ταμπλό. Τις κάρτες. Τα κουρασμένα πρόσωπά τους.

«Θα μπορούσε να είναι καλύτερο», είπε. Τα παιδιά πάγωσαν. Τότε χαμογέλασε. Μόλις ορατά. «Αλλά το τελειώσατε.»

«Οι περισσότεροι ξεκινούν με ενθουσιασμό. Αυτό είναι εύκολο. Λίγοι γράφουν τι θέλουν. Γιατί αυτό σημαίνει δέσμευση. Ακόμα λιγότεροι μένουν όταν γελάνε μαζί τους. Εσείς μείνατε.»

Η 1η Ιουνίου ήρθε. Το ταμπλό στη μέση του τραπεζιού — δεν ήταν τέλειο, αλλά ήταν ωραίο. Χρωματιστά μονοπάτια. Κάρτες κομμένες ίσια. Πιόνια από πηλό.

Πέντε παιδιά κάθισαν γύρω τους. Πρώτος γύρος: ησυχία. Δεύτερος: ερωτήσεις. Τρίτος: φωνές. «ΟΧΙ! Γιατί μου πήρες αυτόν τον ήρωα;» Γέλια — από χαρά. Πέμπτος, έκτος, έβδομος γύρος. Κανείς δεν σηκωνόταν.

Τότε ένα αγόρι ρώτησε: «Πότε βγαίνει το επόμενο;»

Κοιτάχτηκαν. Τα καταφέραμε.

Ο στόχος δεν ήταν το τέλειο παιχνίδι. Ήταν να μάθουν πώς τελειώνουν αυτό που ξεκινούν. Η δέσμευση δεν είναι μια ηρωική στιγμή. Είναι εκατό μικρές αποφάσεις. «Θα εμφανιστώ σήμερα.» Και μια μέρα, γυρίζεις πίσω και βλέπεις — ανέβηκες ολόκληρο βουνό.`,
          en: `One afternoon, Sparken came down low. His wings — blazing red with orange tips — blocked the sun. He examined the board. The cards. Their tired faces.

"It could be better," he said. The children froze. Then he smiled. Barely visible. "But you finished it."

"Most start with excitement. That's easy. Few write down what they want. Because that means committing. Even fewer stay when they laugh at you. You stayed."

June 1st arrived. The board in the center of the table — not perfect, but beautiful. Colorful pathways. Cards cut straight. Clay pieces.

Five children sat around the table. First round: quiet whispers. Second round: questions. Third round: shouts. "NO! Why did you take my hero?" Laughter — from joy. Fifth, sixth, seventh round. No one stood up.

Then a boy asked: "When is the next one coming out?"

They looked at each other. We did it.

The goal was never the best game. It was to learn how to finish what you start. Commitment is not one grand moment. It is a hundred small decisions. "I will show up today." And one day, you look back and realize you climbed an entire mountain.`
        }
      }
    ]
  }
];
