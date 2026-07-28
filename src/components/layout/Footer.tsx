import { ArrowUp, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { personalInformation, socialLinks } from "@/data/portfolio";

import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary-background">
      <Container className="py-10 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-start">
          <div>
            <Link
              className="inline-block rounded-sm font-heading text-xl font-semibold text-primary"
              href="/#home"
            >
              Wathshala<span className="text-accent">.</span>
            </Link>
            <p className="mt-2 max-w-md text-sm leading-6 text-secondary">
              {personalInformation.title}
            </p>
            <a
              className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-accent underline-offset-4 hover:text-accent-hover hover:underline"
              href={`mailto:${personalInformation.email}`}
            >
              {personalInformation.email}
            </a>
          </div>

          <nav aria-label="Footer links">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 sm:justify-end">
              {socialLinks
                .filter((link) => link.href.startsWith("https://"))
                .map((link) => (
                  <li key={link.label}>
                    <a
                      aria-label={`${link.label} profile, opens in a new tab`}
                      className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-secondary hover:text-accent"
                      href={link.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {link.label}
                      <ArrowUpRight aria-hidden size={15} />
                    </a>
                  </li>
                ))}
              <li>
                <Link
                  className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-secondary hover:text-accent"
                  href="/#home"
                >
                  Back to top <ArrowUp aria-hidden size={15} />
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-8 border-t border-border pt-6 text-xs text-muted">
          © 2026 Wathshala Amarasinghe. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
