/**
 * ΣΤ' Δημοτικού · Ιστορία · Η Επανάσταση του 1821
 * ================================================
 * Original questions (curriculum topics only — no textbook text). Language level: 11–12.
 * What the unit covers, in order:
 *   1–3   the Filiki Eteria: what it was, where it began, why it was secret
 *   4–5   Alexandros Ypsilantis and the start of the Revolution in 1821
 *   6–9   Kolokotronis, his nickname, and the capture of Tripolitsa
 *   10–12 the sea: Bouboulina, Kanaris and the fire-ships
 *   13–16 Dervenakia (1822) and Markos Botsaris of Souli
 *   17–18 Papaflessas and the battle of Maniaki
 * Distractors are the mix-ups children really make (wrong hero for the deed, wrong place, wrong year).
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_HISTORY_REVOLUTION_1821: QuizQuestion[] = [
  // ── 1–3: the Filiki Eteria ────────────────────────────────────────────────
  {
    q: { el: 'Ποια χρονιά ξεκίνησε η Ελληνική Επανάσταση;', en: 'In which year did the Greek Revolution begin?' },
    options: { el: ['1821', '1453', '1912', '1830'], en: ['1821', '1453', '1912', '1830'] },
    correct: 0,
    explanation: {
      el: 'Η Επανάσταση ξεκίνησε το 1821. Γι\' αυτό τη γιορτάζουμε κάθε 25η Μαρτίου.',
      en: 'The Revolution began in 1821. That is why Greece celebrates it every 25th of March.',
    },
  },
  {
    q: { el: 'Τι ήταν η Φιλική Εταιρεία;', en: 'What was the Filiki Eteria?' },
    options: {
      el: ['Μια μυστική οργάνωση που ετοίμαζε την Επανάσταση', 'Ένα εμπορικό κατάστημα στην Αθήνα', 'Ένα σχολείο για ναυτικούς', 'Μια ομάδα ζωγράφων'],
      en: ['A secret society that prepared the Revolution', 'A shop in Athens', 'A school for sailors', 'A group of painters'],
    },
    correct: 0,
    explanation: {
      el: 'Η Φιλική Εταιρεία ήταν μυστική οργάνωση. Τα μέλη της ετοίμαζαν κρυφά τον αγώνα για την ελευθερία.',
      en: 'The Filiki Eteria was a secret society. Its members quietly prepared the fight for freedom.',
    },
  },
  {
    q: { el: 'Σε ποια πόλη ιδρύθηκε η Φιλική Εταιρεία το 1814;', en: 'In which city was the Filiki Eteria founded in 1814?' },
    options: { el: ['Στην Αθήνα', 'Στην Οδησσό', 'Στο Ναύπλιο', 'Στη Θεσσαλονίκη'], en: ['Athens', 'Odessa', 'Nafplio', 'Thessaloniki'] },
    correct: 1,
    explanation: {
      el: 'Ιδρύθηκε στην Οδησσό, μια πόλη μακριά από την Ελλάδα, από τρεις Έλληνες εμπόρους. Μακριά από τους Οθωμανούς ήταν πιο ασφαλές.',
      en: 'It was founded in Odessa, a city far from Greece, by three Greek merchants. Far from the Ottomans it was safer.',
    },
  },

  // ── 4–5: Ypsilantis and the start ─────────────────────────────────────────
  {
    q: { el: 'Ποιος έγινε αρχηγός της Φιλικής Εταιρείας και σήκωσε τη σημαία της Επανάστασης το 1821;', en: 'Who became leader of the Filiki Eteria and raised the flag of the Revolution in 1821?' },
    options: { el: ['Ο Αλέξανδρος Υψηλάντης', 'Ο Θεόδωρος Κολοκοτρώνης', 'Ο Κωνσταντίνος Κανάρης', 'Ο Μάρκος Μπότσαρης'], en: ['Alexandros Ypsilantis', 'Theodoros Kolokotronis', 'Konstantinos Kanaris', 'Markos Botsaris'] },
    correct: 0,
    explanation: {
      el: 'Ο Αλέξανδρος Υψηλάντης ήταν ο αρχηγός της Φιλικής Εταιρείας. Εκείνος έδωσε το σύνθημα για την αρχή του αγώνα.',
      en: 'Alexandros Ypsilantis was the leader of the Filiki Eteria. He gave the signal for the start of the fight.',
    },
  },
  {
    q: { el: 'Πού ξεκίνησε ο Υψηλάντης τον αγώνα, τον Φεβρουάριο του 1821;', en: 'Where did Ypsilantis start the fight, in February 1821?' },
    options: { el: ['Στην Κρήτη', 'Στην Πελοπόννησο', 'Στη Μολδοβλαχία', 'Στα νησιά του Αιγαίου'], en: ['In Crete', 'In the Peloponnese', 'In Moldavia-Wallachia', 'In the Aegean islands'] },
    correct: 2,
    explanation: {
      el: 'Ο Υψηλάντης πέρασε τον ποταμό Προύθο και ξεκίνησε στη Μολδοβλαχία, στον βορρά. Λίγο αργότερα ξεσηκώθηκε και η Πελοπόννησος.',
      en: 'Ypsilantis crossed the river Prut and began in Moldavia-Wallachia, in the north. Soon after, the Peloponnese rose too.',
    },
  },

  // ── 6–9: Kolokotronis and Tripolitsa ──────────────────────────────────────
  {
    q: { el: 'Ποιο παρατσούκλι είχε ο Θεόδωρος Κολοκοτρώνης;', en: 'What was Theodoros Kolokotronis\' nickname?' },
    options: { el: ['Ο Γέρος του Μοριά', 'Ο Καπετάν Θάλασσα', 'Ο Λιοντάρι της Ρούμελης', 'Ο Γίγαντας της Κρήτης'], en: ['The Old Man of the Morea', 'Captain Sea', 'The Lion of Roumeli', 'The Giant of Crete'] },
    correct: 0,
    explanation: {
      el: 'Τον έλεγαν «Γέρο του Μοριά». Μοριάς είναι το παλιό όνομα της Πελοποννήσου, όπου πολέμησε.',
      en: 'He was called “the Old Man of the Morea”. Morea is the old name for the Peloponnese, where he fought.',
    },
  },
  {
    q: { el: 'Ο Κολοκοτρώνης ήταν κυρίως…', en: 'Kolokotronis was mainly…' },
    options: { el: ['ναύαρχος στα πλοία', 'αρχηγός στρατού στη στεριά', 'έμπορος στην Οδησσό', 'δάσκαλος σε σχολείο'], en: ['an admiral on ships', 'an army leader on land', 'a merchant in Odessa', 'a teacher at a school'] },
    correct: 1,
    explanation: {
      el: 'Ο Κολοκοτρώνης ήταν ο μεγάλος αρχηγός του στρατού στην Πελοπόννησο. Ήξερε τα βουνά σαν την παλάμη του.',
      en: 'Kolokotronis was the great army leader in the Peloponnese. He knew the mountains like the back of his hand.',
    },
  },
  {
    q: { el: 'Ποια πόλη κατέλαβαν οι Έλληνες τον Σεπτέμβριο του 1821, με αρχηγό τον Κολοκοτρώνη;', en: 'Which city did the Greeks capture in September 1821, led by Kolokotronis?' },
    options: { el: ['Την Πάτρα', 'Την Αθήνα', 'Την Τριπολιτσά', 'Το Μεσολόγγι'], en: ['Patras', 'Athens', 'Tripolitsa', 'Missolonghi'] },
    correct: 2,
    explanation: {
      el: 'Η Τριπολιτσά ήταν το κέντρο των Οθωμανών στην Πελοπόννησο. Η κατάληψή της ήταν η πρώτη μεγάλη νίκη.',
      en: 'Tripolitsa was the Ottoman centre in the Peloponnese. Capturing it was the first big victory.',
    },
  },
  {
    q: { el: 'Γιατί ήταν τόσο σημαντική η Τριπολιτσά για τους Έλληνες;', en: 'Why was Tripolitsa so important to the Greeks?' },
    options: {
      el: ['Ήταν το μεγαλύτερο λιμάνι της Ελλάδας', 'Βρισκόταν στο κέντρο της Πελοποννήσου και την έλεγχε', 'Εκεί ιδρύθηκε η Φιλική Εταιρεία', 'Είχε το μόνο σχολείο της εποχής'],
      en: ['It was the biggest harbour in Greece', 'It sat in the middle of the Peloponnese and controlled it', 'The Filiki Eteria was founded there', 'It had the only school of the time'],
    },
    correct: 1,
    explanation: {
      el: 'Η Τριπολιτσά είναι στη μέση της Πελοποννήσου. Όποιος την είχε, έλεγχε όλη την περιοχή.',
      en: 'Tripolitsa is in the middle of the Peloponnese. Whoever held it controlled the whole region.',
    },
  },

  // ── 10–12: the sea — Bouboulina and Kanaris ───────────────────────────────
  {
    q: { el: 'Η Λασκαρίνα Μπουμπουλίνα ήταν…', en: 'Laskarina Bouboulina was…' },
    options: { el: ['μια καπετάνισσα με δικά της πλοία', 'μια δασκάλα στο Ναύπλιο', 'η μητέρα του Κολοκοτρώνη', 'μια ζωγράφος από την Κρήτη'], en: ['a captain with her own ships', 'a teacher in Nafplio', 'Kolokotronis\' mother', 'a painter from Crete'] },
    correct: 0,
    explanation: {
      el: 'Η Μπουμπουλίνα είχε δικά της πλοία και τα οδηγούσε η ίδια. Ήταν από τις πιο γενναίες γυναίκες του αγώνα.',
      en: 'Bouboulina had her own ships and led them herself. She was one of the bravest women of the fight.',
    },
  },
  {
    q: { el: 'Από ποιο νησί ξεκίνησε η Μπουμπουλίνα με το πλοίο της «Αγαμέμνων»;', en: 'From which island did Bouboulina set sail with her ship “Agamemnon”?' },
    options: { el: ['Από την Κρήτη', 'Από τις Σπέτσες', 'Από τη Ρόδο', 'Από την Κέρκυρα'], en: ['Crete', 'Spetses', 'Rhodes', 'Corfu'] },
    correct: 1,
    explanation: {
      el: 'Η Μπουμπουλίνα ζούσε στις Σπέτσες. Από εκεί έφυγε με το μεγάλο της πλοίο, τον «Αγαμέμνονα».',
      en: 'Bouboulina lived on Spetses. From there she sailed with her big ship, the “Agamemnon”.',
    },
  },
  {
    q: { el: 'Ο Κωνσταντίνος Κανάρης έγινε διάσημος γιατί…', en: 'Konstantinos Kanaris became famous because…' },
    options: {
      el: ['έκαψε εχθρικά πλοία με πυρπολικά', 'κατέλαβε την Τριπολιτσά', 'ίδρυσε τη Φιλική Εταιρεία', 'πολέμησε στα Δερβενάκια'],
      en: ['he burned enemy ships with fire-ships', 'he captured Tripolitsa', 'he founded the Filiki Eteria', 'he fought at Dervenakia'],
    },
    correct: 0,
    explanation: {
      el: 'Ο Κανάρης, από τα Ψαρά, χρησιμοποιούσε πυρπολικά: μικρά πλοία γεμάτα καύσιμα που τα κολλούσε στα εχθρικά πλοία. Έτσι έκαψε τη ναυαρχίδα του εχθρού στη Χίο.',
      en: 'Kanaris, from Psara, used fire-ships: small boats full of fuel that he steered onto enemy ships. That is how he burned the enemy flagship near Chios.',
    },
  },

  // ── 13–16: Dervenakia and Botsaris ────────────────────────────────────────
  {
    q: { el: 'Τι είναι τα Δερβενάκια;', en: 'What is Dervenakia?' },
    options: { el: ['Ένα στενό πέρασμα ανάμεσα σε βουνά', 'Ένα νησί στο Αιγαίο', 'Ένα κάστρο στην Κρήτη', 'Ένα ποτάμι στον βορρά'], en: ['A narrow pass between mountains', 'An island in the Aegean', 'A castle in Crete', 'A river in the north'] },
    correct: 0,
    explanation: {
      el: 'Τα Δερβενάκια είναι στενά περάσματα ανάμεσα σε βουνά, κοντά στην Κόρινθο. Ένας μεγάλος στρατός περνά από εκεί δύσκολα.',
      en: 'Dervenakia is a set of narrow mountain passes near Corinth. A big army has trouble getting through.',
    },
  },
  {
    q: { el: 'Ποιος οδήγησε τους Έλληνες στη νίκη στα Δερβενάκια το 1822;', en: 'Who led the Greeks to victory at Dervenakia in 1822?' },
    options: { el: ['Ο Παπαφλέσσας', 'Ο Κανάρης', 'Ο Κολοκοτρώνης', 'Ο Υψηλάντης'], en: ['Papaflessas', 'Kanaris', 'Kolokotronis', 'Ypsilantis'] },
    correct: 2,
    explanation: {
      el: 'Ο Κολοκοτρώνης έκρυψε τους άντρες του στα βουνά και παγίδευσε τον μεγάλο στρατό του Δράμαλη στα στενά. Ήταν η πιο μεγάλη νίκη του.',
      en: 'Kolokotronis hid his men in the mountains and trapped Dramali\'s huge army in the passes. It was his greatest victory.',
    },
  },
  {
    q: { el: 'Από ποια περιοχή καταγόταν ο Μάρκος Μπότσαρης;', en: 'Which region did Markos Botsaris come from?' },
    options: { el: ['Από τη Μάνη', 'Από το Σούλι', 'Από τα Ψαρά', 'Από την Ύδρα'], en: ['Mani', 'Souli', 'Psara', 'Hydra'] },
    correct: 1,
    explanation: {
      el: 'Ο Μπότσαρης ήταν Σουλιώτης, από τα βουνά της Ηπείρου. Οι Σουλιώτες ήταν ξακουστοί πολεμιστές.',
      en: 'Botsaris was a Souliot, from the mountains of Epirus. The Souliots were famous warriors.',
    },
  },
  {
    q: { el: 'Ο Μάρκος Μπότσαρης έπεσε ηρωικά το 1823 κοντά στο…', en: 'Markos Botsaris fell heroically in 1823 near…' },
    options: { el: ['Ναύπλιο', 'Καρπενήσι', 'Ηράκλειο', 'Βόλο'], en: ['Nafplio', 'Karpenisi', 'Heraklion', 'Volos'] },
    correct: 1,
    explanation: {
      el: 'Ο Μπότσαρης επιτέθηκε νύχτα στο στρατόπεδο του εχθρού κοντά στο Καρπενήσι, με λίγους άντρες. Νίκησε, αλλά τραυματίστηκε και έχασε τη ζωή του.',
      en: 'Botsaris attacked the enemy camp at night near Karpenisi, with only a few men. He won, but he was wounded and lost his life.',
    },
  },

  // ── 17–18: Papaflessas ────────────────────────────────────────────────────
  {
    q: { el: 'Γιατί ο Παπαφλέσσας λεγόταν «Παπα-»;', en: 'Why was Papaflessas called “Papa-”?' },
    options: { el: ['Γιατί ήταν ιερέας', 'Γιατί ήταν ο πατέρας του Κολοκοτρώνη', 'Γιατί είχε μεγάλα μουστάκια', 'Γιατί καταγόταν από τα Ψαρά'], en: ['Because he was a priest', 'Because he was Kolokotronis\' father', 'Because he had a big moustache', 'Because he came from Psara'] },
    correct: 0,
    explanation: {
      el: 'Το πραγματικό του όνομα ήταν Γρηγόριος Δικαίος. Ήταν ιερέας, γι\' αυτό τον έλεγαν Παπαφλέσσα, και μέλος της Φιλικής Εταιρείας.',
      en: 'His real name was Grigorios Dikaios. He was a priest, which is why people called him Papaflessas, and a member of the Filiki Eteria.',
    },
  },
  {
    q: { el: 'Σε ποια μάχη έπεσε ο Παπαφλέσσας το 1825, πολεμώντας τον Ιμπραήμ με λίγους άντρες;', en: 'In which battle did Papaflessas fall in 1825, fighting Ibrahim with only a few men?' },
    options: { el: ['Στα Δερβενάκια', 'Στην Τριπολιτσά', 'Στο Μανιάκι', 'Στο Σούλι'], en: ['Dervenakia', 'Tripolitsa', 'Maniaki', 'Souli'] },
    correct: 2,
    explanation: {
      el: 'Στο Μανιάκι της Μεσσηνίας ο Παπαφλέσσας στάθηκε με λίγους άντρες απέναντι στον μεγάλο στρατό του Ιμπραήμ. Έδειξε ότι δεν φοβόταν.',
      en: 'At Maniaki in Messinia, Papaflessas stood with a few men against Ibrahim\'s large army. He showed he was not afraid.',
    },
  },
];
