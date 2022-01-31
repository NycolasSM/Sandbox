import React from 'react';

import './PortfolioHeader.css'

import ChoosingLayout from './components/ChossingLayout/ChoosingLayout';

const PortfolioHeader: React.FC = () => {

  return (
    <section className='portfolio-header'>
      <ChoosingLayout />
    </section>
  );
};

export default PortfolioHeader;