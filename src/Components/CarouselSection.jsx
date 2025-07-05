import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import fish1 from '../assets/fish1.jpg';
import fish2 from '../assets/fish2.jpeg';
import fish3 from '../assets/fish3.jpeg';

const CarouselSection = () => {
  useEffect(() => {
    // Cleanup function for animation classes
    return () => {
      document.querySelectorAll('.carousel-item').forEach(item => {
        item.classList.remove('active');
      });
    };
  }, []);

  return (
    <div className="carousel-wrapper">
      <style jsx="true">{`
        .carousel-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 15px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          margin: 20px;
        }
        
        .image-container {
          position: relative;
          height: 80vh;
          min-height: 600px;
          overflow: hidden;
        }
        
        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 8s ease-out;
        }
        
        .carousel-item.active .image-container img {
          transform: scale(1.1);
        }
        
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%);
        }
        
        .animated-caption {
          bottom: 25%;
          transition: transform 1s ease, opacity 1s ease;
          opacity: 0;
          transform: translateY(30px);
        }
        
        .carousel-item.active .animated-caption {
          opacity: 1;
          transform: translateY(0);
        }
        
        .caption-content {
          max-width: 700px;
          margin: 0 auto;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }
        
        .carousel-caption h3 {
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
          animation: text-pop 0.8s ease-out;
          font-size: 3.5rem;
        }
        
        .carousel-caption p {
          font-size: 1.6rem;
          margin-bottom: 2rem;
          animation: fadeIn 1.2s ease-out;
        }
        
        .cta-button {
          background: linear-gradient(135deg, #2c9af1 0%, #1e62d0 100%);
          border: none;
          padding: 15px 35px;
          border-radius: 50px;
          color: white;
          font-weight: 600;
          font-size: 1.2rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          animation: fadeInUp 1.5s ease-out;
        }
        
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 7px 20px rgba(0,0,0,0.3);
          background: linear-gradient(135deg, #3aa4fd 0%, #2a70e0 100%);
        }
        
        /* Custom controls */
        .carousel-control-prev, 
        .carousel-control-next {
          width: 60px;
          height: 60px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          backdrop-filter: blur(5px);
          margin: 0 20px;
          opacity: 0.7;
          transition: all 0.3s ease;
        }
        
        .carousel-control-prev:hover, 
        .carousel-control-next:hover {
          opacity: 1;
          background: rgba(255,255,255,0.3);
        }
        
        .carousel-control-prev-icon.custom, 
        .carousel-control-next-icon.custom {
          filter: invert(1);
          width: 30px;
          height: 30px;
        }
        
        .carousel-indicators {
          bottom: 30px;
        }
        
        .carousel-indicators button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          margin: 0 8px;
          background-color: rgba(255,255,255,0.5);
          border: 2px solid transparent;
        }
        
        .carousel-indicators .active {
          background-color: white;
          transform: scale(1.3);
        }
        
        /* Animations */
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes text-pop {
          0% { 
            letter-spacing: 3px;
            opacity: 0;
          }
          100% { 
            letter-spacing: normal;
            opacity: 1;
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 992px) {
          .image-container {
            height: 70vh;
            min-height: 500px;
          }
          
          .carousel-caption h3 {
            font-size: 2.8rem;
          }
          
          .carousel-caption p {
            font-size: 1.4rem;
          }
        }
        
        @media (max-width: 768px) {
          .image-container {
            height: 60vh;
            min-height: 400px;
          }
          
          .carousel-caption h3 {
            font-size: 2.2rem;
          }
          
          .carousel-caption p {
            font-size: 1.2rem;
          }
          
          .cta-button {
            padding: 12px 28px;
            font-size: 1.1rem;
          }
          
          .animated-caption {
            bottom: 20%;
          }
        }
        
        @media (max-width: 576px) {
          .image-container {
            height: 50vh;
            min-height: 300px;
          }
          
          .carousel-caption h3 {
            font-size: 1.8rem;
          }
          
          .carousel-caption p {
            font-size: 1rem;
          }
          
          .cta-button {
            padding: 10px 25px;
            font-size: 1rem;
          }
          
          .carousel-control-prev, 
          .carousel-control-next {
            width: 50px;
            height: 50px;
          }
        }
      `}</style>
      
      <Carousel 
        fade 
        interval={5000}
        nextIcon={<span aria-hidden="true" className="carousel-control-next-icon custom" />}
        prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon custom" />}
      >
        <Carousel.Item>
          <div className="image-container">
            <img src={fish1} alt="Fresh fish" />
            <div className="overlay"></div>
          </div>
          <Carousel.Caption className="animated-caption">
            <div className="caption-content">
              <h3>Fresh Catch Daily</h3>
              <p>Locally sourced, community supported</p>
              <button className="cta-button">Shop Now</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="image-container">
            <img src={fish2} alt="Women fish vendors" />
            <div className="overlay"></div>
          </div>
          <Carousel.Caption className="animated-caption">
            <div className="caption-content">
              <h3>Empowering Women</h3>
              <p>Supporting livelihoods through fishing</p>
              <button className="cta-button">Learn More</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="image-container">
            <img src={fish3} alt="Fishing boats" />
            <div className="overlay"></div>
          </div>
          <Carousel.Caption className="animated-caption">
            <div className="caption-content">
              <h3>Community Driven</h3>
              <p>By the women, for the community</p>
              <button className="cta-button">Join Us</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselSection;