import { PortfolioShell } from "@/components/layout/portfolio-shell";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { SelectedWorkSection } from "@/components/sections/selected-work-section";
import { PracticeSection } from "@/components/sections/practice-section";
import { TechSection } from "@/components/sections/tech-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <PortfolioShell>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SelectedWorkSection />
      <PracticeSection />
      <TechSection id="tech" />
      <TestimonialsSection />
      <ContactSection />
    </PortfolioShell>
  );
}
