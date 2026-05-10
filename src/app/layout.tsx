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
  title: "Auxite Global — Institutional Infrastructure | Aurum Ledger Limited",
  description: "Governance-led institutional infrastructure group for digital precious metals. Multi-entity structure designed for resilient real-world asset ecosystems. Operator of the Auxite platform (auxite.io).",
  keywords: ["auxite global", "aurum ledger limited", "institutional infrastructure", "governance", "digital precious metals", "real world assets", "RWA", "multi-entity holding"],
  authors: [{ name: "Aurum Ledger Limited" }],
  creator: "Aurum Ledger Limited",
  publisher: "Aurum Ledger Limited",
  metadataBase: new URL("https://auxiteglobal.com"),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Auxite Global — Institutional Infrastructure | Aurum Ledger Limited",
    description: "Governance-led institutional infrastructure group for digital precious metals. Operator of the Auxite platform (auxite.io).",
    type: "website",
    locale: "en_US",
    url: "https://auxiteglobal.com",
    siteName: "Auxite Global",
    images: [
      {
        url: "https://auxiteglobal.com/images/auxite-logo.png",
        width: 1200,
        height: 630,
        alt: "Auxite Global — Institutional Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auxite Global — Institutional Infrastructure | Aurum Ledger Limited",
    description: "Governance-led institutional infrastructure group for digital precious metals.",
    images: ["https://auxiteglobal.com/images/auxite-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Each page is canonical to itself (Next.js default). Do NOT blanket-canonical
  // to auxite.io — that deindexes auxiteglobal.com entirely, defeating the
  // corporate-vs-product split. Cross-site relationship is signaled via
  // sameAs / subOrganization JSON-LD below instead.
};

// JSON-LD Structured Data — Organization + WebSite
//
// Brand-entity model: this site represents the institutional holding
// (Aurum Ledger Limited / Auxite Global), and explicitly declares the
// Auxite platform (auxite.io) as a subOrganization. Google uses this
// to keep the two domains as separate entities — corporate vs product —
// rather than treating them as duplicate sites.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://auxiteglobal.com/#organization',
      name: 'Auxite Global',
      legalName: 'Aurum Ledger Limited',
      alternateName: ['Aurum Ledger', 'Auxite Global Group'],
      url: 'https://auxiteglobal.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://auxiteglobal.com/images/auxite-logo.png',
        width: 512,
        height: 512,
      },
      description: 'Aurum Ledger Limited (Auxite Global) is a governance-led institutional infrastructure group for digital precious metals. Multi-entity structure designed for resilient real-world asset ecosystems.',
      foundingLocation: {
        '@type': 'Place',
        address: { '@type': 'PostalAddress', addressCountry: 'HK' },
      },
      sameAs: [
        'https://x.com/AuxiteGlobal',
        'https://auxite.io',
      ],
      subOrganization: {
        '@type': 'Organization',
        '@id': 'https://auxite.io/#organization',
        name: 'Auxite',
        url: 'https://auxite.io',
        description: 'Auxite is the digital-asset custody platform operated by Aurum Ledger Limited for tokenized precious metals (gold, silver, platinum, palladium).',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'institutional inquiries',
        url: 'https://auxiteglobal.com/contact',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://auxiteglobal.com/#website',
      url: 'https://auxiteglobal.com',
      name: 'Auxite Global',
      description: 'Institutional Infrastructure for Digital Precious Metals — Governance-led architecture for resilient real-world asset ecosystems.',
      publisher: { '@id': 'https://auxiteglobal.com/#organization' },
      inLanguage: 'en',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta name="theme-color" content="#0B1121" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
