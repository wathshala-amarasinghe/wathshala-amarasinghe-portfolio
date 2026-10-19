import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { PortfolioShell } from "@/components/layout/portfolio-shell";
import { KavonCaseStudy } from "@/components/projects/kavon-case-study";
import { ProjectCaseStudy } from "@/components/projects/project-case-study";
import { caseStudies } from "@/data/case-studies";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project || project.status === "draft") {
    return {
      title: "Case Study Not Found",
      robots: { index: false, follow: false },
    };
  }

  const title =
    slug === "kavon"
      ? "KAVON — Full-Stack E-commerce Case Study"
      : project.title;
  const description =
    slug === "kavon"
      ? "I designed and built KAVON's online store: a responsive storefront, protected admin dashboard, and Express/MongoDB API with server-side validation."
      : project.shortDescription;
  const canonicalPath = `/work/${project.slug}`;
  const image =
    project.coverImage?.src ?? siteConfig.ogImage ?? "/opengraph-image";

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "website",
      url: canonicalPath,
      siteName: siteConfig.name,
      title,
      description,
      images: [{ url: image, alt: project.coverImage?.alt ?? title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

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

  if (slug === "kavon") {
    return (
      <PortfolioShell>
        <KavonCaseStudy />
      </PortfolioShell>
    );
  }

  if (
    slug === "lmt-go" ||
    slug === "lumi" ||
    slug === "smart-web-pos" ||
    slug === "nation-spice"
  ) {
    return (
      <PortfolioShell>
        <ProjectCaseStudy project={project} detail={caseStudies[slug]} />
      </PortfolioShell>
    );
  }

  notFound();
}
