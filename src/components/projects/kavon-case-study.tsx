"use client";

// ─────────────────────────────────────────────────────────────────────────────
//  KavonCaseStudy — Full case study page content for KAVON.net
//
//  Sections:
//   1. Project introduction (hero image + role + CTAs)
//   2. What the project needed
//   3. Three interface decisions (catalog / product / cart)
//   4. Behind the storefront (admin + technical disclosure)
//   5. What I built and what comes next
//   6. Closing actions (contact / live site / back to projects)
//
//  Uses only existing libraries (GSAP via Reveal, lucide-react, cn).
//  Respects prefers-reduced-motion via the Reveal component.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useCallback } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  X,
  ZoomIn,
  ArrowRight,
  GitFork,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

// ── Constants ─────────────────────────────────────────────────────────────────

const LIVE_URL = "https://kavon-net-official.vercel.app/";
const REPO_URL = "https://github.com/wathshala-amarasinghe/kavon.net";

/** Kavon red — a deliberate in-context accent, not a global token override */
const KAVON_RED = "#C8102E";
const KAVON_RED_DIM = "rgba(200, 16, 46, 0.12)";

// ── Types ─────────────────────────────────────────────────────────────────────

interface LightboxImage {
  src: string;
  alt: string;
  caption: string;
}

// ── Sub-components ────────────────────────────────────────────────────────────

/** Thin red rule used as a visual accent between section fragments */
function KavonRule({ className }: { className?: string }) {
  return (
    <div
      className={cn("h-px w-12", className)}
      style={{ backgroundColor: KAVON_RED }}
      aria-hidden="true"
    />
  );
}

/** Metadata pill row: Role · Year · Type */
function MetaPills() {
  const pills = ["UI/UX Design", "Frontend Development", "Backend Integration"];
  return (
    <div className="flex flex-wrap gap-2" role="list" aria-label="My roles">
      {pills.map((p) => (
        <span
          key={p}
          role="listitem"
          className="inline-flex items-center rounded-sm px-3 py-1 text-xs font-semibold tracking-wider uppercase"
          style={{
            backgroundColor: KAVON_RED_DIM,
            color: KAVON_RED,
            border: `1px solid rgba(200, 16, 46, 0.3)`,
          }}
        >
          {p}
        </span>
      ))}
    </div>
  );
}

/** Compact section label with a pre-label number */
function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <span
        className="font-mono text-xs font-bold"
        style={{ color: KAVON_RED }}
        aria-hidden="true"
      >
        {n}
      </span>
      <span className="text-xs font-semibold tracking-wider text-[--color-text-muted] uppercase">
        {label}
      </span>
    </div>
  );
}

/** Caption typography used below screenshots */
function Caption({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-3 max-w-none text-sm leading-snug text-[--color-text-muted] italic">
      {children}
    </p>
  );
}

/** Screenshot with optional lightbox trigger */
function Screenshot({
  src,
  alt,
  caption,
  onOpen,
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  caption: string;
  onOpen: (img: LightboxImage) => void;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={cn("group relative", className)}>
      <button
        type="button"
        aria-label={`Enlarge image: ${alt}`}
        className="relative block w-full overflow-hidden rounded-[--radius-xl] border border-[--color-divider] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-accent-primary]"
        onClick={() => onOpen({ src, alt, caption })}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="w-full object-cover transition-transform duration-[--duration-cinematic] group-hover:scale-[1.015]"
        />
        {/* Hover overlay */}
        <span className="absolute inset-0 flex items-center justify-center rounded-[--radius-xl] bg-black/40 opacity-0 transition-opacity duration-[--duration-moderate] group-hover:opacity-100 group-focus-visible:opacity-100">
          <ZoomIn
            size={28}
            className="text-white drop-shadow-lg"
            aria-hidden="true"
          />
        </span>
      </button>
      <figcaption>
        <Caption>{caption}</Caption>
      </figcaption>
    </figure>
  );
}

