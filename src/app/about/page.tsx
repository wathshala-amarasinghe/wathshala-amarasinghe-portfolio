import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutContent } from "@/components/sections/about/AboutContent";
import { MarqueeSection } from "@/components/sections/about/MarqueeSection";

import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Wathshala Amarasinghe's background as a UI/UX Designer and Business Analyst in Sri Lanka, focusing on creating functional digital experiences.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
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
      "https://www.linkedin.com/in/wathshala-amarasinghe"
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "LK",
    },
  };

  return (
    <>
      <JsonLd data={personJsonLd} />
      <Navbar />
      <main className="flex flex-col min-h-screen pt-32">
        <AboutHero />
        <AboutContent />
        <MarqueeSection />
      </main>
      <Footer />
    </>
  );
}
