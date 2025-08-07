import React from "react";

const SkillsSection = () =>
{
    return (
        <section id="skills" className="container otherSections">
          <h2 className="text-center text-white w-100 headings">Skills</h2>
          <div
            className="container2"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <h3 style={{ width: "100%", margin: "0.5rem 0rem 2rem 1rem" }}>
              Technical:
            </h3>
            <div>
              <img src="./public/images/react.png" alt="React js" />
              <strong>React JS</strong>
            </div>
            <div>
              <img src="./public/images/JS.png" alt="React js" />
              <strong>JavaScript</strong>
            </div>
            <div>
              <img src="./public/images/node.png" alt="React js" />
              <strong>node js</strong>
            </div>
            <div>
              <img src="./public/images/mongoDB.png" alt="React js" />
              <strong>MongoDB</strong>
            </div>
            <div>
              <img src="./public/images/API.png" alt="React js" />
              <strong>Rest API</strong>
            </div>
            <div>
              <img src="./public/images/gitHub.png" alt="React js" />
              <strong>GitHub</strong>
            </div>
            <div>
              <img src="./public/images/git.png" alt="React js" />
              <strong>Git</strong>
            </div>
            <div>
              <img src="./public/images/c.png" alt="React js" />
              <strong>C#</strong>
            </div>
            <div>
              <img src="./public/images/java.png" alt="React js" />
              <strong>Java</strong>
            </div>
            <div>
              <img src="./public/images/c++.png" alt="React js" />
              <strong>C++</strong>
            </div>

            <div>
              <img src="./public/images/html.png" alt="React js" />
              <strong>HTML</strong>
            </div>
            <div>
              <img src="./public/images/css.png" alt="React js" />
              <strong>CSS</strong>
            </div>
            <h3 style={{ width: "100%", margin: "4rem 0rem 2rem 1rem" }}>
              Soft Skills:
            </h3>
            <div
              style={{
                minWidth: "300px",
                flexDirection: "row",
              }}
            >
              <img
                src="./public/images/TC.png"
                alt="React js"
                style={{ height: "3rem", marginRight: "1rem" }}
              />
              <strong>Team collaboration</strong>
            </div>
            <div
              style={{
                minWidth: "300px",
                flexDirection: "row",
              }}
            >
              <img
                src="./public/images/problemSolving.png"
                alt="React js"
                style={{ height: "3rem", marginRight: "1rem" }}
              />
              <strong>Problem-solving</strong>
            </div>
            <div
              style={{
                minWidth: "300px",
                flexDirection: "row",
              }}
            >
              <img
                src="./public/images/communication.png"
                alt="React js"
                style={{ height: "3.5rem", marginRight: "1rem" }}
              />
              <strong>Communication</strong>
            </div>
          </div>
        </section>
    );
}
export default SkillsSection;