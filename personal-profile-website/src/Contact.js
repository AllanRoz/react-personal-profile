import React from "react";
import "./Contact.css";

function Contact() {
  const contactInfo = [
    {
      title: "Email",
      detail: "ar358@njit.edu",
      link: "mailto:ar358@njit.edu",
      icon: "📧",
    },
    {
      title: "Phone",
      detail: "+1 (551) 312-7924",
      link: "tel:+15551234567",
      icon: "📱",
    },
    {
      title: "Location",
      detail: "Bayonne, NJ",
      link: null,
      icon: "📍",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h3 className="info-title">Contact Information</h3>
          {contactInfo.map((info, index) => (
            <div key={index} className="contact-card">
              <span className="contact-icon">{info.icon}</span>
              <span>
                <strong>{info.title}:</strong>{" "}
                <a href={info.link} className="contact-value">
                  {info.detail}
                </a>
              </span>
            </div>
          ))}

          <div className="social-media">
            <h4 className="social-title">Follow Me</h4>
            <div className="social-links">
              <a
                href="https://github.com/AllanRoz"
                className="social-link github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="social-icon">🐙</span> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/allan-rozario/"
                className="social-link linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="social-icon">💼</span> LinkedIn
              </a>
              <a
                href="https://www.instagram.com/allanjroza/"
                className="social-link instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="social-icon">📸</span> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
