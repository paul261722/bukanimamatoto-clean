import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems = [], totalAmount = 0 } = location.state || {};

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <Card className="border-0 shadow text-center">
            <Card.Header className="bg-success text-white">
              <h2 className="mb-0">Order Confirmed!</h2>
            </Card.Header>
            <Card.Body className="py-5">
              <i className="bi bi-check-circle-fill text-success" style={{ fontSize: '5rem' }}></i>
              <h2 className="mt-4">Thank You for Your Order</h2>
              
              <div className="mt-4 bg-light p-4 rounded">
                <h4>Order Summary</h4>
                <p className="mb-1">
                  <strong>Items:</strong> {cartItems.length} product{cartItems.length !== 1 ? 's' : ''}
                </p>
                <p className="mb-1">
                  <strong>Total Weight:</strong> {cartItems.reduce((sum, item) => sum + item.quantity, 0).toFixed(2)} kg
                </p>
                <p className="mb-1">
                  <strong>Total Amount:</strong> KES {totalAmount}
                </p>
                <p className="mb-0">
                  <strong>Order #:</strong> {Math.floor(Math.random() * 1000000)}
                </p>
              </div>
              
              <div className="mt-5">
                <p>
                  Your fresh tilapia order is being prepared! We'll contact you with delivery details.
                </p>
                <Button 
                  variant="primary"
                  onClick={() => navigate('/shop')}
                  className="me-2"
                >
                  Continue Shopping
                </Button>
                <Button variant="outline-success">
                  View Order Details
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;