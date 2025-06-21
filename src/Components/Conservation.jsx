// src/components/initiatives/Conservation.jsx
import React from 'react';

const Conservation = () => {
  return (
    <div className="initiative-page">
      <div className="initiative-header">
        <h1>Environmental Conservation Initiative</h1>
        <p>Protecting ecosystems for future generations</p>
      </div>
      
      <div className="initiative-content">
        <div className="row">
          <div className="col-md-6">
            <h2>About Our Conservation Program</h2>
            <p>
              Our conservation initiative focuses on protecting marine and coastal ecosystems through 
              community-led efforts. We empower women to become environmental stewards, leading 
              projects that restore habitats, reduce pollution, and promote sustainable resource use.
            </p>
            <p>
              Participants engage in mangrove restoration, beach cleanups, sustainable fishing 
              practices, and environmental education programs. By involving women in conservation 
              leadership, we create lasting environmental change while building community resilience.
            </p>
            
            <h3>Key Focus Areas</h3>
            <ul>
              <li>Mangrove restoration and protection</li>
              <li>Plastic waste reduction campaigns</li>
              <li>Sustainable fishing practices</li>
              <li>Climate change adaptation strategies</li>
              <li>Environmental education in schools</li>
            </ul>
          </div>
          
          <div className="col-md-6">
            <div className="initiative-image">
              <img 
                src="/images/conservation.jpg" 
                alt="Conservation activities"
                className="img-fluid"
              />
            </div>
            
            <div className="impact-stats">
              <div className="stat-item">
                <h4>50,000+</h4>
                <p>Mangroves Planted</p>
              </div>
              <div className="stat-item">
                <h4>10+</h4>
                <p>Protected Areas</p>
              </div>
              <div className="stat-item">
                <h4>200+</h4>
                <p>Conservation Champions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conservation;