/** Full-screen image lightbox */
function Lightbox({
  image,
  onClose,
}: {
  image: LightboxImage | null;
  onClose: () => void;
}) {
  if (!image) return null;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Enlarged image: ${image.alt}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-8"
      onKeyDown={handleKeyDown}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image"
        className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white"
      >
        <X size={20} />
      </button>

      <div
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.src}
          alt={image.alt}
          className="w-full rounded-[--radius-xl] shadow-[--shadow-xl]"
        />
        <p className="mt-4 text-center text-sm text-white/60 italic">
          {image.caption}
        </p>
      </div>
    </div>
  );
}

/** Collapsible technical details disclosure */
function TechDisclosure() {
  const [open, setOpen] = useState(false);

  const stack = [
    {
      layer: "Customer storefront",
      detail: "Next.js · React · Tailwind CSS",
    },
    {
      layer: "Admin dashboard",
      detail: "Next.js · Protected routes · Role-based access",
    },
    {
      layer: "API",
      detail: "Node.js · Express · TypeScript",
    },
    {
      layer: "Database",
      detail: "MongoDB · Mongoose",
    },
    {
      layer: "Media",
      detail: "Cloudinary (image hosting & optimisation)",
    },
    {
      layer: "Design & prototyping",
      detail: "Figma",
    },
    {
      layer: "Deployment",
      detail: "Vercel (storefront) · Vercel (admin)",
    },
  ];

  return (
    <div className="mt-10 overflow-hidden rounded-[--radius-xl] border border-[--color-divider]">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="tech-details-panel"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-semibold text-[--color-text-secondary] transition-colors hover:bg-[--color-raised] hover:text-[--color-text-primary] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[--color-accent-primary]"
      >
        <span>Technical details</span>
        {open ? (
          <ChevronUp size={16} aria-hidden="true" />
        ) : (
          <ChevronDown size={16} aria-hidden="true" />
        )}
      </button>

      <div
        id="tech-details-panel"
        hidden={!open}
        className="border-t border-[--color-divider]"
      >
        <dl className="divide-y divide-[--color-divider]">
          {stack.map(({ layer, detail }) => (
            <div key={layer} className="flex items-baseline gap-4 px-6 py-3">
              <dt className="w-40 shrink-0 text-xs font-semibold tracking-wider text-[--color-text-muted] uppercase">
                {layer}
              </dt>
              <dd className="text-sm text-[--color-text-secondary]">
                {detail}
              </dd>
            </div>
          ))}
        </dl>
        <p className="px-6 pt-2 pb-4 text-xs text-[--color-text-muted]">
          Stack verified against the public repository at the time of writing.
        </p>
      </div>
    </div>
  );
}

// ── Admin capability diagram (text-based, no invented screenshot) ─────────────

