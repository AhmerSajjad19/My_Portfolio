import React from 'react';
import './Projects.css';

const Projects = () => {
  const completedProjects = [
    {
      title: 'PathSearchAlgorithm',
      description: 'This project is a web-based tool for visualizing graph traversal algorithms such as BFS, DFS, and UCS. Users can create graphs, set start and goal nodes, and watch step-by-step traversal with highlighted paths. The tool helps in understanding algorithm behavior and can be applied to pathfinding and route optimization in a simple, interactive way.',
      technologies: ['JavaScript', 'HTML5', 'CSS3'],
      githubUrl: 'https://ahmersajjad19.github.io/PathSearchAlgorithm/',
      status: 'Completed',
      category: 'Algorithm Visualization'
    },
    {
      title: 'Hotel Management System',
      description: 'A web-based Hotel Management System designed to streamline customer and staff interactions, manage room reservations, and enhance overall operational efficiency. Features include room booking, customer management, staff scheduling, and reporting capabilities.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Bootstrap', 'CSS', 'JavaScript', 'HTML'],
      githubUrl: null,
      status: 'Completed',
      category: 'Web Application'
    },
    {
      title: 'ElevateSocial (Lift your social Presence)',
      description: 'Elevate Social is an AI-powered platform that automates social media marketing for businesses, featuring content generation, post scheduling, Facebook/Instagram API integration, secure Stripe payments, and AI-driven captions and visuals using Llama 3.1, DeepSeek, and Stable Diffusion.',
      technologies: ['React.js', 'Bootstrap', 'Flask (Python)', 'Meta APIs (Facebook & Instagram)', 'Stripe', 'Llama 3.1', 'Deep Seek', 'Stable Diffusion'],
      githubUrl: null,
      status: 'Completed',
      category: 'AI-Powered Platform'
    }
  ];

  const ongoingProjects = [
    {
      title: 'Online Course Portal',
      description: 'A comprehensive e-learning platform that provides interactive courses, progress tracking, and certification features.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Stripe'],
      status: 'In Progress',
      progress: 60
    },
    {
      title: 'To Do List (Daily Task Manager)',
      description: 'An advanced task management application with features like priority setting, deadline tracking, and team collaboration.',
      technologies: ['React.js', 'Firebase', 'CSS3'],
      status: 'In Progress',
      progress: 40
    }
  ];

  const ProjectCard = ({ project, isCompleted = true }) => (
    <div className={`project-card ${isCompleted ? 'completed' : 'ongoing'}`}>
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
          {project.status}
        </span>
      </div>
      
      <div className="project-category">
        {project.category && <span className="category-tag">{project.category}</span>}
      </div>
      
      <p className="project-description">{project.description}</p>
      
      <div className="technologies">
        <h4>Technologies Used:</h4>
        <div className="tech-tags">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
      
      {!isCompleted && (
        <div className="progress-section">
          <div className="progress-header">
            <span>Progress</span>
            <span>{project.progress}%</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
        </div>
      )}
      
      <div className="project-footer">
        {project.githubUrl ? (
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-link"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            View Live
          </a>
        ) : (
          <span className="no-github">Private Repository</span>
        )}
      </div>
    </div>
  );

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            A showcase of my completed and ongoing projects
          </p>
        </div>

        <div className="projects-content">
          {/* Completed Projects */}
          <div className="projects-category">
            <div className="category-header">
              <div className="category-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </div>
              <h3>Completed Projects</h3>
            </div>
            
            <div className="projects-grid">
              {completedProjects.map((project, index) => (
                <ProjectCard key={index} project={project} isCompleted={true} />
              ))}
            </div>
          </div>

          {/* Ongoing Projects */}
          <div className="projects-category">
            <div className="category-header">
              <div className="category-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12,6 12,12 16,14"></polyline>
                </svg>
              </div>
              <h3>Ongoing Projects</h3>
            </div>
            
            <div className="projects-grid">
              {ongoingProjects.map((project, index) => (
                <ProjectCard key={index} project={project} isCompleted={false} />
              ))}
            </div>
          </div>
        </div>

        {/* Project Stats */}
        <div className="project-stats">
          <div className="stat-card">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
            </div>
            <div className="stat-number">3</div>
            <div className="stat-label">Completed Projects</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12,6 12,12 16,14"></polyline>
              </svg>
            </div>
            <div className="stat-number">2</div>
            <div className="stat-label">Ongoing Projects</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16,18 22,12 16,6"></polyline>
                <polyline points="8,6 2,12 8,18"></polyline>
              </svg>
            </div>
            <div className="stat-number">15+</div>
            <div className="stat-label">Technologies Used</div>
          </div>
          
          {/* <div className="stat-card">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className="stat-number">100%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
