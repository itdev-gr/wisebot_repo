// ============================================================
// BOOK 32 — ΠΩΣ ΝΑ ΚΕΡΔΙΖΕΙΣ ΦΙΛΟΥΣ / HOW TO WIN FRIENDS
// Kids adaptation inspired by «How to Win Friends and Influence
// People» by Dale Carnegie. Original story in the WiseBot universe:
// genuine interest, names matter, listen more than you talk,
// no criticism, honest compliments, admit mistakes first,
// make others feel important — honestly.
// ============================================================

import { Book } from '../types';

export const BOOK_32: Book[] = [
  {
    id: 32,
    title: { el: 'ΠΩΣ ΝΑ ΚΕΡΔΙΖΕΙΣ ΦΙΛΟΥΣ', en: 'HOW TO WIN FRIENDS' },
    theme: { el: 'ΦΙΛΙΑ', en: 'FRIENDSHIP' },
    stepLabel: { el: 'WISEBOT & Η ΦΙΛΙΑ', en: 'WISEBOT & FRIENDSHIP' },
    author: 'Dale Carnegie · Kids Edition',
    cover: '/images/wisebot.jpg',
    videoUrl: '',
    description: {
      el: 'Εμπνευσμένο από το βιβλίο «How to Win Friends and Influence People» του Dale Carnegie. Ένας καινούριος μαθητής που δεν του μιλάει κανείς, μια ομάδα που μαλώνει συνέχεια — και επτά μικρά μυστικά που κάνουν τους ανθρώπους να ανοίγουν σαν λουλούδια.',
      en: 'Inspired by the book How to Win Friends and Influence People by Dale Carnegie. A new student nobody talks to, a team that keeps fighting — and seven little secrets that make people open up like flowers.'
    },
    meaning: {
      el: 'Κερδίζεις φίλους όταν σε ενδιαφέρουν αληθινά οι άλλοι — όχι όταν προσπαθείς να τους εντυπωσιάσεις.',
      en: 'You win friends when you are truly interested in others — not when you try to impress them.'
    },
    xp: 100,
    parentMessage: {
      el: 'Το πιο γλυκό άκουσμα για κάθε άνθρωπο είναι το όνομά του — και το πιο σπάνιο δώρο είναι κάποιος που ακούει πραγματικά. Δοκιμάστε απόψε στο τραπέζι: κάντε στο παιδί σας μια ερώτηση για τη μέρα του και μετά μόνο ακούστε, χωρίς διόρθωση και χωρίς συμβουλή. Θα εκπλαγείτε πόσα θα σας πει. Και όταν κάνετε λάθος, πείτε το πρώτοι — έτσι μαθαίνει ότι το λάθος δεν είναι ντροπή.',
      en: 'The sweetest sound to any person is their own name — and the rarest gift is someone who truly listens. Try tonight at dinner: ask your child one question about their day and then just listen, with no correction and no advice. You will be amazed how much they share. And when you make a mistake, say it first — that is how they learn a mistake is not a shame.'
    },
    pages: [
      {
        title: { el: 'Το Αόρατο Παιδί', en: 'The Invisible Kid' },
        image: '/images/ta-3-paidia.webp',
        imageCaption: { el: 'Καινούριος στην τάξη. Μόνος στο διάλειμμα.', en: 'New in class. Alone at break.' },
        text: {
          el: `Ο καινούριος ήρθε Δευτέρα πρωί. Στάθηκε στην πόρτα της τάξης με μια τσάντα πιο μεγάλη από τον ίδιο και κοίταξε το πάτωμα.

«Παιδιά, από σήμερα έχουμε έναν νέο συμμαθητή», είπε η δασκάλα. Είπε και το όνομά του, αλλά εκείνη τη στιγμή έπεσε μια κασετίνα, δύο παιδιά γέλασαν, και το όνομα χάθηκε στον θόρυβο.

Έτσι έγινε το αγόρι χωρίς όνομα. Ο καινούριος.

Στο διάλειμμα, κάθισε μόνος στο παγκάκι της αυλής. Την Τρίτη, πάλι. Την Τετάρτη, το παγκάκι είχε αρχίσει να μοιάζει δικό του.

Η Αλεξάνδρα τον πρόσεξε από μακριά, αλλά είχε δικά της προβλήματα. Η ομάδα τους είχε αναλάβει τη μεγάλη κατασκευή για την Εβδομάδα Επιστήμης — ένα ηφαίστειο που θα έβγαζε αληθινό καπνό. Μόνο που η ομάδα δεν έφτιαχνε τίποτα. Η ομάδα μάλωνε.

«Η ιδέα μου είναι καλύτερη!» φώναζε ο Φίλιππος.

«Δεν με ακούς ποτέ!» φώναζε η Μαρία.

«Μιλάτε όλοι μαζί», ψιθύριζε η Ελευθερία, αλλά κανείς δεν την άκουγε — απόδειξη ότι είχε δίκιο.

Το βράδυ, η Αλεξάνδρα σωριάστηκε στην καρέκλα της. «Έχουμε ένα ηφαίστειο που δεν χτίζεται, μια ομάδα που δεν μιλιέται, και έναν καινούριο που δεν μιλάει σε κανέναν.»

Από το ράφι ακούστηκε ένα απαλό φτερούγισμα. «Ωραία», είπε η WiseBot. «Και τα τρία προβλήματα έχουν την ίδια λύση.»`,
          en: `The new kid arrived on Monday morning. He stood at the classroom door with a schoolbag bigger than himself and stared at the floor.

"Class, from today we have a new classmate," said the teacher. She said his name too, but at that exact moment a pencil case fell, two kids laughed, and the name drowned in the noise.

And so he became the boy with no name. The new kid.

At break, he sat alone on the yard bench. On Tuesday, again. By Wednesday, the bench had started to look like his.

Alexandra noticed him from afar, but she had her own problems. Their team had taken on the big project for Science Week — a volcano that would puff real smoke. Except the team was not building anything. The team was fighting.

"My idea is better!" shouted Philippos.

"You never listen to me!" shouted Maria.

"You are all talking at the same time," whispered Eleftheria, but nobody heard her — which proved her point.

That evening, Alexandra collapsed into her chair. "We have a volcano that will not get built, a team that will not talk, and a new kid who talks to nobody."

From the shelf came a soft flutter. "Good," said WiseBot. "All three problems have the same solution."`
        }
      },
      {
        title: { el: 'Δύο Αυτιά, Ένα Στόμα', en: 'Two Ears, One Mouth' },
        image: '/images/paidia-kai-wisebot.webp',
        imageCaption: { el: 'Τα τρία μυστικά της WiseBot', en: 'The three secrets of WiseBot' },
        text: {
          el: `Η WiseBot προσγειώθηκε στο γραφείο, ανάμεσα στα σχέδια του ηφαιστείου.

«Θέλετε να μάθετε πώς κερδίζονται οι άνθρωποι; Όχι με μαγικά. Με τρία μικρά μυστικά που όλοι ξεχνούν.»

Τα παιδιά μαζεύτηκαν γύρω της.

«Πρώτο μυστικό: το όνομα. Το όνομά του είναι για κάθε άνθρωπο ο πιο γλυκός ήχος του κόσμου. Ο καινούριος έχει όνομα. Ποιος το ξέρει;»

Σιωπή. Κανείς δεν το ήξερε. Η Αλεξάνδρα ένιωσε τα μάγουλά της να κοκκινίζουν.

«Δεύτερο μυστικό: το γνήσιο ενδιαφέρον. Κερδίζεις περισσότερους φίλους σε δύο εβδομάδες ενδιαφερόμενος αληθινά για τους άλλους, παρά σε δύο χρόνια προσπαθώντας να τους κάνεις να ενδιαφερθούν για σένα. Μη ρωτάς για να φανείς καλός. Ρώτα επειδή θες πραγματικά να ακούσεις την απάντηση.»

«Και το τρίτο;» ρώτησε ο Φίλιππος.

«Το τρίτο το κουβαλάς ήδη πάνω σου. Έχεις δύο αυτιά και ένα στόμα. Η φύση σου έδωσε την αναλογία: άκου διπλάσια απ' όσα λες.»

Ο Φίλιππος συνοφρυώθηκε. «Δηλαδή στην ομάδα... όταν φωνάζω πιο δυνατά για να ακουστεί η ιδέα μου...»

«...τότε ακούγεσαι, αλλά δεν σε ακούνε», είπε η WiseBot. «Η φωνή ανοίγει τα αυτιά μόνο όταν πρώτα έχεις ανοίξει τα δικά σου.»

Η Ελευθερία χαμογέλασε για πρώτη φορά εκείνη τη μέρα. Επιτέλους, κάποιος το είπε δυνατά.

«Αύριο», είπε η Αλεξάνδρα αποφασισμένη, «θα μάθουμε το όνομά του.»`,
          en: `WiseBot landed on the desk, right between the volcano drawings.

"You want to learn how people are won? Not with magic. With three little secrets everyone forgets."

The kids gathered around her.

"First secret: the name. To every person, their own name is the sweetest sound in the world. The new kid has a name. Who knows it?"

Silence. Nobody knew it. Alexandra felt her cheeks turn red.

"Second secret: genuine interest. You win more friends in two weeks by being truly interested in others than in two years of trying to make others interested in you. Do not ask questions to look kind. Ask because you honestly want to hear the answer."

"And the third?" asked Philippos.

"The third one you already carry with you. You have two ears and one mouth. Nature gave you the recipe: listen twice as much as you speak."

Philippos frowned. "So in the team... when I shout louder so my idea gets heard..."

"...then you are loud, but nobody is listening," said WiseBot. "A voice opens ears only after you have opened your own."

Eleftheria smiled for the first time that day. At last, somebody had said it out loud.

"Tomorrow," said Alexandra with determination, "we will learn his name."`
        }
      },
      {
        title: { el: 'Η Κολακεία & Η Κριτική', en: 'Flattery & Criticism' },
        image: '/images/alexandra.webp',
        imageCaption: { el: 'Δύο λάθη σε μία μέρα', en: 'Two mistakes in one day' },
        text: {
          el: `Την επόμενη μέρα, τα πράγματα πήγαν... ανάποδα.

Ο Φίλιππος αποφάσισε να κερδίσει τον καινούριο με το δικό του στυλ. Τον πλησίασε στο διάλειμμα και άρχισε: «Τέλεια μπλούζα! Τέλεια τσάντα! Και τα παπούτσια σου είναι τα πιο ωραία που έχω δει ποτέ στη ζωή μου!»

Ο καινούριος τον κοίταξε καχύποπτα. Τα παπούτσια του ήταν παλιά, με μια τρύπα στο πλάι. Το ήξερε. Και κατάλαβε αμέσως: ο μεγαλόσωμος δεν έλεγε αλήθεια. Μάζεψε την τσάντα του και έφυγε.

«Δεν καταλαβαίνω!» παραπονέθηκε ο Φίλιππος στη WiseBot. «Του είπα μόνο καλά λόγια!»

«Του είπες ψεύτικα λόγια. Η κολακεία είναι σαν πλαστό νόμισμα — γυαλίζει, αλλά όλοι καταλαβαίνουν ότι δεν αξίζει. Το αληθινό κομπλιμέντο βλέπει κάτι πραγματικό.»

Στην άλλη άκρη της αυλής, η Αλεξάνδρα έκανε το δικό της λάθος. Η Μαρία της έδειξε το σχέδιο για το ηφαίστειο — το είχε δουλέψει όλο το βράδυ.

«Είναι όλο λάθος», είπε η Αλεξάνδρα κοφτά. «Ο καπνός δεν βγαίνει από εκεί. Θα το ξανακάνουμε απ' την αρχή.»

Η Μαρία μάζεψε το χαρτί της αργά. «Ξέρεις κάτι; Φτιάξ' το μόνη σου το ηφαίστειο.» Και έφυγε από την ομάδα.

Το βράδυ, η Αλεξάνδρα κοίταζε το ταβάνι. Είχε δίκιο για τον καπνό. Και όμως είχε χάσει. Πώς γίνεται να έχεις δίκιο και να χάνεις;

«Απλό», είπε η WiseBot από το σκοτάδι. «Η κριτική δεν αλλάζει ανθρώπους. Τους κλείνει.»`,
          en: `The next day, things went... backwards.

Philippos decided to win the new kid over in his own style. He walked up to him at break and began: "Awesome shirt! Awesome bag! And your shoes are the coolest I have ever seen in my whole life!"

The new kid looked at him with suspicion. His shoes were old, with a hole on the side. He knew it. And he understood instantly: the big kid was not telling the truth. He picked up his bag and walked away.

"I do not get it!" Philippos complained to WiseBot. "I only said nice things!"

"You said fake things. Flattery is like a counterfeit coin — it shines, but everyone can tell it is worthless. A real compliment sees something real."

At the other end of the yard, Alexandra made her own mistake. Maria showed her the volcano drawing — she had worked on it all night.

"It is all wrong," Alexandra said sharply. "The smoke does not come out from there. We will redo it from scratch."

Maria slowly folded her paper. "You know what? Build the volcano yourself." And she left the team.

That night, Alexandra stared at the ceiling. She had been right about the smoke. And yet she had lost. How can you be right and still lose?

"Simple," said WiseBot from the darkness. "Criticism does not change people. It closes them."`
        }
      },
      {
        title: { el: 'Το Όνομά Του Ήταν Άρης', en: 'His Name Was Aris' },
        image: '/images/eleftheria.webp',
        imageCaption: { el: 'Πρώτα παραδέχεσαι. Μετά πλησιάζεις.', en: 'First you admit. Then you approach.' },
        text: {
          el: `Το πρωί, η Αλεξάνδρα βρήκε τη Μαρία στην είσοδο του σχολείου. Πήρε μια βαθιά ανάσα.

«Έκανα λάθος. Όχι για τον καπνό — για τον τρόπο. Δούλεψες όλο το βράδυ και εγώ είδα μόνο το σφάλμα. Το σχέδιό σου είχε τρεις ιδέες που δεν θα τις σκεφτόμουν ποτέ. Η σκάλα στο πλάι είναι εξαιρετική.»

Η Μαρία την κοίταξε στα μάτια, ψάχνοντας κοροϊδία. Δεν βρήκε. Βρήκε κάτι σπάνιο: έναν άνθρωπο που παραδέχεται πρώτος το δικό του λάθος.

«Εντάξει», είπε σιγά. «Ο καπνός όντως βγαίνει από λάθος σημείο. Το φτιάχνουμε μαζί;»

Στο διάλειμμα, η Ελευθερία πλησίασε το παγκάκι του καινούριου. Δεν είπε κολακείες. Έκανε κάτι πιο απλό — έδειξε το βιβλίο που κρατούσε εκείνος.

«Ηφαίστεια της Γης», διάβασε. «Το έχω διαβάσει δύο φορές. Εσύ σε ποιο κεφάλαιο είσαι;»

Τα μάτια του καινούριου άνοιξαν διάπλατα. «Στο έκτο. Στα ενεργά ηφαίστεια.» Δίστασε μια στιγμή. «Με λένε Άρη. Στο παλιό μου σχολείο είχαμε φτιάξει μακέτα ηφαιστείου. Ξέρω πώς βγαίνει ο καπνός χωρίς φωτιά.»

Η Ελευθερία κάθισε δίπλα του και απλώς άκουγε. Ρωτούσε και άκουγε. Ο Άρης, το αγόρι που δεν μιλούσε σε κανέναν, μίλησε δεκαπέντε λεπτά χωρίς σταματημό.

Γιατί έτσι ανοίγουν οι άνθρωποι. Όχι όταν τους εντυπωσιάζεις. Όταν τους ρωτάς με το όνομά τους — και μετά σωπαίνεις.`,
          en: `In the morning, Alexandra found Maria at the school entrance. She took a deep breath.

"I was wrong. Not about the smoke — about the way I said it. You worked all night and all I saw was the mistake. Your drawing had three ideas I would never have thought of. The staircase on the side is excellent."

Maria looked her in the eyes, searching for mockery. She found none. She found something rare: a person who admits her own mistake first.

"Okay," she said quietly. "The smoke really does come out of the wrong spot. Shall we fix it together?"

At break, Eleftheria approached the new kid's bench. She offered no flattery. She did something simpler — she pointed at the book he was holding.

"Volcanoes of the Earth," she read. "I have read it twice. Which chapter are you on?"

The new kid's eyes opened wide. "Chapter six. Active volcanoes." He hesitated for a moment. "My name is Aris. At my old school we built a volcano model. I know how to make smoke without fire."

Eleftheria sat next to him and simply listened. She asked and she listened. Aris, the boy who spoke to no one, spoke for fifteen minutes without stopping.

Because that is how people open up. Not when you impress them. When you ask them by their name — and then go quiet.`
        }
      },
      {
        title: { el: 'Το Ηφαίστειο Των Πέντε', en: 'The Volcano of Five' },
        image: '/images/paidia-wisebot-2.webp',
        imageCaption: { el: 'Μια ομάδα που ακούει, δεν σταματάει πουθενά.', en: 'A team that listens cannot be stopped.' },
        text: {
          el: `Την Εβδομάδα Επιστήμης, στο κέντρο της αίθουσας, στεκόταν ένα ηφαίστειο ψηλό μέχρι τη μέση της Ελευθερίας. Είχε τη σκάλα της Μαρίας στο πλάι. Είχε το μυστικό του Άρη για τον καπνό. Και είχε έναν κανόνα που δεν φαινόταν, αλλά κρατούσε τα πάντα όρθια.

Στην ομάδα των πέντε, όποιος μιλούσε, τελείωνε την πρόταση χωρίς να τον διακόψουν. Και πριν πεις το δικό σου, έπρεπε να πεις τι σου άρεσε στην ιδέα του άλλου. Αληθινά — όχι ψεύτικα.

«Η Μαρία σκέφτηκε τη σκάλα», έλεγε η Αλεξάνδρα σε όποιον ρωτούσε.

«Ο Άρης έλυσε τον καπνό», έλεγε ο Φίλιππος. «Χωρίς αυτόν, θα είχαμε ένα βουνό που απλώς κάθεται.»

Και ο Άρης — το αγόρι του παγκακιού — στεκόταν μπροστά και εξηγούσε στους επισκέπτες πώς δουλεύει το μηχάνημα. Κάθε φορά που άκουγε το όνομά του, ίσιωνε λίγο περισσότερο την πλάτη.

Το βράδυ, η WiseBot κάθισε στην κορυφή του ηφαιστείου.

«Είδατε τι έγινε; Κανείς δεν άλλαξε με τις φωνές και την κριτική. Όλοι άλλαξαν όταν ένιωσαν σημαντικοί. Θυμηθείτε το: ο πιο σίγουρος τρόπος να κερδίσεις έναν φίλο είναι να τον βοηθήσεις να νιώσει αυτό που πραγματικά είναι — κάποιος που αξίζει.»

Η Αλεξάνδρα κοίταξε την ομάδα της. Πέντε παιδιά. Πέντε ονόματα που πλέον ήξεραν όλοι.

«Και το ηφαίστειο;» ρώτησε ο Φίλιππος.

Η WiseBot έκλεισε το μάτι. «Το ηφαίστειο ήταν απλώς η αφορμή. Εσείς ήσασταν η κατασκευή.»`,
          en: `On Science Week, in the center of the hall, stood a volcano as tall as Eleftheria's waist. It had Maria's staircase on the side. It had Aris's secret for the smoke. And it had one rule that could not be seen, yet held everything upright.

In the team of five, whoever spoke got to finish their sentence without interruption. And before adding your own idea, you had to say what you liked about the other person's. Honestly — never falsely.

"Maria thought of the staircase," Alexandra told anyone who asked.

"Aris solved the smoke," said Philippos. "Without him, we would have a mountain that just sits there."

And Aris — the boy from the bench — stood at the front and explained to visitors how the machine worked. Every time he heard his name, his back straightened a little more.

In the evening, WiseBot perched on the volcano's peak.

"Did you see what happened? Nobody changed because of shouting and criticism. Everyone changed when they felt important. Remember this: the surest way to win a friend is to help them feel what they truly are — someone who matters."

Alexandra looked at her team. Five kids. Five names that everyone now knew.

"And the volcano?" asked Philippos.

WiseBot winked. "The volcano was just the excuse. You were the real construction."`
        }
      }
    ]
  }
];
