
import { Book } from '../types';

// ============================================================
// 📖 BOOK 4: ΤΟ ΣΧΕΔΙΟ ΠΟΥ ΔΕΝ ΔΟΥΛΕΥΕ / THE PLAN THAT DIDN'T WORK
// Hero: Link (το ποντίκι)
// Theme: ΥΛΟΠΟΙΗΣΗ / IMPLEMENTATION
// ============================================================

export const BOOK_4: Book[] = [
  {
    id: 4,
    title: { el: "ΤΟ ΣΧΕΔΙΟ ΠΟΥ ΔΕΝ ΔΟΥΛΕΥΕ", en: "THE PLAN THAT DIDN'T WORK" },
    theme: { el: "ΥΛΟΠΟΙΗΣΗ", en: "IMPLEMENTATION" },
    stepLabel: { el: "LINK & Η ΥΛΟΠΟΙΗΣΗ", en: "LINK & REALITY" },
    author: "Link",
    cover: "/images/link.jpg",
    videoUrl: "",
    description: {
      el: "Το σχέδιο ήταν τέλειο, αλλά αδύνατο. Η Link εμφανίζεται για να κάνει την ερώτηση που πονάει: «Ωραία όλα αυτά... αλλά με τι θα τα φτιάξετε;»",
      en: "The plan was perfect, but impossible. Link appears to ask the painful question: \"Nice... but what will you build it with?\""
    },
    meaning: {
      el: "Το σχέδιο που δεν γίνεται δεν σε πάει μπροστά. Το απλό που δουλεύει σε μαθαίνει τα πάντα.",
      en: "A plan that can't happen doesn't move you forward. A simple one that works teaches you everything."
    },
    xp: 140,
    parentMessage: {
      el: "Η φαντασία χωρίς όρια απογοητεύει. Η φαντασία με πράξη χτίζει αυτοπεποίθηση. Όταν τα παιδιά μάθουν να απλοποιούν — να σβήνουν τα περιττά — μαθαίνουν να φέρνουν τα όνειρα στη ζωή. Δοκιμάστε: όταν το παιδί πει «θέλω να φτιάξω κάτι», ρωτήστε «Τι μπορούμε να φτιάξουμε σήμερα με ό,τι έχουμε;»",
      en: "Imagination without limits disappoints. Imagination with action builds confidence. When children learn to simplify — to erase the unnecessary — they learn to bring dreams to life. Try: when your child says 'I want to build something', ask 'What can we build today with what we have?'"
    },

    // ── NEW STRUCTURED PAGES (5 pages) ──────────────────────
    pages: [
      {
        title: { el: "Το Τέλειο Σχέδιο", en: "The Perfect Plan" },
        image: "/images/ta-3-paidia.webp",
        imageCaption: { el: "Ένα σχέδιο τέλειο... σε κόσμο που δεν υπάρχει.", en: "A plan perfect... in a world that doesn't exist." },
        text: {
          el: `Το σχέδιο ήταν ωραίο. Όχι απλώς ωραίο. Ήταν τέλειο.

Γραμμές ίσιες σαν σιδηρόδρομος. Κουτιά τακτοποιημένα σαν ψηφίδες σε μωσαϊκό. Βέλη που έδειχναν παντού — και κάθε βέλος είχε την ετικέτα του, κάθε ετικέτα τον σκοπό της. Η Ελευθερία το είχε αντιγράψει τρεις φορές μέχρι να μη φαίνεται ούτε ένα σβησμένο σημάδι.

Ο Pencilo καμάρωνε μπροστά του σαν πατέρας σε σχολική γιορτή. «Αν το ακολουθήσουμε βήμα-βήμα», είπε, ισιώνοντας τα γυαλάκια του, «θα δουλέψει. Εγγύηση Pencilo.»

Ξεκίνησαν. Και για λίγο — για λίγο ήταν υπέροχα. Κάθε κομμάτι έπεφτε στη θέση του σαν κομμάτι παζλ. Βήμα ένα: έτοιμο. Βήμα δύο: έτοιμο. Τα παιδιά δούλευαν ρυθμικά, σχεδόν τραγουδιστά. Βήμα τρία: έτοιμο.

Βήμα τέσσερα…

Ο Φίλιππος σταμάτησε. Κοίταξε το σχέδιο. Κοίταξε το κουτί με τα υλικά. Ξανακοίταξε το σχέδιο. Το δάχτυλό του πήγαινε πάνω-κάτω, από το χαρτί στο κουτί, από το κουτί στο χαρτί, όλο και πιο αργά.

«Εεε… παιδιά;» Η φωνή του είχε εκείνον τον ήχο που κάνει κάποιος όταν δεν θέλει να πει αυτό που πρέπει να πει. «Αυτό εδώ… δεν το έχουμε.»

Η Ελευθερία πλησίασε. «Χρειαζόμαστε αυτό το ειδικό μοτέρ», διάβασε από το σχέδιο. Μετά κοίταξε το κουτί. Μετά τα λέφτα του κουμπαρά τους — τρία ευρώ και κάτι ψιλά. «Αλλά… δεν υπάρχει. Ούτε στα μαγαζιά της γειτονιάς. Πουθενά.»

Σιωπή. Το τέλειο σχέδιο στεκόταν εκεί, στη μέση του τραπεζιού. Πεντακάθαρο, πανέμορφο και εντελώς αβοήθητο — σαν χάρτης για μια χώρα που δεν υπάρχει.`,
          en: `The plan was nice. Not just nice. It was perfect.

Lines straight as railroad tracks. Boxes arranged like tiles in a mosaic. Arrows pointing everywhere — and every arrow had its label, every label had its purpose. Eleftheria had copied the whole thing three times until not a single eraser mark could be seen.

Pencilo stood before it beaming like a proud parent at a school festival. "If we follow it step by step," he said, adjusting his little glasses, "it will work. Pencilo guarantee."

They started. And for a while — for a while it was wonderful. Every piece fell into place like a puzzle piece. Step one: done. Step two: done. The children worked in rhythm, almost singing. Step three: done.

Step four…

Philippos stopped. He looked at the plan. He looked at the box of materials. He looked back at the plan. His finger went up and down, from the paper to the box, from the box to the paper, slower and slower each time.

"Umm… guys?" His voice had that particular sound people make when they don't want to say the thing they have to say. "This part here… we don't have it."

Eleftheria came closer. "We need this special motor," she read from the plan. Then she looked in the box. Then at their piggy-bank savings — three euros and some coins. "But… it doesn't exist. Not in any shop in the neighborhood. Nowhere."

Silence. The perfect plan stood there in the middle of the table. Spotless, beautiful, and completely helpless — like a map to a country that does not exist.`
        }
      },
      {
        title: { el: "Το Ποντίκι", en: "The Mouse" },
        image: "/images/paidia-kai-link.webp",
        imageCaption: { el: "Η Link έκανε την ερώτηση που κανείς δεν ήθελε.", en: "Link asked the question nobody wanted to hear." },
        text: {
          el: `Άρχισαν να μετράνε — και το μέτρημα πονούσε.

Χρόνο; Δεν φτάνει. Το σχέδιο ήθελε μήνες. Υλικά; Λείπουν τα μισά. Μηχανήματα; Κανένα. Κάθε μέτρημα και ένα μικρό τσίμπημα, σαν να ξεφούσκωνε αργά ένα μπαλόνι που είχαν φουσκώσει με τόσο κόπο.

Και τότε ακούστηκε ένα μικρό «κλικ». Καθαρό, διακριτικό. Σαν κλικ από ποντίκι υπολογιστή.

Αλλά δεν ήταν.

Πάνω στο τραπέζι, ανάμεσα στο σχέδιο και στο μισοάδειο κουτί, στεκόταν ένα ποντίκι. Μικρό. Γκρίζο-ασημί, σαν φτιαγμένο από κασσίτερο και αστερόσκονη. Στην πλάτη του κουβαλούσε ένα σακίδιο γεμάτο καλώδια, κατσαβιδάκια και εργαλεία που τα παιδιά δεν είχαν ξαναδεί. Και η ουρά της — η ουρά της κατέληγε σε ένα βύσμα USB που γυάλιζε, σαν κλειδί για έναν ψηφιακό κόσμο.

Τα μάτια της ήταν μεγάλα και ζεστά. Αλλά πίσω από τη ζεστασιά κρυβόταν κάτι κοφτερό: ακρίβεια. Η ικανότητα να βλέπει αυτό που όλοι οι άλλοι προσπαθούν να μη δουν.

«Γεια σας», είπε ευγενικά. «Να ρωτήσω κάτι μικρό;» Έδειξε το τέλειο σχέδιο με την ουρά της. «Αυτό… ποιος θα το φτιάξει;»

«Εμείς!» απάντησε ο Crocus αμέσως, φουσκώνοντας το στήθος.

Η Link χαμογέλασε. Ένα χαμόγελο μικρό, ήσυχο, γεμάτο αλήθεια.

«Ωραία. Με τι;»

Δύο λέξεις. Μόνο δύο. Και έπεσαν πάνω στο τέλειο σχέδιο σαν σταγόνα μελάνι σε λευκό χαρτί — μικρές, αθόρυβες, και αδύνατον πια να μην τις βλέπεις.

Κανείς δεν είχε απάντηση.`,
          en: `They started counting — and the counting hurt.

Time? Not enough. The plan needed months. Materials? Half of them missing. Machines? None at all. Every count was a little sting, like a balloon they had worked so hard to inflate, slowly hissing out its air.

And then a small "click" was heard. Clean, precise. Like the click of a computer mouse.

But it wasn't.

On the table, between the plan and the half-empty box, stood a mouse. Small. Silver-grey, as if made of tin and stardust. On her back she carried a backpack full of cables, tiny screwdrivers, and tools the children had never seen before. And her tail — her tail ended in a shiny USB plug, like a key to some digital world.

Her eyes were large and warm. But behind the warmth hid something sharp: precision. The ability to see exactly what everyone else was trying very hard not to see.

"Hello," she said politely. "May I ask one small thing?" She pointed at the perfect plan with her tail. "This… who is going to build it?"

"We are!" Crocus answered instantly, puffing out his chest.

Link smiled. A small, quiet smile, full of truth.

"Lovely. With what?"

Two words. Only two. And they landed on the perfect plan like a drop of ink on white paper — tiny, silent, and impossible to unsee.

Nobody had an answer.`
        }
      },
      {
        title: { el: "Όνειρο ή Σχέδιο;", en: "Dream or Plan?" },
        image: "/images/link.jpg",
        imageCaption: { el: "«Σωστό για ποιον; Για σένα… ή για τον πραγματικό κόσμο;»", en: "\"Correct for whom? For you… or for the real world?\"" },
        text: {
          el: `Η Link περπάτησε πάνω στο σχέδιο με μικρά, προσεκτικά βήματα. Η ουρά-USB σηκωνόταν και σταματούσε σε σημεία, ακριβής σαν νυστέρι πάνω σε ακτινογραφία.

«Εδώ», έδειξε, «θέλετε ένα εξάρτημα που δεν υπάρχει στα μαγαζιά.»
«Εδώ θέλετε μηχάνημα που δεν έχετε — και κοστίζει όσο ένα αυτοκίνητο.»
«Και εδώ…» σταμάτησε, κοίταξε πιο προσεκτικά, «εδώ θέλετε τεχνολογία από το 2050. Καλή τύχη με αυτό.»

«Το σχέδιο είναι σωστό», είπε ο Pencilo. Η φωνή του ήταν σφιγμένη. Τα μολύβια στην πλάτη του έτριζαν σαν κλαδιά στον αέρα.

«Σωστό για ποιον;» ρώτησε η Link, ήρεμα. «Για το χαρτί; Το χαρτί δέχεται τα πάντα. Για σένα… ή για τον πραγματικό κόσμο;»

«Χωρίς όραμα δεν πας μπροστά!» φώναξε ο Pencilo, και ήταν η πρώτη φορά που τα παιδιά τον άκουγαν να υψώνει τη φωνή.

«Χωρίς πραγματικότητα», απάντησε η Link χωρίς να υψώσει τη δική της ούτε τόσο, «δεν πας πουθενά. Ούτε καν πίσω.»

Και τότε η WiseBot εμφανίστηκε. Αθόρυβα, όπως πάντα. Σαν φεγγάρι που βγαίνει πίσω από σύννεφα. Το μωβ φως της έπεσε πάνω στο τέλειο, αδύνατο σχέδιο.

«Ένα σχέδιο που δεν μπορείτε να φτιάξετε σήμερα», είπε απαλά, «δεν είναι σχέδιο. Είναι όνειρο. Τα όνειρα είναι πολύτιμα — αλλά δεν χτίζονται με ευχές. Χτίζονται με ό,τι έχεις στα χέρια σου σήμερα.»

Ο Pencilo κατέβασε το βλέμμα στο αριστούργημά του. Μέσα του κάτι ράγισε. Όχι σπάσιμο — αλλαγή. Εκείνη η μικρή ρωγμή που αφήνει το φως να μπει.`,
          en: `Link walked across the plan with small, careful steps. Her USB-tail rose and paused at certain spots, precise as a scalpel over an X-ray.

"Here," she pointed, "you want a component that doesn't exist in any shop."
"Here you want a machine you don't have — one that costs as much as a car."
"And here…" she stopped, looked closer, "here you want technology from the year 2050. Good luck with that."

"The plan is correct," said Pencilo. His voice was tight. The pencils on his back creaked like branches in the wind.

"Correct for whom?" Link asked, calmly. "For the paper? Paper accepts anything. For you… or for the real world?"

"Without vision you can't move forward!" shouted Pencilo — and it was the first time the children had ever heard him raise his voice.

"Without reality," Link replied, without raising hers even slightly, "you go nowhere. Not even backward."

And then WiseBot appeared. Silently, as always. Like the moon slipping out from behind clouds. Her purple light fell across the perfect, impossible plan.

"A plan you cannot build today," she said softly, "is not a plan. It is a dream. Dreams are precious — but they are not built with wishes. They are built with whatever you hold in your hands today."

Pencilo lowered his gaze to his masterpiece. Something inside him cracked. Not a break — a change. That small kind of crack that lets the light come in.`
        }
      },
      {
        title: { el: "Το Σβήσιμο", en: "The Erasing" },
        image: "/images/pencilo.jpg",
        imageCaption: { el: "Η δύναμη δεν είναι να προσθέτεις. Είναι να αφαιρείς.", en: "Strength isn't adding more. It's removing." },
        text: {
          el: `Η Link πήρε ένα μολύβι — από την πλάτη του Pencilo, με την άδειά του, που τη ζήτησε με ένα ευγενικό νεύμα. Γύρισε το μολύβι ανάποδα. Ακούμπησε τη γόμα στο τέλειο σχέδιο.

Και… έσβησε.

Τα παιδιά κράτησαν την ανάσα τους. Ο Pencilo έκλεισε τα μάτια — δεν άντεχε να βλέπει.

Αλλά η Link δεν έσβησε όλο το σχέδιο. Έσβησε τα περιττά. Τα αδύνατα. Τα «θα ήταν ωραία να». Τα «ίσως κάποτε». Το μοτέρ από το 2050. Το μηχάνημα που κόστιζε όσο αυτοκίνητο.

Και πριν από κάθε κίνηση της γόμας, έκανε μία ερώτηση δυνατά:

«Αυτό γίνεται με ό,τι έχουμε;»
«Αυτό το έχουμε ή μπορούμε να το βρούμε;»
«Αυτό το χρειαζόμαστε ΤΩΡΑ — ή μπορεί να περιμένει;»

Αν η απάντηση ήταν «όχι», η γόμα δούλευε. Σβήσιμο. Σβήσιμο. Σβήσιμο.

Το σχέδιο μίκραινε. Γραμμές χάνονταν. Ολόκληρα κουτιά εξαφανίζονταν. Έγινε μικρό, απλό, σχεδόν αδέξιο. Αλλά κάτι παράξενο συνέβαινε όσο μίκραινε: άρχισε να αναπνέει. Να μοιάζει εφικτό. Να μοιάζει… αληθινό.

Ο Φίλιππος έσκυψε πάνω από αυτό που έμεινε. Λίγα κουτιά. Λίγα βέλη. Υλικά που είχαν ήδη στο κουτί τους. Τίποτα εντυπωσιακό. Και όμως — χαμογέλασε πλατιά.

«Αυτό», είπε, «μπορώ να το φτιάξω. Σήμερα. Τώρα.»

Ο Pencilo άνοιξε τα μάτια και κοίταξε το νέο σχέδιο. Δεν ήταν κομψό. Δεν ήταν τέλειο. Αλλά δούλευε.

«Το όμορφο μπορεί να περιμένει», είπε τελικά. Η φωνή του τρεμόπαιξε — σαν κάποιος που παραδέχεται κάτι δύσκολο για πρώτη φορά. «Το αληθινό… όχι.»`,
          en: `Link took a pencil — from Pencilo's back, with his permission, which she requested with a polite nod. She flipped the pencil upside down. She touched the eraser to the perfect plan.

And… she erased.

The children held their breath. Pencilo closed his eyes — he couldn't bear to watch.

But Link did not erase the whole plan. She erased the unnecessary. The impossible. The "wouldn't it be nice." The "maybe someday." The motor from 2050. The machine that cost as much as a car.

And before every stroke of the eraser, she asked one question out loud:

"Can this be done with what we have?"
"Do we have this, or can we actually get it?"
"Do we need this NOW — or can it wait?"

If the answer was "no," the eraser went to work. Erase. Erase. Erase.

The plan shrank. Lines vanished. Whole boxes disappeared. It became small, simple, almost clumsy. But something strange happened as it shrank: it began to breathe. To look possible. To look… real.

Philippos leaned over what remained. A few boxes. A few arrows. Materials they already had in their box. Nothing impressive. And yet — he smiled from ear to ear.

"This," he said, "I can build. Today. Right now."

Pencilo opened his eyes and studied the new plan. It wasn't elegant. It wasn't perfect. But it worked.

"Beautiful can wait," he said at last. His voice flickered — like someone admitting something difficult for the very first time. "Real… cannot."`
        }
      },
      {
        title: { el: "Η Αίσθηση του Πραγματικού", en: "The Sense of Reality" },
        image: "/images/alexandra.webp",
        imageCaption: { el: "Κάτι μικρό, ατελές — αλλά αληθινό.", en: "Something small, imperfect — but real." },
        text: {
          el: `Και μετά… έφτιαξαν κάτι.

Όχι το ρομπότ των ονείρων τους. Όχι ακόμα. Κάτι μικρό. Ατελές. Στραβό στη μία γωνία. Με κόλλα που φαινόταν στις ενώσεις. Με μια κλωστή που κρεμόταν από κάτω και κανείς δεν θυμόταν γιατί ήταν εκεί.

Αλλά υπήρχε. Μπορούσες να το αγγίξεις. Μπορούσες να το σηκώσεις. Ήταν πραγματικό.

Το κράτησαν στα χέρια τους με τη σειρά, σαν τελετή. Η Αλεξάνδρα πρώτη — τα δάχτυλά της έτρεμαν ελαφρά, και δεν προσπάθησε καν να το κρύψει. Μετά ο Φίλιππος — τα μάτια του ήταν γεμάτα, και έσφιξε τα χείλη για να μη φανεί πόσο συγκινήθηκε. Μετά η Ελευθερία — εκείνη απλώς χαμογέλασε σιωπηλά, σαν κάποια που ήξερε από την αρχή, από το πρώτο βιβλίο κιόλας, ότι κάπου εδώ ήθελε να φτάσει.

Η WiseBot πλησίασε αθόρυβα. Το φως της ήταν ζεστό — σαν ήλιος που μπαίνει από πρωινό παράθυρο και πέφτει ακριβώς εκεί που κάθεσαι.

«Τώρα», είπε, «μπήκατε πραγματικά στον κόσμο της δημιουργίας. Γιατί δημιουργία δεν είναι αυτό που φαντάζεσαι. Φαντασία έχουν όλοι. Δημιουργία είναι αυτό που φτιάχνεις — με τα χέρια σου, με ό,τι έχεις, εκεί που είσαι.»

Η Link έγνεψε από την άκρη του τραπεζιού. Τα μεγάλα μάτια της έλαμψαν ήρεμα, και η ουρά-USB τυλίχτηκε γύρω της σαν ερωτηματικό που βρήκε επιτέλους την απάντησή του.

«Το αληθινό δεν περιμένει», είπε.

Και τα παιδιά κατάλαβαν. Το κατάλαβαν με τα χέρια τους, όχι με το μυαλό τους — που είναι και ο πιο σίγουρος τρόπος να καταλάβεις κάτι:

Ένα ατελές πράγμα στα χέρια σου αξίζει χίλια τέλεια στο μυαλό σου.`,
          en: `And then… they built something.

Not the robot of their dreams. Not yet. Something small. Imperfect. Crooked in one corner. With glue showing at the joints. With a piece of string dangling underneath that nobody could remember the reason for.

But it existed. You could touch it. You could pick it up. It was real.

They held it in their hands one by one, like a ceremony. Alexandra first — her fingers trembled slightly, and she didn't even try to hide it. Then Philippos — his eyes were full, and he pressed his lips together so no one would see how moved he was. Then Eleftheria — she simply smiled in silence, like someone who had known from the very beginning, from her very first book, that this was where she wanted to arrive.

WiseBot approached without a sound. Her light was warm — like morning sun coming through a window and landing exactly where you sit.

"Now," she said, "you have truly entered the world of creation. Because creation is not what you imagine. Everyone has imagination. Creation is what you build — with your own hands, with what you have, right where you are."

Link nodded from the edge of the table. Her large eyes gleamed calmly, and her USB-tail curled around her like a question mark that had finally found its answer.

"Real doesn't wait," she said.

And the children understood. They understood it with their hands, not with their minds — which is the surest way to understand anything:

One imperfect thing in your hands is worth a thousand perfect ones in your head.`
        }
      }
    ]
  }
];
