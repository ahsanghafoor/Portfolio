// Portfolio content — edit here to update the site.

export const personalInfo = {
  name: "Ahsan Ghafoor",
  firstName: "Ahsan",
  lastName: "Ghafoor",
  title: "Full-Stack Software Engineer",
  email: "ahsanghafoor2016@gmail.com",
  phone: "+92 309 0490477",
  location: "Lahore, Pakistan",
  linkedin: "https://www.linkedin.com/in/ahsanghafoor/",
  github: "https://github.com/ahsanghafoor",
  resumeUrl: "/resume.pdf",
  yearsExperience: "3+",
  // Short intro under the name in the hero.
  intro:
    "Full-Stack Software Engineer building web apps, AI features, and the systems behind them — front to back.",
  heroTags: ["React", "Node", "Django", "AI / RAG"],
};

export const aboutParagraphs = [
  "I'm a full-stack engineer based in Lahore. For the past three years I've built real products people use, usually end to end, from the interface down to the cloud.",
  "Lately most of my work has been in AI: RAG pipelines, agents, and the plumbing that makes them actually useful. I'm happiest on a small team that ships, writing code the next person can live with.",
];

export const aboutTags = [
  "Lahore, Pakistan",
  "Full-time · Part-time",
  "On-site · Remote · Hybrid",
  "AI / RAG · real-time",
];

// Marquee ticker words
export const tickerItems = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Django",
  "PostgreSQL",
  "MongoDB",
  "Socket.io",
  "RAG",
  "AWS",
  "Twilio",
  "TypeScript",
];

export interface ToolkitGroup {
  num: string;
  title: string;
  items: string[];
}

export const toolkit: ToolkitGroup[] = [
  {
    num: "01",
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind",
      "SASS",
      "shadcn/ui",
      "MUI",
      "Redux",
      "TanStack Query",
    ],
  },
  {
    num: "02",
    title: "Backend",
    items: [
      "Node.js",
      "Express",
      "Django",
      "REST APIs",
      "Socket.io",
      "JWT / OAuth",
      "Twilio",
      "Cron jobs",
    ],
  },
  {
    num: "03",
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "DynamoDB"],
  },
  {
    num: "04",
    title: "Cloud & AI",
    items: [
      "AWS",
      "RAG",
      "Vector embeddings",
      "Semantic chunking",
      "Lambda",
      "ECS",
      "Fargate",
      "SES",
      "SNS",
      "CloudWatch",
      "Supabase Auth",
      "Firebase Auth",
    ],
  },
];

export interface WorkItem {
  num: string;
  meta: string;
  title: string;
  description: string;
  tags: string[];
  // visual treatment for the card on the right
  variant: "accent" | "ink" | "deep" | "lime";
  badge: string;
  href?: string;
}

export const selectedWork: WorkItem[] = [
  {
    num: "01",
    meta: "GRANDEUR · 2025",
    title: "RAG Document Query",
    description:
      "Retrieval over private documents with vector embeddings and semantic chunking. Users get the exact passage they need instead of scrolling through PDFs.",
    tags: ["RAG", "Vector embeddings", "Semantic chunking"],
    variant: "accent",
    badge: "RETRIEVAL · LLM",
  },
  {
    num: "02",
    meta: "GRANDEUR · 2025",
    title: "Agentic Commerce",
    description:
      "An experimental platform where AI agents run the whole shopping flow: product selection, recommendations, checkout, and payment processing.",
    tags: ["AI agents", "Recommendations", "Payments"],
    variant: "ink",
    badge: "AI AGENTS · COMMERCE",
  },
  {
    num: "03",
    meta: "TECHLEADZ · MOZILLA · 2024",
    title: "Firefox Ads Platform",
    description:
      "Worked with Mozilla's Firefox ads team on a large-scale ad delivery platform. React on the front, Django and Python services, PostgreSQL at scale.",
    tags: ["React", "Django", "PostgreSQL"],
    variant: "deep",
    badge: "AD DELIVERY · SCALE",
  },
  {
    num: "04",
    meta: "TECHLEADZ · 2024",
    title: "DJ Management & Bulk Email",
    description:
      "Automated DJ assignment and confirmations with Instagram tracking, plus a promotional email engine reaching 50,000+ recipients on Amazon SES, with full SNS / CloudWatch delivery, open, click, bounce, and complaint tracking.",
    tags: ["Amazon SES / SNS", "CloudWatch", "Instagram tracking"],
    variant: "lime",
    badge: "EMAIL INFRA · AUTOMATION",
  },
];

export interface AlsoBuilt {
  title: string;
  description: string;
  href?: string;
}

export const alsoBuilt: AlsoBuilt[] = [
  {
    title: "OtherMe",
    description:
      "AI content platform — Twitter connection, personality onboarding, competitor tracking, and tweet generation.",
  },
  {
    title: "Bridge",
    description:
      "Twilio voice platform — secure PIN auth, agent routing, and real-time speech-to-text for compliance recording.",
  },
  {
    title: "Modern Poker Club",
    description:
      "Real-time game backend and admin panel — JWT auth and Socket.io for 1,000+ concurrent players.",
    href: "https://www.modernpokerclub.com/"
  },
  {
    title: "EventVibe",
    description:
      "Next.js events site — listings, lazy-loaded galleries, blog CMS, and analytics.",
    href: "https://eventvibe.com/",
  },
];

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  current?: boolean;
  description: string;
}

export const experiences: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Grandeur",
    duration: "06/2025 — NOW",
    current: true,
    description:
      "RAG document-query system, agentic commerce workflows, plus OtherMe and the Bridge voice platform with real-time speech-to-text.",
  },
  {
    role: "MERN Stack Developer",
    company: "TechLeadz",
    duration: "12/2023 — 06/2025",
    description:
      "Built the Firefox ad-delivery platform with Mozilla's team, shipped EventVibe, and ran promotional email to 50,000+ recipients on Amazon SES.",
  },
  {
    role: "MERN Stack Developer",
    company: "Softtik Technologies",
    duration: "01/2023 — 12/2023",
    description:
      "Modern Poker Club real-time backend for 1,000+ concurrent users, and the Metamart Unity game backend with analytics and revenue tracking.",
  },
];

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
}

export const education: EducationItem[] = [
  {
    degree: "BS Information Technology",
    institution: "University of the Punjab",
    duration: "2018 — 2022",
  },
  {
    degree: "Intermediate, Computer Science",
    institution: "Punjab College, Depalpur",
    duration: "2016 — 2018",
  },
];

export const navItems = [
  { label: "Work", href: "#work", id: "work" },
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
];
