import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MarqueeSection } from "@/components/sections/about/MarqueeSection";
import { PricingCards } from "@/components/sections/pricing/PricingCards";
import { FaqSection } from "@/components/sections/pricing/FaqSection";


export const metadata = {
  title: "Pricing | Wathshala Amarasinghe",
  description: "Transparent pricing for premium web design services.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen pt-32">
        <div className="text-center px-6 pt-16 mb-16">
          <p className="text-foreground/40 tracking-widest uppercase text-[10px] mb-4">
            PRICING
          </p>
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-foreground font-light mb-6 max-w-4xl mx-auto leading-tight">
            Experience the Power of <br className="hidden md:block" />
            <span className="italic text-gold">Premium Webdesign</span>
          </h1>
          <p className="text-foreground/60 max-w-lg mx-auto font-light text-sm md:text-base leading-relaxed">
            Choose a package that suits your needs and budget. Transparent
            pricing with no hidden fees.
          </p>
        </div>

        <PricingCards />
        <FaqSection />

        <MarqueeSection />
      </main>
      <Footer />
    </>
  );
}
