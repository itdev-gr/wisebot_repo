
import { Book } from '../types';

// ============================================================
// 📖 BOOK 9: ΔΕΝ ΦΤΑΝΕΙ Ο ΧΡΟΝΟΣ / NOT ENOUGH TIME
// Heroes: WiseBot & Sparken
// Theme: ΧΡΟΝΟΣ / TIME
// ============================================================

export const BOOK_9: Book[] = [
  {
    id: 9,
    title: { el: "ΔΕΝ ΦΤΑΝΕΙ Ο ΧΡΟΝΟΣ", en: "NOT ENOUGH TIME" },
    theme: { el: "ΧΡΟΝΟΣ", en: "TIME" },
    stepLabel: { el: "WISEBOT & Ο ΧΡΟΝΟΣ", en: "WISEBOT & TIME" },
    author: "Wisebot & Sparken",
    cover: "/images/wisebot.jpg",
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
    parentMessage: {
      el: "Τα παιδιά δεν αντέχουν τα πάντα ταυτόχρονα — κανείς δεν αντέχει. Η πίεση δεν χτίζει χαρακτήρα, χτίζει εξάντληση. Βοηθήστε το παιδί σας να μάθει να επιλέγει: «Τι είναι σημαντικό σήμερα;» αντί «Πώς θα προλάβω τα πάντα;»",
      en: "Children can't handle everything at once — nobody can. Pressure doesn't build character, it builds exhaustion. Help your child learn to choose: 'What is important today?' instead of 'How will I manage everything?'"
    },

    pages: [
      {
        title: { el: "Τα Πάντα Ταυτόχρονα", en: "Everything At Once" },
        image: "/images/ta-3-paidia.webp",
        imageCaption: { el: "Τρεις λίστες. Τρεις μέρες. Μηδέν χρόνος.", en: "Three lists. Three days. Zero time." },
        text: {
          el: `Το ξυπνητήρι χτύπησε στις 6:30. Η Αλεξάνδρα το κοίταξε σαν εχθρό.

Σήμερα: σχολείο, μάθημα πιάνου, project, ζωγραφική, και — κάπου εκεί μέσα — το δικό τους πράγμα. Αυτό που ήθελε πραγματικά.

Ο Φίλιππος είχε σχίσει μια σελίδα από τετράδιο. Πάνω είχε γράψει: «ΝΑ ΚΑΝΩ». Η λίστα ήταν μακρύτερη από το χέρι του.

«Δεν γίνεται», είπε η Ελευθερία ακουμπώντας το κεφάλι στο τραπέζι. «Δεν γίνεται να τα κάνουμε όλα.»

«Πρέπει!» είπε ο Φίλιππος. Τα μάτια του ήταν κόκκινα. Δεν είχε κοιμηθεί αρκετά.

Η Αλεξάνδρα ένιωθε ένα βάρος στο στήθος — σαν κάποιος να κάθεται πάνω της. Αυτό δεν ήταν κούραση. Ήταν κάτι χειρότερο. Ήταν η αίσθηση ότι ό,τι κι αν κάνεις, δεν φτάνει.`,
          en: `The alarm rang at 6:30. Alexandra looked at it like an enemy.

Today: school, piano lesson, project, painting, and — somewhere in there — their own thing. The thing she actually wanted.

Philippos had torn a page from his notebook. On it he'd written: "TO DO." The list was longer than his arm.

"It can't be done," said Eleftheria, resting her head on the table. "We can't do everything."

"We have to!" said Philippos. His eyes were red. He hadn't slept enough.

Alexandra felt a weight on her chest — as if someone were sitting on her. This wasn't tiredness. It was something worse. The feeling that whatever you do, it's not enough.`
        }
      },
      {
        title: { el: "Η Ρωγμή", en: "The Crack" },
        image: "/images/alexandra.webp",
        imageCaption: { el: "Η στιγμή που κάτι ραγίζει μέσα σου.", en: "The moment something cracks inside you." },
        text: {
          el: `Η μέρα κύλησε σαν τρένο χωρίς στάση. Ένα μάθημα πίσω από το άλλο. Ένα «πρέπει» πίσω από το επόμενο.

Το απόγευμα, κάθισαν στο δωμάτιο. Ο Φίλιππος πήρε τα υλικά. Η Ελευθερία άνοιξε το βιβλίο. Η Αλεξάνδρα ετοίμασε τα χρώματα.

Αλλά τα χέρια δεν κινήθηκαν.

«Δεν μπορώ», ψιθύρισε η Αλεξάνδρα. Τα μάτια της ήταν γυαλιστερά. Όχι από χαρά. Από κούραση που γίνεται πόνος.

Ο Φίλιππος σφίχτηκε. «Αν δεν το κάνουμε τώρα, πότε;»

«Δεν ξέρω», είπε η Ελευθερία. «Αλλά ξέρω ότι αυτό δεν είναι ζωή. Δεν χαίρομαι τίποτα. Απλώς τρέχω.»

Η αλήθεια χτύπησε σαν κύμα. Κανείς δεν μίλησε. Γιατί όλοι ήξεραν ότι είχε δίκιο.`,
          en: `The day rolled like a train with no stops. One lesson behind another. One "must" behind the next.

In the afternoon, they sat in the room. Philippos got the materials. Eleftheria opened the book. Alexandra prepared the colors.

But their hands didn't move.

"I can't," whispered Alexandra. Her eyes were glossy. Not from joy. From tiredness that becomes pain.

Philippos tensed. "If we don't do it now, when?"

"I don't know," said Eleftheria. "But I know this isn't living. I'm not enjoying anything. I'm just running."

The truth hit like a wave. Nobody spoke. Because they all knew she was right.`
        }
      },
      {
        title: { el: "Η Ερώτηση της WiseBot", en: "WiseBot's Question" },
        image: "/images/paidia-kai-wisebot.webp",
        imageCaption: { el: "«Αν μπορούσατε να κρατήσετε μόνο ένα πράγμα;»", en: "\"If you could keep only one thing?\"" },
        text: {
          el: `Η WiseBot εμφανίστηκε αθόρυβα. Κοίταξε τα τρία πρόσωπα — κουρασμένα, θυμωμένα, λυπημένα.

«Θα κάνω μια ερώτηση», είπε. «Μια μόνο.»

Τα παιδιά σήκωσαν τα μάτια.

«Αν μπορούσατε να κρατήσετε μόνο ΕΝΑ πράγμα απ' αυτή τη λίστα… ποιο θα ήταν;»

Σιωπή. Η ερώτηση ήταν απλή. Η απάντηση — τρομακτική.

«Αυτό», είπε ο Φίλιππος, δείχνοντας το project τους. Η φωνή του ήταν σιγανή αλλά σταθερή.

«Γιατί;»

«Γιατί… είναι δικό μας. Τα υπόλοιπα μου τα λένε να τα κάνω. Αυτό το θέλω.»

Η WiseBot έλαμψε ελαφρά. «Ο χρόνος δεν είναι πρόβλημα. Η αδυναμία να επιλέξεις είναι το πρόβλημα. Όταν λες ΝΑΙ σε όλα, λες ΟΧΙ στο σημαντικό.»`,
          en: `WiseBot appeared silently. She looked at the three faces — tired, angry, sad.

"I will ask one question," she said. "Just one."

The children raised their eyes.

"If you could keep only ONE thing from this list… what would it be?"

Silence. The question was simple. The answer — terrifying.

"This," said Philippos, pointing at their project. His voice was quiet but steady.

"Why?"

"Because… it's ours. Everything else, they tell me to do. This, I want."

WiseBot glowed gently. "Time is not the problem. The inability to choose is the problem. When you say YES to everything, you say NO to what matters."`
        }
      },
      {
        title: { el: "Τα Τρία Κουτιά", en: "The Three Boxes" },
        image: "/images/sparken.jpg",
        imageCaption: { el: "Ψηλά. Κοντά. Μακριά.", en: "High. Close. Far." },
        text: {
          el: `Ο Sparken μπήκε σιωπηλά. Κοίταξε τη λίστα.

«Τρία κουτιά», είπε. «Τα πάντα χωρούν σε τρία κουτιά.»

Πήρε ένα χαρτί. Ζωγράφισε:

ΤΩΡΑ — Αυτό που πρέπει σήμερα.
ΑΥΡΙΟ — Αυτό που μπορεί να περιμένει.
ΠΟΤΕ — Αυτό που δεν σε αφορά.

«Βάλτε κάθε πράγμα σε ένα κουτί.»

Η Ελευθερία ξεκίνησε πρώτη. Αργά. Με κάθε πράγμα που πήγαινε στο «ΑΥΡΙΟ», ένιωθε πιο ελαφριά. Με κάθε πράγμα στο «ΠΟΤΕ» — σαν να έβγαζε πέτρα από το σακίδιό της.

«Δεν χρειάζεται να κάνεις τα πάντα», είπε ο Sparken. «Χρειάζεται να κάνεις τα σωστά.»

Ο Φίλιππος κοίταξε τη λίστα — τα μισά ήταν στο «ΑΥΡΙΟ» ή «ΠΟΤΕ». Ένιωσε κάτι παράξενο: ανακούφιση. Σαν να πέταξε μια τσάντα γεμάτη πέτρες.`,
          en: `Sparken entered silently. He looked at the list.

"Three boxes," he said. "Everything fits in three boxes."

He took a paper. Drew:

NOW — What must happen today.
TOMORROW — What can wait.
NEVER — What isn't your concern.

"Put each thing in a box."

Eleftheria started first. Slowly. With each thing that went to "TOMORROW," she felt lighter. With each thing in "NEVER" — like removing a stone from her backpack.

"You don't need to do everything," said Sparken. "You need to do the right things."

Philippos looked at the list — half was in "TOMORROW" or "NEVER." He felt something strange: relief. Like throwing away a bag full of rocks.`
        }
      },
      {
        title: { el: "Η Ώρα που Αρκεί", en: "The Hour That's Enough" },
        image: "/images/paidia-wisebot-2.webp",
        imageCaption: { el: "Μία ώρα. Χωρίς βιασύνη. Χωρίς ενοχή.", en: "One hour. Without rush. Without guilt." },
        text: {
          el: `Εκείνο το βράδυ, δεν έκαναν τα πάντα. Έκαναν ένα πράγμα. Μία ώρα. Χωρίς βιασύνη. Χωρίς ενοχή.

Η Αλεξάνδρα ζωγράφισε — και για πρώτη φορά εδώ και μέρες, χαμογέλασε ενώ ζωγράφιζε.

Ο Φίλιππος έφτιαξε — και δεν κοίταξε το ρολόι ούτε μία φορά.

Η Ελευθερία έγραψε — και οι λέξεις έτρεχαν σαν νερό, σαν να τις περίμεναν.

«Νιώθω πιο ελαφριά», είπε η Αλεξάνδρα.

«Νιώθω πιο δυνατός», είπε ο Φίλιππος.

«Νιώθω πιο εγώ», είπε η Ελευθερία.

Η WiseBot τους κοίταξε. «Δεν φταίει που κουραστήκατε. Φταίει που προσπαθήσατε να χωρέσετε τα πάντα. Ο χρόνος δεν είναι εχθρός. Εχθρός είναι η αδυναμία να πεις: αρκετά.»

Κι αυτό το βράδυ, κοιμήθηκαν νωρίς. Για πρώτη φορά.`,
          en: `That night, they didn't do everything. They did one thing. One hour. Without rush. Without guilt.

Alexandra painted — and for the first time in days, she smiled while painting.

Philippos built — and didn't check the clock even once.

Eleftheria wrote — and the words flowed like water, as if they'd been waiting.

"I feel lighter," said Alexandra.

"I feel stronger," said Philippos.

"I feel more like me," said Eleftheria.

WiseBot looked at them. "It's not your fault you got tired. It's that you tried to fit everything in. Time is not the enemy. The enemy is the inability to say: enough."

And that night, they went to bed early. For the first time.`
        }
      }
    ]
  }
];
