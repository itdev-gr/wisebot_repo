/**
 * Α' Δημοτικού · Μελέτη Περιβάλλοντος · Το Σώμα μου, οι Ανάγκες & τα Επαγγέλματα
 * ==============================================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 6–7. One short sentence per stem, everyday words.
 *
 * What the unit covers, in order:
 *   1–4   body parts: what we do with hands, feet, eyes, teeth
 *   5–8   the five senses: which sense tells us what
 *   9–12  hygiene and health: washing hands, brushing teeth, sleep, fruit
 *   13–14 basic needs: what every person needs to live
 *   15–18 goods and jobs: who makes bread, who heals us, who puts out fires
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_SCIENCE_BODY_NEEDS_JOBS: QuizQuestion[] = [
  // ── 1–4: body parts ────────────────────────────────────────────────────────
  {
    q: { el: 'Με τι πιάνουμε το μολύβι;', en: 'What do we hold a pencil with?' },
    options: { el: ['Με τα χέρια', 'Με τα πόδια', 'Με τα αυτιά', 'Με τη μύτη'], en: ['With our hands', 'With our feet', 'With our ears', 'With our nose'] },
    correct: 0,
    explanation: {
      el: 'Τα χέρια πιάνουν, γράφουν και ζωγραφίζουν. Έχουμε δύο χέρια με πέντε δάχτυλα το καθένα.',
      en: 'Hands hold, write and draw. We have two hands with five fingers each.',
    },
  },
  {
    q: { el: 'Με ποιο μέρος του σώματος περπατάμε;', en: 'Which part of the body do we walk with?' },
    options: { el: ['Με το κεφάλι', 'Με τα χέρια', 'Με τα πόδια', 'Με την κοιλιά'], en: ['With our head', 'With our hands', 'With our legs', 'With our tummy'] },
    correct: 2,
    explanation: {
      el: 'Τα πόδια μάς πάνε παντού: περπατάμε, τρέχουμε και πηδάμε με αυτά.',
      en: 'Our legs take us everywhere: we walk, run and jump with them.',
    },
  },
  {
    q: { el: 'Πόσα μάτια έχει ο Νίκος;', en: 'How many eyes does Nikos have?' },
    options: { el: ['Ένα', 'Δύο', 'Τρία', 'Πέντε'], en: ['One', 'Two', 'Three', 'Five'] },
    correct: 1,
    explanation: {
      el: 'Όλοι οι άνθρωποι έχουν δύο μάτια, δύο αυτιά, μία μύτη και ένα στόμα.',
      en: 'All people have two eyes, two ears, one nose and one mouth.',
    },
  },
  {
    q: { el: 'Τι κάνουμε με τα δόντια μας;', en: 'What do we do with our teeth?' },
    options: { el: ['Ακούμε', 'Βλέπουμε', 'Μυρίζουμε', 'Μασάμε το φαγητό'], en: ['We hear', 'We see', 'We smell', 'We chew food'] },
    correct: 3,
    explanation: {
      el: 'Τα δόντια κόβουν και μασάνε το φαγητό για να το καταπιούμε εύκολα.',
      en: 'Teeth cut and chew food so we can swallow it easily.',
    },
  },

  // ── 5–8: the five senses ───────────────────────────────────────────────────
  {
    q: { el: 'Η Μαρία ακούει ένα πουλάκι. Με ποιο μέρος του σώματος το ακούει;', en: 'Maria hears a little bird. Which part of her body does she hear it with?' },
    options: { el: ['Με τα μάτια', 'Με τα αυτιά', 'Με τη μύτη', 'Με τη γλώσσα'], en: ['With her eyes', 'With her ears', 'With her nose', 'With her tongue'] },
    correct: 1,
    explanation: {
      el: 'Με τα αυτιά ακούμε. Αυτή είναι η ακοή, μία από τις πέντε αισθήσεις.',
      en: 'We hear with our ears. That is hearing, one of the five senses.',
    },
  },
  {
    q: { el: 'Πώς καταλαβαίνουμε ότι το λουλούδι μυρίζει ωραία;', en: 'How do we know a flower smells nice?' },
    options: { el: ['Με τη μύτη', 'Με τα αυτιά', 'Με τα χέρια', 'Με τα μάτια'], en: ['With our nose', 'With our ears', 'With our hands', 'With our eyes'] },
    correct: 0,
    explanation: {
      el: 'Με τη μύτη μυρίζουμε. Αυτή η αίσθηση λέγεται όσφρηση.',
      en: 'We smell with our nose. This sense is called smell.',
    },
  },
  {
    q: { el: 'Ο Γιώργος τρώει ένα λεμόνι και είναι ξινό. Με τι το καταλαβαίνει;', en: 'Giorgos eats a lemon and it is sour. What does he taste it with?' },
    options: { el: ['Με τα μάτια', 'Με τα αυτιά', 'Με τη γλώσσα', 'Με τα μαλλιά'], en: ['With his eyes', 'With his ears', 'With his tongue', 'With his hair'] },
    correct: 2,
    explanation: {
      el: 'Η γλώσσα νιώθει το γλυκό, το ξινό, το αλμυρό και το πικρό. Αυτή η αίσθηση λέγεται γεύση.',
      en: 'The tongue feels sweet, sour, salty and bitter. This sense is called taste.',
    },
  },
  {
    q: { el: 'Η Ελένη κλείνει τα μάτια και πιάνει μια μπάλα. Νιώθει ότι είναι μαλακή. Ποια αίσθηση τη βοηθάει;', en: 'Eleni closes her eyes and holds a ball. She feels it is soft. Which sense helps her?' },
    options: { el: ['Η όραση', 'Η ακοή', 'Η γεύση', 'Η αφή'], en: ['Sight', 'Hearing', 'Taste', 'Touch'] },
    correct: 3,
    explanation: {
      el: 'Με το δέρμα μας νιώθουμε αν κάτι είναι μαλακό, σκληρό, ζεστό ή κρύο. Αυτή είναι η αφή.',
      en: 'With our skin we feel if something is soft, hard, hot or cold. That is touch.',
    },
  },

  // ── 9–12: hygiene and health ───────────────────────────────────────────────
  {
    q: { el: 'Τι κάνουμε πριν φάμε;', en: 'What do we do before we eat?' },
    options: { el: ['Πλένουμε τα χέρια μας', 'Βάζουμε παπούτσια', 'Κλείνουμε τα μάτια', 'Χτενίζουμε τα μαλλιά'], en: ['We wash our hands', 'We put on shoes', 'We close our eyes', 'We comb our hair'] },
    correct: 0,
    explanation: {
      el: 'Τα χέρια έχουν μικρόβια που δεν φαίνονται. Τα πλένουμε με σαπούνι πριν φάμε για να μην αρρωστήσουμε.',
      en: 'Hands carry germs we cannot see. We wash them with soap before eating so we do not get sick.',
    },
  },
  {
    q: { el: 'Πόσες φορές τη μέρα πλένουμε τα δόντια μας;', en: 'How many times a day do we brush our teeth?' },
    options: { el: ['Μία φορά τον μήνα', 'Μόνο τις Κυριακές', 'Το πρωί και το βράδυ', 'Ποτέ'], en: ['Once a month', 'Only on Sundays', 'In the morning and at night', 'Never'] },
    correct: 2,
    explanation: {
      el: 'Βουρτσίζουμε τα δόντια μας κάθε πρωί και κάθε βράδυ, για να μείνουν γερά και άσπρα.',
      en: 'We brush our teeth every morning and every night so they stay strong and white.',
    },
  },
  {
    q: { el: 'Γιατί κοιμόμαστε το βράδυ;', en: 'Why do we sleep at night?' },
    options: { el: ['Για να ξεκουραστεί το σώμα μας', 'Για να μεγαλώσουν τα νύχια', 'Για να μην κρυώνουμε', 'Για να μην πεινάμε'], en: ['So our body can rest', 'So our nails grow', 'So we do not feel cold', 'So we do not feel hungry'] },
    correct: 0,
    explanation: {
      el: 'Όταν κοιμόμαστε, το σώμα ξεκουράζεται και παίρνει δύναμη για την επόμενη μέρα.',
      en: 'When we sleep, our body rests and gets energy for the next day.',
    },
  },
  {
    q: { el: 'Ποιο φαγητό κάνει καλό στο σώμα μας;', en: 'Which food is good for our body?' },
    options: { el: ['Οι καραμέλες', 'Τα φρούτα', 'Τα πατατάκια', 'Η σοκολάτα'], en: ['Candies', 'Fruit', 'Crisps', 'Chocolate'] },
    correct: 1,
    explanation: {
      el: 'Τα φρούτα και τα λαχανικά έχουν βιταμίνες και μας κάνουν δυνατούς. Τα γλυκά τα τρώμε λίγο.',
      en: 'Fruit and vegetables have vitamins and make us strong. We eat sweets only a little.',
    },
  },

  // ── 13–14: basic needs ─────────────────────────────────────────────────────
  {
    q: { el: 'Τι χρειάζεται κάθε άνθρωπος για να ζήσει;', en: 'What does every person need to live?' },
    options: { el: ['Ένα ποδήλατο', 'Νερό και φαγητό', 'Μια τηλεόραση', 'Παιχνίδια'], en: ['A bicycle', 'Water and food', 'A television', 'Toys'] },
    correct: 1,
    explanation: {
      el: 'Νερό, φαγητό, αέρας, ύπνος και ένα σπίτι είναι ανάγκες: χωρίς αυτά δεν μπορούμε να ζήσουμε.',
      en: 'Water, food, air, sleep and a home are needs: we cannot live without them.',
    },
  },
  {
    q: { el: 'Έξω χιονίζει. Τι χρειάζεται ο Νίκος για να μην κρυώσει;', en: 'It is snowing outside. What does Nikos need so he does not get cold?' },
    options: { el: ['Ένα παγωτό', 'Ένα σπίτι και ζεστά ρούχα', 'Μια μπάλα', 'Ένα βιβλίο'], en: ['An ice cream', 'A home and warm clothes', 'A ball', 'A book'] },
    correct: 1,
    explanation: {
      el: 'Το σπίτι και τα ρούχα μάς προστατεύουν από το κρύο και τη βροχή. Είναι βασικές ανάγκες.',
      en: 'A home and clothes protect us from cold and rain. They are basic needs.',
    },
  },

  // ── 15–18: goods and jobs ──────────────────────────────────────────────────
  {
    q: { el: 'Ποιος φτιάχνει το ψωμί;', en: 'Who makes bread?' },
    options: { el: ['Ο γιατρός', 'Ο οδηγός', 'Ο φούρναρης', 'Ο δάσκαλος'], en: ['The doctor', 'The driver', 'The baker', 'The teacher'] },
    correct: 2,
    explanation: {
      el: 'Ο φούρναρης ζυμώνει και ψήνει το ψωμί στον φούρνο, νωρίς το πρωί.',
      en: 'The baker kneads and bakes bread in the oven, early in the morning.',
    },
  },
  {
    q: { el: 'Η Μαρία έχει πυρετό. Ποιος θα τη βοηθήσει να γίνει καλά;', en: 'Maria has a fever. Who will help her get better?' },
    options: { el: ['Ο γιατρός', 'Ο φούρναρης', 'Ο ταχυδρόμος', 'Ο αγρότης'], en: ['The doctor', 'The baker', 'The postman', 'The farmer'] },
    correct: 0,
    explanation: {
      el: 'Ο γιατρός εξετάζει τους αρρώστους και τους δίνει φάρμακα για να γίνουν καλά.',
      en: 'The doctor examines sick people and gives them medicine to get better.',
    },
  },
  {
    q: { el: 'Από πού παίρνουμε το γάλα και τα αυγά;', en: 'Where do milk and eggs come from?' },
    options: { el: ['Από το εργοστάσιο αυτοκινήτων', 'Από το ταχυδρομείο', 'Από το σχολείο', 'Από τα ζώα της φάρμας'], en: ['From the car factory', 'From the post office', 'From the school', 'From the farm animals'] },
    correct: 3,
    explanation: {
      el: 'Η αγελάδα δίνει γάλα και η κότα δίνει αυγά. Ο αγρότης τα φροντίζει στη φάρμα.',
      en: 'The cow gives milk and the hen gives eggs. The farmer looks after them on the farm.',
    },
  },
  {
    q: { el: 'Ένα δέντρο πήρε φωτιά στο πάρκο. Ποιον καλούμε;', en: 'A tree caught fire in the park. Who do we call?' },
    options: { el: ['Τον κομμωτή', 'Τον πυροσβέστη', 'Τον μάγειρα', 'Τον ψαρά'], en: ['The hairdresser', 'The firefighter', 'The cook', 'The fisherman'] },
    correct: 1,
    explanation: {
      el: 'Ο πυροσβέστης σβήνει τις φωτιές με νερό από το μεγάλο κόκκινο όχημά του.',
      en: 'The firefighter puts out fires with water from the big red fire engine.',
    },
  },
];
