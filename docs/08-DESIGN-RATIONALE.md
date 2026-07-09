# DEKSON ITI — Design Rationale

Why the website looks and behaves the way it does. Every decision below is traceable to research on
this specific audience, not to general design taste.

---

## Who we are actually designing for

A **10th-pass student in a village near Akola**, on a ₹8,000 Android phone, on patchy 4G — and,
standing behind them, a **cautious parent** who has never sent a child to a private institute and is
quietly asking *"is this place real, or will they take my money?"*

Almost every decision follows from those two people.

---

## Three places we deliberately ignore Western UX orthodoxy

### 1. The phone number outranks the form

Standard CRO says: capture the lead in a form, de-emphasise the phone. **Here that is wrong.**

Inbound calls convert roughly **10–15× better** than form submissions, and typing on a cheap Android
keyboard is a genuine barrier. WhatsApp carries **90–98% open rates** and this demographic already
lives inside it.

**What we built:** a sticky bottom bar on mobile with **Call** and **WhatsApp**, 56px tall,
thumb-reachable, present on every page. Repeated as primary buttons in the hero and at the foot of
every page.

**What we deliberately did NOT build:** an enquiry form. Not yet — see "What's missing" below.

### 2. An information-forward hero beats a minimalist slogan

Modern design instinct says: one big headline, lots of whitespace, one CTA. **For a cautious parent
verifying an unknown institute, whitespace is not reassurance — evidence is.**

**Above the fold, before any scroll:**
- 🏛️ NCVT Approved badge (in a dark utility strip, the first thing rendered)
- Phone number, top-right, always visible
- Who runs it — Shri Akola Gujarati Samaj
- **Eligibility answered immediately** — "After 10th: Electrician, COPA, Solar" / "After 8th: Welder"
- Call, WhatsApp, and View Courses

### 3. The notice board stays

Western minimalism says: kill the announcements widget, it's clutter. **In Indian education it is a
trust asset** — students and parents actively hunt for admission dates, merit lists and round
deadlines. A *missing* notice board reads as an inactive institute.

**But the implementation is where these sites die.** So: a plain, dated list, maximum 5 items,
newest first. **No `<marquee>`. No blinking "NEW!" GIF.** Those two elements are precisely what makes
an Indian college site look abandoned in 2005.

> ⚠️ A stale notice board is worse than none. If nobody will update it, delete it.

---

## Language: "Courses", not "Trades"

You asked for this, and the research independently confirms it.

- Inside NCVT, "trade" is the official unit. It appears on government portals.
- But students and parents search **"ITI courses after 10th"** — never "ITI trades".
- In Marathi, the concept maps to *व्यवसाय अभ्यासक्रम*. The English word "trade" (→ व्यवसाय,
  meaning occupation/business) is **not an intuitive leap** for a village student.
- What actually communicates is **the job title**: Electrician, वेल्डर, Solar Technician.

**Applied:**

| Instead of | We say |
|---|---|
| "Trades" (nav) | **Courses** |
| "Trade: Electrician" | **Become an Electrician** |
| "Trade Code" | *(removed from the public page)* |
| "Sanctioned intake" | **Seats** |
| "Eligibility criteria" | **Who can join** |

The word "trade" survives in exactly two places: naturally inside body copy (it aids search matching
for Hinglish queries like *"iti me kaun sa trade acha hai"*), and in the schema field
`NCVT National Trade Certificate`, which is the certificate's actual legal name.

**Every course card leads with the outcome — "Become a Welder" — not the category.**

---

## Trust architecture for an institute with no history

You have no alumni, no placements, no results. Anything we invent would be discovered. So the site
substitutes **verifiable proof** for track record, in this order:

1. **Government recognition** — NCVT badge in the top strip, sitewide. Plus: *"you can verify our
   approval yourself before you join"*. Inviting verification is itself a trust signal; scam sites
   never do it.
2. **The Institute Code**, displayed large in its own card. It is simultaneously the most useful fact
   on the site and proof that a government portal lists you.
3. **Real photographs of the real campus.** New construction is an *asset* here — we lead with it.
4. **The Samaj's history** — borrowed credibility, entirely legitimate.
5. **Radical honesty**, used as a conversion tool. The About page opens with *"We are a new
   institute… we have no past results and we will not pretend otherwise."*

### The anti-fraud block

The Admissions page carries a red-bordered warning that DEKSON works through **no agents**, that
nobody may collect money on its behalf, and that students should always take a receipt.

This costs nothing, protects families from a real and common scam, and paradoxically increases trust
— an institute willing to warn you about fraud is not running one.

