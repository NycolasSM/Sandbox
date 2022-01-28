import React from 'react';

import './Portfolio.css'
import PortfolioHeader from './components/PortfolioHeader/PortfolioHeader';

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio-main-container">
      <PortfolioHeader />
    </div>
  );
};

export default Portfolio;