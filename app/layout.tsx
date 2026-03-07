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
  metadataBase: new URL("https://www.burningmath.com"),
  title: "Burning Math Academy | AMC / AIME Competition Math Coaching",
  description:
    "Competition math coaching and AI-powered diagnostic platform. AMC, AIME, Gauss preparation for grades 4–12.",
  openGraph: {
    title: "Burning Math Academy | AMC / AIME Competition Math Coaching",
    description:
      "Competition math coaching and AI-powered diagnostic platform. AMC, AIME, Gauss preparation for grades 4–12.",
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
