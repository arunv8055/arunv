
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Clean up Three.js instances when unmounting
    return () => {
      // Remove any existing Three.js canvas that might be leftover
      const existingCanvases = document.querySelectorAll('canvas');
      existingCanvases.forEach(canvas => {
        if (canvas.parentNode && canvas.parentNode.parentNode) {
          const container = canvas.parentNode.parentNode;
          if (container.classList.contains('fixed') || container.classList.contains('absolute')) {
            container.remove();
          }
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <div className="py-24 bg-secondary/50">
          <Projects />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
