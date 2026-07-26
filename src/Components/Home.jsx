import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  FaFish, 
  FaUsers, FaLeaf, FaHeart, FaMapMarkerAlt,
  FaPhone, FaEnvelope, FaTint, FaSeedling,
  FaRecycle
} from 'react-icons/fa';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className={`home-hero ${isVisible ? 'visible' : ''}`}>
        <div className="hero-animated-bg"></div>
        <div className="hero-floating-fish">
          <div className="fish-float fish-1">🐟</div>
          <div className="fish-float fish-2">🐠</div>
          <div className="fish-float fish-3">🐡</div>
        </div>
        <Container>
          <Row className="justify-content-center align-items-center min-vh-100">
            <Col lg={8} className="text-center">
              <div className="hero-content">
                <div className="hero-badge">
                  <FaFish className="hero-badge-icon" />
                </div>
                <h1 className="hero-title">
                  BUKANI MAMA TOTO
                </h1>
                <div className="hero-divider"></div>
                <p className="hero-subtitle">Women in Aquaculture</p>
                <p className="hero-text">
                  Empowering women through sustainable tilapia farming, 
                  providing fresh fish to communities across the country.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2 className="section-title">Our Mission</h2>
              <p className="section-subtitle">
                Transforming lives through sustainable aquaculture practices
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col md={4}>
              <div className="mission-card">
                <div className="mission-icon-wrapper">
                  <FaUsers className="mission-icon" />
                </div>
                <h4>Women Empowerment</h4>
                <p>Creating economic opportunities for women through tilapia farming, promoting financial independence and leadership.</p>
              </div>
            </Col>
            
            <Col md={4}>
              <div className="mission-card">
                <div className="mission-icon-wrapper">
                  <FaLeaf className="mission-icon" />
                </div>
                <h4>Sustainability</h4>
                <p>Environmentally responsible aquaculture practices that protect Lake Victoria's ecosystem for future generations.</p>
              </div>
            </Col>
            
            <Col md={4}>
              <div className="mission-card">
                <div className="mission-icon-wrapper">
                  <FaHeart className="mission-icon" />
                </div>
                <h4>Nutrition Security</h4>
                <p>Providing high-quality protein sources to improve family nutrition and combat malnutrition nationwide.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Tilapia Section */}
      <section className="tilapia-section">
        <div className="section-wave"></div>
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={6}>
              <div className="tilapia-visual">
                <div className="fish-illustration">
                  <div className="fish-main">
                    <FaFish className="fish-icon" />
                  </div>
                  <div className="water-ripples">
                    <div className="ripple"></div>
                    <div className="ripple"></div>
                    <div className="ripple"></div>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={6}>
              <div className="tilapia-content">
                <h2>Fresh Tilapia</h2>
                <div className="content-divider"></div>
                <p className="lead">
                  Premium Nile Tilapia harvested at the peak of each season from our 
                  sustainable cage farming operations in Lake Victoria.
                </p>
                
                <div className="features-list">
                  <div className="feature">
                    <FaSeedling className="feature-icon" />
                    <div>
                      <h5>Seasonal Harvesting</h5>
                      <p>Harvested when fish reach optimal size and quality</p>
                    </div>
                  </div>
                  
                  <div className="feature">
                    <FaMapMarkerAlt className="feature-icon" />
                    <div>
                      <h5>Countrywide Supply</h5>
                      <p>Distributed to communities across the nation</p>
                    </div>
                  </div>
                  
                  <div className="feature">
                    <FaTint className="feature-icon" />
                    <div>
                      <h5>Lake Victoria Fresh</h5>
                      <p>Sustainably farmed in pristine lake waters</p>
                    </div>
                  </div>
                  
                  <div className="feature">
                    <FaRecycle className="feature-icon" />
                    <div>
                      <h5>Chemical-Free</h5>
                      <p>Natural farming practices without chemicals</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2 className="section-title">Our Impact</h2>
              <p className="section-subtitle">
                Making a difference in communities across Kenya
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col md={3} className="text-center">
              <div className="impact-stat">
                <div className="stat-number">250+</div>
                <div className="stat-label">Women Empowered</div>
              </div>
            </Col>
            
            <Col md={3} className="text-center">
              <div className="impact-stat">
                <div className="stat-number">15</div>
                <div className="stat-label">Farming Groups</div>
              </div>
            </Col>
            
            <Col md={3} className="text-center">
              <div className="impact-stat">
                <div className="stat-number">Nationwide</div>
                <div className="stat-label">Supply Reach</div>
              </div>
            </Col>
            
            <Col md={3} className="text-center">
              <div className="impact-stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">Sustainable</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2 className="section-title">Our Process</h2>
              <p className="section-subtitle">
                Sustainable farming from lake to table
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col md={4}>
              <div className="process-step">
                <div className="step-number">01</div>
                <h4>Sustainable Farming</h4>
                <p>Environmentally friendly cage farming in Lake Victoria using natural practices</p>
              </div>
            </Col>
            
            <Col md={4}>
              <div className="process-step">
                <div className="step-number">02</div>
                <h4>Seasonal Harvest</h4>
                <p>Harvesting at peak seasons ensures optimal quality and flavor</p>
              </div>
            </Col>
            
            <Col md={4}>
              <div className="process-step">
                <div className="step-number">03</div>
                <h4>Nationwide Distribution</h4>
                <p>Fresh tilapia reaches communities across the entire country</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2 className="section-title">Get Fresh Tilapia</h2>
              <p className="section-subtitle">
                Connect with us for the freshest Lake Victoria tilapia
              </p>
              
              <div className="contact-cards">
                <div className="contact-card">
                  <FaMapMarkerAlt className="contact-icon" />
                  <h5>Location</h5>
                  <p>Lake Victoria, Kenya</p>
                </div>
                
                <div className="contact-card">
                  <FaPhone className="contact-icon" />
                  <h5>Phone</h5>
                  <p>+254 196 329 02</p>
                </div>
                
                <div className="contact-card">
                  <FaEnvelope className="contact-icon" />
                  <h5>Email</h5>
                  <p>@bukanimamatoto.com</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <style jsx>{`
        .home-page {
          overflow-x: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #2d3748;
          line-height: 1.6;
        }
        
        /* Hero Section */
        .home-hero {
          position: relative;
          background: linear-gradient(135deg, #0a3d62 0%, #1a5276 50%, #0a3d62 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          text-align: center;
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease;
        }
        
        .home-hero.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hero-animated-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 80%, rgba(136, 212, 152, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(100, 200, 250, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(26, 147, 111, 0.2) 0%, transparent 50%);
          animation: waterShift 8s ease-in-out infinite;
        }
        
        @keyframes waterShift {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(1deg); }
        }
        
        .hero-floating-fish {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .fish-float {
          position: absolute;
          font-size: 2rem;
          animation: floatFish 15s linear infinite;
          opacity: 0.7;
        }
        
        .fish-1 {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
          animation-duration: 20s;
        }
        
        .fish-2 {
          top: 60%;
          left: 80%;
          animation-delay: 5s;
          animation-duration: 25s;
        }
        
        .fish-3 {
          top: 80%;
          left: 20%;
          animation-delay: 10s;
          animation-duration: 18s;
        }
        
        @keyframes floatFish {
          0% { transform: translateX(-100px) translateY(0) rotate(0deg); }
          25% { transform: translateX(25vw) translateY(-50px) rotate(5deg); }
          50% { transform: translateX(50vw) translateY(0) rotate(0deg); }
          75% { transform: translateX(75vw) translateY(50px) rotate(-5deg); }
          100% { transform: translateX(100vw) translateY(0) rotate(0deg); }
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100px;
          height: 100px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          margin-bottom: 2rem;
          box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.3);
        }
        
        .hero-badge-icon {
          font-size: 2.5rem;
          color: white;
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          color: white;
          letter-spacing: -0.5px;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
        
        .hero-divider {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #88d498, #64c8fa);
          margin: 0 auto 2rem;
          border-radius: 2px;
          box-shadow: 0 2px 10px rgba(136, 212, 152, 0.5);
        }
        
        .hero-subtitle {
          font-size: 1.4rem;
          color: #88d498;
          font-weight: 600;
          margin-bottom: 1.5rem;
          letter-spacing: 0.5px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }
        
        .hero-text {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          max-width: 600px;
          margin: 0 auto 3rem;
          line-height: 1.8;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        /* Mission Section */
        .mission-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          position: relative;
        }
        
        .section-title {
          font-size: 2.8rem;
          font-weight: 800;
          color: #0a3d62;
          margin-bottom: 1rem;
        }
        
        .section-subtitle {
          font-size: 1.3rem;
          color: #1a936f;
          margin-bottom: 4rem;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
          font-weight: 500;
        }
        
        .mission-card {
          padding: 3rem 2rem;
          text-align: center;
          border-radius: 20px;
          background: white;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid #f1f5f9;
          transition: all 0.3s ease;
          height: 100%;
          position: relative;
          overflow: hidden;
        }
        
        .mission-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #1a936f, #0a3d62);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        
        .mission-card:hover::before {
          transform: scaleX(1);
        }
        
        .mission-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
        }
        
        .mission-icon-wrapper {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: linear-gradient(135deg, #1a936f, #0a3d62);
          margin: 0 auto 2rem;
          color: white;
          box-shadow: 0 5px 15px rgba(26, 147, 111, 0.3);
        }
        
        .mission-icon {
          font-size: 2rem;
        }
        
        .mission-card h4 {
          font-size: 1.5rem;
          color: #0a3d62;
          margin-bottom: 1.5rem;
          font-weight: 700;
        }
        
        .mission-card p {
          color: #5a7a8c;
          line-height: 1.7;
        }
        
        /* Tilapia Section */
        .tilapia-section {
          padding: 100px 0;
          background: white;
          position: relative;
        }
        
        .section-wave {
          position: absolute;
          top: -1px;
          left: 0;
          width: 100%;
          height: 100px;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23f8fafc' fill-opacity='1' d='M0,128L48,117.3C96,107,192,85,288,96C384,107,480,149,576,149.3C672,149,768,107,864,96C960,85,1056,107,1152,117.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
          background-size: cover;
          background-position: center;
        }
        
        .tilapia-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }
        
        .fish-illustration {
          position: relative;
          width: 300px;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .fish-main {
          width: 150px;
          height: 150px;
          background: linear-gradient(135deg, #0a3d62, #1a936f);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
          box-shadow: 0 10px 30px rgba(10, 61, 98, 0.3);
        }
        
        .fish-icon {
          font-size: 4rem;
          color: white;
          animation: swim 3s ease-in-out infinite;
        }
        
        @keyframes swim {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          50% { transform: translateX(10px) rotate(5deg); }
        }
        
        .water-ripples {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        
        .ripple {
          position: absolute;
          border: 2px solid #1a936f;
          border-radius: 50%;
          animation: ripple 3s linear infinite;
          opacity: 0.3;
        }
        
        .ripple:nth-child(1) {
          width: 200px;
          height: 200px;
          animation-delay: 0s;
        }
        
        .ripple:nth-child(2) {
          width: 250px;
          height: 250px;
          animation-delay: 1s;
        }
        
        .ripple:nth-child(3) {
          width: 300px;
          height: 300px;
          animation-delay: 2s;
        }
        
        @keyframes ripple {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0.3;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0;
          }
        }
        
        .tilapia-content h2 {
          font-size: 2.5rem;
          color: #0a3d62;
          margin-bottom: 1rem;
          font-weight: 800;
        }
        
        .content-divider {
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #1a936f, #0a3d62);
          margin-bottom: 2rem;
          border-radius: 2px;
        }
        
        .tilapia-content .lead {
          font-size: 1.3rem;
          color: #5a7a8c;
          margin-bottom: 3rem;
          line-height: 1.7;
        }
        
        .features-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .feature {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          padding: 1.5rem;
          background: #f8fafc;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          border-left: 4px solid #1a936f;
        }
        
        .feature:hover {
          transform: translateX(10px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          background: white;
        }
        
        .feature-icon {
          font-size: 1.5rem;
          color: #1a936f;
          margin-top: 0.25rem;
          flex-shrink: 0;
        }
        
        .feature h5 {
          color: #0a3d62;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }
        
        .feature p {
          color: #5a7a8c;
          margin: 0;
        }
        
        /* Impact Section */
        .impact-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #0a3d62 0%, #1a5276 100%);
          color: white;
        }
        
        .impact-section .section-title {
          color: white;
        }
        
        .impact-section .section-subtitle {
          color: rgba(255, 255, 255, 0.8);
        }
        
        .impact-stat {
          padding: 3rem 1rem;
        }
        
        .stat-number {
          font-size: 3.5rem;
          font-weight: 800;
          color: #88d498;
          margin-bottom: 1rem;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }
        
        .stat-label {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 600;
        }
        
        /* Process Section */
        .process-section {
          padding: 100px 0;
          background: white;
        }
        
        .process-step {
          text-align: center;
          padding: 2rem;
        }
        
        .step-number {
          font-size: 4rem;
          font-weight: 800;
          color: #0a3d62;
          margin-bottom: 1.5rem;
          opacity: 0.1;
        }
        
        .process-step h4 {
          font-size: 1.5rem;
          color: #0a3d62;
          margin-bottom: 1rem;
          font-weight: 700;
        }
        
        .process-step p {
          color: #5a7a8c;
          line-height: 1.7;
        }
        
        /* Contact Section */
        .contact-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }
        
        .contact-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 4rem;
        }
        
        .contact-card {
          padding: 3rem 2rem;
          text-align: center;
          border-radius: 15px;
          background: white;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid #f1f5f9;
          transition: all 0.3s ease;
        }
        
        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 45px rgba(0, 0, 0, 0.12);
        }
        
        .contact-icon {
          font-size: 2.5rem;
          color: #1a936f;
          margin-bottom: 1.5rem;
        }
        
        .contact-card h5 {
          color: #0a3d62;
          margin-bottom: 1rem;
          font-weight: 700;
        }
        
        .contact-card p {
          color: #5a7a8c;
          margin: 0;
        }
        
        /* Responsive styles */
        @media (max-width: 1200px) {
          .hero-title {
            font-size: 3rem;
          }
          
          .section-title {
            font-size: 2.5rem;
          }
        }
        
        @media (max-width: 992px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .section-title {
            font-size: 2.2rem;
          }
          
          .tilapia-visual {
            margin-bottom: 4rem;
          }
          
          .fish-illustration {
            width: 250px;
            height: 250px;
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.2rem;
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
          }
          
          .section-title {
            font-size: 1.9rem;
          }
          
          .stat-number {
            font-size: 3rem;
          }
        }
        
        @media (max-width: 576px) {
          .hero-title {
            font-size: 1.9rem;
          }
          
          .section-title {
            font-size: 1.7rem;
          }
          
          .mission-card {
            padding: 2rem 1.5rem;
          }
          
          .feature {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }
          
          .contact-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;