import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutContent } from "@/components/sections/about/AboutContent";
import { MarqueeSection } from "@/components/sections/about/MarqueeSection";

export const metadata = {
  title: "About | Wathshala Amarasinghe",
  description:
    "Learn more about Wathshala Amarasinghe, Web Designer & Developer.",
};

export default function AboutPage() {
  return (
    <>
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
