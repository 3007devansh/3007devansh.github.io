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
  instituteCode: 'PR27001081',

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
    'Dekson Private Industrial Training Institute, Babhulgaon, Near College of Engineering and Technology, Akola, Maharashtra 444104',
  pincode: '444104',

  /** Exact campus coordinates (supplied by the college). */
  geo: { lat: 20.707502, lng: 77.094792 },
  /** View the campus on Google Maps. */
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=20.707502,77.094792',
  /** One-tap turn-by-turn navigation to the campus. */
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=20.707502,77.094792',
  /** Keyless embed (no API key, no tracking cookies until the user interacts). */
  mapEmbedUrl: 'https://www.google.com/maps?q=20.707502,77.094792&z=16&output=embed',

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

  /** The name honours the principal donor family. Woven into the About story. */
  nameOrigin: 'Deokaran Keshavji Shah & Sons',

  /** The visionary behind the institute — painted portrait + statue on About. */
  founder: {
    name: 'Shri Sureshkumar Deokaran Shah',
    title: 'The visionary behind Dekson ITI',
    portrait: 'founder-portrait',
    statue: 'founder-statue',
    /** His belief, in his own words (Hindi). */
    belief: 'जहाँ सरस्वती का वास होता है, वहीं लक्ष्मी का निवास होता है।',
    beliefEn: 'Where the goddess of knowledge dwells, prosperity comes to reside.',
    mission: 'Education to all',
  },

  /** Site developer — credited in the footer. */
  developer: {
    name: 'DEVANSH SHAH',
    phone: '6353338281',
  },

  /**
   * Analytics — paste the IDs once you create them, then redeploy. Empty =
   * nothing loads (no third-party scripts, no cookie banner needed).
   *   ga4     — Google Analytics 4 Measurement ID, e.g. 'G-XXXXXXXXXX'
   *   clarity — Microsoft Clarity project ID (free session recordings)
   */
  analytics: {
    ga4: '',
    clarity: '',
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
  /** ITI Admission 2026-27 — required from every student (from the notice). */
  documentsAll: [
    '10th (SSC) marksheet',
    'School Leaving Certificate (LC / TC)',
    'Aadhaar card',
    'Domicile / Nationality certificate',
    'Income certificate',
    'Bank passbook (copy of the first page)',
    '2 passport-size photographs',
  ],
  /** Category-specific documents (from the notice). */
  documentsByCategory: [
    { cat: 'Open (General)', items: ['EWS certificate (if applicable)'] },
    { cat: 'SC / ST', items: ['Caste certificate'] },
    { cat: 'OBC / VJ / DT(A) / NT-B / NT-C / NT-D / SBC', items: ['Caste certificate', 'Non-Creamy Layer certificate'] },
    { cat: 'Minority', items: ['Minority certificate (Muslim, Christian, Sikh, Buddhist, Jain or Parsi)'] },
  ] as { cat: string; items: string[] }[],
  /** Notes on the admission notice. */
  documentNotes: [
    'All original documents must be submitted to the institute at the time of admission.',
    'Keep two photocopies of every original document.',
    'The income certificate and bank passbook are required for scholarship schemes.',
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
