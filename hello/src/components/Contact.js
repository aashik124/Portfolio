import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form Submitted", formData);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      setSuccessMsg('Message sent successfully!');

      // Hide message after 3 seconds
      setTimeout(() => {
        setSuccessMsg('');
      }, 3000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2>
          <i className="fas fa-headset contact-icon"></i>
          <span> Contact Me</span>
        </h2>
      </div>

      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-left">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}

              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}

              <label>Message</label>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <span className="error">{errors.message}</span>}

              <button type="submit">
                Send <i className="fas fa-paper-plane"></i>
              </button>

              {successMsg && <p className="success">{successMsg}</p>}
            </form>
          </div>

          <div className="contact-right">
            <h3>Let's Talk</h3>
            
            <div className="contact-graphic">
              <i className="fas fa-comments fa-5x"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
