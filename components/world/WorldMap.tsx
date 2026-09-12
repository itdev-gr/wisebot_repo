/**
 * WiseBot World — the real map.
 *
 * The illustrated SVG maps stay as artwork, but a family standing in a street needs
 * the map they already know how to read: streets, the river, the square they are on,
 * and a numbered pin for every place. This is that map — OpenStreetMap tiles under
 * Leaflet, the same pair the Explorer used, loaded lazily so a child who never opens
 * a city never downloads Leaflet.
 *
 * Two shapes, one component:
 *   - a city map: every place as a numbered pin, tap to open it, fitted to the city;
 *   - a place map: one pin, zoomed in, under the "how to get there" buttons.
 *
 * The map draws only what we already ship: our own Wikidata-resolved coordinates.
 * Nothing is read from the tiles, nothing is copied from them; OpenStreetMap is the
 * background a person looks at, credited as its licence asks.
 */

import React, { useEffect, useRef, useState } from 'react';
import type * as Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { LocText, WorldLang } from '../../data/world/types';
import { say, ui, type UiText } from './worldUi';

const OSM_TILES = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const OSM_ATTR =
  '&copy; <a href="https://www.openstreetmap.org/copyright" rel="noopener" target="_blank">OpenStreetMap</a>';
/** Name pills collide when a whole city is in view; show them from this zoom up. */
const LABEL_ZOOM = 15;

const T: { failed: UiText<string> } = {
  failed: {
    el: 'Ο χάρτης δεν φορτώθηκε. Τα κουμπιά από κάτω ανοίγουν τον χάρτη του τηλεφώνου.',
    en: 'The map did not load. The buttons below open your phone’s own map.',
    de: 'Die Karte wurde nicht geladen. Die Knöpfe unten öffnen die Karte deines Handys.',
    fr: 'La carte n’a pas chargé. Les boutons ci-dessous ouvrent la carte de ton téléphone.',
    es: 'El mapa no se cargó. Los botones de abajo abren el mapa de tu móvil.',
    it: 'La mappa non si è caricata. I pulsanti qui sotto aprono la mappa del telefono.',
  },
};

export interface WorldMapPin {
  id: string;
  name: LocText;
  emoji: string;
  lat: number;
  lng: number;
  /** 1-based number shown on the badge, matching the list below the map. */
  index?: number;
  stamped?: boolean;
}

interface WorldMapProps {
  lang: WorldLang;
  pins: WorldMapPin[];
  /** Where to look when there is nothing to fit, and the zoom to use for one pin. */
  centre: { lat: number; lng: number };
  zoom?: number;
  selectedId?: string | null;
  onSelect?: (id: string) => void;
  /** Tailwind height class for the map box. */
  className?: string;
}

const pinHtml = (pin: WorldMapPin, selected: boolean): string => {
  const badge =
    pin.index !== undefined
      ? `<span style="position:absolute;top:-7px;left:-7px;min-width:19px;height:19px;padding:0 4px;border-radius:9999px;background:#f59e0b;color:#000;font:900 11px/19px system-ui,sans-serif;text-align:center;border:2px solid #0B0F1A">${pin.index}</span>`
      : '';
  const bg = pin.stamped ? '#10b981' : 'rgba(15,23,42,0.92)';
  const border = selected ? '#fff' : pin.stamped ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.45)';
  return `<div style="position:relative;width:40px;height:40px;border-radius:9999px;display:flex;align-items:center;justify-content:center;font-size:19px;background:${bg};border:3px solid ${border};box-shadow:0 4px 14px rgba(0,0,0,0.45);transform:${selected ? 'scale(1.15)' : 'none'};transition:transform .15s">${pin.emoji}${badge}</div>`;
};

