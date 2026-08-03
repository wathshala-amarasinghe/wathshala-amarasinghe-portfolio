import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MarqueeSection } from "@/components/sections/about/MarqueeSection";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export const metadata = {
  title: "Blog Post | Wathshala Amarasinghe",
  description: "Read my latest blog post.",
};

export default function BlogSinglePage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen pt-32">
        {/* Header Section */}
        <div className="text-center px-6 pt-16 mb-12">
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-foreground font-light mb-6 max-w-4xl mx-auto leading-tight">
            How to Build a Stunning Website with Framer
          </h1>
          <p className="text-foreground/60 max-w-lg mx-auto font-light text-sm md:text-base leading-relaxed mb-12">
            Learn how to create an impressive website using Framer with our
            step-by-step guide.
          </p>

          <div className="flex justify-center mb-16">
            <div className="flex items-center gap-3 border border-white/10 rounded-full px-4 py-2 hover:bg-white/5 transition-colors cursor-pointer">
              <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">
                <ArrowDown size={12} className="text-foreground/60" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/60">
                READ POST
              </span>
            </div>
          </div>

          {/* Metadata Pills */}
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-16">
            {[
              { label: "DATE", value: "23RD AUG 2023" },
              { label: "CATEGORY", value: "WEB DESIGN" },
              { label: "READING TIME", value: "5 MIN" },
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
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
              alt="Framer Web Design"
              className="w-full h-full object-cover filter grayscale contrast-125"
            />
          </div>
        </div>

        {/* Article Body */}
        <article className="max-w-3xl mx-auto px-6 w-full mb-24 text-foreground/70 font-light leading-relaxed space-y-8">
          <h2 className="text-3xl font-serif text-foreground mb-6">
            Elit ullamcorper dignissim
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium.
          </p>

          <h3 className="text-2xl font-serif text-foreground mt-12 mb-4">
            Hendrerit dolor magna
          </h3>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet.
          </p>

          <h3 className="text-2xl font-serif text-foreground mt-12 mb-4">
            Hendrerit dolor magna
          </h3>
          <p>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur.
          </p>

          {/* Conclusion Block */}
          <div className="bg-[#111] border border-white/5 p-8 md:p-12 rounded-sm my-16">
            <h4 className="text-xl font-serif text-foreground mb-4">
              Conclusion
            </h4>
            <p className="text-sm text-foreground/60 mb-8 italic">
              "Building a stunning website with Framer is not just about
              aesthetics, it's about creating a seamless user experience that
              converts visitors into customers."
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop"
                alt="Author"
                className="w-12 h-12 rounded-full border border-white/10 filter grayscale"
              />
              <div>
                <p className="text-sm text-foreground">Wathshala Amarasinghe</p>
                <p className="text-xs text-gold uppercase tracking-widest">
                  Web Designer
                </p>
              </div>
            </div>
          </div>

          {/* Share Links */}
          <div className="flex flex-wrap gap-4 pt-8 border-t border-white/5">
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

        {/* Related News */}
        <section className="border-t border-white/5 py-32 px-6">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex justify-between items-end mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-foreground font-light">
                Related <span className="italic text-gold">News</span>
              </h2>
              <a
                href="/blog"
                className="text-gold flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-[10px] border border-white/10 rounded-full px-6 py-3 hover:bg-white/5"
              >
                SEE ALL
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "How to Build a Stunning Website with Framer",
                  date: "23rd Aug 2023",
                  cat: "Web Design",
                  img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
                },
                {
                  title: "10 website elements for maximum user engagement",
                  date: "22nd Aug 2023",
                  cat: "Web Design",
                  img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop",
                },
                {
                  title: "The importance of content in driving website traffic",
                  date: "20th Aug 2023",
                  cat: "Web Design",
                  img: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=600&auto=format&fit=crop",
                },
              ].map((post, i) => (
                <article
                  key={i}
                  className="bg-[#0a0a0a] border border-white/5 p-6 rounded-sm group cursor-pointer hover:border-gold/30 transition-colors flex flex-col h-full"
                >
                  <div className="aspect-[16/10] rounded-sm overflow-hidden mb-6 relative">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter grayscale contrast-125"
                    />
                  </div>
                  <span className="text-gold/60 text-[10px] uppercase tracking-widest mb-3 block">
                    {post.date}
                  </span>
                  <h3 className="text-xl font-serif text-foreground mb-4 leading-tight group-hover:text-gold transition-colors">
                    {post.title}
                  </h3>
                  <div className="mt-auto">
                    <span className="border border-white/10 rounded-full px-4 py-1.5 text-[10px] text-foreground/60 uppercase tracking-widest">
                      {post.cat}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <MarqueeSection />
      </main>
      <Footer />
    </>
  );
}
