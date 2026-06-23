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
import Experience from "@/components/Experience";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DynamicGrid from "@/components/DynamicGrid";
import Telemetry from "@/components/Telemetry";
import CrosshairCursor from "@/components/CrosshairCursor";

export default function Home() {
  useScrollReveal();

  return (
    <div className="h-screen w-full pt-8 sm:pt-12 px-4 sm:px-8 lg:px-12 pb-0 relative flex flex-col overflow-hidden">
      <CrosshairCursor />
      
      {/* Floating OS Window Block - Fixed positioned top and sides, flush to bottom */}
      <div 
        id="main-scroll-container"
        className="w-full max-w-[1400px] mx-auto flex-1 bg-black/95 text-slate-50 rounded-t-[3.5rem] rounded-b-none shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)] border border-white/10 border-b-0 overflow-y-auto overflow-x-hidden relative ring-1 ring-white/5 scroll-smooth no-scrollbar"
      >
        <DynamicGrid />
        <ReadingProgress />
        <Telemetry />
        <Navbar />
        <main className="min-h-screen relative selection:bg-accent selection:text-black">
          <Hero />
          <Marquee />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}
