import Navbar from "@/components/Navbar";
import MobileCTA from "@/components/MobileCTA";
import Hero from "@/sections/Hero";
import MarqueeSection from "@/sections/MarqueeSection";
import About from "@/sections/About";
import Stack from "@/sections/Stack";
import Work from "@/sections/Work";
import AIDemo from "@/sections/AIDemo";
import Experience from "@/sections/Experience";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text-2)]">
      <Navbar />
      <main>
        <Hero />
        <MarqueeSection />
        <About />
        <Stack />
        <Work />
        <AIDemo />
        <Experience />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
