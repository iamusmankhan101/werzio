// Single source of copy and figures for the co-hosting site.
// Edit here rather than in the section components.

export const BRAND = 'Werzio';
export const EMAIL = 'hello@werzio.com';
export const BOOKING_URL = 'https://werzio.youcanbook.me/';

// Management fee on the headline plan, referenced in pricing, the ledger and the FAQ.
export const FEE = 18;

export const NAV = [
  { label: 'Optimization', href: '#optimization' },
  { label: 'What we manage', href: '#manage' },
  { label: 'How it works', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' }
];

// The four-column strip under the hero chart (artboard 1c).
export const HERO_PILLARS = [
  { tag: '01 · CONTENT', body: 'Rewritten titles and descriptions, reshoot, photo order tested monthly.' },
  { tag: '02 · PRICING', body: 'Daily rates against demand, events, lead time and your competitive set.' },
  { tag: '03 · GUESTS', body: '24/7 replies, screening, check-in, issues handled without calling you.' },
  { tag: '04 · OPERATIONS', body: 'Cleaning, linen, restocking, maintenance and inspection after every stay.' }
];

// The About statement, split into tones so it can animate word by word.
// `muted` renders the segment in the lighter grey.
export const STATEMENT = [
  { text: 'We manage short-let listings end to end — pricing, content, guests and turnovers.' },
  { text: 'Your listing is leaving money on the table, and we can show you exactly where.', muted: true }
];

export const STATEMENT_TEXT = STATEMENT.map((s) => s.text).join(' ');

// Services heading. Kept short so it sits level with the note beside it —
// the long version ran to four lines and left the note stranded.
export const SERVICES_HEADING = [
  { text: 'Everything a listing needs,' },
  { text: 'under one fee.', muted: true }
];

export const SERVICES_HEADING_TEXT = SERVICES_HEADING.map((s) => s.text).join(' ');

export const LOOP_HEADING = [
  { text: 'Ranking decays the moment you stop.' },
  { text: 'So we never do.', muted: true }
];

export const LOOP_HEADING_TEXT = LOOP_HEADING.map((s) => s.text).join(' ');

export const PROCESS_HEADING = [
  { text: 'Live in about' },
  { text: 'ten days.', muted: true }
];

export const PROCESS_HEADING_TEXT = PROCESS_HEADING.map((s) => s.text).join(' ');

// `count` drives the stat-card roll-up; `value` is the plain string used
// wherever the number is shown without animation.
export const STATS = [
  { value: '1,400+', label: 'listings managed', count: { to: 1400, suffix: '+' } },
  { value: '+31%', label: 'median revenue lift in 90 days', count: { to: 31, prefix: '+', suffix: '%' } },
  { value: '4.91', label: 'average guest rating', count: { to: 4.91, decimals: 2 } },
  { value: '14 min', label: 'median guest reply time', count: { to: 14, suffix: ' min' } },
  { value: '31', label: 'cities, 9 countries', count: { to: 31 } }
];

export const FINDINGS = [
  {
    title: 'Cover photo is the third-best in the set',
    body: 'Reordering to lead with the balcony view lifts click-through about 1.6×.',
    high: true
  },
  {
    title: 'Flat rate across peak season',
    body: 'No event, weekend or lead-time curve. 41 nights priced below market.',
    high: true
  },
  {
    title: 'Title omits the two most-searched terms',
    body: '“Sea view” and “walk to beach” both rank in your area’s top queries.',
    high: false
  },
  {
    title: 'Reply time 6h 20m',
    body: 'Above the threshold that suppresses ranking. We reply in minutes, 24/7.',
    high: false
  },
  {
    title: '7 amenities unticked that guests filter on',
    body: 'Workspace, crib, parking and washer are all present but not listed.',
    high: false
  }
];

export const SERVICES = [
  {
    tag: '01 · CONTENT',
    title: 'Listing rebuild',
    body: 'Rewritten title and description, professional shoot, photo order tested every month.'
  },
  {
    tag: '02 · PRICING',
    title: 'Dynamic rates',
    body: 'Daily repricing against demand, events, lead time and your competitive set — with a floor you set.'
  },
  {
    tag: '03 · DISTRIBUTION',
    title: 'One calendar, every channel',
    body: 'Synced across the major booking platforms plus direct enquiries. No double bookings.'
  },
  {
    tag: '04 · GUESTS',
    title: '24/7 communication',
    body: 'Screening, check-in, in-stay issues and disputes handled without calling you.'
  },
  {
    tag: '05 · TURNOVERS',
    title: 'Cleaning & linen',
    body: 'Hotel-standard turnover, restocking and a photo inspection report after every stay.'
  },
  {
    tag: '06 · UPKEEP',
    title: 'Maintenance',
    body: 'Vetted trades, no markup, and approval requests above whatever threshold you choose.'
  },
  {
    tag: '07 · REVIEWS',
    title: 'Rating management',
    body: 'Review chasing, response writing and root-cause fixes on anything under five stars.'
  },
  {
    tag: '08 · COMPLIANCE',
    title: 'Permits & tax',
    body: 'Local short-let registration, tourism levies and guest registration filed on time.'
  },
  {
    tag: '09 · REPORTING',
    title: 'Statements & payouts',
    body: 'Every booking, cost and levy itemised in the owner app, with payout on the 5th.'
  }
];

export const LOOP = [
  { tag: 'WEEKLY', body: 'Rate curve re-cut against the next 90 days of demand.' },
  { tag: 'MONTHLY', body: 'Photo order and title A/B tested on live traffic.' },
  { tag: 'QUARTERLY', body: 'Amenity and comp-set review against nearby listings.' },
  { tag: 'ALWAYS', body: 'Reply times and review velocity held above ranking thresholds.' }
];

// Trailing 12 months of monthly revenue, indexed. Drives the before/after chart.
export const BASELINE = [38, 41, 44, 52, 58, 55, 49, 46, 51, 57, 62, 60];
export const MANAGED = [52, 57, 63, 74, 82, 78, 69, 64, 72, 80, 88, 86];

export const STEPS = [
  {
    n: '01',
    day: 'Day 1',
    title: 'Free audit',
    body: 'We score the live listing and show you the recoverable revenue before you commit to anything.'
  },
  {
    n: '02',
    day: 'Days 2–3',
    title: 'Walkthrough & forecast',
    body: 'We visit, measure, pull comparables in your building and agree a rate floor and house rules.'
  },
  {
    n: '03',
    day: 'Days 4–9',
    title: 'Rebuild & permits',
    body: 'Shoot, restyle, relist, register. Your existing reviews and history carry over.'
  },
  {
    n: '04',
    day: 'Day 10',
    title: 'We run it, you get paid',
    body: 'Guests, cleaning and upkeep are ours. Statement and payout on the 5th, owner nights any time.'
  }
];

export const OWNER_POINTS = [
  'Payout on the 5th, with every line explained',
  'Maintenance approvals above your set threshold',
  'Benchmarks against comparable listings nearby'
];

export const LEDGER = [
  { day: '28', label: 'Booking · 4 nights', meta: 'Direct · 2 guests', amt: '+$1,120', kind: 'in' },
  { day: '24', label: 'Turnover & linen', meta: 'Cleaning partner', amt: '−$90', kind: 'out' },
  { day: '22', label: 'Booking · 7 nights', meta: 'Platform · 4 guests', amt: '+$1,806', kind: 'in' },
  { day: '19', label: 'Management fee', meta: `${FEE}% of booking revenue`, amt: '−$641', kind: 'out' },
  { day: '16', label: 'Owner night blocked', meta: 'You · 2 nights', amt: '—', kind: 'none' }
];

export const PLANS = [
  {
    tier: 'OPTIMIZATION ONLY',
    price: '8%',
    unit: 'of booking revenue',
    copy: 'You keep hosting. We own content, pricing and ranking, and report monthly.',
    feats: [
      'Content, pricing and ranking owned by us',
      'Monthly performance report',
      'You keep guest communication',
      "Cancel with 30 days' notice"
    ],
    cta: 'Compare plans',
    href: '#faq'
  },
  {
    tier: 'FULL CO-HOSTING',
    flag: 'MOST OWNERS',
    feature: true,
    price: `${FEE}%`,
    unit: 'of booking revenue',
    copy: 'The whole thing. Optimization plus guests, cleaning, maintenance and compliance.',
    feats: [
      'Everything in Optimization',
      '24/7 guest communication',
      'Cleaning, linen and maintenance',
      'Permits, levies and insurance liaison',
      'Free setup, shoot and listing rebuild'
    ],
    cta: 'Book a walkthrough',
    href: '#contact'
  },
  {
    tier: 'PORTFOLIO · 5+ UNITS',
    price: 'Custom',
    copy: 'Blended rate, a named portfolio manager and quarterly asset reviews.',
    feats: [
      'Blended rate across the portfolio',
      'Named portfolio manager',
      'Quarterly asset review',
      'Consolidated statements'
    ],
    cta: 'Talk to portfolio team',
    href: '#contact'
  }
];

export const QUOTES = [
  {
    stat: '+41%',
    body: 'The listing had sat at the same price for two years. Three weeks after they took over, the calendar looked completely different.',
    initials: 'MR',
    name: 'Mariam R.',
    meta: '2BR, one unit'
  },
  {
    stat: '9 units',
    body: 'I moved my whole portfolio across. One statement, one contact, and I finally stopped answering guest messages at midnight.',
    initials: 'DK',
    name: 'Daniel K.',
    meta: 'Portfolio owner'
  },
  {
    stat: '4.96',
    body: 'What sold me was the audit — they showed me exactly what was wrong before asking for anything.',
    initials: 'AS',
    name: 'Aisha S.',
    meta: 'Studio, first-time host'
  }
];

export const FAQS = [
  {
    q: 'Do I lose control of my property?',
    a: 'No. You set the nightly floor, the house rules and the maintenance approval threshold, and you can block owner nights in the app whenever you like.'
  },
  {
    q: 'What happens to my existing reviews and ranking?',
    a: 'They stay. We optimize the listing you already have rather than creating a new one, so your review history and search history carry over.'
  },
  {
    q: `Why ${FEE}% and not a flat fee?`,
    a: 'A flat fee pays us the same whether your calendar is full or empty. A share of revenue means the only way we earn more is by making your listing earn more.'
  },
  {
    q: 'Who pays for cleaning, linen and repairs?',
    a: 'Cleaning and linen are billed per turnover at cost and shown on your statement. Repairs are at cost with no markup, and anything above your threshold needs your approval.'
  },
  {
    q: 'How long is the contract?',
    a: "60 days' notice on full co-hosting, 30 on optimization only. There is no lock-in period and no exit fee."
  },
  {
    q: 'What if short-let makes less than my long-term lease?',
    a: 'We’ll tell you that on the forecast call before you sign anything. It happens in some buildings and some seasons, and we would rather say so.'
  }
];
