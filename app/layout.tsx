import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import MedicalDisclaimer from "@/components/medical-disclaimer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "EmeritaClinical™ – Modern EMT, AEMT, and Paramedic Learning Tools",
  description:
    "EmeritaClinical™ is a modern EMS learning platform created by EMT Shaun Williamson with study chapters, flashcards, scenarios, medication tools, rhythm training, documentation labs, and more.",
  keywords: [
    "EMT study app",
    "EMT-B training",
    "AEMT app",
    "Paramedic learning tools",
    "EMS flashcards",
    "EMS pharmacology app",
    "ECG rhythm practice",
    "EMS education platform",
    "ePCR training",
    "EMS voice notes",
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
