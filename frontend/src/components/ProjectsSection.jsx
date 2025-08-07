import React from "react";

const ProjectsSection = ({projects, loading}) =>
{
    return(
                <section
          id="projects"
          className="container py-5 otherSections"
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "20px"
          }}
        >
          <h2 className="text-center text-white w-100 headings">Projects</h2>
          {loading ? (
            <div
              style={{ width: "100%", textAlign: "center", margin: "40px 0" }}
            >
              <img
                src="./public/load.gif"
                alt="Loading..."
                style={{ width: "250px", height: "250px" }}
              />
            </div>
          ) : projects && projects.length > 0 ? (
            <div className="horizontal-scroll-wrapper">
              {projects.map((project) => (
                <div key={project._id} className="project-card" >
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <img src={project.image} alt={project.title} />
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <h1 style={{ color: "white" }}>Data cannot be fetched</h1>
          )}
        </section>
    );
}
export default ProjectsSection;