#!/usr/bin/env bash
# Turn a book's kid recordings into page audio + read-along word timings.
# ======================================================================
# Automates the process the README describes, which was done by hand for book 1
# on 23 Αυγούστου 2026. Steps: decode/compress with macOS afconvert, transcribe
# with OpenAI whisper-1 (Greek, word timestamps), align the transcript to the
# real page text with align.py, then drop both files into public/audio/ebooks/.
#
#   OPENAI_API_KEY=... ./scripts/narration/build-book-narration.sh 2
#
# Expects the recordings in ~/Desktop/wisebot-voices-kids/ named so that page N
# is matched by "*book*N*page*<n>*" (the DJI mic naming already is).
#
# Re-running is safe: every step overwrites its own output.
set -euo pipefail

BOOK="${1:?usage: build-book-narration.sh <bookId> [lang]}"
LANG_CODE="${2:-el}"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
SRC_DIR="${SRC_DIR:-$HOME/Desktop/wisebot-voices-kids}"
WORK="$(mktemp -d)"
OUT="$ROOT/public/audio/ebooks"

if [ -z "${OPENAI_API_KEY:-}" ]; then
  echo "OPENAI_API_KEY is not set — whisper cannot run." >&2
  echo "Set it for this command only:  OPENAI_API_KEY=sk-... $0 $BOOK" >&2
  exit 1
fi

mkdir -p "$OUT"
echo "Book $BOOK ($LANG_CODE) → $OUT"
echo "work: $WORK"

# ── page texts, exactly as the reader splits them ────────────────────────────
cat > "$WORK/extract.mjs" <<EOF
import { writeFileSync } from 'node:fs';
const mod = await import('$ROOT/data/bookData_$BOOK.ts');
const book = (mod.BOOK_$BOOK ?? Object.values(mod).find(Array.isArray))[0];
writeFileSync('$WORK/pages.json', JSON.stringify(book.pages.map(p => p.text.$LANG_CODE), null, 2));
EOF
(cd "$ROOT" && npx --yes vite-node "$WORK/extract.mjs")
PAGE_COUNT=$(node -e "console.log(require('$WORK/pages.json').length)")
echo "pages: $PAGE_COUNT"

SOURCES=""
for n in $(seq 1 "$PAGE_COUNT"); do
  # DJI names vary ("Book2 page 1", "Book 2 page 3"). Match on the basename with
  # the extension stripped — ".m4a" contains a 4, so globbing the whole filename
  # made every page-4 lookup match some other page's file.
  REC=""
  MULTI=0
  while IFS= read -r f; do
    stem="$(basename "$f")"; stem="${stem%.*}"
    if [[ "$stem" =~ (^|[^0-9])[Bb]ook[[:space:]_-]*${BOOK}([^0-9]|$) ]] \
       && [[ "$stem" =~ [Pp]age[[:space:]_-]*${n}([^0-9]|$) ]]; then
      if [ -z "$REC" ]; then REC="$f"; else MULTI=$((MULTI+1)); fi
    fi
  done < <(find "$SRC_DIR" -maxdepth 1 -type f \( -iname "*.m4a" -o -iname "*.wav" -o -iname "*.mp3" \) | sort)

  if [ -z "$REC" ]; then
    echo "  page $n: NO RECORDING FOUND in $SRC_DIR — skipped" >&2
    continue
  fi
  if [ "$MULTI" -gt 0 ]; then
    # Book 1 had pages recorded in two takes that align.py joins with an offset.
    # Doing that automatically needs the join point, so stop rather than silently
    # narrate half a page.
    echo "  page $n: $((MULTI+1)) takes found — join them by hand (see README) and re-run" >&2
    exit 1
  fi
  echo "  page $n: $(basename "$REC")"

  # decode to mono 48k WAV, then compress to the 48 kbps AAC the reader expects
  afconvert -f WAVE -d LEI16@48000 -c 1 "$REC" "$WORK/p$n.wav"
  afconvert -f m4af -d aac -b 48000 -q 127 -s 3 "$WORK/p$n.wav" "$OUT/book-$BOOK-page-$n-$LANG_CODE.m4a"

  # word-level transcript; send the compressed file (smaller upload, same words)
  curl -sS https://api.openai.com/v1/audio/transcriptions \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -F file=@"$OUT/book-$BOOK-page-$n-$LANG_CODE.m4a" \
    -F model=whisper-1 -F language="$LANG_CODE" \
    -F response_format=verbose_json \
    -F "timestamp_granularities[]=word" \
    -o "$WORK/page$n.json"

  if ! node -e "const d=require('$WORK/page$n.json'); if(!d.words?.length) process.exit(1)"; then
    echo "  page $n: whisper returned no words — check the key and the audio" >&2
    exit 1
  fi
  SOURCES="$SOURCES    $n: [(\"page$n\", 0)],
"
done

# ── align transcript → page text ─────────────────────────────────────────────
# align.py carries book 1's sources map at the bottom; write a copy whose map is
# this book's single-take pages.
python3 - "$WORK" "$BOOK" "$LANG_CODE" <<PY
import re, sys
work, book, lang = sys.argv[1], sys.argv[2], sys.argv[3]
src = open("$ROOT/scripts/narration/align.py").read()
new_map = """sources = {
$SOURCES}"""
src = re.sub(r"sources = \{.*?\n\}", new_map, src, count=1, flags=re.S)
# align.py hardcodes book 1's output name; point it at this book instead.
src = src.replace('f"{S}/book-1-page-{n}-el.json"', 'f"{S}/book-%s-page-{n}-%s.json"' % (book, lang))
open(work + "/align_book.py", "w").write(src)
PY

python3 "$WORK/align_book.py" "$WORK"

for n in $(seq 1 "$PAGE_COUNT"); do
  [ -f "$WORK/book-$BOOK-page-$n-$LANG_CODE.json" ] \
    && mv "$WORK/book-$BOOK-page-$n-$LANG_CODE.json" "$OUT/book-$BOOK-page-$n-$LANG_CODE.json"
done

echo
echo "Done. Files in $OUT:"
ls -lh "$OUT" | grep "book-$BOOK-" || true
echo "Open the book and press ΑΚΟΥΣΕ — the bar should read «🎙️ Διαβάζουν παιδιά»."
