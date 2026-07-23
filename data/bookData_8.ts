
import { Book } from '../types';

// ============================================================
// BOOK 8: ΜΑΣ ΑΝΤΙΓΡΑΦΟΥΝ / THEY ARE COPYING US
// Heroes: Link (the mouse) & Pencilo (the hedgehog)
// Theme: ΕΞΕΛΙΞΗ / EVOLUTION
// ============================================================

export const BOOK_8: Book[] = [
  {
    id: 8,
    title: { el: "ΜΑΣ ΑΝΤΙΓΡΑΦΟΥΝ", en: "THEY ARE COPYING US" },
    theme: { el: "ΕΞΕΛΙΞΗ", en: "EVOLUTION" },
    stepLabel: { el: "LINK & Η ΕΞΕΛΙΞΗ", en: "LINK & EVOLUTION" },
    author: "Link & Pencilo",
    cover: "/images/link.jpg",
    videoUrl: "",
    description: {
      el: "Βρήκαν το παιχνίδι τους σε άλλη σελίδα. Ο Φίλιππος θέλει εκδίκηση, ο Pencilo κλαίει, αλλά η Link γελάει. Ποιος έχει δίκιο;",
      en: "They found their game on another page. Philippos wants revenge, Pencilo cries, but Link laughs. Who is right?"
    },
    meaning: {
      el: "Η αντιγραφή δεν είναι το τέλος. Είναι απόδειξη ότι ξεκίνησες σωστά.",
      en: "Copying is not the end. It is proof that you started correctly."
    },
    xp: 180,
    parentMessage: {
      el: "Όταν ένα παιδί ανακαλύπτει ότι κάποιος αντέγραψε τη δουλειά του, νιώθει αδικία, θυμό, και μερικές φορές αμφιβολία για τον εαυτό του. Η Link και ο Pencilo μας δείχνουν δύο αντιδράσεις: τον πόνο και τη λογική. Και οι δύο είναι έγκυρες. Αυτό που μετράει είναι τι κάνεις μετά. Δοκιμάστε σήμερα: επικυρώστε το συναίσθημα λέγοντας «Καταλαβαίνω ότι πονάει», μετατρέψτε τον θυμό σε κίνητρο ρωτώντας «Τι μπορείς να κάνεις καλύτερα;» και πείτε: «Αυτοί κοιτάνε εσένα. Εσύ κοίτα μπροστά.»",
      en: "When a child discovers that someone copied their work, they feel injustice, anger, and sometimes self-doubt. Link and Pencilo show us two reactions: pain and logic. Both are valid. What matters is what you do after. Try today: validate the feeling by saying 'I understand it hurts', turn anger into motivation by asking 'What can you do better?', and say: 'They are looking at you. You look forward.'"
    },

    // ── STRUCTURED PAGES (5 pages) ──────────────────────
    pages: [
      {
        title: { el: "Η Ανακάλυψη", en: "The Discovery" },
        image: "/images/ta-3-paidia.webp",
        imageCaption: { el: "Η στιγμή που ανακάλυψαν ότι κάποιος αντέγραψε το έργο τους.", en: "The moment they discovered someone had copied their work." },
        text: {
          el: `Ο Φίλιππος μπήκε τρέχοντας στο δωμάτιο. Τα μάτια του ήταν ανοιχτά διάπλατα, σαν να είχε δει φάντασμα. Το πρόσωπό του ήταν κόκκινο, τα χέρια του έτρεμαν, και η ανάσα του βγαινε κοφτά, σαν μετά από σπριντ.

«ΕΛΑΤΕ ΝΑ ΔΕΙΤΕ!»

Η Αλεξάνδρα σήκωσε το κεφάλι αργά. Ήταν ξαπλωμένη μπρούμυτα πάνω σε μαξιλάρια, σχεδιάζοντας νέα levels για το παιχνίδι τους. Η Ελευθερία ήταν στη γωνία, με τρία σημειωματάρια ανοιχτά μπροστά της, γράφοντας σημειώσεις για το επόμενο update.

Πλησίασαν την οθόνη. Ο Φίλιππος είχε ανοίξει μια ιστοσελίδα. Ένα παιχνίδι. Με χαρακτήρες, χρώματα, μηχανισμούς. Γνωστούς. Πολύ γνωστούς. Ο ίδιος ήρωας με το μπλε κράνος. Οι ίδιες χρυσές πόρτες. Ακόμα και το όνομα ήταν σχεδόν ίδιο — μία μόνο λέξη αλλαγμένη.

Η Αλεξάνδρα ένιωσε ένα παράξενο τσίμπημα στο στομάχι. Σαν να αναγνώριζε τον εαυτό της σε καθρέφτη που κάποιος άλλος κρατούσε. «Μα... αυτό είναι σαν το δικό μας», είπε σιγά.

«Όχι σαν», είπε ο Φίλιππος. Η φωνή του ήταν σκληρή. Γυάλινη. Σαν μαχαίρι που ακονίζεται. «ΕΙΝΑΙ.»

Η Ελευθερία πήρε το ποντίκι και κατέβασε τη σελίδα αργά. Επίπεδο με επίπεδο. Χρώμα με χρώμα. Όλα δικά τους. Όλα με ξένο όνομα από κάτω.

Η σιωπή που ακολούθησε ήταν βαριά. Σαν πέτρα που πέφτει στο νερό και δεν βγαίνει ποτέ στην επιφάνεια. Τα τρία παιδιά κοιτούσαν την οθόνη χωρίς να μιλάνε. Κάθε pixel ήταν μια κλοπή. Κάθε γραμμή κώδικα, μια προδοσία.

Υπάρχει ένας πόνος που δεν έχει σώμα. Δεν χτυπάει, δεν αιμορραγεί, δεν αφήνει σημάδια. Αλλά σε σκίζει από μέσα. Και ο πόνος αυτός λέγεται: «Κάποιος πήρε αυτό που έφτιαξα.»`,
          en: `Philippos burst into the room running. His eyes were wide open, as if he had seen a ghost. His face was red, his hands were shaking, and his breath came in sharp bursts, as if after a sprint.

"COME AND SEE!"

Alexandra lifted her head slowly. She had been lying face-down on pillows, designing new levels for their game. Eleftheria was in the corner with three notebooks open before her, writing notes for the next update.

They approached the screen. Philippos had opened a website. A game. With characters, colours, mechanics. Familiar. Very familiar. The same hero with the blue helmet. The same golden doors. Even the name was almost identical — only one word changed.

Alexandra felt a strange sting in her stomach. Like recognizing yourself in a mirror that someone else is holding. "But... this is like ours," she said quietly.

"Not like," said Philippos. His voice was hard. Glass-like. Like a knife being sharpened. "IT IS."

Eleftheria took the mouse and scrolled down the page slowly. Level by level. Colour by colour. All of it theirs. All of it with a stranger's name underneath.

The silence that followed was heavy. Like a stone falling into water and never reaching the surface. The three children stared at the screen without speaking. Every pixel was a theft. Every line of code, a betrayal.

There is a pain that has no body. It doesn't hit, doesn't bleed, doesn't leave marks. But it tears you apart from the inside. And that pain is called: "Someone took what I made."`
        }
      },
      {
        title: { el: "Ο Θυμός & Τα Δάκρυα", en: "The Anger & The Tears" },
        image: "/images/pencilo.jpg",
        imageCaption: { el: "Ο Pencilo κρατάει τα σχέδιά του — κάθε γραμμή μια ανάμνηση, κάθε χρώμα ένα κομμάτι ψυχής.", en: "Pencilo holding his drawings — every line a memory, every colour a piece of soul." },
        text: {
          el: `Ο Φίλιππος σηκώθηκε όρθιος. Ολόκληρο το σώμα του ήταν τεντωμένο σαν χορδή κιθάρας πριν σπάσει. Τα χέρια του ήταν γροθιές. Τα μάτια του φλόγες.

«ΜΑΣ ΕΚΛΕΨΑΝ!»

Η φωνή του αντήχησε στο δωμάτιο σαν κεραυνός. «Πάμε να τους γράψουμε! Να το κατεβάσουμε! Να τους ξεμπροστιάσουμε!» Περπατούσε πέρα-δώθε, σαν λιοντάρι σε κλουβί. Κάθε βήμα ήταν ένα χτύπημα στο πάτωμα.

Η Αλεξάνδρα ένιωσε κόμπο στο λαιμό. Δεν ήταν θυμός — ήταν κάτι χειρότερο. Απογοήτευση. Η αίσθηση ότι ό,τι έκανες δεν αξίζει, γιατί κάποιος μπορεί να το πάρει με ένα copy-paste.

Τότε εμφανίστηκε ο Pencilo. Πιο αργά από ποτέ. Σαν να σερνόταν μέσα σε πηχτή ομίχλη. Τα χρωματιστά μαρκαδοράκια που συνήθως λαμπύριζαν πάνω του ήταν σβηστά. Γκρίζα. Κρατούσε σχέδια — τα ίδια σχέδια που είχε φτιάξει για το παιχνίδι τους. Κάθε γραμμή σχεδιασμένη με αγάπη. Κάθε καμπύλη σκεφτημένη.

«Δεν αντέχω», είπε. Η φωνή του ήταν σπασμένη. Σαν μολύβι που σπάει στη μέση. «Κάθε γραμμή μου... είναι εκεί.» Κράτησε ψηλά ένα σχέδιο. Το ίδιο ακριβώς υπήρχε στο αντιγραμμένο παιχνίδι. Χρώμα προς χρώμα. Σχήμα προς σχήμα.

Η Αλεξάνδρα πλησίασε και ακούμπησε απαλά το χέρι της στη μικρή αγκαθωτή πλάτη του. Δεν είπε τίποτα. Μερικές φορές ένα χέρι λέει περισσότερα από όλες τις λέξεις μαζί.

«Αν μας αντιγράφουν», ψιθύρισε ο Pencilo, «τότε τι νόημα είχε όλο αυτό;»

Η ερώτηση κρεμάστηκε στον αέρα σαν σύννεφο βαρύ από βροχή. Ο θυμός είναι ο πρώτος φρουρός κάθε πληγωμένης καρδιάς. Μπαίνει μπροστά για να κρύψει αυτό που πραγματικά πονάει: τον φόβο ότι δεν είσαι μοναδικός.`,
          en: `Philippos stood up. His entire body was taut like a guitar string about to snap. His hands were fists. His eyes were flames.

"THEY STOLE FROM US!"

His voice echoed through the room like thunder. "Let's write to them! Take it down! Expose them!" He paced back and forth, like a lion in a cage. Every step was a strike against the floor.

Alexandra felt a knot in her throat. It wasn't anger — it was something worse. Disappointment. The feeling that everything you did means nothing, because someone can take it with a copy-paste.

Then Pencilo appeared. Slower than ever. As if dragging through thick fog. The colourful markers that usually sparkled on him were dimmed. Grey. He held drawings — the same drawings he had made for their game. Every line drawn with love. Every curve thought through.

"I can't take it," he said. His voice was broken. Like a pencil snapping in half. "Every line of mine... is there." He held up a drawing. The exact same one existed in the copied game. Colour for colour. Shape for shape.

Alexandra came closer and gently rested her hand on his small spiky back. She said nothing. Sometimes a hand says more than all the words put together.

"If they copy us," whispered Pencilo, "then what was the point of all this?"

The question hung in the air like a cloud heavy with rain. Anger is the first guard of every wounded heart. It steps in front to hide what truly hurts: the fear that you are not unique.`
        }
      },
      {
        title: { el: "Η Link Γελάει", en: "Link Laughs" },
        image: "/images/paidia-kai-link.webp",
        imageCaption: { el: "Η Link εμφανίστηκε με ψηφιακό φως — και ένα απρόσμενο χαμόγελο.", en: "Link appeared with digital light — and an unexpected smile." },
        text: {
          el: `Ξαφνικά, ένα μπιιιιπ ακούστηκε. Ψηλό, μεταλλικό, ηλεκτρικό. Σαν σύμπαν να ξυπνούσε.

Η Link εμφανίστηκε σε μια λάμψη ψηφιακού φωτός. Καλώδια, κυκλώματα, ταχύτητα. Τα μάτια της — δύο μπλε LED — σάρωσαν το δωμάτιο σε κλάσματα δευτερολέπτου. Κοίταξε τα πρόσωπά τους. Τον θυμό του Φίλιππου. Τα δάκρυα του Pencilo. Τον πανικό της Αλεξάνδρας. Τη σιωπή της Ελευθερίας.

«ΟΚ. Πανικός mode. Ωραία.»

Και μετά... γέλασε. Όχι δυνατά. Αλλά ένα γέλιο τόσο ειλικρινές, τόσο ξαφνικό, που ο Φίλιππος σταμάτησε στη μέση βήματος. Σαν να πάτησε αόρατο φρένο. «Τι λες τώρα;» ρώτησε ο Φίλιππος άγρια.

«Λέω ότι αν σε αντέγραψαν... είδαν κάτι που δουλεύει. Σκεφτείτε το λίγο. Κανείς δεν κάθεται να αντιγράψει κάτι βαρετό. Η αντιγραφή είναι απόδειξη ότι κάναμε κάτι καλό.»

Οι λέξεις έπεσαν σαν σταγόνες σε καυτή πλάκα. Τσίξιμο. Ατμός. Σιωπή. Ο Pencilo γύρισε απότομα. «Δεν είναι παιχνίδι! Είναι ιδέα! Κάτι που βγήκε από μέσα μας!»

Η Link δεν σταμάτησε να χαμογελάει. Τα LED μάτια της αναβόσβησαν ήρεμα. «Και οι ιδέες δεν προστατεύονται με κλάμα. Προχωρούν.»

Ο Pencilo στράφηκε στη Link. «Εσύ όλα τα βλέπεις σαν κουμπιά και κώδικα! Δεν καταλαβαίνεις τι σημαίνει να δημιουργείς κάτι!» Η Link πάγωσε μια στιγμή. «Κι εσύ βλέπεις τα πάντα σαν σχέδια που δεν τελειώνουν ποτέ! Ζωγραφίζεις και ξαναζωγραφίζεις, αλλά δεν στέλνεις ποτέ!» Η ένταση γέμισε το δωμάτιο σαν ηλεκτρισμός πριν από καταιγίδα.

Η Link δεν ήταν σκληρή. Ήταν ξεκάθαρη. Και μερικές φορές, η ξεκάθαρη αλήθεια πονάει περισσότερο από ψέμα — αλλά θεραπεύει πιο γρήγορα.`,
          en: `Suddenly, a beeeeep was heard. High-pitched, metallic, electric. As if a universe was waking up.

Link appeared in a flash of digital light. Wires, circuits, speed. Her eyes — two blue LEDs — scanned the room in fractions of a second. She looked at their faces. Philippos's anger. Pencilo's tears. Alexandra's panic. Eleftheria's silence.

"OK. Panic mode. Great."

And then... she laughed. Not loudly. But a laugh so sincere, so sudden, that Philippos stopped mid-step. As if he had hit an invisible brake. "What are you saying now?" asked Philippos fiercely.

"I'm saying that if they copied you... they saw something that works. Think about it for a second. Nobody bothers to copy something boring. Copying is proof that we made something good."

The words fell like drops on a hot surface. Sizzle. Steam. Silence. Pencilo turned abruptly. "It's not a game! It's an idea! Something that came from inside us!"

Link didn't stop smiling. Her LED eyes blinked calmly. "And ideas are not protected by crying. They move forward."

Pencilo turned to Link. "You see everything as buttons and code! You don't understand what it means to create something!" Link froze for a moment. "And you see everything as designs that never end! You draw and redraw, but you never ship!" The tension filled the room like electricity before a storm.

Link wasn't cruel. She was clear. And sometimes, the clear truth hurts more than a lie — but it heals faster.`
        }
      },
      {
        title: { el: "Η Αλήθεια Που Πονάει", en: "The Truth That Hurts" },
        image: "/images/filippos.webp",
        imageCaption: { el: "Ο Φίλιππος και η Ελευθερία ακούνε την αλήθεια.", en: "Philippos and Eleftheria hear the truth." },
        text: {
          el: `Η Αλεξάνδρα σήκωσε το χέρι. «Σταματήστε. Και οι δύο.»

Η φωνή της δεν ήταν δυνατή. Αλλά είχε ένα βάρος που έκανε και τους δύο να γυρίσουν. Η Ελευθερία, που είχε σιωπήσει ώρα, σήκωσε αργά το κεφάλι. «Ξέρετε τι βλέπω εγώ;» είπε ήρεμα. «Βλέπω ότι κάποιος, κάπου, κοίταξε αυτό που φτιάξαμε και σκέφτηκε: αυτό αξίζει.»

Ο Pencilo κατέβασε το κεφάλι. Τα χρώματά του τρεμόπαιζαν — μεταξύ γκρι και κάτι πιο ζεστό. «Πονάει», ψιθύρισε. «Πονάει γιατί δημιούργησες κάτι αληθινό», είπε η Αλεξάνδρα. «Κάτι ζωντανό. Κάτι που βγήκε από μέσα σου. Και κάποιος το πήρε χωρίς να ρωτήσει.»

«Αλλά η αντιγραφή δεν σταματά τον δημιουργό», πρόσθεσε η Ελευθερία. Τα μάτια της γυάλιζαν. «Τον αποκαλύπτει.»

Ο Φίλιππος σταμάτησε να περπατάει. Πήρε μια βαθιά ανάσα. Αργή. Σκόπιμη. Σαν να ρουφούσε θάρρος από τον αέρα. «Δηλαδή... δεν χάσαμε;» ρώτησε.

«Όχι», είπε η Link, αυτή τη φορά πιο απαλά. Τα LED μάτια της ήταν σταθερά, θερμά. «Απλώς μπήκαμε στο επόμενο επίπεδο.»

Ο Φίλιππος άφησε ένα μικρό γέλιο να του ξεφύγει — κοφτό, ξαφνιασμένο, το πρώτο εδώ και ώρες. «Το επόμενο επίπεδο», επανέλαβε σιγανά. Του άρεσε ο ήχος αυτής της φράσης.

Η αντιγραφή είναι ο σκιάχτρος του δημιουργού. Τρομάζει — αλλά αν τον κοιτάξεις καλά, θα δεις ότι δεν έχει σώμα. Δεν μπορεί να σε πιάσει. Μόνο εσύ μπορείς να σταματήσεις τον εαυτό σου.

Ο πόνος του δημιουργού δεν είναι ματαιοδοξία. Είναι η πληγή αυτού που έβαλε κομμάτι της ψυχής του σε κάτι, και κάποιος το αντιμετώπισε σαν αντικείμενο. Αλλά η πληγή δεν είναι το τέλος. Είναι η αρχή μιας νέας δύναμης.`,
          en: `Alexandra raised her hand. "Stop. Both of you."

Her voice wasn't loud. But it had a weight that made both of them turn. Eleftheria, who had been silent for a long time, slowly raised her head. "You know what I see?" she said calmly. "I see that someone, somewhere, looked at what we built and thought: this is worth something."

Pencilo lowered his head. His colours flickered — between grey and something warmer. "It hurts," he whispered. "It hurts because you created something real," said Alexandra. "Something alive. Something that came from inside you. And someone took it without asking."

"But copying doesn't stop the creator," Eleftheria added. Her eyes were shining. "It reveals them."

Philippos stopped pacing. He took a deep breath. Slow. Deliberate. As if drawing courage from the air. "Meaning... we didn't lose?" he asked.

"No," said Link, softer this time. Her LED eyes were steady, warm. "We just entered the next level."

Philippos let out a small laugh — short, surprised, the first one in hours. "The next level," he repeated quietly. He liked the sound of that phrase.

Copying is the creator's scarecrow. It frightens — but if you look closely, you'll see it has no body. It cannot hold you. Only you can stop yourself.

The creator's pain is not vanity. It is the wound of someone who put a piece of their soul into something, and someone else treated it like an object. But the wound is not the end. It is the beginning of a new strength.`
        }
      },
      {
        title: { el: "Η Εξέλιξη", en: "The Evolution" },
        image: "/images/paidia-kai-link.webp",
        imageCaption: { el: "Link, Pencilo και τα παιδιά — μαζί πιο δυνατοί από κάθε αντιγραφή.", en: "Link, Pencilo and the kids — stronger together than any copy." },
        text: {
          el: `Πέρασαν λεπτά. Ίσως πέντε. Ίσως δέκα. Κανείς δεν μέτρησε. Ο καθένας κοιτούσε μέσα του, σε ένα μέρος που σπάνια τολμούσε να επισκεφτεί.

Ο Φίλιππος μίλησε πρώτος. «Δεν θα τους μοιάσουμε. Θα πάμε πιο μπροστά.» Η φωνή του δεν ήταν πια θυμωμένη. Ήταν αποφασισμένη.

Ο Pencilo κοίταξε τα χέρια του. Τα χέρια που σχεδίαζαν. Τα χέρια που δημιουργούσαν. Σιγά-σιγά, τα χρώματά του άρχισαν να επιστρέφουν. Πρώτα ροζ. Μετά κίτρινο. Μετά μπλε. Άνοιξε νέο χαρτί. Λευκό. Καθαρό. Γεμάτο δυνατότητες. «Θα το κάνω καλύτερο», είπε.

Η Link χαμογέλασε. Τα LED μάτια της σχημάτισαν δύο ημικύκλια — το ψηφιακό ισοδύναμο χαράς. «Και πιο έξυπνο.»

Ο Pencilo κοίταξε τη Link. Η Link κοίταξε τον Pencilo. Και για πρώτη φορά, δεν είδαν αντίπαλο. Είδαν σύμμαχο. Τέχνη και τεχνολογία. Σχεδίαση και κώδικας. Συναίσθημα και λογική. Μαζί.

Το βράδυ, τα παιδιά κάθισαν στο πάτωμα. Ο Pencilo σχεδίαζε νέους χαρακτήρες. Η Link κωδικοποιούσε νέα μηχανική. Η Αλεξάνδρα και η Ελευθερία έγραφαν ιστορίες που κανείς δεν θα μπορούσε να αντιγράψει — γιατί ήταν δικές τους.

Ο Φίλιππος πήρε ένα μαρκαδόρο. Έγραψε στον τοίχο — ψηλά, εκεί που κανείς δεν θα μπορούσε να το σβήσει: «Όποιος αντιγράφει, κοιτάει πίσω. Όποιος δημιουργεί, κοιτάει μπροστά.»

Η αληθινή απάντηση στην αντιγραφή δεν είναι ο πόλεμος. Δεν είναι η εκδίκηση. Δεν είναι τα δάκρυα. Είναι τα βήματα μπροστά — και η δύναμη να τα κάνεις μαζί με αυτούς που ξεκίνησαν δίπλα σου. Κάποια μαθήματα δεν γράφονται σε βιβλία. Γράφονται σε τοίχους, σε καρδιές, και σε κομμάτια χαρτιού που κανείς δεν θα αντιγράψει ποτέ — γιατί αυτά τα κομμάτια δεν είναι σχέδια. Είναι ψυχή.`,
          en: `Minutes passed. Perhaps five. Perhaps ten. No one counted. Each one looked inward, to a place they rarely dared visit.

Philippos spoke first. "We won't look like them. We'll go further ahead." His voice was no longer angry. It was determined.

Pencilo looked at his hands. The hands that drew. The hands that created. Slowly, his colours began to return. First pink. Then yellow. Then blue. He opened a new sheet of paper. White. Clean. Full of possibilities. "I'll make it better," he said.

Link smiled. Her LED eyes formed two half-circles — the digital equivalent of joy. "And smarter."

Pencilo looked at Link. Link looked at Pencilo. And for the first time, they didn't see a rival. They saw an ally. Art and technology. Design and code. Emotion and logic. Together.

That evening, the children sat on the floor. Pencilo was drawing new characters. Link was coding new mechanics. Alexandra and Eleftheria were writing stories that no one could ever copy — because they were theirs alone.

Philippos picked up a marker. He wrote on the wall — up high, where no one could erase it: "He who copies looks back. He who creates looks forward."

The real answer to copying is not war. Not revenge. Not tears. It is the steps forward — and the strength to take them alongside those who started beside you. Some lessons are not written in books. They are written on walls, in hearts, and on scraps of paper that no one will ever copy — because those scraps are not designs. They are soul.`
        }
      }
    ]
  }
];
