import { ExternalLink, FileText, CloudSun } from "lucide-react";
import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Smart-Cv path folio",
      description:
        "AI-powered CV builder that helps non-traditional tech professionals generate job-ready, ATS-optimized resumes.",
      tech: [
        "React",
        "CSS Modules",
        "Serverless Functions",
        "Google Gemini AI",
        "react-to-print",
        "Git",
      ],
      link: "https://deploy-preview-103--smart-cv-migracode.netlify.app/",
      github: "https://github.com/SyedArslanHaider/smart-cv-builder",
      icon: FileText,
      color: "blue",
    },
    {
      title: "Weather & Photo Search App",
      description:
        "Real-time weather forecast tool with photo search integration and API-based data visualization.",
      tech: ["HTML5", "CSS3", "JavaScript (ES6)", "Git", "OpenWeatherMap API"],
      link: "https://weather1122.netlify.app/",
      github: "https://github.com/SyedArslanHaider/JavaScript-Core-3-Challenges/tree/master/challenge-weather-app",
      icon: CloudSun,
      color: "green",
    },
  ];

  return (
    <section className="section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => {
          const IconComponent = project.icon;
          
          return (
            <div key={index} className="project-card">
              
              {/* HEADER */}
              <div className={`project-header gradient-${project.color}`}>
                <IconComponent className="project-icon" size={48} strokeWidth={1.5} />
              </div>

              {/* CONTENT */}
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-tags">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.link} className="project-link">
                    View Project <ExternalLink size={16} />
                  </a>
                  <a href={project.github} className="project-link">
                    Source Code <ExternalLink size={16} />
                  </a>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;