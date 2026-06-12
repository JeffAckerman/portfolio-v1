# Jeffrey William — Portfolio

Dark, editorial, motion-rich portfolio for a Full Stack Applied AI Engineer.
Built with React 18, Vite, Framer Motion, and simple-icons (brand icons for
the tech marquee and skills grid).

## Commands

```bash
npm install      # install dependencies
npm run dev      # local dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # serve the production build locally
node scripts/shoot.mjs  # smoke-test: renders the built site in headless Chrome,
                        # checks for console errors, screenshots each section to /tmp
```

## Structure

- `src/data.js` — **all site copy lives here** (stats, capabilities, projects, tech stack, certifications, contact links). Edit this file to update content; components are presentation-only.
- `src/components/` — one component per section, plus shared primitives (`Reveal` scroll-reveals, `Magnetic` buttons, `Cursor`, `ParticleField`).
- `src/global.css` — design tokens (`:root` variables) and all styling. Accent color, fonts, and spacing are controlled from the top of this file.
- `public/Jeffrey-William-Resume.pdf` — hosted copy of the resume. The hero "Download Resume" button currently points to `#` (see the TODO in `src/components/Hero.jsx`) — point it back at this file or a hosted URL before launch.
- Light/dark mode: theme variables live at the top of `src/global.css` (`:root` for dark, `[data-theme='light']` for light). Preference persists in `localStorage`.

## Notes

- Fonts load from Fontshare (Clash Display, Satoshi) and Google Fonts (JetBrains Mono).
- Custom cursor and particle interactions are disabled automatically on touch devices; all animation respects `prefers-reduced-motion`.
- SEO: meta/OG tags and JSON-LD Person schema live in `index.html`.

## Deploy

Static output — deploy `dist/` to Vercel, Netlify, Cloudflare Pages, or GitHub Pages.
