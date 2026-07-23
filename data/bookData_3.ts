
import { Book } from '../types';

// ============================================================
// 📖 BOOK 3: ΧΩΡΙΣ ΣΧΕΔΙΟ, ΧΑΝΕΣΑΙ / WITHOUT A PLAN, YOU GET LOST
// Hero: Pencilo (ο σκαντζόχοιρος)
// Theme: ΣΧΕΔΙΟ / BLUEPRINT
// ============================================================

export const BOOK_3: Book[] = [
  {
    id: 3,
    title: { el: "ΧΩΡΙΣ ΣΧΕΔΙΟ, ΧΑΝΕΣΑΙ", en: "WITHOUT A PLAN, YOU GET LOST" },
    theme: { el: "ΣΧΕΔΙΟ", en: "BLUEPRINT" },
    stepLabel: { el: "PENCILO & ΤΟ ΣΧΕΔΙΟ", en: "PENCILO & THE PLAN" },
    author: "Pencilo",
    cover: "/images/pencilo.jpg",
    videoUrl: "",
    description: {
      el: "Το 'ΠΑΜΕ' του Crocus έφερε χάος. Κάτι έσπασε. Ο Pencilo εμφανίζεται για να δείξει ότι η ταχύτητα χωρίς χάρτη είναι απλώς κούραση.",
      en: "Crocus's 'LET'S GO' brought chaos. Something broke. Pencilo appears to show that speed without a map is just fatigue."
    },
    meaning: {
      el: "Το 'ΠΑΜΕ' είναι δύναμη. Το σχέδιο είναι κατεύθυνση. Χωρίς κατεύθυνση, η δύναμη σε κουράζει.",
      en: "'LET'S GO' is power. The plan is direction. Without direction, power exhausts you."
    },
    xp: 130,
    parentMessage: {
      el: "Η παρόρμηση είναι ενέργεια, αλλά το σχέδιο είναι σεβασμός στον χρόνο. Όταν τα παιδιά μάθουν να σχεδιάζουν απλά — ένα χαρτί, τρεις ερωτήσεις — μαθαίνουν να μη σπαταλούν τον εαυτό τους. Δοκιμάστε σήμερα: πριν ξεκινήσει κάτι καινούργιο, ρωτήστε «Τι φτιάχνεις; Για ποιον; Ποιο είναι το πρώτο βήμα;»",
      en: "Impulse is energy, but a plan is respect for time. When children learn to plan simply — one paper, three questions — they learn not to waste themselves. Try today: before starting something new, ask 'What are you making? For whom? What's the first step?'"
    },

    // ── NEW STRUCTURED PAGES (5 pages) ──────────────────────
    pages: [
      {
        title: { el: "Το ΠΑΜΕ που Έγινε Χάος", en: "The LET'S GO That Became Chaos" },
        image: "/images/ta-3-paidia.webp",
        imageCaption: { el: "Τρεις κεραυνοί χωρίς κατεύθυνση.", en: "Three lightning bolts without direction." },
        text: {
          el: `Ξεκίνησαν με φόρα. Με τρομερή, ασταμάτητη φόρα. Σαν τρεις κεραυνοί που χτύπησαν ταυτόχρονα στο ίδιο σημείο.

Ο Φίλιππος έφτιαχνε — τα χέρια του κινούνταν γρήγορα, τα μάτια του φλέγονταν, κομμάτια κουμπώναν το ένα πάνω στο άλλο. Η Αλεξάνδρα ζωγράφιζε — πινέλα παντού, χρώματα στα δάχτυλα, στα μάγουλα, στο τραπέζι. Η Ελευθερία έγραφε — τρία τετράδια ανοιχτά ταυτόχρονα, σημειώσεις που πηδούσαν από τη μία σελίδα στην άλλη.

Ο καθένας έτρεχε. Αλλά κανείς δεν ήξερε προς τα πού.

«Όχι έτσι! Αυτό πάει αριστερά!» — «Περίμενε, εγώ το ήθελα μπλε!» — «Αυτό το κομμάτι δεν κολλάει εδώ!»

Οι φωνές μπερδεύονταν. Τα χέρια μπερδεύονταν. Ο Φίλιππος έχτιζε κάτι που η Αλεξάνδρα δεν είχε ζωγραφίσει, και η Ελευθερία έγραφε οδηγίες για κάτι που κανείς δεν έφτιαχνε.

Ο Crocus τους κοιτούσε με λαμπερό χαμόγελο. «ΠΑΜΕ!» φώναξε, σηκώνοντας τη γροθιά ψηλά. Και φώναξαν κι αυτοί «ΠΑΜΕ!», γιατί η ενέργεια ήταν μεθυστική, σαν μουσική που δυναμώνει. Γιατί πίστευαν ότι αν τρέχεις αρκετά γρήγορα, δεν χρειάζεσαι δρόμο.

Μέχρι που—

ΚΡΑΑΑΚ.

Ο ήχος πάγωσε το δωμάτιο. Ένα κομμάτι έσπασε. Και όχι όποιο κι όποιο. Το κομμάτι-κλειδί. Η βάση. Αυτό που κρατούσε τα πάντα ενωμένα.

Τρεις κεραυνοί. Μηδέν κατεύθυνση. Ένα σωρό συντρίμμια.`,
          en: `They started at full speed. Tremendous, unstoppable speed. Like three lightning bolts striking the exact same spot at once.

Philippos was building — his hands moving fast, his eyes on fire, pieces snapping onto other pieces. Alexandra was painting — brushes everywhere, color on her fingers, her cheeks, the table. Eleftheria was writing — three notebooks open at the same time, notes jumping from one page to another.

Each of them was running. But nobody knew where to.

"Not like that! That goes on the left!" — "Wait, I wanted that part blue!" — "This piece doesn't fit here!"

Voices tangled. Hands tangled. Philippos was building something Alexandra hadn't painted, and Eleftheria was writing instructions for something no one was building.

Crocus watched them with a shining grin. "LET'S GO!" he shouted, raising his fist high. And they shouted "LET'S GO!" right back, because the energy was intoxicating, like music turned up louder and louder. Because they believed that if you run fast enough, you don't need a road.

Until—

CRAAACK.

The sound froze the room. A piece broke. And not just any piece. The key piece. The base. The one that held everything together.

Three lightning bolts. Zero direction. One pile of wreckage.`
        }
      },
      {
        title: { el: "Ο Κύκλος που Κουράζει", en: "The Circle That Exhausts" },
        image: "/images/filippos.webp",
        imageCaption: { el: "«ΠΟΥ;» — Η ερώτηση που σταμάτησε τον Crocus.", en: "\"WHERE?\" — The question that stopped Crocus." },
        text: {
          el: `Ο Φίλιππος πάγωσε. Τα μάτια του δεν κοιτούσαν το σπασμένο κομμάτι στο πάτωμα. Κοιτούσαν τα ίδια του τα χέρια. Αυτός το έκανε. Πάλι. Όπως τότε, πριν έρθει η WiseBot. Το στομάχι του σφίχτηκε.

«Δεν πειράζει!» είπε ο Crocus. «Ξανά!»

Προσπάθησαν ξανά. Και ξανά. Και ξανά. Κάθε φορά λίγο αλλιώς — μια άλλη κόλλα, μια άλλη σειρά, μια άλλη γωνία. Κάθε φορά με λίγο λιγότερη πίστη. Και κάθε φορά, το ίδιο αποτέλεσμα: κρακ, στραβό, χαλασμένο.

Η Αλεξάνδρα σκουπίστηκε με την ανάστροφη — χρώμα και ιδρώτας ανακατεμένα στο μέτωπό της. Κάτι μέσα της το κατάλαβε πρώτο, πριν το πουν οι λέξεις: δεν δημιουργούσαν πια. Αντέγραφαν την ίδια τους την αποτυχία, ξανά και ξανά, σαν δίσκος που κολλάει.

Έκαναν κύκλους. Και οι κύκλοι δεν πάνε πουθενά — μόνο κουράζουν.

Ο Crocus άρχισε να εκνευρίζεται. Η ουρά του χτυπούσε το πάτωμα. «Ρε παιδιά! ΠΑΜΕ είπαμε! Πού πήγε η ενέργειά σας;»

Και τότε η Ελευθερία γύρισε απότομα. Τα μαλλιά της ήταν ανακατεμένα, τα μάτια της κόκκινα από την κούραση. Από ώρες ολόκληρες χαμένες σε κύκλους που έμοιαζαν με πρόοδο αλλά δεν ήταν.

«ΠΟΥ;»

Μία λέξη. Σαν βέλος.

Σιωπή. Βαριά. Πυκνή. Ο Crocus άνοιξε το στόμα του — το στόμα με τα εκατό δόντια και τις χίλιες φωνές. Και το έκλεισε. Για πρώτη φορά στη ζωή του, η λέξη «ΠΑΜΕ» δεν ήταν αρκετή.

Γιατί το «ΠΑΜΕ» σου δίνει δύναμη. Αλλά δεν σου λέει πού να πας.`,
          en: `Philippos froze. His eyes weren't looking at the broken piece on the floor. They were looking at his own hands. He did this. Again. Just like before, back before WiseBot came. His stomach tightened.

"No problem!" said Crocus. "Again!"

They tried again. And again. And again. Each time slightly differently — a different glue, a different order, a different angle. Each time with a little less faith. And each time, the same result: crack, crooked, broken.

Alexandra wiped her forehead with the back of her hand — paint and sweat mixed together. Something inside her understood it first, before words could: they weren't creating anymore. They were copying their own failure, over and over, like a record stuck on the same note.

They were going in circles. And circles lead nowhere — they only exhaust you.

Crocus started getting irritated. His tail slapped the floor. "Come on, guys! We said LET'S GO! Where did your energy go?"

And then Eleftheria spun around. Her hair was a mess, her eyes red with exhaustion. From entire hours lost in circles that looked like progress but weren't.

"GO WHERE?"

One word, sharp as an arrow.

Silence. Heavy. Thick. Crocus opened his mouth — the mouth with a hundred teeth and a thousand shouts. And closed it. For the first time in his life, the word "LET'S GO" was not enough.

Because "LET'S GO" gives you power. But it doesn't tell you where to go.`
        }
      },
      {
        title: { el: "Ο Σκαντζόχοιρος", en: "The Hedgehog" },
        image: "/images/paidia-kai-pencilo.webp",
        imageCaption: { el: "Η στιγμή που ο Pencilo κύλησε μέσα στο χάος.", en: "The moment Pencilo rolled into the chaos." },
        text: {
          el: `Μέσα στη σιωπή, ακούστηκε ένας ήχος. Μεταλλικός. Μικρός. Ρυθμικός. Σαν ρουλεμάν που κυλάει σε μάρμαρο.

Τα παιδιά κοιτάχτηκαν. Ο ήχος δυνάμωνε.

Κάτι κύλησε κάτω από το τραπέζι και βγήκε στο φως. Γρήγορο. Μικρό. Απόλυτα ακριβές στις κινήσεις του — φρέναρε στο μισό εκατοστό, ούτε παραπάνω ούτε παρακάτω.

Ήταν ένας σκαντζόχοιρος με ρόλερ στα πόδια. Στην πλάτη του, εκεί που οι σκαντζόχοιροι έχουν αγκάθια, αυτός είχε: μολύβια ταξινομημένα σε τέλεια σειρά από το πιο κοντό στο πιο μακρύ, δύο χάρακες, μια γομολάστιχα και μικρά μπλοκάκια δεμένα με κορδέλα. Φορούσε στρογγυλά γυαλάκια, σαν ρολογάς ακριβείας. Και τα μάτια του ήταν ήρεμα. Σχεδόν υπερβολικά ήρεμα — σαν λίμνη ένα πρωινό χωρίς αέρα.

Σταμάτησε ακριβώς στο κέντρο του δωματίου. Κοίταξε αργά γύρω του: σκισμένα χαρτιά, σπασμένα κομμάτια, λεκέδες από χρώμα, γραμμές που ξεκινούσαν και δεν τελείωναν πουθενά.

«Συγγνώμη που διακόπτω», είπε. «Αλλά αυτό που κάνετε… πονάει.»

Η φωνή του ήταν απαλή. Σαν δάσκαλος που δεν φωνάζει ποτέ — και ακριβώς γι' αυτό, κάθε λέξη του μένει.

«Και εσύ ποιος είσαι;» ρώτησε ο Crocus, με μισοσηκωμένο φρύδι.

Ο σκαντζόχοιρος έβγαλε ένα μολύβι από την πλάτη του με μια κομψή κίνηση. Το στριφογύρισε στα δάχτυλά του σαν μαέστρος τη μπαγκέτα του.

«Με λένε Pencilo. Έρχομαι όπου ακούω χάος.» Έκανε μια μικρή υπόκλιση. «Και εδώ… ακούγεται από μακριά.»`,
          en: `Inside the silence, a sound appeared. Metallic. Small. Rhythmic. Like a ball bearing rolling across marble.

The children looked at each other. The sound grew louder.

Something rolled out from under the table and into the light. Fast. Small. Absolutely precise in its movements — it braked within half a centimeter, not a hair more, not a hair less.

It was a hedgehog on roller skates. On his back, where hedgehogs have spines, he had: pencils sorted in perfect order from shortest to longest, two rulers, an eraser, and small notepads tied with ribbon. He wore little round glasses, like a master watchmaker. And his eyes were calm. Almost excessively calm — like a lake on a morning with no wind.

He stopped in the exact center of the room. He looked around slowly: torn papers, broken pieces, paint stains, lines that started boldly and ended nowhere.

"Sorry to interrupt," he said. "But what you're doing… hurts."

His voice was soft. Like a teacher who never, ever shouts — and precisely because of that, every word he says stays with you.

"And who are you?" asked Crocus, one eyebrow half-raised.

The hedgehog drew a pencil from his back with one elegant motion. He twirled it between his fingers like a conductor with his baton.

"My name is Pencilo. I go wherever I hear chaos." He gave a small bow. "And this room… can be heard from very far away."`
        }
      },
      {
        title: { el: "Ο Χάρτης", en: "The Map" },
        image: "/images/pencilo.jpg",
        imageCaption: { el: "Τρία κουτιά. Καθαρά. Απλά. Τέλεια.", en: "Three boxes. Clean. Simple. Perfect." },
        text: {
          el: `Ο Pencilo πήδηξε στο τραπέζι με μια κίνηση. Τα ρόλερ του άφησαν δύο τέλειες, παράλληλες γραμμές πάνω σε ένα χαρτί — τόσο ίσιες που η Ελευθερία τις κοίταξε με θαυμασμό.

«Ακούστε με προσεκτικά», είπε. «Δεν σας λείπει ενέργεια. Ενέργεια έχετε για δέκα. Σας λείπει σειρά. Κατεύθυνση. Χάρτης.»

Πήρε ένα καθαρό χαρτί. Κράτησε το μολύβι όπως ο χειρουργός το νυστέρι — σταθερά, με σεβασμό. Και ζωγράφισε τρία κουτιά, το ένα κάτω από το άλλο:

1. ΤΙ ΦΤΙΑΧΝΟΥΜΕ
2. ΓΙΑ ΠΟΙΟΝ
3. ΠΩΣ ΞΕΚΙΝΑΜΕ

Τρία κουτιά. Καθαρά. Απλά. Τα παιδιά τα κοιτούσαν σαν να έβλεπαν μαγικά.

«Χωρίς αυτά τα τρία», είπε ο Pencilo, «θα κάνετε κύκλους. Πάντα. Θα τρέχετε σαν κεραυνοί και θα καταλήγετε σαν σβησμένα κεριά. Το σχέδιο δεν είναι χάσιμο χρόνου — είναι η κατεύθυνση που σώζει την ενέργειά σας.»

«Δηλαδή θες να κάτσουμε να σχεδιάζουμε;» ρώτησε ο Crocus, σταυρώνοντας τα χέρια. «Ώρες; Μέρες;»

«Όχι. Θέλω να μην πετάτε την πράξη στα σκουπίδια.»

Ο Crocus πλησίασε. Η περηφάνια του ήταν πληγωμένη. «Η ζωή δεν περιμένει σχέδιο, σκαντζόχοιρε. Η ζωή τρέχει.»

«Και χωρίς σχέδιο, κροκόδειλε, η ζωή σε γυρίζει πίσω στο ίδιο σημείο. Το είδες μόλις τώρα. Το έζησες.»

Τα βλέμματά τους διασταυρώθηκαν σαν σπαθιά. Και τότε η Αλεξάνδρα μπήκε ανάμεσά τους — για δεύτερη φορά αυτή την εβδομάδα, σκέφτηκε, αρχίζω να γίνομαι ειδική σε αυτό.

«ΣΤΟΠ. Ο Crocus μάς έμαθε να ξεκινάμε. Εσύ θα μας μάθεις πού πάμε. Δεν είναι μάχη. Είναι ομάδα.»`,
          en: `Pencilo leapt onto the table in one motion. His skates left two perfect, parallel lines across a paper — so straight that Eleftheria stared at them with admiration.

"Listen to me carefully," he said. "You don't lack energy. You have energy for ten teams. You lack order. Direction. A map."

He took a clean sheet of paper. He held his pencil the way a surgeon holds a scalpel — steady, with respect. And he drew three boxes, one under the other:

1. WHAT WE ARE MAKING
2. FOR WHOM
3. HOW WE START

Three boxes. Clean. Simple. The children stared at them as if they were watching magic.

"Without these three," said Pencilo, "you will go in circles. Always. You'll run like lightning bolts and end up like burnt-out candles. A plan is not a waste of time — it is the direction that saves your energy."

"So you want us to sit around drawing plans?" asked Crocus, crossing his arms. "For hours? For days?"

"No. I want you to stop throwing your action in the trash."

Crocus stepped closer. His pride was wounded. "Life doesn't wait for a plan, hedgehog. Life runs."

"And without a plan, crocodile, life sends you right back where you started. You just saw it. You just lived it."

Their stares crossed like swords. And then Alexandra stepped between them — for the second time this week, she thought, I'm becoming an expert at this.

"STOP. Crocus taught us how to start. You will teach us where we're going. This isn't a battle. It's a team."`
        }
      },
      {
        title: { el: "Η Πρώτη Ησυχία", en: "The First Silence" },
        image: "/images/eleftheria.webp",
        imageCaption: { el: "Δεν έτρεχαν πια. Προχωρούσαν.", en: "They weren't running anymore. They were advancing." },
        text: {
          el: `Δεν έφτιαξαν τέλειο πλάνο. Και αυτό ήταν το πρώτο μάθημα.

«Ένα σχέδιο που βγαίνει σε δέκα λεπτά», τους είπε ο Pencilo, καθαρίζοντας τα γυαλάκια του, «αξίζει περισσότερο από ένα τέλειο σχέδιο που δεν βγαίνει ποτέ.»

Ένα χαρτί. Λίγες γραμμές. Τρία κουτιά συμπληρωμένα με παιδικά γράμματα. Και ένα βέλος — ένα μεγάλο, αποφασιστικό βέλος που έδειχνε μπροστά.

Ο Φίλιππος κοίταξε τα χέρια του. Τα ίδια χέρια που έσπαγαν πράγματα από νεύρα, τα ίδια που έσπασαν το κομμάτι-κλειδί. Τώρα κρατούσαν τον χάρτη. «Ξέρω τι κάνω τώρα», είπε. Η φωνή του δεν ήταν δυνατή. Ήταν κάτι καλύτερο: σταθερή.

Ο Crocus πήρε το σχέδιο και το κοίταξε από πάνω μέχρι κάτω. Αναστέναξε βαθιά — ένα αναστεναγμό γεμάτο σεβασμό, από αυτούς που βγαίνουν όταν παραδέχεσαι κάτι που δεν ήθελες. «Οκ», είπε τελικά. «Πάμε… αλλά με χάρτη.»

Ο Pencilo χαμογέλασε διακριτικά και τακτοποίησε ένα μολύβι που είχε στραβώσει μισό χιλιοστό.

Και τότε συνέβη κάτι που δεν είχε ξανασυμβεί: το δωμάτιο ησύχασε. Όχι επειδή σταμάτησαν να δουλεύουν — τα χέρια τους κινούνταν συνέχεια. Ησύχασε επειδή ήξεραν τι κάνουν. Κανείς δεν φώναζε «όχι έτσι». Κανείς δεν τραβούσε κομμάτια από τα χέρια του άλλου.

Η Ελευθερία κοίταξε τις σημειώσεις της — ταξινομημένες πια, αριθμημένες, με βέλη που οδηγούσαν κάπου συγκεκριμένα. Ένιωσε κάτι ζεστό να απλώνεται στο στήθος της. Τάξη. Ποιος να το έλεγε ότι η τάξη μπορεί να νιώθει σαν αγκαλιά;

Δεν έτρεχαν πια σε κύκλους. Προχωρούσαν σε ευθεία.`,
          en: `They didn't make a perfect plan. And that was the first lesson.

"A plan finished in ten minutes," Pencilo told them while polishing his little glasses, "is worth more than a perfect plan that never gets finished at all."

One paper. A few lines. Three boxes filled in with children's handwriting. And an arrow — one big, determined arrow pointing forward.

Philippos looked at his hands. The same hands that used to break things out of anger, the same ones that broke the key piece. Now they were holding the map. "I know what I'm doing now," he said. His voice wasn't loud. It was something better: steady.

Crocus took the plan and examined it top to bottom. He sighed deeply — a sigh full of respect, the kind that escapes when you admit something you didn't want to admit. "Ok," he said at last. "Let's go… but with a map."

Pencilo smiled discreetly and straightened a pencil that had tilted half a millimeter out of line.

And then something happened that had never happened before: the room went quiet. Not because they stopped working — their hands never stopped moving. It went quiet because they knew what they were doing. Nobody shouted "not like that." Nobody yanked pieces out of anyone's hands.

Eleftheria looked at her notes — sorted now, numbered, with arrows that led somewhere specific. She felt something warm spreading through her chest. Order. Who knew order could feel like a hug?

They weren't running in circles anymore. They were moving forward in a straight line.`
        }
      }
    ]
  }
];
