/**
 * WiseBot Explorer · Πόρτο / Porto
 * ================================
 * Ten spots from the top of the hill down to the Douro, across the Ponte Luís I to the
 * Serra do Pilar and back up to the Palácio de Cristal gardens. Original text only, facts
 * checked; child-level Greek and English. Coordinates are where a family actually stands.
 *
 * Route: São Bento → Carmo → Clérigos → Bolhão → Sé → Bolsa → Ribeira → Ponte Luís I →
 *        Serra do Pilar → Palácio de Cristal
 */
import type { ExploreCity } from '../types';

export const CITY: ExploreCity = {
  id: 'porto',
  name: { el: 'Πόρτο', en: 'Porto' },
  country: { el: 'Πορτογαλία', en: 'Portugal' },
  countryCode: 'PT',
  emoji: '🌉',
  center: { lat: 41.1450, lng: -8.6130 },
  zoom: 14,
  intro: {
    el: 'Καλώς ήρθατε στο Πόρτο, εξερευνητές! Είμαι ο WiseBot, η κουκουβάγια-οδηγός σας, κι εδώ ο ποταμός Δούρος (Douro) κυλάει ανάμεσα σε λόφους γεμάτους πολύχρωμα σπίτια. Θα περάσουμε γέφυρες από σίδερο, θα διαβάσουμε ιστορίες ζωγραφισμένες σε μπλε πλακάκια και θα δούμε τις παλιές βάρκες με τα βαρέλια να λικνίζονται στο νερό. Πιάστε το χέρι των γονιών σας: ξεκινάμε από ψηλά και κατεβαίνουμε σιγά σιγά ως το ποτάμι!',
    en: 'Welcome to Porto, explorers! I am WiseBot, your owl guide, and here the river Douro flows between hills covered in colourful houses. We will cross bridges made of iron, read stories painted on blue tiles, and watch the old boats with their barrels bobbing on the water. Hold your parents\' hand: we start at the top of the hill and wind our way down to the river!',
  },
  route: [
    'sao-bento-station',
    'igreja-do-carmo',
    'torre-dos-clerigos',
    'mercado-do-bolhao',
    'se-do-porto',
    'palacio-da-bolsa',
    'ribeira',
    'ponte-luis-i',
    'mosteiro-serra-do-pilar',
    'jardins-palacio-de-cristal',
  ],
  spots: [
    // ── 1. São Bento ────────────────────────────────────────────────────────────
    {
      id: 'sao-bento-station',
      name: { el: 'Σταθμός São Bento', en: 'São Bento Station' },
      emoji: '🚂',
      lat: 41.1456,
      lng: -8.6106,
      radiusM: 40,
      riddle: {
        el: 'Τρένα φτάνουν και φεύγουν, μα οι τοίχοι εδώ λένε ιστορίες με χιλιάδες μπλε πλακάκια. Βρες την αίθουσα όπου η ιστορία ταξιδεύει!',
        en: 'Trains come and go, but the walls here tell stories in thousands of blue tiles. Find the hall where history takes a ride!',
      },
      parentHint: {
        el: 'Ο σιδηροδρομικός σταθμός São Bento. Είναι η αφετηρία της διαδρομής: βρίσκεται στην Praça de Almeida Garrett, στο κάτω άκρο της Avenida dos Aliados.',
        en: 'São Bento railway station. This is the starting point: it stands on Praça de Almeida Garrett, at the bottom end of Avenida dos Aliados.',
      },
      unlockQuestion: {
        question: { el: 'Τι είδους κτίριο είναι αυτό με τα χιλιάδες πλακάκια;', en: 'What kind of building is this place with the thousands of tiles?' },
        options: {
          el: ['Ένα μουσείο ζωγραφικής', 'Ένας σιδηροδρομικός σταθμός', 'Ένα κάστρο', 'Ένα σχολείο'],
          en: ['An art museum', 'A railway station', 'A castle', 'A school'],
        },
        correct: 1,
        explanation: {
          el: 'Είναι ο σταθμός των τρένων του Πόρτο. Τα ζωγραφιστά πλακάκια λέγονται αζουλέζους (azulejos) και είναι η πιο αγαπημένη διακόσμηση της Πορτογαλίας.',
          en: 'It is Porto\'s railway station. The painted tiles are called azulejos, and they are Portugal\'s favourite way to decorate a wall.',
        },
      },
      onSite: {
        question: { el: 'Κοίτα τα μεγάλα πάνελ στους τοίχους της αίθουσας. Τι χρώμα έχουν τα πλακάκια;', en: 'Look at the big panels on the walls of the hall. What colour are the tiles?' },
        options: {
          el: ['Κόκκινα και κίτρινα', 'Πράσινα και άσπρα', 'Μπλε και άσπρα', 'Μαύρα και χρυσά'],
          en: ['Red and yellow', 'Green and white', 'Blue and white', 'Black and gold'],
        },
        correct: 2,
        explanation: {
          el: 'Τα μεγάλα πάνελ είναι μπλε και άσπρα, όπως τα περισσότερα παλιά αζουλέζους. Μόνο η λωρίδα ψηλά, που δείχνει την ιστορία των μεταφορών, έχει πολλά χρώματα.',
          en: 'The big panels are blue and white, like most old azulejos. Only the band at the top, showing the history of transport, is painted in many colours.',
        },
      },
      story: {
        el: 'Πριν από πάνω από εκατό χρόνια, αυτή η αίθουσα ήταν ένας πολυσύχναστος σιδηροδρομικός σταθμός, και είναι ακόμα. Οι άνθρωποι του Πόρτο όμως ήθελαν οι ταξιδιώτες να βλέπουν κάτι ξεχωριστό όσο περιμένουν. Έτσι ένας ζωγράφος, ο Jorge Colaço, ζωγράφισε περίπου είκοσι χιλιάδες πλακάκια, ένα ένα, και οι τοίχοι τελείωσαν το 1916. Κοίτα ψηλά και θα δεις ιππότες σε μια μάχη, έναν βασιλιά που μπαίνει στην πόλη με τη βασίλισσά του, και αγρότες που μαζεύουν τη σοδειά. Η Πορτογαλία αγαπάει αυτά τα ζωγραφιστά πλακάκια, τα αζουλέζους, κι εδώ μετατρέπουν έναν σταθμό σε βιβλίο με εικόνες. Ο WiseBot λέει: ακόμα κι ένα μέρος όπου απλώς περιμένεις μπορεί να είναι γεμάτο ιδέες.',
        en: 'More than a hundred years ago, this hall was a busy railway station, and it still is. But the people of Porto wanted travellers to see something special while they waited. So an artist called Jorge Colaço painted about twenty thousand tiles, one by one, and the walls were finished in 1916. Look up and you will see knights in a battle, a king arriving in the city with his queen, and farmers bringing in the harvest. Portugal loves these painted tiles, called azulejos, and here they turn a station into a picture book. WiseBot says: even a place where you only wait can be full of ideas.',
      },
      didYouKnow: {
        el: 'Ο σταθμός χτίστηκε εκεί όπου βρισκόταν ένα παλιό μοναστήρι, το São Bento de Avé-Maria, κι από αυτό πήρε το όνομά του. Ο βασιλιάς Carlos I έβαλε τον θεμέλιο λίθο το 1900.',
        en: 'The station was built where an old convent, São Bento de Avé-Maria, once stood, which is how it got its name. King Carlos I laid the foundation stone in 1900.',
      },
      quiz: [
        {
          q: { el: 'Ποιος ζωγράφισε τα πλακάκια του σταθμού;', en: 'Who painted the tiles of the station?' },
          options: {
            el: ['Ο Jorge Colaço', 'Ο Nicolau Nasoni', 'Ο Gustave Eiffel', 'Ο Ερρίκος ο Θαλασσοπόρος'],
            en: ['Jorge Colaço', 'Nicolau Nasoni', 'Gustave Eiffel', 'Henry the Navigator'],
          },
          correct: 0,
          explanation: {
            el: 'Ο ζωγράφος Jorge Colaço δούλεψε πάνω από δέκα χρόνια για να ζωγραφίσει τα πλακάκια του σταθμού.',
            en: 'The artist Jorge Colaço worked for more than ten years to paint the station\'s tiles.',
          },
        },
        {
          q: { el: 'Περίπου πόσα πλακάκια έχει η αίθουσα;', en: 'About how many tiles are there in the hall?' },
          options: {
            el: ['Διακόσια', 'Είκοσι χιλιάδες', 'Δύο εκατομμύρια', 'Πενήντα'],
            en: ['Two hundred', 'Twenty thousand', 'Two million', 'Fifty'],
          },
          correct: 1,
          explanation: {
            el: 'Περίπου είκοσι χιλιάδες πλακάκια! Αν τα έβαζες σε μια σειρά, θα έφταναν πολύ μακριά.',
            en: 'About twenty thousand tiles! If you laid them in a row, they would stretch a very long way.',
          },
        },
        {
          q: { el: 'Πότε τελείωσαν οι τοίχοι με τα πλακάκια;', en: 'When were the tiled walls finished?' },
          options: {
            el: ['Το 1500', 'Το 1800', 'Το 1916', 'Το 2010'],
            en: ['In 1500', 'In 1800', 'In 1916', 'In 2010'],
          },
          correct: 2,
          explanation: {
            el: 'Οι τοίχοι τελείωσαν το 1916, δηλαδή πριν από πάνω από εκατό χρόνια.',
            en: 'The walls were finished in 1916, more than a hundred years ago.',
          },
        },
      ],
    },

    // ── 2. Igreja do Carmo & Carmelitas ─────────────────────────────────────────
    {
      id: 'igreja-do-carmo',
      name: { el: 'Εκκλησίες Carmo και Carmelitas', en: 'Carmo and Carmelitas Churches' },
      emoji: '⛪',
      lat: 41.1471,
      lng: -8.6160,
      radiusM: 50,
      riddle: {
        el: 'Δύο εκκλησίες στέκονται δίπλα δίπλα σαν δίδυμες, μα ανάμεσά τους κρύβεται ένα σπίτι τόσο στενό που χωράει μόλις μία πόρτα. Θα το βρεις;',
        en: 'Two churches stand side by side like twins, but hiding between them is a house so narrow it barely fits one door. Can you spot it?',
      },
      parentHint: {
        el: 'Οι εκκλησίες Igreja do Carmo και Igreja dos Carmelitas στην Praça de Gomes Teixeira. Από τον São Bento ανεβείτε τη Rua dos Clérigos και συνεχίστε δυτικά περίπου 10 λεπτά· ο μεγάλος γαλάζιος τοίχος με τα πλακάκια βλέπει στην πλατεία.',
        en: 'The Igreja do Carmo and Igreja dos Carmelitas on Praça de Gomes Teixeira. From São Bento walk up Rua dos Clérigos and keep going west for about 10 minutes; the big blue tiled wall faces the square.',
      },
      unlockQuestion: {
        question: { el: 'Το σπιτάκι ανάμεσα στις δύο εκκλησίες είναι διάσημο επειδή είναι…', en: 'The little house between the two churches is famous because it is…' },
        options: {
          el: ['το πιο ψηλό σπίτι της πόλης', 'το πιο παλιό σπίτι της Ευρώπης', 'ένα από τα πιο στενά σπίτια του κόσμου', 'φτιαγμένο ολόκληρο από γυαλί'],
          en: ['the tallest house in the city', 'the oldest house in Europe', 'one of the narrowest houses in the world', 'made entirely of glass'],
        },
        correct: 2,
        explanation: {
          el: 'Το «κρυμμένο σπίτι» (Casa Escondida) έχει πλάτος περίπου ένα μέτρο. Είναι από τα πιο στενά σπίτια στον κόσμο, κι όμως κάποτε έμεναν άνθρωποι μέσα.',
          en: 'The "hidden house" (Casa Escondida) is only about one metre wide. It is one of the narrowest houses in the world, and yet people once lived in it.',
        },
      },
      onSite: {
        question: { el: 'Βρες τον μεγάλο πλαϊνό τοίχο της εκκλησίας Carmo. Με τι είναι σκεπασμένος;', en: 'Find the big side wall of the Igreja do Carmo. What is it covered with?' },
        options: {
          el: ['Με χρυσό', 'Με μπλε και άσπρα πλακάκια', 'Με ξύλο', 'Με καθρέφτες'],
          en: ['Gold', 'Blue and white tiles', 'Wood', 'Mirrors'],
        },
        correct: 1,
        explanation: {
          el: 'Ολόκληρος ο τοίχος είναι μια τεράστια εικόνα από μπλε και άσπρα αζουλέζους, που μπήκε το 1912 και δείχνει την ιστορία των μοναχών του Carmo.',
          en: 'The whole wall is one giant picture made of blue and white azulejos, added in 1912, telling the story of the Carmelite monks.',
        },
      },
      story: {
        el: 'Εδώ δύο εκκλησίες στέκονται ώμο με ώμο. Η πιο παλιά, η Igreja dos Carmelitas (Εκκλησία των Καρμελιτών), χτίστηκε τον 17ο αιώνα για μοναχές, και η Igreja do Carmo προστέθηκε δίπλα της περίπου εκατό χρόνια αργότερα για μοναχούς. Ανάμεσά τους κάποιος έχτισε ένα σπίτι με πλάτος μόλις ένα μέτρο, και άνθρωποι έμεναν εκεί για πολλά πολλά χρόνια. Μια γνωστή ιστορία λέει ότι το σπιτάκι φρόντιζε οι μοναχές και οι μοναχοί να μη μοιράζονται ποτέ τον ίδιο τοίχο. Αργότερα, το 1912, η πλευρά της Igreja do Carmo σκεπάστηκε με μια γιγάντια εικόνα από μπλε αζουλέζους. Ο WiseBot λέει: κοίτα προσεκτικά, γιατί το πιο μικρό πράγμα σε έναν δρόμο μπορεί να έχει τη μεγαλύτερη ιστορία.',
        en: 'Here two churches stand shoulder to shoulder. The older one, the Igreja dos Carmelitas, was built in the 1600s for nuns, and the Igreja do Carmo was added next to it about a hundred years later for monks. Between them, someone built a house only about one metre wide, and people lived in it for a very long time. A popular story says the little house made sure the nuns and the monks never shared a wall. Later, in 1912, the side of the Igreja do Carmo was covered with a giant picture made of blue azulejos. WiseBot says: look closely, because the smallest thing in a street can have the biggest story.',
      },
      didYouKnow: {
        el: 'Το στενό σπίτι δεν είναι απλώς διακόσμηση: κατοικήθηκε πραγματικά, και οι τελευταίοι ένοικοί του έφυγαν μόλις τη δεκαετία του 1980.',
        en: 'The narrow house is not just decoration: it was really inhabited, and its last residents only moved out in the 1980s.',
      },
      quiz: [
        {
          q: { el: 'Πόσο φαρδύ είναι περίπου το κρυμμένο σπίτι;', en: 'About how wide is the hidden house?' },
          options: {
            el: ['Δέκα μέτρα', 'Πέντε μέτρα', 'Τρία μέτρα', 'Περίπου ένα μέτρο'],
            en: ['Ten metres', 'Five metres', 'Three metres', 'About one metre'],
          },
          correct: 3,
          explanation: {
            el: 'Μόλις ένα μέτρο! Άνοιξε τα χέρια σου: περίπου τόσο φαρδύ είναι ολόκληρο το σπίτι.',
            en: 'Just one metre! Stretch out your arms: that is about how wide the whole house is.',
          },
        },
        {
          q: { el: 'Για ποιους χτίστηκε η Igreja dos Carmelitas;', en: 'Who was the Igreja dos Carmelitas built for?' },
          options: {
            el: ['Για μοναχές', 'Για στρατιώτες', 'Για ναυτικούς', 'Για βασιλιάδες'],
            en: ['Nuns', 'Soldiers', 'Sailors', 'Kings'],
          },
          correct: 0,
          explanation: {
            el: 'Η Igreja dos Carmelitas χτίστηκε τον 17ο αιώνα για μοναχές. Η διπλανή Igreja do Carmo ήρθε αργότερα, για μοναχούς.',
            en: 'The Igreja dos Carmelitas was built in the 1600s for nuns. The Igreja do Carmo next door came later, for monks.',
          },
        },
        {
          q: { el: 'Τι σκεπάζει την πλευρά της Igreja do Carmo από το 1912;', en: 'What has covered the side of the Igreja do Carmo since 1912?' },
          options: {
            el: ['Ένας κήπος', 'Μια τεράστια εικόνα από μπλε πλακάκια', 'Ένα ρολόι', 'Ένας τοίχος από γυαλί'],
            en: ['A garden', 'A huge picture made of blue tiles', 'A clock', 'A wall of glass'],
          },
          correct: 1,
          explanation: {
            el: 'Μια γιγάντια εικόνα από μπλε αζουλέζους σκεπάζει ολόκληρη την πλευρά της εκκλησίας από το 1912.',
            en: 'A giant picture made of blue azulejos has covered the whole side of the church since 1912.',
          },
        },
      ],
    },

    // ── 3. Torre dos Clérigos ───────────────────────────────────────────────────
    {
      id: 'torre-dos-clerigos',
      name: { el: 'Πύργος Clérigos', en: 'Clérigos Tower' },
      emoji: '🗼',
      lat: 41.1457,
      lng: -8.6146,
      radiusM: 60,
      riddle: {
        el: 'Ψηλός σαν φάρος μέσα στην πόλη, χτυπάει τις καμπάνες του και κάποτε έδειχνε στα καράβια τον δρόμο για το σπίτι. Ανέβα τα σκαλιά του αν αντέχεις!',
        en: 'Tall as a lighthouse in the middle of town, it rings its bells and once showed ships the way home. Climb its steps if you dare!',
      },
      parentHint: {
        el: 'Ο Torre dos Clérigos, ο ψηλός πύργος-καμπαναριό της Igreja dos Clérigos. Από την Igreja do Carmo περπατήστε 3 λεπτά νοτιοανατολικά μέσα από την Praça de Lisboa· η είσοδος είναι στη Rua de São Filipe de Nery.',
        en: 'The Torre dos Clérigos, the tall bell tower of the Igreja dos Clérigos. From the Igreja do Carmo walk 3 minutes south-east across Praça de Lisboa; the entrance is on Rua de São Filipe de Nery.',
      },
      unlockQuestion: {
        question: { el: 'Γιατί ήταν χρήσιμος αυτός ο πύργος στους ναυτικούς;', en: 'Why was this tower useful to sailors?' },
        options: {
          el: ['Επειδή πουλούσε ψάρια', 'Επειδή είχε μέσα μια πισίνα', 'Επειδή έφτιαχνε καράβια', 'Επειδή φαινόταν από μακριά κι έδειχνε πού είναι η πόλη'],
          en: ['Because it sold fish', 'Because it had a swimming pool inside', 'Because it built ships', 'Because it could be seen from far away and showed where the city was'],
        },
        correct: 3,
        explanation: {
          el: 'Ο πύργος ήταν τόσο ψηλός που τα καράβια τον έβλεπαν από τη θάλασσα και καταλάβαιναν ότι έφτασαν στο Πόρτο, σαν φάρος χωρίς φως.',
          en: 'The tower was so tall that ships could see it from the sea and knew they had reached Porto, like a lighthouse without a light.',
        },
      },
      onSite: {
        question: { el: 'Κοίτα ψηλά στον πύργο. Τι υπάρχει στην πλευρά του, εκτός από τις καμπάνες;', en: 'Look up at the tower. What is there on its side, apart from the bells?' },
        options: {
          el: ['Ένα ρολόι', 'Ένα άγαλμα αλόγου', 'Ένα μεγάλο χρωματιστό παράθυρο', 'Μια σημαία'],
          en: ['A clock', 'A statue of a horse', 'A big stained-glass window', 'A flag'],
        },
        correct: 0,
        explanation: {
          el: 'Ο πύργος έχει ρολόι, για να βλέπει όλη η πόλη την ώρα από μακριά. Μέτρησε και τα επίπεδά του: είναι χωρισμένος σε ορόφους με πέτρινα στολίδια.',
          en: 'The tower has a clock, so the whole city can read the time from far away. Count its levels too: it is divided into storeys with carved stone decorations.',
        },
      },
      story: {
        el: 'Αυτός ο πύργος είναι το πιο ψηλό πράγμα στο παλιό Πόρτο: περίπου 75 μέτρα, όσο είκοσι σπίτια το ένα πάνω στο άλλο. Τον σχεδίασε ο Nicolau Nasoni, ένας καλλιτέχνης από την Ιταλία που ήρθε στο Πόρτο και αγάπησε την πόλη, και τελείωσε το 1763. Όταν ήταν καινούργιος, ήταν ο πιο ψηλός πύργος σε ολόκληρη την Πορτογαλία. Οι ναυτικοί που έρχονταν από τη θάλασσα τον έψαχναν για να καταλάβουν ότι έφτασαν στο Πόρτο, σαν φάρο χωρίς φως. Μέσα, μια στριφογυριστή σκάλα με πάνω από διακόσια σκαλιά ανεβαίνει ως την κορυφή. Ο WiseBot λέει: μια μεγάλη ιδέα φαίνεται από πολύ μακριά.',
        en: 'This tower is the tallest thing in old Porto: about 75 metres high, which is like twenty houses stacked on top of each other. It was designed by Nicolau Nasoni, an artist from Italy who came to Porto and fell in love with the city, and it was finished in 1763. When it was new, it was the tallest tower in all of Portugal. Sailors coming in from the sea looked for it to know they had reached Porto, like a lighthouse without a light. Inside, a spiral staircase of more than two hundred steps climbs to the top. WiseBot says: a big idea can be seen from very far away.',
      },
      didYouKnow: {
        el: 'Ο Nasoni αγάπησε τόσο πολύ την εκκλησία που ζήτησε να ταφεί μέσα της. Πέθανε το 1773 και θάφτηκε στην Igreja dos Clérigos, αν και το ακριβές σημείο του τάφου του δεν είναι γνωστό.',
        en: 'Nasoni loved the church so much that he asked to be buried in it. He died in 1773 and was laid to rest inside the Igreja dos Clérigos, although the exact spot of his grave is not known.',
      },
      quiz: [
        {
          q: { el: 'Πόσο ψηλός είναι περίπου ο πύργος;', en: 'About how tall is the tower?' },
          options: {
            el: ['5 μέτρα', '20 μέτρα', '75 μέτρα', '300 μέτρα'],
            en: ['5 metres', '20 metres', '75 metres', '300 metres'],
          },
          correct: 2,
          explanation: {
            el: 'Περίπου 75 μέτρα, όσο είκοσι σπίτια το ένα πάνω στο άλλο.',
            en: 'About 75 metres, like twenty houses stacked on top of each other.',
          },
        },
        {
          q: { el: 'Από πού ήρθε ο Nicolau Nasoni;', en: 'Where did Nicolau Nasoni come from?' },
          options: {
            el: ['Από την Ελλάδα', 'Από τη Γαλλία', 'Από τη Βραζιλία', 'Από την Ιταλία'],
            en: ['Greece', 'France', 'Brazil', 'Italy'],
          },
          correct: 3,
          explanation: {
            el: 'Ο Nasoni ήρθε από την Ιταλία, αγάπησε το Πόρτο και σχεδίασε εκεί πολλά όμορφα κτίρια.',
            en: 'Nasoni came from Italy, fell in love with Porto and designed many beautiful buildings there.',
          },
        },
        {
          q: { el: 'Ποιοι έψαχναν τον πύργο για να καταλάβουν ότι έφτασαν στο Πόρτο;', en: 'Who looked for the tower to know they had reached Porto?' },
          options: {
            el: ['Οι ναυτικοί', 'Οι αγρότες', 'Οι δάσκαλοι', 'Οι ζωγράφοι'],
            en: ['Sailors', 'Farmers', 'Teachers', 'Painters'],
          },
          correct: 0,
          explanation: {
            el: 'Οι ναυτικοί! Ο πύργος φαινόταν από τη θάλασσα και τους έδειχνε ότι το Πόρτο είναι κοντά.',
            en: 'Sailors! The tower could be seen from the sea and told them Porto was near.',
          },
        },
      ],
    },

    // ── 4. Mercado do Bolhão ────────────────────────────────────────────────────
    {
      id: 'mercado-do-bolhao',
      name: { el: 'Αγορά Bolhão', en: 'Bolhão Market' },
      emoji: '🍊',
      lat: 41.1493,
      lng: -8.6063,
      radiusM: 50,
      riddle: {
        el: 'Εδώ φωνάζουν οι πωλητές, μυρίζει ψάρι και λουλούδια, και μια πηγή που κάποτε έβγαζε φουσκάλες έδωσε στο μέρος το όνομά του. Βρες την αγορά χωρίς ταβάνι στη μέση!',
        en: 'Here the sellers call out, it smells of fish and flowers, and a spring that once bubbled up gave the place its name. Find the market with no roof in the middle!',
      },
      parentHint: {
        el: 'Η Mercado do Bolhão στη Rua Formosa. Από τον πύργο Clérigos κατεβείτε στην Avenida dos Aliados, ανεβείτε τη λεωφόρο προς τα βόρεια και στρίψτε δεξιά στη Rua Formosa· περίπου 12 λεπτά.',
        en: 'The Mercado do Bolhão on Rua Formosa. From the Clérigos tower walk down to Avenida dos Aliados, go up the avenue northwards and turn right into Rua Formosa; about 12 minutes.',
      },
      unlockQuestion: {
        question: { el: 'Τι σημαίνει η λέξη «bolhão» στα πορτογαλικά;', en: 'What does the word "bolhão" mean in Portuguese?' },
        options: {
          el: ['Μεγάλη φουσκάλα, νερό που αναβλύζει', 'Μεγάλο ψάρι', 'Μεγάλη μπάλα', 'Μεγάλο καλάθι'],
          en: ['A big bubble, water bubbling up', 'A big fish', 'A big ball', 'A big basket'],
        },
        correct: 0,
        explanation: {
          el: 'Bolhão σημαίνει «μεγάλη φουσκάλα». Κάποτε εδώ ανέβλυζε νερό από το έδαφος και έκανε φουσκάλες, κι έτσι η αγορά πήρε το όνομά της.',
          en: 'Bolhão means "big bubble". Water once bubbled up from the ground here, and that is how the market got its name.',
        },
      },
      onSite: {
        question: { el: 'Στάσου στη μέση της αγοράς και κοίτα γύρω σου προς τα πάνω. Πόσους ορόφους έχει η αγορά;', en: 'Stand in the middle of the market and look up around you. How many floors does the market have?' },
        options: {
          el: ['Έναν', 'Τέσσερις', 'Δέκα', 'Δύο'],
          en: ['One', 'Four', 'Ten', 'Two'],
        },
        correct: 3,
        explanation: {
          el: 'Η αγορά έχει δύο ορόφους με σιδερένια μπαλκόνια γύρω από μια ανοιχτή αυλή χωρίς ταβάνι, για να μπαίνει φως και αέρας.',
          en: 'The market has two floors with iron balconies around an open courtyard with no roof, so light and fresh air get in.',
        },
      },
      story: {
        el: 'Πολύ παλιά, αυτό το μέρος ήταν ένα βαλτώδες κοίλωμα όπου νερό ανέβλυζε από το έδαφος. Οι άνθρωποι έλεγαν την πηγή που έκανε φουσκάλες «bolhão», τη μεγάλη φουσκάλα, και η αγορά που μεγάλωσε εδώ πήρε το όνομά της. Το κτίριο που βλέπεις, με τα σιδερένια μπαλκόνια και την ανοιχτή αυλή, άνοιξε το 1914. Από τότε, κάθε πρωί, οι πωλητές στοιβάζουν πορτοκάλια, φρέσκα ψάρια από τη θάλασσα, τυριά, ψωμί και λαμπερά λουλούδια και φωνάζουν στους αγοραστές. Η αγορά πάλιωσε και κουράστηκε, γι\' αυτό η πόλη την επισκεύασε προσεκτικά και την ξανάνοιξε το 2022, καινούργια αλλά με το παλιό της πρόσωπο. Ο WiseBot λέει: όταν κάτι που αγαπάς φθαρεί, μπορείς να το ξαναφτιάξεις αντί να το πετάξεις.',
        en: 'Long ago, this spot was a marshy hollow where water bubbled up from the ground. People called the bubbling spring the bolhão, the big bubble, and the market that grew here took its name. The building you see, with its iron balconies and open courtyard, was opened in 1914. Every morning since then, sellers have piled up oranges, fish fresh from the sea, cheese, bread and bright flowers, and called out to shoppers. The market grew old and tired, so the city repaired it carefully and reopened it in 2022, looking new but keeping its old face. WiseBot says: when something you love wears out, you can rebuild it instead of throwing it away.',
      },
      didYouKnow: {
        el: 'Η αγορά είναι προστατευόμενο μνημείο. Η ανακαίνιση του 2018–2022 κράτησε την αρχική σιδερένια και γρανιτένια κατασκευή και πρόσθεσε από κάτω κρυφές αποθήκες και πάρκινγκ.',
        en: 'The market is a protected monument. Its 2018–2022 restoration kept the original iron and granite structure while adding hidden storage and parking underneath.',
      },
      quiz: [
        {
          q: { el: 'Από τι πήρε το όνομά της η αγορά;', en: 'Where did the market get its name from?' },
          options: {
            el: ['Από έναν βασιλιά', 'Από μια πηγή που έβγαζε φουσκάλες', 'Από ένα ψάρι', 'Από έναν ζωγράφο'],
            en: ['From a king', 'From a spring that bubbled up', 'From a fish', 'From a painter'],
          },
          correct: 1,
          explanation: {
            el: 'Από την πηγή που ανέβλυζε εδώ και έκανε φουσκάλες: bolhão σημαίνει «μεγάλη φουσκάλα».',
            en: 'From the spring that bubbled up here: bolhão means "big bubble".',
          },
        },
        {
          q: { el: 'Πότε άνοιξε το κτίριο της αγοράς;', en: 'When did the market building open?' },
          options: {
            el: ['Το 1500', 'Το 1763', 'Το 1914', 'Το 2022'],
            en: ['In 1500', 'In 1763', 'In 1914', 'In 2022'],
          },
          correct: 2,
          explanation: {
            el: 'Το κτίριο με τα σιδερένια μπαλκόνια άνοιξε το 1914. Το 2022 είναι η χρονιά που ξανάνοιξε μετά την επισκευή.',
            en: 'The building with the iron balconies opened in 1914. 2022 is the year it reopened after repairs.',
          },
        },
        {
          q: { el: 'Τι έκανε η πόλη όταν η αγορά πάλιωσε;', en: 'What did the city do when the market grew old?' },
          options: {
            el: ['Την γκρέμισε', 'Την έκλεισε για πάντα', 'Την έκανε μουσείο αυτοκινήτων', 'Την επισκεύασε και την ξανάνοιξε'],
            en: ['Knocked it down', 'Closed it for ever', 'Turned it into a car museum', 'Repaired it and opened it again'],
          },
          correct: 3,
          explanation: {
            el: 'Η πόλη επισκεύασε την αγορά προσεκτικά και την ξανάνοιξε το 2022, κρατώντας το παλιό της πρόσωπο.',
            en: 'The city repaired the market carefully and reopened it in 2022, keeping its old face.',
          },
        },
      ],
    },

    // ── 5. Sé do Porto ──────────────────────────────────────────────────────────
    {
      id: 'se-do-porto',
      name: { el: 'Καθεδρικός Sé do Porto', en: 'Porto Cathedral' },
      emoji: '🏰',
      lat: 41.1428,
      lng: -8.6112,
      radiusM: 40,
      riddle: {
        el: 'Μοιάζει με κάστρο μα είναι εκκλησία, φυλάει τον λόφο με δύο πύργους κι έχει ένα στρογγυλό παράθυρο σαν λουλούδι. Ποιο είναι το πιο παλιό κτίριο της πόλης;',
        en: 'It looks like a castle but it is a church, guarding the hill with two towers and a round window like a flower. Which is the oldest building in town?',
      },
      parentHint: {
        el: 'Η Sé do Porto (ο καθεδρικός ναός) στο Terreiro da Sé. Από το Bolhão κατεβείτε την Avenida dos Aliados ως τον σταθμό São Bento και ανηφορίστε την Avenida de Dom Afonso Henriques ως την κορυφή του λόφου· περίπου 15 λεπτά.',
        en: 'The Sé do Porto (the cathedral) on Terreiro da Sé. From Bolhão walk down Avenida dos Aliados to São Bento station, then climb Avenida de Dom Afonso Henriques to the top of the hill; about 15 minutes.',
      },
      unlockQuestion: {
        question: { el: 'Πόσους πύργους έχει αυτή η εκκλησία-κάστρο;', en: 'How many towers does this castle-like church have?' },
        options: {
          el: ['Έναν', 'Δύο', 'Πέντε', 'Κανέναν'],
          en: ['One', 'Two', 'Five', 'None'],
        },
        correct: 1,
        explanation: {
          el: 'Ο καθεδρικός έχει δύο τετράγωνους πύργους, έναν σε κάθε άκρη της πρόσοψης, και ανάμεσά τους ένα στρογγυλό παράθυρο που λέγεται ρόδακας.',
          en: 'The cathedral has two square towers, one at each end of the front, and between them a round window called a rose window.',
        },
      },
      onSite: {
        question: { el: 'Στην πλατεία μπροστά από τον καθεδρικό στέκεται μια ψηλή στριφτή πέτρινη κολόνα. Τι είναι;', en: 'In the square in front of the cathedral stands a tall twisted stone column. What is it?' },
        options: {
          el: ['Ένα δέντρο', 'Μια καμινάδα', 'Ένα pelourinho, η παλιά κολόνα της πόλης', 'Ένας φάρος'],
          en: ['A tree', 'A chimney', 'A pelourinho, the old town column', 'A lighthouse'],
        },
        correct: 2,
        explanation: {
          el: 'Είναι ένα pelourinho (πελουρίνιο). Παλιά, κάθε πορτογαλική πόλη με δικούς της νόμους και δικαστές είχε μια τέτοια κολόνα στην πλατεία. Αυτή εδώ είναι αντίγραφο του 20ού αιώνα.',
          en: 'It is a pelourinho. In the old days, every Portuguese town with its own laws and judges had a column like this in its square. This one is a copy made in the 20th century.',
        },
      },
      story: {
        el: 'Οι άνθρωποι του Πόρτο άρχισαν να χτίζουν αυτόν τον καθεδρικό πριν από σχεδόν εννιακόσια χρόνια, γύρω στο 1110, όταν η πόλη ήταν μικρή και χρειαζόταν προστασία. Γι\' αυτό μοιάζει με φρούριο, με χοντρούς τοίχους και δύο γερούς πύργους. Στους αιώνες που πέρασαν, οι χτίστες πρόσθεσαν καινούργια κομμάτια: ένα στρογγυλό παράθυρο-ρόδακα, ένα γοτθικό περιστύλιο σκεπασμένο με μπλε πλακάκια και μια μεγαλόπρεπη σκάλα. Το 1387 ο βασιλιάς João I παντρεύτηκε ακριβώς εδώ μια Αγγλίδα πριγκίπισσα, τη Philippa of Lancaster, και ο γιος τους έγινε ο Ερρίκος ο Θαλασσοπόρος, ο πρίγκιπας που έστειλε καράβια να εξερευνήσουν τον κόσμο. Ο WiseBot λέει: ένα γερό σπίτι σε αφήνει να ονειρεύεσαι μακρινά μέρη.',
        en: 'The people of Porto began building this cathedral almost nine hundred years ago, around the year 1110, when the city was small and needed protection. That is why it looks like a fortress, with thick walls and two strong towers. Over the centuries, builders added new parts: a round rose window, a Gothic cloister covered with blue tiles, and a grand staircase. In 1387, King João I married an English princess, Philippa of Lancaster, right here, and their son became Henry the Navigator, the prince who sent ships out to explore the world. WiseBot says: a strong home lets you dream of faraway places.',
      },
      didYouKnow: {
        el: 'Τα αζουλέζους του περιστυλίου ζωγραφίστηκαν γύρω στο 1730 από τον Valentim de Almeida και δείχνουν σκηνές από το Άσμα Ασμάτων της Βίβλου.',
        en: 'The azulejos in the cloister were painted around 1730 by Valentim de Almeida and show scenes from the Song of Songs in the Bible.',
      },
      quiz: [
        {
          q: { el: 'Γιατί ο καθεδρικός μοιάζει με κάστρο;', en: 'Why does the cathedral look like a castle?' },
          options: {
            el: ['Επειδή χτίστηκε όταν η πόλη χρειαζόταν προστασία', 'Επειδή έμενε εκεί ένας βασιλιάς', 'Επειδή είναι φτιαγμένος από ξύλο', 'Επειδή ήταν κάποτε σχολείο'],
            en: ['Because it was built when the city needed protection', 'Because a king lived there', 'Because it is made of wood', 'Because it was once a school'],
          },
          correct: 0,
          explanation: {
            el: 'Όταν χτίστηκε, γύρω στο 1110, η πόλη ήταν μικρή και χρειαζόταν προστασία. Γι\' αυτό έχει χοντρούς τοίχους και γερούς πύργους.',
            en: 'When it was built, around 1110, the city was small and needed protection. That is why it has thick walls and strong towers.',
          },
        },
        {
          q: { el: 'Ποιος παντρεύτηκε εδώ το 1387;', en: 'Who got married here in 1387?' },
          options: {
            el: ['Ο Nicolau Nasoni', 'Ο βασιλιάς João I με την Philippa of Lancaster', 'Ο Gustave Eiffel', 'Ο Jorge Colaço'],
            en: ['Nicolau Nasoni', 'King João I and Philippa of Lancaster', 'Gustave Eiffel', 'Jorge Colaço'],
          },
          correct: 1,
          explanation: {
            el: 'Ο βασιλιάς João I παντρεύτηκε εδώ την Αγγλίδα πριγκίπισσα Philippa of Lancaster. Ο γιος τους ήταν ο Ερρίκος ο Θαλασσοπόρος.',
            en: 'King João I married the English princess Philippa of Lancaster here. Their son was Henry the Navigator.',
          },
        },
        {
          q: { el: 'Περίπου πότε άρχισε να χτίζεται ο καθεδρικός;', en: 'About when did building of the cathedral begin?' },
          options: {
            el: ['Το 1900', 'Το 1763', 'Γύρω στο 1110', 'Το 2000'],
            en: ['In 1900', 'In 1763', 'Around 1110', 'In 2000'],
          },
          correct: 2,
          explanation: {
            el: 'Γύρω στο 1110, δηλαδή πριν από σχεδόν εννιακόσια χρόνια. Είναι από τα πιο παλιά κτίρια του Πόρτο.',
            en: 'Around 1110, almost nine hundred years ago. It is one of the oldest buildings in Porto.',
          },
        },
      ],
    },

    // ── 6. Palácio da Bolsa ─────────────────────────────────────────────────────
    {
      id: 'palacio-da-bolsa',
      name: { el: 'Palácio da Bolsa', en: 'Palácio da Bolsa' },
      emoji: '💰',
      lat: 41.1414,
      lng: -8.6156,
      radiusM: 40,
      riddle: {
        el: 'Ένα παλάτι χωρίς βασιλιά, όπου οι έμποροι μετρούσαν τα χρήματά τους, με ένα δωμάτιο που θυμίζει παραμύθι από την Ανατολή. Στον κήπο μπροστά του, ένας πρίγκιπας δείχνει προς τη θάλασσα.',
        en: 'A palace with no king, where merchants counted their money, with a room that looks like a tale from the East. In the garden in front, a prince points towards the sea.',
      },
      parentHint: {
        el: 'Το Palácio da Bolsa (το παλιό Χρηματιστήριο) στη Rua Ferreira Borges, δίπλα στην Igreja de São Francisco. Από τη Sé κατεβείτε τα σκαλιά και ακολουθήστε τη Rua Mouzinho da Silveira ως το τέλος της· το παλάτι είναι στην πλατεία με τον κήπο· περίπου 10 λεπτά.',
        en: 'The Palácio da Bolsa (the old Stock Exchange) on Rua Ferreira Borges, next to the Igreja de São Francisco. From the Sé walk down the steps and follow Rua Mouzinho da Silveira all the way to the end; the palace is on the square with the garden; about 10 minutes.',
      },
      unlockQuestion: {
        question: { el: 'Τι ήταν αυτό το «παλάτι» παλιά;', en: 'What was this "palace" in the old days?' },
        options: {
          el: ['Το σπίτι ενός βασιλιά', 'Ένα σχολείο', 'Το χρηματιστήριο, όπου συναντιόνταν οι έμποροι', 'Ένα νοσοκομείο'],
          en: ['A king\'s home', 'A school', 'The stock exchange, where merchants met', 'A hospital'],
        },
        correct: 2,
        explanation: {
          el: 'Bolsa σημαίνει «χρηματιστήριο». Οι έμποροι του Πόρτο το έχτισαν για να συναντιούνται, να κάνουν συμφωνίες και να δείχνουν πόσο σημαντική ήταν η πόλη τους.',
          en: 'Bolsa means "stock exchange". The merchants of Porto built it to meet, make deals and show how important their city was.',
        },
      },
      onSite: {
        question: { el: 'Κοίτα το άγαλμα στη μέση του κήπου μπροστά από το παλάτι. Ποιον δείχνει;', en: 'Look at the statue in the middle of the garden in front of the palace. Who does it show?' },
        options: {
          el: ['Έναν ποδοσφαιριστή', 'Τον πρίγκιπα Henrique, τον Ερρίκο τον Θαλασσοπόρο', 'Έναν δράκο', 'Μια βασίλισσα'],
          en: ['A footballer', 'Prince Henrique, Henry the Navigator', 'A dragon', 'A queen'],
        },
        correct: 1,
        explanation: {
          el: 'Είναι ο Infante D. Henrique, ο Ερρίκος ο Θαλασσοπόρος, που γεννήθηκε στο Πόρτο. Το άγαλμα στήθηκε το 1894, για τα 500 χρόνια από τη γέννησή του.',
          en: 'It is the Infante D. Henrique, Henry the Navigator, who was born in Porto. The statue was put up in 1894, five hundred years after his birth.',
        },
      },
      story: {
        el: 'Το 1832 μια φωτιά κατέστρεψε ένα μέρος του παλιού μοναστηριού του São Francisco, και οι έμποροι του Πόρτο ζήτησαν το άδειο οικόπεδο. Ήθελαν ένα κτίριο όπου θα συναντιούνται, θα κάνουν εμπόριο και θα δείχνουν σε όλο τον κόσμο πόσο σημαντική είναι η πόλη τους. Έτσι, από το 1842, έχτισαν αυτό το παλάτι με μια μεγαλόπρεπη σκάλα και μια αυλή με γυάλινη οροφή. Το πιο διάσημο δωμάτιο είναι το Αραβικό Δωμάτιο, που το στόλιζαν δεκαοχτώ χρόνια για να μοιάζει με το παλάτι Alhambra της Ισπανίας, και λάμπει από χρυσάφι και σχέδια. Δίπλα, η εκκλησία του São Francisco κρύβει ένα εσωτερικό σκεπασμένο με χρυσά ξυλόγλυπτα. Ο WiseBot λέει: το εμπόριο φέρνει τους ανθρώπους κοντά, και μαζί μπορούν να χτίσουν όμορφα πράγματα.',
        en: 'In 1832, a fire destroyed part of the old monastery of São Francisco, and the merchants of Porto asked for the empty ground. They wanted a building where they could meet, trade and show the world how important their city was. So from 1842 they built this palace with a grand staircase and a glass-roofed courtyard. The most famous room is the Arab Room, decorated for eighteen years to look like the Alhambra palace in Spain, glittering with gold and patterns. Next door, the church of São Francisco hides an inside covered in golden carved wood. WiseBot says: trade brings people together, and together they can build beautiful things.',
      },
      didYouKnow: {
        el: 'Η κατασκευή άρχισε το 1842, αλλά η διακόσμηση των αιθουσών κράτησε τόσο πολύ που το παλάτι ολοκληρώθηκε πλήρως μόλις γύρω στο 1910, σχεδόν εβδομήντα χρόνια αργότερα.',
        en: 'Construction began in 1842, but decorating the rooms took so long that the palace was only completely finished around 1910, almost seventy years later.',
      },
      quiz: [
        {
          q: { el: 'Ποιο δωμάτιο του παλατιού μοιάζει με το παλάτι Alhambra;', en: 'Which room of the palace looks like the Alhambra palace?' },
          options: {
            el: ['Η κουζίνα', 'Η βιβλιοθήκη', 'Το δωμάτιο των πλακακιών', 'Το Αραβικό Δωμάτιο'],
            en: ['The kitchen', 'The library', 'The tile room', 'The Arab Room'],
          },
          correct: 3,
          explanation: {
            el: 'Το Αραβικό Δωμάτιο, που το στόλιζαν δεκαοχτώ ολόκληρα χρόνια για να μοιάζει με το Alhambra.',
            en: 'The Arab Room, which took eighteen whole years to decorate so that it would look like the Alhambra.',
          },
        },
        {
          q: { el: 'Τι υπήρχε εδώ πριν από το παλάτι;', en: 'What was here before the palace?' },
          options: {
            el: ['Ένα μοναστήρι που κάηκε', 'Ένας σιδηροδρομικός σταθμός', 'Ένα γήπεδο ποδοσφαίρου', 'Ένας ζωολογικός κήπος'],
            en: ['A monastery that burned', 'A railway station', 'A football stadium', 'A zoo'],
          },
          correct: 0,
          explanation: {
            el: 'Ένα μέρος του μοναστηριού του São Francisco κάηκε το 1832, και οι έμποροι έχτισαν το παλάτι στο άδειο οικόπεδο.',
            en: 'Part of the monastery of São Francisco burned in 1832, and the merchants built the palace on the empty ground.',
          },
        },
        {
          q: { el: 'Τι κρύβει μέσα της η διπλανή εκκλησία του São Francisco;', en: 'What does the church of São Francisco next door hide inside?' },
          options: {
            el: ['Ένα τρένο', 'Ξυλόγλυπτα σκεπασμένα με χρυσό', 'Μια λίμνη', 'Μόνο άσπρους τοίχους'],
            en: ['A train', 'Carved wood covered in gold', 'A lake', 'Only white walls'],
          },
          correct: 1,
          explanation: {
            el: 'Το εσωτερικό της εκκλησίας είναι σκεπασμένο με χρυσά ξυλόγλυπτα, από το πάτωμα ως την οροφή.',
            en: 'The inside of the church is covered in golden carved wood, from the floor to the ceiling.',
          },
        },
      ],
    },

    // ── 7. Praça da Ribeira ─────────────────────────────────────────────────────
    {
      id: 'ribeira',
      name: { el: 'Πλατεία Ribeira', en: 'Ribeira Square' },
      emoji: '⛵',
      lat: 41.1405,
      lng: -8.6131,
      radiusM: 40,
      riddle: {
        el: 'Στην όχθη του ποταμού, ψηλά και στενά σπίτια σε όλα τα χρώματα κοιτούν τις βάρκες με τα βαρέλια. Στη μέση, ένας κύβος κάθεται πάνω σε μια βρύση!',
        en: 'Down by the river, tall thin houses in every colour watch the boats with barrels. In the middle, a cube sits on top of a fountain!',
      },
      parentHint: {
        el: 'Η Praça da Ribeira, στην προκυμαία του Δούρου. Από το Palácio da Bolsa κατεβείτε στην προκυμαία (Cais da Ribeira) και περπατήστε ανατολικά 5 λεπτά.',
        en: 'Praça da Ribeira on the Douro waterfront. From the Palácio da Bolsa walk down to the quay (Cais da Ribeira) and follow it east for 5 minutes.',
      },
      unlockQuestion: {
        question: { el: 'Τι μετέφεραν παλιά οι βάρκες με τα βαρέλια στον ποταμό Δούρο;', en: 'What did the boats with barrels carry on the river Douro in the old days?' },
        options: {
          el: ['Χρυσό', 'Πλακάκια', 'Ψάρια', 'Κρασί Πόρτο'],
          en: ['Gold', 'Tiles', 'Fish', 'Port wine'],
        },
        correct: 3,
        explanation: {
          el: 'Τα βαρέλια είχαν μέσα κρασί Πόρτο, το διάσημο γλυκό κρασί της περιοχής. Οι βάρκες το κατέβαζαν από τα αμπέλια ψηλά στο ποτάμι ως εδώ.',
          en: 'The barrels held port wine, the famous sweet wine of the region. The boats brought it down from the vineyards far up the river.',
        },
      },
      onSite: {
        question: { el: 'Κοίτα τα σπίτια γύρω από την πλατεία. Πώς είναι;', en: 'Look at the houses around the square. What are they like?' },
        options: {
          el: ['Ψηλά και στενά, με πολλά χρώματα', 'Όλα άσπρα και χαμηλά', 'Φτιαγμένα από γυαλί', 'Στρογγυλά σαν πύργοι'],
          en: ['Tall and narrow, in many colours', 'All white and low', 'Made of glass', 'Round like towers'],
        },
        correct: 0,
        explanation: {
          el: 'Τα σπίτια της Ribeira είναι ψηλά, στενά και βαμμένα σε πολλά χρώματα, με μικρά μπαλκόνια και ρούχα απλωμένα. Μέτρησε πόσα διαφορετικά χρώματα βλέπεις!',
          en: 'The houses of the Ribeira are tall, narrow and painted in many colours, with little balconies and washing hanging out. Count how many different colours you can see!',
        },
      },
      story: {
        el: 'Αυτή είναι η πιο παλιά γωνιά του Πόρτο, εκεί όπου η πόλη συναντά τον ποταμό Δούρο. Για εκατοντάδες χρόνια, βάρκες άραζαν εδώ με ψάρια, αλάτι, υφάσματα και κρασί, και τα σπίτια ψήλωσαν και στένεψαν γιατί στην απότομη όχθη υπήρχε ελάχιστος χώρος. Κοίτα το ποτάμι: εκείνες οι πλατιές ξύλινες βάρκες με το τετράγωνο πανί λέγονται ραμπέλο (rabelos). Μετέφεραν βαρέλια με κρασί Πόρτο από αμπέλια πολύ μακριά, ψηλά στο ποτάμι, και οι βαρκάρηδες έπρεπε να τις οδηγήσουν μέσα από άγρια ρεύματα. Ο χάλκινος κύβος στη βρύση είναι πολύ πιο καινούργιος: φτιάχτηκε το 1976. Το 1996 αυτή η παλιά πόλη ανακηρύχθηκε Μνημείο Παγκόσμιας Κληρονομιάς. Ο WiseBot λέει: γενναίοι βαρκάρηδες κι έξυπνοι έμποροι έχτισαν αυτή την πόλη, βαρέλι βαρέλι.',
        en: 'This is the oldest corner of Porto, where the city meets the river Douro. For hundreds of years, boats landed here with fish, salt, cloth and wine, and the houses grew tall and thin because there was so little space on the steep bank. Look at the river: those flat wooden boats with a square sail are called rabelos. They carried barrels of port wine from vineyards far up the river, and the boatmen had to steer them through wild rapids. The bronze cube on the fountain is much newer; it was made in 1976. In 1996, this old town was named a World Heritage Site. WiseBot says: brave boatmen and clever traders built this city, barrel by barrel.',
      },
      didYouKnow: {
        el: 'Το κρασί Πόρτο πήρε το όνομά του από την πόλη απ\' όπου το φόρτωναν στα καράβια, αλλά τα σταφύλια μεγαλώνουν περίπου 100 χιλιόμετρα ανατολικά, στην κοιλάδα του Δούρου. Πριν χτιστούν τα φράγματα, το ταξίδι των ραμπέλο ήταν πραγματικά επικίνδυνο.',
        en: 'Port wine takes its name from the city it was shipped from, but the grapes grow about 100 km upstream in the Douro valley. Before dams were built, the rabelo trip downriver was genuinely dangerous.',
      },
      quiz: [
        {
          q: { el: 'Πώς λέγονται οι παλιές ξύλινες βάρκες του Δούρου;', en: 'What are the old wooden boats of the Douro called?' },
          options: {
            el: ['Γόνδολες', 'Καΐκια', 'Ραμπέλο (rabelos)', 'Κανό'],
            en: ['Gondolas', 'Caiques', 'Rabelos', 'Canoes'],
          },
          correct: 2,
          explanation: {
            el: 'Ραμπέλο! Πλατιές ξύλινες βάρκες με τετράγωνο πανί, φτιαγμένες για να κουβαλούν βαρέλια.',
            en: 'Rabelos! Flat wooden boats with a square sail, built to carry barrels.',
          },
        },
        {
          q: { el: 'Γιατί τα σπίτια της Ribeira είναι ψηλά και στενά;', en: 'Why are the houses of the Ribeira tall and narrow?' },
          options: {
            el: ['Για να φαίνονται από τη θάλασσα', 'Επειδή ήταν της μόδας', 'Για να χωράνε τα βαρέλια', 'Επειδή υπήρχε λίγος χώρος στην απότομη όχθη'],
            en: ['So they could be seen from the sea', 'Because it was the fashion', 'To fit the barrels inside', 'Because there was little space on the steep bank'],
          },
          correct: 3,
          explanation: {
            el: 'Στην απότομη όχθη υπήρχε ελάχιστος χώρος, γι\' αυτό τα σπίτια μεγάλωσαν προς τα πάνω αντί προς τα πλάγια.',
            en: 'There was very little space on the steep bank, so the houses grew upwards instead of sideways.',
          },
        },
        {
          q: { el: 'Πότε φτιάχτηκε ο κύβος στη βρύση;', en: 'When was the cube on the fountain made?' },
          options: {
            el: ['Το 1976', 'Το 1110', 'Το 1500', 'Το 1763'],
            en: ['In 1976', 'In 1110', 'In 1500', 'In 1763'],
          },
          correct: 0,
          explanation: {
            el: 'Ο χάλκινος κύβος είναι σχετικά καινούργιος: φτιάχτηκε το 1976, πολύ μετά τα παλιά σπίτια γύρω του.',
            en: 'The bronze cube is quite new: it was made in 1976, long after the old houses around it.',
          },
        },
      ],
    },

    // ── 8. Ponte Luís I ─────────────────────────────────────────────────────────
    {
      id: 'ponte-luis-i',
      name: { el: 'Γέφυρα Luís I', en: 'Luís I Bridge' },
      emoji: '🌉',
      lat: 41.1400,
      lng: -8.6095,
      radiusM: 80,
      riddle: {
        el: 'Μια σιδερένια καμάρα πηδάει πάνω από το ποτάμι κουβαλώντας δύο δρόμους, έναν πάνω κι έναν κάτω. Τρένα από ψηλά, αυτοκίνητα από χαμηλά, κι εσύ μπορείς να περπατήσεις και στους δύο!',
        en: 'An iron arch leaps over the river carrying two roads, one on top and one below. Trains up high, cars down low, and you can walk on both!',
      },
      parentHint: {
        el: 'Η γέφυρα Ponte Luís I. Από την Praça da Ribeira συνεχίστε ανατολικά κατά μήκος της προκυμαίας 3 λεπτά ως το κάτω κατάστρωμα της γέφυρας.',
        en: 'The Ponte Luís I bridge. From Praça da Ribeira keep walking east along the quay for 3 minutes to the lower deck of the bridge.',
      },
      unlockQuestion: {
        question: { el: 'Από τι είναι φτιαγμένη η μεγάλη καμάρα της γέφυρας;', en: 'What is the big arch of the bridge made of?' },
        options: {
          el: ['Από σίδερο', 'Από ξύλο', 'Από πέτρα', 'Από πλαστικό'],
          en: ['Iron', 'Wood', 'Stone', 'Plastic'],
        },
        correct: 0,
        explanation: {
          el: 'Η καμάρα είναι από σίδερο, ενωμένο με χιλιάδες καρφιά, όπως ο Πύργος του Άιφελ στο Παρίσι που χτίστηκε την ίδια εποχή.',
          en: 'The arch is made of iron, joined with thousands of rivets, like the Eiffel Tower in Paris, which was built around the same time.',
        },
      },
      onSite: {
        question: { el: 'Κοίτα προς τα πάνω. Τι περνάει από το επάνω κατάστρωμα της γέφυρας;', en: 'Look up. What runs across the top deck of the bridge?' },
        options: {
          el: ['Αεροπλάνα', 'Φορτηγά', 'Βάρκες', 'Το μετρό'],
          en: ['Aeroplanes', 'Lorries', 'Boats', 'The metro'],
        },
        correct: 3,
        explanation: {
          el: 'Από το επάνω κατάστρωμα περνούν τα κίτρινα τρένα του μετρό και οι πεζοί· από το κάτω, αυτοκίνητα και πεζοί. Μέτρησε και τις καμάρες: είναι μία, τεράστια!',
          en: 'The top deck carries the yellow metro trains and walkers; the bottom deck carries cars and walkers. Count the arches too: there is just one, and it is huge!',
        },
      },
      story: {
        el: 'Πριν από αυτή τη γέφυρα, οι άνθρωποι περνούσαν το ποτάμι από μια γέφυρα φτιαγμένη από βάρκες δεμένες μεταξύ τους, που ήταν επικίνδυνη όταν ανέβαινε το νερό. Έτσι, το 1881, μηχανικοί άρχισαν να χτίζουν μια σιδερένια γέφυρα που σχεδίασε ο Théophile Seyrig, ο οποίος είχε δουλέψει παλιότερα με τον διάσημο Gustave Eiffel. Άνοιξε το 1886 και πήρε το όνομα του βασιλιά Luís I. Η μοναδική καμάρα της έχει άνοιγμα 172 μέτρα, από τα μεγαλύτερα σιδερένια τόξα στον κόσμο εκείνη την εποχή. Έχει δύο καταστρώματα: το επάνω, ψηλά πάνω από το νερό, περνάει σήμερα το μετρό και οι πεζοί, και το κάτω τα αυτοκίνητα και οι πεζοί. Ο WiseBot λέει: μια καλή γέφυρα, όπως ένας καλός φίλος, ενώνει δύο πλευρές.',
        en: 'Before this bridge, people crossed the river on a bridge made of boats tied together, which was dangerous when the water rose. So in 1881, engineers began building an iron bridge designed by Théophile Seyrig, who had once worked with the famous Gustave Eiffel. It opened in 1886 and was named after King Luís I. Its single arch is 172 metres wide, one of the biggest iron arches in the world at the time. It has two decks: the top one, high above the water, now carries the metro and walkers, and the bottom one carries cars and walkers. WiseBot says: a good bridge, like a good friend, joins two sides together.',
      },
      didYouKnow: {
        el: 'Ο Seyrig και ο Eiffel είχαν χτίσει μαζί μια άλλη γέφυρα στο Πόρτο εννιά χρόνια νωρίτερα, τη σιδηροδρομική Ponte Maria Pia (1877), λίγο πιο πάνω στο ποτάμι. Το μετρό ανέβηκε στο επάνω κατάστρωμα της Luís I μόλις το 2005.',
        en: 'Seyrig and Eiffel had built another bridge in Porto together nine years earlier, the Maria Pia railway bridge (1877), a little way upstream. The metro only started running on the upper deck of the Luís I in 2005.',
      },
      quiz: [
        {
          q: { el: 'Πώς περνούσαν οι άνθρωποι το ποτάμι πριν χτιστεί η γέφυρα;', en: 'How did people cross the river before the bridge was built?' },
          options: {
            el: ['Κολυμπώντας', 'Από μια γέφυρα φτιαγμένη από δεμένες βάρκες', 'Με ελικόπτερο', 'Με τρένο'],
            en: ['By swimming', 'On a bridge made of boats tied together', 'By helicopter', 'By train'],
          },
          correct: 1,
          explanation: {
            el: 'Από μια γέφυρα από δεμένες βάρκες, που κουνιόταν και ήταν επικίνδυνη όταν το ποτάμι φούσκωνε.',
            en: 'On a bridge made of boats tied together, which wobbled and was dangerous when the river rose.',
          },
        },
        {
          q: { el: 'Πόσο φαρδιά είναι η καμάρα της γέφυρας;', en: 'How wide is the arch of the bridge?' },
          options: {
            el: ['12 μέτρα', '50 μέτρα', '172 μέτρα', '1.000 μέτρα'],
            en: ['12 metres', '50 metres', '172 metres', '1,000 metres'],
          },
          correct: 2,
          explanation: {
            el: '172 μέτρα! Ήταν από τα μεγαλύτερα σιδερένια τόξα στον κόσμο όταν χτίστηκε.',
            en: '172 metres! It was one of the biggest iron arches in the world when it was built.',
          },
        },
        {
          q: { el: 'Από ποιον πήρε το όνομά της η γέφυρα;', en: 'Who was the bridge named after?' },
          options: {
            el: ['Από έναν ζωγράφο', 'Από έναν ναυτικό', 'Από τον μηχανικό της', 'Από τον βασιλιά Luís I'],
            en: ['A painter', 'A sailor', 'Its engineer', 'King Luís I'],
          },
          correct: 3,
          explanation: {
            el: 'Από τον βασιλιά Luís I, που βασίλευε στην Πορτογαλία όταν άνοιξε η γέφυρα το 1886.',
            en: 'After King Luís I, who ruled Portugal when the bridge opened in 1886.',
          },
        },
      ],
    },

    // ── 9. Mosteiro da Serra do Pilar ───────────────────────────────────────────
    {
      id: 'mosteiro-serra-do-pilar',
      name: { el: 'Μοναστήρι Serra do Pilar', en: 'Serra do Pilar Monastery' },
      emoji: '🔭',
      lat: 41.1370,
      lng: -8.6083,
      radiusM: 70,
      riddle: {
        el: 'Πέρασε τη γέφυρα και ανέβα στον βράχο απέναντι: μια στρογγυλή εκκλησία σε περιμένει με την πιο όμορφη θέα σε ολόκληρη την πόλη.',
        en: 'Cross the bridge and climb the rock on the other side: a round church is waiting for you with the best view of the whole city.',
      },
      parentHint: {
        el: 'Το Mosteiro da Serra do Pilar στη Vila Nova de Gaia. Περάστε το κάτω κατάστρωμα της γέφυρας και ανεβείτε στο πλάτωμα δίπλα στο μοναστήρι (σκαλιά, ή το τελεφερίκ της Gaia και μετά 5 λεπτά περπάτημα)· περίπου 20 λεπτά.',
        en: 'The Mosteiro da Serra do Pilar in Vila Nova de Gaia. Cross the lower deck of the bridge and climb up to the terrace beside the monastery (stairs, or the Gaia cable car and then a 5-minute walk); about 20 minutes.',
      },
      unlockQuestion: {
        question: { el: 'Τι σχήμα έχει η εκκλησία αυτού του μοναστηριού;', en: 'What shape is the church of this monastery?' },
        options: {
          el: ['Τετράγωνο', 'Στρογγυλό', 'Τρίγωνο', 'Σχήμα αστεριού'],
          en: ['Square', 'Round', 'Triangular', 'Star-shaped'],
        },
        correct: 1,
        explanation: {
          el: 'Η εκκλησία είναι ολοστρόγγυλη, και το ίδιο και το μικρό περιστύλιο δίπλα της. Είναι κάτι πολύ σπάνιο στην Πορτογαλία.',
          en: 'The church is perfectly round, and so is the little cloister next to it. That is something very rare in Portugal.',
        },
      },
      onSite: {
        question: { el: 'Κοίτα κάτω, στην όχθη της Gaia. Τι είναι γραμμένο με μεγάλα γράμματα στις στέγες;', en: 'Look down at the Gaia riverbank. What is written in big letters on the roofs?' },
        options: {
          el: ['Ονόματα ποταμών', 'Αριθμοί', 'Ονόματα των εταιρειών που φτιάχνουν κρασί Πόρτο', 'Ονόματα από παιχνίδια'],
          en: ['Names of rivers', 'Numbers', 'Names of the companies that make port wine', 'Names of games'],
        },
        correct: 2,
        explanation: {
          el: 'Οι μακριές στέγες είναι οι κάβες του κρασιού Πόρτο, και κάθε εταιρεία γράφει το όνομά της με τεράστια γράμματα για να φαίνεται από την άλλη όχθη.',
          en: 'The long roofs belong to the port wine cellars, and each company paints its name in giant letters so it can be seen from across the river.',
        },
      },
      story: {
        el: 'Τώρα βρίσκεσαι στη Vila Nova de Gaia (Βίλα Νόβα ντε Γκάια), την πόλη στην άλλη πλευρά του ποταμού. Μοναχοί έχτισαν αυτό το μοναστήρι πάνω στον βράχο τον 16ο αιώνα και του έδωσαν κάτι σπάνιο: μια εκκλησία ολοστρόγγυλη, με ένα στρογγυλό περιστύλιο δίπλα της. Επειδή στέκεται τόσο ψηλά, στρατιώτες το χρησιμοποίησαν σαν παρατηρητήριο και φρούριο, ιδίως το 1832 και το 1833, όταν το Πόρτο πολιορκήθηκε σε έναν πόλεμο ανάμεσα σε δύο αδέρφια που ήθελαν και οι δύο να γίνουν βασιλιάδες. Σήμερα η μόνη μάχη είναι για την καλύτερη φωτογραφία. Κάτω από σένα, οι μακριές στέγες δίπλα στο ποτάμι είναι οι κάβες όπου το κρασί Πόρτο ξεκουράζεται ήσυχα μέσα σε βαρέλια για χρόνια. Ο WiseBot λέει: ανέβα ψηλά και θα καταλάβεις ολόκληρη την εικόνα.',
        en: 'You are now in Vila Nova de Gaia, the town on the other side of the river. Monks built this monastery on the cliff in the 1500s, and they gave it something rare: a church that is perfectly round, with a round cloister next to it. Because it stands so high, soldiers used it as a lookout and a fortress, especially in 1832 and 1833, when Porto was surrounded during a war between two brothers who both wanted to be king. Today the only battle is for the best photo. Below you, the long roofs by the river are the cellars where port wine rests quietly in barrels for years. WiseBot says: climb high and you will understand the whole picture.',
      },
      didYouKnow: {
        el: 'Το 1809 ο μετέπειτα Δούκας του Wellington (τότε Sir Arthur Wellesley) χρησιμοποίησε αυτό το μοναστήρι ως παρατηρητήριο, πριν οι στρατιώτες του περάσουν τον Δούρο και διώξουν τον γαλλικό στρατό από το Πόρτο.',
        en: 'In 1809 the future Duke of Wellington (then Sir Arthur Wellesley) used this monastery as his lookout before his troops crossed the Douro and pushed the French army out of Porto.',
      },
      quiz: [
        {
          q: { el: 'Σε ποια πόλη βρίσκεται το μοναστήρι;', en: 'In which town is the monastery?' },
          options: {
            el: ['Vila Nova de Gaia', 'Λισαβόνα', 'Πόρτο', 'Μαδρίτη'],
            en: ['Vila Nova de Gaia', 'Lisbon', 'Porto', 'Madrid'],
          },
          correct: 0,
          explanation: {
            el: 'Στη Vila Nova de Gaia, την πόλη στην απέναντι όχθη του Δούρου από το Πόρτο.',
            en: 'In Vila Nova de Gaia, the town on the opposite bank of the Douro from Porto.',
          },
        },
        {
          q: { el: 'Γιατί χρησιμοποίησαν το μοναστήρι οι στρατιώτες;', en: 'Why did soldiers use the monastery?' },
          options: {
            el: ['Για να κοιμούνται', 'Επειδή είναι ψηλά και βλέπεις τα πάντα', 'Για να μαγειρεύουν', 'Επειδή είχε πισίνα'],
            en: ['To sleep in', 'Because it is high up and you can see everything', 'To cook in', 'Because it had a swimming pool'],
          },
          correct: 1,
          explanation: {
            el: 'Από τόσο ψηλά βλέπεις το ποτάμι, τη γέφυρα και ολόκληρη την πόλη, γι\' αυτό έγινε παρατηρητήριο και φρούριο.',
            en: 'From so high up you can see the river, the bridge and the whole city, so it became a lookout and a fortress.',
          },
        },
        {
          q: { el: 'Τι υπάρχει μέσα στις μακριές αποθήκες κάτω στο ποτάμι;', en: 'What is inside the long warehouses down by the river?' },
          options: {
            el: ['Τρένα', 'Ψάρια', 'Βαρέλια με κρασί Πόρτο', 'Πλακάκια'],
            en: ['Trains', 'Fish', 'Barrels of port wine', 'Tiles'],
          },
          correct: 2,
          explanation: {
            el: 'Βαρέλια με κρασί Πόρτο, που ξεκουράζονται εκεί ήσυχα για χρόνια πριν ταξιδέψουν σε όλο τον κόσμο.',
            en: 'Barrels of port wine, resting there quietly for years before they travel all over the world.',
          },
        },
      ],
    },

    // ── 10. Jardins do Palácio de Cristal ───────────────────────────────────────
    {
      id: 'jardins-palacio-de-cristal',
      name: { el: 'Κήποι Palácio de Cristal', en: 'Palácio de Cristal Gardens' },
      emoji: '🦚',
      lat: 41.1481,
      lng: -8.6262,
      radiusM: 60,
      riddle: {
        el: 'Παγώνια περπατούν ανάμεσα στα δέντρα κι ένας τεράστιος θόλος στέκεται εκεί όπου κάποτε έλαμπε ένα παλάτι από γυαλί. Από τα παγκάκια βλέπεις το ποτάμι να φτάνει ως τη θάλασσα.',
        en: 'Peacocks wander between the trees, and a giant dome stands where a palace of glass once sparkled. From the benches you can watch the river flow all the way to the sea.',
      },
      parentHint: {
        el: 'Οι Jardins do Palácio de Cristal στη Rua de Dom Manuel II. Από τη Serra do Pilar ξαναπεράστε τη γέφυρα· είναι μια ανηφορική βόλτα 30 λεπτών προς τα δυτικά (ή μια σύντομη διαδρομή με λεωφορείο ή ταξί), το ιδανικό τέλος της διαδρομής.',
        en: 'The Jardins do Palácio de Cristal on Rua de Dom Manuel II. From Serra do Pilar cross back over the bridge; it is an uphill 30-minute walk to the west (or a short bus or taxi ride), the perfect end to the route.',
      },
      unlockQuestion: {
        question: { el: 'Τι υπάρχει σήμερα εκεί όπου στεκόταν το παλάτι από γυαλί;', en: 'What stands today where the palace of glass used to be?' },
        options: {
          el: ['Μια λίμνη', 'Ένα κάστρο', 'Ένας μεγάλος θόλος', 'Ένα τρένο'],
          en: ['A lake', 'A castle', 'A big dome', 'A train'],
        },
        correct: 2,
        explanation: {
          el: 'Ένα τεράστιο στρογγυλό κτίριο με θόλο, το Pavilhão Rosa Mota, πήρε τη θέση του γυάλινου παλατιού. Εκεί γίνονται συναυλίες και αγώνες.',
          en: 'A huge round building with a dome, the Pavilhão Rosa Mota, took the place of the glass palace. Concerts and sports events are held there.',
        },
      },
      onSite: {
        question: { el: 'Περπάτησε στον κήπο. Ποια πουλιά κυκλοφορούν ελεύθερα ανάμεσα στους επισκέπτες;', en: 'Walk around the garden. Which birds wander freely among the visitors?' },
        options: {
          el: ['Πιγκουίνοι', 'Παγώνια', 'Φλαμίνγκο', 'Αετοί'],
          en: ['Penguins', 'Peacocks', 'Flamingos', 'Eagles'],
        },
        correct: 1,
        explanation: {
          el: 'Παγώνια! Περπατούν παντού στον κήπο, κι αν είσαι τυχερός θα δεις κάποιο να ανοίγει την ουρά του σαν βεντάλια.',
          en: 'Peacocks! They walk all over the garden, and if you are lucky you will see one open its tail like a fan.',
        },
      },
      story: {
        el: 'Το 1865 το Πόρτο έχτισε ένα παλάτι από σίδερο και γυαλί, σαν ένα γιγάντιο θερμοκήπιο, για μια μεγάλη έκθεση όπου οι χώρες έδειχναν τις εφευρέσεις και τις τέχνες τους. Γύρω του, ένας σχεδιαστής κήπων από τη Γερμανία, ο Émile David, φύτεψε δέντρα, σιντριβάνια και παρτέρια στον λόφο πάνω από το ποτάμι. Το γυάλινο παλάτι πάλιωσε και γκρεμίστηκε το 1951, και στη θέση του χτίστηκε ένα τεράστιο στρογγυλό κτίριο με θόλο· σήμερα λέγεται Pavilhão Rosa Mota, από μια δρομέα του Πόρτο που κέρδισε ολυμπιακό χρυσό μετάλλιο. Οι κήποι έμειναν, και έμειναν και τα παγώνια, που περπατούν σαν να είναι δικός τους ο τόπος. Από την άκρη βλέπεις τον Δούρο να κυλάει προς τον Ατλαντικό Ωκεανό. Ο WiseBot λέει: τα πράγματα αλλάζουν, μα ένας καλός κήπος συνεχίζει να μεγαλώνει.',
        en: 'In 1865, Porto built a palace made of iron and glass, like a giant greenhouse, to hold a big exhibition where countries showed off their inventions and crafts. Around it, a garden designer from Germany, Émile David, planted trees, fountains and flower beds on the hill above the river. The glass palace grew old and was taken down in 1951, and a huge round building with a dome took its place; today it is called the Pavilhão Rosa Mota, after a runner from Porto who won an Olympic gold medal. The gardens stayed, and so did the peacocks, who walk around as if they own the place. From the edge you can see the Douro flowing towards the Atlantic Ocean. WiseBot says: things change, but a good garden keeps on growing.',
      },
      didYouKnow: {
        el: 'Το Παλάτι του Κρυστάλλου του 1865 ήταν εμπνευσμένο από το Crystal Palace του Λονδίνου (1851) και φιλοξένησε την πρώτη διεθνή έκθεση της Πορτογαλίας, την οποία εγκαινίασε ο βασιλιάς Luís I.',
        en: 'The 1865 Crystal Palace was inspired by London\'s Crystal Palace of 1851 and hosted Portugal\'s first international exhibition, opened by King Luís I.',
      },
      quiz: [
        {
          q: { el: 'Από τι ήταν φτιαγμένο το παλιό παλάτι;', en: 'What was the old palace made of?' },
          options: {
            el: ['Από πέτρα', 'Από ξύλο', 'Από πλακάκια', 'Από σίδερο και γυαλί'],
            en: ['Stone', 'Wood', 'Tiles', 'Iron and glass'],
          },
          correct: 3,
          explanation: {
            el: 'Από σίδερο και γυαλί, σαν ένα γιγάντιο θερμοκήπιο. Γι\' αυτό το έλεγαν Παλάτι του Κρυστάλλου.',
            en: 'Iron and glass, like a giant greenhouse. That is why it was called the Crystal Palace.',
          },
        },
        {
          q: { el: 'Ποια ήταν η Rosa Mota;', en: 'Who was Rosa Mota?' },
          options: {
            el: ['Μια δρομέας από το Πόρτο που κέρδισε ολυμπιακό χρυσό', 'Μια βασίλισσα', 'Μια ζωγράφος', 'Μια αρχιτέκτονας'],
            en: ['A runner from Porto who won Olympic gold', 'A queen', 'A painter', 'An architect'],
          },
          correct: 0,
          explanation: {
            el: 'Η Rosa Mota είναι δρομέας μαραθωνίου από το Πόρτο. Κέρδισε το ολυμπιακό χρυσό μετάλλιο το 1988, και ο θόλος πήρε το όνομά της.',
            en: 'Rosa Mota is a marathon runner from Porto. She won the Olympic gold medal in 1988, and the dome was named after her.',
          },
        },
        {
          q: { el: 'Πότε γκρεμίστηκε το γυάλινο παλάτι;', en: 'When was the glass palace taken down?' },
          options: {
            el: ['Το 1865', 'Το 1951', 'Το 1763', 'Το 2022'],
            en: ['In 1865', 'In 1951', 'In 1763', 'In 2022'],
          },
          correct: 1,
          explanation: {
            el: 'Το 1951. Το 1865 είναι η χρονιά που χτίστηκε, και στη θέση του μπήκε ο μεγάλος θόλος.',
            en: 'In 1951. 1865 is the year it was built, and the big dome took its place.',
          },
        },
      ],
    },
  ],
};
