import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Learning from "./components/Learning";
import Why from "./components/Why";
import Stack from "./components/Stack";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import ScrollArrow from "./components/ScrollArrow";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <ScrollArrow to="skoleni" />
      <Learning />
      <ScrollArrow to="proc" />
      <Why />
      <ScrollArrow to="stack" />
      <Stack />
      <ScrollArrow to="kontakt" />
      <CTA />
      <Contact />
    </main>
  );
}
