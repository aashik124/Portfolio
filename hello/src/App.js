import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import Skills from './components/Skills';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  

  return (
    <div className="App">

      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero  />
      <About  />
      <Education />
      <Skills />
      <Projects  />
      <Contact  />
      <Footer  />
    </div>
  );
}

export default App;
