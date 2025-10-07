import React from "react";
import "./Resume.css";

function Resume() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "New Jersey Institute of Technology",
      year: "2022-2025",
      gpa: "3.5/4.0",
    },
    {
      degree: "High School Diploma",
      school: "Bayonne High School",
      year: "2020-2022",
      gpa: "4.0/4.0",
    },
  ];

  const experience = [
    {
      title: "Junior Web Developer",
      company: "NJIT Van Houten Library",
      period: "Sep 2023 - May 2024",
      responsibilities: [
        "Develop and maintain web applications to enhance the library’s digital presence",
        "Utilized PHP, JavaScript, and HTML for programming and scripting to support web functions",
        "Managed and supported web-enabled database applications and relational databases",
        "Troubleshot and resolved technical problems for digital projects",
        "Created and maintained comprehensive documentation for projects",
        "Collaborated effectively with library staff to enhance and support the library’s digital presence",
      ],
    },
  ];

  const skills = {
    "Programming Languages": [
      "JavaScript",
      "Python",
      "Java",
      "C++",
      "HTML5",
      "CSS3",
      "PHP",
    ],
    "Frameworks & Libraries": [
      "React",
      "Node.js",
      "Express",
      "Bootstrap",
      "jQuery",
    ],
    "Tools & Technologies": ["Git", "VS Code", "MySQL", "Figma", "Linux"],
  };

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h2 className="resume-title">Resume</h2>

        <div className="resume-content">
          {/* Education Section */}
          <div className="resume-block">
            <h3 className="section-title">Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{edu.degree}</h4>
                    <p className="item-subtitle">{edu.school}</p>
                    <div className="item-details">
                      <span className="item-period">{edu.year}</span>
                      <span className="item-gpa">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="resume-block">
            <h3 className="section-title">Experience</h3>
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{exp.title}</h4>
                    <p className="item-subtitle">
                      {exp.company} ({exp.period})
                    </p>
                    <ul className="responsibilities">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="resume-block">
            <h3 className="section-title">Skills</h3>
            <div className="skills-categories">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={index} className="skill-category">
                  <h4 className="category-title">{category}</h4>
                  <div className="skill-list">
                    {skillList.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-item">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
