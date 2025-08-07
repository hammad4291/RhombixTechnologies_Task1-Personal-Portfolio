import React from "react";

const AchievementSection = () => {
  return (
    <section id="achievements" className="otherSections">
      <h2 className="text-center text-white w-100 headings">Achievements</h2>
      <div className="container2" style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
        <div class="achievement-box">
          <h3>💻 Highest Marks in Web Engineering</h3>
          <p>
            Secured the top position in a course focused on back-end and
            front-end concepts using C#, ASP.NET, and SQL Server.
          </p>
        </div>

        <div className="achievement-box">
          <h3>🌐 Top Performer in Web Technologies</h3>
          <p>
            Achieved the highest marks in a course covering core web development
            technologies such as PHP, HTML, CSS, and JavaScript.
          </p>
        </div>

        <div className="achievement-box">
          <h3>🧠 Programming Fundamentals - Class Topper</h3>
          <p>
            Excelled in logic building, problem-solving, and foundational
            programming concepts, laying the groundwork for future software
            development.
          </p>
        </div>

        {/* <div className="achievement-box">
          <h3>🎯 Top Scorer in Software Requirement Engineering</h3>
          <p>
            Achieved the highest marks in the class during semester exams,
            demonstrating strong analytical thinking and documentation skills.
          </p>
        </div> */}

        <div className="achievement-box">
          <h3>🎨 HCICG - Human Computer Interaction & Computer Graphics</h3>
          <p>
            Scored highest in a course combining user experience design and
            computer graphics, showcasing skills in UI/UX and visual design.
          </p>
        </div>

        <div className="achievement-box">
          <h3>⚙️ Parallel and Distributed Computing (PDC)</h3>
          <p>
            Achieved the highest marks in PDC using C#, demonstrating expertise
            in multithreading, concurrency, and distributed system design.
          </p>
        </div>

        <div className="achievement-box">
          <h3>🔐 Information Security Competition Participant</h3>
          <p>
            Participated in a university-level Information Security competition
            involving cipher code challenges and secured a notable position
            among peers.
          </p>
        </div>
      </div>
    </section>
  );
};
export default AchievementSection;
