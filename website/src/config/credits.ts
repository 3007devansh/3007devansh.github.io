/**
 * Attribution for the course illustration photographs.
 *
 * ⚠️ These are ILLUSTRATIVE photographs of each trade, sourced from Wikimedia
 * Commons under licences permitting commercial use. They are NOT photographs of
 * DEKSON ITI. Every page that shows one captions it as illustrative, and the
 * real workshop sections still say plainly that we have no photo yet.
 *
 * The institute's own printed pamphlet uses generic trade imagery the same way.
 *
 * CC BY-SA requires: credit the author, link the source, name the licence, and
 * license derivatives alike. Our resized copies are derivatives, so they carry
 * the same licence. See /credits.
 */
export interface Credit {
  /** What the photo shows */
  caption: string;
  author: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
  /** Where the photo was taken — we prefer Indian context where possible */
  place: string;
}

export const courseImageCredits: Record<string, Credit> = {
  'solar-technician': {
    caption: 'A solar photovoltaic array powering an agricultural water pump',
    author: 'Shailsh Telang',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Solar_PV_arrays_for_solar_water_pump.jpg',
    place: 'India',
  },
  electrician: {
    caption: 'An electrician working on a distribution board',
    author: 'Frederick Noronha',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Electrician_at_work,_Goa,_India.jpg',
    place: 'Goa, India',
  },
  copa: {
    caption: 'Students learning to use computers in a school computer lab',
    author: 'Nayakyashraj',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Students_at_a_school_in_Bangalore,_India_learning_to_code_on_Progate.jpg',
    place: 'Bengaluru, India',
  },
  welder: {
    caption: 'A welder joining metal, wearing a helmet and protective gloves',
    author: 'Joseph Coslett Jr, U.S. Air Force',
    license: 'Public domain',
    licenseUrl: 'https://en.wikipedia.org/wiki/Public_domain',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Air_Force_welder.jpg',
    place: '—',
  },
};

/** Shown on every illustrative image, everywhere. Non-negotiable. */
export const ILLUSTRATIVE_NOTE = 'Illustrative photograph — not DEKSON ITI';
