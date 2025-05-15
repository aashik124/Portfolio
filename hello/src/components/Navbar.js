import React from 'react';
import './Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className="logo">
        <i className="fa-solid fa-user-tie"></i> <b>AP</b>
      </div>
      <ul className="nav-links">
        <h3><li><a href="#home">Home</a></li></h3>
        <h3><li><a href="#about">About</a></li></h3>
        <h3><li><a href="#education">Education</a></li></h3>
        <h3><li><a href="#skills">Skills</a></li></h3>
        <h3><li><a href="#projects">Projects</a></li></h3>
        <h3><li><a href="#contact">Contact</a></li></h3>
      </ul>
      <button className="toggle-btn" onClick={toggleDarkMode}>
        {darkMode ? '🌞' : '🌙'}
      </button>
    </nav>
  );
};

export default Navbar;
