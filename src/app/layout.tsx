import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Web Design Agency",
  description: "Modern web design and development portfolio",
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
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
