import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Work from "@/sections/Work";
import Experience from "@/sections/Experience";
import Testimonials from "@/sections/Testimonials";
import Stack from "@/sections/Stack";
import About from "@/sections/About";
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
        <Work />
        <Experience />
        <Testimonials />
        <Stack />
        <About />
        <Education />
        <Playground />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
