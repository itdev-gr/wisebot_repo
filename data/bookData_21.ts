
import { Book } from '../types';

// ============================================================
// BOOK 21: O ΚΑΘΡΕΦΤΗΣ / THE MIRROR
// Hero: ΕΣΥ (You - the reader)
// Theme: ΑΥΤΟΓΝΩΣΙΑ / SELF-REFLECTION
// ============================================================

export const BOOK_21: Book[] = [
  {
    id: 21,
    title: { el: "Ο ΚΑΘΡΕΦΤΗΣ", en: "THE MIRROR" },
    theme: { el: "ΑΥΤΟΓΝΩΣΙΑ", en: "SELF-REFLECTION" },
    stepLabel: { el: "ΤΟ ΤΕΛΟΣ & Η ΑΡΧΗ", en: "THE END & THE BEGINNING" },
    author: "Εσύ",
    cover: "/images/crocus.jpg",
    videoUrl: "",
    description: {
      el: "Μισό ιστορία, μισό καθρέφτης. Οι ήρωες έφυγαν. Τώρα μένεις μόνο εσύ. Μια ιστορία που τελειώνει μόνο όταν αρχίζεις εσύ.",
      en: "Half story, half mirror. The heroes have left. Now only you remain. A story that ends only when you begin."
    },
    meaning: {
      el: "Δεν χρειάζεσαι ήρωες. Μπορείς να γίνεις.",
      en: "You don't need heroes. You can become one."
    },
    xp: 310,
    parentMessage: {
      el: "Αυτό το κεφάλαιο είναι ένας καθρέφτης για το παιδί σας. Δεν διδάσκει κάτι νέο — θυμίζει αυτό που ήδη υπάρχει μέσα του. Η αυτογνωσία δεν είναι πολυτέλεια — είναι η βάση κάθε υγιούς ανάπτυξης. Δοκιμάστε σήμερα: ρωτήστε το παιδί σας «Αν μπορούσες να κρατήσεις ΕΝΑ πράγμα από όλα αυτά τα κεφάλαια, ποιο θα ήταν;» Μην διορθώσετε. Μην σχολιάσετε. Απλά ακούστε.",
      en: "This chapter is a mirror for your child. It doesn't teach something new — it reminds them of what already lives inside. Self-awareness is not a luxury — it is the foundation of healthy growth. Try today: ask your child 'If you could keep ONE thing from all these chapters, what would it be?' Don't correct. Don't comment. Just listen."
    },

    pages: [
      {
        title: { el: "Το Δωμάτιο Χωρίς Φωνές", en: "The Room Without Voices" },
        image: "/images/ta-3-paidia.webp",
        imageCaption: { el: "Ένα δωμάτιο γεμάτο αναμνήσεις — αλλά χωρίς φωνές.", en: "A room full of memories — but without voices." },
        text: {
          el: `Το δωμάτιο ήταν άδειο. Όχι εγκαταλελειμμένο — ήρεμο. Σαν να είχε πάρει μια βαθιά ανάσα και να την κρατούσε ακόμα. Τα τραπέζια στέκονταν στη θέση τους. Τα μολύβια ήταν τακτοποιημένα σε ίσιες σειρές, σαν μικροί στρατιώτες που τελείωσαν τη βάρδιά τους. Τα σχέδια δεν ήταν πια εκεί.

Φως πρωινού γλιστρούσε μέσα από τα παράθυρα, μαλακό, σχεδόν διστακτικό, σαν επισκέπτης που δεν θέλει να ενοχλήσει. Η σκόνη χόρευε στις χρυσές ακτίνες, αργά, κυκλικά, σαν να θυμόταν κινήσεις που κάποτε γέμιζαν αυτόν τον χώρο: χέρια που έκοβαν χαρτόνια, φωνές που φώναζαν «το βρήκα!», γέλια που σκαρφάλωναν ως το ταβάνι.

Η Αλεξάνδρα στάθηκε στη μέση του δωματίου. Η καρδιά της χτυπούσε ήσυχα, σταθερά. Δεν έψαχνε με τα μάτια τη WiseBot. Δεν περίμενε να ακούσει το βροντερό «ΠΑΜΕ!» του Crocus από την πόρτα. Δεν φώναζε τον Sparken, τον Link ή τον Pencilo. Τα χέρια της κρέμονταν ήσυχα στο πλάι.

«Δεν θα έρθουν», ψιθύρισε. Και αυτό — για πρώτη φορά — δεν την τρόμαξε. Ήταν παράξενο. Περίμενε να νιώσει ένα κενό μέσα της, όμως ένιωθε γεμάτη.

Ο Φίλιππος ακούμπησε στο κούφωμα της πόρτας και κοιτούσε τα σημάδια στο πάτωμα σαν μικρός αρχαιολόγος. «Εδώ χτίσαμε το πρώτο ρομπότ», είπε σιγά. «Κι εκεί σπάσαμε το δεύτερο», πρόσθεσε με μισό χαμόγελο. Σε εκείνη τη γωνία η Ελευθερία είχε διαβάσει δυνατά ένα ποίημα, μια νύχτα χωρίς φεγγάρι, και κανείς δεν είχε γελάσει.

Η Ελευθερία κοίταξε γύρω της αργά, σαν να χάιδευε τον χώρο με το βλέμμα. «Ξέρετε κάτι;» είπε. «Κάθε τόπος κρατάει τις ιστορίες αυτών που τον αγάπησαν.» Αυτό το δωμάτιο δεν ήταν άδειο. Ήταν γεμάτο αναμνήσεις.`,
          en: `The room was empty. Not abandoned — calm. As if it had taken a deep breath and was still holding it. The tables stood in their places. The pencils lay in tidy, straight rows, like little soldiers whose shift had finally ended. The drawings were no longer there.

Morning light slipped through the windows, soft, almost hesitant, like a visitor who doesn't want to disturb anyone. Dust danced in the golden beams, slowly, in circles, as though remembering the movements that once filled this space: hands cutting cardboard, voices shouting "I found it!", laughter climbing all the way up to the ceiling.

Alexandra stood in the middle of the room. Her heart beat quietly, steadily. Her eyes weren't searching for WiseBot. She wasn't waiting to hear Crocus's thundering "LET'S GO!" burst through the door. She wasn't calling for Sparken, Link, or Pencilo. Her hands hung quietly at her sides.

"They won't come," she whispered. And that — for the first time — didn't frighten her. It was strange. She had expected to feel an emptiness inside her, but instead she felt full.

Philippos leaned against the doorframe, studying the marks on the floor like a small archaeologist. "This is where we built the first robot," he said softly. "And that's where we broke the second one," he added with half a smile. In that corner, Eleftheria had once read a poem aloud, on a moonless night, and nobody had laughed.

Eleftheria looked around slowly, as if stroking the room with her gaze. "You know something?" she said. "Every place keeps the stories of the people who loved it." This room was not empty. It was full of memories.`
        }
      },
      {
        title: { el: "Τα Δώρα που Άφησαν", en: "The Gifts They Left" },
        image: "/images/paidia-kai-wisebot.webp",
        imageCaption: { el: "Πέντε αντικείμενα. Πέντε δάσκαλοι. Μία αλήθεια.", en: "Five objects. Five teachers. One truth." },
        text: {
          el: `Πάνω στο μεγάλο ξύλινο τραπέζι υπήρχαν πέντε αντικείμενα. Τοποθετημένα με φροντίδα, σε ίσες αποστάσεις, σαν αστέρια σε αστερισμό. Τα παιδιά πλησίασαν αργά, σχεδόν στις μύτες των ποδιών, λες και το τραπέζι ήταν βωμός.

Ένας φακός — μικρός, μεταλλικός, με μωβ ανταύγειες που έτρεμαν στο φως. Η WiseBot. Η Αλεξάνδρα τον άγγιξε με το δάχτυλο. «Είναι ακόμα ζεστός», ψιθύρισε, σαν να τον είχε κρατήσει κάποιος μόλις πριν από λίγο.

Ένα ζευγάρι γάντια — πράσινα, ζεστά, λίγο φθαρμένα στις άκρες από δουλειά. Ο Crocus. Μύριζαν χώμα, βροχή και φρέσκα φύλλα. Μύριζαν πράξη.

Ένα μπλοκ — γεμάτο σκίτσα, βέλη, λέξεις διαγραμμένες και ξαναγραμμένες. Ο Pencilo. Ο Φίλιππος ξεφύλλισε μερικές σελίδες και είδε λάθη παντού. Κάθε σβήσιμο όμως έμοιαζε με υπόσχεση: η τελειότητα δεν είναι το ζητούμενο — η ειλικρίνεια είναι.

Ένα κομμάτι καλώδιο — λεπτό, εύκαμπτο, τυλιγμένο σε τέλειο σπιράλ. Ο Link. Μέσα του κρυβόταν η δύναμη να συνδέει: ιδέες με χέρια, ανθρώπους με ανθρώπους, όνειρα με πραγματικότητα.

Και μια πυξίδα — με ασημένιο καπάκι που αντανακλούσε το φως σαν καθρέφτης. Ο Sparken. Η Ελευθερία την άνοιξε προσεκτικά. Η βελόνα δεν έδειχνε βορρά. Έδειχνε μπροστά. Πάντα μπροστά.

Ο Φίλιππος τα άγγιξε ένα-ένα. Αργά. Με σεβασμό, όπως αγγίζεις κάτι που σε μεγάλωσε.

«Νομίζαμε ότι ήταν τα εργαλεία τους», είπε σιγά, με τη φωνή του να τρέμει λίγο.

Η Ελευθερία χαμογέλασε. Ένα χαμόγελο αναγνώρισης, από αυτά που ανάβουν αργά.

«Ήταν τα δικά μας», είπε. «Από την πρώτη μέρα.» Γιατί τα πιο σημαντικά δώρα δεν είναι αυτά που παίρνεις. Είναι αυτά που καταλαβαίνεις ότι πάντα είχες.`,
          en: `On the big wooden table there were five objects. Placed with care, at equal distances, like stars in a constellation. The children approached slowly, almost on tiptoe, as if the table were an altar.

A flashlight — small, metallic, with purple reflections trembling in the light. WiseBot. Alexandra touched it with one finger. "It's still warm," she whispered, as if someone had been holding it only moments ago.

A pair of gloves — green, warm, slightly worn at the edges from real work. Crocus. They smelled of earth, rain, and fresh leaves. They smelled of action.

A notepad — filled with sketches, arrows, words crossed out and rewritten. Pencilo. Philippos flipped through a few pages and saw mistakes everywhere. Yet every erasure looked like a promise: perfection is not the goal — honesty is.

A piece of wire — thin, flexible, wound into a perfect spiral. Link. Hidden inside it was the power to connect: ideas with hands, people with people, dreams with reality.

And a compass — with a silver lid that reflected the light like a mirror. Sparken. Eleftheria opened it carefully. The needle didn't point north. It pointed forward. Always forward.

Philippos touched them one by one. Slowly. With respect, the way you touch something that raised you.

"We thought they were their tools," he said quietly, his voice trembling a little.

Eleftheria smiled. A smile of recognition, the kind that lights up slowly.

"They were ours," she said. "From the very first day." Because the most important gifts are not the ones you receive. They are the ones you realize you always had.`
        }
      },
      {
        title: { el: "Η Αναγνώριση", en: "The Recognition" },
        image: "/images/paidia-wisebot-2.webp",
        imageCaption: { el: "Τρεις μεταμορφώσεις. Ένας δρόμος από τη βαρεμάρα στην αυτογνωσία.", en: "Three transformations. A road from boredom to self-awareness." },
        text: {
          el: `Η Αλεξάνδρα πήρε τα πράσινα γάντια. Τα φόρεσε. Ταίριαζαν τέλεια, σαν να είχαν φτιαχτεί για τα δικά της χέρια. Ένιωσε ένα ρίγος — ζεστό, βαθύ — να ανεβαίνει από τις παλάμες στο στήθος. Μια δύναμη που δεν ήρθε απ' έξω. Ξύπνησε από μέσα.

«Εγώ δεν είμαι πια φοβισμένη», είπε. Σταμάτησε. Πήρε ανάσα. «Είμαι... έτοιμη για δράση.»

Η Αλεξάνδρα που κάποτε μετρούσε ρωγμές στο ταβάνι από βαρεμάρα, τώρα μετρούσε δυνατότητες στον ορίζοντα.

Ο Φίλιππος πήρε το μπλοκ. Το άνοιξε στην πρώτη σελίδα — άδεια, λευκή, γεμάτη δυνατότητες. Τα δάχτυλά του μυρμήγκιαζαν από ιδέες.

«Εγώ δεν είμαι πια βιαστικός», είπε. «Είμαι... δημιουργός.»

Το αγόρι που κάποτε φώναζε «ΧΑΛΑΣ ΤΟ ΧΡΟΝΟ ΜΟΥ!» τώρα κρατούσε τον χρόνο στα χέρια του σαν κάτι πολύτιμο.

Η Ελευθερία κράτησε τον φακό και άνοιξε την πυξίδα του Sparken. Στο ασημένιο καπάκι, που γυάλιζε σαν καθρέφτης, δεν είδε το πρόσωπό της. Είδε στιγμές. Τη στιγμή που μίλησε μπροστά σε κόσμο ενώ έτρεμε. Τη στιγμή που η Αλεξάνδρα σηκώθηκε από το κρεβάτι της βαρεμάρας. Τη στιγμή που ο Φίλιππος ξαναέφτιαξε ό,τι είχε σπάσει. Ο καθρέφτης δεν έδειχνε πρόσωπα — έδειχνε τις στιγμές που ξεπέρασαν τον εαυτό τους.

«Εγώ δεν είμαι πια θεωρητική», είπε. «Είμαι... οδηγός.»

Το κορίτσι που κρυβόταν πίσω από 450 βιβλία τώρα στεκόταν μπροστά — με τη γνώση στο ένα χέρι και το θάρρος στο άλλο.

Κάτω από τον φακό υπήρχε ένα σημείωμα, γραμμένο με μωβ μελάνι: «Δεν σας έμαθα τίποτα. Σας θύμισα αυτά που ξέρατε ήδη. Φεύγουμε γιατί δεν μας χρειάζεστε πια — γίνατε εσείς οι ήρωες.» Υπογραφή: WiseBot.`,
          en: `Alexandra took the green gloves. She put them on. They fit perfectly, as if they had been made for her hands alone. She felt a shiver — warm, deep — rising from her palms to her chest. A strength that didn't come from outside. It awakened from within.

"I am no longer scared," she said. She paused. Took a breath. "I am... ready for action."

The Alexandra who once counted ceiling cracks out of boredom now counted possibilities on the horizon.

Philippos took the notepad. He opened it to the first page — empty, white, full of possibilities. His fingers tingled with ideas.

"I am no longer hasty," he said. "I am... a creator."

The boy who once screamed "YOU'RE WASTING MY TIME!" now held time in his hands like something precious.

Eleftheria held the flashlight and opened Sparken's compass. In the silver lid, shining like a mirror, she didn't see her face. She saw moments. The moment she spoke in front of people while trembling. The moment Alexandra rose from the bed of boredom. The moment Philippos rebuilt what he had broken. The mirror didn't show faces — it showed the moments they overcame themselves.

"I am no longer theoretical," she said. "I am... a guide."

The girl who once hid behind 450 books now stood in front — with knowledge in one hand and courage in the other.

Beneath the flashlight there was a note, written in purple ink: "I didn't teach you anything. I reminded you of what you already knew. We are leaving because you don't need us anymore — you have become the heroes yourselves." Signed: WiseBot.`
        }
      },
      {
        title: { el: "Ο Καθρέφτης Γυρίζει Προς Εσένα", en: "The Mirror Turns to You" },
        image: "/images/crocus.jpg",
        imageCaption: { el: "Τώρα ο καθρέφτης γυρνάει προς εσένα.", en: "Now the mirror turns to face you." },
        text: {
          el: `Σταμάτα εδώ. Ναι, εσύ που διαβάζεις. Πάρε μια ανάσα. Αργά. Βαθιά. Νιώσε τον αέρα να γεμίζει το στήθος σου.

Αυτό που διάβασες δεν ήταν απλώς μια ιστορία. Ήταν ένας καθρέφτης. Και ένας καθρέφτης δεν δείχνει μόνο πρόσωπα — δείχνει τις στιγμές που ξεπέρασες τον εαυτό σου. Τώρα, σε αυτή τη σελίδα, ο καθρέφτης γυρνάει προς εσένα.

Πόσες φορές ένιωσες σαν την Αλεξάνδρα; Ξαπλωμένος στο κρεβάτι, βαριεστημένος, κοιτώντας το ταβάνι, κρύβοντας τον φόβο πίσω από ένα «δεν με νοιάζει». Πόσες φορές ήσουν ο Φίλιππος; Θυμωμένος, ανυπόμονος, σπάζοντας πράγματα γιατί δεν ήξερες ακόμα πώς να τα φτιάχνεις. Πόσες φορές ήσουν η Ελευθερία; Κρυμμένος πίσω από βιβλία και σωστές απαντήσεις, χωρίς να δοκιμάσεις ποτέ στ' αλήθεια.

Άκου τώρα προσεκτικά, γιατί αυτό είναι το μυστικό ολόκληρης της ιστορίας.

Η WiseBot είναι η φωνή μέσα σου που λέει «Σκέψου πριν φοβηθείς». Η σοφία σου.

Ο Crocus είναι η φωνή που λέει «Σήκω και κάν' το τώρα». Η δύναμή σου.

Ο Pencilo είναι τα χέρια σου που λένε «Μπορώ να το σχεδιάσω, κι ας κάνω λάθη». Η ειλικρίνειά σου.

Ο Link είναι η σύνδεση. Κάθε φορά που ενώνεις ιδέες, ανθρώπους, κόσμους. Η δημιουργικότητά σου.

Ο Sparken είναι τα μάτια σου που βλέπουν το αύριο πριν έρθει. Το όραμά σου.

Δεν χρειάζεσαι ήρωες. Γιατί κάθε ένας από αυτούς ζει ήδη μέσα σου. Πάντα ζούσε. Απλά τώρα — για πρώτη φορά — τους βλέπεις.`,
          en: `Stop here. Yes, you — the one reading. Take a breath. Slowly. Deeply. Feel the air fill your chest.

What you just read was not simply a story. It was a mirror. And a mirror doesn't only show faces — it shows the moments you overcame yourself. Now, on this page, the mirror turns to face you.

How many times have you felt like Alexandra? Lying on your bed, bored, staring at the ceiling, hiding your fear behind an "I don't care." How many times were you Philippos? Angry, impatient, breaking things because you didn't yet know how to build them. How many times were you Eleftheria? Hidden behind books and correct answers, without ever truly trying.

Now listen carefully, because this is the secret of the entire story.

WiseBot is the voice inside you that says "Think before you fear." Your wisdom.

Crocus is the voice that says "Get up and do it now." Your strength.

Pencilo is your hands saying "I can design it, even if I make mistakes." Your honesty.

Link is connection. Every time you join ideas, people, and worlds together. Your creativity.

Sparken is your eyes seeing tomorrow before it arrives. Your vision.

You don't need heroes. Because every single one of them already lives inside you. They always have. It's just that now — for the first time — you can see them.`
        }
      },
      {
        title: { el: "Η Αρχή", en: "The Beginning" },
        image: "/images/paidia-kai-crocus.webp",
        imageCaption: { el: "Ο δρόμος δεν τελειώνει. Μόλις αρχίζει.", en: "The road doesn't end. It is just beginning." },
        text: {
          el: `Τα τρία παιδιά στάθηκαν στην πόρτα. Δεν βιάζονταν. Δεν ήταν λυπημένα. Ο ήλιος έριχνε τις τελευταίες πορτοκαλί αχτίδες του στο πάτωμα, εκεί που κάποτε άπλωναν τα σχέδιά τους.

Η Αλεξάνδρα κοίταξε πίσω, μια τελευταία φορά. Δεκατρείς ρωγμές στο ταβάνι — τις είχε μετρήσει εκατό φορές τις βαρετές μέρες. Τώρα δεν έβλεπε ρωγμές. Έβλεπε μονοπάτια, χάρτες, δρόμους που περίμεναν.

Ο Φίλιππος χαμογέλασε. Εκείνο το «ΚΡΑΚ» που τον στοίχειωνε τόσο καιρό δεν ήταν παρά ο ήχος από κάτι παλιό που έσπαγε — η ανυπομονησία ενός αγοριού που δεν ήξερε ακόμα πώς να χτίσει τον εαυτό του. Τώρα ήξερε.

Η Ελευθερία πήρε μια βαθιά ανάσα και κοίταξε τους δύο φίλους της. Κάποτε ήταν τρία παιδιά που βαριούνταν ένα ατέλειωτο απόγευμα. Τώρα ήταν τρεις άνθρωποι που ήξεραν ποιοι είναι.

«Πάμε;» ρώτησε ο Φίλιππος.

«Πάμε», είπε η Αλεξάνδρα, σφίγγοντας τα πράσινα γάντια.

«Πάμε», συμφώνησε η Ελευθερία.

Κανείς δεν ρώτησε «πού». Δεν χρειαζόταν. Η απάντηση ήταν πάντα η ίδια, χαραγμένη σε μια πυξίδα με ασημένιο καπάκι: Μπροστά.

Κάθε ιστορία έχει τέλος. Αυτή — δεν έχει. Αυτή η ιστορία τελειώνει μόνο όταν αρχίζεις εσύ. Γιατί ο επόμενος ήρωας δεν είναι ο Sparken, ούτε η WiseBot, ούτε κανένας άλλος. Ο επόμενος ήρωας είσαι εσύ. Όταν σηκώνεσαι. Όταν κοιτάς τα χέρια σου και λες: «Μπορώ.» Όταν παίρνεις ένα μολύβι, μια ιδέα, ένα κομμάτι χαρτόνι — και κάνεις κάτι που χθες δεν υπήρχε.

Κλείσε την οθόνη. Και πήγαινε να φτιάξεις τον κόσμο σου. Η ιστορία συνεχίζεται — με εσένα.`,
          en: `The three children stood at the door. They weren't in a hurry. They weren't sad. The sun was casting its last orange rays across the floor, right where they used to spread out their drawings.

Alexandra looked back one final time. Thirteen cracks in the ceiling — she had counted them a hundred times on the boring days. Now she didn't see cracks. She saw pathways, maps, roads waiting to be walked.

Philippos smiled. That "CRACK" that had haunted him for so long was nothing but the sound of something old breaking — the impatience of a boy who didn't yet know how to build himself. Now he knew.

Eleftheria took a deep breath and looked at her two friends. Once they had been three children bored on an endless afternoon. Now they were three people who knew exactly who they were.

"Shall we go?" asked Philippos.

"Let's go," said Alexandra, tightening the green gloves.

"Let's go," agreed Eleftheria.

No one asked "where." No one needed to. The answer was always the same, engraved in a compass with a silver lid: Forward.

Every story has an ending. This one — doesn't. This story ends only when you begin. Because the next hero is not Sparken, not WiseBot, not anyone else. The next hero is you. When you stand up. When you look at your hands and say: "I can." When you pick up a pencil, an idea, a piece of cardboard — and make something that didn't exist yesterday.

Turn off the screen. And go build your world. The story continues — with you.`
        }
      }
    ]
  }
];
