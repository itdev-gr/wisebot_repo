
import { Book } from '../types';

// ============================================================
// 📖 BOOK 10: ΤΟ ΣΠΑΣΙΜΟ / THE BREAK
// Heroes: Full Team
// Theme: ΚΡΙΣΗ / CRISIS
// ============================================================

export const BOOK_10: Book[] = [
  {
    id: 10,
    title: { el: "ΤΟ ΣΠΑΣΙΜΟ", en: "THE BREAK" },
    theme: { el: "ΚΡΙΣΗ", en: "CRISIS" },
    stepLabel: { el: "ΟΜΑΔΑ & ΠΙΣΤΗ", en: "TEAM & FAITH" },
    author: "Wisebot & Team",
    cover: "/images/crocus.jpg",
    videoUrl: "",
    description: {
      el: "Μια ιστορία για τη στιγμή που όλα φαίνονται χαμένα. Ο καβγάς, το σπάσιμο και η στιγμή που καταλαβαίνεις τι αξίζει να κρατήσεις.",
      en: "A story about the moment everything seems lost. The fight, the break, and the moment you realize what is worth keeping."
    },
    meaning: {
      el: "Η ομάδα δεν σπάει όταν διαφωνεί. Σπάει όταν φοβάται να μιλήσει.",
      en: "The team doesn't break when it disagrees. It breaks when it fears to speak."
    },
    xp: 200,
    parentMessage: {
      el: "Οι καβγάδες δεν είναι αποτυχία — είναι σημάδι ότι κάτι πρέπει να ειπωθεί. Μάθετε στα παιδιά ότι η διαφωνία δεν σημαίνει τέλος. Σημαίνει ότι νοιάζονται αρκετά. Πείτε τους: «Πες μου τι σε πείραξε. Όχι τι έκανε ο άλλος — τι ένιωσες εσύ.»",
      en: "Arguments are not failure — they're a sign something needs to be said. Teach children that disagreement doesn't mean the end. It means they care enough. Tell them: 'Tell me what bothered you. Not what the other did — what you felt.'"
    },

    pages: [
      {
        title: { el: "Η Μέρα που Σκόνταψαν", en: "The Day They Stumbled" },
        image: "/images/ta-3-paidia.webp",
        imageCaption: { el: "Τρεις φίλοι. Τρεις γνώμες. Ένα πρόβλημα.", en: "Three friends. Three opinions. One problem." },
        text: {
          el: `Κανείς δεν θυμάται ποιος ξεκίνησε τον καβγά. Έτσι γίνεται πάντα με τους καβγάδες — αρχίζουν από κάτι μικρό, από μια λέξη, από έναν αναστεναγμό, και μετά μεγαλώνουν μόνοι τους. Ίσως ξεκίνησε ο Φίλιππος, που ήθελε να αλλάξει τα πάντα στο project. Ίσως η Ελευθερία, που δεν ήθελε να αλλάξει τίποτα απολύτως.

«Αυτό δεν δουλεύει!» είπε ο Φίλιππος, δείχνοντας το έργο τους. «Το κοιτάμε δύο εβδομάδες και κάνει τα ίδια λάθη. Πρέπει να το ξηλώσουμε και να το φτιάξουμε αλλιώς!»

«Δουλεύει μια χαρά!» απάντησε η Ελευθερία, και τα μάγουλά της κοκκίνισαν. «Απλώς εσύ δεν κάνεις ποτέ υπομονή! Θες όλα να γίνονται τώρα, αμέσως, με το δικό σου τρόπο!»

Η Αλεξάνδρα καθόταν ανάμεσά τους, σιωπηλή, με τα χέρια σφιγμένα στα γόνατά της. Ένιωθε σαν να έβλεπε μια ταινία που δεν ήθελε καθόλου να βλέπει, αλλά δεν μπορούσε να κλείσει.

Οι φωνές ανέβηκαν. Σαν θερμόμετρο σε πυρετό. Κάθε λέξη πιο ζεστή από την προηγούμενη. Κάθε απάντηση πιο κοφτερή, πιο άδικη.

«Αν ήσουν λίγο πιο γρήγορος—»

«Αν ήσουν λίγο πιο ρεαλίστρια—»

Η Αλεξάνδρα σηκώθηκε απότομα. Η καρδιά της χτυπούσε δυνατά. Πήρε βαθιά ανάσα και φώναξε με όλη της τη δύναμη: «ΣΤΑΜΑΤΗΣΤΕ!»

Αλλά δεν σταμάτησαν. Ο καβγάς είχε πια δικά του πόδια — κι έτρεχε.`,
          en: `Nobody remembers who started the fight. That is how fights always work — they begin with something small, with one word, with one sigh, and then they grow all by themselves. Maybe it was Philippos, who wanted to change everything about the project. Maybe it was Eleftheria, who did not want to change anything at all.

"This doesn't work!" said Philippos, pointing at their creation. "We've been staring at it for two weeks and it keeps making the same mistakes. We have to take it apart and build it differently!"

"It works just fine!" Eleftheria shot back, her cheeks turning red. "You just never have any patience! You want everything done now, immediately, your way!"

Alexandra sat between them, silent, her hands clenched on her knees. She felt like she was watching a movie she did not want to see at all — but couldn't turn off.

The voices climbed. Like a thermometer in a fever. Every word hotter than the one before. Every reply sharper, more unfair.

"If you were a little faster—"

"If you were a little more realistic—"

Alexandra stood up abruptly. Her heart was pounding. She took a deep breath and shouted with all her strength: "STOP!"

But they didn't stop. The fight had grown legs of its own by then — and it was running.`
        }
      },
      {
        title: { el: "Η Πόρτα που Χτύπησε", en: "The Door That Slammed" },
        image: "/images/filippos.webp",
        imageCaption: { el: "Ο Φίλιππος βγήκε. Η πόρτα χτύπησε.", en: "Philippos left. The door slammed." },
        text: {
          el: `Ο Φίλιππος σταμάτησε ξαφνικά να φωνάζει. Κι αυτό ήταν πιο τρομακτικό από τις φωνές.

Άρχισε να μαζεύει τα πράγματά του. Αργά. Το κατσαβίδι. Το τετράδιο με τα σχέδιά του. Το μπουφάν του. Κάθε κίνηση βαριά, σαν να κουβαλούσε κάτι αόρατο στους ώμους.

«Φεύγω», είπε. Η φωνή του δεν ήταν θυμωμένη πια. Ήταν κάτι χειρότερο: κουρασμένη. Άδεια.

«Φίλιππε…» ξεκίνησε η Αλεξάνδρα, κάνοντας ένα βήμα προς το μέρος του.

«Δεν θέλω», είπε εκείνος, χωρίς καν να γυρίσει να την κοιτάξει.

Η πόρτα χτύπησε πίσω του. Δυνατά. Ο ήχος αντήχησε στο δωμάτιο σαν κεραυνός σε άδεια πλατεία — και μετά ήρθε η σιωπή, που ήταν ακόμα πιο δυνατή.

Η Ελευθερία ένιωσε κάτι σαν μαχαιριά στο στομάχι. Δεν ήταν θυμός. Ο θυμός είχε φύγει μαζί με τον Φίλιππο. Αυτό που έμεινε ήταν ενοχή. Γιατί μέσα της ήξερε — κάποια από εκείνα τα λόγια ήταν δικά της. Τα είχε πετάξει σαν πέτρες. Και οι πέτρες είχαν βρει στόχο.

Η Αλεξάνδρα κάθισε στο σκαμνί της. Τα χέρια της έτρεμαν. Κοίταξε το άδειο σκαμνί του Φίλιππου — εκεί όπου πριν από λίγες μέρες γελούσαν και οι τρεις τόσο δυνατά που τους ακούγανε από τον δρόμο.

Το δωμάτιο ένιωθε διαφορετικό τώρα. Πιο μεγάλο. Πιο κρύο. Σαν σπίτι που έμεινε χωρίς θέρμανση στη μέση του χειμώνα.`,
          en: `Philippos suddenly stopped shouting. And that was scarier than the shouting.

He began to gather his things. Slowly. The screwdriver. The notebook with his designs. His jacket. Each movement heavy, as if he were carrying something invisible on his shoulders.

"I'm leaving," he said. His voice wasn't angry anymore. It was something worse: tired. Empty.

"Philippos…" Alexandra began, taking a step toward him.

"I don't want to," he said, without even turning to look at her.

The door slammed behind him. Loud. The sound echoed through the room like thunder over an empty square — and then came the silence, which was somehow even louder.

Eleftheria felt something like a stab in her stomach. It wasn't anger. The anger had left with Philippos. What remained was guilt. Because deep inside she knew — some of those words had been hers. She had thrown them like stones. And the stones had found their target.

Alexandra sat down on her stool. Her hands were shaking. She stared at Philippos's empty seat — the place where, just days ago, the three of them had laughed so loudly you could hear them from the street.

The room felt different now. Bigger. Colder. Like a house left without heating in the middle of winter.`
        }
      },
      {
        title: { el: "Η Σιωπή που Βοά", en: "The Silence That Roars" },
        image: "/images/paidia-kai-wisebot.webp",
        imageCaption: { el: "Μερικές φορές η σιωπή πονάει πιο πολύ.", en: "Sometimes silence hurts more." },
        text: {
          el: `Πέρασε μια μέρα. Μετά δύο. Κανείς δεν μίλησε πρώτος. Κανείς δεν έστειλε μήνυμα. Η σιωπή απλώθηκε ανάμεσά τους σαν ποτάμι που κανείς δεν τολμούσε να περάσει.

Η Αλεξάνδρα περνούσε κάθε απόγευμα έξω από το δωμάτιο. Άνοιγε την πόρτα σιγά. Έβλεπε τα εργαλεία ακίνητα, το έργο τους μισοτελειωμένο, σκονισμένο. Και έκλεινε την πόρτα ξανά, με έναν κόμπο στον λαιμό.

Η WiseBot δεν είπε τίποτα όλες αυτές τις μέρες. Δεν μάλωσε κανέναν. Δεν έδωσε συμβουλές. Στεκόταν στη γωνία, ήρεμη και σιωπηλή, σαν φάρος που περιμένει την ομίχλη να αραιώσει. Γιατί ήξερε: υπάρχουν πράγματα που δεν διορθώνονται με φωνές. Διορθώνονται με ηρεμία — και με τον σωστό χρόνο.

Την τρίτη μέρα, η Ελευθερία μπήκε στο δωμάτιο. Μόνη. Κάθισε μπροστά στη WiseBot και κοίταξε το πάτωμα.

«Πώς φτιάχνεται αυτό;» ρώτησε. Τα μάτια της ήταν πρησμένα από το κλάμα που έκρυβε δύο μέρες.

«Δεν φτιάχνεται μόνο του», είπε η WiseBot απαλά. «Φτιάχνεται με μία λέξη. Τη λέξη που κανείς δεν θέλει να πει πρώτος.»

«Ποια λέξη;»

«Συγγνώμη.»

Η Ελευθερία κατέβασε τα μάτια. Η λέξη ήταν μικρή. Οχτώ γράμματα. Και όμως ζύγιζε όσο βουνό. Ήξερε. Από την αρχή ήξερε ότι αυτή η λέξη ήταν δική της δουλειά.`,
          en: `A day passed. Then two. Nobody spoke first. Nobody sent a message. The silence spread between them like a river no one dared to cross.

Every afternoon, Alexandra walked past the room. She would open the door quietly. She would see the tools sitting still, their project half-finished, gathering dust. And she would close the door again, with a lump in her throat.

WiseBot said nothing during all those days. She scolded no one. She gave no advice. She stood in the corner, calm and silent, like a lighthouse waiting for the fog to thin. Because she knew: some things cannot be fixed with loud voices. They are fixed with calm — and with the right moment.

On the third day, Eleftheria entered the room. Alone. She sat down in front of WiseBot and stared at the floor.

"How do you fix this?" she asked. Her eyes were swollen from the crying she had been hiding for two days.

"It does not fix itself," said WiseBot softly. "It is fixed with one word. The word nobody wants to say first."

"What word?"

"Sorry."

Eleftheria lowered her eyes. The word was small. Five letters. And yet it weighed as much as a mountain. She knew. She had known from the very beginning that this word was her job to say.`
        }
      },
      {
        title: { el: "Η Λέξη", en: "The Word" },
        image: "/images/paidia-kai-crocus.webp",
        imageCaption: { el: "«Συγγνώμη. Δεν ήθελα να πονέσω.»", en: "\"Sorry. I didn't mean to hurt.\"" },
        text: {
          el: `Τέταρτη μέρα. Η Ελευθερία βρήκε τον Φίλιππο στην αυλή του σχολείου. Καθόταν μόνος σε ένα παγκάκι, με τα χέρια στις τσέπες, και δεν κοίταζε τίποτα συγκεκριμένο — απλώς το πουθενά.

Πλησίασε και κάθισε δίπλα του. Δεν είπε τίποτα στην αρχή. Σιωπή. Ένα λεπτό. Δύο. Η καρδιά της χτυπούσε σαν ταμπούρλο.

«Συγγνώμη», είπε τελικά. Η φωνή της ήταν σπασμένη, αλλά αληθινή. «Δεν ήθελα να σε πονέσω. Απλώς… φοβήθηκα. Φοβήθηκα ότι αλλάζει κάτι που αγαπώ. Και αντί να το πω, φώναξα.»

Ο Φίλιππος δεν απάντησε αμέσως. Κοίταξε τα χέρια του για πολλή ώρα. Μετά γύρισε προς το μέρος της, και τα μάτια του δεν είχαν πια καθόλου θυμό.

«Κι εγώ συγγνώμη», είπε. «Ήμουν αγενής. Ήθελα τόσο πολύ να πετύχει, που ξέχασα το πιο σημαντικό. Εσάς.»

Η Αλεξάνδρα εμφανίστηκε πίσω τους, λαχανιασμένη. Κανείς δεν την είχε φωνάξει. Απλώς το ένιωσε και ήρθε τρέχοντας — έτσι, σαν ένστικτο, όπως ξέρει το χελιδόνι πότε να γυρίσει.

Κάθισε ανάμεσά τους και πήρε τα χέρια τους στα δικά της. «Σας έλειψα;» ρώτησε χαμογελώντας, και οι τρεις τους γέλασαν — ένα γέλιο μικρό, τρεμάμενο, αλλά αληθινό.

Ο Crocus στεκόταν στην πόρτα της αυλής. Δεν φώναξε «ΠΑΜΕ». Για πρώτη φορά, δεν χρειαζόταν. Τα παιδιά ήδη πήγαιναν — πίσω στο ίδιο τραπέζι, πίσω ο ένας στον άλλον.`,
          en: `Day four. Eleftheria found Philippos in the schoolyard. He was sitting alone on a bench, hands in his pockets, looking at nothing in particular — just at nowhere.

She walked over and sat down beside him. She said nothing at first. Silence. One minute. Two. Her heart was beating like a drum.

"Sorry," she said at last. Her voice was cracked, but true. "I didn't mean to hurt you. I just… got scared. Scared that something I love was changing. And instead of saying that, I shouted."

Philippos did not answer right away. He looked at his hands for a long time. Then he turned toward her, and there was no anger left in his eyes at all.

"I'm sorry too," he said. "I was rude. I wanted it to succeed so badly that I forgot the most important thing. You two."

Alexandra appeared behind them, out of breath. Nobody had called her. She had simply felt it and come running — just like that, on instinct, the way a swallow knows when it is time to fly home.

She sat down between them and took their hands in hers. "Did you miss me?" she asked with a grin, and all three of them laughed — a small, shaky laugh, but a real one.

Crocus stood at the yard gate. He did not shout "LET'S GO." For the first time, he didn't need to. The kids were already going — back to the same table, back to each other.`
        }
      },
      {
        title: { el: "Πιο Δυνατοί", en: "Stronger" },
        image: "/images/paidia-wisebot-2.webp",
        imageCaption: { el: "Η ρωγμή δεν σπάει. Δείχνει πού πρέπει να δυναμώσεις.", en: "The crack doesn't break. It shows where to strengthen." },
        text: {
          el: `Εκείνο το βράδυ, δεν δούλεψαν καθόλου στο project. Έκαναν κάτι πιο δύσκολο και πιο σημαντικό: μίλησαν.

Για το τι τους πείραξε. Για το τι φοβήθηκαν. Για το τι θέλουν πραγματικά. Ο καθένας μίλησε για τον εαυτό του — όχι για τα λάθη των άλλων. Και κάθε φορά που κάποιος μιλούσε, οι άλλοι δύο άκουγαν. Πραγματικά άκουγαν.

«Δεν θέλω να σε χάσω», είπε ο Φίλιππος στην Ελευθερία. Η φωνή του ήταν τρυφερή — σαν κάποιος που μόλις ανακάλυψε ότι τα λόγια δεν πετάνε μόνο πέτρες. Μπορούν και να αγκαλιάζουν.

«Ούτε εγώ εσένα», είπε η Ελευθερία. «Ούτε για χίλια projects.»

Η Αλεξάνδρα χαμογέλασε και είπε κάτι που το σκεφτόταν τρεις μέρες: «Η ομάδα δεν σπάει όταν διαφωνεί. Σπάει όταν φοβάται να μιλήσει.»

Η WiseBot έλαμψε ζεστά από τη γωνιά της — εκείνη που είχε κρατήσει την ομάδα ενωμένη όχι με φωνές, αλλά με την ηρεμία της και μια μικρή λέξη. «Αυτό που μόλις είπες, Αλεξάνδρα… δεν το έμαθες από μένα. Το μάθατε μόνοι σας. Και θέλω να θυμάστε κάτι ακόμα: πίστη στην ομάδα δεν σημαίνει να πιστεύεις ότι δεν θα μαλώσετε ποτέ. Σημαίνει να ξέρεις ότι, ακόμα κι αν μαλώσετε, θα τα βρείτε ξανά.»

Κοιτάχτηκαν και οι τρεις. Τα μάτια τους ήταν ακόμα λίγο κόκκινα. Αλλά τα χαμόγελά τους ήταν εντελώς αληθινά.

Η ρωγμή δεν εξαφανίστηκε — οι ρωγμές δεν εξαφανίζονται. Αλλά γέμισε με κάτι πολύτιμο: ειλικρίνεια. Και μια ομάδα με τέτοιες ρωγμές είναι πιο δυνατή από μια ομάδα που δεν ράγισε ποτέ.`,
          en: `That night, they did not work on the project at all. They did something harder and more important: they talked.

About what had bothered them. About what had scared them. About what they truly wanted. Each spoke about themselves — not about the others' mistakes. And every time one of them spoke, the other two listened. Really listened.

"I don't want to lose you," Philippos said to Eleftheria. His voice was tender — like someone who had just discovered that words don't only throw stones. They can also embrace.

"I don't want to lose you either," said Eleftheria. "Not for a thousand projects."

Alexandra smiled and said something she had been thinking about for three days: "The team doesn't break when it disagrees. It breaks when it's afraid to speak."

WiseBot glowed warmly from her corner — she who had held the team together not with loud words, but with her calm and one small word. "What you just said, Alexandra… you did not learn from me. You learned it on your own. And I want you to remember one more thing: faith in a team does not mean believing you will never fight. It means knowing that even if you fight, you will find each other again."

The three of them looked at one another. Their eyes were still a little red. But their smiles were completely real.

The crack did not disappear — cracks never do. But it filled with something precious: honesty. And a team with cracks like that is stronger than a team that never cracked at all.`
        }
      }
    ]
  }
];
