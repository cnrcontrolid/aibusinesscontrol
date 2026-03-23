import type { Service, SpeakingTopic, Testimonial, Stat } from "@/types";

// ─── Hero ────────────────────────────────────────────────────────────────────

export const HERO_CONTENT = {
  eyebrow: "AI Consultant + Keynote Speaker",
  headline: "I help businesses stop being afraid of AI — and start using it like they mean it.",
  subheadline:
    "Helping leaders make sense of the AI moment — practically, honestly, and without the hype.",
  primaryCta: { label: "Book a Call", href: "#contact" },
  secondaryCta: { label: "See What I Do", href: "#services" },
};

// ─── About ───────────────────────────────────────────────────────────────────

export const ABOUT_CONTENT = {
  eyebrow: "About Me",
  headline: "I've spent years sitting at the intersection of business strategy and emerging technology.",
  paragraphs: [
    "Which is a fancy way of saying I help companies figure out what to actually do with AI.",
    "I started as an engineer, moved into product and strategy, and eventually realized that the biggest barrier to AI adoption wasn't the technology. It was the gap between what leaders heard at conferences and what was actually possible in their specific context.",
    "So I started filling that gap. Through consulting engagements, keynote talks, and workshops, I work with executives, founders, and teams who want to move beyond the buzzwords and make clear-headed decisions about AI — for their business, their people, and their future.",
    "I've had the privilege of working with companies ranging from fast-growing startups to Fortune 500s. When I'm not doing this, I'm probably experimenting with a new AI tool and asking hard questions about whether it actually solves anything.",
  ],
  pullQuote:
    "The goal isn't to use AI. The goal is to run a better business — and sometimes AI helps with that.",
  stats: [
    { value: "8+", label: "Years in AI & Strategy" },
    { value: "50+", label: "Companies Advised" },
    { value: "100+", label: "Talks Delivered" },
  ] as Stat[],
};

// ─── Services ────────────────────────────────────────────────────────────────

export const SERVICES: Service[] = [
  {
    id: "strategy",
    icon: "Compass",
    title: "AI Strategy Consulting",
    description:
      "You don't need an AI roadmap. You need clarity on where AI will actually move the needle for your business. I work with leadership teams to cut through the noise and build a practical, honest AI strategy.",
    ctaLabel: "Learn more",
  },
  {
    id: "education",
    icon: "BookOpen",
    title: "Executive AI Education",
    description:
      "Half-day or full-day workshops for leadership teams who want to go from 'we should be doing something with AI' to 'here's exactly what we're doing and why.' Real tools, real examples, real talk.",
    ctaLabel: "Learn more",
  },
  {
    id: "advisory",
    icon: "Users",
    title: "Fractional AI Advisory",
    description:
      "Ongoing strategic support for organizations navigating AI transformation. Think of it as having an AI-focused thought partner in your corner — without hiring a full-time Chief AI Officer.",
    ctaLabel: "Learn more",
  },
];

// ─── Speaking ─────────────────────────────────────────────────────────────────

export const SPEAKING_CONTENT = {
  eyebrow: "Speaking",
  headline: "Keynotes and workshops that move audiences from anxious to actionable.",
  subheadline:
    "I speak to business audiences across industries — from Fortune 500 conferences to startup summits to internal leadership offsites.",
};

export const SPEAKING_TOPICS: SpeakingTopic[] = [
  {
    id: "hype",
    title: "AI Without the Hype",
    description:
      "A grounding keynote for business audiences: what AI actually is, what it isn't, and how to think about it as a strategic tool rather than a threat or a silver bullet.",
    formats: ["Keynote", "Panel"],
  },
  {
    id: "human",
    title: "The Human Side of AI Adoption",
    description:
      "The technology is rarely the hard part. This talk explores the cultural and organizational shifts that make or break AI initiatives — and what leaders can do about it.",
    formats: ["Keynote", "Fireside Chat"],
  },
  {
    id: "practical",
    title: "Practical AI for Everyday Business",
    description:
      "A workshop-style session showing real tools and real workflows that teams can adopt immediately. Hands-on, honest, and zero acronyms.",
    formats: ["Workshop"],
  },
  {
    id: "future",
    title: "Winning the Next Five Years",
    description:
      "A forward-looking keynote on how AI will reshape competitive dynamics across industries — and what decisions leaders need to make right now.",
    formats: ["Keynote", "Panel", "Fireside Chat"],
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Chinmai has a rare gift: he makes AI feel accessible without dumbing it down. Our leadership team left his workshop energized and, more importantly, aligned. That's hard to do.",
    name: "Sarah K.",
    title: "Chief Operating Officer",
    company: "TechVentures Group",
    avatarInitials: "SK",
  },
  {
    id: "t2",
    quote:
      "I've sat through a lot of AI talks. Chinmai's was the first one where I walked out thinking 'I know what to do on Monday.' That's the whole game.",
    name: "Marcus T.",
    title: "VP of Product",
    company: "Clearpath Software",
    avatarInitials: "MT",
  },
  {
    id: "t3",
    quote:
      "We brought Chinmai in as an advisor during a pivotal moment. His ability to translate AI potential into business decisions — not just technical specs — was exactly what we needed.",
    name: "Priya M.",
    title: "Founder & CEO",
    company: "Meridian Health AI",
    avatarInitials: "PM",
  },
];

// ─── Contact ──────────────────────────────────────────────────────────────────

export const CONTACT_CONTENT = {
  eyebrow: "Get in Touch",
  headline: "Let's talk.",
  subheadline:
    "No pitch decks, no canned responses. Just a real conversation about where AI fits into what you're building.",
  inquiryTypes: [
    "Speaking Inquiry",
    "Consulting Engagement",
    "Advisory / Ongoing Support",
    "Just want to connect",
  ],
};
