import { Component } from "react";
import "./Portfolio.css";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          project_image: "assets/primewell_clinic.png",
          title: "Primewell Clinic",
          description:
            "A full-stack medical platform built with React and Node.js",
          technologies: ["React", "Node.js", "MySQL", "AntD"],
          project_live_demo:
            "https://cs490-gp-frontend-production.up.railway.app/",
          project_view_code:
            "https://github.com/Aiden-Barrera/CS490-GP-Frontend",
        },
        // {
        //   project_image:
        //     "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg",
        //   title: "Digital Motor Vehicle Show",
        //   description:
        //     "A website where you can view and upload images of Cars, SUVs, and Motorcycles",
        //   technologies: ["HTML", "JavaScript", "CSS", "PHP"],
        //   project_live_demo: "",
        //   project_view_code: "",
        // },
        {
          project_image: "assets/pet_hotel_website.png",
          title: "Pet Hotel Reservation Website",
          description: "A website where you can reserve a hotel for your Pets",
          technologies: ["HTML", "JavaScript", "CSS", "PHP"],
          project_live_demo: "",
          project_view_code: "",
        },
        {
          project_image: "assets/trivia_bot.png",
          title: "Trivia Discord Bot",
          description:
            "A discord bot that gives a multiple-choice trivia question to the user when invoked",
          technologies: ["JavaScript", "Discord.js", "Node.js"],
          project_live_demo: "",
          project_view_code: "https://github.com/AllanRoz/discord-trivia-bot",
        },
      ],
    };
  }

  render() {
    return (
      <section id="portfolio" className="portfolio-section">
        <div className="portfolio-container">
          <h2 className="portfolio-title">My Portfolio</h2>

          <div className="portfolio-content">
            {this.state.projects.map((project) => (
              <div className="portfolio-block">
                <img
                  src={project.project_image}
                  alt={`Screenshot of ${project.title}`}
                  className="project-image"
                />

                <div className="project-details">
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-description">{project.description}</p>

                  <div className="technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="technology">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="buttons">
                    <a
                      href={project.project_live_demo}
                      className="portfolio-btn btn-live-demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.project_view_code}
                      className="portfolio-btn btn-view-code"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
