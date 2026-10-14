import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
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
      src: "/images/projects/web_development/kavon/01-home-hero.jpg",
      alt: "KAVON storefront homepage — 'WEAR POWER. WEAR KAVON.' hero banner with navigation and featured collections",
    },
    heroMedia: null,
    gallery: [
      {
        type: "image",
        src: "/images/projects/web_development/kavon/01-home-hero.jpg",
        alt: "KAVON home hero",
      },
      {
        type: "image",
        src: "/images/projects/web_development/kavon/02-home-collections.jpg",
        alt: "KAVON collections",
      },
      {
        type: "image",
        src: "/images/projects/web_development/kavon/03-shop-catalog.jpg",
        alt: "KAVON shop catalog",
      },
      {
        type: "image",
        src: "/images/projects/web_development/kavon/04-tactical-tee-product.jpg",
        alt: "KAVON tactical tee product",
      },
      {
        type: "image",
        src: "/images/projects/web_development/kavon/05-tactical-tee-back-details.jpg",
        alt: "KAVON tactical tee back details",
      },
      {
        type: "image",
        src: "/images/projects/web_development/kavon/06-tactical-tee-size-guide.jpg",
        alt: "KAVON tactical tee size guide",
      },
      {
        type: "image",
        src: "/images/projects/web_development/kavon/07-tactical-tee-fit-finder.jpg",
        alt: "KAVON tactical tee fit finder",
      },
      {
        type: "image",
        src: "/images/projects/web_development/kavon/08-tactical-tee-cart.jpg",
        alt: "KAVON tactical tee cart",
      },
      {
        type: "image",
        src: "/images/projects/web_development/kavon/09-order-tracking.jpg",
        alt: "KAVON order tracking",
      },
      {
        type: "image",
        src: "/images/projects/web_development/kavon/10-brand-story.jpg",
        alt: "KAVON brand story",
      },
    ],
    status: "published",
    featured: true,
    order: 1,
  },
  {
    slug: "lumi",
    title: "LUMI",
    client: "Online Movie Streaming Experience",
    year: 2026,
    categories: ["Product Design", "UI Design"],
    shortDescription:
      "Designed a cinematic online movie-watching experience in Figma, including content discovery, interactive title cards, trailer playback, saved titles, motion controls and a connected desktop prototype.",
    role: "UI/UX Designer",
    tools: ["Figma", "Interactive Prototyping"],
    coverImage: {
      type: "image",
      src: "/images/projects/ui_ux/lumi/lumi-home.webp",
      alt: "LUMI movie streaming homepage designed in Figma with a cinematic character hero and browsing controls",
    },
    heroMedia: {
      type: "video",
      src: "/LUMI_UI/LUMI_VIDEO.mp4",
      poster: "/images/projects/ui_ux/lumi/lumi-home.webp",
      alt: "Interactive walkthrough of the LUMI movie streaming website prototype",
    },
    gallery: [
      {
        type: "image",
        src: "/images/projects/ui_ux/lumi/lumi-home.webp",
        alt: "LUMI homepage with character-led hero, search, navigation and streaming brand links",
      },
      {
        type: "image",
        src: "/images/projects/ui_ux/lumi/lumi-discover.webp",
        alt: "LUMI discovery screen with layered movie artwork and an explore titles action",
      },
      {
        type: "image",
        src: "/images/projects/ui_ux/lumi/lumi-featured-trailer.webp",
        alt: "LUMI featured trailer screen with movie artwork, title information and playback action",
      },
      {
        type: "image",
        src: "/images/projects/ui_ux/lumi/lumi-my-list.webp",
        alt: "LUMI saved-list screen showing a saved movie and trailer action",
      },
    ],
    status: "published",
    featured: false,
    order: 2,
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
    order: 3,
  },
  {
    slug: "nation-spice",
    title: "Nation Spice",
    client: "Sri Lankan Spice Brand",
    year: 2026,
    categories: ["Brand & Visual"],
    shortDescription:
      "Created a Sri Lankan spice identity that brings together the island silhouette with cinnamon, chilli, curry leaves, cloves, cardamom and pepper. The warm earthy palette and classic serif wordmark communicate natural ingredients, local origin and the rich taste of Ceylon.",
    role: "Logo & Brand Identity Designer",
    tools: [],
    coverImage: {
      type: "image",
      src: "/images/projects/graphic/Nation_Spice.jpg",
      alt: "Nation Spice logo featuring the outline of Sri Lanka with cinnamon, chilli, curry leaves, cloves, cardamom and pepper",
    },
    heroMedia: null,
    gallery: [],
    status: "published",
    featured: false,
    order: 4,
  },
];

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => a.order - b.order);

export const allProjects = [...projects].sort((a, b) => a.order - b.order);
