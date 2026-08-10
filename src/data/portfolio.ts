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
  phone: "+94-714983669",
  introduction:
    "UI/UX Designer and Software Engineering graduate with hands-on experience designing intuitive, user-centered digital products for healthcare and financial systems. Skilled in translating complex requirements into clean, functional interfaces through research, wireframing, and prototyping.",
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
    title: "UI/UX Design",
    description:
      "Designing intuitive, user-centered digital products through research, wireframing, prototyping, and high-fidelity UI using Figma and Adobe XD.",
  },
  {
    title: "Front-End Development",
    description:
      "Building responsive, accessible, and performant web interfaces using React.js, Next.js, TypeScript, and Tailwind CSS.",
  },
  {
    title: "Design Systems",
    description:
      "Creating reusable component libraries and structured design systems that ensure consistency, scalability, and faster development.",
  },
  {
    title: "UX Research & Prototyping",
    description:
      "Conducting user research and usability testing to validate design decisions and iterate for real-world usage and improved user efficiency.",
  },
] satisfies readonly Service[];

export const experience = [
  {
    title: "Freelance UI/UX & Full-Stack Developer",
    organization: "Self-Employed",
    location: "Remote",
    period: "2022 – Present",
    highlights: [
      "Designing user-centered interfaces from wireframe to high-fidelity using Figma",
      "Building responsive, accessible web applications using React.js, Next.js, TypeScript, and Tailwind CSS",
      "Handling full project lifecycle: client briefs, UX research, design, development, and delivery",
      "Creating custom design systems, component libraries, and front-end architectures for scalable products",
      "Delivering cross-platform, mobile-responsive designs aligned with modern web standards",
    ],
  },
  {
    title: "Associate Software Engineer",
    organization: "Medi Connect (Pvt) Ltd",
    location: "Colombo, Sri Lanka",
    period: "July 2026 – Present",
    highlights: [
      "Working as an Associate Software Engineer at a specialised healthcare software development company",
      "Contributing to the design and development of healthcare information systems and clinical web applications",
      "Collaborating with cross-functional teams to build scalable, user-centered solutions for the healthcare sector",
      "Applying UI/UX expertise alongside front-end development to deliver high-quality, accessible digital products",
      "Participating in agile sprints, code reviews, and continuous delivery workflows",
    ],
  },
  {
    title: "Associate UI/UX Developer",
    organization: "Tech Connect Global (Pvt) Ltd",
    location: "Colombo, Sri Lanka",
    period: "Jan 2026 – June 2026",
    highlights: [
      "Designed and developed the official Tech Connect Global website using Next.js, TypeScript, React, and Tailwind CSS",
      "Designed and developed the Medi Connect official website using React.js, TypeScript, Tailwind CSS, and Vite",
      "Created responsive, user-friendly UI designs aligned with modern UX principles",
      "Collaborated with stakeholders to translate business requirements into functional digital experiences",
      "Maintained design consistency through reusable components and structured layouts",
    ],
  },
  {
    title: "UI/UX Designer Intern",
    organization: "Tech Connect Global (Pvt) Ltd",
    location: "Colombo, Sri Lanka",
    period: "July 2025 – December 2025",
    highlights: [
      "Designed end-to-end UX/UI for enterprise-level web applications",
      "Contributed to EMR & Hospital Information Systems (HIS) including patient management, laboratory, pharmacy, billing, and dashboards",
      "Designed UI for a personal finance tracking application, focusing on clarity and usability",
      "Conducted user research and usability testing to improve workflows and user efficiency",
      "Created wireframes, interactive prototypes, and high-fidelity UI designs using Figma",
      "Ensured responsive, accessible (WCAG), and consistent interface design across platforms",
    ],
  },
] satisfies readonly TimelineEntry[];

export const education = [
  {
    title: "BSc (Hons) in Software Engineering",
    organization: "Plymouth University, United Kingdom",
    location: "Sri Lanka (NSBM Green University)",
    period: "Graduated: December 2025",
    highlights: [
      "Key Modules: Software Engineering Principles, Data Structures & Algorithms, Web Application Development, Database Management Systems, Human-Computer Interaction",
    ],
  },
] satisfies readonly TimelineEntry[];

export const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Java", "JavaScript", "TypeScript", "PHP", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Vite"],
  },
  {
    title: "UI/UX & Design",
    skills: [
      "Figma",
      "Adobe XD",
      "Framer",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Accessibility (WCAG)",
    ],
  },
  {
    title: "Database & Tools",
    skills: ["MySQL", "MongoDB", "phpMyAdmin", "XAMPP", "GitHub", "Docker", "Postman"],
  },
] satisfies readonly SkillGroup[];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/wathshala-amarasinghe" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/wathshala-amarasinghe/",
  },
  { label: "Email", href: "mailto:wathshaladulashan@outlook.com" },
] satisfies readonly SocialLink[];

export const projectCategories = [
  { id: "healthcare", label: "Healthcare" },
  { id: "fintech", label: "FinTech" },
  { id: "corporate", label: "Corporate" },
] satisfies readonly ProjectCategory[];

