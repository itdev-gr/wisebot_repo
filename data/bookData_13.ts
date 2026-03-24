
import { Book } from '../types';

// ============================================================
// BOOK 13: ΔΕΝ ΤΑ ΠΑΡΑΤΑΜΕ / WE DON'T QUIT
// Hero: Crocus & Team
// Theme: ΕΠΙΜΟΝΗ / PERSISTENCE
// ============================================================

export const BOOK_13: Book[] = [
  {
    id: 13,
    title: { el: "ΔΕΝ ΤΑ ΠΑΡΑΤΑΜΕ", en: "WE DON'T QUIT" },
    theme: { el: "ΕΠΙΜΟΝΗ", en: "PERSISTENCE" },
    stepLabel: { el: "CROCUS & Η ΕΠΙΜΟΝΗ", en: "CROCUS & PERSISTENCE" },
    author: "Wisebot & Crocus",
    cover: "/images/crocus.jpg",
    videoUrl: "",
    description: {
      el: "Όλα πάνε στραβά. Ο πειρασμός να τα παρατήσουν είναι μεγάλος. Μια ιστορία για τη δύναμη του «ακόμα μία φορά».",
      en: "Everything goes wrong. The temptation to quit is huge. A story about the power of 'one more time'."
    },
    meaning: {
      el: "Δεν χάνεις όταν πέφτεις. Χάνεις όταν μένεις κάτω.",
      en: "You don't lose when you fall. You lose when you stay down."
    },
    xp: 230,
    parentMessage: {
      el: "Όταν ένα παιδί λέει «δεν μπορώ», σπάνια εννοεί ότι δεν έχει ικανότητα. Εννοεί ότι ο πόνος της αποτυχίας είναι μεγαλύτερος από τη χαρά της προσπάθειας. Μην πείτε «προσπάθησε πιο πολύ». Πείτε: «Ξέρω ότι πονάει. Θες να δοκιμάσουμε μαζί ακόμα μία φορά;» Η επιμονή δεν χτίζεται με πίεση — χτίζεται με συντροφικότητα στις δύσκολες στιγμές.",
      en: "When a child says 'I can't', they rarely mean they lack ability. They mean the pain of failure is greater than the joy of trying. Don't say 'try harder'. Say: 'I know it hurts. Do you want to try together one more time?' Persistence is not built with pressure — it's built with companionship in difficult moments."
    },

    // ── STRUCTURED PAGES (5 pages) ──────────────────────
    pages: [
      {
        title: { el: "Όλα Πάνε Στραβά", en: "Everything Goes Wrong" },
        image: "/images/ta-3-paidia.webp",
        imageCaption: { el: "Τρία παιδιά. Χίλια bugs. Μηδέν ελπίδα.", en: "Three kids. A thousand bugs. Zero hope." },
        text: {
          el: `Ξεκίνησε με ένα μικρό σφάλμα. Ένα κόκκινο μήνυμα στην οθόνη. Τέσσερις λέξεις: «Σφάλμα. Αποτυχία σύνδεσης. Δοκιμάστε ξανά.»

«Εντάξει», είπε ο Φίλιππος χαμογελώντας. «Μικρό πράγμα. Το φτιάχνω σε δύο λεπτά.»

Δεν το έφτιαξε σε δύο λεπτά. Ούτε σε δέκα. Ούτε σε τριάντα. Κάθε φορά που διόρθωνε κάτι, κάτι άλλο χαλούσε. Σαν ντόμινο — μόνο που τα κομμάτια δεν έπεφταν σε σειρά. Έπεφταν παντού.

Η Αλεξάνδρα δούλευε στο σχεδιαστικό κομμάτι. Τα χρώματα ήταν λάθος. Οι γραμμές δεν ευθυγραμμίζονταν. Το σχέδιο που είχε στο μυαλό της ήταν όμορφο — αυτό που έβλεπε μπροστά της ήταν χάος.

«Δεν μοιάζει καθόλου», ψιθύρισε, κοιτάζοντας το αποτέλεσμα σαν να την πρόσβαλε.

Η Ελευθερία είχε ξαναγράψει το κείμενο τέσσερις φορές. Τέσσερις. Κάθε εκδοχή χειρότερη από την προηγούμενη. Οι λέξεις που πριν κυλούσαν σαν ποτάμι, τώρα κολλούσαν στα δάχτυλά της σαν λάσπη.

Το εργαστήριο — που τόσες φορές είχε γεμίσει με ενέργεια και γέλια — τώρα μύριζε αποτυχία. Και η αποτυχία έχει μια πολύ συγκεκριμένη μυρωδιά: μοιάζει με σιωπή που πονάει.`,
          en: `It started with a small error. A red message on the screen. Four words: "Error. Connection failed. Try again."

"Okay," said Philippos with a smile. "Small thing. I'll fix it in two minutes."

He didn't fix it in two minutes. Or ten. Or thirty. Every time he fixed something, something else broke. Like dominoes — except the pieces didn't fall in a line. They fell everywhere.

Alexandra was working on the design part. The colors were wrong. The lines wouldn't align. The design she had in her mind was beautiful — what she saw in front of her was chaos.

"It doesn't look right at all," she whispered, staring at the result as if it had insulted her.

Eleftheria had rewritten the text four times. Four. Each version worse than the last. The words that once flowed like a river now stuck to her fingers like mud.

The workshop — which had so many times been filled with energy and laughter — now smelled of failure. And failure has a very specific smell: it smells like silence that hurts.`
        }
      },
      {
        title: { el: "Ο Πειρασμός Να Σταματήσεις", en: "The Temptation To Quit" },
        image: "/images/filippos.webp",
        imageCaption: { el: "Ο Φίλιππος μπροστά στο αδιέξοδο", en: "Philippos facing the dead end" },
        text: {
          el: `Ο Φίλιππος χτύπησε τα χέρια του στο τραπέζι. Δυνατά. Τόσο δυνατά που τα ποτήρια κουνήθηκαν και ο Crocus πετάχτηκε στον αέρα.

«ΔΕΝ ΓΙΝΕΤΑΙ!» φώναξε. Η φωνή του αντήχησε στους τοίχους, σαν βροντή σε άδειο δωμάτιο. «Κάθε φορά που φτιάχνω κάτι, χαλάει κάτι άλλο. Είναι σαν να πολεμάω σκιές!»

Η Αλεξάνδρα ακούμπησε τον στυλό. Αργά. Προσεκτικά. Σαν να τον αποχαιρετούσε. «Ίσως δεν είμαστε τόσο καλοί όσο νομίζαμε», είπε ήρεμα. Και εκείνη η ηρεμία ήταν χειρότερη από οποιαδήποτε κραυγή — γιατί δεν ήταν ηρεμία γαλήνης. Ήταν ηρεμία παράδοσης.

Η Ελευθερία δεν μίλησε. Έκλεισε το τετράδιό της. Ο ήχος — μικρός, ξερός, τελειωτικός — ήταν σαν πόρτα που κλείνει. Σαν κεφάλαιο που τελειώνει χωρίς happy ending.

«Ίσως πρέπει να σταματήσουμε», είπε η Αλεξάνδρα. Η λέξη «σταματήσουμε» βγήκε εύκολα. Πολύ εύκολα. Σαν να την περίμενε στα χείλη της εδώ και ώρα.

Ο Φίλιππος κοίταξε τη θάλασσα από σφάλματα στην οθόνη. Κόκκινα μηνύματα, ένα πάνω στο άλλο, σαν τοίχος από τούβλα. «Ναι», είπε αργά. «Ίσως πρέπει.»

Και για μια στιγμή, η απόφαση φάνηκε σωστή. Η παραίτηση φάνηκε λογική. Γιατί ο πειρασμός να τα παρατήσεις δεν φαίνεται ποτέ σαν αδυναμία — φαίνεται σαν σοφία. Και αυτό τον κάνει τόσο επικίνδυνο.`,
          en: `Philippos slammed his hands on the table. Hard. So hard that the glasses shook and Crocus jumped into the air.

"IT'S IMPOSSIBLE!" he shouted. His voice echoed off the walls like thunder in an empty room. "Every time I fix something, something else breaks. It's like fighting shadows!"

Alexandra set down her pen. Slowly. Carefully. As if saying goodbye. "Maybe we're not as good as we thought," she said calmly. And that calmness was worse than any scream — because it wasn't the calm of peace. It was the calm of surrender.

Eleftheria didn't speak. She closed her notebook. The sound — small, dry, final — was like a door closing. Like a chapter ending without a happy ending.

"Maybe we should stop," said Alexandra. The word "stop" came out easily. Too easily. As if it had been waiting on her lips for a long time.

Philippos looked at the sea of errors on the screen. Red messages, one on top of the other, like a wall made of bricks. "Yes," he said slowly. "Maybe we should."

And for a moment, the decision felt right. Quitting felt logical. Because the temptation to give up never looks like weakness — it looks like wisdom. And that is what makes it so dangerous.`
        }
      },
      {
        title: { el: "Ο Crocus Θυμάται", en: "Crocus Remembers" },
        image: "/images/paidia-kai-crocus.webp",
        imageCaption: { el: "Ο Crocus μοιράζεται κάτι που δεν είχε πει ποτέ", en: "Crocus shares something he had never told" },
        text: {
          el: `Ο Crocus δεν φώναξε. Δεν πετάχτηκε. Δεν χτύπησε τα χέρια του. Κάθισε ανάμεσά τους — αργά, βαριά, σαν κάποιος που κουβαλάει αναμνήσεις.

«Ξέρετε πόσες φορές απέτυχα εγώ;» ρώτησε. Η φωνή του ήταν χαμηλή — τόσο χαμηλή που τα παιδιά έπρεπε να σκύψουν για να ακούσουν.

Κανείς δεν απάντησε. Ο Crocus δεν αποτυγχάνει ποτέ — αυτό νόμιζαν. Ο Crocus πάντα βρίσκει λύση. Πάντα χοροπηδά. Πάντα γελά.

«Εκατόν σαράντα τρεις φορές», είπε. «Μέτρησα. Εκατόν σαράντα τρεις αποτυχίες πριν βρω τη δική μου φωνή. Εκατόν σαράντα τρεις κόκκινα μηνύματα. Εκατόν σαράντα τρεις φορές "δεν γίνεται".»

Τα πράσινα μάτια του δεν έλαμπαν χαρούμενα τώρα. Έλαμπαν αλλιώς — με κάτι πιο βαθύ, πιο σκοτεινό, πιο αληθινό.

«Και ξέρετε ποια ήταν η διαφορά; Η εκατοστή σαρακοστή τέταρτη. Η τελευταία. Αυτή που είπα: ακόμα μία φορά. Όχι γιατί πίστευα ότι θα πετύχει. Αλλά γιατί δεν μπορούσα να ζήσω με την ιδέα ότι σταμάτησα μία προσπάθεια πριν τη νίκη.»

Η Ελευθερία τον κοίταξε με μάτια υγρά. «Και αν δεν πετύχαινε;»

Ο Crocus χαμογέλασε — ένα χαμόγελο ήρεμο, χωρίς θόρυβο. «Τότε θα ήταν η εκατοστή σαρακοστή πέμπτη. Και μετά η εκατοστή σαρακοστή έκτη. Δεν σταματάς γιατί πονάει. Σταματάς μόνο αν σταματήσεις να νοιάζεσαι. Και εσείς — νοιάζεστε ακόμα. Το βλέπω.»`,
          en: `Crocus didn't yell. He didn't jump. He didn't clap his hands. He sat among them — slowly, heavily, like someone carrying memories.

"Do you know how many times I failed?" he asked. His voice was low — so low that the children had to lean in to hear.

No one answered. Crocus never fails — that's what they thought. Crocus always finds a solution. Always bounces. Always laughs.

"One hundred and forty-three times," he said. "I counted. One hundred and forty-three failures before I found my own voice. One hundred and forty-three red messages. One hundred and forty-three times hearing 'it's impossible'."

His green eyes weren't shining happily now. They shone differently — with something deeper, darker, more real.

"And do you know what the difference was? The one hundred and forty-fourth. The last one. The one where I said: one more time. Not because I believed it would work. But because I couldn't live with the idea that I stopped one try before the win."

Eleftheria looked at him with wet eyes. "And if it hadn't worked?"

Crocus smiled — a calm smile, without noise. "Then it would have been the one hundred and forty-fifth. And then the one hundred and forty-sixth. You don't stop because it hurts. You only stop if you stop caring. And you — you still care. I can see it."`
        }
      },
      {
        title: { el: "Ακόμα Μία Φορά", en: "One More Time" },
        image: "/images/paidia-kai-wisebot.webp",
        imageCaption: { el: "Η WiseBot φωτίζει τον δρόμο μπροστά", en: "WiseBot lights the path ahead" },
        text: {
          el: `Η WiseBot εμφανίστηκε σιωπηλά. Τα μωβ μάτια της σάρωσαν το δωμάτιο — τα σπασμένα σχέδια, τις κόκκινες οθόνες, τα κλειστά τετράδια. Είδε τα πάντα. Κατάλαβε τα πάντα.

«Πονάτε», είπε απλά. Δεν ήταν ερώτηση.

Ο Φίλιππος ένευσε. Η Αλεξάνδρα δάγκωσε τα χείλη. Η Ελευθερία κοίταξε αλλού.

«Η αποτυχία δεν είναι τοίχος», είπε η WiseBot. Τα μάτια της πήραν ένα βαθύ μωβ χρώμα, σαν ουρανός πριν το ξημέρωμα. «Είναι πόρτα. Αλλά ανοίγει μόνο αν χτυπήσεις αρκετές φορές.»

Ο Φίλιππος σήκωσε το κεφάλι. «Πόσες φορές;»

«Μία παραπάνω από αυτές που αντέχεις.»

Η Αλεξάνδρα πήρε τον στυλό ξανά. Αργά. Τα δάχτυλά της ήταν βαριά, αλλά δεν ήταν νεκρά. Κοίταξε το σχέδιο. Κοίταξε τα λάθη. Και αντί να τα σβήσει — τα μελέτησε. Για πρώτη φορά δεν είδε αποτυχία. Είδε πληροφορία.

«Αυτό εδώ δεν δουλεύει γιατί η αναλογία είναι λάθος», είπε, και η φωνή της είχε κάτι καινούργιο μέσα. Ανακάλυψη.

Ο Φίλιππος γύρισε στην οθόνη. Τα κόκκινα σφάλματα ήταν ακόμα εκεί. Αλλά τώρα τα διάβασε — πραγματικά τα διάβασε. Κάθε σφάλμα του έλεγε κάτι. Κάθε bug ήταν ένα μάθημα ντυμένο στα κόκκινα.

Η Ελευθερία άνοιξε ξανά το τετράδιο. Σελίδα καθαρή. Αλλά αυτή τη φορά δεν ξεκίνησε από την αρχή. Πήρε τις τέσσερις αποτυχημένες εκδοχές και βρήκε μία πρόταση από κάθε μία που άξιζε. Τέσσερις προτάσεις. Αρκετές για μια αρχή.

«Ακόμα μία φορά», ψιθύρισε ο Crocus. Και αυτή τη φορά, τρία ζευγάρια χέρια κινήθηκαν μαζί.`,
          en: `WiseBot appeared silently. Her purple eyes scanned the room — the broken designs, the red screens, the closed notebooks. She saw everything. She understood everything.

"You are hurting," she said simply. It wasn't a question.

Philippos nodded. Alexandra bit her lips. Eleftheria looked away.

"Failure is not a wall," said WiseBot. Her eyes turned a deep purple, like a sky before dawn. "It is a door. But it only opens if you knock enough times."

Philippos raised his head. "How many times?"

"One more than you think you can bear."

Alexandra picked up the pen again. Slowly. Her fingers were heavy, but they weren't dead. She looked at the design. Looked at the mistakes. And instead of erasing them — she studied them. For the first time, she didn't see failure. She saw information.

"This part doesn't work because the ratio is wrong," she said, and her voice had something new in it. Discovery.

Philippos turned back to the screen. The red errors were still there. But now he read them — really read them. Each error was telling him something. Each bug was a lesson dressed in red.

Eleftheria opened her notebook again. Clean page. But this time she didn't start from scratch. She took the four failed versions and found one sentence from each that was worth keeping. Four sentences. Enough for a beginning.

"One more time," whispered Crocus. And this time, three pairs of hands moved together.`
        }
      },
      {
        title: { el: "Ο Τοίχος Σπάει", en: "The Wall Breaks" },
        image: "/images/paidia-wisebot-2.webp",
        imageCaption: { el: "Ο τοίχος έσπασε. Η επιμονή νίκησε.", en: "The wall broke. Persistence won." },
        text: {
          el: `Δεν ήρθε σαν κεραυνός. Δεν ήρθε σαν θαύμα. Ήρθε σαν αυγή — αργά, σιγά, σχεδόν αθόρυβα.

Ο Φίλιππος έτρεξε τον κώδικα. Η οθόνη έμεινε μαύρη για ένα δευτερόλεπτο. Δύο. Τρία. Κανείς δεν ανέπνεε. Και τότε — πράσινο. Ένα μικρό, φωτεινό, μαγικό πράσινο μήνυμα: «Επιτυχία.»

Κοίταξε τα άλλα δύο παιδιά. Κοίταξε τον Crocus. Τα πράσινα μάτια του κροκόδειλου γυάλιζαν σαν σμαράγδια.

Η Αλεξάνδρα κρατούσε το σχέδιο ψηλά. Δεν ήταν τέλειο — είχε ακόμα γρατζουνιές, σημάδια γόμας, δάχτυλα λερωμένα. Αλλά ήταν αληθινό. Ήταν αυτό που ήθελε να πει. Και αυτό αρκούσε παραπάνω.

Η Ελευθερία διάβασε τις τελευταίες της γραμμές σιωπηλά. Χαμογέλασε. Ένα χαμόγελο μικρό, κουρασμένο, αλλά πραγματικό. «Αυτό είναι», ψιθύρισε.

«Ο τοίχος έσπασε», είπε ο Crocus. Η φωνή του ήταν ζεστή σαν ήλιος τον χειμώνα. «Όχι γιατί ήσασταν πιο δυνατοί από αυτόν. Αλλά γιατί δεν σταματήσατε να χτυπάτε.»

Η WiseBot πάλλονταν απαλά. «Θυμηθείτε αυτή τη στιγμή», είπε. «Όχι τη στιγμή της επιτυχίας. Τη στιγμή πριν. Τη στιγμή που θέλατε να φύγετε — και μείνατε. Εκείνη ήταν η πραγματική νίκη.»

Ο Φίλιππος κοίταξε τις παλάμες του — γεμάτες σημάδια από ώρες δουλειάς. Χαμογέλασε. «Δεν χάνεις όταν πέφτεις», είπε αργά, σαν να ανακάλυπτε μια αλήθεια εκείνη ακριβώς τη στιγμή. «Χάνεις μόνο όταν μένεις κάτω.»

Ο Crocus χοροπήδησε ψηλά. Τα μάτια του γέμισαν φως. «Αυτό, παιδιά! Ακόμα μία φορά. Πάντα ακόμα μία φορά. Γιατί ποτέ δεν ξέρεις αν η επόμενη προσπάθεια είναι αυτή που θα αλλάξει τα πάντα.»

Έξω, ο ήλιος χαμήλωσε. Μέσα στο εργαστήριο, τρία παιδιά και ένας κροκόδειλος καθόταν σιωπηλά — όχι από κούραση αυτή τη φορά. Από ειρήνη. Από εκείνη τη γαλήνη που έρχεται μόνο μετά τη θύελλα. Μετά τα σπασίματα. Μετά το «ακόμα μία φορά» που αποδείχτηκε η σωστή.`,
          en: `It didn't come like lightning. It didn't come like a miracle. It came like dawn — slowly, quietly, almost silently.

Philippos ran the code. The screen stayed black for a second. Two. Three. No one was breathing. And then — green. A small, bright, magical green message: "Success."

He looked at the other two children. He looked at Crocus. The crocodile's green eyes gleamed like emeralds.

Alexandra held up the design. It wasn't perfect — it still had scratches, eraser marks, smudged fingers. But it was real. It was what she wanted to say. And that was more than enough.

Eleftheria read her last lines silently. She smiled. A small smile, tired, but real. "This is it," she whispered.

"The wall broke," said Crocus. His voice was warm like winter sun. "Not because you were stronger than it. But because you didn't stop knocking."

WiseBot pulsed softly. "Remember this moment," she said. "Not the moment of success. The moment before. The moment you wanted to leave — and you stayed. That was the real victory."

Philippos looked at his palms — full of marks from hours of work. He smiled. "You don't lose when you fall," he said slowly, as if discovering a truth at that very moment. "You only lose when you stay down."

Crocus bounced high. His eyes filled with light. "That's it! One more time. Always one more time. Because you never know if the next try is the one that will change everything."

Outside, the sun dipped low. Inside the workshop, three children and a crocodile sat quietly — not from exhaustion this time. From peace. From that calm that only comes after the storm. After the breaking. After the "one more time" that turned out to be the right one.`
        }
      }
    ]
  }
];
