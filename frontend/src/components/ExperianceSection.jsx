import React from "react";
import SkillsSection from "./SkillsSection";

const ExperianceSection = () => {
  return (
    <section id="experiance" className="otherSections">
      <h2 className="text-center text-white w-100 headings">Experience</h2>
      <div className="container2">
        <p>
          Although I haven't held a formal internship or job yet, I’ve gained
          strong practical skills through a series of academic and self-driven
          projects. These projects helped me build real-world applications using
          technologies like React, React Native, ASP.NET, and C++.
        </p>
        <p>
          Throughout these experiences, I collaborated with classmates, followed
          the SDLC, implemented REST APIs, managed state, connected with
          databases (MongoDB and SQL Server), and deployed solutions using
          GitHub and Netlify. This hands-on learning gave me confidence to work
          as a full-stack developer.
        </p>
        <p>My technical exposure spans:</p>
        <div>
          <ul>
            <li>Frontend: React, Bootstrap, Tailwind CSS</li>
            <li>Backend: ASP.NET Core, Node.js</li>
            <li>Database: MongoDB, SQL Server</li>
            <li>Mobile: React Native</li>
            <li>Tools: GitHub, Postman, VS Code</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default ExperianceSection;
