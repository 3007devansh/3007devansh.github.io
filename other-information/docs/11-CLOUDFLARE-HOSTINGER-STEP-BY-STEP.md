# Cloudflare + Hostinger — Step-by-Step (deksons.in)

## What went wrong in your first deploy

Your Cloudflare project was created as a **Worker** (Cloudflare's "import a
repository" flow). It auto-added the `@astrojs/cloudflare` adapter and deploys
with **wrangler**, which needs **Node 22** — but the build ran on **Node 20**, so
the final `npx wrangler versions upload` step failed. Nothing was wrong with the
site; the build itself succeeded.

This website is 100% static, so there are two clean ways forward.

---

## Fix — pick ONE path

### ✅ Path A — 30-second fix (keep your current project)

I've pushed a change that pins the build to **Node 22** (`.nvmrc`). Your project
auto-redeploys on push, so:

1. Open **Cloudflare → Workers & Pages → your project → Deployments**.
2. Watch the newest deployment (triggered by my push). With Node 22, the wrangler
   step now succeeds.
3. If it does **not** auto-trigger, also set it manually:
   **Settings → Build → Variables and Secrets → add** `NODE_VERSION = 22` →
   **Retry deployment**.

That unblocks the exact error. Then jump to **"Connect deksons.in"** below.

### ⭐ Path B — cleaner setup (static Pages, recommended long-term)

A static site is simpler and cheaper to run as **Cloudflare Pages** (no wrangler,
no Worker, no KV). If you'd rather do it right:

1. **Delete** the current Worker project (Settings → bottom → Delete), or just
   leave it unused.
2. **Workers & Pages → Create → Pages tab → Connect to Git** → pick
   `3007devansh/Deksons` → production branch **main**.
3. **Build settings:**
   | Field | Value |
   |---|---|
   | Framework preset | **None** *(prevents the Astro-on-Workers adapter injection)* |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Root directory | *(blank)* |
   | Variable | `NODE_VERSION` = `22` |
4. **Save and Deploy** → you get `https://deksons.pages.dev`.

Either path ends with a working `*.pages.dev` (or `*.workers.dev`) URL. Confirm
that URL loads before doing DNS.

---

## Connect deksons.in (Hostinger → Cloudflare)

The clean method: let **Cloudflare run the DNS** (free, adds a fast CDN). You
change nameservers at Hostinger once.

### 1. Add the domain to Cloudflare
- Cloudflare dashboard (top) → **Add a domain** → enter `deksons.in` →
  choose **Free** plan → **Continue**.
- Cloudflare scans existing records, then shows **two nameservers**, e.g.
  `alice.ns.cloudflare.com` and `bob.ns.cloudflare.com`. **Copy both.**

### 2. Change nameservers at Hostinger
- **hPanel → Domains → deksons.in → DNS / Nameservers.**
- Choose **"Change nameservers" → "Use custom nameservers"**.
- Paste Cloudflare's **two** nameservers (remove Hostinger's).
- **Save.** Propagation is usually 15 min – 2 h (can be up to 24 h).
- Back in Cloudflare it will say **"Pending" → "Active"** once done (you get an
  email).

### 3. Attach the domain to your site
- Cloudflare → your **Pages/Worker project → Custom domains → Set up a domain**.
- Add **`deksons.in`**, then repeat for **`www.deksons.in`**.
- Cloudflare creates the records and issues **free HTTPS** automatically
  (a few minutes).
- Set a redirect so both reach the same place (www → root, or root → www).

### Alternative (keep DNS at Hostinger, don't move nameservers)
- In Hostinger DNS, add a **CNAME**: `www` → `deksons.pages.dev`.
- For the root `deksons.in`, add Hostinger's **CNAME/ALIAS** to
  `deksons.pages.dev` (Hostinger supports ALIAS on the root; if not, use the
  nameserver method above — it's simpler and faster).
- Add both domains in the Cloudflare project's Custom domains.

---

## Verify
- `https://deksons.pages.dev` (or workers.dev) → loads the site ✅
- `https://deksons.in` and `https://www.deksons.in` → load with the padlock ✅
- Test on a phone and on a laptop.

---

## After it's live
- **Google Search Console** → add domain property `deksons.in`, submit
  `https://deksons.in/sitemap-index.xml`.
- **Google Business Profile** → create it (Part 4 of `10-GO-LIVE-deksons.in.md`)
  — this is what makes you show up for "ITI near me".
- Hand me the **Maps link** and your **GA4 / Clarity IDs** and I'll wire them in.
- You can delete the temporary `3007devansh.github.io` preview repo.

## How future changes work
Edit → I (or you) `git push` to **main** → Cloudflare rebuilds and redeploys
automatically in ~2 minutes. No manual step.
