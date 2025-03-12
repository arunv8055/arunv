import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Rice Production Analysis (1961-2022)",
      description: "Analyzed 50,000+ records of global rice production trends, identifying key patterns in food security and technological impacts using Python and advanced visualization techniques.",
      tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJpY2UlMjBmaWVsZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      github: "https://github.com/arunv8055/rice-production-analysis",
      demo: "#"
    },
    {
      title: "Crop Production Statistics (India)",
      description: "Analyzed 300,000+ records of crop production across Indian states, providing insights for resource allocation and policy development using data-driven approaches.",
      tools: ["Python", "SQL", "Power BI", "Data Analysis"],
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JvcCUyMGZpZWxkfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      github: "https://github.com/arunv8055/india-crop-statistics",
      demo: "#"
    },
    {
      title: "Heart Disease Prediction Model",
      description: "Developed a machine learning model achieving 92% accuracy in heart disease prediction, analyzing 308,854 records and identifying key risk factors.",
      tools: ["Python", "Scikit-learn", "Pandas", "Statistical Analysis"],
      image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhcnQlMjBoZWFsdGh8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      github: "https://github.com/arunv8055/heart-disease-prediction",
      demo: "#"
    }
  ];

  return (
    <section className="section-container">
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-4">My Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A collection of data analysis, business intelligence, and machine learning projects 
          that showcase my technical skills and problem-solving capabilities.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={project.title} 
            className="project-card animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            
            <p className="text-muted-foreground text-sm mb-4 flex-grow">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tools.map((tool) => (
                <span 
                  key={tool} 
                  className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4 mt-auto pt-4 border-t border-border">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
