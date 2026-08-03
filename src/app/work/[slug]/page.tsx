import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MarqueeSection } from "@/components/sections/about/MarqueeSection";
import { ArrowDown } from "lucide-react";

export const metadata = {
  title: "Project | Wathshala Amarasinghe",
  description: "View my project case study.",
};

export default function WorkSinglePage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen pt-32">
        {/* Header Section */}
        <div className="text-center px-6 pt-16 mb-12">
          <h1 className="text-6xl md:text-8xl font-serif tracking-tight text-foreground font-light mb-6">
            Space
          </h1>
          <p className="text-foreground/60 max-w-sm mx-auto font-light text-sm md:text-base leading-relaxed mb-12">
            Modern and visually appealing website that reflects the client's
            brand.
          </p>

          {/* Metadata Pills */}
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-16">
            {[
              { label: "CLIENT", value: "John Doe" },
              { label: "CATEGORY", value: "Web Design" },
              { label: "TIMELINE", value: "2 Weeks" },
              { label: "WEBSITE", value: "Live Link" },
            ].map((meta) => (
              <div
                key={meta.label}
                className="border border-white/10 rounded-full px-8 py-3 bg-[#0a0a0a]/50"
              >
                <p className="text-[10px] text-foreground/40 uppercase tracking-[0.2em] mb-1">
                  {meta.label}
                </p>
                <p className="text-xs text-foreground/80 tracking-widest uppercase">
                  {meta.value}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mb-16">
            <div className="flex items-center gap-3 border border-white/10 rounded-full px-4 py-2 hover:bg-white/5 transition-colors cursor-pointer">
              <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">
                <ArrowDown size={12} className="text-foreground/60" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/60">
                VIEW PROJECT
              </span>
            </div>
          </div>
        </div>

        {/* Big Image */}
        <div className="max-w-7xl mx-auto px-6 w-full mb-32">
          <div className="aspect-[16/9] w-full rounded-sm overflow-hidden border border-white/5 bg-[#111]">
            <img
              src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1200&auto=format&fit=crop"
              alt="Space Project"
              className="w-full h-full object-cover filter grayscale contrast-125"
            />
          </div>
        </div>

        {/* Case Study Details */}
        <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row gap-16 mb-32">
          {/* Left Column */}
          <div className="w-full md:w-1/3">
            <p className="text-[10px] text-gold uppercase tracking-[0.2em] mb-4">
              ABOUT
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground font-light leading-tight">
              Concept, Design, and
              <br />
              Development. All-in-one.
            </h2>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-2/3 space-y-4">
            {[
              {
                title: "Challenge",
                description:
                  "Our client was looking for a redesign of their website. They wanted a modern and visually appealing website that reflects their brand and is easy to navigate.",
              },
              {
                title: "Goal",
                description:
                  "The goal was to create a modern and visually appealing website that reflects their brand and is easy to navigate. We also wanted to improve the user experience and make it easier for customers to find the information they are looking for.",
              },
              {
                title: "Result",
                description:
                  "We successfully designed a custom website that not only visually stunning but also user-friendly and optimized for search engines. The new website has helped our client to increase their online presence and reach a wider audience.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#111] border border-white/5 p-8 rounded-sm"
              >
                <h3 className="text-lg font-serif text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground/50 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <MarqueeSection />
      </main>
      <Footer />
    </>
  );
}
