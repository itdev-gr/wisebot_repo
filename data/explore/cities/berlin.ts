/**
 * WiseBot Explorer · Βερολίνο / Berlin
 * ====================================
 * Ten spots in one long day or two easy half-days: the government quarter and the Tiergarten
 * (spots 1–4), the old centre from Checkpoint Charlie to Alexanderplatz (spots 5–9), then the
 * East Side Gallery by S-Bahn (spot 10). Original text only, verified facts, language for a
 * child of 7–12 in Greek and English. German names stay in German in both languages.
 */
import type { ExploreCity } from '../types';

export const CITY: ExploreCity = {
  id: 'berlin',
  name: { el: 'Βερολίνο', en: 'Berlin' },
  country: { el: 'Γερμανία', en: 'Germany' },
  countryCode: 'DE',
  emoji: '🐻',
  center: { lat: 52.516, lng: 13.39 },
  zoom: 13,
  intro: {
    el: 'Γεια σας, εξερευνητές! Είμαι η WiseBot, η σοφή κουκουβάγια, και σας καλωσορίζω στο Βερολίνο, μια πόλη που κάποτε ένα τείχος την έκοψε στα δύο και που σήμερα έχει ξαναγίνει μία. Εδώ θα δείτε αρκούδες σε κάθε γωνία, θα δοκιμάσετε Currywurst (λουκάνικο με σάλτσα κάρι) και θα σταθείτε κάτω από έναν πύργο με μια μπάλα που λάμπει σαν ντισκομπάλα. Λύστε τους γρίφους μου, βρείτε τα δέκα μυστικά σημεία και γίνετε κι εσείς εξερευνητές του Βερολίνου!',
    en: 'Hello, explorers! I am WiseBot the wise owl, and I welcome you to Berlin, a city that a wall once cut in two and that has grown back together into one. Here you will spot bears on every corner, taste Currywurst (sausage with curry sauce) and stand under a tower with a ball that shines like a disco ball. Solve my riddles, find the ten secret spots and become Berlin explorers yourselves!',
  },
  route: [
    'brandenburg-gate',
    'reichstag',
    'victory-column',
    'potsdamer-platz',
    'checkpoint-charlie',
    'gendarmenmarkt',
    'berliner-dom',
    'tv-tower',
    'nikolaiviertel',
    'east-side-gallery',
  ],
  spots: [
    // ── 1. Brandenburger Tor ───────────────────────────────────────────────────
    {
      id: 'brandenburg-gate',
      name: { el: 'Brandenburger Tor', en: 'Brandenburger Tor' },
      emoji: '🏛️',
      lat: 52.5162,
      lng: 13.3782,
      radiusM: 40,
      riddle: {
        el: 'Μια πέτρινη πύλη με χοντρές κολόνες, που οι χτίστες της την αντέγραψαν από την είσοδο της Ακρόπολης στην Αθήνα. Στην κορυφή της, μια θεά οδηγεί ένα άρμα με άλογα, και κάποτε ένας αυτοκράτορας την πήρε μαζί του στο Παρίσι!',
        en: 'A stone gateway with fat columns, copied by its builders from the entrance of the Acropolis in Athens. On top, a goddess drives a chariot pulled by horses, and once an emperor took her away with him to Paris!',
      },
      parentHint: {
        el: 'Είναι η Brandenburger Tor (η Πύλη του Βραδεμβούργου). Ξεκινήστε από εδώ: ο σταθμός Brandenburger Tor (S-Bahn S1, S2 και μετρό U5) βγάζει ακριβώς στην πλατεία Pariser Platz, μπροστά στην πύλη.',
        en: 'It is the Brandenburger Tor, the Brandenburg Gate. Start here: the Brandenburger Tor station (S-Bahn S1, S2 and metro U5) brings you straight up onto Pariser Platz, right in front of the gate.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι ένας αυτοκράτορας πήρε το άρμα με τη θεά στο Παρίσι. Ποιος ήταν;', en: 'The riddle says an emperor took the chariot with the goddess to Paris. Who was he?' },
        options: {
          el: ['Ο Ιούλιος Καίσαρας', 'Ο Μέγας Αλέξανδρος', 'Ο Ναπολέων', 'Ο Καρλομάγνος'],
          en: ['Julius Caesar', 'Alexander the Great', 'Napoleon', 'Charlemagne'],
        },
        correct: 2,
        explanation: {
          el: 'Το 1806 ο Ναπολέων νίκησε τους Πρώσους και πήρε το άρμα στο Παρίσι σαν τρόπαιο. Το 1814 οι Πρώσοι το έφεραν πίσω και όλο το Βερολίνο γιόρτασε.',
          en: 'In 1806 Napoleon defeated the Prussians and carried the chariot off to Paris as a trophy. In 1814 the Prussians brought it back, and all of Berlin celebrated.',
        },
      },
      onSite: {
        question: { el: 'Μέτρησε τις χοντρές κολόνες στην πλευρά της πύλης που βλέπεις μπροστά σου. Πόσες είναι;', en: 'Count the fat columns on the side of the gate facing you. How many are there?' },
        options: {
          el: ['Τέσσερις', 'Έξι', 'Οκτώ', 'Δέκα'],
          en: ['Four', 'Six', 'Eight', 'Ten'],
        },
        correct: 1,
        explanation: {
          el: 'Έξι κολόνες σε κάθε πλευρά, δώδεκα συνολικά, και ανάμεσά τους πέντε περάσματα. Παλιά από το μεσαίο, το πιο φαρδύ, περνούσε μόνο η βασιλική οικογένεια. Και μέτρησε τα άλογα στην κορυφή: είναι τέσσερα!',
          en: 'Six columns on each side, twelve in all, with five passages between them. Long ago only the royal family was allowed through the wide middle one. Now count the horses on top: there are four!',
        },
      },
      story: {
        el: 'Αυτή η πύλη χτίστηκε το 1791, πριν από περισσότερα από 230 χρόνια, από έναν αρχιτέκτονα που αγαπούσε την αρχαία Ελλάδα: την έφτιαξε να μοιάζει με τα Προπύλαια, την είσοδο της Ακρόπολης. Στην κορυφή στέκεται η Quadriga (το τέθριππο): μια θεά σε άρμα που το σέρνουν τέσσερα άλογα. Το 1806 ο Ναπολέων νίκησε τους Πρώσους και πήρε το άρμα στο Παρίσι, αλλά οκτώ χρόνια αργότερα γύρισε σπίτι του με μεγάλη γιορτή. Για 28 χρόνια, από το 1961 ως το 1989, η πύλη στεκόταν κλεισμένη ανάμεσα στα δύο μέρη του Τείχους, και κανείς δεν μπορούσε να περάσει από κάτω της. Όταν το Τείχος έπεσε, χιλιάδες άνθρωποι από τις δύο μεριές ήρθαν εδώ για να αγκαλιαστούν. Μια πύλη είναι φτιαγμένη για να περνάς, όχι για να σε σταματά!',
        en: 'This gateway was built in 1791, more than 230 years ago, by an architect who loved ancient Greece: he shaped it to look like the Propylaea, the entrance of the Acropolis. On top stands the Quadriga: a goddess in a chariot pulled by four horses. In 1806 Napoleon defeated the Prussians and carried the chariot off to Paris, but eight years later it came home to a huge celebration. For 28 years, from 1961 to 1989, the gate stood locked away between two parts of the Berlin Wall, and nobody could walk through it. When the Wall fell, thousands of people from both sides came here to hug each other. A gate is made for walking through, not for stopping you!',
      },
      didYouKnow: {
        el: 'Η θεά του άρματος ήταν αρχικά η Ειρήνη, με ένα στεφάνι από φύλλα στο ραβδί της. Όταν το άρμα γύρισε από το Παρίσι το 1814, πρόσθεσαν στο ραβδί της έναν Σιδερένιο Σταυρό και έναν αετό, και από τότε την αποκαλούν Βικτόρια, τη θεά της νίκης. Το Τείχος περνούσε λίγα μέτρα δυτικά της πύλης, και η ίδια η πύλη άνοιξε ξανά στις 22 Δεκεμβρίου 1989.',
        en: 'The goddess in the chariot was originally Peace, with a wreath of leaves on her staff. When the chariot returned from Paris in 1814, an Iron Cross and an eagle were added to that staff, and since then she has been called Victoria, goddess of victory. The Wall ran just a few metres west of the gate, and the gate itself reopened on 22 December 1989.',
      },
      quiz: [
        {
          q: { el: 'Με ποιο αρχαίο κτίριο μοιάζει η πύλη;', en: 'Which ancient building does the gate look like?' },
          options: {
            el: ['Με τα Προπύλαια της Ακρόπολης', 'Με το Κολοσσαίο της Ρώμης', 'Με μια πυραμίδα της Αιγύπτου', 'Με τον Πύργο της Πίζας'],
            en: ['The Propylaea of the Acropolis', 'The Colosseum in Rome', 'A pyramid in Egypt', 'The Leaning Tower of Pisa'],
          },
          correct: 0,
          explanation: {
            el: 'Ο αρχιτέκτονας αντέγραψε τα Προπύλαια, τη μεγάλη είσοδο της Ακρόπολης στην Αθήνα. Γι\' αυτό η πύλη έχει τόσο ελληνικές κολόνες!',
            en: 'The architect copied the Propylaea, the grand entrance of the Acropolis in Athens. That is why the gate has such Greek-looking columns!',
          },
        },
        {
          q: { el: 'Πόσα χρόνια έλειψε το άρμα στο Παρίσι;', en: 'How long was the chariot away in Paris?' },
          options: {
            el: ['Έναν μήνα', 'Εκατό χρόνια', 'Δεν γύρισε ποτέ', 'Οκτώ χρόνια'],
            en: ['One month', 'A hundred years', 'It never came back', 'Eight years'],
          },
          correct: 3,
          explanation: {
            el: 'Ο Ναπολέων το πήρε το 1806 και οι Πρώσοι το έφεραν πίσω το 1814: οκτώ χρόνια μακριά από το σπίτι του.',
            en: 'Napoleon took it in 1806 and the Prussians brought it back in 1814: eight years away from home.',
          },
        },
        {
          q: { el: 'Τι έγινε εδώ όταν έπεσε το Τείχος το 1989;', en: 'What happened here when the Wall fell in 1989?' },
          options: {
            el: ['Έχτισαν καινούργιο τείχος', 'Χιλιάδες άνθρωποι από τις δύο μεριές ήρθαν και αγκαλιάστηκαν', 'Έκλεισαν την πύλη για πάντα', 'Πήραν πάλι το άρμα στο Παρίσι'],
            en: ['They built a new wall', 'Thousands of people from both sides came and hugged', 'They closed the gate for ever', 'The chariot was taken to Paris again'],
          },
          correct: 1,
          explanation: {
            el: 'Η πύλη έγινε το σημείο συνάντησης της πόλης που ξαναενώθηκε. Άνθρωποι από την Ανατολή και τη Δύση συναντήθηκαν εδώ και γιόρτασαν μαζί.',
            en: 'The gate became the meeting point of the reunited city. People from East and West met here and celebrated together.',
          },
        },
      ],
    },

    // ── 2. Reichstag ───────────────────────────────────────────────────────────
    {
      id: 'reichstag',
      name: { el: 'Reichstag', en: 'Reichstag' },
      emoji: '🇩🇪',
      lat: 52.5185,
      lng: 13.3748,
      radiusM: 40,
      riddle: {
        el: 'Ένα σοβαρό πέτρινο παλάτι φοράει ένα γυάλινο καπέλο, και μέσα στο καπέλο μπορείς να ανέβεις στριφογυριστά ως την κορυφή. Κάποτε δύο καλλιτέχνες το τύλιξαν ολόκληρο με ασημένιο ύφασμα, σαν δώρο!',
        en: 'A serious stone palace wears a glass hat, and inside the hat you can spiral all the way to the top. Once, two artists wrapped the whole building in silver cloth, like a present!',
      },
      parentHint: {
        el: 'Είναι το Reichstag (Ράιχσταγκ), το κτίριο του γερμανικού κοινοβουλίου. Από την πύλη περπατήστε 5 λεπτά βόρεια από την Ebertstraße και σταθείτε στο γρασίδι της Platz der Republik, μπροστά στην πρόσοψη. Η ανάβαση στον θόλο είναι δωρεάν, αλλά χρειάζεται κράτηση από πριν στην ιστοσελίδα του Bundestag.',
        en: 'It is the Reichstag, the German parliament building. From the gate walk 5 minutes north along Ebertstraße and stand on the lawn of Platz der Republik, facing the front. Going up into the dome is free, but you need to book ahead on the Bundestag website.',
      },
      unlockQuestion: {
        question: { el: 'Τι γίνεται μέσα σε αυτό το κτίριο σήμερα;', en: 'What happens inside this building today?' },
        options: {
          el: ['Συνεδριάζει το κοινοβούλιο και ψηφίζει τους νόμους της Γερμανίας', 'Μένει ο βασιλιάς', 'Παίζουν ποδόσφαιρο', 'Φυλάνε τον χρυσό της χώρας'],
          en: ['Parliament meets and votes on the laws of Germany', 'The king lives there', 'People play football', 'The country\'s gold is kept there'],
        },
        correct: 0,
        explanation: {
          el: 'Εδώ συνεδριάζει η Bundestag (Μπούντεσταγκ), το κοινοβούλιο της Γερμανίας: εκατοντάδες βουλευτές που τους διάλεξε ο λαός με ψήφο συζητούν και ψηφίζουν τους νόμους.',
          en: 'This is where the Bundestag meets, the parliament of Germany: hundreds of members chosen by the people in elections discuss and vote on the laws.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε ψηλά, πάνω από τις κολόνες της εισόδου. Τι είναι γραμμένο εκεί με μεγάλα γράμματα;', en: 'Look up, above the columns of the entrance. What is written there in big letters?' },
        options: {
          el: ['Willkommen in Berlin', 'Berlin', 'Deutschland', 'Dem Deutschen Volke'],
          en: ['Willkommen in Berlin', 'Berlin', 'Deutschland', 'Dem Deutschen Volke'],
        },
        correct: 3,
        explanation: {
          el: '«Dem Deutschen Volke» σημαίνει «Στον Γερμανικό Λαό». Τα μπρούντζινα γράμματα μπήκαν το 1916 και το μέταλλό τους προήλθε από παλιά κανόνια. Μέτρησε και τους πύργους στις γωνίες του κτιρίου: είναι τέσσερις.',
          en: '“Dem Deutschen Volke” means “To the German People”. The bronze letters went up in 1916, and their metal came from old cannons. Now count the towers at the corners of the building: there are four.',
        },
      },
      story: {
        el: 'Αυτό το κτίριο τελείωσε το 1894 για να στεγάσει το κοινοβούλιο, δηλαδή τους ανθρώπους που ψηφίζουν τους νόμους της Γερμανίας. Είχε μια δύσκολη ζωή: το 1933 μια μεγάλη φωτιά έκαψε την αίθουσά του, και στον πόλεμο γέμισε τρύπες. Για πολλά χρόνια στεκόταν σχεδόν άδειο, ακριβώς δίπλα στο Τείχος. Το 1995 δύο καλλιτέχνες, ο Christo (Κρίστο) και η Jeanne-Claude (Ζαν-Κλοντ), το τύλιξαν ολόκληρο με ασημένιο ύφασμα για δύο εβδομάδες, και εκατομμύρια άνθρωποι ήρθαν να το δουν σαν τεράστιο δώρο. Μετά, ο αρχιτέκτονας Norman Foster (Νόρμαν Φόστερ) του έβαλε τον γυάλινο θόλο: όποιος ανεβαίνει τη στριφογυριστή ράμπα βλέπει από ψηλά τους βουλευτές να δουλεύουν. Το γυαλί έχει ένα μήνυμα: εδώ δεν υπάρχουν μυστικά, όλοι μπορούν να κοιτάξουν μέσα.',
        en: 'This building was finished in 1894 as the home of parliament, the people who vote on the laws of Germany. It has had a hard life: in 1933 a big fire burned out its main hall, and during the war it was full of holes. For many years it stood almost empty, right next to the Wall. In 1995 two artists, Christo and Jeanne-Claude, wrapped the whole building in silver cloth for two weeks, and millions of people came to see it, like a giant present. Then the architect Norman Foster gave it its glass dome: anyone who climbs the spiral ramp can look down and watch the members of parliament at work. The glass carries a message: there are no secrets here, everyone is allowed to look in.',
      },
      didYouKnow: {
        el: 'Τα μπρούντζινα γράμματα «Dem Deutschen Volke» μπήκαν το 1916, στη διάρκεια του Α΄ Παγκοσμίου Πολέμου, και το μέταλλό τους προήλθε από λιωμένα γαλλικά κανόνια που είχαν πάρει οι Πρώσοι την εποχή του Ναπολέοντα. Ο θόλος του Foster έχει στη μέση έναν κώνο με 360 καθρέφτες, που στέλνει το φως της ημέρας κάτω, στην αίθουσα της Βουλής.',
        en: 'The bronze letters “Dem Deutschen Volke” went up in 1916, during the First World War, and their metal came from melted-down French cannons captured by the Prussians in Napoleon\'s time. Foster\'s dome has a cone of 360 mirrors at its centre that sends daylight down into the parliament chamber.',
      },
      quiz: [
        {
          q: { el: 'Ποιοι τύλιξαν το κτίριο με ασημένιο ύφασμα το 1995;', en: 'Who wrapped the building in silver cloth in 1995?' },
          options: {
            el: ['Δύο μάγειρες', 'Δύο βασιλιάδες', 'Δύο καλλιτέχνες, ο Christo και η Jeanne-Claude', 'Δύο ποδοσφαιριστές'],
            en: ['Two cooks', 'Two kings', 'Two artists, Christo and Jeanne-Claude', 'Two footballers'],
          },
          correct: 2,
          explanation: {
            el: 'Ο Christo και η Jeanne-Claude τύλιγαν τεράστια πράγματα σε όλον τον κόσμο, γέφυρες και νησιά. Το Reichstag έμεινε τυλιγμένο δύο εβδομάδες.',
            en: 'Christo and Jeanne-Claude wrapped huge things all over the world, bridges and even islands. The Reichstag stayed wrapped for two weeks.',
          },
        },
        {
          q: { el: 'Γιατί ο θόλος είναι από γυαλί;', en: 'Why is the dome made of glass?' },
          options: {
            el: ['Για να μπαίνει η βροχή', 'Για να μπορούν όλοι να κοιτούν μέσα και να μην υπάρχουν μυστικά', 'Γιατί το γυαλί είναι φτηνό', 'Για να φαίνεται από το φεγγάρι'],
            en: ['So the rain can get in', 'So everyone can look in and there are no secrets', 'Because glass is cheap', 'So it can be seen from the moon'],
          },
          correct: 1,
          explanation: {
            el: 'Το γυαλί λέει: το κοινοβούλιο ανήκει στον λαό, και ο λαός μπορεί να βλέπει τι γίνεται μέσα.',
            en: 'The glass says: parliament belongs to the people, and the people are allowed to see what happens inside.',
          },
        },
        {
          q: { el: 'Πώς ανεβαίνεις στην κορυφή του θόλου;', en: 'How do you get to the top of the dome?' },
          options: {
            el: ['Από μια στριφογυριστή ράμπα', 'Με σχοινί', 'Με ελικόπτερο', 'Με τραμπολίνο'],
            en: ['Up a spiral ramp', 'By rope', 'By helicopter', 'On a trampoline'],
          },
          correct: 0,
          explanation: {
            el: 'Μια ράμπα στριφογυρίζει μέσα στον θόλο ως την κορυφή. Καθώς ανεβαίνεις, βλέπεις όλο το Βερολίνο γύρω σου.',
            en: 'A ramp spirals inside the dome all the way up. As you climb, you can see the whole of Berlin around you.',
          },
        },
      ],
    },

    // ── 3. Siegessäule ─────────────────────────────────────────────────────────
    {
      id: 'victory-column',
      name: { el: 'Siegessäule', en: 'Siegessäule' },
      emoji: '👼',
      lat: 52.5145,
      lng: 13.3501,
      radiusM: 60,
      riddle: {
        el: 'Στη μέση ενός μεγάλου πάρκου, εκεί που οι δρόμοι ενώνονται σαν αστέρι, μια ψηλή κολόνα κρατάει στην κορυφή της μια χρυσή κυρία με φτερά. Για να τη φτάσεις, πρέπει πρώτα να περάσεις κάτω από τον δρόμο!',
        en: 'In the middle of a big park, where the roads meet like a star, a tall column holds up a golden lady with wings. To reach her you first have to go under the road!',
      },
      parentHint: {
        el: 'Είναι η Siegessäule (Ζίγκεσζόιλε, η Στήλη της Νίκης) στο πάρκο Tiergarten (Τίργκαρτεν). Από το Reichstag πάρτε το λεωφορείο 100 από τη στάση Reichstag/Bundestag ως τη στάση Großer Stern, ή περπατήστε 25 λεπτά δυτικά μέσα από το πάρκο, δίπλα στη λεωφόρο Straße des 17. Juni. Στη βάση της κολόνας φτάνετε από τις υπόγειες διαβάσεις.',
        en: 'It is the Siegessäule, the Victory Column, in the Tiergarten park. From the Reichstag take bus 100 from the Reichstag/Bundestag stop to Großer Stern, or walk 25 minutes west through the park beside the avenue Straße des 17. Juni. You reach the base of the column through the pedestrian tunnels.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος μιλάει για μια χρυσή κυρία με φτερά στην κορυφή της κολόνας. Ποια είναι;', en: 'The riddle talks about a golden lady with wings on top of the column. Who is she?' },
        options: {
          el: ['Μια νεράιδα', 'Η θεά της νίκης', 'Μια βασίλισσα', 'Μια αστροναύτισσα'],
          en: ['A fairy', 'The goddess of victory', 'A queen', 'An astronaut'],
        },
        correct: 1,
        explanation: {
          el: 'Είναι η Βικτόρια, η θεά της νίκης των Ρωμαίων. Έχει ύψος περίπου 8 μέτρα και ζυγίζει όσο έξι ελέφαντες, αλλά από κάτω μοιάζει μικρή, γιατί η κολόνα είναι πολύ ψηλή.',
          en: 'She is Victoria, the Roman goddess of victory. She is about 8 metres tall and weighs as much as six elephants, but she looks small from below because the column is so high.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε την κολόνα από κοντά. Τι είναι στριμωγμένο μέσα στις αυλακιές της, γυαλιστερό και χρυσό;', en: 'Look closely at the column. What is tucked into its grooves, shiny and golden?' },
        options: {
          el: ['Αστέρια', 'Σπαθιά', 'Κανόνια', 'Φίδια'],
          en: ['Stars', 'Swords', 'Cannons', 'Snakes'],
        },
        correct: 2,
        explanation: {
          el: 'Είναι αληθινές κάννες από κανόνια που πήραν οι Πρώσοι από τους αντιπάλους τους σε τρεις πολέμους, βαμμένες χρυσές. Και μέτρησε τα μπράτσα του αστεριού, τους δρόμους που ξεκινούν από τον κύκλο: είναι πέντε (η μεγάλη λεωφόρος μετράει δύο φορές, μία από κάθε πλευρά).',
          en: 'They are real cannon barrels that the Prussians took from their opponents in three wars, covered in gold. And count the arms of the star, the roads that leave the circle: there are five (the big avenue counts twice, once on each side).',
        },
      },
      story: {
        el: 'Πριν από περίπου 150 χρόνια, το 1873, η Πρωσία, το βασίλειο γύρω από το Βερολίνο, έστησε αυτή την κολόνα για να γιορτάσει τρεις νίκες σε τρεις πολέμους. Μέσα στις αυλακιές της έβαλαν αληθινά κανόνια από τους ηττημένους στρατούς, ντυμένα με χρυσό. Στην κορυφή στέκεται η Βικτόρια, η θεά της νίκης, ψηλή περίπου 8 μέτρα και τόσο βαριά όσο έξι ελέφαντες! Οι Βερολινέζοι τη φωνάζουν χαϊδευτικά Goldelse (Γκολντέλζε, «η Χρυσή Έλζα»). Η κολόνα δεν ήταν πάντα εδώ: το 1938 τη μετέφεραν κομμάτι κομμάτι από την πλατεία μπροστά στο Reichstag και της πρόσθεσαν ένα κομμάτι ακόμη, για να φτάσει τα 67 μέτρα. Αν ανεβείτε τα 285 σκαλιά, θα δείτε από ψηλά ολόκληρο το πάρκο, ένα δάσος όπου κάποτε κυνηγούσαν οι βασιλιάδες.',
        en: 'About 150 years ago, in 1873, Prussia, the kingdom around Berlin, put up this column to celebrate three victories in three wars. Into its grooves the builders set real cannons taken from the defeated armies, covered in gold. On top stands Victoria, the goddess of victory, about 8 metres tall and as heavy as six elephants! Berliners fondly call her Goldelse, “Golden Elsie”. The column has not always stood here: in 1938 it was moved piece by piece from the square in front of the Reichstag, and one more section was added to bring it up to 67 metres. If you climb the 285 steps, you will see the whole park from above, a forest where kings once went hunting.',
      },
      didYouKnow: {
        el: 'Η μετακίνηση της κολόνας το 1938 ήταν μέρος ενός σχεδίου για μια τεράστια νέα λεωφόρο· οι τέσσερις υπόγειες διαβάσεις που φέρνουν τους πεζούς στη βάση της χτίστηκαν την ίδια εποχή. Η Goldelse πρωταγωνιστεί στην ταινία «Τα φτερά του έρωτα» του Wim Wenders, όπου άγγελοι κάθονται στον ώμο της και παρακολουθούν την πόλη.',
        en: 'The move in 1938 was part of a plan for a gigantic new avenue; the four pedestrian tunnels that bring you to the base were built at the same time. Goldelse has a starring role in Wim Wenders\' film “Wings of Desire”, where angels sit on her shoulder and watch over the city.',
      },
      quiz: [
        {
          q: { el: 'Πώς φωνάζουν οι Βερολινέζοι τη χρυσή θεά;', en: 'What do Berliners call the golden goddess?' },
          options: {
            el: ['Χρυσή Μαρία', 'Μεγάλη Κυρία', 'Χρυσή Αρκούδα', 'Goldelse, «η Χρυσή Έλζα»'],
            en: ['Golden Mary', 'Big Lady', 'Golden Bear', 'Goldelse, “Golden Elsie”'],
          },
          correct: 3,
          explanation: {
            el: 'Goldelse, «η Χρυσή Έλζα», είναι το χαϊδευτικό της. Οι Βερολινέζοι δίνουν παρατσούκλια σε όλα τα μεγάλα μνημεία τους!',
            en: 'Goldelse, “Golden Elsie”, is her nickname. Berliners give nicknames to all their big monuments!',
          },
        },
        {
          q: { el: 'Τι είναι βαλμένο μέσα στις αυλακιές της κολόνας;', en: 'What is set into the grooves of the column?' },
          options: {
            el: ['Κανόνια από τους ηττημένους στρατούς', 'Χρυσά νομίσματα', 'Κόκαλα δεινοσαύρων', 'Παλιά ποδήλατα'],
            en: ['Cannons from the defeated armies', 'Gold coins', 'Dinosaur bones', 'Old bicycles'],
          },
          correct: 0,
          explanation: {
            el: 'Οι χτίστες έβαλαν στην κολόνα αληθινά κανόνια από τους τρεις πολέμους, ντυμένα με χρυσό, για να θυμίζουν τις νίκες.',
            en: 'The builders set real cannons from the three wars into the column, covered in gold, as a reminder of the victories.',
          },
        },
        {
          q: { el: 'Πού στεκόταν η κολόνα πριν από το 1938;', en: 'Where did the column stand before 1938?' },
          options: {
            el: ['Στο Παρίσι', 'Πάνω σε ένα βουνό', 'Στην πλατεία μπροστά στο Reichstag', 'Μέσα στο ποτάμι'],
            en: ['In Paris', 'On a mountain', 'On the square in front of the Reichstag', 'In the river'],
          },
          correct: 2,
          explanation: {
            el: 'Στεκόταν μπροστά στο Reichstag. Το 1938 τη μετέφεραν κομμάτι κομμάτι στη μέση του πάρκου και την έκαναν πιο ψηλή.',
            en: 'It stood in front of the Reichstag. In 1938 it was moved piece by piece to the middle of the park and made taller.',
          },
        },
      ],
    },

    // ── 4. Potsdamer Platz ─────────────────────────────────────────────────────
    {
      id: 'potsdamer-platz',
      name: { el: 'Potsdamer Platz', en: 'Potsdamer Platz' },
      emoji: '🚦',
      lat: 52.5095,
      lng: 13.3765,
      radiusM: 40,
      riddle: {
        el: 'Εδώ κάποτε ήταν το πιο πολυσύχναστο σταυροδρόμι της Ευρώπης, μετά για περισσότερα από 40 χρόνια ένα άδειο λιβάδι με αγριόχορτα δίπλα στο Τείχος, και σήμερα μια πλατεία γεμάτη γυάλινους ουρανοξύστες. Ψάξε για ένα παλιομοδίτικο φανάρι με ρολόι, που στέκεται σε ένα πόδι!',
        en: 'Once the busiest crossroads in Europe, then for more than 40 years an empty field of weeds beside the Wall, and today a square full of glass skyscrapers. Look for an old-fashioned traffic light with a clock, standing on one leg!',
      },
      parentHint: {
        el: 'Είναι η Potsdamer Platz (Πότσνταμερ Πλατς, η Πλατεία του Πότσδαμ). Από τη Siegessäule περπατήστε περίπου 30 λεπτά νοτιοανατολικά μέσα από το Tiergarten ακολουθώντας τις πινακίδες, ή πάρτε το λεωφορείο 100 πίσω ως την Brandenburger Tor και κατεβείτε 10 λεπτά νότια από την Ebertstraße. Το αντίγραφο του φαναριού και τα κομμάτια του Τείχους βρίσκονται δίπλα στην είσοδο του σταθμού.',
        en: 'It is Potsdamer Platz. From the Siegessäule walk about 30 minutes south-east through the Tiergarten following the signs, or take bus 100 back to Brandenburger Tor and walk 10 minutes south along Ebertstraße. The traffic-light replica and the pieces of the Wall stand next to the station entrance.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι εδώ γινόταν τόση φασαρία που χρειάστηκε κάτι καινούργιο. Ποια εφεύρεση για τους δρόμους στήθηκε εδώ το 1924, πρώτη φορά στο Βερολίνο;', en: 'The riddle says there was such a muddle here that something new was needed. Which invention for the streets was set up here in 1924, the first in Berlin?' },
        options: {
          el: ['Το ποδήλατο', 'Η πινακίδα ΣΤΟΠ', 'Το τούνελ', 'Το φανάρι'],
          en: ['The bicycle', 'The stop sign', 'The tunnel', 'The traffic light'],
        },
        correct: 3,
        explanation: {
          el: 'Το 1924 στήθηκε εδώ το πρώτο φανάρι του Βερολίνου και από τα πρώτα σε όλη την Ευρώπη: ένας πύργος με πέντε πλευρές, όπου ένας αστυνομικός καθόταν μέσα και άλλαζε τα φώτα με το χέρι.',
          en: 'In 1924 Berlin\'s first traffic light, one of the very first in Europe, was set up here: a tower with five sides, with a policeman sitting inside who switched the lights by hand.',
        },
      },
      onSite: {
        question: { el: 'Βρες τα ψηλά τσιμεντένια κομμάτια του Τείχους δίπλα στην είσοδο του σταθμού. Τι έχουν κολλήσει επάνω τους οι επισκέπτες;', en: 'Find the tall concrete pieces of the Wall next to the station entrance. What have visitors stuck all over them?' },
        options: {
          el: ['Τσίχλες', 'Γραμματόσημα', 'Αυτοκόλλητα με αρκούδες', 'Νομίσματα'],
          en: ['Chewing gum', 'Stamps', 'Bear stickers', 'Coins'],
        },
        correct: 0,
        explanation: {
          el: 'Χιλιάδες επισκέπτες κολλούν τις τσίχλες τους πάνω στο Τείχος, μια παράξενη συνήθεια! Κάθε κομμάτι έχει ύψος 3,6 μέτρα και ζυγίζει περισσότερο από ένα αυτοκίνητο. Κοίταξε και προς τα κτίρια: μια σκεπή μοιάζει με τεράστια σκηνή τσίρκου.',
          en: 'Thousands of visitors stick their chewing gum on the Wall, a strange habit! Each piece is 3.6 metres tall and weighs more than a car. Look towards the buildings too: one roof looks like a giant circus tent.',
        },
      },
      story: {
        el: 'Πριν από εκατό χρόνια, τη δεκαετία του 1920, αυτή η πλατεία ήταν το πιο ζωντανό σημείο του Βερολίνου: τραμ, λεωφορεία, αυτοκίνητα, άμαξες με άλογα και χιλιάδες πεζοί μπερδεύονταν όλη μέρα. Ήταν τόσο μεγάλη φασαρία που το 1924 έστησαν εδώ το πρώτο φανάρι του Βερολίνου και από τα πρώτα σε όλη την Ευρώπη: έναν πύργο με πέντε πλευρές, όπου ένας αστυνομικός καθόταν μέσα και άλλαζε τα φώτα με το χέρι! Στον πόλεμο η πλατεία καταστράφηκε, και μετά το Τείχος πέρασε ακριβώς από τη μέση της. Για περισσότερα από 40 χρόνια εδώ δεν υπήρχε σχεδόν τίποτα, μόνο χορτάρι και κουνέλια ανάμεσα στους φράχτες. Όταν έπεσε το Τείχος, το Βερολίνο ξανάχτισε την πλατεία από το μηδέν, και μέσα σε δέκα χρόνια φύτρωσαν ουρανοξύστες, κινηματογράφοι και μια πλατεία με σκεπή σαν τεράστια σκηνή. Ένα άδειο λιβάδι μπορεί να ξαναγίνει η καρδιά μιας πόλης.',
        en: 'A hundred years ago, in the 1920s, this square was the liveliest spot in Berlin: trams, buses, cars, horse carts and thousands of walkers tangled together all day. It was such a muddle that in 1924 Berlin\'s first traffic light, one of the very first in Europe, was set up here: a tower with five sides, with a policeman sitting inside who switched the lights by hand! In the war the square was destroyed, and afterwards the Wall ran right through its middle. For more than 40 years there was almost nothing here, only grass and rabbits between the fences. When the Wall fell, Berlin rebuilt the square from scratch, and within ten years skyscrapers, cinemas and a plaza with a roof like a giant tent sprang up. An empty field can become the heart of a city again.',
      },
      didYouKnow: {
        el: 'Η πλατεία πήρε το όνομά της από την πύλη προς το Πότσδαμ, που στεκόταν εδώ στον παλιό τελωνειακό τοίχο της πόλης. Το φανάρι-πύργος που βλέπετε είναι αντίγραφο του 1997, ενώ τη δεκαετία του 1990 η πλατεία ήταν το μεγαλύτερο εργοτάξιο της Ευρώπης· η σκεπή-σκηνή πάνω από τη μεγάλη γυάλινη πλατεία δίπλα στον σταθμό, έργο του αρχιτέκτονα Helmut Jahn, άνοιξε το 2000.',
        en: 'The square takes its name from the gate on the road to Potsdam that once stood here in the old customs wall of the city. The traffic-light tower you see is a replica from 1997, and in the 1990s the square was the largest building site in Europe; the tent roof over the big glass forum beside the station, by the architect Helmut Jahn, opened in 2000.',
      },
      quiz: [
        {
          q: { el: 'Ποιος άλλαζε τα φώτα στο πρώτο φανάρι;', en: 'Who switched the lights on the first traffic light?' },
          options: {
            el: ['Ένα ρομπότ', 'Ένας αστυνομικός που καθόταν μέσα στον πύργο', 'Ο δήμαρχος', 'Ένας παπαγάλος'],
            en: ['A robot', 'A policeman sitting inside the tower', 'The mayor', 'A parrot'],
          },
          correct: 1,
          explanation: {
            el: 'Ένας αστυνομικός καθόταν μέσα στον μικρό πύργο και άλλαζε τα φώτα με το χέρι, κοιτάζοντας την κίνηση από ψηλά.',
            en: 'A policeman sat inside the little tower and switched the lights by hand, watching the traffic from above.',
          },
        },
        {
          q: { el: 'Τι υπήρχε στην πλατεία όσο στεκόταν το Τείχος;', en: 'What was on the square while the Wall stood?' },
          options: {
            el: ['Ένα λούνα παρκ', 'Ένα μεγάλο εμπορικό κέντρο', 'Σχεδόν τίποτα, μόνο χορτάρι και κουνέλια', 'Ένα αεροδρόμιο'],
            en: ['A funfair', 'A big shopping centre', 'Almost nothing, only grass and rabbits', 'An airport'],
          },
          correct: 2,
          explanation: {
            el: 'Το Τείχος περνούσε από τη μέση της πλατείας, και για δεκαετίες εδώ ζούσαν μόνο κουνέλια ανάμεσα στους φράχτες.',
            en: 'The Wall ran through the middle of the square, and for decades only rabbits lived here between the fences.',
          },
        },
        {
          q: { el: 'Με τι μοιάζει η σκεπή της καινούργιας πλατείας;', en: 'What does the roof of the new plaza look like?' },
          options: {
            el: ['Με μια πυραμίδα', 'Με ένα καπέλο μάγου', 'Με ένα καράβι', 'Με μια τεράστια σκηνή'],
            en: ['A pyramid', 'A wizard\'s hat', 'A ship', 'A giant tent'],
          },
          correct: 3,
          explanation: {
            el: 'Η σκεπή από γυαλί και ύφασμα μοιάζει με τεράστια σκηνή, και τη νύχτα αλλάζει χρώματα.',
            en: 'The roof of glass and fabric looks like a giant tent, and at night it changes colours.',
          },
        },
      ],
    },

    // ── 5. Checkpoint Charlie ──────────────────────────────────────────────────
    {
      id: 'checkpoint-charlie',
      name: { el: 'Checkpoint Charlie', en: 'Checkpoint Charlie' },
      emoji: '🛂',
      lat: 52.5075,
      lng: 13.3903,
      radiusM: 60,
      riddle: {
        el: 'Ένα μικρό άσπρο σπιτάκι στη μέση ενός δρόμου, με σακιά άμμου γύρω του και μια πινακίδα που σε προειδοποιεί σε πολλές γλώσσες ότι φεύγεις από έναν «τομέα». Εδώ κάποτε τανκς κοιτάζονταν στα μάτια!',
        en: 'A little white hut in the middle of a street, with sandbags around it and a sign warning you in several languages that you are leaving a “sector”. Once, tanks stood here staring at each other!',
      },
      parentHint: {
        el: 'Είναι το Checkpoint Charlie (Τσέκποϊντ Τσάρλι), στη Friedrichstraße. Από την Potsdamer Platz περπατήστε 15 λεπτά ανατολικά από τη Leipziger Straße και στρίψτε δεξιά στη Friedrichstraße, ή πάρτε το μετρό U2 δύο στάσεις ως τη Stadtmitte και κατεβείτε 5 λεπτά νότια.',
        en: 'It is Checkpoint Charlie, on Friedrichstraße. From Potsdamer Platz walk 15 minutes east along Leipziger Straße and turn right into Friedrichstraße, or take the U2 metro two stops to Stadtmitte and walk 5 minutes south.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι εδώ φεύγεις από έναν «τομέα». Ποιες δύο πλευρές ένωνε αυτό το πέρασμα;', en: 'The riddle says that here you leave a “sector”. Which two sides did this crossing connect?' },
        options: {
          el: ['Το Βερολίνο και το Παρίσι', 'Τη Γερμανία και την Πολωνία', 'Το Ανατολικό και το Δυτικό Βερολίνο', 'Την πόλη και το δάσος'],
          en: ['Berlin and Paris', 'Germany and Poland', 'East Berlin and West Berlin', 'The city and the forest'],
        },
        correct: 2,
        explanation: {
          el: 'Από το 1961 ως το 1989 το Τείχος χώριζε το Βερολίνο σε Ανατολικό και Δυτικό. Αυτό ήταν το πιο διάσημο πέρασμα, και το «Charlie» είναι απλώς το γράμμα C στο αλφάβητο των στρατιωτών: Alpha, Bravo, Charlie.',
          en: 'From 1961 to 1989 the Wall split Berlin into East and West. This was the most famous crossing, and “Charlie” is simply the letter C in the soldiers\' alphabet: Alpha, Bravo, Charlie.',
        },
      },
      onSite: {
        question: { el: 'Διάβασε την άσπρη πινακίδα που λέει ότι φεύγεις από τον αμερικανικό τομέα. Σε πόσες γλώσσες είναι γραμμένη;', en: 'Read the white sign that says you are leaving the American sector. How many languages is it written in?' },
        options: {
          el: ['Δύο', 'Τέσσερις', 'Έξι', 'Οκτώ'],
          en: ['Two', 'Four', 'Six', 'Eight'],
        },
        correct: 1,
        explanation: {
          el: 'Αγγλικά, ρωσικά και γαλλικά, οι γλώσσες των χωρών που φύλαγαν το Βερολίνο μετά τον πόλεμο (η Αμερική και η Βρετανία μιλούν και οι δύο αγγλικά), και από κάτω γερμανικά, η γλώσσα της πόλης. Κοίταξε και τη μεγάλη φωτογραφία ενός στρατιώτη πάνω από τον δρόμο: από την άλλη πλευρά της υπάρχει ένας δεύτερος στρατιώτης που κοιτάζει αντίθετα.',
          en: 'English, Russian and French, the languages of the countries that guarded Berlin after the war (America and Britain both speak English), and German, the language of the city. Look at the big photo of a soldier above the street too: on its other side is a second soldier looking the opposite way.',
        },
      },
      story: {
        el: 'Μετά τον Β΄ Παγκόσμιο Πόλεμο, το Βερολίνο μοιράστηκε σε τέσσερις τομείς, που τους διοικούσαν η Αμερική, η Βρετανία, η Γαλλία και η Σοβιετική Ένωση. Όταν το 1961 χτίστηκε το Τείχος και χώρισε την πόλη στα δύο, αυτό το μικρό σπιτάκι έγινε το πιο διάσημο πέρασμα ανάμεσα στον αμερικανικό και τον σοβιετικό τομέα. Οι στρατιώτες το είπαν «Charlie» (Τσάρλι), γιατί έτσι λένε το γράμμα C στο αλφάβητό τους: ήταν το τρίτο σημείο ελέγχου μετά το Alpha και το Bravo. Τον Οκτώβριο του 1961 αμερικανικά και σοβιετικά τανκς στάθηκαν εδώ αντικριστά για μια ολόκληρη νύχτα, μέχρι που και οι δύο πλευρές έκαναν πίσω, ένα τανκ τη φορά. Μερικοί άνθρωποι βρήκαν πολύ έξυπνους τρόπους για να περάσουν από τη μία μεριά στην άλλη: κρυμμένοι μέσα σε αυτοκίνητα ή μέσα από τούνελ που έσκαψαν οι ίδιοι! Σήμερα το σπιτάκι είναι αντίγραφο, και ο δρόμος είναι ανοιχτός για όλους.',
        en: 'After the Second World War, Berlin was divided into four sectors, run by America, Britain, France and the Soviet Union. When the Wall went up in 1961 and split the city in two, this little hut became the most famous crossing between the American and Soviet sectors. The soldiers called it “Charlie” because that is how they say the letter C in their alphabet: it was the third checkpoint after Alpha and Bravo. In October 1961, American and Soviet tanks stood here nose to nose for a whole night, until both sides slowly backed away, one tank at a time. Some people found clever ways across: hidden inside cars, or through tunnels they dug themselves! Today the hut is a replica, and the street is open to everyone.',
      },
      didYouKnow: {
        el: 'Το αυθεντικό φυλάκιο δεν είναι εδώ: το 1990 το σήκωσε ένας γερανός και σήμερα βρίσκεται στο Μουσείο των Συμμάχων (AlliiertenMuseum) στο Dahlem. Οι δύο μεγάλες φωτογραφίες στρατιωτών πάνω από τον δρόμο, ενός Αμερικανού και ενός Σοβιετικού, ο ένας στραμμένος προς την παλιά Ανατολή και ο άλλος προς την παλιά Δύση, είναι έργο του καλλιτέχνη Frank Thiel από το 1998.',
        en: 'The original guard hut is not here: in 1990 it was lifted away by crane and now stands in the Allied Museum (AlliiertenMuseum) in Dahlem. The two large portraits of soldiers above the street, an American and a Soviet soldier, one facing the former East and the other the former West, are a work by the artist Frank Thiel from 1998.',
      },
      quiz: [
        {
          q: { el: 'Σε πόσους τομείς μοιράστηκε το Βερολίνο μετά τον πόλεμο;', en: 'How many sectors was Berlin divided into after the war?' },
          options: {
            el: ['Σε τέσσερις', 'Σε δύο', 'Σε δέκα', 'Σε έναν'],
            en: ['Four', 'Two', 'Ten', 'One'],
          },
          correct: 0,
          explanation: {
            el: 'Τέσσερις τομείς, ένας για κάθε χώρα: Αμερική, Βρετανία, Γαλλία και Σοβιετική Ένωση. Οι τρεις πρώτοι έγιναν το Δυτικό Βερολίνο και ο σοβιετικός το Ανατολικό.',
            en: 'Four sectors, one for each country: America, Britain, France and the Soviet Union. The first three became West Berlin and the Soviet one became East Berlin.',
          },
        },
        {
          q: { el: 'Γιατί το πέρασμα λέγεται «Charlie»;', en: 'Why is the crossing called “Charlie”?' },
          options: {
            el: ['Από ένα σκυλάκι', 'Από έναν διάσημο τραγουδιστή', 'Από τον πρώτο στρατιώτη που το φύλαξε', 'Γιατί «Charlie» είναι το γράμμα C στο αλφάβητο των στρατιωτών'],
            en: ['After a little dog', 'After a famous singer', 'After the first soldier who guarded it', 'Because “Charlie” is the letter C in the soldiers\' alphabet'],
          },
          correct: 3,
          explanation: {
            el: 'Οι στρατιώτες λένε τα γράμματα με λέξεις για να μην τα μπερδεύουν: A είναι Alpha, B είναι Bravo, C είναι Charlie. Αυτό ήταν το τρίτο σημείο ελέγχου.',
            en: 'Soldiers say letters as words so they do not mix them up: A is Alpha, B is Bravo, C is Charlie. This was the third checkpoint.',
          },
        },
        {
          q: { el: 'Τι έγινε εδώ τον Οκτώβριο του 1961;', en: 'What happened here in October 1961?' },
          options: {
            el: ['Έγινε ένας μεγάλος αγώνας ποδοσφαίρου', 'Άνοιξε ένα λούνα παρκ', 'Τανκς στάθηκαν αντικριστά και μετά έκαναν πίσω', 'Έπεσε το Τείχος'],
            en: ['A big football match was played', 'A funfair opened', 'Tanks stood face to face and then backed away', 'The Wall fell'],
          },
          correct: 2,
          explanation: {
            el: 'Αμερικανικά και σοβιετικά τανκς στάθηκαν αντικριστά για μια νύχτα. Ευτυχώς και οι δύο πλευρές έκαναν πίσω, ένα τανκ τη φορά, και όλα ηρέμησαν.',
            en: 'American and Soviet tanks stood face to face for a night. Luckily both sides backed away, one tank at a time, and everything calmed down.',
          },
        },
      ],
    },

    // ── 6. Gendarmenmarkt ──────────────────────────────────────────────────────
    {
      id: 'gendarmenmarkt',
      name: { el: 'Gendarmenmarkt', en: 'Gendarmenmarkt' },
      emoji: '🎻',
      lat: 52.5137,
      lng: 13.3927,
      radiusM: 40,
      riddle: {
        el: 'Σε αυτή την πλατεία δύο εκκλησίες μοιάζουν σαν δίδυμες αδελφές, η μία απέναντι στην άλλη, και ανάμεσά τους ένα κτίριο με μεγάλη σκάλα γεμίζει τον αέρα με μουσική. Μπροστά του, ένας ποιητής στέκεται σε ένα βάθρο και ονειρεύεται.',
        en: 'In this square two churches look like twin sisters, facing each other, and between them a building with a grand staircase fills the air with music. In front of it, a poet stands on a pedestal, dreaming.',
      },
      parentHint: {
        el: 'Είναι η Gendarmenmarkt (Ζανταρμενμάρκτ, η «Αγορά των Χωροφυλάκων»). Από το Checkpoint Charlie περπατήστε 10 λεπτά βόρεια από τη Friedrichstraße και στρίψτε δεξιά στην Taubenstraße· η πλατεία ανοίγεται μετά από ένα τετράγωνο.',
        en: 'It is the Gendarmenmarkt. From Checkpoint Charlie walk 10 minutes north up Friedrichstraße and turn right into Taubenstraße; the square opens up after one block.',
      },
      unlockQuestion: {
        question: { el: 'Το όνομα της πλατείας σημαίνει «Αγορά των Gendarmes» (ζανταρμ). Τι ήταν οι Gendarmes;', en: 'The name of the square means “Market of the Gendarmes”. What were the Gendarmes?' },
        options: {
          el: ['Στρατιώτες πάνω σε άλογα, που είχαν εδώ τους στάβλους τους', 'Ψαράδες με μεγάλα δίχτυα', 'Ζαχαροπλάστες που έφτιαχναν τούρτες', 'Δάσκαλοι μουσικής'],
          en: ['Soldiers on horseback who kept their stables here', 'Fishermen with big nets', 'Pastry cooks who made cakes', 'Music teachers'],
        },
        correct: 0,
        explanation: {
          el: 'Οι Gens d\'Armes ήταν ένα σύνταγμα ιππέων του βασιλιά της Πρωσίας, με γαλλικό όνομα. Τον 18ο αιώνα είχαν τους στάβλους τους σε αυτή την πλατεία, και το όνομα έμεινε.',
          en: 'The Gens d\'Armes were a regiment of the Prussian king\'s horsemen, with a French name. In the 18th century their stables stood on this square, and the name stuck.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε γύρω σου. Πόσους πύργους με στρογγυλό τρούλο βλέπεις στην πλατεία;', en: 'Look around you. How many towers with a round dome can you see on the square?' },
        options: {
          el: ['Έναν', 'Δύο', 'Τρεις', 'Τέσσερις'],
          en: ['One', 'Two', 'Three', 'Four'],
        },
        correct: 1,
        explanation: {
          el: 'Δύο, ένας σε κάθε εκκλησία, και είναι σχεδόν ολόιδιοι, γιατί τους σχεδίασε ο ίδιος αρχιτέκτονας. Οι εκκλησίες από κάτω όμως είναι διαφορετικές: στα βόρεια η γαλλική, στα νότια η γερμανική.',
          en: 'Two, one on each church, and they are almost identical, because the same architect designed them. The churches underneath are different, though: the French one to the north, the German one to the south.',
        },
      },
      story: {
        el: 'Πριν από περισσότερα από 300 χρόνια, το Βερολίνο άνοιξε τις πόρτες του σε χιλιάδες πρόσφυγες από τη Γαλλία, τους Ουγενότους, που δεν τους άφηναν να προσεύχονται με τον δικό τους τρόπο στην πατρίδα τους. Στη βόρεια πλευρά της πλατείας έχτισαν τη δική τους εκκλησία, τον Französischer Dom (Φραντσέζισερ Ντομ, τη Γαλλική Εκκλησία), και οι Γερμανοί απέναντι τον Deutscher Dom (Ντόιτσερ Ντομ). Αργότερα ο βασιλιάς Φρειδερίκος ο Μέγας ήθελε η πλατεία του να μοιάζει με μια πλατεία της Ρώμης, και έβαλε τον ίδιο αρχιτέκτονα να χτίσει δύο ολόιδιους πύργους με τρούλο, έναν σε κάθε εκκλησία, κι έτσι έγιναν δίδυμες! Στη μέση, το Konzerthaus (Κόντσερτχαους, η αίθουσα συναυλιών) χτίστηκε το 1821 από τον Karl Friedrich Schinkel, αφού το παλιό θέατρο είχε καεί. Μπροστά του στέκεται ο ποιητής Friedrich Schiller. Όταν καλωσορίζεις ξένους, η πόλη σου γίνεται πιο πλούσια.',
        en: 'More than 300 years ago, Berlin opened its doors to thousands of refugees from France, the Huguenots, who were not allowed to pray their own way at home. On the north side they built their own church, the Französischer Dom, and the Germans built the Deutscher Dom opposite. Later King Frederick the Great wanted his square to look like a square in Rome, so he had the same architect build two matching domed towers, one for each church, and that is how they became twins! In the middle, the Konzerthaus was built in 1821 by Karl Friedrich Schinkel after the old theatre burned down. In front of it stands the poet Friedrich Schiller. Welcoming strangers makes a city richer.',
      },
      didYouKnow: {
        el: 'Οι Ουγενότοι έφεραν νέες τέχνες, νέα λαχανικά και νέες λέξεις, και γύρω στο 1700 ένας στους πέντε Βερολινέζους μιλούσε γαλλικά. Οι δύο «Dom» δεν είναι καθεδρικοί ναοί: η λέξη εδώ έρχεται από το γαλλικό «dôme», δηλαδή τρούλος, και αναφέρεται στους πύργους που προστέθηκαν το 1780–1785 από τον Carl von Gontard, με πρότυπο τις δίδυμες εκκλησίες της Piazza del Popolo στη Ρώμη. Το Konzerthaus του Schinkel καταστράφηκε στον πόλεμο και άνοιξε ξανά μόλις το 1984, μετά από χρόνια ανακατασκευής.',
        en: 'The Huguenots brought new crafts, new vegetables and new words, and around 1700 one in five Berliners spoke French. The two “Doms” are not cathedrals at all: the word here comes from the French “dôme”, meaning dome, and refers to the towers added in 1780–1785 by Carl von Gontard, modelled on the twin churches of Piazza del Popolo in Rome. Schinkel\'s Konzerthaus was destroyed in the war and reopened only in 1984, after years of rebuilding.',
      },
      quiz: [
        {
          q: { el: 'Από ποια χώρα ήρθαν οι Ουγενότοι;', en: 'Which country did the Huguenots come from?' },
          options: {
            el: ['Από την Ισπανία', 'Από τη Γαλλία', 'Από την Ελλάδα', 'Από τη Ρωσία'],
            en: ['Spain', 'France', 'Greece', 'Russia'],
          },
          correct: 1,
          explanation: {
            el: 'Οι Ουγενότοι ήρθαν από τη Γαλλία. Το Βερολίνο τους καλωσόρισε, και αυτοί έφεραν νέες τέχνες, λαχανικά και λέξεις.',
            en: 'The Huguenots came from France. Berlin welcomed them, and they brought new crafts, vegetables and words.',
          },
        },
        {
          q: { el: 'Γιατί οι δύο εκκλησίες έχουν ολόιδιους πύργους;', en: 'Why do the two churches have identical towers?' },
          options: {
            el: ['Γιατί ο βασιλιάς ήθελε η πλατεία να μοιάζει με μια πλατεία της Ρώμης', 'Γιατί οι χτίστες μπέρδεψαν τα σχέδια', 'Γιατί ήταν φτηνότερο', 'Γιατί το ζήτησε ο Schiller'],
            en: ['Because the king wanted the square to look like a square in Rome', 'Because the builders mixed up the plans', 'Because it was cheaper', 'Because Schiller asked for it'],
          },
          correct: 0,
          explanation: {
            el: 'Ο Φρειδερίκος ο Μέγας ήθελε μια πλατεία σαν αυτές της Ρώμης, με δίδυμες εκκλησίες, και έβαλε τον ίδιο αρχιτέκτονα να χτίσει τους δύο πύργους.',
            en: 'Frederick the Great wanted a square like the ones in Rome, with twin churches, so he had the same architect build both towers.',
          },
        },
        {
          q: { el: 'Τι είναι το κτίριο στη μέση της πλατείας;', en: 'What is the building in the middle of the square?' },
          options: {
            el: ['Ένα σχολείο', 'Το δημαρχείο', 'Ένα μουσείο με δεινόσαυρους', 'Μια αίθουσα συναυλιών'],
            en: ['A school', 'The town hall', 'A dinosaur museum', 'A concert hall'],
          },
          correct: 3,
          explanation: {
            el: 'Είναι το Konzerthaus, η αίθουσα συναυλιών, που χτίστηκε το 1821 στη θέση ενός θεάτρου που είχε καεί.',
            en: 'It is the Konzerthaus, the concert hall, built in 1821 on the spot of a theatre that had burned down.',
          },
        },
      ],
    },

    // ── 7. Berliner Dom / Lustgarten ───────────────────────────────────────────
    {
      id: 'berliner-dom',
      name: { el: 'Berliner Dom', en: 'Berliner Dom' },
      emoji: '⛪',
      lat: 52.5187,
      lng: 13.3995,
      radiusM: 40,
      riddle: {
        el: 'Μια τεράστια εκκλησία με πράσινο καπέλο κοιτάζει ένα λιβάδι, όπου μια πέτρινη γαβάθα είναι τόσο μεγάλη που θα χωρούσε μέσα ολόκληρη η οικογένειά σου. Δίπλα, σε ένα νησί, πέντε μουσεία φυλάνε μια Αιγύπτια βασίλισσα και έναν ελληνικό βωμό.',
        en: 'A gigantic church with a green hat looks out over a lawn, where a stone bowl is so big your whole family could sit inside it. Next door, on an island, five museums keep an Egyptian queen and a Greek altar.',
      },
      parentHint: {
        el: 'Είναι ο Berliner Dom (Μπερλίνερ Ντομ, ο Καθεδρικός του Βερολίνου) και το γρασίδι του Lustgarten (Λουστγκάρτεν), στη Museumsinsel (το Νησί των Μουσείων). Από την Gendarmenmarkt περπατήστε 12 λεπτά: βόρεια από την Charlottenstraße ως τη λεωφόρο Unter den Linden, δεξιά, και περάστε τη γέφυρα Schlossbrücke. Προσοχή: το Pergamonmuseum με τον βωμό είναι κλειστό για ανακαίνιση ως το 2027 περίπου· η Νεφερτίτη στο Neues Museum είναι ανοιχτή.',
        en: 'It is the Berliner Dom, Berlin Cathedral, and the Lustgarten lawn on the Museumsinsel, the Museum Island. From Gendarmenmarkt walk 12 minutes: north along Charlottenstraße to the avenue Unter den Linden, turn right and cross the Schlossbrücke bridge. Note: the Pergamonmuseum with the altar is closed for renovation until about 2027; Nefertiti in the Neues Museum is open.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι στο νησί φυλάγεται μια Αιγύπτια βασίλισσα. Ποια είναι;', en: 'The riddle says an Egyptian queen is kept on the island. Who is she?' },
        options: {
          el: ['Η Κλεοπάτρα', 'Η Χιονάτη', 'Η Ωραία Ελένη', 'Η Νεφερτίτη'],
          en: ['Cleopatra', 'Snow White', 'Helen of Troy', 'Nefertiti'],
        },
        correct: 3,
        explanation: {
          el: 'Είναι η προτομή της Νεφερτίτης, μιας βασίλισσας της Αιγύπτου που έζησε πριν από περίπου 3.300 χρόνια. Βρέθηκε στην άμμο το 1912 και σήμερα ζει στο Neues Museum. Το όνομά της σημαίνει «η όμορφη έφτασε».',
          en: 'She is the bust of Nefertiti, a queen of Egypt who lived about 3,300 years ago. It was found in the sand in 1912 and now lives in the Neues Museum. Her name means “the beautiful one has come”.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε την εκκλησία από το γρασίδι. Πόσους τρούλους βλέπεις συνολικά, μεγάλους και μικρούς;', en: 'Look at the church from the lawn. How many domes can you see altogether, big and small?' },
        options: {
          el: ['Πέντε', 'Έναν', 'Τρεις', 'Επτά'],
          en: ['Five', 'One', 'Three', 'Seven'],
        },
        correct: 0,
        explanation: {
          el: 'Ένας μεγάλος τρούλος στη μέση και τέσσερις μικροί στις γωνίες. Όλοι είναι πράσινοι, γιατί ο χαλκός πρασινίζει με τη βροχή και τον χρόνο, όπως το Άγαλμα της Ελευθερίας στη Νέα Υόρκη.',
          en: 'One big dome in the middle and four small ones at the corners. They are all green because copper turns green with rain and time, just like the Statue of Liberty in New York.',
        },
      },
      story: {
        el: 'Αυτή η εκκλησία είναι πιο νέα από ό,τι φαίνεται: τελείωσε το 1905, όταν ο Κάιζερ Γουλιέλμος ο Β΄ ήθελε μια εκκλησία τόσο μεγαλόπρεπη όσο οι πιο μεγάλες της Ευρώπης. Ο τρούλος της είναι από χαλκό, που με τη βροχή και τον χρόνο γίνεται πράσινος. Στον πόλεμο τραυματίστηκε βαριά και χρειάστηκαν δεκαετίες για να επισκευαστεί· άνοιξε ξανά το 1993. Μπροστά της, στο γρασίδι του Lustgarten (του «Κήπου της Χαράς»), στέκεται η τεράστια γαβάθα από γρανίτη: σκαλίστηκε από έναν και μόνο βράχο, τελείωσε το 1831, έχει φάρδος σχεδόν 7 μέτρα και ζυγίζει όσο περισσότεροι από δέκα ελέφαντες! Το νησί πίσω σου έχει πέντε μουσεία: εκεί ζει η προτομή της Νεφερτίτης, και εκεί ξαναστήθηκε πέτρα πέτρα ο τεράστιος βωμός της Περγάμου, μιας αρχαίας ελληνικής πόλης στη Μικρά Ασία. Ένα ολόκληρο νησί μόνο για μουσεία!',
        en: 'This church is younger than it looks: it was finished in 1905, when Kaiser Wilhelm II wanted a church as grand as the greatest ones in Europe. Its dome is made of copper, which turns green with rain and time. In the war it was badly hurt, and it took decades to repair; it reopened in 1993. In front of it, on the lawn of the Lustgarten (the “pleasure garden”), stands the huge granite bowl: it was carved from a single boulder, finished in 1831, is almost 7 metres wide and weighs more than ten elephants! The island behind you holds five museums: the bust of Queen Nefertiti lives there, and so does the giant altar of Pergamon, an ancient Greek city in Asia Minor, rebuilt stone by stone. A whole island just for museums!',
      },
      didYouKnow: {
        el: 'Ο τρούλος ήταν αρχικά 114 μέτρα ψηλός· μετά τον πόλεμο ξαναχτίστηκε απλούστερος, στα 98 μέτρα. Η γρανιτένια γαβάθα προοριζόταν για το εσωτερικό του Altes Museum, αλλά βγήκε τόσο μεγάλη που, όπως λένε, δεν χωρούσε από την πόρτα, και έμεινε στον κήπο. Η Museumsinsel είναι Μνημείο Παγκόσμιας Κληρονομιάς της UNESCO από το 1999.',
        en: 'The dome was originally 114 metres tall; after the war it was rebuilt in a simpler form, 98 metres high. The granite bowl was meant for the inside of the Altes Museum, but it came out so large that, as the story goes, it could not fit through the door, so it stayed in the garden. The Museumsinsel has been a UNESCO World Heritage Site since 1999.',
      },
      quiz: [
        {
          q: { el: 'Γιατί ο τρούλος είναι πράσινος;', en: 'Why is the dome green?' },
          options: {
            el: ['Γιατί τον έβαψαν πράσινο', 'Γιατί φυτρώνει γρασίδι επάνω του', 'Γιατί είναι από χαλκό, που πρασινίζει με τη βροχή και τον χρόνο', 'Γιατί είναι από γυαλί'],
            en: ['Because it was painted green', 'Because grass grows on it', 'Because it is made of copper, which turns green with rain and time', 'Because it is made of glass'],
          },
          correct: 2,
          explanation: {
            el: 'Ο χαλκός είναι στην αρχή καφέ-κόκκινος, αλλά με τη βροχή και τον αέρα αποκτά σιγά σιγά ένα πράσινο «δέρμα» που τον προστατεύει.',
            en: 'Copper starts out reddish-brown, but rain and air slowly give it a green “skin” that protects it.',
          },
        },
        {
          q: { el: 'Από πόσους βράχους φτιάχτηκε η γρανιτένια γαβάθα;', en: 'How many boulders was the granite bowl made from?' },
          options: {
            el: ['Από εκατό μικρά κομμάτια', 'Από έναν και μόνο βράχο', 'Από δέκα βράχους', 'Δεν είναι από πέτρα, είναι από τσιμέντο'],
            en: ['A hundred small pieces', 'One single boulder', 'Ten boulders', 'It is not stone, it is concrete'],
          },
          correct: 1,
          explanation: {
            el: 'Οι τεχνίτες σκάλισαν τη γαβάθα από έναν τεράστιο βράχο που βρήκαν έξω από το Βερολίνο και τον έφεραν με βάρκα από το ποτάμι.',
            en: 'The craftsmen carved the bowl from one enormous boulder found outside Berlin and brought it here by boat along the river.',
          },
        },
        {
          q: { el: 'Πόσα μουσεία έχει το νησί;', en: 'How many museums are on the island?' },
          options: {
            el: ['Πέντε', 'Ένα', 'Δώδεκα', 'Πενήντα'],
            en: ['Five', 'One', 'Twelve', 'Fifty'],
          },
          correct: 0,
          explanation: {
            el: 'Πέντε μεγάλα μουσεία μοιράζονται το νησί. Το πιο παλιό, το Altes Museum, άνοιξε το 1830.',
            en: 'Five big museums share the island. The oldest, the Altes Museum, opened in 1830.',
          },
        },
      ],
    },

    // ── 8. Fernsehturm / Alexanderplatz ────────────────────────────────────────
    {
      id: 'tv-tower',
      name: { el: 'Fernsehturm', en: 'Fernsehturm' },
      emoji: '📡',
      lat: 52.5207,
      lng: 13.4095,
      radiusM: 60,
      riddle: {
        el: 'Μια τσιμεντένια βελόνα τρυπάει τα σύννεφα και έχει στη μέση της μια ασημένια μπάλα, που όταν τη χτυπάει ο ήλιος λάμπει σαν ντισκομπάλα. Στην πλατεία δίπλα της, ένα ρολόι ξέρει τι ώρα είναι στην Αθήνα!',
        en: 'A concrete needle pokes into the clouds with a silver ball halfway up, which shines like a disco ball when the sun hits it. In the square beside it, a clock knows what time it is in Athens!',
      },
      parentHint: {
        el: 'Είναι ο Fernsehturm (Φέρνζεετουρμ, ο Πύργος της Τηλεόρασης) στην Alexanderplatz. Από τον Lustgarten περπατήστε 10 λεπτά ανατολικά από την Karl-Liebknecht-Straße· ο πύργος φαίνεται από παντού. Σταθείτε στην πλατεία στα πόδια του, δίπλα στην εκκλησία Marienkirche. Η Weltzeituhr (το Παγκόσμιο Ρολόι) είναι 300 μέτρα πιο πέρα, στην ίδια την Alexanderplatz.',
        en: 'It is the Fernsehturm, the TV Tower, at Alexanderplatz. From the Lustgarten walk 10 minutes east along Karl-Liebknecht-Straße; the tower is visible from everywhere. Stand on the plaza at its foot, next to the Marienkirche church. The Weltzeituhr, the World Clock, is 300 metres further on, on Alexanderplatz itself.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι ένα ρολόι ξέρει την ώρα στην Αθήνα. Όταν στο Βερολίνο είναι 12 το μεσημέρι, τι ώρα είναι στην Αθήνα;', en: 'The riddle says a clock knows the time in Athens. When it is 12 noon in Berlin, what time is it in Athens?' },
        options: {
          el: ['11 το πρωί', '1 το μεσημέρι', '12 το μεσημέρι', '6 το απόγευμα'],
          en: ['11 in the morning', '1 in the afternoon', '12 noon', '6 in the evening'],
        },
        correct: 1,
        explanation: {
          el: 'Η Ελλάδα είναι πιο ανατολικά, οπότε ο ήλιος ανατέλλει εκεί νωρίτερα και τα ρολόγια της είναι μία ώρα μπροστά. Το Παγκόσμιο Ρολόι δείχνει την ώρα σε 148 πόλεις ταυτόχρονα.',
          en: 'Greece lies further east, so the sun rises there earlier and its clocks are one hour ahead. The World Clock shows the time in 148 cities at once.',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε ψηλά την ασημένια μπάλα. Πώς είναι φτιαγμένη η επιφάνειά της;', en: 'Look up at the silver ball. What is its surface made of?' },
        options: {
          el: ['Λεία σαν αυγό', 'Από γυαλί που βλέπεις μέσα', 'Από πολλά μικρά μεταλλικά κομμάτια, σαν ντισκομπάλα', 'Από τούβλα'],
          en: ['Smooth like an egg', 'See-through glass', 'Lots of small metal pieces, like a disco ball', 'Bricks'],
        },
        correct: 2,
        explanation: {
          el: 'Η μπάλα είναι ντυμένη με εκατοντάδες γυαλιστερά ατσάλινα κομμάτια. Όταν ο ήλιος πέφτει πάνω τους, σχηματίζουν έναν φωτεινό σταυρό. Αν έχει ήλιο σήμερα, ψάξ\' τον!',
          en: 'The ball is covered in hundreds of shiny steel panels. When the sun falls on them, they form a bright cross. If it is sunny today, look for it!',
        },
      },
      story: {
        el: 'Το 1969 η Ανατολική Γερμανία ήθελε να δείξει σε όλον τον κόσμο τι μπορούσε να χτίσει, και σήκωσε αυτόν τον πύργο των 368 μέτρων, το πιο ψηλό κτίσμα της Γερμανίας μέχρι σήμερα. Η μπάλα του στέκεται περίπου 200 μέτρα ψηλά και μέσα της υπάρχει ένα εστιατόριο που γυρίζει σιγά σιγά, για να βλέπεις όλη την πόλη χωρίς να σηκωθείς από την καρέκλα σου! Οι Βερολινέζοι του έδωσαν πολλά παρατσούκλια, όπως «τηλε-σπαράγγι». Όταν ο ήλιος λάμπει, η μπάλα αντανακλά έναν φωτεινό σταυρό, και οι κάτοικοι του Δυτικού Βερολίνου τον έλεγαν χαμογελώντας «η εκδίκηση του Πάπα». Στην πλατεία δίπλα, το Παγκόσμιο Ρολόι, που στήθηκε την ίδια χρονιά, δείχνει την ώρα σε 148 πόλεις. Οι Βερολινέζοι λένε την πλατεία απλώς «Alex».',
        en: 'In 1969 East Germany wanted to show the whole world what it could build, and it raised this 368-metre tower, still the tallest structure in Germany today. The ball sits about 200 metres up, and inside it a restaurant turns slowly round, so you can see the whole city without leaving your chair! Berliners gave the tower many nicknames, like “tele-asparagus”. When the sun shines, the ball reflects a bright cross, and people in West Berlin smiled and called it “the Pope\'s revenge”. In the square next door, the World Clock, put up the same year, shows the time in 148 cities. Berliners simply call the square “Alex”.',
      },
      didYouKnow: {
        el: 'Ο σταυρός στη μπάλα δεν ήταν στα σχέδια: ενοχλούσε την κυβέρνηση της Ανατολικής Γερμανίας, που δεν συμπαθούσε ιδιαίτερα τις εκκλησίες, και οι Δυτικοβερολινέζοι τον βάφτισαν «η εκδίκηση του Πάπα». Το Παγκόσμιο Ρολόι, έργο του σχεδιαστή Erich John, ζυγίζει 16 τόνους, και στην κορυφή του ένα μοντέλο του ηλιακού συστήματος κάνει μία πλήρη περιστροφή κάθε λεπτό.',
        en: 'The cross on the ball was never in the plans: it annoyed the East German government, which had little love for churches, and West Berliners christened it “the Pope\'s revenge”. The World Clock, designed by Erich John, weighs 16 tonnes, and the model of the solar system on top of it makes one full turn every minute.',
      },
      quiz: [
        {
          q: { el: 'Πόσο ψηλός είναι ο πύργος;', en: 'How tall is the tower?' },
          options: {
            el: ['36 μέτρα', '100 μέτρα', '1.000 μέτρα', '368 μέτρα'],
            en: ['36 metres', '100 metres', '1,000 metres', '368 metres'],
          },
          correct: 3,
          explanation: {
            el: 'Ο πύργος έχει ύψος 368 μέτρα, όσο περίπου εκατό όροφοι, και είναι το πιο ψηλό κτίσμα της Γερμανίας.',
            en: 'The tower is 368 metres tall, about the height of a hundred floors, and it is the tallest structure in Germany.',
          },
        },
        {
          q: { el: 'Τι ιδιαίτερο κάνει το εστιατόριο μέσα στη μπάλα;', en: 'What is special about the restaurant inside the ball?' },
          options: {
            el: ['Σερβίρει μόνο παγωτό', 'Είναι κάτω από το νερό', 'Γυρίζει σιγά σιγά γύρω γύρω', 'Πετάει'],
            en: ['It only serves ice cream', 'It is under water', 'It slowly turns round and round', 'It flies'],
          },
          correct: 2,
          explanation: {
            el: 'Το εστιατόριο γυρίζει τόσο αργά που δεν το νιώθεις, αλλά σε λίγη ώρα έχεις δει όλη την πόλη από το παράθυρό σου.',
            en: 'The restaurant turns so slowly that you cannot feel it, but after a while you have seen the whole city from your window.',
          },
        },
        {
          q: { el: 'Σε πόσες πόλεις δείχνει την ώρα το Παγκόσμιο Ρολόι;', en: 'How many cities does the World Clock show the time for?' },
          options: {
            el: ['Σε 5', 'Σε 148', 'Σε 1.000', 'Σε 2'],
            en: ['5', '148', '1,000', '2'],
          },
          correct: 1,
          explanation: {
            el: 'Το Παγκόσμιο Ρολόι δείχνει την ώρα σε 148 πόλεις του κόσμου. Ψάξε την Αθήνα πάνω στον κύλινδρό του!',
            en: 'The World Clock shows the time in 148 cities around the world. Look for Athens on its cylinder!',
          },
        },
      ],
    },

    // ── 9. Nikolaiviertel ──────────────────────────────────────────────────────
    {
      id: 'nikolaiviertel',
      name: { el: 'Nikolaiviertel', en: 'Nikolaiviertel' },
      emoji: '🐻',
      lat: 52.5167,
      lng: 13.4073,
      radiusM: 70,
      riddle: {
        el: 'Εδώ γεννήθηκε η πόλη, πριν από σχεδόν 800 χρόνια: μικρά πλακόστρωτα δρομάκια, μια εκκλησία με μυτερά καπέλα και, δίπλα στο ποτάμι, ένας ιππότης που παλεύει με έναν δράκο. Ψάξε την αρκούδα, είναι παντού!',
        en: 'This is where the city was born, almost 800 years ago: little cobbled lanes, a church with pointy hats and, by the river, a knight fighting a dragon. Look for the bear, it is everywhere!',
      },
      parentHint: {
        el: 'Είναι το Nikolaiviertel (Νικολάιφιρτελ, η «Γειτονιά του Αγίου Νικολάου»). Από τον πύργο περπατήστε 8 λεπτά νότια από τη Spandauer Straße, περάστε το κόκκινο δημαρχείο (Rotes Rathaus) και ακολουθήστε τις πινακίδες προς την εκκλησία Nikolaikirche. Το άγαλμα του Αγίου Γεωργίου είναι στην όχθη του ποταμού Spree, στον δρόμο Spreeufer.',
        en: 'It is the Nikolaiviertel, the St Nicholas quarter. From the tower walk 8 minutes south along Spandauer Straße, pass the red town hall (Rotes Rathaus) and follow the signs to the Nikolaikirche church. The statue of Saint George stands on the bank of the river Spree, on the street called Spreeufer.',
      },
      unlockQuestion: {
        question: { el: 'Ο γρίφος λέει ότι η αρκούδα είναι παντού. Γιατί;', en: 'The riddle says the bear is everywhere. Why?' },
        options: {
          el: ['Γιατί στους δρόμους του Βερολίνου ζουν άγριες αρκούδες', 'Γιατί οι Βερολινέζοι αγαπούν το μέλι', 'Γιατί η αρκούδα είναι το σύμβολο του Βερολίνου, πάνω στη σημαία και στο οικόσημό του', 'Γιατί ένας βασιλιάς είχε μια αρκούδα για κατοικίδιο'],
          en: ['Because wild bears live in the streets of Berlin', 'Because Berliners love honey', 'Because the bear is the symbol of Berlin, on its flag and coat of arms', 'Because a king kept a bear as a pet'],
        },
        correct: 2,
        explanation: {
          el: 'Η αρκούδα είναι πάνω στη σφραγίδα του Βερολίνου εδώ και περισσότερα από 700 χρόνια. Στα γερμανικά η αρκούδα λέγεται Bär (μπερ), και ακούγεται σαν την αρχή της λέξης Berlin!',
          en: 'The bear has been on Berlin\'s seal for more than 700 years. In German a bear is called Bär, which sounds like the start of the word Berlin!',
        },
      },
      onSite: {
        question: { el: 'Κοίταξε την εκκλησία στη μέση της γειτονιάς. Πόσους μυτερούς πύργους έχει;', en: 'Look at the church in the middle of the quarter. How many pointed spires does it have?' },
        options: {
          el: ['Έναν', 'Τέσσερις', 'Τρεις', 'Δύο'],
          en: ['One', 'Four', 'Three', 'Two'],
        },
        correct: 3,
        explanation: {
          el: 'Δύο μυτεροί πύργοι. Για αιώνες η εκκλησία είχε μόνο έναν· ο δεύτερος προστέθηκε τη δεκαετία του 1870. Σήμερα μέσα της δεν γίνονται λειτουργίες, είναι μουσείο για την ιστορία της πόλης.',
          en: 'Two pointed spires. For centuries the church had only one; the second was added in the 1870s. Today there are no services inside, it is a museum about the history of the city.',
        },
      },
      story: {
        el: 'Πριν από σχεδόν 800 χρόνια, γύρω στο 1230, έμποροι και ψαράδες έχτισαν εδώ, δίπλα στο ποτάμι Spree (Σπρέε), τα πρώτα σπίτια και μια πέτρινη εκκλησία, τη Nikolaikirche (Νικολάικιρχε). Στην αρχή ήταν δύο μικρές πόλεις, το Βερολίνο σε αυτή την όχθη και το Cölln (Κελν) απέναντι, που αργότερα ενώθηκαν. Στον πόλεμο η γειτονιά σχεδόν εξαφανίστηκε. Τη δεκαετία του 1980 το Ανατολικό Βερολίνο την ξανάχτισε για τα 750ά γενέθλια της πόλης, με στενά δρομάκια και μικρές πλατείες, ώστε να μοιάζει ξανά παλιά. Στην όχθη του ποταμού, ο Άγιος Γεώργιος, ένας μπρούντζινος ιππότης του 1855, παλεύει με τον δράκο του. Και όπου κι αν κοιτάξεις, μια αρκούδα σε παρακολουθεί: είναι το σύμβολο της πόλης εδώ και εκατοντάδες χρόνια!',
        en: 'Almost 800 years ago, around 1230, merchants and fishermen built the first houses here beside the river Spree, along with a stone church, the Nikolaikirche. At first there were two little towns, Berlin on this bank and Cölln on the other, which later joined into one. In the war the quarter almost disappeared. In the 1980s East Berlin rebuilt it for the city\'s 750th birthday, with narrow lanes and tiny squares, so that it would look old again. On the riverbank, Saint George, a bronze knight from 1855, fights his dragon. And wherever you look, a bear is watching you: it has been the symbol of the city for hundreds of years!',
      },
      didYouKnow: {
        el: 'Το όνομα «Βερολίνο» μάλλον δεν έχει σχέση με αρκούδες: πιθανότατα προέρχεται από μια παλιά σλαβική λέξη για τον βάλτο, και η αρκούδα μπήκε στη σφραγίδα της πόλης τον 13ο αιώνα ως λογοπαίγνιο με τη γερμανική λέξη Bär. Πολλά «παλιά» σπίτια της γειτονιάς είναι στην πραγματικότητα προκατασκευασμένα πάνελ από μπετόν της δεκαετίας του 1980, ντυμένα σε παλιό στιλ.',
        en: 'The name “Berlin” probably has nothing to do with bears: it most likely comes from an old Slavic word for swamp, and the bear joined the city seal in the 13th century as a pun on the German word Bär. Many of the quarter\'s “old” houses are actually prefabricated concrete panels from the 1980s, dressed up in historic style.',
      },
      quiz: [
        {
          q: { el: 'Πώς λεγόταν η μικρή πόλη απέναντι από το Βερολίνο, στην άλλη όχθη;', en: 'What was the little town across the river from Berlin called?' },
          options: {
            el: ['Cölln', 'Παρίσι', 'Μόναχο', 'Πότσδαμ'],
            en: ['Cölln', 'Paris', 'Munich', 'Potsdam'],
          },
          correct: 0,
          explanation: {
            el: 'Το Cölln ήταν η δίδυμη πόλη του Βερολίνου, πάνω στο νησί του ποταμού. Οι δύο πόλεις ενώθηκαν και κράτησαν το όνομα Βερολίνο.',
            en: 'Cölln was Berlin\'s twin town, on the island in the river. The two towns joined together and kept the name Berlin.',
          },
        },
        {
          q: { el: 'Γιατί ξαναχτίστηκε η γειτονιά τη δεκαετία του 1980;', en: 'Why was the quarter rebuilt in the 1980s?' },
          options: {
            el: ['Για να γίνει εμπορικό κέντρο', 'Για τα 750ά γενέθλια της πόλης', 'Για μια ταινία', 'Για να μείνει ο βασιλιάς'],
            en: ['To become a shopping centre', 'For the city\'s 750th birthday', 'For a film', 'For the king to live in'],
          },
          correct: 1,
          explanation: {
            el: 'Το 1987 το Βερολίνο γιόρτασε τα 750 χρόνια του, και η παλιά γειτονιά ξαναχτίστηκε για τη γιορτή.',
            en: 'In 1987 Berlin celebrated its 750th birthday, and the old quarter was rebuilt for the party.',
          },
        },
        {
          q: { el: 'Με ποιον παλεύει ο ιππότης στην όχθη του ποταμού;', en: 'What is the knight on the riverbank fighting?' },
          options: {
            el: ['Με ένα λιοντάρι', 'Με έναν γίγαντα', 'Με μια αρκούδα', 'Με έναν δράκο'],
            en: ['A lion', 'A giant', 'A bear', 'A dragon'],
          },
          correct: 3,
          explanation: {
            el: 'Είναι ο Άγιος Γεώργιος, ο ιππότης που στον θρύλο νίκησε έναν δράκο. Το μπρούντζινο άγαλμα φτιάχτηκε το 1855.',
            en: 'It is Saint George, the knight who defeated a dragon in the legend. The bronze statue was made in 1855.',
          },
        },
      ],
    },

    // ── 10. East Side Gallery ──────────────────────────────────────────────────
    {
      id: 'east-side-gallery',
      name: { el: 'East Side Gallery', en: 'East Side Gallery' },
      emoji: '🎨',
      lat: 52.5053,
      lng: 13.4382,
      radiusM: 120,
      riddle: {
        el: 'Ένα μακρύ, μακρύ κομμάτι από το Τείχος που κανείς δεν γκρέμισε· αντίθετα, έγινε το μεγαλύτερο υπαίθριο μουσείο ζωγραφικής! Ψάξε ένα μικρό αυτοκίνητο που περνάει μέσα από τον τοίχο και, στην άκρη, μια γέφυρα με δύο πύργους σαν κάστρο.',
        en: 'A long, long piece of the Wall that nobody knocked down; instead it became the biggest open-air painting gallery! Look for a little car bursting through the wall and, at the end, a bridge with two towers like a castle.',
      },
      parentHint: {
        el: 'Είναι η East Side Gallery (η «Γκαλερί της Ανατολικής Πλευράς») στη Mühlenstraße. Από την Alexanderplatz πάρτε το S-Bahn (S3, S5, S7 ή S9) δύο στάσεις ως τον Ostbahnhof, περπατήστε 5 λεπτά προς το ποτάμι και ακολουθήστε το Τείχος ως τη γέφυρα Oberbaumbrücke (περίπου 20 λεπτά περπάτημα)· το αυτοκίνητο και το φιλί είναι από τους πιο διάσημους πίνακες. Το σημείο ξεκλειδώνει μπροστά στον πίνακα με το φιλί, περίπου στη μέση της διαδρομής. Επιστροφή με το U1 ή το S-Bahn από τη Warschauer Straße.',
        en: 'It is the East Side Gallery, on Mühlenstraße. From Alexanderplatz take the S-Bahn (S3, S5, S7 or S9) two stops to Ostbahnhof, walk 5 minutes towards the river and follow the Wall all the way to the Oberbaumbrücke bridge (about 20 minutes on foot); the car and the kiss are among the most famous paintings. The spot unlocks in front of the kiss painting, about halfway along. Head back on the U1 or the S-Bahn from Warschauer Straße.',
      },
      unlockQuestion: {
        question: { el: 'Πότε έπεσε το Τείχος του Βερολίνου;', en: 'When did the Berlin Wall fall?' },
        options: {
          el: ['Το 1989', 'Το 1945', 'Το 2010', 'Το 1789'],
          en: ['In 1989', 'In 1945', 'In 2010', 'In 1789'],
        },
        correct: 0,
        explanation: {
          el: 'Τη νύχτα της 9ης Νοεμβρίου 1989 άνοιξαν τα περάσματα και οι άνθρωποι χόρεψαν πάνω στο Τείχος. Την επόμενη άνοιξη ήρθαν οι ζωγράφοι σε αυτό το κομμάτι.',
          en: 'On the night of 9 November 1989 the crossings opened and people danced on top of the Wall. The next spring, the painters arrived at this piece.',
        },
      },
      onSite: {
        question: { el: 'Στάσου δίπλα στο Τείχος και υπολόγισε: πόσο ψηλό είναι σε σχέση με έναν μεγάλο άνθρωπο;', en: 'Stand next to the Wall and work it out: how tall is it compared with a grown-up?' },
        options: {
          el: ['Όσο ένας μεγάλος', 'Όσο δύο μεγάλοι ο ένας πάνω στον άλλο', 'Όσο πέντε μεγάλοι', 'Ως το γόνατό σου'],
          en: ['As tall as one grown-up', 'As tall as two grown-ups standing on each other', 'As tall as five grown-ups', 'Up to your knee'],
        },
        correct: 1,
        explanation: {
          el: 'Το Τείχος έχει ύψος περίπου 3,6 μέτρα, όσο δύο μεγάλοι ο ένας πάνω στον άλλο. Στην κορυφή του υπήρχε ένας στρογγυλός σωλήνας από τσιμέντο, για να μην μπορεί κανείς να πιαστεί με τα χέρια.',
          en: 'The Wall is about 3.6 metres tall, as tall as two grown-ups standing on each other. Along the top ran a round concrete pipe, so that nobody could get a grip with their hands.',
        },
      },
      story: {
        el: 'Το Τείχος του Βερολίνου στάθηκε 28 χρόνια, από το 1961 ως τις 9 Νοεμβρίου 1989, τη νύχτα που άνοιξαν τα περάσματα και οι άνθρωποι χόρεψαν πάνω του. Τους επόμενους μήνες σχεδόν όλο το Τείχος γκρεμίστηκε, αλλά αυτό το κομμάτι, μήκους 1,3 χιλιομέτρων, κρατήθηκε για κάτι διαφορετικό. Την άνοιξη του 1990, 118 καλλιτέχνες από 21 χώρες ήρθαν με πινέλα και κουβάδες και το γέμισαν χρώματα, ελπίδες και αστεία. Ο πιο διάσημος πίνακας δείχνει δύο πολιτικούς, τους αρχηγούς της Σοβιετικής Ένωσης και της Ανατολικής Γερμανίας, να δίνουν ο ένας στον άλλο ένα μεγάλο φιλί, όπως χαιρετιόνταν τότε οι αρχηγοί των φιλικών χωρών. Σε έναν άλλο, ένα μικρό Trabant (Τράμπαντ), το αυτοκίνητο που οδηγούσαν σχεδόν όλοι στην Ανατολική Γερμανία, σπάει τον τοίχο και βγαίνει από την άλλη μεριά. Ένας τοίχος που χώριζε έγινε ένας καμβάς που ενώνει.',
        en: 'The Berlin Wall stood for 28 years, from 1961 until 9 November 1989, the night the crossings opened and people danced on top of it. Over the next months almost all of the Wall was knocked down, but this piece, 1.3 kilometres long, was kept for something different. In the spring of 1990, 118 artists from 21 countries arrived with brushes and buckets and covered it with colours, hopes and jokes. The most famous painting shows two politicians, the leaders of the Soviet Union and East Germany, giving each other a big kiss, the way leaders of friendly countries greeted each other back then. In another, a little Trabant, the car almost everybody drove in East Germany, smashes through the wall and comes out on the other side. A wall that divided became a canvas that unites.',
      },
      didYouKnow: {
        el: 'Ο πίνακας με το φιλί, έργο του Ρώσου ζωγράφου Dmitri Vrubel, βασίζεται σε αληθινή φωτογραφία του 1979 και έχει τίτλο «Θεέ μου, βοήθησέ με να επιζήσω από αυτή τη θανάσιμη αγάπη». Η πινακίδα του Trabant στον πίνακα της Birgit Kinder γράφει «NOV-9-89», την ημερομηνία που άνοιξε το Τείχος, και η γέφυρα Oberbaumbrücke με τους δύο πύργους έχει δύο ορόφους: από πάνω περνάει το μετρό, από κάτω τα αυτοκίνητα.',
        en: 'The kiss mural, by the Russian painter Dmitri Vrubel, is based on a real photograph from 1979 and is titled “My God, Help Me to Survive This Deadly Love”. The Trabant\'s number plate in Birgit Kinder\'s painting reads “NOV-9-89”, the date the Wall opened, and the two-towered Oberbaumbrücke has two levels: the metro runs across the top and cars drive underneath.',
      },
      quiz: [
        {
          q: { el: 'Πόσο μακρύ είναι αυτό το κομμάτι του Τείχους;', en: 'How long is this piece of the Wall?' },
          options: {
            el: ['13 μέτρα', '130 χιλιόμετρα', 'Περίπου 1,3 χιλιόμετρα', '3 μέτρα'],
            en: ['13 metres', '130 kilometres', 'About 1.3 kilometres', '3 metres'],
          },
          correct: 2,
          explanation: {
            el: 'Περίπου 1,3 χιλιόμετρα, το μεγαλύτερο κομμάτι του Τείχους που στέκεται ακόμη. Χρειάζεσαι 20 λεπτά για να το περπατήσεις.',
            en: 'About 1.3 kilometres, the longest piece of the Wall still standing. It takes 20 minutes to walk along it.',
          },
        },
        {
          q: { el: 'Τι κάνει το μικρό αυτοκίνητο στον διάσημο πίνακα;', en: 'What is the little car doing in the famous painting?' },
          options: {
            el: ['Πετάει πάνω από τον τοίχο', 'Κοιμάται', 'Κάνει αγώνα με ένα τρένο', 'Σπάει τον τοίχο και περνάει από την άλλη μεριά'],
            en: ['Flying over the wall', 'Sleeping', 'Racing a train', 'Smashing through the wall to the other side'],
          },
          correct: 3,
          explanation: {
            el: 'Το μικρό Trabant σπάει τον τοίχο και βγαίνει από την άλλη μεριά, όπως έκαναν χιλιάδες άνθρωποι τη νύχτα που άνοιξε το Τείχος.',
            en: 'The little Trabant smashes through the wall and comes out on the other side, just as thousands of people did on the night the Wall opened.',
          },
        },
        {
          q: { el: 'Ποιοι ζωγράφισαν το Τείχος το 1990;', en: 'Who painted the Wall in 1990?' },
          options: {
            el: ['118 καλλιτέχνες από 21 χώρες', 'Μόνο ένας ζωγράφος', 'Παιδιά από ένα σχολείο', 'Ρομπότ'],
            en: ['118 artists from 21 countries', 'Just one painter', 'Children from one school', 'Robots'],
          },
          correct: 0,
          explanation: {
            el: '118 καλλιτέχνες από 21 χώρες ήρθαν την άνοιξη του 1990 και ζωγράφισαν ο καθένας το δικό του κομμάτι.',
            en: '118 artists from 21 countries came in the spring of 1990, and each painted their own piece.',
          },
        },
      ],
    },
  ],
};
