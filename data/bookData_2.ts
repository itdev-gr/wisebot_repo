
import { Book } from '../types';

// ============================================================
// 📖 BOOK 2: ΠΑΜΕ! / LET'S GO!
// Hero: Crocus (ο κροκόδειλος)
// Theme: ΔΡΑΣΗ / ACTION
// ============================================================

export const BOOK_2: Book[] = [
  {
    id: 2,
    title: { el: "ΠΑΜΕ!", en: "LET'S GO!" },
    theme: { el: "ΔΡΑΣΗ", en: "ACTION" },
    stepLabel: { el: "CROCUS & Η ΔΡΑΣΗ", en: "CROCUS & ACTION" },
    author: "Crocus",
    cover: "/images/crocus.jpg",
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
    parentMessage: {
      el: "Η υπερβολική σκέψη μοιάζει με προσοχή, αλλά συχνά είναι φόβος. Τα παιδιά χρειάζονται άδεια να ξεκινήσουν ατελά. Δοκιμάστε σήμερα: όταν το παιδί σας λέει «δεν είμαι σίγουρος/η», πείτε του: «Δεν χρειάζεται να είσαι σίγουρος. Χρειάζεται να ξεκινήσεις.»",
      en: "Overthinking looks like caution, but is often fear. Children need permission to start imperfectly. Try today: when your child says 'I'm not sure', tell them: 'You don't need to be sure. You need to start.'"
    },

    // ── NEW STRUCTURED PAGES (5 pages) ──────────────────────
    pages: [
      {
        title: { el: "Η Ιδέα που Κόλλησε", en: "The Stuck Idea" },
        image: "/images/ta-3-paidia.webp",
        imageCaption: { el: "Χαρτιά, σχέδια, αναποφασιστικότητα.", en: "Papers, plans, indecision." },
        text: {
          el: `Η ιδέα ήταν εκεί. Στη μέση του τραπεζιού. Χαρτιά σαν χάρτης θησαυρού χωρίς Χ. Σχέδια πάνω σε σχέδια πάνω σε διαγραμμένα σχέδια.

Η Αλεξάνδρα κοιτούσε το χαρτί σαν καθρέφτη. «Νομίζω ότι…» Σταμάτησε.

«Περίμενε», είπε η Ελευθερία χωρίς να σηκώσει τα μάτια από το βιβλίο της. «Να το σκεφτούμε λίγο ακόμα.»

Ο Φίλιππος άνοιξε το στόμα. Το έκλεισε. Κάτι τους κρατούσε — σαν αόρατο σχοινί δεμένο στα πόδια τους.

Πέρασε μία ώρα. Μετά άλλη μία. Το ρολόι στον τοίχο τους κοιτούσε σαν δικαστής. Τικ. Τοκ. Κάθε δευτερόλεπτο μια ψηφοφορία ενάντιά τους.

«Κι αν το καταλαβαίνουμε για πάντα… χωρίς να το κάνουμε ποτέ;» ψιθύρισε η Αλεξάνδρα.`,
          en: `The idea was there. In the middle of the table. Papers like a treasure map without an X. Sketches on top of sketches on top of erased sketches.

Alexandra stared at the paper as if it were a mirror. "I think that…" She stopped.

"Wait," said Eleftheria without raising her eyes from her book. "Let's think about it a bit more."

Philippos opened his mouth. Closed it. Something was holding them back — like an invisible rope tied to their feet.

An hour passed. Then another. The clock on the wall watched them like a judge. Tick. Tock. Every second a vote against them.

"What if we understand it forever… without ever doing it?" whispered Alexandra.`
        }
      },
      {
        title: { el: "ΜΠΑΜ!", en: "BANG!" },
        image: "/images/paidia-kai-crocus.webp",
        imageCaption: { el: "Η στιγμή που ο Crocus μπήκε στο δωμάτιο.", en: "The moment Crocus entered the room." },
        text: {
          el: `Η πόρτα δεν άνοιξε. Εκτοξεύτηκε.

ΜΠΑΑΜ! Χτύπησε τον τοίχο. Τα χαρτιά πέταξαν σαν φύλλα σε καταιγίδα.

Στο κατώφλι στεκόταν ένας μηχανικός κροκόδειλος. Ψηλός. Πράσινος σαν δάσος μετά τη βροχή. Γυαλιά στραβά — σαν να μην τον ένοιαζε να τα φτιάξει. Μάτια που γελούσαν, αλλά πίσω από το γέλιο κρύβονταν σημάδια. Σαν κάποιος που είχε πέσει πολλές φορές — αλλά σηκωνόταν πάντα.

«Ωραία. Θα το συζητάμε ή θα το κάνουμε;»

«Ποιος είσαι εσύ;!» πετάχτηκε η Αλεξάνδρα.

Ο κροκόδειλος χαμογέλασε. Ένα χαμόγελο πλατύ, γεμάτο δόντια — αλλά όχι τρομακτικό. Σαν πρόσκληση.

«Είμαι αυτός που έρχεται όταν όλοι έχουν κουραστεί να σκέφτονται. Λέγομαι Crocus.»`,
          en: `The door didn't open. It launched.

BANG! It slammed against the wall. Papers flew like leaves in a storm.

In the doorway stood a mechanical crocodile. Tall. Green like a forest after rain. Crooked glasses — as if he didn't care to fix them. Eyes that laughed, but behind the laughter there were marks. Like someone who had fallen many times — but always got back up.

"Great. Are we going to discuss it or do it?"

"Who are you?!" Alexandra jumped.

The crocodile smiled. A wide smile, full of teeth — but not scary. More like an invitation.

"I am the one who comes when everyone is tired of thinking. My name is Crocus."`
        }
      },
      {
        title: { el: "ΠΑΜΕ", en: "LET'S GO" },
        image: "/images/crocus.jpg",
        imageCaption: { el: "«Αποφασίσατε. Φοβάστε να το πείτε δυνατά.»", en: "\"You decided. You're afraid to say it out loud.\"" },
        text: {
          el: `Ο Crocus έκανε δύο βήματα μέσα. Κάθε βήμα σαν τύμπανο. Κοίταξε τα χαρτιά.

«Τι φτιάχνετε;»

Η Ελευθερία πήρε ανάσα. «Λοιπόν, η αρχική ιδέα ήταν να—»

«Τέλειο. ΠΑΜΕ.»

«Περίμενε! Δεν έχουμε αποφασίσει!»

Ο Crocus γέλασε. Ζεστά, σαν μηχανή που παίρνει μπροστά. Έσκυψε και κοίταξε τα τρία παιδιά στα μάτια.

«Αποφασίσατε. Απλώς φοβάστε να το πείτε δυνατά.»

Η WiseBot πλησίασε αργά. «Η σκέψη είναι δύναμη», είπε. «Χωρίς σκέψη, η δράση είναι χαοτική.»

Ο Crocus σταύρωσε τα χέρια. «Κι η απόφαση χωρίς κίνηση είναι θέατρο.»

Δύο κόσμοι. Η μία σταθερή σαν βράχος. Ο άλλος αδύνατον να μείνει ακίνητος. Και τα δύο σωστά.`,
          en: `Crocus took two steps inside. Each step like a drum. He looked at the papers.

"What are you making?"

Eleftheria took a breath. "Well, the original idea was to—"

"Perfect. LET'S GO."

"Wait! We haven't decided!"

Crocus laughed. Warmly, like an engine starting up. He leaned forward and looked all three children in the eyes.

"You decided. You're just afraid to say it out loud."

WiseBot approached slowly. "Thought is power," she said. "Without thought, action is chaotic."

Crocus crossed his arms. "And decision without movement is theater."

Two worlds. One steady as a rock. The other unable to stand still. Both right.`
        }
      },
      {
        title: { el: "Το Πρώτο Βήμα", en: "The First Step" },
        image: "/images/filippos.webp",
        imageCaption: { el: "Δεν ήταν τέλειο. Αλλά υπήρχε.", en: "It wasn't perfect. But it existed." },
        text: {
          el: `Η Αλεξάνδρα κοίταξε τη WiseBot. Ένιωσε ασφαλής. Μετά κοίταξε τον Crocus. Ένιωσε ζωντανή.

«Και οι δύο έχετε δίκιο», είπε. Η φωνή της βγήκε πιο δυνατή απ' ό,τι περίμενε.

«Αν δεν ξεκινήσουμε, δεν θα μάθουμε ποτέ», είπε ο Φίλιππος.

«Αλλά αν ξεκινήσουμε χωρίς να σκεφτούμε, θα χαθούμε», είπε η Ελευθερία.

Ο Crocus χαμογέλασε πλατιά. Αυτή τη φορά με περηφάνια. «Τώρα μιλάτε σωστά.»

Δεν έφτιαξαν κάτι μεγάλο. Ένα απλό κομμάτι. Μια δοκιμή. Ένα πρώτο, τρεμάμενο βήμα σαν μωρό που πατά στο πάτωμα.

Ο Φίλιππος το κράτησε στα χέρια του. «Δεν είναι τέλειο», είπε σιγά.

«Ούτε πρέπει», είπε ο Crocus. «Δεν χρειάζεται να είναι τέλειο. Χρειάζεται να υπάρχει.»`,
          en: `Alexandra looked at WiseBot. She felt safe. Then she looked at Crocus. She felt alive.

"You're both right," she said. Her voice came out louder than she expected.

"If we don't start, we will never learn," said Philippos.

"But if we start without thinking, we'll get lost," said Eleftheria.

Crocus smiled broadly. This time with pride. "Now you are speaking correctly."

They didn't make something big. A simple piece. A test. A first, trembling step like a baby touching the floor.

Philippos held it in his hands. "It's not perfect," he said quietly.

"Nor should it be," said Crocus. "It doesn't need to be perfect. It needs to exist."`
        }
      },
      {
        title: { el: "Η Κατεύθυνση", en: "The Direction" },
        image: "/images/paidia-kai-wisebot.webp",
        imageCaption: { el: "Τώρα μιλάτε σαν δημιουργοί.", en: "Now you talk like creators." },
        text: {
          el: `Κάτι δεν δούλεψε. Ένα κομμάτι ξεκόλλησε. Ένα κύκλωμα δεν έκλεισε.

«Σας τα έλεγα!» πετάχτηκε η Ελευθερία. «Αν είχαμε σκεφτεί λίγο ακόμα—»

«Αν δεν ξεκινούσαμε, δεν θα ξέραμε ΠΟΤΕ πού χαλάει!»

Η Αλεξάνδρα μπήκε ανάμεσά τους. «ΣΤΟΠ. Ξεκινήσαμε. Και μάθαμε. Αυτό αρκεί.»

Η WiseBot, από τη γωνία, έλαμψε. Σαν να πατήθηκε ένα κουμπί. Σαν να ξεκλειδώθηκε κάτι.

Το βράδυ, τα χαρτιά ήταν περισσότερα. Αλλά αυτή τη φορά δεν ήταν πιο καθαρά — ήταν πιο αληθινά. Είχαν λεκέδες, σβησμένα, τρύπες. Είχαν ζωή. Μέσα στο χάος, υπήρχε κατεύθυνση.

Ο Crocus στάθηκε στο κατώφλι. «Τώρα μιλάτε σαν δημιουργοί», είπε.

Και βγήκε. Η πόρτα δεν χτύπησε δυνατά αυτή τη φορά. Έκλεισε σιγά. Σαν υπόσχεση ότι θα ξαναρθεί.`,
          en: `Something didn't work. A piece came unstuck. A circuit didn't close.

"I told you!" Eleftheria jumped up. "If we had thought a little more—"

"If we hadn't started, we would NEVER know where it breaks!"

Alexandra stepped between them. "STOP. We started. And we learned. That is enough."

WiseBot, from the corner, glowed. Like a button was pressed. Like something was unlocked.

That night, the papers were more. But this time they weren't cleaner — they were more real. They had stains, erasures, holes. They had life. Inside the chaos, there was direction.

Crocus stood in the doorway. "Now you talk like creators," he said.

And he left. The door didn't slam this time. It closed softly. Like a promise that he would return.`
        }
      }
    ]
  }
];
