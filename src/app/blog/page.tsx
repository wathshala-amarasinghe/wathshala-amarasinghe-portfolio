import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MarqueeSection } from "@/components/sections/about/MarqueeSection";
import { getMdxData } from "@/lib/mdx";
import { BlogGrid } from "@/components/sections/blog/BlogGrid";
import { ClientMotionDiv } from "@/components/ui/ClientMotionDiv";

export const metadata = {
  title: "Blog | Wathshala Amarasinghe",
  description: "Insights and thoughts on web design and development.",
};

export default function BlogPage() {
  const posts = getMdxData("blog");

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <ClientMotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-foreground/40 tracking-widest uppercase text-xs mb-4">
              Blog
            </p>
            <h1 className="text-5xl md:text-7xl font-serif text-foreground font-light mb-6">
              Insights & <span className="italic text-gold">Thoughts</span>
            </h1>
            <p className="text-foreground/60 max-w-lg font-light">
              Explore the latest trends, techniques, and philosophies in digital
              design and web development.
            </p>
          </ClientMotionDiv>

          <BlogGrid posts={posts} />
        </div>

        <MarqueeSection />
      </main>
      <Footer />
    </>
  );
}
