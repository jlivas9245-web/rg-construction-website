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

The official RG Construction logo art is used across the site:

- **`public/logo.png`** — official logo (transparent background, trimmed).
  Rendered in the navbar/footer via `src/components/Logo.tsx`, which shows it
  full-color on light surfaces and as a clean white silhouette on dark
  surfaces (dark mode + footer).
- **`public/favicon.svg`** — browser/tab icon (blue RG mark).
- **`src/app/opengraph-image.tsx`** — branded social share image.

The site's color system complements the logo: a royal-blue **`brand`** palette
(in `tailwind.config.ts`) with a warm gold **`accent`** reserved for star
ratings. To restyle the whole site, edit those two scales in one place.

## Customizing

Most business details live in **`src/lib/site.ts`** — update the placeholder
phone number, email, address and social links there and they propagate across
the entire site (header, footer, contact page, schema, etc.).

Before deploying, set your production domain in `src/lib/site.ts` (`site.url`).

## Estimate & Contact Forms (Resend email)

Both forms (`src/components/LeadForm.tsx`) POST to the API route
`src/app/api/estimate/route.ts`, which emails each submission to your inbox
via [Resend](https://resend.com). Submissions are delivered to
**rgconstructionserv@gmail.com** with the customer's address set as
`reply-to`, so you can reply to leads straight from your inbox. A hidden
honeypot field blocks basic spam bots.

**Setup (one time):**

1. Create a free account at [resend.com](https://resend.com).
2. **Verify a sending domain** at https://resend.com/domains (add the DNS
   records Resend gives you). This lets you send from an address like
   `estimates@yourdomain.com`. *(For a quick test you can skip this and send
   from `onboarding@resend.dev`.)*
3. Create an API key at https://resend.com/api-keys.
4. Set these environment variables (locally in `.env.local`, and in your
   Vercel project settings for production):

   ```bash
   RESEND_API_KEY=re_your_key_here
   ESTIMATE_TO_EMAIL=rgconstructionserv@gmail.com
   RESEND_FROM_EMAIL=RG Construction <estimates@yourdomain.com>
   ```

   `ESTIMATE_TO_EMAIL` defaults to `rgconstructionserv@gmail.com` if unset.
   `RESEND_FROM_EMAIL` **must** be an address on a domain you've verified in
   Resend (or `onboarding@resend.dev` for testing).

See `.env.example` for a template.

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
