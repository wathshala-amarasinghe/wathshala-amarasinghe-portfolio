"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";

const plans = [
  {
    name: "LITE",
    price: "$3900.00",
    description:
      "Affordable web design package with a custom design, CMS integration, and responsive design for small businesses and startups.",
    features: ["CONCEPT", "STRATEGY", "WEB DESIGN", "PROTOTYPE"],
  },
  {
    name: "PREMIUM",
    price: "$6900.00",
    description:
      "Comprehensive web design package with UX/UI design, interactive prototype, Framer development, and CMS integration for medium businesses.",
    features: ["CONCEPT", "STRATEGY", "WEB DESIGN", "DEVELOPMENT"],
    isPopular: true,
  },
  {
    name: "GOLD",
    price: "$9900.00",
    description:
      "Elite web design package with SEO optimization, research, and SEO support for businesses looking to dominate their market.",
    features: ["WEB DESIGN", "DEVELOPMENT", "CONTENT", "SEO"],
  },
];

export function PricingCards() {
  return (
    <section className="px-6 py-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#111] border border-white/5 p-8 md:p-10 rounded-sm relative flex flex-col h-full hover:border-gold/30 transition-colors"
            >
              {plan.isPopular && (
                <div className="absolute top-8 right-8 bg-gold/10 text-gold px-3 py-1 rounded-sm text-[10px] uppercase tracking-widest">
                  POPULAR
                </div>
              )}

              <span className="text-[10px] text-foreground/40 uppercase tracking-[0.2em] mb-4 block">
                {plan.name}
              </span>

              <h3 className="text-3xl font-serif text-foreground mb-6">
                {plan.price}
              </h3>

              <p className="text-foreground/50 text-sm font-light leading-relaxed mb-12 flex-grow">
                {plan.description}
              </p>

              <div className="space-y-6 mb-12">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="text-[10px] text-foreground/60 uppercase tracking-[0.2em]"
                  >
                    {feature}
                  </div>
                ))}
              </div>

              <Button className="w-full uppercase tracking-widest text-[10px] h-12 text-black bg-gold hover:bg-gold-light mt-auto rounded-sm">
                GET STARTED
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
