export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  ctaLabel?: string;
}

export interface SpeakingTopic {
  id: string;
  title: string;
  description: string;
  formats: ("Keynote" | "Workshop" | "Panel" | "Fireside Chat")[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
  avatarInitials: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}
