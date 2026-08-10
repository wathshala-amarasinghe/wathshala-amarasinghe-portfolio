import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MarqueeSection } from "@/components/sections/about/MarqueeSection";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getMdxBySlug, getMdxFiles } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";

import type { Metadata } from "next";

export async function generateStaticParams() {
  const files = getMdxFiles("work");
  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getMdxBySlug("work", slug);

  if (!post) {
    return {};
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description || `${post.frontmatter.title} - A ${post.frontmatter.category} project by Wathshala Amarasinghe.`,
    alternates: {
      canonical: `/work/${slug}`,
    },
    openGraph: {
      images: post.frontmatter.image ? [post.frontmatter.image] : [],
    },
  };
}

export default async function WorkSinglePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getMdxBySlug("work", slug);

  if (!post) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: post.frontmatter.title,
    description: post.frontmatter.description || `Case study: ${post.frontmatter.title}`,
    url: `${baseUrl}/work/${slug}`,
    image: post.frontmatter.image ? `${baseUrl}${post.frontmatter.image}` : undefined,
    author: {
      "@type": "Person",
      name: "Wathshala Amarasinghe"
    }
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex flex-col min-h-screen pt-32">
        {/* Header Section */}
        <div className="text-center px-6 pt-16 mb-12">
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-foreground font-light mb-16 max-w-4xl mx-auto leading-tight">
            {post.frontmatter.title}
          </h1>

          {/* Metadata Pills */}
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-16">
            {[
              { label: "CLIENT", value: post.frontmatter.client },
              { label: "CATEGORY", value: post.frontmatter.category },
              { label: "TIMELINE", value: post.frontmatter.timeline },
              { label: "WEBSITE", value: post.frontmatter.website },
            ].map((meta) => (
              <div
                key={meta.label}
                className="border border-white/10 rounded-full px-8 py-3 bg-[#0a0a0a]/50 flex items-center gap-4"
              >
                <span className="text-[10px] text-foreground/40 uppercase tracking-[0.2em]">
                  {meta.label}
                </span>
                <span className="text-xs text-foreground/80 tracking-widest uppercase">
                  {meta.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Big Image */}
        <div className="max-w-7xl mx-auto px-6 w-full mb-24">
          <div className="aspect-[21/9] w-full rounded-sm overflow-hidden border border-white/5 bg-[#111]">
            {post.frontmatter.image?.endsWith('.mp4') ? (
              <video
                src={post.frontmatter.image}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 hover:contrast-100 transition-all duration-500"
              />
            ) : (
              <img
                src={post.frontmatter.image}
                alt={post.frontmatter.title}
                className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 hover:contrast-100 transition-all duration-500"
              />
            )}
          </div>
        </div>

        {/* Article Body */}
        <article className="max-w-3xl mx-auto px-6 w-full mb-24 text-foreground/70 font-light leading-relaxed space-y-8 prose prose-invert prose-headings:font-serif prose-headings:font-light">
          <MDXRemote source={post.content} />
        </article>

        {/* Next Project / Back CTA */}
        <div className="text-center pb-24">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-gold hover:gap-4 transition-all uppercase tracking-widest text-xs border border-white/10 rounded-full px-8 py-4 hover:bg-white/5"
          >
            <ArrowLeft size={16} /> BACK TO WORK
          </Link>
        </div>

        <MarqueeSection />
      </main>
      <Footer />
    </>
  );
}
