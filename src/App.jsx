import React from "react";
import Header from "./components/Header";
import "./App.css";
import bgImage from "./assets/university.png";

const App = () => {
  return (
    <div className="app-container">
      <div
        className="background-blur"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className="content-layer">
        <Header />

        {/* Hero Section */}
        <section className="hero-section text-center">
          <div className="container">
            <h1 className="hero-title">Welcome to IIIT Bhagalpur</h1>
            <p className="hero-subtitle">
              Fostering Innovation & Excellence in Technical Education
            </p>
            <a href="#about" className="btn btn-primary mt-3 px-4">
              Login
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="fade-in">
          <div className="container">
            <div className="card-style">
              <h2 className="section-title">About Us</h2>
              <p className="section-text">
               The Indian Institute of Information Technology Bhagalpur (IIIT Bhagalpur) is an Institute of National Importance, established to foster excellence in information technology and allied disciplines. With a vision to transform young minds into competent professionals, the institute focuses on providing a strong foundation in technical education, research, and innovation. IIIT Bhagalpur offers a dynamic academic environment supported by highly qualified faculty, cutting-edge infrastructure, and a growing ecosystem for startups and industrial collaboration. Through its interdisciplinary approach and commitment to excellence, the institute aims to produce globally competitive engineers who can contribute effectively to the development of society and technology.


              </p>
            </div>
          </div>
        </section>

        {/* Departments Section */}
        <section id="departments"     className="fade-in-light">
              <div className="container">
                <h2 className="section-title">Departments</h2>
                <div className="carousel-container">
                  <div className="carousel-card">Computer Science and Engineering</div>
                  <div className="carousel-card">Electronics and Communication Engineering</div>
                  <div className="carousel-card">Mathematics</div>
                  <div className="carousel-card">Physics</div>
                  <div className="carousel-card">Humanities & Social Sciences</div>
                </div>
              </div>
            </section>

            {/* Academics Section */}
            <section id="academics" className="fade-in">
              <div className="container">
                <div className="card-style">
                  <h2 className="section-title">Academics</h2>
                  <p className="section-text">
                    The academic structure at IIIT Bhagalpur is designed to foster intellectual growth, critical thinking, and practical application of knowledge. With a curriculum that balances theory with hands-on learning, the institute offers undergraduate, postgraduate, and doctoral programs in cutting-edge fields like Computer Science, Electronics, and Mechatronics. The academic calendar is structured to encourage research, innovation, and industry interaction, ensuring students are well-prepared to face real-world challenges. With highly qualified faculty, modern laboratories, and a student-centric approach, IIIT Bhagalpur aims to create a vibrant learning ecosystem that nurtures future leaders in technology and research.
                  </p>
                </div>
              </div>
            </section>

            {/* Notices Section */}
            <section id="notices" className="fade-in-light">
      <div className="container">
        <h2 className="section-title">Notices</h2>
        <div className="notice-carousel">
          <div className="notice-card">
            📢 Applications open for 2025 B.Tech admissions.
          </div>
          <div className="notice-card">
            📅 Mid-semester exams from August 10 to 18.
          </div>
          <div className="notice-card">
            💼 Campus placements start from September 1st.
          </div>
          <div className="notice-card">
            🧪 Lab assessments to begin in the third week of August.
          </div>
          <div className="notice-card">
            🛑 Hostel registration closes on July 25th.
          </div>
        </div>
      </div>
    </section>


          {/* Contact Section */}
          <section id="contact" className="fade-in">
          <div className="container">
            <h2 className="section-title text-center">Contact Us</h2>
            <div className="contact-form">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" id="name" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" id="email" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea id="message" rows="4" className="form-control" required></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary px-4">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </section>

      {/* Footer Section */}
<footer className="footer">
  <div className="container text-center">
    <p>© {new Date().getFullYear()} IIIT Bhagalpur. All Rights Reserved.</p>
    <p className="footer-links">
      <a href="#about">About</a> | <a href="#departments">Departments</a> | <a href="#academics">Academics</a> | <a href="#notices">Notices</a> | <a href="#contact">Contact</a>
    </p>
  </div>
</footer>

      </div>
    </div>
  );
};

export default App;   