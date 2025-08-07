import React from "react";

const NavBar = () => {
  return (
    <nav
      style={{
        backgroundColor: "rgba(52, 58, 64, 0.6)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(8px)",
        minHeight: "9vh",
        borderBottom: "2px solid #ba1f3490",
      }}
      className="navbar navbar-expand-lg navbar-dark fixed-top"
    >
      <div className="container">
        <img
          src="./public/images/me.jpg"
          alt="Logo"
          style={{
            height: "48px",
            width: "48px",
            borderRadius: "50%",
            margin: "0 1rem",
            border: "2px solid white",
            objectFit: "cover",
          }}
          className="navbar-logo"
        />
        <a className="navbar-brand fw-bold" href="#">
          Muhammad Hammad Ali
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#introduction">
                Introduction
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#background">
                Background
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experiance">
                Experiance
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blog">
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#achievements">
                Achievements
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
