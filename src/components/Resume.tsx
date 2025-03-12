
import { Briefcase, Calendar, Download, FileText, GraduationCap } from "lucide-react";

export const Resume = () => {
  const experiences = [
    {
      title: "Business Data Analyst",
      company: "Agathium",
      period: "Jan 2025 – Present",
      description: "Lead requirements gathering, process optimization, and data analysis initiatives, collaborating with stakeholders to implement enterprise solutions and drive operational improvements.",
      achievements: [
        "Gathered and documented system requirements for enterprise applications",
        "Analyzed workflows to identify inefficiencies and implement improvements",
        "Utilized SQL, Excel, and Power BI for system performance analysis",
        "Managed multiple projects using Agile methodologies"
      ]
    },
    {
      title: "Business Analyst",
      company: "payAgri",
      period: "Mar 2024 – Dec 2024",
      description: "Improved operational efficiency through data analysis and process automation, managing complex datasets and developing interactive dashboards.",
      achievements: [
        "Improved operational efficiency by 20% through process automation",
        "Managed large datasets using Python and SQL for data-driven decisions",
        "Designed interactive Power BI dashboards for performance metrics",
        "Led cross-functional teams for requirement gathering and solution delivery"
      ]
    },
    {
      title: "Data Analyst Intern",
      company: "Rubus Digitals",
      period: "Jan 2024 – Mar 2024",
      description: "Conducted data analytics and financial modeling, optimized database performance, and implemented real-time analytics solutions.",
      achievements: [
        "Improved data retrieval efficiency by 25% through SQL optimization",
        "Implemented MQTT for real-time data streaming",
        "Developed Power BI dashboards for key metrics tracking",
        "Conducted EDA and financial modeling for strategic decisions"
      ]
    },
    {
      title: "Business Analyst Intern",
      company: "Startup Tamil Nadu",
      period: "Dec 2022 – May 2023",
      description: "Contributed to Startup India Ranking project through analytics development and process improvement initiatives.",
      achievements: [
        "Built analytics tools using SQL and Power BI for national ranking project",
        "Implemented control framework for operational efficiency",
        "Reduced operational delays by 20% through process optimization",
        "Conducted UAT and secured stakeholder sign-offs"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science (B.Sc. Hons)",
      institution: "TNAU",
      period: "2018 - 2022",
      description: "CGPA: 7.79/10"
    }
  ];

  const certifications = [
    {
      name: "Google Advanced Data Analytics",
      issuer: "Google",
      date: "2024"
    },
    {
      name: "Data Visualization with Tableau",
      issuer: "UC Davis",
      date: "2024"
    },
    {
      name: "Data Analysis with Python",
      issuer: "IBM",
      date: "2023"
    },
    {
      name: "Google Data Analytics",
      issuer: "Google",
      date: "2023"
    },
    {
      name: "Strategy and Game Theory for Management",
      issuer: "IIM",
      date: "2023"
    },
    {
      name: "Google Project Management",
      issuer: "Google",
      date: "2023"
    },
    {
      name: "Pre MBA-Statistics",
      issuer: "Rice University",
      date: "2023"
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