export const WorldMap: React.FC<WorldMapProps> = ({
  lang,
  pins,
  centre,
  zoom = 14,
  selectedId = null,
  onSelect,
  className = 'h-[52vw] max-h-[420px] min-h-[240px]',
}) => {
  const el = useRef<HTMLDivElement>(null);
  const mapRef = useRef<Leaflet.Map | null>(null);
  const LRef = useRef<typeof Leaflet | null>(null);
  const markers = useRef<Record<string, Leaflet.Marker>>({});
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  // One map per set of pins. Leaflet owns the DOM node from here on; React only
  // draws the frame around it.
  const pinsKey = pins.map((p) => p.id).join('|');
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const mod = await import('leaflet');
        const L = (mod.default ?? mod) as typeof Leaflet;
        if (!alive || !el.current) return;
        LRef.current = L;
        const map = L.map(el.current, {
          zoomControl: false,
          attributionControl: true,
          scrollWheelZoom: pins.length > 1,
        }).setView([centre.lat, centre.lng], zoom);
        L.control.zoom({ position: 'bottomright' }).addTo(map);
        map.createPane('wb-labels').style.zIndex = '590';
        L.tileLayer(OSM_TILES, { maxZoom: 19, attribution: OSM_ATTR }).addTo(map);
        mapRef.current = map;

        for (const pin of pins) {
          const mk = L.marker([pin.lat, pin.lng], {
            icon: L.divIcon({ className: '', html: '', iconSize: [40, 40], iconAnchor: [20, 20] }),
          }).addTo(map);
          if (onSelect) mk.on('click', () => onSelect(pin.id));
          mk.bindTooltip('', {
            permanent: true,
            direction: 'bottom',
            offset: [0, 18],
            className: 'wb-spot-label',
            interactive: true,
            pane: 'wb-labels',
          });
          markers.current[pin.id] = mk;
        }

        if (pins.length > 1) {
          const bounds = L.latLngBounds(pins.map((p) => [p.lat, p.lng] as [number, number]));
          map.fitBounds(bounds.pad(0.15), { maxZoom: zoom + 2 });
        } else if (pins.length === 1) {
          map.setView([pins[0].lat, pins[0].lng], Math.max(zoom, 16));
        }

        const labels = () => {
          const on = pins.length === 1 || map.getZoom() >= LABEL_ZOOM;
          for (const mk of Object.values(markers.current)) {
            if (on) mk.openTooltip();
            else mk.closeTooltip();
          }
        };
        map.on('zoomend', labels);
        labels();
        setReady(true);
      } catch {
        if (alive) setFailed(true);
      }
    })();
    return () => {
      alive = false;
      setReady(false);
      mapRef.current?.remove();
      mapRef.current = null;
      markers.current = {};
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- one map per pin set
  }, [pinsKey]);

  // Icons and names follow progress and language without rebuilding the map.
  useEffect(() => {
    const L = LRef.current;
    if (!ready || !L) return;
    for (const pin of pins) {
      const mk = markers.current[pin.id];
      if (!mk) continue;
      const selected = selectedId === pin.id;
      mk.setIcon(L.divIcon({ className: '', html: pinHtml(pin, selected), iconSize: [40, 40], iconAnchor: [20, 20] }));
      mk.setZIndexOffset(selected ? 1000 : pin.stamped ? 100 : 0);
      mk.setTooltipContent(say(pin.name, lang));
    }
  }, [ready, pins, selectedId, lang]);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04]">
      {/* The name pill under each pin. Scoped by class, injected once per map. */}
      <style>{`.wb-spot-label{background:rgba(15,23,42,.92);color:#fff;border:1px solid rgba(255,255,255,.18);border-radius:9999px;padding:2px 9px;font:900 11px/1.3 system-ui,sans-serif;letter-spacing:.02em;box-shadow:0 2px 8px rgba(0,0,0,.45);white-space:nowrap;max-width:170px;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.wb-spot-label::before{display:none}`}</style>
      {failed ? (
        <p className="p-6 text-center text-sm text-white/60">{ui(T.failed, lang)}</p>
      ) : (
        <div ref={el} className={`w-full ${className}`} role="region" aria-label="map" />
      )}
    </div>
  );
};

export default WorldMap;
