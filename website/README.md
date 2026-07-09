# DEKSON ITI — Website

Static site for **DEKSON ITI, Waghulgaon, Akola** — run by Shri Akola Gujarati Samaj.
Built with Astro + Tailwind. Deploys free to Cloudflare Pages.

---

## The one rule

**Every fact the college must supply lives in [`src/config/site.ts`](src/config/site.ts).**
Nothing is hard-coded in a page. Fill a value there, and it updates everywhere.

Unknown facts are wrapped in `TODO('...')`. These render as a **loud red badge** on the page, so a
missing fact can never ship silently as a blank or an invented value.

```ts
instituteCode: TODO('Q3: Institute Code, format PR27xxxxxx'),   // ← not known yet
phonePrimary: '9503264747',                                      // ← confirmed, from pamphlet
```

To see what is still missing:

```bash
npm run check:todos
```

---

## Commands

| Command | What it does |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server at `localhost:4321` |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Preview the production build |
| `npm run check:todos` | List every fact the college still owes us |

---

## What is confirmed vs. what is missing

### ✅ Confirmed (from the institute pamphlet and the DVET booklet)

- Institute name in Marathi: **डेक्सन आय.टी.आय., अकोला** → English **DEKSON** (no trailing S)
- Run by **Shri Akola Gujarati Samaj**
- Location: **Waghulgaon, Tal. & Dist. Akola**
- **NCVT approved**
- Four trades: Solar Technician (Electrical), Electrician, COPA — all 10th pass; **Welder — 8th pass**
- Phones: 9503264747 (Krunal More), 9422893450 (Rajendra Ladkhedkar)
- Admission via **admission.dvet.gov.in**, ITI Admission 2026
- **20% institute-level quota** per trade (DVET Mahiti Pustika Bhag-2, §4.1)
- Post-Round-5 vacancies also fill at institute level (§4.2)
- Portal registration + application fee mandatory even for institute-level seats (§4.4)
- Facilities: classrooms, computer lab, library, auditorium, seminar hall, reception, staff room,
  drinking water, separate washrooms, canteen, parking, CCTV, guard, ramp, first aid, fire safety
- **No hostel.** Campus fully constructed. Principal appointed.
- **No photographs of any person** are used anywhere on this site — a deliberate decision.

### ❌ Still needed — see `docs/06-PRIORITY-ANSWERS.md`

Run `npm run check:todos` for the live list. The blockers are:

1. **Institute Code** (`PR27xxxxxx`) — without it no student can select DEKSON in their option form
2. Full registered name
3. Duration + seats per trade
4. Fee per trade
5. Current admission status / final deadline
6. Address with PIN, Google Maps link, email, office hours
7. Principal & Chairman names + messages
8. Samaj founding year and its other institutions
9. Grievance + Anti-Ragging officer contacts
10. Domain name

**Plus 6 photographs** — every trade page currently shows an honest "photographs will be added shortly"
placeholder instead of a workshop image. No stock photos are used.

---

## Editorial rules baked into this site

These are not style preferences. They protect the institute.

1. **No approval claim appears without a certificate we have seen.** Currently only "NCVT Approved",
   which is on the pamphlet.
2. **No placement statistics, packages, or "students placed" figures.** The first batch has not
   graduated. The Careers section is written in future tense, as a commitment.
3. **No student, alumni or recruiter testimonials.** None exist yet.
4. **No stock photography of workshops, machines or students.** If we don't have a real photo, the
   page says so and invites a campus visit.
5. **No photographs of any person.**
6. **No enquiry form until a handler exists and a named person checks it.** A form that silently drops
   leads is worse than no form. Call and WhatsApp buttons convert better with this audience anyway.

---

## Architecture — built to grow without a rewrite

```
src/
  config/site.ts       ← every unknown fact, in one place
  content/trades/      ← one .md per trade; add a trade = add a file
  content.config.ts    ← typed schema; nulls are allowed and render honestly
  layouts/Base.astro   ← header, footer, sticky mobile Call/WhatsApp bar
  components/Fact.astro← renders a value, or a red "NEEDED" badge
  pages/               ← home, admissions, trades, about, contact, faq, privacy
```

When the admission portal phase arrives:

- `functions/api/enquiry.ts` → Cloudflare Function for the enquiry form
- Content collections swap to a CMS or database without touching templates
- Cloudflare D1 / KV are on the same free tier for student login, results, fee payment

Nothing here needs to be thrown away.

---

## Deploying (Cloudflare Pages)

1. Push this folder to a **private GitHub repo owned by the institute's account** — never a personal one.
2. Cloudflare Pages → Create project → connect the repo.
3. Build command `npm run build`, output directory `dist`.
4. Add the custom domain once purchased. SSL is automatic and free.

⚠️ **The domain, GitHub org, Cloudflare account and Google account must all be registered to the
institute.** If a developer holds them personally and leaves, the institute loses its website.

---

## Before launch — checklist

- [ ] `npm run check:todos` returns nothing
- [ ] Institute Code verified against the DVET portal listing
- [ ] Approval wording matches the certificate exactly
- [ ] 6 workshop/classroom photos added, `image:` set in each trade `.md`
- [ ] `site` set in `astro.config.mjs` once the domain is confirmed
- [ ] Google Business Profile claimed and photos uploaded *(do this first — it works before the site does)*
- [ ] Google Search Console + Analytics connected
