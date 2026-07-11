# DEKSONS ITI — Technical Questionnaire & Architecture Decisions

**Audience:** developer / whoever controls domain, hosting, and Google accounts.
**Constraint:** Static site, free hosting, only the domain costs money. Must expand later into an admission portal **without a rewrite**.
**Deadline pressure:** Round 2 admissions. Ship in days, not weeks.

Each section states **my recommendation** as architect. Override only with a reason.

---

## 0. Decisions That Must Be Made Before Any Code

| # | Decision | My Recommendation | Confirm / Override |
|---|---|---|---|
| 0.1 | Who owns the domain and hosting accounts? | **The trust/institute**, never a developer's personal account. Create `deksons.institute@gmail.com` (or domain email) and register everything under it. This is the #1 mistake colleges make — the developer leaves and the site is lost. | |
| 0.2 | Domain name | `deksonsiti.in` or `deksons.edu.in` if eligible. `.in` ≈ ₹700/yr. **Buy for 5 years upfront** — expiry mid-admission-season is catastrophic. | |
| 0.3 | Is `.edu.in` available to us? | Requires recognised-institution proof. Worth checking — big trust signal. Fall back to `.in`. | |
| 0.4 | Registrar | Cloudflare Registrar (at-cost, no renewal gouging) or BigRock/GoDaddy India if local payment is easier. | |
| 0.5 | Who is the technical point of contact after handover? | Must be named before launch. | |

---

## 1. Hosting

| # | Question | Recommendation |
|---|---|---|
| 1.1 | Which host? | **Cloudflare Pages.** Free, unlimited bandwidth, global CDN with good India POPs (Mumbai), free SSL, and — critically — **Cloudflare Functions** later let us add form handling / a portal *on the same platform* without migrating. |
| 1.2 | Why not GitHub Pages? | No serverless functions, no built-in form handling, weaker India performance. Fine for a brochure site, a dead end for the portal. |
| 1.3 | Why not Vercel/Netlify? | Both good, but their free tiers meter bandwidth/build minutes and their pricing cliffs are steep. Cloudflare's free tier is the most generous and the migration path is cleanest. |
| 1.4 | Custom domain + SSL? | Yes, automatic and free on Cloudflare Pages. |
| 1.5 | Who holds DNS? | Cloudflare. Institute's account. |
| 1.6 | Do we need email hosting? | Yes — `info@` / `admission@`. Use **Zoho Mail free tier** (5 users) or Google Workspace for Education (may be free for institutions). Gmail addresses on a college website look unprofessional. |

**Confirm:** Do you have any existing hosting, domain, or website? _______________

---

## 2. Technology Stack

| # | Question | Recommendation |
|---|---|---|
| 2.1 | Framework? | **Astro.** Ships zero JS by default (fastest possible), has first-class i18n for English+Marathi, content collections for trades/faculty as Markdown, and can later add server routes / React islands for the portal **without a rewrite**. This is exactly the "static now, dynamic later" requirement. |
| 2.2 | Why not plain HTML/CSS? | Fine for 5 pages; painful at ~10 trades × 2 languages + FAQ + faculty. We'd hand-maintain duplicate markup. |
| 2.3 | Why not Next.js static export? | Heavier, ships more JS, and static-export mode disables the very features you'd migrate for. Astro degrades better. |
| 2.4 | Styling | **Tailwind CSS.** Fast, consistent, no CSS bloat. |
| 2.5 | Any JS framework? | None at launch. Add React/Preact islands only where genuinely interactive. |
| 2.6 | Build/package manager | Node LTS + pnpm. |

**Confirm:** Any constraint on stack (e.g. staff who only know WordPress)? _______________

---

## 3. Repository & Workflow

| # | Question | Recommendation |
|---|---|---|
| 3.1 | Where does code live? | GitHub, under an **organisation owned by the institute's account**, not a personal account. |
| 3.2 | Public or private? | Private. |
| 3.3 | Deployment | Push to `main` → Cloudflare Pages auto-deploys. Preview deploys on PRs. |
| 3.4 | Backups | The Git repo *is* the backup. Additionally export enquiry data weekly. |

---

## 4. Forms — The Most Important Technical Feature

> The enquiry form is the entire commercial point of this website. It must never fail silently.

