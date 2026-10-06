// ─────────────────────────────────────────────
//  Experience & Education Data — Real CV data
// ─────────────────────────────────────────────

import type {
  ExperienceItem,
  EducationItem,
  CertificationItem,
} from "@/types/portfolio";

export const experience: ExperienceItem[] = [
  {
    company: "Medi Connect Pvt Ltd",
    title: "Associate Software Engineer",
    startDate: "2026-07",
    endDate: "present",
    location: "Colombo, Sri Lanka",
    description:
      "UI/UX Engineer bridging the gap between design and development.",
    highlights: [
      "Design and refine responsive healthcare workflows and interface patterns, aligning usability with implementation requirements.",
      "Collaborate with software and design teams to validate functionality, test user flows and resolve interface issues.",
      "Designed end-to-end user and administrator experiences for the Beverly Hills Hiriketiya Villa management platform, including project-plan and villa-slot workflows.",
      "Designed UI/UX for the MediGo healthcare web application and the Nexvia Ventures corporate website, focusing on clear navigation, consistent branding and responsive behaviour.",
    ],
    logoPath: null,
  },
  {
    company: "Tech Connect Global (Pvt) Ltd",
    title: "Associate UI/UX Developer",
    startDate: "2026-01",
    endDate: "2026-06",
    location: "Colombo, Sri Lanka",
    description:
      "Delivering high-fidelity UI implementations and design-to-code workflows.",
    highlights: [
      "Designed and developed the Tech Connect Global and Medi Connect official websites using React-based stacks, TypeScript, Tailwind CSS and reusable component patterns.",
      "Translated approved Figma designs into responsive UI components and maintained consistent layouts across desktop, tablet and mobile breakpoints.",
      "Designed end-to-end UI/UX for a personal expense management mobile application across user and administrator interfaces, including dashboards, expenses, transactions, reports and profiles.",
      "Conducted responsive and usability checks to maintain consistent behaviour across web and mobile experiences.",
    ],
    logoPath: null,
  },
  {
    company: "Tech Connect Global (Pvt) Ltd",
    title: "UI/UX Designer Intern",
    startDate: "2025-07",
    endDate: "2025-12",
    location: "Colombo, Sri Lanka",
    description:
      "Designing digital products, conducting user research, and building design prototypes.",
    highlights: [
      "Created user flows, wireframes, interactive prototypes and high-fidelity Figma interfaces for healthcare and personal-finance systems.",
      "Designed patient, laboratory, pharmacy, billing and dashboard modules for electronic medical record and hospital information system workflows.",
      "Collaborated with designers and developers through usability reviews, feedback sessions and structured developer handoff.",
      "Applied responsive and accessible design principles across desktop and tablet interfaces.",
    ],
    logoPath: null,
  },
  {
    company: "Freelance",
    title: "UI/UX Designer & Developer",
    startDate: "2022-01",
    endDate: "present",
    location: "Sri Lanka",
    description:
      "Independently delivering UI/UX design and frontend development services since 2022.",
    highlights: [
      "Brand identity, web design, and mobile UI projects",
      "End-to-end product design from research to delivery",
      "Client management and remote collaboration",
    ],
    logoPath: null,
  },
];

export const education: EducationItem[] = [
  {
    institution:
      "University of Plymouth, United Kingdom | Delivered at NSBM Green University, Homagama, Sri Lanka",
    degree: "BSc (Hons) in Software Engineering",
    field: "Software Engineering",
    startYear: 2022,
    endYear: 2025,
    location: "Homagama, Sri Lanka",
  },
];

export const certifications: CertificationItem[] = [
  {
    id: "figma-to-lottie",
    title: "Figma to Lottie",
    issuer: "LottieFiles",
    awardedDate: "2026-10-06",
    imagePath: "/images/educational/Figma_to_Lottie.jpeg",
    imageAlt:
      "LottieFiles for Figma course certificate awarded to Wathshala Amarasinghe for completing Figma to Lottie",
  },
];
