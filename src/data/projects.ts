// ─────────────────────────────────────────────
//  Projects Data
//  All case studies for Wathshala's portfolio.
// ─────────────────────────────────────────────

import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "medigo",
    title: "MediGo",
    client: "Healthcare Web Application",
    year: 2024,
    categories: ["Product Design", "UX Research", "UI Design"],
    shortDescription:
      "Designed patient-focused flows for symptom input, doctor discovery, appointment booking, payment, QR ticketing, notifications and support. Applied consistent UI patterns and accessibility considerations across patient-facing screens and responsive layouts.",
    role: "UI/UX Designer",
    tools: ["Figma", "FigJam", "Maze"],
    coverImage: null,
    heroMedia: null,
    gallery: [],
    status: "published",
    featured: true,
    order: 1,
  },
  {
    slug: "beverly-hills-hiriketiya",
    title: "Beverly Hills Hiriketiya",
    client: "Villa Management Platform",
    year: 2024,
    categories: ["Product Design", "UI Design", "Brand & Visual"],
    shortDescription:
      "Created user and administrator experiences for project-plan browsing, villa-slot management, availability states and user-role management. Produced responsive, handoff-ready interfaces with clear hierarchy and consistent component behaviour.",
    role: "UI/UX Designer",
    tools: ["Figma", "Adobe Illustrator"],
    coverImage: {
      type: "image",
      src: "/images/projects/Beverly Hills Hiriketiya Admin Panel.png",
      alt: "Beverly Hills Hiriketiya Admin Panel",
    },
    heroMedia: null,
    gallery: [],
    status: "published",
    featured: true,
    order: 2,
  },
  {
    slug: "expense-management",
    title: "Expense Management App",
    client: "Internal / Enterprise",
    year: 2023,
    categories: ["Product Design", "UI Design", "UX Research"],
    shortDescription:
      "Designed user and administrator interfaces for dashboards, expense tracking, transactions, reports, profiles and management screens. Mapped workflows from user flows and wireframes through interactive prototypes and high-fidelity Figma screens.",
    role: "UI/UX Designer",
    tools: ["Figma"],
    coverImage: null,
    heroMedia: null,
    gallery: [],
    status: "published",
    featured: true,
    order: 3,
  },
  {
    slug: "kavon",
    title: "KAVON.net",
    client: "Full-Stack E-commerce Platform",
    year: 2023,
    categories: ["Product Design", "Web Design", "Design System"],
    shortDescription:
      "Designed and developed a customer storefront, protected administrator dashboard and product, customer and order workflows. Implemented account verification, authenticated checkout and API-side validation for stock, pricing, discounts, shipping and final totals.",
    role: "UI/UX Engineer & Developer",
    tools: ["Figma", "React", "Node.js"],
    coverImage: {
      type: "image",
      src: "/images/projects/kavon/01-home-hero.jpg",
      alt: "KAVON storefront homepage — 'WEAR POWER. WEAR KAVON.' hero banner with navigation and featured collections",
    },
    heroMedia: null,
    gallery: [
      {
        type: "image",
        src: "/images/projects/kavon/01-home-hero.jpg",
        alt: "KAVON home hero",
      },
      {
        type: "image",
        src: "/images/projects/kavon/02-home-collections.jpg",
        alt: "KAVON collections",
      },
      {
        type: "image",
        src: "/images/projects/kavon/03-shop-catalog.jpg",
        alt: "KAVON shop catalog",
      },
      {
        type: "image",
        src: "/images/projects/kavon/04-tactical-tee-product.jpg",
        alt: "KAVON tactical tee product",
      },
      {
        type: "image",
        src: "/images/projects/kavon/05-tactical-tee-back-details.jpg",
        alt: "KAVON tactical tee back details",
      },
      {
        type: "image",
        src: "/images/projects/kavon/06-tactical-tee-size-guide.jpg",
        alt: "KAVON tactical tee size guide",
      },
      {
        type: "image",
        src: "/images/projects/kavon/07-tactical-tee-fit-finder.jpg",
        alt: "KAVON tactical tee fit finder",
      },
      {
        type: "image",
        src: "/images/projects/kavon/08-tactical-tee-cart.jpg",
        alt: "KAVON tactical tee cart",
      },
      {
        type: "image",
        src: "/images/projects/kavon/09-order-tracking.jpg",
        alt: "KAVON order tracking",
      },
      {
        type: "image",
        src: "/images/projects/kavon/10-brand-story.jpg",
        alt: "KAVON brand story",
      },
    ],
    status: "published",
    featured: true,
    order: 4,
  },
  {
    slug: "smart-web-pos",
    title: "Smart Web POS System",
    client: "Retail Management",
    year: 2023,
    categories: ["Product Design", "UI Design", "Web Design"],
    shortDescription:
      "Designed and developed modular workflows for billing, products, inventory, customers, suppliers and sales reporting. Created role-based access, stock-monitoring, activity-logging and data-export experiences using a modern React and PostgreSQL stack.",
    role: "UI/UX Engineer",
    tools: ["Figma", "React", "PostgreSQL"],
    coverImage: null,
    heroMedia: null,
    gallery: [],
    status: "published",
    featured: false,
    order: 5,
  },
  {
    slug: "event-management",
    title: "Automated Event Management",
    client: "Final-Year University Project",
    year: 2024,
    categories: ["Web Design", "UI Design", "UX Research"],
    shortDescription:
      "Developed a responsive platform for venue booking, task assignment and participant management. Implemented role-based access for administrators, band owners and event managers with MySQL-backed workflows.",
    role: "Software Engineer",
    tools: ["React", "MySQL", "Node.js"],
    coverImage: null,
    heroMedia: null,
    gallery: [],
    status: "published",
    featured: false,
    order: 6,
  },
];

/** Featured projects in display order */
export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => a.order - b.order);

/** All projects in display order */
export const allProjects = [...projects].sort((a, b) => a.order - b.order);
