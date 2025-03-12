
import { Briefcase, Calendar, Download, FileText, GraduationCap } from "lucide-react";

export const Resume = () => {
  const experiences = [
    {
      title: "Business Data Analyst",
      company: "Agathium",
      period: "Jan 2025 – Present",
      description: "Lead data analysis initiatives, collaborate with stakeholders to optimize business processes, and implement data-driven solutions using advanced analytics and visualization tools.",
      achievements: [
        "Reduced report generation time by 40% through process automation",
        "Developed interactive dashboards that improved decision-making efficiency",
        "Led cross-functional data integration projects using Agile methodologies"
      ]
    },
    {
      title: "Business Analyst",
      company: "PayAgri",
      period: "Mar 2024 – Dec 2024",
      description: "Analyzed business operations, automated reporting processes, and developed dashboards to provide actionable insights for strategic decision-making.",
      achievements: [
        "Automated weekly reporting process, saving 15+ hours per week",
        "Designed and implemented Power BI dashboards for executive leadership",
        "Optimized data collection procedures, improving data accuracy by 25%"
      ]
    },
    {
      title: "Data Analyst Intern",
      company: "Rubus Digital",
      period: "Jan 2024 – Mar 2024",
      description: "Optimized SQL queries, developed real-time analytics solutions, and created financial models to improve data accessibility and reporting efficiency.",
      achievements: [
        "Improved query performance by 35% through SQL optimization",
        "Developed financial models that identified $50K in cost-saving opportunities",
        "Created automated reports that reduced manual analysis time by 60%"
      ]
    },
    {
      title: "Business Analyst Intern",
      company: "Startup Tamil Nadu",
      period: "Dec 2022 – May 2023",
      description: "Contributed to Startup India Ranking initiatives, managed compliance documentation, and improved internal processes through data analysis and workflow optimization.",
      achievements: [
        "Played key role in achieving top 5 position in Startup India Ranking",
        "Streamlined compliance documentation process, reducing errors by 30%",
        "Implemented data validation procedures that improved data quality"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Business Administration",
      institution: "Anna University",
      period: "2021 - 2023",
      description: "Specialized in Business Analytics with focus on data-driven decision making and strategic planning."
    },
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Vellore Institute of Technology",
      period: "2017 - 2021",
      description: "Focused on database management, programming, and analytics foundations."
    }
  ];

  const certifications = [
    {
      name: "Google Advanced Data Analytics Professional Certificate",
      issuer: "Google",
      date: "2023"
    },
    {
      name: "Strategy and Game Theory for Managers",
      issuer: "Indian Institute of Management",
      date: "2022"
    },
    {
      name: "Tableau Desktop Specialist",
      issuer: "Tableau",
      date: "2022"
    },
    {
      name: "Python for Data Science and Machine Learning",
      issuer: "Udemy",
      date: "2021"
    }
  ];

  return (
    <section className="section-container">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
        <div>
          <h2 className="heading-lg">My Resume</h2>
          <p className="text-muted-foreground mt-2">
            My professional journey and qualifications
          </p>
        </div>
        
        <a 
          href="#" 
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium transition-all hover:bg-primary/90 hover:shadow-lg"
        >
          <Download className="w-4 h-4" />
          Download Resume
        </a>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-primary w-6 h-6" />
              <h3 className="heading-md">Work Experience</h3>
            </div>
            
            <div className="space-y-12 relative">
              <div className="timeline-line" />
              
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-10" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="timeline-circle" />
                  
                  <div className="glass-card p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
                      <h4 className="font-semibold text-lg">{exp.title}</h4>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <div className="text-sm font-medium text-primary mb-3">{exp.company}</div>
                    
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <div className="space-y-1.5">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                          <span className="text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-primary w-6 h-6" />
              <h3 className="heading-md">Education</h3>
            </div>
            
            <div className="space-y-8 relative">
              <div className="timeline-line" />
              
              {education.map((edu, index) => (
                <div key={index} className="relative pl-10" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="timeline-circle" />
                  
                  <div className="glass-card p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        {edu.period}
                      </div>
                    </div>
                    
                    <div className="text-sm font-medium text-primary mb-3">{edu.institution}</div>
                    
                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <div className="flex items-center gap-3 mb-8">
            <FileText className="text-primary w-6 h-6" />
            <h3 className="heading-md">Certifications</h3>
          </div>
          
          <div className="space-y-5">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="glass-card p-5"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <h4 className="font-medium mb-2">{cert.name}</h4>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{cert.issuer}</span>
                  <span className="text-primary">{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
