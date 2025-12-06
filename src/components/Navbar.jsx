import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <a href="/" target="_blank" rel="noopener noreferrer">
        <div className="logo-container">
          <img src="../../userAsset/Vprofile-c.png" className="logo" alt="Logo" />
          <div className="logo-text">Tamiul Alam</div>
        </div>
      </a>

      <div className="nav-items">
        <div className="nav-item">
          <a href="#projects" onClick={(e) => handleNavClick(e, "#projects")}>
            Projects
          </a>
        </div>
        <div className="nav-item">
          <a href="#skills" onClick={(e) => handleNavClick(e, "#skills")}>
            Skills
          </a>
        </div>
        <div className="nav-item">
          <a href="#contactMe" onClick={(e) => handleNavClick(e, "#contactMe")}>
            Contact Me
          </a>
        </div>
      </div>

      <div className="nav-links">
        <a
          href="https://github.com/tamim127"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            title="GitHub Profile"
            className="fa-brands fa-github nav-icon"
          ></i>
        </a>
        <a
          href="https://in.linkedin.com/in/md-tamiul-alam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            title="linkedIn Profile"
            className="fa-brands fa-linkedin nav-icon"
          ></i>
        </a>
        <a
          href="https://x.com/EishatTamim70"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            title="Twitter Profile"
            className="fa-brands fa-x-twitter nav-icon"
          ></i>
        </a>

        <button
          className="hamburger-icon"
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#projects" onClick={(e) => handleNavClick(e, "#projects")}>
            Projects
          </a>
          <a href="#skills" onClick={(e) => handleNavClick(e, "#skills")}>
            Skills
          </a>
          <a href="#contactMe" onClick={(e) => handleNavClick(e, "#contactMe")}>
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
