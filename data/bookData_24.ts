
import { Book } from '../types';

// ============================================================
// BOOK 24: ΤΟ ΑΓΟΡΙ ΠΟΥ ΠΙΣΤΕΥΕ ΟΤΙ ΔΕΝ ΗΤΑΝ ΕΞΥΠΝΟ / THE BOY WHO BELIEVED HE WASN'T SMART
// Hero: WiseBot & Sparken
// Theme: ΜΑΘΗΣΗ / LEARNING
// ============================================================

export const BOOK_24: Book[] = [
  {
    id: 24,
    title: { el: "ΤΟ ΑΓΟΡΙ ΠΟΥ ΠΙΣΤΕΥΕ ΟΤΙ ΔΕΝ ΗΤΑΝ ΕΞΥΠΝΟ", en: "THE BOY WHO BELIEVED HE WASN'T SMART" },
    theme: { el: "ΜΑΘΗΣΗ", en: "LEARNING" },
    stepLabel: { el: "WISEBOT & ΜΑΘΗΣΗ", en: "WISEBOT & LEARNING" },
    author: "Wisebot & Sparken",
    cover: "/images/wisebot.jpg",
    videoUrl: "",
    description: {
      el: "Ο Φίλιππος πίστευε ότι δεν έχει μνήμη. Η WiseBot του έδειξε ότι το μυαλό δεν είναι κουβάς που γεμίζει, αλλά μυς που γυμνάζεται.",
      en: "Philippos believed he had no memory. WiseBot showed him that the mind is not a bucket to fill, but a muscle to train."
    },
    meaning: {
      el: "Το όριο σου δεν είναι το μυαλό σου. Είναι το πόσο μικρό το κρατάς.",
      en: "Your limit is not your mind. It's how small you keep it."
    },
    xp: 440,
    parentMessage: {
      el: "Η νοοτροπία ανάπτυξης (Growth Mindset) είναι το κλειδί. Ένα παιδί που πιστεύει «δεν μπορώ» δεν θα προσπαθήσει. Ένα παιδί που πιστεύει «δεν μπορώ ακόμα» θα βρει τρόπο. Αντί να πούμε «δεν μπορείς», λέμε «δεν μπορείς ακόμα». Μια μικρή λέξη — μια τεράστια αλλαγή. Διδάξτε τα παιδιά πώς να μαθαίνουν (εστίαση, εικόνες, διαλείμματα, ύπνος) και όχι μόνο τι να μαθαίνουν. Δοκιμάστε σήμερα: Όταν το παιδί σας λέει «δεν μπορώ», προσθέστε ήρεμα τη λέξη «ακόμα». Και μετά ρωτήστε: «Τι θα σε βοηθούσε να μάθεις;»",
      en: "Growth Mindset is the key. A child who believes 'I can't' will not try. A child who believes 'I can't yet' will find a way. Instead of saying 'you can't', say 'you can't yet'. A small word — an enormous change. Teach your children how to learn (focus, images, breaks, sleep) and not just what to learn. Try today: When your child says 'I can't', calmly add the word 'yet'. And then ask: 'What would help you learn?'"
    },

    // ── STRUCTURED PAGES (5 pages) ──────────────────────
    pages: [
      {
        title: { el: "Η Απόφαση", en: "The Decision" },
        image: "/images/filippos.webp",
        imageCaption: { el: "Ο Φίλιππος στο τελευταίο θρανίο — αόρατος κατ' επιλογήν.", en: "Philippos at the last desk — invisible by choice." },
        text: {
          el: `Το σχολικό κουδούνι χτύπησε και ο Φίλιππος ένιωσε το στομάχι του να σφίγγεται σαν γροθιά. Ήταν Τρίτη πρωί — μέρα μαθηματικών — και ο ήλιος που έμπαινε από τα μεγάλα παράθυρα φαινόταν σαν προβολέας πάνω σε σκηνή θεάτρου. Μια σκηνή στην οποία δεν ήθελε να ανέβει ποτέ.

Κάθισε στο τελευταίο θρανίο. Πάντα στο τελευταίο. Εκεί που ο δάσκαλος δεν φτάνει με το βλέμμα. Εκεί που γίνεσαι αόρατος, αν μείνεις αρκετά ακίνητος.

«Ποιος θέλει να λύσει την άσκηση στον πίνακα;» ρώτησε ο δάσκαλος. Χέρια σηκώθηκαν γύρω του σαν δάσος. Ο Φίλιππος κράτησε τα δικά του κάτω από το θρανίο. Σφιγμένα. Τα δάχτυλά του άσπρισαν.

Δεν ήταν ότι δεν ήξερε την απάντηση. Ίσως και να την ήξερε. Αλλά μέσα του υπήρχε μια φωνή — πιο δυνατή από κάθε γνώση: «Δεν είμαι καλός στα μαθήματα.» Το είχε πει τόσες πολλές φορές, στον εαυτό του και στους άλλους, που είχε γίνει αλήθεια. Όχι επειδή ήταν αλήθεια — αλλά επειδή η επανάληψη ενός ψέματος χτίζει τοίχους πιο στερεούς κι από τσιμέντο. Το είχε αποφασίσει: δεν ήταν από τα έξυπνα παιδιά. Τελεία.

Το απόγευμα στο σπίτι ήταν βαρύ σαν μόλυβδος. Το βιβλίο ανοιχτό μπροστά του. Σελίδα 47. Μαθηματικά. Οι αριθμοί τον κοιτούσαν, κι εκείνος τους κοιτούσε — σαν μονομαχία στην οποία κανείς δεν τραβούσε πρώτος.

«Προσπάθησα», είπε στην Αλεξάνδρα, όταν εκείνη πέρασε από το δωμάτιό του. «Αλήθεια προσπάθησα. Δεν μένει τίποτα. Διαβάζω μια σελίδα, γυρνάω στην αρχή, και είναι σαν να μην την είδα ποτέ. Το μυαλό μου είναι σαν τρύπιο σακί.»

Ο Φίλιππος το πίστευε με όλη του την καρδιά. Όχι επειδή κάποιος του το απέδειξε. Αλλά επειδή κανείς δεν του είχε δείξει ποτέ κάτι διαφορετικό.`,
          en: `The school bell rang and Philippos felt his stomach tighten like a fist. It was Tuesday morning — math day — and the sun streaming through the tall windows felt like a spotlight on a stage he never wanted to climb onto.

He sat at the last desk. Always the last one. The place the teacher's gaze doesn't reach. The place where you become invisible if you stay still enough.

"Who wants to solve the exercise on the board?" the teacher asked. Hands rose around him like a forest. Philippos kept his own under the desk. Clenched. His knuckles turned white.

It wasn't that he didn't know the answer. Maybe he even did. But inside him there was a voice — louder than any knowledge: "I'm not good at school." He had said it so many times that it had become true. Not because it was true — but because repeating a lie enough times builds walls stronger than concrete. He had decided it: he simply wasn't one of the smart kids. Period.

That afternoon at home, the air felt heavy as lead. The book lay open in front of him. Page 47. Mathematics. The numbers stared at him, and he stared back — like a standoff where neither side draws first.

"I tried," he told Alexandra when she stopped by his room. "I really tried. Nothing sticks. I read a page, go back to the beginning, and it's like I never saw it at all. My brain is like a sack full of holes."

Philippos believed it with his whole heart. Not because anyone had proved it. But because nobody had ever shown him anything different.`
        }
      },
      {
        title: { el: "Η Ιστορία της Μνήμης", en: "The Story of Memory" },
        image: "/images/paidia-kai-wisebot.webp",
        imageCaption: { el: "Η WiseBot αποκαλύπτει ένα μυστικό για τη μνήμη.", en: "WiseBot reveals a secret about memory." },
        text: {
          el: `Από το ράφι πάνω από το γραφείο, δύο μωβ κρύσταλλοι άρχισαν να λάμπουν απαλά μέσα στο μισοσκόταδο. Η WiseBot άνοιξε τα φτερά της και τα μάτια της φώτισαν το δωμάτιο.

«Δεν μένει τίποτα... ή δεν ξέρεις ακόμα πώς να το κρατήσεις;» ρώτησε.

Ο Φίλιππος σήκωσε το κεφάλι από το βιβλίο. Μια μικρή σπίθα περιέργειας άναψε στα μάτια του, πριν προλάβει να την κρύψει.

«Δεν είμαι από αυτούς που θυμούνται», είπε. Το είπε με ακλόνητη σιγουριά. Σαν επιστήμονας που ανακοινώνει νόμο της φύσης. Και ήταν λάθος.

«Το πρόβλημα δεν είναι η μνήμη σου», είπε η WiseBot ήρεμα. «Είναι η ιστορία που της λες. Πες μου: κάθε φορά που κάθεσαι να διαβάσεις, ποια είναι η πρώτη σου σκέψη;»

«Ότι δεν θα τα καταφέρω.»

«Και μετά;»

«Ότι θα τα ξεχάσω όλα.»

«Και μετά;»

«Ότι... δεν έχει νόημα να προσπαθήσω.» Η φωνή του έγινε ψίθυρος.

«Βλέπεις;» Τα μάτια της WiseBot έλαμψαν. «Θυμάσαι τέλεια. Θυμάσαι κάθε αποτυχία, κάθε κακό βαθμό, κάθε στιγμή ντροπής. Η μνήμη σου δουλεύει άψογα — απλώς την έχεις εκπαιδεύσει να θυμάται τα λάθος πράγματα.»

Ο Φίλιππος δεν μίλησε. Κάτι μέσα του ταρακουνήθηκε. Η Αλεξάνδρα, που καθόταν στην άκρη του κρεβατιού, είδε κάτι που δεν είχε ξαναδεί: μια ρωγμή στο τείχος που ο φίλος της έχτιζε χρόνια.

Η WiseBot κατέβηκε αργά από το ράφι και στάθηκε πάνω στο ανοιχτό βιβλίο, ακριβώς πάνω στη σελίδα 47. Τα μωβ μάτια της έλαμπαν στο σκοτάδι σαν φάρος στη θάλασσα.

«Άκουσέ με καλά, Φίλιππε. Το μυαλό δεν είναι κουβάς που γεμίζει. Είναι μυς που γυμνάζεται. Και κανείς δεν γεννήθηκε γυμνασμένος.»

Μερικές φορές η διαφορά ανάμεσα στην παραίτηση και την αρχή είναι μία μόνο ερώτηση — αρκεί κάποιος να τη ρωτήσει τη σωστή στιγμή.`,
          en: `From the shelf, two purple crystals began to glow softly in the half-darkness. WiseBot opened her wings, and her eyes lit up the room.

"Nothing sticks... or you don't yet know how to make it stay?" she asked.

Philippos lifted his head from the book. A small spark of curiosity flickered in his eyes before he could hide it.

"I'm not one of those people who remember things," he said. He said it with unshakeable certainty. Like a scientist announcing a law of nature. And he was wrong.

"The problem isn't your memory," WiseBot said calmly. "It's the story you keep telling it. Tell me: every time you sit down to study, what is your very first thought?"

"That I won't manage."

"And then?"

"That I'll forget everything."

"And then?"

"That... there's no point in trying." His voice sank to a whisper.

"You see?" WiseBot's eyes flashed. "You remember perfectly. You remember every failure, every bad grade, every moment of embarrassment. Your memory works flawlessly — you have simply trained it to remember the wrong things."

Philippos said nothing. Something inside him shook loose. Alexandra, sitting on the edge of the bed, saw something new: a crack in the wall her friend had spent years building.

WiseBot glided down and stood on the open book, right on page 47. Her purple eyes glowed in the darkness like a lighthouse over the sea.

"Listen to me carefully, Philippos. The mind is not a bucket to fill. It is a muscle to train. And nobody was born with trained muscles."

Sometimes the difference between giving up and beginning is a single question, asked at the right moment.`
        }
      },
      {
        title: { el: "Το Τεστ", en: "The Test" },
        image: "/images/ta-3-paidia.webp",
        imageCaption: { el: "Τρία παιδιά, 25 λεπτά, μηδέν κινητά — ένα μικρό θαύμα.", en: "Three children, 25 minutes, zero phones — a small miracle." },
        text: {
          el: `Την επόμενη μέρα, η WiseBot τους μάζεψε όλους στο δωμάτιο. Κάθισαν σε κύκλο στο πάτωμα: ο Φίλιππος με σταυρωμένα χέρια, η Ελευθερία με το αιώνιο σημειωματάριό της.

«Σήμερα θα θυμηθείτε 10 τυχαίες λέξεις», ανακοίνωσε η WiseBot. Ο Φίλιππος γέλασε πικρά. «Αδύνατο. Εγώ δεν θυμάμαι ούτε 3.»

«Δεν σε ρώτησα αν μπορείς. Σε ρώτησα αν θα δοκιμάσεις.»

Η WiseBot δεν έδωσε λίστα. Δεν είπε «απομνημονεύστε». Αντ' αυτού, άρχισε να αφηγείται μια αστεία, τρελή ιστορία: «Φανταστείτε μια γάτα που οδηγούσε ένα κατακόκκινο αυτοκίνητο πάνω σε ένα βουνό από παγωτό φράουλα. Στο ένα πόδι κρατούσε ένα χρυσό ρολόι που τραγουδούσε όπερα. Στο πίσω κάθισμα καθόταν ένα βιβλίο με φτερά πεταλούδας, στον ουρανό έλαμπε ένα φεγγάρι σε σχήμα καρδιάς, κι από κάτω περνούσε σφυρίζοντας ένα τρένο φτιαγμένο από σοκολάτα.»

Τα παιδιά γελούσαν. Και η εικόνα σχηματίστηκε μόνη της στο μυαλό του Φίλιππου — τόσο παράλογη, τόσο ζωντανή, που ήταν αδύνατο να τη ξεχάσεις. Όταν η WiseBot ζήτησε τις λέξεις, ο Φίλιππος τις θυμήθηκε. Και τις 10. Με τη σειρά.

«Πώς...;» ψέλλισε.

«Ο εγκέφαλος θυμάται εικόνες και ιστορίες. Όχι βαρετές, ξερές λέξεις.» Η Αλεξάνδρα χαμογέλασε πλατιά. «Θυμάσαι που μου περιέγραψες το όνειρο με τους δράκους πάνω από γήπεδα ποδοσφαίρου; Θυμόσουν κάθε χρώμα.»

«Είναι ακριβώς το ίδιο μυαλό», είπε η WiseBot. «Απλώς κανείς δεν σου είχε πει ότι μπορείς να το χρησιμοποιείς έτσι και για τα μαθήματα.»

Μετά, το δεύτερο μυστικό. Έκλεισαν τα κινητά σε άλλο δωμάτιο. Χρονοδιακόπτης: 25 λεπτά. Μόνο διάβασμα. Μετά, 5 λεπτά διάλειμμα. Ο Φίλιππος σκέφτηκε: 25 λεπτά αντέχω. Και άντεξε. Μετά από τρεις κύκλους, σήκωσε το κεφάλι με μάτια γουρλωμένα. «Θυμάμαι πράγματα», ψιθύρισε. «Πραγματικά θυμάμαι.»

Δεν ήταν μαγεία. Ήταν κάτι πιο απλό και πιο δυνατό: ο σωστός τρόπος.`,
          en: `The next day, WiseBot gathered them in the room. They sat in a circle on the floor: Philippos with crossed arms, Eleftheria with her eternal notebook.

"Today you will remember 10 random words," WiseBot announced. Philippos laughed bitterly. "Impossible. I can't even remember 3."

"I didn't ask if you can. I asked if you will try."

WiseBot gave no list. She never said "memorize." Instead, she began telling a funny, absurd story: "Imagine a cat driving a bright red car up a mountain of strawberry ice cream. In one paw she held a golden clock that sang opera. In the back seat sat a book with butterfly wings, in the sky shone a moon shaped like a heart, and down below passed a train made entirely of chocolate."

The children were laughing. The picture painted itself in Philippos's mind — so absurd it was impossible to forget. When WiseBot asked for the words, Philippos remembered them. All 10. In order.

"How...?" he stammered.

"The brain remembers images and stories. Not boring, dry words." Alexandra grinned. "Remember when you described that dream about dragons flying over football stadiums? You remembered every color."

"It is exactly the same brain," said WiseBot. "Nobody had ever told you that you could use it this way for school, too."

Then came the second secret. Phones off, in another room. A timer: 25 minutes. Only studying. Then a 5-minute break to run around freely. Philippos thought: 25 minutes — I can survive that. And he could. After three cycles, he lifted his head, eyes wide. "I'm remembering things," he whispered. "I'm actually remembering."

It wasn't magic. It was something simpler and more powerful: the right method.`
        }
      },
      {
        title: { el: "Η Ταυτότητα", en: "The Identity" },
        image: "/images/paidia-wisebot-2.webp",
        imageCaption: { el: "«Δεν είμαι χαζός. Απλά δεν ήξερα πώς.»", en: "'I'm not stupid. I just didn't know how.'" },
        text: {
          el: `Πέρασαν μέρες, και μετά εβδομάδες. Ο Φίλιππος εξασκούνταν κάθε απόγευμα. Τα μαθηματικά έγιναν ταινία κινουμένων σχεδίων στο μυαλό του — αριθμοί που πηδούσαν, κλάσματα που τσακώνονταν. Η ιστορία έγινε περιπέτεια με ήρωες και μάχες. Η γεωγραφία έγινε ταξιδιωτικός οδηγός για μέρη που μια μέρα θα επισκεπτόταν.

Η παλιά φωνή ξαναγύριζε μερικά βράδια, ύπουλα. «Δεν είσαι έξυπνος. Ήταν τύχη.» Αλλά τώρα ο Φίλιππος είχε κάτι που δεν είχε πριν: αποδείξεις ότι η φωνή έλεγε ψέματα. Και είχε μάθει και κάτι ακόμα από τη WiseBot: κάθε φορά που ερχόταν το «Δεν μπορώ», το άλλαζε με μια ερώτηση — «Πώς μπορώ;» Αντί για τοίχο, η σκέψη γινόταν πόρτα.

Πρόσεξε και κάτι σημαντικό: τις μέρες που κοιμόταν καλά, θυμόταν καλύτερα. Τις μέρες που έτρεχε, ένιωθε το μυαλό του καθαρό, σαν παράθυρο μετά τη βροχή.

«Το μυαλό δεν ζει σε γυάλα», τους είπε η WiseBot ένα απόγευμα. «Ζει σε σώμα. Αν το σώμα κουράζεται, το μυαλό σέρνεται.»

Δεν ήταν χαζός. Ήταν κουρασμένος. Η διαφορά ήταν τεράστια.

Ένα βράδυ, ο Φίλιππος καθόταν στην άκρη του κρεβατιού του. «Δεν είμαι καλός στα μαθηματικά», είπε δυνατά. Αλλά αυτή τη φορά, η φωνή του δεν είχε σιγουριά. Είχε απορία. Ήταν ερώτηση, όχι απόφαση.

«Είσαι παιδί που μαθαίνει μαθηματικά», απάντησε η WiseBot από το ράφι. «Το "δεν είμαι καλός" σημαίνει κάτι μόνιμο, τελειωμένο. Το "μαθαίνω" σημαίνει αυτό που κάνεις τώρα. Και αύριο μπορείς καλύτερα.»

Μικρή διαφορά στα λόγια. Τεράστια αλλαγή στη σκέψη. Κάτι έκανε κλικ μέσα του, σαν κλειδαριά που άνοιξε.

«Δεν είμαι χαζός», ψιθύρισε.

«Όχι», είπε η WiseBot. «Ποτέ δεν ήσουν.»

«Απλά δεν ήξερα πώς.»

«Και τώρα ξέρεις.»

Γιατί η ταυτότητα δεν είναι αυτό με το οποίο γεννιέσαι. Είναι αυτό που επιλέγεις, κάθε μέρα, να γίνεις.`,
          en: `Days passed, then weeks. Philippos practiced every afternoon. Mathematics became a cartoon playing in his mind — numbers that jumped around, fractions that argued. History became an adventure. Geography became a travel guide to places he would visit one day.

The old voice still returned some nights, sneakily. "You're not smart. It was luck." But now Philippos had proof that the voice was lying. And he had learned one more thing from WiseBot: every time the "I can't" showed up, he swapped it for a question — "How can I?" Instead of a wall, the thought became a door.

He also noticed something important: on days he slept well, he remembered better. On days he moved, his mind felt clearer, like a window after rain.

"The mind doesn't live in a jar," WiseBot told them one afternoon. "It lives in a body. If the body is exhausted, the mind crawls."

He wasn't stupid. He was tired. The difference was enormous.

One night, Philippos sat on his bed. "I'm not good at math," he said out loud. But this time his voice carried no certainty. It was a question, not a verdict.

"You are a child who is learning math," WiseBot answered from the shelf. "'I'm not good' means permanent. 'I'm learning' means what you are doing right now. And tomorrow you can do better."

A small difference in words. An enormous change in thinking. Something clicked inside him, like a lock opening.

"I'm not stupid," he whispered.

"No," said WiseBot. "You never were."

"I just didn't know how."

"And now you do."

Because identity is not what you are born with. It is what you choose, every day, to become.`
        }
      },
      {
        title: { el: "Το Όριο", en: "The Limit" },
        image: "/images/sparken.jpg",
        imageCaption: { el: "«Το κλειδί ήμουν εγώ.»", en: "'The key was me.'" },
        text: {
          el: `Ένα κρύο απόγευμα, ο Sparken κατέβηκε από τον γκρίζο ουρανό. Τα χρυσά μάτια του έλαμπαν σαν κεριά. Τα παιδιά κάθισαν γύρω του σε σιωπή — όταν μιλούσε ο Sparken, ακόμα κι ο αέρας στεκόταν να ακούσει.

«Το όριο σου δεν είναι το μυαλό σου», είπε, κοιτώντας τον Φίλιππο κατευθείαν στα μάτια. «Είναι το πόσο μικρό το κρατάς.»

Ο Φίλιππος ένιωσε τις λέξεις να πέφτουν στο στομάχι του — εκεί που οι μεγάλες αλήθειες πέφτουν πρώτα. Δεν έγινε ξαφνικά ιδιοφυΐα. Αλλά έκανε κάτι πολύ πιο σημαντικό: σταμάτησε να σαμποτάρει τον εαυτό του.

Άρχισε να κάνει ερωτήσεις χωρίς ντροπή. Να μαθαίνει με εικόνες και αστείες ιστορίες. Να διαβάζει με σκοπό και χρονοδιακόπτη. Να προστατεύει την προσοχή του σαν θησαυρό. Και κάθε φορά που σκόνταφτε, ρωτούσε: «Πώς μπορώ;»

Μια μέρα στο σχολείο, σήκωσε το χέρι. Αργά. Τρεμάμενα. Ο δάσκαλος τον κοίταξε έκπληκτος — ο Φίλιππος από το τελευταίο θρανίο; Η απάντησή του δεν ήταν τέλεια. Είχε ένα λάθος. Αλλά δεν ήταν σιωπή. Και αυτό άλλαζε τα πάντα.

Στο τέλος της χρονιάς, δεν είχε τους υψηλότερους βαθμούς. Αλλά είχε κάτι πολύ πιο ισχυρό: δεν φοβόταν πια να μάθει.

Η WiseBot στάθηκε μπροστά του το βράδυ της τελευταίας μέρας. «Το μυαλό σου δεν ήταν ποτέ κλειδωμένο, Φίλιππε. Απλώς κανείς δεν σου είχε δώσει το κλειδί.»

Ο Φίλιππος χαμογέλασε πλατιά. «Το ξέρω. Αλλά ανακάλυψα και κάτι ακόμα. Το κλειδί ήμουν εγώ.»

Κάθε μικρή επιτυχία ήταν μια ψήφος εμπιστοσύνης στον εαυτό του: «Είμαι παιδί που μπορεί.» Γιατί η μεγαλύτερη νίκη δεν είναι να κερδίσεις τους άλλους. Είναι να νικήσεις τη φωνή μέσα σου που λέει «δεν μπορείς».

Η αλλαγή δεν γίνεται σε μια μέρα. Γίνεται σε χίλιες μικρές στιγμές. Και κάθε μία από αυτές μετράει.`,
          en: `One cold afternoon, Sparken descended from the gray sky. His golden eyes shone like candles. The children sat around him in silence — when Sparken spoke, even the air stood still to listen.

"Your limit is not your mind," he said, looking Philippos straight in the eyes. "It's how small you keep it."

Philippos felt the words land in his stomach — the place where great truths land first. He didn't suddenly become a genius. But he did something far more important: he stopped sabotaging himself.

He began asking questions without shame. Learning with images and funny stories. Studying with purpose and a timer. Guarding his attention like a treasure. And every time he stumbled, he asked: "How can I?"

One day at school, he raised his hand. Slowly. Trembling. The teacher looked at him in astonishment — Philippos, from the last desk? His answer wasn't perfect. It had one mistake. But it wasn't silence. And that changed everything.

At the end of the year, he didn't have the highest grades. But he had something far more powerful: he was no longer afraid to learn.

WiseBot stood before him on the last evening of school. "Your mind was never locked, Philippos. Nobody had ever given you the key."

Philippos smiled widely. "I know. But I discovered something else, too. The key was me."

Every small success was a vote of confidence in himself: "I am a child who can." Because the greatest victory is not beating others. It is defeating the voice inside you that says "you can't."

Change doesn't happen in a day. It happens in a thousand small moments. And every single one of them counts.`
        }
      }
    ]
  }
];
