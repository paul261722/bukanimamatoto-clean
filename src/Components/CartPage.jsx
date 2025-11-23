import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Table, Button, Form } from 'react-bootstrap';
import { useCart } from '../context/CartProvider';

const CartPage = () => {
  const { items, total, itemCount, updateQuantity, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <Container className="py-5">
      <Row>
        <Col lg={8} className="mb-4">
          <Card className="border-0 shadow">
            <Card.Header className="bg-primary text-white">
              <h2 className="mb-0">Your Tilapia Cart</h2>
            </Card.Header>
            <Card.Body>
              {items.length === 0 ? (
                <div className="text-center py-5">
                  <i className="bi bi-cart-x fs-1 text-muted"></i>
                  <h3 className="mt-3">Your cart is empty</h3>
                  <p className="text-muted">
                    Browse our fresh tilapia selection and add some delicious fish to your cart!
                  </p>
                  <Button 
                    variant="primary"
                    onClick={() => navigate('/shop')}
                  >
                    Shop Tilapia
                  </Button>
                </div>
              ) : (
                <Table responsive hover className="align-middle">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity (kg)</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="bg-light rounded me-3" style={{ width: '60px', height: '60px' }}>
                              <i className="bi bi-fish h-100 d-flex align-items-center justify-content-center fs-4 text-primary"></i>
                            </div>
                            <div>
                              <h6 className="mb-0">{item.name}</h6>
                              <small className="text-muted">{item.description}</small>
                            </div>
                          </div>
                        </td>
                        <td>${item.price.toFixed(2)}/kg</td>
                        <td>
                          <Form.Control
                            type="number"
                            min="0.1"
                            step="0.1"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseFloat(e.target.value))}
                            style={{ width: '100px' }}
                          />
                        </td>
                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                        <td className="text-end">
                          <Button 
                            variant="outline-danger" 
                            size="sm"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <i className="bi bi-trash"></i>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </Card.Body>
          </Card>
          
          {items.length > 0 && (
            <div className="mt-3 d-flex justify-content-between">
              <Button 
                variant="outline-secondary"
                onClick={() => navigate('/shop')}
              >
                <i className="bi bi-arrow-left me-2"></i>Continue Shopping
              </Button>
              <Button 
                variant="danger"
                onClick={clearCart}
              >
                <i className="bi bi-trash me-2"></i>Clear Cart
              </Button>
            </div>
          )}
        </Col>
        
        {items.length > 0 && (
          <Col lg={4}>
            <Card className="border-0 shadow sticky-top" style={{ top: '20px' }}>
              <Card.Header className="bg-light">
                <h3 className="mb-0">Order Summary</h3>
              </Card.Header>
              <Card.Body>
                <div className="d-flex justify-content-between mb-2">
                  <span>Items ({itemCount} kg):</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping:</span>
                  <span>FREE</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Tax:</span>
                  <span>Calculated at checkout</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">Estimated Total:</h5>
                  <h5 className="mb-0">${total.toFixed(2)}</h5>
                </div>
                
                <Button 
                  variant="success" 
                  size="lg" 
                  className="w-100 mt-3"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
                
                <div className="mt-4">
                  <h6 className="text-muted mb-3">Accepted Payment Methods</h6>
                  <div className="d-flex gap-2">
                    {['paypal', 'credit-card', 'bank', 'cash'].map((method) => (
                      <div 
                        key={method}
                        className="bg-light rounded p-2"
                        style={{ width: '50px', height: '35px' }}
                      >
                        <i className={`bi bi-${method}`}></i>
                      </div>
                    ))}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default CartPage;