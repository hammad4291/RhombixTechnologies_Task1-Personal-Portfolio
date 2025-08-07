import React from "react";

const IntroductionSection = () =>
{
    return (
        <section id="introduction" className="container-fluid introSection">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 d-flex flex-column align-items-center p-4">
              <img
                src="./public/images/me.jpg"
                alt="Hammad"
                className="img-fluid rounded-circle mb-3"
              />
              <h1 className="text-center text-white m-0">
                Hi, I'm Muhammad Hammad Ali
              </h1>
              <h2
                className="text-center"
                style={{ color: "#ffc107", margin: 0 }}
              >
                Full-Stack Developer | React & .NET Enthusiast
              </h2>
              <p
                className="mt-3 text-center"
                style={{
                  color: "#ffffff",
                  maxWidth: "600px",
                  fontSize: "1.2.5rem",
                  margin: 0,
                }}
              >
                Software Engineering student at Arid Agriculture University. I
                thrive on turning ideas into reality using code. I'm currently
                exploring full-stack development with React.js and node js, with
                a growing interest in real-time applications and modern backend
                technologies.
              </p>
              <div className="d-flex flex-wrap justify-content-center mt-3 flex-column align-items-center">
                <a
                  href="#projects"
                  style={{
                    backgroundColor: "#a259ff",
                    color: "#ffffff",
                    fontWeight: "bold",
                  }}
                  className="btn btn-light me-2 mb-2"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  style={{
                    color: "#0d6efd",
                    marginRight: "0.4rem",
                    fontWeight: "bold",
                    border: "1px solid white",
                    backgroundColor: "whitesmoke",
                  }}
                  className="btn mb-2"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </section>
    );
}
export default IntroductionSection;