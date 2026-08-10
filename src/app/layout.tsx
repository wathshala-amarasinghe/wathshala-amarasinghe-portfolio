import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { PageLoader } from "@/components/ui/PageLoader";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: "%s | Wathshala Amarasinghe",
    default: "Wathshala Amarasinghe — UI/UX Designer & Business Analyst",
  },
  description:
    "Explore the portfolio and case studies of Wathshala Amarasinghe, a UI/UX designer and business analyst in Sri Lanka focused on clear, user-centred digital experiences.",
  applicationName: "Wathshala Amarasinghe Portfolio",
  authors: [{ name: "Wathshala Amarasinghe" }],
  creator: "Wathshala Amarasinghe",
  publisher: "Wathshala Amarasinghe",
  openGraph: {
    title: {
      template: "%s | Wathshala Amarasinghe",
      default: "Wathshala Amarasinghe — UI/UX Designer & Business Analyst",
    },
    description:
      "Explore the portfolio and case studies of Wathshala Amarasinghe, a UI/UX designer and business analyst in Sri Lanka focused on clear, user-centred digital experiences.",
    url: baseUrl,
    siteName: "Wathshala Amarasinghe",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      template: "%s | Wathshala Amarasinghe",
      default: "Wathshala Amarasinghe — UI/UX Designer & Business Analyst",
    },
    description:
      "Explore the portfolio and case studies of Wathshala Amarasinghe, a UI/UX designer and business analyst in Sri Lanka focused on clear, user-centred digital experiences.",
    creator: "@wathshala",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${outfit.variable} h-full antialiased bg-background text-foreground dark`}
    >
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden bg-background text-foreground selection:bg-gold selection:text-background">
        <PageLoader />
        <CustomCursor />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
