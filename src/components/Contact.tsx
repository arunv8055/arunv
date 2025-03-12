
import { useToast } from "@/components/ui/use-toast";
import { Check, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form after a delay
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: "",
          email: "",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@arun-v.com",
      href: "mailto:contact@arun-v.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 123 456 7890",
      href: "tel:+911234567890",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
      href: "https://maps.google.com/?q=Chennai,India",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/arun-v",
      href: "https://linkedin.com/in/arun-v",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/arun-v",
      href: "https://github.com/arun-v",
    },
  ];

  return (
    <section className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="heading-lg mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-8">
            Feel free to reach out if you're looking for a data analyst, have a question, 
            or just want to connect.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`
                flex items-center justify-center gap-2 w-full py-3 rounded-lg font-medium transition-all
                ${
                  isSubmitted
                    ? "bg-green-500 text-white"
                    : "bg-primary text-white hover:bg-primary/90"
                }
                ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}
              `}
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : isSubmitted ? (
                <>
                  <Check className="w-4 h-4" />
                  Sent Successfully
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
        
        <div className="lg:pl-8">
          <h3 className="heading-md mb-8">Contact Information</h3>
          
          <div className="glass-card p-8">
            <div className="space-y-8">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 transition-colors hover:text-primary group"
                >
                  <div className="mt-1 w-10 h-10 rounded-full flex items-center justify-center bg-secondary group-hover:bg-primary/10 transition-colors">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      {info.label}
                    </h4>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-10 pt-8 border-t border-border">
              <h4 className="text-center text-sm text-muted-foreground mb-3">
                Best time to reach me
              </h4>
              <p className="text-center font-medium">
                Monday – Friday, 9:00 AM – 6:00 PM IST
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
