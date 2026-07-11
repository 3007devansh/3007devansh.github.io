/**
 * Dekson ITI — Single source of truth.
 *
 * ⚠️  EVERY unknown fact lives in this file and nowhere else.
 *     Fill a value here and it updates across the whole website.
 *
 * TODO() marks a fact we do not have yet. Anything still wrapped in TODO()
 * renders as a visible red placeholder in dev. Optional sections hide
 * themselves when their fact is a TODO (see isTodo checks in the pages).
 */

/** Marks a fact that has not been supplied by the college yet. */
export const TODO = (question: string): string => `__TODO__${question}`;
export const isTodo = (v: string) => typeof v === 'string' && v.startsWith('__TODO__');
export const todoLabel = (v: string) => v.replace('__TODO__', '');

export const site = {
  // ── Identity ────────────────────────────────────────────────
  // The ITI college is "Dekson Private Industrial Training Institute" (no S).
  // The wider campus/brand is "Deksons Institute" (with S) — that is the name
  // on the building sign and the Google listing. The website is for the ITI,
  // so we brand it "Dekson ITI" and carry both spellings in the schema.
  name: 'Dekson ITI',
  nameFull: 'Dekson Private Industrial Training Institute, Akola',
  campusName: 'Deksons Institute',
  nameMr: 'डेक्सन आय.टी.आय., अकोला',
  tagline: 'Government-approved skill training in Akola',
  taglineMr: 'अकोल्यातील शासनमान्य कौशल्य प्रशिक्षण',

  runBy: 'Shri Akola Gujarati Samaj Trust',
  runByMr: 'श्री अकोला गुजराती समाज',

  // ── Approvals (pamphlet: "DGT/NCVT द्वारा मान्यता प्राप्त") ──
  approval: 'DGT / NCVT Approved',
  approvalMr: 'DGT/NCVT द्वारा मान्यता प्राप्त',

  /** ⭐ The most important number on this website.
   *  Students type this into their DVET option form. */
  instituteCode: 'PR270001081',

  // ── Contact ─────────────────────────────────────────────────
  phonePrimary: '9503264747',
  phonePrimaryName: 'Shri Kunal More',
  phoneSecondary: '8830029647',
  phoneSecondaryName: 'Shri Ashutosh Akhare',

  whatsapp: '9503264747',

  email: 'deksoniti@gmail.com',

  addressShort: 'Babhulgaon, Near Shivaji Engg. College, Akola, Maharashtra',
  addressMr: 'बाभुळगांव, शिवाजी अभियांत्रिकी महाविद्यालयाजवळ, ता.जि. अकोला',
  addressFull:
    'Dekson Private Industrial Training Institute, Babhulgaon, Near Shivaji Engineering College, Akola, Maharashtra 444104',
  pincode: '444104',
  mapsUrl: TODO('Google Maps link — create/claim the Business Profile, then paste the link'),

  officeHours:
    'Monday to Saturday, 10:00 am – 5:00 pm. During the admission season the office is also open on Sundays.',

  // ── People (NO PHOTOGRAPHS — decided. Names + messages only.) ─
  principalName: 'Mr. Rajendra M. Ladkhedkar',
  principalTitle: 'Principal',
  principalMessage:
    'Welcome to Dekson Private Industrial Training Institute. Affiliated with NCVT under DGT, Government of India, our institute offers quality skill training in Electrician, COPA, Welder, and Solar Technician (Electrical) trades. We are committed to developing skilled, confident, and industry-ready professionals through practical learning and excellence in technical education. I wish all our students success in their careers and future endeavours.',

  // Chairman's message not yet supplied — the About page hides this block until it is.
  chairmanName: TODO('Chairman / Trust President name'),
  chairmanMessage: TODO('Chairman message, 4-6 sentences'),

  /** The name honours the principal donor. Woven into the About story inline. */
  nameOrigin: 'Devkaran Keshavji Shah & Sons',

  /**
   * The visionary behind the institute. Shown on the About page now, with
   * placeholders until the assets arrive:
   *   photo   — a photo of his statue; save as /public/images/founder.jpg,
   *             then set `photo` to 'founder'.
   *   message — his thought / vision, in his words.
   */
  founder: {
    name: 'Suresh Devkaran Shah',
    title: 'The visionary behind Dekson ITI',
    photo: TODO('Statue photo of Suresh Devkaran Shah — save as /public/images/founder.jpg, then set to "founder"'),
    message: TODO('Suresh Devkaran Shah — his vision / thought, 3-5 sentences'),
  },

  samajFounded: '1967',
  samajOtherInstitutions:
    'Under its management the Trust runs G.S. Convent & Smt. L.D. Patel High School, Akola, and Smt. Maherbanu College of Science & Commerce, Akola.',

  // ── Compliance (legally required to publish) ────────────────
  grievanceOfficer: 'Mr. Kunal S. More — 9503264747',
  antiRaggingContact: 'Mr. Kunal S. More — 9503264747',

  // ── Admission status — drives the homepage banner ───────────
  admission: {
    year: '2026',
    portal: 'https://admission.dvet.gov.in',
    /** Positive framing: admissions are OPEN. Do not lead with "you're late". */
    statusLine: 'CAP Round 2 and Management Quota admissions are open now.',
    open: true,
  },

  // ── Domain ──────────────────────────────────────────────────
  domain: TODO('Domain name, e.g. deksoniti.in — confirm and purchase'),

  /**
   * Notice board. In Indian education sites this is a trust asset, not clutter.
   * Rules: dated, plain list. Never a <marquee>, never a blinking "NEW!".
   * Keep it current — a stale notice board signals an abandoned institute.
   */
  notices: [
    { date: '2026-07-10', text: 'Admissions are open now — CAP Round 2 and Management Quota seats available. Call or visit us.', href: '/admissions' },
    { date: '2026-07-10', text: 'Four courses on offer: Electrician, Solar Technician, COPA and Welder. Welder is open after 8th standard.', href: '/courses' },
    { date: '2026-05-21', text: 'ITI Admission 2026 applications are open on admission.dvet.gov.in', href: 'https://admission.dvet.gov.in' },
  ] as { date: string; text: string; href: string }[],

  // ── Brand (sampled from the campus building) ────────────────
  colors: {
    navy: '#2E2C6B',
    amber: '#F5A623',
    magenta: '#B0459A',
  },
} as const;

