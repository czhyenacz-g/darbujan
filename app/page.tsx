import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Why from "./components/Why";
import CTA from "./components/CTA";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Why />
      <CTA />
      <Contact />
    </main>
  );
}
