#!/bin/bash
# Autonomous ebook narrator — bilingual. Scheduled via launchd
# (gr.wisebot.ebooks-en, daily 10:10 / 12:10 / 16:10). Each run:
#   generate missing narrations (EN all books · EL books 5-34 only — books
#   1-4 are the children's and are never touched) → whisper what's new →
#   align → ship every COMPLETE book → push. Gemini's ~100/day quota means
#   this finishes over a few days; when nothing is missing it retires itself.
set -u
export PATH="$HOME/.local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
HERE="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(cd "$HERE/../.." && pwd)"
LOG="$HERE/auto-resume.log"
exec >> "$LOG" 2>&1
echo "=== run $(date '+%F %T') ==="

cd "$ROOT" || exit 1

# 1. Generate whatever is still missing (resumable; stops on quota).
node "$HERE/gen-all.mjs"

# 2. Transcribe new pages (8-way, resumable; language from the filename).
KEY=$(grep '^OPENAI_API_KEY=' "$ROOT/.env.vercel" | head -1 | sed 's/^OPENAI_API_KEY=//; s/^"//; s/"$//; s/\\n$//' | tr -d '\r\n ')
mkdir -p "$HERE/work/words"
jobs_running() { jobs -rp | wc -l | tr -d ' '; }
for f in "$ROOT"/public/audio/ebooks/book-*-e[nl].m4a; do
  base=$(basename "$f" .m4a)
  case "$base" in book-[1-4]-page-*-el) continue;; esac  # kids' narrations: not ours to align
  lang=${base##*-}
  outf="$HERE/work/words/$base.json"
  [ -s "$outf" ] && continue
  while [ "$(jobs_running)" -ge 8 ]; do sleep 1; done
  (
    curl -sS https://api.openai.com/v1/audio/transcriptions \
      -H "Authorization: Bearer $KEY" \
      -F file=@"$f" -F model=whisper-1 -F language="$lang" \
      -F response_format=verbose_json -F "timestamp_granularities[]=word" \
      -o "$outf.tmp" && python3 -c "import json,sys; d=json.load(open('$outf.tmp')); sys.exit(0 if d.get('words') else 1)" 2>/dev/null && mv "$outf.tmp" "$outf" || rm -f "$outf.tmp"
  ) &
done
wait

# 3. Align everything that has audio + transcript (≥85% match emits timings).
python3 "$HERE/align-all.py"

# 4. Any narration whose alignment failed the threshold got no .json —
#    delete the audio so the next slot regenerates it fresh.
node -e "
const fs = require('fs');
const targets = [];
for (const p of require('$ROOT/scripts/ebooks-en-for-tts.json')) targets.push('book-' + p.bookId + '-page-' + p.page + '-en');
for (const p of require('$ROOT/scripts/ebooks-for-tts.json')) if (p.bookId >= 5) targets.push('book-' + p.bookId + '-page-' + p.page + '-el');
for (const tag of targets) {
  const b = '$ROOT/public/audio/ebooks/' + tag;
  if (fs.existsSync(b + '.m4a') && !fs.existsSync(b + '.json')) {
    fs.unlinkSync(b + '.m4a');
    try { fs.unlinkSync('$HERE/work/words/' + tag + '.json'); } catch {}
    console.log('regen queued:', tag);
  }
}"

# 5. Ship every book whose covered pages are ALL present (audio + timings).
#    EN: all 34 books. EL: books 5-34.
node -e "
const fs = require('fs');
const { execSync } = require('child_process');
const ok = (tag) => fs.existsSync('$ROOT/public/audio/ebooks/' + tag + '.m4a') && fs.existsSync('$ROOT/public/audio/ebooks/' + tag + '.json');
const ship = [];
for (const [lang, minBook] of [['en', 1], ['el', 5]]) {
  for (let b = minBook; b <= 34; b++) {
    const tags = [1, 2, 3, 4, 5].map(p => 'book-' + b + '-page-' + p + '-' + lang);
    if (tags.every(ok)) ship.push(...tags);
  }
}
for (const t of ship) execSync('git add public/audio/ebooks/' + t + '.m4a public/audio/ebooks/' + t + '.json', { cwd: '$ROOT' });
console.log('stage candidates:', ship.length, 'files');
"
if git diff --cached --quiet; then
  echo "nothing new to ship"
else
  git commit -m "feat(ebooks): narration batch from the scheduled pipeline

Generated unattended (Kore, whisper-aligned, complete books only).
Greek covers books 5-34 — books 1-4 stay with the children's own
recordings, which replace these files whenever a new one is recorded.

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>" && git push origin main && echo "PUSHED ✓"
fi

# 6. Retire once every target page is live-ready.
REMAIN=$(node -e "
const fs = require('fs');
let n = 0;
for (const p of require('$ROOT/scripts/ebooks-en-for-tts.json')) if (!fs.existsSync('$ROOT/public/audio/ebooks/book-' + p.bookId + '-page-' + p.page + '-en.json')) n++;
for (const p of require('$ROOT/scripts/ebooks-for-tts.json')) if (p.bookId >= 5 && !fs.existsSync('$ROOT/public/audio/ebooks/book-' + p.bookId + '-page-' + p.page + '-el.json')) n++;
console.log(n);")
echo "pages remaining: $REMAIN"
if [ "$REMAIN" = "0" ]; then
  touch "$HERE/DONE"
  launchctl bootout "gui/$(id -u)/gr.wisebot.ebooks-en" 2>/dev/null || true
  echo "COMPLETE — schedule retired"
fi
