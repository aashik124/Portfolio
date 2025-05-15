import React from 'react';
import './Education.css';

// Import the college photos
import college1 from '../assets/image1.png';  // Ensure these paths are correct
import college2 from '../assets/image2.png';
import School from '../assets/image.png';

const Education = () => {
  return (
    <section className="education" id="education">
      <h2><i className="fas fa-graduation-cap"></i> Education</h2>
      <div className="education-content">
        <div className="edu-item">
          <img src={college1} alt="Everest Engineering College" className="edu-image" />
          <div className="edu-details">
            <h3>Bachelor of Engineering in Information Technology</h3>
            <p><strong>Everest Engineering College, Pokhara University</strong> — 2022–running</p>
            <p>Current CGPA: 3.27</p>
          </div>
        </div>
        <div className="edu-item">
          <img src={college2} alt="Amar Jyoti College" className="edu-image" />
          <div className="edu-details">
            <h3>Higher Secondary School</h3>
            <p><strong>Amar Jyoti College</strong> — 2019–2021</p>
            <p>GPA: 2.97</p>
          </div>
        </div>

        <div className="edu-item">
          <img src={School} alt="United" className="edu-image" />
          <div className="edu-details">
            <h3>Upto Class 10</h3>
            <p><strong>United English Boarding School</strong> upto 2019</p>
            <p>GPA: 3.55</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
