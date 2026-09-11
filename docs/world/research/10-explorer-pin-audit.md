# 10 — Έλεγχος των 180 ζωντανών pins του Explorer

Παράχθηκε από `scripts/world/audit-explorer-pins.mjs` στις 2026-09-11, πάνω στο `origin/main`. Κάθε pin που στέλνει σήμερα το wisebot.gr συγκρίθηκε με το σημείο της Wikidata για το ίδιο μέρος. Τα ακατέργαστα: [explorer-pins.json](explorer-pins.json).

| Ετυμηγορία | Τι σημαίνει | Pins |
| --- | --- | ---: |
| **ok** | ≤ 60 m, το pin και η Wikidata συμφωνούν | 103 |
| **check** | 61–150 m, το ένα από τα δύο είναι κέντρο μεγάλου χώρου, θέλει μάτι | 41 |
| **wrong** | > 150 m, διορθώνεται πριν τη μετάπτωση | 12 |
| **unmatched** | δεν βρέθηκε αντικείμενο Wikidata με το όνομα, θέλει seed με το χέρι | 24 |

Η ετυμηγορία μετρά τη συμφωνία με τη Wikidata, όχι την ορθότητα της πόρτας: ένα pin «ok» μπορεί να είναι κέντρο κτιρίου όπως τα 27 της Αθήνας στο [01](01-coordinate-audit.md). Ένα «wrong» όμως είναι σχεδόν πάντα λάθος μέρος ή λάθος πλευρά, και αυτά είναι που βγάζουν το παιδί δύο στενά πιο κάτω.

## Τα χειρότερα πρώτα

