"use client";

import { motion, Variants } from "motion/react";
import { ParticleBackground } from "@/components/animations/ParticleBackground";
import { ChevronDown } from "lucide-react";

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
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 px-4 sm:px-6 overflow-hidden">
      <ParticleBackground />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-200 h-100 bg-gold/5 blur-[120px] rounded-full pointer-events-none z-0" />

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
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
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
