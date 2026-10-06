// ─────────────────────────────────────────────
//  Root Layout
// ─────────────────────────────────────────────

import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { SkipLink } from "@/components/ui/skip-link";
import { CustomCursor } from "@/components/motion/custom-cursor";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: {
      url: "/images/profile/my_logo.png",
      type: "image/png",
    },
    shortcut: "/images/profile/my_logo.png",
    apple: "/images/profile/my_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.locale} className="antialiased">
      <body>
        <CustomCursor />
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