| Πόλη | Μέρος | Απόκλιση | Wikidata | Περιγραφή |
| --- | --- | ---: | --- | --- |
| amsterdam | Vondelpark | 1143 m | [Q1419691](https://www.wikidata.org/wiki/Q1419691) | park in Amsterdam, Netherlands |
| barcelona | La Rambla | 579 m | [Q850593](https://www.wikidata.org/wiki/Q850593) | thoroughfare in Barcelona, Spain |
| berlin | East Side Gallery | 507 m | [Q313746](https://www.wikidata.org/wiki/Q313746) | art museum |
| prague | Kampa | 359 m | [Q3501077](https://www.wikidata.org/wiki/Q3501077) | island on Vltava river, Prague, Czech Republic |
| nicosia | Πλατεία Φανερωμένης | 317 m | [Q5433745](https://www.wikidata.org/wiki/Q5433745) | public, historical school |
| nicosia | Ενετικά Τείχη & Μνημείο Ελευθερίας | 219 m | [Q7919752](https://www.wikidata.org/wiki/Q7919752) | series of walls surrounding the old city of Nicosia, Cyprus |
| nicosia | Παγκύπριο Γυμνάσιο | 218 m | [Q3563324](https://www.wikidata.org/wiki/Q3563324) | public high-school |
| istanbul | Οδός İstiklal (Galatasaray Meydanı) | 205 m | [Q344348](https://www.wikidata.org/wiki/Q344348) | avenue in Beyoğlu, Istanbul |
| istanbul | Μεγάλο Παζάρι (Kapalıçarşı) | 190 m | [Q505954](https://www.wikidata.org/wiki/Q505954) | bazaar in Istanbul, Turkey |
| athens | Πλάκα & Αναφιώτικα | 181 m | [Q1231816](https://www.wikidata.org/wiki/Q1231816) | neighborhood of Athens, Greece |
| prague | Václavské náměstí | 177 m | [Q65720222](https://www.wikidata.org/wiki/Q65720222) | hotel in Prague |
| rome | Foro Romano | 173 m | [Q180212](https://www.wikidata.org/wiki/Q180212) | Ancient Roman center of the city, a landmark of Rome, Italy |
| nicosia | Πλατεία Ελευθερίας | 148 m | [Q5358622](https://www.wikidata.org/wiki/Q5358622) | main square in central Nicosia, Cyprus |
| krakow | Kładka Bernatka | 145 m | [Q11752074](https://www.wikidata.org/wiki/Q11752074) | footbridge in Kraków, Poland |
| nicosia | Πύλη Αμμοχώστου | 144 m | [Q6046232](https://www.wikidata.org/wiki/Q6046232) | gate in the Nicosia walls, Cyprus |
| budapest | Γέφυρα των Αλυσίδων (Lánchíd) | 142 m | [Q465534](https://www.wikidata.org/wiki/Q465534) | γέφυρα στη Βουδαπέστη |
| athens | Ακρόπολη & Παρθενώνας | 136 m | [Q131013](https://www.wikidata.org/wiki/Q131013) | ancient citadel above the city of Athens |
| athens | Αρχαία Αγορά & Ναός Ηφαίστου | 132 m | [Q395367](https://www.wikidata.org/wiki/Q395367) | major archaeological site of Athens |
| prague | Karlův most | 132 m | [Q204871](https://www.wikidata.org/wiki/Q204871) | bridge in Prague, Czech Republic |
| nicosia | Οδός Λήδρας | 128 m | [Q257937](https://www.wikidata.org/wiki/Q257937) | shopping thoroughfare in Nicosia, Cyprus |
| london | Tower of London | 125 m | [Q62378](https://www.wikidata.org/wiki/Q62378) | castle in central London, United Kingdom |
| rome | Colosseo | 119 m | [Q10285](https://www.wikidata.org/wiki/Q10285) | ancient Roman amphitheatre, a landmark of Rome, Italy |
| paris | Notre-Dame de Paris | 118 m | [Q2981](https://www.wikidata.org/wiki/Q2981) | cathedral in Paris |
| berlin | Berliner Dom | 116 m | [Q19950914](https://www.wikidata.org/wiki/Q19950914) | second Berliner Dom (1747–1894) |
| budapest | Κάστρο της Buda (Budai Vár) | 112 m | [Q850862](https://www.wikidata.org/wiki/Q850862) |  |
| london | St Paul's Cathedral | 110 m | [Q173882](https://www.wikidata.org/wiki/Q173882) | cathedral in the City of London, England, UK |
| bruges | Sint-Janshuismolen | 107 m | [Q2789120](https://www.wikidata.org/wiki/Q2789120) | windmill in Bruges, Belgium |
| copenhagen | Kastellet | 102 m | [Q221812](https://www.wikidata.org/wiki/Q221812) | star fort in Copenhagen |
| budapest | Λόφος Gellért | 99 m | [Q577122](https://www.wikidata.org/wiki/Q577122) | hill in Budapest, Hungary |
| london | Buckingham Palace | 96 m | [Q42182](https://www.wikidata.org/wiki/Q42182) | official London residence and principal workplace of the British monarch |
| london | Covent Garden | 96 m | [Q55019](https://www.wikidata.org/wiki/Q55019) | district in London, England |
| rome | Castel Sant'Angelo | 95 m | [Q486382](https://www.wikidata.org/wiki/Q486382) | castle and museum in Rome, formerly the imperial mausoleum of the emperor Hadrian and subsequent Roman emperors |
| nicosia | Τζαμί & Χαμάμ Ομεριέ | 93 m | [Q20896012](https://www.wikidata.org/wiki/Q20896012) | mosque in Cyprus, former church of Augustinian Monastery |
| paris | Tour Eiffel | 93 m | [Q243](https://www.wikidata.org/wiki/Q243) | tower located on the Champ de Mars in Paris, France |
| barcelona | Sagrada Família | 92 m | [Q2548808](https://www.wikidata.org/wiki/Q2548808) | Barcelona Metro station |
| berlin | Reichstag | 90 m | [Q151897](https://www.wikidata.org/wiki/Q151897) | seat of the German Bundestag and, before 1945, the eponymous parliament of the Weimar Republic |
| bruges | Jan van Eyckplein | 87 m | [Q2519486](https://www.wikidata.org/wiki/Q2519486) | square in Bruges, Belgium |
| london | Westminster Abbey | 86 m | [Q5933](https://www.wikidata.org/wiki/Q5933) | Gothic abbey church in London, England, UK |
| istanbul | Αγία Σοφία (Ayasofya) | 84 m | [Q12506](https://www.wikidata.org/wiki/Q12506) | mosque, museum, and former church in Istanbul, Turkey |
| istanbul | Πάρκο Gülhane | 79 m | [Q1560106](https://www.wikidata.org/wiki/Q1560106) | city park in İstanbul, Turkey |
| athens | Παναθηναϊκό Στάδιο | 73 m | [Q208811](https://www.wikidata.org/wiki/Q208811) | stadium in Athens, Greece |
| dubrovnik | Stradun | 73 m | [Q1818100](https://www.wikidata.org/wiki/Q1818100) | main street in Dubrovnik, Croatia |
| paris | Palais Garnier | 72 m | [Q187840](https://www.wikidata.org/wiki/Q187840) | opera house in Paris, France |
| lisbon | Mosteiro dos Jerónimos | 70 m | [Q272781](https://www.wikidata.org/wiki/Q272781) | building in Santa Maria de Belém, Lisbon District, Portugal |
| vienna | Ankeruhr | 70 m | [Q557226](https://www.wikidata.org/wiki/Q557226) | architectural structure |
| budapest | Μεγάλη Αγορά (Nagyvásárcsarnok) | 69 m | [Q195344](https://www.wikidata.org/wiki/Q195344) | market hall in Budapest, Hungary |
| barcelona | Park Güell | 68 m | [Q212867](https://www.wikidata.org/wiki/Q212867) | public park system in Barcelona, Spain |
| istanbul | Ιππόδρομος (Sultanahmet Meydanı) | 66 m | [Q387548](https://www.wikidata.org/wiki/Q387548) | historic square in Istanbul |
| paris | Panthéon | 66 m | [Q188856](https://www.wikidata.org/wiki/Q188856) | mausoleum in Paris for the most distinguished French people |
| vienna | Schönbrunn | 66 m | [Q131330](https://www.wikidata.org/wiki/Q131330) | palace in Vienna, Austria |
| krakow | Kościół św. Piotra i Pawła | 62 m | [Q338657](https://www.wikidata.org/wiki/Q338657) | church building in Kraków, Poland |
| london | British Museum | 61 m | [Q6373](https://www.wikidata.org/wiki/Q6373) | national museum in London, United Kingdom |
| vienna | Karlskirche | 61 m | [Q408847](https://www.wikidata.org/wiki/Q408847) | Baroque church in Vienna, Austria |

## Χωρίς αντιστοιχία στη Wikidata

- **amsterdam** — De Waag / De Waag
- **bruges** — Markt / Markt
- **bruges** — Burg / Burg
- **bruges** — Vismarkt / Vismarkt
- **bruges** — Begijnhof / Begijnhof
- **budapest** — Κοινοβούλιο (Országház) / Parliament (Országház)
- **budapest** — Βασιλική Szent István / Szent István Basilica
- **budapest** — Ναός Mátyás / Mátyás Church
- **dubrovnik** — Μεγάλη Κρήνη του Onofrio / Big Onofrio's Fountain
- **dubrovnik** — Φραγκισκανικό Μοναστήρι και Φαρμακείο / Franciscan Monastery & Pharmacy
- **dubrovnik** — Παλιό Λιμάνι / Old Port
- **dubrovnik** — Φρούριο Lovrijenac / Fort Lovrijenac
- **istanbul** — Φανάρι, Οικουμενικό Πατριαρχείο / Fener, the Ecumenical Patriarchate
- **krakow** — Kazimierz, οδός Szeroka / Kazimierz, Szeroka Street
- **nicosia** — Αρχιεπισκοπή & Άγιος Ιωάννης / Archbishop's Palace & St John's
- **nicosia** — Λαϊκή Γειτονιά / Laiki Geitonia
- **nicosia** — Δημοτικός Κήπος & Κυπριακό Μουσείο / Municipal Gardens & Cyprus Museum
- **porto** — Σταθμός São Bento / São Bento Station
- **porto** — Εκκλησίες Carmo και Carmelitas / Carmo and Carmelitas Churches
- **porto** — Μοναστήρι Serra do Pilar / Serra do Pilar Monastery
- **porto** — Κήποι Palácio de Cristal / Palácio de Cristal Gardens
- **vienna** — Άγαλμα του Mozart / Mozart Statue
- **vienna** — Rathaus / Rathaus
- **vienna** — Parlament / Parlament

## Ανά πόλη

| Πόλη | Χώρα | Spots | ok | check | wrong | unmatched | Μέγιστη απόκλιση |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Άμστερνταμ | NL | 10 | 8 | 0 | 1 | 1 | 1143 m |
| Αθήνα | GR | 10 | 6 | 3 | 1 | 0 | 181 m |
| Βαρκελώνη | ES | 10 | 7 | 2 | 1 | 0 | 579 m |
| Βερολίνο | DE | 10 | 7 | 2 | 1 | 0 | 507 m |
| Μπριζ | BE | 10 | 4 | 2 | 0 | 4 | 107 m |
| Βουδαπέστη | HU | 10 | 3 | 4 | 0 | 3 | 142 m |
| Κοπεγχάγη | DK | 10 | 9 | 1 | 0 | 0 | 102 m |
| Ντουμπρόβνικ | HR | 10 | 5 | 1 | 0 | 4 | 73 m |
| Κωνσταντινούπολη | TR | 10 | 4 | 3 | 2 | 1 | 205 m |
| Κρακοβία | PL | 10 | 7 | 2 | 0 | 1 | 145 m |
| Λισαβόνα | PT | 10 | 9 | 1 | 0 | 0 | 70 m |
| Λονδίνο | GB | 10 | 4 | 6 | 0 | 0 | 125 m |
| Λευκωσία | CY | 10 | 0 | 4 | 3 | 3 | 317 m |
| Παρίσι | FR | 10 | 6 | 4 | 0 | 0 | 118 m |
| Πόρτο | PT | 10 | 6 | 0 | 0 | 4 | 56 m |
| Πράγα | CZ | 10 | 7 | 1 | 2 | 0 | 359 m |
| Ρώμη | IT | 10 | 7 | 2 | 1 | 0 | 173 m |
| Βιέννη | AT | 10 | 4 | 3 | 0 | 3 | 70 m |

## Όλα τα pins

### Άμστερνταμ (amsterdam)

| Μέρος | Pin | Wikidata | Απόκλιση | Ετυμηγορία |
| --- | --- | --- | ---: | --- |
| Amsterdam Centraal | 52.3786, 4.9002 (r 60 m) | [Q50719](https://www.wikidata.org/wiki/Q50719) Amsterdam Central station | 39 m | ok |
| Πλατεία Dam | 52.373, 4.893 (r 40 m) | [Q839050](https://www.wikidata.org/wiki/Q839050) Dam Square | 16 m | ok |
| Westerkerk και Prinsengracht | 52.3744, 4.8838 (r 60 m) | [Q1130722](https://www.wikidata.org/wiki/Q1130722) Westerkerk | 13 m | ok |
| Το Σπίτι της Anne Frank | 52.3752, 4.884 (r 60 m) | [Q165366](https://www.wikidata.org/wiki/Q165366) Anne Frank House | 6 m | ok |
| Bloemenmarkt | 52.3668, 4.891 (r 60 m) | [Q643079](https://www.wikidata.org/wiki/Q643079) Bloemenmarkt | 24 m | ok |
| Magere Brug | 52.3636, 4.9017 (r 60 m) | [Q1344400](https://www.wikidata.org/wiki/Q1344400) Magere Brug | 45 m | ok |
| Rijksmuseum και Museumplein | 52.3598, 4.8853 (r 60 m) | [Q190804](https://www.wikidata.org/wiki/Q190804) Rijksmuseum | 22 m | ok |
| Vondelpark | 52.3616, 4.8814 (r 80 m) | [Q1419691](https://www.wikidata.org/wiki/Q1419691) Vondelpark | 1143 m | wrong |
| NEMO | 52.3741, 4.9123 (r 60 m) | [Q1422000](https://www.wikidata.org/wiki/Q1422000) NEMO Science Center | 6 m | ok |
| De Waag | 52.3726, 4.9002 (r 40 m) | — | — | unmatched |

### Αθήνα (athens)

| Μέρος | Pin | Wikidata | Απόκλιση | Ετυμηγορία |
| --- | --- | --- | ---: | --- |
| Πλατεία Συντάγματος | 37.9754, 23.7357 (r 40 m) | [Q110807145](https://www.wikidata.org/wiki/Q110807145) Πλατεία Συντάγματος (ανασκαφή) | 36 m | ok |
| Ζάππειο & Εθνικός Κήπος | 37.9714, 23.7366 (r 50 m) | [Q147478](https://www.wikidata.org/wiki/Q147478) Zappeion | 19 m | ok |
| Πύλη του Αδριανού | 37.9704, 23.7321 (r 40 m) | [Q1567576](https://www.wikidata.org/wiki/Q1567576) Πύλη του Αδριανού | 27 m | ok |
| Παναθηναϊκό Στάδιο | 37.9689, 23.7407 (r 50 m) | [Q208811](https://www.wikidata.org/wiki/Q208811) Panathenaic Stadium | 73 m | check |
| Πλάκα & Αναφιώτικα | 37.9721, 23.7285 (r 80 m) | [Q1231816](https://www.wikidata.org/wiki/Q1231816) Plaka | 181 m | wrong |
| Ακρόπολη & Παρθενώνας | 37.9714, 23.7246 (r 70 m) | [Q131013](https://www.wikidata.org/wiki/Q131013) Acropolis of Athens | 136 m | check |
| Άρειος Πάγος | 37.9723, 23.7238 (r 60 m) | [Q202487](https://www.wikidata.org/wiki/Q202487) Άρειος Πάγος | 19 m | ok |
| Αρχαία Αγορά & Ναός Ηφαίστου | 37.9756, 23.7212 (r 80 m) | [Q395367](https://www.wikidata.org/wiki/Q395367) Ancient Agora of Athens | 132 m | check |
| Αέρηδες | 37.9741, 23.7268 (r 60 m) | [Q372717](https://www.wikidata.org/wiki/Q372717) Tower of the Winds | 20 m | ok |
| Πλατεία Μοναστηρακίου | 37.9761, 23.7256 (r 40 m) | [Q112968748](https://www.wikidata.org/wiki/Q112968748) Monastiraki Square | 44 m | ok |

### Βαρκελώνη (barcelona)

| Μέρος | Pin | Wikidata | Απόκλιση | Ετυμηγορία |
| --- | --- | --- | ---: | --- |
| Sagrada Família | 41.4042, 2.1755 (r 60 m) | [Q2548808](https://www.wikidata.org/wiki/Q2548808) Sagrada Família | 92 m | check |
| Casa Batlló | 41.3916, 2.1649 (r 60 m) | [Q461371](https://www.wikidata.org/wiki/Q461371) Casa Batlló | 3 m | ok |
| Casa Milà (La Pedrera) | 41.3952, 2.1618 (r 60 m) | [Q207870](https://www.wikidata.org/wiki/Q207870) Casa Milà | 14 m | ok |
| La Rambla | 41.3861, 2.1701 (r 60 m) | [Q850593](https://www.wikidata.org/wiki/Q850593) La Rambla | 579 m | wrong |
| Mercat de la Boqueria | 41.3818, 2.1718 (r 60 m) | [Q1334899](https://www.wikidata.org/wiki/Q1334899) La Boqueria | 21 m | ok |
| Catedral de Barcelona | 41.3839, 2.176 (r 70 m) | [Q17155](https://www.wikidata.org/wiki/Q17155) Cathedral of the Holy Cross and Saint Eulalia | 32 m | ok |
| Plaça Reial | 41.38, 2.175 (r 50 m) | [Q1519964](https://www.wikidata.org/wiki/Q1519964) Royal Square | 0 m | ok |
| Monument a Colom | 41.3758, 2.1776 (r 60 m) | [Q2288815](https://www.wikidata.org/wiki/Q2288815) Columbus Monument | 13 m | ok |
| Arc de Triomf | 41.391, 2.1805 (r 40 m) | [Q631075](https://www.wikidata.org/wiki/Q631075) Arc de Triomf | 13 m | ok |
| Park Güell | 41.413, 2.1527 (r 80 m) | [Q212867](https://www.wikidata.org/wiki/Q212867) Park Güell | 68 m | check |

### Βερολίνο (berlin)

| Μέρος | Pin | Wikidata | Απόκλιση | Ετυμηγορία |
| --- | --- | --- | ---: | --- |
| Brandenburger Tor | 52.5162, 13.3782 (r 40 m) | [Q82425](https://www.wikidata.org/wiki/Q82425) Brandenburg Gate | 33 m | ok |
| Reichstag | 52.5185, 13.3748 (r 40 m) | [Q151897](https://www.wikidata.org/wiki/Q151897) Reichstag | 90 m | check |
| Siegessäule | 52.5145, 13.3501 (r 60 m) | [Q154987](https://www.wikidata.org/wiki/Q154987) Siegessäule | 1 m | ok |
| Potsdamer Platz | 52.5095, 13.3765 (r 40 m) | [Q106086519](https://www.wikidata.org/wiki/Q106086519) Potsdamer Platz S-Bahn station | 13 m | ok |
| Checkpoint Charlie | 52.5075, 13.3903 (r 60 m) | [Q68689](https://www.wikidata.org/wiki/Q68689) Checkpoint Charlie | 2 m | ok |
| Gendarmenmarkt | 52.5137, 13.3927 (r 40 m) | [Q170103](https://www.wikidata.org/wiki/Q170103) Gendarmenmarkt | 11 m | ok |
| Berliner Dom | 52.5187, 13.3995 (r 40 m) | [Q19950914](https://www.wikidata.org/wiki/Q19950914) Schlosskirche or Domkirche | 116 m | check |
| Fernsehturm | 52.5207, 13.4095 (r 60 m) | [Q151356](https://www.wikidata.org/wiki/Q151356) Fernsehturm Berlin | 15 m | ok |
| Nikolaiviertel | 52.5167, 13.4073 (r 70 m) | [Q703927](https://www.wikidata.org/wiki/Q703927) Nikolaiviertel | 6 m | ok |
| East Side Gallery | 52.5053, 13.4382 (r 120 m) | [Q313746](https://www.wikidata.org/wiki/Q313746) East Side Gallery | 507 m | wrong |

### Μπριζ (bruges)

| Μέρος | Pin | Wikidata | Απόκλιση | Ετυμηγορία |
| --- | --- | --- | ---: | --- |
| Markt | 51.2088, 3.2246 (r 40 m) | — | — | unmatched |
| Burg | 51.2085, 3.2268 (r 40 m) | — | — | unmatched |
| Rozenhoedkaai | 51.2072, 3.2271 (r 60 m) | [Q2670532](https://www.wikidata.org/wiki/Q2670532) Rozenhoedkaai | 32 m | ok |
| Vismarkt | 51.2078, 3.2278 (r 40 m) | — | — | unmatched |
| Bonifaciusbrug | 51.2048, 3.2256 (r 60 m) | [Q116243339](https://www.wikidata.org/wiki/Q116243339) Bonifatiusbrug | 20 m | ok |
| Onze-Lieve-Vrouwekerk | 51.2046, 3.2245 (r 60 m) | [Q917183](https://www.wikidata.org/wiki/Q917183) Church of Our Lady | 6 m | ok |
| Begijnhof | 51.202, 3.2226 (r 60 m) | — | — | unmatched |
| Minnewater | 51.2007, 3.2241 (r 60 m) | [Q2134080](https://www.wikidata.org/wiki/Q2134080) Minnewater | 59 m | ok |
| Jan van Eyckplein | 51.2112, 3.227 (r 40 m) | [Q2519486](https://www.wikidata.org/wiki/Q2519486) Jan van Eyckplein | 87 m | check |
| Sint-Janshuismolen | 51.215, 3.2367 (r 80 m) | [Q2789120](https://www.wikidata.org/wiki/Q2789120) Sint-Janshuismolen | 107 m | check |

### Βουδαπέστη (budapest)

| Μέρος | Pin | Wikidata | Απόκλιση | Ετυμηγορία |
| --- | --- | --- | ---: | --- |
| Κοινοβούλιο (Országház) | 47.5068, 19.047 (r 40 m) | — | — | unmatched |
| Βασιλική Szent István | 47.5007, 19.0533 (r 40 m) | — | — | unmatched |
| Γέφυρα των Αλυσίδων (Lánchíd) | 47.499, 19.0455 (r 60 m) | [Q465534](https://www.wikidata.org/wiki/Q465534) Γέφυρα των Αλυσίδων | 142 m | check |
| Κάστρο της Buda (Budai Vár) | 47.4967, 19.0384 (r 60 m) | [Q850862](https://www.wikidata.org/wiki/Q850862) Buda Castle Tunnel | 112 m | check |
| Ναός Mátyás | 47.5015, 19.0338 (r 60 m) | — | — | unmatched |
| Προμαχώνας των Ψαράδων (Halászbástya) | 47.5025, 19.035 (r 60 m) | [Q493117](https://www.wikidata.org/wiki/Q493117) Fisherman's Bastion | 38 m | ok |
| Λόφος Gellért | 47.4868, 19.047 (r 80 m) | [Q577122](https://www.wikidata.org/wiki/Q577122) Gellért Hill | 99 m | check |
| Πλατεία Ηρώων (Hősök tere) | 47.5149, 19.0778 (r 40 m) | [Q299973](https://www.wikidata.org/wiki/Q299973) Heroes' Square | 47 m | ok |
| Κάστρο Vajdahunyad | 47.5148, 19.0821 (r 60 m) | [Q1092030](https://www.wikidata.org/wiki/Q1092030) Vajdahunyad Castle | 54 m | ok |
| Μεγάλη Αγορά (Nagyvásárcsarnok) | 47.4873, 19.0586 (r 40 m) | [Q195344](https://www.wikidata.org/wiki/Q195344) Great Market Hall | 69 m | check |

### Κοπεγχάγη (copenhagen)

| Μέρος | Pin | Wikidata | Απόκλιση | Ετυμηγορία |
| --- | --- | --- | ---: | --- |
| Rådhuspladsen | 55.6759, 12.5697 (r 40 m) | [Q2178686](https://www.wikidata.org/wiki/Q2178686) City Hall Square | 58 m | ok |
| Tivoli | 55.6739, 12.568 (r 40 m) | [Q110289](https://www.wikidata.org/wiki/Q110289) Tivoli Gardens | 38 m | ok |
| Strøget | 55.6786, 12.5787 (r 60 m) | [Q1347634](https://www.wikidata.org/wiki/Q1347634) Strøget | 41 m | ok |
| Rundetaarn | 55.6813, 12.5758 (r 60 m) | [Q1140534](https://www.wikidata.org/wiki/Q1140534) Rundetaarn | 8 m | ok |
| Kongens Nytorv | 55.6805, 12.5855 (r 60 m) | [Q1589941](https://www.wikidata.org/wiki/Q1589941) Kongens Nytorv | 32 m | ok |
| Nyhavn | 55.6798, 12.5908 (r 60 m) | [Q943946](https://www.wikidata.org/wiki/Q943946) Nyhavn | 26 m | ok |
| Amalienborg | 55.684, 12.5929 (r 40 m) | [Q211053](https://www.wikidata.org/wiki/Q211053) Amalienborg | 27 m | ok |
| Kastellet | 55.6908, 12.5928 (r 80 m) | [Q221812](https://www.wikidata.org/wiki/Q221812) Kastellet | 102 m | check |
| Η Μικρή Γοργόνα | 55.6928, 12.5991 (r 80 m) | [Q214619](https://www.wikidata.org/wiki/Q214619) Η Μικρή Γοργόνα | 12 m | ok |
| Vor Frelsers Kirke | 55.6729, 12.5938 (r 60 m) | [Q29157](https://www.wikidata.org/wiki/Q29157) Church of Our Saviour | 15 m | ok |

### Ντουμπρόβνικ (dubrovnik)

| Μέρος | Pin | Wikidata | Απόκλιση | Ετυμηγορία |
| --- | --- | --- | ---: | --- |
| Πύλη Pile | 42.6414, 18.1064 (r 60 m) | [Q3509061](https://www.wikidata.org/wiki/Q3509061) Pile Gate, Dubrovnik | 53 m | ok |
| Μεγάλη Κρήνη του Onofrio | 42.6413, 18.1074 (r 40 m) | — | — | unmatched |
| Φραγκισκανικό Μοναστήρι και Φαρμακείο | 42.6415, 18.1078 (r 60 m) | — | — | unmatched |
| Stradun | 42.641, 18.1088 (r 60 m) | [Q1818100](https://www.wikidata.org/wiki/Q1818100) Stradun | 73 m | check |
| Στήλη του Orlando | 42.6408, 18.1103 (r 40 m) | [Q3442751](https://www.wikidata.org/wiki/Q3442751) Orlando's Column | 22 m | ok |
| Παλάτι Sponza και Πύργος του Ρολογιού | 42.641, 18.1105 (r 40 m) | [Q2986276](https://www.wikidata.org/wiki/Q2986276) Sponza Palace | 13 m | ok |
| Εκκλησία του Αγίου Βλασίου | 42.6407, 18.1099 (r 40 m) | [Q2986286](https://www.wikidata.org/wiki/Q2986286) St Blaise's Church | 35 m | ok |
| Παλάτι του Ρέκτορα | 42.6404, 18.1104 (r 60 m) | [Q2497590](https://www.wikidata.org/wiki/Q2497590) Rector's Palace, Dubrovnik | 38 m | ok |
| Παλιό Λιμάνι | 42.6405, 18.1118 (r 80 m) | — | — | unmatched |
| Φρούριο Lovrijenac | 42.6409, 18.1052 (r 80 m) | — | — | unmatched |

### Κωνσταντινούπολη (istanbul)

| Μέρος | Pin | Wikidata | Απόκλιση | Ετυμηγορία |
| --- | --- | --- | ---: | --- |
| Ιππόδρομος (Sultanahmet Meydanı) | 41.0058, 28.9755 (r 40 m) | [Q387548](https://www.wikidata.org/wiki/Q387548) Ιππόδρομος της Κωνσταντινούπολης | 66 m | check |
| Αγία Σοφία (Ayasofya) | 41.0083, 28.979 (r 60 m) | [Q12506](https://www.wikidata.org/wiki/Q12506) Hagia Sophia | 84 m | check |
| Γαλάζιο Τζαμί (Sultanahmet Camii) | 41.0057, 28.9764 (r 60 m) | [Q80541](https://www.wikidata.org/wiki/Q80541) Sultan Ahmed Mosque | 50 m | ok |
| Πάρκο Gülhane | 41.0129, 28.9803 (r 80 m) | [Q1560106](https://www.wikidata.org/wiki/Q1560106) Gülhane Park | 79 m | check |
| Μεγάλο Παζάρι (Kapalıçarşı) | 41.0105, 28.9702 (r 60 m) | [Q505954](https://www.wikidata.org/wiki/Q505954) Grand Bazaar | 190 m | wrong |
| Αιγυπτιακή Αγορά (Mısır Çarşısı) | 41.0165, 28.9705 (r 40 m) | [Q668641](https://www.wikidata.org/wiki/Q668641) Spice Bazaar | 13 m | ok |
| Γέφυρα του Γαλατά (Galata Köprüsü) | 41.0201, 28.9733 (r 80 m) | [Q81523](https://www.wikidata.org/wiki/Q81523) Galata Bridge | 23 m | ok |
| Πύργος του Γαλατά (Galata Kulesi) | 41.0256, 28.9741 (r 60 m) | [Q91274](https://www.wikidata.org/wiki/Q91274) Galata Tower | 6 m | ok |
| Οδός İstiklal (Galatasaray Meydanı) | 41.033, 28.977 (r 60 m) | [Q344348](https://www.wikidata.org/wiki/Q344348) İstiklal Avenue | 205 m | wrong |
| Φανάρι, Οικουμενικό Πατριαρχείο | 41.0292, 28.9518 (r 60 m) | — | — | unmatched |

### Κρακοβία (krakow)

| Μέρος | Pin | Wikidata | Απόκλιση | Ετυμηγορία |
| --- | --- | --- | ---: | --- |
| Brama Floriańska και Barbakan | 50.0652, 19.9414 (r 60 m) | [Q1363724](https://www.wikidata.org/wiki/Q1363724) St. Florian's Gate | 53 m | ok |
| Rynek Główny και Sukiennice | 50.0617, 19.9378 (r 40 m) | [Q770631](https://www.wikidata.org/wiki/Q770631) Old town Market Square in Krakow | 42 m | ok |
| Kościół Mariacki | 50.0616, 19.9389 (r 40 m) | [Q1143171](https://www.wikidata.org/wiki/Q1143171) St. Mary's Basilica in Kraków | 20 m | ok |
| Wieża Ratuszowa | 50.0615, 19.9364 (r 40 m) | [Q1786361](https://www.wikidata.org/wiki/Q1786361) Town Hall Tower | 6 m | ok |
| Collegium Maius | 50.0616, 19.9334 (r 60 m) | [Q919596](https://www.wikidata.org/wiki/Q919596) Collegium Maius | 30 m | ok |
| Kościół św. Piotra i Pawła | 50.0575, 19.9388 (r 60 m) | [Q338657](https://www.wikidata.org/wiki/Q338657) Saints Peter and Paul Church | 62 m | check |
| Wawel | 50.0544, 19.9354 (r 80 m) | [Q743704](https://www.wikidata.org/wiki/Q743704) Wawel | 27 m | ok |
| Smok Wawelski | 50.053, 19.933 (r 80 m) | [Q9338697](https://www.wikidata.org/wiki/Q9338697) Wawel Dragon (statue) | 42 m | ok |
| Kładka Bernatka | 50.0478, 19.9477 (r 80 m) | [Q11752074](https://www.wikidata.org/wiki/Q11752074) Father Bernatek bridge | 145 m | check |
| Kazimierz, οδός Szeroka | 50.0517, 19.9478 (r 60 m) | — | — | unmatched |

### Λισαβόνα (lisbon)

| Μέρος | Pin | Wikidata | Απόκλιση | Ετυμηγορία |
| --- | --- | --- | ---: | --- |
| Praça do Comércio | 38.7075, -9.1364 (r 40 m) | [Q999002](https://www.wikidata.org/wiki/Q999002) Praça do Comércio | 1 m | ok |
| Arco da Rua Augusta | 38.7084, -9.1366 (r 40 m) | [Q637590](https://www.wikidata.org/wiki/Q637590) Rua Augusta Arch | 17 m | ok |
| Elevador de Santa Justa | 38.7123, -9.1394 (r 60 m) | [Q168001](https://www.wikidata.org/wiki/Q168001) Santa Justa Lift | 45 m | ok |
| Rossio | 38.7139, -9.1394 (r 40 m) | [Q1549270](https://www.wikidata.org/wiki/Q1549270) Rossio Square | 4 m | ok |
| Sé de Lisboa | 38.7098, -9.1327 (r 60 m) | [Q432290](https://www.wikidata.org/wiki/Q432290) Lisbon Cathedral | 25 m | ok |
| Castelo de São Jorge | 38.7139, -9.1335 (r 80 m) | [Q636780](https://www.wikidata.org/wiki/Q636780) Castle of Saint George | 15 m | ok |
| Miradouro de Santa Luzia | 38.7118, -9.1303 (r 60 m) | [Q6837314](https://www.wikidata.org/wiki/Q6837314) Miradouro de Santa Luzia | 15 m | ok |
| Torre de Belém | 38.6916, -9.216 (r 60 m) | [Q8960918](https://www.wikidata.org/wiki/Q8960918) Torre de Belém Lighthouse | 16 m | ok |
| Padrão dos Descobrimentos | 38.6936, -9.2057 (r 40 m) | [Q1133712](https://www.wikidata.org/wiki/Q1133712) Padrão dos Descobrimentos | 8 m | ok |
| Mosteiro dos Jerónimos | 38.6979, -9.2064 (r 40 m) | [Q272781](https://www.wikidata.org/wiki/Q272781) Jerónimos Monastery | 70 m | check |

### Λονδίνο (london)

| Μέρος | Pin | Wikidata | Απόκλιση | Ετυμηγορία |
| --- | --- | --- | ---: | --- |
| Buckingham Palace | 51.5017, -0.1412 (r 60 m) | [Q42182](https://www.wikidata.org/wiki/Q42182) Buckingham Palace | 96 m | check |
| Westminster Abbey | 51.4995, -0.1286 (r 50 m) | [Q5933](https://www.wikidata.org/wiki/Q5933) Westminster Abbey | 86 m | check |
| Big Ben | 51.5009, -0.1243 (r 70 m) | [Q41225](https://www.wikidata.org/wiki/Q41225) Big Ben | 32 m | ok |
| London Eye | 51.5032, -0.1198 (r 50 m) | [Q160659](https://www.wikidata.org/wiki/Q160659) London Eye | 16 m | ok |
| Trafalgar Square | 51.508, -0.1281 (r 40 m) | [Q129143](https://www.wikidata.org/wiki/Q129143) Trafalgar Square | 7 m | ok |
| Covent Garden | 51.5118, -0.1233 (r 50 m) | [Q55019](https://www.wikidata.org/wiki/Q55019) Covent Garden | 96 m | check |
| British Museum | 51.5189, -0.1269 (r 50 m) | [Q6373](https://www.wikidata.org/wiki/Q6373) British Museum | 61 m | check |
| St Paul's Cathedral | 51.5138, -0.0999 (r 50 m) | [Q173882](https://www.wikidata.org/wiki/Q173882) St Paul's Cathedral | 110 m | check |
| Tower of London | 51.5081, -0.078 (r 80 m) | [Q62378](https://www.wikidata.org/wiki/Q62378) Tower of London | 125 m | check |
| Tower Bridge | 51.5055, -0.0754 (r 80 m) | [Q83125](https://www.wikidata.org/wiki/Q83125) Tower Bridge | 10 m | ok |

### Λευκωσία (nicosia)

| Μέρος | Pin | Wikidata | Απόκλιση | Ετυμηγορία |
| --- | --- | --- | ---: | --- |
| Πλατεία Ελευθερίας | 35.1698, 33.361 (r 40 m) | [Q5358622](https://www.wikidata.org/wiki/Q5358622) Eleftheria square | 148 m | check |
| Ενετικά Τείχη & Μνημείο Ελευθερίας | 35.173, 33.3697 (r 80 m) | [Q7919752](https://www.wikidata.org/wiki/Q7919752) Venetian walls of Nicosia | 219 m | wrong |
| Πύλη Αμμοχώστου | 35.1731, 33.3706 (r 80 m) | [Q6046232](https://www.wikidata.org/wiki/Q6046232) Famagusta Gate | 144 m | check |
| Αρχιεπισκοπή & Άγιος Ιωάννης | 35.1746, 33.3672 (r 40 m) | — | — | unmatched |
| Παγκύπριο Γυμνάσιο | 35.175, 33.368 (r 60 m) | [Q3563324](https://www.wikidata.org/wiki/Q3563324) Pancyprian Gymnasium | 218 m | wrong |
| Λαϊκή Γειτονιά | 35.172, 33.3625 (r 60 m) | — | — | unmatched |
| Οδός Λήδρας | 35.1733, 33.3613 (r 60 m) | [Q257937](https://www.wikidata.org/wiki/Q257937) Ledra Street | 128 m | check |
| Πλατεία Φανερωμένης | 35.1748, 33.3597 (r 40 m) | [Q5433745](https://www.wikidata.org/wiki/Q5433745) Faneromeni Square | 317 m | wrong |
| Τζαμί & Χαμάμ Ομεριέ | 35.1712, 33.3661 (r 60 m) | [Q20896012](https://www.wikidata.org/wiki/Q20896012) Omeriye Mosque | 93 m | check |
| Δημοτικός Κήπος & Κυπριακό Μουσείο | 35.1712, 33.3563 (r 60 m) | — | — | unmatched |

### Παρίσι (paris)

| Μέρος | Pin | Wikidata | Απόκλιση | Ετυμηγορία |
| --- | --- | --- | ---: | --- |
| Tour Eiffel | 48.8578, 2.2955 (r 80 m) | [Q243](https://www.wikidata.org/wiki/Q243) Eiffel Tower | 93 m | check |
| Arc de Triomphe | 48.8738, 2.295 (r 80 m) | [Q64436](https://www.wikidata.org/wiki/Q64436) Arc de Triomphe | 4 m | ok |
| Place de la Concorde | 48.8656, 2.3212 (r 60 m) | [Q189503](https://www.wikidata.org/wiki/Q189503) place de la Concorde | 5 m | ok |
| Pyramide du Louvre | 48.8611, 2.3358 (r 60 m) | [Q13397](https://www.wikidata.org/wiki/Q13397) Louvre Pyramid | 12 m | ok |
| Pont Neuf | 48.8575, 2.3412 (r 80 m) | [Q335277](https://www.wikidata.org/wiki/Q335277) Pont Neuf | 34 m | ok |
| Notre-Dame de Paris | 48.8534, 2.3483 (r 60 m) | [Q2981](https://www.wikidata.org/wiki/Q2981) Notre-Dame de Paris | 118 m | check |
| Panthéon | 48.8462, 2.3452 (r 60 m) | [Q188856](https://www.wikidata.org/wiki/Q188856) Panthéon | 66 m | check |
| Jardin du Luxembourg | 48.8474, 2.3372 (r 80 m) | [Q309458](https://www.wikidata.org/wiki/Q309458) Jardin du Luxembourg | 51 m | ok |
| Palais Garnier | 48.8713, 2.3318 (r 60 m) | [Q187840](https://www.wikidata.org/wiki/Q187840) Palais Garnier | 72 m | check |
| Sacré-Cœur | 48.8862, 2.3431 (r 80 m) | [Q28785](https://www.wikidata.org/wiki/Q28785) Sacré-Cœur | 51 m | ok |

### Πόρτο (porto)

| Μέρος | Pin | Wikidata | Απόκλιση | Ετυμηγορία |
| --- | --- | --- | ---: | --- |
| Σταθμός São Bento | 41.1456, -8.6106 (r 40 m) | — | — | unmatched |
| Εκκλησίες Carmo και Carmelitas | 41.1471, -8.616 (r 50 m) | — | — | unmatched |
| Πύργος Clérigos | 41.1457, -8.6146 (r 60 m) | [Q20986654](https://www.wikidata.org/wiki/Q20986654) Clerigos tower | 1 m | ok |
| Αγορά Bolhão | 41.1493, -8.6063 (r 50 m) | [Q10328805](https://www.wikidata.org/wiki/Q10328805) Bolhão Market | 56 m | ok |
| Καθεδρικός Sé do Porto | 41.1428, -8.6112 (r 40 m) | [Q1441255](https://www.wikidata.org/wiki/Q1441255) Porto Cathedral | 2 m | ok |
| Palácio da Bolsa | 41.1414, -8.6156 (r 40 m) | [Q1371109](https://www.wikidata.org/wiki/Q1371109) Palácio da Bolsa | 8 m | ok |
| Πλατεία Ribeira | 41.1405, -8.6131 (r 40 m) | [Q7322292](https://www.wikidata.org/wiki/Q7322292) Ribeira Square | 24 m | ok |
| Γέφυρα Luís I | 41.14, -8.6095 (r 80 m) | [Q1322447](https://www.wikidata.org/wiki/Q1322447) Luiz I Bridge | 31 m | ok |
| Μοναστήρι Serra do Pilar | 41.137, -8.6083 (r 70 m) | — | — | unmatched |
| Κήποι Palácio de Cristal | 41.1481, -8.6262 (r 60 m) | — | — | unmatched |

### Πράγα (prague)

| Μέρος | Pin | Wikidata | Απόκλιση | Ετυμηγορία |
| --- | --- | --- | ---: | --- |
| Prašná brána | 50.0873, 14.4277 (r 60 m) | [Q1488700](https://www.wikidata.org/wiki/Q1488700) Powder Tower | 10 m | ok |
| Staroměstské náměstí | 50.0876, 14.4212 (r 40 m) | [Q421678](https://www.wikidata.org/wiki/Q421678) Old Town Square | 17 m | ok |
| Orloj | 50.0869, 14.421 (r 40 m) | [Q729370](https://www.wikidata.org/wiki/Q729370) Prague Astronomical Clock | 24 m | ok |
| Karlův most | 50.0864, 14.4138 (r 80 m) | [Q204871](https://www.wikidata.org/wiki/Q204871) Charles Bridge | 132 m | check |
| Kampa | 50.084, 14.4084 (r 80 m) | [Q3501077](https://www.wikidata.org/wiki/Q3501077) Kampa Island | 359 m | wrong |
| Lennonova zeď | 50.0862, 14.4067 (r 60 m) | [Q107161512](https://www.wikidata.org/wiki/Q107161512) Lennonova zeď v Praze | 7 m | ok |
| Pražský hrad | 50.0905, 14.4002 (r 80 m) | [Q193369](https://www.wikidata.org/wiki/Q193369) Prague Castle | 57 m | ok |
| Petřínská rozhledna | 50.0835, 14.3951 (r 80 m) | [Q12256](https://www.wikidata.org/wiki/Q12256) Petřín Lookout Tower | 6 m | ok |
| Václavské náměstí | 50.08, 14.4289 (r 40 m) | [Q65720222](https://www.wikidata.org/wiki/Q65720222) Wenceslas Square Hotel | 177 m | wrong |
| Tančící dům | 50.0756, 14.414 (r 60 m) | [Q244816](https://www.wikidata.org/wiki/Q244816) Dancing House | 13 m | ok |

### Ρώμη (rome)

| Μέρος | Pin | Wikidata | Απόκλιση | Ετυμηγορία |
| --- | --- | --- | ---: | --- |
| Colosseo | 41.8901, 12.4908 (r 80 m) | [Q10285](https://www.wikidata.org/wiki/Q10285) Colosseum | 119 m | check |
| Foro Romano | 41.8932, 12.4868 (r 60 m) | [Q180212](https://www.wikidata.org/wiki/Q180212) Roman Forum | 173 m | wrong |
| Piazza del Campidoglio | 41.8934, 12.4829 (r 40 m) | [Q34921](https://www.wikidata.org/wiki/Q34921) Piazza del Campidoglio | 7 m | ok |
| Bocca della Verità | 41.8882, 12.4818 (r 40 m) | [Q729490](https://www.wikidata.org/wiki/Q729490) Bocca della Verità | 19 m | ok |
| Pantheon | 41.899, 12.4768 (r 40 m) | [Q99309](https://www.wikidata.org/wiki/Q99309) Pantheon | 45 m | ok |
| Fontana di Trevi | 41.9008, 12.4834 (r 60 m) | [Q185382](https://www.wikidata.org/wiki/Q185382) Trevi Fountain | 29 m | ok |
| Piazza di Spagna | 41.9057, 12.4822 (r 60 m) | [Q15124814](https://www.wikidata.org/wiki/Q15124814) Piazza di Spagna | 30 m | ok |
| Piazza Navona | 41.8992, 12.4731 (r 40 m) | [Q463400](https://www.wikidata.org/wiki/Q463400) Piazza Navona | 55 m | ok |
| Castel Sant'Angelo | 41.9022, 12.4665 (r 80 m) | [Q486382](https://www.wikidata.org/wiki/Q486382) Castel Sant'Angelo | 95 m | check |
| Piazza San Pietro | 41.9022, 12.4573 (r 60 m) | [Q83425](https://www.wikidata.org/wiki/Q83425) Saint Peter's Square | 5 m | ok |

### Βιέννη (vienna)

| Μέρος | Pin | Wikidata | Απόκλιση | Ετυμηγορία |
| --- | --- | --- | ---: | --- |
| Stephansdom | 48.2083, 16.3725 (r 60 m) | [Q5943](https://www.wikidata.org/wiki/Q5943) St. Stephen's Cathedral | 58 m | ok |
| Ankeruhr | 48.2114, 16.3734 (r 60 m) | [Q557226](https://www.wikidata.org/wiki/Q557226) Ankeruhr | 70 m | check |
| Hofburg | 48.2079, 16.367 (r 60 m) | [Q45350189](https://www.wikidata.org/wiki/Q45350189) Old Burgtheater | 43 m | ok |
| Άγαλμα του Mozart | 48.2046, 16.3662 (r 40 m) | — | — | unmatched |
| Staatsoper | 48.2033, 16.3686 (r 40 m) | [Q209937](https://www.wikidata.org/wiki/Q209937) Vienna State Opera house | 42 m | ok |
| Karlskirche | 48.1988, 16.3716 (r 40 m) | [Q408847](https://www.wikidata.org/wiki/Q408847) Karlskirche | 61 m | check |
| Rathaus | 48.2106, 16.3588 (r 40 m) | — | — | unmatched |
| Parlament | 48.2082, 16.36 (r 40 m) | — | — | unmatched |
| Riesenrad | 48.2164, 16.3956 (r 60 m) | [Q697578](https://www.wikidata.org/wiki/Q697578) Wiener Riesenrad | 53 m | ok |
| Schönbrunn | 48.1842, 16.3122 (r 80 m) | [Q131330](https://www.wikidata.org/wiki/Q131330) Schönbrunn Palace | 66 m | check |

