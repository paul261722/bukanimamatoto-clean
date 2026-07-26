import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { 
  FaBullseye, FaEye, FaChartLine, FaUsers, 
  FaLeaf, FaGraduationCap, FaMoneyBillWave, FaShoppingCart,
  FaWater, FaFish, FaHandHoldingWater, FaLightbulb,
  FaBook, FaLaptop, FaHandHoldingUsd, FaChartPie, FaShieldAlt,
  FaRocket, FaHandsHelping
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
              <div className="hero-content">
                <div className="water-reflection"></div>
                <h1 className="hero-title">Mama Toto Women Group</h1>
                <p className="hero-subtitle">
                  Empowering women through sustainable fish farming and the blue economy
                </p>
                <p className="hero-description">
                  A comprehensive initiative for women in fish cage farming and aquaculture technology
                </p>
                <div className="hero-icons">
                  <FaFish className="icon" />
                  <FaWater className="icon" />
                  <FaHandHoldingWater className="icon" />
                  <FaLightbulb className="icon" />
                </div>
              </div>
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
              <Card className="mission-card glass-card h-100">
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
              <Card className="vision-card glass-card h-100">
                <div className="card-icon">
                  <FaEye />
                </div>
                <Card.Body>
                  <Card.Title className="card-title">Our Vision</Card.Title>
                  <Card.Text>
                    A thriving community of resilient women leading in sustainable aquaculture and blue economy initiatives, ensuring food security, poverty reduction, and gender equality.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* The Problem & Our Solution */}
      <section className="py-5 problem-solution-section">
        <Container>
          <h2 className="text-center mb-5 section-title">Our Approach</h2>
          
          <Row className="g-4">
            <Col md={6}>
              <Card className="problem-card glass-card h-100">
                <div className="card-icon problem-icon">
                  <FaShieldAlt />
                </div>
                <Card.Body>
                  <Card.Title className="card-title">The Problem</Card.Title>
                  <ul className="problem-list">
                    <li>Limited access for women to participate in sustainable fisheries and aquaculture</li>
                    <li>Lack of access to modern aquaculture technology and training</li>
                    <li>Insufficient market access for women-led fish farming businesses</li>
                    <li>Environmental challenges affecting traditional fishing communities</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6}>
              <Card className="solution-card glass-card h-100">
                <div className="card-icon solution-icon">
                  <FaLightbulb />
                </div>
                <Card.Body>
                  <Card.Title className="card-title">Our Solution</Card.Title>
                  <ul className="solution-list">
                    <li>Equip women with modern fish cage farming techniques and aquaculture technology</li>
                    <li>Provide training on sustainable fish farming practices</li>
                    <li>Facilitate access to markets and microfinance for women entrepreneurs</li>
                    <li>Promote women's active participation in the blue economy</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Objectives */}
      <section className="py-5 objectives-section">
        <div className="wave-divider"></div>
        <Container>
          <h2 className="text-center mb-5 section-title">Our Key Objectives</h2>
          
          <Row className="g-4">
            <Col lg={3} md={6}>
              <div className={`objective-card glass-card ${activeAccordion === '0' ? 'active' : ''}`} onClick={() => toggleAccordion('0')}>
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
              <div className={`objective-card glass-card ${activeAccordion === '1' ? 'active' : ''}`} onClick={() => toggleAccordion('1')}>
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
              <div className={`objective-card glass-card ${activeAccordion === '2' ? 'active' : ''}`} onClick={() => toggleAccordion('2')}>
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
              <div className={`objective-card glass-card ${activeAccordion === '3' ? 'active' : ''}`} onClick={() => toggleAccordion('3')}>
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
              <Card className="activity-card glass-card shadow-sm h-100">
                <div className="activity-icon">
                  <FaGraduationCap />
                </div>
                <Card.Body>
                  <Card.Title>Training & Capacity Building</Card.Title>
                  <Card.Text>
                    Conduct training on sustainable fish cage farming, environmental conservation, and financial management for women entrepreneurs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4}>
              <Card className="activity-card glass-card shadow-sm h-100">
                <div className="activity-icon">
                  <FaUsers />
                </div>
                <Card.Body>
                  <Card.Title>Group Formation & Support</Card.Title>
                  <Card.Text>
                    Form and support women-led fish farming groups with necessary equipment, inputs, and aquaculture technology tools.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4}>
              <Card className="activity-card glass-card shadow-sm h-100">
                <div className="activity-icon">
                  <FaShoppingCart />
                </div>
                <Card.Body>
                  <Card.Title>Market & Financial Access</Card.Title>
                  <Card.Text>
                    Establish table banking schemes, microfinance support, and facilitate market linkages with value addition for women entrepreneurs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-5 stats-section">
        <div className="wave-divider-bottom"></div>
        <Container>
          <Row className="g-4 text-center">
            <Col md={3} sm={6}>
              <div className="stat-card glass-card">
                <div className="stat-value">50+</div>
                <div className="stat-label">Women Trained</div>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="stat-card glass-card">
                <div className="stat-value">5</div>
                <div className="stat-label">Fish Cages Installed</div>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="stat-card glass-card">
                <div className="stat-value">2M+</div>
                <div className="stat-label">Revenue Generated (KES)</div>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="stat-card glass-card">
                <div className="stat-value">500+</div>
                <div className="stat-label">Target Women Beneficiaries</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Funding & Future Plans */}
      <section className="py-5 funding-section">
        <Container>
          <h2 className="text-center mb-5 section-title">Funding & Future Plans</h2>
          
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="funding-card glass-card p-5">
                <div className="funding-icon">
                  <FaRocket />
                </div>
                <h3 className="funding-amount">Seeking KES 5,000,000</h3>
                <p className="funding-description">
                  To expand training, purchase aquaculture equipment, and scale market access for women-led fish farming enterprises.
                </p>
                <Row className="g-4 mt-3">
                  <Col md={4}>
                    <div className="funding-use">
                      <div className="use-icon"><FaGraduationCap /></div>
                      <h5>Expand Training</h5>
                      <p>Reach more women with advanced aquaculture and business skills.</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="funding-use">
                      <div className="use-icon"><FaLaptop /></div>
                      <h5>Advanced Technology</h5>
                      <p>Introduce modern aquaculture equipment and digital tools.</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="funding-use">
                      <div className="use-icon"><FaHandsHelping /></div>
                      <h5>Market & Microfinance</h5>
                      <p>Strengthen market linkages and microfinance services for women.</p>
                    </div>
                  </Col>
                </Row>
                <div className="funding-outcomes mt-4">
                  <h5>Projected Outcomes:</h5>
                  <ul>
                    <li>Increased number of women-led fish farms</li>
                    <li>Higher income and improved livelihoods</li>
                    <li>Greater community resilience and food security</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Capacity Building Section */}
      <section className="py-5 capacity-section">
        <Container>
          <h2 className="text-center mb-5 section-title">Capacity Building Programs</h2>
          
          <Row className="justify-content-center mb-5">
            <Col lg={10}>
              <div className="capacity-intro glass-card p-4 rounded-4 mb-5">
                <p className="text-center fs-5">
                  Our comprehensive training programs equip women with the knowledge and skills needed to excel in aquaculture and business management.
                </p>
              </div>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col md={4}>
              <Card className="program-card glass-card h-100">
                <div className="program-icon">
                  <FaBook />
                </div>
                <Card.Body>
                  <Card.Title>Technical Aquaculture Training</Card.Title>
                  <ul className="program-list">
                    <li>Fish cage construction and maintenance</li>
                    <li>Fish feeding and nutrition management</li>
                    <li>Disease prevention and control</li>
                    <li>Water quality monitoring</li>
                    <li>Harvesting and post-harvest techniques</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4}>
              <Card className="program-card glass-card h-100">
                <div className="program-icon">
                  <FaLaptop />
                </div>
                <Card.Body>
                  <Card.Title>Business & Financial Literacy</Card.Title>
                  <ul className="program-list">
                    <li>Record keeping and financial management</li>
                    <li>Business planning and strategy</li>
                    <li>Market analysis and access</li>
                    <li>Value addition and product development</li>
                    <li>Digital literacy for business</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4}>
              <Card className="program-card glass-card h-100">
                <div className="program-icon">
                  <FaShieldAlt />
                </div>
                <Card.Body>
                  <Card.Title>Leadership & Sustainability</Card.Title>
                  <ul className="program-list">
                    <li>Leadership and group dynamics</li>
                    <li>Environmental conservation practices</li>
                    <li>Climate change adaptation strategies</li>
                    <li>Resource management</li>
                    <li>Community engagement</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Financial Inclusion Section */}
      <section className="py-5 finance-section">
        <Container>
          <h2 className="text-center mb-5 section-title">Financial Inclusion Initiatives</h2>
          
          <Row className="justify-content-center mb-5">
            <Col lg={10}>
              <div className="finance-intro glass-card p-4 rounded-4 mb-5">
                <p className="text-center fs-5">
                  We provide financial tools and services to help women build sustainable livelihoods and achieve economic independence.
                </p>
              </div>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col lg={4}>
              <Card className="finance-card glass-card h-100">
                <div className="finance-icon">
                  <FaHandHoldingUsd />
                </div>
                <Card.Body>
                  <Card.Title>Table Banking System</Card.Title>
                  <Card.Text>
                    Our innovative table banking model enables women to pool resources and access small loans for:
                  </Card.Text>
                  <ul className="finance-list">
                    <li>Fish farming inputs and equipment</li>
                    <li>Business expansion</li>
                    <li>Emergency needs</li>
                    <li>Education and healthcare</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4}>
              <Card className="finance-card glass-card h-100">
                <div className="finance-icon">
                  <FaChartPie />
                </div>
                <Card.Body>
                  <Card.Title>Microfinance Partnerships</Card.Title>
                  <Card.Text>
                    We connect women with microfinance institutions for:
                  </Card.Text>
                  <ul className="finance-list">
                    <li>Low-interest startup loans</li>
                    <li>Asset financing for cage equipment</li>
                    <li>Savings programs with competitive returns</li>
                    <li>Insurance products for aquaculture</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4}>
              <Card className="finance-card glass-card h-100">
                <div className="finance-icon">
                  <FaMoneyBillWave />
                </div>
                <Card.Body>
                  <Card.Title>Income Diversification</Card.Title>
                  <Card.Text>
                    We support women in developing complementary income streams:
                  </Card.Text>
                  <ul className="finance-list">
                    <li>Fish processing and value addition</li>
                    <li>Aquaponics vegetable farming</li>
                    <li>Fish feed production businesses</li>
                    <li>Eco-tourism initiatives</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-5 cta-section">
        <Container>
          <div className="cta-card glass-card p-5 text-center">
            <h2 className="cta-title">Join Us in Empowering Women</h2>
            <p className="cta-text">
              Support our mission to build resilient women-led aquaculture enterprises and promote a sustainable and inclusive blue economy.
            </p>
            <div className="cta-contacts">
              <p><strong>Email:</strong> bukanimamatotowomengroup@gmail.com</p>
              <p><strong>Phone:</strong> 0719632902</p>
              <p><strong>Website:</strong> <a href="https://github.com/paul261722/bukanimamatoto-clean" target="_blank" rel="noopener noreferrer">https://github.com/paul261722/bukanimamatoto-clean</a></p>
            </div>
          </div>
        </Container>
      </section>

      <style jsx>{`
        .about-page {
          overflow-x: hidden;
          background: linear-gradient(135deg, #0a1a2a 0%, #0a3d62 100%);
          color: #f0f8ff;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        /* Hero Section */
        .about-hero {
          position: relative;
          background: linear-gradient(rgba(0, 20, 40, 0.85), rgba(0, 20, 40, 0.85)), 
                      url('https://images.unsplash.com/photo-1593111774240-d529f12e5c4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          padding: 150px 0 120px;
          text-align: center;
          overflow: hidden;
        }
        
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(10, 61, 98, 0.7) 0%, rgba(5, 30, 50, 0.9) 100%);
          z-index: 1;
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          padding: 40px;
          border-radius: 20px;
          background: rgba(5, 30, 50, 0.3);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(100, 200, 255, 0.1);
        }
        
        .hero-title {
          font-size: 3.2rem;
          font-weight: 800;
          margin-bottom: 15px;
          position: relative;
          z-index: 2;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
          background: linear-gradient(90deg, #88d498, #64c8fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1.2;
        }
        
        .hero-subtitle {
          font-size: 1.5rem;
          max-width: 700px;
          margin: 0 auto 10px;
          position: relative;
          z-index: 2;
          color: #e0f7ff;
          font-weight: 300;
        }
        
        .hero-description {
          font-size: 1.2rem;
          color: #b0dfff;
          margin-bottom: 30px;
        }
        
        .hero-icons {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-top: 30px;
        }
        
        .hero-icons .icon {
          font-size: 2.5rem;
          color: #64c8fa;
          transition: all 0.3s ease;
          animation: float 3s ease-in-out infinite;
        }
        
        .hero-icons .icon:nth-child(1) { animation-delay: 0s; }
        .hero-icons .icon:nth-child(2) { animation-delay: 0.5s; }
        .hero-icons .icon:nth-child(3) { animation-delay: 1s; }
        .hero-icons .icon:nth-child(4) { animation-delay: 1.5s; }
        
        .water-reflection {
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 100%;
          height: 20px;
          background: linear-gradient(to bottom, rgba(100, 200, 255, 0.1), transparent);
          border-radius: 50%;
          filter: blur(5px);
          z-index: -1;
        }
        
        /* Glass Card Effect */
        .glass-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(100, 200, 255, 0.1);
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 20, 40, 0.3);
          transition: all 0.4s ease;
          color: #e0f7ff;
        }
        
        .glass-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 40px rgba(0, 100, 200, 0.4);
          border: 1px solid rgba(100, 200, 255, 0.3);
        }
        
        /* Section Titles */
        .section-title {
          font-size: 2.6rem;
          font-weight: 800;
          position: relative;
          padding-bottom: 20px;
          color: #88d498;
          text-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 5px;
          background: linear-gradient(90deg, #1a936f, #64c8fa);
          border-radius: 3px;
          box-shadow: 0 2px 10px rgba(26, 147, 111, 0.5);
        }
        
        /* Mission & Vision Cards */
        .mission-card .card-icon {
          background: linear-gradient(135deg, #1a936f, #88d498);
          box-shadow: 0 5px 15px rgba(26, 147, 111, 0.5);
        }
        
        .vision-card .card-icon {
          background: linear-gradient(135deg, #0a3d62, #64c8fa);
          box-shadow: 0 5px 15px rgba(10, 61, 98, 0.5);
        }
        
        .card-icon {
          width: 90px;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin: -45px auto 25px;
          font-size: 2.5rem;
          color: white;
          position: relative;
          z-index: 2;
        }
        
        .card-title {
          font-size: 1.8rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 25px;
          color: #64c8fa;
        }
        
        .card-text {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #ccefff;
        }
        
        /* Problem & Solution */
        .problem-solution-section {
          padding: 80px 0;
          background: linear-gradient(to bottom, #0a3d62, #0a1a2a);
        }
        
        .problem-card .problem-icon {
          background: linear-gradient(135deg, #d45c4a, #f7a08a);
        }
        
        .solution-card .solution-icon {
          background: linear-gradient(135deg, #1a936f, #64c8fa);
        }
        
        .problem-list, .solution-list {
          text-align: left;
          padding-left: 20px;
          font-size: 1.05rem;
          line-height: 1.8;
          color: #ccefff;
        }
        
        .problem-list li, .solution-list li {
          margin-bottom: 10px;
        }
        
        /* Objectives Section */
        .objectives-section {
          position: relative;
          padding: 100px 0;
          background: linear-gradient(to bottom, #0a1a2a, #0a3d62);
          overflow: hidden;
        }
        
        .wave-divider {
          position: absolute;
          top: -1px;
          left: 0;
          width: 100%;
          height: 100px;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%230a1a2a' fill-opacity='1' d='M0,128L48,117.3C96,107,192,85,288,96C384,107,480,149,576,149.3C672,149,768,107,864,96C960,85,1056,107,1152,117.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
          background-size: cover;
          background-position: center;
        }
        
        .objective-card {
          padding: 30px 25px;
          text-align: center;
          cursor: pointer;
          transition: all 0.4s ease;
          height: 100%;
          position: relative;
          overflow: hidden;
        }
        
        .objective-card:hover, .objective-card.active {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 50, 100, 0.4);
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(100, 200, 255, 0.2);
        }
        
        .objective-icon {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin: 0 auto 25px;
          font-size: 2rem;
          background: linear-gradient(135deg, #1a936f, #64c8fa);
          color: white;
          box-shadow: 0 5px 15px rgba(26, 147, 111, 0.4);
        }
        
        .objective-title {
          font-weight: 700;
          margin-bottom: 20px;
          color: #88d498;
          font-size: 1.4rem;
        }
        
        .objective-content {
          color: #ccefff;
          font-size: 1.05rem;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s ease;
          line-height: 1.6;
        }
        
        .objective-content.show {
          max-height: 200px;
        }
        
        /* Activities Section */
        .activities-section {
          padding: 100px 0;
          background: linear-gradient(to bottom, #0a3d62, #0a1a2a);
        }
        
        .activity-card {
          padding: 40px 25px 25px;
        }
        
        .activity-icon {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin: -40px auto 25px;
          font-size: 2rem;
          background: linear-gradient(135deg, #0a3d62, #64c8fa);
          color: white;
          box-shadow: 0 5px 15px rgba(10, 61, 98, 0.4);
        }
        
        .activity-card .card-title {
          color: #88d498;
          font-size: 1.6rem;
          margin-bottom: 20px;
        }
        
        /* Stats Section */
        .stats-section {
          position: relative;
          padding: 100px 0;
          background: linear-gradient(to bottom, #0a1a2a, #0a3d62);
        }
        
        .wave-divider-bottom {
          position: absolute;
          top: -1px;
          left: 0;
          width: 100%;
          height: 100px;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%230a3d62' fill-opacity='1' d='M0,128L48,117.3C96,107,192,85,288,96C384,107,480,149,576,149.3C672,149,768,107,864,96C960,85,1056,107,1152,117.3C1248,128,1344,128,1392,128L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'%3E%3C/path%3E%3C/svg%3E");
          background-size: cover;
          background-position: center;
        }
        
        .stat-card {
          padding: 40px 20px;
          border-radius: 15px;
          transition: transform 0.4s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-10px) scale(1.03);
          background: rgba(255, 255, 255, 0.12);
        }
        
        .stat-value {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 15px;
          background: linear-gradient(90deg, #88d498, #64c8fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .stat-label {
          font-size: 1.3rem;
          color: #ccefff;
          font-weight: 300;
        }
        
        /* Funding Section */
        .funding-section {
          padding: 100px 0;
          background: linear-gradient(to bottom, #0a3d62, #0a1a2a);
        }
        
        .funding-card {
          text-align: center;
          padding: 50px 40px;
        }
        
        .funding-icon {
          font-size: 4rem;
          color: #64c8fa;
          margin-bottom: 20px;
        }
        
        .funding-amount {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(90deg, #88d498, #64c8fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 20px;
        }
        
        .funding-description {
          font-size: 1.2rem;
          color: #ccefff;
          max-width: 700px;
          margin: 0 auto 30px;
        }
        
        .funding-use {
          padding: 20px;
          background: rgba(255,255,255,0.05);
          border-radius: 12px;
          border: 1px solid rgba(100,200,255,0.1);
        }
        
        .use-icon {
          font-size: 2.5rem;
          color: #88d498;
          margin-bottom: 10px;
        }
        
        .funding-use h5 {
          color: #64c8fa;
          margin-bottom: 10px;
        }
        
        .funding-use p {
          color: #ccefff;
          margin-bottom: 0;
        }
        
        .funding-outcomes {
          margin-top: 30px;
          padding: 20px;
          background: rgba(255,255,255,0.05);
          border-radius: 12px;
          border: 1px solid rgba(100,200,255,0.1);
        }
        
        .funding-outcomes h5 {
          color: #88d498;
          margin-bottom: 15px;
        }
        
        .funding-outcomes ul {
          list-style: none;
          padding: 0;
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }
        
        .funding-outcomes ul li {
          color: #ccefff;
          position: relative;
          padding-left: 25px;
        }
        
        .funding-outcomes ul li::before {
          content: '✓';
          color: #88d498;
          font-weight: bold;
          position: absolute;
          left: 0;
        }
        
        /* Capacity Building Section */
        .capacity-section {
          padding: 100px 0;
          background: linear-gradient(to bottom, #0a1a2a, #0a3d62);
        }
        
        .capacity-intro {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(100, 200, 255, 0.2);
          max-width: 800px;
          margin: 0 auto;
        }
        
        .program-card {
          padding: 30px 20px;
          text-align: center;
        }
        
        .program-icon {
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin: 0 auto 20px;
          font-size: 1.8rem;
          background: linear-gradient(135deg, #1a936f, #64c8fa);
          color: white;
          box-shadow: 0 5px 15px rgba(26, 147, 111, 0.4);
        }
        
        .program-card .card-title {
          font-size: 1.5rem;
          margin-bottom: 20px;
          color: #88d498;
        }
        
        .program-list {
          text-align: left;
          padding-left: 20px;
          margin-bottom: 0;
        }
        
        .program-list li {
          margin-bottom: 10px;
          color: #ccefff;
          position: relative;
        }
        
        .program-list li:before {
          content: '✓';
          color: #88d498;
          font-weight: bold;
          margin-right: 10px;
        }
        
        /* Financial Inclusion Section */
        .finance-section {
          padding: 100px 0;
          background: linear-gradient(to bottom, #0a3d62, #0a1a2a);
        }
        
        .finance-intro {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(100, 200, 255, 0.2);
          max-width: 800px;
          margin: 0 auto;
        }
        
        .finance-card {
          padding: 30px 20px;
        }
        
        .finance-icon {
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin: 0 auto 20px;
          font-size: 1.8rem;
          background: linear-gradient(135deg, #0a3d62, #64c8fa);
          color: white;
          box-shadow: 0 5px 15px rgba(10, 61, 98, 0.4);
        }
        
        .finance-card .card-title {
          font-size: 1.5rem;
          margin-bottom: 20px;
          color: #64c8fa;
        }
        
        .finance-list {
          padding-left: 20px;
        }
        
        .finance-list li {
          margin-bottom: 10px;
          color: #ccefff;
          position: relative;
        }
        
        .finance-list li:before {
          content: '•';
          color: #64c8fa;
          font-weight: bold;
          margin-right: 10px;
        }
        
        /* Call to Action */
        .cta-section {
          padding: 80px 0;
          background: linear-gradient(to bottom, #0a1a2a, #0a3d62);
        }
        
        .cta-card {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .cta-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #88d498;
          margin-bottom: 20px;
        }
        
        .cta-text {
          font-size: 1.2rem;
          color: #ccefff;
          margin-bottom: 30px;
        }
        
        .cta-contacts p {
          font-size: 1.1rem;
          color: #e0f7ff;
          margin-bottom: 10px;
        }
        
        .cta-contacts a {
          color: #64c8fa;
          text-decoration: none;
        }
        
        .cta-contacts a:hover {
          text-decoration: underline;
        }
        
        /* Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        /* Responsive styles */
        @media (max-width: 992px) {
          .hero-title {
            font-size: 2.6rem;
          }
          
          .section-title {
            font-size: 2.2rem;
          }
          
          .stat-value {
            font-size: 3rem;
          }
          
          .funding-amount {
            font-size: 2.5rem;
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
          
          .card-title {
            font-size: 1.5rem;
          }
          
          .stat-value {
            font-size: 2.5rem;
          }
          
          .funding-amount {
            font-size: 2rem;
          }
          
          .funding-outcomes ul {
            flex-direction: column;
            gap: 10px;
          }
        }
        
        @media (max-width: 576px) {
          .hero-title {
            font-size: 1.9rem;
          }
          
          .hero-content {
            padding: 20px;
          }
          
          .section-title {
            font-size: 1.7rem;
          }
        }
      `}</style>
    </div>
  );
};

export default About;