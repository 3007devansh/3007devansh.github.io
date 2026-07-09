# DEKSON ITI — SEO & Digital Visibility Strategy

**Prepared:** July 2026 · **Audience:** project team + management
**Constraint:** brand-new domain, zero authority, zero backlinks. Admission cycle is live *now*.

---

## The single most important thing in this document

> **Your website will not bring you admissions this year. Google Business Profile will.**

A new domain takes **6–12 months** to rank organically. The **Maps / local pack** ranks in **1–4 weeks**.
For a query like *"ITI near me"*, proximity is roughly **55%** of the ranking signal — and your campus is
physically in Waghulgaon, where your students are.

**Do the Google Business Profile today. Do not wait for the website.**

---

## 1. Two corrections to conventional SEO advice

These matter because acting on outdated advice will waste your time.

### ❌ FAQ rich results are dead
Google **discontinued FAQPage rich results on 7 May 2026**. The FAQ accordion no longer appears in
search results. The site still ships `FAQPage` markup (Google parses it for understanding, other
engines use it), but **no part of this strategy depends on it.**

### ❌ Single-course rich results are dead
The `Course` "Course Info" rich result was **retired in June 2025**. What still works is the
**Course *List* carousel** — which is what we implemented on `/courses`.

### ✅ What still produces results in 2026
| Schema | Where | Status |
|---|---|---|
| `EducationalOrganization` + `LocalBusiness` | Every page | ✅ Implemented |
| `Course` list / carousel | `/courses` + homepage | ✅ Implemented |
| `BreadcrumbList` | Courses, FAQ | ✅ Implemented |
| `AggregateRating` | Later — only when reviews are **real** | ⏳ After first reviews |

> ⚠️ We deliberately used `EducationalOrganization`, **not** `CollegeOrUniversity`. An ITI is not a
> degree-granting college; using that type misrepresents the entity to Google.

---

## 2. Google Business Profile — your highest-ROI action

GBP signals carry roughly **32% of local ranking weight**, and the **primary category is the single
biggest controllable factor**.

### Categories

| Field | Value |
|---|---|
| **Primary category** | **Vocational school** |
| Secondary | Technical school · Computer training school · Educational institution · Training centre |

> 🚫 **Do not select "College" or "University."** Those categories are accreditation-gated and
> misrepresent an ITI.

### Setup checklist

- [ ] Claim and verify the listing (postcard/phone verification takes days — start now)
- [ ] Name exactly as registered — no keyword stuffing (`DEKSON ITI Akola Best ITI` will get you suspended)
- [ ] Exact address + PIN, service area = Akola + surrounding talukas
- [ ] Phone `9503264747`, WhatsApp, website URL, hours (mark Sunday open during admission season)
- [ ] Upload the **enhanced campus photos** already in `/edit` — they carry GPS EXIF
- [ ] Add all four courses under **Products/Services** with descriptions
- [ ] **Seed the Q&A yourself**: fees, eligibility, DVET process, hostel, Institute Code
- [ ] **Post weekly** during admission season — round dates, seat availability, deadlines

### Reviews — the compounding asset

Reviews are **16–20% of local ranking weight**, and there is a visible momentum threshold around
**10 reviews**. Ask every admitted student and parent. Respond to every one.

> ⚠️ Never buy reviews and never post them yourself. Google detects it, and a suspension during
> admission season would be catastrophic.

---

## 3. Keywords — what to fight for, and what to ignore

### 🚫 Unwinnable — do not target
`iti admission 2026` · `iti courses` · `copa course` · `electrician course`

These are owned by **ncvtmis.gov.in**, **dvet.gov.in**, Careers360, Shiksha, CollegeDunia — government
domains and DA-80+ aggregators. A zero-authority domain will not outrank them. Chasing these wastes
every rupee and hour you spend.

### ✅ Winnable — target these

**Hyperlocal (primary focus)**
- `iti in akola` · `iti college akola` · `private iti akola` · `best iti in akola`
- `electrician iti akola` · `welder iti akola` · `copa akola`
- `iti near me` *(won via Maps, not the website)*

