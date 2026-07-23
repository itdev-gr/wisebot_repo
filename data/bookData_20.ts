
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
          el: `Δεν υπήρχε θόρυβος εκείνο το απόγευμα. Ούτε φωνές χαράς. Ούτε πανηγυρισμοί. Απλά — σιωπή. Μια σιωπή τόσο βαθιά, που θα μπορούσες να ακούσεις τη σκόνη να πέφτει απαλά πάνω στα παλιά σχέδια που κρέμονταν ακόμα στους τοίχους.

Τα τρία παιδιά κάθονταν στο πάτωμα του εργαστηρίου, εκεί όπου όλα είχαν ξεκινήσει. Ο Φίλιππος με τα πόδια σταυρωμένα, να στριφογυρίζει αφηρημένα ένα παλιό γρανάζι στα δάχτυλά του. Η Αλεξάνδρα με την πλάτη ακουμπισμένη στον τοίχο, να κοιτάζει το ταβάνι. Η Ελευθερία με ένα σημειωματάριο μπροστά της — ανοιχτό, αλλά κενό. Για πρώτη φορά εδώ και χρόνια, δεν είχε τίποτα να σημειώσει.

Πέρα από το μεγάλο τζάμι, ο κόσμος κινούνταν. Άλλα παιδιά δημιουργούσαν — στο δικό τους εργαστήρι πια, με τα δικά τους εργαλεία, τα δικά τους σχέδια. Κάποια γελούσαν δυνατά, κάποια ξαναδοκίμαζαν πεισματικά μετά από μια αποτυχία, όπως τους είχαν μάθει. Χωρίς να κοιτάξουν καν προς το παλιό εργαστήρι. Χωρίς να τους χρειάζονται.

«Δεν μας χρειάζονται πια», είπε η Αλεξάνδρα. Η φωνή της ήταν ήρεμη, αλλά κάτι σφιγγόταν στο στήθος της — εκείνη η παράξενη αίσθηση όταν κάτι που αγάπησες με όλη σου την καρδιά δεν σε χρειάζεται πια για να ζήσει.

Ο Φίλιππος ένιωσε ένα μούδιασμα στα χέρια του — τα χέρια που είχαν χτίσει, σπάσει, ξαναχτίσει, εκατοντάδες φορές. Περίμενε να θυμώσει, όπως παλιά. Περίμενε τη γνώριμη φωτιά. Αντ' αυτού, ένιωσε κάτι απρόσμενο: ελαφρότητα. Σαν να άφηνε κάτω ένα σακίδιο που κουβαλούσε χρόνια.

«Και όμως...» ψιθύρισε, σχεδόν έκπληκτος με τον ίδιο του τον εαυτό. «Αυτό είναι καλό. Αυτό ακριβώς θέλαμε. Απλά δεν ήξερα πώς θα είναι όταν συμβεί.»`,
          en: `There was no noise that afternoon. No shouts of joy. No celebrations. Simply — silence. A silence so deep you could almost hear the dust settling gently on the old blueprints that still hung on the walls.

The three children sat on the workshop floor, right where everything had begun. Philippos with his legs crossed, absently spinning an old gear between his fingers. Alexandra with her back against the wall, staring up at the ceiling. Eleftheria with a notebook in front of her — open, but empty. For the first time in years, she had nothing to write down.

Beyond the big glass window, the world was moving. Other children were creating — in their own workshop now, with their own tools, their own designs. Some laughed loudly, some stubbornly tried again after a failure, exactly as they had been taught. Without even glancing toward the old workshop. Without needing them.

"They don't need us anymore," said Alexandra. Her voice was calm, but something tightened in her chest — that strange feeling when something you loved with your whole heart no longer needs you in order to live.

Philippos felt a numbness in his hands — the hands that had built, broken, and rebuilt, hundreds of times. He waited for the anger to come, the way it used to. He waited for the familiar fire. Instead, he felt something unexpected: lightness. As if he were setting down a backpack he had carried for years.

"And yet..." he whispered, almost surprised at himself. "This is good. This is exactly what we wanted. I just didn't know what it would feel like when it finally happened."`
        }
      },
      {
        title: { el: "Ο Ορίζοντας", en: "The Horizon" },
        image: "/images/sparken.jpg",
        imageCaption: { el: "Ο Sparken μπροστά στον ορίζοντα — τα φτερά του γεμάτα δρόμους.", en: "Sparken before the horizon — his wings full of roads." },
        text: {
          el: `Πέρασαν ώρες. Ο ήλιος έπεσε αργά πίσω από τα κτίρια, βάφοντας τον ουρανό βυσσινί και μετά βαθύ μπλε. Τα φώτα του εργαστηρίου δεν άναψαν — κανείς δεν σηκώθηκε να πατήσει τον διακόπτη. Δεν χρειαζόταν. Η νύχτα εκείνη ήθελε σκοτάδι για να φανούν τα σωστά πράγματα.

Ο Crocus καθόταν σε μια γωνία. Ακίνητος. Εντελώς ακίνητος — κάτι που δεν είχε ξανασυμβεί ποτέ. Ο κροκόδειλος που πάντα φώναζε «Πάμε!», που πάντα ορμούσε πρώτος, τώρα απλώς καθόταν. «Και τώρα;» ρώτησε μέσα στο μισοσκόταδο. Η φωνή του ακούστηκε μικρή, σχεδόν παιδική.

Τότε ο Sparken κατέβηκε αργά από τη σκεπή. Τα χρυσαφένια φτερά του αιωρούνταν στον αέρα σαν φύλλα το φθινόπωρο. Για πρώτη φορά, ούτε εκείνος βιαζόταν. Ακούμπησε μπροστά στο μεγάλο παράθυρο και κοίταξε έξω.

Η πόλη ήταν σκοτεινή — αλλά όχι κενή. Μικρά φωτάκια αναβόσβηναν παντού: σε ένα μπαλκόνι όπου ένα παιδί κολλούσε κάτι με προσοχή, σε ένα γκαράζ όπου δύο αδέρφια έστηναν έναν πάγκο εργασίας, σε ένα παράθυρο όπου κάποιος διάβαζε σχέδια. Ο κόσμος που τα παιδιά είχαν ονειρευτεί μέσα σε τέσσερις τοίχους ήταν πια παντού.

«Αυτό που ξεκινήσατε», είπε ο Sparken με φωνή γεμάτη ορίζοντες, «δεν είναι πια ένα εργαστήριο. Είναι σπόρος. Και οι σπόροι δεν ρωτάνε άδεια για να ταξιδέψουν με τον άνεμο.»

Ο Φίλιππος ένιωσε τη λέξη να ριζώνει μέσα του. Σπόρος. Κάτι τόσο μικρό που κρύβει μέσα του ολόκληρα δάση. Κάτι που δεν σου ανήκει πια — και γι' αυτό ακριβώς αξίζει.

«Και ποιος τον φροντίζει τώρα;» ρώτησε σιγά.

«Όσοι τον βρίσκουν», απάντησε ο Sparken. «Πάντα όσοι τον βρίσκουν.»`,
          en: `Hours passed. The sun sank slowly behind the buildings, painting the sky crimson and then deep blue. The workshop lights did not come on — nobody got up to press the switch. There was no need. That night wanted darkness, so that the right things could be seen.

Crocus sat in a corner. Still. Completely still — something that had never, ever happened before. The crocodile who always shouted "Let's go!", who always charged in first, now simply sat. "And now what?" he asked into the half-darkness. His voice sounded small, almost childlike.

Then Sparken descended slowly from the roof. His golden wings drifted through the air like autumn leaves. For the first time, he too was in no hurry. He landed by the big window and looked out.

The city was dark — but not empty. Tiny lights flickered everywhere: on a balcony where a child was carefully gluing something together, in a garage where two siblings were setting up a workbench, in a window where someone sat reading blueprints. The world the children had once dreamed of inside four walls was now everywhere.

"What you started," said Sparken, his voice full of horizons, "is no longer a workshop. It is a seed. And seeds do not ask permission to travel with the wind."

Philippos felt the word take root inside him. Seed. Something so small that carries entire forests within it. Something that no longer belongs to you — and is worth everything precisely because of that.

"And who takes care of it now?" he asked quietly.

"Those who find it," Sparken answered. "Always those who find it."`
        }
      },
      {
        title: { el: "Η Αμφιβολία", en: "The Doubt" },
        image: "/images/wisebot.jpg",
        imageCaption: { el: "Η WiseBot εμφανίστηκε μέσα στη σιωπή — σαν να μην είχε φύγει ποτέ.", en: "WiseBot appeared in the silence — as if she had never left." },
        text: {
          el: `Η Αλεξάνδρα σηκώθηκε από το πάτωμα. Περπάτησε αργά μέχρι το παράθυρο και ακούμπησε τα δάχτυλά της στο κρύο τζάμι. Η ανάσα της θάμπωσε το γυαλί.

Κοίταξε έξω. Είδε ανθρώπους να κουβαλούν κομμάτια αυτού που είχαν φτιάξει — ιδέες τους, μεθόδους τους, ακόμα και τις αγαπημένες τους φράσεις — χωρίς καν να ξέρουν από πού είχαν έρθει. Ένα παιδί εκεί κάτω έλεγε σε ένα άλλο «πρώτα κίνηση, μετά τελειότητα», λες και ήταν δικό του. Και τότε ήρθε ο φόβος. Όχι ο φόβος της αποτυχίας — αυτόν τον ήξερε καλά και τον είχε νικήσει. Ένας άλλος, πιο ύπουλος: ο φόβος του να αφήνεις.

«Κι αν χαθεί;» ρώτησε, και η φωνή της ράγισε. «Κι αν το αλλάξουν τόσο πολύ που δεν θα το αναγνωρίζουμε; Κι αν... κι αν μας ξεχάσουν;»

Τότε η WiseBot εμφανίστηκε. Δεν μπήκε από πουθενά — απλά ήταν εκεί, μέσα στη σιωπή, σαν να μην είχε φύγει ποτέ. Το φως στο στήθος της — χρυσό αυτή τη φορά, όχι μωβ — έλαμπε σταθερά, ζεστά.

«Υπάρχουν δύο είδη χάσιμου», είπε κοιτάζοντας την Αλεξάνδρα στα μάτια. «Το πρώτο είναι αυτό που φοβάσαι. Ότι κάτι φεύγει μακριά και δεν επιστρέφει ποτέ.»

Τα μάτια της Αλεξάνδρας γέμισαν δάκρυα. Δεν τα σκούπισε.

«Αλλά υπάρχει και ένα δεύτερο χάσιμο, πιο αθόρυβο και πιο σκληρό. Το να κρατάς κάτι τόσο σφιχτά, από φόβο, που το πνίγεις. Να το κλειδώνεις για να μην το πάρει κανείς — και να το βλέπεις να μαραίνεται μέσα στα ίδια σου τα χέρια.»

Η WiseBot πλησίασε, και το χρυσό φως άγγιξε το πρόσωπο της Αλεξάνδρας.

«Ό,τι αξίζει αληθινά δεν χάνεται επειδή το αφήνεις. Χάνεται μόνο αν το κρατάς από φόβο. Το έργο σας δεν σας ανήκει πια, Αλεξάνδρα. Ανήκει στον κόσμο. Και αυτή είναι η μεγαλύτερη νίκη του.»`,
          en: `Alexandra rose from the floor. She walked slowly to the window and pressed her fingers against the cold glass. Her breath fogged the pane.

She looked outside. She saw people carrying pieces of what they had built — their ideas, their methods, even their favorite phrases — without ever knowing where they had come from. A child down there was telling another one "movement first, perfection later," as if it were his own invention. And then the fear came. Not the fear of failure — she knew that one well and had already defeated it. Another fear, more cunning: the fear of letting go.

"What if it gets lost?" she asked, and her voice cracked. "What if they change it so much that we won't even recognize it? What if... what if they forget us?"

Then WiseBot appeared. She was simply there, inside the silence, as if she had never left. The light on her chest — golden this time, not purple — shone steadily, warmly.

"There are two kinds of loss," she said, looking at Alexandra. "The first is the one you fear. That something travels far away and never comes back."

Alexandra's eyes filled with tears. She didn't wipe them away.

"But there is a second kind of loss, quieter and crueler. Holding something so tightly, out of fear, that you suffocate it. Locking it away so no one can take it — and watching it wither inside your own hands."

WiseBot came closer, and the golden light touched Alexandra's face.

"What is truly worth something is never lost because you let it go. It is lost only if you hold it out of fear. Your work doesn't belong to you anymore, Alexandra. It belongs to the world. And that is its greatest victory."`
        }
      },
      {
        title: { el: "Η Μεταβίβαση", en: "The Handover" },
        image: "/images/crocus.jpg",
        imageCaption: { el: "Για πρώτη φορά, ο Crocus δεν έτρεχε. Χαμογελούσε.", en: "For the first time, Crocus wasn't running. He was smiling." },
        text: {
          el: `Η Ελευθερία σηκώθηκε πρώτη. Αργά, με μια κίνηση ήρεμη και αποφασισμένη. Δεν ήταν κούραση αυτό που την έκανε να κινείται τόσο αργά. Ήταν ωριμότητα — η γνώση ότι οι πιο σημαντικές στιγμές δεν χρειάζονται βιασύνη.

Κοίταξε τα χέρια της για λίγο, κάτω από το αχνό φως που έμπαινε από το παράθυρο. Τα χέρια που κάποτε μόνο γύριζαν σελίδες βιβλίων, κρυμμένα σε μια γωνιά. Που μετά έμαθαν να κρατούν εργαλεία, να μετρούν, να χτίζουν. Τα χέρια που τώρα ήταν καιρός να μάθουν το πιο δύσκολο απ' όλα: να ανοίγουν.

«Μπορούμε να το ανοίξουμε», είπε. «Να αφήσουμε άλλους να το πάρουν, να το αλλάξουν, να το κάνουν δικό τους. Να μην ελέγχουμε πια τα πάντα.»

«Δύσκολο», είπε ο Crocus από τη γωνιά του, και η φωνή του είχε μια σπάνια απαλότητα.

«Αλλά σωστό», απάντησε η Ελευθερία.

Κάθισαν όλοι γύρω από το μεγάλο τραπέζι — εκεί που είχαν σχεδιάσει, αποτύχει, τσακωθεί και θριαμβεύσει τόσες φορές. Πάνω του υπήρχε μόνο ένα πράγμα: ένα τετράδιο. Λευκό. Καινούργιο. Άγραφο.

Και έγραψαν. Όχι κανόνες — οι κανόνες κλειδώνουν. Οδηγίες καρδιάς: όσα αξίζει να θυμάται όποιος συνεχίσει.

Ο Φίλιππος έγραψε πρώτος, με τα γράμματά του γερτά και δυνατά: «Μην φοβάσαι να σπάσεις κάτι. Φτιάχνεται ξανά. Πάντα φτιάχνεται ξανά.»

Η Αλεξάνδρα ακολούθησε: «Η αλήθεια πονάει. Αλλά το ψέμα πονάει περισσότερο — και για πιο πολύ καιρό.»

Η Ελευθερία τελευταία, με τα μικρά προσεκτικά γράμματά της: «Η γνώση χωρίς πράξη είναι βάρος. Η πράξη χωρίς γνώση είναι τύφλα. Χρειάζεσαι και τις δύο.»

Και μετά — άφησαν τις υπόλοιπες σελίδες κενές. Επίτηδες. Γιατί ένα γεμάτο τετράδιο δεν προσκαλεί κανέναν να γράψει.

Ο Crocus κοίταξε το ανοιχτό τετράδιο και χαμογέλασε — ένα αληθινό, πλατύ χαμόγελο. «Για πρώτη φορά στη ζωή μου...» είπε, «δεν τρέχουμε. Και δεν πειράζει.»`,
          en: `Eleftheria stood up first. Slowly, with a movement calm and decided. It wasn't tiredness that made her move so slowly. It was maturity — the knowledge that the most important moments need no hurry.

She looked at her hands for a moment, under the faint light coming through the window. The hands that once only turned the pages of books, hidden away in a corner. That later learned to hold tools, to measure, to build. The hands that now had to learn the hardest thing of all: to open.

"We can open it up," she said. "Let others take it, change it, make it their own. Stop controlling everything."

"Difficult," said Crocus from his corner, and his voice held a rare softness.

"But right," Eleftheria answered.

They all sat around the big table — the one where they had designed, failed, argued, and triumphed so many times. On it lay only one thing: a notebook. White. New. Unwritten.

And they wrote. Not rules — rules lock things up. Instructions of the heart: the things worth remembering for whoever carries on.

Philippos wrote first, his letters slanted and strong: "Don't be afraid to break something. It can be built again. It can always be built again."

Alexandra followed: "The truth hurts. But a lie hurts more — and for much longer."

Eleftheria wrote last, in her small, careful handwriting: "Knowledge without action is a burden. Action without knowledge is blindness. You need both."

And then — they left the remaining pages empty. On purpose. Because a notebook that is already full invites no one to write in it.

Crocus looked at the open notebook and smiled — a true, wide smile. "For the first time in my life..." he said, "we're not running. And that's okay."`
        }
      },
      {
        title: { el: "Αυτό Δεν Είναι Το Τέλος", en: "This Is Not The End" },
        image: "/images/paidia-wisebot-2.webp",
        imageCaption: { el: "Αυτό δεν ήταν τέλος. Ήταν αρχή. Μια αρχή που ανήκει σε όλους.", en: "This was not an end. It was a beginning. A beginning that belongs to everyone." },
        text: {
          el: `Την επόμενη μέρα, η πόρτα του εργαστηρίου ήταν ολάνοιχτη. Διάπλατα. Σαν πρόσκληση χωρίς λόγια, σαν αγκαλιά που περιμένει.

Πρώτα ήρθε ένα κορίτσι με μπλε μαλλιά, που κοντοστάθηκε στο κατώφλι και μετά μπήκε αποφασιστικά. Μετά ένα αγόρι με γυαλιά, που κρατούσε ένα κουτί γεμάτο παλιά ρομποτάκια. Και μετά άλλοι. Και άλλοι. Σαν παλίρροια που δεν σταματάει.

Τα τρία παιδιά κοιτούσαν από μια γωνία, ο ένας δίπλα στον άλλον. «Κάπου, αυτή τη στιγμή, κάποιος ξεκινάει όπως ξεκινήσαμε εμείς», σκέφτηκε η Ελευθερία. «Με τον ίδιο φόβο. Την ίδια σπίθα. Και κάποιος θα κάνει γι' αυτόν αυτό που η WiseBot έκανε για εμάς.»

Η WiseBot γύρισε προς τα παιδιά. Τα μάτια της ήταν γεμάτα χρυσό φως — το ίδιο φως της πρώτης μέρας, όταν όλα ξεκίνησαν με μια ερώτηση. Και τώρα, όλα θα τελείωναν με τον ίδιο τρόπο. Με μια ερώτηση.

«Θέλετε να το κρατήσετε;» ρώτησε. «Ή να το δείτε να ταξιδεύει;»

Ο Φίλιππος κοίταξε τα χέρια του — τα χέρια που κάποτε έσπαγαν από θυμό, που μετά έμαθαν να χτίζουν, και που τώρα ήξεραν να ανοίγουν. Τα άνοιξε. Η Αλεξάνδρα χαμογέλασε μέσα από τα δάκρυά της — δάκρυα περηφάνιας, όχι λύπης — και άνοιξε κι εκείνη τα δικά της. Η Ελευθερία, τρίτη, άπλωσε τις παλάμες της σαν να άφηνε ένα πουλί να πετάξει.

Τρία ζευγάρια χέρια. Ανοιχτά. Ελεύθερα. Σαν φτερά.

Η WiseBot πέταξε ανάμεσά τους, μια χρυσή λάμψη στο σκοτάδι, και βγήκε από το παράθυρο, στη νύχτα, στο απέραντο. Αλλά δεν έφυγε. Γιατί η WiseBot ζούσε πια σε κάθε ερώτηση που ανοίγει δρόμους. Σε κάθε σπίθα που γίνεται φωτιά. Σε κάθε λάθος που γίνεται μάθημα. Σε κάθε παιδί που τολμάει να φτιάξει κάτι από το τίποτα.

Και τα παιδιά, στην πόρτα, ένιωθαν ελεύθερα και περήφανα. Γιατί τα μεγάλα ταξίδια δεν τελειώνουν ποτέ. Αλλάζουν χέρια. Αλλάζουν μορφή. Αλλάζουν κόσμο.`,
          en: `The next day, the workshop door stood wide open. Like an invitation without words, like a waiting embrace.

First came a girl with blue hair, who paused at the threshold and stepped in. Then a boy with glasses, carrying a box of old toy robots. And then others. Like a tide that would not stop.

The three children watched from a corner. "Somewhere, at this very moment, someone is starting out just like we did," Eleftheria thought. "With the same fear. The same spark. And someone will do for them what WiseBot did for us."

WiseBot turned toward the children. Her eyes were full of golden light — the same light of that very first day, when everything began with a question. And now, everything would end the same way. With a question.

"Do you want to keep it?" she asked. "Or would you rather watch it travel?"

Philippos looked at his hands — the hands that once broke things in anger, that later learned to build, and that now knew how to open. He opened them. Alexandra smiled through her tears — tears of pride, not sadness — and opened hers as well. Eleftheria, third, stretched out her palms as if releasing a bird into the sky.

Three pairs of hands. Open. Free. Like wings.

WiseBot flew between them, a golden flash in the darkness, and out through the window, into the night. But she did not leave. Not truly. Because WiseBot now lived in every question that opens new roads. In every spark that becomes a fire. In every mistake that becomes a lesson. In every child who dares to make something out of nothing.

And the children, at the door, felt free and proud. Because great journeys never end. They change hands. They change form. They change the world.`
        }
      }
    ]
  }
];
