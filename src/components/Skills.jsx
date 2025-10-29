import React from 'react';
import './Skills.css';
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiMysql,
  SiExpo,
  SiFirebase,
  SiFigma,
  SiCanva,
  SiGooglecolab
} from 'react-icons/si';
import { FaCode, FaPencilRuler, FaBrain, FaComments, FaUsers, FaUserTie, FaRegClock, FaLightbulb, FaHandsHelping, FaChartLine } from 'react-icons/fa';

const Skills = () => {
  const technicalSkills = [
    { name: 'JavaScript ES6', icon: <SiJavascript color="#F7DF1E" /> },
    { name: 'React.js', icon: <SiReact color="#61DBFB" /> },
    { name: 'Node.js', icon: <SiNodedotjs color="#3C873A" /> },
    { name: 'Python', icon: <SiPython color="#3776AB" /> },
    { name: 'HTML5', icon: <SiHtml5 color="#E34F26" /> },
    { name: 'CSS3', icon: <SiCss3 color="#1572B6" /> },
    { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
    { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
    { name: 'C#', icon: <FaCode color="#68217A" /> },
    { name: 'React Native', icon: <SiReact color="#61DBFB" /> },
    { name: 'Expo', icon: <SiExpo color="#000000" /> },
    { name: 'Firebase', icon: <SiFirebase color="#FFCA28" /> },
  ];

  const designTools = [
    { name: 'Figma', icon: <SiFigma color="#F24E1E" /> },
    { name: 'Canva', icon: <SiCanva color="#00C4CC" /> },
    { name: 'Balsamiq', icon: <FaPencilRuler color="#A60000" /> },
    { name: 'Visual Studio Code', icon: <FaCode color="#007ACC" /> },
    { name: 'Google Colab', icon: <SiGooglecolab color="#F9AB00" /> },
  ];

  // ✅ Updated softSkills with relevant icons
  const softSkills = [
    { name: 'Problem Solving', icon: <FaBrain color="#FFB703" /> },
    { name: 'Critical Thinking', icon: <FaLightbulb color="#8ECAE6" /> },
    { name: 'Team Collaboration', icon: <FaUsers color="#219EBC" /> },
    { name: 'Communication', icon: <FaComments color="#023047" /> },
    { name: 'Growth Mindset', icon: <FaChartLine color="#FB8500" /> },
    { name: 'Adaptability', icon: <FaHandsHelping color="#219EBC" /> },
    { name: 'Time Management', icon: <FaRegClock color="#FFB703" /> },
    { name: 'Leadership', icon: <FaUserTie color="#8ECAE6" /> },
  ];

  const SkillIconItem = ({ name, icon }) => (
    <div className="skill-item">
      <div className="skill-header">
        <div className="skill-icon">{icon}</div>
        <span className="skill-name">{name}</span>
      </div>
    </div>
  );

  // ✅ Updated SoftSkillItem to use icons dynamically
  const SoftSkillItem = ({ skill }) => (
    <div className="soft-skill-item">
      <div className="soft-skill-icon">{skill.icon}</div>
      <span>{skill.name}</span>
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
                <SkillIconItem key={index} name={skill.name} icon={skill.icon} />
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
                <SkillIconItem key={index} name={tool.name} icon={tool.icon} />
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
