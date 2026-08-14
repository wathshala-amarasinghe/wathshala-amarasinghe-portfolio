"use client";

import { motion, Variants } from "motion/react";
import { ParticleBackground } from "@/components/animations/ParticleBackground";
import { ChevronDown, Download, ArrowRight } from "lucide-react";

const titleVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const charVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center px-4 sm:px-6 overflow-hidden">
      <ParticleBackground />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-200 h-100 bg-gold/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="flex-1 w-full flex flex-col items-center justify-center pt-24 sm:pt-32 pb-12 z-10">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 flex flex-col items-center text-center space-y-8"
      >
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border border-white/10 shadow-2xl shadow-gold/10 mb-8 group cursor-pointer">
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-background/80 z-10 pointer-events-none" />
          <img
            src="/profile/profile-photo.jpeg"
            alt="Portrait of Wathshala Amarasinghe"
            className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500"
          />
        </div>

        <div className="space-y-4">
          <p className="text-gold tracking-widest uppercase text-sm md:text-base font-medium">
            Hi, I&apos;m Wathshala Amarasinghe
          </p>
          <motion.div
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="space-y-2"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif tracking-tight text-foreground font-light flex flex-col items-center">
              <span>
                {"UI/UX Designer".split("").map((char, index) => (
                  <motion.span key={index} variants={charVariants} className="inline-block">
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
              <span className="italic text-gold">
                {"& Developer".split("").map((char, index) => (
                  <motion.span key={index} variants={charVariants} className="inline-block">
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
            </h1>
          </motion.div>
        </div>

        <p className="max-w-xl text-foreground/60 text-lg sm:text-xl font-light leading-relaxed">
          A BSc Software Engineering graduate crafting intuitive digital experiences for healthcare, FinTech, and enterprise products.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
          <a href="#projects">
            <motion.span
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-gold text-background px-7 py-3 rounded-full text-sm font-medium tracking-wider uppercase cursor-pointer hover:bg-gold/90 transition-colors"
            >
              View My Work
              <ArrowRight size={15} />
            </motion.span>
          </a>
          <a
            href="/cv/Wathshala-Dulashan-CV.pdf"
            download="Wathshala-Dulashan-CV.pdf"
          >
            <motion.span
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 border border-gold/50 text-gold px-7 py-3 rounded-full text-sm font-medium tracking-wider uppercase cursor-pointer hover:bg-gold/10 hover:border-gold transition-colors"
            >
              <Download size={15} />
              Download CV
            </motion.span>
          </a>
        </div>
      </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="flex flex-col items-center gap-2 pb-8 sm:pb-12 z-10"
      >
        <span className="text-xs uppercase tracking-widest text-foreground/40 font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
