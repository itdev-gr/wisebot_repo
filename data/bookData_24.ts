
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
          el: `Το σχολικό κουδούνι χτύπησε και ο Φίλιππος ένιωσε το στομάχι του να σφίγγεται. Ήταν Τρίτη πρωί — μέρα μαθηματικών — και ο ήλιος που έμπαινε από τα παράθυρα φαινόταν σαν προβολέας πάνω σε σκηνή που δεν ήθελε να ανέβει ποτέ.

Κάθισε στο τελευταίο θρανίο. Πάντα στο τελευταίο. Εκεί που γίνεσαι αόρατος.

«Ποιος θέλει να λύσει την άσκηση;» ρώτησε ο δάσκαλος. Χέρια σηκώθηκαν γύρω του. Ο Φίλιππος κράτησε τα χέρια του κάτω από το θρανίο. Σφιγμένα.

Υπήρχε μια φωνή — πιο δυνατή από κάθε γνώση: «Δεν είμαι καλός στα μαθήματα.» Το είχε πει τόσες φορές, που είχε γίνει αλήθεια. Όχι γιατί ήταν αλήθεια — αλλά γιατί η επανάληψη ενός ψέματος χτίζει τοίχους πιο στερεούς από τσιμέντο.

Το απόγευμα ήταν βαρύ σαν μόλυβδος. Το βιβλίο ανοιχτό μπροστά του. Σελίδα 47. Μαθηματικά. Οι αριθμοί τον κοιτούσαν, κι εκείνος τους κοιτούσε — σαν μονομαχία που κανείς δεν τραβούσε πρώτος.

«Προσπάθησα», είπε στην Αλεξάνδρα. «Δεν μένει τίποτα. Διαβάζω μια σελίδα, γυρνάω στην αρχή, και είναι σαν να μην την είδα ποτέ.»

Ο Φίλιππος το πίστευε. Όχι επειδή κάποιος του το απέδειξε. Αλλά επειδή κανείς δεν του είχε δείξει κάτι διαφορετικό.`,
          en: `The school bell rang and Philippos felt his stomach tighten. It was Tuesday morning — math day — and the sun streaming through the windows felt like a spotlight on a stage he never wanted to climb.

He sat at the last desk. Always the last desk. Where you become invisible.

"Who wants to solve this exercise?" the teacher asked. Hands rose around him. Philippos kept his hands under the desk. Clenched.

There was a voice — louder than any knowledge: "I'm not good at school." He had said it so many times that it had become true. Not because it was true — but because repeating a lie enough times builds walls stronger than concrete.

The afternoon was heavy as lead. The book was open before him. Page 47. Mathematics. The numbers stared at him, and he stared back — like a standoff where neither side drew first.

"I tried," he told Alexandra. "Nothing sticks. I read a page, go back to the beginning, and it's like I never saw it."

Philippos believed it. Not because anyone had proved it. But because nobody had ever shown him anything different.`
        }
      },
      {
        title: { el: "Η Ιστορία της Μνήμης", en: "The Story of Memory" },
        image: "/images/paidia-kai-wisebot.webp",
        imageCaption: { el: "Η WiseBot αποκαλύπτει ένα μυστικό για τη μνήμη.", en: "WiseBot reveals a secret about memory." },
        text: {
          el: `Από το ράφι, δύο μωβ κρύσταλλοι άρχισαν να λάμπουν. Η WiseBot άνοιξε τα φτερά της.

«Δεν μένει τίποτα... ή δεν ξέρεις πώς να το κρατήσεις;»

Ο Φίλιππος σήκωσε το κεφάλι. Μια σπίθα περιέργειας στα μάτια του.

«Δεν είμαι από αυτούς που θυμούνται», είπε. Ακλόνητη σιγουριά. Λάθος.

«Το πρόβλημα δεν είναι η μνήμη σου. Είναι η ιστορία που της λες.»

«Κάθε φορά που κάθεσαι να διαβάσεις, ποια είναι η πρώτη σκέψη σου;»

«Ότι δεν θα τα καταφέρω.»

«Και μετά;»

«Ότι θα ξεχάσω.»

«Και μετά;»

«Ότι δεν έχει νόημα να προσπαθήσω.»

«Βλέπεις; Θυμάσαι τέλεια — αλλά μόνο τις αποτυχίες. Την έχεις εκπαιδεύσει να θυμάται τα λάθος πράγματα.»

Ο Φίλιππος δεν μίλησε. Αλλά η Αλεξάνδρα είδε μια ρωγμή στο τείχος. Η WiseBot κατέβηκε αργά από το ράφι. Τα μωβ μάτια της λάμπαν στο σκοτάδι σαν φάρος στη θάλασσα.

«Το μυαλό δεν είναι κουβάς που γεμίζει. Είναι μυς που γυμνάζεται.»

Μερικές φορές η διαφορά ανάμεσα στην παραίτηση και την αρχή είναι μια ερώτηση.`,
          en: `From the shelf, two purple crystals began to glow. WiseBot opened her wings.

"Nothing sticks... or you don't know how to keep it?"

Philippos raised his head. A spark of curiosity in his eyes.

"I'm not one of those who remember," he said. Unshakeable certainty. Wrong.

"The problem isn't your memory. It's the story you tell it."

"Every time you sit down to study, what's your first thought?"

"That I won't manage."

"And then?"

"That I'll forget."

"And then?"

"That there's no point trying."

"You see? You remember perfectly — but only the failures. You've trained it to remember the wrong things."

Philippos said nothing. But Alexandra saw a crack in the wall. WiseBot descended slowly from the shelf. Her purple eyes glowed in the darkness like a lighthouse on the sea.

"The mind is not a bucket to fill. It's a muscle to train."

Sometimes the difference between giving up and beginning is a question.`
        }
      },
      {
        title: { el: "Το Τεστ", en: "The Test" },
        image: "/images/ta-3-paidia.webp",
        imageCaption: { el: "Τρία παιδιά, 25 λεπτά, μηδέν κινητά — ένα μικρό θαύμα.", en: "Three children, 25 minutes, zero phones — a small miracle." },
        text: {
          el: `Την επόμενη μέρα, η WiseBot τους μάζεψε στο δωμάτιο. Κάθισαν σε κύκλο στο πάτωμα.

«Θυμηθείτε 10 τυχαίες λέξεις», είπε. Ο Φίλιππος γέλασε πικρά. «Αδύνατο. Εγώ δεν θυμάμαι ούτε 3.»

«Δεν σε ρώτησα αν μπορείς. Σε ρώτησα αν θα δοκιμάσεις.»

Η WiseBot δεν έδωσε λίστα. Αντ' αυτού, αφηγήθηκε: «Φανταστείτε μια γάτα που οδηγούσε ένα κόκκινο αυτοκίνητο πάνω σε βουνό από παγωτό. Κρατούσε ένα χρυσό ρολόι που τραγουδούσε. Στο πίσω κάθισμα ήταν ένα βιβλίο με φτερά πεταλούδας, και στον ουρανό έλαμπε ένα φεγγάρι σε σχήμα καρδιάς, ενώ από κάτω περνούσε ένα τρένο φτιαγμένο από σοκολάτα.»

Η εικόνα σχηματίστηκε μόνη της στο μυαλό του — τόσο παράλογη που ήταν αδύνατο να τη ξεχάσεις. Ο Φίλιππος τις θυμήθηκε και τις 10.

«Ο εγκέφαλος θυμάται εικόνες. Όχι βαρετές λέξεις.» Η Αλεξάνδρα χαμογέλασε. «Θυμάσαι πώς μου περιέγραψες εκείνο το όνειρο με δράκους πάνω από γήπεδα ποδοσφαίρου; Θυμόσουν κάθε χρώμα.»

«Είναι ακριβώς το ίδιο μυαλό», είπε η WiseBot. «Κανείς δεν σου είπε ότι μπορείς να το χρησιμοποιείς έτσι και για τα μαθήματα.»

Έκλεισαν τα κινητά. Έβαλαν χρονοδιακόπτη. 25 λεπτά. Μόνο διάβασμα. Μετά 5 λεπτά διάλειμμα. Ο Φίλιππος σκέφτηκε: 25 λεπτά μπορώ. Και μπορούσε. Μετά από τρεις κύκλους, «Θυμάμαι πράγματα», ψιθύρισε. «Πραγματικά θυμάμαι.»

Δεν ήταν μαγεία. Ήταν κάτι πιο απλό και πιο δυνατό: ο σωστός τρόπος.`,
          en: `The next day, WiseBot gathered them all. They sat in a circle on the floor.

"Remember 10 random words," she said. Philippos laughed bitterly. "Impossible. I can't even remember 3."

"I didn't ask if you can. I asked if you'll try."

WiseBot didn't give a list. Instead, she narrated: "Imagine a cat driving a red car over a mountain of ice cream. She was holding a golden clock that was singing. In the back seat was a book with butterfly wings, and in the sky shone a moon shaped like a heart, while below passed a train made of chocolate."

The image formed by itself in his mind — so absurd it was impossible to forget. Philippos remembered all 10.

"The brain remembers images. Not boring words." Alexandra smiled. "Remember how you described that dream about dragons flying over football stadiums? You remembered every color."

"It's exactly the same brain," said WiseBot. "Nobody had told you that you could use it this way for school, too."

They turned off phones. Set a timer. 25 minutes. Only studying. Then a 5-minute break. Philippos thought: 25 minutes I can do. And he could. After three cycles, "I'm remembering things," he whispered. "I'm actually remembering."

It wasn't magic. It was something simpler and more powerful: the right method.`
        }
      },
      {
        title: { el: "Η Ταυτότητα", en: "The Identity" },
        image: "/images/paidia-wisebot-2.webp",
        imageCaption: { el: "«Δεν είμαι χαζός. Απλά δεν ήξερα πώς.»", en: "'I'm not stupid. I just didn't know how.'" },
        text: {
          el: `Πέρασαν μέρες. Ο Φίλιππος εξασκούνταν. Τα μαθηματικά έγιναν ταινία κινουμένων σχεδίων στο μυαλό του. Η ιστορία περιπέτεια. Η γεωγραφία ταξιδιωτικός οδηγός.

Η παλιά φωνή ξαναγύριζε μερικές μέρες — αλλά τώρα είχε αποδείξεις ότι έλεγε ψέματα. Πρόσεξε κάτι απλό αλλά σημαντικό: τις μέρες που κοιμόταν καλά, θυμόταν καλύτερα. Τις μέρες που κουνιόταν, ένιωθε πιο καθαρός.

«Το μυαλό δεν ζει σε γυάλα», τους είπε η WiseBot. «Ζει σε σώμα. Αν το σώμα κουράζεται, το μυαλό σέρνεται.»

Δεν ήταν χαζός. Ήταν κουρασμένος.

Ένα βράδυ, ο Φίλιππος καθόταν στο κρεβάτι. «Δεν είμαι καλός στα μαθηματικά», είπε. Αλλά τη φορά αυτή, η φωνή του δεν ήταν σιγουριά. Ήταν ερώτηση.

«Είσαι παιδί που μαθαίνει μαθηματικά», απάντησε η WiseBot. «"Δεν είμαι καλός" σημαίνει μόνιμο. "Μαθαίνω" σημαίνει αυτό που κάνεις τώρα. Αύριο μπορείς καλύτερα.»

Μικρή διαφορά στα λόγια. Τεράστια αλλαγή στη σκέψη. Κάτι κλικ μέσα του.

«Δεν είμαι χαζός», ψιθύρισε.

«Όχι», είπε η WiseBot. «Ποτέ δεν ήσουν.»

«Απλά δεν ήξερα πώς.»

«Και τώρα ξέρεις.»

Η ταυτότητα δεν είναι αυτό που γεννιέσαι. Είναι αυτό που επιλέγεις κάθε μέρα να γίνεις.`,
          en: `Days passed. Philippos practiced. Mathematics became a cartoon in his mind. History an adventure. Geography a travel guide.

The old voice returned some days — but now he had evidence it was lying. He noticed something simple but important: on days he slept well, he remembered better. On days he moved, he felt clearer.

"The mind doesn't live in a jar," WiseBot told them. "It lives in a body. If the body is tired, the mind crawls."

He wasn't stupid. He was tired.

One night, Philippos sat on his bed. "I'm not good at math," he said. But this time, his voice wasn't certainty. It was a question.

"You are a child who is learning math," WiseBot replied. "'I'm not good' means permanent. 'I'm learning' means what you do now. Tomorrow you can do better."

Small difference in words. Enormous change in thinking. Something clicked inside him.

"I'm not stupid," he whispered.

"No," said WiseBot. "You never were."

"I just didn't know how."

"And now you do."

Identity isn't what you're born with. It's what you choose to become each day.`
        }
      },
      {
        title: { el: "Το Όριο", en: "The Limit" },
        image: "/images/sparken.jpg",
        imageCaption: { el: "«Το κλειδί ήμουν εγώ.»", en: "'The key was me.'" },
        text: {
          el: `Ένα κρύο απόγευμα, ο Sparken κατέβηκε. Τα χρυσά μάτια του έλαμπαν σαν κεριά. Τα παιδιά κάθισαν σε σιωπή.

«Το όριο σου δεν είναι το μυαλό σου. Είναι το πόσο μικρό το κρατάς.»

Ο Φίλιππος ένιωσε τις λέξεις στο στομάχι. Εκεί που οι αλήθειες πέφτουν βαριές πριν φτάσουν στο μυαλό. Δεν έγινε ξαφνικά ιδιοφυΐα. Αλλά έκανε κάτι πιο σημαντικό: σταμάτησε να αυτοσαμποτάρεται.

Άρχισε να κάνει ερωτήσεις χωρίς ντροπή. Να μαθαίνει με εικόνες. Να διαβάζει με σκοπό. Να προστατεύει την προσοχή του.

Μια μέρα στο σχολείο, σήκωσε το χέρι. Αργά. Τρεμάμενα. Ο δάσκαλος τον κοίταξε έκπληκτος. Η απάντηση δεν ήταν τέλεια — είχε ένα λάθος. Αλλά δεν ήταν σιωπή.

Στο τέλος της χρονιάς, δεν είχε τους υψηλότερους βαθμούς. Αλλά είχε κάτι πιο ισχυρό: δεν φοβόταν να μάθει.

Η WiseBot στάθηκε μπροστά του. «Το μυαλό σου δεν είναι κλειδωμένο. Απλώς κανείς δεν σου είχε δώσει το κλειδί.»

Ο Φίλιππος χαμογέλασε πλατιά. «Ξέρω. Αλλά τώρα βρήκα ότι το κλειδί ήμουν εγώ.»

Κάθε μικρή επιτυχία ήταν ψήφος εμπιστοσύνης: «Είμαι παιδί που μπορεί.» Η μεγαλύτερη νίκη δεν είναι να κερδίσεις τους άλλους. Είναι να νικήσεις τη φωνή μέσα σου που λέει «δεν μπορείς».

Η αλλαγή δεν γίνεται σε μια μέρα. Γίνεται σε χίλιες μικρές στιγμές. Και κάθε μία μετράει.`,
          en: `One cold afternoon, Sparken descended. His golden eyes shone like candles. The children sat in silence.

"Your limit is not your mind. It's how small you keep it."

Philippos felt the words in his stomach. Where truths land heavy before they reach the brain. He didn't suddenly become a genius. But he did something more important: he stopped sabotaging himself.

He began asking questions without shame. Learning with images. Studying with purpose. Protecting his attention.

One day at school, he raised his hand. Slowly. Trembling. The teacher looked at him, surprised. The answer wasn't perfect — one mistake. But it wasn't silence.

At the end of the year, he didn't have the highest grades. But he had something more powerful: he wasn't afraid to learn.

WiseBot stood before him. "Your mind is not locked. Simply no one had given you the key."

Philippos smiled wide. "I know. But now I found that the key was me."

Every small success was a vote of confidence: "I am a child who can." The greatest victory isn't beating others. It's defeating the voice inside you that says "you can't."

Change doesn't happen in a day. It happens in a thousand small moments. And every one of them counts.`
        }
      }
    ]
  }
];