function AdminCapabilities() {
  const capabilities = [
    {
      icon: "📦",
      title: "Products & stock",
      body: "Add products with multiple colour and size variants. Stock counts per size are updated as orders are placed.",
    },
    {
      icon: "🏷️",
      title: "Promotions & collections",
      body: "Create and schedule discount codes, mark items as new drops or best sellers, and group products into named collections.",
    },
    {
      icon: "📋",
      title: "Orders & fulfilment",
      body: "View incoming orders, update delivery status, and review order details including verified totals from the API.",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {capabilities.map(({ icon, title, body }) => (
        <div
          key={title}
          className="rounded-[--radius-lg] border border-[--color-divider] bg-[--color-surface] p-5"
        >
          <div className="mb-3 text-2xl" aria-hidden="true">
            {icon}
          </div>
          <h4 className="mb-1.5 text-sm font-semibold text-[--color-text-primary]">
            {title}
          </h4>
          <p className="max-w-none text-sm leading-relaxed text-[--color-text-secondary]">
            {body}
          </p>
        </div>
      ))}
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────

export function KavonCaseStudy() {
  const [lightboxImage, setLightboxImage] = useState<LightboxImage | null>(
    null
  );

  const openLightbox = useCallback((img: LightboxImage) => {
    setLightboxImage(img);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxImage(null);
  }, []);

  return (
    <>
      {/* ── Lightbox ── */}
      <Lightbox image={lightboxImage} onClose={closeLightbox} />

      <article className="pb-32">
        {/* ── Back navigation ── */}
        <div className="pt-8 pb-0">
          <Container size="lg">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm font-medium text-[--color-text-muted] transition-colors hover:text-[--color-text-primary] focus-visible:rounded focus-visible:outline-2 focus-visible:outline-[--color-accent-primary]"
            >
              <ArrowLeft size={15} aria-hidden="true" />
              All projects
            </Link>
          </Container>
        </div>

        {/* ════════════════════════════════════════════════════════════
            SECTION 1 — Project introduction
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="kavon-title" className="pt-14 pb-20">
          <Container size="lg">
            <Reveal className="mb-10 flex flex-col gap-5">
              <KavonRule />

              <h1
                id="kavon-title"
                className="font-display text-(length:--text-5xl) leading-[1.05] font-black tracking-tight text-[--color-text-primary]"
              >
                KAVON
              </h1>

              <p className="max-w-[52ch] text-(length:--text-xl) leading-snug font-medium text-[--color-text-secondary]">
                An online store for a bold streetwear brand.
              </p>

              <p className="max-w-[60ch] text-(length:--text-base) leading-relaxed text-[--color-text-secondary]">
                I designed and built KAVON&apos;s online store, bringing its
                bold streetwear identity into the shopping experience. My work
                covered the customer website, admin tools, and the connections
                between products, checkout, and orders.
              </p>

              <MetaPills />

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Button
                  as="a"
                  href={LIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="md"
                  variant="primary"
                  style={{ backgroundColor: KAVON_RED }}
                  className="gap-2 hover:brightness-110"
                >
                  <ExternalLink size={15} aria-hidden="true" />
                  View live website
                </Button>

                <Button
                  as="a"
                  href={REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="md"
                  variant="ghost"
                  className="gap-2"
                >
                  <GitFork size={15} aria-hidden="true" />
                  Repository
                </Button>
              </div>
            </Reveal>

            {/* Hero image — full width */}
            <Reveal delay={0.15}>
              <Screenshot
                src="/images/projects/web_development/kavon/01-home-hero.jpg"
                alt="KAVON storefront homepage showing the hero banner 'WEAR POWER. WEAR KAVON.' with navigation, search and featured collections"
                caption="KAVON storefront — homepage with hero banner, navigation bar and featured collections."
                onOpen={openLightbox}
                priority
                className="w-full"
              />
            </Reveal>
          </Container>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 2 — What the project needed
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="section-brief" className="py-20">
          <Container size="md">
            <Reveal>
              <SectionLabel n="01" label="Brief" />

              <h2
                id="section-brief"
                className="font-display mb-6 text-(length:--text-3xl) leading-snug font-bold tracking-tight text-[--color-text-primary]"
              >
                What the project needed
              </h2>

              <div className="flex max-w-[65ch] flex-col gap-4">
                <p className="max-w-none text-(length:--text-base) leading-relaxed text-[--color-text-secondary]">
                  The goal was to give KAVON a strong online presence while
                  keeping product selection, delivery costs and checkout easy to
                  understand. The store also needed tools to manage products and
                  orders behind the scenes.
                </p>
                <p className="max-w-none text-(length:--text-base) leading-relaxed text-[--color-text-secondary]">
                  I designed the interfaces, built the customer-facing Next.js
                  storefront, implemented the admin dashboard, and connected
                  both to a shared Express API backed by MongoDB. The API
                  handles price validation, stock checks, discount application
                  and order total verification so the numbers customers see are
                  always accurate.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "Node.js / Express",
                  "MongoDB",
                  "Cloudinary",
                  "Figma",
                ].map((tool) => (
                  <Tag key={tool} variant="default">
                    {tool}
                  </Tag>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 3 — Three decisions
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="section-decisions" className="py-20">
          <Container size="lg">
            <Reveal>
              <SectionLabel n="02" label="Interface decisions" />
              <h2
                id="section-decisions"
                className="font-display mb-16 text-(length:--text-3xl) leading-snug font-bold tracking-tight text-[--color-text-primary]"
              >
                Three decisions that shaped the experience
              </h2>
            </Reveal>

            {/* — Decision A: Catalog — wide screenshot */}
            <Reveal className="mb-24">
              <div className="mb-8">
                <Screenshot
                  src="/images/projects/web_development/kavon/03-shop-catalog.jpg"
                  alt="KAVON product catalog showing filter sidebar with category chips, price slider and sort dropdown, and a 3-column grid of streetwear products"
                  caption="Shop page — category filters, price range slider, and sort controls narrow a full catalogue of streetwear products."
                  onOpen={openLightbox}
                />
              </div>

              <div className="max-w-[65ch]">
                <h3
                  className="font-display mb-3 text-(length:--text-2xl) font-bold tracking-tight text-[--color-text-primary]"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  A — Finding the right product
                </h3>
                <p className="max-w-none text-(length:--text-base) leading-relaxed text-[--color-text-secondary]">
                  The catalog page combines a persistent left-side filter panel
                  with a responsive product grid. Customers can narrow results
                  by category (Oversized, Hoodies, T-Shirts, and more), apply a
                  price range and choose a sort order — newest, price ascending
                  or descending, or best sellers. The active filter state is
                  reflected in the URL so results can be bookmarked or shared.
                </p>
              </div>
            </Reveal>

            {/* — Decision B: Product — image/text split */}
            <Reveal className="mb-24">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <Screenshot
                  src="/images/projects/web_development/kavon/04-tactical-tee-product.jpg"
                  alt="KAVON product detail page showing hoodie photograph, colour swatches, size buttons, stock indicator, delivery estimate and Add to Cart button"
                  caption="Product page — colour, size, stock and delivery information sit directly above the purchase action."
                  onOpen={openLightbox}
                />

                <div>
                  <h3 className="font-display mb-3 text-(length:--text-2xl) font-bold tracking-tight text-[--color-text-primary]">
                    B — Making product choices clearer
                  </h3>
                  <p className="max-w-none text-(length:--text-base) leading-relaxed text-[--color-text-secondary]">
                    On the product page, colour swatches, size buttons and a
                    per-size availability indicator appear before the Add to
                    Cart action. When a size is low in stock the page surfaces
                    that information immediately. Delivery eligibility and an
                    estimated timeframe sit just below the price, so customers
                    know what to expect before committing.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* — Decision C: Cart — focused detail */}
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
                <div className="order-2 lg:order-1 lg:max-w-[52ch]">
                  <h3 className="font-display mb-3 text-(length:--text-2xl) font-bold tracking-tight text-[--color-text-primary]">
                    C — Knowing what is in the order
                  </h3>
                  <p className="max-w-none text-(length:--text-base) leading-relaxed text-[--color-text-secondary]">
                    The cart shows each selected variant — product name, chosen
                    size, quantity controls — alongside the order summary: line
                    totals, an estimated shipping cost and any active discount.
                    The server recalculates prices, stock, discounts, shipping
                    and the final total when checkout begins, so what customers
                    see in the cart is confirmed rather than assumed.
                  </p>
                </div>

                <div className="order-1 w-full lg:order-2 lg:w-115">
                  <Screenshot
                    src="/images/projects/web_development/kavon/08-tactical-tee-cart.jpg"
                    alt="KAVON cart page showing two products with size and quantity controls on the left, and an order summary panel with subtotal, shipping, discount and order total on the right"
                    caption="Cart — variant details and the running total are visible before checkout begins."
                    onOpen={openLightbox}
                  />
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 4 — Behind the storefront
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="section-admin" className="py-20">
          <Container size="md">
            <Reveal>
              <SectionLabel n="03" label="Admin & platform" />

              <h2
                id="section-admin"
                className="font-display mb-6 text-(length:--text-3xl) leading-snug font-bold tracking-tight text-[--color-text-primary]"
              >
                Behind the storefront
              </h2>

              <p className="mb-10 max-w-none text-(length:--text-base) leading-relaxed text-[--color-text-secondary]">
                I also built the tools behind the storefront, so products, stock
                and orders could be managed through the same platform. The admin
                dashboard is a separate protected Next.js application that
                connects to the same API.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <AdminCapabilities />
              <TechDisclosure />
            </Reveal>
          </Container>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 5 — What I built and what comes next
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="section-reflection" className="py-20">
          <Container size="md">
            <Reveal>
              <SectionLabel n="04" label="Reflection" />

              <h2
                id="section-reflection"
                className="font-display mb-6 text-(length:--text-3xl) leading-snug font-bold tracking-tight text-[--color-text-primary]"
              >
                What I built, and what comes next
              </h2>

              <div className="flex max-w-[65ch] flex-col gap-5">
                <p className="max-w-none text-(length:--text-base) leading-relaxed text-[--color-text-secondary]">
                  The project connects a responsive storefront, customer
                  accounts, an authenticated checkout flow and store management
                  in one platform. It shows how I bring interface design and
                  development together across the customer and admin experience.
                </p>

                {/* Divider between built and future */}
                <div className="my-2 flex items-center gap-4">
                  <KavonRule />
                  <span className="text-xs font-semibold tracking-wider text-[--color-text-muted] uppercase">
                    What I&apos;d focus on next
                  </span>
                </div>

                <p className="max-w-none text-(length:--text-base) leading-relaxed text-[--color-text-secondary]">
                  Next, I&apos;d focus on clearer product photography and
                  testing the full order journey end to end — from account
                  verification through to delivery status updates. Card payments
                  are currently marked as coming soon in the checkout; that
                  would be the natural next implementation step.
                </p>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 6 — Closing actions
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="section-closing" className="py-20">
          <Container size="md">
            <Reveal>
              <div
                className="rounded-[--radius-2xl] border border-[--color-divider] bg-[--color-surface] p-8 sm:p-12"
                style={{
                  background: `linear-gradient(135deg, var(--color-surface) 0%, rgba(200,16,46,0.04) 100%)`,
                }}
              >
                <KavonRule className="mb-6" />

                <h2
                  id="section-closing"
                  className="font-display mb-3 text-(length:--text-3xl) font-bold tracking-tight text-[--color-text-primary]"
                >
                  Have a project in mind?
                </h2>

                <p className="mb-8 max-w-[52ch] text-(length:--text-base) leading-relaxed text-[--color-text-secondary]">
                  I&apos;m currently open for new opportunities in UI/UX design
                  and frontend development.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button
                    as="a"
                    href="/#contact"
                    size="lg"
                    variant="primary"
                    style={{ backgroundColor: KAVON_RED }}
                    className="gap-2 hover:brightness-110"
                  >
                    Let&apos;s talk
                    <ArrowRight size={16} aria-hidden="true" />
                  </Button>

                  <Button
                    as="a"
                    href={LIVE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                    variant="secondary"
                    className="gap-2"
                  >
                    <ExternalLink size={15} aria-hidden="true" />
                    View live website
                  </Button>
                </div>

                <div className="mt-8 border-t border-[--color-divider] pt-8">
                  <Link
                    href="/#work"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[--color-text-muted] transition-colors hover:text-[--color-text-primary] focus-visible:rounded focus-visible:outline-2 focus-visible:outline-[--color-accent-primary]"
                  >
                    <ArrowLeft size={14} aria-hidden="true" />
                    Back to all projects
                  </Link>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>
      </article>
    </>
  );
}
