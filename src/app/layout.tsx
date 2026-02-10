import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Auxite Global — Institutional Infrastructure for Digital Precious Metals",
  description: "Governance-led architecture designed to support resilient real-world asset ecosystems. Multi-entity institutional structure built for long-term confidence.",
  keywords: ["precious metals", "institutional infrastructure", "digital assets", "governance", "gold", "silver", "platinum", "palladium"],
  authors: [{ name: "Auxite Global" }],
  openGraph: {
    title: "Auxite Global — Institutional Infrastructure for Digital Precious Metals",
    description: "Governance-led architecture designed to support resilient real-world asset ecosystems.",
    type: "website",
    locale: "en_US",
    siteName: "Auxite Global",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auxite Global — Institutional Infrastructure for Digital Precious Metals",
    description: "Governance-led architecture designed to support resilient real-world asset ecosystems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
