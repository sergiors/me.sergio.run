export type Contact = {
  label: string;
  href: string;
  /** External links open in a new tab; `mailto:` links stay in place. */
  external: boolean;
};

export type StackGroup = {
  category: string;
  items: string[];
};

export type ExperienceGroup = {
  title: string;
  items: string[];
};

export type Experience = {
  role: string;
  company: string;
  companyHref?: string;
  period: string;
  /** Optional sub-areas; used when a single role spans distinct phases. */
  groups?: ExperienceGroup[];
  items?: string[];
};

/** Languages that have a dedicated bullet colour on the projects list. */
export type ProjectLanguage = "Go" | "Python";

export type Project = {
  name: string;
  href: string;
  period: string;
  /** Primary implementation language, shown as a labelled bullet above the description. */
  language?: ProjectLanguage;
  description: string;
};

export type Language = {
  name: string;
  level: string;
};

export const contacts: Contact[] = [
  {
    label: "github.com/sergiors",
    href: "https://github.com/sergiors",
    external: true,
  },
  {
    label: "linkedin.com/in/sergiorsiqueira",
    href: "https://www.linkedin.com/in/sergiorsiqueira",
    external: true,
  },
];

export const stack: StackGroup[] = [
  { category: "languages", items: ["Python", "TypeScript", "PHP", "Go"] },
  {
    category: "cloud & backend",
    items: [
      "AWS Lambda",
      "API Gateway",
      "EventBridge",
      "DynamoDB",
      "S3",
      "OAuth2",
      "REST APIs",
      "WebSocket APIs",
    ],
  },
  {
    category: "frontend",
    items: ["React", "Astro", "Cloudflare Workers (SSR)"],
  },
  {
    category: "databases",
    items: ["DynamoDB", "MongoDB", "Meilisearch", "Redis"],
  },
  { category: "infrastructure", items: ["Docker", "CI/CD", "Linux"] },
];

export const experience: Experience[] = [
  {
    role: "Co-founder & CTO",
    company: "Beta Educação / EDUSEG",
    companyHref: "https://eduseg.com.br",
    period: "May 2012 – Present",
    groups: [
      {
        title: "Cloud-native & serverless architecture (2019–Present)",
        items: [
          "Architected and led the implementation of AWS serverless infrastructure for scalable, event-driven workloads using Lambda, API Gateway, EventBridge, DynamoDB and S3.",
          "Migrated from RDS to DynamoDB, reducing infrastructure costs.",
          "Designed distributed event pipelines using DynamoDB Streams and EventBridge to keep services decoupled.",
          "Developed REST and WebSocket APIs using API Gateway and Lambda (Python).",
          "Implemented an OAuth2 provider in Python (Authlib) on AWS Lambda.",
        ],
      },
      {
        title: "Search & indexing pipelines",
        items: [
          "Implemented Elasticsearch and later Meilisearch with stream-based indexing via DynamoDB Streams.",
          "Built a near real-time indexing pipeline.",
        ],
      },
      {
        title: "Frontend & edge rendering",
        items: [
          "Developed React applications with React Router, Zod and React Hook Form.",
          "Implemented server-side rendering using Cloudflare Workers.",
          "Built a headless WordPress blog with Astro.",
        ],
      },
      {
        title: "Infrastructure & operations",
        items: [
          "Managed and operated containerized services (PostgreSQL, WordPress, Meilisearch, n8n, DocuSeal) with Docker on a VPS.",
          "Maintained CI/CD and deployment workflows.",
        ],
      },
      {
        title: "Early architecture (2012–2018)",
        items: [
          "EC2-based infrastructure, MariaDB on RDS.",
          "CakePHP, Silex (Symfony Components), Doctrine ORM and Composer.",
        ],
      },
    ],
  },
  {
    role: "Web Developer",
    company: "RIAWorks",
    companyHref: "https://riaworks.com.br/",
    period: "January 2010 – May 2012",
    items: [
      "Web development in PHP with CodeIgniter.",
      "Creation and maintenance of web applications.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Relay",
    href: "https://github.com/sergiors/relay",
    period: "2026 – Present",
    language: "Go",
    description:
      "An event-driven function runner backed by Redis Streams, with declarative event matching, isolated container execution, consumer-group delivery, dynamic function reconciliation and cluster-safe cron scheduling.",
  },
  {
    name: "Conduit",
    href: "https://github.com/sergiors/conduit",
    period: "2026 – Present",
    language: "Go",
    description:
      "A CDC platform on top of MongoDB Change Streams, providing DynamoDB-like streaming semantics with resume-token recovery, retries, dead-letter queues, TTL support, configurable sinks and runtime configuration through a control-plane/data-plane architecture.",
  },
  {
    name: "Paperforge",
    href: "https://github.com/sergiors/paperforge",
    period: "2026 – Present",
    language: "Python",
    description:
      "A lightweight, self-hosted HTTP API for generating and digitally signing PDF documents. It renders HTML templates with Jinja2, converts them with WeasyPrint, and applies digital signatures using PKCS#12 (PFX) certificates.",
  },
];

export const languages: Language[] = [
  { name: "Portuguese", level: "Native" },
  { name: "English", level: "Professional working proficiency" },
  { name: "Italian", level: "Elementary (currently learning)" },
];
