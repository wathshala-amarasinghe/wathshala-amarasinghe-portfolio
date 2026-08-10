import type {
  NavigationItem,
  PersonalInformation,
  ProjectCategory,
  Service,
  SkillGroup,
  SocialLink,
  TimelineEntry,
} from "@/types/portfolio";

export const personalInformation = {
  name: "Wathshala Amarasinghe",
  title: "UI/UX Designer & Associate UI/UX Developer",
  email: "wathshaladulashan@outlook.com",
  introduction:
    "Designing thoughtful digital experiences across healthcare, FinTech, and corporate products.",
  resumePath: "/CV/Wathshala-Dulashan-CV.pdf",
} satisfies PersonalInformation;

export const navigation = [
  { label: "Home", href: "/#home", sectionId: "home", kind: "section" },
  { label: "About", href: "/#about", sectionId: "about", kind: "section" },
  {
    label: "Services",
    href: "/#services",
    sectionId: "services",
    kind: "section",
  },
  {
    label: "Experience",
    href: "/#experience",
    sectionId: "experience",
    kind: "section",
  },
  {
    label: "Projects",
    href: "/#projects",
    sectionId: "projects",
    kind: "section",
  },
  {
    label: "Contact Me",
    href: "/#contact",
    sectionId: "contact",
    isCta: true,
    kind: "section",
  },
] satisfies readonly NavigationItem[];

export const services = [
  {
    title: "Product design",
    description:
      "User-centred product experiences shaped from discovery through high-fidelity design.",
  },
  {
    title: "UX research & prototyping",
    description:
      "Research, wireframes, and interactive prototypes that make product decisions tangible.",
  },
  {
    title: "Design systems",
    description:
      "Reusable interface foundations that improve consistency and designer–developer collaboration.",
  },
  {
    title: "Frontend collaboration",
    description:
      "Implementation-aware UI design with attention to responsive and accessible behaviour.",
  },
] satisfies readonly Service[];

// Awaiting verified CV/reference content.
export const experience = [] satisfies readonly TimelineEntry[];
export const education = [] satisfies readonly TimelineEntry[];

export const skillGroups = [
  { title: "UX practice", skills: ["Research", "Wireframing", "Prototyping"] },
  {
    title: "Product systems",
    skills: ["Interaction design", "Design systems", "Responsive design"],
  },
  {
    title: "Collaboration",
    skills: ["Design handoff", "Frontend collaboration", "Accessibility"],
  },
] satisfies readonly SkillGroup[];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/WathshalaDulashan" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/wathshala-amarasinghe/",
  },
  { label: "Email", href: "mailto:wathshaladulashan@outlook.com" },
] satisfies readonly SocialLink[];

export const projectCategories = [
  { id: "healthcare", label: "Healthcare" },
  { id: "fintech", label: "FinTech" },
  { id: "corporate", label: "Corporate" },
] satisfies readonly ProjectCategory[];
