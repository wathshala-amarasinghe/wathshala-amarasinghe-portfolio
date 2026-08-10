# Wathshala Amarasinghe — Portfolio

Personal portfolio built with Next.js 16, TypeScript, Tailwind CSS, and MDX.

## Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Content**: MDX (gray-matter + next-mdx-remote)
- **Animations**: Motion (Framer Motion)
- **Deployment**: Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

Copy `.env.example` to `.env.local` and set the values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production URL (e.g. `https://wathshala-amarasinghe.vercel.app`) |

## Deployment

Push to GitHub and connect to [Vercel](https://vercel.com). Set `NEXT_PUBLIC_SITE_URL` in the Vercel environment variables dashboard.
