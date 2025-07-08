import React from 'react';
import { Link } from 'react-router-dom'; 

import './Home.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import skilledImg from '../assets/img/skilled.jpeg';
import libraryImg from '../assets/img/library.jpeg'; 
import CoursesImg from '../assets/img/courses.png'; 

const Home = () => {
  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Best Education </h1>
          <p>Learn, grow, and lead with the best in class facilities and faculty.</p>
          <div className="hero-buttons">
  <Link to="/about">
    <button className="btn primary">Login</button>
  </Link>
</div>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
  <h2 style={{ textAlign: 'center' }}>Why Choose Us?</h2>
  <Carousel
    showThumbs={false}
    showStatus={false}
    infiniteLoop
    autoPlay
    interval={3000}
    emulateTouch
  >
    <div className="feature">
      <img src={skilledImg} alt="Skilled Lecturers" />
      <h3>Skilled Lecturers</h3>
      <p>Our team of experts ensures high-quality education.</p>
    </div>

    <div className="feature">
      <img src={libraryImg} alt="Book Library" />
      <h3>Book Library</h3>
      <p>Access thousands of resources for your academic needs.</p>
    </div>

    <div className="feature">
      <img src={CoursesImg} alt="Certified Courses" />
      <h3>Certified Courses</h3>
      <p>Get globally recognized certifications after completing courses.</p>
    </div>
  </Carousel>
</section>


      {/* NEWS / ANNOUNCEMENT SECTION */}
      <section className="quick-links">
  <h2>Quick Links</h2>
  <ul className="quick-links-list">
    <li><a href="#admissions">🎓 Admissions 2025</a></li>
    <li><a href="#webinar">🕒 AI in Education Webinar</a></li>
    <li><a href="#scholarships">📢 Scholarships Info</a></li>
    <li><a href="#courses">📘 Explore Courses</a></li>
    <li><a href="#contact">📞 Contact Us</a></li>
  </ul>
</section>


    </div>
  );
};

export default Home;
