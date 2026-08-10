export type NavigationItem = {
  label: string;
  href: `/${string}`;
  sectionId?: NavigationSectionId;
  isCta?: boolean;
  kind?: "section" | "resume";
};

export type NavigationSectionId =
  | "home"
  | "about"
  | "services"
  | "experience"
  | "projects"
  | "contact";

export type Service = { title: string; description: string };

export type TimelineEntry = {
  title: string;
  organization?: string;
  organisation?: string;
  location?: string;
  period: string;
  description?: string;
  highlights?: string[];
};

export type SkillGroup = { title: string; skills: readonly string[] };

export type SocialLink = {
  label: string;
  href: `https://${string}` | `mailto:${string}`;
};

export type ProjectCategory = {
  id: "healthcare" | "fintech" | "corporate";
  label: string;
};

export type PersonalInformation = {
  name: string;
  title: string;
  email: string;
  phone?: string;
  introduction: string;
  resumePath: string | null;
};
