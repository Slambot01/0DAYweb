import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="grid-lines"></div>
      <div className="header-content">
        <div className="logo">
          <div className="logo-icon">
            <a href="/">
              <img src="src/assets/logo.png" alt="Logo" />
            </a>
          </div>
          <div>0 DAY</div>
        </div>
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <div className={`hamburger ${mobileMenuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <nav className={mobileMenuOpen ? "mobile-open" : ""}>
          <ul>
            <li>
              <a href="#" onClick={() => setMobileMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#events" onClick={() => setMobileMenuOpen(false)}>
                Events
              </a>
            </li>
            <li>
              <a href="#team" onClick={() => setMobileMenuOpen(false)}>
                Team
              </a>
            </li>
            <li>
              <a href="#resources" onClick={() => setMobileMenuOpen(false)}>
                Resources
              </a>
            </li>
            <li>
              <a href="#ctf" onClick={() => setMobileMenuOpen(false)}>
                CTF
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
