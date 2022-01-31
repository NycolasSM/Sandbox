import React from 'react';

import "./PortfolioFooter.css"

import FooterImg from '../../../../assets/footer.png'

const PortfolioFooter: React.FC = () => {
  return (
    <section className='portfolio-footer'>
      <img src={FooterImg} alt="" />
    </section>
  );
};

export default PortfolioFooter;