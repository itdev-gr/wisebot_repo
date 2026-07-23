
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

Το ρολόι του τοίχου ήταν ο μόνος ήχος στο δωμάτιο. Η Αλεξάνδρα ήταν ξαπλωμένη ανάσκελα στο πάτωμα, με τα χέρια ανοιχτά σαν αστερίας, μπροστά σε ένα μισοτελειωμένο παζλ πεντακοσίων κομματιών. Δεν το κοιτούσε καν. Κοιτούσε το ταβάνι και μετρούσε τις ρωγμές, μία προς μία, με βαριεστημένη προσοχή. Δεκατρείς. Τις είχε μετρήσει και χθες. Και προχθές. Πάντα δεκατρείς.

«Τελείωσες το παζλ;» φώναξε ο Φίλιππος από το σαλόνι.

«Ναι!» απάντησε γρήγορα η Αλεξάνδρα. Πολύ γρήγορα.

Ψέμα. Δεν είχε ακουμπήσει ούτε ένα κομμάτι. Ένιωσε ένα μικρό τσίμπημα στο στομάχι — αυτό το τσίμπημα που έρχεται πάντα μαζί με τα ψέματα. Αλλά τα ψέματα βγαίνουν εύκολα όταν κανείς δεν νοιάζεται αρκετά να ελέγξει. Και τελευταία, σκέφτηκε η Αλεξάνδρα, κανείς δεν έλεγχε τίποτα.

Κάθε μέρα ήταν ολόιδια με την προηγούμενη. Ξύπνημα, σχολείο, σπίτι, βαρεμάρα, ύπνος. Και πάλι από την αρχή. Σαν να ζούσε μέσα σε μια γκρίζα φυσαλίδα που ρουφούσε όλα τα χρώματα. Τίποτα ενδιαφέρον. Τίποτα σημαντικό. Τίποτα δικό της.

«Βαριέμαι», ψιθύρισε στο ταβάνι. Το ταβάνι, φυσικά, δεν απάντησε. Τα ταβάνια δεν απαντούν ποτέ.

Η Αλεξάνδρα δεν ήξερε ακόμα κάτι πολύ σημαντικό. Δεν ήξερε ότι η βαρεμάρα δεν ήταν το πρόβλημα. Η βαρεμάρα ήταν το σήμα. Το σήμα ότι μέσα της κοιμόταν κάτι μεγάλο — και ζητούσε, επιτέλους, να ξυπνήσει.`,
          en: `Tick. Tock. Tick. Tock.

The wall clock was the only sound in the room. Alexandra lay flat on her back on the floor, arms spread out like a starfish, in front of a half-finished puzzle of five hundred pieces. She wasn't even looking at it. She was staring at the ceiling, counting the cracks one by one with bored attention. Thirteen. She had counted them yesterday too. And the day before. Always thirteen.

"Did you finish the puzzle?" shouted Philippos from the living room.

"Yes!" Alexandra answered quickly. Too quickly.

A lie. She hadn't touched a single piece. She felt a tiny sting in her stomach — that sting that always arrives together with a lie. But lies come out easily when no one cares enough to check. And lately, Alexandra thought, no one checked anything at all.

Every day was exactly like the one before. Wake up, school, home, boredom, sleep. Then all over again. Like living inside a grey bubble that swallowed every color in the world. Nothing interesting. Nothing important. Nothing that felt like hers.

"I'm bored," she whispered to the ceiling. The ceiling, of course, did not answer. Ceilings never do.

