# DEKSONS ITI — Go-Live Runbook (deksons.in)

Domain **deksons.in** (registered at Hostinger). Host: **Cloudflare Pages** (free).
The code is production-ready and the domain is already wired into the build
(`astro.config.mjs` → `site: 'https://deksons.in'`, sitemap + canonicals updated).

Do the four parts in order. Parts 1–2 put the site live on the domain; Parts 3–4
are the SEO that makes people actually find it.

---

## Part 1 — Deploy on Cloudflare Pages (~10 min)

Cloudflare Pages works with a **private** GitHub repo on the free plan.

1. Create a free account at **dash.cloudflare.com** (use the institute email if
   you want institute ownership — recommended).
2. **Workers & Pages → Create → Pages → Connect to Git.** Authorise GitHub and
   pick the **`3007devansh/Deksons`** repo.
3. **Build settings:**
   | Field | Value |
   |---|---|
   | Production branch | `main` |
   | Framework preset | **Astro** |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Root directory | *(leave blank — project is at the repo root)* |
   | Environment variable | `NODE_VERSION` = `20` |
4. **Save and Deploy.** ~2 min later you get a live URL like
   `https://deksons.pages.dev`. Check it works.

Every future `git push` to `main` now auto-redeploys.

---

## Part 2 — Point deksons.in at Cloudflare (~15 min + DNS wait)

The cleanest way is to let **Cloudflare run the DNS** (free, and it adds a fast
CDN). You change the nameservers at Hostinger once.

1. In Cloudflare: **Add a site → `deksons.in` → Free plan.** Cloudflare scans
   existing records and shows you **two nameservers**, e.g.
   `xxx.ns.cloudflare.com` and `yyy.ns.cloudflare.com`.
2. In **Hostinger → Domains → deksons.in → DNS / Nameservers → Change
   nameservers → Use custom nameservers** → paste Cloudflare's two nameservers →
   Save. (Propagation: minutes to a few hours.)
3. Back in Cloudflare → your **Pages project → Custom domains → Set up a
   domain** → add **`deksons.in`** and again for **`www.deksons.in`**. Cloudflare
   creates the records automatically and issues **free HTTPS**.
4. Set the primary: redirect `www` → root (or root → `www`) — Pages offers this.

> **Alternative without moving nameservers:** keep DNS at Hostinger and add a
> `CNAME` for `www` → `deksons.pages.dev`, plus a root redirect. Root-domain
> CNAMEs need ALIAS/ANAME support (Hostinger has it, but Cloudflare nameservers
> are simpler and faster). Prefer the nameserver method above.

When done, **https://deksons.in** serves the site over HTTPS.

> After the domain is live you can delete the temporary preview repo
> `3007devansh.github.io` — its pages already canonical-point to deksons.in, so
> it won't compete in search meanwhile.

---

## Part 3 — Search visibility setup (do the day it goes live)

1. **Google Search Console** — search.google.com/search-console → add a
   **Domain property** `deksons.in` (verify with the DNS TXT record; if DNS is on
   Cloudflare this is a 2-minute add). Then **Sitemaps → submit**
   `https://deksons.in/sitemap-index.xml`.
2. **Google Analytics 4** — analytics.google.com → create a property → copy the
   **Measurement ID** (`G-XXXXXXXXXX`). Paste it into
   `src/config/site.ts` → `analytics.ga4` → commit → it auto-deploys. (Nothing
   loads until you set it.)
3. **Microsoft Clarity** (free heatmaps/recordings) — clarity.microsoft.com →
   create project → copy the ID → `src/config/site.ts` → `analytics.clarity`.
4. **Bing Webmaster Tools** — bing.com/webmasters → add the site, import from
   Search Console (2 clicks).

---

## Part 4 — Google Business Profile ★ (the #1 way to rank for "ITI near me")

Your website will take months to rank organically. **Google Maps ranks in
weeks** and is what shows for *"ITI near me"*, *"ITI in Akola"* on a phone. This
is the single most important thing for local reach — do it **now**, in parallel.

1. Go to **google.com/business** (sign in with the institute Google account) →
   **Add your business**.
2. **Name:** `Deksons ITI` (or `Dekson Private Industrial Training Institute`).
3. **Primary category:** **Vocational school**. Add secondary: *Technical
   school*, *Training centre*, *Computer training school*.
   *(Do NOT pick "College/University" — those are accreditation-gated.)*
4. **Address:** Babhulgaon, near Shivaji Engineering College, Akola 444104.
   **Drag the map pin exactly onto the campus** — this fixes your "near me"
   location.
5. **Phone** `9503264747` · **Website** `https://deksons.in` ·
   **Hours** Mon–Sat 10:00–17:00 (and note Sundays open in admission season).
6. **Verify** (postcard / phone / video — whatever Google offers). Ranking
   starts only after verification.
7. Then: upload the **campus photos** (already enhanced), add the **four courses**
   under Services, write a **post** ("Admissions 2026-27 open"), and seed the
   **Q&A** (fees, eligibility, Institute Code). Ask early students/parents for
   **reviews** — reviews are a major ranking factor; aim past 10 quickly.

**NAP consistency:** use the *exact same* name, address and phone everywhere —
website, GBP, and directories — or Google gets confused. The canonical string:

```
Dekson Private Industrial Training Institute (Deksons ITI)
Babhulgaon, Near Shivaji Engineering College, Akola, Maharashtra 444104
Phone: 9503264747
```

---

## Part 5 — Free local directories (each also sends you enquiries)

List with the **exact NAP above** on:
- **JustDial** and **Sulekha** (highest-traffic India directories — will generate
  calls directly)
- **Shiksha.com** and **CollegeDunia** (education-specific)
- **Google Maps** is Part 4; also add to **Bing Places**

---

## What's already done in the code (SEO)

- `deksons.in` canonical URLs, sitemap, Open Graph on every page
- Schema: `EducationalOrganization` + `LocalBusiness` with address, phone,
  opening hours, logo, and **areaServed** across Akola district (Akot, Balapur,
  Murtizapur, Telhara, Patur, Barshitakli, Hivarkhed) for regional "near me"
- `Course` carousel schema, `BreadcrumbList`, `FAQPage`
- Fast, mobile-first, image-optimised (WebP), zero blocking JS
- `theme-color`, favicon, robots.txt → sitemap
- Analytics component ready — just paste the GA4 / Clarity IDs into config

## Still to hand me (small)

- The **Google Maps link** once the profile is live → I wire it into the schema
  (`hasMap`) and the Contact page
- **GA4 + Clarity IDs** → into `src/config/site.ts`
- Optional: social profile URLs (Instagram/Facebook) → added as `sameAs`
