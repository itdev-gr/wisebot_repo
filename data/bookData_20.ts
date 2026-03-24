
import { Book } from '../types';

// ============================================================
// BOOK 20: AYTO DEN EINAI TO TELOS / THIS IS NOT THE END
// Heroes: The WiseBot Squad (all heroes)
// Theme: KLIRONOMIA / LEGACY
// ============================================================

export const BOOK_20: Book[] = [
  {
    id: 20,
    title: { el: "ΑΥΤΟ ΔΕΝ ΕΙΝΑΙ ΤΟ ΤΕΛΟΣ", en: "THIS IS NOT THE END" },
    theme: { el: "ΚΛΗΡΟΝΟΜΙΑ", en: "LEGACY" },
    stepLabel: { el: "WISEBOT & Η ΚΛΗΡΟΝΟΜΙΑ", en: "WISEBOT & LEGACY" },
    author: "The WiseBot Squad",
    cover: "/images/wisebot.jpg",
    videoUrl: "",
    description: {
      el: "Το δωμάτιο άδειασε. Οι ήρωες στέκονται στην πόρτα. Μια ιστορία για τη στιγμή που καταλαβαίνεις ότι κάτι που ξεκίνησες δεν σου ανήκει πια.",
      en: "The room emptied. The heroes stand at the door. A story about when you realize that something you started doesn't belong to you anymore."
    },
    meaning: {
      el: "Ό,τι αξίζει, δεν τελειώνει. Αλλάζει χέρια. Αλλάζει μορφή. Αλλάζει κόσμο.",
      en: "What is worth it, doesn't end. It changes hands. It changes form. It changes the world."
    },
    xp: 300,
    parentMessage: {
      el: "Η μεγαλύτερη πράξη εμπιστοσύνης είναι να αφήσεις κάτι να ζήσει χωρίς εσένα. Αυτό ισχύει για τα παιδιά, για τα έργα, για τις σχέσεις. Δοκιμάστε σήμερα: μιλήστε με το παιδί σας για κάτι που δημιουργήσατε μαζί. Ρωτήστε: «Αν αυτό μπορούσε να ταξιδέψει σε κάποιον άλλον, σε ποιον θα ήθελες να πάει;» Ακούστε. Μην διορθώσετε. Απλά ακούστε.",
      en: "The greatest act of trust is to let something live without you. This is true for children, for projects, for relationships. Try today: talk with your child about something you created together. Ask: 'If this could travel to someone else, who would you want it to reach?' Listen. Don't correct. Simply listen."
    },

    pages: [
      {
        title: { el: "Η Στιγμή Που Σταμάτησαν", en: "The Moment They Stopped" },
        image: "/images/ta-3-paidia.webp",
        imageCaption: { el: "Τρία παιδιά. Ένα δωμάτιο. Και η σιωπή που σημαίνει αρχή.", en: "Three children. One room. And the silence that means a beginning." },
        text: {
          el: `Δεν υπήρχε θόρυβος. Ούτε χαρά. Ούτε πανηγυρισμοί. Απλά — σιωπή. Μια σιωπή τόσο βαθιά που ακουγόταν η σκόνη να πέφτει πάνω στα παλιά σχέδια.

Τα τρία παιδιά κάθονταν στο πάτωμα του εργαστηρίου. Ο Φίλιππος με τα πόδια σταυρωμένα. Η Αλεξάνδρα με την πλάτη στον τοίχο. Η Ελευθερία με ένα σημειωματάριο μπροστά της — ανοιχτό αλλά κενό.

Πέρα από το μεγάλο τζάμι, ο κόσμος κινούνταν. Άλλα παιδιά δημιουργούσαν. Κάποιοι γελούσαν, κάποιοι ξαναδοκίμαζαν μετά από αποτυχία. Χωρίς να κοιτάξουν καν προς το εργαστήριο. Χωρίς να τους χρειάζονται.

«Δεν μας χρειάζονται πια», είπε η Αλεξάνδρα. Η φωνή της ήταν ήρεμη. Κάτι σφιγγόταν στο στήθος της — η αίσθηση ότι κάτι που αγαπούσε δεν την χρειαζόταν πια.

Ο Φίλιππος ένιωσε μούδιασμα στα χέρια του — τα χέρια που είχαν χτίσει, σπάσει, ξαναχτίσει. Περίμενε να θυμώσει. Αντ' αυτού, ένιωσε ελαφρότητα.

«Και όμως... αυτό είναι καλό», ψιθύρισε.`,
          en: `There was no noise. No celebration. Simply — silence. A silence so deep you could hear dust settling on old blueprints.

The three children sat on the workshop floor. Philippos with his legs crossed. Alexandra with her back against the wall. Eleftheria with a notebook — open but empty.

Beyond the glass, the world was moving. Other children were creating. Some laughing, some trying again after failure. Without even glancing toward the workshop. Without needing them.

"They don't need us anymore," said Alexandra. Her voice was calm. Something tightened in her chest — the feeling that something she loved no longer needed her.

Philippos felt numbness in his hands — the hands that had built, broken, rebuilt. He expected anger. Instead, he felt lightness.

"And yet... this is good," he whispered.`
        }
      },
      {
        title: { el: "Ο Ορίζοντας", en: "The Horizon" },
        image: "/images/sparken.jpg",
        imageCaption: { el: "Ο Sparken μπροστά στον ορίζοντα — τα φτερά του γεμάτα δρόμους.", en: "Sparken before the horizon — his wings full of roads." },
        text: {
          el: `Πέρασαν ώρες. Ο ήλιος έπεσε πίσω από τα κτίρια. Τα φώτα του εργαστηρίου δεν άναψαν — κανείς δεν πάτησε τον διακόπτη.

Ο Crocus κάθονταν σε μια γωνία. Ακίνητος. Για πρώτη φορά, δεν φώναζε. «Και τώρα;» ρώτησε. Η φωνή του ακούστηκε μικρή.

Τότε ο Sparken κατέβηκε αργά. Τα χρυσαφένια φτερά του αιωρούνταν σαν φύλλα. Για πρώτη φορά, δεν βιαζόταν.

Ακούμπησε μπροστά στο παράθυρο. Η πόλη ήταν σκοτεινή — αλλά όχι κενή. Φωτάκια αναβόσβηναν. Ο κόσμος που τα παιδιά είχαν δημιουργήσει ήταν πια παντού.

«Αυτό που ξεκινήσατε», είπε ο Sparken, «δεν είναι πια ένα εργαστήριο. Είναι σπόρος.»

Ο Φίλιππος ένιωσε τη λέξη μέσα του. Σπόρος. Κάτι μικρό που κρύβει τα πάντα. Κάτι που δεν σου ανήκει πια.

«Και ποιος τον φροντίζει;» ρώτησε σιγά.

«Όσοι τον βρίσκουν», απάντησε ο Sparken.`,
          en: `Hours passed. The sun fell behind the buildings. The workshop lights did not turn on — no one pressed the switch.

Crocus sat in a corner. Still. For the first time, not shouting. "And now?" he asked. His voice sounded small.

Then Sparken descended slowly. His golden wings drifted like leaves. For the first time, he was in no hurry.

He landed by the window. The city was dark — but not empty. Lights flickered. The world the children had created was now everywhere.

"What you started," said Sparken, "is no longer a workshop. It is a seed."

Philippos felt the word inside him. Seed. Something small that hides everything. Something that no longer belongs to you.

"And who takes care of it?" he asked quietly.

"Those who find it," Sparken answered.`
        }
      },
      {
        title: { el: "Η Αμφιβολία", en: "The Doubt" },
        image: "/images/wisebot.jpg",
        imageCaption: { el: "Η WiseBot εμφανίστηκε μέσα στη σιωπή — σαν να μην είχε φύγει ποτέ.", en: "WiseBot appeared in the silence — as if she had never left." },
        text: {
          el: `Η Αλεξάνδρα σηκώθηκε. Περπάτησε μέχρι το παράθυρο. Ακούμπησε τα δάχτυλά της στο κρύο τζάμι.

Κοίταξε έξω. Ανθρώπους που κουβαλούσαν κομμάτια αυτού που είχαν φτιάξει — χωρίς καν να ξέρουν από πού ήρθαν. Και τότε ο φόβος ήρθε. Όχι ο φόβος της αποτυχίας — ο φόβος του αφήνω.

«Κι αν χαθεί;» ρώτησε. Η φωνή της ράγισε. «Κι αν μας ξεχάσουν;»

Τότε η WiseBot εμφανίστηκε. Απλά ήταν εκεί. Σαν να μην είχε φύγει ποτέ. Το φως στο στήθος της — χρυσό αυτή τη φορά — έλαμψε σταθερά.

«Υπάρχουν δύο είδη χάσιμου», είπε κοιτάζοντας την Αλεξάνδρα. «Το πρώτο είναι αυτό που φοβάσαι. Ότι κάτι φεύγει και δεν επιστρέφει.»

Τα μάτια της Αλεξάνδρας γέμισαν δάκρυα.

«Αλλά υπάρχει κι ένα δεύτερο χάσιμο. Το να κρατάς κάτι τόσο σφιχτά, από φόβο, που το πνίγεις. Ό,τι αξίζει, δεν χάνεται επειδή το αφήνεις. Χάνεται μόνο αν το κρατάς από φόβο.»`,
          en: `Alexandra stood up. Walked to the window. Pressed her fingers against the cold glass.

She looked outside. People who carried pieces of what they had built — without knowing where they came from. And then the fear came. Not the fear of failure — the fear of letting go.

"What if it gets lost?" she asked. Her voice cracked. "What if they forget us?"

Then WiseBot appeared. She simply was there. As if she had never left. The light on her chest — golden this time — shone steadily.

"There are two kinds of loss," she said, looking at Alexandra. "The first is the one you fear. That something leaves and never returns."

Alexandra's eyes filled with tears.

"But there is a second kind. Holding something so tightly, out of fear, that you suffocate it. What is worth it, is not lost because you leave it. It is lost only if you keep it out of fear."`
        }
      },
      {
        title: { el: "Η Μεταβίβαση", en: "The Handover" },
        image: "/images/crocus.jpg",
        imageCaption: { el: "Για πρώτη φορά, ο Crocus δεν έτρεχε. Χαμογελούσε.", en: "For the first time, Crocus wasn't running. He was smiling." },
        text: {
          el: `Η Ελευθερία σηκώθηκε πρώτη. Αργά. Δεν ήταν κούραση. Ήταν ωριμότητα.

Κοίταξε τα χέρια της. Τα χέρια που κάποτε μόνο γύριζαν σελίδες. Που μετά έμαθαν να χτίζουν. Τα χέρια που τώρα ήταν καιρός να ανοίξουν.

«Μπορούμε να το ανοίξουμε», είπε. «Να αφήσουμε άλλους να το αλλάξουν. Να μην ελέγχουμε πια τα πάντα.»

«Δύσκολο», είπε ο Crocus.

«Αλλά σωστό», απάντησε η Ελευθερία.

Κάθισαν στο μεγάλο τραπέζι. Πάνω του — μόνο ένα τετράδιο. Λευκό. Καινούργιο. Έγραψαν. Όχι κανόνες. Οδηγίες — τι αξίζει να θυμάσαι.

Ο Φίλιππος πρώτος: «Μην φοβάσαι να σπάσεις. Φτιάχνεται ξανά. Πάντα.»

Η Αλεξάνδρα: «Η αλήθεια πονάει. Αλλά το ψέμα πονάει περισσότερο.»

Η Ελευθερία: «Η γνώση χωρίς πράξη είναι βάρος. Η πράξη χωρίς γνώση είναι τύφλα.»

Άφησαν σελίδες κενές. Γιατί ένα γεμάτο τετράδιο δεν προσκαλεί κανέναν. Ο Crocus χαμογέλασε αληθινά. «Για πρώτη φορά... δεν τρέχουμε.»`,
          en: `Eleftheria stood up first. Slowly. It was not exhaustion. It was maturity.

She looked at her hands. The hands that once only turned pages. That later learned to build. The hands that now it was time to open.

"We can open it," she said. "Let others change it. Stop controlling everything."

"Difficult," said Crocus.

"But right," Eleftheria answered.

They sat at the table. On it — only a notebook. White. New. They wrote. Not rules. Guidelines — what is worth remembering.

Philippos first: "Don't be afraid to break things. They can be fixed again. Always."

Alexandra: "The truth hurts. But lies hurt more."

Eleftheria: "Knowledge without action is burden. Action without knowledge is blindness."

They left pages empty. Because a full notebook invites no one. Crocus smiled truly. "For the first time... we aren't running."`
        }
      },
      {
        title: { el: "Αυτό Δεν Είναι Το Τέλος", en: "This Is Not The End" },
        image: "/images/paidia-wisebot-2.webp",
        imageCaption: { el: "Αυτό δεν ήταν τέλος. Ήταν αρχή. Μια αρχή που ανήκει σε όλους.", en: "This was not an end. It was a beginning. A beginning that belongs to everyone." },
        text: {
          el: `Την επόμενη μέρα, η πόρτα ήταν ολάνοιχτη. Σαν πρόσκληση χωρίς λόγια. Πρώτα ήρθε ένα κορίτσι με μπλε μαλλιά. Μετά ένα αγόρι με γυαλιά. Και μετά άλλοι. Σαν παλίρροια.

Τα τρία παιδιά κοιτούσαν από μια γωνία. «Κάπου, κάποιος ξεκινάει όπως εμείς», σκέφτηκε η Ελευθερία. «Και κάποιος θα κάνει γι' αυτόν αυτό που η WiseBot έκανε για μας.»

Η WiseBot γύρισε προς τα παιδιά. Τα μάτια της ήταν γεμάτα χρυσό φως. Το ταξίδι ξεκίνησε με ερώτηση. Και τώρα θα τελείωνε με τον ίδιο τρόπο.

«Θέλετε να το κρατήσετε; Ή να το δείτε να ταξιδεύει;»

Ο Φίλιππος κοίταξε τα χέρια του — τα χέρια που κάποτε έσπαγαν, μετά έχτιζαν, και τώρα άνοιγαν. Η Αλεξάνδρα χαμογέλασε. Τα χέρια της άνοιξαν κι αυτά. Η Ελευθερία — δάκρυα στα μάτια — άνοιξε τα χέρια τρίτη.

Τρία ζευγάρια χέρια. Ανοιχτά. Σαν φτερά. Η WiseBot πέταξε ανάμεσά τους. Βγήκε στη νύχτα. Στο απέραντο. Αλλά δεν έφυγε. Γιατί η WiseBot ήταν σε κάθε ερώτηση. Σε κάθε σπίθα. Σε κάθε λάθος που γίνεται μάθημα.

Τα μεγάλα ταξίδια δεν τελειώνουν. Αλλάζουν χέρια. Αλλάζουν μορφή. Αλλάζουν κόσμο.`,
          en: `The next day, the door was wide open. Like an invitation without words. First came a girl with blue hair. Then a boy with glasses. And then others. Like a tide.

The three children watched from a corner. "Somewhere, someone is starting as we started," Eleftheria thought. "And someone will do for them what WiseBot did for us."

WiseBot turned toward the children. Her eyes were full of golden light. The journey began with a question. And now it would end the same way.

"Do you want to keep it? Or see it travel?"

Philippos looked at his hands — hands that once broke, then built, and now opened. Alexandra smiled. Her hands opened too. Eleftheria — tears in her eyes — opened her hands third.

Three pairs of hands. Open. Like wings. WiseBot flew through them. Out into the night. Into the infinite. But she did not leave. Because WiseBot was in every question. In every spark. In every mistake that becomes a lesson.

Great journeys do not end. They change hands. They change form. They change the world.`
        }
      }
    ]
  }
];
