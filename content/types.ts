export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  keywords: string[];
  outcomes: string[];
  scope: string[];
  faqs: Array<{ question: string; answer: string }>;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  capacity: string;
  location: string;
  type: string;
  role: string;
  summary: string;
  scope: string[];
  commissioning: string;
  om: string;
  results: string[];
  challenge?: string;
  approach?: string;
  actions?: string[];
  lessons?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  tags?: string[];
  author?: string;
  featured?: boolean;
  trending?: boolean;
  date: string;
  readingTime: string;
  toc: string[];
  related: string[];
  body: Array<{ heading: string; content: string }>;
  serviceLinks: string[];
  faqs?: Array<{ question: string; answer: string }>;
};

export type SeoEntity = {
  slug: string;
  label: string;
  description: string;
  keywords: string[];
};

export type TopicCluster = {
  slug: string;
  title: string;
  description: string;
  pillar: string;
  services: string[];
  problems: string[];
  blogCategories: string[];
};

export type PillarPage = {
  slug: string;
  title: string;
  description: string;
  clusters: string[];
  primaryServices: string[];
};

export type ProgrammaticSeoPage = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  intro: string;
  sections: Array<{ heading: string; content: string }>;
  expertCommentary: string;
  fieldProblems: string[];
  recommendedActions: string[];
  deliverables: string[];
  faqs: Array<{ question: string; answer: string }>;
  cta: string;
  conclusion: string;
  locale: "en" | "tr";
  serviceSlug: string;
  locationSlug: string;
  intent: string;
  keywords: string[];
};
