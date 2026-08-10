import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { MarqueeSection } from "@/components/sections/about/MarqueeSection";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Wathshala Amarasinghe",
    url: baseUrl,
    jobTitle: "UI/UX Designer & Business Analyst",
    image: `${baseUrl}/profile/profile-photo.jpeg`,
    sameAs: [
      "https://github.com/wathshala-amarasinghe",
      "https://www.linkedin.com/in/wathshala-amarasinghe",
    ],
    address: { "@type": "PostalAddress", addressCountry: "LK" },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Wathshala Amarasinghe Portfolio",
    url: baseUrl,
  };

  return (
    <>
      <JsonLd data={personJsonLd} />
      <JsonLd data={websiteJsonLd} />
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <PortfolioSection />
        <ExperienceSection />
        <TestimonialsSection />
        <AboutSection />
        <MarqueeSection />
      </main>
      <Footer />
    </>
  );
}
