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
  keywords: ["precious metals", "institutional infrastructure", "digital assets", "governance", "gold", "silver", "platinum", "palladium", "auxite", "auxite global", "tokenized metals"],
  authors: [{ name: "Auxite Global" }],
  creator: "Auxite Global",
  publisher: "Auxite Global",
  metadataBase: new URL("https://auxiteglobal.com"),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Auxite Global — Institutional Infrastructure for Digital Precious Metals",
    description: "Governance-led architecture designed to support resilient real-world asset ecosystems.",
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
    title: "Auxite Global — Institutional Infrastructure for Digital Precious Metals",
    description: "Governance-led architecture designed to support resilient real-world asset ecosystems.",
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
  alternates: {
    canonical: "https://auxiteglobal.com",
  },
};

// JSON-LD Structured Data — Organization + WebSite
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://auxiteglobal.com/#organization',
      name: 'Auxite Global',
      url: 'https://auxiteglobal.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://auxiteglobal.com/images/auxite-logo.png',
        width: 512,
        height: 512,
      },
      description: 'Auxite Global is a governance-led institutional infrastructure group for digital precious metals. Multi-entity structure designed for resilient real-world asset ecosystems.',
      sameAs: [
        'https://x.com/auxite',
        'https://auxite.io',
      ],
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
