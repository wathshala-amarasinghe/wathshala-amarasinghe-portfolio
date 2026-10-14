# Setup and Deployment

## Prerequisites

- Node.js 20.9 or newer; Node.js 24 is recommended for parity with the verified local environment.
- npm 10 or newer.
- Chromium installed by Playwright when running browser tests.
- A Gmail account with two-step verification and an App Password for contact-form delivery.

## Fresh clone

```powershell
git clone <repository-url>
Set-Location wathshala-amarasinghe-portfolio
npm ci
Copy-Item .env.example .env.local
```

Update `.env.local` with server-only values:

```env
GMAIL_USER=your-gmail-address@example.com
GMAIL_APP_PASSWORD=your-16-character-google-app-password
CONTACT_TO_ADDRESS=optional-recipient@example.com
```

Only `GMAIL_USER` and `GMAIL_APP_PASSWORD` are required. Spaces copied with a Google App Password are removed by the endpoint. `CONTACT_TO_ADDRESS` is optional and must never come from the browser request.

Start development:

```powershell
npm run dev
```

Open <http://localhost:3000>. If the port is occupied, Next.js reports the alternative port or the existing process using it.

## Validation

Run these before deployment:

```powershell
npm run format
npm run typecheck
npm run lint
npm run test
npm run build
```

The Playwright configuration starts a local Next.js server and tests desktop and mobile Chromium. Contact tests use invalid or blocked payloads and do not intentionally send genuine messages.

## Contact delivery

The endpoint is `POST /api/contact` and accepts JSON containing `user_name`, `user_email` and `message`. It validates types, lengths, email format, request size, content type and origin before asking Gmail to deliver the message.

For Gmail:

1. Enable two-step verification on the sending account.
2. Create a Google App Password.
3. Set `GMAIL_USER` to that account.
4. Set `GMAIL_APP_PASSWORD` to the App Password, not the normal account password.
5. Restart the development server after changing `.env.local`.

The UI reports success only after Gmail accepts the recipient. Provider acceptance does not guarantee Inbox placement; Gmail filters and mailbox settings still apply.

## Vercel deployment

1. Import the repository into Vercel.
2. Add `GMAIL_USER` and `GMAIL_APP_PASSWORD` under Project Settings → Environment Variables.
3. Add `CONTACT_TO_ADDRESS` only when a different recipient is required.
4. Deploy and verify `/`, all three `/work/*` routes, `/robots.txt`, `/sitemap.xml` and `/opengraph-image`.
5. Confirm the production response includes the security headers configured in `next.config.ts`.
6. Keep `wathshalaamarasinghe.com` as the canonical production domain.

Do not upload `.env.local`, Gmail credentials, Playwright reports or `.next` output.

## Performance behavior

The decorative MP4 remains part of the desktop design. It is homepage-only and is requested 2.5 seconds after the first pointer, keyboard or scroll interaction, with a ten-second fallback for an idle desktop. It is not requested when the viewport is mobile-sized, reduced motion is requested or the browser is in data-saving mode. A static gradient is always available as the fallback. Playback pauses when the tab is hidden.

The preloader does not depend on GSAP, does not intercept pointer input, skips fast/repeat loads and is capped at 800 ms on slow first loads.
