import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MarqueeSection } from "@/components/sections/about/MarqueeSection";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { getMdxBySlug, getMdxFiles } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const files = getMdxFiles("blog");
  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ""),
  }));
}

export default async function BlogSinglePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getMdxBySlug("blog", slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen pt-32">
        {/* Header Section */}
        <div className="text-center px-6 pt-16 mb-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-foreground/40 hover:text-gold transition-colors text-xs uppercase tracking-widest mb-8"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>
          
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-foreground font-light mb-6 max-w-4xl mx-auto leading-tight">
            {post.frontmatter.title}
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-16">
            <div className="border border-white/10 rounded-full px-8 py-3 bg-[#0a0a0a]/50 flex items-center gap-4">
                <span className="text-[10px] text-foreground/40 uppercase tracking-[0.2em]">
                  DATE
                </span>
                <span className="text-xs text-foreground/80 tracking-widest uppercase">
                  {post.frontmatter.date}
                </span>
            </div>
            <div className="border border-white/10 rounded-full px-8 py-3 bg-[#0a0a0a]/50 flex items-center gap-4">
                <span className="text-[10px] text-foreground/40 uppercase tracking-[0.2em]">
                  CATEGORY
                </span>
                <span className="text-xs text-foreground/80 tracking-widest uppercase">
                  {post.frontmatter.category}
                </span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full max-w-7xl mx-auto px-6 mb-24">
          <div className="aspect-[21/9] w-full rounded-sm overflow-hidden border border-white/5">
            <img
              src={post.frontmatter.image}
              alt={post.frontmatter.title}
              className="w-full h-full object-cover filter grayscale contrast-125"
            />
          </div>
        </div>

        {/* Article Body */}
        <article className="max-w-3xl mx-auto px-6 prose prose-invert prose-headings:font-serif prose-headings:font-light prose-a:text-gold hover:prose-a:text-gold-light prose-p:text-foreground/70 prose-p:font-light prose-p:leading-relaxed prose-p:text-lg mb-24">
          <MDXRemote source={post.content} />
          
          {/* Share Links */}
          <div className="flex flex-wrap gap-4 pt-8 border-t border-white/5 mt-16">
            {["FACEBOOK", "TWITTER", "LINKEDIN"].map((social) => (
              <a
                key={social}
                href="#"
                className="flex-1 flex items-center justify-between p-4 bg-[#111] border border-white/5 rounded-sm hover:border-gold/30 transition-colors group"
              >
                <span className="text-[10px] text-foreground/60 uppercase tracking-[0.2em] group-hover:text-gold transition-colors">
                  {social}
                </span>
                <ArrowUpRight
                  size={14}
                  className="text-foreground/40 group-hover:text-gold transition-colors"
                />
              </a>
            ))}
          </div>
        </article>

        <MarqueeSection />
      </main>
      <Footer />
    </>
  );
}
