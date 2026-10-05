# Setup Instructions

## 1. Prerequisites
- Node.js >= 24
- npm >= 11
- Chrome (for Playwright testing)

## 2. Installation
Dependencies are already installed. If you clone this fresh, run:
```bash
npm install
```

## 3. Recommended Editor Setup
If using VS Code, install the recommended extensions:
- ESLint (`dbaeumer.vscode-eslint`)
- Prettier (`esbenp.prettier-vscode`)
- Tailwind CSS IntelliSense (`bradlc.vscode-tailwindcss`)

The workspace is configured to format and fix ESLint errors on save.

## 4. Development Commands
- `npm run dev` - Start local development server on `http://localhost:3000`
- `npm run build` - Build the production application
- `npm run start` - Start the built production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript compiler checks
- `npm run format` - Run Prettier formatting
- `npm run test` - Run Playwright E2E and Accessibility tests

## 5. Next Steps
1. Review `docs/asset-manifest.md` and add the required images and documents.
2. Update placeholders in `src/data/experience.ts`.
3. Update placeholder email and cvPath in `src/data/profile.ts`.
4. Run `npm run test` to verify everything is passing.
