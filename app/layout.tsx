import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import MedicalDisclaimer from "@/components/medical-disclaimer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "EmeritaClinical™ – Enterprise Platforms for Clinical Education & Research",
  description:
    "EmeritaClinical™ delivers professional-grade learning platforms for EMS education. Enterprise solutions for EMT, AEMT, and Paramedic training with competency-based modules, clinical simulation tools, and analytics dashboards.",
  keywords: [
    "EMS education platform",
    "EMT-B training platform",
    "AEMT learning system",
    "Paramedic education software",
    "Clinical education technology",
    "EMS competency assessment",
    "Patient care documentation training",
    "EMS research management",
    "Enterprise EMS training",
    "Clinical simulation tools",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <div className="container mx-auto px-4 md:px-6 pb-8">
          <MedicalDisclaimer />
        </div>
        <Footer />
      </body>
    </html>
  );
}
