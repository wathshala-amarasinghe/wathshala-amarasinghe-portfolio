// ─────────────────────────────────────────────
//  Portfolio Type Definitions
//  Single source of truth for all content types
// ─────────────────────────────────────────────

export type PublishedStatus = "draft" | "published";

// ── Profile ──────────────────────────────────

export interface SocialLink {
  label: string;
  href: string;
  icon: string; // lucide icon name
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  bio: string;
  avatar: string | null; // null → show initials placeholder
  cvPath: string | null; // null → hide download link
  socials: SocialLink[];
}

// ── Projects ─────────────────────────────────

export type ProjectCategory =
  | "Product Design"
  | "UX Research"
  | "UI Design"
  | "Brand & Visual"
  | "Design System"
  | "Web Design";

export interface ProjectMedia {
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string; // for video
  width?: number;
  height?: number;
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  year: number;
  categories: ProjectCategory[];
  shortDescription: string;
  role: string;
  tools: string[];
  coverImage: ProjectMedia | null; // null → use gradient placeholder
  heroMedia: ProjectMedia | null;
  gallery: ProjectMedia[];
  status: PublishedStatus; // "draft" hides case-study link
  featured: boolean;
  order: number; // display order on homepage
}

// ── Experience ───────────────────────────────

export interface ExperienceItem {
  company: string;
  title: string;
  startDate: string; // "YYYY-MM"
  endDate: string | "present";
  location: string;
  description: string;
  highlights: string[];
  logoPath: string | null;
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear: number | "present";
  location: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  awardedDate: string; // "YYYY-MM-DD"
  imagePath: string;
  imageAlt: string;
}

// ── Navigation ───────────────────────────────

export interface NavSection {
  id: string;
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

// ── Site Config ──────────────────────────────

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string; // placeholder until real domain supplied
  locale: string;
  themeColor: string;
  twitterHandle: string | null;
  ogImage: string | null;
}
