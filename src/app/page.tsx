"use client";

import { useEffect } from "react";
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
import DynamicGrid from "@/components/DynamicGrid";
import Telemetry from "@/components/Telemetry";
import CrosshairCursor from "@/components/CrosshairCursor";

export default function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#09090b] relative">
      <CrosshairCursor />
      <DynamicGrid />
      <ReadingProgress />
      <Telemetry />
      <Navbar />
      <main className="relative selection:bg-accent selection:text-white">
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
  );
}
