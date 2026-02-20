import { useState } from 'react';
import './App.css';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const biodata = {
    name: "Mrunal Meshram",
    title: "Full Stack Developer",
    about: "Passionate developer with expertise in building modern web applications. Experienced in React, Node.js, and cloud technologies.",
    email: "mrunal.meshram@example.com",
    phone: "+1 234 567 890",
    location: "Nagpur, Maharashtra, India",
    skills: ["React", "JavaScript", "Node.js", "Python", "SQL", "Git", "AWS", "Docker"],
    social: {
      linkedin: "https://linkedin.com/in/mrunalmeshram",
      github: "https://github.com/mrunalmeshram",
      twitter: "https://twitter.com/mrunalmeshram"
    }
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="container">
      <header className="header">
        <div className="container">
          <nav className="nav">
            <a href="#" className="logo">M</a>
            <button 
              className="mobile-menu-btn" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
            <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
              <a href="#about" onClick={handleNavClick}>About</a>
              <a href="#skills" onClick={handleNavClick}>Skills</a>
              <a href="#contact" onClick={handleNavClick}>Contact</a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Hi, I'm <span className="highlight">{biodata.name}</span></h1>
            <p className="title">{biodata.title}</p>
            <p className="about">{biodata.about}</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Get in Touch</a>
              <a href="#skills" className="btn btn-secondary">View Skills</a>
            </div>
          </div>
          <div className="hero-avatar">
            <div className="avatar-circle">{biodata.name.charAt(0)}</div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-header">
            <h2>About Me</h2>
            <p className="section-subtitle">Learn more about my background and experience</p>
          </div>
          <div className="about-grid">
            <div className="about-card">
              <h3>Education</h3>
              <p>B.Tech in Computer Science</p>
              <p className="subtitle">University of Nagpur</p>
            </div>
            <div className="about-card">
              <h3>Experience</h3>
              <p>3+ Years</p>
              <p className="subtitle">Full Stack Development</p>
            </div>
            <div className="about-card">
              <h3>Location</h3>
              <p>{biodata.location}</p>
              <p className="subtitle">Available Remote</p>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-header">
            <h2>Skills</h2>
            <p className="section-subtitle">Technologies and tools I work with</p>
          </div>
          <div className="skills-grid">
            {biodata.skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <div className="section-header">
            <h2>Get in Touch</h2>
            <p className="section-subtitle">Feel free to reach out for collaborations or just a chat</p>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <span className="contact-icon">&#9993;</span>
              <p>{biodata.email}</p>
            </div>
            <div className="contact-card">
              <span className="contact-icon">&#9742;</span>
              <p>{biodata.phone}</p>
            </div>
            <div className="contact-card">
              <span className="contact-icon">&#127968;</span>
              <p>{biodata.location}</p>
            </div>
          </div>
          <div className="social-links">
            <a href={biodata.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={biodata.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={biodata.social.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 {biodata.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
