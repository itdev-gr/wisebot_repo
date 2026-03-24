
import { Book } from '../types';

// ============================================================
// 📖 BOOK 1: ΚΑΤΙ ΓΕΝΝΙΕΤΑΙ / SOMETHING IS BORN
// Hero: WiseBot (η κουκουβάγια)
// Theme: ΑΡΧΗ / THE START
// ============================================================

export const BOOK_1: Book[] = [
  {
    id: 1,
    title: { el: "ΚΑΤΙ ΓΕΝΝΙΕΤΑΙ", en: "SOMETHING IS BORN" },
    theme: { el: "ΑΡΧΗ", en: "THE START" },
    stepLabel: { el: "WISEBOT & ΣΟΦΙΑ", en: "WISEBOT & WISDOM" },
    author: "Wisebot",
    cover: "/images/wisebot.jpg",
    videoUrl: "",
    description: {
      el: "Όλα ξεκινούν με βαρεμάρα και νεύρα. Μέχρι που εμφανίζεται η WiseBot και κάνει την ερώτηση που τα αλλάζει όλα.",
      en: "It all starts with boredom and frustration. Until WiseBot appears and asks the question that changes everything."
    },
    meaning: {
      el: "Κάθε μεγάλο πράγμα ξεκινά τη μέρα που παραδέχεσαι: «Έτσι όπως είναι, δεν μου φτάνει.»",
      en: "Every great thing starts the day you admit: 'The way things are is not enough.'"
    },
    xp: 100,
    parentMessage: {
      el: "Όταν ένα παιδί λέει «βαριέμαι», στην πραγματικότητα λέει «ψάχνω πρόκληση που αξίζει τον χρόνο μου». Η WiseBot δεν τους είπε τι να κάνουν — τους έκανε μια ερώτηση. Δοκιμάστε σήμερα: αντί να πείτε «κάνε κάτι», ρωτήστε «αν μπορούσες να φτιάξεις οτιδήποτε, τι θα ήταν;»",
      en: "When a child says 'I'm bored', they are actually saying 'I'm looking for a challenge worth my time'. WiseBot didn't tell them what to do — she asked a question. Try today: instead of saying 'go do something', ask 'if you could build anything at all, what would it be?'"
    },

    // ── NEW STRUCTURED PAGES (5 pages) ──────────────────────
    pages: [
      {
        title: { el: "Η Βαρεμάρα", en: "The Boredom" },
        image: "/images/ta-3-paidia.webp",
        imageCaption: { el: "Τρία παιδιά. Μηδέν κίνητρο.", en: "Three kids. Zero motivation." },
        text: {
          el: `Τικ. Τοκ. Τικ. Τοκ.

Η Αλεξάνδρα ήταν ξαπλωμένη στο πάτωμα, μπροστά σε ένα μισοτελειωμένο παζλ. Δεν το κοιτούσε καν. Κοιτούσε το ταβάνι. Μετρούσε τις ρωγμές — δεκατρείς.

«Τελείωσες;» φώναξε ο Φίλιππος από το σαλόνι.

«Ναι!» είπε γρήγορα.

Ψέμα. Δεν το είχε ακουμπήσει ούτε μία φορά. Αλλά τα ψέματα βγαίνουν εύκολα όταν κανείς δεν νοιάζεται αρκετά να ελέγξει.

Κάθε μέρα ήταν η ίδια. Σχολείο, σπίτι, βαρεμάρα. Σαν να ζούσε μέσα σε μια γκρίζα φυσαλίδα. Τίποτα ενδιαφέρον. Τίποτα σημαντικό.

Η Αλεξάνδρα δεν ήξερε ακόμα ότι η βαρεμάρα δεν ήταν το πρόβλημα. Ήταν το σήμα.`,
          en: `Tick. Tock. Tick. Tock.

Alexandra lay on the floor, in front of a half-finished puzzle. She wasn't even looking at it. She was staring at the ceiling. Counting the cracks — thirteen.

"Did you finish?" shouted Philippos from the living room.

"Yes!" she said quickly.

A lie. She hadn't touched it once. But lies come easy when no one cares enough to check.

Every day was the same. School, home, boredom. Like living inside a grey bubble. Nothing interesting. Nothing important.

Alexandra didn't know yet that boredom wasn't the problem. It was the signal.`
        }
      },
      {
        title: { el: "Τα Νεύρα & Τα Βιβλία", en: "The Nerves & The Books" },
        image: "/images/filippos.webp",
        imageCaption: { el: "Ο Φίλιππος και η Ελευθερία", en: "Philippos and Eleftheria" },
        text: {
          el: `Στο διπλανό δωμάτιο, ο Φίλιππος χτυπούσε τα χέρια πάνω σε πλαστικά κομμάτια. Προσπαθούσε να φτιάξει κάτι — κάτι που είδε σε βίντεο. «Εύκολο», είχε πει ο τύπος στο YouTube.

«ΑΧΧΧ!» Το πέταξε στον τοίχο. ΚΡΑΚ. Δύο κομμάτια τώρα.

«ΧΑΛΑΣ ΤΟΝ ΧΡΟΝΟ ΜΟΥ!» φώναξε στο πουθενά. Αλλά η αλήθεια ήταν ότι ο χρόνος του δεν χαλούσε — έφευγε, σιγά σιγά, χωρίς να τον ρωτήσει.

Στη γωνία, η Ελευθερία καθόταν σταυροπόδι, περικυκλωμένη από βιβλία. Ήταν το 450ό. Ήξερε πώς δουλεύει ένα ρομπότ, πώς χτίζεται ένα σπίτι, πώς φτιάχνεται ένα κύκλωμα.

«Δεν γίνεται έτσι», είπε ήρεμα στον Φίλιππο.

«Εσύ ξέρεις μόνο να διαβάζεις!» απάντησε εκείνος.

Η Ελευθερία δεν μίλησε. Είχε δίκιο. Ήξερε τα πάντα — αλλά δεν είχε φτιάξει τίποτα. Ποτέ.`,
          en: `In the next room, Philippos was slamming his hands on plastic parts. He was trying to build something — something he'd seen in a video. "Easy," the guy on YouTube had said.

"ARGH!" He threw it at the wall. CRACK. Two pieces now.

"YOU'RE WASTING MY TIME!" he yelled at nothing. But the truth was his time wasn't being wasted — it was slipping away, slowly, without asking permission.

In the corner, Eleftheria sat cross-legged, surrounded by books. It was her 450th. She knew how a robot works, how to build a house, how to wire a circuit.

"That's not how it works," she said calmly to Philippos.

"You only know how to read!" he snapped back.

Eleftheria didn't speak. He was right. She knew everything — but she had never built anything. Ever.`
        }
      },
      {
        title: { el: "Η Κουκουβάγια", en: "The Owl" },
        image: "/images/paidia-kai-wisebot.webp",
        imageCaption: { el: "Η στιγμή που η WiseBot εμφανίστηκε", en: "The moment WiseBot appeared" },
        text: {
          el: `Κανείς δεν κατάλαβε πότε ακριβώς συνέβη.

Ο αέρας στο δωμάτιο άλλαξε. Έγινε πιο βαρύς. Πιο ζεστός. Σαν να μπήκε κάποιος αόρατος.

Η Αλεξάνδρα σήκωσε το κεφάλι πρώτη. Στο παράθυρο — ανάμεσα στις σκιές — κάτι λαμπύριζε.

Μια μεταλλική κουκουβάγια. Μικρή. Κομψή. Τα μάτια της — δύο μωβ κρύσταλλοι — χτυπούσαν απαλά, σαν καρδιά.

«Ωραία παρέα», είπε. Η φωνή της ήταν ήρεμη, σαν νερό πάνω σε πέτρες.

«Ένας που σπάει ό,τι αγγίζει...» — κοίταξε τον Φίλιππο.
«Μία που λέει ψέματα στον εαυτό της...» — γύρισε στην Αλεξάνδρα.
«Και μία που ξέρει τα πάντα αλλά ζει μέσα σε σελίδες...» — κοίταξε την Ελευθερία.

«Ποια... ποια είσαι;»

«Με λένε WiseBot. Και ήρθα γιατί βαριέστε.»`,
          en: `No one noticed exactly when it happened.

The air in the room shifted. It became heavier. Warmer. As if someone invisible had walked in.

Alexandra raised her head first. In the window — between the shadows — something shimmered.

A metallic owl. Small. Elegant. Her eyes — two purple crystals — pulsed softly, like a heartbeat.

"Nice company," she said. Her voice was calm, like water running over stones.

"One who breaks everything he touches..." — she looked at Philippos.
"One who lies even to herself..." — she turned to Alexandra.
"And one who knows everything but lives inside pages..." — she looked at Eleftheria.

"Who... who are you?"

"I am WiseBot. And I came because you are bored."`
        }
      },
      {
        title: { el: "Η Ερώτηση", en: "The Question" },
        image: "/images/wisebot.jpg",
        imageCaption: { el: "Η ερώτηση που τα άλλαξε όλα", en: "The question that changed everything" },
        text: {
          el: `Η WiseBot δεν μπήκε μέσα. Πέταξε. Αθόρυβα, σαν σκιά με φτερά. Κάθισε στη μέση του τραπεζιού, ανάμεσα στα σπασμένα κομμάτια και τα ξεχασμένα βιβλία.

Δεν τους μάλωσε. Δεν τους κοίταξε αυστηρά. Απλά τους είδε. Πραγματικά. Και αυτό ήταν αρκετό — γιατί κανείς δεν τους είχε κοιτάξει πραγματικά εδώ και πολύ καιρό.

Τα μάτια της έλαμψαν πιο δυνατά. Μωβ φως γέμισε τις σκιές.

«Αν δεν φοβόσασταν ότι θα αποτύχετε... τι θα φτιάχνατε ΣΗΜΕΡΑ;»

Η ερώτηση έμεινε στον αέρα. Βαριά. Ζωντανή. Σαν κάτι που χτυπάει στην πόρτα και δεν φεύγει.

Ο Φίλιππος ένιωσε ένα τσίμπημα στο στήθος. Η Αλεξάνδρα ένιωσε τα μάτια της να καίνε. Η Ελευθερία — για πρώτη φορά — έκλεισε το βιβλίο.

Κάποιες ερωτήσεις δεν θέλουν απάντηση αμέσως. Θέλουν να μπουν μέσα σου. Να κάτσουν εκεί. Να σε αλλάξουν πριν καν μιλήσεις.`,
          en: `WiseBot didn't walk in. She flew. Silently, like a shadow with wings. She landed in the middle of the table, between the broken pieces and forgotten books.

She didn't scold them. She didn't look stern. She simply saw them. Truly. And that was enough — because no one had truly looked at them in a very long time.

Her eyes glowed brighter. Purple light filled the room's shadows.

"If you weren't afraid of failing... what would you make TODAY?"

The question hung in the air. Heavy. Alive. Like something knocking on a door that won't leave.

Philippos felt a sting in his chest. Alexandra felt her eyes burn. Eleftheria — for the first time — closed her book.

Some questions don't need an immediate answer. They need to enter you. To sit there. To change you before you even speak.`
        }
      },
      {
        title: { el: "Η Σπίθα", en: "The Spark" },
        image: "/images/paidia-wisebot-2.webp",
        imageCaption: { el: "Η σπίθα άναψε. Το ταξίδι ξεκίνησε.", en: "The spark ignited. The journey began." },
        text: {
          el: `Πέρασαν λεπτά. Ίσως περισσότερα. Κανείς δεν μέτρησε.

Ο Φίλιππος κοίταξε τα σπασμένα κομμάτια στο πάτωμα. Αυτή τη φορά δεν θύμωσε. Τα κοίταξε σαν να τα έβλεπε για πρώτη φορά.

«Ένα ρομπότ», ψιθύρισε. Τόσο σιγά που μόλις ακούστηκε.

Η Αλεξάνδρα σήκωσε αργά το κεφάλι. Τα μάτια της γυάλιζαν — όχι από δάκρυα. Από κάτι άλλο.

«Που να πετάει», είπε.

Η Ελευθερία κοίταξε τα χέρια της. Τα χέρια που μόνο γύριζαν σελίδες. Τα έσφιξε. Τα άνοιξε ξανά.

«Και να μιλάει.»

Η WiseBot δεν χαμογέλασε — δεν είχε στόμα. Αλλά τα μάτια της έγιναν πιο φωτεινά. Πιο ζεστά. Σαν ήλιος που ανατέλλει.

«Τότε ξεκινάμε.»

Τρεις λέξεις. Τρία παιδιά. Μία σπίθα. Αυτό ήταν αρκετό. Γιατί η δημιουργία δεν ξεκινά με υλικά ή σχέδια. Ξεκινά με μια σπίθα — και τρία «ΝΑΙ» που κανείς δεν περίμενε.`,
          en: `Minutes passed. Perhaps more. No one counted.

Philippos looked at the broken pieces on the floor. This time he didn't get angry. He looked at them as if seeing them for the first time.

"A robot," he whispered. So quietly it was barely heard.

Alexandra slowly raised her head. Her eyes were glistening — not from tears. From something else.

"That flies," she said.

Eleftheria looked at her hands. The hands that only ever turned pages. She clenched them. Opened them again.

"And speaks."

WiseBot didn't smile — she had no mouth. But her eyes grew brighter. Warmer. Like a sun rising slowly.

"Then let's begin."

Three words. Three children. One spark. That was enough. Because creation doesn't start with materials or plans. It starts with a spark — and three "YES"es that no one expected.`
        }
      }
    ]
  }
];
