import React from "react";

const OwnerInfo = () => {
  return (
    <div className="owner py-5 d-flex justify-content-center">
      <div className="owner-card p-5 shadow-lg text-center rounded-4">
        {/* Profile image */}
        <img
          src="/Abhisek.jpg"
          alt="Developer"
          className="owner-img mx-auto mb-3 shadow-sm"
        />

        {/* Name and Role */}
        <h2 className="fw-bold gradient-text mb-2">Abhisek Nayak</h2>
        <p className="text-muted mb-4">Full Stack Developer | Java & React</p>

        {/* Skills Section */}
        <div className="skills-section mb-4">
          <h5 className="fw-semibold mb-3 text-dark">💡 Technical Expertise</h5>
          <div className="skills-list">
            {[
              "HTML", "CSS", "Bootstrap CSS", "JavaScript", "React JS",
              "C", "Python", "Java", "JDBC", "Servlet", "Hibernate", "Spring Boot",
              "MySQL", "PostgresSQL", "REST APIs", "Postman", "Git & GitHub"
            ].map((skill, index) => (
              <span key={index} className="badge skill-badge me-2 mb-2">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
          {/* GitHub */}
          <a
            href="https://github.com/AbhisekNayak999"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-dark github-btn px-4 py-2 fw-semibold"
          >
            🌐 GitHub
          </a>

          {/* Resume */}
          <a
            href="/AbhisekNayak'sResume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-primary resume-btn px-4 py-2 fw-semibold"
          >
            📄 View Resume
          </a>

          {/* Contact */}
          <a
            href="mailto:nabhisek947@gmail.com?subject=Let's Connect&body=Hi Abhisek,%0D%0A%0D%0AI saw your Employee Management System project and wanted to connect with you."
            className="btn btn-outline-success contact-btn fw-semibold"
          >
            📧 Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default OwnerInfo;
