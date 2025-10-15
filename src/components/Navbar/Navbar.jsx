import React, { useState } from 'react';
import './Navbar.scss';
import Box from '../Box/Box';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Box><div className="navbar-logo">The Growth Accelerator</div></Box>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <Box><a href="#home">Home</a></Box>
        <Box><a href="#about">About</a></Box>
        <Box><a href="#services">Services</a></Box>
        <Box><a href="#contact">Contact</a></Box>
      </div>
      
      <div className="talk">Let's talk</div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        &#9776; {/* Hamburger menu icon */}
      </div>
    </nav>
  );
};

export default Navbar;
