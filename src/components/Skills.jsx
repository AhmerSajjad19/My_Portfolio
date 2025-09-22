import React from 'react';
import './Skills.css';

const Skills = () => {
  const technicalSkills = [
    { name: 'JavaScript ES6', level: 90 },
    { name: 'React.js', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 85 },
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 90 },
    { name: 'MongoDB', level: 75 },
    { name: 'MySQL', level: 80 },
    { name: 'C#', level: 70 },
    { name: 'React Native', level: 75 },
    { name: 'Expo', level: 70 },
    { name: 'Firebase', level: 75 }
  ];

  const designTools = [
    { name: 'Figma', level: 85 },
    { name: 'Canva', level: 90 },
    { name: 'Balsamiq', level: 80 },
    { name: 'VS Code', level: 95 },
    { name: 'Google Colab', level: 85 }
  ];

  const softSkills = [
    'Problem Solving',
    'Critical Thinking',
    'Team Collaboration',
    'Communication',
    'Growth Mindset',
    'Adaptability',
    'Time Management',
    'Leadership'
  ];

  const SkillBar = ({ skill, level }) => (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{skill}</span>
        <span className="skill-percentage">{level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  const SoftSkillItem = ({ skill }) => (
    <div className="soft-skill-item">
      <div className="soft-skill-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4"></path>
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
      </div>
      <span>{skill}</span>
    </div>
  );

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            A comprehensive overview of my technical and soft skills
          </p>
        </div>

        <div className="skills-content">
          {/* Technical Skills */}
          <div className="skills-category">
            <div className="category-header">
              <div className="category-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16,18 22,12 16,6"></polyline>
                  <polyline points="8,6 2,12 8,18"></polyline>
                </svg>
              </div>
              <h3>Technical Skills</h3>
            </div>
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          {/* Design Tools */}
          <div className="skills-category">
            <div className="category-header">
              <div className="category-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3>Design Tools</h3>
            </div>
            <div className="skills-grid">
              {designTools.map((tool, index) => (
                <SkillBar key={index} skill={tool.name} level={tool.level} />
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="skills-category">
            <div className="category-header">
              <div className="category-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3>Soft Skills</h3>
            </div>
            <div className="soft-skills-grid">
              {softSkills.map((skill, index) => (
                <SoftSkillItem key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="skills-summary">
          <div className="summary-card">
            <h4>Frontend Development</h4>
            <p>React.js, JavaScript ES6, HTML5, CSS3</p>
          </div>
          <div className="summary-card">
            <h4>Backend Development</h4>
            <p>Node.js, Flask, MongoDB, MySQL</p>
          </div>
          <div className="summary-card">
            <h4>Mobile Development</h4>
            <p>React Native, Expo, Firebase Integration</p>
          </div>
          <div className="summary-card">
            <h4>Programming Languages</h4>
            <p>JavaScript, Python, C#</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
