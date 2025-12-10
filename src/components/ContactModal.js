import React, { useState } from 'react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
    newsletter: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <button className="contact-modal-close" onClick={onClose}>×</button>
        
        <div className="contact-modal-content">
          <h2 className="contact-modal-title">
            Let's start a<br />
            <span className="contact-modal-subtitle">conversation!</span>
          </h2>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="form-input"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-row">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-textarea"
              rows="4"
            />

            <label className="form-checkbox">
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
              />
              <span>Yes, I want to join the newsletter</span>
            </label>

            <button type="submit" className="form-submit">
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
