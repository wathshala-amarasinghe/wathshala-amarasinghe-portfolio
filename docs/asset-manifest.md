# Public Asset Manifest

This document records the assets that currently exist under `public`. Paths are case-sensitive after deployment.

## Profile and documents

- `/images/profile/Profile_Pic.png` — main profile photograph used by the desktop and mobile profile cards.
- `/images/profile/my_logo.png` — personal logo and site icon.
- `/documents/Wathshala-Amarasinghe-UI-UX-Engineer-CV.pdf` — downloadable CV.

## Background media

- `/videos/background/Wathshala-Portfolio-Wave-Background.mp4` — 2.64 MB decorative background video.

The site requests this video only on the homepage and never on mobile, reduced-motion or data-saving connections. Desktop loading waits until 2.5 seconds after interaction or a ten-second idle fallback so primary content and the profile image receive priority. The CSS gradient in `AmbientBackground` is the permanent fallback.

## Public project assets

### LUMI

- `/LUMI_UI/LUMI_VIDEO.mp4` — interactive prototype walkthrough used on the LUMI case-study page. It uses user-controlled playback and does not preload before the viewer starts it.
- `/images/projects/ui_ux/lumi/lumi-home.webp` — optimized homepage and project-card cover exported from the Figma source.
- `/images/projects/ui_ux/lumi/lumi-discover.webp` — optimized discovery experience exported from the Figma source.
- `/images/projects/ui_ux/lumi/lumi-featured-trailer.webp` — optimized featured-trailer experience exported from the Figma source.
- `/images/projects/ui_ux/lumi/lumi-my-list.webp` — optimized saved-title experience exported from the Figma source.

The screenshots were exported from the supplied LUMI Figma prototype and are stored locally so the deployed portfolio does not depend on temporary Figma asset URLs.

### KAVON

The KAVON case study uses ten optimized JPG screenshots under:

`/images/projects/web_development/kavon/`

Files are numbered `01-home-hero.jpg` through `10-brand-story.jpg` and are referenced from `src/data/projects.ts` and the KAVON case-study component.

### Smart Web POS

No verified product screenshots are currently stored in the repository. The published case study therefore uses an HTML/CSS workflow map based on the documented modules. Add real screenshots only after confirming that they are accurate and safe to publish.

Recommended future assets:

- Billing workspace overview
- Product and inventory management
- Reporting or export workflow
- Role or permission management

Store approved files in `/images/projects/web_development/smart-web-pos/` and update `src/data/projects.ts` plus the case-study component.

### Nation Spice

- `/images/projects/graphic/Nation_Spice.jpg` — completed logo artwork shown on the card and case-study page.

Future packaging or identity-system images should be added only when they represent completed work.

## Education and technology icons

- `/images/educational/Figma_to_Lottie.jpeg` — LottieFiles course certificate.
- `/icons/tech/*` — technology icons displayed in the tools section.
- License notices for the icon sources are stored beside the icons and must remain in the repository.

