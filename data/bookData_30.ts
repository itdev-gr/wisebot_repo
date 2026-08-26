
import { Book } from '../types';

// ============================================================
// BOOK 30: Ο ΚΑΝΟΝΑΣ ΤΟΥ 10X / THE 10X RULE
// Heroes: Crocus (δράση) & Sparken (όραμα), with WiseBot & Link
// Inspired by the ideas of «The 10X Rule» by Grant Cardone
// Original children's story set in the WiseBot universe — ideas only, retold
// ============================================================

export const BOOK_30: Book[] = [
  {
    id: 30,
    title: { el: "Ο ΚΑΝΟΝΑΣ ΤΟΥ 10X", en: "THE 10X RULE" },
    theme: { el: "ΜΕΓΑΛΟΙ ΣΤΟΧΟΙ", en: "BIG GOALS" },
    stepLabel: { el: "CROCUS & ΤΟ 10X", en: "CROCUS & THE 10X" },
    author: "Grant Cardone · Kids Edition",
    cover: "/images/paidia-kai-crocus.webp",
    videoUrl: "",
    description: {
      el: "Είκοσι βιβλία για το άδειο ραφάκι της πλατείας. Μικρός στόχος, μικρή προσπάθεια, μεγάλη αποτυχία. Μέχρι που ο Crocus φώναξε: επί δέκα! Βασισμένο στις ιδέες του βιβλίου «The 10X Rule» του Grant Cardone.",
      en: "Twenty books for the empty little shelf in the square. Small goal, small effort, big failure. Until Crocus shouted: times ten! Based on the ideas of the book 'The 10X Rule' by Grant Cardone."
    },
    meaning: {
      el: "Βάλε στόχο δέκα φορές πιο μεγάλο και ετοιμάσου για δέκα φορές πιο πολλή προσπάθεια. Η μέτρια προσπάθεια είναι ο πιο σίγουρος τρόπος να αποτύχεις.",
      en: "Set a goal ten times bigger and prepare for ten times more effort. Average effort is the surest way to fail."
    },
    xp: 100,
    parentMessage: {
      el: "Τα παιδιά συχνά βάζουν μικρούς στόχους για να μην απογοητευτούν. Όμως οι μικροί στόχοι φέρνουν μικρή ενέργεια. Δοκιμάστε σήμερα: όταν το παιδί σας πει έναν στόχο, ρωτήστε παιχνιδιάρικα «και αν τον κάναμε δέκα φορές πιο μεγάλο, τι θα χρειαζόταν;» Και θυμίστε του το άλλο μισό του κανόνα: η μεγάλη προσπάθεια θέλει και μεγάλη ξεκούραση — ο ύπνος, το παιχνίδι και η οικογένεια δεν είναι χάσιμο χρόνου.",
      en: "Children often set small goals so they will not be disappointed. But small goals bring small energy. Try today: when your child states a goal, ask playfully 'and if we made it ten times bigger, what would it take?' And remind them of the other half of the rule: big effort needs big rest — sleep, play and family are not a waste of time."
    },

    pages: [
      {
        title: { el: "Ο Μικρός Στόχος", en: "The Small Goal" },
        image: "/images/ta-3-paidia.webp",
        imageCaption: { el: "Μία αφίσα. Μία εβδομάδα. Τρία βιβλία.", en: "One poster. One week. Three books." },
        text: {
          el: `Στη γωνία της πλατείας υπήρχε ένα ξύλινο ραφάκι με μια ταμπέλα: «Πάρε ένα βιβλίο, άφησε ένα βιβλίο.» Κάποτε ήταν γεμάτο. Τώρα είχε μόνο σκόνη και έναν παλιό τηλεφωνικό κατάλογο.

«Ας το γεμίσουμε!» είπε η Αλεξάνδρα μια Τετάρτη το απόγευμα. «Στόχος: είκοσι βιβλία!»

«Είκοσι;» ρώτησε ο Φίλιππος. «Πολλά δεν είναι;»

«Καλύτερα λίγα και σίγουρα», απάντησε εκείνη. «Για να μην απογοητευτούμε.»

Το σχέδιό τους ήταν απλό. Πολύ απλό. Έφτιαξαν μία αφίσα — μία — και την κόλλησαν στον φούρνο της γειτονιάς. Μετά κάθισαν να περιμένουν. Την Πέμπτη κοίταξαν το ράφι. Τίποτα. Την Παρασκευή, τίποτα. Το Σάββατο, ένα βιβλίο μαγειρικής χωρίς εξώφυλλο.

Μέχρι την άλλη Τετάρτη είχαν μαζέψει τρία βιβλία. Και τα δύο ήταν δικά τους.

«Δεν καταλαβαίνω», είπε η Αλεξάνδρα. «Ο στόχος ήταν μικρός. Λογικός. Εύκολος. Γιατί δεν τα καταφέραμε ούτε αυτόν;»

Ο Φίλιππος ξάπλωσε στο παγκάκι και αναστέναξε. «Ίσως ο κόσμος δεν νοιάζεται για βιβλία.»

Από ψηλά, δύο μάτια πράσινα σαν ζούγκλα τους παρακολουθούσαν. Και δίπλα τους, δύο μάτια που πετούσαν σπίθες.

«Το βλέπεις αυτό που βλέπω;» ψιθύρισε ο Sparken.

«Το βλέπω», είπε ο Crocus και έτριξε τα δόντια του χαμογελώντας. «Μικρός στόχος. Μικρή προσπάθεια. Ώρα για το μάθημα.»`,
          en: `In the corner of the square stood a little wooden shelf with a sign: "Take a book, leave a book." Once it was full. Now it held only dust and an old phone directory.

"Let's fill it up!" said Alexandra one Wednesday afternoon. "Goal: twenty books!"

"Twenty?" asked Philippos. "Is that not a lot?"

"Better few and certain", she answered. "So we do not get disappointed."

Their plan was simple. Too simple. They made one poster — just one — and stuck it on the neighbourhood bakery window. Then they sat and waited. On Thursday they checked the shelf. Nothing. On Friday, nothing. On Saturday, one cookbook with no cover.

By the next Wednesday they had gathered three books. Two of them were their own.

"I do not understand", said Alexandra. "The goal was small. Reasonable. Easy. Why did we fail even at that?"

Philippos lay back on the bench and sighed. "Maybe people just do not care about books."

From above, two eyes green as a jungle were watching them. And next to them, two eyes throwing sparks.

"Do you see what I see?" whispered Sparken.

"I see it", said Crocus, grinning with all his teeth. "Small goal. Small effort. Time for the lesson."`
        }
      },
      {
        title: { el: "Επί Δέκα!", en: "Times Ten!" },
        image: "/images/crocus.jpg",
        imageCaption: { el: "«Όχι είκοσι. ΔΙΑΚΟΣΙΑ!»", en: "'Not twenty. TWO HUNDRED!'" },
        text: {
          el: `Ο Crocus προσγειώθηκε μπροστά τους με έναν πήδο που σήκωσε σκόνη.

«Άκουσα ότι ψάχνετε είκοσι βιβλία», είπε. «Λάθος στόχος.»

«Το ξέρουμε», μουρμούρισε ο Φίλιππος. «Ήταν πολύ μεγάλος.»

«ΠΟΛΥ ΜΙΚΡΟΣ!» βρυχήθηκε ο Crocus, και τα περιστέρια της πλατείας πέταξαν τρομαγμένα. «Ο στόχος σας ήταν τόσο μικρός, που δεν ξύπνησε κανέναν. Ούτε καν εσάς! Μία αφίσα; Αυτή δεν είναι προσπάθεια. Αυτό είναι χασμουρητό.»

Ο Sparken κατέβηκε δίπλα του, πιο ήρεμος, με τα μάτια του να λάμπουν. «Κλείστε τα μάτια», είπε. «Φανταστείτε το ραφάκι να μη χωράει άλλα βιβλία. Φανταστείτε δεύτερο ράφι. Τρίτο. Παιδιά να διαβάζουν στα παγκάκια. Παππούδες να διηγούνται ιστορίες. Ολόκληρη η πλατεία μια βιβλιοθήκη χωρίς τοίχους.»

Η Αλεξάνδρα άνοιξε τα μάτια της. Κάτι είχε ανάψει μέσα τους.

«Νέος στόχος», είπε ο Crocus. «Πάρτε το είκοσι και βάλτε το επί δέκα. Διακόσια βιβλία.»

«ΔΙΑΚΟΣΙΑ;» φώναξαν τα παιδιά μαζί. «Αυτό είναι τρελό!»

«Ναι!» γέλασε ο Crocus. «Και τώρα το δεύτερο μισό του κανόνα, το πιο σημαντικό: θα χρειαστεί δέκα φορές πιο πολλή προσπάθεια από όση φαντάζεστε. Δεν σας το λέω για να φοβηθείτε. Σας το λέω για να μην εκπλαγείτε. Όταν δυσκολέψει, δεν θα σημαίνει ότι κάτι πάει στραβά. Θα σημαίνει ότι το σχέδιο δουλεύει.»

Ο Φίλιππος ένιωσε την καρδιά του να χτυπάει αλλιώς. Πιο δυνατά. Πιο ζωντανά.

«Και από πού ξεκινάμε;» ρώτησε.

«Από παντού!» είπε ο Crocus. «ΠΑΜΕ!»`,
          en: `Crocus landed in front of them with a jump that raised a cloud of dust.

"I heard you are looking for twenty books", he said. "Wrong goal."

"We know", muttered Philippos. "It was too big."

"TOO SMALL!" roared Crocus, and the pigeons of the square flew off in a panic. "Your goal was so small it woke up nobody. Not even you! One poster? That is not effort. That is a yawn."

Sparken came down beside him, calmer, his eyes glowing. "Close your eyes", he said. "Imagine the little shelf with no room for more books. Imagine a second shelf. A third. Children reading on the benches. Grandparents telling stories. The whole square a library without walls."

Alexandra opened her eyes. Something had caught fire inside them.

"New goal", said Crocus. "Take the twenty and multiply it by ten. Two hundred books."

"TWO HUNDRED?" the children shouted together. "That is crazy!"

"Yes!" laughed Crocus. "And now the second half of the rule, the most important part: it will take ten times more effort than you imagine. I am not saying this to scare you. I am saying it so you will not be surprised. When it gets hard, it will not mean something is going wrong. It will mean the plan is working."

Philippos felt his heart beating differently. Stronger. More alive.

"So where do we start?" he asked.

"Everywhere!" said Crocus. "LET'S GO!"`
        }
      },
      {
        title: { el: "Μαζική Δράση", en: "Massive Action" },
        image: "/images/filippos.webp",
        imageCaption: { el: "Δεν φταίει η βροχή. Οι αφίσες ήταν ξεσκέπαστες.", en: "The rain is not to blame. The posters were uncovered." },
        text: {
          el: `Την επόμενη εβδομάδα, η γειτονιά δεν ήξερε τι την χτύπησε.

Όχι μία αφίσα. Τριάντα. Στον φούρνο, στο φαρμακείο, στο κουρείο, στη στάση του λεωφορείου. Μίλησαν στη δασκάλα τους, που το ανακοίνωσε σε όλες τις τάξεις. Χτύπησαν πόρτες: «Καλησπέρα! Μαζεύουμε βιβλία για το ραφάκι της πλατείας. Έχετε κανένα που δεν διαβάζετε πια;» Η γιαγιά της Αλεξάνδρας το είπε σε όλες τις φίλες της — και οι φίλες της γιαγιάς ήταν πολλές.

Κάποιοι έλεγαν όχι. Πολλοί έλεγαν όχι. Τα παιδιά συνέχιζαν.

Μετά ήρθε η καταστροφή. Μια νυχτερινή μπόρα μούλιασε τις μισές αφίσες. Τα χρώματα έτρεξαν, τα γράμματα σβήστηκαν.

«Φταίει η κακιά μας τύχη!» φώναξε ο Φίλιππος. «Φταίει η βροχή! Φταίει ο καιρός που...»

«Στοπ», είπε η Αλεξάνδρα ήσυχα. Θυμήθηκε κάτι που έλεγε ο Crocus. «Αν φταίει η βροχή, δεν μπορούμε να κάνουμε τίποτα. Αν φταίμε εμείς, μπορούμε να το διορθώσουμε. Εμείς αφήσαμε τις αφίσες ξεσκέπαστες.»

Ο Φίλιππος σταμάτησε. Δεν του άρεσε αυτό που άκουσε. Αλλά ήξερε ότι ήταν αλήθεια. «Ζελατίνες», είπε τελικά. «Θα τις βάλουμε σε ζελατίνες.»

Το ίδιο απόγευμα πήγαν και στο βιβλιοπωλείο της πόλης. Ο ιδιοκτήτης άκουσε το σχέδιό τους και κούνησε το κεφάλι: «Δεν μπορώ να χαρίζω καινούργια βιβλία, παιδιά.»

Ένα ακόμα όχι. Πήραν ανάσα να φύγουν — και τότε εκείνος πρόσθεσε: «Αλλά έχω μια αποθήκη με παιδικά που δεν πουλήθηκαν ποτέ. Αν τα θέλετε... είναι δικά σας.»

Σαράντα δύο βιβλία. Με μία κουβέντα.`,
          en: `The following week, the neighbourhood did not know what had hit it.

Not one poster. Thirty. At the bakery, the pharmacy, the barbershop, the bus stop. They spoke to their teacher, who announced it to every class. They knocked on doors: "Good evening! We are collecting books for the little shelf in the square. Do you have any you no longer read?" Alexandra's grandmother told all her friends — and grandmother's friends were many.

Some people said no. Many people said no. The children kept going.

Then came the disaster. A night storm soaked half the posters. The colours ran, the letters washed away.

"It is our bad luck!" shouted Philippos. "It is the rain! It is the weather that..."

"Stop", said Alexandra quietly. She remembered something Crocus used to say. "If the rain is to blame, we can do nothing. If we are to blame, we can fix it. We left the posters uncovered."

Philippos went silent. He did not like what he heard. But he knew it was true. "Plastic sleeves", he said at last. "We will put them in plastic sleeves."

That same afternoon they also went to the town bookshop. The owner listened to their plan and shook his head: "I cannot give away new books, kids."

One more no. They took a breath to leave — and then he added: "But I have a storeroom full of children's books that never sold. If you want them... they are yours."

Forty-two books. With one conversation.`
        }
      },
      {
        title: { el: "Άλλη Μία Προσπάθεια", en: "One More Try" },
        image: "/images/eleftheria.webp",
        imageCaption: { el: "Εκεί που οι άλλοι σταματούν, εσύ κάνεις άλλη μία.", en: "Where others stop, you make one more." },
        text: {
          el: `Δέκα μέρες μετά, το μέτρημα έδειξε: ενενήντα ένα βιβλία.

Ήταν πολλά. Ήταν περισσότερα από τέσσερις φορές ο παλιός τους στόχος. Και όμως, ήταν λιγότερα από τα μισά του νέου.

Τα πόδια τους πονούσαν από το περπάτημα. Η φωνή της Αλεξάνδρας είχε βραχνιάσει. Ένας συμμαθητής τους είπε γελώντας: «Ακόμα με τα βιβλία ασχολείστε; Παρατήστε το. Καλά είναι και τα ενενήντα.»

Εκείνο το βράδυ, ο Φίλιππος κάθισε στο παγκάκι με το κεφάλι στα χέρια. «Ίσως έχει δίκιο. Είναι πολλά τα ενενήντα ένα. Κανείς δεν θα μας κατηγορήσει αν σταματήσουμε.»

Ο Crocus εμφανίστηκε δίπλα του. Δεν φώναξε αυτή τη φορά. «Σωστά. Κανείς δεν θα σας κατηγορήσει. Εδώ ακριβώς σταματάνε σχεδόν όλοι — στο σημείο που κανείς δεν θα τους κατηγορούσε. Θέλεις να μάθεις το μυστικό των σπουδαίων; Εκεί που οι άλλοι σταματούν, αυτοί κάνουν άλλη μία προσπάθεια. Μόνο μία. Και μετά, αν χρειαστεί, άλλη μία.»

«Και ποια είναι η δική μας άλλη μία;» ρώτησε η Αλεξάνδρα.

Η απάντηση ήρθε από τη WiseBot, που φτερούγισε στο φανάρι. «Η μεγαλύτερη ιδέα που δεν έχετε δοκιμάσει ακόμα. Μια Μέρα Βιβλίου στο σχολείο. Ζητήστε το από τον διευθυντή.»

«Και κάτι ακόμα», πρόσθεσε αυστηρά. «Αύριο είναι Κυριακή. Αύριο δεν δουλεύει κανείς. Ύπνος, παιχνίδι, οικογένεια. Η μεγάλη προσπάθεια χρειάζεται και μεγάλη ξεκούραση — αλλιώς η φλόγα σβήνει.»

Την Κυριακή ξεκουράστηκαν. Τη Δευτέρα χτύπησαν την πόρτα του διευθυντή.`,
          en: `Ten days later, the count showed: ninety-one books.

It was a lot. It was more than four times their old goal. And yet, it was less than half of the new one.

Their feet ached from walking. Alexandra's voice had gone hoarse. A classmate told them, laughing: "Are you still busy with those books? Give it up. Ninety is fine."

That evening, Philippos sat on the bench with his head in his hands. "Maybe he is right. Ninety-one is plenty. No one will blame us if we stop."

Crocus appeared beside him. He did not shout this time. "Correct. No one will blame you. This is exactly where almost everyone stops — at the point where no one would blame them. Do you want to know the secret of the great ones? Where others stop, they make one more try. Just one. And then, if needed, one more."

"And what is our one more?" asked Alexandra.

The answer came from WiseBot, who fluttered onto the lamp post. "The biggest idea you have not tried yet. A Book Day at school. Ask the principal for it."

"And one more thing", she added strictly. "Tomorrow is Sunday. Tomorrow nobody works. Sleep, play, family. Big effort needs big rest — otherwise the flame goes out."

On Sunday they rested. On Monday they knocked on the principal's door.`
        }
      },
      {
        title: { el: "Το Ράφι που Ξεχείλισε", en: "The Shelf That Overflowed" },
        image: "/images/paidia-kai-sparken.webp",
        imageCaption: { el: "Διακόσια δεκατέσσερα βιβλία. Και ένα μάθημα για πάντα.", en: "Two hundred and fourteen books. And a lesson forever." },
        text: {
          el: `Ο διευθυντής άκουσε την ιδέα τους και χαμογέλασε. «Μέρα Βιβλίου, ε; Την Παρασκευή.»

Την Παρασκευή, το προαύλιο γέμισε σακούλες. Παιδιά από όλες τις τάξεις έφερναν βιβλία που είχαν αγαπήσει και μεγαλώσει μαζί τους. Παραμύθια, κόμικς, εγκυκλοπαίδειες, ατλαντες με χάρτες. Η στοίβα μεγάλωνε, μεγάλωνε, μεγάλωνε.

Το Σάββατο το πρωί, στην πλατεία, έγινε το μεγάλο μέτρημα. Η Αλεξάνδρα φώναζε τους αριθμούς και ο Φίλιππος σημείωνε. «Διακόσια δέκα... διακόσια έντεκα... διακόσια δεκατέσσερα!»

Το παλιό ραφάκι δεν έφτανε πια. Η Link εμφανίστηκε με εργαλεία και σχέδια. «Ώρα για υλοποίηση», είπε πρακτικά. Μαζί με τον μαραγκό της γειτονιάς έφτιαξαν δύο καινούργια ράφια με σκεπαστή τέντα για τη βροχή. Τα παιδιά έβαψαν την ταμπέλα: «Πάρε ένα βιβλίο, άφησε ένα βιβλίο.»

Το απόγευμα, η πλατεία έμοιαζε με το όραμα του Sparken: παιδιά διάβαζαν στα παγκάκια, ένας παππούς διηγούνταν μια ιστορία, μια μαμά διάλεγε παραμύθι για το μωρό της.

«Και αν είχαμε μείνει στα είκοσι;» ρώτησε ο Φίλιππος.

«Θα είχατε μαζέψει τρία», γέλασε ο Crocus. «Ο μεγάλος στόχος σας ξύπνησε. Η δεκαπλάσια προσπάθεια σας πήγε μακριά. Η ευθύνη σας κράτησε στον δρόμο. Και η άλλη μία προσπάθεια... αυτή σας πήγε στο τέρμα.»

Ο Sparken κοίταξε την πλατεία που διάβαζε. «Θυμηθείτε το για πάντα», είπε. «Αν σκοπεύεις στα αστέρια και φτάσεις στο φεγγάρι, πάλι ψηλότερα είσαι από όλους όσους δεν σημάδεψαν ποτέ.»`,
          en: `The principal listened to their idea and smiled. "A Book Day, eh? This Friday."

On Friday, the schoolyard filled with bags. Children from every class brought books they had loved and grown up with. Fairy tales, comics, encyclopedias, atlases full of maps. The pile grew, and grew, and grew.

On Saturday morning, in the square, the great counting took place. Alexandra called out the numbers and Philippos wrote them down. "Two hundred and ten... two hundred and eleven... two hundred and fourteen!"

The old little shelf was not enough anymore. Link appeared with tools and drawings. "Time for implementation", she said practically. Together with the neighbourhood carpenter they built two new shelves with a small canopy against the rain. The children painted the sign: "Take a book, leave a book."

In the afternoon, the square looked exactly like Sparken's vision: children reading on the benches, a grandfather telling a story, a mother choosing a fairy tale for her baby.

"And if we had stayed at twenty?" asked Philippos.

"You would have collected three", laughed Crocus. "The big goal woke you up. The tenfold effort took you far. Responsibility kept you on the road. And the one more try... that took you all the way."

Sparken looked at the reading square. "Remember this forever", he said. "If you aim for the stars and reach the moon, you are still higher than everyone who never aimed at all."`
        }
      }
    ]
  }
];
