#!/usr/bin/env python3
"""Measure the real doors.

For every place in data/world/coords/*.json that carries an OSM reference, ask
Overpass for the entrance nodes that belong to that feature, and report how far
each door is from the coordinate the app currently ships.

Reads only. Writes a JSON report into the scratchpad.
"""
import json, math, time, urllib.parse, urllib.request, sys, os

REPO = os.path.expanduser('~/Projects/wisebot')
OUT = os.path.dirname(os.path.abspath(__file__))
OVERPASS = 'https://overpass-api.de/api/interpreter'


def dist_m(a, b):
    R = 6371000.0
    p1, p2 = math.radians(a[0]), math.radians(b[0])
    dp = p2 - p1
    dl = math.radians(b[1] - a[1])
    h = math.sin(dp / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * R * math.asin(math.sqrt(h))


def query(q):
    data = urllib.parse.urlencode({'data': q}).encode()
    req = urllib.request.Request(OVERPASS, data=data, headers={'User-Agent': 'wisebot-world-audit/1.0'})
    with urllib.request.urlopen(req, timeout=90) as r:
        return json.load(r)


def entrances_for(kind, oid):
    """Entrance nodes belonging to a way or relation, plus any within 60 m of it."""
    if kind == 'way':
        q = f'[out:json][timeout:60];way({oid})->.f;node(w.f)[entrance];out;'
    elif kind == 'relation':
        q = f'[out:json][timeout:60];rel({oid})->.r;way(r.r)->.f;node(w.f)[entrance];out;'
    else:  # a bare node has no door of its own
        return []
    try:
        d = query(q)
    except Exception as e:  # noqa: BLE001 - report, never crash the pass
        return [{'error': str(e)}]
    return [{'id': e['id'], 'lat': e['lat'], 'lng': e['lon'], 'tags': e.get('tags', {})} for e in d['elements']]


report = {}
for city in ('athens', 'porto', 'thessaloniki', 'heraklion'):
    path = f'{REPO}/data/world/coords/{city}.json'
    places = json.load(open(path))['places']
    rows = []
    for p in places:
        osm = next((s for s in p['sources'] if s['kind'] == 'osm'), None)
        row = {'id': p['id'], 'name': p['name'], 'anchor': p['anchor'],
               'confidence': p['confidence'], 'pin': [p['lat'], p['lng']],
               'osm': osm['ref'] if osm else None, 'doors': []}
        if osm:
            kind, oid = osm['ref'].split('/')
            time.sleep(2.5)
            for d in entrances_for(kind, oid):
                if 'error' in d:
                    row['doors'].append(d)
                    continue
                d['deltaM'] = round(dist_m((p['lat'], p['lng']), (d['lat'], d['lng'])))
                row['doors'].append(d)
            row['doors'].sort(key=lambda d: d.get('deltaM', 9999))
        rows.append(row)
        main = [d for d in row['doors'] if d.get('tags', {}).get('entrance') == 'main']
        flag = 'MAIN' if main else ('any' if row['doors'] else '--')
        near = row['doors'][0].get('deltaM') if row['doors'] else None
        print(f"{p['id']:<45} {p['anchor']:<9} {flag:<5} nearest door: {near} m", flush=True)
    report[city] = rows

json.dump(report, open(f'{OUT}/entrances.json', 'w'), indent=1, ensure_ascii=False)
print('\nwrote', f'{OUT}/entrances.json')
