
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
          el: `Η ιδέα ήταν εκεί. Στη μέση του τραπεζιού. Το ρομπότ που θα πετούσε και θα μιλούσε — η ιδέα που είχε ανάψει τη σπίθα. Χαρτιά απλωμένα παντού, σαν χάρτης θησαυρού χωρίς Χ. Σχέδια πάνω σε σχέδια πάνω σε διαγραμμένα σχέδια. Μουτζούρες, βέλη, ερωτηματικά.

Και τα τρία παιδιά καθισμένα γύρω του. Ακίνητα.

Η Αλεξάνδρα κοιτούσε το χαρτί σαν να κοιτούσε καθρέφτη. «Νομίζω ότι…» Σταμάτησε. Δάγκωσε το χείλος της. Κι αν ήταν λάθος; Κι αν γελούσαν;

«Περίμενε», είπε η Ελευθερία χωρίς να σηκώσει τα μάτια από το βιβλίο της. «Να το σκεφτούμε λίγο ακόμα. Ο σωστός τρόπος θέλει μελέτη.»

«Ναι…» μουρμούρισε ο Φίλιππος. Άνοιξε το στόμα να πει την ιδέα του. Το έκλεισε ξανά. Κάτι τους κρατούσε και τους τρεις — κάτι αόρατο, σαν σχοινί δεμένο στα πόδια τους. Δεν το ήξεραν ακόμα, αλλά αυτό το σχοινί είχε όνομα: υπερβολική σκέψη.

Πέρασε μία ώρα. Το μόνο που άλλαξε ήταν δύο καινούργια ερωτηματικά στο χαρτί. Πέρασε άλλη μία. Το ρολόι στον τοίχο τους κοιτούσε σαν δικαστής. Τικ. Τοκ. Κάθε δευτερόλεπτο και μία ψήφος εναντίον τους.

Σκέφτονταν. Ξανασκέφτονταν. Σκέφτονταν ότι σκέφτονται. Και δεν ξεκινούσαν ποτέ.

«Κι αν το καταλαβαίνουμε για πάντα…» ψιθύρισε τελικά η Αλεξάνδρα, κοιτώντας τα ακίνητα χαρτιά, «χωρίς να το κάνουμε ποτέ;»

Κανείς δεν απάντησε. Γιατί όλοι φοβόντουσαν ότι είχε δίκιο.`,
          en: `The idea was there. In the middle of the table. The robot that would fly and speak — the idea that had lit the spark. Papers spread everywhere, like a treasure map without an X. Sketches on top of sketches on top of crossed-out sketches. Scribbles, arrows, question marks.

And the three children sat around it. Motionless.

Alexandra stared at the paper as if she were staring into a mirror. "I think that…" She stopped. She bit her lip. What if she was wrong? What if they laughed?

"Wait," said Eleftheria without lifting her eyes from her book. "Let's think about it a bit more. The right way requires study."

"Yeah…" mumbled Philippos. He opened his mouth to share his idea. Then closed it again. Something was holding all three of them back — something invisible, like a rope tied around their feet. They didn't know it yet, but that rope had a name: overthinking.

An hour passed. The only thing that changed was two new question marks on the paper. Another hour passed. The clock on the wall watched them like a judge. Tick. Tock. Every second another vote against them.

They thought. They rethought. They thought about their thinking. And they never once began.

"What if we understand it forever…" Alexandra finally whispered, staring at the motionless papers, "without ever actually doing it?"

No one answered. Because they were all afraid she was right.`
        }
      },
      {
        title: { el: "ΜΠΑΜ!", en: "BANG!" },
        image: "/images/paidia-kai-crocus.webp",
        imageCaption: { el: "Η στιγμή που ο Crocus μπήκε στο δωμάτιο.", en: "The moment Crocus entered the room." },
        text: {
          el: `Η πόρτα δεν άνοιξε. Εκτοξεύτηκε.

ΜΠΑΑΜ! Χτύπησε στον τοίχο τόσο δυνατά που το ρολόι σταμάτησε για ένα δευτερόλεπτο — λες και τρόμαξε κι αυτό. Τα χαρτιά πέταξαν από το τραπέζι σαν φύλλα σε φθινοπωρινή καταιγίδα.

Η Αλεξάνδρα τινάχτηκε. Η Ελευθερία έχασε τη σελίδα της. Ο Φίλιππος παραλίγο να πέσει από την καρέκλα.

Στο κατώφλι στεκόταν ένας μηχανικός κροκόδειλος. Ψηλός. Πράσινος σαν δάσος μετά τη βροχή. Φορούσε γυαλιά στραβά — τόσο στραβά που ήταν φανερό πως δεν τον ένοιαζε καθόλου να τα ισιώσει. Τα μάτια του γελούσαν. Αλλά αν κοιτούσες προσεκτικά, πίσω από το γέλιο έβλεπες σημάδια — μικρές γρατζουνιές, μπαλωμένα σημεία. Σαν κάποιος που είχε πέσει πολλές, πολλές φορές. Και είχε σηκωθεί κάθε φορά.

Κοίταξε το τραπέζι. Τα χαρτιά. Τα τρία παγωμένα παιδιά.

«Ωραία», είπε, και η φωνή του γέμισε το δωμάτιο. «Θα το ΣΥΖΗΤΑΜΕ ή θα το ΚΑΝΟΥΜΕ;»

«Ποιος είσαι εσύ;!» πετάχτηκε η Αλεξάνδρα, με την καρδιά της να χτυπάει ακόμα σαν ταμπούρλο.

Ο κροκόδειλος χαμογέλασε. Ένα χαμόγελο πλατύ, γεμάτο δόντια — που κανονικά θα έπρεπε να είναι τρομακτικό, αλλά περιέργως δεν ήταν. Ήταν σαν πρόσκληση. Σαν πόρτα που ανοίγει.

«Είμαι αυτός που έρχεται όταν όλοι έχουν κουραστεί να σκέφτονται και έχουν ξεχάσει να ζουν. Έρχομαι όταν η σκέψη γίνεται κρυψώνα.» Έκλεισε το μάτι. «Λέγομαι Crocus. Και έχω μία μόνο λέξη στο λεξιλόγιό μου που μετράει πραγματικά.»

«Ποια;» ρώτησε ο Φίλιππος.

«ΠΑΜΕ.»`,
          en: `The door didn't open. It launched.

BANG! It slammed into the wall so hard the clock stopped for a second — as if it, too, got scared. The papers flew off the table like leaves in an autumn storm.

Alexandra jumped. Eleftheria lost her page. Philippos nearly fell off his chair.

In the doorway stood a mechanical crocodile. Tall. Green like a forest after the rain. He wore crooked glasses — so crooked it was obvious he didn't care to straighten them at all. His eyes were laughing. But if you looked closely, behind the laughter you could see marks — little scratches, patched-up spots. Like someone who had fallen many, many times. And had gotten up every single time.

He looked at the table. The papers. The three frozen children.

"Great," he said, and his voice filled the room. "Are we going to DISCUSS it, or are we going to DO it?"

"Who are you?!" Alexandra burst out, her heart still pounding like a drum.

The crocodile smiled. A wide smile, full of teeth — which by all rules should have been scary, but strangely wasn't. It was like an invitation. Like a door swinging open.

"I'm the one who shows up when everyone is tired of thinking and has forgotten how to live. I come when thinking becomes a hiding place." He winked. "My name is Crocus. And there is only one word in my vocabulary that truly matters."

"Which one?" asked Philippos.

"LET'S GO."`
        }
      },
      {
        title: { el: "ΠΑΜΕ", en: "LET'S GO" },
        image: "/images/crocus.jpg",
        imageCaption: { el: "«Αποφασίσατε. Φοβάστε να το πείτε δυνατά.»", en: "\"You decided. You're afraid to say it out loud.\"" },
        text: {
          el: `Ο Crocus έκανε δύο βήματα μέσα στο δωμάτιο. Κάθε βήμα ακουγόταν σαν τύμπανο. Έσκυψε πάνω από τα σκορπισμένα χαρτιά και τα μελέτησε για… περίπου τρία δευτερόλεπτα.

«Τι φτιάχνετε;»

Η Ελευθερία πήρε βαθιά ανάσα, όπως πριν από διαγώνισμα. «Λοιπόν. Η αρχική ιδέα ήταν να κατασκευάσουμε ένα ρομπότ, αλλά υπάρχουν δεκαεπτά παράμετροι που πρέπει πρώτα να—»

«Τέλειο. ΠΑΜΕ.»

«Περίμενε!» φώναξε η Ελευθερία. «Δεν τελείωσα! Δεν έχουμε αποφασίσει ακόμα!»

Ο Crocus γέλασε. Ζεστά, βαθιά, σαν μηχανή που παίρνει μπροστά μια παγωμένη μέρα. Έσκυψε και κοίταξε τα τρία παιδιά στα μάτια, έναν έναν, με τα στραβά γυαλιά του να γλιστράνε στη μύτη.

«Αποφασίσατε εδώ και ώρες. Απλώς φοβάστε να το πείτε δυνατά. Γιατί μόλις το πεις δυνατά… πρέπει να το κάνεις.»

Τα παιδιά κοιτάχτηκαν. Κανείς δεν διαφώνησε. Πώς να διαφωνήσεις με την αλήθεια;

Τότε η WiseBot πλησίασε αργά, με τα μωβ μάτια της σταθερά. «Η σκέψη είναι δύναμη», είπε ήρεμα. «Χωρίς σκέψη, η δράση είναι χαοτική.»

Ο Crocus σταύρωσε τα χέρια. «Και η απόφαση χωρίς κίνηση, σοφή μου κουκουβάγια, είναι θέατρο. Ωραίο, συγκινητικό… και άχρηστο.»

Οι δυο τους κοιτάχτηκαν. Δύο κόσμοι σε ένα δωμάτιο. Η μία σταθερή σαν βράχος, με μάτια που ζύγιζαν τα πάντα. Ο άλλος αδύνατον να μείνει ακίνητος, με ουρά που χτυπούσε το πάτωμα ανυπόμονα.

Και το πιο παράξενο; Είχαν δίκιο και οι δύο.`,
          en: `Crocus took two steps into the room. Each step sounded like a drum. He leaned over the scattered papers and studied them for… roughly three seconds.

"What are you making?"

Eleftheria took a deep breath, the way you do before a big test. "Well. The original idea was to construct a robot, but there are seventeen parameters we must first—"

"Perfect. LET'S GO."

"Wait!" cried Eleftheria. "I wasn't finished! We haven't decided yet!"

Crocus laughed. Warm and deep, like an engine starting up on a frozen morning. He leaned down and looked all three children in the eyes, one by one, his crooked glasses sliding down his nose.

"You decided hours ago. You're just afraid to say it out loud. Because the moment you say it out loud… you have to do it."

The children looked at each other. Nobody argued. How do you argue with the truth?

Then WiseBot approached slowly, her purple eyes steady. "Thought is power," she said calmly. "Without thought, action is chaos."

Crocus crossed his arms. "And decision without movement, my wise owl, is theater. Beautiful, moving… and useless."

The two of them stared at each other. Two worlds in one room. One steady as a rock, with eyes that weighed everything. The other incapable of standing still, his tail tapping the floor impatiently.

And the strangest part? They were both right.`
        }
      },
      {
        title: { el: "Το Πρώτο Βήμα", en: "The First Step" },
        image: "/images/filippos.webp",
        imageCaption: { el: "Δεν ήταν τέλειο. Αλλά υπήρχε.", en: "It wasn't perfect. But it existed." },
        text: {
          el: `Η Αλεξάνδρα κοίταξε τη WiseBot. Ένιωσε ασφαλής — όπως νιώθεις κάτω από μια ζεστή κουβέρτα. Μετά κοίταξε τον Crocus. Ένιωσε ζωντανή — όπως νιώθεις όταν τρέχεις στη βροχή.

Και ξαφνικά κατάλαβε.

«Και οι δύο έχετε δίκιο», είπε. Η φωνή της βγήκε πιο δυνατή απ' ό,τι περίμενε, και αυτό της άρεσε.

«Αν δεν ξεκινήσουμε, δεν θα μάθουμε ποτέ», συμπλήρωσε ο Φίλιππος, σηκώνοντας ένα κομμάτι από το τραπέζι.

«Αλλά αν ξεκινήσουμε εντελώς χωρίς σκέψη, θα χαθούμε», είπε η Ελευθερία. Και μετά, προς έκπληξη όλων, έκλεισε το βιβλίο της. «Οπότε… ξεκινάμε με λίγη σκέψη. Και βλέπουμε.»

Ο Crocus χαμογέλασε πλατιά. Αυτή τη φορά όχι σαν πρόσκληση — σαν περηφάνια. «Τώρα μιλάτε σωστά.»

Δούλεψαν όλο το απόγευμα. Δεν έφτιαξαν κάτι μεγάλο — ας μην λέμε ψέματα, η ιστορία μας δεν είναι παραμύθι με μαγικά ραβδιά. Έφτιαξαν ένα απλό κομμάτι. Μια βάση. Μια δοκιμή. Ένα πρώτο, τρεμάμενο βήμα, σαν μωρό που πατάει για πρώτη φορά στο πάτωμα και δεν ξέρει αν θα σταθεί.

Ο Φίλιππος το σήκωσε και το κράτησε στις παλάμες του, προσεκτικά, σαν πουλάκι. «Δεν είναι τέλειο», είπε σιγά. Ήταν στραβό από τη μία μεριά και η κόλλα φαινόταν.

«Ούτε πρέπει», είπε ο Crocus, και για μια στιγμή η φωνή του έγινε απαλή. «Θυμήσου το αυτό, μικρέ. Δεν χρειάζεται να είναι τέλειο. Χρειάζεται να υπάρχει. Πρώτα η κίνηση — η τελειότητα έρχεται μετά. Πάντα μετά.»`,
          en: `Alexandra looked at WiseBot. She felt safe — the way you feel under a warm blanket. Then she looked at Crocus. She felt alive — the way you feel when you run through the rain.

And suddenly she understood.

"You're both right," she said. Her voice came out louder than she expected, and she liked that.

"If we don't start, we'll never learn," added Philippos, picking a piece up from the table.

"But if we start with no thinking at all, we'll get lost," said Eleftheria. And then, to everyone's surprise, she closed her book. "So… we start with a little thinking. And we see."

Crocus smiled widely. This time not like an invitation — like pride. "Now you're talking."

They worked all afternoon. They didn't build anything big — let's be honest, this story is not a fairy tale with magic wands. They built one simple piece. A base. A test. A first, trembling step, like a baby standing on the floor for the very first time, unsure if it will hold.

Philippos lifted it and held it in his palms, carefully, like a little bird. "It's not perfect," he said quietly. It leaned to one side and you could see the glue.

"Nor should it be," said Crocus, and for a moment his voice went soft. "Remember this, kid. It doesn't need to be perfect. It needs to exist. Movement first — perfection comes later. Always later."`
        }
      },
      {
        title: { el: "Η Κατεύθυνση", en: "The Direction" },
        image: "/images/paidia-kai-wisebot.webp",
        imageCaption: { el: "Τώρα μιλάτε σαν δημιουργοί.", en: "Now you talk like creators." },
        text: {
          el: `Φυσικά, κάτι δεν δούλεψε. Πάντα κάτι δεν δουλεύει.

Ένα κομμάτι ξεκόλλησε με ένα λυπητερό «κρατς». Ένα κύκλωμα δεν έκλεισε — το λαμπάκι που έπρεπε να ανάψει έμεινε σκοτεινό, πεισματάρικο.

«Σας τα έλεγα!» πετάχτηκε η Ελευθερία, δείχνοντας το χαλασμένο σημείο. «Αν είχαμε σκεφτεί λίγο ακόμα—»

«Αν δεν ξεκινούσαμε», την έκοψε ο Φίλιππος, «δεν θα ξέραμε ΠΟΤΕ πού χαλάει! Τώρα ξέρουμε! Εδώ! Ακριβώς εδώ!» Χτύπησε το σημείο με το δάχτυλο, σχεδόν χαρούμενος.

Η Αλεξάνδρα μπήκε ανάμεσά τους με τα χέρια ανοιχτά. «ΣΤΟΠ. Ακούστε τι είπαμε μόλις. Ξεκινήσαμε. Και μάθαμε. Αυτό ακριβώς θέλαμε.»

Η WiseBot, από τη γωνία της, έλαμψε ξαφνικά — ένα κύμα μωβ φως, σαν να πατήθηκε ένα κρυφό κουμπί. Σαν κάτι μέσα στα παιδιά να ξεκλειδώθηκε και εκείνη να το κατέγραψε.

Το βράδυ, τα χαρτιά στο τραπέζι ήταν περισσότερα από ποτέ. Αλλά αυτή τη φορά δεν ήταν πιο καθαρά — ήταν πιο αληθινά. Είχαν λεκέδες από κόλλα, σβησμένα σημεία, δαχτυλιές, μια τρύπα εκεί που ο Φίλιππος πάτησε το μολύβι πολύ δυνατά. Είχαν ζωή. Και μέσα στο χάος τους, για πρώτη φορά, υπήρχε κατεύθυνση.

Ο Crocus στάθηκε στο κατώφλι και κοίταξε πίσω του: τρία παιδιά σκυμμένα πάνω από ένα ατελές, στραβό, υπέροχο πρώτο βήμα.

«Τώρα μιλάτε σαν δημιουργοί», είπε.

Και βγήκε. Η πόρτα δεν χτύπησε δυνατά αυτή τη φορά. Έκλεισε σιγά, απαλά. Σαν υπόσχεση ότι θα ξαναρθεί — όποτε ξαναχρειαστούν ένα «ΠΑΜΕ».`,
          en: `Of course, something didn't work. Something always doesn't.

A piece came unstuck with a sad little "crack." A circuit refused to close — the small light that was supposed to shine stayed dark, stubborn.

"I told you!" Eleftheria burst out, pointing at the broken spot. "If we had thought a little longer—"

"If we hadn't started," Philippos cut in, "we would NEVER have known where it breaks! Now we know! Here! Right here!" He tapped the spot with his finger, almost cheerful about it.

Alexandra stepped between them with her arms spread wide. "STOP. Listen to what we just said. We started. And we learned. That's exactly what we wanted."

WiseBot, from her corner, suddenly glowed — a wave of purple light, as if a hidden button had been pressed. As if something inside the children had unlocked, and she had recorded the moment.

That night, there were more papers on the table than ever. But this time they weren't cleaner — they were truer. They had glue stains, erased corners, fingerprints, a hole where Philippos had pressed his pencil too hard. They had life in them. And inside their chaos, for the first time, there was direction.

Crocus paused in the doorway and looked back: three children bent over an imperfect, crooked, wonderful first step.

"Now you talk like creators," he said.

And he left. The door didn't slam this time. It closed slowly, gently. Like a promise that he would return — whenever they needed another "LET'S GO."`
        }
      }
    ]
  }
];
