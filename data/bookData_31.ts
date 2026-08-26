// ============================================================
// BOOK 31 — Η ΤΕΧΝΗ ΤΗΣ ΣΥΜΦΩΝΙΑΣ / THE ART OF THE DEAL
// Kids adaptation inspired by «The Art of the Deal» by Donald Trump.
// Original story in the WiseBot universe — negotiation craft only,
// strictly non-political: think big, prepare, keep alternatives,
// protect your downside, win-win deals, deliver what you promise.
// ============================================================

import { Book } from '../types';

export const BOOK_31: Book[] = [
  {
    id: 31,
    title: { el: 'Η ΤΕΧΝΗ ΤΗΣ ΣΥΜΦΩΝΙΑΣ', en: 'THE ART OF THE DEAL' },
    theme: { el: 'ΔΙΑΠΡΑΓΜΑΤΕΥΣΗ', en: 'NEGOTIATION' },
    stepLabel: { el: 'WISEBOT & Η ΣΥΜΦΩΝΙΑ', en: 'WISEBOT & THE DEAL' },
    author: 'Donald Trump · Kids Edition',
    cover: '/images/sparken.jpg',
    videoUrl: '',
    description: {
      el: 'Εμπνευσμένο από το βιβλίο «The Art of the Deal» του Donald Trump. Τα παιδιά θέλουν την καλύτερη γωνιά στο σχολικό παζάρι — και μαθαίνουν ότι μια καλή συμφωνία θέλει μεγάλη σκέψη, γερή προετοιμασία, δεύτερο σχέδιο και δύο πλευρές που χαμογελούν.',
      en: 'Inspired by the book The Art of the Deal by Donald Trump. The kids want the best corner at the school fair — and learn that a good deal takes big thinking, solid preparation, a plan B and two smiling sides.'
    },
    meaning: {
      el: 'Καλή συμφωνία είναι αυτή που κερδίζουν και οι δύο. Όποιος ξεγελάει κερδίζει μία φορά — και χάνει τις επόμενες δέκα.',
      en: 'A good deal is one where both sides win. Whoever tricks wins once — and loses the next ten.'
    },
    xp: 100,
    parentMessage: {
      el: 'Τα παιδιά διαπραγματεύονται κάθε μέρα: ώρα ύπνου, δουλειές του σπιτιού, ανταλλαγές στην αυλή. Αντί να λέτε «όχι» ή «ναι» αμέσως, δοκιμάστε: «Κάνε μου μια πρόταση. Τι κερδίζω εγώ, τι κερδίζεις εσύ;» Έτσι μαθαίνουν ότι η συμφωνία δεν είναι πόλεμος — είναι γέφυρα. Και μάθετέ τους να τηρούν ό,τι υπόσχονται: η φήμη χτίζεται αργά και χαλάει σε μια στιγμή.',
      en: 'Kids negotiate every day: bedtime, chores, playground swaps. Instead of saying no or yes right away, try: make me an offer — what do I win, what do you win? This teaches them that a deal is not a war — it is a bridge. And teach them to keep every promise: reputation is built slowly and breaks in a moment.'
    },
    pages: [
      {
        title: { el: 'Η Χρυσή Γωνιά', en: 'The Golden Corner' },
        image: '/images/ta-3-paidia.webp',
        imageCaption: { el: 'Ένα παζάρι. Μία γωνιά. Τρία παιδιά που τη θέλουν.', en: 'One fair. One corner. Three kids who want it.' },
        text: {
          el: `Η ανακοίνωση κρεμόταν στον πίνακα του σχολείου, γραμμένη με μεγάλα κόκκινα γράμματα. Ανοιξιάτικο παζάρι, το Σάββατο, στην αυλή. Κάθε ομάδα μπορούσε να ζητήσει ένα τραπέζι.

Η Αλεξάνδρα στάθηκε μπροστά στον πίνακα και τα μάτια της έλαμψαν. «Εκεί θα δείξουμε το ρομπότ μας. Θα το δουν όλοι!»

Ο Φίλιππος έδειξε το σχέδιο της αυλής. «Υπάρχει μόνο μία καλή θέση. Η γωνιά δίπλα στην είσοδο. Από εκεί περνάνε όλοι. Οι άλλες θέσεις είναι πίσω, στη σκιά, εκεί που δεν πάει κανείς.»

Η Ελευθερία μέτρησε σιωπηλά. «Δεκατρείς ομάδες. Μία γωνιά. Αυτό δεν λέγεται πρόβλημα. Λέγεται μάχη.»

Και σαν να μην έφτανε αυτό, ο Φίλιππος είχε και δικό του πονοκέφαλο. Ο Πέτρος από την άλλη τάξη είχε τη σπανιότερη κάρτα του κόσμου — τον Χρυσό Δράκο. Ο Φίλιππος την ονειρευόταν μήνες. Την ήθελε στη συλλογή του όσο τίποτα.

«Θα του δώσω ό,τι μου ζητήσει», μουρμούρισε.

Εκείνη τη στιγμή, ένα απαλό φτερούγισμα ακούστηκε από το παράθυρο. Η WiseBot προσγειώθηκε στον πίνακα, ακριβώς πάνω από την ανακοίνωση.

«Ό,τι σου ζητήσει;» είπε ήρεμα. «Μόλις άκουσα τη χειρότερη πρόταση στην ιστορία των συμφωνιών.»

Τα τρία παιδιά κοιτάχτηκαν. Κάτι τους έλεγε ότι το Σάββατο ήταν πιο μακριά απ' όσο φαινόταν — και ότι είχαν πολλά να μάθουν μέχρι τότε.`,
          en: `The announcement hung on the school board, written in big red letters. Spring fair, this Saturday, in the yard. Every team could ask for one table.

Alexandra stood in front of the board and her eyes sparkled. "That is where we will show our robot. Everyone will see it!"

Philippos pointed at the map of the yard. "There is only one good spot. The corner next to the entrance. Everyone walks past it. The other spots are in the back, in the shade, where nobody goes."

Eleftheria counted silently. "Thirteen teams. One corner. That is not called a problem. That is called a battle."

And as if that was not enough, Philippos had his own headache. Petros from the other class owned the rarest card in the world — the Golden Dragon. Philippos had dreamed about it for months. He wanted it in his collection more than anything.

"I will give him whatever he asks for," he muttered.

At that moment, a soft flutter came from the window. WiseBot landed on the board, right above the announcement.

"Whatever he asks for?" she said calmly. "I just heard the worst offer in the history of deals."

The three kids looked at each other. Something told them that Saturday was further away than it seemed — and that they had a lot to learn before then.`
        }
      },
      {
        title: { el: 'Μάθε Πριν Μιλήσεις', en: 'Learn Before You Speak' },
        image: '/images/paidia-kai-sparken.webp',
        imageCaption: { el: 'Σκέψου μεγάλα. Προετοιμάσου περισσότερο.', en: 'Think big. Prepare even bigger.' },
        text: {
          el: `Η WiseBot χτύπησε το φτερό της στον πίνακα, σαν δασκάλα που ξεκινά μάθημα.

«Πρώτος κανόνας: σκέψου μεγάλα. Μη ζητάς απλώς ένα τραπέζι. Σκέψου τι σπουδαίο μπορεί να γίνει το τραπέζι σας. Μια μικρή σκέψη κοστίζει τον ίδιο κόπο με μια μεγάλη — διάλεξε τη μεγάλη.»

Ο Sparken εμφανίστηκε δίπλα της, με τα μάτια του να λάμπουν σαν προβολείς. «Φανταστείτε τη γωνιά σας γεμάτη κόσμο. Το ρομπότ να πετάει. Τα παιδιά να χειροκροτούν. Αυτή είναι η εικόνα. Τώρα δουλέψτε προς τα πίσω.»

«Δεύτερος κανόνας», συνέχισε η WiseBot. «Ποτέ μην κάθεσαι στο τραπέζι της συμφωνίας αν δεν ξέρεις τα πάντα. Ποιος αποφασίζει για τις θέσεις; Τι χρειάζεται το παζάρι; Τι αγαπάει ο Πέτρος; Όποιος ξέρει περισσότερα, φοβάται λιγότερο.»

Τα παιδιά έπιασαν δουλειά σαν ντετέκτιβ. Η Ελευθερία έμαθε ότι τις θέσεις τις μοίραζε η κυρία Ελένη, η πρόεδρος του συλλόγου γονέων. Η Αλεξάνδρα έμαθε ότι το παζάρι έψαχνε απεγνωσμένα κάτι εντυπωσιακό για να τραβήξει κόσμο. Ο Φίλιππος έμαθε ότι ο Πέτρος δεν μάζευε μόνο κάρτες — μάζευε αυτοκόλλητα με ρομπότ, και του έλειπαν τρία.

Το βράδυ, η Ελευθερία κοίταξε τις σημειώσεις τους. «Ξέρετε κάτι; Πριν από δύο μέρες δεν ξέραμε τίποτα. Τώρα ξέρουμε τι θέλει ο καθένας.»

«Ακριβώς», είπε η WiseBot. «Και αυτό, μικρή μου, είναι το μισό παιχνίδι.»`,
          en: `WiseBot tapped her wing on the board, like a teacher starting a lesson.

"First rule: think big. Do not just ask for a table. Think about how great your table could become. A small thought costs the same effort as a big one — pick the big one."

Sparken appeared beside her, his eyes shining like headlights. "Imagine your corner full of people. The robot flying. Kids clapping. That is the picture. Now work backwards from it."

"Second rule," WiseBot continued. "Never sit at the deal table before you know everything. Who decides the spots? What does the fair need? What does Petros love? The one who knows more, fears less."

The kids got to work like detectives. Eleftheria found out that the spots were assigned by Mrs Eleni, the president of the parents club. Alexandra found out that the fair was desperately looking for something impressive to attract visitors. Philippos found out that Petros did not only collect cards — he collected robot stickers, and he was missing three.

That evening, Eleftheria looked at their notes. "You know something? Two days ago we knew nothing. Now we know what everyone wants."

"Exactly," said WiseBot. "And that, my little one, is half the game."`
        }
      },
      {
        title: { el: 'Η Συμφωνία Που Πλήγωσε', en: 'The Deal That Hurt' },
        image: '/images/filippos.webp',
        imageCaption: { el: 'Κέρδισε μια κάρτα. Έχασε κάτι πιο ακριβό.', en: 'He won a card. He lost something more precious.' },
        text: {
          el: `Ο Φίλιππος όμως βιαζόταν. Ο Χρυσός Δράκος γυάλιζε στο μυαλό του και δεν τον άφηνε να σκεφτεί.

Στο διάλειμμα, πλησίασε τον Πέτρο. «Σου δίνω τον Ασημένιο Λύκο μου για τον Δράκο. Είναι ολοκαίνουριος.»

Δεν ήταν. Ο Λύκος είχε μια γρατζουνιά στη γωνία — μικρή, αλλά υπαρκτή. Ο Φίλιππος την έκρυψε με τον αντίχειρά του και χαμογέλασε.

Ο Πέτρος δέχτηκε. Τα χέρια έσφιξαν. Η ανταλλαγή έγινε.

Για μία ώρα, ο Φίλιππος ένιωθε βασιλιάς. Κρατούσε τον Χρυσό Δράκο και πετούσε στα σύννεφα.

Μετά ήρθε το μεσημέρι. Ο Πέτρος είδε τη γρατζουνιά. Δεν φώναξε. Δεν έτρεξε στη δασκάλα. Έκανε κάτι πολύ χειρότερο. Το είπε σε όλους.

Μέχρι το τέλος της μέρας, κανένα παιδί δεν ήθελε να ανταλλάξει τίποτα με τον Φίλιππο. Ούτε κάρτα. Ούτε αυτοκόλλητο. Ούτε μισό μπισκότο. Στην αυλή, δύο παιδιά γύρισαν την πλάτη τους όταν πλησίασε.

Το απόγευμα, ο Φίλιππος ακούμπησε τον Δράκο στο τραπέζι. Δεν γυάλιζε πια το ίδιο.

«Κέρδισα, σωστά;» ρώτησε σιγά τη WiseBot. «Πήρα την καλύτερη κάρτα.»

Η WiseBot τον κοίταξε με τα μωβ μάτια της. «Πήρες μία κάρτα. Και πλήρωσες με κάτι που δεν αγοράζεται. Μια στημένη συμφωνία σε κάνει νικητή για μια μέρα — και μόνο για μια μέρα. Αύριο, ποιος θα καθίσει απέναντί σου στο τραπέζι;»

Ο Φίλιππος δεν απάντησε. Ήξερε την απάντηση. Κανείς.`,
          en: `But Philippos was in a hurry. The Golden Dragon glowed in his mind and would not let him think.

At break, he approached Petros. "I will give you my Silver Wolf for the Dragon. It is brand new."

It was not. The Wolf had a scratch on the corner — small, but real. Philippos hid it with his thumb and smiled.

Petros accepted. Hands were shaken. The trade was done.

For one hour, Philippos felt like a king. He held the Golden Dragon and floated on clouds.

Then came lunchtime. Petros saw the scratch. He did not shout. He did not run to the teacher. He did something far worse. He told everyone.

By the end of the day, no kid wanted to trade anything with Philippos. Not a card. Not a sticker. Not half a cookie. In the yard, two kids turned their backs when he came close.

That afternoon, Philippos placed the Dragon on the table. It did not shine the same anymore.

"I won, right?" he asked WiseBot quietly. "I got the best card."

WiseBot looked at him with her purple eyes. "You got one card. And you paid with something money cannot buy. A trick deal makes you a winner for one day — and only one day. Tomorrow, who will sit across the table from you?"

Philippos did not answer. He knew the answer. Nobody.`
        }
      },
      {
        title: { el: 'Το Δεύτερο Σχέδιο', en: 'The Second Plan' },
        image: '/images/paidia-kai-pencilo.webp',
        imageCaption: { el: 'Σχέδιο Α, σχέδιο Β — και ήρεμη φωνή.', en: 'Plan A, plan B — and a calm voice.' },
        text: {
          el: `Την επόμενη μέρα, ο Φίλιππος έκανε το πιο δύσκολο βήμα της ζωής του. Βρήκε τον Πέτρο και άπλωσε το χέρι με τον Χρυσό Δράκο.

«Πάρ' τον πίσω. Η ανταλλαγή δεν ήταν τίμια. Συγγνώμη.»

Ο Πέτρος τον κοίταξε έκπληκτος. Πήρε την κάρτα, έδωσε πίσω τον Λύκο, και για πρώτη φορά χαμογέλασε. «Τουλάχιστον το παραδέχτηκες. Αυτό δεν το κάνει κανείς.»

Στο σπίτι, ο Pencilo τους περίμενε με ένα μεγάλο χαρτί απλωμένο στο τραπέζι.

«Ώρα για το παζάρι», είπε. «Και μία συμφωνία θέλει σχέδιο — όχι ελπίδα. Πρώτον: τι ζητάμε; Τη γωνιά της εισόδου. Δεύτερον: τι δίνουμε; Κάτι που το παζάρι χρειάζεται πραγματικά. Τρίτον, και πιο σημαντικό: τι κάνουμε αν πουν όχι;»

Η Αλεξάνδρα σκέφτηκε. «Αν πουν όχι για τη γωνιά... υπάρχει η θέση στην είσοδο του γυμναστηρίου. Περνάει λιγότερος κόσμος, αλλά έχει ρεύμα για το ρομπότ και σκιά.»

«Αυτό», είπε η WiseBot, «λέγεται δεύτερο σχέδιο. Όταν κρέμεσαι από μία μόνο επιλογή, μπαίνεις στη συζήτηση τρέμοντας — και δέχεσαι οτιδήποτε. Όταν έχεις πού να πατήσεις, μιλάς ήρεμα.»

«Και ένα τελευταίο», πρόσθεσε ο Pencilo. «Στη συμφωνία βάζουμε μόνο ό,τι αντέχουμε να χάσουμε. Το ρομπότ μας δεν μπαίνει ποτέ στο στοίχημα. Ποτέ.»

Ο Φίλιππος έγραψε στην άκρη του χαρτιού, με κεφαλαία: ΠΡΟΣΤΑΤΕΨΕ ΤΑ ΚΑΤΩ ΣΟΥ. Αυτή τη φορά, το κατάλαβε μέχρι το κόκαλο.`,
          en: `The next day, Philippos took the hardest step of his life. He found Petros and held out the Golden Dragon.

"Take it back. The trade was not fair. I am sorry."

Petros stared at him, surprised. He took the card, gave back the Wolf, and for the first time he smiled. "At least you admitted it. Nobody ever does that."

At home, Pencilo was waiting with a big sheet of paper spread on the table.

"Time for the fair," he said. "A deal needs a plan — not hope. First: what are we asking for? The entrance corner. Second: what are we offering? Something the fair truly needs. Third, and most important: what do we do if they say no?"

Alexandra thought about it. "If they say no to the corner... there is the spot by the gym entrance. Fewer people walk past, but it has power for the robot and shade."

"That," said WiseBot, "is called a second plan. When you hang from one single option, you enter the talk trembling — and you accept anything. When you have somewhere to stand, you speak calmly."

"One last thing," added Pencilo. "We only put into a deal what we can afford to lose. Our robot never goes into the bet. Never."

Philippos wrote on the edge of the paper, in capital letters: PROTECT YOUR DOWNSIDE. This time, he understood it down to the bone.`
        }
      },
      {
        title: { el: 'Δύο Χαμόγελα', en: 'Two Smiles' },
        image: '/images/paidia-wisebot-2.webp',
        imageCaption: { el: 'Η καλύτερη συμφωνία: κερδίζουν και οι δύο.', en: 'The best deal: both sides win.' },
        text: {
          el: `Την Πέμπτη, τα τρία παιδιά κάθισαν απέναντι από την κυρία Ελένη. Δεν έτρεμαν. Είχαν κάνει τα μαθήματά τους — και είχαν δεύτερο σχέδιο στην τσέπη.

«Θα θέλαμε τη γωνιά δίπλα στην είσοδο», είπε η Αλεξάνδρα. «Και να τι προσφέρουμε: κάθε μία ώρα, το ρομπότ μας θα κάνει μια μικρή παράσταση. Θα πετάει και θα μιλάει. Ο κόσμος θα μαζεύεται — και θα μένει στο παζάρι. Επίσης, στο τέλος, θα καθαρίσουμε όλη την αυλή.»

Η κυρία Ελένη σήκωσε τα φρύδια. «Και αν σας δώσω τη θέση στο γυμναστήριο;»

«Θα την πάρουμε», απάντησε ήρεμα ο Φίλιππος. «Έχει ρεύμα και σκιά. Αλλά η παράσταση τραβάει κόσμο μόνο αν τη βλέπουν όλοι. Στην είσοδο, κερδίζει και το παζάρι.»

Η κυρία Ελένη χαμογέλασε. Ήξερε καλή πρόταση όταν άκουγε μία. «Σύμφωνοι. Η γωνιά είναι δική σας.»

Το Σάββατο, η γωνιά της εισόδου έγινε το κέντρο του κόσμου. Το ρομπότ πέταξε, τα παιδιά χειροκρότησαν, και το ταμείο του παζαριού γέμισε όσο ποτέ. Και όταν όλοι έφυγαν, τρεις σκιές μάζευαν χαρτάκια από την αυλή, όπως ακριβώς είχαν υποσχεθεί.

«Θυμηθείτε το αυτό», είπε η WiseBot καθώς ο ήλιος έδυε. «Συμφωνία δεν είναι να πάρεις τα πάντα. Είναι να φύγετε και οι δύο χαμογελώντας. Και όταν παραδίδεις ό,τι υποσχέθηκες — και λίγο παραπάνω — η επόμενη συμφωνία σε περιμένει ήδη στην πόρτα.»

Του χρόνου, η κυρία Ελένη δεν περίμενε καν να ρωτήσουν. Τους κράτησε τη γωνιά πρώτη απ' όλους.`,
          en: `On Thursday, the three kids sat across from Mrs Eleni. They were not trembling. They had done their homework — and they had a second plan in their pocket.

"We would like the corner next to the entrance," said Alexandra. "And here is what we offer: every hour, our robot will put on a little show. It will fly and it will talk. People will gather — and they will stay at the fair. Also, at the end, we will clean the whole yard."

Mrs Eleni raised her eyebrows. "And if I give you the gym spot instead?"

"We will take it," Philippos answered calmly. "It has power and shade. But the show only attracts people if everyone can see it. At the entrance, the fair wins too."

Mrs Eleni smiled. She knew a good offer when she heard one. "Agreed. The corner is yours."

On Saturday, the entrance corner became the center of the world. The robot flew, kids clapped, and the fair collected more than ever before. And when everyone left, three shadows were picking up papers from the yard, exactly as promised.

"Remember this," said WiseBot as the sun went down. "A deal is not about taking everything. It is about both sides leaving with a smile. And when you deliver what you promised — and a little more — the next deal is already waiting at your door."

The following year, Mrs Eleni did not even wait for them to ask. She saved the corner for them first.`
        }
      }
    ]
  }
];
