
import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <div className="section-container mb-20">
          <h1 className="heading-xl mb-6">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Learn more about my skills, experience, and passion for data analysis and business intelligence.
          </p>
        </div>
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
