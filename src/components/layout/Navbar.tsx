"use client";

import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "../ui/Button";
import { Magnetic } from "@/components/animations/Magnetic";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-background/50 border-b border-white/5"
    >
      <Link
        href="/"
        className="text-lg font-serif font-bold text-foreground hover:text-gold transition-colors"
      >
        Wathshala.
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-xs uppercase tracking-widest font-medium text-foreground/80 hover:text-gold transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="hidden md:flex items-center gap-3">
        <Magnetic>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/10 uppercase tracking-widest text-xs h-9 px-6 hover:bg-gold hover:text-black hover:border-gold transition-colors"
          >
            <Link href="/contact">Let&apos;s Talk</Link>
          </Button>
        </Magnetic>
      </div>

      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
        className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-foreground hover:border-gold/40 hover:text-gold transition-colors"
      >
        {isOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-white/10 md:hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 text-sm uppercase tracking-widest font-medium text-foreground/70 hover:text-gold border-b border-white/5 last:border-0 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center bg-gold text-background px-6 py-3 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-gold/90 transition-colors"
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

