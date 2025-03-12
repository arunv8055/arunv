
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Resume from "@/components/Resume";
import { useEffect } from "react";

const ResumePage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <div className="section-container mb-20">
          <h1 className="heading-xl mb-6">Resume</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            My professional journey, experience, and qualifications.
          </p>
        </div>
        <Resume />
      </main>
      <Footer />
    </div>
  );
};

export default ResumePage;
