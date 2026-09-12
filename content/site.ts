// ---------------------------------------------------------------
// EDIT THIS FILE to change any text or contact details.
// ---------------------------------------------------------------

export const site = {
  name: "Voltion",
  location: "Sydney",

  // TODO: swap to hello@voltion.com once the domain email is live.
  email: "danieloyw04@gmail.com",
  phoneDisplay: "0484 776 050",
  phoneE164: "+61484776050",

  // Optional: paste a Web3Forms access key (free, 2 min at web3forms.com)
  // to make the contact form send real emails. Leave "" and the form
  // falls back to opening the visitor's own email app instead.
  formAccessKey: "",

  url: "",

  headline: "Get found. Get chosen.",
  subhead: "Voltion builds professional websites for local businesses, so you can focus on running yours.",
} as const;

export const promises = [
  {
    title: "User-friendly and interactive",
    body: "Voltion designs clean, simple layouts that customers can navigate without effort. Google's own research shows people consistently prefer visually simple sites, so every build stays professional, easy to manage, and free of unnecessary complexity.",
  },
  {
    title: "Google-ready from day one",
    body: "Every page gets proper titles, fast load times and clean structure Google can actually read, plus help setting up the business's Google Business Profile.",
  },
  {
    title: "Enquiries land in your inbox",
    body: "Every enquiry form sends straight to the business's email through Web3Forms, so nothing gets missed in a placeholder form. Voltion sets this up and walks through how it works.",
  },
  {
    title: "Ongoing care",
    body: "Voltion handles new updates the same day a message comes in, for $100/month — a set number of small changes included, no code required on your end.",
  },
];

export const steps = [
  {
    title: "Send an enquiry",
    body: "Share details about the business, its operations and its branding, and what the site needs to do. Include any logos, photos or brand files to embed into the site.",
  },
  {
    title: "A free 15 minute call",
    body: "Voltion walks through the goals, the pages needed and the design. The call is free, and the quote gets provided on the same call.",
  },
  {
    title: "Voltion builds the website",
    body: "Most first versions are ready within two to three weeks, built to a high standard and genuinely easy for customers to use. Bigger sites with more pages or features can take a little longer.",
  },
  {
    title: "A second call to review it",
    body: "Voltion presents the finished website and asks for feedback directly. Changes get listed on the spot and made straight after the call.",
  },
  {
    title: "Launch and ongoing support",
    body: "Voltion sets up the domain, puts the site live, and keeps it hosted and backed up. Support stays available whenever it's needed after that.",
  },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/projects/", label: "Projects" },
  { href: "/contact/", label: "Contact" },
] as const;

export const about = {
  heading: "A straightforward way to get a website built",
  intro: "Voltion builds websites for local businesses that want to look professional online.",
  story: {
    body: "44% of Australian small businesses still don't have a website, even though the people running them do genuinely good work every day. A missing website shouldn't be the reason a great local business stays invisible — Voltion exists to close that gap, one business at a time.",
    source: "auDA, Digital Lives of Australians, 2026.",
  },
  stat: {
    figure: "3 in 4",
    body: "Australian consumers won't buy from a business online without a website.",
    source: "auDA research, 2025. This is the gap Voltion closes.",
  },
  points: [
    {
      title: "No handoffs",
      body: "Voltion takes the call, builds the site, and stays reachable after launch.",
    },
    {
      title: "Shaped around the business",
      body: "Voltion starts every site from what the business actually needs, so it looks and works like theirs, not a generic build.",
    },
    {
      title: "Revisions until it's right",
      body: "Voltion keeps refining the design through the review call until the business is genuinely happy with it, before the site ever goes live.",
    },
  ],
};

export const faq = [
  {
    q: "How much does a website cost?",
    a: "It depends on the number of pages and what the site needs to do — a five-page booking site costs more to build than a three-page brochure site. Every quote is agreed as a fixed price on the free call, before any work starts, so there's a number to compare against other quotes rather than a range to guess from.",
  },
  {
    q: "How long does a project take?",
    a: "Most first versions are ready within two to three weeks of the first call, depending on how many pages and features the site needs. Bigger or more complex sites can take longer — that gets confirmed once Voltion understands the scope.",
  },
  {
    q: "What if I don't like the design?",
    a: "The review call exists for exactly that. Voltion presents the finished site, takes feedback on the spot, and keeps refining it until it's actually right — nothing goes live until the business is happy with it.",
  },
  {
    q: "Do I need to know what I want already?",
    a: "No. A rough sense of the business and what the site needs to achieve is enough to start. Voltion asks the right questions on the call and turns that into a proper design.",
  },
  {
    q: "What happens after launch?",
    a: "Voltion keeps the site hosted, backed up, and handles new updates for $100/month — a set number of small changes included each month, anything bigger quoted separately. No code required on your end.",
  },
];

export const advantages = [
  {
    title: "Stand out simply by having one",
    body: "56% of Australian small businesses now have a website, up from 49% the year before. The businesses still without one are increasingly the exception, not the norm.",
  },
  {
    title: "Customers check before they call",
    body: "Most people look a business up online before ever picking up the phone. A clear, professional site answers their questions before they have to ask.",
  },
  {
    title: "Google can only recommend what it can read",
    body: "Search engines can't send customers to a business with no website. Being properly built and indexed is what makes a business findable in the first place.",
  },
];

export const work = [
  {
    name: "Brownview Landscaping",
    kind: "Landscape design & construction, Sydney",
    body: "A six-page site for a landscaping business built to turn visitors into quote requests: a filterable project portfolio with drag-to-compare before/after sliders, a full quote form with budget and timeframe fields that emails the business directly, and animated trust stats. Warm, earthy palette instead of the generic green-and-stock-photo look most trade sites default to.",
    tags: ["Trades", "6 pages", "Quote form", "Before/after gallery"],
    href: "https://brownview-demo.vercel.app",
    desktop: "/work/brownview-desktop.png",
    mobile: "/work/brownview-mobile.png",
  },
  {
    name: "Ironbark Studio",
    kind: "Reformer Pilates & strength studio, Marrickville",
    body: "A five-page site for a boutique studio serious about small classes: hard caps on every session, six-week progressive training blocks, and pricing built around a two-week trial instead of a hard membership sell. Six class types written in a real coach's voice, and an enquiry form that emails the studio directly through Web3Forms — no bookings lost to a generic contact form.",
    tags: ["Boutique fitness", "5 pages", "Enquiry form", "Trial offer"],
    href: "https://ironbark-studio-demo.vercel.app",
    desktop: "/work/ironbark-desktop.png",
    mobile: "/work/ironbark-mobile.png",
  },
  {
    name: "Salon Mara",
    kind: "Boutique hair studio, Newtown",
    body: "Five pages built for a one-chair salon: a full price list, a booking enquiry form that emails the salon directly through Web3Forms, and a gallery that carries the visual weight most salon sites skip. Warm, editorial palette instead of a generic beauty-brand look.",
    tags: ["Personal services", "5 pages", "Enquiry form", "Price list"],
    href: "https://salon-mara-demo.vercel.app",
    desktop: "/work/salon-mara-desktop.png",
    mobile: "/work/salon-mara-mobile.png",
  },
];
