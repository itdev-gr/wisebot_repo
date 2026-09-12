#!/usr/bin/env python3
"""Retry only the places Overpass refused, and merge them into entrances.json."""
import json, math, os, time, urllib.parse, urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
OVERPASS = 'https://overpass-api.de/api/interpreter'


def dist_m(a, b):
    R = 6371000.0
    p1, p2 = math.radians(a[0]), math.radians(b[0])
    dp, dl = p2 - p1, math.radians(b[1] - a[1])
    h = math.sin(dp / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * R * math.asin(math.sqrt(h))


def query(q):
    data = urllib.parse.urlencode({'data': q}).encode()
    req = urllib.request.Request(OVERPASS, data=data,
                                 headers={'User-Agent': 'wisebot-world-audit/1.0'})
    for attempt in range(5):
        try:
            with urllib.request.urlopen(req, timeout=120) as r:
                return json.load(r)
        except Exception as e:  # noqa: BLE001
            if attempt == 4:
                raise
            wait = 20 * (attempt + 1)
            print(f'    ({e}; waiting {wait}s)', flush=True)
            time.sleep(wait)
    return {}


report = json.load(open(f'{HERE}/entrances.json'))
pending = [(c, r) for c, rows in report.items() for r in rows
           if any('error' in d for d in r['doors'])]
print(f'retrying {len(pending)} places\n')

for city, row in pending:
    kind, oid = row['osm'].split('/')
    if kind == 'way':
        q = f'[out:json][timeout:120];way({oid})->.f;node(w.f)[entrance];out;'
    elif kind == 'relation':
        q = f'[out:json][timeout:120];rel({oid})->.r;way(r.r)->.f;node(w.f)[entrance];out;'
    else:
        row['doors'] = []
        continue
    time.sleep(8)
    try:
        d = query(q)
    except Exception as e:  # noqa: BLE001
        print(f"{row['id']:<45} still failing: {e}")
        continue
    doors = []
    for e in d['elements']:
        doors.append({'id': e['id'], 'lat': e['lat'], 'lng': e['lon'],
                      'tags': e.get('tags', {}),
                      'deltaM': round(dist_m(tuple(row['pin']), (e['lat'], e['lon'])))})
    doors.sort(key=lambda x: x['deltaM'])
    row['doors'] = doors
    near = doors[0]['deltaM'] if doors else None
    kindtag = doors[0]['tags'].get('entrance') if doors else '--'
    print(f"{row['id']:<45} {row['anchor']:<9} {str(kindtag):<9} nearest door: {near} m", flush=True)

json.dump(report, open(f'{HERE}/entrances.json', 'w'), indent=1, ensure_ascii=False)
print('\nmerged into entrances.json')
