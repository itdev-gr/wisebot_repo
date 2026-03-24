
import { Book } from '../types';

// ============================================================
// 📖 BOOK 5: ΚΟΙΤΑ ΜΠΡΟΣΤΑ / LOOK AHEAD
// Hero: Sparken (ο αετός)
// Theme: ΟΡΑΜΑ / VISION
// ============================================================

export const BOOK_5: Book[] = [
  {
    id: 5,
    title: { el: "ΚΟΙΤΑ ΜΠΡΟΣΤΑ", en: "LOOK AHEAD" },
    theme: { el: "ΟΡΑΜΑ", en: "VISION" },
    stepLabel: { el: "SPARKEN & ΤΟ ΟΡΑΜΑ", en: "SPARKEN & VISION" },
    author: "Sparken",
    cover: "/images/sparken.jpg",
    videoUrl: "",
    description: {
      el: "Το έφτιαξαν, αλλά φοβούνται να το δείξουν γιατί 'δεν είναι τέλειο'. Ο Sparken εμφανίζεται για να τους μάθει ότι τίποτα δεν βγαίνει τέλειο στην αρχή.",
      en: "They made it, but they are afraid to show it because 'it's not perfect'. Sparken appears to teach them that nothing comes out perfect at the beginning."
    },
    meaning: {
      el: "Τίποτα δεν γίνεται τέλειο στο σκοτάδι. Όλα γίνονται καλύτερα μόνο όταν βγουν στο φως.",
      en: "Nothing becomes perfect in the dark. Everything gets better only when it comes out into the light."
    },
    xp: 150,
    parentMessage: {
      el: "Η τελειομανία μοιάζει με ποιότητα, αλλά συχνά είναι φόβος μεταμφιεσμένος. Όταν τα παιδιά μάθουν ότι επιτρέπεται να δείξουν κάτι ατελές, μαθαίνουν να εξελίσσονται χωρίς ντροπή. Δοκιμάστε: μην πείτε «μπράβο, είναι τέλειο» — πείτε «μπράβο που το δοκίμασες. Τι θα ήθελες να αλλάξεις;»",
      en: "Perfectionism looks like quality, but is often fear in disguise. When children learn that it's okay to show something imperfect, they learn to evolve without shame. Try: don't say 'great, it's perfect' — say 'great that you tried. What would you like to change?'"
    },

    // ── NEW STRUCTURED PAGES (5 pages) ──────────────────────
    pages: [
      {
        title: { el: "Ο Φόβος της Κρίσης", en: "The Fear of Judgment" },
        image: "/images/ta-3-paidia.webp",
        imageCaption: { el: "Δεν είναι τέλειο. Και αν γελάσουν;", en: "It's not perfect. What if they laugh?" },
        text: {
          el: `Το είχαν μπροστά τους. Στο τραπέζι, κάτω από το φως. Το πράγμα που έφτιαξαν.

Δεν ήταν όπως το είχαν φανταστεί. Μικρό. Λίγο στραβό. Με γρατζουνιές που φαίνονταν κάτω από το φως. Αλλά υπήρχε. Πραγματικό.

«Δεν είναι τέλειο», μουρμούρισε ο Φίλιππος.

«Και αν γελάσουν;» Η φωνή της Αλεξάνδρας ήταν σχεδόν ψίθυρος.

Η Ελευθερία δεν μιλούσε. Μέσα της πάλευε — η θέληση να δείξει εναντίον του φόβου να κριθεί.

Κανείς δεν έλεγε «πάμε». Ούτε ο Crocus. Για πρώτη φορά, κοιτούσε τον φόβο τους και τον αναγνώριζε — γιατί κάποτε ήταν δικός του.

«Τι περιμένετε;» ρώτησε χαμηλά.

Κανείς δεν απάντησε. Αλλά η σιωπή ήταν η απάντηση.`,
          en: `They had it in front of them. On the table, under the light. The thing they built.

It wasn't what they'd imagined. Small. Slightly crooked. With scratches that showed under the light. But it existed. Real.

"It's not perfect," murmured Philippos.

"What if they laugh?" Alexandra's voice was almost a whisper.

Eleftheria didn't speak. Inside her, a battle — the will to show versus the fear of being judged.

Nobody said "let's go." Not even Crocus. For the first time, he watched their fear and recognized it — because once, it had been his own.

"What are you waiting for?" he asked softly.

Nobody answered. But the silence was the answer.`
        }
      },
      {
        title: { el: "Ο Αετός", en: "The Eagle" },
        image: "/images/paidia-kai-sparken.webp",
        imageCaption: { el: "Ο Sparken — ο αετός που βλέπει πέρα από το τώρα.", en: "Sparken — the eagle who sees beyond the now." },
        text: {
          el: `Ένας αέρας μπήκε στο δωμάτιο. Όχι δυνατός — ψηλός. Σαν αέρας που κατεβαίνει από κορυφή βουνού. Μύρισε ελευθερία.

Σκιά πλατιά. Σαν σύννεφο μπροστά από τον ήλιο.

Ένας αετός προσγειώθηκε αθόρυβα. Τα φτερά του ήταν σαν ολόγραμμα — χρώματα που άλλαζαν σαν ηλιοβασίλεμα σε κίνηση. Τα μάτια του χρυσά, βαθιά. Μάτια που δεν κοιτούσαν αυτό που ήταν μπροστά — κοιτούσαν αυτό που θα γινόταν.

«Τι κοιτάτε;» ρώτησε. Η φωνή του βαθιά, ήρεμη, σαν αέρας σε φαράγγι.

«Κοιτάτε πολύ κοντά.»

«Ποιος είσαι;» ρώτησε η Αλεξάνδρα, γεμάτη δέος.

«Με λένε Sparken. Κι εγώ δεν βλέπω τα πράγματα. Βλέπω πού πάνε.»`,
          en: `A breeze entered the room. Not strong — high. Like wind descending from a mountain peak. It smelled of freedom.

A wide shadow. Like a cloud in front of the sun.

An eagle landed silently. His wings were like holograms — colors shifting like a sunset in motion. His eyes golden, deep. Eyes that didn't look at what was here — they looked at what would be.

"What are you looking at?" he asked. His voice deep, calm, like wind in a canyon.

"You're looking too close."

"Who are you?" asked Alexandra, full of awe.

"My name is Sparken. And I don't see things. I see where they're going."`
        }
      },
      {
        title: { el: "Δεν Είναι Τελικό", en: "It Is Not Final" },
        image: "/images/sparken.jpg",
        imageCaption: { el: "«Η εξέλιξη χρειάζεται φως. Όχι τελειότητα.»", en: "\"Evolution needs light. Not perfection.\"" },
        text: {
          el: `Ο Sparken δεν άγγιξε το αντικείμενο. Κοίταξε πέρα από αυτό.

«Ξέρετε τι είναι αυτό που κρατάτε;»

«Μια πρώτη προσπάθεια», είπε η Ελευθερία.

«Σωστά. Και ξέρετε τι ΔΕΝ είναι; Δεν είναι τελικό.»

Ο Φίλιππος ένιωσε κάτι να αλλάζει μέσα του. Σαν πόρτα που ανοίγει σε δωμάτιο που νόμιζε κλειδωμένο.

«Δεν χρειάζεται να είναι τελικό. Χρειάζεται μόνο να βγει. Γιατί μόνο στο φως μπορεί να αλλάξει.»

«Αν το δείξουμε έτσι, θα νομίζουν ότι δεν ξέρουμε τι κάνουμε!» είπε η Αλεξάνδρα.

Τα χρυσά μάτια του Sparken ήταν ζεστά. Χωρίς κρίση.

«Και αν δεν το δείξετε, θα νομίζετε εσείς ότι δεν μπορείτε.»

Η WiseBot μίλησε τελευταία: «Η εξέλιξη χρειάζεται φως. Όχι τελειότητα.»`,
          en: `Sparken didn't touch the object. He looked beyond it.

"Do you know what this thing you're holding is?"

"A first attempt," said Eleftheria.

"Right. And do you know what it is NOT? It is not final."

Philippos felt something shift inside him. Like a door opening in a room he thought was locked.

"It doesn't need to be final. It just needs to come out. Because only in the light can it change."

"If we show it like this, they'll think we don't know what we're doing!" said Alexandra.

Sparken's golden eyes were warm. Without judgment.

"And if you don't show it, you will think you can't."

WiseBot spoke last: "Evolution needs light. Not perfection."`
        }
      },
      {
        title: { el: "Το Πρώτο Δείξιμο", en: "The First Showing" },
        image: "/images/alexandra.webp",
        imageCaption: { el: "«Δεν είναι τέλειο. Αλλά είναι ωραίο.»", en: "\"It's not perfect. But it's nice.\"" },
        text: {
          el: `Δεν έκαναν παρουσίαση. Δεν κάλεσαν κόσμο.

Το έδειξαν σε έναν. Ένα παιδί από τη διπλανή αυλή. Κάποιον που δεν ήξερε τίποτα.

«Τι είναι αυτό;» ρώτησε το παιδί.

«Είναι… κάτι που φτιάχνουμε.» Η φωνή του Φίλιππου τρεμόπαιξε στο «φτιάχνουμε» — γιατί δεν ήταν σίγουρος αν αξίζει αυτή η λέξη.

Το παιδί το πήρε στα χέρια. Το γύρισε. Σιωπή.

«Δεν είναι τέλειο», είπε.

Η καρδιά της Αλεξάνδρας βούλιαξε.

Μετά—

«Αλλά είναι ωραίο.»

Ένα χαμόγελο ειλικρινές. Αυτό που δεν μπορείς να ψεύσεις.

Η Αλεξάνδρα ένιωσε τα μάτια της να καίνε. Ο Φίλιππος κούνησε τη γροθιά σιωπηλά. Η Ελευθερία χαμογέλασε. Αυτό ήταν αρκετό.`,
          en: `They didn't do a presentation. Didn't invite a crowd.

They showed it to one person. A kid from the yard next door. Someone who knew nothing.

"What is this?" the kid asked.

"It's… something we're making." Philippos's voice wavered on "making" — because he wasn't sure the word was deserved.

The kid took it in his hands. Turned it. Silence.

"It's not perfect," he said.

Alexandra's heart sank.

Then—

"But it's nice."

An honest smile. The kind you can't fake.

Alexandra felt her eyes burn. Philippos silently pumped his fist. Eleftheria smiled. That was enough.`
        }
      },
      {
        title: { el: "Κοίτα Μπροστά", en: "Look Ahead" },
        image: "/images/paidia-wisebot-2.webp",
        imageCaption: { el: "Πέντε μαθήματα. Μία αρχή.", en: "Five lessons. One beginning." },
        text: {
          el: `Το βράδυ, γύρισαν στο τραπέζι. Τα πρόσωπά τους ήταν διαφορετικά. Πιο γαλήνια. Πιο ανοιχτά. Σαν παράθυρα που ξεθόλωσαν μετά τη βροχή.

Δεν κάθισαν να φτιάξουν κάτι τέλειο. Κάθισαν να φτιάξουν κάτι καλύτερο. Μικρή αλλαγή στη λέξη. Τεράστια αλλαγή στη σημασία.

Οι πέντε ήρωες στέκονταν γύρω τους. Σαν φρουρά. Σαν οικογένεια.

«Σκεφτήκατε», είπε η WiseBot.
«Ξεκινήσατε», χαμογέλασε ο Crocus.
«Σχεδιάσατε», είπε ο Pencilo.
«Το φτιάξατε», είπε η Link.

Ο Sparken άπλωσε τα φτερά. Χρώματα γέμισαν το δωμάτιο — σαν ουράνιο τόξο σε σκοτεινό ουρανό.

«Τώρα… κοιτάτε μπροστά.»

Κάθε ταξίδι τελειώνει κάπου. Αλλά τα σωστά ταξίδια τελειώνουν εκεί — στην αρχή του επόμενου.`,
          en: `That night, they returned to the table. Their faces were different. More peaceful. More open. Like windows cleared after rain.

They didn't sit down to make something perfect. They sat down to make something better. Small change in the word. Enormous change in meaning.

The five heroes stood around them. Like guardians. Like family.

"You thought," said WiseBot.
"You started," smiled Crocus.
"You planned," said Pencilo.
"You built it," said Link.

Sparken spread his wings. Colors filled the room — like a rainbow in a dark sky.

"Now… you look ahead."

Every journey ends somewhere. But the right journeys end there — at the beginning of the next one.`
        }
      }
    ]
  }
];
