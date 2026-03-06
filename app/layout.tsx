import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Burning Math Academy | Competition Math Coaching + AI Analytics",
  description:
    "Personalized competition math training for G4–G12 across COMC, AMC, Waterloo (Gauss–Euclid). AI-driven assessment and measurable results in Vancouver.",
  openGraph: {
    title: "Burning Math Academy | Competition Math Coaching + AI Analytics",
    description:
      "Personalized competition math training for G4–G12. AI-driven assessment. Proven outcomes.",
    type: "website",
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
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
