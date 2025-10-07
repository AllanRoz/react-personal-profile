import { Component } from "react";
import "./Portfolio.css";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          project_image: "",
          title: "E-commerce Website",
          description:
            "A full-stack e-commerce platform built with React and Node.js",
          technologies: ["React", "Node.js", "MongoDB", "CSS3"],
        },
        {
          project_image: "",
          title: "Task Management App",
          description:
            "A collaborative task management application with real-time updates",
          technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
        },
      ],
    };
  }

  render() {
    return (
      <div className="portfolio-section">
        {
          //Use this section to list your projects dynamically from state using the map function
          <section id="portfolio" className="portfolio-section">
            <div className="portfolio-container">
              <div className="portfolio-info">
                <h3 className="info-title">Portfolio</h3>
                {this.state.projects.map((info, index) => (
                  <div key={index} className="portfolio-card">
                    <span className="portfolio-icon">{info.icon}</span>
                    {info.link ? (
                      <span>
                        <strong>{info.title}:</strong>{" "}
                        <a href={info.link} className="portfolio-value">
                          {info.detail}
                        </a>
                      </span>
                    ) : (
                      <span>
                        <strong>{info.title}:</strong>{" "}
                        <span className="portfolio-value">{info.detail}</span>
                      </span>
                    )}
                  </div>
                ))}

                <div className="social-media">
                  <h4 className="social-title">Follow Me</h4>
                  <div className="social-links">
                    <a
                      href="https://github.com/AllanRoz"
                      className="social-link github"
                    >
                      <span className="social-icon">🐙</span> GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/allan-rozario/"
                      className="social-link linkedin"
                    >
                      <span className="social-icon">💼</span> LinkedIn
                    </a>
                    <a
                      href="https://www.instagram.com/allanjroza/"
                      className="social-link instagram"
                    >
                      <span className="social-icon">📸</span> Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        }
      </div>
    );
  }
}

export default Portfolio;
