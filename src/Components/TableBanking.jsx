// src/components/initiatives/TableBanking.jsx
import React from 'react';

const TableBanking = () => {
  return (
    <div className="initiative-page">
      <div className="initiative-header">
        <h1>Table Banking Initiative</h1>
        <p>Financial empowerment through collective savings</p>
      </div>
      
      <div className="initiative-content">
        <div className="row">
          <div className="col-md-6">
            <h2>About Our Table Banking Program</h2>
            <p>
              Our table banking initiative brings women together to pool resources, save collectively, 
              and provide small loans to members. This community-based microfinance model empowers 
              women to start small businesses, invest in education, and build financial security.
            </p>
            <p>
              Participants meet regularly to contribute savings, discuss business ideas, and support 
              each other's entrepreneurial ventures. The program fosters financial literacy, 
              accountability, and mutual support among members.
            </p>
            
            <h3>How It Works</h3>
            <ol>
              <li>Women form groups of 15-30 members</li>
              <li>Regular meetings for savings contributions</li>
              <li>Transparent record-keeping and decision-making</li>
              <li>Small loans issued to members at low interest</li>
              <li>Business training and mentorship</li>
            </ol>
          </div>
          
          <div className="col-md-6">
            <div className="initiative-image">
              <img 
                src="/images/table-banking.jpg" 
                alt="Women participating in table banking"
                className="img-fluid"
              />
            </div>
            
            <div className="impact-stats">
              <div className="stat-item">
                <h4>500+</h4>
                <p>Members Empowered</p>
              </div>
              <div className="stat-item">
                <h4>KES 2.5M+</h4>
                <p>Total Savings</p>
              </div>
              <div className="stat-item">
                <h4>120+</h4>
                <p>Businesses Started</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableBanking;