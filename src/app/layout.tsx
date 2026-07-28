import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import GSAPProvider from "@/components/animations/GSAPProvider";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

function getMetadataBase(): URL {
  const fallback = "http://localhost:3000";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || fallback;

  try {
    return new URL(siteUrl);
  } catch {
    return new URL(fallback);
  }
}

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: "Wathshala Amarasinghe | UI/UX Designer",
    template: "%s | Wathshala Amarasinghe",
  },
  description:
    "Portfolio of Wathshala Amarasinghe, UI/UX Designer and Associate UI/UX Developer.",
  applicationName: "Wathshala Amarasinghe Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <Header />
        <GSAPProvider>{children}</GSAPProvider>
        <Footer />
      </body>
    </html>
  );
}
