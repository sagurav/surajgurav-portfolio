import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SpotlightCursor from "@/components/ui/SpotlightCursor";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Awards from "@/components/sections/Awards";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <SpotlightCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
