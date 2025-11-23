import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';

const JoinPage = () => {
  const navigate = useNavigate();

  return (
    <Container className="py-5">
      <Row>
        <Col lg={8} className="mx-auto">
          <h1 className="display-4 text-center mb-4">Join Our Community</h1>
          <p className="lead text-center mb-5">
            Become part of our movement to empower women in fishing communities
          </p>
          
          <Row>
            <Col md={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <h3 className="text-primary">Volunteer</h3>
                  <p>
                    Contribute your skills and time to support our initiatives
                  </p>
                  <ul className="list-unstyled text-start mb-4">
                    <li className="mb-2">• Community training programs</li>
                    <li className="mb-2">• Market development</li>
                    <li className="mb-2">• Sustainability projects</li>
                  </ul>
                  <button 
                    className="btn btn-outline-primary"
                    onClick={() => navigate('/about')}
                  >
                    Apply Now
                  </button>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <h3 className="text-success">Partner</h3>
                  <p>
                    Collaborate with us as a business or organization
                  </p>
                  <ul className="list-unstyled text-start mb-4">
                    <li className="mb-2">• Sustainable sourcing</li>
                    <li className="mb-2">• Corporate sponsorship</li>
                    <li className="mb-2">• Joint initiatives</li>
                  </ul>
                  <button 
                    className="btn btn-outline-success"
                    onClick={() => navigate('/about')}
                  >
                    Contact Us
                  </button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <div className="mt-5 p-4 bg-light rounded">
            <h3 className="text-center mb-4">Stay Connected</h3>
            <Row>
              <Col md={6} className="mb-3">
                <h5>Subscribe to our Newsletter</h5>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control 
                      type="email" 
                      placeholder="Your email address"
                      className="mb-2"
                    />
                    <button className="btn btn-primary w-100">Subscribe</button>
                  </Form.Group>
                </Form>
              </Col>
              <Col md={6}>
                <h5>Follow Our Journey</h5>
                <div className="d-flex gap-3 justify-content-center">
                  {['facebook', 'instagram', 'twitter', 'youtube'].map((platform) => (
                    <a 
                      key={platform} 
                      href="#" 
                      className="btn btn-outline-secondary"
                    >
                      <i className={`bi bi-${platform}`}></i>
                    </a>
                  ))}
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default JoinPage;