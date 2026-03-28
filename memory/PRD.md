# PRD - Grego Infortech Portfolio

## Problem Statement
Portfolio/landing page minimalista para "Grego Infortech" - consultoria de infraestrutura tecnológica.

## Architecture (Refactored Dec 2025)
- Frontend: React + Tailwind CSS + Framer Motion (minimal usage)
- 5 seções: Hero, About, Skills, Projects, Contact + Footer
- 7 componentes totais (Navbar, Hero, About, Skills, Projects, Contact, Footer)
- Fonts: Syne (headings, weight 700 max), Manrope (body)
- Dark theme: #080808 bg, #39FF14 green accent, #00F0FF blue accent

## What's Been Implemented
- [x] Navbar simples com scroll suave + menu mobile
- [x] Hero section — tipografia limpa, line-height 1.15
- [x] About section — Visão + Abordagem mesclados em 2 colunas
- [x] Skills section — 4 cards 2x2 grid
- [x] Projects section — 4 cards 2x2 com imagens placeholder
- [x] Contact section — LinkedIn + Instagram CTAs
- [x] Footer minimalista
- [x] Responsividade: mobile 375px, tablet, desktop, zoom 80%
- [x] Tipografia otimizada: line-height 1.2-1.6, letter-spacing, max-width
- [x] Removed: noise overlay, complex hover states, excessive glow effects, 6 old components

## Backlog
- P1: Substituir imagens placeholder por fotos reais
- P1: Atualizar URLs reais LinkedIn/Instagram
- P1: SEO meta tags + Open Graph
- P2: Static export para Cloudflare Pages/Vercel
- P2: Formulário de contato funcional
