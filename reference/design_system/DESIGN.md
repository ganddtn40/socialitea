# Socialitea Web Architecture & Design System
## 1. Project Constraints
- **NO AI SLOP**: Every padding, margin, and typography choice must be deliberate, symmetrical, and premium. No generic placeholder jargon.
- **NO COMPLEX JS**: Do not write custom WebGL, Three.js, or complex React/JS logic for 3D. 
- **MULTI-PAGE**: The project MUST contain 4 fully built pages interconnected with each other: Home (`index.html`), About (`about.html`), Menu (`menu.html`), and Location (`location.html`).
## 2. True 3D Implementation (Zero JS Logic)
To achieve high-end 3D without JavaScript logic, you MUST use the Spline Web Component via CDN. 
- Include this in the `<head>` of every page: `<script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.9/build/spline-viewer.js"></script>`
- Use this tag for the 3D element: `<spline-viewer url="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"></spline-viewer>` (This is a premium dark-themed 3D glass/fluid placeholder that fits the vibe perfectly).
## 3. Strict Color System (NO YELLOW ALLOWED)
- **Background**: Deep Moody Cobalt Blue (`bg-[#1a2c5a]`).
- **Text & Accents**: Crisp White (`text-white`) and Ice Blue (`#e0f7fa`) for subtle glows or hover states.
- **Glassmorphism**: `bg-white/10 backdrop-blur-md border border-white/20`.
## 4. Page Routing & Structure
All pages must share the same Glassmorphic Navbar and Footer.
1. **Home (`index.html`)**: Hero section with the Spline 3D viewer taking up 50% of the screen. Big elegant Serif typography for "Socialitea". Glassmorphic stats bar.
2. **About (`about.html`)**: Focus on the aesthetic vibe, clean typography, 2-column layout (text on left, glassmorphic image cards on right).
3. **Menu (`menu.html`)**: CSS Grid layout for menu items. Clean glassmorphic cards for "Signature Tea" and "Coffee". No complex JS cart systems.
4. **Location (`location.html`)**: Display opening hours and a clean, stylized CSS-only map placeholder or address block.