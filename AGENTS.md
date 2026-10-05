<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

# Wathshala Amarasinghe Portfolio — Agent Instructions

## 1. Architecture & Component Boundaries
- **UI Shell**: 3-column layout on desktop (Profile, Content, Nav Rail). Single column on mobile with a sticky header.
- **Server Components by Default**: Next.js App Router conventions apply. Keep GSAP, React state, and event listeners in focused `use client` components (e.g., `Reveal`, `MobileMenu`).
- **Styles**: Tailwind CSS v4 is used alongside CSS custom properties (`src/styles/tokens.css`) for the design system. `cn()` is the standard utility for class merging.

## 2. Design Tokens & Dark Theme
- **Theme**: Fixed dark theme. Background `#08090D`, Surface `#101218`, Accents `#A995FF` and `#92D6FF`.
- **Variables**: Always use semantic variables (e.g., `bg-[--color-bg]`, `text-[--color-accent-primary]`) instead of hardcoded hex values or generic Tailwind colors.
- **Typography**: Fluid typography is set in `tokens.css`. Use heading variables (`var(--text-4xl)`) or standard Tailwind text utilities that map to these sizes.

## 3. Content Accuracy
- **Truth Source**: Use `src/data/*.ts` for all text and portfolio items.
- **No Inventions**: Do not hallucinate metrics, awards, dates, or outcomes. Only use the provided CV and project context.
- **Draft Status**: Projects with `status: "draft"` should not render links to case-study pages.

## 4. Accessibility & Reduced Motion
- **A11y**: Ensure keyboard navigability. Maintain the `SkipLink` at the root. Use proper ARIA attributes for modals and interactive elements.
- **Motion**: Respect `prefers-reduced-motion`. The `Reveal` component and CSS tokens are already configured to disable transitions when this is active. Do not add decorative looping animations without checking the `useReducedMotion` hook.

## 5. Dependency Policy
- **Strict**: Do not install extra dependencies (e.g., framer-motion, three.js, cms clients) without explicit approval. GSAP is the standard for complex scroll animations.

## 6. Validation
- Run formatting and type checks before committing: `npm run format && npm run typecheck`.
- Validate with Playwright: `npm run test`.
