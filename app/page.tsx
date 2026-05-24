import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Stack from "@/sections/Stack";
import Work from "@/sections/Work";
import Experience from "@/sections/Experience";
import Education from "@/sections/Education";
import Playground from "@/sections/Playground";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stack />
        <Work />
        <Experience />
        <Education />
        <Playground />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
