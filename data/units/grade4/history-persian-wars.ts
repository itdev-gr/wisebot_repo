/**
 * Δ' Δημοτικού · Ιστορία · Περσικοί Πόλεμοι
 * ===========================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 9–10. Story-like, nothing frightening.
 *
 * What the unit covers, in the order a Δ' class meets it:
 *   1–4   who the Persians were, Darius, the Athenians alone at Marathon (490 π.Χ.), the runner
 *   5–9   Xerxes comes back, Thermopylae, Leonidas and the 300 Spartans, the secret path
 *   10–14 Themistocles, the «wooden walls» (the ships), the narrow straits of Salamis
 *   15–18 Plataea, why the Greeks won, what the victory meant
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_HISTORY_PERSIAN_WARS: QuizQuestion[] = [
  // ── 1–4: the Persians and Marathon ──────────────────────────────────────────
  {
    q: { el: 'Οι Περσικοί Πόλεμοι ήταν πόλεμοι ανάμεσα στους Έλληνες και…', en: 'The Persian Wars were wars between the Greeks and…' },
    options: { el: ['τους Πέρσες', 'τους Ρωμαίους', 'τους Αιγύπτιους', 'τους Τρώες'], en: ['the Persians', 'the Romans', 'the Egyptians', 'the Trojans'] },
    correct: 0,
    explanation: {
      el: 'Οι Πέρσες είχαν μια τεράστια αυτοκρατορία στην Ασία και ήθελαν να κατακτήσουν και την Ελλάδα.',
      en: 'The Persians had a huge empire in Asia and wanted to conquer Greece too.',
    },
  },
  {
    q: { el: 'Ο βασιλιάς των Περσών που έστειλε πρώτος στρατό στην Ελλάδα λεγόταν…', en: 'The Persian king who first sent an army to Greece was called…' },
    options: { el: ['Λεωνίδας', 'Δαρείος', 'Ξέρξης', 'Μιλτιάδης'], en: ['Leonidas', 'Darius', 'Xerxes', 'Miltiades'] },
    correct: 1,
    explanation: {
      el: 'Ο Δαρείος ήταν ο βασιλιάς των Περσών. Ο γιος του, ο Ξέρξης, ήρθε αργότερα με ακόμα μεγαλύτερο στρατό.',
      en: 'Darius was the king of the Persians. His son Xerxes came later with an even bigger army.',
    },
  },
  {
    q: { el: 'Σε ποια μάχη νίκησαν οι Αθηναίοι τους Πέρσες το 490 π.Χ.;', en: 'In which battle did the Athenians beat the Persians in 490 BC?' },
    options: { el: ['Στη Σαλαμίνα', 'Στις Θερμοπύλες', 'Στον Μαραθώνα', 'Στις Πλαταιές'], en: ['Salamis', 'Thermopylae', 'Marathon', 'Plataea'] },
    correct: 2,
    explanation: {
      el: 'Στον Μαραθώνα, το 490 π.Χ., οι Αθηναίοι με αρχηγό τον Μιλτιάδη νίκησαν τους πολύ περισσότερους Πέρσες.',
      en: 'At Marathon, in 490 BC, the Athenians led by Miltiades beat a much larger Persian army.',
    },
  },
  {
    q: { el: 'Μετά τη μάχη του Μαραθώνα, ένας Αθηναίος έτρεξε μέχρι την Αθήνα για να πει τα νέα. Πώς θυμόμαστε σήμερα αυτή την απόσταση;', en: 'After the battle of Marathon, an Athenian ran all the way to Athens to bring the news. How do we remember that distance today?' },
    options: { el: ['Με τον αγώνα «μαραθώνιο»', 'Με τους Ολυμπιακούς Αγώνες', 'Με το άλμα εις μήκος', 'Με την κολύμβηση'], en: ['With the «marathon» race', 'With the Olympic Games', 'With the long jump', 'With swimming'] },
    correct: 0,
    explanation: {
      el: 'Ο αγώνας δρόμου «μαραθώνιος» πήρε το όνομά του από τον δρομέα που έτρεξε από τον Μαραθώνα στην Αθήνα για να φέρει τα νέα της νίκης.',
      en: 'The «marathon» race is named after the runner who ran from Marathon to Athens to bring news of the victory.',
    },
  },

  // ── 5–9: Xerxes, Thermopylae, Leonidas ──────────────────────────────────────
  {
    q: { el: 'Δέκα χρόνια μετά τον Μαραθώνα, ποιος Πέρσης βασιλιάς ήρθε με τεράστιο στρατό και στόλο;', en: 'Ten years after Marathon, which Persian king came with a huge army and fleet?' },
    options: { el: ['Ο Δαρείος', 'Ο Θεμιστοκλής', 'Ο Παυσανίας', 'Ο Ξέρξης'], en: ['Darius', 'Themistocles', 'Pausanias', 'Xerxes'] },
    correct: 3,
    explanation: {
      el: 'Ο Ξέρξης, ο γιος του Δαρείου, ήρθε με τόσο πολλούς στρατιώτες και πλοία που οι Έλληνες έπρεπε να ενωθούν για να τον αντιμετωπίσουν.',
      en: 'Xerxes, the son of Darius, came with so many soldiers and ships that the Greeks had to join together to face him.',
    },
  },
  {
    q: { el: 'Οι Θερμοπύλες ήταν…', en: 'Thermopylae was…' },
    options: { el: ['ένα μεγάλο λιμάνι', 'ένα στενό πέρασμα ανάμεσα σε βουνά και θάλασσα', 'ένα νησί', 'μια μεγάλη πεδιάδα'], en: ['a big harbour', 'a narrow pass between mountains and sea', 'an island', 'a wide plain'] },
    correct: 1,
    explanation: {
      el: 'Στις Θερμοπύλες το πέρασμα ήταν πολύ στενό. Έτσι λίγοι στρατιώτες μπορούσαν να σταματήσουν πολλούς.',
      en: 'At Thermopylae the pass was very narrow, so a few soldiers could hold back many.',
    },
  },
  {
    q: { el: 'Ποιος ήταν ο βασιλιάς της Σπάρτης που φύλαξε τις Θερμοπύλες;', en: 'Who was the king of Sparta who guarded Thermopylae?' },
    options: { el: ['Ο Μιλτιάδης', 'Ο Θεμιστοκλής', 'Ο Λεωνίδας', 'Ο Ξέρξης'], en: ['Miltiades', 'Themistocles', 'Leonidas', 'Xerxes'] },
    correct: 2,
    explanation: {
      el: 'Ο Λεωνίδας ήταν βασιλιάς της Σπάρτης. Έμεινε στις Θερμοπύλες με τους άντρες του για να κρατήσει τους Πέρσες.',
      en: 'Leonidas was king of Sparta. He stayed at Thermopylae with his men to hold back the Persians.',
    },
  },
  {
    q: { el: 'Πόσοι Σπαρτιάτες έμειναν με τον Λεωνίδα στις Θερμοπύλες;', en: 'How many Spartans stayed with Leonidas at Thermopylae?' },
    options: { el: ['30', '300', '3.000', '30.000'], en: ['30', '300', '3,000', '30,000'] },
    correct: 1,
    explanation: {
      el: 'Οι 300 Σπαρτιάτες του Λεωνίδα έμειναν μέχρι το τέλος. Γι\' αυτό λέμε ακόμα «οι 300 του Λεωνίδα».',
      en: 'The 300 Spartans of Leonidas stayed until the end. That is why we still say «the 300 of Leonidas».',
    },
  },
  {
    q: { el: 'Πώς κατάφεραν οι Πέρσες να περάσουν τις Θερμοπύλες;', en: 'How did the Persians manage to get past Thermopylae?' },
    options: { el: ['Έφτιαξαν μια γέφυρα', 'Ένας ντόπιος τούς έδειξε ένα κρυφό μονοπάτι στο βουνό', 'Ήρθαν με πλοία από τη θάλασσα', 'Οι Σπαρτιάτες έφυγαν'], en: ['They built a bridge', 'A local man showed them a secret path over the mountain', 'They came by ship from the sea', 'The Spartans left'] },
    correct: 1,
    explanation: {
      el: 'Ο Εφιάλτης έδειξε στους Πέρσες ένα κρυφό μονοπάτι. Έτσι βγήκαν πίσω από τους Έλληνες, αλλά ο Λεωνίδας δεν έφυγε.',
      en: 'Ephialtes showed the Persians a secret path. They came out behind the Greeks, but Leonidas did not leave.',
    },
  },

  // ── 10–14: Themistocles and Salamis ─────────────────────────────────────────
  {
    q: { el: 'Ποιος Αθηναίος έπεισε τους Αθηναίους να φτιάξουν πολλά πλοία πριν έρθει ο Ξέρξης;', en: 'Which Athenian persuaded the Athenians to build many ships before Xerxes came?' },
    options: { el: ['Ο Θεμιστοκλής', 'Ο Λεωνίδας', 'Ο Δαρείος', 'Ο Παυσανίας'], en: ['Themistocles', 'Leonidas', 'Darius', 'Pausanias'] },
    correct: 0,
    explanation: {
      el: 'Ο Θεμιστοκλής κατάλαβε ότι οι Έλληνες θα νικούσαν στη θάλασσα. Γι\' αυτό η Αθήνα έφτιαξε έναν μεγάλο στόλο.',
      en: 'Themistocles understood that the Greeks could win at sea. That is why Athens built a big fleet.',
    },
  },
  {
    q: { el: 'Το μαντείο είπε στους Αθηναίους ότι θα τους σώσουν τα «ξύλινα τείχη». Τι κατάλαβε ο Θεμιστοκλής;', en: 'The oracle told the Athenians that «wooden walls» would save them. What did Themistocles understand this meant?' },
    options: { el: ['Ξύλινους φράχτες γύρω από την πόλη', 'Τα πλοία, που είναι φτιαγμένα από ξύλο', 'Ξύλινες ασπίδες', 'Τα δέντρα του δάσους'], en: ['Wooden fences around the city', 'The ships, which are made of wood', 'Wooden shields', 'The trees of the forest'] },
    correct: 1,
    explanation: {
      el: 'Τα «ξύλινα τείχη» ήταν τα πλοία! Ο Θεμιστοκλής έπεισε τους Αθηναίους να πολεμήσουν στη θάλασσα.',
      en: 'The «wooden walls» were the ships! Themistocles persuaded the Athenians to fight at sea.',
    },
  },
  {
    q: { el: 'Η ναυμαχία της Σαλαμίνας έγινε…', en: 'The battle of Salamis was fought…' },
    options: { el: ['σε μια πεδιάδα', 'σε ένα στενό πέρασμα στα βουνά', 'στη θάλασσα, με πλοία', 'μέσα στην Αθήνα'], en: ['on a plain', 'in a narrow mountain pass', 'at sea, with ships', 'inside Athens'] },
    correct: 2,
    explanation: {
      el: 'Η λέξη «ναυμαχία» σημαίνει μάχη με πλοία. Στη Σαλαμίνα πολέμησαν οι στόλοι των Ελλήνων και των Περσών.',
      en: 'A «naval battle» is a battle with ships. At Salamis the Greek and Persian fleets fought each other.',
    },
  },
  {
    q: { el: 'Γιατί ο Θεμιστοκλής ήθελε η ναυμαχία να γίνει στα στενά της Σαλαμίνας;', en: 'Why did Themistocles want the sea battle to happen in the narrow straits of Salamis?' },
    options: { el: ['Γιατί εκεί η θάλασσα ήταν πιο ζεστή', 'Γιατί τα πολλά περσικά πλοία δεν χωρούσαν να κινηθούν στα στενά', 'Γιατί εκεί ζούσε η οικογένειά του', 'Γιατί οι Πέρσες δεν ήξεραν κολύμπι'], en: ['Because the sea was warmer there', 'Because the many Persian ships could not move easily in the narrow water', 'Because his family lived there', 'Because the Persians could not swim'] },
    correct: 1,
    explanation: {
      el: 'Στα στενά τα πολλά και μεγάλα περσικά πλοία μπερδεύονταν μεταξύ τους. Τα πιο ευκίνητα ελληνικά πλοία νίκησαν.',
      en: 'In the narrow straits the many big Persian ships got in each other\'s way. The nimble Greek ships won.',
    },
  },
  {
    q: { el: 'Ο Ξέρξης παρακολουθούσε τη ναυμαχία της Σαλαμίνας καθισμένος σε έναν θρόνο πάνω σε έναν λόφο. Τι είδε;', en: 'Xerxes watched the battle of Salamis sitting on a throne on a hill. What did he see?' },
    options: { el: ['Τον στόλο του να νικάει', 'Τον στόλο του να χάνει από τους Έλληνες', 'Τους Έλληνες να φεύγουν', 'Μια μεγάλη καταιγίδα'], en: ['His fleet winning', 'His fleet losing to the Greeks', 'The Greeks sailing away', 'A big storm'] },
    correct: 1,
    explanation: {
      el: 'Ο Ξέρξης είδε τον τεράστιο στόλο του να χάνει. Απογοητευμένος, γύρισε πίσω στην Περσία.',
      en: 'Xerxes watched his huge fleet lose. Disappointed, he went back to Persia.',
    },
  },

  // ── 15–18: Plataea and what it all meant ────────────────────────────────────
  {
    q: { el: 'Η τελευταία μεγάλη μάχη των Περσικών Πολέμων στην Ελλάδα έγινε…', en: 'The last big battle of the Persian Wars in Greece was fought at…' },
    options: { el: ['στον Μαραθώνα', 'στις Θερμοπύλες', 'στη Σαλαμίνα', 'στις Πλαταιές'], en: ['Marathon', 'Thermopylae', 'Salamis', 'Plataea'] },
    correct: 3,
    explanation: {
      el: 'Στις Πλαταιές οι Έλληνες, ενωμένοι, νίκησαν τον περσικό στρατό που είχε μείνει στην Ελλάδα.',
      en: 'At Plataea the united Greeks beat the Persian army that had stayed behind in Greece.',
    },
  },
  {
    q: { el: 'Ποιος έμεινε με τον στρατό του στην Ελλάδα και πολέμησε στις Πλαταιές, αφού ο Ξέρξης έφυγε;', en: 'Who stayed in Greece with his army and fought at Plataea after Xerxes left?' },
    options: { el: ['Ο Μαρδόνιος, στρατηγός του Ξέρξη', 'Ο Δαρείος', 'Ο Μιλτιάδης', 'Ο Λεωνίδας'], en: ['Mardonius, a general of Xerxes', 'Darius', 'Miltiades', 'Leonidas'] },
    correct: 0,
    explanation: {
      el: 'Ο Ξέρξης άφησε πίσω τον στρατηγό του, τον Μαρδόνιο. Οι Έλληνες τον νίκησαν στις Πλαταιές.',
      en: 'Xerxes left his general Mardonius behind. The Greeks defeated him at Plataea.',
    },
  },
  {
    q: { el: 'Βάλε τις μάχες στη σωστή σειρά, από την πρώτη στην τελευταία.', en: 'Put the battles in the right order, from first to last.' },
    options: { el: ['Σαλαμίνα → Μαραθώνας → Θερμοπύλες → Πλαταιές', 'Μαραθώνας → Θερμοπύλες → Σαλαμίνα → Πλαταιές', 'Θερμοπύλες → Μαραθώνας → Πλαταιές → Σαλαμίνα', 'Πλαταιές → Σαλαμίνα → Θερμοπύλες → Μαραθώνας'], en: ['Salamis → Marathon → Thermopylae → Plataea', 'Marathon → Thermopylae → Salamis → Plataea', 'Thermopylae → Marathon → Plataea → Salamis', 'Plataea → Salamis → Thermopylae → Marathon'] },
    correct: 1,
    explanation: {
      el: 'Πρώτα ο Μαραθώνας (490 π.Χ.). Δέκα χρόνια μετά, οι Θερμοπύλες και η Σαλαμίνα. Τελευταίες οι Πλαταιές.',
      en: 'First Marathon (490 BC). Ten years later, Thermopylae and Salamis. Last of all, Plataea.',
    },
  },
  {
    q: { el: 'Ποιος ήταν ο πιο σημαντικός λόγος που οι Έλληνες νίκησαν τους πολύ περισσότερους Πέρσες;', en: 'What was the most important reason the Greeks beat the far more numerous Persians?' },
    options: { el: ['Είχαν περισσότερους στρατιώτες', 'Οι Πέρσες δεν ήξεραν να πολεμούν', 'Ενώθηκαν, είχαν καλό σχέδιο και πολεμούσαν για την ελευθερία τους', 'Ο Ξέρξης δεν ήθελε να νικήσει'], en: ['They had more soldiers', 'The Persians did not know how to fight', 'They united, had good plans and fought for their freedom', 'Xerxes did not want to win'] },
    correct: 2,
    explanation: {
      el: 'Οι ελληνικές πόλεις ξέχασαν τις διαφορές τους και ενώθηκαν. Με έξυπνα σχέδια, σαν του Θεμιστοκλή, κράτησαν την Ελλάδα ελεύθερη.',
      en: 'The Greek cities forgot their differences and joined together. With clever plans, like those of Themistocles, they kept Greece free.',
    },
  },
];
