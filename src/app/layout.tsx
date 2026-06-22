import type { Metadata } from "next";
import { Space_Mono, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";


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
  description: "Full stack developer portfolio for Mohanish Pingale. Projects, skills, and experience in React, Next.js, and Node.js.",
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

        {children}
      </body>
    </html>
  );
}
