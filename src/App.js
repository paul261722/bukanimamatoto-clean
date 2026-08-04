import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartProvider'; // Fixed path
import Navbar from './Components/Navbar';
import CarouselSection from './Components/CarouselSection';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';

import Makepayments from './Components/Makepayments';
import ShopPage from './Components/ShopPage';
import About from './Components/About';
import JoinPage from './Components/JoinPage';
import CartPage from './Components/CartPage';
import CheckoutPage from './Components/CheckOutPage'; // Fixed import

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const HomePage = () => (
  <div>
    <CarouselSection />
    <Home />
  </div>
);

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/makepayment" element={<Makepayments />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;