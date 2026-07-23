
import { Book } from '../types';

// ============================================================
// BOOK 6: ΜΑΣ ΚΟΡΟΪΔΕΥΟΥΝ / THEY ARE MOCKING US
// Heroes: WiseBot & Crocus
// Theme: ΑΝΤΟΧΗ / RESILIENCE
// ============================================================

export const BOOK_6: Book[] = [
  {
    id: 6,
    title: { el: "ΜΑΣ ΚΟΡΟΪΔΕΥΟΥΝ", en: "THEY ARE MOCKING US" },
    theme: { el: "ΑΝΤΟΧΗ", en: "RESILIENCE" },
    stepLabel: { el: "WISEBOT & Η ΑΝΤΟΧΗ", en: "WISEBOT & RESILIENCE" },
    author: "Wisebot & Crocus",
    cover: "/images/wisebot.jpg",
    videoUrl: "",
    description: {
      el: "Μια ιστορία για τη στιγμή που ο κόσμος γελά — και εσύ πρέπει να διαλέξεις αν θα μικρύνεις ή θα μεγαλώσεις.",
      en: "A story about the moment the world laughs — and you have to choose whether to shrink or grow."
    },
    meaning: {
      el: "Όταν δημιουργείς κάτι αληθινό, κάποιοι θα γελάσουν. Όχι επειδή είναι κακό. Αλλά επειδή δεν είναι έτοιμοι.",
      en: "When you create something real, some will laugh. Not because it's bad. But because they aren't ready."
    },
    xp: 160,
    parentMessage: {
      el: "Η κοροϊδία είναι μέρος της διαφοροποίησης. Κάθε παιδί που τολμά να δημιουργήσει κάτι διαφορετικό θα αντιμετωπίσει αντίδραση. Μην πείτε «αγνόησέ τους» — αναγνωρίστε τον πόνο πρώτα. Ρωτήστε «πώς ένιωσες;» αντί «τι είπαν;». Δείξτε ότι κι εσείς περάσατε κάτι παρόμοιο. Και πείτε: «Δεν είναι όλοι για το μονοπάτι σου. Και αυτό είναι εντάξει.»",
      en: "Mockery is part of standing out. Every child who dares to create something different will face pushback. Don't say 'just ignore them' — acknowledge the pain first. Ask 'how did you feel?' instead of 'what did they say?'. Show that you went through something similar. And say: 'Not everyone is meant for your path. And that's okay.'"
    },

    // ── STRUCTURED PAGES (5 pages) ──────────────────────
    pages: [
      {
        title: { el: "Το Γέλιο Που Δεν Ήταν Αστείο", en: "The Laughter That Wasn't Funny" },
        image: "/images/ta-3-paidia.webp",
        imageCaption: { el: "Τρία παιδιά. Ένα κουτί. Κι ένα γέλιο που δεν περίμεναν.", en: "Three kids. One box. And laughter they didn't expect." },
        text: {
          el: `Η αυλή είχε φασαρία. Μπάλες που χτυπούσαν στον τοίχο. Φωνές. Τρέξιμο. Παιδιά παντού — κανένα τους δεν κοίταζε στ' αλήθεια τίποτα. Απλώς περνούσε το διάλειμμα από πάνω τους, γρήγορο και θορυβώδες.

Ο Φίλιππος κρατούσε το κουτί με το παιχνίδι τους σφιχτά στα χέρια. Τόσο σφιχτά που τα δάχτυλά του είχαν ασπρίσει. Η Αλεξάνδρα το είχε στολίσει μέρες τώρα — κάθε πρωί λίγο ακόμα, ένα αστεράκι εδώ, μια γραμμή χρώματος εκεί, μέχρι να νιώσει ότι αξίζει να το δει ο κόσμος. Η Ελευθερία είχε γράψει τις οδηγίες στο πίσω μέρος, με μικρά, προσεκτικά κόκκινα γράμματα, για να είναι όλα «σωστά».

«Να το δείξουμε;» ρώτησε ο Φίλιππος, και η φωνή του τρέμιζε λίγο, όσο κι αν προσπαθούσε να το κρύψει.

Κοιτάχτηκαν. Η Αλεξάνδρα έγνεψε. Η Ελευθερία κράτησε την αναπνοή της. Το άνοιξαν.

Στην αρχή, σιωπή. Κάποια παιδιά πλησίασαν. Έσκυψαν. Κοίταξαν. Ένα δευτερόλεπτο — δύο — τρία. Η Αλεξάνδρα ένιωσε την καρδιά της να χτυπά στα αυτιά της. Μετά ήρθε ένα χαμόγελο. Αλλά δεν ήταν το χαμόγελο που περίμεναν.

«Τι είναι αυτό;» — «Χαχα, ποιος κάθεται να το φτιάξει μόνος του;» — «Αυτό δεν υπάρχει ήδη στο YouTube;»

Κάποιος μιμήθηκε τον τρόπο που μιλούσε ο Φίλιππος, τραβώντας τις λέξεις κοροϊδευτικά. Κάποιος άλλος γέλασε δυνατά — πιο δυνατά απ' όλους — όχι επειδή ήταν αστείο, αλλά για να ακουστεί. Ο ήχος εκείνου του γέλιου μπήκε στο κεφάλι της Αλεξάνδρας σαν αγκάθι. Και δεν έφυγε.`,
          en: `The schoolyard was loud. Balls bouncing off the wall. Shouts. Running. Kids everywhere — none of them truly looking at anything. Recess just rolled over them, fast and noisy.

Philippos held the box with their game tight in his hands. So tight his knuckles had gone white. Alexandra had been decorating it for days — a little more each morning, a small star here, a line of color there, until it felt worthy of being seen by the world. Eleftheria had written the instructions on the back, in small, careful red letters, so that everything would be "proper."

"Shall we show it?" asked Philippos, and his voice trembled slightly, no matter how hard he tried to hide it.

They looked at each other. Alexandra nodded. Eleftheria held her breath. They opened it.

At first, silence. Some kids came closer. They leaned in. They looked. One second — two — three. Alexandra felt her heart pounding in her ears. Then a smile appeared. But it was not the smile they had been hoping for.

"What is that?" — "Haha, who sits down to build that by themselves?" — "Doesn't this already exist on YouTube?"

Someone mimicked the way Philippos spoke, stretching the words mockingly. Someone else laughed loudly — louder than everyone — not because it was funny, but to be heard. The sound of that laughter entered Alexandra's head like a thorn. And it didn't leave.`
        }
      },
      {
        title: { el: "Ο Θυμός του Κροκόδειλου", en: "The Crocodile's Fury" },
        image: "/images/paidia-kai-crocus.webp",
        imageCaption: { el: "Ο Crocus ήθελε να τους αντιμετωπίσει. Η WiseBot ήξερε κάτι καλύτερο.", en: "Crocus wanted to face them. WiseBot knew something better." },
        text: {
          el: `Ο Crocus δεν άντεξε. Κοκκίνισε — κυριολεκτικά. Τα μάγουλα, η ουρά, ακόμα και τα μάτια του γυάλιζαν σαν φωτιά. Ο μικρός κροκόδειλος που πάντα φώναζε «ΠΑΜΕ» τώρα έβραζε ολόκληρος.

«Να τους πούμε! Να τους δείξουμε πόσο κάνουν λάθος!» Η ουρά του χτυπούσε ρυθμικά το χώμα, σαν μετρονόμος θυμού. Τακ. Τακ. Τακ.

«Ηρέμησε», είπε η Ελευθερία χαμηλόφωνα, αν και τα χέρια της έτρεμαν κι εκείνης.

«Γιατί να ηρεμήσουμε;» φώναξε ο Φίλιππος. «Μας κοροϊδεύουν! Δεν κατάλαβαν τίποτα! Δεν ξέρουν πόσα απογεύματα δουλέψαμε! Πόσες φορές το χαλάσαμε και το ξαναφτιάξαμε!»

Ο Crocus έκανε ένα βήμα μπροστά, με τα νύχια του ανοιχτά. «Ένα λεπτό και τους έχω. Ένα.»

Η Αλεξάνδρα τον τράβηξε πίσω από την ουρά. «Σταμάτα... Δεν αξίζει.» Αλλά η φωνή της δεν ακουγόταν σαν σιγουριά. Ακουγόταν σαν παράδοση. Σαν κάποιος που κατεβάζει σημαία.

Γιατί δεν ήταν ο θυμός που πόνεσε πιο πολύ. Ήταν αυτό που ήρθε μετά τον θυμό — η μικρή, ύπουλη σκέψη που τρύπωσε αθόρυβα: «Κι αν έχουν δίκιο;»

Η Αλεξάνδρα κοίταξε το παιχνίδι. Ξαφνικά της φάνηκε μικρό. Φτηνό. Ασήμαντο. Πριν από μία ώρα ήταν ο θησαυρός της. Τώρα ντρεπόταν να το κρατάει. «Ίσως να μην είναι τόσο καλό...» ψιθύρισε, και τα μάτια της ήταν υγρά.

Ο Φίλιππος γύρισε απότομα. «Μην το λες αυτό! Είναι δικό μας!»

Η Ελευθερία δεν μίλησε καθόλου. Απλώς έκλεισε το τετράδιο. Σιγά σιγά. Σαν να έκλεινε μια πόρτα.`,
          en: `Crocus couldn't take it. He turned red — literally. His cheeks, his tail, even his eyes glowed like fire. The little crocodile who always shouted "LET'S GO" was now boiling from head to tail.

"Let's tell them! Let's show them how wrong they are!" His tail hit the ground rhythmically, like a metronome of anger. Tap. Tap. Tap.

"Calm down," said Eleftheria softly, though her own hands were trembling too.

"Why should we calm down?" shouted Philippos. "They're mocking us! They didn't understand anything! They don't know how many afternoons we worked! How many times we broke it and built it again!"

Crocus took a step forward, claws out. "One minute and I've got them. One."

Alexandra pulled him back by his tail. "Stop... It's not worth it." But her voice didn't sound like confidence. It sounded like surrender. Like someone lowering a flag.

Because it wasn't the anger that hurt the most. It was what came after the anger — the small, sneaky thought that crept in silently: "What if they're right?"

Alexandra looked at the game. Suddenly it seemed small. Cheap. Meaningless. An hour ago it had been her treasure. Now she felt embarrassed just holding it. "Maybe it's not that good..." she whispered, and her eyes were wet.

Philippos turned sharply. "Don't say that! It's ours!"

Eleftheria said nothing at all. She simply closed the notebook. Slowly. As if closing a door.`
        }
      },
      {
        title: { el: "Η WiseBot Δεν Μίλησε Αμέσως", en: "WiseBot Didn't Speak Right Away" },
        image: "/images/paidia-kai-wisebot.webp",
        imageCaption: { el: "Η ντροπή δεν φωνάζει ποτέ. Σε σκεπάζει σιωπηλά.", en: "Shame never shouts. It covers you silently." },
        text: {
          el: `Η ντροπή δεν φωνάζει ποτέ. Σε σκεπάζει σιωπηλά — σαν ομίχλη — μέχρι να μην βλέπεις πια τον εαυτό σου.

Κάθονταν στη γωνία της αυλής, εκεί που η σκιά του τοίχου έπεφτε πιο βαριά. Κανείς δεν μιλούσε. Ο Crocus περπατούσε πέρα δώθε, ακόμα θυμωμένος, μουρμουρίζοντας κάτι για «αχάριστους». Ο Φίλιππος κοιτούσε τα χέρια του, σαν να αναρωτιόταν αν άξιζαν όσα είχαν φτιάξει. Η Ελευθερία είχε κλείσει κάθε βιβλίο, κάθε τετράδιο. Και η Αλεξάνδρα — η Αλεξάνδρα κοιτούσε κάπου αλλού. Κάπου μακριά. Κάπου που δεν υπήρχε τίποτα.

Τότε ήρθε το φως. Όχι δυνατό. Όχι με ήχο. Η WiseBot εμφανίστηκε απαλά, σαν αναπνοή — και δεν είπε τίποτα. Απλώς περίμενε. Γιατί ήξερε ότι ο πόνος πρώτα θέλει χώρο, και μετά λόγια.

Ο Crocus την κοίταξε ανυπόμονα. «Ε, θα πεις κάτι; Θα τους βάλεις στη θέση τους;»

Η WiseBot δεν απάντησε στον Crocus. Πλησίασε αργά την Αλεξάνδρα. Τα μάτια της — δύο μωβ κρύσταλλοι — χαμήλωσαν μαλακά στο ύψος των δικών της.

«Πονάει;»

Η Αλεξάνδρα έγνεψε. Ένα δάκρυ κύλησε στο μάγουλό της, αλλά δεν το σκούπισε.

«Δεν πονάει το γέλιο», είπε η WiseBot σιγανά. «Πονάει το ότι περίμενες χειροκρότημα. Και αντί γι' αυτό... ήρθε σιωπή.» Έκανε μια παύση, και το φως στο στήθος της ζεστάθηκε. «Γι' αυτό θυμήσου το εξής: μην περιμένεις χειροκρότημα για να προχωρήσεις. Όσοι φτιάχνουν κάτι αληθινό, προχωρούν και χωρίς αυτό.»

Σιωπή. Η πιο δυνατή σιωπή που άκουσαν ποτέ. Αλλά μέσα σε εκείνη τη σιωπή, κάτι μικρό άρχισε να αναπνέει — σαν φλόγα που αρνείται να σβήσει.`,
          en: `Shame never shouts. It covers you silently — like fog — until you can't see yourself anymore.

They sat in the corner of the schoolyard, where the shadow of the wall fell heaviest. No one spoke. Crocus paced back and forth, still angry, muttering something about "ungrateful people." Philippos stared at his hands, as if wondering whether they deserved what they had built. Eleftheria had closed every book, every notebook. And Alexandra — Alexandra was looking somewhere else. Somewhere far away. Somewhere where nothing existed.

Then the light came. Not strong. Not with sound. WiseBot appeared softly, like a breath — and said nothing. She simply waited. Because she knew that pain needs space first, and words after.

Crocus looked at her impatiently. "Hey, are you going to say something? Are you going to put them in their place?"

WiseBot didn't answer Crocus. She slowly approached Alexandra. Her eyes — two purple crystals — lowered gently to the level of her own.

"Does it hurt?"

Alexandra nodded. A tear rolled down her cheek, but she didn't wipe it away.

"The laughter is not what hurts," said WiseBot quietly. "What hurts is that you expected applause. And instead... came silence." She paused, and the light on her chest grew warmer. "So remember this: don't wait for applause in order to move forward. Those who build something real keep going even without it."

Silence. The most powerful silence they had ever heard. But inside that silence, something small began to breathe — like a flame that refuses to go out.`
        }
      },
      {
        title: { el: "Η Απάντηση Που Δεν Φώναξαν", en: "The Answer They Didn't Shout" },
        image: "/images/alexandra.webp",
        imageCaption: { el: "«Ας το κάνουμε καλύτερο. Όχι για αυτούς. Για μας.»", en: "'Let's make it better. Not for them. For us.'" },
        text: {
          el: `«Τι να κάνουμε λοιπόν;» ρώτησε ο Φίλιππος. Η φωνή του ακούστηκε μικρή — σαν ενός παιδιού που ζητά βοήθεια αλλά δεν ξέρει από πού να την περιμένει.

Η WiseBot κούνησε απαλά το κεφάλι. «Σήμερα... απλώς κρατήστε αυτό που είστε. Μη φωνάξετε. Μην κρυφτείτε. Μείνετε. Το να μείνεις όρθιος είναι μερικές φορές η πιο γενναία πράξη του κόσμου.»

«Και αυτοί;» ρώτησε η Αλεξάνδρα, σκουπίζοντας επιτέλους τα μάτια της. «Αυτοί που γέλασαν;»

«Αυτοί γελάνε επειδή δεν ξέρουν ακόμη. Δεν είναι κακοί. Δεν είναι εχθροί. Απλώς δεν είναι όλοι έτοιμοι την ίδια στιγμή. Κάποιοι χρειάζονται περισσότερο χρόνο για να δουν αυτό που εσείς είδατε πρώτοι.»

Ο Crocus μουρμούρισε, με την ουρά του να χτυπάει ακόμα νευρικά: «Κι εγώ; Δεν μπορώ να κάνω τίποτα; Τίποτα απολύτως;»

Η WiseBot χαμογέλασε — με τα μάτια, γιατί στόμα δεν είχε. «Μπορείς. Μπορείς να μείνεις δίπλα τους. Αυτό είναι η πιο δυνατή απάντηση που υπάρχει.»

Την επόμενη μέρα, συνέβη κάτι που κανείς δεν περίμενε. Ένας από αυτούς που είχαν γελάσει προσπάθησε να φτιάξει κάτι παρόμοιο. Πήρε χαρτόνια, κόλλα, κάτι σύρματα. Κάθισε στην αυλή και πάλεψε ολόκληρο το διάλειμμα. Δεν δούλεψε. Τα κομμάτια δεν κολλούσαν. Οι οδηγίες του δεν έβγαζαν νόημα.

Ο Crocus το είδε πρώτος. «Να το! Βλέπεις;» Τα μάτια του έλαμπαν σαν δύο πράσινα φαναράκια.

Η Αλεξάνδρα χαμογέλασε — για πρώτη φορά από εχθές. Όχι από εκδίκηση. Από ανακούφιση. Από την ήσυχη επιβεβαίωση ότι αυτό που έφτιαξαν δεν ήταν εύκολο — ήταν αληθινό.`,
          en: `"So what should we do?" asked Philippos. His voice sounded small — like a child asking for help without knowing where to expect it from.

WiseBot shook her head gently. "Today... just hold on to what you are. Don't shout. Don't hide. Stay. Sometimes staying on your feet is the bravest act in the world."

"And them?" asked Alexandra, finally wiping her eyes. "The ones who laughed?"

"They laugh because they don't know yet. They're not bad. They're not enemies. It's simply that not everyone is ready at the same moment. Some people need more time to see what you saw first."

Crocus mumbled, his tail still twitching nervously: "And me? Can't I do anything? Anything at all?"

WiseBot smiled — with her eyes, because she had no mouth. "You can. You can stay beside them. That is the most powerful answer there is."

The next day, something happened that nobody expected. One of the kids who had laughed tried to build something similar. He took cardboard, glue, some wires. He sat in the yard and struggled through the whole recess. It didn't work. The pieces wouldn't stick. His instructions made no sense.

Crocus saw it first. "There it is! You see?" His eyes shone like two little green lanterns.

Alexandra smiled — for the first time since yesterday. Not from revenge. From relief. From the quiet confirmation that what they had built wasn't easy — it was real.`
        }
      },
      {
        title: { el: "Η Πρώτη Νίκη", en: "The First Victory" },
        image: "/images/filippos.webp",
        imageCaption: { el: "Δεν σταμάτησαν. Προχώρησαν.", en: "They didn't stop. They moved forward." },
        text: {
          el: `Το παιχνίδι ήταν πάλι πάνω στο τραπέζι. Στο ίδιο ακριβώς μέρος, κάτω από το φως. Η Αλεξάνδρα δεν το είχε κρύψει — όχι αυτή τη φορά. Και αυτό, από μόνο του, σήμαινε κάτι.

«Δεν θα σταματήσουμε», είπε ο Φίλιππος. Η φωνή του δεν ήταν θυμωμένη πια. Ήταν σταθερή. Σαν βήμα που ξέρει πού πηγαίνει.

«Αλλά δεν θα φωνάζουμε κιόλας», πρόσθεσε η Ελευθερία, ανοίγοντας πάλι το τετράδιό της. Οι σελίδες άρχισαν να γεμίζουν ξανά — ιδέες, διορθώσεις, μικρά σχέδια στο περιθώριο.

Η Αλεξάνδρα πέρασε τα δάχτυλά της πάνω από το κουτί. Σιγά. Με σεβασμό. Σαν να ήταν κάτι που μόλις γεννήθηκε. «Ας το κάνουμε καλύτερο. Όχι για αυτούς. Για μας.»

Ο Crocus σήκωσε τη μύτη του ψηλά. «Αυτό ακούγεται πολύ ωραίο. Μπορώ να το πω εγώ σαν ατάκα; Θα το λέω πριν από κάθε αποστολή!»

Τα παιδιά γέλασαν — αληθινό γέλιο αυτή τη φορά, δικό τους. Η WiseBot χαμογέλασε. Το φως στο στήθος της — εκείνο το μικρό, ζεστό, κίτρινο φως — έλαμψε λίγο πιο δυνατά. Όπως κάθε φορά που τα παιδιά μεγάλωναν λίγο χωρίς να το καταλάβουν.

Την επόμενη φορά που άκουσαν γέλιο στην αυλή, δεν σταμάτησαν. Δεν απάντησαν. Δεν θύμωσαν. Δεν ντράπηκαν. Προχώρησαν. Ο Crocus περπάτησε δίπλα τους, με σηκωμένο κεφάλι, σαν φρουρός. Η WiseBot ακολούθησε πίσω — σαν φάρος που δεν χρειάζεται να φωνάξει για να φαίνεται.

Και αυτό ήταν η πρώτη τους νίκη. Όχι εναντίον κάποιου. Εναντίον του φόβου που ψιθυρίζει «σταμάτα, δεν αξίζεις». Γιατί η πραγματική δύναμη δεν είναι να φωνάξεις πιο δυνατά από τους άλλους. Είναι να συνεχίσεις πιο ήσυχα από τον φόβο σου.`,
          en: `The game was back on the table. In the exact same spot, under the light. Alexandra hadn't hidden it — not this time. And that, by itself, meant something.

"We won't stop," said Philippos. His voice wasn't angry anymore. It was steady. Like a footstep that knows where it's going.

"But we won't shout either," added Eleftheria, opening her notebook again. The pages began to fill once more — ideas, corrections, little sketches in the margins.

Alexandra ran her fingers over the box. Slowly. With respect. As if it were something newly born. "Let's make it better. Not for them. For us."

Crocus raised his nose high. "That sounds really cool. Can I say that as my catchphrase? I'll say it before every mission!"

The children laughed — real laughter this time, their own. WiseBot smiled. The light on her chest — that small, warm, yellow light — shone a little brighter. Like every time the children grew a little without realizing it.

The next time they heard laughter in the schoolyard, they didn't stop. They didn't answer. They didn't get angry. They weren't ashamed. They moved forward. Crocus walked beside them, head held high, like a guard. WiseBot followed behind — like a lighthouse that doesn't need to shout to be seen.

And that was their first victory. Not against anyone. Against the fear that whispers "stop, you're not worth it." Because true strength is not shouting louder than the others. It is continuing more quietly than your fear.`
        }
      }
    ]
  }
];
