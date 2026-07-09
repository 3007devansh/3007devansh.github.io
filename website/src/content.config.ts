import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * "Courses", not "Trades".
 * A 10th-pass student in Akola searches for a *course*. "Trade" is NCVT's
 * internal vocabulary — we keep it only where it aids search matching, never
 * as a navigation label.
 */
const courses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/courses' }),
  schema: z.object({
    name: z.string(),
    nameMr: z.string(),
    shortName: z.string(),
    order: z.number(),
    icon: z.string(),
    /** Confirmed from the institute pamphlet */
    eligibility: z.string(),
    eligibilityMr: z.string(),
    /** null until the college confirms. Never guess — renders as "Please call". */
    duration: z.string().nullable().default(null),
    seats: z.number().nullable().default(null),
    annualFee: z.string().nullable().default(null),
    jobs: z.array(z.string()).default([]),
    /** Real workshop photo. null = honest placeholder, never a stock image. */
    image: z.string().nullable().default(null),
    highlight: z.string().nullable().default(null),
    summary: z.string(),
  }),
});

export const collections = { courses };
