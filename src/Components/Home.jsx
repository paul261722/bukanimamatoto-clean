import React from 'react';
import CarouselSection from './CarouselSection';
import { Container } from 'react-bootstrap';

const Home = () => (
  <div>
    <CarouselSection />
    <Container className="mt-5 text-center">
      <h2 className="fw-bold">Welcome to BUKANI MAMA TOTO</h2>
      <p className="lead">
        We are a community-based women’s group dedicated to fish farming and family nutrition.
        Browse our offerings and see how we’re empowering lives.
      </p>
    </Container>
  </div>
);

export default Home;
