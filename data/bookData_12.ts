
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
          el: `Το μήνυμα ήρθε απρόσμενα, ένα ήσυχο απόγευμα Τρίτης. Σαν κεραυνός σε καταγάλανο ουρανό.

Η Αλεξάνδρα το διάβασε πρώτη. Τα μάτια της σάρωσαν τις λέξεις — αργά, προσεκτικά, σαν να ήλπιζε ότι κάποια θα εξαφανιζόταν αν την κοιτούσε αρκετή ώρα. «Θέλουμε να παρουσιάσετε το project σας. Μπροστά σε κόσμο. Αύριο.»

Διάβασε ξανά. Και ξανά. Οι λέξεις δεν εξαφανίστηκαν. Αντίθετα — μεγάλωσαν. Γέμισαν το δωμάτιο σαν καπνός που τρυπώνει κάτω από την πόρτα.

«Δεν είμαστε έτοιμοι», είπε αμέσως. Η φωνή της προσπαθούσε να ακουστεί σταθερή, λογική, μεγάλη. Αλλά τα χέρια της έτρεμαν πάνω στο τηλέφωνο και το πρόδιδαν.

Ο Φίλιππος έσκυψε πάνω από την οθόνη και χαμογέλασε νευρικά — ένα χαμόγελο που δεν έφτασε ποτέ στα μάτια του. «Μπροστά σε κόσμο; Σε αληθινό κόσμο; Με πρόσωπα;» Η φωνή του βγήκε πιο ψιλή και πιο αδύναμη απ' όσο ήθελε.

Η Ελευθερία δεν μίλησε καθόλου. Ένιωσε κάτι στο στομάχι — ένα σφίξιμο βαθύ, σαν κόμπος σε σχοινί που όσο τον τραβάς, τόσο σφίγγει. Κοίταξε τις σημειώσεις της, τις σελίδες που είχε γράψει με τόσο κόπο. Κάθε λέξη φάνηκε ξαφνικά μικρή. Ανεπαρκής. Σχεδόν γελοία.

Ο Crocus πετάχτηκε ανάμεσά τους με έναν πήδο. «ΠΑΜΕ!» φώναξε χαρούμενα, με την ουρά του να χτυπάει το πάτωμα. «Αυτό περιμέναμε!»

Κανείς δεν απάντησε. Η σιωπή που ακολούθησε μιλούσε πιο δυνατά από κάθε λέξη. Και αυτό που έλεγε ήταν ένα πράγμα, καθαρό και παγωμένο: φόβος.`,
          en: `The message arrived unexpectedly, on a quiet Tuesday afternoon. Like lightning out of a bright blue sky.

Alexandra read it first. Her eyes scanned the words — slowly, carefully, as if hoping one of them might disappear if she stared long enough. "We want you to present your project. In front of people. Tomorrow."

She read it again. And again. The words did not vanish. Instead — they grew. They filled the room like smoke slipping under a door.

"We're not ready," she said immediately. Her voice was trying to sound steady, logical, grown-up. But her hands were trembling on the phone and giving her away.

Philippos leaned over the screen and smiled nervously — a smile that never reached his eyes. "In front of people? Real people? With faces?" His voice came out higher and weaker than he intended.

Eleftheria didn't speak at all. She felt something in her stomach — a deep tightening, like a knot in a rope that pulls tighter the more you tug at it. She looked at her notes, the pages she had written with so much care. Every word suddenly seemed small. Inadequate. Almost ridiculous.

Crocus leaped into the middle of them with one bound. "LET'S GO!" he shouted happily, his tail thumping the floor. "This is what we've been waiting for!"

No one answered. The silence that followed spoke louder than any word. And what it said was one thing, clear and ice-cold: fear.`
        }
      },
      {
        title: { el: "Ο Φόβος", en: "The Fear" },
        image: "/images/filippos.webp",
        imageCaption: { el: "«Φοβάμαι.» Δύο λέξεις. Τόσο βαριές.", en: "\"I'm scared.\" Two words. So heavy." },
        text: {
          el: `Αυτή τη φορά ο φόβος δεν ήρθε σαν τέρας με δόντια. Δεν ήρθε σαν σκιά στο σκοτάδι. Ήρθε ντυμένος λογική — ήρεμος, πειστικός, σχεδόν φιλικός. Και αυτοί οι φόβοι είναι οι πιο δύσκολοι, γιατί ακούγονται σαν αλήθεια.

«Κι αν ξεχάσω τα πάντα;» Η Ελευθερία κοίταξε τα χέρια της. Τα ίδια χέρια που είχαν γράψει σελίδες ολόκληρες — τώρα κρέμονταν άχρηστα στα πλάγιά της, σαν να μην της ανήκαν.

«Κι αν γελάσουν;» Η Αλεξάνδρα ένιωσε τα μάτια της να καίνε. Στο μυαλό της έπαιζε ήδη η σκηνή: τα πρόσωπα, τα χαμόγελα, τα ψιθυρίσματα.

Ο Φίλιππος έσκυψε να ελέγξει τον μηχανισμό τους μια τελευταία φορά. Τα δάχτυλά του — τα σταθερά, έμπειρα δάχτυλά του — γλίστρησαν δύο φορές. Λάθη αρχαρίου. Σαν ο φόβος να είχε μπει και μέσα στα χέρια του και να είχε σβήσει όλα όσα ήξεραν.

Κανείς δεν μίλησε για πολλά λεπτά. Κάθε σκέψη ήταν ένας τοίχος. Κάθε αμφιβολία μια πόρτα που έκλεινε με κρότο.

Και τότε ο Φίλιππος είπε κάτι που δεν περίμενε κανείς. Ούτε καν ο ίδιος.

«Φοβάμαι.»

Δύο λέξεις. Τόσο μικρές. Τόσο βαριές. Αλλά αυτή τη φορά τις είπε δυνατά. Δεν τις έκρυψε πίσω από θυμό, πίσω από πλάκες, πίσω από ένα «βαριέμαι». Τις άφησε να πέσουν στη μέση του δωματίου, γυμνές και αληθινές.

Η Αλεξάνδρα τον κοίταξε. «Κι εγώ», ψιθύρισε.

«Κι εγώ», είπε η Ελευθερία.

Και κάτι άλλαξε στο δωμάτιο. Έγινε πιο ελαφρύ. Γιατί ο φόβος, όταν τον ονομάσεις και τον μοιραστείς, χάνει αμέσως λίγη από τη δύναμή του.`,
          en: `This time, fear didn't come as a monster with teeth. It didn't come as a shadow in the dark. It came dressed as logic — calm, convincing, almost friendly. And those fears are the hardest ones, because they sound like the truth.

"What if I forget everything?" Eleftheria stared at her hands. The same hands that had written entire pages — now hanging useless at her sides, as if they didn't belong to her.

"What if they laugh?" Alexandra felt her eyes burning. The scene was already playing in her head: the faces, the smirks, the whispers.

Philippos bent down to check their mechanism one last time. His fingers — his steady, experienced fingers — slipped twice. Beginner mistakes. As if fear had crawled into his hands too and erased everything they knew.

No one spoke for many minutes. Every thought was a wall. Every doubt a door slamming shut.

And then Philippos said something nobody expected. Not even himself.

"I'm scared."

Two words. So small. So heavy. But this time he said them out loud. He didn't hide them behind anger, behind jokes, behind an "I'm bored." He let them fall into the middle of the room, naked and true.

Alexandra looked at him. "Me too," she whispered.

"Me too," said Eleftheria.

And something changed in the room. It grew lighter. Because fear, once you name it and share it, instantly loses some of its power.`
        }
      },
      {
        title: { el: "Το Θάρρος του Crocus", en: "Crocus's Courage" },
        image: "/images/paidia-kai-crocus.webp",
        imageCaption: { el: "«Φοβηθείτε — και πάτε.»", en: "\"Be afraid — and go.\"" },
        text: {
          el: `Ο Crocus δεν φώναξε. Δεν πετάχτηκε. Δεν χοροπήδησε. Για πρώτη φορά από τότε που τον ήξεραν, στάθηκε εντελώς ακίνητος — τα πράσινα μάτια του σταθερά, η φωνή του χαμηλή και σοβαρή.

«Ξέρετε τι φοβάμαι εγώ;» ρώτησε.

Τα παιδιά τον κοίταξαν έκπληκτα. Ο Crocus δεν φοβόταν ποτέ τίποτα — ή τουλάχιστον έτσι νόμιζαν. Ήταν πάντα αυτός που πηδούσε πρώτος στο άγνωστο, που γελούσε πιο δυνατά απ' όλους, που φώναζε «ΠΑΜΕ» χωρίς δεύτερη σκέψη.

«Φοβάμαι να μη δείξουμε ποτέ σε κανέναν αυτό που φτιάξαμε», είπε. «Να μείνουμε για πάντα εδώ μέσα. Να το κρατάμε κρυμμένο, ασφαλές και αόρατο. Αυτό με τρομάζει πιο πολύ από χίλια κοινά και χίλια γέλια.»

Η φράση έπεσε βαριά στο δωμάτιο. Σαν βράχος σε ακίνητο νερό — και οι κύκλοι της απλώθηκαν παντού.

Η Ελευθερία τον κοίταξε με μάτια διαφορετικά, σαν να τον έβλεπε για πρώτη φορά. «Δηλαδή… πάμε φοβισμένοι;»

«Ναι!» είπε ο Crocus, και τώρα η φωνή του ήταν τρυφερή και δυνατή μαζί. «Δεν αφήνουμε τον φόβο πίσω — δεν φεύγει έτσι κι αλλιώς. Τον παίρνουμε μαζί μας, τον βάζουμε στην τσέπη, και ΠΑΜΕ! Αυτό λέγεται θάρρος. Δεν είναι να μη φοβάσαι. Είναι να φοβάσαι — και να πηγαίνεις.»

Η WiseBot εμφανίστηκε αθόρυβα στη γωνία, με τα μωβ μάτια της να ακτινοβολούν απαλά. «Ο Crocus έχει δίκιο. Ο φόβος δεν είναι σήμα κινδύνου», είπε. «Είναι σήμα ανάπτυξης. Σας λέει ότι κάτι σημαντικό πρόκειται να συμβεί. Ότι μεγαλώνετε.»

Κανείς δεν μίλησε. Αλλά κάτι κινήθηκε μέσα και στους τρεις — μικρό, αθόρυβο, ακλόνητο. Σαν πρώτο βήμα.`,
          en: `Crocus didn't shout. He didn't leap. He didn't bounce. For the first time since they had known him, he stood completely still — his green eyes steady, his voice low and serious.

"Do you know what I'm afraid of?" he asked.

The children stared at him, astonished. Crocus was never afraid of anything — or so they had always believed. He was the one who jumped into the unknown first, who laughed louder than anyone, who shouted "LET'S GO" without a second thought.

"I'm afraid that we never show anyone what we built," he said. "That we stay in here forever. That we keep it hidden, safe, and invisible. That scares me more than a thousand audiences and a thousand laughs."

The sentence landed heavily in the room. Like a rock dropped into still water — and its ripples spread everywhere.

Eleftheria looked at him with different eyes, as if seeing him for the very first time. "So… we go scared?"

"Yes!" said Crocus, and now his voice was tender and strong at the same time. "We don't leave fear behind — it doesn't leave anyway. We take it with us, we put it in our pocket, and LET'S GO! That is called courage. It's not about not being afraid. It's about being afraid — and going."

WiseBot appeared silently in the corner, her purple eyes radiating softly. "Crocus is right. Fear is not a danger signal," she said. "It is a growth signal. It is telling you that something important is about to happen. That you are growing."

No one spoke. But something moved inside all three of them — small, quiet, unshakeable. Like a first step.`
        }
      },
      {
        title: { el: "Το Βήμα", en: "The Step" },
        image: "/images/alexandra.webp",
        imageCaption: { el: "Η φωνή έτρεμε. Αλλά δεν σταμάτησε.", en: "Her voice trembled. But she didn't stop." },
        text: {
          el: `Την επόμενη μέρα, στάθηκαν μπροστά. Τα φώτα ήταν δυνατά — τόσο δυνατά που τα μάτια τους πονούσαν και η αίθουσα πίσω τους έμοιαζε σκοτεινή θάλασσα. Πρόσωπα, πρόσωπα, πρόσωπα. Δεκάδες ζευγάρια μάτια που κοιτούσαν και περίμεναν.

Για ένα ατέλειωτο δευτερόλεπτο, ο χρόνος σταμάτησε. Η Αλεξάνδρα ένιωσε τα γόνατά της να λυγίζουν σαν χάρτινα. Ο Φίλιππος ένιωσε το στομάχι του να κάνει τούμπες. Η Ελευθερία ένιωσε το μυαλό της να αδειάζει εντελώς — όλες οι λέξεις που είχε μάθει απ' έξω, εξαφανισμένες.

Και τότε η Αλεξάνδρα θυμήθηκε τον Crocus. «Τον παίρνουμε μαζί μας — και πάμε.» Πήρε μια ανάσα. Και μίλησε.

Η φωνή της έτρεμε στην αρχή — σαν φλόγα κεριού μπροστά σε ανοιχτό παράθυρο. Αλλά δεν σταμάτησε. Λέξη μετά τη λέξη. Πρόταση μετά την πρόταση. Και σιγά σιγά, το τρέμουλο έγινε ρυθμός. Η αβεβαιότητα έγινε πάθος.

Ο Φίλιππος μίλησε μετά. Με φωτιά. Τα μάτια του έλαμπαν καθώς έδειχνε τον μηχανισμό τους, και τα χέρια του ζωγράφιζαν στον αέρα όλα όσα δεν χωρούσαν στις λέξεις.

Η Ελευθερία ολοκλήρωσε. Καθαρά. Ακριβώς. Οι λέξεις της — που πριν από ένα λεπτό ήταν χαμένες — γύρισαν όλες πίσω και στάθηκαν η καθεμιά στη θέση της, σαν κομμάτια παζλ που βρήκαν επιτέλους πού ανήκουν.

Δεν ήταν τέλειο. Κόμπιασαν. Ξέχασαν ένα σημείο. Το τηλεκοντρόλ έπεσε μια φορά κάτω. Αλλά ήταν αληθινό. Και το αληθινό, πάντα, νικάει το τέλειο.

Τα χέρια τους ακόμα έτρεμαν. Ο φόβος ήταν ακόμα εκεί, στην τσέπη. Αλλά αυτή τη φορά — δεν οδηγούσε αυτός. Καθόταν στο πίσω κάθισμα, και απλώς έβλεπε τη διαδρομή.`,
          en: `The next day, they stood at the front. The lights were bright — so bright their eyes hurt, and the hall behind the glow looked like a dark sea. Faces, faces, faces. Dozens of pairs of eyes watching and waiting.

For one endless second, time stopped. Alexandra felt her knees folding like paper. Philippos felt his stomach doing somersaults. Eleftheria felt her mind emptying completely — every word she had memorized, gone.

And then Alexandra remembered Crocus. "We take it with us — and we go." She took a breath. And she spoke.

Her voice trembled at first — like a candle flame in front of an open window. But she did not stop. Word after word. Sentence after sentence. And little by little, the trembling became rhythm. The uncertainty became passion.

Philippos spoke next. With fire. His eyes shone as he demonstrated their mechanism, and his hands painted in the air everything that couldn't fit into words.

Eleftheria finished. Clearly. Precisely. Her words — lost just a minute earlier — all came back and stood each in its place, like puzzle pieces that had finally found where they belonged.

It wasn't perfect. They stumbled. They forgot one part. The remote control fell on the floor once. But it was real. And real always beats perfect.

Their hands were still trembling. The fear was still there, in their pocket. But this time — it wasn't driving. It sat in the back seat, just watching the road go by.`
        }
      },
      {
        title: { el: "Το Μετά", en: "The After" },
        image: "/images/paidia-wisebot-2.webp",
        imageCaption: { el: "Ο φόβος δεν εξαφανίστηκε. Απλά σταμάτησε να οδηγεί.", en: "Fear didn't disappear. It just stopped driving." },
        text: {
          el: `Δεν χειροκρότησαν όλοι. Η ζωή δεν δουλεύει έτσι — δεν σηκώνονται πάντα όλοι όρθιοι με δάκρυα στα μάτια, όπως στις ταινίες.

Αλλά κάποιοι πλησίασαν. Ένας κύριος με γυαλιά έσκυψε πάνω από το έργο τους, το κοίταξε προσεκτικά και είπε: «Μου άρεσε. Πολύ.» Ένα παιδί, μικρότερο από αυτούς, τους τράβηξε από το μανίκι και χαμογέλασε: «Συνεχίστε. Θέλω να δω τι θα γίνει μετά.» Δεν χρειαζόταν ο κόσμος ολόκληρος. Χρειάζονταν κάποιοι. Λίγοι. Αληθινοί.

Η Αλεξάνδρα χαμογέλασε — ένα αληθινό χαμόγελο που ανέβηκε μέχρι τα μάτια της και έμεινε εκεί. «Το κάναμε», ψιθύρισε. «Το κάναμε στ' αλήθεια.»

Η WiseBot άναψε απαλά. Τα μωβ μάτια της πάλλονταν αργά, ζεστά. «Και ο φόβος;» ρώτησε. «Πού είναι τώρα;»

Ο Φίλιππος σκέφτηκε. Πραγματικά σκέφτηκε — δεν πέταξε μια γρήγορη απάντηση, αλλά έψαξε βαθιά. «Ήταν εκεί. Όλη την ώρα. Τον ένιωθα στο στομάχι μου. Απλώς… δεν μας σταμάτησε.»

Ο Crocus χοροπήδησε, επιτέλους ο παλιός καλός Crocus, με τα μάτια του να γυαλίζουν. «Αυτό ήταν το μυστικό από την αρχή! Όχι να φύγει ο φόβος — αλλά να πας μαζί του! Αγκαλιά!»

Η Ελευθερία κοίταξε τα χέρια της. Έτρεμαν ακόμα λιγάκι. Αλλά τώρα ήταν αλλιώς — δεν έτρεμαν από αδυναμία. Έτρεμαν από ζωντάνια. Από χαρά. Από κάτι καινούριο που μεγάλωνε μέσα της.

Κοιτάχτηκαν και οι τρεις. Τρία παιδιά. Ένα βήμα — το πιο δύσκολο που είχαν κάνει ποτέ. Ο φόβος δεν εξαφανίστηκε εκείνο το βράδυ. Οι φόβοι δεν εξαφανίζονται. Αλλά σταμάτησε να αποφασίζει εκείνος για αυτούς. Και αυτό ήταν αρκετό. Γιατί το θάρρος δεν είναι η απουσία τρέμουλου. Είναι η απόφαση να περπατήσεις — ενώ τρέμεις.`,
          en: `Not everyone applauded. Life doesn't work like that — people don't always rise to their feet with tears in their eyes, the way they do in the movies.

But some came closer. A man with glasses leaned over their project and said: "I liked it. A lot." A child, younger than them, tugged at their sleeves and smiled: "Keep going. I want to see what happens next." They didn't need the whole world. They needed a few people. Real ones.

Alexandra smiled — a true smile that climbed all the way up to her eyes and stayed there. "We did it," she whispered. "We really did it."

WiseBot lit up softly. Her purple eyes pulsed slowly, warmly. "And the fear?" she asked. "Where is it now?"

Philippos really thought about it before answering. "It was there. The whole time. I could feel it in my stomach. It just… didn't stop us."

Crocus bounced up and down, the good old Crocus again, eyes glittering. "That was the secret all along! Not for the fear to leave — but for you to go with it! Side by side!"

Eleftheria looked at her hands. They were still trembling a little. But it was different now — they weren't trembling from weakness. They were trembling from being alive. From joy. From something new growing inside her.

They looked at each other. Three children. One step — the hardest they had ever taken. The fear didn't disappear that night. Fears never do. But it stopped making their decisions for them. And that was enough. Because courage is not the absence of trembling. It is the decision to walk — while you tremble.`
        }
      }
    ]
  }
];
