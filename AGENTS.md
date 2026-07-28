<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Wathshala Amarasinghe Portfolio

This repository presents Wathshala Amarasinghe's UI/UX, product-design, and
frontend collaboration work. It uses the Next.js App Router, React, strict
TypeScript, Tailwind CSS, and GSAP 3 with `@gsap/react`.

Important folders:

- `src/app`: routes, root layout, metadata, and global styles.
- `src/components`: reusable layout, UI, and client-only animation components.
- `src/data` and `src/types`: verified portfolio content and shared contracts.
- `public/images` and `public/resume`: user-provided production assets.
- `references`: source material; never ship it automatically.

Use GSAP only for JavaScript animation. Do not add Framer Motion or another
animation library. Scope selectors, clean up with `useGSAP`, and make all
content immediately visible with JavaScript disabled or reduced motion enabled.

Accessibility is required: semantic HTML, keyboard access, visible focus,
adequate contrast, reduced-motion support, and responsive layouts from 360px.

Never fabricate projects, research, outcomes, testimonials, client details,
statistics, education, or experience. Never disclose confidential project
information. Preserve user-provided images, CVs, and references.

Inspect every existing file before overwriting it. Verify changes with:

1. `npm run lint`
2. `npx tsc --noEmit`
3. `npm run build`
