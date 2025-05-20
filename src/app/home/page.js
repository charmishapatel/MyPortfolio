'use client';

import About from "../about/page";
import Skills from "../skills/page";
import Projects from "../projects/page";
import Experience from "../experience/page";
import Contact from "../contact/page";


export default function HomeSection() {
  return (
    <div className="scroll-smooth">
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
