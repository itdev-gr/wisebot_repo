
import { Book } from '../types';

// ============================================================
// BOOK 21: O ΚΑΘΡΕΦΤΗΣ / THE MIRROR
// Hero: ΕΣΥ (You - the reader)
// Theme: ΑΥΤΟΓΝΩΣΙΑ / SELF-REFLECTION
// ============================================================

export const BOOK_21: Book[] = [
  {
    id: 21,
    title: { el: "Ο ΚΑΘΡΕΦΤΗΣ", en: "THE MIRROR" },
    theme: { el: "ΑΥΤΟΓΝΩΣΙΑ", en: "SELF-REFLECTION" },
    stepLabel: { el: "ΤΟ ΤΕΛΟΣ & Η ΑΡΧΗ", en: "THE END & THE BEGINNING" },
    author: "Εσύ",
    cover: "/images/crocus.jpg",
    videoUrl: "",
    description: {
      el: "Μισό ιστορία, μισό καθρέφτης. Οι ήρωες έφυγαν. Τώρα μένεις μόνο εσύ. Μια ιστορία που τελειώνει μόνο όταν αρχίζεις εσύ.",
      en: "Half story, half mirror. The heroes have left. Now only you remain. A story that ends only when you begin."
    },
    meaning: {
      el: "Δεν χρειάζεσαι ήρωες. Μπορείς να γίνεις.",
      en: "You don't need heroes. You can become one."
    },
    xp: 310,
    parentMessage: {
      el: "Αυτό το κεφάλαιο είναι ένας καθρέφτης για το παιδί σας. Δεν διδάσκει κάτι νέο — θυμίζει αυτό που ήδη υπάρχει μέσα του. Η αυτογνωσία δεν είναι πολυτέλεια — είναι η βάση κάθε υγιούς ανάπτυξης. Δοκιμάστε σήμερα: ρωτήστε το παιδί σας «Αν μπορούσες να κρατήσεις ΕΝΑ πράγμα από όλα αυτά τα κεφάλαια, ποιο θα ήταν;» Μην διορθώσετε. Μην σχολιάσετε. Απλά ακούστε.",
      en: "This chapter is a mirror for your child. It doesn't teach something new — it reminds them of what already lives inside. Self-awareness is not a luxury — it is the foundation of healthy growth. Try today: ask your child 'If you could keep ONE thing from all these chapters, what would it be?' Don't correct. Don't comment. Just listen."
    },

    pages: [
      {
        title: { el: "Το Δωμάτιο Χωρίς Φωνές", en: "The Room Without Voices" },
        image: "/images/ta-3-paidia.webp",
        imageCaption: { el: "Ένα δωμάτιο γεμάτο αναμνήσεις — αλλά χωρίς φωνές.", en: "A room full of memories — but without voices." },
        text: {
          el: `Το δωμάτιο ήταν άδειο. Όχι εγκαταλελειμμένο — ήρεμο. Τα τραπέζια στη θέση τους. Τα μολύβια τακτοποιημένα. Τα σχέδια δεν ήταν πια εκεί.

Φως πρωινού γλιστρούσε μέσα από τα παράθυρα, μαλακό, σχεδόν διστακτικό. Σκόνη χόρευε στις ακτίνες, αργά, σαν να θυμόταν κινήσεις που κάποτε γέμιζαν αυτόν τον χώρο.

Η Αλεξάνδρα στάθηκε στη μέση. Δεν έψαχνε τη WiseBot. Δεν περίμενε τον Crocus. Δεν φώναζε τον Sparken, τον Link ή τον Pencilo. Τα χέρια της κρέμονταν ήσυχα στο πλάι.

«Δεν θα έρθουν», ψιθύρισε. Και αυτό — για πρώτη φορά — δεν την τρόμαξε.

Ο Φίλιππος ακούμπησε στην πόρτα. Κοιτούσε τα ίχνη στο πάτωμα. Εδώ είχαν χτίσει το πρώτο ρομπότ. Εκεί είχαν σπάσει το δεύτερο. Σ' εκείνη τη γωνία η Ελευθερία είχε διαβάσει δυνατά ένα ποίημα μια νύχτα χωρίς φεγγάρι.

Η Ελευθερία κοίταξε γύρω της. Κάθε γωνιά κρατούσε ίχνη. Κάθε τόπος κρατάει τις ιστορίες αυτών που τον αγάπησαν. Αυτό το δωμάτιο δεν ήταν άδειο. Ήταν γεμάτο αναμνήσεις.`,
          en: `The room was empty. Not abandoned — calm. The tables in their place. The pencils tidy. The drawings were no longer there.

Morning light slipped through the windows, soft, almost hesitant. Dust danced in the beams, slowly, as though remembering movements that once filled this space.

Alexandra stood in the middle. She wasn't looking for WiseBot. She wasn't waiting for Crocus. She wasn't calling for Sparken, Link, or Pencilo. Her hands hung quietly at her sides.

"They won't come," she whispered. And that — for the first time — didn't frighten her.

Philippos leaned against the doorframe. He was looking at the marks on the floor. Here they had built the first robot. There they had broken the second. In that corner, Eleftheria had read aloud a poem on a moonless night.

Eleftheria looked around. Every corner held traces. Every place holds the stories of those who loved it. This room was not empty. It was full of memories.`
        }
      },
      {
        title: { el: "Τα Δώρα που Άφησαν", en: "The Gifts They Left" },
        image: "/images/paidia-kai-wisebot.webp",
        imageCaption: { el: "Πέντε αντικείμενα. Πέντε δάσκαλοι. Μία αλήθεια.", en: "Five objects. Five teachers. One truth." },
        text: {
          el: `Πάνω στο τραπέζι υπήρχαν πέντε αντικείμενα. Τοποθετημένα με φροντίδα, σαν αστέρια σε αστερισμό.

Ένας φακός — μικρός, μεταλλικός, με μωβ ανταύγειες. Η WiseBot. Ακόμα ζεστός, σαν να τον είχε κρατήσει κάποιος μόλις πριν λίγο.

Ένα ζευγάρι γάντια — πράσινα, ζεστά, λίγο φθαρμένα στις άκρες. Ο Crocus. Μύριζαν χώμα και φρέσκα φύλλα.

Ένα μπλοκ — γεμάτο σκίτσα και λέξεις διαγραμμένες και ξαναγραμμένες. Ο Pencilo. Κάθε σβήσιμο ήταν αποδοχή ότι η τελειότητα δεν είναι το ζητούμενο — η ειλικρίνεια είναι.

Ένα κομμάτι καλώδιο — λεπτό, εύκαμπτο, τυλιγμένο σε σπιράλ. Ο Link. Μέσα του κρυβόταν η δύναμη να συνδέσει ιδέες με χέρια, ανθρώπους με ανθρώπους, όνειρα με πραγματικότητα.

Και μια πυξίδα — με ασημένιο καπάκι που αντανακλούσε το φως σαν καθρέφτης. Ο Sparken. Η βελόνα δεν έδειχνε βορρά. Έδειχνε μπροστά. Πάντα μπροστά.

Ο Φίλιππος τα άγγιξε ένα-ένα. Αργά. Με σεβασμό.

«Νομίζαμε ότι ήταν τα εργαλεία τους», είπε σιγά.

Η Ελευθερία χαμογέλασε. Ένα χαμόγελο αναγνώρισης.

«Ήταν τα δικά μας», είπε. Τα πιο σημαντικά δώρα δεν είναι αυτά που παίρνεις. Είναι αυτά που καταλαβαίνεις ότι πάντα είχες.`,
          en: `On the table there were five objects. Placed with care, like stars in a constellation.

A flashlight — small, metallic, with purple reflections. WiseBot. Still warm, as if someone had been holding it just moments ago.

A pair of gloves — green, warm, slightly worn at the edges. Crocus. They smelled of earth and fresh leaves.

A notepad — filled with sketches, words crossed out and rewritten. Pencilo. Each erasure was an acceptance that perfection is not the goal — honesty is.

A piece of wire — thin, flexible, wound into a spiral. Link. Inside it hid the power to connect ideas with hands, people with people, dreams with reality.

And a compass — with a silver lid that reflected light like a mirror. Sparken. The needle didn't point north. It pointed forward. Always forward.

Philippos touched them one by one. Slowly. With respect.

"We thought they were their tools," he said quietly.

Eleftheria smiled. A smile of recognition.

"They were ours," she said. The most important gifts are not those you receive. They are those you realize you always had.`
        }
      },
      {
        title: { el: "Η Αναγνώριση", en: "The Recognition" },
        image: "/images/paidia-wisebot-2.webp",
        imageCaption: { el: "Τρεις μεταμορφώσεις. Ένας δρόμος από τη βαρεμάρα στην αυτογνωσία.", en: "Three transformations. A road from boredom to self-awareness." },
        text: {
          el: `Η Αλεξάνδρα πήρε τα γάντια. Τα φόρεσε. Ταίριαζαν τέλεια. Ένιωσε ένα ρίγος — ζεστό, βαθύ — να ανεβαίνει από τα χέρια στο στήθος. Μια δύναμη που δεν ήρθε απ' έξω. Ξύπνησε από μέσα.

«Εγώ δεν είμαι πια φοβισμένη», είπε. Σταμάτησε. Πήρε ανάσα. «Είμαι... έτοιμη για δράση.»

Η Αλεξάνδρα που κάποτε μετρούσε ρωγμές στο ταβάνι τώρα μετρούσε δυνατότητες στον ορίζοντα.

Ο Φίλιππος πήρε το μπλοκ. Το άνοιξε στην πρώτη σελίδα — άδεια, λευκή, γεμάτη δυνατότητες.

«Εγώ δεν είμαι πια βιαστικός», είπε. «Είμαι... δημιουργός.»

Το αγόρι που κάποτε φώναζε «ΧΑΛΑΣ ΤΟ ΧΡΟΝΟ ΜΟΥ!» τώρα κρατούσε τον χρόνο στα χέρια του σαν κάτι πολύτιμο.

Η Ελευθερία κράτησε τον φακό. Τον άναψε. Μωβ φως γέμισε τη γωνιά.

«Εγώ δεν είμαι πια θεωρητική», είπε. «Είμαι... οδηγός.»

Το κορίτσι που κρυβόταν πίσω από 450 βιβλία τώρα στεκόταν μπροστά — με τη γνώση στο ένα χέρι και το θάρρος στο άλλο.

Κάτω από τον φακό υπήρχε ένα σημείωμα, γραμμένο με μωβ μελάνι: «Δεν σας έμαθα τίποτα. Σας θύμισα αυτά που ξέρατε ήδη.» Υπογραφή: WiseBot.`,
          en: `Alexandra took the gloves. She put them on. They fit perfectly. She felt a shiver — warm, deep — rising from her hands to her chest. A strength that didn't come from outside. It awakened from within.

"I am no longer scared," she said. She paused. Took a breath. "I am... ready for action."

The Alexandra who once counted ceiling cracks now counted possibilities on the horizon.

Philippos took the notepad. He opened it to the first page — empty, white, full of possibilities.

"I am no longer hasty," he said. "I am... a creator."

The boy who once screamed "YOU'RE WASTING MY TIME!" now held time in his hands like something precious.

Eleftheria held the flashlight. She turned it on. Purple light filled the corner.

"I am no longer theoretical," she said. "I am... a guide."

The girl who once hid behind 450 books now stood in front — with knowledge in one hand and courage in the other.

Beneath the flashlight there was a note, written in purple ink: "I didn't teach you anything. I reminded you of what you already knew." Signed: WiseBot.`
        }
      },
      {
        title: { el: "Ο Καθρέφτης Γυρίζει Προς Εσένα", en: "The Mirror Turns to You" },
        image: "/images/crocus.jpg",
        imageCaption: { el: "Τώρα ο καθρέφτης γυρνάει προς εσένα.", en: "Now the mirror turns to face you." },
        text: {
          el: `Σταμάτα εδώ. Πάρε μια ανάσα. Αργά. Βαθιά.

Αυτό που διάβασες δεν ήταν απλώς μια ιστορία. Ήταν ένας καθρέφτης. Και τώρα — σε αυτή τη σελίδα — ο καθρέφτης γυρνάει προς εσένα.

Πόσες φορές ένιωσες σαν τη Αλεξάνδρα; Ξαπλωμένος, βαρεμένος, κρύβοντας τον φόβο πίσω από αδιαφορία. Πόσες φορές ήσουν ο Φίλιππος; Θυμωμένος, ανυπόμονος, σπάζοντας τα πράγματα γιατί δεν ήξερες πώς να τα φτιάξεις. Πόσες φορές ήσουν η Ελευθερία; Κρυμμένος πίσω από βιβλία, πίσω από γνώση, χωρίς να δοκιμάσεις ποτέ.

Η WiseBot είναι η φωνή μέσα σου που λέει «Σκέψου πριν φοβηθείς». Η σοφία σου.

Ο Crocus είναι η φωνή που λέει «Σήκω και κάν' το». Η δύναμή σου.

Ο Pencilo είναι τα χέρια σου που λένε «Μπορώ να το σχεδιάσω». Η ειλικρίνειά σου.

Ο Link είναι η σύνδεση. Κάθε φορά που ενώνεις ιδέες, ανθρώπους, κόσμους. Η δημιουργικότητά σου.

Ο Sparken είναι τα μάτια σου που βλέπουν το αύριο. Το όραμά σου.

Δεν χρειάζεσαι ήρωες. Γιατί κάθε ένας από αυτούς ζει μέσα σου. Πάντα ζούσε. Απλά τώρα — τους βλέπεις.`,
          en: `Stop here. Take a breath. Slowly. Deeply.

What you read was not simply a story. It was a mirror. And now — on this page — the mirror turns to face you.

How many times have you felt like Alexandra? Lying down, bored, hiding your fear behind indifference. How many times were you Philippos? Angry, impatient, breaking things because you didn't know how to build them. How many times were you Eleftheria? Hidden behind books, behind knowledge, never having tried.

WiseBot is the voice inside you saying "Think before you fear." Your wisdom.

Crocus is the voice saying "Get up and do it." Your strength.

Pencilo is your hands saying "I can design it." Your honesty.

Link is connection. Every time you join ideas, people, worlds together. Your creativity.

Sparken is your eyes seeing tomorrow. Your vision.

You don't need heroes. Because every one of them lives inside you. They always have. You just now — can see them.`
        }
      },
      {
        title: { el: "Η Αρχή", en: "The Beginning" },
        image: "/images/paidia-kai-crocus.webp",
        imageCaption: { el: "Ο δρόμος δεν τελειώνει. Μόλις αρχίζει.", en: "The road doesn't end. It is just beginning." },
        text: {
          el: `Τα τρία παιδιά στάθηκαν στην πόρτα. Δεν βιάζονταν. Δεν ήταν λυπημένα.

Η Αλεξάνδρα κοίταξε πίσω. Δεκατρείς ρωγμές στο ταβάνι — τώρα δεν έβλεπε ρωγμές. Έβλεπε μονοπάτια.

Ο Φίλιππος χαμογέλασε. Εκείνο το «ΚΡΑΚ» που τον στοίχειωνε ήταν ο ήχος κάτι παλιού που έσπαγε — η υπομονή ενός αγοριού που δεν ήξερε ακόμα πώς να χτίσει τον εαυτό του.

Η Ελευθερία πήρε μια βαθιά ανάσα. Κοίταξε τους δύο φίλους της. Κάποτε ήταν τρία παιδιά που βαριούνταν. Τώρα ήταν τρεις άνθρωποι που ήξεραν ποιοι είναι.

«Πάμε;» ρώτησε ο Φίλιππος.

«Πάμε», είπε η Αλεξάνδρα.

«Πάμε», συμφώνησε η Ελευθερία.

Κανείς δεν ρώτησε «πού». Η απάντηση ήταν πάντα η ίδια: Μπροστά.

Κάθε ιστορία έχει τέλος. Αυτή — δεν έχει. Αυτή η ιστορία τελειώνει μόνο όταν αρχίζεις εσύ. Όταν σηκώνεσαι. Όταν κοιτάς τα χέρια σου και λες: «Μπορώ.» Όταν παίρνεις ένα μολύβι, μια ιδέα — και κάνεις κάτι.

Κλείσε την οθόνη. Και πήγαινε να φτιάξεις τον κόσμο σου. Η ιστορία συνεχίζεται — με εσένα.`,
          en: `The three children stood at the door. They weren't in a hurry. They weren't sad.

Alexandra looked back. Thirteen ceiling cracks — now she didn't see cracks. She saw pathways.

Philippos smiled. That "CRACK" that had haunted him was the sound of something old breaking — the patience of a boy who didn't yet know how to build himself.

Eleftheria took a deep breath. She looked at her two friends. Once they were three bored children. Now they were three people who knew who they were.

"Shall we go?" asked Philippos.

"Let's go," said Alexandra.

"Let's go," agreed Eleftheria.

No one asked "where." The answer was always the same: Forward.

Every story has an ending. This one — doesn't. This story ends only when you begin. When you stand up. When you look at your hands and say: "I can." When you pick up a pencil, an idea — and make something.

Turn off the screen. And go build your world. The story continues — with you.`
        }
      }
    ]
  }
];
