"use client";

import { motion } from "motion/react";

export function AboutHero() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-16 pb-12 px-4 sm:px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 flex flex-col items-center text-center space-y-6 max-w-3xl"
      >
        {/* Portrait placeholder */}
        <div className="relative w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border border-white/10 shadow-2xl mb-4 group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 z-10 pointer-events-none" />
          <img
            src="/profile/profile-photo.jpeg"
            alt="Portrait"
            className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500"
          />
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-5xl sm:text-7xl font-serif tracking-tight text-foreground font-light">
            Wathshala
          </h1>
          <h1 className="text-5xl sm:text-7xl font-serif tracking-tight italic text-gold font-light">
            Amarasinghe
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-foreground/60 text-lg font-light leading-relaxed">
          Delivering Premium Web Design and Development
          <br className="hidden md:block" />
          Services to Boost Your Online Presence
        </p>

        {/* Badge */}
        <div className="mt-8 flex items-center gap-2 border border-white/10 rounded-full py-2 px-4 bg-white/5">
          <div className="w-2 h-2 rounded-full bg-gold"></div>
          <span className="text-xs uppercase tracking-widest font-light text-foreground/80">
            About Me
          </span>
        </div>
      </motion.div>
    </section>
  );
}
