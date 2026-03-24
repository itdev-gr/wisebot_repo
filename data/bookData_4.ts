
import { Book } from '../types';

// ============================================================
// 📖 BOOK 4: ΤΟ ΣΧΕΔΙΟ ΠΟΥ ΔΕΝ ΔΟΥΛΕΥΕ / THE PLAN THAT DIDN'T WORK
// Hero: Link (το ποντίκι)
// Theme: ΥΛΟΠΟΙΗΣΗ / IMPLEMENTATION
// ============================================================

export const BOOK_4: Book[] = [
  {
    id: 4,
    title: { el: "ΤΟ ΣΧΕΔΙΟ ΠΟΥ ΔΕΝ ΔΟΥΛΕΥΕ", en: "THE PLAN THAT DIDN'T WORK" },
    theme: { el: "ΥΛΟΠΟΙΗΣΗ", en: "IMPLEMENTATION" },
    stepLabel: { el: "LINK & Η ΥΛΟΠΟΙΗΣΗ", en: "LINK & REALITY" },
    author: "Link",
    cover: "/images/link.jpg",
    videoUrl: "",
    description: {
      el: "Το σχέδιο ήταν τέλειο, αλλά αδύνατο. Η Link εμφανίζεται για να κάνει την ερώτηση που πονάει: «Ωραία όλα αυτά... αλλά με τι θα τα φτιάξετε;»",
      en: "The plan was perfect, but impossible. Link appears to ask the painful question: \"Nice... but what will you build it with?\""
    },
    meaning: {
      el: "Το σχέδιο που δεν γίνεται δεν σε πάει μπροστά. Το απλό που δουλεύει σε μαθαίνει τα πάντα.",
      en: "A plan that can't happen doesn't move you forward. A simple one that works teaches you everything."
    },
    xp: 140,
    parentMessage: {
      el: "Η φαντασία χωρίς όρια απογοητεύει. Η φαντασία με πράξη χτίζει αυτοπεποίθηση. Όταν τα παιδιά μάθουν να απλοποιούν — να σβήνουν τα περιττά — μαθαίνουν να φέρνουν τα όνειρα στη ζωή. Δοκιμάστε: όταν το παιδί πει «θέλω να φτιάξω κάτι», ρωτήστε «Τι μπορούμε να φτιάξουμε σήμερα με ό,τι έχουμε;»",
      en: "Imagination without limits disappoints. Imagination with action builds confidence. When children learn to simplify — to erase the unnecessary — they learn to bring dreams to life. Try: when your child says 'I want to build something', ask 'What can we build today with what we have?'"
    },

    // ── NEW STRUCTURED PAGES (5 pages) ──────────────────────
    pages: [
      {
        title: { el: "Το Τέλειο Σχέδιο", en: "The Perfect Plan" },
        image: "/images/ta-3-paidia.webp",
        imageCaption: { el: "Ένα σχέδιο τέλειο... σε κόσμο που δεν υπάρχει.", en: "A plan perfect... in a world that doesn't exist." },
        text: {
          el: `Το σχέδιο ήταν ωραίο. Όχι απλώς ωραίο. Ήταν τέλειο.

Γραμμές ίσιες σαν σιδηρόδρομος. Κουτιά τακτοποιημένα σαν μωσαϊκό. Βέλη που έδειχναν παντού — κάθε ένα με ετικέτα, κάθε ένα με σκοπό.

Ο Pencilo καμάρωνε. «Αν το ακολουθήσουμε βήμα-βήμα, θα δουλέψει. Εγγύηση.»

Ξεκίνησαν. Και για λίγο — όλα πήγαιναν καλά. Κάθε κομμάτι έπεφτε στη θέση του σαν παζλ.

Μέχρι που ο Φίλιππος σταμάτησε. Κοίταξε το σχέδιο. Κοίταξε τα υλικά. Ξανακοίταξε.

«Εεε… αυτό δεν το έχουμε.»

«Χρειαζόμαστε αυτό το μοτέρ», είπε η Ελευθερία. «Αλλά… δεν υπάρχει. Πουθενά.»

Σιωπή. Το τέλειο σχέδιο στεκόταν εκεί, ωραίο κι αβοήθητο — σαν χάρτης για χώρα που δεν υπάρχει.`,
          en: `The plan was nice. Not just nice. It was perfect.

Lines straight as a railroad. Boxes arranged like a mosaic. Arrows pointing everywhere — each with a label, each with a purpose.

Pencilo beamed with pride. "If we follow it step by step, it'll work. Guaranteed."

They started. And for a while — all good. Every piece fell into place like a puzzle.

Until Philippos stopped. He looked at the plan. Looked at the materials. Looked back.

"Umm… we don't have this."

"We need this motor," said Eleftheria. "But… it doesn't exist. Anywhere."

Silence. The perfect plan stood there, beautiful and helpless — like a map to a country that doesn't exist.`
        }
      },
      {
        title: { el: "Το Ποντίκι", en: "The Mouse" },
        image: "/images/paidia-kai-link.webp",
        imageCaption: { el: "Η Link έκανε την ερώτηση που κανείς δεν ήθελε.", en: "Link asked the question nobody wanted to hear." },
        text: {
          el: `Άρχισαν να μετράνε. Χρόνο — δεν φτάνει. Υλικά — λείπουν τα μισά. Κάθε μέτρημα ένα μικρό τσίμπημα.

Ένα μικρό «κλικ» ακούστηκε. Σαν κλικ ποντικιού υπολογιστή. Αλλά δεν ήταν.

Ένα ποντίκι στάθηκε στο τραπέζι. Μικρό. Γκρίζο-ασημί, σαν φτιαγμένο από κασσίτερο κι αστερόσκονη. Σακίδιο γεμάτο καλώδια και εργαλεία. Η ουρά της κατέληγε σε USB — λαμπερή, σαν κλειδί σε ψηφιακό κόσμο.

Τα μάτια της ήταν μεγάλα, ζεστά. Αλλά πίσω τους κρυβόταν ακρίβεια. Η ικανότητα να δει αυτό που οι άλλοι δεν θέλουν να δουν.

«Να ρωτήσω κάτι; Αυτό… ποιος θα το φτιάξει;»

«Εμείς», απάντησε ο Crocus αμέσως.

Η Link χαμογέλασε. Ένα χαμόγελο μικρό, γεμάτο αλήθεια.

«Με τι;»

Δύο λέξεις. Κι αυτές οι δύο λέξεις έπεσαν πάνω στο τέλειο σχέδιο σαν σταγόνα σε χαρτί.`,
          en: `They started counting. Time — not enough. Materials — half missing. Each count a tiny sting.

A small "click" was heard. Like a computer mouse click. But it wasn't.

A mouse stood on the table. Small. Silver-grey, as if made of tin and stardust. Backpack full of cables and tools. Her tail ended in a USB — shiny, like a key to a digital world.

Her eyes were large, warm. But behind them hid precision. The ability to see what others don't want to see.

"Can I ask something? This… who will build it?"

"Us," answered Crocus immediately.

Link smiled. A small smile, full of truth.

"With what?"

Two words. And those two words fell on the perfect plan like a drop on paper.`
        }
      },
      {
        title: { el: "Όνειρο ή Σχέδιο;", en: "Dream or Plan?" },
        image: "/images/link.jpg",
        imageCaption: { el: "«Σωστό για ποιον; Για σένα… ή για τον πραγματικό κόσμο;»", en: "\"Correct for whom? For you… or for the real world?\"" },
        text: {
          el: `Η Link πλησίασε το σχέδιο. Η ουρά-USB σταμάτησε σε σημεία σαν νυστέρι σε ακτινογραφία.

«Εδώ θέλετε πράγμα που δεν υπάρχει.»
«Εδώ θέλετε μηχάνημα που δεν έχετε.»
«Κι εδώ… τεχνολογία 2050.»

«Το σχέδιο είναι σωστό», είπε ο Pencilo. Τα μολύβια στην πλάτη του τρίζαν.

«Σωστό για ποιον; Για σένα… ή για τον πραγματικό κόσμο;»

«Χωρίς όραμα δεν πας μπροστά!» φώναξε ο Pencilo.

«Χωρίς πραγματικότητα δεν πας πουθενά!» απάντησε η Link.

Η WiseBot εμφανίστηκε. Αθόρυβα. Σαν φεγγάρι πίσω από σύννεφα.

«Αν δεν μπορείτε να το φτιάξετε σήμερα, δεν είναι σχέδιο. Είναι όνειρο.»

Ο Pencilo κατέβασε το βλέμμα. Μέσα του, κάτι ράγισε. Όχι σπάσιμο — αλλαγή. Η ρωγμή που αφήνει το φως να μπει.`,
          en: `Link approached the plan. Her USB-tail stopped at spots like a scalpel on an X-ray.

"Here you want something that doesn't exist."
"Here you want a machine you don't have."
"And here… 2050 technology."

"The plan is correct," said Pencilo. The pencils on his back creaked.

"Correct for whom? For you… or for the real world?"

"Without vision you can't move forward!" cried Pencilo.

"Without reality you go nowhere!" replied Link.

WiseBot appeared. Silently. Like a moon behind clouds.

"If you can't build it today, it's not a plan. It's a dream."

Pencilo lowered his gaze. Inside him, something cracked. Not a break — a change. The crack that lets light in.`
        }
      },
      {
        title: { el: "Το Σβήσιμο", en: "The Erasing" },
        image: "/images/pencilo.jpg",
        imageCaption: { el: "Η δύναμη δεν είναι να προσθέτεις. Είναι να αφαιρείς.", en: "Strength isn't adding more. It's removing." },
        text: {
          el: `Η Link πήρε ένα μολύβι. Ακούμπησε τη γόμα στο σχέδιο. Και… έσβησε.

Όχι όλο. Τα περιττά. Τα αδύνατα. Τα «θα ήταν ωραία». Τα «ίσως κάποτε».

Κάθε κίνηση της γόμας, μια ερώτηση:

«Αυτό γίνεται;»
«Αυτό το έχουμε;»
«Αυτό το χρειαζόμαστε τώρα;»

Το σχέδιο μίκρυνε. Γραμμές σβήστηκαν. Έγινε μικρό, αδέξιο. Αλλά άρχισε να αναπνέει.

Ο Φίλιππος κοίταξε αυτό που έμεινε. Λίγα κουτιά. Λίγα βέλη. Τίποτα εντυπωσιακό. Κι όμως — χαμογέλασε.

«Αυτό μπορώ να το φτιάξω.»

Ο Pencilo κοίταξε το νέο σχέδιο. Δεν ήταν κομψό. Δεν ήταν τέλειο. Αλλά δούλευε.

«Το όμορφο μπορεί να περιμένει», είπε τελικά. Η φωνή του τρεμόπαιξε — σαν κάποιος που παραδέχεται κάτι για πρώτη φορά.`,
          en: `Link picked up a pencil. Pressed the eraser on the plan. And… erased.

Not everything. The unnecessary. The impossible. The "it would be nice." The "maybe someday."

Each eraser stroke, a question:

"Is this possible?"
"Do we have this?"
"Do we need this now?"

The plan shrank. Lines erased. It became small, clumsy. But it started to breathe.

Philippos looked at what remained. Few boxes. Few arrows. Nothing impressive. And yet — he smiled.

"This I can build."

Pencilo looked at the new plan. It wasn't elegant. It wasn't perfect. But it worked.

"Beautiful can wait," he finally said. His voice trembled — like someone admitting something for the first time.`
        }
      },
      {
        title: { el: "Η Αίσθηση του Πραγματικού", en: "The Sense of Reality" },
        image: "/images/alexandra.webp",
        imageCaption: { el: "Κάτι μικρό, ατελές — αλλά αληθινό.", en: "Something small, imperfect — but real." },
        text: {
          el: `Έφτιαξαν κάτι.

Μικρό. Ατελές. Στραβό σε μια γωνία. Με κόλλα που φαινόταν. Με κλωστή που κρεμόταν.

Αλλά υπήρχε.

Το κράτησαν στα χέρια τους. Η Αλεξάνδρα πρώτη — τα δάχτυλά της τρέμαν ελαφρά. Μετά ο Φίλιππος — τα μάτια του ήταν γεμάτα. Μετά η Ελευθερία — χαμογέλασε σιωπηλά, σαν κάποια που ήξερε εξαρχής ότι αυτό ήθελαν.

Η WiseBot πλησίασε. Το φως της ήταν ζεστό — σαν ήλιος σε πρωινό παράθυρο.

«Τώρα μπήκατε στον κόσμο της δημιουργίας. Γιατί δημιουργία δεν είναι αυτό που φαντάζεσαι. Είναι αυτό που φτιάχνεις.»

Η Link έγνεψε. Τα μεγάλα μάτια της έλαμψαν ήρεμα.

«Το αληθινό δεν περιμένει.»

Ένα ατελές πράγμα στα χέρια σου αξίζει χίλια τέλεια στο μυαλό σου.`,
          en: `They made something.

Small. Imperfect. Crooked in one corner. With glue that showed. With string that dangled.

But it existed.

They held it in their hands. Alexandra first — her fingers trembled slightly. Then Philippos — his eyes were full. Then Eleftheria — she smiled silently, like someone who knew all along this was what they needed.

WiseBot approached. Her light was warm — like sun in a morning window.

"Now you've entered the world of creation. Because creation isn't what you imagine. It's what you build."

Link nodded. Her large eyes gleamed calmly.

"Real doesn't wait."

An imperfect thing in your hands is worth a thousand perfect ones in your mind.`
        }
      }
    ]
  }
];
