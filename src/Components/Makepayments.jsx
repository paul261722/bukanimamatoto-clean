import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Card, Form, Button, Alert, ProgressBar } from 'react-bootstrap';

const Makepayment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const { cartItems = [], totalAmount: totalAmountRaw = 0 } = location.state || {};
  const totalAmount = Number(totalAmountRaw);
  
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const payNow = async (e) => {
    e.preventDefault();
    
    if (!phone || phone.length !== 9 || isNaN(phone)) {
      setError('Please enter a valid 9-digit phone number (e.g., 712345678)');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Format phone number with 254 prefix
      const formattedPhone = `254${phone}`;
      
      // Create URL-encoded data
      const formData = new URLSearchParams();
      formData.append('amount', totalAmount);
      formData.append('phone', formattedPhone);

      const response = await axios.post(
        'https://sengi2025.pythonanywhere.com/api/mpesa_payment',
        formData.toString(),  // Send as string
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );

      // Handle successful response
      if (response.data.status === 'success') {
        setSuccess(response.data.message);
        
        // Redirect after delay
        setTimeout(() => {
          navigate('/order-confirmation', { 
            state: { 
              cartItems, 
              totalAmount,
              transactionId: response.data.checkoutRequestID || 'N/A',
              phone: formattedPhone
            }
          });
        }, 3000);
      } else {
        // Handle backend error messages
        throw new Error(response.data.message || 'Payment initiation failed');
      }
    } catch (err) {
      let errorMsg = 'Payment failed. Please try again later.';
      
      if (err.response) {
        // Handle backend error response
        if (err.response.data) {
          if (err.response.data.message) {
            errorMsg = err.response.data.message;
          } else if (err.response.data.error) {
            errorMsg = err.response.data.error;
          }
        }
        
        // Handle specific status codes
        if (err.response.status === 400) {
          errorMsg = 'Invalid request. Please check your input.';
        } else if (err.response.status >= 500) {
          errorMsg = 'Server error. Please try again later.';
        }
      } else if (err.message) {
        errorMsg = err.message;
      }
      
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  // ... rest of your component remains the same ...
  // Only the payNow function has been updated

  if (cartItems.length === 0) {
    return (
      <div style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.9), url('https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=2070&auto=format&fit=crop')",
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Container className="text-center py-5">
          <Card className="border-0 shadow-lg rounded-4 overflow-hidden" style={{ backdropFilter: "blur(10px)", backgroundColor: "rgba(255,255,255,0.85)" }}>
            <Card.Body className="p-5">
              <Alert variant="danger" className="border-0 bg-transparent shadow-none">
                <h2 className="fw-bold mb-3 text-danger">Your Cart is Empty</h2>
                <div className="mb-4">
                  <i className="bi bi-cart-x text-danger" style={{ fontSize: '4rem' }}></i>
                </div>
                <p className="mt-3 mb-4 fs-5">Please add some products to your cart first</p>
                <Button 
                  variant="primary" 
                  onClick={() => navigate('/shop')}
                  className="px-4 py-2 rounded-pill fw-bold gradient-btn"
                >
                  <i className="bi bi-arrow-left me-2"></i>Back to Shop
                </Button>
              </Alert>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }

  return (
    <div style={{
      backgroundImage: "linear-gradient(rgba(255,255,255,0.8), rgba(173, 216, 230, 0.4)), url('https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=2070&auto=format&fit=crop')",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      minHeight: "100vh",
      padding: "2rem 0"
    }}>
      <Container className="py-5">
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <div className="d-flex justify-content-between align-items-center glass-card p-4 rounded-4">
              <div>
                <h1 className="fw-bold text-primary mb-1 display-5">Secure Tilapia Payment</h1>
                <p className="text-muted fs-5">Complete your purchase with M-PESA</p>
              </div>
              <div className="text-end">
                <div className="badge bg-primary rounded-pill p-2 px-3 fs-6">
                  <i className="bi bi-lock-fill me-1"></i> Payment Secured
                </div>
                <div className="text-muted small mt-1">Bank-level encryption</div>
              </div>
            </div>
            
            <ProgressBar now={66} variant="primary" className="mb-5 rounded-pill" style={{ height: '12px', boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }} />
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="border-0 shadow-lg rounded-4 overflow-hidden glass-card">
              <Card.Header className="bg-gradient-primary text-white py-4" style={{ background: "linear-gradient(135deg, #1a6ea9 0%, #0d4a75 100%)" }}>
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="mb-0 fw-bold display-6">Complete Your Purchase</h2>
                  <div className="fs-1">🐟</div>
                </div>
              </Card.Header>
              
              <Card.Body className="p-4">
                <Row>
                  <Col md={6} className="mb-4 mb-md-0">
                    <Card className="border-0 shadow-sm h-100 glass-card-inner">
                      <Card.Body className="p-4">
                        <h4 className="text-primary mb-4 fw-bold d-flex align-items-center border-bottom pb-3">
                          <i className="bi bi-receipt me-2 fs-1"></i>Order Summary
                        </h4>
                        
                        <div className="mb-4" style={{ maxHeight: "300px", overflowY: "auto" }}>
                          {cartItems.map((item, index) => (
                            <div key={index} className="mb-3 border-bottom pb-3">
                              <div className="d-flex align-items-center">
                                <div className="bg-light rounded-circle p-2 me-3" style={{ backgroundColor: "#e3f2fd" }}>
                                  <i className="bi bi-droplet text-primary" style={{ fontSize: '1.8rem' }}></i>
                                </div>
                                <div className="flex-grow-1">
                                  <h6 className="mb-0 fw-bold fs-5">{item.name}</h6>
                                  <p className="text-muted mb-0 small">
                                    {item.quantity} kg × KES {item.price.toFixed(2)}
                                  </p>
                                </div>
                                <div className="fw-bold text-end fs-5">
                                  KES {(item.price * item.quantity).toFixed(2)}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="rounded-3 p-4" style={{ background: "linear-gradient(to right, #e3f2fd, #bbdefb)" }}>
                          <div className="d-flex justify-content-between mb-2 fs-5">
                            <span>Subtotal:</span>
                            <span>KES {totalAmount.toFixed(2)}</span>
                          </div>
                          <div className="d-flex justify-content-between mb-2 fs-5">
                            <span>Shipping:</span>
                            <span className="text-success fw-bold">FREE</span>
                          </div>
                          <div className="d-flex justify-content-between fw-bold fs-4 pt-2 border-top">
                            <span>Total:</span>
                            <span className="text-success">KES {totalAmount.toFixed(2)}</span>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  
                  <Col md={6}>
                    <Card className="border-0 shadow-sm h-100 glass-card-inner">
                      <Card.Body className="p-4">
                        <h4 className="text-success mb-4 fw-bold d-flex align-items-center border-bottom pb-3">
                          <i className="bi bi-wallet2 me-2 fs-1"></i>Lipa na M-PESA
                        </h4>
                        
                        {success && (
                          <Alert variant="success" className="rounded-4 border-0 shadow-sm" style={{ background: "linear-gradient(to right, #d4edda, #c3e6cb)" }}>
                            <i className="bi bi-check-circle-fill me-2 fs-4"></i>
                            <span className="fs-5">{success}</span>
                          </Alert>
                        )}
                        
                        {error && (
                          <Alert variant="danger" className="rounded-4 border-0 shadow-sm" style={{ background: "linear-gradient(to right, #f8d7da, #f5c6cb)" }}>
                            <i className="bi bi-exclamation-circle-fill me-2 fs-4"></i>
                            <span className="fs-5">{error}</span>
                          </Alert>
                        )}
                        
                        <Form onSubmit={payNow}>
                          <div className="mb-4 p-4 rounded-3" style={{ background: "linear-gradient(to right, #e8f5e9, #c8e6c9)" }}>
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <span className="text-muted fs-5">Amount Due</span>
                                <h3 className="text-success fw-bold mb-0 mt-1">KES {totalAmount.toFixed(2)}</h3>
                              </div>
                              <div className="fs-1">💰</div>
                            </div>
                          </div>
                          
                          <Form.Group className="mb-4">
                            <Form.Label className="fw-medium fs-5">
                              <i className="bi bi-phone me-1"></i> M-PESA Phone Number
                            </Form.Label>
                            <div className="input-group input-group-lg">
                              <span className="input-group-text bg-light border-end-0 fs-5">
                                +254
                              </span>
                              <Form.Control 
                                type="tel"
                                placeholder="7XXXXXXXX"
                                value={phone}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  if (/^\d*$/.test(value)) {
                                    setPhone(value.slice(0, 9));
                                  }
                                }}
                                required
                                className="form-control-lg border-start-0"
                                style={{ height: "3.5rem" }}
                              />
                            </div>
                            <Form.Text className="text-muted fs-6">
                              Enter your Safaricom number (e.g., 712345678)
                            </Form.Text>
                          </Form.Group>
                          
                          <Button 
                            variant={loading ? "secondary" : "success"} 
                            type="submit"
                            className="w-100 py-3 rounded-pill fw-bold shadow-lg gradient-btn fs-5"
                            disabled={loading}
                            style={{ 
                              background: loading ? "" : "linear-gradient(135deg, #28a745 0%, #1e7e34 100%)",
                              border: "none",
                              height: "3.8rem"
                            }}
                          >
                            {loading ? (
                              <>
                                <span className="spinner-border spinner-border-sm me-2"></span>
                                Processing Payment...
                              </>
                            ) : (
                              <>
                                <i className="bi bi-lock-fill me-2"></i>
                                Pay with M-PESA
                              </>
                            )}
                          </Button>
                        </Form>
                        
                        <div className="mt-4 pt-4 border-top text-center">
                          <div className="d-flex justify-content-center mb-3">
                            <img 
                              src="https://www.safaricom.co.ke/images/mpesa-logo.png" 
                              alt="M-Pesa" 
                              width="140"
                              className="img-fluid"
                            />
                          </div>
                          <div className="d-flex justify-content-center gap-4 mb-4">
                            {['shield-check', 'credit-card', 'clock-history'].map((icon, i) => (
                              <div key={i} className="text-center">
                                <div className="rounded-circle p-3 mb-2" style={{ background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)" }}>
                                  <i className={`bi bi-${icon} text-primary fs-2`}></i>
                                </div>
                                <div className="small fw-medium fs-5">
                                  {icon === 'shield-check' && 'Secure'}
                                  {icon === 'credit-card' && 'Instant'}
                                  {icon === 'clock-history' && '24/7'}
                                </div>
                              </div>
                            ))}
                          </div>
                          <p className="text-muted fs-5 mb-0">
                            You'll receive a payment request on your phone
                          </p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            
            <div className="mt-5 text-center glass-card p-4 rounded-4">
              <p className="text-muted fs-5 mb-4">
                <i className="bi bi-shield-lock me-1 fs-4"></i>
                Your payment is secured with bank-level encryption
              </p>
              <div className="d-flex justify-content-center gap-3">
                {['visa', 'mastercard', 'paypal', 'apple-pay'].map((icon, i) => (
                  <div key={i} className="bg-light p-3 rounded-circle" style={{ width: "60px", height: "60px", backgroundColor: "#e3f2fd" }}>
                    <i className={`bi bi-${icon} fs-3 text-primary`}></i>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Add custom styles for glass effect */}
      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
        }
        
        .glass-card-inner {
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .gradient-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
        }
        
        .gradient-btn:active {
          transform: translateY(1px);
        }
      `}</style>
    </div>
  );
};

export default Makepayment;