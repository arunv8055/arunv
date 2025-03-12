
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import { useEffect } from "react";

const ProjectsPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <div className="section-container mb-20">
          <h1 className="heading-xl mb-6">Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Explore my portfolio of data analysis and business intelligence projects.
          </p>
        </div>
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
