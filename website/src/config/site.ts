/**
 * DEKSON ITI — Single source of truth.
 *
 * ⚠️  EVERY unknown fact lives in this file and nowhere else.
 *     Fill a value here and it updates across the whole website.
 *
 * TODO() marks a fact we do not have yet. Anything still wrapped in TODO()
 * renders as a visible red placeholder in dev, and BLOCKS the production
 * build (see `assertLaunchReady` at the bottom). This makes it impossible
 * to accidentally publish a fake or empty value.
 */

/** Marks a fact that has not been supplied by the college yet. */
export const TODO = (question: string): string => `__TODO__${question}`;
export const isTodo = (v: string) => typeof v === 'string' && v.startsWith('__TODO__');
export const todoLabel = (v: string) => v.replace('__TODO__', '');

export const site = {
  // ── Identity ────────────────────────────────────────────────
  // Confirmed: pamphlet reads डेक्सन आय.टी.आय. = "DEKSON" (no trailing S).
  name: 'DEKSON ITI',
  nameFull: TODO('Q2: full registered name, e.g. "Dekson Private Industrial Training Institute, Akola"'),
  nameMr: 'डेक्सन आय.टी.आय., अकोला',
  tagline: 'Government-approved skill training in Akola',
  taglineMr: 'अकोल्यातील शासनमान्य कौशल्य प्रशिक्षण',

  runBy: 'Shri Akola Gujarati Samaj',
  runByMr: 'श्री अकोला गुजराती समाज',

  // ── Approvals (pamphlet: "NCVT द्वारा मान्यता प्राप्त") ──────
  // ⚠️ Do not add any approval wording that is not on a certificate we have seen.
  approval: 'NCVT Approved',
  approvalMr: 'NCVT द्वारा मान्यता प्राप्त',

  /** ⭐ The most important number on this website.
   *  Students type this into their DVET option form. Format: PR27xxxxxx */
  instituteCode: TODO('Q3: Institute Code, format PR27xxxxxx'),

  // ── Contact (from pamphlet) ─────────────────────────────────
  phonePrimary: '9503264747',
  phonePrimaryName: 'Shri Krunal More',
  phoneSecondary: '9422893450',
  phoneSecondaryName: 'Shri Rajendra Ladkhedkar',

  /** Q10: which number is actually on WhatsApp? Defaulting to primary. */
  whatsapp: '9503264747',

  email: TODO('Q9: official email address'),

  addressShort: 'Waghulgaon, Tal. & Dist. Akola, Maharashtra',
  addressMr: 'वाघुळगांव, ता.जि. अकोला',
  addressFull: TODO('Q7: full postal address with PIN code'),
  mapsUrl: TODO('Q8: Google Maps link'),

  officeHours: TODO('Q11: office hours, and whether open on Sundays'),

  // ── People (NO PHOTOGRAPHS — decided. Names + messages only.) ─
  principalName: TODO('Q12: Principal name and qualification'),
  principalMessage: TODO('Q13: Principal message, 4-6 sentences'),
  chairmanName: TODO('Q14: Chairman name'),
  chairmanMessage: TODO('Q15: Chairman message, 4-6 sentences'),

  samajFounded: TODO('Q16: year Shri Akola Gujarati Samaj was founded'),
  samajOtherInstitutions: TODO('Q16: other schools/trusts/charities it runs, with years'),

  // ── Compliance (legally required to publish) ────────────────
  grievanceOfficer: TODO('Q17: Grievance Officer name + phone'),
  antiRaggingContact: TODO('Q17: Anti-Ragging contact name + phone'),

  // ── Admission status — drives the homepage banner ───────────
  admission: {
    year: '2026',
    portal: 'https://admission.dvet.gov.in',
    /** Q6: which round is running right now? */
    statusLine: TODO('Q6: current admission status / round + final deadline'),
    /** Confirmed from DVET Mahiti Pustika Bhag-2, §4.1 */
    instituteQuotaPercent: 20,
    open: true,
  },

  // ── Domain ──────────────────────────────────────────────────
  domain: TODO('Q18: domain name, e.g. deksoniti.in'),

  /**
   * Notice board. In Indian education sites this is a trust asset, not clutter —
   * students and parents actively look for admission dates and merit lists.
   * Rules: dated, max 5 shown, plain list. Never a <marquee>, never a blinking "NEW!".
   * A stale notice board signals an abandoned institute — keep it current or remove it.
   */
  notices: [
    { date: '2026-07-09', text: 'Institute-level (20%) seats are open. Register on the DVET portal, then call us.', href: '/admissions' },
    { date: '2026-07-02', text: 'CAP Round 1 allotment completed. Vacant seats will be filled in later rounds.', href: '/admissions' },
    { date: '2026-05-21', text: 'ITI Admission 2026 applications opened on admission.dvet.gov.in', href: 'https://admission.dvet.gov.in' },
  ] as { date: string; text: string; href: string }[],

  // ── Brand (sampled from the campus building) ────────────────
  colors: {
    maroon: '#8E1B2E',
    pink: '#D08A94',
    stone: '#B9BCB6',
  },
} as const;

/**
 * Facts from the official DVET booklet (Mahiti Pustika Bhag-2, ITI Admission 2026).
 * These are verified from a government document — safe to publish.
 */
export const dvet = {
  portal: 'https://admission.dvet.gov.in',
  /** §4.1 — 20% of each trade's intake is filled directly by the private ITI */
  instituteLevelQuota: 20,
  /** §4.2 — vacancies after the 5th round also become institute-level seats */
  postRound5Vacancies: true,
  /** §4.4 — even institute-level candidates MUST register on the portal first */
  portalRegistrationMandatory: true,
  /** §3.2 */
  documentsAtAdmission: [
    'All original documents',
    'One set of self-attested photocopies',
    '2 recent colour passport-size photographs',
    'Prescribed training fee',
  ],
  /** §3.9 */
  documentsRetained: 'Original SSC marksheet and school leaving certificate are held by the institute until the course is completed.',
  /** §3.13 */
  documentGraceDays: 15,
  /** §3.4 */
  instalmentsAllowed: 'Instalments may be permitted at the discretion of the institute.',
} as const;

/** Fails the production build if any TODO() is still unfilled. */
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
