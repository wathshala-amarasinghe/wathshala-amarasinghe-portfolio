"use client";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { experience, education, certifications } from "@/data/experience";
import type { CertificationItem } from "@/types/portfolio";
import Image from "next/image";
import { Eye, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

function AnimatedTimeline({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const [fillHeight, setFillHeight] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const fill = fillRef.current;
    if (!container || !fill) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowH = window.innerHeight;
      const scrolled = windowH - rect.top;
      const total = rect.height;
      const percent = Math.min(Math.max(scrolled / total, 0), 1);
      setFillHeight(percent * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative ml-3 flex flex-col gap-12 pl-6">
      <div className="absolute top-0 left-0 h-full w-px bg-white/10" />
      <div
        ref={fillRef}
        className="absolute top-0 left-0 w-px bg-linear-to-b from-[#6B191F] to-[#A91F27] transition-none"
        style={{ height: `${fillHeight}%` }}
      />
      {children}
    </div>
  );
}

function formatDate(dateStr: string | "present") {
  if (dateStr === "present") return "Present";
  const [year, month] = dateStr.split("-");
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${months[parseInt(month, 10) - 1]} ${year}`;
}

function formatAwardDate(date: string) {
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
}

function CertificateArtwork({
  certificate,
}: {
  certificate: CertificationItem;
}) {
  return (
    <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-[#09090b] p-2 shadow-2xl">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-[#6B191F] via-[#A91F27] to-[#6B191F]"
      />
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-white">
        <Image
          src={certificate.imagePath}
          alt={certificate.imageAlt}
          fill
          sizes="(max-width: 640px) calc(100vw - 3rem), 480px"
          className="object-contain"
        />
      </div>
    </div>
  );
}

function CertificateCredential({
  certificate,
}: {
  certificate: CertificationItem;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const titleId = `${certificate.id}-certificate-title`;
  const openCertificate = () => {
    setIsPreviewVisible(false);
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <>
      <div
        className="group/certificate relative"
        onMouseEnter={() => setIsPreviewVisible(true)}
        onMouseLeave={() => setIsPreviewVisible(false)}
      >
        <button
          type="button"
          aria-haspopup="dialog"
          onClick={openCertificate}
          onFocus={() => setIsPreviewVisible(true)}
          onBlur={() => setIsPreviewVisible(false)}
          className="flex w-full items-start justify-between gap-4 rounded-2xl border border-white/8 bg-white/3 px-4 py-4 text-left transition-colors hover:border-[#A91F27]/45 hover:bg-[#6B191F]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A91F27]"
        >
          <span>
            <span className="font-display block text-lg font-bold text-[--color-text-primary] transition-colors group-hover/certificate:text-white">
              {certificate.title}
            </span>
            <span className="mt-1 block text-sm text-[--color-text-muted]">
              {certificate.issuer} · Awarded{" "}
              {formatAwardDate(certificate.awardedDate)}
            </span>
          </span>
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/25 text-white/65 transition-colors group-hover/certificate:border-[#A91F27]/50 group-hover/certificate:text-white">
            <Eye aria-hidden="true" size={17} />
          </span>
        </button>

        <span className="mt-2 hidden text-xs text-[--color-text-muted] lg:block">
          Hover or focus to preview · Click to enlarge
        </span>
        <button
          type="button"
          onClick={openCertificate}
          className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#A91F27]/45 bg-[#6B191F]/15 px-4 py-2 text-sm font-semibold text-white lg:hidden"
        >
          <Eye aria-hidden="true" size={16} />
          View certificate
        </button>
      </div>

      {isPreviewVisible &&
        !isOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="pointer-events-none fixed top-1/2 left-1/2 z-90 hidden w-80 -translate-x-1/2 -translate-y-1/2 lg:block">
            <CertificateArtwork certificate={certificate} />
          </div>,
          document.body
        )}

      {isOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="fixed inset-0 z-100 flex items-end justify-center bg-black/80 p-4 backdrop-blur-md sm:items-center"
            onMouseDown={(event) => {
              if (event.currentTarget === event.target) setIsOpen(false);
            }}
          >
            <div className="max-h-[calc(100dvh-2rem)] w-full max-w-lg overflow-y-auto rounded-4xl border border-white/10 bg-[--color-surface] p-4 shadow-2xl sm:p-6">
              <div className="mb-4 flex items-center justify-between gap-4 px-1">
                <div>
                  <span className="text-xs font-semibold tracking-[0.16em] text-[#E5636C] uppercase">
                    Credential
                  </span>
                  <h4
                    id={titleId}
                    className="mt-1 text-xl font-bold text-white"
                  >
                    {certificate.title}
                  </h4>
                </div>
                <button
                  type="button"
                  aria-label="Close certificate"
                  onClick={() => setIsOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
                >
                  <X aria-hidden="true" size={19} />
                </button>
              </div>
              <CertificateArtwork certificate={certificate} />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export function ExperienceSection() {
  return (
    <section
      id="work-experience"
      className="border-y-[3px] border-white/5 bg-[--color-surface] py-24 sm:py-32"
    >
      <Container size="xl" className="px-8 sm:px-12 lg:px-16">
        <Reveal className="mb-16">
          <SectionHeading label="Background" title="Experience & Education" />
        </Reveal>

        <div className="grid grid-cols-1 gap-24 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-12">
            <Reveal delay={0.1}>
              <h3 className="font-display mb-8 border-b border-white/5 pb-4 text-2xl font-bold text-[--color-text-primary]">
                Employment
              </h3>
            </Reveal>

            <AnimatedTimeline>
              {experience.map((job, i) => (
                <Reveal
                  key={`${job.company}-${job.startDate}-${i}`}
                  delay={0.2 + i * 0.1}
                  className="relative"
                >
                  <div className="absolute top-1.5 -left-7.75 h-3 w-3 rounded-full border-2 border-[#6B191F] bg-[#6B191F] shadow-[0_0_12px_rgba(107,25,31,0.7)]" />

                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                      <h4 className="text-xl font-bold text-[--color-text-primary]">
                        {job.title}
                      </h4>
                      <span className="text-sm font-medium whitespace-nowrap text-[#6B191F]">
                        {formatDate(job.startDate)} — {formatDate(job.endDate)}
                      </span>
                    </div>

                    <span className="font-medium text-[--color-text-secondary]">
                      {job.company}
                      {job.location && (
                        <>
                          <span className="mx-1.5 opacity-50">•</span>
                          {job.location}
                        </>
                      )}
                    </span>

                    <p className="mt-2 text-sm leading-relaxed text-[--color-text-muted]">
                      {job.description}
                    </p>

                    {job.highlights.length > 0 && (
                      <ul className="mt-3 flex flex-col gap-2">
                        {job.highlights.map((highlight, j) => (
                          <li
                            key={j}
                            className="relative pl-4 text-sm text-[--color-text-muted] before:absolute before:top-2 before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#6B191F]/60 before:content-['']"
                          >
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Reveal>
              ))}
            </AnimatedTimeline>
          </div>

          <div className="flex flex-col gap-12">
            <Reveal delay={0.1}>
              <h3 className="font-display mb-8 border-b border-white/5 pb-4 text-2xl font-bold text-[--color-text-primary]">
                Education
              </h3>
            </Reveal>

            <AnimatedTimeline>
              {education.map((edu, i) => (
                <Reveal
                  key={`${edu.institution}-${i}`}
                  delay={0.2 + i * 0.1}
                  className="relative"
                >
                  <div className="absolute top-1.5 -left-7.75 h-3 w-3 rounded-full border border-white/30 bg-white/20" />
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col justify-between gap-1">
                      <h4 className="text-xl font-bold text-[--color-text-primary]">
                        {edu.degree}
                      </h4>
                      <span className="text-sm font-semibold text-[#6B191F]">
                        Graduated: December 2025
                      </span>
                    </div>

                    <span className="font-medium text-[--color-text-secondary]">
                      University of Plymouth, UK
                    </span>
                    <span className="text-sm text-[--color-text-muted]">
                      Delivered at NSBM Green University, Homagama, Sri Lanka
                    </span>

                    <span className="text-sm text-[--color-text-muted]">
                      {edu.field}
                      {edu.location && (
                        <>
                          <span className="mx-1.5 opacity-50">•</span>
                          {edu.location}
                        </>
                      )}
                    </span>

                    {certifications.length > 0 && (
                      <div className="mt-5 border-t border-white/8 pt-5">
                        <span className="mb-3 block text-xs font-semibold tracking-[0.16em] text-[#E5636C] uppercase">
                          Certificates
                        </span>
                        <div className="flex flex-col gap-3">
                          {certifications.map((certificate) => (
                            <CertificateCredential
                              key={certificate.id}
                              certificate={certificate}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </AnimatedTimeline>
          </div>
        </div>
      </Container>
    </section>
  );
}
