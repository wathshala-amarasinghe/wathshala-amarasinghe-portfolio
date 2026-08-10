"use client";

import { motion } from "motion/react";
import { ParticleBackground } from "@/components/animations/ParticleBackground";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Particle Constellation Background */}
      <ParticleBackground />
      
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 flex flex-col items-center text-center space-y-8"
      >
        {/* Portrait placeholder */}
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border border-white/10 shadow-2xl shadow-gold/10 mb-8">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 z-10" />
          <img
            src="/profile/profile-photo.jpeg"
            alt="Portrait"
            className="w-full h-full object-cover filter grayscale contrast-125"
          />
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif tracking-tight text-foreground font-light">
            Web Designer
          </h1>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif tracking-tight italic text-gold font-light">
            & Developer
          </h1>
        </div>

        {/* Subtitle */}
        <p className="max-w-xl text-foreground/60 text-lg sm:text-xl font-light leading-relaxed">
          Premium Web Design, Development, and SEO services to help your
          business stand out.
        </p>
      </motion.div>
    </section>
  );
}
