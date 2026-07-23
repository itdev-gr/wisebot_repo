// Book 34 — «ΤΟ ΜΥΑΛΟ ΠΟΥ ΜΕΓΑΛΩΝΕΙ» / "THE GROWING MIND"
// Kids adaptation inspired by "Mindset" by Carol Dweck.
// Original story in the WiseBot universe — teaches: growth vs fixed mindset
// (the brain is a muscle), the power of "yet", mistakes are information,
// praise effort not talent, challenges grow the brain, neurons that connect.

import { Book } from '../types';

export const BOOK_34: Book[] = [
  {
    id: 34,
    title: { el: 'ΤΟ ΜΥΑΛΟ ΠΟΥ ΜΕΓΑΛΩΝΕΙ', en: 'THE GROWING MIND' },
    theme: { el: 'ΝΟΟΤΡΟΠΙΑ ΑΝΑΠΤΥΞΗΣ', en: 'GROWTH MINDSET' },
    stepLabel: { el: 'WISEBOT & ΜΑΘΗΣΗ', en: 'WISEBOT & LEARNING' },
    author: 'Carol Dweck · Kids Edition',
    cover: '/images/paidia-kai-wisebot.webp',
    videoUrl: '',
    description: {
      el: 'Βασισμένο στις ιδέες του βιβλίου «Mindset» της Carol Dweck. Η Αλεξάνδρα πιστεύει ότι δεν είναι καλή στα μαθηματικά — μέχρι που η WiseBot της δείχνει ότι το μυαλό είναι μυς που δυναμώνει, και της μαθαίνει τη μαγική λέξη: ΑΚΟΜΑ.',
      en: 'Based on the ideas of «Mindset» by Carol Dweck. Alexandra believes she is not good at math — until WiseBot shows her that the brain is a muscle that grows stronger, and teaches her the magic word: YET.'
    },
    meaning: {
      el: 'Το μυαλό δεν είναι δώρο έτοιμο και τελειωμένο — είναι μυς που μεγαλώνει με κάθε δύσκολη προσπάθεια. Τα λάθη δεν είναι ντροπή, είναι πληροφορίες. Και το «δεν μπορώ» γίνεται δρόμος ανοιχτός όταν προσθέσεις τη λέξη «ακόμα».',
      en: 'The brain is not a finished gift — it is a muscle that grows with every hard try. Mistakes are not shame, they are information. And «I cannot» becomes an open road when you add the word «yet».'
    },
    xp: 100,
    parentMessage: {
      el: 'Η Carol Dweck ανακάλυψε κάτι απλό και τεράστιο: τα παιδιά που επαινούνται για το ταλέντο τους αρχίζουν να φοβούνται τις δυσκολίες, ενώ τα παιδιά που επαινούνται για την προσπάθειά τους τις αναζητούν. Δοκιμάστε σήμερα: αντί για «είσαι πανέξυπνος», πείτε «είδα πόσο πάλεψες με αυτό». Και όταν το παιδί πει «δεν μπορώ», προσθέστε ήρεμα μία μόνο λέξη: «...ακόμα».',
      en: 'Carol Dweck discovered something simple and huge: children praised for talent start fearing challenges, while children praised for effort seek them out. Try it today: instead of «you are so smart», say «I saw how hard you worked on that». And when your child says «I cannot do it», calmly add one single word: «...yet».'
    },
    pages: [
      {
        title: { el: 'Η Ετικέτα', en: 'The Label' },
        image: '/images/alexandra.webp',
        imageCaption: { el: 'Μια κόκκινη λέξη μπορεί να γίνει βουνό.', en: 'One red mark can feel like a mountain.' },
        text: {
          el: `Η Αλεξάνδρα κοιτούσε το διαγώνισμα των μαθηματικών. Κόκκινα σημάδια παντού.

«Δεν πειράζει» είπε η δασκάλα ευγενικά. «Θα τα ξαναδούμε μαζί.»

Αλλά μέσα στο κεφάλι της Αλεξάνδρας μια φωνή έλεγε κάτι άλλο: Δεν είσαι καλή στα μαθηματικά. Δεν ήσουν ποτέ. Δεν θα γίνεις ποτέ.

Στο σπίτι, ο Φίλιππος έλυνε σπαζοκεφαλιές δίπλα στο παράθυρο. «Εύκολο» είπε ανασηκώνοντας τους ώμους. «Είναι ταλέντο. Ή το έχεις ή δεν το έχεις.»

Η Αλεξάνδρα έκρυψε το διαγώνισμα κάτω από το στρώμα. Εκεί κρύβουμε ό,τι μας ντροπιάζει.

Το βράδυ δεν μπορούσε να κοιμηθεί. Σκεφτόταν την επόμενη εβδομάδα. Νέο διαγώνισμα. Ίδια αποτυχία. Αφού έτσι γεννήθηκε, έτσι θα έμενε. Σωστά;

Ένα απαλό φτερούγισμα ακούστηκε μέσα στο σκοτάδι. Δύο μεγάλα, χρυσά μάτια άνοιξαν πάνω στη βιβλιοθήκη της.

«Λάθος» είπε η WiseBot ήρεμα, λες και είχε ακούσει τις σκέψεις της.

«Ποιο λάθος;» ρώτησε η Αλεξάνδρα και ανακάθισε στο κρεβάτι.

«Αυτή η ιστορία που λες στον εαυτό σου. Ότι το μυαλό είναι κάτι που σου δόθηκε έτοιμο και τελειωμένο. Έχω να σου δείξω κάτι που θα σε εκπλήξει. Θέλεις να δεις πώς μοιάζει το μυαλό σου από μέσα;»

Η Αλεξάνδρα δίστασε. Μα παρά τη στενοχώρια της, η περιέργεια νίκησε.

«Δείξε μου» είπε.`,
          en: `Alexandra stared at her math test. Red marks everywhere.

«It is alright» the teacher said kindly. «We will go over it together.»

But inside the head of Alexandra a voice was saying something else: You are not good at math. You never were. You never will be.

At home, Filippos was solving brain teasers by the window. «Easy» he said with a shrug. «It is talent. Either you have it or you do not.»

Alexandra hid the test under her mattress. That is where we hide the things that make us feel ashamed.

At night she could not sleep. She kept thinking about next week. A new test. The same failure. If she was born this way, this is how she would stay. Right?

A soft flutter of wings sounded in the dark. Two big golden eyes opened on top of her bookcase.

«Wrong» said WiseBot calmly, as if she had heard her thoughts.

«What is wrong?» asked Alexandra, sitting up in bed.

«That story you keep telling yourself. That your mind is something handed to you finished and final. I have something to show you that will surprise you. Would you like to see what your brain looks like from the inside?»

Alexandra hesitated. But despite her sadness, curiosity won.

«Show me» she said.`
        }
      },
      {
        title: { el: 'Ο Μυς μέσα στο Κεφάλι', en: 'The Muscle in Your Head' },
        image: '/images/wisebot.jpg',
        imageCaption: { el: 'Νευρώνες που ενώνονται σαν αστέρια.', en: 'Neurons connecting like stars.' },
        text: {
          el: `Η WiseBot άγγιξε με το φτερό της το μέτωπο της Αλεξάνδρας. Ξαφνικά, το ταβάνι γέμισε φώτα — ένας ολόκληρος ουρανός από μικροσκοπικά αστέρια που άναβαν και έσβηναν.

«Αυτό είναι το μυαλό σου» είπε. «Δισεκατομμύρια μικρά κύτταρα, οι νευρώνες. Κοίτα τι γίνεται όταν μαθαίνεις κάτι καινούργιο.»

Δύο αστεράκια άπλωσαν φωτεινές κλωστές και ενώθηκαν. Μετά άλλα δύο. Και άλλα.

«Κάθε φορά που προσπαθείς κάτι δύσκολο, οι νευρώνες σου ενώνονται. Το μονοπάτι γίνεται δρόμος. Ο δρόμος γίνεται λεωφόρος. Όσο πιο πολύ εξασκείσαι, τόσο πιο δυνατή γίνεται η σύνδεση.»

«Δηλαδή το μυαλό... δυναμώνει;» ρώτησε η Αλεξάνδρα.

«Σαν μυς. Όταν λύνεις προβλήματα μαθηματικών, δεν κάνεις απλώς ασκήσεις. Χτίζεις εγκέφαλο. Και ξέρεις πότε δυναμώνει περισσότερο; Όχι όταν κάνεις τα εύκολα. Όταν παλεύεις με τα δύσκολα.»

Η Αλεξάνδρα κοίταξε τα αστεράκια σκεφτική. «Ο Φίλιππος όμως έχει ταλέντο. Εγώ όχι.»

«Ο Φίλιππος έχει λύσει χιλιάδες σπαζοκεφαλιές. Οι δρόμοι του στρώθηκαν από την εξάσκηση. Κανείς δεν γεννιέται με λεωφόρους, μικρή μου. Όλοι ξεκινάμε με μονοπάτια.»

Η φωνή μέσα στο κεφάλι της Αλεξάνδρας πήγε να πει: μα εσύ δεν είσαι καλή. Και για πρώτη φορά, η Αλεξάνδρα τής απάντησε: ίσως όχι σήμερα. Αλλά το μυαλό μου μπορεί να μεγαλώσει.

Από αύριο, θα άρχιζε την προπόνηση.`,
          en: `WiseBot touched the forehead of Alexandra with her wing. Suddenly the ceiling filled with lights — a whole sky of tiny stars flickering on and off.

«This is your brain» she said. «Billions of tiny cells, called neurons. Watch what happens when you learn something new.»

Two little stars stretched out glowing threads and connected. Then two more. And more.

«Every time you try something hard, your neurons connect. The trail becomes a road. The road becomes a highway. The more you practice, the stronger the connection grows.»

«So the brain... gets stronger?» asked Alexandra.

«Like a muscle. When you solve math problems, you are not just doing exercises. You are building brain. And do you know when it grows the most? Not when you do the easy things. When you wrestle with the hard ones.»

Alexandra looked at the little stars, thinking. «But Filippos has talent. I do not.»

«Filippos has solved thousands of brain teasers. His roads were paved by practice. Nobody is born with highways, little one. We all start with trails.»

The voice inside the head of Alexandra tried to say: but you are not good. And for the first time, Alexandra answered back: maybe not today. But my brain can grow.

Starting tomorrow, the training would begin.`
        }
      },
      {
        title: { el: 'Η Κρυφή Προπόνηση', en: 'The Secret Training' },
        image: '/images/paidia-kai-wisebot.webp',
        imageCaption: { el: 'Σαράντα εύκολες ασκήσεις είναι σαράντα φτερά.', en: 'Forty easy exercises are forty feathers.' },
        text: {
          el: `Η Αλεξάνδρα άρχισε να εξασκείται κάθε απόγευμα. Αλλά είχε έναν κρυφό κανόνα: έλυνε μόνο τις εύκολες ασκήσεις.

Στις εύκολες δεν έκανε λάθη. Και τα λάθη την έκαιγαν σαν τσουκνίδες. Όταν έκανε λάθος, έσβηνε τη σελίδα με μανία. Μια φορά έσκισε ολόκληρο το φύλλο, να μην το δει κανείς.

«Πώς πάει η προπόνηση;» ρώτησε η WiseBot μια μέρα.

«Τέλεια!» είπε η Αλεξάνδρα καμαρωτά. «Έλυσα σαράντα ασκήσεις και δεν έκανα ούτε ένα λάθος!»

Η WiseBot δεν χάρηκε καθόλου. Παράξενο.

Την Παρασκευή ήρθε το νέο διαγώνισμα. Οι εύκολες ασκήσεις πήγαν καλά. Αλλά στα δύσκολα προβλήματα, η Αλεξάνδρα πάγωσε ξανά. Το ίδιο μουδιασμένο χέρι. Η ίδια κόκκινη μελάνη.

Στο σπίτι πέταξε την τσάντα στον καναπέ. «Προσπάθησα!» φώναξε. «Εξασκήθηκα κάθε μέρα! Ο μυς σου δεν δουλεύει, WiseBot!»

Η κουκουβάγια την κοίταξε ήρεμα. «Πες μου κάτι. Αν σήκωνες κάθε μέρα ένα φτερό, θα δυνάμωναν τα χέρια σου;»

«Ένα φτερό; Μα αυτό δεν ζυγίζει τίποτα...»

«Ακριβώς. Σαράντα εύκολες ασκήσεις είναι σαράντα φτερά. Ο μυς δυναμώνει μόνο όταν σηκώνει κάτι βαρύ. Και το μυαλό μεγαλώνει μόνο εκεί που δυσκολεύεσαι. Εκεί που κάνεις λάθη.»

«Μα τα λάθη σημαίνουν ότι είμαι χάλια!»

«Όχι» είπε η WiseBot. «Τα λάθη σημαίνουν κάτι εντελώς διαφορετικό. Και αύριο το πρωί θα σου δείξω τι.»`,
          en: `Alexandra started practicing every afternoon. But she had a secret rule: she only solved the easy exercises.

On the easy ones she made no mistakes. And mistakes stung her like nettles. Whenever she made one, she erased the page furiously. Once she tore out a whole sheet, so nobody would ever see it.

«How is the training going?» WiseBot asked one day.

«Perfectly!» said Alexandra proudly. «I solved forty exercises and did not make a single mistake!»

WiseBot did not look happy at all. Strange.

On Friday the new test came. The easy exercises went well. But on the hard problems, Alexandra froze again. The same numb hand. The same red ink.

At home she threw her bag on the couch. «I tried!» she shouted. «I practiced every single day! Your muscle does not work, WiseBot!»

The owl looked at her calmly. «Tell me something. If you lifted one feather every day, would your arms grow stronger?»

«A feather? But a feather weighs nothing...»

«Exactly. Forty easy exercises are forty feathers. A muscle only grows when it lifts something heavy. And the brain only grows where you struggle. Right where you make mistakes.»

«But mistakes mean I am terrible!»

«No» said WiseBot. «Mistakes mean something completely different. And tomorrow morning I will show you what.»`
        }
      },
      {
        title: { el: 'Η Μαγική Λέξη', en: 'The Magic Word' },
        image: '/images/filippos.webp',
        imageCaption: { el: 'Και οι «ταλαντούχοι» φοβούνται τα δύσκολα.', en: 'Even the «talented» fear hard things.' },
        text: {
          el: `Το επόμενο πρωί, η WiseBot έβαλε μπροστά στην Αλεξάνδρα το πιο δύσκολο πρόβλημα του βιβλίου.

«Δεν μπορώ να το λύσω» είπε αμέσως η Αλεξάνδρα.

«Ξαναπές το» είπε η WiseBot. «Αλλά βάλε στο τέλος μία λέξη. Τη λέξη ΑΚΟΜΑ.»

«Δεν μπορώ να το λύσω... ακόμα;»

«Άκου τη διαφορά. Το σκέτο δεν μπορώ είναι πόρτα κλειστή. Το δεν μπορώ ακόμα είναι δρόμος που συνεχίζεται. Η ίδια δυσκολία — αλλά ο δρόμος ανοιχτός.»

Η Αλεξάνδρα δοκίμασε το πρόβλημα. Έκανε λάθος. Πήρε ανάσα να σκίσει τη σελίδα...

«Στάσου!» είπε η WiseBot. «Κοίτα το λάθος σου. Τι σου λέει;»

Η Αλεξάνδρα το κοίταξε προσεκτικά. «Ότι... πρόσθεσα εκεί που έπρεπε να αφαιρέσω;»

«Αυτό είναι πληροφορία! Το λάθος σού έδειξε ακριβώς πού να προσέξεις. Τα λάθη δεν είναι ντροπή. Είναι ο χάρτης που δείχνει τον δρόμο.»

Εκείνη τη στιγμή ακούστηκε ένας θόρυβος από το σαλόνι. Ο Φίλιππος είχε πετάξει μια σπαζοκεφαλιά στο πάτωμα. «Χαζό παιχνίδι!» φώναξε. «Αυτό είναι πολύ δύσκολο!»

Η Αλεξάνδρα κατάλαβε ξαφνικά κάτι σημαντικό. Ο Φίλιππος μια ζωή άκουγε «είσαι ταλέντο». Και τώρα, μπροστά στο δύσκολο, φοβόταν. Γιατί αν δυσκολευόταν, μήπως δεν ήταν πια ταλέντο;

Η ετικέτα «έξυπνος» ήταν κι αυτή μια παγίδα.

«Φίλιππε» είπε απαλά η Αλεξάνδρα. «Θέλεις να σου μάθω μια μαγική λέξη;»`,
          en: `The next morning, WiseBot placed the hardest problem in the whole book in front of Alexandra.

«I cannot solve it» said Alexandra immediately.

«Say it again» said WiseBot. «But add one word at the end. The word YET.»

«I cannot solve it... yet?»

«Hear the difference. Plain I cannot is a closed door. I cannot YET is a road that keeps going. The same difficulty — but the road stays open.»

Alexandra tried the problem. She made a mistake. She took a breath, ready to tear out the page...

«Wait!» said WiseBot. «Look at your mistake. What is it telling you?»

Alexandra looked at it carefully. «That... I added where I should have subtracted?»

«That is information! The mistake showed you exactly where to be careful. Mistakes are not shame. They are the map that shows the way.»

At that moment a noise came from the living room. Filippos had thrown a brain teaser on the floor. «Stupid game!» he shouted. «This one is way too hard!»

Alexandra suddenly understood something important. All his life, Filippos had heard «you are so talented». And now, facing something hard, he was afraid. Because if he struggled, maybe he was not talented anymore?

The label «smart» was a trap too.

«Filippos» said Alexandra softly. «Would you like me to teach you a magic word?»`
        }
      },
      {
        title: { el: 'Το Μυαλό που Μεγαλώνει', en: 'The Growing Mind' },
        image: '/images/ta-3-paidia.webp',
        imageCaption: { el: 'Από μονοπάτια, λεωφόροι.', en: 'From trails to highways.' },
        text: {
          el: `Οι εβδομάδες πέρασαν. Στον τοίχο του δωματίου κρεμόταν τώρα μια λίστα με τίτλο: Πράγματα που δεν μπορώ ΑΚΟΜΑ.

Κάθε απόγευμα, τα δύο αδέρφια προπονούνταν μαζί. Η Αλεξάνδρα διάλεγε πια επίτηδες τα δύσκολα προβλήματα. Τα λάθη της τα κατέγραφε σε ένα τετράδιο που το ονόμασε «Οι Χάρτες μου». Ο Φίλιππος ξαναδοκίμασε τη σπαζοκεφαλιά που είχε πετάξει — δεκαεφτά προσπάθειες, δεκαεφτά μαθήματα, μία νίκη.

Ήρθε το μεγάλο διαγώνισμα. Η Αλεξάνδρα συνάντησε ένα πρόβλημα που δεν είχε ξαναδεί ποτέ. Η παλιά φωνή ψιθύρισε: δεν μπορείς. «Ακόμα» απάντησε εκείνη μέσα της, και άρχισε να δοκιμάζει δρόμους.

Όταν η δασκάλα επέστρεψε τα γραπτά, χαμογελούσε. «Αλεξάνδρα, το γραπτό σου έχει τεράστια πρόοδο. Αλλά ξέρεις τι με εντυπωσίασε πιο πολύ; Στο δύσκολο πρόβλημα δοκίμασες τρεις διαφορετικούς τρόπους. Δεν τα παράτησες.»

Εκείνο το βράδυ, η WiseBot άνοιξε ξανά τον ουρανό με τους νευρώνες. Εκεί που κάποτε υπήρχαν αχνά μονοπάτια, έλαμπαν τώρα φαρδιοί, φωτεινοί δρόμοι.

«Το βλέπεις;» είπε. «Δεν έγινες ξαφνικά ταλέντο. Έχτισες. Λάθος το λάθος, προσπάθεια την προσπάθεια.»

«WiseBot» ρώτησε ο Φίλιππος, «μέχρι πού μπορεί να μεγαλώσει ένα μυαλό;»

Η κουκουβάγια χαμογέλασε με τα χρυσά της μάτια.

«Κανείς δεν το ξέρει. Και αυτό είναι το πιο όμορφο απ όλα. Δεν το έχει ανακαλύψει κανείς... ακόμα.»`,
          en: `The weeks went by. On the bedroom wall now hung a list with the title: Things I cannot do YET.

Every afternoon, the two siblings trained together. Alexandra now picked the hard problems on purpose. She wrote her mistakes down in a notebook she named «My Maps». Filippos tried again the brain teaser he had once thrown away — seventeen attempts, seventeen lessons, one victory.

The big test arrived. Alexandra met a problem she had never seen before. The old voice whispered: you cannot. «Yet» she answered inside, and began trying different roads.

When the teacher handed back the papers, she was smiling. «Alexandra, your paper shows huge progress. But do you know what impressed me the most? On the hard problem you tried three different ways. You did not give up.»

That night, WiseBot opened the sky of neurons once again. Where there had once been faint trails, wide glowing roads were now shining.

«Do you see it?» she said. «You did not suddenly become talented. You built it. Mistake by mistake, effort by effort.»

«WiseBot» asked Filippos, «how big can a mind grow?»

The owl smiled with her golden eyes.

«Nobody knows. And that is the most beautiful part of all. Nobody has discovered it... yet.»`
        }
      }
    ]
  }
];
