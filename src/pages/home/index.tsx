import { Separator } from "@/components/ui/separator";

import AboutMe from "./about-me";
import Hero from "./hero";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <AboutMe />
      <Separator />
      <Skills />
      <Separator />
      <Projects />
      <Separator />
      <Contact />
    </div>
  );
};

export default Home;
