// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, Button, Modal } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaHome, FaInfoCircle, FaProjectDiagram, 
  FaEnvelope, FaPhone, FaTimes, FaPaperPlane,
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin
} from 'react-icons/fa';
import logo from '../assets/logo.png'; // Import your logo

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const location = useLocation();

  // Close navbar when route changes
  useEffect(() => {
    setExpanded(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle contact form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => {
      setFormSubmitted(false);
      setShowContact(false);
    }, 3000);
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle contact link click
  const handleContactClick = () => {
    setShowContact(true);
    setExpanded(false);
  };

  return (
    <>
      {/* Modern Navbar */}
      <Navbar 
        expand="lg" 
        bg="dark" 
        variant="dark" 
        sticky="top" 
        className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      >
        <Container fluid className="px-4">
          <Navbar.Brand as={Link} to="/" className="fw-bold d-flex align-items-center">
            <div className="brand-logo">
              <img 
                src={logo} 
                alt="BUKANI MAMA TOTO Logo" 
                className="logo-image"
              />
              <div className="wave-effect"></div>
            </div>
            <div className="brand-text ms-3">
              <div className="brand-title">BUKANI MAMA TOTO</div>
              <div className="brand-subtitle">Empowering Women • Blue Economy</div>
            </div>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="main-nav" className="border-0">
            <div className={`hamburger ${expanded ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Navbar.Toggle>
          
          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto align-items-lg-center">
              <Nav.Link as={Link} to="/" className="nav-link">
                <FaHome className="me-1" /> Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-link">
                <FaInfoCircle className="me-1" /> About Us
              </Nav.Link>
              
              <NavDropdown 
                title={
                  <span>
                    <FaProjectDiagram className="me-1" /> Initiatives
                  </span>
                } 
                id="nav-initiatives"
                className="nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/initiatives/fish-farming" className="dropdown-item">
                  Fish Cage Farming
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/initiatives/table-banking" className="dropdown-item">
                  Table Banking
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/initiatives/conservation" className="dropdown-item">
                  Conservation
                </NavDropdown.Item>
              </NavDropdown>
              
              <Nav.Link 
                className="nav-link contact-link" 
                onClick={handleContactClick}
              >
                <FaEnvelope className="me-1" /> Contact
              </Nav.Link>
              
              <div className="d-lg-none mt-3">
                <div className="social-icons d-flex justify-content-center gap-3">
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
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Contact Modal */}
      <Modal 
        show={showContact} 
        onHide={() => setShowContact(false)}
        centered
        className="contact-modal"
      >
        <Modal.Header className="position-relative">
          <Modal.Title>Contact Us</Modal.Title>
          <Button 
            variant="link" 
            onClick={() => setShowContact(false)}
            className="close-btn"
          >
            <FaTimes />
          </Button>
        </Modal.Header>
        <Modal.Body>
          {formSubmitted ? (
            <div className="alert alert-success text-center">
              <h4 className="text-success">Thank You!</h4>
              <p>Your message has been sent successfully.</p>
              <p>We'll contact you soon.</p>
            </div>
          ) : (
            <div>
              <div className="contact-info mb-4">
                <div className="d-flex align-items-center mb-3">
                  <FaPhone className="me-3 text-primary" />
                  <div>
                    <h6>Call Us</h6>
                    <p>+254 719 632 902</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <FaEnvelope className="me-3 text-primary" />
                  <div>
                    <h6>Email Us</h6>
                    <p>contact@bukanimamatoto.org</p>
                  </div>
                </div>
              </div>
              
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    required
                  />
                </Form.Group>
                
                <Button 
                  variant="primary" 
                  type="submit"
                  className="w-100 submit-btn"
                >
                  <FaPaperPlane className="me-2" /> Send Message
                </Button>
              </Form>
            </div>
          )}
        </Modal.Body>
      </Modal>

      {/* Custom CSS */}
      <style jsx>{`
        .custom-navbar {
          background: linear-gradient(135deg, #0a1929 0%, #1a2a3a 100%);
          padding: 0.8rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .custom-navbar.scrolled {
          padding: 0.5rem 0;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
          background: rgba(10, 25, 41, 0.95);
          backdrop-filter: blur(10px);
        }
        
        .brand-logo {
          position: relative;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        
        .logo-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          z-index: 2;
          position: relative;
        }
        
        .wave-effect {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 30%;
          background: rgba(26, 147, 111, 0.3);
          border-radius: 50% 50% 0 0;
          animation: wave 6s linear infinite;
        }
        
        .brand-text {
          line-height: 1.2;
        }
        
        .brand-title {
          font-size: 1.2rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          background: linear-gradient(to right, #88d498, #1a936f);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .brand-subtitle {
          font-size: 0.65rem;
          opacity: 0.8;
          letter-spacing: 0.5px;
          color: #88d498;
        }
        
        .nav-link {
          position: relative;
          padding: 1rem 1.2rem !important;
          font-weight: 500;
          transition: all 0.3s ease;
          color: rgba(255, 255, 255, 0.85) !important;
        }
        
        .nav-link:not(.contact-link):hover {
          color: #88d498 !important;
        }
        
        .nav-link:not(.contact-link)::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: #88d498;
          transition: width 0.3s ease;
        }
        
        .nav-link:not(.contact-link):hover::after {
          width: 70%;
        }
        
        .contact-link {
          background: linear-gradient(135deg, #1a936f, #88d498);
          border-radius: 50px;
          margin: 0 0.5rem;
          padding: 0.5rem 1.5rem !important;
          transition: all 0.3s ease;
          font-weight: 600;
          color: white !important;
        }
        
        .contact-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(26, 147, 111, 0.4);
          background: linear-gradient(135deg, #88d498, #1a936f);
        }
        
        .nav-dropdown .dropdown-toggle::after {
          vertical-align: middle;
        }
        
        .dropdown-item {
          transition: all 0.3s ease;
          padding: 0.75rem 1.5rem;
        }
        
        .dropdown-item:hover {
          background: #1a936f;
          color: white !important;
          padding-left: 1.75rem;
        }
        
        .hamburger {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 30px;
          height: 21px;
          cursor: pointer;
        }
        
        .hamburger span {
          display: block;
          height: 3px;
          width: 100%;
          background: white;
          border-radius: 3px;
          transition: all 0.3s ease;
        }
        
        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        
        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        
        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -7px);
        }
        
        .social-icons {
          margin-top: 1rem;
        }
        
        .social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          background: #1a936f;
          transform: translateY(-3px);
        }
        
        .contact-modal .modal-content {
          border-radius: 15px;
          overflow: hidden;
          border: none;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }
        
        .modal-header {
          background: linear-gradient(135deg, #0a3d62, #1a2a3a);
          color: white;
          border: none;
          padding: 1.5rem;
        }
        
        .modal-title {
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        
        .close-btn {
          position: absolute;
          top: 15px;
          right: 15px;
          color: white;
          opacity: 0.7;
          transition: opacity 0.3s ease;
          font-size: 1.5rem;
          padding: 0;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
        }
        
        .close-btn:hover {
          opacity: 1;
          background: rgba(255, 255, 255, 0.2);
        }
        
        .contact-info {
          padding: 20px;
          background: rgba(26, 147, 111, 0.1);
          border-radius: 10px;
          margin-bottom: 1.5rem;
        }
        
        .contact-info h6 {
          color: #0a3d62;
          font-weight: 600;
          margin-bottom: 5px;
        }
        
        .submit-btn {
          background: linear-gradient(135deg, #1a936f, #88d498);
          border: none;
          padding: 12px;
          font-weight: 600;
          border-radius: 50px;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
        }
        
        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(26, 147, 111, 0.4);
          background: linear-gradient(135deg, #88d498, #1a936f);
        }
        
        @keyframes wave {
          0% { transform: translateX(-100%) rotate(0deg); }
          50% { transform: translateX(0%) rotate(10deg); }
          100% { transform: translateX(100%) rotate(0deg); }
        }
        
        /* Responsive styles */
        @media (max-width: 992px) {
          .custom-navbar {
            padding: 0.8rem 1rem;
          }
          
          .brand-title {
            font-size: 1.1rem;
          }
          
          .nav-link {
            padding: 0.8rem 1rem !important;
          }
          
          .contact-link {
            margin: 10px 0;
            display: inline-block;
            width: fit-content;
          }
        }
        
        @media (max-width: 768px) {
          .brand-logo {
            width: 50px;
            height: 50px;
          }
          
          .brand-title {
            font-size: 1rem;
          }
          
          .brand-subtitle {
            font-size: 0.6rem;
          }
          
          .nav-link {
            padding: 0.7rem 0.8rem !important;
          }
          
          .contact-link {
            padding: 0.5rem 1.2rem !important;
          }
        }
        
        @media (max-width: 576px) {
          .brand-logo {
            width: 45px;
            height: 45px;
          }
          
          .brand-text {
            margin-left: 10px !important;
          }
          
          .brand-title {
            font-size: 0.95rem;
          }
          
          .brand-subtitle {
            font-size: 0.55rem;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;