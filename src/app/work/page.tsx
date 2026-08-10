import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { MarqueeSection } from "@/components/sections/about/MarqueeSection";

import { getMdxData } from "@/lib/mdx";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work & Case Studies",
  description: "A selection of UI/UX design and development projects spanning healthcare systems, FinTech, and enterprise web applications by Wathshala Amarasinghe.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  const mdxProjects = getMdxData("work");
  
  const projects = mdxProjects.map(p => ({
    title: p.frontmatter.title,
    category: p.frontmatter.category,
    image: p.frontmatter.image,
    slug: p.slug
  }));

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen pt-32">
        <div className="text-center px-6 pt-16 mb-4">
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-foreground font-light mb-6">
            Work
          </h1>
          <p className="text-foreground/60 max-w-sm mx-auto font-light text-sm md:text-base leading-relaxed">
            A selection of UI/UX design and development projects spanning healthcare systems, FinTech, and enterprise web applications.
          </p>
        </div>
        <PortfolioSection hideHeader={true} projects={projects} />
        <MarqueeSection />
      </main>
      <Footer />
    </>
  );
}
