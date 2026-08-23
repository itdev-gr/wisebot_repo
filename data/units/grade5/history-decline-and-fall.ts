/**
 * Ε' Δημοτικού · Ιστορία · Παρακμή & Άλωση
 * ==========================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 10–11. Ordered as the Ε' class meets the story:
 *   1–4   the capital, Manzikert 1071 and what it cost the empire
 *   5–7   the Crusades: who, from where, why the name
 *   8–10  1204 — the Fourth Crusade takes the City; the empire of Nicaea
 *   11–12 the Palaiologoi: 1261 and the last dynasty
 *   13–14 the Ottoman Turks and the sultan
 *   15–18 Constantine XI, 1453, Mehmed II, what came after
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_HISTORY_DECLINE_AND_FALL: QuizQuestion[] = [
  // ── 1–4: the capital and Manzikert ─────────────────────────────────────────
  {
    q: { el: 'Ποια πόλη ήταν η πρωτεύουσα της Βυζαντινής Αυτοκρατορίας;', en: 'Which city was the capital of the Byzantine Empire?' },
    options: { el: ['Η Αθήνα', 'Η Θεσσαλονίκη', 'Η Κωνσταντινούπολη', 'Η Ρώμη'], en: ['Athens', 'Thessaloniki', 'Constantinople', 'Rome'] },
    correct: 2,
    explanation: {
      el: 'Η Κωνσταντινούπολη, η «Πόλη», ήταν η πρωτεύουσα του Βυζαντίου για πάνω από χίλια χρόνια.',
      en: 'Constantinople, “the City”, was the capital of Byzantium for more than a thousand years.',
    },
  },
  {
    q: { el: 'Το 1071 έγινε η μάχη του Ματζικέρτ. Ποιοι νίκησαν τους Βυζαντινούς;', en: 'In 1071 the battle of Manzikert took place. Who defeated the Byzantines?' },
    options: { el: ['Οι Βούλγαροι', 'Οι Σελτζούκοι Τούρκοι', 'Οι Άραβες', 'Οι Βενετοί'], en: ['The Bulgarians', 'The Seljuk Turks', 'The Arabs', 'The Venetians'] },
    correct: 1,
    explanation: {
      el: 'Στο Ματζικέρτ (1071) οι Σελτζούκοι Τούρκοι νίκησαν τον βυζαντινό στρατό. Ήταν μια από τις πιο βαριές ήττες του Βυζαντίου.',
      en: 'At Manzikert (1071) the Seljuk Turks beat the Byzantine army. It was one of Byzantium’s heaviest defeats.',
    },
  },
  {
    q: { el: 'Σε ποια περιοχή βρίσκεται το Ματζικέρτ;', en: 'In which region is Manzikert?' },
    options: { el: ['Στη Μικρά Ασία', 'Στην Πελοπόννησο', 'Στην Ιταλία', 'Στην Αίγυπτο'], en: ['In Asia Minor', 'In the Peloponnese', 'In Italy', 'In Egypt'] },
    correct: 0,
    explanation: {
      el: 'Το Ματζικέρτ βρίσκεται στα ανατολικά της Μικράς Ασίας, στη σημερινή Τουρκία.',
      en: 'Manzikert is in the east of Asia Minor, in today’s Turkey.',
    },
  },
  {
    q: { el: 'Τι έχασαν σιγά σιγά οι Βυζαντινοί μετά τη μάχη του Ματζικέρτ;', en: 'What did the Byzantines slowly lose after the battle of Manzikert?' },
    options: { el: ['Τα νησιά του Αιγαίου', 'Την Κωνσταντινούπολη', 'Τον στόλο τους', 'Μεγάλο μέρος της Μικράς Ασίας'], en: ['The Aegean islands', 'Constantinople', 'Their fleet', 'A large part of Asia Minor'] },
    correct: 3,
    explanation: {
      el: 'Μετά το Ματζικέρτ οι Σελτζούκοι απλώθηκαν στη Μικρά Ασία, που ήταν η «αποθήκη» του Βυζαντίου σε στρατιώτες και σιτάρι.',
      en: 'After Manzikert the Seljuks spread across Asia Minor, which had been Byzantium’s “storeroom” of soldiers and grain.',
    },
  },

  // ── 5–7: the Crusades ──────────────────────────────────────────────────────
  {
    q: { el: 'Τι ήταν οι Σταυροφορίες;', en: 'What were the Crusades?' },
    options: { el: ['Γιορτές με αγώνες ιπποτών', 'Εκστρατείες ιπποτών από τη Δυτική Ευρώπη προς την Ανατολή', 'Ταξίδια εμπόρων στην Κίνα', 'Πόλεμοι ανάμεσα στους Βυζαντινούς και τους Βούλγαρους'], en: ['Festivals with knights’ tournaments', 'Expeditions of knights from Western Europe to the East', 'Merchants’ journeys to China', 'Wars between the Byzantines and the Bulgarians'] },
    correct: 1,
    explanation: {
      el: 'Οι Σταυροφορίες ήταν μεγάλες εκστρατείες ιπποτών και στρατιωτών από τη Δυτική Ευρώπη, με προορισμό τους Αγίους Τόπους στην Ανατολή.',
      en: 'The Crusades were big expeditions of knights and soldiers from Western Europe heading for the Holy Land in the East.',
    },
  },
  {
    q: { el: 'Από πού ξεκινούσαν οι σταυροφόροι;', en: 'Where did the crusaders set out from?' },
    options: { el: ['Από τη Δυτική Ευρώπη', 'Από την Κωνσταντινούπολη', 'Από τη Μικρά Ασία', 'Από τη Ρωσία'], en: ['From Western Europe', 'From Constantinople', 'From Asia Minor', 'From Russia'] },
    correct: 0,
    explanation: {
      el: 'Οι σταυροφόροι έρχονταν από τη Γαλλία, τη Γερμανία, την Ιταλία και άλλες χώρες της Δύσης. Περνούσαν από το Βυζάντιο στον δρόμο τους.',
      en: 'The crusaders came from France, Germany, Italy and other Western countries. They passed through Byzantium on their way.',
    },
  },
  {
    q: { el: 'Γιατί οι σταυροφόροι ονομάστηκαν έτσι;', en: 'Why were the crusaders called that?' },
    options: { el: ['Γιατί ταξίδευαν με σταυρωτά πανιά στα πλοία', 'Γιατί ο αρχηγός τους λεγόταν Σταύρος', 'Γιατί έραβαν έναν σταυρό πάνω στα ρούχα τους', 'Γιατί βάδιζαν σε σχήμα σταυρού'], en: ['Because their ships had crossed sails', 'Because their leader was called Stavros', 'Because they sewed a cross onto their clothes', 'Because they marched in the shape of a cross'] },
    correct: 2,
    explanation: {
      el: 'Οι σταυροφόροι φορούσαν έναν σταυρό ραμμένο στα ρούχα τους, για να δείχνουν ότι πήγαν στην εκστρατεία. Από τον σταυρό πήραν το όνομά τους.',
      en: 'The crusaders wore a cross sewn onto their clothes to show they had joined the expedition. That is where the name comes from.',
    },
  },

  // ── 8–10: 1204 and the empire of Nicaea ───────────────────────────────────
  {
    q: { el: 'Τι συνέβη στην Κωνσταντινούπολη το 1204;', en: 'What happened to Constantinople in 1204?' },
    options: { el: ['Την κατέλαβαν οι Σελτζούκοι', 'Έγινε μεγάλος σεισμός', 'Την κατέλαβαν οι Οθωμανοί', 'Την κατέλαβαν οι σταυροφόροι της Δ΄ Σταυροφορίας'], en: ['The Seljuks captured it', 'There was a big earthquake', 'The Ottomans captured it', 'The crusaders of the Fourth Crusade captured it'] },
    correct: 3,
    explanation: {
      el: 'Το 1204 οι σταυροφόροι της Δ΄ Σταυροφορίας, αντί να πάνε στην Ανατολή, μπήκαν στην Κωνσταντινούπολη και τη λεηλάτησαν. Ήταν η πρώτη φορά που έπεσε η Πόλη.',
      en: 'In 1204 the crusaders of the Fourth Crusade, instead of going East, entered Constantinople and looted it. It was the first time the City fell.',
    },
  },
  {
    q: { el: 'Ποια πόλη της Ιταλίας έδωσε τα πλοία στους σταυροφόρους της Δ΄ Σταυροφορίας;', en: 'Which Italian city gave the Fourth Crusade its ships?' },
    options: { el: ['Η Ρώμη', 'Η Βενετία', 'Η Νάπολη', 'Η Φλωρεντία'], en: ['Rome', 'Venice', 'Naples', 'Florence'] },
    correct: 1,
    explanation: {
      el: 'Η Βενετία είχε μεγάλο στόλο και έδωσε τα πλοία. Σε αντάλλαγμα πήρε πολλά νησιά και λιμάνια του Βυζαντίου.',
      en: 'Venice had a great fleet and supplied the ships. In return it took many Byzantine islands and harbours.',
    },
  },
  {
    q: { el: 'Μετά το 1204 οι Βυζαντινοί έφτιαξαν μικρά δικά τους κράτη. Ποιο ήταν το πιο σημαντικό;', en: 'After 1204 the Byzantines set up small states of their own. Which was the most important?' },
    options: { el: ['Το κράτος της Κρήτης', 'Το κράτος της Αθήνας', 'Η Αυτοκρατορία της Νίκαιας', 'Το κράτος της Ρόδου'], en: ['The state of Crete', 'The state of Athens', 'The Empire of Nicaea', 'The state of Rhodes'] },
    correct: 2,
    explanation: {
      el: 'Στη Νίκαια της Μικράς Ασίας οι Βυζαντινοί κράτησαν ζωντανή την αυτοκρατορία και από εκεί ετοίμασαν την επιστροφή στην Πόλη.',
      en: 'At Nicaea in Asia Minor the Byzantines kept the empire alive and prepared their return to the City from there.',
    },
  },

  // ── 11–12: the Palaiologoi ────────────────────────────────────────────────
  {
    q: { el: 'Ποιος αυτοκράτορας πήρε πίσω την Κωνσταντινούπολη το 1261;', en: 'Which emperor took Constantinople back in 1261?' },
    options: { el: ['Ο Μιχαήλ Η΄ Παλαιολόγος', 'Ο Ιουστινιανός', 'Ο Κωνσταντίνος ΙΑ΄ Παλαιολόγος', 'Ο Βασίλειος Β΄'], en: ['Michael VIII Palaiologos', 'Justinian', 'Constantine XI Palaiologos', 'Basil II'] },
    correct: 0,
    explanation: {
      el: 'Το 1261 ο Μιχαήλ Η΄ Παλαιολόγος μπήκε ξανά στην Κωνσταντινούπολη, 57 χρόνια μετά το 1204.',
      en: 'In 1261 Michael VIII Palaiologos entered Constantinople again, 57 years after 1204.',
    },
  },
  {
    q: { el: 'Οι Παλαιολόγοι ήταν…', en: 'The Palaiologoi were…' },
    options: { el: ['ένας λαός από τη Μικρά Ασία', 'οι αρχηγοί των σταυροφόρων', 'μια οικογένεια εμπόρων της Βενετίας', 'η τελευταία οικογένεια αυτοκρατόρων του Βυζαντίου'], en: ['a people from Asia Minor', 'the leaders of the crusaders', 'a family of Venetian merchants', 'the last family of Byzantine emperors'] },
    correct: 3,
    explanation: {
      el: 'Οι Παλαιολόγοι κυβέρνησαν το Βυζάντιο από το 1261 μέχρι το 1453. Ήταν η τελευταία δυναστεία, δηλαδή οικογένεια αυτοκρατόρων.',
      en: 'The Palaiologoi ruled Byzantium from 1261 to 1453. They were the last dynasty, that is, the last family of emperors.',
    },
  },

  // ── 13–14: the Ottoman Turks ──────────────────────────────────────────────
  {
    q: { el: 'Ποιοι ήταν οι Οθωμανοί Τούρκοι;', en: 'Who were the Ottoman Turks?' },
    options: { el: ['Έμποροι από τη Βενετία', 'Τουρκικός λαός που έφτιαξε ένα κράτος στη Μικρά Ασία και το μεγάλωνε συνεχώς', 'Ιππότες από τη Δυτική Ευρώπη', 'Σύμμαχοι του Βυζαντίου από τη Ρωσία'], en: ['Merchants from Venice', 'A Turkish people who built a state in Asia Minor and kept making it bigger', 'Knights from Western Europe', 'Allies of Byzantium from Russia'] },
    correct: 1,
    explanation: {
      el: 'Οι Οθωμανοί πήραν το όνομά τους από τον αρχηγό τους Οσμάν. Ξεκίνησαν από ένα μικρό κράτος στη Μικρά Ασία και σιγά σιγά πέρασαν και στην Ευρώπη.',
      en: 'The Ottomans took their name from their leader Osman. They started from a small state in Asia Minor and slowly crossed into Europe too.',
    },
  },
  {
    q: { el: 'Πώς λεγόταν ο ηγεμόνας των Οθωμανών;', en: 'What was the ruler of the Ottomans called?' },
    options: { el: ['Αυτοκράτορας', 'Βασιλιάς', 'Σουλτάνος', 'Δούκας'], en: ['Emperor', 'King', 'Sultan', 'Duke'] },
    correct: 2,
    explanation: {
      el: 'Ο αρχηγός των Οθωμανών λεγόταν σουλτάνος. Ο αρχηγός των Βυζαντινών λεγόταν αυτοκράτορας.',
      en: 'The Ottoman ruler was called the sultan. The Byzantine ruler was called the emperor.',
    },
  },

  // ── 15–18: Constantine XI and 1453 ────────────────────────────────────────
  {
    q: { el: 'Ποιος ήταν ο τελευταίος αυτοκράτορας του Βυζαντίου;', en: 'Who was the last emperor of Byzantium?' },
    options: { el: ['Ο Κωνσταντίνος ΙΑ΄ Παλαιολόγος', 'Ο Μιχαήλ Η΄ Παλαιολόγος', 'Ο Μέγας Κωνσταντίνος', 'Ο Ηράκλειος'], en: ['Constantine XI Palaiologos', 'Michael VIII Palaiologos', 'Constantine the Great', 'Heraclius'] },
    correct: 0,
    explanation: {
      el: 'Ο Κωνσταντίνος ΙΑ΄ Παλαιολόγος ήταν ο τελευταίος αυτοκράτορας. Έμεινε στην Πόλη και την υπερασπίστηκε μέχρι το τέλος.',
      en: 'Constantine XI Palaiologos was the last emperor. He stayed in the City and defended it to the end.',
    },
  },
  {
    q: { el: 'Ποια χρονιά έπεσε η Κωνσταντινούπολη στους Οθωμανούς;', en: 'In which year did Constantinople fall to the Ottomans?' },
    options: { el: ['Το 1071', 'Το 1204', 'Το 1261', 'Το 1453'], en: ['In 1071', 'In 1204', 'In 1261', 'In 1453'] },
    correct: 3,
    explanation: {
      el: 'Η Άλωση της Κωνσταντινούπολης έγινε το 1453. Τότε τελείωσε η Βυζαντινή Αυτοκρατορία.',
      en: 'The Fall of Constantinople happened in 1453. That is when the Byzantine Empire ended.',
    },
  },
  {
    q: { el: 'Ποιος σουλτάνος κατέλαβε την Κωνσταντινούπολη το 1453;', en: 'Which sultan captured Constantinople in 1453?' },
    options: { el: ['Ο Οσμάν', 'Ο Μωάμεθ Β΄ ο Πορθητής', 'Ο Σουλεϊμάν', 'Ο Βαγιαζήτ'], en: ['Osman', 'Mehmed II the Conqueror', 'Suleiman', 'Bayezid'] },
    correct: 1,
    explanation: {
      el: 'Ο Μωάμεθ Β΄ ήταν μόλις 21 χρονών όταν πήρε την Πόλη. Γι’ αυτό ονομάστηκε «Πορθητής», δηλαδή αυτός που κυριεύει.',
      en: 'Mehmed II was only 21 when he took the City. That is why he was called “the Conqueror”.',
    },
  },
  {
    q: { el: 'Τι έγινε η Κωνσταντινούπολη μετά το 1453;', en: 'What became of Constantinople after 1453?' },
    options: { el: ['Πρωτεύουσα της Βενετίας', 'Μια εγκαταλειμμένη πόλη', 'Πρωτεύουσα της Οθωμανικής Αυτοκρατορίας', 'Πρωτεύουσα της Αυτοκρατορίας της Νίκαιας'], en: ['The capital of Venice', 'An abandoned city', 'The capital of the Ottoman Empire', 'The capital of the Empire of Nicaea'] },
    correct: 2,
    explanation: {
      el: 'Ο Μωάμεθ Β΄ έκανε την Κωνσταντινούπολη πρωτεύουσα της Οθωμανικής Αυτοκρατορίας. Σήμερα η πόλη λέγεται Ιστανμπούλ.',
      en: 'Mehmed II made Constantinople the capital of the Ottoman Empire. Today the city is called Istanbul.',
    },
  },
];
