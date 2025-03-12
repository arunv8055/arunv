
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import { useEffect, useRef, useState } from "react";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        // Calculate mouse position relative to the hero section
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15), transparent 40%), linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(59, 130, 246, 0.2) 100%)`
      }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background opacity-95" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center">
          
          <div className="animate-fade-in" style={{
            animationDelay: "0.3s"
          }}>
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary mb-4 inline-block backdrop-blur-sm">
              Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="heading-xl text-balance animate-fade-in relative group" style={{
            animationDelay: "0.5s"
          }}>
            Hi, I'm <span className="text-primary relative">
              Arun V
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300"></span>
            </span>
          </h1>
          
          <h2 className="mt-4 text-xl md:text-2xl font-medium text-muted-foreground animate-fade-in" style={{
            animationDelay: "0.7s"
          }}>
            Data Analyst | Business Analyst | Python & SQL Expert
          </h2>
          
          <p className="mt-6 max-w-2xl text-muted-foreground animate-fade-in" style={{
            animationDelay: "0.9s"
          }}>
            Detail-oriented and results-driven professional with expertise in data analysis, 
            business intelligence, and process optimization.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center animate-fade-in" style={{
            animationDelay: "1.1s"
          }}>
            <Link to="/contact" className="px-8 py-3 rounded-full bg-primary text-white font-medium transition-all hover:bg-primary/90 hover:shadow-lg hover:scale-105">
              Get in Touch
            </Link>
            <Link to="/projects" className="px-8 py-3 rounded-full border border-border text-foreground font-medium transition-all hover:bg-secondary hover:scale-105">
              View Projects
            </Link>
          </div>
          
          <div className="mt-10 animate-fade-in" style={{
            animationDelay: "1.3s"
          }}>
            <SocialLinks iconSize={24} />
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToNextSection} 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
