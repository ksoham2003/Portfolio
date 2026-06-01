'use client';

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Approach from "@/components/Approach";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Approach />
        <Portfolio />
        <Services />
        <Experience />
        <Stack />
        <About />
      </main>
      <Footer />
    </div>
  );
}


