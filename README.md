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

- Plain HTML + CSS + JS, no build step
- [Tailwind CSS CDN](https://cdn.tailwindcss.com) with an inline `tailwind.config` (brutalist design tokens: Playfair Display + Space Mono, radius 0, offset shadows, `#0001bb` primary)
- [Google Fonts](https://fonts.google.com) (Playfair Display, Space Mono)
- Custom line-art SVG icon sprite: `assets/icons.svg`, referenced via `<use href="assets/icons.svg#...">`
- Shared styles/scripts: `assets/css/site.css`, `assets/js/site.js` (nav scroll state, mobile menu, scroll reveal, menu filter, image loading skeletons)
- Favicon: `favicon.ico`

## Run locally

```sh
python -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

Static site, works with Vercel/Netlify/GitHub Pages as-is (no build command, output = repo root). Point the domain root at `index.html`; the repo is configured for Vercel (`.gitignore` includes `.vercel/`).

## Business info

- Address: Jl. A. Yani (Seberang SPBU Mabuun, Samping Queen Store Tanjung), Mabu'un, Kec. Murung Pudak, Kalimantan Selatan 71571
- WhatsApp: 0852-4711-3766 (wa.me/6285247113766)
- Instagram: @socialitea_id
- Hours: Mon-Fri 07.00-20.00 WITA, Sat 09.00-22.00 WITA, Sun closed