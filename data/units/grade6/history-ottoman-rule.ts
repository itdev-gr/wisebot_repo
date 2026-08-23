/**
 * ΣΤ' Δημοτικού · Ιστορία · Τουρκοκρατία — οι Έλληνες κάτω από οθωμανική κυριαρχία
 * =================================================================================
 * Original questions (curriculum topics only, no textbook text). Language level: 11–12.
 *
 * What the unit covers, in the order a ΣΤ' class meets it:
 *   1–4   1453: the fall of Constantinople, Mehmed II, Constantine XI, the new capital
 *   5–8   life as a raya: the word, the head tax, the tithe, the village elders
 *   9–12  klephts and armatoloi: who they were, where they lived, what they shared
 *   13–14 the Souliotes of Epirus and Ali Pasha
 *   15    the Patriarch in Constantinople and his role for the rayas
 *   16–18 the awakening: Rigas (Thourios, his dream) and Korais (education)
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_HISTORY_OTTOMAN_RULE: QuizQuestion[] = [
  // ── 1–4: 1453 ───────────────────────────────────────────────────────────────
  {
    q: { el: 'Ποια χρονιά έπεσε η Κωνσταντινούπολη στους Οθωμανούς;', en: 'In which year did Constantinople fall to the Ottomans?' },
    options: { el: ['1453', '1821', '1204', '1492'], en: ['1453', '1821', '1204', '1492'] },
    correct: 0,
    explanation: {
      el: 'Η Κωνσταντινούπολη έπεσε το 1453. Από τότε ξεκινά η περίοδος που λέμε Τουρκοκρατία.',
      en: 'Constantinople fell in 1453. That year marks the start of the period we call Ottoman rule.',
    },
  },
  {
    q: { el: 'Ποιος σουλτάνος οδήγησε τον στρατό που πήρε την Κωνσταντινούπολη;', en: 'Which sultan led the army that took Constantinople?' },
    options: { el: ['Ο Σουλεϊμάν', 'Ο Ιουστινιανός', 'Ο Μωάμεθ Β΄ ο Πορθητής', 'Ο Μέγας Αλέξανδρος'], en: ['Suleiman', 'Justinian', 'Mehmed II the Conqueror', 'Alexander the Great'] },
    correct: 2,
    explanation: {
      el: 'Ο Μωάμεθ Β΄ ήταν μόλις 21 ετών όταν κατέκτησε την Πόλη. Γι\' αυτό τον είπαν «Πορθητή», δηλαδή «αυτόν που κυριεύει».',
      en: 'Mehmed II was only 21 years old when he conquered the City. That is why he was called “the Conqueror”.',
    },
  },
  {
    q: { el: 'Ποιος ήταν ο τελευταίος αυτοκράτορας του Βυζαντίου;', en: 'Who was the last emperor of Byzantium?' },
    options: { el: ['Ο Ιουστινιανός', 'Ο Ηράκλειος', 'Ο Βασίλειος Β΄', 'Ο Κωνσταντίνος ΙΑ΄ Παλαιολόγος'], en: ['Justinian', 'Heraclius', 'Basil II', 'Constantine XI Palaiologos'] },
    correct: 3,
    explanation: {
      el: 'Ο Κωνσταντίνος ΙΑ΄ Παλαιολόγος ήταν ο τελευταίος αυτοκράτορας. Υπερασπίστηκε την Πόλη ως το τέλος το 1453.',
      en: 'Constantine XI Palaiologos was the last emperor. He defended the City until the very end in 1453.',
    },
  },
  {
    q: { el: 'Μετά το 1453, ποια πόλη έγινε πρωτεύουσα της Οθωμανικής Αυτοκρατορίας;', en: 'After 1453, which city became the capital of the Ottoman Empire?' },
    options: { el: ['Η Αθήνα', 'Η Κωνσταντινούπολη', 'Η Θεσσαλονίκη', 'Η Βενετία'], en: ['Athens', 'Constantinople', 'Thessaloniki', 'Venice'] },
    correct: 1,
    explanation: {
      el: 'Οι Οθωμανοί έκαναν την Κωνσταντινούπολη πρωτεύουσά τους. Εκεί έμενε ο σουλτάνος και από εκεί κυβερνούσε.',
      en: 'The Ottomans made Constantinople their capital. The sultan lived there and ruled from there.',
    },
  },

  // ── 5–8: life as a raya ─────────────────────────────────────────────────────
  {
    q: { el: 'Πώς ονόμαζαν οι Οθωμανοί τους υπόδουλους Έλληνες;', en: 'What did the Ottomans call the Greeks who lived under their rule?' },
    options: { el: ['Ραγιάδες', 'Κλέφτες', 'Αρματολούς', 'Φαναριώτες'], en: ['Rayas', 'Klephts', 'Armatoloi', 'Phanariots'] },
    correct: 0,
    explanation: {
      el: 'Ραγιάδες έλεγαν τους υπηκόους που δεν ήταν μουσουλμάνοι. Η λέξη σημαίνει «κοπάδι» και έδειχνε ότι είχαν λιγότερα δικαιώματα.',
      en: 'Rayas were the subjects who were not Muslims. The word means “flock” and showed that they had fewer rights.',
    },
  },
  {
    q: { el: 'Τι ήταν το «χαράτσι»;', en: 'What was the “haratsi”?' },
    options: { el: ['Ένα παραδοσιακό γλυκό', 'Ένα είδος πλοίου', 'Ένας φόρος που πλήρωνε κάθε ραγιάς', 'Ένα φρούριο στα βουνά'], en: ['A traditional sweet', 'A type of ship', 'A tax every raya had to pay', 'A fortress in the mountains'] },
    correct: 2,
    explanation: {
      el: 'Το χαράτσι ήταν ο κεφαλικός φόρος: κάθε ραγιάς, «κατά κεφαλή», έπρεπε να πληρώνει για να τον αφήνουν ήσυχο.',
      en: 'The haratsi was the head tax: every raya, “per head”, had to pay it so that he would be left in peace.',
    },
  },
  {
    q: { el: 'Η «δεκάτη» ήταν φόρος που έπαιρνε…', en: 'The “tithe” was a tax that took…' },
    options: { el: ['το ένα δέκατο από τη σοδειά', 'δέκα ζώα από κάθε χωριό', 'δέκα νομίσματα κάθε μήνα', 'το μισό σπίτι του χωρικού'], en: ['one tenth of the harvest', 'ten animals from every village', 'ten coins every month', 'half of the farmer\'s house'] },
    correct: 0,
    explanation: {
      el: 'Δεκάτη = ένα στα δέκα. Από κάθε 10 σακιά σιτάρι ο χωρικός έδινε το 1 στους Οθωμανούς.',
      en: 'Tithe = one in ten. Out of every 10 sacks of wheat, the farmer gave 1 to the Ottomans.',
    },
  },
  {
    q: { el: 'Ποιοι φρόντιζαν τις υποθέσεις του ελληνικού χωριού και μάζευαν τους φόρους για τους Οθωμανούς;', en: 'Who took care of the Greek village\'s affairs and collected the taxes for the Ottomans?' },
    options: { el: ['Οι κλέφτες', 'Οι προεστοί (δημογέροντες)', 'Οι ναύτες', 'Οι δάσκαλοι'], en: ['The klephts', 'The elders (proestoi)', 'The sailors', 'The teachers'] },
    correct: 1,
    explanation: {
      el: 'Κάθε κοινότητα διάλεγε προεστούς ή δημογέροντες. Αυτοί μιλούσαν με τους Οθωμανούς και μοίραζαν τους φόρους στο χωριό.',
      en: 'Each community chose elders, the proestoi. They spoke with the Ottomans and shared out the taxes in the village.',
    },
  },

  // ── 9–12: klephts and armatoloi ─────────────────────────────────────────────
  {
    q: { el: 'Ποιοι ήταν οι κλέφτες την εποχή της Τουρκοκρατίας;', en: 'Who were the klephts in the time of Ottoman rule?' },
    options: { el: ['Ένοπλοι Έλληνες που έφυγαν στα βουνά και αντιστέκονταν', 'Έμποροι που ταξίδευαν στη Βενετία', 'Οθωμανοί φοροεισπράκτορες', 'Ναύτες στα νησιά του Αιγαίου'], en: ['Armed Greeks who went to the mountains and resisted', 'Merchants who travelled to Venice', 'Ottoman tax collectors', 'Sailors on the Aegean islands'] },
    correct: 0,
    explanation: {
      el: 'Οι κλέφτες δεν ήταν «κλέφτες» όπως σήμερα. Ήταν Έλληνες που δεν δέχτηκαν να ζουν σαν ραγιάδες και ανέβηκαν ένοπλοι στα βουνά.',
      en: 'The klephts were not “thieves” as we mean today. They were Greeks who refused to live as rayas and took up arms in the mountains.',
    },
  },
  {
    q: { el: 'Πού είχαν τα λημέρια τους οι κλέφτες;', en: 'Where did the klephts have their hideouts?' },
    options: { el: ['Στα λιμάνια', 'Στα ψηλά βουνά', 'Στα παλάτια', 'Στις μεγάλες πόλεις'], en: ['In the harbours', 'High in the mountains', 'In the palaces', 'In the big cities'] },
    correct: 1,
    explanation: {
      el: 'Τα λημέρια ήταν κρυψώνες ψηλά στα βουνά, όπως ο Όλυμπος και η Πίνδος. Εκεί οι Οθωμανοί δύσκολα τους έφταναν.',
      en: 'Their hideouts were high in the mountains, such as Olympus and Pindus. The Ottomans could hardly reach them there.',
    },
  },
  {
    q: { el: 'Ποιοι ήταν οι αρματολοί;', en: 'Who were the armatoloi?' },
    options: { el: ['Ένοπλοι Έλληνες που φύλαγαν τα περάσματα με άδεια των Οθωμανών', 'Οθωμανοί στρατιώτες του σουλτάνου', 'Έλληνες έμποροι της Κωνσταντινούπολης', 'Μοναχοί που αντέγραφαν βιβλία'], en: ['Armed Greeks who guarded the mountain passes with Ottoman permission', 'Ottoman soldiers of the sultan', 'Greek merchants of Constantinople', 'Monks who copied books'] },
    correct: 0,
    explanation: {
      el: 'Οι Οθωμανοί δεν μπορούσαν να ελέγξουν τα βουνά, γι\' αυτό έδιναν σε Έλληνες οπλισμένους, τους αρματολούς, τη φύλαξη των περασμάτων.',
      en: 'The Ottomans could not control the mountains, so they let armed Greeks, the armatoloi, guard the passes for them.',
    },
  },
  {
    q: { el: 'Τι κοινό είχαν οι κλέφτες και οι αρματολοί;', en: 'What did the klephts and the armatoloi have in common?' },
    options: { el: ['Και οι δύο ήταν ναύτες', 'Και οι δύο ζούσαν στην Κωνσταντινούπολη', 'Και οι δύο ήταν Οθωμανοί αξιωματούχοι', 'Και οι δύο ήταν ένοπλοι Έλληνες που ήξεραν καλά τα βουνά'], en: ['Both were sailors', 'Both lived in Constantinople', 'Both were Ottoman officials', 'Both were armed Greeks who knew the mountains well'] },
    correct: 3,
    explanation: {
      el: 'Κλέφτες και αρματολοί ήταν και οι δύο οπλισμένοι Έλληνες των βουνών. Συχνά ένας αρματολός γινόταν κλέφτης και το αντίθετο!',
      en: 'Klephts and armatoloi were both armed Greeks of the mountains. Often an armatolos became a klepht, and the other way round!',
    },
  },

  // ── 13–14: the Souliotes ────────────────────────────────────────────────────
  {
    q: { el: 'Σε ποια περιοχή της Ελλάδας βρίσκεται το Σούλι;', en: 'In which region of Greece is Souli?' },
    options: { el: ['Στην Κρήτη', 'Στην Πελοπόννησο', 'Στην Ήπειρο', 'Στη Μακεδονία'], en: ['In Crete', 'In the Peloponnese', 'In Epirus', 'In Macedonia'] },
    correct: 2,
    explanation: {
      el: 'Το Σούλι είναι στα βουνά της Ηπείρου. Οι Σουλιώτες έχτισαν εκεί τα χωριά τους, σε μέρος δύσκολο για κάθε εχθρό.',
      en: 'Souli is in the mountains of Epirus. The Souliotes built their villages there, in a place hard for any enemy to reach.',
    },
  },
  {
    q: { el: 'Με ποιον Οθωμανό ηγεμόνα πολέμησαν για χρόνια οι Σουλιώτες;', en: 'Which Ottoman ruler did the Souliotes fight against for years?' },
    options: { el: ['Τον Αλή Πασά των Ιωαννίνων', 'Τον Μωάμεθ Β΄', 'Τον Σουλεϊμάν τον Μεγαλοπρεπή', 'Τον Ιμπραήμ της Αιγύπτου'], en: ['Ali Pasha of Ioannina', 'Mehmed II', 'Suleiman the Magnificent', 'Ibrahim of Egypt'] },
    correct: 0,
    explanation: {
      el: 'Ο Αλή Πασάς κυβερνούσε τα Ιωάννινα και ήθελε να υποτάξει το Σούλι. Οι Σουλιώτες, άντρες και γυναίκες, αντιστάθηκαν για πολλά χρόνια.',
      en: 'Ali Pasha ruled Ioannina and wanted to subdue Souli. The Souliotes, men and women alike, resisted him for many years.',
    },
  },

  // ── 15: the Patriarch ───────────────────────────────────────────────────────
  {
    q: { el: 'Ποιον ρόλο έδωσε ο σουλτάνος στον Πατριάρχη Κωνσταντινουπόλεως;', en: 'What role did the sultan give to the Patriarch of Constantinople?' },
    options: { el: ['Αρχηγό των κλεφτών', 'Διοικητή της Αθήνας', 'Υπεύθυνο για όλους τους Ορθόδοξους ραγιάδες', 'Ναύαρχο του στόλου'], en: ['Leader of the klephts', 'Governor of Athens', 'Responsible for all the Orthodox rayas', 'Admiral of the fleet'] },
    correct: 2,
    explanation: {
      el: 'Ο σουλτάνος θεωρούσε τον Πατριάρχη υπεύθυνο για τους Ορθόδοξους ραγιάδες. Έτσι ο Πατριάρχης ήταν και «εθνάρχης», αρχηγός του λαού.',
      en: 'The sultan held the Patriarch responsible for the Orthodox rayas. So the Patriarch was also the “ethnarch”, the leader of the people.',
    },
  },

  // ── 16–18: Rigas and Korais ─────────────────────────────────────────────────
  {
    q: { el: 'Ποιο ποίημα έγραψε ο Ρήγας Βελεστινλής για να ξεσηκώσει τους Έλληνες;', en: 'Which poem did Rigas Velestinlis write to rouse the Greeks?' },
    options: { el: ['Την «Οδύσσεια»', 'Τον «Θούριο»', 'Τον «Ύμνο εις την Ελευθερίαν»', 'Τα «Απομνημονεύματα»'], en: ['The “Odyssey”', 'The “Thourios”', 'The “Hymn to Liberty”', 'The “Memoirs”'] },
    correct: 1,
    explanation: {
      el: 'Ο «Θούριος» είναι πολεμικό τραγούδι του Ρήγα. Ο πιο γνωστός στίχος του λέει πως είναι καλύτερη μιας ώρας ελεύθερη ζωή.',
      en: 'The “Thourios” is Rigas\'s war song. Its most famous line says that one hour of free life is better than slavery.',
    },
  },
  {
    q: { el: 'Ποιο ήταν το μεγάλο όνειρο του Ρήγα;', en: 'What was Rigas\'s great dream?' },
    options: { el: ['Να γίνει σουλτάνος', 'Να ανοίξει μαγαζί στη Βιέννη', 'Να ζήσει στα βουνά σαν κλέφτης', 'Να ελευθερωθούν όλοι οι λαοί των Βαλκανίων μαζί'], en: ['To become sultan', 'To open a shop in Vienna', 'To live in the mountains as a klepht', 'For all the peoples of the Balkans to become free together'] },
    correct: 3,
    explanation: {
      el: 'Ο Ρήγας ονειρευόταν Έλληνες, Βούλγαρους, Σέρβους, Αλβανούς και άλλους λαούς ελεύθερους, μαζί σε ένα κράτος. Τύπωσε τα σχέδιά του στη Βιέννη.',
      en: 'Rigas dreamed of Greeks, Bulgarians, Serbs, Albanians and other peoples being free, together in one state. He printed his plans in Vienna.',
    },
  },
  {
    q: { el: 'Πώς πίστευε ο Αδαμάντιος Κοραής ότι θα ελευθερωθούν οι Έλληνες;', en: 'How did Adamantios Korais believe the Greeks would become free?' },
    options: { el: ['Μόνο με τα όπλα', 'Με τη βοήθεια του σουλτάνου', 'Με τη μόρφωση και τα βιβλία', 'Με το εμπόριο στη θάλασσα'], en: ['Only with weapons', 'With the sultan\'s help', 'Through education and books', 'Through trade at sea'] },
    correct: 2,
    explanation: {
      el: 'Ο Κοραής ζούσε στο Παρίσι και τύπωνε αρχαίους Έλληνες συγγραφείς για τους Έλληνες. Πίστευε ότι ένας μορφωμένος λαός ξέρει να γίνει ελεύθερος.',
      en: 'Korais lived in Paris and printed ancient Greek authors for the Greeks. He believed that an educated people knows how to become free.',
    },
  },
];
