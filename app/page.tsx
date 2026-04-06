import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Why from "./components/Why";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import ScrollArrow from "./components/ScrollArrow";

export default function Home() {
  return (
    <main>
      <Hero />
      <ScrollArrow to="projekty" />
      <Projects />
      <ScrollArrow to="proc" />
      <Why />
      <ScrollArrow to="kontakt" />
      <CTA />
      <Contact />
    </main>
  );
}
