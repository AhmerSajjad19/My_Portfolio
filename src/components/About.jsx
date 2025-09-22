import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>Hello! I'm Ahmer Sajjad</h3>
              <p>
                I'm a passionate Software Engineer with a strong foundation in full-stack development. 
                My journey in technology began with curiosity and has evolved into a deep love for 
                creating innovative solutions that make a difference.
              </p>
            </div>
            
            <div className="about-details">
              <div className="detail-item">
                <h4>Background</h4>
                <p>
                  I have completed my Bachelor's degree in Software Engineering at Gift University, 
                  developing a comprehensive understanding of modern software development practices. 
                  My academic journey has been complemented by hands-on experience in various technologies 
                  and frameworks.
                </p>
              </div>
              
              <div className="detail-item">
                <h4>Technical Expertise</h4>
                <p>
                  I specialize in frontend development with React.js and have extensive experience 
                  with backend technologies including Node.js and Flask. My database skills span MongoDB 
                  and MySQL, and I'm proficient in multiple programming languages including JavaScript, 
                  Python, and C#.
                </p>
              </div>
              
              <div className="detail-item">
                <h4>Career Goals</h4>
                <p>
                  My goal is to become a senior full-stack developer who can lead complex projects 
                  and mentor other developers. I'm passionate about creating scalable, maintainable 
                  applications and staying up-to-date with emerging technologies. I aspire to work 
                  on projects that have a positive impact on society and contribute to open-source 
                  communities.
                </p>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">4+</div>
              <div className="stat-label">Years Learning</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Projects</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-number">Always</div>
              <div className="stat-label">Learning</div>
            </div>
          </div>
        </div>
        
        <div className="about-values">
          <h3>My Values</h3>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">🚀</div>
              <h4>Innovation</h4>
              <p>Always seeking new ways to solve problems and improve user experiences</p>
            </div>
            
            <div className="value-item">
              <div className="value-icon">🤝</div>
              <h4>Collaboration</h4>
              <p>Believe in the power of teamwork and knowledge sharing</p>
            </div>
            
            <div className="value-item">
              <div className="value-icon">📚</div>
              <h4>Continuous Learning</h4>
              <p>Committed to staying updated with the latest technologies and best practices</p>
            </div>
            
            <div className="value-item">
              <div className="value-icon">💡</div>
              <h4>Problem Solving</h4>
              <p>Enjoy tackling complex challenges and finding elegant solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
