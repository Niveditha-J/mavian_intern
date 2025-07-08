import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    console.log(formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />

          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />

          <label>Subject:</label>
          <input 
            type="text" 
            name="subject" 
            value={formData.subject}
            onChange={handleChange}
            required 
          />

          <label>Message:</label>
          <textarea 
            name="message" 
            rows="5" 
            value={formData.message}
            onChange={handleChange}
            required 
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-details">
          <h3>Get in Touch</h3>
          <p><strong>Address:</strong> Your College Name, Main Campus, City, State, ZIP</p>
          <p><strong>Email:</strong> contact@yourcollege.edu</p>
          <p><strong>Phone:</strong> +91-9876543210</p>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="map-container">
        <h2>Find Us on the Map</h2>
        <iframe
          title="campus-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.201340228692!2d80.23475131535452!3d13.010793517071853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526773e97bfc29%3A0x290fbb07e9db9e88!2sAnna%20University!5e0!3m2!1sen!2sin!4v1622136147286!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: '8px', marginTop: '2rem' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
