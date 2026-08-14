"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { TiltCard } from "@/components/ui/TiltCard";

export function BlogGrid({ posts }: { posts: any[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-24">
      {posts.map((post, i) => (
        <motion.div
          key={post.slug}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="perspective-1000 h-full"
        >
          <Link href={`/blog/${post.slug}`} className="block h-full">
            <TiltCard className="bg-background border border-white/5 p-6 rounded-sm group cursor-pointer hover:border-gold/30 transition-colors flex flex-col h-full">
              <div className="aspect-16/10 rounded-sm overflow-hidden mb-6 relative">
                <img
                  src={post.frontmatter.image}
                  alt={post.frontmatter.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700 filter grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <ArrowUpRight size={16} className="text-white" />
                  </div>
                </div>
              </div>

              <span className="text-gold/60 text-[10px] uppercase tracking-widest mb-3 block">
                {post.frontmatter.date}
              </span>

              <h2 className="text-xl font-serif text-foreground mb-3 leading-tight group-hover:text-gold transition-colors">
                {post.frontmatter.title}
              </h2>

              <p className="text-foreground/50 text-sm font-light leading-relaxed mb-8 grow">
                {post.frontmatter.description}
              </p>

              <div className="mt-auto">
                <span className="border border-white/10 rounded-full px-4 py-1.5 text-[10px] text-foreground/60 uppercase tracking-widest">
                  {post.frontmatter.category}
                </span>
              </div>
            </TiltCard>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
