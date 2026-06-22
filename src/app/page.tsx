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

export default function Home() {
  useScrollReveal();

  return (
    <>
      <ReadingProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
