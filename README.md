# yeshelpnetwork — Youth Empowerment Platform (Starter)

A minimal Next.js + Tailwind CSS site configured for static export and GitHub Pages deployment.

## Tech
- Next.js (App Router), React, TypeScript
- Tailwind CSS
- GitHub Actions → GitHub Pages (static export)

## Assets

- Favicon and default SVG icon live at `app/icon.svg`.
- Reusable vector mark is at `public/logo-mark.svg`.
- Company bitmap logo should be added as `public/yeshelp-logo.jpg` (JPEG). You can replace this file with an updated export anytime.

## Local development
1. Install Node.js 20+
2. Install dependencies: `npm install`
3. Run dev server: `npm run dev`
4. Build static site: `npm run build` (outputs to `out/`)

## Deployment
The GitHub Actions workflow (`.github/workflows/deploy.yml`) builds the site and deploys the `out/` directory to GitHub Pages. Ensure repository Pages settings use “GitHub Actions” as the source.

## Customize
- Edit homepage at `app/page.tsx`
- Global styles in `app/globals.css`
- Tailwind config in `tailwind.config.ts`
- Site config in `next.config.ts` and metadata in `app/layout.tsx`
