export type PublishedStatus = "draft" | "published";

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  bio: string;
  avatar: string | null;
  cvPath: string | null;
  socials: SocialLink[];
}

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
  poster?: string;
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
  coverImage: ProjectMedia | null;
  heroMedia: ProjectMedia | null;
  gallery: ProjectMedia[];
  status: PublishedStatus;
  featured: boolean;
  order: number;
}

export interface ExperienceItem {
  company: string;
  title: string;
  startDate: string;
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
  awardedDate: string;
  imagePath: string;
  imageAlt: string;
}

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

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  locale: string;
  themeColor: string;
  twitterHandle: string | null;
  ogImage: string | null;
}
