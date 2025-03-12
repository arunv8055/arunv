
import { Award, Code, Database, LineChart } from "lucide-react";

export const About = () => {
  const skills = [
    {
      category: "Data Analysis",
      items: ["Python", "SQL", "Excel", "Statistical Analysis", "Data Visualization"],
      icon: Database,
    },
    {
      category: "Business Intelligence",
      items: ["Power BI", "Tableau", "Data Modeling", "ETL Processes", "Dashboard Development"],
      icon: LineChart,
    },
    {
      category: "Programming",
      items: ["Python", "SQL", "R", "JavaScript", "PySpark"],
      icon: Code,
    },
    {
      category: "Certifications",
      items: ["Google Advanced Data Analytics", "Strategy & Game Theory", "Tableau Visualization"],
      icon: Award,
    },
  ];

  return (
    <section id="about" className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-6">
          <h2 className="heading-lg">About Me</h2>
          
          <div className="space-y-4 text-balance">
            <p>
              I'm a detail-oriented and results-driven data professional with expertise in turning complex data into actionable insights. With a passion for problem-solving and data storytelling, I help organizations make data-driven decisions.
            </p>
            <p>
              My expertise spans data analysis, business intelligence, and process optimization, with a particular focus on agricultural technology and sustainable business practices.
            </p>
            <p>
              Throughout my career, I've collaborated with cross-functional teams to implement data-driven solutions that directly impact business outcomes and operational efficiency.
            </p>
          </div>
          
          <div className="pt-4">
            <h3 className="heading-sm mb-4">My Interests</h3>
            <div className="flex flex-wrap gap-2">
              {["Data Analytics", "Business Intelligence", "Agricultural Technology", "Sustainable Business", "Process Optimization"].map((interest) => (
                <span 
                  key={interest} 
                  className="px-3 py-1 rounded-full text-sm bg-secondary text-secondary-foreground"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="heading-sm mb-8">My Skills & Expertise</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.category} className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <skill.icon className="w-5 h-5 text-primary" />
                  <h4 className="font-medium">{skill.category}</h4>
                </div>
                
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
