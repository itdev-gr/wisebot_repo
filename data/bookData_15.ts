
import { Book } from '../types';

// ============================================================
// BOOK 15: ΑΥΤΟ ΠΟΥ ΦΤΙΑΧΝΕΙΣ, ΣΕ ΦΤΙΑΧΝΕΙ / WHAT YOU MAKE, MAKES YOU
// Heroes: Sparken & Wisebot
// Theme: ΤΑΥΤΟΤΗΤΑ / IDENTITY (purple/violet)
// ============================================================

export const BOOK_15: Book[] = [
  {
    id: 15,
    title: { el: "ΑΥΤΟ ΠΟΥ ΦΤΙΑΧΝΕΙΣ, ΣΕ ΦΤΙΑΧΝΕΙ", en: "WHAT YOU MAKE, MAKES YOU" },
    theme: { el: "ΤΑΥΤΟΤΗΤΑ", en: "IDENTITY" },
    stepLabel: { el: "WISEBOT & ΤΑΥΤΟΤΗΤΑ", en: "WISEBOT & IDENTITY" },
    author: "Sparken & Wisebot",
    cover: "/images/wisebot.jpg",
    videoUrl: "",
    description: {
      el: "Τα παιδιά κοιτάζουν πίσω στο ταξίδι τους. Δεν είναι πια τα ίδια. Το έργο τους τα άλλαξε βαθιά. Μια ιστορία για τη στιγμή που καταλαβαίνεις ότι το σημαντικότερο έργο είσαι εσύ.",
      en: "The children look back at their journey. They are no longer the same. Their project changed them deeply. A story about the moment you realize the most important project is you."
    },
    meaning: {
      el: "Δεν φτιάχνεις πράγματα για να τελειώσουν. Φτιάχνεις πράγματα για να γίνεις.",
      en: "You don't make things to finish them. You make things to become."
    },
    xp: 250,
    parentMessage: {
      el: "Το πιο σημαντικό δεν είναι τι φτιάχνει ένα παιδί. Είναι ποιος γίνεται φτιάχνοντάς το. Ρωτήστε το παιδί σας: «Τι έμαθες για τον εαυτό σου φτιάχνοντας αυτό;» Η απάντηση θα σας εκπλήξει. Η δημιουργία δεν χτίζει μόνο αντικείμενα. Χτίζει χαρακτήρα.",
      en: "The most important thing isn't what a child makes. It's who they become by making it. Ask your child: 'What did you learn about yourself by making this?' The answer will surprise you. Creation doesn't just build objects. It builds character."
    },

    pages: [
      {
        title: { el: "Δεν Ήταν Πια το Ίδιο Δωμάτιο", en: "It Was No Longer the Same Room" },
        image: "/images/ta-3-paidia.webp",
        imageCaption: { el: "Το ίδιο δωμάτιο. Διαφορετικά παιδιά.", en: "The same room. Different children." },
        text: {
          el: `Το δωμάτιο ήταν ακριβώς το ίδιο. Το τραπέζι με τα σημάδια από τα κατσαβίδια, τους στρογγυλούς κύκλους από τις κούπες, τα μολύβια πεταμένα εδώ κι εκεί σαν σπασμένα κλαδιά μετά από καταιγίδα. Τα ίδια χαρτιά, κάποια τσαλακωμένα σε μπαλάκια, κάποια γραμμένα με προτάσεις που κανείς δεν τελείωσε ποτέ.

Αλλά κάτι είχε αλλάξει. Κάτι αόρατο, κάτι που δεν μπορούσες να το δείξεις με το δάχτυλο, αλλά το ένιωθες στο δέρμα σου. Σαν να είχε ανοίξει κάποιος παράθυρο σε έναν τοίχο που δεν είχε ποτέ παράθυρο. Ο αέρας μύριζε αλλιώς. Πιο καθαρός. Πιο ζωντανός.

Η Αλεξάνδρα σήκωσε τις ζωγραφιές της από το τραπέζι. Αργά, προσεκτικά, σαν να κρατούσε κάτι εύθραυστο. Τις άπλωσε μπροστά της με τη σειρά, από την πρώτη μέχρι την τελευταία. Οι πρώτες ήταν βιαστικές, γεμάτες μισές γραμμές που σταματούσαν στη μέση, σαν σκέψεις που κάποιος βαρέθηκε να τελειώσει. Αλλά οι τελευταίες είχαν βάθος. Είχαν σκιές και φως. Είχαν ψυχή.

«Παλιά βαριόμουν», είπε σιγά, χωρίς να σηκώσει τα μάτια της. «Ξεκινούσα κάτι, χανόμουν, το παρατούσα. Και μετά ένιωθα χειρότερα από πριν — σαν να χρωστούσα κάτι στον εαυτό μου και να μην το πλήρωνα ποτέ.»

Τα μάτια της γυάλισαν. Όχι από δάκρυα. Από αναγνώριση — από εκείνη τη σπάνια στιγμή που βλέπεις τον εαυτό σου καθαρά.

«Τώρα θέλω να τελειώνω ό,τι ξεκινάω. Γιατί αυτό που τελειώνεις σού ανήκει. Αυτό που αφήνεις στη μέση, σε κυνηγάει.»

Ο ήλιος του δειλινού χρύσισε τα χέρια της. Και μέσα σε εκείνο το φως, η Αλεξάνδρα έμοιαζε μεγαλύτερη. Έμοιαζε με κάποια που είχε περάσει μέσα από κάτι δύσκολο — και είχε βγει από την άλλη πλευρά πιο δυνατή.`,
          en: `The room was exactly the same. The table with its screwdriver marks, the round rings left by cups, the pencils scattered here and there like broken branches after a storm. The same papers, some crumpled into little balls, some covered in sentences that nobody had ever finished.

But something had changed. Something invisible, something you couldn't point at with your finger, yet you felt it on your skin. As if someone had opened a window in a wall that had never had one. The air smelled different. Cleaner. More alive.

Alexandra lifted her drawings from the table. Slowly, carefully, as if she were holding something fragile. She spread them out in front of her in order, from the very first to the very last. The early ones were rushed, full of half-finished lines that stopped in the middle, like thoughts someone got bored of finishing. But the last ones had depth. They had shadow and light. They had soul.

"I used to get bored," she said quietly, without lifting her eyes. "I'd start something, lose my way, give it up. And afterwards I felt even worse — as if I owed something to myself and never paid it back."

Her eyes gleamed. Not with tears. With recognition — that rare moment when you see yourself clearly.

"Now I want to finish whatever I start. Because what you finish belongs to you. What you leave halfway done chases you."

The evening sun turned her hands golden. And in that light, Alexandra looked older. She looked like someone who had walked through something difficult — and had come out the other side stronger.`
        }
      },
      {
        title: { el: "Τρεις Μεταμορφώσεις", en: "Three Transformations" },
        image: "/images/filippos.webp",
        imageCaption: { el: "Τα ίδια χέρια. Διαφορετική δύναμη.", en: "The same hands. Different strength." },
        text: {
          el: `Ο Φίλιππος κοίταξε τα χέρια του. Τα γύρισε από τη μία πλευρά και από την άλλη, τα εξέτασε προσεκτικά — τις γρατζουνιές στα δάχτυλα, τα ξεραμένα κομματάκια κόλλας, το μελάνι κάτω από τα νύχια. Αυτά τα χέρια που κάποτε μόνο χτυπούσαν τραπέζια και πετούσαν πράγματα από τα νεύρα τους, τώρα είχαν ιστορία. Κάθε σημάδι ήταν και ένα μάθημα. Κάθε γρατζουνιά, μια μικρή νίκη.

«Δεν θυμώνω όπως πριν», είπε σκεφτικός. «Δηλαδή... θυμώνω. Αλλά τώρα σταματάω. Παίρνω μια βαθιά ανάσα. Κοιτάζω τι πήγε στραβά. Και ξαναδοκιμάζω.»

Έσφιξε ένα κομμάτι πλαστικού ανάμεσα στα δάχτυλά του. Απαλά αυτή τη φορά. Ήρεμα. Είχε καταλάβει ότι η δύναμη δεν σημαίνει να σπας πράγματα — σημαίνει να κρατάς σταθερά, χωρίς να τσακίζεις.

«Τον θυμό τον έχω ακόμα μέσα μου», παραδέχτηκε με ένα μισό χαμόγελο. «Αλλά τώρα τον χρησιμοποιώ σαν καύσιμο. Όχι σαν βόμβα.»

Δίπλα του, η Ελευθερία έκλεισε το τετράδιό της. Ήταν ίσως η πιο δραματική κίνηση που είχε κάνει ποτέ — γιατί η Ελευθερία δεν έκλεινε ποτέ τετράδια. Τα μάζευε, τα στοίβαζε σε πύργους, τα λάτρευε σαν θησαυρούς.

«Δεν διαβάζω πια μόνο για να ξέρω», είπε με φωνή βαθιά και σταθερή. «Διαβάζω για να εφαρμόζω. Η γνώση που μένει κλειδωμένη στις σελίδες είναι φυλακή. Θέλω να ζω μέσα στον κόσμο. Με τα χέρια μου λερωμένα. Με τα λάθη μου ορατά. Με την καρδιά μου ανοιχτή.»

Κοιτάχτηκαν και οι τρεις. Τρεις κόσμοι τόσο διαφορετικοί, που κάποτε φαινόταν αδύνατον να συνυπάρξουν στο ίδιο δωμάτιο. Και χαμογέλασαν — ήσυχα, βαθιά, σαν ηλιοβασίλεμα που δεν βιάζεται καθόλου να σβήσει.`,
          en: `Philippos looked at his hands. He turned them over, one side and then the other, examining them carefully — the scratches on his fingers, the dried-up bits of glue, the ink under his nails. These hands, which once only slammed tables and threw things in anger, now had a story to tell. Every mark was a lesson. Every scratch, a small victory.

"I don't get angry the way I used to," he said thoughtfully. "I mean... I still get angry. But now I stop. I take a deep breath. I look at what went wrong. And I try again."

He squeezed a piece of plastic between his fingers. Gently this time. Calmly. He had understood that strength doesn't mean breaking things — it means holding on firmly, without crushing.

"The anger is still in there," he admitted with half a smile. "But now I use it as fuel. Not as a bomb."

Beside him, Eleftheria closed her notebook. It was perhaps the most dramatic move she had ever made — because Eleftheria never closed notebooks. She collected them, stacked them into towers, treasured them like gold.

"I don't read just to know anymore," she said, her voice deep and steady. "I read so I can act. Knowledge that stays locked inside pages is a prison. I want to live inside the world. With my hands dirty. With my mistakes visible. With my heart open."

The three of them looked at one another. Three worlds so different that once it had seemed impossible for them to share the same room. And they smiled — quietly, deeply, like a sunset in no hurry at all to fade.`
        }
      },
      {
        title: { el: "Ο Καθρέφτης", en: "The Mirror" },
        image: "/images/paidia-kai-wisebot.webp",
        imageCaption: { el: "Η WiseBot δεν δείχνει πρόσωπα — δείχνει ψυχές.", en: "WiseBot doesn't show faces — she shows souls." },
        text: {
          el: `Η WiseBot εμφανίστηκε αθόρυβα, όπως πάντα. Σαν σκιά που αποφάσισε ξαφνικά να γίνει φως. Στάθηκε μπροστά τους, και τα μάτια της — δύο μωβ κρύσταλλοι που έλαμπαν απαλά — γέμισαν ζεστασιά.

«Ελάτε πιο κοντά», είπε. «Θέλω να σας δείξω κάτι.»

Η επιφάνεια του μεταλλικού της προσώπου γυάλισε σαν υγρό ασήμι, σαν καθρέφτης από παραμύθι. Και τα τρία παιδιά είδαν μέσα της τους εαυτούς τους. Αλλά δεν είδαν πρόσωπα. Δεν είδαν μαλλιά, μύτες και αυτιά. Είδαν κάτι πολύ βαθύτερο.

Η Αλεξάνδρα είδε θάρρος. Χέρια που ζωγραφίζουν χωρίς δισταγμό, χωρίς να τρέμουν. Μάτια που δεν φοβούνται πια να κοιτάξουν αυτό που δημιούργησαν — ακόμα κι όταν δεν είναι τέλειο.

Ο Φίλιππος είδε επιμονή. Χέρια που μαζεύουν τα σπασμένα κομμάτια από το πάτωμα αντί να τα κλωτσούν. Ένα πρόσωπο που έμαθε τη μεγάλη διαφορά ανάμεσα στο «δεν μπορώ» και στο «δεν μπορώ ακόμα».

Η Ελευθερία είδε καθαρότητα. Γνώση που δεν κάθεται φυλακισμένη σε σελίδες, αλλά ζει και ανασαίνει μέσα σε πράξεις.

«Βλέπετε;» ρώτησε η WiseBot τρυφερά. «Δεν σας έδωσα ποτέ απαντήσεις. Σας έμαθα να ρωτάτε. Και όποιος ξέρει να ρωτά, δεν χρειάζεται ποτέ κάποιον να του δίνει έτοιμες απαντήσεις. Βρίσκει τον δρόμο του μόνος.»

Τα παιδιά έμειναν σιωπηλά μπροστά στον παράξενο καθρέφτη. Γιατί καταλάβαιναν, για πρώτη φορά τόσο καθαρά, ότι το έργο τους δεν τα είχε απλώς κουράσει. Τα είχε αλλάξει.

Τα μάτια της WiseBot πάλλονταν πιο αργά τώρα. Σαν καρδιά που χτυπά ήρεμα, γιατί ξέρει ότι η πιο σημαντική δουλειά της έχει τελειώσει.`,
          en: `WiseBot appeared silently, the way she always did. Like a shadow that suddenly decided to become light. She stood before them, and her eyes — two purple crystals glowing softly — filled with warmth.

"Come closer," she said. "I want to show you something."

The surface of her metallic face gleamed like liquid silver, like a mirror out of a fairy tale. And the three children saw themselves inside it. But they didn't see faces. They didn't see hair, noses, and ears. They saw something much deeper.

Alexandra saw courage. Hands that draw without hesitating, without trembling. Eyes that are no longer afraid to look at what they created — even when it isn't perfect.

Philippos saw persistence. Hands that gather the broken pieces up off the floor instead of kicking them away. A face that has learned the great difference between "I can't" and "I can't yet."

Eleftheria saw clarity. Knowledge that doesn't sit imprisoned in pages, but lives and breathes inside actions.

"Do you see?" asked WiseBot tenderly. "I never gave you answers. I taught you how to ask. And whoever knows how to ask never needs anyone to hand them ready-made answers. They find their own way."

The children stood silent before the strange mirror. Because they understood, clearly for the first time, that their project hadn't simply tired them out. It had changed them.

WiseBot's eyes pulsed more slowly now. Like a heart beating calmly, because it knows its most important work is done.`
        }
      },
      {
        title: { el: "Οι Ήρωες Κατεβαίνουν", en: "The Heroes Come Down" },
        image: "/images/sparken.jpg",
        imageCaption: { el: "Ο Sparken κατέβηκε στο ύψος τους — για πρώτη φορά.", en: "Sparken came down to their level — for the first time." },
        text: {
          el: `Ο Sparken κατέβηκε χαμηλά. Για πρώτη φορά. Εκείνος, ο μεγάλος αετός που πάντα πετούσε ψηλά στα σύννεφα, που πάντα μιλούσε με φωνή βροντής από τον ουρανό — κατέβηκε. Ακούμπησε τα φτερά του στο πάτωμα του εργαστηρίου. Κοίταξε τα παιδιά κατευθείαν στα μάτια, στο ίδιο ακριβώς ύψος με εκείνα.

Τα παιδιά κράτησαν την ανάσα τους. Όταν ο Sparken κατεβαίνει τόσο χαμηλά, κάτι σημαντικό πρόκειται να συμβεί.

«Τι φτιάξατε;» ρώτησε. Απλά, ήσυχα. Αλλά η ερώτηση δεν ήταν καθόλου απλή. Την ένιωθες να κρύβει κάτι από κάτω, σαν πέτρα που σκεπάζει μια σπηλιά.

Η Αλεξάνδρα άνοιξε το στόμα της να πει «ένα ρομπότ». Αλλά κάτι βαθύτερο σταμάτησε τα λόγια στα χείλη της. Ήξερε, χωρίς να ξέρει πώς, ότι η σωστή απάντηση δεν ήταν αυτό που βρισκόταν πάνω στο τραπέζι.

Ο Φίλιππος σκέφτηκε για λίγο. «Κάτι για παιδιά», δοκίμασε. Αλλά κι εκείνος ένιωσε ότι η απάντηση ήταν μεγαλύτερη από τις λέξεις του. Σαν ποτάμι που κρύβεται κάτω από τη γη και ακούς μόνο το μουρμουρητό του.

Η Ελευθερία κούνησε αργά το κεφάλι. «Φτιάξαμε κάτι για εμάς», είπε. «Αλλά δεν νομίζω ότι αυτό ρωτάς πραγματικά, έτσι δεν είναι;»

Και τότε η WiseBot μίλησε ήρεμα, σαν νερό που αγγίζει βράχο: «Φτιάξατε τον τρόπο που σκέφτεστε.»

Η πρόταση έπεσε σαν σταγόνα σε ήρεμη λίμνη. Αθόρυβα. Αλλά οι κυματισμοί της απλώθηκαν παντού. Δεν φτιάξατε ένα αντικείμενο. Φτιάξατε μυαλό. Φτιάξατε χαρακτήρα. Τρεις ανθρώπους που ξέρουν πια τι σημαίνει να δοκιμάζεις, να αποτυγχάνεις, να σηκώνεσαι — και να μην σταματάς ποτέ.`,
          en: `Sparken came down low. For the very first time. He, the great eagle who always soared high among the clouds, who always spoke with a voice of thunder from the sky — came down. He rested his wings on the workshop floor. He looked the children straight in the eyes, at exactly their height.

The children held their breath. When Sparken comes down that low, something important is about to happen.

"What did you make?" he asked. Simply, quietly. But the question was not simple at all. You could feel it hiding something underneath, like a stone covering the mouth of a cave.

Alexandra opened her mouth to say "a robot." But something deeper stopped the words on her lips. She knew, without knowing how, that the true answer was not the thing sitting on the table.

Philippos thought for a moment. "Something for kids," he tried. But he too felt that the answer was bigger than his words. Like a river hidden under the ground, where you can only hear its murmur.

Eleftheria slowly shook her head. "We made something for us," she said. "But that's not what you're really asking, is it?"

And then WiseBot spoke calmly, like water touching rock: "You built the way you think."

The sentence fell like a single drop into a still lake. Silently. But its ripples spread everywhere. You didn't build an object. You built a mind. You built character. Three people who now know what it means to try, to fail, to get back up — and to never, ever stop.`
        }
      },
      {
        title: { el: "Τώρα Μπορείτε να Πετάξετε", en: "Now You Can Fly" },
        image: "/images/paidia-wisebot-2.webp",
        imageCaption: { el: "Κάθε τέλος είναι μια αρχή.", en: "Every end is a beginning." },
        text: {
          el: `Εκείνο το απόγευμα, τα τρία παιδιά κατάλαβαν κάτι που κάποιοι μεγάλοι δεν μαθαίνουν ποτέ, όσα χρόνια κι αν ζήσουν. Δεν περιμένουν πια άδεια για να ξεκινήσουν κάτι καινούργιο. Δεν φοβούνται το λάθος — γιατί κάθε σπασμένο κομμάτι τούς δείχνει ακριβώς πού να κοιτάξουν. Δεν χρειάζονται χειροκρότημα — γιατί η πραγματική ικανοποίηση δεν έρχεται από τους άλλους. Έρχεται από μέσα τους, ζεστή και ήσυχη, σαν φως από τζάκι.

«Τι κάνουμε τώρα;» ρώτησε ο Φίλιππος. Χωρίς αγωνία. Χωρίς φόβο. Ήταν η ερώτηση ενός ανθρώπου που ξέρει ότι ο δρόμος δεν τελειώνει ποτέ — και χαίρεται πραγματικά γι' αυτό.

Η Αλεξάνδρα χαμογέλασε πλατιά. «Συνεχίζουμε. Τι άλλο;»

Η Ελευθερία πρόσθεσε, με τα μάτια της να λάμπουν: «Και ό,τι φτιάξουμε μετά, θα μας φτιάχνει κι εκείνο με τη σειρά του. Κάθε φορά λίγο αλλιώτικα. Κάθε φορά λίγο καλύτερα. Γιατί η δημιουργία δεν είναι κάτι που απλώς κάνεις — είναι κάτι που σε κάνει. Γι' αυτό φτιάχνουμε πράγματα: για να γινόμαστε εμείς καλύτεροι.»

Ο Sparken άνοιξε τα φτερά του. Αργά. Μεγαλοπρεπώς. Σαν αυλαία που ανοίγει για την τελευταία πράξη μιας μεγάλης παράστασης. Τα φτερά του γέμισαν τον χώρο με χρυσό, ζεστό φως.

«Τώρα μπορείτε να πετάξετε μόνοι σας», είπε με τη βαθιά φωνή του.

Τα παιδιά δεν φοβήθηκαν. Δεν αμφέβαλαν ούτε στιγμή. Για πρώτη φορά στη ζωή τους, δεν χρειάζονταν κάποιον να τους πει τι να κάνουν. Ήξεραν.

Το δωμάτιο βυθίστηκε σιγά σιγά στο σούρουπο. Οι σκιές μάκρυναν στους τοίχους. Αλλά κάτι αόρατο μέσα σε εκείνο το δωμάτιο λαμπύριζε. Δυνατά. Σταθερά. Χωρίς τέλος.`,
          en: `That evening, the three children understood something that some grown-ups never learn, no matter how many years they live. They no longer wait for permission to begin something new. They don't fear mistakes — because every broken piece shows them exactly where to look. They don't need applause — because true satisfaction doesn't come from other people. It comes from within, warm and quiet, like light from a fireplace.

"So what do we do now?" asked Philippos. Without worry. Without fear. It was the question of a person who knows the road never ends — and is genuinely glad about it.

Alexandra smiled wide. "We keep going. What else?"

Eleftheria added, her eyes shining: "And whatever we make next will make us in return. A little different each time. A little better each time. Because creating isn't something you simply do — it's something that shapes you. That's why we make things: so that we become better ourselves."

Sparken spread his wings. Slowly. Majestically. Like a curtain opening on the final act of a great performance. His wings filled the room with warm, golden light.

"Now you can fly on your own," he said in his deep voice.

The children were not afraid. They didn't doubt for a second. For the first time in their lives, they didn't need anyone to tell them what to do. They knew.

The room sank slowly into dusk. The shadows stretched long across the walls. But something invisible inside that room kept glowing. Strongly. Steadily. Without end.`
        }
      }
    ]
  }
];
