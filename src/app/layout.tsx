import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";




const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains",
    display: "swap",
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
          className={`${inter.variable} ${jetbrainsMono.variable} font-inter antialiased bg-zinc-950 text-slate-50`}
      >

        {children}
      </body>
    </html>
  );
}