/**
 * How admission works, in plain terms. Verified against the DVET booklet
 * (Mahiti Pustika Bhag-2, ITI Admission 2026) but framed for students, not
 * as a "quota loophole". The message the institute wants: admissions are open,
 * come talk to us, we will help you through it.
 */
export const dvet = {
  portal: 'https://admission.dvet.gov.in',
  /** §3.2 — bring these to the institute */
  documentsAtAdmission: [
    'All original documents',
    'One set of self-attested photocopies',
    '2 recent colour passport-size photographs',
    'Prescribed training fee',
  ],
  /** §3.9 */
  documentsRetained:
    'Your original SSC marksheet and school leaving certificate are kept by the institute until you complete the course. All other originals are checked and returned to you at admission.',
  /** §3.13 */
  documentGraceDays: 15,
  /** §3.4 */
  instalmentsAllowed: 'Instalments may be allowed at the discretion of the institute.',
} as const;

/** Lists any TODO()s still unfilled (used by `npm run check:todos`). */
export function assertLaunchReady() {
  const unfilled: string[] = [];
  const walk = (obj: Record<string, unknown>, path = '') => {
    for (const [k, v] of Object.entries(obj)) {
      if (typeof v === 'string' && isTodo(v)) unfilled.push(`${path}${k} → ${todoLabel(v)}`);
      else if (v && typeof v === 'object') walk(v as Record<string, unknown>, `${path}${k}.`);
    }
  };
  walk(site as unknown as Record<string, unknown>);
  return unfilled;
}
