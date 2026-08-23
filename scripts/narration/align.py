import json, re, unicodedata, difflib, sys
S = sys.argv[1]
pages = json.load(open(f"{S}/pages.json"))

def norm(w):
    w = unicodedata.normalize("NFD", w.lower())
    w = "".join(c for c in w if unicodedata.category(c) != "Mn")
    w = re.sub(r"[^a-zα-ω0-9]", "", w)
    return w

def load(parts):
    words = []
    for fname, offset in parts:
        d = json.load(open(f"{S}/{fname}.json"))
        for w in d["words"]:
            words.append((w["word"], w["start"] + offset, w["end"] + offset))
    return words

sources = {
    1: [("page1", 0)],
    2: [("page2", 0), ("page2_2", 33.621333)],
    3: [("page3", 0), ("page3_2", 94.378667)],
    4: [("page4", 0)],
    5: [("page5", 0)],
}
for n, parts in sources.items():
    text = pages[n - 1]
    tokens = [t for t in re.split(r"\s+", text) if t]
    tn = [norm(t) for t in tokens]
    tw = load(parts)
    wn = [norm(w[0]) for w in tw]
    sm = difflib.SequenceMatcher(a=tn, b=wn, autojunk=False)
    times = [None] * len(tokens)
    matched = 0
    for tag, i1, i2, j1, j2 in sm.get_opcodes():
        if tag == "equal":
            for k in range(i2 - i1):
                times[i1 + k] = [tw[j1 + k][1], tw[j1 + k][2]]
                matched += 1
        elif tag == "replace":
            # spread the transcript span evenly across the page tokens
            s, e = tw[j1][1], tw[j2 - 1][2]
            cnt = i2 - i1
            for k in range(cnt):
                times[i1 + k] = [s + (e - s) * k / cnt, s + (e - s) * (k + 1) / cnt]
    # tokens with no transcript counterpart (deleted): interpolate between neighbours
    last_end = 0.0
    for i in range(len(tokens)):
        if times[i] is None:
            j = i
            while j < len(tokens) and times[j] is None: j += 1
            nxt = times[j][0] if j < len(tokens) else tw[-1][2]
            gap = j - i
            for k in range(gap):
                times[i + k] = [last_end + (nxt - last_end) * k / gap, last_end + (nxt - last_end) * (k + 1) / gap]
        last_end = times[i][1]
    # monotonic + rounding
    for i in range(1, len(times)):
        if times[i][0] < times[i-1][1]: times[i][0] = times[i-1][1]
        if times[i][1] < times[i][0]: times[i][1] = times[i][0] + 0.05
    out = {"v": 1, "words": [[round(s, 2), round(e, 2)] for s, e in times]}
    json.dump(out, open(f"{S}/book-1-page-{n}-el.json", "w"), separators=(",", ":"))
    print(f"page {n}: {len(tokens)} tokens, {len(tw)} spoken, exact matches {matched} ({100*matched//len(tokens)}%), duration {tw[-1][2]:.1f}s")
