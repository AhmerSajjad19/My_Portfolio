import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor\'s in Software Engineering',
      institution: 'Gift University',
      period: '2021-2025',
      grade: 'CGPA 3.53',
      description: 'Completed comprehensive studies in software engineering with focus on modern development practices, algorithms, and system design.',
      status: 'Completed',
      icon: '🎓'
    },
    {
      degree: 'Intermediate',
      institution: 'United College Kamoke',
      period: '2019-2021',
      grade: '95%',
      description: 'Completed intermediate education with excellent academic performance, focusing on science subjects and laying foundation for higher studies.',
      status: 'Completed',
      icon: '📚'
    },
    {
      degree: 'Matric',
      institution: 'Government High School No 2 Kamoke',
      period: '2017-2019',
      grade: '82.36%',
      description: 'Completed matriculation with strong academic foundation, demonstrating early commitment to education and learning.',
      status: 'Completed',
      icon: '🏫'
    }
  ];

  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Consistently maintained high grades throughout academic career',
      icon: '🏆'
    },
    {
      title: 'Leadership Skills',
      description: 'Active participation in academic and extracurricular activities',
      icon: '👑'
    },
    {
      title: 'Continuous Learning',
      description: 'Committed to ongoing education and skill development',
      icon: '📖'
    },
    {
      title: 'Practical Application',
      description: 'Applied theoretical knowledge in real-world projects',
      icon: '💡'
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            My academic journey and educational achievements
          </p>
        </div>

        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div key={index} className={`timeline-item ${edu.status.toLowerCase()}`}>
              <div className="timeline-marker">
                <div className="timeline-icon">{edu.icon}</div>
                <div className="timeline-line"></div>
              </div>
              
              <div className="timeline-content">
                <div className="education-card">
                  <div className="card-header">
                    <h3 className="degree">{edu.degree}</h3>
                    <span className={`status-badge ${edu.status.toLowerCase()}`}>
                      {edu.status}
                    </span>
                  </div>
                  
                  <div className="institution-info">
                    <h4 className="institution">{edu.institution}</h4>
                    <div className="period-grade">
                      <span className="period">{edu.period}</span>
                      <span className="grade">{edu.grade}</span>
                    </div>
                  </div>
                  
                  <p className="description">{edu.description}</p>
                  
                  <div className="card-footer">
                    <div className="progress-indicator">
                      <div className={`progress-bar ${edu.status.toLowerCase()}`}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="achievements-section">
          <h3 className="achievements-title">Key Achievements</h3>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">{achievement.icon}</div>
                <h4 className="achievement-title">{achievement.title}</h4>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="education-stats">
          <div className="stat-item">
            <div className="stat-number">3.53</div>
            <div id="stat-label">CGPA</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">95%</div>
            <div id="stat-label">Intermediate Score</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">82.36%</div>
            <div id="stat-label">Matric Score</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">9+</div>
            <div id="stat-label">Years Learning</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
