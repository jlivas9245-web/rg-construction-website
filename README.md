# RG Construction — Website

A modern, fast, SEO-optimized website for **RG Construction**, a licensed &
insured general contractor serving East Texas (Longview, Tyler, Kilgore,
Marshall and surrounding areas).

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and
**lucide-react** icons. Mobile-first, responsive, with **dark & light mode**.

## Features

- ⚡ Next.js 15 App Router with React Server Components
- 🎨 Premium, construction-industry design with strong typography (Oswald + Inter)
- 🌗 Dark & light mode (system-aware, via `next-themes`)
- 📱 Mobile-first responsive layout + **sticky mobile call button**
- 🔍 SEO optimized — per-page metadata, Open Graph, Twitter cards, JSON-LD
  `GeneralContractor` schema, dynamic `sitemap.xml` and `robots.txt`
- 🧱 Pages: Home, Services, Residential, Commercial, About, Contact, Blog
- 📝 **Quote / free-estimate form** and **contact form** with success states
- ❓ FAQ accordion, ⭐ Google review section, 🗺️ service-area map embed
- ✍️ Blog structure ready for future SEO articles (`src/lib/blog.ts`)

## Project Structure

```
src/
  app/                 # App Router pages, layout, sitemap, robots, OG image
    services/ residential/ commercial/ about/ contact/ blog/
  components/          # UI + section components (Header, Hero, LeadForm, …)
  lib/
    site.ts            # ← Company details, services, nav (single source of truth)
    content.ts         # Testimonials, FAQs, projects, reviews
    blog.ts            # Blog posts (add new articles here)
    seo.ts             # Metadata builder
public/                # favicon + static assets
```

## Branding / Logo

The RG Construction logo is delivered as scalable vector art so it stays sharp
at any size and adapts to light/dark themes:

- **`src/components/Logo.tsx`** — the live navbar/footer logo (inline SVG, uses
  the site's Oswald font and inverts for dark surfaces).
- **`public/logo.svg`** — standalone full-lockup brand asset (for social,
  email signatures, print).
- **`public/favicon.svg`** — browser/tab icon.
- **`src/app/opengraph-image.tsx`** — branded social share image.

To use a raster version of the logo instead, drop your file in `public/`
(e.g. `public/logo.png`) and swap the `<LogoMark />` usage in
`src/components/Logo.tsx` for `<img src="/logo.png" />`.

## Customizing

Most business details live in **`src/lib/site.ts`** — update the placeholder
phone number, email, address and social links there and they propagate across
the entire site (header, footer, contact page, schema, etc.).

Before deploying, set your production domain in `src/lib/site.ts` (`site.url`).

The lead/quote form (`src/components/LeadForm.tsx`) currently simulates
submission. Connect it to an email service (e.g. Resend), an API route, or a
CRM where indicated in the file.

## Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:3000)
npm run dev
```

Other scripts:

```bash
npm run build   # Production build
npm run start   # Run the production build locally
npm run lint    # Lint
```

## Deploy to Vercel

The easiest path is the Vercel CLI:

```bash
# 1. Install the Vercel CLI (once)
npm i -g vercel

# 2. From the project root, deploy a preview
vercel

# 3. Deploy to production
vercel --prod
```

Or via the dashboard:

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Go to https://vercel.com/new and **import** the repository.
3. Vercel auto-detects Next.js — no build config needed.
4. (Optional) Add an `NEXT_PUBLIC_SITE_URL` environment variable.
5. Click **Deploy**.

After deployment, point your custom domain at the Vercel project and update
`site.url` in `src/lib/site.ts` to match.
