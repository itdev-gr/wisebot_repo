
import { Book } from '../types';

// ============================================================
// BOOK 12: ΤΟ ΚΑΝΩ ΚΑΙ ΑΣ ΦΟΒΑΜΑΙ / I DO IT EVEN IF I'M SCARED
// Heroes: WiseBot & Crocus (ο κροκόδειλος)
// Theme: ΘΑΡΡΟΣ / COURAGE
// ============================================================

export const BOOK_12: Book[] = [
  {
    id: 12,
    title: { el: "ΤΟ ΚΑΝΩ ΚΑΙ ΑΣ ΦΟΒΑΜΑΙ", en: "I DO IT EVEN IF I'M SCARED" },
    theme: { el: "ΘΑΡΡΟΣ", en: "COURAGE" },
    stepLabel: { el: "WISEBOT & ΤΟ ΘΑΡΡΟΣ", en: "WISEBOT & COURAGE" },
    author: "Wisebot & Crocus",
    cover: "/images/crocus.jpg",
    videoUrl: "",
    description: {
      el: "Ένα μήνυμα αλλάζει τα πάντα. Πρέπει να παρουσιάσουν το project τους μπροστά σε κόσμο. Ο φόβος παγώνει τα πάντα — αλλά ο Crocus τους δείχνει ότι το θάρρος δεν είναι απουσία φόβου.",
      en: "A message changes everything. They must present their project in front of people. Fear freezes everything — but Crocus shows them that courage is not the absence of fear."
    },
    meaning: {
      el: "Το θάρρος δεν είναι απουσία φόβου. Είναι κίνηση παρά τον φόβο.",
      en: "Courage is not the absence of fear. It is movement despite fear."
    },
    xp: 220,
    parentMessage: {
      el: "Όταν ένα παιδί λέει «φοβάμαι», στην πραγματικότητα λέει «αυτό που πρόκειται να κάνω είναι σημαντικό για μένα». Δεν χρειάζεται να τους διώξουμε τον φόβο. Χρειάζεται να τους μάθουμε να προχωρούν μαζί του. Δοκιμάστε σήμερα: αντί να πείτε «μην φοβάσαι», πείτε «είναι ΟΚ να φοβάσαι. Σημαίνει ότι σου αξίζει. Πάμε μαζί.»",
      en: "When a child says 'I'm scared', they are actually saying 'what I'm about to do matters to me'. We don't need to chase away their fear. We need to teach them to move forward with it. Try today: instead of saying 'don't be afraid', say 'it's OK to be afraid. It means it matters to you. Let's go together.'"
    },

    pages: [
      {
        title: { el: "Το Μήνυμα", en: "The Message" },
        image: "/images/ta-3-paidia.webp",
        imageCaption: { el: "Ένα μήνυμα. Τρεις καρδιές που πάγωσαν.", en: "One message. Three hearts that froze." },
        text: {
          el: `Το μήνυμα ήρθε απρόσμενα. Σαν κεραυνός σε καθαρό ουρανό.

Η Αλεξάνδρα το διάβασε πρώτη. Τα μάτια της σάρωσαν τις λέξεις — αργά, προσεκτικά, σαν να ήλπιζε ότι κάποια θα εξαφανιζόταν αν τις κοιτούσε αρκετά. «Θέλουμε να παρουσιάσετε το project σας. Μπροστά σε κόσμο. Αύριο.»

Διάβασε ξανά. Οι λέξεις δεν εξαφανίστηκαν. Αντίθετα — μεγάλωσαν. Γέμισαν το δωμάτιο σαν καπνός.

«Δεν είμαστε έτοιμοι», είπε αμέσως. Η φωνή της ήταν σταθερή, αλλά τα χέρια της έτρεμαν πάνω στο τηλέφωνο.

Ο Φίλιππος χαμογέλασε νευρικά. Ένα χαμόγελο που δεν έφτασε ποτέ στα μάτια του. «Μπροστά σε κόσμο;» Η φωνή του ακούστηκε πιο αδύναμη απ' ό,τι ήθελε.

Η Ελευθερία δεν μίλησε. Ένιωσε κάτι στο στομάχι — ένα σφίξιμο βαθύ, σαν κόμπος που δεν λύνεται. Κοίταξε τις σημειώσεις της. Κάθε λέξη που είχε γράψει φάνηκε ξαφνικά μικρή. Ανεπαρκής. Γελοία.

Ο Crocus πετάχτηκε ανάμεσά τους. «ΠΑΜΕ!» φώναξε χαρούμενα.

Κανείς δεν απάντησε. Η σιωπή που ακολούθησε μιλούσε πιο δυνατά από κάθε λέξη. Και αυτό που έλεγε ήταν ένα: φόβος.`,
          en: `The message came unexpectedly. Like lightning in a clear sky.

Alexandra read it first. Her eyes scanned the words — slowly, carefully, as if hoping some would disappear if she stared long enough. "We want you to present your project. In front of people. Tomorrow."

She read it again. The words didn't vanish. Instead — they grew. They filled the room like smoke.

"We're not ready," she said immediately. Her voice was steady, but her hands were trembling on the phone.

Philippos smiled nervously. A smile that never reached his eyes. "In front of people?" His voice sounded weaker than he intended.

Eleftheria didn't speak. She felt something in her stomach — a deep tightening, like a knot that won't come undone. She looked at her notes. Every word she had written suddenly seemed small. Inadequate. Ridiculous.

Crocus leaped between them. "LET'S GO!" he shouted happily.

No one answered. The silence that followed spoke louder than any word. And what it said was one thing: fear.`
        }
      },
      {
        title: { el: "Ο Φόβος", en: "The Fear" },
        image: "/images/filippos.webp",
        imageCaption: { el: "«Φοβάμαι.» Δύο λέξεις. Τόσο βαριές.", en: "\"I'm scared.\" Two words. So heavy." },
        text: {
          el: `Αυτή τη φορά ο φόβος δεν ήρθε σαν τέρας. Δεν ήρθε σαν σκιά στο σκοτάδι. Ήρθε ντυμένος λογική — ήρεμος, πειστικός, σχεδόν φιλικός.

«Κι αν ξεχάσω τα πάντα;» η Ελευθερία κοίταξε τα χέρια της. Τα ίδια χέρια που είχαν γράψει τόσα — τώρα κρέμονταν άχρηστα στα πλάγια της.

«Κι αν γελάσουν;» η Αλεξάνδρα ένιωσε τα μάτια της να καίνε.

Ο Φίλιππος προσπάθησε να ελέγξει τον μηχανισμό μια τελευταία φορά. Τα δάχτυλά του γλίστρησαν. Λάθη αρχαρίου. Σαν να είχε ξεχάσει τα πάντα.

Κανείς δεν μίλησε για λεπτά. Κάθε σκέψη ήταν ένας τοίχος. Κάθε αμφιβολία μια πόρτα κλειστή.

Και τότε ο Φίλιππος είπε κάτι που δεν περίμενε κανείς. Ούτε ο ίδιος.

«Φοβάμαι.»

Δύο λέξεις. Τόσο μικρές. Τόσο βαριές. Αλλά αυτή τη φορά τις είπε. Δεν τις έκρυψε πίσω από θυμό ή αδιαφορία. Τις άφησε να πέσουν στη μέση του δωματίου, γυμνές και αληθινές.

Η Αλεξάνδρα τον κοίταξε. Η Ελευθερία τον κοίταξε. Και κάτι άλλαξε. Γιατί ο φόβος, όταν τον ονομάσεις, χάνει λίγο από τη δύναμή του.`,
          en: `This time, fear didn't come as a monster. It didn't come as a shadow in the dark. It came dressed as logic — calm, convincing, almost friendly.

"What if I forget everything?" Eleftheria looked at her hands. The same hands that had written so much — now hanging useless at her sides.

"What if they laugh?" Alexandra felt her eyes burn.

Philippos tried to check the mechanism one last time. His fingers slipped. Beginner mistakes. As if he had forgotten everything.

No one spoke for minutes. Every thought was a wall. Every doubt a closed door.

And then Philippos said something no one expected. Not even himself.

"I'm scared."

Two words. So small. So heavy. But this time he said them. He didn't hide them behind anger or indifference. He let them fall into the middle of the room, naked and true.

Alexandra looked at him. Eleftheria looked at him. And something changed. Because fear, when you name it, loses some of its power.`
        }
      },
      {
        title: { el: "Το Θάρρος του Crocus", en: "Crocus's Courage" },
        image: "/images/paidia-kai-crocus.webp",
        imageCaption: { el: "«Φοβηθείτε — και πάτε.»", en: "\"Be afraid — and go.\"" },
        text: {
          el: `Ο Crocus δεν φώναξε. Δεν πετάχτηκε. Δεν χοροπήδησε. Για πρώτη φορά, στάθηκε ακίνητος — τα πράσινα μάτια του σταθερά, η φωνή του χαμηλή.

«Ξέρετε τι φοβάμαι εγώ;» ρώτησε.

Τα παιδιά τον κοίταξαν. Ο Crocus δεν φοβόταν ποτέ τίποτα — ή τουλάχιστον αυτό νόμιζαν. Ήταν πάντα αυτός που πηδούσε πρώτος, που γελούσε πιο δυνατά, που φώναζε «ΠΑΜΕ» χωρίς δεύτερη σκέψη.

«Φοβάμαι να μη δείξουμε ποτέ σε κανέναν αυτό που φτιάξαμε», είπε. «Να μείνουμε εδώ. Να το κρατάμε κρυμμένο. Αυτό με τρομάζει πιο πολύ από κάθε κοινό.»

Η φράση έπεσε βαριά. Σαν βράχος σε ακίνητο νερό.

Η Ελευθερία τον κοίταξε με μάτια διαφορετικά — σαν να τον έβλεπε για πρώτη φορά. «Δηλαδή πάμε φοβισμένοι;»

«Ναι», είπε ο Crocus. Και η φωνή του δεν ήταν δυνατή αυτή τη φορά. Ήταν τρυφερή. «Αυτό λέγεται θάρρος. Δεν είναι να μη φοβάσαι. Είναι να φοβάσαι — και να πας.»

Η WiseBot εμφανίστηκε αθόρυβα στη γωνία. Τα μωβ μάτια της ακτινοβολούσαν απαλά. «Ο φόβος δεν είναι σήμα κινδύνου», είπε. «Είναι σήμα ανάπτυξης. Σας λέει ότι κάτι σημαντικό πρόκειται να συμβεί.»

Κανείς δεν μίλησε. Αλλά κάτι κινήθηκε μέσα τους — μικρό, αθόρυβο, ακλόνητο.`,
          en: `Crocus didn't shout. He didn't jump. He didn't bounce. For the first time, he stood still — his green eyes steady, his voice low.

"Do you know what I'm afraid of?" he asked.

The children looked at him. Crocus never feared anything — or at least that's what they thought. He was always the one who jumped first, who laughed the loudest, who shouted "LET'S GO" without a second thought.

"I'm afraid we never show anyone what we built," he said. "That we stay here. That we keep it hidden. That scares me more than any audience."

The phrase fell heavy. Like a rock into still water.

Eleftheria looked at him with different eyes — as if seeing him for the first time. "So we go scared?"

"Yes," said Crocus. And his voice wasn't loud this time. It was tender. "That is called courage. It's not about not being afraid. It's about being afraid — and going anyway."

WiseBot appeared silently in the corner. Her purple eyes radiated softly. "Fear is not a danger signal," she said. "It is a growth signal. It is telling you that something important is about to happen."

No one spoke. But something moved inside them — small, quiet, unshakeable.`
        }
      },
      {
        title: { el: "Το Βήμα", en: "The Step" },
        image: "/images/alexandra.webp",
        imageCaption: { el: "Η φωνή έτρεμε. Αλλά δεν σταμάτησε.", en: "Her voice trembled. But she didn't stop." },
        text: {
          el: `Στάθηκαν μπροστά. Τα φώτα ήταν δυνατά — τόσο δυνατά που τα μάτια τους πονούσαν. Πρόσωπα, πρόσωπα, πρόσωπα. Δεκάδες ζευγάρια μάτια που κοιτούσαν, περίμεναν.

Για ένα δευτερόλεπτο, ο χρόνος σταμάτησε. Η Αλεξάνδρα ένιωσε τα γόνατά της να λυγίζουν. Ο Φίλιππος ένιωσε το στομάχι του να αναποδογυρίζει. Η Ελευθερία ένιωσε το μυαλό της να αδειάζει.

Και τότε η Αλεξάνδρα μίλησε. Η φωνή της έτρεμε στην αρχή — σαν κερί σε ανοιχτό παράθυρο. Αλλά δεν σταμάτησε. Λέξη μετά λέξη. Και σιγά σιγά, το τρέμουλο έγινε ρυθμός. Η αβεβαιότητα έγινε πάθος.

Ο Φίλιππος μίλησε μετά. Με φωτιά. Τα μάτια του έλαμπαν και τα χέρια του ζωγράφιζαν στον αέρα αυτό που δεν μπορούσαν οι λέξεις.

Η Ελευθερία ολοκλήρωσε. Καθαρά. Ακριβώς. Κάθε λέξη στη θέση της, σαν κομμάτι παζλ που βρήκε επιτέλους πού ανήκει.

Δεν ήταν τέλειο. Ήταν αληθινό. Και το αληθινό, πάντα, νικάει το τέλειο.

Τα χέρια τους ακόμα έτρεμαν. Τα γόνατα ακόμα λύγιζαν. Ο φόβος ήταν ακόμα εκεί. Αλλά αυτή τη φορά — δεν οδηγούσε. Απλώς καθόταν στο πίσω κάθισμα.`,
          en: `They stood in front. The lights were bright — so bright their eyes hurt. Faces, faces, faces. Dozens of pairs of eyes watching, waiting.

For a second, time stopped. Alexandra felt her knees buckling. Philippos felt his stomach turning. Eleftheria felt her mind emptying.

And then Alexandra spoke. Her voice trembled at first — like a candle in an open window. But she didn't stop. Word after word. And slowly, the trembling became rhythm. The uncertainty became passion.

Philippos spoke next. With fire. His eyes shone and his hands painted in the air what words couldn't capture.

Eleftheria finished. Clearly. Precisely. Every word in its place, like a puzzle piece that finally found where it belongs.

It wasn't perfect. It was real. And real always beats perfect.

Their hands were still trembling. Their knees still buckling. The fear was still there. But this time — it wasn't driving. It was just sitting in the back seat.`
        }
      },
      {
        title: { el: "Το Μετά", en: "The After" },
        image: "/images/paidia-wisebot-2.webp",
        imageCaption: { el: "Ο φόβος δεν εξαφανίστηκε. Απλά σταμάτησε να οδηγεί.", en: "Fear didn't disappear. It just stopped driving." },
        text: {
          el: `Δεν χειροκρότησαν όλοι. Η ζωή δεν δουλεύει έτσι — δεν σηκώνονται πάντα όλοι όρθιοι με δάκρυα στα μάτια.

Αλλά κάποιοι πλησίασαν. Ένας κύριος με γυαλιά είπε: «Μου άρεσε.» Ένα παιδί, μικρότερο από αυτούς, χαμογέλασε: «Συνεχίστε.» Δεν χρειαζόταν ο κόσμος ολόκληρος. Χρειαζόταν κάποιοι. Λίγοι. Αληθινοί.

Η Αλεξάνδρα χαμογέλασε — ένα αληθινό χαμόγελο που έφτασε μέχρι τα μάτια. «Το κάναμε», ψιθύρισε.

Η WiseBot άναψε. Τα μωβ μάτια της πάλλονταν αργά. «Και ο φόβος;» ρώτησε.

Ο Φίλιππος σκέφτηκε. Πραγματικά σκέφτηκε — όχι γρήγορη απάντηση, αλλά κάτι που βγήκε από βαθιά. «Ήταν εκεί. Απλώς δεν μας σταμάτησε.»

Ο Crocus χοροπήδησε. Τα μάτια του γυάλιζαν. «Αυτό ήταν πάντα. Όχι να φύγει ο φόβος — αλλά να πας μαζί του.»

Η Ελευθερία κοίταξε τα τρεμάμενα χέρια της. Δεν σταμάτησαν να τρέμουν. Αλλά τώρα ήταν διαφορετικά — δεν έτρεμαν από αδυναμία. Έτρεμαν από ζωντάνια. Από κάτι που μεγάλωνε μέσα τους.

Κοιτάχτηκαν. Τρία παιδιά. Ένα βήμα. Ο φόβος δεν εξαφανίστηκε εκείνο το βράδυ. Αλλά σταμάτησε να αποφασίζει. Και αυτό ήταν αρκετό. Γιατί το θάρρος δεν είναι η απουσία τρέμουλου. Είναι η απόφαση να περπατήσεις ενώ τρέμεις.`,
          en: `Not everyone applauded. Life doesn't work like that — not everyone stands up with tears in their eyes.

But some came closer. A man with glasses said: "I liked it." A child, younger than them, smiled: "Keep going." They didn't need the whole world. They needed some people. A few. Real ones.

Alexandra smiled — a real smile that reached her eyes. "We did it," she whispered.

WiseBot lit up. Her purple eyes pulsed slowly. "And the fear?" she asked.

Philippos thought. Really thought — not a quick answer, but something that came from deep inside. "It was there. It just didn't stop us."

Crocus bounced. His eyes were glittering. "That was always it. Not for fear to leave — but for you to go with it."

Eleftheria looked at her trembling hands. They hadn't stopped shaking. But now they were different — they weren't trembling from weakness. They were trembling from being alive. From something growing inside them.

They looked at each other. Three children. One step. The fear didn't disappear that night. But it stopped deciding. And that was enough. Because courage is not the absence of trembling. It is the decision to walk while you tremble.`
        }
      }
    ]
  }
];