But Alexandra didn't know something very important yet. She didn't know that boredom wasn't the problem. Boredom was the signal. The signal that something big was sleeping inside her — and it was finally asking to wake up.`
        }
      },
      {
        title: { el: "Τα Νεύρα & Τα Βιβλία", en: "The Nerves & The Books" },
        image: "/images/filippos.webp",
        imageCaption: { el: "Ο Φίλιππος και η Ελευθερία", en: "Philippos and Eleftheria" },
        text: {
          el: `Στο διπλανό δωμάτιο, ο Φίλιππος πάλευε με ένα σωρό πλαστικά κομμάτια. Τα δάχτυλά του πίεζαν, στρίβαν, ζόριζαν. Προσπαθούσε να φτιάξει κάτι — κάτι που είχε δει σε ένα βίντεο. «Εύκολο!» είχε πει ο τύπος στο YouTube, χαμογελώντας με άσπρα δόντια. «Το φτιάχνεις σε δέκα λεπτά!»

Ο Φίλιππος πάλευε εδώ και μία ώρα.

«ΑΧΧΧ!» Το πέταξε στον τοίχο με όλη του τη δύναμη. ΚΡΑΚ. Το κομμάτι έγινε δύο. Υπέροχα. Τώρα είχε δύο προβλήματα αντί για ένα.

«ΧΑΛΑΣ ΤΟΝ ΧΡΟΝΟ ΜΟΥ!» φώναξε στο πουθενά, με τα μάγουλα κόκκινα. Αλλά η αλήθεια ήταν πιο ύπουλη: ο χρόνος του δεν χαλούσε. Έφευγε. Σιγά σιγά, μέρα με τη μέρα, χωρίς να τον ρωτήσει καθόλου.

Στη γωνία, η Ελευθερία καθόταν σταυροπόδι, περικυκλωμένη από πύργους βιβλίων. Διάβαζε ήρεμα, γυρίζοντας τις σελίδες με προσοχή. Ήταν το τετρακοσιοστό πεντηκοστό βιβλίο της. Ήξερε πώς δουλεύει ένα ρομπότ, πώς χτίζεται ένα σπίτι, πώς φτιάχνεται ένα ηλεκτρικό κύκλωμα. Τα ήξερε όλα — στο χαρτί.

«Δεν γίνεται έτσι», είπε ήρεμα, χωρίς να σηκώσει τα μάτια. «Το κομμάτι μπαίνει ανάποδα.»

«Εσύ ξέρεις μόνο να διαβάζεις!» απάντησε ο Φίλιππος με νεύρα.

Η Ελευθερία δεν μίλησε. Κοίταξε τις λέξεις στη σελίδα, αλλά ξαφνικά δεν τις έβλεπε. Γιατί κατά βάθος ήξερε ότι ο Φίλιππος είχε δίκιο. Ήξερε τα πάντα — αλλά δεν είχε φτιάξει τίποτα. Ποτέ. Ούτε μία φορά.`,
          en: `In the next room, Philippos was wrestling with a pile of plastic parts. His fingers pressed, twisted, forced. He was trying to build something — something he had seen in a video. "Easy!" the guy on YouTube had said, smiling with bright white teeth. "You can build it in ten minutes!"

Philippos had been fighting with it for an hour.

"ARGH!" He hurled it at the wall with all his strength. CRACK. One piece became two. Wonderful. Now he had two problems instead of one.

"YOU'RE WASTING MY TIME!" he shouted at nothing, his cheeks burning red. But the truth was sneakier than that: his time wasn't being wasted. It was leaving. Slowly, day after day, without asking his permission at all.

In the corner, Eleftheria sat cross-legged, surrounded by towers of books. She read calmly, turning the pages with care. It was her four hundred and fiftieth book. She knew how a robot works, how a house is built, how an electric circuit is wired. She knew everything — on paper.

"That's not how it works," she said calmly, without lifting her eyes. "That piece goes in the other way."

"You only know how to read!" Philippos snapped back.

Eleftheria said nothing. She stared at the words on the page, but suddenly she couldn't see them. Because deep down she knew Philippos was right. She knew everything — but she had built nothing. Ever. Not even once.`
        }
      },
      {
        title: { el: "Η Κουκουβάγια", en: "The Owl" },
        image: "/images/paidia-kai-wisebot.webp",
        imageCaption: { el: "Η στιγμή που η WiseBot εμφανίστηκε", en: "The moment WiseBot appeared" },
        text: {
          el: `Κανείς δεν κατάλαβε πότε ακριβώς συνέβη. Δεν ακούστηκε πόρτα. Δεν ακούστηκε βήμα. Και όμως, κάτι άλλαξε.

Ο αέρας στο δωμάτιο έγινε πιο βαρύς. Πιο ζεστός. Σαν να είχε μπει κάποιος αόρατος και να στεκόταν ανάμεσά τους, περιμένοντας.

Η Αλεξάνδρα σήκωσε το κεφάλι πρώτη. Το ένιωσε πριν το δει — εκείνο το γαργαλητό στον σβέρκο που σου λέει ότι κάποιος σε κοιτάζει. Στο παράθυρο, ανάμεσα στις σκιές του απογεύματος, κάτι λαμπύριζε απαλά.

Μια μεταλλική κουκουβάγια. Μικρή. Κομψή. Τα φτερά της γυάλιζαν σαν ασήμι στο φως. Και τα μάτια της — δύο μωβ κρύσταλλοι — χτυπούσαν ρυθμικά, απαλά, σαν καρδιά που ανασαίνει.

«Ωραία παρέα», είπε η κουκουβάγια. Η φωνή της ήταν ήρεμη και καθαρή, σαν νερό που κυλάει πάνω σε πέτρες.

Τα τρία παιδιά πάγωσαν.

«Ένας που σπάει ό,τι αγγίζει...» — τα μωβ μάτια γύρισαν στον Φίλιππο, που κρατούσε ακόμα ένα σπασμένο κομμάτι.
«Μία που λέει ψέματα ακόμα και στον εαυτό της...» — γύρισαν στην Αλεξάνδρα, που κοκκίνισε μέχρι τα αυτιά.
«Και μία που ξέρει τα πάντα, αλλά ζει κλεισμένη μέσα σε σελίδες...» — στάθηκαν στην Ελευθερία, που έσφιξε το βιβλίο της.

«Ποια... ποια είσαι;» κατάφερε να ρωτήσει η Αλεξάνδρα, με φωνή που έτρεμε λίγο.

Η κουκουβάγια έγειρε το κεφάλι, όπως κάνουν οι κουκουβάγιες όταν σκέφτονται.

«Με λένε WiseBot. Και ήρθα γιατί βαριέστε.»`,
          en: `No one understood exactly when it happened. There was no door. There were no footsteps. And yet, something changed.

The air in the room became heavier. Warmer. As if someone invisible had walked in and was standing among them, waiting.

Alexandra raised her head first. She felt it before she saw it — that tickle on the back of your neck that tells you someone is watching. In the window, between the afternoon shadows, something was shimmering softly.

A metallic owl. Small. Elegant. Her wings gleamed like silver in the light. And her eyes — two purple crystals — pulsed gently, rhythmically, like a heart that breathes.

"Nice company," said the owl. Her voice was calm and clear, like water running over stones.

The three children froze.

"One who breaks everything he touches..." — the purple eyes turned to Philippos, who was still holding a broken piece.
"One who lies even to herself..." — they turned to Alexandra, who blushed all the way to her ears.
"And one who knows everything, but lives locked inside pages..." — they settled on Eleftheria, who gripped her book tighter.

"Who... who are you?" Alexandra managed to ask, her voice trembling just a little.

The owl tilted her head, the way owls do when they are thinking.

"My name is WiseBot. And I came because you are bored."`
        }
      },
      {
        title: { el: "Η Ερώτηση", en: "The Question" },
        image: "/images/wisebot.jpg",
        imageCaption: { el: "Η ερώτηση που τα άλλαξε όλα", en: "The question that changed everything" },
        text: {
          el: `Η WiseBot δεν μπήκε μέσα περπατώντας. Πέταξε. Αθόρυβα, σαν σκιά με φτερά, διέσχισε το δωμάτιο και προσγειώθηκε στη μέση του τραπεζιού — ανάμεσα στα σπασμένα κομμάτια του Φίλιππου και τα ξεχασμένα βιβλία της Ελευθερίας.

Τα παιδιά περίμεναν κατσάδα. Περίμεναν «γιατί δεν κάνετε κάτι χρήσιμο;» ή «στην εποχή μου...». Αυτά λένε συνήθως οι μεγάλοι.

Αλλά η WiseBot δεν τους μάλωσε. Δεν τους κοίταξε αυστηρά. Απλά τους είδε. Πραγματικά. Τον έναν μετά τον άλλον, αργά, προσεκτικά, σαν να διάβαζε κάτι γραμμένο μέσα τους. Και αυτό ήταν αρκετό για να τους κόψει την ανάσα — γιατί κανείς δεν τους είχε κοιτάξει έτσι εδώ και πολύ, πολύ καιρό.

Τα μάτια της έλαμψαν πιο δυνατά. Το μωβ φως γέμισε τις σκιές του δωματίου, ζεστό σαν ηλιοβασίλεμα.

«Αν δεν φοβόσασταν ότι θα αποτύχετε... τι θα φτιάχνατε ΣΗΜΕΡΑ;»

Η ερώτηση έμεινε στον αέρα. Βαριά. Ζωντανή. Σαν κάτι που χτυπάει την πόρτα σου και δεν σκοπεύει να φύγει.

Ο Φίλιππος ένιωσε ένα τσίμπημα στο στήθος — εκεί που φυλάμε τα όνειρα που ντρεπόμαστε να πούμε. Η Αλεξάνδρα ένιωσε τα μάτια της να καίνε. Η Ελευθερία — για πρώτη φορά στη ζωή της — έκλεισε το βιβλίο χωρίς να βάλει σελιδοδείκτη.

Κανείς δεν μίλησε. Και δεν πείραζε.

Γιατί κάποιες ερωτήσεις δεν θέλουν απάντηση αμέσως. Θέλουν να μπουν μέσα σου. Να κάτσουν εκεί. Να σε αλλάξουν πριν καν ανοίξεις το στόμα σου.`,
          en: `WiseBot didn't walk in. She flew. Silently, like a shadow with wings, she crossed the room and landed in the middle of the table — between Philippos' broken pieces and Eleftheria's forgotten books.

The children braced for a lecture. They expected "why don't you do something useful?" or "back in my day...". That's what grown-ups usually say.

But WiseBot didn't scold them. She didn't look stern. She simply saw them. Truly. One after another, slowly, carefully, as if she were reading something written inside them. And that alone took their breath away — because no one had looked at them like that in a very, very long time.

Her eyes glowed brighter. The purple light filled the shadows of the room, warm as a sunset.

"If you weren't afraid of failing... what would you make TODAY?"

The question hung in the air. Heavy. Alive. Like something knocking on your door with no intention of leaving.

Philippos felt a sting in his chest — right where we keep the dreams we're too embarrassed to say out loud. Alexandra felt her eyes burn. Eleftheria — for the first time in her life — closed her book without marking the page.

No one spoke. And that was fine.

Because some questions don't want an answer right away. They want to enter you. To sit there quietly. To change you before you even open your mouth.`
        }
      },
      {
        title: { el: "Η Σπίθα", en: "The Spark" },
        image: "/images/paidia-wisebot-2.webp",
        imageCaption: { el: "Η σπίθα άναψε. Το ταξίδι ξεκίνησε.", en: "The spark ignited. The journey began." },
        text: {
          el: `Πέρασαν λεπτά. Ίσως πολλά. Κανείς δεν μέτρησε — και αυτό ήταν παράξενο, γιατί μέχρι εκείνη τη μέρα το μόνο που έκαναν ήταν να μετράνε πόσο αργά περνάει η ώρα.

Ο Φίλιππος έσκυψε και κοίταξε τα σπασμένα κομμάτια στο πάτωμα. Αυτή τη φορά δεν θύμωσε. Δεν τα κλώτσησε. Τα κοίταξε σαν να τα έβλεπε για πρώτη φορά — όχι σαν σκουπίδια, αλλά σαν αρχή.

«Ένα ρομπότ», ψιθύρισε. Τόσο σιγά, που μόλις ακούστηκε. Σαν να φοβόταν ότι η λέξη θα σπάσει αν τη φωνάξει δυνατά.

Η Αλεξάνδρα σήκωσε αργά το κεφάλι από το πάτωμα. Τα μάτια της γυάλιζαν — όχι από δάκρυα. Από κάτι άλλο. Κάτι που είχε καιρό να νιώσει και δεν θυμόταν καν πώς το λένε.

«Που να πετάει», είπε, και η γκρίζα φυσαλίδα γύρω της έκανε την πρώτη ρωγμή.

Η Ελευθερία κοίταξε τα χέρια της. Τα χέρια που τετρακόσια πενήντα βιβλία τώρα μόνο γύριζαν σελίδες. Τα έσφιξε σε γροθιές. Τα άνοιξε ξανά. Χέρια είναι, σκέφτηκε. Μπορούν να φτιάξουν πράγματα.

«Και να μιλάει», είπε δυνατά.

Η WiseBot δεν χαμογέλασε — δεν είχε στόμα για να χαμογελάσει. Αλλά τα μωβ μάτια της έγιναν πιο φωτεινά. Πιο ζεστά. Σαν ήλιος που ανατέλλει αργά πάνω από μια καινούργια μέρα.

«Τότε ξεκινάμε.»

Τρεις λέξεις. Τρία παιδιά. Μία σπίθα. Και ήταν αρκετό. Γιατί η δημιουργία δεν ξεκινά με υλικά, με εργαλεία ή με τέλεια σχέδια. Ξεκινά με μια σπίθα — και τρία «ΝΑΙ» που κανείς, ούτε καν τα ίδια τα παιδιά, δεν περίμενε.`,
          en: `Minutes passed. Maybe many. No one counted — which was strange, because until that day, counting how slowly time passed was all they ever did.

Philippos bent down and looked at the broken pieces on the floor. This time he didn't get angry. He didn't kick them. He looked at them as if seeing them for the very first time — not as garbage, but as a beginning.

"A robot," he whispered. So quietly it was barely heard. As if he were afraid the word might break if he said it too loudly.

Alexandra slowly lifted her head from the floor. Her eyes were shining — not with tears. With something else. Something she hadn't felt in so long she couldn't even remember its name.

"That flies," she said, and the grey bubble around her cracked for the first time.

Eleftheria looked at her hands. The hands that, four hundred and fifty books later, had only ever turned pages. She squeezed them into fists. Opened them again. They're hands, she thought. Hands can build things.

"And speaks," she said out loud.

WiseBot didn't smile — she had no mouth to smile with. But her purple eyes grew brighter. Warmer. Like a sun rising slowly over a brand-new day.

"Then let's begin."

Three words. Three children. One spark. And it was enough. Because creation doesn't start with materials, tools, or perfect plans. It starts with a spark — and three unexpected YESes that no one, not even the children themselves, saw coming.`
        }
      }
    ]
  }
];
