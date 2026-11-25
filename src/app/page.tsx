import type { Metadata } from "next";
import { PortfolioShell } from "@/components/layout/portfolio-shell";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { SelectedWorkSection } from "@/components/sections/selected-work-section";
import { PracticeSection } from "@/components/sections/practice-section";
import { TechSection } from "@/components/sections/tech-section";
import { ContactSection } from "@/components/sections/contact-section";
import { profile } from "@/data/profile";
import { siteConfig } from "@/lib/site-config";

const homeUrl = new URL("/", siteConfig.url).href;
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};
const personId = `${homeUrl}#person`;
const websiteId = `${homeUrl}#website`;
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: profile.name,
      url: homeUrl,
      image: profile.avatar ? new URL(profile.avatar, homeUrl).href : undefined,
      jobTitle: profile.title,
      description: profile.bio,
      sameAs: profile.socials.map((social) => social.href),
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: homeUrl,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: siteConfig.locale,
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": `${homeUrl}#profile-page`,
      url: homeUrl,
      name: siteConfig.title,
      description: siteConfig.description,
      dateModified: siteConfig.contentUpdatedAt,
      inLanguage: siteConfig.locale,
      isPartOf: { "@id": websiteId },
      mainEntity: { "@id": personId },
    },
  ],
};

export default function Home() {
  return (
    <PortfolioShell allowBackgroundMotion>
      <script
        id="portfolio-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SelectedWorkSection />
      <PracticeSection />
      <TechSection id="tech" />
      <ContactSection />
    </PortfolioShell>
  );
}
