import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { MarqueeSection } from "@/components/sections/about/MarqueeSection";

export const metadata = {
  title: "Work | Wathshala Amarasinghe",
  description: "View my latest web design and development projects.",
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen pt-32">
        <div className="text-center px-6 pt-16 mb-4">
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-foreground font-light mb-6">
            Work
          </h1>
          <p className="text-foreground/60 max-w-sm mx-auto font-light text-sm md:text-base leading-relaxed">
            My latest web design projects and see how we can help bring your
            ideas to life.
          </p>
        </div>
        <PortfolioSection hideHeader={true} />
        <MarqueeSection />
      </main>
      <Footer />
    </>
  );
}
