"use client";

import { motion } from "motion/react";

export function MarqueeSection() {
  return (
    <div className="w-full overflow-hidden py-4 bg-background text-gold/60 border-y border-white/5 flex whitespace-nowrap mt-12">
      <motion.div
        className="flex items-center space-x-8"
        animate={{ x: [0, -2000] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {[...Array(30)].map((_, i) => (
          <div key={i} className="flex items-center space-x-8">
            <span className="text-xs font-serif italic tracking-widest">
              Let&apos;s Talk
            </span>
            <span className="text-white/10 text-xs tracking-[0.3em]">---</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
