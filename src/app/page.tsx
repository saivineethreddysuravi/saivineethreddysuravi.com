import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Summary />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}