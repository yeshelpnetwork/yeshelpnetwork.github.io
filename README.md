### yeshelpnetwork — Youth Empowerment Platform

Minimal site built with Next.js (App Router), TypeScript, MUI, and Tailwind. Configured for static export and GitHub Pages.

## Quick start
- Node.js 20+
- Install: `npm install`
- Dev: `npm run dev`
- Build static export: `npm run build` → outputs to `out/`

## Structure
- `app/page.tsx`: homepage
- `app/layout.tsx`: global layout + metadata
- `app/theme/ThemeRegistry.tsx`: MUI theme and emotion cache
- `app/globals.css`: global CSS
- `tailwind.config.ts`: Tailwind setup
- `next.config.ts`: Next.js config (export for GitHub Pages)

## Assets
- Favicon: `app/icon.svg`
- Logo mark: `public/logo-mark.svg`
- Add brand image as `public/yeshelp-logo.jpg`

## Deploy
Static export is suitable for GitHub Pages. Configure your CI to build and publish `out/` (e.g., with a GitHub Actions workflow) and set Pages source to GitHub Actions.