| # | Question | Recommendation |
|---|---|---|
| 4.1 | Form handler | **Cloudflare Pages Functions → Google Sheet + email + WhatsApp notification.** No third-party form service lock-in. |
| 4.2 | Simpler fallback if we must ship in 48h | **Google Forms embedded**, or **FormSubmit / Formspree** free tier. Ugly but functional. Ship this rather than miss Round 2, then upgrade. |
| 4.3 | Where do submissions go? | (a) Google Sheet the office can open, (b) email to `admission@`, (c) **WhatsApp message to the admission officer**. (c) is the one that actually gets acted on. |
| 4.4 | Spam protection | **Cloudflare Turnstile** (free, no user friction, no reCAPTCHA privacy issues). |
| 4.5 | Fields to capture | Name, mobile (required), trade of interest, 10th %, taluka/village, preferred call time. **Keep it under 6 fields** — every extra field cuts submissions. |
| 4.6 | Also add | A giant `tel:` **Call Now** button and a `wa.me/` **WhatsApp** button, sticky on mobile. In this demographic these will outperform the form 5:1. |
| 4.7 | Confirmation | Show a clear success message + auto-reply. Silence makes people submit again or give up. |

**Confirm:** Which WhatsApp number receives leads? _______________
**Confirm:** Who checks the Google Sheet, and how often? _______________

---

## 5. Performance

| # | Target | Recommendation |
|---|---|---|
| 5.1 | Lighthouse | ≥ 95 Performance, 100 Accessibility, 100 Best Practices, 100 SEO |
| 5.2 | Real-world target | **LCP < 2.0s on a 4G connection on a ₹8,000 Android phone.** This is the actual device our audience uses. Test on throttled 4G, not on your laptop. |
| 5.3 | Page weight | Homepage < 500 KB total. |
| 5.4 | Images | Convert to **WebP** (AVIF as progressive enhancement). Serve responsive `srcset`. Our source photos are 4–8 MB each — they must be resized to max 1920px and compressed. Astro's `<Image>` handles this. |
| 5.5 | Lazy loading | Yes, everything below the fold. Never lazy-load the hero (hurts LCP). |
| 5.6 | Fonts | System fonts, or one self-hosted variable font, `font-display: swap`. Must include **Devanagari** glyphs for Marathi. |
| 5.7 | No | Carousels, sliders, video backgrounds, heavy animation libraries. |

---

## 6. SEO

| # | Item | Recommendation |
|---|---|---|
| 6.1 | Schema.org | `EducationalOrganization` + `LocalBusiness` on home; `Course` on each trade page; `FAQPage` on FAQ; `BreadcrumbList` sitewide. FAQ + Course schema produce rich results — significant free visibility. |
| 6.2 | Meta / OG / Twitter cards | Yes, per page. OG image should show the campus + "Admissions Open". |
| 6.3 | Sitemap + robots.txt | Auto-generated by Astro. |
| 6.4 | Canonical URLs + hreflang | Required for the English/Marathi split. |
| 6.5 | **Google Business Profile** | ⚠️ **Highest-ROI item in this entire document.** Claim/verify the listing, add the enhanced photos, post admission updates weekly. For "ITI near me" searches this beats the website. Do this *today*, in parallel with development. |
| 6.6 | Google Search Console | Set up on day 1, submit sitemap. |
| 6.7 | Analytics | **Google Analytics 4** + **Microsoft Clarity** (free session recordings — invaluable for seeing where enquiries drop off). |
| 6.8 | Conversion tracking | Track: form submit, Call button tap, WhatsApp tap, brochure download. **If we don't track these we cannot tell if the site works.** |
| 6.9 | Bing Webmaster | Yes, 5-minute setup. |
| 6.10 | Meta Pixel | Only if running paid Facebook/Instagram ads. Likely yes for admission publicity. |

**Confirm:** Which Google account owns Analytics/Search Console/Business Profile? _______________

---

## 7. Content Management

| # | Question | Recommendation |
|---|---|---|
| 7.1 | Will office staff edit content? | **Assume yes, eventually.** But do NOT block launch on a CMS. |
| 7.2 | Launch approach | Content in Markdown files, developer-managed. Fast, zero risk. |
| 7.3 | Phase 2 | Add **Decap CMS** or **TinaCMS** (both free, Git-backed) so staff can edit notices/news through a browser without touching code. |
| 7.4 | What must staff be able to change themselves, soon? | Admission dates, notices, "Admissions Open/Closed" banner. **These change under time pressure — make them editable first.** |

---

## 8. Accessibility

| # | Item | Recommendation |
|---|---|---|
| 8.1 | Standard | WCAG 2.2 AA |
| 8.2 | Why it matters here | ITIs enrol students with disabilities under reservation; accessibility is a compliance and moral matter, not a nicety. |
| 8.3 | Must-haves | Semantic HTML, keyboard navigation, visible focus rings, 4.5:1 contrast (⚠️ the maroon-on-pink brand pairing likely **fails** — needs checking), alt text on every image, no colour-only meaning. |
| 8.4 | Screen readers | Test with NVDA. `lang` attribute must switch correctly between `en` and `mr`. |

---

## 9. Responsive & Browser Support

