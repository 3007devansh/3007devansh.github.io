# DEKSON ITI — Deployment Plan (Free Hosting)

The website is a **static Astro site** — plain HTML/CSS/JS after build, no server
needed. That means it can be hosted **free** on any static host; only the domain
name costs money.

**Build output:** `dist/` (13 MB, all static). Build command: `npm run build`.

---

## Recommendation

> **Host on Cloudflare Pages. It is free, fast in India (Mumbai edge), and — unlike
> GitHub Pages — it can later run the enquiry form and student portal on the same
> platform without moving hosts.**

If you just want it live in the next 10 minutes with zero setup, use the
**Netlify Drop** path below, then move to Cloudflare Pages for the real launch.

---

## ⚠️ Before you start — ownership (do not skip)

Create these under an **institute-owned account**, never a personal or developer
account. If a developer holds them and leaves, the institute loses its website.

- [ ] A Google account for the institute (e.g. `deksoniti@gmail.com` — you have it)
- [ ] A **GitHub** account (sign up with the institute email)
- [ ] A **Cloudflare** account (sign up with the institute email)

The developer can be added as a *collaborator*; the institute stays the *owner*.

---

## Path A — Cloudflare Pages (recommended, production)

Auto-deploys every time code is pushed. One-time setup ~20 minutes.

### 1. Put the code on GitHub
```bash
# from the project root: c:/Users/devan/Desktop/Deksons
gh auth login                      # sign in as the institute's GitHub account
gh repo create dekson-iti --private --source . --remote origin
git push -u origin v2-redesign     # or merge to main first (see note below)
```
*(No `gh` CLI? Create an empty private repo on github.com, then
`git remote add origin <url>` and `git push -u origin <branch>`.)*

### 2. Connect Cloudflare Pages to the repo
1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** →
   **Connect to Git** → pick the `dekson-iti` repo.
2. **Build settings:**
   | Field | Value |
   |---|---|
   | Framework preset | **Astro** |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Root directory | *(leave blank / repo root)* |
   | Environment variable | `NODE_VERSION` = `20` |
3. **Save and Deploy.** First build takes ~2 minutes. You get a live URL like
   `https://dekson-iti.pages.dev`.

> The Astro project sits at the **repo root** (package.json, src/, public/ are
> all at the top level), so leave the root directory blank.

### 3. Every future change
Push to the connected branch → Cloudflare rebuilds and redeploys automatically.
Pull-request previews get their own temporary URL.

---

## Path B — Netlify Drop (fastest, no accounts, for a quick share)

1. On this machine: `npm run build` (from the project root)
2. Go to **https://app.netlify.com/drop**
3. Drag the **`dist`** folder onto the page.
4. It is live in seconds at a `https://<random>.netlify.app` URL.

Good for showing management a preview today. It does **not** auto-update — you
must re-drag `dist` after each change. Use Path A for the real site.

---

## Custom domain (after you buy it)

The domain is the only paid part (~₹700–900/year for `.in`). Buy for **5 years**
so it can't lapse mid-admission-season.

1. **Register** `deksoniti.in` (or your chosen name — confirm the DEKSON/DEKSONS
   spelling first). Cloudflare Registrar is at-cost; BigRock/GoDaddy also work.
2. In **Cloudflare Pages → your project → Custom domains → Set up a domain**,
   enter the domain. Cloudflare walks you through the DNS records.
3. SSL (https) is issued automatically and free.
4. **Update the site's own URL:** in `astro.config.mjs`, set
   `site: 'https://your-real-domain'`. This fixes canonical URLs, the sitemap
   and Open Graph links. Also update `public/robots.txt` (the Sitemap
   line) and commit. Redeploy.

Until the domain is attached, the site works fine on the `*.pages.dev` URL; only
the canonical/sitemap URLs will read `deksoniti.in` (harmless placeholder).

---

## Free-tier comparison

| Host | Free bandwidth | Auto-deploy from Git | Custom domain + SSL | Can run the future form/portal? |
|---|---|---|---|---|
| **Cloudflare Pages** ★ | Unlimited | ✅ | ✅ free | ✅ (Pages Functions, D1) |
| Netlify | 100 GB/mo | ✅ | ✅ free | ⚠️ limited free functions |
| Vercel | 100 GB/mo | ✅ | ✅ free | ⚠️ hobby tier limits |
| GitHub Pages | 100 GB/mo (soft) | ✅ (Actions) | ✅ free | ❌ static only — dead end |

All four will host this site well today. Cloudflare wins on the growth path.

---

## Post-launch checklist

- [ ] Set the real domain in `astro.config.mjs` + `robots.txt`, redeploy
- [ ] **Google Search Console** — verify the domain, submit `sitemap-index.xml`
- [ ] **Google Analytics 4** + **Microsoft Clarity** — add before promoting
- [ ] Track conversions: Call taps, WhatsApp taps, form (when added)
- [ ] **Google Business Profile** — claim/verify, upload the campus photos
      (this drives "ITI near me" — start it in parallel, it ranks in weeks)
- [ ] List on JustDial and Sulekha (they generate calls directly)

---

## Still pending before the true launch

- **Domain name** — confirm spelling, then buy (only paid item)
- **Statue photo + founder message** already in; **Chairman message** optional
- Consider self-hosting the two Google Fonts to drop the third-party request
- The enquiry form (Cloudflare Function → Google Sheet + WhatsApp) is a phase-2
  add-on; Call/WhatsApp cover lead capture until then
