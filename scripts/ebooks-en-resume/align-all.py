import json, re, unicodedata, difflib, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '..', '..'))
WORDS = os.path.join(HERE, 'work', 'words')
OUT = os.path.join(ROOT, 'public', 'audio', 'ebooks')
THRESHOLD = 85

def norm(w):
    w = unicodedata.normalize('NFD', w.lower())
    w = ''.join(c for c in w if unicodedata.category(c) != 'Mn')
    return re.sub(r'[^a-zα-ω0-9]', '', w)

texts = {}
for p in json.load(open(os.path.join(ROOT, 'scripts', 'ebooks-en-for-tts.json'))):
    texts[f"book-{p['bookId']}-page-{p['page']}-en"] = p['text']
for p in json.load(open(os.path.join(ROOT, 'scripts', 'ebooks-for-tts.json'))):
    if p['bookId'] >= 5:  # kids' books 1-4 are aligned by the narration pipeline, not here
        texts[f"book-{p['bookId']}-page-{p['page']}-el"] = p['text']

emitted, skipped, missing, pcts = 0, [], 0, []
for tag, text in sorted(texts.items()):
    wpath = os.path.join(WORDS, tag + '.json')
    apath = os.path.join(OUT, tag + '.m4a')
    if not os.path.exists(wpath) or not os.path.exists(apath):
        missing += 1; continue
    tokens = [t for t in re.split(r'\s+', text) if t]
    tn = [norm(t) for t in tokens]
    d = json.load(open(wpath))
    tw = [(x['word'], x['start'], x['end']) for x in d.get('words', [])]
    if not tw:
        missing += 1; continue
    wn = [norm(x[0]) for x in tw]
    sm = difflib.SequenceMatcher(a=tn, b=wn, autojunk=False)
    times = [None] * len(tokens); matched = 0
    for op, i1, i2, j1, j2 in sm.get_opcodes():
        if op == 'equal':
            for k in range(i2 - i1):
                times[i1 + k] = [tw[j1 + k][1], tw[j1 + k][2]]; matched += 1
        elif op == 'replace':
            s_, e_ = tw[j1][1], tw[j2 - 1][2]; cnt = i2 - i1
            for k in range(cnt):
                times[i1 + k] = [s_ + (e_ - s_) * k / cnt, s_ + (e_ - s_) * (k + 1) / cnt]
    pct = 100 * matched // len(tokens)
    if pct < THRESHOLD:
        skipped.append((tag, pct)); continue
    last = 0.0
    for i in range(len(tokens)):
        if times[i] is None:
            j = i
            while j < len(tokens) and times[j] is None: j += 1
            nxt = times[j][0] if j < len(tokens) else tw[-1][2]
            gap = j - i
            for k in range(gap):
                times[i + k] = [last + (nxt - last) * k / gap, last + (nxt - last) * (k + 1) / gap]
        last = times[i][1]
    for i in range(1, len(times)):
        if times[i][0] < times[i-1][1]: times[i][0] = times[i-1][1]
        if times[i][1] < times[i][0]: times[i][1] = times[i][0] + 0.05
    json.dump({'v': 1, 'words': [[round(s, 2), round(e, 2)] for s, e in times]},
              open(os.path.join(OUT, tag + '.json'), 'w'), separators=(',', ':'))
    emitted += 1; pcts.append(pct)

pcts.sort()
print(f'aligned: {emitted} | low-match skipped: {len(skipped)} | not ready: {missing}')
if pcts: print(f'match%: min {pcts[0]}, median {pcts[len(pcts)//2]}, max {pcts[-1]}')
for t, p in skipped: print(f'  SKIP {t}: {p}%')
