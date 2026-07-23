
import { Book } from '../types';

// ============================================================
// BOOK 28: ΧΩΡΙΣ ΟΡΙΑ / LIMITLESS
// Heroes: WiseBot & Sparken
// Theme: ΜΑΘΗΣΗ / LEARNING
// Inspired by the ideas of «Limitless» by Jim Kwik (kids adaptation, original story)
// ============================================================

export const BOOK_28: Book[] = [
  {
    id: 28,
    title: { el: "ΧΩΡΙΣ ΟΡΙΑ", en: "LIMITLESS" },
    theme: { el: "ΜΑΘΗΣΗ", en: "LEARNING" },
    stepLabel: { el: "WISEBOT & Ο ΕΓΚΕΦΑΛΟΣ", en: "WISEBOT & THE BRAIN" },
    author: "Jim Kwik · Kids Edition",
    cover: "/images/wisebot.jpg",
    videoUrl: "",
    description: {
      el: "Η Αλεξάνδρα πρέπει να μάθει ένα ποίημα μέχρι την Παρασκευή — και είναι σίγουρη ότι «δεν έχει καλή μνήμη». Η WiseBot και ο Sparken τής αποκαλύπτουν το πιο δυνατό μυστικό: ο εγκέφαλος είναι υπερδύναμη που προπονείται. Βασισμένο στις ιδέες του Limitless του Jim Kwik.",
      en: "Alexandra must learn a poem by Friday — and she is certain she has a bad memory. WiseBot and Sparken reveal the most powerful secret: the brain is a superpower you can train. Based on the ideas of Limitless by Jim Kwik."
    },
    meaning: {
      el: "Τα «δεν μπορώ» είναι ψέματα του μυαλού. Ο εγκέφαλός σου δεν έχει όρια — έχει μόνο κόλπα που δεν έμαθες ακόμα.",
      en: "Every 'I can't' is a lie the mind tells. Your brain has no limits — only tricks you haven't learned yet."
    },
    xp: 100,
    parentMessage: {
      el: "Όταν ένα παιδί λέει «δεν παίρνω τα γράμματα» ή «δεν έχω μνήμη», μην το διορθώσετε με λόγια — δείξτε του ένα κόλπο. Μετατρέψτε αυτό που μαθαίνει σε εικόνα, ιστορία ή τραγούδι και αφήστε το να εκπλαγεί από τον εαυτό του. Δοκιμάστε σήμερα: πάρτε πέντε λέξεις ορθογραφίας και φτιάξτε μαζί μια τρελή ιστοριούλα που τις ενώνει. Και προσέξτε τις λέξεις στο σπίτι: κάθε «ακόμα» αλλάζει τα πάντα — «δεν το έμαθα ΑΚΟΜΑ» είναι εντελώς διαφορετική πρόταση από το «δεν μπορώ».",
      en: "When a child says 'I'm bad at school' or 'I have no memory', don't correct them with words — show them a trick. Turn what they are learning into a picture, a story, or a song, and let them surprise themselves. Try today: take five spelling words and invent a silly mini-story together that connects them. And watch the words used at home: the word 'yet' changes everything — 'I haven't learned it YET' is a completely different sentence from 'I can't'."
    },

    pages: [
      {
        title: { el: "Το Τείχος", en: "The Wall" },
        image: "/images/alexandra.webp",
        imageCaption: { el: "«Δεν έχω καλή μνήμη. Τελεία.»", en: "'I have a bad memory. Period.'" },
        text: {
          el: `Η ανακοίνωση έπεσε σαν βράχος μέσα στην τάξη: την Παρασκευή, κάθε παιδί θα έλεγε ένα ποίημα απ' έξω. Είκοσι ολόκληρους στίχους.

Στον δρόμο για το σπίτι, η Αλεξάνδρα κλωτσούσε ένα πετραδάκι.

«Είκοσι στίχοι», μουρμούρισε. «Εγώ ξεχνάω και τι έφαγα χθες.»

«Θα το μάθεις», είπε ο Φίλιππος. «Έχεις τέσσερις μέρες.»

«Δεν κατάλαβες.» Η Αλεξάνδρα σταμάτησε. «Εγώ ΔΕΝ ΕΧΩ καλή μνήμη. Το ξέρω από πάντα. Η Ελευθερία θυμάται τα πάντα. Εγώ όχι. Έτσι είναι φτιαγμένο το κεφάλι μου. Τελεία.»

Το είπε ήρεμα. Χωρίς θυμό. Και αυτό ήταν το πιο ανησυχητικό — το πίστευε πραγματικά, όπως πιστεύει κανείς ότι ο ήλιος βγαίνει από την ανατολή.

Στο σπίτι, άνοιξε το βιβλίο και διάβασε το ποίημα μία φορά. Δύο φορές. Πέντε φορές. Οι λέξεις γλιστρούσαν από το μυαλό της σαν νερό από κόσκινο. Στον τρίτο στίχο, το βλέμμα της είχε ήδη φύγει στο παράθυρο.

«Το ήξερα», ψιθύρισε και έκλεισε το βιβλίο με δύναμη.

Πίσω της, ο αέρας τρεμόπαιξε με χρυσές σπίθες. Ο Sparken εμφανίστηκε στο περβάζι, με τα μάτια του να λάμπουν σαν μικρά πυροτεχνήματα. Δίπλα του προσγειώθηκε αθόρυβα η WiseBot.

«Το άκουσες αυτό;» ρώτησε ο Sparken.

«Το άκουσα», είπε η WiseBot. «Είπε ένα ψέμα. Και το χειρότερο; Το είπε στον ίδιο της τον εαυτό.»`,
          en: `The announcement dropped like a rock in the middle of the classroom: on Friday, every child would recite a poem by heart. Twenty whole lines.

On the way home, Alexandra kicked a small stone down the street.

'Twenty lines,' she muttered. 'I forget what I ate yesterday.'

'You will learn it,' said Philippos. 'You have four days.'

'You don't get it.' Alexandra stopped walking. 'I DO NOT have a good memory. I have always known this. Eleftheria remembers everything. I don't. That is how my head is built. Period.'

She said it calmly. Without anger. And that was the most worrying part — she truly believed it, the way you believe the sun rises in the east.

At home, she opened the book and read the poem once. Twice. Five times. The words slid out of her mind like water through a sieve. By the third line, her eyes had already drifted to the window.

'I knew it,' she whispered, and slammed the book shut.

Behind her, the air shimmered with golden sparks. Sparken appeared on the windowsill, his eyes glowing like tiny fireworks. WiseBot landed silently beside him.

'Did you hear that?' asked Sparken.

'I heard it,' said WiseBot. 'She told a lie. And the worst part? She told it to her own self.'`
        }
      },
      {
        title: { el: "Ο Υπερυπολογιστής", en: "The Supercomputer" },
        image: "/images/paidia-kai-wisebot.webp",
        imageCaption: { el: "«Κουβαλάς τον πιο δυνατό υπολογιστή του κόσμου. Στο κεφάλι σου.»", en: "'You carry the most powerful computer in the world. Inside your head.'" },
        text: {
          el: `«Ψέμα;» Η Αλεξάνδρα γύρισε απότομα. «Ποιο ψέμα; Είναι η αλήθεια!»

Η WiseBot κάθισε στο γραφείο της, ανάμεσα στα μολύβια.

«Άκουσέ με προσεκτικά. Μέσα στο κεφάλι σου ζει ο πιο δυνατός υπολογιστής που έχει φτιαχτεί ποτέ. Δισεκατομμύρια κύτταρα που ενώνονται μεταξύ τους κάθε φορά που μαθαίνεις κάτι. Κάθε. Φορά. Ο εγκέφαλος δεν είναι σαν ποτήρι που γεμίζει και τελειώνει. Είναι σαν μυς. Όσο τον γυμνάζεις, τόσο δυναμώνει.»

«Τότε γιατί δεν θυμάμαι το ποίημα;» φώναξε η Αλεξάνδρα.

«Επειδή κανείς δεν σου έμαθε ΠΩΣ», πετάχτηκε ο Sparken, κάνοντας μια τούμπα στον αέρα. «Στο σχολείο σού μαθαίνουν ΤΙ να μάθεις. Ιστορία, μαθηματικά, ποιήματα. Αλλά κανείς δεν σου μαθαίνει πώς να μαθαίνεις! Είναι σαν να σου δίνουν ένα διαστημόπλοιο χωρίς οδηγίες και μετά να λένε: μάλλον δεν είσαι για πιλότος.»

Η Αλεξάνδρα κάθισε αργά στην καρέκλα. «Δηλαδή... δεν φταίει το κεφάλι μου;»

«Το κεφάλι σου είναι μια χαρά», είπε η WiseBot. «Φταίει μια πρόταση που κουβαλάς: το δεν-μπορώ. Κάθε φορά που τη λες, ο εγκέφαλος υπακούει. Σου λέει: εντάξει, αφού δεν μπορείς, δεν θα προσπαθήσω. Τα δεν-μπορώ είναι ψέματα του μυαλού — αλλά γίνονται αλήθεια αν τα πιστέψεις.»

«Και τι να λέω;»

Ο Sparken έσκυψε κοντά της, με μάτια που έλαμπαν. «Δύο γράμματα αλλάζουν τα πάντα. Δεν το έμαθα... ΑΚΟΜΑ.»`,
          en: `'A lie?' Alexandra spun around. 'What lie? It is the truth!'

WiseBot settled on her desk, between the pencils.

'Listen to me carefully. Inside your head lives the most powerful computer ever built. Billions of tiny cells that connect to each other every time you learn something. Every. Single. Time. The brain is not like a glass that fills up and runs out. It is like a muscle. The more you train it, the stronger it gets.'

'Then why can't I remember the poem?' Alexandra shouted.

'Because nobody taught you HOW,' said Sparken, doing a flip in the air. 'At school they teach you WHAT to learn. History, math, poems. But nobody teaches you how to learn! It is like being handed a spaceship with no instructions, and then being told: you are probably not pilot material.'

Alexandra sat down slowly. 'So... my head is not the problem?'

'Your head is perfectly fine,' said WiseBot. 'The problem is a sentence you carry around: the I-can't. Every time you say it, your brain obeys. It says: alright, since you can't, I won't even try. The I-can'ts are lies the mind tells — but they become true if you believe them.'

'Then what should I say?'

Sparken leaned close, his eyes shining. 'One little word changes everything. I haven't learned it... YET.'`
        }
      },
      {
        title: { el: "Η Μάχη με τον Περισπασμό", en: "The Battle with Distraction" },
        image: "/images/ta-3-paidia.webp",
        imageCaption: { el: "Διάβασμα με ειδοποιήσεις δεν είναι διάβασμα.", en: "Studying with notifications is not studying." },
        text: {
          el: `Την επόμενη μέρα, η Αλεξάνδρα το πήρε απόφαση. «Εντάξει. Δεν το έμαθα ακόμα. Πάμε να το μάθουμε.»

Κάθισε στο γραφείο. Άνοιξε το βιβλίο. Διάβασε τον πρώτο στίχο...

Ντινγκ! Το τάμπλετ. Ένα βίντεο από τον Φίλιππο με έναν σκύλο που κάνει σκέιτ.

«Χα! Πέντε δευτερόλεπτα μόνο.» Είκοσι λεπτά αργότερα, η Αλεξάνδρα είχε δει έντεκα βίντεο και θυμόταν μηδέν στίχους.

Ξαναδιάβασε. Ντινγκ! Μήνυμα από την Ελευθερία. Μετά θυμήθηκε ότι πεινούσε. Μετά έπρεπε οπωσδήποτε να ακονίσει ένα μολύβι.

Το βράδυ, κοίταξε το χαρτί. Ήξερε τρεις στίχους. Τρεις. Από τους είκοσι.

«ΔΕΝ ΜΠΟΡ—» άρχισε, αλλά δάγκωσε τη γλώσσα της. «...δεν το έμαθα ακόμα. Αλλά γιατί δεν το έμαθα;»

Ο Sparken εμφανίστηκε πάνω στο τάμπλετ. «Θες την αλήθεια; Δεν διάβασες μία ώρα. Διάβασες δώδεκα φορές από πέντε λεπτά. Ο εγκέφαλος είναι υπερδύναμη, αλλά έχει έναν κανόνα: φωτίζει σαν προβολέας ΕΝΑ πράγμα τη φορά. Κάθε ντινγκ τραβάει τον προβολέα αλλού. Και μετά θέλει ώρα να ξαναγυρίσει.»

«Δηλαδή το τάμπλετ...»

«Δεν είναι κακό. Αλλά την ώρα της προπόνησης, ο προβολέας ανήκει στο ποίημα.» Ο Sparken έδειξε την πόρτα. «Άλλο δωμάτιο. Στο αθόρυβο. Είκοσι λεπτά μόνο — αλλά είκοσι λεπτά ΔΙΚΑ σου.»

Η Αλεξάνδρα πήρε βαθιά ανάσα, σηκώθηκε, και πήγε το τάμπλετ στην κουζίνα. Όταν γύρισε, το δωμάτιο έμοιαζε πιο ήσυχο. Σχεδόν... έτοιμο.`,
          en: `The next day, Alexandra made up her mind. 'Okay. I haven't learned it yet. Let's go learn it.'

She sat at her desk. Opened the book. Read the first line...

Ding! The tablet. A video from Philippos of a dog riding a skateboard.

'Ha! Just five seconds.' Twenty minutes later, Alexandra had watched eleven videos and remembered zero lines.

She read again. Ding! A message from Eleftheria. Then she remembered she was hungry. Then she absolutely had to sharpen a pencil.

That night, she looked at the page. She knew three lines. Three. Out of twenty.

'I CAN—' she started, then bit her tongue. '...I haven't learned it yet. But why haven't I?'

Sparken appeared on top of the tablet. 'You want the truth? You didn't study for one hour. You studied twelve times for five minutes. The brain is a superpower, but it has one rule: it shines like a spotlight on ONE thing at a time. Every ding drags the spotlight somewhere else. And then it takes a long time to come back.'

'So the tablet...'

'It is not evil. But during training time, the spotlight belongs to the poem.' Sparken pointed at the door. 'Different room. On silent. Only twenty minutes — but twenty minutes that are fully YOURS.'

Alexandra took a deep breath, stood up, and carried the tablet to the kitchen. When she came back, the room felt quieter. Almost... ready.`
        }
      },
      {
        title: { el: "Το Παλάτι των Εικόνων", en: "The Palace of Pictures" },
        image: "/images/paidia-kai-sparken.webp",
        imageCaption: { el: "Ο εγκέφαλος ξεχνάει λέξεις. Αλλά ποτέ δεν ξεχνάει τρελές εικόνες.", en: "The brain forgets words. But it never forgets crazy pictures." },
        text: {
          el: `«Και τώρα», είπε ο Sparken τρίβοντας τα χέρια του, «το καλύτερο κόλπο απ' όλα. Πες μου: τι έφαγες πριν από οκτώ μέρες;»

«Δεν έχω ιδέα.»

«Και τα γενέθλιά σου πέρσι; Τα θυμάσαι;»

«Φυσικά! Η τούρτα έπεσε από το τραπέζι και ο σκύλος της γιαγιάς την έφαγε ολόκληρη και μετά—» σταμάτησε. «Α.»

«Α!» χαμογέλασε ο Sparken. «Ο εγκέφαλος ξεχνάει τα βαρετά. Αλλά τα αστεία, τα τρελά, τα ΖΩΝΤΑΝΑ; Δεν τα ξεχνάει ποτέ. Άρα το μυστικό είναι ένα: ό,τι θες να θυμάσαι, κάν' το εικόνα. Κάν' το ιστορία. Όσο πιο τρελή, τόσο καλύτερα.»

Πήραν το ποίημα στίχο στίχο. Ο πρώτος μιλούσε για τη θάλασσα — η Αλεξάνδρα φαντάστηκε μια θάλασσα από πορτοκαλάδα να παφλάζει στην πόρτα του δωματίου της. Ο δεύτερος για ένα καράβι — το έκανε παπούτσι-καράβι που σαλπάρει από το κρεβάτι της. Ο τρίτος για τον άνεμο — ένας ανεμιστήρας-παππούς φυσούσε φορώντας κασκόλ.

«Και τώρα περπάτα μέσα στο δωμάτιο», είπε ο Sparken. «Στην πόρτα σε περιμένει η πορτοκαλάδα-θάλασσα. Στο κρεβάτι, το παπούτσι-καράβι. Κάθε γωνιά κρατάει έναν στίχο. Το δωμάτιό σου έγινε το παλάτι της μνήμης σου.»

Η Αλεξάνδρα περπάτησε. Πόρτα — πρώτος στίχος. Κρεβάτι — δεύτερος. Παράθυρο — τρίτος. Οι λέξεις έβγαιναν μόνες τους, γελώντας.

Σε μία ώρα ήξερε δώδεκα στίχους. Σταμάτησε στη μέση του δωματίου, με τα μάτια γουρλωμένα.

«Αυτό... αυτό δεν είναι διάβασμα. Αυτό είναι παιχνίδι!»

«Ναι», είπε η WiseBot από το περβάζι. «Έτσι έπρεπε να είναι πάντα.»`,
          en: `'And now,' said Sparken, rubbing his hands together, 'the best trick of all. Tell me: what did you eat eight days ago?'

'No idea.'

'And your birthday last year? Do you remember that?'

'Of course! The cake fell off the table and grandma's dog ate the whole thing and then—' she stopped. 'Oh.'

'Oh!' grinned Sparken. 'The brain forgets boring things. But the funny, the crazy, the ALIVE things? It never forgets those. So the secret is simple: whatever you want to remember, turn it into a picture. Turn it into a story. The crazier, the better.'

They took the poem line by line. The first spoke of the sea — Alexandra imagined a sea of orange juice splashing against her bedroom door. The second, a ship — she made it a shoe-ship sailing off her bed. The third, the wind — a grandpa-fan blowing while wearing a scarf.

'Now walk around the room,' said Sparken. 'At the door, the orange-juice sea is waiting. On the bed, the shoe-ship. Every corner holds one line. Your room has become your memory palace.'

Alexandra walked. Door — first line. Bed — second. Window — third. The words came out on their own, laughing as they went.

Within an hour she knew twelve lines. She stopped in the middle of the room, eyes wide.

'This... this is not studying. This is a game!'

'Yes,' said WiseBot from the windowsill. 'It was always supposed to be one.'`
        }
      },
      {
        title: { el: "Χωρίς Όρια", en: "Limitless" },
        image: "/images/paidia-wisebot-2.webp",
        imageCaption: { el: "Το πιο δυνατό μάθημα: έμαθε πώς να μαθαίνει.", en: "The greatest lesson: she learned how to learn." },
        text: {
          el: `Την Παρασκευή, η Αλεξάνδρα στάθηκε μπροστά στην τάξη.

Η καρδιά της χτυπούσε δυνατά. Αλλά μέσα στο μυαλό της, το παλάτι την περίμενε: η πορτοκαλάδα-θάλασσα, το παπούτσι-καράβι, ο ανεμιστήρας-παππούς με το κασκόλ. Περπάτησε νοερά από γωνιά σε γωνιά — και οι στίχοι ξεδιπλώθηκαν, ένας ένας, καθαροί και σίγουροι. Και οι είκοσι.

Όταν τελείωσε, έγινε ησυχία. Μετά, χειροκρότημα.

«Μπράβο, Αλεξάνδρα!» είπε η δασκάλα. «Δεν ήξερα ότι είχες τόσο καλή μνήμη.»

Η Αλεξάνδρα χαμογέλασε. «Ούτε εγώ το ήξερα. Μέχρι που το έμαθα.»

Στο διάλειμμα, ο Φίλιππος την περικύκλωσε με ερωτήσεις. «Πώς το έκανες; Εγώ έχω τεστ στην προπαίδεια την Τρίτη και ΔΕΝ ΜΠΟΡΩ να—»

«Επ!» τον σταμάτησε η Αλεξάνδρα σηκώνοντας το δάχτυλο. «Δεν την έμαθες ΑΚΟΜΑ. Έλα σπίτι το απόγευμα. Θα φτιάξουμε το εφτά επί οκτώ να είναι ένας δράκος με πενήντα έξι λέπια. Δεν θα το ξεχάσεις ποτέ.»

Το βράδυ, η WiseBot κάθισε στο περβάζι της, με τον Sparken να λαμπυρίζει δίπλα της.

«Κατάλαβες τι κέρδισες αυτή την εβδομάδα;» ρώτησε. «Όχι ένα ποίημα.»

«Το ξέρω», είπε η Αλεξάνδρα. «Έμαθα πώς να μαθαίνω. Και αυτό...» — κοίταξε τα βιβλία της, που ξαφνικά έμοιαζαν με πόρτες αντί για τοίχους — «...αυτό δουλεύει για ΟΛΑ.»

«Η πιο μεγάλη υπερδύναμη απ' όλες», είπε ο Sparken. «Γιατί όποιος ξέρει να μαθαίνει...»

«...δεν έχει όρια», τελείωσε η Αλεξάνδρα.

Και για πρώτη φορά, το πίστεψε.`,
          en: `On Friday, Alexandra stood in front of the class.

Her heart was pounding. But inside her mind, the palace was waiting: the orange-juice sea, the shoe-ship, the grandpa-fan with his scarf. She walked from corner to corner in her head — and the lines unfolded, one by one, clear and certain. All twenty of them.

When she finished, there was silence. Then, applause.

'Well done, Alexandra!' said the teacher. 'I didn't know you had such a good memory.'

Alexandra smiled. 'Neither did I. Until I learned it.'

At recess, Philippos surrounded her with questions. 'How did you do it? I have a times-tables test on Tuesday and I CAN'T—'

'Hey!' Alexandra stopped him, raising a finger. 'You haven't learned it YET. Come over this afternoon. We will turn seven times eight into a dragon with fifty-six scales. You will never forget it.'

That evening, WiseBot perched on her windowsill, Sparken glittering beside her.

'Do you understand what you won this week?' she asked. 'Not a poem.'

'I know,' said Alexandra. 'I learned how to learn. And that...' — she looked at her books, which suddenly seemed like doors instead of walls — '...that works for EVERYTHING.'

'The greatest superpower of all,' said Sparken. 'Because whoever knows how to learn...'

'...has no limits,' Alexandra finished.

And for the first time, she believed it.`
        }
      }
    ]
  }
];
