# World pipelines

Four scripts, two chains. Neither is run by the content session: both operate on
content that already exists, and both are owned by the engine side.

## Coordinates — run this BEFORE writing a city

```bash
node scripts/world/resolve-coords.mjs athens
```

Reads `scripts/world/seeds/<city>.json`, writes `data/world/coords/<city>.json`.

Takes the stored point from **Wikidata**, which is CC0 and therefore free to ship, and
checks it against **OpenStreetMap** (ODbL) and **Wikipedia** (CC BY-SA). Only the
distance from those two is recorded, never their coordinates, so no share-alike
obligation follows the data into the bundle.

Grades A to D. A lone outlier is tolerated when two sources agree tightly, because a
polygon centre is not a wrong pin. Nothing graded D ships — that means the sources
disagree about where the place actually is, and it has caught real errors: a museum
that had moved, and a hill pinned at its centroid instead of its viewpoint.

Two distinct places closer than 25 m fail the audit unless the seed's `adjacentPairs`
declares them genuine neighbours. `data/world/world.test.ts` re-checks this at test
time, so it cannot be bypassed by editing the JSON.

## Narration — run this AFTER a city's content is written

```bash
npx vite-node scripts/world/extract-texts.mjs        # what needs a voice
node scripts/world/generate-narration.mjs --city athens --kind story
node scripts/world/transcribe-narration.mjs --city athens
python3 scripts/world/align-narration.py
node scripts/world/build-narration-manifest.mjs
```

**The voice is not a choice.** Gemini `gemini-2.5-flash-preview-tts`, prebuilt voice
`Kore`, the text sent exactly as written with no style instruction, raw PCM at 24 kHz
mono encoded to AAC at 48 kbps. That is the same recipe as
`scripts/ebooks-en-resume/gen-all.mjs` and the Academy generator, because the owner's
decision of 30 Αυγούστου 2026 was one voice everywhere in the app. Change any of those
four lines and a child can hear that the Explorer is narrated by somebody else.

The children's own recordings belong to Greek ebooks 1-4 and nothing here touches them.

Read-along comes from transcribing what the voice actually said, not from the script we
sent it, because the timings have to describe the real pauses. Whisper gives word
timestamps, `align-narration.py` diffs them against the source text and interpolates
the gaps, and anything matching below 85% is refused rather than shipped: a read-along
that highlights the wrong word is worse than none.

Every stage is resumable. Gemini's free tier allows roughly a hundred generations a
day, so a run that stops on quota is expected — run it again tomorrow and it picks up
where it left off.

### Size

Athens alone is 88 clips: 36 place stories plus 52 museum exhibits, about 54 minutes of
speech across Greek and English. Multiply by 45 cities and by however many of the six
languages get translated, and the daily quota, not the writing, becomes the schedule.
Generate stories first; exhibits can follow a city at a time.
