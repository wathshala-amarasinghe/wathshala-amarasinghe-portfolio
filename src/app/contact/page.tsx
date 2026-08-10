"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { motion } from "motion/react";
import { ArrowUpRight, Compass } from "lucide-react";
import { ContactForm } from "@/components/sections/contact/ContactForm";

// Custom SVG icons for social media
const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const BehanceIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 14H10V10H7V14ZM14 14H17V10H14V14ZM14 8H17V6H14V8ZM7 8H10V6H7V8Z"></path>
    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"></path>
  </svg>
);

const DribbbleIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
    <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
  </svg>
);

const socials = [
  { name: "INSTAGRAM", icon: InstagramIcon },
  { name: "TWITTER", icon: TwitterIcon },
  { name: "FACEBOOK", icon: FacebookIcon },
  { name: "BEHANCE", icon: BehanceIcon },
  { name: "DRIBBBLE", icon: DribbbleIcon },
  { name: "PINTEREST", icon: Compass },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-16 flex items-center justify-center relative overflow-hidden">
        {/* Left side portrait */}
        <div className="hidden lg:block absolute left-0 top-0 w-1/2 h-full z-0 group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background z-10 pointer-events-none" />
          <img
            src="/profile/profile-photo.jpeg"
            alt="Portrait"
            className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500 object-top"
          />
        </div>

        <div className="max-w-7xl mx-auto w-full px-6 flex justify-end relative z-10">
          <div className="w-full lg:w-1/2 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <p className="text-foreground/40 tracking-widest uppercase text-xs mb-4">
                Contact
              </p>
              <h1 className="text-5xl font-serif text-foreground font-light">
                Let's get in touch.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border border-white/5 p-8 bg-[#0a0a0a]/80 backdrop-blur-sm rounded-sm mb-6"
            >
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href="#"
                    className="flex items-center justify-between p-4 border border-white/5 bg-[#0a0a0a]/80 backdrop-blur-sm hover:border-gold/30 hover:bg-[#151515] transition-all group rounded-sm"
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        size={16}
                        className="text-foreground/50 group-hover:text-gold transition-colors"
                      />
                      <span className="text-xs uppercase tracking-widest text-foreground/60 group-hover:text-foreground transition-colors">
                        {social.name}
                      </span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-foreground/30 group-hover:text-gold transition-colors"
                    />
                  </a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
