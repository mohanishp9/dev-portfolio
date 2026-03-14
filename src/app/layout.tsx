import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Mono, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    weight: ["400", "700", "900"],
    style: ["normal", "italic"],
});

const spaceMono = Space_Mono({
    subsets: ["latin"],
    variable: "--font-space-mono",
    weight: ["400", "700"],
});

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    variable: "--font-cormorant",
    weight: ["300", "400", "600"],
    style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Portfolio | Mohanish Pingale",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          className={`${playfair.variable} ${spaceMono.variable} ${cormorant.variable}`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