**Branded — you must own 100% of these**
- `dekson iti` · `dekson institute akola` · `dekson iti akola`
- ⚠️ Also target the misspelling **`deksons iti`** — your building sign says DEKSONS. People will search both.

**Genuinely open — low competition**
- `solar technician course akola` · `solar technician iti maharashtra`
  → A newer course with thin content supply. **This is your easiest organic win.**

**Long-tail admission intent**
- `how to fill iti admission form maharashtra 2026`
- `iti admission documents required maharashtra`
- `iti admission last date maharashtra`
- `copa vs electrician which is better`
- `iti after 8th pass` ← **your Welder differentiator; almost nobody else can answer this**

**Marathi / Devanagari** *(these rank — a live Marathi ITI content ecosystem exists)*
- `अकोला आयटीआय कॉलेज` · `आयटीआय प्रवेश २०२६` · `ITI प्रवेश आवश्यक कागदपत्रे`

**Hinglish** *(very common in real search boxes)*
- `iti kaise kare` · `iti admission kaise bhare` · `iti me kaun sa trade acha hai`

> 📌 **Note the tension:** users *search* "trade" in Hinglish, but a rural 10th-pass student does not
> reliably *understand* the English word "trade." Resolution: navigation and headings say
> **"Courses"**; the word "trade" appears naturally inside body copy and the `NCVT National Trade
> Certificate` schema field, where it aids matching without confusing anyone.

### ⚠️ Validation caveat
These phrasings are evidence-based, but **India-specific search volumes were not verifiable** from
this environment. Before committing content budget, validate in **Google Keyword Planner (India,
Marathi)** and, once live, **Search Console query data**.

---

## 4. Two spellings — a real SEO problem

The pamphlet says **डेक्सन (DEKSON)**. The building sign says **DEKSONS**.

This splits your brand searches, confuses Google's entity resolution, and breaks NAP consistency
across directories — a genuine local-ranking input.

**Required action:**
1. Settle the spelling against the registration certificate. **This blocks the domain purchase.**
2. Whichever you pick, add the other as `alternateName` in schema *(already done in `Seo.astro`)*.
3. Use **one identical NAP string everywhere** — website, GBP, JustDial, Sulekha, pamphlets.

---

## 5. Local citations & directories

In India these do double duty: they build citations **and generate enquiries directly**.

| Priority | Platform | Why |
|---|---|---|
| 🔴 Now | **JustDial** | Highest-traffic India directory. Will produce phone calls. |
| 🔴 Now | **Sulekha** | Strong for education services. |
| 🟠 Week 1 | **Shiksha.com**, **CollegeDunia** | Education-specific citations + referral traffic |
| 🟠 Week 1 | **UrbanPro** | Education lead generation |
| 🟡 Later | ITI-specific aggregators, IndiaMART | Additional citations |

**NAP discipline:** lock one canonical string — exact legal name, full address with PIN, one primary
phone — in a document, and paste it identically everywhere. `Pvt. Ltd.` vs nothing, `St.` vs `Street`
— these inconsistencies measurably hurt.

---

## 6. Bilingual — English + Marathi

**Recommended: yes.** Over 70% of new Indian internet users prefer regional-language content, Marathi
ITI content demonstrably ranks, and **Marathi competition on hyperlocal ITI terms is thinner than
English**. It also differentiates you from the English-only aggregators.

**Implementation (phase 2):**
- Separate URLs: `/en/…` and `/mr/…`
- Reciprocal `hreflang`: `en-IN`, `mr-IN`, plus `x-default`
- **Localize, don't machine-translate.** Machine-translated Marathi reads badly and underperforms.
- Translate the **decision-critical content fully**: course names, eligibility, fees, admission steps,
  documents, notices. The rest can stay English.

**Already implemented:**
- `Noto Sans Devanagari` webfont loaded — cheap Androids render the system Devanagari font inconsistently
- Marathi body text at **17px / 1.75 line-height** — matras clip at Latin leading (this is why
  reusing the English 1.4 line-height is a bug, not a preference)
- Language switcher labelled **मराठी**, not a flag *(a flag maps to a country, not a language)*

