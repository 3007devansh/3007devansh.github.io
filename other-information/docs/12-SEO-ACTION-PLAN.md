# Getting Found — SEO Action Plan (deksons.in)

## First, the diagnosis (checked on the live site)

| Check | Result |
|---|---|
| Site loads | ✅ 200 |
| `robots.txt` allows Google | ✅ `Allow: /`, `search=yes` (only AI-training bots blocked) |
| Sitemap | ✅ `https://deksons.in/sitemap-index.xml` |
| Canonical tags | ✅ correct |
| `noindex` anywhere | ✅ none |

**Nothing is broken.** The site simply **has not been indexed yet** — the domain
is only days old and has no backlinks. Google has to *discover* the site before
it can rank it. Not appearing yet is normal, not a fault.

> Ranking for your own brand (*"deksons iti akola"*) will come within days–weeks
> of being indexed. Competitive terms (*"ITI in Akola"*) take months. The Google
> Business Profile — not the website — is what wins *"ITI near me"*.

---

## Priority 1 — Get indexed (do TODAY, ~20 min)

This is the single fastest thing. Without it you may wait weeks; with it, days.

### Google Search Console
1. Go to **search.google.com/search-console** → **Add property** → choose
   **Domain** → enter `deksons.in`.
2. It asks for a **DNS TXT record**. Your DNS is on Cloudflare, so:
   **Cloudflare → deksons.in → DNS → Records → Add record** → Type **TXT**,
   Name `@`, Content = the string Google gives you → **Save**. Back in Google →
   **Verify** (works in a minute or two).
3. **Sitemaps** (left menu) → enter `sitemap-index.xml` → **Submit**.
4. **URL Inspection** (top search bar) → paste `https://deksons.in/` →
   **Request Indexing**. Repeat for these:
   - `https://deksons.in/courses`
   - `https://deksons.in/admissions`
   - `https://deksons.in/about`
   - `https://deksons.in/contact`
   - `https://deksons.in/facilities`

### Bing Webmaster Tools
- **bing.com/webmasters** → add `deksons.in` → **Import from Google Search
  Console** (2 clicks) → submit the same sitemap. Bing/Copilot indexes fast.

---

## Priority 2 — Local presence while Google Maps is under review

Your GBP is pending with no timeline. Meanwhile these get you **found locally
AND ring your phone**. They are free, index quickly, and act as backlinks
(citations) that also help the website rank.

List on each, using the **exact same** name/address/phone (see NAP below):
- **JustDial** — biggest India directory; will generate calls directly
- **Sulekha** — strong for education/services
- **IndiaMART** (free listing)
- **Shiksha.com** and **CollegeDunia** — education-specific
- **Bing Places** (separate from Google — approves faster)
- **Apple Business Connect** (free, feeds Apple Maps)

### The exact NAP — copy/paste identically everywhere
```
Dekson Private Industrial Training Institute (Deksons ITI)
Babhulgaon, Near College of Engineering and Technology, Akola, Maharashtra 444104
Phone: 9503264747
Website: https://deksons.in
```
Inconsistent name/address/phone across sites is the #1 thing that confuses
Google's local ranking. Keep it byte-identical.

---

## Priority 3 — Google Business Profile (the "ITI near me" winner)

It's under review. While you wait:
- Do **not** create a second profile — duplicates get both suspended.
- If it's still pending after **~2 weeks**, use **Business Profile → Support →
  Request a call / appeal**, and offer **video verification** (usually the
  fastest route): a single continuous video showing the signboard, the campus
  gate, inside a workshop, and something proving you manage it (keys, office).
- Have ready: the DGT/NCVT affiliation letter, the signboard photo, and a
  utility bill/registration in the institute's name.

The moment it's approved: send me the **Maps link** and I'll wire it into the
site schema (`hasMap`) and the Contact page.

---

## Priority 4 — Backlinks (this is what's missing most)

A brand-new site with **zero links** ranks slowly. Easy, legitimate links:
- The **Trust's other institutions** — G.S. Convent & Smt. L.D. Patel High
  School, and Smt. Maherbanu College — link to deksons.in from their sites/pages.
- **Shri Akola Gujarati Samaj** — any website/Facebook page → link.
- Local **news / press**: a short "new ITI opens in Akola" item in a local paper
  (Lokmat/Deshonnati) — their online edition link is a strong local signal.
- **Social profiles**: create Facebook + Instagram pages for the institute, put
  `deksons.in` in the bio. Send me the URLs → I add them as `sameAs` in schema.
- The printed **pamphlet**: add a **QR code** to `deksons.in` on the next print
  run, and put the URL on the signboard/banners.

---

## Priority 5 — Paid, if you want enquiries this admission season

Organic will not be fast enough for Round 2/3. For a small budget:
- **Google Search Ads** on `iti admission akola`, `iti college akola`,
  `deksons iti` — you'll appear instantly, above organic.
- **Meta (Facebook/Instagram) ads** geo-fenced to Akola + surrounding talukas,
  in **Marathi**. Cheapest reach for this audience.

---

## Already done in the code (no action needed)

- `LocalBusiness` + `EducationalOrganization` schema with address, **geo
  coordinates**, phone, opening hours, logo
- `areaServed` across Akola district (Akot, Balapur, Murtizapur, Telhara, Patur,
  Barshitakli, Hivarkhed)
- `Course` + `FAQPage` + `BreadcrumbList` schema
- Titles/descriptions targeting "ITI Akola", canonical URLs, sitemap, robots
- Fast, mobile-first build (this is a ranking factor for your audience)

---

## Honest timeline

| When | What to expect |
|---|---|
| 2–7 days after Search Console + Request Indexing | Site appears for `site:deksons.in` and for `deksons iti akola` |
| 2–6 weeks | Branded searches rank reliably; directory listings rank |
| Whenever GBP approves | You start showing for **"ITI near me"** — the big one |
| 3–6 months | Competitive terms like "ITI in Akola" become winnable |

There is no way to make a brand-new domain rank instantly for competitive local
terms — anyone who says otherwise is selling something. Indexing + GBP +
citations + a few real backlinks is the honest fast path.
