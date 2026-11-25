"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/Navbar";
import ReadingProgress from "@/components/ReadingProgress";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import GitGraph from "@/components/GitGraph";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Telemetry from "@/components/Telemetry";
import CommandPalette from "@/components/CommandPalette";
import { DecompilerProvider } from "@/components/Decompiler";
import { ThemeProvider } from "@/context/ThemeContext";
import { useDeveloperSignature } from "@/hooks/useDeveloperSignature";
import { useTabLifecycle } from "@/hooks/useTabLifecycle";

export default function Home() {
  useScrollReveal();
  useDeveloperSignature();
  useTabLifecycle();

  return (
    <ThemeProvider>
      <DecompilerProvider>
        <div className="min-h-screen bg-[var(--news-bg)] text-[var(--news-ink)] relative selection:bg-[var(--news-accent)] selection:text-white transition-colors duration-300">
          <CommandPalette />
          <ReadingProgress />
          <Telemetry />
          
          {/* Physical Broadsheet Sheet Container */}
          <div className="max-w-[1440px] mx-auto bg-[var(--news-bg)] border-x border-[var(--news-rule-strong)] shadow-[0_4px_35px_rgba(0,0,0,0.07)] min-h-screen">
            <Navbar />
            <main>
              <Hero />
              <Marquee />
              <About />
              <Skills />
              <Projects />
              <GitGraph />
              <Experience />
              <Contact />
              <Footer />
            </main>
          </div>
        </div>
      </DecompilerProvider>
    </ThemeProvider>
  );
}
