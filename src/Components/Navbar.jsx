import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown, Modal } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaHome, FaInfoCircle, FaProjectDiagram, 
  FaEnvelope, FaImages, FaFish, FaPiggyBank, FaLeaf 
} from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showInitiativeModal, setShowInitiativeModal] = useState(false);
  const [currentInitiative, setCurrentInitiative] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
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

  // Initiative details
  const initiativeDetails = {
    'fish-farming': {
      title: 'Sustainable Fish Farming',
      icon: <FaFish className="me-2" />,
      description: 'Our fish farming initiative empowers women through sustainable aquaculture practices. We provide training in pond construction, fish breeding, feeding techniques, and water quality management.',
      benefits: [
        'Increased household income and food security',
        'Training in modern aquaculture techniques',
        'Access to markets and distribution networks',
        'Environmental conservation through sustainable practices'
      ],
      impact: 'Over 120 women trained, producing 5 tons of fish annually'
    },
    'table-banking': {
      title: 'Community Table Banking',
      icon: <FaPiggyBank className="me-2" />,
      description: 'Our table banking program enables women to access financial services through a community-based savings and lending model. Members pool resources and provide microloans to each other.',
      benefits: [
        'Access to interest-free loans without collateral',
        'Financial literacy and business management training',
        'Community support and accountability systems',
        'Empowerment through collective decision-making'
      ],
      impact: '15 active groups with over $25,000 in collective savings'
    },
    conservation: {
      title: 'Environmental Conservation',
      icon: <FaLeaf className="me-2" />,
      description: 'Our conservation efforts focus on protecting local ecosystems while creating sustainable livelihoods. Activities include mangrove restoration, waste management, and sustainable agriculture.',
      benefits: [
        'Mangrove restoration along 5km of coastline',
        'Plastic waste recycling initiatives',
        'Training in sustainable farming practices',
        'Eco-tourism development projects'
      ],
      impact: '12,000 mangrove saplings planted, 8 tons of plastic recycled monthly'
    }
  };

  // Handle initiative click
  const handleInitiativeClick = (initiative) => {
    setCurrentInitiative(initiativeDetails[initiative]);
    setShowInitiativeModal(true);
    setExpanded(false);
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

  // UPDATED: Handle contact form submission with new backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const payload = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    };

    try {
      const response = await fetch("https://lito.pythonanywhere.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
        mode: "cors"
      });

      // Handle HTTP errors
      if (!response.ok) {
        let errorDetails = 'Server error';
        try {
          const errorData = await response.json();
          errorDetails = errorData.detail || errorData.message || JSON.stringify(errorData);
        } catch (e) {
          errorDetails = `Status: ${response.status} ${response.statusText}`;
        }
        throw new Error(`Request failed: ${errorDetails}`);
      }

      const data = await response.json();
      
      // Handle backend-specific success/error
      if (data.status === "success") {
        console.log('Form submission successful:', data);
        setFormSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Unknown server error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      
      let errorMessage = error.message;
      if (error.message.includes('Failed to fetch')) {
        errorMessage = 'Network error. Please check your internet connection.';
      } else if (error.message.includes('CORS')) {
        errorMessage = 'Security restriction. Please contact us directly.';
      }
      
      setSubmitError(
        <div>
          <p>{errorMessage}</p>
          <p className="mt-2">
            You can also contact us directly at{" "}
            <a href="mailto:contact@bukanimamatoto.org">contact@bukanimamatoto.org</a>
          </p>
        </div>
      );
    } finally {
      setIsSubmitting(false);
    }
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
                <FaInfoCircle className="me-1" /> About
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
                <NavDropdown.Item 
                  as="div"
                  className="dropdown-item"
                  onClick={() => handleInitiativeClick('fish-farming')}
                >
                  <div className="d-flex align-items-center">
                    <FaFish className="me-2" />
                    Fish Farming
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item 
                  as="div"
                  className="dropdown-item"
                  onClick={() => handleInitiativeClick('table-banking')}
                >
                  <div className="d-flex align-items-center">
                    <FaPiggyBank className="me-2" />
                    Table Banking
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item 
                  as="div"
                  className="dropdown-item"
                  onClick={() => handleInitiativeClick('conservation')}
                >
                  <div className="d-flex align-items-center">
                    <FaLeaf className="me-2" />
                    Conservation
                  </div>
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/gallery" className="nav-link">
                <FaImages className="me-1" /> Gallery
              </Nav.Link>
              
              <Nav.Link 
                className="nav-link contact-link" 
                onClick={handleContactClick}
              >
                <FaEnvelope className="me-1" /> Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Initiative Details Modal */}
      <Modal 
        show={showInitiativeModal} 
        onHide={() => setShowInitiativeModal(false)}
        centered
        size="lg"
        className="initiative-modal"
      >
        <Modal.Header className="position-relative bg-primary text-white">
          <Modal.Title className="d-flex align-items-center">
            {currentInitiative?.icon}
            {currentInitiative?.title}
          </Modal.Title>
          <button 
            type="button" 
            className="btn-close btn-close-white"
            onClick={() => setShowInitiativeModal(false)}
            aria-label="Close"
          ></button>
        </Modal.Header>
        <Modal.Body>
          {currentInitiative && (
            <div className="initiative-details">
              <div className="mb-4">
                <h5 className="text-primary mb-3">About This Initiative</h5>
                <p>{currentInitiative.description}</p>
              </div>
              
              <div className="mb-4">
                <h5 className="text-primary mb-3">Key Benefits</h5>
                <ul className="benefits-list">
                  {currentInitiative.benefits.map((benefit, index) => (
                    <li key={index} className="d-flex align-items-start mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="impact-highlight p-3 rounded bg-light">
                <h5 className="text-primary mb-2">Our Impact</h5>
                <p className="mb-0">{currentInitiative.impact}</p>
              </div>
              
              <div className="mt-4 text-center">
                <Link 
                  to={`/initiatives/${currentInitiative.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="btn btn-outline-primary"
                  onClick={() => setShowInitiativeModal(false)}
                >
                  Learn More About This Program
                </Link>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>

      {/* Contact Modal */}
      <Modal 
        show={showContact} 
        onHide={() => setShowContact(false)}
        centered
        className="contact-modal"
      >
        <Modal.Header className="position-relative">
          <Modal.Title>Contact Us</Modal.Title>
          <button 
            type="button" 
            className="btn-close close-btn"
            onClick={() => setShowContact(false)}
            aria-label="Close"
            disabled={isSubmitting}
          ></button>
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
                  <i className="bi bi-telephone me-3 text-primary"></i>
                  <div>
                    <h6>Call Us</h6>
                    <p>+254 719 632 902</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-envelope me-3 text-primary"></i>
                  <div>
                    <h6>Email Us</h6>
                    <p>contact@bukanimamatoto@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                
                {submitError && (
                  <div className="alert alert-danger mb-3">
                    {submitError}
                  </div>
                )}
                
                <button 
                  type="submit"
                  className="btn btn-primary w-100 submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-send me-2"></i> Send Message
                    </>
                  )}
                </button>
              </form>
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
          white-space: nowrap;
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
          cursor: pointer;
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
        
        .contact-modal .modal-content,
        .initiative-modal .modal-content {
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
          border: none;
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
        
        .initiative-details h5 {
          font-weight: 600;
          border-bottom: 2px solid #1a936f;
          padding-bottom: 8px;
          display: inline-block;
        }
        
        .benefits-list {
          list-style: none;
          padding-left: 0;
        }
        
        .benefits-list li {
          padding: 5px 0;
        }
        
        .impact-highlight {
          border-left: 4px solid #1a936f;
          background: rgba(26, 147, 111, 0.05) !important;
        }
        
        .spinner-border {
          display: inline-block;
          width: 1rem;
          height: 1rem;
          vertical-align: text-bottom;
          border: 0.15em solid currentColor;
          border-right-color: transparent;
          border-radius: 50%;
          animation: spinner-border 0.75s linear infinite;
        }
        
        @keyframes spinner-border {
          to { transform: rotate(360deg); }
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