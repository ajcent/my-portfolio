import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
