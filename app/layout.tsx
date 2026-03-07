import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

/** JSON-LD structured data for SEO (Schema.org) */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.burningmath.com/#organization",
      name: "Burning Math Academy",
      url: "https://www.burningmath.com",
      logo: "https://www.burningmath.com/assets/logo.png",
      image: "https://www.burningmath.com/assets/og-home.jpg",
      description:
        "Competition math coaching and AI-powered diagnostic platform for grades 4–12.",
      email: "zengmushi1993@gmail.com",
      sameAs: [] as string[],
      areaServed: [
        "Vancouver",
        "Richmond",
        "Burnaby",
        "West Vancouver",
        "Delta",
        "Greater Vancouver",
        "British Columbia",
        "Canada",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Richmond",
        addressRegion: "BC",
        addressCountry: "CA",
      },
      knowsAbout: [
        "Competition Math",
        "AMC",
        "AIME",
        "Euclid",
        "Gauss",
        "Elmacon",
        "Waterloo Math Contests",
        "COMC",
        "CSMC",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://www.burningmath.com/#james-zeng",
      name: "James Zeng",
      jobTitle: "Competition Math Coach",
      worksFor: { "@id": "https://www.burningmath.com/#organization" },
      url: "https://www.burningmath.com/coach",
      description:
        "Competition math coach with Olympiad-level background and AI-powered training system.",
      knowsAbout: [
        "Competition Math",
        "AMC",
        "AIME",
        "Euclid",
        "Math Olympiad",
        "Problem Solving",
        "Waterloo Math Contests",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.burningmath.com/#website",
      name: "Burning Math Academy",
      url: "https://www.burningmath.com",
      publisher: { "@id": "https://www.burningmath.com/#organization" },
    },
  ],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.burningmath.com"),
  title: "Burning Math Academy | AMC / AIME Competition Math Coaching",
  description:
    "Competition math coaching and AI-powered diagnostic platform. AMC, AIME, Gauss preparation for grades 4–12.",
  openGraph: {
    title: "Burning Math Academy",
    description: "Competition Math Coaching + AI Analytics",
    url: "https://www.burningmath.com",
    siteName: "Burning Math Academy",
    images: [
      {
        url: "https://www.burningmath.com/assets/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Burning Math Academy Competition Math Coaching",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Burning Math Academy",
    description: "Competition Math Coaching + AI Analytics",
    images: ["https://www.burningmath.com/assets/og-home.jpg"],
  },
  icons: {
    icon: [{ url: "/brand/bma-favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/brand/bma-favicon.svg", type: "image/svg+xml", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
