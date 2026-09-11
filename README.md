# Growers Ground Landing Page

Next.js (App Router) marketing site with **Sprout & Soil** design tokens.

**Live domain:** growersground.com  
**Instagram:** [@growers_ground_lp](https://instagram.com/growers_ground_lp)

## Stack

- **Next.js 15** (App Router, TypeScript)
- **React 19**
- CSS modules-free — global tokens in `src/app/globals.css`
- `next/font` (Inter)
- `next/image` for optimized photos

## Develop

```bash
cd growers_ground_lp
npm install
npm run dev
```

Open http://localhost:3000

## Build & deploy

```bash
npm run build
npm start
```

**Cloudflare Pages:** set build command `npm run build`, output directory `.next` (or use `@cloudflare/next-on-pages` if needed). For standard Node hosting, use Vercel or any Next.js-compatible platform.

## Images

Place assets in `public/images/`:

- `hero.jpg`
- `neighborhood.jpg`
- `hero-gardener.jpg`
- `pexels-natalia-sevruk-636238602-30371404.jpg`
- `pexels-helenalopes-27176056.jpg`

## Legacy static site

The original HTML/CSS/JS version is archived in `_legacy/` for reference.

## Waitlist

`WaitlistForm` stores emails in `localStorage` and opens a mailto fallback. Wire to Supabase or Resend when ready.
# growers_ground_lp
