
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
          el: `Το δωμάτιο ήταν ακριβώς το ίδιο. Το τραπέζι με τα σημάδια, τους κύκλους από κούπες, τα μολύβια πεταμένα σαν σπασμένα κλαδιά. Τα ίδια χαρτιά, κάποια τσαλακωμένα, κάποια γραμμένα με γράμματα που κανείς δεν τελείωσε.

Αλλά κάτι είχε αλλάξει. Κάτι αόρατο, κάτι που δεν μπορούσες να δείξεις με το δάχτυλο αλλά το ένιωθες στο δέρμα σου. Σαν να είχε κάποιος ανοίξει παράθυρο σε τοίχο που ποτέ δεν είχε.

Η Αλεξάνδρα σήκωσε τις ζωγραφιές της από το τραπέζι. Αργά, σαν να κρατούσε κάτι εύθραυστο. Οι πρώτες ήταν βιαστικές, γεμάτες ημιτελείς γραμμές. Αλλά οι τελευταίες είχαν βάθος. Είχαν ψυχή.

«Παλιά βαριόμουν», είπε σιγά. «Ξεκινούσα, χανόμουν, παρατούσα. Και μετά ένιωθα χειρότερα — σαν να χρωστούσα κάτι στον εαυτό μου.»

Τα μάτια της γυάλισαν. Όχι από δάκρυα. Από αναγνώριση.

«Τώρα θέλω να τελειώνω ό,τι ξεκινάω. Γιατί αυτό που τελειώνεις σου ανήκει. Αυτό που αφήνεις στη μέση, σε κυνηγάει.»

Ο ήλιος του δειλινού χρύσισε τα χέρια της. Και μέσα σε εκείνο το φως, η Αλεξάνδρα μοιάζε μεγαλύτερη. Μοιάζε με κάποια που είχε περάσει κάτι και βγήκε από την άλλη πλευρά.`,
          en: `The room was exactly the same. The table with its marks, the rings from cups, the pencils scattered like broken branches. The same papers, some crumpled, some written with letters nobody ever finished.

But something had changed. Something invisible, something you couldn't point to but felt on your skin. As if someone had opened a window in a wall that never had one.

Alexandra lifted her drawings from the table. Slowly, as if holding something fragile. The first ones were rushed, full of unfinished lines. But the last ones had depth. They had soul.

"I used to get bored," she said quietly. "I'd start, get lost, give up. And then I'd feel worse — like I owed something to myself."

Her eyes gleamed. Not from tears. From recognition.

"Now I want to finish what I start. Because what you finish belongs to you. What you leave halfway haunts you."

The evening sun gilded her hands. And in that light, Alexandra looked older. She looked like someone who had been through something and come out the other side.`
        }
      },
      {
        title: { el: "Τρεις Μεταμορφώσεις", en: "Three Transformations" },
        image: "/images/filippos.webp",
        imageCaption: { el: "Τα ίδια χέρια. Διαφορετική δύναμη.", en: "The same hands. Different strength." },
        text: {
          el: `Ο Φίλιππος κοίταξε τα χέρια του. Τα γύρισε, τα εξέτασε — τις γρατζουνιές, τα κομμάτια κόλλας, το μελάνι κάτω από τα νύχια. Αυτά τα χέρια που κάποτε μόνο χτυπούσαν και πετούσαν πράγματα, τώρα είχαν ιστορία. Κάθε σημάδι ήταν μάθημα.

«Δεν θυμώνω όπως πριν», είπε. «Σταματάω. Παίρνω ανάσα. Κοιτάζω τι πήγε στραβά. Και ξαναδοκιμάζω.»

Σφίχτηκε ένα κομμάτι πλαστικού μεταξύ των δαχτύλων του. Απαλά αυτή τη φορά. Κατάλαβε ότι η δύναμη δεν σημαίνει να σπας — σημαίνει να κρατάς χωρίς να τσακίζεις.

«Το θυμό τον κρατάω ακόμα», είπε. «Αλλά τώρα τον χρησιμοποιώ σαν καύσιμο, όχι σαν βόμβα.»

Η Ελευθερία έκλεισε το τετράδιό της. Ίσως η πιο δραματική κίνηση που είχε κάνει ποτέ — γιατί η Ελευθερία ποτέ δεν έκλεινε τετράδια. Τα μάζευε, τα στοίβαζε, τα λάτρευε.

«Δεν διαβάζω πια για να ξέρω», είπε με φωνή βαθιά και σταθερή. «Διαβάζω για να εφαρμόζω. Η γνώση χωρίς πράξη είναι φυλακή.»

«Θέλω να ζω μέσα στον κόσμο. Με τα χέρια μου λερωμένα. Με τα λάθη μου ορατά.»

Κοιτάχτηκαν. Τρεις κόσμοι τόσο διαφορετικοί που κάποτε φαίνονταν αδύνατον να συνυπάρξουν. Και χαμογέλασαν — ήσυχα, βαθιά, σαν ηλιοβασίλεμα που δεν βιάζεται να σβήσει.`,
          en: `Philippos looked at his hands. He turned them over, examined them — the scratches, the bits of glue, the ink under his nails. These hands that once only hit and threw things now had a story. Every mark was a lesson.

"I don't get angry like before," he said. "I stop. I breathe. I look at what went wrong. And I try again."

He squeezed a plastic piece between his fingers. Gently this time. He understood that strength doesn't mean breaking — it means holding without crushing.

"I still keep the anger," he said. "But now I use it as fuel, not as a bomb."

Eleftheria closed her notebook. Perhaps the most dramatic move she had ever made — because Eleftheria never closed notebooks. She collected them, stacked them, loved them.

"I don't read to know anymore," she said, her voice deep and steady. "I read to apply. Knowledge without action is a prison."

"I want to live in the world. With my hands dirty. With my mistakes visible."

They looked at each other. Three worlds so different they once seemed impossible to coexist. And they smiled — quietly, deeply, like a sunset in no hurry to fade.`
        }
      },
      {
        title: { el: "Ο Καθρέφτης", en: "The Mirror" },
        image: "/images/paidia-kai-wisebot.webp",
        imageCaption: { el: "Η WiseBot δεν δείχνει πρόσωπα — δείχνει ψυχές.", en: "WiseBot doesn't show faces — she shows souls." },
        text: {
          el: `Η WiseBot εμφανίστηκε αθόρυβα. Σαν σκιά που αποφάσισε να γίνει φως. Στάθηκε μπροστά τους και τα μάτια της — δύο μωβ κρύσταλλοι — γέμισαν ζεστασιά.

Η επιφάνεια του μεταλλικού της προσώπου γυάλισε σαν υγρό ασήμι. Και τα παιδιά είδαν μέσα τους εαυτούς τους. Αλλά δεν είδαν πρόσωπα. Είδαν κάτι βαθύτερο.

Η Αλεξάνδρα είδε θάρρος. Χέρια που ζωγραφίζουν χωρίς δισταγμό. Μάτια που δεν φοβούνται να κοιτάξουν αυτό που δημιούργησαν.

Ο Φίλιππος είδε επιμονή. Χέρια που μαζεύουν τα σπασμένα κομμάτια αντί να τα πετούν. Ένα πρόσωπο που ξέρει τη διαφορά ανάμεσα στο «δεν μπορώ» και στο «δεν μπορώ ακόμα».

Η Ελευθερία είδε καθαρότητα. Γνώση που δεν κάθεται σε σελίδες αλλά ζει σε πράξεις.

«Δεν σας έδωσα απαντήσεις», είπε η WiseBot τρυφερά. «Σας έμαθα να ρωτάτε. Και αυτός που ξέρει να ρωτά, δεν χρειάζεται ποτέ κάποιον να του δώσει απαντήσεις.»

Τα μάτια της πάλλονταν πιο αργά τώρα. Σαν καρδιά που χτυπά ήρεμα γιατί ξέρει ότι η δουλειά τελείωσε.`,
          en: `WiseBot appeared silently. Like a shadow that decided to become light. She stood before them and her eyes — two purple crystals — filled with warmth.

The surface of her metallic face gleamed like liquid silver. And the children saw themselves reflected. But they didn't see faces. They saw something deeper.

Alexandra saw courage. Hands that draw without hesitation. Eyes that aren't afraid to look at what they created.

Philippos saw persistence. Hands that pick up broken pieces instead of throwing them. A face that knows the difference between "I can't" and "I can't yet."

Eleftheria saw clarity. Knowledge that doesn't sit in pages but lives in actions.

"I didn't give you answers," said WiseBot tenderly. "I taught you to ask. And the one who knows how to ask never needs anyone to give them answers."

Her eyes pulsed more slowly now. Like a heart beating calmly because it knows the work is done.`
        }
      },
      {
        title: { el: "Οι Ήρωες Κατεβαίνουν", en: "The Heroes Come Down" },
        image: "/images/sparken.jpg",
        imageCaption: { el: "Ο Sparken κατέβηκε στο ύψος τους — για πρώτη φορά.", en: "Sparken came down to their level — for the first time." },
        text: {
          el: `Ο Sparken κατέβηκε χαμηλά. Για πρώτη φορά. Εκείνος, ο αετός που πάντα πετούσε ψηλά, που πάντα μιλούσε με φωνή βροντής — κατέβηκε. Ακούμπησε τα φτερά του στο πάτωμα. Κοίταξε τα παιδιά στα μάτια, στο ίδιο ύψος.

«Τι φτιάξατε;» ρώτησε. Απλά. Αλλά η ερώτηση δεν ήταν καθόλου απλή.

Η Αλεξάνδρα ήθελε να πει «ένα ρομπότ». Αλλά κάτι βαθύτερο σταμάτησε τα λόγια. Ήξερε ότι η απάντηση δεν ήταν αυτό που βρισκόταν στο τραπέζι.

Ο Φίλιππος σκέφτηκε. «Κάτι για παιδιά», είπε. Αλλά κι εκείνος ένιωσε ότι η απάντηση ήταν μεγαλύτερη. Σαν ποτάμι που κρύβεται κάτω από τη γη.

Η Ελευθερία κούνησε αργά το κεφάλι. «Φτιάξαμε κάτι για εμάς. Αλλά δεν νομίζω ότι αυτό ρωτάς πραγματικά.»

Η WiseBot μίλησε ήρεμα, σαν νερό που αγγίζει βράχο: «Φτιάξατε τον τρόπο που σκέφτεστε.»

Η πρόταση έπεσε σαν σταγόνα σε λίμνη. Αθόρυβα. Αλλά οι κυματισμοί πήγαν παντού. Δεν φτιάξατε αντικείμενο. Φτιάξατε μυαλό. Τρεις ανθρώπους που ξέρουν τι σημαίνει να δοκιμάζεις, να αποτυγχάνεις, και να μην σταματάς.`,
          en: `Sparken came down low. For the first time. He, the eagle who always flew high, who always spoke with a voice of thunder — came down. He rested his wings on the floor. He looked the children in the eyes, at the same height.

"What did you make?" he asked. Simply. But the question was not simple at all.

Alexandra wanted to say "a robot." But something deeper stopped the words. She knew the answer wasn't what sat on the table.

Philippos thought. "Something for kids," he said. But even he felt the answer was bigger. Like a river hiding underground.

Eleftheria slowly shook her head. "We made something for us. But I don't think that's what you're really asking."

WiseBot spoke calmly, like water touching rock: "You built the way you think."

The sentence fell like a drop in a lake. Silently. But the ripples went everywhere. You didn't build an object. You built a mind. Three humans who know what it means to try, to fail, and to never stop.`
        }
      },
      {
        title: { el: "Τώρα Μπορείτε να Πετάξετε", en: "Now You Can Fly" },
        image: "/images/paidia-wisebot-2.webp",
        imageCaption: { el: "Κάθε τέλος είναι μια αρχή.", en: "Every end is a beginning." },
        text: {
          el: `Κατάλαβαν κάτι που κάποιοι μεγάλοι δεν μαθαίνουν ποτέ. Δεν περιμένουν άδεια για να ξεκινήσουν. Δεν φοβούνται το λάθος — γιατί κάθε σπασμένο κομμάτι τους δείχνει πού να κοιτάξουν. Δεν χρειάζονται χειροκρότημα — γιατί η ικανοποίηση δεν έρχεται από τους άλλους, έρχεται από μέσα τους.

«Τι κάνουμε τώρα;» ρώτησε ο Φίλιππος. Χωρίς αγωνία. Ήταν η ερώτηση ενός ανθρώπου που ξέρει ότι ο δρόμος δεν τελειώνει ποτέ — και χαίρεται γι' αυτό.

Η Αλεξάνδρα χαμογέλασε. «Συνεχίζουμε.»

Η Ελευθερία πρόσθεσε: «Και ό,τι φτιάξουμε μετά, θα μας φτιάχνει ξανά. Κάθε φορά λίγο αλλιώτικα. Κάθε φορά λίγο καλύτερα. Γιατί η δημιουργία δεν είναι κάτι που κάνεις — είναι κάτι που σε κάνει.»

Ο Sparken άνοιξε τα φτερά του. Αργά. Μεγαλοπρεπώς. Σαν αυλαία που ανοίγει σε τελευταία πράξη. Γέμισαν τον χώρο με χρυσό φως.

«Τώρα μπορείτε να πετάξετε μόνοι σας», είπε.

Τα παιδιά δεν φοβήθηκαν. Δεν αμφέβαλαν. Για πρώτη φορά, δεν χρειάζονταν κάποιον να τους πει τι να κάνουν. Ήξεραν.

Το δωμάτιο βυθίστηκε στο σούρουπο. Οι σκιές μάκρυναν. Αλλά κάτι αόρατο μέσα σε εκείνο το δωμάτιο λαμπύριζε. Δυνατά. Σταθερά. Χωρίς τέλος.`,
          en: `They understood something that some adults never learn. They don't wait for permission to start. They don't fear mistakes — because every broken piece shows them where to look. They don't need applause — because satisfaction doesn't come from others, it comes from within.

"What do we do now?" asked Philippos. Without anxiety. It was the question of a human who knows the road never ends — and is glad about it.

Alexandra smiled. "We continue."

Eleftheria added: "And whatever we make next will make us again. Each time a little different. Each time a little better. Because creation isn't something you do — it's something that does you."

Sparken spread his wings. Slowly. Majestically. Like a curtain opening on the final act. They filled the space with golden light.

"Now you can fly on your own," he said.

The children were not afraid. They did not doubt. For the first time, they didn't need someone to tell them what to do. They knew.

The room sank into dusk. The shadows lengthened. But something invisible inside that room glowed. Strongly. Steadily. Without end.`
        }
      }
    ]
  }
];
