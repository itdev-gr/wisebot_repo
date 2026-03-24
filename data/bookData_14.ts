
import { Book } from '../types';

// ============================================================
// 📖 BOOK 14: Η ΔΥΝΑΜΗ ΤΟΥ ΟΧΙ / THE POWER OF NO
// Hero: WiseBot
// Theme: ΟΡΙΑ / BOUNDARIES
// ============================================================

export const BOOK_14: Book[] = [
  {
    id: 14,
    title: { el: "Η ΔΥΝΑΜΗ ΤΟΥ ΟΧΙ", en: "THE POWER OF NO" },
    theme: { el: "ΟΡΙΑ", en: "BOUNDARIES" },
    stepLabel: { el: "WISEBOT & ΟΡΙΑ", en: "WISEBOT & BOUNDARIES" },
    author: "Wisebot",
    cover: "/images/wisebot.jpg",
    videoUrl: "",
    description: {
      el: "Η Αλεξάνδρα δεν προλαβαίνει τίποτα γιατί λέει 'ναι' σε όλους. Μαθαίνει ότι το 'όχι' δεν είναι αγένεια, είναι ασπίδα.",
      en: "Alexandra doesn't have time for anything because she says 'yes' to everyone. She learns that 'no' is not rudeness, it's a shield."
    },
    meaning: {
      el: "Για να πεις ένα μεγάλο 'ΝΑΙ' στα όνειρά σου, πρέπει να πεις πολλά μικρά 'ΟΧΙ' στα υπόλοιπα.",
      en: "To say a big 'YES' to your dreams, you have to say many small 'NOs' to the rest."
    },
    xp: 280,
    parentMessage: {
      el: "Πολλά παιδιά μαθαίνουν νωρίς ότι η αξία τους εξαρτάται από το πόσα κάνουν για τους άλλους. Αυτό δεν τα κάνει «καλά παιδιά» — τα κάνει εξαντλημένα παιδιά που φοβούνται να βάλουν όρια. Τα όρια δεν είναι εγωισμός. Είναι αυτοσεβασμός. Δοκιμάστε σήμερα: αντί να επιβραβεύετε μόνο τη βοήθεια, ρωτήστε «Εσύ τι χρειάζεσαι σήμερα; Τι θα ήθελες να κάνεις για σένα;»",
      en: "Many children learn early that their worth depends on how much they do for others. This doesn't make them 'good kids' — it makes them exhausted kids who are afraid to set boundaries. Boundaries are not selfishness. They are self-respect. Try today: instead of only praising helpfulness, ask 'What do you need today? What would you like to do for yourself?'"
    },

    // ── NEW STRUCTURED PAGES (5 pages) ──────────────────────
    pages: [
      {
        title: { el: "Το Κορίτσι Που Έτρεχε", en: "The Girl Who Ran" },
        image: "/images/alexandra.webp",
        imageCaption: { el: "Η Αλεξάνδρα — πάντα έτρεχε, πάντα για τους άλλους", en: "Alexandra — always running, always for others" },
        text: {
          el: `Η Αλεξάνδρα δεν περπατούσε ποτέ. Έτρεχε. Πάντα. Από πρωί μέχρι βράδυ, τα πόδια της χτυπούσαν στο πάτωμα σαν τύμπανα — αδιάκοπα, ξέπνοα, χωρίς παύση.

Δεν ήταν γιατί αγαπούσε το τρέξιμο. Ήταν γιατί δεν μπορούσε να σταματήσει. Κάποιος πάντα τη χρειαζόταν. Κάποιος πάντα ζητούσε κάτι. Και εκείνη — πάντα — έλεγε ναι.

«Αλεξάνδρα, μπορείς να κρατήσεις αυτό;» — «Ναι.»
«Αλεξάνδρα, θα έρθεις να βοηθήσεις;» — «Ναι.»
«Αλεξάνδρα, θα το κάνεις εσύ;» — «Ναι.»

Τα «ναι» ήταν αυτόματα. Βγαίναν πριν σκεφτεί. Πριν πάρει ανάσα. Σαν αντανακλαστικό — σαν κάτι που δεν ελέγχεις πια.

Στο τέλος κάθε μέρας, ήταν εξαντλημένη. Τα μάτια της έκαιγαν. Τα χέρια της έτρεμαν. Και το δικό της έργο — αυτό που πραγματικά ήθελε να τελειώσει — ακουμπισμένο στη γωνία, σκεπασμένο με σκόνη και ενοχή.

Η αλήθεια δεν ήταν ότι δεν πρόλαβε. Η αλήθεια ήταν ότι είχε δώσει ολόκληρο τον χρόνο της σε άλλους — και δεν είχε κρατήσει ούτε ένα λεπτό για τον εαυτό της.`,
          en: `Alexandra never walked. She ran. Always. From morning to night, her feet hit the floor like drums — relentless, breathless, without pause.

It wasn't because she loved running. It was because she couldn't stop. Someone always needed her. Someone always asked for something. And she — always — said yes.

"Alexandra, can you hold this?" — "Yes."
"Alexandra, will you come help?" — "Yes."
"Alexandra, will you do it?" — "Yes."

The "yeses" were automatic. They came out before she thought. Before she breathed. Like a reflex — like something you no longer control.

At the end of each day, she was exhausted. Her eyes burned. Her hands trembled. And her own project — the one she truly wanted to finish — sat in the corner, covered in dust and guilt.

The truth wasn't that she ran out of time. The truth was she had given all her time to others — and hadn't kept a single minute for herself.`
        }
      },
      {
        title: { el: "Η Παγίδα της Καλοσύνης", en: "The Kindness Trap" },
        image: "/images/paidia-kai-wisebot.webp",
        imageCaption: { el: "Η WiseBot εμφανίζεται όταν η Αλεξάνδρα είναι έτοιμη να σπάσει", en: "WiseBot appears when Alexandra is about to break" },
        text: {
          el: `Νόμιζε ότι ήταν καλή φίλη. Νόμιζε ότι αυτό σήμαινε «να είσαι πάντα διαθέσιμη». Νόμιζε ότι η αγάπη κερδίζεται με την εξάντληση.

Αλλά κάτω από το χαμόγελο, κάτι άλλο φούντωνε. Θυμός. Όχι θυμός με τους άλλους — θυμός με τον εαυτό της. Γιατί κάθε φορά που έλεγε «ναι» σε κάποιον άλλο, έλεγε «όχι» στα δικά της όνειρα.

Ένιωθε σαν μπαλόνι που κάποιος φούσκωνε χωρίς σταματημό — ένα τελευταίο «ναι» ακόμα, και θα σκάσει.

Ο αέρας στο δωμάτιο άλλαξε. Ένα απαλό μπλε φως τρεμόπαιξε στη γωνία. Η WiseBot ήταν εκεί. Τα μωβ μάτια της πάλλονταν αργά, σαν κύμα στη θάλασσα.

«Είσαι κουρασμένη», είπε απαλά.

«Πρέπει να βοηθάω», απάντησε η Αλεξάνδρα με φωνή ραγισμένη.

«Πρέπει;» ρώτησε η WiseBot. «Ή φοβάσαι ότι αν πεις ΟΧΙ... δεν θα σε αγαπάνε;»

Η Αλεξάνδρα πάγωσε. Ήταν σαν κάποιος να άνοιξε μια πόρτα που κρατούσε κλειδωμένη για χρόνια — και πίσω από αυτήν δεν υπήρχε τέρας. Υπήρχε μόνο ένα μικρό κορίτσι, καθισμένο μόνο, που φοβόταν ότι αν σταματήσει να τρέχει, κανείς δεν θα μείνει κοντά της.

Η καλοσύνη χωρίς όρια δεν είναι αγάπη. Είναι φυλακή με χρυσά κάγκελα.`,
          en: `She thought she was a good friend. She thought that meant "always being available." She thought love was earned through exhaustion.

But underneath the smile, something else was growing. Anger. Not anger at others — anger at herself. Because every time she said "yes" to someone else, she said "no" to her own dreams.

She felt like a balloon someone kept inflating without stopping — one more "yes," and she would burst.

The air in the room shifted. A soft blue light flickered in the corner. WiseBot was there. Her purple eyes pulsed slowly, like a wave in the sea.

"You are tired," she said softly.

"I have to help," Alexandra replied, her voice cracked.

"Have to?" asked WiseBot. "Or are you afraid that if you say NO... they won't love you?"

Alexandra froze. It was as if someone had opened a door she had kept locked for years — and behind it there was no monster. There was only a small girl, sitting alone, afraid that if she stopped running, no one would stay close to her.

Kindness without boundaries is not love. It is a prison with golden bars.`
        }
      },
      {
        title: { el: "Το Μάθημα του ΟΧΙ", en: "The Lesson of NO" },
        image: "/images/wisebot.jpg",
        imageCaption: { el: "Η WiseBot αποκαλύπτει την αλήθεια πίσω από κάθε «ναι»", en: "WiseBot reveals the truth behind every 'yes'" },
        text: {
          el: `«Πες μου», ξεκίνησε η WiseBot, «αν κάποιος σου ζητούσε να πετάξεις στον αέρα — θα έλεγες ναι;»

«Φυσικά και όχι. Δεν μπορώ να πετάξω.»

«Τότε γιατί λες ναι σε πράγματα που σε ρίχνουν κάτω;»

Σιωπή. Μόνο ο ήχος της καρδιάς της, που χτυπούσε πιο γρήγορα από πριν.

«Το "ΟΧΙ" δεν είναι κακία. Δεν είναι αγένεια. Δεν είναι εγωισμός. Το "ΟΧΙ" είναι ασπίδα. Προστατεύει τον χρόνο σου. Την ενέργειά σου. Τα όνειρά σου.»

«Αλλά θα θυμώσουν», ψέλλισε η Αλεξάνδρα. Τα μάτια της γέμισαν δάκρυα.

Η WiseBot την κοίταξε βαθιά, με μια ζεστασιά που δεν περίμενε κανείς από μεταλλικά μάτια.

«Αν θυμώσουν επειδή προσέχεις τον εαυτό σου... τότε δεν σέβονται εσένα. Σέβονται μόνο αυτό που κάνεις για αυτούς.»

Η Αλεξάνδρα ένιωσε κάτι να σπάει μέσα της. Όχι κάτι που πονάει — κάτι που ελευθερώνει. Σαν αλυσίδα που λύνεται. Σαν παράθυρο που ανοίγει σε δωμάτιο γεμάτο σκόνη.

«Κάθε φορά που λες ΝΑΙ σε κάτι, λες ΟΧΙ σε κάτι άλλο. Το ερώτημα είναι: σε τι λες ΟΧΙ χωρίς να το καταλαβαίνεις;»

Και η Αλεξάνδρα κατάλαβε. Κάθε «ναι» στους άλλους ήταν ένα «όχι» στον εαυτό της. Και αυτό δεν ήταν καλοσύνη. Ήταν αυτοκαταστροφή ντυμένη με χαμόγελο.`,
          en: `"Tell me," WiseBot began, "if someone asked you to fly into the air — would you say yes?"

"Of course not. I can't fly."

"Then why do you say yes to things that bring you down?"

Silence. Only the sound of her heart, beating faster than before.

"'NO' is not cruelty. It is not rudeness. It is not selfishness. 'NO' is a shield. It protects your time. Your energy. Your dreams."

"But they will get angry," Alexandra stammered. Her eyes filled with tears.

WiseBot looked at her deeply, with a warmth no one expected from metallic eyes.

"If they get angry because you take care of yourself... then they don't respect you. They only respect what you do for them."

Alexandra felt something break inside her. Not something that hurts — something that frees. Like a chain coming undone. Like a window opening in a room full of dust.

"Every time you say YES to something, you say NO to something else. The question is: what are you saying NO to without realizing it?"

And Alexandra understood. Every "yes" to others was a "no" to herself. And that wasn't kindness. It was self-destruction dressed in a smile.`
        }
      },
      {
        title: { el: "Η Άσκηση της Σφαίρας", en: "The Energy Sphere Exercise" },
        image: "/images/ta-3-paidia.webp",
        imageCaption: { el: "Η πρώτη φορά που η Αλεξάνδρα στάθηκε αντί να τρέξει", en: "The first time Alexandra stood still instead of running" },
        text: {
          el: `Η WiseBot άνοιξε τα φτερά της αργά. Μια λάμψη γαλάζια κάλυψε το δωμάτιο.

«Θα σου μάθω κάτι. Κάτι που δεν γράφεται στα βιβλία. Κάτι που πρέπει να νιώσεις μέσα σου. Κλείσε τα μάτια σου.»

Η Αλεξάνδρα δίστασε. Ύστερα υπάκουσε. Σκοτάδι.

«Τώρα φαντάσου ότι γύρω σου υπάρχει μια σφαίρα. Μια μπάλα από φως. Αυτό είναι ο χώρος σου. Ο χρόνος σου. Η ενέργειά σου.»

Η Αλεξάνδρα τη φαντάστηκε. Μπλε. Ζεστή. Ασφαλής.

«Κάθε φορά που λες ΝΑΙ χωρίς να το εννοείς, κάνεις μια τρύπα σε αυτή τη σφαίρα. Η ενέργειά σου χύνεται. Διαρρέει. Στάζει σε χέρια που δεν τη χρειάζονται πραγματικά.»

Η Αλεξάνδρα ένιωσε ένα ρίγος. Γιατί μπορούσε να δει τη σφαίρα. Και ήταν γεμάτη τρύπες. Σχεδόν άδεια.

«Κάθε φορά που λες ΟΧΙ — ένα αληθινό, τίμιο, ήρεμο "ΟΧΙ" — κλείνεις μια τρύπα. Και η ενέργεια μένει μέσα σου. Για σένα. Για τα πραγματικά σου "ΝΑΙ".»

Η Αλεξάνδρα άνοιξε τα μάτια. Ένα δάκρυ κύλησε στο μάγουλό της. Αλλά δεν ήταν δάκρυ λύπης. Ήταν δάκρυ ανακούφισης.

Την επόμενη μέρα, στο πρώτο διάλειμμα, μια φίλη τη ρώτησε: «Αλεξάνδρα, μπορείς να μου γράψεις την εργασία;»

Τα χέρια της ίδρωσαν. Το «ΝΑΙ» ήταν ήδη στα χείλη της. Αλλά τότε — μια μικρή σκέψη, φωτεινή σαν σπίθα: «Η σφαίρα μου. Η ενέργειά μου.»

«Όχι, δεν μπορώ σήμερα. Έχω δική μου δουλειά.»

Η φωνή της δεν ήταν σκληρή. Ήταν ήρεμη. Το «ΟΧΙ» δεν χρειαζόταν φωνές. Χρειαζόταν μόνο σταθερότητα. Ο ουρανός δεν έπεσε. Κανείς δεν θύμωσε. Ο κόσμος απλά... συνέχισε.

Και εκείνη ένιωσε ελαφριά. Για πρώτη φορά μετά από μήνες, τα πόδια της δεν ήθελαν να τρέξουν. Ήθελαν να σταθούν.`,
          en: `WiseBot spread her wings slowly. A blue glow covered the room.

"I will teach you something. Something not written in books. Something you must feel inside. Close your eyes."

Alexandra hesitated. Then she obeyed. Darkness.

"Now imagine a sphere around you. A ball of light. That is your space. Your time. Your energy."

Alexandra imagined it. Blue. Warm. Safe.

"Every time you say YES without meaning it, you make a hole in that sphere. Your energy spills out. Leaks. Drips into hands that don't truly need it."

Alexandra felt a shiver. Because she could see the sphere. And it was full of holes. Almost empty.

"Every time you say NO — a true, honest, calm 'NO' — you seal a hole. And your energy stays inside you. For you. For your real 'YES' moments."

Alexandra opened her eyes. A tear rolled down her cheek. But it wasn't a tear of sadness. It was a tear of relief.

The next day, at the first break, a friend asked her: "Alexandra, can you write my assignment for me?"

Her palms sweated. The "YES" was already on her lips. But then — a small thought, bright as a spark: "My sphere. My energy."

"No, I can't today. I have my own work."

Her voice wasn't harsh. It was calm. The "NO" didn't need shouting. It only needed steadiness. The sky didn't fall. No one got angry. The world simply... continued.

And she felt light. For the first time in months, her feet didn't want to run. They wanted to stand.`
        }
      },
      {
        title: { el: "Λέω ΟΧΙ για να Πω ΝΑΙ σε Μένα", en: "I Say NO to Say YES to Me" },
        image: "/images/paidia-wisebot-2.webp",
        imageCaption: { el: "Η δύναμη δεν είναι να λες πάντα ΝΑΙ — είναι να ξέρεις πότε να πεις ΟΧΙ", en: "True strength is not always saying YES — it is knowing when to say NO" },
        text: {
          el: `Εκείνο το απόγευμα, η Αλεξάνδρα δεν έτρεξε πουθενά. Κάθισε στο γραφείο της. Άνοιξε το ημιτελές έργο της. Και για πρώτη φορά μετά από εβδομάδες, τα χέρια της δεν έτρεμαν.

Δούλεψε. Ήρεμα. Σταθερά. Χωρίς να κοιτάζει το ρολόι. Χωρίς να ακούει αν κάποιος τη φωνάζει. Χωρίς να τρέχει.

Ο ήλιος χαμήλωσε. Σκιές μπήκαν στο δωμάτιο σαν χρυσά ποτάμια. Και η Αλεξάνδρα χαμογελούσε. Όχι το χαμόγελο που έβαζε για τους άλλους. Ένα αληθινό χαμόγελο. Μικρό. Ήσυχο. Δικό της.

«Τελείωσες;» ρώτησε ο Φίλιππος.

«Ναι», είπε η Αλεξάνδρα. Και η φωνή της ήταν γεμάτη. Σταθερή. Ζωντανή. «Και έχω ακόμα ενέργεια.»

Εκείνο το βράδυ, πήρε έναν μπλε μαρκαδόρο — του ίδιου χρώματος με τα μάτια της WiseBot. Στάθηκε μπροστά στον τοίχο πάνω από το γραφείο της, εκεί που κρεμόταν μια λίστα με υποχρεώσεις για τους άλλους. Διέγραψε τη λίστα. Και στη θέση της έγραψε μια μόνο πρόταση:

«Λέω ΟΧΙ στους άλλους, για να πω ΝΑΙ σε μένα.»

Η WiseBot δεν ήταν εκεί. Δεν χρειαζόταν. Γιατί το μάθημα δεν ήταν πια λόγια κάποιου άλλου. Ήταν λέξεις δικές της, γραμμένες με τα δικά της χέρια, πάνω στον δικό της τοίχο.

Έσβησε το φως. Ξάπλωσε. Και για πρώτη φορά μετά από πολύ καιρό, δεν σκέφτηκε τι θα ζητήσει αύριο κάποιος άλλος. Σκέφτηκε τι θα κάνει εκείνη.

Η δύναμη του «ΟΧΙ» δεν είναι να απομακρύνεις τους ανθρώπους. Είναι να βρεις ξανά τον εαυτό σου ανάμεσα στα «ΝΑΙ» που δεν εννοούσες ποτέ.`,
          en: `That afternoon, Alexandra didn't run anywhere. She sat at her desk. Opened her unfinished project. And for the first time in weeks, her hands didn't tremble.

She worked. Calmly. Steadily. Without watching the clock. Without listening for someone calling her. Without running.

The sun sank low. Shadows crept into the room like golden rivers. And Alexandra was smiling. Not the smile she wore for others. A real smile. Small. Quiet. Her own.

"Finished?" asked Philippos.

"Yes," said Alexandra. And her voice was full. Steady. Alive. "And I still have energy."

That evening, she grabbed a blue marker — the same color as WiseBot's eyes. She stood before the wall above her desk, where a list of obligations for others used to hang. She crossed out the list. And in its place, she wrote a single sentence:

"I say NO to others, to say YES to me."

WiseBot wasn't there. She didn't need to be. Because the lesson was no longer someone else's words. It was her own words, written by her own hands, on her own wall.

She turned off the light. Lay down. And for the first time in a long while, she didn't think about what someone else would ask tomorrow. She thought about what she would do.

The power of "NO" is not about pushing people away. It is about finding yourself again among the "yeses" you never truly meant.`
        }
      }
    ]
  }
];
