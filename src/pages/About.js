import React from 'react';
import './About.css'; // You can reuse styles or create new ones

const About = () => {
  return (
    <div className="about-container">
      <h1 className="page-title">About Our Institution</h1>

      <div className="section-box">
        <h2>🎓 Who We Are</h2>
        <p>
          Our institution is a leading center of excellence in education, nurturing future professionals with strong ethical and academic foundations. We are committed to creating a vibrant learning environment where students are empowered to innovate, explore, and grow.
        </p>
      </div>

      <div className="section-box">
        <h2>🌟 Vision</h2>
        <p>
          To be a globally recognized institution known for innovation in teaching, cutting-edge research, and shaping leaders of tomorrow.
        </p>
      </div>

      <div className="section-box">
        <h2>🎯 Mission</h2>
        <ul>
          <li>Provide quality education through well-structured academic programs.</li>
          <li>Foster research, innovation, and entrepreneurship.</li>
          <li>Develop socially responsible individuals with leadership qualities.</li>
          <li>Maintain strong industry-academia collaborations for practical learning.</li>
        </ul>
      </div>

      <div className="section-box">
        <h2>📍 Location & Infrastructure</h2>
        <p>
          Located in a serene and eco-friendly campus, we offer world-class infrastructure including advanced laboratories, digital libraries, modern classrooms, and student-friendly amenities.
        </p>
      </div>

      <div className="section-box">
        <h2>🤝 Join Us</h2>
        <p>
          Whether you're a student, educator, or collaborator — we welcome you to be part of our journey towards excellence and innovation.
        </p>
        <ul className="quick-links">
          <li><a href="/admissions">Apply for Admission</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/careers">Careers at Our Institution</a></li>
        </ul>
      </div>
    </div>
  );
};

export default About;
