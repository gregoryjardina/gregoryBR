# PRD - Grego Infortech Portfolio (Bilingual)

## Architecture (Refactored Dec 2025)
- React + Tailwind CSS + Framer Motion (scroll reveal only)
- i18n: React Context + centralized translations (EN/PT-BR)
- 7 components: Navbar, Hero, About, Skills, Projects, Contact, Footer
- 2 i18n files: translations.js, context.js
- Fonts: Syne (headings 700), Manrope (body)
- Dark theme: #080808, accents #39FF14/#00F0FF

## i18n System
- `/src/i18n/translations.js` — all content EN + PT-BR
- `/src/i18n/context.js` — React Context, browser detection, localStorage
- Switcher: EN|PT toggle in navbar (desktop + mobile)
- Add new content: duplicate key in both lang objects

## Static Deploy (Cloudflare Pages)
- Build: `yarn build`
- Output: `build/`
- No backend required for the portfolio

## Backlog
- P1: Replace placeholder project images with real photos
- P1: Update LinkedIn/Instagram URLs
- P1: SEO meta tags + Open Graph
- P2: Static deploy to Cloudflare Pages
- P2: Contact form
