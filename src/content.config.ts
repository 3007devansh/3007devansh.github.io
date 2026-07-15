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
    /** DEKSON's OWN workshop photo. null = honest placeholder. Never a stock image. */
    image: z.string().nullable().default(null),
    /** Illustrative trade photo (licensed, captioned 'not DEKSON'). Credit must
     *  exist in src/config/credits.ts or the build throws. */
    illustration: z.boolean().default(false),
    highlight: z.string().nullable().default(null),
    summary: z.string(),
  }),
});

/**
 * Guides — SEO articles targeting the real queries candidates search
 * ("iti admission akola", "which iti course is best", "options after 10th").
 * They double as shareable content for WhatsApp / social.
 */
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    published: z.string(), // YYYY-MM-DD
    updated: z.string().optional(),
  }),
});

export const collections = { courses, guides };
