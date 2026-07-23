
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
          el: `Όλα ξεκίνησαν με ένα μικρό σφάλμα. Ένα κόκκινο μηνυματάκι στη μέση της οθόνης. Τέσσερις λέξεις μόνο: «Σφάλμα. Αποτυχία σύνδεσης. Δοκιμάστε ξανά.»

«Εντάξει», είπε ο Φίλιππος με σιγουριά και χαμογέλασε. «Μικρό πράγμα. Το φτιάχνω σε δύο λεπτά.»

Δεν το έφτιαξε σε δύο λεπτά. Ούτε σε δέκα. Ούτε σε τριάντα. Πέρασε ολόκληρη ώρα, και κάθε φορά που διόρθωνε κάτι, κάτι άλλο χαλούσε πίσω του. Σαν ντόμινο — μόνο που τα κομμάτια δεν έπεφταν σε μια ωραία, τακτική σειρά. Έπεφταν παντού, άτακτα, το ένα πάνω στο άλλο.

Στην άλλη άκρη του τραπεζιού, η Αλεξάνδρα πάλευε με το σχεδιαστικό κομμάτι. Τα χρώματα έβγαιναν λάθος, θαμπά και μουντά. Οι γραμμές δεν ευθυγραμμίζονταν με τίποτα, όσο κι αν τις τραβούσε ξανά και ξανά. Το σχέδιο που είχε στο μυαλό της ήταν φωτεινό και όμορφο — αυτό που έβλεπε μπροστά της ήταν ένα μπερδεμένο χάος.

«Δεν μοιάζει καθόλου με αυτό που ονειρεύτηκα», ψιθύρισε, κοιτάζοντας το χαρτί σαν να την είχε προσβάλει προσωπικά.

Η Ελευθερία, σκυμμένη πάνω από το τετράδιό της, είχε ξαναγράψει το κείμενο τέσσερις φορές. Τέσσερις! Και κάθε εκδοχή έμοιαζε χειρότερη από την προηγούμενη. Οι λέξεις που άλλοτε κυλούσαν σαν καθαρό ποτάμι, τώρα κολλούσαν στα δάχτυλά της σαν πηχτή λάσπη.

Το εργαστήριο — που τόσες φορές είχε γεμίσει με ενέργεια, μουσική και γέλια — τώρα μύριζε αποτυχία. Και η αποτυχία, αν δεν το ξέρετε, έχει μια πολύ συγκεκριμένη μυρωδιά: μυρίζει σαν σιωπή που πονάει.`,
          en: `It all began with one small error. A little red message right in the middle of the screen. Just four words: "Error. Connection failed. Try again."

"Okay," said Philippos with a confident smile. "Small thing. I'll have it fixed in two minutes."

He did not fix it in two minutes. Or in ten. Or in thirty. A whole hour crawled by, and every time he repaired one thing, something else broke somewhere behind it. It was like dominoes — except the pieces didn't fall in a neat, satisfying line. They fell everywhere, in every direction, one on top of another.

At the other end of the table, Alexandra was wrestling with the design. The colors came out wrong, dull and muddy. The lines refused to line up, no matter how many times she drew them again. The picture she carried in her mind was bright and beautiful — the thing on the paper in front of her was a tangled mess.

"It looks nothing like what I dreamed," she whispered, glaring at the page as if it had personally insulted her.

Eleftheria, bent over her notebook, had rewritten the text four times. Four! And each version somehow felt worse than the one before. The words that once flowed like a clear river now stuck to her fingers like thick mud.

And the workshop — the same workshop that had so often been filled with energy, music, and laughter — now smelled of failure. And failure, in case you didn't know, has a very particular smell: it smells like silence that hurts.`
        }
      },
      {
        title: { el: "Ο Πειρασμός Να Σταματήσεις", en: "The Temptation To Quit" },
        image: "/images/filippos.webp",
        imageCaption: { el: "Ο Φίλιππος μπροστά στο αδιέξοδο", en: "Philippos facing the dead end" },
        text: {
          el: `Ο Φίλιππος χτύπησε τις παλάμες του στο τραπέζι. Δυνατά. Τόσο δυνατά που τα ποτήρια κουνήθηκαν, δύο μολύβια κύλησαν στο πάτωμα και ο Crocus πετάχτηκε τρομαγμένος στον αέρα.

«ΔΕΝ ΓΙΝΕΤΑΙ!» φώναξε. Η φωνή του αντήχησε στους τοίχους, σαν βροντή σε άδειο δωμάτιο. «Κάθε φορά που φτιάχνω κάτι, χαλάει κάτι άλλο! Είναι σαν να πολεμάω σκιές! Πώς να νικήσεις κάτι που δεν μπορείς καν να δεις;»

Η Αλεξάνδρα ακούμπησε τον στυλό της στο τραπέζι. Αργά. Προσεκτικά. Σαν να τον αποχαιρετούσε για πάντα. «Ίσως δεν είμαστε τόσο καλοί όσο νομίζαμε», είπε ήρεμα. Και εκείνη η ηρεμία ήταν χειρότερη από οποιαδήποτε κραυγή — γιατί δεν ήταν ηρεμία γαλήνης. Ήταν ηρεμία παράδοσης.

Η Ελευθερία δεν μίλησε καθόλου. Έκλεισε απλώς το τετράδιό της. Ο ήχος που έκανε — μικρός, ξερός, τελειωτικός — ακούστηκε σαν πόρτα που κλείνει. Σαν κεφάλαιο που τελειώνει χωρίς χαρούμενο τέλος.

«Ίσως πρέπει να σταματήσουμε», είπε η Αλεξάνδρα κοιτάζοντας το πάτωμα. Η λέξη «σταματήσουμε» βγήκε από το στόμα της εύκολα. Πολύ εύκολα. Σαν να την περίμενε στα χείλη της εδώ και ώρες.

Ο Φίλιππος κοίταξε τη θάλασσα από σφάλματα στην οθόνη. Κόκκινα μηνύματα, το ένα πάνω στο άλλο, στοιβαγμένα σαν τοίχος από τούβλα. Ένας τοίχος που έμοιαζε να ψηλώνει κάθε λεπτό. «Ναι», είπε αργά, με μια φωνή που είχε αδειάσει. «Ίσως πρέπει.»

Και για μια στιγμή, η απόφαση φάνηκε σωστή. Η παραίτηση φάνηκε λογική, σχεδόν σοφή. Γιατί ο πειρασμός να τα παρατήσεις δεν εμφανίζεται ποτέ σαν αδυναμία — εμφανίζεται μεταμφιεσμένος σε σοφία. Και ακριβώς αυτό τον κάνει τόσο επικίνδυνο.`,
          en: `Philippos slammed his palms down on the table. Hard. So hard that the glasses rattled, two pencils rolled onto the floor, and Crocus shot into the air in fright.

"IT'S IMPOSSIBLE!" he shouted. His voice bounced off the walls like thunder in an empty room. "Every time I fix one thing, another thing breaks! It's like fighting shadows! How do you beat something you can't even see?"

Alexandra set her pen down on the table. Slowly. Carefully. As if she were saying goodbye to it forever. "Maybe we're not as good as we thought we were," she said calmly. And that calmness was worse than any scream — because it wasn't the calm of peace. It was the calm of surrender.

Eleftheria didn't say a word. She simply closed her notebook. The sound it made — small, dry, final — was like a door shutting. Like a chapter ending without a happy ending.

"Maybe we should stop," said Alexandra, staring at the floor. The word "stop" slipped out of her mouth easily. Far too easily. As if it had been waiting on her lips for hours.

Philippos looked at the sea of errors on the screen. Red messages stacked one on top of another, like a wall built of bricks. A wall that seemed to grow taller by the minute. "Yes," he said slowly, in a voice that had gone empty. "Maybe we should."

And for one moment, the decision felt right. Quitting felt logical, almost wise. Because the temptation to give up never shows itself as weakness — it arrives disguised as wisdom. And that is exactly what makes it so dangerous.`
        }
      },
      {
        title: { el: "Ο Crocus Θυμάται", en: "Crocus Remembers" },
        image: "/images/paidia-kai-crocus.webp",
        imageCaption: { el: "Ο Crocus μοιράζεται κάτι που δεν είχε πει ποτέ", en: "Crocus shares something he had never told" },
        text: {
          el: `Ο Crocus δεν φώναξε. Δεν χοροπήδησε. Δεν χτύπησε τα χέρια του όπως έκανε πάντα. Πλησίασε αργά και κάθισε ανάμεσά τους — βαριά, σαν κάποιος που κουβαλάει στην πλάτη του παλιές αναμνήσεις.

«Ξέρετε πόσες φορές απέτυχα εγώ;» ρώτησε. Η φωνή του ήταν χαμηλή — τόσο χαμηλή που τα τρία παιδιά έπρεπε να σκύψουν προς το μέρος του για να ακούσουν.

Κανείς δεν απάντησε. Ο Φίλιππος, η Αλεξάνδρα και η Ελευθερία κοιτάχτηκαν σαστισμένοι. Ο Crocus δεν αποτυγχάνει ποτέ — αυτό νόμιζαν πάντα. Ο Crocus πάντα βρίσκει λύση. Πάντα χοροπηδά. Πάντα γελά.

«Εκατόν σαράντα τρεις φορές», είπε. «Τις μέτρησα μία προς μία. Εκατόν σαράντα τρεις αποτυχίες πριν βρω τη δική μου φωνή. Εκατόν σαράντα τρία κόκκινα μηνύματα. Εκατόν σαράντα τρεις φορές που άκουσα μέσα μου εκείνη τη φωνούλα να λέει "δεν γίνεται".»

Τα πράσινα μάτια του δεν έλαμπαν χαρούμενα τώρα. Έλαμπαν αλλιώς — με κάτι πιο βαθύ, πιο σκοτεινό, πιο αληθινό.

«Και ξέρετε ποια ήταν η διαφορά; Η εκατοστή σαρακοστή τέταρτη φορά. Η τελευταία. Αυτή που είπα: ακόμα μία φορά. Όχι επειδή πίστευα ότι θα πετύχει. Αλλά επειδή δεν μπορούσα να ζήσω με την ιδέα ότι σταμάτησα μία μόνο προσπάθεια πριν από τη νίκη.»

Η Ελευθερία τον κοίταξε με μάτια υγρά. «Και αν δεν πετύχαινε ούτε τότε;» ρώτησε ψιθυριστά.

Ο Crocus χαμογέλασε — ένα χαμόγελο ήρεμο, ζεστό, χωρίς καθόλου θόρυβο. «Τότε θα ερχόταν η εκατοστή σαρακοστή πέμπτη. Και μετά η εκατοστή σαρακοστή έκτη. Δεν σταματάς επειδή πονάει. Σταματάς μόνο αν σταματήσεις να νοιάζεσαι. Και εσείς οι τρεις — νοιάζεστε ακόμα. Το βλέπω στα μάτια σας.»`,
          en: `Crocus didn't yell. He didn't bounce. He didn't clap his hands the way he always did. He walked over slowly and sat down among them — heavily, like someone carrying old memories on his back.

"Do you know how many times I have failed?" he asked. His voice was low — so low that the three children had to lean toward him just to hear it.

No one answered. Philippos, Alexandra, and Eleftheria exchanged puzzled looks. Crocus never fails — that's what they had always believed. Crocus always finds a way. Always bounces. Always laughs.

"One hundred and forty-three times," he said. "I counted them, one by one. One hundred and forty-three failures before I found my own voice. One hundred and forty-three red messages. One hundred and forty-three times I heard that little voice inside me whisper, 'it's impossible.'"

His green eyes weren't sparkling happily now. They shone differently — with something deeper, darker, more real.

"And do you know what made the difference? The one hundred and forty-fourth time. The last one. The one where I said: one more time. Not because I believed it would work. But because I couldn't live with the idea that I had stopped just one try before the win."

Eleftheria looked at him with wet eyes. "And what if it hadn't worked even then?" she whispered.

Crocus smiled — a calm, warm, quiet smile. "Then there would have been a one hundred and forty-fifth. And then a one hundred and forty-sixth. You don't stop because it hurts. You only stop if you stop caring. And you three — you still care. I can see it in your eyes."`
        }
      },
      {
        title: { el: "Ακόμα Μία Φορά", en: "One More Time" },
        image: "/images/paidia-kai-wisebot.webp",
        imageCaption: { el: "Η WiseBot φωτίζει τον δρόμο μπροστά", en: "WiseBot lights the path ahead" },
        text: {
          el: `Η WiseBot εμφανίστηκε σιωπηλά. Τα μωβ μάτια της σάρωσαν αργά το δωμάτιο — τα σπασμένα σχέδια, τις κόκκινες οθόνες, τα κλειστά τετράδια. Είδε τα πάντα. Κατάλαβε τα πάντα.

«Πονάτε», είπε απλά. Δεν ήταν ερώτηση.

Ο Φίλιππος ένευσε. Η Αλεξάνδρα δάγκωσε τα χείλη της. Η Ελευθερία κοίταξε αλλού.

«Η αποτυχία δεν είναι τοίχος», συνέχισε η WiseBot. Τα μάτια της πήραν ένα βαθύ μωβ χρώμα, σαν ουρανός λίγο πριν το ξημέρωμα. «Είναι πόρτα. Αλλά ανοίγει μόνο αν χτυπήσεις αρκετές φορές.»

Ο Φίλιππος σήκωσε το κεφάλι. «Πόσες φορές;»

«Μία παραπάνω από όσες νομίζεις ότι αντέχεις.»

Τότε, ένας χρυσός άνεμος μπήκε από το παράθυρο. Ο Sparken! Ο μεγάλος αετός προσγειώθηκε στο περβάζι, σκορπίζοντας σπίθες φωτός πάνω από τα παιδιά. «Σας έφερα κάτι που σας έλειψε», είπε με τη βαθιά φωνή του. «Κουράγιο. Είναι ήδη μέσα σας — εγώ ήρθα μόνο για να το ανάψω ξανά.»

Και κάτι πράγματι άναψε. Η Αλεξάνδρα πήρε τον στυλό ξανά. Κοίταξε το σχέδιο, κοίταξε τα λάθη — και αντί να τα σβήσει, τα μελέτησε. Για πρώτη φορά δεν είδε αποτυχία. Είδε πληροφορία. «Αυτό εδώ δεν δουλεύει γιατί η αναλογία είναι λάθος», είπε, και η φωνή της είχε κάτι καινούργιο μέσα της. Ανακάλυψη.

Ο Φίλιππος γύρισε στην οθόνη. Τα κόκκινα σφάλματα ήταν ακόμα εκεί, αλλά τώρα τα διάβασε — πραγματικά τα διάβασε. Κάθε σφάλμα του έλεγε κάτι. Κάθε bug ήταν ένα μάθημα ντυμένο στα κόκκινα.

Η Ελευθερία άνοιξε ξανά το τετράδιό της. Πήρε τις τέσσερις αποτυχημένες εκδοχές και βρήκε από καθεμιά μία πρόταση που άξιζε. Τέσσερις προτάσεις. Αρκετές για μια νέα αρχή.

«Ακόμα μία φορά», ψιθύρισε ο Crocus. Και αυτή τη φορά, τρία ζευγάρια χέρια κινήθηκαν μαζί.`,
          en: `WiseBot appeared silently. Her purple eyes slowly scanned the room — the broken designs, the red screens, the closed notebooks. She saw everything. She understood everything.

"You are hurting," she said simply. It was not a question.

Philippos nodded. Alexandra bit her lip. Eleftheria looked away.

"Failure is not a wall," WiseBot continued. Her eyes turned a deep purple, like a sky just before dawn. "It is a door. But it only opens if you knock enough times."

Philippos lifted his head. "How many times?"

"One more than you think you can bear."

Then a golden wind swept in through the window. Sparken! The great eagle landed on the windowsill, his wings scattering sparks of light over the children. "I brought you something you were missing," he said in his deep voice. "Courage. It is already inside you — I only came to light it again."

And something truly did light up. Alexandra picked up her pen again. She looked at the mistakes — and instead of erasing them, she studied them. For the first time, she didn't see failure. She saw information. "This part doesn't work because the ratio is wrong," she said, and her voice held something new. Discovery.

Philippos turned back to the screen. The red errors were still there, but now he read them — really read them. Every error was telling him something. Every bug was a lesson dressed in red.

Eleftheria opened her notebook again. She took the four failed versions and found one sentence in each worth keeping. Four sentences. Enough for a new beginning.

"One more time," whispered Crocus. And this time, three pairs of hands moved together.`
        }
      },
      {
        title: { el: "Ο Τοίχος Σπάει", en: "The Wall Breaks" },
        image: "/images/paidia-wisebot-2.webp",
        imageCaption: { el: "Ο τοίχος έσπασε. Η επιμονή νίκησε.", en: "The wall broke. Persistence won." },
        text: {
          el: `Δεν ήρθε σαν κεραυνός, ούτε σαν θαύμα. Ήρθε σαν αυγή — αργά, σιγά, σχεδόν αθόρυβα.

Ο Φίλιππος έτρεξε τον κώδικα. Η οθόνη έμεινε μαύρη. Ένα δευτερόλεπτο. Δύο. Τρία. Κανείς δεν ανέπνεε. Και τότε — πράσινο. Ένα μικρό, φωτεινό, μαγικό πράσινο μήνυμα: «Επιτυχία.»

Κοίταξε τα κορίτσια. Κοίταξε τον Crocus. Τα πράσινα μάτια του κροκόδειλου γυάλιζαν σαν σμαράγδια.

Η Αλεξάνδρα σήκωσε το σχέδιό της ψηλά. Δεν ήταν τέλειο — είχε γρατζουνιές, σημάδια γόμας, λερωμένες δαχτυλιές. Αλλά ήταν αληθινό. Έλεγε αυτό που ήθελε να πει. Και αυτό αρκούσε.

Η Ελευθερία διάβασε τις τελευταίες της γραμμές σιωπηλά. Χαμογέλασε. Ένα χαμόγελο μικρό, κουρασμένο, αλλά πραγματικό. «Αυτό είναι», ψιθύρισε.

«Ο τοίχος έσπασε», είπε ο Crocus. Η φωνή του ήταν ζεστή σαν χειμωνιάτικος ήλιος. «Όχι επειδή ήσασταν πιο δυνατοί από αυτόν. Αλλά επειδή δεν σταματήσατε να χτυπάτε.»

Η WiseBot πάλλονταν απαλά. «Θυμηθείτε αυτή τη στιγμή», είπε. «Όχι τη στιγμή της επιτυχίας. Τη στιγμή πριν. Τη στιγμή που θέλατε να φύγετε — και μείνατε. Εκείνη ήταν η πραγματική νίκη.» Από το περβάζι, ο Sparken έγνεψε περήφανα στους τρεις μικρούς νικητές.

Ο Φίλιππος κοίταξε τις παλάμες του — γεμάτες σημάδια από τη δουλειά. Χαμογέλασε. «Δεν χάνεις όταν πέφτεις», είπε αργά, σαν να ανακάλυπτε μια αλήθεια εκείνη τη στιγμή. «Χάνεις μόνο όταν μένεις κάτω.»

Ο Crocus χοροπήδησε ψηλά, με μάτια γεμάτα φως. «Αυτό, παιδιά! Ακόμα μία φορά. Πάντα ακόμα μία φορά. Γιατί ποτέ δεν ξέρεις αν η επόμενη προσπάθεια είναι αυτή που θα αλλάξει τα πάντα.»

Έξω, ο ήλιος χαμήλωσε. Μέσα στο εργαστήριο, τρία παιδιά και ένας κροκόδειλος κάθονταν σιωπηλά — όχι από κούραση αυτή τη φορά. Από ειρήνη. Από τη γαλήνη που έρχεται μόνο μετά τη θύελλα. Μετά το «ακόμα μία φορά» που αποδείχτηκε η σωστή.`,
          en: `It didn't arrive like lightning, or like a miracle. It came like dawn — slowly, quietly, almost silently.

Philippos ran the code. The screen stayed black. One second. Two. Three. Nobody breathed. And then — green. A small, bright, magical green message: "Success."

He looked at the girls. He looked at Crocus. The crocodile's green eyes gleamed like emeralds.

Alexandra lifted her design high. It wasn't perfect — it still had scratches, eraser marks, smudged fingerprints. But it was real. It said what she wanted to say. And that was enough.

Eleftheria read her final lines silently and smiled. A small smile, tired, but true. "This is it," she whispered.

"The wall broke," said Crocus, his voice warm like winter sunshine. "Not because you were stronger than it. But because you never stopped knocking."

WiseBot pulsed softly. "Remember this moment," she said. "Not the moment of success. The moment before. The moment you wanted to leave — and you stayed. That was the real victory." From the windowsill, Sparken nodded proudly at the three champions.

Philippos looked at his palms — covered in marks from the work. He smiled. "You don't lose when you fall," he said slowly, as if discovering a truth right then. "You only lose when you stay down."

Crocus bounced high, eyes full of light. "That's it! One more time. Always one more time. The next try might change everything."

Outside, the sun sank low. Inside the workshop, three children and a crocodile sat in silence — not from exhaustion this time. From peace. From the calm that only comes after the storm. After the "one more time" that turned out to be the right one.`
        }
      }
    ]
  }
];
