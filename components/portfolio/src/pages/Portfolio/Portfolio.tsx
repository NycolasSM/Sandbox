import React from 'react';

import './Portfolio.css'
import PortfolioHeader from './components/PortfolioHeader/PortfolioHeader';
import AddNewSection from './components/AddNewSection/AddNewSection';
import PortfolioFooter from './components/PortfolioFooter/PortfolioFooter';

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio-main-container">
      <PortfolioHeader />
      <AddNewSection />
      <PortfolioFooter />
    </div>
  );
};

export default Portfolio;