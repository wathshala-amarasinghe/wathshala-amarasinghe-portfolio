import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicesSection } from "@/components/sections/ServicesSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Web Design, UX Research, and Development services offered by Wathshala Amarasinghe to build better digital products.",
  alternates: {
    canonical: "/services",
  },
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
            From UX research and high-fidelity Figma design to front-end implementation in React and Next.js — here's how I help build better digital products.
          </p>
        </div>
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
}
