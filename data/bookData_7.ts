
import { Book } from '../types';

// ============================================================
// BOOK 7: O KOSMOS EINAI MEGALYTEROS / THE WORLD IS BIGGER
// Hero: Sparken (the eagle)
// Theme: PROOPTIKI / PERSPECTIVE
// ============================================================

export const BOOK_7: Book[] = [
  {
    id: 7,
    title: { el: "Ο ΚΟΣΜΟΣ ΕΙΝΑΙ ΜΕΓΑΛΥΤΕΡΟΣ", en: "THE WORLD IS BIGGER" },
    theme: { el: "ΠΡΟΟΠΤΙΚΗ", en: "PERSPECTIVE" },
    stepLabel: { el: "SPARKEN & Η ΠΡΟΟΠΤΙΚΗ", en: "SPARKEN & PERSPECTIVE" },
    author: "Sparken",
    cover: "/images/sparken.jpg",
    videoUrl: "",
    description: {
      el: "Μια ιστορία για τη στιγμή που καταλαβαίνεις ότι η γνώμη γύρω σου δεν είναι ο νόμος του κόσμου. Τα παιδιά φεύγουν ταξίδι και βρίσκουν τη φυλή τους.",
      en: "A story about the moment you realize the opinion around you is not the law of the world. The children go on a trip and find their tribe."
    },
    meaning: {
      el: "Η γνώμη γύρω σου δεν είναι ο κόσμος. Ο κόσμος είναι πολύ πιο μεγάλος απ' ό,τι νομίζεις.",
      en: "The opinion around you is not the world. The world is much bigger than you think."
    },
    xp: 170,
    parentMessage: {
      el: "Μετά την κοροϊδία, πολλά παιδιά πιστεύουν ότι ο κόσμος τους τελειώνει στην αυλή του σχολείου. Νιώθουν ότι η γνώμη των συμμαθητών τους είναι η μοναδική αλήθεια. Η πιο δυνατή κίνηση που μπορείτε να κάνετε ως γονείς είναι να τους δείξετε ότι υπάρχουν άνθρωποι εκεί έξω που σκέφτονται σαν αυτά. Πηγαίνετέ τα σε εργαστήρια, σε ομάδες, σε δραστηριότητες εκτός σχολείου. Αφήστε τα να ανακαλύψουν ότι η γειτονιά τους δεν είναι ο πλανήτης. Η φυλή τους υπάρχει — απλώς δεν την έχουν βρει ακόμα.",
      en: "After being mocked, many children believe their world ends at the schoolyard. They feel that their classmates' opinion is the only truth. The most powerful move you can make as parents is to show them that there are people out there who think like them. Take them to workshops, groups, activities outside school. Let them discover that their neighborhood is not the planet. Their tribe exists — they just haven't found it yet."
    },

    // -- STRUCTURED PAGES (5 pages) --
    pages: [
      {
        title: { el: "Το Βάρος της Σιωπής", en: "The Weight of Silence" },
        image: "/images/ta-3-paidia.webp",
        imageCaption: { el: "Τρία παιδιά που ένιωθαν πολύ μικρά για τον κόσμο.", en: "Three kids who felt too small for the world." },
        text: {
          el: `Πέρασαν τρεις μέρες από τα γέλια στην αυλή. Τρεις μέρες που κανένα από τα τρία παιδιά δεν μίλησε για αυτό που συνέβη. Αλλά η σιωπή δεν σήμαινε ότι ξέχασαν. Σήμαινε ότι πονούσαν ακόμα.

Η Αλεξάνδρα σταμάτησε να ζωγραφίζει. Τα μολύβια της έμεναν ακίνητα μέσα στη θήκη, ακουμπισμένα πάνω στο γραφείο σαν αντικείμενα κάποιου άλλου. Κάθε φορά που τα κοιτούσε, άκουγε εκείνο το γέλιο. Σαν ηχώ που δεν σβήνει.

Ο Φίλιππος αντέδρασε αλλιώς. Δεν σταμάτησε — εξαφανίστηκε. Κλεινόταν στο δωμάτιό του, κοιτούσε βίντεο στο τάμπλετ, δεν μιλούσε σε κανέναν. «Είμαι καλά», έλεγε, με φωνή που ακουγόταν σαν τοίχος.

Η Ελευθερία ήταν αυτή που φαινόταν πιο ήρεμη. Αλλά η ηρεμία της ήταν ψεύτικη. Μέσα της κυλούσε μια σκέψη, ξανά και ξανά, σαν σπασμένο ρολόι: «Κι αν δεν ταιριάζω πουθενά;»

Ο κόσμος τους — το σχολείο, η γειτονιά, η αυλή — ένιωθε ξαφνικά πολύ μικρός. Και πολύ εχθρικός. Σαν δωμάτιο που μικραίνει κάθε μέρα.

Αυτή τη μέρα, η Αλεξάνδρα κάθισε στο παράθυρο και κοίταξε τον ουρανό. Ήταν γεμάτος σύννεφα — βαριά, γκρίζα, αδιάφορα. Ακριβώς σαν τη διάθεσή της.

Κι εκεί, ψηλά, ανάμεσα στα σύννεφα, είδε κάτι. Κάτι που λαμπύριζε χρυσό.`,
          en: `Three days had passed since the laughter in the schoolyard. Three days during which none of the three children spoke about what happened. But silence did not mean they had forgotten. It meant they were still hurting.

Alexandra stopped drawing. Her pencils remained motionless inside their case, resting on the desk like objects belonging to someone else. Every time she looked at them, she heard that laughter. Like an echo that never fades.

Philippos reacted differently. He didn't stop — he disappeared. He shut himself in his room, watched videos on his tablet, spoke to no one. "I'm fine," he said, in a voice that sounded like a wall.

Eleftheria was the one who seemed the calmest. But her calm was false. Inside her, a thought was running, again and again, like a broken clock: "What if I don't belong anywhere?"

Their world — the school, the neighborhood, the yard — suddenly felt very small. And very hostile. Like a room that shrinks a little more each day.

That day, Alexandra sat by the window and looked at the sky. It was full of clouds — heavy, grey, indifferent. Exactly like her mood.

And there, high above, between the clouds, she saw something. Something that shimmered gold.`
        }
      },
      {
        title: { el: "Ο Αετός με τα Χρυσά Μάτια", en: "The Eagle with Golden Eyes" },
        image: "/images/sparken.jpg",
        imageCaption: { el: "Ο Sparken — ο αετός της προοπτικής.", en: "Sparken — the eagle of perspective." },
        text: {
          el: `Δεν κατέβηκε αργά. Δεν χρειάστηκε. Ο Sparken ήρθε σαν αστραπή που δεν κάνει θόρυβο — μια γραμμή χρυσού φωτός που σκίστηκε τον ουρανό και κάθισε στο κάγκελο του μπαλκονιού.

Ήταν ένας αετός. Αλλά όχι σαν τους αετούς στα βιβλία. Τα φτερά του ήταν σχεδόν διάφανα — κατασκευασμένα από φως, σαν ολογράμματα που τρεμόπαιζαν κάτω από τον ήλιο. Τα μάτια του ήταν χρυσά, βαθιά, σαν δύο ήλιοι σε μικρογραφία.

«Μικρά μου», είπε. Η φωνή του ήταν ζεστή, σαν άνεμος που φέρνει θάλασσα.

Η Αλεξάνδρα πετάχτηκε πίσω. «Ποιος... τι...;»

Ο Sparken έγειρε το κεφάλι του. «Ρωτάς ποιος είμαι. Αλλά η πιο σωστή ερώτηση είναι: πού κοιτάς;»

Ο Φίλιππος ήρθε τρέχοντας στο δωμάτιο. Η Ελευθερία τον ακολούθησε. Κοιτούσαν τον αετό με ανοιχτά μάτια και κομμένη ανάσα.

«Εγώ είμαι ο Sparken», είπε, ανοίγοντας τα φτερά του αργά. Φως χύθηκε στο δωμάτιο — χρυσό, απαλό, ζεστό. Σαν ανατολή μέσα σε τέσσερις τοίχους. «Και ήρθα γιατί κοιτάτε πολύ χαμηλά.»

«Πολύ χαμηλά;» ρώτησε η Ελευθερία.

«Ναι», είπε ο Sparken. «Βλέπετε μόνο αυτό που είναι γύρω σας. Την αυλή. Τα γέλια. Τις γνώμες πέντε ανθρώπων. Και νομίζετε ότι αυτός είναι ο κόσμος.» Έκανε παύση. Τα χρυσά μάτια του λάμπρυναν. «Αλλά ο κόσμος είναι πολύ, πολύ μεγαλύτερος.»`,
          en: `He didn't come down slowly. He didn't need to. Sparken arrived like lightning that makes no sound — a line of golden light that split the sky and landed on the balcony railing.

He was an eagle. But not like the eagles in books. His wings were almost transparent — constructed from light, like holograms that flickered under the sun. His eyes were golden, deep, like two miniature suns.

"Little ones," he said. His voice was warm, like a wind that carries the sea.

Alexandra jumped back. "Who... what...?"

Sparken tilted his head. "You ask who I am. But the real question is: where are you looking?"

Philippos came running into the room. Eleftheria followed him. They stared at the eagle with wide eyes and held breath.

"I am Sparken," he said, spreading his wings slowly. Light poured into the room — golden, soft, warm. Like a sunrise inside four walls. "And I came because you are looking too low."

"Too low?" asked Eleftheria.

"Yes," said Sparken. "You only see what is around you. The schoolyard. The laughter. The opinions of five people. And you think that is the world." He paused. His golden eyes brightened. "But the world is much, much bigger."`
        }
      },
      {
        title: { el: "Η Πτήση", en: "The Flight" },
        image: "/images/paidia-kai-sparken.webp",
        imageCaption: { el: "Τα παιδιά πετούν πάνω από τον κόσμο που ήξεραν.", en: "The children fly above the world they knew." },
        text: {
          el: `«Σκαρφαλώστε», είπε ο Sparken, και τα φτερά του άνοιξαν τόσο πλατιά που σκέπασαν ολόκληρο το μπαλκόνι. Φως κυλούσε κατά μήκος τους σαν νερό.

Τα τρία παιδιά κοιτάχτηκαν. Ο Φίλιππος ήταν ο πρώτος. Πάτησε πάνω στο φτερό — ήταν σταθερό σαν βράχος, αλλά ζεστό σαν κουβέρτα. Η Αλεξάνδρα ακολούθησε. Η Ελευθερία δίστασε.

«Κι αν πέσω;» ψιθύρισε.

Ο Sparken γύρισε ένα χρυσό μάτι προς το μέρος της. «Δεν πέφτει κανείς όταν ξέρει γιατί πετά.»

Η Ελευθερία πήρε μια βαθιά ανάσα. Και ανέβηκε.

Ο Sparken απογειώθηκε. Αθόρυβα, σαν σκέψη που ελευθερώνεται. Πρώτα πάνω από τα σπίτια. Μετά πάνω από τη γειτονιά. Μετά πάνω από ολόκληρη την πόλη. Ο αέρας ήταν κρύος αλλά τα φτερά ζέσταιναν — σαν να κρατούσαν τα παιδιά μέσα σε φούσκα από ήλιο.

Τα παιδιά κοίταξαν κάτω. Το σχολείο τους φαινόταν τώρα μικρό. Σαν κουτί παπουτσιών. Η αυλή — ένα τετραγωνάκι. Τα παιδιά που γελούσαν — κουκκίδες. Απλές, μικροσκοπικές κουκκίδες.

«Βλέπετε;» είπε ο Sparken. «Από εδώ ψηλά, οι φωνές τους δεν ακούγονται. Όχι γιατί δεν υπάρχουν. Αλλά γιατί υπάρχουν τόσα πολλά ακόμη πέρα από αυτές.»

Η Αλεξάνδρα ένιωσε τα μάτια της να καίνε. Όχι από λύπη αυτή τη φορά. Από κάτι εντελώς διαφορετικό — σαν να ξεκλειδωνόταν κάτι μέσα στο στήθος της. Ελευθερία.

«Ο κόσμος μας... ήταν τόσο μικρός», ψιθύρισε ο Φίλιππος.

«Όχι», είπε ο Sparken. «Ο κόσμος ήταν πάντα τεράστιος. Εσείς απλώς δεν είχατε σηκώσει ακόμα το κεφάλι.»`,
          en: `"Climb on," said Sparken, and his wings opened so wide they covered the entire balcony. Light ran along them like water.

The three children looked at each other. Philippos was first. He stepped onto the wing — it was steady as a rock, but warm as a blanket. Alexandra followed. Eleftheria hesitated.

"What if I fall?" she whispered.

Sparken turned one golden eye toward her. "No one falls when they know why they fly."

Eleftheria took a deep breath. And climbed on.

Sparken took off. Silently, like a thought being set free. First above the houses. Then above the neighborhood. Then above the entire city. The air was cold but the wings gave warmth — as if holding the children inside a bubble of sunlight.

The children looked down. Their school seemed small now. Like a shoebox. The yard — a tiny square. The kids who had laughed — dots. Simple, microscopic dots.

"Do you see?" said Sparken. "From up here, their voices cannot be heard. Not because they don't exist. But because there is so much more beyond them."

Alexandra felt her eyes burn. Not from sadness this time. From something completely different — as if something was unlocking inside her chest. Freedom.

"Our world... was so small," whispered Philippos.

"No," said Sparken. "The world was always enormous. You simply hadn't raised your heads yet."`
        }
      },
      {
        title: { el: "Η Φυλή", en: "The Tribe" },
        image: "/images/paidia-wisebot-2.webp",
        imageCaption: { el: "Δεν ήταν μόνοι. Δεν ήταν ποτέ μόνοι.", en: "They were not alone. They were never alone." },
        text: {
          el: `Ο Sparken κατέβηκε σε μια πλατεία γεμάτη κόσμο — αλλά όχι τον κόσμο που τα παιδιά ήξεραν.

Ήταν παιδιά. Δεκάδες. Κάποια έφτιαχναν μηχανήματα από ξύλο και σύρματα. Κάποια ζωγράφιζαν τοιχογραφίες σε έναν τεράστιο τοίχο, με χρώματα τόσο δυνατά που φώτιζαν τη γωνία ολόκληρη. Κάποια έγραφαν σε τετράδια, τόσο συγκεντρωμένα που δεν σήκωναν καν το βλέμμα.

«Ποιοι είναι αυτοί;» ψιθύρισε η Αλεξάνδρα, σαν να φοβόταν ότι αν μιλήσει δυνατά θα ξυπνήσει από όνειρο.

«Αυτοί», είπε ο Sparken, «είναι σαν κι εσάς. Παιδιά που κάποτε τα κοροΐδεψαν. Που τους είπαν ότι αυτό που φτιάχνουν δεν αξίζει. Που ένιωσαν μικρά μέσα σε κόσμο που δεν τα καταλάβαινε. Αλλά αντί να μικρύνουν, βρήκαν αυτούς που τους μοιάζουν.»

Ένα κορίτσι με κοντά μαλλιά και χρώμα στα δάχτυλα σήκωσε το κεφάλι. Χαμογέλασε. «Νέοι;» ρώτησε. «Ελάτε να δείτε τι φτιάχνουμε.»

Ο Φίλιππος ένιωσε κάτι που δεν είχε νιώσει εδώ και μέρες — περιέργεια. Καθαρή, αληθινή περιέργεια. Πλησίασε αργά ένα τραπέζι γεμάτο κυκλώματα και μπαταρίες. «Τι φτιάχνετε;» Ένα αγόρι απάντησε χωρίς να σηκώσει κεφάλι: «Μια γέφυρα που κρατάει δέκα κιλά. Από χαρτόνι.» Ο Φίλιππος δεν πίστευε στα αυτιά του.

Η Ελευθερία βρήκε μια ομάδα παιδιών που διάβαζαν δυνατά ιστορίες που είχαν γράψει μόνα τους. Κάθισε δίπλα τους. Κανείς δεν γέλασε. Κανείς δεν ρώτησε «γιατί». Απλώς της έκαναν χώρο. Σαν να την περίμεναν.

Η Αλεξάνδρα στάθηκε μπροστά στον τοίχο με τις τοιχογραφίες. Τα χέρια της έτρεμαν. Ένα αγόρι της έδωσε ένα πινέλο. «Υπάρχει χώρος», είπε απλά.

Και εκείνη τη στιγμή — χωρίς λόγια, χωρίς εξηγήσεις, χωρίς άδεια — τα τρία παιδιά κατάλαβαν κάτι που τους άλλαξε για πάντα. Δεν ήταν λάθος. Δεν ήταν ποτέ λάθος. Απλώς ήταν στο λάθος δωμάτιο.`,
          en: `Sparken descended into a square full of people — but not the people the children knew.

They were children. Dozens of them. Some were building machines from wood and wire. Some were painting murals on a massive wall, with colors so vivid they lit up the whole corner. Some were writing in notebooks, so focused they didn't even look up.

"Who are they?" whispered Alexandra, as if afraid that speaking loudly would wake her from a dream.

"They," said Sparken, "are like you. Children who were once mocked. Who were told that what they make is worthless. Who felt small inside a world that didn't understand them. But instead of shrinking, they found those who are like them."

A girl with short hair and paint on her fingers raised her head. She smiled. "New here?" she asked. "Come see what we're making."

Philippos felt something he hadn't felt in days — curiosity. Pure, real curiosity. He slowly approached a table covered in circuits and batteries. "What are you making?" A boy answered without looking up: "A bridge that holds ten kilos. Made from cardboard." Philippos couldn't believe his ears.

Eleftheria found a group of children reading aloud stories they had written themselves. She sat down beside them. No one laughed. No one asked "why." They simply made room for her. As if they had been waiting.

Alexandra stood before the wall of murals. Her hands were trembling. A boy handed her a brush. "There's room," he said simply.

And in that moment — without words, without explanations, without permission — the three children understood something that changed them forever. They were not wrong. They were never wrong. They had simply been in the wrong room.`
        }
      },
      {
        title: { el: "Πίσω με Νέα Μάτια", en: "Back with New Eyes" },
        image: "/images/eleftheria.webp",
        imageCaption: { el: "Ο κόσμος δεν άλλαξε. Τα μάτια τους άλλαξαν.", en: "The world didn't change. Their eyes did." },
        text: {
          el: `Ο Sparken τα έφερε πίσω πριν νυχτώσει. Τα φτερά του ολογράμματος σιγόσβηναν στο δειλινό, αλλά τα χρυσά μάτια του ήταν ακόμα φωτεινά — πιο φωτεινά, ίσως, από πριν.

«Πρέπει να φύγεις;» ρώτησε η Αλεξάνδρα, και η φωνή της είχε κάτι που δεν υπήρχε πριν — σταθερότητα.

«Δεν φεύγω ποτέ», είπε ο Sparken. «Είμαι εδώ κάθε φορά που σηκώνετε το κεφάλι αρκετά ψηλά. Κάθε φορά που θυμάστε ότι η αυλή σας δεν είναι ο πλανήτης σας.»

Ο Φίλιππος στάθηκε στο μπαλκόνι και κοίταξε τη γειτονιά. Τα ίδια σπίτια. Οι ίδιοι δρόμοι. Η ίδια αυλή. Αλλά κάτι ήταν διαφορετικό. Δεν ήταν ο κόσμος που άλλαξε — ήταν τα μάτια του.

«Αύριο στο σχολείο», είπε αργά, «μπορεί να ξαναγελάσουν.»

«Σίγουρα θα γελάσουν», είπε ο Sparken, χωρίς να κρύψει την αλήθεια.

«Δεν πειράζει», είπε η Ελευθερία. Και η φωνή της ακούστηκε σαν κάποια που μόλις ανακάλυψε μυστικό πολύ μεγάλο για λέξεις. «Γιατί τώρα ξέρω. Εκεί έξω υπάρχουν άνθρωποι σαν εμάς. Η γνώμη πέντε ανθρώπων δεν είναι ο κόσμος.»

Η Αλεξάνδρα άνοιξε τη θήκη με τα μολύβια. Για πρώτη φορά εδώ και μέρες, τα δάχτυλά της ήθελαν να ζωγραφίσουν. Σχεδίασε έναν αετό με φτερά από φως πάνω σε λευκό χαρτί. Και από κάτω, με γράμματα μικρά αλλά σταθερά, έγραψε: «Ο κόσμος είναι μεγαλύτερος.»

Ο Sparken ανέμισε τα φτερά του μια τελευταία φορά. Χρυσό φως γέμισε το δωμάτιο — ζεστό σαν αγκαλιά, βαθύ σαν υπόσχεση.

«Θυμηθείτε αυτό», είπε σιγανά. «Η γνώμη γύρω σας δεν είναι η αλήθεια. Η αλήθεια είναι εκεί έξω — τεράστια, γεμάτη, και σας περιμένει. Απλώς πρέπει να πετάξετε αρκετά ψηλά για να τη δείτε.»

Τρία παιδιά. Ένας αετός. Μια πτήση. Αυτό ήταν αρκετό. Γιατί η αληθινή ελευθερία δεν είναι να φύγεις από τον κόσμο σου. Είναι να καταλάβεις ότι ο κόσμος σου δεν είναι ένα δωμάτιο — είναι ένας ουρανός.`,
          en: `Sparken brought them back before nightfall. His hologram wings were dimming in the twilight, but his golden eyes were still bright — brighter, perhaps, than before.

"Do you have to leave?" asked Alexandra, and her voice held something that wasn't there before — steadiness.

"I never leave," said Sparken. "I am here every time you raise your heads high enough. Every time you remember that your schoolyard is not your planet."

Philippos stood on the balcony and looked at the neighborhood. The same houses. The same streets. The same yard. But something was different. It wasn't the world that had changed — it was his eyes.

"Tomorrow at school," he said slowly, "they might laugh again."

"They will certainly laugh," said Sparken, without hiding the truth.

"That's okay," said Eleftheria. And her voice sounded like someone who had just discovered a secret too big for words. "Because now I know. Out there, there are people like us. The opinion of five people is not the world."

Alexandra opened her pencil case. For the first time in days, her fingers wanted to draw. She sketched an eagle with wings of light on white paper. And underneath, in letters small but steady, she wrote: "The world is bigger."

Sparken beat his wings one last time. Golden light filled the room — warm as an embrace, deep as a promise.

"Remember this," he said softly. "The opinion around you is not the truth. The truth is out there — enormous, full, and waiting for you. You just need to fly high enough to see it."

Three children. One eagle. One flight. That was enough. Because true freedom is not escaping your world. It is understanding that your world is not a room — it is a sky.`
        }
      }
    ]
  }
];
