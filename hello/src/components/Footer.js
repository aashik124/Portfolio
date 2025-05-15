import React from "react";
import "./Footer.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-section">
          <h2 className="footer-title">Aashik's Portfolio</h2>
          <p>Thank you for visiting my personal portfolio website. Connect with me over socials.</p>
        </div>

        {/* Middle Section */}
        <div className="footer-section">
          <h2 className="footer-title">Quick Links</h2>
          <ul className="footer-links">
            <li> <a href="#home" className="a">- Home</a></li>
            <li> <a href="#about" className="a">- About</a></li>
            <li> <a href="#education" className="a">- Education</a></li>
            <li> <a href="#skills" className="a">- Skills</a></li>
            <li> <a href="#projects" className="a">- Projects</a></li>
            <li> <a href="#contact" className="a">- Contact</a></li>
            
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-section">
          <h2 className="footer-title">Contact Info</h2>
          <ul className="contact-info">
            <li><FaPhoneAlt className="icon" /> 9819101513</li>
            <li><FaEnvelope className="icon" /> aashiqpoudel124@gmail.com</li>
            <li><FaMapMarkerAlt className="icon" /> Tokha, Kathmandu.</li>
          </ul>
          <div className="social-icons">
            <a href="https://www.facebook.com/aashik.poudel.71"><i className="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/aashik_poudel/"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>Designed With <span className="heart">❤️</span> By <span className="author">Aashik Poudel</span></p>
      </div>
    </footer>
  );
};

export default Footer;
