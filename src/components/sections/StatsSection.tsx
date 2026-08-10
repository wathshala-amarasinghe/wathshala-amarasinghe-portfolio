"use client";

import { motion } from "motion/react";
import { Counter } from "@/components/animations/Counter";

const stats = [
  { label: "Years Experience", value: 4, suffix: "+" },
  { label: "Projects Completed", value: 10, suffix: "+" },
  { label: "Enterprise Systems Designed", value: 5, suffix: "+" },
];

export function StatsSection() {
  return (
    <section className="py-20 border-y border-white/5 bg-black/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center justify-center pt-8 md:pt-0"
            >
              <h3 className="text-4xl md:text-5xl font-serif text-gold mb-2">
                <Counter value={stat.value} />
                {stat.suffix}
              </h3>
              <p className="text-foreground/60 font-light tracking-wide uppercase text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
