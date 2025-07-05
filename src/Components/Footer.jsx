// src/components/Footer.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { 
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane 
} from 'react-icons/fa';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset submission status after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };
  
  // Show/hide back to top button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <footer className="footer">
      <Container>
        <Row className="gy-5">
          {/* Contact Form Column */}
          <Col lg={4} md={6}>
            <div className="footer-widget">
              <h4 className="footer-title">Send Us a Message</h4>
              {submitted ? (
                <div className="alert alert-success">
                  Thank you! Your message has been sent successfully.
                </div>
              ) : (
                <Form onSubmit={handleSubmit} className="contact-form">
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="form-input"
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      required
                      className="form-input"
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      required
                      className="form-input"
                    />
                  </Form.Group>
                  
                  <Button 
                    variant="primary" 
                    type="submit"
                    className="submit-btn"
                  >
                    <FaPaperPlane className="me-2" /> Send Message
                  </Button>
                </Form>
              )}
            </div>
          </Col>
          
          {/* Mission & Vision */}
          <Col lg={4} md={6}>
            <div className="footer-widget">
              <h4 className="footer-title">Our Purpose</h4>
              <div className="mission-vision">
                <h5 className="mission-title">Mission</h5>
                <p className="mission-text">
                  Empowering vulnerable women, especially widows, through sustainable fish cage farming and innovative financial solutions to foster economic independence and promote the Blue Economy along Lake Victoria.
                </p>
              </div>
              
              <div className="mission-vision">
                <h5 className="vision-title">Vision</h5>
                <p className="vision-text">
                  A thriving community of resilient women leading in sustainable aquaculture and blue economy initiatives, ensuring food security, poverty reduction, and gender equality along Lake Victoria.
                </p>
              </div>
            </div>
          </Col>
          
          {/* Contact Info & Social Links */}
          <Col lg={4} md={12}>
            <div className="footer-widget">
              <h4 className="footer-title">Contact Information</h4>
              
              <div className="contact-info">
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <div>
                    <h6>Our Location</h6>
                    <p>Lake Victoria Shoreline,Budalangi constituency, Busia, Kenya</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <div>
                    <h6>Email Us</h6>
                    <p>contact@bukanimamatoto@gmail.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <div>
                    <h6>Call Us</h6>
                    <p>+254 719 632 902</p>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <h5 className="social-title">Connect With Us</h5>
                <div className="social-icons">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaFacebook />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaTwitter />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaInstagram />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaLinkedin />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        
        <div className="footer-divider"></div>
        
        <Row className="footer-bottom">
          <Col md={6}>
            <p className="copyright">&copy; {new Date().getFullYear()} BUKANI MAMA TOTO WOMEN GROUP. All Rights Reserved.</p>
          </Col>
          <Col md={6} className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
            <a href="#contact">Contact Us</a>
          </Col>
        </Row>
      </Container>
      
      {/* Floating back to top button */}
      <button 
        className={`back-to-top ${isVisible ? 'show' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
      
      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #0a1929 0%, #1a2a3a 100%);
          color: #fff;
          padding: 70px 0 30px;
          position: relative;
          overflow: hidden;
        }
        
        .footer::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23006d77" fill-opacity="0.1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,197.3C672,192,768,160,864,154.7C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
          background-size: cover;
          background-position: bottom;
          opacity: 0.3;
        }
        
        .footer-widget {
          position: relative;
          z-index: 2;
        }
        
        .footer-title {
          color: #20c997;
          position: relative;
          padding-bottom: 15px;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-bottom: 25px;
        }
        
        .footer-title::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 3px;
          background: linear-gradient(90deg, #0d6efd, #20c997);
        }
        
        .mission-vision {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 20px;
          margin-bottom: 25px;
          transition: all 0.3s ease;
        }
        
        .mission-vision:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        
        .mission-title {
          color: #20c997;
          font-size: 1.2rem;
          margin-bottom: 10px;
        }
        
        .vision-title {
          color: #0dcaf0;
          font-size: 1.2rem;
          margin-bottom: 10px;
        }
        
        .mission-text, .vision-text {
          font-size: 0.95rem;
          margin-bottom: 0;
          line-height: 1.6;
        }
        
        .contact-info {
          margin-bottom: 30px;
        }
        
        .contact-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 20px;
        }
        
        .contact-icon {
          color: #0dcaf0;
          font-size: 1.2rem;
          margin-right: 15px;
          min-width: 20px;
        }
        
        .contact-item h6 {
          color: #20c997;
          font-weight: 600;
          margin-bottom: 5px;
        }
        
        .contact-item p {
          font-size: 0.95rem;
          margin-bottom: 0;
        }
        
        .social-links {
          margin-top: 30px;
        }
        
        .social-title {
          color: #0dcaf0;
          margin-bottom: 15px;
          font-size: 1.2rem;
        }
        
        .social-icons {
          display: flex;
          gap: 15px;
        }
        
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          background: #0d6efd;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(13, 110, 253, 0.4);
          text-decoration: none;
        }
        
        .contact-form .form-input {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          color: #fff;
          padding: 12px 15px;
          transition: all 0.3s ease;
        }
        
        .contact-form .form-input:focus {
          background: rgba(255, 255, 255, 0.08);
          border-color: #0d6efd;
          box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
          color: #fff;
        }
        
        .contact-form .form-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
        
        .submit-btn {
          background: linear-gradient(135deg, #2c9af1 0%, #1e62d0 100%);
          border: none;
          padding: 12px 25px;
          border-radius: 8px;
          font-weight: 600;
          width: 100%;
          transition: all 0.3s ease;
        }
        
        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 7px 20px rgba(0,0,0,0.3);
          background: linear-gradient(135deg, #3aa4fd 0%, #2a70e0 100%);
        }
        
        .footer-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
          margin: 40px 0 25px;
        }
        
        .footer-bottom {
          padding-top: 20px;
        }
        
        .copyright {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 0;
        }
        
        .footer-links {
          display: flex;
          justify-content: flex-end;
          gap: 20px;
        }
        
        .footer-links a {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-links a:hover {
          color: #20c997;
        }
        
        .back-to-top {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #2c9af1 0%, #1e62d0 100%);
          color: white;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.3s ease;
          z-index: 1000;
          font-size: 1.2rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }
        
        .back-to-top.show {
          opacity: 1;
          transform: translateY(0);
        }
        
        .back-to-top:hover {
          background: linear-gradient(135deg, #3aa4fd 0%, #2a70e0 100%);
          transform: translateY(-3px);
          box-shadow: 0 7px 20px rgba(0,0,0,0.4);
        }
        
        .alert-success {
          background: rgba(25, 135, 84, 0.2);
          border: 1px solid rgba(25, 135, 84, 0.3);
          color: #d1e7dd;
          border-radius: 8px;
          padding: 15px;
        }
        
        /* Responsive styles */
        @media (max-width: 992px) {
          .footer-title {
            font-size: 1.4rem;
          }
          
          .mission-title, .vision-title, .social-title {
            font-size: 1.1rem;
          }
        }
        
        @media (max-width: 768px) {
          .footer {
            text-align: center;
          }
          
          .footer-title::after {
            left: 50%;
            transform: translateX(-50%);
          }
          
          .contact-item {
            justify-content: center;
            text-align: center;
          }
          
          .social-icons {
            justify-content: center;
          }
          
          .footer-links {
            justify-content: center;
            margin-top: 15px;
          }
          
          .contact-item {
            flex-direction: column;
            align-items: center;
          }
          
          .contact-icon {
            margin-right: 0;
            margin-bottom: 10px;
          }
        }
        
        @media (max-width: 576px) {
          .footer {
            padding: 50px 0 20px;
          }
          
          .footer-title {
            font-size: 1.3rem;
          }
          
          .mission-vision {
            padding: 15px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;