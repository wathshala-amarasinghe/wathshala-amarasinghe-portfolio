import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicesSection } from "@/components/sections/ServicesSection";

export const metadata = {
  title: "Services | Wathshala Amarasinghe",
  description: "Web Design, Development, and SEO Services.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen pt-32">
        <div className="text-center px-6 pt-16">
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-foreground font-light mb-4">
            Specialized <span className="italic text-gold">Services</span>
          </h1>
          <p className="text-foreground/60 max-w-2xl mx-auto font-light">
            I offer a complete suite of digital services designed to elevate
            your brand.
          </p>
        </div>
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
}
