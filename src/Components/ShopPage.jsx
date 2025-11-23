import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap'; // Added missing imports

const ShopPage = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState('');
  const [cart, setCart] = useState([]); // Added cart definition
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  // Only Raw Whole Tilapia is available
  const product = {
    id: 1,
    name: "Raw Whole Tilapia",
    price: 10.99,
    unit: "kg",
    description: "Freshly caught whole tilapia, cleaned and ready for you to cook as you prefer.",
  };

  const handleAddToCart = () => {
    const qty = parseFloat(quantity);
    if (!qty || qty <= 0) {
      setAlertMessage("Please enter a valid quantity.");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
      return;
    }

    const newItem = {
      ...product,
      quantity: qty,
      total: (product.price * qty).toFixed(2)
    };

    setCart([...cart, newItem]);
    setAlertMessage(`Added ${qty}kg of ${product.name} to cart!`);
    setShowAlert(true);
    setQuantity('');

    setTimeout(() => setShowAlert(false), 3000);
  };

  // Added calculateTotal function
  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + parseFloat(item.total), 0).toFixed(2);
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  // Added handleProceedToPayment function
  const handleProceedToPayment = () => {
    navigate('/makepayment', {
      state: {
        cartItems: cart,
        totalAmount: calculateTotal()
      }
    });
  };

  return (
    <Container className="py-5">
      {/* Success Alert */}
      <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1050 }}>
        <Alert show={showAlert} variant="success" className="shadow-sm" style={{ minWidth: '250px' }}>
          {alertMessage}
        </Alert>
      </div>

      <Row>
        <Col lg={8} className="mx-auto">
          {/* Header Section */}
          <h1 className="display-5 text-center mb-4 fw-bold">🐟 Raw Whole Tilapia</h1>
          <p className="lead text-center mb-5 text-muted">
            Freshly caught daily by our women-led fishing communities.
          </p>

          {/* Product Card */}
          <Card className="border-0 shadow-sm rounded-4 overflow-hidden hover-lift mb-5">
            <div 
              className="bg-primary bg-opacity-10 d-flex align-items-center justify-content-center py-4"
              style={{ minHeight: '180px' }}
            >
              <i className="bi bi-fish display-3 text-primary"></i>
            </div>
            <Card.Body className="d-flex flex-column p-4">
              <h5 className="text-primary mb-2">{product.name}</h5>
              <p className="text-muted small mb-3">{product.description}</p>
              <p className="fw-bold fs-5 text-success mb-4">${product.price.toFixed(2)} / kg</p>
              
              <Form.Group className="mb-3">
                <Form.Label>Quantity (kg)</Form.Label>
                <Form.Control 
                  type="number" 
                  min="0.1"
                  step="0.1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Enter kg"
                  className="form-control-lg"
                />
              </Form.Group>
              
              <Button 
                variant="primary" 
                className="w-100 py-2"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </Card.Body>
          </Card>

          {/* Cart Summary */}
          {cart.length > 0 && (
            <div className="mt-4 p-4 border rounded-4 bg-white shadow-sm">
              <h4 className="mb-3">🛒 Your Cart</h4>
              <ul className="list-group list-group-flush mb-3">
                {cart.map((item, index) => (
                  <li key={index} className="list-group-item px-0 py-3 border-bottom">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <strong>{item.name}</strong> ({item.quantity}kg)
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="text-primary fw-bold me-3">${item.total}</span>
                        <Button variant="link" size="sm" onClick={() => removeFromCart(index)}>
                          Remove
                        </Button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="d-flex justify-content-between align-items-center">
                <strong>Total:</strong>
                <strong className="text-success fs-5">${calculateTotal()}</strong>
              </div>
              <div className="mt-3 d-grid gap-2 d-md-block">
                <Button variant="success" size="lg" onClick={handleProceedToPayment}>
                  Proceed to Payment
                </Button>
                <Button variant="outline-secondary" onClick={() => setCart([])}>
                  Clear Cart
                </Button>
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-5 p-4 bg-light rounded-4 text-center">
            <h3 className="mb-3">Community Supported Fisheries</h3>
            <p className="mb-4">
              Every kilogram purchased directly supports our women fishers and their families.
            </p>
            
            <Button 
              variant="outline-primary"
              onClick={() => navigate('/about')}
            >
              Learn About Our Community
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ShopPage;