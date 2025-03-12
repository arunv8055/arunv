
import { Award, Code, Database, LineChart } from "lucide-react";

export const About = () => {
  const skills = [
    {
      category: "Programming",
      items: ["SQL", "Python (NumPy, Pandas, Matplotlib, Plotly)", "R", "Scikit-learn"],
      icon: Code,
    },
    {
      category: "Business Intelligence",
      items: ["Power BI", "Tableau", "Alteryx", "Postgres", "ETL Processes"],
      icon: LineChart,
    },
    {
      category: "Data Analysis",
      items: ["Statistical Analysis", "Data Modeling", "EDA", "Financial Modeling", "Dashboard Development"],
      icon: Database,
    },
    {
      category: "Certifications",
      items: [
        "Google Advanced Data Analytics",
        "Data Visualization with Tableau",
        "Data Analysis with Python",
        "Google Data Analytics",
        "Google Project Management"
      ],
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
              I'm a detail-oriented and results-driven professional with a strong foundation in data analysis, 
              business intelligence, and process optimization. I'm passionate about solving complex business 
              problems and delivering actionable insights.
            </p>
            <p>
              My expertise spans across data analytics, business intelligence, and process optimization, 
              with a focus on leveraging tools like SQL, Python, Power BI, and advanced analytics to drive 
              data-driven decision-making.
            </p>
            <p>
              Throughout my career, I've successfully collaborated with cross-functional teams to implement 
              data-driven solutions that directly impact business outcomes and operational efficiency.
            </p>
          </div>
          
          <div className="pt-4">
            <h3 className="heading-sm mb-4">My Interests</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Data Analytics",
                "Business Intelligence",
                "Statistical Analysis",
                "Process Optimization",
                "Machine Learning"
              ].map((interest) => (
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