---

## What we refused to do

These are guardrails, enforced in code, not style preferences:

| Refused | Why |
|---|---|
| Stock photo of a workshop | The course pages say *"we would rather show you nothing than show you a picture of someone else's workshop"* and invite a campus visit instead. |
| Invented duration / seats / fees | Renders as **"Please call"**, never a plausible guess. |
| Placement statistics, salary claims | First batch hasn't graduated. Publishing figures would be false advertising. |
| Testimonials | No students, no alumni. None exist. |
| Photographs of people | Your decision — respected throughout. |
| An enquiry form | See below. |

Missing facts render as a **loud red "NEEDED" badge** on the page, and `npm run check:todos` lists
them. A blank or invented fact **cannot ship silently**.

---

## Visual language

**Colour** is sampled from the actual building — maroon `#8E1B2E` from the signage, dusty pink from
the facade. Maroon carries authority and institutional seriousness in Indian education, and it is
already the institute's real-world identity.

- Maroon-900 utility strip → institutional authority
- Maroon-700 → primary actions
- Green `#25D366` → WhatsApp only (never decorative — colour carries meaning)
- Green-700 → the "you can still get admission" message

**Type**: Latin at 16px minimum. **Devanagari at 17px with 1.75 line-height** — matras sit above and
below the baseline and *clip* at Latin leading. Reusing the English 1.4 line-height for Marathi is a
rendering bug, not a stylistic choice. `Noto Sans Devanagari` is loaded as a webfont because cheap
Androids render the system Devanagari font inconsistently.

**Layout**: mobile-first, single column, generous tap targets. Cards over dense tables — a table of
course data is unreadable on a 6-inch screen.

---

## Performance

The target is **LCP under 2 seconds on 4G on a low-end Android** — not a Lighthouse score on a laptop.
Over 3 seconds loses 30–50% of Indian mobile traffic.

| Measure | Result |
|---|---|
| Homepage HTML | **28 KB** |
| Hero image (mobile, 640px WebP) | **67 KB** |
| JavaScript shipped | **0 bytes** — Astro ships no JS by default |
| Hero image | `loading=eager` + `fetchpriority=high` (it is the LCP element) |
| All other images | `loading=lazy` |
| FAQ accordion | Native `<details>` — zero JS |
| Source photos | 4–8 MB → resized, WebP, `srcset` at 640/1024/1600 |

---

## Accessibility (WCAG 2.2 AA)

Not decoration — ITIs enrol students with disabilities under reservation, and the campus has ramp
access. The website should match the building.

- Semantic landmarks, one `<h1>` per page, skip-to-content link
- Visible 3px focus ring, `:focus-visible`, 2px offset
- 48×48px minimum tap targets on touch devices
- `aria-current="page"` on active navigation
- Every image has descriptive alt text; decorative icons are `aria-hidden`
- `prefers-reduced-motion` respected
- Colour never carries meaning alone
- **⚠️ Open:** the brand maroon-on-pink pairing likely **fails 4.5:1**. It is used only as maroon-on-white
  or white-on-maroon in the build. Needs a contrast audit before launch.

---

## What is deliberately missing

**The enquiry form.** It needs a working handler, spam protection, and — critically — **a named person
who checks it**. A form that silently drops leads is worse than no form. And with this audience, Call
and WhatsApp will outconvert it roughly 5:1 regardless.

When it ships: a Cloudflare Function → Google Sheet + WhatsApp notification, Turnstile for spam,
**maximum 6 fields** (each extra field costs 5–12% of submissions in India).

**The prospectus download.** You have no prospectus PDF yet. It is the ideal low-commitment CTA —
research shows brochure-download-first converts better than application-first, because families read
before they apply. **Producing a 2-page PDF is a high-value, low-effort task.**

**Marathi routes.** Typography and bilingual labels are in. Full `/mr/` routes with `hreflang` are
phase 2 — and must be **localised by a human, not machine-translated**.

---

## Conversion paths, by intent

| The user wants to | We give them |
|---|---|
| Ask a quick question | Sticky WhatsApp button, every page |
| Talk to a person | Sticky Call button + phone in header + two named contacts by name |
| Understand a course | Outcome-led card → course page → jobs list |
| Know if they qualify | Eligibility above the fold, on every card, on every course page |
| Know the fee | Honest "Please call" until you give us the number |
| Apply | Institute Code, displayed large, + 6-step DVET walkthrough |
| Check we're real | NCVT badge, "verify us yourself", real photos, campus-visit invitation |
| Visit | "You are welcome any working day" |

Every page ends in a call to action. No page is a dead end.
