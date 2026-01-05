import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { SearchProvider } from "@/context/SearchContext";

export default function Home() {
  return (
    <SearchProvider>
      <main className="min-h-screen bg-black text-slate-50 selection:bg-blue-500/30">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Achievements />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </SearchProvider>
  );
}
