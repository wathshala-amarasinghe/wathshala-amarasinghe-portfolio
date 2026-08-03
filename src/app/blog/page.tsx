"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MarqueeSection } from "@/components/sections/about/MarqueeSection";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "How to Build a Stunning Website with Framer",
    date: "23rd Aug 2023",
    description:
      "Learn how to create an impressive website using Framer with our step-by-step guide.",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "10 website elements for maximum user engagement",
    date: "22nd Aug 2023",
    description:
      "10 website elements to engage users, from intuitive navigation to compelling visuals.",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "The importance of content in driving website traffic",
    date: "20th Aug 2023",
    description:
      "Quality content is king. Learn how to create valuable, SEO-optimized content.",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "10 common web development mistakes to avoid",
    date: "18th Aug 2023",
    description:
      "10 common web development mistakes and improve your site's functionality and user experience.",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Why responsive web design is critical for your business",
    date: "15th Aug 2023",
    description:
      "Responsive web design ensures your site looks great and performs well on all devices.",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "The art of SEO writing: How to write content that ranks on Google",
    date: "12th Aug 2023",
    description:
      "Optimize your website with expert tips on writing content that ranks high on Google.",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen pt-32">
        <div className="max-w-7xl mx-auto w-full pt-16 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-foreground font-light mb-6">
              Blog
            </h1>
            <p className="text-foreground/60 max-w-lg mx-auto font-light text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor lorem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-24">
            {posts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-[#0a0a0a] border border-white/5 p-6 rounded-sm group cursor-pointer hover:border-gold/30 transition-colors flex flex-col h-full"
              >
                <div className="aspect-[16/10] rounded-sm overflow-hidden mb-6 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter grayscale contrast-125"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                      <ArrowUpRight size={16} className="text-white" />
                    </div>
                  </div>
                </div>

                <span className="text-gold/60 text-[10px] uppercase tracking-widest mb-3 block">
                  {post.date}
                </span>

                <h2 className="text-xl font-serif text-foreground mb-3 leading-tight group-hover:text-gold transition-colors">
                  {post.title}
                </h2>

                <p className="text-foreground/50 text-sm font-light leading-relaxed mb-8 flex-grow">
                  {post.description}
                </p>

                <div className="mt-auto">
                  <span className="border border-white/10 rounded-full px-4 py-1.5 text-[10px] text-foreground/60 uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <MarqueeSection />
      </main>
      <Footer />
    </>
  );
}
