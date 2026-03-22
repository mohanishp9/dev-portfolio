"use client";

import { useEffect } from "react";
import { initReveal } from "@/utils/reveal"
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
    useEffect(() => {
        return initReveal();
    }, [])

  return (
    <div className="page-shell">
      <Navbar/>
      <Hero/>
      <Marquee />
      <About/>
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer/>
    </div>
  );
}
