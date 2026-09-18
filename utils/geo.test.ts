/**
 * The verdict a child gets after «Είμαι εδώ!».
 *
 * Two things are pinned. The gate did not move: `geoVerdict` says 'here' exactly when
 * `isWithin` did, so nothing that used to be «far» opens a question or a stamp now. And
 * the new 'close' is bounded on both sides: it needs a genuinely poor fix that could be
 * standing on the place, and a raw distance the child could still see across — a desktop
 * browser geolocating by IP, thousands of metres out with a twenty-kilometre error, is
 * «far», not «very close, look around».
 */
import { describe, expect, it } from 'vitest';
import { distanceM, geoVerdict, isWithin } from './geo';

const RADIUS = 60;
const AREA = 120;

describe('geoVerdict — the gate did not move', () => {
  it("says 'here' exactly when isWithin says so, across the whole grid", () => {
    const spot = { lat: 37.9715, lng: 23.7257 };
    for (const dLat of [0, 0.0002, 0.0004, 0.0006, 0.001, 0.002, 0.01]) {
      for (const accuracy of [0, 5, 12, 40, 41, 60, 150, 20000]) {
        for (const radius of [RADIUS, AREA]) {
          const here = { lat: spot.lat + dLat, lng: spot.lng };
          const d = distanceM(here, spot);
          const expected = isWithin(here, accuracy, spot, radius);
          expect(geoVerdict(d, accuracy, radius) === 'here', `d=${Math.round(d)} acc=${accuracy} r=${radius}`).toBe(expected);
        }
      }
    }
  });

  it('forgives at most 40 m of reported error for «here», as before', () => {
    expect(geoVerdict(100, 60, RADIUS)).toBe('here'); // 100 − 40 ≤ 60
    expect(geoVerdict(101, 60, RADIUS)).not.toBe('here'); // 101 − 40 > 60
    expect(geoVerdict(100, 10, RADIUS)).not.toBe('here'); // 100 − 10 > 60
  });
});

describe("geoVerdict — 'close' is a poor fix that could be on the place", () => {
  it('needs a reported error worse than the 40 m forgiveness', () => {
    expect(geoVerdict(120, 40, RADIUS)).toBe('far');
    expect(geoVerdict(120, 41, RADIUS)).toBe('far'); // 120 − 41 = 79 > 60
    expect(geoVerdict(120, 80, RADIUS)).toBe('close'); // 120 − 80 = 40 ≤ 60
  });

  it('needs the place to be inside the error circle', () => {
    expect(geoVerdict(150, 100, RADIUS)).toBe('close'); // 150 − 100 = 50 ≤ 60
    expect(geoVerdict(250, 100, RADIUS)).toBe('far'); // 250 − 100 = 150 > 60
    expect(geoVerdict(200, 200, RADIUS)).toBe('close'); // 0 ≤ 60, and 200 ≤ 210
  });

  it('is capped at radius + 150 m of raw distance, so a desktop IP fix is «far»', () => {
    expect(geoVerdict(5000, 20000, RADIUS)).toBe('far');
    expect(geoVerdict(210, 300, RADIUS)).toBe('close'); // exactly the cap
    expect(geoVerdict(211, 300, RADIUS)).toBe('far');
    expect(geoVerdict(270, 300, AREA)).toBe('close'); // area radius 120 + 150
    expect(geoVerdict(271, 300, AREA)).toBe('far');
  });

  it('treats a missing or negative accuracy as a perfect fix', () => {
    expect(geoVerdict(30, -5, RADIUS)).toBe('here');
    expect(geoVerdict(100, -5, RADIUS)).toBe('far');
    expect(geoVerdict(100, Number.NaN, RADIUS)).toBe('far');
  });
});
