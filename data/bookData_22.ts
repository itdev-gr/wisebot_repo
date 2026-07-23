
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
          el: `Το δωμάτιο μύριζε ξύλο, χαρτί και ανυπομονησία. Στο πάτωμα, σκορπισμένα σαν κομμάτια ονείρου: σχέδια μισοτελειωμένα, μολύβια σπασμένα στη μέση, μαρκαδόροι χωρίς καπάκι που στέγνωναν αργά, κομμάτια από χαλασμένα παιχνίδια που κάποτε ήταν «η επόμενη μεγάλη ιδέα».

Ο Φίλιππος είχε ανοίξει τρία κατσαβίδια ταυτόχρονα. Τα μάτια του γυάλιζαν με εκείνη τη φωτιά που είχε πάντα στην αρχή ενός πράγματος — πριν αρχίσει να δουλεύει πραγματικά πάνω του. «Σήμερα θα γίνει κάτι μεγάλο!» φώναζε, χωρίς να ξέρει ακριβώς τι.

Η Αλεξάνδρα μιλούσε γρήγορα, με τα χέρια να σχεδιάζουν αόρατα σχήματα στον αέρα. Κάθε πρόταση ξεκινούσε με «Ξέρεις τι θα ήταν τέλειο;» και δεν τελείωνε ποτέ. Μια ιδέα σκόνταφτε πάνω στην επόμενη πριν προλάβει να σταθεί.

Η Ελευθερία προσπαθούσε να βάλει τάξη στο χάος. Σημειωματάριο ανοιχτό, τίτλοι υπογραμμισμένοι, λίστες με κενά κουτάκια. Αλλά κάθε φορά που γύριζε να ρωτήσει «Τι να γράψω;», η απάντηση ήταν ένα σήκωμα ώμων.

«Θα φτιάξουμε το καλύτερο παιχνίδι στον κόσμο!» φώναξε ο Φίλιππος, χτυπώντας το κατσαβίδι στο τραπέζι σαν σφυρί δικαστή.

«Ναι, αλλά τι ακριβώς;» ρώτησε η Ελευθερία, με το στιλό ακουμπισμένο στο χαρτί. Δεν υπήρχε τίποτα να γραφτεί.

Δύο ώρες μετά, είχαν ενθουσιασμό. Είχαν φωνές. Είχαν κίνηση, γέλια, μεγάλα λόγια. Αλλά τίποτα — απολύτως τίποτα — συγκεκριμένο.

Γιατί ο ενθουσιασμός χωρίς σχέδιο μοιάζει με πυρκαγιά χωρίς εστία. Λάμπει πολύ, ζεσταίνει λίγο, και σβήνει γρήγορα.`,
          en: `The room smelled of wood, paper, and impatience. On the floor, scattered like fragments of a dream: half-finished drawings, pencils snapped in the middle, capless markers slowly drying out, pieces of broken toys that had once been "the next big idea."

Philippos had opened three screwdrivers at the same time. His eyes gleamed with that fire he always had at the beginning of something — before he actually started working on it. "Something big is happening today!" he kept shouting, without knowing exactly what.

Alexandra was talking fast, her hands sketching invisible shapes in the air. Every sentence began with "You know what would be perfect?" and never ended. One idea tripped over the next before it had a chance to stand.

Eleftheria was trying to bring order to the chaos. Notebook open, headings underlined, lists with empty checkboxes. But every time she turned around to ask "What should I write?", the answer was a shrug.

"We will make the best game in the world!" shouted Philippos, banging his screwdriver on the table like a judge's gavel.

"Yes, but what exactly?" asked Eleftheria, her pen resting on the paper. There was nothing to write yet.

Two hours later, they had excitement. They had voices. They had movement, laughter, big words. But nothing — absolutely nothing — specific.

Because excitement without a plan is like a fire without a hearth. It shines brightly, warms a little, and burns out fast.`
        }
      },
      {
        title: { el: "Η Ερώτηση & Το Σχέδιο", en: "The Question & The Plan" },
        image: "/images/eleftheria.webp",
        imageCaption: { el: "Η στιγμή που η ιδέα απέκτησε όνομα, ημερομηνία και σχήμα.", en: "The moment the idea gained a name, a date, and a shape." },
        text: {
          el: `Το βράδυ, το «καλύτερο παιχνίδι στον κόσμο» ήταν απλώς ένας σωρός από κομμάτια πάνω στο τραπέζι. Η σιωπή στο δωμάτιο ήταν βαριά σαν νερό. Ο Φίλιππος κλωτσούσε ένα χαρτονάκι. Η Αλεξάνδρα κοιτούσε έξω από το παράθυρο.

Τότε, ένα μωβ φως τρεμόσβησε στο τζάμι. Η WiseBot εμφανίστηκε ήσυχα, χωρίς θόρυβο, όπως πάντα όταν χρειαζόταν πραγματικά.

«Τι προσπαθείτε να φτιάξετε;» ρώτησε. Στη φωνή της δεν υπήρχε ούτε κριτική, ούτε λύπηση. Μόνο καθαρή, ήρεμη περιέργεια.

«Ένα παιχνίδι που θα αλλάξει τα πάντα!» είπε η Αλεξάνδρα, κι η φωνή της ράγισε ελαφρά στο τέλος.

«Πώς λέγεται;» Σιωπή. «Πότε θα είναι έτοιμο;» Σιωπή. «Τι θα κάνει ακριβώς;» Σιωπή — πιο βαθιά αυτή τη φορά.

Η WiseBot τους κοίταξε έναν-έναν. «Όταν κάτι δεν έχει όνομα, ημερομηνία και σχήμα... παραμένει ιδέα. Και οι ιδέες χωρίς σπίτι πεθαίνουν στον δρόμο.»

Το επόμενο πρωί, η Ελευθερία κάθισε στο τραπέζι πρώτη, πριν καν ξυπνήσουν οι άλλοι. Πήρε έναν κόκκινο μαρκαδόρο και έγραψε με μεγάλα, καθαρά γράμματα: «Μέχρι την 1η Ιουνίου θα έχουμε φτιάξει ένα επιτραπέζιο στρατηγικής για παιδιά 8-12 ετών.»

Ο Φίλιππος διάβασε την πρόταση δύο φορές. Κάτι μέσα του ησύχασε. «Αυτό μπορώ να το φτιάξω», ψιθύρισε.

Η Αλεξάνδρα, για πρώτη φορά, δεν μίλησε. Σχεδίασε. Ένα ταμπλό με στροφές. Μονοπάτια με χρώματα. Θέσεις για κάρτες. Το χαρτί καρφιτσώθηκε στον τοίχο και ξαφνικά ο τοίχος δεν ήταν τοίχος. Ήταν χάρτης.

Από εκείνη τη μέρα, η πρώτη λέξη κάθε πρωινού ήταν μία: «Σήμερα τι κάνουμε;»`,
          en: `That evening, the "best game in the world" was just a pile of pieces on the table. The silence in the room was heavy as water. Philippos was kicking a scrap of cardboard. Alexandra was staring out the window.

Then a purple light flickered on the glass. WiseBot appeared quietly, without a sound, the way she always did when she was truly needed.

"What are you trying to make?" she asked. In her voice there was no judgment and no pity. Only clear, calm curiosity.

"A game that will change everything!" said Alexandra, her voice cracking slightly at the end.

"What is it called?" Silence. "When will it be ready?" Silence. "What will it do, exactly?" Silence — deeper this time.

WiseBot looked at them one by one. "When something doesn't have a name, a date, and a shape... it remains an idea. And ideas without a home die on the road."

The next morning, Eleftheria sat at the table first, before the others were even awake. She took a red marker and wrote in large, clear letters: "By June 1st we will have made a strategy board game for kids 8-12 years old."

Philippos read the sentence twice. Something inside him settled. "This — I can build this," he whispered.

Alexandra, for the first time, didn't talk. She drew. A board with winding turns. Colored pathways. Spaces for cards. The paper was pinned to the wall, and suddenly the wall wasn't a wall anymore. It was a map.

From that day on, the first words of every morning were the same: "What are we doing today?"`
        }
      },
      {
        title: { el: "Το Βουνό που Έσπασε", en: "The Mountain That Broke" },
        image: "/images/paidia-kai-sparken.webp",
        imageCaption: { el: "Το βουνό δεν ήταν αδύνατο. Ήταν σκαλοπάτια.", en: "The mountain wasn't impossible. It was steps." },
        text: {
          el: `Τις πρώτες μέρες, η χαρά ήταν αληθινή. Η Αλεξάνδρα σχεδίαζε κάρτες με δράκους και θησαυρούς. Ο Φίλιππος έκοβε χαρτόνια και σφύριζε. Η Ελευθερία έγραφε κανόνες με τον πιο προσεκτικό γραφικό της χαρακτήρα.

Αλλά η πραγματικότητα χτύπησε γρήγορα την πόρτα. Η Αλεξάνδρα ήθελε να σχεδιάσει ολόκληρο το παιχνίδι σε μία μέρα και κουραζόταν πριν το μεσημέρι. Ο Φίλιππος έκοβε χωρίς μέτρο, στραβά, βιαστικά. «Θα τα φτιάξουμε μετά», έλεγε. Αλλά το «μετά» μεγάλωνε σαν σκιά στο ηλιοβασίλεμα.

Η Ελευθερία τους σταμάτησε. Δεν φώναξε. Δεν κατηγόρησε κανέναν. Πήρε τρία χαρτιά και έγραψε μια λέξη σε κάθε ένα: ΚΑΝΟΝΕΣ. ΔΟΚΙΜΗ. ΒΕΛΤΙΩΣΗ.

Τα χαρτιά μπήκαν στον τοίχο, κάτω από τη μεγάλη ημερομηνία. Και τότε κάτι μαγικό συνέβη μέσα στα μυαλά τους: το βουνό — εκείνο το τεράστιο, αδύνατο βουνό που λεγόταν «το καλύτερο παιχνίδι» — έσπασε. Έγινε σκάλα. Μικρά σκαλοπάτια. Ένα-ένα.

«Δεν χρειάζεται να φτάσουμε στην κορυφή σήμερα», είπε η Ελευθερία. «Χρειάζεται μόνο να ανέβουμε ένα σκαλοπάτι.»

Κάθε μέρα, ένα πράγμα. Μόνο ένα. Δευτέρα: ξαναέγραψαν τους κανόνες πιο απλά. Τρίτη: ξανασχεδίασαν πέντε κάρτες. Τετάρτη: δοκίμασαν το παιχνίδι μόνοι τους και γέλασαν με τα λάθη τους.

Ούτε μία μέρα χωρίς κίνηση. Αυτός ο κανόνας χαράχτηκε μέσα τους σαν σε πέτρα. Και σιγά σιγά, δεν άλλαζε μόνο το παιχνίδι. Άλλαζαν οι ίδιοι. Ο Φίλιππος έμαθε να μετράει πριν κόψει. Η Αλεξάνδρα έμαθε να τελειώνει μια ιδέα πριν αρχίσει την επόμενη. Και η Ελευθερία έμαθε το πιο δύσκολο: ότι τα χέρια μπορούν να κάνουν αυτά που ο νους σχεδιάζει.`,
          en: `The first days, the joy was real. Alexandra designed cards with dragons and treasures. Philippos cut cardboard and whistled while he worked. Eleftheria wrote rules in her most careful handwriting.

But reality knocked on the door quickly. Alexandra wanted to design the entire game in a single day and was exhausted before noon. Philippos cut without measuring, crooked, hasty. "We'll fix it later," he kept saying. But "later" grew like a shadow at sunset.

Eleftheria stopped them. She didn't yell. She didn't blame anyone. She took three sheets of paper and wrote a single word on each: RULES. TESTING. IMPROVE.

The sheets went up on the wall, beneath the big deadline. And then something magical happened inside their minds: the mountain — that enormous, impossible mountain called "the best game" — broke apart. It became a staircase. Small steps. One at a time.

"We don't need to reach the summit today," said Eleftheria. "We only need to climb one step."

Every day, one thing. Only one. Monday: they rewrote the rules more simply. Tuesday: they redesigned five cards. Wednesday: they tested the game by themselves and laughed at their own mistakes.

Not a single day without movement. That rule was carved inside them as if in stone. And slowly, it wasn't only the game that was changing. They were changing. Philippos learned to measure before cutting. Alexandra learned to finish one idea before starting the next. And Eleftheria learned the hardest lesson of all: that hands can actually do what the mind designs.`
        }
      },
      {
        title: { el: "Η Δυσκολία", en: "The Difficulty" },
        image: "/images/filippos.webp",
        imageCaption: { el: "Η αποτυχία χτύπησε — σκληρά και ξαφνικά.", en: "Failure hit — hard and sudden." },
        text: {
          el: `Την τρίτη εβδομάδα, ο κόσμος τους γκρεμίστηκε. Όχι με θόρυβο. Χειρότερα: με γέλιο. Ξένο γέλιο.

Δύο παιδιά από τη γειτονιά ήρθαν να δοκιμάσουν το παιχνίδι. Κάθισαν στο τραπέζι, κοίταξαν τις κάρτες, διάβασαν τους κανόνες — τρεις ολόκληρες σελίδες — και μετά κοιτάχτηκαν μεταξύ τους. Εκείνο το κοίταγμα που δεν χρειάζεται λέξεις. Το κοίταγμα που σημαίνει: «Αυτό δεν δουλεύει.»

Το παιχνίδι δεν δούλευε. Πάρα πολλά σύμβολα. Πολύ κείμενο. Βαρετοί, μπερδεμένοι κανόνες. Ο Στέφανος γέλασε — όχι με κακία. Χειρότερα: με αδιαφορία. «Μπα, δεν γίνεται αυτό», είπε, σηκώθηκε και έφυγε. Η πόρτα έκλεισε πίσω του με έναν ήχο που έμοιαζε τελικός.

Ο Φίλιππος πέταξε τα χαρτιά στο πάτωμα. «Δεν είμαστε καλοί σε αυτό», είπε, και η φωνή του έτρεμε. Η Αλεξάνδρα κοίταζε τα σχέδιά της σαν να ήταν γράμματα σε ξένη γλώσσα. Η Ελευθερία δεν σήκωσε καθόλου τα μάτια από το πάτωμα. Ένιωθε κάτι καυτό στα μάγουλα: ντροπή.

Εκείνο το βράδυ, η WiseBot κατέβηκε αθόρυβα από το ράφι. Δεν τους χάιδεψε. Δεν τους παρηγόρησε με ψέματα. Κοίταξε τα σκορπισμένα κομμάτια στο πάτωμα και είπε ήρεμα:

«Το λάθος δείχνει πού να κοιτάξεις. Δεν δείχνει ποιος είσαι.»

«Μα εκείνοι γέλασαν...» ψέλλισε ο Φίλιππος.

«Γέλασαν με μια εκδοχή του παιχνιδιού. Εσείς είστε κάτι πολύ περισσότερο από μία εκδοχή.»

Η Ελευθερία σήκωσε αργά το κεφάλι. Η WiseBot συνέχισε: «Η αποτυχία δεν είναι τέλος. Είναι δεδομένα. Σου λέει: αυτό δεν λειτούργησε — δοκίμασε αλλιώς. Αν μπορείς να ακούσεις αυτό το μήνυμα χωρίς να σπάσεις, μπορείς να φτιάξεις τα πάντα.»`,
          en: `In the third week, their world came crashing down. Not with noise. Worse: with laughter. Someone else's laughter.

Two kids from the neighborhood came over to try the game. They sat at the table, looked at the cards, read the rules — three whole pages of them — and then glanced at each other. That glance that needs no words. The glance that means: "This doesn't work."

The game didn't work. Far too many symbols. Too much text. Boring, confusing rules. Stefanos laughed — not with malice. Worse: with indifference. "Nah, this isn't gonna work," he said, stood up, and left. The door closed behind him with a sound that felt final.

Philippos threw the papers on the floor. "We're not good at this," he said, his voice shaking. Alexandra stared at her designs as if they were letters in a foreign language. Eleftheria never lifted her eyes from the floor. She felt something burning in her cheeks: shame.

That night, WiseBot came down silently from the shelf. She didn't pat their heads. She didn't comfort them with lies. She looked at the scattered pieces on the floor and said calmly:

"The mistake shows you where to look. It doesn't show you who you are."

"But they laughed..." Philippos mumbled.

"They laughed at one version of the game. You are far more than one version."

Eleftheria slowly raised her head. WiseBot continued: "Failure is not an ending. It is data. It tells you: this didn't work — try a different way. If you can hear that message without breaking, you can build anything."`
        }
      },
      {
        title: { el: "Η Παρουσίαση", en: "The Presentation" },
        image: "/images/paidia-wisebot-2.webp",
        imageCaption: { el: "Δεν ήταν τέλειο, αλλά ήταν αληθινό.", en: "Not perfect, but real." },
        text: {
          el: `Ένα απόγευμα, ενώ δούλευαν σκυμμένοι πάνω από τις καινούριες, απλούστερες κάρτες, ο Sparken κατέβηκε χαμηλά. Τα φτερά του — φλόγινα, κόκκινα με πορτοκαλί άκρες — σκέπασαν για μια στιγμή τον ήλιο. Προσγειώθηκε στο περβάζι και εξέτασε τα πάντα: το ταμπλό, τις κάρτες, τα κουρασμένα αλλά αποφασισμένα πρόσωπά τους.

«Θα μπορούσε να είναι καλύτερο», είπε. Τα παιδιά πάγωσαν. Η καρδιά του Φίλιππου βούλιαξε. Τότε ο αετός χαμογέλασε — μόλις ορατά, όπως χαμογελούν τα βουνά. «Αλλά το τελειώσατε. Εσείς μείνατε όταν έγινε δύσκολο.»

«Οι περισσότεροι ξεκινούν με ενθουσιασμό», συνέχισε. «Αυτό είναι εύκολο. Λίγοι γράφουν στον τοίχο τι ακριβώς θέλουν. Γιατί αυτό σημαίνει δέσμευση. Και ακόμα λιγότεροι μένουν όταν οι άλλοι γελάνε μαζί τους. Εσείς μείνατε.»

Η 1η Ιουνίου ήρθε με ήλιο. Το ταμπλό στη μέση του τραπεζιού δεν ήταν τέλειο — αλλά ήταν ωραίο. Χρωματιστά μονοπάτια. Κάρτες κομμένες ίσια, επιτέλους. Πιόνια πλασμένα από πηλό, το καθένα λίγο στραβό και γι' αυτό μοναδικό.

Πέντε παιδιά κάθισαν γύρω από το τραπέζι. Πρώτος γύρος: ησυχία και ψίθυροι. Δεύτερος: ερωτήσεις. Τρίτος: φωνές. «ΟΧΙ! Γιατί μου πήρες αυτόν τον ήρωα;» Γέλια — αλλά αυτή τη φορά γέλια χαράς. Πέμπτος, έκτος, έβδομος γύρος. Κανείς δεν σηκωνόταν από την καρέκλα του.

Και τότε ένα αγόρι ρώτησε: «Πότε βγαίνει το επόμενο;»

Τα τρία παιδιά κοιτάχτηκαν. Δεν χρειάστηκε να πουν τίποτα. Τα καταφέραμε.

Γιατί ο στόχος δεν ήταν ποτέ το τέλειο παιχνίδι. Ήταν να μάθουν πώς τελειώνουν αυτό που ξεκινούν. Η δέσμευση δεν είναι μια ηρωική στιγμή. Είναι εκατό μικρές, ήσυχες αποφάσεις: «Θα εμφανιστώ σήμερα.» Και μια μέρα, γυρίζεις πίσω και βλέπεις — ανέβηκες ολόκληρο βουνό.`,
          en: `One afternoon, while they were hunched over the new, simpler cards, Sparken came down low. His wings — blazing red with orange tips — covered the sun for a moment. He landed on the windowsill and examined everything: the board, the cards, their tired but determined faces.

"It could be better," he said. The children froze. Philippos felt his heart sink. Then the eagle smiled — barely visibly, the way mountains smile. "But you finished it. You stayed when it got hard."

"Most people start with excitement," he continued. "That part is easy. Few write on the wall exactly what they want. Because that means committing. And even fewer stay when others laugh at them. You stayed."

June 1st arrived with sunshine. The board in the center of the table wasn't perfect — but it was beautiful. Colorful pathways. Cards cut straight, at last. Playing pieces shaped from clay, each one slightly crooked and, for that reason, unique.

Five children sat around the table. First round: quiet and whispers. Second round: questions. Third round: shouting. "NO! Why did you take my hero?" Laughter — but this time, laughter of joy. Fifth, sixth, seventh round. No one left their chair.

And then a boy asked: "When is the next one coming out?"

The three children looked at each other. Nothing needed to be said. We did it.

Because the goal was never the perfect game. It was to learn how to finish what you start. Commitment is not one heroic moment. It is a hundred small, quiet decisions: "I will show up today." And one day, you look back and see — you climbed an entire mountain.`
        }
      }
    ]
  }
];
