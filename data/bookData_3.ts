
import { Book } from '../types';

// ============================================================
// 📖 BOOK 3: ΧΩΡΙΣ ΣΧΕΔΙΟ, ΧΑΝΕΣΑΙ / WITHOUT A PLAN, YOU GET LOST
// Hero: Pencilo (ο σκαντζόχοιρος)
// Theme: ΣΧΕΔΙΟ / BLUEPRINT
// ============================================================

export const BOOK_3: Book[] = [
  {
    id: 3,
    title: { el: "ΧΩΡΙΣ ΣΧΕΔΙΟ, ΧΑΝΕΣΑΙ", en: "WITHOUT A PLAN, YOU GET LOST" },
    theme: { el: "ΣΧΕΔΙΟ", en: "BLUEPRINT" },
    stepLabel: { el: "PENCILO & ΤΟ ΣΧΕΔΙΟ", en: "PENCILO & THE PLAN" },
    author: "Pencilo",
    cover: "/images/pencilo.jpg",
    videoUrl: "",
    description: {
      el: "Το 'ΠΑΜΕ' του Crocus έφερε χάος. Κάτι έσπασε. Ο Pencilo εμφανίζεται για να δείξει ότι η ταχύτητα χωρίς χάρτη είναι απλώς κούραση.",
      en: "Crocus's 'LET'S GO' brought chaos. Something broke. Pencilo appears to show that speed without a map is just fatigue."
    },
    meaning: {
      el: "Το 'ΠΑΜΕ' είναι δύναμη. Το σχέδιο είναι κατεύθυνση. Χωρίς κατεύθυνση, η δύναμη σε κουράζει.",
      en: "'LET'S GO' is power. The plan is direction. Without direction, power exhausts you."
    },
    xp: 130,
    parentMessage: {
      el: "Η παρόρμηση είναι ενέργεια, αλλά το σχέδιο είναι σεβασμός στον χρόνο. Όταν τα παιδιά μάθουν να σχεδιάζουν απλά — ένα χαρτί, τρεις ερωτήσεις — μαθαίνουν να μη σπαταλούν τον εαυτό τους. Δοκιμάστε σήμερα: πριν ξεκινήσει κάτι καινούργιο, ρωτήστε «Τι φτιάχνεις; Για ποιον; Ποιο είναι το πρώτο βήμα;»",
      en: "Impulse is energy, but a plan is respect for time. When children learn to plan simply — one paper, three questions — they learn not to waste themselves. Try today: before starting something new, ask 'What are you making? For whom? What's the first step?'"
    },

    // ── NEW STRUCTURED PAGES (5 pages) ──────────────────────
    pages: [
      {
        title: { el: "Το ΠΑΜΕ που Έγινε Χάος", en: "The LET'S GO That Became Chaos" },
        image: "/images/ta-3-paidia.webp",
        imageCaption: { el: "Τρεις κεραυνοί χωρίς κατεύθυνση.", en: "Three lightning bolts without direction." },
        text: {
          el: `Ξεκίνησαν με φόρα. Σαν τρεις κεραυνοί που χτύπησαν ταυτόχρονα στο ίδιο σημείο.

Ο Φίλιππος έφτιαχνε — χέρια γρήγορα, μάτια φλεγόμενα. Η Αλεξάνδρα ζωγράφιζε — χρώματα παντού. Η Ελευθερία έγραφε — τρία τετράδια ανοιχτά ταυτόχρονα.

«Όχι έτσι!» — «Περίμενε!» — «Αυτό δεν κολλάει!»

Ο Crocus τους κοιτούσε με χαμόγελο. «ΠΑΜΕ!» φώναξε, σηκώνοντας τη γροθιά. Και φώναξαν κι αυτοί. Γιατί η ενέργεια ήταν μεθυστική. Γιατί νόμιζαν ότι αν τρέχεις αρκετά γρήγορα, δε χρειάζεσαι δρόμο.

Μέχρι που—

ΚΡΑΑΑΚ.

Ένα κομμάτι έσπασε. Το κομμάτι-κλειδί. Αυτό που κρατούσε τα πάντα μαζί.`,
          en: `They started with a rush. Like three lightning bolts striking the same spot at once.

Philippos was building — hands fast, eyes on fire. Alexandra was painting — colors everywhere. Eleftheria was writing — three notebooks open at once.

"Not like that!" — "Wait!" — "This doesn't stick!"

Crocus watched them with a grin. "LET'S GO!" he shouted, raising his fist. And they shouted too. Because the energy was intoxicating. Because they thought that if you run fast enough, you don't need a road.

Until—

CRAAACK.

A piece broke. The key piece. The one that held everything together.`
        }
      },
      {
        title: { el: "Ο Κύκλος που Κουράζει", en: "The Circle That Exhausts" },
        image: "/images/filippos.webp",
        imageCaption: { el: "«ΠΟΥ;» — Η ερώτηση που σταμάτησε τον Crocus.", en: "\"WHERE?\" — The question that stopped Crocus." },
        text: {
          el: `Ο Φίλιππος πάγωσε. Τα μάτια του δεν κοιτούσαν το σπασμένο κομμάτι. Κοιτούσαν τα δικά του χέρια. Αυτός το έκανε.

Προσπάθησαν ξανά. Και ξανά. Κάθε φορά λίγο αλλιώς. Κάθε φορά με λίγο λιγότερη πίστη. Ίδιο αποτέλεσμα.

Δεν δημιουργούσαν. Αντέγραφαν την αποτυχία τους.

Ο Crocus εκνευρίστηκε. «Ρε παιδιά, ΠΑΜΕ είπαμε!»

Η Ελευθερία γύρισε απότομα. Τα μάτια της ήταν κόκκινα από κούραση. Από ώρες χαμένες σε κύκλους.

«ΠΟΥ;»

Σιωπή. Βαριά. Πυκνή. Ο Crocus άνοιξε το στόμα. Το έκλεισε. Για πρώτη φορά, η λέξη «ΠΑΜΕ» δεν ήταν αρκετή.`,
          en: `Philippos froze. His eyes weren't looking at the broken piece. They were looking at his own hands. He did this.

They tried again. And again. Each time a little differently. Each time with less faith. Same result.

They weren't creating. They were copying their own failure.

Crocus got irritated. "Hey guys, we said LET'S GO!"

Eleftheria turned abruptly. Her eyes were red from exhaustion. From hours wasted in circles.

"WHERE?"

Silence. Heavy. Thick. Crocus opened his mouth. Closed it. For the first time, the word "LET'S GO" wasn't enough.`
        }
      },
      {
        title: { el: "Ο Σκαντζόχοιρος", en: "The Hedgehog" },
        image: "/images/paidia-kai-pencilo.webp",
        imageCaption: { el: "Η στιγμή που ο Pencilo κύλησε μέσα στο χάος.", en: "The moment Pencilo rolled into the chaos." },
        text: {
          el: `Ακούστηκε ένας ήχος. Μεταλλικός. Μικρός. Σαν ρουλεμάν σε μάρμαρο.

Κάτι κύλησε κάτω από το τραπέζι. Γρήγορο. Μικρό. Ακριβές.

Ένας σκαντζόχοιρος με ρόλερ στα πόδια. Στην πλάτη του, αντί για αγκάθια: μολύβια σε τέλεια σειρά, χάρακες, μικρά μπλοκάκια δεμένα με κορδέλα. Γυαλιά στρογγυλά σαν ρολόι ακριβείας. Μάτια σχεδόν υπερβολικά ήρεμα.

Σταμάτησε στο κέντρο. Κοίταξε γύρω — σκισμένα χαρτιά, σπασμένα κομμάτια, γραμμές χωρίς τέλος.

«Συγγνώμη. Αλλά αυτό που κάνετε… πονάει.»

Η φωνή του ήταν απαλή. Σαν δάσκαλος που δεν φωνάζει ποτέ — αλλά κάθε λέξη του μένει.

«Και εσύ ποιος είσαι;» ρώτησε ο Crocus.

Ο σκαντζόχοιρος σήκωσε ένα μολύβι από την πλάτη του. Το στριφογύρισε σαν μαέστρος με μπαγκέτα.

«Με λένε Pencilo. Κι ήρθα γιατί ακούω χάος.»`,
          en: `A sound came first. Metallic. Small. Like a bearing on marble.

Something rolled under the table. Fast. Small. Precise.

A hedgehog on roller skates. On his back, instead of spines: pencils in perfect order, rulers, small notepads tied with ribbon. Round glasses like a precision clock. Eyes almost excessively calm.

He stopped in the center. Looked around — torn papers, broken pieces, lines without endings.

"Sorry. But what you're doing… hurts."

His voice was soft. Like a teacher who never shouts — but every word stays.

"And who are you?" asked Crocus.

The hedgehog picked a pencil from his back. He twirled it like a conductor with a baton.

"My name is Pencilo. And I came because I hear chaos."`
        }
      },
      {
        title: { el: "Ο Χάρτης", en: "The Map" },
        image: "/images/pencilo.jpg",
        imageCaption: { el: "Τρία κουτιά. Καθαρά. Απλά. Τέλεια.", en: "Three boxes. Clean. Simple. Perfect." },
        text: {
          el: `Ο Pencilo πήδηξε στο τραπέζι. Τα ρόλερ του άφησαν δύο τέλειες γραμμές στο χαρτί.

«Δεν σας λείπει ενέργεια. Σας λείπει σειρά.»

Πήρε ένα χαρτί. Κρατούσε το μολύβι σαν χειρουργικό νυστέρι. Ζωγράφισε τρία κουτιά:

1. ΤΙ ΦΤΙΑΧΝΟΥΜΕ
2. ΓΙΑ ΠΟΙΟΝ
3. ΠΩΣ ΞΕΚΙΝΑΜΕ

«Χωρίς αυτά, θα κάνετε κύκλους. Πάντα.»

«Δηλαδή θες να κάτσουμε να σχεδιάζουμε;» ρώτησε ο Crocus, σταυρώνοντας τα χέρια.

«Όχι. Θέλω να μην χαλάτε την πράξη.»

Ο Crocus τον κοίταξε. Η περηφάνια του ήταν πληγωμένη. «Η ζωή δεν περιμένει σχέδιο. Η ζωή τρέχει.»

«Και χωρίς σχέδιο, η ζωή σε γυρίζει πίσω.»

Η Αλεξάνδρα μπήκε ανάμεσά τους. «ΣΤΟΠ. Μας μάθατε να ξεκινάμε. Τώρα πρέπει να μάθουμε πού πάμε.»`,
          en: `Pencilo jumped on the table. His skates left two perfect lines on the paper.

"You don't lack energy. You lack order."

He took a sheet of paper. He held the pencil like a surgical scalpel. He drew three boxes:

1. WHAT WE MAKE
2. FOR WHOM
3. HOW WE START

"Without these, you'll run in circles. Always."

"So you want us to sit and plan?" asked Crocus, crossing his arms.

"No. I want you not to waste the action."

Crocus looked at him. His pride was wounded. "Life doesn't wait for a plan. Life runs."

"And without a plan, life sends you back."

Alexandra stepped between them. "STOP. You taught us to start. Now we need to learn where we're going."`
        }
      },
      {
        title: { el: "Η Πρώτη Ησυχία", en: "The First Silence" },
        image: "/images/eleftheria.webp",
        imageCaption: { el: "Δεν έτρεχαν πια. Προχωρούσαν.", en: "They weren't running anymore. They were advancing." },
        text: {
          el: `Δεν έφτιαξαν τέλειο πλάνο. Ο Pencilo τους είπε: «Ένα σχέδιο που βγαίνει σε δέκα λεπτά αξίζει περισσότερο από ένα τέλειο που δεν βγαίνει ποτέ.»

Ένα χαρτί. Λίγες γραμμές. Ένα βέλος που δείχνει μπροστά.

Ο Φίλιππος κοίταξε τα χέρια του — τα ίδια χέρια που πριν έσπασαν. «Ξέρω τι κάνω τώρα.» Η φωνή του δεν ήταν δυνατή. Ήταν σταθερή.

Ο Crocus κοίταξε το σχέδιο. Αναστέναξε βαθιά — ένα αναστέναγμα γεμάτο σεβασμό. «Οκ. Πάμε… αλλά με χάρτη.»

Για πρώτη φορά, το δωμάτιο ησύχασε. Όχι επειδή σταμάτησαν. Αλλά επειδή ήξεραν τι κάνουν.

Η Ελευθερία κοίταξε τις σημειώσεις της — ταξινομημένες, αριθμημένες, με βέλη που οδηγούσαν κάπου. Ένιωσε κάτι ζεστό στο στήθος. Τάξη.

Δεν έτρεχαν πια. Προχωρούσαν.`,
          en: `They didn't make a perfect plan. Pencilo told them: "A plan made in ten minutes is worth more than a perfect one that never gets made."

One paper. A few lines. An arrow pointing forward.

Philippos looked at his hands — the same hands that broke things before. "I know what I'm doing now." His voice wasn't loud. It was steady.

Crocus looked at the plan. He sighed deeply — a sigh full of respect. "Ok. Let's go… but with a map."

For the first time, the room fell quiet. Not because they stopped. But because they knew what they were doing.

Eleftheria looked at her notes — organized, numbered, with arrows that led somewhere. She felt something warm in her chest. Order.

They weren't running anymore. They were advancing.`
        }
      }
    ]
  }
];
