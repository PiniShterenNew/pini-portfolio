import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Stack from "@/sections/Stack";
import Work from "@/sections/Work";
import SelectedProjects from "@/sections/SelectedProjects";
import Experience from "@/sections/Experience";
import Testimonials from "@/sections/Testimonials";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stack />
        <Work />
        <SelectedProjects />
        <Experience />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
