/**
 * WiseBot World — the page's name, once React is in charge.
 *
 * `App.tsx` mounts the generic `<SEO page="world">` above the whole module, which is
 * right for `/world` and wrong for `/world/greece/athens/athens-acropolis`: Googlebot
 * renders JavaScript, so without this the every-city title would replace the one the
 * prerender wrote. Helmet lets the innermost component win, so mounting this inside a
 * country, city or place page overrides the generic tags for exactly that page.
 *
 * The words come from `data/world/seo.ts`, the same functions the build-time prerender
 * uses, so the static HTML and the hydrated page always carry the same title.
 *
 * Usage, in the page components:
 *
 *   <WorldSeo meta={cityMeta(country, city, module, seoLang(lang))} />
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import type { PageMeta } from '../../data/world/seo';
import { BASE_URL } from '../../data/world/seo';

export const WorldSeo: React.FC<{ meta: PageMeta }> = ({ meta }) => {
  const url = `${BASE_URL}${meta.path}`;
  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={meta.ogTitle} />
      <meta property="og:description" content={meta.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.ogTitle} />
      <meta name="twitter:description" content={meta.description} />
      {meta.jsonLd.map((ld, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(ld)}
        </script>
      ))}
    </Helmet>
  );
};

export default WorldSeo;
