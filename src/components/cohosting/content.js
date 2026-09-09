// Single source of copy and figures for the co-hosting site.
// Edit here rather than in the section components.

export const BRAND = 'Werzio';
export const EMAIL = 'hello@werzio.com';
export const BOOKING_URL = 'https://werzio.youcanbook.me/';
export const WHATSAPP_PHONE = '+92 305 8562523';
export const WHATSAPP_NUMBER = '923058562523';
export const WHATSAPP_URL = 'https://wa.me/923058562523';

// Management fee on the headline plan, referenced in pricing, the ledger and the FAQ.
export const FEE = 18;

export const NAV = [
  { label: 'Optimization', href: '#optimization' },
  { label: 'What we manage', href: '#manage' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' }
];

// The four-column strip under the hero chart (artboard 1c).
export const HERO_PILLARS = [
  { tag: '01 · LISTING OPTIMIZATION', body: 'SEO-driven title rebuilds, professional photo staging, and monthly keyword testing.' },
  { tag: '02 · DYNAMIC PRICING', body: 'Daily rate adjustments tailored to local events, seasonal demand, and rate floors.' },
  { tag: '03 · 24/7 GUEST SUPPORT', body: 'Instant 1-minute response time, guest screening, check-in assistance, and Superhost management.' },
  { tag: '04 · CLEANING & UPKEEP', body: 'Turnover scheduling with trusted local cleaners, photo inspections, and no-markup maintenance.' }
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
  { value: '1 min', label: 'average guest reply time', count: { to: 1, suffix: ' min' } },
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
    body: 'Above the threshold that suppresses ranking. We reply in under 1 minute, 24/7.',
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
    tag: '01 · SETUP & OPTIMIZATION',
    title: 'Listing Setup & Keyword SEO',
    body: 'Optimized titles and descriptions using high-ranking search keywords, USP highlighting, photo staging, and amenity categorization for maximum search visibility.'
  },
  {
    tag: '02 · 24/7 GUEST SUPPORT',
    title: '24/7 Rapid Guest Communication',
    body: 'Instant replies with a 1-minute maximum response time. Inquiry handling, guest screening, in-stay assistance, and dispute resolution to maintain Superhost status.'
  },
  {
    tag: '03 · CHECK-IN & DEPARTURE',
    title: 'Check-in & Checkout Guidance',
    body: 'Keyless smart lock guidance, exact map location pins, arrival reminders, welcome onboarding messages, and structured checkout departure instructions.'
  },
  {
    tag: '04 · CLEANING & TURNOVER',
    title: 'Cleaning & Turnover Coordination',
    body: 'Local trusted cleaner dispatching, turnover scheduling, photo inspection reports after every stay, restocking checklists, and deep-cleaning protocols.'
  },
  {
    tag: '05 · PRICING & REVENUE',
    title: 'Dynamic Rates & Demand Repricing',
    body: 'Daily rate adjustments against market demand, seasonal trends, local events, lead time, and competitor comp sets — protected by your minimum rate floor.'
  },
  {
    tag: '06 · DISTRIBUTION',
    title: 'Multi-Channel Calendar Sync',
    body: 'Real-time calendar synchronization across Airbnb, VRBO, Booking.com, and direct booking channels to eliminate double bookings.'
  },
  {
    tag: '07 · REVIEWS & RATINGS',
    title: 'Review Chasing & Rating Defense',
    body: 'Proactive review requests, guest review management, rating velocity optimization, and root-cause resolution for any feedback below 5 stars.'
  },
  {
    tag: '08 · COMPLIANCE & TAX',
    title: 'Permits, Tax & Local Registration',
    body: 'Local short-term rental registration, tourism levy filings, guest identity verification, and tax compliance handled accurately and on time.'
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
    tier: 'REVENUE OPTIMIZATION',
    price: '$49',
    unit: '/ month',
    copy: 'Maximize booking income with dynamic repricing and seasonal minimum-stay management.',
    feats: [
      'Dynamic pricing strategy (setting daily rates via PriceLabs/Wheelhouse)',
      'Min-stay & seasonal gap night management',
      'Monthly revenue & performance reporting'
    ],
    cta: 'Get started',
    href: '#contact'
  },
  {
    tier: 'LISTING & SEO MANAGEMENT',
    flag: 'MOST POPULAR',
    feature: true,
    price: '$89',
    unit: '/ month',
    copy: 'Boost search rankings, click-through rates, and market visibility across all channels.',
    feats: [
      'Listing copy, title updates, & photo sequence testing',
      'Platform SEO optimization across Airbnb, VRBO, etc.',
      'Competitor market benchmarking'
    ],
    cta: 'Select plan',
    href: '#contact'
  },
  {
    tier: 'GROWTH & DIRECT BOOKING',
    price: '$129',
    unit: '/ month',
    copy: 'Scale guest acquisition with a custom direct booking site and automated marketing campaigns.',
    feats: [
      'Setting up & managing a direct booking website',
      'Retargeting past guests via email/SMS campaigns',
      'Local SEO & Google Business profile setup'
    ],
    cta: 'Scale your listing',
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
    a: 'No. You set the nightly floor, house rules, and maintenance approval limits. You can block owner nights anytime.'
  },
  {
    q: 'How do Airbnb Co-Host Services work?',
    a: 'A co-host manages property and guest operations based on your preferences. You choose what to delegate—from 24/7 guest messaging with 1-minute response times to turnover scheduling and dynamic pricing—while maintaining listing ownership.'
  },
  {
    q: 'Can I hire a Co-Host if I live in another country?',
    a: 'Yes. Many hosts manage properties remotely. We handle 24/7 guest communications, listing optimization, pricing, and cleaner scheduling remotely, needing only local turnover staff on the ground.'
  },
  {
    q: 'What happens to my existing reviews and ranking?',
    a: 'They stay intact. We optimize your existing listing rather than creating a new one, preserving your hard-earned search history and review score.'
  },
  {
    q: `Why ${FEE}% and not a flat fee?`,
    a: 'A flat fee pays us the same whether your calendar is full or empty. A share of revenue means our incentive is 100% aligned with making your property earn more.'
  },
  {
    q: 'Who pays for cleaning, linen and repairs?',
    a: 'Cleaning and linen are billed per turnover at cost and shown on your statement. Maintenance repairs are at cost with zero markup, requiring your approval above your set limit.'
  },
  {
    q: 'How long is the contract?',
    a: "60 days' notice on full co-hosting, 30 days on optimization only. There is no long-term lock-in period and zero exit fees."
  },
  {
    q: 'What if short-let makes less than my long-term lease?',
    a: 'We will disclose that on your revenue forecast call before you sign anything. If long-term lease is better suited for your building or market, we will tell you upfront.'
  }
];
