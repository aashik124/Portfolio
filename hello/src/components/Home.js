import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import profileImg from '../assets/IMG_3465.jpg';

const Hero = () => {
  const typingRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const text = "Front-End";

  // Typing Effect Hook
  useEffect(() => {
    const type = () => {
      if (!typingRef.current) return;

      if (!isDeleting && index <= text.length) {
        typingRef.current.innerText = text.slice(0, index + 1);
        setIndex(prev => prev + 1);
      } else if (isDeleting && index >= 0) {
        typingRef.current.innerText = text.slice(0, index - 1);
        setIndex(prev => prev - 1);
      } else {
        setIsDeleting(!isDeleting);
      }
    };

    const timeout = setTimeout(type, isDeleting ? 100 : 150);
    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      section.classList.add('reveal-section');
    }
  };

  return (
    <section id="home" className="hero1 reveal">
      <div className='hero'>
        <div className="hero-text">
          <h1>
            Hi There,<br />I'm Aashik <span>Poudel</span>
          </h1>
          <p>
           <h4> I Am Into <span className='frontend' ref={typingRef}></span><span className="cursor">|</span></h4>
          </p>
          <button className="btn" onClick={() => scrollToSection('about')}>
            About Me <i className="fa-solid fa-circle-down"></i>
          </button>

          <div className="social-icons">
            <a href="https://www.facebook.com/aashik.poudel.71"><i className="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/aashik_poudel/"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        <div className="image">
          <img src={profileImg} alt="Aashik" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