---

## 7. Realistic timeline

| Period | What happens |
|---|---|
| **Weeks 1–4** | GBP verified → "ITI near me" visibility near campus. **First calls arrive.** |
| Months 1–2 | Site indexed. Essentially no organic rankings. This is normal. |
| Months 2–3 | Branded terms rank. Long-tail appears at positions 20–50. |
| Months 3–6 | Hyperlocal terms (`iti in akola`) begin ranking. First real organic enquiries. |
| Months 6–12 | Mid-funnel terms reach top 20. Organic ROI becomes visible. |
| Never | National admission keywords. Don't try. |

### Bridge channels while SEO matures — the admission cycle will not wait

1. **GBP + Maps** — fastest organic channel
2. **JustDial / Sulekha** — leads independent of domain authority
3. **Google Search Ads** on hyperlocal + branded terms, concentrated **May–July** (the DVET window)
4. **Meta ads in Marathi**, geo-fenced to Akola + talukas — strongest reach for this demographic
5. **YouTube Shorts in Marathi** — campus tour, "which course to pick", "how to fill the DVET form"
6. **WhatsApp click-to-chat** everywhere
7. **QR codes on pamphlets and school banners** → drive to WhatsApp and GBP reviews

> 💡 The pamphlet is already printed and circulating. **Add a QR code to the next print run.**

---

## 8. Technical SEO — status

| Item | Status |
|---|---|
| Semantic HTML, one `<h1>` per page | ✅ |
| Canonical URLs | ✅ |
| `sitemap-index.xml` + `robots.txt` | ✅ |
| Open Graph + Twitter cards | ✅ |
| `EducationalOrganization` + `LocalBusiness` schema | ✅ |
| Course carousel schema | ✅ |
| Breadcrumb schema | ✅ |
| WebP responsive images, `srcset` | ✅ |
| Hero eager + `fetchpriority=high`; everything else lazy | ✅ |
| Mobile-first, 48px tap targets, sticky Call/WhatsApp | ✅ |
| `geo.region` / `geo.placename` meta | ✅ |
| **`site` URL in `astro.config.mjs`** | ⏳ Placeholder — set on domain purchase |
| hreflang (en-IN / mr-IN) | ⏳ Phase 2 |
| Self-hosted Devanagari font | ⏳ Currently a Google Fonts request |
| Google Search Console + GA4 + Clarity | ⏳ Day 1 after launch |
| **Conversion tracking** on Call / WhatsApp / prospectus | ⏳ **Do this — otherwise you cannot tell if the site works** |

---

## 9. Content plan — what to publish, in order

Each of these targets a winnable long-tail query and answers a real question.

1. **How to fill the DVET admission form** — step by step, with screenshots *(highest intent)*
2. **Which course should I choose? COPA vs Electrician vs Welder vs Solar**
3. **ITI after 8th pass — what are my options?** ← almost nobody else can answer this
4. **Documents required for ITI admission in Maharashtra**
5. **What is the institute-level 20% quota, and how do I get one of those seats?**
6. **Solar Technician — jobs and scope in Maharashtra** *(your easiest ranking win)*
7. Marathi versions of items 1–4

Publish these as pages, then reuse each one as a **GBP post** and a **Marathi YouTube Short**.

---

## 10. If you only do five things

1. **Claim and fully optimise the Google Business Profile today.** Primary category: Vocational school.
2. **Settle the DEKSON / DEKSONS spelling**, then buy the domain and lock one NAP string.
3. **Get the Institute Code onto the site.** Without it, no student can select you in the option form.
4. **List on JustDial and Sulekha this week.** They generate calls regardless of your domain.
5. **Turn on conversion tracking** for Call, WhatsApp and prospectus downloads before you spend a rupee on ads.

---

*Sources: Google Search Central (structured data deprecations, May 2026 & June 2025); Whitespark /
local ranking factor studies 2026; DVET Maharashtra Mahiti Pustika Bhag-2, ITI Admission 2026;
Maharashtra DVET admission calendar (applications opened ~21 May 2026, CAP Round 1 allotment ~2 July 2026).*
