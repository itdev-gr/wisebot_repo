# WiseBot World — the countries and cities

The owner's choice: the top-20 tourist countries worldwide. Build in the order below.

Rankings of international arrivals agree on the first handful and diverge after that —
France, Spain, the United States, Italy, Turkey and Mexico lead every published list;
below that the order depends on the source and the year, so this list is "the countries
that appear in every major ranking", not a leaderboard. Greece goes first regardless of
rank, because the audience is Greek and the first country is the one that proves the
model.

One deliberate substitution: **Saudi Arabia is replaced by Egypt.** Saudi Arabia's
arrivals are overwhelmingly pilgrimage to Mecca, which non-Muslims cannot enter and
which is not a place a child can visit in this app. Egypt sits in the same tier by
arrivals and gives a six-year-old the pyramids.

| # | Country | Cities | Why it earns its place |
| --- | --- | --- | --- |
| 1 | 🇬🇷 Greece | Athens, Thessaloniki, Heraklion, Rhodes, Delphi | Home. First, and the reference implementation. |
| 2 | 🇫🇷 France | Paris, Nice, Lyon | First in arrivals on every list. |
| 3 | 🇪🇸 Spain | Barcelona, Madrid, Seville | Second on every list. |
| 4 | 🇮🇹 Italy | Rome, Venice, Florence | Rome is the natural sequel to Athens. |
| 5 | 🇹🇷 Turkey | Istanbul, Antalya | Istanbul is a top-five city worldwide. |
| 6 | 🇬🇧 United Kingdom | London, Edinburgh | London is a top-three city worldwide. |
| 7 | 🇺🇸 United States | New York, Washington DC, San Francisco | Third in arrivals. |
| 8 | 🇩🇪 Germany | Berlin, Munich | |
| 9 | 🇵🇹 Portugal | Lisbon, Porto | Already tested by the owner. |
| 10 | 🇦🇹 Austria | Vienna, Salzburg | |
| 11 | 🇳🇱 Netherlands | Amsterdam | |
| 12 | 🇯🇵 Japan | Tokyo, Kyoto | |
| 13 | 🇲🇽 Mexico | Mexico City, Mérida | Sixth in arrivals. |
| 14 | 🇪🇬 Egypt | Cairo, Luxor | The pyramids. See the substitution note above. |
| 15 | 🇹🇭 Thailand | Bangkok, Chiang Mai | Bangkok is first among cities worldwide. |
| 16 | 🇨🇳 China | Beijing, Xi'an | |
| 17 | 🇨🇦 Canada | Toronto, Montréal | |
| 18 | 🇵🇱 Poland | Kraków, Warsaw | |
| 19 | 🇭🇷 Croatia | Dubrovnik, Split | |
| 20 | 🇦🇪 United Arab Emirates | Dubai | A top-ten city worldwide. |

Forty-five cities. At twelve to eighteen places each that is roughly six hundred places,
so the order matters more than the total: every country is shippable on its own the day
its cities are done.

## Languages

Six, in World content only: `el en de fr es it`.

The reasoning, since the owner asked which languages a tourist product needs. A
hop-on hop-off audio guide in a European city carries eight to eighteen tracks, and the
first six are always English, Spanish, French, German, Italian and Portuguese. English,
Spanish, French, German and Italian between them cover the overwhelming majority of
European visitors, and they are the five that need no new script, no right-to-left
layout, and no new font. Greek is there because it is the app's own language.

The ten-to-twelve-language tier adds Chinese, Japanese, Russian, Portuguese, Arabic and
Turkish. That tier is a different project: Arabic needs right-to-left layout throughout,
Chinese and Japanese need their own fonts and line-breaking, and each added language
multiplies the translation cost of six hundred places. Revisit it when the six are done
and the module has users.

`el` and `en` are mandatory on every string. The other four may land later, per city.

Sources for the arrivals rankings:
[World Population Review](https://worldpopulationreview.com/country-rankings/most-visited-countries) ·
[CEOWORLD](https://ceoworld.biz/2025/09/16/revealed-most-visited-countries-in-the-world-2025/) ·
[Statista, top cities](https://www.statista.com/chart/35880/top-cities-for-international-visitors-in-2025/)
