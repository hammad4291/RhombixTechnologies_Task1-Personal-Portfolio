import React from "react";

const BackgroundSection = () => {
  return (
    <section id="background" className="container otherSections">
      <h2 className="text-center text-white w-100 headings">Background</h2>
      <div className="container2">
        <div className="education-card">
          <h4>
            <strong>BS Software Engineering:</strong>
          </h4>
          <p>
            — Barani Institute of Information Technology BIIT (Affiliated with
            ARID University) (2022–2026)<br></br>
            <strong>CGPA (Current after 7 sammesters):</strong> 3.73
            <br />
            {/* <strong>Relevant Courses:</strong> Object Oriented Programming OOP,
            Data Structure and Algorithms DSA, Software Design & Architecture
            SDA, Database Management Systems DBMS.
            <strong>Relevant Courses:</strong> */}
            <ul>
              <li>Object Oriented Programming (OOP)</li>
              <li>Data Structures and Algorithms (DSA)</li>
              <li>Software Design & Architecture (SDA)</li>
              <li>Database Management Systems (DBMS)</li>
            </ul>
          </p>
        </div>
        <div className="education-card">
          <h4>
            <strong>FSC Pre-Engineering:</strong>
          </h4>
          <p>
            — Fazaia Degree College Faisal Karachi (2020–2022)<br></br>
            <strong>Relevant Subjects:</strong> Computer Science, Physics and
            Mathematics.
          </p>
        </div>
        <div className="education-card">
          <h4>
            <strong>Matric:</strong>
          </h4>
          <p>
            — Fazaia Inter College Nur Khan Rawalpindi (2018–2020)<br></br>
            <strong>Relevant Subjects:</strong> Computer Science, Chemistry,
            Physics and Mathematics.
          </p>
        </div>
      </div>
    </section>
  );
};
export default BackgroundSection;
