import React, { useState } from 'react';
import './Navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">The Growth Accelerator</div>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="talk">Let's talk</div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        &#9776; {/* Hamburger menu icon */}
      </div>
    </nav>
  );
};

export default Navbar;
