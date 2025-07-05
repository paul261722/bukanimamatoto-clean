// src/components/initiatives/FishFarming.jsx
import React from 'react';

const FishFarming = () => {
  return (
    <div className="initiative-page">
      <div className="initiative-header">
        <h1>Fish Cage Farming Initiative</h1>
        <p>Empowering women through sustainable aquaculture</p>
      </div>
      
      <div className="initiative-content">
        <div className="row">
          <div className="col-md-6">
            <h2>About Our Fish Farming Program</h2>
            <p>
              Our fish cage farming initiative empowers women in coastal communities by providing 
              training, resources, and support for sustainable aquaculture practices. Participants 
              learn modern fish farming techniques that increase productivity while protecting 
              marine ecosystems.
            </p>
            <p>
              Through this program, women gain financial independence, develop valuable skills, 
              and contribute to food security in their communities. We focus on environmentally 
              friendly practices that preserve the delicate balance of our marine ecosystems.
            </p>
            
            <h3>Program Benefits</h3>
            <ul>
              <li>Increased household income for participants</li>
              <li>Sustainable food production</li>
              <li>Skill development in modern aquaculture</li>
              <li>Environmental conservation awareness</li>
              <li>Community-based resource management</li>
            </ul>
          </div>
          
          <div className="col-md-6">
            <div className="initiative-image">
              <img 
                src="/images/fish-farming.jpg" 
                alt="Women participating in fish farming"
                className="img-fluid"
              />
            </div>
            
            <div className="impact-stats">
              <div className="stat-item">
                <h4>250+</h4>
                <p>Women Trained</p>
              </div>
              <div className="stat-item">
                <h4>15</h4>
                <p>Communities Involved</p>
              </div>
              <div className="stat-item">
                <h4>40%</h4>
                <p>Income Increase</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FishFarming;