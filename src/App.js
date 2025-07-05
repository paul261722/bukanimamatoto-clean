import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar          from './Components/Navbar';
import CarouselSection from './Components/CarouselSection';
import Home            from './Components/Home';
import About           from './Components/About';
import Footer          from './Components/Footer';
import Gallery         from './Components/Gallery'; // ✅ Added import

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      {/* Optional: show on every page */}
      <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/about"   element={<About />} />
        <Route path="/gallery" element={<Gallery />} /> {/* ✅ Added route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
