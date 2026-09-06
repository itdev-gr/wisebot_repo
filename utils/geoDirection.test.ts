/** Bearing + compass words: a child must be told "↗ north-east", never a number of degrees. */
import { describe, it, expect } from 'vitest';
import { bearingDeg, compass, mapsLinks } from './geo';

const syntagma = { lat: 37.9755, lng: 23.7348 };

describe('bearing and compass', () => {
  it('points north, east, south, west from Syntagma', () => {
    expect(Math.round(bearingDeg(syntagma, { lat: 37.99, lng: 23.7348 }))).toBe(0);
    expect(Math.round(bearingDeg(syntagma, { lat: 37.9755, lng: 23.75 }))).toBe(90);
    expect(Math.round(bearingDeg(syntagma, { lat: 37.96, lng: 23.7348 }))).toBe(180);
    expect(Math.round(bearingDeg(syntagma, { lat: 37.9755, lng: 23.72 }))).toBe(270);
  });

  it('names the eight sectors in both languages, wrapping at north', () => {
    expect(compass(0, 'el')).toEqual({ arrow: '↑', label: 'βόρεια' });
    expect(compass(44, 'en').label).toBe('north-east');
    expect(compass(135, 'el').label).toBe('νοτιοανατολικά');
    expect(compass(225, 'en')).toEqual({ arrow: '↙', label: 'south-west' });
    expect(compass(359, 'el').label).toBe('βόρεια');
    expect(compass(-90, 'en').label).toBe('west');
  });

  it('builds a walking-directions link with six decimals', () => {
    const { google } = mapsLinks({ lat: 41.1458, lng: -8.6106 });
    expect(google).toContain('destination=41.145800,-8.610600');
    expect(google).toContain('travelmode=walking');
  });
});
