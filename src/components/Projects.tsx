
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Rice Production Analysis (1961-2022)",
      description: "Comprehensive analysis of global rice production trends over six decades using Python and advanced data visualization techniques.",
      tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJpY2UlMjBmaWVsZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      github: "https://github.com/arun-v/rice-production-analysis",
      demo: "#"
    },
    {
      title: "Crop Production Statistics (India)",
      description: "Data-driven insights into Indian agricultural patterns to support policy planning and resource allocation strategies.",
      tools: ["Power BI", "SQL", "Python", "Excel"],
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JvcCUyMGZpZWxkfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      github: "https://github.com/arun-v/india-crop-statistics",
      demo: "#"
    },
    {
      title: "Heart Disease Prediction Model",
      description: "Machine learning model achieving 92% accuracy in predicting heart disease risk based on patient data and health indicators.",
      tools: ["Python", "Scikit-learn", "TensorFlow", "Pandas"],
      image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhcnQlMjBoZWFsdGh8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      github: "https://github.com/arun-v/heart-disease-prediction",
      demo: "#"
    },
    {
      title: "Sales Forecast Dashboard",
      description: "Interactive dashboard providing sales forecasts and trend analysis for a retail company, enabling data-driven inventory management.",
      tools: ["Tableau", "SQL", "Excel", "R"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFzaGJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      github: "https://github.com/arun-v/sales-forecast-dashboard",
      demo: "#"
    },
    {
      title: "Customer Segmentation Analysis",
      description: "Segmentation analysis that identified key customer groups, enabling targeted marketing strategies and improved customer retention.",
      tools: ["Python", "K-means Clustering", "Matplotlib", "Pandas"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3VzdG9tZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      github: "https://github.com/arun-v/customer-segmentation",
      demo: "#"
    },
    {
      title: "Supply Chain Optimization Tool",
      description: "Tool for optimizing supply chain operations, reducing costs, and improving delivery times through data analysis and predictive modeling.",
      tools: ["Python", "Linear Programming", "Streamlit", "Pandas"],
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3VwcGx5JTIwY2hhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      github: "https://github.com/arun-v/supply-chain-optimization",
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
