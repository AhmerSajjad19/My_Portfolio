import React from 'react';
import './Home.css';
import profileImage from '../images/img1.jpg';
import resumePDF from '../Resume/Ahmer.pdf';

const Home = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Ahmer_Sajjad_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-content">
          <div className="profile-image-container">
            <img src={profileImage} alt="Ahmer Sajjad" className="profile-image" />
            <div className="image-border"></div>
          </div>
          
          <div className="home-text">
            <h1 className="home-title">
              <span className="greeting">Hello, I'm</span>
              <span className="name">Ahmer Sajjad</span>
              <span className="title">Software Engineer</span>
            </h1>
            
            <p className="home-description">
              Passionate about creating innovative solutions and bringing ideas to life through code. 
              I specialize in full-stack development with a focus on modern web technologies.
            </p>
            
            <div className="home-buttons">
              <button className="btn-primary" onClick={handleDownloadResume}>
                <span>Download Resume</span>
                <svg className="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7,10 12,15 17,10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </button>
              
              <button className="btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                <span>Get In Touch</span>
                <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12,5 19,12 12,19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
