import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ProMedix EMS Suite",
  description: "Your comprehensive Emergency Medical Services training platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
