
import { Book } from '../types';

// ============================================================
// 📖 BOOK 18: ΤΟ ΛΑΘΟΣ ΠΟΥ ΜΑΣ ΕΣΩΣΕ / THE MISTAKE THAT SAVED US
// Heroes: Link & WiseBot
// Theme: ΕΥΘΥΝΗ / RESPONSIBILITY
// ============================================================

export const BOOK_18: Book[] = [
  {
    id: 18,
    title: { el: "ΤΟ ΛΑΘΟΣ ΠΟΥ ΜΑΣ ΕΣΩΣΕ", en: "THE MISTAKE THAT SAVED US" },
    theme: { el: "ΕΥΘΥΝΗ", en: "RESPONSIBILITY" },
    stepLabel: { el: "LINK & WISEBOT & ΕΥΘΥΝΗ", en: "LINK, WISEBOT & RESPONSIBILITY" },
    author: "Link & Wisebot",
    cover: "/images/link.jpg",
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
    parentMessage: {
      el: "Τα λάθη δεν χρειάζονται τιμωρία. Χρειάζονται χώρο για κατανόηση. Η πρώτη αντίδρασή μας — αν φωνάξουμε ή αν ακούσουμε — καθορίζει αν το παιδί θα φοβηθεί τα λάθη ή θα μάθει από αυτά. Δοκιμάστε σήμερα: αντί να ρωτήσετε «γιατί το έκανες;», δοκιμάστε «τι νομίζεις ότι πήγε στραβά; Και τι θα έκανες διαφορετικά;» Η ευθύνη δεν είναι τιμωρία — είναι δύναμη.",
      en: "Mistakes don't need punishment. They need space for understanding. Our first reaction — whether we shout or listen — determines if a child will fear mistakes or learn from them. Try today: instead of asking 'why did you do that?', try 'what do you think went wrong? And what would you do differently?' Responsibility is not punishment — it's power."
    },

    // ── NEW STRUCTURED PAGES (5 pages) ──────────────────────
    pages: [
      {
        title: { el: "Το Σίγουρο", en: "The Sure Thing" },
        image: "/images/ta-3-paidia.webp",
        imageCaption: { el: "Η ομάδα, σίγουρη για τον εαυτό της. Αλλά η σιγουριά μερικές φορές τυφλώνει.", en: "The team, confident in themselves. But confidence can sometimes blind." },
        text: {
          el: `Τα σχέδια ήταν κολλημένα στον τοίχο, γεμάτα σημειώσεις. Τα εργαλεία τακτοποιημένα σε τέλειες σειρές. Ο αέρας στο εργαστήρι μύριζε ζεστό κολλητήρι. Όλα φαίνονταν τέλεια.

«Αυτή τη φορά το 'χουμε», είπε ο Φίλιππος με σιγουριά που τον έκανε να στέκεται πιο ψηλός από ποτέ. «Κοιτάξτε. Κάθε βήμα σημειωμένο. Κάθε εξάρτημα ελεγμένο. Κάθε λεπτομέρεια στη θέση της.»

Η Ελευθερία σήκωσε τα μάτια από το σημειωματάριο. Είχε περάσει τρεις μέρες ξαναδιαβάζοντας σημειώσεις, ελέγχοντας κάθε υπολογισμό. «Οι αριθμοί βγαίνουν», επιβεβαίωσε. Αλλά η φωνή της είχε μια αμυδρή σκιά δισταγμού που κανείς δεν πρόσεξε.

Η Αλεξάνδρα στεκόταν πιο πίσω, κοντά στο παράθυρο. «Δεν ξέρω, παιδιά...» άρχισε. «Νιώθω κάτι σαν να μας λείπει κάτι.»

«Μην το χαλάμε τώρα!» πετάχτηκε ο Φίλιππος. «Αν αρχίσουμε να αμφιβάλλουμε, δεν θα τελειώσουμε ποτέ.»

Η Αλεξάνδρα άνοιξε το στόμα. Αλλά τα λόγια στέγνωσαν στα χείλη. Κατέβασε τα χέρια. Και έγνεψε.

Κανείς δεν ήξερε ότι η στιγμή που η Αλεξάνδρα σώπασε ήταν η αρχή ενός λάθους που κανείς δεν φανταζόταν πως θα τους σώσει.`,
          en: `The plans were taped to the wall, covered in notes. Tools arranged in perfect rows. The workshop air smelled of hot solder. Everything looked perfect.

"This time we've got it," said Philippos with a confidence that made him stand taller than ever. "Look. Every step is marked. Every component checked. Every detail in its place."

Eleftheria looked up from her notebook. She had spent three days re-reading her notes, checking every calculation. "The numbers work out," she confirmed. But her voice carried a faint shadow of hesitation that no one noticed.

Alexandra stood further back, near the window. "I don't know, guys..." she began. "I feel like something is missing."

"Don't ruin it now!" Philippos burst out. "If we start doubting, we'll never finish."

Alexandra opened her mouth. But the words dried on her lips. She lowered her arms. And nodded.

No one knew that the moment Alexandra fell silent was the beginning of a mistake that no one imagined would end up saving them.`
        }
      },
      {
        title: { el: "Το Σπάσιμο", en: "The Break" },
        image: "/images/filippos.webp",
        imageCaption: { el: "Ο θυμός μετά την αποτυχία. Ο μεγαλύτερος εχθρός δεν είναι το λάθος — είναι η κατηγορία.", en: "The anger after failure. The greatest enemy isn't the mistake — it's the blame." },
        text: {
          el: `Ο Φίλιππος πάτησε το κουμπί εκκίνησης. Το πρώτο γρανάζι γύρισε. Το δεύτερο ακολούθησε. Ένα φωτάκι άναψε στο πάνω μέρος.

Και τότε — ένας ήχος. Σαν μέταλλο που γρατζουνάει μέταλλο. Κάτι μέσα στον μηχανισμό σταμάτησε. Βίαια. Τα γρανάζια μπλοκάρισαν. Το φωτάκι τρεμόπαιξε και σβήστηκε. Η σιωπή που ακολούθησε ήταν η πιο βαριά σιωπή που είχαν ζήσει.

«Φταίω εγώ», ψιθύρισε ο Φίλιππος. «Εγώ σχεδίασα τον μηχανισμό...»

«Έπρεπε να το ελέγξουμε ξανά», είπε η Ελευθερία σφίγγοντας τα χέρια. «Ήξερα ότι κάτι δεν πήγαινε καλά στα νούμερα...»

«Σας το είπα», ψιθύρισε η Αλεξάνδρα. «Σας είπα ότι κάτι δεν πήγαινε καλά...»

Τρεις φωνές. Κανείς δεν άκουγε τον άλλον. Ο πόνος της αποτυχίας κάνει τα αυτιά κλειστά και τα στόματα να ανοίγουν μόνο για κατηγορίες.

Ο Φίλιππος γύρισε απότομα. «Γιατί δεν μίλησες πιο δυνατά; Ήξερες!» Η Αλεξάνδρα κοκκίνισε. «Προσπάθησα. Αλλά κανείς δεν άκουσε. Εσύ είπες να πάμε!»

Ο Φίλιππος χτύπησε το τραπέζι. Η Ελευθερία αγκάλιασε τα γόνατά της στη γωνία. Για πρώτη φορά, οι λέξεις — αυτές που πάντα τους ένωναν — ήταν όπλα. Κάθε πρόταση κατηγορία. Κάθε βλέμμα κατηγορία. Ακόμα και η σιωπή κατηγορία.`,
          en: `Philippos pressed the start button. The first gear turned. The second followed. A light came on at the top.

And then — a sound. Like metal scraping metal. Something inside the mechanism stopped. Violently. The gears locked. The light flickered and went dark. The silence that followed was the heaviest they had ever known.

"It's my fault," whispered Philippos. "I designed the mechanism..."

"We should have checked again," said Eleftheria, squeezing her hands. "I knew something wasn't right with the numbers..."

"I told you," whispered Alexandra. "I told you something wasn't right..."

Three voices. No one listening to each other. The pain of failure makes ears close and mouths open only for accusations.

Philippos turned sharply. "Why didn't you speak louder? You knew!" Alexandra flushed. "I tried. But no one listened. You said let's go!"

Philippos slammed the table. Eleftheria hugged her knees in the corner. For the first time, the words — those that always connected them — were weapons. Every sentence an accusation. Every glance an accusation. Even the silence an accusation.`
        }
      },
      {
        title: { el: "Η Link Δεν Κρύβεται", en: "Link Doesn't Hide" },
        image: "/images/paidia-kai-link.webp",
        imageCaption: { el: "Η Link δεν κρύβεται ποτέ. Ούτε από τα λάθη. Ούτε από την αλήθεια.", en: "Link never hides. Not from mistakes. Not from the truth." },
        text: {
          el: `Κανείς δεν την είδε να έρχεται. Η Link δεν ερχόταν ποτέ με φασαρία. Εμφανιζόταν σαν αύρα — αθόρυβα, σαν αεράκι που ξέρει ακριβώς πού πρέπει να φυσήξει.

Τα μάτια της — δύο γαλάζιοι κρύσταλλοι — σάρωσαν αργά τα πρόσωπα. Τον Φίλιππο που τα χέρια του ακόμα έτρεμαν. Την Αλεξάνδρα με τα υγρά μάτια. Την Ελευθερία χωμένη στη γωνία σαν σαλιγκάρι στο καβούκι.

«Το λάθος δεν ήταν τεχνικό», είπε η Link. Φωνή ήρεμη. Σταθερή. Σαν βράχος σε φουρτουνιασμένη θάλασσα.

«Δηλαδή;» ρώτησε η Ελευθερία σηκώνοντας αργά το κεφάλι.

«Βιαστήκατε. Ακούσατε τον ενθουσιασμό και αγνοήσατε τα σήματα. Η Αλεξάνδρα μίλησε — αλλά ο ενθουσιασμός ήταν πιο δυνατός. Η Ελευθερία είδε κάτι στα νούμερα — αλλά ήθελε να πιστέψει ότι ήταν καλά. Ο Φίλιππος ήξερε ότι πιεζόταν ο χρόνος — αλλά προτίμησε να τρέξει παρά να σταματήσει.»

«Δεν ακούσατε όλα τα σήματα. Και αυτό δεν είναι τεχνικό πρόβλημα. Είναι πρόβλημα ευθύνης.»

Η λέξη έμεινε στον αέρα. Ευθύνη. Βαριά σαν πέτρα. Αλλά και αναγκαία σαν αέρας.

Η Link δεν μάλωσε κανέναν. Αλλά τα μάτια της είπαν: αν δεν κοιτάξετε αυτό το λάθος κατάματα, θα σας κυνηγά για πάντα.

«Καθίστε», είπε ήρεμα. «Ανοίξτε τα σχέδια. Αυτή τη φορά, όχι για να δείξετε πόσο καλά ήταν. Για να καταλάβετε τι πήγε στραβά.»`,
          en: `No one saw her coming. Link never came with fanfare. She appeared like a breeze — silently, like a wind that knows exactly where to blow.

Her eyes — two blue crystals — slowly scanned their faces. Philippos with trembling hands. Alexandra with wet eyes. Eleftheria retreated into her corner like a snail in its shell.

"The mistake wasn't technical," said Link. Voice calm. Steady. Like a rock in a stormy sea.

"Meaning?" asked Eleftheria, slowly raising her head.

"You rushed. You listened to your excitement and ignored the signals. Alexandra spoke — but the excitement was louder. Eleftheria saw something in the numbers — but wanted to believe they were fine. Philippos knew time was pressing — but preferred to run rather than stop."

"You didn't listen to all the signals. And that's not a technical problem. It's a problem of responsibility."

The word hung in the air. Responsibility. Heavy as stone. But also necessary as air.

Link didn't scold anyone. But her eyes said: if you don't look at this mistake head-on, it will haunt you forever.

"Sit down," she said calmly. "Open the plans. This time, not to show how good they were. To understand what went wrong."`
        }
      },
      {
        title: { el: "Η Αλήθεια Που Ελευθερώνει", en: "The Truth That Sets You Free" },
        image: "/images/alexandra.webp",
        imageCaption: { el: "Να βλέπεις τον εαυτό σου μέσα στο λάθος δεν είναι αδυναμία. Είναι θάρρος.", en: "Seeing yourself inside the mistake isn't weakness. It's courage." },
        text: {
          el: `Κάθισαν γύρω από τον πάγκο. Ο Φίλιππος άνοιξε αργά τα σχέδια.

«Εδώ», είπε σιγά. «Εδώ δεν αφήσαμε χώρο. Πίεσα τα κομμάτια πολύ κοντά. Δεν υπήρχε αέρας.» Φωνή ήρεμη. Χωρίς θυμό. Απλά ειλικρίνεια.

Η Ελευθερία πήρε βαθιά ανάσα. «Και εδώ — υποθέσαμε ότι η φόρτιση θα κρατούσε. Δεν μέτρησα σωστά. Ήθελα τα νούμερα να βγαίνουν τόσο πολύ που δεν τα έλεγξα σωστά.»

Η Αλεξάνδρα κατάπιε σάλια. «Κι εγώ δεν εμπιστεύτηκα τη φωνή μου. Ήξερα ότι κάτι ήταν λάθος. Αλλά φοβήθηκα ότι αν μιλούσα, θα σας απογοήτευα. Κι αντί να φωνάξω... σώπασα.»

Η σιωπή ήταν διαφορετική τώρα. Δεν ήταν θυμού. Ήταν κατανόησης. Κάθε παιδί είδε τον εαυτό του μέσα στο λάθος — όχι σαν θύμα, αλλά σαν μέρος του. Και αυτό δεν τους αδυνάτισε. Τους ελευθέρωσε.

Η WiseBot εμφανίστηκε χωρίς προειδοποίηση. Ήρθε σιγά, σαν σκέψη που ξυπνά μέσα στη νύχτα. Τα μωβ μάτια της ήταν χαμηλωμένα.

«Αυτό το λάθος δεν ήρθε για να σας τιμωρήσει», είπε. «Ήρθε για να σας δείξει πώς δουλεύετε όταν πιέζεστε.»

«Κάθε ομάδα θα κάνει λάθη. Αλλά αυτό που μπορείτε να αλλάξετε είναι ο τρόπος που αντιδράτε. Μπορείτε να κατηγορήσετε. Μπορείτε να κρυφτείτε. Ή μπορείτε να αναλάβετε ευθύνη. Να πείτε: αυτό ήταν δικό μου. Και μετά — μόνο μετά — να αλλάξετε.»`,
          en: `They sat around the workbench. Philippos slowly opened the plans.

"Here," he said quietly. "Here we didn't leave space. I pressed the parts too close together. No breathing room." Voice calm. Without anger. Just honesty.

Eleftheria took a deep breath. "And here — we assumed the charge would last. I didn't measure correctly. I wanted the numbers to work so badly that I didn't check them properly."

Alexandra swallowed. "And I didn't trust my voice. I knew something was wrong. But I was afraid that if I spoke, I'd disappoint you. And instead of speaking up... I went silent."

The silence was different now. Not anger. Understanding. Each child saw themselves inside the mistake — not as a victim, but as a part of it. And this didn't weaken them. It freed them.

WiseBot appeared without warning. She came softly, like a thought awakening in the night. Her purple eyes were lowered.

"This mistake didn't come to punish you," she said. "It came to show you how you work when you are pressured."

"Every team will make mistakes. But what you can change is how you respond. You can blame. You can hide. Or you can take responsibility. Say: that was mine. And then — only then — change."`
        }
      },
      {
        title: { el: "Ξανά Από Την Αρχή", en: "Starting Again" },
        image: "/images/paidia-kai-wisebot.webp",
        imageCaption: { el: "Δεν ήταν η νίκη που τους ένωσε. Ήταν η αποτυχία — και η επιλογή να μην τρέξουν μακριά.", en: "It wasn't the victory that united them. It was the failure — and the choice not to run away." },
        text: {
          el: `Δεν έφτιαξαν αμέσως κάτι καινούργιο. Δεν πέταξαν τα σπασμένα κομμάτια. Τα κράτησαν. Τα έβαλαν στη μέση του τραπεζιού. Τα κοίταξαν.

«Πρώτα φτιάχνουμε τον τρόπο», είπε η Ελευθερία. «Μετά φτιάχνουμε το πράγμα.»

Μίλησαν. Πραγματικά μίλησαν. Αργά. Με υπομονή. Ο Φίλιππος ρώτησε: «Τι νιώθεις; Αν κάτι δεν σου κάθεται, θέλω να το ακούσω — ακόμα κι αν με καθυστερήσει.» Η Αλεξάνδρα τον κοίταξε έκπληκτη. Κανείς δεν της είχε πει κάτι τέτοιο ποτέ.

Σταμάτησαν όταν κάτι δεν έδενε. Σταμάτησαν όταν η Αλεξάνδρα ένιωσε πάλι εκείνο το τσίμπημα. «Περιμένετε», είπε. Και αυτή τη φορά, περίμεναν.

Η Link παρακολουθούσε. Τα μάτια γαλάζιο φως, σταθερό και θερμό. «Τώρα δουλεύετε σαν ομάδα», είπε απαλά.

Δεν άλλαξαν το σχέδιο. Άλλαξαν τον τρόπο που δούλευαν μαζί. Και αυτό ήταν πολύ πιο σημαντικό.

Το νέο κατασκεύασμα δεν ήταν εντυπωσιακό. Δεν είχε λαμπερά φώτα. Αλλά ήταν σταθερό. Λειτουργούσε. Κάθε γρανάζι γύριζε ομαλά. Κάθε σύνδεση κρατούσε. Δεν ήταν τέλειο — αλλά ήταν αληθινό.

Η WiseBot τους κοίταξε. Τα μωβ μάτια της γεμάτα φως. «Αυτό το λάθος σας έσωσε από πολλά μελλοντικά. Η ευθύνη δεν είναι βάρος. Είναι η βάση πάνω στην οποία χτίζεται κάθε αληθινή επιτυχία.»

Δεν πανηγύρισαν. Αλλά κοιτάχτηκαν — και στα μάτια τους είδαν κάτι καινούργιο: σεβασμό. Για τον εαυτό τους. Για τους άλλους. Για τη διαδικασία. Γιατί το λάθος δεν τους κατέστρεψε. Τους αποκάλυψε. Και μέσα από τα θραύσματα βρήκαν τον εαυτό τους ως ομάδα.`,
          en: `They didn't build something new right away. They didn't throw the broken pieces away. They kept them. Placed them in the middle of the table. Looked at them.

"First we fix the way," said Eleftheria. "Then we fix the thing."

They talked. Really talked. Slowly. With patience. Philippos asked: "What do you feel? If something doesn't sit right, I want to hear it — even if it slows me down." Alexandra looked at him in surprise. No one had ever said something like that to her.

They stopped when something didn't fit. They stopped when Alexandra felt that familiar sting again. "Wait," she said. And this time, they waited.

Link watched. Her eyes a soft blue light, steady and warm. "Now you're working like a team," she said softly.

They didn't change the plan. They changed how they worked together. And that was far more important.

The new creation wasn't impressive. No flashy lights. But it was solid. It worked. Every gear turned smoothly. Every connection held. It wasn't perfect — but it was real.

WiseBot looked at them. Her purple eyes full of light. "This mistake saved you from many future ones. Responsibility is not a burden. It is the foundation upon which every real success is built."

They didn't celebrate. But they looked at each other — and in their eyes they saw something new: respect. For themselves. For each other. For the process. Because the mistake didn't destroy them. It revealed them. And among the fragments they found themselves as a team.`
        }
      }
    ]
  }
];
