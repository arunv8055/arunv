
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

export const Hero = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-grid-pattern">
        <div className="absolute inset-0 bg-background opacity-95" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center">
          <div className="w-40 h-40 rounded-full border-4 border-primary mb-8 overflow-hidden animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <img 
              src="https://images.unsplash.com/photo-1603575448878-868a20723f5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" 
              alt="Arun V" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary mb-4 inline-block">
              Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="heading-xl text-balance animate-fade-in" style={{ animationDelay: "0.5s" }}>
            Hi, I'm <span className="text-primary">Arun V</span>
          </h1>
          
          <h2 className="mt-4 text-xl md:text-2xl font-medium text-muted-foreground animate-fade-in" style={{ animationDelay: "0.7s" }}>
            Data Analyst | Business Analyst | Python & SQL Expert
          </h2>
          
          <p className="mt-6 max-w-2xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.9s" }}>
            Detail-oriented and results-driven professional with expertise in data analysis, 
            business intelligence, and process optimization.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center animate-fade-in" style={{ animationDelay: "1.1s" }}>
            <Link 
              to="/contact"
              className="px-8 py-3 rounded-full bg-primary text-white font-medium transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              Get in Touch
            </Link>
            <Link 
              to="/projects"
              className="px-8 py-3 rounded-full border border-border text-foreground font-medium transition-all hover:bg-secondary"
            >
              View Projects
            </Link>
          </div>
          
          <div className="mt-10 animate-fade-in" style={{ animationDelay: "1.3s" }}>
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
