# Socialitea

Static landing site for **Socialitea**, a tea & coffee specialist cafe in Tanjung, Kalimantan Selatan (est. 2024).

## Pages

| Page | Description |
| --- | --- |
| `index.html` | Home: hero, stats, best sellers, about/location teasers, CTA |
| `menu.html` | Full menu with category filter chips and per-item WhatsApp order buttons |
| `about.html` | Story and values (ledger layout) |
| `location.html` | Address, opening hours, Google Maps embed |
| `privacy.html` | Privacy policy (ID) |
| `tos.html` | Terms & conditions (ID) |

## Tech

- Plain HTML + CSS + JS, no runtime framework
- [Tailwind CSS](https://tailwindcss.com) compiled to a static, minified `assets/css/tailwind.css` (see `tailwind.config.js`, content-scanned from `./*.html`); no CDN script at runtime
- [Google Fonts](https://fonts.google.com) (Playfair Display, Space Mono) with `display=swap`, inline `@font-face` + Latin subset preloads at build time
- Custom line-art SVG icon sprite: `assets/icons.svg`, referenced via `<use href="assets/icons.svg#...">`
- Shared styles/scripts: `assets/css/site.css`, `assets/js/site.js` (nav scroll state, mobile menu, scroll reveal, menu filter, image loading skeletons); JS is minified into `dist/` by the build
- Local WebP images in `assets/img/`; favicon, apple-touch-icon, and PWA icons included
- SEO: per-page canonical/OG/Twitter metadata, JSON-LD (`CafeOrCoffeeShop`), `robots.txt`, `sitemap.xml`

## Build

Production build (used by Vercel): inlines the compiled Tailwind CSS + `site.css` + Google Fonts `@font-face` into each page, minifies `site.js` (esbuild), preloads the used Latin font subsets, and outputs everything to `dist/`:

```sh
npm install
npm run build   # node scripts/build.mjs -> dist/
npm run css     # dev-only: tailwindcss -> assets/css/tailwind.css
```

## Run locally

```sh
python -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

Vercel (configured via `vercel.json`): `buildCommand: npm run build`, `outputDirectory: dist`. Also works on Netlify/GitHub Pages by serving the `dist/` folder produced by `npm run build`.

## Business info

- Address: Jl. A. Yani (Seberang SPBU Mabuun, Samping Queen Store Tanjung), Mabu'un, Kec. Murung Pudak, Kalimantan Selatan 71571
- WhatsApp: 0852-4711-3766 (wa.me/6285247113766)
- Instagram: @socialitea_id
- Hours: Mon-Fri 07.00-20.00 WITA, Sat 09.00-22.00 WITA, Sun closed