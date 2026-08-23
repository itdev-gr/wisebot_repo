/**
 * Γ' Δημοτικού · Μελέτη Περιβάλλοντος · Τροφή, Ενέργεια & Ανάγκες
 * ================================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 8–9. Order, easiest to hardest:
 *   1–4   where energy comes from: the Sun, plants, food chains, fuel for the body
 *   5–8   food gives energy: breakfast, balanced plate, water, sweets in moderation
 *   9–11  human needs: needs vs wants, what every person must have
 *   12–14 children's rights and equality: school, play, fair treatment for everyone
 *   15–16 advertising: what ads want, how to think before believing them
 *   17–18 packaging labels: expiry date, ingredients and sugar
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_SCIENCE_FOOD_ENERGY_NEEDS: QuizQuestion[] = [
  // ── 1–4: where energy comes from ─────────────────────────────────────────────
  {
    q: { el: 'Από πού παίρνει η Γη σχεδόν όλη την ενέργειά της;', en: 'Where does the Earth get almost all of its energy from?' },
    options: { el: ['Από το φεγγάρι', 'Από τον Ήλιο', 'Από τα σύννεφα', 'Από τον άνεμο'], en: ['From the Moon', 'From the Sun', 'From the clouds', 'From the wind'] },
    correct: 1,
    explanation: {
      el: 'Ο Ήλιος είναι η μεγάλη πηγή ενέργειας της Γης. Μας δίνει φως και ζεστασιά κάθε μέρα.',
      en: 'The Sun is the Earth\'s big source of energy. It gives us light and warmth every day.',
    },
  },
  {
    q: { el: 'Τι χρειάζεται ένα φυτό για να φτιάξει την τροφή του;', en: 'What does a plant need to make its own food?' },
    options: { el: ['Χώμα, σκοτάδι και αλάτι', 'Φως του ήλιου, νερό και αέρα', 'Ζάχαρη, ψωμί και γάλα', 'Μόνο βροχή'], en: ['Soil, darkness and salt', 'Sunlight, water and air', 'Sugar, bread and milk', 'Only rain'] },
    correct: 1,
    explanation: {
      el: 'Τα φυτά φτιάχνουν μόνα τους την τροφή τους με το φως του ήλιου, το νερό και τον αέρα. Γι\' αυτό τα βάζουμε κοντά στο παράθυρο!',
      en: 'Plants make their own food with sunlight, water and air. That is why we put them near the window!',
    },
  },
  {
    q: { el: 'Ένα λαγουδάκι τρώει χορτάρι. Από πού πήρε ενέργεια το χορτάρι;', en: 'A little rabbit eats grass. Where did the grass get its energy from?' },
    options: { el: ['Από το λαγουδάκι', 'Από το χώμα μόνο', 'Από τον Ήλιο', 'Από τη νύχτα'], en: ['From the rabbit', 'From the soil only', 'From the Sun', 'From the night'] },
    correct: 2,
    explanation: {
      el: 'Ο Ήλιος δίνει ενέργεια στο χορτάρι, το χορτάρι στο λαγουδάκι. Η ενέργεια ταξιδεύει σαν σκυταλοδρομία!',
      en: 'The Sun gives energy to the grass, and the grass gives it to the rabbit. Energy travels like a relay race!',
    },
  },
  {
    q: { el: 'Ένα αυτοκίνητο χρειάζεται βενζίνη για να κινηθεί. Το σώμα μας τι χρειάζεται;', en: 'A car needs petrol to move. What does our body need?' },
    options: { el: ['Τροφή', 'Βενζίνη', 'Μπαταρίες', 'Ρεύμα'], en: ['Food', 'Petrol', 'Batteries', 'Electricity'] },
    correct: 0,
    explanation: {
      el: 'Η τροφή είναι το «καύσιμο» του σώματός μας. Μας δίνει ενέργεια για να τρέχουμε, να σκεφτόμαστε και να μεγαλώνουμε.',
      en: 'Food is our body\'s "fuel". It gives us energy to run, to think and to grow.',
    },
  },

  // ── 5–8: food gives energy ───────────────────────────────────────────────────
  {
    q: { el: 'Ο Νίκος ξύπνησε και δεν έφαγε πρωινό. Στο σχολείο νιώθει κουρασμένος. Γιατί;', en: 'Nikos woke up and did not eat breakfast. At school he feels tired. Why?' },
    options: { el: ['Γιατί κοιμήθηκε πολύ', 'Γιατί το σώμα του δεν πήρε ενέργεια από τροφή', 'Γιατί ήπιε νερό', 'Γιατί φόρεσε μπουφάν'], en: ['Because he slept too much', 'Because his body got no energy from food', 'Because he drank water', 'Because he wore a jacket'] },
    correct: 1,
    explanation: {
      el: 'Το πρωινό δίνει στο σώμα ενέργεια για όλη τη μέρα. Χωρίς «καύσιμο», νιώθουμε κουρασμένοι.',
      en: 'Breakfast gives the body energy for the whole day. Without "fuel", we feel tired.',
    },
  },
  {
    q: { el: 'Ποιο πιάτο είναι πιο ισορροπημένο για μεσημεριανό;', en: 'Which plate is the most balanced for lunch?' },
    options: { el: ['Μόνο πατατάκια', 'Κοτόπουλο, ρύζι και σαλάτα', 'Τρία παγωτά', 'Μόνο ψωμί'], en: ['Only crisps', 'Chicken, rice and salad', 'Three ice creams', 'Only bread'] },
    correct: 1,
    explanation: {
      el: 'Ένα καλό πιάτο έχει λίγο από όλα: κρέας ή όσπρια, ψωμί ή ρύζι, και λαχανικά. Έτσι το σώμα παίρνει ό,τι χρειάζεται.',
      en: 'A good plate has a bit of everything: meat or beans, bread or rice, and vegetables. That way the body gets all it needs.',
    },
  },
  {
    q: { el: 'Η Ελένη έπαιξε μπάσκετ μια ζεστή μέρα και διψάει. Τι είναι το καλύτερο να πιει;', en: 'Eleni played basketball on a hot day and is thirsty. What is the best thing to drink?' },
    options: { el: ['Αναψυκτικό', 'Νερό', 'Σοκολατούχο γάλα', 'Τίποτα, να περιμένει'], en: ['A fizzy drink', 'Water', 'Chocolate milk', 'Nothing, she should wait'] },
    correct: 1,
    explanation: {
      el: 'Το νερό είναι ό,τι καλύτερο για τη δίψα. Το σώμα μας χρειάζεται νερό κάθε μέρα, ειδικά όταν ιδρώνουμε.',
      en: 'Water is the best thing for thirst. Our body needs water every day, especially when we sweat.',
    },
  },
  {
    q: { el: 'Τα γλυκά δίνουν ενέργεια. Γιατί δεν τρώμε μόνο γλυκά;', en: 'Sweets give energy. Why don\'t we eat only sweets?' },
    options: { el: ['Γιατί είναι πολύ ακριβά', 'Γιατί δεν έχουν καθόλου ενέργεια', 'Γιατί έχουν πολλή ζάχαρη και λείπουν άλλα που χρειάζεται το σώμα', 'Γιατί τα τρώνε μόνο οι μεγάλοι'], en: ['Because they are too expensive', 'Because they have no energy at all', 'Because they have lots of sugar and lack other things the body needs', 'Because only grown-ups eat them'] },
    correct: 2,
    explanation: {
      el: 'Τα γλυκά έχουν πολλή ζάχαρη αλλά λίγα από όσα χρειάζεται το σώμα για να μεγαλώσει. Λίγο γλυκό πού και πού είναι εντάξει!',
      en: 'Sweets have lots of sugar but few of the things the body needs to grow. A little sweet now and then is fine!',
    },
  },

  // ── 9–11: human needs ────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιο από αυτά είναι ανάγκη — κάτι χωρίς το οποίο δεν μπορούμε να ζήσουμε;', en: 'Which of these is a need — something we cannot live without?' },
    options: { el: ['Ένα παιχνίδι', 'Μια τηλεόραση', 'Καθαρό νερό', 'Ένα ποδήλατο'], en: ['A toy', 'A television', 'Clean water', 'A bicycle'] },
    correct: 2,
    explanation: {
      el: 'Ανάγκη είναι ό,τι χρειαζόμαστε για να ζήσουμε: νερό, τροφή, σπίτι, ρούχα. Το παιχνίδι είναι επιθυμία — ωραίο, αλλά ζούμε και χωρίς αυτό.',
      en: 'A need is what we must have to live: water, food, a home, clothes. A toy is a want — nice, but we can live without it.',
    },
  },
  {
    q: { el: 'Ο Γιώργος λέει: «Θέλω το καινούργιο βιντεοπαιχνίδι, αλλιώς δεν ζω!» Τι είναι το βιντεοπαιχνίδι;', en: 'Giorgos says: "I want the new video game or I can\'t live!" What is the video game?' },
    options: { el: ['Μια επιθυμία', 'Μια ανάγκη', 'Μια τροφή', 'Ένα δικαίωμα'], en: ['A want', 'A need', 'A food', 'A right'] },
    correct: 0,
    explanation: {
      el: 'Το βιντεοπαιχνίδι είναι επιθυμία. Ο Γιώργος θα ζήσει μια χαρά χωρίς αυτό — απλώς θα ήθελε πολύ να το έχει!',
      en: 'The video game is a want. Giorgos will live just fine without it — he would just really like to have it!',
    },
  },
  {
    q: { el: 'Τι χρειάζεται ένας άνθρωπος για να είναι υγιής, εκτός από τροφή και νερό;', en: 'Besides food and water, what does a person need to stay healthy?' },
    options: { el: ['Πολλά χρήματα', 'Ύπνο, καθαριότητα και κίνηση', 'Ένα μεγάλο αυτοκίνητο', 'Πολλά γλυκά'], en: ['Lots of money', 'Sleep, cleanliness and exercise', 'A big car', 'Lots of sweets'] },
    correct: 1,
    explanation: {
      el: 'Το σώμα ξεκουράζεται με τον ύπνο, προστατεύεται με την καθαριότητα και δυναμώνει με το παιχνίδι και την κίνηση.',
      en: 'The body rests with sleep, stays protected with cleanliness, and gets stronger with play and exercise.',
    },
  },

  // ── 12–14: children's rights and equality ────────────────────────────────────
  {
    q: { el: 'Ποιο από αυτά είναι δικαίωμα κάθε παιδιού στον κόσμο;', en: 'Which of these is a right of every child in the world?' },
    options: { el: ['Να έχει το δικό του τηλέφωνο', 'Να πηγαίνει σχολείο', 'Να ξενυχτάει όσο θέλει', 'Να τρώει μόνο ό,τι του αρέσει'], en: ['To have their own phone', 'To go to school', 'To stay up as late as they like', 'To eat only what they like'] },
    correct: 1,
    explanation: {
      el: 'Κάθε παιδί έχει δικαίωμα να μαθαίνει και να πηγαίνει σχολείο. Επίσης δικαιούται φροντίδα, τροφή, παιχνίδι και προστασία.',
      en: 'Every child has the right to learn and go to school. Children also have the right to care, food, play and protection.',
    },
  },
  {
    q: { el: 'Η Μαρία λέει ότι το παιχνίδι είναι χάσιμο χρόνου. Έχει δίκιο;', en: 'Maria says playing is a waste of time. Is she right?' },
    options: { el: ['Ναι, τα παιδιά πρέπει μόνο να διαβάζουν', 'Ναι, το παιχνίδι είναι μόνο για μωρά', 'Όχι, το παιχνίδι είναι δικαίωμα και βοηθάει τα παιδιά να μεγαλώσουν', 'Όχι, αλλά μόνο τα Σαββατοκύριακα'], en: ['Yes, children should only study', 'Yes, play is only for babies', 'No, play is a right and helps children grow', 'No, but only at weekends'] },
    correct: 2,
    explanation: {
      el: 'Το παιχνίδι είναι δικαίωμα των παιδιών! Παίζοντας μαθαίνουμε, κάνουμε φίλους και δυναμώνει το σώμα μας.',
      en: 'Play is a children\'s right! By playing we learn, make friends and make our bodies stronger.',
    },
  },
  {
    q: { el: 'Ένα καινούργιο παιδί ήρθε στην τάξη από άλλη χώρα. Τι σημαίνει να του φερόμαστε με ισότητα;', en: 'A new child from another country joined the class. What does treating them equally mean?' },
    options: { el: ['Να παίζει μόνο του', 'Να έχει τα ίδια δικαιώματα και την ίδια φροντίδα με όλους', 'Να κάθεται πάντα στο τελευταίο θρανίο', 'Να μιλάει μόνο όταν το ρωτάνε'], en: ['They play alone', 'They have the same rights and care as everyone', 'They always sit at the back desk', 'They only speak when asked'] },
    correct: 1,
    explanation: {
      el: 'Ισότητα σημαίνει ότι όλα τα παιδιά, από όπου κι αν έρχονται, έχουν τα ίδια δικαιώματα. Αγόρια, κορίτσια, όλοι το ίδιο!',
      en: 'Equality means all children, wherever they come from, have the same rights. Boys, girls, everyone the same!',
    },
  },

  // ── 15–16: advertising ───────────────────────────────────────────────────────
  {
    q: { el: 'Γιατί μια εταιρεία φτιάχνει διαφήμιση για τα δημητριακά της;', en: 'Why does a company make an advert for its cereal?' },
    options: { el: ['Για να μας πει πώς να μαγειρεύουμε', 'Για να αγοράσουμε το προϊόν της', 'Για να μας κάνει δώρο', 'Για να μας μάθει μαθηματικά'], en: ['To tell us how to cook', 'So that we buy its product', 'To give us a present', 'To teach us maths'] },
    correct: 1,
    explanation: {
      el: 'Η διαφήμιση θέλει να μας πείσει να αγοράσουμε κάτι. Γι\' αυτό δείχνει μόνο τα ωραία και όχι τα μειονεκτήματα.',
      en: 'An advert wants to convince us to buy something. That is why it shows only the nice parts, not the downsides.',
    },
  },
  {
    q: { el: 'Μια διαφήμιση λέει: «Με αυτή τη σοκολάτα θα γίνεις υπερήρωας!» Τι είναι σωστό να σκεφτούμε;', en: 'An advert says: "With this chocolate you will become a superhero!" What is the right thing to think?' },
    options: { el: ['Είναι αλήθεια, αφού το λέει η τηλεόραση', 'Η σοκολάτα δίνει ενέργεια, αλλά κανείς δεν γίνεται υπερήρωας — η διαφήμιση υπερβάλλει', 'Πρέπει να αγοράσουμε πολλές για να πιάσει', 'Μόνο τα μεγάλα παιδιά γίνονται υπερήρωες'], en: ['It is true, because the TV says so', 'Chocolate gives energy, but nobody becomes a superhero — the advert exaggerates', 'We must buy lots for it to work', 'Only older children become superheroes'] },
    correct: 1,
    explanation: {
      el: 'Οι διαφημίσεις συχνά υπερβάλλουν για να μας εντυπωσιάσουν. Σκεφτόμαστε μόνοι μας: «Είναι αλήθεια αυτό;»',
      en: 'Adverts often exaggerate to impress us. We think for ourselves: "Is this really true?"',
    },
  },

  // ── 17–18: packaging labels ──────────────────────────────────────────────────
  {
    q: { el: 'Στο κουτί του γάλακτος γράφει «Ανάλωση έως 20/03». Τι σημαίνει;', en: 'The milk carton says "Use by 20/03". What does it mean?' },
    options: { el: ['Ότι το γάλα φτιάχτηκε στις 20/03', 'Ότι πρέπει να το πιούμε μέχρι τις 20/03', 'Ότι κοστίζει 20 €', 'Ότι έχει 20 ποτήρια μέσα'], en: ['That the milk was made on 20/03', 'That we should drink it by 20/03', 'That it costs €20', 'That it has 20 glasses inside'] },
    correct: 1,
    explanation: {
      el: 'Η ημερομηνία λήξης μας λέει μέχρι πότε είναι καλό ένα τρόφιμο. Μετά από αυτή, δεν το τρώμε.',
      en: 'The use-by date tells us until when a food is good. After that date, we do not eat it.',
    },
  },
  {
    q: { el: 'Στα συστατικά ενός χυμού γράφει: «Νερό, ζάχαρη, χυμός πορτοκαλιού 10%». Τι καταλαβαίνουμε;', en: 'A juice label lists: "Water, sugar, orange juice 10%". What do we understand?' },
    options: { el: ['Είναι σχεδόν όλο πορτοκάλι', 'Έχει πολύ λίγο πορτοκάλι και αρκετή ζάχαρη', 'Δεν έχει καθόλου ζάχαρη', 'Είναι πιο υγιεινός από ένα φρέσκο πορτοκάλι'], en: ['It is almost all orange', 'It has very little orange and quite a lot of sugar', 'It has no sugar at all', 'It is healthier than a fresh orange'] },
    correct: 1,
    explanation: {
      el: 'Στα συστατικά, ό,τι γράφεται πρώτο υπάρχει σε μεγαλύτερη ποσότητα. Εδώ πρώτο είναι το νερό, μετά η ζάχαρη — το πορτοκάλι είναι μόνο 10%!',
      en: 'In the ingredients list, what comes first is there in the biggest amount. Here water is first, then sugar — the orange is only 10%!',
    },
  },
];
