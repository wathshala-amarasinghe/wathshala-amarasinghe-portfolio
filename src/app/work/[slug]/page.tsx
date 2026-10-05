// ─────────────────────────────────────────────────────────────────────────────
//  /work/[slug] — Dynamic case study page
//
//  Renders a generic CaseStudyLayout for most projects.
//  For projects with a dedicated case study component (e.g. "kavon"),
//  the custom component is rendered inside the PortfolioShell directly,
//  bypassing the placeholder prose layout.
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { PortfolioShell } from "@/components/layout/portfolio-shell";
import { CaseStudyLayout } from "@/components/projects/case-study-layout";
import { KavonCaseStudy } from "@/components/projects/kavon-case-study";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

// ── Static params (for static generation) ────────────────────────────────────

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

// ── Per-page metadata ─────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project || project.status === "draft") {
    return { title: "Case Study Not Found" };
  }

  // KAVON-specific metadata
  if (slug === "kavon") {
    return {
      title: "KAVON — Full-Stack E-commerce Case Study",
      description:
        "I designed and built KAVON's online store: a responsive Next.js storefront, protected admin dashboard, and shared Express/MongoDB API with server-side validation of prices, stock, discounts and order totals.",
      openGraph: {
        title: "KAVON — Full-Stack E-commerce Case Study",
        description:
          "UI/UX design, frontend development and backend integration for a bold Sri Lankan streetwear brand.",
        images: ["/images/projects/kavon/storefront-hero.jpg"],
      },
    };
  }

  return {
    title: project.title,
    description: project.shortDescription,
  };
}

// ── Page component ────────────────────────────────────────────────────────────

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project || project.status === "draft") {
    notFound();
  }

  // ── KAVON: dedicated case study ───────────────────────────────────────────
  if (slug === "kavon") {
    return (
      <PortfolioShell>
        <KavonCaseStudy />
      </PortfolioShell>
    );
  }

  // ── Generic: placeholder layout for all other projects ────────────────────
  return (
    <PortfolioShell>
      <div className="px-8 pt-8 sm:px-12 lg:px-16">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm font-medium text-[--color-text-secondary] transition-colors hover:text-[--color-accent-primary]"
        >
          <ArrowLeft size={16} />
          Back to all work
        </Link>
      </div>
      <CaseStudyLayout project={project}>
        <p>
          This is a detailed case study for <strong>{project.title}</strong>.
          Here you would place your UX research, wireframes, and full
          high-fidelity screenshots.
        </p>
        {/* Placeholder content for now */}
        <div className="mt-12 flex h-64 w-full items-center justify-center rounded-2xl border-2 border-white/10 bg-white/5 text-[--color-text-muted]">
          Case study content section
        </div>
      </CaseStudyLayout>
    </PortfolioShell>
  );
}
