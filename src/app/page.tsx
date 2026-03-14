"use client";

import { useEffect } from "react";
import { initAnimations } from "@/utils/animations";
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

    // useEffect(() => {
    //     initAnimations();
    // }, []);

    useEffect(() => {
        initReveal()
    }, [])

  return (
    <>
      <Navbar/>
      <Hero/>
      <Marquee />
      <About/>
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer/>
    </>
  );
}
