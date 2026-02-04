import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  const hasWorkExperience = portfolioData.workExperience.length > 0;

  return (
    <>
      <Hero />
      <About />
      <Skills />
      {hasWorkExperience && <Experience />}
      <Projects />
      <Contact />
    </>
  );
}
