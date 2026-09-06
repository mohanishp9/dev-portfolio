import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
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

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});



export const metadata: Metadata = {
  title: "Mohanish Pingale | Full Stack Software Engineer",
  description: "Official portfolio of Mohanish Pingale, a Full Stack Developer specializing in React, Next.js, Node.js, and modern web architecture.",
  keywords: ["Mohanish Pingale", "Software Engineer", "Full Stack Developer", "React", "Next.js", "Portfolio", "Mohanish"],
  authors: [{ name: "Mohanish Pingale", url: "https://mohanish-pingale-devportfolio.vercel.app" }],
  creator: "Mohanish Pingale",
  metadataBase: new URL("https://mohanish-pingale-devportfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohanish-pingale-devportfolio.vercel.app",
    title: "Mohanish Pingale | Full Stack Software Engineer",
    description: "Official portfolio of Mohanish Pingale, a Full Stack Developer.",
    siteName: "Mohanish Pingale Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Mohanish Pingale" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohanish Pingale",
    url: "https://mohanish-pingale-devportfolio.vercel.app",
    jobTitle: "Full Stack Software Engineer",
    knowsAbout: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
    sameAs: [
      "https://www.linkedin.com/in/mohanish-pingale-507339261/",
      "https://github.com/mohanishp9"
    ]
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} font-inter antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