| # | Item | Recommendation |
|---|---|---|
| 9.1 | Approach | **Mobile-first, non-negotiable.** Expect 85–95% mobile traffic. Design the phone view first; desktop is secondary. |
| 9.2 | Breakpoints | 360 / 768 / 1024 / 1440 |
| 9.3 | Test on | Chrome Android (low-end), Safari iOS, Chrome desktop. Skip IE/legacy entirely. |
| 9.4 | Tap targets | Minimum 48×48px. Phone/WhatsApp buttons must be thumb-reachable. |

---

## 10. Security & Privacy

| # | Item | Recommendation |
|---|---|---|
| 10.1 | HTTPS | Enforced, HSTS on. |
| 10.2 | Security headers | CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy. Trivial to add on Cloudflare. |
| 10.3 | Form abuse | Turnstile + server-side rate limiting on the Function. |
| 10.4 | **Personal data** | The enquiry form collects names and phone numbers of **minors' families**. Under India's **DPDP Act 2023** this requires a clear privacy notice, stated purpose, and a retention limit. **A Privacy Policy is mandatory, not optional.** |
| 10.5 | Data storage | Google Sheet must not be publicly shared. Restrict access. Delete leads after the admission cycle + defined retention. |
| 10.6 | No | Never log phone numbers to analytics. Never expose the sheet URL client-side. |

---

## 11. Architecture for Future Expansion

The site must grow into an admission portal without a rewrite. Design for it now:

```
deksons/
  src/
    content/          # Markdown — trades, faculty, notices, FAQs
      trades/         # one .md per trade → generates /trades/fitter etc.
      faculty/
      notices/
    pages/
      en/  mr/        # i18n routes
    components/
  functions/          # Cloudflare Functions — empty at launch
    api/enquiry.ts    # form handler (phase 1)
    # later: /api/apply, /api/results, /api/auth
```

**Why this survives the upgrade:**
- Content already lives in structured collections, so a CMS or DB can replace the Markdown source without touching templates.
- `functions/` is already wired, so adding authenticated routes, a student login, or fee payment is additive.
- Cloudflare D1 (SQLite) / KV are available on the same free-tier platform for the portal phase.

**Do NOT** at launch: build a login, a database, an admin panel, or online payment. They will delay Round 2 and are not needed to capture enquiries.

---

## 12. Proposed Launch Scope (ship in 3–5 days)

**Pages:**
1. **Home** — "Admissions Open: Round 2" banner + deadline countdown, Institute Code shown large, Call/WhatsApp buttons, trades grid, trust badges (NCVT), campus photos.
2. **About** — the Samaj's story, why DEKSONS exists, Principal's & Chairman's messages.
3. **Trades** — index + one page per trade.
4. **Admissions** — process, DVET portal steps, eligibility, documents, dates, fees, scholarships.
5. **Infrastructure & Gallery**
6. **Faculty**
7. **Contact** — map, phone, WhatsApp, enquiry form, hours.
8. **Downloads** — brochure, forms.
9. **FAQ**
10. **Privacy Policy** + **Anti-Ragging / Grievance** (compliance)

**Deliberately NOT in v1:** placement stats, testimonials, alumni, news feed, student portal, online payment, chatbot.

---

## 13. Open Technical Questions for the College

1. Do you have any existing website, domain, or hosting? ____________________
2. Who owns the Google account for the institute? ____________________
3. Is the college already on Google Maps? ____________________
4. Is there a budget for the domain (~₹3,500 for 5 years) and possibly email (~₹0–1,500/yr)? ____________________
5. Is there a budget for paid social ads during admission season? ____________________
6. Who will answer the phone number on the website? ____________________
7. Is there anyone on staff who can update content, or is it fully developer-managed? ____________________
8. Do you have the logo in vector format? ____________________
9. Who signs off on content before it goes live? ____________________
10. What is the hard deadline (Round 2 close date) we are shipping against? ____________________

---

## 14. My Recommended Immediate Sequence

| When | Action | Owner |
|---|---|---|
| **Today** | Claim **Google Business Profile**, upload enhanced photos | College |
| **Today** | Answer the 15 P0 questions | Principal |
| **Today** | Buy domain, create institute Google account | College |
| **Day 1–2** | Confirm NCVT status + Institute Code **in writing** | Principal |
| **Day 1–2** | Shoot interior/workshop photos on a clear day | College |
| **Day 2–4** | Build & deploy site with real content | Developer |
| **Day 4** | Search Console, GA4, Clarity, conversion tracking | Developer |
| **Day 5** | Go live, then push the link in local WhatsApp groups & schools | College |

> **The Google Business Profile is live within hours and can start generating enquiry calls before the website is even built.** Do not wait for the website. Start there.
