import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Landing.css';
import { FaGraduationCap, FaUsers, FaLaptopCode } from 'react-icons/fa';

// Firebase Analytics
import { analytics } from '../firebase';
import { logEvent } from 'firebase/analytics';

// gallery images
import gallery1 from '../assets/gallery/A1.png';
import gallery2 from '../assets/gallery/A2.jpg';
import gallery3 from '../assets/gallery/A3.jpg';
import gallery4 from '../assets/gallery/A4.jpg';
// hero background
import heroBg   from '../assets/hero-bg.svg';

const galleryImages = [gallery1, gallery2, gallery3, gallery4];

const Landing = () => {
  useEffect(() => {
    if (analytics) {
      logEvent(analytics, 'page_view', {
        page_path: window.location.pathname
      });
    }
  }, []);

  return (
    <div className="landing-page">
      {/* — Hero Section — */}
      <section className="hero">
        <div className="hero-content">
          <h1>Empowering Rural Girls Through Technology Education</h1>

          <h2>
          <p className="hero-text">
            Empowering learners with cutting‑edge tech courses,
            <br></br>expert mentorship, and a vibrant community.
          </p>
          </h2>


          <div className="hero-buttons">
            {/* Redirect to Login instead of directly to Dashboard/Learn */}
            <Link to="/login" className="btn btn-primary">
              Get Started
            </Link>
            {/* Secondary button for Learn More */}
            <Link to="/about" className="btn btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* — Features Section — */}
      <section className="features">
        <div className="container features-grid">
          <div className="feature-card">
            <FaGraduationCap className="feature-icon" />
            <h3 className="feature-title">Expert Mentors</h3>
            <p className="feature-description">
              Learn from industry professionals with real‑world experience.
            </p>
          </div>
          <div className="feature-card">
            <FaLaptopCode className="feature-icon" />
            <h3 className="feature-title">Hands‑On Projects</h3>
            <p className="feature-description">
              Build a portfolio of real applications to showcase your skills.
            </p>
          </div>
          <div className="feature-card">
            <FaUsers className="feature-icon" />
            <h3 className="feature-title">Vibrant Community</h3>
            <p className="feature-description">
              Collaborate, network, and grow with fellow learners.
            </p>
          </div>
        </div>
      </section>

      {/* — Marquee Gallery Section with SVG Background — */}
      <section
        className="marquee-section"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h2 className="gallery-title">Our Community in Action</h2>
        <div className="marquee">
          <div className="marquee-track">
            {[...galleryImages, ...galleryImages].map((src, idx) => (
              <div className="marquee-item" key={idx}>
                <img
                  src={src}
                  alt={`Gallery ${(idx % galleryImages.length) + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
