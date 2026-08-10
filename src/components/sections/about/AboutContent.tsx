"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const socials = [
  { name: "Instagram", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Behance", href: "#" },
  { name: "Email", href: "#" },
  { name: "WhatsApp", href: "#" },
];

const awards = [
  { name: "Awwwards SOTD", year: "2023" },
  { name: "CSSDA SOTD", year: "2023" },
  { name: "Awwwards Website of the Month", year: "2022" },
  { name: "FWA SOTD", year: "2022" },
  { name: "Awwwards SOTD", year: "2021" },
  { name: "Awwwards Website of the Year", year: "2020" },
];

export function AboutContent() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Intro Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#111] border border-white/5 p-8 md:p-12 rounded-3xl"
        >
          <p className="text-gold tracking-widest uppercase text-xs mb-4">
            A BRIEF INTRODUCTION
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground font-light mb-8 leading-tight">
            Your Partner in Bringing Your Web Design Vision to Life
          </h2>

          <div className="space-y-6 text-foreground/60 font-light text-sm md:text-base leading-relaxed mb-12">
            <p>
              As a passionate web designer and developer, I bring a unique blend
              of creative vision and technical expertise to every project. With
              a deep understanding of the delicate balance between aesthetics
              and functionality, I specialize in crafting digital experiences
              that not only captivate users but also achieve business
              objectives.
            </p>
            <p>
              My approach revolves around a meticulous attention to detail and a
              commitment to delivering excellence in every aspect of my work.
              From intuitive user interfaces to seamless backend integrations, I
              strive to create web solutions that are both visually stunning and
              highly performant. Whether you're looking to establish a new brand
              presence online or revitalize an existing platform, I am dedicated
              to turning your vision into a remarkable digital reality.
            </p>
          </div>

          <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden filter grayscale contrast-125">
            <img
              src="/profile/profile-photo.jpeg"
              alt="Workspace"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {socials.map((social, i) => (
            <motion.a
              key={social.name}
              href={social.href}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#111] hover:bg-[#1a1a1a] border border-white/5 transition-colors p-4 md:p-6 rounded-2xl flex items-center justify-between group"
            >
              <span className="text-foreground/80 font-light text-sm uppercase tracking-wider group-hover:text-gold transition-colors">
                {social.name}
              </span>
              <ArrowUpRight
                size={16}
                className="text-foreground/40 group-hover:text-gold transition-colors"
              />
            </motion.a>
          ))}
        </div>

        {/* Awards Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#111] border border-white/5 p-8 md:p-12 rounded-3xl"
        >
          <p className="text-gold tracking-widest uppercase text-xs mb-8">
            AWARDS
          </p>
          <div className="space-y-4">
            {awards.map((award, i) => (
              <div
                key={`${award.name}-${i}`}
                className="flex items-center justify-between py-4 border-b border-white/5 last:border-0"
              >
                <span className="text-foreground/80 font-light md:text-lg">
                  {award.name}
                </span>
                <span className="text-gold/60 text-sm font-light">
                  {award.year}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
