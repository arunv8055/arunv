
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

  const certificationCategories = [
    {
      category: "Data Analytics & Tools",
      certifications: [
        {
          name: "Google Advanced Data Analytics",
          issuer: "Google",
          date: "Dec 2024"
        },
        {
          name: "Data Visualization with Tableau",
          issuer: "University of California, Davis",
          date: "Aug 2023"
        },
        {
          name: "Data Analysis with Python",
          issuer: "IBM",
          date: "Jul 2023"
        },
        {
          name: "Google Data Analytics Professional Certificate",
          issuer: "Google",
          date: "Apr 2023"
        },
        {
          name: "Data Analytics Essentials",
          issuer: "Cisco",
          date: "Mar 2023"
        },
        {
          name: "Big Data Foundation - Level 1",
          issuer: "Cognitive Class",
          date: "Aug 2021"
        }
      ]
    },
    {
      category: "Machine Learning & AI",
      certifications: [
        {
          name: "Machine Learning - Deeplearning.ai",
          issuer: "Stanford University",
          date: "Dec 2024"
        },
        {
          name: "AI for Everyone",
          issuer: "DeepLearning.AI",
          date: "Nov 2022"
        },
        {
          name: "Data Science Methodology",
          issuer: "IBM",
          date: "Nov 2022"
        },
        {
          name: "Tools for Data Science",
          issuer: "IBM",
          date: "Nov 2022"
        }
      ]
    },
    {
      category: "Business Analysis & Strategy",
      certifications: [
        {
          name: "Strategy and Game Theory for Management",
          issuer: "IIM Ahmedabad",
          date: "Oct 2024"
        },
        {
          name: "Business Analysis & Process Management",
          issuer: "Coursera",
          date: "Apr 2023"
        },
        {
          name: "Pre MBA Statistics",
          issuer: "IIM Ahmedabad",
          date: "Dec 2024"
        }
      ]
    },
    {
      category: "Technical & Programming",
      certifications: [
        {
          name: "Python (Basic)",
          issuer: "HackerRank",
          date: "May 2023"
        },
        {
          name: "SQL (Intermediate)",
          issuer: "HackerRank",
          date: "May 2023"
        },
        {
          name: "Intro to Programming",
          issuer: "Kaggle",
          date: "Sep 2022"
        }
      ]
    },
    {
      category: "Virtual Internships",
      certifications: [
        {
          name: "Data Analytics Consulting Virtual Internship",
          issuer: "KPMG",
          date: "May 2023"
        },
        {
          name: "Investment Banking Virtual Experience Program",
          issuer: "JPMorganChase",
          date: "Jun 2023"
        },
        {
          name: "Data Analytics and Visualization Virtual Experience",
          issuer: "Accenture",
          date: "May 2023"
        }
      ]
    },
    {
      category: "Google Analytics & Digital Marketing",
      certifications: [
        {
          name: "Google Analytics for Power Users",
          issuer: "Google",
          date: "May 2021 · Expired May 2024"
        },
        {
          name: "Fundamentals of Digital Marketing",
          issuer: "Google Digital Unlocked",
          date: "Apr 2021"
        }
      ]
    },
    {
      category: "Miscellaneous",
      certifications: [
        {
          name: "Project Management",
          issuer: "Google",
          date: "Dec 2024"
        },
        {
          name: "HTML5 - From Basics to Advanced",
          issuer: "Udemy",
          date: "Dec 2020"
        }
      ]
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
        
        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="text-primary w-6 h-6" />
            <h3 className="heading-md">Certifications</h3>
          </div>
          
          {certificationCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              <h4 className="text-lg font-semibold mb-4">{category.category}</h4>
              <div className="space-y-4">
                {category.certifications.map((cert, certIndex) => (
                  <div 
                    key={certIndex} 
                    className="glass-card p-5 transition-all hover:scale-[1.02]"
                    style={{ animationDelay: `${certIndex * 0.1}s` }}
                  >
                    <h5 className="font-medium mb-2">{cert.name}</h5>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{cert.issuer}</span>
                      <span className="text-primary">{cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
