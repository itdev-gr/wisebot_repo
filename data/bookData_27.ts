
import { Book } from '../types';

// ============================================================
// BOOK 27: ΜΙΚΡΕΣ ΣΥΝΗΘΕΙΕΣ, ΜΕΓΑΛΑ ΘΑΥΜΑΤΑ / TINY HABITS, BIG MIRACLES
// Heroes: WiseBot & Pencilo
// Theme: ΣΥΝΗΘΕΙΕΣ / HABITS
// Inspired by the ideas of «Atomic Habits» by James Clear (kids adaptation, original story)
// ============================================================

export const BOOK_27: Book[] = [
  {
    id: 27,
    title: { el: "ΜΙΚΡΕΣ ΣΥΝΗΘΕΙΕΣ, ΜΕΓΑΛΑ ΘΑΥΜΑΤΑ", en: "TINY HABITS, BIG MIRACLES" },
    theme: { el: "ΣΥΝΗΘΕΙΕΣ", en: "HABITS" },
    stepLabel: { el: "WISEBOT & ΟΙ ΣΥΝΗΘΕΙΕΣ", en: "WISEBOT & HABITS" },
    author: "James Clear · Kids Edition",
    cover: "/images/pencilo.jpg",
    videoUrl: "",
    description: {
      el: "Ο Φίλιππος θέλει να γίνει σπουδαίος στο μπάσκετ — αύριο κιόλας. Η Αλεξάνδρα θέλει τέλειο δωμάτιο — με μία κίνηση. Και οι δύο τα παρατάνε σε τρεις μέρες. Μέχρι που η WiseBot και ο Pencilo τούς δείχνουν το μυστικό του 1%. Βασισμένο στις ιδέες του Atomic Habits του James Clear.",
      en: "Philippos wants to be great at basketball — by tomorrow. Alexandra wants a perfect room — in one move. Both quit within three days. Until WiseBot and Pencilo show them the secret of 1%. Based on the ideas of Atomic Habits by James Clear."
    },
    meaning: {
      el: "Δεν γίνεσαι σπουδαίος με ένα μεγάλο άλμα. Γίνεσαι σπουδαίος με ένα μικρό βήμα — που το κάνεις κάθε μέρα.",
      en: "You don't become great with one big leap. You become great with one small step — taken every single day."
    },
    xp: 100,
    parentMessage: {
      el: "Τα παιδιά συχνά βάζουν τεράστιους στόχους και απογοητεύονται σε τρεις μέρες. Δεν φταίει η θέλησή τους — φταίει το μέγεθος του πρώτου βήματος. Δοκιμάστε σήμερα: διαλέξτε μαζί μία συνήθεια τόσο μικρή που να είναι αδύνατο να αποτύχει — μία σελίδα, δύο λεπτά, πέντε σουτ. Και κολλήστε τη πάνω σε κάτι που ήδη γίνεται κάθε μέρα: «Μετά το βραδινό, διαβάζουμε μία σελίδα.» Επαινέστε τη συνέπεια, όχι το αποτέλεσμα: «Μπράβο που ήρθες ξανά» αξίζει περισσότερο από «μπράβο που κέρδισες».",
      en: "Kids often set huge goals and get discouraged within three days. It's not their willpower that fails — it's the size of the first step. Try today: pick together one habit so small it cannot fail — one page, two minutes, five shots. Then attach it to something that already happens daily: 'After dinner, we read one page.' Praise consistency, not results: 'Well done for showing up again' is worth more than 'well done for winning'."
    },

    pages: [
      {
        title: { el: "Το Μεγάλο Άλμα", en: "The Big Leap" },
        image: "/images/ta-3-paidia.webp",
        imageCaption: { el: "Μεγάλα σχέδια. Τρεις μέρες διάρκεια.", en: "Big plans. Three days long." },
        text: {
          el: `Η Δευτέρα ξεκίνησε με φωνές ενθουσιασμού.

«Θα γίνω ο καλύτερος στο μπάσκετ!» φώναξε ο Φίλιππος. «Από σήμερα, τρεις ώρες προπόνηση κάθε μέρα!»

Η Αλεξάνδρα δεν έμεινε πίσω. «Κι εγώ θα διαβάζω δύο ώρες κάθε βράδυ! Και θα έχω το πιο τακτοποιημένο δωμάτιο στον κόσμο!»

Τη Δευτέρα, όλα πήγαν τέλεια. Ο Φίλιππος έκανε σουτ μέχρι που νύχτωσε. Η Αλεξάνδρα τακτοποίησε όλη τη βιβλιοθήκη της.

Την Τρίτη, τα χέρια του Φίλιππου πονούσαν. Έκανε προπόνηση μία ώρα, γκρινιάζοντας. Η Αλεξάνδρα διάβασε δέκα λεπτά και κοιμήθηκε πάνω στο βιβλίο.

Την Τετάρτη... δεν έγινε τίποτα. Η μπάλα έμεινε στη γωνία. Το βιβλίο έμεινε κλειστό. Το δωμάτιο ξαναγέμισε ρούχα.

«Δεν έχω ταλέντο», είπε ο Φίλιππος και κλότσησε την μπάλα κάτω από το κρεβάτι.

«Δεν είμαι οργανωτική», είπε η Αλεξάνδρα. «Έτσι γεννήθηκα.»

Από το παράθυρο, δύο μωβ μάτια τα έβλεπαν όλα. Η WiseBot κούνησε αργά το κεφάλι της.

«Πάλι τα ίδια», ψιθύρισε. «Προσπάθησαν να πηδήξουν ολόκληρο το βουνό με ένα άλμα. Και τώρα νομίζουν ότι φταίνε αυτοί.»

Δίπλα της, ένα μολύβι με ποδαράκια χαμογέλασε. Ο Pencilo. «Ώρα να τους δείξουμε το κόλπο με το 1%;»

«Ώρα», είπε η WiseBot. Και πέταξαν προς το παράθυρο.`,
          en: `Monday began with shouts of excitement.

'I will become the best at basketball!' yelled Philippos. 'Starting today, three hours of practice every day!'

Alexandra wasn't staying behind. 'And I will read two hours every night! And I will have the tidiest room in the world!'

On Monday, everything went perfectly. Philippos shot hoops until dark. Alexandra organized her entire bookshelf.

On Tuesday, Philippos's arms ached. He practiced one hour, grumbling. Alexandra read for ten minutes and fell asleep on her book.

On Wednesday... nothing happened. The ball stayed in the corner. The book stayed closed. The room filled up with clothes again.

'I have no talent,' said Philippos, kicking the ball under the bed.

'I am just not organized,' said Alexandra. 'That's how I was born.'

From the window, two purple eyes were watching everything. WiseBot slowly shook her head.

'The same story again,' she whispered. 'They tried to jump over the whole mountain in one leap. And now they think something is wrong with them.'

Next to her, a pencil with little legs smiled. Pencilo. 'Time to show them the 1% trick?'

'Time,' said WiseBot. And they flew toward the window.`
        }
      },
      {
        title: { el: "Το Μυστικό του 1%", en: "The Secret of 1%" },
        image: "/images/paidia-kai-wisebot.webp",
        imageCaption: { el: "«Δεν χρειάζεσαι άλμα. Χρειάζεσαι ένα βήμα την ημέρα.»", en: "'You don't need a leap. You need one step a day.'" },
        text: {
          el: `Η WiseBot προσγειώθηκε απαλά πάνω στην μπασκέτα.

«Φίλιππε», είπε, «πόσο καλύτερος έγινες τη Δευτέρα, μετά από τρεις ώρες προπόνηση;»

«Εεε... λίγο;» παραδέχτηκε εκείνος.

«Ακριβώς. Λίγο. Και αν γινόσουν λίγο καλύτερος — μόνο ένα τοσοδούλι, ένα 1% — αλλά ΚΑΘΕ μέρα; Για έναν ολόκληρο χρόνο;»

Ο Φίλιππος ανασήκωσε τους ώμους. «Θα ήμουν... λίγο καλύτερος επί πολλές μέρες;»

Τα μάτια της WiseBot έλαμψαν. «Θα ήσουν σχεδόν ΤΡΙΑΝΤΑ ΕΠΤΑ φορές καλύτερος. Όχι τριάντα εφτά τοις εκατό. Τριάντα εφτά ΦΟΡΕΣ. Έτσι δουλεύει το μικρό όταν επαναλαμβάνεται. Μεγαλώνει κρυφά, σαν χιονόμπαλα που κατρακυλάει.»

Ο Pencilo πήδηξε μπροστά. «Και υπάρχει και κάτι πιο σημαντικό από τους αριθμούς. Κάθε φορά που κάνεις πέντε σουτ, δεν κερδίζεις μόνο πόντους. Λες στον εαυτό σου: είμαι αθλητής. Κάθε φορά που η Αλεξάνδρα βάζει ένα βιβλίο στη θέση του, λέει: είμαι άνθρωπος που φροντίζει τα πράγματά του.»

«Δηλαδή...» η Αλεξάνδρα έσμιξε τα φρύδια, «γίνομαι αυτό που επαναλαμβάνω;»

«Αυτό ακριβώς», είπε η WiseBot. «Οι συνήθειές σου είναι ψήφοι. Κάθε μικρή πράξη ψηφίζει για το ποιος θα γίνεις. Δεν χρειάζεται να είναι τεράστια η πράξη. Χρειάζεται να ξαναγίνει αύριο.»

«Πέντε σουτ την ημέρα;» ρώτησε ο Φίλιππος. «Μόνο; Μα αυτό είναι πανεύκολο!»

«Ναι», χαμογέλασε ο Pencilo. «Αυτό είναι το κόλπο.»`,
          en: `WiseBot landed softly on top of the basketball hoop.

'Philippos,' she said, 'how much better did you get on Monday, after three hours of practice?'

'Umm... a little?' he admitted.

'Exactly. A little. And what if you got a little better — just a tiny bit, one percent — but EVERY day? For a whole year?'

Philippos shrugged. 'I would be... a little better, many times?'

WiseBot's eyes flashed. 'You would be almost THIRTY-SEVEN times better. Not thirty-seven percent. Thirty-seven TIMES. That is how small things work when they repeat. They grow secretly, like a snowball rolling downhill.'

Pencilo hopped forward. 'And there is something even more important than numbers. Every time you take five shots, you don't just earn points. You tell yourself: I am an athlete. Every time Alexandra puts one book back in its place, she says: I am a person who takes care of her things.'

'So...' Alexandra frowned, thinking hard, 'I become what I repeat?'

'Exactly that,' said WiseBot. 'Your habits are votes. Every small action votes for who you will become. The action doesn't need to be huge. It needs to happen again tomorrow.'

'Five shots a day?' asked Philippos. 'That's all? But that is super easy!'

'Yes,' smiled Pencilo. 'That is the trick.'`
        }
      },
      {
        title: { el: "Η Κοιλάδα της Απογοήτευσης", en: "The Valley of Disappointment" },
        image: "/images/filippos.webp",
        imageCaption: { el: "Δύο εβδομάδες προσπάθεια. Πουθενά αποτέλεσμα. Ή έτσι φαινόταν.", en: "Two weeks of effort. No results. Or so it seemed." },
        text: {
          el: `Την πρώτη εβδομάδα, όλα κύλησαν ωραία. Πέντε σουτ κάθε απόγευμα. Ένα βιβλίο στη θέση του κάθε βράδυ. Εύκολο.

Τη δεύτερη εβδομάδα, ήρθαν τα προβλήματα.

Ο Φίλιππος ξεχνούσε. Γύριζε από το σχολείο, άνοιγε το τάμπλετ, και ξαφνικά είχε νυχτώσει. «Πού πήγε η μέρα;» αναρωτιόταν.

Και το χειρότερο; Ακόμα κι όταν θυμόταν, δεν έβλεπε καμία διαφορά. «Δύο εβδομάδες κάνω σουτ», μούγκρισε μια Πέμπτη, «και ακόμα χάνω τα μισά! Δεν δουλεύει το κόλπο σας!»

Πέταξε την μπάλα. Εκείνη χτύπησε στη στεφάνη και βγήκε έξω. «Ορίστε! Το βλέπεις;»

Η WiseBot δεν ταράχτηκε καθόλου. «Φίλιππε, όταν η μαμά βάζει ένα κέικ στον φούρνο, το ανοίγει μετά από πέντε λεπτά για να δει αν έγινε;»

«Όχι βέβαια. Θα ξεφουσκώσει.»

«Και όμως το κέικ ψήνεται από το πρώτο λεπτό. Απλά δεν φαίνεται ακόμα.» Τα μάτια της έγιναν πιο ζεστά. «Οι συνήθειες είναι το ίδιο. Στην αρχή δουλεύουν κρυφά, μέσα σου. Τα αποτελέσματα αργούν πάντα πιο πολύ από την προσπάθεια. Αυτό το κομμάτι — εκεί που προσπαθείς και δεν βλέπεις τίποτα — έχει όνομα. Το λέμε Κοιλάδα της Απογοήτευσης.»

«Και πόσο κρατάει αυτή η κοιλάδα;» ρώτησε η Αλεξάνδρα.

«Αρκετά ώστε οι περισσότεροι να τα παρατήσουν ακριβώς πριν αρχίσουν τα θαύματα», είπε η WiseBot. «Γι' αυτό κερδίζουν οι λίγοι. Όχι επειδή είναι πιο δυνατοί. Επειδή δεν σταμάτησαν μέσα στην κοιλάδα.»`,
          en: `The first week, everything rolled along nicely. Five shots every afternoon. One book back in place every night. Easy.

The second week, the problems arrived.

Philippos kept forgetting. He came home from school, opened the tablet, and suddenly it was dark outside. 'Where did the day go?' he wondered.

And the worst part? Even when he remembered, he saw no difference at all. 'Two weeks of shooting,' he growled one Thursday, 'and I still miss half of them! Your trick doesn't work!'

He threw the ball. It hit the rim and bounced out. 'There! You see?'

WiseBot wasn't shaken at all. 'Philippos, when your mom puts a cake in the oven, does she open it after five minutes to see if it is ready?'

'Of course not. It would collapse.'

'And yet the cake is baking from the very first minute. It just doesn't show yet.' Her eyes grew warmer. 'Habits are the same. At first they work secretly, inside you. Results always arrive later than the effort. That part — where you keep trying and see nothing — has a name. We call it the Valley of Disappointment.'

'And how long does this valley last?' asked Alexandra.

'Long enough for most people to quit right before the miracles begin,' said WiseBot. 'That is why so few win. Not because they are stronger. Because they didn't stop inside the valley.'`
        }
      },
      {
        title: { el: "Τα Κόλπα του Pencilo", en: "Pencilo's Tricks" },
        image: "/images/paidia-kai-pencilo.webp",
        imageCaption: { el: "Κάνε το φανερό. Κάνε το εύκολο. Κάνε το διασκεδαστικό.", en: "Make it obvious. Make it easy. Make it fun." },
        text: {
          el: `«Ωραία η υπομονή», είπε ο Pencilo, «αλλά υπάρχουν και κόλπα. Τρία, για την ακρίβεια.»

Στάθηκε στη μέση του δωματίου σαν δάσκαλος.

«Κόλπο πρώτο: κάνε το ΦΑΝΕΡΟ. Φίλιππε, γιατί ξεχνάς την μπάλα; Γιατί κρύβεται κάτω από το κρεβάτι! Βάλ' τη μπροστά στην πόρτα. Να σκοντάφτεις πάνω της. Αλεξάνδρα, θες να διαβάζεις; Το βιβλίο πάνω στο μαξιλάρι σου, κάθε πρωί. Το τάμπλετ; Σε ένα συρτάρι, μακριά. Ό,τι βλέπεις, το κάνεις. Ό,τι κρύβεται, ξεχνιέται.»

«Κόλπο δεύτερο: κάνε το ΕΥΚΟΛΟ. Τόσο εύκολο που να ντρέπεσαι να πεις όχι. Όχι δύο ώρες διάβασμα — μία σελίδα. Όχι όλο το δωμάτιο — ένα πράγμα στη θέση του. Ξέρω τι θα πεις: μία σελίδα δεν είναι τίποτα. Λάθος! Η μία σελίδα είναι η πόρτα. Όταν την ανοίξεις, συνήθως διαβάζεις κι άλλες.»

«Κόλπο τρίτο: κόλλησε τη νέα συνήθεια πάνω σε μια παλιά. Σκεφτείτε κάτι που κάνετε ήδη κάθε μέρα, χωρίς να το σκέφτεστε.»

«Πλένω τα δόντια μου!» είπε η Αλεξάνδρα.

«Τέλεια! Λοιπόν: ΜΕΤΑ το πλύσιμο των δοντιών, διαβάζω μία σελίδα. Η παλιά συνήθεια γίνεται το κουδούνι που ξυπνάει τη νέα. Το λέμε αλυσίδα συνηθειών — η μία τραβάει την άλλη.»

Ο Φίλιππος χαμογέλασε πονηρά. «Μετά το κολατσιό... πέντε σουτ. Και θα βάζω και ένα Χ στο ημερολόγιο κάθε μέρα που τα καταφέρνω!»

«Α!» φώναξε ο Pencilo ενθουσιασμένος. «Βρήκες μόνος σου και το τέταρτο κόλπο: κάνε το ΔΙΑΣΚΕΔΑΣΤΙΚΟ. Η αλυσίδα με τα Χ είναι παιχνίδι. Και κανείς δεν θέλει να σπάσει την αλυσίδα του.»`,
          en: `'Patience is good,' said Pencilo, 'but there are also tricks. Three, to be exact.'

He stood in the middle of the room like a teacher.

'Trick one: make it OBVIOUS. Philippos, why do you forget the ball? Because it hides under the bed! Put it in front of the door. Trip over it. Alexandra, you want to read? Book on your pillow, every morning. The tablet? In a drawer, far away. What you see, you do. What hides, gets forgotten.'

'Trick two: make it EASY. So easy you would be embarrassed to say no. Not two hours of reading — one page. Not the whole room — one thing back in its place. I know what you will say: one page is nothing. Wrong! One page is the door. Once you open it, you usually read more.'

'Trick three: stack the new habit onto an old one. Think of something you already do every day, without thinking.'

'I brush my teeth!' said Alexandra.

'Perfect! So: AFTER brushing my teeth, I read one page. The old habit becomes the bell that wakes up the new one. We call it habit stacking — one pulls the other.'

Philippos grinned slyly. 'After my afternoon snack... five shots. And I will mark an X on the calendar every day I do it!'

'Ah!' shouted Pencilo, thrilled. 'You found the fourth trick all by yourself: make it FUN. The chain of X marks is a game. And nobody wants to break their own chain.'`
        }
      },
      {
        title: { el: "Η Χιονόμπαλα", en: "The Snowball" },
        image: "/images/paidia-wisebot-2.webp",
        imageCaption: { el: "Δύο μήνες μετά. Η χιονόμπαλα είχε μεγαλώσει.", en: "Two months later. The snowball had grown." },
        text: {
          el: `Πέρασαν δύο μήνες. Κανείς δεν κατάλαβε πότε.

Ένα Σάββατο, στην αυλή του σχολείου, ο Φίλιππος έκανε δέκα σουτ στη σειρά. Οκτώ μπήκαν. Ο προπονητής σφύριξε εντυπωσιασμένος. «Πότε πρόλαβες κι έγινες τόσο καλός;»

Ο Φίλιππος κοντοστάθηκε. Δεν υπήρχε μία μαγική μέρα να θυμηθεί. Υπήρχαν μόνο εξήντα μικρά απογεύματα. Πέντε σουτ. Μερικές φορές δέκα. Μία φορά, άρρωστος, μόνο δύο — αλλά ούτε τότε μηδέν.

«Δεν έγινα σε μία μέρα», απάντησε. «Έγινα κάθε μέρα.»

Στο σπίτι, το δωμάτιο της Αλεξάνδρας δεν ήταν τέλειο. Ήταν όμως δικό της — τακτοποιημένο αρκετά ώστε να βρίσκει ό,τι ήθελε. Και στο κομοδίνο της, μια στοίβα: έντεκα βιβλία. Διαβασμένα. Από μία σελίδα τη φορά που έγινε δύο, που έγινε κεφάλαιο.

Το βράδυ, η WiseBot και ο Pencilo τούς βρήκαν στην αυλή να κοιτάζουν το ημερολόγιο με τα Χ. Η αλυσίδα είχε μόνο τρεις τρύπες σε εξήντα μέρες.

«Λοιπόν;» ρώτησε η WiseBot. «Τι μάθατε;»

Η Αλεξάνδρα σκέφτηκε. «Ότι δεν χρειάζεται να είσαι σπουδαίος για να ξεκινήσεις. Ξεκινάς μικρά — και αυτό σε κάνει σπουδαίο.»

«Κι ότι όταν δεν βλέπεις αποτέλεσμα», πρόσθεσε ο Φίλιππος, «δεν σημαίνει ότι δεν δουλεύει. Σημαίνει ότι το κέικ ψήνεται ακόμα.»

Ο Pencilo σκούπισε ένα δάκρυ περηφάνιας. Η WiseBot άνοιξε τα φτερά της.

«Μικρές συνήθειες», είπε απαλά. «Μεγάλα θαύματα. Πάντα με αυτή τη σειρά.»`,
          en: `Two months passed. Nobody noticed exactly when.

One Saturday, in the schoolyard, Philippos took ten shots in a row. Eight went in. The coach whistled, impressed. 'When did you get so good?'

Philippos paused. There was no single magic day to remember. There were only sixty small afternoons. Five shots. Sometimes ten. Once, when he was sick, only two — but even then, not zero.

'I didn't get good in one day,' he answered. 'I got good every day.'

At home, Alexandra's room wasn't perfect. But it was hers — tidy enough that she could find whatever she needed. And on her nightstand, a stack: eleven books. All read. One page at a time, which became two, which became a chapter.

That evening, WiseBot and Pencilo found them in the yard, looking at the calendar full of X marks. The chain had only three holes in sixty days.

'Well?' asked WiseBot. 'What did you learn?'

Alexandra thought about it. 'That you don't need to be great to start. You start small — and that is what makes you great.'

'And when you can't see results,' added Philippos, 'it doesn't mean it isn't working. It means the cake is still baking.'

Pencilo wiped away a proud little tear. WiseBot spread her wings.

'Tiny habits,' she said softly. 'Big miracles. Always in that order.'`
        }
      }
    ]
  }
];
