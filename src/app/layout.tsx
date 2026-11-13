import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { profile } from "@/data/profile";
import { SkipLink } from "@/components/ui/skip-link";
import "./globals.css";

const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim();

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    locale: "en_US",
    images: [
      {
        url: siteConfig.ogImage ?? "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage ?? "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} portfolio`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: googleSiteVerification
    ? { google: googleSiteVerification }
    : undefined,
  icons: {
    icon: {
      url: "/images/profile/my_logo.png",
      type: "image/png",
    },
    shortcut: "/images/profile/my_logo.png",
    apple: "/images/profile/my_logo.png",
  },
};

const personId = `${siteConfig.url}/#person`;
const websiteId = `${siteConfig.url}/#website`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: profile.name,
      url: siteConfig.url,
      image: profile.avatar ? `${siteConfig.url}${profile.avatar}` : undefined,
      jobTitle: profile.title,
      description: profile.bio,
      address: {
        "@type": "PostalAddress",
        addressCountry: "LK",
      },
      sameAs: profile.socials.map((social) => social.href),
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: siteConfig.locale,
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteConfig.url}/#profile-page`,
      url: siteConfig.url,
      name: siteConfig.title,
      description: siteConfig.description,
      dateModified: siteConfig.contentUpdatedAt,
      inLanguage: siteConfig.locale,
      isPartOf: { "@id": websiteId },
      mainEntity: { "@id": personId },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.locale} className="antialiased">
      <body>
        <script
          id="portfolio-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
