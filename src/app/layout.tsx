import type { Metadata, Viewport } from "next";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "../lib/site";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0e0e10",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s — Ari Zubaidi",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Ari Zubaidi",
    "Kepala Desa Kronggen",
    "Pilkades Kronggen",
    "Pilkades 2026",
    "Desa Kronggen",
    "Calon Kepala Desa",
  ],
  authors: [{ name: "Tim Kampanye Ari Zubaidi" }],
  creator: "Tim Kampanye Ari Zubaidi",
  publisher: "Tim Kampanye Ari Zubaidi",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Ari Zubaidi, Calon Kepala Desa Kronggen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/images/og.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: "id-ID",
    },
    {
      "@type": "Person",
      name: "Ari Zubaidi",
      jobTitle: "Calon Kepala Desa Kronggen",
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      image: `${SITE_URL}/images/og.jpg`,
      knowsAbout: [
        "Pemerintahan Desa",
        "Pilkades Kronggen",
        "Pemberdayaan Masyarakat",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="bg-ink text-bone antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
