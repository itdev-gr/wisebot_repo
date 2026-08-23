/**
 * Δ' Δημοτικού · Μελέτη Περιβάλλοντος · Γνωρίζουμε & Προσέχουμε το Σώμα μας
 * =======================================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 9–10.
 *
 * What the unit covers, in order:
 *   1–4   the skeleton: bones, the skull, the spine, why bones matter
 *   5–7   muscles: how they move us, the heart as a muscle, warming up
 *   8–11  the main organs: heart and blood, lungs and breathing, stomach, brain
 *   12–15 hygiene: washing hands, brushing teeth, sneezing, showers
 *   16–18 exercise, sleep and healthy habits
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_SCIENCE_OUR_BODY: QuizQuestion[] = [
  // ── 1–4: the skeleton ──────────────────────────────────────────────────────
  {
    q: { el: 'Τι κρατάει το σώμα μας όρθιο και του δίνει σχήμα;', en: 'What holds our body upright and gives it its shape?' },
    options: { el: ['Ο σκελετός', 'Το δέρμα', 'Τα μαλλιά', 'Το αίμα'], en: ['The skeleton', 'The skin', 'The hair', 'The blood'] },
    correct: 0,
    explanation: {
      el: 'Ο σκελετός είναι φτιαγμένος από οστά (κόκαλα). Χωρίς αυτόν θα ήμασταν σαν ζελέ!',
      en: 'The skeleton is made of bones. Without it we would be like jelly!',
    },
  },
  {
    q: { el: 'Ο Νίκος φορά κράνος όταν κάνει ποδήλατο. Ποιο κόκαλο προστατεύει το κράνος;', en: 'Nikos wears a helmet when he rides his bike. Which bone does the helmet protect?' },
    options: { el: ['Τα πλευρά', 'Το κρανίο', 'Τη σπονδυλική στήλη', 'Το μηριαίο οστό'], en: ['The ribs', 'The skull', 'The spine', 'The thigh bone'] },
    correct: 1,
    explanation: {
      el: 'Το κρανίο είναι το κόκαλο του κεφαλιού. Προστατεύει τον εγκέφαλο σαν σκληρό καπάκι.',
      en: 'The skull is the bone of the head. It protects the brain like a hard lid.',
    },
  },
  {
    q: { el: 'Η σπονδυλική στήλη είναι φτιαγμένη από πολλά μικρά κόκαλα. Πώς λέγονται;', en: 'The spine is made of many small bones. What are they called?' },
    options: { el: ['Πλευρά', 'Αρθρώσεις', 'Σπόνδυλοι', 'Δόντια'], en: ['Ribs', 'Joints', 'Vertebrae', 'Teeth'] },
    correct: 2,
    explanation: {
      el: 'Οι σπόνδυλοι είναι σαν χάντρες σε ένα κολιέ. Επειδή είναι πολλοί και μικροί, η πλάτη μας λυγίζει.',
      en: 'Vertebrae are like beads on a necklace. Because there are many small ones, our back can bend.',
    },
  },
  {
    q: { el: 'Τα πλευρά σχηματίζουν ένα «κλουβί» στο στήθος. Τι προστατεύουν;', en: 'The ribs form a “cage” in the chest. What do they protect?' },
    options: { el: ['Τον εγκέφαλο', 'Τα γόνατα', 'Το στομάχι μόνο', 'Την καρδιά και τους πνεύμονες'], en: ['The brain', 'The knees', 'Only the stomach', 'The heart and the lungs'] },
    correct: 3,
    explanation: {
      el: 'Μέσα στον θώρακα, πίσω από τα πλευρά, βρίσκονται η καρδιά και οι πνεύμονες. Τα πλευρά τα φυλάνε.',
      en: 'Inside the chest, behind the ribs, are the heart and the lungs. The ribs guard them.',
    },
  },

  // ── 5–7: muscles ───────────────────────────────────────────────────────────
  {
    q: { el: 'Η Ελένη σηκώνει το χέρι της. Τι τραβάει το κόκαλο για να κινηθεί;', en: 'Eleni lifts her arm. What pulls the bone so it moves?' },
    options: { el: ['Ένας μυς', 'Το δέρμα', 'Ένα νεύρο μόνο του', 'Το αίμα'], en: ['A muscle', 'The skin', 'A nerve on its own', 'The blood'] },
    correct: 0,
    explanation: {
      el: 'Οι μύες είναι κολλημένοι πάνω στα κόκαλα. Όταν ένας μυς σφίγγει, τραβάει το κόκαλο και το μέλος κινείται.',
      en: 'Muscles are attached to the bones. When a muscle tightens, it pulls the bone and the limb moves.',
    },
  },
  {
    q: { el: 'Ποιο από αυτά είναι μυς που δουλεύει μόνος του, χωρίς να το σκεφτόμαστε;', en: 'Which of these is a muscle that works on its own, without us thinking about it?' },
    options: { el: ['Ο μυς του μπράτσου', 'Η καρδιά', 'Ο μυς του ποδιού', 'Ο μυς του σαγονιού'], en: ['The arm muscle', 'The heart', 'The leg muscle', 'The jaw muscle'] },
    correct: 1,
    explanation: {
      el: 'Η καρδιά είναι μυς που χτυπάει μέρα και νύχτα, ακόμη κι όταν κοιμόμαστε. Δεν χρειάζεται να της το πούμε!',
      en: 'The heart is a muscle that beats day and night, even when we sleep. We never have to tell it to!',
    },
  },
  {
    q: { el: 'Πριν από τον αγώνα, ο Γιώργος κάνει προθέρμανση. Γιατί;', en: 'Before the game, Giorgos warms up. Why?' },
    options: { el: ['Για να ζεσταθούν οι μύες και να μην τραυματιστούν', 'Για να κουραστεί πριν τον αγώνα', 'Για να μεγαλώσουν τα κόκαλα', 'Για να σταματήσει να ιδρώνει'], en: ['So his muscles warm up and do not get hurt', 'So he gets tired before the game', 'So his bones grow bigger', 'So he stops sweating'] },
    correct: 0,
    explanation: {
      el: 'Ένας κρύος μυς τραβιέται εύκολα. Με λίγο τρέξιμο και διατάσεις οι μύες ζεσταίνονται και είναι έτοιμοι.',
      en: 'A cold muscle pulls easily. A little jogging and stretching warms the muscles up and gets them ready.',
    },
  },

  // ── 8–11: the main organs ──────────────────────────────────────────────────
  {
    q: { el: 'Τι κάνει η καρδιά κάθε φορά που χτυπάει;', en: 'What does the heart do every time it beats?' },
    options: { el: ['Παίρνει αέρα', 'Χωνεύει το φαγητό', 'Στέλνει αίμα σε όλο το σώμα', 'Φτιάχνει καινούργια κόκαλα'], en: ['Takes in air', 'Digests food', 'Sends blood around the whole body', 'Makes new bones'] },
    correct: 2,
    explanation: {
      el: 'Η καρδιά είναι μια αντλία. Σπρώχνει το αίμα μέσα στις φλέβες και στις αρτηρίες, μέχρι τα δάχτυλα των ποδιών.',
      en: 'The heart is a pump. It pushes blood through the veins and arteries, all the way to your toes.',
    },
  },
  {
    q: { el: 'Η Μαρία παίρνει μια βαθιά ανάσα. Πού πηγαίνει ο αέρας;', en: 'Maria takes a deep breath. Where does the air go?' },
    options: { el: ['Στο στομάχι', 'Στους πνεύμονες', 'Στην καρδιά', 'Στον εγκέφαλο'], en: ['To the stomach', 'To the lungs', 'To the heart', 'To the brain'] },
    correct: 1,
    explanation: {
      el: 'Ο αέρας μπαίνει από τη μύτη ή το στόμα και φτάνει στους δύο πνεύμονες. Εκεί το αίμα παίρνει οξυγόνο.',
      en: 'Air goes in through the nose or mouth and reaches the two lungs. There the blood picks up oxygen.',
    },
  },
  {
    q: { el: 'Ο Νίκος έφαγε ένα σάντουιτς. Σε ποιο όργανο θα γίνει «χυλός» για να χωνευτεί;', en: 'Nikos ate a sandwich. In which organ will it turn into “mush” to be digested?' },
    options: { el: ['Στους πνεύμονες', 'Στην καρδιά', 'Στο κρανίο', 'Στο στομάχι'], en: ['The lungs', 'The heart', 'The skull', 'The stomach'] },
    correct: 3,
    explanation: {
      el: 'Το φαγητό κατεβαίνει από το στόμα στο στομάχι. Εκεί ανακατεύεται με υγρά και γίνεται χυλός, για να πάρει το σώμα ό,τι χρειάζεται.',
      en: 'Food travels from the mouth to the stomach. There it mixes with juices and turns into mush, so the body can take what it needs.',
    },
  },
  {
    q: { el: 'Ποιο όργανο είναι το «αρχηγείο» του σώματος και δίνει εντολές σε όλα τα άλλα;', en: 'Which organ is the body\'s “headquarters” and gives orders to all the others?' },
    options: { el: ['Ο εγκέφαλος', 'Η καρδιά', 'Το στομάχι', 'Οι πνεύμονες'], en: ['The brain', 'The heart', 'The stomach', 'The lungs'] },
    correct: 0,
    explanation: {
      el: 'Ο εγκέφαλος σκέφτεται, θυμάται και στέλνει μηνύματα μέσα από τα νεύρα: «Τρέξε!», «Γέλα!», «Πιάσε την μπάλα!».',
      en: 'The brain thinks, remembers and sends messages through the nerves: “Run!”, “Laugh!”, “Catch the ball!”.',
    },
  },

  // ── 12–15: hygiene ─────────────────────────────────────────────────────────
  {
    q: { el: 'Πότε πρέπει οπωσδήποτε να πλένουμε τα χέρια μας;', en: 'When must we always wash our hands?' },
    options: { el: ['Μόνο το πρωί', 'Πριν φάμε και μετά την τουαλέτα', 'Μόνο όταν φαίνονται βρόμικα', 'Μία φορά την εβδομάδα'], en: ['Only in the morning', 'Before eating and after the toilet', 'Only when they look dirty', 'Once a week'] },
    correct: 1,
    explanation: {
      el: 'Τα μικρόβια δεν φαίνονται με το μάτι. Πλένουμε τα χέρια με σαπούνι πριν φάμε, μετά την τουαλέτα και μετά το παιχνίδι έξω.',
      en: 'Germs are too small to see. We wash our hands with soap before eating, after the toilet and after playing outside.',
    },
  },
  {
    q: { el: 'Πόσες φορές την ημέρα πρέπει να βουρτσίζουμε τα δόντια μας;', en: 'How many times a day should we brush our teeth?' },
    options: { el: ['Μία φορά την εβδομάδα', 'Μόνο όταν πονάνε', 'Τουλάχιστον δύο φορές, πρωί και βράδυ', 'Μόνο μετά τα γλυκά'], en: ['Once a week', 'Only when they hurt', 'At least twice, morning and night', 'Only after sweets'] },
    correct: 2,
    explanation: {
      el: 'Βουρτσίζουμε τουλάχιστον δύο φορές την ημέρα, για δύο λεπτά. Έτσι φεύγουν τα υπολείμματα φαγητού και δεν γίνεται τερηδόνα.',
      en: 'We brush at least twice a day, for two minutes. That removes leftover food so cavities do not form.',
    },
  },
  {
    q: { el: 'Η Ελένη θέλει να φταρνιστεί. Τι είναι το σωστό να κάνει;', en: 'Eleni is about to sneeze. What is the right thing to do?' },
    options: { el: ['Να φταρνιστεί προς τον φίλο της', 'Να βάλει την παλάμη της και μετά να πιάσει το χερούλι', 'Να μην αναπνέει καθόλου', 'Να καλύψει το στόμα με τον αγκώνα ή ένα χαρτομάντιλο'], en: ['Sneeze towards her friend', 'Use her palm and then touch the door handle', 'Stop breathing completely', 'Cover her mouth with her elbow or a tissue'] },
    correct: 3,
    explanation: {
      el: 'Όταν φταρνιζόμαστε, πετάγονται μικρά σταγονίδια με μικρόβια. Ο αγκώνας ή ένα χαρτομάντιλο τα σταματάει, χωρίς να λερώνουμε τα χέρια.',
      en: 'When we sneeze, tiny droplets full of germs fly out. An elbow or a tissue stops them without dirtying our hands.',
    },
  },
  {
    q: { el: 'Μετά την προπόνηση ποδοσφαίρου, ο Γιώργος είναι ιδρωμένος. Τι τον βοηθάει να μείνει καθαρός και υγιής;', en: 'After football practice, Giorgos is sweaty. What helps him stay clean and healthy?' },
    options: { el: ['Ένα ντους και καθαρά ρούχα', 'Να φορέσει ξανά τα ίδια ρούχα αύριο', 'Να σκουπιστεί μόνο με το μπλουζάκι', 'Να πιει λιγότερο νερό'], en: ['A shower and clean clothes', 'Wearing the same clothes again tomorrow', 'Wiping off with his T-shirt only', 'Drinking less water'] },
    correct: 0,
    explanation: {
      el: 'Ο ιδρώτας και η σκόνη μένουν στο δέρμα και μαζεύουν μικρόβια. Το ντους και τα καθαρά ρούχα τα διώχνουν.',
      en: 'Sweat and dust stay on the skin and collect germs. A shower and clean clothes wash them away.',
    },
  },

  // ── 16–18: exercise, sleep and healthy habits ──────────────────────────────
  {
    q: { el: 'Όταν τρέχουμε, η καρδιά χτυπάει πιο γρήγορα. Γιατί;', en: 'When we run, the heart beats faster. Why?' },
    options: { el: ['Επειδή φοβάται', 'Για να στείλει περισσότερο αίμα και οξυγόνο στους μύες', 'Για να ζεστάνει το στομάχι', 'Επειδή χαλάει'], en: ['Because it is scared', 'To send more blood and oxygen to the muscles', 'To warm up the stomach', 'Because it is breaking'] },
    correct: 1,
    explanation: {
      el: 'Οι μύες που δουλεύουν χρειάζονται περισσότερο οξυγόνο. Η καρδιά χτυπάει πιο γρήγορα για να το πάει εκεί. Είναι σημάδι ότι γυμνάζεται κι αυτή!',
      en: 'Working muscles need more oxygen. The heart beats faster to deliver it. It is a sign the heart is exercising too!',
    },
  },
  {
    q: { el: 'Πόσες ώρες ύπνου χρειάζεται περίπου ένα παιδί 9–10 ετών κάθε βράδυ;', en: 'About how many hours of sleep does a 9–10 year old need each night?' },
    options: { el: ['3–4 ώρες', '5–6 ώρες', '9–11 ώρες', '14–15 ώρες'], en: ['3–4 hours', '5–6 hours', '9–11 hours', '14–15 hours'] },
    correct: 2,
    explanation: {
      el: 'Στον ύπνο το σώμα ξεκουράζεται, μεγαλώνει και ο εγκέφαλος «τακτοποιεί» όσα έμαθε. Τα παιδιά χρειάζονται περίπου 9–11 ώρες.',
      en: 'During sleep the body rests and grows, and the brain “tidies up” what it learned. Children need about 9–11 hours.',
    },
  },
  {
    q: { el: 'Η Μαρία θέλει να φτιάξει το πιο υγιεινό πρόγραμμα για τη μέρα της. Ποιο είναι;', en: 'Maria wants to plan the healthiest day. Which plan is it?' },
    options: { el: ['Πρωινό, σχολείο, παιχνίδι έξω, φρούτα, ύπνος νωρίς', 'Χωρίς πρωινό, βιντεοπαιχνίδια όλο το απόγευμα, πατατάκια, ύπνος αργά', 'Πρωινό, σχολείο, καναπές όλη μέρα, αναψυκτικά', 'Μόνο γλυκά, τρέξιμο όλη νύχτα, χωρίς ύπνο'], en: ['Breakfast, school, playing outside, fruit, early bedtime', 'No breakfast, video games all afternoon, crisps, late bedtime', 'Breakfast, school, sofa all day, fizzy drinks', 'Only sweets, running all night, no sleep'] },
    correct: 0,
    explanation: {
      el: 'Το σώμα θέλει τρία πράγματα κάθε μέρα: καλό φαγητό, κίνηση και ύπνο. Το πρωινό δίνει ενέργεια, το παιχνίδι έξω γυμνάζει, τα φρούτα και ο ύπνος το δυναμώνουν.',
      en: 'The body needs three things every day: good food, movement and sleep. Breakfast gives energy, playing outside is exercise, and fruit and sleep make it strong.',
    },
  },
];
