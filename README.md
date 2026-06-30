# Ahsan Ghafoor — Portfolio

Personal portfolio for Ahsan Ghafoor, a full-stack software engineer. Built with
Vite + React + TypeScript, animated with GSAP (ScrollTrigger), Lenis smooth
scroll, and a small react-three-fiber accent in the hero.

## Stack

- **Vite + React 18 + TypeScript**
- **GSAP + ScrollTrigger** — fade/slide reveals, magnetic buttons, card tilt
- **Lenis** — smooth scrolling
- **react-three-fiber + drei** — one lightweight 3D hero accent (desktop only,
  loaded on idle so mobile never downloads it)
- **Tailwind** (utilities) + a custom CSS design system in `src/index.css`
- **sonner** — contact-form toasts

## Content

All copy lives in [`src/data/portfolio-data.ts`](src/data/portfolio-data.ts) —
edit that one file to update the hero, toolkit, projects, experience, education,
and links. The portrait is `public/images/portrait.webp`; the résumé is
`public/resume.pdf`.

## Develop

```bash
npm install
npm run dev      # http://localhost:8080
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Sections

`src/components/portfolio/`: Nav, Hero, Marquee, Toolkit, About, Work,
Experience, Contact, Footer. Animation/interaction logic is in `src/hooks/`
(`useSmoothScroll`, `useScrollReveal`, `useInteractions`).

## Accessibility & performance

- Respects `prefers-reduced-motion` (reveals show instantly, smooth scroll and
  pointer effects disabled).
- Reveals are armed only when JS is present, so the page is never stuck invisible
  without JavaScript.
- The 3D chunk is code-split and gated to capable desktops.

## Deploy

Configured for Netlify (`netlify.toml`): `npm run build`, publish `dist/`, SPA
redirect to `index.html`.
