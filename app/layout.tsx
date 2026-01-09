import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const robotoMono = Roboto_Mono({ subsets: ["latin"], variable: "--font-roboto-mono" });

export const metadata: Metadata = {
  title: "Emerita Clinical™ - The Sovereign Infrastructure Design House",
  description:
    "Sovereign Infrastructure for the High-Stakes Economy. EmeritaClinical™ designs high-integrity systems bridging foundational engineering and mission-critical applications with absolute data ownership and operational resilience.",
  keywords: [
    "sovereign infrastructure",
    "high-integrity systems",
    "data ownership",
    "mission-critical applications",
    "clinical simulation",
    "forensic fintech",
    "enterprise data management",
    "PaaS core",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable} antialiased font-sans`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
