// ─────────────────────────────────────────────
//  Site Configuration
// ─────────────────────────────────────────────
// NOTE: `url` is a placeholder. Replace with the
// real production domain before deploying.
// Sitemap and canonical URLs depend on this value.
// ─────────────────────────────────────────────

import type { SiteConfig } from "@/types/portfolio";

export const siteConfig: SiteConfig = {
  name: "Wathshala Amarasinghe",
  title: "Wathshala Amarasinghe — UI/UX Engineer",
  description:
    "UI/UX Engineer based in Sri Lanka. Crafting purposeful digital experiences through thoughtful research, interaction design, and visual craft.",
  url: "https://wathshala.dev", // ← replace with real domain
  locale: "en",
  themeColor: "#08090D",
  twitterHandle: null,
  ogImage: null, // ← add /images/og.jpg once created
};
