import React, { useState } from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import { 
  FaBullseye, FaEye, FaChartLine, FaUsers, 
  FaLeaf, FaHandshake, FaGraduationCap, 
  FaUsersCog, FaMoneyBillWave, FaShoppingCart
} from 'react-icons/fa';

const About = () => {
  const [activeAccordion, setActiveAccordion] = useState('0');
  
  const toggleAccordion = (key) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h1 className="hero-title">Empowering Women Through Sustainable Aquaculture</h1>
              <p className="hero-subtitle">
                Transforming lives along Lake Victoria with innovative fish farming and financial solutions
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-5 mission-vision-section">
        <Container>
          <h2 className="text-center mb-5 section-title">Our Purpose</h2>
          
          <Row className="g-4">
            <Col md={6}>
              <Card className="mission-card h-100">
                <div className="card-icon">
                  <FaBullseye />
                </div>
                <Card.Body>
                  <Card.Title className="card-title">Our Mission</Card.Title>
                  <Card.Text>
                    Empowering vulnerable women, especially widows, through sustainable fish cage farming and innovative financial solutions to foster economic independence and promote the Blue Economy along Lake Victoria.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6}>
              <Card className="vision-card h-100">
                <div className="card-icon">
                  <FaEye />
                </div>
                <Card.Body>
                  <Card.Title className="card-title">Our Vision</Card.Title>
                  <Card.Text>
                    A thriving community of resilient women leading in sustainable aquaculture and blue economy initiatives, ensuring food security, poverty reduction, and gender equality along Lake Victoria.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Objectives */}
      <section className="py-5 objectives-section">
        <Container>
          <h2 className="text-center mb-5 section-title">Our Key Objectives</h2>
          
          <Row className="g-4">
            <Col lg={3} md={6}>
              <div className={`objective-card ${activeAccordion === '0' ? 'active' : ''}`} onClick={() => toggleAccordion('0')}>
                <div className="objective-icon">
                  <FaChartLine />
                </div>
                <h5 className="objective-title">Sustainable Fish Farming</h5>
                <div className={`objective-content ${activeAccordion === '0' ? 'show' : ''}`}>
                  Support women in adopting environmentally friendly aquaculture practices to increase fish production and income.
                </div>
              </div>
            </Col>
            
            <Col lg={3} md={6}>
              <div className={`objective-card ${activeAccordion === '1' ? 'active' : ''}`} onClick={() => toggleAccordion('1')}>
                <div className="objective-icon">
                  <FaMoneyBillWave />
                </div>
                <h5 className="objective-title">Financial Inclusion</h5>
                <div className={`objective-content ${activeAccordion === '1' ? 'show' : ''}`}>
                  Facilitate table banking and microfinance opportunities to empower women financially and foster entrepreneurship.
                </div>
              </div>
            </Col>
            
            <Col lg={3} md={6}>
              <div className={`objective-card ${activeAccordion === '2' ? 'active' : ''}`} onClick={() => toggleAccordion('2')}>
                <div className="objective-icon">
                  <FaGraduationCap />
                </div>
                <h5 className="objective-title">Capacity Building</h5>
                <div className={`objective-content ${activeAccordion === '2' ? 'show' : ''}`}>
                  Provide training and skills development in aquaculture, business management, and leadership tailored for vulnerable women.
                </div>
              </div>
            </Col>
            
            <Col lg={3} md={6}>
              <div className={`objective-card ${activeAccordion === '3' ? 'active' : ''}`} onClick={() => toggleAccordion('3')}>
                <div className="objective-icon">
                  <FaLeaf />
                </div>
                <h5 className="objective-title">Ecosystem Conservation</h5>
                <div className={`objective-content ${activeAccordion === '3' ? 'show' : ''}`}>
                  Encourage sustainable practices that protect the lake's biodiversity and promote environmental stewardship.
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Activities */}
      <section className="py-5 activities-section">
        <Container>
          <h2 className="text-center mb-5 section-title">Our Activities</h2>
          
          <Row className="g-4">
            <Col md={4}>
              <Card className="activity-card shadow-sm h-100">
                <div className="activity-icon">
                  <FaGraduationCap />
                </div>
                <Card.Body>
                  <Card.Title>Training Workshops</Card.Title>
                  <Card.Text>
                    Conduct training on sustainable fish cage farming, environmental conservation, and financial management.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4}>
              <Card className="activity-card shadow-sm h-100">
                <div className="activity-icon">
                  <FaUsers />
                </div>
                <Card.Body>
                  <Card.Title>Group Formation</Card.Title>
                  <Card.Text>
                    Form and support women-led fish farming groups with necessary equipment and inputs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4}>
              <Card className="activity-card shadow-sm h-100">
                <div className="activity-icon">
                  <FaShoppingCart />
                </div>
                <Card.Body>
                  <Card.Title>Market & Finance</Card.Title>
                  <Card.Text>
                    Establish table banking schemes, microfinance support, and facilitate market access with value addition.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-5 stats-section">
        <Container>
          <Row className="g-4 text-center">
            <Col md={3} sm={6}>
              <div className="stat-card">
                <div className="stat-value">250+</div>
                <div className="stat-label">Women Empowered</div>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="stat-card">
                <div className="stat-value">15</div>
                <div className="stat-label">Farming Groups</div>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="stat-card">
                <div className="stat-value">50K+</div>
                <div className="stat-label">Fish Harvested</div>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="stat-card">
                <div className="stat-value">100%</div>
                <div className="stat-label">Sustainable Practices</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-5 cta-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2 className="cta-title">Join Our Movement</h2>
              <p className="cta-text">
                Support our mission to empower women and transform communities through sustainable aquaculture.
              </p>
              <div className="cta-buttons">
                <button className="btn btn-primary">Donate Now</button>
                <button className="btn btn-outline-light">Partner With Us</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <style jsx>{`
        .about-page {
          overflow-x: hidden;
        }
        
        /* Hero Section */
        .about-hero {
          position: relative;
          background: linear-gradient(rgba(0, 50, 80, 0.7), url('https://images.unsplash.com/photo-1593111774240-d529f12e5c4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80');
          background-size: cover;
          background-position: center;
          padding: 120px 0 100px;
          color: white;
          text-align: center;
        }
        
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(0, 90, 120, 0.8) 0%, rgba(0, 50, 80, 0.9) 100%);
        }
        
        .hero-title {
          font-size: 2.8rem;
          font-weight: 700;
          margin-bottom: 20px;
          position: relative;
          z-index: 2;
          text-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }
        
        .hero-subtitle {
          font-size: 1.4rem;
          max-width: 700px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        
        /* Section Titles */
        .section-title {
          font-size: 2.2rem;
          font-weight: 700;
          position: relative;
          padding-bottom: 15px;
          color: #0a3d62;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #1a936f, #88d498);
          border-radius: 2px;
        }
        
        /* Mission & Vision Cards */
        .mission-card, .vision-card {
          border: none;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          background: white;
        }
        
        .mission-card:hover, .vision-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .card-icon {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin: -40px auto 20px;
          font-size: 2rem;
          position: relative;
          z-index: 2;
        }
        
        .mission-card .card-icon {
          background: linear-gradient(135deg, #1a936f, #88d498);
          color: white;
          box-shadow: 0 5px 15px rgba(26, 147, 111, 0.4);
        }
        
        .vision-card .card-icon {
          background: linear-gradient(135deg, #0a3d62, #1e88e5);
          color: white;
          box-shadow: 0 5px 15px rgba(10, 61, 98, 0.4);
        }
        
        .card-title {
          font-size: 1.6rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 20px;
          color: #0a3d62;
        }
        
        /* Objectives Section */
        .objectives-section {
          background-color: #f8f9fa;
        }
        
        .objective-card {
          background: white;
          border-radius: 15px;
          padding: 25px 20px;
          text-align: center;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
          cursor: pointer;
          transition: all 0.3s ease;
          height: 100%;
          border: 2px solid transparent;
        }
        
        .objective-card:hover, .objective-card.active {
          border-color: #1a936f;
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
        
        .objective-icon {
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin: 0 auto 20px;
          font-size: 1.8rem;
          background: linear-gradient(135deg, #1a936f, #88d498);
          color: white;
        }
        
        .objective-title {
          font-weight: 700;
          margin-bottom: 15px;
          color: #0a3d62;
        }
        
        .objective-content {
          color: #555;
          font-size: 0.95rem;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }
        
        .objective-content.show {
          max-height: 200px;
        }
        
        /* Activities Section */
        .activity-card {
          border: none;
          border-radius: 15px;
          overflow: hidden;
          transition: transform 0.3s ease;
          background: white;
        }
        
        .activity-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
        }
        
        .activity-icon {
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin: -35px auto 20px;
          font-size: 1.8rem;
          background: linear-gradient(135deg, #0a3d62, #1e88e5);
          color: white;
          box-shadow: 0 5px 15px rgba(10, 61, 98, 0.3);
        }
        
        /* Stats Section */
        .stats-section {
          background: linear-gradient(135deg, #0a3d62, #1a936f);
          color: white;
        }
        
        .stat-card {
          padding: 30px 20px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: transform 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.15);
        }
        
        .stat-value {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 10px;
        }
        
        .stat-label {
          font-size: 1.1rem;
          opacity: 0.9;
        }
        
        /* CTA Section */
        .cta-section {
          background: linear-gradient(rgba(0, 50, 80, 0.8), rgba(0, 50, 80, 0.8)), url('https://images.unsplash.com/photo-1516724562728-afc824a36e84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80');
          background-size: cover;
          background-position: center;
          color: white;
          text-align: center;
          padding: 80px 0;
        }
        
        .cta-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 20px;
        }
        
        .cta-text {
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto 30px;
          opacity: 0.9;
        }
        
        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #1a936f, #88d498);
          border: none;
          padding: 12px 30px;
          font-weight: 600;
          border-radius: 50px;
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(26, 147, 111, 0.4);
        }
        
        .btn-outline-light {
          border: 2px solid white;
          padding: 10px 28px;
          font-weight: 600;
          border-radius: 50px;
          transition: all 0.3s ease;
        }
        
        .btn-outline-light:hover {
          background: white;
          color: #0a3d62;
          transform: translateY(-3px);
        }
        
        /* Responsive styles */
        @media (max-width: 992px) {
          .hero-title {
            font-size: 2.3rem;
          }
          
          .section-title {
            font-size: 1.9rem;
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
          }
          
          .section-title {
            font-size: 1.7rem;
          }
          
          .card-title {
            font-size: 1.4rem;
          }
        }
        
        @media (max-width: 576px) {
          .hero-title {
            font-size: 1.8rem;
          }
          
          .cta-title {
            font-size: 2rem;
          }
          
          .cta-buttons {
            flex-direction: column;
            gap: 10px;
          }
          
          .cta-buttons .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default About;