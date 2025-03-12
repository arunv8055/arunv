
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect } from "react";

const ContactPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <div className="section-container mb-20">
          <h1 className="heading-xl mb-6">Contact</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Get in touch with me for opportunities, collaborations, or just to say hello.
          </p>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
