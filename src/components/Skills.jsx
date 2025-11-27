import '../styles/Skills.css';

function Skills() {
  const skills = [
    { 
      name: 'HTML5', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      percentage: 90, 
      color: '#e34c26' 
    },
    { 
      name: 'CSS3', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      percentage: 85, 
      color: '#264de4' 
    },
    { 
      name: 'JavaScript', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      percentage: 70, 
      color: '#f0db4f' 
    },
    { 
      name: 'React', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      percentage: 75, 
      color: '#61dafb' 
    },
    { 
      name: 'Node.js', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      percentage: 65, 
      color: '#68a063' 
    },
    { 
      name: 'Express.js', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      percentage: 70, 
      color: '#000000' 
    },
    { 
      name: 'PostgreSQL', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      percentage: 65, 
      color: '#336791' 
    },
    { 
      name: 'Git', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      percentage: 85, 
      color: '#f34f29' 
    }
  ];

  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => {
          const circumference = 2 * Math.PI * 60;
          const offset = circumference - (skill.percentage / 100) * circumference;
          
          return (
            <div key={index} className="skill-item">
              <div className="skill-circle-wrapper">
                <div className="skill-circle-bg"></div>
                
                <svg className="percentage-circle" viewBox="0 0 140 140">
                  <circle
                    className="percentage-bg"
                    cx="70"
                    cy="70"
                    r="60"
                  />
                  <circle
                    className="percentage-progress"
                    cx="70"
                    cy="70"
                    r="60"
                    stroke={skill.color}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                  />
                </svg>
                
                <img src={skill.logo} alt={skill.name} className="skill-icon" />
                <div className="percentage-text">{skill.percentage}%</div>
              </div>
              <div className="skill-name">{skill.name}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;