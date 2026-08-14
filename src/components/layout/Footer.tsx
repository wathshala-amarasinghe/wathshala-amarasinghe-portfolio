"use client";

import { motion } from "motion/react";
import { Button } from "../ui/Button";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative pt-32 pb-12 overflow-hidden border-t border-white/10"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-full opacity-10 pointer-events-none mix-blend-luminosity flex items-start justify-center">
        <img
          src="/profile/profile-photo.jpeg"
          alt="Background Portrait"
          className="w-full h-auto object-cover mask-image-b"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-gold tracking-widest uppercase text-sm mb-4">
            Open to opportunities — UI/UX Design & Front-End Development
          </p>
          <h2 className="text-5xl md:text-7xl font-serif text-foreground font-light mb-8">
            Let's build something <br />
            <span className="italic text-gold">meaningful together</span>
          </h2>
          <a href="mailto:wathshaladulashan@outlook.com">
            <Button size="lg" className="rounded-full px-8 text-base">
              Get in touch
            </Button>
          </a>
        </motion.div>

        <div className="w-full h-px bg-white/10 my-12" />

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-foreground/50 text-sm font-light">
            © {new Date().getFullYear()} Wathshala. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {[
              { name: "GitHub", href: "https://github.com/wathshala-amarasinghe" },
              { name: "LinkedIn", href: "https://www.linkedin.com/in/wathshala-amarasinghe/" },
              { name: "Email", href: "mailto:wathshaladulashan@outlook.com" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/50 hover:text-gold transition-colors text-sm font-light uppercase tracking-wider"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
