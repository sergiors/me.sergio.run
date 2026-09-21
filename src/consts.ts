export const SITE = {
  name: "Sérgio",
  fullName: "Sérgio Rafael de Siqueira",
  title: "Sérgio — Full Stack Engineer",
  description:
    "Sérgio Rafael Siqueira, a Full Stack Engineer based in Palermo. Notes on software engineering, cloud architecture and modern web development.",
  /** Canonical origin, used to build absolute URLs in metadata. */
  url: "https://me.sergio.run",
  locale: "en",
} as const;

export type NavItem = {
  label: string;
  href: string;
  /** Optional short hint rendered next to the label. */
  hint?: string;
};

export const NAV: NavItem[] = [
  { label: "home", href: "/" },
  { label: "blog", href: "/blog" },
  { label: "resume", href: "/resume" },
  { label: "homelab", href: "/homelab" },
];

export const SOCIALS: NavItem[] = [
  { label: "github", href: "https://github.com/sergiors" },
  { label: "linkedin", href: "https://www.linkedin.com/in/sergiorsiqueira" },
];
