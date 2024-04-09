'use client';

import About from "@/components/About";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="mt-24">
        <About />
      </div>
      <div className="mt-12">
        <Testimonials />
      </div>
      <CTA/>
    </main>
  );
}