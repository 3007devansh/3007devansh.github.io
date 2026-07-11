# Dekson ITI — Official Website

Admission website for **Dekson Private Industrial Training Institute, Babhulgaon,
Akola** — a DGT/NCVT-approved ITI managed by Shri Akola Gujarati Samaj Trust.

Built with **Astro + Tailwind CSS**. The output is a fully static site (plain
HTML/CSS/JS), so it hosts for free on any static host — only the domain costs
money. The Astro project lives at the **repo root** for easy one-click deploys.

---

## Directory structure

```
Deksons/                     ← repo root = the deployable Astro site
├─ src/
│  ├─ pages/                 one file per page (index, courses, admissions, …)
│  ├─ layouts/Base.astro     header, footer, nav, sticky call bar, lightbox
│  ├─ components/            Picture, Carousel, Lightbox, Icon, Seo, Fact
│  ├─ content/courses/       the 4 courses, one Markdown file each
│  ├─ config/site.ts         ⭐ SINGLE SOURCE OF TRUTH — every fact lives here
│  └─ styles/global.css      design tokens (navy / amber / stone), fonts
├─ public/
│  ├─ images/                web-optimised photos + logos (committed)
│  └─ robots.txt
├─ astro.config.mjs          set the real domain here before launch
├─ package.json
├─ .nvmrc                    Node 20 (for the build host)
└─ other-information/         everything that is NOT the website
   ├─ docs/                  discovery questionnaires, SEO strategy,
   │                          design rationale, and the DEPLOYMENT plan
   ├─ ai-notes/              note on the "AI images" request
   ├─ college-answers/       the college's filled priority-answer sheet
   ├─ college-shared/        raw assets the college sent (logo, statue,       [not in git]
   │                          admission notice, portrait) — archival
   ├─ enhanced-photos/       colour-corrected campus originals                [not in git]
   └─ original-photos/       untouched camera originals + pamphlet + PDF      [not in git]
```

The three photo folders under `other-information/` are **git-ignored** (heavy
binaries; keep a copy on Google Drive). Everything the site needs — the
web-optimised images in `public/images/` — is committed.

---

## Run it locally

Requires Node 20+.

```bash
npm install          # first time only
npm run dev          # dev server at http://localhost:4321
npm run build        # produce the static site in dist/
npm run preview      # serve the built dist/ locally
npm run check:todos  # list any facts still marked TODO() in config
```

---

## Where to change things

| I want to change… | Edit this |
|---|---|
| Phone, email, address, Institute Code, admission status | `src/config/site.ts` |
| Principal / founder / Trust details | `src/config/site.ts` |
| A course's seats, duration, fee, description | `src/content/courses/<course>.md` |
| Notice-board items | `notices` in `src/config/site.ts` |
| Colours / fonts | `src/styles/global.css` |
| A page's layout or wording | the matching file in `src/pages/` |

Anything not yet supplied is wrapped in `TODO()` in the config; it renders as a
loud red badge on the page and is listed by `npm run check:todos`, so a blank or
invented value can never ship silently.

---

## Deploy

Full plan: **`other-information/docs/09-DEPLOYMENT.md`**. Short version:

- **Fastest preview** — `npm run build`, then drag the `dist/` folder to
  <https://app.netlify.com/drop>. Live in seconds on a `*.netlify.app` URL.
- **Recommended production** — push this repo to GitHub → connect **Cloudflare
  Pages** (build `npm run build`, output `dist`, root directory blank,
  `NODE_VERSION=20`). It redeploys on every push. Attach the custom domain once
  purchased.

Before the real launch, set the domain in `astro.config.mjs` and in the
`Sitemap:` line of `public/robots.txt`.

> ⚠️ Register the GitHub repo, Cloudflare account, domain and Google accounts
> under the **institute's** own login, never a personal one — otherwise the
> institute can lose control of its website.

---

## What's confirmed and what's pending

**Confirmed and live:** name, DGT/NCVT approval, Institute Code `PR270001081`,
four courses with seats/duration, fees ("as per Government norms"), full address
& PIN, both phone numbers, email, office hours, principal's message, the founding
Trust (since 1967), the visionary Shri Sureshkumar Deokaran Shah (portrait +
statue + belief), the admission document checklist (2026-27), and real
photographs of the campus, workshops and labs.

**Pending:**
- **Domain name** — confirm spelling, then buy (the only paid item)
- **Chairman message** — optional; its section stays hidden until supplied
- The enquiry **form** is a phase-2 add-on; Call + WhatsApp cover leads for now

---

Website designed & developed by **DEVANSH SHAH**.
Photo & logo credits: see the `/credits` page on the site.
